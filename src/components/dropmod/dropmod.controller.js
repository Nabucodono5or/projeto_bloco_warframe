let dropmodController = function DropmodController() {
    let vm = this;
    vm.$onInit = onInit;
    vm.taxCalculator = taxCalculator;
  
    ////////////////////////////////
  
    function onInit() {
      if (vm.item.category == "Mods") {
        vm.exibir = true;
      }
    }
  
    function taxCalculator(taxa) {
      let result = taxa * 100;
      result = result.toFixed(2);
  
      return result;
    }
  };
  
  export default dropmodController;
  