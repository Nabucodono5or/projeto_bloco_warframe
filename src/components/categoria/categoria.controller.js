let categoriaController = function categoriaController($stateParams) {
  let vm = this;
  vm.title = "componente categoria";
  vm.$onInit = onInit;

  /////////////////////

  function onInit() {
    console.log($stateParams.tipo);
  }
};

categoriaController.$inject = ["$stateParams"];

export default categoriaController;
