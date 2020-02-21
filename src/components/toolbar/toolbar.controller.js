let toolbarController = function toolbarController($mdSidenav) {
  let vm = this;
  vm.title = "toolbar componente";
  vm.openRightMenu = openRightMenu;

  ////////////////////////////////

  function openRightMenu() {
    $mdSidenav("right").toggle();
  }
};

toolbarController.$inject = ["$mdSidenav"];

export default toolbarController;
