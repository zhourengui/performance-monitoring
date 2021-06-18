// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../node_modules/@babel/runtime/helpers/defineProperty.js":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../src/types/types.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AskLevel = void 0;
var AskLevel;
exports.AskLevel = AskLevel;

(function (AskLevel) {
  AskLevel[AskLevel["URGENT"] = 1] = "URGENT";
  AskLevel[AskLevel["IDLE"] = 2] = "IDLE";
})(AskLevel || (exports.AskLevel = AskLevel = {}));
},{}],"../src/constants.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.D = exports.C = exports.WN = exports.WP = exports.W = void 0;
var W = window;
exports.W = W;
var WP = W.performance;
exports.WP = WP;
var WN = W.navigator;
exports.WN = WN;
var C = W.console;
exports.C = C;
var D = document;
exports.D = D;
},{}],"../src/utils/console.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = exports.warn = exports.log = void 0;

var _constants = require("../constants");

var prefix = "mini-pm🐢：";

var log = function log(message) {
  for (var _len = arguments.length, options = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    options[_key - 1] = arguments[_key];
  }

  return _constants.C.log.apply(_constants.C, [prefix, message].concat(options));
};

exports.log = log;

var warn = function warn(message) {
  for (var _len2 = arguments.length, options = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    options[_key2 - 1] = arguments[_key2];
  }

  return _constants.C.warn.apply(_constants.C, [prefix, message].concat(options));
};

exports.warn = warn;

var error = function error(message) {
  for (var _len3 = arguments.length, options = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    options[_key3 - 1] = arguments[_key3];
  }

  return _constants.C.error.apply(_constants.C, [prefix, message].concat(options));
};

exports.error = error;
},{"../constants":"../src/constants.ts"}],"../src/config/config.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _console = require("../utils/console");

var config = {
  isObserverResourceTiming: false,
  isObserverElementTiming: false,
  maxTime: 15000,
  captureError: true,
  reportData: undefined,
  analyticsTracker: function analyticsTracker(options) {
    (0, _console.log)(options);
  },
  recordOptions: {},
  fetchDomain: "",
  errLogRoute: "",
  errEventRoute: "",
  logRoute: ""
};
exports.config = config;
},{"../utils/console":"../src/utils/console.ts"}],"../node_modules/@babel/runtime/helpers/arrayWithHoles.js":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/nonIterableRest.js":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../node_modules/@babel/runtime/helpers/slicedToArray.js":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles.js");

var iterableToArrayLimit = require("./iterableToArrayLimit.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableRest = require("./nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayWithHoles.js":"../node_modules/@babel/runtime/helpers/arrayWithHoles.js","./iterableToArrayLimit.js":"../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js","./unsupportedIterableToArray.js":"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableRest.js":"../node_modules/@babel/runtime/helpers/nonIterableRest.js"}],"../src/rrweb/snapshot/types.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeType = void 0;
var NodeType;
exports.NodeType = NodeType;

(function (NodeType) {
  NodeType[NodeType["Document"] = 0] = "Document";
  NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
  NodeType[NodeType["Element"] = 2] = "Element";
  NodeType[NodeType["Text"] = 3] = "Text";
  NodeType[NodeType["CDATA"] = 4] = "CDATA";
  NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (exports.NodeType = NodeType = {}));
},{}],"../src/rrweb/snapshot/utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElement = isElement;
exports.isShadowRoot = isShadowRoot;

function isElement(n) {
  return n.nodeType === n.ELEMENT_NODE;
}

function isShadowRoot(n) {
  var host = n === null || n === void 0 ? void 0 : n.host;
  return Boolean(host && host.shadowRoot && host.shadowRoot === n);
}
},{}],"../src/rrweb/snapshot/snapshot.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.absoluteToStylesheet = absoluteToStylesheet;
exports.absoluteToDoc = absoluteToDoc;
exports.transformAttribute = transformAttribute;
exports._isBlockedElement = _isBlockedElement;
exports.needMaskingText = needMaskingText;
exports.serializeNodeWithId = serializeNodeWithId;
exports.visitSnapshot = visitSnapshot;
exports.cleanupSnapshot = cleanupSnapshot;
exports.default = exports.IGNORED_NODE = void 0;

var _types = require("./types");

var _utils = require("./utils");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _id = 1;
var tagNameRegex = RegExp('[^a-z0-9-_]');
var IGNORED_NODE = -2;
exports.IGNORED_NODE = IGNORED_NODE;

function genId() {
  return _id++;
}

function getValidTagName(element) {
  if (element instanceof HTMLFormElement) {
    return 'form';
  }

  var processedTagName = element.tagName.toLowerCase().trim();

  if (tagNameRegex.test(processedTagName)) {
    // if the tag name is odd and we cannot extract
    // anything from the string, then we return a
    // generic div
    return 'div';
  }

  return processedTagName;
}

function getCssRulesString(s) {
  try {
    var rules = s.rules || s.cssRules;
    return rules ? Array.from(rules).map(getCssRuleString).join('') : null;
  } catch (error) {
    return null;
  }
}

function getCssRuleString(rule) {
  return isCSSImportRule(rule) ? getCssRulesString(rule.styleSheet) || '' : rule.cssText;
}

function isCSSImportRule(rule) {
  return 'styleSheet' in rule;
}

function extractOrigin(url) {
  var origin;

  if (url.indexOf('//') > -1) {
    origin = url.split('/').slice(0, 3).join('/');
  } else {
    origin = url.split('/')[0];
  }

  origin = origin.split('?')[0];
  return origin;
}

var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
var DATA_URI = /^(data:)([^,]*),(.*)/i;

function absoluteToStylesheet(cssText, href) {
  return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
    var filePath = path1 || path2 || path3;
    var maybeQuote = quote1 || quote2 || '';

    if (!filePath) {
      return origin;
    }

    if (!RELATIVE_PATH.test(filePath)) {
      return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
    }

    if (DATA_URI.test(filePath)) {
      return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
    }

    if (filePath[0] === '/') {
      return "url(".concat(maybeQuote).concat(extractOrigin(href) + filePath).concat(maybeQuote, ")");
    }

    var stack = href.split('/');
    var parts = filePath.split('/');
    stack.pop();

    var _iterator = _createForOfIteratorHelper(parts),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var part = _step.value;

        if (part === '.') {
          continue;
        } else if (part === '..') {
          stack.pop();
        } else {
          stack.push(part);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return "url(".concat(maybeQuote).concat(stack.join('/')).concat(maybeQuote, ")");
  });
}

var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/; // Don't use \s, to avoid matching non-breaking space

var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;

function getAbsoluteSrcsetString(doc, attributeValue) {
  /*
    run absoluteToDoc over every url in the srcset
       this is adapted from https://github.com/albell/parse-srcset/
    without the parsing of the descriptors (we return these as-is)
    parce-srcset is in turn based on
    https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
  */
  if (attributeValue.trim() === '') {
    return attributeValue;
  }

  var pos = 0;

  function collectCharacters(regEx) {
    var chars,
        match = regEx.exec(attributeValue.substring(pos));

    if (match) {
      chars = match[0];
      pos += chars.length;
      return chars;
    }

    return '';
  }

  var output = [];

  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);

    if (pos >= attributeValue.length) {
      break;
    } // don't split on commas within urls


    var url = collectCharacters(SRCSET_NOT_SPACES);

    if (url.slice(-1) === ',') {
      // aside: according to spec more than one comma at the end is a parse error, but we ignore that
      url = absoluteToDoc(doc, url.substring(0, url.length - 1)); // the trailing comma splits the srcset, so the interpretion is that
      // another url will follow, and the descriptor is empty

      output.push(url);
    } else {
      var descriptorsStr = '';
      url = absoluteToDoc(doc, url);
      var inParens = false;

      while (true) {
        var c = attributeValue.charAt(pos);

        if (c === '') {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c === ',') {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break; // parse the next url
          } else if (c === '(') {
            inParens = true;
          }
        } else {
          // in parenthesis; ignore commas
          // (parenthesis may be supported by future additions to spec)
          if (c === ')') {
            inParens = false;
          }
        }

        descriptorsStr += c;
        pos += 1;
      }
    }
  }

  return output.join(', ');
}

function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === '') {
    return attributeValue;
  }

  var a = doc.createElement('a');
  a.href = attributeValue;
  return a.href;
}

function isSVGElement(el) {
  return el.tagName === 'svg' || el instanceof SVGElement;
}

function getHref() {
  // return a href without hash
  var a = document.createElement('a');
  a.href = '';
  return a.href;
}

function transformAttribute(doc, tagName, name, value) {
  // relative path in attribute
  if (name === 'src' || (name === 'href' || name === 'xlink:href') && value) {
    return absoluteToDoc(doc, value);
  } else if (name === 'background' && value && (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
    return absoluteToDoc(doc, value);
  } else if (name === 'srcset' && value) {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === 'style' && value) {
    return absoluteToStylesheet(value, getHref());
  } else {
    return value;
  }
}

function _isBlockedElement(element, blockClass, blockSelector) {
  if (typeof blockClass === 'string') {
    if (element.classList.contains(blockClass)) {
      return true;
    }
  } else {
    // tslint:disable-next-line: prefer-for-of
    for (var eIndex = 0; eIndex < element.classList.length; eIndex++) {
      var className = element.classList[eIndex];

      if (blockClass.test(className)) {
        return true;
      }
    }
  }

  if (blockSelector) {
    return element.matches(blockSelector);
  }

  return false;
}

function needMaskingText(node, maskTextClass, maskTextSelector) {
  if (!node) {
    return false;
  }

  if (node.nodeType === node.ELEMENT_NODE) {
    if (typeof maskTextClass === 'string') {
      if (node.classList.contains(maskTextClass)) {
        return true;
      }
    } else {
      node.classList.forEach(function (className) {
        if (maskTextClass.test(className)) {
          return true;
        }
      });
    }

    if (maskTextSelector) {
      if (node.matches(maskTextSelector)) {
        return true;
      }
    }

    return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
  }

  if (node.nodeType === node.TEXT_NODE) {
    // check parent node since text node do not have class name
    return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
  }

  return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
} // https://stackoverflow.com/a/36155560


function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  var win = iframeEl.contentWindow;

  if (!win) {
    return;
  } // document is loading


  var fired = false;
  var readyState;

  try {
    readyState = win.document.readyState;
  } catch (error) {
    return;
  }

  if (readyState !== 'complete') {
    var timer = setTimeout(function () {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener('load', function () {
      clearTimeout(timer);
      fired = true;
      listener();
    });
    return;
  } // check blank frame for Chrome


  var blankUrl = 'about:blank';

  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === '') {
    listener();
    return;
  } // use default listener


  iframeEl.addEventListener('load', listener);
}

function serializeNode(n, options) {
  var doc = options.doc,
      blockClass = options.blockClass,
      blockSelector = options.blockSelector,
      maskTextClass = options.maskTextClass,
      maskTextSelector = options.maskTextSelector,
      inlineStylesheet = options.inlineStylesheet,
      _options$maskInputOpt = options.maskInputOptions,
      maskInputOptions = _options$maskInputOpt === void 0 ? {} : _options$maskInputOpt,
      maskTextFn = options.maskTextFn,
      recordCanvas = options.recordCanvas; // Only record root id when document object is not the base document

  var rootId;

  if (doc.__sn) {
    var docId = doc.__sn.id;
    rootId = docId === 1 ? undefined : docId;
  }

  switch (n.nodeType) {
    case n.DOCUMENT_NODE:
      return {
        type: _types.NodeType.Document,
        childNodes: [],
        rootId: rootId
      };

    case n.DOCUMENT_TYPE_NODE:
      return {
        type: _types.NodeType.DocumentType,
        name: n.name,
        publicId: n.publicId,
        systemId: n.systemId,
        rootId: rootId
      };

    case n.ELEMENT_NODE:
      var needBlock = _isBlockedElement(n, blockClass, blockSelector);

      var tagName = getValidTagName(n);
      var attributes = {};

      for (var _i = 0, _Array$from = Array.from(n.attributes); _i < _Array$from.length; _i++) {
        var _Array$from$_i = _Array$from[_i],
            name = _Array$from$_i.name,
            value = _Array$from$_i.value;
        attributes[name] = transformAttribute(doc, tagName, name, value);
      } // remote css


      if (tagName === 'link' && inlineStylesheet) {
        var stylesheet = Array.from(doc.styleSheets).find(function (s) {
          return s.href === n.href;
        });
        var cssText = getCssRulesString(stylesheet);

        if (cssText) {
          delete attributes.rel;
          delete attributes.href;
          attributes._cssText = absoluteToStylesheet(cssText, stylesheet.href);
        }
      } // dynamic stylesheet


      if (tagName === 'style' && n.sheet && // TODO: Currently we only try to get dynamic stylesheet when it is an empty style element
      !(n.innerText || n.textContent || '').trim().length) {
        var _cssText = getCssRulesString(n.sheet);

        if (_cssText) {
          attributes._cssText = absoluteToStylesheet(_cssText, getHref());
        }
      } // form fields


      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        var _value = n.value;

        if (attributes.type !== 'radio' && attributes.type !== 'checkbox' && attributes.type !== 'submit' && attributes.type !== 'button' && _value) {
          attributes.value = maskInputOptions[attributes.type] || maskInputOptions[tagName] ? '*'.repeat(_value.length) : _value;
        } else if (n.checked) {
          attributes.checked = n.checked;
        }
      }

      if (tagName === 'option') {
        var selectValue = n.parentElement;

        if (attributes.value === selectValue.value) {
          attributes.selected = n.selected;
        }
      } // canvas image data


      if (tagName === 'canvas' && recordCanvas) {
        attributes.rr_dataURL = n.toDataURL();
      } // media elements


      if (tagName === 'audio' || tagName === 'video') {
        attributes.rr_mediaState = n.paused ? 'paused' : 'played';
      } // scroll


      if (n.scrollLeft) {
        attributes.rr_scrollLeft = n.scrollLeft;
      }

      if (n.scrollTop) {
        attributes.rr_scrollTop = n.scrollTop;
      } // block element


      if (needBlock) {
        var _n$getBoundingClientR = n.getBoundingClientRect(),
            width = _n$getBoundingClientR.width,
            height = _n$getBoundingClientR.height;

        attributes = {
          class: attributes.class,
          rr_width: "".concat(width, "px"),
          rr_height: "".concat(height, "px")
        };
      } // iframe


      if (tagName === 'iframe') {
        delete attributes.src;
      }

      return {
        type: _types.NodeType.Element,
        tagName: tagName,
        attributes: attributes,
        childNodes: [],
        isSVG: isSVGElement(n) || undefined,
        needBlock: needBlock,
        rootId: rootId
      };

    case n.TEXT_NODE:
      // The parent node may not be a html element which has a tagName attribute.
      // So just let it be undefined which is ok in this use case.
      var parentTagName = n.parentNode && n.parentNode.tagName;
      var textContent = n.textContent;
      var isStyle = parentTagName === 'STYLE' ? true : undefined;
      var isScript = parentTagName === 'SCRIPT' ? true : undefined;

      if (isStyle && textContent) {
        textContent = absoluteToStylesheet(textContent, getHref());
      }

      if (isScript) {
        textContent = 'SCRIPT_PLACEHOLDER';
      }

      if (!isStyle && !isScript && needMaskingText(n, maskTextClass, maskTextSelector) && textContent) {
        textContent = maskTextFn ? maskTextFn(textContent) : textContent.replace(/[\S]/g, '*');
      }

      return {
        type: _types.NodeType.Text,
        textContent: textContent || '',
        isStyle: isStyle,
        rootId: rootId
      };

    case n.CDATA_SECTION_NODE:
      return {
        type: _types.NodeType.CDATA,
        textContent: '',
        rootId: rootId
      };

    case n.COMMENT_NODE:
      return {
        type: _types.NodeType.Comment,
        textContent: n.textContent || '',
        rootId: rootId
      };

    default:
      return false;
  }
}

function lowerIfExists(maybeAttr) {
  if (maybeAttr === undefined) {
    return '';
  } else {
    return maybeAttr.toLowerCase();
  }
}

function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === _types.NodeType.Comment) {
    // TODO: convert IE conditional comments to real nodes
    return true;
  } else if (sn.type === _types.NodeType.Element) {
    if (slimDOMOptions.script && (sn.tagName === 'script' || sn.tagName === 'link' && sn.attributes.rel === 'preload' && sn.attributes.as === 'script')) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon' || sn.tagName === 'meta' && (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) || lowerIfExists(sn.attributes.name) === 'application-name' || lowerIfExists(sn.attributes.rel) === 'icon' || lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' || lowerIfExists(sn.attributes.rel) === 'shortcut icon'))) {
      return true;
    } else if (sn.tagName === 'meta') {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === 'pinterest')) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === 'robots' || lowerIfExists(sn.attributes.name) === 'googlebot' || lowerIfExists(sn.attributes.name) === 'bingbot')) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes['http-equiv'] !== undefined) {
        // e.g. X-UA-Compatible, Content-Type, Content-Language,
        // cache-control, X-Translated-By
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === 'author' || lowerIfExists(sn.attributes.name) === 'generator' || lowerIfExists(sn.attributes.name) === 'framework' || lowerIfExists(sn.attributes.name) === 'publisher' || lowerIfExists(sn.attributes.name) === 'progid' || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === 'google-site-verification' || lowerIfExists(sn.attributes.name) === 'yandex-verification' || lowerIfExists(sn.attributes.name) === 'csrf-token' || lowerIfExists(sn.attributes.name) === 'p:domain_verify' || lowerIfExists(sn.attributes.name) === 'verify-v1' || lowerIfExists(sn.attributes.name) === 'verification' || lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
        return true;
      }
    }
  }

  return false;
}

function serializeNodeWithId(n, options) {
  var doc = options.doc,
      map = options.map,
      blockClass = options.blockClass,
      blockSelector = options.blockSelector,
      maskTextClass = options.maskTextClass,
      maskTextSelector = options.maskTextSelector,
      _options$skipChild = options.skipChild,
      skipChild = _options$skipChild === void 0 ? false : _options$skipChild,
      _options$inlineStyles = options.inlineStylesheet,
      inlineStylesheet = _options$inlineStyles === void 0 ? true : _options$inlineStyles,
      _options$maskInputOpt2 = options.maskInputOptions,
      maskInputOptions = _options$maskInputOpt2 === void 0 ? {} : _options$maskInputOpt2,
      maskTextFn = options.maskTextFn,
      slimDOMOptions = options.slimDOMOptions,
      _options$recordCanvas = options.recordCanvas,
      recordCanvas = _options$recordCanvas === void 0 ? false : _options$recordCanvas,
      onSerialize = options.onSerialize,
      onIframeLoad = options.onIframeLoad,
      _options$iframeLoadTi = options.iframeLoadTimeout,
      iframeLoadTimeout = _options$iframeLoadTi === void 0 ? 5000 : _options$iframeLoadTi;
  var _options$preserveWhit = options.preserveWhiteSpace,
      preserveWhiteSpace = _options$preserveWhit === void 0 ? true : _options$preserveWhit;

  var _serializedNode = serializeNode(n, {
    doc: doc,
    blockClass: blockClass,
    blockSelector: blockSelector,
    maskTextClass: maskTextClass,
    maskTextSelector: maskTextSelector,
    inlineStylesheet: inlineStylesheet,
    maskInputOptions: maskInputOptions,
    maskTextFn: maskTextFn,
    recordCanvas: recordCanvas
  });

  if (!_serializedNode) {
    // TODO: dev only
    console.warn(n, 'not serialized');
    return null;
  }

  var id; // Try to reuse the previous id

  if ('__sn' in n) {
    id = n.__sn.id;
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === _types.NodeType.Text && !_serializedNode.isStyle && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }

  var serializedNode = Object.assign(_serializedNode, {
    id: id
  });
  n.__sn = serializedNode;

  if (id === IGNORED_NODE) {
    return null; // slimDOM
  }

  map[id] = n;

  if (onSerialize) {
    onSerialize(n);
  }

  var recordChild = !skipChild;

  if (serializedNode.type === _types.NodeType.Element) {
    recordChild = recordChild && !serializedNode.needBlock; // this property was not needed in replay side

    delete serializedNode.needBlock;
  }

  if ((serializedNode.type === _types.NodeType.Document || serializedNode.type === _types.NodeType.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && _serializedNode.type === _types.NodeType.Element && _serializedNode.tagName === 'head' // would impede performance: || getComputedStyle(n)['white-space'] === 'normal'
    ) {
        preserveWhiteSpace = false;
      }

    var bypassOptions = {
      doc: doc,
      map: map,
      blockClass: blockClass,
      blockSelector: blockSelector,
      maskTextClass: maskTextClass,
      maskTextSelector: maskTextSelector,
      skipChild: skipChild,
      inlineStylesheet: inlineStylesheet,
      maskInputOptions: maskInputOptions,
      maskTextFn: maskTextFn,
      slimDOMOptions: slimDOMOptions,
      recordCanvas: recordCanvas,
      preserveWhiteSpace: preserveWhiteSpace,
      onSerialize: onSerialize,
      onIframeLoad: onIframeLoad,
      iframeLoadTimeout: iframeLoadTimeout
    };

    for (var _i2 = 0, _Array$from2 = Array.from(n.childNodes); _i2 < _Array$from2.length; _i2++) {
      var childN = _Array$from2[_i2];
      var serializedChildNode = serializeNodeWithId(childN, bypassOptions);

      if (serializedChildNode) {
        serializedNode.childNodes.push(serializedChildNode);
      }
    }

    if ((0, _utils.isElement)(n) && n.shadowRoot) {
      serializedNode.isShadowHost = true;

      for (var _i3 = 0, _Array$from3 = Array.from(n.shadowRoot.childNodes); _i3 < _Array$from3.length; _i3++) {
        var _childN = _Array$from3[_i3];

        var _serializedChildNode = serializeNodeWithId(_childN, bypassOptions);

        if (_serializedChildNode) {
          _serializedChildNode.isShadow = true;
          serializedNode.childNodes.push(_serializedChildNode);
        }
      }
    }
  }

  if (n.parentNode && (0, _utils.isShadowRoot)(n.parentNode)) {
    serializedNode.isShadow = true;
  }

  if (serializedNode.type === _types.NodeType.Element && serializedNode.tagName === 'iframe') {
    onceIframeLoaded(n, function () {
      var iframeDoc = n.contentDocument;

      if (iframeDoc && onIframeLoad) {
        var serializedIframeNode = serializeNodeWithId(iframeDoc, {
          doc: iframeDoc,
          map: map,
          blockClass: blockClass,
          blockSelector: blockSelector,
          maskTextClass: maskTextClass,
          maskTextSelector: maskTextSelector,
          skipChild: false,
          inlineStylesheet: inlineStylesheet,
          maskInputOptions: maskInputOptions,
          maskTextFn: maskTextFn,
          slimDOMOptions: slimDOMOptions,
          recordCanvas: recordCanvas,
          preserveWhiteSpace: preserveWhiteSpace,
          onSerialize: onSerialize,
          onIframeLoad: onIframeLoad,
          iframeLoadTimeout: iframeLoadTimeout
        });

        if (serializedIframeNode) {
          onIframeLoad(n, serializedIframeNode);
        }
      }
    }, iframeLoadTimeout);
  }

  return serializedNode;
}

function snapshot(n, options) {
  var _ref = options || {},
      _ref$blockClass = _ref.blockClass,
      blockClass = _ref$blockClass === void 0 ? 'rr-block' : _ref$blockClass,
      _ref$blockSelector = _ref.blockSelector,
      blockSelector = _ref$blockSelector === void 0 ? null : _ref$blockSelector,
      _ref$maskTextClass = _ref.maskTextClass,
      maskTextClass = _ref$maskTextClass === void 0 ? 'rr-mask' : _ref$maskTextClass,
      _ref$maskTextSelector = _ref.maskTextSelector,
      maskTextSelector = _ref$maskTextSelector === void 0 ? null : _ref$maskTextSelector,
      _ref$inlineStylesheet = _ref.inlineStylesheet,
      inlineStylesheet = _ref$inlineStylesheet === void 0 ? true : _ref$inlineStylesheet,
      _ref$recordCanvas = _ref.recordCanvas,
      recordCanvas = _ref$recordCanvas === void 0 ? false : _ref$recordCanvas,
      _ref$maskAllInputs = _ref.maskAllInputs,
      maskAllInputs = _ref$maskAllInputs === void 0 ? false : _ref$maskAllInputs,
      maskTextFn = _ref.maskTextFn,
      _ref$slimDOM = _ref.slimDOM,
      slimDOM = _ref$slimDOM === void 0 ? false : _ref$slimDOM,
      preserveWhiteSpace = _ref.preserveWhiteSpace,
      onSerialize = _ref.onSerialize,
      onIframeLoad = _ref.onIframeLoad,
      iframeLoadTimeout = _ref.iframeLoadTimeout;

  var idNodeMap = {};
  var maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : maskAllInputs === false ? {
    password: true
  } : maskAllInputs;
  var slimDOMOptions = slimDOM === true || slimDOM === 'all' ? // if true: set of sensible options that should not throw away any information
  {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaDescKeywords: slimDOM === 'all',
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaAuthorship: true,
    headMetaVerification: true
  } : slimDOM === false ? {} : slimDOM;
  return [serializeNodeWithId(n, {
    doc: n,
    map: idNodeMap,
    blockClass: blockClass,
    blockSelector: blockSelector,
    maskTextClass: maskTextClass,
    maskTextSelector: maskTextSelector,
    skipChild: false,
    inlineStylesheet: inlineStylesheet,
    maskInputOptions: maskInputOptions,
    maskTextFn: maskTextFn,
    slimDOMOptions: slimDOMOptions,
    recordCanvas: recordCanvas,
    preserveWhiteSpace: preserveWhiteSpace,
    onSerialize: onSerialize,
    onIframeLoad: onIframeLoad,
    iframeLoadTimeout: iframeLoadTimeout
  }), idNodeMap];
}

function visitSnapshot(node, onVisit) {
  function walk(current) {
    onVisit(current);

    if (current.type === _types.NodeType.Document || current.type === _types.NodeType.Element) {
      current.childNodes.forEach(walk);
    }
  }

  walk(node);
}

function cleanupSnapshot() {
  // allow a new recording to start numbering nodes from scratch
  _id = 1;
}

var _default = snapshot;
exports.default = _default;
},{"./types":"../src/rrweb/snapshot/types.ts","./utils":"../src/rrweb/snapshot/utils.ts"}],"../node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../src/rrweb/snapshot/css.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This file is a fork of https://github.com/reworkcss/css/blob/master/lib/parse/index.js
 * I fork it because:
 * 1. The css library was built for node.js which does not have tree-shaking supports.
 * 2. Rewrites into typescript give us a better type interface.
 */
// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

