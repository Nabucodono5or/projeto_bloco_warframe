let rarityController = function rarityController(rarityService) {
  let vm = this;
  vm.$onInit = onInit;
  vm.rarities = rarityService.getRarities();

  ////////////////////////////////

  function onInit() {
    if (vm.item.category == "Mods") {
      vm.exibir = true;
    }
  }
};

rarityController.$inject = ["rarityService"];

export default rarityController;
