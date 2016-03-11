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
var BASE_URL = 'http://energyfruits.es/wp-json/wp/v2/';

var Xhr = function () {
  function Xhr(name) {
    _classCallCheck(this, Xhr);

    this.url = '' + BASE_URL + name + '/';
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
allPosts.data().then(function (results) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var post = _step.value;

      post.link;
      console.log(post.link);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});

var allPages = new Xhr('pages');
allPages.data().then(function (results) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = results[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var page = _step2.value;

      page.title;
      console.log(page.title);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
});

// VIEW
function render() {
  var elMain = document.getElementById('main');
  var elDiv = document.createElement('div');
  elDiv.innerHTML = 'allPosts';
  elMain.appendChild(elDiv);
}

},{}]},{},[1]);
