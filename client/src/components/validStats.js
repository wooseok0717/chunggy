const stats = {
  helm: new Set([
    'attack', 'block', 'concentration', ' crit spell', 'defense', 'earth resist',
    'enmity boost', 'evasion', 'fire resist', 'flight speed', 'healing boost', 'magic boost',
    'magic resist', 'magic suppr', 'magical accuracy', 'max hp', 'max mp', 'pvp attack',
    'pvp defense', 'paralysis resist', 'parry', 'silence resist', 'spell fortitude', 'spell resist',
    'strike fortitude', 'strike resist', 'water resist', 'wind resist'
  ]),
  belt: new Set([
    'accuracy', 'attack', 'block', 'concentration', 'crit strike', 'defense',
    'earth resist', 'evasion', 'fire resist', 'flight time', 'magic boost', 'magic resist',
    'magic suppr', 'magical accuracy', 'magical attack', 'max hp', 'max mp', 'pvp attack',
    'paralysis penetration', 'paralysis resist', 'parry', 'silence penetration', 'silence resist',
    'strike fortitude', 'water resist', 'wind resist'
  ]),
  acc: new Set([
    'attack', 'block', 'concentration', ' crit spell','crit strike', 'defense',
    'earth resist', 'evasion', 'fire resist', 'flight time', 'healing boost', 'magic boost',
    'magic resist', 'magic suppr', 'magical accuracy', 'max hp', 'max mp', 'pvp attack',
    'paralysis penetration', 'paralysis resist', 'silence penetration', 'silence resist',
    'spell resist', 'strike resist', 'water resist', 'wind resist'
  ]),
  wings: new Set([
    'accuracy', 'attack', 'crit spell', 'crit strike', 'defense', 'flight time', 'healing boost',
    'magic boost', 'magical accuracy', 'max hp', 'max mp', ' paralysis penetration',
    'paralysis resist', 'silenece penetration', 'silence resist', 'spell resist', 'strike fortitude',
    'strike resist'
  ]),
  top: new Set([
    'accuracy', 'attack', 'block', 'concentration', 'crit spell', 'crit strike', 'defense',
    'enmity boost', 'evasion', 'fire resist', 'flight speed', 'flight time', 'healing boost',
    'magic boost', 'magic resist', 'magic suppr', 'magical accuracy', 'max hp', 'max mp',
    'pvp defense', 'paralysis resist', 'parry', 'silence resist', 'spell resist', 'strike resist'
  ]),
  bottom: new Set([
    'accuracy', 'attack', 'block', 'concentration', 'crit spell', 'crit strike', 'defense',
    'enmity boost', 'evasion', 'fire resist', 'flight speed', 'flight time', 'healing boost',
    'magic boost', 'magic resist', 'magic suppr', 'magical accuracy', 'max hp', 'max mp',
    'pvp defense', 'paralysis resist', 'parry', 'silence res', 'spell resist', 'strike resist'
  ]),
  shoulder: new Set([
    'accuracy', 'attack', 'block', 'concentration', 'crit spell', 'crit strike', 'defense',
    'enmity boost', 'evasion', 'fire resist', 'healing boost', 'magic boost', 'magic resist',
    'magic suppr', 'magical accuracy', 'magical attack', 'max hp', 'max mp', 'pvp defense',
    'paralysis resist', 'parry', 'silence resist', 'spell resist', 'strike resist'
  ]),
  gloves: new Set([
    'accuracy', 'attack speed', 'attack', 'block', 'casting speed', 'concentration', 'crit spell',
    'crit strike', 'defense', 'enmity boost', 'evasion', 'fire resist', 'healing boost',
    'magic boost', 'magic resist', 'magic suppr', 'magical accuracy', 'max hp', 'max mp', 'pvp defense', 'paralysis resist', 'parry', 'silence resist', 'spell resist', 'strike resist'
  ]),
  shoes: new Set([
    'accuracy', 'attack', 'block', 'concentration', 'crit spell', 'crit strike', 'defense',
    'enmity boost', 'evasion', 'fire resist', 'healing boost', 'magic boost', 'magic resist',
    'magic suppr', 'magical accuracy', 'max hp', 'max mp', 'pvp defense', 'paralysis resist',
    'parry', 'silence resist', 'speed', 'spell resist', 'strike resist'
  ]),
  weapon: new Set([
    'accuracy', 'attack speed', 'attack', 'casting speed', 'crit spell', 'crit strike', 'evasion',
    'healing boost', 'magic boost', 'magical accuracy', 'magical attack', 'max hp', 'max mp',
    'pvp attack', 'paralysis penetration', 'parry', 'silence penetration'
  ]),
  shield: new Set([
    'accuracy', 'block', 'concentration', 'damage reduction', 'defense', 'enmity boost',
    'healing boost', 'magic resist', 'max hp', 'max mp', 'pvp defense'
  ]),
}

export default stats;