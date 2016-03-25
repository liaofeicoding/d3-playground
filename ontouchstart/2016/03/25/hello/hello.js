!function () { // http://stackoverflow.com/questions/3755606/what-does-the-exclamation-mark-do-before-the-function

  var hello = {
    version: "0.0.1"
  };
  
  function main (name) {
    return `Hello ${name}`;
  }

  hello.hello = main;

  if (typeof define === "function" && define.amd)  {
    this.hello = hello, define(hello); 
  }
  else {
    if (typeof module === "object" && module.exports) {
      module.exports = hello; 
    }
    else {
      this.hello = hello;
    }
  }
}();
