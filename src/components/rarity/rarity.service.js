function rarityFactory() {
  let rarities = {
    'Common': { back: "rgb(255, 51, 51)", color: "white" },
    'Uncommon': { back: "rgb(255, 51, 51)", color: "white" },
    'Rare': { back: "rgb(255, 51, 51)", color: "white" },
    'Legendary': { back: "rgb(255, 51, 51)", color: "white" },
    'Riven': { back: "rgb(255, 51, 51)", color: "white" }
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
