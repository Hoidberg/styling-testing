window.ezHTTP = (function(URL) {
  var content;
  $.get("https://raw.githubusercontent.com/Hoidberg/styling-testing/main/js/script.js", function(data, status){
    content = data;
  });
  return content;
})(this, this.document)
