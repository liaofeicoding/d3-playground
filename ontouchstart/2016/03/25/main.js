(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var hello = require('./hello/hello').hello;
document.title = hello('world');
document.body.innerHTML = hello('world'); 

},{"./hello/hello":1}]},{},[2]);
