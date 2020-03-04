let polarityController = function PolarityController(polarityService) {
  let vm = this;
  vm.$onInit = onInit;
  vm.polarities = polarityService.getPolarities();

  ////////////////////////////////

  function onInit() {
    if (vm.polarity) {
      vm.exibir = true;
    }

    console.log(vm.polarity);
  }
};

polarityController.$inject = ["polarityService"];

export default polarityController;