function parse(css) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;
  /**
   * Update lineno and column based on `str`.
   */

  function updatePosition(str) {
    var lines = str.match(/\n/g);

    if (lines) {
      lineno += lines.length;
    }

    var i = str.lastIndexOf('\n');
    column = i === -1 ? column + str.length : str.length - i;
  }
  /**
   * Mark position and patch `node.position`.
   */


  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  /**
   * Store position information for a node
   */


  var Position = function Position(start) {
    (0, _classCallCheck2.default)(this, Position);
    this.start = start;
    this.end = {
      line: lineno,
      column: column
    };
    this.source = options.source;
  };
  /**
   * Non-enumerable source string
   */


  Position.prototype.content = css;
  var errorsList = [];

  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = css;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }
  /**
   * Parse stylesheet.
   */


  function stylesheet() {
    var rulesList = rules();
    return {
      type: 'stylesheet',
      stylesheet: {
        source: options.source,
        rules: rulesList,
        parsingErrors: errorsList
      }
    };
  }
  /**
   * Opening brace.
   */


  function open() {
    return match(/^{\s*/);
  }
  /**
   * Closing brace.
   */


  function close() {
    return match(/^}/);
  }
  /**
   * Parse ruleset.
   */


  function rules() {
    var node;
    var rules = [];
    whitespace();
    comments(rules);

    while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
      if (node !== false) {
        rules.push(node);
        comments(rules);
      }
    }

    return rules;
  }
  /**
   * Match `re` and return captures.
   */


  function match(re) {
    var m = re.exec(css);

    if (!m) {
      return;
    }

    var str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  }
  /**
   * Parse whitespace.
   */


  function whitespace() {
    match(/^\s*/);
  }
  /**
   * Parse comments;
   */


  function comments() {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var c;

    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }

      c = comment();
    }

    return rules;
  }
  /**
   * Parse comment.
   */


  function comment() {
    var pos = position();

    if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
      return;
    }

    var i = 2;

    while ('' !== css.charAt(i) && ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
      ++i;
    }

    i += 2;

    if ('' === css.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = css.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    css = css.slice(i);
    column += 2;
    return pos({
      type: 'comment',
      comment: str
    });
  }
  /**
   * Parse selector.
   */


  function selector() {
    var m = match(/^([^{]+)/);

    if (!m) {
      return;
    }
    /* @fix Remove all comments from selectors
     * http://ostermiller.org/findcomment.html */


    return trim(m[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '').replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
      return m.replace(/,/g, "\u200C");
    }).split(/\s*(?![^(]*\)),\s*/).map(function (s) {
      return s.replace(/\u200C/g, ',');
    });
  }
  /**
   * Parse declaration.
   */


  function declaration() {
    var pos = position(); // prop

    var propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);

    if (!propMatch) {
      return;
    }

    var prop = trim(propMatch[0]); // :

    if (!match(/^:\s*/)) {
      return error("property missing ':'");
    } // val


    var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
    var ret = pos({
      type: 'declaration',
      property: prop.replace(commentre, ''),
      value: val ? trim(val[0]).replace(commentre, '') : ''
    }); // ;

    match(/^[;\s]*/);
    return ret;
  }
  /**
   * Parse declarations.
   */


  function declarations() {
    var decls = [];

    if (!open()) {
      return error("missing '{'");
    }

    comments(decls); // declarations

    var decl;

    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }

      decl = declaration();
    }

    if (!close()) {
      return error("missing '}'");
    }

    return decls;
  }
  /**
   * Parse keyframe.
   */


  function keyframe() {
    var m;
    var vals = [];
    var pos = position();

    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }

    if (!vals.length) {
      return;
    }

    return pos({
      type: 'keyframe',
      values: vals,
      declarations: declarations()
    });
  }
  /**
   * Parse keyframes.
   */


  function atkeyframes() {
    var pos = position();
    var m = match(/^@([-\w]+)?keyframes\s*/);

    if (!m) {
      return;
    }

    var vendor = m[1]; // identifier

    m = match(/^([-\w]+)\s*/);

    if (!m) {
      return error('@keyframes missing name');
    }

    var name = m[1];

    if (!open()) {
      return error("@keyframes missing '{'");
    }

    var frame;
    var frames = comments();

    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }

    if (!close()) {
      return error("@keyframes missing '}'");
    }

    return pos({
      type: 'keyframes',
      name: name,
      vendor: vendor,
      keyframes: frames
    });
  }
  /**
   * Parse supports.
   */


  function atsupports() {
    var pos = position();
    var m = match(/^@supports *([^{]+)/);

    if (!m) {
      return;
    }

    var supports = trim(m[1]);

    if (!open()) {
      return error("@supports missing '{'");
    }

    var style = comments().concat(rules());

    if (!close()) {
      return error("@supports missing '}'");
    }

    return pos({
      type: 'supports',
      supports: supports,
      rules: style
    });
  }
  /**
   * Parse host.
   */


  function athost() {
    var pos = position();
    var m = match(/^@host\s*/);

    if (!m) {
      return;
    }

    if (!open()) {
      return error("@host missing '{'");
    }

    var style = comments().concat(rules());

    if (!close()) {
      return error("@host missing '}'");
    }

    return pos({
      type: 'host',
      rules: style
    });
  }
  /**
   * Parse media.
   */


  function atmedia() {
    var pos = position();
    var m = match(/^@media *([^{]+)/);

    if (!m) {
      return;
    }

    var media = trim(m[1]);

    if (!open()) {
      return error("@media missing '{'");
    }

    var style = comments().concat(rules());

    if (!close()) {
      return error("@media missing '}'");
    }

    return pos({
      type: 'media',
      media: media,
      rules: style
    });
  }
  /**
   * Parse custom-media.
   */


  function atcustommedia() {
    var pos = position();
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);

    if (!m) {
      return;
    }

    return pos({
      type: 'custom-media',
      name: trim(m[1]),
      media: trim(m[2])
    });
  }
  /**
   * Parse paged media.
   */


  function atpage() {
    var pos = position();
    var m = match(/^@page */);

    if (!m) {
      return;
    }

    var sel = selector() || [];

    if (!open()) {
      return error("@page missing '{'");
    }

    var decls = comments(); // declarations

    var decl;

    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) {
      return error("@page missing '}'");
    }

    return pos({
      type: 'page',
      selectors: sel,
      declarations: decls
    });
  }
  /**
   * Parse document.
   */


  function atdocument() {
    var pos = position();
    var m = match(/^@([-\w]+)?document *([^{]+)/);

    if (!m) {
      return;
    }

    var vendor = trim(m[1]);
    var doc = trim(m[2]);

    if (!open()) {
      return error("@document missing '{'");
    }

    var style = comments().concat(rules());

    if (!close()) {
      return error("@document missing '}'");
    }

    return pos({
      type: 'document',
      document: doc,
      vendor: vendor,
      rules: style
    });
  }
  /**
   * Parse font-face.
   */


  function atfontface() {
    var pos = position();
    var m = match(/^@font-face\s*/);

    if (!m) {
      return;
    }

    if (!open()) {
      return error("@font-face missing '{'");
    }

    var decls = comments(); // declarations

    var decl;

    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) {
      return error("@font-face missing '}'");
    }

    return pos({
      type: 'font-face',
      declarations: decls
    });
  }
  /**
   * Parse import
   */


  var atimport = _compileAtrule('import');
  /**
   * Parse charset
   */


  var atcharset = _compileAtrule('charset');
  /**
   * Parse namespace
   */


  var atnamespace = _compileAtrule('namespace');
  /**
   * Parse non-block at-rules
   */


  function _compileAtrule(name) {
    var re = new RegExp('^@' + name + '\\s*([^;]+);');
    return function () {
      var pos = position();
      var m = match(re);

      if (!m) {
        return;
      }

      var ret = {
        type: name
      };
      ret[name] = m[1].trim();
      return pos(ret);
    };
  }
  /**
   * Parse at rule.
   */


  function atrule() {
    if (css[0] !== '@') {
      return;
    }

    return atkeyframes() || atmedia() || atcustommedia() || atsupports() || atimport() || atcharset() || atnamespace() || atdocument() || atpage() || athost() || atfontface();
  }
  /**
   * Parse rule.
   */


  function rule() {
    var pos = position();
    var sel = selector();

    if (!sel) {
      return error('selector missing');
    }

    comments();
    return pos({
      type: 'rule',
      selectors: sel,
      declarations: declarations()
    });
  }

  return addParent(stylesheet());
}
/**
 * Trim `str`.
 */


function trim(str) {
  return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
/**
 * Adds non-enumerable parent node reference to each node.
 */


function addParent(obj, parent) {
  var isNode = obj && typeof obj.type === 'string';
  var childParent = isNode ? obj : parent;

  for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var value = obj[k];

    if (Array.isArray(value)) {
      value.forEach(function (v) {
        addParent(v, childParent);
      });
    } else if (value && (0, _typeof2.default)(value) === 'object') {
      addParent(value, childParent);
    }
  }

  if (isNode) {
    Object.defineProperty(obj, 'parent', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: parent || null
    });
  }

  return obj;
}
},{"@babel/runtime/helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js"}],"../src/rrweb/snapshot/rebuild.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHoverClass = addHoverClass;
exports.buildNodeWithSN = buildNodeWithSN;
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _css = require("./css");

var _types = require("./types");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tagMap = {
  script: 'noscript',
  // camel case svg element tag names
  altglyph: 'altGlyph',
  altglyphdef: 'altGlyphDef',
  altglyphitem: 'altGlyphItem',
  animatecolor: 'animateColor',
  animatemotion: 'animateMotion',
  animatetransform: 'animateTransform',
  clippath: 'clipPath',
  feblend: 'feBlend',
  fecolormatrix: 'feColorMatrix',
  fecomponenttransfer: 'feComponentTransfer',
  fecomposite: 'feComposite',
  feconvolvematrix: 'feConvolveMatrix',
  fediffuselighting: 'feDiffuseLighting',
  fedisplacementmap: 'feDisplacementMap',
  fedistantlight: 'feDistantLight',
  fedropshadow: 'feDropShadow',
  feflood: 'feFlood',
  fefunca: 'feFuncA',
  fefuncb: 'feFuncB',
  fefuncg: 'feFuncG',
  fefuncr: 'feFuncR',
  fegaussianblur: 'feGaussianBlur',
  feimage: 'feImage',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  femorphology: 'feMorphology',
  feoffset: 'feOffset',
  fepointlight: 'fePointLight',
  fespecularlighting: 'feSpecularLighting',
  fespotlight: 'feSpotLight',
  fetile: 'feTile',
  feturbulence: 'feTurbulence',
  foreignobject: 'foreignObject',
  glyphref: 'glyphRef',
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient'
};

function getTagName(n) {
  var tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;

  if (tagName === 'link' && n.attributes._cssText) {
    tagName = 'style';
  }

  return tagName;
} // based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping


function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

var HOVER_SELECTOR = /([^\\]):hover/;
var HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR, 'g');

function addHoverClass(cssText) {
  var ast = (0, _css.parse)(cssText, {
    silent: true
  });

  if (!ast.stylesheet) {
    return cssText;
  }

  var selectors = [];
  ast.stylesheet.rules.forEach(function (rule) {
    if ('selectors' in rule) {
      (rule.selectors || []).forEach(function (selector) {
        if (HOVER_SELECTOR.test(selector)) {
          selectors.push(selector);
        }
      });
    }
  });
  if (selectors.length === 0) return cssText;
  var selectorMatcher = new RegExp(selectors.filter(function (selector, index) {
    return selectors.indexOf(selector) === index;
  }).sort(function (a, b) {
    return b.length - a.length;
  }).map(function (selector) {
    return escapeRegExp(selector);
  }).join('|'), 'g');
  return cssText.replace(selectorMatcher, function (selector) {
    var newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
    return "".concat(selector, ", ").concat(newSelector);
  });
}

function buildNode(n, options) {
  var doc = options.doc,
      hackCss = options.hackCss;

  var _ret = function () {
    switch (n.type) {
      case _types.NodeType.Document:
        return {
          v: doc.implementation.createDocument(null, '', null)
        };

      case _types.NodeType.DocumentType:
        return {
          v: doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId)
        };

      case _types.NodeType.Element:
        var tagName = getTagName(n);
        var node;

        if (n.isSVG) {
          node = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
        } else {
          node = doc.createElement(tagName);
        }

        for (var name in n.attributes) {
          if (!n.attributes.hasOwnProperty(name)) {
            continue;
          }

          var value = n.attributes[name];
          value = typeof value === 'boolean' || typeof value === 'number' ? '' : value; // attribute names start with rr_ are internal attributes added by rrweb

          if (!name.startsWith('rr_')) {
            var isTextarea = tagName === 'textarea' && name === 'value';
            var isRemoteOrDynamicCss = tagName === 'style' && name === '_cssText';

            if (isRemoteOrDynamicCss && hackCss) {
              value = addHoverClass(value);
            }

            if (isTextarea || isRemoteOrDynamicCss) {
              var child = doc.createTextNode(value); // https://github.com/rrweb-io/rrweb/issues/112

              for (var _i = 0, _Array$from = Array.from(node.childNodes); _i < _Array$from.length; _i++) {
                var c = _Array$from[_i];

                if (c.nodeType === node.TEXT_NODE) {
                  node.removeChild(c);
                }
              }

              node.appendChild(child);
              continue;
            }

            if (tagName === 'iframe' && name === 'src') {
              continue;
            }

            try {
              if (n.isSVG && name === 'xlink:href') {
                node.setAttributeNS('http://www.w3.org/1999/xlink', name, value);
              } else if (name === 'onload' || name === 'onclick' || name.substring(0, 7) === 'onmouse') {
                // Rename some of the more common atttributes from https://www.w3schools.com/tags/ref_eventattributes.asp
                // as setting them triggers a console.error (which shows up despite the try/catch)
                // Assumption: these attributes are not used to css
                node.setAttribute('_' + name, value);
              } else {
                node.setAttribute(name, value);
              }
            } catch (error) {// skip invalid attribute
            }
          } else {
            // handle internal attributes
            if (tagName === 'canvas' && name === 'rr_dataURL') {
              (function () {
                var image = document.createElement('img');
                image.src = value;

                image.onload = function () {
                  var ctx = node.getContext('2d');

                  if (ctx) {
                    ctx.drawImage(image, 0, 0, image.width, image.height);
                  }
                };
              })();
            }

            if (name === 'rr_width') {
              node.style.width = value;
            }

            if (name === 'rr_height') {
              node.style.height = value;
            }

            if (name === 'rr_mediaState') {
              switch (value) {
                case 'played':
                  node.play();

                case 'paused':
                  node.pause();
                  break;

                default:
              }
            }
          }
        }

        if (n.isShadowHost) {
          /**
           * Since node is newly rebuilt, it should be a normal element
           * without shadowRoot.
           * But if there are some weird situations that has defined
           * custom element in the scope before we rebuild node, it may
           * register the shadowRoot earlier.
           * The logic in the 'else' block is just a try-my-best solution
           * for the corner case, please let we know if it is wrong and
           * we can remove it.
           */
          if (!node.shadowRoot) {
            node.attachShadow({
              mode: 'open'
            });
          } else {
            while (node.shadowRoot.firstChild) {
              node.shadowRoot.removeChild(node.shadowRoot.firstChild);
            }
          }
        }

        return {
          v: node
        };

      case _types.NodeType.Text:
        return {
          v: doc.createTextNode(n.isStyle && hackCss ? addHoverClass(n.textContent) : n.textContent)
        };

      case _types.NodeType.CDATA:
        return {
          v: doc.createCDATASection(n.textContent)
        };

      case _types.NodeType.Comment:
        return {
          v: doc.createComment(n.textContent)
        };

      default:
        return {
          v: null
        };
    }
  }();

  if ((0, _typeof2.default)(_ret) === "object") return _ret.v;
}

function buildNodeWithSN(n, options) {
  var doc = options.doc,
      map = options.map,
      _options$skipChild = options.skipChild,
      skipChild = _options$skipChild === void 0 ? false : _options$skipChild,
      _options$hackCss = options.hackCss,
      hackCss = _options$hackCss === void 0 ? true : _options$hackCss,
      afterAppend = options.afterAppend;
  var node = buildNode(n, {
    doc: doc,
    hackCss: hackCss
  });

  if (!node) {
    return null;
  }

  if (n.rootId) {
    console.assert(map[n.rootId] === doc, 'Target document should has the same root id.');
  } // use target document as root document


  if (n.type === _types.NodeType.Document) {
    // close before open to make sure document was closed
    doc.close();
    doc.open();
    node = doc;
  }

  node.__sn = n;
  map[n.id] = node;

  if ((n.type === _types.NodeType.Document || n.type === _types.NodeType.Element) && !skipChild) {
    var _iterator = _createForOfIteratorHelper(n.childNodes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var childN = _step.value;
        var childNode = buildNodeWithSN(childN, {
          doc: doc,
          map: map,
          skipChild: false,
          hackCss: hackCss,
          afterAppend: afterAppend
        });

        if (!childNode) {
          console.warn('Failed to rebuild', childN);
          continue;
        }

        if (childN.isShadow && (0, _utils.isElement)(node) && node.shadowRoot) {
          node.shadowRoot.appendChild(childNode);
        } else {
          node.appendChild(childNode);
        }

        if (afterAppend) {
          afterAppend(childNode);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return node;
}

function visit(idNodeMap, onVisit) {
  function walk(node) {
    onVisit(node);
  }

  for (var key in idNodeMap) {
    if (idNodeMap[key]) {
      walk(idNodeMap[key]);
    }
  }
}

function handleScroll(node) {
  var n = node.__sn;

  if (n.type !== _types.NodeType.Element) {
    return;
  }

  var el = node;

  for (var name in n.attributes) {
    if (!(n.attributes.hasOwnProperty(name) && name.startsWith('rr_'))) {
      continue;
    }

    var value = n.attributes[name];

    if (name === 'rr_scrollLeft') {
      el.scrollLeft = value;
    }

    if (name === 'rr_scrollTop') {
      el.scrollTop = value;
    }
  }
}

function rebuild(n, options) {
  var doc = options.doc,
      onVisit = options.onVisit,
      _options$hackCss2 = options.hackCss,
      hackCss = _options$hackCss2 === void 0 ? true : _options$hackCss2,
      afterAppend = options.afterAppend;
  var idNodeMap = {};
  var node = buildNodeWithSN(n, {
    doc: doc,
    map: idNodeMap,
    skipChild: false,
    hackCss: hackCss,
    afterAppend: afterAppend
  });
  visit(idNodeMap, function (visitedNode) {
    if (onVisit) {
      onVisit(visitedNode);
    }

    handleScroll(visitedNode);
  });
  return [node, idNodeMap];
}

var _default = rebuild;
exports.default = _default;
},{"@babel/runtime/helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js","./css":"../src/rrweb/snapshot/css.ts","./types":"../src/rrweb/snapshot/types.ts","./utils":"../src/rrweb/snapshot/utils.ts"}],"../src/rrweb/snapshot/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  snapshot: true,
  serializeNodeWithId: true,
  transformAttribute: true,
  visitSnapshot: true,
  cleanupSnapshot: true,
  needMaskingText: true,
  IGNORED_NODE: true,
  rebuild: true,
  buildNodeWithSN: true,
  addHoverClass: true
};
Object.defineProperty(exports, "snapshot", {
  enumerable: true,
  get: function () {
    return _snapshot.default;
  }
});
Object.defineProperty(exports, "serializeNodeWithId", {
  enumerable: true,
  get: function () {
    return _snapshot.serializeNodeWithId;
  }
});
Object.defineProperty(exports, "transformAttribute", {
  enumerable: true,
  get: function () {
    return _snapshot.transformAttribute;
  }
});
Object.defineProperty(exports, "visitSnapshot", {
  enumerable: true,
  get: function () {
    return _snapshot.visitSnapshot;
  }
});
Object.defineProperty(exports, "cleanupSnapshot", {
  enumerable: true,
  get: function () {
    return _snapshot.cleanupSnapshot;
  }
});
Object.defineProperty(exports, "needMaskingText", {
  enumerable: true,
  get: function () {
    return _snapshot.needMaskingText;
  }
});
Object.defineProperty(exports, "IGNORED_NODE", {
  enumerable: true,
  get: function () {
    return _snapshot.IGNORED_NODE;
  }
});
Object.defineProperty(exports, "rebuild", {
  enumerable: true,
  get: function () {
    return _rebuild.default;
  }
});
Object.defineProperty(exports, "buildNodeWithSN", {
  enumerable: true,
  get: function () {
    return _rebuild.buildNodeWithSN;
  }
});
Object.defineProperty(exports, "addHoverClass", {
  enumerable: true,
  get: function () {
    return _rebuild.addHoverClass;
  }
});

var _snapshot = _interopRequireWildcard(require("./snapshot"));

var _rebuild = _interopRequireWildcard(require("./rebuild"));

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./snapshot":"../src/rrweb/snapshot/snapshot.ts","./rebuild":"../src/rrweb/snapshot/rebuild.ts","./types":"../src/rrweb/snapshot/types.ts","./utils":"../src/rrweb/snapshot/utils.ts"}],"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles.js");

var iterableToArray = require("./iterableToArray.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableSpread = require("./nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayWithoutHoles.js":"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray.js":"../node_modules/@babel/runtime/helpers/iterableToArray.js","./unsupportedIterableToArray.js":"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableSpread.js":"../node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"../src/rrweb/types.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplayerEvents = exports.MediaInteractions = exports.MouseInteractions = exports.IncrementalSource = exports.EventType = void 0;
var EventType;
exports.EventType = EventType;

(function (EventType) {
  EventType[EventType["DomContentLoaded"] = 0] = "DomContentLoaded";
  EventType[EventType["Load"] = 1] = "Load";
  EventType[EventType["FullSnapshot"] = 2] = "FullSnapshot";
  EventType[EventType["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
  EventType[EventType["Meta"] = 4] = "Meta";
  EventType[EventType["Custom"] = 5] = "Custom";
})(EventType || (exports.EventType = EventType = {}));

var IncrementalSource;
exports.IncrementalSource = IncrementalSource;

(function (IncrementalSource) {
  IncrementalSource[IncrementalSource["Mutation"] = 0] = "Mutation";
  IncrementalSource[IncrementalSource["MouseMove"] = 1] = "MouseMove";
  IncrementalSource[IncrementalSource["MouseInteraction"] = 2] = "MouseInteraction";
  IncrementalSource[IncrementalSource["Scroll"] = 3] = "Scroll";
  IncrementalSource[IncrementalSource["ViewportResize"] = 4] = "ViewportResize";
  IncrementalSource[IncrementalSource["Input"] = 5] = "Input";
  IncrementalSource[IncrementalSource["TouchMove"] = 6] = "TouchMove";
  IncrementalSource[IncrementalSource["MediaInteraction"] = 7] = "MediaInteraction";
  IncrementalSource[IncrementalSource["StyleSheetRule"] = 8] = "StyleSheetRule";
  IncrementalSource[IncrementalSource["CanvasMutation"] = 9] = "CanvasMutation";
  IncrementalSource[IncrementalSource["Font"] = 10] = "Font";
  IncrementalSource[IncrementalSource["Log"] = 11] = "Log";
  IncrementalSource[IncrementalSource["Drag"] = 12] = "Drag";
})(IncrementalSource || (exports.IncrementalSource = IncrementalSource = {}));

var MouseInteractions;
exports.MouseInteractions = MouseInteractions;

(function (MouseInteractions) {
  MouseInteractions[MouseInteractions["MouseUp"] = 0] = "MouseUp";
  MouseInteractions[MouseInteractions["MouseDown"] = 1] = "MouseDown";
  MouseInteractions[MouseInteractions["Click"] = 2] = "Click";
  MouseInteractions[MouseInteractions["ContextMenu"] = 3] = "ContextMenu";
  MouseInteractions[MouseInteractions["DblClick"] = 4] = "DblClick";
  MouseInteractions[MouseInteractions["Focus"] = 5] = "Focus";
  MouseInteractions[MouseInteractions["Blur"] = 6] = "Blur";
  MouseInteractions[MouseInteractions["TouchStart"] = 7] = "TouchStart";
  MouseInteractions[MouseInteractions["TouchMove_Departed"] = 8] = "TouchMove_Departed";
  MouseInteractions[MouseInteractions["TouchEnd"] = 9] = "TouchEnd";
})(MouseInteractions || (exports.MouseInteractions = MouseInteractions = {}));

var MediaInteractions;
exports.MediaInteractions = MediaInteractions;

(function (MediaInteractions) {
  MediaInteractions[MediaInteractions["Play"] = 0] = "Play";
  MediaInteractions[MediaInteractions["Pause"] = 1] = "Pause";
})(MediaInteractions || (exports.MediaInteractions = MediaInteractions = {}));

var ReplayerEvents;
exports.ReplayerEvents = ReplayerEvents;

(function (ReplayerEvents) {
  ReplayerEvents["Start"] = "start";
  ReplayerEvents["Pause"] = "pause";
  ReplayerEvents["Resume"] = "resume";
  ReplayerEvents["Resize"] = "resize";
  ReplayerEvents["Finish"] = "finish";
  ReplayerEvents["FullsnapshotRebuilded"] = "fullsnapshot-rebuilded";
  ReplayerEvents["LoadStylesheetStart"] = "load-stylesheet-start";
  ReplayerEvents["LoadStylesheetEnd"] = "load-stylesheet-end";
  ReplayerEvents["SkipStart"] = "skip-start";
  ReplayerEvents["SkipEnd"] = "skip-end";
  ReplayerEvents["MouseInteraction"] = "mouse-interaction";
  ReplayerEvents["EventCast"] = "event-cast";
  ReplayerEvents["CustomEvent"] = "custom-event";
  ReplayerEvents["Flush"] = "flush";
  ReplayerEvents["StateChange"] = "state-change";
  ReplayerEvents["PlayBack"] = "play-back";
})(ReplayerEvents || (exports.ReplayerEvents = ReplayerEvents = {}));
},{}],"../src/rrweb/utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.createMirror = createMirror;
exports.throttle = throttle;
exports.hookSetter = hookSetter;
exports.patch = patch;
exports.getWindowHeight = getWindowHeight;
exports.getWindowWidth = getWindowWidth;
exports.isBlocked = isBlocked;
exports.isIgnored = isIgnored;
exports.isAncestorRemoved = isAncestorRemoved;
exports.isTouchEvent = isTouchEvent;
exports.polyfill = polyfill;
exports.needCastInSyncMode = needCastInSyncMode;
exports.queueToResolveTrees = queueToResolveTrees;
exports.iterateResolveTree = iterateResolveTree;
exports.isIframeINode = isIframeINode;
exports.getBaseDimension = getBaseDimension;
exports.hasShadowRoot = hasShadowRoot;
exports.TreeIndex = exports._mirror = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _types = require("./types");

var _snapshot = require("./snapshot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function on(type, fn) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var options = {
    capture: true,
    passive: true
  };
  target.addEventListener(type, fn, options);
  return function () {
    return target.removeEventListener(type, fn, options);
  };
}

function createMirror() {
  return {
    map: {},
    getId: function getId(n) {
      // if n is not a serialized INode, use -1 as its id.
      if (!n.__sn) {
        return -1;
      }

      return n.__sn.id;
    },
    getNode: function getNode(id) {
      return this.map[id] || null;
    },
    // TODO: use a weakmap to get rid of manually memory management
    removeNodeFromMap: function removeNodeFromMap(n) {
      var _this = this;

      var id = n.__sn && n.__sn.id;
      delete this.map[id];

      if (n.childNodes) {
        n.childNodes.forEach(function (child) {
          return _this.removeNodeFromMap(child);
        });
      }
    },
    has: function has(id) {
      return this.map.hasOwnProperty(id);
    },
    reset: function reset() {
      this.map = {};
    }
  };
} // https://github.com/rrweb-io/rrweb/pull/407


var DEPARTED_MIRROR_ACCESS_WARNING = 'Please stop import mirror directly. Instead of that,' + '\r\n' + 'now you can use replayer.getMirror() to access the mirror instance of a replayer,' + '\r\n' + 'or you can use record.mirror to access the mirror instance during recording.';
var _mirror = {
  map: {},
  getId: function getId() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return -1;
  },
  getNode: function getNode() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return null;
  },
  removeNodeFromMap: function removeNodeFromMap() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  },
  has: function has() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return false;
  },
  reset: function reset() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  }
};
exports._mirror = _mirror;

if (typeof window !== 'undefined' && window.Proxy && window.Reflect) {
  exports._mirror = _mirror = new Proxy(_mirror, {
    get: function get(target, prop, receiver) {
      if (prop === 'map') {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      }

      return Reflect.get(target, prop, receiver);
    }
  });
} // copy from underscore and modified


function throttle(func, wait) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout = null;
  var previous = 0; // tslint:disable-next-line: only-arrow-functions

  return function (arg) {
    var now = Date.now();

    if (!previous && options.leading === false) {
      previous = now;
    }

    var remaining = wait - (now - previous);
    var context = this;
    var args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        window.clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = window.setTimeout(function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}

function hookSetter(target, key, d, isRevoked) {
  var win = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : window;
  var original = win.Object.getOwnPropertyDescriptor(target, key);
  win.Object.defineProperty(target, key, isRevoked ? d : {
    set: function set(value) {
      var _this2 = this;

      // put hooked setter into event loop to avoid of set latency
      setTimeout(function () {
        d.set.call(_this2, value);
      }, 0);

      if (original && original.set) {
        original.set.call(this, value);
      }
    }
  });
  return function () {
    return hookSetter(target, key, original || {}, true);
  };
} // copy from https://github.com/getsentry/sentry-javascript/blob/b2109071975af8bf0316d3b5b38f519bdaf5dc15/packages/utils/src/object.ts


function patch( // tslint:disable-next-line:no-any
source, name, // tslint:disable-next-line:no-any
replacement) {
  try {
    if (!(name in source)) {
      return function () {};
    }

    var original = source[name];
    var wrapped = replacement(original); // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    // tslint:disable-next-line:strict-type-predicates

    if (typeof wrapped === 'function') {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original
        }
      });
    }

    source[name] = wrapped;
    return function () {
      source[name] = original;
    };
  } catch (_unused) {
    return function () {}; // This can throw if multiple fill happens on a global object like XMLHttpRequest
    // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
  }
}

function getWindowHeight() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}

function getWindowWidth() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}

function isBlocked(node, blockClass) {
  if (!node) {
    return false;
  }

  if (node.nodeType === node.ELEMENT_NODE) {
    var needBlock = false;

    if (typeof blockClass === 'string') {
      needBlock = node.classList.contains(blockClass);
    } else {
      node.classList.forEach(function (className) {
        if (blockClass.test(className)) {
          needBlock = true;
        }
      });
    }

    return needBlock || isBlocked(node.parentNode, blockClass);
  }

  if (node.nodeType === node.TEXT_NODE) {
    // check parent node since text node do not have class name
    return isBlocked(node.parentNode, blockClass);
  }

  return isBlocked(node.parentNode, blockClass);
}

function isIgnored(n) {
  if ('__sn' in n) {
    return n.__sn.id === _snapshot.IGNORED_NODE;
  } // The main part of the slimDOM check happens in
  // rrweb-snapshot::serializeNodeWithId


  return false;
}

function isAncestorRemoved(target, mirror) {
  if ((0, _snapshot.isShadowRoot)(target)) {
    return false;
  }

  var id = mirror.getId(target);

  if (!mirror.has(id)) {
    return true;
  }

  if (target.parentNode && target.parentNode.nodeType === target.DOCUMENT_NODE) {
    return false;
  } // if the root is not document, it means the node is not in the DOM tree anymore


  if (!target.parentNode) {
    return true;
  }

  return isAncestorRemoved(target.parentNode, mirror);
}

function isTouchEvent(event) {
  return Boolean(event.changedTouches);
}

