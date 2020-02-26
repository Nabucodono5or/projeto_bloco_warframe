function toolbarFactory() {
  let categorias = [
    {
      link: "Armas Primárias",
      tipo: "primary"
    },
    {
      link: "Armas Secudárias",
      tipo: "secondary"
    },
    {
      link: "Armas Melee",
      tipo: "melee"
    },
    {
      link: "Mods",
      tipo: "mods"
    },
    {
      link: "Warframes",
      tipo: "warframes"
    }
  ];


  let service = {
    getCategorias: getCategorias
  };

  return service

  //////////////////////

  function getCategorias() {
      return categorias
  }
}

export default toolbarFactory