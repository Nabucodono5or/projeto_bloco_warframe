let homeController = function HomeController(homeService) {
  let vm = this;
  vm.title = "Teste de componete";
};

homeController.$inject = ["homeService"];

export default homeController;
