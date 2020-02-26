let categoriaController = function categoriaController($stateParams) {
  let vm = this;
  vm.$onInit = onInit;

  /////////////////////

  function onInit() {
    vm.title = $stateParams.tipo;
    console.log($stateParams.tipo);
  }
};

categoriaController.$inject = ["$stateParams"];

export default categoriaController;
