(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

// MODELO

var Xhr = function () {
  function Xhr(name) {
    _classCallCheck(this, Xhr);

    this.name = name;
    this.baseUrl = "http://dev.wpapirest.com/wp-json/wp/v2/";
    this.url = this.baseUrl + name;
    this.data = this.json;
  }

  _createClass(Xhr, [{
    key: 'json',
    get: function get() {

      var xhr = new XMLHttpRequest();
      xhr.open('GET', this.url);
      xhr.onreadystatechange = jsonGot;
      xhr.send();

      function jsonGot() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
            return json;
          }
        }
      }
    }
  }]);

  return Xhr;
}();

// CONTROLADOR

var posts = new Xhr('posts');
// let p = posts.json;
console.log(posts);
console.log(posts.data);
// console.log(posts.json(this.data));

// VISTA
var elMain = document.getElementById('main');
var elDiv = document.createElement('div');
elDiv.innerHTML = " Loremm";
elMain.appendChild(elDiv);

},{}]},{},[1]);
