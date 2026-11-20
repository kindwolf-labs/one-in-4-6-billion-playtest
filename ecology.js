const ECOLOGY_CHALLENGES = [
  {
    id: 'ev_early_cutoff', epoch: 'early', scene: 'ambush', organ: 'locomotion',
    zh: ['回路被截断', '熟悉的觅食路线断在一段塌陷边。沿原路走会耗掉储备，对面的碎屑里却可能有食物。',
      ['跃过松动的边缘，争取先到食物旁。', '你离开遮蔽物，把速度换成一次觅食机会。'],
      ['循着旧路返回，寻找更窄的缺口。', '你绕了一段路，记住更稳的通道。'],
      ['守住低处，等同伴先聚拢。', '稀疏的脚步声很快变得密集，你们结伴穿过缺口。']],
    en: ['The route breaks off', 'A collapse interrupts a familiar feeding route. Going back will cost reserves, but there may be food in the debris on the other side.',
      ['Cross the unstable edge first and try to reach the food.', 'You leave cover and spend speed on a chance to feed.'],
      ['Follow the old route back and look for a narrower gap.', 'The detour takes time. You find a safer passage to remember.'],
      ['Hold low ground until the others gather.', 'You wait for company, then cross the gap together.']]
  },
  {
    id: 'ev_early_empty_food', epoch: 'early', scene: 'duel', organ: 'jaws',
    zh: ['最后一片觅食地', '近处最肥沃的一片地已被成年个体占住。边缘还有零散的食物，可你得避开来回巡视的身影。',
      ['冲进中心位置，抢到足够吃撑的一餐。', '你很快吃到了东西，也暴露了自己。'],
      ['沿边缘缓慢搜集，等占地者离开。', '零散的食物够撑过这一阵，你守住了藏身地。'],
      ['把发现食物的信号留给同批幼体。', '你少吃了一点，几个同伴下次愿意替你探路。']],
    en: ['The last patch of food', 'Adults have taken the richest feeding ground. Food still lies at the edges, if you can avoid the shapes moving through it.',
      ['Rush the center for a meal that will fill you up.', 'You find food quickly and give away your position.'],
      ['Feed slowly around the edge while the adults move on.', 'The scraps get you through without giving up your shelter.'],
      ['Signal the other young where you found food.', 'You eat less. A few of the others will scout for you next time.']]
  },
  {
    id: 'ev_early_missing_cover', epoch: 'early', scene: 'mutation', organ: 'senses',
    zh: ['原来躲藏的地方空了', '一夜过后，你常躲藏的边缘失去遮蔽。远处听来安静，脚下却传来细微的震动。',
      ['赶在震动靠近前，直奔远处的新掩体。', '开阔地上无处可躲，你只能继续向前。'],
      ['贴住地形，先停下来辨别震动的方向。', '你记住了危险来时的动静，沿另一侧移动。'],
      ['留下信号，和同伴轮流探查。', '每个个体只需暴露片刻，一起找到了下一处掩体。']],
    en: ['The shelter is gone', 'Overnight the edge where you used to hide has lost its cover. The distance sounds quiet. Tiny vibrations travel beneath you.',
      ['Sprint for new cover before the disturbance reaches you.', 'There is nowhere to hide in the open. You have to keep moving.'],
      ['Stay low and work out where the vibrations are coming from.', 'You learn the warning and move along the other side.'],
      ['Leave a signal and take turns scouting with the others.', 'Each of you has only a moment in the open, and you find new shelter together.']]
  },
  {
    id: 'ev_mid_heat_line', epoch: 'mid', scene: 'cataclysm', organ: 'lungs',
    zh: ['突来的热层', '一片异常温暖的区域切断了旧路线。另一端的资源更丰富，只有狭窄的边界仍适合停留。',
      ['趁储备尚足，直接穿过最热的一段。', '你觅到更多资源，但忍受了超出习惯的温度。'],
      ['在边界试探，找出可以短暂停留的地段。', '几次进退之后，你找到了更可控的路线。'],
      ['带同伴轮流穿行，在边缘相互接应。', '你们慢了一些，至少有人能等在出口旁。']],
    en: ['A sudden band of heat', 'An unusually warm band cuts across the old route. There are richer resources on the far side. Only the narrow boundary offers a place to rest.',
      ['Cross the hottest stretch while your reserves hold.', 'You reach richer food at the cost of enduring unfamiliar heat.'],
      ['Work along the boundary and find the shallowest stretches.', 'A few cautious attempts reveal a route you can manage.'],
      ['Guide companions in turns, leaving someone at each edge.', 'You take longer, but somebody is there to meet each arrival.']]
  },
  {
    id: 'ev_mid_hard_shells', epoch: 'mid', scene: 'duel', organ: 'jaws',
    zh: ['壳比牙更硬', '过去常见的食物越来越少，眼前新的猎物裹着坚壳。你能在外壳上找到一道缝，也可能先伤到自己。',
      ['沿缝用力咬开，拿到内里的整份食物。', '猎物第一次成为你的食物，你也为用力过猛付了代价。'],
      ['放下坚壳猎物，转向体型较小的目标。', '一口的收益少了，觅食更稳定。'],
      ['跟同伴试着轮换搬动，等缝隙露出来。', '你们分着吃掉猎物，也记住了配合的节奏。']],
    en: ['A shell harder than teeth', 'The old food is growing scarce. New prey comes in a shell. You can see a seam, but the attempt could hurt you first.',
      ['Bite hard along the seam and take the whole meal.', 'This prey feeds you for the first time. The effort has a cost.'],
      ['Leave the hard shell and look for smaller prey.', 'Each meal is smaller, and meals are easier to find.'],
      ['Take turns turning the shell until the seam is exposed.', 'You split the prey and learn how to work together.']]
  },
  {
    id: 'ev_mid_moving_ground', epoch: 'mid', scene: 'mutation', organ: 'locomotion',
    zh: ['地面换了方向', '冲刷改变了栖息地的一侧。走得太远会迷失，留在旧路旁又会错过新的食物来源。',
      ['追着变化的边缘迅速前进，先占下新位置。', '你抢到了空间，但短时间内找不到退路。'],
      ['在安全范围内分段试路。', '你反复回来同一个标记，慢慢认识新的地形。'],
      ['用声音或气味给同伴留下回路标记。', '你们顺着彼此留下的提示走回安全区。']],
    en: ['The ground shifts', 'Erosion changes one side of the habitat. Go too far and you may lose your way. Stay close to the old route and new food will pass you by.',
      ['Follow the changing edge and take a new position first.', 'You claim room while losing sight of the way back.'],
      ['Try the terrain in short stretches from safety.', 'By returning to the same landmark, you learn the new ground.'],
      ['Leave sound or scent markers for the others.', 'Each of you adds a sign on the way back to safety.']]
  },
  {
    id: 'ev_late_crowded_shelter', epoch: 'late', scene: 'ambush', organ: 'armor',
    zh: ['越挤越近的藏身地', '栖息地的安稳角落越缩越小，陌生个体逼近留下来的空隙。你很难独自守住所有入口。',
      ['堵住最窄的入口，驱赶已经靠近的竞争者。', '你保住了入口，也把正面冲突引到自己身上。'],
      ['把旧巢让出一部分，转去勘查备用位置。', '退一步看清了地形，你找到了一条新的退路。'],
      ['把开阔处让给外来者，协助同伴守住内侧。', '熟悉的个体聚在一起，互相留出安全的空间。']],
    en: ['Shelter grows crowded', 'The safe part of the habitat is shrinking. Strangers press into the remaining gaps. There are too many entrances to hold alone.',
      ['Block the narrowest entrance and face the first rivals.', 'You keep the entrance and take the conflict on yourself.'],
      ['Yield part of the old shelter and scout another position.', 'The retreat gives you a view of another way out.'],
      ['Give newcomers the open side and help the others defend the interior.', 'Familiar individuals gather and make room for each other.']]
  },
  {
    id: 'ev_late_dark_front', epoch: 'late', scene: 'cataclysm', organ: 'senses',
    zh: ['一条越来越长的阴影', '远处的光一寸寸消失，熟悉的气味也变了。你得决定要过得更快，还是先找到可以躲过这一阵的地方。',
      ['趁还能辨出方向，加速穿出黑暗。', '你比同伴更早找到亮处，沿途没有可以休息的地方。'],
      ['跟着仍然熟悉的信号，小步移向遮蔽处。', '你走得慢，却保有足够储备熬过变化。'],
      ['留下来引导晚到的同伴。', '你们相互等了一会儿，没让整个群体散开。']],
    en: ['A lengthening shadow', 'Light disappears a little at a time. Familiar scents shift. You can move quickly or find somewhere to wait it out.',
      ['Race through the darkness while you still know the direction.', 'You find light before the others, with nowhere to rest on the way.'],
      ['Follow the signals you recognize toward shelter.', 'Moving slowly leaves you with reserves when conditions change.'],
      ['Stay where you can guide the ones who come late.', 'You wait for one another and the group holds together.']]
  },
  {
    id: 'ev_late_last_return', epoch: 'late', scene: 'courtship', organ: 'crest',
    zh: ['熟悉的地方再次出现', '季节轮回时，你又经过曾经第一次独自觅食的地方。旧掩体还在，周围已有年轻的同类。',
      ['先把周围的竞争者引开，给年轻个体留出时间。', '你保护了内侧的空间，自己留在风险更高的边缘。'],
      ['确认新路线再离开，把自己剩下的体力留给迁移。', '你重走了旧路线，为下一次迁移记下了新的标记。'],
      ['停下来带几个年轻个体走过安全的一段。', '它们跟着你第一次安全穿过那条通道。']],
    en: ['A familiar place again', 'The season turns. You pass the place where you first fed alone. The old shelter is still there. Younger individuals are gathering nearby.',
      ['Draw rivals away to give the young more time.', 'You protect the interior and spend longer at the exposed edge.'],
      ['Check the new route and keep your reserves for the move.', 'You walk the old path and remember new markers for the journey.'],
      ['Stop and guide a few of the young through a safe stretch.', 'For the first time they make it through the passage safely.']]
  }
];

function ecologyStage(event) {
  const [title, description, ...entries] = event.zh;
  const pathways = [
    { path: 'tyrant', pathGain: 16, dv: -16, de: 20, da: 7, dl: 0, deathRisk: event.epoch === 'early' ? 0.045 : 0.075 },
    { path: 'pioneer', pathGain: 12, dv: 4, de: -5, da: 15, dl: 3 },
    { path: 'dynasty', pathGain: 13, dv: 6, de: -3, da: 3, dl: 15 }
  ];
  const organs = [event.organ, 'senses', 'crest'];
  return {
    id: event.id, epoch: event.epoch, scene: event.scene, title, event: description,
    choices: entries.map(([label, outcome], index) => ({
      ...pathways[index], label, outcome, organUpgrade: organs[index]
    }))
  };
}
