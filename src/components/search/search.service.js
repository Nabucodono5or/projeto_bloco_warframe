function searchFactory($http) {
  let service = {
    getItens: getItens
  };

  return service;

  //////////////////////

  function getItens(categoria) {
    return $http
      .get("http://localhost:3000/api/warframe/")
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

searchFactory.$inject = ["$http"];

export default searchFactory;
