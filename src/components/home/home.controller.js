let homeController = function HomeController(homeService) {
  let vm = this;
  vm.title = "Teste de componete";
  vm.servico = homeService.getData();
};

homeController.$inject = ["homeService"];

export default homeController;
