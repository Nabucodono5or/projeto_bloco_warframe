function backColorDirective() {
  let directive = {
    restrict: "EA",
    link: link
  };

  return directive;

  ////////////////////

  function link(scope, element, attr) {
    let color = attr.color;
    let back = attr.back;
    console.log(attr.color);
    console.log(attr.back);
    
    element.css({
      "background-color": back,
      "color": color,
    });
  }
}

export default backColorDirective;
