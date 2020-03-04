let descricaoController = function DescricaoController() {
    let vm = this;
    vm.$onInit = onInit;
    
    ////////////////////////////////
  
    function onInit() {
        vm.description = vm.item.description || "Desconhecido";
        vm.buildTime = vm.item.buildTime || 0;
        vm.buildPrice = vm.item.buildPrice || 0;
        vm.masteryReq = vm.item.masteryReq || 0;
        vm.type = vm.item.type || "Desconhecido";
    }
  };
  
  export default descricaoController;
  