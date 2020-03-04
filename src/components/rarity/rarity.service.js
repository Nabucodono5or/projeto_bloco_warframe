function rarityFactory() {
  let rarities = {
    Common: { back : '#BE5504', color: 'white' },
    Uncommon: { back : '#FADASE', color: 'black' },
    Rare: { back : 'Royal', color: 'black' },
    Legendary: { back : '#A0B2C6', color: 'black' },
    Riven: { back : '#F81894', color: 'white' }
  };

  let service = {
    getRarities: getRarities
  };

  return service;

  //////////////////////

  function getRarities() {
    return rarities;
  }
}

export default rarityFactory;
