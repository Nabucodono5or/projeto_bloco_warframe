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
      element.css({
        "background-image": color,
        "color" : back
      });
    }
  }
  
  export default backColorDirective