const GAME_VERSION = '14.1.0';
const SAVE_KEY = 'oneIn46B_session';
const SAVE_VERSION = 1;
const ORGAN_KEYS = ['jaws', 'armor', 'lungs', 'senses', 'locomotion', 'crest'];
let savedRaw = null;
let saveIssue = '';
let saveLocked = false;
let diskAvailable = true;

function toText(zh, en) {
  return state.resolvedLang === 'en' ? en : zh;
}

function escapeHtml(text) {
  return String(text ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function readLegacy(key, accepts, fallback) {
  try {
    const value = localStorage.getItem(key);
    if (value === null) return fallback;
    const parsed = JSON.parse(value);
    if (!accepts(parsed)) throw new Error('Invalid legacy record');
    return parsed;
  } catch {
    saveIssue ||= 'legacy';
    return fallback;
  }
}

const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const isCount = value => Number.isSafeInteger(value) && value >= 0;
const validOrganLevels = value => isObject(value) && ORGAN_KEYS.every(key => isCount(value[key]) && value[key] <= 5);

function loadSession() {
  try {
    savedRaw = localStorage.getItem(SAVE_KEY);
  } catch {
    diskAvailable = false;
    saveIssue = 'unavailable';
    return;
  }
  if (savedRaw === null) return;
  try {
    const data = JSON.parse(savedRaw);
    if (data.version !== SAVE_VERSION) throw new Error('Unsupported version');
    const { phase, life, dynasty, loop, profile } = data;
    const species = life && SPECIES_DB.find(item => item.id === life.species);
    const modifiers = isModernHumanSpecies(species) ? MODERN_WORLD_MODIFIERS_POOL : WORLD_MODIFIERS_POOL;
    const worldModifier = life && modifiers.find(item => item.id === life.worldModifier);
    if (!['idle', 'birthcard', 'active', 'ending'].includes(phase) ||
        !isObject(dynasty) || !isCount(dynasty.generation) || !validOrganLevels(dynasty.inheritedOrgans) ||
        !Array.isArray(dynasty.ancestors) || !Array.isArray(dynasty.inheritedTraits) ||
        !isObject(profile) || !isCount(profile.amber) || !isObject(profile.talents) ||
        !Array.isArray(profile.relics) || !Array.isArray(profile.equipped) ||
        !validLegacyRecords(profile.records) || !Array.isArray(profile.endings) || !Array.isArray(profile.memorials)) {
      throw new Error('Invalid save profile');
    }
    if (phase !== 'idle' && (!species || !worldModifier || !isCount(life.currentTick) || life.totalTicks !== 20 ||
        life.currentTick > life.totalTicks || !validOrganLevels(life.organLevels) ||
        !Array.isArray(life.gridCells) || !Array.isArray(life.chronicle) || !Array.isArray(life.cohorts) ||
        !Array.isArray(life.traits) || !Array.isArray(life.crossroadsHistory) || !Array.isArray(life.usedEventIds) ||
        !Array.isArray(life.completedPauseTriggers) || !isObject(life.pathScores) || !isObject(life.flags) ||
        ![life.vitality, life.energy, life.adaptation, life.lineage].every(value => isCount(value) && value <= 100) ||
        (life.pendingDecision && (!Array.isArray(life.pendingDecision.choices) ||
          !['pause', 'decision'].includes(life.pendingDecision.type) ||
          (life.pendingDecision.type === 'decision' && !isObject(life.pendingDecision.stageData)))) ||
        (phase === 'ending' && (!life.isDead || !profile.records.some(record => record.id === life.recordId))) ||
        (phase !== 'ending' && life.isDead))) {
      throw new Error('Invalid life state');
    }
    if (phase === 'active' && (!isObject(loop) || !isObject(loop.skills) || !isObject(loop.runes) ||
        !isObject(loop.boss) || !Array.isArray(loop.quests) || !Array.isArray(loop.unlockedAlchemy) ||
        !Array.isArray(loop.collectibles) || !Array.isArray(loop.projectiles) || !Array.isArray(loop.bossBullets) ||
        !Array.isArray(loop.bossLoot) || ![loop.dnaPoints, loop.playerLv, loop.exp, loop.rage].every(isCount))) {
      throw new Error('Invalid stage state');
    }
    Object.assign(state, {
      sessionPhase: phase,
      activeLife: phase === 'idle' ? null : { ...life, species, worldModifier },
      dynasty,
      gameLoop: phase === 'active' ? loop : state.gameLoop,
      amberCrystals: profile.amber,
      metaTalents: profile.talents,
      unlockedRelics: profile.relics,
      equippedRelics: profile.equipped,
      pastLives: profile.records,
      unlockedEndings: profile.endings,
      memorials: profile.memorials,
      seenEventIds: Array.isArray(data.seenEventIds) ? data.seenEventIds : []
    });
    const settings = data.settings || {};
    state.selectedInnateId = settings.innate || state.selectedInnateId;
    state.isPaused = Boolean(settings.paused);
    state.autoChoice = Boolean(settings.autoChoice);
    state.gentleMode = Boolean(settings.gentleMode);
    state.xrayMode = Boolean(settings.xrayMode);
    state.speedMultiplier = [1, 2, 4, 8].includes(settings.speed) ? settings.speed : 1;
    state.paceMs = [1100, 1500, 1600, 2200, 2400, 3000, 3500, 3800, 4200].includes(settings.pace) ? settings.pace : 2200;
    for (const key of ['stageWeatherMode', 'stageEnemyEmoji', 'stageEnemyLabel', 'stageSceneType', 'lastUpgradedOrgan']) {
      if (typeof data.stage?.[key] === 'string') state[key] = data.stage[key];
    }
    state.enableDestinyRoulette = settings.roulette !== false;
    saveIssue = '';
  } catch {
    saveIssue = 'corrupt';
    saveLocked = true;
  }
}

function saveSession() {
  if (saveLocked || !diskAvailable) return false;
  const phase = state.sessionPhase || 'idle';
  const life = state.activeLife;
  const data = {
    version: SAVE_VERSION,
    phase,
    life: phase === 'idle' ? null : { ...life, species: life.species.id, worldModifier: life.worldModifier.id },
    dynasty: state.dynasty,
    loop: phase === 'active' ? state.gameLoop : null,
    profile: {
      amber: state.amberCrystals, talents: state.metaTalents, relics: state.unlockedRelics,
      equipped: state.equippedRelics, records: state.pastLives.slice(0, 15),
      endings: state.unlockedEndings, memorials: state.memorials.slice(0, 30)
    },
    settings: {
      innate: state.selectedInnateId, paused: state.isPaused, speed: state.speedMultiplier, pace: state.paceMs,
      gentleMode: state.gentleMode, autoChoice: state.autoChoice, xrayMode: state.xrayMode,
      roulette: document.getElementById('enableDestinyRouletteToggle').checked
    },
    stage: {
      stageWeatherMode: state.stageWeatherMode, stageEnemyEmoji: state.stageEnemyEmoji,
      stageEnemyLabel: state.stageEnemyLabel, stageSceneType: state.stageSceneType, lastUpgradedOrgan: state.lastUpgradedOrgan
    },
    seenEventIds: state.seenEventIds.slice(-100)
  };
  try {
    const actual = localStorage.getItem(SAVE_KEY);
    if (actual !== savedRaw) {
      reportSaveConflict();
      return false;
    }
    const next = JSON.stringify(data);
    if (next !== savedRaw) localStorage.setItem(SAVE_KEY, next);
    savedRaw = next;
    if (saveIssue === 'unavailable') saveIssue = '';
    return true;
  } catch {
    if (saveIssue !== 'unavailable') {
      saveIssue = 'unavailable';
      showToast(toText('存档写入失败，可以返回大厅导出最近一次成功保存的进度。', 'Saving failed. Return to the lobby to export the last saved checkpoint.'));
    }
    return false;
  }
}

function reportSaveConflict() {
  if (saveIssue === 'conflict') return;
  saveLocked = true;
  saveIssue = 'conflict';
  state.isPaused = true;
  stopSimTimer();
  updateSaveLobby();
  showToast(toText('另一个标签页已更新存档。刷新后可继续。', 'Another tab updated the save. Reload to resume.'));
}

function updateSaveLobby() {
  const card = document.getElementById('saveLobbyCard');
  const message = document.getElementById('saveLobbyMessage');
  const resume = document.getElementById('continueLifeBtn');
  const download = document.getElementById('exportSaveBtn');
  const life = state.activeLife;
  const canResume = life && state.sessionPhase !== 'idle' && saveIssue !== 'conflict';
  const canExport = savedRaw !== null;
  card.classList.toggle('hidden', !saveIssue && !canResume && !canExport);
  resume.classList.toggle('hidden', !canResume);
  download.classList.toggle('hidden', !canExport);
  resume.textContent = state.sessionPhase === 'ending'
    ? toText('查看上一世结局', 'View the last ending')
    : toText('继续当前生命', 'Continue life');
  download.textContent = toText('导出存档', 'Export save');
  const alerts = {
    corrupt: toText('当前存档损坏或版本无法读取。原始数据可导出，开新局前会保留一份恢复副本。', 'This save is damaged or uses a different version. You can export it. Starting anew keeps a recovery copy.'),
    unavailable: toText('浏览器存储不可用，进度可能无法保存。', 'Browser storage is unavailable. Progress may not be saved.'),
    legacy: toText('部分旧版档案无法读取。原始旧版数据仍保留在本机。', 'Some older records could not be read. The original data remains on this device.'),
    conflict: toText('另一个标签页已更新存档。请刷新页面。', 'Another tab updated your save. Reload this page.')
  };
  message.textContent = alerts[saveIssue] || (life
    ? toText(`${life.species.name} · 第 ${life.generation} 世 · 阶段 ${life.currentTick}/${life.totalTicks}`,
      `${speciesName(life.species)} · Generation ${life.generation} · Stage ${life.currentTick}/${life.totalTicks}`)
    : canExport ? toText('账户进度已保存。', 'Account progress saved.') : '');
}

function allowNewLife() {
  if (saveIssue === 'conflict') {
    updateSaveLobby();
    return false;
  }
  if (saveIssue === 'corrupt') {
    if (!window.confirm(toText('保留恢复副本并开始新局？', 'Keep a recovery copy and start a new life?'))) return false;
    try {
      localStorage.setItem(`${SAVE_KEY}_recovery_${Date.now()}`, savedRaw);
    } catch {
      showToast(toText('恢复副本写入失败，请先导出原始存档。', 'Could not write a recovery copy. Export the original save first.'));
      return false;
    }
    saveLocked = false;
    saveIssue = '';
  }
  if (state.activeLife && !state.activeLife.isDead && (state.sessionPhase === 'active' || state.simSubview === 'lobby')) {
    return window.confirm(toText('新开一生会替换当前未完成的生命。继续吗？', 'Starting a new life replaces your unfinished life. Continue?'));
  }
  return true;
}

function continueSavedLife() {
  const life = state.activeLife;
  if (!life || saveIssue === 'conflict') return;
  switchMainView('sim');
  switchSimSubview(state.sessionPhase);
  if (state.sessionPhase === 'birthcard') renderBirthRegistrationCard();
  if (state.sessionPhase === 'active') {
    updateSpeedUI();
    initStageParticles();
    renderActiveDashboard();
    renderV11BountyQuests();
    startStageAnimationLoop();
    scheduleNextTick();
  }
  if (state.sessionPhase === 'ending') renderEndingReport(state.pastLives.find(record => record.id === life.recordId));
}

const dialogSelector = '#customModalOverlay, #viralPosterModal, #destinyRouletteModal, #bossLootModal';
const dialogOrigins = new WeakMap();

function openGameDialog(dialog) {
  dialogOrigins.set(dialog, document.activeElement);
  dialog.classList.remove('hidden');
  const field = dialog.querySelector('textarea:not([readonly]), input:not([readonly])');
  (field || dialog.querySelector('button:not([disabled])') || dialog).focus({ preventScroll: true });
}

function closeGameDialog(dialog) {
  dialog.classList.add('hidden');
  const origin = dialogOrigins.get(dialog);
  dialogOrigins.delete(dialog);
  if (origin?.isConnected && origin.getClientRects().length) origin.focus({ preventScroll: true });
}

function visibleGameDialog() {
  return [...document.querySelectorAll(dialogSelector)].findLast(dialog => !dialog.classList.contains('hidden'));
}

function modalIsOpen() {
  return Boolean(document.querySelector('#customModalOverlay:not(.hidden), #viralPosterModal:not(.hidden), #destinyRouletteModal:not(.hidden), #bossLootModal:not(.hidden)'));
}

function handleDialogKeyboard(event) {
  if (event.key !== 'Escape' && event.key !== 'Tab') return;
  const dialog = visibleGameDialog();
  if (!dialog) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    const closeButton = {
      customModalOverlay: 'closeModalBtn',
      viralPosterModal: 'closeViralPosterModalBtn',
      destinyRouletteModal: 'skipRouletteAnimBtn',
      bossLootModal: 'closeBossLootBtn'
    }[dialog.id];
    document.getElementById(closeButton)?.click();
    return;
  }
  const stops = [...dialog.querySelectorAll('button, a[href], input, select, textarea, [tabindex]')]
    .filter(element => element.tabIndex >= 0 && !element.disabled && element.getClientRects().length);
  const index = stops.indexOf(document.activeElement);
  if (index < 0 || (event.shiftKey ? index === 0 : index === stops.length - 1)) {
    event.preventDefault();
    (event.shiftKey ? stops.at(-1) : stops[0])?.focus();
  }
}

function combatIsRunning() {
  return state.currentView === 'sim' && state.simSubview === 'active' && !state.isPaused &&
    !document.hidden && !modalIsOpen() && !saveLocked && state.activeLife && !state.activeLife.isDead;
}

function validHotkey(event) {
  return !event.isComposing && !event.altKey && !event.ctrlKey && !event.metaKey &&
    !event.target?.closest?.('input, textarea, select, [contenteditable="true"]');
}

function bindSessionEvents() {
  document.addEventListener('keydown', handleDialogKeyboard);
  document.getElementById('continueLifeBtn').addEventListener('click', continueSavedLife);
  document.getElementById('exportSaveBtn').addEventListener('click', () => {
    if (savedRaw === null) return;
    const url = URL.createObjectURL(new Blob([savedRaw], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = '46b-save.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  document.getElementById('customIndividualNameInput').addEventListener('input', event => {
    if (state.simSubview !== 'birthcard' || saveLocked) return;
    state.activeLife.customName = event.target.value.slice(0, 30);
    saveSession();
  });
  document.getElementById('philosophicalNoteInput').addEventListener('input', event => {
    const decision = state.activeLife?.pendingDecision;
    if (decision?.type === 'pause') {
      decision.note = event.target.value.slice(0, 300);
      saveSession();
    }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopSimTimer();
      state.commitDecision?.();
      saveSession();
      if (state.audioCtx?.state === 'running') state.audioCtx.suspend().catch(() => {});
    } else {
      if ((state.audioEnabled || state.bgmPlaying) && state.audioCtx?.state === 'suspended') {
        state.audioCtx.resume().catch(() => {});
      }
      scheduleNextTick();
    }
  });
  window.addEventListener('pagehide', () => {
    state.commitDecision?.();
    saveSession();
  });
  window.addEventListener('storage', event => {
    if ((event.key === SAVE_KEY || event.key === null) && event.newValue !== savedRaw) reportSaveConflict();
  });
  setInterval(() => {
    if (combatIsRunning() || (state.sessionPhase === 'active' && !document.hidden && !saveLocked)) saveSession();
  }, 1250);
}
