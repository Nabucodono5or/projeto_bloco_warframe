function polarityFactory() {
  let polarities = {
    Madurai: "https://vignette.wikia.nocookie.net/warframe/images/b/b2/Madurai_Pol.svg/revision/latest/scale-to-width-down/20?cb=20150301001230",
    Vazarin: "https://vignette.wikia.nocookie.net/warframe/images/6/6f/Vazarin_Pol.svg/revision/latest/scale-to-width-down/20?cb=20150301001231",
    Naramon: "https://vignette.wikia.nocookie.net/warframe/images/6/60/Naramon_Pol.svg/revision/latest/scale-to-width-down/20?cb=20150301001230",
    Zenurik: "https://vignette.wikia.nocookie.net/warframe/images/8/8c/Zenurik_Pol.svg/revision/latest/scale-to-width-down/20?cb=20150301001231",
    Unairu: "https://vignette.wikia.nocookie.net/warframe/images/6/61/Unairu_Pol.svg/revision/latest/scale-to-width-down/20?cb=20150301001230",
    Penjaga: "https://vignette.wikia.nocookie.net/warframe/images/5/5f/Penjaga_Pol.svg/revision/latest/scale-to-width-down/20?cb=20150301001230",
    Umbra: "https://vignette.wikia.nocookie.net/warframe/images/a/a8/Umbra_Pol.png/revision/latest/scale-to-width-down/20?cb=20180615163632",
    Universal: "https://vignette.wikia.nocookie.net/warframe/images/7/74/Aura_Pol_Dark.png/revision/latest/scale-to-width-down/20?cb=20191018202836",
};

  let service = {
    getPolarities: getPolarities
  };

  return service;

  //////////////////////

  function getPolarities() {
    return polarities;
  }
}

export default polarityFactory;