function polyfill() {
  var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  if ('NodeList' in win && !win.NodeList.prototype.forEach) {
    win.NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
    win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
  } // https://github.com/Financial-Times/polyfill-service/pull/183


  if (!Node.prototype.contains) {
    Node.prototype.contains = function contains(node) {
      if (!(0 in arguments)) {
        throw new TypeError('1 argument is required');
      }

      do {
        if (this === node) {
          return true;
        } // tslint:disable-next-line: no-conditional-assignment

      } while (node = node && node.parentNode);

      return false;
    };
  }
}

function needCastInSyncMode(event) {
  switch (event.type) {
    case _types.EventType.DomContentLoaded:
    case _types.EventType.Load:
    case _types.EventType.Custom:
      return false;

    case _types.EventType.FullSnapshot:
    case _types.EventType.Meta:
      return true;

    default:
      break;
  }

  switch (event.data.source) {
    case _types.IncrementalSource.MouseMove:
    case _types.IncrementalSource.MouseInteraction:
    case _types.IncrementalSource.TouchMove:
    case _types.IncrementalSource.MediaInteraction:
      return false;

    case _types.IncrementalSource.ViewportResize:
    case _types.IncrementalSource.StyleSheetRule:
    case _types.IncrementalSource.Scroll:
    case _types.IncrementalSource.Input:
      return true;

    default:
      break;
  }

  return true;
}

var TreeIndex = /*#__PURE__*/function () {
  function TreeIndex() {
    (0, _classCallCheck2.default)(this, TreeIndex);
    this.reset();
  }

  (0, _createClass2.default)(TreeIndex, [{
    key: "add",
    value: function add(mutation) {
      var parentTreeNode = this.indexes.get(mutation.parentId);
      var treeNode = {
        id: mutation.node.id,
        mutation: mutation,
        children: [],
        texts: [],
        attributes: []
      };

      if (!parentTreeNode) {
        this.tree[treeNode.id] = treeNode;
      } else {
        treeNode.parent = parentTreeNode;
        parentTreeNode.children[treeNode.id] = treeNode;
      }

      this.indexes.set(treeNode.id, treeNode);
    }
  }, {
    key: "remove",
    value: function remove(mutation, mirror) {
      var _this3 = this;

      var parentTreeNode = this.indexes.get(mutation.parentId);
      var treeNode = this.indexes.get(mutation.id);

      var deepRemoveFromMirror = function deepRemoveFromMirror(id) {
        _this3.removeIdSet.add(id);

        var node = mirror.getNode(id);
        node === null || node === void 0 ? void 0 : node.childNodes.forEach(function (childNode) {
          if ('__sn' in childNode) {
            deepRemoveFromMirror(childNode.__sn.id);
          }
        });
      };

      var deepRemoveFromTreeIndex = function deepRemoveFromTreeIndex(node) {
        _this3.removeIdSet.add(node.id);

        Object.values(node.children).forEach(function (n) {
          return deepRemoveFromTreeIndex(n);
        });

        var _treeNode = _this3.indexes.get(node.id);

        if (_treeNode) {
          var _parentTreeNode = _treeNode.parent;

          if (_parentTreeNode) {
            delete _treeNode.parent;
            delete _parentTreeNode.children[_treeNode.id];

            _this3.indexes.delete(mutation.id);
          }
        }
      };

      if (!treeNode) {
        this.removeNodeMutations.push(mutation);
        deepRemoveFromMirror(mutation.id);
      } else if (!parentTreeNode) {
        delete this.tree[treeNode.id];
        this.indexes.delete(treeNode.id);
        deepRemoveFromTreeIndex(treeNode);
      } else {
        delete treeNode.parent;
        delete parentTreeNode.children[treeNode.id];
        this.indexes.delete(mutation.id);
        deepRemoveFromTreeIndex(treeNode);
      }
    }
  }, {
    key: "text",
    value: function text(mutation) {
      var treeNode = this.indexes.get(mutation.id);

      if (treeNode) {
        treeNode.texts.push(mutation);
      } else {
        this.textMutations.push(mutation);
      }
    }
  }, {
    key: "attribute",
    value: function attribute(mutation) {
      var treeNode = this.indexes.get(mutation.id);

      if (treeNode) {
        treeNode.attributes.push(mutation);
      } else {
        this.attributeMutations.push(mutation);
      }
    }
  }, {
    key: "scroll",
    value: function scroll(d) {
      this.scrollMap.set(d.id, d);
    }
  }, {
    key: "input",
    value: function input(d) {
      this.inputMap.set(d.id, d);
    }
  }, {
    key: "flush",
    value: function flush() {
      var _this4 = this;

      var tree = this.tree,
          removeNodeMutations = this.removeNodeMutations,
          textMutations = this.textMutations,
          attributeMutations = this.attributeMutations;
      var batchMutationData = {
        source: _types.IncrementalSource.Mutation,
        removes: removeNodeMutations,
        texts: textMutations,
        attributes: attributeMutations,
        adds: []
      };

      var walk = function walk(treeNode, removed) {
        if (removed) {
          _this4.removeIdSet.add(treeNode.id);
        }

        batchMutationData.texts = batchMutationData.texts.concat(removed ? [] : treeNode.texts).filter(function (m) {
          return !_this4.removeIdSet.has(m.id);
        });
        batchMutationData.attributes = batchMutationData.attributes.concat(removed ? [] : treeNode.attributes).filter(function (m) {
          return !_this4.removeIdSet.has(m.id);
        });

        if (!_this4.removeIdSet.has(treeNode.id) && !_this4.removeIdSet.has(treeNode.mutation.parentId) && !removed) {
          batchMutationData.adds.push(treeNode.mutation);

          if (treeNode.children) {
            Object.values(treeNode.children).forEach(function (n) {
              return walk(n, false);
            });
          }
        } else {
          Object.values(treeNode.children).forEach(function (n) {
            return walk(n, true);
          });
        }
      };

      Object.values(tree).forEach(function (n) {
        return walk(n, false);
      });

      var _iterator = _createForOfIteratorHelper(this.scrollMap.keys()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var id = _step.value;

          if (this.removeIdSet.has(id)) {
            this.scrollMap.delete(id);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(this.inputMap.keys()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _id = _step2.value;

          if (this.removeIdSet.has(_id)) {
            this.inputMap.delete(_id);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var scrollMap = new Map(this.scrollMap);
      var inputMap = new Map(this.inputMap);
      this.reset();
      return {
        mutationData: batchMutationData,
        scrollMap: scrollMap,
        inputMap: inputMap
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this.tree = [];
      this.indexes = new Map();
      this.removeNodeMutations = [];
      this.textMutations = [];
      this.attributeMutations = [];
      this.removeIdSet = new Set();
      this.scrollMap = new Map();
      this.inputMap = new Map();
    }
  }]);
  return TreeIndex;
}();

exports.TreeIndex = TreeIndex;

function queueToResolveTrees(queue) {
  var queueNodeMap = {};

  var putIntoMap = function putIntoMap(m, parent) {
    var nodeInTree = {
      value: m,
      parent: parent,
      children: []
    };
    queueNodeMap[m.node.id] = nodeInTree;
    return nodeInTree;
  };

  var queueNodeTrees = [];

  var _iterator3 = _createForOfIteratorHelper(queue),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var mutation = _step3.value;
      var nextId = mutation.nextId,
          parentId = mutation.parentId;

      if (nextId && nextId in queueNodeMap) {
        var nextInTree = queueNodeMap[nextId];

        if (nextInTree.parent) {
          var idx = nextInTree.parent.children.indexOf(nextInTree);
          nextInTree.parent.children.splice(idx, 0, putIntoMap(mutation, nextInTree.parent));
        } else {
          var _idx = queueNodeTrees.indexOf(nextInTree);

          queueNodeTrees.splice(_idx, 0, putIntoMap(mutation, null));
        }

        continue;
      }

      if (parentId in queueNodeMap) {
        var parentInTree = queueNodeMap[parentId];
        parentInTree.children.push(putIntoMap(mutation, parentInTree));
        continue;
      }

      queueNodeTrees.push(putIntoMap(mutation, null));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return queueNodeTrees;
}

function iterateResolveTree(tree, cb) {
  cb(tree.value);
  /**
   * The resolve tree was designed to reflect the DOM layout,
   * but we need append next sibling first, so we do a reverse
   * loop here.
   */

  for (var i = tree.children.length - 1; i >= 0; i--) {
    iterateResolveTree(tree.children[i], cb);
  }
}

function isIframeINode(node) {
  if ('__sn' in node) {
    return node.__sn.type === _snapshot.NodeType.Element && node.__sn.tagName === 'iframe';
  } // node can be document fragment when using the virtual parent feature


  return false;
}

function getBaseDimension(node, rootIframe) {
  var _node$ownerDocument, _node$ownerDocument$d;

  var frameElement = (_node$ownerDocument = node.ownerDocument) === null || _node$ownerDocument === void 0 ? void 0 : (_node$ownerDocument$d = _node$ownerDocument.defaultView) === null || _node$ownerDocument$d === void 0 ? void 0 : _node$ownerDocument$d.frameElement;

  if (!frameElement || frameElement === rootIframe) {
    return {
      x: 0,
      y: 0,
      relativeScale: 1,
      absoluteScale: 1
    };
  }

  var frameDimension = frameElement.getBoundingClientRect();
  var frameBaseDimension = getBaseDimension(frameElement, rootIframe); // the iframe element may have a scale transform

  var relativeScale = frameDimension.height / frameElement.clientHeight;
  return {
    x: frameDimension.x * frameBaseDimension.relativeScale + frameBaseDimension.x,
    y: frameDimension.y * frameBaseDimension.relativeScale + frameBaseDimension.y,
    relativeScale: relativeScale,
    absoluteScale: frameBaseDimension.absoluteScale * relativeScale
  };
}

function hasShadowRoot(n) {
  return Boolean(n === null || n === void 0 ? void 0 : n.shadowRoot);
}
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","./types":"../src/rrweb/types.ts","./snapshot":"../src/rrweb/snapshot/index.ts"}],"../src/rrweb/record/mutation.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _snapshot = require("../snapshot");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isNodeInLinkedList(n) {
  return '__ln' in n;
}

var DoubleLinkedList = /*#__PURE__*/function () {
  function DoubleLinkedList() {
    (0, _classCallCheck2.default)(this, DoubleLinkedList);
    this.length = 0;
    this.head = null;
  }

  (0, _createClass2.default)(DoubleLinkedList, [{
    key: "get",
    value: function get(position) {
      if (position >= this.length) {
        throw new Error('Position outside of list range');
      }

      var current = this.head;

      for (var index = 0; index < position; index++) {
        var _current;

        current = ((_current = current) === null || _current === void 0 ? void 0 : _current.next) || null;
      }

      return current;
    }
  }, {
    key: "addNode",
    value: function addNode(n) {
      var node = {
        value: n,
        previous: null,
        next: null
      };
      n.__ln = node;

      if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
        var current = n.previousSibling.__ln.next;
        node.next = current;
        node.previous = n.previousSibling.__ln;
        n.previousSibling.__ln.next = node;

        if (current) {
          current.previous = node;
        }
      } else if (n.nextSibling && isNodeInLinkedList(n.nextSibling) && n.nextSibling.__ln.previous) {
        var _current2 = n.nextSibling.__ln.previous;
        node.previous = _current2;
        node.next = n.nextSibling.__ln;
        n.nextSibling.__ln.previous = node;

        if (_current2) {
          _current2.next = node;
        }
      } else {
        if (this.head) {
          this.head.previous = node;
        }

        node.next = this.head;
        this.head = node;
      }

      this.length++;
    }
  }, {
    key: "removeNode",
    value: function removeNode(n) {
      var current = n.__ln;

      if (!this.head) {
        return;
      }

      if (!current.previous) {
        this.head = current.next;

        if (this.head) {
          this.head.previous = null;
        }
      } else {
        current.previous.next = current.next;

        if (current.next) {
          current.next.previous = current.previous;
        }
      }

      if (n.__ln) {
        delete n.__ln;
      }

      this.length--;
    }
  }]);
  return DoubleLinkedList;
}();

var moveKey = function moveKey(id, parentId) {
  return "".concat(id, "@").concat(parentId);
};

function isINode(n) {
  return '__sn' in n;
}
/**
 * controls behaviour of a MutationObserver
 */


var MutationBuffer = /*#__PURE__*/function () {
  function MutationBuffer() {
    var _this = this;

    (0, _classCallCheck2.default)(this, MutationBuffer);
    this.frozen = false;
    this.locked = false;
    this.texts = [];
    this.attributes = [];
    this.removes = [];
    this.mapRemoves = [];
    this.movedMap = {};
    /**
     * the browser MutationObserver emits multiple mutations after
     * a delay for performance reasons, making tracing added nodes hard
     * in our `processMutations` callback function.
     * For example, if we append an element el_1 into body, and then append
     * another element el_2 into el_1, these two mutations may be passed to the
     * callback function together when the two operations were done.
     * Generally we need to trace child nodes of newly added nodes, but in this
     * case if we count el_2 as el_1's child node in the first mutation record,
     * then we will count el_2 again in the second mutation record which was
     * duplicated.
     * To avoid of duplicate counting added nodes, we use a Set to store
     * added nodes and its child nodes during iterate mutation records. Then
     * collect added nodes from the Set which have no duplicate copy. But
     * this also causes newly added nodes will not be serialized with id ASAP,
     * which means all the id related calculation should be lazy too.
     */

    this.addedSet = new Set();
    this.movedSet = new Set();
    this.droppedSet = new Set();

    this.processMutations = function (mutations) {
      mutations.forEach(_this.processMutation);

      _this.emit();
    };

    this.emit = function () {
      if (_this.frozen || _this.locked) {
        return;
      } // delay any modification of the mirror until this function
      // so that the mirror for takeFullSnapshot doesn't get mutated while it's event is being processed


      var adds = [];
      /**
       * Sometimes child node may be pushed before its newly added
       * parent, so we init a queue to store these nodes.
       */

      var addList = new DoubleLinkedList();

      var getNextId = function getNextId(n) {
        var ns = n;
        var nextId = _snapshot.IGNORED_NODE; // slimDOM: ignored

        while (nextId === _snapshot.IGNORED_NODE) {
          ns = ns && ns.nextSibling;
          nextId = ns && _this.mirror.getId(ns);
        }

        if (nextId === -1 && (0, _utils.isBlocked)(n.nextSibling, _this.blockClass)) {
          nextId = null;
        }

        return nextId;
      };

      var pushAdd = function pushAdd(n) {
        var _n$getRootNode;

        var shadowHost = n.getRootNode ? (_n$getRootNode = n.getRootNode()) === null || _n$getRootNode === void 0 ? void 0 : _n$getRootNode.host : null;
        var notInDoc = !_this.doc.contains(n) && !_this.doc.contains(shadowHost);

        if (!n.parentNode || notInDoc) {
          return;
        }

        var parentId = (0, _snapshot.isShadowRoot)(n.parentNode) ? _this.mirror.getId(shadowHost) : _this.mirror.getId(n.parentNode);
        var nextId = getNextId(n);

        if (parentId === -1 || nextId === -1) {
          return addList.addNode(n);
        }

        var sn = (0, _snapshot.serializeNodeWithId)(n, {
          doc: _this.doc,
          map: _this.mirror.map,
          blockClass: _this.blockClass,
          blockSelector: _this.blockSelector,
          maskTextClass: _this.maskTextClass,
          maskTextSelector: _this.maskTextSelector,
          skipChild: true,
          inlineStylesheet: _this.inlineStylesheet,
          maskInputOptions: _this.maskInputOptions,
          maskTextFn: _this.maskTextFn,
          slimDOMOptions: _this.slimDOMOptions,
          recordCanvas: _this.recordCanvas,
          onSerialize: function onSerialize(currentN) {
            if ((0, _utils.isIframeINode)(currentN)) {
              _this.iframeManager.addIframe(currentN);
            }

            if ((0, _utils.hasShadowRoot)(n)) {
              _this.shadowDomManager.addShadowRoot(n.shadowRoot, document);
            }
          },
          onIframeLoad: function onIframeLoad(iframe, childSn) {
            _this.iframeManager.attachIframe(iframe, childSn);
          }
        });

        if (sn) {
          adds.push({
            parentId: parentId,
            nextId: nextId,
            node: sn
          });
        }
      };

      while (_this.mapRemoves.length) {
        _this.mirror.removeNodeFromMap(_this.mapRemoves.shift());
      }

      var _iterator = _createForOfIteratorHelper(_this.movedSet),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var n = _step.value;

          if (isParentRemoved(_this.removes, n, _this.mirror) && !_this.movedSet.has(n.parentNode)) {
            continue;
          }

          pushAdd(n);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(_this.addedSet),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _n = _step2.value;

          if (!isAncestorInSet(_this.droppedSet, _n) && !isParentRemoved(_this.removes, _n, _this.mirror)) {
            pushAdd(_n);
          } else if (isAncestorInSet(_this.movedSet, _n)) {
            pushAdd(_n);
          } else {
            _this.droppedSet.add(_n);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var candidate = null;

      while (addList.length) {
        var node = null;

        if (candidate) {
          var parentId = _this.mirror.getId(candidate.value.parentNode);

          var nextId = getNextId(candidate.value);

          if (parentId !== -1 && nextId !== -1) {
            node = candidate;
          }
        }

        if (!node) {
          for (var index = addList.length - 1; index >= 0; index--) {
            var _node = addList.get(index);

            var _parentId = _this.mirror.getId(_node.value.parentNode);

            var _nextId = getNextId(_node.value);

            if (_parentId !== -1 && _nextId !== -1) {
              node = _node;
              break;
            }
          }
        }

        if (!node) {
          /**
           * If all nodes in queue could not find a serialized parent,
           * it may be a bug or corner case. We need to escape the
           * dead while loop at once.
           */
          while (addList.head) {
            addList.removeNode(addList.head.value);
          }

          break;
        }

        candidate = node.previous;
        addList.removeNode(node.value);
        pushAdd(node.value);
      }

      var payload = {
        texts: _this.texts.map(function (text) {
          return {
            id: _this.mirror.getId(text.node),
            value: text.value
          };
        }) // text mutation's id was not in the mirror map means the target node has been removed
        .filter(function (text) {
          return _this.mirror.has(text.id);
        }),
        attributes: _this.attributes.map(function (attribute) {
          return {
            id: _this.mirror.getId(attribute.node),
            attributes: attribute.attributes
          };
        }) // attribute mutation's id was not in the mirror map means the target node has been removed
        .filter(function (attribute) {
          return _this.mirror.has(attribute.id);
        }),
        removes: _this.removes,
        adds: adds
      }; // payload may be empty if the mutations happened in some blocked elements

      if (!payload.texts.length && !payload.attributes.length && !payload.removes.length && !payload.adds.length) {
        return;
      } // reset


      _this.texts = [];
      _this.attributes = [];
      _this.removes = [];
      _this.addedSet = new Set();
      _this.movedSet = new Set();
      _this.droppedSet = new Set();
      _this.movedMap = {};

      _this.emissionCallback(payload);
    };

    this.processMutation = function (m) {
      // console.log({ m });
      if ((0, _utils.isIgnored)(m.target)) {
        return;
      }

      switch (m.type) {
        case 'characterData':
          {
            var value = m.target.textContent;

            if (!(0, _utils.isBlocked)(m.target, _this.blockClass) && value !== m.oldValue) {
              _this.texts.push({
                value: (0, _snapshot.needMaskingText)(m.target, _this.maskTextClass, _this.maskTextSelector) && value ? _this.maskTextFn ? _this.maskTextFn(value) : value.replace(/[\S]/g, '*') : value,
                node: m.target
              });
            }

            break;
          }

        case 'attributes':
          {
            var _value = m.target.getAttribute(m.attributeName);

            if ((0, _utils.isBlocked)(m.target, _this.blockClass) || _value === m.oldValue) {
              return;
            }

            var item = _this.attributes.find(function (a) {
              return a.node === m.target;
            });

            if (!item) {
              item = {
                node: m.target,
                attributes: {}
              };

              _this.attributes.push(item);
            } // overwrite attribute if the mutations was triggered in same time


            item.attributes[m.attributeName] = (0, _snapshot.transformAttribute)(_this.doc, m.target.tagName, m.attributeName, _value);
            break;
          }

        case 'childList':
          {
            m.addedNodes.forEach(function (n) {
              return _this.genAdds(n, m.target);
            });
            m.removedNodes.forEach(function (n) {
              var nodeId = _this.mirror.getId(n);

              var parentId = (0, _snapshot.isShadowRoot)(m.target) ? _this.mirror.getId(m.target.host) : _this.mirror.getId(m.target);

              if ((0, _utils.isBlocked)(n, _this.blockClass) || (0, _utils.isBlocked)(m.target, _this.blockClass) || (0, _utils.isIgnored)(n)) {
                return;
              } // removed node has not been serialized yet, just remove it from the Set


              if (_this.addedSet.has(n)) {
                deepDelete(_this.addedSet, n);

                _this.droppedSet.add(n);
              } else if (_this.addedSet.has(m.target) && nodeId === -1) {
                /**
                 * If target was newly added and removed child node was
                 * not serialized, it means the child node has been removed
                 * before callback fired, so we can ignore it because
                 * newly added node will be serialized without child nodes.
                 * TODO: verify this
                 */
              } else if ((0, _utils.isAncestorRemoved)(m.target, _this.mirror)) {
                /**
                 * If parent id was not in the mirror map any more, it
                 * means the parent node has already been removed. So
                 * the node is also removed which we do not need to track
                 * and replay.
                 */
              } else if (_this.movedSet.has(n) && _this.movedMap[moveKey(nodeId, parentId)]) {
                deepDelete(_this.movedSet, n);
              } else {
                _this.removes.push({
                  parentId: parentId,
                  id: nodeId,
                  isShadow: (0, _snapshot.isShadowRoot)(m.target) ? true : undefined
                });
              }

              _this.mapRemoves.push(n);
            });
            break;
          }

        default:
          break;
      }
    };

    this.genAdds = function (n, target) {
      if ((0, _utils.isBlocked)(n, _this.blockClass)) {
        return;
      }

      if (target && (0, _utils.isBlocked)(target, _this.blockClass)) {
        return;
      }

      if (isINode(n)) {
        if ((0, _utils.isIgnored)(n)) {
          return;
        }

        _this.movedSet.add(n);

        var targetId = null;

        if (target && isINode(target)) {
          targetId = target.__sn.id;
        }

        if (targetId) {
          _this.movedMap[moveKey(n.__sn.id, targetId)] = true;
        }
      } else {
        _this.addedSet.add(n);

        _this.droppedSet.delete(n);
      }

      n.childNodes.forEach(function (childN) {
        return _this.genAdds(childN);
      });
    };
  }

  (0, _createClass2.default)(MutationBuffer, [{
    key: "init",
    value: function init(cb, blockClass, blockSelector, maskTextClass, maskTextSelector, inlineStylesheet, maskInputOptions, maskTextFn, recordCanvas, slimDOMOptions, doc, mirror, iframeManager, shadowDomManager) {
      this.blockClass = blockClass;
      this.blockSelector = blockSelector;
      this.maskTextClass = maskTextClass;
      this.maskTextSelector = maskTextSelector;
      this.inlineStylesheet = inlineStylesheet;
      this.maskInputOptions = maskInputOptions;
      this.maskTextFn = maskTextFn;
      this.recordCanvas = recordCanvas;
      this.slimDOMOptions = slimDOMOptions;
      this.emissionCallback = cb;
      this.doc = doc;
      this.mirror = mirror;
      this.iframeManager = iframeManager;
      this.shadowDomManager = shadowDomManager;
    }
  }, {
    key: "freeze",
    value: function freeze() {
      this.frozen = true;
    }
  }, {
    key: "unfreeze",
    value: function unfreeze() {
      this.frozen = false;
      this.emit();
    }
  }, {
    key: "isFrozen",
    value: function isFrozen() {
      return this.frozen;
    }
  }, {
    key: "lock",
    value: function lock() {
      this.locked = true;
    }
  }, {
    key: "unlock",
    value: function unlock() {
      this.locked = false;
      this.emit();
    }
  }]);
  return MutationBuffer;
}();
/**
 * Some utils to handle the mutation observer DOM records.
 * It should be more clear to extend the native data structure
 * like Set and Map, but currently Typescript does not support
 * that.
 */


exports.default = MutationBuffer;

function deepDelete(addsSet, n) {
  addsSet.delete(n);
  n.childNodes.forEach(function (childN) {
    return deepDelete(addsSet, childN);
  });
}

function isParentRemoved(removes, n, mirror) {
  var parentNode = n.parentNode;

  if (!parentNode) {
    return false;
  }

  var parentId = mirror.getId(parentNode);

  if (removes.some(function (r) {
    return r.id === parentId;
  })) {
    return true;
  }

  return isParentRemoved(removes, parentNode, mirror);
}

function isAncestorInSet(set, n) {
  var parentNode = n.parentNode;

  if (!parentNode) {
    return false;
  }

  if (set.has(parentNode)) {
    return true;
  }

  return isAncestorInSet(set, parentNode);
}
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","../snapshot":"../src/rrweb/snapshot/index.ts","../utils":"../src/rrweb/utils.ts"}],"../src/rrweb/record/stringify.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = stringify;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tslint:disable:no-any no-bitwise forin

/**
 * this file is used to serialize log message to string
 *
 */

/**
 * transfer the node path in Event to string
 * @param node the first node in a node path array
 */
function pathToSelector(node) {
  if (!node || !node.outerHTML) {
    return '';
  }

  var path = '';

  while (node.parentElement) {
    var name = node.localName;

    if (!name) {
      break;
    }

    name = name.toLowerCase();
    var parent = node.parentElement;
    var domSiblings = [];

    if (parent.children && parent.children.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (var i = 0; i < parent.children.length; i++) {
        var sibling = parent.children[i];

        if (sibling.localName && sibling.localName.toLowerCase) {
          if (sibling.localName.toLowerCase() === name) {
            domSiblings.push(sibling);
          }
        }
      }
    }

    if (domSiblings.length > 1) {
      name += ':eq(' + domSiblings.indexOf(node) + ')';
    }

    path = name + (path ? '>' + path : '');
    node = parent;
  }

  return path;
}
/**
 * stringify any js object
 * @param obj the object to stringify
 */


function stringify(obj, stringifyOptions) {
  var options = {
    numOfKeysLimit: 50
  };
  Object.assign(options, stringifyOptions);
  var stack = [];
  var keys = [];
  return JSON.stringify(obj, function (key, value) {
    /**
     * forked from https://github.com/moll/json-stringify-safe/blob/master/stringify.js
     * to deCycle the object
     */
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);

      if (~stack.indexOf(value)) {
        if (stack[0] === value) {
          value = '[Circular ~]';
        } else {
          value = '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
        }
      }
    } else {
      stack.push(value);
    }
    /* END of the FORK */


    if (value === null || value === undefined) {
      return value;
    }

    if (shouldToString(value)) {
      return toString(value);
    }

    if (value instanceof Event) {
      var eventResult = {};

      for (var eventKey in value) {
        var eventValue = value[eventKey];

        if (Array.isArray(eventValue)) {
          eventResult[eventKey] = pathToSelector(eventValue.length ? eventValue[0] : null);
        } else {
          eventResult[eventKey] = eventValue;
        }
      }

      return eventResult;
    } else if (value instanceof Node) {
      if (value instanceof HTMLElement) {
        return value ? value.outerHTML : '';
      }

      return value.nodeName;
    }

    return value;
  });
  /**
   * whether we should call toString function of this object
   */

  function shouldToString(_obj) {
    if ((0, _typeof2.default)(_obj) === 'object' && Object.keys(_obj).length > options.numOfKeysLimit) {
      return true;
    }

    if (typeof _obj === 'function') {
      return true;
    }

    return false;
  }
  /**
   * limit the toString() result according to option
   */


  function toString(_obj) {
    var str = _obj.toString();

    if (options.stringLengthLimit && str.length > options.stringLengthLimit) {
      str = "".concat(str.slice(0, options.stringLengthLimit), "...");
    }

    return str;
  }
}
},{"@babel/runtime/helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js"}],"../src/rrweb/record/error-stack-parser.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorStackParser = exports.StackFrame = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class StackFrame is a fork of https://github.com/stacktracejs/stackframe/blob/master/stackframe.js
 * I fork it because:
 * 1. There are some build issues when importing this package.
 * 2. Rewrites into typescript give us a better type interface.
 * 3. StackFrame contains some functions we don't need.
 */
var StackFrame = /*#__PURE__*/function () {
  function StackFrame(obj) {
    (0, _classCallCheck2.default)(this, StackFrame);
    this.fileName = obj.fileName || '';
    this.functionName = obj.functionName || '';
    this.lineNumber = obj.lineNumber;
    this.columnNumber = obj.columnNumber;
  }

  (0, _createClass2.default)(StackFrame, [{
    key: "toString",
    value: function toString() {
      var lineNumber = this.lineNumber || '';
      var columnNumber = this.columnNumber || '';

      if (this.functionName) {
        return this.functionName + ' (' + this.fileName + ':' + lineNumber + ':' + columnNumber + ')';
      }

      return this.fileName + ':' + lineNumber + ':' + columnNumber;
    }
  }]);
  return StackFrame;
}();
/**
 * ErrorStackParser is a fork of https://github.com/stacktracejs/error-stack-parser/blob/master/error-stack-parser.js
 * I fork it because:
 * 1. There are some build issues when importing this package.
 * 2. Rewrites into typescript give us a better type interface.
 */


exports.StackFrame = StackFrame;
var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
var ErrorStackParser = {
  /**
   * Given an Error object, extract the most information from it.
   *
   * @param {Error} error object
   * @return {Array} of StackFrames
   */
  parse: function parse(error) {
    if ( // @ts-ignore
    typeof error.stacktrace !== 'undefined' || // @ts-ignore
    typeof error['opera#sourceloc'] !== 'undefined') {
      return this.parseOpera(error);
    } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
      return this.parseV8OrIE(error);
    } else if (error.stack) {
      return this.parseFFOrSafari(error);
    } else {
      throw new Error('Cannot parse given Error object');
    }
  },
  // Separate line and column numbers from a string of the form: (URI:Line:Column)
  extractLocation: function extractLocation(urlLike) {
    // Fail-fast but return locations like "(native)"
    if (urlLike.indexOf(':') === -1) {
      return [urlLike];
    }

    var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
    var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
    if (!parts) throw new Error("Cannot parse given url: ".concat(urlLike));
    return [parts[1], parts[2] || undefined, parts[3] || undefined];
  },
  parseV8OrIE: function parseV8OrIE(error) {
    var filtered = error.stack.split('\n').filter(function (line) {
      return !!line.match(CHROME_IE_STACK_REGEXP);
    }, this);
    return filtered.map(function (line) {
      if (line.indexOf('(eval ') > -1) {
        // Throw away eval information until we implement stacktrace.js/stackframe#8
        line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
      }

      var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '('); // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
      // case it has spaces in it, as the string is split on \s+ later on

      var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/); // remove the parenthesized location from the line, if it was matched

      sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;
      var tokens = sanitizedLine.split(/\s+/).slice(1); // if a location was matched, pass it to extractLocation() otherwise pop the last token

      var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
      var functionName = tokens.join(' ') || undefined;
      var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
      return new StackFrame({
        functionName: functionName,
        fileName: fileName,
        lineNumber: locationParts[1],
        columnNumber: locationParts[2]
      });
    }, this);
  },
  parseFFOrSafari: function parseFFOrSafari(error) {
    var filtered = error.stack.split('\n').filter(function (line) {
      return !line.match(SAFARI_NATIVE_CODE_REGEXP);
    }, this);
    return filtered.map(function (line) {
      // Throw away eval information until we implement stacktrace.js/stackframe#8
      if (line.indexOf(' > eval') > -1) {
        line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
      }

      if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
        // Safari eval frames only have function names and nothing else
        return new StackFrame({
          functionName: line
        });
      } else {
        var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
        var matches = line.match(functionNameRegex);
        var functionName = matches && matches[1] ? matches[1] : undefined;
        var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
        return new StackFrame({
          functionName: functionName,
          fileName: locationParts[0],
          lineNumber: locationParts[1],
          columnNumber: locationParts[2]
        });
      }
    }, this);
  },
  parseOpera: function parseOpera(e) {
    if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
      return this.parseOpera9(e);
    } else if (!e.stack) {
      return this.parseOpera10(e);
    } else {
      return this.parseOpera11(e);
    }
  },
  parseOpera9: function parseOpera9(e) {
    var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
    var lines = e.message.split('\n');
    var result = [];

    for (var i = 2, len = lines.length; i < len; i += 2) {
      var match = lineRE.exec(lines[i]);

      if (match) {
        result.push(new StackFrame({
          fileName: match[2],
          lineNumber: parseFloat(match[1])
        }));
      }
    }

    return result;
  },
  parseOpera10: function parseOpera10(e) {
    var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
    var lines = e.stacktrace.split('\n');
    var result = [];

    for (var i = 0, len = lines.length; i < len; i += 2) {
      var match = lineRE.exec(lines[i]);

      if (match) {
        result.push(new StackFrame({
          functionName: match[3] || undefined,
          fileName: match[2],
          lineNumber: parseFloat(match[1])
        }));
      }
    }

    return result;
  },
  // Opera 10.65+ Error.stack very similar to FF/Safari
  parseOpera11: function parseOpera11(error) {
    var filtered = error.stack.split('\n').filter(function (line) {
      return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
    }, this);
    return filtered.map(function (line) {
      var tokens = line.split('@');
      var locationParts = this.extractLocation(tokens.pop());
      var functionCall = tokens.shift() || '';
      var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^)]*\)/g, '') || undefined;
      return new StackFrame({
        functionName: functionName,
        fileName: locationParts[0],
        lineNumber: locationParts[1],
        columnNumber: locationParts[2]
      });
    }, this);
  }
};
exports.ErrorStackParser = ErrorStackParser;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js"}],"../src/rrweb/record/observer.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initMutationObserver = initMutationObserver;
exports.initObservers = initObservers;
exports.INPUT_TAGS = exports.mutationBuffers = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils");

