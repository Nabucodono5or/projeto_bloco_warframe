function appConfig($urlRouterProvider, $stateProvider) {
  // let otherwise = {
  //   name: "home",
  //   url: "/",
  //   component: "home"
  // };

  let categoria = {
    name: "categoria",
    url: "/categoria?tipo",
    component: "categoria"
  };

  let profile = {
    name: "profile",
    url: "/profile",
    params: {
      item: null
    },
    component: "profile"
  };

  $urlRouterProvider.otherwise("/");
  $stateProvider.state(categoria);
  // $stateProvider.state(otherwise);
}

export default appConfig;
