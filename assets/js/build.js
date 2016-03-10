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
  }

  _createClass(Xhr, [{
    key: 'json',
    get: function get() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', this.url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          var data = JSON.parse(xhr.responseText);
          // console.log(data);
          return data;
        }
      };
      xhr.send();
    }
  }]);

  return Xhr;
}();

// CONTROLADOR

var posts = new Xhr('posts');
var iteratePosts = posts.json;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = iteratePosts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    post = _step.value;

    console.log(post.title);
  }

  // let pages = new Xhr( 'pages' );
  // console.log( pages.json );

  // let pages = new Xhr( 'pages' );
  // console.log( pages.url );
  // console.log( `Paginas: ${pages.api}` );

  // MODEL
  // let baseUrl = "http://dev.wpapirest.com/wp-json/wp/v2/";
  // let postsUrl = baseUrl + "posts";
  //
  // let xhr = new XMLHttpRequest();
  //
  // function getPosts () {
  //   if (this.readyState === 4) {
  //     let posts = JSON.parse(this.responseText);
  //     for (var i = 0; i < posts.length; i++) {
  //       console.log(posts[i].title);
  //       console.log(posts[i].content);
  //     }
  //   }
  // }
  //
  // xhr.addEventListener( "readystatechange", getPosts );
  // xhr.open( "GET", postsUrl );
  // xhr.send();

  // class Xhr {
  //   constructor (name) {
  //     this.name = name;
  //     this.baseUrl = "http://dev.wpapirest.com/wp-json/wp/v2/";
  //     this.url = this.baseUrl+this.name;
  //     this.xhr = new XMLHttpRequest();
  //   }
  //
  //   get() {
  //     if (this.readyState === 4) {
  //       let posts = JSON.parse(this.responseText);
  //       for (var i = 0; i < posts.length; i++) {
  //         console.log(posts[i].title);
  //         console.log(posts[i].content);
  //       }
  //     }
  //   }
  //
  // }
  //
  // let posts = new Xhr('posts');
  // posts.xhr.addEventListener( "readystatechange", posts.get() );
  // posts.xhr.open( "GET", posts.url );
  // posts.xhr.send();

  // console.log(posts.get());
  //
  // let pages = new Xhr('pages');
  // console.log(pages.url);

  // CONTROLLER

  // VIEW
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

var elMain = document.getElementById('main');
var elDiv = document.createElement('div');
elDiv.innerHTML = " Loremm";
elMain.appendChild(elDiv);

},{}]},{},[1]);
