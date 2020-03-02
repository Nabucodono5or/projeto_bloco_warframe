function backImageDirective() {
  let directive = {
    restrict: "EA",
    link: link
  };

  return directive;

  ////////////////////

  function link(scope, element, attr) {
    let url = attr.backImage;
    element.css({
      "background-image": "url(" + url + ")"
    });
  }
}

export default backImageDirective