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
      .style("height", "60px")
      .style("width", "200px");

    svg
      .append("rect")
      .attr("class", "bar-drop")
      .attr("height", 30)
      .attr("width", xScale(incomingData))
      .style("fill", "blue");

    function criandoXScale() {
      var maximo = 1;
      var yScale = d3
        .scaleLinear()
        .domain([0, maximo])
        .range([0, 200]);

      return yScale;
    }
  }
}

export default d3Lines;
