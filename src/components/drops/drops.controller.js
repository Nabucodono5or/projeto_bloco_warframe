let dropsController = function DropsController() {
  let vm = this;
  vm.$onInit = onInit;

  ////////////////////////////////

  function onInit() {
    if (vm.componentes) {
      vm.exibir = true;
    }

    console.log(vm.componentes);
  }
};

export default dropsController;