var _types = require("../types");

var _mutation = _interopRequireDefault(require("./mutation"));

var _stringify = require("./stringify");

var _errorStackParser = require("./error-stack-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mutationBuffers = [];
exports.mutationBuffers = mutationBuffers;

function initMutationObserver(cb, doc, blockClass, blockSelector, maskTextClass, maskTextSelector, inlineStylesheet, maskInputOptions, maskTextFn, recordCanvas, slimDOMOptions, mirror, iframeManager, shadowDomManager, rootEl) {
  var _window, _window$Zone, _window$Zone$__symbol;

  var mutationBuffer = new _mutation.default();
  mutationBuffers.push(mutationBuffer); // see mutation.ts for details

  mutationBuffer.init(cb, blockClass, blockSelector, maskTextClass, maskTextSelector, inlineStylesheet, maskInputOptions, maskTextFn, recordCanvas, slimDOMOptions, doc, mirror, iframeManager, shadowDomManager);
  var mutationObserverCtor = window.MutationObserver ||
  /**
   * Some websites may disable MutationObserver by removing it from the window object.
   * If someone is using rrweb to build a browser extention or things like it, they
   * could not change the website's code but can have an opportunity to inject some
   * code before the website executing its JS logic.
   * Then they can do this to store the native MutationObserver:
   * window.__rrMutationObserver = MutationObserver
   */
  window.__rrMutationObserver;
  var angularZoneSymbol = (_window = window) === null || _window === void 0 ? void 0 : (_window$Zone = _window.Zone) === null || _window$Zone === void 0 ? void 0 : (_window$Zone$__symbol = _window$Zone.__symbol__) === null || _window$Zone$__symbol === void 0 ? void 0 : _window$Zone$__symbol.call(_window$Zone, 'MutationObserver');

  if (angularZoneSymbol && window[angularZoneSymbol]) {
    mutationObserverCtor = window[angularZoneSymbol];
  }

  var observer = new mutationObserverCtor(mutationBuffer.processMutations.bind(mutationBuffer));
  observer.observe(rootEl, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });
  return observer;
}

function initMoveObserver(cb, sampling, doc, mirror) {
  if (sampling.mousemove === false) {
    return function () {};
  }

  var threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
  var callbackThreshold = typeof sampling.mousemoveCallback === 'number' ? sampling.mousemoveCallback : 500;
  var positions = [];
  var timeBaseline;
  var wrappedCb = (0, _utils.throttle)(function (source) {
    var totalOffset = Date.now() - timeBaseline;
    cb(positions.map(function (p) {
      p.timeOffset -= totalOffset;
      return p;
    }), source);
    positions = [];
    timeBaseline = null;
  }, callbackThreshold);
  var updatePosition = (0, _utils.throttle)(function (evt) {
    var target = evt.target;

    var _ref = (0, _utils.isTouchEvent)(evt) ? evt.changedTouches[0] : evt,
        clientX = _ref.clientX,
        clientY = _ref.clientY;

    if (!timeBaseline) {
      timeBaseline = Date.now();
    }

    positions.push({
      x: clientX,
      y: clientY,
      id: mirror.getId(target),
      timeOffset: Date.now() - timeBaseline
    });
    wrappedCb(evt instanceof MouseEvent ? _types.IncrementalSource.MouseMove : evt instanceof DragEvent ? _types.IncrementalSource.Drag : _types.IncrementalSource.TouchMove);
  }, threshold, {
    trailing: false
  });
  var handlers = [(0, _utils.on)('mousemove', updatePosition, doc), (0, _utils.on)('touchmove', updatePosition, doc), (0, _utils.on)('drag', updatePosition, doc)];
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initMouseInteractionObserver(cb, doc, mirror, blockClass, sampling) {
  if (sampling.mouseInteraction === false) {
    return function () {};
  }

  var disableMap = sampling.mouseInteraction === true || sampling.mouseInteraction === undefined ? {} : sampling.mouseInteraction;
  var handlers = [];

  var getHandler = function getHandler(eventKey) {
    return function (event) {
      if ((0, _utils.isBlocked)(event.target, blockClass)) {
        return;
      }

      var e = (0, _utils.isTouchEvent)(event) ? event.changedTouches[0] : event;

      if (!e) {
        return;
      }

      var id = mirror.getId(event.target);
      var clientX = e.clientX,
          clientY = e.clientY;
      cb({
        type: _types.MouseInteractions[eventKey],
        id: id,
        x: clientX,
        y: clientY
      });
    };
  };

  Object.keys(_types.MouseInteractions).filter(function (key) {
    return Number.isNaN(Number(key)) && !key.endsWith('_Departed') && disableMap[key] !== false;
  }).forEach(function (eventKey) {
    var eventName = eventKey.toLowerCase();
    var handler = getHandler(eventKey);
    handlers.push((0, _utils.on)(eventName, handler, doc));
  });
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initScrollObserver(cb, doc, mirror, blockClass, sampling) {
  var updatePosition = (0, _utils.throttle)(function (evt) {
    if (!evt.target || (0, _utils.isBlocked)(evt.target, blockClass)) {
      return;
    }

    var id = mirror.getId(evt.target);

    if (evt.target === doc) {
      var scrollEl = doc.scrollingElement || doc.documentElement;
      cb({
        id: id,
        x: scrollEl.scrollLeft,
        y: scrollEl.scrollTop
      });
    } else {
      cb({
        id: id,
        x: evt.target.scrollLeft,
        y: evt.target.scrollTop
      });
    }
  }, sampling.scroll || 100);
  return (0, _utils.on)('scroll', updatePosition);
}

function initViewportResizeObserver(cb) {
  var lastH = -1;
  var lastW = -1;
  var updateDimension = (0, _utils.throttle)(function () {
    var height = (0, _utils.getWindowHeight)();
    var width = (0, _utils.getWindowWidth)();

    if (lastH !== height || lastW !== width) {
      cb({
        width: Number(width),
        height: Number(height)
      });
      lastH = height;
      lastW = width;
    }
  }, 200);
  return (0, _utils.on)('resize', updateDimension, window);
}

var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
exports.INPUT_TAGS = INPUT_TAGS;
var lastInputValueMap = new WeakMap();

function initInputObserver(cb, doc, mirror, blockClass, ignoreClass, maskInputOptions, maskInputFn, sampling) {
  function eventHandler(event) {
    var target = event.target;

    if (!target || !target.tagName || INPUT_TAGS.indexOf(target.tagName) < 0 || (0, _utils.isBlocked)(target, blockClass)) {
      return;
    }

    var type = target.type;

    if (type === 'password' || target.classList.contains(ignoreClass)) {
      return;
    }

    var text = target.value;
    var isChecked = false;

    if (type === 'radio' || type === 'checkbox') {
      isChecked = target.checked;
    } else if (maskInputOptions[target.tagName.toLowerCase()] || maskInputOptions[type]) {
      if (maskInputFn) {
        text = maskInputFn(text);
      } else {
        text = '*'.repeat(text.length);
      }
    }

    cbWithDedup(target, {
      text: text,
      isChecked: isChecked
    }); // if a radio was checked
    // the other radios with the same name attribute will be unchecked.

    var name = target.name;

    if (type === 'radio' && name && isChecked) {
      doc.querySelectorAll("input[type=\"radio\"][name=\"".concat(name, "\"]")).forEach(function (el) {
        if (el !== target) {
          cbWithDedup(el, {
            text: el.value,
            isChecked: !isChecked
          });
        }
      });
    }
  }

  function cbWithDedup(target, v) {
    var lastInputValue = lastInputValueMap.get(target);

    if (!lastInputValue || lastInputValue.text !== v.text || lastInputValue.isChecked !== v.isChecked) {
      lastInputValueMap.set(target, v);
      var id = mirror.getId(target);
      cb(_objectSpread(_objectSpread({}, v), {}, {
        id: id
      }));
    }
  }

  var events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
  var handlers = events.map(function (eventName) {
    return (0, _utils.on)(eventName, eventHandler, doc);
  });
  var propertyDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
  var hookProperties = [[HTMLInputElement.prototype, 'value'], [HTMLInputElement.prototype, 'checked'], [HTMLSelectElement.prototype, 'value'], [HTMLTextAreaElement.prototype, 'value'], // Some UI library use selectedIndex to set select value
  [HTMLSelectElement.prototype, 'selectedIndex']];

  if (propertyDescriptor && propertyDescriptor.set) {
    handlers.push.apply(handlers, (0, _toConsumableArray2.default)(hookProperties.map(function (p) {
      return (0, _utils.hookSetter)(p[0], p[1], {
        set: function set() {
          // mock to a normal event
          eventHandler({
            target: this
          });
        }
      });
    })));
  }

  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initStyleSheetObserver(cb, mirror) {
  var insertRule = CSSStyleSheet.prototype.insertRule;

  CSSStyleSheet.prototype.insertRule = function (rule, index) {
    var id = mirror.getId(this.ownerNode);

    if (id !== -1) {
      cb({
        id: id,
        adds: [{
          rule: rule,
          index: index
        }]
      });
    }

    return insertRule.apply(this, arguments);
  };

  var deleteRule = CSSStyleSheet.prototype.deleteRule;

  CSSStyleSheet.prototype.deleteRule = function (index) {
    var id = mirror.getId(this.ownerNode);

    if (id !== -1) {
      cb({
        id: id,
        removes: [{
          index: index
        }]
      });
    }

    return deleteRule.apply(this, arguments);
  };

  return function () {
    CSSStyleSheet.prototype.insertRule = insertRule;
    CSSStyleSheet.prototype.deleteRule = deleteRule;
  };
}

function initMediaInteractionObserver(mediaInteractionCb, blockClass, mirror) {
  var handler = function handler(type) {
    return function (event) {
      var target = event.target;

      if (!target || (0, _utils.isBlocked)(target, blockClass)) {
        return;
      }

      mediaInteractionCb({
        type: type === 'play' ? _types.MediaInteractions.Play : _types.MediaInteractions.Pause,
        id: mirror.getId(target)
      });
    };
  };

  var handlers = [(0, _utils.on)('play', handler('play')), (0, _utils.on)('pause', handler('pause'))];
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initCanvasMutationObserver(cb, blockClass, mirror) {
  var props = Object.getOwnPropertyNames(CanvasRenderingContext2D.prototype);
  var handlers = [];

  var _iterator = _createForOfIteratorHelper(props),
      _step;

  try {
    var _loop = function _loop() {
      var prop = _step.value;

      try {
        if (typeof CanvasRenderingContext2D.prototype[prop] !== 'function') {
          return "continue";
        }

        var restoreHandler = (0, _utils.patch)(CanvasRenderingContext2D.prototype, prop, function (original) {
          return function () {
            var _this = this;

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            if (!(0, _utils.isBlocked)(this.canvas, blockClass)) {
              setTimeout(function () {
                var recordArgs = [].concat(args);

                if (prop === 'drawImage') {
                  if (recordArgs[0] && recordArgs[0] instanceof HTMLCanvasElement) {
                    recordArgs[0] = recordArgs[0].toDataURL();
                  }
                }

                cb({
                  id: mirror.getId(_this.canvas),
                  property: prop,
                  args: recordArgs
                });
              }, 0);
            }

            return original.apply(this, args);
          };
        });
        handlers.push(restoreHandler);
      } catch (_unused) {
        var hookHandler = (0, _utils.hookSetter)(CanvasRenderingContext2D.prototype, prop, {
          set: function set(v) {
            cb({
              id: mirror.getId(this.canvas),
              property: prop,
              args: [v],
              setter: true
            });
          }
        });
        handlers.push(hookHandler);
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initFontObserver(cb) {
  var handlers = [];
  var fontMap = new WeakMap();
  var originalFontFace = FontFace; // tslint:disable-next-line: no-any

  window.FontFace = function FontFace(family, source, descriptors) {
    var fontFace = new originalFontFace(family, source, descriptors);
    fontMap.set(fontFace, {
      family: family,
      buffer: typeof source !== 'string',
      descriptors: descriptors,
      fontSource: typeof source === 'string' ? source : // tslint:disable-next-line: no-any
      JSON.stringify(Array.from(new Uint8Array(source)))
    });
    return fontFace;
  };

  var restoreHandler = (0, _utils.patch)(document.fonts, 'add', function (original) {
    return function (fontFace) {
      setTimeout(function () {
        var p = fontMap.get(fontFace);

        if (p) {
          cb(p);
          fontMap.delete(fontFace);
        }
      }, 0);
      return original.apply(this, [fontFace]);
    };
  });
  handlers.push(function () {
    // tslint:disable-next-line: no-any
    window.FonFace = originalFontFace;
  });
  handlers.push(restoreHandler);
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initLogObserver(cb, logOptions) {
  var _this2 = this;

  var logger = logOptions.logger;

  if (!logger) {
    return function () {};
  }

  var logCount = 0;
  var cancelHandlers = []; // add listener to thrown errors

  if (logOptions.level.includes('error')) {
    if (window) {
      var originalOnError = window.onerror;

      window.onerror = function (msg, file, line, col, error) {
        if (originalOnError) {
          originalOnError.apply(_this2, [msg, file, line, col, error]);
        }

        var trace = _errorStackParser.ErrorStackParser.parse(error).map(function (stackFrame) {
          return stackFrame.toString();
        });

        var payload = [(0, _stringify.stringify)(msg, logOptions.stringifyOptions)];
        cb({
          level: 'error',
          trace: trace,
          payload: payload
        });
      };

      cancelHandlers.push(function () {
        window.onerror = originalOnError;
      });
    }
  }

  var _iterator2 = _createForOfIteratorHelper(logOptions.level),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var levelType = _step2.value;
      cancelHandlers.push(replace(logger, levelType));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return function () {
    cancelHandlers.forEach(function (h) {
      return h();
    });
  };
  /**
   * replace the original console function and record logs
   * @param logger the logger object such as Console
   * @param level the name of log function to be replaced
   */

  function replace(_logger, level) {
    var _this3 = this;

    if (!_logger[level]) {
      return function () {};
    } // replace the logger.{level}. return a restore function


    return (0, _utils.patch)(_logger, level, function (original) {
      return function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        original.apply(_this3, args);

        try {
          var trace = _errorStackParser.ErrorStackParser.parse(new Error()).map(function (stackFrame) {
            return stackFrame.toString();
          }).splice(1); // splice(1) to omit the hijacked log function


          var payload = args.map(function (s) {
            return (0, _stringify.stringify)(s, logOptions.stringifyOptions);
          });
          logCount++;

          if (logCount < logOptions.lengthThreshold) {
            cb({
              level: level,
              trace: trace,
              payload: payload
            });
          } else if (logCount === logOptions.lengthThreshold) {
            // notify the user
            cb({
              level: 'warn',
              trace: [],
              payload: [(0, _stringify.stringify)('The number of log records reached the threshold.')]
            });
          }
        } catch (error) {
          original.apply(void 0, ['rrweb logger error:', error].concat(args));
        }
      };
    });
  }
}

function mergeHooks(o, hooks) {
  var mutationCb = o.mutationCb,
      mousemoveCb = o.mousemoveCb,
      mouseInteractionCb = o.mouseInteractionCb,
      scrollCb = o.scrollCb,
      viewportResizeCb = o.viewportResizeCb,
      inputCb = o.inputCb,
      mediaInteractionCb = o.mediaInteractionCb,
      styleSheetRuleCb = o.styleSheetRuleCb,
      canvasMutationCb = o.canvasMutationCb,
      fontCb = o.fontCb,
      logCb = o.logCb;

  o.mutationCb = function () {
    if (hooks.mutation) {
      hooks.mutation.apply(hooks, arguments);
    }

    mutationCb.apply(void 0, arguments);
  };

  o.mousemoveCb = function () {
    if (hooks.mousemove) {
      hooks.mousemove.apply(hooks, arguments);
    }

    mousemoveCb.apply(void 0, arguments);
  };

  o.mouseInteractionCb = function () {
    if (hooks.mouseInteraction) {
      hooks.mouseInteraction.apply(hooks, arguments);
    }

    mouseInteractionCb.apply(void 0, arguments);
  };

  o.scrollCb = function () {
    if (hooks.scroll) {
      hooks.scroll.apply(hooks, arguments);
    }

    scrollCb.apply(void 0, arguments);
  };

  o.viewportResizeCb = function () {
    if (hooks.viewportResize) {
      hooks.viewportResize.apply(hooks, arguments);
    }

    viewportResizeCb.apply(void 0, arguments);
  };

  o.inputCb = function () {
    if (hooks.input) {
      hooks.input.apply(hooks, arguments);
    }

    inputCb.apply(void 0, arguments);
  };

  o.mediaInteractionCb = function () {
    if (hooks.mediaInteaction) {
      hooks.mediaInteaction.apply(hooks, arguments);
    }

    mediaInteractionCb.apply(void 0, arguments);
  };

  o.styleSheetRuleCb = function () {
    if (hooks.styleSheetRule) {
      hooks.styleSheetRule.apply(hooks, arguments);
    }

    styleSheetRuleCb.apply(void 0, arguments);
  };

  o.canvasMutationCb = function () {
    if (hooks.canvasMutation) {
      hooks.canvasMutation.apply(hooks, arguments);
    }

    canvasMutationCb.apply(void 0, arguments);
  };

  o.fontCb = function () {
    if (hooks.font) {
      hooks.font.apply(hooks, arguments);
    }

    fontCb.apply(void 0, arguments);
  };

  o.logCb = function () {
    if (hooks.log) {
      hooks.log.apply(hooks, arguments);
    }

    logCb.apply(void 0, arguments);
  };
}

function initObservers(o) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  mergeHooks(o, hooks);
  var mutationObserver = initMutationObserver(o.mutationCb, o.doc, o.blockClass, o.blockSelector, o.maskTextClass, o.maskTextSelector, o.inlineStylesheet, o.maskInputOptions, o.maskTextFn, o.recordCanvas, o.slimDOMOptions, o.mirror, o.iframeManager, o.shadowDomManager, o.doc);
  var mousemoveHandler = initMoveObserver(o.mousemoveCb, o.sampling, o.doc, o.mirror);
  var mouseInteractionHandler = initMouseInteractionObserver(o.mouseInteractionCb, o.doc, o.mirror, o.blockClass, o.sampling);
  var scrollHandler = initScrollObserver(o.scrollCb, o.doc, o.mirror, o.blockClass, o.sampling);
  var viewportResizeHandler = initViewportResizeObserver(o.viewportResizeCb);
  var inputHandler = initInputObserver(o.inputCb, o.doc, o.mirror, o.blockClass, o.ignoreClass, o.maskInputOptions, o.maskInputFn, o.sampling);
  var mediaInteractionHandler = initMediaInteractionObserver(o.mediaInteractionCb, o.blockClass, o.mirror);
  var styleSheetObserver = initStyleSheetObserver(o.styleSheetRuleCb, o.mirror);
  var canvasMutationObserver = o.recordCanvas ? initCanvasMutationObserver(o.canvasMutationCb, o.blockClass, o.mirror) : function () {};
  var fontObserver = o.collectFonts ? initFontObserver(o.fontCb) : function () {};
  var logObserver = o.logOptions ? initLogObserver(o.logCb, o.logOptions) : function () {};
  return function () {
    mutationObserver.disconnect();
    mousemoveHandler();
    mouseInteractionHandler();
    scrollHandler();
    viewportResizeHandler();
    inputHandler();
    mediaInteractionHandler();
    styleSheetObserver();
    canvasMutationObserver();
    fontObserver();
    logObserver();
  };
}
},{"@babel/runtime/helpers/toConsumableArray":"../node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/defineProperty":"../node_modules/@babel/runtime/helpers/defineProperty.js","../utils":"../src/rrweb/utils.ts","../types":"../src/rrweb/types.ts","./mutation":"../src/rrweb/record/mutation.ts","./stringify":"../src/rrweb/record/stringify.ts","./error-stack-parser":"../src/rrweb/record/error-stack-parser.ts"}],"../src/rrweb/record/iframe-manager.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IframeManager = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IframeManager = /*#__PURE__*/function () {
  function IframeManager(options) {
    (0, _classCallCheck2.default)(this, IframeManager);
    this.iframes = new WeakMap();
    this.mutationCb = options.mutationCb;
  }

  (0, _createClass2.default)(IframeManager, [{
    key: "addIframe",
    value: function addIframe(iframeEl) {
      this.iframes.set(iframeEl, true);
    }
  }, {
    key: "addLoadListener",
    value: function addLoadListener(cb) {
      this.loadListener = cb;
    }
  }, {
    key: "attachIframe",
    value: function attachIframe(iframeEl, childSn) {
      var _this$loadListener;

      this.mutationCb({
        adds: [{
          parentId: iframeEl.__sn.id,
          nextId: null,
          node: childSn
        }],
        removes: [],
        texts: [],
        attributes: [],
        isAttachIframe: true
      });
      (_this$loadListener = this.loadListener) === null || _this$loadListener === void 0 ? void 0 : _this$loadListener.call(this, iframeEl);
    }
  }]);
  return IframeManager;
}();

exports.IframeManager = IframeManager;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js"}],"../src/rrweb/record/shadow-dom-manager.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShadowDomManager = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _observer = require("./observer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShadowDomManager = /*#__PURE__*/function () {
  function ShadowDomManager(options) {
    (0, _classCallCheck2.default)(this, ShadowDomManager);
    this.mutationCb = options.mutationCb;
    this.bypassOptions = options.bypassOptions;
    this.mirror = options.mirror;
  }

  (0, _createClass2.default)(ShadowDomManager, [{
    key: "addShadowRoot",
    value: function addShadowRoot(shadowRoot, doc) {
      (0, _observer.initMutationObserver)(this.mutationCb, doc, this.bypassOptions.blockClass, this.bypassOptions.blockSelector, this.bypassOptions.maskTextClass, this.bypassOptions.maskTextSelector, this.bypassOptions.inlineStylesheet, this.bypassOptions.maskInputOptions, this.bypassOptions.maskTextFn, this.bypassOptions.recordCanvas, this.bypassOptions.slimDOMOptions, this.mirror, this.bypassOptions.iframeManager, this, shadowRoot);
    }
  }]);
  return ShadowDomManager;
}();

exports.ShadowDomManager = ShadowDomManager;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","./observer":"../src/rrweb/record/observer.ts"}],"../src/rrweb/record/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _snapshot3 = require("../snapshot");

var _observer = require("./observer");

var _utils = require("../utils");

var _types = require("../types");

var _iframeManager = require("./iframe-manager");

var _shadowDomManager = require("./shadow-dom-manager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wrapEvent(e) {
  return _objectSpread(_objectSpread({}, e), {}, {
    timestamp: Date.now()
  });
}

var wrappedEmit;
var takeFullSnapshot;
var mirror = (0, _utils.createMirror)();

function record() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var emit = options.emit,
      checkoutEveryNms = options.checkoutEveryNms,
      checkoutEveryNth = options.checkoutEveryNth,
      _options$blockClass = options.blockClass,
      blockClass = _options$blockClass === void 0 ? 'rr-block' : _options$blockClass,
      _options$blockSelecto = options.blockSelector,
      blockSelector = _options$blockSelecto === void 0 ? null : _options$blockSelecto,
      _options$ignoreClass = options.ignoreClass,
      ignoreClass = _options$ignoreClass === void 0 ? 'rr-ignore' : _options$ignoreClass,
      _options$maskTextClas = options.maskTextClass,
      maskTextClass = _options$maskTextClas === void 0 ? 'rr-mask' : _options$maskTextClas,
      _options$maskTextSele = options.maskTextSelector,
      maskTextSelector = _options$maskTextSele === void 0 ? null : _options$maskTextSele,
      _options$inlineStyles = options.inlineStylesheet,
      inlineStylesheet = _options$inlineStyles === void 0 ? true : _options$inlineStyles,
      maskAllInputs = options.maskAllInputs,
      _maskInputOptions = options.maskInputOptions,
      _slimDOMOptions = options.slimDOMOptions,
      maskInputFn = options.maskInputFn,
      maskTextFn = options.maskTextFn,
      hooks = options.hooks,
      packFn = options.packFn,
      _options$sampling = options.sampling,
      sampling = _options$sampling === void 0 ? {} : _options$sampling,
      mousemoveWait = options.mousemoveWait,
      _options$recordCanvas = options.recordCanvas,
      recordCanvas = _options$recordCanvas === void 0 ? false : _options$recordCanvas,
      _options$collectFonts = options.collectFonts,
      collectFonts = _options$collectFonts === void 0 ? false : _options$collectFonts,
      _options$recordLog = options.recordLog,
      recordLog = _options$recordLog === void 0 ? false : _options$recordLog; // runtime checks for user options

  if (!emit) {
    throw new Error('emit function is required');
  } // move departed options to new options


  if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
    sampling.mousemove = mousemoveWait;
  }

  var maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true
  } : _maskInputOptions !== undefined ? _maskInputOptions : {};
  var slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all' ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaVerification: true,
    // the following are off for slimDOMOptions === true,
    // as they destroy some (hidden) info:
    headMetaAuthorship: _slimDOMOptions === 'all',
    headMetaDescKeywords: _slimDOMOptions === 'all'
  } : _slimDOMOptions ? _slimDOMOptions : {};
  var defaultLogOptions = {
    level: ['assert', 'clear', 'count', 'countReset', 'debug', 'dir', 'dirxml', // 'error',
    'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'table', 'time', 'timeEnd', 'timeLog', 'trace', 'warn'],
    lengthThreshold: 1000,
    logger: console
  };
  var logOptions = recordLog ? recordLog === true ? defaultLogOptions : Object.assign({}, defaultLogOptions, recordLog) : {};
  (0, _utils.polyfill)();
  var lastFullSnapshotEvent;
  var incrementalSnapshotCount = 0;

  wrappedEmit = function wrappedEmit(e, isCheckout) {
    var _mutationBuffers$;

    if ((_mutationBuffers$ = _observer.mutationBuffers[0]) !== null && _mutationBuffers$ !== void 0 && _mutationBuffers$.isFrozen() && e.type !== _types.EventType.FullSnapshot && !(e.type === _types.EventType.IncrementalSnapshot && e.data.source === _types.IncrementalSource.Mutation)) {
      // we've got a user initiated event so first we need to apply
      // all DOM changes that have been buffering during paused state
      _observer.mutationBuffers.forEach(function (buf) {
        return buf.unfreeze();
      });
    }

    emit(packFn ? packFn(e) : e, isCheckout);

    if (e.type === _types.EventType.FullSnapshot) {
      lastFullSnapshotEvent = e;
      incrementalSnapshotCount = 0;
    } else if (e.type === _types.EventType.IncrementalSnapshot) {
      // attch iframe should be considered as full snapshot
      if (e.data.source === _types.IncrementalSource.Mutation && e.data.isAttachIframe) {
        return;
      }

      incrementalSnapshotCount++;
      var exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
      var exceedTime = checkoutEveryNms && e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;

      if (exceedCount || exceedTime) {
        takeFullSnapshot(true);
      }
    }
  };

  var wrappedMutationEmit = function wrappedMutationEmit(m) {
    wrappedEmit(wrapEvent({
      type: _types.EventType.IncrementalSnapshot,
      data: _objectSpread({
        source: _types.IncrementalSource.Mutation
      }, m)
    }));
  };

  var iframeManager = new _iframeManager.IframeManager({
    mutationCb: wrappedMutationEmit
  });
  var shadowDomManager = new _shadowDomManager.ShadowDomManager({
    mutationCb: wrappedMutationEmit,
    bypassOptions: {
      blockClass: blockClass,
      blockSelector: blockSelector,
      maskTextClass: maskTextClass,
      maskTextSelector: maskTextSelector,
      inlineStylesheet: inlineStylesheet,
      maskInputOptions: maskInputOptions,
      maskTextFn: maskTextFn,
      recordCanvas: recordCanvas,
      slimDOMOptions: slimDOMOptions,
      iframeManager: iframeManager
    },
    mirror: mirror
  });

  takeFullSnapshot = function takeFullSnapshot() {
    var _document, _document2, _document2$body, _document2$body$paren, _document3, _document4, _document5, _document5$body, _document5$body$paren, _document6;

    var isCheckout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    wrappedEmit(wrapEvent({
      type: _types.EventType.Meta,
      data: {
        href: window.location.href,
        width: (0, _utils.getWindowWidth)(),
        height: (0, _utils.getWindowHeight)()
      }
    }), isCheckout);

    _observer.mutationBuffers.forEach(function (buf) {
      return buf.lock();
    }); // don't allow any mirror modifications during snapshotting


    var _snapshot = (0, _snapshot3.snapshot)(document, {
      blockClass: blockClass,
      blockSelector: blockSelector,
      maskTextClass: maskTextClass,
      maskTextSelector: maskTextSelector,
      inlineStylesheet: inlineStylesheet,
      maskAllInputs: maskInputOptions,
      maskTextFn: maskTextFn,
      slimDOM: slimDOMOptions,
      recordCanvas: recordCanvas,
      onSerialize: function onSerialize(n) {
        if ((0, _utils.isIframeINode)(n)) {
          iframeManager.addIframe(n);
        }

        if ((0, _utils.hasShadowRoot)(n)) {
          shadowDomManager.addShadowRoot(n.shadowRoot, document);
        }
      },
      onIframeLoad: function onIframeLoad(iframe, childSn) {
        iframeManager.attachIframe(iframe, childSn);
      }
    }),
        _snapshot2 = (0, _slicedToArray2.default)(_snapshot, 2),
        node = _snapshot2[0],
        idNodeMap = _snapshot2[1];

    if (!node) {
      return console.warn('Failed to snapshot the document');
    }

    mirror.map = idNodeMap;
    wrappedEmit(wrapEvent({
      type: _types.EventType.FullSnapshot,
      data: {
        node: node,
        initialOffset: {
          left: window.pageXOffset !== undefined ? window.pageXOffset : ((_document = document) === null || _document === void 0 ? void 0 : _document.documentElement.scrollLeft) || ((_document2 = document) === null || _document2 === void 0 ? void 0 : (_document2$body = _document2.body) === null || _document2$body === void 0 ? void 0 : (_document2$body$paren = _document2$body.parentElement) === null || _document2$body$paren === void 0 ? void 0 : _document2$body$paren.scrollLeft) || ((_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.body.scrollLeft) || 0,
          top: window.pageYOffset !== undefined ? window.pageYOffset : ((_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.documentElement.scrollTop) || ((_document5 = document) === null || _document5 === void 0 ? void 0 : (_document5$body = _document5.body) === null || _document5$body === void 0 ? void 0 : (_document5$body$paren = _document5$body.parentElement) === null || _document5$body$paren === void 0 ? void 0 : _document5$body$paren.scrollTop) || ((_document6 = document) === null || _document6 === void 0 ? void 0 : _document6.body.scrollTop) || 0
        }
      }
    }));

    _observer.mutationBuffers.forEach(function (buf) {
      return buf.unlock();
    }); // generate & emit any mutations that happened during snapshotting, as can now apply against the newly built mirror

  };

  try {
    var handlers = [];
    handlers.push((0, _utils.on)('DOMContentLoaded', function () {
      wrappedEmit(wrapEvent({
        type: _types.EventType.DomContentLoaded,
        data: {}
      }));
    }));

    var observe = function observe(doc) {
      return (0, _observer.initObservers)({
        mutationCb: wrappedMutationEmit,
        mousemoveCb: function mousemoveCb(positions, source) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: {
              source: source,
              positions: positions
            }
          }));
        },
        mouseInteractionCb: function mouseInteractionCb(d) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: _objectSpread({
              source: _types.IncrementalSource.MouseInteraction
            }, d)
          }));
        },
        scrollCb: function scrollCb(p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: _objectSpread({
              source: _types.IncrementalSource.Scroll
            }, p)
          }));
        },
        viewportResizeCb: function viewportResizeCb(d) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: _objectSpread({
              source: _types.IncrementalSource.ViewportResize
            }, d)
          }));
        },
        inputCb: function inputCb(v) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: _objectSpread({
              source: _types.IncrementalSource.Input
            }, v)
          }));
        },
        mediaInteractionCb: function mediaInteractionCb(p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: _objectSpread({
              source: _types.IncrementalSource.MediaInteraction
            }, p)
          }));
        },
        styleSheetRuleCb: function styleSheetRuleCb(r) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: _objectSpread({
              source: _types.IncrementalSource.StyleSheetRule
            }, r)
          }));
        },
        canvasMutationCb: function canvasMutationCb(p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: _objectSpread({
              source: _types.IncrementalSource.CanvasMutation
            }, p)
          }));
        },
        fontCb: function fontCb(p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: _objectSpread({
              source: _types.IncrementalSource.Font
            }, p)
          }));
        },
        logCb: function logCb(p) {
          return wrappedEmit(wrapEvent({
            type: _types.EventType.IncrementalSnapshot,
            data: _objectSpread({
              source: _types.IncrementalSource.Log
            }, p)
          }));
        },
        blockClass: blockClass,
        ignoreClass: ignoreClass,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        maskInputOptions: maskInputOptions,
        inlineStylesheet: inlineStylesheet,
        sampling: sampling,
        recordCanvas: recordCanvas,
        collectFonts: collectFonts,
        doc: doc,
        maskInputFn: maskInputFn,
        maskTextFn: maskTextFn,
        logOptions: logOptions,
        blockSelector: blockSelector,
        slimDOMOptions: slimDOMOptions,
        mirror: mirror,
        iframeManager: iframeManager,
        shadowDomManager: shadowDomManager
      }, hooks);
    };

    iframeManager.addLoadListener(function (iframeEl) {
      handlers.push(observe(iframeEl.contentDocument));
    });

    var init = function init() {
      takeFullSnapshot();
      handlers.push(observe(document));
    };

    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      init();
    } else {
      handlers.push((0, _utils.on)('load', function () {
        wrappedEmit(wrapEvent({
          type: _types.EventType.Load,
          data: {}
        }));
        init();
      }, window));
    }

    return function () {
      handlers.forEach(function (h) {
        return h();
      });
    };
  } catch (error) {
    // TODO: handle internal error
    console.warn(error);
  }
}

