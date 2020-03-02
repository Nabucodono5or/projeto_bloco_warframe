let statusController = function statusController() {
    let vm = this;
    vm.$onInit = onInit; 
    ////////////////////////////////
  
    function onInit() {
      console.log(vm.item.armor);    
    }
  
  };
    
  export default statusController;
  