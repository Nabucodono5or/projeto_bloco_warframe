let profileController = function toolbarController($stateParams) {
  let vm = this;
  vm.item = $stateParams.item;
  vm.$onInit = onInit; 
  vm.color = "#" + vm.item.color;

  ////////////////////////////////

  function onInit() {
    console.log(vm.item);
    console.log(vm.color);
    
  }
};

profileController.$inject = ["$stateParams"];

export default profileController;
