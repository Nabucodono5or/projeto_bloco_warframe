let searchController = function SearchController(
  $stateParams,
  searchService,
  filterFilter
) {
  let vm = this;
  vm.$onInit = onInit;
  vm.exibir = false;

  /////////////////////

  function onInit() {
    vm.termo = $stateParams.termo;
    console.log(vm.termo);
    activate();
  }

  function activate() {
    return searchService.getItens().then(data => {
      vm.itens = data;
      vm.filteredItens = filterFilter(vm.itens, { name: vm.termo });
      avaliarResultadoDeBusca(vm.filteredItens);
      return vm.filteredItens;
    });
  }

  function avaliarResultadoDeBusca(lista) {
    if (lista.length == 0) {
      vm.exibir = true;
    }
  }
};

searchController.$inject = ["$stateParams", "searchService", "filterFilter"];

export default searchController;
