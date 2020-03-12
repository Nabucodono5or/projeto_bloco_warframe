function d3Lines(d3) {
  let directive = {
    restrict: "EA",
    link: link
  };

  return directive;

  ////////////////////

  function link(scope, element, attr) {
    console.log(d3);
    
    // let incomingData = attr.valor;
    // let xScale = criandoXScale(incomingData);
    // let svg = d3
    //   .select(element[0])
    //   .append("svg")
    //   .style("height", "60px")
    //   .style("width", "200px");

    // svg
    //   .selectAll("rect")
    //   .data(incomingData)
    //   .enter()
    //   .append("rect")
    //   .attr("class", "bar-drop")
    //   .attr("height", 50)
    //   .attr("width", d => xScale(parseInt(d)))
    //   .style("fill", "blue");

    // function criandoXScale() {
    //   var maximo = 1;
    //   var yScale = d3
    //     .scaleLinear()
    //     .domain([0, maximo])
    //     .range([0, 100]);

    //   return yScale;
    // }
  }
}

export default d3Lines;
