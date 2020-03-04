let noiseController = function NoiseController() {
  let vm = this;
  vm.$onInit = onInit;

  ////////////////////////////////

  function onInit() {
    if (vm.noise) {
      vm.exibir = true;
    }

    barulhoCor();
  }

  function barulhoCor() {
    vm.cor = "crimson";
    if (vm.noise == "Silent") {
      vm.cor = "deepskyblue";
    }
  }
};

export default noiseController;
