function homeFactory() {
  let service = {
    getData: getData
  };

  return service;

  ////////////////////

  function getData() {
    return "isso é um service";
  }
}

export default homeFactory;