record.addCustomEvent = function (tag, payload) {
  if (!wrappedEmit) {
    throw new Error('please add custom event after start recording');
  }

  wrappedEmit(wrapEvent({
    type: _types.EventType.Custom,
    data: {
      tag: tag,
      payload: payload
    }
  }));
};

record.freezePage = function () {
  _observer.mutationBuffers.forEach(function (buf) {
    return buf.freeze();
  });
};

record.takeFullSnapshot = function (isCheckout) {
  if (!takeFullSnapshot) {
    throw new Error('please take full snapshot after start recording');
  }

  takeFullSnapshot(isCheckout);
};

record.mirror = mirror;
var _default = record;
exports.default = _default;
},{"@babel/runtime/helpers/slicedToArray":"../node_modules/@babel/runtime/helpers/slicedToArray.js","@babel/runtime/helpers/defineProperty":"../node_modules/@babel/runtime/helpers/defineProperty.js","../snapshot":"../src/rrweb/snapshot/index.ts","./observer":"../src/rrweb/record/observer.ts","../utils":"../src/rrweb/utils.ts","../types":"../src/rrweb/types.ts","./iframe-manager":"../src/rrweb/record/iframe-manager.ts","./shadow-dom-manager":"../src/rrweb/record/shadow-dom-manager.ts"}],"../node_modules/fflate/esm/browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deflate = deflate;
exports.deflateSync = deflateSync;
exports.inflate = inflate;
exports.inflateSync = inflateSync;
exports.compress = exports.gzip = gzip;
exports.compressSync = exports.gzipSync = gzipSync;
exports.gunzip = gunzip;
exports.gunzipSync = gunzipSync;
exports.zlib = zlib;
exports.zlibSync = zlibSync;
exports.unzlib = unzlib;
exports.unzlibSync = unzlibSync;
exports.decompress = decompress;
exports.decompressSync = decompressSync;
exports.strToU8 = strToU8;
exports.strFromU8 = strFromU8;
exports.zip = zip;
exports.zipSync = zipSync;
exports.unzip = unzip;
exports.unzipSync = unzipSync;
exports.Unzip = exports.AsyncUnzipInflate = exports.UnzipInflate = exports.UnzipPassThrough = exports.Zip = exports.AsyncZipDeflate = exports.ZipDeflate = exports.ZipPassThrough = exports.EncodeUTF8 = exports.DecodeUTF8 = exports.AsyncDecompress = exports.Decompress = exports.AsyncUnzlib = exports.Unzlib = exports.AsyncZlib = exports.Zlib = exports.AsyncGunzip = exports.Gunzip = exports.AsyncCompress = exports.AsyncGzip = exports.Compress = exports.Gzip = exports.AsyncInflate = exports.Inflate = exports.AsyncDeflate = exports.Deflate = exports.FlateErrorCode = void 0;
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:
// https://tools.ietf.org/html/rfc1951
// You may also wish to take a look at the guide I made about this program:
// https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
// Some of the following code is similar to that of UZIP.js:
// https://github.com/photopea/UZIP.js
// However, the vast majority of the codebase has diverged from UZIP.js to increase performance and reduce bundle size.
// Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
// is better for memory in most engines (I *think*).
var ch2 = {};

var wk = function (c, id, msg, transfer, cb) {
  var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
    type: 'text/javascript'
  }))));

  w.onmessage = function (e) {
    var d = e.data,
        ed = d.$e$;

    if (ed) {
      var err = new Error(ed[0]);
      err['code'] = ed[1];
      err.stack = ed[2];
      cb(err, null);
    } else cb(null, d);
  };

  w.postMessage(msg, transfer);
  return w;
}; // aliases for shorter compressed code (most minifers don't do this)


var u8 = Uint8Array,
    u16 = Uint16Array,
    u32 = Uint32Array; // fixed length extra bits

var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
/* unused */
0, 0,
/* impossible */
0]); // fixed distance extra bits
// see fleb note

var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
/* unused */
0, 0]); // code length index map

var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]); // get base, reverse index map from extra bits

var freb = function (eb, start) {
  var b = new u16(31);

  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  } // numbers here are at max 18 bits


  var r = new u32(b[30]);

  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }

  return [b, r];
};

var _a = freb(fleb, 2),
    fl = _a[0],
    revfl = _a[1]; // we can ignore the fact that the other numbers are wrong; they never happen anyway


fl[28] = 258, revfl[258] = 28;

var _b = freb(fdeb, 0),
    fd = _b[0],
    revfd = _b[1]; // map of value to reverse (assuming 16 bits)


var rev = new u16(32768);

for (var i = 0; i < 32768; ++i) {
  // reverse table algorithm from SO
  var x = (i & 0xAAAA) >>> 1 | (i & 0x5555) << 1;
  x = (x & 0xCCCC) >>> 2 | (x & 0x3333) << 2;
  x = (x & 0xF0F0) >>> 4 | (x & 0x0F0F) << 4;
  rev[i] = ((x & 0xFF00) >>> 8 | (x & 0x00FF) << 8) >>> 1;
} // create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?


var hMap = function (cd, mb, r) {
  var s = cd.length; // index

  var i = 0; // u16 "map": index -> # of codes with bit length = index

  var l = new u16(mb); // length of cd must be 288 (total # of codes)

  for (; i < s; ++i) ++l[cd[i] - 1]; // u16 "map": index -> minimum code for bit length = index


  var le = new u16(mb);

  for (i = 0; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }

  var co;

  if (r) {
    // u16 "map": index -> number of actual bits, symbol for code
    co = new u16(1 << mb); // bits to remove for reverser

    var rvb = 15 - mb;

    for (i = 0; i < s; ++i) {
      // ignore 0 lengths
      if (cd[i]) {
        // num encoding both symbol and bits read
        var sv = i << 4 | cd[i]; // free bits

        var r_1 = mb - cd[i]; // start value

        var v = le[cd[i] - 1]++ << r_1; // m is end value

        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          // every 16 bit value starting with the code yields the same result
          co[rev[v] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);

    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
      }
    }
  }

  return co;
}; // fixed length tree


var flt = new u8(288);

for (var i = 0; i < 144; ++i) flt[i] = 8;

for (var i = 144; i < 256; ++i) flt[i] = 9;

for (var i = 256; i < 280; ++i) flt[i] = 7;

for (var i = 280; i < 288; ++i) flt[i] = 8; // fixed distance tree


var fdt = new u8(32);

for (var i = 0; i < 32; ++i) fdt[i] = 5; // fixed length map


var flm = /*#__PURE__*/hMap(flt, 9, 0),
    flrm = /*#__PURE__*/hMap(flt, 9, 1); // fixed distance map

var fdm = /*#__PURE__*/hMap(fdt, 5, 0),
    fdrm = /*#__PURE__*/hMap(fdt, 5, 1); // find max of array

var max = function (a) {
  var m = a[0];

  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m) m = a[i];
  }

  return m;
}; // read d, starting at bit p and mask with m


var bits = function (d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
}; // read d, starting at bit p continuing for at least 16 bits


var bits16 = function (d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
}; // get end of byte


var shft = function (p) {
  return (p + 7) / 8 | 0;
}; // typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice


var slc = function (v, s, e) {
  if (s == null || s < 0) s = 0;
  if (e == null || e > v.length) e = v.length; // can't use .constructor in case user-supplied

  var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
  n.set(v.subarray(s, e));
  return n;
};
/**
 * Codes for errors generated within this library
 */


var FlateErrorCode = {
  UnexpectedEOF: 0,
  InvalidBlockType: 1,
  InvalidLengthLiteral: 2,
  InvalidDistance: 3,
  StreamFinished: 4,
  NoStreamHandler: 5,
  InvalidHeader: 6,
  NoCallback: 7,
  InvalidUTF8: 8,
  ExtraFieldTooLong: 9,
  InvalidDate: 10,
  FilenameTooLong: 11,
  StreamFinishing: 12,
  InvalidZipData: 13,
  UnknownCompressionMethod: 14
}; // error codes

exports.FlateErrorCode = FlateErrorCode;
var ec = ['unexpected EOF', 'invalid block type', 'invalid length/literal', 'invalid distance', 'stream finished', 'no stream handler',, 'no callback', 'invalid UTF-8 data', 'extra field too long', 'date not in range 1980-2099', 'filename too long', 'stream finishing', 'invalid zip data' // determined by unknown compression method
];
;

var err = function (ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace) Error.captureStackTrace(e, err);
  if (!nt) throw e;
  return e;
}; // expands raw DEFLATE data


var inflt = function (dat, buf, st) {
  // source length
  var sl = dat.length;
  if (!sl || st && st.f && !st.l) return buf || new u8(0); // have to estimate size

  var noBuf = !buf || st; // no state

  var noSt = !st || st.i;
  if (!st) st = {}; // Assumes roughly 33% compression ratio average

  if (!buf) buf = new u8(sl * 3); // ensure buffer can fit at least l elements

  var cbuf = function (l) {
    var bl = buf.length; // need to increase size to fit

    if (l > bl) {
      // Double or set to necessary, whichever is greater
      var nbuf = new u8(Math.max(bl * 2, l));
      nbuf.set(buf);
      buf = nbuf;
    }
  }; //  last chunk         bitpos           bytes


  var final = st.f || 0,
      pos = st.p || 0,
      bt = st.b || 0,
      lm = st.l,
      dm = st.d,
      lbt = st.m,
      dbt = st.n; // total bits

  var tbts = sl * 8;

  do {
    if (!lm) {
      // BFINAL - this is only 1 when last chunk is next
      final = bits(dat, pos, 1); // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman

      var type = bits(dat, pos + 1, 3);
      pos += 3;

      if (!type) {
        // go to end of byte boundary
        var s = shft(pos) + 4,
            l = dat[s - 4] | dat[s - 3] << 8,
            t = s + l;

        if (t > sl) {
          if (noSt) err(0);
          break;
        } // ensure size


        if (noBuf) cbuf(bt + l); // Copy over uncompressed data

        buf.set(dat.subarray(s, t), bt); // Get new bitpos, update byte count

        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;else if (type == 2) {
        //  literal                            lengths
        var hLit = bits(dat, pos, 31) + 257,
            hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14; // length+distance tree

        var ldt = new u8(tl); // code length tree

        var clt = new u8(19);

        for (var i = 0; i < hcLen; ++i) {
          // use index map to get real code
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }

        pos += hcLen * 3; // code lengths bits

        var clb = max(clt),
            clbmsk = (1 << clb) - 1; // code lengths map

        var clm = hMap(clt, clb, 1);

        for (var i = 0; i < tl;) {
          var r = clm[bits(dat, pos, clbmsk)]; // bits read

          pos += r & 15; // symbol

          var s = r >>> 4; // code length to copy

          if (s < 16) {
            ldt[i++] = s;
          } else {
            //  copy   count
            var c = 0,
                n = 0;
            if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;

            while (n--) ldt[i++] = c;
          }
        } //    length tree                 distance tree


        var lt = ldt.subarray(0, hLit),
            dt = ldt.subarray(hLit); // max length bits

        lbt = max(lt); // max dist bits

        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else err(1);

      if (pos > tbts) {
        if (noSt) err(0);
        break;
      }
    } // Make sure the buffer can hold this + the largest possible addition
    // Maximum chunk size (practically, theoretically infinite) is 2^17;


    if (noBuf) cbuf(bt + 131072);
    var lms = (1 << lbt) - 1,
        dms = (1 << dbt) - 1;
    var lpos = pos;

    for (;; lpos = pos) {
      // bits read, code
      var c = lm[bits16(dat, pos) & lms],
          sym = c >>> 4;
      pos += c & 15;

      if (pos > tbts) {
        if (noSt) err(0);
        break;
      }

      if (!c) err(2);
      if (sym < 256) buf[bt++] = sym;else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254; // no extra bits needed if less

        if (sym > 264) {
          // index
          var i = sym - 257,
              b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        } // dist


        var d = dm[bits16(dat, pos) & dms],
            dsym = d >>> 4;
        if (!d) err(3);
        pos += d & 15;
        var dt = fd[dsym];

        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }

        if (pos > tbts) {
          if (noSt) err(0);
          break;
        }

        if (noBuf) cbuf(bt + 131072);
        var end = bt + add;

        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }

        bt = end;
      }
    }

    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);

  return bt == buf.length ? buf : slc(buf, 0, bt);
}; // starting at p, write the minimum number of bits that can hold v to d


var wbits = function (d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
}; // starting at p, write the minimum number of bits (>8) that can hold v to d


var wbits16 = function (d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
  d[o + 2] |= v >>> 16;
}; // creates code lengths from a frequency table


var hTree = function (d, mb) {
  // Need extra info to make a tree
  var t = [];

  for (var i = 0; i < d.length; ++i) {
    if (d[i]) t.push({
      s: i,
      f: d[i]
    });
  }

  var s = t.length;
  var t2 = t.slice();
  if (!s) return [et, 0];

  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return [v, 1];
  }

  t.sort(function (a, b) {
    return a.f - b.f;
  }); // after i2 reaches last ind, will be stopped
  // freq must be greater than largest possible number of symbols

  t.push({
    s: -1,
    f: 25001
  });
  var l = t[0],
      r = t[1],
      i0 = 0,
      i1 = 1,
      i2 = 2;
  t[0] = {
    s: -1,
    f: l.f + r.f,
    l: l,
    r: r
  }; // efficient algorithm from UZIP.js
  // i0 is lookbehind, i2 is lookahead - after processing two low-freq
  // symbols that combined have high freq, will start processing i2 (high-freq,
  // non-composite) symbols instead
  // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/

  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = {
      s: -1,
      f: l.f + r.f,
      l: l,
      r: r
    };
  }

  var maxSym = t2[0].s;

  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym) maxSym = t2[i].s;
  } // code lengths


  var tr = new u16(maxSym + 1); // max bits in tree

  var mbt = ln(t[i1 - 1], tr, 0);

  if (mbt > mb) {
    // more algorithms from UZIP.js
    // TODO: find out how this code works (debt)
    //  ind    debt
    var i = 0,
        dt = 0; //    left            cost

    var lft = mbt - mb,
        cst = 1 << lft;
    t2.sort(function (a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });

    for (; i < s; ++i) {
      var i2_1 = t2[i].s;

      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else break;
    }

    dt >>>= lft;

    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;else ++i;
    }

    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;

      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }

    mbt = mb;
  }

  return [new u8(tr), mbt];
}; // get the max length and assign length codes


var ln = function (n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
}; // length codes generation


var lc = function (c) {
  var s = c.length; // Note that the semicolon was intentional

  while (s && !c[--s]);

  var cl = new u16(++s); //  ind      num         streak

  var cli = 0,
      cln = c[0],
      cls = 1;

  var w = function (v) {
    cl[cli++] = v;
  };

  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s) ++cls;else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138) w(32754);

        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;

        for (; cls > 6; cls -= 6) w(8304);

        if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
      }

      while (cls--) w(cln);

      cls = 1;
      cln = c[i];
    }
  }

  return [cl.subarray(0, cli), s];
}; // calculate the length of output from tree, code lengths


var clen = function (cf, cl) {
  var l = 0;

  for (var i = 0; i < cl.length; ++i) l += cf[i] * cl[i];

  return l;
}; // writes a fixed block
// returns the new bit pos


var wfblk = function (out, pos, dat) {
  // no need to write 00 as type: TypedArray defaults to 0
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >>> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;

  for (var i = 0; i < s; ++i) out[o + i + 4] = dat[i];

  return (o + 4 + s) * 8;
}; // writes a block


var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];

  var _a = hTree(lf, 15),
      dlt = _a[0],
      mlb = _a[1];

  var _b = hTree(df, 15),
      ddt = _b[0],
      mdb = _b[1];

  var _c = lc(dlt),
      lclt = _c[0],
      nlc = _c[1];

  var _d = lc(ddt),
      lcdt = _d[0],
      ndc = _d[1];

  var lcfreq = new u16(19);

  for (var i = 0; i < lclt.length; ++i) lcfreq[lclt[i] & 31]++;

  for (var i = 0; i < lcdt.length; ++i) lcfreq[lcdt[i] & 31]++;

  var _e = hTree(lcfreq, 7),
      lct = _e[0],
      mlcb = _e[1];

  var nlcc = 19;

  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);

  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
  if (flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;

  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;

    for (var i = 0; i < nlcc; ++i) wbits(out, p + 3 * i, lct[clim[i]]);

    p += 3 * nlcc;
    var lcts = [lclt, lcdt];

    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];

      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15) wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }

  for (var i = 0; i < li; ++i) {
    if (syms[i] > 255) {
      var len = syms[i] >>> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7) wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
      var dst = syms[i] & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3) wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
    }
  }

  wbits16(out, p, lm[256]);
  return p + ll[256];
}; // deflate options (nice << 13) | chain


var deo = /*#__PURE__*/new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]); // empty

var et = /*#__PURE__*/new u8(0); // compresses data into a raw DEFLATE buffer

var dflt = function (dat, lvl, plvl, pre, post, lst) {
  var s = dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7000)) + post); // writing to this writes to the output buffer

  var w = o.subarray(pre, o.length - post);
  var pos = 0;

  if (!lvl || s < 8) {
    for (var i = 0; i <= s; i += 65535) {
      // end
      var e = i + 65535;

      if (e < s) {
        // write full block
        pos = wfblk(w, pos, dat.subarray(i, e));
      } else {
        // write final block
        w[i] = lst;
        pos = wfblk(w, pos, dat.subarray(i, s));
      }
    }
  } else {
    var opt = deo[lvl - 1];
    var n = opt >>> 13,
        c = opt & 8191;
    var msk_1 = (1 << plvl) - 1; //    prev 2-byte val map    curr 2-byte val map

    var prev = new u16(32768),
        head = new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3),
        bs2_1 = 2 * bs1_1;

    var hsh = function (i) {
      return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
    }; // 24576 is an arbitrary number of maximum symbols per block
    // 424 buffer for last block


    var syms = new u32(25000); // length/literal freq   distance freq

    var lf = new u16(288),
        df = new u16(32); //  l/lcnt  exbits  index  l/lind  waitdx  bitpos

    var lc_1 = 0,
        eb = 0,
        i = 0,
        li = 0,
        wi = 0,
        bs = 0;

    for (; i < s; ++i) {
      // hash value
      // deopt when i > s - 3 - at end, deopt acceptable
      var hv = hsh(i); // index mod 32768    previous index mod

      var imod = i & 32767,
          pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod; // We always should modify head and prev, but only add symbols if
      // this data is not yet processed ("wait" for wait index)

      if (wi <= i) {
        // bytes remaining
        var rem = s - i;

        if ((lc_1 > 7000 || li > 24576) && rem > 423) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;

          for (var j = 0; j < 286; ++j) lf[j] = 0;

          for (var j = 0; j < 30; ++j) df[j] = 0;
        } //  len    dist   chain


        var l = 2,
            d = 0,
            ch_1 = c,
            dif = imod - pimod & 32767;

        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i); // max possible length
          // not capped at dif because decompressors implement "rolling" index population

          var ml = Math.min(258, rem);

          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;

              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);

              if (nl > l) {
                l = nl, d = dif; // break out early when we reach "nice" (we are satisfied enough)

                if (nl > maxn) break; // now, find the rarest 2-byte sequence within this
                // length of literals and search for that instead.
                // Much faster than just using the start

                var mmd = Math.min(dif, nl - 2);
                var md = 0;

                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j + 32768 & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti + 32768 & 32767;
                  if (cd > md) md = cd, pimod = ti;
                }
              }
            } // check the previous match


            imod = pimod, pimod = prev[imod];
            dif += imod - pimod + 32768 & 32767;
          }
        } // d will be nonzero only when a match was found


        if (d) {
          // store both dist and len data in one Uint32
          // Make sure this is recognized as a len/dist with 28th bit (2^28)
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31,
              din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }

    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos); // this is the easiest way to avoid needing to maintain state

    if (!lst && pos & 7) pos = wfblk(w, pos + 1, et);
  }

  return slc(o, 0, pre + shft(pos) + post);
}; // CRC32 table


