function load_js(src, callback) {
  var js = document.createElement('script');
  js.onload = callback;
  js.src = src;
  document.head.appendChild(js);
}
