// get the element to animate
var element = document.getElementById('testFade');
var elements = document.getElementsByClassName("testFade");
//var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);
// document.addEventListener('resize', animate);

// check if element is in view
function inView(ele) {
  // get window height
  var elementHeight = ele.clientHeight;
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = ele.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
/* function animate() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
    //   element.classList.add('animate');
    element.classList.add("fading");
  }
} */

function animate(){
    for(let i = 0; i< elements.length; i++){
        const ele = elements[i];
        if(inView(ele))
            ele.classList.add("fading");
    }
}
