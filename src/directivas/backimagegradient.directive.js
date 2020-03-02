function backImageDirectiveGradient() {
  let directive = {
    restrict: "EA",
    link: link
  };

  return directive;

  ////////////////////

  function link(scope, element, attr) {
    let url = attr.backImageGradient;
    element.css({
      "background-image":
        "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(" +
        url +
        ")"
    });
  }
}

export default backImageDirectiveGradient;
