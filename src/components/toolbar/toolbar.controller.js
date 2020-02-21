let toolbarController = function toolbarController($mdSidenav) {
  let vm = this;
  vm.title = "toolbar componente";
  vm.openLeftMenu = openLeftMenu;

  ////////////////////////////////

  function openLeftMenu() {
    $mdSidenav('left').toggle();
  }
};

toolbarController.$inject = ["$mdSidenav"];

export default toolbarController;
