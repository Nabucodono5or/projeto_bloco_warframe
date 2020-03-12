let dropsController = function DropsController() {
  let vm = this;
  vm.$onInit = onInit;
  vm.taxCalculator = taxCalculator;

  ////////////////////////////////

  function onInit() {
    if (vm.componentes) {
      vm.exibir = true;
    }

    console.log(vm.componentes);
  }

  function taxCalculator(taxa) {
    let result = taxa * 100;
    result = result.toFixed(2);

    return result;
  }
};

export default dropsController;
