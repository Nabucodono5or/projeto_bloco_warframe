let categoriaController = function categoriaController(
  $stateParams,
  categoriaService,
  filterFilter
) {
  let vm = this;
  vm.$onInit = onInit;
  // vm.itens = filterFilter(vm.itens, vm.termoFiltrado);

  /////////////////////

  function onInit() {
    vm.title = $stateParams.tipo;
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

categoriaController.$inject = [
  "$stateParams",
  "categoriaService",
  "filterFilter"
];

export default categoriaController;
