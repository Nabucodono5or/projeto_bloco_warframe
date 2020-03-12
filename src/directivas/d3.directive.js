function d3Lines(d3) {
  let directive = {
    restrict: "EA",
    scope: {
      valor: '='
    },
    link: link
  };

  return directive;

  ////////////////////

  function link(scope, element, attr) {
    console.log(d3);

    let incomingData = scope.valor;
    let xScale = criandoXScale(incomingData);
    let svg = d3
      .select(element[0])
      .append("svg")
      .style("height", "10px")
      .style("width", "250px");

    svg
      .append("rect")
      .attr("class", "bar-drop")
      .attr("height", 10)
      .attr("width", xScale(incomingData))
      .style("fill", "#ADF5FF");

    function criandoXScale() {
      var maximo = 1;
      var yScale = d3
        .scaleLinear()
        .domain([0, maximo])
        .range([0, 250]);

      return yScale;
    }
  }
}

export default d3Lines;