var crct = /*#__PURE__*/function () {
  var t = new Int32Array(256);

  for (var i = 0; i < 256; ++i) {
    var c = i,
        k = 9;

    while (--k) c = (c & 1 && -306674912) ^ c >>> 1;

    t[i] = c;
  }

  return t;
}(); // CRC32


var crc = function () {
  var c = -1;
  return {
    p: function (d) {
      // closures have awful performance
      var cr = c;

      for (var i = 0; i < d.length; ++i) cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;

      c = cr;
    },
    d: function () {
      return ~c;
    }
  };
}; // Alder32


var adler = function () {
  var a = 1,
      b = 0;
  return {
    p: function (d) {
      // closures have awful performance
      var n = a,
          m = b;
      var l = d.length | 0;

      for (var i = 0; i != l;) {
        var e = Math.min(i + 2655, l);

        for (; i < e; ++i) m += n += d[i];

        n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
      }

      a = n, b = m;
    },
    d: function () {
      a %= 65521, b %= 65521;
      return (a & 255) << 24 | a >>> 8 << 16 | (b & 255) << 8 | b >>> 8;
    }
  };
};

; // deflate with opts

var dopt = function (dat, opt, pre, post, st) {
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
}; // Walmart object spread


var mrg = function (a, b) {
  var o = {};

  for (var k in a) o[k] = a[k];

  for (var k in b) o[k] = b[k];

  return o;
}; // worker clone
// This is possibly the craziest part of the entire codebase, despite how simple it may seem.
// The only parameter to this function is a closure that returns an array of variables outside of the function scope.
// We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
// We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
// The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
// This took me three weeks to figure out how to do.


var wcln = function (fn, fnStr, td) {
  var dt = fn();
  var st = fn.toString();
  var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/ /g, '').split(',');

  for (var i = 0; i < dt.length; ++i) {
    var v = dt[i],
        k = ks[i];

    if (typeof v == 'function') {
      fnStr += ';' + k + '=';
      var st_1 = v.toString();

      if (v.prototype) {
        // for global objects
        if (st_1.indexOf('[native code]') != -1) {
          var spInd = st_1.indexOf(' ', 8) + 1;
          fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));
        } else {
          fnStr += st_1;

          for (var t in v.prototype) fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();
        }
      } else fnStr += st_1;
    } else td[k] = v;
  }

  return [fnStr, td];
};

var ch = []; // clone bufs

var cbfs = function (v) {
  var tl = [];

  for (var k in v) {
    if (v[k] instanceof u8 || v[k] instanceof u16 || v[k] instanceof u32) tl.push((v[k] = new v[k].constructor(v[k])).buffer);
  }

  return tl;
}; // use a worker to execute code


var wrkr = function (fns, init, id, cb) {
  var _a;

  if (!ch[id]) {
    var fnStr = '',
        td_1 = {},
        m = fns.length - 1;

    for (var i = 0; i < m; ++i) _a = wcln(fns[i], fnStr, td_1), fnStr = _a[0], td_1 = _a[1];

    ch[id] = wcln(fns[m], fnStr, td_1);
  }

  var td = mrg({}, ch[id][1]);
  return wk(ch[id][0] + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, cbfs(td), cb);
}; // base async inflate fn


var bInflt = function () {
  return [u8, u16, u32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gu8];
};

var bDflt = function () {
  return [u8, u16, u32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf];
}; // gzip extra


var gze = function () {
  return [gzh, gzhl, wbytes, crc, crct];
}; // gunzip extra


var guze = function () {
  return [gzs, gzl];
}; // zlib extra


var zle = function () {
  return [zlh, wbytes, adler];
}; // unzlib extra


var zule = function () {
  return [zlv];
}; // post buf


var pbf = function (msg) {
  return postMessage(msg, [msg.buffer]);
}; // get u8


var gu8 = function (o) {
  return o && o.size && new u8(o.size);
}; // async helper


var cbify = function (dat, opts, fns, init, id, cb) {
  var w = wrkr(fns, init, id, function (err, dat) {
    w.terminate();
    cb(err, dat);
  });
  w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
  return function () {
    w.terminate();
  };
}; // auto stream


var astrm = function (strm) {
  strm.ondata = function (dat, final) {
    return postMessage([dat, final], [dat.buffer]);
  };

  return function (ev) {
    return strm.push(ev.data[0], ev.data[1]);
  };
}; // async stream attach


var astrmify = function (fns, strm, opts, init, id) {
  var t;
  var w = wrkr(fns, init, id, function (err, dat) {
    if (err) w.terminate(), strm.ondata.call(strm, err);else {
      if (dat[1]) w.terminate();
      strm.ondata.call(strm, err, dat[0], dat[1]);
    }
  });
  w.postMessage(opts);

  strm.push = function (d, f) {
    if (!strm.ondata) err(5);
    if (t) strm.ondata(err(4, 0, 1), null, !!f);
    w.postMessage([d, t = f], [d.buffer]);
  };

  strm.terminate = function () {
    w.terminate();
  };
}; // read 2 bytes


var b2 = function (d, b) {
  return d[b] | d[b + 1] << 8;
}; // read 4 bytes


var b4 = function (d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};

var b8 = function (d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
}; // write bytes


var wbytes = function (d, b, v) {
  for (; v; ++b) d[b] = v, v >>>= 8;
}; // gzip header


var gzh = function (c, o) {
  var fn = o.filename;
  c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix

  if (o.mtime != 0) wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));

  if (fn) {
    c[3] = 8;

    for (var i = 0; i <= fn.length; ++i) c[i + 10] = fn.charCodeAt(i);
  }
}; // gzip footer: -8 to -4 = CRC, -4 to -0 is length
// gzip start


var gzs = function (d) {
  if (d[0] != 31 || d[1] != 139 || d[2] != 8) err(6, 'invalid gzip data');
  var flg = d[3];
  var st = 10;
  if (flg & 4) st += d[10] | (d[11] << 8) + 2;

  for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++]);

  return st + (flg & 2);
}; // gzip length


var gzl = function (d) {
  var l = d.length;
  return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
}; // gzip header length


var gzhl = function (o) {
  return 10 + (o.filename && o.filename.length + 1 || 0);
}; // zlib header


var zlh = function (c, o) {
  var lv = o.level,
      fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
  c[0] = 120, c[1] = fl << 6 | (fl ? 32 - 2 * fl : 1);
}; // zlib valid


var zlv = function (d) {
  if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) err(6, 'invalid zlib data');
  if (d[1] & 32) err(6, 'invalid zlib data: preset dictionaries not supported');
};

function AsyncCmpStrm(opts, cb) {
  if (!cb && typeof opts == 'function') cb = opts, opts = {};
  this.ondata = cb;
  return opts;
} // zlib footer: -4 to -0 is Adler32

/**
 * Streaming DEFLATE compression
 */


var Deflate = /*#__PURE__*/function () {
  function Deflate(opts, cb) {
    if (!cb && typeof opts == 'function') cb = opts, opts = {};
    this.ondata = cb;
    this.o = opts || {};
  }

  Deflate.prototype.p = function (c, f) {
    this.ondata(dopt(c, this.o, 0, 0, !f), f);
  };
  /**
   * Pushes a chunk to be deflated
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  Deflate.prototype.push = function (chunk, final) {
    if (!this.ondata) err(5);
    if (this.d) err(4);
    this.d = final;
    this.p(chunk, final || false);
  };

  return Deflate;
}();

exports.Deflate = Deflate;

/**
 * Asynchronous streaming DEFLATE compression
 */
var AsyncDeflate = /*#__PURE__*/function () {
  function AsyncDeflate(opts, cb) {
    astrmify([bDflt, function () {
      return [astrm, Deflate];
    }], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
      var strm = new Deflate(ev.data);
      onmessage = astrm(strm);
    }, 6);
  }

  return AsyncDeflate;
}();

exports.AsyncDeflate = AsyncDeflate;

function deflate(data, opts, cb) {
  if (!cb) cb = opts, opts = {};
  if (typeof cb != 'function') err(7);
  return cbify(data, opts, [bDflt], function (ev) {
    return pbf(deflateSync(ev.data[0], ev.data[1]));
  }, 0, cb);
}
/**
 * Compresses data with DEFLATE without any wrapper
 * @param data The data to compress
 * @param opts The compression options
 * @returns The deflated version of the data
 */


function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
/**
 * Streaming DEFLATE decompression
 */


var Inflate = /*#__PURE__*/function () {
  /**
   * Creates an inflation stream
   * @param cb The callback to call whenever data is inflated
   */
  function Inflate(cb) {
    this.s = {};
    this.p = new u8(0);
    this.ondata = cb;
  }

  Inflate.prototype.e = function (c) {
    if (!this.ondata) err(5);
    if (this.d) err(4);
    var l = this.p.length;
    var n = new u8(l + c.length);
    n.set(this.p), n.set(c, l), this.p = n;
  };

  Inflate.prototype.c = function (final) {
    this.d = this.s.i = final || false;
    var bts = this.s.b;
    var dt = inflt(this.p, this.o, this.s);
    this.ondata(slc(dt, bts, this.s.b), this.d);
    this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
    this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
  };
  /**
   * Pushes a chunk to be inflated
   * @param chunk The chunk to push
   * @param final Whether this is the final chunk
   */


  Inflate.prototype.push = function (chunk, final) {
    this.e(chunk), this.c(final);
  };

  return Inflate;
}();

exports.Inflate = Inflate;

/**
 * Asynchronous streaming DEFLATE decompression
 */
var AsyncInflate = /*#__PURE__*/function () {
  /**
   * Creates an asynchronous inflation stream
   * @param cb The callback to call whenever data is deflated
   */
  function AsyncInflate(cb) {
    this.ondata = cb;
    astrmify([bInflt, function () {
      return [astrm, Inflate];
    }], this, 0, function () {
      var strm = new Inflate();
      onmessage = astrm(strm);
    }, 7);
  }

  return AsyncInflate;
}();

exports.AsyncInflate = AsyncInflate;

function inflate(data, opts, cb) {
  if (!cb) cb = opts, opts = {};
  if (typeof cb != 'function') err(7);
  return cbify(data, opts, [bInflt], function (ev) {
    return pbf(inflateSync(ev.data[0], gu8(ev.data[1])));
  }, 1, cb);
}
/**
 * Expands DEFLATE data with no wrapper
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */


function inflateSync(data, out) {
  return inflt(data, out);
} // before you yell at me for not just using extends, my reason is that TS inheritance is hard to workerize.

/**
 * Streaming GZIP compression
 */


var Gzip = /*#__PURE__*/function () {
  function Gzip(opts, cb) {
    this.c = crc();
    this.l = 0;
    this.v = 1;
    Deflate.call(this, opts, cb);
  }
  /**
   * Pushes a chunk to be GZIPped
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  Gzip.prototype.push = function (chunk, final) {
    Deflate.prototype.push.call(this, chunk, final);
  };

  Gzip.prototype.p = function (c, f) {
    this.c.p(c);
    this.l += c.length;
    var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, !f);
    if (this.v) gzh(raw, this.o), this.v = 0;
    if (f) wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
    this.ondata(raw, f);
  };

  return Gzip;
}();

exports.Compress = exports.Gzip = Gzip;

/**
 * Asynchronous streaming GZIP compression
 */
var AsyncGzip = /*#__PURE__*/function () {
  function AsyncGzip(opts, cb) {
    astrmify([bDflt, gze, function () {
      return [astrm, Deflate, Gzip];
    }], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
      var strm = new Gzip(ev.data);
      onmessage = astrm(strm);
    }, 8);
  }

  return AsyncGzip;
}();

exports.AsyncCompress = exports.AsyncGzip = AsyncGzip;

function gzip(data, opts, cb) {
  if (!cb) cb = opts, opts = {};
  if (typeof cb != 'function') err(7);
  return cbify(data, opts, [bDflt, gze, function () {
    return [gzipSync];
  }], function (ev) {
    return pbf(gzipSync(ev.data[0], ev.data[1]));
  }, 2, cb);
}
/**
 * Compresses data with GZIP
 * @param data The data to compress
 * @param opts The compression options
 * @returns The gzipped version of the data
 */


function gzipSync(data, opts) {
  if (!opts) opts = {};
  var c = crc(),
      l = data.length;
  c.p(data);
  var d = dopt(data, opts, gzhl(opts), 8),
      s = d.length;
  return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
}
/**
 * Streaming GZIP decompression
 */


var Gunzip = /*#__PURE__*/function () {
  /**
   * Creates a GUNZIP stream
   * @param cb The callback to call whenever data is inflated
   */
  function Gunzip(cb) {
    this.v = 1;
    Inflate.call(this, cb);
  }
  /**
   * Pushes a chunk to be GUNZIPped
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  Gunzip.prototype.push = function (chunk, final) {
    Inflate.prototype.e.call(this, chunk);

    if (this.v) {
      var s = this.p.length > 3 ? gzs(this.p) : 4;
      if (s >= this.p.length && !final) return;
      this.p = this.p.subarray(s), this.v = 0;
    }

    if (final) {
      if (this.p.length < 8) err(6, 'invalid gzip data');
      this.p = this.p.subarray(0, -8);
    } // necessary to prevent TS from using the closure value
    // This allows for workerization to function correctly


    Inflate.prototype.c.call(this, final);
  };

  return Gunzip;
}();

exports.Gunzip = Gunzip;

/**
 * Asynchronous streaming GZIP decompression
 */
var AsyncGunzip = /*#__PURE__*/function () {
  /**
   * Creates an asynchronous GUNZIP stream
   * @param cb The callback to call whenever data is deflated
   */
  function AsyncGunzip(cb) {
    this.ondata = cb;
    astrmify([bInflt, guze, function () {
      return [astrm, Inflate, Gunzip];
    }], this, 0, function () {
      var strm = new Gunzip();
      onmessage = astrm(strm);
    }, 9);
  }

  return AsyncGunzip;
}();

exports.AsyncGunzip = AsyncGunzip;

function gunzip(data, opts, cb) {
  if (!cb) cb = opts, opts = {};
  if (typeof cb != 'function') err(7);
  return cbify(data, opts, [bInflt, guze, function () {
    return [gunzipSync];
  }], function (ev) {
    return pbf(gunzipSync(ev.data[0]));
  }, 3, cb);
}
/**
 * Expands GZIP data
 * @param data The data to decompress
 * @param out Where to write the data. GZIP already encodes the output size, so providing this doesn't save memory.
 * @returns The decompressed version of the data
 */


function gunzipSync(data, out) {
  return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
}
/**
 * Streaming Zlib compression
 */


var Zlib = /*#__PURE__*/function () {
  function Zlib(opts, cb) {
    this.c = adler();
    this.v = 1;
    Deflate.call(this, opts, cb);
  }
  /**
   * Pushes a chunk to be zlibbed
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  Zlib.prototype.push = function (chunk, final) {
    Deflate.prototype.push.call(this, chunk, final);
  };

  Zlib.prototype.p = function (c, f) {
    this.c.p(c);
    var raw = dopt(c, this.o, this.v && 2, f && 4, !f);
    if (this.v) zlh(raw, this.o), this.v = 0;
    if (f) wbytes(raw, raw.length - 4, this.c.d());
    this.ondata(raw, f);
  };

  return Zlib;
}();

exports.Zlib = Zlib;

/**
 * Asynchronous streaming Zlib compression
 */
var AsyncZlib = /*#__PURE__*/function () {
  function AsyncZlib(opts, cb) {
    astrmify([bDflt, zle, function () {
      return [astrm, Deflate, Zlib];
    }], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
      var strm = new Zlib(ev.data);
      onmessage = astrm(strm);
    }, 10);
  }

  return AsyncZlib;
}();

exports.AsyncZlib = AsyncZlib;

function zlib(data, opts, cb) {
  if (!cb) cb = opts, opts = {};
  if (typeof cb != 'function') err(7);
  return cbify(data, opts, [bDflt, zle, function () {
    return [zlibSync];
  }], function (ev) {
    return pbf(zlibSync(ev.data[0], ev.data[1]));
  }, 4, cb);
}
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */


function zlibSync(data, opts) {
  if (!opts) opts = {};
  var a = adler();
  a.p(data);
  var d = dopt(data, opts, 2, 4);
  return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Streaming Zlib decompression
 */


var Unzlib = /*#__PURE__*/function () {
  /**
   * Creates a Zlib decompression stream
   * @param cb The callback to call whenever data is inflated
   */
  function Unzlib(cb) {
    this.v = 1;
    Inflate.call(this, cb);
  }
  /**
   * Pushes a chunk to be unzlibbed
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  Unzlib.prototype.push = function (chunk, final) {
    Inflate.prototype.e.call(this, chunk);

    if (this.v) {
      if (this.p.length < 2 && !final) return;
      this.p = this.p.subarray(2), this.v = 0;
    }

    if (final) {
      if (this.p.length < 4) err(6, 'invalid zlib data');
      this.p = this.p.subarray(0, -4);
    } // necessary to prevent TS from using the closure value
    // This allows for workerization to function correctly


    Inflate.prototype.c.call(this, final);
  };

  return Unzlib;
}();

exports.Unzlib = Unzlib;

/**
 * Asynchronous streaming Zlib decompression
 */
var AsyncUnzlib = /*#__PURE__*/function () {
  /**
   * Creates an asynchronous Zlib decompression stream
   * @param cb The callback to call whenever data is deflated
   */
  function AsyncUnzlib(cb) {
    this.ondata = cb;
    astrmify([bInflt, zule, function () {
      return [astrm, Inflate, Unzlib];
    }], this, 0, function () {
      var strm = new Unzlib();
      onmessage = astrm(strm);
    }, 11);
  }

  return AsyncUnzlib;
}();

exports.AsyncUnzlib = AsyncUnzlib;

function unzlib(data, opts, cb) {
  if (!cb) cb = opts, opts = {};
  if (typeof cb != 'function') err(7);
  return cbify(data, opts, [bInflt, zule, function () {
    return [unzlibSync];
  }], function (ev) {
    return pbf(unzlibSync(ev.data[0], gu8(ev.data[1])));
  }, 5, cb);
}
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */


function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
} // Default algorithm for compression (used because having a known output size allows faster decompression)


/**
 * Streaming GZIP, Zlib, or raw DEFLATE decompression
 */
var Decompress = /*#__PURE__*/function () {
  /**
   * Creates a decompression stream
   * @param cb The callback to call whenever data is decompressed
   */
  function Decompress(cb) {
    this.G = Gunzip;
    this.I = Inflate;
    this.Z = Unzlib;
    this.ondata = cb;
  }
  /**
   * Pushes a chunk to be decompressed
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  Decompress.prototype.push = function (chunk, final) {
    if (!this.ondata) err(5);

    if (!this.s) {
      if (this.p && this.p.length) {
        var n = new u8(this.p.length + chunk.length);
        n.set(this.p), n.set(chunk, this.p.length);
      } else this.p = chunk;

      if (this.p.length > 2) {
        var _this_1 = this;

        var cb = function () {
          _this_1.ondata.apply(_this_1, arguments);
        };

        this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(cb) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(cb) : new this.Z(cb);
        this.s.push(this.p, final);
        this.p = null;
      }
    } else this.s.push(chunk, final);
  };

  return Decompress;
}();

exports.Decompress = Decompress;

/**
 * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
 */
var AsyncDecompress = /*#__PURE__*/function () {
  /**
  * Creates an asynchronous decompression stream
  * @param cb The callback to call whenever data is decompressed
  */
  function AsyncDecompress(cb) {
    this.G = AsyncGunzip;
    this.I = AsyncInflate;
    this.Z = AsyncUnzlib;
    this.ondata = cb;
  }
  /**
   * Pushes a chunk to be decompressed
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  AsyncDecompress.prototype.push = function (chunk, final) {
    Decompress.prototype.push.call(this, chunk, final);
  };

  return AsyncDecompress;
}();

exports.AsyncDecompress = AsyncDecompress;

function decompress(data, opts, cb) {
  if (!cb) cb = opts, opts = {};
  if (typeof cb != 'function') err(7);
  return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzip(data, opts, cb) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflate(data, opts, cb) : unzlib(data, opts, cb);
}
/**
 * Expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */


function decompressSync(data, out) {
  return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, out) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, out) : unzlibSync(data, out);
} // flatten a directory structure


var fltn = function (d, p, t, o) {
  for (var k in d) {
    var val = d[k],
        n = p + k;
    if (val instanceof u8) t[n] = [val, o];else if (Array.isArray(val)) t[n] = [val[0], mrg(o, val[1])];else fltn(val, n + '/', t, o);
  }
}; // text encoder


var te = typeof TextEncoder != 'undefined' && /*#__PURE__*/new TextEncoder(); // text decoder

var td = typeof TextDecoder != 'undefined' && /*#__PURE__*/new TextDecoder(); // text decoder stream

var tds = 0;

try {
  td.decode(et, {
    stream: true
  });
  tds = 1;
} catch (e) {} // decode UTF8


var dutf8 = function (d) {
  for (var r = '', i = 0;;) {
    var c = d[i++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length) return [r, slc(d, i - 1)];
    if (!eb) r += String.fromCharCode(c);else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1) r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);else r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
  }
};
/**
 * Streaming UTF-8 decoding
 */


var DecodeUTF8 = /*#__PURE__*/function () {
  /**
   * Creates a UTF-8 decoding stream
   * @param cb The callback to call whenever data is decoded
   */
  function DecodeUTF8(cb) {
    this.ondata = cb;
    if (tds) this.t = new TextDecoder();else this.p = et;
  }
  /**
   * Pushes a chunk to be decoded from UTF-8 binary
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  DecodeUTF8.prototype.push = function (chunk, final) {
    if (!this.ondata) err(5);
    final = !!final;

    if (this.t) {
      this.ondata(this.t.decode(chunk, {
        stream: true
      }), final);

      if (final) {
        if (this.t.decode().length) err(8);
        this.t = null;
      }

      return;
    }

    if (!this.p) err(4);
    var dat = new u8(this.p.length + chunk.length);
    dat.set(this.p);
    dat.set(chunk, this.p.length);

    var _a = dutf8(dat),
        ch = _a[0],
        np = _a[1];

    if (final) {
      if (np.length) err(8);
      this.p = null;
    } else this.p = np;

    this.ondata(ch, final);
  };

  return DecodeUTF8;
}();

exports.DecodeUTF8 = DecodeUTF8;

/**
 * Streaming UTF-8 encoding
 */
var EncodeUTF8 = /*#__PURE__*/function () {
  /**
   * Creates a UTF-8 decoding stream
   * @param cb The callback to call whenever data is encoded
   */
  function EncodeUTF8(cb) {
    this.ondata = cb;
  }
  /**
   * Pushes a chunk to be encoded to UTF-8
   * @param chunk The string data to push
   * @param final Whether this is the last chunk
   */


  EncodeUTF8.prototype.push = function (chunk, final) {
    if (!this.ondata) err(5);
    if (this.d) err(4);
    this.ondata(strToU8(chunk), this.d = final || false);
  };

  return EncodeUTF8;
}();

exports.EncodeUTF8 = EncodeUTF8;

/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);

    for (var i = 0; i < str.length; ++i) ar_1[i] = str.charCodeAt(i);

    return ar_1;
  }

  if (te) return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;

  var w = function (v) {
    ar[ai++] = v;
  };

  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }

    var c = str.charCodeAt(i);
    if (c < 128 || latin1) w(c);else if (c < 2048) w(192 | c >> 6), w(128 | c & 63);else if (c > 55295 && c < 57344) c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);else w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
  }

  return slc(ar, 0, ai);
}
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */


function strFromU8(dat, latin1) {
  if (latin1) {
    var r = '';

    for (var i = 0; i < dat.length; i += 16384) r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));

    return r;
  } else if (td) return td.decode(dat);else {
    var _a = dutf8(dat),
        out = _a[0],
        ext = _a[1];

    if (ext.length) err(8);
    return out;
  }
}

; // deflate bit flag

var dbf = function (l) {
  return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0;
}; // skip local zip header


var slzh = function (d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
}; // read zip header


var zh = function (d, b, z) {
  var fnl = b2(d, b + 28),
      fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)),
      es = b + 46 + fnl,
      bs = b4(d, b + 20);

  var _a = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)],
      sc = _a[0],
      su = _a[1],
      off = _a[2];

  return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
}; // read zip64 extra field


var z64e = function (d, b) {
  for (; b2(d, b) != 1; b += 4 + b2(d, b + 2));

  return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
}; // extra field length


var exfl = function (ex) {
  var le = 0;

  if (ex) {
    for (var k in ex) {
      var l = ex[k].length;
      if (l > 65535) err(9);
      le += l + 4;
    }
  }

  return le;
}; // write zip header


var wzh = function (d, b, f, fn, u, c, ce, co) {
  var fl = fn.length,
      ex = f.extra,
      col = co && co.length;
  var exl = exfl(ex);
  wbytes(d, b, ce != null ? 0x2014B50 : 0x4034B50), b += 4;
  if (ce != null) d[b++] = 20, d[b++] = f.os;
  d[b] = 20, b += 2; // spec compliance? what's that?

  d[b++] = f.flag << 1 | (c == null && 8), d[b++] = u && 8;
  d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
  var dt = new Date(f.mtime == null ? Date.now() : f.mtime),
      y = dt.getFullYear() - 1980;
  if (y < 0 || y > 119) err(10);
  wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >>> 1), b += 4;

  if (c != null) {
    wbytes(d, b, f.crc);
    wbytes(d, b + 4, c);
    wbytes(d, b + 8, f.size);
  }

  wbytes(d, b + 12, fl);
  wbytes(d, b + 14, exl), b += 16;

  if (ce != null) {
    wbytes(d, b, col);
    wbytes(d, b + 6, f.attrs);
    wbytes(d, b + 10, ce), b += 14;
  }

  d.set(fn, b);
  b += fl;

  if (exl) {
    for (var k in ex) {
      var exf = ex[k],
          l = exf.length;
      wbytes(d, b, +k);
      wbytes(d, b + 2, l);
      d.set(exf, b + 4), b += 4 + l;
    }
  }

  if (col) d.set(co, b), b += col;
  return b;
}; // write zip footer (end of central directory)


var wzf = function (o, b, c, d, e) {
  wbytes(o, b, 0x6054B50); // skip disk

  wbytes(o, b + 8, c);
  wbytes(o, b + 10, c);
  wbytes(o, b + 12, d);
  wbytes(o, b + 16, e);
};
/**
 * A pass-through stream to keep data uncompressed in a ZIP archive.
 */


