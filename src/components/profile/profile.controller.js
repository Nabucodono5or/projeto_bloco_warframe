let profileController = function toolbarController($stateParams) {
  let vm = this;
  vm.item = $stateParams.item;
  vm.$onInit = onInit; 

  ////////////////////////////////

  function onInit() {
    console.log(vm.item);
  }
};

profileController.$inject = ["$stateParams"];

export default profileController;
