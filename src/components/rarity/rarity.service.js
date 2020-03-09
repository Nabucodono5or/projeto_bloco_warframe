function rarityFactory() {
  let rarities = {
    'Common': { back: "rgb(255, 153, 0)", color: "white" },
    'Uncommon': { back: "rgb(89, 89, 89)", color: "white" },
    'Rare': { back: "rgb(255, 255, 0)", color: "black" },
    'Legendary': { back: "rgb(153, 153, 153)", color: "white" },
    'Riven': { back: "rgb(204, 0, 102)", color: "white" }
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
