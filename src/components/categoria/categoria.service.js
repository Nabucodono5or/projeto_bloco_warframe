function categoriaFactory($http) {
  let service = {
    getItens: getItens
  };

  return service;

  //////////////////////

  function getItens(categoria) {
    return $http
      .get('http://localhost:3000/api/warframe/' + categoria)
      .then(getItensComplete)
      .catch(getItensError);
  }

  function getItensComplete(response) {
    return response.data;
  }

  function getItensError(error) {
    console.log("Falha ao carregar os itens." + error.data);
  }
}

categoriaFactory.$inject = ["$http"];

export default categoriaFactory;
