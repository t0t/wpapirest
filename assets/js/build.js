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

// MODEL
var BASE_URL = 'http://dev.wpapirest.com/wp-json/wp/v2/';

var Xhr = function () {
  function Xhr(name) {
    _classCallCheck(this, Xhr);

    this.url = '' + BASE_URL + name;
  }

  _createClass(Xhr, [{
    key: 'data',
    value: function data() {
      var _this = this;

      return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', _this.url);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            resolve(JSON.parse(xhr.responseText));
            console.log(JSON.parse(xhr.responseText));
          }
        };
        xhr.send();
      });
    }
  }]);

  return Xhr;
}();

// CONTROLLER

var allPosts = new Xhr('posts');
// debugger;
allPosts.data().then(function (results) {
  return results.posts.map(function (p) {
    return console.log(p.id);
  });
});

// VIEW
var elMain = document.getElementById('main');
var elDiv = document.createElement('div');
elDiv.innerHTML = " Loremm";
elMain.appendChild(elDiv);

//kangax.github.io/compat-table/es6/

},{}]},{},[1]);
