function appConfig($urlRouterProvider, $stateProvider) {
  let otherwise = {
    name: "home",
    url: "/",
    component: "home"
  };

  let categoria = {
    name: "categoria",
    url: "/categoria?tipo",
    component: "categoria"
  };

  $urlRouterProvider.otherwise("/");
  $stateProvider.state(categoria);
}

export default appConfig;
