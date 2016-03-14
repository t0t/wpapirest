(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagesLoop = exports.postsLoop = undefined;

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// CONTROLLER
var postsLoop = exports.postsLoop = new _model2.default('posts');
var pagesLoop = exports.pagesLoop = new _model2.default('pages');

},{"./model":3}],2:[function(require,module,exports){
'use strict';

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _controller = require('./controller');

var _view = require('./view');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./controller":1,"./model":3,"./view":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// MODEL
var BASE_URL = 'http://energyfruits.es/wp-json/wp/v2/';

var Xhr = function () {
  function Xhr(name) {
    _classCallCheck(this, Xhr);

    this.url = '' + BASE_URL + name + '/';
  }

  _createClass(Xhr, [{
    key: 'makeRequest',
    value: function makeRequest() {
      var _this = this;

      return new Promise(function (bringMe) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', _this.url);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            bringMe(JSON.parse(xhr.responseText));
          }
        };
        xhr.send();
      });
    }
  }]);

  return Xhr;
}();

exports.default = Xhr;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _controller = require('./controller');

// VIEW
_controller.postsLoop.makeRequest().then(function (results) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var post = _step.value;

      var tpl = '\n                <a href="' + post.link + '">\n                <h5>' + post.title.rendered + '</h5>\n                </a>\n    ';
      render(tpl);
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

_controller.pagesLoop.makeRequest().then(function (results) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = results[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var page = _step2.value;

      var tpl = '\n                <a href="' + page.link + '">\n                <h5>' + page.title.rendered + '</h5>\n                </a>\n    ';
      render(tpl);
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

function render(content) {
  var elMain = document.getElementById('main');
  var elDiv = document.createElement('div');
  elDiv.innerHTML = content;
  elMain.appendChild(elDiv);
}

},{"./controller":1}]},{},[2]);
