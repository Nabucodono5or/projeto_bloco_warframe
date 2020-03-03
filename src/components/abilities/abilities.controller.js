let abilitiesController = function AbilitiesController() {
    let vm = this;
    vm.$onInit = onInit;
    
    ////////////////////////////////
  
    function onInit() {
      if (vm.item.category == "Warframes") {
        vm.exibir = true;
      }
    }
  };
  
  export default abilitiesController;
  