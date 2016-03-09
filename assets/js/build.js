(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// MODEL

var Xhr = function () {
  function Xhr(name) {
    _classCallCheck(this, Xhr);

    this.name = name;
    this.baseUrl = "http://dev.wpapirest.com/wp-json/wp/v2/";
    this.url = this.baseUrl + name;
    this.xhr = new XMLHttpRequest();
  }

  _createClass(Xhr, [{
    key: "get",
    value: function get() {
      if (this.readyState === 4) {
        var _posts = JSON.parse(this.responseText);
        for (var i = 0; i < 3; i++) {
          console.log(_posts[i].title);
          console.log(_posts[i].content);
        }
      }
    }
  }]);

  return Xhr;
}();

// CONTROLLER

var posts = new Xhr('posts');
posts.xhr.addEventListener("readystatechange", posts.get);
posts.xhr.open("GET", posts.url);
posts.xhr.send();

console.log(posts.get());

var pages = new Xhr('pages');
console.log(pages.url);

// VIEW
var elMain = document.getElementById('main');
var elDiv = document.createElement('div');
elDiv.innerHTML = posts.url;
elMain.appendChild(elDiv);

},{}]},{},[1]);
