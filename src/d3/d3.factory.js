import { select, selectAll } from "d3-selection";
import { scaleLinear, scaleQuantile } from "d3-scale";
import { max, extent } from "d3-array";

var d3Factory = function() {
  var d3;
  d3 = {
    selection: select,
    selectAll: selectAll,
    scaleLinear: scaleLinear,
    scaleQuantile: scaleQuantile,
    max: max,
    extent: extent
  };

  return d3;
};

export default d3Factory;
