let toolbarController = function toolbarController($mdSidenav, toolbarService) {
  let vm = this;
  vm.title = "toolbar componente";
  vm.openRightMenu = openRightMenu;
  vm.categorias = toolbarService.getCategorias();

  ////////////////////////////////

  function openRightMenu() {
    $mdSidenav("right").toggle();
  }
};

toolbarController.$inject = ["$mdSidenav", "toolbarService"];

export default toolbarController;
