let categoriaController = function categoriaController(
  $stateParams,
  categoriaService
) {
  let vm = this;
  vm.$onInit = onInit;

  /////////////////////

  function onInit() {
    vm.title = $stateParams.tipo;
    vm.title = vm.title.toUpperCase();
    activate();
  }

  function activate() {
    return categoriaService.getItens($stateParams.tipo).then(data => {
      vm.itens = data;
      console.log(vm.itens);
      return vm.itens;
    });
  }
};

categoriaController.$inject = ["$stateParams", "categoriaService"];

export default categoriaController;