var ZipPassThrough = /*#__PURE__*/function () {
  /**
   * Creates a pass-through stream that can be added to ZIP archives
   * @param filename The filename to associate with this data stream
   */
  function ZipPassThrough(filename) {
    this.filename = filename;
    this.c = crc();
    this.size = 0;
    this.compression = 0;
  }
  /**
   * Processes a chunk and pushes to the output stream. You can override this
   * method in a subclass for custom behavior, but by default this passes
   * the data through. You must call this.ondata(err, chunk, final) at some
   * point in this method.
   * @param chunk The chunk to process
   * @param final Whether this is the last chunk
   */


  ZipPassThrough.prototype.process = function (chunk, final) {
    this.ondata(null, chunk, final);
  };
  /**
   * Pushes a chunk to be added. If you are subclassing this with a custom
   * compression algorithm, note that you must push data from the source
   * file only, pre-compression.
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  ZipPassThrough.prototype.push = function (chunk, final) {
    if (!this.ondata) err(5);
    this.c.p(chunk);
    this.size += chunk.length;
    if (final) this.crc = this.c.d();
    this.process(chunk, final || false);
  };

  return ZipPassThrough;
}();

exports.ZipPassThrough = ZipPassThrough;

// I don't extend because TypeScript extension adds 1kB of runtime bloat

/**
 * Streaming DEFLATE compression for ZIP archives. Prefer using AsyncZipDeflate
 * for better performance
 */
var ZipDeflate = /*#__PURE__*/function () {
  /**
   * Creates a DEFLATE stream that can be added to ZIP archives
   * @param filename The filename to associate with this data stream
   * @param opts The compression options
   */
  function ZipDeflate(filename, opts) {
    var _this_1 = this;

    if (!opts) opts = {};
    ZipPassThrough.call(this, filename);
    this.d = new Deflate(opts, function (dat, final) {
      _this_1.ondata(null, dat, final);
    });
    this.compression = 8;
    this.flag = dbf(opts.level);
  }

  ZipDeflate.prototype.process = function (chunk, final) {
    try {
      this.d.push(chunk, final);
    } catch (e) {
      this.ondata(e, null, final);
    }
  };
  /**
   * Pushes a chunk to be deflated
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  ZipDeflate.prototype.push = function (chunk, final) {
    ZipPassThrough.prototype.push.call(this, chunk, final);
  };

  return ZipDeflate;
}();

exports.ZipDeflate = ZipDeflate;

/**
 * Asynchronous streaming DEFLATE compression for ZIP archives
 */
var AsyncZipDeflate = /*#__PURE__*/function () {
  /**
   * Creates a DEFLATE stream that can be added to ZIP archives
   * @param filename The filename to associate with this data stream
   * @param opts The compression options
   */
  function AsyncZipDeflate(filename, opts) {
    var _this_1 = this;

    if (!opts) opts = {};
    ZipPassThrough.call(this, filename);
    this.d = new AsyncDeflate(opts, function (err, dat, final) {
      _this_1.ondata(err, dat, final);
    });
    this.compression = 8;
    this.flag = dbf(opts.level);
    this.terminate = this.d.terminate;
  }

  AsyncZipDeflate.prototype.process = function (chunk, final) {
    this.d.push(chunk, final);
  };
  /**
   * Pushes a chunk to be deflated
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  AsyncZipDeflate.prototype.push = function (chunk, final) {
    ZipPassThrough.prototype.push.call(this, chunk, final);
  };

  return AsyncZipDeflate;
}();

exports.AsyncZipDeflate = AsyncZipDeflate;

// TODO: Better tree shaking

/**
 * A zippable archive to which files can incrementally be added
 */
var Zip = /*#__PURE__*/function () {
  /**
   * Creates an empty ZIP archive to which files can be added
   * @param cb The callback to call whenever data for the generated ZIP archive
   *           is available
   */
  function Zip(cb) {
    this.ondata = cb;
    this.u = [];
    this.d = 1;
  }
  /**
   * Adds a file to the ZIP archive
   * @param file The file stream to add
   */


  Zip.prototype.add = function (file) {
    var _this_1 = this;

    if (!this.ondata) err(5); // finishing or finished

    if (this.d & 2) this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, false);else {
      var f = strToU8(file.filename),
          fl_1 = f.length;
      var com = file.comment,
          o = com && strToU8(com);
      var u = fl_1 != file.filename.length || o && com.length != o.length;
      var hl_1 = fl_1 + exfl(file.extra) + 30;
      if (fl_1 > 65535) this.ondata(err(11, 0, 1), null, false);
      var header = new u8(hl_1);
      wzh(header, 0, file, f, u);
      var chks_1 = [header];

      var pAll_1 = function () {
        for (var _i = 0, chks_2 = chks_1; _i < chks_2.length; _i++) {
          var chk = chks_2[_i];

          _this_1.ondata(null, chk, false);
        }

        chks_1 = [];
      };

      var tr_1 = this.d;
      this.d = 0;
      var ind_1 = this.u.length;
      var uf_1 = mrg(file, {
        f: f,
        u: u,
        o: o,
        t: function () {
          if (file.terminate) file.terminate();
        },
        r: function () {
          pAll_1();

          if (tr_1) {
            var nxt = _this_1.u[ind_1 + 1];
            if (nxt) nxt.r();else _this_1.d = 1;
          }

          tr_1 = 1;
        }
      });
      var cl_1 = 0;

      file.ondata = function (err, dat, final) {
        if (err) {
          _this_1.ondata(err, dat, final);

          _this_1.terminate();
        } else {
          cl_1 += dat.length;
          chks_1.push(dat);

          if (final) {
            var dd = new u8(16);
            wbytes(dd, 0, 0x8074B50);
            wbytes(dd, 4, file.crc);
            wbytes(dd, 8, cl_1);
            wbytes(dd, 12, file.size);
            chks_1.push(dd);
            uf_1.c = cl_1, uf_1.b = hl_1 + cl_1 + 16, uf_1.crc = file.crc, uf_1.size = file.size;
            if (tr_1) uf_1.r();
            tr_1 = 1;
          } else if (tr_1) pAll_1();
        }
      };

      this.u.push(uf_1);
    }
  };
  /**
   * Ends the process of adding files and prepares to emit the final chunks.
   * This *must* be called after adding all desired files for the resulting
   * ZIP file to work properly.
   */


  Zip.prototype.end = function () {
    var _this_1 = this;

    if (this.d & 2) {
      this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, true);
      return;
    }

    if (this.d) this.e();else this.u.push({
      r: function () {
        if (!(_this_1.d & 1)) return;

        _this_1.u.splice(-1, 1);

        _this_1.e();
      },
      t: function () {}
    });
    this.d = 3;
  };

  Zip.prototype.e = function () {
    var bt = 0,
        l = 0,
        tl = 0;

    for (var _i = 0, _a = this.u; _i < _a.length; _i++) {
      var f = _a[_i];
      tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);
    }

    var out = new u8(tl + 22);

    for (var _b = 0, _c = this.u; _b < _c.length; _b++) {
      var f = _c[_b];
      wzh(out, bt, f, f.f, f.u, f.c, l, f.o);
      bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;
    }

    wzf(out, bt, this.u.length, tl, l);
    this.ondata(null, out, true);
    this.d = 2;
  };
  /**
   * A method to terminate any internal workers used by the stream. Subsequent
   * calls to add() will fail.
   */


  Zip.prototype.terminate = function () {
    for (var _i = 0, _a = this.u; _i < _a.length; _i++) {
      var f = _a[_i];
      f.t();
    }

    this.d = 2;
  };

  return Zip;
}();

exports.Zip = Zip;

function zip(data, opts, cb) {
  if (!cb) cb = opts, opts = {};
  if (typeof cb != 'function') err(7);
  var r = {};
  fltn(data, '', r, opts);
  var k = Object.keys(r);
  var lft = k.length,
      o = 0,
      tot = 0;
  var slft = lft,
      files = new Array(lft);
  var term = [];

  var tAll = function () {
    for (var i = 0; i < term.length; ++i) term[i]();
  };

  var cbd = function (a, b) {
    mt(function () {
      cb(a, b);
    });
  };

  mt(function () {
    cbd = cb;
  });

  var cbf = function () {
    var out = new u8(tot + 22),
        oe = o,
        cdl = tot - o;
    tot = 0;

    for (var i = 0; i < slft; ++i) {
      var f = files[i];

      try {
        var l = f.c.length;
        wzh(out, tot, f, f.f, f.u, l);
        var badd = 30 + f.f.length + exfl(f.extra);
        var loc = tot + badd;
        out.set(f.c, loc);
        wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;
      } catch (e) {
        return cbd(e, null);
      }
    }

    wzf(out, o, files.length, cdl, oe);
    cbd(null, out);
  };

  if (!lft) cbf();

  var _loop_1 = function (i) {
    var fn = k[i];
    var _a = r[fn],
        file = _a[0],
        p = _a[1];
    var c = crc(),
        size = file.length;
    c.p(file);
    var f = strToU8(fn),
        s = f.length;
    var com = p.comment,
        m = com && strToU8(com),
        ms = m && m.length;
    var exl = exfl(p.extra);
    var compression = p.level == 0 ? 0 : 8;

    var cbl = function (e, d) {
      if (e) {
        tAll();
        cbd(e, null);
      } else {
        var l = d.length;
        files[i] = mrg(p, {
          size: size,
          crc: c.d(),
          c: d,
          f: f,
          m: m,
          u: s != fn.length || m && com.length != ms,
          compression: compression
        });
        o += 30 + s + exl + l;
        tot += 76 + 2 * (s + exl) + (ms || 0) + l;
        if (! --lft) cbf();
      }
    };

    if (s > 65535) cbl(err(11, 0, 1), null);
    if (!compression) cbl(null, file);else if (size < 160000) {
      try {
        cbl(null, deflateSync(file, p));
      } catch (e) {
        cbl(e, null);
      }
    } else term.push(deflate(file, p, cbl));
  }; // Cannot use lft because it can decrease


  for (var i = 0; i < slft; ++i) {
    _loop_1(i);
  }

  return tAll;
}
/**
 * Synchronously creates a ZIP file. Prefer using `zip` for better performance
 * with more than one file.
 * @param data The directory structure for the ZIP archive
 * @param opts The main options, merged with per-file options
 * @returns The generated ZIP archive
 */


function zipSync(data, opts) {
  if (!opts) opts = {};
  var r = {};
  var files = [];
  fltn(data, '', r, opts);
  var o = 0;
  var tot = 0;

  for (var fn in r) {
    var _a = r[fn],
        file = _a[0],
        p = _a[1];
    var compression = p.level == 0 ? 0 : 8;
    var f = strToU8(fn),
        s = f.length;
    var com = p.comment,
        m = com && strToU8(com),
        ms = m && m.length;
    var exl = exfl(p.extra);
    if (s > 65535) err(11);
    var d = compression ? deflateSync(file, p) : file,
        l = d.length;
    var c = crc();
    c.p(file);
    files.push(mrg(p, {
      size: file.length,
      crc: c.d(),
      c: d,
      f: f,
      m: m,
      u: s != fn.length || m && com.length != ms,
      o: o,
      compression: compression
    }));
    o += 30 + s + exl + l;
    tot += 76 + 2 * (s + exl) + (ms || 0) + l;
  }

  var out = new u8(tot + 22),
      oe = o,
      cdl = tot - o;

  for (var i = 0; i < files.length; ++i) {
    var f = files[i];
    wzh(out, f.o, f, f.f, f.u, f.c.length);
    var badd = 30 + f.f.length + exfl(f.extra);
    out.set(f.c, f.o + badd);
    wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
  }

  wzf(out, o, files.length, cdl, oe);
  return out;
}
/**
 * Streaming pass-through decompression for ZIP archives
 */


var UnzipPassThrough = /*#__PURE__*/function () {
  function UnzipPassThrough() {}

  UnzipPassThrough.prototype.push = function (data, final) {
    this.ondata(null, data, final);
  };

  UnzipPassThrough.compression = 0;
  return UnzipPassThrough;
}();

exports.UnzipPassThrough = UnzipPassThrough;

/**
 * Streaming DEFLATE decompression for ZIP archives. Prefer AsyncZipInflate for
 * better performance.
 */
var UnzipInflate = /*#__PURE__*/function () {
  /**
   * Creates a DEFLATE decompression that can be used in ZIP archives
   */
  function UnzipInflate() {
    var _this_1 = this;

    this.i = new Inflate(function (dat, final) {
      _this_1.ondata(null, dat, final);
    });
  }

  UnzipInflate.prototype.push = function (data, final) {
    try {
      this.i.push(data, final);
    } catch (e) {
      this.ondata(e, null, final);
    }
  };

  UnzipInflate.compression = 8;
  return UnzipInflate;
}();

exports.UnzipInflate = UnzipInflate;

/**
 * Asynchronous streaming DEFLATE decompression for ZIP archives
 */
var AsyncUnzipInflate = /*#__PURE__*/function () {
  /**
   * Creates a DEFLATE decompression that can be used in ZIP archives
   */
  function AsyncUnzipInflate(_, sz) {
    var _this_1 = this;

    if (sz < 320000) {
      this.i = new Inflate(function (dat, final) {
        _this_1.ondata(null, dat, final);
      });
    } else {
      this.i = new AsyncInflate(function (err, dat, final) {
        _this_1.ondata(err, dat, final);
      });
      this.terminate = this.i.terminate;
    }
  }

  AsyncUnzipInflate.prototype.push = function (data, final) {
    if (this.i.terminate) data = slc(data, 0);
    this.i.push(data, final);
  };

  AsyncUnzipInflate.compression = 8;
  return AsyncUnzipInflate;
}();

exports.AsyncUnzipInflate = AsyncUnzipInflate;

/**
 * A ZIP archive decompression stream that emits files as they are discovered
 */
var Unzip = /*#__PURE__*/function () {
  /**
   * Creates a ZIP decompression stream
   * @param cb The callback to call whenever a file in the ZIP archive is found
   */
  function Unzip(cb) {
    this.onfile = cb;
    this.k = [];
    this.o = {
      0: UnzipPassThrough
    };
    this.p = et;
  }
  /**
   * Pushes a chunk to be unzipped
   * @param chunk The chunk to push
   * @param final Whether this is the last chunk
   */


  Unzip.prototype.push = function (chunk, final) {
    var _this_1 = this;

    if (!this.onfile) err(5);
    if (!this.p) err(4);

    if (this.c > 0) {
      var len = Math.min(this.c, chunk.length);
      var toAdd = chunk.subarray(0, len);
      this.c -= len;
      if (this.d) this.d.push(toAdd, !this.c);else this.k[0].push(toAdd);
      chunk = chunk.subarray(len);
      if (chunk.length) return this.push(chunk, final);
    } else {
      var f = 0,
          i = 0,
          is = void 0,
          buf = void 0;
      if (!this.p.length) buf = chunk;else if (!chunk.length) buf = this.p;else {
        buf = new u8(this.p.length + chunk.length);
        buf.set(this.p), buf.set(chunk, this.p.length);
      }
      var l = buf.length,
          oc = this.c,
          add = oc && this.d;

      var _loop_2 = function () {
        var _a;

        var sig = b4(buf, i);

        if (sig == 0x4034B50) {
          f = 1, is = i;
          this_1.d = null;
          this_1.c = 0;
          var bf = b2(buf, i + 6),
              cmp_1 = b2(buf, i + 8),
              u = bf & 2048,
              dd = bf & 8,
              fnl = b2(buf, i + 26),
              es = b2(buf, i + 28);

          if (l > i + 30 + fnl + es) {
            var chks_3 = [];
            this_1.k.unshift(chks_3);
            f = 2;
            var sc_1 = b4(buf, i + 18),
                su_1 = b4(buf, i + 22);
            var fn_1 = strFromU8(buf.subarray(i + 30, i += 30 + fnl), !u);

            if (sc_1 == 4294967295) {
              _a = dd ? [-2] : z64e(buf, i), sc_1 = _a[0], su_1 = _a[1];
            } else if (dd) sc_1 = -1;

            i += es;
            this_1.c = sc_1;
            var d_1;
            var file_1 = {
              name: fn_1,
              compression: cmp_1,
              start: function () {
                if (!file_1.ondata) err(5);
                if (!sc_1) file_1.ondata(null, et, true);else {
                  var ctr = _this_1.o[cmp_1];
                  if (!ctr) file_1.ondata(err(14, 'unknown compression type ' + cmp_1, 1), null, false);
                  d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);

                  d_1.ondata = function (err, dat, final) {
                    file_1.ondata(err, dat, final);
                  };

                  for (var _i = 0, chks_4 = chks_3; _i < chks_4.length; _i++) {
                    var dat = chks_4[_i];
                    d_1.push(dat, false);
                  }

                  if (_this_1.k[0] == chks_3 && _this_1.c) _this_1.d = d_1;else d_1.push(et, true);
                }
              },
              terminate: function () {
                if (d_1 && d_1.terminate) d_1.terminate();
              }
            };
            if (sc_1 >= 0) file_1.size = sc_1, file_1.originalSize = su_1;
            this_1.onfile(file_1);
          }

          return "break";
        } else if (oc) {
          if (sig == 0x8074B50) {
            is = i += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;
            return "break";
          } else if (sig == 0x2014B50) {
            is = i -= 4, f = 3, this_1.c = 0;
            return "break";
          }
        }
      };

      var this_1 = this;

      for (; i < l - 4; ++i) {
        var state_1 = _loop_2();

        if (state_1 === "break") break;
      }

      this.p = et;

      if (oc < 0) {
        var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 0x8074B50 && 4)) : buf.subarray(0, i);
        if (add) add.push(dat, !!f);else this.k[+(f == 2)].push(dat);
      }

      if (f & 2) return this.push(buf.subarray(i), final);
      this.p = buf.subarray(i);
    }

    if (final) {
      if (this.c) err(13);
      this.p = null;
    }
  };
  /**
   * Registers a decoder with the stream, allowing for files compressed with
   * the compression type provided to be expanded correctly
   * @param decoder The decoder constructor
   */


  Unzip.prototype.register = function (decoder) {
    this.o[decoder.compression] = decoder;
  };

  return Unzip;
}();

exports.Unzip = Unzip;
var mt = typeof queueMicrotask == 'function' ? queueMicrotask : typeof setTimeout == 'function' ? setTimeout : function (fn) {
  fn();
};

function unzip(data, opts, cb) {
  if (!cb) cb = opts, opts = {};
  if (typeof cb != 'function') err(7);
  var term = [];

  var tAll = function () {
    for (var i = 0; i < term.length; ++i) term[i]();
  };

  var files = {};

  var cbd = function (a, b) {
    mt(function () {
      cb(a, b);
    });
  };

  mt(function () {
    cbd = cb;
  });
  var e = data.length - 22;

  for (; b4(data, e) != 0x6054B50; --e) {
    if (!e || data.length - e > 65558) {
      cbd(err(13, 0, 1), null);
      return tAll;
    }
  }

  ;
  var lft = b2(data, e + 8);

  if (lft) {
    var c = lft;
    var o = b4(data, e + 16);
    var z = o == 4294967295;

    if (z) {
      e = b4(data, e - 12);

      if (b4(data, e) != 0x6064B50) {
        cbd(err(13, 0, 1), null);
        return tAll;
      }

      c = lft = b4(data, e + 32);
      o = b4(data, e + 48);
    }

    var fltr = opts && opts.filter;

    var _loop_3 = function (i) {
      var _a = zh(data, o, z),
          c_1 = _a[0],
          sc = _a[1],
          su = _a[2],
          fn = _a[3],
          no = _a[4],
          off = _a[5],
          b = slzh(data, off);

      o = no;

      var cbl = function (e, d) {
        if (e) {
          tAll();
          cbd(e, null);
        } else {
          if (d) files[fn] = d;
          if (! --lft) cbd(null, files);
        }
      };

      if (!fltr || fltr({
        name: fn,
        size: sc,
        originalSize: su,
        compression: c_1
      })) {
        if (!c_1) cbl(null, slc(data, b, b + sc));else if (c_1 == 8) {
          var infl = data.subarray(b, b + sc);

          if (sc < 320000) {
            try {
              cbl(null, inflateSync(infl, new u8(su)));
            } catch (e) {
              cbl(e, null);
            }
          } else term.push(inflate(infl, {
            size: su
          }, cbl));
        } else cbl(err(14, 'unknown compression type ' + c_1, 1), null);
      } else cbl(null, null);
    };

    for (var i = 0; i < c; ++i) {
      _loop_3(i);
    }
  } else cbd(null, {});

  return tAll;
}
/**
 * Synchronously decompresses a ZIP archive. Prefer using `unzip` for better
 * performance with more than one file.
 * @param data The raw compressed ZIP file
 * @param opts The ZIP extraction options
 * @returns The decompressed files
 */


function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;

  for (; b4(data, e) != 0x6054B50; --e) {
    if (!e || data.length - e > 65558) err(13);
  }

  ;
  var c = b2(data, e + 8);
  if (!c) return {};
  var o = b4(data, e + 16);
  var z = o == 4294967295;

  if (z) {
    e = b4(data, e - 12);
    if (b4(data, e) != 0x6064B50) err(13);
    c = b4(data, e + 32);
    o = b4(data, e + 48);
  }

  var fltr = opts && opts.filter;

  for (var i = 0; i < c; ++i) {
    var _a = zh(data, o, z),
        c_2 = _a[0],
        sc = _a[1],
        su = _a[2],
        fn = _a[3],
        no = _a[4],
        off = _a[5],
        b = slzh(data, off);

    o = no;

    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2) files[fn] = slc(data, b, b + sc);else if (c_2 == 8) files[fn] = inflateSync(data.subarray(b, b + sc), new u8(su));else err(14, 'unknown compression type ' + c_2);
    }
  }

  return files;
}
},{}],"../src/rrweb/packer/base.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MARK = void 0;
var MARK = 'v1';
exports.MARK = MARK;
},{}],"../src/rrweb/packer/pack.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pack = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fflate = require("fflate");

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var pack = function pack(event) {
  var _e = _objectSpread(_objectSpread({}, event), {}, {
    v: _base.MARK
  });

  return (0, _fflate.strFromU8)((0, _fflate.zlibSync)((0, _fflate.strToU8)(JSON.stringify(_e))), true);
};

exports.pack = pack;
},{"@babel/runtime/helpers/defineProperty":"../node_modules/@babel/runtime/helpers/defineProperty.js","fflate":"../node_modules/fflate/esm/browser.js","./base":"../src/rrweb/packer/base.ts"}],"../src/rrweb/packer/unpack.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unpack = void 0;

var _fflate = require("fflate");

var _base = require("./base");

var unpack = function unpack(raw) {
  if (typeof raw !== 'string') {
    return raw;
  }

  try {
    var e = JSON.parse(raw);

    if (e.timestamp) {
      return e;
    }
  } catch (error) {// ignore and continue
  }

  try {
    var _e = JSON.parse((0, _fflate.strFromU8)((0, _fflate.unzlibSync)((0, _fflate.strToU8)(raw, true))));

    if (_e.v === _base.MARK) {
      return _e;
    }

    throw new Error("These events were packed with packer ".concat(_e.v, " which is incompatible with current packer ").concat(_base.MARK, "."));
  } catch (error) {
    console.error(error);
    throw new Error('Unknown data format.');
  }
};

exports.unpack = unpack;
},{"fflate":"../node_modules/fflate/esm/browser.js","./base":"../src/rrweb/packer/base.ts"}],"../src/rrweb/packer/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pack", {
  enumerable: true,
  get: function () {
    return _pack.pack;
  }
});
Object.defineProperty(exports, "unpack", {
  enumerable: true,
  get: function () {
    return _unpack.unpack;
  }
});

var _pack = require("./pack");

var _unpack = require("./unpack");
},{"./pack":"../src/rrweb/packer/pack.ts","./unpack":"../src/rrweb/packer/unpack.ts"}],"../src/error-trace/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _types = require("../types/types");

var _config = require("../config/config");

var _constants = require("../constants");

var _record = _interopRequireDefault(require("../rrweb/record"));

var _packer = require("../rrweb/packer");

var _console = require("../utils/console");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Error Trap
 */
var ErrorTrace = /*#__PURE__*/function () {
  function ErrorTrace() {
    var _this = this;

    (0, _classCallCheck2.default)(this, ErrorTrace);
    this.eventsMatrix = [[]];
    this.globalErrorTrace();
    this.networkErrorTrace();
    this.promiseErrorTrace();
    this.iframeErrorTrace();
    (0, _record.default)(_objectSpread(_objectSpread({}, _config.config.recordOptions), {}, {
      emit: function emit(event, isCheckout) {
        if (isCheckout) {
          _this.eventsMatrix.push([]);
        }

        var lastEvents = _this.eventsMatrix[_this.eventsMatrix.length - 1];
        lastEvents.push(event);
      },
      recordLog: false,
      checkoutEveryNth: 10,
      packFn: _packer.pack
    }));
  }

  (0, _createClass2.default)(ErrorTrace, [{
    key: "globalErrorTrace",
    value:
    /**
     * Globally catch synchronous or asynchronous errors
     * 捕获异常的能力比try-catch稍微强点，无论是异步还是非异步，onerror都能捕获到运行时错误，返回true就不回报红
     * 当时当<img src="" />这种情况是捕获不到的
     * 使用未使用的变量
     */
    function globalErrorTrace() {
      var _this2 = this;

      _constants.W.onerror = function (event, source, lineno, colno, error) {
        (0, _console.warn)({
          source: source,
          lineno: lineno,
          colno: colno,
          error: error
        });
        var len = _this2.eventsMatrix.length;

        if (_config.config.errEventRoute && len >= 2) {
          var _config$reportData;

          var events = _this2.eventsMatrix[len - 2].concat(_this2.eventsMatrix[len - 1]);

          (_config$reportData = _config.config.reportData) === null || _config$reportData === void 0 ? void 0 : _config$reportData.fetch(_types.AskLevel.IDLE, JSON.stringify({
            events: events
          }), _config.config.errEventRoute);
        }

        if (_config.config.errLogRoute) {
          var _config$reportData2;

          (_config$reportData2 = _config.config.reportData) === null || _config$reportData2 === void 0 ? void 0 : _config$reportData2.fetch(_types.AskLevel.IDLE, JSON.stringify({
            source: source,
            lineno: lineno,
            colno: colno,
            error: JSON.stringify({
              message: error === null || error === void 0 ? void 0 : error.message,
              stack: error === null || error === void 0 ? void 0 : error.stack,
              name: error === null || error === void 0 ? void 0 : error.name
            })
          }), _config.config.errLogRoute);
        }

        return true;
      };
    }
    /**
     * Catch network errors
     * 图片加载失败等
     */

  }, {
    key: "networkErrorTrace",
    value: function networkErrorTrace() {
      _constants.W.addEventListener("error", function (e) {
        if (e.target !== _constants.W) {
          (0, _console.warn)(e.target);
        }
      }, true);
    }
    /**
     * Catching Promise errors
     */

  }, {
    key: "promiseErrorTrace",
    value: function promiseErrorTrace() {
      window.addEventListener("unhandledrejection", function (e) {
        e.preventDefault();
        (0, _console.warn)(e.reason);
        return true;
      });
    }
  }, {
    key: "iframeErrorTrace",
    value: function iframeErrorTrace() {
      var frames = _constants.W.frames;

      for (var i = 0; i < frames.length; i++) {
        frames[i].addEventListener("error", function (e) {
          (0, _console.warn)(e);
        }, true);
        frames[i].addEventListener("unhandledrejection", function (e) {
          (0, _console.warn)(e);
        }, true);
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new ErrorTrace();
      }

      return this.instance;
    }
  }]);
  return ErrorTrace;
}();

exports.default = ErrorTrace;
ErrorTrace.instance = null;
},{"@babel/runtime/helpers/defineProperty":"../node_modules/@babel/runtime/helpers/defineProperty.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","../types/types":"../src/types/types.ts","../config/config":"../src/config/config.ts","../constants":"../src/constants.ts","../rrweb/record":"../src/rrweb/record/index.ts","../rrweb/packer":"../src/rrweb/packer/index.ts","../utils/console":"../src/utils/console.ts"}],"../src/utils/ReportData.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _types = require("../types/types");

var _constants = require("../constants");

var _config = require("../config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Log collection
 * 日志收集
 */
var ReportData = /*#__PURE__*/function () {
  function ReportData() {
    (0, _classCallCheck2.default)(this, ReportData);
  }

  (0, _createClass2.default)(ReportData, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2, _x3) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(
    /**
     * Log report, error report
     * If the level is urgent, use http request directly, otherwise use navigator.sendBeacon
     * 日志上报、错误上报
     * 如果level很紧急，直接使用http请求，否者使用navigator.sendBeacon
     * @param level
     * @param body
     * @param uri
     */
    function (level, body, uri) {
      uri = _config.config.fetchDomain + uri;

      switch (level) {
        case _types.AskLevel.URGENT:
          {
            if (!!_constants.W.fetch) {
              fetch(uri, {
                body: body,
                method: "POST",
                keepalive: true
              });
            } else {
              var xhr = new XMLHttpRequest();
              xhr.open("post", uri, true);
              xhr.setRequestHeader("Content-Type", "application/json");
              xhr.send(body);

              xhr.onload = function () {
                return xhr = null;
              }; // 防止内存泄漏

            }

            return;
          }

        default:
          if (!!_constants.WN.sendBeacon) {
            navigator.sendBeacon(uri, body);
          } else {
            var image = new Image();
            image.src = "".concat(uri, "?body=").concat(body);

            image.onload = function () {
              return image = null;
            }; // 防止内存泄漏

          }

      }
    })
  }]);
  return ReportData;
}();

exports.default = ReportData;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","../types/types":"../src/types/types.ts","../constants":"../src/constants.ts","../config/config":"../src/config/config.ts"}],"../node_modules/@babel/runtime/helpers/asyncToGenerator.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],"../node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"../node_modules/@babel/runtime/regenerator/index.js":[function(require,module,exports) {
module.exports = require("regenerator-runtime");
},{"regenerator-runtime":"../node_modules/regenerator-runtime/runtime.js"}],"../src/utils/helper.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushTask = exports.roundByTwo = exports.bytes2kb = exports.isPerformanceSupported = void 0;

var _constants = require("../constants");

/**
 * Determine whether the browser supports getEntriesByType
 * @returns
 */
var isPerformanceSupported = function isPerformanceSupported() {
  return _constants.WP && !!_constants.WP.getEntriesByType && !!_constants.WP.now && !!_constants.WP.mark;
};
/**
 * bytes to kb
 * @param {number} bytes
 */


exports.isPerformanceSupported = isPerformanceSupported;

var bytes2kb = function bytes2kb(bytes) {
  return parseFloat((bytes / Math.pow(1024, 2)).toFixed(2));
};
/**
 * Keep two decimal places
 * @param {number} num
 * @returns
 */


exports.bytes2kb = bytes2kb;

var roundByTwo = function roundByTwo(num) {
  return parseFloat(num.toFixed(2));
};
/**
 * PushTask to requestIdleCallback
 * Efficient use of each frame for data collection
 * @param {() => void} callback
 */


exports.roundByTwo = roundByTwo;

var pushTask = function pushTask(callback) {
  if ("requestIdleCallback" in _constants.W) {
    _constants.W.requestIdleCallback(callback, {
      timeout: 3000
    });
  } else {
    callback();
  }
};

exports.pushTask = pushTask;
},{"../constants":"../src/constants.ts"}],"../src/performance/record-storage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recordingStorage = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _helper = require("../utils/helper");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * Record local cache information
*/
var recordingStorage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var _yield$WN$storage$est, quota, usage, usageDetails, res;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_constants.WN.storage) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", {
              usageDetails: {}
            });

          case 2:
            _context.next = 4;
            return _constants.WN.storage.estimate();

          case 4:
            _yield$WN$storage$est = _context.sent;
            quota = _yield$WN$storage$est.quota;
            usage = _yield$WN$storage$est.usage;
            usageDetails = _yield$WN$storage$est.usageDetails;
            res = {
              quota: (0, _helper.bytes2kb)(quota || 0),
              usage: (0, _helper.bytes2kb)(usage || 0),
              usageDetails: usageDetails
            };

            if (res.usageDetails) {
              Object.keys(res.usageDetails || {}).forEach(function (key) {
                return res.usageDetails[key] = (0, _helper.bytes2kb)(res.usageDetails[key]);
              });
            }

            return _context.abrupt("return", res);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function recordingStorage() {
    return _ref.apply(this, arguments);
  };
}();

