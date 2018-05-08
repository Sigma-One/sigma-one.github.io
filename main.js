// Show/hide panels by sliding
function show(element, is_icon=false) {
  var el = document.getElementById(element);
  if (el.style.visibility !== "visible") {
    el.style.visibility = "visible";
    if (is_icon === true) {
      el.style.animation = "slideinicons 0.5s";
    }
    else {
      el.style.animation = "slidein 0.5s";
    }
    setTimeout(function(){ el.style.zIndex = "3"; }, 500);
  }
  else {
    el.style.zIndex = "2";
    if (is_icon === true) {
      el.style.animation = "slideouticons 0.5s";
    }
    else {
      el.style.animation = "slideout 0.5s";
    }
    setTimeout(function(){ el.style.visibility = "hidden"; }, 500);
  }
}

// Show/hide larger elements by fading
function fadeshow(element) {
  var el = document.getElementById(element);
  if (el.style.visibility !== "visible") {
    el.style.visibility = "visible";
    el.style.zIndex = "1";
    el.style.animation = "fadein 0.5s";
  }
  else {
    el.style.animation = "fadeout 0.5s";
    setTimeout(function(){ el.style.visibility = "hidden"; el.style.zIndex = "-1"; }, 500);
  }
}

// Change document
function change (URL) {
    fadeshow('body')
    setTimeout( function() { window.location = URL }, 500 );
}

// Change iframe src
function swapview (path) {
  el = document.getElementById("view")
  if(!el)
    return false;
  el.style.animation = "fadeout 0.5s";
  setTimeout(function(){ el.style.visibility = "hidden"; }, 500);
  setTimeout(function(){ el.setAttribute('src', path); el.style.visibility = "visible"; el.style.animation = "fadein 0.5s"; }, 500);
}
