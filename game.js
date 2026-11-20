// ==================== 1. 12 DISTINCT LIFE ENDINGS DATABASE ====================
const ENDINGS_CATALOG = [
  {
    id: 'apex_monarch',
    title: '👑 绝代霸主 · 食物链之巅',
    badge: '霸主终局',
    color: 'rose',
    reqDesc: '【掠食霸主路线】主导 (≥32点) 且存活至暮年',
    lore: '你用满级进化的碎骨巨颚、重甲背棘与无可匹敌的威压统治了整片古生态猎场。在你巡弋的疆域内，所有捕食者皆退避三舍，你的名字被刻在食物链的最顶端。'
  },
  {
    id: 'dynasty_progenitor',
    title: '🌳 万代始祖 · 血脉昌盛',
    badge: '繁衍终局',
    color: 'purple',
    reqDesc: '【群落始祖路线】主导或跨世代血脉延续 ≥ 2 世且子嗣昌盛',
    lore: '你将一生心血倾注于群落守望与后代抚育。当你安然闭上双眼时，继承了你优良器官基因的子孙后代已开启第2世、第3世的漫长王朝，血脉永不断绝！'
  },
  {
    id: 'evolutionary_pioneer',
    title: '🚀 跨界先驱 · 改写演化史',
    badge: '先驱终局',
    color: 'cyan',
    reqDesc: '【异端突变路线】主导且心肺/运动器官突破物种基因天花板',
    lore: '你敢于踏足同类视为禁区的未知领域，演化出原始双肺、温血心脏与支撑腕骨。你迈出的一小步，直接开启了地球生命宏演化史的新纪元！'
  },
  {
    id: 'cataclysm_survivor',
    title: '☄️ 末日守望 · 穿越浩劫',
    badge: '传奇幸存',
    color: 'amber',
    reqDesc: '持有跨界/避难基因性状并在大灭绝灾变阶段逆天改命',
    lore: '当火山灰遮蔽苍穹、小行星烈焰焚毁森林、90%的物种成批倒下时，你凭借高度发达的心肺与感官器官带领最后火种穿越了炼狱寒冬！'
  },
  {
    id: 'martyr_parent',
    title: '🕯️ 悲壮护雏 · 母体绝唱',
    badge: '感人至深',
    color: 'purple',
    reqDesc: '在危机或暮年选择牺牲自身体魄/能量以保全后代存续（可继续进入下一世！）',
    lore: '在残酷的自然法则面前，你用自己的血肉之躯为幼崽挡下了致命的风暴与利爪。你的个体虽定格于此，但你留下的子嗣将带着你的遗传器官继续开启下一世！'
  },
  {
    id: 'living_fossil',
    title: '🕰️ 深渊隐士 · 跨世纪活化石',
    badge: '不朽长寿',
    color: 'emerald',
    reqDesc: '习得低代谢/深渊隐修性状，以极高体魄走完完整20阶段',
    lore: '你远离无谓的争霸与内耗，在幽暗深海或秘境冰原将心肺代谢调控至极致。沧海桑田、王朝更替，你在近乎凝固的时光里活成了见证地球变迁的活化石。'
  },
  {
    id: 'museum_masterpiece',
    title: '🪨 传世奇珍 · 博物馆镇馆之宝',
    badge: '万中无一',
    color: 'amber',
    reqDesc: '终局触发特异埋藏（Lagerstätte）并成功通过化石检定',
    lore: '你的遗骸在终结瞬间沉入了缺氧细腻的石灰泥或深海页岩。跨越亿万年时光，人类科学家将你完好无损的骨骼与羽印陈列在自然历史博物馆正中央，举世惊叹！'
  },
  {
    id: 'symbiotic_architect',
    title: '🤝 共生伊甸 · 生态建筑师',
    badge: '生态基石',
    color: 'emerald',
    reqDesc: '持有【共生庇护】或【造礁/工程基石】性状并圆满走完一生',
    lore: '你不仅自己活了下来，更用躯体与群落构建起叠层石礁、珊瑚花园或猛犸草原，为成百上千种伴生物种撑起了一座生机勃勃的伊甸园。'
  },
  {
    id: 'nemesis_reckoning',
    title: '⚔️ 宿命死斗 · 霸主绝唱',
    badge: '铁血宿命',
    color: 'rose',
    reqDesc: '与宿敌展开终极决战并在搏杀中流尽最后一滴血',
    lore: '你的一生从不向任何强敌低头！在与宿命对手惊天动地的巅峰搏杀中，你们的骨骼紧紧咬合在一起被泥沙掩埋，化作古生物学史上最震撼的“搏斗化石”。'
  },
  {
    id: 'type_iii_statistic',
    title: '🍂 破壳折损 · 残酷自然统计',
    badge: '生态真相',
    color: 'slate',
    reqDesc: '在幼年期（前6阶段）因高折损率或天敌突袭不幸夭折',
    lore: '这片栖息地留给幼体的生机很少。你没能等到第一次换季；那些活到成年、继续繁衍的同类，已经跨过了许多难关。'
  },
  {
    id: 'era_elegy',
    title: '🌪️ 断代挽歌 · 血脉绝响',
    badge: '断代灭绝',
    color: 'rose',
    reqDesc: '在尚未繁衍出任何子嗣前中途暴毙，导致家族血脉彻底断绝',
    lore: '一步踏错，满盘皆输！因为在这场残酷的生存博弈中未能留下任何存活后代便提前陨落，你家族延续至今的基因火种在此刻彻底熄灭，化作演化史上的盲端。'
  },
  {
    id: 'circle_of_gaia',
    title: '🌊 化作春泥 · 万物循环',
    badge: '自然本真',
    color: 'teal',
    reqDesc: '以均衡流派走完一生，物质回归大地与大洋生态圈',
    lore: '一鲸落而万物生，一叶落而知天下秋。你平静而认真地走完了属于你的生命刻度，体内的碳、氮与钙原子重归山海，继续流淌在地球46亿年的脉搏里。'
  }
];

// ==================== 2. SIX CONCRETE ANATOMICAL ORGAN SYSTEMS (具象化器官发育系统) ====================
const ORGAN_SYSTEMS_META = [
  {
    key: 'jaws',
    name: '🦷 捕食颚齿/附肢',
    stages: ['Lv.0 初生口器', 'Lv.1 锋利咬合刃', 'Lv.2 锯齿碎骨巨颚', 'Lv.3 弑神断头台巨颚'],
    visualDesc: '画布头部直接长出外露锯齿利牙/带刺巨型捕食附肢，撕咬时触发猩红裂空光弧'
  },
  {
    key: 'armor',
    name: '🛡️ 背脊骨板/外甲',
    stages: ['Lv.0 柔软表皮', 'Lv.1 硬化角质鳞', 'Lv.2 厚重钙化骨板', 'Lv.3 泰坦反伤棘刺甲'],
    visualDesc: '画布背部逐层生长出金属质感骨板与锋利背棘，大幅抵消天敌扑击伤害'
  },
  {
    key: 'lungs',
    name: '🫁 心肺与温血代谢',
    stages: ['Lv.0 被动扩散', 'Lv.1 强化鳃/气管网', 'Lv.2 原始双肺泡囊', 'Lv.3 四腔恒温高能心'],
    visualDesc: 'X光透视下胸腔浮现高频搏动的赤红四腔心脏与扩张发光的双肺泡、金色血管网'
  },
  {
    key: 'senses',
    name: '👁️ 复眼晶格/声呐',
    stages: ['Lv.0 基础感光点', 'Lv.1 敏锐嗅视神经', 'Lv.2 方解石复眼/声呐', 'Lv.3 全景预判神经核'],
    visualDesc: '头部浮现高耸发光的方解石复眼网格与向外扩散的生物电感/声呐探测波环'
  },
  {
    key: 'locomotion',
    name: '🦵 支撑腕骨/飞羽翼',
    stages: ['Lv.0 蠕动漂流', 'Lv.1 强健推进尾肌', 'Lv.2 陆生腕骨/滑翔翼', 'Lv.3 超音速鞭尾/巨翼'],
    visualDesc: '鱼鳍内长出清晰五指腕骨支撑陆地行走、背部展开双翼飞羽或尾端形成音爆环'
  },
  {
    key: 'crest',
    name: '🌺 求偶华冠/信息素',
    stages: ['Lv.0 独行个体', 'Lv.1 聚集信息素腺', 'Lv.2 绚丽骨质高冠', 'Lv.3 万族共鸣帝王冠'],
    visualDesc: '头顶生长出流光溢彩的求偶骨冠，并吸引多只具象绘制的子代幼崽实时跟随'
  }
];

// ==================== 3. EIGHT RANDOMIZED WORLD PALEO-CLIMATE MODIFIERS ====================
const WORLD_MODIFIERS_POOL = [
  {
    id: 'mod_oxygen_boom',
    name: '🌿 富氧巨物化黄金期',
    desc: '本世大气/水体溶氧极度充沛！能量恢复+3，且更容易演化出【巨物化体魄】与高等级运动器官。',
    effect: { de: 3, dv: 1, da: 2, dl: 0 }
  },
  {
    id: 'mod_predator_frenzy',
    name: '🩸 远古掠食者狂潮',
    desc: '本世生态圈天敌数量翻倍！危机四伏（体魄每阶段-1），但击败强敌获得的颚齿进化与霸主点数大幅提升！',
    effect: { de: 0, dv: -1, da: 3, dl: 0 }
  },
  {
    id: 'mod_volcanic_active',
    name: '🌋 地幔热柱活跃期',
    desc: '海底热泉与陆地火山频繁喷发，温室效应加剧。考验【心肺代谢】与耐热基因，异端突变收益提升！',
    effect: { de: -1, dv: 0, da: 4, dl: 0 }
  },
  {
    id: 'mod_ice_front',
    name: '❄️ 极地冰盖寒潮扩张',
    desc: '全球均温下降，食物分布稀疏（能量消耗加快），唯有抱团取暖或演化恒温毛发方能度过寒冬！',
    effect: { de: -2, dv: 1, da: 2, dl: 3 }
  },
  {
    id: 'mod_cosmic_mutation',
    name: '🌠 宇宙射线高突变洗礼',
    desc: '地磁极反转期，高能射线穿透大气层！基因突变概率翻倍，适应度每阶段自动+3，极易突破70分天花板！',
    effect: { de: 0, dv: -1, da: 4, dl: 1 }
  },
  {
    id: 'mod_fertility_spring',
    name: '🌺 万物繁盛求偶潮',
    desc: '气候温暖湿润，初级生产力爆表！本世求偶与育幼成功率极高，极易繁衍多胎子代延续下一世血脉！',
    effect: { de: 2, dv: 1, da: 0, dl: 4 }
  }
];

// ==================== 4. INNATE TRAITS AT BIRTH (Directly upgrades initial organs!) ====================
const INNATE_TRAIT_OPTIONS = [
  {
    id: 'innate_tyrant',
    name: '⚔️ 先天掠食狂暴基因',
    path: 'tyrant',
    badge: '🦷颚齿Lv+1 · 霸主+12',
    desc: '天生颌部/附肢肌肉爆发力惊人！开局直接点亮【🦷捕食颚齿 Lv.1】，画布生物长出锋利外露利齿/捕食大爪！',
    dv: 8, de: 6, da: 2, dl: 0,
    organBoost: 'jaws',
    trait: { id: 't_sharp_fangs', name: '🦷 先天利齿巨颚', type: 'tyrant', desc: '颚部捕食器官天生强化，撕咬检定胜率+15%' }
  },
  {
    id: 'innate_dynasty',
    name: '🧬 先天氏族华冠基因',
    path: 'dynasty',
    badge: '🌺华冠Lv+1 · 繁衍+12',
    desc: '天生头顶发育绚丽求偶表征与高亲和信息素腺！开局点亮【🌺求偶华冠 Lv.1】，且自带1只伴生子代/手足！',
    dv: 4, de: 4, da: 2, dl: 12,
    organBoost: 'crest',
    trait: { id: 't_kin_aura', name: '🌺 先天求偶华冠', type: 'dynasty', desc: '求偶与群落召集成功率+20%，极易延续多世血脉' }
  },
  {
    id: 'innate_pioneer',
    name: '🌌 先天跨界心肺/复眼基因',
    path: 'pioneer',
    badge: '🫁心肺/👁️感官Lv+1',
    desc: '基因组具备跨界可塑性！开局直接点亮【🫁心肺代谢 Lv.1】与【👁️复眼感官 Lv.1】，突破70分适应度天花板！',
    dv: 2, de: 4, da: 12, dl: 2,
    organBoost: 'lungs',
    trait: { id: 't_mutant_gene', name: '🫁 先天跨界心肺', type: 'pioneer', desc: '突破物种基因上限，解锁水陆/极寒跨界演化隐藏路线' }
  }
];

// ==================== 4B. MODERN HUMAN (1 IN 8 BILLION / 80亿分之一) REALISTIC LIFE & KAIROSOFT HOME SYSTEM ====================
function isModernHumanSpecies(spOrId) {
  const id = typeof spOrId === 'string' ? spOrId : (spOrId && spOrId.id);
  return id === 'modern_human';
}

function isCivilizationHumanSpecies(spOrId) {
  const id = typeof spOrId === 'string' ? spOrId : (spOrId && spOrId.id);
  return ['modern_human', 'ancient_human'].includes(id);
}

const MODERN_ORGAN_SYSTEMS_META = [
  {
    key: 'jaws',
    name: '💼 事业与职级',
    stages: ['Lv.0 在读学子', 'Lv.1 职场新锐/独立创客', 'Lv.2 核心总监/创业合伙人', 'Lv.3 行业领军者/上市创始人'],
    visualDesc: '房间陈设随职业进展变化：单屏办公电脑 ➔ 双屏工作站 ➔ 职业荣誉陈列柜'
  },
  {
    key: 'armor',
    name: '🏠 房产与座驾',
    stages: ['Lv.0 父母温馨卧室', 'Lv.1 都市阳光青年公寓', 'Lv.2 精装学区三居室+轿车', 'Lv.3 传世大平层/花园别墅+跑车'],
    visualDesc: '等距房间面积与装修实时升级，门外车道解锁代步自行车 ➔ 家用轿车 ➔ 红色豪华跑车'
  },
  {
    key: 'lungs',
    name: '🏃 身心与健康',
    stages: ['Lv.0 稚嫩孩童体格', 'Lv.1 阳光运动青年', 'Lv.2 马拉松自律达人', 'Lv.3 百岁硬朗不老松'],
    visualDesc: '在房间内添置室内跑步机、绿植氧吧，角色精神饱满度与抗压能力大幅提升'
  },
  {
    key: 'senses',
    name: '🎓 学识与学历',
    stages: ['Lv.0 启蒙识字期', 'Lv.1 省重点高中学霸', 'Lv.2 顶尖名校硕士/学士', 'Lv.3 殿堂级博士/学术泰斗'],
    visualDesc: '在房间内添置台灯书桌、满墙实木书柜、名校毕业证书与博士金穗礼帽'
  },
  {
    key: 'locomotion',
    name: '🌟 才艺与声望',
    stages: ['Lv.0 邻里乖巧孩童', 'Lv.1 校园风云才子', 'Lv.2 行业知名大V/代表作', 'Lv.3 时代记忆符号'],
    visualDesc: '在房间内添置黑色三角钢琴、画架与环球旅行风景挂画'
  },
  {
    key: 'crest',
    name: '❤️ 婚恋与家庭',
    stages: ['Lv.0 懵懂独身期', 'Lv.1 心动初恋/热恋伴侣', 'Lv.2 步入婚姻殿堂', 'Lv.3 儿女双全·四世同堂'],
    visualDesc: '等距房间内真实入住你的挚爱配偶、摆放双人婚床与婴儿床，孩子们在屋内读书玩耍'
  }
];

function getActiveOrganMetaList(sp) {
  return isModernHumanSpecies(sp) ? MODERN_ORGAN_SYSTEMS_META : ORGAN_SYSTEMS_META;
}

const MODERN_INNATE_TRAIT_OPTIONS = [
  {
    id: 'innate_pioneer',
    name: '🎓 【天生学霸 · 数理逻辑超群】',
    path: 'pioneer',
    badge: '🎓学识Lv+1 · 科研先驱+12',
    desc: '从小对数字、代码与科学充满好奇，专注力惊人！开局直接点亮【🎓学识与学历 Lv.1】，房间配备实木书架与台灯课桌，升学大考胜率大幅提升！',
    dv: 4, de: 6, da: 14, dl: 4,
    organBoost: 'senses',
    trait: { id: 't_modern_genius', name: '🎓 天生数理英才', type: 'pioneer', desc: '小升初、中考、高考与科研攻关检定大幅加成' }
  },
  {
    id: 'innate_tyrant',
    name: '💼 【商海奇才 · 领导力与财商觉醒】',
    path: 'tyrant',
    badge: '💼事业Lv+1 · 商业领袖+12',
    desc: '思维敏捷、敢想敢干，从小展现出非凡的组织力与商业嗅觉！开局点亮【💼事业与职级 Lv.1】与【🏠房产与座驾 Lv.1】，极易实现财富自由！',
    dv: 6, de: 14, da: 6, dl: 2,
    organBoost: 'jaws',
    trait: { id: 't_modern_leader', name: '💼 时代商业嗅觉', type: 'tyrant', desc: '创业、晋升与家庭资产投资回报率+25%' }
  },
  {
    id: 'innate_dynasty',
    name: '❤️ 【温暖社牛 · 艺术才华与万人迷】',
    path: 'dynasty',
    badge: '❤️家庭Lv+1 · 幸福世家+12',
    desc: '性格开朗共情力极强，兼具音乐绘画灵气！开局点亮【❤️婚恋与家庭 Lv.1】，从小收获青梅竹马与挚友扶持，家庭幸福感爆棚！',
    dv: 8, de: 6, da: 4, dl: 14,
    organBoost: 'crest',
    trait: { id: 't_modern_charisma', name: '❤️ 万人迷温暖气场', type: 'dynasty', desc: '恋爱表白、婚姻美满度与子女教育成功率+25%' }
  }
];

function getActiveInnateOptions(sp) {
  return isModernHumanSpecies(sp) ? MODERN_INNATE_TRAIT_OPTIONS : INNATE_TRAIT_OPTIONS;
}

// 1in8b.life Authentic Modern Birth Lottery & Era Modifiers
const MODERN_WORLD_MODIFIERS_POOL = [
  {
    id: 'mod_war_refugee',
    tierCode: 'war_poverty',
    shortLabel: '🏚️ 战乱与赤贫边陲 (地狱难度)',
    name: '🏚️ 战火与极度赤贫区 · 铁皮帐篷家庭',
    city: '战乱冲突边境 / 极度贫困缺水区',
    family: '父母在断壁残垣间靠搬运与救济粮维生，夜晚常有停电与远处的轰鸣',
    gdpText: '日均生活费 < $2.15 (极度赤贫线)',
    collegeRate: '高等教育率 < 6% · 医疗极度匮乏',
    baseVitality: 56,
    baseEnergy: 34,
    baseAdapt: 32,
    baseLineage: 72,
    hazardRate: 0.16,
    desc: '你出生在一个受冲突影响的虚构家庭。一场没有退烧药的童年高烧、一次饮水污染或流弹，都可能让你的人生戛然而止。活下去，本身就是一场奇迹。',
    effect: { de: -3, dv: -3, da: 0, dl: 2 }
  },
  {
    id: 'mod_rural_leftbehind',
    tierCode: 'mountain_village',
    shortLabel: '⛰️ 偏远深山村落 (困苦难度)',
    name: '⛰️ 偏远大山深处 · 留守务农家庭',
    city: '西南深山村寨 / 内陆偏远农乡',
    family: '父母常年在两千公里外的工地与制衣厂打工，你与满头白发的奶奶在土坯房相依为命',
    gdpText: '家庭年收入 ¥18,000 · 靠天吃饭',
    collegeRate: '本科率 14% · 每天走十里山路上学',
    baseVitality: 68,
    baseEnergy: 44,
    baseAdapt: 40,
    baseLineage: 76,
    hazardRate: 0.08,
    desc: '每年只有除夕能见到背着蛇皮袋回家的爸妈。读书是你走出大山的唯一独木桥，但父母积劳成疾与家境窘迫时刻牵动着你的心。',
    effect: { de: -1, dv: -1, da: 1, dl: 2 }
  },
  {
    id: 'mod_modern_small_town',
    tierCode: 'small_town',
    shortLabel: '🍜 县城烟火工薪 (普通难度)',
    name: '🍜 南方老街县城 · 清晨早点铺家庭',
    city: '中国 · 三四线烟火小城老街',
    family: '父母每天凌晨三点半起来生炉子炸油条、磨豆浆，手上满是烫伤与冻疮，却从没少过你的零花钱',
    gdpText: '人均可支配收入 ¥38,000/年',
    collegeRate: '本科率 42% · 凡人烟火冷暖自知',
    baseVitality: 76,
    baseEnergy: 58,
    baseAdapt: 48,
    baseLineage: 78,
    hazardRate: 0.04,
    desc: '没有显赫背景，父母用弯曲的脊背为你撑起一方晴空。你将在高考独木桥、异乡打拼、35岁职场危机与父母老去的病床前体会最真实的人间悲欢。',
    effect: { de: 0, dv: 0, da: 1, dl: 2 }
  },
  {
    id: 'mod_modern_tier1_scholar',
    tierCode: 'metro_middle',
    shortLabel: '🏙️ 一线都市中产 (内卷难度)',
    name: '🏙️ 一线繁华都市 · 双职工工程师/教师家庭',
    city: '上海 / 深圳 / 杭州 核心城区',
    family: '父母是重点中学教师与工程师，家里有一整面墙的书柜，但也背负着高昂房贷与升学焦虑',
    gdpText: '人均可支配收入 ¥92,000/年',
    collegeRate: '本科率 72% · 高强度竞争内卷',
    baseVitality: 78,
    baseEnergy: 74,
    baseAdapt: 62,
    baseLineage: 68,
    hazardRate: 0.025,
    desc: '从小衣食无忧、视野开阔，但从重点小学到996写字楼，你始终置身于高速运转的履带之上，稍有不慎便会面临高压过劳与精神透支。',
    effect: { de: 2, dv: -1, da: 2, dl: 1 }
  },
  {
    id: 'mod_modern_nordic_tokyo',
    tierCode: 'nordic_elite',
    shortLabel: '❄️ 北欧/都会世家 (幸运难度)',
    name: '❄️ 高福利发达都会 · 跨国学者与优渥世家',
    city: '斯德哥尔摩 / 苏黎世 / 跨国世家',
    family: '父母从事尖端科研与跨国文化投资，终身免费医疗与教育基金完备，尊重你的每一次人生试错',
    gdpText: '富足家庭 · 教育与医疗资源充裕',
    collegeRate: '高等教育率 86%+ · 自由探索人生',
    baseVitality: 88,
    baseEnergy: 88,
    baseAdapt: 70,
    baseLineage: 75,
    hazardRate: 0.008,
    desc: '你在物质充裕的家庭长大。你无需为温饱与医药费发愁，可以纯粹去追寻艺术、科学、爱情与生命的广度。',
    effect: { de: 3, dv: 2, da: 3, dl: 2 }
  }
];

const MODERN_PHILOSOPHICAL_PAUSES = [
  {
    stageTrigger: 3,
    title: '⏸️ 暂停片刻 · 妈妈白发里的时光（童年之问）',
    prompt: '窗外下着雨。家里人把湿衣服晾起来，又端来一碗冒着热气的汤。回想你的童年，有没有一件这样的小事，让你觉得自己被照顾得很好？'
  },
  {
    stageTrigger: 9,
    title: '⏸️ 暂停片刻 · 深夜电话里的“我挺好的”（青年之问）',
    prompt: '长大后我们离开家乡，学会了把委屈咽进肚子里，在电话里对爸妈说“我在这边吃得挺好的”。如果此刻能对十年前那个孤身打拼的自己说一句话，你会说什么？'
  },
  {
    stageTrigger: 15,
    title: '⏸️ 暂停片刻 · 火车站台上的目送（传承之问）',
    prompt: '小时候，是家人站在月台上目送你远行。如今站在月台上的人，成了你。等下一代踏上自己的路时，你最希望他们记住你做过的哪件小事？'
  }
];

// v7.0 Deeply Emotional, Tear-Jerking 20-Stage Modern Human Life Pool (Multi-variant & Birth-Tier Aware)
const MODERN_HUMAN_20_STAGES_POOL = {
  1: [
    {
      scene: 'childhood_home',
      epochName: '0–3岁 · 降生人间的第一声啼哭',
      title: '🍼 人间初见：产房外那双颤抖的手',
      event: '你带着一身温热的羊水降生在人世间。产房门推开的那一刻，门外等候的父亲手足无措地用袖口擦了擦眼睛，虚弱的母亲第一件事是艰难地偏过头，想看看你的小脸。周岁那晚，家里停了电，摇曳的烛光下你人生第一次伸出小手：',
      enemyEmoji: '🕯️',
      enemyLabel: '初生羁绊',
      choices: [
        {
          label: '紧紧抓住妈妈布满老茧却温暖的食指，把脸贴在她掌心酣睡',
          desc: '【母亲羁绊+15】在这个充满未知与风雨的人间，你给了妈妈捱过一切苦难的勇气',
          path: 'dynasty', pathGain: 15, organUpgrade: 'crest',
          dv: 6, de: 2, da: 6, dl: 18,
          bondChange: { mother: { intimacy: 15, status: '为你拼命护航' } },
          choreoType: 'hug_family',
          choreoText: '🕯️ 烛光下你握紧妈妈的手，妈妈眼角的泪水滴在你的襁褓上……',
          traitGain: { id: 'm_bond_mom', name: '🕯️ 母亲的掌心温度', type: 'dynasty', desc: '无论未来遭遇多大风浪，母亲的爱是你的底气' },
          outcome: '妈妈把你轻轻搂在胸口哼着摇篮曲，窗外寒风呼啸，屋里却暖得像春天。'
        },
        {
          label: '好奇地去抓桌上的旧书本与铅笔头，睁着乌黑的眼睛盯着烛火看',
          desc: '【认知启蒙+14】父亲笑着把你举过头顶：“哪怕砸锅卖铁，也得供这孩子念书！”',
          path: 'pioneer', pathGain: 15, organUpgrade: 'senses',
          dv: 2, de: 2, da: 16, dl: 8,
          bondChange: { father: { intimacy: 12, status: '省吃俭用攒学费' } },
          choreoType: 'study_spark',
          choreoText: '📖 父亲把旧书放在你枕边，暗下决心用肩膀托起你的未来！',
          traitGain: { id: 'm_early_curious', name: '📘 烛火下的求知眼', type: 'pioneer', desc: '对世界怀有纯粹的好奇与敏锐感知' },
          outcome: '父亲粗糙的大手摸了摸你的头，从那天起戒掉了抽了十年的烟，换成了一个存钱铁盒。'
        },
        {
          label: '大口喝完最后一点米汤，挥舞着小拳头发出响亮的哭喊声',
          desc: '【生命韧性+14】在简陋的环境中展现出顽强的求生本能',
          path: 'tyrant', pathGain: 14, organUpgrade: 'lungs',
          dv: 14, de: 6, da: 4, dl: 6,
          choreoType: 'vitality_glow',
          choreoText: '💪 清亮的啼哭穿透夜空，你顽强地扎下了生命的根！',
          outcome: '接生婆笑着说这孩子嗓门真亮，将来定是个能扛事的硬骨头。'
        }
      ]
    }
  ],
  2: [
    {
      scene: 'slum_village',
      tierFilter: ['war_poverty', 'mountain_village'],
      epochName: '4–6岁 · 暴风雨夜的40度高烧',
      title: '🌧️ 生死一线的雨夜：妈妈背上的十里泥泞山路',
      event: '五岁那年深秋的一个雷雨夜，你突发急性肺炎高烧到40.2度，呼吸滚烫、意识模糊。村里没有医生，通往镇卫生所的土路被山洪冲毁。妈妈用塑料布把你裹在背上，深一脚浅一脚地冲进倾盆大雨中，摔倒在泥水里又爬起来：',
      enemyEmoji: '🌧️',
      enemyLabel: '童年高烧生死劫',
      choices: [
        {
          label: '迷迷糊糊中咬紧牙关不让自己昏睡过去，虚弱地喊着“妈妈别摔倒…”',
          desc: '【挺过生死劫 · 健康-8 / 母亲羁绊+20】妈妈膝盖鲜血直流，终于在天亮前踹开了卫生所的门',
          path: 'dynasty', pathGain: 16, organUpgrade: 'lungs',
          dv: -8, de: -10, da: 8, dl: 20,
          deathRisk: 0.08,
          bondChange: { mother: { intimacy: 20, status: '膝盖落下终身风湿疤痕' } },
          choreoType: 'hospital_emergency',
          choreoText: '🌧️ 暴雨泥泞中妈妈背着你狂奔十里，用半条命把你从死神手里抢了回来！',
          traitGain: { id: 'm_rain_survivor', name: '🌧️ 雨夜背上的命', type: 'dynasty', desc: '这条命是妈妈在泥水里一步步背出来的' },
          outcome: '退烧醒来时，你看见妈妈满身泥水趴在床边睡着了，她的裤腿被石头划破，膝盖上结着暗红的血痂。'
        },
        {
          label: '家里实在拿不出住院押金，爸爸连夜冒雨挨家挨户磕头借遍全村凑够救命钱',
          desc: '【倾家荡产救命 · 家境-16 / 恢复健康+10】那个从不弯腰的男人，为你向所有人低了头',
          path: 'pioneer', pathGain: 15, organUpgrade: 'armor',
          dv: 10, de: -16, da: 10, dl: 16,
          bondChange: { father: { intimacy: 18, status: '背负人情债外出苦干' } },
          choreoType: 'hug_family',
          choreoText: '🙇 父亲冒雨借遍全村凑齐救命药费，粗糙的手掌紧紧攥着皱巴巴的零钞……',
          outcome: '爸爸从怀里掏出一沓带着体温、五块十块拼凑起来的钞票交到收费处，背影一下子苍老了许多。'
        },
        {
          label: '高烧引发严重肺部感染，靠老屋土方苦苦硬熬……（⚠️极高夭折风险）',
          desc: '【直面真实死亡率】在缺医少药的贫困地区，全球每年有数百万儿童倒在五岁前',
          path: 'tyrant', pathGain: 12, organUpgrade: 'lungs',
          dv: -28, de: -4, da: 4, dl: 6,
          deathRisk: 0.45,
          deathMessage: '在5岁那个雷雨交加的寒夜，由于缺医少药与高烧引发的重度肺炎，你最终没能等到天亮。妈妈紧紧抱着逐渐冰冷的你，哭声淹没在漫天大雨里……',
          choreoType: 'hospital_emergency',
          choreoText: '⚠️ 高烧不退，微弱的呼吸在雷雨夜里苦苦挣扎……',
          outcome: '你奇迹般地熬过了那场高烧，但落下了畏寒咳嗽的病根。'
        }
      ]
    },
    {
      scene: 'childhood_home',
      epochName: '4–6岁 · 橱窗里的生日蛋糕',
      title: '🎂 六岁生日：妈妈藏在身后的冻疮手',
      event: '六岁生日那天正逢寒冬，放学路上经过镇上的西点屋，你盯着玻璃橱窗里插着巧克力牌的奶油蛋糕移不开步子。妈妈摸了摸口袋里仅剩的买菜钱，咬咬牙走进店里买下了最小的一块，自己却连一口奶油都舍不得舔：',
      enemyEmoji: '🎂',
      enemyLabel: '童年温暖瞬间',
      choices: [
        {
          label: '用小勺挖起最大的一块草莓奶油，非要喂进妈妈嘴里才肯吃',
          desc: '【亲情羁绊+18】你注意到了妈妈手背上裂开的冻疮口子，用小手轻轻帮她吹气',
          path: 'dynasty', pathGain: 15, organUpgrade: 'crest',
          dv: 8, de: -4, da: 8, dl: 18,
          bondChange: { mother: { intimacy: 15, status: '眼角泛泪的欣慰' } },
          choreoType: 'hug_family',
          choreoText: '🎂 你把第一口甜奶油喂给妈妈，妈妈偏过头偷偷抹去了眼角的泪花！',
          traitGain: { id: 'm_sweet_cake', name: '🍓 第一口奶油的懂事', type: 'dynasty', desc: '过早懂得体谅父母不易，内心细腻温良' },
          outcome: '妈妈嘴上说着“妈不爱吃甜的”，却在咽下那口奶油时红了眼眶，把你抱得更紧了。'
        },
        {
          label: '拉住妈妈的衣角摇摇头：“妈，我不吃蛋糕，我们买那本带插图的百科全书吧！”',
          desc: '【认知与学识+16】那本翻烂的旧书，成了你童年通往广阔世界的窗',
          path: 'pioneer', pathGain: 15, organUpgrade: 'senses',
          dv: 4, de: -2, da: 16, dl: 10,
          choreoType: 'study_spark',
          choreoText: '📚 你捧着人生第一本课外书坐在灯下，眼里闪烁着星辰大海！',
          outcome: '那天晚上你在台灯下把那本书翻了一遍又一遍，在扉页歪歪扭扭写下自己的名字。'
        },
        {
          label: '把蛋糕分给院子里平时总护着你的小伙伴一起吃，结下童年铁磁情谊',
          desc: '【社交与领导力+14】童年的真诚分享，让你收获了一生的死党发小',
          path: 'tyrant', pathGain: 14, organUpgrade: 'locomotion',
          dv: 8, de: -4, da: 8, dl: 14,
          choreoType: 'hug_family',
          choreoText: '👦👧 几个小脑袋凑在一起分吃一块小蛋糕，欢笑声洒满老院子！',
          outcome: '发小把省下来的玻璃弹珠全塞进了你兜里，拍着胸脯说以后谁欺负你他就跟谁急。'
        }
      ]
    }
  ],
  3: [
    {
      scene: 'school_station',
      epochName: '7–9岁 · 绿皮火车站的离别与旧书包',
      title: '🚂 正月初七的月台：抓不住的衣角与旧球鞋',
      event: '正月初七清晨，天还没亮透。爸妈又要背上沉重的帆布包去远方谋生（或早出晚归加班）。你穿着洗得发白的旧球鞋追在车窗后跑，妈妈隔着起雾的车窗拼命朝你挥手，塞在你兜里的五十块钱还带着她的体温：',
      enemyEmoji: '🚂',
      enemyLabel: '童年离别与成长',
      choices: [
        {
          label: '擦干眼泪不再哭闹，在心里暗暗发誓：每次考试都要拿第一名寄给爸妈看！',
          desc: '【学识+18 / 健康-4】你成了教室里最晚关灯离开的孩子，奖状贴满了老屋斑驳的墙面',
          path: 'pioneer', pathGain: 16, organUpgrade: 'senses',
          dv: -4, de: 2, da: 18, dl: 10,
          bondChange: { mother: { intimacy: 10, status: '把你的奖状照片存在手机屏保' }, father: { intimacy: 10, status: '工友面前骄傲夸你' } },
          choreoType: 'study_spark',
          choreoText: '🏆 老屋斑驳的泥墙上贴满了泛黄的三好学生奖状，那是你写给爸妈的情书！',
          traitGain: { id: 'm_wall_certificates', name: '🏅 满墙奖状的倔强', type: 'pioneer', desc: '把思念化作寒窗苦读的惊人毅力' },
          outcome: '电话那头爸爸听见你考了全年级第一，沉默了好久，只说了一句“想要啥跟爸说，爸有钱”。'
        },
        {
          label: '放学后主动帮家里劈柴做饭、照看年迈长辈，用稚嫩的肩膀撑起半个家',
          desc: '【亲情羁绊+18 / 体魄+8】才九岁的你站在小板凳上炒菜，手指被油星烫出了小水泡',
          path: 'dynasty', pathGain: 16, organUpgrade: 'armor',
          dv: 8, de: 4, da: 6, dl: 18,
          choreoType: 'hug_family',
          choreoText: '🍲 你踩着小木凳在灶台前做饭，袅袅炊烟里满是穷人孩子早当家的懂事！',
          outcome: '邻居路过闻到饭香都忍不住叹气：“这娃懂事得让人心疼。”'
        },
        {
          label: '利用周末收集废旧书报与手工零件去集市摆摊，攒下人生第一笔零花钱',
          desc: '【生存财商+16】你早早明白了每一分钱背后的汗水与不易',
          path: 'tyrant', pathGain: 15, organUpgrade: 'jaws',
          dv: 4, de: 16, da: 10, dl: 6,
          choreoType: 'career_hustle',
          choreoText: '🪙 你用自己攒下的硬币给妈妈买了一盒两块钱的蛤蜊油护手霜！',
          outcome: '当你把护手霜递给妈妈时，她愣住了，紧紧把你搂在怀里半天说不出话。'
        }
      ]
    }
  ],
  4: [
    {
      scene: 'school_station',
      epochName: '10–12岁 · 少年自尊心与暴雨中的伞',
      title: '☂️ 小学毕业季：永远向你倾斜的那把黑布伞',
      event: '十二岁那年倾盆大雨的傍晚，爸爸骑着生锈的二八大杠自行车（或撑着一把旧黑伞）来校门口接你。班里家庭条件好的同学坐着小轿车绝尘而去，溅起的水花弄脏了爸爸的裤腿。走路回家时，你抬头发现伞面几乎全倾向了你这边，爸爸的半边肩膀早已湿透：',
      enemyEmoji: '☂️',
      enemyLabel: '父爱如山',
      choices: [
        {
          label: '用力把伞柄往爸爸那边推过去：“爸，我已经长高了，咱们一人一半！”',
          desc: '【父亲羁绊+18】爸爸愣了一下，粗糙的大手重重拍了拍你的肩膀，笑出了眼角深深的褶子',
          path: 'dynasty', pathGain: 16, organUpgrade: 'crest',
          dv: 6, de: 2, da: 8, dl: 18,
          bondChange: { father: { intimacy: 18, status: '脊背微弯却满眼欣慰' } },
          choreoType: 'hug_family',
          choreoText: '☂️ 雨幕中一大一小两个身影共撑一把黑伞，伞柄缓缓推向了父亲湿透的肩头……',
          traitGain: { id: 'm_father_umbrella', name: '☂️ 倾斜的黑布伞', type: 'dynasty', desc: '铭记父爱无声的庇护，重情重义' },
          outcome: '那一刻你突然发现，印象中如高山般高大的父亲，其实个子已经快被你追上了。'
        },
        {
          label: '把自卑与不甘埋进心底，报名全县/全市初中重点实验班选拔考试！',
          desc: '【学识+18】你不怪父母给不了你轿车，你决定靠自己的笔杆子去赢得尊重',
          path: 'pioneer', pathGain: 16, organUpgrade: 'senses',
          dv: 2, de: 2, da: 18, dl: 8,
          choreoType: 'study_spark',
          choreoText: '✍️ 你在考场上奋笔疾书，以全校前三名考入重点中学实验班！',
          outcome: '拿到重点初中录取通知书那天，爸爸破天荒买了一瓶十块钱的白酒，对着晚霞喝得满脸通红。'
        },
        {
          label: '在雨中奔跑锻炼体能，加入校田径队/篮球队用汗水证明自己',
          desc: '【健康体魄+16】强健的体魄让你在青春期充满阳光与韧劲',
          path: 'tyrant', pathGain: 15, organUpgrade: 'lungs',
          dv: 16, de: 2, da: 6, dl: 8,
          choreoType: 'vitality_glow',
          choreoText: '🏃 你在泥泞操场上冲过终点线，少年意气风发！',
          outcome: '你捧回了校运会第一块奖牌，挂在了爸爸床头。'
        }
      ]
    }
  ],
  5: [
    {
      scene: 'school_station',
      epochName: '13–15岁 · 初中晚自习与后座的传纸条',
      title: '🚲 十五岁盛夏：单车后座的白衬衫与中考分流',
      event: '初三盛夏，头顶的吊扇吱呀作响，黑板右上角的中考倒计时只剩最后45天。晚自习下课后，那个总是借你橡皮和笔记的同桌塞给你一张折成方块的纸条：“我想考去市里的高中，你呢？我们还能在一个学校吗？”与此同时，家里的经济状况也到了紧要关头：',
      enemyEmoji: '💌',
      enemyLabel: '青春悸动与分流',
      choices: [
        {
          label: '在纸条背面写下“顶峰相见！”，每天凌晨五点半起来背书刷题，与TA并肩冲刺市重点高中！',
          desc: '【学识+18 / 初恋羁绊萌芽】盛夏蝉鸣里的并肩奋斗，成了青春最干净耀眼的光',
          path: 'pioneer', pathGain: 17, organUpgrade: 'senses',
          dv: -4, de: -4, da: 18, dl: 14,
          butterflyFlag: 'youth_sweetheart',
          bondChange: { partner: { name: '青梅同桌·苏念', status: '约定顶峰相见', intimacy: 45, alive: true } },
          choreoType: 'love_blossom',
          choreoText: '🌸 盛夏晚风吹过堆满试卷的课桌，两张少年脸庞在题海里并肩追光！',
          traitGain: { id: 'm_desk_note', name: '💌 折成方块的纸条', type: 'dynasty', desc: '那年夏天最纯粹的约定，照亮了整个青春期' },
          outcome: '放榜那天，你们的名字同时出现在市重点高中的红榜上，相视一笑胜过万语千言。'
        },
        {
          label: '为减轻家里负担（或遭遇战乱/变故），选择免学费的技校/早早半工半读补贴家用',
          desc: '【家境+14 / 学识+4 / 健康-6】你收起了去重点高中的录取通知书，早早踏入社会洪流',
          path: 'tyrant', pathGain: 15, organUpgrade: 'jaws',
          dv: -6, de: 14, da: 4, dl: 12,
          bondChange: { mother: { intimacy: 14, status: '心疼你过早吃苦' } },
          choreoType: 'career_hustle',
          choreoText: '🔧 你脱下校服换上洗得发白的工作服，把第一个月挣的钱全塞进了妈妈手里……',
          outcome: '同龄人还在教室里背古诗时，你已经在嘈杂的车间与夜校里学会了看尽人情冷暖。'
        },
        {
          label: '把全部精力投入理科竞赛/特长钻研，争取全额奖学金免除三年学杂费',
          desc: '【学识+20 / 健康-6】挑灯夜战到凌晨一点，用实力为父母省下每一分血汗钱',
          path: 'pioneer', pathGain: 18, organUpgrade: 'senses',
          dv: -6, de: 8, da: 20, dl: 8,
          choreoType: 'study_spark',
          choreoText: '💡 深夜台灯下堆积如山的草稿纸，换来了市重点高中全额奖学金！',
          outcome: '校长亲自把全额奖学金证书交到你手里，台下穿着旧衣服的爸妈激动得手都在发抖。'
        }
      ]
    }
  ],
  6: [
    {
      scene: 'childhood_home',
      epochName: '16–18岁 · 高考前夜父亲塞在门缝下的热牛奶',
      title: '🥛 十八岁成人礼：凌晨一点半门缝下的灯光',
      event: '十八岁高考前最后一个寒冬深夜，时钟指向凌晨一点半。你被一道压轴题卡住，烦躁得想撕掉试卷。这时房门被轻轻敲响，平时沉默寡言、甚至有些严厉的父亲端着一杯温牛奶走进来，笨拙地用胶布帮你粘好摇晃的台灯底座，低声说：“别熬太晚，考成啥样爸都养得起你。”第二天走向考场，你的志愿表将填向何方？',
      enemyEmoji: '🎓',
      enemyLabel: '十八岁命运十字路口',
      choices: [
        {
          label: '毅然填报两千公里外的顶尖名校，去见识最辽阔的天地（哪怕此后故乡只剩冬夏，再无春秋）',
          desc: '【学识+22 / 远方视野大开】从此父母成了电话那头的牵挂，每年相见只剩匆匆几天',
          path: 'pioneer', pathGain: 18, organUpgrade: 'senses',
          dv: -4, de: -6, da: 22, dl: 6,
          butterflyFlag: 'college_faraway',
          bondChange: { mother: { intimacy: 8, status: '每天看你所在城市的天气预报' }, father: { intimacy: 8, status: '送完你回程偷偷抹泪' } },
          choreoType: 'study_spark',
          choreoText: '🎓 学士帽与录取通知书飞向蓝天，你踏上了开往两千公里外繁华大都市的列车！',
          traitGain: { id: 'm_faraway_dream', name: '🚄 故乡从此只有冬夏', type: 'pioneer', desc: '奔赴远方求学追梦，把乡愁折进车票里' },
          outcome: '入学报到那天，爸爸帮你铺好宿舍床铺，转身进地铁站时背影佝偻得像个老人。'
        },
        {
          label: '填报本省重点大学（或与心上人约定同一座城市），兼顾前程与随时能回家喝口热汤的陪伴',
          desc: '【学识+14 / 亲情与爱情羁绊+18】离家三小时车程，守住了父母触手可及的安心',
          path: 'dynasty', pathGain: 18, organUpgrade: 'crest',
          dv: 6, de: 2, da: 14, dl: 18,
          bondChange: { mother: { intimacy: 14, status: '每月盼你回家炖排骨汤' }, partner: { intimacy: 20, status: '大学校园并肩漫步' } },
          choreoType: 'love_blossom',
          choreoText: '🏡 守在离家不远的城市求学，周末推门就能闻到妈妈炖的排骨汤香！',
          outcome: '每次周末回家，妈妈总会提前两小时站在巷口张望，把你爱吃的菜摆满一桌。'
        },
        {
          label: '家逢变故（或父亲工伤/弟弟妹妹重病），含泪烧掉录取通知书，背起行囊南下打工扛起全家！',
          desc: '【催泪牺牲 · 家境+16 / 学识-6 / 亲情+22】你用自己十八岁的青春，换来了全家的生路',
          path: 'tyrant', pathGain: 17, organUpgrade: 'jaws',
          dv: -10, de: 16, da: -4, dl: 22,
          deathRisk: 0.05,
          bondChange: { father: { intimacy: 22, status: '愧疚一生觉得亏欠了你' }, mother: { intimacy: 22, status: '抱着你的旧课本痛哭' } },
          choreoType: 'hug_family',
          choreoText: '🔥 火光映照着你满是泪水却坚毅的脸庞，十八岁的你替父母扛下了命运的巨石！',
          traitGain: { id: 'm_burnt_admission', name: '🔥 折翼护家的长子/长女', type: 'dynasty', desc: '为至亲放弃象牙塔，在泥泞人世中淬炼出钢铁脊梁' },
          outcome: '在南下打工的绿皮车硬座上，你把脸埋进膝盖哭湿了整条袖子，天亮后擦干眼泪走进了喧嚣的人海。'
        }
      ]
    }
  ],
  7: [
    {
      scene: 'school_station',
      epochName: '19–22岁 · 毕业季火车站台上的最后一次拥抱',
      title: '🚉 二十二岁盛夏：检票口外的眼泪与人生分岔路',
      event: '二十二岁盛夏，栀子花开的季节却是离别的笙箫。相伴四年的恋人（或挚友）站在高铁检票口外，手里攥着回老家端铁饭碗的车票，而你手里拿着留在一线大都市打拼的入职通知。广播里响起最后一次催促检票的声音，TA红着眼眶抬头问你：“我们真的要在这里走散了吗？”',
      enemyEmoji: '🚉',
      enemyLabel: '青春挚爱抉择',
      choices: [
        {
          label: '冲上去紧紧抱住TA：“别走，我们一起留在宿命之城，哪怕住十平米的地下室我也护着你！”',
          desc: '【锁死一生挚爱 · 幸福+22 / 家境-8】你们在天桥下吃着五块钱的烤冷面，眼里却有化不开的光',
          path: 'dynasty', pathGain: 18, organUpgrade: 'crest',
          dv: 4, de: -8, da: 8, dl: 22,
          butterflyFlag: 'kept_true_love',
          bondChange: { partner: { name: '一生挚爱·苏念', status: '陪你住出租屋吃苦也甜', intimacy: 88, alive: true } },
          choreoType: 'love_blossom',
          choreoText: '💞 你在检票口关闭前一秒拉住TA的手，漫天晚霞见证了不向现实低头的爱情！',
          traitGain: { id: 'm_station_keep', name: '🚉 检票口挽留的挚爱', type: 'dynasty', desc: '在最一无所有的年纪，留住了最想照顾一生的人' },
          outcome: 'TA退掉了车票，扑进你怀里哭得像个孩子。你们合租了城中村顶楼的小房间，开启了相濡以沫的打拼岁月。'
        },
        {
          label: '含泪替TA擦干眼角，放手让TA回安稳小城，自己转身走向北上广深孤身闯荡！',
          desc: '【事业与野心+20 / 痛失初恋】那句“祝你幸福”说完，你们成了彼此通讯录里再也不敢拨通的置顶',
          path: 'tyrant', pathGain: 18, organUpgrade: 'jaws',
          dv: -4, de: 18, da: 14, dl: -6,
          butterflyFlag: 'lost_youth_love',
          bondChange: { partner: { name: '错过的初恋·苏念', status: '走散在22岁的火车站台', intimacy: 25, alive: true } },
          choreoType: 'career_hustle',
          choreoText: '🚄 列车呼啸远去，你独自背着双肩包汇入大都市冷冽的霓虹人潮……',
          traitGain: { id: 'm_missed_train', name: '🌧️ 走散在22岁月台的人', type: 'tyrant', desc: '以错过一生挚爱为代价，换取孤身闯荡的凌云之志' },
          outcome: '列车开动的那一刻，你在站台上追了十几米，最终停下脚步。从那天起，你变成了职场上最拼命的独行者。'
        },
        {
          label: '放弃高薪邀请，跟随TA一起回到父母身边的小城/省城，过平淡安稳的烟火岁月',
          desc: '【身心健康+14 / 亲情爱情双全】虽少了大富大贵的传奇，却守住了朝夕相伴的温柔',
          path: 'dynasty', pathGain: 16, organUpgrade: 'lungs',
          dv: 14, de: 4, da: 6, dl: 18,
          bondChange: { partner: { name: '青梅伴侣·苏念', status: '小城相守岁月静好', intimacy: 82, alive: true }, mother: { intimacy: 12, status: '常来给你送热菜' } },
          choreoType: 'hug_family',
          choreoText: '🏡 择一城终老，遇一人白首，小城黄昏的炊烟温柔了岁月！',
          outcome: '你们在小城安了家，傍晚下班牵手走过梧桐树影，父母就在两条街外等着你们回家吃饭。'
        }
      ]
    }
  ],
  8: [
    {
      scene: 'metro_office',
      epochName: '23–26岁 · 深夜出租屋的一碗泡面与报喜不报忧',
      title: '🍜 二十五岁冬夜：电话里那句哽咽的“妈，我吃过排骨了”',
      event: '二十五岁冬至夜，窗外飘着冷雨。你刚在公司背了黑锅被主管当众训斥，交完房租后银行卡余额只剩312块钱。回到10平米的隔断出租屋，泡面刚泡上，妈妈的视频电话弹了出来：“儿啊/闺女，今天冬至，吃饺子和炖排骨了没？在外面别省钱！”看着屏幕里妈妈花白的鬓角，你：',
      enemyEmoji: '📱',
      enemyLabel: '异乡漂泊催泪夜',
      choices: [
        {
          label: '悄悄把泡面桶挪出镜头外，努力扬起嘴角笑着说：“妈，刚跟同事吃完大餐回来，特别香！”',
          desc: '【成年人的懂事 · 学识与韧性+16 / 健康-6】挂断电话那一刻，眼泪啪嗒啪嗒掉进了泡面汤里',
          path: 'pioneer', pathGain: 17, organUpgrade: 'senses',
          dv: -6, de: 12, da: 16, dl: 14,
          bondChange: { mother: { intimacy: 14, status: '信了你的谎言安心入睡' } },
          choreoType: 'career_hustle',
          choreoText: '📱 镜头前你笑容灿烂，挂断电话后滚烫的眼泪滑落进微凉的泡面碗里……',
          traitGain: { id: 'm_good_news_only', name: '🍜 报喜不报忧的游子', type: 'pioneer', desc: '把所有委屈咽进肚子里，在暗夜里独自长出铠甲' },
          outcome: '你连汤带面吃得一干二净，擦干眼泪重新打开电脑改方案。这碗带泪的泡面，成了你后来崛起的起点。'
        },
        {
          label: '再也绷不住了，对着屏幕红着眼眶喊出一声“妈，我好累…”，把积压一年的委屈哭出来',
          desc: '【情绪释放 · 健康+12 / 亲情+20】妈妈在屏幕那头跟着抹泪：“受委屈了就回家，妈给你留着门！”',
          path: 'dynasty', pathGain: 16, organUpgrade: 'lungs',
          dv: 12, de: 2, da: 8, dl: 20,
          bondChange: { mother: { intimacy: 20, status: '连夜给你转来五千块私房钱' }, father: { intimacy: 16, status: '托老友帮你打听新机会' } },
          choreoType: 'hug_family',
          choreoText: '💌 第二天一早，手机收到妈妈转来的五千块钱和一句“天塌下来有爸妈顶着”！',
          outcome: '大哭一场后心里的郁结彻底散去，父母笨拙却滚烫的爱让你重新找回了活下去的力气。'
        },
        {
          label: '咬牙连夜跳槽创业/死磕核心项目，连续三个月通宵达旦在职场杀出一条血路！（⚠️过劳伤身）',
          desc: '【财富+24 / 健康-18】你拿到了人生第一笔十万级年终奖，但体检报告上亮起了三项红灯',
          path: 'tyrant', pathGain: 18, organUpgrade: 'jaws',
          dv: -18, de: 24, da: 14, dl: 2,
          deathRisk: 0.06,
          choreoType: 'career_hustle',
          choreoText: '⚡ 写字楼凌晨三点的灯光映着你苍白的脸，银行卡数字暴涨，心脏却隐隐抽痛！',
          outcome: '过年回家你给爸妈包了一万块钱大红包，却偷偷把胃药和护肝片藏在了行李箱夹层。'
        }
      ]
    }
  ],
  9: [
    {
      scene: 'wedding_home',
      epochName: '27–30岁 · 婚礼红毯上父亲转身擦泪的背影',
      title: '💒 三十而立：红毯尽头的托付 vs 除夕夜孤独的烟花',
      event: '转眼来到三十岁的人生关口。身边的同龄人纷纷步入婚姻殿堂，父母也在电话里欲言又止地操心着你的终身大事。面对高昂的彩礼/房贷首付、职场晋升窗口与身边那个等待你给未来的人，你在三十岁的十字路口做出了选择：',
      enemyEmoji: '💍',
      enemyLabel: '三十而立婚恋局',
      choices: [
        {
          label: '倾尽所有积蓄买下婚戒与小窝，牵起挚爱的手走上婚礼红毯，许下一生一世的诺言！',
          desc: '【喜结连理 · 幸福+24 / 房产进阶】婚礼上父亲把你的手交出去后，背过身偷偷擦掉了眼泪',
          path: 'dynasty', pathGain: 18, organUpgrade: 'armor',
          dv: 8, de: -10, da: 8, dl: 24,
          butterflyFlag: 'married_warm',
          bondChange: {
            partner: { name: '相濡以沫的爱人', status: '新婚燕尔·共同还贷打拼', intimacy: 92, alive: true },
            father: { intimacy: 16, status: '婚礼上偷偷抹泪的严父' }
          },
          choreoType: 'wedding_ceremony',
          choreoText: '💒 漫天樱花与礼花中，你们在亲友祝福下深情相拥，点亮了属于自己的万家灯火！',
          traitGain: { id: 'm_wedding_vow', name: '💍 万家灯火有一盏为你亮', type: 'dynasty', desc: '从此风雨人间，有了并肩同行、互留晚饭的伴侣' },
          outcome: '婚礼散场后，你们坐在贴着喜字的新房地毯上数份子钱，虽然背上了房贷，相视一笑却无比踏实。'
        },
        {
          label: '不愿将就凑合，顶住世俗催婚压力选择独身深造/全力冲刺事业黄金期！',
          desc: '【事业财富+20 / 学识+16】除夕夜你独自在落地窗前看着满城烟花，自由却也有些许清冷',
          path: 'pioneer', pathGain: 18, organUpgrade: 'jaws',
          dv: 4, de: 20, da: 16, dl: -4,
          bondChange: { partner: { name: '独身主义者', status: '自由追梦·未婚', intimacy: 30, alive: true } },
          choreoType: 'house_upgrade',
          choreoText: '🏙️ 你靠自己全款买下精致独居公寓，在城市霓虹之巅与孤独和自由握手言欢！',
          outcome: '你把自己的小公寓布置得精致舒适，虽然偶尔深夜发烧没人递水，但你活成了自己最喜欢的模样。'
        },
        {
          label: '与伴侣约定“裸婚”创业，把买房办酒席的钱全部投入共同创办的工作室！',
          desc: '【创业破局 · 财富+22 / 风险并存】没有豪华婚车，你们骑着共享单车去民政局领了红本本',
          path: 'tyrant', pathGain: 18, organUpgrade: 'jaws',
          dv: -4, de: 22, da: 14, dl: 18,
          bondChange: { partner: { name: '创业伴侣', status: '同甘共苦的战友与爱人', intimacy: 90, alive: true } },
          choreoType: 'wedding_ceremony',
          choreoText: '🚲 民政局门口两本结婚证在阳光下闪耀，你们既是爱人也是并肩创业的战友！',
          outcome: '那张在民政局门口拿着9块9玫瑰花拍的合照，后来一直摆在你们公司董事长办公桌的正中央。'
        }
      ]
    }
  ],
  10: [
    {
      scene: 'wedding_home',
      epochName: '31–33岁 · 产房外的啼哭与身份的蜕变',
      title: '👶 三十二岁：当你第一次抱起那个三公斤重的小生命',
      event: '三十二岁那年，产房红灯亮起又熄灭（或你迎来了家族新生命的诞生）。当护士把那个皱巴巴、只有三公斤多一点的小家伙交到你颤抖的臂弯里时，TA闭着眼睛打了个哈欠，小手无意识地抓住了你的衣领。那一刻，你突然读懂了三十年前父母看你时的眼神：',
      enemyEmoji: '👶',
      enemyLabel: '血脉新生与传承',
      choices: [
        {
          label: '喜极而泣地亲吻伴侣汗湿的额头与宝宝的小脚丫，立誓用一生守护这个家！（诞下第1个孩子）',
          desc: '【喜得贵子/千金 +1世代子嗣 · 亲情+26】你终于有了软肋，却也因此披上了最坚硬的铠甲',
          path: 'dynasty', pathGain: 20, organUpgrade: 'crest',
          offspringGain: 1,
          dv: -4, de: -8, da: 8, dl: 26,
          bondChange: {
            child: { name: '长子/长女·小星', status: '嗷嗷待哺·延续家族血脉', intimacy: 95, alive: true },
            partner: { intimacy: 15, status: '升级为温柔坚韧的父母' },
            mother: { intimacy: 12, status: '欢天喜地来帮带孙辈' }
          },
          choreoType: 'baby_born',
          choreoText: '👶 婴儿啼哭声响彻产房！你抱起延续血脉的新生命，三代同堂热泪盈眶！',
          traitGain: { id: 'm_new_parent', name: '👶 软肋与铠甲', type: 'dynasty', desc: '成为父母的那一刻，你才真正长成了参天大树' },
          outcome: '每天下班哪怕再累，只要推开门看见摇篮里冲你咯咯直笑的小家伙，一身疲惫瞬间烟消云散。'
        },
        {
          label: '在迎接孩子降生的同时，咬牙贷款换购带学区花园的改善型住房！（诞下子嗣 + 房产升级）',
          desc: '【诞下 +1世代子嗣 · 房产进阶】身上背负了三十年房贷，从此不敢轻易辞职、不敢生病',
          path: 'tyrant', pathGain: 18, organUpgrade: 'armor',
          offspringGain: 1,
          dv: -8, de: 10, da: 10, dl: 20,
          bondChange: { child: { name: '长子/长女·小星', status: '在新居中快乐学步', intimacy: 90, alive: true } },
          choreoType: 'house_upgrade',
          choreoText: '🚚 乔迁新居与喜添新丁双喜临门！宽敞的婴儿房里摆满了玩具与绘本！',
          outcome: '看着孩子在明亮的新客厅地毯上蹒跚学步，你摸了摸口袋里的房贷还款单，觉得一切辛苦都值得。'
        },
        {
          label: '专注丁克研究/公益领养与自我实现，将心血倾注在传世作品与人类知识疆域上',
          desc: '【学识+24 / 声望大增】虽未生育亲生子女，但你的思想与作品正在影响无数年轻人',
          path: 'pioneer', pathGain: 18, organUpgrade: 'senses',
          dv: 6, de: 14, da: 24, dl: 6,
          choreoType: 'study_spark',
          choreoText: '🌟 你的代表作与公益事迹引发强烈社会共鸣，桃李满天下！',
          outcome: '你在行业与文化界崭露头角，活出了另一种超越血缘的生命厚度。'
        }
      ]
    }
  ],
  11: [
    {
      scene: 'metro_office',
      epochName: '34–37岁 · 地下车库里那支抽完才上楼的烟',
      title: '🚗 三十五岁寒冬：藏在公文包里的裁员通知与车库里的二十分钟',
      event: '三十五岁生日刚过，行业寒冬骤降。下午五点，HR把一张离职赔偿协议推到你面前；同一天，手机收到房贷扣款短信、孩子的兴趣班缴费单，以及老家父亲血压升高住院的消息。晚上八点把车停进小区地下车库，你没有马上上楼，而是关掉车灯在黑暗里静静坐了二十分钟：',
      enemyEmoji: '🌧️',
      enemyLabel: '35岁中年生死渡口',
      choices: [
        {
          label: '深吸一口气擦干眼角，拎起公文包微笑着推开家门，第二天放下面子去跑网约车/摆摊/跨界再创业！',
          desc: '【中年破局 · 家境+16 / 亲情+18】伴侣一眼看穿了你的强颜欢笑，从背后紧紧抱住你：“别怕，我陪你东山再起！”',
          path: 'dynasty', pathGain: 18, organUpgrade: 'jaws',
          dv: -4, de: 16, da: 14, dl: 18,
          bondChange: { partner: { intimacy: 18, status: '拿出一半积蓄支持你渡难关' } },
          choreoType: 'hug_family',
          choreoText: '🏡 推开家门的那一刻，爱人端着热汤没有问一句责备的话，只是紧紧抱住了疲惫的你……',
          traitGain: { id: 'm_car_garage', name: '🚗 车库里的二十分钟', type: 'dynasty', desc: '把风雨关在车门外，把温柔留给推开门后的家人' },
          outcome: '那段最难熬的日子里，全家人心往一处想，一年后你的新事业反而比从前打工更加红火稳健！'
        },
        {
          label: '凭前半生积累的技术壁垒与口碑，拉起老骨干自立门户创办科技/专业工作室！',
          desc: '【逆境翻盘 · 财富+26 / 学识+16】把35岁危机硬生生砸成了人生第二次腾飞的跳板！',
          path: 'pioneer', pathGain: 20, organUpgrade: 'senses',
          dv: -8, de: 26, da: 16, dl: 10,
          choreoType: 'career_hustle',
          choreoText: '🚀 绝境逢生！你的独立工作室拿下首笔百万级订单，全员欢呼雀跃！',
          outcome: '三年后前东家倒闭清算，而你的新公司搬进了甲级写字楼，活成了业内的逆袭传奇。'
        },
        {
          label: '死扛到底！隐瞒家人每天打两份零工、连续熬夜透支身体硬撑房贷……（⚠️中年心梗猝死高危!）',
          desc: '【真实中年过劳风险 · 健康-30 / 家境+14】当健康跌破警戒线，随时可能倒在凌晨的街头',
          path: 'tyrant', pathGain: 16, organUpgrade: 'lungs',
          dv: -30, de: 14, da: 4, dl: 8,
          deathRisk: 0.38,
          deathMessage: '在36岁那个飘雪的凌晨两点，连续熬夜奔波的你在走出地铁站台阶时，胸口突然传来一阵剧烈的绞痛。手机摔在雪地上，屏幕上是爱人发来的“给你留了热汤，快到家了吗？”。你张了张嘴想回复，却永远倒在了36岁的寒冬里……（人到中年，请一定珍重自己的身体）',
          choreoType: 'hospital_emergency',
          choreoText: '💓 刺耳的心电警报声响起！长期高压熬夜让你的心脏发出了极限抗议！',
          outcome: '你在急诊室抢救了一夜捡回一条命，看着病床前哭肿双眼的家人，终于明白活着比什么都重要。'
        }
      ]
    }
  ],
  12: [
    {
      scene: 'wedding_home',
      epochName: '38–41岁 · 人到中年的喘息与二胎/事业抉择',
      title: '🌤️ 四十岁前夕：餐桌上的欢声笑语与新生命',
      event: '挺过了三十五岁的惊涛骇浪，生活终于迎来了久违的甘甜。周末傍晚，阳光洒在客厅地板上，爱人端上刚出锅的红烧鱼，父母精神尚好，孩子在沙发上写作业。站在四十岁的门槛上，你决定为这个家再添一份怎样的色彩？',
      enemyEmoji: '🏡',
      enemyLabel: '四十不惑新篇章',
      choices: [
        {
          label: '与爱人喜迎二胎宝宝，儿女双全凑成一个“好”字，让家里加倍热闹温馨！（+1世代子嗣）',
          desc: '【儿女双全 +1世代子嗣 · 幸福+24】哥哥/姐姐笨拙地抱着小妹妹/小弟弟，满屋都是笑声',
          path: 'dynasty', pathGain: 18, organUpgrade: 'crest',
          offspringGain: 1,
          dv: 4, de: -6, da: 8, dl: 24,
          bondChange: { child: { name: '一双儿女·小星与小月', status: '手足情深·欢声笑语', intimacy: 96, alive: true } },
          choreoType: 'baby_born',
          choreoText: '👶👶 儿女双全凑成“好”字！两个小家伙在客厅地毯上追逐嬉戏，幸福满溢！',
          outcome: '你看着两个孩子互相分享零食的模样，心里想：将来我们老了走了，他们在这世上还有彼此作伴。'
        },
        {
          label: '全款换购带庭院的阳光大平层，把年迈的父母接来同住或住在隔壁小区方便尽孝！',
          desc: '【房产升至顶配 · 父母羁绊+20】趁父母还走得动，带他们去看了天安门和大海',
          path: 'tyrant', pathGain: 18, organUpgrade: 'armor',
          dv: 10, de: 14, da: 10, dl: 20,
          bondChange: { mother: { intimacy: 18, status: '在新居阳台种满鲜花' }, father: { intimacy: 18, status: '每天接送孙辈上下学' } },
          choreoType: 'house_upgrade',
          choreoText: '🏡 阳光洒满新家的大露台，爸妈站在大海边拍下了人生第一张旅游照！',
          outcome: '妈妈在海边笑得像个小姑娘，逢人就夸自己这辈子最享儿女的福。'
        },
        {
          label: '深耕专业领域出版专著/带出优秀徒弟团队，奠定行业泰斗地位',
          desc: '【学识与声望+24 / 财富+18】四十不惑，你的名字成了行业内金字招牌',
          path: 'pioneer', pathGain: 18, organUpgrade: 'senses',
          dv: 8, de: 18, da: 24, dl: 12,
          choreoType: 'study_spark',
          choreoText: '📚 你的署名专著与行业成果正式发布，赢得满堂喝彩！',
          outcome: '你在四十岁这年实现了财务与精神的双重从容。'
        }
      ]
    }
  ],
  13: [
    {
      scene: 'school_station',
      epochName: '42–45岁 · 孩子紧闭的房门与两代人的和解',
      title: '🚪 四十四岁：青春期孩子摔上的房门与当年的自己',
      event: '四十四岁这年，你的孩子步入了叛逆而迷茫的青春期。一次成绩下滑后，你们在饭桌上起了争执，孩子红着眼眶摔门而入：“你们根本不懂我有多累！”站在紧闭的房门外，你看着自己两鬓不知何时冒出的白发，恍惚间看到了三十年前那个同样渴望被父母理解的自己：',
      enemyEmoji: '🚪',
      enemyLabel: '为人父母的修行',
      choices: [
        {
          label: '放下家长的架子，端着一盘切好的水果轻轻敲开门：“对不起，刚才爸/妈说话太重了，能跟我们聊聊你的心里话吗？”',
          desc: '【两代人和解 · 儿女羁绊+22】一句真诚的“对不起”，融化了青春期最坚硬的冰山',
          path: 'dynasty', pathGain: 18, organUpgrade: 'crest',
          dv: 8, de: 4, da: 14, dl: 22,
          bondChange: { child: { intimacy: 20, status: '敞开心扉·把你当成最信任的知己' } },
          choreoType: 'hug_family',
          choreoText: '🍎 房门缓缓打开，孩子扑进你怀里哭出了声，两代人的心紧紧贴在了一起！',
          traitGain: { id: 'm_parent_apology', name: '🍎 会说对不起的父母', type: 'dynasty', desc: '用尊重与倾听治愈了代际创伤，成为孩子一生的港湾' },
          outcome: '那天夜里你们聊到了凌晨两点，孩子后来在作文里写道：“我拥有世界上最懂我的父母。”'
        },
        {
          label: '不再逼孩子走死板的刷题路，全力支持TA追逐真正热爱的科学/艺术/体育天赋！',
          desc: '【子女成才 · 学识+18 / 幸福+16】你的开明托举，让孩子在热爱的领域闪闪发光',
          path: 'pioneer', pathGain: 18, organUpgrade: 'locomotion',
          dv: 6, de: -4, da: 18, dl: 16,
          bondChange: { child: { intimacy: 16, status: '在热爱领域斩获全国大奖' } },
          choreoType: 'study_spark',
          choreoText: '🎨 聚光灯下孩子自信地捧起奖杯，第一时间望向台下鼓掌的你！',
          outcome: '孩子眼里的光重新亮了起来，并凭借特长与内驱力考入了理想的学府。'
        },
        {
          label: '带孩子回你儿时的老屋/故乡走一趟，给TA讲讲爷爷奶奶和你当年走过的路',
          desc: '【家风传承 · 认知+14 / 羁绊+18】一堂行走的人生课，胜过千言万语的说教',
          path: 'tyrant', pathGain: 16, organUpgrade: 'senses',
          dv: 8, de: 6, da: 14, dl: 18,
          choreoType: 'hug_family',
          choreoText: '🌾 站在故乡的老槐树下，孩子第一次真正读懂了家族血脉里的坚韧！',
          outcome: '从老家回来后，孩子像变了一个人，主动抱了抱你，开始发愤图强。'
        }
      ]
    }
  ],
  14: [
    {
      scene: 'hospital_sunset',
      epochName: '46–50岁 · 凌晨三点十七分的ICU未接来电（子欲养而亲不待）',
      title: '🏥 四十八岁雨夜：父亲病床前最后一次握紧的手',
      event: '四十八岁那年深秋凌晨三点十七分，刺耳的手机铃声把你从睡梦中惊醒。是老家医院打来的电话——父亲突发重症脑溢血被推进了ICU，正在下病危通知书！此时你手头正卡着一个决定晋升/公司生死的关键项目签约。窗外大雨滂沱，你握着发烫的手机：',
      enemyEmoji: '🏥',
      enemyLabel: '生离死别催泪抉择',
      choices: [
        {
          label: '抛下一切工作与合同，连夜冒雨驱车赶回医院，跪在病床前紧紧握住父亲插满管子的手陪他走完最后一程！',
          desc: '【催泪送别父亲 · 无憾尽孝 / 财富-12】昏迷中的父亲似乎认出了你，眼角滑下一滴浑浊的泪，手指轻轻动了一下',
          path: 'dynasty', pathGain: 20, organUpgrade: 'crest',
          dv: -6, de: -12, da: 8, dl: 24,
          bondChange: {
            father: { name: '已故的父亲', status: '🕯️ 48岁那年秋天握着你的手安详离世', intimacy: 100, alive: false },
            mother: { intimacy: 20, status: '失去老伴后与你相依为命' }
          },
          choreoType: 'hospital_emergency',
          choreoText: '🏥 监护仪滴答声中，你紧紧贴着父亲粗糙冰凉的手背，送别了那个为你撑起童年天空的男人……',
          traitGain: { id: 'm_father_last_hand', name: '🕯️ 父亲最后的余温', type: 'dynasty', desc: '在生离死别的病床前没有留下迟到的遗憾' },
          outcome: '整理父亲遗物时，你在他锁着的旧木匣最底层，发现了你从小到大所有的奖状、乳牙和第一张工资条。你跪在地上泣不成声。'
        },
        {
          label: '倾尽百万积蓄请全国顶尖专家会诊手术，日夜守在ICU门外硬生生把父亲从鬼门关抢回来！',
          desc: '【逆天改命救父 · 家境-24 / 父亲奇迹生还！】你花光了半生积蓄，却保住了喊一声“爸”有回应的幸福',
          path: 'pioneer', pathGain: 20, organUpgrade: 'lungs',
          dv: -8, de: -24, da: 14, dl: 28,
          bondChange: { father: { status: '奇迹生还·坐轮椅晒太阳', intimacy: 100, alive: true } },
          choreoType: 'hospital_emergency',
          choreoText: '💓 手术室绿灯亮起！千金散尽还复来，你保住了父母双全的人间至福！',
          traitGain: { id: 'm_saved_father', name: '💓 千金散尽换爹娘安康', type: 'dynasty', desc: '赚钱最大的意义，就是在死神面前有底气护住至亲' },
          outcome: '推着康复后的父亲在公园晒太阳时，你无比庆幸自己前半生拼命攒下的钱在这一刻派上了真正的用场。'
        },
        {
          label: '先咬牙签完上午的重大合同再改签下午航班赶回……推开病房门时，只看到一张冰冷的白布（⚠️终身悔恨）',
          desc: '【子欲养而亲不待 · 财富+18 / 终身遗憾】妈妈哭着捶打你的肩膀：“他最后一直看着门口等你啊！”',
          path: 'tyrant', pathGain: 14, organUpgrade: 'jaws',
          dv: -12, de: 18, da: 4, dl: -14,
          bondChange: { father: { name: '已故的父亲', status: '💔 临终前望着病房门口没能等到你', intimacy: 60, alive: false } },
          choreoType: 'hospital_emergency',
          choreoText: '💔 你捧着签好的千万合同跌坐在空荡荡的病床前，终于明白有些告别迟到一秒就是一辈子……',
          traitGain: { id: 'm_late_regret', name: '💔 迟到两小时的航班', type: 'tyrant', desc: '赢得了全世界的掌声，却错过了父亲最后一眼' },
          outcome: '从那天起，每逢下雨的深夜你都会惊醒。你赚到了花不完的钱，却再也没有人坐在村口等你回家了。'
        }
      ]
    }
  ],
  15: [
    {
      scene: 'school_station',
      epochName: '51–55岁 · 火车站台上的背影轮回',
      title: '🧳 五十三岁秋日：当年父母送你，如今你站在月台目送孩子远行',
      event: '五十三岁这年秋天，你的孩子也长到了十八九岁，拖着行李箱即将奔赴远方的大学/城市。站在几乎一模一样的火车站台上，你拼命往TA行李箱里塞妈妈做的辣酱和家乡特产，孩子笑着嫌你啰嗦，挥挥手走进了检票口。看着那个年轻挺拔的背影消失在人海里，你突然泪流满面：',
      enemyEmoji: '🧳',
      enemyLabel: '目送与代际轮回',
      choices: [
        {
          label: '站在站台直到列车消失在铁轨尽头，转身握紧老伴的手：“走吧，以后咱们俩好好保重身体，不给孩子添乱。”',
          desc: '【父母的成全 · 伴侣羁绊+20 / 健康+10】所谓父母子女一场，就是不断地目送TA的背影渐行渐远',
          path: 'dynasty', pathGain: 18, organUpgrade: 'crest',
          dv: 10, de: 6, da: 12, dl: 20,
          bondChange: {
            child: { status: '远赴他乡求学打拼·常通电话', intimacy: 95 },
            partner: { status: '空巢相伴·互相扶持', intimacy: 96 }
          },
          choreoType: 'love_blossom',
          choreoText: '🍂 秋风吹过空旷的站台，你与老伴十指相扣，完成了生命最温柔的托举与放手！',
          traitGain: { id: 'm_platform_cycle', name: '🍂 站台上的轮回目送', type: 'dynasty', desc: '长大后我就成了你，读懂了天下父母心的深沉' },
          outcome: '晚上回到突然安静下来的家里，老伴给你下了一碗清汤面，你们看着墙上孩子的成长照片，心中满是骄傲与温柔。'
        },
        {
          label: '把半生打拼的行业经验与资产整理成稳健的家族传承基金，做孩子闯荡世界最坚实的后盾',
          desc: '【家族底蕴+22】你告诉孩子：“大胆去闯，飞累了随时回家！”',
          path: 'tyrant', pathGain: 18, organUpgrade: 'armor',
          dv: 8, de: 22, da: 12, dl: 16,
          choreoType: 'house_upgrade',
          choreoText: '🏛️ 你为下一代筑起了遮风挡雨的家族港湾，让血脉站在你的肩膀上继续向上！',
          outcome: '你的远见与底气，让孩子在未来的人生选择中从不必因贫困而妥协。'
        },
        {
          label: '重拾年轻时未竟的梦想，报名老年大学/摄影旅行/公益支教，活出属于自己的下半场！',
          desc: '【身心健康+16 / 学识才艺+18】五十岁正是人生的第二个黄金青春',
          path: 'pioneer', pathGain: 18, organUpgrade: 'locomotion',
          dv: 16, de: 6, da: 18, dl: 12,
          choreoType: 'study_spark',
          choreoText: '📷 你背起相机与画板走遍祖国山河，活成了孩子们眼中最酷的长辈！',
          outcome: '你的朋友圈里全是雪山、草原与灿烂的笑容，孩子每次给同学看都满脸自豪。'
        }
      ]
    }
  ],
  16: [
    {
      scene: 'hospital_sunset',
      epochName: '56–60岁 · 母亲脑海里的橡皮擦（阿尔茨海默症的黄昏）',
      title: '🥟 五十八岁：忘记了全世界，却把冷饺子藏在兜里留给你的妈妈',
      event: '五十八岁这年，八十多岁的老母亲患上了严重的阿尔茨海默症（老年痴呆）。她开始认不出镜子里的自己，甚至叫不出你的名字，像个做错事的孩子一样局促不安。可那天家宴上，你却看见满头银发的她偷偷抓起盘子里的两个饺子，用纸巾包好塞进衣服口袋，喃喃自语道：“我儿/闺女最爱吃肉馅饺子，等他放学回来给他热热……”',
      enemyEmoji: '🥟',
      enemyLabel: '母爱永不遗忘',
      choices: [
        {
          label: '当场泪崩，跪在母亲膝前握住她的手：“妈，我放学回来了，我现在就吃！”',
          desc: '【催泪暴击 · 母亲羁绊圆满100】她忘了岁月、忘了自己，唯独爱你是刻进骨头里的本能',
          path: 'dynasty', pathGain: 22, organUpgrade: 'crest',
          dv: 8, de: 4, da: 10, dl: 26,
          bondChange: { mother: { status: '🕯️ 在你温暖陪伴中安度晚年', intimacy: 100 } },
          choreoType: 'hug_family',
          choreoText: '🥟 你流着泪吃下母亲口袋里微凉的饺子，老母亲拍着你的背露出孩童般纯净的笑容……',
          traitGain: { id: 'm_pocket_dumpling', name: '🥟 母亲口袋里的饺子', type: 'dynasty', desc: '时光偷走了她的记忆，却偷不走她爱你的本能' },
          outcome: '在母亲生命的最后几年里，你每天牵着她的手散步，就像小时候她牵着蹒跚学步的你一样。'
        },
        {
          label: '提前申请内退/放权公司事务，在老屋院子里种满母亲最爱的桂花，日夜悉心照料',
          desc: '【至孝顺遂 · 身心宁静+16 / 亲情+22】子孙看在眼里，孝道在无声中代代相传',
          path: 'pioneer', pathGain: 18, organUpgrade: 'lungs',
          dv: 16, de: -4, da: 12, dl: 22,
          choreoType: 'hug_family',
          choreoText: '🌼 桂花树下摇椅轻晃，你为老母亲梳拢满头银丝，岁月静好！',
          outcome: '母亲走的时候干干净净、安详体面，没有受一点褥疮之苦。'
        },
        {
          label: '聘请全天候专业医护团队并设立社区失智老人互助基金，帮助更多家庭',
          desc: '【社会声望+20 / 家境+8】老吾老以及人之老，善举温暖了一方百姓',
          path: 'tyrant', pathGain: 18, organUpgrade: 'locomotion',
          dv: 10, de: 8, da: 16, dl: 18,
          choreoType: 'vitality_glow',
          choreoText: '🎗️ 你的养老公益行动登上了地方报道，温暖了无数失智老人家庭！',
          outcome: '母亲在专业与温情的双重照护下安详走完了九十岁高龄。'
        }
      ]
    }
  ],
  17: [
    {
      scene: 'wedding_home',
      epochName: '61–66岁 · 花甲荣休与第三代孙辈的降生',
      title: '👴 六十四岁：当一个小奶团子摇摇晃晃扑进你怀里喊“爷爷/奶奶”',
      event: '六十四岁这年，你正式卸下了半生奔波的职场重担。曾经挺拔的脊背略微有些发福微驼，保温杯里泡上了枸杞。周末阳光正好，已经成家立业的儿女带着刚学会走路的小孙辈回来看你，小家伙摇摇晃晃扑进你怀里，奶声奶气地喊了一声“爷爷/奶奶（外公/外婆）”：',
      enemyEmoji: '🧸',
      enemyLabel: '隔代亲与天伦乐',
      choices: [
        {
          label: '笑得眼角全是皱纹，把小孙辈抱上膝头讲你年轻时的故事，给儿女包上厚厚的红包！',
          desc: '【三代同堂 · 幸福+24 / 血脉延续+1世代】看着儿孙绕膝，你觉得这辈子受过的所有苦都值了',
          path: 'dynasty', pathGain: 20, organUpgrade: 'crest',
          offspringGain: 1,
          dv: 12, de: -4, da: 10, dl: 24,
          bondChange: { child: { status: '成家立业·儿孙绕膝三代同堂', intimacy: 98 } },
          choreoType: 'baby_born',
          choreoText: '👨‍👩‍👧‍👦 三代同堂聚在阳光庭院里拍下全家福，欢声笑语穿透云霄！',
          traitGain: { id: 'm_three_generations', name: '🏮 三代同堂合家欢', type: 'dynasty', desc: '血脉枝繁叶茂，人间烟火最抚凡人心' },
          outcome: '全家福照片洗出来挂在客厅正中央，那是你一生最骄傲的勋章。'
        },
        {
          label: '与相伴半生的老伴开启环球/全国自驾房车之旅，去补上年轻时没钱去的远方！',
          desc: '【神仙眷侣 · 健康+16 / 视野+18】从青丝到白发，你们手牵手走过了千山万水',
          path: 'pioneer', pathGain: 18, organUpgrade: 'locomotion',
          dv: 16, de: 6, da: 18, dl: 18,
          bondChange: { partner: { status: '白发苍苍仍与你手牵手看夕阳', intimacy: 99 } },
          choreoType: 'love_blossom',
          choreoText: '🚐 夕阳公路下两位白发老人依偎在车旁看雪山日落，浪漫至死不渝！',
          outcome: '在西藏纳木错的星空下，老伴笑着说：“下辈子我还嫁/娶你。”'
        },
        {
          label: '返聘回母校/社区担任荣誉导师，把毕生所学无偿传授给寒门学子',
          desc: '【精神丰碑 · 学识声望+22】你曾淋过雨，所以在晚年为无数寒门少年撑起了伞',
          path: 'tyrant', pathGain: 18, organUpgrade: 'senses',
          dv: 10, de: 8, da: 22, dl: 16,
          choreoType: 'study_spark',
          choreoText: '🎓 满头银发的你站在讲台上熠熠生辉，受助学子向你深深鞠躬！',
          outcome: '每年春节你都会收到来自全国各地学生寄来的明信片。'
        }
      ]
    }
  ],
  18: [
    {
      scene: 'hospital_sunset',
      epochName: '67–72岁 · 古稀之年的老友凋零与夕阳长椅',
      title: '🌇 七十岁黄昏：通讯录里渐渐变灰的名字与老伴的手',
      event: '步入七十岁古稀之年，身体的零件开始不可避免地老化。这几年，通讯录里年轻时的死党、老同事一个接一个地安静离开，参加葬礼的次数渐渐多过了婚礼。傍晚你和老伴（或独自一人）坐在公园的木长椅上看夕阳一点点沉入天际线：',
      enemyEmoji: '🌇',
      enemyLabel: '古稀暮年感悟',
      choices: [
        {
          label: '握紧老伴布满老年斑的手：“咱们谁也别先走，要走也得把你安顿好了我再走。”',
          desc: '【白首偕老 · 伴侣羁绊+22 / 健康+10】少年夫妻老来伴，一生一世一双人',
          path: 'dynasty', pathGain: 18, organUpgrade: 'crest',
          dv: 10, de: 6, da: 10, dl: 22,
          bondChange: { partner: { status: '金婚相守·不离不弃', intimacy: 100 } },
          choreoType: 'love_blossom',
          choreoText: '🌇 金色晚霞将两道佝偻依偎的背影拉得很长很长，岁月在此刻温柔定格……',
          traitGain: { id: 'm_golden_wedding', name: '🌇 夕阳长椅上的金婚', type: 'dynasty', desc: '走过半世纪风雨，依然是彼此眼中的少年' },
          outcome: '你们慢悠悠地踩着路灯的影子往家走，晚风里全是半生相守的余温。'
        },
        {
          label: '坐在书桌前戴上老花镜，亲手撰写一部记录时代变迁与家族三代人故事的《家史回忆录》',
          desc: '【传世家书 · 学识+20 / 家族精神永存】让百年之后的子孙依然知道自己从何处来',
          path: 'pioneer', pathGain: 18, organUpgrade: 'senses',
          dv: 8, de: 6, da: 20, dl: 18,
          choreoType: 'study_spark',
          choreoText: '🖋️ 一笔一划写下八十年人间悲欢，装订成册的《家族回忆录》将成为传家至宝！',
          outcome: '当孩子们捧读你写下的童年苦难、青春爱恋与奋斗故事时，无不热泪盈眶。'
        },
        {
          label: '坚持每日太极/晨练与定期体检，把身体保养得硬朗健康，绝不成为儿女的负担',
          desc: '【健康长寿+20】七十多岁依然步履矫健、精神矍铄',
          path: 'tyrant', pathGain: 18, organUpgrade: 'lungs',
          dv: 20, de: 6, da: 8, dl: 14,
          choreoType: 'vitality_glow',
          choreoText: '🍵 晨光松柏下你气定神闲，活成了街坊邻里羡慕的长寿福星！',
          outcome: '体检医生笑着说你的心肺指标比许多五十岁的人还要好。'
        }
      ]
    }
  ],
  19: [
    {
      scene: 'hospital_sunset',
      epochName: '73–79岁 · 人生的最后一场大雪与家书托付',
      title: '❄️ 七十八岁冬日：把一生的叮嘱与家产托付给下一代',
      event: '七十八岁那年冬天，窗外下起了鹅毛大雪。你明显感觉到自己的体力和记忆力在像沙漏一样流逝。除夕团圆夜，看着满屋子忙碌的儿女和已经长高懂事的孙辈，你把孩子们叫到沙发前，打开了那个陪伴你半生的木盒：',
      enemyEmoji: '📜',
      enemyLabel: '家风与遗泽托付',
      choices: [
        {
          label: '把房产与积蓄平分给儿女，只留下一句家训：“一家人永远要互相帮扶，平安健康比大富大贵更重要。”',
          desc: '【家风万年 · 亲情+26】兄友弟恭、家庭和睦，你留给后代最宝贵的财富是爱与团结',
          path: 'dynasty', pathGain: 20, organUpgrade: 'armor',
          dv: 10, de: 12, da: 14, dl: 26,
          choreoType: 'hug_family',
          choreoText: '🏮 除夕守岁灯火通明，儿孙们围膝倾听你的教诲，家族血脉温情流淌！',
          outcome: '儿女们红着眼眶紧紧握着你的手，发誓一定守好这个温暖的大家庭。'
        },
        {
          label: '设立家族教育与科研奖学金，并签下遗体/眼角膜捐献志愿书，让生命最后一次照亮人间！',
          desc: '【大爱无疆 · 认知声望+26】生如夏花之绚烂，死如秋叶之静美',
          path: 'pioneer', pathGain: 20, organUpgrade: 'senses',
          dv: 8, de: 8, da: 26, dl: 20,
           butterflyFlag: 'chose_lagerstatte',
          choreoType: 'study_spark',
          choreoText: '🕯️ 你用高尚的灵魂抉择，让自己的眼眸在死后依然能替别人看见春天的花开！',
          outcome: '孩子们由衷地敬佩你的豁达与大爱，你的名字被镌刻在城市纪念碑上。'
        },
        {
          label: '将打拼一生的事业版图与核心人脉正式交棒给最优秀的继承人，完成跨代交接！',
          desc: '【家业长青 · 财富传承+24】下一代将在更高起点上续写家族荣光',
          path: 'tyrant', pathGain: 20, organUpgrade: 'jaws',
          dv: 8, de: 24, da: 14, dl: 18,
          choreoType: 'house_upgrade',
          choreoText: '👑 家族印信交接完成，第二代继承人正式接过领航大旗！',
          outcome: '你放心地退居幕后，看着后辈将家业推向新的高度。'
        }
      ]
    }
  ],
  20: [
    {
      scene: 'hospital_sunset',
      epochName: '80–86岁 · 回望一生',
      title: '🌅 人生终局：当心电监护仪渐渐平缓，你最后看了一眼这人间',
      event: '八十六岁春暖花开的午后，阳光透过洁白的窗纱洒在你的病床上。窗外玉兰花开了，隐约传来小学校园里的读书声。儿女和孙辈们围在床前，轻轻握着你温暖而干枯的手。在你合上双眼前的最后一秒，一生走过的画面如电影般在脑海中闪回——童年的雨夜、妈妈的微笑、22岁的站台、35岁的车库、抱起孩子的那一刻……',
      enemyEmoji: '🌅',
      enemyLabel: '人间圆满谢幕',
      choices: [
        {
          label: '嘴角扬起一抹安详温柔的微笑，轻轻握了握孩子们的手：“别哭，我只是去见想念很久的爸妈了……”',
          desc: '【催泪圆满终章】在至亲的簇拥与泪光中安详合眼，走完了波澜壮阔又温情脉脉的一生',
          path: 'dynasty', pathGain: 25, organUpgrade: 'crest',
          dv: 10, de: 10, da: 16, dl: 30,
          choreoType: 'love_blossom',
          choreoText: '🌅 漫天晚霞与樱花瓣轻轻飘落，你在亲人的泪光与爱意中圆满谢幕，准备开启下一世传承！',
          outcome: '微风拂过窗台，你仿佛又回到了六岁那个傍晚，妈妈站在老屋门口笑着喊你的小名：“天黑啦，快回家吃饭吧……”'
        },
        {
          label: '目光澄澈地望向窗外浩瀚的苍穹，将一生的智慧与手稿留在人间，坦然汇入46亿年的星尘长河！',
          desc: '【回忆与传承】你把这一生的疑问、答案和遗憾，留给愿意读下去的人。',
          path: 'pioneer', pathGain: 25, organUpgrade: 'senses',
          dv: 10, de: 14, da: 30, dl: 20,
           butterflyFlag: 'chose_lagerstatte',
          choreoType: 'study_spark',
          choreoText: '🌌 繁星点亮天际，你的精神与血脉将跨越世代生生不息！',
          outcome: '墓志铭上写着：“他/她曾来过这人间，看遍了春花秋月，留下了温暖与光。”'
        },
        {
          label: '叮嘱儿孙带着你的骨灰撒向大海与高山，把不屈的生命力传给即将降生的【下一世】！',
          desc: '【荣耀传承】一代人有一代人的长征，你的儿孙已准备好接过家族接力棒！',
          path: 'tyrant', pathGain: 25, organUpgrade: 'armor',
          dv: 12, de: 20, da: 20, dl: 24,
          choreoType: 'house_upgrade',
          choreoText: '🌊 浪花拥抱星辰，你的家族传奇即将开启崭新的下一世篇章！',
          outcome: '你的故事落下了帷幕，但流淌在你后代血脉里的勇气，才刚刚开始新的远征。'
        }
      ]
    }
  ]
};

const ROGUELIKE_EVENT_POOL = [
  ...ECOLOGY_CHALLENGES.map(ecologyStage),
  // --- EARLY EPOCH POOL (Ticks 2, 4, 5) ---
  {
    id: 'ev_early_predator_ambush',
    epoch: 'early',
    scene: 'ambush',
    title: '暗影突袭：破壳期的第一道生死筛',
    event: '你在栖息地边缘刚尝试独立觅食，一道蛰伏已久的掠食者黑影猛然扑出！同批降生的幼体瞬间四散奔逃，你的身体在肾上腺素/应激激素冲刷下做出本能反应：',
    choices: [
      {
        label: '🦷 【凶悍反咬】张开幼年颌骨/附肢死死咬住袭击者鼻尖弱点！',
        desc: '升级【🦷捕食颚齿 +1阶】· 开启掠食霸主之路，画布头部长出外露利齿！',
        path: 'tyrant', pathGain: 15, organUpgrade: 'jaws',
        dv: -3, de: 14, da: 14, dl: 4,
        traitGain: { id: 'tr_jaw_awakening', name: '🦷 嗜血利颚觉醒', type: 'tyrant', desc: '幼年搏杀促使颌部骨骼与咬肌加速钙化发育' },
        outcome: '你凶狠的一记反咬撕下袭击者一块皮肉！随着骨骼噼啪作响，你的【捕食颚齿】完成第一次具象进化！'
      },
      {
        label: '🛡️ 【缩甲硬抗】蜷曲躯干、分泌钙质/角质护住心肺要害！',
        desc: '升级【🛡️背脊骨板 +1阶】· 画布背部生长出坚韧的角质鳞甲与护盾！',
        path: 'pioneer', pathGain: 14, organUpgrade: 'armor',
        dv: 14, de: 4, da: 16, dl: 6,
        traitGain: { id: 'tr_carapace_seed', name: '🛡️ 初生骨板护盾', type: 'pioneer', desc: '体表外骨骼或鳞甲显著增厚，防御力跃升' },
        outcome: '利爪在你硬化蜷曲的背部擦出火花却未能伤及内脏，你的背部正式演化出清晰可见的【骨板装甲】！'
      },
      {
        label: '🌺 【高频共鸣】释放求救信息素与声波，召唤同巢手足结阵反制！',
        desc: '升级【🌺求偶/共鸣华冠 +1阶】· 吸引1只同巢手足长期跟随保驾护航！',
        path: 'dynasty', pathGain: 15, organUpgrade: 'crest',
        dv: 10, de: 8, da: 10, dl: 22,
        traitGain: { id: 'tr_swarm_call', name: '🌺 群落声波共鸣', type: 'dynasty', desc: '头顶共鸣腔与信息素腺体发育，可随时召唤同伴' },
        outcome: '你的共鸣波唤醒了整窝同巢幼体，捕食者被群体声势震慑退去，你的头顶演化出了醒目的【共鸣华冠】！'
      }
    ]
  },
  {
    id: 'ev_early_sensory_awakening',
    epoch: 'early',
    scene: 'mutation',
    title: '迷雾与暗流：感官神经系统的第一次跃迁',
    event: '能见度极低的风暴浊流或浓密丛林遮蔽了视线，周围既有高热量的稀有猎物，也潜藏着剧毒生物与流沙陷阱。你将重点开发哪一种生理感官？',
    choices: [
      {
        label: '👁️ 【方解石复眼 / 立体双目聚焦】强化视网膜与晶状体折射矩阵！',
        desc: '升级【👁️复眼与感官 +1阶】· 画布头部点亮璀璨的360°视觉/声呐探测波环！',
        path: 'pioneer', pathGain: 15, organUpgrade: 'senses',
        dv: 8, de: 16, da: 22, dl: 6,
        traitGain: { id: 'tr_crystal_eye', name: '👁️ 全景立体魔眼', type: 'pioneer', desc: '任何伪装的猎物与天敌在你眼中皆无所遁形' },
        outcome: '你的眼部晶格发生精密重构，穿透迷雾精准锁定猎物！画布上你的头部亮起了深邃的感官光环。'
      },
      {
        label: '🦵 【爆发推进肌群】强化尾椎摆动肌与后肢/肉鳍弹射肌腱！',
        desc: '升级【🦵推进肢体/翼膜 +1阶】· 画布生物获得高速冲刺残影与健硕肢体！',
        path: 'tyrant', pathGain: 14, organUpgrade: 'locomotion',
        dv: 12, de: 14, da: 16, dl: 4,
        traitGain: { id: 'tr_burst_muscle', name: '🦵 雷霆弹射肌腱', type: 'tyrant', desc: '瞬间爆发航速/奔跑速度提升40%' },
        outcome: '你的尾部与四肢肌肉纤维成倍增粗，轻轻一摆便如离弦之箭般掠过栖息地！'
      },
      {
        label: '🧬 【记忆族群迁徙图谱】跟随年长个体学习安全觅食路线与水源标记',
        desc: '繁衍倾向+15 · 稳健积累营养，与族群长老建立深厚羁绊',
        path: 'dynasty', pathGain: 15, organUpgrade: 'crest',
        dv: 12, de: 14, da: 12, dl: 20,
        outcome: '你将世代相传的领地安全路线刻入脑海，平安度过了最脆弱的幼年摸索期。'
      }
    ]
  },
  {
    id: 'ev_early_wounded_kin_butterfly',
    epoch: 'early',
    scene: 'duel',
    title: '宿命伏笔：带血的残骸与独眼霸主的威压（蝴蝶效应起点）',
    event: '你在领地交界处发现一只受了重伤的同类亚成体，它身旁躺着半具高能量的猎物残骸，而远处一头体型硕大的【独眼掠食霸主】正冷冷注视着这边。你的抉择将埋下贯穿一生的因果伏笔：',
    choices: [
      {
        label: '🦷 【弱肉强食】夺走全部猎物吞食，并向远处的独眼霸主龇牙宣战！',
        desc: '升级【🦷捕食颚齿 +1阶】· 能量暴涨，但与【独眼宿敌】结下死仇（成年期必爆发决战）',
        path: 'tyrant', pathGain: 16, organUpgrade: 'jaws',
        butterflyFlag: 'made_nemesis',
        dv: 6, de: 24, da: 12, dl: -6,
        traitGain: { id: 't_nemesis_mark', name: '🎯 宿敌死仇：独眼霸主', type: 'tyrant', desc: '独眼霸主记住了你的气味，将在你成年时率众寻仇' },
        outcome: '高蛋白血肉让你的颌骨与体型暴涨一截！远处的独眼霸主发出一声低吼，宿命的齿轮开始转动。'
      },
      {
        label: '🌺 【舍己救伴】分出食物替重伤同类止血，并掩护它退回安全巢穴！',
        desc: '升级【🌺求偶华冠 +1阶】· 收获【生死伴侣/盟友】（成年期绝境时将替你挡刀并繁衍后代！）',
        path: 'dynasty', pathGain: 16, organUpgrade: 'crest',
        butterflyFlag: 'rescued_ally',
        dv: 8, de: -6, da: 12, dl: 26,
        traitGain: { id: 't_sworn_ally', name: '🤝 生死伴侣：获救同类', type: 'dynasty', desc: '你拯救了它的性命，它将与你共育后代、生死相随' },
        outcome: '你用肩膀撑起受伤的同伴撤离险境。它康复后寸步不离地跟在你身侧，画布上多了一位忠实的伴侣！'
      },
      {
        label: '👁️ 【洞悉解剖弱点】暗中观察独眼霸主的呼吸频率与旧伤死角',
        desc: '升级【👁️复眼感官 +1阶】· 觉醒【天敌解剖学】，成年期遭遇顶级掠食者可一击反杀！',
        path: 'pioneer', pathGain: 16, organUpgrade: 'senses',
        butterflyFlag: 'studied_weakness',
        dv: 10, de: 10, da: 24, dl: 6,
        traitGain: { id: 't_predator_lore', name: '🧠 洞悉天敌死穴', type: 'pioneer', desc: '一眼看穿大型掠食者的发力盲区与旧伤要害' },
        outcome: '你冷静记录下顶级掠食者每一次呼吸时胸腔与颈部的破绽，感官神经核愈发精密！'
      }
    ]
  },
  {
    id: 'ev_early_parasite_symbiosis',
    epoch: 'early',
    scene: 'mutation',
    title: '微生态博弈：寄生虫入侵还是跨物种共生？',
    event: '温暖的季节带来了大量依附在体表与消化道的小型伴生生物与微生物群落。许多同类因感染而虚弱，你的免疫与生理系统将如何应对？',
    choices: [
      {
        label: '🫁 【免疫风暴与高热代谢】提高核心体温/细胞代谢率，强行烧灭入侵病原！',
        desc: '升级【🫁心肺与温血代谢 +1阶】· 胸腔心脏搏动加速，开启恒温内脏进化！',
        path: 'pioneer', pathGain: 15, organUpgrade: 'lungs',
        dv: 12, de: -6, da: 24, dl: 6,
        traitGain: { id: 'tr_warm_blood', name: '🫁 恒温高热心脏', type: 'pioneer', desc: '具备初步的内温调节能力，无惧严寒与病原体' },
        outcome: '你的心脏搏动出滚烫的血液流遍全身，X光透视图中你的【心肺血管系统】亮起炽热的红光！'
      },
      {
        label: '🌺 【建立互利共生契约】接纳清洁小鱼/共生菌群，换取终身净体与毒素免疫！',
        desc: '升级【🌺求偶华冠 +1阶】· 体魄与繁衍双丰收，解锁【共生建筑师】路线',
        path: 'dynasty', pathGain: 15, organUpgrade: 'crest',
        dv: 16, de: 12, da: 14, dl: 22,
        traitGain: { id: 't_symbiosis', name: '🌺 跨物种共生契约', type: 'dynasty', desc: '伴生清洁群落为你清除一切寄生隐患并提升求偶魅力' },
        outcome: '你温顺地张开鳃盖/羽翼让共生伙伴清理体表，焕然一新的躯体散发着迷人的生命光泽！'
      },
      {
        label: '🛡️ 【剧毒腺体转化】将吞入的生物毒素富集到背部棘刺与唾液腺中！',
        desc: '升级【🛡️背脊骨板/毒刺 +1阶】· 任何敢咬你的天敌都将付出惨痛代价！',
        path: 'tyrant', pathGain: 15, organUpgrade: 'armor',
        dv: 10, de: 10, da: 18, dl: 4,
        traitGain: { id: 'tr_venom_spine', name: '🛡️ 淬毒背棘装甲', type: 'tyrant', desc: '背刺与颌腺富含神经毒素，攻防一体' },
        outcome: '你的背棘与齿尖泛起幽蓝的毒光，成为了食物链中最令人忌惮的带刺霸主！'
      }
    ]
  },

  // --- MID EPOCH POOL (Ticks 6, 7, 8, 10) ---
  {
    id: 'ev_mid_anatomical_metamorphosis',
    epoch: 'mid',
    scene: 'mutation',
    title: '骨骼与器官大重塑：突破物种解剖极限！',
    event: '步入青年鼎盛期，你体内的生长激素与基因表达迎来了决定性分水岭！你将把积攒的所有营养投入哪一项核心器官的具象化改造？',
    choices: [
      {
        label: '🦷 【终极碎骨巨颚改造】加宽头骨颞颥孔，演化出足以咬穿任何硬壳的断头台巨颚！',
        desc: '升级【🦷捕食颚齿 +1阶】· 体型放大25%，正面死斗所向披靡！',
        path: 'tyrant', pathGain: 16, organUpgrade: 'jaws',
        dv: 16, de: -4, da: 12, dl: 6,
        traitGain: { id: 't_gigantism', name: '🦖 巨物化碎骨霸体', type: 'tyrant', desc: '头骨与颌部发育至物种极限，画布呈现巨型锯齿利颚' },
        outcome: '伴随着震撼的骨骼重塑，你的颌部在画布上显著扩张并长出骇人的巨齿，一口即可咬穿岩石般的硬甲！'
      },
      {
        label: '🫁🦵 【水陆/极境跨界器官双修】同时强化双叶原始肺泡与四肢支撑腕骨/飞羽！',
        desc: '升级【🫁心肺 +1阶】与【🦵运动肢体 +1阶】· 打开跨纪元禁区大门！',
        path: 'pioneer', pathGain: 18, organUpgrade: 'locomotion',
        butterflyFlag: 'mutated_organ',
        dv: 10, de: 8, da: 26, dl: 8,
        traitGain: { id: 't_cross_organ', name: '🫁 跨界双肺与腕骨', type: 'pioneer', desc: '兼具高效摄氧肺泡与强力运动骨骼，大灾变时可开辟陆地/深渊生路' },
        outcome: '解剖蓝图上你的【心肺】与【运动肢体】同时晋升！你已经具备了跨越生态位边界的革命性躯体！'
      },
      {
        label: '🌺🛡️ 【帝王华冠与护雏重甲】发育壮丽的求偶骨冠与厚实侧翼护甲',
        desc: '升级【🌺求偶华冠 +1阶】与【🛡️背甲 +1阶】· 直接吸引伴侣并诞下 +1 世代子嗣！',
        path: 'dynasty', pathGain: 16, organUpgrade: 'crest',
        offspringGain: 1,
        dv: 14, de: 8, da: 12, dl: 26,
        outcome: '你头顶华冠流光溢彩、背披坚甲，立刻赢得了优质伴侣的芳心，第1批幼崽破壳而出并跟在了你的身后！'
      }
    ]
  },
  {
    id: 'ev_mid_forbidden_frontier',
    epoch: 'mid',
    scene: 'migration',
    title: '未知禁区探索：深渊海沟、干涸泥滩与火山高地（蝴蝶效应节点）',
    event: '原有栖息地个体密度达到饱和，而在边界之外是一片令普通同类闻之色变的生命禁区（低氧、酷热或严寒）。但你的感官告诉你，那里隐藏着免受天敌侵扰的世外桃源：',
    choices: [
      {
        label: '🦵🫁 【依仗跨界运动与心肺器官闯入禁区】开辟只属于你们家族的世外避难所！',
        desc: '升级【🫁心肺代谢 +1阶】· 触发蝴蝶效应：锁定第16阶段大灭绝【全身而退】金色生路！',
        path: 'pioneer', pathGain: 18, organUpgrade: 'lungs',
        butterflyFlag: 'explored_forbidden_zone',
        dv: 6, de: 12, da: 26, dl: 10,
        traitGain: { id: 't_forbidden_pioneer', name: '🚀 禁区桃源开拓者', type: 'pioneer', desc: '掌握通往避难所的秘密通道，大灭绝降临时可庇护全族' },
        outcome: '你凭着强悍的心肺与肢体闯过生命禁区，在彼岸发现了一座四季恒温、食物丰沛的演化学伊甸园！'
      },
      {
        label: '🦷 【血洗核心猎场自立为王】谁敢赶我走？正面击溃核心区的老牌霸主！',
        desc: '升级【🦷捕食颚齿 +1阶】· 夺取黄金领地，每阶段自动回复额外能量！',
        path: 'tyrant', pathGain: 16, organUpgrade: 'jaws',
        butterflyFlag: 'core_tyrant',
        dv: 8, de: 24, da: 12, dl: 12,
        traitGain: { id: 't_territory_king', name: '👑 核心猎场暴君', type: 'tyrant', desc: '独占最肥沃的核心猎场，威震四方' },
        outcome: '你用进化的巨颚将旧领主轰出核心区，昂首立于领地最高处俯瞰众生！'
      },
      {
        label: '🛡️🌺 【修筑世代育幼堡垒】发动全族在背风岩洞/礁盘筑起坚不可摧的集体巢穴！',
        desc: '升级【🛡️背甲 +1阶】并直接繁衍 +1 世代子嗣 · 为家族延续打下铁桶江山！',
        path: 'dynasty', pathGain: 16, organUpgrade: 'armor',
        butterflyFlag: 'built_sanctuary',
        offspringGain: 1,
        dv: 14, de: 10, da: 12, dl: 26,
        traitGain: { id: 't_sanctuary', name: '🏰 世代育幼圣地', type: 'dynasty', desc: '拥有固若金汤的家族巢穴，后代成活率翻倍' },
        outcome: '全族齐心协力筑起了天然堡垒般的育幼圣地，新的幼崽在巢穴中平安降生！'
      }
    ]
  },
  {
    id: 'ev_mid_climate_anomaly_drought',
    epoch: 'mid',
    scene: 'cataclysm',
    title: '古气候剧变：百年一遇的赤地大旱与缺氧潮',
    event: '受当世天命气候波动影响，水源干涸、溶解氧骤降，平日温顺的植食者成批倒毙，食腐者与掠食者红了眼四处游荡：',
    choices: [
      {
        label: '🫁 【启动低代谢夏眠 / 气室浮力调节】将心率降至每分钟2次，静待甘霖降临',
        desc: '升级【🫁心肺代谢 +1阶】· 几乎零消耗度过灾年，解锁【活化石】长寿潜质',
        path: 'pioneer', pathGain: 15, organUpgrade: 'lungs',
        dv: 14, de: 12, da: 22, dl: 6,
        traitGain: { id: 't_immortal_cell', name: '🕰️ 极境慢代谢细胞', type: 'pioneer', desc: '衰老速度降低70%，锁定【深渊隐士·活化石】终局资格' },
        outcome: '你在地下深穴/深海冷泉中进入奇妙的慢镜头生命状态，当旱季结束苏醒时，你的体魄依然处于巅峰！'
      },
      {
        label: '🦷 【垄断最后的水源/绿洲】守株待兔猎杀一切前来饮水喘息的猎物！',
        desc: '升级【🦷捕食颚齿 +1阶】· 能量满载而归，尽显霸主本色',
        path: 'tyrant', pathGain: 15, organUpgrade: 'jaws',
        dv: 6, de: 26, da: 14, dl: 2,
        outcome: '最后的绿洲成了你的私人狩猎场，无数猎物主动送上门来，你的体型与颚齿再度膨胀！'
      },
      {
        label: '🦵🌺 【率领家族大迁徙】凭感官与长辈记忆，带领伴侣与幼崽跋涉千里寻找新水系！',
        desc: '升级【🦵推进肢体 +1阶】并繁衍 +1 世代子嗣 · 家族凝聚力达到顶峰',
        path: 'dynasty', pathGain: 16, organUpgrade: 'locomotion',
        offspringGain: 1,
        dv: 8, de: 14, da: 16, dl: 26,
        outcome: '跨越千山万水，你带领全族找到了碧波荡漾的新绿洲，并在新家园迎来了新生命的诞生！'
      }
    ]
  },
  {
    id: 'ev_mid_rival_pack_war',
    epoch: 'mid',
    scene: 'duel',
    title: '生态位军备竞赛：外来入侵物种的正面挑衅！',
    event: '随着大陆板块漂移或洋流交汇，一群从未见过的强悍外来竞争物种涌入你的栖息地，企图抢占你们的猎场与筑巢区！',
    choices: [
      {
        label: '🦷🛡️ 【正面迎击外来首领】用进化的巨颚与重甲展开王对王单挑，将其彻底碾碎！',
        desc: '升级【🛡️背脊重甲 +1阶】· 大挫入侵者锐气，捍卫本土霸权',
        path: 'tyrant', pathGain: 16, organUpgrade: 'armor',
        dv: 8, de: 22, da: 16, dl: 14,
        outcome: '你硬扛外来首领的扑击，反手一记雷霆重击将其击溃！入侵者全线溃退，你的重甲威名远扬！'
      },
      {
        label: '👁️🦵 【错位竞争与立体战法】利用复眼视觉与高机动肢体开辟高空/深水立体猎场',
        desc: '升级【👁️复眼感官 +1阶】· 降维打击外来物种，适应度大幅跃升',
        path: 'pioneer', pathGain: 16, organUpgrade: 'senses',
        dv: 12, de: 18, da: 24, dl: 10,
        outcome: '当入侵者还在地面/表层争抢时，你早已凭借立体感官与机动肢体掌控了更高维度的生态位！'
      },
      {
        label: '🌺 【召集本土百族联防并繁育后代】用群体数量优势彻底同化或驱逐入侵者！',
        desc: '升级【🌺求偶华冠 +1阶】并直接繁衍 +2 世代子嗣（保障下一世血脉无忧！）',
        path: 'dynasty', pathGain: 18, organUpgrade: 'crest',
        offspringGain: 2,
        dv: 10, de: 10, da: 14, dl: 28,
        outcome: '在你的华冠号召下，浩浩荡荡的族群大军筑起铜墙铁壁，不仅守住家园，更迎来了家族婴儿潮！'
      }
    ]
  },

  // --- LATE / PRIME EPOCH POOL (Ticks 11, 13, 14) ---
  {
    id: 'ev_late_courtship_dynasty',
    epoch: 'late',
    scene: 'courtship',
    title: '繁衍盛典与基因传承：决定你的血脉能否延续至下一世！',
    event: '⚠️【血脉传承关键节点】满月升起，繁殖季的召唤响彻天地！如果你在本世结束前没有留下至少 1 个存活子嗣，你的家族血脉将在本世终结时彻底断绝！面对众多求偶竞争者与严酷环境，你将如何繁衍后代？',
    choices: [
      {
        label: '🌺 【盛大求偶交响与多胎优育】展示满级华冠与强健体魄，倾力繁育庞大子嗣群！',
        desc: '直接诞下/孵化 +3 世代子嗣！升级【🌺求偶华冠 +1阶】，100%稳固下一世血脉继承权！',
        path: 'dynasty', pathGain: 20, organUpgrade: 'crest',
        offspringGain: 3,
        dv: 8, de: -8, da: 14, dl: 32,
        traitGain: { id: 't_patriarch', name: '🌳 万代血脉始祖', type: 'dynasty', desc: '子孙满堂，本世结束后可携带2项核心基因开启下一世！' },
        outcome: '🎉 血脉大昌！三代健壮的幼崽破壳/降生并欢快地跟随在你身后，你的家族血脉已稳如泰山！'
      },
      {
        label: '🦷 【比武招亲 · 强者独享最优伴侣】击败所有求偶竞争对手，将最强掠食基因传给后代！',
        desc: '诞下 +2 世代精英子嗣！升级【🦷捕食颚齿 +1阶】，子代天生具备极高攻击力！',
        path: 'tyrant', pathGain: 16, organUpgrade: 'jaws',
        offspringGain: 2,
        dv: 10, de: 12, da: 16, dl: 24,
        outcome: '你以无可匹敌的王者雄风折服了最优秀的伴侣，诞下两窝继承了你锋利巨颚的精锐后代！'
      },
      {
        label: '🫁 【跨地域基因远播】将受精卵/幼崽安置在具有极高抗灾能力的跨界秘境中抚育！',
        desc: '诞下 +2 世代高适应子嗣！升级【🫁心肺代谢 +1阶】，突破物种基因天花板！',
        path: 'pioneer', pathGain: 18, organUpgrade: 'lungs',
        offspringGain: 2,
        dv: 12, de: 8, da: 26, dl: 24,
        traitGain: { id: 't_ceiling_breaker', name: '🚀 打破基因天花板', type: 'pioneer', desc: '彻底突破70分物种上限，后代具备跨纪元宏演化潜能' },
        outcome: '你的后代在奇异的跨界环境中破壳，天生拥有超越时代的器官构造，下一世血脉正式就绪！'
      }
    ]
  },
  {
    id: 'ev_late_apex_titan_hunt',
    epoch: 'late',
    scene: 'duel',
    title: '巅峰王座之战：撼动纪元巨兽的终极试炼！',
    event: '步入生命最鼎盛的黄金岁月，你的各项器官已高度发达。一头本纪元体型最庞大、防御最惊人的传奇巨兽出现在地平线/深海前缘，整片生态圈都在屏息注视这场巅峰交锋：',
    choices: [
      {
        label: '🦷🦵 【雷霆突刺 · 一击贯穿要害】全速爆发冲刺，用满级巨颚/附肢正面轰碎神话！',
        desc: '升级【🦷捕食颚齿 +1阶】· 登顶【食物链唯一真神】，能量与声望拉满！',
        path: 'tyrant', pathGain: 18, organUpgrade: 'jaws',
        dv: -4, de: 28, da: 18, dl: 16,
        traitGain: { id: 't_god_slayer', name: '🩸 弑神级掠食霸主', type: 'tyrant', desc: '曾正面击败纪元泰坦巨兽，锁定【绝代霸主】终局资格' },
        outcome: '天地为之震颤！你的巨颚迸发出摧枯拉朽的咬合力，正面终结了不败巨兽的神话！'
      },
      {
        label: '🌺🦵 【率领子代狼群战术合围】亲自指挥身后的伴侣与幼崽进行教科书级协同狩猎！',
        desc: '升级【🦵推进肢体 +1阶】并额外繁衍 +1 世代子嗣 · 让孩子们在实战中继承你的王道！',
        path: 'dynasty', pathGain: 18, organUpgrade: 'locomotion',
        offspringGain: 1,
        dv: 12, de: 22, da: 18, dl: 28,
        outcome: '在你的精准调度下，你的子嗣们左右包抄、配合无间，以零伤亡拿下了史诗级战果！'
      },
      {
        label: '👁️🛡️ 【借力打力与环境智取】利用复眼预判与坚甲防御，将巨兽引入天然绝境！',
        desc: '升级【👁️复眼感官 +1阶】与【🛡️背甲 +1阶】· 零损伤尽显演化智慧',
        path: 'pioneer', pathGain: 18, organUpgrade: 'senses',
        dv: 16, de: 20, da: 26, dl: 14,
        outcome: '你不费吹灰之力便借险峻地势制服了庞然大物，全族上下对你的智慧佩服得五体投地！'
      }
    ]
  }
];

const SPECIES_DB = [
  // PRECAMBRIAN (Archean & Proterozoic)
  {
    id: 'archaea',
    name: '深海热泉古菌',
    latin: 'Methanopyrus kandleri (Lineage)',
    emoji: '🦠',
    era: 'precambrian',
    eraName: '太古宙 · 38亿年前',
    timeMa: 3800,
    habitat: '冥古-太古交界原始大洋 · 海底黑烟囱热液喷口',
    o2Pct: 0.001,
    tempC: 85,
    maxAge: 24,
    ageUnit: '小时 (分裂周期)',
    bodySize: '2 微米 (μm)',
    trophic: '化能自养初代生命',
    curveType: 'II',
    infantMortality: 0.45,
    fossilBaseChance: 0.002,
    biomassWeight: 320,
    milestoneWeight: 10,
    dailyKcal: 0.000001,
    openingLore: '你诞生在 38 亿年前暗无天日的太古宙大洋深处。上方是富含二氧化碳的橙红色天空与频繁坠落的陨石，脚下是高达 300℃ 的海底黑烟囱热泉。没有阳光，没有氧气，你依靠氢气还原二氧化碳获取微弱的化学能。',
    stages: [
      { title: '热液喷口裂殖初生', event: '母细胞完成二分裂，你漂浮在富含硫化氢与铁离子的热泉羽流边缘。温度骤降意味着停滞，靠近喷口核心则会被瞬间煮沸。', isDecision: true, choices: [
        { label: '附着在多孔硫化铁矿物微腔内壁', desc: '稳固获取氢离子梯度，降低被洋流冲走风险', dv: 10, de: 8, da: 12, dl: 5, outcome: '你成功嵌合进温热的矿物微孔，化能合成稳定运转。' },
        { label: '随热泉羽流向上方开阔水域漂流', desc: '寻找新喷口群落，但面临低温休克风险', dv: -8, de: 12, da: 15, dl: -5, outcome: '冰冷的海水几乎冻结你的细胞膜，但你侥幸触碰到另一座活跃黑烟囱。' }
      ]},
      { title: '太古宙海底地壳震荡', event: '年轻地球的地幔剧烈翻涌，你所在的黑烟囱喷口突然喷出强酸性过热流体。', isDecision: false, dv: -6, de: 5, da: 8, dl: 0 },
      { title: '水平基因转移的契机', event: '一段游离的远古 RNA/DNA 片段随热流掠过你的细胞膜表面，其中携带着耐高温伴侣蛋白序列。', isDecision: true, choices: [
        { label: '打开膜通道摄取并整合外来基因片段', desc: '大幅提升适应度，但有小概率引入致命突变', dv: -4, de: -5, da: 22, dl: 10, outcome: '这段远古基因成功融入你的环状基因组，你的耐热极限再度跃升！' },
        { label: '维持细胞膜封闭，专注自身代谢复制', desc: '稳妥保守，保存ATP能量', dv: 6, de: 10, da: 2, dl: 4, outcome: '你拒绝了未知的遗传冒险，稳步积累了充足的胞内能量。' }
      ]},
      { title: '微陨石撞击引发的海底浊流', event: '上方海面传来天体撞击的巨响，滚滚海底泥沙浊流掩埋了外围菌席。', isDecision: false, dv: -5, de: -4, da: 6, dl: 4 },
      { title: '终章二分裂：化作两个全新的自己', event: '你的环状染色体已完成复制。作为单细胞古菌，只要不死于意外，分裂便是永生。', isDecision: true, choices: [
        { label: '倾尽全部胞内能量完成对称二分裂', desc: '将基因完整传递给两个子代细胞', dv: 5, de: -15, da: 10, dl: 28, outcome: '细胞膜向内缢缩，你的一生圆满化作两个崭新的太古宙生命火种。' },
        { label: '形成休眠孢囊结构随洋流远征', desc: '跨越万里大洋播撒生命种子', dv: 10, de: -8, da: 18, dl: 18, outcome: '你在坚韧包膜保护下进入休眠，去往未知的大洋彼岸。' }
      ]}
    ]
  },
  {
    id: 'cyanobacteria',
    name: '叠层石蓝藻',
    latin: 'Cyanobacteria (Stromatolite Builder)',
    emoji: '🫧',
    era: 'precambrian',
    eraName: '元古宙初 · 24亿年前 (大氧化事件)',
    timeMa: 2400,
    habitat: '元古宙浅海潮间带 · 叠层石生物礁顶层',
    o2Pct: 2.1,
    tempC: -12,
    maxAge: 36,
    ageUnit: '天 (群落世代)',
    bodySize: '10 微米 (构建米级叠层石)',
    trophic: '产氧光合作用开拓者',
    curveType: 'II',
    infantMortality: 0.40,
    fossilBaseChance: 0.14,
    biomassWeight: 300,
    milestoneWeight: 10,
    dailyKcal: 0.00001,
    openingLore: '你诞生于 24 亿年前的浅海叠层石表面。你和亿万同胞掌握了地球史上最颠覆性的魔法——产氧光合作用。然而你们吐出的每一颗氧气泡，都在毒杀厌氧古菌，并摧毁大气中的甲烷温室，亲手将地球推向长达3亿年的“休伦雪球地球”大冰期！',
    stages: [
      { title: '潮间带第一缕阳光', event: '潮水退去，强烈的元古宙紫外线直射在没有臭氧层保护的浅滩上。', isDecision: true, choices: [
        { label: '分泌粘液包裹碳酸钙泥沙形成遮阳层', desc: '构筑叠层石纹层，抵御紫外线灼伤', dv: 12, de: 6, da: 14, dl: 12, outcome: '你在菌席表面筑起微米级矿物护盾，这一层沉积物将在24亿年后成为叠层石化石。' },
        { label: '暴露在最表层全力进行光合作用', desc: '能量暴涨，但DNA面临紫外线损伤', dv: -12, de: 24, da: 6, dl: 4, outcome: '叶绿素全速运转，吐出密集的微气泡，但剧烈辐射灼伤了部分细胞壁。' }
      ]},
      { title: '铁锈大海：条带状铁建造沉积', event: '你们释放的游离氧与海水中溶解的二价铁剧烈反应，整片海洋下起了红色的赤铁矿雨。', isDecision: false, dv: 4, de: 10, da: 8, dl: 8 },
      { title: '休伦大冰期降临（雪球地球）', event: '大气甲烷被氧气耗尽，全球气温暴跌至零下，海冰从两极一直封冻到赤道浅海！', isDecision: true, choices: [
        { label: '退守火山地热口周边的冰下融水绿洲', desc: '在微弱透光冰层下艰难维系群落', dv: 8, de: -6, da: 18, dl: 15, outcome: '你们在冰封地球的裂缝中守住了光合作用的火种。' },
        { label: '分化出厚壁休眠孢子（Akinetes）硬抗冰封', desc: '代谢降至极低，等待冰川消融', dv: 14, de: -12, da: 12, dl: 8, outcome: '你在严寒冰晶中沉睡，将生命密码锁入厚壁孢子。' }
      ]},
      { title: '厌氧生物大灭绝的见证者', event: '周围的原始厌氧菌群在氧气毒性下大批消亡，你们彻底重塑了地球大气圈。', isDecision: false, dv: 5, de: 8, da: 10, dl: 10 },
      { title: '叠层石化石铭刻', event: '新一代蓝藻向光生长，覆盖在你所在的钙质胶结层之上。', isDecision: true, choices: [
        { label: '化作叠层石坚固基座，托举后代向光生长', desc: '极高概率形成传世叠层石化石', dv: 0, de: 0, da: 12, dl: 25, outcome: '你的细胞轮廓与碳酸钙纹层融为一体，成为地球生命改造星球的永恒铁证。' },
        { label: '释放游动殖段随潮汐开拓新礁盘', desc: '扩大叠层石群落版图', dv: 6, de: -6, da: 15, dl: 20, outcome: '无数丝状藻殖段顺流而去，在远方浅滩筑起新的生命高塔。' }
      ]}
    ]
  },
  {
    id: 'dickinsonia',
    name: '狄更逊水母',
    latin: 'Dickinsonia costata',
    emoji: '🫓',
    era: 'precambrian',
    eraName: '埃迪卡拉纪 · 5.58亿年前',
    timeMa: 558,
    habitat: '前寒武纪浅海阳光海底 · 微生物席（伊甸园）',
    o2Pct: 8.0,
    tempC: 18,
    maxAge: 8,
    ageUnit: '年',
    bodySize: '45 厘米 (扁平椭圆形)',
    trophic: '腹面外消化摄食微生物席',
    curveType: 'II',
    infantMortality: 0.30,
    fossilBaseChance: 0.04,
    biomassWeight: 45,
    milestoneWeight: 10,
    dailyKcal: 12,
    openingLore: '你降生在 5.58 亿年前的埃迪卡拉纪浅海。这是一个尚未发明“利齿、硬壳与杀戮”的宁静伊甸园。作为地球最早的大型动物之一，你没有眼睛、没有嘴巴也没有肠道，扁平分节的身体贴在柔滑的海底藻席上缓缓滑行。',
    stages: [
      { title: '海底藻席上的初生印记', event: '你只有几毫米大，紧贴在富含养分的微生物席上，通过腹面直接分泌消化液吸收有机质。', isDecision: true, choices: [
        { label: '停留在一处肥沃藻席潜心吸食扩展体节', desc: '快速增加体长，但原地留下明显凹痕', dv: 10, de: 16, da: 6, dl: 5, outcome: '你的体节一节节对称生长，身体舒展如一枚精致的羽毛叶。' },
        { label: '频繁蠕动迁徙，每隔数小时换一片草场', desc: '消耗更多能量，但锻炼感知水流能力', dv: 4, de: 4, da: 16, dl: 8, outcome: '你在海底留下一串串幽灵般的觅食足迹（Epibaion遗迹化石）。' }
      ]},
      { title: '与查恩盘虫共舞的宁静岁月', event: '水流轻拂着周围状如羽毛的查恩盘虫（Charnia），没有任何捕食者打扰这片和平海底。', isDecision: false, dv: 8, de: 10, da: 5, dl: 8 },
      { title: '风暴潮沙暴突袭', event: '一场猛烈的远古热带风暴席卷浅海，细腻的石英砂随暗流倾泻而下，威胁将软体动物活埋！', isDecision: true, choices: [
        { label: '鼓动肌肉收缩边缘，奋力从薄沙层中爬出', desc: '若成功可继续存活，失败则成模铸化石', dv: 8, de: -10, da: 18, dl: 6, outcome: '你凭着坚韧的体壁蠕动钻出泥沙，重见浅海微光。' },
        { label: '紧贴海底藻席蜷曲不动，任由薄沙覆盖以避暗流', desc: '节省体力，赌沙层较薄', dv: -8, de: 6, da: 6, dl: 4, outcome: '沉重的细沙压住了你的背部，好在暗流很快冲开了沙层。' }
      ]},
      { title: '寒武纪前夜的端倪：掘穴者的出现', event: '海底开始出现微小的两侧对称蠕虫，它们钻入藻席下方打洞，和平的埃迪卡拉花园即将终结。', isDecision: false, dv: -4, de: -6, da: 10, dl: 5 },
      { title: '播撒配子与印痕永存', event: '你已长到罕见的半米长，温暖的满月潮汐催动群落同步释放生殖细胞。', isDecision: true, choices: [
        { label: '向海水中释放千万枚配子，随后安然长眠于细沙下', desc: '含有胆固醇分子的遗骸将在砂岩底面留下清晰印痕', dv: 0, de: -10, da: 10, dl: 28, outcome: '你的胆固醇生物标志物在5.58亿年后被人类科学家检出，证实你是动物王国的先驱！' },
        { label: '继续向深水区滑行寻找最后一片完整藻席', desc: '延续个体寿命', dv: 6, de: 8, da: 12, dl: 12, outcome: '你在幽蓝深水区度过了漫长而静谧的晚年。' }
      ]}
    ]
  },

  // PALEOZOIC (541 - 252 Ma)
  {
    id: 'anomalocaris',
    name: '加拿大奇虾',
    latin: 'Anomalocaris canadensis',
    emoji: '🦐',
    era: 'paleozoic',
    eraName: '寒武纪 · 5.15亿年前',
    timeMa: 515,
    habitat: '寒武纪布尔吉斯页岩浅海 · 大陆架悬崖前缘',
    o2Pct: 12.5,
    tempC: 22,
    maxAge: 6,
    ageUnit: '年',
    bodySize: '1.0 米 (寒武纪第一霸主)',
    trophic: '初代顶级视觉掠食者',
    curveType: 'II',
    infantMortality: 0.55,
    fossilBaseChance: 0.06,
    biomassWeight: 18,
    milestoneWeight: 14,
    dailyKcal: 450,
    openingLore: '你诞生在 5.15 亿年前的寒武纪生命大爆发中心！演化史上的“视觉军备竞赛”刚刚打响，你拥有一对由上万个小眼组成的柄状复眼、波浪状游泳侧叶，以及头部前方一对令所有寒武纪生物闻风丧胆的带刺捕食大附肢。',
    stages: [
      { title: '蜕壳成长的脆弱时刻', event: '作为节肢动物先驱，你必须蜕去旧外骨骼才能长大。刚蜕壳的你在岩缝间浑身柔软。', isDecision: true, choices: [
        { label: '潜伏在海绵礁阴影中等待新甲壳硬化', desc: '安全提升体魄，略微消耗能量储备', dv: 14, de: -6, da: 8, dl: 4, outcome: '新甲壳顺利硬化，你的带刺大附肢变得更加修长锋利！' },
        { label: '趁软体蠕虫聚集时冒险出击觅食', desc: '高能量回报，但可能被同类奇虾咬伤', dv: -8, de: 20, da: 12, dl: 2, outcome: '你捕获了数条奥托虫，但侧叶被另一只成年奇虾划出一道缺口。' }
      ]},
      { title: '一万六千只小眼的巡弋', event: '阳光穿透寒武纪清澈浅海，你的复眼锁定海底正在爬行的三叶虫与怪诞虫（Hallucigenia）。', isDecision: true, choices: [
        { label: '俯冲猎杀软躯体的抚仙湖虫与游泳蠕虫', desc: '稳健高效，避免磨损口锥齿板', dv: 8, de: 18, da: 10, dl: 6, outcome: '你用大附肢精准卷起猎物送入放射状口锥，尽享寒武纪盛宴。' },
        { label: '尝试曲折挤压咬碎钙化壳较薄的刚蜕壳三叶虫', desc: '热量丰厚，考验捕食技巧', dv: 4, de: 22, da: 18, dl: 8, outcome: '你在三叶虫尾部留下了著名的“W形咬痕”，这处伤痕成为了古生物传奇！' }
      ]},
      { title: '欧巴宾海蝎与寒武纪奇观', event: '一只长着五只眼睛和长吻的欧巴宾海蝎从你身下掠过，不远处皮卡虫（脊椎动物祖先）正敏捷游动。', isDecision: false, dv: 6, de: 8, da: 8, dl: 6 },
      { title: '海底泥石流：布尔吉斯页岩崩塌', event: '大陆架边缘的碳酸盐台地突然发生水下泥石流，缺氧的细密泥浆如雪崩般席卷海底生物群落！', isDecision: true, choices: [
        { label: '全速扇动两侧游泳叶向高处清澈水域冲刺', desc: '凭顶级游泳能力逃离活埋区', dv: 10, de: -12, da: 16, dl: 8, outcome: '你贴着翻滚的泥云边缘惊险冲出重围！' },
        { label: '顺着暗流潜入深海沟壑躲避冲击波', desc: '可能因缺氧受损', dv: -12, de: -6, da: 8, dl: 4, outcome: '浑浊泥浆几乎堵塞你的鳃叶，你九死一生挣扎而出。' }
      ]},
      { title: '寒武纪霸主的求偶与谢幕', event: '你已成为整片礁区体型最大的奇虾，繁殖季的洋流带来远方的信息素。', isDecision: true, choices: [
        { label: '在浅海阳光带展示修长大附肢完成交配繁衍', desc: '延续初代霸主血脉', dv: 4, de: -10, da: 10, dl: 28, outcome: '你成功繁衍后代。数亿年后，人类曾把你的大附肢、口锥和身体误认为三种不同生物，直到拼合出你真正的王者真容！' },
        { label: '独自巡游至深海悬崖走完霸主一生', desc: '保持巅峰体魄直至终老', dv: 12, de: 6, da: 14, dl: 10, outcome: '你作为寒武纪无可争议的海洋霸主，安然沉入布尔吉斯页岩。' }
      ]}
    ]
  },
  {
    id: 'trilobite',
    name: '镜眼三叶虫',
    latin: 'Phacops rana',
    emoji: '🪲',
    era: 'paleozoic',
    eraName: '泥盆纪 · 4.0亿年前',
    timeMa: 400,
    habitat: '古生代温暖陆表海 · 珊瑚与腕足类生物礁底',
    o2Pct: 15.0,
    tempC: 20,
    maxAge: 10,
    ageUnit: '年',
    bodySize: '12 厘米 (披甲节肢动物)',
    trophic: '海底碎屑摄食与小型底栖猎手',
    curveType: 'II',
    infantMortality: 0.65,
    fossilBaseChance: 0.18,
    biomassWeight: 120,
    milestoneWeight: 12,
    dailyKcal: 25,
    openingLore: '你是一只生活在 4 亿年前泥盆纪海底的镜眼三叶虫。三叶虫家族在地球海洋繁衍了整整 2.7 亿年（比恐龙还要长一亿年！）。你的眼睛由纯天然的透明方解石晶体构成，背披坚硬的三叶钙质背甲。',
    stages: [
      { title: '浮游幼体（原甲期）沉降海底', event: '你熬过了随波逐流的浮游幼体阶段，终于在温暖的珊瑚礁泥沙底完成了底栖蜕变。', isDecision: true, choices: [
        { label: '钻入松软海床泥沙中半埋潜伏觅食', desc: '只露出方解石复眼观察上方', dv: 12, de: 10, da: 12, dl: 6, outcome: '你的360度全景方解石复眼透过泥沙缝隙洞察一切动静。' },
        { label: '在礁石表面快速爬行搜寻有机碎屑与蠕虫', desc: '营养丰富但易暴露给鹦鹉螺', dv: -6, de: 18, da: 10, dl: 8, outcome: '你饱餐了一顿底栖多毛类蠕虫，甲壳愈发厚实。' }
      ]},
      { title: '房角石与有颌盾皮鱼的阴影', event: '上方海水中掠过巨大的直角石与刚演化出强力下颌的鱼类！它们正搜寻落单的三叶虫。', isDecision: true, choices: [
        { label: '瞬间将头甲与尾甲严丝合缝蜷缩成一颗铁球！', desc: '镜眼三叶虫的招牌防御绝技', dv: 16, de: -4, da: 18, dl: 6, outcome: '掠食者的利齿在你完美闭合的球形背甲上打滑，无奈离去！' },
        { label: '利用分叉附肢掀动泥沙烟雾全速钻入礁石底缝', desc: '考验敏捷与地形熟悉度', dv: 6, de: -8, da: 14, dl: 6, outcome: '你在泥沙掩护下惊险滑入珊瑚礁死角。' }
      ]},
      { title: '集体蜕壳与求偶长队', event: '繁殖季节来临，成百上千只三叶虫在海床上排成壮观的单行队列迁徙并同步蜕壳。', isDecision: true, choices: [
        { label: '加入迁徙长队完成集体蜕壳与交配', desc: '大幅提升繁衍成功率', dv: 6, de: -6, da: 10, dl: 28, outcome: '你在群落庇护下顺利蜕去旧壳并留下成千上万枚受精卵，旧壳本身也化作了遗迹化石。' },
        { label: '留在原栖息地独自蜕壳', desc: '降低群体吸引大型掠食者的概率', dv: 10, de: 8, da: 8, dl: 8, outcome: '你安静地完成了最后一次蜕壳。' }
      ]}
    ]
  },
  {
    id: 'dunkleosteus',
    name: '泰雷尔邓氏鱼',
    latin: 'Dunkleosteus terrelli',
    emoji: '🦈',
    era: 'paleozoic',
    eraName: '晚泥盆纪 · 3.7亿年前 (鱼类时代)',
    timeMa: 370,
    habitat: '泥盆纪阿巴拉契亚深水海盆',
    o2Pct: 16.0,
    tempC: 21,
    maxAge: 22,
    ageUnit: '岁',
    bodySize: '8.0 米 / 4 吨',
    trophic: '古生代海洋超级掠食者',
    curveType: 'I',
    infantMortality: 0.35,
    fossilBaseChance: 0.08,
    biomassWeight: 8,
    milestoneWeight: 12,
    dailyKcal: 18000,
    openingLore: '你降生在 3.7 亿年前的“鱼类时代”泥盆纪。作为盾皮鱼纲的终极巅峰，你的头胸部覆盖着厚达数厘米的骨质装甲，没有普通牙齿，取而代之的是两对可自我打磨、咬合力高达数千公斤的断头台式骨板刃！',
    stages: [
      { title: '浅海装甲少年期', event: '幼年的你体长已达 1.5 米，在近岸水域练习仅需 20 毫秒即可张口产生强大吸力的捕食绝技。', isDecision: true, choices: [
        { label: '猎杀披甲小型盾皮鱼与硬骨鱼', desc: '磨砺骨板刃口，补充钙质与高蛋白', dv: 12, de: 18, da: 14, dl: 4, outcome: '你的颌骨剪刀瞬间咬穿猎物硬甲，并将无法消化的骨片吐出（形成古生物半消化化石）。' },
        { label: '巡游外海追捕高速游动的菊石群', desc: '扩充领地视野', dv: 8, de: 14, da: 16, dl: 6, outcome: '你在开阔海盆所向披靡，体长迅速突破5米。' }
      ]},
      { title: '同类领地争霸：断头台之战', event: '另一条饥饿的成年邓氏鱼闯入你的深海猎场，在泥盆纪，唯有同类能击穿你的头甲！', isDecision: true, choices: [
        { label: '正面张开巨口以雷霆咬合力威慑并撞击对方侧翼', desc: '捍卫顶级猎场，但头甲可能受创', dv: -8, de: 22, da: 16, dl: 14, outcome: '你的骨板在对方头甲上留下深深的凿痕，入侵者仓皇逃离！' },
        { label: '战略性礼让边缘水域，保存实力深潜伏击裂口鲨', desc: '稳健长寿策略', dv: 12, de: 10, da: 12, dl: 6, outcome: '你避开了无谓的内耗，在深水跃温层捕食早期鲨鱼。' }
      ]},
      { title: '晚泥盆纪凯尔瓦塞缺氧事件', event: '陆地森林首次大规模扩张导致大量营养盐冲入海洋，引发深海富营养化与大面积缺氧黑页岩沉积（泥盆纪末大灭绝前奏）。', isDecision: true, choices: [
        { label: '向远洋表层含氧流带迁徙并完成盾皮鱼胎生/卵胎生繁衍', desc: '在恶劣环境中延续血脉', dv: 6, de: -10, da: 14, dl: 26, outcome: '你在动荡的泥盆纪末期成功繁衍后代，坚硬的头骨骨板沉入克利夫兰黑页岩中永久保存。' },
        { label: '坚守深海故土直至生命最后一刻', desc: '高概率成为博物馆级完整头骨化石', dv: -10, de: 4, da: 10, dl: 12, outcome: '你的巨型头甲在缺氧海底免受食腐者破坏，3.7亿年后震撼了整个人类世界。' }
      ]}
    ]
  },
  {
    id: 'tiktaalik',
    name: '蔷薇提塔利克鱼',
    latin: 'Tiktaalik roseae',
    emoji: '🦎',
    era: 'paleozoic',
    eraName: '晚泥盆纪 · 3.75亿年前 (登陆前夜)',
    timeMa: 375,
    habitat: '泥盆纪赤道泛滥平原 · 浅水沼泽与泥滩河道',
    o2Pct: 16.5,
    tempC: 26,
    maxAge: 12,
    ageUnit: '岁',
    bodySize: '2.0 米 (鱼石螈先驱)',
    trophic: '浅水沼泽两栖伏击者 (肉鳍鱼-四足动物桥梁)',
    curveType: 'II',
    infantMortality: 0.45,
    fossilBaseChance: 0.05,
    biomassWeight: 12,
    milestoneWeight: 14,
    dailyKcal: 1200,
    openingLore: '你是 3.75 亿年前地球演化史上最伟大的跨界者——提塔利克鱼。你既有鱼类的鳞片与鳃，又演化出了扁平的鳄鱼状头骨、可自由转动的颈部、强壮如腕关节的肉鳍，以及能直接呼吸空气的原始肺！',
    stages: [
      { title: '枯水季闷热缺氧的泥沼', event: '旱季来临，河道水位骤降且水中溶氧极低，大型掠食鱼类在深潭中虎视眈眈。', isDecision: true, choices: [
        { label: '用强壮的肉鳍撑起身体，把头探出水面大口呼吸空气！', desc: '脊椎动物向陆地迈出的历史性一步', dv: 14, de: 12, da: 24, dl: 10, outcome: '你的肋骨支撑起胸腔，第一口陆地空气涌入原始肺部，一个全新的大陆世界在你眼前展开！' },
        { label: '潜伏在水草浅滩边缘捕食小鱼与节肢动物', desc: '稳妥积蓄能量', dv: 10, de: 16, da: 10, dl: 6, outcome: '你利用首次演化出的可转动脖子，无需摆动身体便精准咬住猎物。' }
      ]},
      { title: '跨越干涸沙洲的远征', event: '原有的水塘即将彻底干涸，30米外是另一片水草丰美、没有大型肉食鱼的静水泻湖。', isDecision: true, choices: [
        { label: '用腕状肉鳍在湿润泥滩上“俯卧撑式”匍匐翻越沙洲', desc: '真正的登陆壮举', dv: 8, de: -8, da: 25, dl: 18, outcome: '你在泥盆纪的岸边留下了脊椎动物最早的支撑印记，成功抵达新家园并繁衍后代！' },
        { label: '钻入湿润河床淤泥中夏眠等待雨季', desc: '节省体力但面临干涸风险', dv: 4, de: 6, da: 10, dl: 10, outcome: '一场及时的热带暴雨拯救了河道，你迎来了繁殖季。' }
      ]}
    ]
  },
  {
    id: 'meganeura',
    name: '莫氏巨脉蜻蜓',
    latin: 'Meganeura monyi',
    emoji: '蜻',
    era: 'paleozoic',
    eraName: '石炭纪 · 3.0亿年前 (巨虫时代)',
    timeMa: 300,
    habitat: '石炭纪热带雨林煤沼 · 40米高鳞木与芦木冠层',
    o2Pct: 33.0,
    tempC: 24,
    maxAge: 3,
    ageUnit: '年 (含水生稚虫期)',
    bodySize: '翼展 70 厘米 (史前最大飞行昆虫)',
    trophic: '石炭纪天空顶级掠食者',
    curveType: 'III',
    infantMortality: 0.72,
    fossilBaseChance: 0.05,
    biomassWeight: 35,
    milestoneWeight: 11,
    dailyKcal: 85,
    openingLore: '你降生在 3 亿年前的石炭纪煤沼森林！蕨类与鳞木巨树遮天蔽日，由于真菌尚未完全演化出分解木质素的能力，巨量碳被埋入地下形成今日的煤炭，使大气含氧量飙升至惊人的 33%！高浓度的氧气通过你的气管系统扩散，让你长成了翼展达 70 厘米的空中巨兽。',
    stages: [
      { title: '水下稚虫期：煤沼池塘的潜伏猎手', event: '羽化前你在沼泽水中度过了一年多，利用可弹射的下唇捕食小型两栖类幼体与水生昆虫。', isDecision: true, choices: [
        { label: '在沉木阴影中伏击路过的早期两栖幼螈', desc: '高蛋白加速体型发育', dv: 12, de: 18, da: 14, dl: 6, outcome: '你摄取了充足营养，体型远超同类稚虫。' },
        { label: '在芦木浅水根系间稳健捕食水生昆虫', desc: '避开大型肉食总鳍鱼', dv: 14, de: 10, da: 10, dl: 6, outcome: '你平安熬过了高折损的水下阶段。' }
      ]},
      { title: '攀上鳞木树干：70厘米巨翼羽化', event: '清晨薄雾中，你爬出水面裂开背部旧壳，33% 的富氧空气充盈脉络，透明巨翼在阳光下折射出金属光泽！', isDecision: true, choices: [
        { label: '振翅飞上鳞木林冠层猎杀古网翅目昆虫与小型林蜥', desc: '统治石炭纪天空', dv: 10, de: 20, da: 18, dl: 14, outcome: '四翼独立振动的空气动力学奇迹让你在森林上空悬停、俯冲，无往不利！' },
        { label: '贴近沼泽水面巡弋寻找伴侣完成空中交配点水', desc: '避开富氧大气引发的森林雷击野火', dv: 8, de: 8, da: 12, dl: 28, outcome: '你在轰鸣的石炭纪雷雨前完成了点水产卵，将巨虫时代的传奇定格在页岩之中。' }
      ]}
    ]
  },
  {
    id: 'gorgonopsid',
    name: '伊诺斯特兰采夫丽齿兽',
    latin: 'Inostrancevia alexandri',
    emoji: '🐺',
    era: 'paleozoic',
    eraName: '二叠纪最末期 · 2.52亿年前 (大灭绝前夕)',
    timeMa: 252,
    habitat: '盘古超大陆北方荒漠河谷 · 西伯利亚暗色岩边缘',
    o2Pct: 16.0,
    tempC: 32,
    maxAge: 15,
    ageUnit: '岁',
    bodySize: '3.5 米 / 300 公斤',
    trophic: '二叠纪陆地顶级合弓纲掠食者 (哺乳类远祖旁支)',
    curveType: 'I',
    infantMortality: 0.42,
    fossilBaseChance: 0.06,
    biomassWeight: 9,
    milestoneWeight: 12,
    dailyKcal: 6500,
    openingLore: '你是 2.52 亿年前二叠纪末期的陆地霸主丽齿兽。在恐龙尚未登场的年代，你们合弓纲（似哺乳爬行动物）统治着盘古超大陆。你长有长达 15 厘米的军刀状犬齿。然而远方的西伯利亚地幔柱正在撕裂地壳，地球史上最惨烈的“二叠纪末大灭绝（96%物种灭绝）”正在逼近……',
    stages: [
      { title: '盘古大陆河谷的剑齿伏击', event: '干旱的河床边，一群身披重甲的锯齿龙（Scutosaurus）正在寻找最后的水源。', isDecision: true, choices: [
        { label: '屏息潜行，跃起用15厘米剑齿精准刺穿亚成年猎物颈动脉', desc: '顶级猎手的致命一击', dv: 10, de: 24, da: 16, dl: 8, outcome: '你大获全胜，丰盛的肉食让你度过了漫长旱季。' },
        { label: '驱赶其它小型兽头类食腐者，夺取现成猎物减少受伤', desc: '保存犬齿完整度', dv: 14, de: 14, da: 12, dl: 6, outcome: '你以王者气场震慑全场，毫发无伤地享用了食物。' }
      ]},
      { title: '西伯利亚暗色岩超级火山爆发（大灭绝降临）', event: '天空被遮天蔽日的火山灰与二氧化硫染成暗红色，酸雨烧毁了整片针叶林，全球气温飙升超过 10℃！', isDecision: true, choices: [
        { label: '带领伴侣向高纬度山谷洞穴迁徙并守护幼崽', desc: '在末日浩劫中抗争到底', dv: -12, de: -10, da: 20, dl: 26, outcome: '虽然丽齿兽家族最终在二叠纪末大灭绝中谢幕，但你们合弓纲的旁系亲族（犬齿兽类）熬过了炼狱，最终演化为未来的哺乳动物与人类！' },
        { label: '在干涸的河道绿洲做最后的狩猎守望', desc: '高概率在火山灰层中留下完整骨架化石', dv: -15, de: 6, da: 14, dl: 14, outcome: '你的威严头骨与长剑齿被封存在二叠-三叠纪交界地层中，见证了古生代的悲壮落幕。' }
      ]}
    ]
  },

  // MESOZOIC (252 - 66 Ma)
  {
    id: 'lystrosaurus',
    name: '水龙兽',
    latin: 'Lystrosaurus murrayi',
    emoji: '🦛',
    era: 'mesozoic',
    eraName: '早三叠世 · 2.50亿年前 (大灭绝废墟复苏)',
    timeMa: 250,
    habitat: '盘古大陆死寂荒原 · 季节性泛滥河漫滩洞穴',
    o2Pct: 12.0,
    tempC: 35,
    maxAge: 10,
    ageUnit: '岁',
    bodySize: '1.2 米 (猪一般大小的二齿兽类)',
    trophic: '耐缺氧穴居植食“灾难分类群”',
    curveType: 'II',
    infantMortality: 0.38,
    fossilBaseChance: 0.16,
    biomassWeight: 65,
    milestoneWeight: 11,
    dailyKcal: 1100,
    openingLore: '你诞生在二叠纪末大灭绝刚过去不久的早三叠世废墟上。地球上 90% 的物种已经消失，大气含氧量跌至仅 12%（相当于今日海拔 4500 米高原），到处是酷热荒漠。但你凭借桶状胸腔、强壮的掘土前肢与角质喙，奇迹般地繁盛起来——此时地球上每 10 只陆生脊椎动物中，就有 9 只是你们水龙兽！',
    stages: [
      { title: '高原般缺氧的酷热清晨', event: '地表温度在正午将突破 45℃，空气稀薄，只有耐旱的肋木（Pleuromeia）零星生长。', isDecision: true, choices: [
        { label: '趁黎明凉爽用角质喙与象牙状犬齿刨食植物地下根茎，随后挖洞夏眠', desc: '教科书级的末日生存智慧', dv: 14, de: 16, da: 18, dl: 10, outcome: '深达两米的地下洞穴帮你隔绝了地表炼狱，你的高耐二氧化碳血液在洞中平稳循环。' },
        { label: '结成数百只规模的庞大兽群沿河谷迁徙寻找新绿洲', desc: '开拓南极至北极的盘古大陆版图', dv: 6, de: 12, da: 16, dl: 22, outcome: '你们的足迹遍布整块盘古超大陆！2.5亿年后，横跨南非、印度与南极洲的水龙兽化石成为大陆漂移学说的铁证！' }
      ]},
      { title: '引鳄与早期主龙类的窥伺', event: '废墟之上新的掠食者——引鳄（Erythrosuchus）正在崛起，它们盯上了落单的水龙兽。', isDecision: true, choices: [
        { label: '发出低沉嘶鸣警报，与族群一同退入狭窄地下深穴', desc: '群体防御与洞穴庇护', dv: 12, de: -4, da: 12, dl: 24, outcome: '庞大的引鳄无法钻入洞穴，你的幼崽全部得以保全！' },
        { label: '跳入浑浊河水中游向对岸浅滩', desc: '水龙兽兼具出色的游泳本领', dv: 8, de: -6, da: 16, dl: 14, outcome: '你奋力划水渡河，在三叠纪的阳光下继续书写幸存者的史诗。' }
      ]}
    ]
  },
  {
    id: 'diplodocus',
    name: '卡内基梁龙',
    latin: 'Diplodocus carnegii',
    emoji: '🦕',
    era: 'mesozoic',
    eraName: '晚侏罗世 · 1.50亿年前',
    timeMa: 150,
    habitat: '北美莫里逊组 · 广袤苏铁与南洋杉冲积平原',
    o2Pct: 21.0,
    tempC: 25,
    maxAge: 55,
    ageUnit: '岁',
    bodySize: '28 米 / 16 吨',
    trophic: '巨型蜥脚类植食泰坦 (典型 Type III 幼体高折损曲线)',
    curveType: 'III',
    infantMortality: 0.88,
    fossilBaseChance: 0.07,
    biomassWeight: 14,
    milestoneWeight: 14,
    dailyKcal: 95000,
    openingLore: '你是一只破壳于 1.5 亿年前晚侏罗世莫里逊平原的梁龙！成年后的你将长达 28 米、挥舞超音速长尾令异特龙退避三舍；但在破壳这一刻，你只有一公斤重，没有父母贴身保护，近 90% 的同巢兄弟姐妹都将在前五年沦为食肉恐龙的盘中餐——这是自然界最惊心动魄的成长逆袭！',
    stages: [
      { title: '破壳生死冲刺：逃离巢穴边缘的异特龙', event: '百枚恐龙蛋同时破壳，森林边缘几只亚成年异特龙与嗜鸟龙已经闻风而至！', isDecision: true, choices: [
        { label: '压低身姿狂奔钻入茂密的木贼与树蕨丛林深处隐蔽', desc: '幼年梁龙唯一的生路：森林庇护 + 极速狂吃长体型', dv: 14, de: 12, da: 18, dl: 6, outcome: '你屏息躲在浓密蕨叶下，逃过了破壳第一天的血腥筛选！' },
        { label: '紧跟几十只同巢幼崽向开阔河岸奔逃', desc: '利用稀释效应分摊风险', dv: -6, de: 8, da: 10, dl: 12, outcome: '同伴接连倒下，你拼命奔入密林，侥幸捡回一条命。' }
      ]},
      { title: '十年疯长期：每年增重一吨的代谢奇迹', event: '你昼夜不停地用梳状前齿刮食高热量针叶与蕨类，吞下胃石帮助磨碎植物纤维。', isDecision: true, choices: [
        { label: '走出密林加入成年梁龙与腕龙混群，获得巨兽矩阵庇护', desc: '体长突破12米，死亡率断崖式下降', dv: 16, de: 18, da: 14, dl: 20, outcome: '当你跨入10吨级门槛，曾经需要仰望的异特龙再也不敢轻易靠近你的身侧！' },
        { label: '继续在森林边缘独自采食鲜嫩低矮枝叶', desc: '食物充沛但需独自应对角鼻龙骚扰', dv: 6, de: 22, da: 16, dl: 6, outcome: '你一记鞭尾抽飞了试图偷袭的角鼻龙，发出破空音爆！' }
      ]},
      { title: '莫里逊大旱季迁徙与生命传承', event: '你已长成28米长的平原泰坦，旱季迫使巨龙群横跨干涸盆地前往远方泛滥平原产卵。', isDecision: true, choices: [
        { label: '在森林边缘沙地掘坑产下百枚圆卵并用植被覆盖保温', desc: '延续侏罗纪巨龙王朝', dv: 8, de: -12, da: 12, dl: 28, outcome: '你的基因跨越世代延续，而你宏伟的脊椎与长尾最终化作卡内基自然历史博物馆镇馆之宝的原型。' },
        { label: '担任象群式首领在迁徙队列外侧挥动鞭尾震慑食肉龙群', desc: '守护整个族群穿越旱区', dv: 10, de: -8, da: 18, dl: 24, outcome: '你用泰坦之躯护佑了整支梁龙族群。' }
      ]}
    ]
  },
  {
    id: 'archaeopteryx',
    name: '印石板始祖鸟',
    latin: 'Archaeopteryx lithographica',
    emoji: '🪶',
    era: 'mesozoic',
    eraName: '晚侏罗世 · 1.50亿年前',
    timeMa: 150,
    habitat: '欧洲索伦霍芬热带珊瑚泻湖群岛',
    o2Pct: 21.0,
    tempC: 27,
    maxAge: 7,
    ageUnit: '岁',
    bodySize: '50 厘米 / 0.8 公斤 (乌鸦大小)',
    trophic: '岛屿灌丛昆虫与小型蜥蜴猎手 (恐龙向鸟类演化枢纽)',
    curveType: 'II',
    infantMortality: 0.48,
    fossilBaseChance: 0.09,
    biomassWeight: 18,
    milestoneWeight: 12,
    dailyKcal: 110,
    openingLore: '你诞生在 1.5 亿年前的特提斯洋索伦霍芬群岛。你的嘴里长有恐龙的细密利齿，翅膀前端保留着三根带弯爪的指头，身后拖着长长的骨质尾羽；但你全身披着不对称的飞行飞羽——你是恐龙飞向蓝天的第一声啼鸣！',
    stages: [
      { title: '珊瑚岛苏铁林间的第一跃', event: '海风吹拂着干旱的泻湖岛屿，你用带爪的翼指攀上枝头，锁定下方一只肥硕的侏罗纪甲虫。', isDecision: true, choices: [
        { label: '展开黑白相间的飞羽滑翔俯冲，精准叼住猎物', desc: '磨练滑翔与短距扑翼技巧', dv: 12, de: 16, da: 20, dl: 8, outcome: '空气托起你的飞羽，你完美降落在礁石上享用了战利品。' },
        { label: '像小型兽脚类恐龙一样在地面疾跑追捕小蜥蜴', desc: '稳健高效，但需警惕美颌龙', dv: 8, de: 18, da: 12, dl: 6, outcome: '你凭借修长后肢健步如飞，与岛上的美颌龙平分秋色。' }
      ]},
      { title: '跨越索伦霍芬死亡泻湖的季风风暴', event: '你需要飞越一片高盐度、底层完全缺氧的平静泻湖前往邻岛求偶，途中突遇热带强阵风与翼龙（喙嘴龙）盘旋。', isDecision: true, choices: [
        { label: '借上升热气流全力振翅飞越泻湖并在邻岛筑巢', desc: '成功则繁衍后代，力竭落水则成传世羽毛化石', dv: 6, de: -12, da: 18, dl: 28, outcome: '你顽强穿越海风抵达彼岸完成繁衍！而生命终结时，索伦霍芬微米级细腻的石灰泥完整拓印下了你的每一根羽毛纤毛。' },
        { label: '及时折返本岛灌丛躲避风暴', desc: '保全性命，等待风平浪静', dv: 14, de: 6, da: 12, dl: 14, outcome: '你明智地避开了风暴，在岛屿灌木丛中安享余生。' }
      ]}
    ]
  },
  {
    id: 'mosasaurus',
    name: '霍氏沧龙',
    latin: 'Mosasaurus hoffmannii',
    emoji: '🐊',
    era: 'mesozoic',
    eraName: '晚白垩世 · 6800万年前',
    timeMa: 68,
    habitat: '白垩纪西部内陆海道与马斯特里赫特温暖浅海',
    o2Pct: 22.5,
    tempC: 26,
    maxAge: 32,
    ageUnit: '岁',
    bodySize: '15 米 / 12 吨',
    trophic: '白垩纪末海洋终极霸主',
    curveType: 'I',
    infantMortality: 0.36,
    fossilBaseChance: 0.08,
    biomassWeight: 9,
    milestoneWeight: 12,
    dailyKcal: 42000,
    openingLore: '你是 6800 万年前晚白垩世海洋的无冕之王——霍氏沧龙！你们原本是陆地上的崖蜥，却在几千万年间重返大海，演化出流线型巨躯、新月形尾鳍，以及上颚内侧用于死死扣住猎物的第二排“咽喉齿”！',
    stages: [
      { title: '内陆海道的胎生初啼', event: '作为直接在大海中分娩（卵胎生）的海洋巨蜥，你一出生便长约两米，紧随母亲游弋在浅海。', isDecision: true, choices: [
        { label: '在浅海礁区捕食菊石、硬骨鱼与小型海龟', desc: '稳步成长，避开成年同类与剑射鱼', dv: 14, de: 16, da: 14, dl: 10, outcome: '你的双铰链下颌轻松咬碎斑彩菊石的外壳，体长突破10米！' },
        { label: '深入开阔海域追击长颈蛇颈龙（薄板龙）', desc: '高能量回报，确立深海威权', dv: 6, de: 24, da: 18, dl: 8, outcome: '你从深水盲区高速冲顶，一举成为整片海道最令人生畏的猎手。' }
      ]},
      { title: '马斯特里赫特海床的霸主交锋', event: '白垩纪最后的海洋热闹非凡，你与原盖龟、沧龙同类在富饶的大陆架巡弋。', isDecision: true, choices: [
        { label: '击败挑战者，赢得整片温暖海湾的交配权并繁衍幼崽', desc: '将沧龙家族推向白垩纪巅峰', dv: 4, de: -8, da: 16, dl: 28, outcome: '你的后代遍布全球大洋。1764年，人类在荷兰马斯特里赫特采石场发现了你的巨大头骨，直接开启了“物种灭绝与古生物学”的启蒙时代！' },
        { label: '顺北大西洋暖流远征深海猎场', desc: '保持巅峰状态走完传奇一生', dv: 12, de: 14, da: 16, dl: 14, outcome: '你在浩瀚白垩纪大洋中无敌一生。' }
      ]}
    ]
  },
  {
    id: 'trex',
    name: '君王暴龙 (霸王龙)',
    latin: 'Tyrannosaurus rex',
    emoji: '🦖',
    era: 'mesozoic',
    eraName: '晚白垩世最末期 · 6600万年前',
    timeMa: 66,
    habitat: '北美拉拉米迪亚古陆 · 地狱溪组河谷森林',
    o2Pct: 22.0,
    tempC: 23,
    maxAge: 28,
    ageUnit: '岁',
    bodySize: '12.5 米 / 8.8 吨',
    trophic: '陆地史上最强咬合力顶级掠食者',
    curveType: 'II',
    infantMortality: 0.60,
    fossilBaseChance: 0.06,
    biomassWeight: 10,
    milestoneWeight: 16,
    dailyKcal: 48000,
    openingLore: '你降生在距今 6600 万年前的白垩纪地狱溪组。破壳时你披着细密绒羽、体型仅如火鸡；青少年期你步履矫健如猎豹，填补中型掠食者生态位；14岁后你将迎来每天增重 2 公斤的狂暴发育期，长出香蕉般粗壮的碎骨巨齿与立体双目视觉，成为恐龙王朝最后的君王！',
    stages: [
      { title: '绒羽少年期：敏捷的追风猎手 (5–12岁)', event: '此时的你体态修长、奔跑飞快，既要捕食似鸵龙与伤齿龙，又要小心避开残暴的成年同类。', isDecision: true, choices: [
        { label: '利用超凡嗅觉与立体视觉在密林边缘伏击帕克氏龙', desc: '积累步入青春期爆发所需的海量钙质与热量', dv: 12, de: 18, da: 16, dl: 8, outcome: '你的捕猎技巧日益精湛，平安迈入14岁体型爆发期！' },
        { label: '跟随成年暴龙留下的血腥气味食腐埃德蒙顿龙残骸', desc: '省力高热量，但需警惕领地冲突', dv: 4, de: 22, da: 12, dl: 4, outcome: '你赶在另一头成年暴龙发怒前吞下了数十公斤肉块。' }
      ]},
      { title: '巅峰君王：正面硬撼成年三角龙 (18–24岁)', event: '你已重达8吨，拥有近6吨的恐怖咬合力。河谷林间，一头拥有三根一米长利角的成年三角龙正低头警戒。', isDecision: true, choices: [
        { label: '绕向侧翼发动雷霆突袭，一口咬碎三角龙厚重的颈盾！', desc: '地球陆地史上最震撼的巅峰对决', dv: -6, de: 26, da: 20, dl: 16, outcome: '你粗壮的牙齿直接贯穿骨质颈盾，丰盛的猎物让你和伴侣成功抚育出一窝暴龙幼崽！' },
        { label: '转而猎杀防护较弱的埃德蒙顿龙（鸭嘴龙类）亚成体', desc: '避免被三角龙利角刺伤股骨', dv: 12, de: 18, da: 16, dl: 14, outcome: '你以极小的代价捕获猎物，避免了许多年长暴龙全身骨折的伤病。' }
      ]},
      { title: '白垩纪最后一天：希克苏鲁伯的刺目白光', event: '南方尤卡坦半岛方向的天空突然亮起比太阳还要刺眼百倍的火球，数分钟后，11级地震波、滚烫的玻璃陨石雨与森林大火席卷北美大陆……', isDecision: true, choices: [
        { label: '在震耳欲聋的轰鸣中昂首护住巢穴，以君王之姿迎接1.6亿年恐龙帝国的落幕', desc: '震撼人心的史诗终章', dv: -20, de: -10, da: 15, dl: 28, outcome: '你在地狱溪组的最顶层化作永恒的传奇化石，而你的鸟类近亲将带着恐龙的血脉飞向新生代的天空。' },
        { label: '退入背风深谷河床躲避第一波热辐射冲击', desc: '在撞击寒冬降临前多坚守一段岁月', dv: 4, de: -12, da: 18, dl: 18, outcome: '你见证了漫天星尘遮蔽阳光的漫长寒冬，走完了白垩纪霸主的最后一程。' }
      ]}
    ]
  },
  {
    id: 'juramaia',
    name: '白垩纪末穴居真兽 (哺乳类先驱)',
    latin: 'Purgatorius / Eutheria Lineage',
    emoji: '🐁',
    era: 'mesozoic',
    eraName: '白垩纪-古近纪交界 · 6600万年前 (K-Pg大灭绝幸存者)',
    timeMa: 66,
    habitat: '地狱溪森林地下深穴与腐木层',
    o2Pct: 21.5,
    tempC: 8,
    maxAge: 4,
    ageUnit: '岁',
    bodySize: '12 厘米 / 45 克',
    trophic: '夜行恒温杂食穴居哺乳动物 (人类与现代有胎盘哺乳类直系远祖)',
    curveType: 'I',
    infantMortality: 0.40,
    fossilBaseChance: 0.03,
    biomassWeight: 42,
    milestoneWeight: 13,
    dailyKcal: 35,
    openingLore: '你诞生在 6600 万年前恐龙脚下的阴影里。你只有老鼠大小，满身温热的毛发，只能在夜晚钻出洞穴偷食昆虫与植物种子。然而当直径 10 公里的小行星撞击地球、所有体重超过 25 公斤的陆地巨兽尽数覆灭时，正是你这样微小的穴居哺乳动物，替包括人类在内的整个哺乳纲守住了唯一的生命火种！',
    stages: [
      { title: '恐龙阴影下的夜行觅食', event: '白昼属于霸王龙与甲龙，唯有夜幕降临，你才敢用敏锐的胡须与听觉探出洞口。', isDecision: true, choices: [
        { label: '把收集到的坚果、种子与甲虫囤积在一米深的地下巢室', desc: '未雨绸缪的储粮本能', dv: 12, de: 18, da: 18, dl: 10, outcome: '你的地下粮仓堆得满满当当，这将在即将到来的末日中拯救你的全族！' },
        { label: '攀上银杏与木兰树冠采食高糖分果实', desc: '快速补充恒温代谢消耗', dv: 8, de: 20, da: 14, dl: 8, outcome: '灵活的抓握脚趾让你在枝叶间来去自如。' }
      ]},
      { title: '小行星撞击与长达数年的“撞击核冬天”', event: '地表森林在數小时内化为火海，紧接着平流层硫酸盐气溶胶遮蔽阳光长达数年，光合作用停摆，恐龙尽数倒下！', isDecision: true, choices: [
        { label: '蜷缩在恒温地洞深处进入半冬眠（Torpor），靠腐木真菌、昆虫蛹与埋藏种子维生！', desc: '哺乳动物熬过大灭绝的核心绝技', dv: 14, de: 8, da: 25, dl: 22, outcome: '洞外是零下严寒与死寂，洞内的你靠着温血毛发、母乳哺育与杂食本能，奇迹般活过了最黑暗的三年！' },
        { label: '冒险钻出灰烬地表搜寻冻毙巨兽遗骸与残存蕨类孢子', desc: '高风险开拓生存空间', dv: -6, de: 16, da: 18, dl: 14, outcome: '你在漫天蕨类孢子萌发的第一缕春光中迎来了没有恐龙的新世界。' }
      ]},
      { title: '古近纪黎明：哺乳动物时代的开启', event: '阳光终于重新穿透云层，遍地蕨类复苏，昔日的巨龙已成白骨，广阔的生态位完全向你们敞开！', isDecision: true, choices: [
        { label: '用温热的乳汁哺育新一窝幼崽，让它们走向森林、草原、天空与海洋', desc: '开启新生代哺乳动物大辐射', dv: 10, de: -6, da: 16, dl: 30, outcome: '你的后代将在未来6600万年里演化成鲸鱼、蝙蝠、骏马、猛犸象，以及今天坐在屏幕前阅读这段文字的人类！' },
        { label: '继续扩建森林树冠与地下领地安享晚年', desc: '稳健延续种群', dv: 14, de: 10, da: 14, dl: 20, outcome: '你作为横跨两个地质代纪的传奇幸存者安然谢幕。' }
      ]}
    ]
  },

  // CENOZOIC & MODERN (66 Ma - Present)
  {
    id: 'megalodon',
    name: '巨齿鲨',
    latin: 'Otodus megalodon',
    emoji: '🦈',
    era: 'cenozoic',
    eraName: '中新世–上新世 · 1500万年前',
    timeMa: 15,
    habitat: '全球亚热带与温带大洋 · 古须鲸迁徙航道',
    o2Pct: 21.0,
    tempC: 19,
    maxAge: 45,
    ageUnit: '岁',
    bodySize: '18 米 / 55 吨',
    trophic: '地球海洋史上最大掠食性鲨鱼',
    curveType: 'I',
    infantMortality: 0.28,
    fossilBaseChance: 0.12,
    biomassWeight: 7,
    milestoneWeight: 13,
    dailyKcal: 98000,
    openingLore: '你诞生在 1500 万年前中新世的温暖浅海育幼场。你在母体内便通过食卵习性长到 2 米长，成年后体长可达 18 米，张开的巨口足以轻松吞下一辆轿车，手掌般巨大的三角形锯齿牙专们用于咬断须鲸的胸鳍与尾椎！',
    stages: [
      { title: '巴拿马浅海育幼场的成长', event: '温暖的浅滩隔绝了远洋大鲨鱼，你在这里捕食海牛与小型鲸豚。', isDecision: true, choices: [
        { label: '稳步在温暖浅海磨练从下方高速冲顶猎物的捕猎战法', desc: '安全度过青年期', dv: 14, de: 16, da: 16, dl: 8, outcome: '你的锯齿状牙齿不断更新换代，一生将脱落上万颗巨齿！' },
        { label: '提前游入深海追踪中型鲸群', desc: '加速体型爆发', dv: 6, de: 22, da: 18, dl: 6, outcome: '丰富的鲸脂让你迅速突破15米大关！' }
      ]},
      { title: '上新世洋流变冷与虎鲸祖先的崛起', event: '巴拿马地峡逐渐隆起阻断大洋通道，全球海温下降，耐寒的须鲸向两极冰海迁徙，而群居的早期虎鲸与利维坦鲸正在抢夺猎物。', isDecision: true, choices: [
        { label: '顺着暖流收缩至赤道与亚热带富饶海盆，专注猎杀大型海兽并繁衍', desc: '发挥局部温血优势守住王座', dv: 10, de: 14, da: 16, dl: 24, outcome: '你在温暖海域延续了巨齿鲨百万年的威名，脱落的巨型利齿散落海底化作著名化石。' },
        { label: '孤身追入冰冷高纬度海域猎捕巨型须鲸', desc: '高热量回报但面临失温风险', dv: -8, de: 20, da: 18, dl: 12, outcome: '你在极北冰海边缘完成了惊天一击。' }
      ]}
    ]
  },
  {
    id: 'smilodon',
    name: '致命剑齿虎',
    latin: 'Smilodon fatalis',
    emoji: '🐯',
    era: 'cenozoic',
    eraName: '更新世末冰期 · 2万年前',
    timeMa: 0.02,
    habitat: '冰河世纪北美灌丛草原 · 拉布雷亚周边猎场',
    o2Pct: 20.9,
    tempC: 11,
    maxAge: 16,
    ageUnit: '岁',
    bodySize: '2.2 米 / 240 公斤',
    trophic: '冰河世纪伏击型大家族掠食者',
    curveType: 'I',
    infantMortality: 0.35,
    fossilBaseChance: 0.11,
    biomassWeight: 10,
    milestoneWeight: 12,
    dailyKcal: 6000,
    openingLore: '你是一只降生在 2 万年前北美冰河世纪的致命剑齿虎。你拥有熊一般粗壮的前肢与长达 28 厘米的匕首状上犬齿。不同于独自奔跑的猎豹，你们依靠强大的家族纽带协同狩猎野牛与大地懒，甚至会照料受伤无法捕猎的同伴。',
    stages: [
      { title: '拉布雷亚沥青坑的致命诱惑', event: '一头古野牛陷入了表面覆着一层薄水的天然沥青坑中哀嚎挣扎，周围已经聚集了恐狼（Dire wolf）与北美狮。', isDecision: true, choices: [
        { label: '克制贪婪本能，绝不踏入粘稠的沥青沼泽，转身去森林边缘伏击健康猎物！', desc: '避开埋葬了数千只剑齿虎的经典“翻车陷阱”', dv: 16, de: 12, da: 24, dl: 14, outcome: '你明智地看穿了死亡陷阱！那些冲上去的恐狼与同类尽数被沥青吞噬，化作了博物馆里的密集骨床。' },
        { label: '趁野牛尚未深陷，在坑缘稳固岩石上闪电般咬下大腿肉立即撤退', desc: '刀尖舔血的高热量险招', dv: -6, de: 22, da: 14, dl: 8, outcome: '你的后爪沾上了黑色沥青，好在同伴协助你将身体拽回了硬地！' }
      ]},
      { title: '冰期寒冬的家族守望与繁衍', event: '暴风雪封锁了山谷，家族中一位年长同伴肩骨受伤，而你们刚猎获一头西伯利亚野牛。', isDecision: true, choices: [
        { label: '与受伤同伴分享猎物并共同抚育幼虎度过寒冬', desc: '真实化石病理学证实的剑齿虎互助行为', dv: 10, de: -6, da: 14, dl: 28, outcome: '温暖的家族羁绊让你的幼崽全数成活，剑齿虎的咆哮回荡在更新世原野。' },
        { label: '率领年轻力壮的配偶迁往南方河谷开辟新领地', desc: '扩大种群分布', dv: 12, de: 14, da: 16, dl: 20, outcome: '你们在温暖的南方灌丛建立了兴旺的新狮群。' }
      ]}
    ]
  },
  {
    id: 'mammoth',
    name: '真猛犸象 (长毛象)',
    latin: 'Mammuthus primigenius',
    emoji: '🦣',
    era: 'cenozoic',
    eraName: '更新世末–全新世初 · 1.2万年前',
    timeMa: 0.012,
    habitat: '环北极猛犸草原 (Mammoth Steppe) 与西伯利亚冻土带',
    o2Pct: 20.9,
    tempC: -8,
    maxAge: 62,
    ageUnit: '岁',
    bodySize: '3.5 米肩高 / 6.5 吨',
    trophic: '冰原巨型植食生态系统工程师 (Type I 曲线代表)',
    curveType: 'I',
    infantMortality: 0.25,
    fossilBaseChance: 0.15,
    biomassWeight: 9,
    milestoneWeight: 13,
    dailyKcal: 85000,
    openingLore: '你降生在 1.2 万年前广袤的北方“猛犸草原”。你身披长毛与厚达 8 厘米的皮下脂肪，血液中流淌着自带防冻特性的血红蛋白。在经验丰富的外祖母（象群女族长）庇护下，你们用弯曲的螺旋长牙拨开积雪觅食。然而冰期正在结束，气候回暖与手持黑曜石长矛的晚期智人正从南方步步紧逼……',
    stages: [
      { title: '暴风雪中的象群圆阵', event: '零下40℃的极地寒潮夹杂着洞狮群的窥伺，幼年的你依偎在母亲腹下。', isDecision: true, choices: [
        { label: '紧跟女族长的记忆路线前往背风温泉河谷越冬', desc: '世代传承的迁徙智慧', dv: 16, de: 14, da: 18, dl: 18, outcome: '女族长凭借数十年的记忆带领全族找到未封冻的草场，无一掉队。' },
        { label: '用初生的长牙练习破冰与掘雪采食高热量蒿草', desc: '锻炼独立生存体魄', dv: 12, de: 18, da: 14, dl: 10, outcome: '你的螺旋象牙愈发粗壮，体型稳步迈向成年。' }
      ]},
      { title: '全新世气候变暖与智人火把的夹击', event: '气候转暖使干燥坚实的猛犸草原退化为泥泞的苔原与针叶林，远处山脊上出现了举着火把与投矛器（Atlatl）的两脚直立猿（现代人类）！', isDecision: true, choices: [
        { label: '带领象群向极北方的弗兰格尔岛与北冰洋陆桥高地转移', desc: '避开人类猎手，寻找最后的冰原绿洲（真实历史延续至公元前2000年！）', dv: 14, de: 6, da: 22, dl: 26, outcome: '你成功带领族群避开猎杀，你们的后代在北冰洋孤岛上一直繁衍到人类建造埃及金字塔的时代！' },
        { label: '在大陆河谷摆开防御阵型，用三米长牙正面威慑人类狩猎队以掩护幼象撤退', desc: '悲壮的守护者终章', dv: -14, de: -6, da: 16, dl: 28, outcome: '象群幼崽全部安全脱险，而你的躯体沉入西伯利亚永久冻土层，万年后连长毛与胃中最后一口野花都完好如初。' }
      ]}
    ]
  },
  {
    id: 'dodo',
    name: '毛里求斯渡渡鸟',
    latin: 'Raphus cucullatus',
    emoji: '🦤',
    era: 'cenozoic',
    eraName: '全新世 · 公元 1660 年 (大航海时代)',
    timeMa: 0.00036,
    habitat: '印度洋毛里求斯岛 · 原始乌木与棕榈森林',
    o2Pct: 20.95,
    tempC: 24,
    maxAge: 20,
    ageUnit: '岁',
    bodySize: '1.0 米 / 15 公斤',
    trophic: '岛屿无天敌演化大型陆生鸠鸽',
    curveType: 'I',
    infantMortality: 0.22,
    fossilBaseChance: 0.05,
    biomassWeight: 6,
    milestoneWeight: 12,
    dailyKcal: 650,
    openingLore: '你是一只降生于公元 1660 年印度洋毛里求斯岛的渡渡鸟。你们的祖先本是擅长飞行的鸽子，因为这座火山岛数百万年来没有任何陆生哺乳类天敌，你们演化出了肥胖温顺的身躯、退化的翅膀，以及毫无恐惧之心的天真本能。直到海平线上升起了荷兰东印度公司的白色船帆……',
    stages: [
      { title: '雨季大颅榄树下的丰饶时光', event: '森林里落满了熟透的棕榈果与大颅榄树坚果，你在胃里吞下一颗玄武岩鹅卵石用来磨碎坚硬果核。', isDecision: true, choices: [
        { label: '在茂密的沿海树林大快朵颐囤积厚实脂肪以备旱季', desc: '渡渡鸟百万年来的自然节律', dv: 14, de: 20, da: 10, dl: 12, outcome: '你长得丰满健壮，与终身一夫一妻的伴侣筑起了地面巢穴。' },
        { label: '向高海拔崎岖火山岩山地森林迁移筑巢', desc: '偏离人类水手常驻的港口海岸', dv: 12, de: 8, da: 20, dl: 16, outcome: '险峻的火山山脊为你赢得了宝贵的宁静岁月。' }
      ]},
      { title: '外来物种入侵：水手、家猪、猕猴与船鼠', event: '人类水手砍伐乌木，更致命的是他们放养的猪、食蟹猕猴与老鼠在森林里疯狂搜刮你们留在地面上的唯一一枚鸟蛋！', isDecision: true, choices: [
        { label: '与伴侣日夜轮流用强有力的弯钩喙死守隐秘岩缝中的唯一一枚蛋', desc: '在物种灭绝倒计时中拼死守护希望', dv: 6, de: -10, da: 18, dl: 26, outcome: '你们击退了偷蛋的船鼠，看着雏鸟破壳而出，在最后的密林里延续着温顺的灵魂。' },
        { label: '带着好奇心走出森林观察海滩上的人类营地', desc: '不设防的岛屿本能', dv: -18, de: 4, da: 6, dl: 8, outcome: '水手把你带上了远航帆船，你的标本最终保存在牛津大学博物馆，让全人类第一次真正意识到“人类活动可以永远抹去一个物种”。' }
      ]}
    ]
  },
  {
    id: 'mayfly',
    name: '蜉蝣',
    latin: 'Ephemera danica',
    emoji: '🧚',
    era: 'cenozoic',
    eraName: '现代生物圈 · 此时此刻',
    timeMa: 0,
    habitat: '现代清澈溪流河床与黄昏水面',
    o2Pct: 20.95,
    tempC: 18,
    maxAge: 24,
    ageUnit: '小时 (成虫羽化后)',
    bodySize: '2.5 厘米',
    trophic: '“朝生暮死”的无口器羽化舞者 (Type III 极致代表)',
    curveType: 'III',
    infantMortality: 0.92,
    fossilBaseChance: 0.01,
    biomassWeight: 180,
    milestoneWeight: 14,
    dailyKcal: 0.5,
    openingLore: '“寄蜉蝣于天地，渺沧海之一粟。”你在溪流底部的泥沙下作为水生稚虫默默蛰伏了整整两年（700多个日夜），熬过了无数鱼类的搜捕。就在今天黄昏，你浮出水面经历昆虫界独一无二的“亚成虫—成虫”两次蜕皮。羽化后的你口器完全退化、肠道里充满空气以减轻体重——你不再进食，生命只剩下最后的 24 小时，只为在夕阳下完成一场漫天群舞！',
    stages: [
      { title: '破水羽化：溪流表面的生死十秒', event: '夕阳染红河面，数百万只蜉蝣同时浮上水面蜕去稚虫壳。溪水下的鳟鱼纷纷跃起，空中的燕子与蜻蜓正俯冲掠食！', isDecision: true, choices: [
        { label: '借着千万同伴同步羽化的“捕食者饱和效应”，振翅直飞岸边芦苇叶背完成二次蜕皮（亚成虫→成虫）！', desc: '自然界最壮观的群体概率突围', dv: 14, de: -5, da: 20, dl: 18, outcome: '你的翅膀从雾蒙蒙的亚成虫变为晶莹剔透的成虫薄翼，三根修长尾丝在晚风中舒展！' },
        { label: '紧贴湍急水花阴影低空滑翔躲避飞鸟', desc: '考验瞬间反应', dv: 8, de: -8, da: 16, dl: 12, outcome: '你擦着鳟鱼跃起的水花惊险升空！' }
      ]},
      { title: '暮色婚飞：没有嘴巴、不问明天的生命绝唱', event: '你的体内没有一滴消化液，腹腔充盈着空气泡，每一秒心跳都在燃烧稚虫期积攒的最后一点脂肪。', isDecision: true, choices: [
        { label: '冲入夕阳金光下的漫天蜉蝣云团，在上下起落的群舞中拥抱伴侣，随后点水产下数千枚卵！', desc: '将24小时活成永恒的诗篇', dv: -10, de: -20, da: 18, dl: 32, outcome: '当最后一粒卵沉入溪底泥沙开启新的两年轮回，你透明的双翼轻贴水面，随月光顺流而去——24小时很短，但你毫无保留地绽放过。' },
        { label: '避开岸边人类路灯的光污染陷阱，坚守自然月光河段群舞', desc: '克服现代人造光源对古老趋光本能的误导', dv: 6, de: -15, da: 24, dl: 28, outcome: '你没有像误入柏油马路的同伴那样迷失，而是在真正的清澈溪流上空完成了生命交响！' }
      ]}
    ]
  },
  {
    id: 'penguin',
    name: '帝企鹅',
    latin: 'Aptenodytes forsteri',
    emoji: '🐧',
    era: 'cenozoic',
    eraName: '现代生物圈 · 南极极夜',
    timeMa: 0,
    habitat: '南极洲罗斯海陆缘冰与零下60℃内陆冰原',
    o2Pct: 20.95,
    tempC: -45,
    maxAge: 20,
    ageUnit: '岁',
    bodySize: '1.15 米 / 35 公斤',
    trophic: '极地深潜猎手与极夜孵卵者',
    curveType: 'I',
    infantMortality: 0.38,
    fossilBaseChance: 0.02,
    biomassWeight: 12,
    milestoneWeight: 12,
    dailyKcal: 2800,
    openingLore: '你降生在地球最酷寒的绝境——南极洲。这里没有一寸土壤与草木，唯有零下 60℃ 的极夜与时速 150 公里的暴风雪。作为唯一在南极冬季繁殖的生物，你们将演化出自然界最感人的热力学奇迹与亲代牺牲。',
    stages: [
      { title: '冰缘深潜：屏息20分钟与豹海豹博弈', event: '为了积蓄越冬脂肪，你必须潜入500米深的幽暗冰海捕食南极银鱼与磷虾，冰洞口一条豹海豹正伺机伏击。', isDecision: true, choices: [
        { label: '释放羽毛间微气泡瞬间加速至两倍航速，如鱼雷般跃上两米高冰架！', desc: '帝企鹅独门流体力学气泡减阻绝技', dv: 14, de: 20, da: 20, dl: 10, outcome: '细密气泡包裹全身大大降低水阻，你潇洒跃上冰面，甩开了豹海豹的血盆大口！' },
        { label: '与上百只同伴集体同步入水，跟随大群协同觅食', desc: '群体安全策略', dv: 12, de: 16, da: 14, dl: 16, outcome: '你们满载磷虾与银鱼归来，体重增至饱满的40公斤。' }
      ]},
      { title: '极夜64天绝食孵卵：足背上的唯一生命', event: '雌企鹅产下唯一一枚蛋后返回大海觅食。你必须用温暖的育儿袋覆盖脚背上的企鹅蛋，在零下60℃暴风雪中不吃不喝站立整整两个月！', isDecision: true, choices: [
        { label: '与数千名企鹅父亲紧紧相拥组成“龟阵”，轮流从外迎风位向中心温暖位缓慢螺旋轮换！', desc: '南极冰原最伟大的集体互助奇迹', dv: 10, de: -18, da: 22, dl: 30, outcome: '龟阵中心温度维持在温暖的30℃！当极夜第一缕曙光升起，你脚背上的小企鹅破壳啼鸣，伴侣也穿越风雪如期归来！' },
        { label: '在冰脊背风坡边缘与小群同伴抱团坚守', desc: '减少推挤踩碎企鹅蛋的风险', dv: 6, de: -22, da: 16, dl: 24, outcome: '你暴瘦了近一半体重，用最后一口反刍胃乳喂活了刚出生的幼崽。' }
      ]}
    ]
  },
  {
    id: 'salmon',
    name: '红大马哈鱼 (红鲑)',
    latin: 'Oncorhynchus nerka',
    emoji: '🐟',
    era: 'cenozoic',
    eraName: '现代生物圈 · 太平洋-阿拉斯加',
    timeMa: 0,
    habitat: '阿拉斯加淡水冰川溪流 ⇄ 北太平洋深海',
    o2Pct: 20.95,
    tempC: 9,
    maxAge: 5,
    ageUnit: '岁',
    bodySize: '65 厘米 / 4 公斤',
    trophic: '跨越江海的宿命洄游者 (森林氮磷循环搬运工)',
    curveType: 'III',
    infantMortality: 0.85,
    fossilBaseChance: 0.01,
    biomassWeight: 48,
    milestoneWeight: 13,
    dailyKcal: 420,
    openingLore: '你诞生在阿拉斯加冰冷清澈的山间溪流砾石下。你用鼻尖死死记住故乡溪水的地球磁场与气味分子，随后顺流而下远征浩瀚北太平洋。四年后，当生命召唤响起，你将停止进食、浑身化作燃烧般的赤红，逆流跃过急流瀑布与棕熊利爪，只为回到出生的那一捧砾石滩完成生命绝唱。',
    stages: [
      { title: '顺流而下：生理渗透压的逆转重构', event: '你从淡水溪流游抵河口咸水区，体内肾脏与鳃细胞正在经历从“保盐排水”到“排盐保水”的剧烈生理重塑（银化期）。', isDecision: true, choices: [
        { label: '在河口半咸水红树与海草带适应数日，随后随夜潮冲入北太平洋深海', desc: '稳健完成渗透压转换，开启四年大洋远征', dv: 14, de: 20, da: 18, dl: 8, outcome: '你在北太平洋富饶的冷水中捕食磷虾与小鱼，练就一身健硕的橙红色肌肉！' },
        { label: '直接随春汛洪峰急速冲入外海', desc: '避开河口水鸟，但生理负荷较大', dv: 6, de: 16, da: 14, dl: 6, outcome: '你顶着海浪闯入大洋，开启了万里巡游。' }
      ]},
      { title: '赤红逆流：瀑布、白头海雕与棕熊的审判', event: '四年期满，你的身体变为绚丽的绯红色，颌部弯曲成钩。你不再进食，顺着嗅觉记忆逆流而上，前方布鲁克斯瀑布上十余头饥饿的棕熊正张口以待！', isDecision: true, choices: [
        { label: '积蓄全身尾肌力量，借水底涡流反推跃出水面两米，从棕熊爪尖上方飞跃瀑布并抵达上游产卵滩！', desc: '生命本能对地心引力的壮烈胜利', dv: -12, de: -18, da: 24, dl: 32, outcome: '你跃过天堑重返出生的砾石滩，播下数千枚红润鱼卵！力竭离世后，你的躯体化作海洋赠予内陆温带雨林的氮磷养分，滋养了整片参天巨树。' },
        { label: '紧贴瀑布侧翼乱石急流水道分阶段迂回潜行向上', desc: '避开瀑布正中央的棕熊密集区', dv: 4, de: -15, da: 20, dl: 28, outcome: '你遍体鳞伤却执着地游回了故乡溪流，完成了生命的闭环。' }
      ]}
    ]
  },
  {
    id: 'seaturtle',
    name: '绿海龟',
    latin: 'Chelonia mydas',
    emoji: '🐢',
    era: 'cenozoic',
    eraName: '现代生物圈 · 热带大洋',
    timeMa: 0,
    habitat: '珊瑚三角区海草床与大洋环流带',
    o2Pct: 20.95,
    tempC: 26,
    maxAge: 75,
    ageUnit: '岁',
    bodySize: '1.2 米 / 160 公斤',
    trophic: '万里重返故乡的海洋长寿旅者 (经典 Type III 曲线)',
    curveType: 'III',
    infantMortality: 0.90,
    fossilBaseChance: 0.03,
    biomassWeight: 16,
    milestoneWeight: 12,
    dailyKcal: 1500,
    openingLore: '你破壳于热带岛屿温暖的星夜沙滩下。在科学统计中，每 1000 只破壳冲向大海的小海龟，只有 1 到 2 只能够平安长到成年！但只要熬过最初十年的“失踪岁月”长出坚硬背甲，你将拥有跨越半个世纪的漫长海洋人生，并在三十年后凭地磁感应精准游回出生的这片海滩。',
    stages: [
      { title: '百米沙滩生死线：冲向月光海浪', event: '沙坑顶部的沙子塌落，你和上百只兄弟姐妹在月光下奋力扒动桨状前肢冲向大海，沙蟹、军舰鸟与海鸥正在沙滩上疯狂截杀！', isDecision: true, choices: [
        { label: '紧盯海平线最亮的自然月光反射带，全速直线冲入浪花并连续游动24小时进入马尾藻漂流带！', desc: '熬过90%幼体折损率的关键冲刺', dv: 12, de: -10, da: 22, dl: 12, outcome: '海浪托起你轻盈的身躯，你钻入漂浮的马尾藻丛中隐蔽成长，成功度过了最危险的十年幼年期！' },
        { label: '在礁石阴影间走走停停躲避军舰鸟俯冲', desc: '稳妥但容易被潮汐卷回岸边', dv: 6, de: -6, da: 14, dl: 8, outcome: '一波大浪及时将你卷入深水，你幸运生还。' }
      ]},
      { title: '成年珊瑚礁巡游：真水母 vs 人类塑料袋', event: '成年后的你转为植食为主（啃食海草床），但偶尔仍会捕食水母补充水分。海水中漂浮着一团半透明的白色物体……', isDecision: true, choices: [
        { label: '仔细辨识水流摆动频率，避开毫无生命律动的人类塑料袋与废弃幽灵渔网，专注采食天然海草床', desc: '在人类世海洋危机中保持清醒本能', dv: 16, de: 16, da: 24, dl: 14, outcome: '你避开了致命的海洋塑料陷阱，并在珊瑚礁清洁站让小鱼为你清理背甲藤壶。' },
        { label: '跟随地磁记忆跨越三千公里大洋，重返30年前自己破壳的那片海滩产卵', desc: '地球生命最浪漫的归乡传奇', dv: 8, de: -12, da: 18, dl: 30, outcome: '在星光下，你用后肢挖开熟悉的温暖细沙产下百枚龟卵，完成了跨越三十载的归乡誓言。' }
      ]}
    ]
  },
  {
    id: 'greenlandshark',
    name: '格陵兰睡鲨',
    latin: 'Somniosus microcephalus',
    emoji: '🐋',
    era: 'cenozoic',
    eraName: '公元 1626 年 – 2026 年 (跨越四百年)',
    timeMa: 0.0004,
    habitat: '北大西洋与北冰洋 1500 米深海冰层之下',
    o2Pct: 20.95,
    tempC: 1,
    maxAge: 400,
    ageUnit: '岁 (脊椎动物最长寿纪录)',
    bodySize: '5.5 米 / 1.1 吨',
    trophic: '极地深海慢镜头时间旅行者',
    curveType: 'I',
    infantMortality: 0.20,
    fossilBaseChance: 0.02,
    biomassWeight: 5,
    milestoneWeight: 13,
    dailyKcal: 1900,
    openingLore: '你诞生于公元 1626 年（中国明朝天启六年、伽利略仰望星空的年代）！在接近 0℃ 的北极千米深海中，你的心脏每 10 秒才跳动一次，每年只长 1 厘米，直到 150 岁（清朝道光年间）才刚刚性成熟！你是地球上最长寿的脊椎动物，以极致的慢镜头静默见证人类四个世纪的沧桑变迁。',
    stages: [
      { title: '长达一个半世纪的童年与青春期 (0–150岁)', event: '海面之上，人类经历了帆船时代、工业革命与蒸汽机轰鸣；而在幽暗冰冷的格陵兰深海，你以每秒 0.3 米的慢速巡航。', isDecision: true, choices: [
        { label: '保持极低基础代谢率，在深海海沟静静伏击睡梦中的海豹、比目鱼与沉入海底的鲸落', desc: '慢即是永恒的长寿之道', dv: 18, de: 16, da: 18, dl: 10, outcome: '一座丰饶的深海鲸落为你提供了数十年的脂质营养，你的晶状体蛋白质忠实记录着世纪更迭。' },
        { label: '任由发光桡足类寄生在角膜上，借助生物微光与极其敏锐的嗅觉在黑暗中导航', desc: '深海独有的生存权衡', dv: 12, de: 18, da: 20, dl: 8, outcome: '在伸手不见五指的千米深渊，视觉本就无用，你的鼻腔能闻到数公里外的一滴鱼血。' }
      ]},
      { title: '跨越四百年的回眸：从木制帆船到核潜艇时代 (150–400岁)', event: '20世纪中叶的大气核试验放射性碳-14脉冲留在了你眼部晶状体外层，上方海面掠过钢铁巨轮与科考船，而你迎来了迟到百年的求偶季。', isDecision: true, choices: [
        { label: '在北极深海峡湾与同样活了三百岁的伴侣完成交配，随后继续游向第五个世纪', desc: '活成地球海洋的活化石史书', dv: 14, de: 8, da: 20, dl: 30, outcome: '四百年光阴在你身侧如水流逝，你用近乎凝固的生命节奏，诠释了地球生命跨度最深邃的静美。' },
        { label: '潜入格陵兰冰架最深处的原始海盆静修', desc: '远离现代远洋拖网渔船', dv: 18, de: 12, da: 18, dl: 18, outcome: '你在未受惊扰的极地深渊继续着跨越世纪的漫游。' }
      ]}
    ]
  },

  // Additional 6 Classic Species to bring total to 24!
  {
    id: 'hallucigenia',
    name: '怪诞虫',
    latin: 'Hallucigenia sparsa',
    emoji: '🐛',
    era: 'paleozoic',
    eraName: '寒武纪 · 5.08亿年前',
    timeMa: 508,
    habitat: '寒武纪布尔吉斯页岩海绵礁底',
    o2Pct: 13.0,
    tempC: 21,
    maxAge: 2,
    ageUnit: '年',
    bodySize: '3.5 厘米',
    trophic: '背生七对长刺的寒武纪叶足动物 (天鹅绒虫远亲)',
    curveType: 'II',
    infantMortality: 0.58,
    fossilBaseChance: 0.05,
    biomassWeight: 55,
    milestoneWeight: 9,
    dailyKcal: 2,
    openingLore: '你是一只生活在 5.08 亿年前寒武纪海底的怪诞虫。你的长相如此奇特——背上竖立着七对坚硬的长刺，腹下长着七对柔软带爪的管状足，以至于人类科学家最初足足把你上下颠倒、首尾反置误认了数十年！',
    stages: [
      { title: '海绵礁上的背刺防御', event: '一只饥饿的奇虾从海绵礁上方掠过，你正在攀爬吸食海绵组织。', isDecision: true, choices: [
        { label: '弓起身体竖起背部七对锋利硬刺，让掠食者无从下口', desc: '寒武纪最早的被动装甲防线', dv: 16, de: 10, da: 16, dl: 8, outcome: '奇虾忌惮你背上的尖刺，转向去追逐没有防备的软体蠕虫。' },
        { label: '用带爪叶足牢牢钩住海绵孔洞深处隐蔽', desc: '稳健潜伏', dv: 12, de: 12, da: 14, dl: 8, outcome: '你稳稳藏身海绵褶皱中，安然度过危机。' }
      ]},
      { title: '寒武纪怪诞传奇的延续', event: '你在海底完成了产卵与蜕皮，微小的微笑状环齿口器被电子显微镜永久定格。', isDecision: true, choices: [
        { label: '将叶足动物的基因火种传递给后代（现代天鹅绒虫的远亲）', desc: '完成寒武纪奇妙一生', dv: 8, de: -6, da: 14, dl: 26, outcome: '你用3.5厘米的微小身躯，向未来世界证明了寒武纪生命演化的无穷想象力！' },
        { label: '在深水海绵丛中安度晚年', desc: '极高概率留在布尔吉斯页岩中', dv: 12, de: 8, da: 12, dl: 16, outcome: '你的化石让古生物学家们既困惑又着迷了整整一个世纪。' }
      ]}
    ]
  },
  {
    id: 'orthoceras',
    name: '房角石 (巨型直角石)',
    latin: 'Cameroceras / Endocerida',
    emoji: '🦑',
    era: 'paleozoic',
    eraName: '奥陶纪 · 4.60亿年前',
    timeMa: 460,
    habitat: '奥陶纪泛大洋温暖陆表海',
    o2Pct: 14.0,
    tempC: 23,
    maxAge: 15,
    ageUnit: '岁',
    bodySize: '6.0 米 (含长锥形气壳)',
    trophic: '奥陶纪海洋初代无脊椎巨兽 (头足类霸主)',
    curveType: 'II',
    infantMortality: 0.52,
    fossilBaseChance: 0.11,
    biomassWeight: 15,
    milestoneWeight: 10,
    dailyKcal: 3500,
    openingLore: '你诞生在 4.6 亿年前的奥陶纪生物大辐射时期。此时的鱼类还只是没有下巴的小可怜，而你们头足纲房角石身披长达数米的圆锥形钙质气壳，挥舞强健触手与鹦鹉螺式的锐利角质喙，是奥陶纪海洋无可争议的初代巨型霸主！',
    stages: [
      { title: '气室浮力调节与海底巡航', event: '你通过体管调节锥形外壳内一格格气室的气体与液体比例，像潜艇一样悬浮在海床上空。', isDecision: true, choices: [
        { label: '喷水推进俯冲，用强力触手擒拿巨型三叶虫与板足鲎（海蝎）', desc: '角质喙轻松咬穿节肢动物外骨骼', dv: 12, de: 20, da: 16, dl: 8, outcome: '连两米长的海蝎也沦为你的盘中餐，你的锥壳又向前生长了一节气室！' },
        { label: '在珊瑚礁边缘伏击成群的笔石与腕足类', desc: '稳健低消耗', dv: 14, de: 14, da: 12, dl: 8, outcome: '你在温暖浅海稳步壮大。' }
      ]},
      { title: '奥陶纪末伽马射线暴/冰期寒潮考验', event: '奥陶纪末期全球气温骤降，海平面大幅回落，浅海栖息地急剧萎缩。', isDecision: true, choices: [
        { label: '调节气室浮力潜入温度稳定的深水海盆完成交配产卵', desc: '头足类跨越五次大灭绝的深海避难策略', dv: 10, de: -8, da: 18, dl: 26, outcome: '你们头足纲家族成功穿越冰期，后代将演化为菊石、鹦鹉螺与现代高智商章鱼！' },
        { label: '留在浅海礁盘守卫领地直至终老', desc: '长锥形气壳化作著名的直角石宝塔化石', dv: -8, de: 6, da: 12, dl: 16, outcome: '你修长的气室锥壳在奥陶纪石灰岩中保存得洁白如玉。' }
      ]}
    ]
  },
  {
    id: 'pteranodon',
    name: '长头无齿翼龙',
    latin: 'Pteranodon longiceps',
    emoji: '🦅',
    era: 'mesozoic',
    eraName: '晚白垩世 · 8500万年前',
    timeMa: 85,
    habitat: '北美西部内陆海道 · 远洋海崖与高空信风带',
    o2Pct: 22.0,
    tempC: 26,
    maxAge: 18,
    ageUnit: '岁',
    bodySize: '翼展 7.0 米 / 体重仅 25 公斤',
    trophic: '跨洋滑翔鱼类捕手 (中生代天空统治者)',
    curveType: 'II',
    infantMortality: 0.46,
    fossilBaseChance: 0.05,
    biomassWeight: 14,
    milestoneWeight: 10,
    dailyKcal: 1800,
    openingLore: '你是一只翼展达 7 米的无齿翼龙！你的骨骼中空如薄纸，第四指极度延长撑起坚韧翼膜。你只需展开双翼借海面上升气流，便能连续滑翔数百公里深入西部内陆海道中央捕鱼，但水面之下潜伏着随时跃起的沧龙与白垩刺甲鲨！',
    stages: [
      { title: '内陆海道百里外海的掠水捕鱼', event: '你在距离海岸两百公里的海面上空盘旋，下方鱼群翻涌，但深水处有一道巨大的黑影（海王龙）正在上浮！', isDecision: true, choices: [
        { label: '保持高速低空掠过水面，用无齿长喙闪电般舀起表层鱼群绝不落水停留', desc: '顶级滑翔猎手的铁律', dv: 14, de: 18, da: 20, dl: 8, outcome: '你在海王龙跃出水面的前一秒振翅拉升，喉囊里装满了鲜鱼！' },
        { label: '降落在海面浮游休息并大口吞食大鱼', desc: '热量极高但面临水下偷袭', dv: -10, de: 24, da: 10, dl: 4, outcome: '一头白垩刺甲鲨擦着你的翼尖掠过，你利用四肢撑水弹射起飞惊险逃生！' }
      ]},
      { title: '海崖求偶：宏伟头冠的空中芭蕾', event: '你头顶向后延伸的巨大骨质头冠已长到巅峰，海崖上聚集着数千只求偶的无齿翼龙。', isDecision: true, choices: [
        { label: '在海风中展现高超滑翔技巧与醒目头冠，与伴侣在绝壁筑巢育雏', desc: '延续天空霸主血脉', dv: 10, de: -8, da: 16, dl: 28, outcome: '幼翼龙破壳不久便能展翅，你的中空翼骨最终沉入尼奥布拉拉白垩层。' },
        { label: '顺着高空信风跨越整片内陆海道开拓新岛屿', desc: '完成史诗级跨海滑翔', dv: 12, de: 6, da: 20, dl: 16, outcome: '你一生飞行里程超过十万公里，与蓝天融为一体。' }
      ]}
    ]
  },
  {
    id: 'bluewhale',
    name: '蓝鲸',
    latin: 'Balaenoptera musculus',
    emoji: '🐋',
    era: 'cenozoic',
    eraName: '现代生物圈 · 四大洋',
    timeMa: 0,
    habitat: '全球深海大洋与极地磷虾觅食场',
    o2Pct: 20.95,
    tempC: 12,
    maxAge: 85,
    ageUnit: '岁',
    bodySize: '30 米 / 180 吨 (地球46亿年史上最大动物)',
    trophic: '地球史上最大滤食巨兽 (每次冲刺吞入百吨海水)',
    curveType: 'I',
    infantMortality: 0.22,
    fossilBaseChance: 0.04,
    biomassWeight: 5,
    milestoneWeight: 14,
    dailyKcal: 1500000,
    openingLore: '恭喜你抽中了地球 46 亿年演化史上体型最大的动物——蓝鲸！没有任何一头恐龙曾达到你的体重（180吨，相当于30头非洲象）。你的心脏有一辆小汽车那么大，主动脉粗得足以让人游泳，低频歌声能跨越上千公里大洋，每天靠鲸须板滤食 4 吨微小的磷虾！',
    stages: [
      { title: '每日增重90公斤的母乳奇迹', event: '刚出生的你就重达2.5吨，在母亲贴身护航下每天饮用数百升脂肪含量高达40%的鲸乳。', isDecision: true, choices: [
        { label: '紧贴母亲尾流借流体力学省力游向高纬度磷虾场，避开虎鲸群窥伺', desc: '母子同心跨越万里大洋', dv: 16, de: 20, da: 16, dl: 16, outcome: '不到两年你便长到18米长，虎鲸群再也无法威胁你的安全！' },
        { label: '练习深潜冲刺张口吞滤磷虾云团（Lunge feeding）', desc: '掌握蓝鲸独门高能耗高回报觅食术', dv: 12, de: 24, da: 18, dl: 10, outcome: '你一口吞入上百吨海水与数百万只磷虾，通过鲸须板完美滤出美食！' }
      ]},
      { title: '跨越千里的188分贝深海情歌与“一鲸落万物生”', event: '现代大洋中远洋货轮的螺旋桨噪音干扰着声呐，你发出了穿越整个洋盆的超低频歌声。', isDecision: true, choices: [
        { label: '下潜至声道轴深度吟唱低频歌声寻得伴侣，并在暮年化作滋养深海百年的“鲸落（Whale Fall）”', desc: '地球生命最浪漫宏大的谢幕礼', dv: 10, de: -10, da: 18, dl: 32, outcome: '当你走完85年波澜壮阔的一生缓缓沉入海底，你的躯体化作深海荒漠中的绿洲，供养食骨蠕虫、盲鳗与深海蛤长达整整一百年！' },
        { label: '主动避开繁忙的国际航运水道，在南大洋纯净海域巡游一生', desc: '减少船只撞击风险，安度长寿岁月', dv: 16, de: 12, da: 20, dl: 20, outcome: '你在南大洋的冰山与极光下自由呼吸了近一个世纪。' }
      ]}
    ]
  }      ,
  // ==================== HUMANITY & HOMININ EVOLUTION ERA (6 PLAYABLE HUMAN PERSONAS) ====================
  {
    id: 'australopithecus',
    name: '南方古猿 · 露西 (人类远祖)',
    latin: 'Australopithecus afarensis',
    emoji: '🦍',
    era: 'humanity',
    eraName: '上新世 · 320万年前 (直立行走黎明)',
    timeMa: 3.2,
    habitat: '东非大裂谷阿法尔盆地 · 稀树草原与火山灰河谷',
    o2Pct: 20.9,
    tempC: 24,
    maxAge: 38,
    ageUnit: '岁',
    bodySize: '1.1 米 / 30 公斤 (脑容量 430 mL)',
    trophic: '告别树冠的初代双足直立行走灵长类',
    curveType: 'II',
    infantMortality: 0.45,
    fossilBaseChance: 0.08,
    biomassWeight: 15,
    milestoneWeight: 18,
    dailyKcal: 1400,
    openingLore: '你诞生在 320 万年前的东非大裂谷！气候变干让茂密雨林退化为危机四伏的稀树草原，恐猫（Dinofelis）与鬣狗在草丛中窥伺。你做出了改变整个地球生命史的决定——从树冠走下地面，挺直脊梁用双足直立行走，彻底解放双手去拾起第一块天然燧石与木棒！',
    stages: [
      { title: '告别树冠：稀树草原上的第一步直立行走', event: '原来的果树林已经枯萎，远方河谷有丰富的块茎与浆果，但中间隔着开阔的高草草原。', isDecision: true, choices: [
        { label: '🦵👁️ 【挺直腰椎双足站立】高举双手眺望草丛上方的恐猫动向，结伴跨越草原！', desc: '人类演化史的第一步！升级【🦵支撑肢骨】与视野高度', dv: 12, de: 14, da: 24, dl: 14, outcome: '你挺直骨盆与脊柱，双足在莱托里火山灰上踩下了流芳百世的直立脚印！' },
        { label: '🦷 【拾起尖锐石块与粗木棒】用解放的双手挥舞原始武器威慑掠食者', desc: '升级【🦷器物武装】· 开启工具使用先河', dv: 10, de: 18, da: 20, dl: 10, outcome: '双手一旦不再用于爬树，便成了改造世界的起点！' }
      ]},
      { title: '恐猫夜袭与氏族篝火前夜的守望', event: '夜幕降临，擅长猎杀灵长类的剑齿恐猫逼近岩棚，幼崽在你怀中瑟瑟发抖。', isDecision: true, choices: [
        { label: '🌺🦷 【全族齐声呐喊投掷石雨】用集体协作与石块砸退恐猫，并抚育后代长大', desc: '诞下 +2 世代子嗣！人类社会性协作的起源', offspringGain: 2, dv: 10, de: 8, da: 20, dl: 30, outcome: '恐猫在密集的飞石与呐喊中仓皇逃窜，你的血脉在东非大裂谷生生不息，向着人属（Homo）迈进！' },
        { label: '🫁 【带族人攀上绝壁岩洞并探索敲击燧石火花】', desc: '诞下 +1 世代子嗣，解锁向【直立人】进化的火种潜能', offspringGain: 1, dv: 14, de: 12, da: 26, dl: 22, outcome: '两块燧石碰撞出的微弱火星照亮了你们的双眼——火的时代即将到来！' }
      ]}
    ]
  },
  {
    id: 'homo_erectus',
    name: '直立人 · 盗火与手斧先驱',
    latin: 'Homo erectus (Peking / Turkana Lineage)',
    emoji: '🔥',
    era: 'humanity',
    eraName: '更新世 · 150万年前 (掌控圣火与走出非洲)',
    timeMa: 1.5,
    habitat: '旧大陆草原与周口店龙骨山洞穴',
    o2Pct: 20.9,
    tempC: 16,
    maxAge: 48,
    ageUnit: '岁',
    bodySize: '1.70 米 / 62 公斤 (脑容量 1050 mL)',
    trophic: '掌控火焰、褪去体毛的长途耐力狩猎者',
    curveType: 'I',
    infantMortality: 0.32,
    fossilBaseChance: 0.09,
    biomassWeight: 18,
    milestoneWeight: 18,
    dailyKcal: 2200,
    openingLore: '你是 150 万年前的直立人！你们褪去了浓密体毛，演化出遍布全身的汗腺与修长双腿，可以在烈日下连续奔跑数小时将羚羊活活跑垮；更伟大的是，你们不再畏惧雷电野火，而是将火种引入洞穴——熟食让肠道缩短、大脑容量暴涨了一倍！',
    stages: [
      { title: '雷击野火中的普罗米修斯之举', event: '一场干雷暴点燃了草原灌木，百兽惊慌逃窜，而燃烧的枯枝就在你面前跳跃。', isDecision: true, choices: [
        { label: '🔥🫁 【高举火把迎回洞穴！】用篝火炙烤猎物、驱赶洞熊，让熟食催动大脑飞跃！', desc: '人类彻底脱离普通野兽的分水岭！全属性与适应度大爆发', dv: 16, de: 24, da: 28, dl: 18, outcome: '温暖的篝火彻夜不熄，熟肉的香气与围坐火堆的低语，孕育了人类最早的语言与神话！' },
        { label: '🦷 【精心打制双面对称的阿舍利泪滴形手斧】', desc: '升级【🦷器物武装】· 百万年石器工业的巅峰杰作', dv: 14, de: 20, da: 22, dl: 12, outcome: '极具对称美感的阿舍利手斧在你手中成型，无论是切割兽皮还是防身皆无往不利！' }
      ]},
      { title: '走出非洲：横跨欧亚大陆的万里远征', event: '冰期与间冰期交替，你们的部落站在大陆桥的十字路口，远方是未知的欧亚腹地与周口店山谷。', isDecision: true, choices: [
        { label: '🦵🌺 【高举不灭火种率族远征欧亚！】沿途繁衍生息，建立延续数十万年的洞穴家园', desc: '诞下 +2 世代子嗣！缔造直立人跨越两百万年的最长寿人类物种纪录', offspringGain: 2, dv: 14, de: 14, da: 24, dl: 30, outcome: '你们的足迹遍布格鲁吉亚、爪哇与北京周口店，厚达数米的洞穴灰烬层见证了你们不屈的岁月！' },
        { label: '🛡️ 【加固大裂谷核心部落，潜心传授打制石器与用火技艺】', desc: '诞下 +2 世代子嗣，稳步向智人演化', offspringGain: 2, dv: 18, de: 16, da: 22, dl: 28, outcome: '你的子孙在火光与石器传承中，脑容量一步步逼近现代人类！' }
      ]}
    ]
  },
  {
    id: 'neanderthal',
    name: '尼安德特人 · 冰原守望者',
    latin: 'Homo neanderthalensis',
    emoji: '🪓',
    era: 'humanity',
    eraName: '晚更新世 · 4万年前 (冰河世纪的人性微光)',
    timeMa: 0.04,
    habitat: '欧亚大陆冰川前缘 · 阿尔泰与沙尼达尔岩洞',
    o2Pct: 20.95,
    tempC: -6,
    maxAge: 52,
    ageUnit: '岁',
    bodySize: '1.66 米 / 78 公斤 (脑容量高达 1500 mL)',
    trophic: '冰河世纪顶级重装猎手与最早的死者安葬者',
    curveType: 'I',
    infantMortality: 0.28,
    fossilBaseChance: 0.12,
    biomassWeight: 14,
    milestoneWeight: 18,
    dailyKcal: 3800,
    openingLore: '你降生在 4 万年前的欧亚冰河世纪，是一名尼安德特人。你绝非愚笨的野人——你的脑容量甚至比现代人更大（1500毫升），骨骼粗壮如摔跤手。你们会用桦树皮焦油合成复合长矛，会悉心照料失去右臂与失明的老年同伴，还会在逝去亲人的墓穴旁撒满蓝色的矢车菊花粉。然而，身材修长、成群结队的晚期智人正从南方走来……',
    stages: [
      { title: '冰川峡谷围猎披毛犀与病患同伴的抉择', event: '严冬降临，部落必须近身刺杀庞大的披毛犀，而族中一位年长猎手在战斗中折断了右臂、左眼失明。', isDecision: true, choices: [
        { label: '🌺🛡️ 【绝不抛弃同伴！】全族分担食物并用草药照料伤者，用重装木矛阵合力猎杀巨兽', desc: '真实沙尼达尔1号化石证实的人性光辉！诞下 +2 世代子嗣', offspringGain: 2, dv: 14, de: 16, da: 22, dl: 30, outcome: '那位残疾族人在你的照料下又活了整整二十年，他传承的石器与草药经验救活了无数部落孩童！' },
        { label: '🦷 【熬制桦树皮沥青胶水，打造高杀伤力莫斯特复合石矛】', desc: '升级【🦷器物武装】· 人类最早的化学合成工程', dv: 16, de: 24, da: 24, dl: 14, outcome: '锋利的燧石矛头被黑亮焦油牢牢固定在白蜡木杆上，冰原巨兽应声倒下！' }
      ]},
      { title: '风雪交汇：与走出非洲的现代智人部落相遇', event: '在多瑙河谷的篝火旁，你们遇到了佩戴贝壳项链、使用远程投矛器的晚期智人（Homo sapiens）。', isDecision: true, choices: [
        { label: '🧬🌺 【放下干戈通婚交融！】与智人部落互通有无、缔结姻亲，将基因永远融入现代人类血脉！', desc: '诞下 +2 世代混血子嗣！今日地球上数十亿人体内仍流淌着你 2% 的尼安德特基因！', offspringGain: 2, dv: 16, de: 18, da: 28, dl: 32, outcome: '你们的后代兼具尼安德特人的抗寒免疫基因与智人的广阔社群网络，你的血脉在现代人类体内获得了永生！' },
        { label: '🏔️ 【退守伊比利亚与高加索深山岩洞，用矢车菊鲜花守护最后的净土】', desc: '诞下 +1 世代子嗣，留下震撼考古学界的鲜花墓葬化石', offspringGain: 1, dv: 12, de: 12, da: 22, dl: 24, outcome: '你在岩洞深处安然长眠，身畔环绕的花粉化石向四万年后的世界证明了你们深沉的爱与灵魂。' }
      ]}
    ]
  },
  {
    id: 'paleolithic_human',
    name: '晚期智人 · 拉斯科星辰画师',
    latin: 'Homo sapiens (Paleolithic Cro-Magnon)',
    emoji: '🏹',
    era: 'humanity',
    eraName: '晚更新世末 · 1.7万年前 (艺术、弓箭与家犬驯化)',
    timeMa: 0.017,
    habitat: '欧洲与东亚岩洞群 · 篝火壁画圣殿与猛犸猎场',
    o2Pct: 20.95,
    tempC: 8,
    maxAge: 62,
    ageUnit: '岁',
    bodySize: '1.75 米 / 68 公斤',
    trophic: '掌握复合符号语言、虚构故事、远程投矛器与驯狼的现代智人先民',
    curveType: 'I',
    infantMortality: 0.22,
    fossilBaseChance: 0.07,
    biomassWeight: 25,
    milestoneWeight: 20,
    dailyKcal: 2600,
    openingLore: '你是 1.7 万年前的晚期智人！与一切远古生物不同，你的大脑解锁了“虚构故事、信仰与艺术想象”的超能力——这使得上千名素不相识的智人能够团结协作！你们磨制精细的骨针缝制合身毛皮，发明投矛器（Atlatl）在百步之外猎杀野牛，收养靠近篝火的冰原孤狼，并在幽暗岩洞深处画下震撼万年的壁画！',
    stages: [
      { title: '篝火边缘的冰原孤狼与骨针发明', event: '寒潮来袭，一只受伤的年轻灰狼被烤肉香气吸引徘徊在营地外围，而族人正苦于寒风灌入兽皮缝隙。', isDecision: true, choices: [
        { label: '🐺🌺 【抛给灰狼一块烤鹿肉将它驯化为伙伴，并用象牙磨制带孔骨针缝制防寒皮衣！】', desc: '人类最好的朋友诞生！升级【🌺文明华冠】并获得忠犬护卫', offspringGain: 1, dv: 18, de: 18, da: 28, dl: 24, outcome: '温顺的狼犬替你们在黑夜放哨追踪猎物，细密的缝制皮衣让全族婴儿安然度过极寒冰期！' },
        { label: '🏹🦷 【研发杠杆式投矛器（Atlatl）与燧石复合弓箭】', desc: '升级【🦷器物武装】· 将投掷杀伤射程提升3倍，零伤亡狩猎', dv: 16, de: 26, da: 24, dl: 14, outcome: '呼啸飞出的长矛轻易贯穿百米外的野牛，智人正式加冕地球陆地食物链之巅！' }
      ]},
      { title: '拉斯科岩洞深处的星辰与野牛壁画', event: '你举着油脂石灯深入地下百米的寂静岩洞，手中握着赤铁矿红粉、锰矿黑炭与吹管。', isDecision: true, choices: [
        { label: '🎨👁️ 【在岩壁上喷绘奔跑的野牛、昴宿星团与你自己的红色手印！】', desc: '升级【👁️哲思天眼】并诞下 +2 世代子嗣！人类文明精神图腾的诞生', offspringGain: 2, dv: 14, de: 14, da: 30, dl: 30, outcome: '一万七千年后，毕加索站在你的壁画前感叹：“在一万七千年里，我们没有发明任何新东西！”那个红色手印，是人类向宇宙发出的第一声问候！' },
        { label: '🌾 【采集野生小麦与稻谷种子尝试在河谷定居播种】', desc: '诞下 +2 世代子嗣，直接开启新石器农业革命先声！', offspringGain: 2, dv: 16, de: 22, da: 26, dl: 28, outcome: '第一株人工播下的麦穗在春风中发芽，人类即将告别颠沛流离的狩猎采集，迈入文明城邦时代！' }
      ]}
    ]
  },
  {
    id: 'ancient_human',
    name: '古典文明人类 · 王朝筑城者',
    latin: 'Homo sapiens (Bronze & Classical Civilization)',
    emoji: '🏛️',
    era: 'humanity',
    eraName: '全新世 · 公元前2000年–古典时代 (文字、青铜与城邦)',
    timeMa: 0.004,
    habitat: '黄河/两河/尼罗河大河冲积平原 · 青铜王城与书院',
    o2Pct: 20.95,
    tempC: 15,
    maxAge: 70,
    ageUnit: '岁',
    bodySize: '1.72 米 / 66 公斤',
    trophic: '掌握文字契约、冶金铸剑、水利筑城与哲学思想的文明缔造者',
    curveType: 'I',
    infantMortality: 0.18,
    fossilBaseChance: 0.15,
    biomassWeight: 45,
    milestoneWeight: 20,
    dailyKcal: 2500,
    openingLore: '你降生在距今四千年的大河文明黎明！你的先祖已驯化五谷与六畜，夯土筑起高耸的城墙。在这个青铜与竹简交织的时代，你不再只是与自然天敌搏斗，更要在百年大洪水、游牧铁骑叩关与百家争鸣的思想浪潮中，选择以“执剑卫国”、“治水兴农”还是“著书立说”来延续你家族的千年世系！',
    stages: [
      { title: '大河决堤与北方游牧战车叩关', event: '青年时期，百年一遇的滔天洪水威胁着城邦农田，而北境荒原的游牧骑兵正趁乱逼近边关。', isDecision: true, choices: [
        { label: '⚔️🦷 【铸造青铜长剑与战车奔赴边关！】率领甲士迎击强敌，以军功封侯立族！', desc: '走【铁血王侯流】· 升级【🦷器物武装】与家族武勋', path: 'tyrant', pathGain: 18, dv: 12, de: 22, da: 20, dl: 20, outcome: '青铜剑光映照万里边关，你一战定乾坤，家族获赐丹书铁券与封地！' },
        { label: '🌊🫁 【拒绝盲目堵水，率万民开凿运河疏导洪峰、灌溉万顷良田！】', desc: '走【万民社稷流】· 诞下 +2 世代子嗣，万民立祠世代感念', path: 'dynasty', pathGain: 18, offspringGain: 2, dv: 16, de: 24, da: 26, dl: 28, outcome: '洪水化作滋养良田的清流，粮仓满溢，你的家族成为声望卓著的百年名门！' },
        { label: '📜👁️ 【仰观天文、俯察地理，在甲骨与竹简上刻下历法、医术与哲学典籍】', desc: '走【千古圣哲流】· 升级【👁️哲思天眼】，让思想跨越千年不朽', path: 'pioneer', pathGain: 18, dv: 14, de: 16, da: 30, dl: 22, outcome: '竹简上的每一个文字都化作文明的基因密码，令后世子孙世代诵读！' }
      ]},
      { title: '盛世家风传承：留给后世子孙的传家至宝', event: '步入花甲之年，你的家族已在城邦开枝散叶，儿孙绕膝请示家族未来的立身之本。', isDecision: true, choices: [
        { label: '🌺📚 【修撰《氏族家训》与藏书楼】无论朝代如何更替，唯有读书明理与仁义互助可绵延百世！', desc: '诞下 +3 世代子嗣！让家族跨越乱世直通现代智人纪元！', path: 'dynasty', pathGain: 20, offspringGain: 3, dv: 16, de: 18, da: 26, dl: 34, outcome: '耕读传家的种子深植血脉，你的家族历经千年王朝更迭依然人才辈出！' },
        { label: '🪨🏺 【铸造铭文青铜巨鼎与墓室壁画封存】将一生功业铸入国之重器', desc: '诞下 +2 世代子嗣，100% 留存博物馆级传世国宝文物！', path: 'tyrant', pathGain: 18, offspringGain: 2, butterflyFlag: 'chose_lagerstatte', dv: 14, de: 16, da: 24, dl: 26, outcome: '三千年后，刻有你名字的青铜重器出土，成为国家博物馆镇馆之宝！' }
      ]}
    ]
  },
  {
    id: 'modern_human',
    name: '当代智人',
    latin: 'Homo sapiens sapiens (Modern Era · 1 in 8 Billion)',
    emoji: '🧑‍🚀',
    era: 'humanity',
    eraName: '人类世 · 公元 2000–2080 年 (现代地球与AI星际黎明)',
    timeMa: 0,
    habitat: '现代地球超级都市圈 · 互联网数字文明与近地轨道',
    o2Pct: 20.95,
    tempC: 15,
    maxAge: 86,
    ageUnit: '岁',
    bodySize: '1.74 米 / 68 公斤 (脑科学+AI外脑协同)',
    trophic: '地球46亿年演化的王冠结晶 · 跨越生物演化与数字星际文明的现代人类',
    curveType: 'I',
    infantMortality: 0.02,
    fossilBaseChance: 0.25,
    biomassWeight: 80,
    milestoneWeight: 30,
    dailyKcal: 2400,
    openingLore: '你来到一个虚构的现代家庭。从第一间卧室起，你会在二十个阶段中经历成长、离家、工作与重逢。每次抉择都会改变你的健康、能力或亲密关系，也会改变下一代的起点。',
    stages: [
      { title: '童年与少年启蒙（6–18岁）：你眼里闪烁着怎样的光？', event: '在现代医院平安降生的你迎来了人生第一个分岔口。课桌上的试卷、拆开的电脑主板、操场上的晚风与星空望远镜，你选择将青春精力倾注于何方？', isDecision: true, choices: [
        { label: '🧠👁️ 【深耕数理科学与前沿AI编程】在奥赛与实验室里探索宇宙底层逻辑！', desc: '升级【👁️哲思天眼】· 走【科技先驱流】，解锁未来AI与星际科研巨匠路线', path: 'pioneer', pathGain: 18, organUpgrade: 'senses', dv: 10, de: 16, da: 28, dl: 14, outcome: '你在代码与物理公式中看到了万物运行的规律，以优异成绩考入顶尖学府！' },
        { label: '⚔️🦷 【锤炼极致商业嗅觉与领导魄力】在校内创业、演讲辩论与竞技体育中崭露头角！', desc: '升级【🦷器物武装】· 走【时代商业领袖流】，积累强大的破局执行力', path: 'tyrant', pathGain: 18, organUpgrade: 'jaws', dv: 16, de: 24, da: 20, dl: 16, outcome: '你很早就展现出果敢的决断力与号召力，身边聚起了一批志同道合的创业伙伴！' },
        { label: '🌺🧬 【热爱人文艺术、心理共情与社群联结】成为朋友们最信赖的温暖灵魂', desc: '升级【🌺求偶华冠】· 走【幸福家族与文化创作者流】，收获深厚挚友与青梅竹马', path: 'dynasty', pathGain: 18, organUpgrade: 'crest', dv: 14, de: 16, da: 18, dl: 28, outcome: '你创作的文字与影像温暖了无数同龄人，也让你邂逅了相伴一生的灵魂伴侣。' }
      ]},
      { title: '黄金青年期（24–38岁）：时代巨浪下的事业与人生坐标', event: '大学毕业步入社会，人工智能（AGI）、生命科学与全球化变局席卷而来。有人选择安稳内卷，有人选择乘风破浪，你的选择是：', isDecision: true, choices: [
        { label: '🚀🫁 【投身生命科学/商业航天/AI浪潮核心】带领团队攻克跨时代难题！', desc: '先驱路线大爆发：打破70分常规天花板，改写人类文明进程！', path: 'pioneer', pathGain: 20, organUpgrade: 'lungs', dv: 10, de: 22, da: 30, dl: 18, outcome: '十年的孤勇深耕让你站在了科技浪潮之巅，你的研究成果正在改变亿万人的生活！' },
        { label: '👑🛡️ 【创立独立品牌/执掌核心企业】在商海博弈中建立属于自己的商业帝国！', desc: '霸主路线大爆发：能量（财富自由度）与社会影响力拉满！', path: 'tyrant', pathGain: 20, organUpgrade: 'armor', dv: 12, de: 30, da: 22, dl: 20, outcome: '你敏锐抓住时代风口实现财富自由，从容掌控自己与家人的人生主动权！' },
        { label: '🏡🌺 【与挚爱伴侣组建温暖家庭，平衡事业与生活，用心陪伴孩子成长】', desc: '诞下 +2 世代健康聪慧的现代子嗣！解锁跨世代现代家族传承！', path: 'dynasty', pathGain: 20, organUpgrade: 'crest', offspringGain: 2, dv: 18, de: 18, da: 20, dl: 34, outcome: '万家灯火中有一盏为你而亮。孩子们的欢笑声与健康的体魄，是你对抗时代焦虑最坚实的铠甲。' }
      ]},
      { title: '不惑与壮年分水岭（40–58岁）：面对中年危机与时代变迁', event: '步入中年，父母渐老、行业洗牌，身体也开始发出疲惫信号。你将如何定义下半场的成功？', isDecision: true, choices: [
        { label: '🧬🌺 【倾力托举下一代教育与家族传承，同时坚持运动重塑强健体魄】', desc: '额外培育 +1 世代优秀子嗣，体魄与家族幸福度双丰收', path: 'dynasty', pathGain: 18, organUpgrade: 'locomotion', offspringGain: 1, dv: 20, de: 16, da: 20, dl: 30, outcome: '你的子女在爱与开明眼界中成才独立，而你通过自律运动保持着超越同龄人的充沛活力！' },
        { label: '🌌👁️ 【开启第二人生曲线：将半生阅历转化为开源著作、公益基金或跨界探索】', desc: '升级【👁️哲思天眼】并诞下 +1 世代子嗣，实现精神与社会价值双不朽', path: 'pioneer', pathGain: 18, organUpgrade: 'senses', offspringGain: 1, dv: 16, de: 20, da: 28, dl: 24, outcome: '你不再被单一KPI绑架，你的思想、作品与善举影响了整整一代年轻人！' }
      ]},
      { title: '暮年回眸（70–86岁）：当46亿年的生命火炬交到你手中', event: '满头银发的你坐在洒满夕阳的窗前。从38亿年前深海热泉的第一颗古菌，到3.75亿年前爬上泥滩的提塔利克鱼，再到今天走完一生的你——这46亿年从未断绝的生命接力，在你身上开出了怎样的花？', isDecision: true, choices: [
        { label: '🌟🪨 【将毕生记忆、著作与数字基因封存进人类文明档案库，并含笑目送子孙奔向星辰大海】', desc: '诞下 +1 世代子嗣，100% 留存传世人类文明印记，并可开启下一世人类/星际家族！', path: 'pioneer', pathGain: 20, offspringGain: 1, butterflyFlag: 'chose_lagerstatte', dv: 14, de: 14, da: 28, dl: 30, outcome: '档案封存的那天，你听见子孙在门外商量下一段旅程。你的故事留在这里，他们的故事刚开始。' },
        { label: '🌳🌺 【在四世同堂的温暖簇拥中安详合眼，将爱与家风永远留在人间】', desc: '诞下 +2 世代子嗣，达成【万代始祖·人间圆满】至高结局！', path: 'dynasty', pathGain: 20, offspringGain: 2, dv: 16, de: 16, da: 22, dl: 35, outcome: '握着爱人与儿孙温暖的手，你平静地合上双眼——生命从未真正离开，它只是在孩子们眼中重新醒来。' }
      ]}
    ]
  }

];

// --- 2. INITIAL FOSSIL MEMORIAL HALL RECORDS (预设地质追思馆感人生命档案) ---
const INITIAL_MEMORIALS = [
  {
    id: 'mem_1',
    speciesName: '叠层石蓝藻',
    latin: 'Cyanobacteria · 24亿年前',
    emoji: '🫧',
    individualName: '太古微泡 #024',
    lifespanText: '存活 36 天 (群落世代) · 化作西澳叠层石化石',
    cause: '在亲手制造的“休伦雪球地球”大冰期降临时，化作碳酸钙纹层基座托举后代向光生长。',
    epitaph: '“我们吐出的每一颗微小气泡，在二十四亿年后成了你们每一次深呼吸里的氧气。”',
    candles: 428,
    litByMe: false
  },
  {
    id: 'mem_2',
    speciesName: '白垩纪末穴居真兽',
    latin: 'Eutheria Lineage · 6600万年前',
    emoji: '🐁',
    individualName: '地狱溪夜行者',
    lifespanText: '享年 3.8 岁 · 跨越小行星撞击核冬天',
    cause: '在希克苏鲁伯小行星撞击后的漫长黑暗寒冬中，用体温与乳汁在地下深穴抚育出古近纪第一窝幼崽后安然老去。',
    epitaph: '“巨龙倒下的时候天空没有光，但我贴着孩子们温热的心跳，知道春天终会再来。”',
    candles: 619,
    litByMe: false
  },
  {
    id: 'mem_3',
    speciesName: '蜉蝣',
    latin: 'Ephemera danica · 现代溪流',
    emoji: '🧚',
    individualName: '暮色羽化者',
    lifespanText: '河底蛰伏 730 天 · 成虫羽化 22 小时',
    cause: '在夕阳金光下完成漫天婚飞群舞并点水产卵后，透明双翼轻贴水面顺流归于天地。',
    epitaph: '“虽然我没有嘴巴无法品尝露水，只有二十四小时看一眼夕阳，但这人间我已经来过了。”',
    candles: 892,
    litByMe: false
  },
  {
    id: 'mem_4',
    speciesName: '毛里求斯渡渡鸟',
    latin: 'Raphus cucullatus · 公元 1660年',
    emoji: '🦤',
    individualName: '乌木林守巢者',
    lifespanText: '享年 17 岁 · 毛里求斯高地火山林',
    cause: '在高山岩缝中与伴侣轮流守卫唯一一枚鸟蛋，直至雏鸟平安破壳。',
    epitaph: '“我们因为相信这世界没有恶意而忘记了飞翔，愿你们人类永远记得温柔对待孤岛上的生灵。”',
    candles: 534,
    litByMe: false
  },
  {
    id: 'mem_5',
    speciesName: '君王暴龙 (霸王龙)',
    latin: 'Tyrannosaurus rex · 6600万年前',
    emoji: '🦖',
    individualName: '拉拉米迪亚君王',
    lifespanText: '享年 27 岁 · 留存完整头骨化石 (检定率 6.2%)',
    cause: '在地狱溪组度过巅峰一生，于白垩纪最后一日仰望划破苍穹的陨星火光。',
    epitaph: '“一亿六千万年的王冠落入尘埃，但请抬头看窗外的飞鸟——我们从未真正离开。”',
    candles: 751,
    litByMe: false
  },
  {
    id: 'mem_6',
    speciesName: '格陵兰睡鲨',
    latin: 'Somniosus microcephalus · 1626–2026年',
    emoji: '🐋',
    individualName: '北极深渊慢行者',
    lifespanText: '享年 398 岁 · 跨越明朝至现代四个世纪',
    cause: '在北大西洋1500米冰层下静默巡游近四百年后自然终老。',
    epitaph: '“海面上的人类换了无数座王朝，而在深海的慢镜头里，四百年不过是一次悠长的呼吸。”',
    candles: 663,
    litByMe: false
  }
];

// --- 3. FIVE PHILOSOPHICAL PAUSE QUESTIONS (对标 1in8b.life 5/15/30/50/70岁停顿) ---


// ==================== 6. PHILOSOPHICAL PAUSE MILESTONES ====================
const PHILOSOPHICAL_PAUSES = [
  {
    stageTrigger: 3,
    title: '⏸️ 暂停片刻 · 初生与幸存之问',
    prompt: '在自然界中，绝大多数生命在看清世界之前就已经折损。回望你自己的童年，有哪些习以为常的庇护，其实已经是跨越亿万年的幸运？'
  },
  {
    stageTrigger: 9,
    title: '⏸️ 暂停片刻 · 器官重塑与成长之问',
    prompt: '在画布与解剖图上，你的颚齿、心肺与羽翼正因为每一次抉择而具象生长。在现实人生中，哪一次困境反而锤炼出了你如今最核心的能力？'
  },
  {
    stageTrigger: 15,
    title: '⏸️ 暂停片刻 · 血脉传承与不朽之问',
    prompt: '个体终会老去，但你演化出的器官与记忆正准备通过子嗣传向第二世、第三世。如果给未来的后代留下一句生命箴言，你会写下什么？'
  }
];

// ==================== 7. APPLICATION STATE (WITH MULTI-GENERATION DYNASTY & ORGAN LEVELS) ====================
const state = {
  currentView: 'sim', // 'sim' | 'atlas' | 'endings' | 'memorial' | 'deploy' | 'teardown'
  simSubview: 'lobby', // 'lobby' | 'birthcard' | 'active' | 'ending'
  selectedEra: 'all',
  drawMode: 'milestone',
  manualSpeciesId: 'trex',
  paceMs: 2200,
  refSpecies: 'human',
  energyUnit: 'kcal',
  gentleMode: false,
  selectedInnateId: 'innate_tyrant',
  xrayMode: true, // Shows internal heart/lungs/vascular evolution on canvas!

  // Audio
  audioEnabled: false,
  audioCtx: null,

  // Anti-Repetition Memory across replays & generations!
  seenEventIds: [],

  // Multi-Generational Lineage Dynasty State (第1世 -> 第2世 -> 第N世)
  dynasty: {
    active: false,
    generation: 1,
    totalYearsSpanned: 0,
    totalOffspringEver: 0,
    inheritedTraits: [],
    inheritedOrgans: { jaws: 0, armor: 0, lungs: 0, senses: 0, locomotion: 0, crest: 0 },
    ancestors: [] // { gen, name, speciesName, emoji, finalAge, endingTitle, organsSummary }
  },

  // Active Life State
  activeLife: null,
  simTimer: null,
  isPaused: false,
  speedMultiplier: 1,
  autoChoice: false,
  lastUpgradedOrgan: null,

  // Canvas Stage Animation State
  canvasAnimId: null,
  stageParticles: [],
  stageFloatingTexts: [],
  stageRipples: [],
  stageCreatureX: 250,
  stageCreatureY: 190,
  stageLungeOffset: 0,
  stageWeatherMode: 'normal',
  stageEnemyEmoji: '🦈',
  stageEnemyLabel: '天敌窥伺',
  stageSceneType: 'ambush',

  // Saved Records
  pastLives: [],
  unlockedEndings: [],
  memorials: [...INITIAL_MEMORIALS]
};

// ==================== 8. SAFE LOCALSTORAGE HELPERS ====================
function loadSavedState() {
  state.pastLives = readLegacy('oneIn46B_pastLives_v3', validLegacyRecords, []);
  state.unlockedEndings = readLegacy('oneIn46B_endings_v3', value => Array.isArray(value) && value.every(id => typeof id === 'string'), []);
  state.memorials = readLegacy('oneIn46B_memorials_v3', value => Array.isArray(value) && value.every(item =>
    isObject(item) && ['id', 'speciesName', 'latin', 'individualName', 'lifespanText', 'cause', 'epitaph', 'emoji']
      .every(key => typeof item[key] === 'string') && isCount(item.candles)), [...INITIAL_MEMORIALS]);
}

function validLegacyRecords(value) {
  const textFields = (entry, keys) => isObject(entry) && keys.every(key => typeof entry[key] === 'string');
  const listOf = (list, accepts) => list == null || (Array.isArray(list) && list.every(accepts));
  return Array.isArray(value) && value.every(record =>
    textFields(record, ['id', 'individualName', 'speciesName', 'eraName', 'finalAge', 'emoji']) &&
    isCount(record.offspringCount) && typeof record.survivedFull === 'boolean' &&
    (record.generation == null || (isCount(record.generation) && record.generation >= 1)) &&
    (record.organLevels == null || (isObject(record.organLevels) &&
      Object.values(record.organLevels).every(level => isCount(level) && level <= 5))) &&
    (record.endingArchetype == null || textFields(record.endingArchetype, ['title', 'badge', 'lore', 'reqDesc'])) &&
    (record.familyBonds == null || (isObject(record.familyBonds) &&
      ['mother', 'father', 'partner', 'child'].every(key => textFields(record.familyBonds[key], ['name', 'status'])))) &&
    listOf(record.crossroadsHistory, row => isObject(row)) &&
    listOf(record.traits, entry => textFields(entry, ['name'])) &&
    listOf(record.starredMoments, entry => typeof entry === 'string') &&
    listOf(record.whatIfs, entry => textFields(entry, ['stage', 'title', 'desc'])));
}

function savePastLives() {
  saveSession();
}

function saveMemorials() {
  saveSession();
}

// ==================== 9. WEB AUDIO SYNTHESIZER ====================
function playTone(freq = 440, duration = 0.14, type = 'sine', gainVal = 0.045, music = false) {
  if (document.hidden || !(music ? state.bgmPlaying : state.audioEnabled)) return;
  try {
    if (!state.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      state.audioCtx = new AudioContextClass();
    }
    if (state.audioCtx.state === 'suspended') state.audioCtx.resume().catch(() => {});
    const osc = state.audioCtx.createOscillator();
    const gain = state.audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, state.audioCtx.currentTime);
    gain.gain.setValueAtTime(gainVal, state.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, state.audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(state.audioCtx.destination);
    osc.start();
    osc.stop(state.audioCtx.currentTime + duration);
  } catch (e) {}
}

function playChord(freqs, duration = 0.22, type = 'triangle') {
  freqs.forEach((f, idx) => {
    setTimeout(() => playTone(f, duration, type, 0.035), idx * 45);
  });
}

// ==================== 10. TOAST & MODAL HELPERS ====================
let toastTimeout = null;
function showToast(msg) {
  const el = document.getElementById('toastNotification');
  el.textContent = msg;
  el.classList.remove('hidden');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => el.classList.add('hidden'), 3400);
}

function openModal(title, bodyHtml, actionsHtml) {
  document.getElementById('modalHeaderTitle').textContent = title;
  document.getElementById('modalBodyContent').innerHTML = bodyHtml;
  document.getElementById('modalFooterActions').innerHTML = actionsHtml || '';
  stopSimTimer();
  openGameDialog(document.getElementById('customModalOverlay'));
  localizePlayerView();
}

function closeModal() {
  closeGameDialog(document.getElementById('customModalOverlay'));
  scheduleNextTick();
}

// ==================== 11. 60FPS SPORE-STYLE PROGRESSIVE ORGANISM EVOLUTION & ARTICULATED ANATOMY ENGINE (《孢子》级渐进生物形态演化与骨骼器官渲染引擎) ====================
state.kairoOrbs = [];
state.hoveredChoiceIdx = null;
state.hoveredChoicePath = null;

function triggerKairoSpeech(text, icon = '🧬', durationFrames = 180) {
  state.kairoSpeech = { text, icon, timer: durationFrames };
}

function spawnKairoOrbs(cx, cy, dv = 0, de = 0, da = 0, dl = 0) {
  const configs = [
    { val: dv, color: '#34d399', label: '体魄' },
    { val: de, color: '#fbbf24', label: '能量' },
    { val: da, color: '#22d3ee', label: '适应' },
    { val: dl, color: '#c084fc', label: '血脉' }
  ];
  configs.forEach((cfg, idx) => {
    if (cfg.val !== 0) {
      addStageFloatingText(
        `${cfg.label} ${cfg.val > 0 ? '+' + cfg.val : cfg.val}`,
        cfg.val > 0 ? cfg.color : '#fb7185',
        cx + (idx - 1.5) * 42,
        cy - 45 - idx * 14
      );
    }
  });
}

function getSpeciesBodyPlan(spId) {
  if (['australopithecus', 'homo_erectus', 'neanderthal', 'paleolithic_human', 'ancient_human', 'modern_human', 'astral_human'].includes(spId)) return 'hominin_human';
  if (['trex', 'gorgonopsid', 'smilodon'].includes(spId)) return 'predator_biped';
  if (['diplodocus', 'mammoth', 'lystrosaurus', 'juramaia'].includes(spId)) return 'titan_quadruped';
  if (['archaeopteryx', 'pteranodon', 'meganeura', 'mayfly', 'dodo', 'penguin'].includes(spId)) return 'winged_flyer';
  if (['anomalocaris', 'trilobite', 'hallucigenia', 'orthoceras'].includes(spId)) return 'paleo_arthropod';
  if (['tiktaalik', 'seaturtle'].includes(spId)) return 'amphibious_pioneer';
  if (['archaea', 'cyanobacteria', 'dickinsonia'].includes(spId)) return 'primordial_cell';
  return 'apex_aquatic';
}

// Smooth, anti-aliased Bezier & Bioluminescent Spore-style Organism Renderer!
// Draws the organism on the left of the stage, starting from a small Spore-like juvenile form and progressively
// growing larger and sprouting concrete anatomical organs (jaws, dorsal plates, beating 4-chamber heart & lungs,
// compound crystal eyes, articulated limbs/feathered wings, and royal bioluminescent crest).
// ==================== v8.0 MASTERPIECE SPORE MULTI-VERTEBRA & SPECIES-SPECIFIC CREATURE ENGINE ====================
// Renders 7 distinct biomechanical body plans with undulating multi-segment spines, translucent X-Ray internal
// anatomy (beating 4-chamber heart, expanding alveolar lungs, arterial network, calcified spine), and live
// golden-cyan hologram previews when hovering over choice cards!
const stageHaloTextures = new Map();

function drawGlowingDisc(ctx, x, y, radius, color, spread) {
  // Rasterize each color once. Live creatures and particles only composite the halo.
  let halo = stageHaloTextures.get(color);
  if (!halo) {
    halo = document.createElement('canvas');
    halo.width = halo.height = 48;
    const paint = halo.getContext('2d');
    const light = paint.createRadialGradient(24, 24, 0, 24, 24, 24);
    light.addColorStop(0, color);
    light.addColorStop(1, 'transparent');
    paint.fillStyle = light;
    paint.fillRect(0, 0, 48, 48);
    stageHaloTextures.set(color, halo);
  }
  const extent = radius + spread;
  const opacity = ctx.globalAlpha;
  ctx.globalAlpha = opacity * 0.56;
  ctx.drawImage(halo, x - extent, y - extent, extent * 2, extent * 2);
  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function strokeStageGlow(ctx, color, width) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth += width;
  ctx.globalAlpha *= 0.23;
  ctx.stroke();
  ctx.restore();
  ctx.stroke();
}

function drawArticulatedCreature(ctx, sp, organs, growthScale, domColor, t, isXray, isMiniCompanion = false) {
  const plan = getSpeciesBodyPlan(sp.id);
  const hoveredOrgan = (!isMiniCompanion && state.hoveredOrganKey) ? state.hoveredOrganKey : null;

  // Effective organ levels (if hovering a choice card that upgrades an organ, preview +1 level on the organism!)
  const jawLv = Math.min(3, ((organs && organs.jaws) || 0) + (hoveredOrgan === 'jaws' ? 1 : 0));
  const armorLv = Math.min(3, ((organs && organs.armor) || 0) + (hoveredOrgan === 'armor' ? 1 : 0));
  const lungLv = Math.min(3, ((organs && organs.lungs) || 0) + (hoveredOrgan === 'lungs' ? 1 : 0));
  const senseLv = Math.min(3, ((organs && organs.senses) || 0) + (hoveredOrgan === 'senses' ? 1 : 0));
  const locoLv = Math.min(3, ((organs && organs.locomotion) || 0) + (hoveredOrgan === 'locomotion' ? 1 : 0));
  const crestLv = Math.min(3, ((organs && organs.crest) || 0) + (hoveredOrgan === 'crest' ? 1 : 0));
  const totalLv = jawLv + armorLv + lungLv + senseLv + locoLv + crestLv;

  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.scale(growthScale, growthScale);

  const swimWave = Math.sin(t * 4.4);
  const breathe = 1 + Math.sin(t * 3.4) * 0.045;
  const heartBeat = 1 + Math.pow(Math.max(0, Math.sin(t * (5.8 + lungLv * 1.6))), 3) * 0.32;
  const primaryCol = domColor || '#10b981';
  const holoPulse = 0.55 + 0.45 * Math.sin(t * 11);

  // Helper to draw a pulsing golden-cyan target hologram ring around an organ being previewed on hover
  function drawOrganHoverHologram(ox, oy, radius, labelText) {
    ctx.save();
    ctx.strokeStyle = `rgba(250, 204, 21, ${0.7 + 0.3 * holoPulse})`;
    ctx.lineWidth = 2.2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.arc(ox, oy, radius + 4 * holoPulse, 0, Math.PI * 2);
    strokeStageGlow(ctx, '#facc15', 5);
    ctx.setLineDash([]);
    if (labelText && !isMiniCompanion) {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.9)';
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(ox - 42, oy - radius - 22, 84, 15, 4);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 8.5px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(translateText(labelText), ox, oy - radius - 11.5);
    }
    ctx.restore();
  }

  // 1. Outer Bioluminescent Spore Aura, Sacred Evolution Geometry & Deep Shadow
  if (!isMiniCompanion) {
    const auraR = 58 + totalLv * 3.6;
    const auraGrad = ctx.createRadialGradient(0, 0, 6, 0, 0, auraR);
    auraGrad.addColorStop(0, isXray ? 'rgba(34, 211, 238, 0.25)' : 'rgba(16, 185, 129, 0.22)');
    auraGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.10)');
    auraGrad.addColorStop(0.82, hoveredOrgan ? 'rgba(250, 204, 21, 0.14)' : 'rgba(6, 182, 212, 0.04)');
    auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = auraGrad;
    ctx.beginPath();
    ctx.arc(0, 0, auraR, 0, Math.PI * 2);
    ctx.fill();

    // Rotating Sacred Genetic Ring when totalLv >= 5 or hovering an upgrade
    if (totalLv >= 4 || hoveredOrgan) {
      ctx.save();
      ctx.rotate(t * 0.45);
      ctx.strokeStyle = hoveredOrgan ? 'rgba(250, 204, 21, 0.35)' : 'rgba(56, 189, 248, 0.18)';
      ctx.lineWidth = 1.1;
      ctx.setLineDash([5, 7]);
      ctx.beginPath();
      ctx.arc(0, 0, auraR * 0.78, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // Deep-Water / Ground Volumetric Shadow
    ctx.fillStyle = 'rgba(2, 6, 23, 0.52)';
    ctx.beginPath();
    ctx.ellipse(0, 46, 46, 9.5, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // ==================== BODY PLAN A: HOMININ & HUMAN ASCENSION (Vitruvian Neural Silhouette + Civilization Halo) ====================
  if (plan === 'hominin_human') {
    const stanceBob = Math.sin(t * 3.4) * 2.5;
    ctx.translate(0, stanceBob);

    // Civilization / Wisdom Halo Rings behind torso (`crest` Lv.1 -> Lv.3)
    if (crestLv >= 1) {
      ctx.save();
      const haloR = 26 + crestLv * 6;
      const haloGrad = ctx.createRadialGradient(0, -18, 4, 0, -18, haloR);
      haloGrad.addColorStop(0, 'rgba(251, 191, 36, 0.35)');
      haloGrad.addColorStop(0.65, 'rgba(168, 85, 247, 0.16)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(0, -18, haloR, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1.6;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.arc(0, -28, 15 + crestLv * 2.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      if (hoveredOrgan === 'crest') drawOrganHoverHologram(0, -32, 20, '🌺 社会声望+1阶');
    }

    // Astral / Kinetic Cape Wings (`locomotion` Lv.1 -> Lv.3)
    if (locoLv >= 1) {
      const wingGrad = ctx.createLinearGradient(-36, -24, -4, 28);
      wingGrad.addColorStop(0, 'rgba(56, 189, 248, 0.62)');
      wingGrad.addColorStop(0.6, 'rgba(168, 85, 247, 0.32)');
      wingGrad.addColorStop(1, 'rgba(16, 185, 129, 0.10)');
      ctx.fillStyle = wingGrad;
      ctx.beginPath();
      ctx.moveTo(-6, -18);
      ctx.quadraticCurveTo(-36 - locoLv * 8, -28 + Math.sin(t * 4.2) * 6, -30 - locoLv * 7, 28);
      ctx.quadraticCurveTo(-12, 18, -4, 8);
      ctx.closePath();
      ctx.fill();
    }

    // Articulated Legs with Knee Joints
    const stride = Math.sin(t * 4.2) * (5 + locoLv * 1.5);
    ctx.strokeStyle = isXray ? '#38bdf8' : '#cbd5e1';
    ctx.lineWidth = 6.2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-6, 10);
    ctx.lineTo(-9 - stride * 0.5, 24);
    ctx.lineTo(-7 - stride, 39);
    ctx.moveTo(6, 10);
    ctx.lineTo(9 + stride * 0.5, 24);
    ctx.lineTo(7 + stride, 39);
    ctx.stroke();
    if (hoveredOrgan === 'locomotion') drawOrganHoverHologram(0, 26, 20, '🦵 远征行动力+1阶');

    // Sculpted Torso & Baskerville Golden-Obsidian Cuirass (`armor`)
    const torsoGrad = ctx.createLinearGradient(-16, -22, 16, 16);
    torsoGrad.addColorStop(0, isXray ? 'rgba(15, 23, 42, 0.90)' : primaryCol);
    torsoGrad.addColorStop(1, '#090d16');
    ctx.fillStyle = torsoGrad;
    ctx.strokeStyle = armorLv >= 2 ? '#fbbf24' : primaryCol;
    ctx.lineWidth = 2.2 + armorLv * 0.85;
    ctx.beginPath();
    ctx.roundRect(-15, -21, 30, 33, 10);
    ctx.fill();
    ctx.stroke();

    // Shoulder Pauldrons if armorLv >= 1
    if (armorLv >= 1) {
      ctx.fillStyle = armorLv >= 2 ? '#fbbf24' : '#38bdf8';
      ctx.beginPath();
      ctx.ellipse(-16, -16, 5 + armorLv, 3.5 + armorLv * 0.6, -0.3, 0, Math.PI * 2);
      ctx.ellipse(16, -16, 5 + armorLv, 3.5 + armorLv * 0.6, 0.3, 0, Math.PI * 2);
      ctx.fill();
    }
    if (hoveredOrgan === 'armor') drawOrganHoverHologram(0, -6, 22, '🛡️ 抗压韧性+1阶');

    // X-Ray Internal Beating 4-Chamber Heart, Dual Lungs & Meridian Network
    if (isXray && !isMiniCompanion) {
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -19);
      ctx.lineTo(0, 10);
      ctx.stroke();

      ctx.fillStyle = `rgba(34, 211, 238, ${0.38 + lungLv * 0.16})`;
      ctx.beginPath();
      ctx.ellipse(-6.5, -8, (4.8 + lungLv * 1.1) * breathe, (7.5 + lungLv * 1.1) * breathe, 0.08, 0, Math.PI * 2);
      ctx.ellipse(6.5, -8, (4.8 + lungLv * 1.1) * breathe, (7.5 + lungLv * 1.1) * breathe, -0.08, 0, Math.PI * 2);
      ctx.fill();

      drawGlowingDisc(ctx, 2, -7, (3.4 + lungLv * 0.75) * heartBeat, '#f43f5e', 9);
    }
    if (hoveredOrgan === 'lungs') drawOrganHoverHologram(0, -8, 18, '🫁 心肺精力+1阶');

    // Cranium & Glowing Neural Cortex (`senses`)
    ctx.fillStyle = isXray ? '#0f172a' : '#e2e8f0';
    ctx.strokeStyle = senseLv >= 2 ? '#22d3ee' : primaryCol;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.arc(0, -33, 11.5 + senseLv * 0.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Bioluminescent Brain Synapse Web inside Head
    drawGlowingDisc(ctx, 3.5, -34, 2.6 + senseLv * 0.4, senseLv >= 2 ? '#22d3ee' : '#fbbf24', 6 + senseLv * 2);
    if (hoveredOrgan === 'senses') drawOrganHoverHologram(0, -33, 18, '👁️ 学术眼界+1阶');

    // Right Arm & Evolved Implement / Torch / Star-Lance (`jaws`)
    ctx.strokeStyle = isXray ? '#38bdf8' : '#cbd5e1';
    ctx.lineWidth = 5.5;
    ctx.beginPath();
    ctx.moveTo(13, -14);
    ctx.lineTo(25, -6 + Math.sin(t * 5) * 3);
    ctx.stroke();

    const wx = 25, wy = -6 + Math.sin(t * 5) * 3;
    ctx.strokeStyle = jawLv >= 2 ? '#fbbf24' : '#a8a29e';
    ctx.lineWidth = 3.2;
    ctx.beginPath();
    ctx.moveTo(wx - 4, wy + 25);
    ctx.lineTo(wx + 9, wy - 29 - jawLv * 6);
    ctx.stroke();

    ctx.fillStyle = jawLv >= 3 ? '#f43f5e' : jawLv >= 2 ? '#22d3ee' : '#f97316';
    drawGlowingDisc(ctx, wx + 9, wy - 31 - jawLv * 6, 4, ctx.fillStyle, 10);
    ctx.beginPath();
    ctx.moveTo(wx + 9, wy - 40 - jawLv * 6);
    ctx.lineTo(wx + 3, wy - 25 - jawLv * 6);
    ctx.lineTo(wx + 15, wy - 25 - jawLv * 6);
    ctx.closePath();
    ctx.fill();
    if (hoveredOrgan === 'jaws') drawOrganHoverHologram(wx + 8, wy - 28, 19, '🦷 专业技能+1阶');

    ctx.restore();
    return;
  }

  // ==================== BODY PLAN B: PRIMORDIAL CELL & MEDUSA (LUCA / 蓝细菌 / 狄更逊水母) ====================
  if (plan === 'primordial_cell') {
    const cellR = (26 + armorLv * 4 + lungLv * 3) * breathe;
    // Cilia / Flagella propulsion filaments around perimeter (`locomotion`)
    const ciliaCount = 14 + locoLv * 6;
    ctx.strokeStyle = 'rgba(34, 211, 238, 0.62)';
    ctx.lineWidth = 1.6;
    for (let i = 0; i < ciliaCount; i++) {
      const ang = (i / ciliaCount) * Math.PI * 2 + t * 0.6;
      const wave = Math.sin(t * 7 + i * 0.9) * (5 + locoLv * 3);
      const x1 = Math.cos(ang) * (cellR - 2);
      const y1 = Math.sin(ang) * (cellR * 0.78 - 2);
      const x2 = Math.cos(ang) * (cellR + 10 + locoLv * 5) - 6;
      const y2 = Math.sin(ang) * (cellR * 0.78 + 8 + locoLv * 3) + wave * 0.4;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo((x1 + x2) * 0.5, (y1 + y2) * 0.5 + wave * 0.3, x2, y2);
      ctx.stroke();
    }
    if (hoveredOrgan === 'locomotion') drawOrganHoverHologram(-cellR, 0, 18, '🦵 鞭毛推进+1阶');

    // Translucent Bioluminescent Jelly Soma
    const cellGrad = ctx.createRadialGradient(-4, -4, 3, 0, 0, cellR);
    cellGrad.addColorStop(0, 'rgba(52, 211, 153, 0.85)');
    cellGrad.addColorStop(0.65, primaryCol);
    cellGrad.addColorStop(1, 'rgba(6, 182, 212, 0.25)');
    ctx.fillStyle = cellGrad;
    ctx.strokeStyle = armorLv >= 2 ? '#fbbf24' : '#22d3ee';
    ctx.lineWidth = 2.2 + armorLv * 1.2;
    ctx.beginPath();
    for (let i = 0; i <= 36; i++) {
      const a = (i / 36) * Math.PI * 2;
      const wobble = Math.sin(a * 5 + t * 4) * 2.4;
      const rx = (cellR + wobble) * Math.cos(a);
      const ry = (cellR * 0.78 + wobble) * Math.sin(a);
      if (i === 0) ctx.moveTo(rx, ry);
      else ctx.lineTo(rx, ry);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    if (hoveredOrgan === 'armor') drawOrganHoverHologram(0, -cellR * 0.75, 18, '🛡️ 细胞壁膜+1阶');

    // Internal Nucleoid DNA Helix & Beating Metabolic Core (`lungs`)
    drawGlowingDisc(ctx, -4, 0, (5.5 + lungLv * 1.5) * heartBeat, '#f43f5e', 9);
    if (hoveredOrgan === 'lungs') drawOrganHoverHologram(-4, 0, 16, '🫁 代谢核心+1阶');

    // Phagocytosis Oral Tentacles (`jaws`) & Photoreceptor Eyespot (`senses`)
    const hx = cellR * 0.78;
    for (let j = -1; j <= 1; j++) {
      ctx.strokeStyle = jawLv >= 2 ? '#fbbf24' : '#34d399';
      ctx.lineWidth = 2.5 + jawLv * 0.7;
      ctx.beginPath();
      ctx.moveTo(hx - 2, j * 6);
      ctx.quadraticCurveTo(hx + 10 + jawLv * 5, j * 10 + Math.sin(t * 6 + j) * 5, hx + 18 + jawLv * 7, j * 4);
      ctx.stroke();
    }
    if (hoveredOrgan === 'jaws') drawOrganHoverHologram(hx + 10, 0, 18, '🦷 吞噬触须+1阶');

    ctx.fillStyle = '#fde047';
    ctx.beginPath();
    ctx.arc(hx - 4, -5, 3.8 + senseLv * 1.1, 0, Math.PI * 2);
    ctx.fill();
    if (hoveredOrgan === 'senses') drawOrganHoverHologram(hx - 4, -5, 15, '👁️ 感光眼点+1阶');
    if (hoveredOrgan === 'crest') drawOrganHoverHologram(0, -cellR, 16, '🌺 荧光冠冕+1阶');

    ctx.restore();
    return;
  }

  // ==================== BODY PLAN C: MULTI-VERTEBRA ARTICULATED SPORE CREATURE (ARTHROPOD / AQUATIC / AMPHIBIAN / DINOSAUR / AVIAN) ====================
  // Compute 9 articulated spine vertebrae from tail (-58) to neck (+34) with S-wave locomotion
  const spineNodes = [];
  const segCount = 9;
  const tailStretch = 38 + locoLv * 11;
  for (let i = 0; i < segCount; i++) {
    const u = i / (segCount - 1); // 0 = tail tip, 1 = neck/head base
    const sx = -tailStretch + u * (tailStretch + 34);
    const phase = t * 5.2 - u * 3.4;
    const amp = (1 - u * 0.65) * (7 + locoLv * 2.2);
    const sy = Math.sin(phase) * amp;
    // Body thickness profile along the spine depending on species class
    let radius;
    if (plan === 'paleo_arthropod') {
      radius = Math.sin(u * Math.PI) * (17 + armorLv * 2.2) + 4;
    } else if (plan === 'predator_biped' || plan === 'titan_quadruped') {
      radius = u < 0.35 ? u * 42 + 3 : Math.sin(u * Math.PI * 0.92) * (21 + armorLv * 2 + lungLv * 1.5) + 5;
    } else {
      radius = Math.pow(Math.sin(u * Math.PI * 0.95), 0.85) * (20 + armorLv * 2 + lungLv * 1.5) + 3.5;
    }
    spineNodes.push({ x: sx, y: sy, r: radius * breathe, u });
  }

  const headNode = spineNodes[spineNodes.length - 1];
  const tailNode = spineNodes[0];

  // 2. Caudal Tail Fin / Fluke / Whip Tail (`locomotion`)
  ctx.save();
  if (plan === 'apex_aquatic' || plan === 'paleo_arthropod' || plan === 'amphibious_pioneer') {
    const flukeGrad = ctx.createLinearGradient(tailNode.x, tailNode.y, tailNode.x - 22 - locoLv * 5, tailNode.y);
    flukeGrad.addColorStop(0, primaryCol);
    flukeGrad.addColorStop(1, 'rgba(34, 211, 238, 0.78)');
    ctx.fillStyle = flukeGrad;
    ctx.beginPath();
    ctx.moveTo(tailNode.x + 4, tailNode.y);
    ctx.quadraticCurveTo(tailNode.x - 10, tailNode.y - 16 - locoLv * 4, tailNode.x - 22 - locoLv * 6, tailNode.y - 18 - locoLv * 4);
    ctx.quadraticCurveTo(tailNode.x - 10 - locoLv * 2, tailNode.y, tailNode.x - 22 - locoLv * 6, tailNode.y + 18 + locoLv * 4);
    ctx.quadraticCurveTo(tailNode.x - 10, tailNode.y + 16 + locoLv * 4, tailNode.x + 4, tailNode.y);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // 3. Sweeping Multi-Feather / Membranous Wings (`winged_flyer` or `locoLv >= 2`)
  if (plan === 'winged_flyer' || locoLv >= 2) {
    const flapY = Math.sin(t * 6.8) * (18 + locoLv * 4);
    const wingSpan = 34 + locoLv * 12;
    ctx.save();
    // Draw 5 individual layered flight feathers / membrane ribs
    for (let f = 0; f < 5; f++) {
      const frac = f / 4;
      const fx = -8 + frac * 24;
      const fy = -22 - wingSpan * (1 - frac * 0.35) + flapY * (1 - frac * 0.25);
      ctx.strokeStyle = f === 0 ? '#fbbf24' : '#38bdf8';
      ctx.fillStyle = f % 2 === 0 ? 'rgba(56, 189, 248, 0.52)' : 'rgba(16, 185, 129, 0.45)';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(0, -6);
      ctx.quadraticCurveTo(fx - 12, fy * 0.6, fx, fy);
      ctx.quadraticCurveTo(fx + 8, fy * 0.55, 8, -4);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  }

  // 4. Biomechanical Limbs / Arthropod Swimming Lobes / Raptor Hindlegs (`locomotion`)
  ctx.save();
  if (plan === 'paleo_arthropod') {
    // Rhythmic swimming pleopods / arthropod legs along segments 2..7
    for (let i = 2; i < segCount - 1; i++) {
      const nd = spineNodes[i];
      const swing = Math.sin(t * 7.5 - i * 0.8) * (6 + locoLv * 2);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.moveTo(nd.x, nd.y + nd.r * 0.65);
      ctx.lineTo(nd.x - 4 + swing, nd.y + nd.r + 10 + locoLv * 2.5);
      ctx.stroke();
    }
  } else if (plan === 'apex_aquatic') {
    // Sleek Pectoral & Pelvic Hydrofoils
    const chest = spineNodes[6];
    const pelvic = spineNodes[3];
    const finFlap = Math.sin(t * 5.2) * 8;
    ctx.fillStyle = 'rgba(34, 211, 238, 0.72)';
    ctx.strokeStyle = primaryCol;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(chest.x + 4, chest.y + 6);
    ctx.quadraticCurveTo(chest.x - 8, chest.y + 28 + locoLv * 4 + finFlap, chest.x - 22, chest.y + 22 + finFlap);
    ctx.quadraticCurveTo(chest.x - 8, chest.y + 10, chest.x - 2, chest.y + 6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(pelvic.x, pelvic.y + 5);
    ctx.lineTo(pelvic.x - 10, pelvic.y + 16 + finFlap * 0.5);
    ctx.lineTo(pelvic.x - 4, pelvic.y + 5);
    ctx.closePath();
    ctx.fill();
  } else {
    // Articulated 3-segment Femur -> Tibia -> Talons limbs for Tetrapods / Dinosaurs / Flyers
    const hip = spineNodes[4];
    const shoulder = spineNodes[6];
    const stride = Math.sin(t * 4.8) * (7 + locoLv * 2);

    ctx.strokeStyle = isXray ? '#38bdf8' : primaryCol;
    ctx.lineWidth = 5.2 + locoLv * 1.1;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Hindleg (Femur + Tibia + 3 Claws)
    const kneeX = hip.x - 6 - stride * 0.5;
    const kneeY = hip.y + 19;
    const footX = hip.x - 2 - stride;
    const footY = hip.y + 34;
    ctx.beginPath();
    ctx.moveTo(hip.x, hip.y + 6);
    ctx.lineTo(kneeX, kneeY);
    ctx.lineTo(footX, footY);
    ctx.lineTo(footX + 7, footY + 2);
    ctx.stroke();

    // Foreleg or Raptor Grasping Claws
    const isBiped = (plan === 'predator_biped' || plan === 'winged_flyer');
    const elbowX = shoulder.x + 6 + stride * 0.4;
    const elbowY = shoulder.y + (isBiped ? 13 : 19);
    const handX = shoulder.x + 12 + stride * 0.8;
    const handY = shoulder.y + (isBiped ? 19 : 34);
    ctx.lineWidth = isBiped ? 3.6 + locoLv * 0.8 : 4.8 + locoLv * 1.0;
    ctx.beginPath();
    ctx.moveTo(shoulder.x + 2, shoulder.y + 5);
    ctx.lineTo(elbowX, elbowY);
    ctx.lineTo(handX, handY);
    ctx.stroke();

    if (isXray && !isMiniCompanion) {
      ctx.fillStyle = '#fde047';
      ctx.beginPath();
      ctx.arc(kneeX, kneeY, 2.6, 0, Math.PI * 2);
      ctx.arc(elbowX, elbowY, 2.3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  if (hoveredOrgan === 'locomotion') drawOrganHoverHologram(-8, 22, 22, '🦵 肢翼推进+1阶');
  ctx.restore();

  // 5. Dorsal Calcified Osteoderm Armor Plates / Stegosaur Spines / Shark Dorsal Fin (`armor`)
  if (armorLv >= 1 || plan === 'apex_aquatic') {
    ctx.save();
    for (let i = 1; i < segCount - 1; i++) {
      const nd = spineNodes[i];
      const plateH = (i === 5 && plan === 'apex_aquatic')
        ? 16 + armorLv * 5
        : (5 + armorLv * 4.5) * Math.sin((i / segCount) * Math.PI);
      if (plateH < 3) continue;
      ctx.fillStyle = armorLv >= 3 ? '#fbbf24' : armorLv === 2 ? '#38bdf8' : '#34d399';
      ctx.strokeStyle = '#090d16';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(nd.x - 5, nd.y - nd.r * 0.78);
      ctx.lineTo(nd.x - 1, nd.y - nd.r - plateH);
      ctx.lineTo(nd.x + 5, nd.y - nd.r * 0.78);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  }
  if (hoveredOrgan === 'armor') drawOrganHoverHologram(-4, -22, 22, '🛡️ 背甲骨板+1阶');

  // 6. Multi-Segment Articulated Organic Body Envelope (Smooth Bezier Hull or Chitin Exoskeleton Segments)
  ctx.save();
  if (plan === 'paleo_arthropod') {
    // Overlapping Chitinous Arthropod Segments
    for (let i = 0; i < segCount; i++) {
      const nd = spineNodes[i];
      const segGrad = ctx.createRadialGradient(nd.x, nd.y - 3, 2, nd.x, nd.y, nd.r * 1.2);
      segGrad.addColorStop(0, isXray ? 'rgba(15, 23, 42, 0.86)' : '#34d399');
      segGrad.addColorStop(0.7, primaryCol);
      segGrad.addColorStop(1, '#064e3b');
      ctx.fillStyle = segGrad;
      ctx.strokeStyle = armorLv >= 2 ? '#fbbf24' : '#22d3ee';
      ctx.lineWidth = 1.6 + armorLv * 0.5;
      ctx.beginPath();
      ctx.ellipse(nd.x, nd.y, nd.r * 0.85, nd.r, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  } else {
    // Smooth Continuous Spore Organic Body Envelope across all 9 spine nodes
    const hullGrad = ctx.createRadialGradient(0, -4, 5, 0, 0, 48);
    if (isXray && !isMiniCompanion) {
      hullGrad.addColorStop(0, 'rgba(15, 23, 42, 0.90)');
      hullGrad.addColorStop(0.72, 'rgba(8, 47, 73, 0.80)');
      hullGrad.addColorStop(1, primaryCol);
    } else {
      hullGrad.addColorStop(0, '#34d399');
      hullGrad.addColorStop(0.62, primaryCol);
      hullGrad.addColorStop(1, '#064e3b');
    }
    ctx.fillStyle = hullGrad;
    ctx.strokeStyle = armorLv >= 2 ? '#fbbf24' : primaryCol;
    ctx.lineWidth = 2.2 + armorLv * 0.9;

    ctx.beginPath();
    // Upper contour from tail to head
    ctx.moveTo(tailNode.x, tailNode.y);
    for (let i = 0; i < segCount; i++) {
      const nd = spineNodes[i];
      ctx.lineTo(nd.x, nd.y - nd.r);
    }
    // Round snout bridge
    ctx.lineTo(headNode.x + headNode.r * 0.8, headNode.y);
    // Lower contour from head back to tail
    for (let i = segCount - 1; i >= 0; i--) {
      const nd = spineNodes[i];
      ctx.lineTo(nd.x, nd.y + nd.r);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();

  // 7. X-Ray Internal Anatomy: Articulated Vertebral Column, Ribcage, Dual Alveolar Lungs & Beating 4-Chambered Heart!
  const chestNode = spineNodes[5];
  if (isXray && !isMiniCompanion) {
    ctx.save();
    // Vertebral Column & Individual Vertebra Nodes
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.55)';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    for (let i = 0; i < segCount; i++) {
      const nd = spineNodes[i];
      if (i === 0) ctx.moveTo(nd.x, nd.y);
      else ctx.lineTo(nd.x, nd.y);
    }
    ctx.stroke();

    // Ribs on segments 3..7
    for (let i = 3; i <= 7; i++) {
      const nd = spineNodes[i];
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.42)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(nd.x, nd.y - nd.r * 0.45);
      ctx.quadraticCurveTo(nd.x + 3, nd.y, nd.x - 2, nd.y + nd.r * 0.68);
      ctx.stroke();
    }

    // Branching Golden-Crimson Arterial Network
    ctx.strokeStyle = lungLv >= 2 ? 'rgba(251, 191, 36, 0.72)' : 'rgba(244, 63, 94, 0.52)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(chestNode.x + 4, chestNode.y);
    ctx.quadraticCurveTo(chestNode.x - 12, chestNode.y - 7, spineNodes[2].x, spineNodes[2].y);
    ctx.moveTo(chestNode.x + 4, chestNode.y);
    ctx.quadraticCurveTo(chestNode.x + 14, chestNode.y - 4, headNode.x, headNode.y);
    ctx.stroke();

    // Dual Bioluminescent Alveolar Lung Sacs (`lungs`)
    const lungRX = (7.5 + lungLv * 2.8) * breathe;
    const lungRY = (5.2 + lungLv * 2.0) * breathe;
    ctx.fillStyle = `rgba(34, 211, 238, ${0.36 + lungLv * 0.16})`;
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.ellipse(chestNode.x - 5, chestNode.y - 1, lungRX, lungRY, 0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Beating 4-Chambered Crimson Heart
    const heartR = (4.5 + lungLv * 1.2) * heartBeat;
    drawGlowingDisc(ctx, chestNode.x + 6, chestNode.y + 1, heartR, '#f43f5e', 9 + lungLv * 3);
    ctx.restore();
  }
  if (hoveredOrgan === 'lungs') drawOrganHoverHologram(chestNode.x, chestNode.y, 20, '🫁 四腔心肺+1阶');

  // 8. Cranium, Royal Bioluminescent Crest (`crest`), Crystalline Compound Eye (`senses`), & Snapping Jaws/Mandibles (`jaws`)
  const hx = headNode.x + 6;
  const hy = headNode.y - 2 + swimWave * 1.2;
  const headR = 13.5 + jawLv * 2.4;

  // Royal Bioluminescent Plume / Acoustic Crest (`crest` Lv.1 -> Lv.3)
  if (crestLv >= 1) {
    const crestGrad = ctx.createLinearGradient(hx - 6, hy - 8, hx - 22, hy - 30 - crestLv * 7);
    crestGrad.addColorStop(0, '#ec4899');
    crestGrad.addColorStop(0.5, '#a855f7');
    crestGrad.addColorStop(1, '#fde047');
    ctx.fillStyle = crestGrad;
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(hx - 6, hy - 8);
    ctx.quadraticCurveTo(hx - 22, hy - 28 - crestLv * 7, hx + 4, hy - 24 - crestLv * 6);
    ctx.quadraticCurveTo(hx + 10, hy - 12, hx + 2, hy - 8);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  if (hoveredOrgan === 'crest') drawOrganHoverHologram(hx - 4, hy - 22, 18, '🌺 求偶华冠+1阶');

  // Sculpted Head Capsule
  ctx.fillStyle = primaryCol;
  ctx.strokeStyle = armorLv >= 2 ? '#fbbf24' : '#090d16';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.ellipse(hx, hy, headR, headR * 0.84, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Snapping Serrated Jaws / Raptorial Appendages (`jaws` Lv.0 -> Lv.3)
  const biteAngle = Math.abs(Math.sin(t * 5.8)) * (0.20 + jawLv * 0.09);
  const jawLen = 13 + jawLv * 8.2;

  ctx.save();
  ctx.translate(hx + headR * 0.55, hy + 2);
  // Upper Jaw / Maxilla
  ctx.save();
  ctx.rotate(-biteAngle);
  ctx.fillStyle = jawLv >= 2 ? '#f8fafc' : primaryCol;
  ctx.strokeStyle = '#090d16';
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(0, -5.5);
  ctx.quadraticCurveTo(jawLen * 0.72, -8, jawLen, -1);
  ctx.lineTo(0, 1);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  for (let f = 0; f < 1 + jawLv; f++) {
    const fx = 4 + f * 4.8;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(fx, 0);
    ctx.lineTo(fx + 2.0, 5.0 + jawLv * 1.4);
    ctx.lineTo(fx + 3.8, 0);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // Lower Jaw / Mandible
  ctx.save();
  ctx.rotate(biteAngle);
  ctx.fillStyle = jawLv >= 2 ? '#cbd5e1' : primaryCol;
  ctx.strokeStyle = '#090d16';
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(0, 1);
  ctx.lineTo(jawLen * 0.94, 2);
  ctx.quadraticCurveTo(jawLen * 0.6, 8.5, 0, 6.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  for (let f = 0; f < 1 + jawLv; f++) {
    const fx = 3.5 + f * 4.8;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(fx, 1);
    ctx.lineTo(fx + 2.0, -4.0 - jawLv * 1.2);
    ctx.lineTo(fx + 3.8, 1);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
  ctx.restore();
  if (hoveredOrgan === 'jaws') drawOrganHoverHologram(hx + headR + 8, hy + 2, 20, '🦷 撕裂利颚+1阶');

  // Crystalline Compound Eye / Binocular Predator Eye (`senses` Lv.0 -> Lv.3)
  const eyeX = hx + 4.5;
  const eyeY = hy - 3.2;
  const eyeR = 3.8 + senseLv * 1.25;
  drawGlowingDisc(ctx, eyeX, eyeY, eyeR, senseLv >= 2 ? '#22d3ee' : '#fde047', 6 + senseLv * 2);

  // Slit Pupil & Specular Highlight
  ctx.fillStyle = '#020617';
  ctx.beginPath();
  ctx.ellipse(eyeX + 0.8, eyeY, eyeR * 0.28, eyeR * 0.65, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(eyeX - 0.9, eyeY - 1.1, eyeR * 0.26, 0, Math.PI * 2);
  ctx.fill();

  // Sensory Sonar Arcs in front of head if senseLv >= 1
  if (senseLv >= 1 && !isMiniCompanion) {
    const waveR = 16 + ((t * 30) % 28);
    ctx.strokeStyle = `rgba(34, 211, 238, ${Math.max(0, 0.72 - waveR / 46)})`;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.arc(eyeX + 9, eyeY, waveR, -0.58, 0.58);
    ctx.stroke();
  }
  if (hoveredOrgan === 'senses') drawOrganHoverHologram(eyeX, eyeY, 17, '👁️ 复眼声呐+1阶');

  ctx.restore();
}

// ==================== 12. REAL-TIME DARK X-RAY SPORE ANATOMICAL BLUEPRINT SVG & VECTOR STORYBOARD ====================
function renderAnatomyBlueprintPanel(life) {
  if (!life) return;
  const organs = life.organLevels;
  const sp = life.species;
  const activeMetaList = getActiveOrganMetaList(sp);
  const totalLv = Object.values(organs).reduce((a, b) => a + b, 0) + 1;
  document.getElementById('totalOrganLevelBadge').textContent = `进化总阶 Lv.${totalLv}`;

  const hovKey = state.hoveredOrganKey;
  const svg = document.getElementById('anatomyBlueprintSvg');
  const getCol = (key, lv) => {
    if (hovKey === key) return '#facc15';
    return lv >= 3 ? '#fbbf24' : lv === 2 ? '#22d3ee' : lv === 1 ? '#34d399' : '#475569';
  };
  const getGlow = (key, lv) => (hovKey === key || lv >= 2) ? 'filter="drop-shadow(0 0 6px rgba(250,204,21,0.9))"' : '';

  svg.innerHTML = `
    <defs>
      <radialGradient id="bpBioGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(16, 185, 129, 0.32)" />
        <stop offset="60%" stop-color="rgba(6, 182, 212, 0.12)" />
        <stop offset="100%" stop-color="rgba(0, 0, 0, 0)" />
      </radialGradient>
    </defs>
    <rect width="320" height="145" fill="#040914" rx="10" stroke="#1e293b" stroke-width="1.5"/>
    <!-- Subtle X-Ray Biotech Grid -->
    <line x1="0" y1="36" x2="320" y2="36" stroke="#0f172a" stroke-width="1"/>
    <line x1="0" y1="72" x2="320" y2="72" stroke="#0f172a" stroke-width="1"/>
    <line x1="0" y1="108" x2="320" y2="108" stroke="#0f172a" stroke-width="1"/>
    <line x1="160" y1="0" x2="160" y2="145" stroke="#0f172a" stroke-width="1" stroke-dasharray="3,3"/>

    <!-- Center Bioluminescent Spore Organism Silhouette -->
    <circle cx="160" cy="74" r="56" fill="url(#bpBioGlow)" />
    <!-- Multi-Vertebra Spine & Ribs -->
    <path d="M 96 76 Q 132 64 194 72" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="4,2"/>
    <!-- Main Soma Capsule -->
    <ellipse cx="154" cy="74" rx="39" ry="22" fill="rgba(15, 23, 42, 0.88)" stroke="${getCol('armor', organs.armor)}" stroke-width="${2.0 + organs.armor * 0.7}"/>
    <!-- Head & Jaws -->
    <circle cx="196" cy="70" r="13.5" fill="rgba(15, 23, 42, 0.92)" stroke="${getCol('jaws', organs.jaws)}" stroke-width="2.2"/>
    <path d="M 205 64 L 222 68 L 205 72 Z" fill="${getCol('jaws', organs.jaws)}"/>
    <path d="M 205 72 L 220 76 L 205 78 Z" fill="${getCol('jaws', organs.jaws)}"/>

    <!-- 6 Glowing Anatomical Organ Nodes & Callout Lines -->
    <!-- 1. Jaws (Right-Bottom) -->
    <line x1="212" y1="73" x2="240" y2="112" stroke="${getCol('jaws', organs.jaws)}" stroke-width="${hovKey === 'jaws' ? 2.4 : 1.3}"/>
    <circle cx="212" cy="73" r="${hovKey === 'jaws' ? 6 : 4}" fill="${getCol('jaws', organs.jaws)}" ${getGlow('jaws', organs.jaws)}/>
    <text x="243" y="116" fill="${getCol('jaws', organs.jaws)}" font-size="9.5" font-family="monospace" font-weight="bold">🦷颚 Lv.${organs.jaws}${hovKey === 'jaws' ? '➔+1' : ''}</text>

    <!-- 2. Senses / Eye (Right-Top) -->
    <line x1="200" y1="65" x2="240" y2="30" stroke="${getCol('senses', organs.senses)}" stroke-width="${hovKey === 'senses' ? 2.4 : 1.3}"/>
    <circle cx="200" cy="65" r="${hovKey === 'senses' ? 6 : 4}" fill="${getCol('senses', organs.senses)}" ${getGlow('senses', organs.senses)}/>
    <text x="243" y="33" fill="${getCol('senses', organs.senses)}" font-size="9.5" font-family="monospace" font-weight="bold">👁️眼 Lv.${organs.senses}${hovKey === 'senses' ? '➔+1' : ''}</text>

    <!-- 3. Crest (Top-Center-Right) -->
    <line x1="188" y1="56" x2="240" y2="72" stroke="${getCol('crest', organs.crest)}" stroke-width="${hovKey === 'crest' ? 2.4 : 1.3}"/>
    <circle cx="188" cy="56" r="${hovKey === 'crest' ? 6 : 4}" fill="${getCol('crest', organs.crest)}" ${getGlow('crest', organs.crest)}/>
    <text x="243" y="75" fill="${getCol('crest', organs.crest)}" font-size="9.5" font-family="monospace" font-weight="bold">🌺冠 Lv.${organs.crest}${hovKey === 'crest' ? '➔+1' : ''}</text>

    <!-- 4. Armor / Dorsal Spine (Left-Top) -->
    <line x1="148" y1="53" x2="78" y2="30" stroke="${getCol('armor', organs.armor)}" stroke-width="${hovKey === 'armor' ? 2.4 : 1.3}"/>
    <circle cx="148" cy="53" r="${hovKey === 'armor' ? 6 : 4}" fill="${getCol('armor', organs.armor)}" ${getGlow('armor', organs.armor)}/>
    <text x="10" y="33" fill="${getCol('armor', organs.armor)}" font-size="9.5" font-family="monospace" font-weight="bold">🛡️背甲 Lv.${organs.armor}${hovKey === 'armor' ? '➔+1' : ''}</text>

    <!-- 5. Lungs & Heart (Center Chest -> Left-Mid) -->
    <line x1="162" y1="74" x2="78" y2="72" stroke="${getCol('lungs', organs.lungs)}" stroke-width="${hovKey === 'lungs' ? 2.4 : 1.3}"/>
    <circle cx="162" cy="74" r="${hovKey === 'lungs' ? 6.5 : 5}" fill="#f43f5e" ${getGlow('lungs', organs.lungs)}/>
    <text x="10" y="75" fill="${getCol('lungs', organs.lungs)}" font-size="9.5" font-family="monospace" font-weight="bold">🫁心肺 Lv.${organs.lungs}${hovKey === 'lungs' ? '➔+1' : ''}</text>

    <!-- 6. Locomotion / Wings & Limbs (Left-Bottom) -->
    <line x1="135" y1="90" x2="78" y2="112" stroke="${getCol('locomotion', organs.locomotion)}" stroke-width="${hovKey === 'locomotion' ? 2.4 : 1.3}"/>
    <circle cx="135" cy="90" r="${hovKey === 'locomotion' ? 6 : 4}" fill="${getCol('locomotion', organs.locomotion)}" ${getGlow('locomotion', organs.locomotion)}/>
    <text x="10" y="116" fill="${getCol('locomotion', organs.locomotion)}" font-size="9.5" font-family="monospace" font-weight="bold">🦵肢翼 Lv.${organs.locomotion}${hovKey === 'locomotion' ? '➔+1' : ''}</text>
  `;

  const gridEl = document.getElementById('organNodesGrid');
  gridEl.innerHTML = activeMetaList.map(meta => {
    const lv = organs[meta.key] || 0;
    const isHovered = hovKey === meta.key;
    const stageName = meta.stages[Math.min(3, isHovered ? lv + 1 : lv)];
    const isJustUpgraded = state.lastUpgradedOrgan === meta.key;
    const borderCls = isHovered
      ? 'border-amber-400 bg-amber-950/60 shadow-lg shadow-amber-500/20 scale-[1.02]'
      : isJustUpgraded
      ? 'border-emerald-400 bg-emerald-950/50 organ-flash'
      : lv >= 2 ? 'border-cyan-500/40 bg-slate-900/90' : lv === 1 ? 'border-emerald-500/30 bg-slate-900/80' : 'border-slate-800 bg-slate-950/60';
    const pct = Math.min(100, Math.round(((isHovered ? lv + 1 : lv) / 3) * 100));
    return `
      <div class="p-2 rounded-xl border ${borderCls} space-y-1 transition duration-200" title="${meta.visualDesc}">
        <div class="flex items-center justify-between">
          <span class="font-bold text-white truncate">${meta.name}</span>
          <span class="font-mono text-[10px] ${isHovered ? 'text-amber-300 font-extrabold' : lv > 0 ? 'text-emerald-300 font-bold' : 'text-slate-500'}">
            ${isHovered ? `Lv.${lv}➔Lv.${Math.min(3, lv + 1)}` : `Lv.${lv}/3`}
          </span>
        </div>
        <div class="h-1.5 bg-slate-950 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 transition-all duration-300" style="width: ${Math.max(8, pct)}%"></div>
        </div>
        <div class="text-[10px] ${isHovered ? 'text-amber-200 font-semibold' : 'text-slate-300'} truncate">${stageName}</div>
      </div>
    `;
  }).join('');
}

// Baskerville Chiaroscuro Dramatic Comic Storyboard SVG inside #decisionStoryboardSvg
function renderDecisionStoryboardSVG(sceneType, sp, titleText) {
  const svg = document.getElementById('decisionStoryboardSvg');
  if (!svg) return;
  const cap = document.getElementById('storyboardCaptionOverlay');
  if (cap) cap.textContent = translateText(titleText);

  const palettes = {
    ambush: ['#050b16', '#1e1b4b', '#f43f5e', '⚔️ 掠食伏击分镜'],
    mutation: ['#04101e', '#083344', '#22d3ee', '🧬 基因突变分镜'],
    courtship: ['#160722', '#3b0764', '#e879f9', '🌺 繁衍共鸣分镜'],
    cataclysm: ['#220606', '#450a0a', '#f59e0b', '☄️ 天地灾变分镜'],
    migration: ['#041916', '#064e3b', '#34d399', '🧭 跨洲远征分镜'],
    duel: ['#160918', '#31102f', '#fb7185', '⚡ 宿命对决分镜']
  };
  const [bg1, bg2, accent, tagLabel] = palettes[sceneType] || palettes.duel;

  svg.innerHTML = `
    <defs>
      <linearGradient id="sbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg1}"/>
        <stop offset="100%" stop-color="${bg2}"/>
      </linearGradient>
      <radialGradient id="sbSpot" cx="25%" cy="52%" r="48%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.32"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="640" height="135" fill="url(#sbGrad)"/>
    <rect width="640" height="135" fill="url(#sbSpot)"/>
    <!-- Baskerville Gothic Diagonal Chiaroscuro Rays -->
    <polygon points="80,0 180,0 260,135 120,135" fill="${accent}" opacity="0.07"/>
    <polygon points="380,0 470,0 540,135 420,135" fill="#38bdf8" opacity="0.06"/>
    <path d="M 0 104 Q 160 86 320 100 T 640 94 L 640 135 L 0 135 Z" fill="rgba(2, 6, 23, 0.80)"/>

    <!-- Left Protagonist Sacred Frame -->
    <circle cx="155" cy="68" r="38" fill="rgba(2, 6, 23, 0.78)" stroke="${accent}" stroke-width="2"/>
    <circle cx="155" cy="68" r="46" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="5,4" opacity="0.55"/>
    <text x="155" y="79" font-size="34" text-anchor="middle">${sp.emoji}</text>

    <!-- Center Double-Helix Fate Clash Conduit -->
    <path d="M 215 68 Q 320 34 425 68" fill="none" stroke="${accent}" stroke-width="2.4" stroke-dasharray="7,4"/>
    <path d="M 215 68 Q 320 102 425 68" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="7,4"/>
    <circle cx="320" cy="68" r="16" fill="#090d16" stroke="#fbbf24" stroke-width="1.8"/>
    <text x="320" y="73" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">VS</text>

    <!-- Right Encounter Boss/Target Sacred Frame -->
    <circle cx="485" cy="68" r="38" fill="rgba(2, 6, 23, 0.78)" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="485" cy="68" r="46" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="5,4" opacity="0.5"/>
    <text x="485" y="79" font-size="32" text-anchor="middle">${state.stageEnemyEmoji || '🦈'}</text>

    <!-- Top Ornate Title Banner -->
    <rect x="175" y="6" width="290" height="20" rx="6" fill="rgba(2, 6, 23, 0.85)" stroke="rgba(251, 191, 36, 0.45)" stroke-width="1"/>
    <text x="320" y="20" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">${escapeHtml(translateText(tagLabel))}</text>
  `;
}

// ==================== 13. LIVE 60FPS SPORE EVOLUTION & BASKERVILLE CHIAROSCURO STAGE LOOP ====================
function initStageParticles() {
  state.stageParticles = [];
  for (let i = 0; i < 48; i++) {
    state.stageParticles.push({
      x: Math.random() * 900,
      y: Math.random() * 360,
      r: 1.4 + Math.random() * 3.2,
      vx: -0.35 - Math.random() * 0.65,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: 0.22 + Math.random() * 0.55,
      hue: Math.random() > 0.5 ? '#34d399' : '#38bdf8'
    });
  }
  state.dnaOrbs = state.dnaOrbs || [];
  state.slashArcs = state.slashArcs || [];
}

function addStageFloatingText(text, color = '#10b981', x = null, y = null) {
  const px = x !== null ? x : 270 + (Math.random() - 0.5) * 90;
  const py = y !== null ? y : 135 + (Math.random() - 0.5) * 40;
  state.stageFloatingTexts.push({ text, color, x: px, y: py, alpha: 1.0, vy: -1.15 });
}

function addStageSonarRipple(x = 265, y = 190, color = 'rgba(52, 211, 153, 0.82)') {
  state.stageRipples.push({ x, y, r: 14, maxR: 260, alpha: 0.92, color });
}

// Spawns spiraling bioluminescent DNA / Bio-ATP orbs flying from the encounter (right) into your organism (left)!
function spawnEvolutionDnaStream(fromX, fromY, toX, toY, color = '#34d399', count = 16) {
  state.dnaOrbs = state.dnaOrbs || [];
  for (let i = 0; i < count; i++) {
    state.dnaOrbs.push({
      sx: fromX + (Math.random() - 0.5) * 50,
      sy: fromY + (Math.random() - 0.5) * 50,
      tx: toX,
      ty: toY,
      cx: (fromX + toX) * 0.5 + (Math.random() - 0.5) * 90,
      cy: (fromY + toY) * 0.5 + (Math.random() - 0.5) * 130,
      progress: 0,
      speed: 0.022 + Math.random() * 0.02,
      r: 3 + Math.random() * 3.5,
      color: i % 2 === 0 ? color : '#facc15'
    });
  }
}

// Spawns dramatic claw/jaw slash arcs or resonance rings at the clash point
function spawnStageClashSlash(x, y, color = '#f43f5e') {
  state.slashArcs = state.slashArcs || [];
  for (let i = 0; i < 3; i++) {
    state.slashArcs.push({
      x: x + (i - 1) * 14,
      y: y + (i - 1) * 8,
      angle: -0.65 + i * 0.35,
      alpha: 1.0,
      scale: 0.7 + i * 0.2,
      color
    });
  }
}

function triggerStageScreenShake() {
  const wrap = document.getElementById('gameStageWrapper');
  if (!wrap) return;
  wrap.classList.remove('animate-shake');
  void wrap.offsetWidth;
  wrap.classList.add('animate-shake');
}

function getDominantPathInfo(life) {
  if (!life) return { key: 'balanced', label: '🌱 初生孢子期', color: '#10b981' };
  const { tyrant, dynasty, pioneer } = life.pathScores;
  const maxVal = Math.max(tyrant, dynasty, pioneer);
  if (maxVal < 12) return { key: 'balanced', label: '🌿 均衡适应流', color: '#10b981' };
  if (tyrant >= dynasty && tyrant >= pioneer) {
    return { key: 'tyrant', label: tyrant >= 32 ? '👑 绝代掠食暴君' : '⚔️ 掠食霸主流', color: '#f43f5e' };
  }
  if (dynasty >= tyrant && dynasty >= pioneer) {
    return { key: 'dynasty', label: dynasty >= 32 ? '🌳 万代氏族始祖' : '🧬 群落繁衍流', color: '#a855f7' };
  }
  return { key: 'pioneer', label: pioneer >= 32 ? '🚀 跨纪元演化先驱' : '🌌 异端突变流', color: '#06b6d4' };
}

// Procedural Right-Side Encounter Renderer (Replaces static emoji with a menacing procedural rival organism / boss / vortex!)
function drawProceduralEncounterEntity(ctx, life, enemyX, enemyY, t) {
  const isCataclysm = state.stageWeatherMode === 'cataclysm' || life.currentTick === 16;
  const isMod = isModernHumanSpecies(life.species);
  const pulse = 1 + Math.sin(t * 4.5) * 0.06;

  ctx.save();
  ctx.translate(enemyX, enemyY);

  // Outer Menacing Threat Aura
  const auraCol = isCataclysm ? 'rgba(245, 158, 11, 0.28)' : 'rgba(244, 63, 94, 0.24)';
  const rad = ctx.createRadialGradient(0, 0, 6, 0, 0, 64);
  rad.addColorStop(0, auraCol);
  rad.addColorStop(0.65, 'rgba(15, 23, 42, 0.15)');
  rad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = rad;
  ctx.beginPath();
  ctx.arc(0, 0, 64, 0, Math.PI * 2);
  ctx.fill();

  // Rotating Tactical Lock-On Reticle
  ctx.save();
  ctx.rotate(-t * 0.7);
  ctx.strokeStyle = isCataclysm ? 'rgba(251, 191, 36, 0.65)' : 'rgba(244, 63, 94, 0.55)';
  ctx.lineWidth = 1.8;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.arc(0, 0, 44 * pulse, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  if (isCataclysm) {
    // Procedural Cataclysm Meteor / Magma Singularity Vortex
    for (let i = 0; i < 6; i++) {
      const ang = t * 2.4 + (i * Math.PI) / 3;
      ctx.strokeStyle = i % 2 === 0 ? '#f59e0b' : '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 26 + i * 3, ang, ang + 1.1);
      ctx.stroke();
    }
    const coreGrad = ctx.createRadialGradient(-4, -4, 2, 0, 0, 26);
    coreGrad.addColorStop(0, '#fef08a');
    coreGrad.addColorStop(0.55, '#f97316');
    coreGrad.addColorStop(1, '#7f1d1d');
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(0, 0, 24 * pulse, 0, Math.PI * 2);
    ctx.fill();
  } else if (isMod) {
    // Procedural Fate Monolith / Era Challenge Crest for Human Stages
    ctx.save();
    ctx.rotate(Math.sin(t * 2) * 0.08);
    const monoGrad = ctx.createLinearGradient(-22, -32, 22, 32);
    monoGrad.addColorStop(0, '#1e293b');
    monoGrad.addColorStop(0.5, '#0f172a');
    monoGrad.addColorStop(1, '#3b0764');
    ctx.fillStyle = monoGrad;
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.roundRect(-24, -30, 48, 60, 10);
    ctx.fill();
    ctx.stroke();

    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(state.stageEnemyEmoji || '⚡', 0, 0);
    ctx.restore();
  } else {
    // Procedural Rival Predator / Abyssal Leviathan Silhouette facing LEFT toward the player!
    ctx.save();
    ctx.scale(-0.88, 0.88); // Flipped horizontally so its jaws snap toward the left!
    const rivalOrgans = {
      jaws: Math.min(3, 1 + Math.floor(life.currentTick / 6)),
      armor: Math.min(3, Math.floor(life.currentTick / 5)),
      lungs: 1,
      senses: 2,
      locomotion: 1,
      crest: 1
    };
    drawArticulatedCreature(ctx, life.species, rivalOrgans, 1.0, '#f43f5e', t + 1.7, false, true);
    ctx.restore();
  }

  // Game-Style Encounter Threat / Intensity Gauge Bar above the right-side target
  const barW = 96;
  const threatPct = Math.min(100, 45 + life.currentTick * 2.8);
  ctx.fillStyle = 'rgba(2, 6, 23, 0.88)';
  ctx.strokeStyle = 'rgba(244, 63, 94, 0.5)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(-barW / 2, -58, barW, 8, 4);
  ctx.fill();
  ctx.stroke();

  const hpGrad = ctx.createLinearGradient(-barW / 2, 0, barW / 2, 0);
  hpGrad.addColorStop(0, '#f43f5e');
  hpGrad.addColorStop(1, '#f59e0b');
  ctx.fillStyle = hpGrad;
  ctx.beginPath();
  ctx.roundRect(-barW / 2 + 1, -57, (barW - 2) * (threatPct / 100), 6, 3);
  ctx.fill();

  // Label Pill underneath
  ctx.fillStyle = 'rgba(2, 6, 23, 0.90)';
  ctx.strokeStyle = isCataclysm ? '#f59e0b' : 'rgba(244, 63, 94, 0.65)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.roundRect(-72, 46, 144, 21, 7);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#fda4af';
  ctx.font = 'bold 10.5px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`${state.stageEnemyEmoji || '🦈'} ${translateText(state.stageEnemyLabel || '生态博弈宿主')}`, 0, 59.5, 172);

  ctx.restore();
}

function startStageAnimationLoop() {
  if (state.canvasAnimId) cancelAnimationFrame(state.canvasAnimId);
  if (!state.stageParticles.length) initStageParticles();

  const canvas = document.getElementById('paleoStageCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let nextFrame = 0;
  function renderFrame(ts) {
    const life = state.activeLife;
    if (!life || life.isDead || state.simSubview !== 'active' || state.currentView !== 'sim') {
      state.canvasAnimId = null;
      return;
    }
    if (!combatIsRunning() || ts < nextFrame - 1) {
      state.canvasAnimId = requestAnimationFrame(renderFrame);
      return;
    }
    nextFrame = Math.max(ts, nextFrame + 1000 / 60);

    const w = canvas.width;
    const h = canvas.height;
    const t = ts * 0.001;
    state.gameLoop.frame = ((state.gameLoop.frame || 0) + 1) % 13500;
    const sp = life.species;

    ctx.imageSmoothingEnabled = true;

    // 1. Deep-Time Baskerville & Spore Atmospheric Backdrop
    const isAquatic = /海|洋|水|溪|渊|礁|湖/.test(sp.habitat);
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    if (state.stageWeatherMode === 'cataclysm' || life.currentTick === 16) {
      bgGrad.addColorStop(0, '#2a0606');
      bgGrad.addColorStop(0.55, '#450a0a');
      bgGrad.addColorStop(1, '#090508');
    } else if (isAquatic) {
      bgGrad.addColorStop(0, '#02101f');
      bgGrad.addColorStop(0.55, '#06283d');
      bgGrad.addColorStop(1, '#020813');
    } else if (sp.tempC < 0) {
      bgGrad.addColorStop(0, '#061326');
      bgGrad.addColorStop(0.55, '#0f2942');
      bgGrad.addColorStop(1, '#050b14');
    } else {
      bgGrad.addColorStop(0, '#04141c');
      bgGrad.addColorStop(0.55, '#072a28');
      bgGrad.addColorStop(1, '#030911');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // 2. Volumetric Top Spotlight / God-Rays (Baskerville Chiaroscuro Lighting)
    const rayGrad = ctx.createRadialGradient(265, -25, 15, 265, 180, 355);
    rayGrad.addColorStop(0, state.stageWeatherMode === 'cataclysm' ? 'rgba(245, 158, 11, 0.26)' : 'rgba(52, 211, 153, 0.22)');
    rayGrad.addColorStop(0.6, 'rgba(6, 182, 212, 0.08)');
    rayGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = rayGrad;
    ctx.fillRect(0, 0, w, h);

    // 3. Parallax Prehistoric Horizon & Seabed / Terrain Silhouette
    ctx.fillStyle = 'rgba(2, 6, 23, 0.45)';
    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += 40) {
      const waveH = Math.sin(x * 0.009 + t * 0.3) * 22 + Math.cos(x * 0.02) * 12;
      ctx.lineTo(x, h - 78 + waveH);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'rgba(2, 6, 23, 0.72)';
    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += 45) {
      const waveH = Math.sin(x * 0.012 + t * 0.55) * 16 + Math.cos(x * 0.028) * 10;
      ctx.lineTo(x, h - 46 + waveH);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // 4. Drifting Bioluminescent Spore / Plankton Particles
    for (const p of state.stageParticles) {
      p.x += p.vx * (state.speedMultiplier * 0.6 + 0.4);
      p.y += p.vy + Math.sin(t * 2 + p.x * 0.02) * 0.2;
      if (p.x < -10) p.x = w + 10;
      if (p.y < 10) p.y = h - 20;
      if (p.y > h - 10) p.y = 20;

      ctx.fillStyle = p.hue;
      ctx.globalAlpha = p.alpha * (0.65 + 0.35 * Math.sin(t * 3 + p.x));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // 5. Expanding Sonar & Evolution Shockwave Ripples
    for (let i = state.stageRipples.length - 1; i >= 0; i--) {
      const rp = state.stageRipples[i];
      rp.r += 4.4;
      rp.alpha -= 0.017;
      if (rp.alpha <= 0 || rp.r >= rp.maxR) {
        state.stageRipples.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.strokeStyle = rp.color;
      ctx.globalAlpha = Math.max(0, rp.alpha);
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // 6. PROGRESSIVE SPORE ORGANISM ON THE LEFT ("左边有一个你的生物的形状，像孢子一样逐步演化、变强、变大")
    const domPath = getDominantPathInfo(life);
    const progress = Math.max(0.05, life.currentTick / life.totalTicks);
    const totalOrganLv = Object.values(life.organLevels || {}).reduce((a, b) => a + b, 0);
    // Starts at 0.55x scale (tiny Spore larva/cell) and grows smoothly up to 1.45x Mythic Titan scale!
    const growthScale = 0.55 + progress * 0.60 + totalOrganLv * 0.038;

    if (state.stageLungeOffset > 0) {
      state.stageLungeOffset = Math.max(0, state.stageLungeOffset * 0.88 - 0.5);
    }

    const baseCx = (state.gameLoop && state.gameLoop.px) ? state.gameLoop.px : 250;
    const baseCy = (state.gameLoop && state.gameLoop.py) ? state.gameLoop.py : 186;
    const creatureX = baseCx + Math.sin(t * 1.8) * 9 + state.stageLungeOffset;
    const creatureY = baseCy + Math.cos(t * 2.2) * 6;
    const enemyX = 690 + Math.cos(t * 1.6) * 14;
    const enemyY = 186 + Math.sin(t * 2.0) * 9;

    // Draw Offspring Pod Swimming/Following Behind the Main Creature (Left of protagonist)
    const kidsCount = Math.min(5, life.offspringCount || 0);
    for (let k = 0; k < kidsCount; k++) {
      const kx = creatureX - (68 + growthScale * 26) - k * 34 + Math.sin(t * 3 + k) * 6;
      const ky = creatureY + (k % 2 === 0 ? -26 : 26) + Math.cos(t * 2.6 + k) * 5;
      ctx.save();
      ctx.translate(kx, ky);
      drawArticulatedCreature(ctx, sp, life.organLevels, 0.36, '#c084fc', t + k * 0.9, false, true);
      ctx.restore();
    }

    // Draw Tactical Prediction Arc when Hovering a Choice Card!
    if (state.hoveredChoicePath) {
      ctx.save();
      const arcCol = state.hoveredChoicePath === 'tyrant' ? '#f43f5e'
                   : state.hoveredChoicePath === 'dynasty' ? '#c084fc' : '#22d3ee';
      ctx.strokeStyle = arcCol;
      ctx.lineWidth = 2.6;
      ctx.setLineDash([8, 5]);
      ctx.lineDashOffset = -ts * 0.04;
      ctx.beginPath();
      ctx.moveTo(creatureX + 42 * growthScale, creatureY - 8);
      ctx.quadraticCurveTo((creatureX + enemyX) * 0.5, creatureY - 78, enemyX - 42, enemyY - 6);
      ctx.stroke();
      ctx.restore();
    } else {
      // Subtle sensory tether
      ctx.save();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.lineWidth = 1.4;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(creatureX + 48 * growthScale, creatureY);
      ctx.lineTo(enemyX - 48, enemyY);
      ctx.stroke();
      ctx.restore();
    }

    // Draw Main Protagonist Organism on Left-Center
    ctx.save();
    ctx.translate(creatureX, creatureY);
    drawArticulatedCreature(ctx, sp, life.organLevels, growthScale, domPath.color, t, state.xrayMode, false);
    ctx.restore();

    // Protagonist Evolution Scale & Organ Level Tag underneath
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(2, 6, 23, 0.88)';
    ctx.strokeStyle = state.hoveredOrganKey ? '#facc15' : domPath.color;
    ctx.lineWidth = 1.3;
    const tagY = Math.min(h - 34, creatureY + 46 * growthScale + 12);
    ctx.beginPath();
    ctx.roundRect(creatureX - 96, tagY, 192, 22, 8);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 11px Inter, sans-serif';
    const size = Math.round(growthScale * 100);
    const name = lifeName(life);
    const growth = totalOrganLv + 1;
    ctx.fillText(toText(`${name} · 体型 ${size}% · 进化 Lv.${growth}`,
      `${name} · Size ${size}% · Growth Lv.${growth}`), creatureX, tagY + 14.5, 178);
    ctx.restore();

    // 7. RIGHT-SIDE PROCEDURAL RIVAL ORGANISM / BOSS / ENCOUNTER ENTITY
    drawProceduralEncounterEntity(ctx, life, enemyX, enemyY, t);

    // 8. Spiraling Bioluminescent DNA / ATP Absorption Orbs (Flies from Encounter into Your Organism!)
    if (state.dnaOrbs && state.dnaOrbs.length) {
      for (let i = state.dnaOrbs.length - 1; i >= 0; i--) {
        const orb = state.dnaOrbs[i];
        orb.progress += orb.speed;
        if (orb.progress >= 1) {
          state.dnaOrbs.splice(i, 1);
          continue;
        }
        const u = orb.progress;
        const inv = 1 - u;
        const ox = inv * inv * orb.sx + 2 * inv * u * orb.cx + u * u * creatureX;
        const oy = inv * inv * orb.sy + 2 * inv * u * orb.cy + u * u * creatureY;

        ctx.save();
        drawGlowingDisc(ctx, ox, oy, orb.r * (1 - u * 0.35), orb.color, 8);
        ctx.restore();
      }
    }

    // 9. Claw / Bite Slash Arcs on Clash
    if (state.slashArcs && state.slashArcs.length) {
      for (let i = state.slashArcs.length - 1; i >= 0; i--) {
        const sl = state.slashArcs[i];
        sl.alpha -= 0.04;
        sl.scale += 0.03;
        if (sl.alpha <= 0) {
          state.slashArcs.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.translate(sl.x, sl.y);
        ctx.rotate(sl.angle);
        ctx.scale(sl.scale, sl.scale);
        ctx.strokeStyle = sl.color;
        ctx.globalAlpha = Math.max(0, sl.alpha);
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 0, 34, -0.75, 0.75);
        strokeStageGlow(ctx, sl.color, 6);
        ctx.restore();
      }
    }

    updateAndDrawV10StageGameplay(ctx, w, h, life, t);
    if (typeof renderV11CanvasMasterpieceEffects === 'function') renderV11CanvasMasterpieceEffects(ctx, w, h, life, t);
    if (typeof renderV12CockpitStageMiniGames === 'function') renderV12CockpitStageMiniGames(ctx, w, h, life, t);
    renderV13NativeGameCanvasHUD(ctx, w, h, life, t);
    if (life.vitality <= 0) {
      finishLife(false, toText('舞台中的伤害耗尽了体魄。', 'Injuries on the stage exhausted your health.'));
      state.canvasAnimId = null;
      return;
    }

    // 10. Floating Evolution Texts
    for (let i = state.stageFloatingTexts.length - 1; i >= 0; i--) {
      const ft = state.stageFloatingTexts[i];
      ft.y += ft.vy;
      ft.alpha -= 0.014;
      if (ft.alpha <= 0) {
        state.stageFloatingTexts.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillStyle = ft.color;
      ctx.globalAlpha = Math.max(0, ft.alpha);
      const text = translateText(ft.text);
      const x = Math.round(ft.x);
      const y = Math.round(ft.y);
      ctx.strokeStyle = '#020617';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 2;
      ctx.strokeText(text, x, y);
      ctx.fillText(text, x, y);
      ctx.restore();
    }

    state.canvasAnimId = requestAnimationFrame(renderFrame);
  }

  state.canvasAnimId = requestAnimationFrame(renderFrame);
}

// ==================== 14. NON-REPETITIVE ROGUELIKE STAGE GENERATOR ====================
function pickNonRepeatingPoolEvent(epochKey, life) {
  const candidates = ROGUELIKE_EVENT_POOL.filter(e => e.epoch === epochKey);
  if (!candidates.length) return ROGUELIKE_EVENT_POOL[0];
  // Filter out events already seen in this life or recent lives
  let unseen = candidates.filter(e => !life.usedEventIds.includes(e.id) && !state.seenEventIds.includes(e.id));
  if (!unseen.length) {
    unseen = candidates.filter(e => !life.usedEventIds.includes(e.id));
  }
  if (!unseen.length) unseen = candidates;

  const picked = unseen[Math.floor(Math.random() * unseen.length)];
  life.usedEventIds.push(picked.id);
  state.seenEventIds.push(picked.id);
  if (state.seenEventIds.length > 7) state.seenEventIds.shift();
  return picked;
}

function getEpochName(tick) {
  if (tick <= 4) return '第一纪元 · 初生与破壳筛选';
  if (tick <= 8) return '第二纪元 · 器官重塑与分化';
  if (tick <= 12) return '第三纪元 · 成年争霸与因果';
  if (tick <= 16) return '第四纪元 · 繁衍盛典与大灾变';
  return '第五纪元 · 暮年传承与终局';
}

function generateDynamicStageForTick(life, tick) {
  const sp = life.species;

  // ==================== COMPLETE 20-STAGE MODERN HUMAN LIFE SIMULATION (0岁 -> 86岁) ====================
  if (isModernHumanSpecies(sp)) {
    state.stageWeatherMode = 'normal';
    const rawVariants = MODERN_HUMAN_20_STAGES_POOL[tick] || MODERN_HUMAN_20_STAGES_POOL[1];
    const tierCode = (life.worldModifier && life.worldModifier.tierCode) || 'small_town';
    const tierMatched = rawVariants.filter(v => v.tierFilter && v.tierFilter.includes(tierCode));
    const defaultMatched = rawVariants.filter(v => !v.tierFilter);
    const poolToUse = tierMatched.length > 0 ? tierMatched : (defaultMatched.length > 0 ? defaultMatched : rawVariants);
    const picked = poolToUse[Math.floor(Math.random() * poolToUse.length)];
    const alternate = life.offspringCount === 0 ? MODERN_ALTERNATE_SCENES[tick]?.zh : null;
    const [title, event, ...alternatives] = alternate || [picked.title, picked.event];
    const choices = alternate ? picked.choices.map((choice, index) => {
      const [label, outcome] = alternatives[index];
      return {
        ...choice, label, outcome, desc: '',
        bondChange: undefined, choreoText: undefined, traitGain: undefined,
        offspringGain: [10, 12].includes(tick) ? choice.offspringGain : undefined
      };
    }) : picked.choices;
    life.lastStageScene = picked.scene || 'childhood_home';
    return {
      tick,
      scene: picked.scene || 'school',
      epochName: picked.epochName,
      title,
      event,
      enemyEmoji: picked.enemyEmoji || '✨',
      enemyLabel: picked.enemyLabel || '人生抉择',
      butterflyTriggered: picked.butterflyTriggered || null,
      isDecision: true,
      choices
    };
  }

  const customStages = sp.stages || [];
  const isAquatic = /海|洋|水|溪|渊|礁|湖/.test(sp.habitat);
  const organOrder = ['jaws', 'lungs', 'armor', 'senses', 'locomotion', 'crest'];

  // Map species-specific signature milestones onto ticks
  const customTickMap = {};
  if (customStages.length >= 5) {
    [1, 5, 10, 14, 19].forEach((tVal, idx) => { if (customStages[idx]) customTickMap[tVal] = customStages[idx]; });
  } else if (customStages.length === 4) {
    [1, 6, 11, 18].forEach((tVal, idx) => { if (customStages[idx]) customTickMap[tVal] = customStages[idx]; });
  } else if (customStages.length === 3) {
    [1, 10, 19].forEach((tVal, idx) => { if (customStages[idx]) customTickMap[tVal] = customStages[idx]; });
  } else if (customStages.length === 2) {
    [1, 14].forEach((tVal, idx) => { if (customStages[idx]) customTickMap[tVal] = customStages[idx]; });
  }

  if (customTickMap[tick]) {
    const raw = customTickMap[tick];
    const baseChoices = (raw.choices || []).map((ch, idx) => {
      const orgKey = idx === 0 ? 'jaws' : 'lungs';
      return {
        ...ch,
        path: idx === 0 ? 'tyrant' : 'pioneer',
        pathGain: 14,
        organUpgrade: orgKey,
        traitGain: idx === 0
          ? { id: `sp_${sp.id}_${tick}_a`, name: '🦷 物种特化猎手', type: 'tyrant', desc: `在「${raw.title}」中淬炼出的强悍捕食器官` }
          : { id: `sp_${sp.id}_${tick}_b`, name: '🫁 物种特化呼吸', type: 'pioneer', desc: `在「${raw.title}」中演化出的跨界心肺与感官` }
      };
    });

    baseChoices.push({
      label: `🌺 【氏族共鸣与繁衍】召集伴侣与同族共同应对「${raw.title}」`,
      desc: '升级【🌺求偶华冠 +1阶】· 繁衍羁绊大增，若在成年期可直接孕育 +1 世代子嗣！',
      path: 'dynasty',
      pathGain: 15,
      organUpgrade: 'crest',
      offspringGain: tick >= 10 ? 1 : 0,
      dv: 10, de: 8, da: 12, dl: 24,
      traitGain: { id: `sp_dyn_${tick}`, name: '🌺 氏族守望华冠', type: 'dynasty', desc: '通过群体协作化解危机，保障子嗣平安成活' },
      outcome: `你通过华冠共鸣召集同伴结阵互助，在「${raw.title}」中护住了全族火种！`
    });

    if (life.traits.length > 0) {
      const topTrait = life.traits[0];
      baseChoices.push({
        label: `🌟【专属器官破局 · 凭「${topTrait.name}」碾压过关】`,
        desc: `因你已持有【${topTrait.name}】，可额外强化【🛡️背脊重甲 +1阶】并收获全属性暴涨！`,
        path: topTrait.type || 'pioneer',
        pathGain: 16,
        organUpgrade: 'armor',
        isSpecialBranch: true,
        dv: 14, de: 14, da: 22, dl: 18,
        outcome: `🦋 器官优势碾压！你凭借【${topTrait.name}】在「${raw.title}」中展现出超越时代的统治力！`
      });
    }

    return {
      tick,
      scene: tick >= 14 ? 'cataclysm' : 'duel',
      epochName: getEpochName(tick),
      title: `【物种专属史诗】${raw.title}`,
      event: raw.event,
      enemyEmoji: isAquatic ? '🦈' : '🦖',
      enemyLabel: '物种宿命考验',
      isDecision: true,
      choices: baseChoices
    };
  }

  // Tick 12: Butterfly Payoff #1 (Nemesis / Sworn Ally / Predator Weakness)
  if (tick === 12) {
    if (life.flags.made_nemesis) {
      return {
        tick,
        scene: 'duel',
        epochName: '第三纪元 · 蝴蝶效应因果回响',
        title: '🦋【因果爆发】独眼宿敌的血色复仇！',
        event: '你在少年期夺走猎物并挑衅的那头【独眼顶级掠食者】，如今带着满身伤疤追踪而至，趁你巡视领地时发动了雷霆偷袭！',
        enemyEmoji: '👁️',
        enemyLabel: '独眼宿敌寻仇',
        butterflyTriggered: '因你在少年期选择了【弱肉强食挑衅独眼霸主】，今日宿敌携滔天怒火前来寻仇！',
        isDecision: true,
        choices: [
          {
            label: '🦷 【宿命死斗】用进化的巨颚正面迎击，彻底斩杀独眼宿敌！',
            desc: '升级【🦷捕食颚齿 +1阶】· 奠定不败霸主神话，夺取宿敌全部领地',
            path: 'tyrant', pathGain: 18, organUpgrade: 'jaws',
            dv: -8, de: 26, da: 18, dl: 14,
            traitGain: { id: 't_nemesis_slayer', name: '🏆 斩杀宿敌之王', type: 'tyrant', desc: '正面击败了纠缠半生的终生宿敌' },
            outcome: '经过惨烈搏杀，你的巨颚彻底终结了独眼宿敌的性命，霸主威压震慑百里！'
          },
          {
            label: '🦵👁️ 【复眼预判与高机动反杀】利用地形陷阱将暴怒的宿敌引入绝境',
            desc: '升级【🦵推进肢体 +1阶】· 零伤亡智取宿敌',
            path: 'pioneer', pathGain: 16, organUpgrade: 'locomotion',
            dv: 10, de: 16, da: 24, dl: 12,
            outcome: '被仇恨蒙蔽的宿敌一头栽进你预设的深渊陷阱，你凭高超机动性全身而退！'
          },
          {
            label: '🛡️ 【重甲硬抗断尾突围】以背部骨板承受一击，保全性命留待来日',
            desc: '升级【🛡️背脊重甲 +1阶】· 虽受皮肉伤但骨板愈发坚固',
            path: 'dynasty', pathGain: 10, organUpgrade: 'armor',
            dv: -10, de: -4, da: 14, dl: 14,
            outcome: '厚实的背甲替你挡下了致命咬合，你成功脱离险境。'
          }
        ]
      };
    } else if (life.flags.rescued_ally) {
      return {
        tick,
        scene: 'courtship',
        epochName: '第三纪元 · 蝴蝶效应因果回响',
        title: '🦋【因果回响】生死伴侣舍命相救与血脉昌盛！',
        event: '两头凶残的掠食者将你逼入绝境！千钧一发之际，你少年期救下的那位【生死伴侣】率领同族冲入战团替你解围，并与你共筑爱巢！',
        enemyEmoji: '🤝',
        enemyLabel: '生死伴侣报恩',
        butterflyTriggered: '因你在少年期选择了【舍己救治重伤同类】，今日绝境中伴侣率众舍命相救并为你繁衍后代！',
        isDecision: true,
        choices: [
          {
            label: '🌺 【共结连理 · 繁育双生子嗣】与生死伴侣携手繁衍，壮大家族血脉！',
            desc: '直接获得 +2 世代存活子嗣！升级【🌺求偶华冠 +1阶】，稳固下一世传承！',
            path: 'dynasty', pathGain: 20, organUpgrade: 'crest',
            offspringGain: 2,
            dv: 18, de: 20, da: 16, dl: 30,
            outcome: '善因结出硕果！你们不仅击退强敌，更孕育出两代健壮的幼崽实时跟随在你身后！'
          },
          {
            label: '🦷 【双雄合击反杀偷袭者】与伴侣前后夹击，将偷袭的掠食者彻底猎杀！',
            desc: '升级【🦷捕食颚齿 +1阶】并获得 +1 世代子嗣',
            path: 'tyrant', pathGain: 16, organUpgrade: 'jaws',
            offspringGain: 1,
            dv: 14, de: 26, da: 18, dl: 22,
            outcome: '天衣无缝的配合让偷袭者瞬间毙命，你们共享盛宴并诞下后代！'
          },
          {
            label: '🫁 【随伴侣迁往世外桃源】前往伴侣探明的隐秘温床安心育幼',
            desc: '升级【🫁心肺代谢 +1阶】并获得 +1 世代子嗣',
            path: 'pioneer', pathGain: 16, organUpgrade: 'lungs',
            offspringGain: 1,
            dv: 18, de: 18, da: 24, dl: 22,
            outcome: '伴侣带你来到远离纷争的富饶秘境，家族血脉在此欣欣向荣！'
          }
        ]
      };
    }
  }

  // Tick 13: Mandatory Bloodline Reproduction Opportunity (So attentive players can ensure offspring >= 1 for Next Generation!)
  if (tick === 13) {
    return ROGUELIKE_EVENT_POOL.find(e => e.id === 'ev_late_courtship_dynasty');
  }

  // Tick 16: Geological Cataclysm / Mass Extinction Climax!
  if (tick === 16) {
    state.stageWeatherMode = 'cataclysm';
    const hasEscapeRoute = life.flags.explored_forbidden_zone || life.flags.mutated_organ || life.organLevels.lungs >= 2;
    const hasSanctuary = life.flags.built_sanctuary || life.organLevels.armor >= 2;

    const choices = [
      {
        label: '🦷🛡️ 【霸主怒吼 · 以重甲巨颚硬撼末日风暴】死守领地直至最后一刻！',
        desc: '升级【🛡️背脊重甲 +1阶】· 体魄损耗较大，但化石留存率提升3倍！',
        path: 'tyrant', pathGain: 18, organUpgrade: 'armor',
        dv: -16, de: -12, da: 14, dl: 18,
        traitGain: { id: 't_cataclysm_defier', name: '☄️ 怒视苍穹的霸主', type: 'tyrant', desc: '在大灭绝浩劫中昂首挺立' },
        outcome: '面对漫天火雨与海床崩裂，你的重甲背棘在火光中熠熠生辉，用不屈脊梁扛下天威！'
      },
      {
        label: '🕯️🌺 【血肉护盾 · 舍身托举子嗣跨越浩劫】宁可自己重伤，也要保住身后的幼崽！',
        desc: '升级【🌺求偶华冠 +1阶】并额外保全 +2 世代子嗣！（即使你因此陨落，也可直接开启下一世！）',
        path: 'dynasty', pathGain: 22, organUpgrade: 'crest',
        offspringGain: 2,
        butterflyFlag: 'martyr_sacrifice',
        dv: -20, de: -14, da: 16, dl: 35,
        traitGain: { id: 't_martyr_halo', name: '🕯️ 舍身护雏的母体印记', type: 'dynasty', desc: '用生命替后代挡下灭绝浩劫，子嗣100%存活进入下一世' },
        outcome: '你用宽阔的背脊替孩子们挡住滚烫的火山灰与暗流，幼崽们在你怀中毫发无伤，家族血脉得以延续！'
      }
    ];

    if (hasEscapeRoute) {
      choices.unshift({
        label: '🌟【跨界心肺破局】启用高度发达的「双肺/温血心与禁区避难所」带领全族全身而退！',
        desc: '因你此前已演化出高阶【🫁心肺代谢】或探索了禁区，你零伤亡穿越灭绝浩劫并诞下 +2 世代子嗣！',
        path: 'pioneer', pathGain: 22, organUpgrade: 'lungs',
        isSpecialBranch: true,
        butterflyFlag: 'survived_cataclysm_miracle',
        offspringGain: 2,
        dv: 16, de: 14, da: 28, dl: 28,
        traitGain: { id: 't_extinction_victor', name: '☄️ 大灭绝穿越者', type: 'pioneer', desc: '带领种群穿越地质大灭绝，锁定【末日守望】传奇结局' },
        outcome: '🦋 器官进化改写宿命！当90%的物种在缺氧与严寒中倒下，你发达的心肺与温血系统让全族安然渡劫！'
      });
    }

    if (hasSanctuary) {
      choices.push({
        label: '🌟【重甲圣地庇护】退入坚固的「世代育幼堡垒」，凭厚重装甲与储粮共渡核冬天！',
        desc: '因你拥有高阶【🛡️背脊重甲】或修筑了育幼圣地，全族平安度过漫长寒冬并繁衍 +2 世代子嗣！',
        path: 'dynasty', pathGain: 20, organUpgrade: 'armor',
        isSpecialBranch: true,
        butterflyFlag: 'survived_cataclysm_miracle',
        offspringGain: 2,
        dv: 14, de: 12, da: 22, dl: 30,
        outcome: '🦋 坚甲与堡垒成为末日方舟！你们全族依偎在地下圣地，毫发无损地迎来了新纪元的朝阳！'
      });
    }

    return {
      tick,
      scene: 'cataclysm',
      epochName: '第四纪元 · 星球大灾变与生死审判',
      title: `⚠️【地质浩劫降临】${sp.eraName} 的极端环境大审判！`,
      event: `苍穹变色，大地与海床剧烈震颤！超级火山喷发、小行星撞击寒冬或大面积缺氧席卷了 ${sp.habitat}。你一生进化出的器官与血脉子嗣正面临终极考验！`,
      enemyEmoji: '☄️',
      enemyLabel: '地质大灾变审判',
      butterflyTriggered: (hasEscapeRoute || hasSanctuary) ? '🦋 因你此前的器官进化与前瞻抉择，本次末日浩劫已为你解锁金色的【逆天改命专属生路】！' : null,
      isDecision: true,
      choices
    };
  }

  // Tick 20: Final Resting Place & Generational Legacy Handover
  if (tick === 20) {
    state.stageWeatherMode = 'normal';
    return {
      tick,
      scene: 'courtship',
      epochName: '第五纪元 · 终章：世代交接与永恒长眠',
      title: '🪨 终章抉择：向子嗣移交血脉火种，并选择你的长眠之地',
      event: `你已走完 ${sp.name} 波澜壮阔的 20 个生命阶段（享年 ${sp.maxAge} ${sp.ageUnit.split(' ')[0]}）！你的身边围绕着 ${life.offspringCount} 世代存活子嗣。在闭上双眼开启【下一世】之前，你将如何完成最后的生命谢幕？`,
      enemyEmoji: '🕯️',
      enemyLabel: '世代交接终章',
      isDecision: true,
      choices: [
        {
          label: '🪨 【沉入缺氧细腻的火山灰/石灰泥】（特异埋藏 Lagerstätte · 冲击博物馆镇馆化石！）',
          desc: '化石留存概率暴涨至 88%+！同时将满级感官与骨骼基因完整封存传给下一世！',
          path: 'pioneer', pathGain: 15, organUpgrade: 'senses',
          butterflyFlag: 'chose_lagerstatte',
          dv: 0, de: 0, da: 20, dl: 18,
          outcome: '细腻无氧的沉积物温柔包裹了你高度进化的躯体，你的遗骸化作传世化石，而你的子嗣正昂首迈向下一世！'
        },
        {
          label: '🌊 【一鲸落而万物生 · 在子孙环绕中化作滋养家族领地的生态绿洲】',
          desc: '额外再孕育 +1 世代子嗣！让下一世子代开局拥有最丰沛的营养与群落庇护！',
          path: 'dynasty', pathGain: 16, organUpgrade: 'crest',
          offspringGain: 1,
          butterflyFlag: 'chose_gaia_return',
          dv: 0, de: 0, da: 16, dl: 30,
          outcome: '你在孩子们的簇拥下安详合眼，你的血脉与基因在子孙体内澎湃奔涌，准备开启下一世传奇！'
        },
        {
          label: '👑 【登顶领地之巅 · 发出最后一声震慑纪元的霸主咆哮】',
          desc: '升级【🦷捕食颚齿 +1阶】· 将无敌霸主威压烙印进下一世子代的本能之中！',
          path: 'tyrant', pathGain: 16, organUpgrade: 'jaws',
          dv: 0, de: 0, da: 18, dl: 20,
          outcome: '你屹立在山海之巅迎着星光谢幕，你的子代继承了你令百兽战栗的王者气场！'
        }
      ]
    };
  }

  // For all other ticks, draw a non-repeating event from ROGUELIKE_EVENT_POOL or procedural organ evolution matrix!
  state.stageWeatherMode = 'normal';
  const epochKey = tick <= 5 ? 'early' : tick <= 12 ? 'mid' : 'late';
  const poolEv = pickNonRepeatingPoolEvent(epochKey, life);
  if (poolEv) {
    return {
      tick,
      scene: poolEv.scene || 'duel',
      epochName: getEpochName(tick),
      title: poolEv.title,
      event: poolEv.event,
      enemyEmoji: poolEv.scene === 'mutation' ? '🧬' : poolEv.scene === 'courtship' ? '🪺' : isAquatic ? '🦑' : '🦖',
      enemyLabel: poolEv.title,
      isDecision: true,
      choices: poolEv.choices
    };
  }
}

// ==================== 15. SPECIES SELECTION & SURVIVORSHIP CURVE ====================
function rollSpecies() {
  if (state.drawMode === 'manual') {
    const found = SPECIES_DB.find(s => s.id === state.manualSpeciesId);
    if (found) return found;
  }
  let pool = SPECIES_DB;
  if (state.selectedEra !== 'all') {
    pool = SPECIES_DB.filter(s => s.era === state.selectedEra);
  }
  if (!pool.length) pool = SPECIES_DB;

  const weightKey = state.drawMode === 'biomass' ? 'biomassWeight' : 'milestoneWeight';
  const totalWeight = pool.reduce((sum, s) => sum + (s[weightKey] || 10), 0);
  let r = Math.random() * totalWeight;
  for (const s of pool) {
    r -= (s[weightKey] || 10);
    if (r <= 0) return s;
  }
  return pool[0];
}

function getCohortSurvivalAtProgress(curveType, infantMortality, progress0to1) {
  const p = Math.max(0, Math.min(1, progress0to1));
  if (p === 0) return 100;
  if (curveType === 'I') {
    const earlyDrop = infantMortality * 35 * Math.pow(p, 0.5);
    const lateDrop = p > 0.65 ? Math.pow((p - 0.65) / 0.35, 2.4) * (95 - earlyDrop) : 0;
    return Math.max(1, +(100 - earlyDrop - lateDrop).toFixed(1));
  } else if (curveType === 'II') {
    return Math.max(1, +(100 * Math.pow(1 - p * 0.94, 1.35)).toFixed(1));
  } else {
    const steepDrop = infantMortality * 100 * (1 - Math.exp(-8 * p));
    const slowTail = (100 - infantMortality * 100) * Math.pow(p, 1.5) * 0.85;
    return Math.max(0.2, +(100 - steepDrop - slowTail).toFixed(1));
  }
}

// ==================== 16. INITIALIZE BIRTH OR NEXT GENERATION LINEAGE ====================
function prepareBirthRegistration(forcedSpeciesId = null, isContinuingGeneration = false, relay = null) {
  if (!allowNewLife()) return false;
  stopSimTimer();
  if (relay) state.dynasty = relay;
  if (!isContinuingGeneration) {
    // Reset Dynasty to Generation 1
    state.dynasty = {
      active: true,
      generation: 1,
      totalYearsSpanned: 0,
      totalOffspringEver: 0,
      inheritedTraits: [],
      inheritedOrgans: { jaws: 0, armor: 0, lungs: 0, senses: 0, locomotion: 0, crest: 0 },
      ancestors: []
    };
  }

  let sp;
  if (forcedSpeciesId) {
    sp = SPECIES_DB.find(s => s.id === forcedSpeciesId) || rollSpecies();
  } else {
    sp = rollSpecies();
  }

  // Roll a randomized World Modifier (Modern 1in8b Family Origin for modern_human, Paleo-Climate for others)
  const isMod = isModernHumanSpecies(sp);
  let worldMod;
  if (isMod) {
    if (!worldMod) {
      // Weighted realistic 1in8b.life global distribution roll
      const r = Math.random();
      const idx = r < 0.14 ? 0 : r < 0.45 ? 1 : r < 0.77 ? 2 : r < 0.94 ? 3 : 4;
      worldMod = MODERN_WORLD_MODIFIERS_POOL[idx];
    }
  } else {
    worldMod = WORLD_MODIFIERS_POOL[Math.floor(Math.random() * WORLD_MODIFIERS_POOL.length)];
  }

  const sameEraPool = SPECIES_DB.filter(s => s.era === sp.era);
  const cohorts = isMod ? [
    { name: '产房邻床发小 · 林晓宇 (上海/深圳)', species: '同龄现代人', emoji: '👦', alive: true, deathAgeText: null, deathReason: null, mortalityRisk: 0.003 },
    { name: '青梅竹马同桌 · 苏婉清 (书香家庭)', species: '同龄现代人', emoji: '👧', alive: true, deathAgeText: null, deathReason: null, mortalityRisk: 0.002 },
    { name: '同龄人 · 佐藤 (东京)', species: '故事中的同龄人', emoji: '🧑', alive: true, deathAgeText: null, deathReason: null, mortalityRisk: 0.003 },
    { name: '同龄人 · 阿米尔 (孟买)', species: '故事中的同龄人', emoji: '🏽', alive: true, deathAgeText: null, deathReason: null, mortalityRisk: 0.012 }
  ] : [
    {
      name: `同巢手足 ${sp.name} #A`,
      species: sp.name,
      emoji: sp.emoji,
      alive: true,
      deathAgeText: null,
      deathReason: null,
      mortalityRisk: sp.infantMortality * 0.14
    },
    {
      name: `同巢手足 ${sp.name} #B`,
      species: sp.name,
      emoji: sp.emoji,
      alive: true,
      deathAgeText: null,
      deathReason: null,
      mortalityRisk: sp.infantMortality * 0.16
    }
  ];
  if (!isMod) {
    for (let i = 0; i < 2; i++) {
      const other = sameEraPool[Math.floor(Math.random() * sameEraPool.length)] || SPECIES_DB[i];
      cohorts.push({
        name: `同期降生 · ${other.name}`,
        species: other.name,
        emoji: other.emoji,
        alive: true,
        deathAgeText: null,
        deathReason: null,
        mortalityRisk: other.infantMortality * 0.13
      });
    }
  }

  const totalTicks = 20;
  const genNum = state.dynasty.generation;
  const serialNum = Math.floor(100 + Math.random() * 900);
  state.stageWeatherMode = 'normal';
  state.lastUpgradedOrgan = null;
  state.stageEnemyEmoji = isMod ? '🏡' : sp.emoji;
  state.stageEnemyLabel = isMod ? '人生起点' : '初生试炼';
  state.stageSceneType = isMod ? 'childhood_home' : 'ambush';
  state.autoChoice = false;
  state.isPaused = false;
  state.stageFloatingTexts = [];
  state.stageRipples = [];
  state.slashArcs = [];
  const innateOptions = getActiveInnateOptions(sp);
  state.selectedInnateId = innateOptions[0].id;

  // Inherit organ levels from parents if Gen >= 2!
  const startingOrgans = isContinuingGeneration
    ? { ...state.dynasty.inheritedOrgans }
    : { jaws: 0, armor: 0, lungs: 0, senses: 0, locomotion: 0, crest: 0 };

  state.activeLife = {
    species: sp,
    generation: genNum,
    worldModifier: worldMod,
    individualName: isMod
      ? (genNum > 1 ? `林知远·第${genNum}代` : ['林知远', '苏星河', '陈景行', '陆云帆', '顾清欢'][serialNum % 5])
      : (genNum > 1 ? `${sp.name}·第${genNum}世 #${serialNum}` : `${sp.name} #${serialNum}`),
    currentTick: 0,
    totalTicks,
    decisionsMadeCount: 0,
    vitality: (isMod && worldMod.baseVitality ? worldMod.baseVitality : 80) + (genNum > 1 ? 6 : 0),
    energy: (isMod && worldMod.baseEnergy ? worldMod.baseEnergy : 76) + (genNum > 1 ? 6 : 0),
    adaptation: (isMod && worldMod.baseAdapt ? worldMod.baseAdapt : 48) + (genNum > 1 ? 8 : 0),
    lineage: (isMod && worldMod.baseLineage ? worldMod.baseLineage : 56) + (genNum > 1 ? 8 : 0),
    familyBonds: {
      mother: { name: '妈妈', status: isMod && worldMod.tierCode === 'war_poverty' ? '战火中护着你' : '温柔操劳·健康', intimacy: 85, alive: true },
      father: { name: '爸爸', status: isMod && worldMod.tierCode === 'mountain_village' ? '远方工地打工' : '沉默扛事·健康', intimacy: 80, alive: true },
      partner: { name: '尚未邂逅', status: '等待青春相遇', intimacy: 0, alive: true },
      child: { name: '尚无子女', status: '等待血脉延续', intimacy: 0, alive: true }
    },
    focus: 'forage',
    organLevels: startingOrgans,
    pathScores: { tyrant: 0, dynasty: 0, pioneer: 0 },
    traits: isContinuingGeneration ? [...state.dynasty.inheritedTraits] : [],
    flags: {},
    usedEventIds: [],
    crossroadsHistory: [],
    chronicle: [],
    gridCells: Array.from({ length: totalTicks }, (_, idx) => ({
      tick: idx + 1,
      status: 'pending',
      summary: '尚未经历'
    })),
    cohorts,
    pendingDecision: null,
    completedPauseTriggers: [],
    isDead: false,
    deathTick: null,
    causeOfDeath: '',
    survivedToEnd: false,
    offspringCount: 0,
    fossilized: false,
    fossilProbability: 0,
    endingArchetype: null,
    lineageExtinct: false
  };

  switchMainView('sim');
  switchSimSubview('birthcard');
  renderBirthRegistrationCard();
  saveSession();
  playTone(523.25, 0.15, 'sine', 0.05);
  return true;
}

function renderBirthRegistrationCard() {
  const life = state.activeLife;
  const sp = life.species;
  const gen = life.generation || 1;

  document.getElementById('birthGenerationBadge').textContent = toText(`第 ${gen} 世`, `Generation ${gen}`);
  document.getElementById('birthEraBadge').textContent = sp.eraName;
  document.getElementById('birthSpeciesTitle').textContent = speciesName(sp);
  document.getElementById('birthSpeciesLatin').textContent = isModernHumanSpecies(sp) ? 'Homo sapiens' : `${sp.latin} · ${translateText(sp.trophic)}`;
  document.getElementById('birthSpeciesEmoji').textContent = sp.emoji;
  document.getElementById('birthOpeningLore').textContent = isModernHumanSpecies(sp)
    ? toText('你将在所选家庭长大。每一段关系和每个选择都可能改变这一生。', 'Your family sets the starting conditions. Your choices and relationships shape the life that follows.')
    : sp.openingLore;
  document.getElementById('customIndividualNameInput').value = life.customName ?? lifeName(life);

  const isMod = isModernHumanSpecies(sp);
  const activeMetaList = getActiveOrganMetaList(sp);
  const activeInnateList = getActiveInnateOptions(sp);

  // Render World Modifier / 1in8b Family Origin Box
  const wm = life.worldModifier;
  document.getElementById('birthWorldModifierBox').innerHTML = `
    <div>
      <span class="font-bold text-cyan-300">${escapeHtml(translateText(wm.name))}</span>
      <p class="text-xs text-slate-300 mt-1">${wm.family ? escapeHtml(translateText(wm.family)) : escapeHtml(translateText(wm.desc))}</p>
    </div>
    <span class="px-2.5 py-1 rounded-lg bg-slate-950 text-amber-300 font-mono text-[11px] shrink-0 border border-slate-800">${isMod ? toText('家庭背景', 'Family background') : toText('环境', 'Environment')}</span>
  `;

  // Render Inherited Ancestral Legacy Box if Gen >= 2
  const legacyBox = document.getElementById('birthInheritedLegacyBox');
  if (gen > 1) {
    legacyBox.classList.remove('hidden');
    const orgSummary = activeMetaList
      .filter(m => (life.organLevels[m.key] || 0) > 0)
      .map(m => `${m.name} Lv.${life.organLevels[m.key]}`)
      .join(' · ') || '基础起点';
    const trSummary = life.traits.map(t => t.name).join('、') || '祖传家风印记';
    legacyBox.innerHTML = `
      <div class="text-xs font-bold text-amber-300">👑 家族世代传承加成（继承自第 ${gen - 1} 世父母）：</div>
      <div class="text-xs text-slate-200">🏠 先天继承家业与能力：<span class="text-emerald-300 font-semibold">${orgSummary}</span></div>
      <div class="text-xs text-slate-200">✨ 祖传家风词条：<span class="text-purple-300 font-semibold">${trSummary}</span></div>
    `;
  } else {
    legacyBox.classList.add('hidden');
  }

  const statsItems = isMod ? [
    { label: '投胎城市与地区', val: wm.city || '中国·新一线都市', sub: wm.city || '故事开局' },
    { label: '家庭经济起点', val: (wm.gdpText || '小康温馨家庭').replace('人均可支配收入 ', ''), sub: '' },
    { label: '预期寿命上限', val: `${sp.maxAge} 岁`, sub: '0岁抓周 ➔ 求学 ➔ 结婚 ➔ 退休20阶段' },
    { label: '教育与医疗保障', val: '按家庭处境变化', sub: wm.collegeRate || '现代Type I高存活曲线' }
  ] : [
    { label: '古大气含氧量 (O₂)', val: `${sp.o2Pct}%`, sub: '现代基准 20.95%' },
    { label: '古环境均温', val: `${sp.tempC}℃`, sub: sp.habitat.split('·')[0] },
    { label: '物种寿命上限', val: `${sp.maxAge} ${sp.ageUnit.split(' ')[0]}`, sub: `20阶段 · 具象器官演进` },
    { label: '幼年期自然折损率', val: `${Math.round(sp.infantMortality * 100)}%`, sub: `Type ${sp.curveType} 存活曲线` }
  ];
  document.getElementById('birthEnvStatsGrid').innerHTML = statsItems.map(item => `
    <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
      <div class="text-[11px] text-slate-400">${item.label}</div>
      <div class="text-base sm:text-lg font-bold font-mono text-white mt-0.5 truncate">${item.val}</div>
      <div class="text-[10px] text-emerald-400 mt-0.5 truncate">${item.sub}</div>
    </div>
  `).join('');

  const pickerEl = document.getElementById('birthInnateTraitPicker');
  pickerEl.innerHTML = activeInnateList.map(opt => {
    const isSel = opt.id === state.selectedInnateId;
    const borderCls = isSel
      ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
      : 'bg-slate-900/85 border-slate-800 text-slate-300 hover:border-slate-700';
    return `
      <button type="button" data-innate-id="${opt.id}" class="innate-opt-btn p-3.5 rounded-xl border text-left transition flex flex-col justify-between gap-2 ${borderCls}">
        <div>
          <div class="flex items-center justify-between gap-1">
            <span class="font-bold text-xs text-white">${opt.name}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-950/80 text-emerald-300 font-mono">${opt.badge}</span>
          </div>
          <p class="text-[11px] text-slate-300 mt-1.5 leading-relaxed">${opt.desc}</p>
        </div>
        <div class="text-[10px] font-mono ${isSel ? 'text-emerald-300 font-bold' : 'text-slate-500'}">
          ${isSel ? '✓ 当前已选定此先天器官改造' : '点击选定此开局基因'}
        </div>
      </button>
    `;
  }).join('');

  pickerEl.querySelectorAll('.innate-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedInnateId = btn.getAttribute('data-innate-id');
      renderBirthRegistrationCard();
      saveSession();
      playTone(587.33, 0.1, 'sine', 0.04);
    });
  });

  // v7.0: Render Birth Country / Destiny Switcher for Modern Human
  const countryWrap = document.getElementById('birthCountrySwitcherWrap');
  const countryGrid = document.getElementById('birthCountryButtonsGrid');
  if (countryWrap && countryGrid) {
    if (isMod) {
      countryWrap.classList.remove('hidden');
      countryGrid.innerHTML = MODERN_WORLD_MODIFIERS_POOL.map(mod => {
        const active = life.worldModifier && life.worldModifier.id === mod.id;
        const cls = active
          ? 'bg-amber-500/25 border-amber-400 text-white shadow-lg'
          : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-600';
        return `
          <button type="button" data-mod-id="${mod.id}" class="birth-mod-btn p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${cls}">
            <div class="font-bold text-[11px] text-amber-200">${escapeHtml(translateText(mod.shortLabel))}</div>
            <div class="text-[10px] text-slate-300 mt-1">${escapeHtml(translateText(mod.city))}</div>
            <div class="text-[10px] font-mono mt-1 ${mod.hazardRate >= 0.08 ? 'text-rose-400' : 'text-emerald-400'}">
              ${toText('体魄', 'Health')} ${mod.baseVitality} · ${toText('资源', 'Resources')} ${mod.baseEnergy}
            </div>
          </button>
        `;
      }).join('');
      countryGrid.querySelectorAll('.birth-mod-btn').forEach(b => {
        b.addEventListener('click', () => {
          const mId = b.getAttribute('data-mod-id');
          const found = MODERN_WORLD_MODIFIERS_POOL.find(m => m.id === mId);
          if (found) {
            life.worldModifier = found;
            life.vitality = found.baseVitality + ((life.generation > 1) ? 6 : 0);
            life.energy = found.baseEnergy + ((life.generation > 1) ? 6 : 0);
            life.adaptation = found.baseAdapt + ((life.generation > 1) ? 8 : 0);
            life.lineage = found.baseLineage + ((life.generation > 1) ? 8 : 0);
            life.familyBonds.mother.status = found.tierCode === 'war_poverty' ? '战火中护着你' : '温柔操劳·健康';
            life.familyBonds.father.status = found.tierCode === 'mountain_village' ? '远方工地打工' : '沉默扛事·健康';
            renderBirthRegistrationCard();
            saveSession();
            playTone(659.25, 0.1, 'triangle', 0.05);
          }
        });
      });
    } else {
      countryWrap.classList.add('hidden');
    }
  }
  localizePlayerView();
}

// ==================== 17. SIMULATION EXECUTION & ORGAN UPGRADE RESOLUTION ====================
function startActiveSimulation() {
  const life = state.activeLife;
  if (!life) return;
  if (state.simSubview !== 'birthcard' || saveLocked) return;
  const customName = life.customName?.trim().slice(0, 30);
  if (customName) {
    life.individualName = customName;
    life.nameIsCustom = true;
  }
  resetStageGameplay();
  state.stageCreatureX = state.gameLoop.px;
  state.stageCreatureY = state.gameLoop.py;

  const activeInnateList = getActiveInnateOptions(life.species);
  const innate = activeInnateList.find(o => o.id === state.selectedInnateId) || activeInnateList[0];
  life.vitality = clampStat(life.vitality + innate.dv);
  life.energy = clampStat(life.energy + innate.de);
  life.adaptation = clampStat(life.adaptation + innate.da);
  life.lineage = clampStat(life.lineage + innate.dl);
  life.pathScores[innate.path] += 12;
  life.vitality = clampStat(life.vitality + talentLevel('meta_vital_shield') * 3);
  if (life.generation > 1 && hasRelic('rel_baskerville_crest')) {
    for (const key of ['vitality', 'energy', 'adaptation', 'lineage']) life[key] = clampStat(life[key] + 5);
  }

  // Boost starting organ!
  if (innate.organBoost) {
    life.organLevels[innate.organBoost] = Math.min(3, (life.organLevels[innate.organBoost] || 0) + 1);
    if (innate.organBoost === 'lungs') {
      life.organLevels.senses = Math.min(3, (life.organLevels.senses || 0) + 1);
    }
    state.lastUpgradedOrgan = innate.organBoost;
  }

  if (!life.traits.some(t => t.id === innate.trait.id)) {
    life.traits.push(innate.trait);
  }

  life.crossroadsHistory.push({
    stage: 0,
    ageStr: `0 ${life.species.ageUnit.split(' ')[0]}`,
    title: `第${life.generation}世先天器官基因选择`,
    chosenLabel: innate.name,
    path: innate.path,
    unselectedLabel: activeInnateList.filter(o => o.id !== innate.id).map(o => o.name).join(' / ')
  });

  life.chronicle.unshift({
    ageLabel: `0 ${life.species.ageUnit.split(' ')[0]}`,
    title: `【第 ${life.generation} 世降生】${life.species.eraName} · 天命：${life.worldModifier.name}`,
    text: `${life.species.openingLore} 【本世先天强化：${innate.name}】`,
    starred: true,
    type: 'birth'
  });

  state.isPaused = false;
  state.speedMultiplier = 1;
  updateSpeedUI();
  switchSimSubview('active');
  initStageParticles();
  startStageAnimationLoop();
  addStageFloatingText(`🌱 第${life.generation}世降生！点亮 ${innate.trait.name}`, '#34d399', 260, 140);
  renderActiveDashboard();

  stopSimTimer();
  renderV11BountyQuests();
  saveSession();
  scheduleNextTick();
}

function stopSimTimer() {
  if (state.simTimer) {
    clearTimeout(state.simTimer);
    state.simTimer = null;
  }
}

function scheduleNextTick() {
  stopSimTimer();
  const life = state.activeLife;
  if (!combatIsRunning() || life.pendingDecision) return;
  const interval = Math.max(220, Math.round(state.paceMs / state.speedMultiplier));
  state.simTimer = setTimeout(() => executeLifeTick(), interval);
}

function getAgeAtTick(sp, tick, totalTicks) {
  const ages = [0, 1, 5, 8, 12, 15, 18, 22, 25, 29, 32, 35, 40, 44, 48, 53, 58, 64, 70, 78, sp.maxAge];
  const val = isModernHumanSpecies(sp) ? ages[tick] ?? sp.maxAge : +(sp.maxAge * tick / totalTicks).toFixed(1);
  const sourceUnit = sp.ageUnit.split(' ')[0];
  return `${val} ${sourceUnit}`;
}

function formatEnergyText(sp, energyStat) {
  const baseKcal = sp.dailyKcal * (0.5 + energyStat / 100);
  if (state.energyUnit === 'kcal') {
    return `当前日均代谢体感：${baseKcal < 1 ? baseKcal.toExponential(2) : Math.round(baseKcal).toLocaleString()} kcal/日`;
  } else if (state.energyUnit === 'atp') {
    const atpMol = baseKcal * 0.14;
    return `当前生物能通量：${atpMol < 1 ? atpMol.toExponential(2) : Math.round(atpMol).toLocaleString()} mol ATP/日`;
  } else {
    const grams = baseKcal * 0.65;
    return `等效标准猎物摄取：${grams < 1 ? grams.toExponential(2) : Math.round(grams).toLocaleString()} 克/日`;
  }
}

function executeLifeTick() {
  const life = state.activeLife;
  if (!combatIsRunning() || life.pendingDecision) return;

  life.currentTick++;
  const sp = life.species;
  const tick = life.currentTick;
  const ageStr = getAgeAtTick(sp, tick, life.totalTicks);

  // Apply World Modifier passive effects
  const wmEff = life.worldModifier.effect || {};
  life.vitality = clampStat(life.vitality + (wmEff.dv || 0));
  life.energy = clampStat(life.energy + (wmEff.de || 0));
  life.adaptation = clampStat(life.adaptation + (wmEff.da || 0));
  life.lineage = clampStat(life.lineage + (wmEff.dl || 0));
  if (hasRelic('rel_whale_heart')) life.vitality = clampStat(life.vitality + 5);
  if (hasRelic('rel_mom_schoolbag')) {
    life.adaptation = clampStat(life.adaptation + 2);
    life.lineage = clampStat(life.lineage + 3);
  }

  // Apply annual focus modifier
  if (life.focus === 'forage') {
    life.energy = clampStat(life.energy + 4);
    life.pathScores.tyrant += 2;
  } else if (life.focus === 'stealth') {
    life.vitality = clampStat(life.vitality + 4);
    life.energy = clampStat(life.energy - 1);
  } else if (life.focus === 'adapt') {
    const hasCeilingBreaker = life.organLevels.lungs >= 2 || life.traits.some(t => t.id === 't_mutant_gene' || t.id === 't_ceiling_breaker');
    const gain = (life.adaptation >= 72 && !hasCeilingBreaker) ? 2 : 5;
    life.adaptation = clampStat(life.adaptation + gain);
    life.pathScores.pioneer += 2;
  } else if (life.focus === 'kinship') {
    life.lineage = clampStat(life.lineage + 5);
    life.pathScores.dynasty += 2;
  }

  // Update parallel same-second cohorts
  const cohortReasons = [
    '在幼年破壳筛选期被掠食者截杀',
    '在古气候突变引发的饥荒中力竭',
    '在争夺领地与蜕壳期遭遇重创',
    '未能演化出抗灾器官，倒在大灾变前夕'
  ];
  life.cohorts.forEach((c, idx) => {
    if (c.alive) {
      const earlyFactor = tick <= 4 ? 1.25 : 0.45;
      if (Math.random() < c.mortalityRisk * earlyFactor) {
        c.alive = false;
        c.deathAgeText = ageStr;
        c.deathReason = state.gentleMode ? '在自然竞争中回归地球生态循环' : cohortReasons[(tick + idx) % cohortReasons.length];
      }
    }
  });

  // Philosophical Pause Check
  const pauseList = isModernHumanSpecies(sp) ? MODERN_PHILOSOPHICAL_PAUSES : PHILOSOPHICAL_PAUSES;
  const pauseObj = pauseList.find(p => p.stageTrigger === tick && !life.completedPauseTriggers.includes(tick));
  if (pauseObj && !state.autoChoice) {
    life.completedPauseTriggers.push(tick);
    life.gridCells[tick - 1] = { tick, status: 'pause', summary: `${ageStr}: ${pauseObj.title}` };
    life.pendingDecision = {
      type: 'pause',
      scene: 'mutation',
      ageStr,
      epochName: getEpochName(tick),
      title: pauseObj.title,
      desc: pauseObj.prompt,
      choices: [
        {
          label: '✨ 镌刻此刻感悟 · 怀揣生命敬畏继续前行 (+全属性微幅共鸣)',
          desc: '将这行跨物种思考存入家族血脉档案，并进入本阶段生态抉择',
          isPauseContinue: true
        }
      ]
    };
    playTone(659.25, 0.18, 'sine', 0.04);
    renderActiveDashboard();
    saveSession();
    return;
  }

  if (tick > life.totalTicks) {
    finishLife(true, `你圆满走完了第 ${life.generation} 世 ${sp.name} 波澜壮阔的 20 个生命阶段（享年 ${sp.maxAge} ${sp.ageUnit.split(' ')[0]}）。`);
    return;
  }

  const stageData = generateDynamicStageForTick(life, tick);
  state.stageEnemyEmoji = stageData.enemyEmoji || '⚡';
  state.stageEnemyLabel = stageData.enemyLabel || '命运分岔口';
  state.stageSceneType = stageData.scene || 'duel';

  const bfBanner = document.getElementById('butterflyAlertBanner');
  const bfText = document.getElementById('butterflyAlertText');
  if (stageData.butterflyTriggered) {
    bfBanner.classList.remove('hidden');
    bfText.innerHTML = `<strong>命运蝴蝶效应已触发：</strong>${stageData.butterflyTriggered}`;
    addStageFloatingText('🦋 命运蝴蝶效应触发！', '#fbbf24', 320, 100);
  } else {
    bfBanner.classList.add('hidden');
  }

  if (state.autoChoice) {
    resolveStageChoice(stageData, stageData.choices[0], ageStr, true);
  } else {
    life.pendingDecision = {
      type: 'decision',
      scene: stageData.scene || 'duel',
      ageStr,
      epochName: stageData.epochName || getEpochName(tick),
      stageData,
      title: stageData.title,
      desc: stageData.event,
      choices: stageData.choices
    };
    playTone(587.33, 0.14, 'triangle', 0.05);
    renderActiveDashboard();
    saveSession();
  }
}

function resolveStageChoice(stageData, choice, ageStr, isAuto = false) {
  const life = state.activeLife;
  if (!life || life.isDead || !choice) return;

  life.decisionsMadeCount++;

  // Upgrade concrete anatomical organ if choice specifies organUpgrade!
  if (choice.organUpgrade && life.organLevels[choice.organUpgrade] !== undefined) {
    const oldLv = life.organLevels[choice.organUpgrade];
    if (oldLv < 3) life.organLevels[choice.organUpgrade] = oldLv + 1;
    state.lastUpgradedOrgan = choice.organUpgrade;
    const meta = getActiveOrganMetaList(life.species).find(m => m.key === choice.organUpgrade);
    if (meta) {
      addStageFloatingText(`🔬 器官具象进化：${meta.name} Lv.${life.organLevels[choice.organUpgrade]}!`, '#22d3ee', 250, 85);
    }
  }

  const armorShieldBonus = life.organLevels.armor * 2;
  const rawDv = choice.dv < 0 && stageData.scene === 'cataclysm' && hasRelic('rel_meteor_core')
    ? Math.ceil(choice.dv * 0.67) : (choice.dv || 0);
  const effectiveDv = rawDv < 0 ? Math.min(0, rawDv + armorShieldBonus) : rawDv;

  life.vitality = clampStat(life.vitality + effectiveDv);
  const energyDelta = choice.de < 0 && hasRelic('rel_dad_bicycle') ? Math.ceil(choice.de * 0.75) : (choice.de || 0);
  life.energy = clampStat(life.energy + energyDelta);
  if (hasRelic('rel_astral_key')) state.gameLoop.dnaPoints += 1;

  const hasCeilingBreaker = life.organLevels.lungs >= 2 || life.traits.some(t => t.id === 't_mutant_gene' || t.id === 't_ceiling_breaker');
  const rawDa = choice.da || 0;
  const adaptDelta = (life.adaptation >= 72 && rawDa > 0 && !hasCeilingBreaker) ? Math.ceil(rawDa * 0.45) : rawDa;
  life.adaptation = clampStat(life.adaptation + adaptDelta);
  life.lineage = clampStat(life.lineage + (choice.dl || 0));

  const pType = choice.path || 'pioneer';
  const pGain = choice.pathGain || 12;
  if (life.pathScores[pType] !== undefined) {
    life.pathScores[pType] += pGain;
  }

  if (choice.butterflyFlag) {
    life.flags[choice.butterflyFlag] = true;
  }

  // Offspring gain (crucial for continuing to Generation 2, 3, N!)
  if (choice.offspringGain) {
    life.offspringCount += choice.offspringGain;
    if (isModernHumanSpecies(life.species) && life.familyBonds.child.name === '尚无子女') {
      life.familyBonds.child = { name: '子女', status: '一同生活', intimacy: 65, alive: true };
    }
    addStageFloatingText(`🪺 诞下子嗣 +${choice.offspringGain} 世代! (可延续下一世)`, '#c084fc', 240, 120);
  } else if (!isModernHumanSpecies(life.species) && (choice.dl || 0) >= 24 && life.currentTick >= 8) {
    life.offspringCount += 1;
    addStageFloatingText(`🪺 新幼崽破壳跟随! (血脉+1)`, '#c084fc', 240, 120);
  }

  if (choice.traitGain && !life.traits.some(t => t.id === choice.traitGain.id)) {
    life.traits.unshift(choice.traitGain);
  }

  // v7.0 Update Family & Loved Ones Emotional Bonds!
  if (choice.bondChange && life.familyBonds) {
    Object.keys(choice.bondChange).forEach(roleKey => {
      const patch = choice.bondChange[roleKey];
      if (life.familyBonds[roleKey]) {
        if (patch.name) life.familyBonds[roleKey].name = patch.name;
        if (patch.status) life.familyBonds[roleKey].status = patch.status;
        if (patch.alive !== undefined) life.familyBonds[roleKey].alive = patch.alive;
        if (patch.intimacy !== undefined) {
          life.familyBonds[roleKey].intimacy = Math.min(100, (life.familyBonds[roleKey].intimacy || 50) + patch.intimacy);
        }
      }
    });
  }

  // v7.0 Trigger 3.5-Second Stage Choreography Climax on the Kairosoft Canvas!
  state.choiceChoreography = {
    type: choice.choreoType || (pType === 'dynasty' ? 'hug_family' : pType === 'pioneer' ? 'study_spark' : 'career_hustle'),
    text: choice.choreoText || `🎬 ${choice.outcome ? choice.outcome.slice(0, 34) : choice.label.slice(0, 28)}`,
    timer: 210,
    maxTimer: 210
  };

  // v8.0 Trigger Spore DNA Absorption Stream, Clash Slashes & Metamorphosis Shockwaves!
  state.hoveredChoicePath = null;
  state.hoveredOrganKey = null;
  state.stageLungeOffset = 68;
  const clashCol = pType === 'tyrant' ? '#f43f5e' : pType === 'dynasty' ? '#c084fc' : '#22d3ee';
  spawnEvolutionDnaStream(675, 185, 255, 185, clashCol, 18);
  spawnStageClashSlash(590, 185, clashCol);
  spawnKairoOrbs(330, 195, effectiveDv, choice.de || 0, adaptDelta, choice.dl || 0);
  triggerKairoSpeech(
    choice.organUpgrade
      ? `🔨 强化成功! ${(getActiveOrganMetaList(life.species).find(m => m.key === choice.organUpgrade) || {name:'能力'}).name} Lv+1!`
      : `✨ ${choice.label.slice(0, 14)}`,
    pType === 'tyrant' ? '⚔️' : pType === 'dynasty' ? '🌺' : '💡',
    220
  );
  if (pType === 'tyrant') {
    triggerStageScreenShake();
    addStageSonarRipple(300, 185, 'rgba(244, 63, 94, 0.85)');
    playChord([330, 440, 554.37], 0.18, 'sawtooth');
  } else if (pType === 'dynasty') {
    addStageSonarRipple(260, 185, 'rgba(168, 85, 247, 0.85)');
    playChord([440, 554.37, 659.25], 0.2, 'sine');
  } else {
    addStageSonarRipple(260, 185, 'rgba(6, 182, 212, 0.85)');
    playChord([523.25, 659.25, 783.99], 0.2, 'triangle');
  }

  const capEl = document.getElementById('stageLiveActionCaption');
  if (capEl) {
    capEl.textContent = `✨ 阶段 ${life.currentTick} 演绎：${choice.outcome || stageData.event}`;
  }

  const unselected = (stageData.choices || [])
    .filter(c => c.label !== choice.label)
    .map(c => c.label.replace(/^[^\s]+\s/, '').slice(0, 18));
  life.crossroadsHistory.unshift({
    stage: life.currentTick,
    ageStr,
    title: stageData.title,
    chosenLabel: choice.label,
    path: pType,
    outcome: choice.outcome,
    dv: effectiveDv,
    de: choice.de || 0,
    da: adaptDelta,
    dl: choice.dl || 0,
    unselectedLabel: unselected[0] || '另一条未知人生路'
  });

  life.gridCells[life.currentTick - 1] = {
    tick: life.currentTick,
    status: pType,
    summary: `阶段${life.currentTick} (${ageStr}) · ${stageData.title} ➔ ${choice.label}`
  };

  life.chronicle.unshift({
    ageLabel: ageStr,
    title: `${stageData.title} ${isAuto ? '(本能抉择)' : ''}`,
    text: `【选择：${choice.label}】${choice.outcome || stageData.event}`,
    starred: Boolean(choice.isSpecialBranch || choice.traitGain || choice.offspringGain),
    type: pType
  });

  life.pendingDecision = null;
  checkMortalityOrCompletion(ageStr, choice);
  if (!life.isDead) {
    renderActiveDashboard();
    saveSession();
    scheduleNextTick();
  }
}

function advanceThroughPause(life, pause, auto = false) {
  const noteInput = document.getElementById('philosophicalNoteInput');
  const note = noteInput.value.trim().slice(0, 300);
  life.vitality = clampStat(life.vitality + 4);
  life.adaptation = clampStat(life.adaptation + 4);
  life.chronicle.unshift({
    ageLabel: pause.ageStr, title: pause.title,
    text: note || '你停下来，回望了这段生命。',
    userText: Boolean(note),
    starred: true, type: 'pause'
  });
  noteInput.value = '';
  const stageData = generateDynamicStageForTick(life, life.currentTick);
  state.stageEnemyEmoji = stageData.enemyEmoji;
  state.stageEnemyLabel = stageData.enemyLabel;
  state.stageSceneType = stageData.scene;
  life.pendingDecision = {
    type: 'decision', scene: stageData.scene || 'duel', ageStr: pause.ageStr,
    epochName: stageData.epochName || getEpochName(life.currentTick), stageData,
    title: stageData.title, desc: stageData.event, choices: stageData.choices
  };
  if (auto) resolveStageChoice(stageData, stageData.choices[0], pause.ageStr, true);
  else {
    renderActiveDashboard();
    saveSession();
  }
}

function checkMortalityOrCompletion(ageStr, lastChoice = null) {
  const life = state.activeLife;
  const sp = life.species;
  const isMod = isModernHumanSpecies(sp);
  const tierCode = (life.worldModifier && life.worldModifier.tierCode) || 'small_town';
  const baseHazard = (life.worldModifier && life.worldModifier.hazardRate) || 0.02;

  if (lastChoice && lastChoice.butterflyFlag === 'martyr_sacrifice' && life.vitality <= 28) {
    finishLife(false, `在 ${ageStr} 席卷天地的浩劫中，你用自己的血肉之躯为后代挡下了致命危机。你虽倒下，但你守护的 ${life.offspringCount} 世代子嗣全部活到了新纪元！`);
    return;
  }

  // 1. Explicit high-risk choice mortality (e.g. untreated 40C childhood fever in poor village or 35yo extreme overwork)
  if (!state.gentleMode && lastChoice && lastChoice.deathRisk) {
    const vulnBonus = life.vitality < 45 ? 0.18 : 0;
    if (Math.random() < (lastChoice.deathRisk + vulnBonus)) {
      const suffix = life.offspringCount === 0
        ? ` ⚠️ 由于你在离世前尚未留下任何子女，第 ${life.generation} 世血脉就此断绝。`
        : ` 所幸你留下的 ${life.offspringCount} 名儿女将带着你的思念继续活下去。`;
      finishLife(false, (lastChoice.deathMessage || (isMod ? `在 ${ageStr} 因突发重症不幸离世。` : `你付出了超出体力所能承受的代价，生命停在 ${ageStr}。`)) + suffix);
      return;
    }
  }

  // 2. Stat depletion death (Vitality or Energy <= 12)
  if (life.vitality <= 12 || life.energy <= 10) {
    const noOffspringWarn = life.offspringCount === 0
      ? ` ⚠️ 由于你在倒下前尚未留下任何存活子嗣，家族血脉就此彻底断绝！`
      : ` 所幸你生前已育有 ${life.offspringCount} 世代存活后代，你的血脉仍可进入下一世！`;
    let reason;
    if (isMod) {
      reason = (life.energy <= 10
        ? `在 ${ageStr}（第 ${life.currentTick} 阶段），由于生计断绝与极度贫困交加，你在寒冬的出租屋里耗尽了最后一丝力气。`
        : `在 ${ageStr}（第 ${life.currentTick} 阶段），常年的劳累与疾病终于压垮了你的身体，你在医院急诊室的灯光下永远合上了双眼。`) + noOffspringWarn;
    } else {
      reason = (life.energy <= 10
        ? `在 ${ageStr}（第 ${life.currentTick} 阶段）因连续高强度消耗与食物匮乏，能量彻底耗竭。`
        : `在 ${ageStr}（第 ${life.currentTick} 阶段）因激烈死斗与伤势累积，流尽最后一滴血。`) + noOffspringWarn;
    }
    finishLife(false, reason);
    return;
  }

  // 3. Birth Country / Tier Structural Mortality Hazard (War zones, poverty, or low health mid-life crises)
  if (!state.gentleMode && life.currentTick < life.totalTicks) {
    let stageHazard = 0;
    if (isMod) {
      if (tierCode === 'war_poverty' && (life.vitality < 58 || life.energy < 42)) {
        stageHazard = baseHazard * (life.vitality < 42 ? 1.45 : 0.85);
      } else if (tierCode === 'mountain_village' && life.vitality < 48) {
        stageHazard = baseHazard * 1.1;
      } else if (life.vitality < 38) {
        stageHazard = ((45 - life.vitality) / 100) * 0.32;
      }
    } else if (life.vitality < 28) {
      stageHazard = ((32 - life.vitality) / 100) * 0.25;
    }

    if (stageHazard > 0 && Math.random() < stageHazard) {
      const noOffspringWarn = life.offspringCount === 0
        ? ` ⚠️ 因尚未留下任何存活后代，你的第 ${life.generation} 世血脉在此彻底消失！`
        : ` 但你留下的 ${life.offspringCount} 世代后代将替你继续活下去！`;
      const modCauses = {
        war_poverty: `在 ${ageStr}，由于战火波及、饮水污染与缺医少药，一场原本可以治愈的急症夺走了你年轻的生命。全球每天都有无数生在战乱与赤贫中的生命像这样无声凋零。`,
        mountain_village: `在 ${ageStr}，因为常年繁重劳作与偏远地区急救条件有限，你在送往县医院的半路上遗憾离世。`,
        default: `在 ${ageStr}，因长期身体透支引发急性重症抢救无效，你的人生永远定格在了这一年。`
      };
      const msg = isMod ? (modCauses[tierCode] || modCauses.default) : `在 ${ageStr} 因重伤虚弱未能躲过天敌突袭而陨落。`;
      finishLife(false, msg + noOffspringWarn);
      return;
    }
  }

  if (life.currentTick >= life.totalTicks) {
    if (!isMod && life.lineage >= 65 && life.offspringCount === 0) {
      life.offspringCount = 1;
    }
    const dom = getDominantPathInfo(life);
    const endMsg = isMod
      ? `在至亲的簇拥与怀念中，你走完了 ${life.individualName} 跨越 ${sp.maxAge} 载的人间悲欢（出身：${life.worldModifier ? life.worldModifier.name : '现代家庭'}），你爱过、痛过、奋斗过，不负此生。`
      : `你以【${dom.label}】之姿，圆满走完了第 ${life.generation} 世 ${sp.name} 波澜壮阔的 20 个生命阶段（享年 ${sp.maxAge} ${sp.ageUnit.split(' ')[0]}）！`;
    finishLife(true, endMsg);
  }
}

function evaluateEndingArchetype(life) {
  const { tyrant, dynasty, pioneer } = life.pathScores;
  if (life.flags.martyr_sacrifice) return ENDINGS_CATALOG.find(e => e.id === 'martyr_parent');
  if (!life.survivedToEnd) {
    if (life.offspringCount === 0 && life.generation >= 1 && life.currentTick > 6) {
      return ENDINGS_CATALOG.find(e => e.id === 'era_elegy');
    }
    if (life.currentTick <= 6) return ENDINGS_CATALOG.find(e => e.id === 'type_iii_statistic');
    if (life.flags.made_nemesis && tyrant >= 25) return ENDINGS_CATALOG.find(e => e.id === 'nemesis_reckoning');
    return ENDINGS_CATALOG.find(e => e.id === 'era_elegy');
  }
  if (life.flags.survived_cataclysm_miracle) return ENDINGS_CATALOG.find(e => e.id === 'cataclysm_survivor');
  if (life.flags.chose_lagerstatte && life.fossilized) return ENDINGS_CATALOG.find(e => e.id === 'museum_masterpiece');
  if (life.traits.some(t => t.id === 't_immortal_cell') && life.vitality >= 75) return ENDINGS_CATALOG.find(e => e.id === 'living_fossil');
  if (life.traits.some(t => t.id === 't_symbiosis')) return ENDINGS_CATALOG.find(e => e.id === 'symbiotic_architect');
  if (tyrant >= dynasty && tyrant >= pioneer && tyrant >= 30) return ENDINGS_CATALOG.find(e => e.id === 'apex_monarch');
  if ((dynasty >= tyrant && dynasty >= pioneer && dynasty >= 30) || state.dynasty.generation >= 2) return ENDINGS_CATALOG.find(e => e.id === 'dynasty_progenitor');
  if (pioneer >= tyrant && pioneer >= dynasty && (pioneer >= 30 || life.adaptation >= 80)) return ENDINGS_CATALOG.find(e => e.id === 'evolutionary_pioneer');
  return ENDINGS_CATALOG.find(e => e.id === 'circle_of_gaia');
}

function generateWhatIfCounterfactuals(life) {
  const items = [];
  const sp = life.species;
  items.push({
    stage: '器官进化平行宇宙',
    title: `如果本世你主修另一套解剖器官…`,
    desc: `本世你将颚齿进化至 Lv.${life.organLevels.jaws}、心肺至 Lv.${life.organLevels.lungs}、背甲至 Lv.${life.organLevels.armor}。若在青年期把营养全部注入【🦵飞羽翼膜/腕骨】与【👁️方解石复眼】，你将以完全不同的立体掠食形态改写战局！`
  });
  if (life.offspringCount > 0) {
    items.push({
      stage: '血脉传承推演',
      title: `迈向第 ${life.generation + 1} 世：如果子嗣遭遇新天命词缀…`,
      desc: `你成功留下了 ${life.offspringCount} 世代存活后代！进入下一世后，子代将直接继承你50%~70%的器官等级，但也将面对全新随机刷新的古气候天命与未知奇遇。`
    });
  } else {
    items.push({
      stage: '断代复盘警示',
      title: '如果刚才在第11/13阶段优先选择【求偶繁衍】…',
      desc: '本世因过度专注孤高搏杀或遭遇意外，未能在死前留下存活子嗣，导致家族血脉在此断绝。下一局切记在成年期至少完成一次求偶育幼！'
    });
  }
  items.push({
    stage: '重玩差异化预告',
    title: `再次游玩「${sp.name}」会遇到什么不同？`,
    desc: `系统已将你本世经历的 ${life.usedEventIds.length} 个随机事件记入去重库。现在点击重玩或进入下一世，将优先抽取你尚未体验过的全新生态危机与古气候词缀！`
  });
  return items;
}

function finishLife(survivedFull, causeText) {
  stopSimTimer();
  const life = state.activeLife;
  if (!life || life.isDead) return;
  const sp = life.species;
  life.pendingDecision = null;
  life.isDead = true;
  life.survivedToEnd = survivedFull;
  life.deathTick = life.currentTick;
  life.causeOfDeath = causeText;
  life.lineageExtinct = (life.offspringCount === 0);

  if (!survivedFull && life.currentTick >= 1 && life.gridCells[life.currentTick - 1]) {
    life.gridCells[life.currentTick - 1].status = 'dead';
  }

  let prob = sp.fossilBaseChance + (life.adaptation / 100) * 0.06 + (life.organLevels.armor * 0.04);
  if (life.flags.chose_lagerstatte) prob = Math.max(0.88, prob + 0.75);
  if (life.traits.some(t => t.id === 't_cataclysm_defier')) prob = Math.min(0.75, prob * 3.2);
  if (life.flags.chose_gaia_return) prob = 0.01;
  prob = life.flags.chose_lagerstatte && survivedFull ? 1 : Math.max(0, Math.min(1, prob));
  life.fossilProbability = prob;
  life.fossilized = Math.random() < prob;

  const endingObj = evaluateEndingArchetype(life);
  life.endingArchetype = endingObj;
  if (endingObj && !state.unlockedEndings.includes(endingObj.id)) {
    state.unlockedEndings.push(endingObj.id);
  }

  const finalAgeStr = getAgeAtTick(sp, life.currentTick, life.totalTicks);
  const domPath = getDominantPathInfo(life);

  // Update Dynasty Lineage State!
  state.dynasty.totalYearsSpanned += 1;
  state.dynasty.totalOffspringEver += life.offspringCount;
  state.dynasty.ancestors.unshift({
    gen: life.generation,
    name: life.individualName,
    nameIsCustom: Boolean(life.nameIsCustom),
    speciesId: sp.id,
    speciesName: sp.name,
    emoji: sp.emoji,
    finalAge: finalAgeStr,
    offspringCount: life.offspringCount,
    endingTitle: endingObj ? endingObj.title : domPath.label,
    organsSummary: `颚Lv.${life.organLevels.jaws} 甲Lv.${life.organLevels.armor} 肺Lv.${life.organLevels.lungs}`
  });

  const record = {
    id: 'life_' + Date.now(),
    isModernHuman: isModernHumanSpecies(sp),
    worldModifier: life.worldModifier || null,
    familyBonds: life.familyBonds ? JSON.parse(JSON.stringify(life.familyBonds)) : null,
    crossroadsHistory: life.crossroadsHistory ? [...life.crossroadsHistory].reverse() : [],
    generation: life.generation,
    speciesId: sp.id,
    speciesName: sp.name,
    latin: sp.latin,
    emoji: sp.emoji,
    eraName: sp.eraName,
    individualName: life.individualName,
    nameIsCustom: Boolean(life.nameIsCustom),
    finalAge: finalAgeStr,
    decisionsMadeCount: life.decisionsMadeCount,
    dominantPathLabel: domPath.label,
    organLevels: { ...life.organLevels },
    pathScores: { ...life.pathScores },
    endingArchetype: endingObj,
    whatIfs: generateWhatIfCounterfactuals(life),
    traits: [...life.traits],
    survivedFull,
    offspringCount: life.offspringCount,
    lineageExtinct: life.lineageExtinct,
    fossilized: life.fossilized,
    fossilProbabilityPct: (prob * 100).toFixed(1) + '%',
    causeOfDeath: causeText,
    starredMoments: life.chronicle.filter(c => c.starred).map(c => `${c.ageLabel}: ${c.title}`),
    timestamp: new Date().toLocaleDateString('zh-CN')
  };

  life.recordId = record.id;
  state.pastLives.unshift(record);
  switchSimSubview('ending');
  saveSession();
  renderEndingReport(record);
  playChord([392.00, 493.88, 587.33], 0.28, 'sine');
}

// Advance to Generation N+1 carrying over inherited organs and traits!
function advanceToNextGeneration(evolveToNextSpecies = false, forcedSpecies = null) {
  const latest = state.pastLives.find(record => record.id === state.activeLife?.recordId);
  if (state.simSubview !== 'ending' || !latest || latest.offspringCount <= 0 || saveLocked) {
    showToast('💔 本世未留下存活子嗣，血脉已断绝，请重新开启第 1 世！');
    return;
  }

  state.dynasty.generation = latest.generation + 1;

  // Carry over inherited organ levels (each organ >= 1 carries over 1 to 2 levels to the child!)
  const parentOrgans = latest.organLevels || {};
  state.dynasty.inheritedOrgans = {
    jaws: Math.min(2, Math.ceil((parentOrgans.jaws || 0) * 0.65)),
    armor: Math.min(2, Math.ceil((parentOrgans.armor || 0) * 0.65)),
    lungs: Math.min(2, Math.ceil((parentOrgans.lungs || 0) * 0.65)),
    senses: Math.min(2, Math.ceil((parentOrgans.senses || 0) * 0.65)),
    locomotion: Math.min(2, Math.ceil((parentOrgans.locomotion || 0) * 0.65)),
    crest: Math.min(2, Math.ceil((parentOrgans.crest || 0) * 0.65))
  };

  // Carry over up to 2 top traits marked as [祖传]
  state.dynasty.inheritedTraits = (latest.traits || []).slice(0, 2).map(tr => ({
    ...tr,
    name: tr.name.includes('[祖传]') ? tr.name : `[祖传] ${tr.name}`
  }));

  let nextSpeciesId = forcedSpecies || latest.speciesId;
  if (evolveToNextSpecies && !latest.isModernHuman) {
    const curIdx = SPECIES_DB.findIndex(s => s.id === latest.speciesId);
    const nextIdx = (curIdx + 1) % SPECIES_DB.length;
    nextSpeciesId = SPECIES_DB[nextIdx].id;
    showToast(`🚀 宏演化跃迁成功！家族血脉在第 ${state.dynasty.generation} 世进化为「${SPECIES_DB[nextIdx].name}」！`);
  } else {
    showToast(`🧬 继承父母优良器官，正式开启家族【第 ${state.dynasty.generation} 世】！`);
  }

  prepareBirthRegistration(nextSpeciesId, true);
}

function clampStat(v) {
  return Math.max(0, Math.min(100, Math.round(v)));
}


// ==================== 18. RENDER ACTIVE SIMULATION DASHBOARD ====================
function renderActiveDashboard() {
  const life = state.activeLife;
  if (!life || life.isDead) return;
  const sp = life.species;
  updateActiveLayout(isModernHumanSpecies(sp));
  const ageStr = getAgeAtTick(sp, life.currentTick, life.totalTicks);
  document.getElementById('annualFocusSelect').value = life.focus;
  const progressPct = Math.round((life.currentTick / life.totalTicks) * 100);
  const domPath = getDominantPathInfo(life);

  document.getElementById('activeGenerationTag').textContent = toText(`第 ${life.generation} 世`, `Gen ${life.generation}`);
  document.getElementById('activeEmojiAvatar').textContent = sp.emoji;
  document.getElementById('activeSpeciesName').textContent = speciesName(sp);
  document.getElementById('activeIndividualTag').textContent = lifeName(life);
  document.getElementById('activeArchetypeBadge').textContent = domPath.label;
  document.getElementById('activeWorldModBadge').textContent = life.worldModifier ? translateText(life.worldModifier.name) : '';

  const isMod = isModernHumanSpecies(sp);
  const morphName = isMod
    ? (life.currentTick <= 3 ? '🍼 童年启蒙期' : life.currentTick <= 7 ? '🎓 青春求学期 (小学→大学)' : life.currentTick <= 15 ? '💼 成家立业黄金期' : '🍵 幸福荣休与天伦期')
    : (life.currentTick <= 4 ? '🌱 幼体破壳期 (0.6x体型)' : life.currentTick <= 9 ? '🌿 亚成体器官重塑期 (0.85x体型)' : life.currentTick <= 15 ? '🦖 成年完全体 (1.1x体型)' : '👑 传奇暮年/泰坦体 (1.26x体型)');
  document.getElementById('activeMorphStageLabel').textContent = morphName;
  document.getElementById('activeAgeDisplay').textContent = `刻度: ${ageStr}`;
  document.getElementById('activeEraDisplay').textContent = `${translateText(sp.eraName)} · O₂ ${sp.o2Pct}% · ${sp.tempC} °C`;
  document.getElementById('activeLifeProgressBar').style.width = `${Math.max(5, progressPct)}%`;
  document.getElementById('activeStageLabel').textContent = `阶段 ${life.currentTick} / ${life.totalTicks} · 已做抉择 ${life.decisionsMadeCount} 次`;

  // Stage HUD Overlays
  document.getElementById('stageBiomeTitle').textContent = `${translateText(sp.eraName)} · ${translateText(sp.habitat.split('·')[0].trim())}`;
  document.getElementById('stageWeatherBadge').textContent = state.stageWeatherMode === 'cataclysm'
    ? '☄️ 灭绝灾变降临！'
    : `🎲 ${life.worldModifier ? life.worldModifier.name : ''}`;
  const offBadge = document.getElementById('stageOffspringBadge');
  offBadge.textContent = life.offspringCount > 0
    ? `🪺 存活子嗣: ${life.offspringCount} 世代 (✓已锁定第${life.generation + 1}世继承权!)`
    : `⚠️ 存活子嗣: 0 (需≥1方可开启第${life.generation + 1}世!)`;
  offBadge.className = life.offspringCount > 0
    ? 'px-2.5 py-1 rounded-lg bg-emerald-950/90 backdrop-blur-md border border-emerald-400/60 text-[11px] font-bold text-emerald-200'
    : 'px-2.5 py-1 rounded-lg bg-rose-950/90 backdrop-blur-md border border-rose-500/50 text-[11px] font-bold text-rose-200';

  document.getElementById('hudPathTyrant').textContent = `⚔️${life.pathScores.tyrant}`;
  document.getElementById('hudPathDynasty').textContent = `🧬${life.pathScores.dynasty}`;
  document.getElementById('hudPathPioneer').textContent = `🌌${life.pathScores.pioneer}`;
  const rankObj = computeAwakeningRank(life.organLevels, life.pathScores, life.generation || 1);
  const rankBadgeEl = document.getElementById('stageAwakeningRankBadge');
  if (rankBadgeEl) {
    rankBadgeEl.textContent = `⚜️ 血脉阶位：${rankObj.title}`;
  }

  // X-Ray & Pause & Auto buttons
  const xrayBtn = document.getElementById('toggleXrayBtn');
  xrayBtn.textContent = `🩻 解剖透视: ${state.xrayMode ? '开' : '关'}`;
  xrayBtn.className = state.xrayMode
    ? 'px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/25 text-cyan-200 border border-cyan-400/50 transition'
    : 'px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-slate-400 border border-slate-700 transition';

  document.getElementById('simPauseBtn').textContent = state.isPaused ? '▶ 继续' : '❚❚ 暂停';
  const autoBtn = document.getElementById('autoChoiceToggleBtn');
  autoBtn.textContent = `🤖 自动: ${state.autoChoice ? '开' : '关'}`;

  // Adapt Stage Buttons & HUD Labels for Modern Human vs Natural Species
  const scanBtn = document.getElementById("stageActionScanBtn");
  const roarBtn = document.getElementById("stageActionRoarBtn");
  const dashBtn = document.getElementById("stageActionDashBtn");
  if (scanBtn && roarBtn && dashBtn) {
    if (isMod) {
      scanBtn.innerHTML = "<span>📚</span><span>挑灯夜读 (+学识)</span>";
      roarBtn.innerHTML = "<span>❤️</span><span>陪伴家人 (+幸福)</span>";
      dashBtn.innerHTML = "<span>💼</span><span>冲刺项目 (+财富)</span>";
    } else {
      scanBtn.innerHTML = "<span>👁️</span><span>感官探测 (+感官视觉)</span>";
      roarBtn.innerHTML = "<span>🔊</span><span>求偶/威慑 (+华冠共鸣)</span>";
      dashBtn.innerHTML = "<span>🦷</span><span>扑咬撕裂 (+颚齿演练)</span>";
    }
  }
  if (isMod) {
    offBadge.textContent = life.offspringCount > 0
      ? `👶 膝下儿女: ${life.offspringCount} 人 (✓已锁定第${life.generation + 1}代家族继承人!)`
      : `💑 婚姻与子女: 暂未生育 (30岁后成家生子可开启下一代!)`;
  }

  // Render Real-Time Anatomical Blueprint & 6 Organ Bars!
  renderAnatomyBlueprintPanel(life);
  syncBossForCurrentStage();
  updatePilotDisplay();
  updateFirstLifeGuide(life);
  renderCultivationDock();

  // Render Multi-Generational Dynasty Tracker Card
  document.getElementById('dynastyGenStatusBadge').textContent = `当前：第 ${life.generation} 世`;
  document.getElementById('dynastyLineageSummaryBox').innerHTML = `
    <div class="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
      <div class="text-[10px] text-slate-400">当前家族世系</div>
      <div class="text-sm font-bold text-amber-300 font-mono">第 ${life.generation} 世</div>
    </div>
    <div class="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
      <div class="text-[10px] text-slate-400">本世存活子嗣</div>
      <div class="text-sm font-bold ${life.offspringCount > 0 ? 'text-emerald-300' : 'text-rose-400'} font-mono">${life.offspringCount} 世代</div>
    </div>
    <div class="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
      <div class="text-[10px] text-slate-400">累计繁衍子孙</div>
      <div class="text-sm font-bold text-purple-300 font-mono">${state.dynasty.totalOffspringEver + life.offspringCount} 世代</div>
    </div>
  `;

  const ancEl = document.getElementById('dynastyAncestorsChain');
  if (!state.dynasty.ancestors.length) {
    ancEl.innerHTML = `<div class="text-slate-500 text-[11px] p-1.5">你是家族【第 1 世】初代始祖。在本世繁衍至少 1 个子代即可开启第 2 世！</div>`;
  } else {
    ancEl.innerHTML = state.dynasty.ancestors.map(a => `
      <div class="p-2 rounded-lg bg-slate-950/80 border border-amber-500/30 flex items-center justify-between gap-2">
        <span class="text-amber-200 font-semibold truncate">${a.emoji} 第${a.gen}世: ${escapeHtml(a.name)} (${a.organsSummary})</span>
        <span class="text-[10px] font-mono text-emerald-300 shrink-0">传下 ${a.offspringCount} 子嗣</span>
      </div>
    `).join('');
  }

  // 4 Status Bars
  document.getElementById('statVitalityVal').textContent = life.vitality;
  document.getElementById('statVitalityBar').style.width = `${life.vitality}%`;
  document.getElementById('statEnergyVal').textContent = life.energy;
  document.getElementById('statEnergyBar').style.width = `${life.energy}%`;
  document.getElementById('statEnergySubtext').textContent = formatEnergyText(sp, life.energy);
  document.getElementById('statAdaptVal').textContent = life.adaptation;
  document.getElementById('statAdaptBar').style.width = `${life.adaptation}%`;
  document.getElementById('statLineageVal').textContent = life.lineage;
  document.getElementById('statLineageBar').style.width = `${life.lineage}%`;

  // Active Genetic Traits Panel
  document.getElementById('traitCountBadge').textContent = `${life.traits.length} 个已觉醒性状`;
  const traitsEl = document.getElementById('activeTraitsContainer');
  if (!life.traits.length) {
    traitsEl.innerHTML = `<span class="text-xs text-slate-500">随着抉择推进，你将在此觉醒专属器官基因词条……</span>`;
  } else {
    traitsEl.innerHTML = life.traits.map(tr => {
      const isAncestral = tr.name.includes('[祖传]');
      const pillCls = isAncestral ? 'bg-amber-950/70 border-amber-400/60 text-amber-200' :
                      tr.type === 'tyrant' ? 'bg-rose-950/60 border-rose-500/40 text-rose-200' :
                      tr.type === 'dynasty' ? 'bg-purple-950/60 border-purple-500/40 text-purple-200' :
                      'bg-cyan-950/60 border-cyan-500/40 text-cyan-200';
      return `
        <div class="px-3 py-1.5 rounded-xl border ${pillCls} text-xs flex items-center gap-1.5 shadow-sm" title="${tr.desc}">
          <span class="font-bold">${tr.name}</span>
          <span class="text-[10px] opacity-80 hidden sm:inline">· ${tr.desc}</span>
        </div>
      `;
    }).join('');
  }

  // Branching Path Bars & Crossroads Chain
  document.getElementById('dominantPathBadge').textContent = domPath.label;
  const pTyrant = Math.min(100, Math.round((life.pathScores.tyrant / 65) * 100));
  const pDynasty = Math.min(100, Math.round((life.pathScores.dynasty / 65) * 100));
  const pPioneer = Math.min(100, Math.round((life.pathScores.pioneer / 65) * 100));

  document.getElementById('pathBarTyrant').style.width = `${Math.max(6, pTyrant)}%`;
  document.getElementById('pathBarTyrantLabel').textContent = `${life.pathScores.tyrant} 点 ${life.pathScores.tyrant >= 30 ? '★已激活【绝代霸主】' : ''}`;
  document.getElementById('pathBarDynasty').style.width = `${Math.max(6, pDynasty)}%`;
  document.getElementById('pathBarDynastyLabel').textContent = `${life.pathScores.dynasty} 点 ${life.pathScores.dynasty >= 30 ? '★已激活【万代始祖】' : ''}`;
  document.getElementById('pathBarPioneer').style.width = `${Math.max(6, pPioneer)}%`;
  document.getElementById('pathBarPioneerLabel').textContent = `${life.pathScores.pioneer} 点 ${life.pathScores.pioneer >= 30 ? '★已激活【跨界先驱】' : ''}`;

  const chainEl = document.getElementById('branchingCrossroadsChain');
  if (!life.crossroadsHistory.length) {
    chainEl.innerHTML = `<div class="text-slate-500">尚未走过分岔路口……</div>`;
  } else {
    chainEl.innerHTML = life.crossroadsHistory.slice(0, 8).map(cr => {
      const pBadge = cr.path === 'tyrant' ? '<span class="text-rose-400 font-bold">[⚔️霸主]</span>' :
                     cr.path === 'dynasty' ? '<span class="text-purple-400 font-bold">[🧬始祖]</span>' :
                     '<span class="text-cyan-400 font-bold">[🌌先驱]</span>';
      return `
        <div class="p-2 rounded-lg bg-slate-900/80 border border-slate-800/90 flex flex-col gap-0.5">
          <div class="flex items-center justify-between">
            <span class="font-semibold text-slate-200">${pBadge} 阶段${cr.stage}: ${cr.title}</span>
            <span class="font-mono text-[10px] text-slate-400">${cr.ageStr}</span>
          </div>
          <div class="text-emerald-300 truncate">✓ 你的选择：${cr.chosenLabel}</div>
          <div class="text-[10px] text-slate-500 truncate">✗ 未选平行路：${cr.unselectedLabel}</div>
        </div>
      `;
    }).join('');
  }

  // Decision Box with Graphical Storyboard Illustration!
  const decBox = document.getElementById('decisionPromptContainer');
  const philWrap = document.getElementById('philosophicalInputWrap');
  if (life.pendingDecision) {
    decBox.classList.remove('hidden');
    const pd = life.pendingDecision;
    document.getElementById('decisionTypeBadge').textContent = pd.type === 'pause'
      ? toText('暂停片刻', 'A moment to reflect')
      : toText(`抉择 ${life.currentTick}/20`, `Decision ${life.currentTick}/20`);
    document.getElementById('decisionEpochBadge').textContent = pd.epochName || getEpochName(life.currentTick);
    document.getElementById('decisionAgeTag').textContent = `当前年龄: ${pd.ageStr}`;
    document.getElementById('decisionTitle').textContent = pd.title;
    document.getElementById('decisionDesc').textContent = pd.desc;

    // Render Dynamic Graphical Storyboard SVG!
    const storyboard = document.getElementById('decisionStoryboardWrap');
    storyboard.classList.toggle('hidden', isMod);
    if (!isMod) renderDecisionStoryboardSVG(pd.scene || 'duel', sp, pd.title);

    if (pd.type === 'pause') {
      philWrap.classList.remove('hidden');
    } else {
      philWrap.classList.add('hidden');
    }

    // Render Live Loved Ones Bond Strip (#liveBondsStrip)
    const bondsStrip = document.getElementById('liveBondsStrip');
    if (bondsStrip) {
      if (isMod && life.familyBonds) {
        const b = life.familyBonds;
        const items = [
          { icon: '👩', role: b.mother.name, status: b.mother.status, alive: b.mother.alive, col: 'text-pink-300 border-pink-500/30' },
          { icon: '👨', role: b.father.name, status: b.father.status, alive: b.father.alive, col: 'text-sky-300 border-sky-500/30' },
          { icon: '💌', role: b.partner.name, status: b.partner.status, alive: b.partner.alive, col: 'text-purple-300 border-purple-500/30' },
          { icon: '👶', role: life.offspringCount > 0 ? `${b.child.name} (${life.offspringCount}人)` : '膝下子女', status: life.offspringCount > 0 ? b.child.status : '暂未生育', alive: true, col: 'text-amber-300 border-amber-500/30' }
        ];
        bondsStrip.innerHTML = items.map(it => `
          <div class="px-3 py-1.5 rounded-xl bg-slate-950/85 border ${it.col} flex items-center justify-between gap-2">
            <span class="font-bold truncate">${it.icon} ${it.role}</span>
            <span class="text-[11px] ${it.alive === false ? 'text-slate-500 line-through' : 'text-slate-300'} truncate">${it.status}</span>
          </div>
        `).join('');
      } else {
        bondsStrip.innerHTML = `
          <div class="col-span-2 sm:col-span-4 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
            <span>🧬 当前演化纪元：${sp.eraName} · ${sp.habitat}</span>
            <span class="text-amber-300 font-semibold">🪺 本世已繁衍后代：${life.offspringCount} 世代</span>
          </div>
        `;
      }
    }

    const choicesContainer = document.getElementById('decisionChoicesList');
    document.getElementById('philosophicalNoteInput').value = pd.note ?? '';
    const activeMetaList = getActiveOrganMetaList(sp);
    const romanNumerals = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ'];
    choicesContainer.innerHTML = pd.choices.map((ch, idx) => {
      const orgMeta = ch.organUpgrade ? activeMetaList.find(m => m.key === ch.organUpgrade) : null;
      const orgBadge = orgMeta ? `${translateText(orgMeta.name)} +1` : toText('生命抉择', 'Life choice');

      const borderColor = ch.isSpecialBranch ? 'border-amber-400/70 bg-gradient-to-r from-amber-950/50 via-slate-900/95 to-emerald-950/40' :
                          ch.path === 'tyrant' ? 'border-rose-500/40 hover:border-rose-400' :
                          ch.path === 'dynasty' ? 'border-purple-500/40 hover:border-purple-400' :
                          'border-cyan-500/40 hover:border-cyan-400';

      const statPills = [];
      if (orgMeta) statPills.push(`<span class="text-cyan-300 font-bold">${translateText(orgMeta.name)} Lv+1</span>`);
      if (ch.offspringGain) statPills.push(`<span class="text-purple-300 font-bold">🪺诞下子嗣+${ch.offspringGain}世代</span>`);
      if (ch.dv) statPills.push(`<span class="${ch.dv > 0 ? 'text-emerald-300' : 'text-rose-400'}">体魄${ch.dv > 0 ? '+' + ch.dv : ch.dv}</span>`);
      if (ch.de) statPills.push(`<span class="${ch.de > 0 ? 'text-amber-300' : 'text-rose-400'}">能量${ch.de > 0 ? '+' + ch.de : ch.de}</span>`);
      if (ch.da) statPills.push(`<span class="${ch.da > 0 ? 'text-cyan-300' : 'text-rose-400'}">适应${ch.da > 0 ? '+' : ''}${ch.da}</span>`);
      if (ch.deathRisk) statPills.push(`<span class="text-rose-300">${toText('有死亡风险', 'Risk of death')}</span>`);
      if (ch.dl) statPills.push(`<span class="${ch.dl > 0 ? 'text-purple-300' : 'text-rose-400'}">繁衍${ch.dl > 0 ? '+' + ch.dl : ch.dl}</span>`);
      if (ch.traitGain) statPills.push(`<span class="text-yellow-300 font-bold">${toText('性状', 'Trait')} · ${translateText(ch.traitGain.name)}</span>`);

      const cardPathIcon = ch.isSpecialBranch ? '🦋' : ch.path === 'tyrant' ? '⚔️' : ch.path === 'dynasty' ? '🌺' : '🌌';
      const cardRarityTag = ch.isSpecialBranch ? toText('特殊分支', 'Special branch')
        : ch.organUpgrade ? toText('成长', 'Growth') : toText('抉择', 'Choice');
      const headerGrad = ch.isSpecialBranch
        ? 'from-amber-500/35 via-yellow-500/20 to-emerald-500/30 border-amber-400'
        : ch.path === 'tyrant'
        ? 'from-rose-600/35 via-red-900/25 to-slate-900 border-rose-500/60 hover:border-rose-400'
        : ch.path === 'dynasty'
        ? 'from-purple-600/35 via-fuchsia-900/25 to-slate-900 border-purple-500/60 hover:border-purple-400'
        : 'from-cyan-600/35 via-teal-900/25 to-slate-900 border-cyan-500/60 hover:border-cyan-400';

      return `
        <button type="button" data-choice-idx="${idx}" class="decision-choice-btn tarot-3d-card w-full text-left p-4 rounded-2xl bg-gradient-to-b ${headerGrad} flex flex-col justify-between gap-3 group">
          <div class="space-y-2.5">
            <!-- Tarot Top Header -->
            <div class="flex items-center justify-between gap-1 border-b border-slate-700/70 pb-2">
              <span class="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-slate-950/90 text-amber-300 border border-amber-500/40">
                TAROT ${romanNumerals[idx] || idx + 1} · ${cardRarityTag}
              </span>
              <span class="text-xl group-hover:scale-125 transition">${cardPathIcon}</span>
            </div>

            <!-- Center Visual Organ Medallion -->
            <div class="p-2.5 rounded-xl bg-slate-950/85 border border-slate-800 flex items-center gap-2.5">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/25 to-cyan-500/25 border border-amber-400/50 flex items-center justify-center text-xl shrink-0">
                ${orgMeta ? orgMeta.name.slice(0, 2) : cardPathIcon}
              </div>
              <div class="min-w-0 flex-1">
                <div class="text-[11px] font-extrabold text-cyan-300 truncate">${orgBadge}</div>
                <div class="text-[10px] text-slate-400 truncate">${toText('选择后进行命运检定', 'Choose to roll the die')}</div>
              </div>
            </div>

            <!-- Card Main Action Title & Lore -->
            <div class="font-extrabold text-xs sm:text-sm text-white group-hover:text-amber-200 transition leading-snug">
              ${ch.label}
            </div>
            <div class="text-[11px] text-slate-300 leading-relaxed line-clamp-3">
              ${escapeHtml(translateText(ch.desc) || '')}
            </div>
          </div>

          <!-- Card Footer Stat Crystals & Play CTA -->
          <div class="space-y-2 pt-2 border-t border-slate-800/90">
            ${statPills.length ? `<div class="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">${statPills.join(' · ')}</div>` : ''}
            <div class="w-full py-1.5 rounded-lg bg-amber-500/20 group-hover:bg-amber-500 text-amber-200 group-hover:text-slate-950 font-extrabold text-xs text-center transition">
              🃏 打出此命运牌 (Play Card) →
            </div>
          </div>
        </button>
      `;
    }).join('');

    // Update 5-Stage Metamorphosis Timeline Strip on Stage
    const morphBarEl = document.getElementById('stageMorphTimelineBar');
    if (morphBarEl) {
      const phases = isMod
        ? [
            { t: 1, label: '🍼 Ⅰ.婴幼启蒙' },
            { t: 5, label: '🎓 Ⅱ.寒窗求学' },
            { t: 9, label: '💼 Ⅲ.立业成家' },
            { t: 14, label: '🏛️ Ⅳ.中流砥柱' },
            { t: 18, label: '🍵 Ⅴ.桑榆晚晴' }
          ]
        : [
            { t: 1, label: '🥚 Ⅰ.孢子初生(0.55x)' },
            { t: 5, label: '🌱 Ⅱ.幼体破壳(0.75x)' },
            { t: 9, label: '🦎 Ⅲ.亚成体分化(0.95x)' },
            { t: 14, label: '🦖 Ⅳ.完全体霸主(1.20x)' },
            { t: 18, label: '👑 Ⅴ.神话泰坦体(1.45x)' }
          ];
      morphBarEl.innerHTML = phases.map((ph, pIdx) => {
        const nextT = phases[pIdx + 1] ? phases[pIdx + 1].t : 99;
        const isCurrent = life.currentTick >= ph.t && life.currentTick < nextT;
        const isPassed = life.currentTick >= nextT;
        const cls = isCurrent
          ? 'px-2 py-0.5 rounded bg-emerald-500/25 border border-emerald-400 text-emerald-200 font-extrabold shadow-sm'
          : isPassed
          ? 'text-cyan-400 font-semibold'
          : 'text-slate-500';
        return `<span class="${cls}">${ph.label}</span>`;
      }).join('<span class="text-slate-600">➔</span>');
    }

    function updateVitalDeltaBadge(elId, cardId, deltaVal) {
      const badge = document.getElementById(elId);
      const card = document.getElementById(cardId);
      if (!badge) return;
      if (!deltaVal) {
        badge.className = 'hidden';
        if (card) card.classList.remove('border-amber-400/80', 'bg-slate-900');
        return;
      }
      const isPos = deltaVal > 0;
      badge.textContent = isPos ? `+${deltaVal}` : `${deltaVal}`;
      badge.className = `text-[10px] font-mono font-extrabold px-1.5 py-0.2 rounded delta-badge-active ${
        isPos ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/50' : 'bg-rose-500/25 text-rose-300 border border-rose-400/50'
      }`;
      if (card) card.classList.add('border-amber-400/80');
    }

    choicesContainer.querySelectorAll('.decision-choice-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const idx = parseInt(btn.getAttribute('data-choice-idx'), 10);
        const hovered = pd.choices[idx];
        if (hovered) {
          state.hoveredChoiceIdx = idx;
          state.hoveredChoicePath = hovered.path || 'pioneer';
          state.hoveredOrganKey = hovered.organUpgrade || null;
          renderAnatomyBlueprintPanel(life);

          updateVitalDeltaBadge('statVitalityDelta', 'vitalCardVitality', hovered.dv || 0);
          updateVitalDeltaBadge('statEnergyDelta', 'vitalCardEnergy', hovered.de || 0);
          updateVitalDeltaBadge('statAdaptDelta', 'vitalCardAdapt', hovered.da || 0);
          updateVitalDeltaBadge('statLineageDelta', 'vitalCardLineage', hovered.dl || 0);

          const previewTag = document.getElementById('decisionActionPreviewTag');
          if (previewTag) {
            const orgMeta = hovered.organUpgrade ? activeMetaList.find(m => m.key === hovered.organUpgrade) : null;
            const orgText = orgMeta ? ` · 🔬画布正全息预演【${orgMeta.name} +1阶】` : '';
            const modeLabel = state.hoveredChoicePath === 'tyrant' ? `⚔️ 预演：霸主强攻路线${orgText}`
                            : state.hoveredChoicePath === 'dynasty' ? `🌺 预演：氏族繁衍路线${orgText}`
                            : `🌌 预演：先驱突变路线${orgText}`;
            previewTag.textContent = modeLabel;
          }
        }
      });
      btn.addEventListener('mouseleave', () => {
        state.hoveredChoiceIdx = null;
        state.hoveredChoicePath = null;
        state.hoveredOrganKey = null;
        renderAnatomyBlueprintPanel(life);

        updateVitalDeltaBadge('statVitalityDelta', 'vitalCardVitality', 0);
        updateVitalDeltaBadge('statEnergyDelta', 'vitalCardEnergy', 0);
        updateVitalDeltaBadge('statAdaptDelta', 'vitalCardAdapt', 0);
        updateVitalDeltaBadge('statLineageDelta', 'vitalCardLineage', 0);

        const previewTag = document.getElementById('decisionActionPreviewTag');
        if (previewTag) {
          previewTag.textContent = '💡 悬停下方命运卡牌可预演属性增减与器官进化';
        }
      });
      btn.addEventListener('click', () => {
        const chosen = pd.choices[Number(btn.dataset.choiceIdx)];
        if (!chosen || life.pendingDecision !== pd || state.commitDecision || saveLocked) return;
        if (pd.type === 'pause') {
          advanceThroughPause(life, pd);
          return;
        }
        launchCardCastToCanvas(chosen);
        runDestinyRouletteBeforeChoice(pd.stageData, chosen, pd.ageStr, () => {
          if (state.activeLife === life && life.pendingDecision === pd) {
            resolveStageChoice(pd.stageData, chosen, pd.ageStr);
          }
        });
      });
    });
  } else {
    decBox.classList.add('hidden');
  }

  // Chronicle List
  const starredCount = life.chronicle.filter(c => c.starred).length;
  document.getElementById('starredCountBadge').textContent = `★ ${starredCount}`;
  const chronEl = document.getElementById('lifeChronicleList');
  chronEl.innerHTML = life.chronicle.map((item, idx) => {
    const badgeColor = item.type === 'tyrant' ? 'border-rose-500/40 bg-rose-950/20' :
                       item.type === 'dynasty' ? 'border-purple-500/40 bg-purple-950/20' :
                       item.type === 'pioneer' ? 'border-cyan-500/40 bg-cyan-950/20' :
                       item.type === 'pause' ? 'border-amber-500/40 bg-amber-950/20' : 'border-slate-800 bg-slate-900/60';
    return `
      <div data-chron-idx="${idx}" class="chron-row p-3 rounded-xl border ${badgeColor} cursor-pointer hover:border-slate-600 transition flex items-start justify-between gap-2">
        <div class="space-y-0.5">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-mono font-bold text-emerald-400">${item.ageLabel}</span>
            <span class="text-xs font-semibold text-white">${escapeHtml(item.title)}</span>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed"${item.userText || item.title === '此刻的生命感悟' || (item.type === 'pause' && /^[“]/.test(item.text)) ? ' data-user-text' : ''}>${escapeHtml(item.text)}</p>
        </div>
        <button type="button" class="text-sm shrink-0 ${item.starred ? 'text-amber-400' : 'text-slate-600 hover:text-slate-400'}" title="点击珍藏此瞬间">
          ${item.starred ? '★' : '☆'}
        </button>
      </div>
    `;
  }).join('');

  chronEl.querySelectorAll('.chron-row').forEach(row => {
    row.addEventListener('click', () => {
      const i = parseInt(row.getAttribute('data-chron-idx'), 10);
      if (life.chronicle[i]) {
        life.chronicle[i].starred = !life.chronicle[i].starred;
        renderActiveDashboard();
      }
    });
  });

  // 20-Cell Life Grid Map
  const gridEl = document.getElementById('lifeGridMap');
  gridEl.innerHTML = life.gridCells.map(cell => {
    let colorCls = 'bg-slate-900 border-slate-800 text-slate-600';
    if (cell.status === 'tyrant') colorCls = 'bg-rose-500/35 border-rose-400 text-rose-200';
    if (cell.status === 'dynasty') colorCls = 'bg-purple-500/35 border-purple-400 text-purple-200';
    if (cell.status === 'pioneer') colorCls = 'bg-cyan-500/35 border-cyan-400 text-cyan-200';
    if (cell.status === 'pause') colorCls = 'bg-amber-500/35 border-amber-400 text-amber-200';
    if (cell.status === 'dead') colorCls = 'bg-red-700/60 border-red-400 text-white';
    const isCurrent = cell.tick === life.currentTick ? 'ring-2 ring-emerald-400' : '';
    return `
      <div class="life-cell h-8 rounded-lg border ${colorCls} ${isCurrent} flex items-center justify-center text-[11px] font-mono font-bold cursor-help" title="${cell.summary}">
        ${cell.tick}
      </div>
    `;
  }).join('');

  renderSurvivorshipCurveSVG(sp, life.currentTick / life.totalTicks);

  // 4 Co-hort Companions
  const cohortEl = document.getElementById('sameSecondCohortList');
  cohortEl.innerHTML = life.cohorts.map(c => `
    <div class="p-2.5 rounded-xl bg-slate-900/75 border border-slate-800 flex items-center justify-between gap-2 text-xs">
      <div class="flex items-center gap-2">
        <span class="text-lg">${c.emoji}</span>
        <div>
          <div class="font-medium text-slate-200">${c.name}</div>
          <div class="text-[11px] ${c.alive ? 'text-emerald-400' : 'text-rose-400'}">
            ${c.alive ? `存活 · 与你同龄 (${ageStr})` : `已陨落于 ${c.deathAgeText} · ${c.deathReason}`}
          </div>
        </div>
      </div>
      <span class="w-2 h-2 rounded-full ${c.alive ? 'bg-emerald-400' : 'bg-rose-500'}"></span>
    </div>
  `).join('');

  // Side-by-Side Reference Comparison
  const refMap = {
    human: { name: '现代智人', life: '73.4 岁', size: '1.7 米 / 65 kg', curve: 'Type I (低幼年折损 <3%)' },
    trex: { name: '君王暴龙', life: '28 岁', size: '12.5 米 / 8.8 吨', curve: 'Type II (幼体折损 ~60%)' },
    bluewhale: { name: '现代蓝鲸', life: '85 岁', size: '30 米 / 180 吨', curve: 'Type I (海洋巨兽庇护)' },
    mayfly: { name: '现代蜉蝣', life: '成虫 24 小时', size: '2.5 厘米', curve: 'Type III (幼体折损 >90%)' }
  };
  const ref = refMap[state.refSpecies] || refMap.human;
  document.getElementById('sideBySideCompareBox').innerHTML = `
    <div class="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
      <div class="text-[11px] text-emerald-400 font-semibold">当前扮演：${sp.name}</div>
      <div class="text-slate-200">寿命上限：${sp.maxAge} ${sp.ageUnit.split(' ')[0]}</div>
      <div class="text-slate-300">体型尺度：${sp.bodySize}</div>
      <div class="text-slate-400 text-[11px]">曲线：Type ${sp.curveType} (幼损 ${Math.round(sp.infantMortality * 100)}%)</div>
    </div>
    <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
      <div class="text-[11px] text-cyan-400 font-semibold">对比基准：${ref.name}</div>
      <div class="text-slate-200">平均寿命：${ref.life}</div>
      <div class="text-slate-300">体型尺度：${ref.size}</div>
      <div class="text-slate-400 text-[11px]">曲线：${ref.curve}</div>
    </div>
  `;
  localizePlayerView();
}

function renderSurvivorshipCurveSVG(sp, currentProgress) {
  const svg = document.getElementById('survivorshipSvg');
  const w = 360, h = 140, padL = 32, padR = 14, padT = 14, padB = 22;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const pts = [];
  for (let i = 0; i <= 20; i++) {
    const p = i / 20;
    const sv = getCohortSurvivalAtProgress(sp.curveType, sp.infantMortality, p);
    const x = padL + p * plotW;
    const y = padT + (1 - sv / 100) * plotH;
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  const curSv = getCohortSurvivalAtProgress(sp.curveType, sp.infantMortality, currentProgress);
  const curX = padL + currentProgress * plotW;
  const curY = padT + (1 - curSv / 100) * plotH;

  document.getElementById('currentCohortSurvivalBadge').textContent = `同批存活率 ${curSv}%`;
  const curveDesc = {
    'I': 'Type I 凸型曲线：亲代抚育或体型优势显著，幼年存活率高，死亡集中于衰老期。',
    'II': 'Type II 对角线型曲线：一生各阶段均面临较为恒定的天敌捕食与环境风险。',
    'III': 'Type III 凹型曲线：自然界最普遍的残酷法则——破壳/幼体阶段折损率极高，一旦熬过幼年期则存活率企稳。'
  };
  document.getElementById('svCurveExplainText').textContent = `${curveDesc[sp.curveType]} 你当前已超越 ${(100 - curSv).toFixed(1)}% 的同批降生同类。`;

  svg.innerHTML = `
    <line x1="${padL}" y1="${padT}" x2="${w - padR}" y2="${padT}" stroke="#1e293b" stroke-dasharray="3,3" />
    <line x1="${padL}" y1="${padT + plotH / 2}" x2="${w - padR}" y2="${padT + plotH / 2}" stroke="#1e293b" stroke-dasharray="3,3" />
    <line x1="${padL}" y1="${padT + plotH}" x2="${w - padR}" y2="${padT + plotH}" stroke="#334155" />
    <text x="4" y="${padT + 4}" fill="#64748b" font-size="9">100%</text>
    <text x="8" y="${padT + plotH / 2 + 3}" fill="#64748b" font-size="9">50%</text>
    <text x="14" y="${padT + plotH + 3}" fill="#64748b" font-size="9">0%</text>
    <text x="${padL}" y="${h - 4}" fill="#64748b" font-size="9">初生 (0)</text>
    <text x="${w - padR - 42}" y="${h - 4}" fill="#64748b" font-size="9">寿命上限 (${sp.maxAge})</text>
    <polygon points="${padL},${padT + plotH} ${pts.join(' ')} ${w - padR},${padT + plotH}" fill="rgba(16, 185, 129, 0.12)" />
    <polyline fill="none" stroke="#10b981" stroke-width="2.5" points="${pts.join(' ')}" />
    <line x1="${curX}" y1="${padT}" x2="${curX}" y2="${padT + plotH}" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2,2" />
    <circle cx="${curX}" cy="${curY}" r="5" fill="#f59e0b" stroke="#060911" stroke-width="2" />
  `;
}

// ==================== 19. RENDER ENDING REPORT WITH MULTI-GENERATION LINEAGE HANDOVER ====================
function formatLifeSummary(record) {
  const sp = SPECIES_DB.find(item => item.id === record.speciesId);
  const species = sp ? speciesName(sp) : translateText(record.speciesName);
  const ending = translateText(record.endingArchetype?.title || record.dominantPathLabel || '');
  const descendants = record.offspringCount;
  const orgs = record.organLevels || {};
  const organs = getActiveOrganMetaList(sp).filter(item => orgs[item.key] > 0)
    .map(item => `${translateText(item.name)} Lv.${orgs[item.key]}`).join(' · ');
  return [
    toText('46亿分之一', '1 in 4.6 Billion') + ' · ' + GAME_VERSION,
    `${lifeName(record)} · ${species}`,
    toText(`第 ${record.generation || 1} 世 · ${localizedAge(record.finalAge)}`, `Generation ${record.generation || 1} · ${localizedAge(record.finalAge)}`),
    toText(`结局：${ending}`, `Ending: ${ending}`),
    toText(`存活后代：${descendants}`, `Surviving descendants: ${descendants}`),
    organs
  ].filter(Boolean).join('\n');
}

async function copyLifeText(value) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {}
  const field = document.createElement('textarea');
  field.value = value;
  field.style.position = 'fixed';
  field.style.inset = '0 auto auto 0';
  field.style.opacity = '0';
  document.body.appendChild(field);
  try {
    field.select();
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    field.remove();
  }
}

function renderEndingReport(record) {
  if (!record) return;
  state.viewedRecordId = record.id;
  const archived = record.id !== state.activeLife?.recordId;
  const gen = record.generation || 1;
  document.getElementById('endSpeciesEmoji').textContent = record.emoji;
  document.getElementById('endGenBadge').textContent = toText(`🧬 家族血脉：第 ${gen} 世`, `🧬 Generation ${gen}`);
  document.getElementById('endBadgeStatus').textContent = record.survivedFull
    ? '✨ 圆满走完20阶段自然寿命'
    : '🍂 壮烈定格于自然选择长河';
  document.getElementById('endArchetypePill').textContent = record.endingArchetype ? record.endingArchetype.title : record.dominantPathLabel;
  const playerName = lifeName(record);
  const species = SPECIES_DB.find(item => item.id === record.speciesId);
  const label = species ? speciesName(species) : translateText(record.speciesName);
  document.getElementById('endTitleText').textContent = toText(
    `${playerName}（${label}）的一生`, `${playerName} · ${label}`
  );
  const decisions = record.decisionsMadeCount ?? 0;
  const era = translateText(record.eraName);
  document.getElementById('endSubtitleText').textContent = toText(
    `${era} · ${record.latin} · ${decisions} 次抉择`, `${era} · ${translateText(record.latin)} · ${decisions} decisions`
  );

  // Render Multi-Generational Lineage Continuation OR Permadeath Extinction Panel!
  const dynCard = document.getElementById('endDynastyContinuationCard');
  if (archived) {
    dynCard.className = 'hidden';
  } else if (record.offspringCount > 0) {
    const orgs = record.organLevels || {};
    const inheritedPreview = getActiveOrganMetaList(SPECIES_DB.find(species => species.id === record.speciesId))
      .filter(m => (orgs[m.key] || 0) > 0)
      .map(m => `${m.name} Lv.${Math.min(2, Math.ceil((orgs[m.key] || 0) * 0.65))}`)
      .join(' · ') || '基础器官强化';

    dynCard.className = 'p-6 rounded-2xl border-2 border-emerald-400/70 bg-gradient-to-r from-emerald-950/50 via-slate-900 to-teal-950/50 space-y-4 shadow-2xl';
    dynCard.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 font-bold">🧬 血脉火种未绝 · 可开启下一世！</span>
          <h3 class="serif-title text-xl sm:text-2xl font-bold text-white mt-1.5">
            第 ${gen} 世落幕，但你留下的 ${record.offspringCount} 世代子嗣正等待开启【第 ${gen + 1} 世】！
          </h3>
        </div>
        <div class="text-right font-mono text-xs text-amber-300">
          家族已延续：${state.dynasty.totalYearsSpanned} 世 · 累计繁衍 ${state.dynasty.totalOffspringEver} 子嗣
        </div>
      </div>
      <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
        你的子代将直接继承你在本世千锤百炼进化出的核心器官：<strong class="text-cyan-300">${inheritedPreview}</strong>${toText('，以及最多 2 项祖传性状。若下一世结束时没有存活后代，血脉将中断。', '. Up to two traits also carry over. The lineage ends if the next life leaves no surviving descendants.')}
      </p>
      <div class="flex flex-wrap items-center gap-3 pt-1">
        <button type="button" id="continueNextGenSameSpeciesBtn" class="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 hover:from-emerald-400 hover:to-cyan-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 transition flex items-center gap-2">
          <span>🧬 继承父母器官 · 进入【第 ${gen + 1} 世】(${escapeHtml(translateText(record.speciesName))}) →</span>
        </button>
        <button type="button" id="continueNextGenEvolveSpeciesBtn" class="px-4 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-bold text-xs sm:text-sm border border-amber-400/50 transition flex items-center gap-1.5">
          <span>🚀 宏演化跃迁至下一物种【第 ${gen + 1} 世】</span>
        </button>
        <button type="button" id="continueNextGenHumanBtn" class="px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-400 hover:to-orange-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg transition flex items-center gap-1.5">
          <span>🧑 进化为【人类】开启第 ${gen + 1} 世 →</span>
        </button>
      </div>
    `;
    document.getElementById('continueNextGenSameSpeciesBtn').addEventListener('click', () => advanceToNextGeneration(false));
    document.getElementById('continueNextGenEvolveSpeciesBtn').classList.toggle('hidden', record.isModernHuman);
    document.getElementById('continueNextGenEvolveSpeciesBtn').addEventListener('click', () => advanceToNextGeneration(true));
    document.getElementById('continueNextGenHumanBtn').classList.toggle('hidden', record.isModernHuman);
    document.getElementById('continueNextGenHumanBtn').addEventListener('click', () => {
      const humanOrder = ['australopithecus', 'homo_erectus', 'neanderthal', 'paleolithic_human', 'ancient_human', 'modern_human'];
      const curIdx = humanOrder.indexOf(record.speciesId);
      const nextHumanId = curIdx >= 0 && curIdx < humanOrder.length - 1 ? humanOrder[curIdx + 1] : 'modern_human';
      advanceToNextGeneration(false, nextHumanId);
    });
  } else {
    dynCard.className = 'p-6 rounded-2xl border-2 border-rose-500/70 bg-gradient-to-r from-rose-950/60 via-slate-900 to-red-950/40 space-y-3 shadow-2xl';
    dynCard.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div>
          <span class="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-200 border border-rose-400/50 font-bold">💔 家族血脉彻底断绝 (Permadeath)</span>
          <h3 class="serif-title text-xl sm:text-2xl font-bold text-white mt-1.5">
            止步于第 ${gen} 世：因未能在生前留下存活子嗣，你的血脉在地球演化史中彻底消失！
          </h3>
        </div>
      </div>
      <p class="text-xs sm:text-sm text-rose-200/90 leading-relaxed">
        自然选择残酷无情——纵使个体有过辉煌，一旦在一生中未能繁衍出后代便意外陨落，延续了 ${gen} 世的基因链条便在此刻彻底归零。请总结教训，重新开启一个新的初代家族！
      </p>
      <div class="pt-1">
        <button type="button" id="restartNewDynastyFromExtinctBtn" class="px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-extrabold text-xs sm:text-sm transition">
          🌱 重新开启新的【第 1 世】家族血脉
        </button>
      </div>
    `;
    document.getElementById('restartNewDynastyFromExtinctBtn').addEventListener('click', () => {
      prepareBirthRegistration(record.speciesId, false);
    });
  }

  const totalOrgLv = Object.values(record.organLevels || {}).reduce((a, b) => a + b, 0) + 1;
  const abilitySummary = getActiveOrganMetaList(species).slice(0, 3)
    .map(({ name, key }) => `${translateText(name)} Lv.${record.organLevels?.[key] || 0}`).join(' · ');
  document.getElementById('endMetricsGrid').innerHTML = [
    { label: '最终生命刻度', val: `第${gen}世 · ${record.finalAge}`, sub: record.survivedFull ? '抵达物种寿命巅峰' : '半途回归生态圈' },
    { label: '器官进化总阶', val: `总阶 Lv.${totalOrgLv}`, sub: abilitySummary },
    { label: '本世繁衍子嗣', val: record.offspringCount > 0 ? `${record.offspringCount} 世代存活` : '0 (血脉断绝!)', sub: record.offspringCount > 0 ? '✓ 可继承进入下一世' : '✗ 家族止步于此' },
    { label: '化石检定结果', val: record.fossilized ? '🪨 成功化作传世化石!' : '🌊 化作春泥与鲸落', sub: `检定率 ${record.fossilProbabilityPct}` }
  ].map(m => `
    <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
      <div class="text-[11px] text-slate-400">${escapeHtml(m.label)}</div>
      <div class="text-sm sm:text-base font-bold text-white mt-1 truncate">${escapeHtml(m.val)}</div>
      <div class="text-[10px] text-emerald-400 mt-0.5 truncate">${escapeHtml(m.sub)}</div>
    </div>
  `).join('');

  // v7.0 Render Comprehensive End-of-Life Settlement Dossier Tables (#endFullLifeDossierSection)
  const dossierEl = document.getElementById('endFullLifeDossierSection');
  if (dossierEl) {
    const wm = record.worldModifier || { name: record.eraName, city: record.eraName, gdpText: '-', collegeRate: '-' };
    const bonds = record.familyBonds;
    const historyRows = (record.crossroadsHistory || []).filter(r => r.stage >= 1);

    const bondsTableHtml = bonds ? `
      <div class="p-5 rounded-2xl bg-slate-900/95 border border-purple-500/40 space-y-3">
        <h3 class="text-sm sm:text-base font-bold text-purple-300 flex items-center gap-2">
          <span>💞 表一：至亲与挚爱一生羁绊结局表</span>
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-slate-800 text-slate-400">
                <th class="py-2 px-3">至亲关系</th>
                <th class="py-2 px-3">姓名/称呼</th>
                <th class="py-2 px-3">最终状态与定格记忆</th>
                <th class="py-2 px-3">羁绊深浅</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/70 text-slate-200">
              <tr>
                <td class="py-2.5 px-3 font-semibold text-pink-300">👩 母亲</td>
                <td class="py-2.5 px-3">${escapeHtml(bonds.mother.name)}</td>
                <td class="py-2.5 px-3">${escapeHtml(bonds.mother.status)}</td>
                <td class="py-2.5 px-3 font-mono text-amber-300">❤️ ${escapeHtml(bonds.mother.intimacy ?? 85)}/100</td>
              </tr>
              <tr>
                <td class="py-2.5 px-3 font-semibold text-sky-300">👨 父亲</td>
                <td class="py-2.5 px-3">${escapeHtml(bonds.father.name)}</td>
                <td class="py-2.5 px-3">${escapeHtml(bonds.father.status)}</td>
                <td class="py-2.5 px-3 font-mono text-amber-300">❤️ ${escapeHtml(bonds.father.intimacy ?? 80)}/100</td>
              </tr>
              <tr>
                <td class="py-2.5 px-3 font-semibold text-purple-300">💌 挚爱/伴侣</td>
                <td class="py-2.5 px-3">${escapeHtml(bonds.partner.name)}</td>
                <td class="py-2.5 px-3">${escapeHtml(bonds.partner.status)}</td>
                <td class="py-2.5 px-3 font-mono text-amber-300">${bonds.partner.intimacy > 0 ? `❤️ ${escapeHtml(bonds.partner.intimacy)}/100` : '未邂逅'}</td>
              </tr>
              <tr>
                <td class="py-2.5 px-3 font-semibold text-emerald-300">👶 膝下儿女</td>
                <td class="py-2.5 px-3">${record.offspringCount > 0 ? `${escapeHtml(bonds.child.name)} (共${record.offspringCount}人)` : '无子女'}</td>
                <td class="py-2.5 px-3">${record.offspringCount > 0 ? bonds.child.status : '本世未繁衍后代（血脉止步）'}</td>
                <td class="py-2.5 px-3 font-mono text-emerald-300">${record.offspringCount > 0 ? '✓ 可开启下一世' : '✗ 断代'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ` : '';

    const decisionsTableHtml = `
      <div class="p-5 rounded-2xl bg-slate-900/95 border border-amber-500/40 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="text-sm sm:text-base font-bold text-amber-300 flex items-center gap-2">
            <span>${toText('生命抉择记录', 'Life choices')} · <span data-user-text>${escapeHtml(playerName)}</span> (${historyRows.length})</span>
          </h3>
          <span class="text-[11px] text-slate-400">出身起点：${escapeHtml(wm.name)}</span>
        </div>
        <div class="overflow-x-auto max-h-96 overflow-y-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead class="sticky top-0 bg-slate-950">
              <tr class="border-b border-slate-800 text-slate-400">
                <th class="py-2.5 px-3">年龄阶段</th>
                <th class="py-2.5 px-3">人生境遇节点</th>
                <th class="py-2.5 px-3">你的选择</th>
                <th class="py-2.5 px-3">命运回响与结局</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/70 text-slate-200">
              ${historyRows.map(r => `
                <tr class="hover:bg-slate-800/40">
                  <td class="py-2.5 px-3 font-mono text-amber-300 whitespace-nowrap">${escapeHtml(r.ageStr)}</td>
                  <td class="py-2.5 px-3 font-semibold text-white">${escapeHtml(r.title)}</td>
                  <td class="py-2.5 px-3 text-emerald-300">${escapeHtml(r.chosenLabel)}</td>
                  <td class="py-2.5 px-3 text-slate-300">${escapeHtml(r.outcome || '-')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    dossierEl.innerHTML = bondsTableHtml + decisionsTableHtml;
  }

  const arch = record.endingArchetype || ENDINGS_CATALOG[0];
  document.getElementById('endArchetypeDetailCard').innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div class="text-base sm:text-lg font-bold text-amber-300 serif-title">🏆 解锁专属人生终局：【${escapeHtml(arch.title)}】</div>
      <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/40 font-mono">${escapeHtml(arch.badge)}</span>
    </div>
    <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${escapeHtml(arch.lore)}</p>
    <div class="text-[11px] text-emerald-400 font-mono">达成条件：${escapeHtml(arch.reqDesc)}</div>
  `;

  const whatIfList = record.whatIfs || [];
  document.getElementById('endWhatIfList').innerHTML = whatIfList.map(w => `
    <div class="p-3.5 rounded-xl bg-slate-950/85 border border-slate-800 space-y-1.5">
      <span class="text-[10px] px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 font-mono">${escapeHtml(w.stage)}</span>
      <div class="font-bold text-white text-xs">${escapeHtml(w.title)}</div>
      <p class="text-[11px] text-slate-300 leading-relaxed">${escapeHtml(w.desc)}</p>
    </div>
  `).join('');

  const fossilCard = document.getElementById('fossilResultCard');
  if (record.fossilized) {
    fossilCard.className = 'p-5 rounded-2xl border border-amber-500/50 bg-amber-950/20 space-y-1.5';
    fossilCard.innerHTML = `
      <div class="text-xs font-bold text-amber-300">🪨 奇迹发生：你的遗骸跨越亿万年成为了传世化石！</div>
      <p class="text-xs text-slate-200 leading-relaxed">
        在自然界中，不足万分之一的生物遗体能逃过食腐者与风化作用成为化石。你在终结时刻恰好被细密的缺氧沉积物迅速掩埋，最终在 2026 年被人类古生物学家从地层中发掘，陈列在自然历史博物馆的聚光灯下！
      </p>
    `;
  } else {
    fossilCard.className = 'p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-1.5';
    fossilCard.innerHTML = `
      <div class="text-xs font-bold text-cyan-300">🌊 万物循环：你未留下石头化石，却融进了地球的每一次呼吸</div>
      <p class="text-xs text-slate-300 leading-relaxed">
        你的躯体被阳光、微生物与洋流温柔分解，体内的碳、钙与氮原子重新进入土壤、大海与大气，正流淌在你的子孙后代与今日地球万物的血液之中。
      </p>
    `;
  }

  document.getElementById('endCauseOfDeathText').textContent = record.causeOfDeath || '';

  const traitsBox = document.getElementById('endTraitsSummaryBox');
  if (record.traits && record.traits.length > 0) {
    traitsBox.innerHTML = record.traits.map(tr => `
      <span class="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-xs text-emerald-300 font-medium">${escapeHtml(tr.name)}</span>
    `).join('');
  } else {
    traitsBox.innerHTML = '';
  }

  const starBox = document.getElementById('endStarredMomentsBox');
  if (record.starredMoments && record.starredMoments.length > 0) {
    starBox.innerHTML = `
      <div class="text-xs font-semibold text-amber-300">★ 本世生命的关键分岔与珍藏瞬间：</div>
      <ul class="text-xs text-slate-300 list-disc list-inside space-y-1">
        ${record.starredMoments.slice(0, 6).map(text => `<li>${escapeHtml(localizedMoment(text))}</li>`).join('')}
      </ul>
    `;
  } else {
    starBox.innerHTML = '';
  }
  localizePlayerView();
}

// ==================== 20. LOBBY, ATLAS, ENDINGS, MEMORIAL & STANDALONE EXPORT ====================
function renderPastLivesLobby() {
  const container = document.getElementById('pastLivesLobbyList');
  if (!state.pastLives.length) {
    container.innerHTML = `
      <div class="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-center text-xs text-slate-500">
        完成第一世后，家族档案会显示在这里。
      </div>
    `;
    return;
  }
  container.innerHTML = state.pastLives.slice(0, 10).map((item, idx) => `
    <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-2 text-xs">
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="text-xl shrink-0">${escapeHtml(item.emoji)}</span>
        <div class="truncate">
          <div class="font-semibold text-white truncate">[第${escapeHtml(item.generation || 1)}世] <span data-user-text>${escapeHtml(lifeName(item))}</span> · <span class="text-amber-300">${escapeHtml(item.endingArchetype ? item.endingArchetype.title : '')}</span></div>
          <div class="text-[11px] text-slate-400 truncate">${escapeHtml(item.eraName)} · 子嗣 ${item.offspringCount} 代 ${item.fossilized ? '· 🪨成化石' : ''}</div>
        </div>
      </div>
      <button type="button" data-review-idx="${idx}" class="review-past-btn px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 text-[11px] shrink-0 border border-slate-700">
        查看/续玩
      </button>
    </div>
  `).join('');

  container.querySelectorAll('.review-past-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.getAttribute('data-review-idx'), 10);
      if (state.pastLives[i]) {
        switchSimSubview('ending', false);
        renderEndingReport(state.pastLives[i]);
      }
    });
  });
}

function renderAtlasView() {
  const eraVal = document.getElementById('atlasEraFilter').value;
  const searchVal = document.getElementById('atlasSearchInput').value.trim().toLowerCase();

  const filtered = SPECIES_DB.filter(sp => {
    if (eraVal !== 'all' && sp.era !== eraVal) return false;
    if (searchVal) {
      const hay = `${sp.name} ${speciesName(sp)} ${sp.latin} ${sp.eraName} ${translateText(sp.eraName)} ${translateText(sp.trophic)} ${translateText(sp.habitat)}`.toLowerCase();
      return hay.includes(searchVal);
    }
    return true;
  });

  const grid = document.getElementById('atlasCardsGrid');
  grid.innerHTML = filtered.map(sp => `
    <div class="glass-subtle rounded-2xl p-4 flex flex-col justify-between gap-3 hover:border-emerald-500/40 transition">
      <div class="space-y-2">
        <div class="flex items-start justify-between gap-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-emerald-300 font-mono">${sp.eraName}</span>
            <h3 class="serif-title text-base font-bold text-white mt-1">${escapeHtml(speciesName(sp))}</h3>
            <p class="text-[11px] text-slate-400 font-mono">${sp.latin}</p>
          </div>
          <span class="text-3xl bg-slate-900 p-2.5 rounded-xl border border-slate-800">${sp.emoji}</span>
        </div>
        <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed">${sp.openingLore}</p>
      </div>
      <div class="space-y-2.5 pt-2 border-t border-slate-800/80">
        <div class="grid grid-cols-3 gap-1.5 text-[11px]">
          <div class="p-1.5 rounded bg-slate-900/80">
            <span class="text-slate-500 block">寿命上限</span>
            <span class="text-slate-200 font-mono font-semibold">${sp.maxAge} ${sp.ageUnit.split(' ')[0]}</span>
          </div>
          <div class="p-1.5 rounded bg-slate-900/80">
            <span class="text-slate-500 block">幼体折损</span>
            <span class="text-amber-300 font-mono font-semibold">${Math.round(sp.infantMortality * 100)}% (Type ${sp.curveType})</span>
          </div>
          <div class="p-1.5 rounded bg-slate-900/80">
            <span class="text-slate-500 block">古氧气/均温</span>
            <span class="text-cyan-300 font-mono font-semibold">${sp.o2Pct}% / ${sp.tempC}℃</span>
          </div>
        </div>
        <button type="button" data-play-species="${sp.id}" class="atlas-play-btn w-full py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 font-semibold text-xs border border-emerald-500/40 transition">
          🌱 指定以此物种开启第 1 世家族 →
        </button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.atlas-play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const spId = btn.getAttribute('data-play-species');
      switchMainView('sim');
      prepareBirthRegistration(spId, false);
    });
  });
}

function renderEndingsGallery() {
  document.getElementById('unlockedEndingsCountBadge').textContent = `已解锁结局：${state.unlockedEndings.length} / ${ENDINGS_CATALOG.length}`;
  const grid = document.getElementById('endingsGalleryGrid');
  grid.innerHTML = ENDINGS_CATALOG.map(end => {
    const isUnlocked = state.unlockedEndings.includes(end.id);
    const borderCls = isUnlocked
      ? 'border-amber-400/60 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30'
      : 'border-slate-800 bg-slate-900/50 opacity-85';
    return `
      <div class="rounded-2xl p-5 border ${borderCls} flex flex-col justify-between gap-3">
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs px-2.5 py-0.5 rounded-full ${isUnlocked ? 'bg-amber-500/25 text-amber-300 border border-amber-400/40' : 'bg-slate-800 text-slate-400'} font-mono font-semibold">
              ${isUnlocked ? '✓ 已解锁达成' : '🔒 待探索结局'}
            </span>
            <span class="text-[11px] text-slate-400 font-mono">${end.badge}</span>
          </div>
          <h3 class="serif-title text-base sm:text-lg font-bold text-white">${end.title}</h3>
          <p class="text-xs text-slate-300 leading-relaxed">${end.lore}</p>
        </div>
        <div class="pt-2.5 border-t border-slate-800/80 text-[11px] text-emerald-400 font-mono">
          解锁条件：${end.reqDesc}
        </div>
      </div>
    `;
  }).join('');
}

function memorialName(entry) {
  return INITIAL_MEMORIALS.some(item => item.id === entry.id) ? translateText(entry.individualName) : lifeName(entry);
}

function memorialEpitaph(entry) {
  return INITIAL_MEMORIALS.some(item => item.id === entry.id) || entry.defaultEpitaph
    ? translateText(entry.epitaph) : entry.epitaph;
}

function renderMemorialHall() {
  const grid = document.getElementById('memorialHallGrid');
  grid.innerHTML = state.memorials.map((m, idx) => `
    <div class="glass-subtle rounded-2xl p-5 flex flex-col justify-between gap-4 border border-slate-800/90 hover:border-amber-500/40 transition">
      <div class="space-y-2.5">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2.5">
            <span class="text-3xl bg-slate-900 p-2 rounded-xl border border-slate-800">${escapeHtml(m.emoji)}</span>
            <div>
              <h4 class="font-bold text-white text-sm sm:text-base"><span data-user-text>${escapeHtml(memorialName(m))}</span> · ${escapeHtml(translateText(m.speciesName))}</h4>
              <p class="text-[11px] text-slate-400 font-mono">${escapeHtml(translateText(m.latin))} · ${escapeHtml(translateText(m.lifespanText))}</p>
            </div>
          </div>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(translateText(m.cause))}</p>
        <blockquote class="p-3 rounded-xl bg-slate-950/80 border-l-2 border-amber-400 text-xs text-amber-200/90 italic">
          <span data-user-text>${escapeHtml(memorialEpitaph(m))}</span>
        </blockquote>
      </div>
      <div class="flex items-center justify-between pt-2 border-t border-slate-800/80">
        <span class="text-[11px] text-slate-400">琥珀追思铭牌 · 永恒珍藏</span>
        <button type="button" data-candle-idx="${idx}" class="candle-btn px-3 py-1.5 rounded-xl text-xs font-medium transition flex items-center gap-1.5 ${m.litByMe ? 'bg-amber-500/25 text-amber-300 border border-amber-500/50' : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'}">
          <span>🕯️</span>
          <span>${m.litByMe ? '已点亮微光' : '点亮琥珀微光'}</span>
          <span class="font-mono font-bold">(${m.candles})</span>
        </button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.candle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.getAttribute('data-candle-idx'), 10);
      const item = state.memorials[i];
      if (item && !item.litByMe) {
        item.candles++;
        item.litByMe = true;
        saveMemorials();
        renderMemorialHall();
        playTone(587.33, 0.15, 'sine', 0.04);
        showToast(toText('已点亮纪念烛光。', 'Memorial candle lit.'));
      }
    });
  });
}


// ==================== 21. BASKERVILLE AWAKENING RANK, SSR POSTER GENERATOR & VIRAL BLOODLINE RELAY ====================
function computeAwakeningRank(organLevels, pathScores, generation = 1) {
  const orgSum = Object.values(organLevels || {}).reduce((a, b) => a + b, 0);
  const maxPath = Math.max(pathScores?.tyrant || 0, pathScores?.dynasty || 0, pathScores?.pioneer || 0);
  const score = orgSum * 10 + maxPath + (generation - 1) * 15;
  if (score >= 135) return { tier: 'SSS', title: 'SSS级 · 星球神话主宰', color: '#fbbf24', border: '#f59e0b' };
  if (score >= 95)  return { tier: 'S',   title: 'S级 · 纪元史诗霸主', color: '#f43f5e', border: '#fb7185' };
  if (score >= 65)  return { tier: 'A',   title: 'A级 · 生态领主完全体', color: '#c084fc', border: '#a855f7' };
  if (score >= 38)  return { tier: 'B',   title: 'B级 · 觉醒猎手', color: '#22d3ee', border: '#06b6d4' };
  if (score >= 18)  return { tier: 'C',   title: 'C级 · 破壳进阶体', color: '#34d399', border: '#10b981' };
  return { tier: 'D', title: 'D级 · 凡胎初生幼体', color: '#94a3b8', border: '#64748b' };
}

let posterThemeIndex = 0;
function generateBloodlineRelayCode(recordOrLife) {
  if (!recordOrLife || !isCount(recordOrLife.offspringCount) || recordOrLife.offspringCount === 0 ||
      (!recordOrLife.isDead && !recordOrLife.speciesId) || !validOrganLevels(recordOrLife.organLevels)) return '';
  const id = recordOrLife.speciesId || recordOrLife.species.id;
  const generation = recordOrLife.generation || 1;
  const organs = ORGAN_KEYS.map(key => recordOrLife.organLevels[key]).join('');
  return `46B-${generation}-${id}-${organs}`.toUpperCase();
}

function openViralPosterModal() {
  const modal = document.getElementById('viralPosterModal');
  if (!modal) return;
  stopSimTimer();
  openGameDialog(modal);
  renderViralModalState();
  renderSharePosterCanvas();
}

function closeViralPosterModal() {
  const modal = document.getElementById('viralPosterModal');
  if (modal) closeGameDialog(modal);
  scheduleNextTick();
}

function getPosterRecord() {
  return state.simSubview === 'ending' ? state.pastLives.find(record => record.id === state.viewedRecordId) : null;
}

function renderViralModalState() {
  const sourceObj = getPosterRecord() || state.activeLife || state.pastLives[0];
  const code = generateBloodlineRelayCode(sourceObj);
  const codeInput = document.getElementById('myGeneratedBloodlineCode');
  codeInput.value = code;
  codeInput.placeholder = toText('完成人生后生成', 'Available when eligible');
  document.getElementById('copyViralInviteBtn').disabled = !code;
  localizePlayerView();
}

function renderSharePosterCanvas() {
  const canvas = document.getElementById('sharePosterCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Pick data from activeLife or latest pastLife or default T-Rex/Human showcase
  const displayed = getPosterRecord();
  const active = displayed ? null : state.activeLife;
  const latest = displayed || state.pastLives[0];
  const sp = active ? active.species : (latest ? (SPECIES_DB.find(s => s.id === latest.speciesId) || SPECIES_DB[0]) : SPECIES_DB.find(s => s.id === 'modern_human'));
  const indivName = active || latest ? lifeName(active || latest) : `${speciesName(sp)} · ${toText('初代先祖', 'Founder')}`;
  const gen = active ? (active.generation || state.dynasty.generation || 1) : (latest ? (latest.generation || 1) : 1);
  const organs = active ? active.organLevels : (latest && latest.organLevels ? latest.organLevels : { jaws: 2, armor: 2, lungs: 2, senses: 2, locomotion: 2, crest: 2 });
  const pathScores = active ? active.pathScores : (latest && latest.pathScores ? latest.pathScores : { tyrant: 38, dynasty: 26, pioneer: 42 });
  const rankInfo = computeAwakeningRank(organs, pathScores, gen);
  const code = generateBloodlineRelayCode(active || latest);

  // 1. Poster Background Theme (Baskerville Dark Gold / Abyss Emerald / Royal Crimson)
  const themes = [
    ['#080c17', '#171326', '#291811'],
    ['#04141c', '#092429', '#05101a'],
    ['#1c0812', '#261019', '#09060e']
  ];
  const pal = themes[posterThemeIndex % themes.length];
  const bgGrad = ctx.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, pal[0]);
  bgGrad.addColorStop(0.5, pal[1]);
  bgGrad.addColorStop(1, pal[2]);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // 2. Ornate Baskerville Double Gold Frame & Corner Filigree
  ctx.strokeStyle = rankInfo.border;
  ctx.lineWidth = 4;
  ctx.strokeRect(14, 14, w - 28, h - 28);
  ctx.strokeStyle = 'rgba(251, 191, 36, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(22, 22, w - 44, h - 44);

  // Corner Diamonds
  [[22, 22], [w - 22, 22], [22, h - 22], [w - 22, h - 22]].forEach(([cx, cy]) => {
    ctx.fillStyle = rankInfo.color;
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  // 3. Header Title & Global Rank Crest
  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 13px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(toText('46亿分之一', '1 in 4.6 Billion') + ' · ' + GAME_VERSION, w / 2, 48);

  // Rank Banner Pill
  ctx.fillStyle = 'rgba(245, 158, 11, 0.18)';
  ctx.strokeStyle = rankInfo.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(75, 62, w - 150, 38, 19);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 17px "Noto Serif SC", Georgia, serif';
  ctx.fillText(translateText(rankInfo.title), w / 2, 87, w - 160);

  // 4. Center Spotlight Stage & Articulated Creature / Human Portrait
  const spotGrad = ctx.createRadialGradient(w / 2, 225, 10, w / 2, 225, 135);
  spotGrad.addColorStop(0, 'rgba(251, 191, 36, 0.25)');
  spotGrad.addColorStop(0.6, 'rgba(56, 189, 248, 0.08)');
  spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = spotGrad;
  ctx.beginPath();
  ctx.arc(w / 2, 225, 135, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w / 2, 225, 98, 0, Math.PI * 2);
  ctx.stroke();

  // Draw actual evolved articulated creature or human right onto the poster!
  ctx.save();
  ctx.translate(w / 2 - 10, 232);
  drawArticulatedCreature(ctx, sp, organs, 1.32, rankInfo.color, 1.5, true, false);
  ctx.restore();

  // Species & Dynasty Generation Title below portrait
  ctx.fillStyle = '#fde68a';
  ctx.font = 'bold 13px Inter, sans-serif';
  ctx.fillText(toText(`第 ${gen} 世 · ${sp.eraName}`, `Generation ${gen} · ${translateText(sp.eraName)}`), w / 2, 355, w - 90);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px "Noto Serif SC", Georgia, serif';
  ctx.fillText(`${indivName} (${speciesName(sp)})`, w / 2, 386, w - 86);

  // 5. Left Side: 6-Axis Capability Radar Chart; Right Side: 6 Evolved Organ Badges
  const radarCx = 155, radarCy = 495, radarR = 68;
  const organMeta = getActiveOrganMetaList(sp);
  const axisLabels = isModernHumanSpecies(sp)
    ? [['事业', 'Career'], ['居所', 'Housing'], ['健康', 'Health'], ['学业', 'Study'], ['声望', 'Reputation'], ['关系', 'Family']]
    : [['颚武', 'Jaws'], ['重甲', 'Armor'], ['心肺', 'Lungs'], ['天眼', 'Senses'], ['肢翼', 'Mobility'], ['华冠', 'Crest']];
  const axes = organMeta.map(({ key }, index) => ({
    label: toText(...axisLabels[index]),
    val: Math.min(1, ((organs[key] || 0) + 1) / 4)
  }));

  // Draw Radar Web
  [0.4, 0.7, 1.0].forEach(scale => {
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    axes.forEach((_, idx) => {
      const ang = -Math.PI / 2 + (idx * Math.PI * 2 / 6);
      const x = radarCx + Math.cos(ang) * radarR * scale;
      const y = radarCy + Math.sin(ang) * radarR * scale;
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.stroke();
  });

  // Draw Filled Player Radar Polygon
  ctx.fillStyle = 'rgba(52, 211, 153, 0.28)';
  ctx.strokeStyle = '#34d399';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  axes.forEach((ax, idx) => {
    const ang = -Math.PI / 2 + (idx * Math.PI * 2 / 6);
    const x = radarCx + Math.cos(ang) * radarR * ax.val;
    const y = radarCy + Math.sin(ang) * radarR * ax.val;
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  axes.forEach((ax, idx) => {
    const ang = -Math.PI / 2 + (idx * Math.PI * 2 / 6);
    const lx = radarCx + Math.cos(ang) * (radarR + 18);
    const ly = radarCy + Math.sin(ang) * (radarR + 18);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillText(ax.label, lx, ly + 4, 68);
  });

  // Right Side: Organ & Dynasty Summary List
  ctx.textAlign = 'left';
  const listX = 270;
  let listY = 432;
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 13px Inter, sans-serif';
  ctx.fillText(toText('能力与器官', 'Traits and abilities'), listX, listY);

  organMeta.forEach((meta, i) => {
    const lv = organs[meta.key] || 0;
    const y = listY + 24 + i * 23;
    ctx.fillStyle = lv >= 2 ? '#fde047' : lv === 1 ? '#34d399' : '#94a3b8';
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillText(`${translateText(meta.name)} · Lv.${lv}`, listX, y, w - listX - 35);
  });

  // 6. Bottom Viral Referral Banner & Simulated QR Matrix
  ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(34, 605, w - 68, 122, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText(toText('血脉接力', 'Lineage relay'), 52, 637);
  ctx.font = 'bold 15px monospace';
  ctx.fillStyle = '#fff';
  ctx.fillText(code || toText('完成一生并留下后代即可生成接力码', 'Finish a life with descendants to unlock a relay code.'), 52, 663, w - 104);
  if (code) {
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText(toText('在游戏大厅输入接力码，继承部分器官。', 'Enter the code in the lobby to inherit part of this life.'), 52, 690, w - 104);
  }
}

function applyFriendBloodlineCode(rawCode) {
  const code = (rawCode || '').trim().toLowerCase();
  const match = /^46b-(\d{1,6})-([a-z0-9_]+)-([0-5]{6})$/.exec(code);
  const species = match && SPECIES_DB.find(item => item.id === match[2]);
  if (!species || Number(match[1]) < 1) {
    showToast(toText('血脉码无效，请粘贴从生命海报导出的 46B 血脉码。', 'Invalid code. Paste a 46B code from a life poster.'));
    return;
  }
  const generation = Number(match[1]);
  const inheritedOrgans = Object.fromEntries(ORGAN_KEYS.map((key, index) => [
    key, Math.min(2, Math.ceil(Number(match[3][index]) * 0.65))
  ]));
  const relay = {
    active: true, generation: generation + 1,
    totalYearsSpanned: 0, totalOffspringEver: 0,
    inheritedTraits: [], inheritedOrgans, ancestors: []
  };
  if (prepareBirthRegistration(species.id, true, relay)) {
    closeViralPosterModal();
    showToast(toText(`血脉已接续。你将从第 ${relay.generation} 世出生。`, `Lineage continued. You are generation ${relay.generation}.`));
  }
}

function switchMainView(viewName) {
  stopSimTimer();
  state.currentView = viewName;
  ['sim', 'atlas', 'endings', 'memorial'].forEach(v => {
    const sec = document.getElementById(`view-${v}`);
    if (sec) {
      if (v === viewName) sec.classList.remove('hidden');
      else sec.classList.add('hidden');
    }
  });

  document.querySelectorAll('.nav-tab').forEach(tab => {
    const nav = tab.getAttribute('data-nav');
    if (nav === viewName) {
      tab.className = 'nav-tab px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    } else {
      tab.className = 'nav-tab px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition text-slate-400 hover:text-slate-200 border border-transparent';
    }
  });

  if (viewName === 'atlas') renderAtlasView();
  if (viewName === 'endings') renderEndingsGallery();
  if (viewName === 'memorial') renderMemorialHall();
  if (viewName === 'sim' && state.simSubview === 'lobby') renderPastLivesLobby();
  if (viewName === 'sim' && state.simSubview === 'active') {
    startStageAnimationLoop();
    scheduleNextTick();
  }
  localizePlayerView();
}

function switchSimSubview(subName, persistPhase = true) {
  state.simSubview = subName;
  if (persistPhase && subName !== 'lobby') state.sessionPhase = subName;
  if (subName !== 'active') stopSimTimer();
  ['lobby', 'birthcard', 'active', 'ending'].forEach(s => {
    const el = document.getElementById(`subview-${s}`);
    if (el) {
      if (s === subName) el.classList.remove('hidden');
      else el.classList.add('hidden');
    }
  });
  if (subName === 'lobby') {
    stopSimTimer();
    renderPastLivesLobby();
    updateSaveLobby();
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function updateSpeedUI() {
  document.querySelectorAll('.speed-btn').forEach(btn => {
    const sp = parseInt(btn.getAttribute('data-speed'), 10);
    if (sp === state.speedMultiplier) {
      btn.className = 'speed-btn px-2 py-1 rounded-md text-xs font-mono bg-emerald-500/20 text-emerald-300 font-semibold';
    } else {
      btn.className = 'speed-btn px-2 py-1 rounded-md text-xs font-mono text-slate-400 hover:text-white';
    }
  });
}

function initApp() {
  loadSavedState();

  const manualSel = document.getElementById('manualSpeciesSelect');
  manualSel.innerHTML = SPECIES_DB.map(s => `<option value="${s.id}">${s.emoji} ${s.name} (${s.eraName} · 寿命上限 ${s.maxAge}${s.ageUnit.split(' ')[0]})</option>`).join('');
  manualSel.value = state.manualSpeciesId;
  manualSel.addEventListener('change', (e) => {
    state.manualSpeciesId = e.target.value;
  });

  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      switchMainView(btn.getAttribute('data-nav'));
    });
  });

  document.getElementById('brandHomeBtn').addEventListener('click', () => {
    state.commitDecision?.();
    switchMainView('sim');
    switchSimSubview('lobby');
  });

  document.getElementById('viewAll24Btn').addEventListener('click', () => switchMainView('atlas'));
  // Audio controls are optional where Web Audio is unavailable.
  if (typeof (window.AudioContext || window.webkitAudioContext) !== 'function') {
    for (const id of ['audioToggleBtn', 'bgmToggleBtn']) {
      const button = document.getElementById(id);
      button.disabled = true;
      button.title = '此浏览器环境未提供 Web Audio / Web Audio unavailable';
    }
  }
  document.getElementById('audioToggleBtn').addEventListener('click', () => {
    state.audioEnabled = !state.audioEnabled;
    document.getElementById('audioIcon').textContent = state.audioEnabled ? '🔊' : '🔇';
    document.getElementById('audioLabel').textContent = `音效: ${state.audioEnabled ? '开' : '关'}`;
    if (state.audioEnabled) playTone(523.25, 0.15, 'sine', 0.05);
  });

  const eraDescs = {
    all: '跨越冥古宙深海热泉、寒武纪海洋、侏罗纪丛林直至现代冰原，所有年代的真实古气候与灭绝事件均会生效。',
    precambrian: '太古宙与元古宙 (38亿–5.41亿年前)：体验地球初代深海热泉古菌、引发雪球地球的叠层石蓝藻与埃迪卡拉纪狄更逊水母。',
    paleozoic: '古生代 (5.41亿–2.52亿年前)：寒武纪奇虾、怪诞虫、直角石、镜眼三叶虫、8米邓氏鱼、登陆先锋提塔利克鱼、巨脉蜻蜓与丽齿兽。',
    mesozoic: '中生代 (2.52亿–6600万年前)：水龙兽、28米梁龙、始祖鸟、无齿翼龙、深海沧龙、君王暴龙与熬过小行星撞击的早期哺乳类。',
    cenozoic: '新生代与现代 (6600万年前至今)：18米巨齿鲨、剑齿虎、真猛犸象、渡渡鸟、24小时蜉蝣、帝企鹅、红鲑、绿海龟、蓝鲸与400岁格陵兰睡鲨。',
    humanity: '🧑 人类文明与灵长演化纪元 (320万年前至今)：从早期人族、冰原猎手与洞穴画师，走进青铜时代和现代生活。'
  };
  document.querySelectorAll('.era-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedEra = btn.getAttribute('data-era');
      document.querySelectorAll('.era-btn').forEach(b => {
        b.className = b === btn
          ? 'era-btn px-3 py-2 rounded-xl text-xs font-medium border transition bg-emerald-500/20 border-emerald-500/50 text-emerald-200'
          : 'era-btn px-3 py-2 rounded-xl text-xs font-medium border transition bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700';
      });
      document.getElementById('eraDescText').textContent = eraDescs[state.selectedEra] || eraDescs.all;
    });
  });

  document.querySelectorAll('.draw-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.drawMode = btn.getAttribute('data-draw');
      document.querySelectorAll('.draw-btn').forEach(b => {
        b.className = b === btn
          ? 'draw-btn p-3 rounded-xl text-left border transition bg-emerald-500/20 border-emerald-500/50 text-emerald-200'
          : 'draw-btn p-3 rounded-xl text-left border transition bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700';
      });
      const wrap = document.getElementById('manualSpeciesPickerWrap');
      if (state.drawMode === 'manual') wrap.classList.remove('hidden');
      else wrap.classList.add('hidden');
    });
  });

  document.getElementById('paceSelect').addEventListener('change', e => {
    state.paceMs = parseInt(e.target.value, 10) || 2200;
  });
  document.getElementById('refSpeciesSelect').addEventListener('change', e => {
    state.refSpecies = e.target.value;
  });
  document.getElementById('energyUnitSelect').addEventListener('change', e => {
    state.energyUnit = e.target.value;
  });
  document.getElementById('gentleModeToggle').addEventListener('change', e => {
    state.gentleMode = e.target.checked;
  });

  // Start, Human Quick Start & Viral Referral Buttons
  document.getElementById('startBirthBtn').addEventListener('click', () => prepareBirthRegistration());
  document.getElementById('quickPlayHumanBtn').addEventListener('click', () => {
    prepareBirthRegistration('modern_human');
  });
  document.getElementById('openViralCenterTopBtn').addEventListener('click', openViralPosterModal);
  document.getElementById('stageQuickPosterBtn').addEventListener('click', openViralPosterModal);
  document.getElementById('openPosterFromEndBtn').addEventListener('click', openViralPosterModal);
  document.getElementById('closeViralPosterModalBtn').addEventListener('click', closeViralPosterModal);
  document.getElementById('regeneratePosterStyleBtn').addEventListener('click', () => {
    posterThemeIndex++;
    renderSharePosterCanvas();
  });
  document.getElementById('downloadPosterPngBtn').addEventListener('click', () => {
    const canvas = document.getElementById('sharePosterCanvas');
    if (!canvas) return;
    try {
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = '46b-life-poster.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast(toText('生命海报已导出。', 'Life poster saved.'));
    } catch {
      showToast(toText('无法导出海报。', 'Could not export the poster.'));
    }
  });
  document.getElementById('copyViralInviteBtn').addEventListener('click', async () => {
    const code = document.getElementById('myGeneratedBloodlineCode').value;
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      showToast(toText('血脉接力码已复制。', 'Lineage code copied.'));
    } catch {
      document.getElementById('myGeneratedBloodlineCode').select();
      showToast(toText('请手动复制已选中的血脉码。', 'Copy the selected code manually.'));
    }
  });
  document.getElementById('applyBloodlineCodeBtn').addEventListener('click', () => {
    applyFriendBloodlineCode(document.getElementById('lobbyBloodlineCodeInput').value);
  });
  document.getElementById('modalApplyFriendCodeBtn').addEventListener('click', () => {
    applyFriendBloodlineCode(document.getElementById('modalFriendCodeInput').value);
  });
  renderViralModalState();
  document.getElementById('randomQuickStartBtn').addEventListener('click', () => {
    const stars = ['trex', 'anomalocaris', 'tiktaalik', 'bluewhale', 'diplodocus', 'mammoth', 'megalodon'];
    const pick = stars[Math.floor(Math.random() * stars.length)];
    prepareBirthRegistration(pick, false);
  });
  document.getElementById('rerollBirthBtn').addEventListener('click', () => prepareBirthRegistration(state.activeLife.species.id, state.dynasty.generation > 1));
  document.getElementById('confirmEnterLifeBtn').addEventListener('click', () => startActiveSimulation());

  // Toggle X-Ray Internal Anatomy View
  document.getElementById('toggleXrayBtn').addEventListener('click', () => {
    state.xrayMode = !state.xrayMode;
    renderActiveDashboard();
    showToast(state.xrayMode ? '🩻 已开启生物内脏心肺与骨骼透视渲染！' : '🦖 已切换为生物体表装甲外观渲染！');
  });

  document.getElementById('stageActionScanBtn').addEventListener('click', () => {
    if (!combatIsRunning() || !usePracticeAction('scan')) return;
    addStageSonarRipple(260, 185, 'rgba(52, 211, 153, 0.9)');
    state.activeLife.adaptation = clampStat(state.activeLife.adaptation + 2);
    addStageFloatingText('👁️ 感官神经脉冲: 适应度 +2', '#34d399', 260, 130);
    playTone(680, 0.12, 'sine', 0.04);
    renderActiveDashboard();
  });

  document.getElementById('stageActionRoarBtn').addEventListener('click', () => {
    if (!combatIsRunning() || !usePracticeAction('roar')) return;
    addStageSonarRipple(260, 185, 'rgba(245, 158, 11, 0.9)');
    state.activeLife.lineage = clampStat(state.activeLife.lineage + 2);
    addStageFloatingText('🌺 华冠求偶共鸣: 繁衍羁绊 +2', '#fbbf24', 260, 130);
    playTone(320, 0.18, 'triangle', 0.05);
    renderActiveDashboard();
  });

  document.getElementById('stageActionDashBtn').addEventListener('click', () => {
    if (!combatIsRunning() || !usePracticeAction('dash')) return;
    state.stageLungeOffset = 65;
    state.activeLife.energy = clampStat(state.activeLife.energy + 2);
    addStageFloatingText('🦷 巨颚扑咬演练: 能量 +2', '#fb7185', 310, 130);
    playTone(440, 0.12, 'sawtooth', 0.04);
    renderActiveDashboard();
  });

  document.getElementById('simPauseBtn').addEventListener('click', () => {
    if (saveLocked) return;
    state.isPaused = !state.isPaused;
    renderActiveDashboard();
    saveSession();
    if (!state.isPaused) scheduleNextTick();
    else stopSimTimer();
  });

  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (saveLocked) return;
      state.speedMultiplier = parseInt(btn.getAttribute('data-speed'), 10) || 1;
      state.isPaused = false;
      updateSpeedUI();
      renderActiveDashboard();
      scheduleNextTick();
    });
  });

  document.getElementById('nextDecisionJumpBtn').addEventListener('click', () => {
    if (!state.activeLife || state.activeLife.isDead) return;
    if (state.activeLife.pendingDecision) {
      document.getElementById('v12CockpitDecisionZone').classList.remove('hidden');
      document.getElementById('combatFocusBtnLabel').textContent = '收起手牌 [H]';
      document.getElementById('decisionPromptContainer').scrollIntoView({ block: 'nearest' });
      return;
    }
    stopSimTimer();
    executeLifeTick();
  });

  document.getElementById('autoChoiceToggleBtn').addEventListener('click', () => {
    if (state.commitDecision || !state.activeLife || state.activeLife.isDead) return;
    state.autoChoice = !state.autoChoice;
    renderActiveDashboard();
    saveSession();
    if (state.autoChoice && state.activeLife && state.activeLife.pendingDecision) {
      const pd = state.activeLife.pendingDecision;
      if (pd.type === 'pause') {
        advanceThroughPause(state.activeLife, pd, true);
      } else {
        resolveStageChoice(pd.stageData, pd.choices[0], pd.ageStr, true);
      }
    }
  });

  document.getElementById('annualFocusSelect').addEventListener('change', e => {
    if (state.activeLife) {
      state.activeLife.focus = e.target.value;
      saveSession();
      showToast('🧭 已切换日常生存策略重心！');
    }
  });

  document.getElementById('writeThoughtBtn').addEventListener('click', () => {
    if (!state.activeLife) return;
    openModal(
      '✎ 写下此刻的跨物种感悟',
      `
        <p class="text-xs text-slate-400">${toText("把这段经历写进生命手记。", "Save a note about this moment in your life journal.")}</p>
        <textarea id="modalThoughtTextarea" rows="3" placeholder="在这里写下你的想法……" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"></textarea>
      `,
      `
        <button id="modalThoughtSaveBtn" class="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs">保存手记</button>
      `
    );
    document.getElementById('modalThoughtSaveBtn').addEventListener('click', () => {
      const txt = document.getElementById('modalThoughtTextarea').value.trim();
      if (txt && state.activeLife) {
        const ageStr = getAgeAtTick(state.activeLife.species, state.activeLife.currentTick, state.activeLife.totalTicks);
        state.activeLife.chronicle.unshift({
          ageLabel: ageStr,
          title: '✎ 留下的跨物种手记',
          text: `“${txt.slice(0, 300)}”`,
            userText: true,
          starred: true,
          type: 'pause'
        });
      }
      closeModal();
      renderActiveDashboard();
      saveSession();
      if (!state.isPaused) scheduleNextTick();
    });
  });

  document.getElementById('abandonLifeBtn').addEventListener('click', () => {
    state.commitDecision?.();
    saveSession();
    stopSimTimer();
    switchSimSubview('lobby');
  });

  document.getElementById('playAgainFromEndBtn').addEventListener('click', () => {
    switchSimSubview('lobby');
  });

  document.getElementById('replaySameSpeciesBtn').addEventListener('click', () => {
    const latest = getPosterRecord() || state.pastLives[0];
    if (latest && latest.speciesId) {
      prepareBirthRegistration(latest.speciesId, false);
    } else {
      prepareBirthRegistration(null, false);
    }
  });

  document.getElementById('copyShareCardBtn').addEventListener('click', async () => {
    const record = getPosterRecord() || state.pastLives[0];
    if (!record) return;
    const summary = formatLifeSummary(record);
    if (await copyLifeText(summary)) {
      showToast(toText('已复制生命纪念卡。', 'Life summary copied.'));
      return;
    }
    openModal(toText('复制生命纪念卡', 'Copy life summary'), '<textarea id="manualShareText" class="w-full rounded-xl bg-slate-950 p-3 text-white" rows="7" readonly></textarea>');
    const field = document.getElementById('manualShareText');
    field.value = summary;
    field.focus();
    field.select();
  });

  document.getElementById('enshrineToMemorialBtn').addEventListener('click', () => {
    const latest = getPosterRecord() || state.pastLives[0];
    if (!latest) return;
    const ep = document.getElementById('endEpitaphInput').value.trim().slice(0, 300) || '“在46亿年的漫长星河里，我将进化出的器官与血脉火种传给了下一世。”';
    state.memorials.unshift({
      id: 'mem_' + Date.now(),
      speciesName: latest.speciesName,
      speciesId: latest.speciesId,
      nameIsCustom: latest.nameIsCustom,
      latin: `第${latest.generation || 1}世 · ${latest.latin} · ${latest.eraName}`,
      emoji: latest.emoji,
      individualName: latest.individualName,
      lifespanText: `生命刻度 ${latest.finalAge} · ${latest.endingArchetype ? latest.endingArchetype.title : ''}`,
      cause: latest.causeOfDeath,
      epitaph: `“${ep.replace(/^["“]|["”]$/g, '')}”`,
      defaultEpitaph: !document.getElementById('endEpitaphInput').value.trim(),
      candles: 1,
      litByMe: true
    });
    saveMemorials();
    document.getElementById('endEpitaphInput').value = '';
    showToast('🕯️ 已将这段家族血脉安放至《地质追思馆》！');
    switchMainView('memorial');
  });

  document.getElementById('transferRecordsBtn').addEventListener('click', () => {
    const code = btoa(encodeURIComponent(JSON.stringify(state.pastLives.slice(0, 8))));
    openModal(
      '🔄 家族血脉与前世档案转移码',
      `
        <p class="text-xs text-slate-400">复制下方 Base64 档案码可在其他设备恢复，或粘贴已有档案码导入：</p>
        <textarea id="transferCodeArea" rows="4" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-[11px] font-mono text-emerald-300">${code}</textarea>
      `,
      `
        <button id="importCodeConfirmBtn" class="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs">导入此档案码</button>
      `
    );
    document.getElementById('importCodeConfirmBtn').addEventListener('click', () => {
      if (saveLocked) return;
      try {
        const raw = document.getElementById('transferCodeArea').value.trim();
        const parsed = JSON.parse(decodeURIComponent(atob(raw)));
      if (!validLegacyRecords(parsed)) throw new Error('Invalid archive');
      {
        const ids = new Set(state.pastLives.map(record => record.id));
        state.pastLives = [...state.pastLives, ...parsed.filter(record => !ids.has(record.id))].slice(0, 15);
          savePastLives();
          renderPastLivesLobby();
          showToast('✅ 成功导入家族演化档案！');
        }
      } catch (e) {
        showToast('⚠️ 档案码格式无法解析，请检查后重试。');
      }
      closeModal();
    });
  });

  document.getElementById('clearRecordsBtn').addEventListener('click', () => {
    if (saveLocked) return;
    if (!window.confirm(toText('清空已完成的生命档案？', 'Clear completed life records?'))) return;
    state.pastLives = state.pastLives.filter(record => record.id === state.activeLife?.recordId);
    savePastLives();
    renderPastLivesLobby();
    showToast('🗑️ 已清空本地前世演化档案。');
  });

  document.getElementById('atlasEraFilter').addEventListener('change', renderAtlasView);
  document.getElementById('atlasSearchInput').addEventListener('input', renderAtlasView);

  document.getElementById('randomMeetMemorialBtn').addEventListener('click', () => {
    const m = state.memorials[Math.floor(Math.random() * state.memorials.length)];
    if (!m) return;
    openModal(
      toText(`回忆 · ${memorialName(m)}`, `Remembering ${memorialName(m)}`),
      `
        <div class="flex items-center gap-3">
          <span class="text-4xl">${escapeHtml(m.emoji)}</span>
          <div>
            <div class="font-bold text-white">${escapeHtml(m.speciesName)}</div>
            <div class="text-xs text-slate-400">${escapeHtml(translateText(m.latin))} · ${escapeHtml(translateText(m.lifespanText))}</div>
          </div>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${escapeHtml(translateText(m.cause))}</p>
        <blockquote class="p-3 rounded-xl bg-slate-950 border-l-2 border-amber-400 text-xs text-amber-200 italic"><span data-user-text>${escapeHtml(memorialEpitaph(m))}</span></blockquote>
      `,
      `<button id="modalCloseOkBtn" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs">致敬这段生命</button>`
    );
    document.getElementById('modalCloseOkBtn').addEventListener('click', closeModal);
  });

  document.getElementById('closeModalBtn').addEventListener('click', closeModal);

  initializeGameSystems();
  bindSessionEvents();
  bindLanguageSelect();
  renderPastLivesLobby();
  renderEndingsGallery();
  updateSaveLobby();
  document.getElementById('heroStartModeDinoBtn').disabled = false;
  document.getElementById('heroStartModeHumanBtn').disabled = false;
}

// ==================== 22. v9.0 GLOBAL I18N ENGINE (AUTO BROWSER LANGUAGE DETECTION + ZH/EN/JA/ES) ====================
const I18N_DICT = {
  zh: {
    brand_title: '46亿分之一',
    brand_sub: '新增6大人类纪元扮演 · 深时演化与现代人生',
    nav_sim: '🌍 演化剧场',
    nav_atlas: '🦕 物种与人类图鉴(30)',
    nav_endings: '🏆 12大结局',
    nav_memorial: '🕯️ 地质追思馆',
    nav_deploy: '🚀 全球发布与宣发中心',
    nav_valuation: '💎 商业与美术评估',
    btn_feedback: '内测反馈',
    btn_poster: '生命海报',
    btn_export: '导出网站包',
    hero_h1: '从 38 亿年前古菌、霸王龙到现代人类：你的血脉能演化并延续多少世？',
    lobby_settings_title: '🎲 投胎参数与家族初代设定',
    btn_start_gen1: '🌱 开启第 1 世',
    btn_play_human: '🧑 我要扮演人类 (古猿/智人/现代人)',
    btn_quick_dino: '🦖 霸王龙/奇虾直通',
    hud_crystal_title: '💎 生命四维水晶能量槽',
    stat_v: '❤️ 体魄/健康',
    stat_e: '⚡ 能量/家境',
    stat_a: '🧠 适应/认知',
    stat_l: '🧬 繁衍/羁绊'
  },
  en: {
    brand_title: '1 in 4.6 Billion',
    brand_sub: 'Play Any Organism Across 4.6B Years & 6 Human Eras · Creature evolution and lineage',
    nav_sim: '🌍 Evolution Stage',
    nav_atlas: '🦕 30 Species Atlas',
    nav_endings: '🏆 12 Endings',
    nav_memorial: '🕯️ Fossil Memorial',
    nav_deploy: '🚀 Launch & Growth Hub',
    nav_valuation: '💎 Valuation & Art',
    btn_feedback: 'Beta Feedback',
    btn_poster: 'Life poster',
    btn_export: 'Export HTML',
    hero_h1: 'From 3.8B-Year Archaea & T-Rex to Modern Humans: How Many Generations Can Your Bloodline Survive?',
    lobby_settings_title: '🎲 Incarnation Parameters & Gen-1 Dynasty Setup',
    btn_start_gen1: '🌱 Start Generation 1',
    btn_play_human: '🧑 Play as Human (Hominin / Modern Human)',
    btn_quick_dino: '🦖 Quick Play: T-Rex / Anomalocaris',
    hud_crystal_title: '💎 4-Pillar Bio-Crystal Vital Gauges',
    stat_v: '❤️ Vitality / Health',
    stat_e: '⚡ Energy / Wealth',
    stat_a: '🧠 Adaptation / Mind',
    stat_l: '🧬 Lineage / Bonds'
  },
  ja: {
    brand_title: '46億分の1 (1 in 4.6B)',
    brand_sub: '地球46億年の全生物＆人類6大紀元シミュレーター',
    nav_sim: '🌍 進化劇場',
    nav_atlas: '🦕 30種図鑑',
    nav_endings: '🏆 12の結末',
    nav_memorial: '🕯️ 化石追悼館',
    nav_deploy: '🚀 公開・宣伝ハブ',
    nav_valuation: '💎 商業・美術評価',
    btn_feedback: 'βテスト感想',
    btn_poster: 'SSRポスター共有',
    btn_export: 'HTML出力',
    hero_h1: '38億年前の古細菌、ティラノサウルスから現代人まで：あなたの血脈は何世代生き残れるか？',
    lobby_settings_title: '🎲 転生パラメータと初代血脈設定',
    btn_start_gen1: '🌱 第1世を開始',
    btn_play_human: '🧑 人類としてプレイ (古猿/現代人)',
    btn_quick_dino: '🦖 恐竜・アノマロカリス直行',
    hud_crystal_title: '💎 生命4次元クリスタルゲージ',
    stat_v: '❤️ 体力・健康',
    stat_e: '⚡ 活力・資産',
    stat_a: '🧠 適応・知性',
    stat_l: '🧬 繁栄・絆'
  },
  es: {
    brand_title: '1 entre 4.600 Millones',
    brand_sub: 'Vive como cualquier criatura en 4.600M de años o en 6 eras humanas',
    nav_sim: '🌍 Teatro Evolutivo',
    nav_atlas: '🦕 Atlas (30 Especies)',
    nav_endings: '🏆 12 Finales',
    nav_memorial: '🕯️ Memorial Fósil',
    nav_deploy: '🚀 Lanzamiento Global',
    nav_valuation: '💎 Valor Comercial',
    btn_feedback: 'Feedback Beta',
    btn_poster: 'Póster SSR / Invitar',
    btn_export: 'Exportar Web',
    hero_h1: 'Desde arqueas de hace 3.800M de años y el T-Rex hasta el ser humano moderno: ¿Cuántas generaciones sobrevivirá tu linaje?',
    lobby_settings_title: '🎲 Parámetros de Encarnación y Dinastía (Gen 1)',
    btn_start_gen1: '🌱 Iniciar Generación 1',
    btn_play_human: '🧑 Jugar como Humano (Homínido / Moderno)',
    btn_quick_dino: '🦖 Jugar T-Rex / Anomalocaris',
    hud_crystal_title: '💎 Cristales Vitales de 4 Dimensiones',
    stat_v: '❤️ Vitalidad / Salud',
    stat_e: '⚡ Energía / Recursos',
    stat_a: '🧠 Adaptación / Mente',
    stat_l: '🧬 Linaje / Vínculos'
  }
};

const SPECIES_EN_NAMES = {
  archaea: 'Hydrothermal Archaea (LUCA)',
  cyanobacteria: 'Stromatolite Cyanobacteria',
  dickinsonia: 'Dickinsonia (Ediacaran)',
  anomalocaris: 'Anomalocaris canadensis',
  trilobite: 'Phacops Trilobite',
  dunkleosteus: 'Dunkleosteus terrelli',
  tiktaalik: 'Tiktaalik roseae (Land Pioneer)',
  meganeura: 'Meganeura Giant Dragonfly',
  gorgonopsid: 'Inostrancevia Gorgonopsid',
  lystrosaurus: 'Lystrosaurus ( Disaster Survivor)',
  diplodocus: 'Diplodocus carnegii',
  archaeopteryx: 'Archaeopteryx lithographica',
  mosasaurus: 'Mosasaurus hoffmannii',
  trex: 'Tyrannosaurus rex',
  juramaia: 'Cretaceous Burrowing Mammal',
  megalodon: 'Otodus megalodon',
  smilodon: 'Smilodon Saber-Toothed Cat',
  mammoth: 'Woolly Mammoth',
  dodo: 'Mauritius Dodo',
  mayfly: '24-Hour Mayfly',
  penguin: 'Emperor Penguin',
  salmon: 'Sockeye Salmon',
  seaturtle: 'Green Sea Turtle',
  greenlandshark: '400-Year Greenland Shark',
  hallucigenia: 'Hallucigenia sparsa',
  orthoceras: 'Cameroceras Giant Orthocone',
  pteranodon: 'Pteranodon longiceps',
  bluewhale: 'Blue Whale (180-Ton Titan)',
  australopithecus: 'Australopithecus afarensis (Lucy)',
  homo_erectus: 'Homo erectus (Fire Master)',
  neanderthal: 'Homo neanderthalensis',
  paleolithic_human: 'Paleolithic Cro-Magnon Artist',
  ancient_human: 'Classical Civilization Builder',
  modern_human: 'Modern human'
};

state.langSetting = 'auto';
state.resolvedLang = 'zh';

function readSavedLanguage() {
  try {
    return localStorage.getItem('oneIn46B_lang_v9');
  } catch {
    return null;
  }
}

function detectInitialLanguage() {
  try {
    const params = new URLSearchParams(window.location.search);
    const urlLang = (params.get('lang') || '').toLowerCase();
    const savedLang = readSavedLanguage();
    if (urlLang && ['zh', 'en'].includes(urlLang)) {
      state.langSetting = urlLang;
    } else if (savedLang && ['auto', 'zh', 'en'].includes(savedLang)) {
      state.langSetting = savedLang;
    } else {
      state.langSetting = 'auto';
    }
  } catch (e) {}
  resolveAndApplyLanguage(false);
}

function resolveAndApplyLanguage(showNotification = false) {
  let lang = state.langSetting;
  if (lang === 'auto') {
    const navLang = ((navigator.languages && navigator.languages[0]) || navigator.language || 'zh-CN').toLowerCase();
    if (navLang.startsWith('en')) lang = 'en';
    else lang = 'zh';
  }
  state.resolvedLang = lang === 'en' ? 'en' : 'zh';
  const dict = I18N_DICT[state.resolvedLang];
  document.documentElement.lang = state.resolvedLang === 'zh' ? 'zh-CN' : state.resolvedLang;

  // Update select dropdown
  const sel = document.getElementById('globalLangSelect');
  if (sel) sel.value = state.langSetting;

  // Update top brand & nav tabs
  document.getElementById('brandMark').textContent = toText('46亿', '46B');
  const brandTitleEl = document.querySelector('#brandHomeBtn .serif-title');
  if (brandTitleEl) brandTitleEl.textContent = dict.brand_title;
  const brandSubEl = document.querySelector('#brandHomeBtn p');
  if (brandSubEl) brandSubEl.textContent = dict.brand_sub;

  const navMap = {
    sim: toText('演化', 'Play'),
    atlas: toText('图鉴', 'Atlas'),
    endings: toText('结局', 'Endings'),
    memorial: toText('追思馆', 'Memorial')
  };
  document.querySelectorAll('.nav-tab').forEach(btn => {
    const k = btn.getAttribute('data-nav');
    if (navMap[k]) btn.textContent = navMap[k];
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  const heroH1 = document.querySelector('#subview-lobby h1');
  if (heroH1) heroH1.textContent = toText('选择你要走过的一生', 'Choose a life');
  const lobbyH2 = document.querySelector('#subview-lobby h2');
  if (lobbyH2) lobbyH2.textContent = dict.lobby_settings_title;

  const startBtn = document.getElementById('startBirthBtn');
  if (startBtn) startBtn.innerHTML = `<span>${dict.btn_start_gen1}</span>`;
  const playHumanBtn = document.getElementById('quickPlayHumanBtn');
  if (playHumanBtn) playHumanBtn.innerHTML = `<span>${dict.btn_play_human}</span>`;
  const quickDinoBtn = document.getElementById('randomQuickStartBtn');
  if (quickDinoBtn) quickDinoBtn.textContent = dict.btn_quick_dino;

  // Refresh manualSpeciesSelect options
  const manualSel = document.getElementById('manualSpeciesSelect');
  if (manualSel) {
    manualSel.innerHTML = SPECIES_DB.map(s => `<option value="${s.id}">${s.emoji} ${escapeHtml(speciesName(s))} (${escapeHtml(translateText(s.eraName))})</option>`).join('');
    manualSel.value = state.manualSpeciesId;
  }

  if (state.activeLife && state.simSubview === 'active') {
    renderActiveDashboard();
    updateParryButton();
  } else if (state.activeLife && state.simSubview === 'birthcard') {
    renderBirthRegistrationCard();
  }
  if (state.currentView === 'atlas') renderAtlasView();
  if (state.simSubview === 'ending') renderEndingReport(getPosterRecord());
  if (state.currentView === 'endings') renderEndingsGallery();
  if (state.currentView === 'memorial') renderMemorialHall();
  if (state.simSubview === 'lobby') renderPastLivesLobby();
  if (!document.getElementById('viralPosterModal').classList.contains('hidden')) renderSharePosterCanvas();
  updateSaveLobby();
  renderLobbyGameHub();
  localizePlayerView();

  if (showNotification) {
    const langNames = { zh: '简体中文', en: 'English', ja: '日本語', es: 'Español' };
    showToast(`🌐 Language switched to: ${langNames[state.resolvedLang]} (${state.langSetting === 'auto' ? 'Auto-Detected' : 'Manual'})`);
  }
}

function bindLanguageSelect() {
  detectInitialLanguage();
  const select = document.getElementById('globalLangSelect');
  select.addEventListener('change', () => {
    state.langSetting = select.value;
    try { localStorage.setItem('oneIn46B_lang_v9', state.langSetting); } catch {}
    resolveAndApplyLanguage();
  });
}

// ==================== v10.0 TRUE INDIE GAME PRODUCT ENGINE (REAL-TIME ACTION STAGE, SKILLS, RELICS & SANCTUARY) ====================
const RELICS_CATALOG = [
  { id: 'rel_cambrian_eye', name: '方解石全景魔眼', icon: '👁️', rarity: 'SSR', desc: '拾取范围 +20，命运检定 +1。', bonus: { da: 12, crit: 15 } },
  { id: 'rel_trex_fang', name: '君王碎骨龙牙', icon: '🦷', rarity: 'UR', desc: '对首领造成的伤害提高 50%。', bonus: { de: 15, atk: 45 } },
  { id: 'rel_meteor_core', name: '希克苏鲁伯陨铁核', icon: '☄️', rarity: 'UR', desc: '灾变选择造成的体魄损失减少约三分之一。', bonus: { dv: 18, da: 15 } },
  { id: 'rel_arch_feather', name: '索伦霍芬虹彩飞羽', icon: '🪶', rarity: 'SSR', desc: '舞台移动响应提高 40%。', bonus: { da: 14, speed: 1.4 } },
  { id: 'rel_prometheus_fire', name: '盗火者不灭余烬', icon: '🔥', rarity: 'SSR', desc: '觉醒怒气获取速度+50%，[R]血脉觉醒持续时间延长4秒', bonus: { de: 12, dl: 12 } },
  { id: 'rel_dunk_plate', name: '邓氏鱼断头台胸甲', icon: '🛡️', rarity: 'SR', desc: '舞台伤害降低约 30%，护盾冷却缩短 2 秒。', bonus: { dv: 16 } },
  { id: 'rel_mom_schoolbag', name: '妈妈缝补的旧书包', icon: '🎒', rarity: 'SSR', desc: '每个新阶段增加 3 羁绊、2 适应。', bonus: { dl: 18, da: 10 } },
  { id: 'rel_dad_bicycle', name: '父亲的二八大杠车铃', icon: '🚲', rarity: 'SR', desc: '选择造成的能量损失减少 25%。', bonus: { dv: 12, de: 12 } },
  { id: 'rel_station_ticket', name: '22岁月台折角车票', icon: '🎫', rarity: 'SSR', desc: '装备时，命运检定点数 +3。', bonus: { da: 12, dl: 14 } },
  { id: 'rel_baskerville_crest', name: '巴斯克维尔暗金族徽', icon: '⚜️', rarity: 'UR', desc: '从第二世起，装备后降生时四项属性各 +5。', bonus: { dv: 10, de: 10, da: 10, dl: 10 } },
  { id: 'rel_whale_heart', name: '深海蓝鲸百吨之心', icon: '💓', rarity: 'SSR', desc: '每个新阶段回复 5 体魄。', bonus: { dv: 22 } },
  { id: 'rel_astral_key', name: '戴森球量子星匙', icon: '🌌', rarity: 'UR', desc: '技能冷却缩短 28%，每次完成抉择获得 1 进化点。', bonus: { da: 20, dnaGain: 1 } }
];

const SANCTUARY_TALENTS = [
  { id: 'meta_dna_start', name: '🧬 先祖基因盈余', icon: '🧬', costBase: 30, maxLv: 5, desc: '每次新开局或进入下一世时，初始额外获得 +1 🧬可用进化点' },
  { id: 'meta_orb_magnet', name: '🌌 生物电磁引力场', icon: '🌌', costBase: 25, maxLv: 5, desc: '每级扩大舞台拾取范围 2 点。' },
  { id: 'meta_lucky_d20', name: '🎲 命运塔罗眷顾', icon: '🎲', costBase: 35, maxLv: 5, desc: '每级增加命运检定点数 1 点。' },
  { id: 'meta_boss_slayer', name: '⚔️ 弑神利颚本能', icon: '⚔️', costBase: 30, maxLv: 5, desc: '每级增加 25% 首领伤害。' },
  { id: 'meta_vital_shield', name: '🛡️ 休伦冰期坚韧体魄', icon: '🛡️', costBase: 25, maxLv: 5, desc: '每级增加初始体魄 3 点。' },
  { id: 'meta_heirloom_drop', name: '🎁 远古遗物探秘者', icon: '🎁', costBase: 40, maxLv: 5, desc: '每级使每个舞台宝箱多产出 2 琥珀。' }
];

const BOSS_ROSTER_BY_ERA = [
  { name: '冥古宙黑烟囱热液风暴', icon: '🌋', baseHp: 220 },
  { name: '寒武纪奇虾深渊领主', icon: '🦐', baseHp: 320 },
  { name: '泥盆纪邓氏鱼装甲暴君', icon: '🦈', baseHp: 420 },
  { name: '白垩纪地狱溪霸王龙王', icon: '🦖', baseHp: 560 },
  { name: '希克苏鲁伯灭世陨星浩劫', icon: '☄️', baseHp: 750 }
];

const HUMAN_BOSS_ROSTER = [
  { name: '童年高烧与寒门风雨试炼', icon: '🌧️', baseHp: 200 },
  { name: '十八岁高考独木桥千军万马', icon: '📚', baseHp: 350 },
  { name: '二十五岁异乡生存与房租账单', icon: '🏙️', baseHp: 450 },
  { name: '三十五岁职场寒冬与中年危机', icon: '⚡', baseHp: 600 },
  { name: '岁月流逝与病房生死守望', icon: '🏥', baseHp: 720 }
];

// Initialize v10 Game State extensions
function initializeGameSystems() {
  let savedAmber = 120;
  let savedMeta = { meta_dna_start: 1, meta_orb_magnet: 1, meta_lucky_d20: 1, meta_boss_slayer: 1, meta_vital_shield: 1, meta_heirloom_drop: 1 };
  let savedUnlockedRelics = ['rel_cambrian_eye', 'rel_mom_schoolbag', 'rel_dunk_plate'];
  try {
    const a = localStorage.getItem('oneIn46B_amber_v10');
    if (a !== null) {
      const n = Number(a);
      if (a.trim() && isCount(n)) savedAmber = n;
      else saveIssue ||= 'legacy';
    }
    const m = localStorage.getItem('oneIn46B_meta_v10');
    if (m) {
      const values = JSON.parse(m);
      if (!isObject(values)) throw new Error('Invalid legacy talents');
      for (const talent of SANCTUARY_TALENTS) {
        const level = values[talent.id];
        if (isCount(level) && level <= talent.maxLv) savedMeta[talent.id] = level;
      }
    }
    const r = localStorage.getItem('oneIn46B_relics_v10');
    if (r) {
      const values = JSON.parse(r);
      if (!Array.isArray(values)) throw new Error('Invalid legacy relics');
      const known = new Set(RELICS_CATALOG.map(relic => relic.id));
      savedUnlockedRelics = [...new Set(values.filter(id => known.has(id)))];
    }
  } catch { saveIssue ||= 'legacy'; }

  state.amberCrystals = savedAmber;
  state.metaTalents = savedMeta;
  state.unlockedRelics = savedUnlockedRelics;
  state.equippedRelics = savedUnlockedRelics.slice(0, 3);
  state.activeCultTab = 'workshop';
  state.enableDestinyRoulette = true;

  resetStageGameplay();
  loadSession();
  document.getElementById('enableDestinyRouletteToggle').checked = state.enableDestinyRoulette;
  document.getElementById('gentleModeToggle').checked = state.gentleMode;
  document.getElementById('paceSelect').value = String(state.paceMs);
  bindV10GameEvents();
  bindV11Events();
  initV12CockpitFeatures();
  updateAmberDisplay();
}

function resetStageGameplay() {
  state.gameLoop = {
    playerLv: 1,
    exp: 20,
    maxExp: 100,
    dnaPoints: 2 + (state.metaTalents.meta_dna_start || 0),
    rage: 45,
    combo: 0,
    comboTimer: 0,
    autoPilot: true,
    px: 245,
    py: 185,
    targetX: 245,
    targetY: 185,
    vx: 0,
    vy: 0,
    shieldTimer: 0,
    awakenedTimer: 0,
    bossLoot: [],
    boss: {
      rosterIndex: -1,
      name: '纪元首领 · 寒武纪奇虾霸主',
      icon: '🦐',
      hp: 300,
      maxHp: 300,
      x: 685,
      y: 185,
      hitFlash: 0,
      defeatedCount: 0
    },
    skills: {
      q: { cd: 0, maxCd: 5.0 },
      w: { cd: 0, maxCd: 8.0 },
      e: { cd: 0, maxCd: 10.0 },
      r: { cd: 0, maxCd: 12.0 }
    },
    collectibles: [], // { x, y, vx, vy, type: 'dna'|'food'|'chest'|'hazard', r, emoji, color }
    projectiles: [],  // { x, y, vx, vy, color, dmg, fromPlayer }
    hitStopFrames: 0,
    runes: { r: 2, b: 2, p: 1 },
    unlockedAlchemy: [],
    afterimages: [],
    bossTelegraph: { active: false, timer: 0, cooldown: 210 },
    organCutscene: { active: false, timer: 0, title: '', sub: '' },
    feverTimer: 0,
    bullseye: { active: false, x: 580, y: 160, r: 34, timer: 0, cooldown: 140 },
    camZoom: 1.0,
    targetZoom: 1.0,
    camFocusX: 450,
    camFocusY: 180,
    hitStop: 0,
    bossBullets: [],
    coinParticles: [],
    cardCastEffects: []
  };

  spawnInitialStageCollectibles();
  initRunQuests();
  updateAmberDisplay();
}

function saveV10MetaProgress() {
  saveSession();
  updateAmberDisplay();
}

function hasRelic(id) {
  return state.equippedRelics.includes(id);
}

function talentLevel(id) {
  return state.metaTalents[id] || 0;
}

function updateActiveVitals(life) {
  setVisibleText(document.getElementById('statVitalityVal'), life.vitality);
  const bar = document.getElementById('statVitalityBar');
  if (bar) bar.style.width = `${life.vitality}%`;
}

function damagePlayerOnStage(life, amount) {
  const effective = hasRelic('rel_dunk_plate') ? Math.max(1, Math.round(amount * 0.7)) : amount;
  life.vitality = clampStat(life.vitality - effective);
  updateActiveVitals(life);
  return effective;
}

function updateAmberDisplay() {
  const topEl = document.getElementById('topAmberCrystalCount');
  if (topEl) topEl.textContent = state.amberCrystals;
  const dockEl = document.getElementById('dockAmberVal');
  if (dockEl) dockEl.textContent = state.amberCrystals;
  const dnaHud = document.getElementById('gameHudDnaPoints');
  const dnaDock = document.getElementById('dockDnaPointsVal');
  const pts = state.gameLoop ? state.gameLoop.dnaPoints : 2;
  if (dnaHud) dnaHud.textContent = pts;
  if (dnaDock) dnaDock.textContent = pts;
}

function spawnInitialStageCollectibles() {
  if (!state.gameLoop) return;
  state.gameLoop.collectibles = [];
  for (let i = 0; i < 6; i++) {
    spawnSingleStageEntity(i % 2 === 0 ? 'dna' : 'food');
  }
  spawnSingleStageEntity('chest');
}

function spawnSingleStageEntity(forcedType = null) {
  if (!state.gameLoop) return;
  const r = Math.random();
  const type = forcedType || (r < 0.44 ? 'dna' : r < 0.78 ? 'food' : r < 0.91 ? 'hazard' : 'chest');
  const isMod = state.activeLife && isModernHumanSpecies(state.activeLife.species);
  const map = {
    dna: { emoji: isMod ? '📘' : '🧬', color: '#22d3ee', r: 13 },
    food: { emoji: isMod ? '🪙' : '🍖', color: '#34d399', r: 14 },
    chest: { emoji: '🎁', color: '#fbbf24', r: 16 },
    hazard: { emoji: isMod ? '⚡' : '☄️', color: '#f43f5e', r: 15 }
  };
  const cfg = map[type] || map.dna;
  state.gameLoop.collectibles.push({
    type,
    x: 160 + Math.random() * 640,
    y: 55 + Math.random() * 240,
    vx: (Math.random() - 0.5) * 1.4,
    vy: (Math.random() - 0.5) * 1.1,
    r: cfg.r,
    emoji: cfg.emoji,
    color: cfg.color,
    pulse: Math.random() * Math.PI * 2
  });
}

function syncBossForCurrentStage() {
  const life = state.activeLife;
  if (!life || !state.gameLoop) return;
  const isMod = isModernHumanSpecies(life.species);
  const idx = Math.min(4, Math.floor(((life.currentTick || 1) - 1) / 4));
  const roster = isMod ? HUMAN_BOSS_ROSTER : BOSS_ROSTER_BY_ERA;
  const bTemplate = roster[idx] || roster[0];
  const scaleMult = 1 + ((life.currentTick || 1) - 1) * 0.12 + ((life.generation || 1) - 1) * 0.25;
  const maxHp = Math.round(bTemplate.baseHp * scaleMult);

  if (state.gameLoop.boss.rosterIndex !== idx) {
    state.gameLoop.boss.rosterIndex = idx;
    state.gameLoop.bossTelegraph = { active: false, timer: 0, cooldown: 210 };
    state.gameLoop.bossBullets = [];
    state.gameLoop.boss.name = bTemplate.name;
    state.gameLoop.boss.icon = bTemplate.icon;
    state.gameLoop.boss.maxHp = maxHp;
    state.gameLoop.boss.hp = maxHp;
  }
  updateGameTopHudUI();
}

function setVisibleText(element, value) {
  const text = String(value);
  if (element && element.textContent !== text) element.textContent = text;
}

function updateGameTopHudUI() {
  const gl = state.gameLoop;
  if (!gl) return;
  const life = state.activeLife;
  const isMod = life && isModernHumanSpecies(life.species);

  const lvEl = document.getElementById('gameHudPlayerLv');
  if (lvEl) lvEl.textContent = gl.playerLv;
  const expText = document.getElementById('gameHudExpText');
  if (expText) expText.textContent = `${gl.exp} / ${gl.maxExp} EXP`;
  const expBar = document.getElementById('gameHudExpBar');
  if (expBar) expBar.style.width = `${Math.min(100, Math.round((gl.exp / gl.maxExp) * 100))}%`;

  const bIcon = document.getElementById('gameBossIcon');
  if (bIcon) bIcon.textContent = gl.boss.icon;
  const bName = document.getElementById('gameBossName');
  if (bName) setVisibleText(bName, translateText(gl.boss.name));
  const bHpText = document.getElementById('gameBossHpText');
  if (bHpText) bHpText.textContent = `HP ${Math.max(0, Math.round(gl.boss.hp))} / ${gl.boss.maxHp}`;
  const bHpBar = document.getElementById('gameBossHpBar');
  if (bHpBar) bHpBar.style.width = `${Math.max(0, Math.min(100, Math.round((gl.boss.hp / gl.boss.maxHp) * 100)))}%`;

  const comboEl = document.getElementById('gameHudComboText');
  if (comboEl) {
    comboEl.textContent = `${gl.combo} HIT`;
  }

  const rageBar = document.getElementById('gameRageBar');
  const rageVal = document.getElementById('gameRageVal');
  if (rageBar) rageBar.style.width = `${Math.min(100, gl.rage)}%`;
  if (rageVal) rageVal.textContent = `${Math.min(100, Math.round(gl.rage))}%`;

  // Update Skill Labels for Human vs Creature
  const qName = document.getElementById('skillNameQ');
  const wName = document.getElementById('skillNameW');
  const eName = document.getElementById('skillNameE');
  const rName = document.getElementById('skillNameR');
  if (qName && wName && eName && rName) {
    if (isMod) {
      qName.textContent = '破局冲刺斩';
      wName.textContent = '初心逆境盾';
      eName.textContent = '灵感顿悟场';
      rName.textContent = '燃魂潜能爆发';
    } else {
      qName.textContent = '狂暴利颚突袭';
      wName.textContent = '泰坦晶甲护盾';
      eName.textContent = '全屏引力共鸣';
      rName.textContent = '远古血脉觉醒';
    }
  }

  updateAmberDisplay();
}

function gainGameExpAndCombo(expAmount, hitCombo = true) {
  const gl = state.gameLoop;
  if (!gl) return;
  if (hitCombo) {
    gl.combo += 1;
    if (gl.runes && Math.random() < 0.45) {
      const rKey = ['r', 'b', 'p'][Math.floor(Math.random() * 3)];
      gl.runes[rKey] = (gl.runes[rKey] || 0) + 1;
    }
    if (typeof advanceQuestProgress === 'function') advanceQuestProgress('q_combo', 1);
    gl.comboTimer = 180; // 3 seconds window
  }
  const mult = 1 + Math.min(1.5, gl.combo * 0.08);
  gl.exp += Math.round(expAmount * mult);
  gl.rage = Math.min(100, gl.rage + (hasRelic('rel_prometheus_fire') ? 9 : 6));

  while (gl.exp >= gl.maxExp) {
    gl.exp -= gl.maxExp;
    gl.playerLv += 1;
    gl.maxExp = Math.round(gl.maxExp * 1.25);
    gl.dnaPoints += 1;
    addStageFloatingText(`🎉 LEVEL UP! 升至 Lv.${gl.playerLv} (获得 +1 🧬进化点!)`, '#fde047', gl.px, gl.py - 35);
    addStageSonarRipple(gl.px, gl.py, 'rgba(250, 204, 21, 0.95)');
    playChord([523.25, 659.25, 783.99, 1046.5], 0.22, 'triangle');
    renderCultivationDock();
  }
  updateGameTopHudUI();
}

function damageStageBoss(rawDmg, isCrit = false) {
  const gl = state.gameLoop;
  const life = state.activeLife;
  if (!gl || !life || life.isDead || gl.boss.hp <= 0) return;
  const metaBonus = 1 + talentLevel('meta_boss_slayer') * 0.25;
  const jawBonus = 1 + ((life.organLevels && life.organLevels.jaws) || 0) * 0.2;
  const relicBonus = hasRelic('rel_trex_fang') ? 1.5 : 1.0;
  const finalDmg = Math.round(rawDmg * metaBonus * jawBonus * relicBonus * (isCrit ? 1.75 : 1.0));

  gl.boss.hp = Math.max(0, gl.boss.hp - finalDmg);
  gl.boss.hitFlash = 10;

  if (!state.slashArcs) state.slashArcs = [];
  state.slashArcs.push({
    x: gl.boss.x - 20 + (Math.random() - 0.5) * 30,
    y: gl.boss.y + (Math.random() - 0.5) * 30,
    angle: (Math.random() - 0.5) * 1.2,
    scale: isCrit ? 1.25 : 0.85,
    alpha: 1.0,
    color: isCrit ? '#fde047' : '#f43f5e'
  });

  if (isCrit && typeof triggerCameraImpact === 'function') {
    triggerCameraImpact(1.12, gl.boss.x, gl.boss.y, 2);
  }
  addStageFloatingText(
    isCrit ? `💥暴击 -${finalDmg} HP!` : `⚔️ -${finalDmg}`,
    isCrit ? '#fde047' : '#fb7185',
    gl.boss.x - 20,
    gl.boss.y - 35
  );

  if (gl.boss.hp <= 0) {
    // Boss Defeated! Huge celebratory explosion & loot drop!
    const defeatedBossName = gl.boss.name;
    gl.boss.defeatedCount += 1;
    gl.bossLoot.push(defeatedBossName);
    gl.bossTelegraph.active = false;
    gl.bossBullets = [];
    gl.dnaPoints += 2;
    state.amberCrystals += 15;
    life.vitality = clampStat(life.vitality + 10);
    life.energy = clampStat(life.energy + 12);
    life.adaptation = clampStat(life.adaptation + 12);

    triggerStageScreenShake();
    addStageSonarRipple(gl.boss.x, gl.boss.y, 'rgba(251, 191, 36, 0.98)');
    addStageFloatingText(`🏆 击破「${gl.boss.name}」! 奖励 +2🧬进化点 & +15💎琥珀!`, '#fde047', 420, 75);
    playChord([440, 554.37, 659.25, 880], 0.3, 'sawtooth');

    // Spawn 3 bonus DNA orbs + 1 Relic Chest on Boss death
    for (let k = 0; k < 3; k++) spawnSingleStageEntity('dna');
    spawnSingleStageEntity('chest');

    saveV10MetaProgress();
    renderActiveDashboard();
    renderCultivationDock();
  }
  updateGameTopHudUI();
}

// ==================== ACTIVE SKILLS [Q] [W] [E] [R] EXECUTION ====================
function castGameSkill(slotKey) {
  const gl = state.gameLoop;
  const life = state.activeLife;
  if (!gl || !life || !combatIsRunning()) return;

  const sk = gl.skills[slotKey];
  if (!sk || sk.cd > 0) {
    showToast('⏳ 技能冷却中，请稍候！');
    return;
  }

  if (slotKey === 'r' && gl.rage < 50) {
    showToast(toText('怒气达到 50% 才能觉醒。', 'Awakening requires 50% rage.'));
    return;
  }
  advanceQuestProgress('q_skill', 1);
  const cdReduction = hasRelic('rel_astral_key') ? 0.72 : 1.0;

  if (slotKey === 'q') {
    sk.cd = sk.maxCd * cdReduction;
    state.stageLungeOffset = 95;
    gl.targetX = Math.min(620, gl.px + 180);
    // Absorb nearby orbs & deal heavy slash damage to Boss
    gl.collectibles.forEach(c => {
      if (c.type !== 'hazard') { c.x = gl.px; c.y = gl.py; }
    });
    damageStageBoss(95, true);
    gainGameExpAndCombo(35, true);
    playChord([330, 493.88, 659.25], 0.18, 'sawtooth');
  } else if (slotKey === 'w') {
    sk.cd = (sk.maxCd - (hasRelic('rel_dunk_plate') ? 2 : 0)) * cdReduction;
    gl.shieldTimer = 240; // 4 seconds invulnerability shield
    life.vitality = clampStat(life.vitality + 15);
    addStageSonarRipple(gl.px, gl.py, 'rgba(16, 185, 129, 0.95)');
    addStageFloatingText('🛡️ 泰坦晶甲护盾开启! 体魄+15 & 4秒无敌反伤!', '#34d399', gl.px, gl.py - 40);
    playChord([392, 523.25, 659.25], 0.22, 'sine');
    renderActiveDashboard();
  } else if (slotKey === 'e') {
    sk.cd = sk.maxCd * cdReduction;
    addStageSonarRipple(gl.px, gl.py, 'rgba(34, 211, 238, 0.95)');
    // Magnet pull all non-hazard collectibles to player!
    gl.collectibles.forEach(c => {
      if (c.type !== 'hazard') {
        c.vx = (gl.px - c.x) * 0.18;
        c.vy = (gl.py - c.y) * 0.18;
      } else {
        // Destroy hazards and convert them into EXP!
        c.type = 'dna';
        c.emoji = '🧬';
        c.color = '#22d3ee';
      }
    });
    life.adaptation = clampStat(life.adaptation + 12);
    gainGameExpAndCombo(40, true);
    addStageFloatingText('🌌 全屏引力共鸣! 净化危机并磁吸全屏基因球!', '#22d3ee', gl.px, gl.py - 45);
    playChord([523.25, 659.25, 987.77], 0.24, 'triangle');
    renderActiveDashboard();
  } else if (slotKey === 'r') {
    sk.cd = sk.maxCd * cdReduction;
    gl.rage = 0;
    gl.awakenedTimer = hasRelic('rel_prometheus_fire') ? 660 : 420;
    gl.dnaPoints += 2;
    life.vitality = clampStat(life.vitality + 20);
    life.energy = clampStat(life.energy + 20);
    life.adaptation = clampStat(life.adaptation + 20);
    life.lineage = clampStat(life.lineage + 20);
    triggerStageScreenShake();
    damageStageBoss(220, true);
    addStageSonarRipple(gl.px, gl.py, 'rgba(251, 191, 36, 1.0)');
    addStageFloatingText('🔥 远古血脉觉醒!! 全属性+20 · 进化点+2 · 金身暴走!!', '#fde047', 420, 65);
    playChord([261.63, 392.0, 523.25, 783.99, 1046.5], 0.35, 'sawtooth');
    renderActiveDashboard();
    renderCultivationDock();
  }
  updateGameTopHudUI();
  saveSession();
}

// ==================== FOUR-TAB CULTIVATION DOCK RENDERER ====================
function renderCultivationDock() {
  if (typeof renderV11AlchemyPanel === 'function') renderV11AlchemyPanel();
  if (typeof renderV11BountyQuests === 'function') renderV11BountyQuests();
  const life = state.activeLife;
  const gl = state.gameLoop;
  if (!gl) return;
  updateAmberDisplay();

  const relicBadge = document.getElementById('cultRelicCountBadge');
  if (relicBadge) relicBadge.textContent = (state.unlockedRelics || []).length;

  // 1. Render Tab 1: Organ Point-Buy Workshop
  const wsGrid = document.getElementById('workshopOrganCardsGrid');
  if (wsGrid && life) {
    const metaList = getActiveOrganMetaList(life.species);
    wsGrid.innerHTML = metaList.map(m => {
      const lv = (life.organLevels && life.organLevels[m.key]) || 0;
      const cost = lv >= 3 ? 2 : 1;
      const canAfford = gl.dnaPoints >= cost && lv < 5;
      const stageLabel = m.stages[Math.min(m.stages.length - 1, lv)] || `Lv.${lv} 觉醒态`;
      const perkText = lv >= 3 ? '★已激活神话部位特效與伤害加成!' : '升至Lv.3解锁部位觉醒特效';
      return `
        <div class="p-3 rounded-xl bg-slate-900/95 border ${lv >= 3 ? 'border-amber-400/70' : 'border-slate-800'} flex flex-col justify-between gap-2">
          <div>
            <div class="flex items-center justify-between">
              <span class="font-extrabold text-white text-xs">${m.name}</span>
              <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono font-bold text-[11px]">Lv.${lv} / 5</span>
            </div>
            <div class="text-[11px] text-emerald-300 font-medium mt-1">${stageLabel}</div>
            <div class="text-[10px] text-slate-400 mt-0.5">${perkText}</div>
          </div>
          <button type="button" data-upgrade-organ="${m.key}" class="ws-organ-up-btn w-full py-1.5 rounded-lg font-extrabold text-xs transition ${
            lv >= 5
              ? 'bg-slate-800 text-amber-300 cursor-default'
              : canAfford
              ? 'bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-md'
              : 'bg-slate-800/80 text-slate-500 border border-slate-700'
          }">
            ${lv >= 5 ? '👑 已达神话满阶 (Lv.5)' : `🔨 消耗 ${cost}🧬 强化部位 ➔ Lv.${lv + 1}`}
          </button>
        </div>
      `;
    }).join('');

    wsGrid.querySelectorAll('.ws-organ-up-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-upgrade-organ');
        upgradeOrganInWorkshop(key);
      });
    });
  }

  // 2. Render Tab 2: Relics & Heirlooms Inventory
  const eqRow = document.getElementById('equippedRelicsRow');
  const invGrid = document.getElementById('relicInventoryGrid');
  if (eqRow && invGrid) {
    const eqIds = state.equippedRelics || [];
    eqRow.innerHTML = [0, 1, 2].map(slotIdx => {
      const rId = eqIds[slotIdx];
      const rel = RELICS_CATALOG.find(r => r.id === rId);
      if (!rel) {
        return `
          <div class="p-3 rounded-xl bg-slate-950/70 border border-dashed border-slate-700 flex items-center justify-center text-slate-500 text-xs">
            ➕ 圣物槽位 #${slotIdx + 1} (点击下方收藏库装备)
          </div>
        `;
      }
      const cls = rel.rarity === 'UR' ? 'relic-card-ur' : rel.rarity === 'SSR' ? 'relic-card-ssr' : 'relic-card-sr';
      return `
        <div class="p-3 rounded-xl ${cls} flex items-start gap-2.5">
          <div class="text-2xl p-2 rounded-xl bg-slate-950/80 border border-amber-400/40">${rel.icon}</div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between">
              <span class="font-extrabold text-white text-xs truncate">${rel.name}</span>
              <span class="text-[10px] font-mono font-extrabold px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-200">${rel.rarity}</span>
            </div>
            <p class="text-[10px] text-slate-200 mt-1 leading-snug">${rel.desc}</p>
          </div>
        </div>
      `;
    }).join('');

    invGrid.innerHTML = RELICS_CATALOG.map(rel => {
      const unlocked = (state.unlockedRelics || []).includes(rel.id);
      const isEquipped = eqIds.includes(rel.id);
      return `
        <button type="button" data-relic-id="${rel.id}" class="relic-inv-item p-2 rounded-xl border text-left transition ${
          isEquipped
            ? 'border-emerald-400 bg-emerald-950/40 text-white shadow-md'
            : unlocked
            ? 'border-slate-700 bg-slate-900/90 text-slate-200 hover:border-amber-400'
            : 'border-slate-800/70 bg-slate-950/50 text-slate-600 opacity-60'
        }" title="${rel.desc}">
          <div class="flex items-center justify-between">
            <span class="text-lg">${unlocked ? rel.icon : '🔒'}</span>
            <span class="text-[9px] font-mono px-1 rounded ${rel.rarity === 'UR' ? 'bg-amber-500/30 text-amber-300' : 'bg-slate-800 text-slate-400'}">${rel.rarity}</span>
          </div>
          <div class="font-bold truncate mt-1">${unlocked ? rel.name : '未解锁圣物'}</div>
          <div class="text-[9px] ${isEquipped ? 'text-emerald-300 font-bold' : 'text-slate-400'} truncate">
            ${isEquipped ? '✓ 已装备生效' : unlocked ? '点击佩戴' : '祈愿/宝箱掉落'}
          </div>
        </button>
      `;
    }).join('');

    invGrid.querySelectorAll('.relic-inv-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const rId = btn.getAttribute('data-relic-id');
        if (!(state.unlockedRelics || []).includes(rId)) {
          showToast('🔒 该圣物尚未解锁！可通过【🎲祈愿锻造】或在舞台拾取【🎁宝箱】获得！');
          return;
        }
        const idx = state.equippedRelics.indexOf(rId);
        if (idx >= 0) {
          state.equippedRelics.splice(idx, 1);
        } else {
          if (state.equippedRelics.length >= 3) state.equippedRelics.shift();
          state.equippedRelics.push(rId);
        }
        renderCultivationDock();
        showToast('🎒 已更新圣物装备栏！被动属性已实时生效！');
      });
    });
  }

  // 3. Render Tab 3: Companion Squad
  const compGrid = document.getElementById('companionSquadGrid');
  if (compGrid && life) {
    const isMod = isModernHumanSpecies(life.species);
    const kids = (life.offspringCount || 0) + (gl.companions || 0);
    const cards = [
      {
        title: isMod ? '💌 灵魂伴侣 / 挚爱助战' : '🌺 领地配偶 / 共生盟友',
        icon: isMod ? '💑' : '🦖',
        status: life.lineage >= 65 ? '★ 默契满格 (每3秒协同发射支援光束)' : '已结伴同行 (自动拾取附近基因球)',
        atk: `+${15 + (life.organLevels.crest || 0) * 12} 助战火力`
      },
      {
        title: isMod ? `👶 家族继承人编队 (${kids}人)` : `🪺 破壳子嗣群落 (${kids}只)`,
        icon: isMod ? '👧' : '🥚',
        status: kids > 0 ? `✓ 已激活 ${kids} 名子嗣跟随助战 & 锁定下一世继承!` : '⚠️ 尚未繁衍子嗣 (点击右上按钮可立即繁衍!)',
        atk: `+${kids * 22} 群落齐射伤害`
      },
      {
        title: '🧚 远古共生守护灵',
        icon: '✨',
        status: '自动在画布周围产生生命脉冲，每阶段回复 +3 体魄',
        atk: '全屏自动聚拢 30% 经验球'
      }
    ];
    compGrid.innerHTML = cards.map(c => `
      <div class="p-3 rounded-xl bg-slate-900/90 border border-purple-500/30 space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="font-bold text-white">${c.icon} ${c.title}</span>
          <span class="text-[10px] font-mono text-amber-300">${c.atk}</span>
        </div>
        <p class="text-[11px] text-slate-300 leading-snug">${c.status}</p>
      </div>
    `).join('');
  }

  // 4. Render Tab 4: Ancestral Sanctuary (Meta-Progression)
  const sancGrid = document.getElementById('sanctuaryTalentsGrid');
  if (sancGrid) {
    sancGrid.innerHTML = SANCTUARY_TALENTS.map(t => {
      const lv = (state.metaTalents && state.metaTalents[t.id]) || 0;
      const cost = t.costBase * (lv + 1);
      const canBuy = state.amberCrystals >= cost && lv < t.maxLv;
      return `
        <div class="p-3 rounded-xl bg-slate-900/95 border border-purple-500/40 flex flex-col justify-between gap-2">
          <div>
            <div class="flex items-center justify-between">
              <span class="font-extrabold text-white">${t.icon} ${t.name}</span>
              <span class="text-[11px] font-mono font-bold text-purple-300">Lv.${lv} / ${t.maxLv}</span>
            </div>
            <p class="text-[11px] text-slate-300 mt-1 leading-snug">${t.desc}</p>
          </div>
          <button type="button" data-meta-id="${t.id}" class="meta-upgrade-btn w-full py-1.5 rounded-lg font-extrabold text-xs transition ${
            lv >= t.maxLv
              ? 'bg-slate-800 text-amber-300 cursor-default'
              : canBuy
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white shadow-md'
              : 'bg-slate-800 text-slate-500 border border-slate-700'
          }">
            ${lv >= t.maxLv ? '👑 已达永恒满级' : `💎 消耗 ${cost} 琥珀永久升级`}
          </button>
        </div>
      `;
    }).join('');

    sancGrid.querySelectorAll('.meta-upgrade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mId = btn.getAttribute('data-meta-id');
        const tObj = SANCTUARY_TALENTS.find(x => x.id === mId);
        if (!tObj) return;
        const lv = (state.metaTalents && state.metaTalents[mId]) || 0;
        if (lv >= tObj.maxLv) return;
        const cost = tObj.costBase * (lv + 1);
        if (state.amberCrystals < cost) {
          showToast(`💎 永恒琥珀不足（需 ${cost} 琥珀）！在舞台击破首领或完成阶段即可获取！`);
          return;
        }
        state.amberCrystals -= cost;
        state.metaTalents[mId] = lv + 1;
        if (mId === 'meta_dna_start' && state.gameLoop) {
          state.gameLoop.dnaPoints += 1;
        }
        saveV10MetaProgress();
        renderCultivationDock();
        playChord([523.25, 659.25, 783.99, 1046.5], 0.25, 'triangle');
        showToast(`🏛️ 先祖圣殿突破：【${tObj.name}】升至 Lv.${lv + 1}！永久加成已生效！`);
      });
    });
  }
  localizePlayerView();
}

function upgradeOrganInWorkshop(organKey) {
  const life = state.activeLife;
  const gl = state.gameLoop;
  if (!life || life.isDead || !gl || saveLocked || !ORGAN_KEYS.includes(organKey)) return;
  const curLv = life.organLevels[organKey] || 0;
  if (curLv >= 5) {
    showToast('👑 该部位已进化至神话满阶 (Lv.5)！');
    return;
  }
  const cost = curLv >= 3 ? 2 : 1;
  if (gl.dnaPoints < cost) {
    showToast(`🧬 进化点不足（需 ${cost} 点）！快在上方画布点击捕食基因球或使用 [Q]/[E] 技能获取！`);
    return;
  }
  gl.dnaPoints -= cost;
  if (typeof advanceQuestProgress === 'function') advanceQuestProgress('q_organ', 1);
  if (gl.organCutscene) {
    const metaObj = getActiveOrganMetaList(life.species).find(m => m.key === organKey);
    gl.organCutscene = {
      active: true,
      timer: 85,
      title: '🧬 基因序列重构完成：' + (metaObj ? metaObj.name : organKey) + ' 升至 Lv.' + (curLv + 1) + '！',
      sub: '画布躯体已实时生长变形 · 全属性与首领伤害大幅提升！'
    };
  }
  life.organLevels[organKey] = curLv + 1;
  state.lastUpgradedOrgan = organKey;

  // Boost corresponding stats & trigger visual evolution shockwave on stage!
  life.vitality = clampStat(life.vitality + 6);
  life.energy = clampStat(life.energy + 6);
  life.adaptation = clampStat(life.adaptation + 8);
  life.lineage = clampStat(life.lineage + 6);

  const meta = getActiveOrganMetaList(life.species).find(m => m.key === organKey);
  addStageSonarRipple(gl.px, gl.py, 'rgba(34, 211, 238, 0.98)');
  triggerStageScreenShake();
  addStageFloatingText(
    `🧬 部位突破! ${meta ? meta.name : organKey} 升至 Lv.${curLv + 1}! (躯体具象进化)`,
    '#fde047',
    gl.px,
    gl.py - 42
  );
  playChord([440, 554.37, 659.25, 880], 0.24, 'triangle');
  renderActiveDashboard();
  renderV11BountyQuests();
  saveSession();
}

function renderLobbyGameHub() {
  const aEl = document.getElementById('lobbyAmberCount');
  if (aEl) aEl.textContent = state.amberCrystals;
  const rEl = document.getElementById('lobbyRelicCount');
  if (rEl) rEl.textContent = (state.unlockedRelics || []).length;
  const listEl = document.getElementById('lobbyQuickSanctuaryList');
  if (listEl) {
    listEl.innerHTML = SANCTUARY_TALENTS.slice(0, 4).map(t => {
      const lv = (state.metaTalents && state.metaTalents[t.id]) || 0;
      const cost = t.costBase * (lv + 1);
      return `
        <button type="button" data-lobby-meta="${t.id}" class="lobby-meta-btn p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left transition flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="font-bold text-white truncate">${t.icon} ${t.name.slice(2)}</span>
            <span class="font-mono text-[10px] text-purple-300">Lv.${lv}</span>
          </div>
          <div class="text-[10px] text-amber-300 font-mono mt-1">升级: ${cost}💎</div>
        </button>
      `;
    }).join('');
    listEl.querySelectorAll('.lobby-meta-btn').forEach(b => {
      b.addEventListener('click', () => {
        const mId = b.getAttribute('data-lobby-meta');
        const tObj = SANCTUARY_TALENTS.find(x => x.id === mId);
        if (!tObj) return;
        const lv = (state.metaTalents && state.metaTalents[mId]) || 0;
        const cost = tObj.costBase * (lv + 1);
        if (state.amberCrystals < cost || lv >= tObj.maxLv) {
          showToast('💎 琥珀不足或已满级！进入游戏击破首领可赢取大量琥珀！');
          return;
        }
        state.amberCrystals -= cost;
        state.metaTalents[mId] = lv + 1;
        saveV10MetaProgress();
        renderLobbyGameHub();
        renderCultivationDock();
        playChord([523.25, 659.25, 783.99], 0.2, 'triangle');
        showToast('🏛️ 永久天赋【' + tObj.name + '】升至 Lv.' + (lv + 1) + '！');
      });
    });
  }
  localizePlayerView();
}

function summonRelicGacha(useAmber = false) {
  const gl = state.gameLoop;
  if (!gl || saveLocked) return;
  if (useAmber && !RELICS_CATALOG.some(r => r.rarity !== 'SR' && !state.unlockedRelics.includes(r.id))) {
    showToast(toText('高阶遗物已全部收集。', 'All high-tier relics are collected.'));
    return;
  }
  if (useAmber) {
    if (state.amberCrystals < 30) {
      showToast('💎 永恒琥珀不足 30 点！击败舞台首领可快速获取琥珀！');
      return;
    }
    state.amberCrystals -= 30;
  } else {
    if (gl.dnaPoints < 2) {
      showToast('🧬 进化点不足 2 点！在舞台吃基因球或升级即可获得！');
      return;
    }
    gl.dnaPoints -= 2;
  }

  const pool = useAmber
    ? RELICS_CATALOG.filter(r => r.rarity === 'UR' || r.rarity === 'SSR')
    : RELICS_CATALOG;
  const lockedPool = pool.filter(r => !(state.unlockedRelics || []).includes(r.id));
  const pickPool = lockedPool.length > 0 ? lockedPool : pool;
  const picked = pickPool[Math.floor(Math.random() * pickPool.length)];

  if (!state.unlockedRelics.includes(picked.id)) {
    state.unlockedRelics.push(picked.id);
  }
  if (state.equippedRelics.length < 3 && !state.equippedRelics.includes(picked.id)) {
    state.equippedRelics.push(picked.id);
  }

  if (state.simSubview === 'active' && state.activeLife && picked.bonus) {
    state.activeLife.vitality = clampStat(state.activeLife.vitality + (picked.bonus.dv || 4));
    state.activeLife.energy = clampStat(state.activeLife.energy + (picked.bonus.de || 4));
    state.activeLife.adaptation = clampStat(state.activeLife.adaptation + (picked.bonus.da || 6));
    state.activeLife.lineage = clampStat(state.activeLife.lineage + (picked.bonus.dl || 4));
  }

  saveV10MetaProgress();
  renderCultivationDock();
  renderActiveDashboard();
  addStageSonarRipple(gl.px, gl.py, 'rgba(251, 191, 36, 0.98)');
  addStageFloatingText(`🎁 祈愿降临：【${picked.rarity} · ${picked.name}】!`, '#fde047', 420, 95);
  playChord([523.25, 659.25, 783.99, 1046.5], 0.28, 'sine');
  showToast(`🎉 恭喜获得 ${picked.rarity} 级圣物/传家宝：【${picked.icon} ${picked.name}】！`);
}

// ==================== D20 DESTINY ROULETTE OVERLAY ANIMATION ====================
function runDestinyRouletteBeforeChoice(stageData, chosen, ageStr, callback) {
  const toggleEl = document.getElementById('enableDestinyRouletteToggle');
  if (toggleEl && !toggleEl.checked) {
    callback(1.0);
    return;
  }
  const modal = document.getElementById('destinyRouletteModal');
  if (!modal) {
    callback(1.0);
    return;
  }

  const life = state.activeLife;
  const orgKey = chosen.organUpgrade || 'senses';
  const orgBonus = life && life.organLevels ? (life.organLevels[orgKey] || 0) * 2 : 2;
  const metaBonus = talentLevel('meta_lucky_d20');
  const relicBonus = (hasRelic('rel_station_ticket') ? 3 : 0) + (hasRelic('rel_cambrian_eye') ? 1 : 0);
  const baseRoll = 1 + Math.floor(Math.random() * 20);
  const finalRoll = Math.min(25, baseRoll + orgBonus + metaBonus + relicBonus);

  const isCrit = finalRoll >= 18;
  openGameDialog(modal);
  const wheel = document.getElementById('rouletteWheelCircle');
  const numEl = document.getElementById('rouletteDiceNumber');
  const tierEl = document.getElementById('rouletteTierLabel');
  const formEl = document.getElementById('rouletteFormulaBreakdown');
  const outEl = document.getElementById('rouletteOutcomePreview');
  const titleEl = document.getElementById('rouletteChoiceTitle');

  if (titleEl) titleEl.textContent = translateText(chosen.label);
  if (wheel) {
    wheel.classList.remove('d20-spinning');
    void wheel.offsetWidth;
    wheel.classList.add('d20-spinning');
  }

  let ticks = 0;
  let finished = false;
  const finishAnim = () => {
    if (finished) return;
    finished = true;
    clearInterval(rollInterval);
    state.commitDecision = null;
    closeGameDialog(modal);
    if (isCrit && state.gameLoop) {
      state.gameLoop.dnaPoints += 1;
      addStageFloatingText(`🎲 命运轮盘 ${finalRoll}点【神话大成功】! 获得额外经验与 +1🧬!`, '#fde047', 420, 70);
    }
    damageStageBoss(isCrit ? 110 : 65, isCrit);
    gainGameExpAndCombo(isCrit ? 45 : 28, true);
    callback(isCrit ? 1.5 : 1.0);
  };

  const skipBtn = document.getElementById('skipRouletteAnimBtn');
  if (skipBtn) skipBtn.onclick = finishAnim;
  state.commitDecision = finishAnim;

  const rollInterval = setInterval(() => {
    ticks++;
    if (ticks < 7) {
      if (numEl) numEl.textContent = Math.floor(1 + Math.random() * 20);
      if (tierEl) tierEl.textContent = '🎲 命运轮盘转动中...';
      playTone(380 + ticks * 45, 0.05, 'triangle', 0.03);
    } else {
      clearInterval(rollInterval);
      if (numEl) numEl.textContent = finalRoll;
      if (tierEl) {
        tierEl.textContent = isCrit ? '🌟 神话大成功 CRITICAL! (额外经验 & +1🧬)' : '✨ 检定通过 SUCCESS!';
        tierEl.className = isCrit ? 'text-xs font-extrabold text-amber-300 mt-0.5' : 'text-xs font-bold text-emerald-300 mt-0.5';
      }
      if (formEl) {
        formEl.textContent = `掷骰 ${baseRoll} + 器官加成 +${orgBonus} + 圣物/圣殿 +${metaBonus + relicBonus} = ${finalRoll} 点`;
      }
      if (outEl) {
        outEl.textContent = chosen.outcome || '命运的齿轮轰然转动，你的躯体与灵魂完成了蜕变！';
      }
      playChord(isCrit ? [523.25, 659.25, 783.99, 1046.5] : [440, 554.37, 659.25], 0.2, 'sine');
      setTimeout(finishAnim, 520);
    }
  }, 65);
}

// ==================== REAL-TIME STAGE GAMEPLAY OVERLAY RENDERER (CALLED EVERY FRAME ON CANVAS) ====================
function updateAndDrawV10StageGameplay(ctx, w, h, life, t) {
  const gl = state.gameLoop;
  if (!gl || !life) return;

  // 1. Update Skill Cooldowns & Timers
  const dt = 1 / 60;
  ['q', 'w', 'e', 'r'].forEach(k => {
    const sk = gl.skills[k];
    if (sk.cd > 0) {
      sk.cd = Math.max(0, sk.cd - dt);
    }
    const ov = document.getElementById('skillCdOverlay' + k.toUpperCase());
    if (ov) {
      if (sk.cd > 0.05) {
        ov.classList.remove('hidden');
        setVisibleText(ov, sk.cd.toFixed(1) + 's');
      } else {
        ov.classList.add('hidden');
      }
    }
  });

  if (gl.shieldTimer > 0) gl.shieldTimer--;
  if (gl.awakenedTimer > 0) {
    gl.awakenedTimer--;
    if (gl.awakenedTimer % 25 === 0) {
      // Fire golden awakening beam at Boss!
      gl.projectiles.push({
        x: gl.px + 30,
        y: gl.py - 10,
        vx: 11,
        vy: (gl.boss.y - gl.py) * 0.05,
        color: '#fde047',
        dmg: 35
      });
    }
  }
  if (gl.comboTimer > 0) {
    gl.comboTimer--;
    if (gl.comboTimer === 0) {
      gl.combo = 0;
      updateGameTopHudUI();
    }
  }

  // 2. Auto-Pilot or Manual Target Steering
  if (gl.autoPilot && gl.collectibles.length > 0) {
    const good = gl.collectibles.find(c => c.type !== 'hazard');
    if (good) {
      gl.targetX = Math.max(120, Math.min(560, good.x));
      gl.targetY = Math.max(65, Math.min(h - 65, good.y));
    }
  }
  const movement = hasRelic('rel_arch_feather') ? 0.112 : 0.08;
  gl.px += (gl.targetX - gl.px) * movement;
  gl.py += (gl.targetY - gl.py) * movement;

  // Sync stageCreatureX/Y so the protagonist organism follows player movement!
  state.stageCreatureX = gl.px;
  state.stageCreatureY = gl.py;

  // 3. Companion Auto-Support Fire every 2.5 seconds
  if ((gl.companionClock = ((gl.companionClock || 0) + 1) % 140) === 0 && (life.offspringCount > 0 || gl.companions > 0)) {
    gl.projectiles.push({
      x: gl.px - 20,
      y: gl.py - 20,
      vx: 9.5,
      vy: (gl.boss.y - gl.py) * 0.04,
      color: '#c084fc',
      dmg: 22 + Math.min(6, (life.offspringCount || 0) + (gl.companions || 0)) * 8
    });
  }

  // 4. Spawn new collectibles periodically
  if (gl.collectibles.length < 7 && Math.random() < 0.045) {
    spawnSingleStageEntity();
  }

  // 5. Render & Collide Collectible Entities (DNA Orbs, Food, Relic Chests, Hazards)
  const pickupRadius = 48 + (hasRelic('rel_cambrian_eye') ? 20 : 0) + talentLevel('meta_orb_magnet') * 2;
  for (let i = gl.collectibles.length - 1; i >= 0; i--) {
    const c = gl.collectibles[i];
    c.x += c.vx;
    c.y += c.vy;
    if (c.x < 90 || c.x > w - 90) c.vx *= -1;
    if (c.y < 48 || c.y > h - 52) c.vy *= -1;

    // Draw glowing orb & emoji
    ctx.save();
    const pulseR = c.r + Math.sin(t * 5 + c.pulse) * 2.5;
    ctx.fillStyle = c.color;
    ctx.globalAlpha = 0.24;
    ctx.beginPath();
    ctx.arc(c.x, c.y, pulseR + 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 0.95;
    ctx.strokeStyle = c.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(c.x, c.y, pulseR, 0, Math.PI * 2);
    ctx.stroke();

    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(c.emoji, c.x, c.y);
    ctx.restore();

    // Check collision with Player Creature
    const dist = Math.hypot(c.x - gl.px, c.y - gl.py);
    if (dist < pickupRadius) {
      gl.collectibles.splice(i, 1);
      if (c.type === 'dna') {
        gainGameExpAndCombo(24, true);
        if (Math.random() < 0.35) gl.dnaPoints += 1;
        addStageFloatingText(`🧬 基因吸收 +24 EXP`, '#22d3ee', c.x, c.y - 12);
        playTone(660, 0.06, 'sine', 0.025);
      } else if (c.type === 'food') {
        life.energy = clampStat(life.energy + 3);
        setVisibleText(document.getElementById('statEnergyVal'), life.energy);
        document.getElementById('statEnergyBar').style.width = `${life.energy}%`;
        gainGameExpAndCombo(20, true);
        // Fire a bio-bolt at the Boss when eating prey!
        gl.projectiles.push({
          x: gl.px + 25,
          y: gl.py,
          vx: 10,
          vy: (gl.boss.y - gl.py) * 0.05,
          color: '#34d399',
          dmg: 28
        });
        addStageFloatingText(`🍖 捕食连击! 能量+3 & 吐息追击!`, '#34d399', c.x, c.y - 12);
        playTone(540, 0.07, 'triangle', 0.025);
      } else if (c.type === 'chest') {
        gl.dnaPoints += 1;
        const amber = 8 + talentLevel('meta_heirloom_drop') * 2;
        state.amberCrystals += amber;
        gainGameExpAndCombo(45, true);
        saveV10MetaProgress();
        addStageSonarRipple(c.x, c.y, 'rgba(251, 191, 36, 0.95)');
        addStageFloatingText(`🎁 开启远古宝箱! +1🧬进化点 & +${amber}💎琥珀!`, '#fde047', c.x, c.y - 18);
        playChord([523.25, 659.25, 783.99], 0.18, 'triangle');
        renderCultivationDock();
      } else if (c.type === 'hazard') {
        if (gl.shieldTimer > 0 || gl.awakenedTimer > 0) {
          damageStageBoss(45, true);
          addStageFloatingText(`🛡️ 完美格挡反伤 -45 HP!`, '#34d399', c.x, c.y - 14);
          playTone(780, 0.08, 'sine', 0.03);
        } else {
          const damage = damagePlayerOnStage(life, 3);
          addStageFloatingText(`☄️ 遭遇危机擦伤 -${damage}体魄 (可按 W 开盾)`, '#f43f5e', c.x, c.y - 14);
        }
      }
      updateGameTopHudUI();
    }
  }

  // 6. Update & Draw Projectiles flying into Boss
  for (let i = gl.projectiles.length - 1; i >= 0; i--) {
    const p = gl.projectiles[i];
    p.x += p.vx;
    p.y += p.vy;

    ctx.save();
    drawGlowingDisc(ctx, p.x, p.y, 6, p.color, 8);
    ctx.restore();

    if (Math.hypot(p.x - gl.boss.x, p.y - gl.boss.y) < 55 || p.x > w - 60) {
      gl.projectiles.splice(i, 1);
      damageStageBoss(p.dmg, Math.random() < 0.28);
    }
  }

  // 7. Draw Player Shield Halo or Awakening Golden Aura on Canvas
  if (gl.shieldTimer > 0) {
    ctx.save();
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 4]);
    ctx.beginPath();
    ctx.arc(gl.px, gl.py, 58 + Math.sin(t * 8) * 4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
  if (gl.awakenedTimer > 0) {
    ctx.save();
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(gl.px, gl.py, 68 + Math.sin(t * 12) * 6, 0, Math.PI * 2);
    strokeStageGlow(ctx, '#f59e0b', 8);
    ctx.restore();
  }
}

function usePracticeAction(key) {
  const life = state.activeLife;
  life.practiceActions ||= {};
  if (life.practiceActions[key] === life.currentTick) return false;
  life.practiceActions[key] = life.currentTick;
  return true;
}

function updateActiveLayout(modern) {
  const active = document.getElementById('subview-active');
  const mode = modern ? 'modern' : 'evolution';
  if (active.dataset.mode === mode) return;
  const decision = document.getElementById('v12CockpitDecisionZone');
  const anchor = document.getElementById(modern ? 'storyBeforeStageAnchor' : 'storyAfterStageAnchor');
  anchor.after(decision);
  active.dataset.mode = mode;
}

function updateFirstLifeGuide(life) {
  const guide = document.getElementById('firstLifeGuide');
  guide.classList.toggle('hidden', life.currentTick > 4);
  const modern = isModernHumanSpecies(life.species);
  const text = modern
    ? toText('读完场景并选一张牌。红色数值代表这条路的代价。', 'Read the scene and pick a card. Red numbers show the cost.')
    : toText('先收集基因球，再到工坊强化一个器官。', 'Collect a DNA orb, then upgrade an organ in the workshop.');
  document.getElementById('firstLifeObjective').textContent = text;
  document.getElementById('firstLifeControls').textContent = toText(
    '点按舞台或按方向键移动 · Q/W/E/R 施放技能 · 红圈出现时按空格或点弹反',
    'Tap the stage or use the arrow keys to move. Q/W/E/R use skills. Parry the red warning with Space or the Parry button.'
  );
  for (const action of ['Scan', 'Roar', 'Dash']) {
    document.getElementById(`stageAction${action}Btn`).disabled = life.practiceActions?.[action.toLowerCase()] === life.currentTick;
  }
}

function updatePilotDisplay() {
  const button = document.getElementById('toggleStagePilotBtn');
  const pilot = state.gameLoop.autoPilot;
  button.textContent = pilot ? toText('🕹 自动巡航', '🕹 Autopilot') : toText('🕹 手动移动', '🕹 Manual');
  button.setAttribute('aria-pressed', String(pilot));
  const lootButton = document.getElementById('viewBossLootBtn');
  const count = state.gameLoop.bossLoot.length;
  lootButton.classList.toggle('hidden', !count);
  lootButton.textContent = toText(`🎁 首领奖励（${count}）`, `🎁 Boss loot (${count})`);
}

function bindV10GameEvents() {
  for (const id of ['heroStartModeDinoBtn', 'instantArcadeDinoBtn']) {
    document.getElementById(id).addEventListener('click', () => prepareBirthRegistration('trex'));
  }
  for (const id of ['heroStartModeHumanBtn', 'instantArcadeHumanBtn']) {
    document.getElementById(id).addEventListener('click', () => prepareBirthRegistration('modern_human'));
  }
  document.getElementById('lobbyGachaSummonBtn').addEventListener('click', () => {
    if (saveLocked) return;
    summonRelicGacha(true);
    renderLobbyGameHub();
  });
  document.getElementById('viewBossLootBtn').addEventListener('click', () => {
    const loot = state.gameLoop.bossLoot[0];
    if (loot) openBossLootJackpotModal(loot);
  });
  document.getElementById('closeBossLootBtn').addEventListener('click', () => {
    closeGameDialog(document.getElementById('bossLootModal'));
    scheduleNextTick();
  });
  document.getElementById('enableDestinyRouletteToggle').addEventListener('change', saveSession);

  // Skill Hotbar Clicks
  ['q', 'w', 'e', 'r'].forEach(k => {
    const btn = document.getElementById('skillBtn' + k.toUpperCase());
    if (btn) btn.addEventListener('click', () => castGameSkill(k));
  });

  window.addEventListener('keydown', event => {
    if (!combatIsRunning() || !validHotkey(event)) return;
    const key = event.key.toLowerCase();
    const slot = ({ q: 'q', w: 'w', e: 'e', r: 'r', 1: 'q', 2: 'w', 3: 'e', 4: 'r' })[key];
    if (slot && !event.repeat) {
      event.preventDefault();
      castGameSkill(slot);
      return;
    }
    const vector = ({ arrowup: [0, -1], arrowdown: [0, 1], arrowleft: [-1, 0], arrowright: [1, 0] })[key];
    if (!vector) return;
    event.preventDefault();
    const gl = state.gameLoop;
    gl.autoPilot = false;
    gl.targetX = Math.max(95, Math.min(720, gl.targetX + vector[0] * 45));
    gl.targetY = Math.max(55, Math.min(305, gl.targetY + vector[1] * 45));
    updatePilotDisplay();
  });

  // Click also handles taps and leaves vertical scrolling available on touch screens.
  const stageCanvas = document.getElementById('paleoStageCanvas');
  stageCanvas.addEventListener('click', event => {
    if (!combatIsRunning()) return;
    const gl = state.gameLoop;
    const rect = stageCanvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) * stageCanvas.width / rect.width;
    const y = (event.clientY - rect.top) * stageCanvas.height / rect.height;
    if (gl.bullseye.active && Math.hypot(x - gl.bullseye.x, y - gl.bullseye.y) < gl.bullseye.r + 10) {
      triggerBullseyeWeaknessBreak(gl.bullseye.x, gl.bullseye.y);
      return;
    }
    gl.autoPilot = false;
    gl.targetX = Math.max(95, Math.min(720, x));
    gl.targetY = Math.max(50, Math.min(stageCanvas.height - 50, y));
    updatePilotDisplay();
    addStageSonarRipple(x, y, 'rgba(56, 189, 248, 0.85)');
  });

  // Toggle Auto-Pilot
  const pilotBtn = document.getElementById('toggleStagePilotBtn');
  if (pilotBtn) {
    pilotBtn.addEventListener('click', () => {
      if (!state.gameLoop) return;
      state.gameLoop.autoPilot = !state.gameLoop.autoPilot;
      updatePilotDisplay();
      showToast(state.gameLoop.autoPilot ? '🤖 已开启 AI 自动巡航捕食模式！' : '🕹️ 已切换为手动操控模式！点击画布任意位置或按方向键即可移动捕食！');
    });
  }

  // Cultivation Dock Tab Switching
  document.querySelectorAll('.cult-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-cult-tab');
      state.activeCultTab = tab;
      ['workshop', 'relics', 'companions', 'alchemy', 'sanctuary'].forEach(t => {
        const p = document.getElementById('cult-panel-' + t);
        if (p) {
          if (t === tab) p.classList.remove('hidden');
          else p.classList.add('hidden');
        }
      });
      document.querySelectorAll('.cult-tab-btn').forEach(b => {
        const active = b.getAttribute('data-cult-tab') === tab;
        b.className = active
          ? 'cult-tab-btn px-3 py-1.5 rounded-xl text-xs font-extrabold transition bg-emerald-500/25 text-emerald-200 border border-emerald-400/50'
          : 'cult-tab-btn px-3 py-1.5 rounded-xl text-xs font-bold transition bg-slate-900 text-slate-300 hover:text-white border border-slate-800';
      });
      renderCultivationDock();
    });
  });

  // Top Sanctuary Button
  const topSancBtn = document.getElementById('openSanctuaryTopBtn');
  if (topSancBtn) {
    topSancBtn.addEventListener('click', () => {
      if (state.simSubview === 'active') {
        const sancTabBtn = document.querySelector('[data-cult-tab="sanctuary"]');
        if (sancTabBtn) {
          sancTabBtn.click();
          sancTabBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        showToast('🏛️ 进入游戏主剧场后，即可在【先祖永恒天赋树】中消耗琥珀永久加点！当前琥珀: ' + state.amberCrystals);
      }
    });
  }

  // Quick Upgrade Organ Button
  const quickOrgBtn = document.getElementById('quickMaxRandomOrganBtn');
  if (quickOrgBtn) {
    quickOrgBtn.addEventListener('click', () => {
      if (!state.activeLife) return;
      const keys = ['jaws', 'armor', 'lungs', 'senses', 'locomotion', 'crest'];
      const lowestKey = keys.sort((a, b) => (state.activeLife.organLevels[a] || 0) - (state.activeLife.organLevels[b] || 0))[0];
      upgradeOrganInWorkshop(lowestKey);
    });
  }

  // Relic Gacha Buttons
  const gachaDnaBtn = document.getElementById('gachaSummonRelicDnaBtn');
  if (gachaDnaBtn) gachaDnaBtn.addEventListener('click', () => summonRelicGacha(false));
  const gachaAmberBtn = document.getElementById('gachaSummonRelicAmberBtn');
  if (gachaAmberBtn) gachaAmberBtn.addEventListener('click', () => summonRelicGacha(true));

  // Companion Recruit Button
  const compBtn = document.getElementById('summonCompanionBtn');
  if (compBtn) {
    compBtn.addEventListener('click', () => {
      if (!state.gameLoop || !state.activeLife) return;
      if (state.gameLoop.dnaPoints < 2) {
        showToast('🧬 进化点不足 2 点！在舞台捕食基因球即可快速获取！');
        return;
      }
      state.gameLoop.dnaPoints -= 2;
      state.gameLoop.companions = (state.gameLoop.companions || 0) + 1;
      state.activeLife.lineage = clampStat(state.activeLife.lineage + 14);
      addStageSonarRipple(state.gameLoop.px, state.gameLoop.py, 'rgba(192, 132, 252, 0.95)');
      addStageFloatingText('🌺 助战伙伴加入编队', '#c084fc', state.gameLoop.px, state.gameLoop.py - 38);
      playChord([440, 554.37, 659.25], 0.22, 'sine');
      renderActiveDashboard();
      renderCultivationDock();
    });
  }

  renderCultivationDock();
}



// ==================== v11.0 ARCADE & STEAM MASTERPIECE ENGINE EXTENSIONS ====================
const ALCHEMY_RECIPES = [
  {
    id: 'alc_atomic_breath',
    name: '🔥 泰坦核能吐息阵列',
    icon: '🐲',
    cost: { r: 2, b: 1, p: 0 },
    desc: '炼成后每秒自动向首领发射一道炽热红莲激光，造成高额持续灼烧伤害！',
    projColor: '#f43f5e',
    dmg: 38
  },
  {
    id: 'alc_quantum_orbit',
    name: '🌌 量子方解石星轨炮',
    icon: '🛸',
    cost: { r: 0, b: 2, p: 1 },
    desc: '在你的生物/角色周围生成3颗旋转的量子星轨球，自动拦截弹幕并发射脉冲！',
    projColor: '#22d3ee',
    dmg: 42
  },
  {
    id: 'alc_seraph_wings',
    name: '🪶 六翼炽天使生命圣歌',
    icon: '👼',
    cost: { r: 1, b: 1, p: 2 },
    desc: '展开神圣金色光翼，每2秒发射追踪光羽攻击首领，并持续恢复体魄与亲情羁绊！',
    projColor: '#fde047',
    dmg: 48
  }
];

function initRunQuests() {
  state.gameLoop.quests = [
    { id: 'q_combo', title: '🔥 连击达人：达成 5 次捕食连击', cur: 0, target: 5, rewardText: '+2🧬进化点', dnaReward: 2, amberReward: 10, claimed: false },
    { id: 'q_skill', title: '⚡ 技能大师：施放任意主动技能或弹反 2 次', cur: 0, target: 2, rewardText: '+25💎琥珀', dnaReward: 1, amberReward: 25, claimed: false },
    { id: 'q_organ', title: '🧬 躯体蜕变：在工坊强化任意器官 1 次', cur: 0, target: 1, rewardText: '+2🧬 & 全色符文', dnaReward: 2, amberReward: 15, runeReward: true, claimed: false }
  ];

}

function toggleProceduralSynthBGM() {
  state.bgmPlaying = !state.bgmPlaying;
  const iconEl = document.getElementById('bgmIcon');
  const labelEl = document.getElementById('bgmLabel');
  if (iconEl) iconEl.textContent = state.bgmPlaying ? '🎶' : '🎵';
  if (labelEl) labelEl.textContent = `BGM: ${state.bgmPlaying ? '开' : '关'}`;

  if (state.bgmPlaying) {
    playTone(220, 0.2, 'triangle', 0.018, true);
    state.bgmStep = 0;
    const scaleNotes = [220.0, 261.63, 293.66, 329.63, 392.00, 440.0, 523.25, 587.33];
    const bassNotes = [110.0, 130.81, 146.83, 164.81];
    if (state.bgmInterval) clearInterval(state.bgmInterval);
    state.bgmInterval = setInterval(() => {
      if (!state.bgmPlaying || document.hidden) return;
      state.bgmStep = (state.bgmStep + 1) % 16;
      const note = scaleNotes[(state.bgmStep * 3 + (state.bgmStep % 3)) % scaleNotes.length];
      playTone(note, 0.16, 'triangle', 0.018, true);
      if (state.bgmStep % 4 === 0) {
        const bass = bassNotes[(state.bgmStep / 4) % bassNotes.length];
        playTone(bass, 0.32, 'sine', 0.025, true);
      }
    }, 240);
    showToast('🎶 已开启程序化电子史诗合成器背景音乐 (Procedural Synth BGM)！');
  } else {
    if (state.bgmInterval) {
      clearInterval(state.bgmInterval);
      state.bgmInterval = null;
    }
    showToast('🎵 已关闭背景音乐。');
  }
}

function advanceQuestProgress(questId, amount = 1) {
  const gl = state.gameLoop;
  if (!gl || !gl.quests) return;
  const q = gl.quests.find(x => x.id === questId);
  if (q && q.cur < q.target) {
    q.cur = Math.min(q.target, q.cur + amount);
    renderV11BountyQuests();
  }
}

function renderV11BountyQuests() {
  const gl = state.gameLoop;
  if (!gl || !gl.quests) return;

  const rRed = document.getElementById('runeCountRed');
  const rBlue = document.getElementById('runeCountBlue');
  const rPurple = document.getElementById('runeCountPurple');
  if (rRed && gl.runes) rRed.textContent = gl.runes.r;
  if (rBlue && gl.runes) rBlue.textContent = gl.runes.b;
  if (rPurple && gl.runes) rPurple.textContent = gl.runes.p;

  const heroAmber = document.getElementById('heroLauncherAmber');
  if (heroAmber) heroAmber.textContent = state.amberCrystals;

  const grid = document.getElementById('liveBountyQuestsGrid');
  if (!grid) return;

  grid.innerHTML = gl.quests.map((q, idx) => {
    const isReady = q.cur >= q.target;
    return `
      <div class="p-2.5 rounded-xl border ${isReady ? 'quest-ready-claim' : 'bg-slate-900/90 border-slate-800'} flex items-center justify-between gap-2">
        <div class="min-w-0 flex-1">
          <div class="font-bold text-white text-[11px] truncate">${q.title}</div>
          <div class="flex items-center gap-2 mt-1">
            <div class="flex-1 h-1.5 bg-slate-950 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-400 transition-all" style="width: ${Math.min(100, Math.round((q.cur / q.target) * 100))}%"></div>
            </div>
            <span class="font-mono text-[10px] text-emerald-300">${q.cur}/${q.target}</span>
          </div>
        </div>
        <button type="button" data-claim-quest="${idx}" class="claim-quest-btn px-2.5 py-1.5 rounded-lg font-extrabold text-[11px] shrink-0 transition ${
          isReady
            ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
            : 'bg-slate-800 text-slate-400'
        }">
          ${isReady ? `🎁 领取 ${q.rewardText}` : q.rewardText}
        </button>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.claim-quest-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-claim-quest'), 10);
      const q = gl.quests[idx];
      if (saveLocked || !state.activeLife || state.activeLife.isDead || gl !== state.gameLoop) return;
      if (!q || q.cur < q.target) {
        showToast('🎯 任务进度尚未满格，继续在舞台捕食、放技能或加点即可达成！');
        return;
      }
      gl.dnaPoints += (q.dnaReward || 1);
      state.amberCrystals += (q.amberReward || 15);
      if (q.runeReward && gl.runes) {
        gl.runes.r += 1;
        gl.runes.b += 1;
        gl.runes.p += 1;
      }
      // Roll next tier quest!
      q.cur = 0;
      q.target = Math.round(q.target * 1.5) + 1;
      saveV10MetaProgress();
      addStageSonarRipple(gl.px, gl.py, 'rgba(250, 204, 21, 0.98)');
      addStageFloatingText(`🎉 悬赏达成! 领取 +${q.dnaReward}🧬 & +${q.amberReward}💎!`, '#fde047', gl.px, gl.py - 45);
      playChord([523.25, 659.25, 783.99, 1046.5], 0.25, 'triangle');
      renderV11BountyQuests();
      renderCultivationDock();
    });
  });
  localizePlayerView();
}

function renderV11AlchemyPanel() {
  const gl = state.gameLoop;
  const grid = document.getElementById('alchemyRecipesGrid');
  if (!gl || !grid) return;
  if (!gl.runes) gl.runes = { r: 2, b: 2, p: 1 };
  if (!gl.unlockedAlchemy) gl.unlockedAlchemy = [];

  grid.innerHTML = ALCHEMY_RECIPES.map(rec => {
    const unlocked = (gl.unlockedAlchemy || []).includes(rec.id);
    const canCraft = !unlocked && gl.runes.r >= rec.cost.r && gl.runes.b >= rec.cost.b && gl.runes.p >= rec.cost.p;
    return `
      <div class="p-3.5 rounded-xl bg-slate-900/95 border ${unlocked ? 'border-amber-400 bg-amber-950/25' : 'border-slate-800'} flex flex-col justify-between gap-2.5">
        <div>
          <div class="flex items-center justify-between">
            <span class="font-extrabold text-white text-xs">${rec.icon} ${rec.name}</span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded ${unlocked ? 'bg-emerald-500/25 text-emerald-300' : 'bg-slate-800 text-amber-300'}">
              ${unlocked ? '★已激活自动弹幕' : `🔴${rec.cost.r} 🔵${rec.cost.b} 🟣${rec.cost.p}`}
            </span>
          </div>
          <p class="text-[11px] text-slate-300 mt-1.5 leading-snug">${rec.desc}</p>
        </div>
        <button type="button" data-craft-alchemy="${rec.id}" class="craft-alchemy-btn w-full py-2 rounded-lg font-extrabold text-xs transition ${
          unlocked
            ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40'
            : canCraft
            ? 'bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 shadow-lg'
            : 'bg-slate-800 text-slate-500 border border-slate-700'
        }">
          ${unlocked ? '✓ 神话弹幕持续轰击中' : `⚗️ 立即炼成 (${rec.cost.r}🔴 ${rec.cost.b}🔵 ${rec.cost.p}🟣)`}
        </button>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.craft-alchemy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-craft-alchemy');
      const rec = ALCHEMY_RECIPES.find(r => r.id === id);
      if (!rec || gl.unlockedAlchemy.includes(id)) return;
      if (gl.runes.r < rec.cost.r || gl.runes.b < rec.cost.b || gl.runes.p < rec.cost.p) {
        showToast('⚗️ 三色基因符文不足！可点击右上角【🎁消耗1🧬提炼全色基因符文】或在舞台捕食获取！');
        return;
      }
      gl.runes.r -= rec.cost.r;
      gl.runes.b -= rec.cost.b;
      gl.runes.p -= rec.cost.p;
      gl.unlockedAlchemy.push(id);
      addStageSonarRipple(gl.px, gl.py, 'rgba(251, 191, 36, 1.0)');
      triggerStageScreenShake();
      addStageFloatingText(`⚗️ 神话炼成：【${rec.name}】已激活自动弹幕!`, '#fde047', 420, 80);
      playChord([440, 554.37, 659.25, 880, 1046.5], 0.3, 'sawtooth');
      renderV11BountyQuests();
      renderV11AlchemyPanel();
    });
  });
  localizePlayerView();
}

function updateParryButton() {
  const ready = Boolean(state.gameLoop?.bossTelegraph?.active && state.gameLoop.boss.hp > 0);
  const button = document.getElementById('stageParryCounterBtn');
  const label = document.getElementById('parryBtnLabelText');
  button.classList.toggle('parry-urgent-btn', ready);
  setVisibleText(label, ready ? toText('攻击蓄力中！立即弹反', 'Attack incoming! Parry now') : toText('弹反 · 等待红圈', 'Parry · wait for the red warning'));
}

function triggerParryCounterSlash() {
  const gl = state.gameLoop;
  if (!combatIsRunning()) return;

  if (!gl.bossTelegraph.active) {
    showToast(toText('等红圈出现再弹反。', 'Wait for the red warning to parry.'));
    return;
  }
  advanceQuestProgress('q_skill', 1);
  // Resolve damage and the reward once for this telegraph.
  gl.bossTelegraph.active = false;
  updateParryButton();
  gl.bossTelegraph.cooldown = 220;
  gl.shieldTimer = 150;
  state.stageLungeOffset = 110;
  damageStageBoss(260, true);
  gainGameExpAndCombo(65, true);
  gl.dnaPoints += 1;
  triggerStageScreenShake();
  addStageSonarRipple(gl.boss.x, gl.boss.y, 'rgba(250, 204, 21, 1.0)');
  addStageFloatingText('⚡ 极意弹反 PERFECT PARRY!! 暴击 -260 HP & +1🧬!', '#fde047', 420, 60);
  playChord([523.25, 659.25, 880, 1174.66], 0.32, 'sawtooth');
  saveSession();
  renderV11BountyQuests();
}

// Hooked into every frame of the 60FPS Canvas Stage
function renderV11CanvasMasterpieceEffects(ctx, w, h, life, t) {
  const gl = state.gameLoop;
  if (!gl || !life) return;

  // 1. Record & Draw Motion Afterimage Trails (残影拖尾)
  if (!gl.afterimages) gl.afterimages = [];
  if (gl.frame % 3 === 0 && (state.stageLungeOffset > 5 || gl.awakenedTimer > 0 || Math.hypot(gl.targetX - gl.px, gl.targetY - gl.py) > 18)) {
    gl.afterimages.push({
      x: gl.px,
      y: gl.py,
      alpha: 0.48,
      color: gl.awakenedTimer > 0 ? '#fde047' : '#22d3ee'
    });
    if (gl.afterimages.length > 7) gl.afterimages.shift();
  }
  for (let i = gl.afterimages.length - 1; i >= 0; i--) {
    const ai = gl.afterimages[i];
    ai.alpha -= 0.022;
    if (ai.alpha <= 0) {
      gl.afterimages.splice(i, 1);
      continue;
    }
    ctx.save();
    ctx.fillStyle = ai.color;
    ctx.globalAlpha = Math.max(0, ai.alpha);
    ctx.beginPath();
    ctx.arc(ai.x, ai.y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // 2. Render Unlocked Alchemy Mythic Orbiting Satellites & Auto-Beams!
  if (gl.unlockedAlchemy && gl.unlockedAlchemy.length > 0) {
    gl.unlockedAlchemy.forEach((alcId, idx) => {
      const rec = ALCHEMY_RECIPES.find(r => r.id === alcId);
      if (!rec) return;
      // Draw 2 orbiting elemental runes around player
      for (let orbIdx = 0; orbIdx < 2; orbIdx++) {
        const ang = t * 3.8 + idx * 2.1 + orbIdx * Math.PI;
        const ox = gl.px + Math.cos(ang) * 52;
        const oy = gl.py + Math.sin(ang) * 36;
        ctx.save();
        drawGlowingDisc(ctx, ox, oy, 6, rec.projColor, 8);
        ctx.restore();
      }
      // Fire auto-beam every 75 frames
      if ((gl.frame + idx * 25) % 75 === 0) {
        gl.projectiles.push({
          x: gl.px + 25,
          y: gl.py - 12 + idx * 10,
          vx: 12,
          vy: (gl.boss.y - gl.py) * 0.05,
          color: rec.projColor,
          dmg: rec.dmg
        });
      }
    });
  }

  // 3. Boss Red Telegraph Attack Cycle & Parry Prompt!
  if (!gl.bossTelegraph) gl.bossTelegraph = { active: false, timer: 0, cooldown: 180 };
  const bt = gl.bossTelegraph;


  if (gl.boss.hp <= 0) {
    bt.active = false;
  } else if (!bt.active) {
    bt.cooldown--;
    if (bt.cooldown <= 0) {
      bt.active = true;
      bt.timer = 110; // ~1.8 seconds telegraph window to Parry!
    }
  } else {
    bt.timer--;
    // Draw dramatic red warning laser cone & target circle on canvas!
    ctx.save();
    const warnAlpha = 0.25 + 0.2 * Math.sin(t * 18);
    ctx.fillStyle = `rgba(244, 63, 94, ${warnAlpha})`;
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([10, 6]);
    ctx.beginPath();
    ctx.moveTo(gl.boss.x - 30, gl.boss.y);
    ctx.lineTo(gl.px - 20, gl.py - 45);
    ctx.lineTo(gl.px - 20, gl.py + 45);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(translateText('⚠️ 首领必杀蓄力中！按 [空格] 或点右下【⚡极意弹反】反杀！'), w * 0.5, 36);
    ctx.restore();

    if (bt.timer <= 0) {
      bt.active = false;
      bt.cooldown = 210;
      if (gl.shieldTimer > 0 || gl.awakenedTimer > 0) {
        damageStageBoss(120, true);
        addStageFloatingText('🛡️ 护盾自动弹反首领大招 -120 HP!', '#34d399', gl.px, gl.py - 35);
      } else {
        const damage = damagePlayerOnStage(life, 5);
        triggerStageScreenShake();
        addStageFloatingText(`💥 被首领蓄力击中 -${damage} 体魄`, '#f43f5e', gl.px, gl.py - 35);
      }
    }
  }

  updateParryButton();

  // 4. Holographic Organ Evolution Cutscene Banner on Canvas
  if (gl.organCutscene && gl.organCutscene.active) {
    gl.organCutscene.timer--;
    if (gl.organCutscene.timer <= 0) {
      gl.organCutscene.active = false;
    } else {
      ctx.save();
      ctx.fillStyle = 'rgba(2, 6, 23, 0.90)';
      ctx.strokeStyle = '#22d3ee';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(w * 0.5 - 230, h * 0.5 - 38, 460, 68, 14);
      ctx.fill();
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.fillStyle = '#fde047';
      ctx.font = 'bold 14px Inter, sans-serif';
      ctx.fillText(translateText(gl.organCutscene.title), w * 0.5, h * 0.5 - 10);
      ctx.fillStyle = '#a5f3fc';
      ctx.font = '12px Inter, sans-serif';
      ctx.fillText(translateText(gl.organCutscene.sub), w * 0.5, h * 0.5 + 14);
      ctx.restore();
    }
  }
}

function bindV11Events() {
  const bgmBtn = document.getElementById('bgmToggleBtn');
  if (bgmBtn) bgmBtn.addEventListener('click', toggleProceduralSynthBGM);

  // Parry Button & Spacebar Shortcut
  const parryBtn = document.getElementById('stageParryCounterBtn');
  if (parryBtn) {
    parryBtn.addEventListener('click', triggerParryCounterSlash);
  }
  window.addEventListener('keydown', (e) => {
    if (!combatIsRunning() || !validHotkey(e) || e.repeat || e.target?.closest?.('button')) return;
    if (e.code === 'Space') {
      e.preventDefault();
      triggerParryCounterSlash();
    }
  });

  // Free Grant Runes Button in Alchemy Tab
  const freeRuneBtn = document.getElementById('freeGrantRunesBtn');
  if (freeRuneBtn) {
    freeRuneBtn.addEventListener('click', () => {
      const gl = state.gameLoop;
      if (!gl) return;
      if (gl.dnaPoints < 1) {
        showToast('🧬 进化点不足 1 点！在舞台吃基因球或完成悬赏即可获得！');
        return;
      }
      gl.dnaPoints -= 1;
      gl.runes.r += 1;
      gl.runes.b += 1;
      gl.runes.p += 1;
      renderV11BountyQuests();
      renderV11AlchemyPanel();
      updateAmberDisplay();
      playChord([523.25, 659.25, 783.99], 0.18, 'sine');
      showToast('⚗️ 成功提炼全色基因符文：🔴+1  🔵+1  🟣+1！');
    });
  }
}



// ==================== v12.0 COCKPIT MINI-GAMES: WEAKPOINT BULLSEYE QTE, FEVER TIME & BOSS LOOT JACKPOT ====================
function initV12CockpitFeatures() {
  // Fix #toggleLobbyAdvancedSettingsBtn to toggle #lobbyAdvancedSetupDrawer
  const advBtn = document.getElementById('toggleLobbyAdvancedSettingsBtn');
  const advDrawer = document.getElementById('lobbyAdvancedSetupDrawer');
  if (advBtn && advDrawer) {
    advBtn.onclick = () => {
      const isHidden = advDrawer.classList.toggle('hidden');
      advBtn.textContent = isHidden ? '更多物种与设置 ▾' : '收起物种与设置 ▴';
      if (!isHidden) {
        advDrawer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  }

  startLobbyShowcaseCanvasLoop();
  if (typeof initV13NativeGameEngine === 'function') initV13NativeGameEngine();
}

// Live 60FPS Evolution Showcase Canvas in the Lobby Title Screen!
function startLobbyShowcaseCanvasLoop() {
  const canvas = document.getElementById('lobbyHeroShowcaseCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const showcaseSpecies = [
    { id: 'archaea', name: ['深海古菌', 'Archaea'], time: ['38亿年前', '3.8 billion years ago'], scale: 0.65, col: '#34d399', organs: { jaws: 0, armor: 0, lungs: 0, senses: 1, locomotion: 0, crest: 0 } },
    { id: 'anomalocaris', name: ['奇虾', 'Anomalocaris'], time: ['5.1亿年前', '510 million years ago'], scale: 0.82, col: '#22d3ee', organs: { jaws: 2, armor: 1, lungs: 1, senses: 2, locomotion: 1, crest: 1 } },
    { id: 'tiktaalik', name: ['提塔利克鱼', 'Tiktaalik'], time: ['3.75亿年前', '375 million years ago'], scale: 0.90, col: '#a855f7', organs: { jaws: 2, armor: 2, lungs: 2, senses: 2, locomotion: 2, crest: 1 } },
    { id: 'trex', name: ['君王暴龙', 'Tyrannosaurus'], time: ['6600万年前', '66 million years ago'], scale: 1.05, col: '#f43f5e', organs: { jaws: 3, armor: 3, lungs: 2, senses: 3, locomotion: 2, crest: 2 } },
    { id: 'modern_human', name: ['现代人生', 'Modern life'], time: ['公元2026年', '2026 CE'], scale: 1.05, col: '#fbbf24', organs: { jaws: 3, armor: 3, lungs: 3, senses: 3, locomotion: 3, crest: 3 } }
  ];
  for (const item of showcaseSpecies) item.sp = SPECIES_DB.find(species => species.id === item.id);

  function renderLobbyCanvas(ts) {
    if (!document.hidden && state.currentView === 'sim' && state.simSubview === 'lobby') {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width && height && (canvas.width !== width || canvas.height !== height)) {
        canvas.width = width;
        canvas.height = height;
      }
      const w = canvas.width, h = canvas.height;
      const narrow = w < 570;
      const rowHeight = narrow ? h / 2 : h;
      const t = ts * 0.001;
      const bg = ctx.createLinearGradient(0, 0, w, 0);
      bg.addColorStop(0, '#02101f');
      bg.addColorStop(0.5, '#071f29');
      bg.addColorStop(1, '#1f122b');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Connecting DNA Evolution Timeline Stream
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.35)';
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 6]);
      ctx.lineDashOffset = -ts * 0.03;
      ctx.beginPath();
      ctx.moveTo(w * 0.08, rowHeight * 0.45);
      ctx.lineTo(w * 0.92, rowHeight * 0.45);
      if (narrow) {
        ctx.moveTo(w * 0.2, rowHeight * 1.45);
        ctx.lineTo(w * 0.8, rowHeight * 1.45);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      showcaseSpecies.forEach((item, idx) => {
        const secondRow = narrow && idx >= 3;
        const row = secondRow ? 1 : 0;
        const count = narrow ? (secondRow ? 2 : 3) : showcaseSpecies.length;
        const column = secondRow ? idx - 3 : idx;
        const cellWidth = w / count;
        const cx = (column + 0.5) * cellWidth;
        const cy = rowHeight * (row + 0.42) + Math.sin(t * 2.2 + idx) * 3;

        // Spotlight halo
        ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.beginPath();
        ctx.arc(cx, cy, narrow ? 29 : 42, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.translate(cx, cy);
        if (item.sp) {
          drawArticulatedCreature(ctx, item.sp, item.organs, item.scale * (narrow ? 0.47 : 0.65), item.col, t + idx * 0.7, true, false);
        }
        ctx.restore();

        ctx.fillStyle = '#fde68a';
        ctx.font = 'bold 12px system-ui, sans-serif';
        ctx.textAlign = 'center';
        const bottom = (row + 1) * rowHeight;
        ctx.fillText(toText(...item.name), cx, bottom - 22, cellWidth - 8);
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '11px system-ui, sans-serif';
        ctx.fillText(toText(...item.time), cx, bottom - 8, cellWidth - 8);
      });
    }
    requestAnimationFrame(renderLobbyCanvas);
  }
  requestAnimationFrame(renderLobbyCanvas);
}

// Pop up 3-Choice Boss Loot Jackpot Modal when a Boss is defeated!
function openBossLootJackpotModal(bossName) {
  const modal = document.getElementById('bossLootModal');
  const titleEl = document.getElementById('bossLootHeaderTitle');
  const grid = document.getElementById('bossLootOptionsGrid');
  if (!modal || !grid || !state.activeLife || state.activeLife.isDead || !state.gameLoop || saveLocked) return;
  stopSimTimer();

  if (titleEl) titleEl.textContent = toText(
    `击败${bossName}。请选择一项奖励。`,
    `${translateText(bossName)} defeated. Choose one reward.`
  );
  const options = [
    {
      icon: '🧬',
      title: '【全器官基因突破】',
      rarity: 'UR · 躯体飞跃',
      desc: '立即随机提升 2 项部位等级 (+2 Lv)，并额外获得 +3 🧬可用进化点！',
      apply: () => {
        const keys = ['jaws', 'armor', 'lungs', 'senses', 'locomotion', 'crest'];
        for (let i = 0; i < 2; i++) {
          const k = keys[Math.floor(Math.random() * keys.length)];
          state.activeLife.organLevels[k] = Math.min(5, (state.activeLife.organLevels[k] || 0) + 1);
        }
        state.gameLoop.dnaPoints += 3;
        showToast('🧬 已领取【全器官基因突破】：2项部位直接升阶 & +3🧬进化点！');
      }
    },
    {
      icon: '🌈',
      title: '【FEVER 黄金狂热 + 全色符文】',
      rarity: 'SSR · 弹幕狂欢',
      desc: '立即开启 10 秒【FEVER 三倍彩虹激光狂热模式】，并获赠 🔴+2 🔵+2 🟣+2 基因符文！',
      apply: () => {
        state.gameLoop.feverTimer = 600;
        state.gameLoop.runes.r += 2;
        state.gameLoop.runes.b += 2;
        state.gameLoop.runes.p += 2;
        showToast('🌈 已开启 10 秒【FEVER 黄金狂热时刻】并获赠全色基因符文！');
      }
    },
    {
      icon: '👶',
      title: '【休养补给与 25 琥珀】',
      rarity: 'SSR · 传世福泽',
      desc: '四维属性各恢复 18，获得 25 琥珀。',
      apply: () => {
        state.activeLife.vitality = clampStat(state.activeLife.vitality + 18);
        state.activeLife.energy = clampStat(state.activeLife.energy + 18);
        state.activeLife.adaptation = clampStat(state.activeLife.adaptation + 18);
        state.activeLife.lineage = clampStat(state.activeLife.lineage + 18);
        state.amberCrystals += 25;
        showToast('💎 已领取休养补给。');
      }
    }
  ];

  grid.innerHTML = options.map((opt, idx) => `
    <button type="button" data-loot-idx="${idx}" class="loot-pick-btn tarot-3d-card p-4 rounded-2xl border-amber-400/80 text-left flex flex-col justify-between gap-3">
      <div class="space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="text-2xl">${opt.icon}</span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/25 text-amber-200 border border-amber-400/50">${opt.rarity}</span>
        </div>
        <div class="font-extrabold text-sm text-white">${opt.title}</div>
        <p class="text-xs text-slate-300 leading-relaxed">${opt.desc}</p>
      </div>
      <div class="w-full py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs text-center">
        🎁 立即收下此战利品
      </div>
    </button>
  `).join('');

  openGameDialog(modal);
  grid.querySelectorAll('.loot-pick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.getAttribute('data-loot-idx'), 10);
      if (!options[i] || modal.classList.contains('hidden') || saveLocked) return;
      state.gameLoop.bossLoot.shift();
      options[i].apply();
      closeGameDialog(modal);
      saveV10MetaProgress();
      scheduleNextTick();
      playChord([523.25, 659.25, 783.99, 1046.5], 0.28, 'triangle');
      renderActiveDashboard();
      renderCultivationDock();
    });
  });
}

// Render Weakpoint Bullseye QTE & 10-Combo FEVER TIME Rainbow Lasers on the 60FPS Stage!
function renderV12CockpitStageMiniGames(ctx, w, h, life, t) {
  const gl = state.gameLoop;
  if (!gl || !life) return;

  // 1. Trigger FEVER TIME automatically when Combo >= 8!
  if (gl.combo >= 8 && (!gl.feverTimer || gl.feverTimer <= 0)) {
    gl.feverTimer = 420; // 7 seconds of Rainbow Fever!
    addStageFloatingText('🌈 达成高连击！进入 FEVER TIME 黄金狂热模式 (三倍彩虹弹幕)!!', '#fde047', w * 0.5, 52);
    playChord([523.25, 659.25, 783.99, 987.77, 1174.66], 0.3, 'sawtooth');
  }

  const stageWrap = document.getElementById('gameStageWrapper');
  if (gl.feverTimer && gl.feverTimer > 0) {
    gl.feverTimer--;
    if (stageWrap && !stageWrap.classList.contains('fever-time-active')) {
      stageWrap.classList.add('fever-time-active');
    }
    // Fire triple rainbow spread lasers every 18 frames during FEVER TIME!
    if (gl.feverTimer % 18 === 0) {
      const colors = ['#f43f5e', '#fde047', '#22d3ee'];
      [-0.18, 0, 0.18].forEach((vyOff, idx) => {
        gl.projectiles.push({
          x: gl.px + 30,
          y: gl.py + idx * 6 - 6,
          vx: 13.5,
          vy: vyOff * 12,
          color: colors[idx],
          dmg: 30
        });
      });
    }
    // Keep the fever timer below the combat area and clear of the overlay badges.
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.22)';
    const bannerWidth = Math.min(328, w - 160);
    ctx.fillRect((w - bannerWidth) / 2, h - 28, bannerWidth, 22);
    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(translateText(`🌈 FEVER TIME 黄金狂热暴走中!! 三倍彩虹弹幕倾泻 (${(gl.feverTimer / 60).toFixed(1)}s)`), w * 0.5, h - 13, bannerWidth - 12);
    ctx.restore();
  } else if (stageWrap && stageWrap.classList.contains('fever-time-active')) {
    stageWrap.classList.remove('fever-time-active');
  }

  // 2. Weakpoint Bullseye QTE Target on Stage (🎯 弱点破绽靶心)
  if (!gl.bullseye) gl.bullseye = { active: false, x: 580, y: 160, r: 34, timer: 0, cooldown: 130 };
  const be = gl.bullseye;
  if (!be.active) {
    be.cooldown--;
    if (be.cooldown <= 0) {
      be.active = true;
      be.x = 460 + Math.random() * 210;
      be.y = 75 + Math.random() * 195;
      be.r = 38;
      be.timer = 150;
    }
  } else {
    be.timer--;
    be.r = 16 + (be.timer / 150) * 24;
    // Draw Bullseye Target Rings
    ctx.save();
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(be.x, be.y, be.r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = 'rgba(244, 63, 94, 0.85)';
    ctx.beginPath();
    ctx.arc(be.x, be.y, 13, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(translateText('🎯弱点点击!'), be.x, be.y - be.r - 6);
    ctx.restore();

    // Check if player dashed into it
    if (Math.hypot(gl.px - be.x, gl.py - be.y) < 52) {
      triggerBullseyeWeaknessBreak(be.x, be.y);
    } else if (be.timer <= 0) {
      be.active = false;
      be.cooldown = 140;
    }
  }
}

function triggerBullseyeWeaknessBreak(bx, by) {
  const gl = state.gameLoop;
  if (!gl || !gl.bullseye || !gl.bullseye.active) return;
  gl.bullseye.active = false;
  gl.bullseye.cooldown = 135;
  damageStageBoss(175, true);
  gainGameExpAndCombo(50, true);
  addStageSonarRipple(bx, by, 'rgba(250, 204, 21, 1.0)');
  addStageFloatingText('🎯 弱点破防 WEAKNESS BREAK!! -175 HP & 爆出基因雨!', '#fde047', bx, by - 20);
  playChord([587.33, 783.99, 1046.5], 0.22, 'triangle');
  spawnSingleStageEntity('dna');
  spawnSingleStageEntity('food');
}



// ==================== v13.0 NATIVE GAME CLIENT ENGINE: DYNAMIC CAMERA, HIT-STOP, BOSS PHASE 2 & CARD-CAST FX ====================
function initV13NativeGameEngine() {
  // Toggle RPG Cultivation Drawer (#v13CultivationDrawerWrap)
  const cultBtn = document.getElementById('btnToggleCultDrawer');
  const cultWrap = document.getElementById('v13CultivationDrawerWrap');
  const archBtn = document.getElementById('btnToggleArchiveDrawer');
  const archWrap = document.getElementById('v13ArchiveDrawerWrap');

  if (cultBtn && cultWrap) {
    cultBtn.addEventListener('click', () => {
      const isHidden = cultWrap.classList.toggle('hidden');
      cultBtn.classList.toggle('active-drawer', !isHidden);
      if (!isHidden && archWrap) {
        archWrap.classList.add('hidden');
        if (archBtn) archBtn.classList.remove('active-drawer');
        cultWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  if (archBtn && archWrap) {
    archBtn.addEventListener('click', () => {
      const isHidden = archWrap.classList.toggle('hidden');
      archBtn.classList.toggle('active-drawer', !isHidden);
      if (!isHidden && cultWrap) {
        cultWrap.classList.add('hidden');
        if (cultBtn) cultBtn.classList.remove('active-drawer');
        archWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // Toggle Combat Focus Mode (Collapse/Expand Tarot Card Hand to focus on Stage Action)
  const focusBtn = document.getElementById('btnToggleCombatFocusMode');
  const focusLabel = document.getElementById('combatFocusBtnLabel');
  const decZone = document.getElementById('v12CockpitDecisionZone');
  if (focusBtn && decZone) {
    focusBtn.addEventListener('click', () => {
      const hidden = decZone.classList.toggle('hidden');
      if (focusLabel) {
        focusLabel.textContent = hidden ? '🃏 展开命运手牌 [H]' : '⚔️ 收起手牌·专注战斗 [H]';
      }
    });
  }

  // Keyboard Hotkeys C (Cultivation Workshop), M (Archive), H (Toggle Hand)
  window.addEventListener('keydown', (e) => {
    if (state.currentView !== 'sim' || state.simSubview !== 'active' || modalIsOpen() || !validHotkey(e) || e.repeat) return;
    const k = e.key.toLowerCase();
    if (k === 'c' && cultBtn) { e.preventDefault(); cultBtn.click(); }
    else if (k === 'm' && archBtn) { e.preventDefault(); archBtn.click(); }
    else if (k === 'h' && focusBtn) { e.preventDefault(); focusBtn.click(); }
  });
}

// Trigger Dynamic Camera Zoom & Hit-Stop Freeze Frame on big hits!
function triggerCameraImpact(zoomLevel = 1.15, focusX = 450, focusY = 180, hitStopFrames = 3) {
  const gl = state.gameLoop;
  if (!gl) return;
  gl.targetZoom = zoomLevel;
  gl.camFocusX = focusX;
  gl.camFocusY = focusY;
  gl.hitStop = hitStopFrames;

  // Spawn fountain of gravity-based sparks/coins!
  if (!gl.coinParticles) gl.coinParticles = [];
  for (let i = 0; i < 16; i++) {
    const ang = -Math.PI * 0.15 - Math.random() * Math.PI * 0.7;
    const spd = 3.5 + Math.random() * 6.5;
    gl.coinParticles.push({
      x: focusX + (Math.random() - 0.5) * 30,
      y: focusY + (Math.random() - 0.5) * 20,
      vx: Math.cos(ang) * spd,
      vy: Math.sin(ang) * spd - 2,
      color: i % 3 === 0 ? '#fde047' : i % 3 === 1 ? '#22d3ee' : '#f43f5e',
      alpha: 1.0,
      size: 3.5 + Math.random() * 3.5
    });
  }
}

// Launch a glowing 3D Tarot Spell Card into the Canvas when a card is played!
function launchCardCastToCanvas(choice) {
  const gl = state.gameLoop;
  if (!gl) return;
  if (!gl.cardCastEffects) gl.cardCastEffects = [];
  const col = choice.path === 'tyrant' ? '#f43f5e' : choice.path === 'dynasty' ? '#c084fc' : '#22d3ee';
  gl.cardCastEffects.push({
    sx: 450,
    sy: 345,
    tx: gl.px,
    ty: gl.py,
    progress: 0,
    color: col,
    icon: choice.path === 'tyrant' ? '⚔️' : choice.path === 'dynasty' ? '🌺' : '🌌'
  });
  triggerCameraImpact(1.12, gl.px, gl.py, 2);
}

// Rendered on the 60FPS Canvas Stage every frame
function renderV13NativeGameCanvasHUD(ctx, w, h, life, t) {
  const gl = state.gameLoop;
  if (!gl || !life) return;

  // Update Notification Dot on Cultivation Button
  const dot = document.getElementById('cultNotifDot');
  if (dot) {
    if (gl.dnaPoints >= 1) dot.classList.remove('hidden');
    else dot.classList.add('hidden');
  }

  // 1. Smooth Camera Zoom recovery
  if (gl.targetZoom && gl.targetZoom > 1.005) {
    gl.targetZoom += (1.0 - gl.targetZoom) * 0.12;
  } else {
    gl.targetZoom = 1.0;
  }

  // 2. Boss Phase 2 Enrage Mode (<50% HP) & Bullet-Hell Fan Projectiles!
  const bossHpRatio = gl.boss.hp / Math.max(1, gl.boss.maxHp);
  if (bossHpRatio > 0 && bossHpRatio <= 0.55) {
    // Draw Crimson Enrage Lightning Aura around Boss
    ctx.save();
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 4]);
    ctx.lineDashOffset = -t * 40;
    ctx.beginPath();
    ctx.arc(gl.boss.x, gl.boss.y, 64 + Math.sin(t * 14) * 6, 0, Math.PI * 2);
    strokeStageGlow(ctx, '#f43f5e', 7);

    ctx.fillStyle = '#fda4af';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(translateText('🔥 PHASE 2 ENRAGED 狂暴态!'), gl.boss.x, gl.boss.y - 72);
    ctx.restore();

    // Fire 3-way fan bullet-hell every 135 frames
    if (!gl.bossBullets) gl.bossBullets = [];
    if (gl.frame % 135 === 0 && gl.bossBullets.length < 6) {
      [-0.28, 0, 0.28].forEach(angOff => {
        const baseAng = Math.atan2(gl.py - gl.boss.y, gl.px - gl.boss.x) + angOff;
        gl.bossBullets.push({
          x: gl.boss.x - 35,
          y: gl.boss.y,
          vx: Math.cos(baseAng) * 4.2,
          vy: Math.sin(baseAng) * 4.2,
          r: 8,
          color: '#f43f5e'
        });
      });
    }
  }

  // Update & Draw Boss Bullet-Hell Projectiles
  if (gl.bossBullets && gl.bossBullets.length > 0) {
    for (let i = gl.bossBullets.length - 1; i >= 0; i--) {
      const b = gl.bossBullets[i];
      b.x += b.vx;
      b.y += b.vy;

      ctx.save();
      drawGlowingDisc(ctx, b.x, b.y, b.r, '#f43f5e', 8);
      ctx.fillStyle = '#fde047';
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r * 0.45, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const dPlayer = Math.hypot(b.x - gl.px, b.y - gl.py);
      if (dPlayer < 42) {
        gl.bossBullets.splice(i, 1);
        if (gl.shieldTimer > 0 || gl.awakenedTimer > 0) {
          // Reflect bullet back at Boss!
          gl.projectiles.push({
            x: gl.px + 20,
            y: gl.py,
            vx: 14,
            vy: (gl.boss.y - gl.py) * 0.05,
            color: '#fde047',
            dmg: 65
          });
          addStageFloatingText('⚡ 护盾反弹弹幕 -65 HP!', '#fde047', gl.px, gl.py - 28);
          playTone(820, 0.07, 'sine', 0.03);
        } else {
          const damage = damagePlayerOnStage(life, 2);
          addStageFloatingText(`💥 -${damage} HP (可走位躲避或按 W 反弹)`, '#fb7185', gl.px, gl.py - 25);
        }
      } else if (b.x < 10 || b.x > w - 10 || b.y < 10 || b.y > h - 10) {
        gl.bossBullets.splice(i, 1);
      }
    }
  }

  // 3. Render Gravity Sparks & Gold Coin Fountain Particles
  if (gl.coinParticles && gl.coinParticles.length > 0) {
    for (let i = gl.coinParticles.length - 1; i >= 0; i--) {
      const cp = gl.coinParticles[i];
      cp.x += cp.vx;
      cp.y += cp.vy;
      cp.vy += 0.28; // gravity
      cp.alpha -= 0.024;
      if (cp.alpha <= 0) {
        gl.coinParticles.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = cp.alpha;
      drawGlowingDisc(ctx, cp.x, cp.y, cp.size, cp.color, 6);
      ctx.restore();
    }
  }

  // 4. Render Card-Cast Spell Animation flying from Tarot Hand into Creature!
  if (gl.cardCastEffects && gl.cardCastEffects.length > 0) {
    for (let i = gl.cardCastEffects.length - 1; i >= 0; i--) {
      const cc = gl.cardCastEffects[i];
      cc.progress += 0.07;
      if (cc.progress >= 1) {
        gl.cardCastEffects.splice(i, 1);
        addStageSonarRipple(gl.px, gl.py, cc.color);
        continue;
      }
      const cx = cc.sx + (gl.px - cc.sx) * cc.progress;
      const cy = cc.sy + (gl.py - cc.sy) * cc.progress - Math.sin(cc.progress * Math.PI) * 65;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(cc.progress * Math.PI * 2);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
      ctx.strokeStyle = cc.color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(-18, -24, 36, 48, 6);
      ctx.fill();
      strokeStageGlow(ctx, cc.color, 7);
      ctx.font = '18px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cc.icon, 0, 0);
      ctx.restore();
    }
  }

  // 5. Render Native On-Canvas Virtual Joystick & Crosshair HUD (Bottom-Left of Stage)
  const jx = 54, jy = h - 54, jr = 26;
  ctx.save();
  ctx.fillStyle = 'rgba(2, 6, 23, 0.68)';
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.arc(jx, jy, jr, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Joystick knob offset toward movement target
  const dx = gl.targetX - gl.px;
  const dy = gl.targetY - gl.py;
  const dist = Math.hypot(dx, dy);
  const maxKnob = 12;
  const kx = jx + (dist > 2 ? (dx / dist) * Math.min(maxKnob, dist * 0.2) : Math.cos(t * 2) * 4);
  const ky = jy + (dist > 2 ? (dy / dist) * Math.min(maxKnob, dist * 0.2) : Math.sin(t * 2) * 4);

  drawGlowingDisc(ctx, kx, ky, 9, '#22d3ee', 7);

  ctx.fillStyle = 'rgba(226, 232, 240, 0.75)';
  ctx.font = 'bold 8.5px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(translateText(gl.autoPilot ? 'AI巡航' : '手动摇杆'), jx, jy + jr + 11);
  ctx.restore();
}


window.addEventListener('DOMContentLoaded', initApp);