exports.recordingStorage = recordingStorage;
},{"@babel/runtime/helpers/asyncToGenerator":"../node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/regenerator":"../node_modules/@babel/runtime/regenerator/index.js","../utils/helper":"../src/utils/helper.ts","../constants":"../src/constants.ts"}],"../package.json":[function(require,module,exports) {
module.exports = {
  "name": "mini-pm",
  "version": "1.0.8",
  "description": "一款mini性能优化监控平台",
  "source": "src/index.ts",
  "main": "dist/mini-pm.js",
  "exports": "./dist/mini-pm.modern.js",
  "module": "dist/mini-pm.module.js",
  "types": "dist/typings/index.d.ts",
  "unpkg": "dist/mini-pm.umd.js",
  "files": ["dist"],
  "scripts": {
    "build": "node ./scripts/build.js",
    "dev": "microbundle watch",
    "example": "parcel serve ./examples/index.html -p 12345",
    "api:init": "api-extractor init",
    "api:run": "api-extractor run --local --verbose",
    "api:doc": "typedoc --out docs src",
    "publish": "node ./scripts/publish.js",
    "test": "node ./scripts/sonar.js",
    "precommit": "node ./scripts/precommit.js"
  },
  "devDependencies": {
    "@babel/core": "^7.14.0",
    "@babel/plugin-transform-runtime": "^7.13.15",
    "@microsoft/api-extractor": "^7.15.2",
    "@types/css-font-loading-module": "^0.0.4",
    "chalk": "^4.1.1",
    "git-webhook-handler": "^1.0.6",
    "husky": "^6.0.0",
    "microbundle": "^0.13.0",
    "mvdir": "^1.0.21",
    "ora": "^5.4.1",
    "parcel-bundler": "^1.12.5",
    "rimraf": "^3.0.2",
    "scripty": "^2.0.0",
    "shelljs": "^0.8.4",
    "typedoc": "^0.20.36",
    "typescript": "4.2",
    "yargs": "^17.0.1"
  },
  "dependencies": {
    "fflate": "^0.7.0",
    "performance": "^1.4.0",
    "src": "^1.1.2",
    "types": "^0.1.1"
  },
  "husky": {
    "husky": {
      "pre-commit": "npm run precommit"
    }
  }
};
},{}],"../src/performance/record-client-navigator.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recordClientNavigator = exports.saveData = exports.effectiveType = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _constants = require("../constants");

var _helper = require("../utils/helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var effectiveType = "4g";
exports.effectiveType = effectiveType;
var saveData = false;
/**
   * Get user's browser information, internet speed and other information
   * Calculating network speed formula
   * T1 = DNS + New Connection(TCP) + RTT(One-time transmission)
   * T2 = New Connection(TCP) + RTT(One-time transmission)
   * T3 = RTT(One-time transmission)
   * bandwidth = (100k-50k)/(t5-t4)
   * @return {NavigatorOpt}
   */

exports.saveData = saveData;

var recordClientNavigator = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve) {
              var res = {};

              if ("connection" in _constants.WN) {
                res.connection = {
                  downlink: _constants.WN.connection.downlink,
                  effectiveType: _constants.WN.connection.effectiveType,
                  rtt: _constants.WN.connection.rtt,
                  saveData: _constants.WN.connection.saveData
                };
                exports.saveData = saveData = res.connection.saveData || saveData;
                exports.effectiveType = effectiveType = res.connection.effectiveType || effectiveType;
              } // Doppler Velocity


              // Doppler Velocity
              if ("fetch" in window) {
                (0, _helper.pushTask)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
                  var times, sizes, _i, _sizes, size;

                  return _regenerator.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          times = [];
                          sizes = [0, 0, 0, 50, 100];
                          times.push(+new Date());
                          _i = 0, _sizes = sizes;

                        case 4:
                          if (!(_i < _sizes.length)) {
                            _context.next = 12;
                            break;
                          }

                          size = _sizes[_i];
                          _context.next = 8;
                          return fetch("http://performance-monitoring.zhourengui.top/performance-monitoring/doppler-velocity?size=".concat(size));

                        case 8:
                          times.push(+new Date());

                        case 9:
                          _i++;
                          _context.next = 4;
                          break;

                        case 12:
                          res.connection.bandwidth = "".concat(((sizes[4] - sizes[3]) / ((times[5] - times[4]) / 1000)).toFixed(2), " k/s");
                          resolve(res);

                        case 14:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })));
              }

              res.userAgent = _constants.WN.userAgent;
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function recordClientNavigator() {
    return _ref.apply(this, arguments);
  };
}();

exports.recordClientNavigator = recordClientNavigator;
},{"@babel/runtime/helpers/asyncToGenerator":"../node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/regenerator":"../node_modules/@babel/runtime/regenerator/index.js","../constants":"../src/constants.ts","../utils/helper":"../src/utils/helper.ts"}],"../src/performance/record-timing.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recordTiming = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _constants = require("../constants");

var _helper = require("../utils/helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * Navigation Timing API provides performance metrics for HTML documents.
  * w3c.github.io/navigation-timing/
  * developers.google.com/web/fundamentals/performance/navigation-and-resource-timing
  */
var recordTiming = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var res, n, responseEnd, responseStart, requestStart;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = {};

            if ((0, _helper.isPerformanceSupported)()) {
              // There is an open issue to type correctly getEntriesByType
              // github.com/microsoft/TypeScript/issues/33866
              n = _constants.WP.getEntriesByType("navigation")[0];

              if (n) {
                responseEnd = n.responseEnd;
                responseStart = n.responseStart;
                requestStart = n.requestStart;
                res = {
                  // fetchStart marks when the browser starts to fetch a resource
                  // responseEnd is when the last byte of the response arrives
                  fetchTime: responseEnd - n.fetchStart,
                  // Service worker time plus response time
                  workerTime: responseEnd - n.workerStart,
                  // Request plus response time (network only)
                  networkTime: responseEnd - requestStart,
                  // Response time only (download)
                  downloadTime: responseEnd - responseStart,
                  // Time to First Byte (TTFB)
                  timeToFirstByte: responseStart - requestStart,
                  // HTTP header size
                  headerSize: n.decodedBodySize - n.transferSize || 0,
                  // DNS Lookup Time
                  dnsLookupTime: n.domainLookupStart - n.domainLookupEnd,
                  // TCP time
                  tcpTime: n.connectStart - n.connectEnd || 0,
                  // First paint
                  firstPaintTime: responseEnd - responseStart || 0,
                  // Dom Parse Time
                  domParseTime: n.domComplete - n.domInteractive,
                  // Dom Render Time
                  domRenderTime: n.domContentLoadedEventEnd - n.domContentLoadedEventStart || 0,
                  // onload time
                  onloadTime: n.loadEventEnd - n.loadEventStart
                };
              }
            }

            return _context.abrupt("return", res);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function recordTiming() {
    return _ref.apply(this, arguments);
  };
}();

exports.recordTiming = recordTiming;
},{"@babel/runtime/helpers/asyncToGenerator":"../node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/regenerator":"../node_modules/@babel/runtime/regenerator/index.js","../constants":"../src/constants.ts","../utils/helper":"../src/utils/helper.ts"}],"../src/utils/navigator-information.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNavigatorInformation = exports.isLowEndExperience = exports.isLowEndDevice = void 0;

var _constants = require("../constants");

var _recordClientNavigator = require("../performance/record-client-navigator");

var isLowEndDevice = function isLowEndDevice() {
  return _constants.WN.deviceMemory <= 4 || _constants.WN.hardwareConcurrency <= 4;
};

exports.isLowEndDevice = isLowEndDevice;

var isLowEndExperience = function isLowEndExperience(effectiveType, saveData) {
  if (["slow-2g", "2g", "3g"].includes(effectiveType)) {
    return true;
  }

  return isLowEndDevice() || saveData;
};
/**
 * 信息来源于 window.navigator:
 * 1. Device Memory 设备内存
 * 2. Hardware Concurency 并发数
 * 3. Status of the service worker:
 *     - controlled: a service worker is controlling the page
 *     - supported: the browser supports service worker
 *     - unsupported: the user's browser does not support service worker
 */


exports.isLowEndExperience = isLowEndExperience;

var getNavigatorInformation = function getNavigatorInformation() {
  if (_constants.WN) {
    var _WN$serviceWorker;

    return {
      deviceMemory: _constants.WN.deviceMemory || 0,
      hardwareConcurrency: _constants.WN.hardwareConcurrency || 0,
      serviceWorkerStatus: 'serviceWorker' in _constants.WN ? (_WN$serviceWorker = _constants.WN.serviceWorker) !== null && _WN$serviceWorker !== void 0 && _WN$serviceWorker.controller ? "controlled" : "supported" : "unsupported",
      isLowEndDevice: isLowEndDevice(),
      isLowEndExperience: isLowEndExperience(_recordClientNavigator.effectiveType, _recordClientNavigator.saveData)
    };
  }
};

exports.getNavigatorInformation = getNavigatorInformation;
},{"../constants":"../src/constants.ts","../performance/record-client-navigator":"../src/performance/record-client-navigator.ts"}],"../src/utils/vitals-score.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVitalsScore = exports.webVitalsScore = void 0;

/**
 * https://web.dev/vitals/
 * https://web.dev/cls/
 */
var fcpScore = [1000, 2500];
var lcpScore = [2500, 4000];
var fidcore = [100, 300];
var clsScore = [0.1, 0.25];
var tbtScore = [300, 600];
var webVitalsScore = {
  fp: fcpScore,
  fcp: fcpScore,
  lcp: lcpScore,
  lcpFinal: lcpScore,
  fid: fidcore,
  fidVitals: fidcore,
  cls: clsScore,
  clsFinal: clsScore,
  tbt: tbtScore,
  tbt5S: tbtScore,
  tbt10S: tbtScore,
  tbtFinal: tbtScore
};
exports.webVitalsScore = webVitalsScore;

var getVitalsScore = function getVitalsScore(measureName, value) {
  if (!webVitalsScore[measureName]) {
    return null;
  }

  if (value <= webVitalsScore[measureName][0]) {
    return "good";
  }

  return value <= webVitalsScore[measureName][1] ? "needsImprovement" : "poor";
};

exports.getVitalsScore = getVitalsScore;
},{}],"../src/utils/report-performance.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportPerformance = void 0;

var _config = require("../config/config");

var _constants = require("../constants");

var _helper = require("./helper");

var _navigatorInformation = require("./navigator-information");

var _vitalsScore = require("./vitals-score");

/**
 * Sends the User timing measure to analyticsTracker
 * Do not report specific data when the page is hidden
 * @param {string} measureName
 * @param {number} duration
 * @param {object} eventProperties
 */
var reportPerformance = function reportPerformance(data, measureName, eventProperties) {
  (0, _helper.pushTask)(function () {
    if (_constants.D.visibilityState === "hidden" && !measureName.includes("Final") || !_config.config.analyticsTracker) return;

    _config.config.analyticsTracker({
      metricName: measureName,
      data: data,
      eventProperties: eventProperties,
      navigatorInformation: (0, _navigatorInformation.getNavigatorInformation)(),
      vitalsScore: (0, _vitalsScore.getVitalsScore)(measureName, data)
    });
  });
};

exports.reportPerformance = reportPerformance;
},{"../config/config":"../src/config/config.ts","../constants":"../src/constants.ts","./helper":"../src/utils/helper.ts","./navigator-information":"../src/utils/navigator-information.ts","./vitals-score":"../src/utils/vitals-score.ts"}],"../src/utils/log.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logMetric = exports.logData = void 0;

var _config = require("../config/config");

var _helper = require("./helper");

var _reportPerformance = require("./report-performance");

/**
 * Sends the metric to an external tracking service
 * 将指标发送到外部跟踪服务
 * @param {string} measureName
 * @param {{[key: string]: any}} metric
 * @param {object} customProperties
 */
var logData = function logData(measureName, metric, customProperties) {
  Object.keys(metric).forEach(function (key) {
    if (typeof metric[key] === 'number') {
      metric[key] = (0, _helper.roundByTwo)(metric[key]);
    }
  });
  (0, _reportPerformance.reportPerformance)(metric, measureName, customProperties);
};
/**
 * Dispatches the metric duration into internal logs
 * and the external time tracking service.
 * @param {string} measureName
 * @param {number} duration
 * @param {object} customProperties
 */


exports.logData = logData;

var logMetric = function logMetric(measureName, duration, customProperties) {
  var duration2decimal = (0, _helper.roundByTwo)(duration);

  if (duration2decimal <= _config.config.maxTime) {
    (0, _reportPerformance.reportPerformance)(duration, measureName, customProperties);
  }
};

exports.logMetric = logMetric;
},{"../config/config":"../src/config/config.ts","./helper":"../src/utils/helper.ts","./report-performance":"../src/utils/report-performance.ts"}],"../src/utils/metrics.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cls = exports.rt = exports.lcp = exports.tbt = exports.fcp = exports.fp = void 0;
// first-pait
var fp = {
  value: 0
}; // first-contentful-paint

exports.fp = fp;
var fcp = {
  value: 0
}; // block-time

exports.fcp = fcp;
var tbt = {
  value: 0
}; // largest-contentful-paint

exports.tbt = tbt;
var lcp = {
  value: 0
}; // resource-time

exports.lcp = lcp;
var rt = {
  value: {
    beacon: 0,
    css: 0,
    fetch: 0,
    img: 0,
    other: 0,
    script: 0,
    total: 0,
    xmlhttprequest: 0
  }
}; // cumulative-layout-shift

exports.rt = rt;
var cls = {
  value: 0
};
exports.cls = cls;
},{}],"../src/performance/paint.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initElementTiming = exports.initLargestContentfulPaint = exports.initFirstPaint = void 0;

var _log = require("../utils/log");

var _metrics = require("../utils/metrics");

var _performanceObserver = require("./performance-observer");

/**
 * FirstPaintObserverCallback
 * @returns
 */
var initFirstPaint = function initFirstPaint(callback) {
  return function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];

      if (entry.name === "first-paint") {
        _metrics.fp.value = entry.startTime;
        (0, _log.logMetric)("fp", entry.startTime);
      } else if (entry.name === "first-contentful-paint") {
        _metrics.fcp.value = entry.startTime;
        (0, _log.logMetric)("fcp", entry.startTime);
        callback();
        (0, _performanceObserver.disconnectPO)("paint");
      }
    }
  };
};
/**
 * LargestContentfulPaintObserverCallback
 * @param {Array<PerformanceEntryEncapsulation>} entries
 */


exports.initFirstPaint = initFirstPaint;

var initLargestContentfulPaint = function initLargestContentfulPaint(entries) {
  var lastEntry = entries.pop();

  if (lastEntry) {
    _metrics.lcp.value = lastEntry.renderTime || lastEntry.startTime;
  }
};
/**
 * ElementTimingObserverCallback
 * @param {Array<PerformanceEntryEncapsulation>} entries
 */


exports.initLargestContentfulPaint = initLargestContentfulPaint;

var initElementTiming = function initElementTiming(entries) {
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];

    if (entry.identifier) {
      (0, _log.logMetric)(entry.identifier, entry.startTime, {
        performanceEntry: entry
      });
    }
  }
};

exports.initElementTiming = initElementTiming;
},{"../utils/log":"../src/utils/log.ts","../utils/metrics":"../src/utils/metrics.ts","./performance-observer":"../src/performance/performance-observer.ts"}],"../src/performance/longtask.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLongtask = void 0;

var _log = require("../utils/log");

var _metrics = require("../utils/metrics");

/**
 * LongtaskObserverCallback
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Long_Tasks_API
 * The definition of a long task is a task longer than 50ms
 * 长任务的定义是超过50ms的任务
 * @param {Array<PerformanceEntryEncapsulation>} entries
 * @returns
 */
var initLongtask = function initLongtask(entries) {
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var blockingTime = entry.startTime - 50;
    if (entry.name !== "self" && entry.startTime < _metrics.fcp.value) return;

    if (blockingTime > 0) {
      _metrics.tbt.value += entry.startTime;
      (0, _log.logMetric)("longtask", entry.startTime);
    }
  }
};

exports.initLongtask = initLongtask;
},{"../utils/log":"../src/utils/log.ts","../utils/metrics":"../src/utils/metrics.ts"}],"../src/performance/first-input.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFirstInput = void 0;

var _log = require("../utils/log");

var _metrics = require("../utils/metrics");

var _performanceObserver = require("./performance-observer");

/**
 * FirstInputObserverCallback
 * Take the last entry
 * @param {Array<PerformanceEntryEncapsulation>} entries
 */
var initFirstInput = function initFirstInput(entries) {
  var lastEntry = entries.pop();

  if (lastEntry) {
    // Core Web Vitals FID logic
    // Delayed operation of measurement input events
    // 测量输入事件的延迟操作
    (0, _log.logMetric)("fidVitals", lastEntry.processingStart - lastEntry.startTime, {
      performanceEntry: lastEntry
    }); // Measure the duration of processing the first input event
    // 测量处理第一个输入事件的持续时间

    (0, _log.logMetric)("fid", lastEntry.duration, {
      performanceEntry: lastEntry
    });
  } // Destroy the registered callback for FID to avoid memory leaks caused by too many observers
  // 销毁对FID的注册回调 避免过多的观察者造成内存泄露


  (0, _performanceObserver.disconnectPO)("first-input"); // lcp log

  (0, _log.logMetric)("lcp", _metrics.lcp.value); // Force any pending records to be dispatched
  // 强制分派所有待处理的记录

  if (_performanceObserver.performanceObserverInstance["layout-shift"] && typeof _performanceObserver.performanceObserverInstance["layout-shift"].takeRecords === "function") {
    _performanceObserver.performanceObserverInstance["layout-shift"].takeRecords();
  } // cls log


  (0, _log.logMetric)("cls", _metrics.cls.value); // bt log

  (0, _log.logMetric)("bt", _metrics.tbt.value); // TBT with 5 second delay after FID

  setTimeout(function () {
    (0, _log.logMetric)("bt5S", _metrics.tbt.value);
  }, 5000); // TBT with 10 second delay after FID
  // 10S overall data consumption after FID is activated

  setTimeout(function () {
    (0, _log.logMetric)("bt10S", _metrics.tbt.value);
    (0, _log.logData)("dataConsumption", _metrics.rt.value);
  }, 10000);
};

exports.initFirstInput = initFirstInput;
},{"../utils/log":"../src/utils/log.ts","../utils/metrics":"../src/utils/metrics.ts","./performance-observer":"../src/performance/performance-observer.ts"}],"../src/performance/resource.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initResouceTiming = void 0;

var _log = require("../utils/log");

var _metrics = require("../utils/metrics");

/**
 * ResouceTimingObserverCallback
 * @param {Array<PerformanceEntryEncapsulation>} entries
 * @returns
 */
var initResouceTiming = function initResouceTiming(entries) {
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    (0, _log.logData)("resourceTiming", entry);

    if (entry.decodedBodySize && entry.initiatorType) {
      var bodySize = entry.decodedBodySize / 1000;
      _metrics.rt.value[entry.initiatorType] += bodySize;
      _metrics.rt.value.total += bodySize;
    }
  }
};

exports.initResouceTiming = initResouceTiming;
},{"../utils/log":"../src/utils/log.ts","../utils/metrics":"../src/utils/metrics.ts"}],"../src/performance/layout-shift.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLayoutShift = void 0;

var _metrics = require("../utils/metrics");

/**
 * https://web.dev/cls/
 * https://requestmetrics.com/web-performance/cumulative-layout-shift
 *
 * Cumulative Layout Shift (CLS),
 * sometimes known as jank,
 * is a measurement of how much elements move due to late-rendered content.
 * You can think of it as a measurement of layout instability.
 * It has become a common problem for many websites due to third-party scripts and tag management and its one of the new Core Web Vital metrics.
 *
 * LayoutShiftObserverCallback
 * Detects new layout shift occurrences and updates the
 * Only count layout shifts without recent user input.
 * 检测新的布局偏移情况并更新
 * 仅在没有最近用户输入的情况下计算布局转移。
 *
 * What is a good CLS score?
 * To provide a good user experience, sites should strive to have a CLS score of 0.1 or less. To ensure you're hitting this target for most of your users, a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices.
 * 为了提供良好的用户体验，网站应努力使CLS得分不超过0.1。为确保您达到大多数用户的这一目标，衡量移动设备和台式机设备的页面加载量的第75个百分位数是一个很好的衡量标准。
 * @param {Array<PerformanceEntryEncapsulation>} entries
 * @returns
 */
var initLayoutShift = function initLayoutShift(entries) {
  var lastEntry = entries.pop();

  if (lastEntry && !lastEntry.hadRecentInput && lastEntry.value) {
    _metrics.cls.value += lastEntry.value;
  }
};

exports.initLayoutShift = initLayoutShift;
},{"../utils/metrics":"../src/utils/metrics.ts"}],"../src/performance/performance-observer.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disconnectPerformanceObserver = exports.initPerformanceObserver = exports.disconnectPO = exports.performanceObserverInstance = void 0;

var _package = require("../../package.json");

var _constants = require("../constants");

var _paint = require("./paint");

var _longtask = require("./longtask");

var _firstInput = require("./first-input");

var _config = require("../config/config");

var _resource = require("./resource");

var _layoutShift = require("./layout-shift");

var _log = require("../utils/log");

var _metrics = require("../utils/metrics");

var performanceObserverInstance = {};
/**
 * PerformanceObserver asynchronous subscription
 * PerformanceObserver异步订阅
 * @param {PerformanceObserverEventType} eventType 监听的事件类型 Types of events monitored
 * @param {(entries: Array<PerformanceEntryEncapsulation>) => void} callback 监听的回调 Listened callback
 */

exports.performanceObserverInstance = performanceObserverInstance;

var asyncSubscripePO = function asyncSubscripePO(eventType, callback) {
  try {
    var Observer = new PerformanceObserver(function (entries) {
      return callback(entries.getEntries());
    });
    Observer.observe({
      type: eventType,
      buffered: true
    });
    return Observer;
  } catch (error) {
    _constants.C.warn("PerformanceMonitoring obsever🌲:", "".concat(_package.name, ": ").concat(error));
  }

  return null;
};
/**
 * Cancel the monitoring of PerformanceObserver
 * 取消PerformanceObserver的监听
 * @param {string} eventType 监听的事件类型 Types of events monitored
 */


var disconnectPO = function disconnectPO(eventType) {
  if (performanceObserverInstance[eventType]) {
    var _performanceObserverI;

    (_performanceObserverI = performanceObserverInstance[eventType]) === null || _performanceObserverI === void 0 ? void 0 : _performanceObserverI.disconnect();
  }

  delete performanceObserverInstance[eventType];
};
/**
 * PerformanceObserver initialization
 * PerformanceObserver初始化
 * paint: fp、fcp、largest-contentful-paint
 * longtask
 * first-input
 */


exports.disconnectPO = disconnectPO;

var initPerformanceObserver = function initPerformanceObserver() {
  performanceObserverInstance["paint"] = asyncSubscripePO("paint", (0, _paint.initFirstPaint)(function () {
    return performanceObserverInstance["longtask"] = asyncSubscripePO("longtask", _longtask.initLongtask);
  }));
  performanceObserverInstance["first-input"] = asyncSubscripePO("first-input", _firstInput.initFirstInput);
  performanceObserverInstance["largest-contentful-paint"] = asyncSubscripePO("largest-contentful-paint", _paint.initLargestContentfulPaint); // Collect page performance data
  // 收集页面性能数据

  if (_config.config.isObserverResourceTiming) {
    asyncSubscripePO("resource", _resource.initResouceTiming);
  }

  performanceObserverInstance["layout-shift"] = asyncSubscripePO("layout-shift", _layoutShift.initLayoutShift);

  if (_config.config.isObserverElementTiming) {
    asyncSubscripePO("element", _paint.initElementTiming);
  }
};

exports.initPerformanceObserver = initPerformanceObserver;

var disconnectPerformanceObserver = function disconnectPerformanceObserver() {
  if (performanceObserverInstance["largest-contentful-paint"]) {
    (0, _log.logMetric)("lcpFinal", _metrics.lcp.value);
    disconnectPO("largest-contentful-paint");
  }

  if (performanceObserverInstance["layout-shift"]) {
    // Force any pending records to be dispatched
    // 强制分派所有待处理的记录
    if (typeof performanceObserverInstance["layout-shift"].takeRecords === "function") {
      performanceObserverInstance["layout-shift"].takeRecords();
    }

    (0, _log.logMetric)("clsFinal", _metrics.cls.value);
    disconnectPO("layout-shift");
  }

  if (performanceObserverInstance["longtask"]) {
    (0, _log.logMetric)("btFinal", _metrics.tbt.value);
    disconnectPO("longtask");
  }
};

exports.disconnectPerformanceObserver = disconnectPerformanceObserver;
},{"../../package.json":"../package.json","../constants":"../src/constants.ts","./paint":"../src/performance/paint.ts","./longtask":"../src/performance/longtask.ts","./first-input":"../src/performance/first-input.ts","../config/config":"../src/config/config.ts","./resource":"../src/performance/resource.ts","./layout-shift":"../src/performance/layout-shift.ts","../utils/log":"../src/utils/log.ts","../utils/metrics":"../src/utils/metrics.ts"}],"../src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _errorTrace = _interopRequireDefault(require("./error-trace"));

var _ReportData = _interopRequireDefault(require("./utils/ReportData"));

var _recordStorage = require("./performance/record-storage");

var _package = require("../package.json");

var _config = require("./config/config");

var _recordClientNavigator = require("./performance/record-client-navigator");

var _recordTiming = require("./performance/record-timing");

var _helper = require("./utils/helper");

var _types = require("./types/types");

var _performanceObserver = require("./performance/performance-observer");

var _constants = require("./constants");

var _console = require("./utils/console");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A performance monitoring platform SDK
 * Features include error capture, error recording, performance monitoring
 * 功能包括错误捕获、错误录制、性能监控
 * 一款性能监控平台SDK
 * @packageDocumentation
 */
var PerformanceMonitoring = function PerformanceMonitoring(options) {
  (0, _classCallCheck2.default)(this, PerformanceMonitoring);

  var _ref = options || {},
      isObserverElementTiming = _ref.isObserverElementTiming,
      isObserverResourceTiming = _ref.isObserverResourceTiming,
      maxTime = _ref.maxTime,
      captureError = _ref.captureError,
      fetchDomain = _ref.fetchDomain,
      errLogRoute = _ref.errLogRoute,
      errEventRoute = _ref.errEventRoute,
      logRoute = _ref.logRoute,
      analyticsTracker = _ref.analyticsTracker,
      recordOptions = _ref.recordOptions;

  _config.config.isObserverElementTiming = !!isObserverElementTiming;
  _config.config.isObserverResourceTiming = !!isObserverResourceTiming;
  _config.config.maxTime = maxTime || _config.config.maxTime;
  _config.config.captureError = captureError || _config.config.captureError;
  _config.config.fetchDomain = fetchDomain;
  _config.config.errLogRoute = errLogRoute;
  _config.config.errEventRoute = errEventRoute;
  _config.config.logRoute = logRoute;
  _config.config.reportData = new _ReportData.default();
  _config.config.analyticsTracker = analyticsTracker || _config.config.analyticsTracker;
  _config.config.recordOptions = recordOptions || _config.config.recordOptions;
  (0, _console.log)(_package.version);

  if (captureError && fetchDomain) {
    _errorTrace.default.getInstance();
  }

  if ((0, _helper.isPerformanceSupported)()) {
    if (_constants.D.visibilityState === "hidden") {
      _constants.D.addEventListener("visibilitychange", _performanceObserver.disconnectPerformanceObserver);
    }

    if (fetchDomain && logRoute) {
      Promise.all([(0, _recordTiming.recordTiming)(), (0, _recordClientNavigator.recordClientNavigator)(), (0, _recordStorage.recordingStorage)()]).then(function (res) {
        var _config$reportData;

        (_config$reportData = _config.config.reportData) === null || _config$reportData === void 0 ? void 0 : _config$reportData.fetch(_types.AskLevel.IDLE, JSON.stringify(res), logRoute);
      });
    }

    (0, _performanceObserver.initPerformanceObserver)();
  }
};

exports.default = PerformanceMonitoring;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","./error-trace":"../src/error-trace/index.ts","./utils/ReportData":"../src/utils/ReportData.ts","./performance/record-storage":"../src/performance/record-storage.ts","../package.json":"../package.json","./config/config":"../src/config/config.ts","./performance/record-client-navigator":"../src/performance/record-client-navigator.ts","./performance/record-timing":"../src/performance/record-timing.ts","./utils/helper":"../src/utils/helper.ts","./types/types":"../src/types/types.ts","./performance/performance-observer":"../src/performance/performance-observer.ts","./constants":"../src/constants.ts","./utils/console":"../src/utils/console.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var _index = _interopRequireDefault(require("../src/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _index.default({
  captureError: true,
  fetchDomain: "http://performance-monitoring.zhourengui.top/performance-monitoring",
  errEventRoute: "/err-events",
  errLogRoute: "/err-traceback",
  logRoute: "/performance-log",
  isObserverResourceTiming: true,
  isObserverElementTiming: true
});
},{"../src/index":"../src/index.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54506" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/examples.77de5100.js.map