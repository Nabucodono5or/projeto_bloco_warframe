let searchController = function SearchController(
  $stateParams,
  searchService,
  filterFilter
) {
  let vm = this;
  vm.$onInit = onInit;

  /////////////////////

  function onInit() {
    vm.termo = $stateParams.termo;
    console.log(vm.termo);
    
    // activate();
  }

  function activate() {
    return searchService.getItens().then(data => {
      vm.itens = data;
      vm.filteredItens = filterFilter(vm.itens, { name: vm.termo });
      console.log(vm.filteredItens);
      return vm.filteredItens;
    });
  }
};

searchController.$inject = ["$stateParams", "searchService", "filterFilter"];

export default searchController;
