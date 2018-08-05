/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pdfjs-dist/build/pdf.worker", [], factory);
	else if(typeof exports === 'object')
		exports["pdfjs-dist/build/pdf.worker"] = factory();
	else
		root["pdfjs-dist/build/pdf.worker"] = root.pdfjsWorker = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __w_pdfjs_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__w_pdfjs_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__w_pdfjs_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__w_pdfjs_require__.d = function(exports, name, getter) {
/******/ 		if(!__w_pdfjs_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__w_pdfjs_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__w_pdfjs_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __w_pdfjs_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__w_pdfjs_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __w_pdfjs_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__w_pdfjs_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__w_pdfjs_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__w_pdfjs_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__w_pdfjs_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __w_pdfjs_require__(__w_pdfjs_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var pdfjsVersion = '2.0.736';
var pdfjsBuild = '444976bc';
var pdfjsCoreWorker = __w_pdfjs_require__(1);
exports.WorkerMessageHandler = pdfjsCoreWorker.WorkerMessageHandler;

/***/ }),
/* 1 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkerMessageHandler = exports.WorkerTask = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _util = __w_pdfjs_require__(2);

var _pdf_manager = __w_pdfjs_require__(119);

var _is_node = __w_pdfjs_require__(5);

var _is_node2 = _interopRequireDefault(_is_node);

var _message_handler = __w_pdfjs_require__(157);

var _primitives = __w_pdfjs_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkerTask = function WorkerTaskClosure() {
  function WorkerTask(name) {
    this.name = name;
    this.terminated = false;
    this._capability = (0, _util.createPromiseCapability)();
  }
  WorkerTask.prototype = {
    get finished() {
      return this._capability.promise;
    },
    finish: function finish() {
      this._capability.resolve();
    },
    terminate: function terminate() {
      this.terminated = true;
    },
    ensureNotTerminated: function ensureNotTerminated() {
      if (this.terminated) {
        throw new Error('Worker task was terminated');
      }
    }
  };
  return WorkerTask;
}();
;
var PDFWorkerStream = function PDFWorkerStreamClosure() {
  function PDFWorkerStream(msgHandler) {
    this._msgHandler = msgHandler;
    this._contentLength = null;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  PDFWorkerStream.prototype = {
    getFullReader: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      this._fullRequestReader = new PDFWorkerStreamReader(this._msgHandler);
      return this._fullRequestReader;
    },
    getRangeReader: function getRangeReader(begin, end) {
      var reader = new PDFWorkerStreamRangeReader(begin, end, this._msgHandler);
      this._rangeRequestReaders.push(reader);
      return reader;
    },
    cancelAllRequests: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }
      var readers = this._rangeRequestReaders.slice(0);
      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  };
  function PDFWorkerStreamReader(msgHandler) {
    var _this = this;

    this._msgHandler = msgHandler;
    this._contentLength = null;
    this._isRangeSupported = false;
    this._isStreamingSupported = false;
    var readableStream = this._msgHandler.sendWithStream('GetReader');
    this._reader = readableStream.getReader();
    this._headersReady = this._msgHandler.sendWithPromise('ReaderHeadersReady').then(function (data) {
      _this._isStreamingSupported = data.isStreamingSupported;
      _this._isRangeSupported = data.isRangeSupported;
      _this._contentLength = data.contentLength;
    });
  }
  PDFWorkerStreamReader.prototype = {
    get headersReady() {
      return this._headersReady;
    },
    get contentLength() {
      return this._contentLength;
    },
    get isStreamingSupported() {
      return this._isStreamingSupported;
    },
    get isRangeSupported() {
      return this._isRangeSupported;
    },
    read: function read() {
      return this._reader.read().then(function (_ref) {
        var value = _ref.value,
            done = _ref.done;

        if (done) {
          return {
            value: undefined,
            done: true
          };
        }
        return {
          value: value.buffer,
          done: false
        };
      });
    },
    cancel: function cancel(reason) {
      this._reader.cancel(reason);
    }
  };
  function PDFWorkerStreamRangeReader(begin, end, msgHandler) {
    this._msgHandler = msgHandler;
    this.onProgress = null;
    var readableStream = this._msgHandler.sendWithStream('GetRangeReader', {
      begin: begin,
      end: end
    });
    this._reader = readableStream.getReader();
  }
  PDFWorkerStreamRangeReader.prototype = {
    get isStreamingSupported() {
      return false;
    },
    read: function read() {
      return this._reader.read().then(function (_ref2) {
        var value = _ref2.value,
            done = _ref2.done;

        if (done) {
          return {
            value: undefined,
            done: true
          };
        }
        return {
          value: value.buffer,
          done: false
        };
      });
    },
    cancel: function cancel(reason) {
      this._reader.cancel(reason);
    }
  };
  return PDFWorkerStream;
}();
var WorkerMessageHandler = {
  setup: function setup(handler, port) {
    var testMessageProcessed = false;
    handler.on('test', function wphSetupTest(data) {
      if (testMessageProcessed) {
        return;
      }
      testMessageProcessed = true;
      if (!(data instanceof Uint8Array)) {
        handler.send('test', false);
        return;
      }
      var supportTransfers = data[0] === 255;
      handler.postMessageTransfers = supportTransfers;
      var xhr = new XMLHttpRequest();
      var responseExists = 'response' in xhr;
      try {
        xhr.responseType;
      } catch (e) {
        responseExists = false;
      }
      if (!responseExists) {
        handler.send('test', false);
        return;
      }
      handler.send('test', {
        supportTypedArray: true,
        supportTransfers: supportTransfers
      });
    });
    handler.on('configure', function wphConfigure(data) {
      (0, _util.setVerbosityLevel)(data.verbosity);
    });
    handler.on('GetDocRequest', function wphSetupDoc(data) {
      return WorkerMessageHandler.createDocumentHandler(data, port);
    });
  },
  createDocumentHandler: function createDocumentHandler(docParams, port) {
    var pdfManager;
    var terminated = false;
    var cancelXHRs = null;
    var WorkerTasks = [];
    var apiVersion = docParams.apiVersion;
    var workerVersion = '2.0.736';
    if (apiVersion !== workerVersion) {
      throw new Error('The API version "' + apiVersion + '" does not match ' + ('the Worker version "' + workerVersion + '".'));
    }
    var docId = docParams.docId;
    var docBaseUrl = docParams.docBaseUrl;
    var workerHandlerName = docParams.docId + '_worker';
    var handler = new _message_handler.MessageHandler(workerHandlerName, docId, port);
    handler.postMessageTransfers = docParams.postMessageTransfers;
    function ensureNotTerminated() {
      if (terminated) {
        throw new Error('Worker was terminated');
      }
    }
    function startWorkerTask(task) {
      WorkerTasks.push(task);
    }
    function finishWorkerTask(task) {
      task.finish();
      var i = WorkerTasks.indexOf(task);
      WorkerTasks.splice(i, 1);
    }
    function loadDocument(recoveryMode) {
      var loadDocumentCapability = (0, _util.createPromiseCapability)();
      var parseSuccess = function parseSuccess() {
        Promise.all([pdfManager.ensureDoc('numPages'), pdfManager.ensureDoc('fingerprint')]).then(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              numPages = _ref4[0],
              fingerprint = _ref4[1];

          loadDocumentCapability.resolve({
            numPages: numPages,
            fingerprint: fingerprint
          });
        }, parseFailure);
      };
      var parseFailure = function parseFailure(e) {
        loadDocumentCapability.reject(e);
      };
      pdfManager.ensureDoc('checkHeader', []).then(function () {
        pdfManager.ensureDoc('parseStartXRef', []).then(function () {
          pdfManager.ensureDoc('parse', [recoveryMode]).then(parseSuccess, parseFailure);
        }, parseFailure);
      }, parseFailure);
      return loadDocumentCapability.promise;
    }
    function getPdfManager(data, evaluatorOptions) {
      var pdfManagerCapability = (0, _util.createPromiseCapability)();
      var pdfManager;
      var source = data.source;
      if (source.data) {
        try {
          pdfManager = new _pdf_manager.LocalPdfManager(docId, source.data, source.password, evaluatorOptions, docBaseUrl);
          pdfManagerCapability.resolve(pdfManager);
        } catch (ex) {
          pdfManagerCapability.reject(ex);
        }
        return pdfManagerCapability.promise;
      }
      var pdfStream,
          cachedChunks = [];
      try {
        pdfStream = new PDFWorkerStream(handler);
      } catch (ex) {
        pdfManagerCapability.reject(ex);
        return pdfManagerCapability.promise;
      }
      var fullRequest = pdfStream.getFullReader();
      fullRequest.headersReady.then(function () {
        if (!fullRequest.isRangeSupported) {
          return;
        }
        var disableAutoFetch = source.disableAutoFetch || fullRequest.isStreamingSupported;
        pdfManager = new _pdf_manager.NetworkPdfManager(docId, pdfStream, {
          msgHandler: handler,
          url: source.url,
          password: source.password,
          length: fullRequest.contentLength,
          disableAutoFetch: disableAutoFetch,
          rangeChunkSize: source.rangeChunkSize
        }, evaluatorOptions, docBaseUrl);
        for (var i = 0; i < cachedChunks.length; i++) {
          pdfManager.sendProgressiveData(cachedChunks[i]);
        }
        cachedChunks = [];
        pdfManagerCapability.resolve(pdfManager);
        cancelXHRs = null;
      }).catch(function (reason) {
        pdfManagerCapability.reject(reason);
        cancelXHRs = null;
      });
      var loaded = 0;
      var flushChunks = function flushChunks() {
        var pdfFile = (0, _util.arraysToBytes)(cachedChunks);
        if (source.length && pdfFile.length !== source.length) {
          (0, _util.warn)('reported HTTP length is different from actual');
        }
        try {
          pdfManager = new _pdf_manager.LocalPdfManager(docId, pdfFile, source.password, evaluatorOptions, docBaseUrl);
          pdfManagerCapability.resolve(pdfManager);
        } catch (ex) {
          pdfManagerCapability.reject(ex);
        }
        cachedChunks = [];
      };
      var readPromise = new Promise(function (resolve, reject) {
        var readChunk = function readChunk(chunk) {
          try {
            ensureNotTerminated();
            if (chunk.done) {
              if (!pdfManager) {
                flushChunks();
              }
              cancelXHRs = null;
              return;
            }
            var data = chunk.value;
            loaded += (0, _util.arrayByteLength)(data);
            if (!fullRequest.isStreamingSupported) {
              handler.send('DocProgress', {
                loaded: loaded,
                total: Math.max(loaded, fullRequest.contentLength || 0)
              });
            }
            if (pdfManager) {
              pdfManager.sendProgressiveData(data);
            } else {
              cachedChunks.push(data);
            }
            fullRequest.read().then(readChunk, reject);
          } catch (e) {
            reject(e);
          }
        };
        fullRequest.read().then(readChunk, reject);
      });
      readPromise.catch(function (e) {
        pdfManagerCapability.reject(e);
        cancelXHRs = null;
      });
      cancelXHRs = function cancelXHRs() {
        pdfStream.cancelAllRequests('abort');
      };
      return pdfManagerCapability.promise;
    }
    function setupDoc(data) {
      function onSuccess(doc) {
        ensureNotTerminated();
        handler.send('GetDoc', { pdfInfo: doc });
      }
      function onFailure(e) {
        ensureNotTerminated();
        if (e instanceof _util.PasswordException) {
          var task = new WorkerTask('PasswordException: response ' + e.code);
          startWorkerTask(task);
          handler.sendWithPromise('PasswordRequest', e).then(function (data) {
            finishWorkerTask(task);
            pdfManager.updatePassword(data.password);
            pdfManagerReady();
          }).catch(function (boundException) {
            finishWorkerTask(task);
            handler.send('PasswordException', boundException);
          }.bind(null, e));
        } else if (e instanceof _util.InvalidPDFException) {
          handler.send('InvalidPDF', e);
        } else if (e instanceof _util.MissingPDFException) {
          handler.send('MissingPDF', e);
        } else if (e instanceof _util.UnexpectedResponseException) {
          handler.send('UnexpectedResponse', e);
        } else {
          handler.send('UnknownError', new _util.UnknownErrorException(e.message, e.toString()));
        }
      }
      function pdfManagerReady() {
        ensureNotTerminated();
        loadDocument(false).then(onSuccess, function loadFailure(ex) {
          ensureNotTerminated();
          if (!(ex instanceof _util.XRefParseException)) {
            onFailure(ex);
            return;
          }
          pdfManager.requestLoadedStream();
          pdfManager.onLoadedStream().then(function () {
            ensureNotTerminated();
            loadDocument(true).then(onSuccess, onFailure);
          });
        }, onFailure);
      }
      ensureNotTerminated();
      var evaluatorOptions = {
        forceDataSchema: data.disableCreateObjectURL,
        maxImageSize: data.maxImageSize,
        disableFontFace: data.disableFontFace,
        nativeImageDecoderSupport: data.nativeImageDecoderSupport,
        ignoreErrors: data.ignoreErrors,
        isEvalSupported: data.isEvalSupported
      };
      getPdfManager(data, evaluatorOptions).then(function (newPdfManager) {
        if (terminated) {
          newPdfManager.terminate();
          throw new Error('Worker was terminated');
        }
        pdfManager = newPdfManager;
        pdfManager.onLoadedStream().then(function (stream) {
          handler.send('DataLoaded', { length: stream.bytes.byteLength });
        });
      }).then(pdfManagerReady, onFailure);
    }
    handler.on('GetPage', function wphSetupGetPage(data) {
      return pdfManager.getPage(data.pageIndex).then(function (page) {
        return Promise.all([pdfManager.ensure(page, 'rotate'), pdfManager.ensure(page, 'ref'), pdfManager.ensure(page, 'userUnit'), pdfManager.ensure(page, 'view')]).then(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 4),
              rotate = _ref6[0],
              ref = _ref6[1],
              userUnit = _ref6[2],
              view = _ref6[3];

          return {
            rotate: rotate,
            ref: ref,
            userUnit: userUnit,
            view: view
          };
        });
      });
    });
    handler.on('GetPageIndex', function wphSetupGetPageIndex(data) {
      var ref = new _primitives.Ref(data.ref.num, data.ref.gen);
      var catalog = pdfManager.pdfDocument.catalog;
      return catalog.getPageIndex(ref);
    });
    handler.on('GetDestinations', function wphSetupGetDestinations(data) {
      return pdfManager.ensureCatalog('destinations');
    });
    handler.on('GetDestination', function wphSetupGetDestination(data) {
      return pdfManager.ensureCatalog('getDestination', [data.id]);
    });
    handler.on('GetPageLabels', function wphSetupGetPageLabels(data) {
      return pdfManager.ensureCatalog('pageLabels');
    });
    handler.on('GetPageMode', function wphSetupGetPageMode(data) {
      return pdfManager.ensureCatalog('pageMode');
    });
    handler.on('GetAttachments', function wphSetupGetAttachments(data) {
      return pdfManager.ensureCatalog('attachments');
    });
    handler.on('GetJavaScript', function wphSetupGetJavaScript(data) {
      return pdfManager.ensureCatalog('javaScript');
    });
    handler.on('GetOutline', function wphSetupGetOutline(data) {
      return pdfManager.ensureCatalog('documentOutline');
    });
    handler.on('GetMetadata', function wphSetupGetMetadata(data) {
      return Promise.all([pdfManager.ensureDoc('documentInfo'), pdfManager.ensureCatalog('metadata')]);
    });
    handler.on('GetData', function wphSetupGetData(data) {
      pdfManager.requestLoadedStream();
      return pdfManager.onLoadedStream().then(function (stream) {
        return stream.bytes;
      });
    });
    handler.on('GetStats', function wphSetupGetStats(data) {
      return pdfManager.pdfDocument.xref.stats;
    });
    handler.on('GetAnnotations', function wphSetupGetAnnotations(data) {
      return pdfManager.getPage(data.pageIndex).then(function (page) {
        return pdfManager.ensure(page, 'getAnnotationsData', [data.intent]);
      });
    });
    handler.on('RenderPageRequest', function wphSetupRenderPage(data) {
      var pageIndex = data.pageIndex;
      pdfManager.getPage(pageIndex).then(function (page) {
        var task = new WorkerTask('RenderPageRequest: page ' + pageIndex);
        startWorkerTask(task);
        var pageNum = pageIndex + 1;
        var start = Date.now();
        page.getOperatorList({
          handler: handler,
          task: task,
          intent: data.intent,
          renderInteractiveForms: data.renderInteractiveForms
        }).then(function (operatorList) {
          finishWorkerTask(task);
          (0, _util.info)('page=' + pageNum + ' - getOperatorList: time=' + (Date.now() - start) + 'ms, len=' + operatorList.totalLength);
        }, function (e) {
          finishWorkerTask(task);
          if (task.terminated) {
            return;
          }
          handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.unknown });
          var minimumStackMessage = 'worker.js: while trying to getPage() and getOperatorList()';
          var wrappedException;
          if (typeof e === 'string') {
            wrappedException = {
              message: e,
              stack: minimumStackMessage
            };
          } else if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object') {
            wrappedException = {
              message: e.message || e.toString(),
              stack: e.stack || minimumStackMessage
            };
          } else {
            wrappedException = {
              message: 'Unknown exception type: ' + (typeof e === 'undefined' ? 'undefined' : _typeof(e)),
              stack: minimumStackMessage
            };
          }
          handler.send('PageError', {
            pageNum: pageNum,
            error: wrappedException,
            intent: data.intent
          });
        });
      });
    }, this);
    handler.on('GetTextContent', function wphExtractText(data, sink) {
      var pageIndex = data.pageIndex;
      sink.onPull = function (desiredSize) {};
      sink.onCancel = function (reason) {};
      pdfManager.getPage(pageIndex).then(function (page) {
        var task = new WorkerTask('GetTextContent: page ' + pageIndex);
        startWorkerTask(task);
        var pageNum = pageIndex + 1;
        var start = Date.now();
        page.extractTextContent({
          handler: handler,
          task: task,
          sink: sink,
          normalizeWhitespace: data.normalizeWhitespace,
          combineTextItems: data.combineTextItems
        }).then(function () {
          finishWorkerTask(task);
          (0, _util.info)('text indexing: page=' + pageNum + ' - time=' + (Date.now() - start) + 'ms');
          sink.close();
        }, function (reason) {
          finishWorkerTask(task);
          if (task.terminated) {
            return;
          }
          sink.error(reason);
          throw reason;
        });
      });
    });
    handler.on('Cleanup', function wphCleanup(data) {
      return pdfManager.cleanup();
    });
    handler.on('Terminate', function wphTerminate(data) {
      terminated = true;
      if (pdfManager) {
        pdfManager.terminate();
        pdfManager = null;
      }
      if (cancelXHRs) {
        cancelXHRs();
      }
      var waitOn = [];
      WorkerTasks.forEach(function (task) {
        waitOn.push(task.finished);
        task.terminate();
      });
      return Promise.all(waitOn).then(function () {
        handler.destroy();
        handler = null;
      });
    });
    handler.on('Ready', function wphReady(data) {
      setupDoc(docParams);
      docParams = null;
    });
    return workerHandlerName;
  },
  initializeFromPort: function initializeFromPort(port) {
    var handler = new _message_handler.MessageHandler('worker', 'main', port);
    WorkerMessageHandler.setup(handler, port);
    handler.send('ready', null);
  }
};
function isMessagePort(maybePort) {
  return typeof maybePort.postMessage === 'function' && 'onmessage' in maybePort;
}
if (typeof window === 'undefined' && !(0, _is_node2.default)() && typeof self !== 'undefined' && isMessagePort(self)) {
  WorkerMessageHandler.initializeFromPort(self);
}
exports.WorkerTask = WorkerTask;
exports.WorkerMessageHandler = WorkerMessageHandler;

/***/ }),
/* 2 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unreachable = exports.warn = exports.utf8StringToString = exports.stringToUTF8String = exports.stringToPDFString = exports.stringToBytes = exports.string32 = exports.shadow = exports.setVerbosityLevel = exports.URL = exports.ReadableStream = exports.removeNullCharacters = exports.readUint32 = exports.readUint16 = exports.readInt8 = exports.log2 = exports.isEvalSupported = exports.isLittleEndian = exports.createValidAbsoluteUrl = exports.isSameOrigin = exports.isSpace = exports.isString = exports.isNum = exports.isEmptyObj = exports.isBool = exports.isArrayBuffer = exports.info = exports.getVerbosityLevel = exports.getLookupTableFactory = exports.getInheritableProperty = exports.deprecated = exports.createObjectURL = exports.createPromiseCapability = exports.createBlob = exports.bytesToString = exports.assert = exports.arraysToBytes = exports.arrayByteLength = exports.FormatError = exports.XRefParseException = exports.toRomanNumerals = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.PasswordResponses = exports.PasswordException = exports.NativeImageDecoding = exports.MissingPDFException = exports.MissingDataException = exports.InvalidPDFException = exports.AbortException = exports.CMapCompressionType = exports.ImageKind = exports.FontType = exports.AnnotationType = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.UNSUPPORTED_FEATURES = exports.VerbosityLevel = exports.OPS = exports.IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__w_pdfjs_require__(3);

var _streams_polyfill = __w_pdfjs_require__(115);

var _url_polyfill = __w_pdfjs_require__(117);

var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
var NativeImageDecoding = {
  NONE: 'none',
  DECODE: 'decode',
  DISPLAY: 'display'
};
var TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
var ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
var AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
var AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
var AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
var AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
var StreamType = {
  UNKNOWN: 0,
  FLATE: 1,
  LZW: 2,
  DCT: 3,
  JPX: 4,
  JBIG: 5,
  A85: 6,
  AHX: 7,
  CCF: 8,
  RL: 9
};
var FontType = {
  UNKNOWN: 0,
  TYPE1: 1,
  TYPE1C: 2,
  CIDFONTTYPE0: 3,
  CIDFONTTYPE0C: 4,
  TRUETYPE: 5,
  CIDFONTTYPE2: 6,
  TYPE3: 7,
  OPENTYPE: 8,
  TYPE0: 9,
  MMTYPE1: 10
};
var VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
var CMapCompressionType = {
  NONE: 0,
  BINARY: 1,
  STREAM: 2
};
var OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotations: 78,
  endAnnotations: 79,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintJpegXObject: 82,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
};
var verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log('Info: ' + msg);
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log('Warning: ' + msg);
  }
}
function deprecated(details) {
  console.log('Deprecated API usage: ' + details);
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
var UNSUPPORTED_FEATURES = {
  unknown: 'unknown',
  forms: 'forms',
  javaScript: 'javaScript',
  smask: 'smask',
  shadingPattern: 'shadingPattern',
  font: 'font'
};
function isSameOrigin(baseUrl, otherUrl) {
  try {
    var base = new _url_polyfill.URL(baseUrl);
    if (!base.origin || base.origin === 'null') {
      return false;
    }
  } catch (e) {
    return false;
  }
  var other = new _url_polyfill.URL(otherUrl, base);
  return base.origin === other.origin;
}
function isValidProtocol(url) {
  if (!url) {
    return false;
  }
  switch (url.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl) {
  if (!url) {
    return null;
  }
  try {
    var absoluteUrl = baseUrl ? new _url_polyfill.URL(url, baseUrl) : new _url_polyfill.URL(url);
    if (isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch (ex) {}
  return null;
}
function shadow(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    enumerable: true,
    configurable: true,
    writable: false
  });
  return value;
}
function getLookupTableFactory(initializer) {
  var lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }
    return lookup;
  };
}
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
var PasswordException = function PasswordExceptionClosure() {
  function PasswordException(msg, code) {
    this.name = 'PasswordException';
    this.message = msg;
    this.code = code;
  }
  PasswordException.prototype = new Error();
  PasswordException.constructor = PasswordException;
  return PasswordException;
}();
var UnknownErrorException = function UnknownErrorExceptionClosure() {
  function UnknownErrorException(msg, details) {
    this.name = 'UnknownErrorException';
    this.message = msg;
    this.details = details;
  }
  UnknownErrorException.prototype = new Error();
  UnknownErrorException.constructor = UnknownErrorException;
  return UnknownErrorException;
}();
var InvalidPDFException = function InvalidPDFExceptionClosure() {
  function InvalidPDFException(msg) {
    this.name = 'InvalidPDFException';
    this.message = msg;
  }
  InvalidPDFException.prototype = new Error();
  InvalidPDFException.constructor = InvalidPDFException;
  return InvalidPDFException;
}();
var MissingPDFException = function MissingPDFExceptionClosure() {
  function MissingPDFException(msg) {
    this.name = 'MissingPDFException';
    this.message = msg;
  }
  MissingPDFException.prototype = new Error();
  MissingPDFException.constructor = MissingPDFException;
  return MissingPDFException;
}();
var UnexpectedResponseException = function UnexpectedResponseExceptionClosure() {
  function UnexpectedResponseException(msg, status) {
    this.name = 'UnexpectedResponseException';
    this.message = msg;
    this.status = status;
  }
  UnexpectedResponseException.prototype = new Error();
  UnexpectedResponseException.constructor = UnexpectedResponseException;
  return UnexpectedResponseException;
}();
var MissingDataException = function MissingDataExceptionClosure() {
  function MissingDataException(begin, end) {
    this.begin = begin;
    this.end = end;
    this.message = 'Missing data [' + begin + ', ' + end + ')';
  }
  MissingDataException.prototype = new Error();
  MissingDataException.prototype.name = 'MissingDataException';
  MissingDataException.constructor = MissingDataException;
  return MissingDataException;
}();
var XRefParseException = function XRefParseExceptionClosure() {
  function XRefParseException(msg) {
    this.message = msg;
  }
  XRefParseException.prototype = new Error();
  XRefParseException.prototype.name = 'XRefParseException';
  XRefParseException.constructor = XRefParseException;
  return XRefParseException;
}();
var FormatError = function FormatErrorClosure() {
  function FormatError(msg) {
    this.message = msg;
  }
  FormatError.prototype = new Error();
  FormatError.prototype.name = 'FormatError';
  FormatError.constructor = FormatError;
  return FormatError;
}();
var AbortException = function AbortExceptionClosure() {
  function AbortException(msg) {
    this.name = 'AbortException';
    this.message = msg;
  }
  AbortException.prototype = new Error();
  AbortException.constructor = AbortException;
  return AbortException;
}();
var NullCharactersRegExp = /\x00/g;
function removeNullCharacters(str) {
  if (typeof str !== 'string') {
    warn('The argument for removeNullCharacters must be a string.');
    return str;
  }
  return str.replace(NullCharactersRegExp, '');
}
function bytesToString(bytes) {
  assert(bytes !== null && (typeof bytes === 'undefined' ? 'undefined' : _typeof(bytes)) === 'object' && bytes.length !== undefined, 'Invalid argument for bytesToString');
  var length = bytes.length;
  var MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  var strBuf = [];
  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    var chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join('');
}
function stringToBytes(str) {
  assert(typeof str === 'string', 'Invalid argument for stringToBytes');
  var length = str.length;
  var bytes = new Uint8Array(length);
  for (var i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xFF;
  }
  return bytes;
}
function arrayByteLength(arr) {
  if (arr.length !== undefined) {
    return arr.length;
  }
  assert(arr.byteLength !== undefined);
  return arr.byteLength;
}
function arraysToBytes(arr) {
  if (arr.length === 1 && arr[0] instanceof Uint8Array) {
    return arr[0];
  }
  var resultLength = 0;
  var i,
      ii = arr.length;
  var item, itemLength;
  for (i = 0; i < ii; i++) {
    item = arr[i];
    itemLength = arrayByteLength(item);
    resultLength += itemLength;
  }
  var pos = 0;
  var data = new Uint8Array(resultLength);
  for (i = 0; i < ii; i++) {
    item = arr[i];
    if (!(item instanceof Uint8Array)) {
      if (typeof item === 'string') {
        item = stringToBytes(item);
      } else {
        item = new Uint8Array(item);
      }
    }
    itemLength = item.byteLength;
    data.set(item, pos);
    pos += itemLength;
  }
  return data;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function log2(x) {
  if (x <= 0) {
    return 0;
  }
  return Math.ceil(Math.log2(x));
}
function readInt8(data, start) {
  return data[start] << 24 >> 24;
}
function readUint16(data, offset) {
  return data[offset] << 8 | data[offset + 1];
}
function readUint32(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}
function isLittleEndian() {
  var buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  var view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function('');
    return true;
  } catch (e) {
    return false;
  }
}
function getInheritableProperty(_ref) {
  var dict = _ref.dict,
      key = _ref.key,
      _ref$getArray = _ref.getArray,
      getArray = _ref$getArray === undefined ? false : _ref$getArray,
      _ref$stopWhenFound = _ref.stopWhenFound,
      stopWhenFound = _ref$stopWhenFound === undefined ? true : _ref$stopWhenFound;

  var LOOP_LIMIT = 100;
  var loopCount = 0;
  var values = void 0;
  while (dict) {
    var value = getArray ? dict.getArray(key) : dict.get(key);
    if (value !== undefined) {
      if (stopWhenFound) {
        return value;
      }
      if (!values) {
        values = [];
      }
      values.push(value);
    }
    if (++loopCount > LOOP_LIMIT) {
      warn('getInheritableProperty: maximum loop count exceeded for "' + key + '"');
      break;
    }
    dict = dict.get('Parent');
  }
  return values;
}
var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
var Util = function UtilClosure() {
  function Util() {}
  var rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];
  Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
    rgbBuf[1] = r;
    rgbBuf[3] = g;
    rgbBuf[5] = b;
    return rgbBuf.join('');
  };
  Util.transform = function Util_transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  };
  Util.applyTransform = function Util_applyTransform(p, m) {
    var xt = p[0] * m[0] + p[1] * m[2] + m[4];
    var yt = p[0] * m[1] + p[1] * m[3] + m[5];
    return [xt, yt];
  };
  Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
    var d = m[0] * m[3] - m[1] * m[2];
    var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
    return [xt, yt];
  };
  Util.getAxialAlignedBoundingBox = function Util_getAxialAlignedBoundingBox(r, m) {
    var p1 = Util.applyTransform(r, m);
    var p2 = Util.applyTransform(r.slice(2, 4), m);
    var p3 = Util.applyTransform([r[0], r[3]], m);
    var p4 = Util.applyTransform([r[2], r[1]], m);
    return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
  };
  Util.inverseTransform = function Util_inverseTransform(m) {
    var d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  };
  Util.apply3dTransform = function Util_apply3dTransform(m, v) {
    return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
  };
  Util.singularValueDecompose2dScale = function Util_singularValueDecompose2dScale(m) {
    var transpose = [m[0], m[2], m[1], m[3]];
    var a = m[0] * transpose[0] + m[1] * transpose[2];
    var b = m[0] * transpose[1] + m[1] * transpose[3];
    var c = m[2] * transpose[0] + m[3] * transpose[2];
    var d = m[2] * transpose[1] + m[3] * transpose[3];
    var first = (a + d) / 2;
    var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
    var sx = first + second || 1;
    var sy = first - second || 1;
    return [Math.sqrt(sx), Math.sqrt(sy)];
  };
  Util.normalizeRect = function Util_normalizeRect(rect) {
    var r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  };
  Util.intersect = function Util_intersect(rect1, rect2) {
    function compare(a, b) {
      return a - b;
    }
    var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare),
        orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare),
        result = [];
    rect1 = Util.normalizeRect(rect1);
    rect2 = Util.normalizeRect(rect2);
    if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
      result[0] = orderedX[1];
      result[2] = orderedX[2];
    } else {
      return false;
    }
    if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
      result[1] = orderedY[1];
      result[3] = orderedY[2];
    } else {
      return false;
    }
    return result;
  };
  return Util;
}();
var ROMAN_NUMBER_MAP = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
function toRomanNumerals(number) {
  var lowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  assert(Number.isInteger(number) && number > 0, 'The number should be a positive integer.');
  var pos = void 0,
      romanBuf = [];
  while (number >= 1000) {
    number -= 1000;
    romanBuf.push('M');
  }
  pos = number / 100 | 0;
  number %= 100;
  romanBuf.push(ROMAN_NUMBER_MAP[pos]);
  pos = number / 10 | 0;
  number %= 10;
  romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
  romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
  var romanStr = romanBuf.join('');
  return lowerCase ? romanStr.toLowerCase() : romanStr;
}
var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];
function stringToPDFString(str) {
  var i,
      n = str.length,
      strBuf = [];
  if (str[0] === '\xFE' && str[1] === '\xFF') {
    for (i = 2; i < n; i += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
    }
  } else {
    for (i = 0; i < n; ++i) {
      var code = PDFStringTranslateTable[str.charCodeAt(i)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
    }
  }
  return strBuf.join('');
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}
function isEmptyObj(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isNum(v) {
  return typeof v === 'number';
}
function isString(v) {
  return typeof v === 'string';
}
function isArrayBuffer(v) {
  return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null && v.byteLength !== undefined;
}
function isSpace(ch) {
  return ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A;
}
function createPromiseCapability() {
  var capability = {};
  capability.promise = new Promise(function (resolve, reject) {
    capability.resolve = resolve;
    capability.reject = reject;
  });
  return capability;
}
var createBlob = function createBlob(data, contentType) {
  if (typeof Blob !== 'undefined') {
    return new Blob([data], { type: contentType });
  }
  throw new Error('The "Blob" constructor is not supported.');
};
var createObjectURL = function createObjectURLClosure() {
  var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  return function createObjectURL(data, contentType) {
    var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!forceDataSchema && _url_polyfill.URL.createObjectURL) {
      var blob = createBlob(data, contentType);
      return _url_polyfill.URL.createObjectURL(blob);
    }
    var buffer = 'data:' + contentType + ';base64,';
    for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xFF;
      var b2 = data[i + 1] & 0xFF;
      var b3 = data[i + 2] & 0xFF;
      var d1 = b1 >> 2,
          d2 = (b1 & 3) << 4 | b2 >> 4;
      var d3 = i + 1 < ii ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
      var d4 = i + 2 < ii ? b3 & 0x3F : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
    }
    return buffer;
  };
}();
exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
exports.OPS = OPS;
exports.VerbosityLevel = VerbosityLevel;
exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
exports.AnnotationFieldFlag = AnnotationFieldFlag;
exports.AnnotationFlag = AnnotationFlag;
exports.AnnotationType = AnnotationType;
exports.FontType = FontType;
exports.ImageKind = ImageKind;
exports.CMapCompressionType = CMapCompressionType;
exports.AbortException = AbortException;
exports.InvalidPDFException = InvalidPDFException;
exports.MissingDataException = MissingDataException;
exports.MissingPDFException = MissingPDFException;
exports.NativeImageDecoding = NativeImageDecoding;
exports.PasswordException = PasswordException;
exports.PasswordResponses = PasswordResponses;
exports.StreamType = StreamType;
exports.TextRenderingMode = TextRenderingMode;
exports.UnexpectedResponseException = UnexpectedResponseException;
exports.UnknownErrorException = UnknownErrorException;
exports.Util = Util;
exports.toRomanNumerals = toRomanNumerals;
exports.XRefParseException = XRefParseException;
exports.FormatError = FormatError;
exports.arrayByteLength = arrayByteLength;
exports.arraysToBytes = arraysToBytes;
exports.assert = assert;
exports.bytesToString = bytesToString;
exports.createBlob = createBlob;
exports.createPromiseCapability = createPromiseCapability;
exports.createObjectURL = createObjectURL;
exports.deprecated = deprecated;
exports.getInheritableProperty = getInheritableProperty;
exports.getLookupTableFactory = getLookupTableFactory;
exports.getVerbosityLevel = getVerbosityLevel;
exports.info = info;
exports.isArrayBuffer = isArrayBuffer;
exports.isBool = isBool;
exports.isEmptyObj = isEmptyObj;
exports.isNum = isNum;
exports.isString = isString;
exports.isSpace = isSpace;
exports.isSameOrigin = isSameOrigin;
exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
exports.isLittleEndian = isLittleEndian;
exports.isEvalSupported = isEvalSupported;
exports.log2 = log2;
exports.readInt8 = readInt8;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.removeNullCharacters = removeNullCharacters;
exports.ReadableStream = _streams_polyfill.ReadableStream;
exports.URL = _url_polyfill.URL;
exports.setVerbosityLevel = setVerbosityLevel;
exports.shadow = shadow;
exports.string32 = string32;
exports.stringToBytes = stringToBytes;
exports.stringToPDFString = stringToPDFString;
exports.stringToUTF8String = stringToUTF8String;
exports.utf8StringToString = utf8StringToString;
exports.warn = warn;
exports.unreachable = unreachable;

/***/ }),
/* 3 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var globalScope = __w_pdfjs_require__(4);
if (!globalScope._pdfjsCompatibilityChecked) {
  globalScope._pdfjsCompatibilityChecked = true;
  var isNodeJS = __w_pdfjs_require__(5);
  var hasDOM = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object';
  (function checkNodeBtoa() {
    if (globalScope.btoa || !isNodeJS()) {
      return;
    }
    globalScope.btoa = function (chars) {
      return Buffer.from(chars, 'binary').toString('base64');
    };
  })();
  (function checkNodeAtob() {
    if (globalScope.atob || !isNodeJS()) {
      return;
    }
    globalScope.atob = function (input) {
      return Buffer.from(input, 'base64').toString('binary');
    };
  })();
  (function checkCurrentScript() {
    if (!hasDOM) {
      return;
    }
    if ('currentScript' in document) {
      return;
    }
    Object.defineProperty(document, 'currentScript', {
      get: function get() {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
      },

      enumerable: true,
      configurable: true
    });
  })();
  (function checkChildNodeRemove() {
    if (!hasDOM) {
      return;
    }
    if (typeof Element.prototype.remove !== 'undefined') {
      return;
    }
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  })();
  (function checkStringIncludes() {
    if (String.prototype.includes) {
      return;
    }
    __w_pdfjs_require__(6);
  })();
  (function checkArrayIncludes() {
    if (Array.prototype.includes) {
      return;
    }
    __w_pdfjs_require__(34);
  })();
  (function checkObjectAssign() {
    if (Object.assign) {
      return;
    }
    __w_pdfjs_require__(43);
  })();
  (function checkMathLog2() {
    if (Math.log2) {
      return;
    }
    Math.log2 = __w_pdfjs_require__(53);
  })();
  (function checkNumberIsNaN() {
    if (Number.isNaN) {
      return;
    }
    Number.isNaN = __w_pdfjs_require__(55);
  })();
  (function checkNumberIsInteger() {
    if (Number.isInteger) {
      return;
    }
    Number.isInteger = __w_pdfjs_require__(57);
  })();
  (function checkPromise() {
    if (globalScope.Promise) {
      return;
    }
    globalScope.Promise = __w_pdfjs_require__(60);
  })();
  (function checkWeakMap() {
    if (globalScope.WeakMap) {
      return;
    }
    globalScope.WeakMap = __w_pdfjs_require__(95);
  })();
  (function checkObjectValues() {
    if (Object.values) {
      return;
    }
    Object.values = __w_pdfjs_require__(112);
  })();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = typeof window !== 'undefined' && window.Math === Math ? window : typeof global !== 'undefined' && global.Math === Math ? global : typeof self !== 'undefined' && self.Math === Math ? self : {};

/***/ }),
/* 5 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isNodeJS() {
  return (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && process + '' === '[object process]';
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(7);
module.exports = __w_pdfjs_require__(10).String.includes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var context = __w_pdfjs_require__(26);
var INCLUDES = 'includes';
$export($export.P + $export.F * __w_pdfjs_require__(33)(INCLUDES), 'String', {
  includes: function includes(searchString) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var core = __w_pdfjs_require__(10);
var hide = __w_pdfjs_require__(11);
var redefine = __w_pdfjs_require__(21);
var ctx = __w_pdfjs_require__(24);
var PROTOTYPE = 'prototype';
var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    out = (own ? target : source)[key];
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if (target) redefine(target, key, out, type & $export.U);
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
$export.F = 1;
$export.G = 2;
$export.S = 4;
$export.P = 8;
$export.B = 16;
$export.W = 32;
$export.U = 64;
$export.R = 128;
module.exports = $export;

/***/ }),
/* 9 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global;

/***/ }),
/* 10 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core;

/***/ }),
/* 11 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var dP = __w_pdfjs_require__(12);
var createDesc = __w_pdfjs_require__(20);
module.exports = __w_pdfjs_require__(16) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(13);
var IE8_DOM_DEFINE = __w_pdfjs_require__(15);
var toPrimitive = __w_pdfjs_require__(19);
var dP = Object.defineProperty;
exports.f = __w_pdfjs_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = !__w_pdfjs_require__(16) && !__w_pdfjs_require__(17)(function () {
  return Object.defineProperty(__w_pdfjs_require__(18)('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = !__w_pdfjs_require__(17)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var document = __w_pdfjs_require__(9).document;
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var hide = __w_pdfjs_require__(11);
var has = __w_pdfjs_require__(22);
var SRC = __w_pdfjs_require__(23)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);
__w_pdfjs_require__(10).inspectSource = function (it) {
  return $toString.call(it);
};
(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var aFunction = __w_pdfjs_require__(25);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isRegExp = __w_pdfjs_require__(27);
var defined = __w_pdfjs_require__(32);
module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var cof = __w_pdfjs_require__(28);
var MATCH = __w_pdfjs_require__(29)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toString = {}.toString;
module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var store = __w_pdfjs_require__(30)('wks');
var uid = __w_pdfjs_require__(23);
var _Symbol = __w_pdfjs_require__(9).Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';
var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};
$exports.store = store;

/***/ }),
/* 30 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var core = __w_pdfjs_require__(10);
var global = __w_pdfjs_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __w_pdfjs_require__(31) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = false;

/***/ }),
/* 32 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var MATCH = __w_pdfjs_require__(29)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {}
  }
  return true;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(35);
module.exports = __w_pdfjs_require__(10).Array.includes;

/***/ }),
/* 35 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var $includes = __w_pdfjs_require__(36)(true);
$export($export.P, 'Array', {
  includes: function includes(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__w_pdfjs_require__(42)('includes');

/***/ }),
/* 36 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toIObject = __w_pdfjs_require__(37);
var toLength = __w_pdfjs_require__(39);
var toAbsoluteIndex = __w_pdfjs_require__(41);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var IObject = __w_pdfjs_require__(38);
var defined = __w_pdfjs_require__(32);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(28);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(40);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(40);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var UNSCOPABLES = __w_pdfjs_require__(29)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __w_pdfjs_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(44);
module.exports = __w_pdfjs_require__(10).Object.assign;

/***/ }),
/* 44 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
$export($export.S + $export.F, 'Object', { assign: __w_pdfjs_require__(45) });

/***/ }),
/* 45 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var getKeys = __w_pdfjs_require__(46);
var gOPS = __w_pdfjs_require__(50);
var pIE = __w_pdfjs_require__(51);
var toObject = __w_pdfjs_require__(52);
var IObject = __w_pdfjs_require__(38);
var $assign = Object.assign;
module.exports = !$assign || __w_pdfjs_require__(17)(function () {
  var A = {};
  var B = {};
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }
  return T;
} : $assign;

/***/ }),
/* 46 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $keys = __w_pdfjs_require__(47);
var enumBugKeys = __w_pdfjs_require__(49);
module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var has = __w_pdfjs_require__(22);
var toIObject = __w_pdfjs_require__(37);
var arrayIndexOf = __w_pdfjs_require__(36)(false);
var IE_PROTO = __w_pdfjs_require__(48)('IE_PROTO');
module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  }while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var shared = __w_pdfjs_require__(30)('keys');
var uid = __w_pdfjs_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 50 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 51 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 52 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var defined = __w_pdfjs_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(54);
module.exports = __w_pdfjs_require__(10).Math.log2;

/***/ }),
/* 54 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(56);
module.exports = __w_pdfjs_require__(10).Number.isNaN;

/***/ }),
/* 56 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    return number != number;
  }
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(58);
module.exports = __w_pdfjs_require__(10).Number.isInteger;

/***/ }),
/* 58 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
$export($export.S, 'Number', { isInteger: __w_pdfjs_require__(59) });

/***/ }),
/* 59 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(61);
__w_pdfjs_require__(63);
__w_pdfjs_require__(73);
__w_pdfjs_require__(76);
__w_pdfjs_require__(93);
__w_pdfjs_require__(94);
module.exports = __w_pdfjs_require__(10).Promise;

/***/ }),
/* 61 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var classof = __w_pdfjs_require__(62);
var test = {};
test[__w_pdfjs_require__(29)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __w_pdfjs_require__(21)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(28);
var TAG = __w_pdfjs_require__(29)('toStringTag');
var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {}
};
module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $at = __w_pdfjs_require__(64)(true);
__w_pdfjs_require__(65)(String, 'String', function (iterated) {
  this._t = String(iterated);
  this._i = 0;
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(40);
var defined = __w_pdfjs_require__(32);
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var LIBRARY = __w_pdfjs_require__(31);
var $export = __w_pdfjs_require__(8);
var redefine = __w_pdfjs_require__(21);
var hide = __w_pdfjs_require__(11);
var Iterators = __w_pdfjs_require__(66);
var $iterCreate = __w_pdfjs_require__(67);
var setToStringTag = __w_pdfjs_require__(71);
var getPrototypeOf = __w_pdfjs_require__(72);
var ITERATOR = __w_pdfjs_require__(29)('iterator');
var BUGGY = !([].keys && 'next' in [].keys());
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
var returnThis = function returnThis() {
  return this;
};
module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }
    return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 67 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var create = __w_pdfjs_require__(68);
var descriptor = __w_pdfjs_require__(20);
var setToStringTag = __w_pdfjs_require__(71);
var IteratorPrototype = {};
__w_pdfjs_require__(11)(IteratorPrototype, __w_pdfjs_require__(29)('iterator'), function () {
  return this;
});
module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(13);
var dPs = __w_pdfjs_require__(69);
var enumBugKeys = __w_pdfjs_require__(49);
var IE_PROTO = __w_pdfjs_require__(48)('IE_PROTO');
var Empty = function Empty() {};
var PROTOTYPE = 'prototype';
var _createDict = function createDict() {
  var iframe = __w_pdfjs_require__(18)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __w_pdfjs_require__(70).appendChild(iframe);
  iframe.src = 'javascript:';
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var dP = __w_pdfjs_require__(12);
var anObject = __w_pdfjs_require__(13);
var getKeys = __w_pdfjs_require__(46);
module.exports = __w_pdfjs_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var document = __w_pdfjs_require__(9).document;
module.exports = document && document.documentElement;

/***/ }),
/* 71 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var def = __w_pdfjs_require__(12).f;
var has = __w_pdfjs_require__(22);
var TAG = __w_pdfjs_require__(29)('toStringTag');
module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var has = __w_pdfjs_require__(22);
var toObject = __w_pdfjs_require__(52);
var IE_PROTO = __w_pdfjs_require__(48)('IE_PROTO');
var ObjectProto = Object.prototype;
module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }
  return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $iterators = __w_pdfjs_require__(74);
var getKeys = __w_pdfjs_require__(46);
var redefine = __w_pdfjs_require__(21);
var global = __w_pdfjs_require__(9);
var hide = __w_pdfjs_require__(11);
var Iterators = __w_pdfjs_require__(66);
var wks = __w_pdfjs_require__(29);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};
for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var addToUnscopables = __w_pdfjs_require__(42);
var step = __w_pdfjs_require__(75);
var Iterators = __w_pdfjs_require__(66);
var toIObject = __w_pdfjs_require__(37);
module.exports = __w_pdfjs_require__(65)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated);
  this._i = 0;
  this._k = kind;
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');
Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 75 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var LIBRARY = __w_pdfjs_require__(31);
var global = __w_pdfjs_require__(9);
var ctx = __w_pdfjs_require__(24);
var classof = __w_pdfjs_require__(62);
var $export = __w_pdfjs_require__(8);
var isObject = __w_pdfjs_require__(14);
var aFunction = __w_pdfjs_require__(25);
var anInstance = __w_pdfjs_require__(77);
var forOf = __w_pdfjs_require__(78);
var speciesConstructor = __w_pdfjs_require__(82);
var task = __w_pdfjs_require__(83).set;
var microtask = __w_pdfjs_require__(85)();
var newPromiseCapabilityModule = __w_pdfjs_require__(86);
var perform = __w_pdfjs_require__(87);
var userAgent = __w_pdfjs_require__(88);
var promiseResolve = __w_pdfjs_require__(89);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function empty() {};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__w_pdfjs_require__(29)('species')] = function (exec) {
      exec(empty, empty);
    };
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {}
}();
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    }promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }
    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        };
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e);
  }
};
if (!USE_NATIVE) {
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor) {
    this._c = [];
    this._a = undefined;
    this._s = 0;
    this._d = false;
    this._v = undefined;
    this._h = 0;
    this._n = false;
  };
  Internal.prototype = __w_pdfjs_require__(90)($Promise.prototype, {
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__w_pdfjs_require__(71)($Promise, PROMISE);
__w_pdfjs_require__(91)(PROMISE);
Wrapper = __w_pdfjs_require__(10)[PROMISE];
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __w_pdfjs_require__(92)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }
  return it;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(24);
var call = __w_pdfjs_require__(79);
var isArrayIter = __w_pdfjs_require__(80);
var anObject = __w_pdfjs_require__(13);
var toLength = __w_pdfjs_require__(39);
var getIterFn = __w_pdfjs_require__(81);
var BREAK = {};
var RETURN = {};
var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

/***/ }),
/* 79 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var Iterators = __w_pdfjs_require__(66);
var ITERATOR = __w_pdfjs_require__(29)('iterator');
var ArrayProto = Array.prototype;
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var classof = __w_pdfjs_require__(62);
var ITERATOR = __w_pdfjs_require__(29)('iterator');
var Iterators = __w_pdfjs_require__(66);
module.exports = __w_pdfjs_require__(10).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(13);
var aFunction = __w_pdfjs_require__(25);
var SPECIES = __w_pdfjs_require__(29)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(24);
var invoke = __w_pdfjs_require__(84);
var html = __w_pdfjs_require__(70);
var cel = __w_pdfjs_require__(18);
var global = __w_pdfjs_require__(9);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function run() {
  var id = +this;
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }queue[++counter] = function () {
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  if (__w_pdfjs_require__(28)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    };
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);
    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);
    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }
  return fn.apply(that, args);
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var macrotask = __w_pdfjs_require__(83).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __w_pdfjs_require__(28)(process) == 'process';
module.exports = function () {
  var head, last, notify;
  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }
    last = undefined;
    if (parent) parent.enter();
  };
  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    };
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true });
    notify = function notify() {
      node.data = toggle = !toggle;
    };
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve(undefined);
    notify = function notify() {
      promise.then(flush);
    };
  } else {
    notify = function notify() {
      macrotask.call(global, flush);
    };
  }
  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }
    last = task;
  };
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var aFunction = __w_pdfjs_require__(25);
function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}
module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),
/* 89 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(13);
var isObject = __w_pdfjs_require__(14);
var newPromiseCapability = __w_pdfjs_require__(86);
module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var redefine = __w_pdfjs_require__(21);
module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }return target;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var dP = __w_pdfjs_require__(12);
var DESCRIPTORS = __w_pdfjs_require__(16);
var SPECIES = __w_pdfjs_require__(29)('species');
module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ITERATOR = __w_pdfjs_require__(29)('iterator');
var SAFE_CLOSING = false;
try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {}
module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {}
  return safe;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var core = __w_pdfjs_require__(10);
var global = __w_pdfjs_require__(9);
var speciesConstructor = __w_pdfjs_require__(82);
var promiseResolve = __w_pdfjs_require__(89);
$export($export.P + $export.R, 'Promise', {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var newPromiseCapability = __w_pdfjs_require__(86);
var perform = __w_pdfjs_require__(87);
$export($export.S, 'Promise', {
  'try': function _try(callbackfn) {
    var promiseCapability = newPromiseCapability.f(this);
    var result = perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  }
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(61);
__w_pdfjs_require__(73);
__w_pdfjs_require__(96);
__w_pdfjs_require__(108);
__w_pdfjs_require__(110);
module.exports = __w_pdfjs_require__(10).WeakMap;

/***/ }),
/* 96 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var each = __w_pdfjs_require__(97)(0);
var redefine = __w_pdfjs_require__(21);
var meta = __w_pdfjs_require__(101);
var assign = __w_pdfjs_require__(45);
var weak = __w_pdfjs_require__(102);
var isObject = __w_pdfjs_require__(14);
var fails = __w_pdfjs_require__(17);
var validate = __w_pdfjs_require__(103);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;
var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};
var methods = {
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};
var $WeakMap = module.exports = __w_pdfjs_require__(104)(WEAK_MAP, wrapper, methods, weak, true, true);
if (fails(function () {
  return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
})) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      }
      return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(24);
var IObject = __w_pdfjs_require__(38);
var toObject = __w_pdfjs_require__(52);
var toLength = __w_pdfjs_require__(39);
var asc = __w_pdfjs_require__(98);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;else if (res) switch (TYPE) {
            case 3:
              return true;
            case 5:
              return val;
            case 6:
              return index;
            case 2:
              result.push(val);
          } else if (IS_EVERY) return false;
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var speciesConstructor = __w_pdfjs_require__(99);
module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var isArray = __w_pdfjs_require__(100);
var SPECIES = __w_pdfjs_require__(29)('species');
module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }
  return C === undefined ? Array : C;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(28);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = __w_pdfjs_require__(23)('meta');
var isObject = __w_pdfjs_require__(14);
var has = __w_pdfjs_require__(22);
var setDesc = __w_pdfjs_require__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__w_pdfjs_require__(17)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      w: {}
    }
  });
};
var fastKey = function fastKey(it, create) {
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    if (!isExtensible(it)) return 'F';
    if (!create) return 'E';
    setMeta(it);
  }
  return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    if (!isExtensible(it)) return true;
    if (!create) return false;
    setMeta(it);
  }
  return it[META].w;
};
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var redefineAll = __w_pdfjs_require__(90);
var getWeak = __w_pdfjs_require__(101).getWeak;
var anObject = __w_pdfjs_require__(13);
var isObject = __w_pdfjs_require__(14);
var anInstance = __w_pdfjs_require__(77);
var forOf = __w_pdfjs_require__(78);
var createArrayMethod = __w_pdfjs_require__(97);
var $has = __w_pdfjs_require__(22);
var validate = __w_pdfjs_require__(103);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;
      that._i = id++;
      that._l = undefined;
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var $export = __w_pdfjs_require__(8);
var redefine = __w_pdfjs_require__(21);
var redefineAll = __w_pdfjs_require__(90);
var meta = __w_pdfjs_require__(101);
var forOf = __w_pdfjs_require__(78);
var anInstance = __w_pdfjs_require__(77);
var isObject = __w_pdfjs_require__(14);
var fails = __w_pdfjs_require__(17);
var $iterDetect = __w_pdfjs_require__(92);
var setToStringTag = __w_pdfjs_require__(71);
var inheritIfRequired = __w_pdfjs_require__(105);
module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    });
    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    });
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      var $instance = new C();
      var index = 5;
      while (index--) {
        $instance[ADDER](index, index);
      }return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    if (IS_WEAK && proto.clear) delete proto.clear;
  }
  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var setPrototypeOf = __w_pdfjs_require__(106).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }
  return that;
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var anObject = __w_pdfjs_require__(13);
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
    try {
      set = __w_pdfjs_require__(24)(Function.call, __w_pdfjs_require__(107).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var pIE = __w_pdfjs_require__(51);
var createDesc = __w_pdfjs_require__(20);
var toIObject = __w_pdfjs_require__(37);
var toPrimitive = __w_pdfjs_require__(19);
var has = __w_pdfjs_require__(22);
var IE8_DOM_DEFINE = __w_pdfjs_require__(15);
var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __w_pdfjs_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(109)('WeakMap');

/***/ }),
/* 109 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, {
    of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) {
        A[length] = arguments[length];
      }return new this(A);
    }
  });
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(111)('WeakMap');

/***/ }),
/* 111 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var aFunction = __w_pdfjs_require__(25);
var ctx = __w_pdfjs_require__(24);
var forOf = __w_pdfjs_require__(78);
module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, {
    from: function from(source) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = ctx(mapFn, arguments[2], 2);
        forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        forOf(source, false, A.push, A);
      }
      return new this(A);
    }
  });
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(113);
module.exports = __w_pdfjs_require__(10).Object.values;

/***/ }),
/* 113 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var $values = __w_pdfjs_require__(114)(false);
$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var getKeys = __w_pdfjs_require__(46);
var toIObject = __w_pdfjs_require__(37);
var isEnum = __w_pdfjs_require__(51).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }return result;
  };
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isReadableStreamSupported = false;
if (typeof ReadableStream !== 'undefined') {
  try {
    new ReadableStream({
      start: function start(controller) {
        controller.close();
      }
    });
    isReadableStreamSupported = true;
  } catch (e) {}
}
if (isReadableStreamSupported) {
  exports.ReadableStream = ReadableStream;
} else {
  exports.ReadableStream = __w_pdfjs_require__(116).ReadableStream;
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(exports, function (modules) {
  var installedModules = {};
  function __w_pdfjs_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
    module.l = true;
    return module.exports;
  }
  __w_pdfjs_require__.m = modules;
  __w_pdfjs_require__.c = installedModules;
  __w_pdfjs_require__.i = function (value) {
    return value;
  };
  __w_pdfjs_require__.d = function (exports, name, getter) {
    if (!__w_pdfjs_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      });
    }
  };
  __w_pdfjs_require__.n = function (module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module['default'];
    } : function getModuleExports() {
      return module;
    };
    __w_pdfjs_require__.d(getter, 'a', getter);
    return getter;
  };
  __w_pdfjs_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __w_pdfjs_require__.p = "";
  return __w_pdfjs_require__(__w_pdfjs_require__.s = 7);
}([function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };
  var _require = __w_pdfjs_require__(1),
      assert = _require.assert;
  function IsPropertyKey(argument) {
    return typeof argument === 'string' || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) === 'symbol';
  }
  exports.typeIsObject = function (x) {
    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null || typeof x === 'function';
  };
  exports.createDataProperty = function (o, p, v) {
    assert(exports.typeIsObject(o));
    Object.defineProperty(o, p, {
      value: v,
      writable: true,
      enumerable: true,
      configurable: true
    });
  };
  exports.createArrayFromList = function (elements) {
    return elements.slice();
  };
  exports.ArrayBufferCopy = function (dest, destOffset, src, srcOffset, n) {
    new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
  };
  exports.CreateIterResultObject = function (value, done) {
    assert(typeof done === 'boolean');
    var obj = {};
    Object.defineProperty(obj, 'value', {
      value: value,
      enumerable: true,
      writable: true,
      configurable: true
    });
    Object.defineProperty(obj, 'done', {
      value: done,
      enumerable: true,
      writable: true,
      configurable: true
    });
    return obj;
  };
  exports.IsFiniteNonNegativeNumber = function (v) {
    if (Number.isNaN(v)) {
      return false;
    }
    if (v === Infinity) {
      return false;
    }
    if (v < 0) {
      return false;
    }
    return true;
  };
  function Call(F, V, args) {
    if (typeof F !== 'function') {
      throw new TypeError('Argument is not a function');
    }
    return Function.prototype.apply.call(F, V, args);
  }
  exports.InvokeOrNoop = function (O, P, args) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    var method = O[P];
    if (method === undefined) {
      return undefined;
    }
    return Call(method, O, args);
  };
  exports.PromiseInvokeOrNoop = function (O, P, args) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    try {
      return Promise.resolve(exports.InvokeOrNoop(O, P, args));
    } catch (returnValueE) {
      return Promise.reject(returnValueE);
    }
  };
  exports.PromiseInvokeOrPerformFallback = function (O, P, args, F, argsF) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    assert(Array.isArray(argsF));
    var method = void 0;
    try {
      method = O[P];
    } catch (methodE) {
      return Promise.reject(methodE);
    }
    if (method === undefined) {
      return F.apply(null, argsF);
    }
    try {
      return Promise.resolve(Call(method, O, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  exports.TransferArrayBuffer = function (O) {
    return O.slice();
  };
  exports.ValidateAndNormalizeHighWaterMark = function (highWaterMark) {
    highWaterMark = Number(highWaterMark);
    if (Number.isNaN(highWaterMark) || highWaterMark < 0) {
      throw new RangeError('highWaterMark property of a queuing strategy must be non-negative and non-NaN');
    }
    return highWaterMark;
  };
  exports.ValidateAndNormalizeQueuingStrategy = function (size, highWaterMark) {
    if (size !== undefined && typeof size !== 'function') {
      throw new TypeError('size property of a queuing strategy must be a function');
    }
    highWaterMark = exports.ValidateAndNormalizeHighWaterMark(highWaterMark);
    return {
      size: size,
      highWaterMark: highWaterMark
    };
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  function rethrowAssertionErrorRejection(e) {
    if (e && e.constructor === AssertionError) {
      setTimeout(function () {
        throw e;
      }, 0);
    }
  }
  function AssertionError(message) {
    this.name = 'AssertionError';
    this.message = message || '';
    this.stack = new Error().stack;
  }
  AssertionError.prototype = Object.create(Error.prototype);
  AssertionError.prototype.constructor = AssertionError;
  function assert(value, message) {
    if (!value) {
      throw new AssertionError(message);
    }
  }
  module.exports = {
    rethrowAssertionErrorRejection: rethrowAssertionErrorRejection,
    AssertionError: AssertionError,
    assert: assert
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = __w_pdfjs_require__(0),
      InvokeOrNoop = _require.InvokeOrNoop,
      PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
      ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
      typeIsObject = _require.typeIsObject;
  var _require2 = __w_pdfjs_require__(1),
      assert = _require2.assert,
      rethrowAssertionErrorRejection = _require2.rethrowAssertionErrorRejection;
  var _require3 = __w_pdfjs_require__(3),
      DequeueValue = _require3.DequeueValue,
      EnqueueValueWithSize = _require3.EnqueueValueWithSize,
      PeekQueueValue = _require3.PeekQueueValue,
      ResetQueue = _require3.ResetQueue;
  var WritableStream = function () {
    function WritableStream() {
      var underlyingSink = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          size = _ref.size,
          _ref$highWaterMark = _ref.highWaterMark,
          highWaterMark = _ref$highWaterMark === undefined ? 1 : _ref$highWaterMark;
      _classCallCheck(this, WritableStream);
      this._state = 'writable';
      this._storedError = undefined;
      this._writer = undefined;
      this._writableStreamController = undefined;
      this._writeRequests = [];
      this._inFlightWriteRequest = undefined;
      this._closeRequest = undefined;
      this._inFlightCloseRequest = undefined;
      this._pendingAbortRequest = undefined;
      this._backpressure = false;
      var type = underlyingSink.type;
      if (type !== undefined) {
        throw new RangeError('Invalid type is specified');
      }
      this._writableStreamController = new WritableStreamDefaultController(this, underlyingSink, size, highWaterMark);
      this._writableStreamController.__startSteps();
    }
    _createClass(WritableStream, [{
      key: 'abort',
      value: function abort(reason) {
        if (IsWritableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('abort'));
        }
        if (IsWritableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('Cannot abort a stream that already has a writer'));
        }
        return WritableStreamAbort(this, reason);
      }
    }, {
      key: 'getWriter',
      value: function getWriter() {
        if (IsWritableStream(this) === false) {
          throw streamBrandCheckException('getWriter');
        }
        return AcquireWritableStreamDefaultWriter(this);
      }
    }, {
      key: 'locked',
      get: function get() {
        if (IsWritableStream(this) === false) {
          throw streamBrandCheckException('locked');
        }
        return IsWritableStreamLocked(this);
      }
    }]);
    return WritableStream;
  }();
  module.exports = {
    AcquireWritableStreamDefaultWriter: AcquireWritableStreamDefaultWriter,
    IsWritableStream: IsWritableStream,
    IsWritableStreamLocked: IsWritableStreamLocked,
    WritableStream: WritableStream,
    WritableStreamAbort: WritableStreamAbort,
    WritableStreamDefaultControllerError: WritableStreamDefaultControllerError,
    WritableStreamDefaultWriterCloseWithErrorPropagation: WritableStreamDefaultWriterCloseWithErrorPropagation,
    WritableStreamDefaultWriterRelease: WritableStreamDefaultWriterRelease,
    WritableStreamDefaultWriterWrite: WritableStreamDefaultWriterWrite,
    WritableStreamCloseQueuedOrInFlight: WritableStreamCloseQueuedOrInFlight
  };
  function AcquireWritableStreamDefaultWriter(stream) {
    return new WritableStreamDefaultWriter(stream);
  }
  function IsWritableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
      return false;
    }
    return true;
  }
  function IsWritableStreamLocked(stream) {
    assert(IsWritableStream(stream) === true, 'IsWritableStreamLocked should only be used on known writable streams');
    if (stream._writer === undefined) {
      return false;
    }
    return true;
  }
  function WritableStreamAbort(stream, reason) {
    var state = stream._state;
    if (state === 'closed') {
      return Promise.resolve(undefined);
    }
    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    var error = new TypeError('Requested to abort');
    if (stream._pendingAbortRequest !== undefined) {
      return Promise.reject(error);
    }
    assert(state === 'writable' || state === 'erroring', 'state must be writable or erroring');
    var wasAlreadyErroring = false;
    if (state === 'erroring') {
      wasAlreadyErroring = true;
      reason = undefined;
    }
    var promise = new Promise(function (resolve, reject) {
      stream._pendingAbortRequest = {
        _resolve: resolve,
        _reject: reject,
        _reason: reason,
        _wasAlreadyErroring: wasAlreadyErroring
      };
    });
    if (wasAlreadyErroring === false) {
      WritableStreamStartErroring(stream, error);
    }
    return promise;
  }
  function WritableStreamAddWriteRequest(stream) {
    assert(IsWritableStreamLocked(stream) === true);
    assert(stream._state === 'writable');
    var promise = new Promise(function (resolve, reject) {
      var writeRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._writeRequests.push(writeRequest);
    });
    return promise;
  }
  function WritableStreamDealWithRejection(stream, error) {
    var state = stream._state;
    if (state === 'writable') {
      WritableStreamStartErroring(stream, error);
      return;
    }
    assert(state === 'erroring');
    WritableStreamFinishErroring(stream);
  }
  function WritableStreamStartErroring(stream, reason) {
    assert(stream._storedError === undefined, 'stream._storedError === undefined');
    assert(stream._state === 'writable', 'state must be writable');
    var controller = stream._writableStreamController;
    assert(controller !== undefined, 'controller must not be undefined');
    stream._state = 'erroring';
    stream._storedError = reason;
    var writer = stream._writer;
    if (writer !== undefined) {
      WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
    }
    if (WritableStreamHasOperationMarkedInFlight(stream) === false && controller._started === true) {
      WritableStreamFinishErroring(stream);
    }
  }
  function WritableStreamFinishErroring(stream) {
    assert(stream._state === 'erroring', 'stream._state === erroring');
    assert(WritableStreamHasOperationMarkedInFlight(stream) === false, 'WritableStreamHasOperationMarkedInFlight(stream) === false');
    stream._state = 'errored';
    stream._writableStreamController.__errorSteps();
    var storedError = stream._storedError;
    for (var i = 0; i < stream._writeRequests.length; i++) {
      var writeRequest = stream._writeRequests[i];
      writeRequest._reject(storedError);
    }
    stream._writeRequests = [];
    if (stream._pendingAbortRequest === undefined) {
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      return;
    }
    var abortRequest = stream._pendingAbortRequest;
    stream._pendingAbortRequest = undefined;
    if (abortRequest._wasAlreadyErroring === true) {
      abortRequest._reject(storedError);
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      return;
    }
    var promise = stream._writableStreamController.__abortSteps(abortRequest._reason);
    promise.then(function () {
      abortRequest._resolve();
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    }, function (reason) {
      abortRequest._reject(reason);
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    });
  }
  function WritableStreamFinishInFlightWrite(stream) {
    assert(stream._inFlightWriteRequest !== undefined);
    stream._inFlightWriteRequest._resolve(undefined);
    stream._inFlightWriteRequest = undefined;
  }
  function WritableStreamFinishInFlightWriteWithError(stream, error) {
    assert(stream._inFlightWriteRequest !== undefined);
    stream._inFlightWriteRequest._reject(error);
    stream._inFlightWriteRequest = undefined;
    assert(stream._state === 'writable' || stream._state === 'erroring');
    WritableStreamDealWithRejection(stream, error);
  }
  function WritableStreamFinishInFlightClose(stream) {
    assert(stream._inFlightCloseRequest !== undefined);
    stream._inFlightCloseRequest._resolve(undefined);
    stream._inFlightCloseRequest = undefined;
    var state = stream._state;
    assert(state === 'writable' || state === 'erroring');
    if (state === 'erroring') {
      stream._storedError = undefined;
      if (stream._pendingAbortRequest !== undefined) {
        stream._pendingAbortRequest._resolve();
        stream._pendingAbortRequest = undefined;
      }
    }
    stream._state = 'closed';
    var writer = stream._writer;
    if (writer !== undefined) {
      defaultWriterClosedPromiseResolve(writer);
    }
    assert(stream._pendingAbortRequest === undefined, 'stream._pendingAbortRequest === undefined');
    assert(stream._storedError === undefined, 'stream._storedError === undefined');
  }
  function WritableStreamFinishInFlightCloseWithError(stream, error) {
    assert(stream._inFlightCloseRequest !== undefined);
    stream._inFlightCloseRequest._reject(error);
    stream._inFlightCloseRequest = undefined;
    assert(stream._state === 'writable' || stream._state === 'erroring');
    if (stream._pendingAbortRequest !== undefined) {
      stream._pendingAbortRequest._reject(error);
      stream._pendingAbortRequest = undefined;
    }
    WritableStreamDealWithRejection(stream, error);
  }
  function WritableStreamCloseQueuedOrInFlight(stream) {
    if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
      return false;
    }
    return true;
  }
  function WritableStreamHasOperationMarkedInFlight(stream) {
    if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
      return false;
    }
    return true;
  }
  function WritableStreamMarkCloseRequestInFlight(stream) {
    assert(stream._inFlightCloseRequest === undefined);
    assert(stream._closeRequest !== undefined);
    stream._inFlightCloseRequest = stream._closeRequest;
    stream._closeRequest = undefined;
  }
  function WritableStreamMarkFirstWriteRequestInFlight(stream) {
    assert(stream._inFlightWriteRequest === undefined, 'there must be no pending write request');
    assert(stream._writeRequests.length !== 0, 'writeRequests must not be empty');
    stream._inFlightWriteRequest = stream._writeRequests.shift();
  }
  function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
    assert(stream._state === 'errored', '_stream_.[[state]] is `"errored"`');
    if (stream._closeRequest !== undefined) {
      assert(stream._inFlightCloseRequest === undefined);
      stream._closeRequest._reject(stream._storedError);
      stream._closeRequest = undefined;
    }
    var writer = stream._writer;
    if (writer !== undefined) {
      defaultWriterClosedPromiseReject(writer, stream._storedError);
      writer._closedPromise.catch(function () {});
    }
  }
  function WritableStreamUpdateBackpressure(stream, backpressure) {
    assert(stream._state === 'writable');
    assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
    var writer = stream._writer;
    if (writer !== undefined && backpressure !== stream._backpressure) {
      if (backpressure === true) {
        defaultWriterReadyPromiseReset(writer);
      } else {
        assert(backpressure === false);
        defaultWriterReadyPromiseResolve(writer);
      }
    }
    stream._backpressure = backpressure;
  }
  var WritableStreamDefaultWriter = function () {
    function WritableStreamDefaultWriter(stream) {
      _classCallCheck(this, WritableStreamDefaultWriter);
      if (IsWritableStream(stream) === false) {
        throw new TypeError('WritableStreamDefaultWriter can only be constructed with a WritableStream instance');
      }
      if (IsWritableStreamLocked(stream) === true) {
        throw new TypeError('This stream has already been locked for exclusive writing by another writer');
      }
      this._ownerWritableStream = stream;
      stream._writer = this;
      var state = stream._state;
      if (state === 'writable') {
        if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._backpressure === true) {
          defaultWriterReadyPromiseInitialize(this);
        } else {
          defaultWriterReadyPromiseInitializeAsResolved(this);
        }
        defaultWriterClosedPromiseInitialize(this);
      } else if (state === 'erroring') {
        defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
        this._readyPromise.catch(function () {});
        defaultWriterClosedPromiseInitialize(this);
      } else if (state === 'closed') {
        defaultWriterReadyPromiseInitializeAsResolved(this);
        defaultWriterClosedPromiseInitializeAsResolved(this);
      } else {
        assert(state === 'errored', 'state must be errored');
        var storedError = stream._storedError;
        defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
        this._readyPromise.catch(function () {});
        defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
        this._closedPromise.catch(function () {});
      }
    }
    _createClass(WritableStreamDefaultWriter, [{
      key: 'abort',
      value: function abort(reason) {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('abort'));
        }
        if (this._ownerWritableStream === undefined) {
          return Promise.reject(defaultWriterLockException('abort'));
        }
        return WritableStreamDefaultWriterAbort(this, reason);
      }
    }, {
      key: 'close',
      value: function close() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('close'));
        }
        var stream = this._ownerWritableStream;
        if (stream === undefined) {
          return Promise.reject(defaultWriterLockException('close'));
        }
        if (WritableStreamCloseQueuedOrInFlight(stream) === true) {
          return Promise.reject(new TypeError('cannot close an already-closing stream'));
        }
        return WritableStreamDefaultWriterClose(this);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          throw defaultWriterBrandCheckException('releaseLock');
        }
        var stream = this._ownerWritableStream;
        if (stream === undefined) {
          return;
        }
        assert(stream._writer !== undefined);
        WritableStreamDefaultWriterRelease(this);
      }
    }, {
      key: 'write',
      value: function write(chunk) {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('write'));
        }
        if (this._ownerWritableStream === undefined) {
          return Promise.reject(defaultWriterLockException('write to'));
        }
        return WritableStreamDefaultWriterWrite(this, chunk);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('closed'));
        }
        return this._closedPromise;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          throw defaultWriterBrandCheckException('desiredSize');
        }
        if (this._ownerWritableStream === undefined) {
          throw defaultWriterLockException('desiredSize');
        }
        return WritableStreamDefaultWriterGetDesiredSize(this);
      }
    }, {
      key: 'ready',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('ready'));
        }
        return this._readyPromise;
      }
    }]);
    return WritableStreamDefaultWriter;
  }();
  function IsWritableStreamDefaultWriter(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
      return false;
    }
    return true;
  }
  function WritableStreamDefaultWriterAbort(writer, reason) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    return WritableStreamAbort(stream, reason);
  }
  function WritableStreamDefaultWriterClose(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var state = stream._state;
    if (state === 'closed' || state === 'errored') {
      return Promise.reject(new TypeError('The stream (in ' + state + ' state) is not in the writable state and cannot be closed'));
    }
    assert(state === 'writable' || state === 'erroring');
    assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
    var promise = new Promise(function (resolve, reject) {
      var closeRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._closeRequest = closeRequest;
    });
    if (stream._backpressure === true && state === 'writable') {
      defaultWriterReadyPromiseResolve(writer);
    }
    WritableStreamDefaultControllerClose(stream._writableStreamController);
    return promise;
  }
  function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var state = stream._state;
    if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
      return Promise.resolve();
    }
    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    assert(state === 'writable' || state === 'erroring');
    return WritableStreamDefaultWriterClose(writer);
  }
  function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
    if (writer._closedPromiseState === 'pending') {
      defaultWriterClosedPromiseReject(writer, error);
    } else {
      defaultWriterClosedPromiseResetToRejected(writer, error);
    }
    writer._closedPromise.catch(function () {});
  }
  function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
    if (writer._readyPromiseState === 'pending') {
      defaultWriterReadyPromiseReject(writer, error);
    } else {
      defaultWriterReadyPromiseResetToRejected(writer, error);
    }
    writer._readyPromise.catch(function () {});
  }
  function WritableStreamDefaultWriterGetDesiredSize(writer) {
    var stream = writer._ownerWritableStream;
    var state = stream._state;
    if (state === 'errored' || state === 'erroring') {
      return null;
    }
    if (state === 'closed') {
      return 0;
    }
    return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
  }
  function WritableStreamDefaultWriterRelease(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    assert(stream._writer === writer);
    var releasedError = new TypeError('Writer was released and can no longer be used to monitor the stream\'s closedness');
    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
    WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
    stream._writer = undefined;
    writer._ownerWritableStream = undefined;
  }
  function WritableStreamDefaultWriterWrite(writer, chunk) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var controller = stream._writableStreamController;
    var chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
    if (stream !== writer._ownerWritableStream) {
      return Promise.reject(defaultWriterLockException('write to'));
    }
    var state = stream._state;
    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
      return Promise.reject(new TypeError('The stream is closing or closed and cannot be written to'));
    }
    if (state === 'erroring') {
      return Promise.reject(stream._storedError);
    }
    assert(state === 'writable');
    var promise = WritableStreamAddWriteRequest(stream);
    WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
    return promise;
  }
  var WritableStreamDefaultController = function () {
    function WritableStreamDefaultController(stream, underlyingSink, size, highWaterMark) {
      _classCallCheck(this, WritableStreamDefaultController);
      if (IsWritableStream(stream) === false) {
        throw new TypeError('WritableStreamDefaultController can only be constructed with a WritableStream instance');
      }
      if (stream._writableStreamController !== undefined) {
        throw new TypeError('WritableStreamDefaultController instances can only be created by the WritableStream constructor');
      }
      this._controlledWritableStream = stream;
      this._underlyingSink = underlyingSink;
      this._queue = undefined;
      this._queueTotalSize = undefined;
      ResetQueue(this);
      this._started = false;
      var normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
      this._strategySize = normalizedStrategy.size;
      this._strategyHWM = normalizedStrategy.highWaterMark;
      var backpressure = WritableStreamDefaultControllerGetBackpressure(this);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }
    _createClass(WritableStreamDefaultController, [{
      key: 'error',
      value: function error(e) {
        if (IsWritableStreamDefaultController(this) === false) {
          throw new TypeError('WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController');
        }
        var state = this._controlledWritableStream._state;
        if (state !== 'writable') {
          return;
        }
        WritableStreamDefaultControllerError(this, e);
      }
    }, {
      key: '__abortSteps',
      value: function __abortSteps(reason) {
        return PromiseInvokeOrNoop(this._underlyingSink, 'abort', [reason]);
      }
    }, {
      key: '__errorSteps',
      value: function __errorSteps() {
        ResetQueue(this);
      }
    }, {
      key: '__startSteps',
      value: function __startSteps() {
        var _this = this;
        var startResult = InvokeOrNoop(this._underlyingSink, 'start', [this]);
        var stream = this._controlledWritableStream;
        Promise.resolve(startResult).then(function () {
          assert(stream._state === 'writable' || stream._state === 'erroring');
          _this._started = true;
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(_this);
        }, function (r) {
          assert(stream._state === 'writable' || stream._state === 'erroring');
          _this._started = true;
          WritableStreamDealWithRejection(stream, r);
        }).catch(rethrowAssertionErrorRejection);
      }
    }]);
    return WritableStreamDefaultController;
  }();
  function WritableStreamDefaultControllerClose(controller) {
    EnqueueValueWithSize(controller, 'close', 0);
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }
  function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
    var strategySize = controller._strategySize;
    if (strategySize === undefined) {
      return 1;
    }
    try {
      return strategySize(chunk);
    } catch (chunkSizeE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
      return 1;
    }
  }
  function WritableStreamDefaultControllerGetDesiredSize(controller) {
    return controller._strategyHWM - controller._queueTotalSize;
  }
  function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
    var writeRecord = { chunk: chunk };
    try {
      EnqueueValueWithSize(controller, writeRecord, chunkSize);
    } catch (enqueueE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
      return;
    }
    var stream = controller._controlledWritableStream;
    if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._state === 'writable') {
      var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }
  function IsWritableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSink')) {
      return false;
    }
    return true;
  }
  function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
    var stream = controller._controlledWritableStream;
    if (controller._started === false) {
      return;
    }
    if (stream._inFlightWriteRequest !== undefined) {
      return;
    }
    var state = stream._state;
    if (state === 'closed' || state === 'errored') {
      return;
    }
    if (state === 'erroring') {
      WritableStreamFinishErroring(stream);
      return;
    }
    if (controller._queue.length === 0) {
      return;
    }
    var writeRecord = PeekQueueValue(controller);
    if (writeRecord === 'close') {
      WritableStreamDefaultControllerProcessClose(controller);
    } else {
      WritableStreamDefaultControllerProcessWrite(controller, writeRecord.chunk);
    }
  }
  function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
    if (controller._controlledWritableStream._state === 'writable') {
      WritableStreamDefaultControllerError(controller, error);
    }
  }
  function WritableStreamDefaultControllerProcessClose(controller) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkCloseRequestInFlight(stream);
    DequeueValue(controller);
    assert(controller._queue.length === 0, 'queue must be empty once the final write record is dequeued');
    var sinkClosePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'close', []);
    sinkClosePromise.then(function () {
      WritableStreamFinishInFlightClose(stream);
    }, function (reason) {
      WritableStreamFinishInFlightCloseWithError(stream, reason);
    }).catch(rethrowAssertionErrorRejection);
  }
  function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkFirstWriteRequestInFlight(stream);
    var sinkWritePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'write', [chunk, controller]);
    sinkWritePromise.then(function () {
      WritableStreamFinishInFlightWrite(stream);
      var state = stream._state;
      assert(state === 'writable' || state === 'erroring');
      DequeueValue(controller);
      if (WritableStreamCloseQueuedOrInFlight(stream) === false && state === 'writable') {
        var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
      }
      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, function (reason) {
      WritableStreamFinishInFlightWriteWithError(stream, reason);
    }).catch(rethrowAssertionErrorRejection);
  }
  function WritableStreamDefaultControllerGetBackpressure(controller) {
    var desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
    return desiredSize <= 0;
  }
  function WritableStreamDefaultControllerError(controller, error) {
    var stream = controller._controlledWritableStream;
    assert(stream._state === 'writable');
    WritableStreamStartErroring(stream, error);
  }
  function streamBrandCheckException(name) {
    return new TypeError('WritableStream.prototype.' + name + ' can only be used on a WritableStream');
  }
  function defaultWriterBrandCheckException(name) {
    return new TypeError('WritableStreamDefaultWriter.prototype.' + name + ' can only be used on a WritableStreamDefaultWriter');
  }
  function defaultWriterLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released writer');
  }
  function defaultWriterClosedPromiseInitialize(writer) {
    writer._closedPromise = new Promise(function (resolve, reject) {
      writer._closedPromise_resolve = resolve;
      writer._closedPromise_reject = reject;
      writer._closedPromiseState = 'pending';
    });
  }
  function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
    writer._closedPromise = Promise.reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
  }
  function defaultWriterClosedPromiseInitializeAsResolved(writer) {
    writer._closedPromise = Promise.resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
  }
  function defaultWriterClosedPromiseReject(writer, reason) {
    assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
    assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
    assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');
    writer._closedPromise_reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
  }
  function defaultWriterClosedPromiseResetToRejected(writer, reason) {
    assert(writer._closedPromise_resolve === undefined, 'writer._closedPromise_resolve === undefined');
    assert(writer._closedPromise_reject === undefined, 'writer._closedPromise_reject === undefined');
    assert(writer._closedPromiseState !== 'pending', 'writer._closedPromiseState is not pending');
    writer._closedPromise = Promise.reject(reason);
    writer._closedPromiseState = 'rejected';
  }
  function defaultWriterClosedPromiseResolve(writer) {
    assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
    assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
    assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');
    writer._closedPromise_resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
  }
  function defaultWriterReadyPromiseInitialize(writer) {
    writer._readyPromise = new Promise(function (resolve, reject) {
      writer._readyPromise_resolve = resolve;
      writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
  }
  function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
    writer._readyPromise = Promise.reject(reason);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
  }
  function defaultWriterReadyPromiseInitializeAsResolved(writer) {
    writer._readyPromise = Promise.resolve(undefined);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
  }
  function defaultWriterReadyPromiseReject(writer, reason) {
    assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
    assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');
    writer._readyPromise_reject(reason);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
  }
  function defaultWriterReadyPromiseReset(writer) {
    assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
    assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
    writer._readyPromise = new Promise(function (resolve, reject) {
      writer._readyPromise_resolve = resolve;
      writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
  }
  function defaultWriterReadyPromiseResetToRejected(writer, reason) {
    assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
    assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
    writer._readyPromise = Promise.reject(reason);
    writer._readyPromiseState = 'rejected';
  }
  function defaultWriterReadyPromiseResolve(writer) {
    assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
    assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');
    writer._readyPromise_resolve(undefined);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
  }
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _require = __w_pdfjs_require__(0),
      IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber;
  var _require2 = __w_pdfjs_require__(1),
      assert = _require2.assert;
  exports.DequeueValue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    assert(container._queue.length > 0, 'Spec-level failure: should never dequeue from an empty queue.');
    var pair = container._queue.shift();
    container._queueTotalSize -= pair.size;
    if (container._queueTotalSize < 0) {
      container._queueTotalSize = 0;
    }
    return pair.value;
  };
  exports.EnqueueValueWithSize = function (container, value, size) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and ' + '[[queueTotalSize]].');
    size = Number(size);
    if (!IsFiniteNonNegativeNumber(size)) {
      throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
    }
    container._queue.push({
      value: value,
      size: size
    });
    container._queueTotalSize += size;
  };
  exports.PeekQueueValue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    assert(container._queue.length > 0, 'Spec-level failure: should never peek at an empty queue.');
    var pair = container._queue[0];
    return pair.value;
  };
  exports.ResetQueue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    container._queue = [];
    container._queueTotalSize = 0;
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = __w_pdfjs_require__(0),
      ArrayBufferCopy = _require.ArrayBufferCopy,
      CreateIterResultObject = _require.CreateIterResultObject,
      IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber,
      InvokeOrNoop = _require.InvokeOrNoop,
      PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
      TransferArrayBuffer = _require.TransferArrayBuffer,
      ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
      ValidateAndNormalizeHighWaterMark = _require.ValidateAndNormalizeHighWaterMark;
  var _require2 = __w_pdfjs_require__(0),
      createArrayFromList = _require2.createArrayFromList,
      createDataProperty = _require2.createDataProperty,
      typeIsObject = _require2.typeIsObject;
  var _require3 = __w_pdfjs_require__(1),
      assert = _require3.assert,
      rethrowAssertionErrorRejection = _require3.rethrowAssertionErrorRejection;
  var _require4 = __w_pdfjs_require__(3),
      DequeueValue = _require4.DequeueValue,
      EnqueueValueWithSize = _require4.EnqueueValueWithSize,
      ResetQueue = _require4.ResetQueue;
  var _require5 = __w_pdfjs_require__(2),
      AcquireWritableStreamDefaultWriter = _require5.AcquireWritableStreamDefaultWriter,
      IsWritableStream = _require5.IsWritableStream,
      IsWritableStreamLocked = _require5.IsWritableStreamLocked,
      WritableStreamAbort = _require5.WritableStreamAbort,
      WritableStreamDefaultWriterCloseWithErrorPropagation = _require5.WritableStreamDefaultWriterCloseWithErrorPropagation,
      WritableStreamDefaultWriterRelease = _require5.WritableStreamDefaultWriterRelease,
      WritableStreamDefaultWriterWrite = _require5.WritableStreamDefaultWriterWrite,
      WritableStreamCloseQueuedOrInFlight = _require5.WritableStreamCloseQueuedOrInFlight;
  var ReadableStream = function () {
    function ReadableStream() {
      var underlyingSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          size = _ref.size,
          highWaterMark = _ref.highWaterMark;
      _classCallCheck(this, ReadableStream);
      this._state = 'readable';
      this._reader = undefined;
      this._storedError = undefined;
      this._disturbed = false;
      this._readableStreamController = undefined;
      var type = underlyingSource.type;
      var typeString = String(type);
      if (typeString === 'bytes') {
        if (highWaterMark === undefined) {
          highWaterMark = 0;
        }
        this._readableStreamController = new ReadableByteStreamController(this, underlyingSource, highWaterMark);
      } else if (type === undefined) {
        if (highWaterMark === undefined) {
          highWaterMark = 1;
        }
        this._readableStreamController = new ReadableStreamDefaultController(this, underlyingSource, size, highWaterMark);
      } else {
        throw new RangeError('Invalid type is specified');
      }
    }
    _createClass(ReadableStream, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (IsReadableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('cancel'));
        }
        if (IsReadableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('Cannot cancel a stream that already has a reader'));
        }
        return ReadableStreamCancel(this, reason);
      }
    }, {
      key: 'getReader',
      value: function getReader() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            mode = _ref2.mode;
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('getReader');
        }
        if (mode === undefined) {
          return AcquireReadableStreamDefaultReader(this);
        }
        mode = String(mode);
        if (mode === 'byob') {
          return AcquireReadableStreamBYOBReader(this);
        }
        throw new RangeError('Invalid mode is specified');
      }
    }, {
      key: 'pipeThrough',
      value: function pipeThrough(_ref3, options) {
        var writable = _ref3.writable,
            readable = _ref3.readable;
        var promise = this.pipeTo(writable, options);
        ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise);
        return readable;
      }
    }, {
      key: 'pipeTo',
      value: function pipeTo(dest) {
        var _this = this;
        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            preventClose = _ref4.preventClose,
            preventAbort = _ref4.preventAbort,
            preventCancel = _ref4.preventCancel;
        if (IsReadableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('pipeTo'));
        }
        if (IsWritableStream(dest) === false) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo\'s first argument must be a WritableStream'));
        }
        preventClose = Boolean(preventClose);
        preventAbort = Boolean(preventAbort);
        preventCancel = Boolean(preventCancel);
        if (IsReadableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
        }
        if (IsWritableStreamLocked(dest) === true) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
        }
        var reader = AcquireReadableStreamDefaultReader(this);
        var writer = AcquireWritableStreamDefaultWriter(dest);
        var shuttingDown = false;
        var currentWrite = Promise.resolve();
        return new Promise(function (resolve, reject) {
          function pipeLoop() {
            currentWrite = Promise.resolve();
            if (shuttingDown === true) {
              return Promise.resolve();
            }
            return writer._readyPromise.then(function () {
              return ReadableStreamDefaultReaderRead(reader).then(function (_ref5) {
                var value = _ref5.value,
                    done = _ref5.done;
                if (done === true) {
                  return;
                }
                currentWrite = WritableStreamDefaultWriterWrite(writer, value).catch(function () {});
              });
            }).then(pipeLoop);
          }
          isOrBecomesErrored(_this, reader._closedPromise, function (storedError) {
            if (preventAbort === false) {
              shutdownWithAction(function () {
                return WritableStreamAbort(dest, storedError);
              }, true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesErrored(dest, writer._closedPromise, function (storedError) {
            if (preventCancel === false) {
              shutdownWithAction(function () {
                return ReadableStreamCancel(_this, storedError);
              }, true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesClosed(_this, reader._closedPromise, function () {
            if (preventClose === false) {
              shutdownWithAction(function () {
                return WritableStreamDefaultWriterCloseWithErrorPropagation(writer);
              });
            } else {
              shutdown();
            }
          });
          if (WritableStreamCloseQueuedOrInFlight(dest) === true || dest._state === 'closed') {
            var destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
            if (preventCancel === false) {
              shutdownWithAction(function () {
                return ReadableStreamCancel(_this, destClosed);
              }, true, destClosed);
            } else {
              shutdown(true, destClosed);
            }
          }
          pipeLoop().catch(function (err) {
            currentWrite = Promise.resolve();
            rethrowAssertionErrorRejection(err);
          });
          function waitForWritesToFinish() {
            var oldCurrentWrite = currentWrite;
            return currentWrite.then(function () {
              return oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined;
            });
          }
          function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === 'errored') {
              action(stream._storedError);
            } else {
              promise.catch(action).catch(rethrowAssertionErrorRejection);
            }
          }
          function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === 'closed') {
              action();
            } else {
              promise.then(action).catch(rethrowAssertionErrorRejection);
            }
          }
          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown === true) {
              return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
              waitForWritesToFinish().then(doTheRest);
            } else {
              doTheRest();
            }
            function doTheRest() {
              action().then(function () {
                return finalize(originalIsError, originalError);
              }, function (newError) {
                return finalize(true, newError);
              }).catch(rethrowAssertionErrorRejection);
            }
          }
          function shutdown(isError, error) {
            if (shuttingDown === true) {
              return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
              waitForWritesToFinish().then(function () {
                return finalize(isError, error);
              }).catch(rethrowAssertionErrorRejection);
            } else {
              finalize(isError, error);
            }
          }
          function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);
            if (isError) {
              reject(error);
            } else {
              resolve(undefined);
            }
          }
        });
      }
    }, {
      key: 'tee',
      value: function tee() {
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('tee');
        }
        var branches = ReadableStreamTee(this, false);
        return createArrayFromList(branches);
      }
    }, {
      key: 'locked',
      get: function get() {
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('locked');
        }
        return IsReadableStreamLocked(this);
      }
    }]);
    return ReadableStream;
  }();
  module.exports = {
    ReadableStream: ReadableStream,
    IsReadableStreamDisturbed: IsReadableStreamDisturbed,
    ReadableStreamDefaultControllerClose: ReadableStreamDefaultControllerClose,
    ReadableStreamDefaultControllerEnqueue: ReadableStreamDefaultControllerEnqueue,
    ReadableStreamDefaultControllerError: ReadableStreamDefaultControllerError,
    ReadableStreamDefaultControllerGetDesiredSize: ReadableStreamDefaultControllerGetDesiredSize
  };
  function AcquireReadableStreamBYOBReader(stream) {
    return new ReadableStreamBYOBReader(stream);
  }
  function AcquireReadableStreamDefaultReader(stream) {
    return new ReadableStreamDefaultReader(stream);
  }
  function IsReadableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
      return false;
    }
    return true;
  }
  function IsReadableStreamDisturbed(stream) {
    assert(IsReadableStream(stream) === true, 'IsReadableStreamDisturbed should only be used on known readable streams');
    return stream._disturbed;
  }
  function IsReadableStreamLocked(stream) {
    assert(IsReadableStream(stream) === true, 'IsReadableStreamLocked should only be used on known readable streams');
    if (stream._reader === undefined) {
      return false;
    }
    return true;
  }
  function ReadableStreamTee(stream, cloneForBranch2) {
    assert(IsReadableStream(stream) === true);
    assert(typeof cloneForBranch2 === 'boolean');
    var reader = AcquireReadableStreamDefaultReader(stream);
    var teeState = {
      closedOrErrored: false,
      canceled1: false,
      canceled2: false,
      reason1: undefined,
      reason2: undefined
    };
    teeState.promise = new Promise(function (resolve) {
      teeState._resolve = resolve;
    });
    var pull = create_ReadableStreamTeePullFunction();
    pull._reader = reader;
    pull._teeState = teeState;
    pull._cloneForBranch2 = cloneForBranch2;
    var cancel1 = create_ReadableStreamTeeBranch1CancelFunction();
    cancel1._stream = stream;
    cancel1._teeState = teeState;
    var cancel2 = create_ReadableStreamTeeBranch2CancelFunction();
    cancel2._stream = stream;
    cancel2._teeState = teeState;
    var underlyingSource1 = Object.create(Object.prototype);
    createDataProperty(underlyingSource1, 'pull', pull);
    createDataProperty(underlyingSource1, 'cancel', cancel1);
    var branch1Stream = new ReadableStream(underlyingSource1);
    var underlyingSource2 = Object.create(Object.prototype);
    createDataProperty(underlyingSource2, 'pull', pull);
    createDataProperty(underlyingSource2, 'cancel', cancel2);
    var branch2Stream = new ReadableStream(underlyingSource2);
    pull._branch1 = branch1Stream._readableStreamController;
    pull._branch2 = branch2Stream._readableStreamController;
    reader._closedPromise.catch(function (r) {
      if (teeState.closedOrErrored === true) {
        return;
      }
      ReadableStreamDefaultControllerError(pull._branch1, r);
      ReadableStreamDefaultControllerError(pull._branch2, r);
      teeState.closedOrErrored = true;
    });
    return [branch1Stream, branch2Stream];
  }
  function create_ReadableStreamTeePullFunction() {
    function f() {
      var reader = f._reader,
          branch1 = f._branch1,
          branch2 = f._branch2,
          teeState = f._teeState;
      return ReadableStreamDefaultReaderRead(reader).then(function (result) {
        assert(typeIsObject(result));
        var value = result.value;
        var done = result.done;
        assert(typeof done === 'boolean');
        if (done === true && teeState.closedOrErrored === false) {
          if (teeState.canceled1 === false) {
            ReadableStreamDefaultControllerClose(branch1);
          }
          if (teeState.canceled2 === false) {
            ReadableStreamDefaultControllerClose(branch2);
          }
          teeState.closedOrErrored = true;
        }
        if (teeState.closedOrErrored === true) {
          return;
        }
        var value1 = value;
        var value2 = value;
        if (teeState.canceled1 === false) {
          ReadableStreamDefaultControllerEnqueue(branch1, value1);
        }
        if (teeState.canceled2 === false) {
          ReadableStreamDefaultControllerEnqueue(branch2, value2);
        }
      });
    }
    return f;
  }
  function create_ReadableStreamTeeBranch1CancelFunction() {
    function f(reason) {
      var stream = f._stream,
          teeState = f._teeState;
      teeState.canceled1 = true;
      teeState.reason1 = reason;
      if (teeState.canceled2 === true) {
        var compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
        var cancelResult = ReadableStreamCancel(stream, compositeReason);
        teeState._resolve(cancelResult);
      }
      return teeState.promise;
    }
    return f;
  }
  function create_ReadableStreamTeeBranch2CancelFunction() {
    function f(reason) {
      var stream = f._stream,
          teeState = f._teeState;
      teeState.canceled2 = true;
      teeState.reason2 = reason;
      if (teeState.canceled1 === true) {
        var compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
        var cancelResult = ReadableStreamCancel(stream, compositeReason);
        teeState._resolve(cancelResult);
      }
      return teeState.promise;
    }
    return f;
  }
  function ReadableStreamAddReadIntoRequest(stream) {
    assert(IsReadableStreamBYOBReader(stream._reader) === true);
    assert(stream._state === 'readable' || stream._state === 'closed');
    var promise = new Promise(function (resolve, reject) {
      var readIntoRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._reader._readIntoRequests.push(readIntoRequest);
    });
    return promise;
  }
  function ReadableStreamAddReadRequest(stream) {
    assert(IsReadableStreamDefaultReader(stream._reader) === true);
    assert(stream._state === 'readable');
    var promise = new Promise(function (resolve, reject) {
      var readRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._reader._readRequests.push(readRequest);
    });
    return promise;
  }
  function ReadableStreamCancel(stream, reason) {
    stream._disturbed = true;
    if (stream._state === 'closed') {
      return Promise.resolve(undefined);
    }
    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    ReadableStreamClose(stream);
    var sourceCancelPromise = stream._readableStreamController.__cancelSteps(reason);
    return sourceCancelPromise.then(function () {
      return undefined;
    });
  }
  function ReadableStreamClose(stream) {
    assert(stream._state === 'readable');
    stream._state = 'closed';
    var reader = stream._reader;
    if (reader === undefined) {
      return undefined;
    }
    if (IsReadableStreamDefaultReader(reader) === true) {
      for (var i = 0; i < reader._readRequests.length; i++) {
        var _resolve = reader._readRequests[i]._resolve;
        _resolve(CreateIterResultObject(undefined, true));
      }
      reader._readRequests = [];
    }
    defaultReaderClosedPromiseResolve(reader);
    return undefined;
  }
  function ReadableStreamError(stream, e) {
    assert(IsReadableStream(stream) === true, 'stream must be ReadableStream');
    assert(stream._state === 'readable', 'state must be readable');
    stream._state = 'errored';
    stream._storedError = e;
    var reader = stream._reader;
    if (reader === undefined) {
      return undefined;
    }
    if (IsReadableStreamDefaultReader(reader) === true) {
      for (var i = 0; i < reader._readRequests.length; i++) {
        var readRequest = reader._readRequests[i];
        readRequest._reject(e);
      }
      reader._readRequests = [];
    } else {
      assert(IsReadableStreamBYOBReader(reader), 'reader must be ReadableStreamBYOBReader');
      for (var _i = 0; _i < reader._readIntoRequests.length; _i++) {
        var readIntoRequest = reader._readIntoRequests[_i];
        readIntoRequest._reject(e);
      }
      reader._readIntoRequests = [];
    }
    defaultReaderClosedPromiseReject(reader, e);
    reader._closedPromise.catch(function () {});
  }
  function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
    var reader = stream._reader;
    assert(reader._readIntoRequests.length > 0);
    var readIntoRequest = reader._readIntoRequests.shift();
    readIntoRequest._resolve(CreateIterResultObject(chunk, done));
  }
  function ReadableStreamFulfillReadRequest(stream, chunk, done) {
    var reader = stream._reader;
    assert(reader._readRequests.length > 0);
    var readRequest = reader._readRequests.shift();
    readRequest._resolve(CreateIterResultObject(chunk, done));
  }
  function ReadableStreamGetNumReadIntoRequests(stream) {
    return stream._reader._readIntoRequests.length;
  }
  function ReadableStreamGetNumReadRequests(stream) {
    return stream._reader._readRequests.length;
  }
  function ReadableStreamHasBYOBReader(stream) {
    var reader = stream._reader;
    if (reader === undefined) {
      return false;
    }
    if (IsReadableStreamBYOBReader(reader) === false) {
      return false;
    }
    return true;
  }
  function ReadableStreamHasDefaultReader(stream) {
    var reader = stream._reader;
    if (reader === undefined) {
      return false;
    }
    if (IsReadableStreamDefaultReader(reader) === false) {
      return false;
    }
    return true;
  }
  var ReadableStreamDefaultReader = function () {
    function ReadableStreamDefaultReader(stream) {
      _classCallCheck(this, ReadableStreamDefaultReader);
      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableStreamDefaultReader can only be constructed with a ReadableStream instance');
      }
      if (IsReadableStreamLocked(stream) === true) {
        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
      }
      ReadableStreamReaderGenericInitialize(this, stream);
      this._readRequests = [];
    }
    _createClass(ReadableStreamDefaultReader, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
      }
    }, {
      key: 'read',
      value: function read() {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('read'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('read from'));
        }
        return ReadableStreamDefaultReaderRead(this);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (IsReadableStreamDefaultReader(this) === false) {
          throw defaultReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
          return;
        }
        if (this._readRequests.length > 0) {
          throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('closed'));
        }
        return this._closedPromise;
      }
    }]);
    return ReadableStreamDefaultReader;
  }();
  var ReadableStreamBYOBReader = function () {
    function ReadableStreamBYOBReader(stream) {
      _classCallCheck(this, ReadableStreamBYOBReader);
      if (!IsReadableStream(stream)) {
        throw new TypeError('ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a ' + 'byte source');
      }
      if (IsReadableByteStreamController(stream._readableStreamController) === false) {
        throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' + 'source');
      }
      if (IsReadableStreamLocked(stream)) {
        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
      }
      ReadableStreamReaderGenericInitialize(this, stream);
      this._readIntoRequests = [];
    }
    _createClass(ReadableStreamBYOBReader, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
      }
    }, {
      key: 'read',
      value: function read(view) {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('read'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('read from'));
        }
        if (!ArrayBuffer.isView(view)) {
          return Promise.reject(new TypeError('view must be an array buffer view'));
        }
        if (view.byteLength === 0) {
          return Promise.reject(new TypeError('view must have non-zero byteLength'));
        }
        return ReadableStreamBYOBReaderRead(this, view);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (!IsReadableStreamBYOBReader(this)) {
          throw byobReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
          return;
        }
        if (this._readIntoRequests.length > 0) {
          throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('closed'));
        }
        return this._closedPromise;
      }
    }]);
    return ReadableStreamBYOBReader;
  }();
  function IsReadableStreamBYOBReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
      return false;
    }
    return true;
  }
  function IsReadableStreamDefaultReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
      return false;
    }
    return true;
  }
  function ReadableStreamReaderGenericInitialize(reader, stream) {
    reader._ownerReadableStream = stream;
    stream._reader = reader;
    if (stream._state === 'readable') {
      defaultReaderClosedPromiseInitialize(reader);
    } else if (stream._state === 'closed') {
      defaultReaderClosedPromiseInitializeAsResolved(reader);
    } else {
      assert(stream._state === 'errored', 'state must be errored');
      defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
      reader._closedPromise.catch(function () {});
    }
  }
  function ReadableStreamReaderGenericCancel(reader, reason) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    return ReadableStreamCancel(stream, reason);
  }
  function ReadableStreamReaderGenericRelease(reader) {
    assert(reader._ownerReadableStream !== undefined);
    assert(reader._ownerReadableStream._reader === reader);
    if (reader._ownerReadableStream._state === 'readable') {
      defaultReaderClosedPromiseReject(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
    } else {
      defaultReaderClosedPromiseResetToRejected(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
    }
    reader._closedPromise.catch(function () {});
    reader._ownerReadableStream._reader = undefined;
    reader._ownerReadableStream = undefined;
  }
  function ReadableStreamBYOBReaderRead(reader, view) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    stream._disturbed = true;
    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    return ReadableByteStreamControllerPullInto(stream._readableStreamController, view);
  }
  function ReadableStreamDefaultReaderRead(reader) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    stream._disturbed = true;
    if (stream._state === 'closed') {
      return Promise.resolve(CreateIterResultObject(undefined, true));
    }
    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    assert(stream._state === 'readable');
    return stream._readableStreamController.__pullSteps();
  }
  var ReadableStreamDefaultController = function () {
    function ReadableStreamDefaultController(stream, underlyingSource, size, highWaterMark) {
      _classCallCheck(this, ReadableStreamDefaultController);
      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableStreamDefaultController can only be constructed with a ReadableStream instance');
      }
      if (stream._readableStreamController !== undefined) {
        throw new TypeError('ReadableStreamDefaultController instances can only be created by the ReadableStream constructor');
      }
      this._controlledReadableStream = stream;
      this._underlyingSource = underlyingSource;
      this._queue = undefined;
      this._queueTotalSize = undefined;
      ResetQueue(this);
      this._started = false;
      this._closeRequested = false;
      this._pullAgain = false;
      this._pulling = false;
      var normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
      this._strategySize = normalizedStrategy.size;
      this._strategyHWM = normalizedStrategy.highWaterMark;
      var controller = this;
      var startResult = InvokeOrNoop(underlyingSource, 'start', [this]);
      Promise.resolve(startResult).then(function () {
        controller._started = true;
        assert(controller._pulling === false);
        assert(controller._pullAgain === false);
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }, function (r) {
        ReadableStreamDefaultControllerErrorIfNeeded(controller, r);
      }).catch(rethrowAssertionErrorRejection);
    }
    _createClass(ReadableStreamDefaultController, [{
      key: 'close',
      value: function close() {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('close');
        }
        if (this._closeRequested === true) {
          throw new TypeError('The stream has already been closed; do not close it again!');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
        }
        ReadableStreamDefaultControllerClose(this);
      }
    }, {
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('enqueue');
        }
        if (this._closeRequested === true) {
          throw new TypeError('stream is closed or draining');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
        }
        return ReadableStreamDefaultControllerEnqueue(this, chunk);
      }
    }, {
      key: 'error',
      value: function error(e) {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('error');
        }
        var stream = this._controlledReadableStream;
        if (stream._state !== 'readable') {
          throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
        }
        ReadableStreamDefaultControllerError(this, e);
      }
    }, {
      key: '__cancelSteps',
      value: function __cancelSteps(reason) {
        ResetQueue(this);
        return PromiseInvokeOrNoop(this._underlyingSource, 'cancel', [reason]);
      }
    }, {
      key: '__pullSteps',
      value: function __pullSteps() {
        var stream = this._controlledReadableStream;
        if (this._queue.length > 0) {
          var chunk = DequeueValue(this);
          if (this._closeRequested === true && this._queue.length === 0) {
            ReadableStreamClose(stream);
          } else {
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }
          return Promise.resolve(CreateIterResultObject(chunk, false));
        }
        var pendingPromise = ReadableStreamAddReadRequest(stream);
        ReadableStreamDefaultControllerCallPullIfNeeded(this);
        return pendingPromise;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('desiredSize');
        }
        return ReadableStreamDefaultControllerGetDesiredSize(this);
      }
    }]);
    return ReadableStreamDefaultController;
  }();
  function IsReadableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSource')) {
      return false;
    }
    return true;
  }
  function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
    if (shouldPull === false) {
      return undefined;
    }
    if (controller._pulling === true) {
      controller._pullAgain = true;
      return undefined;
    }
    assert(controller._pullAgain === false);
    controller._pulling = true;
    var pullPromise = PromiseInvokeOrNoop(controller._underlyingSource, 'pull', [controller]);
    pullPromise.then(function () {
      controller._pulling = false;
      if (controller._pullAgain === true) {
        controller._pullAgain = false;
        return ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }
      return undefined;
    }, function (e) {
      ReadableStreamDefaultControllerErrorIfNeeded(controller, e);
    }).catch(rethrowAssertionErrorRejection);
    return undefined;
  }
  function ReadableStreamDefaultControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;
    if (stream._state === 'closed' || stream._state === 'errored') {
      return false;
    }
    if (controller._closeRequested === true) {
      return false;
    }
    if (controller._started === false) {
      return false;
    }
    if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }
    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
      return true;
    }
    return false;
  }
  function ReadableStreamDefaultControllerClose(controller) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    controller._closeRequested = true;
    if (controller._queue.length === 0) {
      ReadableStreamClose(stream);
    }
  }
  function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      ReadableStreamFulfillReadRequest(stream, chunk, false);
    } else {
      var chunkSize = 1;
      if (controller._strategySize !== undefined) {
        var strategySize = controller._strategySize;
        try {
          chunkSize = strategySize(chunk);
        } catch (chunkSizeE) {
          ReadableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
          throw chunkSizeE;
        }
      }
      try {
        EnqueueValueWithSize(controller, chunk, chunkSize);
      } catch (enqueueE) {
        ReadableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
        throw enqueueE;
      }
    }
    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    return undefined;
  }
  function ReadableStreamDefaultControllerError(controller, e) {
    var stream = controller._controlledReadableStream;
    assert(stream._state === 'readable');
    ResetQueue(controller);
    ReadableStreamError(stream, e);
  }
  function ReadableStreamDefaultControllerErrorIfNeeded(controller, e) {
    if (controller._controlledReadableStream._state === 'readable') {
      ReadableStreamDefaultControllerError(controller, e);
    }
  }
  function ReadableStreamDefaultControllerGetDesiredSize(controller) {
    var stream = controller._controlledReadableStream;
    var state = stream._state;
    if (state === 'errored') {
      return null;
    }
    if (state === 'closed') {
      return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
  }
  var ReadableStreamBYOBRequest = function () {
    function ReadableStreamBYOBRequest(controller, view) {
      _classCallCheck(this, ReadableStreamBYOBRequest);
      this._associatedReadableByteStreamController = controller;
      this._view = view;
    }
    _createClass(ReadableStreamBYOBRequest, [{
      key: 'respond',
      value: function respond(bytesWritten) {
        if (IsReadableStreamBYOBRequest(this) === false) {
          throw byobRequestBrandCheckException('respond');
        }
        if (this._associatedReadableByteStreamController === undefined) {
          throw new TypeError('This BYOB request has been invalidated');
        }
        ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
      }
    }, {
      key: 'respondWithNewView',
      value: function respondWithNewView(view) {
        if (IsReadableStreamBYOBRequest(this) === false) {
          throw byobRequestBrandCheckException('respond');
        }
        if (this._associatedReadableByteStreamController === undefined) {
          throw new TypeError('This BYOB request has been invalidated');
        }
        if (!ArrayBuffer.isView(view)) {
          throw new TypeError('You can only respond with array buffer views');
        }
        ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
      }
    }, {
      key: 'view',
      get: function get() {
        return this._view;
      }
    }]);
    return ReadableStreamBYOBRequest;
  }();
  var ReadableByteStreamController = function () {
    function ReadableByteStreamController(stream, underlyingByteSource, highWaterMark) {
      _classCallCheck(this, ReadableByteStreamController);
      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableByteStreamController can only be constructed with a ReadableStream instance given ' + 'a byte source');
      }
      if (stream._readableStreamController !== undefined) {
        throw new TypeError('ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte ' + 'source');
      }
      this._controlledReadableStream = stream;
      this._underlyingByteSource = underlyingByteSource;
      this._pullAgain = false;
      this._pulling = false;
      ReadableByteStreamControllerClearPendingPullIntos(this);
      this._queue = this._queueTotalSize = undefined;
      ResetQueue(this);
      this._closeRequested = false;
      this._started = false;
      this._strategyHWM = ValidateAndNormalizeHighWaterMark(highWaterMark);
      var autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
      if (autoAllocateChunkSize !== undefined) {
        if (Number.isInteger(autoAllocateChunkSize) === false || autoAllocateChunkSize <= 0) {
          throw new RangeError('autoAllocateChunkSize must be a positive integer');
        }
      }
      this._autoAllocateChunkSize = autoAllocateChunkSize;
      this._pendingPullIntos = [];
      var controller = this;
      var startResult = InvokeOrNoop(underlyingByteSource, 'start', [this]);
      Promise.resolve(startResult).then(function () {
        controller._started = true;
        assert(controller._pulling === false);
        assert(controller._pullAgain === false);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }, function (r) {
        if (stream._state === 'readable') {
          ReadableByteStreamControllerError(controller, r);
        }
      }).catch(rethrowAssertionErrorRejection);
    }
    _createClass(ReadableByteStreamController, [{
      key: 'close',
      value: function close() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('close');
        }
        if (this._closeRequested === true) {
          throw new TypeError('The stream has already been closed; do not close it again!');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
        }
        ReadableByteStreamControllerClose(this);
      }
    }, {
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('enqueue');
        }
        if (this._closeRequested === true) {
          throw new TypeError('stream is closed or draining');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
        }
        if (!ArrayBuffer.isView(chunk)) {
          throw new TypeError('You can only enqueue array buffer views when using a ReadableByteStreamController');
        }
        ReadableByteStreamControllerEnqueue(this, chunk);
      }
    }, {
      key: 'error',
      value: function error(e) {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('error');
        }
        var stream = this._controlledReadableStream;
        if (stream._state !== 'readable') {
          throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
        }
        ReadableByteStreamControllerError(this, e);
      }
    }, {
      key: '__cancelSteps',
      value: function __cancelSteps(reason) {
        if (this._pendingPullIntos.length > 0) {
          var firstDescriptor = this._pendingPullIntos[0];
          firstDescriptor.bytesFilled = 0;
        }
        ResetQueue(this);
        return PromiseInvokeOrNoop(this._underlyingByteSource, 'cancel', [reason]);
      }
    }, {
      key: '__pullSteps',
      value: function __pullSteps() {
        var stream = this._controlledReadableStream;
        assert(ReadableStreamHasDefaultReader(stream) === true);
        if (this._queueTotalSize > 0) {
          assert(ReadableStreamGetNumReadRequests(stream) === 0);
          var entry = this._queue.shift();
          this._queueTotalSize -= entry.byteLength;
          ReadableByteStreamControllerHandleQueueDrain(this);
          var view = void 0;
          try {
            view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
          } catch (viewE) {
            return Promise.reject(viewE);
          }
          return Promise.resolve(CreateIterResultObject(view, false));
        }
        var autoAllocateChunkSize = this._autoAllocateChunkSize;
        if (autoAllocateChunkSize !== undefined) {
          var buffer = void 0;
          try {
            buffer = new ArrayBuffer(autoAllocateChunkSize);
          } catch (bufferE) {
            return Promise.reject(bufferE);
          }
          var pullIntoDescriptor = {
            buffer: buffer,
            byteOffset: 0,
            byteLength: autoAllocateChunkSize,
            bytesFilled: 0,
            elementSize: 1,
            ctor: Uint8Array,
            readerType: 'default'
          };
          this._pendingPullIntos.push(pullIntoDescriptor);
        }
        var promise = ReadableStreamAddReadRequest(stream);
        ReadableByteStreamControllerCallPullIfNeeded(this);
        return promise;
      }
    }, {
      key: 'byobRequest',
      get: function get() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('byobRequest');
        }
        if (this._byobRequest === undefined && this._pendingPullIntos.length > 0) {
          var firstDescriptor = this._pendingPullIntos[0];
          var view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
          this._byobRequest = new ReadableStreamBYOBRequest(this, view);
        }
        return this._byobRequest;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('desiredSize');
        }
        return ReadableByteStreamControllerGetDesiredSize(this);
      }
    }]);
    return ReadableByteStreamController;
  }();
  function IsReadableByteStreamController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingByteSource')) {
      return false;
    }
    return true;
  }
  function IsReadableStreamBYOBRequest(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
      return false;
    }
    return true;
  }
  function ReadableByteStreamControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
    if (shouldPull === false) {
      return undefined;
    }
    if (controller._pulling === true) {
      controller._pullAgain = true;
      return undefined;
    }
    assert(controller._pullAgain === false);
    controller._pulling = true;
    var pullPromise = PromiseInvokeOrNoop(controller._underlyingByteSource, 'pull', [controller]);
    pullPromise.then(function () {
      controller._pulling = false;
      if (controller._pullAgain === true) {
        controller._pullAgain = false;
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
    }, function (e) {
      if (controller._controlledReadableStream._state === 'readable') {
        ReadableByteStreamControllerError(controller, e);
      }
    }).catch(rethrowAssertionErrorRejection);
    return undefined;
  }
  function ReadableByteStreamControllerClearPendingPullIntos(controller) {
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    controller._pendingPullIntos = [];
  }
  function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
    assert(stream._state !== 'errored', 'state must not be errored');
    var done = false;
    if (stream._state === 'closed') {
      assert(pullIntoDescriptor.bytesFilled === 0);
      done = true;
    }
    var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
    if (pullIntoDescriptor.readerType === 'default') {
      ReadableStreamFulfillReadRequest(stream, filledView, done);
    } else {
      assert(pullIntoDescriptor.readerType === 'byob');
      ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    }
  }
  function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
    var bytesFilled = pullIntoDescriptor.bytesFilled;
    var elementSize = pullIntoDescriptor.elementSize;
    assert(bytesFilled <= pullIntoDescriptor.byteLength);
    assert(bytesFilled % elementSize === 0);
    return new pullIntoDescriptor.ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
  }
  function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
    controller._queue.push({
      buffer: buffer,
      byteOffset: byteOffset,
      byteLength: byteLength
    });
    controller._queueTotalSize += byteLength;
  }
  function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
    var elementSize = pullIntoDescriptor.elementSize;
    var currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
    var maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
    var maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
    var maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
    var totalBytesToCopyRemaining = maxBytesToCopy;
    var ready = false;
    if (maxAlignedBytes > currentAlignedBytes) {
      totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
      ready = true;
    }
    var queue = controller._queue;
    while (totalBytesToCopyRemaining > 0) {
      var headOfQueue = queue[0];
      var bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
      var destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      ArrayBufferCopy(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
      if (headOfQueue.byteLength === bytesToCopy) {
        queue.shift();
      } else {
        headOfQueue.byteOffset += bytesToCopy;
        headOfQueue.byteLength -= bytesToCopy;
      }
      controller._queueTotalSize -= bytesToCopy;
      ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
      totalBytesToCopyRemaining -= bytesToCopy;
    }
    if (ready === false) {
      assert(controller._queueTotalSize === 0, 'queue must be empty');
      assert(pullIntoDescriptor.bytesFilled > 0);
      assert(pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize);
    }
    return ready;
  }
  function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
    assert(controller._pendingPullIntos.length === 0 || controller._pendingPullIntos[0] === pullIntoDescriptor);
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    pullIntoDescriptor.bytesFilled += size;
  }
  function ReadableByteStreamControllerHandleQueueDrain(controller) {
    assert(controller._controlledReadableStream._state === 'readable');
    if (controller._queueTotalSize === 0 && controller._closeRequested === true) {
      ReadableStreamClose(controller._controlledReadableStream);
    } else {
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
  }
  function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
    if (controller._byobRequest === undefined) {
      return;
    }
    controller._byobRequest._associatedReadableByteStreamController = undefined;
    controller._byobRequest._view = undefined;
    controller._byobRequest = undefined;
  }
  function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
    assert(controller._closeRequested === false);
    while (controller._pendingPullIntos.length > 0) {
      if (controller._queueTotalSize === 0) {
        return;
      }
      var pullIntoDescriptor = controller._pendingPullIntos[0];
      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
      }
    }
  }
  function ReadableByteStreamControllerPullInto(controller, view) {
    var stream = controller._controlledReadableStream;
    var elementSize = 1;
    if (view.constructor !== DataView) {
      elementSize = view.constructor.BYTES_PER_ELEMENT;
    }
    var ctor = view.constructor;
    var pullIntoDescriptor = {
      buffer: view.buffer,
      byteOffset: view.byteOffset,
      byteLength: view.byteLength,
      bytesFilled: 0,
      elementSize: elementSize,
      ctor: ctor,
      readerType: 'byob'
    };
    if (controller._pendingPullIntos.length > 0) {
      pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
      controller._pendingPullIntos.push(pullIntoDescriptor);
      return ReadableStreamAddReadIntoRequest(stream);
    }
    if (stream._state === 'closed') {
      var emptyView = new view.constructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
      return Promise.resolve(CreateIterResultObject(emptyView, true));
    }
    if (controller._queueTotalSize > 0) {
      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
        var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        ReadableByteStreamControllerHandleQueueDrain(controller);
        return Promise.resolve(CreateIterResultObject(filledView, false));
      }
      if (controller._closeRequested === true) {
        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
        ReadableByteStreamControllerError(controller, e);
        return Promise.reject(e);
      }
    }
    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
    controller._pendingPullIntos.push(pullIntoDescriptor);
    var promise = ReadableStreamAddReadIntoRequest(stream);
    ReadableByteStreamControllerCallPullIfNeeded(controller);
    return promise;
  }
  function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
    firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
    assert(firstDescriptor.bytesFilled === 0, 'bytesFilled must be 0');
    var stream = controller._controlledReadableStream;
    if (ReadableStreamHasBYOBReader(stream) === true) {
      while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
        var pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
      }
    }
  }
  function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
    if (pullIntoDescriptor.bytesFilled + bytesWritten > pullIntoDescriptor.byteLength) {
      throw new RangeError('bytesWritten out of range');
    }
    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
    if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
      return;
    }
    ReadableByteStreamControllerShiftPendingPullInto(controller);
    var remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
    if (remainderSize > 0) {
      var end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      var remainder = pullIntoDescriptor.buffer.slice(end - remainderSize, end);
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
    }
    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
    pullIntoDescriptor.bytesFilled -= remainderSize;
    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
  }
  function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
    var firstDescriptor = controller._pendingPullIntos[0];
    var stream = controller._controlledReadableStream;
    if (stream._state === 'closed') {
      if (bytesWritten !== 0) {
        throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
      }
      ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
    } else {
      assert(stream._state === 'readable');
      ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
    }
  }
  function ReadableByteStreamControllerShiftPendingPullInto(controller) {
    var descriptor = controller._pendingPullIntos.shift();
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    return descriptor;
  }
  function ReadableByteStreamControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;
    if (stream._state !== 'readable') {
      return false;
    }
    if (controller._closeRequested === true) {
      return false;
    }
    if (controller._started === false) {
      return false;
    }
    if (ReadableStreamHasDefaultReader(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }
    if (ReadableStreamHasBYOBReader(stream) === true && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
      return true;
    }
    if (ReadableByteStreamControllerGetDesiredSize(controller) > 0) {
      return true;
    }
    return false;
  }
  function ReadableByteStreamControllerClose(controller) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    if (controller._queueTotalSize > 0) {
      controller._closeRequested = true;
      return;
    }
    if (controller._pendingPullIntos.length > 0) {
      var firstPendingPullInto = controller._pendingPullIntos[0];
      if (firstPendingPullInto.bytesFilled > 0) {
        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
        ReadableByteStreamControllerError(controller, e);
        throw e;
      }
    }
    ReadableStreamClose(stream);
  }
  function ReadableByteStreamControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    var buffer = chunk.buffer;
    var byteOffset = chunk.byteOffset;
    var byteLength = chunk.byteLength;
    var transferredBuffer = TransferArrayBuffer(buffer);
    if (ReadableStreamHasDefaultReader(stream) === true) {
      if (ReadableStreamGetNumReadRequests(stream) === 0) {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      } else {
        assert(controller._queue.length === 0);
        var transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
        ReadableStreamFulfillReadRequest(stream, transferredView, false);
      }
    } else if (ReadableStreamHasBYOBReader(stream) === true) {
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    } else {
      assert(IsReadableStreamLocked(stream) === false, 'stream must not be locked');
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    }
  }
  function ReadableByteStreamControllerError(controller, e) {
    var stream = controller._controlledReadableStream;
    assert(stream._state === 'readable');
    ReadableByteStreamControllerClearPendingPullIntos(controller);
    ResetQueue(controller);
    ReadableStreamError(stream, e);
  }
  function ReadableByteStreamControllerGetDesiredSize(controller) {
    var stream = controller._controlledReadableStream;
    var state = stream._state;
    if (state === 'errored') {
      return null;
    }
    if (state === 'closed') {
      return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
  }
  function ReadableByteStreamControllerRespond(controller, bytesWritten) {
    bytesWritten = Number(bytesWritten);
    if (IsFiniteNonNegativeNumber(bytesWritten) === false) {
      throw new RangeError('bytesWritten must be a finite');
    }
    assert(controller._pendingPullIntos.length > 0);
    ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
  }
  function ReadableByteStreamControllerRespondWithNewView(controller, view) {
    assert(controller._pendingPullIntos.length > 0);
    var firstDescriptor = controller._pendingPullIntos[0];
    if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
      throw new RangeError('The region specified by view does not match byobRequest');
    }
    if (firstDescriptor.byteLength !== view.byteLength) {
      throw new RangeError('The buffer of view has different capacity than byobRequest');
    }
    firstDescriptor.buffer = view.buffer;
    ReadableByteStreamControllerRespondInternal(controller, view.byteLength);
  }
  function streamBrandCheckException(name) {
    return new TypeError('ReadableStream.prototype.' + name + ' can only be used on a ReadableStream');
  }
  function readerLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released reader');
  }
  function defaultReaderBrandCheckException(name) {
    return new TypeError('ReadableStreamDefaultReader.prototype.' + name + ' can only be used on a ReadableStreamDefaultReader');
  }
  function defaultReaderClosedPromiseInitialize(reader) {
    reader._closedPromise = new Promise(function (resolve, reject) {
      reader._closedPromise_resolve = resolve;
      reader._closedPromise_reject = reject;
    });
  }
  function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
    reader._closedPromise = Promise.reject(reason);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function defaultReaderClosedPromiseInitializeAsResolved(reader) {
    reader._closedPromise = Promise.resolve(undefined);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function defaultReaderClosedPromiseReject(reader, reason) {
    assert(reader._closedPromise_resolve !== undefined);
    assert(reader._closedPromise_reject !== undefined);
    reader._closedPromise_reject(reason);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function defaultReaderClosedPromiseResetToRejected(reader, reason) {
    assert(reader._closedPromise_resolve === undefined);
    assert(reader._closedPromise_reject === undefined);
    reader._closedPromise = Promise.reject(reason);
  }
  function defaultReaderClosedPromiseResolve(reader) {
    assert(reader._closedPromise_resolve !== undefined);
    assert(reader._closedPromise_reject !== undefined);
    reader._closedPromise_resolve(undefined);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function byobReaderBrandCheckException(name) {
    return new TypeError('ReadableStreamBYOBReader.prototype.' + name + ' can only be used on a ReadableStreamBYOBReader');
  }
  function defaultControllerBrandCheckException(name) {
    return new TypeError('ReadableStreamDefaultController.prototype.' + name + ' can only be used on a ReadableStreamDefaultController');
  }
  function byobRequestBrandCheckException(name) {
    return new TypeError('ReadableStreamBYOBRequest.prototype.' + name + ' can only be used on a ReadableStreamBYOBRequest');
  }
  function byteStreamControllerBrandCheckException(name) {
    return new TypeError('ReadableByteStreamController.prototype.' + name + ' can only be used on a ReadableByteStreamController');
  }
  function ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise) {
    try {
      Promise.prototype.then.call(promise, undefined, function () {});
    } catch (e) {}
  }
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var transformStream = __w_pdfjs_require__(6);
  var readableStream = __w_pdfjs_require__(4);
  var writableStream = __w_pdfjs_require__(2);
  exports.TransformStream = transformStream.TransformStream;
  exports.ReadableStream = readableStream.ReadableStream;
  exports.IsReadableStreamDisturbed = readableStream.IsReadableStreamDisturbed;
  exports.ReadableStreamDefaultControllerClose = readableStream.ReadableStreamDefaultControllerClose;
  exports.ReadableStreamDefaultControllerEnqueue = readableStream.ReadableStreamDefaultControllerEnqueue;
  exports.ReadableStreamDefaultControllerError = readableStream.ReadableStreamDefaultControllerError;
  exports.ReadableStreamDefaultControllerGetDesiredSize = readableStream.ReadableStreamDefaultControllerGetDesiredSize;
  exports.AcquireWritableStreamDefaultWriter = writableStream.AcquireWritableStreamDefaultWriter;
  exports.IsWritableStream = writableStream.IsWritableStream;
  exports.IsWritableStreamLocked = writableStream.IsWritableStreamLocked;
  exports.WritableStream = writableStream.WritableStream;
  exports.WritableStreamAbort = writableStream.WritableStreamAbort;
  exports.WritableStreamDefaultControllerError = writableStream.WritableStreamDefaultControllerError;
  exports.WritableStreamDefaultWriterCloseWithErrorPropagation = writableStream.WritableStreamDefaultWriterCloseWithErrorPropagation;
  exports.WritableStreamDefaultWriterRelease = writableStream.WritableStreamDefaultWriterRelease;
  exports.WritableStreamDefaultWriterWrite = writableStream.WritableStreamDefaultWriterWrite;
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = __w_pdfjs_require__(1),
      assert = _require.assert;
  var _require2 = __w_pdfjs_require__(0),
      InvokeOrNoop = _require2.InvokeOrNoop,
      PromiseInvokeOrPerformFallback = _require2.PromiseInvokeOrPerformFallback,
      PromiseInvokeOrNoop = _require2.PromiseInvokeOrNoop,
      typeIsObject = _require2.typeIsObject;
  var _require3 = __w_pdfjs_require__(4),
      ReadableStream = _require3.ReadableStream,
      ReadableStreamDefaultControllerClose = _require3.ReadableStreamDefaultControllerClose,
      ReadableStreamDefaultControllerEnqueue = _require3.ReadableStreamDefaultControllerEnqueue,
      ReadableStreamDefaultControllerError = _require3.ReadableStreamDefaultControllerError,
      ReadableStreamDefaultControllerGetDesiredSize = _require3.ReadableStreamDefaultControllerGetDesiredSize;
  var _require4 = __w_pdfjs_require__(2),
      WritableStream = _require4.WritableStream,
      WritableStreamDefaultControllerError = _require4.WritableStreamDefaultControllerError;
  function TransformStreamCloseReadable(transformStream) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }
    if (transformStream._readableClosed === true) {
      throw new TypeError('Readable side is already closed');
    }
    TransformStreamCloseReadableInternal(transformStream);
  }
  function TransformStreamEnqueueToReadable(transformStream, chunk) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }
    if (transformStream._readableClosed === true) {
      throw new TypeError('Readable side is already closed');
    }
    var controller = transformStream._readableController;
    try {
      ReadableStreamDefaultControllerEnqueue(controller, chunk);
    } catch (e) {
      transformStream._readableClosed = true;
      TransformStreamErrorIfNeeded(transformStream, e);
      throw transformStream._storedError;
    }
    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    var maybeBackpressure = desiredSize <= 0;
    if (maybeBackpressure === true && transformStream._backpressure === false) {
      TransformStreamSetBackpressure(transformStream, true);
    }
  }
  function TransformStreamError(transformStream, e) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }
    TransformStreamErrorInternal(transformStream, e);
  }
  function TransformStreamCloseReadableInternal(transformStream) {
    assert(transformStream._errored === false);
    assert(transformStream._readableClosed === false);
    try {
      ReadableStreamDefaultControllerClose(transformStream._readableController);
    } catch (e) {
      assert(false);
    }
    transformStream._readableClosed = true;
  }
  function TransformStreamErrorIfNeeded(transformStream, e) {
    if (transformStream._errored === false) {
      TransformStreamErrorInternal(transformStream, e);
    }
  }
  function TransformStreamErrorInternal(transformStream, e) {
    assert(transformStream._errored === false);
    transformStream._errored = true;
    transformStream._storedError = e;
    if (transformStream._writableDone === false) {
      WritableStreamDefaultControllerError(transformStream._writableController, e);
    }
    if (transformStream._readableClosed === false) {
      ReadableStreamDefaultControllerError(transformStream._readableController, e);
    }
  }
  function TransformStreamReadableReadyPromise(transformStream) {
    assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
    if (transformStream._backpressure === false) {
      return Promise.resolve();
    }
    assert(transformStream._backpressure === true, '_backpressure should have been initialized');
    return transformStream._backpressureChangePromise;
  }
  function TransformStreamSetBackpressure(transformStream, backpressure) {
    assert(transformStream._backpressure !== backpressure, 'TransformStreamSetBackpressure() should be called only when backpressure is changed');
    if (transformStream._backpressureChangePromise !== undefined) {
      transformStream._backpressureChangePromise_resolve(backpressure);
    }
    transformStream._backpressureChangePromise = new Promise(function (resolve) {
      transformStream._backpressureChangePromise_resolve = resolve;
    });
    transformStream._backpressureChangePromise.then(function (resolution) {
      assert(resolution !== backpressure, '_backpressureChangePromise should be fulfilled only when backpressure is changed');
    });
    transformStream._backpressure = backpressure;
  }
  function TransformStreamDefaultTransform(chunk, transformStreamController) {
    var transformStream = transformStreamController._controlledTransformStream;
    TransformStreamEnqueueToReadable(transformStream, chunk);
    return Promise.resolve();
  }
  function TransformStreamTransform(transformStream, chunk) {
    assert(transformStream._errored === false);
    assert(transformStream._transforming === false);
    assert(transformStream._backpressure === false);
    transformStream._transforming = true;
    var transformer = transformStream._transformer;
    var controller = transformStream._transformStreamController;
    var transformPromise = PromiseInvokeOrPerformFallback(transformer, 'transform', [chunk, controller], TransformStreamDefaultTransform, [chunk, controller]);
    return transformPromise.then(function () {
      transformStream._transforming = false;
      return TransformStreamReadableReadyPromise(transformStream);
    }, function (e) {
      TransformStreamErrorIfNeeded(transformStream, e);
      return Promise.reject(e);
    });
  }
  function IsTransformStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
      return false;
    }
    return true;
  }
  function IsTransformStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
      return false;
    }
    return true;
  }
  var TransformStreamSink = function () {
    function TransformStreamSink(transformStream, startPromise) {
      _classCallCheck(this, TransformStreamSink);
      this._transformStream = transformStream;
      this._startPromise = startPromise;
    }
    _createClass(TransformStreamSink, [{
      key: 'start',
      value: function start(c) {
        var transformStream = this._transformStream;
        transformStream._writableController = c;
        return this._startPromise.then(function () {
          return TransformStreamReadableReadyPromise(transformStream);
        });
      }
    }, {
      key: 'write',
      value: function write(chunk) {
        var transformStream = this._transformStream;
        return TransformStreamTransform(transformStream, chunk);
      }
    }, {
      key: 'abort',
      value: function abort() {
        var transformStream = this._transformStream;
        transformStream._writableDone = true;
        TransformStreamErrorInternal(transformStream, new TypeError('Writable side aborted'));
      }
    }, {
      key: 'close',
      value: function close() {
        var transformStream = this._transformStream;
        assert(transformStream._transforming === false);
        transformStream._writableDone = true;
        var flushPromise = PromiseInvokeOrNoop(transformStream._transformer, 'flush', [transformStream._transformStreamController]);
        return flushPromise.then(function () {
          if (transformStream._errored === true) {
            return Promise.reject(transformStream._storedError);
          }
          if (transformStream._readableClosed === false) {
            TransformStreamCloseReadableInternal(transformStream);
          }
          return Promise.resolve();
        }).catch(function (r) {
          TransformStreamErrorIfNeeded(transformStream, r);
          return Promise.reject(transformStream._storedError);
        });
      }
    }]);
    return TransformStreamSink;
  }();
  var TransformStreamSource = function () {
    function TransformStreamSource(transformStream, startPromise) {
      _classCallCheck(this, TransformStreamSource);
      this._transformStream = transformStream;
      this._startPromise = startPromise;
    }
    _createClass(TransformStreamSource, [{
      key: 'start',
      value: function start(c) {
        var transformStream = this._transformStream;
        transformStream._readableController = c;
        return this._startPromise.then(function () {
          assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
          if (transformStream._backpressure === true) {
            return Promise.resolve();
          }
          assert(transformStream._backpressure === false, '_backpressure should have been initialized');
          return transformStream._backpressureChangePromise;
        });
      }
    }, {
      key: 'pull',
      value: function pull() {
        var transformStream = this._transformStream;
        assert(transformStream._backpressure === true, 'pull() should be never called while _backpressure is false');
        assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
        TransformStreamSetBackpressure(transformStream, false);
        return transformStream._backpressureChangePromise;
      }
    }, {
      key: 'cancel',
      value: function cancel() {
        var transformStream = this._transformStream;
        transformStream._readableClosed = true;
        TransformStreamErrorInternal(transformStream, new TypeError('Readable side canceled'));
      }
    }]);
    return TransformStreamSource;
  }();
  var TransformStreamDefaultController = function () {
    function TransformStreamDefaultController(transformStream) {
      _classCallCheck(this, TransformStreamDefaultController);
      if (IsTransformStream(transformStream) === false) {
        throw new TypeError('TransformStreamDefaultController can only be ' + 'constructed with a TransformStream instance');
      }
      if (transformStream._transformStreamController !== undefined) {
        throw new TypeError('TransformStreamDefaultController instances can ' + 'only be created by the TransformStream constructor');
      }
      this._controlledTransformStream = transformStream;
    }
    _createClass(TransformStreamDefaultController, [{
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('enqueue');
        }
        TransformStreamEnqueueToReadable(this._controlledTransformStream, chunk);
      }
    }, {
      key: 'close',
      value: function close() {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('close');
        }
        TransformStreamCloseReadable(this._controlledTransformStream);
      }
    }, {
      key: 'error',
      value: function error(reason) {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('error');
        }
        TransformStreamError(this._controlledTransformStream, reason);
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('desiredSize');
        }
        var transformStream = this._controlledTransformStream;
        var readableController = transformStream._readableController;
        return ReadableStreamDefaultControllerGetDesiredSize(readableController);
      }
    }]);
    return TransformStreamDefaultController;
  }();
  var TransformStream = function () {
    function TransformStream() {
      var transformer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, TransformStream);
      this._transformer = transformer;
      var readableStrategy = transformer.readableStrategy,
          writableStrategy = transformer.writableStrategy;
      this._transforming = false;
      this._errored = false;
      this._storedError = undefined;
      this._writableController = undefined;
      this._readableController = undefined;
      this._transformStreamController = undefined;
      this._writableDone = false;
      this._readableClosed = false;
      this._backpressure = undefined;
      this._backpressureChangePromise = undefined;
      this._backpressureChangePromise_resolve = undefined;
      this._transformStreamController = new TransformStreamDefaultController(this);
      var startPromise_resolve = void 0;
      var startPromise = new Promise(function (resolve) {
        startPromise_resolve = resolve;
      });
      var source = new TransformStreamSource(this, startPromise);
      this._readable = new ReadableStream(source, readableStrategy);
      var sink = new TransformStreamSink(this, startPromise);
      this._writable = new WritableStream(sink, writableStrategy);
      assert(this._writableController !== undefined);
      assert(this._readableController !== undefined);
      var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(this._readableController);
      TransformStreamSetBackpressure(this, desiredSize <= 0);
      var transformStream = this;
      var startResult = InvokeOrNoop(transformer, 'start', [transformStream._transformStreamController]);
      startPromise_resolve(startResult);
      startPromise.catch(function (e) {
        if (transformStream._errored === false) {
          transformStream._errored = true;
          transformStream._storedError = e;
        }
      });
    }
    _createClass(TransformStream, [{
      key: 'readable',
      get: function get() {
        if (IsTransformStream(this) === false) {
          throw streamBrandCheckException('readable');
        }
        return this._readable;
      }
    }, {
      key: 'writable',
      get: function get() {
        if (IsTransformStream(this) === false) {
          throw streamBrandCheckException('writable');
        }
        return this._writable;
      }
    }]);
    return TransformStream;
  }();
  module.exports = { TransformStream: TransformStream };
  function defaultControllerBrandCheckException(name) {
    return new TypeError('TransformStreamDefaultController.prototype.' + name + ' can only be used on a TransformStreamDefaultController');
  }
  function streamBrandCheckException(name) {
    return new TypeError('TransformStream.prototype.' + name + ' can only be used on a TransformStream');
  }
}, function (module, exports, __w_pdfjs_require__) {
  module.exports = __w_pdfjs_require__(5);
}]));

/***/ }),
/* 117 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

{
  var isURLSupported = false;
  try {
    if (typeof URL === 'function' && _typeof(URL.prototype) === 'object' && 'origin' in URL.prototype) {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      isURLSupported = u.href === 'http://a/c%20d';
    }
  } catch (ex) {}
  if (isURLSupported) {
    exports.URL = URL;
  } else {
    var PolyfillURL = __w_pdfjs_require__(118).URL;
    var OriginalURL = __w_pdfjs_require__(4).URL;
    if (OriginalURL) {
      PolyfillURL.createObjectURL = function (blob) {
        return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
      };
      PolyfillURL.revokeObjectURL = function (url) {
        OriginalURL.revokeObjectURL(url);
      };
    }
    exports.URL = PolyfillURL;
  }
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


(function URLConstructorClosure() {
  'use strict';

  var relative = Object.create(null);
  relative['ftp'] = 21;
  relative['file'] = 0;
  relative['gopher'] = 70;
  relative['http'] = 80;
  relative['https'] = 443;
  relative['ws'] = 80;
  relative['wss'] = 443;
  var relativePathDotMapping = Object.create(null);
  relativePathDotMapping['%2e'] = '.';
  relativePathDotMapping['.%2e'] = '..';
  relativePathDotMapping['%2e.'] = '..';
  relativePathDotMapping['%2e%2e'] = '..';
  function isRelativeScheme(scheme) {
    return relative[scheme] !== undefined;
  }
  function invalid() {
    clear.call(this);
    this._isInvalid = true;
  }
  function IDNAToASCII(h) {
    if (h === '') {
      invalid.call(this);
    }
    return h.toLowerCase();
  }
  function percentEscape(c) {
    var unicode = c.charCodeAt(0);
    if (unicode > 0x20 && unicode < 0x7F && [0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60].indexOf(unicode) === -1) {
      return c;
    }
    return encodeURIComponent(c);
  }
  function percentEscapeQuery(c) {
    var unicode = c.charCodeAt(0);
    if (unicode > 0x20 && unicode < 0x7F && [0x22, 0x23, 0x3C, 0x3E, 0x60].indexOf(unicode) === -1) {
      return c;
    }
    return encodeURIComponent(c);
  }
  var EOF,
      ALPHA = /[a-zA-Z]/,
      ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
  function parse(input, stateOverride, base) {
    function err(message) {
      errors.push(message);
    }
    var state = stateOverride || 'scheme start',
        cursor = 0,
        buffer = '',
        seenAt = false,
        seenBracket = false,
        errors = [];
    loop: while ((input[cursor - 1] !== EOF || cursor === 0) && !this._isInvalid) {
      var c = input[cursor];
      switch (state) {
        case 'scheme start':
          if (c && ALPHA.test(c)) {
            buffer += c.toLowerCase();
            state = 'scheme';
          } else if (!stateOverride) {
            buffer = '';
            state = 'no scheme';
            continue;
          } else {
            err('Invalid scheme.');
            break loop;
          }
          break;
        case 'scheme':
          if (c && ALPHANUMERIC.test(c)) {
            buffer += c.toLowerCase();
          } else if (c === ':') {
            this._scheme = buffer;
            buffer = '';
            if (stateOverride) {
              break loop;
            }
            if (isRelativeScheme(this._scheme)) {
              this._isRelative = true;
            }
            if (this._scheme === 'file') {
              state = 'relative';
            } else if (this._isRelative && base && base._scheme === this._scheme) {
              state = 'relative or authority';
            } else if (this._isRelative) {
              state = 'authority first slash';
            } else {
              state = 'scheme data';
            }
          } else if (!stateOverride) {
            buffer = '';
            cursor = 0;
            state = 'no scheme';
            continue;
          } else if (c === EOF) {
            break loop;
          } else {
            err('Code point not allowed in scheme: ' + c);
            break loop;
          }
          break;
        case 'scheme data':
          if (c === '?') {
            this._query = '?';
            state = 'query';
          } else if (c === '#') {
            this._fragment = '#';
            state = 'fragment';
          } else {
            if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
              this._schemeData += percentEscape(c);
            }
          }
          break;
        case 'no scheme':
          if (!base || !isRelativeScheme(base._scheme)) {
            err('Missing scheme.');
            invalid.call(this);
          } else {
            state = 'relative';
            continue;
          }
          break;
        case 'relative or authority':
          if (c === '/' && input[cursor + 1] === '/') {
            state = 'authority ignore slashes';
          } else {
            err('Expected /, got: ' + c);
            state = 'relative';
            continue;
          }
          break;
        case 'relative':
          this._isRelative = true;
          if (this._scheme !== 'file') {
            this._scheme = base._scheme;
          }
          if (c === EOF) {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = base._query;
            this._username = base._username;
            this._password = base._password;
            break loop;
          } else if (c === '/' || c === '\\') {
            if (c === '\\') {
              err('\\ is an invalid code point.');
            }
            state = 'relative slash';
          } else if (c === '?') {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = '?';
            this._username = base._username;
            this._password = base._password;
            state = 'query';
          } else if (c === '#') {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = base._query;
            this._fragment = '#';
            this._username = base._username;
            this._password = base._password;
            state = 'fragment';
          } else {
            var nextC = input[cursor + 1];
            var nextNextC = input[cursor + 2];
            if (this._scheme !== 'file' || !ALPHA.test(c) || nextC !== ':' && nextC !== '|' || nextNextC !== EOF && nextNextC !== '/' && nextNextC !== '\\' && nextNextC !== '?' && nextNextC !== '#') {
              this._host = base._host;
              this._port = base._port;
              this._username = base._username;
              this._password = base._password;
              this._path = base._path.slice();
              this._path.pop();
            }
            state = 'relative path';
            continue;
          }
          break;
        case 'relative slash':
          if (c === '/' || c === '\\') {
            if (c === '\\') {
              err('\\ is an invalid code point.');
            }
            if (this._scheme === 'file') {
              state = 'file host';
            } else {
              state = 'authority ignore slashes';
            }
          } else {
            if (this._scheme !== 'file') {
              this._host = base._host;
              this._port = base._port;
              this._username = base._username;
              this._password = base._password;
            }
            state = 'relative path';
            continue;
          }
          break;
        case 'authority first slash':
          if (c === '/') {
            state = 'authority second slash';
          } else {
            err('Expected \'/\', got: ' + c);
            state = 'authority ignore slashes';
            continue;
          }
          break;
        case 'authority second slash':
          state = 'authority ignore slashes';
          if (c !== '/') {
            err('Expected \'/\', got: ' + c);
            continue;
          }
          break;
        case 'authority ignore slashes':
          if (c !== '/' && c !== '\\') {
            state = 'authority';
            continue;
          } else {
            err('Expected authority, got: ' + c);
          }
          break;
        case 'authority':
          if (c === '@') {
            if (seenAt) {
              err('@ already seen.');
              buffer += '%40';
            }
            seenAt = true;
            for (var i = 0; i < buffer.length; i++) {
              var cp = buffer[i];
              if (cp === '\t' || cp === '\n' || cp === '\r') {
                err('Invalid whitespace in authority.');
                continue;
              }
              if (cp === ':' && this._password === null) {
                this._password = '';
                continue;
              }
              var tempC = percentEscape(cp);
              if (this._password !== null) {
                this._password += tempC;
              } else {
                this._username += tempC;
              }
            }
            buffer = '';
          } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
            cursor -= buffer.length;
            buffer = '';
            state = 'host';
            continue;
          } else {
            buffer += c;
          }
          break;
        case 'file host':
          if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
            if (buffer.length === 2 && ALPHA.test(buffer[0]) && (buffer[1] === ':' || buffer[1] === '|')) {
              state = 'relative path';
            } else if (buffer.length === 0) {
              state = 'relative path start';
            } else {
              this._host = IDNAToASCII.call(this, buffer);
              buffer = '';
              state = 'relative path start';
            }
            continue;
          } else if (c === '\t' || c === '\n' || c === '\r') {
            err('Invalid whitespace in file host.');
          } else {
            buffer += c;
          }
          break;
        case 'host':
        case 'hostname':
          if (c === ':' && !seenBracket) {
            this._host = IDNAToASCII.call(this, buffer);
            buffer = '';
            state = 'port';
            if (stateOverride === 'hostname') {
              break loop;
            }
          } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
            this._host = IDNAToASCII.call(this, buffer);
            buffer = '';
            state = 'relative path start';
            if (stateOverride) {
              break loop;
            }
            continue;
          } else if (c !== '\t' && c !== '\n' && c !== '\r') {
            if (c === '[') {
              seenBracket = true;
            } else if (c === ']') {
              seenBracket = false;
            }
            buffer += c;
          } else {
            err('Invalid code point in host/hostname: ' + c);
          }
          break;
        case 'port':
          if (/[0-9]/.test(c)) {
            buffer += c;
          } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#' || stateOverride) {
            if (buffer !== '') {
              var temp = parseInt(buffer, 10);
              if (temp !== relative[this._scheme]) {
                this._port = temp + '';
              }
              buffer = '';
            }
            if (stateOverride) {
              break loop;
            }
            state = 'relative path start';
            continue;
          } else if (c === '\t' || c === '\n' || c === '\r') {
            err('Invalid code point in port: ' + c);
          } else {
            invalid.call(this);
          }
          break;
        case 'relative path start':
          if (c === '\\') {
            err('\'\\\' not allowed in path.');
          }
          state = 'relative path';
          if (c !== '/' && c !== '\\') {
            continue;
          }
          break;
        case 'relative path':
          if (c === EOF || c === '/' || c === '\\' || !stateOverride && (c === '?' || c === '#')) {
            if (c === '\\') {
              err('\\ not allowed in relative path.');
            }
            var tmp;
            if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
              buffer = tmp;
            }
            if (buffer === '..') {
              this._path.pop();
              if (c !== '/' && c !== '\\') {
                this._path.push('');
              }
            } else if (buffer === '.' && c !== '/' && c !== '\\') {
              this._path.push('');
            } else if (buffer !== '.') {
              if (this._scheme === 'file' && this._path.length === 0 && buffer.length === 2 && ALPHA.test(buffer[0]) && buffer[1] === '|') {
                buffer = buffer[0] + ':';
              }
              this._path.push(buffer);
            }
            buffer = '';
            if (c === '?') {
              this._query = '?';
              state = 'query';
            } else if (c === '#') {
              this._fragment = '#';
              state = 'fragment';
            }
          } else if (c !== '\t' && c !== '\n' && c !== '\r') {
            buffer += percentEscape(c);
          }
          break;
        case 'query':
          if (!stateOverride && c === '#') {
            this._fragment = '#';
            state = 'fragment';
          } else if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
            this._query += percentEscapeQuery(c);
          }
          break;
        case 'fragment':
          if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
            this._fragment += c;
          }
          break;
      }
      cursor++;
    }
  }
  function clear() {
    this._scheme = '';
    this._schemeData = '';
    this._username = '';
    this._password = null;
    this._host = '';
    this._port = '';
    this._path = [];
    this._query = '';
    this._fragment = '';
    this._isInvalid = false;
    this._isRelative = false;
  }
  function JURL(url, base) {
    if (base !== undefined && !(base instanceof JURL)) {
      base = new JURL(String(base));
    }
    this._url = url;
    clear.call(this);
    var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
    parse.call(this, input, null, base);
  }
  JURL.prototype = {
    toString: function toString() {
      return this.href;
    },

    get href() {
      if (this._isInvalid) {
        return this._url;
      }
      var authority = '';
      if (this._username !== '' || this._password !== null) {
        authority = this._username + (this._password !== null ? ':' + this._password : '') + '@';
      }
      return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
    },
    set href(value) {
      clear.call(this);
      parse.call(this, value);
    },
    get protocol() {
      return this._scheme + ':';
    },
    set protocol(value) {
      if (this._isInvalid) {
        return;
      }
      parse.call(this, value + ':', 'scheme start');
    },
    get host() {
      return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host;
    },
    set host(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }
      parse.call(this, value, 'host');
    },
    get hostname() {
      return this._host;
    },
    set hostname(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }
      parse.call(this, value, 'hostname');
    },
    get port() {
      return this._port;
    },
    set port(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }
      parse.call(this, value, 'port');
    },
    get pathname() {
      return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData;
    },
    set pathname(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }
      this._path = [];
      parse.call(this, value, 'relative path start');
    },
    get search() {
      return this._isInvalid || !this._query || this._query === '?' ? '' : this._query;
    },
    set search(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }
      this._query = '?';
      if (value[0] === '?') {
        value = value.slice(1);
      }
      parse.call(this, value, 'query');
    },
    get hash() {
      return this._isInvalid || !this._fragment || this._fragment === '#' ? '' : this._fragment;
    },
    set hash(value) {
      if (this._isInvalid) {
        return;
      }
      this._fragment = '#';
      if (value[0] === '#') {
        value = value.slice(1);
      }
      parse.call(this, value, 'fragment');
    },
    get origin() {
      var host;
      if (this._isInvalid || !this._scheme) {
        return '';
      }
      switch (this._scheme) {
        case 'data':
        case 'file':
        case 'javascript':
        case 'mailto':
          return 'null';
        case 'blob':
          try {
            return new JURL(this._schemeData).origin || 'null';
          } catch (_) {}
          return 'null';
      }
      host = this.host;
      if (!host) {
        return '';
      }
      return this._scheme + '://' + host;
    }
  };
  exports.URL = JURL;
})();

/***/ }),
/* 119 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetworkPdfManager = exports.LocalPdfManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __w_pdfjs_require__(2);

var _chunked_stream = __w_pdfjs_require__(120);

var _document = __w_pdfjs_require__(121);

var _stream = __w_pdfjs_require__(125);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasePdfManager = function () {
  function BasePdfManager() {
    _classCallCheck(this, BasePdfManager);

    if (this.constructor === BasePdfManager) {
      (0, _util.unreachable)('Cannot initialize BasePdfManager.');
    }
  }

  _createClass(BasePdfManager, [{
    key: 'onLoadedStream',
    value: function onLoadedStream() {
      (0, _util.unreachable)('Abstract method `onLoadedStream` called');
    }
  }, {
    key: 'ensureDoc',
    value: function ensureDoc(prop, args) {
      return this.ensure(this.pdfDocument, prop, args);
    }
  }, {
    key: 'ensureXRef',
    value: function ensureXRef(prop, args) {
      return this.ensure(this.pdfDocument.xref, prop, args);
    }
  }, {
    key: 'ensureCatalog',
    value: function ensureCatalog(prop, args) {
      return this.ensure(this.pdfDocument.catalog, prop, args);
    }
  }, {
    key: 'getPage',
    value: function getPage(pageIndex) {
      return this.pdfDocument.getPage(pageIndex);
    }
  }, {
    key: 'cleanup',
    value: function cleanup() {
      return this.pdfDocument.cleanup();
    }
  }, {
    key: 'ensure',
    value: function ensure(obj, prop, args) {
      (0, _util.unreachable)('Abstract method `ensure` called');
    }
  }, {
    key: 'requestRange',
    value: function requestRange(begin, end) {
      (0, _util.unreachable)('Abstract method `requestRange` called');
    }
  }, {
    key: 'requestLoadedStream',
    value: function requestLoadedStream() {
      (0, _util.unreachable)('Abstract method `requestLoadedStream` called');
    }
  }, {
    key: 'sendProgressiveData',
    value: function sendProgressiveData(chunk) {
      (0, _util.unreachable)('Abstract method `sendProgressiveData` called');
    }
  }, {
    key: 'updatePassword',
    value: function updatePassword(password) {
      this._password = password;
    }
  }, {
    key: 'terminate',
    value: function terminate() {
      (0, _util.unreachable)('Abstract method `terminate` called');
    }
  }, {
    key: 'docId',
    get: function get() {
      return this._docId;
    }
  }, {
    key: 'password',
    get: function get() {
      return this._password;
    }
  }, {
    key: 'docBaseUrl',
    get: function get() {
      var docBaseUrl = null;
      if (this._docBaseUrl) {
        var absoluteUrl = (0, _util.createValidAbsoluteUrl)(this._docBaseUrl);
        if (absoluteUrl) {
          docBaseUrl = absoluteUrl.href;
        } else {
          (0, _util.warn)('Invalid absolute docBaseUrl: "' + this._docBaseUrl + '".');
        }
      }
      return (0, _util.shadow)(this, 'docBaseUrl', docBaseUrl);
    }
  }]);

  return BasePdfManager;
}();

var LocalPdfManager = function (_BasePdfManager) {
  _inherits(LocalPdfManager, _BasePdfManager);

  function LocalPdfManager(docId, data, password, evaluatorOptions, docBaseUrl) {
    _classCallCheck(this, LocalPdfManager);

    var _this = _possibleConstructorReturn(this, (LocalPdfManager.__proto__ || Object.getPrototypeOf(LocalPdfManager)).call(this));

    _this._docId = docId;
    _this._password = password;
    _this._docBaseUrl = docBaseUrl;
    _this.evaluatorOptions = evaluatorOptions;
    var stream = new _stream.Stream(data);
    _this.pdfDocument = new _document.PDFDocument(_this, stream);
    _this._loadedStreamPromise = Promise.resolve(stream);
    return _this;
  }

  _createClass(LocalPdfManager, [{
    key: 'ensure',
    value: function ensure(obj, prop, args) {
      return new Promise(function (resolve) {
        var value = obj[prop];
        if (typeof value === 'function') {
          resolve(value.apply(obj, args));
        } else {
          resolve(value);
        }
      });
    }
  }, {
    key: 'requestRange',
    value: function requestRange(begin, end) {
      return Promise.resolve();
    }
  }, {
    key: 'requestLoadedStream',
    value: function requestLoadedStream() {}
  }, {
    key: 'onLoadedStream',
    value: function onLoadedStream() {
      return this._loadedStreamPromise;
    }
  }, {
    key: 'terminate',
    value: function terminate() {}
  }]);

  return LocalPdfManager;
}(BasePdfManager);

var NetworkPdfManager = function (_BasePdfManager2) {
  _inherits(NetworkPdfManager, _BasePdfManager2);

  function NetworkPdfManager(docId, pdfNetworkStream, args, evaluatorOptions, docBaseUrl) {
    _classCallCheck(this, NetworkPdfManager);

    var _this2 = _possibleConstructorReturn(this, (NetworkPdfManager.__proto__ || Object.getPrototypeOf(NetworkPdfManager)).call(this));

    _this2._docId = docId;
    _this2._password = args.password;
    _this2._docBaseUrl = docBaseUrl;
    _this2.msgHandler = args.msgHandler;
    _this2.evaluatorOptions = evaluatorOptions;
    _this2.streamManager = new _chunked_stream.ChunkedStreamManager(pdfNetworkStream, {
      msgHandler: args.msgHandler,
      url: args.url,
      length: args.length,
      disableAutoFetch: args.disableAutoFetch,
      rangeChunkSize: args.rangeChunkSize
    });
    _this2.pdfDocument = new _document.PDFDocument(_this2, _this2.streamManager.getStream());
    return _this2;
  }

  _createClass(NetworkPdfManager, [{
    key: 'ensure',
    value: function ensure(obj, prop, args) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var ensureHelper = function ensureHelper() {
          try {
            var value = obj[prop];
            var result = void 0;
            if (typeof value === 'function') {
              result = value.apply(obj, args);
            } else {
              result = value;
            }
            resolve(result);
          } catch (ex) {
            if (!(ex instanceof _util.MissingDataException)) {
              reject(ex);
              return;
            }
            _this3.streamManager.requestRange(ex.begin, ex.end).then(ensureHelper, reject);
          }
        };
        ensureHelper();
      });
    }
  }, {
    key: 'requestRange',
    value: function requestRange(begin, end) {
      return this.streamManager.requestRange(begin, end);
    }
  }, {
    key: 'requestLoadedStream',
    value: function requestLoadedStream() {
      this.streamManager.requestAllChunks();
    }
  }, {
    key: 'sendProgressiveData',
    value: function sendProgressiveData(chunk) {
      this.streamManager.onReceiveData({ chunk: chunk });
    }
  }, {
    key: 'onLoadedStream',
    value: function onLoadedStream() {
      return this.streamManager.onLoadedStream();
    }
  }, {
    key: 'terminate',
    value: function terminate() {
      this.streamManager.abort();
    }
  }]);

  return NetworkPdfManager;
}(BasePdfManager);

exports.LocalPdfManager = LocalPdfManager;
exports.NetworkPdfManager = NetworkPdfManager;

/***/ }),
/* 120 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChunkedStreamManager = exports.ChunkedStream = undefined;

var _util = __w_pdfjs_require__(2);

var ChunkedStream = function ChunkedStreamClosure() {
  function ChunkedStream(length, chunkSize, manager) {
    this.bytes = new Uint8Array(length);
    this.start = 0;
    this.pos = 0;
    this.end = length;
    this.chunkSize = chunkSize;
    this.loadedChunks = [];
    this.numChunksLoaded = 0;
    this.numChunks = Math.ceil(length / chunkSize);
    this.manager = manager;
    this.progressiveDataLength = 0;
    this.lastSuccessfulEnsureByteChunk = -1;
  }
  ChunkedStream.prototype = {
    getMissingChunks: function ChunkedStream_getMissingChunks() {
      var chunks = [];
      for (var chunk = 0, n = this.numChunks; chunk < n; ++chunk) {
        if (!this.loadedChunks[chunk]) {
          chunks.push(chunk);
        }
      }
      return chunks;
    },
    getBaseStreams: function ChunkedStream_getBaseStreams() {
      return [this];
    },
    allChunksLoaded: function ChunkedStream_allChunksLoaded() {
      return this.numChunksLoaded === this.numChunks;
    },
    onReceiveData: function ChunkedStream_onReceiveData(begin, chunk) {
      var end = begin + chunk.byteLength;
      if (begin % this.chunkSize !== 0) {
        throw new Error('Bad begin offset: ' + begin);
      }
      var length = this.bytes.length;
      if (end % this.chunkSize !== 0 && end !== length) {
        throw new Error('Bad end offset: ' + end);
      }
      this.bytes.set(new Uint8Array(chunk), begin);
      var chunkSize = this.chunkSize;
      var beginChunk = Math.floor(begin / chunkSize);
      var endChunk = Math.floor((end - 1) / chunkSize) + 1;
      var curChunk;
      for (curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
        if (!this.loadedChunks[curChunk]) {
          this.loadedChunks[curChunk] = true;
          ++this.numChunksLoaded;
        }
      }
    },
    onReceiveProgressiveData: function ChunkedStream_onReceiveProgressiveData(data) {
      var position = this.progressiveDataLength;
      var beginChunk = Math.floor(position / this.chunkSize);
      this.bytes.set(new Uint8Array(data), position);
      position += data.byteLength;
      this.progressiveDataLength = position;
      var endChunk = position >= this.end ? this.numChunks : Math.floor(position / this.chunkSize);
      var curChunk;
      for (curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
        if (!this.loadedChunks[curChunk]) {
          this.loadedChunks[curChunk] = true;
          ++this.numChunksLoaded;
        }
      }
    },
    ensureByte: function ChunkedStream_ensureByte(pos) {
      var chunk = Math.floor(pos / this.chunkSize);
      if (chunk === this.lastSuccessfulEnsureByteChunk) {
        return;
      }
      if (!this.loadedChunks[chunk]) {
        throw new _util.MissingDataException(pos, pos + 1);
      }
      this.lastSuccessfulEnsureByteChunk = chunk;
    },
    ensureRange: function ChunkedStream_ensureRange(begin, end) {
      if (begin >= end) {
        return;
      }
      if (end <= this.progressiveDataLength) {
        return;
      }
      var chunkSize = this.chunkSize;
      var beginChunk = Math.floor(begin / chunkSize);
      var endChunk = Math.floor((end - 1) / chunkSize) + 1;
      for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
        if (!this.loadedChunks[chunk]) {
          throw new _util.MissingDataException(begin, end);
        }
      }
    },
    nextEmptyChunk: function ChunkedStream_nextEmptyChunk(beginChunk) {
      var chunk,
          numChunks = this.numChunks;
      for (var i = 0; i < numChunks; ++i) {
        chunk = (beginChunk + i) % numChunks;
        if (!this.loadedChunks[chunk]) {
          return chunk;
        }
      }
      return null;
    },
    hasChunk: function ChunkedStream_hasChunk(chunk) {
      return !!this.loadedChunks[chunk];
    },
    get length() {
      return this.end - this.start;
    },
    get isEmpty() {
      return this.length === 0;
    },
    getByte: function ChunkedStream_getByte() {
      var pos = this.pos;
      if (pos >= this.end) {
        return -1;
      }
      this.ensureByte(pos);
      return this.bytes[this.pos++];
    },
    getUint16: function ChunkedStream_getUint16() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      if (b0 === -1 || b1 === -1) {
        return -1;
      }
      return (b0 << 8) + b1;
    },
    getInt32: function ChunkedStream_getInt32() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      var b2 = this.getByte();
      var b3 = this.getByte();
      return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    },
    getBytes: function getBytes(length) {
      var forceClamped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var bytes = this.bytes;
      var pos = this.pos;
      var strEnd = this.end;
      if (!length) {
        this.ensureRange(pos, strEnd);
        var _subarray = bytes.subarray(pos, strEnd);
        return forceClamped ? new Uint8ClampedArray(_subarray) : _subarray;
      }
      var end = pos + length;
      if (end > strEnd) {
        end = strEnd;
      }
      this.ensureRange(pos, end);
      this.pos = end;
      var subarray = bytes.subarray(pos, end);
      return forceClamped ? new Uint8ClampedArray(subarray) : subarray;
    },

    peekByte: function ChunkedStream_peekByte() {
      var peekedByte = this.getByte();
      this.pos--;
      return peekedByte;
    },
    peekBytes: function peekBytes(length) {
      var forceClamped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var bytes = this.getBytes(length, forceClamped);
      this.pos -= bytes.length;
      return bytes;
    },

    getByteRange: function ChunkedStream_getBytes(begin, end) {
      this.ensureRange(begin, end);
      return this.bytes.subarray(begin, end);
    },
    skip: function ChunkedStream_skip(n) {
      if (!n) {
        n = 1;
      }
      this.pos += n;
    },
    reset: function ChunkedStream_reset() {
      this.pos = this.start;
    },
    moveStart: function ChunkedStream_moveStart() {
      this.start = this.pos;
    },
    makeSubStream: function ChunkedStream_makeSubStream(start, length, dict) {
      this.ensureRange(start, start + length);
      function ChunkedStreamSubstream() {}
      ChunkedStreamSubstream.prototype = Object.create(this);
      ChunkedStreamSubstream.prototype.getMissingChunks = function () {
        var chunkSize = this.chunkSize;
        var beginChunk = Math.floor(this.start / chunkSize);
        var endChunk = Math.floor((this.end - 1) / chunkSize) + 1;
        var missingChunks = [];
        for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
          if (!this.loadedChunks[chunk]) {
            missingChunks.push(chunk);
          }
        }
        return missingChunks;
      };
      var subStream = new ChunkedStreamSubstream();
      subStream.pos = subStream.start = start;
      subStream.end = start + length || this.end;
      subStream.dict = dict;
      return subStream;
    }
  };
  return ChunkedStream;
}();
var ChunkedStreamManager = function ChunkedStreamManagerClosure() {
  function ChunkedStreamManager(pdfNetworkStream, args) {
    var chunkSize = args.rangeChunkSize;
    var length = args.length;
    this.stream = new ChunkedStream(length, chunkSize, this);
    this.length = length;
    this.chunkSize = chunkSize;
    this.pdfNetworkStream = pdfNetworkStream;
    this.url = args.url;
    this.disableAutoFetch = args.disableAutoFetch;
    this.msgHandler = args.msgHandler;
    this.currRequestId = 0;
    this.chunksNeededByRequest = Object.create(null);
    this.requestsByChunk = Object.create(null);
    this.promisesByRequest = Object.create(null);
    this.progressiveDataLength = 0;
    this.aborted = false;
    this._loadedStreamCapability = (0, _util.createPromiseCapability)();
  }
  ChunkedStreamManager.prototype = {
    onLoadedStream: function ChunkedStreamManager_getLoadedStream() {
      return this._loadedStreamCapability.promise;
    },
    sendRequest: function ChunkedStreamManager_sendRequest(begin, end) {
      var _this = this;

      var rangeReader = this.pdfNetworkStream.getRangeReader(begin, end);
      if (!rangeReader.isStreamingSupported) {
        rangeReader.onProgress = this.onProgress.bind(this);
      }
      var chunks = [],
          loaded = 0;
      var manager = this;
      var promise = new Promise(function (resolve, reject) {
        var readChunk = function readChunk(chunk) {
          try {
            if (!chunk.done) {
              var data = chunk.value;
              chunks.push(data);
              loaded += (0, _util.arrayByteLength)(data);
              if (rangeReader.isStreamingSupported) {
                manager.onProgress({ loaded: loaded });
              }
              rangeReader.read().then(readChunk, reject);
              return;
            }
            var chunkData = (0, _util.arraysToBytes)(chunks);
            chunks = null;
            resolve(chunkData);
          } catch (e) {
            reject(e);
          }
        };
        rangeReader.read().then(readChunk, reject);
      });
      promise.then(function (data) {
        if (_this.aborted) {
          return;
        }
        _this.onReceiveData({
          chunk: data,
          begin: begin
        });
      });
    },
    requestAllChunks: function ChunkedStreamManager_requestAllChunks() {
      var missingChunks = this.stream.getMissingChunks();
      this._requestChunks(missingChunks);
      return this._loadedStreamCapability.promise;
    },
    _requestChunks: function ChunkedStreamManager_requestChunks(chunks) {
      var requestId = this.currRequestId++;
      var i, ii;
      var chunksNeeded = Object.create(null);
      this.chunksNeededByRequest[requestId] = chunksNeeded;
      for (i = 0, ii = chunks.length; i < ii; i++) {
        if (!this.stream.hasChunk(chunks[i])) {
          chunksNeeded[chunks[i]] = true;
        }
      }
      if ((0, _util.isEmptyObj)(chunksNeeded)) {
        return Promise.resolve();
      }
      var capability = (0, _util.createPromiseCapability)();
      this.promisesByRequest[requestId] = capability;
      var chunksToRequest = [];
      for (var chunk in chunksNeeded) {
        chunk = chunk | 0;
        if (!(chunk in this.requestsByChunk)) {
          this.requestsByChunk[chunk] = [];
          chunksToRequest.push(chunk);
        }
        this.requestsByChunk[chunk].push(requestId);
      }
      if (!chunksToRequest.length) {
        return capability.promise;
      }
      var groupedChunksToRequest = this.groupChunks(chunksToRequest);
      for (i = 0; i < groupedChunksToRequest.length; ++i) {
        var groupedChunk = groupedChunksToRequest[i];
        var begin = groupedChunk.beginChunk * this.chunkSize;
        var end = Math.min(groupedChunk.endChunk * this.chunkSize, this.length);
        this.sendRequest(begin, end);
      }
      return capability.promise;
    },
    getStream: function ChunkedStreamManager_getStream() {
      return this.stream;
    },
    requestRange: function ChunkedStreamManager_requestRange(begin, end) {
      end = Math.min(end, this.length);
      var beginChunk = this.getBeginChunk(begin);
      var endChunk = this.getEndChunk(end);
      var chunks = [];
      for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
        chunks.push(chunk);
      }
      return this._requestChunks(chunks);
    },
    requestRanges: function ChunkedStreamManager_requestRanges(ranges) {
      ranges = ranges || [];
      var chunksToRequest = [];
      for (var i = 0; i < ranges.length; i++) {
        var beginChunk = this.getBeginChunk(ranges[i].begin);
        var endChunk = this.getEndChunk(ranges[i].end);
        for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
          if (!chunksToRequest.includes(chunk)) {
            chunksToRequest.push(chunk);
          }
        }
      }
      chunksToRequest.sort(function (a, b) {
        return a - b;
      });
      return this._requestChunks(chunksToRequest);
    },
    groupChunks: function ChunkedStreamManager_groupChunks(chunks) {
      var groupedChunks = [];
      var beginChunk = -1;
      var prevChunk = -1;
      for (var i = 0; i < chunks.length; ++i) {
        var chunk = chunks[i];
        if (beginChunk < 0) {
          beginChunk = chunk;
        }
        if (prevChunk >= 0 && prevChunk + 1 !== chunk) {
          groupedChunks.push({
            beginChunk: beginChunk,
            endChunk: prevChunk + 1
          });
          beginChunk = chunk;
        }
        if (i + 1 === chunks.length) {
          groupedChunks.push({
            beginChunk: beginChunk,
            endChunk: chunk + 1
          });
        }
        prevChunk = chunk;
      }
      return groupedChunks;
    },
    onProgress: function ChunkedStreamManager_onProgress(args) {
      var bytesLoaded = this.stream.numChunksLoaded * this.chunkSize + args.loaded;
      this.msgHandler.send('DocProgress', {
        loaded: bytesLoaded,
        total: this.length
      });
    },
    onReceiveData: function ChunkedStreamManager_onReceiveData(args) {
      var chunk = args.chunk;
      var isProgressive = args.begin === undefined;
      var begin = isProgressive ? this.progressiveDataLength : args.begin;
      var end = begin + chunk.byteLength;
      var beginChunk = Math.floor(begin / this.chunkSize);
      var endChunk = end < this.length ? Math.floor(end / this.chunkSize) : Math.ceil(end / this.chunkSize);
      if (isProgressive) {
        this.stream.onReceiveProgressiveData(chunk);
        this.progressiveDataLength = end;
      } else {
        this.stream.onReceiveData(begin, chunk);
      }
      if (this.stream.allChunksLoaded()) {
        this._loadedStreamCapability.resolve(this.stream);
      }
      var loadedRequests = [];
      var i, requestId;
      for (chunk = beginChunk; chunk < endChunk; ++chunk) {
        var requestIds = this.requestsByChunk[chunk] || [];
        delete this.requestsByChunk[chunk];
        for (i = 0; i < requestIds.length; ++i) {
          requestId = requestIds[i];
          var chunksNeeded = this.chunksNeededByRequest[requestId];
          if (chunk in chunksNeeded) {
            delete chunksNeeded[chunk];
          }
          if (!(0, _util.isEmptyObj)(chunksNeeded)) {
            continue;
          }
          loadedRequests.push(requestId);
        }
      }
      if (!this.disableAutoFetch && (0, _util.isEmptyObj)(this.requestsByChunk)) {
        var nextEmptyChunk;
        if (this.stream.numChunksLoaded === 1) {
          var lastChunk = this.stream.numChunks - 1;
          if (!this.stream.hasChunk(lastChunk)) {
            nextEmptyChunk = lastChunk;
          }
        } else {
          nextEmptyChunk = this.stream.nextEmptyChunk(endChunk);
        }
        if (Number.isInteger(nextEmptyChunk)) {
          this._requestChunks([nextEmptyChunk]);
        }
      }
      for (i = 0; i < loadedRequests.length; ++i) {
        requestId = loadedRequests[i];
        var capability = this.promisesByRequest[requestId];
        delete this.promisesByRequest[requestId];
        capability.resolve();
      }
      this.msgHandler.send('DocProgress', {
        loaded: this.stream.numChunksLoaded * this.chunkSize,
        total: this.length
      });
    },
    onError: function ChunkedStreamManager_onError(err) {
      this._loadedStreamCapability.reject(err);
    },
    getBeginChunk: function ChunkedStreamManager_getBeginChunk(begin) {
      var chunk = Math.floor(begin / this.chunkSize);
      return chunk;
    },
    getEndChunk: function ChunkedStreamManager_getEndChunk(end) {
      var chunk = Math.floor((end - 1) / this.chunkSize) + 1;
      return chunk;
    },
    abort: function ChunkedStreamManager_abort() {
      this.aborted = true;
      if (this.pdfNetworkStream) {
        this.pdfNetworkStream.cancelAllRequests('abort');
      }
      for (var requestId in this.promisesByRequest) {
        var capability = this.promisesByRequest[requestId];
        capability.reject(new Error('Request was aborted'));
      }
    }
  };
  return ChunkedStreamManager;
}();
exports.ChunkedStream = ChunkedStream;
exports.ChunkedStreamManager = ChunkedStreamManager;

/***/ }),
/* 121 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFDocument = exports.Page = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _util = __w_pdfjs_require__(2);

var _obj = __w_pdfjs_require__(122);

var _primitives = __w_pdfjs_require__(123);

var _stream = __w_pdfjs_require__(125);

var _annotation = __w_pdfjs_require__(137);

var _crypto = __w_pdfjs_require__(135);

var _parser = __w_pdfjs_require__(124);

var _operator_list = __w_pdfjs_require__(138);

var _evaluator = __w_pdfjs_require__(139);

var _function = __w_pdfjs_require__(153);

var Page = function PageClosure() {
  var DEFAULT_USER_UNIT = 1.0;
  var LETTER_SIZE_MEDIABOX = [0, 0, 612, 792];
  function isAnnotationRenderable(annotation, intent) {
    return intent === 'display' && annotation.viewable || intent === 'print' && annotation.printable;
  }
  function Page(_ref) {
    var pdfManager = _ref.pdfManager,
        xref = _ref.xref,
        pageIndex = _ref.pageIndex,
        pageDict = _ref.pageDict,
        ref = _ref.ref,
        fontCache = _ref.fontCache,
        builtInCMapCache = _ref.builtInCMapCache,
        pdfFunctionFactory = _ref.pdfFunctionFactory;

    this.pdfManager = pdfManager;
    this.pageIndex = pageIndex;
    this.pageDict = pageDict;
    this.xref = xref;
    this.ref = ref;
    this.fontCache = fontCache;
    this.builtInCMapCache = builtInCMapCache;
    this.pdfFunctionFactory = pdfFunctionFactory;
    this.evaluatorOptions = pdfManager.evaluatorOptions;
    this.resourcesPromise = null;
    var uniquePrefix = 'p' + this.pageIndex + '_';
    var idCounters = { obj: 0 };
    this.idFactory = {
      createObjId: function createObjId() {
        return uniquePrefix + ++idCounters.obj;
      }
    };
  }
  Page.prototype = {
    _getInheritableProperty: function _getInheritableProperty(key) {
      var getArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var value = (0, _util.getInheritableProperty)({
        dict: this.pageDict,
        key: key,
        getArray: getArray,
        stopWhenFound: false
      });
      if (!Array.isArray(value)) {
        return value;
      }
      if (value.length === 1 || !(0, _primitives.isDict)(value[0])) {
        return value[0];
      }
      return _primitives.Dict.merge(this.xref, value);
    },

    get content() {
      return this.pageDict.get('Contents');
    },
    get resources() {
      return (0, _util.shadow)(this, 'resources', this._getInheritableProperty('Resources') || _primitives.Dict.empty);
    },
    get mediaBox() {
      var mediaBox = this._getInheritableProperty('MediaBox', true);
      if (!Array.isArray(mediaBox) || mediaBox.length !== 4) {
        return (0, _util.shadow)(this, 'mediaBox', LETTER_SIZE_MEDIABOX);
      }
      return (0, _util.shadow)(this, 'mediaBox', mediaBox);
    },
    get cropBox() {
      var cropBox = this._getInheritableProperty('CropBox', true);
      if (!Array.isArray(cropBox) || cropBox.length !== 4) {
        return (0, _util.shadow)(this, 'cropBox', this.mediaBox);
      }
      return (0, _util.shadow)(this, 'cropBox', cropBox);
    },
    get userUnit() {
      var obj = this.pageDict.get('UserUnit');
      if (!(0, _util.isNum)(obj) || obj <= 0) {
        obj = DEFAULT_USER_UNIT;
      }
      return (0, _util.shadow)(this, 'userUnit', obj);
    },
    get view() {
      var mediaBox = this.mediaBox,
          cropBox = this.cropBox;
      if (mediaBox === cropBox) {
        return (0, _util.shadow)(this, 'view', mediaBox);
      }
      var intersection = _util.Util.intersect(cropBox, mediaBox);
      return (0, _util.shadow)(this, 'view', intersection || mediaBox);
    },
    get rotate() {
      var rotate = this._getInheritableProperty('Rotate') || 0;
      if (rotate % 90 !== 0) {
        rotate = 0;
      } else if (rotate >= 360) {
        rotate = rotate % 360;
      } else if (rotate < 0) {
        rotate = (rotate % 360 + 360) % 360;
      }
      return (0, _util.shadow)(this, 'rotate', rotate);
    },
    getContentStream: function Page_getContentStream() {
      var content = this.content;
      var stream;
      if (Array.isArray(content)) {
        var xref = this.xref;
        var i,
            n = content.length;
        var streams = [];
        for (i = 0; i < n; ++i) {
          streams.push(xref.fetchIfRef(content[i]));
        }
        stream = new _stream.StreamsSequenceStream(streams);
      } else if ((0, _primitives.isStream)(content)) {
        stream = content;
      } else {
        stream = new _stream.NullStream();
      }
      return stream;
    },
    loadResources: function Page_loadResources(keys) {
      var _this = this;

      if (!this.resourcesPromise) {
        this.resourcesPromise = this.pdfManager.ensure(this, 'resources');
      }
      return this.resourcesPromise.then(function () {
        var objectLoader = new _obj.ObjectLoader(_this.resources, keys, _this.xref);
        return objectLoader.load();
      });
    },
    getOperatorList: function getOperatorList(_ref2) {
      var _this2 = this;

      var handler = _ref2.handler,
          task = _ref2.task,
          intent = _ref2.intent,
          renderInteractiveForms = _ref2.renderInteractiveForms;

      var contentStreamPromise = this.pdfManager.ensure(this, 'getContentStream');
      var resourcesPromise = this.loadResources(['ExtGState', 'ColorSpace', 'Pattern', 'Shading', 'XObject', 'Font']);
      var partialEvaluator = new _evaluator.PartialEvaluator({
        pdfManager: this.pdfManager,
        xref: this.xref,
        handler: handler,
        pageIndex: this.pageIndex,
        idFactory: this.idFactory,
        fontCache: this.fontCache,
        builtInCMapCache: this.builtInCMapCache,
        options: this.evaluatorOptions,
        pdfFunctionFactory: this.pdfFunctionFactory
      });
      var dataPromises = Promise.all([contentStreamPromise, resourcesPromise]);
      var pageListPromise = dataPromises.then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            contentStream = _ref4[0];

        var opList = new _operator_list.OperatorList(intent, handler, _this2.pageIndex);
        handler.send('StartRenderPage', {
          transparency: partialEvaluator.hasBlendModes(_this2.resources),
          pageIndex: _this2.pageIndex,
          intent: intent
        });
        return partialEvaluator.getOperatorList({
          stream: contentStream,
          task: task,
          resources: _this2.resources,
          operatorList: opList
        }).then(function () {
          return opList;
        });
      });
      var annotationsPromise = this.pdfManager.ensure(this, 'annotations');
      return Promise.all([pageListPromise, annotationsPromise]).then(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            pageOpList = _ref6[0],
            annotations = _ref6[1];

        if (annotations.length === 0) {
          pageOpList.flush(true);
          return pageOpList;
        }
        var i,
            ii,
            opListPromises = [];
        for (i = 0, ii = annotations.length; i < ii; i++) {
          if (isAnnotationRenderable(annotations[i], intent)) {
            opListPromises.push(annotations[i].getOperatorList(partialEvaluator, task, renderInteractiveForms));
          }
        }
        return Promise.all(opListPromises).then(function (opLists) {
          pageOpList.addOp(_util.OPS.beginAnnotations, []);
          for (i = 0, ii = opLists.length; i < ii; i++) {
            pageOpList.addOpList(opLists[i]);
          }
          pageOpList.addOp(_util.OPS.endAnnotations, []);
          pageOpList.flush(true);
          return pageOpList;
        });
      });
    },
    extractTextContent: function extractTextContent(_ref7) {
      var _this3 = this;

      var handler = _ref7.handler,
          task = _ref7.task,
          normalizeWhitespace = _ref7.normalizeWhitespace,
          sink = _ref7.sink,
          combineTextItems = _ref7.combineTextItems;

      var contentStreamPromise = this.pdfManager.ensure(this, 'getContentStream');
      var resourcesPromise = this.loadResources(['ExtGState', 'XObject', 'Font']);
      var dataPromises = Promise.all([contentStreamPromise, resourcesPromise]);
      return dataPromises.then(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 1),
            contentStream = _ref9[0];

        var partialEvaluator = new _evaluator.PartialEvaluator({
          pdfManager: _this3.pdfManager,
          xref: _this3.xref,
          handler: handler,
          pageIndex: _this3.pageIndex,
          idFactory: _this3.idFactory,
          fontCache: _this3.fontCache,
          builtInCMapCache: _this3.builtInCMapCache,
          options: _this3.evaluatorOptions,
          pdfFunctionFactory: _this3.pdfFunctionFactory
        });
        return partialEvaluator.getTextContent({
          stream: contentStream,
          task: task,
          resources: _this3.resources,
          normalizeWhitespace: normalizeWhitespace,
          combineTextItems: combineTextItems,
          sink: sink
        });
      });
    },

    getAnnotationsData: function Page_getAnnotationsData(intent) {
      var annotations = this.annotations;
      var annotationsData = [];
      for (var i = 0, n = annotations.length; i < n; ++i) {
        if (!intent || isAnnotationRenderable(annotations[i], intent)) {
          annotationsData.push(annotations[i].data);
        }
      }
      return annotationsData;
    },
    get annotations() {
      var annotations = [];
      var annotationRefs = this._getInheritableProperty('Annots') || [];
      for (var i = 0, n = annotationRefs.length; i < n; ++i) {
        var annotationRef = annotationRefs[i];
        var annotation = _annotation.AnnotationFactory.create(this.xref, annotationRef, this.pdfManager, this.idFactory);
        if (annotation) {
          annotations.push(annotation);
        }
      }
      return (0, _util.shadow)(this, 'annotations', annotations);
    }
  };
  return Page;
}();
var PDFDocument = function PDFDocumentClosure() {
  var FINGERPRINT_FIRST_BYTES = 1024;
  var EMPTY_FINGERPRINT = '\x00\x00\x00\x00\x00\x00\x00' + '\x00\x00\x00\x00\x00\x00\x00\x00\x00';
  function PDFDocument(pdfManager, arg) {
    var stream;
    if ((0, _primitives.isStream)(arg)) {
      stream = arg;
    } else if ((0, _util.isArrayBuffer)(arg)) {
      stream = new _stream.Stream(arg);
    } else {
      throw new Error('PDFDocument: Unknown argument type');
    }
    if (stream.length <= 0) {
      throw new Error('PDFDocument: stream must have data');
    }
    this.pdfManager = pdfManager;
    this.stream = stream;
    this.xref = new _obj.XRef(stream, pdfManager);
    var evaluatorOptions = pdfManager.evaluatorOptions;
    this.pdfFunctionFactory = new _function.PDFFunctionFactory({
      xref: this.xref,
      isEvalSupported: evaluatorOptions.isEvalSupported
    });
    this._pagePromises = [];
  }
  function find(stream, needle, limit, backwards) {
    var pos = stream.pos;
    var end = stream.end;
    var strBuf = [];
    if (pos + limit > end) {
      limit = end - pos;
    }
    for (var n = 0; n < limit; ++n) {
      strBuf.push(String.fromCharCode(stream.getByte()));
    }
    var str = strBuf.join('');
    stream.pos = pos;
    var index = backwards ? str.lastIndexOf(needle) : str.indexOf(needle);
    if (index === -1) {
      return false;
    }
    stream.pos += index;
    return true;
  }
  var DocumentInfoValidators = {
    Title: _util.isString,
    Author: _util.isString,
    Subject: _util.isString,
    Keywords: _util.isString,
    Creator: _util.isString,
    Producer: _util.isString,
    CreationDate: _util.isString,
    ModDate: _util.isString,
    Trapped: _primitives.isName
  };
  PDFDocument.prototype = {
    parse: function PDFDocument_parse(recoveryMode) {
      this.setup(recoveryMode);
      var version = this.catalog.catDict.get('Version');
      if ((0, _primitives.isName)(version)) {
        this.pdfFormatVersion = version.name;
      }
      try {
        this.acroForm = this.catalog.catDict.get('AcroForm');
        if (this.acroForm) {
          this.xfa = this.acroForm.get('XFA');
          var fields = this.acroForm.get('Fields');
          if ((!fields || !Array.isArray(fields) || fields.length === 0) && !this.xfa) {
            this.acroForm = null;
          }
        }
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.info)('Something wrong with AcroForm entry');
        this.acroForm = null;
      }
    },
    get linearization() {
      var linearization = null;
      try {
        linearization = _parser.Linearization.create(this.stream);
      } catch (err) {
        if (err instanceof _util.MissingDataException) {
          throw err;
        }
        (0, _util.info)(err);
      }
      return (0, _util.shadow)(this, 'linearization', linearization);
    },
    get startXRef() {
      var stream = this.stream;
      var startXRef = 0;
      var linearization = this.linearization;
      if (linearization) {
        stream.reset();
        if (find(stream, 'endobj', 1024)) {
          startXRef = stream.pos + 6;
        }
      } else {
        var step = 1024;
        var found = false,
            pos = stream.end;
        while (!found && pos > 0) {
          pos -= step - 'startxref'.length;
          if (pos < 0) {
            pos = 0;
          }
          stream.pos = pos;
          found = find(stream, 'startxref', step, true);
        }
        if (found) {
          stream.skip(9);
          var ch;
          do {
            ch = stream.getByte();
          } while ((0, _util.isSpace)(ch));
          var str = '';
          while (ch >= 0x20 && ch <= 0x39) {
            str += String.fromCharCode(ch);
            ch = stream.getByte();
          }
          startXRef = parseInt(str, 10);
          if (isNaN(startXRef)) {
            startXRef = 0;
          }
        }
      }
      return (0, _util.shadow)(this, 'startXRef', startXRef);
    },
    get mainXRefEntriesOffset() {
      var mainXRefEntriesOffset = 0;
      var linearization = this.linearization;
      if (linearization) {
        mainXRefEntriesOffset = linearization.mainXRefEntriesOffset;
      }
      return (0, _util.shadow)(this, 'mainXRefEntriesOffset', mainXRefEntriesOffset);
    },
    checkHeader: function PDFDocument_checkHeader() {
      var stream = this.stream;
      stream.reset();
      if (find(stream, '%PDF-', 1024)) {
        stream.moveStart();
        var MAX_VERSION_LENGTH = 12;
        var version = '',
            ch;
        while ((ch = stream.getByte()) > 0x20) {
          if (version.length >= MAX_VERSION_LENGTH) {
            break;
          }
          version += String.fromCharCode(ch);
        }
        if (!this.pdfFormatVersion) {
          this.pdfFormatVersion = version.substring(5);
        }
        return;
      }
    },
    parseStartXRef: function PDFDocument_parseStartXRef() {
      var startXRef = this.startXRef;
      this.xref.setStartXRef(startXRef);
    },
    setup: function PDFDocument_setup(recoveryMode) {
      this.xref.parse(recoveryMode);
      this.catalog = new _obj.Catalog(this.pdfManager, this.xref);
    },
    get numPages() {
      var linearization = this.linearization;
      var num = linearization ? linearization.numPages : this.catalog.numPages;
      return (0, _util.shadow)(this, 'numPages', num);
    },
    get documentInfo() {
      var docInfo = {
        PDFFormatVersion: this.pdfFormatVersion,
        IsLinearized: !!this.linearization,
        IsAcroFormPresent: !!this.acroForm,
        IsXFAPresent: !!this.xfa
      };
      var infoDict = void 0;
      try {
        infoDict = this.xref.trailer.get('Info');
      } catch (err) {
        if (err instanceof _util.MissingDataException) {
          throw err;
        }
        (0, _util.info)('The document information dictionary is invalid.');
      }
      if ((0, _primitives.isDict)(infoDict)) {
        for (var key in DocumentInfoValidators) {
          if (infoDict.has(key)) {
            var value = infoDict.get(key);
            if (DocumentInfoValidators[key](value)) {
              docInfo[key] = typeof value !== 'string' ? value : (0, _util.stringToPDFString)(value);
            } else {
              (0, _util.info)('Bad value in document info for "' + key + '"');
            }
          }
        }
      }
      return (0, _util.shadow)(this, 'documentInfo', docInfo);
    },
    get fingerprint() {
      var xref = this.xref,
          hash,
          fileID = '';
      var idArray = xref.trailer.get('ID');
      if (Array.isArray(idArray) && idArray[0] && (0, _util.isString)(idArray[0]) && idArray[0] !== EMPTY_FINGERPRINT) {
        hash = (0, _util.stringToBytes)(idArray[0]);
      } else {
        if (this.stream.ensureRange) {
          this.stream.ensureRange(0, Math.min(FINGERPRINT_FIRST_BYTES, this.stream.end));
        }
        hash = (0, _crypto.calculateMD5)(this.stream.bytes.subarray(0, FINGERPRINT_FIRST_BYTES), 0, FINGERPRINT_FIRST_BYTES);
      }
      for (var i = 0, n = hash.length; i < n; i++) {
        var hex = hash[i].toString(16);
        fileID += hex.length === 1 ? '0' + hex : hex;
      }
      return (0, _util.shadow)(this, 'fingerprint', fileID);
    },
    _getLinearizationPage: function _getLinearizationPage(pageIndex) {
      var catalog = this.catalog,
          linearization = this.linearization;

      (0, _util.assert)(linearization && linearization.pageFirst === pageIndex);
      var ref = new _primitives.Ref(linearization.objectNumberFirst, 0);
      return this.xref.fetchAsync(ref).then(function (obj) {
        if ((0, _primitives.isDict)(obj, 'Page') || (0, _primitives.isDict)(obj) && !obj.has('Type') && obj.has('Contents')) {
          if (ref && !catalog.pageKidsCountCache.has(ref)) {
            catalog.pageKidsCountCache.put(ref, 1);
          }
          return [obj, ref];
        }
        throw new _util.FormatError('The Linearization dictionary doesn\'t point ' + 'to a valid Page dictionary.');
      }).catch(function (reason) {
        (0, _util.info)(reason);
        return catalog.getPageDict(pageIndex);
      });
    },
    getPage: function getPage(pageIndex) {
      var _this4 = this;

      if (this._pagePromises[pageIndex] !== undefined) {
        return this._pagePromises[pageIndex];
      }
      var catalog = this.catalog,
          linearization = this.linearization;

      var promise = linearization && linearization.pageFirst === pageIndex ? this._getLinearizationPage(pageIndex) : catalog.getPageDict(pageIndex);
      return this._pagePromises[pageIndex] = promise.then(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
            pageDict = _ref11[0],
            ref = _ref11[1];

        return new Page({
          pdfManager: _this4.pdfManager,
          xref: _this4.xref,
          pageIndex: pageIndex,
          pageDict: pageDict,
          ref: ref,
          fontCache: catalog.fontCache,
          builtInCMapCache: catalog.builtInCMapCache,
          pdfFunctionFactory: _this4.pdfFunctionFactory
        });
      });
    },

    cleanup: function PDFDocument_cleanup() {
      return this.catalog.cleanup();
    }
  };
  return PDFDocument;
}();
exports.Page = Page;
exports.PDFDocument = PDFDocument;

/***/ }),
/* 122 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileSpec = exports.XRef = exports.ObjectLoader = exports.Catalog = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __w_pdfjs_require__(2);

var _primitives = __w_pdfjs_require__(123);

var _parser = __w_pdfjs_require__(124);

var _chunked_stream = __w_pdfjs_require__(120);

var _crypto = __w_pdfjs_require__(135);

var _colorspace = __w_pdfjs_require__(136);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Catalog = function CatalogClosure() {
  function Catalog(pdfManager, xref) {
    this.pdfManager = pdfManager;
    this.xref = xref;
    this.catDict = xref.getCatalogObj();
    if (!(0, _primitives.isDict)(this.catDict)) {
      throw new _util.FormatError('catalog object is not a dictionary');
    }
    this.fontCache = new _primitives.RefSetCache();
    this.builtInCMapCache = new Map();
    this.pageKidsCountCache = new _primitives.RefSetCache();
  }
  Catalog.prototype = {
    get metadata() {
      var streamRef = this.catDict.getRaw('Metadata');
      if (!(0, _primitives.isRef)(streamRef)) {
        return (0, _util.shadow)(this, 'metadata', null);
      }
      var encryptMetadata = !this.xref.encrypt ? false : this.xref.encrypt.encryptMetadata;
      var stream = this.xref.fetch(streamRef, !encryptMetadata);
      var metadata;
      if (stream && (0, _primitives.isDict)(stream.dict)) {
        var type = stream.dict.get('Type');
        var subtype = stream.dict.get('Subtype');
        if ((0, _primitives.isName)(type, 'Metadata') && (0, _primitives.isName)(subtype, 'XML')) {
          try {
            metadata = (0, _util.stringToUTF8String)((0, _util.bytesToString)(stream.getBytes()));
          } catch (e) {
            if (e instanceof _util.MissingDataException) {
              throw e;
            }
            (0, _util.info)('Skipping invalid metadata.');
          }
        }
      }
      return (0, _util.shadow)(this, 'metadata', metadata);
    },
    get toplevelPagesDict() {
      var pagesObj = this.catDict.get('Pages');
      if (!(0, _primitives.isDict)(pagesObj)) {
        throw new _util.FormatError('invalid top-level pages dictionary');
      }
      return (0, _util.shadow)(this, 'toplevelPagesDict', pagesObj);
    },
    get documentOutline() {
      var obj = null;
      try {
        obj = this.readDocumentOutline();
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('Unable to read document outline');
      }
      return (0, _util.shadow)(this, 'documentOutline', obj);
    },
    readDocumentOutline: function Catalog_readDocumentOutline() {
      var obj = this.catDict.get('Outlines');
      if (!(0, _primitives.isDict)(obj)) {
        return null;
      }
      obj = obj.getRaw('First');
      if (!(0, _primitives.isRef)(obj)) {
        return null;
      }
      var root = { items: [] };
      var queue = [{
        obj: obj,
        parent: root
      }];
      var processed = new _primitives.RefSet();
      processed.put(obj);
      var xref = this.xref,
          blackColor = new Uint8ClampedArray(3);
      while (queue.length > 0) {
        var i = queue.shift();
        var outlineDict = xref.fetchIfRef(i.obj);
        if (outlineDict === null) {
          continue;
        }
        if (!outlineDict.has('Title')) {
          throw new _util.FormatError('Invalid outline item');
        }
        var data = {
          url: null,
          dest: null
        };
        Catalog.parseDestDictionary({
          destDict: outlineDict,
          resultObj: data,
          docBaseUrl: this.pdfManager.docBaseUrl
        });
        var title = outlineDict.get('Title');
        var flags = outlineDict.get('F') || 0;
        var color = outlineDict.getArray('C'),
            rgbColor = blackColor;
        if (Array.isArray(color) && color.length === 3 && (color[0] !== 0 || color[1] !== 0 || color[2] !== 0)) {
          rgbColor = _colorspace.ColorSpace.singletons.rgb.getRgb(color, 0);
        }
        var outlineItem = {
          dest: data.dest,
          url: data.url,
          unsafeUrl: data.unsafeUrl,
          newWindow: data.newWindow,
          title: (0, _util.stringToPDFString)(title),
          color: rgbColor,
          count: outlineDict.get('Count'),
          bold: !!(flags & 2),
          italic: !!(flags & 1),
          items: []
        };
        i.parent.items.push(outlineItem);
        obj = outlineDict.getRaw('First');
        if ((0, _primitives.isRef)(obj) && !processed.has(obj)) {
          queue.push({
            obj: obj,
            parent: outlineItem
          });
          processed.put(obj);
        }
        obj = outlineDict.getRaw('Next');
        if ((0, _primitives.isRef)(obj) && !processed.has(obj)) {
          queue.push({
            obj: obj,
            parent: i.parent
          });
          processed.put(obj);
        }
      }
      return root.items.length > 0 ? root.items : null;
    },
    get numPages() {
      var obj = this.toplevelPagesDict.get('Count');
      if (!Number.isInteger(obj)) {
        throw new _util.FormatError('page count in top level pages object is not an integer');
      }
      return (0, _util.shadow)(this, 'numPages', obj);
    },
    get destinations() {
      function fetchDestination(dest) {
        return (0, _primitives.isDict)(dest) ? dest.get('D') : dest;
      }
      var xref = this.xref;
      var dests = {},
          nameTreeRef,
          nameDictionaryRef;
      var obj = this.catDict.get('Names');
      if (obj && obj.has('Dests')) {
        nameTreeRef = obj.getRaw('Dests');
      } else if (this.catDict.has('Dests')) {
        nameDictionaryRef = this.catDict.get('Dests');
      }
      if (nameDictionaryRef) {
        obj = nameDictionaryRef;
        obj.forEach(function catalogForEach(key, value) {
          if (!value) {
            return;
          }
          dests[key] = fetchDestination(value);
        });
      }
      if (nameTreeRef) {
        var nameTree = new NameTree(nameTreeRef, xref);
        var names = nameTree.getAll();
        for (var name in names) {
          dests[name] = fetchDestination(names[name]);
        }
      }
      return (0, _util.shadow)(this, 'destinations', dests);
    },
    getDestination: function Catalog_getDestination(destinationId) {
      function fetchDestination(dest) {
        return (0, _primitives.isDict)(dest) ? dest.get('D') : dest;
      }
      var xref = this.xref;
      var dest = null,
          nameTreeRef,
          nameDictionaryRef;
      var obj = this.catDict.get('Names');
      if (obj && obj.has('Dests')) {
        nameTreeRef = obj.getRaw('Dests');
      } else if (this.catDict.has('Dests')) {
        nameDictionaryRef = this.catDict.get('Dests');
      }
      if (nameDictionaryRef) {
        var value = nameDictionaryRef.get(destinationId);
        if (value) {
          dest = fetchDestination(value);
        }
      }
      if (nameTreeRef) {
        var nameTree = new NameTree(nameTreeRef, xref);
        dest = fetchDestination(nameTree.get(destinationId));
      }
      return dest;
    },
    get pageLabels() {
      var obj = null;
      try {
        obj = this.readPageLabels();
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('Unable to read page labels.');
      }
      return (0, _util.shadow)(this, 'pageLabels', obj);
    },
    readPageLabels: function Catalog_readPageLabels() {
      var obj = this.catDict.getRaw('PageLabels');
      if (!obj) {
        return null;
      }
      var pageLabels = new Array(this.numPages);
      var style = null;
      var prefix = '';
      var numberTree = new NumberTree(obj, this.xref);
      var nums = numberTree.getAll();
      var currentLabel = '',
          currentIndex = 1;
      for (var i = 0, ii = this.numPages; i < ii; i++) {
        if (i in nums) {
          var labelDict = nums[i];
          if (!(0, _primitives.isDict)(labelDict)) {
            throw new _util.FormatError('The PageLabel is not a dictionary.');
          }
          if (labelDict.has('Type') && !(0, _primitives.isName)(labelDict.get('Type'), 'PageLabel')) {
            throw new _util.FormatError('Invalid type in PageLabel dictionary.');
          }
          if (labelDict.has('S')) {
            var s = labelDict.get('S');
            if (!(0, _primitives.isName)(s)) {
              throw new _util.FormatError('Invalid style in PageLabel dictionary.');
            }
            style = s.name;
          } else {
            style = null;
          }
          if (labelDict.has('P')) {
            var p = labelDict.get('P');
            if (!(0, _util.isString)(p)) {
              throw new _util.FormatError('Invalid prefix in PageLabel dictionary.');
            }
            prefix = (0, _util.stringToPDFString)(p);
          } else {
            prefix = '';
          }
          if (labelDict.has('St')) {
            var st = labelDict.get('St');
            if (!(Number.isInteger(st) && st >= 1)) {
              throw new _util.FormatError('Invalid start in PageLabel dictionary.');
            }
            currentIndex = st;
          } else {
            currentIndex = 1;
          }
        }
        switch (style) {
          case 'D':
            currentLabel = currentIndex;
            break;
          case 'R':
          case 'r':
            currentLabel = (0, _util.toRomanNumerals)(currentIndex, style === 'r');
            break;
          case 'A':
          case 'a':
            var LIMIT = 26;
            var A_UPPER_CASE = 0x41,
                A_LOWER_CASE = 0x61;
            var baseCharCode = style === 'a' ? A_LOWER_CASE : A_UPPER_CASE;
            var letterIndex = currentIndex - 1;
            var character = String.fromCharCode(baseCharCode + letterIndex % LIMIT);
            var charBuf = [];
            for (var j = 0, jj = letterIndex / LIMIT | 0; j <= jj; j++) {
              charBuf.push(character);
            }
            currentLabel = charBuf.join('');
            break;
          default:
            if (style) {
              throw new _util.FormatError('Invalid style "' + style + '" in PageLabel dictionary.');
            }
            currentLabel = '';
        }
        pageLabels[i] = prefix + currentLabel;
        currentIndex++;
      }
      return pageLabels;
    },
    get pageMode() {
      var obj = this.catDict.get('PageMode');
      var pageMode = 'UseNone';
      if ((0, _primitives.isName)(obj)) {
        switch (obj.name) {
          case 'UseNone':
          case 'UseOutlines':
          case 'UseThumbs':
          case 'FullScreen':
          case 'UseOC':
          case 'UseAttachments':
            pageMode = obj.name;
        }
      }
      return (0, _util.shadow)(this, 'pageMode', pageMode);
    },
    get attachments() {
      var xref = this.xref;
      var attachments = null,
          nameTreeRef;
      var obj = this.catDict.get('Names');
      if (obj) {
        nameTreeRef = obj.getRaw('EmbeddedFiles');
      }
      if (nameTreeRef) {
        var nameTree = new NameTree(nameTreeRef, xref);
        var names = nameTree.getAll();
        for (var name in names) {
          var fs = new FileSpec(names[name], xref);
          if (!attachments) {
            attachments = Object.create(null);
          }
          attachments[(0, _util.stringToPDFString)(name)] = fs.serializable;
        }
      }
      return (0, _util.shadow)(this, 'attachments', attachments);
    },
    get javaScript() {
      var xref = this.xref;
      var obj = this.catDict.get('Names');
      var javaScript = null;
      function appendIfJavaScriptDict(jsDict) {
        var type = jsDict.get('S');
        if (!(0, _primitives.isName)(type, 'JavaScript')) {
          return;
        }
        var js = jsDict.get('JS');
        if ((0, _primitives.isStream)(js)) {
          js = (0, _util.bytesToString)(js.getBytes());
        } else if (!(0, _util.isString)(js)) {
          return;
        }
        if (!javaScript) {
          javaScript = [];
        }
        javaScript.push((0, _util.stringToPDFString)(js));
      }
      if (obj && obj.has('JavaScript')) {
        var nameTree = new NameTree(obj.getRaw('JavaScript'), xref);
        var names = nameTree.getAll();
        for (var name in names) {
          var jsDict = names[name];
          if ((0, _primitives.isDict)(jsDict)) {
            appendIfJavaScriptDict(jsDict);
          }
        }
      }
      var openactionDict = this.catDict.get('OpenAction');
      if ((0, _primitives.isDict)(openactionDict, 'Action')) {
        var actionType = openactionDict.get('S');
        if ((0, _primitives.isName)(actionType, 'Named')) {
          var action = openactionDict.get('N');
          if ((0, _primitives.isName)(action, 'Print')) {
            if (!javaScript) {
              javaScript = [];
            }
            javaScript.push('print({});');
          }
        } else {
          appendIfJavaScriptDict(openactionDict);
        }
      }
      return (0, _util.shadow)(this, 'javaScript', javaScript);
    },
    cleanup: function Catalog_cleanup() {
      var _this = this;

      this.pageKidsCountCache.clear();
      var promises = [];
      this.fontCache.forEach(function (promise) {
        promises.push(promise);
      });
      return Promise.all(promises).then(function (translatedFonts) {
        for (var i = 0, ii = translatedFonts.length; i < ii; i++) {
          var font = translatedFonts[i].dict;
          delete font.translated;
        }
        _this.fontCache.clear();
        _this.builtInCMapCache.clear();
      });
    },
    getPageDict: function Catalog_getPageDict(pageIndex) {
      var capability = (0, _util.createPromiseCapability)();
      var nodesToVisit = [this.catDict.getRaw('Pages')];
      var count,
          currentPageIndex = 0;
      var xref = this.xref,
          pageKidsCountCache = this.pageKidsCountCache;
      function next() {
        while (nodesToVisit.length) {
          var currentNode = nodesToVisit.pop();
          if ((0, _primitives.isRef)(currentNode)) {
            count = pageKidsCountCache.get(currentNode);
            if (count > 0 && currentPageIndex + count < pageIndex) {
              currentPageIndex += count;
              continue;
            }
            xref.fetchAsync(currentNode).then(function (obj) {
              if ((0, _primitives.isDict)(obj, 'Page') || (0, _primitives.isDict)(obj) && !obj.has('Kids')) {
                if (pageIndex === currentPageIndex) {
                  if (currentNode && !pageKidsCountCache.has(currentNode)) {
                    pageKidsCountCache.put(currentNode, 1);
                  }
                  capability.resolve([obj, currentNode]);
                } else {
                  currentPageIndex++;
                  next();
                }
                return;
              }
              nodesToVisit.push(obj);
              next();
            }, capability.reject);
            return;
          }
          if (!(0, _primitives.isDict)(currentNode)) {
            capability.reject(new _util.FormatError('page dictionary kid reference points to wrong type of object'));
            return;
          }
          count = currentNode.get('Count');
          if (Number.isInteger(count) && count >= 0) {
            var objId = currentNode.objId;
            if (objId && !pageKidsCountCache.has(objId)) {
              pageKidsCountCache.put(objId, count);
            }
            if (currentPageIndex + count <= pageIndex) {
              currentPageIndex += count;
              continue;
            }
          }
          var kids = currentNode.get('Kids');
          if (!Array.isArray(kids)) {
            if ((0, _primitives.isName)(currentNode.get('Type'), 'Page') || !currentNode.has('Type') && currentNode.has('Contents')) {
              if (currentPageIndex === pageIndex) {
                capability.resolve([currentNode, null]);
                return;
              }
              currentPageIndex++;
              continue;
            }
            capability.reject(new _util.FormatError('page dictionary kids object is not an array'));
            return;
          }
          for (var last = kids.length - 1; last >= 0; last--) {
            nodesToVisit.push(kids[last]);
          }
        }
        capability.reject(new Error('Page index ' + pageIndex + ' not found.'));
      }
      next();
      return capability.promise;
    },
    getPageIndex: function Catalog_getPageIndex(pageRef) {
      var xref = this.xref;
      function pagesBeforeRef(kidRef) {
        var total = 0;
        var parentRef;
        return xref.fetchAsync(kidRef).then(function (node) {
          if ((0, _primitives.isRefsEqual)(kidRef, pageRef) && !(0, _primitives.isDict)(node, 'Page') && !((0, _primitives.isDict)(node) && !node.has('Type') && node.has('Contents'))) {
            throw new _util.FormatError('The reference does not point to a /Page Dict.');
          }
          if (!node) {
            return null;
          }
          if (!(0, _primitives.isDict)(node)) {
            throw new _util.FormatError('node must be a Dict.');
          }
          parentRef = node.getRaw('Parent');
          return node.getAsync('Parent');
        }).then(function (parent) {
          if (!parent) {
            return null;
          }
          if (!(0, _primitives.isDict)(parent)) {
            throw new _util.FormatError('parent must be a Dict.');
          }
          return parent.getAsync('Kids');
        }).then(function (kids) {
          if (!kids) {
            return null;
          }
          var kidPromises = [];
          var found = false;
          for (var i = 0; i < kids.length; i++) {
            var kid = kids[i];
            if (!(0, _primitives.isRef)(kid)) {
              throw new _util.FormatError('kid must be a Ref.');
            }
            if ((0, _primitives.isRefsEqual)(kid, kidRef)) {
              found = true;
              break;
            }
            kidPromises.push(xref.fetchAsync(kid).then(function (kid) {
              if (!(0, _primitives.isDict)(kid)) {
                throw new _util.FormatError('kid node must be a Dict.');
              }
              if (kid.has('Count')) {
                var count = kid.get('Count');
                total += count;
              } else {
                total++;
              }
            }));
          }
          if (!found) {
            throw new _util.FormatError('kid ref not found in parents kids');
          }
          return Promise.all(kidPromises).then(function () {
            return [total, parentRef];
          });
        });
      }
      var total = 0;
      function next(ref) {
        return pagesBeforeRef(ref).then(function (args) {
          if (!args) {
            return total;
          }
          var count = args[0];
          var parentRef = args[1];
          total += count;
          return next(parentRef);
        });
      }
      return next(pageRef);
    }
  };
  Catalog.parseDestDictionary = function Catalog_parseDestDictionary(params) {
    function addDefaultProtocolToUrl(url) {
      if (url.indexOf('www.') === 0) {
        return 'http://' + url;
      }
      return url;
    }
    function tryConvertUrlEncoding(url) {
      try {
        return (0, _util.stringToUTF8String)(url);
      } catch (e) {
        return url;
      }
    }
    var destDict = params.destDict;
    if (!(0, _primitives.isDict)(destDict)) {
      (0, _util.warn)('parseDestDictionary: "destDict" must be a dictionary.');
      return;
    }
    var resultObj = params.resultObj;
    if ((typeof resultObj === 'undefined' ? 'undefined' : _typeof(resultObj)) !== 'object') {
      (0, _util.warn)('parseDestDictionary: "resultObj" must be an object.');
      return;
    }
    var docBaseUrl = params.docBaseUrl || null;
    var action = destDict.get('A'),
        url,
        dest;
    if (!(0, _primitives.isDict)(action) && destDict.has('Dest')) {
      action = destDict.get('Dest');
    }
    if ((0, _primitives.isDict)(action)) {
      var actionType = action.get('S');
      if (!(0, _primitives.isName)(actionType)) {
        (0, _util.warn)('parseDestDictionary: Invalid type in Action dictionary.');
        return;
      }
      var actionName = actionType.name;
      switch (actionName) {
        case 'URI':
          url = action.get('URI');
          if ((0, _primitives.isName)(url)) {
            url = '/' + url.name;
          } else if ((0, _util.isString)(url)) {
            url = addDefaultProtocolToUrl(url);
          }
          break;
        case 'GoTo':
          dest = action.get('D');
          break;
        case 'Launch':
        case 'GoToR':
          var urlDict = action.get('F');
          if ((0, _primitives.isDict)(urlDict)) {
            url = urlDict.get('F') || null;
          } else if ((0, _util.isString)(urlDict)) {
            url = urlDict;
          }
          var remoteDest = action.get('D');
          if (remoteDest) {
            if ((0, _primitives.isName)(remoteDest)) {
              remoteDest = remoteDest.name;
            }
            if ((0, _util.isString)(url)) {
              var baseUrl = url.split('#')[0];
              if ((0, _util.isString)(remoteDest)) {
                url = baseUrl + '#' + remoteDest;
              } else if (Array.isArray(remoteDest)) {
                url = baseUrl + '#' + JSON.stringify(remoteDest);
              }
            }
          }
          var newWindow = action.get('NewWindow');
          if ((0, _util.isBool)(newWindow)) {
            resultObj.newWindow = newWindow;
          }
          break;
        case 'Named':
          var namedAction = action.get('N');
          if ((0, _primitives.isName)(namedAction)) {
            resultObj.action = namedAction.name;
          }
          break;
        case 'JavaScript':
          var jsAction = action.get('JS'),
              js;
          if ((0, _primitives.isStream)(jsAction)) {
            js = (0, _util.bytesToString)(jsAction.getBytes());
          } else if ((0, _util.isString)(jsAction)) {
            js = jsAction;
          }
          if (js) {
            var URL_OPEN_METHODS = ['app.launchURL', 'window.open'];
            var regex = new RegExp('^\\s*(' + URL_OPEN_METHODS.join('|').split('.').join('\\.') + ')\\((?:\'|\")([^\'\"]*)(?:\'|\")(?:,\\s*(\\w+)\\)|\\))', 'i');
            var jsUrl = regex.exec((0, _util.stringToPDFString)(js));
            if (jsUrl && jsUrl[2]) {
              url = jsUrl[2];
              if (jsUrl[3] === 'true' && jsUrl[1] === 'app.launchURL') {
                resultObj.newWindow = true;
              }
              break;
            }
          }
        default:
          (0, _util.warn)('parseDestDictionary: Unsupported Action type "' + actionName + '".');
          break;
      }
    } else if (destDict.has('Dest')) {
      dest = destDict.get('Dest');
    }
    if ((0, _util.isString)(url)) {
      url = tryConvertUrlEncoding(url);
      var absoluteUrl = (0, _util.createValidAbsoluteUrl)(url, docBaseUrl);
      if (absoluteUrl) {
        resultObj.url = absoluteUrl.href;
      }
      resultObj.unsafeUrl = url;
    }
    if (dest) {
      if ((0, _primitives.isName)(dest)) {
        dest = dest.name;
      }
      if ((0, _util.isString)(dest) || Array.isArray(dest)) {
        resultObj.dest = dest;
      }
    }
  };
  return Catalog;
}();
var XRef = function XRefClosure() {
  function XRef(stream, pdfManager) {
    this.stream = stream;
    this.pdfManager = pdfManager;
    this.entries = [];
    this.xrefstms = Object.create(null);
    this.cache = [];
    this.stats = {
      streamTypes: [],
      fontTypes: []
    };
  }
  XRef.prototype = {
    setStartXRef: function XRef_setStartXRef(startXRef) {
      this.startXRefQueue = [startXRef];
    },
    parse: function XRef_parse(recoveryMode) {
      var trailerDict;
      if (!recoveryMode) {
        trailerDict = this.readXRef();
      } else {
        (0, _util.warn)('Indexing all PDF objects');
        trailerDict = this.indexObjects();
      }
      trailerDict.assignXref(this);
      this.trailer = trailerDict;
      var encrypt = void 0;
      try {
        encrypt = trailerDict.get('Encrypt');
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('XRef.parse - Invalid "Encrypt" reference: "' + ex + '".');
      }
      if ((0, _primitives.isDict)(encrypt)) {
        var ids = trailerDict.get('ID');
        var fileId = ids && ids.length ? ids[0] : '';
        encrypt.suppressEncryption = true;
        this.encrypt = new _crypto.CipherTransformFactory(encrypt, fileId, this.pdfManager.password);
      }
      var root = void 0;
      try {
        root = trailerDict.get('Root');
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('XRef.parse - Invalid "Root" reference: "' + ex + '".');
      }
      if ((0, _primitives.isDict)(root) && root.has('Pages')) {
        this.root = root;
      } else {
        if (!recoveryMode) {
          throw new _util.XRefParseException();
        }
        throw new _util.FormatError('Invalid root reference');
      }
    },
    processXRefTable: function XRef_processXRefTable(parser) {
      if (!('tableState' in this)) {
        this.tableState = {
          entryNum: 0,
          streamPos: parser.lexer.stream.pos,
          parserBuf1: parser.buf1,
          parserBuf2: parser.buf2
        };
      }
      var obj = this.readXRefTable(parser);
      if (!(0, _primitives.isCmd)(obj, 'trailer')) {
        throw new _util.FormatError('Invalid XRef table: could not find trailer dictionary');
      }
      var dict = parser.getObj();
      if (!(0, _primitives.isDict)(dict) && dict.dict) {
        dict = dict.dict;
      }
      if (!(0, _primitives.isDict)(dict)) {
        throw new _util.FormatError('Invalid XRef table: could not parse trailer dictionary');
      }
      delete this.tableState;
      return dict;
    },
    readXRefTable: function XRef_readXRefTable(parser) {
      var stream = parser.lexer.stream;
      var tableState = this.tableState;
      stream.pos = tableState.streamPos;
      parser.buf1 = tableState.parserBuf1;
      parser.buf2 = tableState.parserBuf2;
      var obj;
      while (true) {
        if (!('firstEntryNum' in tableState) || !('entryCount' in tableState)) {
          if ((0, _primitives.isCmd)(obj = parser.getObj(), 'trailer')) {
            break;
          }
          tableState.firstEntryNum = obj;
          tableState.entryCount = parser.getObj();
        }
        var first = tableState.firstEntryNum;
        var count = tableState.entryCount;
        if (!Number.isInteger(first) || !Number.isInteger(count)) {
          throw new _util.FormatError('Invalid XRef table: wrong types in subsection header');
        }
        for (var i = tableState.entryNum; i < count; i++) {
          tableState.streamPos = stream.pos;
          tableState.entryNum = i;
          tableState.parserBuf1 = parser.buf1;
          tableState.parserBuf2 = parser.buf2;
          var entry = {};
          entry.offset = parser.getObj();
          entry.gen = parser.getObj();
          var type = parser.getObj();
          if ((0, _primitives.isCmd)(type, 'f')) {
            entry.free = true;
          } else if ((0, _primitives.isCmd)(type, 'n')) {
            entry.uncompressed = true;
          }
          if (!Number.isInteger(entry.offset) || !Number.isInteger(entry.gen) || !(entry.free || entry.uncompressed)) {
            throw new _util.FormatError('Invalid entry in XRef subsection: ' + first + ', ' + count);
          }
          if (i === 0 && entry.free && first === 1) {
            first = 0;
          }
          if (!this.entries[i + first]) {
            this.entries[i + first] = entry;
          }
        }
        tableState.entryNum = 0;
        tableState.streamPos = stream.pos;
        tableState.parserBuf1 = parser.buf1;
        tableState.parserBuf2 = parser.buf2;
        delete tableState.firstEntryNum;
        delete tableState.entryCount;
      }
      if (this.entries[0] && !this.entries[0].free) {
        throw new _util.FormatError('Invalid XRef table: unexpected first object');
      }
      return obj;
    },
    processXRefStream: function XRef_processXRefStream(stream) {
      if (!('streamState' in this)) {
        var streamParameters = stream.dict;
        var byteWidths = streamParameters.get('W');
        var range = streamParameters.get('Index');
        if (!range) {
          range = [0, streamParameters.get('Size')];
        }
        this.streamState = {
          entryRanges: range,
          byteWidths: byteWidths,
          entryNum: 0,
          streamPos: stream.pos
        };
      }
      this.readXRefStream(stream);
      delete this.streamState;
      return stream.dict;
    },
    readXRefStream: function XRef_readXRefStream(stream) {
      var i, j;
      var streamState = this.streamState;
      stream.pos = streamState.streamPos;
      var byteWidths = streamState.byteWidths;
      var typeFieldWidth = byteWidths[0];
      var offsetFieldWidth = byteWidths[1];
      var generationFieldWidth = byteWidths[2];
      var entryRanges = streamState.entryRanges;
      while (entryRanges.length > 0) {
        var first = entryRanges[0];
        var n = entryRanges[1];
        if (!Number.isInteger(first) || !Number.isInteger(n)) {
          throw new _util.FormatError('Invalid XRef range fields: ' + first + ', ' + n);
        }
        if (!Number.isInteger(typeFieldWidth) || !Number.isInteger(offsetFieldWidth) || !Number.isInteger(generationFieldWidth)) {
          throw new _util.FormatError('Invalid XRef entry fields length: ' + first + ', ' + n);
        }
        for (i = streamState.entryNum; i < n; ++i) {
          streamState.entryNum = i;
          streamState.streamPos = stream.pos;
          var type = 0,
              offset = 0,
              generation = 0;
          for (j = 0; j < typeFieldWidth; ++j) {
            type = type << 8 | stream.getByte();
          }
          if (typeFieldWidth === 0) {
            type = 1;
          }
          for (j = 0; j < offsetFieldWidth; ++j) {
            offset = offset << 8 | stream.getByte();
          }
          for (j = 0; j < generationFieldWidth; ++j) {
            generation = generation << 8 | stream.getByte();
          }
          var entry = {};
          entry.offset = offset;
          entry.gen = generation;
          switch (type) {
            case 0:
              entry.free = true;
              break;
            case 1:
              entry.uncompressed = true;
              break;
            case 2:
              break;
            default:
              throw new _util.FormatError('Invalid XRef entry type: ' + type);
          }
          if (!this.entries[first + i]) {
            this.entries[first + i] = entry;
          }
        }
        streamState.entryNum = 0;
        streamState.streamPos = stream.pos;
        entryRanges.splice(0, 2);
      }
    },
    indexObjects: function XRef_indexObjects() {
      var TAB = 0x9,
          LF = 0xA,
          CR = 0xD,
          SPACE = 0x20;
      var PERCENT = 0x25,
          LT = 0x3C;
      function readToken(data, offset) {
        var token = '',
            ch = data[offset];
        while (ch !== LF && ch !== CR && ch !== LT) {
          if (++offset >= data.length) {
            break;
          }
          token += String.fromCharCode(ch);
          ch = data[offset];
        }
        return token;
      }
      function skipUntil(data, offset, what) {
        var length = what.length,
            dataLength = data.length;
        var skipped = 0;
        while (offset < dataLength) {
          var i = 0;
          while (i < length && data[offset + i] === what[i]) {
            ++i;
          }
          if (i >= length) {
            break;
          }
          offset++;
          skipped++;
        }
        return skipped;
      }
      var objRegExp = /^(\d+)\s+(\d+)\s+obj\b/;
      var endobjRegExp = /\bendobj[\b\s]$/;
      var nestedObjRegExp = /\s+(\d+\s+\d+\s+obj[\b\s])$/;
      var CHECK_CONTENT_LENGTH = 25;
      var trailerBytes = new Uint8Array([116, 114, 97, 105, 108, 101, 114]);
      var startxrefBytes = new Uint8Array([115, 116, 97, 114, 116, 120, 114, 101, 102]);
      var objBytes = new Uint8Array([111, 98, 106]);
      var xrefBytes = new Uint8Array([47, 88, 82, 101, 102]);
      this.entries.length = 0;
      var stream = this.stream;
      stream.pos = 0;
      var buffer = stream.getBytes();
      var position = stream.start,
          length = buffer.length;
      var trailers = [],
          xrefStms = [];
      while (position < length) {
        var ch = buffer[position];
        if (ch === TAB || ch === LF || ch === CR || ch === SPACE) {
          ++position;
          continue;
        }
        if (ch === PERCENT) {
          do {
            ++position;
            if (position >= length) {
              break;
            }
            ch = buffer[position];
          } while (ch !== LF && ch !== CR);
          continue;
        }
        var token = readToken(buffer, position);
        var m;
        if (token.indexOf('xref') === 0 && (token.length === 4 || /\s/.test(token[4]))) {
          position += skipUntil(buffer, position, trailerBytes);
          trailers.push(position);
          position += skipUntil(buffer, position, startxrefBytes);
        } else if (m = objRegExp.exec(token)) {
          if (typeof this.entries[m[1]] === 'undefined') {
            this.entries[m[1]] = {
              offset: position - stream.start,
              gen: m[2] | 0,
              uncompressed: true
            };
          }
          var contentLength = void 0,
              startPos = position + token.length;
          while (startPos < buffer.length) {
            var endPos = startPos + skipUntil(buffer, startPos, objBytes) + 4;
            contentLength = endPos - position;
            var checkPos = Math.max(endPos - CHECK_CONTENT_LENGTH, startPos);
            var tokenStr = (0, _util.bytesToString)(buffer.subarray(checkPos, endPos));
            if (endobjRegExp.test(tokenStr)) {
              break;
            } else {
              var objToken = nestedObjRegExp.exec(tokenStr);
              if (objToken && objToken[1]) {
                (0, _util.warn)('indexObjects: Found new "obj" inside of another "obj", ' + 'caused by missing "endobj" -- trying to recover.');
                contentLength -= objToken[1].length;
                break;
              }
            }
            startPos = endPos;
          }
          var content = buffer.subarray(position, position + contentLength);
          var xrefTagOffset = skipUntil(content, 0, xrefBytes);
          if (xrefTagOffset < contentLength && content[xrefTagOffset + 5] < 64) {
            xrefStms.push(position - stream.start);
            this.xrefstms[position - stream.start] = 1;
          }
          position += contentLength;
        } else if (token.indexOf('trailer') === 0 && (token.length === 7 || /\s/.test(token[7]))) {
          trailers.push(position);
          position += skipUntil(buffer, position, startxrefBytes);
        } else {
          position += token.length + 1;
        }
      }
      var i, ii;
      for (i = 0, ii = xrefStms.length; i < ii; ++i) {
        this.startXRefQueue.push(xrefStms[i]);
        this.readXRef(true);
      }
      var trailerDict = void 0;
      for (i = 0, ii = trailers.length; i < ii; ++i) {
        stream.pos = trailers[i];
        var parser = new _parser.Parser(new _parser.Lexer(stream), true, this, true);
        var obj = parser.getObj();
        if (!(0, _primitives.isCmd)(obj, 'trailer')) {
          continue;
        }
        var dict = parser.getObj();
        if (!(0, _primitives.isDict)(dict)) {
          continue;
        }
        var rootDict = void 0;
        try {
          rootDict = dict.get('Root');
        } catch (ex) {
          if (ex instanceof _util.MissingDataException) {
            throw ex;
          }
          continue;
        }
        if (!(0, _primitives.isDict)(rootDict) || !rootDict.has('Pages')) {
          continue;
        }
        if (dict.has('ID')) {
          return dict;
        }
        trailerDict = dict;
      }
      if (trailerDict) {
        return trailerDict;
      }
      throw new _util.InvalidPDFException('Invalid PDF structure');
    },
    readXRef: function XRef_readXRef(recoveryMode) {
      var stream = this.stream;
      var startXRefParsedCache = Object.create(null);
      try {
        while (this.startXRefQueue.length) {
          var startXRef = this.startXRefQueue[0];
          if (startXRefParsedCache[startXRef]) {
            (0, _util.warn)('readXRef - skipping XRef table since it was already parsed.');
            this.startXRefQueue.shift();
            continue;
          }
          startXRefParsedCache[startXRef] = true;
          stream.pos = startXRef + stream.start;
          var parser = new _parser.Parser(new _parser.Lexer(stream), true, this);
          var obj = parser.getObj();
          var dict;
          if ((0, _primitives.isCmd)(obj, 'xref')) {
            dict = this.processXRefTable(parser);
            if (!this.topDict) {
              this.topDict = dict;
            }
            obj = dict.get('XRefStm');
            if (Number.isInteger(obj)) {
              var pos = obj;
              if (!(pos in this.xrefstms)) {
                this.xrefstms[pos] = 1;
                this.startXRefQueue.push(pos);
              }
            }
          } else if (Number.isInteger(obj)) {
            if (!Number.isInteger(parser.getObj()) || !(0, _primitives.isCmd)(parser.getObj(), 'obj') || !(0, _primitives.isStream)(obj = parser.getObj())) {
              throw new _util.FormatError('Invalid XRef stream');
            }
            dict = this.processXRefStream(obj);
            if (!this.topDict) {
              this.topDict = dict;
            }
            if (!dict) {
              throw new _util.FormatError('Failed to read XRef stream');
            }
          } else {
            throw new _util.FormatError('Invalid XRef stream header');
          }
          obj = dict.get('Prev');
          if (Number.isInteger(obj)) {
            this.startXRefQueue.push(obj);
          } else if ((0, _primitives.isRef)(obj)) {
            this.startXRefQueue.push(obj.num);
          }
          this.startXRefQueue.shift();
        }
        return this.topDict;
      } catch (e) {
        if (e instanceof _util.MissingDataException) {
          throw e;
        }
        (0, _util.info)('(while reading XRef): ' + e);
      }
      if (recoveryMode) {
        return;
      }
      throw new _util.XRefParseException();
    },
    getEntry: function XRef_getEntry(i) {
      var xrefEntry = this.entries[i];
      if (xrefEntry && !xrefEntry.free && xrefEntry.offset) {
        return xrefEntry;
      }
      return null;
    },
    fetchIfRef: function XRef_fetchIfRef(obj, suppressEncryption) {
      if (!(0, _primitives.isRef)(obj)) {
        return obj;
      }
      return this.fetch(obj, suppressEncryption);
    },
    fetch: function XRef_fetch(ref, suppressEncryption) {
      if (!(0, _primitives.isRef)(ref)) {
        throw new Error('ref object is not a reference');
      }
      var num = ref.num;
      if (num in this.cache) {
        var cacheEntry = this.cache[num];
        if (cacheEntry instanceof _primitives.Dict && !cacheEntry.objId) {
          cacheEntry.objId = ref.toString();
        }
        return cacheEntry;
      }
      var xrefEntry = this.getEntry(num);
      if (xrefEntry === null) {
        return this.cache[num] = null;
      }
      if (xrefEntry.uncompressed) {
        xrefEntry = this.fetchUncompressed(ref, xrefEntry, suppressEncryption);
      } else {
        xrefEntry = this.fetchCompressed(xrefEntry, suppressEncryption);
      }
      if ((0, _primitives.isDict)(xrefEntry)) {
        xrefEntry.objId = ref.toString();
      } else if ((0, _primitives.isStream)(xrefEntry)) {
        xrefEntry.dict.objId = ref.toString();
      }
      return xrefEntry;
    },
    fetchUncompressed: function XRef_fetchUncompressed(ref, xrefEntry, suppressEncryption) {
      var gen = ref.gen;
      var num = ref.num;
      if (xrefEntry.gen !== gen) {
        throw new _util.FormatError('inconsistent generation in XRef');
      }
      var stream = this.stream.makeSubStream(xrefEntry.offset + this.stream.start);
      var parser = new _parser.Parser(new _parser.Lexer(stream), true, this);
      var obj1 = parser.getObj();
      var obj2 = parser.getObj();
      var obj3 = parser.getObj();
      if (!Number.isInteger(obj1)) {
        obj1 = parseInt(obj1, 10);
      }
      if (!Number.isInteger(obj2)) {
        obj2 = parseInt(obj2, 10);
      }
      if (obj1 !== num || obj2 !== gen || !(0, _primitives.isCmd)(obj3)) {
        throw new _util.FormatError('bad XRef entry');
      }
      if (obj3.cmd !== 'obj') {
        if (obj3.cmd.indexOf('obj') === 0) {
          num = parseInt(obj3.cmd.substring(3), 10);
          if (!Number.isNaN(num)) {
            return num;
          }
        }
        throw new _util.FormatError('bad XRef entry');
      }
      if (this.encrypt && !suppressEncryption) {
        xrefEntry = parser.getObj(this.encrypt.createCipherTransform(num, gen));
      } else {
        xrefEntry = parser.getObj();
      }
      if (!(0, _primitives.isStream)(xrefEntry)) {
        this.cache[num] = xrefEntry;
      }
      return xrefEntry;
    },
    fetchCompressed: function XRef_fetchCompressed(xrefEntry, suppressEncryption) {
      var tableOffset = xrefEntry.offset;
      var stream = this.fetch(new _primitives.Ref(tableOffset, 0));
      if (!(0, _primitives.isStream)(stream)) {
        throw new _util.FormatError('bad ObjStm stream');
      }
      var first = stream.dict.get('First');
      var n = stream.dict.get('N');
      if (!Number.isInteger(first) || !Number.isInteger(n)) {
        throw new _util.FormatError('invalid first and n parameters for ObjStm stream');
      }
      var parser = new _parser.Parser(new _parser.Lexer(stream), false, this);
      parser.allowStreams = true;
      var i,
          entries = [],
          num,
          nums = [];
      for (i = 0; i < n; ++i) {
        num = parser.getObj();
        if (!Number.isInteger(num)) {
          throw new _util.FormatError('invalid object number in the ObjStm stream: ' + num);
        }
        nums.push(num);
        var offset = parser.getObj();
        if (!Number.isInteger(offset)) {
          throw new _util.FormatError('invalid object offset in the ObjStm stream: ' + offset);
        }
      }
      for (i = 0; i < n; ++i) {
        entries.push(parser.getObj());
        if ((0, _primitives.isCmd)(parser.buf1, 'endobj')) {
          parser.shift();
        }
        num = nums[i];
        var entry = this.entries[num];
        if (entry && entry.offset === tableOffset && entry.gen === i) {
          this.cache[num] = entries[i];
        }
      }
      xrefEntry = entries[xrefEntry.gen];
      if (xrefEntry === undefined) {
        throw new _util.FormatError('bad XRef entry for compressed object');
      }
      return xrefEntry;
    },
    fetchIfRefAsync: function XRef_fetchIfRefAsync(obj, suppressEncryption) {
      if (!(0, _primitives.isRef)(obj)) {
        return Promise.resolve(obj);
      }
      return this.fetchAsync(obj, suppressEncryption);
    },
    fetchAsync: function XRef_fetchAsync(ref, suppressEncryption) {
      var streamManager = this.stream.manager;
      var xref = this;
      return new Promise(function tryFetch(resolve, reject) {
        try {
          resolve(xref.fetch(ref, suppressEncryption));
        } catch (e) {
          if (e instanceof _util.MissingDataException) {
            streamManager.requestRange(e.begin, e.end).then(function () {
              tryFetch(resolve, reject);
            }, reject);
            return;
          }
          reject(e);
        }
      });
    },
    getCatalogObj: function XRef_getCatalogObj() {
      return this.root;
    }
  };
  return XRef;
}();

var NameOrNumberTree = function () {
  function NameOrNumberTree(root, xref, type) {
    _classCallCheck(this, NameOrNumberTree);

    if (this.constructor === NameOrNumberTree) {
      (0, _util.unreachable)('Cannot initialize NameOrNumberTree.');
    }
    this.root = root;
    this.xref = xref;
    this._type = type;
  }

  _createClass(NameOrNumberTree, [{
    key: 'getAll',
    value: function getAll() {
      var dict = Object.create(null);
      if (!this.root) {
        return dict;
      }
      var xref = this.xref;
      var processed = new _primitives.RefSet();
      processed.put(this.root);
      var queue = [this.root];
      while (queue.length > 0) {
        var obj = xref.fetchIfRef(queue.shift());
        if (!(0, _primitives.isDict)(obj)) {
          continue;
        }
        if (obj.has('Kids')) {
          var kids = obj.get('Kids');
          for (var i = 0, ii = kids.length; i < ii; i++) {
            var kid = kids[i];
            if (processed.has(kid)) {
              throw new _util.FormatError('Duplicate entry in "' + this._type + '" tree.');
            }
            queue.push(kid);
            processed.put(kid);
          }
          continue;
        }
        var entries = obj.get(this._type);
        if (Array.isArray(entries)) {
          for (var _i = 0, _ii = entries.length; _i < _ii; _i += 2) {
            dict[xref.fetchIfRef(entries[_i])] = xref.fetchIfRef(entries[_i + 1]);
          }
        }
      }
      return dict;
    }
  }, {
    key: 'get',
    value: function get(key) {
      if (!this.root) {
        return null;
      }
      var xref = this.xref;
      var kidsOrEntries = xref.fetchIfRef(this.root);
      var loopCount = 0;
      var MAX_LEVELS = 10;
      while (kidsOrEntries.has('Kids')) {
        if (++loopCount > MAX_LEVELS) {
          (0, _util.warn)('Search depth limit reached for "' + this._type + '" tree.');
          return null;
        }
        var kids = kidsOrEntries.get('Kids');
        if (!Array.isArray(kids)) {
          return null;
        }
        var l = 0,
            r = kids.length - 1;
        while (l <= r) {
          var m = l + r >> 1;
          var kid = xref.fetchIfRef(kids[m]);
          var limits = kid.get('Limits');
          if (key < xref.fetchIfRef(limits[0])) {
            r = m - 1;
          } else if (key > xref.fetchIfRef(limits[1])) {
            l = m + 1;
          } else {
            kidsOrEntries = xref.fetchIfRef(kids[m]);
            break;
          }
        }
        if (l > r) {
          return null;
        }
      }
      var entries = kidsOrEntries.get(this._type);
      if (Array.isArray(entries)) {
        var _l = 0,
            _r = entries.length - 2;
        while (_l <= _r) {
          var _m = _l + _r & ~1;
          var currentKey = xref.fetchIfRef(entries[_m]);
          if (key < currentKey) {
            _r = _m - 2;
          } else if (key > currentKey) {
            _l = _m + 2;
          } else {
            return xref.fetchIfRef(entries[_m + 1]);
          }
        }
      }
      return null;
    }
  }]);

  return NameOrNumberTree;
}();

var NameTree = function (_NameOrNumberTree) {
  _inherits(NameTree, _NameOrNumberTree);

  function NameTree(root, xref) {
    _classCallCheck(this, NameTree);

    return _possibleConstructorReturn(this, (NameTree.__proto__ || Object.getPrototypeOf(NameTree)).call(this, root, xref, 'Names'));
  }

  return NameTree;
}(NameOrNumberTree);

var NumberTree = function (_NameOrNumberTree2) {
  _inherits(NumberTree, _NameOrNumberTree2);

  function NumberTree(root, xref) {
    _classCallCheck(this, NumberTree);

    return _possibleConstructorReturn(this, (NumberTree.__proto__ || Object.getPrototypeOf(NumberTree)).call(this, root, xref, 'Nums'));
  }

  return NumberTree;
}(NameOrNumberTree);

var FileSpec = function FileSpecClosure() {
  function FileSpec(root, xref) {
    if (!root || !(0, _primitives.isDict)(root)) {
      return;
    }
    this.xref = xref;
    this.root = root;
    if (root.has('FS')) {
      this.fs = root.get('FS');
    }
    this.description = root.has('Desc') ? (0, _util.stringToPDFString)(root.get('Desc')) : '';
    if (root.has('RF')) {
      (0, _util.warn)('Related file specifications are not supported');
    }
    this.contentAvailable = true;
    if (!root.has('EF')) {
      this.contentAvailable = false;
      (0, _util.warn)('Non-embedded file specifications are not supported');
    }
  }
  function pickPlatformItem(dict) {
    if (dict.has('UF')) {
      return dict.get('UF');
    } else if (dict.has('F')) {
      return dict.get('F');
    } else if (dict.has('Unix')) {
      return dict.get('Unix');
    } else if (dict.has('Mac')) {
      return dict.get('Mac');
    } else if (dict.has('DOS')) {
      return dict.get('DOS');
    }
    return null;
  }
  FileSpec.prototype = {
    get filename() {
      if (!this._filename && this.root) {
        var filename = pickPlatformItem(this.root) || 'unnamed';
        this._filename = (0, _util.stringToPDFString)(filename).replace(/\\\\/g, '\\').replace(/\\\//g, '/').replace(/\\/g, '/');
      }
      return this._filename;
    },
    get content() {
      if (!this.contentAvailable) {
        return null;
      }
      if (!this.contentRef && this.root) {
        this.contentRef = pickPlatformItem(this.root.get('EF'));
      }
      var content = null;
      if (this.contentRef) {
        var xref = this.xref;
        var fileObj = xref.fetchIfRef(this.contentRef);
        if (fileObj && (0, _primitives.isStream)(fileObj)) {
          content = fileObj.getBytes();
        } else {
          (0, _util.warn)('Embedded file specification points to non-existing/invalid ' + 'content');
        }
      } else {
        (0, _util.warn)('Embedded file specification does not have a content');
      }
      return content;
    },
    get serializable() {
      return {
        filename: this.filename,
        content: this.content
      };
    }
  };
  return FileSpec;
}();
var ObjectLoader = function () {
  function mayHaveChildren(value) {
    return (0, _primitives.isRef)(value) || (0, _primitives.isDict)(value) || Array.isArray(value) || (0, _primitives.isStream)(value);
  }
  function addChildren(node, nodesToVisit) {
    if ((0, _primitives.isDict)(node) || (0, _primitives.isStream)(node)) {
      var dict = (0, _primitives.isDict)(node) ? node : node.dict;
      var dictKeys = dict.getKeys();
      for (var i = 0, ii = dictKeys.length; i < ii; i++) {
        var rawValue = dict.getRaw(dictKeys[i]);
        if (mayHaveChildren(rawValue)) {
          nodesToVisit.push(rawValue);
        }
      }
    } else if (Array.isArray(node)) {
      for (var _i2 = 0, _ii2 = node.length; _i2 < _ii2; _i2++) {
        var value = node[_i2];
        if (mayHaveChildren(value)) {
          nodesToVisit.push(value);
        }
      }
    }
  }
  function ObjectLoader(dict, keys, xref) {
    this.dict = dict;
    this.keys = keys;
    this.xref = xref;
    this.refSet = null;
    this.capability = null;
  }
  ObjectLoader.prototype = {
    load: function load() {
      this.capability = (0, _util.createPromiseCapability)();
      if (!(this.xref.stream instanceof _chunked_stream.ChunkedStream) || this.xref.stream.getMissingChunks().length === 0) {
        this.capability.resolve();
        return this.capability.promise;
      }
      var keys = this.keys,
          dict = this.dict;

      this.refSet = new _primitives.RefSet();
      var nodesToVisit = [];
      for (var i = 0, ii = keys.length; i < ii; i++) {
        var rawValue = dict.getRaw(keys[i]);
        if (rawValue !== undefined) {
          nodesToVisit.push(rawValue);
        }
      }
      this._walk(nodesToVisit);
      return this.capability.promise;
    },
    _walk: function _walk(nodesToVisit) {
      var _this4 = this;

      var nodesToRevisit = [];
      var pendingRequests = [];
      while (nodesToVisit.length) {
        var currentNode = nodesToVisit.pop();
        if ((0, _primitives.isRef)(currentNode)) {
          if (this.refSet.has(currentNode)) {
            continue;
          }
          try {
            this.refSet.put(currentNode);
            currentNode = this.xref.fetch(currentNode);
          } catch (ex) {
            if (!(ex instanceof _util.MissingDataException)) {
              throw ex;
            }
            nodesToRevisit.push(currentNode);
            pendingRequests.push({
              begin: ex.begin,
              end: ex.end
            });
          }
        }
        if (currentNode && currentNode.getBaseStreams) {
          var baseStreams = currentNode.getBaseStreams();
          var foundMissingData = false;
          for (var i = 0, ii = baseStreams.length; i < ii; i++) {
            var stream = baseStreams[i];
            if (stream.getMissingChunks && stream.getMissingChunks().length) {
              foundMissingData = true;
              pendingRequests.push({
                begin: stream.start,
                end: stream.end
              });
            }
          }
          if (foundMissingData) {
            nodesToRevisit.push(currentNode);
          }
        }
        addChildren(currentNode, nodesToVisit);
      }
      if (pendingRequests.length) {
        this.xref.stream.manager.requestRanges(pendingRequests).then(function () {
          for (var _i3 = 0, _ii3 = nodesToRevisit.length; _i3 < _ii3; _i3++) {
            var node = nodesToRevisit[_i3];
            if ((0, _primitives.isRef)(node)) {
              _this4.refSet.remove(node);
            }
          }
          _this4._walk(nodesToRevisit);
        }, this.capability.reject);
        return;
      }
      this.refSet = null;
      this.capability.resolve();
    }
  };
  return ObjectLoader;
}();
exports.Catalog = Catalog;
exports.ObjectLoader = ObjectLoader;
exports.XRef = XRef;
exports.FileSpec = FileSpec;

/***/ }),
/* 123 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var EOF = {};
var Name = function NameClosure() {
  function Name(name) {
    this.name = name;
  }
  Name.prototype = {};
  var nameCache = Object.create(null);
  Name.get = function Name_get(name) {
    var nameValue = nameCache[name];
    return nameValue ? nameValue : nameCache[name] = new Name(name);
  };
  return Name;
}();
var Cmd = function CmdClosure() {
  function Cmd(cmd) {
    this.cmd = cmd;
  }
  Cmd.prototype = {};
  var cmdCache = Object.create(null);
  Cmd.get = function Cmd_get(cmd) {
    var cmdValue = cmdCache[cmd];
    return cmdValue ? cmdValue : cmdCache[cmd] = new Cmd(cmd);
  };
  return Cmd;
}();
var Dict = function DictClosure() {
  var nonSerializable = function nonSerializableClosure() {
    return nonSerializable;
  };
  function Dict(xref) {
    this._map = Object.create(null);
    this.xref = xref;
    this.objId = null;
    this.suppressEncryption = false;
    this.__nonSerializable__ = nonSerializable;
  }
  Dict.prototype = {
    assignXref: function Dict_assignXref(newXref) {
      this.xref = newXref;
    },
    get: function Dict_get(key1, key2, key3) {
      var value;
      var xref = this.xref,
          suppressEncryption = this.suppressEncryption;
      if (typeof (value = this._map[key1]) !== 'undefined' || key1 in this._map || typeof key2 === 'undefined') {
        return xref ? xref.fetchIfRef(value, suppressEncryption) : value;
      }
      if (typeof (value = this._map[key2]) !== 'undefined' || key2 in this._map || typeof key3 === 'undefined') {
        return xref ? xref.fetchIfRef(value, suppressEncryption) : value;
      }
      value = this._map[key3] || null;
      return xref ? xref.fetchIfRef(value, suppressEncryption) : value;
    },
    getAsync: function Dict_getAsync(key1, key2, key3) {
      var value;
      var xref = this.xref,
          suppressEncryption = this.suppressEncryption;
      if (typeof (value = this._map[key1]) !== 'undefined' || key1 in this._map || typeof key2 === 'undefined') {
        if (xref) {
          return xref.fetchIfRefAsync(value, suppressEncryption);
        }
        return Promise.resolve(value);
      }
      if (typeof (value = this._map[key2]) !== 'undefined' || key2 in this._map || typeof key3 === 'undefined') {
        if (xref) {
          return xref.fetchIfRefAsync(value, suppressEncryption);
        }
        return Promise.resolve(value);
      }
      value = this._map[key3] || null;
      if (xref) {
        return xref.fetchIfRefAsync(value, suppressEncryption);
      }
      return Promise.resolve(value);
    },
    getArray: function Dict_getArray(key1, key2, key3) {
      var value = this.get(key1, key2, key3);
      var xref = this.xref,
          suppressEncryption = this.suppressEncryption;
      if (!Array.isArray(value) || !xref) {
        return value;
      }
      value = value.slice();
      for (var i = 0, ii = value.length; i < ii; i++) {
        if (!isRef(value[i])) {
          continue;
        }
        value[i] = xref.fetch(value[i], suppressEncryption);
      }
      return value;
    },
    getRaw: function Dict_getRaw(key) {
      return this._map[key];
    },
    getKeys: function Dict_getKeys() {
      return Object.keys(this._map);
    },
    set: function Dict_set(key, value) {
      this._map[key] = value;
    },
    has: function Dict_has(key) {
      return key in this._map;
    },
    forEach: function Dict_forEach(callback) {
      for (var key in this._map) {
        callback(key, this.get(key));
      }
    }
  };
  Dict.empty = new Dict(null);
  Dict.merge = function (xref, dictArray) {
    var mergedDict = new Dict(xref);
    for (var i = 0, ii = dictArray.length; i < ii; i++) {
      var dict = dictArray[i];
      if (!isDict(dict)) {
        continue;
      }
      for (var keyName in dict._map) {
        if (mergedDict._map[keyName] !== undefined) {
          continue;
        }
        mergedDict._map[keyName] = dict._map[keyName];
      }
    }
    return mergedDict;
  };
  return Dict;
}();
var Ref = function RefClosure() {
  function Ref(num, gen) {
    this.num = num;
    this.gen = gen;
  }
  Ref.prototype = {
    toString: function Ref_toString() {
      var str = this.num + 'R';
      if (this.gen !== 0) {
        str += this.gen;
      }
      return str;
    }
  };
  return Ref;
}();
var RefSet = function RefSetClosure() {
  function RefSet() {
    this.dict = Object.create(null);
  }
  RefSet.prototype = {
    has: function RefSet_has(ref) {
      return ref.toString() in this.dict;
    },
    put: function RefSet_put(ref) {
      this.dict[ref.toString()] = true;
    },
    remove: function RefSet_remove(ref) {
      delete this.dict[ref.toString()];
    }
  };
  return RefSet;
}();
var RefSetCache = function RefSetCacheClosure() {
  function RefSetCache() {
    this.dict = Object.create(null);
  }
  RefSetCache.prototype = {
    get: function RefSetCache_get(ref) {
      return this.dict[ref.toString()];
    },
    has: function RefSetCache_has(ref) {
      return ref.toString() in this.dict;
    },
    put: function RefSetCache_put(ref, obj) {
      this.dict[ref.toString()] = obj;
    },
    putAlias: function RefSetCache_putAlias(ref, aliasRef) {
      this.dict[ref.toString()] = this.get(aliasRef);
    },
    forEach: function RefSetCache_forEach(fn, thisArg) {
      for (var i in this.dict) {
        fn.call(thisArg, this.dict[i]);
      }
    },
    clear: function RefSetCache_clear() {
      this.dict = Object.create(null);
    }
  };
  return RefSetCache;
}();
function isEOF(v) {
  return v === EOF;
}
function isName(v, name) {
  return v instanceof Name && (name === undefined || v.name === name);
}
function isCmd(v, cmd) {
  return v instanceof Cmd && (cmd === undefined || v.cmd === cmd);
}
function isDict(v, type) {
  return v instanceof Dict && (type === undefined || isName(v.get('Type'), type));
}
function isRef(v) {
  return v instanceof Ref;
}
function isRefsEqual(v1, v2) {
  return v1.num === v2.num && v1.gen === v2.gen;
}
function isStream(v) {
  return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null && v.getBytes !== undefined;
}
exports.EOF = EOF;
exports.Cmd = Cmd;
exports.Dict = Dict;
exports.Name = Name;
exports.Ref = Ref;
exports.RefSet = RefSet;
exports.RefSetCache = RefSetCache;
exports.isEOF = isEOF;
exports.isCmd = isCmd;
exports.isDict = isDict;
exports.isName = isName;
exports.isRef = isRef;
exports.isRefsEqual = isRefsEqual;
exports.isStream = isStream;

/***/ }),
/* 124 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = exports.Linearization = exports.Lexer = undefined;

var _stream = __w_pdfjs_require__(125);

var _util = __w_pdfjs_require__(2);

var _primitives = __w_pdfjs_require__(123);

var _ccitt_stream = __w_pdfjs_require__(126);

var _jbig2_stream = __w_pdfjs_require__(128);

var _jpeg_stream = __w_pdfjs_require__(131);

var _jpx_stream = __w_pdfjs_require__(133);

var MAX_LENGTH_TO_CACHE = 1000;
var MAX_ADLER32_LENGTH = 5552;
function computeAdler32(bytes) {
  var bytesLength = bytes.length;
  var a = 1,
      b = 0;
  for (var i = 0; i < bytesLength; ++i) {
    a += bytes[i] & 0xFF;
    b += a;
  }
  return b % 65521 << 16 | a % 65521;
}
var Parser = function ParserClosure() {
  function Parser(lexer, allowStreams, xref, recoveryMode) {
    this.lexer = lexer;
    this.allowStreams = allowStreams;
    this.xref = xref;
    this.recoveryMode = recoveryMode || false;
    this.imageCache = Object.create(null);
    this.refill();
  }
  Parser.prototype = {
    refill: function Parser_refill() {
      this.buf1 = this.lexer.getObj();
      this.buf2 = this.lexer.getObj();
    },
    shift: function Parser_shift() {
      if ((0, _primitives.isCmd)(this.buf2, 'ID')) {
        this.buf1 = this.buf2;
        this.buf2 = null;
      } else {
        this.buf1 = this.buf2;
        this.buf2 = this.lexer.getObj();
      }
    },
    tryShift: function Parser_tryShift() {
      try {
        this.shift();
        return true;
      } catch (e) {
        if (e instanceof _util.MissingDataException) {
          throw e;
        }
        return false;
      }
    },
    getObj: function Parser_getObj(cipherTransform) {
      var buf1 = this.buf1;
      this.shift();
      if (buf1 instanceof _primitives.Cmd) {
        switch (buf1.cmd) {
          case 'BI':
            return this.makeInlineImage(cipherTransform);
          case '[':
            var array = [];
            while (!(0, _primitives.isCmd)(this.buf1, ']') && !(0, _primitives.isEOF)(this.buf1)) {
              array.push(this.getObj(cipherTransform));
            }
            if ((0, _primitives.isEOF)(this.buf1)) {
              if (!this.recoveryMode) {
                throw new _util.FormatError('End of file inside array');
              }
              return array;
            }
            this.shift();
            return array;
          case '<<':
            var dict = new _primitives.Dict(this.xref);
            while (!(0, _primitives.isCmd)(this.buf1, '>>') && !(0, _primitives.isEOF)(this.buf1)) {
              if (!(0, _primitives.isName)(this.buf1)) {
                (0, _util.info)('Malformed dictionary: key must be a name object');
                this.shift();
                continue;
              }
              var key = this.buf1.name;
              this.shift();
              if ((0, _primitives.isEOF)(this.buf1)) {
                break;
              }
              dict.set(key, this.getObj(cipherTransform));
            }
            if ((0, _primitives.isEOF)(this.buf1)) {
              if (!this.recoveryMode) {
                throw new _util.FormatError('End of file inside dictionary');
              }
              return dict;
            }
            if ((0, _primitives.isCmd)(this.buf2, 'stream')) {
              return this.allowStreams ? this.makeStream(dict, cipherTransform) : dict;
            }
            this.shift();
            return dict;
          default:
            return buf1;
        }
      }
      if (Number.isInteger(buf1)) {
        var num = buf1;
        if (Number.isInteger(this.buf1) && (0, _primitives.isCmd)(this.buf2, 'R')) {
          var ref = new _primitives.Ref(num, this.buf1);
          this.shift();
          this.shift();
          return ref;
        }
        return num;
      }
      if ((0, _util.isString)(buf1)) {
        var str = buf1;
        if (cipherTransform) {
          str = cipherTransform.decryptString(str);
        }
        return str;
      }
      return buf1;
    },
    findDefaultInlineStreamEnd: function findDefaultInlineStreamEnd(stream) {
      var E = 0x45,
          I = 0x49,
          SPACE = 0x20,
          LF = 0xA,
          CR = 0xD;
      var n = 10,
          NUL = 0x0;
      var startPos = stream.pos,
          state = 0,
          ch = void 0,
          maybeEIPos = void 0;
      while ((ch = stream.getByte()) !== -1) {
        if (state === 0) {
          state = ch === E ? 1 : 0;
        } else if (state === 1) {
          state = ch === I ? 2 : 0;
        } else {
          (0, _util.assert)(state === 2);
          if (ch === SPACE || ch === LF || ch === CR) {
            maybeEIPos = stream.pos;
            var followingBytes = stream.peekBytes(n);
            for (var i = 0, ii = followingBytes.length; i < ii; i++) {
              ch = followingBytes[i];
              if (ch === NUL && followingBytes[i + 1] !== NUL) {
                continue;
              }
              if (ch !== LF && ch !== CR && (ch < SPACE || ch > 0x7F)) {
                state = 0;
                break;
              }
            }
            if (state === 2) {
              break;
            }
          } else {
            state = 0;
          }
        }
      }
      if (ch === -1) {
        (0, _util.warn)('findDefaultInlineStreamEnd: ' + 'Reached the end of the stream without finding a valid EI marker');
        if (maybeEIPos) {
          (0, _util.warn)('... trying to recover by using the last "EI" occurrence.');
          stream.skip(-(stream.pos - maybeEIPos));
        }
      }
      return stream.pos - 4 - startPos;
    },

    findDCTDecodeInlineStreamEnd: function Parser_findDCTDecodeInlineStreamEnd(stream) {
      var startPos = stream.pos,
          foundEOI = false,
          b,
          markerLength,
          length;
      while ((b = stream.getByte()) !== -1) {
        if (b !== 0xFF) {
          continue;
        }
        switch (stream.getByte()) {
          case 0x00:
            break;
          case 0xFF:
            stream.skip(-1);
            break;
          case 0xD9:
            foundEOI = true;
            break;
          case 0xC0:
          case 0xC1:
          case 0xC2:
          case 0xC3:
          case 0xC5:
          case 0xC6:
          case 0xC7:
          case 0xC9:
          case 0xCA:
          case 0xCB:
          case 0xCD:
          case 0xCE:
          case 0xCF:
          case 0xC4:
          case 0xCC:
          case 0xDA:
          case 0xDB:
          case 0xDC:
          case 0xDD:
          case 0xDE:
          case 0xDF:
          case 0xE0:
          case 0xE1:
          case 0xE2:
          case 0xE3:
          case 0xE4:
          case 0xE5:
          case 0xE6:
          case 0xE7:
          case 0xE8:
          case 0xE9:
          case 0xEA:
          case 0xEB:
          case 0xEC:
          case 0xED:
          case 0xEE:
          case 0xEF:
          case 0xFE:
            markerLength = stream.getUint16();
            if (markerLength > 2) {
              stream.skip(markerLength - 2);
            } else {
              stream.skip(-2);
            }
            break;
        }
        if (foundEOI) {
          break;
        }
      }
      length = stream.pos - startPos;
      if (b === -1) {
        (0, _util.warn)('Inline DCTDecode image stream: ' + 'EOI marker not found, searching for /EI/ instead.');
        stream.skip(-length);
        return this.findDefaultInlineStreamEnd(stream);
      }
      this.inlineStreamSkipEI(stream);
      return length;
    },
    findASCII85DecodeInlineStreamEnd: function Parser_findASCII85DecodeInlineStreamEnd(stream) {
      var TILDE = 0x7E,
          GT = 0x3E;
      var startPos = stream.pos,
          ch,
          length;
      while ((ch = stream.getByte()) !== -1) {
        if (ch === TILDE && stream.peekByte() === GT) {
          stream.skip();
          break;
        }
      }
      length = stream.pos - startPos;
      if (ch === -1) {
        (0, _util.warn)('Inline ASCII85Decode image stream: ' + 'EOD marker not found, searching for /EI/ instead.');
        stream.skip(-length);
        return this.findDefaultInlineStreamEnd(stream);
      }
      this.inlineStreamSkipEI(stream);
      return length;
    },
    findASCIIHexDecodeInlineStreamEnd: function Parser_findASCIIHexDecodeInlineStreamEnd(stream) {
      var GT = 0x3E;
      var startPos = stream.pos,
          ch,
          length;
      while ((ch = stream.getByte()) !== -1) {
        if (ch === GT) {
          break;
        }
      }
      length = stream.pos - startPos;
      if (ch === -1) {
        (0, _util.warn)('Inline ASCIIHexDecode image stream: ' + 'EOD marker not found, searching for /EI/ instead.');
        stream.skip(-length);
        return this.findDefaultInlineStreamEnd(stream);
      }
      this.inlineStreamSkipEI(stream);
      return length;
    },
    inlineStreamSkipEI: function Parser_inlineStreamSkipEI(stream) {
      var E = 0x45,
          I = 0x49;
      var state = 0,
          ch;
      while ((ch = stream.getByte()) !== -1) {
        if (state === 0) {
          state = ch === E ? 1 : 0;
        } else if (state === 1) {
          state = ch === I ? 2 : 0;
        } else if (state === 2) {
          break;
        }
      }
    },
    makeInlineImage: function Parser_makeInlineImage(cipherTransform) {
      var lexer = this.lexer;
      var stream = lexer.stream;
      var dict = new _primitives.Dict(this.xref),
          dictLength = void 0;
      while (!(0, _primitives.isCmd)(this.buf1, 'ID') && !(0, _primitives.isEOF)(this.buf1)) {
        if (!(0, _primitives.isName)(this.buf1)) {
          throw new _util.FormatError('Dictionary key must be a name object');
        }
        var key = this.buf1.name;
        this.shift();
        if ((0, _primitives.isEOF)(this.buf1)) {
          break;
        }
        dict.set(key, this.getObj(cipherTransform));
      }
      if (lexer.beginInlineImagePos !== -1) {
        dictLength = stream.pos - lexer.beginInlineImagePos;
      }
      var filter = dict.get('Filter', 'F'),
          filterName;
      if ((0, _primitives.isName)(filter)) {
        filterName = filter.name;
      } else if (Array.isArray(filter)) {
        var filterZero = this.xref.fetchIfRef(filter[0]);
        if ((0, _primitives.isName)(filterZero)) {
          filterName = filterZero.name;
        }
      }
      var startPos = stream.pos,
          length = void 0;
      if (filterName === 'DCTDecode' || filterName === 'DCT') {
        length = this.findDCTDecodeInlineStreamEnd(stream);
      } else if (filterName === 'ASCII85Decode' || filterName === 'A85') {
        length = this.findASCII85DecodeInlineStreamEnd(stream);
      } else if (filterName === 'ASCIIHexDecode' || filterName === 'AHx') {
        length = this.findASCIIHexDecodeInlineStreamEnd(stream);
      } else {
        length = this.findDefaultInlineStreamEnd(stream);
      }
      var imageStream = stream.makeSubStream(startPos, length, dict);
      var cacheKey = void 0;
      if (length < MAX_LENGTH_TO_CACHE && dictLength < MAX_ADLER32_LENGTH) {
        var imageBytes = imageStream.getBytes();
        imageStream.reset();
        var initialStreamPos = stream.pos;
        stream.pos = lexer.beginInlineImagePos;
        var dictBytes = stream.getBytes(dictLength);
        stream.pos = initialStreamPos;
        cacheKey = computeAdler32(imageBytes) + '_' + computeAdler32(dictBytes);
        var cacheEntry = this.imageCache[cacheKey];
        if (cacheEntry !== undefined) {
          this.buf2 = _primitives.Cmd.get('EI');
          this.shift();
          cacheEntry.reset();
          return cacheEntry;
        }
      }
      if (cipherTransform) {
        imageStream = cipherTransform.createStream(imageStream, length);
      }
      imageStream = this.filter(imageStream, dict, length);
      imageStream.dict = dict;
      if (cacheKey !== undefined) {
        imageStream.cacheKey = 'inline_' + length + '_' + cacheKey;
        this.imageCache[cacheKey] = imageStream;
      }
      this.buf2 = _primitives.Cmd.get('EI');
      this.shift();
      return imageStream;
    },
    makeStream: function Parser_makeStream(dict, cipherTransform) {
      var lexer = this.lexer;
      var stream = lexer.stream;
      lexer.skipToNextLine();
      var pos = stream.pos - 1;
      var length = dict.get('Length');
      if (!Number.isInteger(length)) {
        (0, _util.info)('Bad ' + length + ' attribute in stream');
        length = 0;
      }
      stream.pos = pos + length;
      lexer.nextChar();
      if (this.tryShift() && (0, _primitives.isCmd)(this.buf2, 'endstream')) {
        this.shift();
      } else {
        stream.pos = pos;
        var SCAN_BLOCK_SIZE = 2048;
        var ENDSTREAM_SIGNATURE_LENGTH = 9;
        var ENDSTREAM_SIGNATURE = [0x65, 0x6E, 0x64, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6D];
        var skipped = 0,
            found = false,
            i,
            j;
        while (stream.pos < stream.end) {
          var scanBytes = stream.peekBytes(SCAN_BLOCK_SIZE);
          var scanLength = scanBytes.length - ENDSTREAM_SIGNATURE_LENGTH;
          if (scanLength <= 0) {
            break;
          }
          found = false;
          i = 0;
          while (i < scanLength) {
            j = 0;
            while (j < ENDSTREAM_SIGNATURE_LENGTH && scanBytes[i + j] === ENDSTREAM_SIGNATURE[j]) {
              j++;
            }
            if (j >= ENDSTREAM_SIGNATURE_LENGTH) {
              found = true;
              break;
            }
            i++;
          }
          if (found) {
            skipped += i;
            stream.pos += i;
            break;
          }
          skipped += scanLength;
          stream.pos += scanLength;
        }
        if (!found) {
          throw new _util.FormatError('Missing endstream');
        }
        length = skipped;
        lexer.nextChar();
        this.shift();
        this.shift();
      }
      this.shift();
      stream = stream.makeSubStream(pos, length, dict);
      if (cipherTransform) {
        stream = cipherTransform.createStream(stream, length);
      }
      stream = this.filter(stream, dict, length);
      stream.dict = dict;
      return stream;
    },
    filter: function Parser_filter(stream, dict, length) {
      var filter = dict.get('Filter', 'F');
      var params = dict.get('DecodeParms', 'DP');
      if ((0, _primitives.isName)(filter)) {
        if (Array.isArray(params)) {
          (0, _util.warn)('/DecodeParms should not contain an Array, ' + 'when /Filter contains a Name.');
        }
        return this.makeFilter(stream, filter.name, length, params);
      }
      var maybeLength = length;
      if (Array.isArray(filter)) {
        var filterArray = filter;
        var paramsArray = params;
        for (var i = 0, ii = filterArray.length; i < ii; ++i) {
          filter = this.xref.fetchIfRef(filterArray[i]);
          if (!(0, _primitives.isName)(filter)) {
            throw new _util.FormatError('Bad filter name: ' + filter);
          }
          params = null;
          if (Array.isArray(paramsArray) && i in paramsArray) {
            params = this.xref.fetchIfRef(paramsArray[i]);
          }
          stream = this.makeFilter(stream, filter.name, maybeLength, params);
          maybeLength = null;
        }
      }
      return stream;
    },
    makeFilter: function Parser_makeFilter(stream, name, maybeLength, params) {
      if (maybeLength === 0) {
        (0, _util.warn)('Empty "' + name + '" stream.');
        return new _stream.NullStream();
      }
      try {
        var xrefStreamStats = this.xref.stats.streamTypes;
        if (name === 'FlateDecode' || name === 'Fl') {
          xrefStreamStats[_util.StreamType.FLATE] = true;
          if (params) {
            return new _stream.PredictorStream(new _stream.FlateStream(stream, maybeLength), maybeLength, params);
          }
          return new _stream.FlateStream(stream, maybeLength);
        }
        if (name === 'LZWDecode' || name === 'LZW') {
          xrefStreamStats[_util.StreamType.LZW] = true;
          var earlyChange = 1;
          if (params) {
            if (params.has('EarlyChange')) {
              earlyChange = params.get('EarlyChange');
            }
            return new _stream.PredictorStream(new _stream.LZWStream(stream, maybeLength, earlyChange), maybeLength, params);
          }
          return new _stream.LZWStream(stream, maybeLength, earlyChange);
        }
        if (name === 'DCTDecode' || name === 'DCT') {
          xrefStreamStats[_util.StreamType.DCT] = true;
          return new _jpeg_stream.JpegStream(stream, maybeLength, stream.dict, params);
        }
        if (name === 'JPXDecode' || name === 'JPX') {
          xrefStreamStats[_util.StreamType.JPX] = true;
          return new _jpx_stream.JpxStream(stream, maybeLength, stream.dict, params);
        }
        if (name === 'ASCII85Decode' || name === 'A85') {
          xrefStreamStats[_util.StreamType.A85] = true;
          return new _stream.Ascii85Stream(stream, maybeLength);
        }
        if (name === 'ASCIIHexDecode' || name === 'AHx') {
          xrefStreamStats[_util.StreamType.AHX] = true;
          return new _stream.AsciiHexStream(stream, maybeLength);
        }
        if (name === 'CCITTFaxDecode' || name === 'CCF') {
          xrefStreamStats[_util.StreamType.CCF] = true;
          return new _ccitt_stream.CCITTFaxStream(stream, maybeLength, params);
        }
        if (name === 'RunLengthDecode' || name === 'RL') {
          xrefStreamStats[_util.StreamType.RL] = true;
          return new _stream.RunLengthStream(stream, maybeLength);
        }
        if (name === 'JBIG2Decode') {
          xrefStreamStats[_util.StreamType.JBIG] = true;
          return new _jbig2_stream.Jbig2Stream(stream, maybeLength, stream.dict, params);
        }
        (0, _util.warn)('filter "' + name + '" not supported yet');
        return stream;
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('Invalid stream: \"' + ex + '\"');
        return new _stream.NullStream();
      }
    }
  };
  return Parser;
}();
var Lexer = function LexerClosure() {
  function Lexer(stream, knownCommands) {
    this.stream = stream;
    this.nextChar();
    this.strBuf = [];
    this.knownCommands = knownCommands;
    this.beginInlineImagePos = -1;
  }
  var specialChars = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function toHexDigit(ch) {
    if (ch >= 0x30 && ch <= 0x39) {
      return ch & 0x0F;
    }
    if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
      return (ch & 0x0F) + 9;
    }
    return -1;
  }
  Lexer.prototype = {
    nextChar: function Lexer_nextChar() {
      return this.currentChar = this.stream.getByte();
    },
    peekChar: function Lexer_peekChar() {
      return this.stream.peekByte();
    },
    getNumber: function Lexer_getNumber() {
      var ch = this.currentChar;
      var eNotation = false;
      var divideBy = 0;
      var sign = 0;
      if (ch === 0x2D) {
        sign = -1;
        ch = this.nextChar();
        if (ch === 0x2D) {
          ch = this.nextChar();
        }
      } else if (ch === 0x2B) {
        sign = 1;
        ch = this.nextChar();
      }
      if (ch === 0x0A || ch === 0x0D) {
        do {
          ch = this.nextChar();
        } while (ch === 0x0A || ch === 0x0D);
      }
      if (ch === 0x2E) {
        divideBy = 10;
        ch = this.nextChar();
      }
      if (ch < 0x30 || ch > 0x39) {
        if (divideBy === 10 && sign === 0 && ((0, _util.isSpace)(ch) || ch === -1)) {
          (0, _util.warn)('Lexer.getNumber - treating a single decimal point as zero.');
          return 0;
        }
        throw new _util.FormatError('Invalid number: ' + String.fromCharCode(ch) + ' (charCode ' + ch + ')');
      }
      sign = sign || 1;
      var baseValue = ch - 0x30;
      var powerValue = 0;
      var powerValueSign = 1;
      while ((ch = this.nextChar()) >= 0) {
        if (0x30 <= ch && ch <= 0x39) {
          var currentDigit = ch - 0x30;
          if (eNotation) {
            powerValue = powerValue * 10 + currentDigit;
          } else {
            if (divideBy !== 0) {
              divideBy *= 10;
            }
            baseValue = baseValue * 10 + currentDigit;
          }
        } else if (ch === 0x2E) {
          if (divideBy === 0) {
            divideBy = 1;
          } else {
            break;
          }
        } else if (ch === 0x2D) {
          (0, _util.warn)('Badly formatted number');
        } else if (ch === 0x45 || ch === 0x65) {
          ch = this.peekChar();
          if (ch === 0x2B || ch === 0x2D) {
            powerValueSign = ch === 0x2D ? -1 : 1;
            this.nextChar();
          } else if (ch < 0x30 || ch > 0x39) {
            break;
          }
          eNotation = true;
        } else {
          break;
        }
      }
      if (divideBy !== 0) {
        baseValue /= divideBy;
      }
      if (eNotation) {
        baseValue *= Math.pow(10, powerValueSign * powerValue);
      }
      return sign * baseValue;
    },
    getString: function Lexer_getString() {
      var numParen = 1;
      var done = false;
      var strBuf = this.strBuf;
      strBuf.length = 0;
      var ch = this.nextChar();
      while (true) {
        var charBuffered = false;
        switch (ch | 0) {
          case -1:
            (0, _util.warn)('Unterminated string');
            done = true;
            break;
          case 0x28:
            ++numParen;
            strBuf.push('(');
            break;
          case 0x29:
            if (--numParen === 0) {
              this.nextChar();
              done = true;
            } else {
              strBuf.push(')');
            }
            break;
          case 0x5C:
            ch = this.nextChar();
            switch (ch) {
              case -1:
                (0, _util.warn)('Unterminated string');
                done = true;
                break;
              case 0x6E:
                strBuf.push('\n');
                break;
              case 0x72:
                strBuf.push('\r');
                break;
              case 0x74:
                strBuf.push('\t');
                break;
              case 0x62:
                strBuf.push('\b');
                break;
              case 0x66:
                strBuf.push('\f');
                break;
              case 0x5C:
              case 0x28:
              case 0x29:
                strBuf.push(String.fromCharCode(ch));
                break;
              case 0x30:
              case 0x31:
              case 0x32:
              case 0x33:
              case 0x34:
              case 0x35:
              case 0x36:
              case 0x37:
                var x = ch & 0x0F;
                ch = this.nextChar();
                charBuffered = true;
                if (ch >= 0x30 && ch <= 0x37) {
                  x = (x << 3) + (ch & 0x0F);
                  ch = this.nextChar();
                  if (ch >= 0x30 && ch <= 0x37) {
                    charBuffered = false;
                    x = (x << 3) + (ch & 0x0F);
                  }
                }
                strBuf.push(String.fromCharCode(x));
                break;
              case 0x0D:
                if (this.peekChar() === 0x0A) {
                  this.nextChar();
                }
                break;
              case 0x0A:
                break;
              default:
                strBuf.push(String.fromCharCode(ch));
                break;
            }
            break;
          default:
            strBuf.push(String.fromCharCode(ch));
            break;
        }
        if (done) {
          break;
        }
        if (!charBuffered) {
          ch = this.nextChar();
        }
      }
      return strBuf.join('');
    },
    getName: function Lexer_getName() {
      var ch, previousCh;
      var strBuf = this.strBuf;
      strBuf.length = 0;
      while ((ch = this.nextChar()) >= 0 && !specialChars[ch]) {
        if (ch === 0x23) {
          ch = this.nextChar();
          if (specialChars[ch]) {
            (0, _util.warn)('Lexer_getName: ' + 'NUMBER SIGN (#) should be followed by a hexadecimal number.');
            strBuf.push('#');
            break;
          }
          var x = toHexDigit(ch);
          if (x !== -1) {
            previousCh = ch;
            ch = this.nextChar();
            var x2 = toHexDigit(ch);
            if (x2 === -1) {
              (0, _util.warn)('Lexer_getName: Illegal digit (' + String.fromCharCode(ch) + ') in hexadecimal number.');
              strBuf.push('#', String.fromCharCode(previousCh));
              if (specialChars[ch]) {
                break;
              }
              strBuf.push(String.fromCharCode(ch));
              continue;
            }
            strBuf.push(String.fromCharCode(x << 4 | x2));
          } else {
            strBuf.push('#', String.fromCharCode(ch));
          }
        } else {
          strBuf.push(String.fromCharCode(ch));
        }
      }
      if (strBuf.length > 127) {
        (0, _util.warn)('name token is longer than allowed by the spec: ' + strBuf.length);
      }
      return _primitives.Name.get(strBuf.join(''));
    },
    getHexString: function Lexer_getHexString() {
      var strBuf = this.strBuf;
      strBuf.length = 0;
      var ch = this.currentChar;
      var isFirstHex = true;
      var firstDigit;
      var secondDigit;
      while (true) {
        if (ch < 0) {
          (0, _util.warn)('Unterminated hex string');
          break;
        } else if (ch === 0x3E) {
          this.nextChar();
          break;
        } else if (specialChars[ch] === 1) {
          ch = this.nextChar();
          continue;
        } else {
          if (isFirstHex) {
            firstDigit = toHexDigit(ch);
            if (firstDigit === -1) {
              (0, _util.warn)('Ignoring invalid character "' + ch + '" in hex string');
              ch = this.nextChar();
              continue;
            }
          } else {
            secondDigit = toHexDigit(ch);
            if (secondDigit === -1) {
              (0, _util.warn)('Ignoring invalid character "' + ch + '" in hex string');
              ch = this.nextChar();
              continue;
            }
            strBuf.push(String.fromCharCode(firstDigit << 4 | secondDigit));
          }
          isFirstHex = !isFirstHex;
          ch = this.nextChar();
        }
      }
      return strBuf.join('');
    },
    getObj: function Lexer_getObj() {
      var comment = false;
      var ch = this.currentChar;
      while (true) {
        if (ch < 0) {
          return _primitives.EOF;
        }
        if (comment) {
          if (ch === 0x0A || ch === 0x0D) {
            comment = false;
          }
        } else if (ch === 0x25) {
          comment = true;
        } else if (specialChars[ch] !== 1) {
          break;
        }
        ch = this.nextChar();
      }
      switch (ch | 0) {
        case 0x30:
        case 0x31:
        case 0x32:
        case 0x33:
        case 0x34:
        case 0x35:
        case 0x36:
        case 0x37:
        case 0x38:
        case 0x39:
        case 0x2B:
        case 0x2D:
        case 0x2E:
          return this.getNumber();
        case 0x28:
          return this.getString();
        case 0x2F:
          return this.getName();
        case 0x5B:
          this.nextChar();
          return _primitives.Cmd.get('[');
        case 0x5D:
          this.nextChar();
          return _primitives.Cmd.get(']');
        case 0x3C:
          ch = this.nextChar();
          if (ch === 0x3C) {
            this.nextChar();
            return _primitives.Cmd.get('<<');
          }
          return this.getHexString();
        case 0x3E:
          ch = this.nextChar();
          if (ch === 0x3E) {
            this.nextChar();
            return _primitives.Cmd.get('>>');
          }
          return _primitives.Cmd.get('>');
        case 0x7B:
          this.nextChar();
          return _primitives.Cmd.get('{');
        case 0x7D:
          this.nextChar();
          return _primitives.Cmd.get('}');
        case 0x29:
          this.nextChar();
          throw new _util.FormatError('Illegal character: ' + ch);
      }
      var str = String.fromCharCode(ch);
      var knownCommands = this.knownCommands;
      var knownCommandFound = knownCommands && knownCommands[str] !== undefined;
      while ((ch = this.nextChar()) >= 0 && !specialChars[ch]) {
        var possibleCommand = str + String.fromCharCode(ch);
        if (knownCommandFound && knownCommands[possibleCommand] === undefined) {
          break;
        }
        if (str.length === 128) {
          throw new _util.FormatError('Command token too long: ' + str.length);
        }
        str = possibleCommand;
        knownCommandFound = knownCommands && knownCommands[str] !== undefined;
      }
      if (str === 'true') {
        return true;
      }
      if (str === 'false') {
        return false;
      }
      if (str === 'null') {
        return null;
      }
      if (str === 'BI') {
        this.beginInlineImagePos = this.stream.pos;
      }
      return _primitives.Cmd.get(str);
    },
    skipToNextLine: function Lexer_skipToNextLine() {
      var ch = this.currentChar;
      while (ch >= 0) {
        if (ch === 0x0D) {
          ch = this.nextChar();
          if (ch === 0x0A) {
            this.nextChar();
          }
          break;
        } else if (ch === 0x0A) {
          this.nextChar();
          break;
        }
        ch = this.nextChar();
      }
    }
  };
  return Lexer;
}();
var Linearization = {
  create: function LinearizationCreate(stream) {
    function getInt(name, allowZeroValue) {
      var obj = linDict.get(name);
      if (Number.isInteger(obj) && (allowZeroValue ? obj >= 0 : obj > 0)) {
        return obj;
      }
      throw new Error('The "' + name + '" parameter in the linearization ' + 'dictionary is invalid.');
    }
    function getHints() {
      var hints = linDict.get('H'),
          hintsLength,
          item;
      if (Array.isArray(hints) && ((hintsLength = hints.length) === 2 || hintsLength === 4)) {
        for (var index = 0; index < hintsLength; index++) {
          if (!(Number.isInteger(item = hints[index]) && item > 0)) {
            throw new Error('Hint (' + index + ') in the linearization dictionary is invalid.');
          }
        }
        return hints;
      }
      throw new Error('Hint array in the linearization dictionary is invalid.');
    }
    var parser = new Parser(new Lexer(stream), false, null);
    var obj1 = parser.getObj();
    var obj2 = parser.getObj();
    var obj3 = parser.getObj();
    var linDict = parser.getObj();
    var obj, length;
    if (!(Number.isInteger(obj1) && Number.isInteger(obj2) && (0, _primitives.isCmd)(obj3, 'obj') && (0, _primitives.isDict)(linDict) && (0, _util.isNum)(obj = linDict.get('Linearized')) && obj > 0)) {
      return null;
    } else if ((length = getInt('L')) !== stream.length) {
      throw new Error('The "L" parameter in the linearization dictionary ' + 'does not equal the stream length.');
    }
    return {
      length: length,
      hints: getHints(),
      objectNumberFirst: getInt('O'),
      endFirst: getInt('E'),
      numPages: getInt('N'),
      mainXRefEntriesOffset: getInt('T'),
      pageFirst: linDict.has('P') ? getInt('P', true) : 0
    };
  }
};
exports.Lexer = Lexer;
exports.Linearization = Linearization;
exports.Parser = Parser;

/***/ }),
/* 125 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LZWStream = exports.StringStream = exports.StreamsSequenceStream = exports.Stream = exports.RunLengthStream = exports.PredictorStream = exports.NullStream = exports.FlateStream = exports.DecodeStream = exports.DecryptStream = exports.AsciiHexStream = exports.Ascii85Stream = undefined;

var _util = __w_pdfjs_require__(2);

var _primitives = __w_pdfjs_require__(123);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Stream = function StreamClosure() {
  function Stream(arrayBuffer, start, length, dict) {
    this.bytes = arrayBuffer instanceof Uint8Array ? arrayBuffer : new Uint8Array(arrayBuffer);
    this.start = start || 0;
    this.pos = this.start;
    this.end = start + length || this.bytes.length;
    this.dict = dict;
  }
  Stream.prototype = {
    get length() {
      return this.end - this.start;
    },
    get isEmpty() {
      return this.length === 0;
    },
    getByte: function Stream_getByte() {
      if (this.pos >= this.end) {
        return -1;
      }
      return this.bytes[this.pos++];
    },
    getUint16: function Stream_getUint16() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      if (b0 === -1 || b1 === -1) {
        return -1;
      }
      return (b0 << 8) + b1;
    },
    getInt32: function Stream_getInt32() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      var b2 = this.getByte();
      var b3 = this.getByte();
      return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    },
    getBytes: function getBytes(length) {
      var forceClamped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var bytes = this.bytes;
      var pos = this.pos;
      var strEnd = this.end;
      if (!length) {
        var _subarray = bytes.subarray(pos, strEnd);
        return forceClamped ? new Uint8ClampedArray(_subarray) : _subarray;
      }
      var end = pos + length;
      if (end > strEnd) {
        end = strEnd;
      }
      this.pos = end;
      var subarray = bytes.subarray(pos, end);
      return forceClamped ? new Uint8ClampedArray(subarray) : subarray;
    },

    peekByte: function Stream_peekByte() {
      var peekedByte = this.getByte();
      this.pos--;
      return peekedByte;
    },
    peekBytes: function peekBytes(length) {
      var forceClamped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var bytes = this.getBytes(length, forceClamped);
      this.pos -= bytes.length;
      return bytes;
    },

    skip: function Stream_skip(n) {
      if (!n) {
        n = 1;
      }
      this.pos += n;
    },
    reset: function Stream_reset() {
      this.pos = this.start;
    },
    moveStart: function Stream_moveStart() {
      this.start = this.pos;
    },
    makeSubStream: function Stream_makeSubStream(start, length, dict) {
      return new Stream(this.bytes.buffer, start, length, dict);
    }
  };
  return Stream;
}();
var StringStream = function StringStreamClosure() {
  function StringStream(str) {
    var bytes = (0, _util.stringToBytes)(str);
    Stream.call(this, bytes);
  }
  StringStream.prototype = Stream.prototype;
  return StringStream;
}();
var DecodeStream = function DecodeStreamClosure() {
  var emptyBuffer = new Uint8Array(0);
  function DecodeStream(maybeMinBufferLength) {
    this._rawMinBufferLength = maybeMinBufferLength || 0;
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = emptyBuffer;
    this.minBufferLength = 512;
    if (maybeMinBufferLength) {
      while (this.minBufferLength < maybeMinBufferLength) {
        this.minBufferLength *= 2;
      }
    }
  }
  DecodeStream.prototype = {
    get isEmpty() {
      while (!this.eof && this.bufferLength === 0) {
        this.readBlock();
      }
      return this.bufferLength === 0;
    },
    ensureBuffer: function DecodeStream_ensureBuffer(requested) {
      var buffer = this.buffer;
      if (requested <= buffer.byteLength) {
        return buffer;
      }
      var size = this.minBufferLength;
      while (size < requested) {
        size *= 2;
      }
      var buffer2 = new Uint8Array(size);
      buffer2.set(buffer);
      return this.buffer = buffer2;
    },
    getByte: function DecodeStream_getByte() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof) {
          return -1;
        }
        this.readBlock();
      }
      return this.buffer[this.pos++];
    },
    getUint16: function DecodeStream_getUint16() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      if (b0 === -1 || b1 === -1) {
        return -1;
      }
      return (b0 << 8) + b1;
    },
    getInt32: function DecodeStream_getInt32() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      var b2 = this.getByte();
      var b3 = this.getByte();
      return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    },
    getBytes: function getBytes(length) {
      var forceClamped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var end,
          pos = this.pos;
      if (length) {
        this.ensureBuffer(pos + length);
        end = pos + length;
        while (!this.eof && this.bufferLength < end) {
          this.readBlock();
        }
        var bufEnd = this.bufferLength;
        if (end > bufEnd) {
          end = bufEnd;
        }
      } else {
        while (!this.eof) {
          this.readBlock();
        }
        end = this.bufferLength;
      }
      this.pos = end;
      var subarray = this.buffer.subarray(pos, end);
      return forceClamped && !(subarray instanceof Uint8ClampedArray) ? new Uint8ClampedArray(subarray) : subarray;
    },

    peekByte: function DecodeStream_peekByte() {
      var peekedByte = this.getByte();
      this.pos--;
      return peekedByte;
    },
    peekBytes: function peekBytes(length) {
      var forceClamped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var bytes = this.getBytes(length, forceClamped);
      this.pos -= bytes.length;
      return bytes;
    },

    makeSubStream: function DecodeStream_makeSubStream(start, length, dict) {
      var end = start + length;
      while (this.bufferLength <= end && !this.eof) {
        this.readBlock();
      }
      return new Stream(this.buffer, start, length, dict);
    },
    skip: function DecodeStream_skip(n) {
      if (!n) {
        n = 1;
      }
      this.pos += n;
    },
    reset: function DecodeStream_reset() {
      this.pos = 0;
    },
    getBaseStreams: function DecodeStream_getBaseStreams() {
      if (this.str && this.str.getBaseStreams) {
        return this.str.getBaseStreams();
      }
      return [];
    }
  };
  return DecodeStream;
}();
var StreamsSequenceStream = function StreamsSequenceStreamClosure() {
  function StreamsSequenceStream(streams) {
    this.streams = streams;
    var maybeLength = 0;
    for (var i = 0, ii = streams.length; i < ii; i++) {
      var stream = streams[i];
      if (stream instanceof DecodeStream) {
        maybeLength += stream._rawMinBufferLength;
      } else {
        maybeLength += stream.length;
      }
    }
    DecodeStream.call(this, maybeLength);
  }
  StreamsSequenceStream.prototype = Object.create(DecodeStream.prototype);
  StreamsSequenceStream.prototype.readBlock = function streamSequenceStreamReadBlock() {
    var streams = this.streams;
    if (streams.length === 0) {
      this.eof = true;
      return;
    }
    var stream = streams.shift();
    var chunk = stream.getBytes();
    var bufferLength = this.bufferLength;
    var newLength = bufferLength + chunk.length;
    var buffer = this.ensureBuffer(newLength);
    buffer.set(chunk, bufferLength);
    this.bufferLength = newLength;
  };
  StreamsSequenceStream.prototype.getBaseStreams = function StreamsSequenceStream_getBaseStreams() {
    var baseStreams = [];
    for (var i = 0, ii = this.streams.length; i < ii; i++) {
      var stream = this.streams[i];
      if (stream.getBaseStreams) {
        baseStreams.push.apply(baseStreams, _toConsumableArray(stream.getBaseStreams()));
      }
    }
    return baseStreams;
  };
  return StreamsSequenceStream;
}();
var FlateStream = function FlateStreamClosure() {
  var codeLenCodeMap = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var lengthDecode = new Int32Array([0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a, 0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f, 0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073, 0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102]);
  var distDecode = new Int32Array([0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d, 0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1, 0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01, 0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001]);
  var fixedLitCodeTab = [new Int32Array([0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0, 0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0, 0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0, 0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0, 0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8, 0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8, 0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8, 0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8, 0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4, 0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4, 0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4, 0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4, 0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc, 0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec, 0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc, 0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc, 0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2, 0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2, 0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2, 0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2, 0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca, 0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea, 0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da, 0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa, 0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6, 0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6, 0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6, 0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6, 0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce, 0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee, 0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de, 0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe, 0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1, 0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1, 0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1, 0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1, 0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9, 0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9, 0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9, 0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9, 0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5, 0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5, 0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5, 0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5, 0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd, 0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed, 0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd, 0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd, 0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3, 0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3, 0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3, 0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3, 0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb, 0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb, 0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db, 0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb, 0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7, 0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7, 0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7, 0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7, 0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf, 0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef, 0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df, 0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff]), 9];
  var fixedDistCodeTab = [new Int32Array([0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c, 0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000, 0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d, 0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000]), 5];
  function FlateStream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    var cmf = str.getByte();
    var flg = str.getByte();
    if (cmf === -1 || flg === -1) {
      throw new _util.FormatError('Invalid header in flate stream: ' + cmf + ', ' + flg);
    }
    if ((cmf & 0x0f) !== 0x08) {
      throw new _util.FormatError('Unknown compression method in flate stream: ' + cmf + ', ' + flg);
    }
    if (((cmf << 8) + flg) % 31 !== 0) {
      throw new _util.FormatError('Bad FCHECK in flate stream: ' + cmf + ', ' + flg);
    }
    if (flg & 0x20) {
      throw new _util.FormatError('FDICT bit set in flate stream: ' + cmf + ', ' + flg);
    }
    this.codeSize = 0;
    this.codeBuf = 0;
    DecodeStream.call(this, maybeLength);
  }
  FlateStream.prototype = Object.create(DecodeStream.prototype);
  FlateStream.prototype.getBits = function FlateStream_getBits(bits) {
    var str = this.str;
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var b;
    while (codeSize < bits) {
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad encoding in flate stream');
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & (1 << bits) - 1;
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    return b;
  };
  FlateStream.prototype.getCode = function FlateStream_getCode(table) {
    var str = this.str;
    var codes = table[0];
    var maxLen = table[1];
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var b;
    while (codeSize < maxLen) {
      if ((b = str.getByte()) === -1) {
        break;
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    var code = codes[codeBuf & (1 << maxLen) - 1];
    var codeLen = code >> 16;
    var codeVal = code & 0xffff;
    if (codeLen < 1 || codeSize < codeLen) {
      throw new _util.FormatError('Bad encoding in flate stream');
    }
    this.codeBuf = codeBuf >> codeLen;
    this.codeSize = codeSize - codeLen;
    return codeVal;
  };
  FlateStream.prototype.generateHuffmanTable = function flateStreamGenerateHuffmanTable(lengths) {
    var n = lengths.length;
    var maxLen = 0;
    var i;
    for (i = 0; i < n; ++i) {
      if (lengths[i] > maxLen) {
        maxLen = lengths[i];
      }
    }
    var size = 1 << maxLen;
    var codes = new Int32Array(size);
    for (var len = 1, code = 0, skip = 2; len <= maxLen; ++len, code <<= 1, skip <<= 1) {
      for (var val = 0; val < n; ++val) {
        if (lengths[val] === len) {
          var code2 = 0;
          var t = code;
          for (i = 0; i < len; ++i) {
            code2 = code2 << 1 | t & 1;
            t >>= 1;
          }
          for (i = code2; i < size; i += skip) {
            codes[i] = len << 16 | val;
          }
          ++code;
        }
      }
    }
    return [codes, maxLen];
  };
  FlateStream.prototype.readBlock = function FlateStream_readBlock() {
    var buffer, len;
    var str = this.str;
    var hdr = this.getBits(3);
    if (hdr & 1) {
      this.eof = true;
    }
    hdr >>= 1;
    if (hdr === 0) {
      var b;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      var blockLen = b;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      blockLen |= b << 8;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      var check = b;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      check |= b << 8;
      if (check !== (~blockLen & 0xffff) && (blockLen !== 0 || check !== 0)) {
        throw new _util.FormatError('Bad uncompressed block length in flate stream');
      }
      this.codeBuf = 0;
      this.codeSize = 0;
      var bufferLength = this.bufferLength;
      buffer = this.ensureBuffer(bufferLength + blockLen);
      var end = bufferLength + blockLen;
      this.bufferLength = end;
      if (blockLen === 0) {
        if (str.peekByte() === -1) {
          this.eof = true;
        }
      } else {
        for (var n = bufferLength; n < end; ++n) {
          if ((b = str.getByte()) === -1) {
            this.eof = true;
            break;
          }
          buffer[n] = b;
        }
      }
      return;
    }
    var litCodeTable;
    var distCodeTable;
    if (hdr === 1) {
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr === 2) {
      var numLitCodes = this.getBits(5) + 257;
      var numDistCodes = this.getBits(5) + 1;
      var numCodeLenCodes = this.getBits(4) + 4;
      var codeLenCodeLengths = new Uint8Array(codeLenCodeMap.length);
      var i;
      for (i = 0; i < numCodeLenCodes; ++i) {
        codeLenCodeLengths[codeLenCodeMap[i]] = this.getBits(3);
      }
      var codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);
      len = 0;
      i = 0;
      var codes = numLitCodes + numDistCodes;
      var codeLengths = new Uint8Array(codes);
      var bitsLength, bitsOffset, what;
      while (i < codes) {
        var code = this.getCode(codeLenCodeTab);
        if (code === 16) {
          bitsLength = 2;
          bitsOffset = 3;
          what = len;
        } else if (code === 17) {
          bitsLength = 3;
          bitsOffset = 3;
          what = len = 0;
        } else if (code === 18) {
          bitsLength = 7;
          bitsOffset = 11;
          what = len = 0;
        } else {
          codeLengths[i++] = len = code;
          continue;
        }
        var repeatLength = this.getBits(bitsLength) + bitsOffset;
        while (repeatLength-- > 0) {
          codeLengths[i++] = what;
        }
      }
      litCodeTable = this.generateHuffmanTable(codeLengths.subarray(0, numLitCodes));
      distCodeTable = this.generateHuffmanTable(codeLengths.subarray(numLitCodes, codes));
    } else {
      throw new _util.FormatError('Unknown block type in flate stream');
    }
    buffer = this.buffer;
    var limit = buffer ? buffer.length : 0;
    var pos = this.bufferLength;
    while (true) {
      var code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 === 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      var code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      len = (code1 & 0xffff) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      var dist = (code1 & 0xffff) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (var k = 0; k < len; ++k, ++pos) {
        buffer[pos] = buffer[pos - dist];
      }
    }
  };
  return FlateStream;
}();
var PredictorStream = function PredictorStreamClosure() {
  function PredictorStream(str, maybeLength, params) {
    if (!(0, _primitives.isDict)(params)) {
      return str;
    }
    var predictor = this.predictor = params.get('Predictor') || 1;
    if (predictor <= 1) {
      return str;
    }
    if (predictor !== 2 && (predictor < 10 || predictor > 15)) {
      throw new _util.FormatError('Unsupported predictor: ' + predictor);
    }
    if (predictor === 2) {
      this.readBlock = this.readBlockTiff;
    } else {
      this.readBlock = this.readBlockPng;
    }
    this.str = str;
    this.dict = str.dict;
    var colors = this.colors = params.get('Colors') || 1;
    var bits = this.bits = params.get('BitsPerComponent') || 8;
    var columns = this.columns = params.get('Columns') || 1;
    this.pixBytes = colors * bits + 7 >> 3;
    this.rowBytes = columns * colors * bits + 7 >> 3;
    DecodeStream.call(this, maybeLength);
    return this;
  }
  PredictorStream.prototype = Object.create(DecodeStream.prototype);
  PredictorStream.prototype.readBlockTiff = function predictorStreamReadBlockTiff() {
    var rowBytes = this.rowBytes;
    var bufferLength = this.bufferLength;
    var buffer = this.ensureBuffer(bufferLength + rowBytes);
    var bits = this.bits;
    var colors = this.colors;
    var rawBytes = this.str.getBytes(rowBytes);
    this.eof = !rawBytes.length;
    if (this.eof) {
      return;
    }
    var inbuf = 0,
        outbuf = 0;
    var inbits = 0,
        outbits = 0;
    var pos = bufferLength;
    var i;
    if (bits === 1 && colors === 1) {
      for (i = 0; i < rowBytes; ++i) {
        var c = rawBytes[i] ^ inbuf;
        c ^= c >> 1;
        c ^= c >> 2;
        c ^= c >> 4;
        inbuf = (c & 1) << 7;
        buffer[pos++] = c;
      }
    } else if (bits === 8) {
      for (i = 0; i < colors; ++i) {
        buffer[pos++] = rawBytes[i];
      }
      for (; i < rowBytes; ++i) {
        buffer[pos] = buffer[pos - colors] + rawBytes[i];
        pos++;
      }
    } else if (bits === 16) {
      var bytesPerPixel = colors * 2;
      for (i = 0; i < bytesPerPixel; ++i) {
        buffer[pos++] = rawBytes[i];
      }
      for (; i < rowBytes; i += 2) {
        var sum = ((rawBytes[i] & 0xFF) << 8) + (rawBytes[i + 1] & 0xFF) + ((buffer[pos - bytesPerPixel] & 0xFF) << 8) + (buffer[pos - bytesPerPixel + 1] & 0xFF);
        buffer[pos++] = sum >> 8 & 0xFF;
        buffer[pos++] = sum & 0xFF;
      }
    } else {
      var compArray = new Uint8Array(colors + 1);
      var bitMask = (1 << bits) - 1;
      var j = 0,
          k = bufferLength;
      var columns = this.columns;
      for (i = 0; i < columns; ++i) {
        for (var kk = 0; kk < colors; ++kk) {
          if (inbits < bits) {
            inbuf = inbuf << 8 | rawBytes[j++] & 0xFF;
            inbits += 8;
          }
          compArray[kk] = compArray[kk] + (inbuf >> inbits - bits) & bitMask;
          inbits -= bits;
          outbuf = outbuf << bits | compArray[kk];
          outbits += bits;
          if (outbits >= 8) {
            buffer[k++] = outbuf >> outbits - 8 & 0xFF;
            outbits -= 8;
          }
        }
      }
      if (outbits > 0) {
        buffer[k++] = (outbuf << 8 - outbits) + (inbuf & (1 << 8 - outbits) - 1);
      }
    }
    this.bufferLength += rowBytes;
  };
  PredictorStream.prototype.readBlockPng = function predictorStreamReadBlockPng() {
    var rowBytes = this.rowBytes;
    var pixBytes = this.pixBytes;
    var predictor = this.str.getByte();
    var rawBytes = this.str.getBytes(rowBytes);
    this.eof = !rawBytes.length;
    if (this.eof) {
      return;
    }
    var bufferLength = this.bufferLength;
    var buffer = this.ensureBuffer(bufferLength + rowBytes);
    var prevRow = buffer.subarray(bufferLength - rowBytes, bufferLength);
    if (prevRow.length === 0) {
      prevRow = new Uint8Array(rowBytes);
    }
    var i,
        j = bufferLength,
        up,
        c;
    switch (predictor) {
      case 0:
        for (i = 0; i < rowBytes; ++i) {
          buffer[j++] = rawBytes[i];
        }
        break;
      case 1:
        for (i = 0; i < pixBytes; ++i) {
          buffer[j++] = rawBytes[i];
        }
        for (; i < rowBytes; ++i) {
          buffer[j] = buffer[j - pixBytes] + rawBytes[i] & 0xFF;
          j++;
        }
        break;
      case 2:
        for (i = 0; i < rowBytes; ++i) {
          buffer[j++] = prevRow[i] + rawBytes[i] & 0xFF;
        }
        break;
      case 3:
        for (i = 0; i < pixBytes; ++i) {
          buffer[j++] = (prevRow[i] >> 1) + rawBytes[i];
        }
        for (; i < rowBytes; ++i) {
          buffer[j] = (prevRow[i] + buffer[j - pixBytes] >> 1) + rawBytes[i] & 0xFF;
          j++;
        }
        break;
      case 4:
        for (i = 0; i < pixBytes; ++i) {
          up = prevRow[i];
          c = rawBytes[i];
          buffer[j++] = up + c;
        }
        for (; i < rowBytes; ++i) {
          up = prevRow[i];
          var upLeft = prevRow[i - pixBytes];
          var left = buffer[j - pixBytes];
          var p = left + up - upLeft;
          var pa = p - left;
          if (pa < 0) {
            pa = -pa;
          }
          var pb = p - up;
          if (pb < 0) {
            pb = -pb;
          }
          var pc = p - upLeft;
          if (pc < 0) {
            pc = -pc;
          }
          c = rawBytes[i];
          if (pa <= pb && pa <= pc) {
            buffer[j++] = left + c;
          } else if (pb <= pc) {
            buffer[j++] = up + c;
          } else {
            buffer[j++] = upLeft + c;
          }
        }
        break;
      default:
        throw new _util.FormatError('Unsupported predictor: ' + predictor);
    }
    this.bufferLength += rowBytes;
  };
  return PredictorStream;
}();
var DecryptStream = function DecryptStreamClosure() {
  function DecryptStream(str, maybeLength, decrypt) {
    this.str = str;
    this.dict = str.dict;
    this.decrypt = decrypt;
    this.nextChunk = null;
    this.initialized = false;
    DecodeStream.call(this, maybeLength);
  }
  var chunkSize = 512;
  DecryptStream.prototype = Object.create(DecodeStream.prototype);
  DecryptStream.prototype.readBlock = function DecryptStream_readBlock() {
    var chunk;
    if (this.initialized) {
      chunk = this.nextChunk;
    } else {
      chunk = this.str.getBytes(chunkSize);
      this.initialized = true;
    }
    if (!chunk || chunk.length === 0) {
      this.eof = true;
      return;
    }
    this.nextChunk = this.str.getBytes(chunkSize);
    var hasMoreData = this.nextChunk && this.nextChunk.length > 0;
    var decrypt = this.decrypt;
    chunk = decrypt(chunk, !hasMoreData);
    var bufferLength = this.bufferLength;
    var i,
        n = chunk.length;
    var buffer = this.ensureBuffer(bufferLength + n);
    for (i = 0; i < n; i++) {
      buffer[bufferLength++] = chunk[i];
    }
    this.bufferLength = bufferLength;
  };
  return DecryptStream;
}();
var Ascii85Stream = function Ascii85StreamClosure() {
  function Ascii85Stream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    this.input = new Uint8Array(5);
    if (maybeLength) {
      maybeLength = 0.8 * maybeLength;
    }
    DecodeStream.call(this, maybeLength);
  }
  Ascii85Stream.prototype = Object.create(DecodeStream.prototype);
  Ascii85Stream.prototype.readBlock = function Ascii85Stream_readBlock() {
    var TILDA_CHAR = 0x7E;
    var Z_LOWER_CHAR = 0x7A;
    var EOF = -1;
    var str = this.str;
    var c = str.getByte();
    while ((0, _util.isSpace)(c)) {
      c = str.getByte();
    }
    if (c === EOF || c === TILDA_CHAR) {
      this.eof = true;
      return;
    }
    var bufferLength = this.bufferLength,
        buffer;
    var i;
    if (c === Z_LOWER_CHAR) {
      buffer = this.ensureBuffer(bufferLength + 4);
      for (i = 0; i < 4; ++i) {
        buffer[bufferLength + i] = 0;
      }
      this.bufferLength += 4;
    } else {
      var input = this.input;
      input[0] = c;
      for (i = 1; i < 5; ++i) {
        c = str.getByte();
        while ((0, _util.isSpace)(c)) {
          c = str.getByte();
        }
        input[i] = c;
        if (c === EOF || c === TILDA_CHAR) {
          break;
        }
      }
      buffer = this.ensureBuffer(bufferLength + i - 1);
      this.bufferLength += i - 1;
      if (i < 5) {
        for (; i < 5; ++i) {
          input[i] = 0x21 + 84;
        }
        this.eof = true;
      }
      var t = 0;
      for (i = 0; i < 5; ++i) {
        t = t * 85 + (input[i] - 0x21);
      }
      for (i = 3; i >= 0; --i) {
        buffer[bufferLength + i] = t & 0xFF;
        t >>= 8;
      }
    }
  };
  return Ascii85Stream;
}();
var AsciiHexStream = function AsciiHexStreamClosure() {
  function AsciiHexStream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    this.firstDigit = -1;
    if (maybeLength) {
      maybeLength = 0.5 * maybeLength;
    }
    DecodeStream.call(this, maybeLength);
  }
  AsciiHexStream.prototype = Object.create(DecodeStream.prototype);
  AsciiHexStream.prototype.readBlock = function AsciiHexStream_readBlock() {
    var UPSTREAM_BLOCK_SIZE = 8000;
    var bytes = this.str.getBytes(UPSTREAM_BLOCK_SIZE);
    if (!bytes.length) {
      this.eof = true;
      return;
    }
    var maxDecodeLength = bytes.length + 1 >> 1;
    var buffer = this.ensureBuffer(this.bufferLength + maxDecodeLength);
    var bufferLength = this.bufferLength;
    var firstDigit = this.firstDigit;
    for (var i = 0, ii = bytes.length; i < ii; i++) {
      var ch = bytes[i],
          digit;
      if (ch >= 0x30 && ch <= 0x39) {
        digit = ch & 0x0F;
      } else if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
        digit = (ch & 0x0F) + 9;
      } else if (ch === 0x3E) {
        this.eof = true;
        break;
      } else {
        continue;
      }
      if (firstDigit < 0) {
        firstDigit = digit;
      } else {
        buffer[bufferLength++] = firstDigit << 4 | digit;
        firstDigit = -1;
      }
    }
    if (firstDigit >= 0 && this.eof) {
      buffer[bufferLength++] = firstDigit << 4;
      firstDigit = -1;
    }
    this.firstDigit = firstDigit;
    this.bufferLength = bufferLength;
  };
  return AsciiHexStream;
}();
var RunLengthStream = function RunLengthStreamClosure() {
  function RunLengthStream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    DecodeStream.call(this, maybeLength);
  }
  RunLengthStream.prototype = Object.create(DecodeStream.prototype);
  RunLengthStream.prototype.readBlock = function RunLengthStream_readBlock() {
    var repeatHeader = this.str.getBytes(2);
    if (!repeatHeader || repeatHeader.length < 2 || repeatHeader[0] === 128) {
      this.eof = true;
      return;
    }
    var buffer;
    var bufferLength = this.bufferLength;
    var n = repeatHeader[0];
    if (n < 128) {
      buffer = this.ensureBuffer(bufferLength + n + 1);
      buffer[bufferLength++] = repeatHeader[1];
      if (n > 0) {
        var source = this.str.getBytes(n);
        buffer.set(source, bufferLength);
        bufferLength += n;
      }
    } else {
      n = 257 - n;
      var b = repeatHeader[1];
      buffer = this.ensureBuffer(bufferLength + n + 1);
      for (var i = 0; i < n; i++) {
        buffer[bufferLength++] = b;
      }
    }
    this.bufferLength = bufferLength;
  };
  return RunLengthStream;
}();
var LZWStream = function LZWStreamClosure() {
  function LZWStream(str, maybeLength, earlyChange) {
    this.str = str;
    this.dict = str.dict;
    this.cachedData = 0;
    this.bitsCached = 0;
    var maxLzwDictionarySize = 4096;
    var lzwState = {
      earlyChange: earlyChange,
      codeLength: 9,
      nextCode: 258,
      dictionaryValues: new Uint8Array(maxLzwDictionarySize),
      dictionaryLengths: new Uint16Array(maxLzwDictionarySize),
      dictionaryPrevCodes: new Uint16Array(maxLzwDictionarySize),
      currentSequence: new Uint8Array(maxLzwDictionarySize),
      currentSequenceLength: 0
    };
    for (var i = 0; i < 256; ++i) {
      lzwState.dictionaryValues[i] = i;
      lzwState.dictionaryLengths[i] = 1;
    }
    this.lzwState = lzwState;
    DecodeStream.call(this, maybeLength);
  }
  LZWStream.prototype = Object.create(DecodeStream.prototype);
  LZWStream.prototype.readBits = function LZWStream_readBits(n) {
    var bitsCached = this.bitsCached;
    var cachedData = this.cachedData;
    while (bitsCached < n) {
      var c = this.str.getByte();
      if (c === -1) {
        this.eof = true;
        return null;
      }
      cachedData = cachedData << 8 | c;
      bitsCached += 8;
    }
    this.bitsCached = bitsCached -= n;
    this.cachedData = cachedData;
    this.lastCode = null;
    return cachedData >>> bitsCached & (1 << n) - 1;
  };
  LZWStream.prototype.readBlock = function LZWStream_readBlock() {
    var blockSize = 512;
    var estimatedDecodedSize = blockSize * 2,
        decodedSizeDelta = blockSize;
    var i, j, q;
    var lzwState = this.lzwState;
    if (!lzwState) {
      return;
    }
    var earlyChange = lzwState.earlyChange;
    var nextCode = lzwState.nextCode;
    var dictionaryValues = lzwState.dictionaryValues;
    var dictionaryLengths = lzwState.dictionaryLengths;
    var dictionaryPrevCodes = lzwState.dictionaryPrevCodes;
    var codeLength = lzwState.codeLength;
    var prevCode = lzwState.prevCode;
    var currentSequence = lzwState.currentSequence;
    var currentSequenceLength = lzwState.currentSequenceLength;
    var decodedLength = 0;
    var currentBufferLength = this.bufferLength;
    var buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
    for (i = 0; i < blockSize; i++) {
      var code = this.readBits(codeLength);
      var hasPrev = currentSequenceLength > 0;
      if (code < 256) {
        currentSequence[0] = code;
        currentSequenceLength = 1;
      } else if (code >= 258) {
        if (code < nextCode) {
          currentSequenceLength = dictionaryLengths[code];
          for (j = currentSequenceLength - 1, q = code; j >= 0; j--) {
            currentSequence[j] = dictionaryValues[q];
            q = dictionaryPrevCodes[q];
          }
        } else {
          currentSequence[currentSequenceLength++] = currentSequence[0];
        }
      } else if (code === 256) {
        codeLength = 9;
        nextCode = 258;
        currentSequenceLength = 0;
        continue;
      } else {
        this.eof = true;
        delete this.lzwState;
        break;
      }
      if (hasPrev) {
        dictionaryPrevCodes[nextCode] = prevCode;
        dictionaryLengths[nextCode] = dictionaryLengths[prevCode] + 1;
        dictionaryValues[nextCode] = currentSequence[0];
        nextCode++;
        codeLength = nextCode + earlyChange & nextCode + earlyChange - 1 ? codeLength : Math.min(Math.log(nextCode + earlyChange) / 0.6931471805599453 + 1, 12) | 0;
      }
      prevCode = code;
      decodedLength += currentSequenceLength;
      if (estimatedDecodedSize < decodedLength) {
        do {
          estimatedDecodedSize += decodedSizeDelta;
        } while (estimatedDecodedSize < decodedLength);
        buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
      }
      for (j = 0; j < currentSequenceLength; j++) {
        buffer[currentBufferLength++] = currentSequence[j];
      }
    }
    lzwState.nextCode = nextCode;
    lzwState.codeLength = codeLength;
    lzwState.prevCode = prevCode;
    lzwState.currentSequenceLength = currentSequenceLength;
    this.bufferLength = currentBufferLength;
  };
  return LZWStream;
}();
var NullStream = function NullStreamClosure() {
  function NullStream() {
    Stream.call(this, new Uint8Array(0));
  }
  NullStream.prototype = Stream.prototype;
  return NullStream;
}();
exports.Ascii85Stream = Ascii85Stream;
exports.AsciiHexStream = AsciiHexStream;
exports.DecryptStream = DecryptStream;
exports.DecodeStream = DecodeStream;
exports.FlateStream = FlateStream;
exports.NullStream = NullStream;
exports.PredictorStream = PredictorStream;
exports.RunLengthStream = RunLengthStream;
exports.Stream = Stream;
exports.StreamsSequenceStream = StreamsSequenceStream;
exports.StringStream = StringStream;
exports.LZWStream = LZWStream;

/***/ }),
/* 126 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCITTFaxStream = undefined;

var _primitives = __w_pdfjs_require__(123);

var _ccitt = __w_pdfjs_require__(127);

var _stream = __w_pdfjs_require__(125);

var CCITTFaxStream = function CCITTFaxStreamClosure() {
  function CCITTFaxStream(str, maybeLength, params) {
    this.str = str;
    this.dict = str.dict;
    if (!(0, _primitives.isDict)(params)) {
      params = _primitives.Dict.empty;
    }
    var source = {
      next: function next() {
        return str.getByte();
      }
    };
    this.ccittFaxDecoder = new _ccitt.CCITTFaxDecoder(source, {
      K: params.get('K'),
      EndOfLine: params.get('EndOfLine'),
      EncodedByteAlign: params.get('EncodedByteAlign'),
      Columns: params.get('Columns'),
      Rows: params.get('Rows'),
      EndOfBlock: params.get('EndOfBlock'),
      BlackIs1: params.get('BlackIs1')
    });
    _stream.DecodeStream.call(this, maybeLength);
  }
  CCITTFaxStream.prototype = Object.create(_stream.DecodeStream.prototype);
  CCITTFaxStream.prototype.readBlock = function () {
    while (!this.eof) {
      var c = this.ccittFaxDecoder.readNextChar();
      if (c === -1) {
        this.eof = true;
        return;
      }
      this.ensureBuffer(this.bufferLength + 1);
      this.buffer[this.bufferLength++] = c;
    }
  };
  return CCITTFaxStream;
}();
exports.CCITTFaxStream = CCITTFaxStream;

/***/ }),
/* 127 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCITTFaxDecoder = undefined;

var _util = __w_pdfjs_require__(2);

var CCITTFaxDecoder = function CCITTFaxDecoder() {
  var ccittEOL = -2;
  var ccittEOF = -1;
  var twoDimPass = 0;
  var twoDimHoriz = 1;
  var twoDimVert0 = 2;
  var twoDimVertR1 = 3;
  var twoDimVertL1 = 4;
  var twoDimVertR2 = 5;
  var twoDimVertL2 = 6;
  var twoDimVertR3 = 7;
  var twoDimVertL3 = 8;
  var twoDimTable = [[-1, -1], [-1, -1], [7, twoDimVertL3], [7, twoDimVertR3], [6, twoDimVertL2], [6, twoDimVertL2], [6, twoDimVertR2], [6, twoDimVertR2], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0]];
  var whiteTable1 = [[-1, -1], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [12, 1984], [12, 2048], [12, 2112], [12, 2176], [12, 2240], [12, 2304], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [12, 2368], [12, 2432], [12, 2496], [12, 2560]];
  var whiteTable2 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 29], [8, 29], [8, 30], [8, 30], [8, 45], [8, 45], [8, 46], [8, 46], [7, 22], [7, 22], [7, 22], [7, 22], [7, 23], [7, 23], [7, 23], [7, 23], [8, 47], [8, 47], [8, 48], [8, 48], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [7, 20], [7, 20], [7, 20], [7, 20], [8, 33], [8, 33], [8, 34], [8, 34], [8, 35], [8, 35], [8, 36], [8, 36], [8, 37], [8, 37], [8, 38], [8, 38], [7, 19], [7, 19], [7, 19], [7, 19], [8, 31], [8, 31], [8, 32], [8, 32], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [8, 53], [8, 53], [8, 54], [8, 54], [7, 26], [7, 26], [7, 26], [7, 26], [8, 39], [8, 39], [8, 40], [8, 40], [8, 41], [8, 41], [8, 42], [8, 42], [8, 43], [8, 43], [8, 44], [8, 44], [7, 21], [7, 21], [7, 21], [7, 21], [7, 28], [7, 28], [7, 28], [7, 28], [8, 61], [8, 61], [8, 62], [8, 62], [8, 63], [8, 63], [8, 0], [8, 0], [8, 320], [8, 320], [8, 384], [8, 384], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [7, 27], [7, 27], [7, 27], [7, 27], [8, 59], [8, 59], [8, 60], [8, 60], [9, 1472], [9, 1536], [9, 1600], [9, 1728], [7, 18], [7, 18], [7, 18], [7, 18], [7, 24], [7, 24], [7, 24], [7, 24], [8, 49], [8, 49], [8, 50], [8, 50], [8, 51], [8, 51], [8, 52], [8, 52], [7, 25], [7, 25], [7, 25], [7, 25], [8, 55], [8, 55], [8, 56], [8, 56], [8, 57], [8, 57], [8, 58], [8, 58], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [8, 448], [8, 448], [8, 512], [8, 512], [9, 704], [9, 768], [8, 640], [8, 640], [8, 576], [8, 576], [9, 832], [9, 896], [9, 960], [9, 1024], [9, 1088], [9, 1152], [9, 1216], [9, 1280], [9, 1344], [9, 1408], [7, 256], [7, 256], [7, 256], [7, 256], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7]];
  var blackTable1 = [[-1, -1], [-1, -1], [12, ccittEOL], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [11, 1792], [11, 1792], [12, 1984], [12, 1984], [12, 2048], [12, 2048], [12, 2112], [12, 2112], [12, 2176], [12, 2176], [12, 2240], [12, 2240], [12, 2304], [12, 2304], [11, 1856], [11, 1856], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [11, 1920], [11, 1920], [12, 2368], [12, 2368], [12, 2432], [12, 2432], [12, 2496], [12, 2496], [12, 2560], [12, 2560], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [12, 52], [12, 52], [13, 640], [13, 704], [13, 768], [13, 832], [12, 55], [12, 55], [12, 56], [12, 56], [13, 1280], [13, 1344], [13, 1408], [13, 1472], [12, 59], [12, 59], [12, 60], [12, 60], [13, 1536], [13, 1600], [11, 24], [11, 24], [11, 24], [11, 24], [11, 25], [11, 25], [11, 25], [11, 25], [13, 1664], [13, 1728], [12, 320], [12, 320], [12, 384], [12, 384], [12, 448], [12, 448], [13, 512], [13, 576], [12, 53], [12, 53], [12, 54], [12, 54], [13, 896], [13, 960], [13, 1024], [13, 1088], [13, 1152], [13, 1216], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64]];
  var blackTable2 = [[8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [11, 23], [11, 23], [12, 50], [12, 51], [12, 44], [12, 45], [12, 46], [12, 47], [12, 57], [12, 58], [12, 61], [12, 256], [10, 16], [10, 16], [10, 16], [10, 16], [10, 17], [10, 17], [10, 17], [10, 17], [12, 48], [12, 49], [12, 62], [12, 63], [12, 30], [12, 31], [12, 32], [12, 33], [12, 40], [12, 41], [11, 22], [11, 22], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [12, 128], [12, 192], [12, 26], [12, 27], [12, 28], [12, 29], [11, 19], [11, 19], [11, 20], [11, 20], [12, 34], [12, 35], [12, 36], [12, 37], [12, 38], [12, 39], [11, 21], [11, 21], [12, 42], [12, 43], [10, 0], [10, 0], [10, 0], [10, 0], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12]];
  var blackTable3 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [6, 9], [6, 8], [5, 7], [5, 7], [4, 6], [4, 6], [4, 6], [4, 6], [4, 5], [4, 5], [4, 5], [4, 5], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
  function CCITTFaxDecoder(source) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!source || typeof source.next !== 'function') {
      throw new Error('CCITTFaxDecoder - invalid "source" parameter.');
    }
    this.source = source;
    this.eof = false;
    this.encoding = options['K'] || 0;
    this.eoline = options['EndOfLine'] || false;
    this.byteAlign = options['EncodedByteAlign'] || false;
    this.columns = options['Columns'] || 1728;
    this.rows = options['Rows'] || 0;
    var eoblock = options['EndOfBlock'];
    if (eoblock === null || eoblock === undefined) {
      eoblock = true;
    }
    this.eoblock = eoblock;
    this.black = options['BlackIs1'] || false;
    this.codingLine = new Uint32Array(this.columns + 1);
    this.refLine = new Uint32Array(this.columns + 2);
    this.codingLine[0] = this.columns;
    this.codingPos = 0;
    this.row = 0;
    this.nextLine2D = this.encoding < 0;
    this.inputBits = 0;
    this.inputBuf = 0;
    this.outputBits = 0;
    this.rowsDone = false;
    var code1 = void 0;
    while ((code1 = this._lookBits(12)) === 0) {
      this._eatBits(1);
    }
    if (code1 === 1) {
      this._eatBits(12);
    }
    if (this.encoding > 0) {
      this.nextLine2D = !this._lookBits(1);
      this._eatBits(1);
    }
  }
  CCITTFaxDecoder.prototype = {
    readNextChar: function readNextChar() {
      if (this.eof) {
        return -1;
      }
      var refLine = this.refLine;
      var codingLine = this.codingLine;
      var columns = this.columns;
      var refPos = void 0,
          blackPixels = void 0,
          bits = void 0,
          i = void 0;
      if (this.outputBits === 0) {
        if (this.rowsDone) {
          this.eof = true;
        }
        if (this.eof) {
          return -1;
        }
        this.err = false;
        var code1 = void 0,
            code2 = void 0,
            code3 = void 0;
        if (this.nextLine2D) {
          for (i = 0; codingLine[i] < columns; ++i) {
            refLine[i] = codingLine[i];
          }
          refLine[i++] = columns;
          refLine[i] = columns;
          codingLine[0] = 0;
          this.codingPos = 0;
          refPos = 0;
          blackPixels = 0;
          while (codingLine[this.codingPos] < columns) {
            code1 = this._getTwoDimCode();
            switch (code1) {
              case twoDimPass:
                this._addPixels(refLine[refPos + 1], blackPixels);
                if (refLine[refPos + 1] < columns) {
                  refPos += 2;
                }
                break;
              case twoDimHoriz:
                code1 = code2 = 0;
                if (blackPixels) {
                  do {
                    code1 += code3 = this._getBlackCode();
                  } while (code3 >= 64);
                  do {
                    code2 += code3 = this._getWhiteCode();
                  } while (code3 >= 64);
                } else {
                  do {
                    code1 += code3 = this._getWhiteCode();
                  } while (code3 >= 64);
                  do {
                    code2 += code3 = this._getBlackCode();
                  } while (code3 >= 64);
                }
                this._addPixels(codingLine[this.codingPos] + code1, blackPixels);
                if (codingLine[this.codingPos] < columns) {
                  this._addPixels(codingLine[this.codingPos] + code2, blackPixels ^ 1);
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
                break;
              case twoDimVertR3:
                this._addPixels(refLine[refPos] + 3, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  ++refPos;
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVertR2:
                this._addPixels(refLine[refPos] + 2, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  ++refPos;
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVertR1:
                this._addPixels(refLine[refPos] + 1, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  ++refPos;
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVert0:
                this._addPixels(refLine[refPos], blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  ++refPos;
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVertL3:
                this._addPixelsNeg(refLine[refPos] - 3, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  if (refPos > 0) {
                    --refPos;
                  } else {
                    ++refPos;
                  }
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVertL2:
                this._addPixelsNeg(refLine[refPos] - 2, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  if (refPos > 0) {
                    --refPos;
                  } else {
                    ++refPos;
                  }
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVertL1:
                this._addPixelsNeg(refLine[refPos] - 1, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  if (refPos > 0) {
                    --refPos;
                  } else {
                    ++refPos;
                  }
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case ccittEOF:
                this._addPixels(columns, 0);
                this.eof = true;
                break;
              default:
                (0, _util.info)('bad 2d code');
                this._addPixels(columns, 0);
                this.err = true;
            }
          }
        } else {
          codingLine[0] = 0;
          this.codingPos = 0;
          blackPixels = 0;
          while (codingLine[this.codingPos] < columns) {
            code1 = 0;
            if (blackPixels) {
              do {
                code1 += code3 = this._getBlackCode();
              } while (code3 >= 64);
            } else {
              do {
                code1 += code3 = this._getWhiteCode();
              } while (code3 >= 64);
            }
            this._addPixels(codingLine[this.codingPos] + code1, blackPixels);
            blackPixels ^= 1;
          }
        }
        var gotEOL = false;
        if (this.byteAlign) {
          this.inputBits &= ~7;
        }
        if (!this.eoblock && this.row === this.rows - 1) {
          this.rowsDone = true;
        } else {
          code1 = this._lookBits(12);
          if (this.eoline) {
            while (code1 !== ccittEOF && code1 !== 1) {
              this._eatBits(1);
              code1 = this._lookBits(12);
            }
          } else {
            while (code1 === 0) {
              this._eatBits(1);
              code1 = this._lookBits(12);
            }
          }
          if (code1 === 1) {
            this._eatBits(12);
            gotEOL = true;
          } else if (code1 === ccittEOF) {
            this.eof = true;
          }
        }
        if (!this.eof && this.encoding > 0 && !this.rowsDone) {
          this.nextLine2D = !this._lookBits(1);
          this._eatBits(1);
        }
        if (this.eoblock && gotEOL && this.byteAlign) {
          code1 = this._lookBits(12);
          if (code1 === 1) {
            this._eatBits(12);
            if (this.encoding > 0) {
              this._lookBits(1);
              this._eatBits(1);
            }
            if (this.encoding >= 0) {
              for (i = 0; i < 4; ++i) {
                code1 = this._lookBits(12);
                if (code1 !== 1) {
                  (0, _util.info)('bad rtc code: ' + code1);
                }
                this._eatBits(12);
                if (this.encoding > 0) {
                  this._lookBits(1);
                  this._eatBits(1);
                }
              }
            }
            this.eof = true;
          }
        } else if (this.err && this.eoline) {
          while (true) {
            code1 = this._lookBits(13);
            if (code1 === ccittEOF) {
              this.eof = true;
              return -1;
            }
            if (code1 >> 1 === 1) {
              break;
            }
            this._eatBits(1);
          }
          this._eatBits(12);
          if (this.encoding > 0) {
            this._eatBits(1);
            this.nextLine2D = !(code1 & 1);
          }
        }
        if (codingLine[0] > 0) {
          this.outputBits = codingLine[this.codingPos = 0];
        } else {
          this.outputBits = codingLine[this.codingPos = 1];
        }
        this.row++;
      }
      var c = void 0;
      if (this.outputBits >= 8) {
        c = this.codingPos & 1 ? 0 : 0xFF;
        this.outputBits -= 8;
        if (this.outputBits === 0 && codingLine[this.codingPos] < columns) {
          this.codingPos++;
          this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
        }
      } else {
        bits = 8;
        c = 0;
        do {
          if (this.outputBits > bits) {
            c <<= bits;
            if (!(this.codingPos & 1)) {
              c |= 0xFF >> 8 - bits;
            }
            this.outputBits -= bits;
            bits = 0;
          } else {
            c <<= this.outputBits;
            if (!(this.codingPos & 1)) {
              c |= 0xFF >> 8 - this.outputBits;
            }
            bits -= this.outputBits;
            this.outputBits = 0;
            if (codingLine[this.codingPos] < columns) {
              this.codingPos++;
              this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
            } else if (bits > 0) {
              c <<= bits;
              bits = 0;
            }
          }
        } while (bits);
      }
      if (this.black) {
        c ^= 0xFF;
      }
      return c;
    },
    _addPixels: function _addPixels(a1, blackPixels) {
      var codingLine = this.codingLine;
      var codingPos = this.codingPos;
      if (a1 > codingLine[codingPos]) {
        if (a1 > this.columns) {
          (0, _util.info)('row is wrong length');
          this.err = true;
          a1 = this.columns;
        }
        if (codingPos & 1 ^ blackPixels) {
          ++codingPos;
        }
        codingLine[codingPos] = a1;
      }
      this.codingPos = codingPos;
    },
    _addPixelsNeg: function _addPixelsNeg(a1, blackPixels) {
      var codingLine = this.codingLine;
      var codingPos = this.codingPos;
      if (a1 > codingLine[codingPos]) {
        if (a1 > this.columns) {
          (0, _util.info)('row is wrong length');
          this.err = true;
          a1 = this.columns;
        }
        if (codingPos & 1 ^ blackPixels) {
          ++codingPos;
        }
        codingLine[codingPos] = a1;
      } else if (a1 < codingLine[codingPos]) {
        if (a1 < 0) {
          (0, _util.info)('invalid code');
          this.err = true;
          a1 = 0;
        }
        while (codingPos > 0 && a1 < codingLine[codingPos - 1]) {
          --codingPos;
        }
        codingLine[codingPos] = a1;
      }
      this.codingPos = codingPos;
    },
    _findTableCode: function _findTableCode(start, end, table, limit) {
      var limitValue = limit || 0;
      for (var i = start; i <= end; ++i) {
        var code = this._lookBits(i);
        if (code === ccittEOF) {
          return [true, 1, false];
        }
        if (i < end) {
          code <<= end - i;
        }
        if (!limitValue || code >= limitValue) {
          var p = table[code - limitValue];
          if (p[0] === i) {
            this._eatBits(i);
            return [true, p[1], true];
          }
        }
      }
      return [false, 0, false];
    },
    _getTwoDimCode: function _getTwoDimCode() {
      var code = 0;
      var p = void 0;
      if (this.eoblock) {
        code = this._lookBits(7);
        p = twoDimTable[code];
        if (p && p[0] > 0) {
          this._eatBits(p[0]);
          return p[1];
        }
      } else {
        var result = this._findTableCode(1, 7, twoDimTable);
        if (result[0] && result[2]) {
          return result[1];
        }
      }
      (0, _util.info)('Bad two dim code');
      return ccittEOF;
    },
    _getWhiteCode: function _getWhiteCode() {
      var code = 0;
      var p = void 0;
      if (this.eoblock) {
        code = this._lookBits(12);
        if (code === ccittEOF) {
          return 1;
        }
        if (code >> 5 === 0) {
          p = whiteTable1[code];
        } else {
          p = whiteTable2[code >> 3];
        }
        if (p[0] > 0) {
          this._eatBits(p[0]);
          return p[1];
        }
      } else {
        var result = this._findTableCode(1, 9, whiteTable2);
        if (result[0]) {
          return result[1];
        }
        result = this._findTableCode(11, 12, whiteTable1);
        if (result[0]) {
          return result[1];
        }
      }
      (0, _util.info)('bad white code');
      this._eatBits(1);
      return 1;
    },
    _getBlackCode: function _getBlackCode() {
      var code = void 0,
          p = void 0;
      if (this.eoblock) {
        code = this._lookBits(13);
        if (code === ccittEOF) {
          return 1;
        }
        if (code >> 7 === 0) {
          p = blackTable1[code];
        } else if (code >> 9 === 0 && code >> 7 !== 0) {
          p = blackTable2[(code >> 1) - 64];
        } else {
          p = blackTable3[code >> 7];
        }
        if (p[0] > 0) {
          this._eatBits(p[0]);
          return p[1];
        }
      } else {
        var result = this._findTableCode(2, 6, blackTable3);
        if (result[0]) {
          return result[1];
        }
        result = this._findTableCode(7, 12, blackTable2, 64);
        if (result[0]) {
          return result[1];
        }
        result = this._findTableCode(10, 13, blackTable1);
        if (result[0]) {
          return result[1];
        }
      }
      (0, _util.info)('bad black code');
      this._eatBits(1);
      return 1;
    },
    _lookBits: function _lookBits(n) {
      var c = void 0;
      while (this.inputBits < n) {
        if ((c = this.source.next()) === -1) {
          if (this.inputBits === 0) {
            return ccittEOF;
          }
          return this.inputBuf << n - this.inputBits & 0xFFFF >> 16 - n;
        }
        this.inputBuf = this.inputBuf << 8 | c;
        this.inputBits += 8;
      }
      return this.inputBuf >> this.inputBits - n & 0xFFFF >> 16 - n;
    },
    _eatBits: function _eatBits(n) {
      if ((this.inputBits -= n) < 0) {
        this.inputBits = 0;
      }
    }
  };
  return CCITTFaxDecoder;
}();
exports.CCITTFaxDecoder = CCITTFaxDecoder;

/***/ }),
/* 128 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Jbig2Stream = undefined;

var _primitives = __w_pdfjs_require__(123);

var _stream = __w_pdfjs_require__(125);

var _jbig = __w_pdfjs_require__(129);

var _util = __w_pdfjs_require__(2);

var Jbig2Stream = function Jbig2StreamClosure() {
  function Jbig2Stream(stream, maybeLength, dict, params) {
    this.stream = stream;
    this.maybeLength = maybeLength;
    this.dict = dict;
    this.params = params;
    _stream.DecodeStream.call(this, maybeLength);
  }
  Jbig2Stream.prototype = Object.create(_stream.DecodeStream.prototype);
  Object.defineProperty(Jbig2Stream.prototype, 'bytes', {
    get: function get() {
      return (0, _util.shadow)(this, 'bytes', this.stream.getBytes(this.maybeLength));
    },

    configurable: true
  });
  Jbig2Stream.prototype.ensureBuffer = function (requested) {};
  Jbig2Stream.prototype.readBlock = function () {
    if (this.eof) {
      return;
    }
    var jbig2Image = new _jbig.Jbig2Image();
    var chunks = [];
    if ((0, _primitives.isDict)(this.params)) {
      var globalsStream = this.params.get('JBIG2Globals');
      if ((0, _primitives.isStream)(globalsStream)) {
        var globals = globalsStream.getBytes();
        chunks.push({
          data: globals,
          start: 0,
          end: globals.length
        });
      }
    }
    chunks.push({
      data: this.bytes,
      start: 0,
      end: this.bytes.length
    });
    var data = jbig2Image.parseChunks(chunks);
    var dataLength = data.length;
    for (var i = 0; i < dataLength; i++) {
      data[i] ^= 0xFF;
    }
    this.buffer = data;
    this.bufferLength = dataLength;
    this.eof = true;
  };
  return Jbig2Stream;
}();
exports.Jbig2Stream = Jbig2Stream;

/***/ }),
/* 129 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Jbig2Image = undefined;

var _util = __w_pdfjs_require__(2);

var _arithmetic_decoder = __w_pdfjs_require__(130);

var _ccitt = __w_pdfjs_require__(127);

var Jbig2Error = function Jbig2ErrorClosure() {
  function Jbig2Error(msg) {
    this.message = 'JBIG2 error: ' + msg;
  }
  Jbig2Error.prototype = new Error();
  Jbig2Error.prototype.name = 'Jbig2Error';
  Jbig2Error.constructor = Jbig2Error;
  return Jbig2Error;
}();
var Jbig2Image = function Jbig2ImageClosure() {
  function ContextCache() {}
  ContextCache.prototype = {
    getContexts: function getContexts(id) {
      if (id in this) {
        return this[id];
      }
      return this[id] = new Int8Array(1 << 16);
    }
  };
  function DecodingContext(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
  }
  DecodingContext.prototype = {
    get decoder() {
      var decoder = new _arithmetic_decoder.ArithmeticDecoder(this.data, this.start, this.end);
      return (0, _util.shadow)(this, 'decoder', decoder);
    },
    get contextCache() {
      var cache = new ContextCache();
      return (0, _util.shadow)(this, 'contextCache', cache);
    }
  };
  function decodeInteger(contextCache, procedure, decoder) {
    var contexts = contextCache.getContexts(procedure);
    var prev = 1;
    function readBits(length) {
      var v = 0;
      for (var i = 0; i < length; i++) {
        var bit = decoder.readBit(contexts, prev);
        prev = prev < 256 ? prev << 1 | bit : (prev << 1 | bit) & 511 | 256;
        v = v << 1 | bit;
      }
      return v >>> 0;
    }
    var sign = readBits(1);
    var value = readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(32) + 4436 : readBits(12) + 340 : readBits(8) + 84 : readBits(6) + 20 : readBits(4) + 4 : readBits(2);
    return sign === 0 ? value : value > 0 ? -value : null;
  }
  function decodeIAID(contextCache, decoder, codeLength) {
    var contexts = contextCache.getContexts('IAID');
    var prev = 1;
    for (var i = 0; i < codeLength; i++) {
      var bit = decoder.readBit(contexts, prev);
      prev = prev << 1 | bit;
    }
    if (codeLength < 31) {
      return prev & (1 << codeLength) - 1;
    }
    return prev & 0x7FFFFFFF;
  }
  var SegmentTypes = ['SymbolDictionary', null, null, null, 'IntermediateTextRegion', null, 'ImmediateTextRegion', 'ImmediateLosslessTextRegion', null, null, null, null, null, null, null, null, 'PatternDictionary', null, null, null, 'IntermediateHalftoneRegion', null, 'ImmediateHalftoneRegion', 'ImmediateLosslessHalftoneRegion', null, null, null, null, null, null, null, null, null, null, null, null, 'IntermediateGenericRegion', null, 'ImmediateGenericRegion', 'ImmediateLosslessGenericRegion', 'IntermediateGenericRefinementRegion', null, 'ImmediateGenericRefinementRegion', 'ImmediateLosslessGenericRefinementRegion', null, null, null, null, 'PageInformation', 'EndOfPage', 'EndOfStripe', 'EndOfFile', 'Profiles', 'Tables', null, null, null, null, null, null, null, null, 'Extension'];
  var CodingTemplates = [[{
    x: -1,
    y: -2
  }, {
    x: 0,
    y: -2
  }, {
    x: 1,
    y: -2
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: 2,
    y: -1
  }, {
    x: -4,
    y: 0
  }, {
    x: -3,
    y: 0
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }], [{
    x: -1,
    y: -2
  }, {
    x: 0,
    y: -2
  }, {
    x: 1,
    y: -2
  }, {
    x: 2,
    y: -2
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: 2,
    y: -1
  }, {
    x: -3,
    y: 0
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }], [{
    x: -1,
    y: -2
  }, {
    x: 0,
    y: -2
  }, {
    x: 1,
    y: -2
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }], [{
    x: -3,
    y: -1
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -4,
    y: 0
  }, {
    x: -3,
    y: 0
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }]];
  var RefinementTemplates = [{
    coding: [{
      x: 0,
      y: -1
    }, {
      x: 1,
      y: -1
    }, {
      x: -1,
      y: 0
    }],
    reference: [{
      x: 0,
      y: -1
    }, {
      x: 1,
      y: -1
    }, {
      x: -1,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 0
    }, {
      x: -1,
      y: 1
    }, {
      x: 0,
      y: 1
    }, {
      x: 1,
      y: 1
    }]
  }, {
    coding: [{
      x: -1,
      y: -1
    }, {
      x: 0,
      y: -1
    }, {
      x: 1,
      y: -1
    }, {
      x: -1,
      y: 0
    }],
    reference: [{
      x: 0,
      y: -1
    }, {
      x: -1,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 0
    }, {
      x: 0,
      y: 1
    }, {
      x: 1,
      y: 1
    }]
  }];
  var ReusedContexts = [0x9B25, 0x0795, 0x00E5, 0x0195];
  var RefinementReusedContexts = [0x0020, 0x0008];
  function decodeBitmapTemplate0(width, height, decodingContext) {
    var decoder = decodingContext.decoder;
    var contexts = decodingContext.contextCache.getContexts('GB');
    var contextLabel,
        i,
        j,
        pixel,
        row,
        row1,
        row2,
        bitmap = [];
    var OLD_PIXEL_MASK = 0x7BF7;
    for (i = 0; i < height; i++) {
      row = bitmap[i] = new Uint8Array(width);
      row1 = i < 1 ? row : bitmap[i - 1];
      row2 = i < 2 ? row : bitmap[i - 2];
      contextLabel = row2[0] << 13 | row2[1] << 12 | row2[2] << 11 | row1[0] << 7 | row1[1] << 6 | row1[2] << 5 | row1[3] << 4;
      for (j = 0; j < width; j++) {
        row[j] = pixel = decoder.readBit(contexts, contextLabel);
        contextLabel = (contextLabel & OLD_PIXEL_MASK) << 1 | (j + 3 < width ? row2[j + 3] << 11 : 0) | (j + 4 < width ? row1[j + 4] << 4 : 0) | pixel;
      }
    }
    return bitmap;
  }
  function decodeBitmap(mmr, width, height, templateIndex, prediction, skip, at, decodingContext) {
    if (mmr) {
      var input = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
      return decodeMMRBitmap(input, width, height, false);
    }
    if (templateIndex === 0 && !skip && !prediction && at.length === 4 && at[0].x === 3 && at[0].y === -1 && at[1].x === -3 && at[1].y === -1 && at[2].x === 2 && at[2].y === -2 && at[3].x === -2 && at[3].y === -2) {
      return decodeBitmapTemplate0(width, height, decodingContext);
    }
    var useskip = !!skip;
    var template = CodingTemplates[templateIndex].concat(at);
    template.sort(function (a, b) {
      return a.y - b.y || a.x - b.x;
    });
    var templateLength = template.length;
    var templateX = new Int8Array(templateLength);
    var templateY = new Int8Array(templateLength);
    var changingTemplateEntries = [];
    var reuseMask = 0,
        minX = 0,
        maxX = 0,
        minY = 0;
    var c, k;
    for (k = 0; k < templateLength; k++) {
      templateX[k] = template[k].x;
      templateY[k] = template[k].y;
      minX = Math.min(minX, template[k].x);
      maxX = Math.max(maxX, template[k].x);
      minY = Math.min(minY, template[k].y);
      if (k < templateLength - 1 && template[k].y === template[k + 1].y && template[k].x === template[k + 1].x - 1) {
        reuseMask |= 1 << templateLength - 1 - k;
      } else {
        changingTemplateEntries.push(k);
      }
    }
    var changingEntriesLength = changingTemplateEntries.length;
    var changingTemplateX = new Int8Array(changingEntriesLength);
    var changingTemplateY = new Int8Array(changingEntriesLength);
    var changingTemplateBit = new Uint16Array(changingEntriesLength);
    for (c = 0; c < changingEntriesLength; c++) {
      k = changingTemplateEntries[c];
      changingTemplateX[c] = template[k].x;
      changingTemplateY[c] = template[k].y;
      changingTemplateBit[c] = 1 << templateLength - 1 - k;
    }
    var sbb_left = -minX;
    var sbb_top = -minY;
    var sbb_right = width - maxX;
    var pseudoPixelContext = ReusedContexts[templateIndex];
    var row = new Uint8Array(width);
    var bitmap = [];
    var decoder = decodingContext.decoder;
    var contexts = decodingContext.contextCache.getContexts('GB');
    var ltp = 0,
        j,
        i0,
        j0,
        contextLabel = 0,
        bit,
        shift;
    for (var i = 0; i < height; i++) {
      if (prediction) {
        var sltp = decoder.readBit(contexts, pseudoPixelContext);
        ltp ^= sltp;
        if (ltp) {
          bitmap.push(row);
          continue;
        }
      }
      row = new Uint8Array(row);
      bitmap.push(row);
      for (j = 0; j < width; j++) {
        if (useskip && skip[i][j]) {
          row[j] = 0;
          continue;
        }
        if (j >= sbb_left && j < sbb_right && i >= sbb_top) {
          contextLabel = contextLabel << 1 & reuseMask;
          for (k = 0; k < changingEntriesLength; k++) {
            i0 = i + changingTemplateY[k];
            j0 = j + changingTemplateX[k];
            bit = bitmap[i0][j0];
            if (bit) {
              bit = changingTemplateBit[k];
              contextLabel |= bit;
            }
          }
        } else {
          contextLabel = 0;
          shift = templateLength - 1;
          for (k = 0; k < templateLength; k++, shift--) {
            j0 = j + templateX[k];
            if (j0 >= 0 && j0 < width) {
              i0 = i + templateY[k];
              if (i0 >= 0) {
                bit = bitmap[i0][j0];
                if (bit) {
                  contextLabel |= bit << shift;
                }
              }
            }
          }
        }
        var pixel = decoder.readBit(contexts, contextLabel);
        row[j] = pixel;
      }
    }
    return bitmap;
  }
  function decodeRefinement(width, height, templateIndex, referenceBitmap, offsetX, offsetY, prediction, at, decodingContext) {
    var codingTemplate = RefinementTemplates[templateIndex].coding;
    if (templateIndex === 0) {
      codingTemplate = codingTemplate.concat([at[0]]);
    }
    var codingTemplateLength = codingTemplate.length;
    var codingTemplateX = new Int32Array(codingTemplateLength);
    var codingTemplateY = new Int32Array(codingTemplateLength);
    var k;
    for (k = 0; k < codingTemplateLength; k++) {
      codingTemplateX[k] = codingTemplate[k].x;
      codingTemplateY[k] = codingTemplate[k].y;
    }
    var referenceTemplate = RefinementTemplates[templateIndex].reference;
    if (templateIndex === 0) {
      referenceTemplate = referenceTemplate.concat([at[1]]);
    }
    var referenceTemplateLength = referenceTemplate.length;
    var referenceTemplateX = new Int32Array(referenceTemplateLength);
    var referenceTemplateY = new Int32Array(referenceTemplateLength);
    for (k = 0; k < referenceTemplateLength; k++) {
      referenceTemplateX[k] = referenceTemplate[k].x;
      referenceTemplateY[k] = referenceTemplate[k].y;
    }
    var referenceWidth = referenceBitmap[0].length;
    var referenceHeight = referenceBitmap.length;
    var pseudoPixelContext = RefinementReusedContexts[templateIndex];
    var bitmap = [];
    var decoder = decodingContext.decoder;
    var contexts = decodingContext.contextCache.getContexts('GR');
    var ltp = 0;
    for (var i = 0; i < height; i++) {
      if (prediction) {
        var sltp = decoder.readBit(contexts, pseudoPixelContext);
        ltp ^= sltp;
        if (ltp) {
          throw new Jbig2Error('prediction is not supported');
        }
      }
      var row = new Uint8Array(width);
      bitmap.push(row);
      for (var j = 0; j < width; j++) {
        var i0, j0;
        var contextLabel = 0;
        for (k = 0; k < codingTemplateLength; k++) {
          i0 = i + codingTemplateY[k];
          j0 = j + codingTemplateX[k];
          if (i0 < 0 || j0 < 0 || j0 >= width) {
            contextLabel <<= 1;
          } else {
            contextLabel = contextLabel << 1 | bitmap[i0][j0];
          }
        }
        for (k = 0; k < referenceTemplateLength; k++) {
          i0 = i + referenceTemplateY[k] - offsetY;
          j0 = j + referenceTemplateX[k] - offsetX;
          if (i0 < 0 || i0 >= referenceHeight || j0 < 0 || j0 >= referenceWidth) {
            contextLabel <<= 1;
          } else {
            contextLabel = contextLabel << 1 | referenceBitmap[i0][j0];
          }
        }
        var pixel = decoder.readBit(contexts, contextLabel);
        row[j] = pixel;
      }
    }
    return bitmap;
  }
  function decodeSymbolDictionary(huffman, refinement, symbols, numberOfNewSymbols, numberOfExportedSymbols, huffmanTables, templateIndex, at, refinementTemplateIndex, refinementAt, decodingContext, huffmanInput) {
    if (huffman && refinement) {
      throw new Jbig2Error('symbol refinement with Huffman is not supported');
    }
    var newSymbols = [];
    var currentHeight = 0;
    var symbolCodeLength = (0, _util.log2)(symbols.length + numberOfNewSymbols);
    var decoder = decodingContext.decoder;
    var contextCache = decodingContext.contextCache;
    var tableB1 = void 0,
        symbolWidths = void 0;
    if (huffman) {
      tableB1 = getStandardTable(1);
      symbolWidths = [];
      symbolCodeLength = Math.max(symbolCodeLength, 1);
    }
    while (newSymbols.length < numberOfNewSymbols) {
      var deltaHeight = huffman ? huffmanTables.tableDeltaHeight.decode(huffmanInput) : decodeInteger(contextCache, 'IADH', decoder);
      currentHeight += deltaHeight;
      var currentWidth = 0,
          totalWidth = 0;
      var firstSymbol = huffman ? symbolWidths.length : 0;
      while (true) {
        var deltaWidth = huffman ? huffmanTables.tableDeltaWidth.decode(huffmanInput) : decodeInteger(contextCache, 'IADW', decoder);
        if (deltaWidth === null) {
          break;
        }
        currentWidth += deltaWidth;
        totalWidth += currentWidth;
        var bitmap;
        if (refinement) {
          var numberOfInstances = decodeInteger(contextCache, 'IAAI', decoder);
          if (numberOfInstances > 1) {
            bitmap = decodeTextRegion(huffman, refinement, currentWidth, currentHeight, 0, numberOfInstances, 1, symbols.concat(newSymbols), symbolCodeLength, 0, 0, 1, 0, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, 0, huffmanInput);
          } else {
            var symbolId = decodeIAID(contextCache, decoder, symbolCodeLength);
            var rdx = decodeInteger(contextCache, 'IARDX', decoder);
            var rdy = decodeInteger(contextCache, 'IARDY', decoder);
            var symbol = symbolId < symbols.length ? symbols[symbolId] : newSymbols[symbolId - symbols.length];
            bitmap = decodeRefinement(currentWidth, currentHeight, refinementTemplateIndex, symbol, rdx, rdy, false, refinementAt, decodingContext);
          }
          newSymbols.push(bitmap);
        } else if (huffman) {
          symbolWidths.push(currentWidth);
        } else {
          bitmap = decodeBitmap(false, currentWidth, currentHeight, templateIndex, false, null, at, decodingContext);
          newSymbols.push(bitmap);
        }
      }
      if (huffman && !refinement) {
        var bitmapSize = huffmanTables.tableBitmapSize.decode(huffmanInput);
        huffmanInput.byteAlign();
        var collectiveBitmap = void 0;
        if (bitmapSize === 0) {
          collectiveBitmap = readUncompressedBitmap(huffmanInput, totalWidth, currentHeight);
        } else {
          var originalEnd = huffmanInput.end;
          var bitmapEnd = huffmanInput.position + bitmapSize;
          huffmanInput.end = bitmapEnd;
          collectiveBitmap = decodeMMRBitmap(huffmanInput, totalWidth, currentHeight, false);
          huffmanInput.end = originalEnd;
          huffmanInput.position = bitmapEnd;
        }
        var numberOfSymbolsDecoded = symbolWidths.length;
        if (firstSymbol === numberOfSymbolsDecoded - 1) {
          newSymbols.push(collectiveBitmap);
        } else {
          var _i = void 0,
              y = void 0,
              xMin = 0,
              xMax = void 0,
              bitmapWidth = void 0,
              symbolBitmap = void 0;
          for (_i = firstSymbol; _i < numberOfSymbolsDecoded; _i++) {
            bitmapWidth = symbolWidths[_i];
            xMax = xMin + bitmapWidth;
            symbolBitmap = [];
            for (y = 0; y < currentHeight; y++) {
              symbolBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
            }
            newSymbols.push(symbolBitmap);
            xMin = xMax;
          }
        }
      }
    }
    var exportedSymbols = [];
    var flags = [],
        currentFlag = false;
    var totalSymbolsLength = symbols.length + numberOfNewSymbols;
    while (flags.length < totalSymbolsLength) {
      var runLength = huffman ? tableB1.decode(huffmanInput) : decodeInteger(contextCache, 'IAEX', decoder);
      while (runLength--) {
        flags.push(currentFlag);
      }
      currentFlag = !currentFlag;
    }
    for (var i = 0, ii = symbols.length; i < ii; i++) {
      if (flags[i]) {
        exportedSymbols.push(symbols[i]);
      }
    }
    for (var j = 0; j < numberOfNewSymbols; i++, j++) {
      if (flags[i]) {
        exportedSymbols.push(newSymbols[j]);
      }
    }
    return exportedSymbols;
  }
  function decodeTextRegion(huffman, refinement, width, height, defaultPixelValue, numberOfSymbolInstances, stripSize, inputSymbols, symbolCodeLength, transposed, dsOffset, referenceCorner, combinationOperator, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, logStripSize, huffmanInput) {
    if (huffman && refinement) {
      throw new Jbig2Error('refinement with Huffman is not supported');
    }
    var bitmap = [];
    var i, row;
    for (i = 0; i < height; i++) {
      row = new Uint8Array(width);
      if (defaultPixelValue) {
        for (var j = 0; j < width; j++) {
          row[j] = defaultPixelValue;
        }
      }
      bitmap.push(row);
    }
    var decoder = decodingContext.decoder;
    var contextCache = decodingContext.contextCache;
    var stripT = huffman ? -huffmanTables.tableDeltaT.decode(huffmanInput) : -decodeInteger(contextCache, 'IADT', decoder);
    var firstS = 0;
    i = 0;
    while (i < numberOfSymbolInstances) {
      var deltaT = huffman ? huffmanTables.tableDeltaT.decode(huffmanInput) : decodeInteger(contextCache, 'IADT', decoder);
      stripT += deltaT;
      var deltaFirstS = huffman ? huffmanTables.tableFirstS.decode(huffmanInput) : decodeInteger(contextCache, 'IAFS', decoder);
      firstS += deltaFirstS;
      var currentS = firstS;
      do {
        var currentT = 0;
        if (stripSize > 1) {
          currentT = huffman ? huffmanInput.readBits(logStripSize) : decodeInteger(contextCache, 'IAIT', decoder);
        }
        var t = stripSize * stripT + currentT;
        var symbolId = huffman ? huffmanTables.symbolIDTable.decode(huffmanInput) : decodeIAID(contextCache, decoder, symbolCodeLength);
        var applyRefinement = refinement && (huffman ? huffmanInput.readBit() : decodeInteger(contextCache, 'IARI', decoder));
        var symbolBitmap = inputSymbols[symbolId];
        var symbolWidth = symbolBitmap[0].length;
        var symbolHeight = symbolBitmap.length;
        if (applyRefinement) {
          var rdw = decodeInteger(contextCache, 'IARDW', decoder);
          var rdh = decodeInteger(contextCache, 'IARDH', decoder);
          var rdx = decodeInteger(contextCache, 'IARDX', decoder);
          var rdy = decodeInteger(contextCache, 'IARDY', decoder);
          symbolWidth += rdw;
          symbolHeight += rdh;
          symbolBitmap = decodeRefinement(symbolWidth, symbolHeight, refinementTemplateIndex, symbolBitmap, (rdw >> 1) + rdx, (rdh >> 1) + rdy, false, refinementAt, decodingContext);
        }
        var offsetT = t - (referenceCorner & 1 ? 0 : symbolHeight - 1);
        var offsetS = currentS - (referenceCorner & 2 ? symbolWidth - 1 : 0);
        var s2, t2, symbolRow;
        if (transposed) {
          for (s2 = 0; s2 < symbolHeight; s2++) {
            row = bitmap[offsetS + s2];
            if (!row) {
              continue;
            }
            symbolRow = symbolBitmap[s2];
            var maxWidth = Math.min(width - offsetT, symbolWidth);
            switch (combinationOperator) {
              case 0:
                for (t2 = 0; t2 < maxWidth; t2++) {
                  row[offsetT + t2] |= symbolRow[t2];
                }
                break;
              case 2:
                for (t2 = 0; t2 < maxWidth; t2++) {
                  row[offsetT + t2] ^= symbolRow[t2];
                }
                break;
              default:
                throw new Jbig2Error('operator ' + combinationOperator + ' is not supported');
            }
          }
          currentS += symbolHeight - 1;
        } else {
          for (t2 = 0; t2 < symbolHeight; t2++) {
            row = bitmap[offsetT + t2];
            if (!row) {
              continue;
            }
            symbolRow = symbolBitmap[t2];
            switch (combinationOperator) {
              case 0:
                for (s2 = 0; s2 < symbolWidth; s2++) {
                  row[offsetS + s2] |= symbolRow[s2];
                }
                break;
              case 2:
                for (s2 = 0; s2 < symbolWidth; s2++) {
                  row[offsetS + s2] ^= symbolRow[s2];
                }
                break;
              default:
                throw new Jbig2Error('operator ' + combinationOperator + ' is not supported');
            }
          }
          currentS += symbolWidth - 1;
        }
        i++;
        var deltaS = huffman ? huffmanTables.tableDeltaS.decode(huffmanInput) : decodeInteger(contextCache, 'IADS', decoder);
        if (deltaS === null) {
          break;
        }
        currentS += deltaS + dsOffset;
      } while (true);
    }
    return bitmap;
  }
  function decodePatternDictionary(mmr, patternWidth, patternHeight, maxPatternIndex, template, decodingContext) {
    var at = [];
    if (!mmr) {
      at.push({
        x: -patternWidth,
        y: 0
      });
      if (template === 0) {
        at.push({
          x: -3,
          y: -1
        });
        at.push({
          x: 2,
          y: -2
        });
        at.push({
          x: -2,
          y: -2
        });
      }
    }
    var collectiveWidth = (maxPatternIndex + 1) * patternWidth;
    var collectiveBitmap = decodeBitmap(mmr, collectiveWidth, patternHeight, template, false, null, at, decodingContext);
    var patterns = [],
        i = 0,
        patternBitmap = void 0,
        xMin = void 0,
        xMax = void 0,
        y = void 0;
    while (i <= maxPatternIndex) {
      patternBitmap = [];
      xMin = patternWidth * i;
      xMax = xMin + patternWidth;
      for (y = 0; y < patternHeight; y++) {
        patternBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
      }
      patterns.push(patternBitmap);
      i++;
    }
    return patterns;
  }
  function decodeHalftoneRegion(mmr, patterns, template, regionWidth, regionHeight, defaultPixelValue, enableSkip, combinationOperator, gridWidth, gridHeight, gridOffsetX, gridOffsetY, gridVectorX, gridVectorY, decodingContext) {
    var skip = null;
    if (enableSkip) {
      throw new Jbig2Error('skip is not supported');
    }
    if (combinationOperator !== 0) {
      throw new Jbig2Error('operator ' + combinationOperator + ' is not supported in halftone region');
    }
    var regionBitmap = [];
    var i = void 0,
        j = void 0,
        row = void 0;
    for (i = 0; i < regionHeight; i++) {
      row = new Uint8Array(regionWidth);
      if (defaultPixelValue) {
        for (j = 0; j < regionWidth; j++) {
          row[j] = defaultPixelValue;
        }
      }
      regionBitmap.push(row);
    }
    var numberOfPatterns = patterns.length;
    var pattern0 = patterns[0];
    var patternWidth = pattern0[0].length,
        patternHeight = pattern0.length;
    var bitsPerValue = (0, _util.log2)(numberOfPatterns);
    var at = [];
    if (!mmr) {
      at.push({
        x: template <= 1 ? 3 : 2,
        y: -1
      });
      if (template === 0) {
        at.push({
          x: -3,
          y: -1
        });
        at.push({
          x: 2,
          y: -2
        });
        at.push({
          x: -2,
          y: -2
        });
      }
    }
    var grayScaleBitPlanes = [],
        mmrInput = void 0,
        bitmap = void 0;
    if (mmr) {
      mmrInput = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
    }
    for (i = bitsPerValue - 1; i >= 0; i--) {
      if (mmr) {
        bitmap = decodeMMRBitmap(mmrInput, gridWidth, gridHeight, true);
      } else {
        bitmap = decodeBitmap(false, gridWidth, gridHeight, template, false, skip, at, decodingContext);
      }
      grayScaleBitPlanes[i] = bitmap;
    }
    var mg = void 0,
        ng = void 0,
        bit = void 0,
        patternIndex = void 0,
        patternBitmap = void 0,
        x = void 0,
        y = void 0,
        patternRow = void 0,
        regionRow = void 0;
    for (mg = 0; mg < gridHeight; mg++) {
      for (ng = 0; ng < gridWidth; ng++) {
        bit = 0;
        patternIndex = 0;
        for (j = bitsPerValue - 1; j >= 0; j--) {
          bit = grayScaleBitPlanes[j][mg][ng] ^ bit;
          patternIndex |= bit << j;
        }
        patternBitmap = patterns[patternIndex];
        x = gridOffsetX + mg * gridVectorY + ng * gridVectorX >> 8;
        y = gridOffsetY + mg * gridVectorX - ng * gridVectorY >> 8;
        if (x >= 0 && x + patternWidth <= regionWidth && y >= 0 && y + patternHeight <= regionHeight) {
          for (i = 0; i < patternHeight; i++) {
            regionRow = regionBitmap[y + i];
            patternRow = patternBitmap[i];
            for (j = 0; j < patternWidth; j++) {
              regionRow[x + j] |= patternRow[j];
            }
          }
        } else {
          var regionX = void 0,
              regionY = void 0;
          for (i = 0; i < patternHeight; i++) {
            regionY = y + i;
            if (regionY < 0 || regionY >= regionHeight) {
              continue;
            }
            regionRow = regionBitmap[regionY];
            patternRow = patternBitmap[i];
            for (j = 0; j < patternWidth; j++) {
              regionX = x + j;
              if (regionX >= 0 && regionX < regionWidth) {
                regionRow[regionX] |= patternRow[j];
              }
            }
          }
        }
      }
    }
    return regionBitmap;
  }
  function readSegmentHeader(data, start) {
    var segmentHeader = {};
    segmentHeader.number = (0, _util.readUint32)(data, start);
    var flags = data[start + 4];
    var segmentType = flags & 0x3F;
    if (!SegmentTypes[segmentType]) {
      throw new Jbig2Error('invalid segment type: ' + segmentType);
    }
    segmentHeader.type = segmentType;
    segmentHeader.typeName = SegmentTypes[segmentType];
    segmentHeader.deferredNonRetain = !!(flags & 0x80);
    var pageAssociationFieldSize = !!(flags & 0x40);
    var referredFlags = data[start + 5];
    var referredToCount = referredFlags >> 5 & 7;
    var retainBits = [referredFlags & 31];
    var position = start + 6;
    if (referredFlags === 7) {
      referredToCount = (0, _util.readUint32)(data, position - 1) & 0x1FFFFFFF;
      position += 3;
      var bytes = referredToCount + 7 >> 3;
      retainBits[0] = data[position++];
      while (--bytes > 0) {
        retainBits.push(data[position++]);
      }
    } else if (referredFlags === 5 || referredFlags === 6) {
      throw new Jbig2Error('invalid referred-to flags');
    }
    segmentHeader.retainBits = retainBits;
    var referredToSegmentNumberSize = segmentHeader.number <= 256 ? 1 : segmentHeader.number <= 65536 ? 2 : 4;
    var referredTo = [];
    var i, ii;
    for (i = 0; i < referredToCount; i++) {
      var number = referredToSegmentNumberSize === 1 ? data[position] : referredToSegmentNumberSize === 2 ? (0, _util.readUint16)(data, position) : (0, _util.readUint32)(data, position);
      referredTo.push(number);
      position += referredToSegmentNumberSize;
    }
    segmentHeader.referredTo = referredTo;
    if (!pageAssociationFieldSize) {
      segmentHeader.pageAssociation = data[position++];
    } else {
      segmentHeader.pageAssociation = (0, _util.readUint32)(data, position);
      position += 4;
    }
    segmentHeader.length = (0, _util.readUint32)(data, position);
    position += 4;
    if (segmentHeader.length === 0xFFFFFFFF) {
      if (segmentType === 38) {
        var genericRegionInfo = readRegionSegmentInformation(data, position);
        var genericRegionSegmentFlags = data[position + RegionSegmentInformationFieldLength];
        var genericRegionMmr = !!(genericRegionSegmentFlags & 1);
        var searchPatternLength = 6;
        var searchPattern = new Uint8Array(searchPatternLength);
        if (!genericRegionMmr) {
          searchPattern[0] = 0xFF;
          searchPattern[1] = 0xAC;
        }
        searchPattern[2] = genericRegionInfo.height >>> 24 & 0xFF;
        searchPattern[3] = genericRegionInfo.height >> 16 & 0xFF;
        searchPattern[4] = genericRegionInfo.height >> 8 & 0xFF;
        searchPattern[5] = genericRegionInfo.height & 0xFF;
        for (i = position, ii = data.length; i < ii; i++) {
          var j = 0;
          while (j < searchPatternLength && searchPattern[j] === data[i + j]) {
            j++;
          }
          if (j === searchPatternLength) {
            segmentHeader.length = i + searchPatternLength;
            break;
          }
        }
        if (segmentHeader.length === 0xFFFFFFFF) {
          throw new Jbig2Error('segment end was not found');
        }
      } else {
        throw new Jbig2Error('invalid unknown segment length');
      }
    }
    segmentHeader.headerEnd = position;
    return segmentHeader;
  }
  function readSegments(header, data, start, end) {
    var segments = [];
    var position = start;
    while (position < end) {
      var segmentHeader = readSegmentHeader(data, position);
      position = segmentHeader.headerEnd;
      var segment = {
        header: segmentHeader,
        data: data
      };
      if (!header.randomAccess) {
        segment.start = position;
        position += segmentHeader.length;
        segment.end = position;
      }
      segments.push(segment);
      if (segmentHeader.type === 51) {
        break;
      }
    }
    if (header.randomAccess) {
      for (var i = 0, ii = segments.length; i < ii; i++) {
        segments[i].start = position;
        position += segments[i].header.length;
        segments[i].end = position;
      }
    }
    return segments;
  }
  function readRegionSegmentInformation(data, start) {
    return {
      width: (0, _util.readUint32)(data, start),
      height: (0, _util.readUint32)(data, start + 4),
      x: (0, _util.readUint32)(data, start + 8),
      y: (0, _util.readUint32)(data, start + 12),
      combinationOperator: data[start + 16] & 7
    };
  }
  var RegionSegmentInformationFieldLength = 17;
  function processSegment(segment, visitor) {
    var header = segment.header;
    var data = segment.data,
        position = segment.start,
        end = segment.end;
    var args, at, i, atLength;
    switch (header.type) {
      case 0:
        var dictionary = {};
        var dictionaryFlags = (0, _util.readUint16)(data, position);
        dictionary.huffman = !!(dictionaryFlags & 1);
        dictionary.refinement = !!(dictionaryFlags & 2);
        dictionary.huffmanDHSelector = dictionaryFlags >> 2 & 3;
        dictionary.huffmanDWSelector = dictionaryFlags >> 4 & 3;
        dictionary.bitmapSizeSelector = dictionaryFlags >> 6 & 1;
        dictionary.aggregationInstancesSelector = dictionaryFlags >> 7 & 1;
        dictionary.bitmapCodingContextUsed = !!(dictionaryFlags & 256);
        dictionary.bitmapCodingContextRetained = !!(dictionaryFlags & 512);
        dictionary.template = dictionaryFlags >> 10 & 3;
        dictionary.refinementTemplate = dictionaryFlags >> 12 & 1;
        position += 2;
        if (!dictionary.huffman) {
          atLength = dictionary.template === 0 ? 4 : 1;
          at = [];
          for (i = 0; i < atLength; i++) {
            at.push({
              x: (0, _util.readInt8)(data, position),
              y: (0, _util.readInt8)(data, position + 1)
            });
            position += 2;
          }
          dictionary.at = at;
        }
        if (dictionary.refinement && !dictionary.refinementTemplate) {
          at = [];
          for (i = 0; i < 2; i++) {
            at.push({
              x: (0, _util.readInt8)(data, position),
              y: (0, _util.readInt8)(data, position + 1)
            });
            position += 2;
          }
          dictionary.refinementAt = at;
        }
        dictionary.numberOfExportedSymbols = (0, _util.readUint32)(data, position);
        position += 4;
        dictionary.numberOfNewSymbols = (0, _util.readUint32)(data, position);
        position += 4;
        args = [dictionary, header.number, header.referredTo, data, position, end];
        break;
      case 6:
      case 7:
        var textRegion = {};
        textRegion.info = readRegionSegmentInformation(data, position);
        position += RegionSegmentInformationFieldLength;
        var textRegionSegmentFlags = (0, _util.readUint16)(data, position);
        position += 2;
        textRegion.huffman = !!(textRegionSegmentFlags & 1);
        textRegion.refinement = !!(textRegionSegmentFlags & 2);
        textRegion.logStripSize = textRegionSegmentFlags >> 2 & 3;
        textRegion.stripSize = 1 << textRegion.logStripSize;
        textRegion.referenceCorner = textRegionSegmentFlags >> 4 & 3;
        textRegion.transposed = !!(textRegionSegmentFlags & 64);
        textRegion.combinationOperator = textRegionSegmentFlags >> 7 & 3;
        textRegion.defaultPixelValue = textRegionSegmentFlags >> 9 & 1;
        textRegion.dsOffset = textRegionSegmentFlags << 17 >> 27;
        textRegion.refinementTemplate = textRegionSegmentFlags >> 15 & 1;
        if (textRegion.huffman) {
          var textRegionHuffmanFlags = (0, _util.readUint16)(data, position);
          position += 2;
          textRegion.huffmanFS = textRegionHuffmanFlags & 3;
          textRegion.huffmanDS = textRegionHuffmanFlags >> 2 & 3;
          textRegion.huffmanDT = textRegionHuffmanFlags >> 4 & 3;
          textRegion.huffmanRefinementDW = textRegionHuffmanFlags >> 6 & 3;
          textRegion.huffmanRefinementDH = textRegionHuffmanFlags >> 8 & 3;
          textRegion.huffmanRefinementDX = textRegionHuffmanFlags >> 10 & 3;
          textRegion.huffmanRefinementDY = textRegionHuffmanFlags >> 12 & 3;
          textRegion.huffmanRefinementSizeSelector = !!(textRegionHuffmanFlags & 0x4000);
        }
        if (textRegion.refinement && !textRegion.refinementTemplate) {
          at = [];
          for (i = 0; i < 2; i++) {
            at.push({
              x: (0, _util.readInt8)(data, position),
              y: (0, _util.readInt8)(data, position + 1)
            });
            position += 2;
          }
          textRegion.refinementAt = at;
        }
        textRegion.numberOfSymbolInstances = (0, _util.readUint32)(data, position);
        position += 4;
        args = [textRegion, header.referredTo, data, position, end];
        break;
      case 16:
        var patternDictionary = {};
        var patternDictionaryFlags = data[position++];
        patternDictionary.mmr = !!(patternDictionaryFlags & 1);
        patternDictionary.template = patternDictionaryFlags >> 1 & 3;
        patternDictionary.patternWidth = data[position++];
        patternDictionary.patternHeight = data[position++];
        patternDictionary.maxPatternIndex = (0, _util.readUint32)(data, position);
        position += 4;
        args = [patternDictionary, header.number, data, position, end];
        break;
      case 22:
      case 23:
        var halftoneRegion = {};
        halftoneRegion.info = readRegionSegmentInformation(data, position);
        position += RegionSegmentInformationFieldLength;
        var halftoneRegionFlags = data[position++];
        halftoneRegion.mmr = !!(halftoneRegionFlags & 1);
        halftoneRegion.template = halftoneRegionFlags >> 1 & 3;
        halftoneRegion.enableSkip = !!(halftoneRegionFlags & 8);
        halftoneRegion.combinationOperator = halftoneRegionFlags >> 4 & 7;
        halftoneRegion.defaultPixelValue = halftoneRegionFlags >> 7 & 1;
        halftoneRegion.gridWidth = (0, _util.readUint32)(data, position);
        position += 4;
        halftoneRegion.gridHeight = (0, _util.readUint32)(data, position);
        position += 4;
        halftoneRegion.gridOffsetX = (0, _util.readUint32)(data, position) & 0xFFFFFFFF;
        position += 4;
        halftoneRegion.gridOffsetY = (0, _util.readUint32)(data, position) & 0xFFFFFFFF;
        position += 4;
        halftoneRegion.gridVectorX = (0, _util.readUint16)(data, position);
        position += 2;
        halftoneRegion.gridVectorY = (0, _util.readUint16)(data, position);
        position += 2;
        args = [halftoneRegion, header.referredTo, data, position, end];
        break;
      case 38:
      case 39:
        var genericRegion = {};
        genericRegion.info = readRegionSegmentInformation(data, position);
        position += RegionSegmentInformationFieldLength;
        var genericRegionSegmentFlags = data[position++];
        genericRegion.mmr = !!(genericRegionSegmentFlags & 1);
        genericRegion.template = genericRegionSegmentFlags >> 1 & 3;
        genericRegion.prediction = !!(genericRegionSegmentFlags & 8);
        if (!genericRegion.mmr) {
          atLength = genericRegion.template === 0 ? 4 : 1;
          at = [];
          for (i = 0; i < atLength; i++) {
            at.push({
              x: (0, _util.readInt8)(data, position),
              y: (0, _util.readInt8)(data, position + 1)
            });
            position += 2;
          }
          genericRegion.at = at;
        }
        args = [genericRegion, data, position, end];
        break;
      case 48:
        var pageInfo = {
          width: (0, _util.readUint32)(data, position),
          height: (0, _util.readUint32)(data, position + 4),
          resolutionX: (0, _util.readUint32)(data, position + 8),
          resolutionY: (0, _util.readUint32)(data, position + 12)
        };
        if (pageInfo.height === 0xFFFFFFFF) {
          delete pageInfo.height;
        }
        var pageSegmentFlags = data[position + 16];
        (0, _util.readUint16)(data, position + 17);
        pageInfo.lossless = !!(pageSegmentFlags & 1);
        pageInfo.refinement = !!(pageSegmentFlags & 2);
        pageInfo.defaultPixelValue = pageSegmentFlags >> 2 & 1;
        pageInfo.combinationOperator = pageSegmentFlags >> 3 & 3;
        pageInfo.requiresBuffer = !!(pageSegmentFlags & 32);
        pageInfo.combinationOperatorOverride = !!(pageSegmentFlags & 64);
        args = [pageInfo];
        break;
      case 49:
        break;
      case 50:
        break;
      case 51:
        break;
      case 53:
        args = [header.number, data, position, end];
        break;
      case 62:
        break;
      default:
        throw new Jbig2Error('segment type ' + header.typeName + '(' + header.type + ')' + ' is not implemented');
    }
    var callbackName = 'on' + header.typeName;
    if (callbackName in visitor) {
      visitor[callbackName].apply(visitor, args);
    }
  }
  function processSegments(segments, visitor) {
    for (var i = 0, ii = segments.length; i < ii; i++) {
      processSegment(segments[i], visitor);
    }
  }
  function parseJbig2Chunks(chunks) {
    var visitor = new SimpleSegmentVisitor();
    for (var i = 0, ii = chunks.length; i < ii; i++) {
      var chunk = chunks[i];
      var segments = readSegments({}, chunk.data, chunk.start, chunk.end);
      processSegments(segments, visitor);
    }
    return visitor.buffer;
  }
  function parseJbig2(data) {
    var position = 0,
        end = data.length;
    if (data[position] !== 0x97 || data[position + 1] !== 0x4A || data[position + 2] !== 0x42 || data[position + 3] !== 0x32 || data[position + 4] !== 0x0D || data[position + 5] !== 0x0A || data[position + 6] !== 0x1A || data[position + 7] !== 0x0A) {
      throw new Jbig2Error('parseJbig2 - invalid header.');
    }
    var header = Object.create(null);
    position += 8;
    var flags = data[position++];
    header.randomAccess = !(flags & 1);
    if (!(flags & 2)) {
      header.numberOfPages = (0, _util.readUint32)(data, position);
      position += 4;
    }
    var segments = readSegments(header, data, position, end);
    var visitor = new SimpleSegmentVisitor();
    processSegments(segments, visitor);
    var _visitor$currentPageI = visitor.currentPageInfo,
        width = _visitor$currentPageI.width,
        height = _visitor$currentPageI.height;

    var bitPacked = visitor.buffer;
    var imgData = new Uint8ClampedArray(width * height);
    var q = 0,
        k = 0;
    for (var i = 0; i < height; i++) {
      var mask = 0,
          buffer = void 0;
      for (var j = 0; j < width; j++) {
        if (!mask) {
          mask = 128;
          buffer = bitPacked[k++];
        }
        imgData[q++] = buffer & mask ? 0 : 255;
        mask >>= 1;
      }
    }
    return {
      imgData: imgData,
      width: width,
      height: height
    };
  }
  function SimpleSegmentVisitor() {}
  SimpleSegmentVisitor.prototype = {
    onPageInformation: function SimpleSegmentVisitor_onPageInformation(info) {
      this.currentPageInfo = info;
      var rowSize = info.width + 7 >> 3;
      var buffer = new Uint8ClampedArray(rowSize * info.height);
      if (info.defaultPixelValue) {
        for (var i = 0, ii = buffer.length; i < ii; i++) {
          buffer[i] = 0xFF;
        }
      }
      this.buffer = buffer;
    },
    drawBitmap: function SimpleSegmentVisitor_drawBitmap(regionInfo, bitmap) {
      var pageInfo = this.currentPageInfo;
      var width = regionInfo.width,
          height = regionInfo.height;
      var rowSize = pageInfo.width + 7 >> 3;
      var combinationOperator = pageInfo.combinationOperatorOverride ? regionInfo.combinationOperator : pageInfo.combinationOperator;
      var buffer = this.buffer;
      var mask0 = 128 >> (regionInfo.x & 7);
      var offset0 = regionInfo.y * rowSize + (regionInfo.x >> 3);
      var i, j, mask, offset;
      switch (combinationOperator) {
        case 0:
          for (i = 0; i < height; i++) {
            mask = mask0;
            offset = offset0;
            for (j = 0; j < width; j++) {
              if (bitmap[i][j]) {
                buffer[offset] |= mask;
              }
              mask >>= 1;
              if (!mask) {
                mask = 128;
                offset++;
              }
            }
            offset0 += rowSize;
          }
          break;
        case 2:
          for (i = 0; i < height; i++) {
            mask = mask0;
            offset = offset0;
            for (j = 0; j < width; j++) {
              if (bitmap[i][j]) {
                buffer[offset] ^= mask;
              }
              mask >>= 1;
              if (!mask) {
                mask = 128;
                offset++;
              }
            }
            offset0 += rowSize;
          }
          break;
        default:
          throw new Jbig2Error('operator ' + combinationOperator + ' is not supported');
      }
    },
    onImmediateGenericRegion: function SimpleSegmentVisitor_onImmediateGenericRegion(region, data, start, end) {
      var regionInfo = region.info;
      var decodingContext = new DecodingContext(data, start, end);
      var bitmap = decodeBitmap(region.mmr, regionInfo.width, regionInfo.height, region.template, region.prediction, null, region.at, decodingContext);
      this.drawBitmap(regionInfo, bitmap);
    },
    onImmediateLosslessGenericRegion: function SimpleSegmentVisitor_onImmediateLosslessGenericRegion() {
      this.onImmediateGenericRegion.apply(this, arguments);
    },
    onSymbolDictionary: function SimpleSegmentVisitor_onSymbolDictionary(dictionary, currentSegment, referredSegments, data, start, end) {
      var huffmanTables = void 0,
          huffmanInput = void 0;
      if (dictionary.huffman) {
        huffmanTables = getSymbolDictionaryHuffmanTables(dictionary, referredSegments, this.customTables);
        huffmanInput = new Reader(data, start, end);
      }
      var symbols = this.symbols;
      if (!symbols) {
        this.symbols = symbols = {};
      }
      var inputSymbols = [];
      for (var i = 0, ii = referredSegments.length; i < ii; i++) {
        var referredSymbols = symbols[referredSegments[i]];
        if (referredSymbols) {
          inputSymbols = inputSymbols.concat(referredSymbols);
        }
      }
      var decodingContext = new DecodingContext(data, start, end);
      symbols[currentSegment] = decodeSymbolDictionary(dictionary.huffman, dictionary.refinement, inputSymbols, dictionary.numberOfNewSymbols, dictionary.numberOfExportedSymbols, huffmanTables, dictionary.template, dictionary.at, dictionary.refinementTemplate, dictionary.refinementAt, decodingContext, huffmanInput);
    },
    onImmediateTextRegion: function SimpleSegmentVisitor_onImmediateTextRegion(region, referredSegments, data, start, end) {
      var regionInfo = region.info;
      var huffmanTables = void 0,
          huffmanInput = void 0;
      var symbols = this.symbols;
      var inputSymbols = [];
      for (var i = 0, ii = referredSegments.length; i < ii; i++) {
        var referredSymbols = symbols[referredSegments[i]];
        if (referredSymbols) {
          inputSymbols = inputSymbols.concat(referredSymbols);
        }
      }
      var symbolCodeLength = (0, _util.log2)(inputSymbols.length);
      if (region.huffman) {
        huffmanInput = new Reader(data, start, end);
        huffmanTables = getTextRegionHuffmanTables(region, referredSegments, this.customTables, inputSymbols.length, huffmanInput);
      }
      var decodingContext = new DecodingContext(data, start, end);
      var bitmap = decodeTextRegion(region.huffman, region.refinement, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.numberOfSymbolInstances, region.stripSize, inputSymbols, symbolCodeLength, region.transposed, region.dsOffset, region.referenceCorner, region.combinationOperator, huffmanTables, region.refinementTemplate, region.refinementAt, decodingContext, region.logStripSize, huffmanInput);
      this.drawBitmap(regionInfo, bitmap);
    },
    onImmediateLosslessTextRegion: function SimpleSegmentVisitor_onImmediateLosslessTextRegion() {
      this.onImmediateTextRegion.apply(this, arguments);
    },
    onPatternDictionary: function onPatternDictionary(dictionary, currentSegment, data, start, end) {
      var patterns = this.patterns;
      if (!patterns) {
        this.patterns = patterns = {};
      }
      var decodingContext = new DecodingContext(data, start, end);
      patterns[currentSegment] = decodePatternDictionary(dictionary.mmr, dictionary.patternWidth, dictionary.patternHeight, dictionary.maxPatternIndex, dictionary.template, decodingContext);
    },
    onImmediateHalftoneRegion: function onImmediateHalftoneRegion(region, referredSegments, data, start, end) {
      var patterns = this.patterns[referredSegments[0]];
      var regionInfo = region.info;
      var decodingContext = new DecodingContext(data, start, end);
      var bitmap = decodeHalftoneRegion(region.mmr, patterns, region.template, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.enableSkip, region.combinationOperator, region.gridWidth, region.gridHeight, region.gridOffsetX, region.gridOffsetY, region.gridVectorX, region.gridVectorY, decodingContext);
      this.drawBitmap(regionInfo, bitmap);
    },
    onImmediateLosslessHalftoneRegion: function onImmediateLosslessHalftoneRegion() {
      this.onImmediateHalftoneRegion.apply(this, arguments);
    },
    onTables: function onTables(currentSegment, data, start, end) {
      var customTables = this.customTables;
      if (!customTables) {
        this.customTables = customTables = {};
      }
      customTables[currentSegment] = decodeTablesSegment(data, start, end);
    }
  };
  function HuffmanLine(lineData) {
    if (lineData.length === 2) {
      this.isOOB = true;
      this.rangeLow = 0;
      this.prefixLength = lineData[0];
      this.rangeLength = 0;
      this.prefixCode = lineData[1];
      this.isLowerRange = false;
    } else {
      this.isOOB = false;
      this.rangeLow = lineData[0];
      this.prefixLength = lineData[1];
      this.rangeLength = lineData[2];
      this.prefixCode = lineData[3];
      this.isLowerRange = lineData[4] === 'lower';
    }
  }
  function HuffmanTreeNode(line) {
    this.children = [];
    if (line) {
      this.isLeaf = true;
      this.rangeLength = line.rangeLength;
      this.rangeLow = line.rangeLow;
      this.isLowerRange = line.isLowerRange;
      this.isOOB = line.isOOB;
    } else {
      this.isLeaf = false;
    }
  }
  HuffmanTreeNode.prototype = {
    buildTree: function buildTree(line, shift) {
      var bit = line.prefixCode >> shift & 1;
      if (shift <= 0) {
        this.children[bit] = new HuffmanTreeNode(line);
      } else {
        var node = this.children[bit];
        if (!node) {
          this.children[bit] = node = new HuffmanTreeNode(null);
        }
        node.buildTree(line, shift - 1);
      }
    },
    decodeNode: function decodeNode(reader) {
      if (this.isLeaf) {
        if (this.isOOB) {
          return null;
        }
        var htOffset = reader.readBits(this.rangeLength);
        return this.rangeLow + (this.isLowerRange ? -htOffset : htOffset);
      }
      var node = this.children[reader.readBit()];
      if (!node) {
        throw new Jbig2Error('invalid Huffman data');
      }
      return node.decodeNode(reader);
    }
  };
  function HuffmanTable(lines, prefixCodesDone) {
    if (!prefixCodesDone) {
      this.assignPrefixCodes(lines);
    }
    this.rootNode = new HuffmanTreeNode(null);
    var i = void 0,
        ii = lines.length,
        line = void 0;
    for (i = 0; i < ii; i++) {
      line = lines[i];
      if (line.prefixLength > 0) {
        this.rootNode.buildTree(line, line.prefixLength - 1);
      }
    }
  }
  HuffmanTable.prototype = {
    decode: function decode(reader) {
      return this.rootNode.decodeNode(reader);
    },
    assignPrefixCodes: function assignPrefixCodes(lines) {
      var linesLength = lines.length,
          prefixLengthMax = 0,
          i = void 0;
      for (i = 0; i < linesLength; i++) {
        prefixLengthMax = Math.max(prefixLengthMax, lines[i].prefixLength);
      }
      var histogram = new Uint32Array(prefixLengthMax + 1);
      for (i = 0; i < linesLength; i++) {
        histogram[lines[i].prefixLength]++;
      }
      var currentLength = 1,
          firstCode = 0,
          currentCode = void 0,
          currentTemp = void 0,
          line = void 0;
      histogram[0] = 0;
      while (currentLength <= prefixLengthMax) {
        firstCode = firstCode + histogram[currentLength - 1] << 1;
        currentCode = firstCode;
        currentTemp = 0;
        while (currentTemp < linesLength) {
          line = lines[currentTemp];
          if (line.prefixLength === currentLength) {
            line.prefixCode = currentCode;
            currentCode++;
          }
          currentTemp++;
        }
        currentLength++;
      }
    }
  };
  function decodeTablesSegment(data, start, end) {
    var flags = data[start];
    var lowestValue = (0, _util.readUint32)(data, start + 1) & 0xFFFFFFFF;
    var highestValue = (0, _util.readUint32)(data, start + 5) & 0xFFFFFFFF;
    var reader = new Reader(data, start + 9, end);
    var prefixSizeBits = (flags >> 1 & 7) + 1;
    var rangeSizeBits = (flags >> 4 & 7) + 1;
    var lines = [];
    var prefixLength = void 0,
        rangeLength = void 0,
        currentRangeLow = lowestValue;
    do {
      prefixLength = reader.readBits(prefixSizeBits);
      rangeLength = reader.readBits(rangeSizeBits);
      lines.push(new HuffmanLine([currentRangeLow, prefixLength, rangeLength, 0]));
      currentRangeLow += 1 << rangeLength;
    } while (currentRangeLow < highestValue);
    prefixLength = reader.readBits(prefixSizeBits);
    lines.push(new HuffmanLine([lowestValue - 1, prefixLength, 32, 0, 'lower']));
    prefixLength = reader.readBits(prefixSizeBits);
    lines.push(new HuffmanLine([highestValue, prefixLength, 32, 0]));
    if (flags & 1) {
      prefixLength = reader.readBits(prefixSizeBits);
      lines.push(new HuffmanLine([prefixLength, 0]));
    }
    return new HuffmanTable(lines, false);
  }
  var standardTablesCache = {};
  function getStandardTable(number) {
    var table = standardTablesCache[number];
    if (table) {
      return table;
    }
    var lines = void 0;
    switch (number) {
      case 1:
        lines = [[0, 1, 4, 0x0], [16, 2, 8, 0x2], [272, 3, 16, 0x6], [65808, 3, 32, 0x7]];
        break;
      case 2:
        lines = [[0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xE], [11, 5, 6, 0x1E], [75, 6, 32, 0x3E], [6, 0x3F]];
        break;
      case 3:
        lines = [[-256, 8, 8, 0xFE], [0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xE], [11, 5, 6, 0x1E], [-257, 8, 32, 0xFF, 'lower'], [75, 7, 32, 0x7E], [6, 0x3E]];
        break;
      case 4:
        lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xE], [12, 5, 6, 0x1E], [76, 5, 32, 0x1F]];
        break;
      case 5:
        lines = [[-255, 7, 8, 0x7E], [1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xE], [12, 5, 6, 0x1E], [-256, 7, 32, 0x7F, 'lower'], [76, 6, 32, 0x3E]];
        break;
      case 6:
        lines = [[-2048, 5, 10, 0x1C], [-1024, 4, 9, 0x8], [-512, 4, 8, 0x9], [-256, 4, 7, 0xA], [-128, 5, 6, 0x1D], [-64, 5, 5, 0x1E], [-32, 4, 5, 0xB], [0, 2, 7, 0x0], [128, 3, 7, 0x2], [256, 3, 8, 0x3], [512, 4, 9, 0xC], [1024, 4, 10, 0xD], [-2049, 6, 32, 0x3E, 'lower'], [2048, 6, 32, 0x3F]];
        break;
      case 7:
        lines = [[-1024, 4, 9, 0x8], [-512, 3, 8, 0x0], [-256, 4, 7, 0x9], [-128, 5, 6, 0x1A], [-64, 5, 5, 0x1B], [-32, 4, 5, 0xA], [0, 4, 5, 0xB], [32, 5, 5, 0x1C], [64, 5, 6, 0x1D], [128, 4, 7, 0xC], [256, 3, 8, 0x1], [512, 3, 9, 0x2], [1024, 3, 10, 0x3], [-1025, 5, 32, 0x1E, 'lower'], [2048, 5, 32, 0x1F]];
        break;
      case 8:
        lines = [[-15, 8, 3, 0xFC], [-7, 9, 1, 0x1FC], [-5, 8, 1, 0xFD], [-3, 9, 0, 0x1FD], [-2, 7, 0, 0x7C], [-1, 4, 0, 0xA], [0, 2, 1, 0x0], [2, 5, 0, 0x1A], [3, 6, 0, 0x3A], [4, 3, 4, 0x4], [20, 6, 1, 0x3B], [22, 4, 4, 0xB], [38, 4, 5, 0xC], [70, 5, 6, 0x1B], [134, 5, 7, 0x1C], [262, 6, 7, 0x3C], [390, 7, 8, 0x7D], [646, 6, 10, 0x3D], [-16, 9, 32, 0x1FE, 'lower'], [1670, 9, 32, 0x1FF], [2, 0x1]];
        break;
      case 9:
        lines = [[-31, 8, 4, 0xFC], [-15, 9, 2, 0x1FC], [-11, 8, 2, 0xFD], [-7, 9, 1, 0x1FD], [-5, 7, 1, 0x7C], [-3, 4, 1, 0xA], [-1, 3, 1, 0x2], [1, 3, 1, 0x3], [3, 5, 1, 0x1A], [5, 6, 1, 0x3A], [7, 3, 5, 0x4], [39, 6, 2, 0x3B], [43, 4, 5, 0xB], [75, 4, 6, 0xC], [139, 5, 7, 0x1B], [267, 5, 8, 0x1C], [523, 6, 8, 0x3C], [779, 7, 9, 0x7D], [1291, 6, 11, 0x3D], [-32, 9, 32, 0x1FE, 'lower'], [3339, 9, 32, 0x1FF], [2, 0x0]];
        break;
      case 10:
        lines = [[-21, 7, 4, 0x7A], [-5, 8, 0, 0xFC], [-4, 7, 0, 0x7B], [-3, 5, 0, 0x18], [-2, 2, 2, 0x0], [2, 5, 0, 0x19], [3, 6, 0, 0x36], [4, 7, 0, 0x7C], [5, 8, 0, 0xFD], [6, 2, 6, 0x1], [70, 5, 5, 0x1A], [102, 6, 5, 0x37], [134, 6, 6, 0x38], [198, 6, 7, 0x39], [326, 6, 8, 0x3A], [582, 6, 9, 0x3B], [1094, 6, 10, 0x3C], [2118, 7, 11, 0x7D], [-22, 8, 32, 0xFE, 'lower'], [4166, 8, 32, 0xFF], [2, 0x2]];
        break;
      case 11:
        lines = [[1, 1, 0, 0x0], [2, 2, 1, 0x2], [4, 4, 0, 0xC], [5, 4, 1, 0xD], [7, 5, 1, 0x1C], [9, 5, 2, 0x1D], [13, 6, 2, 0x3C], [17, 7, 2, 0x7A], [21, 7, 3, 0x7B], [29, 7, 4, 0x7C], [45, 7, 5, 0x7D], [77, 7, 6, 0x7E], [141, 7, 32, 0x7F]];
        break;
      case 12:
        lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 1, 0x6], [5, 5, 0, 0x1C], [6, 5, 1, 0x1D], [8, 6, 1, 0x3C], [10, 7, 0, 0x7A], [11, 7, 1, 0x7B], [13, 7, 2, 0x7C], [17, 7, 3, 0x7D], [25, 7, 4, 0x7E], [41, 8, 5, 0xFE], [73, 8, 32, 0xFF]];
        break;
      case 13:
        lines = [[1, 1, 0, 0x0], [2, 3, 0, 0x4], [3, 4, 0, 0xC], [4, 5, 0, 0x1C], [5, 4, 1, 0xD], [7, 3, 3, 0x5], [15, 6, 1, 0x3A], [17, 6, 2, 0x3B], [21, 6, 3, 0x3C], [29, 6, 4, 0x3D], [45, 6, 5, 0x3E], [77, 7, 6, 0x7E], [141, 7, 32, 0x7F]];
        break;
      case 14:
        lines = [[-2, 3, 0, 0x4], [-1, 3, 0, 0x5], [0, 1, 0, 0x0], [1, 3, 0, 0x6], [2, 3, 0, 0x7]];
        break;
      case 15:
        lines = [[-24, 7, 4, 0x7C], [-8, 6, 2, 0x3C], [-4, 5, 1, 0x1C], [-2, 4, 0, 0xC], [-1, 3, 0, 0x4], [0, 1, 0, 0x0], [1, 3, 0, 0x5], [2, 4, 0, 0xD], [3, 5, 1, 0x1D], [5, 6, 2, 0x3D], [9, 7, 4, 0x7D], [-25, 7, 32, 0x7E, 'lower'], [25, 7, 32, 0x7F]];
        break;
      default:
        throw new Jbig2Error('standard table B.' + number + ' does not exist');
    }
    var length = lines.length,
        i = void 0;
    for (i = 0; i < length; i++) {
      lines[i] = new HuffmanLine(lines[i]);
    }
    table = new HuffmanTable(lines, true);
    standardTablesCache[number] = table;
    return table;
  }
  function Reader(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
    this.position = start;
    this.shift = -1;
    this.currentByte = 0;
  }
  Reader.prototype = {
    readBit: function readBit() {
      if (this.shift < 0) {
        if (this.position >= this.end) {
          throw new Jbig2Error('end of data while reading bit');
        }
        this.currentByte = this.data[this.position++];
        this.shift = 7;
      }
      var bit = this.currentByte >> this.shift & 1;
      this.shift--;
      return bit;
    },
    readBits: function readBits(numBits) {
      var result = 0,
          i = void 0;
      for (i = numBits - 1; i >= 0; i--) {
        result |= this.readBit() << i;
      }
      return result;
    },
    byteAlign: function byteAlign() {
      this.shift = -1;
    },
    next: function next() {
      if (this.position >= this.end) {
        return -1;
      }
      return this.data[this.position++];
    }
  };
  function getCustomHuffmanTable(index, referredTo, customTables) {
    var currentIndex = 0,
        i = void 0,
        ii = referredTo.length,
        table = void 0;
    for (i = 0; i < ii; i++) {
      table = customTables[referredTo[i]];
      if (table) {
        if (index === currentIndex) {
          return table;
        }
        currentIndex++;
      }
    }
    throw new Jbig2Error('can\'t find custom Huffman table');
  }
  function getTextRegionHuffmanTables(textRegion, referredTo, customTables, numberOfSymbols, reader) {
    var codes = [],
        i = void 0,
        codeLength = void 0;
    for (i = 0; i <= 34; i++) {
      codeLength = reader.readBits(4);
      codes.push(new HuffmanLine([i, codeLength, 0, 0]));
    }
    var runCodesTable = new HuffmanTable(codes, false);
    codes.length = 0;
    for (i = 0; i < numberOfSymbols;) {
      codeLength = runCodesTable.decode(reader);
      if (codeLength >= 32) {
        var repeatedLength = void 0,
            numberOfRepeats = void 0,
            j = void 0;
        switch (codeLength) {
          case 32:
            if (i === 0) {
              throw new Jbig2Error('no previous value in symbol ID table');
            }
            numberOfRepeats = reader.readBits(2) + 3;
            repeatedLength = codes[i - 1].prefixLength;
            break;
          case 33:
            numberOfRepeats = reader.readBits(3) + 3;
            repeatedLength = 0;
            break;
          case 34:
            numberOfRepeats = reader.readBits(7) + 11;
            repeatedLength = 0;
            break;
          default:
            throw new Jbig2Error('invalid code length in symbol ID table');
        }
        for (j = 0; j < numberOfRepeats; j++) {
          codes.push(new HuffmanLine([i, repeatedLength, 0, 0]));
          i++;
        }
      } else {
        codes.push(new HuffmanLine([i, codeLength, 0, 0]));
        i++;
      }
    }
    reader.byteAlign();
    var symbolIDTable = new HuffmanTable(codes, false);
    var customIndex = 0,
        tableFirstS = void 0,
        tableDeltaS = void 0,
        tableDeltaT = void 0;
    switch (textRegion.huffmanFS) {
      case 0:
      case 1:
        tableFirstS = getStandardTable(textRegion.huffmanFS + 6);
        break;
      case 3:
        tableFirstS = getCustomHuffmanTable(customIndex, referredTo, customTables);
        customIndex++;
        break;
      default:
        throw new Jbig2Error('invalid Huffman FS selector');
    }
    switch (textRegion.huffmanDS) {
      case 0:
      case 1:
      case 2:
        tableDeltaS = getStandardTable(textRegion.huffmanDS + 8);
        break;
      case 3:
        tableDeltaS = getCustomHuffmanTable(customIndex, referredTo, customTables);
        customIndex++;
        break;
      default:
        throw new Jbig2Error('invalid Huffman DS selector');
    }
    switch (textRegion.huffmanDT) {
      case 0:
      case 1:
      case 2:
        tableDeltaT = getStandardTable(textRegion.huffmanDT + 11);
        break;
      case 3:
        tableDeltaT = getCustomHuffmanTable(customIndex, referredTo, customTables);
        customIndex++;
        break;
      default:
        throw new Jbig2Error('invalid Huffman DT selector');
    }
    if (textRegion.refinement) {
      throw new Jbig2Error('refinement with Huffman is not supported');
    }
    return {
      symbolIDTable: symbolIDTable,
      tableFirstS: tableFirstS,
      tableDeltaS: tableDeltaS,
      tableDeltaT: tableDeltaT
    };
  }
  function getSymbolDictionaryHuffmanTables(dictionary, referredTo, customTables) {
    var customIndex = 0,
        tableDeltaHeight = void 0,
        tableDeltaWidth = void 0;
    switch (dictionary.huffmanDHSelector) {
      case 0:
      case 1:
        tableDeltaHeight = getStandardTable(dictionary.huffmanDHSelector + 4);
        break;
      case 3:
        tableDeltaHeight = getCustomHuffmanTable(customIndex, referredTo, customTables);
        customIndex++;
        break;
      default:
        throw new Jbig2Error('invalid Huffman DH selector');
    }
    switch (dictionary.huffmanDWSelector) {
      case 0:
      case 1:
        tableDeltaWidth = getStandardTable(dictionary.huffmanDWSelector + 2);
        break;
      case 3:
        tableDeltaWidth = getCustomHuffmanTable(customIndex, referredTo, customTables);
        customIndex++;
        break;
      default:
        throw new Jbig2Error('invalid Huffman DW selector');
    }
    var tableBitmapSize = void 0,
        tableAggregateInstances = void 0;
    if (dictionary.bitmapSizeSelector) {
      tableBitmapSize = getCustomHuffmanTable(customIndex, referredTo, customTables);
      customIndex++;
    } else {
      tableBitmapSize = getStandardTable(1);
    }
    if (dictionary.aggregationInstancesSelector) {
      tableAggregateInstances = getCustomHuffmanTable(customIndex, referredTo, customTables);
    } else {
      tableAggregateInstances = getStandardTable(1);
    }
    return {
      tableDeltaHeight: tableDeltaHeight,
      tableDeltaWidth: tableDeltaWidth,
      tableBitmapSize: tableBitmapSize,
      tableAggregateInstances: tableAggregateInstances
    };
  }
  function readUncompressedBitmap(reader, width, height) {
    var bitmap = [],
        x = void 0,
        y = void 0,
        row = void 0;
    for (y = 0; y < height; y++) {
      row = new Uint8Array(width);
      bitmap.push(row);
      for (x = 0; x < width; x++) {
        row[x] = reader.readBit();
      }
      reader.byteAlign();
    }
    return bitmap;
  }
  function decodeMMRBitmap(input, width, height, endOfBlock) {
    var params = {
      K: -1,
      Columns: width,
      Rows: height,
      BlackIs1: true,
      EndOfBlock: endOfBlock
    };
    var decoder = new _ccitt.CCITTFaxDecoder(input, params);
    var bitmap = [],
        x = void 0,
        y = void 0,
        row = void 0,
        currentByte = void 0,
        shift = void 0,
        eof = false;
    for (y = 0; y < height; y++) {
      row = new Uint8Array(width);
      bitmap.push(row);
      shift = -1;
      for (x = 0; x < width; x++) {
        if (shift < 0) {
          currentByte = decoder.readNextChar();
          if (currentByte === -1) {
            currentByte = 0;
            eof = true;
          }
          shift = 7;
        }
        row[x] = currentByte >> shift & 1;
        shift--;
      }
    }
    if (endOfBlock && !eof) {
      var lookForEOFLimit = 5;
      for (var i = 0; i < lookForEOFLimit; i++) {
        if (decoder.readNextChar() === -1) {
          break;
        }
      }
    }
    return bitmap;
  }
  function Jbig2Image() {}
  Jbig2Image.prototype = {
    parseChunks: function parseChunks(chunks) {
      return parseJbig2Chunks(chunks);
    },
    parse: function parse(data) {
      var _parseJbig = parseJbig2(data),
          imgData = _parseJbig.imgData,
          width = _parseJbig.width,
          height = _parseJbig.height;

      this.width = width;
      this.height = height;
      return imgData;
    }
  };
  return Jbig2Image;
}();
exports.Jbig2Image = Jbig2Image;

/***/ }),
/* 130 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ArithmeticDecoder = function ArithmeticDecoderClosure() {
  var QeTable = [{
    qe: 0x5601,
    nmps: 1,
    nlps: 1,
    switchFlag: 1
  }, {
    qe: 0x3401,
    nmps: 2,
    nlps: 6,
    switchFlag: 0
  }, {
    qe: 0x1801,
    nmps: 3,
    nlps: 9,
    switchFlag: 0
  }, {
    qe: 0x0AC1,
    nmps: 4,
    nlps: 12,
    switchFlag: 0
  }, {
    qe: 0x0521,
    nmps: 5,
    nlps: 29,
    switchFlag: 0
  }, {
    qe: 0x0221,
    nmps: 38,
    nlps: 33,
    switchFlag: 0
  }, {
    qe: 0x5601,
    nmps: 7,
    nlps: 6,
    switchFlag: 1
  }, {
    qe: 0x5401,
    nmps: 8,
    nlps: 14,
    switchFlag: 0
  }, {
    qe: 0x4801,
    nmps: 9,
    nlps: 14,
    switchFlag: 0
  }, {
    qe: 0x3801,
    nmps: 10,
    nlps: 14,
    switchFlag: 0
  }, {
    qe: 0x3001,
    nmps: 11,
    nlps: 17,
    switchFlag: 0
  }, {
    qe: 0x2401,
    nmps: 12,
    nlps: 18,
    switchFlag: 0
  }, {
    qe: 0x1C01,
    nmps: 13,
    nlps: 20,
    switchFlag: 0
  }, {
    qe: 0x1601,
    nmps: 29,
    nlps: 21,
    switchFlag: 0
  }, {
    qe: 0x5601,
    nmps: 15,
    nlps: 14,
    switchFlag: 1
  }, {
    qe: 0x5401,
    nmps: 16,
    nlps: 14,
    switchFlag: 0
  }, {
    qe: 0x5101,
    nmps: 17,
    nlps: 15,
    switchFlag: 0
  }, {
    qe: 0x4801,
    nmps: 18,
    nlps: 16,
    switchFlag: 0
  }, {
    qe: 0x3801,
    nmps: 19,
    nlps: 17,
    switchFlag: 0
  }, {
    qe: 0x3401,
    nmps: 20,
    nlps: 18,
    switchFlag: 0
  }, {
    qe: 0x3001,
    nmps: 21,
    nlps: 19,
    switchFlag: 0
  }, {
    qe: 0x2801,
    nmps: 22,
    nlps: 19,
    switchFlag: 0
  }, {
    qe: 0x2401,
    nmps: 23,
    nlps: 20,
    switchFlag: 0
  }, {
    qe: 0x2201,
    nmps: 24,
    nlps: 21,
    switchFlag: 0
  }, {
    qe: 0x1C01,
    nmps: 25,
    nlps: 22,
    switchFlag: 0
  }, {
    qe: 0x1801,
    nmps: 26,
    nlps: 23,
    switchFlag: 0
  }, {
    qe: 0x1601,
    nmps: 27,
    nlps: 24,
    switchFlag: 0
  }, {
    qe: 0x1401,
    nmps: 28,
    nlps: 25,
    switchFlag: 0
  }, {
    qe: 0x1201,
    nmps: 29,
    nlps: 26,
    switchFlag: 0
  }, {
    qe: 0x1101,
    nmps: 30,
    nlps: 27,
    switchFlag: 0
  }, {
    qe: 0x0AC1,
    nmps: 31,
    nlps: 28,
    switchFlag: 0
  }, {
    qe: 0x09C1,
    nmps: 32,
    nlps: 29,
    switchFlag: 0
  }, {
    qe: 0x08A1,
    nmps: 33,
    nlps: 30,
    switchFlag: 0
  }, {
    qe: 0x0521,
    nmps: 34,
    nlps: 31,
    switchFlag: 0
  }, {
    qe: 0x0441,
    nmps: 35,
    nlps: 32,
    switchFlag: 0
  }, {
    qe: 0x02A1,
    nmps: 36,
    nlps: 33,
    switchFlag: 0
  }, {
    qe: 0x0221,
    nmps: 37,
    nlps: 34,
    switchFlag: 0
  }, {
    qe: 0x0141,
    nmps: 38,
    nlps: 35,
    switchFlag: 0
  }, {
    qe: 0x0111,
    nmps: 39,
    nlps: 36,
    switchFlag: 0
  }, {
    qe: 0x0085,
    nmps: 40,
    nlps: 37,
    switchFlag: 0
  }, {
    qe: 0x0049,
    nmps: 41,
    nlps: 38,
    switchFlag: 0
  }, {
    qe: 0x0025,
    nmps: 42,
    nlps: 39,
    switchFlag: 0
  }, {
    qe: 0x0015,
    nmps: 43,
    nlps: 40,
    switchFlag: 0
  }, {
    qe: 0x0009,
    nmps: 44,
    nlps: 41,
    switchFlag: 0
  }, {
    qe: 0x0005,
    nmps: 45,
    nlps: 42,
    switchFlag: 0
  }, {
    qe: 0x0001,
    nmps: 45,
    nlps: 43,
    switchFlag: 0
  }, {
    qe: 0x5601,
    nmps: 46,
    nlps: 46,
    switchFlag: 0
  }];
  function ArithmeticDecoder(data, start, end) {
    this.data = data;
    this.bp = start;
    this.dataEnd = end;
    this.chigh = data[start];
    this.clow = 0;
    this.byteIn();
    this.chigh = this.chigh << 7 & 0xFFFF | this.clow >> 9 & 0x7F;
    this.clow = this.clow << 7 & 0xFFFF;
    this.ct -= 7;
    this.a = 0x8000;
  }
  ArithmeticDecoder.prototype = {
    byteIn: function ArithmeticDecoder_byteIn() {
      var data = this.data;
      var bp = this.bp;
      if (data[bp] === 0xFF) {
        var b1 = data[bp + 1];
        if (b1 > 0x8F) {
          this.clow += 0xFF00;
          this.ct = 8;
        } else {
          bp++;
          this.clow += data[bp] << 9;
          this.ct = 7;
          this.bp = bp;
        }
      } else {
        bp++;
        this.clow += bp < this.dataEnd ? data[bp] << 8 : 0xFF00;
        this.ct = 8;
        this.bp = bp;
      }
      if (this.clow > 0xFFFF) {
        this.chigh += this.clow >> 16;
        this.clow &= 0xFFFF;
      }
    },
    readBit: function ArithmeticDecoder_readBit(contexts, pos) {
      var cx_index = contexts[pos] >> 1,
          cx_mps = contexts[pos] & 1;
      var qeTableIcx = QeTable[cx_index];
      var qeIcx = qeTableIcx.qe;
      var d;
      var a = this.a - qeIcx;
      if (this.chigh < qeIcx) {
        if (a < qeIcx) {
          a = qeIcx;
          d = cx_mps;
          cx_index = qeTableIcx.nmps;
        } else {
          a = qeIcx;
          d = 1 ^ cx_mps;
          if (qeTableIcx.switchFlag === 1) {
            cx_mps = d;
          }
          cx_index = qeTableIcx.nlps;
        }
      } else {
        this.chigh -= qeIcx;
        if ((a & 0x8000) !== 0) {
          this.a = a;
          return cx_mps;
        }
        if (a < qeIcx) {
          d = 1 ^ cx_mps;
          if (qeTableIcx.switchFlag === 1) {
            cx_mps = d;
          }
          cx_index = qeTableIcx.nlps;
        } else {
          d = cx_mps;
          cx_index = qeTableIcx.nmps;
        }
      }
      do {
        if (this.ct === 0) {
          this.byteIn();
        }
        a <<= 1;
        this.chigh = this.chigh << 1 & 0xFFFF | this.clow >> 15 & 1;
        this.clow = this.clow << 1 & 0xFFFF;
        this.ct--;
      } while ((a & 0x8000) === 0);
      this.a = a;
      contexts[pos] = cx_index << 1 | cx_mps;
      return d;
    }
  };
  return ArithmeticDecoder;
}();
exports.ArithmeticDecoder = ArithmeticDecoder;

/***/ }),
/* 131 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JpegStream = undefined;

var _util = __w_pdfjs_require__(2);

var _stream = __w_pdfjs_require__(125);

var _primitives = __w_pdfjs_require__(123);

var _jpg = __w_pdfjs_require__(132);

var JpegStream = function JpegStreamClosure() {
  function JpegStream(stream, maybeLength, dict, params) {
    var ch = void 0;
    while ((ch = stream.getByte()) !== -1) {
      if (ch === 0xFF) {
        stream.skip(-1);
        break;
      }
    }
    this.stream = stream;
    this.maybeLength = maybeLength;
    this.dict = dict;
    this.params = params;
    _stream.DecodeStream.call(this, maybeLength);
  }
  JpegStream.prototype = Object.create(_stream.DecodeStream.prototype);
  Object.defineProperty(JpegStream.prototype, 'bytes', {
    get: function JpegStream_bytes() {
      return (0, _util.shadow)(this, 'bytes', this.stream.getBytes(this.maybeLength));
    },
    configurable: true
  });
  JpegStream.prototype.ensureBuffer = function (requested) {};
  JpegStream.prototype.readBlock = function () {
    if (this.eof) {
      return;
    }
    var jpegOptions = {
      decodeTransform: undefined,
      colorTransform: undefined
    };
    var decodeArr = this.dict.getArray('Decode', 'D');
    if (this.forceRGB && Array.isArray(decodeArr)) {
      var bitsPerComponent = this.dict.get('BitsPerComponent') || 8;
      var decodeArrLength = decodeArr.length;
      var transform = new Int32Array(decodeArrLength);
      var transformNeeded = false;
      var maxValue = (1 << bitsPerComponent) - 1;
      for (var i = 0; i < decodeArrLength; i += 2) {
        transform[i] = (decodeArr[i + 1] - decodeArr[i]) * 256 | 0;
        transform[i + 1] = decodeArr[i] * maxValue | 0;
        if (transform[i] !== 256 || transform[i + 1] !== 0) {
          transformNeeded = true;
        }
      }
      if (transformNeeded) {
        jpegOptions.decodeTransform = transform;
      }
    }
    if ((0, _primitives.isDict)(this.params)) {
      var colorTransform = this.params.get('ColorTransform');
      if (Number.isInteger(colorTransform)) {
        jpegOptions.colorTransform = colorTransform;
      }
    }
    var jpegImage = new _jpg.JpegImage(jpegOptions);
    jpegImage.parse(this.bytes);
    var data = jpegImage.getData(this.drawWidth, this.drawHeight, this.forceRGB);
    this.buffer = data;
    this.bufferLength = data.length;
    this.eof = true;
  };
  JpegStream.prototype.getIR = function () {
    var forceDataSchema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return (0, _util.createObjectURL)(this.bytes, 'image/jpeg', forceDataSchema);
  };
  return JpegStream;
}();
exports.JpegStream = JpegStream;

/***/ }),
/* 132 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JpegImage = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __w_pdfjs_require__(2);

var JpegError = function JpegErrorClosure() {
  function JpegError(msg) {
    this.message = 'JPEG error: ' + msg;
  }
  JpegError.prototype = new Error();
  JpegError.prototype.name = 'JpegError';
  JpegError.constructor = JpegError;
  return JpegError;
}();
var DNLMarkerError = function DNLMarkerErrorClosure() {
  function DNLMarkerError(message, scanLines) {
    this.message = message;
    this.scanLines = scanLines;
  }
  DNLMarkerError.prototype = new Error();
  DNLMarkerError.prototype.name = 'DNLMarkerError';
  DNLMarkerError.constructor = DNLMarkerError;
  return DNLMarkerError;
}();
var EOIMarkerError = function EOIMarkerErrorClosure() {
  function EOIMarkerError(message) {
    this.message = message;
  }
  EOIMarkerError.prototype = new Error();
  EOIMarkerError.prototype.name = 'EOIMarkerError';
  EOIMarkerError.constructor = EOIMarkerError;
  return EOIMarkerError;
}();
var JpegImage = function JpegImageClosure() {
  var dctZigZag = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
  var dctCos1 = 4017;
  var dctSin1 = 799;
  var dctCos3 = 3406;
  var dctSin3 = 2276;
  var dctCos6 = 1567;
  var dctSin6 = 3784;
  var dctSqrt2 = 5793;
  var dctSqrt1d2 = 2896;
  function JpegImage() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$decodeTransform = _ref.decodeTransform,
        decodeTransform = _ref$decodeTransform === undefined ? null : _ref$decodeTransform,
        _ref$colorTransform = _ref.colorTransform,
        colorTransform = _ref$colorTransform === undefined ? -1 : _ref$colorTransform;

    this._decodeTransform = decodeTransform;
    this._colorTransform = colorTransform;
  }
  function buildHuffmanTable(codeLengths, values) {
    var k = 0,
        code = [],
        i,
        j,
        length = 16;
    while (length > 0 && !codeLengths[length - 1]) {
      length--;
    }
    code.push({
      children: [],
      index: 0
    });
    var p = code[0],
        q;
    for (i = 0; i < length; i++) {
      for (j = 0; j < codeLengths[i]; j++) {
        p = code.pop();
        p.children[p.index] = values[k];
        while (p.index > 0) {
          p = code.pop();
        }
        p.index++;
        code.push(p);
        while (code.length <= i) {
          code.push(q = {
            children: [],
            index: 0
          });
          p.children[p.index] = q.children;
          p = q;
        }
        k++;
      }
      if (i + 1 < length) {
        code.push(q = {
          children: [],
          index: 0
        });
        p.children[p.index] = q.children;
        p = q;
      }
    }
    return code[0].children;
  }
  function getBlockBufferOffset(component, row, col) {
    return 64 * ((component.blocksPerLine + 1) * row + col);
  }
  function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive) {
    var parseDNLMarker = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;

    var mcusPerLine = frame.mcusPerLine;
    var progressive = frame.progressive;
    var startOffset = offset,
        bitsData = 0,
        bitsCount = 0;
    function readBit() {
      if (bitsCount > 0) {
        bitsCount--;
        return bitsData >> bitsCount & 1;
      }
      bitsData = data[offset++];
      if (bitsData === 0xFF) {
        var nextByte = data[offset++];
        if (nextByte) {
          if (nextByte === 0xDC && parseDNLMarker) {
            offset += 2;
            var scanLines = data[offset++] << 8 | data[offset++];
            if (scanLines > 0 && scanLines !== frame.scanLines) {
              throw new DNLMarkerError('Found DNL marker (0xFFDC) while parsing scan data', scanLines);
            }
          } else if (nextByte === 0xD9) {
            throw new EOIMarkerError('Found EOI marker (0xFFD9) while parsing scan data');
          }
          throw new JpegError('unexpected marker ' + (bitsData << 8 | nextByte).toString(16));
        }
      }
      bitsCount = 7;
      return bitsData >>> 7;
    }
    function decodeHuffman(tree) {
      var node = tree;
      while (true) {
        node = node[readBit()];
        if (typeof node === 'number') {
          return node;
        }
        if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') {
          throw new JpegError('invalid huffman sequence');
        }
      }
    }
    function receive(length) {
      var n = 0;
      while (length > 0) {
        n = n << 1 | readBit();
        length--;
      }
      return n;
    }
    function receiveAndExtend(length) {
      if (length === 1) {
        return readBit() === 1 ? 1 : -1;
      }
      var n = receive(length);
      if (n >= 1 << length - 1) {
        return n;
      }
      return n + (-1 << length) + 1;
    }
    function decodeBaseline(component, offset) {
      var t = decodeHuffman(component.huffmanTableDC);
      var diff = t === 0 ? 0 : receiveAndExtend(t);
      component.blockData[offset] = component.pred += diff;
      var k = 1;
      while (k < 64) {
        var rs = decodeHuffman(component.huffmanTableAC);
        var s = rs & 15,
            r = rs >> 4;
        if (s === 0) {
          if (r < 15) {
            break;
          }
          k += 16;
          continue;
        }
        k += r;
        var z = dctZigZag[k];
        component.blockData[offset + z] = receiveAndExtend(s);
        k++;
      }
    }
    function decodeDCFirst(component, offset) {
      var t = decodeHuffman(component.huffmanTableDC);
      var diff = t === 0 ? 0 : receiveAndExtend(t) << successive;
      component.blockData[offset] = component.pred += diff;
    }
    function decodeDCSuccessive(component, offset) {
      component.blockData[offset] |= readBit() << successive;
    }
    var eobrun = 0;
    function decodeACFirst(component, offset) {
      if (eobrun > 0) {
        eobrun--;
        return;
      }
      var k = spectralStart,
          e = spectralEnd;
      while (k <= e) {
        var rs = decodeHuffman(component.huffmanTableAC);
        var s = rs & 15,
            r = rs >> 4;
        if (s === 0) {
          if (r < 15) {
            eobrun = receive(r) + (1 << r) - 1;
            break;
          }
          k += 16;
          continue;
        }
        k += r;
        var z = dctZigZag[k];
        component.blockData[offset + z] = receiveAndExtend(s) * (1 << successive);
        k++;
      }
    }
    var successiveACState = 0,
        successiveACNextValue;
    function decodeACSuccessive(component, offset) {
      var k = spectralStart;
      var e = spectralEnd;
      var r = 0;
      var s;
      var rs;
      while (k <= e) {
        var offsetZ = offset + dctZigZag[k];
        var sign = component.blockData[offsetZ] < 0 ? -1 : 1;
        switch (successiveACState) {
          case 0:
            rs = decodeHuffman(component.huffmanTableAC);
            s = rs & 15;
            r = rs >> 4;
            if (s === 0) {
              if (r < 15) {
                eobrun = receive(r) + (1 << r);
                successiveACState = 4;
              } else {
                r = 16;
                successiveACState = 1;
              }
            } else {
              if (s !== 1) {
                throw new JpegError('invalid ACn encoding');
              }
              successiveACNextValue = receiveAndExtend(s);
              successiveACState = r ? 2 : 3;
            }
            continue;
          case 1:
          case 2:
            if (component.blockData[offsetZ]) {
              component.blockData[offsetZ] += sign * (readBit() << successive);
            } else {
              r--;
              if (r === 0) {
                successiveACState = successiveACState === 2 ? 3 : 0;
              }
            }
            break;
          case 3:
            if (component.blockData[offsetZ]) {
              component.blockData[offsetZ] += sign * (readBit() << successive);
            } else {
              component.blockData[offsetZ] = successiveACNextValue << successive;
              successiveACState = 0;
            }
            break;
          case 4:
            if (component.blockData[offsetZ]) {
              component.blockData[offsetZ] += sign * (readBit() << successive);
            }
            break;
        }
        k++;
      }
      if (successiveACState === 4) {
        eobrun--;
        if (eobrun === 0) {
          successiveACState = 0;
        }
      }
    }
    function decodeMcu(component, decode, mcu, row, col) {
      var mcuRow = mcu / mcusPerLine | 0;
      var mcuCol = mcu % mcusPerLine;
      var blockRow = mcuRow * component.v + row;
      var blockCol = mcuCol * component.h + col;
      var offset = getBlockBufferOffset(component, blockRow, blockCol);
      decode(component, offset);
    }
    function decodeBlock(component, decode, mcu) {
      var blockRow = mcu / component.blocksPerLine | 0;
      var blockCol = mcu % component.blocksPerLine;
      var offset = getBlockBufferOffset(component, blockRow, blockCol);
      decode(component, offset);
    }
    var componentsLength = components.length;
    var component, i, j, k, n;
    var decodeFn;
    if (progressive) {
      if (spectralStart === 0) {
        decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
      } else {
        decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
      }
    } else {
      decodeFn = decodeBaseline;
    }
    var mcu = 0,
        fileMarker;
    var mcuExpected;
    if (componentsLength === 1) {
      mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
    } else {
      mcuExpected = mcusPerLine * frame.mcusPerColumn;
    }
    var h, v;
    while (mcu < mcuExpected) {
      var mcuToRead = resetInterval ? Math.min(mcuExpected - mcu, resetInterval) : mcuExpected;
      for (i = 0; i < componentsLength; i++) {
        components[i].pred = 0;
      }
      eobrun = 0;
      if (componentsLength === 1) {
        component = components[0];
        for (n = 0; n < mcuToRead; n++) {
          decodeBlock(component, decodeFn, mcu);
          mcu++;
        }
      } else {
        for (n = 0; n < mcuToRead; n++) {
          for (i = 0; i < componentsLength; i++) {
            component = components[i];
            h = component.h;
            v = component.v;
            for (j = 0; j < v; j++) {
              for (k = 0; k < h; k++) {
                decodeMcu(component, decodeFn, mcu, j, k);
              }
            }
          }
          mcu++;
        }
      }
      bitsCount = 0;
      fileMarker = findNextFileMarker(data, offset);
      if (fileMarker && fileMarker.invalid) {
        (0, _util.warn)('decodeScan - unexpected MCU data, current marker is: ' + fileMarker.invalid);
        offset = fileMarker.offset;
      }
      var marker = fileMarker && fileMarker.marker;
      if (!marker || marker <= 0xFF00) {
        throw new JpegError('marker was not found');
      }
      if (marker >= 0xFFD0 && marker <= 0xFFD7) {
        offset += 2;
      } else {
        break;
      }
    }
    fileMarker = findNextFileMarker(data, offset);
    if (fileMarker && fileMarker.invalid) {
      (0, _util.warn)('decodeScan - unexpected Scan data, current marker is: ' + fileMarker.invalid);
      offset = fileMarker.offset;
    }
    return offset - startOffset;
  }
  function quantizeAndInverse(component, blockBufferOffset, p) {
    var qt = component.quantizationTable,
        blockData = component.blockData;
    var v0, v1, v2, v3, v4, v5, v6, v7;
    var p0, p1, p2, p3, p4, p5, p6, p7;
    var t;
    if (!qt) {
      throw new JpegError('missing required Quantization Table.');
    }
    for (var row = 0; row < 64; row += 8) {
      p0 = blockData[blockBufferOffset + row];
      p1 = blockData[blockBufferOffset + row + 1];
      p2 = blockData[blockBufferOffset + row + 2];
      p3 = blockData[blockBufferOffset + row + 3];
      p4 = blockData[blockBufferOffset + row + 4];
      p5 = blockData[blockBufferOffset + row + 5];
      p6 = blockData[blockBufferOffset + row + 6];
      p7 = blockData[blockBufferOffset + row + 7];
      p0 *= qt[row];
      if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
        t = dctSqrt2 * p0 + 512 >> 10;
        p[row] = t;
        p[row + 1] = t;
        p[row + 2] = t;
        p[row + 3] = t;
        p[row + 4] = t;
        p[row + 5] = t;
        p[row + 6] = t;
        p[row + 7] = t;
        continue;
      }
      p1 *= qt[row + 1];
      p2 *= qt[row + 2];
      p3 *= qt[row + 3];
      p4 *= qt[row + 4];
      p5 *= qt[row + 5];
      p6 *= qt[row + 6];
      p7 *= qt[row + 7];
      v0 = dctSqrt2 * p0 + 128 >> 8;
      v1 = dctSqrt2 * p4 + 128 >> 8;
      v2 = p2;
      v3 = p6;
      v4 = dctSqrt1d2 * (p1 - p7) + 128 >> 8;
      v7 = dctSqrt1d2 * (p1 + p7) + 128 >> 8;
      v5 = p3 << 4;
      v6 = p5 << 4;
      v0 = v0 + v1 + 1 >> 1;
      v1 = v0 - v1;
      t = v2 * dctSin6 + v3 * dctCos6 + 128 >> 8;
      v2 = v2 * dctCos6 - v3 * dctSin6 + 128 >> 8;
      v3 = t;
      v4 = v4 + v6 + 1 >> 1;
      v6 = v4 - v6;
      v7 = v7 + v5 + 1 >> 1;
      v5 = v7 - v5;
      v0 = v0 + v3 + 1 >> 1;
      v3 = v0 - v3;
      v1 = v1 + v2 + 1 >> 1;
      v2 = v1 - v2;
      t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
      v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
      v7 = t;
      t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
      v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
      v6 = t;
      p[row] = v0 + v7;
      p[row + 7] = v0 - v7;
      p[row + 1] = v1 + v6;
      p[row + 6] = v1 - v6;
      p[row + 2] = v2 + v5;
      p[row + 5] = v2 - v5;
      p[row + 3] = v3 + v4;
      p[row + 4] = v3 - v4;
    }
    for (var col = 0; col < 8; ++col) {
      p0 = p[col];
      p1 = p[col + 8];
      p2 = p[col + 16];
      p3 = p[col + 24];
      p4 = p[col + 32];
      p5 = p[col + 40];
      p6 = p[col + 48];
      p7 = p[col + 56];
      if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
        t = dctSqrt2 * p0 + 8192 >> 14;
        t = t < -2040 ? 0 : t >= 2024 ? 255 : t + 2056 >> 4;
        blockData[blockBufferOffset + col] = t;
        blockData[blockBufferOffset + col + 8] = t;
        blockData[blockBufferOffset + col + 16] = t;
        blockData[blockBufferOffset + col + 24] = t;
        blockData[blockBufferOffset + col + 32] = t;
        blockData[blockBufferOffset + col + 40] = t;
        blockData[blockBufferOffset + col + 48] = t;
        blockData[blockBufferOffset + col + 56] = t;
        continue;
      }
      v0 = dctSqrt2 * p0 + 2048 >> 12;
      v1 = dctSqrt2 * p4 + 2048 >> 12;
      v2 = p2;
      v3 = p6;
      v4 = dctSqrt1d2 * (p1 - p7) + 2048 >> 12;
      v7 = dctSqrt1d2 * (p1 + p7) + 2048 >> 12;
      v5 = p3;
      v6 = p5;
      v0 = (v0 + v1 + 1 >> 1) + 4112;
      v1 = v0 - v1;
      t = v2 * dctSin6 + v3 * dctCos6 + 2048 >> 12;
      v2 = v2 * dctCos6 - v3 * dctSin6 + 2048 >> 12;
      v3 = t;
      v4 = v4 + v6 + 1 >> 1;
      v6 = v4 - v6;
      v7 = v7 + v5 + 1 >> 1;
      v5 = v7 - v5;
      v0 = v0 + v3 + 1 >> 1;
      v3 = v0 - v3;
      v1 = v1 + v2 + 1 >> 1;
      v2 = v1 - v2;
      t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
      v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
      v7 = t;
      t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
      v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
      v6 = t;
      p0 = v0 + v7;
      p7 = v0 - v7;
      p1 = v1 + v6;
      p6 = v1 - v6;
      p2 = v2 + v5;
      p5 = v2 - v5;
      p3 = v3 + v4;
      p4 = v3 - v4;
      p0 = p0 < 16 ? 0 : p0 >= 4080 ? 255 : p0 >> 4;
      p1 = p1 < 16 ? 0 : p1 >= 4080 ? 255 : p1 >> 4;
      p2 = p2 < 16 ? 0 : p2 >= 4080 ? 255 : p2 >> 4;
      p3 = p3 < 16 ? 0 : p3 >= 4080 ? 255 : p3 >> 4;
      p4 = p4 < 16 ? 0 : p4 >= 4080 ? 255 : p4 >> 4;
      p5 = p5 < 16 ? 0 : p5 >= 4080 ? 255 : p5 >> 4;
      p6 = p6 < 16 ? 0 : p6 >= 4080 ? 255 : p6 >> 4;
      p7 = p7 < 16 ? 0 : p7 >= 4080 ? 255 : p7 >> 4;
      blockData[blockBufferOffset + col] = p0;
      blockData[blockBufferOffset + col + 8] = p1;
      blockData[blockBufferOffset + col + 16] = p2;
      blockData[blockBufferOffset + col + 24] = p3;
      blockData[blockBufferOffset + col + 32] = p4;
      blockData[blockBufferOffset + col + 40] = p5;
      blockData[blockBufferOffset + col + 48] = p6;
      blockData[blockBufferOffset + col + 56] = p7;
    }
  }
  function buildComponentData(frame, component) {
    var blocksPerLine = component.blocksPerLine;
    var blocksPerColumn = component.blocksPerColumn;
    var computationBuffer = new Int16Array(64);
    for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
      for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
        var offset = getBlockBufferOffset(component, blockRow, blockCol);
        quantizeAndInverse(component, offset, computationBuffer);
      }
    }
    return component.blockData;
  }
  function findNextFileMarker(data, currentPos) {
    var startPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentPos;

    function peekUint16(pos) {
      return data[pos] << 8 | data[pos + 1];
    }
    var maxPos = data.length - 1;
    var newPos = startPos < currentPos ? startPos : currentPos;
    if (currentPos >= maxPos) {
      return null;
    }
    var currentMarker = peekUint16(currentPos);
    if (currentMarker >= 0xFFC0 && currentMarker <= 0xFFFE) {
      return {
        invalid: null,
        marker: currentMarker,
        offset: currentPos
      };
    }
    var newMarker = peekUint16(newPos);
    while (!(newMarker >= 0xFFC0 && newMarker <= 0xFFFE)) {
      if (++newPos >= maxPos) {
        return null;
      }
      newMarker = peekUint16(newPos);
    }
    return {
      invalid: currentMarker.toString(16),
      marker: newMarker,
      offset: newPos
    };
  }
  JpegImage.prototype = {
    parse: function parse(data) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$dnlScanLines = _ref2.dnlScanLines,
          dnlScanLines = _ref2$dnlScanLines === undefined ? null : _ref2$dnlScanLines;

      function readUint16() {
        var value = data[offset] << 8 | data[offset + 1];
        offset += 2;
        return value;
      }
      function readDataBlock() {
        var length = readUint16();
        var endOffset = offset + length - 2;
        var fileMarker = findNextFileMarker(data, endOffset, offset);
        if (fileMarker && fileMarker.invalid) {
          (0, _util.warn)('readDataBlock - incorrect length, current marker is: ' + fileMarker.invalid);
          endOffset = fileMarker.offset;
        }
        var array = data.subarray(offset, endOffset);
        offset += array.length;
        return array;
      }
      function prepareComponents(frame) {
        var mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / frame.maxH);
        var mcusPerColumn = Math.ceil(frame.scanLines / 8 / frame.maxV);
        for (var i = 0; i < frame.components.length; i++) {
          component = frame.components[i];
          var blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / frame.maxH);
          var blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / frame.maxV);
          var blocksPerLineForMcu = mcusPerLine * component.h;
          var blocksPerColumnForMcu = mcusPerColumn * component.v;
          var blocksBufferSize = 64 * blocksPerColumnForMcu * (blocksPerLineForMcu + 1);
          component.blockData = new Int16Array(blocksBufferSize);
          component.blocksPerLine = blocksPerLine;
          component.blocksPerColumn = blocksPerColumn;
        }
        frame.mcusPerLine = mcusPerLine;
        frame.mcusPerColumn = mcusPerColumn;
      }
      var offset = 0;
      var jfif = null;
      var adobe = null;
      var frame, resetInterval;
      var numSOSMarkers = 0;
      var quantizationTables = [];
      var huffmanTablesAC = [],
          huffmanTablesDC = [];
      var fileMarker = readUint16();
      if (fileMarker !== 0xFFD8) {
        throw new JpegError('SOI not found');
      }
      fileMarker = readUint16();
      markerLoop: while (fileMarker !== 0xFFD9) {
        var i, j, l;
        switch (fileMarker) {
          case 0xFFE0:
          case 0xFFE1:
          case 0xFFE2:
          case 0xFFE3:
          case 0xFFE4:
          case 0xFFE5:
          case 0xFFE6:
          case 0xFFE7:
          case 0xFFE8:
          case 0xFFE9:
          case 0xFFEA:
          case 0xFFEB:
          case 0xFFEC:
          case 0xFFED:
          case 0xFFEE:
          case 0xFFEF:
          case 0xFFFE:
            var appData = readDataBlock();
            if (fileMarker === 0xFFE0) {
              if (appData[0] === 0x4A && appData[1] === 0x46 && appData[2] === 0x49 && appData[3] === 0x46 && appData[4] === 0) {
                jfif = {
                  version: {
                    major: appData[5],
                    minor: appData[6]
                  },
                  densityUnits: appData[7],
                  xDensity: appData[8] << 8 | appData[9],
                  yDensity: appData[10] << 8 | appData[11],
                  thumbWidth: appData[12],
                  thumbHeight: appData[13],
                  thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
                };
              }
            }
            if (fileMarker === 0xFFEE) {
              if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6F && appData[3] === 0x62 && appData[4] === 0x65) {
                adobe = {
                  version: appData[5] << 8 | appData[6],
                  flags0: appData[7] << 8 | appData[8],
                  flags1: appData[9] << 8 | appData[10],
                  transformCode: appData[11]
                };
              }
            }
            break;
          case 0xFFDB:
            var quantizationTablesLength = readUint16();
            var quantizationTablesEnd = quantizationTablesLength + offset - 2;
            var z;
            while (offset < quantizationTablesEnd) {
              var quantizationTableSpec = data[offset++];
              var tableData = new Uint16Array(64);
              if (quantizationTableSpec >> 4 === 0) {
                for (j = 0; j < 64; j++) {
                  z = dctZigZag[j];
                  tableData[z] = data[offset++];
                }
              } else if (quantizationTableSpec >> 4 === 1) {
                for (j = 0; j < 64; j++) {
                  z = dctZigZag[j];
                  tableData[z] = readUint16();
                }
              } else {
                throw new JpegError('DQT - invalid table spec');
              }
              quantizationTables[quantizationTableSpec & 15] = tableData;
            }
            break;
          case 0xFFC0:
          case 0xFFC1:
          case 0xFFC2:
            if (frame) {
              throw new JpegError('Only single frame JPEGs supported');
            }
            readUint16();
            frame = {};
            frame.extended = fileMarker === 0xFFC1;
            frame.progressive = fileMarker === 0xFFC2;
            frame.precision = data[offset++];
            var sofScanLines = readUint16();
            frame.scanLines = dnlScanLines || sofScanLines;
            frame.samplesPerLine = readUint16();
            frame.components = [];
            frame.componentIds = {};
            var componentsCount = data[offset++],
                componentId;
            var maxH = 0,
                maxV = 0;
            for (i = 0; i < componentsCount; i++) {
              componentId = data[offset];
              var h = data[offset + 1] >> 4;
              var v = data[offset + 1] & 15;
              if (maxH < h) {
                maxH = h;
              }
              if (maxV < v) {
                maxV = v;
              }
              var qId = data[offset + 2];
              l = frame.components.push({
                h: h,
                v: v,
                quantizationId: qId,
                quantizationTable: null
              });
              frame.componentIds[componentId] = l - 1;
              offset += 3;
            }
            frame.maxH = maxH;
            frame.maxV = maxV;
            prepareComponents(frame);
            break;
          case 0xFFC4:
            var huffmanLength = readUint16();
            for (i = 2; i < huffmanLength;) {
              var huffmanTableSpec = data[offset++];
              var codeLengths = new Uint8Array(16);
              var codeLengthSum = 0;
              for (j = 0; j < 16; j++, offset++) {
                codeLengthSum += codeLengths[j] = data[offset];
              }
              var huffmanValues = new Uint8Array(codeLengthSum);
              for (j = 0; j < codeLengthSum; j++, offset++) {
                huffmanValues[j] = data[offset];
              }
              i += 17 + codeLengthSum;
              (huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
            }
            break;
          case 0xFFDD:
            readUint16();
            resetInterval = readUint16();
            break;
          case 0xFFDA:
            var parseDNLMarker = ++numSOSMarkers === 1 && !dnlScanLines;
            readUint16();
            var selectorsCount = data[offset++];
            var components = [],
                component;
            for (i = 0; i < selectorsCount; i++) {
              var componentIndex = frame.componentIds[data[offset++]];
              component = frame.components[componentIndex];
              var tableSpec = data[offset++];
              component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
              component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
              components.push(component);
            }
            var spectralStart = data[offset++];
            var spectralEnd = data[offset++];
            var successiveApproximation = data[offset++];
            try {
              var processed = decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15, parseDNLMarker);
              offset += processed;
            } catch (ex) {
              if (ex instanceof DNLMarkerError) {
                (0, _util.warn)(ex.message + ' -- attempting to re-parse the JPEG image.');
                return this.parse(data, { dnlScanLines: ex.scanLines });
              } else if (ex instanceof EOIMarkerError) {
                (0, _util.warn)(ex.message + ' -- ignoring the rest of the image data.');
                break markerLoop;
              }
              throw ex;
            }
            break;
          case 0xFFDC:
            offset += 4;
            break;
          case 0xFFFF:
            if (data[offset] !== 0xFF) {
              offset--;
            }
            break;
          default:
            if (data[offset - 3] === 0xFF && data[offset - 2] >= 0xC0 && data[offset - 2] <= 0xFE) {
              offset -= 3;
              break;
            }
            var nextFileMarker = findNextFileMarker(data, offset - 2);
            if (nextFileMarker && nextFileMarker.invalid) {
              (0, _util.warn)('JpegImage.parse - unexpected data, current marker is: ' + nextFileMarker.invalid);
              offset = nextFileMarker.offset;
              break;
            }
            throw new JpegError('unknown marker ' + fileMarker.toString(16));
        }
        fileMarker = readUint16();
      }
      this.width = frame.samplesPerLine;
      this.height = frame.scanLines;
      this.jfif = jfif;
      this.adobe = adobe;
      this.components = [];
      for (i = 0; i < frame.components.length; i++) {
        component = frame.components[i];
        var quantizationTable = quantizationTables[component.quantizationId];
        if (quantizationTable) {
          component.quantizationTable = quantizationTable;
        }
        this.components.push({
          output: buildComponentData(frame, component),
          scaleX: component.h / frame.maxH,
          scaleY: component.v / frame.maxV,
          blocksPerLine: component.blocksPerLine,
          blocksPerColumn: component.blocksPerColumn
        });
      }
      this.numComponents = this.components.length;
    },

    _getLinearizedBlockData: function getLinearizedBlockData(width, height) {
      var scaleX = this.width / width,
          scaleY = this.height / height;
      var component, componentScaleX, componentScaleY, blocksPerScanline;
      var x, y, i, j, k;
      var index;
      var offset = 0;
      var output;
      var numComponents = this.components.length;
      var dataLength = width * height * numComponents;
      var data = new Uint8ClampedArray(dataLength);
      var xScaleBlockOffset = new Uint32Array(width);
      var mask3LSB = 0xfffffff8;
      for (i = 0; i < numComponents; i++) {
        component = this.components[i];
        componentScaleX = component.scaleX * scaleX;
        componentScaleY = component.scaleY * scaleY;
        offset = i;
        output = component.output;
        blocksPerScanline = component.blocksPerLine + 1 << 3;
        for (x = 0; x < width; x++) {
          j = 0 | x * componentScaleX;
          xScaleBlockOffset[x] = (j & mask3LSB) << 3 | j & 7;
        }
        for (y = 0; y < height; y++) {
          j = 0 | y * componentScaleY;
          index = blocksPerScanline * (j & mask3LSB) | (j & 7) << 3;
          for (x = 0; x < width; x++) {
            data[offset] = output[index + xScaleBlockOffset[x]];
            offset += numComponents;
          }
        }
      }
      var transform = this._decodeTransform;
      if (transform) {
        for (i = 0; i < dataLength;) {
          for (j = 0, k = 0; j < numComponents; j++, i++, k += 2) {
            data[i] = (data[i] * transform[k] >> 8) + transform[k + 1];
          }
        }
      }
      return data;
    },
    _isColorConversionNeeded: function _isColorConversionNeeded() {
      if (this.adobe) {
        return !!this.adobe.transformCode;
      }
      if (this.numComponents === 3) {
        if (this._colorTransform === 0) {
          return false;
        }
        return true;
      }
      if (this._colorTransform === 1) {
        return true;
      }
      return false;
    },

    _convertYccToRgb: function convertYccToRgb(data) {
      var Y, Cb, Cr;
      for (var i = 0, length = data.length; i < length; i += 3) {
        Y = data[i];
        Cb = data[i + 1];
        Cr = data[i + 2];
        data[i] = Y - 179.456 + 1.402 * Cr;
        data[i + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
        data[i + 2] = Y - 226.816 + 1.772 * Cb;
      }
      return data;
    },
    _convertYcckToRgb: function convertYcckToRgb(data) {
      var Y, Cb, Cr, k;
      var offset = 0;
      for (var i = 0, length = data.length; i < length; i += 4) {
        Y = data[i];
        Cb = data[i + 1];
        Cr = data[i + 2];
        k = data[i + 3];
        data[offset++] = -122.67195406894 + Cb * (-6.60635669420364e-5 * Cb + 0.000437130475926232 * Cr - 5.4080610064599e-5 * Y + 0.00048449797120281 * k - 0.154362151871126) + Cr * (-0.000957964378445773 * Cr + 0.000817076911346625 * Y - 0.00477271405408747 * k + 1.53380253221734) + Y * (0.000961250184130688 * Y - 0.00266257332283933 * k + 0.48357088451265) + k * (-0.000336197177618394 * k + 0.484791561490776);
        data[offset++] = 107.268039397724 + Cb * (2.19927104525741e-5 * Cb - 0.000640992018297945 * Cr + 0.000659397001245577 * Y + 0.000426105652938837 * k - 0.176491792462875) + Cr * (-0.000778269941513683 * Cr + 0.00130872261408275 * Y + 0.000770482631801132 * k - 0.151051492775562) + Y * (0.00126935368114843 * Y - 0.00265090189010898 * k + 0.25802910206845) + k * (-0.000318913117588328 * k - 0.213742400323665);
        data[offset++] = -20.810012546947 + Cb * (-0.000570115196973677 * Cb - 2.63409051004589e-5 * Cr + 0.0020741088115012 * Y - 0.00288260236853442 * k + 0.814272968359295) + Cr * (-1.53496057440975e-5 * Cr - 0.000132689043961446 * Y + 0.000560833691242812 * k - 0.195152027534049) + Y * (0.00174418132927582 * Y - 0.00255243321439347 * k + 0.116935020465145) + k * (-0.000343531996510555 * k + 0.24165260232407);
      }
      return data.subarray(0, offset);
    },
    _convertYcckToCmyk: function convertYcckToCmyk(data) {
      var Y, Cb, Cr;
      for (var i = 0, length = data.length; i < length; i += 4) {
        Y = data[i];
        Cb = data[i + 1];
        Cr = data[i + 2];
        data[i] = 434.456 - Y - 1.402 * Cr;
        data[i + 1] = 119.541 - Y + 0.344 * Cb + 0.714 * Cr;
        data[i + 2] = 481.816 - Y - 1.772 * Cb;
      }
      return data;
    },
    _convertCmykToRgb: function convertCmykToRgb(data) {
      var c, m, y, k;
      var offset = 0;
      var scale = 1 / 255;
      for (var i = 0, length = data.length; i < length; i += 4) {
        c = data[i] * scale;
        m = data[i + 1] * scale;
        y = data[i + 2] * scale;
        k = data[i + 3] * scale;
        data[offset++] = 255 + c * (-4.387332384609988 * c + 54.48615194189176 * m + 18.82290502165302 * y + 212.25662451639585 * k - 285.2331026137004) + m * (1.7149763477362134 * m - 5.6096736904047315 * y - 17.873870861415444 * k - 5.497006427196366) + y * (-2.5217340131683033 * y - 21.248923337353073 * k + 17.5119270841813) - k * (21.86122147463605 * k + 189.48180835922747);
        data[offset++] = 255 + c * (8.841041422036149 * c + 60.118027045597366 * m + 6.871425592049007 * y + 31.159100130055922 * k - 79.2970844816548) + m * (-15.310361306967817 * m + 17.575251261109482 * y + 131.35250912493976 * k - 190.9453302588951) + y * (4.444339102852739 * y + 9.8632861493405 * k - 24.86741582555878) - k * (20.737325471181034 * k + 187.80453709719578);
        data[offset++] = 255 + c * (0.8842522430003296 * c + 8.078677503112928 * m + 30.89978309703729 * y - 0.23883238689178934 * k - 14.183576799673286) + m * (10.49593273432072 * m + 63.02378494754052 * y + 50.606957656360734 * k - 112.23884253719248) + y * (0.03296041114873217 * y + 115.60384449646641 * k - 193.58209356861505) - k * (22.33816807309886 * k + 180.12613974708367);
      }
      return data.subarray(0, offset);
    },
    getData: function getData(width, height, forceRGBoutput) {
      if (this.numComponents > 4) {
        throw new JpegError('Unsupported color mode');
      }
      var data = this._getLinearizedBlockData(width, height);
      if (this.numComponents === 1 && forceRGBoutput) {
        var dataLength = data.length;
        var rgbData = new Uint8ClampedArray(dataLength * 3);
        var offset = 0;
        for (var i = 0; i < dataLength; i++) {
          var grayColor = data[i];
          rgbData[offset++] = grayColor;
          rgbData[offset++] = grayColor;
          rgbData[offset++] = grayColor;
        }
        return rgbData;
      } else if (this.numComponents === 3 && this._isColorConversionNeeded()) {
        return this._convertYccToRgb(data);
      } else if (this.numComponents === 4) {
        if (this._isColorConversionNeeded()) {
          if (forceRGBoutput) {
            return this._convertYcckToRgb(data);
          }
          return this._convertYcckToCmyk(data);
        } else if (forceRGBoutput) {
          return this._convertCmykToRgb(data);
        }
      }
      return data;
    }
  };
  return JpegImage;
}();
exports.JpegImage = JpegImage;

/***/ }),
/* 133 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JpxStream = undefined;

var _stream = __w_pdfjs_require__(125);

var _jpx = __w_pdfjs_require__(134);

var _util = __w_pdfjs_require__(2);

var JpxStream = function JpxStreamClosure() {
  function JpxStream(stream, maybeLength, dict, params) {
    this.stream = stream;
    this.maybeLength = maybeLength;
    this.dict = dict;
    this.params = params;
    _stream.DecodeStream.call(this, maybeLength);
  }
  JpxStream.prototype = Object.create(_stream.DecodeStream.prototype);
  Object.defineProperty(JpxStream.prototype, 'bytes', {
    get: function JpxStream_bytes() {
      return (0, _util.shadow)(this, 'bytes', this.stream.getBytes(this.maybeLength));
    },
    configurable: true
  });
  JpxStream.prototype.ensureBuffer = function (requested) {};
  JpxStream.prototype.readBlock = function () {
    if (this.eof) {
      return;
    }
    var jpxImage = new _jpx.JpxImage();
    jpxImage.parse(this.bytes);
    var width = jpxImage.width;
    var height = jpxImage.height;
    var componentsCount = jpxImage.componentsCount;
    var tileCount = jpxImage.tiles.length;
    if (tileCount === 1) {
      this.buffer = jpxImage.tiles[0].items;
    } else {
      var data = new Uint8ClampedArray(width * height * componentsCount);
      for (var k = 0; k < tileCount; k++) {
        var tileComponents = jpxImage.tiles[k];
        var tileWidth = tileComponents.width;
        var tileHeight = tileComponents.height;
        var tileLeft = tileComponents.left;
        var tileTop = tileComponents.top;
        var src = tileComponents.items;
        var srcPosition = 0;
        var dataPosition = (width * tileTop + tileLeft) * componentsCount;
        var imgRowSize = width * componentsCount;
        var tileRowSize = tileWidth * componentsCount;
        for (var j = 0; j < tileHeight; j++) {
          var rowBytes = src.subarray(srcPosition, srcPosition + tileRowSize);
          data.set(rowBytes, dataPosition);
          srcPosition += tileRowSize;
          dataPosition += imgRowSize;
        }
      }
      this.buffer = data;
    }
    this.bufferLength = this.buffer.length;
    this.eof = true;
  };
  return JpxStream;
}();
exports.JpxStream = JpxStream;

/***/ }),
/* 134 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JpxImage = undefined;

var _util = __w_pdfjs_require__(2);

var _arithmetic_decoder = __w_pdfjs_require__(130);

var JpxError = function JpxErrorClosure() {
  function JpxError(msg) {
    this.message = 'JPX error: ' + msg;
  }
  JpxError.prototype = new Error();
  JpxError.prototype.name = 'JpxError';
  JpxError.constructor = JpxError;
  return JpxError;
}();
var JpxImage = function JpxImageClosure() {
  var SubbandsGainLog2 = {
    'LL': 0,
    'LH': 1,
    'HL': 1,
    'HH': 2
  };
  function JpxImage() {
    this.failOnCorruptedImage = false;
  }
  JpxImage.prototype = {
    parse: function JpxImage_parse(data) {
      var head = (0, _util.readUint16)(data, 0);
      if (head === 0xFF4F) {
        this.parseCodestream(data, 0, data.length);
        return;
      }
      var position = 0,
          length = data.length;
      while (position < length) {
        var headerSize = 8;
        var lbox = (0, _util.readUint32)(data, position);
        var tbox = (0, _util.readUint32)(data, position + 4);
        position += headerSize;
        if (lbox === 1) {
          lbox = (0, _util.readUint32)(data, position) * 4294967296 + (0, _util.readUint32)(data, position + 4);
          position += 8;
          headerSize += 8;
        }
        if (lbox === 0) {
          lbox = length - position + headerSize;
        }
        if (lbox < headerSize) {
          throw new JpxError('Invalid box field size');
        }
        var dataLength = lbox - headerSize;
        var jumpDataLength = true;
        switch (tbox) {
          case 0x6A703268:
            jumpDataLength = false;
            break;
          case 0x636F6C72:
            var method = data[position];
            if (method === 1) {
              var colorspace = (0, _util.readUint32)(data, position + 3);
              switch (colorspace) {
                case 16:
                case 17:
                case 18:
                  break;
                default:
                  (0, _util.warn)('Unknown colorspace ' + colorspace);
                  break;
              }
            } else if (method === 2) {
              (0, _util.info)('ICC profile not supported');
            }
            break;
          case 0x6A703263:
            this.parseCodestream(data, position, position + dataLength);
            break;
          case 0x6A502020:
            if ((0, _util.readUint32)(data, position) !== 0x0d0a870a) {
              (0, _util.warn)('Invalid JP2 signature');
            }
            break;
          case 0x6A501A1A:
          case 0x66747970:
          case 0x72726571:
          case 0x72657320:
          case 0x69686472:
            break;
          default:
            var headerType = String.fromCharCode(tbox >> 24 & 0xFF, tbox >> 16 & 0xFF, tbox >> 8 & 0xFF, tbox & 0xFF);
            (0, _util.warn)('Unsupported header type ' + tbox + ' (' + headerType + ')');
            break;
        }
        if (jumpDataLength) {
          position += dataLength;
        }
      }
    },
    parseImageProperties: function JpxImage_parseImageProperties(stream) {
      var newByte = stream.getByte();
      while (newByte >= 0) {
        var oldByte = newByte;
        newByte = stream.getByte();
        var code = oldByte << 8 | newByte;
        if (code === 0xFF51) {
          stream.skip(4);
          var Xsiz = stream.getInt32() >>> 0;
          var Ysiz = stream.getInt32() >>> 0;
          var XOsiz = stream.getInt32() >>> 0;
          var YOsiz = stream.getInt32() >>> 0;
          stream.skip(16);
          var Csiz = stream.getUint16();
          this.width = Xsiz - XOsiz;
          this.height = Ysiz - YOsiz;
          this.componentsCount = Csiz;
          this.bitsPerComponent = 8;
          return;
        }
      }
      throw new JpxError('No size marker found in JPX stream');
    },
    parseCodestream: function JpxImage_parseCodestream(data, start, end) {
      var context = {};
      var doNotRecover = false;
      try {
        var position = start;
        while (position + 1 < end) {
          var code = (0, _util.readUint16)(data, position);
          position += 2;
          var length = 0,
              j,
              sqcd,
              spqcds,
              spqcdSize,
              scalarExpounded,
              tile;
          switch (code) {
            case 0xFF4F:
              context.mainHeader = true;
              break;
            case 0xFFD9:
              break;
            case 0xFF51:
              length = (0, _util.readUint16)(data, position);
              var siz = {};
              siz.Xsiz = (0, _util.readUint32)(data, position + 4);
              siz.Ysiz = (0, _util.readUint32)(data, position + 8);
              siz.XOsiz = (0, _util.readUint32)(data, position + 12);
              siz.YOsiz = (0, _util.readUint32)(data, position + 16);
              siz.XTsiz = (0, _util.readUint32)(data, position + 20);
              siz.YTsiz = (0, _util.readUint32)(data, position + 24);
              siz.XTOsiz = (0, _util.readUint32)(data, position + 28);
              siz.YTOsiz = (0, _util.readUint32)(data, position + 32);
              var componentsCount = (0, _util.readUint16)(data, position + 36);
              siz.Csiz = componentsCount;
              var components = [];
              j = position + 38;
              for (var i = 0; i < componentsCount; i++) {
                var component = {
                  precision: (data[j] & 0x7F) + 1,
                  isSigned: !!(data[j] & 0x80),
                  XRsiz: data[j + 1],
                  YRsiz: data[j + 2]
                };
                j += 3;
                calculateComponentDimensions(component, siz);
                components.push(component);
              }
              context.SIZ = siz;
              context.components = components;
              calculateTileGrids(context, components);
              context.QCC = [];
              context.COC = [];
              break;
            case 0xFF5C:
              length = (0, _util.readUint16)(data, position);
              var qcd = {};
              j = position + 2;
              sqcd = data[j++];
              switch (sqcd & 0x1F) {
                case 0:
                  spqcdSize = 8;
                  scalarExpounded = true;
                  break;
                case 1:
                  spqcdSize = 16;
                  scalarExpounded = false;
                  break;
                case 2:
                  spqcdSize = 16;
                  scalarExpounded = true;
                  break;
                default:
                  throw new Error('Invalid SQcd value ' + sqcd);
              }
              qcd.noQuantization = spqcdSize === 8;
              qcd.scalarExpounded = scalarExpounded;
              qcd.guardBits = sqcd >> 5;
              spqcds = [];
              while (j < length + position) {
                var spqcd = {};
                if (spqcdSize === 8) {
                  spqcd.epsilon = data[j++] >> 3;
                  spqcd.mu = 0;
                } else {
                  spqcd.epsilon = data[j] >> 3;
                  spqcd.mu = (data[j] & 0x7) << 8 | data[j + 1];
                  j += 2;
                }
                spqcds.push(spqcd);
              }
              qcd.SPqcds = spqcds;
              if (context.mainHeader) {
                context.QCD = qcd;
              } else {
                context.currentTile.QCD = qcd;
                context.currentTile.QCC = [];
              }
              break;
            case 0xFF5D:
              length = (0, _util.readUint16)(data, position);
              var qcc = {};
              j = position + 2;
              var cqcc;
              if (context.SIZ.Csiz < 257) {
                cqcc = data[j++];
              } else {
                cqcc = (0, _util.readUint16)(data, j);
                j += 2;
              }
              sqcd = data[j++];
              switch (sqcd & 0x1F) {
                case 0:
                  spqcdSize = 8;
                  scalarExpounded = true;
                  break;
                case 1:
                  spqcdSize = 16;
                  scalarExpounded = false;
                  break;
                case 2:
                  spqcdSize = 16;
                  scalarExpounded = true;
                  break;
                default:
                  throw new Error('Invalid SQcd value ' + sqcd);
              }
              qcc.noQuantization = spqcdSize === 8;
              qcc.scalarExpounded = scalarExpounded;
              qcc.guardBits = sqcd >> 5;
              spqcds = [];
              while (j < length + position) {
                spqcd = {};
                if (spqcdSize === 8) {
                  spqcd.epsilon = data[j++] >> 3;
                  spqcd.mu = 0;
                } else {
                  spqcd.epsilon = data[j] >> 3;
                  spqcd.mu = (data[j] & 0x7) << 8 | data[j + 1];
                  j += 2;
                }
                spqcds.push(spqcd);
              }
              qcc.SPqcds = spqcds;
              if (context.mainHeader) {
                context.QCC[cqcc] = qcc;
              } else {
                context.currentTile.QCC[cqcc] = qcc;
              }
              break;
            case 0xFF52:
              length = (0, _util.readUint16)(data, position);
              var cod = {};
              j = position + 2;
              var scod = data[j++];
              cod.entropyCoderWithCustomPrecincts = !!(scod & 1);
              cod.sopMarkerUsed = !!(scod & 2);
              cod.ephMarkerUsed = !!(scod & 4);
              cod.progressionOrder = data[j++];
              cod.layersCount = (0, _util.readUint16)(data, j);
              j += 2;
              cod.multipleComponentTransform = data[j++];
              cod.decompositionLevelsCount = data[j++];
              cod.xcb = (data[j++] & 0xF) + 2;
              cod.ycb = (data[j++] & 0xF) + 2;
              var blockStyle = data[j++];
              cod.selectiveArithmeticCodingBypass = !!(blockStyle & 1);
              cod.resetContextProbabilities = !!(blockStyle & 2);
              cod.terminationOnEachCodingPass = !!(blockStyle & 4);
              cod.verticallyStripe = !!(blockStyle & 8);
              cod.predictableTermination = !!(blockStyle & 16);
              cod.segmentationSymbolUsed = !!(blockStyle & 32);
              cod.reversibleTransformation = data[j++];
              if (cod.entropyCoderWithCustomPrecincts) {
                var precinctsSizes = [];
                while (j < length + position) {
                  var precinctsSize = data[j++];
                  precinctsSizes.push({
                    PPx: precinctsSize & 0xF,
                    PPy: precinctsSize >> 4
                  });
                }
                cod.precinctsSizes = precinctsSizes;
              }
              var unsupported = [];
              if (cod.selectiveArithmeticCodingBypass) {
                unsupported.push('selectiveArithmeticCodingBypass');
              }
              if (cod.resetContextProbabilities) {
                unsupported.push('resetContextProbabilities');
              }
              if (cod.terminationOnEachCodingPass) {
                unsupported.push('terminationOnEachCodingPass');
              }
              if (cod.verticallyStripe) {
                unsupported.push('verticallyStripe');
              }
              if (cod.predictableTermination) {
                unsupported.push('predictableTermination');
              }
              if (unsupported.length > 0) {
                doNotRecover = true;
                throw new Error('Unsupported COD options (' + unsupported.join(', ') + ')');
              }
              if (context.mainHeader) {
                context.COD = cod;
              } else {
                context.currentTile.COD = cod;
                context.currentTile.COC = [];
              }
              break;
            case 0xFF90:
              length = (0, _util.readUint16)(data, position);
              tile = {};
              tile.index = (0, _util.readUint16)(data, position + 2);
              tile.length = (0, _util.readUint32)(data, position + 4);
              tile.dataEnd = tile.length + position - 2;
              tile.partIndex = data[position + 8];
              tile.partsCount = data[position + 9];
              context.mainHeader = false;
              if (tile.partIndex === 0) {
                tile.COD = context.COD;
                tile.COC = context.COC.slice(0);
                tile.QCD = context.QCD;
                tile.QCC = context.QCC.slice(0);
              }
              context.currentTile = tile;
              break;
            case 0xFF93:
              tile = context.currentTile;
              if (tile.partIndex === 0) {
                initializeTile(context, tile.index);
                buildPackets(context);
              }
              length = tile.dataEnd - position;
              parseTilePackets(context, data, position, length);
              break;
            case 0xFF55:
            case 0xFF57:
            case 0xFF58:
            case 0xFF64:
              length = (0, _util.readUint16)(data, position);
              break;
            case 0xFF53:
              throw new Error('Codestream code 0xFF53 (COC) is ' + 'not implemented');
            default:
              throw new Error('Unknown codestream code: ' + code.toString(16));
          }
          position += length;
        }
      } catch (e) {
        if (doNotRecover || this.failOnCorruptedImage) {
          throw new JpxError(e.message);
        } else {
          (0, _util.warn)('JPX: Trying to recover from: ' + e.message);
        }
      }
      this.tiles = transformComponents(context);
      this.width = context.SIZ.Xsiz - context.SIZ.XOsiz;
      this.height = context.SIZ.Ysiz - context.SIZ.YOsiz;
      this.componentsCount = context.SIZ.Csiz;
    }
  };
  function calculateComponentDimensions(component, siz) {
    component.x0 = Math.ceil(siz.XOsiz / component.XRsiz);
    component.x1 = Math.ceil(siz.Xsiz / component.XRsiz);
    component.y0 = Math.ceil(siz.YOsiz / component.YRsiz);
    component.y1 = Math.ceil(siz.Ysiz / component.YRsiz);
    component.width = component.x1 - component.x0;
    component.height = component.y1 - component.y0;
  }
  function calculateTileGrids(context, components) {
    var siz = context.SIZ;
    var tile,
        tiles = [];
    var numXtiles = Math.ceil((siz.Xsiz - siz.XTOsiz) / siz.XTsiz);
    var numYtiles = Math.ceil((siz.Ysiz - siz.YTOsiz) / siz.YTsiz);
    for (var q = 0; q < numYtiles; q++) {
      for (var p = 0; p < numXtiles; p++) {
        tile = {};
        tile.tx0 = Math.max(siz.XTOsiz + p * siz.XTsiz, siz.XOsiz);
        tile.ty0 = Math.max(siz.YTOsiz + q * siz.YTsiz, siz.YOsiz);
        tile.tx1 = Math.min(siz.XTOsiz + (p + 1) * siz.XTsiz, siz.Xsiz);
        tile.ty1 = Math.min(siz.YTOsiz + (q + 1) * siz.YTsiz, siz.Ysiz);
        tile.width = tile.tx1 - tile.tx0;
        tile.height = tile.ty1 - tile.ty0;
        tile.components = [];
        tiles.push(tile);
      }
    }
    context.tiles = tiles;
    var componentsCount = siz.Csiz;
    for (var i = 0, ii = componentsCount; i < ii; i++) {
      var component = components[i];
      for (var j = 0, jj = tiles.length; j < jj; j++) {
        var tileComponent = {};
        tile = tiles[j];
        tileComponent.tcx0 = Math.ceil(tile.tx0 / component.XRsiz);
        tileComponent.tcy0 = Math.ceil(tile.ty0 / component.YRsiz);
        tileComponent.tcx1 = Math.ceil(tile.tx1 / component.XRsiz);
        tileComponent.tcy1 = Math.ceil(tile.ty1 / component.YRsiz);
        tileComponent.width = tileComponent.tcx1 - tileComponent.tcx0;
        tileComponent.height = tileComponent.tcy1 - tileComponent.tcy0;
        tile.components[i] = tileComponent;
      }
    }
  }
  function getBlocksDimensions(context, component, r) {
    var codOrCoc = component.codingStyleParameters;
    var result = {};
    if (!codOrCoc.entropyCoderWithCustomPrecincts) {
      result.PPx = 15;
      result.PPy = 15;
    } else {
      result.PPx = codOrCoc.precinctsSizes[r].PPx;
      result.PPy = codOrCoc.precinctsSizes[r].PPy;
    }
    result.xcb_ = r > 0 ? Math.min(codOrCoc.xcb, result.PPx - 1) : Math.min(codOrCoc.xcb, result.PPx);
    result.ycb_ = r > 0 ? Math.min(codOrCoc.ycb, result.PPy - 1) : Math.min(codOrCoc.ycb, result.PPy);
    return result;
  }
  function buildPrecincts(context, resolution, dimensions) {
    var precinctWidth = 1 << dimensions.PPx;
    var precinctHeight = 1 << dimensions.PPy;
    var isZeroRes = resolution.resLevel === 0;
    var precinctWidthInSubband = 1 << dimensions.PPx + (isZeroRes ? 0 : -1);
    var precinctHeightInSubband = 1 << dimensions.PPy + (isZeroRes ? 0 : -1);
    var numprecinctswide = resolution.trx1 > resolution.trx0 ? Math.ceil(resolution.trx1 / precinctWidth) - Math.floor(resolution.trx0 / precinctWidth) : 0;
    var numprecinctshigh = resolution.try1 > resolution.try0 ? Math.ceil(resolution.try1 / precinctHeight) - Math.floor(resolution.try0 / precinctHeight) : 0;
    var numprecincts = numprecinctswide * numprecinctshigh;
    resolution.precinctParameters = {
      precinctWidth: precinctWidth,
      precinctHeight: precinctHeight,
      numprecinctswide: numprecinctswide,
      numprecinctshigh: numprecinctshigh,
      numprecincts: numprecincts,
      precinctWidthInSubband: precinctWidthInSubband,
      precinctHeightInSubband: precinctHeightInSubband
    };
  }
  function buildCodeblocks(context, subband, dimensions) {
    var xcb_ = dimensions.xcb_;
    var ycb_ = dimensions.ycb_;
    var codeblockWidth = 1 << xcb_;
    var codeblockHeight = 1 << ycb_;
    var cbx0 = subband.tbx0 >> xcb_;
    var cby0 = subband.tby0 >> ycb_;
    var cbx1 = subband.tbx1 + codeblockWidth - 1 >> xcb_;
    var cby1 = subband.tby1 + codeblockHeight - 1 >> ycb_;
    var precinctParameters = subband.resolution.precinctParameters;
    var codeblocks = [];
    var precincts = [];
    var i, j, codeblock, precinctNumber;
    for (j = cby0; j < cby1; j++) {
      for (i = cbx0; i < cbx1; i++) {
        codeblock = {
          cbx: i,
          cby: j,
          tbx0: codeblockWidth * i,
          tby0: codeblockHeight * j,
          tbx1: codeblockWidth * (i + 1),
          tby1: codeblockHeight * (j + 1)
        };
        codeblock.tbx0_ = Math.max(subband.tbx0, codeblock.tbx0);
        codeblock.tby0_ = Math.max(subband.tby0, codeblock.tby0);
        codeblock.tbx1_ = Math.min(subband.tbx1, codeblock.tbx1);
        codeblock.tby1_ = Math.min(subband.tby1, codeblock.tby1);
        var pi = Math.floor((codeblock.tbx0_ - subband.tbx0) / precinctParameters.precinctWidthInSubband);
        var pj = Math.floor((codeblock.tby0_ - subband.tby0) / precinctParameters.precinctHeightInSubband);
        precinctNumber = pi + pj * precinctParameters.numprecinctswide;
        codeblock.precinctNumber = precinctNumber;
        codeblock.subbandType = subband.type;
        codeblock.Lblock = 3;
        if (codeblock.tbx1_ <= codeblock.tbx0_ || codeblock.tby1_ <= codeblock.tby0_) {
          continue;
        }
        codeblocks.push(codeblock);
        var precinct = precincts[precinctNumber];
        if (precinct !== undefined) {
          if (i < precinct.cbxMin) {
            precinct.cbxMin = i;
          } else if (i > precinct.cbxMax) {
            precinct.cbxMax = i;
          }
          if (j < precinct.cbyMin) {
            precinct.cbxMin = j;
          } else if (j > precinct.cbyMax) {
            precinct.cbyMax = j;
          }
        } else {
          precincts[precinctNumber] = precinct = {
            cbxMin: i,
            cbyMin: j,
            cbxMax: i,
            cbyMax: j
          };
        }
        codeblock.precinct = precinct;
      }
    }
    subband.codeblockParameters = {
      codeblockWidth: xcb_,
      codeblockHeight: ycb_,
      numcodeblockwide: cbx1 - cbx0 + 1,
      numcodeblockhigh: cby1 - cby0 + 1
    };
    subband.codeblocks = codeblocks;
    subband.precincts = precincts;
  }
  function createPacket(resolution, precinctNumber, layerNumber) {
    var precinctCodeblocks = [];
    var subbands = resolution.subbands;
    for (var i = 0, ii = subbands.length; i < ii; i++) {
      var subband = subbands[i];
      var codeblocks = subband.codeblocks;
      for (var j = 0, jj = codeblocks.length; j < jj; j++) {
        var codeblock = codeblocks[j];
        if (codeblock.precinctNumber !== precinctNumber) {
          continue;
        }
        precinctCodeblocks.push(codeblock);
      }
    }
    return {
      layerNumber: layerNumber,
      codeblocks: precinctCodeblocks
    };
  }
  function LayerResolutionComponentPositionIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var maxDecompositionLevelsCount = 0;
    for (var q = 0; q < componentsCount; q++) {
      maxDecompositionLevelsCount = Math.max(maxDecompositionLevelsCount, tile.components[q].codingStyleParameters.decompositionLevelsCount);
    }
    var l = 0,
        r = 0,
        i = 0,
        k = 0;
    this.nextPacket = function JpxImage_nextPacket() {
      for (; l < layersCount; l++) {
        for (; r <= maxDecompositionLevelsCount; r++) {
          for (; i < componentsCount; i++) {
            var component = tile.components[i];
            if (r > component.codingStyleParameters.decompositionLevelsCount) {
              continue;
            }
            var resolution = component.resolutions[r];
            var numprecincts = resolution.precinctParameters.numprecincts;
            for (; k < numprecincts;) {
              var packet = createPacket(resolution, k, l);
              k++;
              return packet;
            }
            k = 0;
          }
          i = 0;
        }
        r = 0;
      }
      throw new JpxError('Out of packets');
    };
  }
  function ResolutionLayerComponentPositionIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var maxDecompositionLevelsCount = 0;
    for (var q = 0; q < componentsCount; q++) {
      maxDecompositionLevelsCount = Math.max(maxDecompositionLevelsCount, tile.components[q].codingStyleParameters.decompositionLevelsCount);
    }
    var r = 0,
        l = 0,
        i = 0,
        k = 0;
    this.nextPacket = function JpxImage_nextPacket() {
      for (; r <= maxDecompositionLevelsCount; r++) {
        for (; l < layersCount; l++) {
          for (; i < componentsCount; i++) {
            var component = tile.components[i];
            if (r > component.codingStyleParameters.decompositionLevelsCount) {
              continue;
            }
            var resolution = component.resolutions[r];
            var numprecincts = resolution.precinctParameters.numprecincts;
            for (; k < numprecincts;) {
              var packet = createPacket(resolution, k, l);
              k++;
              return packet;
            }
            k = 0;
          }
          i = 0;
        }
        l = 0;
      }
      throw new JpxError('Out of packets');
    };
  }
  function ResolutionPositionComponentLayerIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var l, r, c, p;
    var maxDecompositionLevelsCount = 0;
    for (c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      maxDecompositionLevelsCount = Math.max(maxDecompositionLevelsCount, component.codingStyleParameters.decompositionLevelsCount);
    }
    var maxNumPrecinctsInLevel = new Int32Array(maxDecompositionLevelsCount + 1);
    for (r = 0; r <= maxDecompositionLevelsCount; ++r) {
      var maxNumPrecincts = 0;
      for (c = 0; c < componentsCount; ++c) {
        var resolutions = tile.components[c].resolutions;
        if (r < resolutions.length) {
          maxNumPrecincts = Math.max(maxNumPrecincts, resolutions[r].precinctParameters.numprecincts);
        }
      }
      maxNumPrecinctsInLevel[r] = maxNumPrecincts;
    }
    l = 0;
    r = 0;
    c = 0;
    p = 0;
    this.nextPacket = function JpxImage_nextPacket() {
      for (; r <= maxDecompositionLevelsCount; r++) {
        for (; p < maxNumPrecinctsInLevel[r]; p++) {
          for (; c < componentsCount; c++) {
            var component = tile.components[c];
            if (r > component.codingStyleParameters.decompositionLevelsCount) {
              continue;
            }
            var resolution = component.resolutions[r];
            var numprecincts = resolution.precinctParameters.numprecincts;
            if (p >= numprecincts) {
              continue;
            }
            for (; l < layersCount;) {
              var packet = createPacket(resolution, p, l);
              l++;
              return packet;
            }
            l = 0;
          }
          c = 0;
        }
        p = 0;
      }
      throw new JpxError('Out of packets');
    };
  }
  function PositionComponentResolutionLayerIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var precinctsSizes = getPrecinctSizesInImageScale(tile);
    var precinctsIterationSizes = precinctsSizes;
    var l = 0,
        r = 0,
        c = 0,
        px = 0,
        py = 0;
    this.nextPacket = function JpxImage_nextPacket() {
      for (; py < precinctsIterationSizes.maxNumHigh; py++) {
        for (; px < precinctsIterationSizes.maxNumWide; px++) {
          for (; c < componentsCount; c++) {
            var component = tile.components[c];
            var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;
            for (; r <= decompositionLevelsCount; r++) {
              var resolution = component.resolutions[r];
              var sizeInImageScale = precinctsSizes.components[c].resolutions[r];
              var k = getPrecinctIndexIfExist(px, py, sizeInImageScale, precinctsIterationSizes, resolution);
              if (k === null) {
                continue;
              }
              for (; l < layersCount;) {
                var packet = createPacket(resolution, k, l);
                l++;
                return packet;
              }
              l = 0;
            }
            r = 0;
          }
          c = 0;
        }
        px = 0;
      }
      throw new JpxError('Out of packets');
    };
  }
  function ComponentPositionResolutionLayerIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var precinctsSizes = getPrecinctSizesInImageScale(tile);
    var l = 0,
        r = 0,
        c = 0,
        px = 0,
        py = 0;
    this.nextPacket = function JpxImage_nextPacket() {
      for (; c < componentsCount; ++c) {
        var component = tile.components[c];
        var precinctsIterationSizes = precinctsSizes.components[c];
        var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;
        for (; py < precinctsIterationSizes.maxNumHigh; py++) {
          for (; px < precinctsIterationSizes.maxNumWide; px++) {
            for (; r <= decompositionLevelsCount; r++) {
              var resolution = component.resolutions[r];
              var sizeInImageScale = precinctsIterationSizes.resolutions[r];
              var k = getPrecinctIndexIfExist(px, py, sizeInImageScale, precinctsIterationSizes, resolution);
              if (k === null) {
                continue;
              }
              for (; l < layersCount;) {
                var packet = createPacket(resolution, k, l);
                l++;
                return packet;
              }
              l = 0;
            }
            r = 0;
          }
          px = 0;
        }
        py = 0;
      }
      throw new JpxError('Out of packets');
    };
  }
  function getPrecinctIndexIfExist(pxIndex, pyIndex, sizeInImageScale, precinctIterationSizes, resolution) {
    var posX = pxIndex * precinctIterationSizes.minWidth;
    var posY = pyIndex * precinctIterationSizes.minHeight;
    if (posX % sizeInImageScale.width !== 0 || posY % sizeInImageScale.height !== 0) {
      return null;
    }
    var startPrecinctRowIndex = posY / sizeInImageScale.width * resolution.precinctParameters.numprecinctswide;
    return posX / sizeInImageScale.height + startPrecinctRowIndex;
  }
  function getPrecinctSizesInImageScale(tile) {
    var componentsCount = tile.components.length;
    var minWidth = Number.MAX_VALUE;
    var minHeight = Number.MAX_VALUE;
    var maxNumWide = 0;
    var maxNumHigh = 0;
    var sizePerComponent = new Array(componentsCount);
    for (var c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;
      var sizePerResolution = new Array(decompositionLevelsCount + 1);
      var minWidthCurrentComponent = Number.MAX_VALUE;
      var minHeightCurrentComponent = Number.MAX_VALUE;
      var maxNumWideCurrentComponent = 0;
      var maxNumHighCurrentComponent = 0;
      var scale = 1;
      for (var r = decompositionLevelsCount; r >= 0; --r) {
        var resolution = component.resolutions[r];
        var widthCurrentResolution = scale * resolution.precinctParameters.precinctWidth;
        var heightCurrentResolution = scale * resolution.precinctParameters.precinctHeight;
        minWidthCurrentComponent = Math.min(minWidthCurrentComponent, widthCurrentResolution);
        minHeightCurrentComponent = Math.min(minHeightCurrentComponent, heightCurrentResolution);
        maxNumWideCurrentComponent = Math.max(maxNumWideCurrentComponent, resolution.precinctParameters.numprecinctswide);
        maxNumHighCurrentComponent = Math.max(maxNumHighCurrentComponent, resolution.precinctParameters.numprecinctshigh);
        sizePerResolution[r] = {
          width: widthCurrentResolution,
          height: heightCurrentResolution
        };
        scale <<= 1;
      }
      minWidth = Math.min(minWidth, minWidthCurrentComponent);
      minHeight = Math.min(minHeight, minHeightCurrentComponent);
      maxNumWide = Math.max(maxNumWide, maxNumWideCurrentComponent);
      maxNumHigh = Math.max(maxNumHigh, maxNumHighCurrentComponent);
      sizePerComponent[c] = {
        resolutions: sizePerResolution,
        minWidth: minWidthCurrentComponent,
        minHeight: minHeightCurrentComponent,
        maxNumWide: maxNumWideCurrentComponent,
        maxNumHigh: maxNumHighCurrentComponent
      };
    }
    return {
      components: sizePerComponent,
      minWidth: minWidth,
      minHeight: minHeight,
      maxNumWide: maxNumWide,
      maxNumHigh: maxNumHigh
    };
  }
  function buildPackets(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var componentsCount = siz.Csiz;
    for (var c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;
      var resolutions = [];
      var subbands = [];
      for (var r = 0; r <= decompositionLevelsCount; r++) {
        var blocksDimensions = getBlocksDimensions(context, component, r);
        var resolution = {};
        var scale = 1 << decompositionLevelsCount - r;
        resolution.trx0 = Math.ceil(component.tcx0 / scale);
        resolution.try0 = Math.ceil(component.tcy0 / scale);
        resolution.trx1 = Math.ceil(component.tcx1 / scale);
        resolution.try1 = Math.ceil(component.tcy1 / scale);
        resolution.resLevel = r;
        buildPrecincts(context, resolution, blocksDimensions);
        resolutions.push(resolution);
        var subband;
        if (r === 0) {
          subband = {};
          subband.type = 'LL';
          subband.tbx0 = Math.ceil(component.tcx0 / scale);
          subband.tby0 = Math.ceil(component.tcy0 / scale);
          subband.tbx1 = Math.ceil(component.tcx1 / scale);
          subband.tby1 = Math.ceil(component.tcy1 / scale);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolution.subbands = [subband];
        } else {
          var bscale = 1 << decompositionLevelsCount - r + 1;
          var resolutionSubbands = [];
          subband = {};
          subband.type = 'HL';
          subband.tbx0 = Math.ceil(component.tcx0 / bscale - 0.5);
          subband.tby0 = Math.ceil(component.tcy0 / bscale);
          subband.tbx1 = Math.ceil(component.tcx1 / bscale - 0.5);
          subband.tby1 = Math.ceil(component.tcy1 / bscale);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolutionSubbands.push(subband);
          subband = {};
          subband.type = 'LH';
          subband.tbx0 = Math.ceil(component.tcx0 / bscale);
          subband.tby0 = Math.ceil(component.tcy0 / bscale - 0.5);
          subband.tbx1 = Math.ceil(component.tcx1 / bscale);
          subband.tby1 = Math.ceil(component.tcy1 / bscale - 0.5);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolutionSubbands.push(subband);
          subband = {};
          subband.type = 'HH';
          subband.tbx0 = Math.ceil(component.tcx0 / bscale - 0.5);
          subband.tby0 = Math.ceil(component.tcy0 / bscale - 0.5);
          subband.tbx1 = Math.ceil(component.tcx1 / bscale - 0.5);
          subband.tby1 = Math.ceil(component.tcy1 / bscale - 0.5);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolutionSubbands.push(subband);
          resolution.subbands = resolutionSubbands;
        }
      }
      component.resolutions = resolutions;
      component.subbands = subbands;
    }
    var progressionOrder = tile.codingStyleDefaultParameters.progressionOrder;
    switch (progressionOrder) {
      case 0:
        tile.packetsIterator = new LayerResolutionComponentPositionIterator(context);
        break;
      case 1:
        tile.packetsIterator = new ResolutionLayerComponentPositionIterator(context);
        break;
      case 2:
        tile.packetsIterator = new ResolutionPositionComponentLayerIterator(context);
        break;
      case 3:
        tile.packetsIterator = new PositionComponentResolutionLayerIterator(context);
        break;
      case 4:
        tile.packetsIterator = new ComponentPositionResolutionLayerIterator(context);
        break;
      default:
        throw new JpxError('Unsupported progression order ' + progressionOrder);
    }
  }
  function parseTilePackets(context, data, offset, dataLength) {
    var position = 0;
    var buffer,
        bufferSize = 0,
        skipNextBit = false;
    function readBits(count) {
      while (bufferSize < count) {
        var b = data[offset + position];
        position++;
        if (skipNextBit) {
          buffer = buffer << 7 | b;
          bufferSize += 7;
          skipNextBit = false;
        } else {
          buffer = buffer << 8 | b;
          bufferSize += 8;
        }
        if (b === 0xFF) {
          skipNextBit = true;
        }
      }
      bufferSize -= count;
      return buffer >>> bufferSize & (1 << count) - 1;
    }
    function skipMarkerIfEqual(value) {
      if (data[offset + position - 1] === 0xFF && data[offset + position] === value) {
        skipBytes(1);
        return true;
      } else if (data[offset + position] === 0xFF && data[offset + position + 1] === value) {
        skipBytes(2);
        return true;
      }
      return false;
    }
    function skipBytes(count) {
      position += count;
    }
    function alignToByte() {
      bufferSize = 0;
      if (skipNextBit) {
        position++;
        skipNextBit = false;
      }
    }
    function readCodingpasses() {
      if (readBits(1) === 0) {
        return 1;
      }
      if (readBits(1) === 0) {
        return 2;
      }
      var value = readBits(2);
      if (value < 3) {
        return value + 3;
      }
      value = readBits(5);
      if (value < 31) {
        return value + 6;
      }
      value = readBits(7);
      return value + 37;
    }
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var sopMarkerUsed = context.COD.sopMarkerUsed;
    var ephMarkerUsed = context.COD.ephMarkerUsed;
    var packetsIterator = tile.packetsIterator;
    while (position < dataLength) {
      alignToByte();
      if (sopMarkerUsed && skipMarkerIfEqual(0x91)) {
        skipBytes(4);
      }
      var packet = packetsIterator.nextPacket();
      if (!readBits(1)) {
        continue;
      }
      var layerNumber = packet.layerNumber;
      var queue = [],
          codeblock;
      for (var i = 0, ii = packet.codeblocks.length; i < ii; i++) {
        codeblock = packet.codeblocks[i];
        var precinct = codeblock.precinct;
        var codeblockColumn = codeblock.cbx - precinct.cbxMin;
        var codeblockRow = codeblock.cby - precinct.cbyMin;
        var codeblockIncluded = false;
        var firstTimeInclusion = false;
        var valueReady;
        if (codeblock['included'] !== undefined) {
          codeblockIncluded = !!readBits(1);
        } else {
          precinct = codeblock.precinct;
          var inclusionTree, zeroBitPlanesTree;
          if (precinct['inclusionTree'] !== undefined) {
            inclusionTree = precinct.inclusionTree;
          } else {
            var width = precinct.cbxMax - precinct.cbxMin + 1;
            var height = precinct.cbyMax - precinct.cbyMin + 1;
            inclusionTree = new InclusionTree(width, height, layerNumber);
            zeroBitPlanesTree = new TagTree(width, height);
            precinct.inclusionTree = inclusionTree;
            precinct.zeroBitPlanesTree = zeroBitPlanesTree;
          }
          if (inclusionTree.reset(codeblockColumn, codeblockRow, layerNumber)) {
            while (true) {
              if (readBits(1)) {
                valueReady = !inclusionTree.nextLevel();
                if (valueReady) {
                  codeblock.included = true;
                  codeblockIncluded = firstTimeInclusion = true;
                  break;
                }
              } else {
                inclusionTree.incrementValue(layerNumber);
                break;
              }
            }
          }
        }
        if (!codeblockIncluded) {
          continue;
        }
        if (firstTimeInclusion) {
          zeroBitPlanesTree = precinct.zeroBitPlanesTree;
          zeroBitPlanesTree.reset(codeblockColumn, codeblockRow);
          while (true) {
            if (readBits(1)) {
              valueReady = !zeroBitPlanesTree.nextLevel();
              if (valueReady) {
                break;
              }
            } else {
              zeroBitPlanesTree.incrementValue();
            }
          }
          codeblock.zeroBitPlanes = zeroBitPlanesTree.value;
        }
        var codingpasses = readCodingpasses();
        while (readBits(1)) {
          codeblock.Lblock++;
        }
        var codingpassesLog2 = (0, _util.log2)(codingpasses);
        var bits = (codingpasses < 1 << codingpassesLog2 ? codingpassesLog2 - 1 : codingpassesLog2) + codeblock.Lblock;
        var codedDataLength = readBits(bits);
        queue.push({
          codeblock: codeblock,
          codingpasses: codingpasses,
          dataLength: codedDataLength
        });
      }
      alignToByte();
      if (ephMarkerUsed) {
        skipMarkerIfEqual(0x92);
      }
      while (queue.length > 0) {
        var packetItem = queue.shift();
        codeblock = packetItem.codeblock;
        if (codeblock['data'] === undefined) {
          codeblock.data = [];
        }
        codeblock.data.push({
          data: data,
          start: offset + position,
          end: offset + position + packetItem.dataLength,
          codingpasses: packetItem.codingpasses
        });
        position += packetItem.dataLength;
      }
    }
    return position;
  }
  function copyCoefficients(coefficients, levelWidth, levelHeight, subband, delta, mb, reversible, segmentationSymbolUsed) {
    var x0 = subband.tbx0;
    var y0 = subband.tby0;
    var width = subband.tbx1 - subband.tbx0;
    var codeblocks = subband.codeblocks;
    var right = subband.type.charAt(0) === 'H' ? 1 : 0;
    var bottom = subband.type.charAt(1) === 'H' ? levelWidth : 0;
    for (var i = 0, ii = codeblocks.length; i < ii; ++i) {
      var codeblock = codeblocks[i];
      var blockWidth = codeblock.tbx1_ - codeblock.tbx0_;
      var blockHeight = codeblock.tby1_ - codeblock.tby0_;
      if (blockWidth === 0 || blockHeight === 0) {
        continue;
      }
      if (codeblock['data'] === undefined) {
        continue;
      }
      var bitModel, currentCodingpassType;
      bitModel = new BitModel(blockWidth, blockHeight, codeblock.subbandType, codeblock.zeroBitPlanes, mb);
      currentCodingpassType = 2;
      var data = codeblock.data,
          totalLength = 0,
          codingpasses = 0;
      var j, jj, dataItem;
      for (j = 0, jj = data.length; j < jj; j++) {
        dataItem = data[j];
        totalLength += dataItem.end - dataItem.start;
        codingpasses += dataItem.codingpasses;
      }
      var encodedData = new Uint8Array(totalLength);
      var position = 0;
      for (j = 0, jj = data.length; j < jj; j++) {
        dataItem = data[j];
        var chunk = dataItem.data.subarray(dataItem.start, dataItem.end);
        encodedData.set(chunk, position);
        position += chunk.length;
      }
      var decoder = new _arithmetic_decoder.ArithmeticDecoder(encodedData, 0, totalLength);
      bitModel.setDecoder(decoder);
      for (j = 0; j < codingpasses; j++) {
        switch (currentCodingpassType) {
          case 0:
            bitModel.runSignificancePropagationPass();
            break;
          case 1:
            bitModel.runMagnitudeRefinementPass();
            break;
          case 2:
            bitModel.runCleanupPass();
            if (segmentationSymbolUsed) {
              bitModel.checkSegmentationSymbol();
            }
            break;
        }
        currentCodingpassType = (currentCodingpassType + 1) % 3;
      }
      var offset = codeblock.tbx0_ - x0 + (codeblock.tby0_ - y0) * width;
      var sign = bitModel.coefficentsSign;
      var magnitude = bitModel.coefficentsMagnitude;
      var bitsDecoded = bitModel.bitsDecoded;
      var magnitudeCorrection = reversible ? 0 : 0.5;
      var k, n, nb;
      position = 0;
      var interleave = subband.type !== 'LL';
      for (j = 0; j < blockHeight; j++) {
        var row = offset / width | 0;
        var levelOffset = 2 * row * (levelWidth - width) + right + bottom;
        for (k = 0; k < blockWidth; k++) {
          n = magnitude[position];
          if (n !== 0) {
            n = (n + magnitudeCorrection) * delta;
            if (sign[position] !== 0) {
              n = -n;
            }
            nb = bitsDecoded[position];
            var pos = interleave ? levelOffset + (offset << 1) : offset;
            if (reversible && nb >= mb) {
              coefficients[pos] = n;
            } else {
              coefficients[pos] = n * (1 << mb - nb);
            }
          }
          offset++;
          position++;
        }
        offset += width - blockWidth;
      }
    }
  }
  function transformTile(context, tile, c) {
    var component = tile.components[c];
    var codingStyleParameters = component.codingStyleParameters;
    var quantizationParameters = component.quantizationParameters;
    var decompositionLevelsCount = codingStyleParameters.decompositionLevelsCount;
    var spqcds = quantizationParameters.SPqcds;
    var scalarExpounded = quantizationParameters.scalarExpounded;
    var guardBits = quantizationParameters.guardBits;
    var segmentationSymbolUsed = codingStyleParameters.segmentationSymbolUsed;
    var precision = context.components[c].precision;
    var reversible = codingStyleParameters.reversibleTransformation;
    var transform = reversible ? new ReversibleTransform() : new IrreversibleTransform();
    var subbandCoefficients = [];
    var b = 0;
    for (var i = 0; i <= decompositionLevelsCount; i++) {
      var resolution = component.resolutions[i];
      var width = resolution.trx1 - resolution.trx0;
      var height = resolution.try1 - resolution.try0;
      var coefficients = new Float32Array(width * height);
      for (var j = 0, jj = resolution.subbands.length; j < jj; j++) {
        var mu, epsilon;
        if (!scalarExpounded) {
          mu = spqcds[0].mu;
          epsilon = spqcds[0].epsilon + (i > 0 ? 1 - i : 0);
        } else {
          mu = spqcds[b].mu;
          epsilon = spqcds[b].epsilon;
          b++;
        }
        var subband = resolution.subbands[j];
        var gainLog2 = SubbandsGainLog2[subband.type];
        var delta = reversible ? 1 : Math.pow(2, precision + gainLog2 - epsilon) * (1 + mu / 2048);
        var mb = guardBits + epsilon - 1;
        copyCoefficients(coefficients, width, height, subband, delta, mb, reversible, segmentationSymbolUsed);
      }
      subbandCoefficients.push({
        width: width,
        height: height,
        items: coefficients
      });
    }
    var result = transform.calculate(subbandCoefficients, component.tcx0, component.tcy0);
    return {
      left: component.tcx0,
      top: component.tcy0,
      width: result.width,
      height: result.height,
      items: result.items
    };
  }
  function transformComponents(context) {
    var siz = context.SIZ;
    var components = context.components;
    var componentsCount = siz.Csiz;
    var resultImages = [];
    for (var i = 0, ii = context.tiles.length; i < ii; i++) {
      var tile = context.tiles[i];
      var transformedTiles = [];
      var c;
      for (c = 0; c < componentsCount; c++) {
        transformedTiles[c] = transformTile(context, tile, c);
      }
      var tile0 = transformedTiles[0];
      var out = new Uint8ClampedArray(tile0.items.length * componentsCount);
      var result = {
        left: tile0.left,
        top: tile0.top,
        width: tile0.width,
        height: tile0.height,
        items: out
      };
      var shift, offset;
      var pos = 0,
          j,
          jj,
          y0,
          y1,
          y2;
      if (tile.codingStyleDefaultParameters.multipleComponentTransform) {
        var fourComponents = componentsCount === 4;
        var y0items = transformedTiles[0].items;
        var y1items = transformedTiles[1].items;
        var y2items = transformedTiles[2].items;
        var y3items = fourComponents ? transformedTiles[3].items : null;
        shift = components[0].precision - 8;
        offset = (128 << shift) + 0.5;
        var component0 = tile.components[0];
        var alpha01 = componentsCount - 3;
        jj = y0items.length;
        if (!component0.codingStyleParameters.reversibleTransformation) {
          for (j = 0; j < jj; j++, pos += alpha01) {
            y0 = y0items[j] + offset;
            y1 = y1items[j];
            y2 = y2items[j];
            out[pos++] = y0 + 1.402 * y2 >> shift;
            out[pos++] = y0 - 0.34413 * y1 - 0.71414 * y2 >> shift;
            out[pos++] = y0 + 1.772 * y1 >> shift;
          }
        } else {
          for (j = 0; j < jj; j++, pos += alpha01) {
            y0 = y0items[j] + offset;
            y1 = y1items[j];
            y2 = y2items[j];
            var g = y0 - (y2 + y1 >> 2);
            out[pos++] = g + y2 >> shift;
            out[pos++] = g >> shift;
            out[pos++] = g + y1 >> shift;
          }
        }
        if (fourComponents) {
          for (j = 0, pos = 3; j < jj; j++, pos += 4) {
            out[pos] = y3items[j] + offset >> shift;
          }
        }
      } else {
        for (c = 0; c < componentsCount; c++) {
          var items = transformedTiles[c].items;
          shift = components[c].precision - 8;
          offset = (128 << shift) + 0.5;
          for (pos = c, j = 0, jj = items.length; j < jj; j++) {
            out[pos] = items[j] + offset >> shift;
            pos += componentsCount;
          }
        }
      }
      resultImages.push(result);
    }
    return resultImages;
  }
  function initializeTile(context, tileIndex) {
    var siz = context.SIZ;
    var componentsCount = siz.Csiz;
    var tile = context.tiles[tileIndex];
    for (var c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      var qcdOrQcc = context.currentTile.QCC[c] !== undefined ? context.currentTile.QCC[c] : context.currentTile.QCD;
      component.quantizationParameters = qcdOrQcc;
      var codOrCoc = context.currentTile.COC[c] !== undefined ? context.currentTile.COC[c] : context.currentTile.COD;
      component.codingStyleParameters = codOrCoc;
    }
    tile.codingStyleDefaultParameters = context.currentTile.COD;
  }
  var TagTree = function TagTreeClosure() {
    function TagTree(width, height) {
      var levelsLength = (0, _util.log2)(Math.max(width, height)) + 1;
      this.levels = [];
      for (var i = 0; i < levelsLength; i++) {
        var level = {
          width: width,
          height: height,
          items: []
        };
        this.levels.push(level);
        width = Math.ceil(width / 2);
        height = Math.ceil(height / 2);
      }
    }
    TagTree.prototype = {
      reset: function TagTree_reset(i, j) {
        var currentLevel = 0,
            value = 0,
            level;
        while (currentLevel < this.levels.length) {
          level = this.levels[currentLevel];
          var index = i + j * level.width;
          if (level.items[index] !== undefined) {
            value = level.items[index];
            break;
          }
          level.index = index;
          i >>= 1;
          j >>= 1;
          currentLevel++;
        }
        currentLevel--;
        level = this.levels[currentLevel];
        level.items[level.index] = value;
        this.currentLevel = currentLevel;
        delete this.value;
      },
      incrementValue: function TagTree_incrementValue() {
        var level = this.levels[this.currentLevel];
        level.items[level.index]++;
      },
      nextLevel: function TagTree_nextLevel() {
        var currentLevel = this.currentLevel;
        var level = this.levels[currentLevel];
        var value = level.items[level.index];
        currentLevel--;
        if (currentLevel < 0) {
          this.value = value;
          return false;
        }
        this.currentLevel = currentLevel;
        level = this.levels[currentLevel];
        level.items[level.index] = value;
        return true;
      }
    };
    return TagTree;
  }();
  var InclusionTree = function InclusionTreeClosure() {
    function InclusionTree(width, height, defaultValue) {
      var levelsLength = (0, _util.log2)(Math.max(width, height)) + 1;
      this.levels = [];
      for (var i = 0; i < levelsLength; i++) {
        var items = new Uint8Array(width * height);
        for (var j = 0, jj = items.length; j < jj; j++) {
          items[j] = defaultValue;
        }
        var level = {
          width: width,
          height: height,
          items: items
        };
        this.levels.push(level);
        width = Math.ceil(width / 2);
        height = Math.ceil(height / 2);
      }
    }
    InclusionTree.prototype = {
      reset: function InclusionTree_reset(i, j, stopValue) {
        var currentLevel = 0;
        while (currentLevel < this.levels.length) {
          var level = this.levels[currentLevel];
          var index = i + j * level.width;
          level.index = index;
          var value = level.items[index];
          if (value === 0xFF) {
            break;
          }
          if (value > stopValue) {
            this.currentLevel = currentLevel;
            this.propagateValues();
            return false;
          }
          i >>= 1;
          j >>= 1;
          currentLevel++;
        }
        this.currentLevel = currentLevel - 1;
        return true;
      },
      incrementValue: function InclusionTree_incrementValue(stopValue) {
        var level = this.levels[this.currentLevel];
        level.items[level.index] = stopValue + 1;
        this.propagateValues();
      },
      propagateValues: function InclusionTree_propagateValues() {
        var levelIndex = this.currentLevel;
        var level = this.levels[levelIndex];
        var currentValue = level.items[level.index];
        while (--levelIndex >= 0) {
          level = this.levels[levelIndex];
          level.items[level.index] = currentValue;
        }
      },
      nextLevel: function InclusionTree_nextLevel() {
        var currentLevel = this.currentLevel;
        var level = this.levels[currentLevel];
        var value = level.items[level.index];
        level.items[level.index] = 0xFF;
        currentLevel--;
        if (currentLevel < 0) {
          return false;
        }
        this.currentLevel = currentLevel;
        level = this.levels[currentLevel];
        level.items[level.index] = value;
        return true;
      }
    };
    return InclusionTree;
  }();
  var BitModel = function BitModelClosure() {
    var UNIFORM_CONTEXT = 17;
    var RUNLENGTH_CONTEXT = 18;
    var LLAndLHContextsLabel = new Uint8Array([0, 5, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 1, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8]);
    var HLContextLabel = new Uint8Array([0, 3, 4, 0, 5, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 1, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8]);
    var HHContextLabel = new Uint8Array([0, 1, 2, 0, 1, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 3, 4, 5, 0, 4, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 0, 6, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 8, 0, 8, 8, 8, 0, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 8, 0, 8, 8, 8]);
    function BitModel(width, height, subband, zeroBitPlanes, mb) {
      this.width = width;
      this.height = height;
      this.contextLabelTable = subband === 'HH' ? HHContextLabel : subband === 'HL' ? HLContextLabel : LLAndLHContextsLabel;
      var coefficientCount = width * height;
      this.neighborsSignificance = new Uint8Array(coefficientCount);
      this.coefficentsSign = new Uint8Array(coefficientCount);
      this.coefficentsMagnitude = mb > 14 ? new Uint32Array(coefficientCount) : mb > 6 ? new Uint16Array(coefficientCount) : new Uint8Array(coefficientCount);
      this.processingFlags = new Uint8Array(coefficientCount);
      var bitsDecoded = new Uint8Array(coefficientCount);
      if (zeroBitPlanes !== 0) {
        for (var i = 0; i < coefficientCount; i++) {
          bitsDecoded[i] = zeroBitPlanes;
        }
      }
      this.bitsDecoded = bitsDecoded;
      this.reset();
    }
    BitModel.prototype = {
      setDecoder: function BitModel_setDecoder(decoder) {
        this.decoder = decoder;
      },
      reset: function BitModel_reset() {
        this.contexts = new Int8Array(19);
        this.contexts[0] = 4 << 1 | 0;
        this.contexts[UNIFORM_CONTEXT] = 46 << 1 | 0;
        this.contexts[RUNLENGTH_CONTEXT] = 3 << 1 | 0;
      },
      setNeighborsSignificance: function BitModel_setNeighborsSignificance(row, column, index) {
        var neighborsSignificance = this.neighborsSignificance;
        var width = this.width,
            height = this.height;
        var left = column > 0;
        var right = column + 1 < width;
        var i;
        if (row > 0) {
          i = index - width;
          if (left) {
            neighborsSignificance[i - 1] += 0x10;
          }
          if (right) {
            neighborsSignificance[i + 1] += 0x10;
          }
          neighborsSignificance[i] += 0x04;
        }
        if (row + 1 < height) {
          i = index + width;
          if (left) {
            neighborsSignificance[i - 1] += 0x10;
          }
          if (right) {
            neighborsSignificance[i + 1] += 0x10;
          }
          neighborsSignificance[i] += 0x04;
        }
        if (left) {
          neighborsSignificance[index - 1] += 0x01;
        }
        if (right) {
          neighborsSignificance[index + 1] += 0x01;
        }
        neighborsSignificance[index] |= 0x80;
      },
      runSignificancePropagationPass: function BitModel_runSignificancePropagationPass() {
        var decoder = this.decoder;
        var width = this.width,
            height = this.height;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var coefficentsSign = this.coefficentsSign;
        var neighborsSignificance = this.neighborsSignificance;
        var processingFlags = this.processingFlags;
        var contexts = this.contexts;
        var labels = this.contextLabelTable;
        var bitsDecoded = this.bitsDecoded;
        var processedInverseMask = ~1;
        var processedMask = 1;
        var firstMagnitudeBitMask = 2;
        for (var i0 = 0; i0 < height; i0 += 4) {
          for (var j = 0; j < width; j++) {
            var index = i0 * width + j;
            for (var i1 = 0; i1 < 4; i1++, index += width) {
              var i = i0 + i1;
              if (i >= height) {
                break;
              }
              processingFlags[index] &= processedInverseMask;
              if (coefficentsMagnitude[index] || !neighborsSignificance[index]) {
                continue;
              }
              var contextLabel = labels[neighborsSignificance[index]];
              var decision = decoder.readBit(contexts, contextLabel);
              if (decision) {
                var sign = this.decodeSignBit(i, j, index);
                coefficentsSign[index] = sign;
                coefficentsMagnitude[index] = 1;
                this.setNeighborsSignificance(i, j, index);
                processingFlags[index] |= firstMagnitudeBitMask;
              }
              bitsDecoded[index]++;
              processingFlags[index] |= processedMask;
            }
          }
        }
      },
      decodeSignBit: function BitModel_decodeSignBit(row, column, index) {
        var width = this.width,
            height = this.height;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var coefficentsSign = this.coefficentsSign;
        var contribution, sign0, sign1, significance1;
        var contextLabel, decoded;
        significance1 = column > 0 && coefficentsMagnitude[index - 1] !== 0;
        if (column + 1 < width && coefficentsMagnitude[index + 1] !== 0) {
          sign1 = coefficentsSign[index + 1];
          if (significance1) {
            sign0 = coefficentsSign[index - 1];
            contribution = 1 - sign1 - sign0;
          } else {
            contribution = 1 - sign1 - sign1;
          }
        } else if (significance1) {
          sign0 = coefficentsSign[index - 1];
          contribution = 1 - sign0 - sign0;
        } else {
          contribution = 0;
        }
        var horizontalContribution = 3 * contribution;
        significance1 = row > 0 && coefficentsMagnitude[index - width] !== 0;
        if (row + 1 < height && coefficentsMagnitude[index + width] !== 0) {
          sign1 = coefficentsSign[index + width];
          if (significance1) {
            sign0 = coefficentsSign[index - width];
            contribution = 1 - sign1 - sign0 + horizontalContribution;
          } else {
            contribution = 1 - sign1 - sign1 + horizontalContribution;
          }
        } else if (significance1) {
          sign0 = coefficentsSign[index - width];
          contribution = 1 - sign0 - sign0 + horizontalContribution;
        } else {
          contribution = horizontalContribution;
        }
        if (contribution >= 0) {
          contextLabel = 9 + contribution;
          decoded = this.decoder.readBit(this.contexts, contextLabel);
        } else {
          contextLabel = 9 - contribution;
          decoded = this.decoder.readBit(this.contexts, contextLabel) ^ 1;
        }
        return decoded;
      },
      runMagnitudeRefinementPass: function BitModel_runMagnitudeRefinementPass() {
        var decoder = this.decoder;
        var width = this.width,
            height = this.height;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var neighborsSignificance = this.neighborsSignificance;
        var contexts = this.contexts;
        var bitsDecoded = this.bitsDecoded;
        var processingFlags = this.processingFlags;
        var processedMask = 1;
        var firstMagnitudeBitMask = 2;
        var length = width * height;
        var width4 = width * 4;
        for (var index0 = 0, indexNext; index0 < length; index0 = indexNext) {
          indexNext = Math.min(length, index0 + width4);
          for (var j = 0; j < width; j++) {
            for (var index = index0 + j; index < indexNext; index += width) {
              if (!coefficentsMagnitude[index] || (processingFlags[index] & processedMask) !== 0) {
                continue;
              }
              var contextLabel = 16;
              if ((processingFlags[index] & firstMagnitudeBitMask) !== 0) {
                processingFlags[index] ^= firstMagnitudeBitMask;
                var significance = neighborsSignificance[index] & 127;
                contextLabel = significance === 0 ? 15 : 14;
              }
              var bit = decoder.readBit(contexts, contextLabel);
              coefficentsMagnitude[index] = coefficentsMagnitude[index] << 1 | bit;
              bitsDecoded[index]++;
              processingFlags[index] |= processedMask;
            }
          }
        }
      },
      runCleanupPass: function BitModel_runCleanupPass() {
        var decoder = this.decoder;
        var width = this.width,
            height = this.height;
        var neighborsSignificance = this.neighborsSignificance;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var coefficentsSign = this.coefficentsSign;
        var contexts = this.contexts;
        var labels = this.contextLabelTable;
        var bitsDecoded = this.bitsDecoded;
        var processingFlags = this.processingFlags;
        var processedMask = 1;
        var firstMagnitudeBitMask = 2;
        var oneRowDown = width;
        var twoRowsDown = width * 2;
        var threeRowsDown = width * 3;
        var iNext;
        for (var i0 = 0; i0 < height; i0 = iNext) {
          iNext = Math.min(i0 + 4, height);
          var indexBase = i0 * width;
          var checkAllEmpty = i0 + 3 < height;
          for (var j = 0; j < width; j++) {
            var index0 = indexBase + j;
            var allEmpty = checkAllEmpty && processingFlags[index0] === 0 && processingFlags[index0 + oneRowDown] === 0 && processingFlags[index0 + twoRowsDown] === 0 && processingFlags[index0 + threeRowsDown] === 0 && neighborsSignificance[index0] === 0 && neighborsSignificance[index0 + oneRowDown] === 0 && neighborsSignificance[index0 + twoRowsDown] === 0 && neighborsSignificance[index0 + threeRowsDown] === 0;
            var i1 = 0,
                index = index0;
            var i = i0,
                sign;
            if (allEmpty) {
              var hasSignificantCoefficent = decoder.readBit(contexts, RUNLENGTH_CONTEXT);
              if (!hasSignificantCoefficent) {
                bitsDecoded[index0]++;
                bitsDecoded[index0 + oneRowDown]++;
                bitsDecoded[index0 + twoRowsDown]++;
                bitsDecoded[index0 + threeRowsDown]++;
                continue;
              }
              i1 = decoder.readBit(contexts, UNIFORM_CONTEXT) << 1 | decoder.readBit(contexts, UNIFORM_CONTEXT);
              if (i1 !== 0) {
                i = i0 + i1;
                index += i1 * width;
              }
              sign = this.decodeSignBit(i, j, index);
              coefficentsSign[index] = sign;
              coefficentsMagnitude[index] = 1;
              this.setNeighborsSignificance(i, j, index);
              processingFlags[index] |= firstMagnitudeBitMask;
              index = index0;
              for (var i2 = i0; i2 <= i; i2++, index += width) {
                bitsDecoded[index]++;
              }
              i1++;
            }
            for (i = i0 + i1; i < iNext; i++, index += width) {
              if (coefficentsMagnitude[index] || (processingFlags[index] & processedMask) !== 0) {
                continue;
              }
              var contextLabel = labels[neighborsSignificance[index]];
              var decision = decoder.readBit(contexts, contextLabel);
              if (decision === 1) {
                sign = this.decodeSignBit(i, j, index);
                coefficentsSign[index] = sign;
                coefficentsMagnitude[index] = 1;
                this.setNeighborsSignificance(i, j, index);
                processingFlags[index] |= firstMagnitudeBitMask;
              }
              bitsDecoded[index]++;
            }
          }
        }
      },
      checkSegmentationSymbol: function BitModel_checkSegmentationSymbol() {
        var decoder = this.decoder;
        var contexts = this.contexts;
        var symbol = decoder.readBit(contexts, UNIFORM_CONTEXT) << 3 | decoder.readBit(contexts, UNIFORM_CONTEXT) << 2 | decoder.readBit(contexts, UNIFORM_CONTEXT) << 1 | decoder.readBit(contexts, UNIFORM_CONTEXT);
        if (symbol !== 0xA) {
          throw new JpxError('Invalid segmentation symbol');
        }
      }
    };
    return BitModel;
  }();
  var Transform = function TransformClosure() {
    function Transform() {}
    Transform.prototype.calculate = function transformCalculate(subbands, u0, v0) {
      var ll = subbands[0];
      for (var i = 1, ii = subbands.length; i < ii; i++) {
        ll = this.iterate(ll, subbands[i], u0, v0);
      }
      return ll;
    };
    Transform.prototype.extend = function extend(buffer, offset, size) {
      var i1 = offset - 1,
          j1 = offset + 1;
      var i2 = offset + size - 2,
          j2 = offset + size;
      buffer[i1--] = buffer[j1++];
      buffer[j2++] = buffer[i2--];
      buffer[i1--] = buffer[j1++];
      buffer[j2++] = buffer[i2--];
      buffer[i1--] = buffer[j1++];
      buffer[j2++] = buffer[i2--];
      buffer[i1] = buffer[j1];
      buffer[j2] = buffer[i2];
    };
    Transform.prototype.iterate = function Transform_iterate(ll, hl_lh_hh, u0, v0) {
      var llWidth = ll.width,
          llHeight = ll.height,
          llItems = ll.items;
      var width = hl_lh_hh.width;
      var height = hl_lh_hh.height;
      var items = hl_lh_hh.items;
      var i, j, k, l, u, v;
      for (k = 0, i = 0; i < llHeight; i++) {
        l = i * 2 * width;
        for (j = 0; j < llWidth; j++, k++, l += 2) {
          items[l] = llItems[k];
        }
      }
      llItems = ll.items = null;
      var bufferPadding = 4;
      var rowBuffer = new Float32Array(width + 2 * bufferPadding);
      if (width === 1) {
        if ((u0 & 1) !== 0) {
          for (v = 0, k = 0; v < height; v++, k += width) {
            items[k] *= 0.5;
          }
        }
      } else {
        for (v = 0, k = 0; v < height; v++, k += width) {
          rowBuffer.set(items.subarray(k, k + width), bufferPadding);
          this.extend(rowBuffer, bufferPadding, width);
          this.filter(rowBuffer, bufferPadding, width);
          items.set(rowBuffer.subarray(bufferPadding, bufferPadding + width), k);
        }
      }
      var numBuffers = 16;
      var colBuffers = [];
      for (i = 0; i < numBuffers; i++) {
        colBuffers.push(new Float32Array(height + 2 * bufferPadding));
      }
      var b,
          currentBuffer = 0;
      ll = bufferPadding + height;
      if (height === 1) {
        if ((v0 & 1) !== 0) {
          for (u = 0; u < width; u++) {
            items[u] *= 0.5;
          }
        }
      } else {
        for (u = 0; u < width; u++) {
          if (currentBuffer === 0) {
            numBuffers = Math.min(width - u, numBuffers);
            for (k = u, l = bufferPadding; l < ll; k += width, l++) {
              for (b = 0; b < numBuffers; b++) {
                colBuffers[b][l] = items[k + b];
              }
            }
            currentBuffer = numBuffers;
          }
          currentBuffer--;
          var buffer = colBuffers[currentBuffer];
          this.extend(buffer, bufferPadding, height);
          this.filter(buffer, bufferPadding, height);
          if (currentBuffer === 0) {
            k = u - numBuffers + 1;
            for (l = bufferPadding; l < ll; k += width, l++) {
              for (b = 0; b < numBuffers; b++) {
                items[k + b] = colBuffers[b][l];
              }
            }
          }
        }
      }
      return {
        width: width,
        height: height,
        items: items
      };
    };
    return Transform;
  }();
  var IrreversibleTransform = function IrreversibleTransformClosure() {
    function IrreversibleTransform() {
      Transform.call(this);
    }
    IrreversibleTransform.prototype = Object.create(Transform.prototype);
    IrreversibleTransform.prototype.filter = function irreversibleTransformFilter(x, offset, length) {
      var len = length >> 1;
      offset = offset | 0;
      var j, n, current, next;
      var alpha = -1.586134342059924;
      var beta = -0.052980118572961;
      var gamma = 0.882911075530934;
      var delta = 0.443506852043971;
      var K = 1.230174104914001;
      var K_ = 1 / K;
      j = offset - 3;
      for (n = len + 4; n--; j += 2) {
        x[j] *= K_;
      }
      j = offset - 2;
      current = delta * x[j - 1];
      for (n = len + 3; n--; j += 2) {
        next = delta * x[j + 1];
        x[j] = K * x[j] - current - next;
        if (n--) {
          j += 2;
          current = delta * x[j + 1];
          x[j] = K * x[j] - current - next;
        } else {
          break;
        }
      }
      j = offset - 1;
      current = gamma * x[j - 1];
      for (n = len + 2; n--; j += 2) {
        next = gamma * x[j + 1];
        x[j] -= current + next;
        if (n--) {
          j += 2;
          current = gamma * x[j + 1];
          x[j] -= current + next;
        } else {
          break;
        }
      }
      j = offset;
      current = beta * x[j - 1];
      for (n = len + 1; n--; j += 2) {
        next = beta * x[j + 1];
        x[j] -= current + next;
        if (n--) {
          j += 2;
          current = beta * x[j + 1];
          x[j] -= current + next;
        } else {
          break;
        }
      }
      if (len !== 0) {
        j = offset + 1;
        current = alpha * x[j - 1];
        for (n = len; n--; j += 2) {
          next = alpha * x[j + 1];
          x[j] -= current + next;
          if (n--) {
            j += 2;
            current = alpha * x[j + 1];
            x[j] -= current + next;
          } else {
            break;
          }
        }
      }
    };
    return IrreversibleTransform;
  }();
  var ReversibleTransform = function ReversibleTransformClosure() {
    function ReversibleTransform() {
      Transform.call(this);
    }
    ReversibleTransform.prototype = Object.create(Transform.prototype);
    ReversibleTransform.prototype.filter = function reversibleTransformFilter(x, offset, length) {
      var len = length >> 1;
      offset = offset | 0;
      var j, n;
      for (j = offset, n = len + 1; n--; j += 2) {
        x[j] -= x[j - 1] + x[j + 1] + 2 >> 2;
      }
      for (j = offset + 1, n = len; n--; j += 2) {
        x[j] += x[j - 1] + x[j + 1] >> 1;
      }
    };
    return ReversibleTransform;
  }();
  return JpxImage;
}();
exports.JpxImage = JpxImage;

/***/ }),
/* 135 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateSHA512 = exports.calculateSHA384 = exports.calculateSHA256 = exports.calculateMD5 = exports.PDF20 = exports.PDF17 = exports.CipherTransformFactory = exports.ARCFourCipher = exports.AES256Cipher = exports.AES128Cipher = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __w_pdfjs_require__(2);

var _primitives = __w_pdfjs_require__(123);

var _stream = __w_pdfjs_require__(125);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ARCFourCipher = function ARCFourCipherClosure() {
  function ARCFourCipher(key) {
    this.a = 0;
    this.b = 0;
    var s = new Uint8Array(256);
    var i,
        j = 0,
        tmp,
        keyLength = key.length;
    for (i = 0; i < 256; ++i) {
      s[i] = i;
    }
    for (i = 0; i < 256; ++i) {
      tmp = s[i];
      j = j + tmp + key[i % keyLength] & 0xFF;
      s[i] = s[j];
      s[j] = tmp;
    }
    this.s = s;
  }
  ARCFourCipher.prototype = {
    encryptBlock: function ARCFourCipher_encryptBlock(data) {
      var i,
          n = data.length,
          tmp,
          tmp2;
      var a = this.a,
          b = this.b,
          s = this.s;
      var output = new Uint8Array(n);
      for (i = 0; i < n; ++i) {
        a = a + 1 & 0xFF;
        tmp = s[a];
        b = b + tmp & 0xFF;
        tmp2 = s[b];
        s[a] = tmp2;
        s[b] = tmp;
        output[i] = data[i] ^ s[tmp + tmp2 & 0xFF];
      }
      this.a = a;
      this.b = b;
      return output;
    }
  };
  ARCFourCipher.prototype.decryptBlock = ARCFourCipher.prototype.encryptBlock;
  return ARCFourCipher;
}();
var calculateMD5 = function calculateMD5Closure() {
  var r = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]);
  var k = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, -145523070, -1120210379, 718787259, -343485551]);
  function hash(data, offset, length) {
    var h0 = 1732584193,
        h1 = -271733879,
        h2 = -1732584194,
        h3 = 271733878;
    var paddedLength = length + 72 & ~63;
    var padded = new Uint8Array(paddedLength);
    var i, j, n;
    for (i = 0; i < length; ++i) {
      padded[i] = data[offset++];
    }
    padded[i++] = 0x80;
    n = paddedLength - 8;
    while (i < n) {
      padded[i++] = 0;
    }
    padded[i++] = length << 3 & 0xFF;
    padded[i++] = length >> 5 & 0xFF;
    padded[i++] = length >> 13 & 0xFF;
    padded[i++] = length >> 21 & 0xFF;
    padded[i++] = length >>> 29 & 0xFF;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    var w = new Int32Array(16);
    for (i = 0; i < paddedLength;) {
      for (j = 0; j < 16; ++j, i += 4) {
        w[j] = padded[i] | padded[i + 1] << 8 | padded[i + 2] << 16 | padded[i + 3] << 24;
      }
      var a = h0,
          b = h1,
          c = h2,
          d = h3,
          f,
          g;
      for (j = 0; j < 64; ++j) {
        if (j < 16) {
          f = b & c | ~b & d;
          g = j;
        } else if (j < 32) {
          f = d & b | ~d & c;
          g = 5 * j + 1 & 15;
        } else if (j < 48) {
          f = b ^ c ^ d;
          g = 3 * j + 5 & 15;
        } else {
          f = c ^ (b | ~d);
          g = 7 * j & 15;
        }
        var tmp = d,
            rotateArg = a + f + k[j] + w[g] | 0,
            rotate = r[j];
        d = c;
        c = b;
        b = b + (rotateArg << rotate | rotateArg >>> 32 - rotate) | 0;
        a = tmp;
      }
      h0 = h0 + a | 0;
      h1 = h1 + b | 0;
      h2 = h2 + c | 0;
      h3 = h3 + d | 0;
    }
    return new Uint8Array([h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >>> 24 & 0xFF, h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >>> 24 & 0xFF, h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >>> 24 & 0xFF, h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >>> 24 & 0xFF]);
  }
  return hash;
}();
var Word64 = function Word64Closure() {
  function Word64(highInteger, lowInteger) {
    this.high = highInteger | 0;
    this.low = lowInteger | 0;
  }
  Word64.prototype = {
    and: function Word64_and(word) {
      this.high &= word.high;
      this.low &= word.low;
    },
    xor: function Word64_xor(word) {
      this.high ^= word.high;
      this.low ^= word.low;
    },
    or: function Word64_or(word) {
      this.high |= word.high;
      this.low |= word.low;
    },
    shiftRight: function Word64_shiftRight(places) {
      if (places >= 32) {
        this.low = this.high >>> places - 32 | 0;
        this.high = 0;
      } else {
        this.low = this.low >>> places | this.high << 32 - places;
        this.high = this.high >>> places | 0;
      }
    },
    shiftLeft: function Word64_shiftLeft(places) {
      if (places >= 32) {
        this.high = this.low << places - 32;
        this.low = 0;
      } else {
        this.high = this.high << places | this.low >>> 32 - places;
        this.low = this.low << places;
      }
    },
    rotateRight: function Word64_rotateRight(places) {
      var low, high;
      if (places & 32) {
        high = this.low;
        low = this.high;
      } else {
        low = this.low;
        high = this.high;
      }
      places &= 31;
      this.low = low >>> places | high << 32 - places;
      this.high = high >>> places | low << 32 - places;
    },
    not: function Word64_not() {
      this.high = ~this.high;
      this.low = ~this.low;
    },
    add: function Word64_add(word) {
      var lowAdd = (this.low >>> 0) + (word.low >>> 0);
      var highAdd = (this.high >>> 0) + (word.high >>> 0);
      if (lowAdd > 0xFFFFFFFF) {
        highAdd += 1;
      }
      this.low = lowAdd | 0;
      this.high = highAdd | 0;
    },
    copyTo: function Word64_copyTo(bytes, offset) {
      bytes[offset] = this.high >>> 24 & 0xFF;
      bytes[offset + 1] = this.high >> 16 & 0xFF;
      bytes[offset + 2] = this.high >> 8 & 0xFF;
      bytes[offset + 3] = this.high & 0xFF;
      bytes[offset + 4] = this.low >>> 24 & 0xFF;
      bytes[offset + 5] = this.low >> 16 & 0xFF;
      bytes[offset + 6] = this.low >> 8 & 0xFF;
      bytes[offset + 7] = this.low & 0xFF;
    },
    assign: function Word64_assign(word) {
      this.high = word.high;
      this.low = word.low;
    }
  };
  return Word64;
}();
var calculateSHA256 = function calculateSHA256Closure() {
  function rotr(x, n) {
    return x >>> n | x << 32 - n;
  }
  function ch(x, y, z) {
    return x & y ^ ~x & z;
  }
  function maj(x, y, z) {
    return x & y ^ x & z ^ y & z;
  }
  function sigma(x) {
    return rotr(x, 2) ^ rotr(x, 13) ^ rotr(x, 22);
  }
  function sigmaPrime(x) {
    return rotr(x, 6) ^ rotr(x, 11) ^ rotr(x, 25);
  }
  function littleSigma(x) {
    return rotr(x, 7) ^ rotr(x, 18) ^ x >>> 3;
  }
  function littleSigmaPrime(x) {
    return rotr(x, 17) ^ rotr(x, 19) ^ x >>> 10;
  }
  var k = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  function hash(data, offset, length) {
    var h0 = 0x6a09e667,
        h1 = 0xbb67ae85,
        h2 = 0x3c6ef372,
        h3 = 0xa54ff53a,
        h4 = 0x510e527f,
        h5 = 0x9b05688c,
        h6 = 0x1f83d9ab,
        h7 = 0x5be0cd19;
    var paddedLength = Math.ceil((length + 9) / 64) * 64;
    var padded = new Uint8Array(paddedLength);
    var i, j, n;
    for (i = 0; i < length; ++i) {
      padded[i] = data[offset++];
    }
    padded[i++] = 0x80;
    n = paddedLength - 8;
    while (i < n) {
      padded[i++] = 0;
    }
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = length >>> 29 & 0xFF;
    padded[i++] = length >> 21 & 0xFF;
    padded[i++] = length >> 13 & 0xFF;
    padded[i++] = length >> 5 & 0xFF;
    padded[i++] = length << 3 & 0xFF;
    var w = new Uint32Array(64);
    for (i = 0; i < paddedLength;) {
      for (j = 0; j < 16; ++j) {
        w[j] = padded[i] << 24 | padded[i + 1] << 16 | padded[i + 2] << 8 | padded[i + 3];
        i += 4;
      }
      for (j = 16; j < 64; ++j) {
        w[j] = littleSigmaPrime(w[j - 2]) + w[j - 7] + littleSigma(w[j - 15]) + w[j - 16] | 0;
      }
      var a = h0,
          b = h1,
          c = h2,
          d = h3,
          e = h4,
          f = h5,
          g = h6,
          h = h7,
          t1,
          t2;
      for (j = 0; j < 64; ++j) {
        t1 = h + sigmaPrime(e) + ch(e, f, g) + k[j] + w[j];
        t2 = sigma(a) + maj(a, b, c);
        h = g;
        g = f;
        f = e;
        e = d + t1 | 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 | 0;
      }
      h0 = h0 + a | 0;
      h1 = h1 + b | 0;
      h2 = h2 + c | 0;
      h3 = h3 + d | 0;
      h4 = h4 + e | 0;
      h5 = h5 + f | 0;
      h6 = h6 + g | 0;
      h7 = h7 + h | 0;
    }
    return new Uint8Array([h0 >> 24 & 0xFF, h0 >> 16 & 0xFF, h0 >> 8 & 0xFF, h0 & 0xFF, h1 >> 24 & 0xFF, h1 >> 16 & 0xFF, h1 >> 8 & 0xFF, h1 & 0xFF, h2 >> 24 & 0xFF, h2 >> 16 & 0xFF, h2 >> 8 & 0xFF, h2 & 0xFF, h3 >> 24 & 0xFF, h3 >> 16 & 0xFF, h3 >> 8 & 0xFF, h3 & 0xFF, h4 >> 24 & 0xFF, h4 >> 16 & 0xFF, h4 >> 8 & 0xFF, h4 & 0xFF, h5 >> 24 & 0xFF, h5 >> 16 & 0xFF, h5 >> 8 & 0xFF, h5 & 0xFF, h6 >> 24 & 0xFF, h6 >> 16 & 0xFF, h6 >> 8 & 0xFF, h6 & 0xFF, h7 >> 24 & 0xFF, h7 >> 16 & 0xFF, h7 >> 8 & 0xFF, h7 & 0xFF]);
  }
  return hash;
}();
var calculateSHA512 = function calculateSHA512Closure() {
  function ch(result, x, y, z, tmp) {
    result.assign(x);
    result.and(y);
    tmp.assign(x);
    tmp.not();
    tmp.and(z);
    result.xor(tmp);
  }
  function maj(result, x, y, z, tmp) {
    result.assign(x);
    result.and(y);
    tmp.assign(x);
    tmp.and(z);
    result.xor(tmp);
    tmp.assign(y);
    tmp.and(z);
    result.xor(tmp);
  }
  function sigma(result, x, tmp) {
    result.assign(x);
    result.rotateRight(28);
    tmp.assign(x);
    tmp.rotateRight(34);
    result.xor(tmp);
    tmp.assign(x);
    tmp.rotateRight(39);
    result.xor(tmp);
  }
  function sigmaPrime(result, x, tmp) {
    result.assign(x);
    result.rotateRight(14);
    tmp.assign(x);
    tmp.rotateRight(18);
    result.xor(tmp);
    tmp.assign(x);
    tmp.rotateRight(41);
    result.xor(tmp);
  }
  function littleSigma(result, x, tmp) {
    result.assign(x);
    result.rotateRight(1);
    tmp.assign(x);
    tmp.rotateRight(8);
    result.xor(tmp);
    tmp.assign(x);
    tmp.shiftRight(7);
    result.xor(tmp);
  }
  function littleSigmaPrime(result, x, tmp) {
    result.assign(x);
    result.rotateRight(19);
    tmp.assign(x);
    tmp.rotateRight(61);
    result.xor(tmp);
    tmp.assign(x);
    tmp.shiftRight(6);
    result.xor(tmp);
  }
  var k = [new Word64(0x428a2f98, 0xd728ae22), new Word64(0x71374491, 0x23ef65cd), new Word64(0xb5c0fbcf, 0xec4d3b2f), new Word64(0xe9b5dba5, 0x8189dbbc), new Word64(0x3956c25b, 0xf348b538), new Word64(0x59f111f1, 0xb605d019), new Word64(0x923f82a4, 0xaf194f9b), new Word64(0xab1c5ed5, 0xda6d8118), new Word64(0xd807aa98, 0xa3030242), new Word64(0x12835b01, 0x45706fbe), new Word64(0x243185be, 0x4ee4b28c), new Word64(0x550c7dc3, 0xd5ffb4e2), new Word64(0x72be5d74, 0xf27b896f), new Word64(0x80deb1fe, 0x3b1696b1), new Word64(0x9bdc06a7, 0x25c71235), new Word64(0xc19bf174, 0xcf692694), new Word64(0xe49b69c1, 0x9ef14ad2), new Word64(0xefbe4786, 0x384f25e3), new Word64(0x0fc19dc6, 0x8b8cd5b5), new Word64(0x240ca1cc, 0x77ac9c65), new Word64(0x2de92c6f, 0x592b0275), new Word64(0x4a7484aa, 0x6ea6e483), new Word64(0x5cb0a9dc, 0xbd41fbd4), new Word64(0x76f988da, 0x831153b5), new Word64(0x983e5152, 0xee66dfab), new Word64(0xa831c66d, 0x2db43210), new Word64(0xb00327c8, 0x98fb213f), new Word64(0xbf597fc7, 0xbeef0ee4), new Word64(0xc6e00bf3, 0x3da88fc2), new Word64(0xd5a79147, 0x930aa725), new Word64(0x06ca6351, 0xe003826f), new Word64(0x14292967, 0x0a0e6e70), new Word64(0x27b70a85, 0x46d22ffc), new Word64(0x2e1b2138, 0x5c26c926), new Word64(0x4d2c6dfc, 0x5ac42aed), new Word64(0x53380d13, 0x9d95b3df), new Word64(0x650a7354, 0x8baf63de), new Word64(0x766a0abb, 0x3c77b2a8), new Word64(0x81c2c92e, 0x47edaee6), new Word64(0x92722c85, 0x1482353b), new Word64(0xa2bfe8a1, 0x4cf10364), new Word64(0xa81a664b, 0xbc423001), new Word64(0xc24b8b70, 0xd0f89791), new Word64(0xc76c51a3, 0x0654be30), new Word64(0xd192e819, 0xd6ef5218), new Word64(0xd6990624, 0x5565a910), new Word64(0xf40e3585, 0x5771202a), new Word64(0x106aa070, 0x32bbd1b8), new Word64(0x19a4c116, 0xb8d2d0c8), new Word64(0x1e376c08, 0x5141ab53), new Word64(0x2748774c, 0xdf8eeb99), new Word64(0x34b0bcb5, 0xe19b48a8), new Word64(0x391c0cb3, 0xc5c95a63), new Word64(0x4ed8aa4a, 0xe3418acb), new Word64(0x5b9cca4f, 0x7763e373), new Word64(0x682e6ff3, 0xd6b2b8a3), new Word64(0x748f82ee, 0x5defb2fc), new Word64(0x78a5636f, 0x43172f60), new Word64(0x84c87814, 0xa1f0ab72), new Word64(0x8cc70208, 0x1a6439ec), new Word64(0x90befffa, 0x23631e28), new Word64(0xa4506ceb, 0xde82bde9), new Word64(0xbef9a3f7, 0xb2c67915), new Word64(0xc67178f2, 0xe372532b), new Word64(0xca273ece, 0xea26619c), new Word64(0xd186b8c7, 0x21c0c207), new Word64(0xeada7dd6, 0xcde0eb1e), new Word64(0xf57d4f7f, 0xee6ed178), new Word64(0x06f067aa, 0x72176fba), new Word64(0x0a637dc5, 0xa2c898a6), new Word64(0x113f9804, 0xbef90dae), new Word64(0x1b710b35, 0x131c471b), new Word64(0x28db77f5, 0x23047d84), new Word64(0x32caab7b, 0x40c72493), new Word64(0x3c9ebe0a, 0x15c9bebc), new Word64(0x431d67c4, 0x9c100d4c), new Word64(0x4cc5d4be, 0xcb3e42b6), new Word64(0x597f299c, 0xfc657e2a), new Word64(0x5fcb6fab, 0x3ad6faec), new Word64(0x6c44198c, 0x4a475817)];
  function hash(data, offset, length, mode384) {
    mode384 = !!mode384;
    var h0, h1, h2, h3, h4, h5, h6, h7;
    if (!mode384) {
      h0 = new Word64(0x6a09e667, 0xf3bcc908);
      h1 = new Word64(0xbb67ae85, 0x84caa73b);
      h2 = new Word64(0x3c6ef372, 0xfe94f82b);
      h3 = new Word64(0xa54ff53a, 0x5f1d36f1);
      h4 = new Word64(0x510e527f, 0xade682d1);
      h5 = new Word64(0x9b05688c, 0x2b3e6c1f);
      h6 = new Word64(0x1f83d9ab, 0xfb41bd6b);
      h7 = new Word64(0x5be0cd19, 0x137e2179);
    } else {
      h0 = new Word64(0xcbbb9d5d, 0xc1059ed8);
      h1 = new Word64(0x629a292a, 0x367cd507);
      h2 = new Word64(0x9159015a, 0x3070dd17);
      h3 = new Word64(0x152fecd8, 0xf70e5939);
      h4 = new Word64(0x67332667, 0xffc00b31);
      h5 = new Word64(0x8eb44a87, 0x68581511);
      h6 = new Word64(0xdb0c2e0d, 0x64f98fa7);
      h7 = new Word64(0x47b5481d, 0xbefa4fa4);
    }
    var paddedLength = Math.ceil((length + 17) / 128) * 128;
    var padded = new Uint8Array(paddedLength);
    var i, j, n;
    for (i = 0; i < length; ++i) {
      padded[i] = data[offset++];
    }
    padded[i++] = 0x80;
    n = paddedLength - 16;
    while (i < n) {
      padded[i++] = 0;
    }
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = length >>> 29 & 0xFF;
    padded[i++] = length >> 21 & 0xFF;
    padded[i++] = length >> 13 & 0xFF;
    padded[i++] = length >> 5 & 0xFF;
    padded[i++] = length << 3 & 0xFF;
    var w = new Array(80);
    for (i = 0; i < 80; i++) {
      w[i] = new Word64(0, 0);
    }
    var a = new Word64(0, 0),
        b = new Word64(0, 0),
        c = new Word64(0, 0);
    var d = new Word64(0, 0),
        e = new Word64(0, 0),
        f = new Word64(0, 0);
    var g = new Word64(0, 0),
        h = new Word64(0, 0);
    var t1 = new Word64(0, 0),
        t2 = new Word64(0, 0);
    var tmp1 = new Word64(0, 0),
        tmp2 = new Word64(0, 0),
        tmp3;
    for (i = 0; i < paddedLength;) {
      for (j = 0; j < 16; ++j) {
        w[j].high = padded[i] << 24 | padded[i + 1] << 16 | padded[i + 2] << 8 | padded[i + 3];
        w[j].low = padded[i + 4] << 24 | padded[i + 5] << 16 | padded[i + 6] << 8 | padded[i + 7];
        i += 8;
      }
      for (j = 16; j < 80; ++j) {
        tmp3 = w[j];
        littleSigmaPrime(tmp3, w[j - 2], tmp2);
        tmp3.add(w[j - 7]);
        littleSigma(tmp1, w[j - 15], tmp2);
        tmp3.add(tmp1);
        tmp3.add(w[j - 16]);
      }
      a.assign(h0);
      b.assign(h1);
      c.assign(h2);
      d.assign(h3);
      e.assign(h4);
      f.assign(h5);
      g.assign(h6);
      h.assign(h7);
      for (j = 0; j < 80; ++j) {
        t1.assign(h);
        sigmaPrime(tmp1, e, tmp2);
        t1.add(tmp1);
        ch(tmp1, e, f, g, tmp2);
        t1.add(tmp1);
        t1.add(k[j]);
        t1.add(w[j]);
        sigma(t2, a, tmp2);
        maj(tmp1, a, b, c, tmp2);
        t2.add(tmp1);
        tmp3 = h;
        h = g;
        g = f;
        f = e;
        d.add(t1);
        e = d;
        d = c;
        c = b;
        b = a;
        tmp3.assign(t1);
        tmp3.add(t2);
        a = tmp3;
      }
      h0.add(a);
      h1.add(b);
      h2.add(c);
      h3.add(d);
      h4.add(e);
      h5.add(f);
      h6.add(g);
      h7.add(h);
    }
    var result;
    if (!mode384) {
      result = new Uint8Array(64);
      h0.copyTo(result, 0);
      h1.copyTo(result, 8);
      h2.copyTo(result, 16);
      h3.copyTo(result, 24);
      h4.copyTo(result, 32);
      h5.copyTo(result, 40);
      h6.copyTo(result, 48);
      h7.copyTo(result, 56);
    } else {
      result = new Uint8Array(48);
      h0.copyTo(result, 0);
      h1.copyTo(result, 8);
      h2.copyTo(result, 16);
      h3.copyTo(result, 24);
      h4.copyTo(result, 32);
      h5.copyTo(result, 40);
    }
    return result;
  }
  return hash;
}();
var calculateSHA384 = function calculateSHA384Closure() {
  function hash(data, offset, length) {
    return calculateSHA512(data, offset, length, true);
  }
  return hash;
}();
var NullCipher = function NullCipherClosure() {
  function NullCipher() {}
  NullCipher.prototype = {
    decryptBlock: function NullCipher_decryptBlock(data) {
      return data;
    }
  };
  return NullCipher;
}();

var AESBaseCipher = function () {
  function AESBaseCipher() {
    _classCallCheck(this, AESBaseCipher);

    if (this.constructor === AESBaseCipher) {
      (0, _util.unreachable)('Cannot initialize AESBaseCipher.');
    }
    this._s = new Uint8Array([0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16]);
    this._inv_s = new Uint8Array([0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e, 0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d]);
    this._mix = new Uint32Array([0x00000000, 0x0e090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x038f5fe7, 0x0d8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x058ae132, 0x0b83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x0605bed5, 0x080cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x09808683, 0x07898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0x0a0fd964, 0x0406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0x0c0a67b1, 0x02036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0x0f853856, 0x018c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3]);
    this._mixCol = new Uint8Array(256);
    for (var i = 0; i < 256; i++) {
      if (i < 128) {
        this._mixCol[i] = i << 1;
      } else {
        this._mixCol[i] = i << 1 ^ 0x1b;
      }
    }
    this.buffer = new Uint8Array(16);
    this.bufferPosition = 0;
  }

  _createClass(AESBaseCipher, [{
    key: '_expandKey',
    value: function _expandKey(cipherKey) {
      (0, _util.unreachable)('Cannot call `_expandKey` on the base class');
    }
  }, {
    key: '_decrypt',
    value: function _decrypt(input, key) {
      var t = void 0,
          u = void 0,
          v = void 0;
      var state = new Uint8Array(16);
      state.set(input);
      for (var j = 0, k = this._keySize; j < 16; ++j, ++k) {
        state[j] ^= key[k];
      }
      for (var i = this._cyclesOfRepetition - 1; i >= 1; --i) {
        t = state[13];
        state[13] = state[9];
        state[9] = state[5];
        state[5] = state[1];
        state[1] = t;
        t = state[14];
        u = state[10];
        state[14] = state[6];
        state[10] = state[2];
        state[6] = t;
        state[2] = u;
        t = state[15];
        u = state[11];
        v = state[7];
        state[15] = state[3];
        state[11] = t;
        state[7] = u;
        state[3] = v;
        for (var _j = 0; _j < 16; ++_j) {
          state[_j] = this._inv_s[state[_j]];
        }
        for (var _j2 = 0, _k = i * 16; _j2 < 16; ++_j2, ++_k) {
          state[_j2] ^= key[_k];
        }
        for (var _j3 = 0; _j3 < 16; _j3 += 4) {
          var s0 = this._mix[state[_j3]];
          var s1 = this._mix[state[_j3 + 1]];
          var s2 = this._mix[state[_j3 + 2]];
          var s3 = this._mix[state[_j3 + 3]];
          t = s0 ^ s1 >>> 8 ^ s1 << 24 ^ s2 >>> 16 ^ s2 << 16 ^ s3 >>> 24 ^ s3 << 8;
          state[_j3] = t >>> 24 & 0xFF;
          state[_j3 + 1] = t >> 16 & 0xFF;
          state[_j3 + 2] = t >> 8 & 0xFF;
          state[_j3 + 3] = t & 0xFF;
        }
      }
      t = state[13];
      state[13] = state[9];
      state[9] = state[5];
      state[5] = state[1];
      state[1] = t;
      t = state[14];
      u = state[10];
      state[14] = state[6];
      state[10] = state[2];
      state[6] = t;
      state[2] = u;
      t = state[15];
      u = state[11];
      v = state[7];
      state[15] = state[3];
      state[11] = t;
      state[7] = u;
      state[3] = v;
      for (var _j4 = 0; _j4 < 16; ++_j4) {
        state[_j4] = this._inv_s[state[_j4]];
        state[_j4] ^= key[_j4];
      }
      return state;
    }
  }, {
    key: '_encrypt',
    value: function _encrypt(input, key) {
      var s = this._s;
      var t = void 0,
          u = void 0,
          v = void 0;
      var state = new Uint8Array(16);
      state.set(input);
      for (var j = 0; j < 16; ++j) {
        state[j] ^= key[j];
      }
      for (var i = 1; i < this._cyclesOfRepetition; i++) {
        for (var _j5 = 0; _j5 < 16; ++_j5) {
          state[_j5] = s[state[_j5]];
        }
        v = state[1];
        state[1] = state[5];
        state[5] = state[9];
        state[9] = state[13];
        state[13] = v;
        v = state[2];
        u = state[6];
        state[2] = state[10];
        state[6] = state[14];
        state[10] = v;
        state[14] = u;
        v = state[3];
        u = state[7];
        t = state[11];
        state[3] = state[15];
        state[7] = v;
        state[11] = u;
        state[15] = t;
        for (var _j6 = 0; _j6 < 16; _j6 += 4) {
          var s0 = state[_j6 + 0];
          var s1 = state[_j6 + 1];
          var s2 = state[_j6 + 2];
          var s3 = state[_j6 + 3];
          t = s0 ^ s1 ^ s2 ^ s3;
          state[_j6 + 0] ^= t ^ this._mixCol[s0 ^ s1];
          state[_j6 + 1] ^= t ^ this._mixCol[s1 ^ s2];
          state[_j6 + 2] ^= t ^ this._mixCol[s2 ^ s3];
          state[_j6 + 3] ^= t ^ this._mixCol[s3 ^ s0];
        }
        for (var _j7 = 0, k = i * 16; _j7 < 16; ++_j7, ++k) {
          state[_j7] ^= key[k];
        }
      }
      for (var _j8 = 0; _j8 < 16; ++_j8) {
        state[_j8] = s[state[_j8]];
      }
      v = state[1];
      state[1] = state[5];
      state[5] = state[9];
      state[9] = state[13];
      state[13] = v;
      v = state[2];
      u = state[6];
      state[2] = state[10];
      state[6] = state[14];
      state[10] = v;
      state[14] = u;
      v = state[3];
      u = state[7];
      t = state[11];
      state[3] = state[15];
      state[7] = v;
      state[11] = u;
      state[15] = t;
      for (var _j9 = 0, _k2 = this._keySize; _j9 < 16; ++_j9, ++_k2) {
        state[_j9] ^= key[_k2];
      }
      return state;
    }
  }, {
    key: '_decryptBlock2',
    value: function _decryptBlock2(data, finalize) {
      var sourceLength = data.length;
      var buffer = this.buffer,
          bufferLength = this.bufferPosition;
      var result = [],
          iv = this.iv;
      for (var i = 0; i < sourceLength; ++i) {
        buffer[bufferLength] = data[i];
        ++bufferLength;
        if (bufferLength < 16) {
          continue;
        }
        var plain = this._decrypt(buffer, this._key);
        for (var j = 0; j < 16; ++j) {
          plain[j] ^= iv[j];
        }
        iv = buffer;
        result.push(plain);
        buffer = new Uint8Array(16);
        bufferLength = 0;
      }
      this.buffer = buffer;
      this.bufferLength = bufferLength;
      this.iv = iv;
      if (result.length === 0) {
        return new Uint8Array(0);
      }
      var outputLength = 16 * result.length;
      if (finalize) {
        var lastBlock = result[result.length - 1];
        var psLen = lastBlock[15];
        if (psLen <= 16) {
          for (var _i = 15, ii = 16 - psLen; _i >= ii; --_i) {
            if (lastBlock[_i] !== psLen) {
              psLen = 0;
              break;
            }
          }
          outputLength -= psLen;
          result[result.length - 1] = lastBlock.subarray(0, 16 - psLen);
        }
      }
      var output = new Uint8Array(outputLength);
      for (var _i2 = 0, _j10 = 0, _ii = result.length; _i2 < _ii; ++_i2, _j10 += 16) {
        output.set(result[_i2], _j10);
      }
      return output;
    }
  }, {
    key: 'decryptBlock',
    value: function decryptBlock(data, finalize) {
      var iv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var sourceLength = data.length;
      var buffer = this.buffer,
          bufferLength = this.bufferPosition;
      if (iv) {
        this.iv = iv;
      } else {
        for (var i = 0; bufferLength < 16 && i < sourceLength; ++i, ++bufferLength) {
          buffer[bufferLength] = data[i];
        }
        if (bufferLength < 16) {
          this.bufferLength = bufferLength;
          return new Uint8Array(0);
        }
        this.iv = buffer;
        data = data.subarray(16);
      }
      this.buffer = new Uint8Array(16);
      this.bufferLength = 0;
      this.decryptBlock = this._decryptBlock2;
      return this.decryptBlock(data, finalize);
    }
  }, {
    key: 'encrypt',
    value: function encrypt(data, iv) {
      var sourceLength = data.length;
      var buffer = this.buffer,
          bufferLength = this.bufferPosition;
      var result = [];
      if (!iv) {
        iv = new Uint8Array(16);
      }
      for (var i = 0; i < sourceLength; ++i) {
        buffer[bufferLength] = data[i];
        ++bufferLength;
        if (bufferLength < 16) {
          continue;
        }
        for (var j = 0; j < 16; ++j) {
          buffer[j] ^= iv[j];
        }
        var cipher = this._encrypt(buffer, this._key);
        iv = cipher;
        result.push(cipher);
        buffer = new Uint8Array(16);
        bufferLength = 0;
      }
      this.buffer = buffer;
      this.bufferLength = bufferLength;
      this.iv = iv;
      if (result.length === 0) {
        return new Uint8Array(0);
      }
      var outputLength = 16 * result.length;
      var output = new Uint8Array(outputLength);
      for (var _i3 = 0, _j11 = 0, ii = result.length; _i3 < ii; ++_i3, _j11 += 16) {
        output.set(result[_i3], _j11);
      }
      return output;
    }
  }]);

  return AESBaseCipher;
}();

var AES128Cipher = function (_AESBaseCipher) {
  _inherits(AES128Cipher, _AESBaseCipher);

  function AES128Cipher(key) {
    _classCallCheck(this, AES128Cipher);

    var _this = _possibleConstructorReturn(this, (AES128Cipher.__proto__ || Object.getPrototypeOf(AES128Cipher)).call(this));

    _this._cyclesOfRepetition = 10;
    _this._keySize = 160;
    _this._rcon = new Uint8Array([0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d]);
    _this._key = _this._expandKey(key);
    return _this;
  }

  _createClass(AES128Cipher, [{
    key: '_expandKey',
    value: function _expandKey(cipherKey) {
      var b = 176;
      var s = this._s;
      var rcon = this._rcon;
      var result = new Uint8Array(b);
      result.set(cipherKey);
      for (var j = 16, i = 1; j < b; ++i) {
        var t1 = result[j - 3];
        var t2 = result[j - 2];
        var t3 = result[j - 1];
        var t4 = result[j - 4];
        t1 = s[t1];
        t2 = s[t2];
        t3 = s[t3];
        t4 = s[t4];
        t1 = t1 ^ rcon[i];
        for (var n = 0; n < 4; ++n) {
          result[j] = t1 ^= result[j - 16];
          j++;
          result[j] = t2 ^= result[j - 16];
          j++;
          result[j] = t3 ^= result[j - 16];
          j++;
          result[j] = t4 ^= result[j - 16];
          j++;
        }
      }
      return result;
    }
  }]);

  return AES128Cipher;
}(AESBaseCipher);

var AES256Cipher = function (_AESBaseCipher2) {
  _inherits(AES256Cipher, _AESBaseCipher2);

  function AES256Cipher(key) {
    _classCallCheck(this, AES256Cipher);

    var _this2 = _possibleConstructorReturn(this, (AES256Cipher.__proto__ || Object.getPrototypeOf(AES256Cipher)).call(this));

    _this2._cyclesOfRepetition = 14;
    _this2._keySize = 224;
    _this2._key = _this2._expandKey(key);
    return _this2;
  }

  _createClass(AES256Cipher, [{
    key: '_expandKey',
    value: function _expandKey(cipherKey) {
      var b = 240;
      var s = this._s;
      var result = new Uint8Array(b);
      result.set(cipherKey);
      var r = 1;
      var t1 = void 0,
          t2 = void 0,
          t3 = void 0,
          t4 = void 0;
      for (var j = 32, i = 1; j < b; ++i) {
        if (j % 32 === 16) {
          t1 = s[t1];
          t2 = s[t2];
          t3 = s[t3];
          t4 = s[t4];
        } else if (j % 32 === 0) {
          t1 = result[j - 3];
          t2 = result[j - 2];
          t3 = result[j - 1];
          t4 = result[j - 4];
          t1 = s[t1];
          t2 = s[t2];
          t3 = s[t3];
          t4 = s[t4];
          t1 = t1 ^ r;
          if ((r <<= 1) >= 256) {
            r = (r ^ 0x1b) & 0xFF;
          }
        }
        for (var n = 0; n < 4; ++n) {
          result[j] = t1 ^= result[j - 32];
          j++;
          result[j] = t2 ^= result[j - 32];
          j++;
          result[j] = t3 ^= result[j - 32];
          j++;
          result[j] = t4 ^= result[j - 32];
          j++;
        }
      }
      return result;
    }
  }]);

  return AES256Cipher;
}(AESBaseCipher);

var PDF17 = function PDF17Closure() {
  function compareByteArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  function PDF17() {}
  PDF17.prototype = {
    checkOwnerPassword: function PDF17_checkOwnerPassword(password, ownerValidationSalt, userBytes, ownerPassword) {
      var hashData = new Uint8Array(password.length + 56);
      hashData.set(password, 0);
      hashData.set(ownerValidationSalt, password.length);
      hashData.set(userBytes, password.length + ownerValidationSalt.length);
      var result = calculateSHA256(hashData, 0, hashData.length);
      return compareByteArrays(result, ownerPassword);
    },
    checkUserPassword: function PDF17_checkUserPassword(password, userValidationSalt, userPassword) {
      var hashData = new Uint8Array(password.length + 8);
      hashData.set(password, 0);
      hashData.set(userValidationSalt, password.length);
      var result = calculateSHA256(hashData, 0, hashData.length);
      return compareByteArrays(result, userPassword);
    },
    getOwnerKey: function PDF17_getOwnerKey(password, ownerKeySalt, userBytes, ownerEncryption) {
      var hashData = new Uint8Array(password.length + 56);
      hashData.set(password, 0);
      hashData.set(ownerKeySalt, password.length);
      hashData.set(userBytes, password.length + ownerKeySalt.length);
      var key = calculateSHA256(hashData, 0, hashData.length);
      var cipher = new AES256Cipher(key);
      return cipher.decryptBlock(ownerEncryption, false, new Uint8Array(16));
    },
    getUserKey: function PDF17_getUserKey(password, userKeySalt, userEncryption) {
      var hashData = new Uint8Array(password.length + 8);
      hashData.set(password, 0);
      hashData.set(userKeySalt, password.length);
      var key = calculateSHA256(hashData, 0, hashData.length);
      var cipher = new AES256Cipher(key);
      return cipher.decryptBlock(userEncryption, false, new Uint8Array(16));
    }
  };
  return PDF17;
}();
var PDF20 = function PDF20Closure() {
  function concatArrays(array1, array2) {
    var t = new Uint8Array(array1.length + array2.length);
    t.set(array1, 0);
    t.set(array2, array1.length);
    return t;
  }
  function calculatePDF20Hash(password, input, userBytes) {
    var k = calculateSHA256(input, 0, input.length).subarray(0, 32);
    var e = [0];
    var i = 0;
    while (i < 64 || e[e.length - 1] > i - 32) {
      var arrayLength = password.length + k.length + userBytes.length;
      var k1 = new Uint8Array(arrayLength * 64);
      var array = concatArrays(password, k);
      array = concatArrays(array, userBytes);
      for (var j = 0, pos = 0; j < 64; j++, pos += arrayLength) {
        k1.set(array, pos);
      }
      var cipher = new AES128Cipher(k.subarray(0, 16));
      e = cipher.encrypt(k1, k.subarray(16, 32));
      var remainder = 0;
      for (var z = 0; z < 16; z++) {
        remainder *= 256 % 3;
        remainder %= 3;
        remainder += (e[z] >>> 0) % 3;
        remainder %= 3;
      }
      if (remainder === 0) {
        k = calculateSHA256(e, 0, e.length);
      } else if (remainder === 1) {
        k = calculateSHA384(e, 0, e.length);
      } else if (remainder === 2) {
        k = calculateSHA512(e, 0, e.length);
      }
      i++;
    }
    return k.subarray(0, 32);
  }
  function PDF20() {}
  function compareByteArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  PDF20.prototype = {
    hash: function PDF20_hash(password, concatBytes, userBytes) {
      return calculatePDF20Hash(password, concatBytes, userBytes);
    },
    checkOwnerPassword: function PDF20_checkOwnerPassword(password, ownerValidationSalt, userBytes, ownerPassword) {
      var hashData = new Uint8Array(password.length + 56);
      hashData.set(password, 0);
      hashData.set(ownerValidationSalt, password.length);
      hashData.set(userBytes, password.length + ownerValidationSalt.length);
      var result = calculatePDF20Hash(password, hashData, userBytes);
      return compareByteArrays(result, ownerPassword);
    },
    checkUserPassword: function PDF20_checkUserPassword(password, userValidationSalt, userPassword) {
      var hashData = new Uint8Array(password.length + 8);
      hashData.set(password, 0);
      hashData.set(userValidationSalt, password.length);
      var result = calculatePDF20Hash(password, hashData, []);
      return compareByteArrays(result, userPassword);
    },
    getOwnerKey: function PDF20_getOwnerKey(password, ownerKeySalt, userBytes, ownerEncryption) {
      var hashData = new Uint8Array(password.length + 56);
      hashData.set(password, 0);
      hashData.set(ownerKeySalt, password.length);
      hashData.set(userBytes, password.length + ownerKeySalt.length);
      var key = calculatePDF20Hash(password, hashData, userBytes);
      var cipher = new AES256Cipher(key);
      return cipher.decryptBlock(ownerEncryption, false, new Uint8Array(16));
    },
    getUserKey: function PDF20_getUserKey(password, userKeySalt, userEncryption) {
      var hashData = new Uint8Array(password.length + 8);
      hashData.set(password, 0);
      hashData.set(userKeySalt, password.length);
      var key = calculatePDF20Hash(password, hashData, []);
      var cipher = new AES256Cipher(key);
      return cipher.decryptBlock(userEncryption, false, new Uint8Array(16));
    }
  };
  return PDF20;
}();
var CipherTransform = function CipherTransformClosure() {
  function CipherTransform(stringCipherConstructor, streamCipherConstructor) {
    this.StringCipherConstructor = stringCipherConstructor;
    this.StreamCipherConstructor = streamCipherConstructor;
  }
  CipherTransform.prototype = {
    createStream: function CipherTransform_createStream(stream, length) {
      var cipher = new this.StreamCipherConstructor();
      return new _stream.DecryptStream(stream, length, function cipherTransformDecryptStream(data, finalize) {
        return cipher.decryptBlock(data, finalize);
      });
    },
    decryptString: function CipherTransform_decryptString(s) {
      var cipher = new this.StringCipherConstructor();
      var data = (0, _util.stringToBytes)(s);
      data = cipher.decryptBlock(data, true);
      return (0, _util.bytesToString)(data);
    }
  };
  return CipherTransform;
}();
var CipherTransformFactory = function CipherTransformFactoryClosure() {
  var defaultPasswordBytes = new Uint8Array([0x28, 0xBF, 0x4E, 0x5E, 0x4E, 0x75, 0x8A, 0x41, 0x64, 0x00, 0x4E, 0x56, 0xFF, 0xFA, 0x01, 0x08, 0x2E, 0x2E, 0x00, 0xB6, 0xD0, 0x68, 0x3E, 0x80, 0x2F, 0x0C, 0xA9, 0xFE, 0x64, 0x53, 0x69, 0x7A]);
  function createEncryptionKey20(revision, password, ownerPassword, ownerValidationSalt, ownerKeySalt, uBytes, userPassword, userValidationSalt, userKeySalt, ownerEncryption, userEncryption, perms) {
    if (password) {
      var passwordLength = Math.min(127, password.length);
      password = password.subarray(0, passwordLength);
    } else {
      password = [];
    }
    var pdfAlgorithm;
    if (revision === 6) {
      pdfAlgorithm = new PDF20();
    } else {
      pdfAlgorithm = new PDF17();
    }
    if (pdfAlgorithm.checkUserPassword(password, userValidationSalt, userPassword)) {
      return pdfAlgorithm.getUserKey(password, userKeySalt, userEncryption);
    } else if (password.length && pdfAlgorithm.checkOwnerPassword(password, ownerValidationSalt, uBytes, ownerPassword)) {
      return pdfAlgorithm.getOwnerKey(password, ownerKeySalt, uBytes, ownerEncryption);
    }
    return null;
  }
  function prepareKeyData(fileId, password, ownerPassword, userPassword, flags, revision, keyLength, encryptMetadata) {
    var hashDataSize = 40 + ownerPassword.length + fileId.length;
    var hashData = new Uint8Array(hashDataSize),
        i = 0,
        j,
        n;
    if (password) {
      n = Math.min(32, password.length);
      for (; i < n; ++i) {
        hashData[i] = password[i];
      }
    }
    j = 0;
    while (i < 32) {
      hashData[i++] = defaultPasswordBytes[j++];
    }
    for (j = 0, n = ownerPassword.length; j < n; ++j) {
      hashData[i++] = ownerPassword[j];
    }
    hashData[i++] = flags & 0xFF;
    hashData[i++] = flags >> 8 & 0xFF;
    hashData[i++] = flags >> 16 & 0xFF;
    hashData[i++] = flags >>> 24 & 0xFF;
    for (j = 0, n = fileId.length; j < n; ++j) {
      hashData[i++] = fileId[j];
    }
    if (revision >= 4 && !encryptMetadata) {
      hashData[i++] = 0xFF;
      hashData[i++] = 0xFF;
      hashData[i++] = 0xFF;
      hashData[i++] = 0xFF;
    }
    var hash = calculateMD5(hashData, 0, i);
    var keyLengthInBytes = keyLength >> 3;
    if (revision >= 3) {
      for (j = 0; j < 50; ++j) {
        hash = calculateMD5(hash, 0, keyLengthInBytes);
      }
    }
    var encryptionKey = hash.subarray(0, keyLengthInBytes);
    var cipher, checkData;
    if (revision >= 3) {
      for (i = 0; i < 32; ++i) {
        hashData[i] = defaultPasswordBytes[i];
      }
      for (j = 0, n = fileId.length; j < n; ++j) {
        hashData[i++] = fileId[j];
      }
      cipher = new ARCFourCipher(encryptionKey);
      checkData = cipher.encryptBlock(calculateMD5(hashData, 0, i));
      n = encryptionKey.length;
      var derivedKey = new Uint8Array(n),
          k;
      for (j = 1; j <= 19; ++j) {
        for (k = 0; k < n; ++k) {
          derivedKey[k] = encryptionKey[k] ^ j;
        }
        cipher = new ARCFourCipher(derivedKey);
        checkData = cipher.encryptBlock(checkData);
      }
      for (j = 0, n = checkData.length; j < n; ++j) {
        if (userPassword[j] !== checkData[j]) {
          return null;
        }
      }
    } else {
      cipher = new ARCFourCipher(encryptionKey);
      checkData = cipher.encryptBlock(defaultPasswordBytes);
      for (j = 0, n = checkData.length; j < n; ++j) {
        if (userPassword[j] !== checkData[j]) {
          return null;
        }
      }
    }
    return encryptionKey;
  }
  function decodeUserPassword(password, ownerPassword, revision, keyLength) {
    var hashData = new Uint8Array(32),
        i = 0,
        j,
        n;
    n = Math.min(32, password.length);
    for (; i < n; ++i) {
      hashData[i] = password[i];
    }
    j = 0;
    while (i < 32) {
      hashData[i++] = defaultPasswordBytes[j++];
    }
    var hash = calculateMD5(hashData, 0, i);
    var keyLengthInBytes = keyLength >> 3;
    if (revision >= 3) {
      for (j = 0; j < 50; ++j) {
        hash = calculateMD5(hash, 0, hash.length);
      }
    }
    var cipher, userPassword;
    if (revision >= 3) {
      userPassword = ownerPassword;
      var derivedKey = new Uint8Array(keyLengthInBytes),
          k;
      for (j = 19; j >= 0; j--) {
        for (k = 0; k < keyLengthInBytes; ++k) {
          derivedKey[k] = hash[k] ^ j;
        }
        cipher = new ARCFourCipher(derivedKey);
        userPassword = cipher.encryptBlock(userPassword);
      }
    } else {
      cipher = new ARCFourCipher(hash.subarray(0, keyLengthInBytes));
      userPassword = cipher.encryptBlock(ownerPassword);
    }
    return userPassword;
  }
  var identityName = _primitives.Name.get('Identity');
  function CipherTransformFactory(dict, fileId, password) {
    var filter = dict.get('Filter');
    if (!(0, _primitives.isName)(filter, 'Standard')) {
      throw new _util.FormatError('unknown encryption method');
    }
    this.dict = dict;
    var algorithm = dict.get('V');
    if (!Number.isInteger(algorithm) || algorithm !== 1 && algorithm !== 2 && algorithm !== 4 && algorithm !== 5) {
      throw new _util.FormatError('unsupported encryption algorithm');
    }
    this.algorithm = algorithm;
    var keyLength = dict.get('Length');
    if (!keyLength) {
      if (algorithm <= 3) {
        keyLength = 40;
      } else {
        var cfDict = dict.get('CF');
        var streamCryptoName = dict.get('StmF');
        if ((0, _primitives.isDict)(cfDict) && (0, _primitives.isName)(streamCryptoName)) {
          cfDict.suppressEncryption = true;
          var handlerDict = cfDict.get(streamCryptoName.name);
          keyLength = handlerDict && handlerDict.get('Length') || 128;
          if (keyLength < 40) {
            keyLength <<= 3;
          }
        }
      }
    }
    if (!Number.isInteger(keyLength) || keyLength < 40 || keyLength % 8 !== 0) {
      throw new _util.FormatError('invalid key length');
    }
    var ownerPassword = (0, _util.stringToBytes)(dict.get('O')).subarray(0, 32);
    var userPassword = (0, _util.stringToBytes)(dict.get('U')).subarray(0, 32);
    var flags = dict.get('P');
    var revision = dict.get('R');
    var encryptMetadata = (algorithm === 4 || algorithm === 5) && dict.get('EncryptMetadata') !== false;
    this.encryptMetadata = encryptMetadata;
    var fileIdBytes = (0, _util.stringToBytes)(fileId);
    var passwordBytes;
    if (password) {
      if (revision === 6) {
        try {
          password = (0, _util.utf8StringToString)(password);
        } catch (ex) {
          (0, _util.warn)('CipherTransformFactory: ' + 'Unable to convert UTF8 encoded password.');
        }
      }
      passwordBytes = (0, _util.stringToBytes)(password);
    }
    var encryptionKey;
    if (algorithm !== 5) {
      encryptionKey = prepareKeyData(fileIdBytes, passwordBytes, ownerPassword, userPassword, flags, revision, keyLength, encryptMetadata);
    } else {
      var ownerValidationSalt = (0, _util.stringToBytes)(dict.get('O')).subarray(32, 40);
      var ownerKeySalt = (0, _util.stringToBytes)(dict.get('O')).subarray(40, 48);
      var uBytes = (0, _util.stringToBytes)(dict.get('U')).subarray(0, 48);
      var userValidationSalt = (0, _util.stringToBytes)(dict.get('U')).subarray(32, 40);
      var userKeySalt = (0, _util.stringToBytes)(dict.get('U')).subarray(40, 48);
      var ownerEncryption = (0, _util.stringToBytes)(dict.get('OE'));
      var userEncryption = (0, _util.stringToBytes)(dict.get('UE'));
      var perms = (0, _util.stringToBytes)(dict.get('Perms'));
      encryptionKey = createEncryptionKey20(revision, passwordBytes, ownerPassword, ownerValidationSalt, ownerKeySalt, uBytes, userPassword, userValidationSalt, userKeySalt, ownerEncryption, userEncryption, perms);
    }
    if (!encryptionKey && !password) {
      throw new _util.PasswordException('No password given', _util.PasswordResponses.NEED_PASSWORD);
    } else if (!encryptionKey && password) {
      var decodedPassword = decodeUserPassword(passwordBytes, ownerPassword, revision, keyLength);
      encryptionKey = prepareKeyData(fileIdBytes, decodedPassword, ownerPassword, userPassword, flags, revision, keyLength, encryptMetadata);
    }
    if (!encryptionKey) {
      throw new _util.PasswordException('Incorrect Password', _util.PasswordResponses.INCORRECT_PASSWORD);
    }
    this.encryptionKey = encryptionKey;
    if (algorithm >= 4) {
      var cf = dict.get('CF');
      if ((0, _primitives.isDict)(cf)) {
        cf.suppressEncryption = true;
      }
      this.cf = cf;
      this.stmf = dict.get('StmF') || identityName;
      this.strf = dict.get('StrF') || identityName;
      this.eff = dict.get('EFF') || this.stmf;
    }
  }
  function buildObjectKey(num, gen, encryptionKey, isAes) {
    var key = new Uint8Array(encryptionKey.length + 9),
        i,
        n;
    for (i = 0, n = encryptionKey.length; i < n; ++i) {
      key[i] = encryptionKey[i];
    }
    key[i++] = num & 0xFF;
    key[i++] = num >> 8 & 0xFF;
    key[i++] = num >> 16 & 0xFF;
    key[i++] = gen & 0xFF;
    key[i++] = gen >> 8 & 0xFF;
    if (isAes) {
      key[i++] = 0x73;
      key[i++] = 0x41;
      key[i++] = 0x6C;
      key[i++] = 0x54;
    }
    var hash = calculateMD5(key, 0, i);
    return hash.subarray(0, Math.min(encryptionKey.length + 5, 16));
  }
  function buildCipherConstructor(cf, name, num, gen, key) {
    if (!(0, _primitives.isName)(name)) {
      throw new _util.FormatError('Invalid crypt filter name.');
    }
    var cryptFilter = cf.get(name.name);
    var cfm;
    if (cryptFilter !== null && cryptFilter !== undefined) {
      cfm = cryptFilter.get('CFM');
    }
    if (!cfm || cfm.name === 'None') {
      return function cipherTransformFactoryBuildCipherConstructorNone() {
        return new NullCipher();
      };
    }
    if (cfm.name === 'V2') {
      return function cipherTransformFactoryBuildCipherConstructorV2() {
        return new ARCFourCipher(buildObjectKey(num, gen, key, false));
      };
    }
    if (cfm.name === 'AESV2') {
      return function cipherTransformFactoryBuildCipherConstructorAESV2() {
        return new AES128Cipher(buildObjectKey(num, gen, key, true));
      };
    }
    if (cfm.name === 'AESV3') {
      return function cipherTransformFactoryBuildCipherConstructorAESV3() {
        return new AES256Cipher(key);
      };
    }
    throw new _util.FormatError('Unknown crypto method');
  }
  CipherTransformFactory.prototype = {
    createCipherTransform: function CipherTransformFactory_createCipherTransform(num, gen) {
      if (this.algorithm === 4 || this.algorithm === 5) {
        return new CipherTransform(buildCipherConstructor(this.cf, this.stmf, num, gen, this.encryptionKey), buildCipherConstructor(this.cf, this.strf, num, gen, this.encryptionKey));
      }
      var key = buildObjectKey(num, gen, this.encryptionKey, false);
      var cipherConstructor = function buildCipherCipherConstructor() {
        return new ARCFourCipher(key);
      };
      return new CipherTransform(cipherConstructor, cipherConstructor);
    }
  };
  return CipherTransformFactory;
}();
exports.AES128Cipher = AES128Cipher;
exports.AES256Cipher = AES256Cipher;
exports.ARCFourCipher = ARCFourCipher;
exports.CipherTransformFactory = CipherTransformFactory;
exports.PDF17 = PDF17;
exports.PDF20 = PDF20;
exports.calculateMD5 = calculateMD5;
exports.calculateSHA256 = calculateSHA256;
exports.calculateSHA384 = calculateSHA384;
exports.calculateSHA512 = calculateSHA512;

/***/ }),
/* 136 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorSpace = undefined;

var _util = __w_pdfjs_require__(2);

var _primitives = __w_pdfjs_require__(123);

var ColorSpace = function ColorSpaceClosure() {
  function resizeRgbImage(src, dest, w1, h1, w2, h2, alpha01) {
    var COMPONENTS = 3;
    alpha01 = alpha01 !== 1 ? 0 : alpha01;
    var xRatio = w1 / w2;
    var yRatio = h1 / h2;
    var i,
        j,
        py,
        newIndex = 0,
        oldIndex;
    var xScaled = new Uint16Array(w2);
    var w1Scanline = w1 * COMPONENTS;
    for (i = 0; i < w2; i++) {
      xScaled[i] = Math.floor(i * xRatio) * COMPONENTS;
    }
    for (i = 0; i < h2; i++) {
      py = Math.floor(i * yRatio) * w1Scanline;
      for (j = 0; j < w2; j++) {
        oldIndex = py + xScaled[j];
        dest[newIndex++] = src[oldIndex++];
        dest[newIndex++] = src[oldIndex++];
        dest[newIndex++] = src[oldIndex++];
        newIndex += alpha01;
      }
    }
  }
  function ColorSpace() {
    (0, _util.unreachable)('should not call ColorSpace constructor');
  }
  ColorSpace.prototype = {
    getRgb: function getRgb(src, srcOffset) {
      var rgb = new Uint8ClampedArray(3);
      this.getRgbItem(src, srcOffset, rgb, 0);
      return rgb;
    },
    getRgbItem: function getRgbItem(src, srcOffset, dest, destOffset) {
      (0, _util.unreachable)('Should not call ColorSpace.getRgbItem');
    },
    getRgbBuffer: function getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      (0, _util.unreachable)('Should not call ColorSpace.getRgbBuffer');
    },
    getOutputLength: function getOutputLength(inputLength, alpha01) {
      (0, _util.unreachable)('Should not call ColorSpace.getOutputLength');
    },
    isPassthrough: function isPassthrough(bits) {
      return false;
    },
    fillRgb: function fillRgb(dest, originalWidth, originalHeight, width, height, actualHeight, bpc, comps, alpha01) {
      var count = originalWidth * originalHeight;
      var rgbBuf = null;
      var numComponentColors = 1 << bpc;
      var needsResizing = originalHeight !== height || originalWidth !== width;
      var i, ii;
      if (this.isPassthrough(bpc)) {
        rgbBuf = comps;
      } else if (this.numComps === 1 && count > numComponentColors && this.name !== 'DeviceGray' && this.name !== 'DeviceRGB') {
        var allColors = bpc <= 8 ? new Uint8Array(numComponentColors) : new Uint16Array(numComponentColors);
        var key;
        for (i = 0; i < numComponentColors; i++) {
          allColors[i] = i;
        }
        var colorMap = new Uint8ClampedArray(numComponentColors * 3);
        this.getRgbBuffer(allColors, 0, numComponentColors, colorMap, 0, bpc, 0);
        var destPos, rgbPos;
        if (!needsResizing) {
          destPos = 0;
          for (i = 0; i < count; ++i) {
            key = comps[i] * 3;
            dest[destPos++] = colorMap[key];
            dest[destPos++] = colorMap[key + 1];
            dest[destPos++] = colorMap[key + 2];
            destPos += alpha01;
          }
        } else {
          rgbBuf = new Uint8Array(count * 3);
          rgbPos = 0;
          for (i = 0; i < count; ++i) {
            key = comps[i] * 3;
            rgbBuf[rgbPos++] = colorMap[key];
            rgbBuf[rgbPos++] = colorMap[key + 1];
            rgbBuf[rgbPos++] = colorMap[key + 2];
          }
        }
      } else {
        if (!needsResizing) {
          this.getRgbBuffer(comps, 0, width * actualHeight, dest, 0, bpc, alpha01);
        } else {
          rgbBuf = new Uint8ClampedArray(count * 3);
          this.getRgbBuffer(comps, 0, count, rgbBuf, 0, bpc, 0);
        }
      }
      if (rgbBuf) {
        if (needsResizing) {
          resizeRgbImage(rgbBuf, dest, originalWidth, originalHeight, width, height, alpha01);
        } else {
          rgbPos = 0;
          destPos = 0;
          for (i = 0, ii = width * actualHeight; i < ii; i++) {
            dest[destPos++] = rgbBuf[rgbPos++];
            dest[destPos++] = rgbBuf[rgbPos++];
            dest[destPos++] = rgbBuf[rgbPos++];
            destPos += alpha01;
          }
        }
      }
    },

    usesZeroToOneRange: true
  };
  ColorSpace.parse = function (cs, xref, res, pdfFunctionFactory) {
    var IR = ColorSpace.parseToIR(cs, xref, res, pdfFunctionFactory);
    return ColorSpace.fromIR(IR);
  };
  ColorSpace.fromIR = function (IR) {
    var name = Array.isArray(IR) ? IR[0] : IR;
    var whitePoint, blackPoint, gamma;
    switch (name) {
      case 'DeviceGrayCS':
        return this.singletons.gray;
      case 'DeviceRgbCS':
        return this.singletons.rgb;
      case 'DeviceCmykCS':
        return this.singletons.cmyk;
      case 'CalGrayCS':
        whitePoint = IR[1];
        blackPoint = IR[2];
        gamma = IR[3];
        return new CalGrayCS(whitePoint, blackPoint, gamma);
      case 'CalRGBCS':
        whitePoint = IR[1];
        blackPoint = IR[2];
        gamma = IR[3];
        var matrix = IR[4];
        return new CalRGBCS(whitePoint, blackPoint, gamma, matrix);
      case 'PatternCS':
        var basePatternCS = IR[1];
        if (basePatternCS) {
          basePatternCS = ColorSpace.fromIR(basePatternCS);
        }
        return new PatternCS(basePatternCS);
      case 'IndexedCS':
        var baseIndexedCS = IR[1];
        var hiVal = IR[2];
        var lookup = IR[3];
        return new IndexedCS(ColorSpace.fromIR(baseIndexedCS), hiVal, lookup);
      case 'AlternateCS':
        var numComps = IR[1];
        var alt = IR[2];
        var tintFn = IR[3];
        return new AlternateCS(numComps, ColorSpace.fromIR(alt), tintFn);
      case 'LabCS':
        whitePoint = IR[1];
        blackPoint = IR[2];
        var range = IR[3];
        return new LabCS(whitePoint, blackPoint, range);
      default:
        throw new _util.FormatError('Unknown colorspace name: ' + name);
    }
  };
  ColorSpace.parseToIR = function (cs, xref) {
    var res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var pdfFunctionFactory = arguments[3];

    cs = xref.fetchIfRef(cs);
    if ((0, _primitives.isName)(cs)) {
      switch (cs.name) {
        case 'DeviceGray':
        case 'G':
          return 'DeviceGrayCS';
        case 'DeviceRGB':
        case 'RGB':
          return 'DeviceRgbCS';
        case 'DeviceCMYK':
        case 'CMYK':
          return 'DeviceCmykCS';
        case 'Pattern':
          return ['PatternCS', null];
        default:
          if ((0, _primitives.isDict)(res)) {
            var colorSpaces = res.get('ColorSpace');
            if ((0, _primitives.isDict)(colorSpaces)) {
              var resCS = colorSpaces.get(cs.name);
              if (resCS) {
                if ((0, _primitives.isName)(resCS)) {
                  return ColorSpace.parseToIR(resCS, xref, res, pdfFunctionFactory);
                }
                cs = resCS;
                break;
              }
            }
          }
          throw new _util.FormatError('unrecognized colorspace ' + cs.name);
      }
    }
    if (Array.isArray(cs)) {
      var mode = xref.fetchIfRef(cs[0]).name;
      var numComps, params, alt, whitePoint, blackPoint, gamma;
      switch (mode) {
        case 'DeviceGray':
        case 'G':
          return 'DeviceGrayCS';
        case 'DeviceRGB':
        case 'RGB':
          return 'DeviceRgbCS';
        case 'DeviceCMYK':
        case 'CMYK':
          return 'DeviceCmykCS';
        case 'CalGray':
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray('WhitePoint');
          blackPoint = params.getArray('BlackPoint');
          gamma = params.get('Gamma');
          return ['CalGrayCS', whitePoint, blackPoint, gamma];
        case 'CalRGB':
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray('WhitePoint');
          blackPoint = params.getArray('BlackPoint');
          gamma = params.getArray('Gamma');
          var matrix = params.getArray('Matrix');
          return ['CalRGBCS', whitePoint, blackPoint, gamma, matrix];
        case 'ICCBased':
          var stream = xref.fetchIfRef(cs[1]);
          var dict = stream.dict;
          numComps = dict.get('N');
          alt = dict.get('Alternate');
          if (alt) {
            var altIR = ColorSpace.parseToIR(alt, xref, res, pdfFunctionFactory);
            var altCS = ColorSpace.fromIR(altIR, pdfFunctionFactory);
            if (altCS.numComps === numComps) {
              return altIR;
            }
            (0, _util.warn)('ICCBased color space: Ignoring incorrect /Alternate entry.');
          }
          if (numComps === 1) {
            return 'DeviceGrayCS';
          } else if (numComps === 3) {
            return 'DeviceRgbCS';
          } else if (numComps === 4) {
            return 'DeviceCmykCS';
          }
          break;
        case 'Pattern':
          var basePatternCS = cs[1] || null;
          if (basePatternCS) {
            basePatternCS = ColorSpace.parseToIR(basePatternCS, xref, res, pdfFunctionFactory);
          }
          return ['PatternCS', basePatternCS];
        case 'Indexed':
        case 'I':
          var baseIndexedCS = ColorSpace.parseToIR(cs[1], xref, res, pdfFunctionFactory);
          var hiVal = xref.fetchIfRef(cs[2]) + 1;
          var lookup = xref.fetchIfRef(cs[3]);
          if ((0, _primitives.isStream)(lookup)) {
            lookup = lookup.getBytes();
          }
          return ['IndexedCS', baseIndexedCS, hiVal, lookup];
        case 'Separation':
        case 'DeviceN':
          var name = xref.fetchIfRef(cs[1]);
          numComps = Array.isArray(name) ? name.length : 1;
          alt = ColorSpace.parseToIR(cs[2], xref, res, pdfFunctionFactory);
          var tintFn = pdfFunctionFactory.create(xref.fetchIfRef(cs[3]));
          return ['AlternateCS', numComps, alt, tintFn];
        case 'Lab':
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray('WhitePoint');
          blackPoint = params.getArray('BlackPoint');
          var range = params.getArray('Range');
          return ['LabCS', whitePoint, blackPoint, range];
        default:
          throw new _util.FormatError('unimplemented color space object "' + mode + '"');
      }
    }
    throw new _util.FormatError('unrecognized color space object: "' + cs + '"');
  };
  ColorSpace.isDefaultDecode = function (decode, n) {
    if (!Array.isArray(decode)) {
      return true;
    }
    if (n * 2 !== decode.length) {
      (0, _util.warn)('The decode map is not the correct length');
      return true;
    }
    for (var i = 0, ii = decode.length; i < ii; i += 2) {
      if (decode[i] !== 0 || decode[i + 1] !== 1) {
        return false;
      }
    }
    return true;
  };
  ColorSpace.singletons = {
    get gray() {
      return (0, _util.shadow)(this, 'gray', new DeviceGrayCS());
    },
    get rgb() {
      return (0, _util.shadow)(this, 'rgb', new DeviceRgbCS());
    },
    get cmyk() {
      return (0, _util.shadow)(this, 'cmyk', new DeviceCmykCS());
    }
  };
  return ColorSpace;
}();
var AlternateCS = function AlternateCSClosure() {
  function AlternateCS(numComps, base, tintFn) {
    this.name = 'Alternate';
    this.numComps = numComps;
    this.defaultColor = new Float32Array(numComps);
    for (var i = 0; i < numComps; ++i) {
      this.defaultColor[i] = 1;
    }
    this.base = base;
    this.tintFn = tintFn;
    this.tmpBuf = new Float32Array(base.numComps);
  }
  AlternateCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function getRgbItem(src, srcOffset, dest, destOffset) {
      var tmpBuf = this.tmpBuf;
      this.tintFn(src, srcOffset, tmpBuf, 0);
      this.base.getRgbItem(tmpBuf, 0, dest, destOffset);
    },
    getRgbBuffer: function getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var tintFn = this.tintFn;
      var base = this.base;
      var scale = 1 / ((1 << bits) - 1);
      var baseNumComps = base.numComps;
      var usesZeroToOneRange = base.usesZeroToOneRange;
      var isPassthrough = (base.isPassthrough(8) || !usesZeroToOneRange) && alpha01 === 0;
      var pos = isPassthrough ? destOffset : 0;
      var baseBuf = isPassthrough ? dest : new Uint8ClampedArray(baseNumComps * count);
      var numComps = this.numComps;
      var scaled = new Float32Array(numComps);
      var tinted = new Float32Array(baseNumComps);
      var i, j;
      for (i = 0; i < count; i++) {
        for (j = 0; j < numComps; j++) {
          scaled[j] = src[srcOffset++] * scale;
        }
        tintFn(scaled, 0, tinted, 0);
        if (usesZeroToOneRange) {
          for (j = 0; j < baseNumComps; j++) {
            baseBuf[pos++] = tinted[j] * 255;
          }
        } else {
          base.getRgbItem(tinted, 0, baseBuf, pos);
          pos += baseNumComps;
        }
      }
      if (!isPassthrough) {
        base.getRgbBuffer(baseBuf, 0, count, dest, destOffset, 8, alpha01);
      }
    },
    getOutputLength: function getOutputLength(inputLength, alpha01) {
      return this.base.getOutputLength(inputLength * this.base.numComps / this.numComps, alpha01);
    },

    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },

    usesZeroToOneRange: true
  };
  return AlternateCS;
}();
var PatternCS = function PatternCSClosure() {
  function PatternCS(baseCS) {
    this.name = 'Pattern';
    this.base = baseCS;
  }
  PatternCS.prototype = {};
  return PatternCS;
}();
var IndexedCS = function IndexedCSClosure() {
  function IndexedCS(base, highVal, lookup) {
    this.name = 'Indexed';
    this.numComps = 1;
    this.defaultColor = new Uint8Array(this.numComps);
    this.base = base;
    this.highVal = highVal;
    var baseNumComps = base.numComps;
    var length = baseNumComps * highVal;
    if ((0, _primitives.isStream)(lookup)) {
      this.lookup = new Uint8Array(length);
      var bytes = lookup.getBytes(length);
      this.lookup.set(bytes);
    } else if ((0, _util.isString)(lookup)) {
      this.lookup = new Uint8Array(length);
      for (var i = 0; i < length; ++i) {
        this.lookup[i] = lookup.charCodeAt(i);
      }
    } else if (lookup instanceof Uint8Array) {
      this.lookup = lookup;
    } else {
      throw new _util.FormatError('Unrecognized lookup table: ' + lookup);
    }
  }
  IndexedCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function getRgbItem(src, srcOffset, dest, destOffset) {
      var numComps = this.base.numComps;
      var start = src[srcOffset] * numComps;
      this.base.getRgbBuffer(this.lookup, start, 1, dest, destOffset, 8, 0);
    },
    getRgbBuffer: function getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var base = this.base;
      var numComps = base.numComps;
      var outputDelta = base.getOutputLength(numComps, alpha01);
      var lookup = this.lookup;
      for (var i = 0; i < count; ++i) {
        var lookupPos = src[srcOffset++] * numComps;
        base.getRgbBuffer(lookup, lookupPos, 1, dest, destOffset, 8, alpha01);
        destOffset += outputDelta;
      }
    },
    getOutputLength: function getOutputLength(inputLength, alpha01) {
      return this.base.getOutputLength(inputLength * this.base.numComps, alpha01);
    },

    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function isDefaultDecode(decodeMap) {
      return true;
    },

    usesZeroToOneRange: true
  };
  return IndexedCS;
}();
var DeviceGrayCS = function DeviceGrayCSClosure() {
  function DeviceGrayCS() {
    this.name = 'DeviceGray';
    this.numComps = 1;
    this.defaultColor = new Float32Array(this.numComps);
  }
  DeviceGrayCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function getRgbItem(src, srcOffset, dest, destOffset) {
      var c = src[srcOffset] * 255;
      dest[destOffset] = dest[destOffset + 1] = dest[destOffset + 2] = c;
    },
    getRgbBuffer: function getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var scale = 255 / ((1 << bits) - 1);
      var j = srcOffset,
          q = destOffset;
      for (var i = 0; i < count; ++i) {
        var c = scale * src[j++];
        dest[q++] = c;
        dest[q++] = c;
        dest[q++] = c;
        q += alpha01;
      }
    },
    getOutputLength: function getOutputLength(inputLength, alpha01) {
      return inputLength * (3 + alpha01);
    },

    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },

    usesZeroToOneRange: true
  };
  return DeviceGrayCS;
}();
var DeviceRgbCS = function DeviceRgbCSClosure() {
  function DeviceRgbCS() {
    this.name = 'DeviceRGB';
    this.numComps = 3;
    this.defaultColor = new Float32Array(this.numComps);
  }
  DeviceRgbCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function getRgbItem(src, srcOffset, dest, destOffset) {
      dest[destOffset] = src[srcOffset] * 255;
      dest[destOffset + 1] = src[srcOffset + 1] * 255;
      dest[destOffset + 2] = src[srcOffset + 2] * 255;
    },
    getRgbBuffer: function getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      if (bits === 8 && alpha01 === 0) {
        dest.set(src.subarray(srcOffset, srcOffset + count * 3), destOffset);
        return;
      }
      var scale = 255 / ((1 << bits) - 1);
      var j = srcOffset,
          q = destOffset;
      for (var i = 0; i < count; ++i) {
        dest[q++] = scale * src[j++];
        dest[q++] = scale * src[j++];
        dest[q++] = scale * src[j++];
        q += alpha01;
      }
    },
    getOutputLength: function getOutputLength(inputLength, alpha01) {
      return inputLength * (3 + alpha01) / 3 | 0;
    },
    isPassthrough: function isPassthrough(bits) {
      return bits === 8;
    },

    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },

    usesZeroToOneRange: true
  };
  return DeviceRgbCS;
}();
var DeviceCmykCS = function DeviceCmykCSClosure() {
  function convertToRgb(src, srcOffset, srcScale, dest, destOffset) {
    var c = src[srcOffset] * srcScale;
    var m = src[srcOffset + 1] * srcScale;
    var y = src[srcOffset + 2] * srcScale;
    var k = src[srcOffset + 3] * srcScale;
    dest[destOffset] = 255 + c * (-4.387332384609988 * c + 54.48615194189176 * m + 18.82290502165302 * y + 212.25662451639585 * k + -285.2331026137004) + m * (1.7149763477362134 * m - 5.6096736904047315 * y + -17.873870861415444 * k - 5.497006427196366) + y * (-2.5217340131683033 * y - 21.248923337353073 * k + 17.5119270841813) + k * (-21.86122147463605 * k - 189.48180835922747);
    dest[destOffset + 1] = 255 + c * (8.841041422036149 * c + 60.118027045597366 * m + 6.871425592049007 * y + 31.159100130055922 * k + -79.2970844816548) + m * (-15.310361306967817 * m + 17.575251261109482 * y + 131.35250912493976 * k - 190.9453302588951) + y * (4.444339102852739 * y + 9.8632861493405 * k - 24.86741582555878) + k * (-20.737325471181034 * k - 187.80453709719578);
    dest[destOffset + 2] = 255 + c * (0.8842522430003296 * c + 8.078677503112928 * m + 30.89978309703729 * y - 0.23883238689178934 * k + -14.183576799673286) + m * (10.49593273432072 * m + 63.02378494754052 * y + 50.606957656360734 * k - 112.23884253719248) + y * (0.03296041114873217 * y + 115.60384449646641 * k + -193.58209356861505) + k * (-22.33816807309886 * k - 180.12613974708367);
  }
  function DeviceCmykCS() {
    this.name = 'DeviceCMYK';
    this.numComps = 4;
    this.defaultColor = new Float32Array(this.numComps);
    this.defaultColor[3] = 1;
  }
  DeviceCmykCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function getRgbItem(src, srcOffset, dest, destOffset) {
      convertToRgb(src, srcOffset, 1, dest, destOffset);
    },
    getRgbBuffer: function getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var scale = 1 / ((1 << bits) - 1);
      for (var i = 0; i < count; i++) {
        convertToRgb(src, srcOffset, scale, dest, destOffset);
        srcOffset += 4;
        destOffset += 3 + alpha01;
      }
    },
    getOutputLength: function getOutputLength(inputLength, alpha01) {
      return inputLength / 4 * (3 + alpha01) | 0;
    },

    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },

    usesZeroToOneRange: true
  };
  return DeviceCmykCS;
}();
var CalGrayCS = function CalGrayCSClosure() {
  function CalGrayCS(whitePoint, blackPoint, gamma) {
    this.name = 'CalGray';
    this.numComps = 1;
    this.defaultColor = new Float32Array(this.numComps);
    if (!whitePoint) {
      throw new _util.FormatError('WhitePoint missing - required for color space CalGray');
    }
    blackPoint = blackPoint || [0, 0, 0];
    gamma = gamma || 1;
    this.XW = whitePoint[0];
    this.YW = whitePoint[1];
    this.ZW = whitePoint[2];
    this.XB = blackPoint[0];
    this.YB = blackPoint[1];
    this.ZB = blackPoint[2];
    this.G = gamma;
    if (this.XW < 0 || this.ZW < 0 || this.YW !== 1) {
      throw new _util.FormatError('Invalid WhitePoint components for ' + this.name + ', no fallback available');
    }
    if (this.XB < 0 || this.YB < 0 || this.ZB < 0) {
      (0, _util.info)('Invalid BlackPoint for ' + this.name + ', falling back to default');
      this.XB = this.YB = this.ZB = 0;
    }
    if (this.XB !== 0 || this.YB !== 0 || this.ZB !== 0) {
      (0, _util.warn)(this.name + ', BlackPoint: XB: ' + this.XB + ', YB: ' + this.YB + ', ZB: ' + this.ZB + ', only default values are supported.');
    }
    if (this.G < 1) {
      (0, _util.info)('Invalid Gamma: ' + this.G + ' for ' + this.name + ', falling back to default');
      this.G = 1;
    }
  }
  function convertToRgb(cs, src, srcOffset, dest, destOffset, scale) {
    var A = src[srcOffset] * scale;
    var AG = Math.pow(A, cs.G);
    var L = cs.YW * AG;
    var val = Math.max(295.8 * Math.pow(L, 0.333333333333333333) - 40.8, 0);
    dest[destOffset] = val;
    dest[destOffset + 1] = val;
    dest[destOffset + 2] = val;
  }
  CalGrayCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function getRgbItem(src, srcOffset, dest, destOffset) {
      convertToRgb(this, src, srcOffset, dest, destOffset, 1);
    },
    getRgbBuffer: function getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var scale = 1 / ((1 << bits) - 1);
      for (var i = 0; i < count; ++i) {
        convertToRgb(this, src, srcOffset, dest, destOffset, scale);
        srcOffset += 1;
        destOffset += 3 + alpha01;
      }
    },
    getOutputLength: function getOutputLength(inputLength, alpha01) {
      return inputLength * (3 + alpha01);
    },

    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },

    usesZeroToOneRange: true
  };
  return CalGrayCS;
}();
var CalRGBCS = function CalRGBCSClosure() {
  var BRADFORD_SCALE_MATRIX = new Float32Array([0.8951, 0.2664, -0.1614, -0.7502, 1.7135, 0.0367, 0.0389, -0.0685, 1.0296]);
  var BRADFORD_SCALE_INVERSE_MATRIX = new Float32Array([0.9869929, -0.1470543, 0.1599627, 0.4323053, 0.5183603, 0.0492912, -0.0085287, 0.0400428, 0.9684867]);
  var SRGB_D65_XYZ_TO_RGB_MATRIX = new Float32Array([3.2404542, -1.5371385, -0.4985314, -0.9692660, 1.8760108, 0.0415560, 0.0556434, -0.2040259, 1.0572252]);
  var FLAT_WHITEPOINT_MATRIX = new Float32Array([1, 1, 1]);
  var tempNormalizeMatrix = new Float32Array(3);
  var tempConvertMatrix1 = new Float32Array(3);
  var tempConvertMatrix2 = new Float32Array(3);
  var DECODE_L_CONSTANT = Math.pow((8 + 16) / 116, 3) / 8.0;
  function CalRGBCS(whitePoint, blackPoint, gamma, matrix) {
    this.name = 'CalRGB';
    this.numComps = 3;
    this.defaultColor = new Float32Array(this.numComps);
    if (!whitePoint) {
      throw new _util.FormatError('WhitePoint missing - required for color space CalRGB');
    }
    blackPoint = blackPoint || new Float32Array(3);
    gamma = gamma || new Float32Array([1, 1, 1]);
    matrix = matrix || new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    var XW = whitePoint[0];
    var YW = whitePoint[1];
    var ZW = whitePoint[2];
    this.whitePoint = whitePoint;
    var XB = blackPoint[0];
    var YB = blackPoint[1];
    var ZB = blackPoint[2];
    this.blackPoint = blackPoint;
    this.GR = gamma[0];
    this.GG = gamma[1];
    this.GB = gamma[2];
    this.MXA = matrix[0];
    this.MYA = matrix[1];
    this.MZA = matrix[2];
    this.MXB = matrix[3];
    this.MYB = matrix[4];
    this.MZB = matrix[5];
    this.MXC = matrix[6];
    this.MYC = matrix[7];
    this.MZC = matrix[8];
    if (XW < 0 || ZW < 0 || YW !== 1) {
      throw new _util.FormatError('Invalid WhitePoint components for ' + this.name + ', no fallback available');
    }
    if (XB < 0 || YB < 0 || ZB < 0) {
      (0, _util.info)('Invalid BlackPoint for ' + this.name + ' [' + XB + ', ' + YB + ', ' + ZB + '], falling back to default');
      this.blackPoint = new Float32Array(3);
    }
    if (this.GR < 0 || this.GG < 0 || this.GB < 0) {
      (0, _util.info)('Invalid Gamma [' + this.GR + ', ' + this.GG + ', ' + this.GB + '] for ' + this.name + ', falling back to default');
      this.GR = this.GG = this.GB = 1;
    }
  }
  function matrixProduct(a, b, result) {
    result[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    result[1] = a[3] * b[0] + a[4] * b[1] + a[5] * b[2];
    result[2] = a[6] * b[0] + a[7] * b[1] + a[8] * b[2];
  }
  function convertToFlat(sourceWhitePoint, LMS, result) {
    result[0] = LMS[0] * 1 / sourceWhitePoint[0];
    result[1] = LMS[1] * 1 / sourceWhitePoint[1];
    result[2] = LMS[2] * 1 / sourceWhitePoint[2];
  }
  function convertToD65(sourceWhitePoint, LMS, result) {
    var D65X = 0.95047;
    var D65Y = 1;
    var D65Z = 1.08883;
    result[0] = LMS[0] * D65X / sourceWhitePoint[0];
    result[1] = LMS[1] * D65Y / sourceWhitePoint[1];
    result[2] = LMS[2] * D65Z / sourceWhitePoint[2];
  }
  function sRGBTransferFunction(color) {
    if (color <= 0.0031308) {
      return adjustToRange(0, 1, 12.92 * color);
    }
    return adjustToRange(0, 1, (1 + 0.055) * Math.pow(color, 1 / 2.4) - 0.055);
  }
  function adjustToRange(min, max, value) {
    return Math.max(min, Math.min(max, value));
  }
  function decodeL(L) {
    if (L < 0) {
      return -decodeL(-L);
    }
    if (L > 8.0) {
      return Math.pow((L + 16) / 116, 3);
    }
    return L * DECODE_L_CONSTANT;
  }
  function compensateBlackPoint(sourceBlackPoint, XYZ_Flat, result) {
    if (sourceBlackPoint[0] === 0 && sourceBlackPoint[1] === 0 && sourceBlackPoint[2] === 0) {
      result[0] = XYZ_Flat[0];
      result[1] = XYZ_Flat[1];
      result[2] = XYZ_Flat[2];
      return;
    }
    var zeroDecodeL = decodeL(0);
    var X_DST = zeroDecodeL;
    var X_SRC = decodeL(sourceBlackPoint[0]);
    var Y_DST = zeroDecodeL;
    var Y_SRC = decodeL(sourceBlackPoint[1]);
    var Z_DST = zeroDecodeL;
    var Z_SRC = decodeL(sourceBlackPoint[2]);
    var X_Scale = (1 - X_DST) / (1 - X_SRC);
    var X_Offset = 1 - X_Scale;
    var Y_Scale = (1 - Y_DST) / (1 - Y_SRC);
    var Y_Offset = 1 - Y_Scale;
    var Z_Scale = (1 - Z_DST) / (1 - Z_SRC);
    var Z_Offset = 1 - Z_Scale;
    result[0] = XYZ_Flat[0] * X_Scale + X_Offset;
    result[1] = XYZ_Flat[1] * Y_Scale + Y_Offset;
    result[2] = XYZ_Flat[2] * Z_Scale + Z_Offset;
  }
  function normalizeWhitePointToFlat(sourceWhitePoint, XYZ_In, result) {
    if (sourceWhitePoint[0] === 1 && sourceWhitePoint[2] === 1) {
      result[0] = XYZ_In[0];
      result[1] = XYZ_In[1];
      result[2] = XYZ_In[2];
      return;
    }
    var LMS = result;
    matrixProduct(BRADFORD_SCALE_MATRIX, XYZ_In, LMS);
    var LMS_Flat = tempNormalizeMatrix;
    convertToFlat(sourceWhitePoint, LMS, LMS_Flat);
    matrixProduct(BRADFORD_SCALE_INVERSE_MATRIX, LMS_Flat, result);
  }
  function normalizeWhitePointToD65(sourceWhitePoint, XYZ_In, result) {
    var LMS = result;
    matrixProduct(BRADFORD_SCALE_MATRIX, XYZ_In, LMS);
    var LMS_D65 = tempNormalizeMatrix;
    convertToD65(sourceWhitePoint, LMS, LMS_D65);
    matrixProduct(BRADFORD_SCALE_INVERSE_MATRIX, LMS_D65, result);
  }
  function convertToRgb(cs, src, srcOffset, dest, destOffset, scale) {
    var A = adjustToRange(0, 1, src[srcOffset] * scale);
    var B = adjustToRange(0, 1, src[srcOffset + 1] * scale);
    var C = adjustToRange(0, 1, src[srcOffset + 2] * scale);
    var AGR = Math.pow(A, cs.GR);
    var BGG = Math.pow(B, cs.GG);
    var CGB = Math.pow(C, cs.GB);
    var X = cs.MXA * AGR + cs.MXB * BGG + cs.MXC * CGB;
    var Y = cs.MYA * AGR + cs.MYB * BGG + cs.MYC * CGB;
    var Z = cs.MZA * AGR + cs.MZB * BGG + cs.MZC * CGB;
    var XYZ = tempConvertMatrix1;
    XYZ[0] = X;
    XYZ[1] = Y;
    XYZ[2] = Z;
    var XYZ_Flat = tempConvertMatrix2;
    normalizeWhitePointToFlat(cs.whitePoint, XYZ, XYZ_Flat);
    var XYZ_Black = tempConvertMatrix1;
    compensateBlackPoint(cs.blackPoint, XYZ_Flat, XYZ_Black);
    var XYZ_D65 = tempConvertMatrix2;
    normalizeWhitePointToD65(FLAT_WHITEPOINT_MATRIX, XYZ_Black, XYZ_D65);
    var SRGB = tempConvertMatrix1;
    matrixProduct(SRGB_D65_XYZ_TO_RGB_MATRIX, XYZ_D65, SRGB);
    dest[destOffset] = sRGBTransferFunction(SRGB[0]) * 255;
    dest[destOffset + 1] = sRGBTransferFunction(SRGB[1]) * 255;
    dest[destOffset + 2] = sRGBTransferFunction(SRGB[2]) * 255;
  }
  CalRGBCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function getRgbItem(src, srcOffset, dest, destOffset) {
      convertToRgb(this, src, srcOffset, dest, destOffset, 1);
    },
    getRgbBuffer: function getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var scale = 1 / ((1 << bits) - 1);
      for (var i = 0; i < count; ++i) {
        convertToRgb(this, src, srcOffset, dest, destOffset, scale);
        srcOffset += 3;
        destOffset += 3 + alpha01;
      }
    },
    getOutputLength: function getOutputLength(inputLength, alpha01) {
      return inputLength * (3 + alpha01) / 3 | 0;
    },

    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },

    usesZeroToOneRange: true
  };
  return CalRGBCS;
}();
var LabCS = function LabCSClosure() {
  function LabCS(whitePoint, blackPoint, range) {
    this.name = 'Lab';
    this.numComps = 3;
    this.defaultColor = new Float32Array(this.numComps);
    if (!whitePoint) {
      throw new _util.FormatError('WhitePoint missing - required for color space Lab');
    }
    blackPoint = blackPoint || [0, 0, 0];
    range = range || [-100, 100, -100, 100];
    this.XW = whitePoint[0];
    this.YW = whitePoint[1];
    this.ZW = whitePoint[2];
    this.amin = range[0];
    this.amax = range[1];
    this.bmin = range[2];
    this.bmax = range[3];
    this.XB = blackPoint[0];
    this.YB = blackPoint[1];
    this.ZB = blackPoint[2];
    if (this.XW < 0 || this.ZW < 0 || this.YW !== 1) {
      throw new _util.FormatError('Invalid WhitePoint components, no fallback available');
    }
    if (this.XB < 0 || this.YB < 0 || this.ZB < 0) {
      (0, _util.info)('Invalid BlackPoint, falling back to default');
      this.XB = this.YB = this.ZB = 0;
    }
    if (this.amin > this.amax || this.bmin > this.bmax) {
      (0, _util.info)('Invalid Range, falling back to defaults');
      this.amin = -100;
      this.amax = 100;
      this.bmin = -100;
      this.bmax = 100;
    }
  }
  function fn_g(x) {
    var result;
    if (x >= 6 / 29) {
      result = x * x * x;
    } else {
      result = 108 / 841 * (x - 4 / 29);
    }
    return result;
  }
  function decode(value, high1, low2, high2) {
    return low2 + value * (high2 - low2) / high1;
  }
  function convertToRgb(cs, src, srcOffset, maxVal, dest, destOffset) {
    var Ls = src[srcOffset];
    var as = src[srcOffset + 1];
    var bs = src[srcOffset + 2];
    if (maxVal !== false) {
      Ls = decode(Ls, maxVal, 0, 100);
      as = decode(as, maxVal, cs.amin, cs.amax);
      bs = decode(bs, maxVal, cs.bmin, cs.bmax);
    }
    as = as > cs.amax ? cs.amax : as < cs.amin ? cs.amin : as;
    bs = bs > cs.bmax ? cs.bmax : bs < cs.bmin ? cs.bmin : bs;
    var M = (Ls + 16) / 116;
    var L = M + as / 500;
    var N = M - bs / 200;
    var X = cs.XW * fn_g(L);
    var Y = cs.YW * fn_g(M);
    var Z = cs.ZW * fn_g(N);
    var r, g, b;
    if (cs.ZW < 1) {
      r = X * 3.1339 + Y * -1.6170 + Z * -0.4906;
      g = X * -0.9785 + Y * 1.9160 + Z * 0.0333;
      b = X * 0.0720 + Y * -0.2290 + Z * 1.4057;
    } else {
      r = X * 3.2406 + Y * -1.5372 + Z * -0.4986;
      g = X * -0.9689 + Y * 1.8758 + Z * 0.0415;
      b = X * 0.0557 + Y * -0.2040 + Z * 1.0570;
    }
    dest[destOffset] = Math.sqrt(r) * 255;
    dest[destOffset + 1] = Math.sqrt(g) * 255;
    dest[destOffset + 2] = Math.sqrt(b) * 255;
  }
  LabCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function getRgbItem(src, srcOffset, dest, destOffset) {
      convertToRgb(this, src, srcOffset, false, dest, destOffset);
    },
    getRgbBuffer: function getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var maxVal = (1 << bits) - 1;
      for (var i = 0; i < count; i++) {
        convertToRgb(this, src, srcOffset, maxVal, dest, destOffset);
        srcOffset += 3;
        destOffset += 3 + alpha01;
      }
    },
    getOutputLength: function getOutputLength(inputLength, alpha01) {
      return inputLength * (3 + alpha01) / 3 | 0;
    },

    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function isDefaultDecode(decodeMap) {
      return true;
    },

    usesZeroToOneRange: false
  };
  return LabCS;
}();
exports.ColorSpace = ColorSpace;

/***/ }),
/* 137 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnotationFactory = exports.AnnotationBorderStyle = exports.Annotation = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __w_pdfjs_require__(2);

var _obj = __w_pdfjs_require__(122);

var _primitives = __w_pdfjs_require__(123);

var _colorspace = __w_pdfjs_require__(136);

var _operator_list = __w_pdfjs_require__(138);

var _stream = __w_pdfjs_require__(125);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnnotationFactory = function () {
  function AnnotationFactory() {
    _classCallCheck(this, AnnotationFactory);
  }

  _createClass(AnnotationFactory, null, [{
    key: 'create',
    value: function create(xref, ref, pdfManager, idFactory) {
      var dict = xref.fetchIfRef(ref);
      if (!(0, _primitives.isDict)(dict)) {
        return;
      }
      var id = (0, _primitives.isRef)(ref) ? ref.toString() : 'annot_' + idFactory.createObjId();
      var subtype = dict.get('Subtype');
      subtype = (0, _primitives.isName)(subtype) ? subtype.name : null;
      var parameters = {
        xref: xref,
        dict: dict,
        ref: (0, _primitives.isRef)(ref) ? ref : null,
        subtype: subtype,
        id: id,
        pdfManager: pdfManager
      };
      switch (subtype) {
        case 'Link':
          return new LinkAnnotation(parameters);
        case 'Text':
          return new TextAnnotation(parameters);
        case 'Widget':
          var fieldType = (0, _util.getInheritableProperty)({
            dict: dict,
            key: 'FT'
          });
          fieldType = (0, _primitives.isName)(fieldType) ? fieldType.name : null;
          switch (fieldType) {
            case 'Tx':
              return new TextWidgetAnnotation(parameters);
            case 'Btn':
              return new ButtonWidgetAnnotation(parameters);
            case 'Ch':
              return new ChoiceWidgetAnnotation(parameters);
          }
          (0, _util.warn)('Unimplemented widget field type "' + fieldType + '", ' + 'falling back to base field type.');
          return new WidgetAnnotation(parameters);
        case 'Popup':
          return new PopupAnnotation(parameters);
        case 'Line':
          return new LineAnnotation(parameters);
        case 'Square':
          return new SquareAnnotation(parameters);
        case 'Circle':
          return new CircleAnnotation(parameters);
        case 'PolyLine':
          return new PolylineAnnotation(parameters);
        case 'Polygon':
          return new PolygonAnnotation(parameters);
        case 'Highlight':
          return new HighlightAnnotation(parameters);
        case 'Underline':
          return new UnderlineAnnotation(parameters);
        case 'Squiggly':
          return new SquigglyAnnotation(parameters);
        case 'StrikeOut':
          return new StrikeOutAnnotation(parameters);
        case 'Stamp':
          return new StampAnnotation(parameters);
        case 'FileAttachment':
          return new FileAttachmentAnnotation(parameters);
        default:
          if (!subtype) {
            (0, _util.warn)('Annotation is missing the required /Subtype.');
          } else {
            (0, _util.warn)('Unimplemented annotation type "' + subtype + '", ' + 'falling back to base annotation.');
          }
          return new Annotation(parameters);
      }
    }
  }]);

  return AnnotationFactory;
}();

function getTransformMatrix(rect, bbox, matrix) {
  var bounds = _util.Util.getAxialAlignedBoundingBox(bbox, matrix);
  var minX = bounds[0];
  var minY = bounds[1];
  var maxX = bounds[2];
  var maxY = bounds[3];
  if (minX === maxX || minY === maxY) {
    return [1, 0, 0, 1, rect[0], rect[1]];
  }
  var xRatio = (rect[2] - rect[0]) / (maxX - minX);
  var yRatio = (rect[3] - rect[1]) / (maxY - minY);
  return [xRatio, 0, 0, yRatio, rect[0] - minX * xRatio, rect[1] - minY * yRatio];
}

var Annotation = function () {
  function Annotation(params) {
    _classCallCheck(this, Annotation);

    var dict = params.dict;
    this.setFlags(dict.get('F'));
    this.setRectangle(dict.getArray('Rect'));
    this.setColor(dict.getArray('C'));
    this.setBorderStyle(dict);
    this.setAppearance(dict);
    this.data = {
      annotationFlags: this.flags,
      borderStyle: this.borderStyle,
      color: this.color,
      hasAppearance: !!this.appearance,
      id: params.id,
      rect: this.rectangle,
      subtype: params.subtype
    };
  }

  _createClass(Annotation, [{
    key: '_hasFlag',
    value: function _hasFlag(flags, flag) {
      return !!(flags & flag);
    }
  }, {
    key: '_isViewable',
    value: function _isViewable(flags) {
      return !this._hasFlag(flags, _util.AnnotationFlag.INVISIBLE) && !this._hasFlag(flags, _util.AnnotationFlag.HIDDEN) && !this._hasFlag(flags, _util.AnnotationFlag.NOVIEW);
    }
  }, {
    key: '_isPrintable',
    value: function _isPrintable(flags) {
      return this._hasFlag(flags, _util.AnnotationFlag.PRINT) && !this._hasFlag(flags, _util.AnnotationFlag.INVISIBLE) && !this._hasFlag(flags, _util.AnnotationFlag.HIDDEN);
    }
  }, {
    key: 'setFlags',
    value: function setFlags(flags) {
      this.flags = Number.isInteger(flags) && flags > 0 ? flags : 0;
    }
  }, {
    key: 'hasFlag',
    value: function hasFlag(flag) {
      return this._hasFlag(this.flags, flag);
    }
  }, {
    key: 'setRectangle',
    value: function setRectangle(rectangle) {
      if (Array.isArray(rectangle) && rectangle.length === 4) {
        this.rectangle = _util.Util.normalizeRect(rectangle);
      } else {
        this.rectangle = [0, 0, 0, 0];
      }
    }
  }, {
    key: 'setColor',
    value: function setColor(color) {
      var rgbColor = new Uint8ClampedArray(3);
      if (!Array.isArray(color)) {
        this.color = rgbColor;
        return;
      }
      switch (color.length) {
        case 0:
          this.color = null;
          break;
        case 1:
          _colorspace.ColorSpace.singletons.gray.getRgbItem(color, 0, rgbColor, 0);
          this.color = rgbColor;
          break;
        case 3:
          _colorspace.ColorSpace.singletons.rgb.getRgbItem(color, 0, rgbColor, 0);
          this.color = rgbColor;
          break;
        case 4:
          _colorspace.ColorSpace.singletons.cmyk.getRgbItem(color, 0, rgbColor, 0);
          this.color = rgbColor;
          break;
        default:
          this.color = rgbColor;
          break;
      }
    }
  }, {
    key: 'setBorderStyle',
    value: function setBorderStyle(borderStyle) {
      this.borderStyle = new AnnotationBorderStyle();
      if (!(0, _primitives.isDict)(borderStyle)) {
        return;
      }
      if (borderStyle.has('BS')) {
        var dict = borderStyle.get('BS');
        var dictType = dict.get('Type');
        if (!dictType || (0, _primitives.isName)(dictType, 'Border')) {
          this.borderStyle.setWidth(dict.get('W'));
          this.borderStyle.setStyle(dict.get('S'));
          this.borderStyle.setDashArray(dict.getArray('D'));
        }
      } else if (borderStyle.has('Border')) {
        var array = borderStyle.getArray('Border');
        if (Array.isArray(array) && array.length >= 3) {
          this.borderStyle.setHorizontalCornerRadius(array[0]);
          this.borderStyle.setVerticalCornerRadius(array[1]);
          this.borderStyle.setWidth(array[2]);
          if (array.length === 4) {
            this.borderStyle.setDashArray(array[3]);
          }
        }
      } else {
        this.borderStyle.setWidth(0);
      }
    }
  }, {
    key: 'setAppearance',
    value: function setAppearance(dict) {
      this.appearance = null;
      var appearanceStates = dict.get('AP');
      if (!(0, _primitives.isDict)(appearanceStates)) {
        return;
      }
      var normalAppearanceState = appearanceStates.get('N');
      if ((0, _primitives.isStream)(normalAppearanceState)) {
        this.appearance = normalAppearanceState;
        return;
      }
      if (!(0, _primitives.isDict)(normalAppearanceState)) {
        return;
      }
      var as = dict.get('AS');
      if (!(0, _primitives.isName)(as) || !normalAppearanceState.has(as.name)) {
        return;
      }
      this.appearance = normalAppearanceState.get(as.name);
    }
  }, {
    key: '_preparePopup',
    value: function _preparePopup(dict) {
      if (!dict.has('C')) {
        this.data.color = null;
      }
      this.data.hasPopup = dict.has('Popup');
      this.data.title = (0, _util.stringToPDFString)(dict.get('T') || '');
      this.data.contents = (0, _util.stringToPDFString)(dict.get('Contents') || '');
    }
  }, {
    key: 'loadResources',
    value: function loadResources(keys) {
      return this.appearance.dict.getAsync('Resources').then(function (resources) {
        if (!resources) {
          return;
        }
        var objectLoader = new _obj.ObjectLoader(resources, keys, resources.xref);
        return objectLoader.load().then(function () {
          return resources;
        });
      });
    }
  }, {
    key: 'getOperatorList',
    value: function getOperatorList(evaluator, task, renderForms) {
      var _this = this;

      if (!this.appearance) {
        return Promise.resolve(new _operator_list.OperatorList());
      }
      var data = this.data;
      var appearanceDict = this.appearance.dict;
      var resourcesPromise = this.loadResources(['ExtGState', 'ColorSpace', 'Pattern', 'Shading', 'XObject', 'Font']);
      var bbox = appearanceDict.getArray('BBox') || [0, 0, 1, 1];
      var matrix = appearanceDict.getArray('Matrix') || [1, 0, 0, 1, 0, 0];
      var transform = getTransformMatrix(data.rect, bbox, matrix);
      return resourcesPromise.then(function (resources) {
        var opList = new _operator_list.OperatorList();
        opList.addOp(_util.OPS.beginAnnotation, [data.rect, transform, matrix]);
        return evaluator.getOperatorList({
          stream: _this.appearance,
          task: task,
          resources: resources,
          operatorList: opList
        }).then(function () {
          opList.addOp(_util.OPS.endAnnotation, []);
          _this.appearance.reset();
          return opList;
        });
      });
    }
  }, {
    key: 'viewable',
    get: function get() {
      if (this.flags === 0) {
        return true;
      }
      return this._isViewable(this.flags);
    }
  }, {
    key: 'printable',
    get: function get() {
      if (this.flags === 0) {
        return false;
      }
      return this._isPrintable(this.flags);
    }
  }]);

  return Annotation;
}();

var AnnotationBorderStyle = function () {
  function AnnotationBorderStyle() {
    _classCallCheck(this, AnnotationBorderStyle);

    this.width = 1;
    this.style = _util.AnnotationBorderStyleType.SOLID;
    this.dashArray = [3];
    this.horizontalCornerRadius = 0;
    this.verticalCornerRadius = 0;
  }

  _createClass(AnnotationBorderStyle, [{
    key: 'setWidth',
    value: function setWidth(width) {
      if (Number.isInteger(width)) {
        this.width = width;
      }
    }
  }, {
    key: 'setStyle',
    value: function setStyle(style) {
      if (!style) {
        return;
      }
      switch (style.name) {
        case 'S':
          this.style = _util.AnnotationBorderStyleType.SOLID;
          break;
        case 'D':
          this.style = _util.AnnotationBorderStyleType.DASHED;
          break;
        case 'B':
          this.style = _util.AnnotationBorderStyleType.BEVELED;
          break;
        case 'I':
          this.style = _util.AnnotationBorderStyleType.INSET;
          break;
        case 'U':
          this.style = _util.AnnotationBorderStyleType.UNDERLINE;
          break;
        default:
          break;
      }
    }
  }, {
    key: 'setDashArray',
    value: function setDashArray(dashArray) {
      if (Array.isArray(dashArray) && dashArray.length > 0) {
        var isValid = true;
        var allZeros = true;
        for (var i = 0, len = dashArray.length; i < len; i++) {
          var element = dashArray[i];
          var validNumber = +element >= 0;
          if (!validNumber) {
            isValid = false;
            break;
          } else if (element > 0) {
            allZeros = false;
          }
        }
        if (isValid && !allZeros) {
          this.dashArray = dashArray;
        } else {
          this.width = 0;
        }
      } else if (dashArray) {
        this.width = 0;
      }
    }
  }, {
    key: 'setHorizontalCornerRadius',
    value: function setHorizontalCornerRadius(radius) {
      if (Number.isInteger(radius)) {
        this.horizontalCornerRadius = radius;
      }
    }
  }, {
    key: 'setVerticalCornerRadius',
    value: function setVerticalCornerRadius(radius) {
      if (Number.isInteger(radius)) {
        this.verticalCornerRadius = radius;
      }
    }
  }]);

  return AnnotationBorderStyle;
}();

var WidgetAnnotation = function (_Annotation) {
  _inherits(WidgetAnnotation, _Annotation);

  function WidgetAnnotation(params) {
    _classCallCheck(this, WidgetAnnotation);

    var _this2 = _possibleConstructorReturn(this, (WidgetAnnotation.__proto__ || Object.getPrototypeOf(WidgetAnnotation)).call(this, params));

    var dict = params.dict;
    var data = _this2.data;
    data.annotationType = _util.AnnotationType.WIDGET;
    data.fieldName = _this2._constructFieldName(dict);
    data.fieldValue = (0, _util.getInheritableProperty)({
      dict: dict,
      key: 'V',
      getArray: true
    });
    data.alternativeText = (0, _util.stringToPDFString)(dict.get('TU') || '');
    data.defaultAppearance = (0, _util.getInheritableProperty)({
      dict: dict,
      key: 'DA'
    }) || '';
    var fieldType = (0, _util.getInheritableProperty)({
      dict: dict,
      key: 'FT'
    });
    data.fieldType = (0, _primitives.isName)(fieldType) ? fieldType.name : null;
    _this2.fieldResources = (0, _util.getInheritableProperty)({
      dict: dict,
      key: 'DR'
    }) || _primitives.Dict.empty;
    data.fieldFlags = (0, _util.getInheritableProperty)({
      dict: dict,
      key: 'Ff'
    });
    if (!Number.isInteger(data.fieldFlags) || data.fieldFlags < 0) {
      data.fieldFlags = 0;
    }
    data.readOnly = _this2.hasFieldFlag(_util.AnnotationFieldFlag.READONLY);
    if (data.fieldType === 'Sig') {
      _this2.setFlags(_util.AnnotationFlag.HIDDEN);
    }
    return _this2;
  }

  _createClass(WidgetAnnotation, [{
    key: '_constructFieldName',
    value: function _constructFieldName(dict) {
      if (!dict.has('T') && !dict.has('Parent')) {
        (0, _util.warn)('Unknown field name, falling back to empty field name.');
        return '';
      }
      if (!dict.has('Parent')) {
        return (0, _util.stringToPDFString)(dict.get('T'));
      }
      var fieldName = [];
      if (dict.has('T')) {
        fieldName.unshift((0, _util.stringToPDFString)(dict.get('T')));
      }
      var loopDict = dict;
      while (loopDict.has('Parent')) {
        loopDict = loopDict.get('Parent');
        if (!(0, _primitives.isDict)(loopDict)) {
          break;
        }
        if (loopDict.has('T')) {
          fieldName.unshift((0, _util.stringToPDFString)(loopDict.get('T')));
        }
      }
      return fieldName.join('.');
    }
  }, {
    key: 'hasFieldFlag',
    value: function hasFieldFlag(flag) {
      return !!(this.data.fieldFlags & flag);
    }
  }, {
    key: 'getOperatorList',
    value: function getOperatorList(evaluator, task, renderForms) {
      if (renderForms) {
        return Promise.resolve(new _operator_list.OperatorList());
      }
      return _get(WidgetAnnotation.prototype.__proto__ || Object.getPrototypeOf(WidgetAnnotation.prototype), 'getOperatorList', this).call(this, evaluator, task, renderForms);
    }
  }]);

  return WidgetAnnotation;
}(Annotation);

var TextWidgetAnnotation = function (_WidgetAnnotation) {
  _inherits(TextWidgetAnnotation, _WidgetAnnotation);

  function TextWidgetAnnotation(params) {
    _classCallCheck(this, TextWidgetAnnotation);

    var _this3 = _possibleConstructorReturn(this, (TextWidgetAnnotation.__proto__ || Object.getPrototypeOf(TextWidgetAnnotation)).call(this, params));

    var dict = params.dict;
    _this3.data.fieldValue = (0, _util.stringToPDFString)(_this3.data.fieldValue || '');
    var alignment = (0, _util.getInheritableProperty)({
      dict: dict,
      key: 'Q'
    });
    if (!Number.isInteger(alignment) || alignment < 0 || alignment > 2) {
      alignment = null;
    }
    _this3.data.textAlignment = alignment;
    var maximumLength = (0, _util.getInheritableProperty)({
      dict: dict,
      key: 'MaxLen'
    });
    if (!Number.isInteger(maximumLength) || maximumLength < 0) {
      maximumLength = null;
    }
    _this3.data.maxLen = maximumLength;
    _this3.data.multiLine = _this3.hasFieldFlag(_util.AnnotationFieldFlag.MULTILINE);
    _this3.data.comb = _this3.hasFieldFlag(_util.AnnotationFieldFlag.COMB) && !_this3.hasFieldFlag(_util.AnnotationFieldFlag.MULTILINE) && !_this3.hasFieldFlag(_util.AnnotationFieldFlag.PASSWORD) && !_this3.hasFieldFlag(_util.AnnotationFieldFlag.FILESELECT) && _this3.data.maxLen !== null;
    return _this3;
  }

  _createClass(TextWidgetAnnotation, [{
    key: 'getOperatorList',
    value: function getOperatorList(evaluator, task, renderForms) {
      if (renderForms || this.appearance) {
        return _get(TextWidgetAnnotation.prototype.__proto__ || Object.getPrototypeOf(TextWidgetAnnotation.prototype), 'getOperatorList', this).call(this, evaluator, task, renderForms);
      }
      var operatorList = new _operator_list.OperatorList();
      if (!this.data.defaultAppearance) {
        return Promise.resolve(operatorList);
      }
      var stream = new _stream.Stream((0, _util.stringToBytes)(this.data.defaultAppearance));
      return evaluator.getOperatorList({
        stream: stream,
        task: task,
        resources: this.fieldResources,
        operatorList: operatorList
      }).then(function () {
        return operatorList;
      });
    }
  }]);

  return TextWidgetAnnotation;
}(WidgetAnnotation);

var ButtonWidgetAnnotation = function (_WidgetAnnotation2) {
  _inherits(ButtonWidgetAnnotation, _WidgetAnnotation2);

  function ButtonWidgetAnnotation(params) {
    _classCallCheck(this, ButtonWidgetAnnotation);

    var _this4 = _possibleConstructorReturn(this, (ButtonWidgetAnnotation.__proto__ || Object.getPrototypeOf(ButtonWidgetAnnotation)).call(this, params));

    _this4.data.checkBox = !_this4.hasFieldFlag(_util.AnnotationFieldFlag.RADIO) && !_this4.hasFieldFlag(_util.AnnotationFieldFlag.PUSHBUTTON);
    _this4.data.radioButton = _this4.hasFieldFlag(_util.AnnotationFieldFlag.RADIO) && !_this4.hasFieldFlag(_util.AnnotationFieldFlag.PUSHBUTTON);
    _this4.data.pushButton = _this4.hasFieldFlag(_util.AnnotationFieldFlag.PUSHBUTTON);
    if (_this4.data.checkBox) {
      _this4._processCheckBox(params);
    } else if (_this4.data.radioButton) {
      _this4._processRadioButton(params);
    } else if (_this4.data.pushButton) {
      _this4._processPushButton(params);
    } else {
      (0, _util.warn)('Invalid field flags for button widget annotation');
    }
    return _this4;
  }

  _createClass(ButtonWidgetAnnotation, [{
    key: '_processCheckBox',
    value: function _processCheckBox(params) {
      if ((0, _primitives.isName)(this.data.fieldValue)) {
        this.data.fieldValue = this.data.fieldValue.name;
      }
      var customAppearance = params.dict.get('AP');
      if (!(0, _primitives.isDict)(customAppearance)) {
        return;
      }
      var exportValueOptionsDict = customAppearance.get('D');
      if (!(0, _primitives.isDict)(exportValueOptionsDict)) {
        return;
      }
      var exportValues = exportValueOptionsDict.getKeys();
      var hasCorrectOptionCount = exportValues.length === 2;
      if (!hasCorrectOptionCount) {
        return;
      }
      this.data.exportValue = exportValues[0] === 'Off' ? exportValues[1] : exportValues[0];
    }
  }, {
    key: '_processRadioButton',
    value: function _processRadioButton(params) {
      this.data.fieldValue = this.data.buttonValue = null;
      var fieldParent = params.dict.get('Parent');
      if ((0, _primitives.isDict)(fieldParent) && fieldParent.has('V')) {
        var fieldParentValue = fieldParent.get('V');
        if ((0, _primitives.isName)(fieldParentValue)) {
          this.data.fieldValue = fieldParentValue.name;
        }
      }
      var appearanceStates = params.dict.get('AP');
      if (!(0, _primitives.isDict)(appearanceStates)) {
        return;
      }
      var normalAppearanceState = appearanceStates.get('N');
      if (!(0, _primitives.isDict)(normalAppearanceState)) {
        return;
      }
      var keys = normalAppearanceState.getKeys();
      for (var i = 0, ii = keys.length; i < ii; i++) {
        if (keys[i] !== 'Off') {
          this.data.buttonValue = keys[i];
          break;
        }
      }
    }
  }, {
    key: '_processPushButton',
    value: function _processPushButton(params) {
      if (!params.dict.has('A')) {
        (0, _util.warn)('Push buttons without action dictionaries are not supported');
        return;
      }
      _obj.Catalog.parseDestDictionary({
        destDict: params.dict,
        resultObj: this.data,
        docBaseUrl: params.pdfManager.docBaseUrl
      });
    }
  }]);

  return ButtonWidgetAnnotation;
}(WidgetAnnotation);

var ChoiceWidgetAnnotation = function (_WidgetAnnotation3) {
  _inherits(ChoiceWidgetAnnotation, _WidgetAnnotation3);

  function ChoiceWidgetAnnotation(params) {
    _classCallCheck(this, ChoiceWidgetAnnotation);

    var _this5 = _possibleConstructorReturn(this, (ChoiceWidgetAnnotation.__proto__ || Object.getPrototypeOf(ChoiceWidgetAnnotation)).call(this, params));

    _this5.data.options = [];
    var options = (0, _util.getInheritableProperty)({
      dict: params.dict,
      key: 'Opt'
    });
    if (Array.isArray(options)) {
      var xref = params.xref;
      for (var i = 0, ii = options.length; i < ii; i++) {
        var option = xref.fetchIfRef(options[i]);
        var isOptionArray = Array.isArray(option);
        _this5.data.options[i] = {
          exportValue: isOptionArray ? xref.fetchIfRef(option[0]) : option,
          displayValue: (0, _util.stringToPDFString)(isOptionArray ? xref.fetchIfRef(option[1]) : option)
        };
      }
    }
    if (!Array.isArray(_this5.data.fieldValue)) {
      _this5.data.fieldValue = [_this5.data.fieldValue];
    }
    _this5.data.combo = _this5.hasFieldFlag(_util.AnnotationFieldFlag.COMBO);
    _this5.data.multiSelect = _this5.hasFieldFlag(_util.AnnotationFieldFlag.MULTISELECT);
    return _this5;
  }

  return ChoiceWidgetAnnotation;
}(WidgetAnnotation);

var TextAnnotation = function (_Annotation2) {
  _inherits(TextAnnotation, _Annotation2);

  function TextAnnotation(parameters) {
    _classCallCheck(this, TextAnnotation);

    var DEFAULT_ICON_SIZE = 22;

    var _this6 = _possibleConstructorReturn(this, (TextAnnotation.__proto__ || Object.getPrototypeOf(TextAnnotation)).call(this, parameters));

    _this6.data.annotationType = _util.AnnotationType.TEXT;
    if (_this6.data.hasAppearance) {
      _this6.data.name = 'NoIcon';
    } else {
      _this6.data.rect[1] = _this6.data.rect[3] - DEFAULT_ICON_SIZE;
      _this6.data.rect[2] = _this6.data.rect[0] + DEFAULT_ICON_SIZE;
      _this6.data.name = parameters.dict.has('Name') ? parameters.dict.get('Name').name : 'Note';
    }
    _this6._preparePopup(parameters.dict);
    return _this6;
  }

  return TextAnnotation;
}(Annotation);

var LinkAnnotation = function (_Annotation3) {
  _inherits(LinkAnnotation, _Annotation3);

  function LinkAnnotation(params) {
    _classCallCheck(this, LinkAnnotation);

    var _this7 = _possibleConstructorReturn(this, (LinkAnnotation.__proto__ || Object.getPrototypeOf(LinkAnnotation)).call(this, params));

    _this7.data.annotationType = _util.AnnotationType.LINK;
    _obj.Catalog.parseDestDictionary({
      destDict: params.dict,
      resultObj: _this7.data,
      docBaseUrl: params.pdfManager.docBaseUrl
    });
    return _this7;
  }

  return LinkAnnotation;
}(Annotation);

var PopupAnnotation = function (_Annotation4) {
  _inherits(PopupAnnotation, _Annotation4);

  function PopupAnnotation(parameters) {
    _classCallCheck(this, PopupAnnotation);

    var _this8 = _possibleConstructorReturn(this, (PopupAnnotation.__proto__ || Object.getPrototypeOf(PopupAnnotation)).call(this, parameters));

    _this8.data.annotationType = _util.AnnotationType.POPUP;
    var dict = parameters.dict;
    var parentItem = dict.get('Parent');
    if (!parentItem) {
      (0, _util.warn)('Popup annotation has a missing or invalid parent annotation.');
      return _possibleConstructorReturn(_this8);
    }
    var parentSubtype = parentItem.get('Subtype');
    _this8.data.parentType = (0, _primitives.isName)(parentSubtype) ? parentSubtype.name : null;
    _this8.data.parentId = dict.getRaw('Parent').toString();
    _this8.data.title = (0, _util.stringToPDFString)(parentItem.get('T') || '');
    _this8.data.contents = (0, _util.stringToPDFString)(parentItem.get('Contents') || '');
    if (!parentItem.has('C')) {
      _this8.data.color = null;
    } else {
      _this8.setColor(parentItem.getArray('C'));
      _this8.data.color = _this8.color;
    }
    if (!_this8.viewable) {
      var parentFlags = parentItem.get('F');
      if (_this8._isViewable(parentFlags)) {
        _this8.setFlags(parentFlags);
      }
    }
    return _this8;
  }

  return PopupAnnotation;
}(Annotation);

var LineAnnotation = function (_Annotation5) {
  _inherits(LineAnnotation, _Annotation5);

  function LineAnnotation(parameters) {
    _classCallCheck(this, LineAnnotation);

    var _this9 = _possibleConstructorReturn(this, (LineAnnotation.__proto__ || Object.getPrototypeOf(LineAnnotation)).call(this, parameters));

    _this9.data.annotationType = _util.AnnotationType.LINE;
    var dict = parameters.dict;
    _this9.data.lineCoordinates = _util.Util.normalizeRect(dict.getArray('L'));
    _this9._preparePopup(dict);
    return _this9;
  }

  return LineAnnotation;
}(Annotation);

var SquareAnnotation = function (_Annotation6) {
  _inherits(SquareAnnotation, _Annotation6);

  function SquareAnnotation(parameters) {
    _classCallCheck(this, SquareAnnotation);

    var _this10 = _possibleConstructorReturn(this, (SquareAnnotation.__proto__ || Object.getPrototypeOf(SquareAnnotation)).call(this, parameters));

    _this10.data.annotationType = _util.AnnotationType.SQUARE;
    _this10._preparePopup(parameters.dict);
    return _this10;
  }

  return SquareAnnotation;
}(Annotation);

var CircleAnnotation = function (_Annotation7) {
  _inherits(CircleAnnotation, _Annotation7);

  function CircleAnnotation(parameters) {
    _classCallCheck(this, CircleAnnotation);

    var _this11 = _possibleConstructorReturn(this, (CircleAnnotation.__proto__ || Object.getPrototypeOf(CircleAnnotation)).call(this, parameters));

    _this11.data.annotationType = _util.AnnotationType.CIRCLE;
    _this11._preparePopup(parameters.dict);
    return _this11;
  }

  return CircleAnnotation;
}(Annotation);

var PolylineAnnotation = function (_Annotation8) {
  _inherits(PolylineAnnotation, _Annotation8);

  function PolylineAnnotation(parameters) {
    _classCallCheck(this, PolylineAnnotation);

    var _this12 = _possibleConstructorReturn(this, (PolylineAnnotation.__proto__ || Object.getPrototypeOf(PolylineAnnotation)).call(this, parameters));

    _this12.data.annotationType = _util.AnnotationType.POLYLINE;
    var dict = parameters.dict;
    var rawVertices = dict.getArray('Vertices');
    _this12.data.vertices = [];
    for (var i = 0, ii = rawVertices.length; i < ii; i += 2) {
      _this12.data.vertices.push({
        x: rawVertices[i],
        y: rawVertices[i + 1]
      });
    }
    _this12._preparePopup(dict);
    return _this12;
  }

  return PolylineAnnotation;
}(Annotation);

var PolygonAnnotation = function (_PolylineAnnotation) {
  _inherits(PolygonAnnotation, _PolylineAnnotation);

  function PolygonAnnotation(parameters) {
    _classCallCheck(this, PolygonAnnotation);

    var _this13 = _possibleConstructorReturn(this, (PolygonAnnotation.__proto__ || Object.getPrototypeOf(PolygonAnnotation)).call(this, parameters));

    _this13.data.annotationType = _util.AnnotationType.POLYGON;
    return _this13;
  }

  return PolygonAnnotation;
}(PolylineAnnotation);

var HighlightAnnotation = function (_Annotation9) {
  _inherits(HighlightAnnotation, _Annotation9);

  function HighlightAnnotation(parameters) {
    _classCallCheck(this, HighlightAnnotation);

    var _this14 = _possibleConstructorReturn(this, (HighlightAnnotation.__proto__ || Object.getPrototypeOf(HighlightAnnotation)).call(this, parameters));

    _this14.data.annotationType = _util.AnnotationType.HIGHLIGHT;
    _this14._preparePopup(parameters.dict);
    return _this14;
  }

  return HighlightAnnotation;
}(Annotation);

var UnderlineAnnotation = function (_Annotation10) {
  _inherits(UnderlineAnnotation, _Annotation10);

  function UnderlineAnnotation(parameters) {
    _classCallCheck(this, UnderlineAnnotation);

    var _this15 = _possibleConstructorReturn(this, (UnderlineAnnotation.__proto__ || Object.getPrototypeOf(UnderlineAnnotation)).call(this, parameters));

    _this15.data.annotationType = _util.AnnotationType.UNDERLINE;
    _this15._preparePopup(parameters.dict);
    return _this15;
  }

  return UnderlineAnnotation;
}(Annotation);

var SquigglyAnnotation = function (_Annotation11) {
  _inherits(SquigglyAnnotation, _Annotation11);

  function SquigglyAnnotation(parameters) {
    _classCallCheck(this, SquigglyAnnotation);

    var _this16 = _possibleConstructorReturn(this, (SquigglyAnnotation.__proto__ || Object.getPrototypeOf(SquigglyAnnotation)).call(this, parameters));

    _this16.data.annotationType = _util.AnnotationType.SQUIGGLY;
    _this16._preparePopup(parameters.dict);
    return _this16;
  }

  return SquigglyAnnotation;
}(Annotation);

var StrikeOutAnnotation = function (_Annotation12) {
  _inherits(StrikeOutAnnotation, _Annotation12);

  function StrikeOutAnnotation(parameters) {
    _classCallCheck(this, StrikeOutAnnotation);

    var _this17 = _possibleConstructorReturn(this, (StrikeOutAnnotation.__proto__ || Object.getPrototypeOf(StrikeOutAnnotation)).call(this, parameters));

    _this17.data.annotationType = _util.AnnotationType.STRIKEOUT;
    _this17._preparePopup(parameters.dict);
    return _this17;
  }

  return StrikeOutAnnotation;
}(Annotation);

var StampAnnotation = function (_Annotation13) {
  _inherits(StampAnnotation, _Annotation13);

  function StampAnnotation(parameters) {
    _classCallCheck(this, StampAnnotation);

    var _this18 = _possibleConstructorReturn(this, (StampAnnotation.__proto__ || Object.getPrototypeOf(StampAnnotation)).call(this, parameters));

    _this18.data.annotationType = _util.AnnotationType.STAMP;
    _this18._preparePopup(parameters.dict);
    return _this18;
  }

  return StampAnnotation;
}(Annotation);

var FileAttachmentAnnotation = function (_Annotation14) {
  _inherits(FileAttachmentAnnotation, _Annotation14);

  function FileAttachmentAnnotation(parameters) {
    _classCallCheck(this, FileAttachmentAnnotation);

    var _this19 = _possibleConstructorReturn(this, (FileAttachmentAnnotation.__proto__ || Object.getPrototypeOf(FileAttachmentAnnotation)).call(this, parameters));

    var file = new _obj.FileSpec(parameters.dict.get('FS'), parameters.xref);
    _this19.data.annotationType = _util.AnnotationType.FILEATTACHMENT;
    _this19.data.file = file.serializable;
    _this19._preparePopup(parameters.dict);
    return _this19;
  }

  return FileAttachmentAnnotation;
}(Annotation);

exports.Annotation = Annotation;
exports.AnnotationBorderStyle = AnnotationBorderStyle;
exports.AnnotationFactory = AnnotationFactory;

/***/ }),
/* 138 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperatorList = undefined;

var _util = __w_pdfjs_require__(2);

var QueueOptimizer = function QueueOptimizerClosure() {
  function addState(parentState, pattern, checkFn, iterateFn, processFn) {
    var state = parentState;
    for (var i = 0, ii = pattern.length - 1; i < ii; i++) {
      var item = pattern[i];
      state = state[item] || (state[item] = []);
    }
    state[pattern[pattern.length - 1]] = {
      checkFn: checkFn,
      iterateFn: iterateFn,
      processFn: processFn
    };
  }
  function handlePaintSolidColorImageMask(iFirstSave, count, fnArray, argsArray) {
    var iFirstPIMXO = iFirstSave + 2;
    for (var i = 0; i < count; i++) {
      var arg = argsArray[iFirstPIMXO + 4 * i];
      var imageMask = arg.length === 1 && arg[0];
      if (imageMask && imageMask.width === 1 && imageMask.height === 1 && (!imageMask.data.length || imageMask.data.length === 1 && imageMask.data[0] === 0)) {
        fnArray[iFirstPIMXO + 4 * i] = _util.OPS.paintSolidColorImageMask;
        continue;
      }
      break;
    }
    return count - i;
  }
  var InitialState = [];
  addState(InitialState, [_util.OPS.save, _util.OPS.transform, _util.OPS.paintInlineImageXObject, _util.OPS.restore], null, function iterateInlineImageGroup(context, i) {
    var fnArray = context.fnArray;
    var iFirstSave = context.iCurr - 3;
    var pos = (i - iFirstSave) % 4;
    switch (pos) {
      case 0:
        return fnArray[i] === _util.OPS.save;
      case 1:
        return fnArray[i] === _util.OPS.transform;
      case 2:
        return fnArray[i] === _util.OPS.paintInlineImageXObject;
      case 3:
        return fnArray[i] === _util.OPS.restore;
    }
  }, function foundInlineImageGroup(context, i) {
    var MIN_IMAGES_IN_INLINE_IMAGES_BLOCK = 10;
    var MAX_IMAGES_IN_INLINE_IMAGES_BLOCK = 200;
    var MAX_WIDTH = 1000;
    var IMAGE_PADDING = 1;
    var fnArray = context.fnArray,
        argsArray = context.argsArray;
    var curr = context.iCurr;
    var iFirstSave = curr - 3;
    var iFirstTransform = curr - 2;
    var iFirstPIIXO = curr - 1;
    var count = Math.min(Math.floor((i - iFirstSave) / 4), MAX_IMAGES_IN_INLINE_IMAGES_BLOCK);
    if (count < MIN_IMAGES_IN_INLINE_IMAGES_BLOCK) {
      return i - (i - iFirstSave) % 4;
    }
    var maxX = 0;
    var map = [],
        maxLineHeight = 0;
    var currentX = IMAGE_PADDING,
        currentY = IMAGE_PADDING;
    var q;
    for (q = 0; q < count; q++) {
      var transform = argsArray[iFirstTransform + (q << 2)];
      var img = argsArray[iFirstPIIXO + (q << 2)][0];
      if (currentX + img.width > MAX_WIDTH) {
        maxX = Math.max(maxX, currentX);
        currentY += maxLineHeight + 2 * IMAGE_PADDING;
        currentX = 0;
        maxLineHeight = 0;
      }
      map.push({
        transform: transform,
        x: currentX,
        y: currentY,
        w: img.width,
        h: img.height
      });
      currentX += img.width + 2 * IMAGE_PADDING;
      maxLineHeight = Math.max(maxLineHeight, img.height);
    }
    var imgWidth = Math.max(maxX, currentX) + IMAGE_PADDING;
    var imgHeight = currentY + maxLineHeight + IMAGE_PADDING;
    var imgData = new Uint8Array(imgWidth * imgHeight * 4);
    var imgRowSize = imgWidth << 2;
    for (q = 0; q < count; q++) {
      var data = argsArray[iFirstPIIXO + (q << 2)][0].data;
      var rowSize = map[q].w << 2;
      var dataOffset = 0;
      var offset = map[q].x + map[q].y * imgWidth << 2;
      imgData.set(data.subarray(0, rowSize), offset - imgRowSize);
      for (var k = 0, kk = map[q].h; k < kk; k++) {
        imgData.set(data.subarray(dataOffset, dataOffset + rowSize), offset);
        dataOffset += rowSize;
        offset += imgRowSize;
      }
      imgData.set(data.subarray(dataOffset - rowSize, dataOffset), offset);
      while (offset >= 0) {
        data[offset - 4] = data[offset];
        data[offset - 3] = data[offset + 1];
        data[offset - 2] = data[offset + 2];
        data[offset - 1] = data[offset + 3];
        data[offset + rowSize] = data[offset + rowSize - 4];
        data[offset + rowSize + 1] = data[offset + rowSize - 3];
        data[offset + rowSize + 2] = data[offset + rowSize - 2];
        data[offset + rowSize + 3] = data[offset + rowSize - 1];
        offset -= imgRowSize;
      }
    }
    fnArray.splice(iFirstSave, count * 4, _util.OPS.paintInlineImageXObjectGroup);
    argsArray.splice(iFirstSave, count * 4, [{
      width: imgWidth,
      height: imgHeight,
      kind: _util.ImageKind.RGBA_32BPP,
      data: imgData
    }, map]);
    return iFirstSave + 1;
  });
  addState(InitialState, [_util.OPS.save, _util.OPS.transform, _util.OPS.paintImageMaskXObject, _util.OPS.restore], null, function iterateImageMaskGroup(context, i) {
    var fnArray = context.fnArray;
    var iFirstSave = context.iCurr - 3;
    var pos = (i - iFirstSave) % 4;
    switch (pos) {
      case 0:
        return fnArray[i] === _util.OPS.save;
      case 1:
        return fnArray[i] === _util.OPS.transform;
      case 2:
        return fnArray[i] === _util.OPS.paintImageMaskXObject;
      case 3:
        return fnArray[i] === _util.OPS.restore;
    }
  }, function foundImageMaskGroup(context, i) {
    var MIN_IMAGES_IN_MASKS_BLOCK = 10;
    var MAX_IMAGES_IN_MASKS_BLOCK = 100;
    var MAX_SAME_IMAGES_IN_MASKS_BLOCK = 1000;
    var fnArray = context.fnArray,
        argsArray = context.argsArray;
    var curr = context.iCurr;
    var iFirstSave = curr - 3;
    var iFirstTransform = curr - 2;
    var iFirstPIMXO = curr - 1;
    var count = Math.floor((i - iFirstSave) / 4);
    count = handlePaintSolidColorImageMask(iFirstSave, count, fnArray, argsArray);
    if (count < MIN_IMAGES_IN_MASKS_BLOCK) {
      return i - (i - iFirstSave) % 4;
    }
    var q;
    var isSameImage = false;
    var iTransform, transformArgs;
    var firstPIMXOArg0 = argsArray[iFirstPIMXO][0];
    if (argsArray[iFirstTransform][1] === 0 && argsArray[iFirstTransform][2] === 0) {
      isSameImage = true;
      var firstTransformArg0 = argsArray[iFirstTransform][0];
      var firstTransformArg3 = argsArray[iFirstTransform][3];
      iTransform = iFirstTransform + 4;
      var iPIMXO = iFirstPIMXO + 4;
      for (q = 1; q < count; q++, iTransform += 4, iPIMXO += 4) {
        transformArgs = argsArray[iTransform];
        if (argsArray[iPIMXO][0] !== firstPIMXOArg0 || transformArgs[0] !== firstTransformArg0 || transformArgs[1] !== 0 || transformArgs[2] !== 0 || transformArgs[3] !== firstTransformArg3) {
          if (q < MIN_IMAGES_IN_MASKS_BLOCK) {
            isSameImage = false;
          } else {
            count = q;
          }
          break;
        }
      }
    }
    if (isSameImage) {
      count = Math.min(count, MAX_SAME_IMAGES_IN_MASKS_BLOCK);
      var positions = new Float32Array(count * 2);
      iTransform = iFirstTransform;
      for (q = 0; q < count; q++, iTransform += 4) {
        transformArgs = argsArray[iTransform];
        positions[q << 1] = transformArgs[4];
        positions[(q << 1) + 1] = transformArgs[5];
      }
      fnArray.splice(iFirstSave, count * 4, _util.OPS.paintImageMaskXObjectRepeat);
      argsArray.splice(iFirstSave, count * 4, [firstPIMXOArg0, firstTransformArg0, firstTransformArg3, positions]);
    } else {
      count = Math.min(count, MAX_IMAGES_IN_MASKS_BLOCK);
      var images = [];
      for (q = 0; q < count; q++) {
        transformArgs = argsArray[iFirstTransform + (q << 2)];
        var maskParams = argsArray[iFirstPIMXO + (q << 2)][0];
        images.push({
          data: maskParams.data,
          width: maskParams.width,
          height: maskParams.height,
          transform: transformArgs
        });
      }
      fnArray.splice(iFirstSave, count * 4, _util.OPS.paintImageMaskXObjectGroup);
      argsArray.splice(iFirstSave, count * 4, [images]);
    }
    return iFirstSave + 1;
  });
  addState(InitialState, [_util.OPS.save, _util.OPS.transform, _util.OPS.paintImageXObject, _util.OPS.restore], function (context) {
    var argsArray = context.argsArray;
    var iFirstTransform = context.iCurr - 2;
    return argsArray[iFirstTransform][1] === 0 && argsArray[iFirstTransform][2] === 0;
  }, function (context, i) {
    var fnArray = context.fnArray,
        argsArray = context.argsArray;
    var iFirstSave = context.iCurr - 3;
    var pos = (i - iFirstSave) % 4;
    switch (pos) {
      case 0:
        return fnArray[i] === _util.OPS.save;
      case 1:
        if (fnArray[i] !== _util.OPS.transform) {
          return false;
        }
        var iFirstTransform = context.iCurr - 2;
        var firstTransformArg0 = argsArray[iFirstTransform][0];
        var firstTransformArg3 = argsArray[iFirstTransform][3];
        if (argsArray[i][0] !== firstTransformArg0 || argsArray[i][1] !== 0 || argsArray[i][2] !== 0 || argsArray[i][3] !== firstTransformArg3) {
          return false;
        }
        return true;
      case 2:
        if (fnArray[i] !== _util.OPS.paintImageXObject) {
          return false;
        }
        var iFirstPIXO = context.iCurr - 1;
        var firstPIXOArg0 = argsArray[iFirstPIXO][0];
        if (argsArray[i][0] !== firstPIXOArg0) {
          return false;
        }
        return true;
      case 3:
        return fnArray[i] === _util.OPS.restore;
    }
  }, function (context, i) {
    var MIN_IMAGES_IN_BLOCK = 3;
    var MAX_IMAGES_IN_BLOCK = 1000;
    var fnArray = context.fnArray,
        argsArray = context.argsArray;
    var curr = context.iCurr;
    var iFirstSave = curr - 3;
    var iFirstTransform = curr - 2;
    var iFirstPIXO = curr - 1;
    var firstPIXOArg0 = argsArray[iFirstPIXO][0];
    var firstTransformArg0 = argsArray[iFirstTransform][0];
    var firstTransformArg3 = argsArray[iFirstTransform][3];
    var count = Math.min(Math.floor((i - iFirstSave) / 4), MAX_IMAGES_IN_BLOCK);
    if (count < MIN_IMAGES_IN_BLOCK) {
      return i - (i - iFirstSave) % 4;
    }
    var positions = new Float32Array(count * 2);
    var iTransform = iFirstTransform;
    for (var q = 0; q < count; q++, iTransform += 4) {
      var transformArgs = argsArray[iTransform];
      positions[q << 1] = transformArgs[4];
      positions[(q << 1) + 1] = transformArgs[5];
    }
    var args = [firstPIXOArg0, firstTransformArg0, firstTransformArg3, positions];
    fnArray.splice(iFirstSave, count * 4, _util.OPS.paintImageXObjectRepeat);
    argsArray.splice(iFirstSave, count * 4, args);
    return iFirstSave + 1;
  });
  addState(InitialState, [_util.OPS.beginText, _util.OPS.setFont, _util.OPS.setTextMatrix, _util.OPS.showText, _util.OPS.endText], null, function (context, i) {
    var fnArray = context.fnArray,
        argsArray = context.argsArray;
    var iFirstSave = context.iCurr - 4;
    var pos = (i - iFirstSave) % 5;
    switch (pos) {
      case 0:
        return fnArray[i] === _util.OPS.beginText;
      case 1:
        return fnArray[i] === _util.OPS.setFont;
      case 2:
        return fnArray[i] === _util.OPS.setTextMatrix;
      case 3:
        if (fnArray[i] !== _util.OPS.showText) {
          return false;
        }
        var iFirstSetFont = context.iCurr - 3;
        var firstSetFontArg0 = argsArray[iFirstSetFont][0];
        var firstSetFontArg1 = argsArray[iFirstSetFont][1];
        if (argsArray[i][0] !== firstSetFontArg0 || argsArray[i][1] !== firstSetFontArg1) {
          return false;
        }
        return true;
      case 4:
        return fnArray[i] === _util.OPS.endText;
    }
  }, function (context, i) {
    var MIN_CHARS_IN_BLOCK = 3;
    var MAX_CHARS_IN_BLOCK = 1000;
    var fnArray = context.fnArray,
        argsArray = context.argsArray;
    var curr = context.iCurr;
    var iFirstBeginText = curr - 4;
    var iFirstSetFont = curr - 3;
    var iFirstSetTextMatrix = curr - 2;
    var iFirstShowText = curr - 1;
    var iFirstEndText = curr;
    var firstSetFontArg0 = argsArray[iFirstSetFont][0];
    var firstSetFontArg1 = argsArray[iFirstSetFont][1];
    var count = Math.min(Math.floor((i - iFirstBeginText) / 5), MAX_CHARS_IN_BLOCK);
    if (count < MIN_CHARS_IN_BLOCK) {
      return i - (i - iFirstBeginText) % 5;
    }
    var iFirst = iFirstBeginText;
    if (iFirstBeginText >= 4 && fnArray[iFirstBeginText - 4] === fnArray[iFirstSetFont] && fnArray[iFirstBeginText - 3] === fnArray[iFirstSetTextMatrix] && fnArray[iFirstBeginText - 2] === fnArray[iFirstShowText] && fnArray[iFirstBeginText - 1] === fnArray[iFirstEndText] && argsArray[iFirstBeginText - 4][0] === firstSetFontArg0 && argsArray[iFirstBeginText - 4][1] === firstSetFontArg1) {
      count++;
      iFirst -= 5;
    }
    var iEndText = iFirst + 4;
    for (var q = 1; q < count; q++) {
      fnArray.splice(iEndText, 3);
      argsArray.splice(iEndText, 3);
      iEndText += 2;
    }
    return iEndText + 1;
  });
  function QueueOptimizer(queue) {
    this.queue = queue;
    this.state = null;
    this.context = {
      iCurr: 0,
      fnArray: queue.fnArray,
      argsArray: queue.argsArray
    };
    this.match = null;
    this.lastProcessed = 0;
  }
  QueueOptimizer.prototype = {
    _optimize: function _optimize() {
      var fnArray = this.queue.fnArray;
      var i = this.lastProcessed,
          ii = fnArray.length;
      var state = this.state;
      var match = this.match;
      if (!state && !match && i + 1 === ii && !InitialState[fnArray[i]]) {
        this.lastProcessed = ii;
        return;
      }
      var context = this.context;
      while (i < ii) {
        if (match) {
          var iterate = (0, match.iterateFn)(context, i);
          if (iterate) {
            i++;
            continue;
          }
          i = (0, match.processFn)(context, i + 1);
          ii = fnArray.length;
          match = null;
          state = null;
          if (i >= ii) {
            break;
          }
        }
        state = (state || InitialState)[fnArray[i]];
        if (!state || Array.isArray(state)) {
          i++;
          continue;
        }
        context.iCurr = i;
        i++;
        if (state.checkFn && !(0, state.checkFn)(context)) {
          state = null;
          continue;
        }
        match = state;
        state = null;
      }
      this.state = state;
      this.match = match;
      this.lastProcessed = i;
    },
    push: function push(fn, args) {
      this.queue.fnArray.push(fn);
      this.queue.argsArray.push(args);
      this._optimize();
    },
    flush: function flush() {
      while (this.match) {
        var length = this.queue.fnArray.length;
        this.lastProcessed = (0, this.match.processFn)(this.context, length);
        this.match = null;
        this.state = null;
        this._optimize();
      }
    },
    reset: function reset() {
      this.state = null;
      this.match = null;
      this.lastProcessed = 0;
    }
  };
  return QueueOptimizer;
}();
var NullOptimizer = function NullOptimizerClosure() {
  function NullOptimizer(queue) {
    this.queue = queue;
  }
  NullOptimizer.prototype = {
    push: function push(fn, args) {
      this.queue.fnArray.push(fn);
      this.queue.argsArray.push(args);
    },
    flush: function flush() {}
  };
  return NullOptimizer;
}();
var OperatorList = function OperatorListClosure() {
  var CHUNK_SIZE = 1000;
  var CHUNK_SIZE_ABOUT = CHUNK_SIZE - 5;
  function getTransfers(queue) {
    var transfers = [];
    var fnArray = queue.fnArray,
        argsArray = queue.argsArray;
    for (var i = 0, ii = queue.length; i < ii; i++) {
      switch (fnArray[i]) {
        case _util.OPS.paintInlineImageXObject:
        case _util.OPS.paintInlineImageXObjectGroup:
        case _util.OPS.paintImageMaskXObject:
          var arg = argsArray[i][0];
          if (!arg.cached) {
            transfers.push(arg.data.buffer);
          }
          break;
      }
    }
    return transfers;
  }
  function OperatorList(intent, messageHandler, pageIndex) {
    this.messageHandler = messageHandler;
    this.fnArray = [];
    this.argsArray = [];
    if (messageHandler && this.intent !== 'oplist') {
      this.optimizer = new QueueOptimizer(this);
    } else {
      this.optimizer = new NullOptimizer(this);
    }
    this.dependencies = Object.create(null);
    this._totalLength = 0;
    this.pageIndex = pageIndex;
    this.intent = intent;
    this.weight = 0;
  }
  OperatorList.prototype = {
    get length() {
      return this.argsArray.length;
    },
    get totalLength() {
      return this._totalLength + this.length;
    },
    addOp: function addOp(fn, args) {
      this.optimizer.push(fn, args);
      this.weight++;
      if (this.messageHandler) {
        if (this.weight >= CHUNK_SIZE) {
          this.flush();
        } else if (this.weight >= CHUNK_SIZE_ABOUT && (fn === _util.OPS.restore || fn === _util.OPS.endText)) {
          this.flush();
        }
      }
    },
    addDependency: function addDependency(dependency) {
      if (dependency in this.dependencies) {
        return;
      }
      this.dependencies[dependency] = true;
      this.addOp(_util.OPS.dependency, [dependency]);
    },
    addDependencies: function addDependencies(dependencies) {
      for (var key in dependencies) {
        this.addDependency(key);
      }
    },
    addOpList: function addOpList(opList) {
      Object.assign(this.dependencies, opList.dependencies);
      for (var i = 0, ii = opList.length; i < ii; i++) {
        this.addOp(opList.fnArray[i], opList.argsArray[i]);
      }
    },
    getIR: function getIR() {
      return {
        fnArray: this.fnArray,
        argsArray: this.argsArray,
        length: this.length
      };
    },
    flush: function flush(lastChunk) {
      this.optimizer.flush();
      var transfers = getTransfers(this);
      var length = this.length;
      this._totalLength += length;
      this.messageHandler.send('RenderPageChunk', {
        operatorList: {
          fnArray: this.fnArray,
          argsArray: this.argsArray,
          lastChunk: lastChunk,
          length: length
        },
        pageIndex: this.pageIndex,
        intent: this.intent
      }, transfers);
      this.dependencies = Object.create(null);
      this.fnArray.length = 0;
      this.argsArray.length = 0;
      this.weight = 0;
      this.optimizer.reset();
    }
  };
  return OperatorList;
}();
exports.OperatorList = OperatorList;

/***/ }),
/* 139 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartialEvaluator = undefined;

var _util = __w_pdfjs_require__(2);

var _cmap = __w_pdfjs_require__(140);

var _stream = __w_pdfjs_require__(125);

var _primitives = __w_pdfjs_require__(123);

var _fonts = __w_pdfjs_require__(141);

var _encodings = __w_pdfjs_require__(144);

var _unicode = __w_pdfjs_require__(147);

var _standard_fonts = __w_pdfjs_require__(146);

var _pattern = __w_pdfjs_require__(150);

var _parser = __w_pdfjs_require__(124);

var _bidi = __w_pdfjs_require__(151);

var _colorspace = __w_pdfjs_require__(136);

var _glyphlist = __w_pdfjs_require__(145);

var _metrics = __w_pdfjs_require__(152);

var _function = __w_pdfjs_require__(153);

var _jpeg_stream = __w_pdfjs_require__(131);

var _murmurhash = __w_pdfjs_require__(155);

var _operator_list = __w_pdfjs_require__(138);

var _image = __w_pdfjs_require__(156);

var PartialEvaluator = function PartialEvaluatorClosure() {
  var DefaultPartialEvaluatorOptions = {
    forceDataSchema: false,
    maxImageSize: -1,
    disableFontFace: false,
    nativeImageDecoderSupport: _util.NativeImageDecoding.DECODE,
    ignoreErrors: false,
    isEvalSupported: true
  };
  function NativeImageDecoder(_ref) {
    var xref = _ref.xref,
        resources = _ref.resources,
        handler = _ref.handler,
        _ref$forceDataSchema = _ref.forceDataSchema,
        forceDataSchema = _ref$forceDataSchema === undefined ? false : _ref$forceDataSchema,
        pdfFunctionFactory = _ref.pdfFunctionFactory;

    this.xref = xref;
    this.resources = resources;
    this.handler = handler;
    this.forceDataSchema = forceDataSchema;
    this.pdfFunctionFactory = pdfFunctionFactory;
  }
  NativeImageDecoder.prototype = {
    canDecode: function canDecode(image) {
      return image instanceof _jpeg_stream.JpegStream && NativeImageDecoder.isDecodable(image, this.xref, this.resources, this.pdfFunctionFactory);
    },
    decode: function decode(image) {
      var dict = image.dict;
      var colorSpace = dict.get('ColorSpace', 'CS');
      colorSpace = _colorspace.ColorSpace.parse(colorSpace, this.xref, this.resources, this.pdfFunctionFactory);
      return this.handler.sendWithPromise('JpegDecode', [image.getIR(this.forceDataSchema), colorSpace.numComps]).then(function (_ref2) {
        var data = _ref2.data,
            width = _ref2.width,
            height = _ref2.height;

        return new _stream.Stream(data, 0, data.length, image.dict);
      });
    }
  };
  NativeImageDecoder.isSupported = function (image, xref, res, pdfFunctionFactory) {
    var dict = image.dict;
    if (dict.has('DecodeParms') || dict.has('DP')) {
      return false;
    }
    var cs = _colorspace.ColorSpace.parse(dict.get('ColorSpace', 'CS'), xref, res, pdfFunctionFactory);
    return (cs.name === 'DeviceGray' || cs.name === 'DeviceRGB') && cs.isDefaultDecode(dict.getArray('Decode', 'D'));
  };
  NativeImageDecoder.isDecodable = function (image, xref, res, pdfFunctionFactory) {
    var dict = image.dict;
    if (dict.has('DecodeParms') || dict.has('DP')) {
      return false;
    }
    var cs = _colorspace.ColorSpace.parse(dict.get('ColorSpace', 'CS'), xref, res, pdfFunctionFactory);
    return (cs.numComps === 1 || cs.numComps === 3) && cs.isDefaultDecode(dict.getArray('Decode', 'D'));
  };
  function PartialEvaluator(_ref3) {
    var _this = this;

    var pdfManager = _ref3.pdfManager,
        xref = _ref3.xref,
        handler = _ref3.handler,
        pageIndex = _ref3.pageIndex,
        idFactory = _ref3.idFactory,
        fontCache = _ref3.fontCache,
        builtInCMapCache = _ref3.builtInCMapCache,
        _ref3$options = _ref3.options,
        options = _ref3$options === undefined ? null : _ref3$options,
        pdfFunctionFactory = _ref3.pdfFunctionFactory;

    this.pdfManager = pdfManager;
    this.xref = xref;
    this.handler = handler;
    this.pageIndex = pageIndex;
    this.idFactory = idFactory;
    this.fontCache = fontCache;
    this.builtInCMapCache = builtInCMapCache;
    this.options = options || DefaultPartialEvaluatorOptions;
    this.pdfFunctionFactory = pdfFunctionFactory;
    this.fetchBuiltInCMap = function (name) {
      if (_this.builtInCMapCache.has(name)) {
        return Promise.resolve(_this.builtInCMapCache.get(name));
      }
      return _this.handler.sendWithPromise('FetchBuiltInCMap', { name: name }).then(function (data) {
        if (data.compressionType !== _util.CMapCompressionType.NONE) {
          _this.builtInCMapCache.set(name, data);
        }
        return data;
      });
    };
  }
  var TIME_SLOT_DURATION_MS = 20;
  var CHECK_TIME_EVERY = 100;
  function TimeSlotManager() {
    this.reset();
  }
  TimeSlotManager.prototype = {
    check: function TimeSlotManager_check() {
      if (++this.checked < CHECK_TIME_EVERY) {
        return false;
      }
      this.checked = 0;
      return this.endTime <= Date.now();
    },
    reset: function TimeSlotManager_reset() {
      this.endTime = Date.now() + TIME_SLOT_DURATION_MS;
      this.checked = 0;
    }
  };
  function normalizeBlendMode(value) {
    if (!(0, _primitives.isName)(value)) {
      return 'source-over';
    }
    switch (value.name) {
      case 'Normal':
      case 'Compatible':
        return 'source-over';
      case 'Multiply':
        return 'multiply';
      case 'Screen':
        return 'screen';
      case 'Overlay':
        return 'overlay';
      case 'Darken':
        return 'darken';
      case 'Lighten':
        return 'lighten';
      case 'ColorDodge':
        return 'color-dodge';
      case 'ColorBurn':
        return 'color-burn';
      case 'HardLight':
        return 'hard-light';
      case 'SoftLight':
        return 'soft-light';
      case 'Difference':
        return 'difference';
      case 'Exclusion':
        return 'exclusion';
      case 'Hue':
        return 'hue';
      case 'Saturation':
        return 'saturation';
      case 'Color':
        return 'color';
      case 'Luminosity':
        return 'luminosity';
    }
    (0, _util.warn)('Unsupported blend mode: ' + value.name);
    return 'source-over';
  }
  var deferred = Promise.resolve();
  var TILING_PATTERN = 1,
      SHADING_PATTERN = 2;
  PartialEvaluator.prototype = {
    clone: function clone() {
      var newOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultPartialEvaluatorOptions;

      var newEvaluator = Object.create(this);
      newEvaluator.options = newOptions;
      return newEvaluator;
    },

    hasBlendModes: function PartialEvaluator_hasBlendModes(resources) {
      if (!(0, _primitives.isDict)(resources)) {
        return false;
      }
      var processed = Object.create(null);
      if (resources.objId) {
        processed[resources.objId] = true;
      }
      var nodes = [resources],
          xref = this.xref;
      while (nodes.length) {
        var key, i, ii;
        var node = nodes.shift();
        var graphicStates = node.get('ExtGState');
        if ((0, _primitives.isDict)(graphicStates)) {
          var graphicStatesKeys = graphicStates.getKeys();
          for (i = 0, ii = graphicStatesKeys.length; i < ii; i++) {
            key = graphicStatesKeys[i];
            var graphicState = graphicStates.get(key);
            var bm = graphicState.get('BM');
            if ((0, _primitives.isName)(bm) && bm.name !== 'Normal') {
              return true;
            }
          }
        }
        var xObjects = node.get('XObject');
        if (!(0, _primitives.isDict)(xObjects)) {
          continue;
        }
        var xObjectsKeys = xObjects.getKeys();
        for (i = 0, ii = xObjectsKeys.length; i < ii; i++) {
          key = xObjectsKeys[i];
          var xObject = xObjects.getRaw(key);
          if ((0, _primitives.isRef)(xObject)) {
            if (processed[xObject.toString()]) {
              continue;
            }
            xObject = xref.fetch(xObject);
          }
          if (!(0, _primitives.isStream)(xObject)) {
            continue;
          }
          if (xObject.dict.objId) {
            if (processed[xObject.dict.objId]) {
              continue;
            }
            processed[xObject.dict.objId] = true;
          }
          var xResources = xObject.dict.get('Resources');
          if ((0, _primitives.isDict)(xResources) && (!xResources.objId || !processed[xResources.objId])) {
            nodes.push(xResources);
            if (xResources.objId) {
              processed[xResources.objId] = true;
            }
          }
        }
      }
      return false;
    },
    buildFormXObject: function PartialEvaluator_buildFormXObject(resources, xobj, smask, operatorList, task, initialState) {
      var dict = xobj.dict;
      var matrix = dict.getArray('Matrix');
      var bbox = dict.getArray('BBox');
      var group = dict.get('Group');
      if (group) {
        var groupOptions = {
          matrix: matrix,
          bbox: bbox,
          smask: smask,
          isolated: false,
          knockout: false
        };
        var groupSubtype = group.get('S');
        var colorSpace = null;
        if ((0, _primitives.isName)(groupSubtype, 'Transparency')) {
          groupOptions.isolated = group.get('I') || false;
          groupOptions.knockout = group.get('K') || false;
          if (group.has('CS')) {
            colorSpace = _colorspace.ColorSpace.parse(group.get('CS'), this.xref, resources, this.pdfFunctionFactory);
          }
        }
        if (smask && smask.backdrop) {
          colorSpace = colorSpace || _colorspace.ColorSpace.singletons.rgb;
          smask.backdrop = colorSpace.getRgb(smask.backdrop, 0);
        }
        operatorList.addOp(_util.OPS.beginGroup, [groupOptions]);
      }
      operatorList.addOp(_util.OPS.paintFormXObjectBegin, [matrix, bbox]);
      return this.getOperatorList({
        stream: xobj,
        task: task,
        resources: dict.get('Resources') || resources,
        operatorList: operatorList,
        initialState: initialState
      }).then(function () {
        operatorList.addOp(_util.OPS.paintFormXObjectEnd, []);
        if (group) {
          operatorList.addOp(_util.OPS.endGroup, [groupOptions]);
        }
      });
    },
    buildPaintImageXObject: function buildPaintImageXObject(_ref4) {
      var _this2 = this;

      var resources = _ref4.resources,
          image = _ref4.image,
          _ref4$isInline = _ref4.isInline,
          isInline = _ref4$isInline === undefined ? false : _ref4$isInline,
          operatorList = _ref4.operatorList,
          cacheKey = _ref4.cacheKey,
          imageCache = _ref4.imageCache,
          _ref4$forceDisableNat = _ref4.forceDisableNativeImageDecoder,
          forceDisableNativeImageDecoder = _ref4$forceDisableNat === undefined ? false : _ref4$forceDisableNat;

      var dict = image.dict;
      var w = dict.get('Width', 'W');
      var h = dict.get('Height', 'H');
      if (!(w && (0, _util.isNum)(w)) || !(h && (0, _util.isNum)(h))) {
        (0, _util.warn)('Image dimensions are missing, or not numbers.');
        return Promise.resolve();
      }
      var maxImageSize = this.options.maxImageSize;
      if (maxImageSize !== -1 && w * h > maxImageSize) {
        (0, _util.warn)('Image exceeded maximum allowed size and was removed.');
        return Promise.resolve();
      }
      var imageMask = dict.get('ImageMask', 'IM') || false;
      var imgData, args;
      if (imageMask) {
        var width = dict.get('Width', 'W');
        var height = dict.get('Height', 'H');
        var bitStrideLength = width + 7 >> 3;
        var imgArray = image.getBytes(bitStrideLength * height, true);
        var decode = dict.getArray('Decode', 'D');
        imgData = _image.PDFImage.createMask({
          imgArray: imgArray,
          width: width,
          height: height,
          imageIsFromDecodeStream: image instanceof _stream.DecodeStream,
          inverseDecode: !!decode && decode[0] > 0
        });
        imgData.cached = true;
        args = [imgData];
        operatorList.addOp(_util.OPS.paintImageMaskXObject, args);
        if (cacheKey) {
          imageCache[cacheKey] = {
            fn: _util.OPS.paintImageMaskXObject,
            args: args
          };
        }
        return Promise.resolve();
      }
      var softMask = dict.get('SMask', 'SM') || false;
      var mask = dict.get('Mask') || false;
      var SMALL_IMAGE_DIMENSIONS = 200;
      if (isInline && !softMask && !mask && !(image instanceof _jpeg_stream.JpegStream) && w + h < SMALL_IMAGE_DIMENSIONS) {
        var imageObj = new _image.PDFImage({
          xref: this.xref,
          res: resources,
          image: image,
          isInline: isInline,
          pdfFunctionFactory: this.pdfFunctionFactory
        });
        imgData = imageObj.createImageData(true);
        operatorList.addOp(_util.OPS.paintInlineImageXObject, [imgData]);
        return Promise.resolve();
      }
      var nativeImageDecoderSupport = forceDisableNativeImageDecoder ? _util.NativeImageDecoding.NONE : this.options.nativeImageDecoderSupport;
      var objId = 'img_' + this.idFactory.createObjId();
      if (nativeImageDecoderSupport !== _util.NativeImageDecoding.NONE && !softMask && !mask && image instanceof _jpeg_stream.JpegStream && NativeImageDecoder.isSupported(image, this.xref, resources, this.pdfFunctionFactory)) {
        return this.handler.sendWithPromise('obj', [objId, this.pageIndex, 'JpegStream', image.getIR(this.options.forceDataSchema)]).then(function () {
          operatorList.addDependency(objId);
          args = [objId, w, h];
          operatorList.addOp(_util.OPS.paintJpegXObject, args);
          if (cacheKey) {
            imageCache[cacheKey] = {
              fn: _util.OPS.paintJpegXObject,
              args: args
            };
          }
        }, function (reason) {
          (0, _util.warn)('Native JPEG decoding failed -- trying to recover: ' + (reason && reason.message));
          return _this2.buildPaintImageXObject({
            resources: resources,
            image: image,
            isInline: isInline,
            operatorList: operatorList,
            cacheKey: cacheKey,
            imageCache: imageCache,
            forceDisableNativeImageDecoder: true
          });
        });
      }
      var nativeImageDecoder = null;
      if (nativeImageDecoderSupport === _util.NativeImageDecoding.DECODE && (image instanceof _jpeg_stream.JpegStream || mask instanceof _jpeg_stream.JpegStream || softMask instanceof _jpeg_stream.JpegStream)) {
        nativeImageDecoder = new NativeImageDecoder({
          xref: this.xref,
          resources: resources,
          handler: this.handler,
          forceDataSchema: this.options.forceDataSchema,
          pdfFunctionFactory: this.pdfFunctionFactory
        });
      }
      operatorList.addDependency(objId);
      args = [objId, w, h];
      _image.PDFImage.buildImage({
        handler: this.handler,
        xref: this.xref,
        res: resources,
        image: image,
        isInline: isInline,
        nativeDecoder: nativeImageDecoder,
        pdfFunctionFactory: this.pdfFunctionFactory
      }).then(function (imageObj) {
        var imgData = imageObj.createImageData(false);
        _this2.handler.send('obj', [objId, _this2.pageIndex, 'Image', imgData], [imgData.data.buffer]);
      }).catch(function (reason) {
        (0, _util.warn)('Unable to decode image: ' + reason);
        _this2.handler.send('obj', [objId, _this2.pageIndex, 'Image', null]);
      });
      operatorList.addOp(_util.OPS.paintImageXObject, args);
      if (cacheKey) {
        imageCache[cacheKey] = {
          fn: _util.OPS.paintImageXObject,
          args: args
        };
      }
      return Promise.resolve();
    },

    handleSMask: function PartialEvaluator_handleSmask(smask, resources, operatorList, task, stateManager) {
      var smaskContent = smask.get('G');
      var smaskOptions = {
        subtype: smask.get('S').name,
        backdrop: smask.get('BC')
      };
      var transferObj = smask.get('TR');
      if ((0, _function.isPDFFunction)(transferObj)) {
        var transferFn = this.pdfFunctionFactory.create(transferObj);
        var transferMap = new Uint8Array(256);
        var tmp = new Float32Array(1);
        for (var i = 0; i < 256; i++) {
          tmp[0] = i / 255;
          transferFn(tmp, 0, tmp, 0);
          transferMap[i] = tmp[0] * 255 | 0;
        }
        smaskOptions.transferMap = transferMap;
      }
      return this.buildFormXObject(resources, smaskContent, smaskOptions, operatorList, task, stateManager.state.clone());
    },
    handleTilingType: function handleTilingType(fn, args, resources, pattern, patternDict, operatorList, task) {
      var _this3 = this;

      var tilingOpList = new _operator_list.OperatorList();
      var resourcesArray = [patternDict.get('Resources'), resources];
      var patternResources = _primitives.Dict.merge(this.xref, resourcesArray);
      return this.getOperatorList({
        stream: pattern,
        task: task,
        resources: patternResources,
        operatorList: tilingOpList
      }).then(function () {
        return (0, _pattern.getTilingPatternIR)({
          fnArray: tilingOpList.fnArray,
          argsArray: tilingOpList.argsArray
        }, patternDict, args);
      }).then(function (tilingPatternIR) {
        operatorList.addDependencies(tilingOpList.dependencies);
        operatorList.addOp(fn, tilingPatternIR);
      }, function (reason) {
        if (_this3.options.ignoreErrors) {
          _this3.handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.unknown });
          (0, _util.warn)('handleTilingType - ignoring pattern: "' + reason + '".');
          return;
        }
        throw reason;
      });
    },

    handleSetFont: function PartialEvaluator_handleSetFont(resources, fontArgs, fontRef, operatorList, task, state) {
      var _this4 = this;

      var fontName;
      if (fontArgs) {
        fontArgs = fontArgs.slice();
        fontName = fontArgs[0].name;
      }
      return this.loadFont(fontName, fontRef, resources).then(function (translated) {
        if (!translated.font.isType3Font) {
          return translated;
        }
        return translated.loadType3Data(_this4, resources, operatorList, task).then(function () {
          return translated;
        }).catch(function (reason) {
          _this4.handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.font });
          return new TranslatedFont('g_font_error', new _fonts.ErrorFont('Type3 font load error: ' + reason), translated.font);
        });
      }).then(function (translated) {
        state.font = translated.font;
        translated.send(_this4.handler);
        return translated.loadedName;
      });
    },
    handleText: function PartialEvaluator_handleText(chars, state) {
      var _this5 = this;

      var font = state.font;
      var glyphs = font.charsToGlyphs(chars);
      var isAddToPathSet = !!(state.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
      if (font.data && (isAddToPathSet || this.options.disableFontFace || state.fillColorSpace.name === 'Pattern')) {
        var buildPath = function buildPath(fontChar) {
          if (!font.renderer.hasBuiltPath(fontChar)) {
            var path = font.renderer.getPathJs(fontChar);
            _this5.handler.send('commonobj', [font.loadedName + '_path_' + fontChar, 'FontPath', path]);
          }
        };
        for (var i = 0, ii = glyphs.length; i < ii; i++) {
          var glyph = glyphs[i];
          buildPath(glyph.fontChar);
          var accent = glyph.accent;
          if (accent && accent.fontChar) {
            buildPath(accent.fontChar);
          }
        }
      }
      return glyphs;
    },
    setGState: function PartialEvaluator_setGState(resources, gState, operatorList, task, stateManager) {
      var _this6 = this;

      var gStateObj = [];
      var gStateKeys = gState.getKeys();
      var promise = Promise.resolve();

      var _loop = function _loop() {
        var key = gStateKeys[i];
        var value = gState.get(key);
        switch (key) {
          case 'Type':
            break;
          case 'LW':
          case 'LC':
          case 'LJ':
          case 'ML':
          case 'D':
          case 'RI':
          case 'FL':
          case 'CA':
          case 'ca':
            gStateObj.push([key, value]);
            break;
          case 'Font':
            promise = promise.then(function () {
              return _this6.handleSetFont(resources, null, value[0], operatorList, task, stateManager.state).then(function (loadedName) {
                operatorList.addDependency(loadedName);
                gStateObj.push([key, [loadedName, value[1]]]);
              });
            });
            break;
          case 'BM':
            gStateObj.push([key, normalizeBlendMode(value)]);
            break;
          case 'SMask':
            if ((0, _primitives.isName)(value, 'None')) {
              gStateObj.push([key, false]);
              break;
            }
            if ((0, _primitives.isDict)(value)) {
              promise = promise.then(function () {
                return _this6.handleSMask(value, resources, operatorList, task, stateManager);
              });
              gStateObj.push([key, true]);
            } else {
              (0, _util.warn)('Unsupported SMask type');
            }
            break;
          case 'OP':
          case 'op':
          case 'OPM':
          case 'BG':
          case 'BG2':
          case 'UCR':
          case 'UCR2':
          case 'TR':
          case 'TR2':
          case 'HT':
          case 'SM':
          case 'SA':
          case 'AIS':
          case 'TK':
            (0, _util.info)('graphic state operator ' + key);
            break;
          default:
            (0, _util.info)('Unknown graphic state operator ' + key);
            break;
        }
      };

      for (var i = 0, ii = gStateKeys.length; i < ii; i++) {
        _loop();
      }
      return promise.then(function () {
        if (gStateObj.length > 0) {
          operatorList.addOp(_util.OPS.setGState, [gStateObj]);
        }
      });
    },
    loadFont: function PartialEvaluator_loadFont(fontName, font, resources) {
      var _this7 = this;

      function errorFont() {
        return Promise.resolve(new TranslatedFont('g_font_error', new _fonts.ErrorFont('Font ' + fontName + ' is not available'), font));
      }
      var fontRef,
          xref = this.xref;
      if (font) {
        if (!(0, _primitives.isRef)(font)) {
          throw new Error('The "font" object should be a reference.');
        }
        fontRef = font;
      } else {
        var fontRes = resources.get('Font');
        if (fontRes) {
          fontRef = fontRes.getRaw(fontName);
        } else {
          (0, _util.warn)('fontRes not available');
          return errorFont();
        }
      }
      if (!fontRef) {
        (0, _util.warn)('fontRef not available');
        return errorFont();
      }
      if (this.fontCache.has(fontRef)) {
        return this.fontCache.get(fontRef);
      }
      font = xref.fetchIfRef(fontRef);
      if (!(0, _primitives.isDict)(font)) {
        return errorFont();
      }
      if (font.translated) {
        return font.translated;
      }
      var fontCapability = (0, _util.createPromiseCapability)();
      var preEvaluatedFont = this.preEvaluateFont(font);
      var descriptor = preEvaluatedFont.descriptor;
      var fontRefIsRef = (0, _primitives.isRef)(fontRef),
          fontID;
      if (fontRefIsRef) {
        fontID = fontRef.toString();
      }
      if ((0, _primitives.isDict)(descriptor)) {
        if (!descriptor.fontAliases) {
          descriptor.fontAliases = Object.create(null);
        }
        var fontAliases = descriptor.fontAliases;
        var hash = preEvaluatedFont.hash;
        if (fontAliases[hash]) {
          var aliasFontRef = fontAliases[hash].aliasRef;
          if (fontRefIsRef && aliasFontRef && this.fontCache.has(aliasFontRef)) {
            this.fontCache.putAlias(fontRef, aliasFontRef);
            return this.fontCache.get(fontRef);
          }
        } else {
          fontAliases[hash] = { fontID: _fonts.Font.getFontID() };
        }
        if (fontRefIsRef) {
          fontAliases[hash].aliasRef = fontRef;
        }
        fontID = fontAliases[hash].fontID;
      }
      if (fontRefIsRef) {
        this.fontCache.put(fontRef, fontCapability.promise);
      } else {
        if (!fontID) {
          fontID = this.idFactory.createObjId();
        }
        this.fontCache.put('id_' + fontID, fontCapability.promise);
      }
      (0, _util.assert)(fontID, 'The "fontID" must be defined.');
      font.loadedName = 'g_' + this.pdfManager.docId + '_f' + fontID;
      font.translated = fontCapability.promise;
      var translatedPromise;
      try {
        translatedPromise = this.translateFont(preEvaluatedFont);
      } catch (e) {
        translatedPromise = Promise.reject(e);
      }
      translatedPromise.then(function (translatedFont) {
        if (translatedFont.fontType !== undefined) {
          var xrefFontStats = xref.stats.fontTypes;
          xrefFontStats[translatedFont.fontType] = true;
        }
        fontCapability.resolve(new TranslatedFont(font.loadedName, translatedFont, font));
      }).catch(function (reason) {
        _this7.handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.font });
        try {
          var descriptor = preEvaluatedFont.descriptor;
          var fontFile3 = descriptor && descriptor.get('FontFile3');
          var subtype = fontFile3 && fontFile3.get('Subtype');
          var fontType = (0, _fonts.getFontType)(preEvaluatedFont.type, subtype && subtype.name);
          var xrefFontStats = xref.stats.fontTypes;
          xrefFontStats[fontType] = true;
        } catch (ex) {}
        fontCapability.resolve(new TranslatedFont(font.loadedName, new _fonts.ErrorFont(reason instanceof Error ? reason.message : reason), font));
      });
      return fontCapability.promise;
    },
    buildPath: function PartialEvaluator_buildPath(operatorList, fn, args) {
      var lastIndex = operatorList.length - 1;
      if (!args) {
        args = [];
      }
      if (lastIndex < 0 || operatorList.fnArray[lastIndex] !== _util.OPS.constructPath) {
        operatorList.addOp(_util.OPS.constructPath, [[fn], args]);
      } else {
        var opArgs = operatorList.argsArray[lastIndex];
        opArgs[0].push(fn);
        Array.prototype.push.apply(opArgs[1], args);
      }
    },
    handleColorN: function PartialEvaluator_handleColorN(operatorList, fn, args, cs, patterns, resources, task) {
      var patternName = args[args.length - 1];
      var pattern;
      if ((0, _primitives.isName)(patternName) && (pattern = patterns.get(patternName.name))) {
        var dict = (0, _primitives.isStream)(pattern) ? pattern.dict : pattern;
        var typeNum = dict.get('PatternType');
        if (typeNum === TILING_PATTERN) {
          var color = cs.base ? cs.base.getRgb(args, 0) : null;
          return this.handleTilingType(fn, color, resources, pattern, dict, operatorList, task);
        } else if (typeNum === SHADING_PATTERN) {
          var shading = dict.get('Shading');
          var matrix = dict.getArray('Matrix');
          pattern = _pattern.Pattern.parseShading(shading, matrix, this.xref, resources, this.handler, this.pdfFunctionFactory);
          operatorList.addOp(fn, pattern.getIR());
          return Promise.resolve();
        }
        return Promise.reject(new Error('Unknown PatternType: ' + typeNum));
      }
      operatorList.addOp(fn, args);
      return Promise.resolve();
    },
    getOperatorList: function getOperatorList(_ref5) {
      var _this8 = this;

      var stream = _ref5.stream,
          task = _ref5.task,
          resources = _ref5.resources,
          operatorList = _ref5.operatorList,
          _ref5$initialState = _ref5.initialState,
          initialState = _ref5$initialState === undefined ? null : _ref5$initialState;

      resources = resources || _primitives.Dict.empty;
      initialState = initialState || new EvalState();
      if (!operatorList) {
        throw new Error('getOperatorList: missing "operatorList" parameter');
      }
      var self = this;
      var xref = this.xref;
      var imageCache = Object.create(null);
      var xobjs = resources.get('XObject') || _primitives.Dict.empty;
      var patterns = resources.get('Pattern') || _primitives.Dict.empty;
      var stateManager = new StateManager(initialState);
      var preprocessor = new EvaluatorPreprocessor(stream, xref, stateManager);
      var timeSlotManager = new TimeSlotManager();
      function closePendingRestoreOPS(argument) {
        for (var i = 0, ii = preprocessor.savedStatesDepth; i < ii; i++) {
          operatorList.addOp(_util.OPS.restore, []);
        }
      }
      return new Promise(function promiseBody(resolve, reject) {
        var next = function next(promise) {
          promise.then(function () {
            try {
              promiseBody(resolve, reject);
            } catch (ex) {
              reject(ex);
            }
          }, reject);
        };
        task.ensureNotTerminated();
        timeSlotManager.reset();
        var stop,
            operation = {},
            i,
            ii,
            cs;
        while (!(stop = timeSlotManager.check())) {
          operation.args = null;
          if (!preprocessor.read(operation)) {
            break;
          }
          var args = operation.args;
          var fn = operation.fn;
          switch (fn | 0) {
            case _util.OPS.paintXObject:
              var name = args[0].name;
              if (name && imageCache[name] !== undefined) {
                operatorList.addOp(imageCache[name].fn, imageCache[name].args);
                args = null;
                continue;
              }
              next(new Promise(function (resolveXObject, rejectXObject) {
                if (!name) {
                  throw new _util.FormatError('XObject must be referred to by name.');
                }
                var xobj = xobjs.get(name);
                if (!xobj) {
                  operatorList.addOp(fn, args);
                  resolveXObject();
                  return;
                }
                if (!(0, _primitives.isStream)(xobj)) {
                  throw new _util.FormatError('XObject should be a stream');
                }
                var type = xobj.dict.get('Subtype');
                if (!(0, _primitives.isName)(type)) {
                  throw new _util.FormatError('XObject should have a Name subtype');
                }
                if (type.name === 'Form') {
                  stateManager.save();
                  self.buildFormXObject(resources, xobj, null, operatorList, task, stateManager.state.clone()).then(function () {
                    stateManager.restore();
                    resolveXObject();
                  }, rejectXObject);
                  return;
                } else if (type.name === 'Image') {
                  self.buildPaintImageXObject({
                    resources: resources,
                    image: xobj,
                    operatorList: operatorList,
                    cacheKey: name,
                    imageCache: imageCache
                  }).then(resolveXObject, rejectXObject);
                  return;
                } else if (type.name === 'PS') {
                  (0, _util.info)('Ignored XObject subtype PS');
                } else {
                  throw new _util.FormatError('Unhandled XObject subtype ' + type.name);
                }
                resolveXObject();
              }).catch(function (reason) {
                if (self.options.ignoreErrors) {
                  self.handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.unknown });
                  (0, _util.warn)('getOperatorList - ignoring XObject: "' + reason + '".');
                  return;
                }
                throw reason;
              }));
              return;
            case _util.OPS.setFont:
              var fontSize = args[1];
              next(self.handleSetFont(resources, args, null, operatorList, task, stateManager.state).then(function (loadedName) {
                operatorList.addDependency(loadedName);
                operatorList.addOp(_util.OPS.setFont, [loadedName, fontSize]);
              }));
              return;
            case _util.OPS.endInlineImage:
              var cacheKey = args[0].cacheKey;
              if (cacheKey) {
                var cacheEntry = imageCache[cacheKey];
                if (cacheEntry !== undefined) {
                  operatorList.addOp(cacheEntry.fn, cacheEntry.args);
                  args = null;
                  continue;
                }
              }
              next(self.buildPaintImageXObject({
                resources: resources,
                image: args[0],
                isInline: true,
                operatorList: operatorList,
                cacheKey: cacheKey,
                imageCache: imageCache
              }));
              return;
            case _util.OPS.showText:
              args[0] = self.handleText(args[0], stateManager.state);
              break;
            case _util.OPS.showSpacedText:
              var arr = args[0];
              var combinedGlyphs = [];
              var arrLength = arr.length;
              var state = stateManager.state;
              for (i = 0; i < arrLength; ++i) {
                var arrItem = arr[i];
                if ((0, _util.isString)(arrItem)) {
                  Array.prototype.push.apply(combinedGlyphs, self.handleText(arrItem, state));
                } else if ((0, _util.isNum)(arrItem)) {
                  combinedGlyphs.push(arrItem);
                }
              }
              args[0] = combinedGlyphs;
              fn = _util.OPS.showText;
              break;
            case _util.OPS.nextLineShowText:
              operatorList.addOp(_util.OPS.nextLine);
              args[0] = self.handleText(args[0], stateManager.state);
              fn = _util.OPS.showText;
              break;
            case _util.OPS.nextLineSetSpacingShowText:
              operatorList.addOp(_util.OPS.nextLine);
              operatorList.addOp(_util.OPS.setWordSpacing, [args.shift()]);
              operatorList.addOp(_util.OPS.setCharSpacing, [args.shift()]);
              args[0] = self.handleText(args[0], stateManager.state);
              fn = _util.OPS.showText;
              break;
            case _util.OPS.setTextRenderingMode:
              stateManager.state.textRenderingMode = args[0];
              break;
            case _util.OPS.setFillColorSpace:
              stateManager.state.fillColorSpace = _colorspace.ColorSpace.parse(args[0], xref, resources, self.pdfFunctionFactory);
              continue;
            case _util.OPS.setStrokeColorSpace:
              stateManager.state.strokeColorSpace = _colorspace.ColorSpace.parse(args[0], xref, resources, self.pdfFunctionFactory);
              continue;
            case _util.OPS.setFillColor:
              cs = stateManager.state.fillColorSpace;
              args = cs.getRgb(args, 0);
              fn = _util.OPS.setFillRGBColor;
              break;
            case _util.OPS.setStrokeColor:
              cs = stateManager.state.strokeColorSpace;
              args = cs.getRgb(args, 0);
              fn = _util.OPS.setStrokeRGBColor;
              break;
            case _util.OPS.setFillGray:
              stateManager.state.fillColorSpace = _colorspace.ColorSpace.singletons.gray;
              args = _colorspace.ColorSpace.singletons.gray.getRgb(args, 0);
              fn = _util.OPS.setFillRGBColor;
              break;
            case _util.OPS.setStrokeGray:
              stateManager.state.strokeColorSpace = _colorspace.ColorSpace.singletons.gray;
              args = _colorspace.ColorSpace.singletons.gray.getRgb(args, 0);
              fn = _util.OPS.setStrokeRGBColor;
              break;
            case _util.OPS.setFillCMYKColor:
              stateManager.state.fillColorSpace = _colorspace.ColorSpace.singletons.cmyk;
              args = _colorspace.ColorSpace.singletons.cmyk.getRgb(args, 0);
              fn = _util.OPS.setFillRGBColor;
              break;
            case _util.OPS.setStrokeCMYKColor:
              stateManager.state.strokeColorSpace = _colorspace.ColorSpace.singletons.cmyk;
              args = _colorspace.ColorSpace.singletons.cmyk.getRgb(args, 0);
              fn = _util.OPS.setStrokeRGBColor;
              break;
            case _util.OPS.setFillRGBColor:
              stateManager.state.fillColorSpace = _colorspace.ColorSpace.singletons.rgb;
              args = _colorspace.ColorSpace.singletons.rgb.getRgb(args, 0);
              break;
            case _util.OPS.setStrokeRGBColor:
              stateManager.state.strokeColorSpace = _colorspace.ColorSpace.singletons.rgb;
              args = _colorspace.ColorSpace.singletons.rgb.getRgb(args, 0);
              break;
            case _util.OPS.setFillColorN:
              cs = stateManager.state.fillColorSpace;
              if (cs.name === 'Pattern') {
                next(self.handleColorN(operatorList, _util.OPS.setFillColorN, args, cs, patterns, resources, task));
                return;
              }
              args = cs.getRgb(args, 0);
              fn = _util.OPS.setFillRGBColor;
              break;
            case _util.OPS.setStrokeColorN:
              cs = stateManager.state.strokeColorSpace;
              if (cs.name === 'Pattern') {
                next(self.handleColorN(operatorList, _util.OPS.setStrokeColorN, args, cs, patterns, resources, task));
                return;
              }
              args = cs.getRgb(args, 0);
              fn = _util.OPS.setStrokeRGBColor;
              break;
            case _util.OPS.shadingFill:
              var shadingRes = resources.get('Shading');
              if (!shadingRes) {
                throw new _util.FormatError('No shading resource found');
              }
              var shading = shadingRes.get(args[0].name);
              if (!shading) {
                throw new _util.FormatError('No shading object found');
              }
              var shadingFill = _pattern.Pattern.parseShading(shading, null, xref, resources, self.handler, self.pdfFunctionFactory);
              var patternIR = shadingFill.getIR();
              args = [patternIR];
              fn = _util.OPS.shadingFill;
              break;
            case _util.OPS.setGState:
              var dictName = args[0];
              var extGState = resources.get('ExtGState');
              if (!(0, _primitives.isDict)(extGState) || !extGState.has(dictName.name)) {
                break;
              }
              var gState = extGState.get(dictName.name);
              next(self.setGState(resources, gState, operatorList, task, stateManager));
              return;
            case _util.OPS.moveTo:
            case _util.OPS.lineTo:
            case _util.OPS.curveTo:
            case _util.OPS.curveTo2:
            case _util.OPS.curveTo3:
            case _util.OPS.closePath:
              self.buildPath(operatorList, fn, args);
              continue;
            case _util.OPS.rectangle:
              self.buildPath(operatorList, fn, args);
              continue;
            case _util.OPS.markPoint:
            case _util.OPS.markPointProps:
            case _util.OPS.beginMarkedContent:
            case _util.OPS.beginMarkedContentProps:
            case _util.OPS.endMarkedContent:
            case _util.OPS.beginCompat:
            case _util.OPS.endCompat:
              continue;
            default:
              if (args !== null) {
                for (i = 0, ii = args.length; i < ii; i++) {
                  if (args[i] instanceof _primitives.Dict) {
                    break;
                  }
                }
                if (i < ii) {
                  (0, _util.warn)('getOperatorList - ignoring operator: ' + fn);
                  continue;
                }
              }
          }
          operatorList.addOp(fn, args);
        }
        if (stop) {
          next(deferred);
          return;
        }
        closePendingRestoreOPS();
        resolve();
      }).catch(function (reason) {
        if (_this8.options.ignoreErrors) {
          _this8.handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.unknown });
          (0, _util.warn)('getOperatorList - ignoring errors during "' + task.name + '" ' + ('task: "' + reason + '".'));
          closePendingRestoreOPS();
          return;
        }
        throw reason;
      });
    },
    getTextContent: function getTextContent(_ref6) {
      var _this9 = this;

      var stream = _ref6.stream,
          task = _ref6.task,
          resources = _ref6.resources,
          _ref6$stateManager = _ref6.stateManager,
          stateManager = _ref6$stateManager === undefined ? null : _ref6$stateManager,
          _ref6$normalizeWhites = _ref6.normalizeWhitespace,
          normalizeWhitespace = _ref6$normalizeWhites === undefined ? false : _ref6$normalizeWhites,
          _ref6$combineTextItem = _ref6.combineTextItems,
          combineTextItems = _ref6$combineTextItem === undefined ? false : _ref6$combineTextItem,
          sink = _ref6.sink,
          _ref6$seenStyles = _ref6.seenStyles,
          seenStyles = _ref6$seenStyles === undefined ? Object.create(null) : _ref6$seenStyles;

      resources = resources || _primitives.Dict.empty;
      stateManager = stateManager || new StateManager(new TextState());
      var WhitespaceRegexp = /\s/g;
      var textContent = {
        items: [],
        styles: Object.create(null)
      };
      var textContentItem = {
        initialized: false,
        str: [],
        width: 0,
        height: 0,
        vertical: false,
        lastAdvanceWidth: 0,
        lastAdvanceHeight: 0,
        textAdvanceScale: 0,
        spaceWidth: 0,
        fakeSpaceMin: Infinity,
        fakeMultiSpaceMin: Infinity,
        fakeMultiSpaceMax: -0,
        textRunBreakAllowed: false,
        transform: null,
        fontName: null
      };
      var SPACE_FACTOR = 0.3;
      var MULTI_SPACE_FACTOR = 1.5;
      var MULTI_SPACE_FACTOR_MAX = 4;
      var self = this;
      var xref = this.xref;
      var xobjs = null;
      var skipEmptyXObjs = Object.create(null);
      var preprocessor = new EvaluatorPreprocessor(stream, xref, stateManager);
      var textState;
      function ensureTextContentItem() {
        if (textContentItem.initialized) {
          return textContentItem;
        }
        var font = textState.font;
        if (!(font.loadedName in seenStyles)) {
          seenStyles[font.loadedName] = true;
          textContent.styles[font.loadedName] = {
            fontFamily: font.fallbackName,
            ascent: font.ascent,
            descent: font.descent,
            vertical: font.vertical
          };
        }
        textContentItem.fontName = font.loadedName;
        var tsm = [textState.fontSize * textState.textHScale, 0, 0, textState.fontSize, 0, textState.textRise];
        if (font.isType3Font && textState.fontMatrix !== _util.FONT_IDENTITY_MATRIX && textState.fontSize === 1) {
          var glyphHeight = font.bbox[3] - font.bbox[1];
          if (glyphHeight > 0) {
            glyphHeight = glyphHeight * textState.fontMatrix[3];
            tsm[3] *= glyphHeight;
          }
        }
        var trm = _util.Util.transform(textState.ctm, _util.Util.transform(textState.textMatrix, tsm));
        textContentItem.transform = trm;
        if (!font.vertical) {
          textContentItem.width = 0;
          textContentItem.height = Math.sqrt(trm[2] * trm[2] + trm[3] * trm[3]);
          textContentItem.vertical = false;
        } else {
          textContentItem.width = Math.sqrt(trm[0] * trm[0] + trm[1] * trm[1]);
          textContentItem.height = 0;
          textContentItem.vertical = true;
        }
        var a = textState.textLineMatrix[0];
        var b = textState.textLineMatrix[1];
        var scaleLineX = Math.sqrt(a * a + b * b);
        a = textState.ctm[0];
        b = textState.ctm[1];
        var scaleCtmX = Math.sqrt(a * a + b * b);
        textContentItem.textAdvanceScale = scaleCtmX * scaleLineX;
        textContentItem.lastAdvanceWidth = 0;
        textContentItem.lastAdvanceHeight = 0;
        var spaceWidth = font.spaceWidth / 1000 * textState.fontSize;
        if (spaceWidth) {
          textContentItem.spaceWidth = spaceWidth;
          textContentItem.fakeSpaceMin = spaceWidth * SPACE_FACTOR;
          textContentItem.fakeMultiSpaceMin = spaceWidth * MULTI_SPACE_FACTOR;
          textContentItem.fakeMultiSpaceMax = spaceWidth * MULTI_SPACE_FACTOR_MAX;
          textContentItem.textRunBreakAllowed = !font.isMonospace;
        } else {
          textContentItem.spaceWidth = 0;
          textContentItem.fakeSpaceMin = Infinity;
          textContentItem.fakeMultiSpaceMin = Infinity;
          textContentItem.fakeMultiSpaceMax = 0;
          textContentItem.textRunBreakAllowed = false;
        }
        textContentItem.initialized = true;
        return textContentItem;
      }
      function replaceWhitespace(str) {
        var i = 0,
            ii = str.length,
            code;
        while (i < ii && (code = str.charCodeAt(i)) >= 0x20 && code <= 0x7F) {
          i++;
        }
        return i < ii ? str.replace(WhitespaceRegexp, ' ') : str;
      }
      function runBidiTransform(textChunk) {
        var str = textChunk.str.join('');
        var bidiResult = (0, _bidi.bidi)(str, -1, textChunk.vertical);
        return {
          str: normalizeWhitespace ? replaceWhitespace(bidiResult.str) : bidiResult.str,
          dir: bidiResult.dir,
          width: textChunk.width,
          height: textChunk.height,
          transform: textChunk.transform,
          fontName: textChunk.fontName
        };
      }
      function handleSetFont(fontName, fontRef) {
        return self.loadFont(fontName, fontRef, resources).then(function (translated) {
          textState.font = translated.font;
          textState.fontMatrix = translated.font.fontMatrix || _util.FONT_IDENTITY_MATRIX;
        });
      }
      function buildTextContentItem(chars) {
        var font = textState.font;
        var textChunk = ensureTextContentItem();
        var width = 0;
        var height = 0;
        var glyphs = font.charsToGlyphs(chars);
        for (var i = 0; i < glyphs.length; i++) {
          var glyph = glyphs[i];
          var glyphWidth = null;
          if (font.vertical && glyph.vmetric) {
            glyphWidth = glyph.vmetric[0];
          } else {
            glyphWidth = glyph.width;
          }
          var glyphUnicode = glyph.unicode;
          var NormalizedUnicodes = (0, _unicode.getNormalizedUnicodes)();
          if (NormalizedUnicodes[glyphUnicode] !== undefined) {
            glyphUnicode = NormalizedUnicodes[glyphUnicode];
          }
          glyphUnicode = (0, _unicode.reverseIfRtl)(glyphUnicode);
          var charSpacing = textState.charSpacing;
          if (glyph.isSpace) {
            var wordSpacing = textState.wordSpacing;
            charSpacing += wordSpacing;
            if (wordSpacing > 0) {
              addFakeSpaces(wordSpacing, textChunk.str);
            }
          }
          var tx = 0;
          var ty = 0;
          if (!font.vertical) {
            var w0 = glyphWidth * textState.fontMatrix[0];
            tx = (w0 * textState.fontSize + charSpacing) * textState.textHScale;
            width += tx;
          } else {
            var w1 = glyphWidth * textState.fontMatrix[0];
            ty = w1 * textState.fontSize + charSpacing;
            height += ty;
          }
          textState.translateTextMatrix(tx, ty);
          textChunk.str.push(glyphUnicode);
        }
        if (!font.vertical) {
          textChunk.lastAdvanceWidth = width;
          textChunk.width += width;
        } else {
          textChunk.lastAdvanceHeight = height;
          textChunk.height += Math.abs(height);
        }
        return textChunk;
      }
      function addFakeSpaces(width, strBuf) {
        if (width < textContentItem.fakeSpaceMin) {
          return;
        }
        if (width < textContentItem.fakeMultiSpaceMin) {
          strBuf.push(' ');
          return;
        }
        var fakeSpaces = Math.round(width / textContentItem.spaceWidth);
        while (fakeSpaces-- > 0) {
          strBuf.push(' ');
        }
      }
      function flushTextContentItem() {
        if (!textContentItem.initialized) {
          return;
        }
        textContentItem.width *= textContentItem.textAdvanceScale;
        textContentItem.height *= textContentItem.textAdvanceScale;
        textContent.items.push(runBidiTransform(textContentItem));
        textContentItem.initialized = false;
        textContentItem.str.length = 0;
      }
      function enqueueChunk() {
        var length = textContent.items.length;
        if (length > 0) {
          sink.enqueue(textContent, length);
          textContent.items = [];
          textContent.styles = Object.create(null);
        }
      }
      var timeSlotManager = new TimeSlotManager();
      return new Promise(function promiseBody(resolve, reject) {
        var next = function next(promise) {
          enqueueChunk();
          Promise.all([promise, sink.ready]).then(function () {
            try {
              promiseBody(resolve, reject);
            } catch (ex) {
              reject(ex);
            }
          }, reject);
        };
        task.ensureNotTerminated();
        timeSlotManager.reset();
        var stop,
            operation = {},
            args = [];
        while (!(stop = timeSlotManager.check())) {
          args.length = 0;
          operation.args = args;
          if (!preprocessor.read(operation)) {
            break;
          }
          textState = stateManager.state;
          var fn = operation.fn;
          args = operation.args;
          var advance, diff;
          switch (fn | 0) {
            case _util.OPS.setFont:
              var fontNameArg = args[0].name,
                  fontSizeArg = args[1];
              if (textState.font && fontNameArg === textState.fontName && fontSizeArg === textState.fontSize) {
                break;
              }
              flushTextContentItem();
              textState.fontName = fontNameArg;
              textState.fontSize = fontSizeArg;
              next(handleSetFont(fontNameArg, null));
              return;
            case _util.OPS.setTextRise:
              flushTextContentItem();
              textState.textRise = args[0];
              break;
            case _util.OPS.setHScale:
              flushTextContentItem();
              textState.textHScale = args[0] / 100;
              break;
            case _util.OPS.setLeading:
              flushTextContentItem();
              textState.leading = args[0];
              break;
            case _util.OPS.moveText:
              var isSameTextLine = !textState.font ? false : (textState.font.vertical ? args[0] : args[1]) === 0;
              advance = args[0] - args[1];
              if (combineTextItems && isSameTextLine && textContentItem.initialized && advance > 0 && advance <= textContentItem.fakeMultiSpaceMax) {
                textState.translateTextLineMatrix(args[0], args[1]);
                textContentItem.width += args[0] - textContentItem.lastAdvanceWidth;
                textContentItem.height += args[1] - textContentItem.lastAdvanceHeight;
                diff = args[0] - textContentItem.lastAdvanceWidth - (args[1] - textContentItem.lastAdvanceHeight);
                addFakeSpaces(diff, textContentItem.str);
                break;
              }
              flushTextContentItem();
              textState.translateTextLineMatrix(args[0], args[1]);
              textState.textMatrix = textState.textLineMatrix.slice();
              break;
            case _util.OPS.setLeadingMoveText:
              flushTextContentItem();
              textState.leading = -args[1];
              textState.translateTextLineMatrix(args[0], args[1]);
              textState.textMatrix = textState.textLineMatrix.slice();
              break;
            case _util.OPS.nextLine:
              flushTextContentItem();
              textState.carriageReturn();
              break;
            case _util.OPS.setTextMatrix:
              advance = textState.calcTextLineMatrixAdvance(args[0], args[1], args[2], args[3], args[4], args[5]);
              if (combineTextItems && advance !== null && textContentItem.initialized && advance.value > 0 && advance.value <= textContentItem.fakeMultiSpaceMax) {
                textState.translateTextLineMatrix(advance.width, advance.height);
                textContentItem.width += advance.width - textContentItem.lastAdvanceWidth;
                textContentItem.height += advance.height - textContentItem.lastAdvanceHeight;
                diff = advance.width - textContentItem.lastAdvanceWidth - (advance.height - textContentItem.lastAdvanceHeight);
                addFakeSpaces(diff, textContentItem.str);
                break;
              }
              flushTextContentItem();
              textState.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
              textState.setTextLineMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
              break;
            case _util.OPS.setCharSpacing:
              textState.charSpacing = args[0];
              break;
            case _util.OPS.setWordSpacing:
              textState.wordSpacing = args[0];
              break;
            case _util.OPS.beginText:
              flushTextContentItem();
              textState.textMatrix = _util.IDENTITY_MATRIX.slice();
              textState.textLineMatrix = _util.IDENTITY_MATRIX.slice();
              break;
            case _util.OPS.showSpacedText:
              var items = args[0];
              var offset;
              for (var j = 0, jj = items.length; j < jj; j++) {
                if (typeof items[j] === 'string') {
                  buildTextContentItem(items[j]);
                } else if ((0, _util.isNum)(items[j])) {
                  ensureTextContentItem();
                  advance = items[j] * textState.fontSize / 1000;
                  var breakTextRun = false;
                  if (textState.font.vertical) {
                    offset = advance;
                    textState.translateTextMatrix(0, offset);
                    breakTextRun = textContentItem.textRunBreakAllowed && advance > textContentItem.fakeMultiSpaceMax;
                    if (!breakTextRun) {
                      textContentItem.height += offset;
                    }
                  } else {
                    advance = -advance;
                    offset = advance * textState.textHScale;
                    textState.translateTextMatrix(offset, 0);
                    breakTextRun = textContentItem.textRunBreakAllowed && advance > textContentItem.fakeMultiSpaceMax;
                    if (!breakTextRun) {
                      textContentItem.width += offset;
                    }
                  }
                  if (breakTextRun) {
                    flushTextContentItem();
                  } else if (advance > 0) {
                    addFakeSpaces(advance, textContentItem.str);
                  }
                }
              }
              break;
            case _util.OPS.showText:
              buildTextContentItem(args[0]);
              break;
            case _util.OPS.nextLineShowText:
              flushTextContentItem();
              textState.carriageReturn();
              buildTextContentItem(args[0]);
              break;
            case _util.OPS.nextLineSetSpacingShowText:
              flushTextContentItem();
              textState.wordSpacing = args[0];
              textState.charSpacing = args[1];
              textState.carriageReturn();
              buildTextContentItem(args[2]);
              break;
            case _util.OPS.paintXObject:
              flushTextContentItem();
              if (!xobjs) {
                xobjs = resources.get('XObject') || _primitives.Dict.empty;
              }
              var name = args[0].name;
              if (name && skipEmptyXObjs[name] !== undefined) {
                break;
              }
              next(new Promise(function (resolveXObject, rejectXObject) {
                if (!name) {
                  throw new _util.FormatError('XObject must be referred to by name.');
                }
                var xobj = xobjs.get(name);
                if (!xobj) {
                  resolveXObject();
                  return;
                }
                if (!(0, _primitives.isStream)(xobj)) {
                  throw new _util.FormatError('XObject should be a stream');
                }
                var type = xobj.dict.get('Subtype');
                if (!(0, _primitives.isName)(type)) {
                  throw new _util.FormatError('XObject should have a Name subtype');
                }
                if (type.name !== 'Form') {
                  skipEmptyXObjs[name] = true;
                  resolveXObject();
                  return;
                }
                var currentState = stateManager.state.clone();
                var xObjStateManager = new StateManager(currentState);
                var matrix = xobj.dict.getArray('Matrix');
                if (Array.isArray(matrix) && matrix.length === 6) {
                  xObjStateManager.transform(matrix);
                }
                enqueueChunk();
                var sinkWrapper = {
                  enqueueInvoked: false,
                  enqueue: function enqueue(chunk, size) {
                    this.enqueueInvoked = true;
                    sink.enqueue(chunk, size);
                  },

                  get desiredSize() {
                    return sink.desiredSize;
                  },
                  get ready() {
                    return sink.ready;
                  }
                };
                self.getTextContent({
                  stream: xobj,
                  task: task,
                  resources: xobj.dict.get('Resources') || resources,
                  stateManager: xObjStateManager,
                  normalizeWhitespace: normalizeWhitespace,
                  combineTextItems: combineTextItems,
                  sink: sinkWrapper,
                  seenStyles: seenStyles
                }).then(function () {
                  if (!sinkWrapper.enqueueInvoked) {
                    skipEmptyXObjs[name] = true;
                  }
                  resolveXObject();
                }, rejectXObject);
              }).catch(function (reason) {
                if (reason instanceof _util.AbortException) {
                  return;
                }
                if (self.options.ignoreErrors) {
                  (0, _util.warn)('getTextContent - ignoring XObject: "' + reason + '".');
                  return;
                }
                throw reason;
              }));
              return;
            case _util.OPS.setGState:
              flushTextContentItem();
              var dictName = args[0];
              var extGState = resources.get('ExtGState');
              if (!(0, _primitives.isDict)(extGState) || !(0, _primitives.isName)(dictName)) {
                break;
              }
              var gState = extGState.get(dictName.name);
              if (!(0, _primitives.isDict)(gState)) {
                break;
              }
              var gStateFont = gState.get('Font');
              if (gStateFont) {
                textState.fontName = null;
                textState.fontSize = gStateFont[1];
                next(handleSetFont(null, gStateFont[0]));
                return;
              }
              break;
          }
          if (textContent.items.length >= sink.desiredSize) {
            stop = true;
            break;
          }
        }
        if (stop) {
          next(deferred);
          return;
        }
        flushTextContentItem();
        enqueueChunk();
        resolve();
      }).catch(function (reason) {
        if (reason instanceof _util.AbortException) {
          return;
        }
        if (_this9.options.ignoreErrors) {
          (0, _util.warn)('getTextContent - ignoring errors during "' + task.name + '" ' + ('task: "' + reason + '".'));
          flushTextContentItem();
          enqueueChunk();
          return;
        }
        throw reason;
      });
    },

    extractDataStructures: function PartialEvaluator_extractDataStructures(dict, baseDict, properties) {
      var _this10 = this;

      var xref = this.xref;
      var toUnicode = dict.get('ToUnicode') || baseDict.get('ToUnicode');
      var toUnicodePromise = toUnicode ? this.readToUnicode(toUnicode) : Promise.resolve(undefined);
      if (properties.composite) {
        var cidSystemInfo = dict.get('CIDSystemInfo');
        if ((0, _primitives.isDict)(cidSystemInfo)) {
          properties.cidSystemInfo = {
            registry: (0, _util.stringToPDFString)(cidSystemInfo.get('Registry')),
            ordering: (0, _util.stringToPDFString)(cidSystemInfo.get('Ordering')),
            supplement: cidSystemInfo.get('Supplement')
          };
        }
        var cidToGidMap = dict.get('CIDToGIDMap');
        if ((0, _primitives.isStream)(cidToGidMap)) {
          properties.cidToGidMap = this.readCidToGidMap(cidToGidMap);
        }
      }
      var differences = [];
      var baseEncodingName = null;
      var encoding;
      if (dict.has('Encoding')) {
        encoding = dict.get('Encoding');
        if ((0, _primitives.isDict)(encoding)) {
          baseEncodingName = encoding.get('BaseEncoding');
          baseEncodingName = (0, _primitives.isName)(baseEncodingName) ? baseEncodingName.name : null;
          if (encoding.has('Differences')) {
            var diffEncoding = encoding.get('Differences');
            var index = 0;
            for (var j = 0, jj = diffEncoding.length; j < jj; j++) {
              var data = xref.fetchIfRef(diffEncoding[j]);
              if ((0, _util.isNum)(data)) {
                index = data;
              } else if ((0, _primitives.isName)(data)) {
                differences[index++] = data.name;
              } else {
                throw new _util.FormatError('Invalid entry in \'Differences\' array: ' + data);
              }
            }
          }
        } else if ((0, _primitives.isName)(encoding)) {
          baseEncodingName = encoding.name;
        } else {
          throw new _util.FormatError('Encoding is not a Name nor a Dict');
        }
        if (baseEncodingName !== 'MacRomanEncoding' && baseEncodingName !== 'MacExpertEncoding' && baseEncodingName !== 'WinAnsiEncoding') {
          baseEncodingName = null;
        }
      }
      if (baseEncodingName) {
        properties.defaultEncoding = (0, _encodings.getEncoding)(baseEncodingName).slice();
      } else {
        var isSymbolicFont = !!(properties.flags & _fonts.FontFlags.Symbolic);
        var isNonsymbolicFont = !!(properties.flags & _fonts.FontFlags.Nonsymbolic);
        encoding = _encodings.StandardEncoding;
        if (properties.type === 'TrueType' && !isNonsymbolicFont) {
          encoding = _encodings.WinAnsiEncoding;
        }
        if (isSymbolicFont) {
          encoding = _encodings.MacRomanEncoding;
          if (!properties.file) {
            if (/Symbol/i.test(properties.name)) {
              encoding = _encodings.SymbolSetEncoding;
            } else if (/Dingbats/i.test(properties.name)) {
              encoding = _encodings.ZapfDingbatsEncoding;
            }
          }
        }
        properties.defaultEncoding = encoding;
      }
      properties.differences = differences;
      properties.baseEncodingName = baseEncodingName;
      properties.hasEncoding = !!baseEncodingName || differences.length > 0;
      properties.dict = dict;
      return toUnicodePromise.then(function (toUnicode) {
        properties.toUnicode = toUnicode;
        return _this10.buildToUnicode(properties);
      }).then(function (toUnicode) {
        properties.toUnicode = toUnicode;
        return properties;
      });
    },
    _buildSimpleFontToUnicode: function _buildSimpleFontToUnicode(properties) {
      (0, _util.assert)(!properties.composite, 'Must be a simple font.');
      var toUnicode = [],
          charcode = void 0,
          glyphName = void 0;
      var encoding = properties.defaultEncoding.slice();
      var baseEncodingName = properties.baseEncodingName;
      var differences = properties.differences;
      for (charcode in differences) {
        glyphName = differences[charcode];
        if (glyphName === '.notdef') {
          continue;
        }
        encoding[charcode] = glyphName;
      }
      var glyphsUnicodeMap = (0, _glyphlist.getGlyphsUnicode)();
      for (charcode in encoding) {
        glyphName = encoding[charcode];
        if (glyphName === '') {
          continue;
        } else if (glyphsUnicodeMap[glyphName] === undefined) {
          var code = 0;
          switch (glyphName[0]) {
            case 'G':
              if (glyphName.length === 3) {
                code = parseInt(glyphName.substr(1), 16);
              }
              break;
            case 'g':
              if (glyphName.length === 5) {
                code = parseInt(glyphName.substr(1), 16);
              }
              break;
            case 'C':
            case 'c':
              if (glyphName.length >= 3) {
                code = +glyphName.substr(1);
              }
              break;
            default:
              var unicode = (0, _unicode.getUnicodeForGlyph)(glyphName, glyphsUnicodeMap);
              if (unicode !== -1) {
                code = unicode;
              }
          }
          if (code) {
            if (baseEncodingName && code === +charcode) {
              var baseEncoding = (0, _encodings.getEncoding)(baseEncodingName);
              if (baseEncoding && (glyphName = baseEncoding[charcode])) {
                toUnicode[charcode] = String.fromCharCode(glyphsUnicodeMap[glyphName]);
                continue;
              }
            }
            toUnicode[charcode] = String.fromCharCode(code);
          }
          continue;
        }
        toUnicode[charcode] = String.fromCharCode(glyphsUnicodeMap[glyphName]);
      }
      return new _fonts.ToUnicodeMap(toUnicode);
    },
    buildToUnicode: function buildToUnicode(properties) {
      properties.hasIncludedToUnicodeMap = !!properties.toUnicode && properties.toUnicode.length > 0;
      if (properties.hasIncludedToUnicodeMap) {
        if (!properties.composite && properties.hasEncoding) {
          properties.fallbackToUnicode = this._buildSimpleFontToUnicode(properties);
        }
        return Promise.resolve(properties.toUnicode);
      }
      if (!properties.composite) {
        return Promise.resolve(this._buildSimpleFontToUnicode(properties));
      }
      if (properties.composite && (properties.cMap.builtInCMap && !(properties.cMap instanceof _cmap.IdentityCMap) || properties.cidSystemInfo.registry === 'Adobe' && (properties.cidSystemInfo.ordering === 'GB1' || properties.cidSystemInfo.ordering === 'CNS1' || properties.cidSystemInfo.ordering === 'Japan1' || properties.cidSystemInfo.ordering === 'Korea1'))) {
        var registry = properties.cidSystemInfo.registry;
        var ordering = properties.cidSystemInfo.ordering;
        var ucs2CMapName = _primitives.Name.get(registry + '-' + ordering + '-UCS2');
        return _cmap.CMapFactory.create({
          encoding: ucs2CMapName,
          fetchBuiltInCMap: this.fetchBuiltInCMap,
          useCMap: null
        }).then(function (ucs2CMap) {
          var cMap = properties.cMap;
          var toUnicode = [];
          cMap.forEach(function (charcode, cid) {
            if (cid > 0xffff) {
              throw new _util.FormatError('Max size of CID is 65,535');
            }
            var ucs2 = ucs2CMap.lookup(cid);
            if (ucs2) {
              toUnicode[charcode] = String.fromCharCode((ucs2.charCodeAt(0) << 8) + ucs2.charCodeAt(1));
            }
          });
          return new _fonts.ToUnicodeMap(toUnicode);
        });
      }
      return Promise.resolve(new _fonts.IdentityToUnicodeMap(properties.firstChar, properties.lastChar));
    },

    readToUnicode: function PartialEvaluator_readToUnicode(toUnicode) {
      var cmapObj = toUnicode;
      if ((0, _primitives.isName)(cmapObj)) {
        return _cmap.CMapFactory.create({
          encoding: cmapObj,
          fetchBuiltInCMap: this.fetchBuiltInCMap,
          useCMap: null
        }).then(function (cmap) {
          if (cmap instanceof _cmap.IdentityCMap) {
            return new _fonts.IdentityToUnicodeMap(0, 0xFFFF);
          }
          return new _fonts.ToUnicodeMap(cmap.getMap());
        });
      } else if ((0, _primitives.isStream)(cmapObj)) {
        return _cmap.CMapFactory.create({
          encoding: cmapObj,
          fetchBuiltInCMap: this.fetchBuiltInCMap,
          useCMap: null
        }).then(function (cmap) {
          if (cmap instanceof _cmap.IdentityCMap) {
            return new _fonts.IdentityToUnicodeMap(0, 0xFFFF);
          }
          var map = new Array(cmap.length);
          cmap.forEach(function (charCode, token) {
            var str = [];
            for (var k = 0; k < token.length; k += 2) {
              var w1 = token.charCodeAt(k) << 8 | token.charCodeAt(k + 1);
              if ((w1 & 0xF800) !== 0xD800) {
                str.push(w1);
                continue;
              }
              k += 2;
              var w2 = token.charCodeAt(k) << 8 | token.charCodeAt(k + 1);
              str.push(((w1 & 0x3ff) << 10) + (w2 & 0x3ff) + 0x10000);
            }
            map[charCode] = String.fromCharCode.apply(String, str);
          });
          return new _fonts.ToUnicodeMap(map);
        });
      }
      return Promise.resolve(null);
    },
    readCidToGidMap: function PartialEvaluator_readCidToGidMap(cidToGidStream) {
      var glyphsData = cidToGidStream.getBytes();
      var result = [];
      for (var j = 0, jj = glyphsData.length; j < jj; j++) {
        var glyphID = glyphsData[j++] << 8 | glyphsData[j];
        if (glyphID === 0) {
          continue;
        }
        var code = j >> 1;
        result[code] = glyphID;
      }
      return result;
    },
    extractWidths: function PartialEvaluator_extractWidths(dict, descriptor, properties) {
      var xref = this.xref;
      var glyphsWidths = [];
      var defaultWidth = 0;
      var glyphsVMetrics = [];
      var defaultVMetrics;
      var i, ii, j, jj, start, code, widths;
      if (properties.composite) {
        defaultWidth = dict.has('DW') ? dict.get('DW') : 1000;
        widths = dict.get('W');
        if (widths) {
          for (i = 0, ii = widths.length; i < ii; i++) {
            start = xref.fetchIfRef(widths[i++]);
            code = xref.fetchIfRef(widths[i]);
            if (Array.isArray(code)) {
              for (j = 0, jj = code.length; j < jj; j++) {
                glyphsWidths[start++] = xref.fetchIfRef(code[j]);
              }
            } else {
              var width = xref.fetchIfRef(widths[++i]);
              for (j = start; j <= code; j++) {
                glyphsWidths[j] = width;
              }
            }
          }
        }
        if (properties.vertical) {
          var vmetrics = dict.getArray('DW2') || [880, -1000];
          defaultVMetrics = [vmetrics[1], defaultWidth * 0.5, vmetrics[0]];
          vmetrics = dict.get('W2');
          if (vmetrics) {
            for (i = 0, ii = vmetrics.length; i < ii; i++) {
              start = xref.fetchIfRef(vmetrics[i++]);
              code = xref.fetchIfRef(vmetrics[i]);
              if (Array.isArray(code)) {
                for (j = 0, jj = code.length; j < jj; j++) {
                  glyphsVMetrics[start++] = [xref.fetchIfRef(code[j++]), xref.fetchIfRef(code[j++]), xref.fetchIfRef(code[j])];
                }
              } else {
                var vmetric = [xref.fetchIfRef(vmetrics[++i]), xref.fetchIfRef(vmetrics[++i]), xref.fetchIfRef(vmetrics[++i])];
                for (j = start; j <= code; j++) {
                  glyphsVMetrics[j] = vmetric;
                }
              }
            }
          }
        }
      } else {
        var firstChar = properties.firstChar;
        widths = dict.get('Widths');
        if (widths) {
          j = firstChar;
          for (i = 0, ii = widths.length; i < ii; i++) {
            glyphsWidths[j++] = xref.fetchIfRef(widths[i]);
          }
          defaultWidth = parseFloat(descriptor.get('MissingWidth')) || 0;
        } else {
          var baseFontName = dict.get('BaseFont');
          if ((0, _primitives.isName)(baseFontName)) {
            var metrics = this.getBaseFontMetrics(baseFontName.name);
            glyphsWidths = this.buildCharCodeToWidth(metrics.widths, properties);
            defaultWidth = metrics.defaultWidth;
          }
        }
      }
      var isMonospace = true;
      var firstWidth = defaultWidth;
      for (var glyph in glyphsWidths) {
        var glyphWidth = glyphsWidths[glyph];
        if (!glyphWidth) {
          continue;
        }
        if (!firstWidth) {
          firstWidth = glyphWidth;
          continue;
        }
        if (firstWidth !== glyphWidth) {
          isMonospace = false;
          break;
        }
      }
      if (isMonospace) {
        properties.flags |= _fonts.FontFlags.FixedPitch;
      }
      properties.defaultWidth = defaultWidth;
      properties.widths = glyphsWidths;
      properties.defaultVMetrics = defaultVMetrics;
      properties.vmetrics = glyphsVMetrics;
    },
    isSerifFont: function PartialEvaluator_isSerifFont(baseFontName) {
      var fontNameWoStyle = baseFontName.split('-')[0];
      return fontNameWoStyle in (0, _standard_fonts.getSerifFonts)() || fontNameWoStyle.search(/serif/gi) !== -1;
    },
    getBaseFontMetrics: function PartialEvaluator_getBaseFontMetrics(name) {
      var defaultWidth = 0;
      var widths = [];
      var monospace = false;
      var stdFontMap = (0, _standard_fonts.getStdFontMap)();
      var lookupName = stdFontMap[name] || name;
      var Metrics = (0, _metrics.getMetrics)();
      if (!(lookupName in Metrics)) {
        if (this.isSerifFont(name)) {
          lookupName = 'Times-Roman';
        } else {
          lookupName = 'Helvetica';
        }
      }
      var glyphWidths = Metrics[lookupName];
      if ((0, _util.isNum)(glyphWidths)) {
        defaultWidth = glyphWidths;
        monospace = true;
      } else {
        widths = glyphWidths();
      }
      return {
        defaultWidth: defaultWidth,
        monospace: monospace,
        widths: widths
      };
    },
    buildCharCodeToWidth: function PartialEvaluator_bulildCharCodeToWidth(widthsByGlyphName, properties) {
      var widths = Object.create(null);
      var differences = properties.differences;
      var encoding = properties.defaultEncoding;
      for (var charCode = 0; charCode < 256; charCode++) {
        if (charCode in differences && widthsByGlyphName[differences[charCode]]) {
          widths[charCode] = widthsByGlyphName[differences[charCode]];
          continue;
        }
        if (charCode in encoding && widthsByGlyphName[encoding[charCode]]) {
          widths[charCode] = widthsByGlyphName[encoding[charCode]];
          continue;
        }
      }
      return widths;
    },
    preEvaluateFont: function PartialEvaluator_preEvaluateFont(dict) {
      var baseDict = dict;
      var type = dict.get('Subtype');
      if (!(0, _primitives.isName)(type)) {
        throw new _util.FormatError('invalid font Subtype');
      }
      var composite = false;
      var uint8array;
      if (type.name === 'Type0') {
        var df = dict.get('DescendantFonts');
        if (!df) {
          throw new _util.FormatError('Descendant fonts are not specified');
        }
        dict = Array.isArray(df) ? this.xref.fetchIfRef(df[0]) : df;
        type = dict.get('Subtype');
        if (!(0, _primitives.isName)(type)) {
          throw new _util.FormatError('invalid font Subtype');
        }
        composite = true;
      }
      var descriptor = dict.get('FontDescriptor');
      if (descriptor) {
        var hash = new _murmurhash.MurmurHash3_64();
        var encoding = baseDict.getRaw('Encoding');
        if ((0, _primitives.isName)(encoding)) {
          hash.update(encoding.name);
        } else if ((0, _primitives.isRef)(encoding)) {
          hash.update(encoding.toString());
        } else if ((0, _primitives.isDict)(encoding)) {
          var keys = encoding.getKeys();
          for (var i = 0, ii = keys.length; i < ii; i++) {
            var entry = encoding.getRaw(keys[i]);
            if ((0, _primitives.isName)(entry)) {
              hash.update(entry.name);
            } else if ((0, _primitives.isRef)(entry)) {
              hash.update(entry.toString());
            } else if (Array.isArray(entry)) {
              var diffLength = entry.length,
                  diffBuf = new Array(diffLength);
              for (var j = 0; j < diffLength; j++) {
                var diffEntry = entry[j];
                if ((0, _primitives.isName)(diffEntry)) {
                  diffBuf[j] = diffEntry.name;
                } else if ((0, _util.isNum)(diffEntry) || (0, _primitives.isRef)(diffEntry)) {
                  diffBuf[j] = diffEntry.toString();
                }
              }
              hash.update(diffBuf.join());
            }
          }
        }
        var toUnicode = dict.get('ToUnicode') || baseDict.get('ToUnicode');
        if ((0, _primitives.isStream)(toUnicode)) {
          var stream = toUnicode.str || toUnicode;
          uint8array = stream.buffer ? new Uint8Array(stream.buffer.buffer, 0, stream.bufferLength) : new Uint8Array(stream.bytes.buffer, stream.start, stream.end - stream.start);
          hash.update(uint8array);
        } else if ((0, _primitives.isName)(toUnicode)) {
          hash.update(toUnicode.name);
        }
        var widths = dict.get('Widths') || baseDict.get('Widths');
        if (widths) {
          uint8array = new Uint8Array(new Uint32Array(widths).buffer);
          hash.update(uint8array);
        }
      }
      return {
        descriptor: descriptor,
        dict: dict,
        baseDict: baseDict,
        composite: composite,
        type: type.name,
        hash: hash ? hash.hexdigest() : ''
      };
    },
    translateFont: function PartialEvaluator_translateFont(preEvaluatedFont) {
      var _this11 = this;

      var baseDict = preEvaluatedFont.baseDict;
      var dict = preEvaluatedFont.dict;
      var composite = preEvaluatedFont.composite;
      var descriptor = preEvaluatedFont.descriptor;
      var type = preEvaluatedFont.type;
      var maxCharIndex = composite ? 0xFFFF : 0xFF;
      var properties;
      if (!descriptor) {
        if (type === 'Type3') {
          descriptor = new _primitives.Dict(null);
          descriptor.set('FontName', _primitives.Name.get(type));
          descriptor.set('FontBBox', dict.getArray('FontBBox'));
        } else {
          var baseFontName = dict.get('BaseFont');
          if (!(0, _primitives.isName)(baseFontName)) {
            throw new _util.FormatError('Base font is not specified');
          }
          baseFontName = baseFontName.name.replace(/[,_]/g, '-');
          var metrics = this.getBaseFontMetrics(baseFontName);
          var fontNameWoStyle = baseFontName.split('-')[0];
          var flags = (this.isSerifFont(fontNameWoStyle) ? _fonts.FontFlags.Serif : 0) | (metrics.monospace ? _fonts.FontFlags.FixedPitch : 0) | ((0, _standard_fonts.getSymbolsFonts)()[fontNameWoStyle] ? _fonts.FontFlags.Symbolic : _fonts.FontFlags.Nonsymbolic);
          properties = {
            type: type,
            name: baseFontName,
            widths: metrics.widths,
            defaultWidth: metrics.defaultWidth,
            flags: flags,
            firstChar: 0,
            lastChar: maxCharIndex
          };
          return this.extractDataStructures(dict, dict, properties).then(function (properties) {
            properties.widths = _this11.buildCharCodeToWidth(metrics.widths, properties);
            return new _fonts.Font(baseFontName, null, properties);
          });
        }
      }
      var firstChar = dict.get('FirstChar') || 0;
      var lastChar = dict.get('LastChar') || maxCharIndex;
      var fontName = descriptor.get('FontName');
      var baseFont = dict.get('BaseFont');
      if ((0, _util.isString)(fontName)) {
        fontName = _primitives.Name.get(fontName);
      }
      if ((0, _util.isString)(baseFont)) {
        baseFont = _primitives.Name.get(baseFont);
      }
      if (type !== 'Type3') {
        var fontNameStr = fontName && fontName.name;
        var baseFontStr = baseFont && baseFont.name;
        if (fontNameStr !== baseFontStr) {
          (0, _util.info)('The FontDescriptor\'s FontName is "' + fontNameStr + '" but should be the same as the Font\'s BaseFont "' + baseFontStr + '"');
          if (fontNameStr && baseFontStr && baseFontStr.indexOf(fontNameStr) === 0) {
            fontName = baseFont;
          }
        }
      }
      fontName = fontName || baseFont;
      if (!(0, _primitives.isName)(fontName)) {
        throw new _util.FormatError('invalid font name');
      }
      var fontFile = descriptor.get('FontFile', 'FontFile2', 'FontFile3');
      if (fontFile) {
        if (fontFile.dict) {
          var subtype = fontFile.dict.get('Subtype');
          if (subtype) {
            subtype = subtype.name;
          }
          var length1 = fontFile.dict.get('Length1');
          var length2 = fontFile.dict.get('Length2');
          var length3 = fontFile.dict.get('Length3');
        }
      }
      properties = {
        type: type,
        name: fontName.name,
        subtype: subtype,
        file: fontFile,
        length1: length1,
        length2: length2,
        length3: length3,
        loadedName: baseDict.loadedName,
        composite: composite,
        wideChars: composite,
        fixedPitch: false,
        fontMatrix: dict.getArray('FontMatrix') || _util.FONT_IDENTITY_MATRIX,
        firstChar: firstChar || 0,
        lastChar: lastChar || maxCharIndex,
        bbox: descriptor.getArray('FontBBox'),
        ascent: descriptor.get('Ascent'),
        descent: descriptor.get('Descent'),
        xHeight: descriptor.get('XHeight'),
        capHeight: descriptor.get('CapHeight'),
        flags: descriptor.get('Flags'),
        italicAngle: descriptor.get('ItalicAngle'),
        isType3Font: false
      };
      var cMapPromise;
      if (composite) {
        var cidEncoding = baseDict.get('Encoding');
        if ((0, _primitives.isName)(cidEncoding)) {
          properties.cidEncoding = cidEncoding.name;
        }
        cMapPromise = _cmap.CMapFactory.create({
          encoding: cidEncoding,
          fetchBuiltInCMap: this.fetchBuiltInCMap,
          useCMap: null
        }).then(function (cMap) {
          properties.cMap = cMap;
          properties.vertical = properties.cMap.vertical;
        });
      } else {
        cMapPromise = Promise.resolve(undefined);
      }
      return cMapPromise.then(function () {
        return _this11.extractDataStructures(dict, baseDict, properties);
      }).then(function (properties) {
        _this11.extractWidths(dict, descriptor, properties);
        if (type === 'Type3') {
          properties.isType3Font = true;
        }
        return new _fonts.Font(fontName.name, fontFile, properties);
      });
    }
  };
  return PartialEvaluator;
}();
var TranslatedFont = function TranslatedFontClosure() {
  function TranslatedFont(loadedName, font, dict) {
    this.loadedName = loadedName;
    this.font = font;
    this.dict = dict;
    this.type3Loaded = null;
    this.sent = false;
  }
  TranslatedFont.prototype = {
    send: function send(handler) {
      if (this.sent) {
        return;
      }
      var fontData = this.font.exportData();
      handler.send('commonobj', [this.loadedName, 'Font', fontData]);
      this.sent = true;
    },
    loadType3Data: function loadType3Data(evaluator, resources, parentOperatorList, task) {
      if (!this.font.isType3Font) {
        throw new Error('Must be a Type3 font.');
      }
      if (this.type3Loaded) {
        return this.type3Loaded;
      }
      var type3Options = Object.create(evaluator.options);
      type3Options.ignoreErrors = false;
      var type3Evaluator = evaluator.clone(type3Options);
      var translatedFont = this.font;
      var loadCharProcsPromise = Promise.resolve();
      var charProcs = this.dict.get('CharProcs');
      var fontResources = this.dict.get('Resources') || resources;
      var charProcKeys = charProcs.getKeys();
      var charProcOperatorList = Object.create(null);

      var _loop2 = function _loop2() {
        var key = charProcKeys[i];
        loadCharProcsPromise = loadCharProcsPromise.then(function () {
          var glyphStream = charProcs.get(key);
          var operatorList = new _operator_list.OperatorList();
          return type3Evaluator.getOperatorList({
            stream: glyphStream,
            task: task,
            resources: fontResources,
            operatorList: operatorList
          }).then(function () {
            charProcOperatorList[key] = operatorList.getIR();
            parentOperatorList.addDependencies(operatorList.dependencies);
          }).catch(function (reason) {
            (0, _util.warn)('Type3 font resource "' + key + '" is not available.');
            var operatorList = new _operator_list.OperatorList();
            charProcOperatorList[key] = operatorList.getIR();
          });
        });
      };

      for (var i = 0, n = charProcKeys.length; i < n; ++i) {
        _loop2();
      }
      this.type3Loaded = loadCharProcsPromise.then(function () {
        translatedFont.charProcOperatorList = charProcOperatorList;
      });
      return this.type3Loaded;
    }
  };
  return TranslatedFont;
}();
var StateManager = function StateManagerClosure() {
  function StateManager(initialState) {
    this.state = initialState;
    this.stateStack = [];
  }
  StateManager.prototype = {
    save: function save() {
      var old = this.state;
      this.stateStack.push(this.state);
      this.state = old.clone();
    },
    restore: function restore() {
      var prev = this.stateStack.pop();
      if (prev) {
        this.state = prev;
      }
    },
    transform: function transform(args) {
      this.state.ctm = _util.Util.transform(this.state.ctm, args);
    }
  };
  return StateManager;
}();
var TextState = function TextStateClosure() {
  function TextState() {
    this.ctm = new Float32Array(_util.IDENTITY_MATRIX);
    this.fontName = null;
    this.fontSize = 0;
    this.font = null;
    this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
    this.textMatrix = _util.IDENTITY_MATRIX.slice();
    this.textLineMatrix = _util.IDENTITY_MATRIX.slice();
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.leading = 0;
    this.textHScale = 1;
    this.textRise = 0;
  }
  TextState.prototype = {
    setTextMatrix: function TextState_setTextMatrix(a, b, c, d, e, f) {
      var m = this.textMatrix;
      m[0] = a;
      m[1] = b;
      m[2] = c;
      m[3] = d;
      m[4] = e;
      m[5] = f;
    },
    setTextLineMatrix: function TextState_setTextMatrix(a, b, c, d, e, f) {
      var m = this.textLineMatrix;
      m[0] = a;
      m[1] = b;
      m[2] = c;
      m[3] = d;
      m[4] = e;
      m[5] = f;
    },
    translateTextMatrix: function TextState_translateTextMatrix(x, y) {
      var m = this.textMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];
    },
    translateTextLineMatrix: function TextState_translateTextMatrix(x, y) {
      var m = this.textLineMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];
    },
    calcTextLineMatrixAdvance: function TextState_calcTextLineMatrixAdvance(a, b, c, d, e, f) {
      var font = this.font;
      if (!font) {
        return null;
      }
      var m = this.textLineMatrix;
      if (!(a === m[0] && b === m[1] && c === m[2] && d === m[3])) {
        return null;
      }
      var txDiff = e - m[4],
          tyDiff = f - m[5];
      if (font.vertical && txDiff !== 0 || !font.vertical && tyDiff !== 0) {
        return null;
      }
      var tx,
          ty,
          denominator = a * d - b * c;
      if (font.vertical) {
        tx = -tyDiff * c / denominator;
        ty = tyDiff * a / denominator;
      } else {
        tx = txDiff * d / denominator;
        ty = -txDiff * b / denominator;
      }
      return {
        width: tx,
        height: ty,
        value: font.vertical ? ty : tx
      };
    },
    calcRenderMatrix: function TextState_calcRendeMatrix(ctm) {
      var tsm = [this.fontSize * this.textHScale, 0, 0, this.fontSize, 0, this.textRise];
      return _util.Util.transform(ctm, _util.Util.transform(this.textMatrix, tsm));
    },
    carriageReturn: function TextState_carriageReturn() {
      this.translateTextLineMatrix(0, -this.leading);
      this.textMatrix = this.textLineMatrix.slice();
    },
    clone: function TextState_clone() {
      var clone = Object.create(this);
      clone.textMatrix = this.textMatrix.slice();
      clone.textLineMatrix = this.textLineMatrix.slice();
      clone.fontMatrix = this.fontMatrix.slice();
      return clone;
    }
  };
  return TextState;
}();
var EvalState = function EvalStateClosure() {
  function EvalState() {
    this.ctm = new Float32Array(_util.IDENTITY_MATRIX);
    this.font = null;
    this.textRenderingMode = _util.TextRenderingMode.FILL;
    this.fillColorSpace = _colorspace.ColorSpace.singletons.gray;
    this.strokeColorSpace = _colorspace.ColorSpace.singletons.gray;
  }
  EvalState.prototype = {
    clone: function CanvasExtraState_clone() {
      return Object.create(this);
    }
  };
  return EvalState;
}();
var EvaluatorPreprocessor = function EvaluatorPreprocessorClosure() {
  var getOPMap = (0, _util.getLookupTableFactory)(function (t) {
    t['w'] = {
      id: _util.OPS.setLineWidth,
      numArgs: 1,
      variableArgs: false
    };
    t['J'] = {
      id: _util.OPS.setLineCap,
      numArgs: 1,
      variableArgs: false
    };
    t['j'] = {
      id: _util.OPS.setLineJoin,
      numArgs: 1,
      variableArgs: false
    };
    t['M'] = {
      id: _util.OPS.setMiterLimit,
      numArgs: 1,
      variableArgs: false
    };
    t['d'] = {
      id: _util.OPS.setDash,
      numArgs: 2,
      variableArgs: false
    };
    t['ri'] = {
      id: _util.OPS.setRenderingIntent,
      numArgs: 1,
      variableArgs: false
    };
    t['i'] = {
      id: _util.OPS.setFlatness,
      numArgs: 1,
      variableArgs: false
    };
    t['gs'] = {
      id: _util.OPS.setGState,
      numArgs: 1,
      variableArgs: false
    };
    t['q'] = {
      id: _util.OPS.save,
      numArgs: 0,
      variableArgs: false
    };
    t['Q'] = {
      id: _util.OPS.restore,
      numArgs: 0,
      variableArgs: false
    };
    t['cm'] = {
      id: _util.OPS.transform,
      numArgs: 6,
      variableArgs: false
    };
    t['m'] = {
      id: _util.OPS.moveTo,
      numArgs: 2,
      variableArgs: false
    };
    t['l'] = {
      id: _util.OPS.lineTo,
      numArgs: 2,
      variableArgs: false
    };
    t['c'] = {
      id: _util.OPS.curveTo,
      numArgs: 6,
      variableArgs: false
    };
    t['v'] = {
      id: _util.OPS.curveTo2,
      numArgs: 4,
      variableArgs: false
    };
    t['y'] = {
      id: _util.OPS.curveTo3,
      numArgs: 4,
      variableArgs: false
    };
    t['h'] = {
      id: _util.OPS.closePath,
      numArgs: 0,
      variableArgs: false
    };
    t['re'] = {
      id: _util.OPS.rectangle,
      numArgs: 4,
      variableArgs: false
    };
    t['S'] = {
      id: _util.OPS.stroke,
      numArgs: 0,
      variableArgs: false
    };
    t['s'] = {
      id: _util.OPS.closeStroke,
      numArgs: 0,
      variableArgs: false
    };
    t['f'] = {
      id: _util.OPS.fill,
      numArgs: 0,
      variableArgs: false
    };
    t['F'] = {
      id: _util.OPS.fill,
      numArgs: 0,
      variableArgs: false
    };
    t['f*'] = {
      id: _util.OPS.eoFill,
      numArgs: 0,
      variableArgs: false
    };
    t['B'] = {
      id: _util.OPS.fillStroke,
      numArgs: 0,
      variableArgs: false
    };
    t['B*'] = {
      id: _util.OPS.eoFillStroke,
      numArgs: 0,
      variableArgs: false
    };
    t['b'] = {
      id: _util.OPS.closeFillStroke,
      numArgs: 0,
      variableArgs: false
    };
    t['b*'] = {
      id: _util.OPS.closeEOFillStroke,
      numArgs: 0,
      variableArgs: false
    };
    t['n'] = {
      id: _util.OPS.endPath,
      numArgs: 0,
      variableArgs: false
    };
    t['W'] = {
      id: _util.OPS.clip,
      numArgs: 0,
      variableArgs: false
    };
    t['W*'] = {
      id: _util.OPS.eoClip,
      numArgs: 0,
      variableArgs: false
    };
    t['BT'] = {
      id: _util.OPS.beginText,
      numArgs: 0,
      variableArgs: false
    };
    t['ET'] = {
      id: _util.OPS.endText,
      numArgs: 0,
      variableArgs: false
    };
    t['Tc'] = {
      id: _util.OPS.setCharSpacing,
      numArgs: 1,
      variableArgs: false
    };
    t['Tw'] = {
      id: _util.OPS.setWordSpacing,
      numArgs: 1,
      variableArgs: false
    };
    t['Tz'] = {
      id: _util.OPS.setHScale,
      numArgs: 1,
      variableArgs: false
    };
    t['TL'] = {
      id: _util.OPS.setLeading,
      numArgs: 1,
      variableArgs: false
    };
    t['Tf'] = {
      id: _util.OPS.setFont,
      numArgs: 2,
      variableArgs: false
    };
    t['Tr'] = {
      id: _util.OPS.setTextRenderingMode,
      numArgs: 1,
      variableArgs: false
    };
    t['Ts'] = {
      id: _util.OPS.setTextRise,
      numArgs: 1,
      variableArgs: false
    };
    t['Td'] = {
      id: _util.OPS.moveText,
      numArgs: 2,
      variableArgs: false
    };
    t['TD'] = {
      id: _util.OPS.setLeadingMoveText,
      numArgs: 2,
      variableArgs: false
    };
    t['Tm'] = {
      id: _util.OPS.setTextMatrix,
      numArgs: 6,
      variableArgs: false
    };
    t['T*'] = {
      id: _util.OPS.nextLine,
      numArgs: 0,
      variableArgs: false
    };
    t['Tj'] = {
      id: _util.OPS.showText,
      numArgs: 1,
      variableArgs: false
    };
    t['TJ'] = {
      id: _util.OPS.showSpacedText,
      numArgs: 1,
      variableArgs: false
    };
    t['\''] = {
      id: _util.OPS.nextLineShowText,
      numArgs: 1,
      variableArgs: false
    };
    t['"'] = {
      id: _util.OPS.nextLineSetSpacingShowText,
      numArgs: 3,
      variableArgs: false
    };
    t['d0'] = {
      id: _util.OPS.setCharWidth,
      numArgs: 2,
      variableArgs: false
    };
    t['d1'] = {
      id: _util.OPS.setCharWidthAndBounds,
      numArgs: 6,
      variableArgs: false
    };
    t['CS'] = {
      id: _util.OPS.setStrokeColorSpace,
      numArgs: 1,
      variableArgs: false
    };
    t['cs'] = {
      id: _util.OPS.setFillColorSpace,
      numArgs: 1,
      variableArgs: false
    };
    t['SC'] = {
      id: _util.OPS.setStrokeColor,
      numArgs: 4,
      variableArgs: true
    };
    t['SCN'] = {
      id: _util.OPS.setStrokeColorN,
      numArgs: 33,
      variableArgs: true
    };
    t['sc'] = {
      id: _util.OPS.setFillColor,
      numArgs: 4,
      variableArgs: true
    };
    t['scn'] = {
      id: _util.OPS.setFillColorN,
      numArgs: 33,
      variableArgs: true
    };
    t['G'] = {
      id: _util.OPS.setStrokeGray,
      numArgs: 1,
      variableArgs: false
    };
    t['g'] = {
      id: _util.OPS.setFillGray,
      numArgs: 1,
      variableArgs: false
    };
    t['RG'] = {
      id: _util.OPS.setStrokeRGBColor,
      numArgs: 3,
      variableArgs: false
    };
    t['rg'] = {
      id: _util.OPS.setFillRGBColor,
      numArgs: 3,
      variableArgs: false
    };
    t['K'] = {
      id: _util.OPS.setStrokeCMYKColor,
      numArgs: 4,
      variableArgs: false
    };
    t['k'] = {
      id: _util.OPS.setFillCMYKColor,
      numArgs: 4,
      variableArgs: false
    };
    t['sh'] = {
      id: _util.OPS.shadingFill,
      numArgs: 1,
      variableArgs: false
    };
    t['BI'] = {
      id: _util.OPS.beginInlineImage,
      numArgs: 0,
      variableArgs: false
    };
    t['ID'] = {
      id: _util.OPS.beginImageData,
      numArgs: 0,
      variableArgs: false
    };
    t['EI'] = {
      id: _util.OPS.endInlineImage,
      numArgs: 1,
      variableArgs: false
    };
    t['Do'] = {
      id: _util.OPS.paintXObject,
      numArgs: 1,
      variableArgs: false
    };
    t['MP'] = {
      id: _util.OPS.markPoint,
      numArgs: 1,
      variableArgs: false
    };
    t['DP'] = {
      id: _util.OPS.markPointProps,
      numArgs: 2,
      variableArgs: false
    };
    t['BMC'] = {
      id: _util.OPS.beginMarkedContent,
      numArgs: 1,
      variableArgs: false
    };
    t['BDC'] = {
      id: _util.OPS.beginMarkedContentProps,
      numArgs: 2,
      variableArgs: false
    };
    t['EMC'] = {
      id: _util.OPS.endMarkedContent,
      numArgs: 0,
      variableArgs: false
    };
    t['BX'] = {
      id: _util.OPS.beginCompat,
      numArgs: 0,
      variableArgs: false
    };
    t['EX'] = {
      id: _util.OPS.endCompat,
      numArgs: 0,
      variableArgs: false
    };
    t['BM'] = null;
    t['BD'] = null;
    t['true'] = null;
    t['fa'] = null;
    t['fal'] = null;
    t['fals'] = null;
    t['false'] = null;
    t['nu'] = null;
    t['nul'] = null;
    t['null'] = null;
  });
  var MAX_INVALID_PATH_OPS = 20;
  function EvaluatorPreprocessor(stream, xref, stateManager) {
    this.opMap = getOPMap();
    this.parser = new _parser.Parser(new _parser.Lexer(stream, this.opMap), false, xref);
    this.stateManager = stateManager;
    this.nonProcessedArgs = [];
    this._numInvalidPathOPS = 0;
  }
  EvaluatorPreprocessor.prototype = {
    get savedStatesDepth() {
      return this.stateManager.stateStack.length;
    },
    read: function EvaluatorPreprocessor_read(operation) {
      var args = operation.args;
      while (true) {
        var obj = this.parser.getObj();
        if ((0, _primitives.isCmd)(obj)) {
          var cmd = obj.cmd;
          var opSpec = this.opMap[cmd];
          if (!opSpec) {
            (0, _util.warn)('Unknown command "' + cmd + '".');
            continue;
          }
          var fn = opSpec.id;
          var numArgs = opSpec.numArgs;
          var argsLength = args !== null ? args.length : 0;
          if (!opSpec.variableArgs) {
            if (argsLength !== numArgs) {
              var nonProcessedArgs = this.nonProcessedArgs;
              while (argsLength > numArgs) {
                nonProcessedArgs.push(args.shift());
                argsLength--;
              }
              while (argsLength < numArgs && nonProcessedArgs.length !== 0) {
                if (args === null) {
                  args = [];
                }
                args.unshift(nonProcessedArgs.pop());
                argsLength++;
              }
            }
            if (argsLength < numArgs) {
              var partialMsg = 'command ' + cmd + ': expected ' + numArgs + ' args, ' + ('but received ' + argsLength + ' args.');
              if (fn >= _util.OPS.moveTo && fn <= _util.OPS.endPath && ++this._numInvalidPathOPS > MAX_INVALID_PATH_OPS) {
                throw new _util.FormatError('Invalid ' + partialMsg);
              }
              (0, _util.warn)('Skipping ' + partialMsg);
              if (args !== null) {
                args.length = 0;
              }
              continue;
            }
          } else if (argsLength > numArgs) {
            (0, _util.info)('Command ' + cmd + ': expected [0, ' + numArgs + '] args, ' + ('but received ' + argsLength + ' args.'));
          }
          this.preprocessCommand(fn, args);
          operation.fn = fn;
          operation.args = args;
          return true;
        }
        if ((0, _primitives.isEOF)(obj)) {
          return false;
        }
        if (obj !== null) {
          if (args === null) {
            args = [];
          }
          args.push(obj);
          if (args.length > 33) {
            throw new _util.FormatError('Too many arguments');
          }
        }
      }
    },
    preprocessCommand: function EvaluatorPreprocessor_preprocessCommand(fn, args) {
      switch (fn | 0) {
        case _util.OPS.save:
          this.stateManager.save();
          break;
        case _util.OPS.restore:
          this.stateManager.restore();
          break;
        case _util.OPS.transform:
          this.stateManager.transform(args);
          break;
      }
    }
  };
  return EvaluatorPreprocessor;
}();
exports.PartialEvaluator = PartialEvaluator;

/***/ }),
/* 140 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CMapFactory = exports.IdentityCMap = exports.CMap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __w_pdfjs_require__(2);

var _primitives = __w_pdfjs_require__(123);

var _parser = __w_pdfjs_require__(124);

var _stream = __w_pdfjs_require__(125);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BUILT_IN_CMAPS = ['Adobe-GB1-UCS2', 'Adobe-CNS1-UCS2', 'Adobe-Japan1-UCS2', 'Adobe-Korea1-UCS2', '78-EUC-H', '78-EUC-V', '78-H', '78-RKSJ-H', '78-RKSJ-V', '78-V', '78ms-RKSJ-H', '78ms-RKSJ-V', '83pv-RKSJ-H', '90ms-RKSJ-H', '90ms-RKSJ-V', '90msp-RKSJ-H', '90msp-RKSJ-V', '90pv-RKSJ-H', '90pv-RKSJ-V', 'Add-H', 'Add-RKSJ-H', 'Add-RKSJ-V', 'Add-V', 'Adobe-CNS1-0', 'Adobe-CNS1-1', 'Adobe-CNS1-2', 'Adobe-CNS1-3', 'Adobe-CNS1-4', 'Adobe-CNS1-5', 'Adobe-CNS1-6', 'Adobe-GB1-0', 'Adobe-GB1-1', 'Adobe-GB1-2', 'Adobe-GB1-3', 'Adobe-GB1-4', 'Adobe-GB1-5', 'Adobe-Japan1-0', 'Adobe-Japan1-1', 'Adobe-Japan1-2', 'Adobe-Japan1-3', 'Adobe-Japan1-4', 'Adobe-Japan1-5', 'Adobe-Japan1-6', 'Adobe-Korea1-0', 'Adobe-Korea1-1', 'Adobe-Korea1-2', 'B5-H', 'B5-V', 'B5pc-H', 'B5pc-V', 'CNS-EUC-H', 'CNS-EUC-V', 'CNS1-H', 'CNS1-V', 'CNS2-H', 'CNS2-V', 'ETHK-B5-H', 'ETHK-B5-V', 'ETen-B5-H', 'ETen-B5-V', 'ETenms-B5-H', 'ETenms-B5-V', 'EUC-H', 'EUC-V', 'Ext-H', 'Ext-RKSJ-H', 'Ext-RKSJ-V', 'Ext-V', 'GB-EUC-H', 'GB-EUC-V', 'GB-H', 'GB-V', 'GBK-EUC-H', 'GBK-EUC-V', 'GBK2K-H', 'GBK2K-V', 'GBKp-EUC-H', 'GBKp-EUC-V', 'GBT-EUC-H', 'GBT-EUC-V', 'GBT-H', 'GBT-V', 'GBTpc-EUC-H', 'GBTpc-EUC-V', 'GBpc-EUC-H', 'GBpc-EUC-V', 'H', 'HKdla-B5-H', 'HKdla-B5-V', 'HKdlb-B5-H', 'HKdlb-B5-V', 'HKgccs-B5-H', 'HKgccs-B5-V', 'HKm314-B5-H', 'HKm314-B5-V', 'HKm471-B5-H', 'HKm471-B5-V', 'HKscs-B5-H', 'HKscs-B5-V', 'Hankaku', 'Hiragana', 'KSC-EUC-H', 'KSC-EUC-V', 'KSC-H', 'KSC-Johab-H', 'KSC-Johab-V', 'KSC-V', 'KSCms-UHC-H', 'KSCms-UHC-HW-H', 'KSCms-UHC-HW-V', 'KSCms-UHC-V', 'KSCpc-EUC-H', 'KSCpc-EUC-V', 'Katakana', 'NWP-H', 'NWP-V', 'RKSJ-H', 'RKSJ-V', 'Roman', 'UniCNS-UCS2-H', 'UniCNS-UCS2-V', 'UniCNS-UTF16-H', 'UniCNS-UTF16-V', 'UniCNS-UTF32-H', 'UniCNS-UTF32-V', 'UniCNS-UTF8-H', 'UniCNS-UTF8-V', 'UniGB-UCS2-H', 'UniGB-UCS2-V', 'UniGB-UTF16-H', 'UniGB-UTF16-V', 'UniGB-UTF32-H', 'UniGB-UTF32-V', 'UniGB-UTF8-H', 'UniGB-UTF8-V', 'UniJIS-UCS2-H', 'UniJIS-UCS2-HW-H', 'UniJIS-UCS2-HW-V', 'UniJIS-UCS2-V', 'UniJIS-UTF16-H', 'UniJIS-UTF16-V', 'UniJIS-UTF32-H', 'UniJIS-UTF32-V', 'UniJIS-UTF8-H', 'UniJIS-UTF8-V', 'UniJIS2004-UTF16-H', 'UniJIS2004-UTF16-V', 'UniJIS2004-UTF32-H', 'UniJIS2004-UTF32-V', 'UniJIS2004-UTF8-H', 'UniJIS2004-UTF8-V', 'UniJISPro-UCS2-HW-V', 'UniJISPro-UCS2-V', 'UniJISPro-UTF8-V', 'UniJISX0213-UTF32-H', 'UniJISX0213-UTF32-V', 'UniJISX02132004-UTF32-H', 'UniJISX02132004-UTF32-V', 'UniKS-UCS2-H', 'UniKS-UCS2-V', 'UniKS-UTF16-H', 'UniKS-UTF16-V', 'UniKS-UTF32-H', 'UniKS-UTF32-V', 'UniKS-UTF8-H', 'UniKS-UTF8-V', 'V', 'WP-Symbol'];

var CMap = function () {
  function CMap() {
    var builtInCMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, CMap);

    this.codespaceRanges = [[], [], [], []];
    this.numCodespaceRanges = 0;
    this._map = [];
    this.name = '';
    this.vertical = false;
    this.useCMap = null;
    this.builtInCMap = builtInCMap;
  }

  _createClass(CMap, [{
    key: 'addCodespaceRange',
    value: function addCodespaceRange(n, low, high) {
      this.codespaceRanges[n - 1].push(low, high);
      this.numCodespaceRanges++;
    }
  }, {
    key: 'mapCidRange',
    value: function mapCidRange(low, high, dstLow) {
      while (low <= high) {
        this._map[low++] = dstLow++;
      }
    }
  }, {
    key: 'mapBfRange',
    value: function mapBfRange(low, high, dstLow) {
      var lastByte = dstLow.length - 1;
      while (low <= high) {
        this._map[low++] = dstLow;
        dstLow = dstLow.substr(0, lastByte) + String.fromCharCode(dstLow.charCodeAt(lastByte) + 1);
      }
    }
  }, {
    key: 'mapBfRangeToArray',
    value: function mapBfRangeToArray(low, high, array) {
      var i = 0,
          ii = array.length;
      while (low <= high && i < ii) {
        this._map[low] = array[i++];
        ++low;
      }
    }
  }, {
    key: 'mapOne',
    value: function mapOne(src, dst) {
      this._map[src] = dst;
    }
  }, {
    key: 'lookup',
    value: function lookup(code) {
      return this._map[code];
    }
  }, {
    key: 'contains',
    value: function contains(code) {
      return this._map[code] !== undefined;
    }
  }, {
    key: 'forEach',
    value: function forEach(callback) {
      var map = this._map;
      var length = map.length;
      if (length <= 0x10000) {
        for (var i = 0; i < length; i++) {
          if (map[i] !== undefined) {
            callback(i, map[i]);
          }
        }
      } else {
        for (var _i in map) {
          callback(_i, map[_i]);
        }
      }
    }
  }, {
    key: 'charCodeOf',
    value: function charCodeOf(value) {
      var map = this._map;
      if (map.length <= 0x10000) {
        return map.indexOf(value);
      }
      for (var charCode in map) {
        if (map[charCode] === value) {
          return charCode | 0;
        }
      }
      return -1;
    }
  }, {
    key: 'getMap',
    value: function getMap() {
      return this._map;
    }
  }, {
    key: 'readCharCode',
    value: function readCharCode(str, offset, out) {
      var c = 0;
      var codespaceRanges = this.codespaceRanges;
      for (var n = 0, nn = codespaceRanges.length; n < nn; n++) {
        c = (c << 8 | str.charCodeAt(offset + n)) >>> 0;
        var codespaceRange = codespaceRanges[n];
        for (var k = 0, kk = codespaceRange.length; k < kk;) {
          var low = codespaceRange[k++];
          var high = codespaceRange[k++];
          if (c >= low && c <= high) {
            out.charcode = c;
            out.length = n + 1;
            return;
          }
        }
      }
      out.charcode = 0;
      out.length = 1;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._map.length;
    }
  }, {
    key: 'isIdentityCMap',
    get: function get() {
      if (!(this.name === 'Identity-H' || this.name === 'Identity-V')) {
        return false;
      }
      if (this._map.length !== 0x10000) {
        return false;
      }
      for (var i = 0; i < 0x10000; i++) {
        if (this._map[i] !== i) {
          return false;
        }
      }
      return true;
    }
  }]);

  return CMap;
}();

var IdentityCMap = function (_CMap) {
  _inherits(IdentityCMap, _CMap);

  function IdentityCMap(vertical, n) {
    _classCallCheck(this, IdentityCMap);

    var _this = _possibleConstructorReturn(this, (IdentityCMap.__proto__ || Object.getPrototypeOf(IdentityCMap)).call(this));

    _this.vertical = vertical;
    _this.addCodespaceRange(n, 0, 0xffff);
    return _this;
  }

  _createClass(IdentityCMap, [{
    key: 'mapCidRange',
    value: function mapCidRange(low, high, dstLow) {
      (0, _util.unreachable)('should not call mapCidRange');
    }
  }, {
    key: 'mapBfRange',
    value: function mapBfRange(low, high, dstLow) {
      (0, _util.unreachable)('should not call mapBfRange');
    }
  }, {
    key: 'mapBfRangeToArray',
    value: function mapBfRangeToArray(low, high, array) {
      (0, _util.unreachable)('should not call mapBfRangeToArray');
    }
  }, {
    key: 'mapOne',
    value: function mapOne(src, dst) {
      (0, _util.unreachable)('should not call mapCidOne');
    }
  }, {
    key: 'lookup',
    value: function lookup(code) {
      return Number.isInteger(code) && code <= 0xffff ? code : undefined;
    }
  }, {
    key: 'contains',
    value: function contains(code) {
      return Number.isInteger(code) && code <= 0xffff;
    }
  }, {
    key: 'forEach',
    value: function forEach(callback) {
      for (var i = 0; i <= 0xffff; i++) {
        callback(i, i);
      }
    }
  }, {
    key: 'charCodeOf',
    value: function charCodeOf(value) {
      return Number.isInteger(value) && value <= 0xffff ? value : -1;
    }
  }, {
    key: 'getMap',
    value: function getMap() {
      var map = new Array(0x10000);
      for (var i = 0; i <= 0xffff; i++) {
        map[i] = i;
      }
      return map;
    }
  }, {
    key: 'length',
    get: function get() {
      return 0x10000;
    }
  }, {
    key: 'isIdentityCMap',
    get: function get() {
      (0, _util.unreachable)('should not access .isIdentityCMap');
    }
  }]);

  return IdentityCMap;
}(CMap);

var BinaryCMapReader = function BinaryCMapReaderClosure() {
  function hexToInt(a, size) {
    var n = 0;
    for (var i = 0; i <= size; i++) {
      n = n << 8 | a[i];
    }
    return n >>> 0;
  }
  function hexToStr(a, size) {
    if (size === 1) {
      return String.fromCharCode(a[0], a[1]);
    }
    if (size === 3) {
      return String.fromCharCode(a[0], a[1], a[2], a[3]);
    }
    return String.fromCharCode.apply(null, a.subarray(0, size + 1));
  }
  function addHex(a, b, size) {
    var c = 0;
    for (var i = size; i >= 0; i--) {
      c += a[i] + b[i];
      a[i] = c & 255;
      c >>= 8;
    }
  }
  function incHex(a, size) {
    var c = 1;
    for (var i = size; i >= 0 && c > 0; i--) {
      c += a[i];
      a[i] = c & 255;
      c >>= 8;
    }
  }
  var MAX_NUM_SIZE = 16;
  var MAX_ENCODED_NUM_SIZE = 19;
  function BinaryCMapStream(data) {
    this.buffer = data;
    this.pos = 0;
    this.end = data.length;
    this.tmpBuf = new Uint8Array(MAX_ENCODED_NUM_SIZE);
  }
  BinaryCMapStream.prototype = {
    readByte: function readByte() {
      if (this.pos >= this.end) {
        return -1;
      }
      return this.buffer[this.pos++];
    },
    readNumber: function readNumber() {
      var n = 0;
      var last;
      do {
        var b = this.readByte();
        if (b < 0) {
          throw new _util.FormatError('unexpected EOF in bcmap');
        }
        last = !(b & 0x80);
        n = n << 7 | b & 0x7F;
      } while (!last);
      return n;
    },
    readSigned: function readSigned() {
      var n = this.readNumber();
      return n & 1 ? ~(n >>> 1) : n >>> 1;
    },
    readHex: function readHex(num, size) {
      num.set(this.buffer.subarray(this.pos, this.pos + size + 1));
      this.pos += size + 1;
    },
    readHexNumber: function readHexNumber(num, size) {
      var last;
      var stack = this.tmpBuf,
          sp = 0;
      do {
        var b = this.readByte();
        if (b < 0) {
          throw new _util.FormatError('unexpected EOF in bcmap');
        }
        last = !(b & 0x80);
        stack[sp++] = b & 0x7F;
      } while (!last);
      var i = size,
          buffer = 0,
          bufferSize = 0;
      while (i >= 0) {
        while (bufferSize < 8 && stack.length > 0) {
          buffer = stack[--sp] << bufferSize | buffer;
          bufferSize += 7;
        }
        num[i] = buffer & 255;
        i--;
        buffer >>= 8;
        bufferSize -= 8;
      }
    },
    readHexSigned: function readHexSigned(num, size) {
      this.readHexNumber(num, size);
      var sign = num[size] & 1 ? 255 : 0;
      var c = 0;
      for (var i = 0; i <= size; i++) {
        c = (c & 1) << 8 | num[i];
        num[i] = c >> 1 ^ sign;
      }
    },
    readString: function readString() {
      var len = this.readNumber();
      var s = '';
      for (var i = 0; i < len; i++) {
        s += String.fromCharCode(this.readNumber());
      }
      return s;
    }
  };
  function processBinaryCMap(data, cMap, extend) {
    return new Promise(function (resolve, reject) {
      var stream = new BinaryCMapStream(data);
      var header = stream.readByte();
      cMap.vertical = !!(header & 1);
      var useCMap = null;
      var start = new Uint8Array(MAX_NUM_SIZE);
      var end = new Uint8Array(MAX_NUM_SIZE);
      var char = new Uint8Array(MAX_NUM_SIZE);
      var charCode = new Uint8Array(MAX_NUM_SIZE);
      var tmp = new Uint8Array(MAX_NUM_SIZE);
      var code;
      var b;
      while ((b = stream.readByte()) >= 0) {
        var type = b >> 5;
        if (type === 7) {
          switch (b & 0x1F) {
            case 0:
              stream.readString();
              break;
            case 1:
              useCMap = stream.readString();
              break;
          }
          continue;
        }
        var sequence = !!(b & 0x10);
        var dataSize = b & 15;
        if (dataSize + 1 > MAX_NUM_SIZE) {
          throw new Error('processBinaryCMap: Invalid dataSize.');
        }
        var ucs2DataSize = 1;
        var subitemsCount = stream.readNumber();
        var i;
        switch (type) {
          case 0:
            stream.readHex(start, dataSize);
            stream.readHexNumber(end, dataSize);
            addHex(end, start, dataSize);
            cMap.addCodespaceRange(dataSize + 1, hexToInt(start, dataSize), hexToInt(end, dataSize));
            for (i = 1; i < subitemsCount; i++) {
              incHex(end, dataSize);
              stream.readHexNumber(start, dataSize);
              addHex(start, end, dataSize);
              stream.readHexNumber(end, dataSize);
              addHex(end, start, dataSize);
              cMap.addCodespaceRange(dataSize + 1, hexToInt(start, dataSize), hexToInt(end, dataSize));
            }
            break;
          case 1:
            stream.readHex(start, dataSize);
            stream.readHexNumber(end, dataSize);
            addHex(end, start, dataSize);
            stream.readNumber();
            for (i = 1; i < subitemsCount; i++) {
              incHex(end, dataSize);
              stream.readHexNumber(start, dataSize);
              addHex(start, end, dataSize);
              stream.readHexNumber(end, dataSize);
              addHex(end, start, dataSize);
              stream.readNumber();
            }
            break;
          case 2:
            stream.readHex(char, dataSize);
            code = stream.readNumber();
            cMap.mapOne(hexToInt(char, dataSize), code);
            for (i = 1; i < subitemsCount; i++) {
              incHex(char, dataSize);
              if (!sequence) {
                stream.readHexNumber(tmp, dataSize);
                addHex(char, tmp, dataSize);
              }
              code = stream.readSigned() + (code + 1);
              cMap.mapOne(hexToInt(char, dataSize), code);
            }
            break;
          case 3:
            stream.readHex(start, dataSize);
            stream.readHexNumber(end, dataSize);
            addHex(end, start, dataSize);
            code = stream.readNumber();
            cMap.mapCidRange(hexToInt(start, dataSize), hexToInt(end, dataSize), code);
            for (i = 1; i < subitemsCount; i++) {
              incHex(end, dataSize);
              if (!sequence) {
                stream.readHexNumber(start, dataSize);
                addHex(start, end, dataSize);
              } else {
                start.set(end);
              }
              stream.readHexNumber(end, dataSize);
              addHex(end, start, dataSize);
              code = stream.readNumber();
              cMap.mapCidRange(hexToInt(start, dataSize), hexToInt(end, dataSize), code);
            }
            break;
          case 4:
            stream.readHex(char, ucs2DataSize);
            stream.readHex(charCode, dataSize);
            cMap.mapOne(hexToInt(char, ucs2DataSize), hexToStr(charCode, dataSize));
            for (i = 1; i < subitemsCount; i++) {
              incHex(char, ucs2DataSize);
              if (!sequence) {
                stream.readHexNumber(tmp, ucs2DataSize);
                addHex(char, tmp, ucs2DataSize);
              }
              incHex(charCode, dataSize);
              stream.readHexSigned(tmp, dataSize);
              addHex(charCode, tmp, dataSize);
              cMap.mapOne(hexToInt(char, ucs2DataSize), hexToStr(charCode, dataSize));
            }
            break;
          case 5:
            stream.readHex(start, ucs2DataSize);
            stream.readHexNumber(end, ucs2DataSize);
            addHex(end, start, ucs2DataSize);
            stream.readHex(charCode, dataSize);
            cMap.mapBfRange(hexToInt(start, ucs2DataSize), hexToInt(end, ucs2DataSize), hexToStr(charCode, dataSize));
            for (i = 1; i < subitemsCount; i++) {
              incHex(end, ucs2DataSize);
              if (!sequence) {
                stream.readHexNumber(start, ucs2DataSize);
                addHex(start, end, ucs2DataSize);
              } else {
                start.set(end);
              }
              stream.readHexNumber(end, ucs2DataSize);
              addHex(end, start, ucs2DataSize);
              stream.readHex(charCode, dataSize);
              cMap.mapBfRange(hexToInt(start, ucs2DataSize), hexToInt(end, ucs2DataSize), hexToStr(charCode, dataSize));
            }
            break;
          default:
            reject(new Error('processBinaryCMap: Unknown type: ' + type));
            return;
        }
      }
      if (useCMap) {
        resolve(extend(useCMap));
        return;
      }
      resolve(cMap);
    });
  }
  function BinaryCMapReader() {}
  BinaryCMapReader.prototype = { process: processBinaryCMap };
  return BinaryCMapReader;
}();
var CMapFactory = function CMapFactoryClosure() {
  function strToInt(str) {
    var a = 0;
    for (var i = 0; i < str.length; i++) {
      a = a << 8 | str.charCodeAt(i);
    }
    return a >>> 0;
  }
  function expectString(obj) {
    if (!(0, _util.isString)(obj)) {
      throw new _util.FormatError('Malformed CMap: expected string.');
    }
  }
  function expectInt(obj) {
    if (!Number.isInteger(obj)) {
      throw new _util.FormatError('Malformed CMap: expected int.');
    }
  }
  function parseBfChar(cMap, lexer) {
    while (true) {
      var obj = lexer.getObj();
      if ((0, _primitives.isEOF)(obj)) {
        break;
      }
      if ((0, _primitives.isCmd)(obj, 'endbfchar')) {
        return;
      }
      expectString(obj);
      var src = strToInt(obj);
      obj = lexer.getObj();
      expectString(obj);
      var dst = obj;
      cMap.mapOne(src, dst);
    }
  }
  function parseBfRange(cMap, lexer) {
    while (true) {
      var obj = lexer.getObj();
      if ((0, _primitives.isEOF)(obj)) {
        break;
      }
      if ((0, _primitives.isCmd)(obj, 'endbfrange')) {
        return;
      }
      expectString(obj);
      var low = strToInt(obj);
      obj = lexer.getObj();
      expectString(obj);
      var high = strToInt(obj);
      obj = lexer.getObj();
      if (Number.isInteger(obj) || (0, _util.isString)(obj)) {
        var dstLow = Number.isInteger(obj) ? String.fromCharCode(obj) : obj;
        cMap.mapBfRange(low, high, dstLow);
      } else if ((0, _primitives.isCmd)(obj, '[')) {
        obj = lexer.getObj();
        var array = [];
        while (!(0, _primitives.isCmd)(obj, ']') && !(0, _primitives.isEOF)(obj)) {
          array.push(obj);
          obj = lexer.getObj();
        }
        cMap.mapBfRangeToArray(low, high, array);
      } else {
        break;
      }
    }
    throw new _util.FormatError('Invalid bf range.');
  }
  function parseCidChar(cMap, lexer) {
    while (true) {
      var obj = lexer.getObj();
      if ((0, _primitives.isEOF)(obj)) {
        break;
      }
      if ((0, _primitives.isCmd)(obj, 'endcidchar')) {
        return;
      }
      expectString(obj);
      var src = strToInt(obj);
      obj = lexer.getObj();
      expectInt(obj);
      var dst = obj;
      cMap.mapOne(src, dst);
    }
  }
  function parseCidRange(cMap, lexer) {
    while (true) {
      var obj = lexer.getObj();
      if ((0, _primitives.isEOF)(obj)) {
        break;
      }
      if ((0, _primitives.isCmd)(obj, 'endcidrange')) {
        return;
      }
      expectString(obj);
      var low = strToInt(obj);
      obj = lexer.getObj();
      expectString(obj);
      var high = strToInt(obj);
      obj = lexer.getObj();
      expectInt(obj);
      var dstLow = obj;
      cMap.mapCidRange(low, high, dstLow);
    }
  }
  function parseCodespaceRange(cMap, lexer) {
    while (true) {
      var obj = lexer.getObj();
      if ((0, _primitives.isEOF)(obj)) {
        break;
      }
      if ((0, _primitives.isCmd)(obj, 'endcodespacerange')) {
        return;
      }
      if (!(0, _util.isString)(obj)) {
        break;
      }
      var low = strToInt(obj);
      obj = lexer.getObj();
      if (!(0, _util.isString)(obj)) {
        break;
      }
      var high = strToInt(obj);
      cMap.addCodespaceRange(obj.length, low, high);
    }
    throw new _util.FormatError('Invalid codespace range.');
  }
  function parseWMode(cMap, lexer) {
    var obj = lexer.getObj();
    if (Number.isInteger(obj)) {
      cMap.vertical = !!obj;
    }
  }
  function parseCMapName(cMap, lexer) {
    var obj = lexer.getObj();
    if ((0, _primitives.isName)(obj) && (0, _util.isString)(obj.name)) {
      cMap.name = obj.name;
    }
  }
  function parseCMap(cMap, lexer, fetchBuiltInCMap, useCMap) {
    var previous;
    var embeddedUseCMap;
    objLoop: while (true) {
      try {
        var obj = lexer.getObj();
        if ((0, _primitives.isEOF)(obj)) {
          break;
        } else if ((0, _primitives.isName)(obj)) {
          if (obj.name === 'WMode') {
            parseWMode(cMap, lexer);
          } else if (obj.name === 'CMapName') {
            parseCMapName(cMap, lexer);
          }
          previous = obj;
        } else if ((0, _primitives.isCmd)(obj)) {
          switch (obj.cmd) {
            case 'endcmap':
              break objLoop;
            case 'usecmap':
              if ((0, _primitives.isName)(previous)) {
                embeddedUseCMap = previous.name;
              }
              break;
            case 'begincodespacerange':
              parseCodespaceRange(cMap, lexer);
              break;
            case 'beginbfchar':
              parseBfChar(cMap, lexer);
              break;
            case 'begincidchar':
              parseCidChar(cMap, lexer);
              break;
            case 'beginbfrange':
              parseBfRange(cMap, lexer);
              break;
            case 'begincidrange':
              parseCidRange(cMap, lexer);
              break;
          }
        }
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('Invalid cMap data: ' + ex);
        continue;
      }
    }
    if (!useCMap && embeddedUseCMap) {
      useCMap = embeddedUseCMap;
    }
    if (useCMap) {
      return extendCMap(cMap, fetchBuiltInCMap, useCMap);
    }
    return Promise.resolve(cMap);
  }
  function extendCMap(cMap, fetchBuiltInCMap, useCMap) {
    return createBuiltInCMap(useCMap, fetchBuiltInCMap).then(function (newCMap) {
      cMap.useCMap = newCMap;
      if (cMap.numCodespaceRanges === 0) {
        var useCodespaceRanges = cMap.useCMap.codespaceRanges;
        for (var i = 0; i < useCodespaceRanges.length; i++) {
          cMap.codespaceRanges[i] = useCodespaceRanges[i].slice();
        }
        cMap.numCodespaceRanges = cMap.useCMap.numCodespaceRanges;
      }
      cMap.useCMap.forEach(function (key, value) {
        if (!cMap.contains(key)) {
          cMap.mapOne(key, cMap.useCMap.lookup(key));
        }
      });
      return cMap;
    });
  }
  function createBuiltInCMap(name, fetchBuiltInCMap) {
    if (name === 'Identity-H') {
      return Promise.resolve(new IdentityCMap(false, 2));
    } else if (name === 'Identity-V') {
      return Promise.resolve(new IdentityCMap(true, 2));
    }
    if (!BUILT_IN_CMAPS.includes(name)) {
      return Promise.reject(new Error('Unknown CMap name: ' + name));
    }
    if (!fetchBuiltInCMap) {
      return Promise.reject(new Error('Built-in CMap parameters are not provided.'));
    }
    return fetchBuiltInCMap(name).then(function (data) {
      var cMapData = data.cMapData,
          compressionType = data.compressionType;
      var cMap = new CMap(true);
      if (compressionType === _util.CMapCompressionType.BINARY) {
        return new BinaryCMapReader().process(cMapData, cMap, function (useCMap) {
          return extendCMap(cMap, fetchBuiltInCMap, useCMap);
        });
      }
      if (compressionType === _util.CMapCompressionType.NONE) {
        var lexer = new _parser.Lexer(new _stream.Stream(cMapData));
        return parseCMap(cMap, lexer, fetchBuiltInCMap, null);
      }
      return Promise.reject(new Error('TODO: Only BINARY/NONE CMap compression is currently supported.'));
    });
  }
  return {
    create: function create(params) {
      var encoding = params.encoding;
      var fetchBuiltInCMap = params.fetchBuiltInCMap;
      var useCMap = params.useCMap;
      if ((0, _primitives.isName)(encoding)) {
        return createBuiltInCMap(encoding.name, fetchBuiltInCMap);
      } else if ((0, _primitives.isStream)(encoding)) {
        var cMap = new CMap();
        var lexer = new _parser.Lexer(encoding);
        return parseCMap(cMap, lexer, fetchBuiltInCMap, useCMap).then(function (parsedCMap) {
          if (parsedCMap.isIdentityCMap) {
            return createBuiltInCMap(parsedCMap.name, fetchBuiltInCMap);
          }
          return parsedCMap;
        });
      }
      return Promise.reject(new Error('Encoding required.'));
    }
  };
}();
exports.CMap = CMap;
exports.IdentityCMap = IdentityCMap;
exports.CMapFactory = CMapFactory;

/***/ }),
/* 141 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFontType = exports.ProblematicCharRanges = exports.IdentityToUnicodeMap = exports.ToUnicodeMap = exports.FontFlags = exports.Font = exports.ErrorFont = exports.PRIVATE_USE_OFFSET_END = exports.PRIVATE_USE_OFFSET_START = exports.SEAC_ANALYSIS_ENABLED = undefined;

var _util = __w_pdfjs_require__(2);

var _cff_parser = __w_pdfjs_require__(142);

var _glyphlist = __w_pdfjs_require__(145);

var _encodings = __w_pdfjs_require__(144);

var _standard_fonts = __w_pdfjs_require__(146);

var _unicode = __w_pdfjs_require__(147);

var _font_renderer = __w_pdfjs_require__(148);

var _cmap = __w_pdfjs_require__(140);

var _stream = __w_pdfjs_require__(125);

var _type1_parser = __w_pdfjs_require__(149);

var PRIVATE_USE_OFFSET_START = 0xE000;
var PRIVATE_USE_OFFSET_END = 0xF8FF;
var SKIP_PRIVATE_USE_RANGE_F000_TO_F01F = false;
var PDF_GLYPH_SPACE_UNITS = 1000;
var SEAC_ANALYSIS_ENABLED = false;
var FontFlags = {
  FixedPitch: 1,
  Serif: 2,
  Symbolic: 4,
  Script: 8,
  Nonsymbolic: 32,
  Italic: 64,
  AllCap: 65536,
  SmallCap: 131072,
  ForceBold: 262144
};
var MacStandardGlyphOrdering = ['.notdef', '.null', 'nonmarkingreturn', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent', 'ampersand', 'quotesingle', 'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less', 'equal', 'greater', 'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore', 'grave', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde', 'Adieresis', 'Aring', 'Ccedilla', 'Eacute', 'Ntilde', 'Odieresis', 'Udieresis', 'aacute', 'agrave', 'acircumflex', 'adieresis', 'atilde', 'aring', 'ccedilla', 'eacute', 'egrave', 'ecircumflex', 'edieresis', 'iacute', 'igrave', 'icircumflex', 'idieresis', 'ntilde', 'oacute', 'ograve', 'ocircumflex', 'odieresis', 'otilde', 'uacute', 'ugrave', 'ucircumflex', 'udieresis', 'dagger', 'degree', 'cent', 'sterling', 'section', 'bullet', 'paragraph', 'germandbls', 'registered', 'copyright', 'trademark', 'acute', 'dieresis', 'notequal', 'AE', 'Oslash', 'infinity', 'plusminus', 'lessequal', 'greaterequal', 'yen', 'mu', 'partialdiff', 'summation', 'product', 'pi', 'integral', 'ordfeminine', 'ordmasculine', 'Omega', 'ae', 'oslash', 'questiondown', 'exclamdown', 'logicalnot', 'radical', 'florin', 'approxequal', 'Delta', 'guillemotleft', 'guillemotright', 'ellipsis', 'nonbreakingspace', 'Agrave', 'Atilde', 'Otilde', 'OE', 'oe', 'endash', 'emdash', 'quotedblleft', 'quotedblright', 'quoteleft', 'quoteright', 'divide', 'lozenge', 'ydieresis', 'Ydieresis', 'fraction', 'currency', 'guilsinglleft', 'guilsinglright', 'fi', 'fl', 'daggerdbl', 'periodcentered', 'quotesinglbase', 'quotedblbase', 'perthousand', 'Acircumflex', 'Ecircumflex', 'Aacute', 'Edieresis', 'Egrave', 'Iacute', 'Icircumflex', 'Idieresis', 'Igrave', 'Oacute', 'Ocircumflex', 'apple', 'Ograve', 'Uacute', 'Ucircumflex', 'Ugrave', 'dotlessi', 'circumflex', 'tilde', 'macron', 'breve', 'dotaccent', 'ring', 'cedilla', 'hungarumlaut', 'ogonek', 'caron', 'Lslash', 'lslash', 'Scaron', 'scaron', 'Zcaron', 'zcaron', 'brokenbar', 'Eth', 'eth', 'Yacute', 'yacute', 'Thorn', 'thorn', 'minus', 'multiply', 'onesuperior', 'twosuperior', 'threesuperior', 'onehalf', 'onequarter', 'threequarters', 'franc', 'Gbreve', 'gbreve', 'Idotaccent', 'Scedilla', 'scedilla', 'Cacute', 'cacute', 'Ccaron', 'ccaron', 'dcroat'];
function adjustWidths(properties) {
  if (!properties.fontMatrix) {
    return;
  }
  if (properties.fontMatrix[0] === _util.FONT_IDENTITY_MATRIX[0]) {
    return;
  }
  var scale = 0.001 / properties.fontMatrix[0];
  var glyphsWidths = properties.widths;
  for (var glyph in glyphsWidths) {
    glyphsWidths[glyph] *= scale;
  }
  properties.defaultWidth *= scale;
}
function adjustToUnicode(properties, builtInEncoding) {
  if (properties.hasIncludedToUnicodeMap) {
    return;
  }
  if (properties.hasEncoding) {
    return;
  }
  if (builtInEncoding === properties.defaultEncoding) {
    return;
  }
  if (properties.toUnicode instanceof IdentityToUnicodeMap) {
    return;
  }
  var toUnicode = [],
      glyphsUnicodeMap = (0, _glyphlist.getGlyphsUnicode)();
  for (var charCode in builtInEncoding) {
    var glyphName = builtInEncoding[charCode];
    var unicode = (0, _unicode.getUnicodeForGlyph)(glyphName, glyphsUnicodeMap);
    if (unicode !== -1) {
      toUnicode[charCode] = String.fromCharCode(unicode);
    }
  }
  properties.toUnicode.amend(toUnicode);
}
function getFontType(type, subtype) {
  switch (type) {
    case 'Type1':
      return subtype === 'Type1C' ? _util.FontType.TYPE1C : _util.FontType.TYPE1;
    case 'CIDFontType0':
      return subtype === 'CIDFontType0C' ? _util.FontType.CIDFONTTYPE0C : _util.FontType.CIDFONTTYPE0;
    case 'OpenType':
      return _util.FontType.OPENTYPE;
    case 'TrueType':
      return _util.FontType.TRUETYPE;
    case 'CIDFontType2':
      return _util.FontType.CIDFONTTYPE2;
    case 'MMType1':
      return _util.FontType.MMTYPE1;
    case 'Type0':
      return _util.FontType.TYPE0;
    default:
      return _util.FontType.UNKNOWN;
  }
}
function recoverGlyphName(name, glyphsUnicodeMap) {
  if (glyphsUnicodeMap[name] !== undefined) {
    return name;
  }
  var unicode = (0, _unicode.getUnicodeForGlyph)(name, glyphsUnicodeMap);
  if (unicode !== -1) {
    for (var key in glyphsUnicodeMap) {
      if (glyphsUnicodeMap[key] === unicode) {
        return key;
      }
    }
  }
  (0, _util.info)('Unable to recover a standard glyph name for: ' + name);
  return name;
}
var Glyph = function GlyphClosure() {
  function Glyph(fontChar, unicode, accent, width, vmetric, operatorListId, isSpace, isInFont) {
    this.fontChar = fontChar;
    this.unicode = unicode;
    this.accent = accent;
    this.width = width;
    this.vmetric = vmetric;
    this.operatorListId = operatorListId;
    this.isSpace = isSpace;
    this.isInFont = isInFont;
  }
  Glyph.prototype.matchesForCache = function (fontChar, unicode, accent, width, vmetric, operatorListId, isSpace, isInFont) {
    return this.fontChar === fontChar && this.unicode === unicode && this.accent === accent && this.width === width && this.vmetric === vmetric && this.operatorListId === operatorListId && this.isSpace === isSpace && this.isInFont === isInFont;
  };
  return Glyph;
}();
var ToUnicodeMap = function ToUnicodeMapClosure() {
  function ToUnicodeMap() {
    var cmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    this._map = cmap;
  }
  ToUnicodeMap.prototype = {
    get length() {
      return this._map.length;
    },
    forEach: function forEach(callback) {
      for (var charCode in this._map) {
        callback(charCode, this._map[charCode].charCodeAt(0));
      }
    },
    has: function has(i) {
      return this._map[i] !== undefined;
    },
    get: function get(i) {
      return this._map[i];
    },
    charCodeOf: function charCodeOf(value) {
      var map = this._map;
      if (map.length <= 0x10000) {
        return map.indexOf(value);
      }
      for (var charCode in map) {
        if (map[charCode] === value) {
          return charCode | 0;
        }
      }
      return -1;
    },
    amend: function amend(map) {
      for (var charCode in map) {
        this._map[charCode] = map[charCode];
      }
    }
  };
  return ToUnicodeMap;
}();
var IdentityToUnicodeMap = function IdentityToUnicodeMapClosure() {
  function IdentityToUnicodeMap(firstChar, lastChar) {
    this.firstChar = firstChar;
    this.lastChar = lastChar;
  }
  IdentityToUnicodeMap.prototype = {
    get length() {
      return this.lastChar + 1 - this.firstChar;
    },
    forEach: function forEach(callback) {
      for (var i = this.firstChar, ii = this.lastChar; i <= ii; i++) {
        callback(i, i);
      }
    },
    has: function has(i) {
      return this.firstChar <= i && i <= this.lastChar;
    },
    get: function get(i) {
      if (this.firstChar <= i && i <= this.lastChar) {
        return String.fromCharCode(i);
      }
      return undefined;
    },
    charCodeOf: function charCodeOf(v) {
      return Number.isInteger(v) && v >= this.firstChar && v <= this.lastChar ? v : -1;
    },
    amend: function amend(map) {
      (0, _util.unreachable)('Should not call amend()');
    }
  };
  return IdentityToUnicodeMap;
}();
var OpenTypeFileBuilder = function OpenTypeFileBuilderClosure() {
  function writeInt16(dest, offset, num) {
    dest[offset] = num >> 8 & 0xFF;
    dest[offset + 1] = num & 0xFF;
  }
  function writeInt32(dest, offset, num) {
    dest[offset] = num >> 24 & 0xFF;
    dest[offset + 1] = num >> 16 & 0xFF;
    dest[offset + 2] = num >> 8 & 0xFF;
    dest[offset + 3] = num & 0xFF;
  }
  function writeData(dest, offset, data) {
    var i, ii;
    if (data instanceof Uint8Array) {
      dest.set(data, offset);
    } else if (typeof data === 'string') {
      for (i = 0, ii = data.length; i < ii; i++) {
        dest[offset++] = data.charCodeAt(i) & 0xFF;
      }
    } else {
      for (i = 0, ii = data.length; i < ii; i++) {
        dest[offset++] = data[i] & 0xFF;
      }
    }
  }
  function OpenTypeFileBuilder(sfnt) {
    this.sfnt = sfnt;
    this.tables = Object.create(null);
  }
  OpenTypeFileBuilder.getSearchParams = function OpenTypeFileBuilder_getSearchParams(entriesCount, entrySize) {
    var maxPower2 = 1,
        log2 = 0;
    while ((maxPower2 ^ entriesCount) > maxPower2) {
      maxPower2 <<= 1;
      log2++;
    }
    var searchRange = maxPower2 * entrySize;
    return {
      range: searchRange,
      entry: log2,
      rangeShift: entrySize * entriesCount - searchRange
    };
  };
  var OTF_HEADER_SIZE = 12;
  var OTF_TABLE_ENTRY_SIZE = 16;
  OpenTypeFileBuilder.prototype = {
    toArray: function OpenTypeFileBuilder_toArray() {
      var sfnt = this.sfnt;
      var tables = this.tables;
      var tablesNames = Object.keys(tables);
      tablesNames.sort();
      var numTables = tablesNames.length;
      var i, j, jj, table, tableName;
      var offset = OTF_HEADER_SIZE + numTables * OTF_TABLE_ENTRY_SIZE;
      var tableOffsets = [offset];
      for (i = 0; i < numTables; i++) {
        table = tables[tablesNames[i]];
        var paddedLength = (table.length + 3 & ~3) >>> 0;
        offset += paddedLength;
        tableOffsets.push(offset);
      }
      var file = new Uint8Array(offset);
      for (i = 0; i < numTables; i++) {
        table = tables[tablesNames[i]];
        writeData(file, tableOffsets[i], table);
      }
      if (sfnt === 'true') {
        sfnt = (0, _util.string32)(0x00010000);
      }
      file[0] = sfnt.charCodeAt(0) & 0xFF;
      file[1] = sfnt.charCodeAt(1) & 0xFF;
      file[2] = sfnt.charCodeAt(2) & 0xFF;
      file[3] = sfnt.charCodeAt(3) & 0xFF;
      writeInt16(file, 4, numTables);
      var searchParams = OpenTypeFileBuilder.getSearchParams(numTables, 16);
      writeInt16(file, 6, searchParams.range);
      writeInt16(file, 8, searchParams.entry);
      writeInt16(file, 10, searchParams.rangeShift);
      offset = OTF_HEADER_SIZE;
      for (i = 0; i < numTables; i++) {
        tableName = tablesNames[i];
        file[offset] = tableName.charCodeAt(0) & 0xFF;
        file[offset + 1] = tableName.charCodeAt(1) & 0xFF;
        file[offset + 2] = tableName.charCodeAt(2) & 0xFF;
        file[offset + 3] = tableName.charCodeAt(3) & 0xFF;
        var checksum = 0;
        for (j = tableOffsets[i], jj = tableOffsets[i + 1]; j < jj; j += 4) {
          var quad = (0, _util.readUint32)(file, j);
          checksum = checksum + quad >>> 0;
        }
        writeInt32(file, offset + 4, checksum);
        writeInt32(file, offset + 8, tableOffsets[i]);
        writeInt32(file, offset + 12, tables[tableName].length);
        offset += OTF_TABLE_ENTRY_SIZE;
      }
      return file;
    },
    addTable: function OpenTypeFileBuilder_addTable(tag, data) {
      if (tag in this.tables) {
        throw new Error('Table ' + tag + ' already exists');
      }
      this.tables[tag] = data;
    }
  };
  return OpenTypeFileBuilder;
}();
var ProblematicCharRanges = new Int32Array([0x0000, 0x0020, 0x007F, 0x00A1, 0x00AD, 0x00AE, 0x0600, 0x0780, 0x08A0, 0x10A0, 0x1780, 0x1800, 0x1C00, 0x1C50, 0x2000, 0x2010, 0x2011, 0x2012, 0x2028, 0x2030, 0x205F, 0x2070, 0x25CC, 0x25CD, 0x3000, 0x3001, 0x3164, 0x3165, 0xAA60, 0xAA80, 0xD800, 0xE000, 0xFFF0, 0x10000]);
var Font = function FontClosure() {
  function Font(name, file, properties) {
    var charCode;
    this.name = name;
    this.loadedName = properties.loadedName;
    this.isType3Font = properties.isType3Font;
    this.sizes = [];
    this.missingFile = false;
    this.glyphCache = Object.create(null);
    this.isSerifFont = !!(properties.flags & FontFlags.Serif);
    this.isSymbolicFont = !!(properties.flags & FontFlags.Symbolic);
    this.isMonospace = !!(properties.flags & FontFlags.FixedPitch);
    var type = properties.type;
    var subtype = properties.subtype;
    this.type = type;
    this.subtype = subtype;
    this.fallbackName = this.isMonospace ? 'monospace' : this.isSerifFont ? 'serif' : 'sans-serif';
    this.differences = properties.differences;
    this.widths = properties.widths;
    this.defaultWidth = properties.defaultWidth;
    this.composite = properties.composite;
    this.wideChars = properties.wideChars;
    this.cMap = properties.cMap;
    this.ascent = properties.ascent / PDF_GLYPH_SPACE_UNITS;
    this.descent = properties.descent / PDF_GLYPH_SPACE_UNITS;
    this.fontMatrix = properties.fontMatrix;
    this.bbox = properties.bbox;
    this.defaultEncoding = properties.defaultEncoding;
    this.toUnicode = properties.toUnicode;
    this.fallbackToUnicode = properties.fallbackToUnicode || new ToUnicodeMap();
    this.toFontChar = [];
    if (properties.type === 'Type3') {
      for (charCode = 0; charCode < 256; charCode++) {
        this.toFontChar[charCode] = this.differences[charCode] || properties.defaultEncoding[charCode];
      }
      this.fontType = _util.FontType.TYPE3;
      return;
    }
    this.cidEncoding = properties.cidEncoding;
    this.vertical = properties.vertical;
    if (this.vertical) {
      this.vmetrics = properties.vmetrics;
      this.defaultVMetrics = properties.defaultVMetrics;
    }
    if (!file || file.isEmpty) {
      if (file) {
        (0, _util.warn)('Font file is empty in "' + name + '" (' + this.loadedName + ')');
      }
      this.fallbackToSystemFont();
      return;
    }
    if (subtype === 'Type1C') {
      if (type !== 'Type1' && type !== 'MMType1') {
        if (isTrueTypeFile(file)) {
          subtype = 'TrueType';
        } else {
          type = 'Type1';
        }
      } else if (isOpenTypeFile(file)) {
        subtype = 'OpenType';
      }
    }
    if (subtype === 'CIDFontType0C' && type !== 'CIDFontType0') {
      type = 'CIDFontType0';
    }
    if (type === 'CIDFontType0') {
      if (isType1File(file)) {
        subtype = 'CIDFontType0';
      } else if (isOpenTypeFile(file)) {
        subtype = 'OpenType';
      } else {
        subtype = 'CIDFontType0C';
      }
    }
    if (subtype === 'OpenType' && type !== 'OpenType') {
      type = 'OpenType';
    }
    try {
      var data;
      switch (type) {
        case 'MMType1':
          (0, _util.info)('MMType1 font (' + name + '), falling back to Type1.');
        case 'Type1':
        case 'CIDFontType0':
          this.mimetype = 'font/opentype';
          var cff = subtype === 'Type1C' || subtype === 'CIDFontType0C' ? new CFFFont(file, properties) : new Type1Font(name, file, properties);
          adjustWidths(properties);
          data = this.convert(name, cff, properties);
          break;
        case 'OpenType':
        case 'TrueType':
        case 'CIDFontType2':
          this.mimetype = 'font/opentype';
          data = this.checkAndRepair(name, file, properties);
          if (this.isOpenType) {
            adjustWidths(properties);
            type = 'OpenType';
          }
          break;
        default:
          throw new _util.FormatError('Font ' + type + ' is not supported');
      }
    } catch (e) {
      if (!(e instanceof _util.FormatError)) {
        throw e;
      }
      (0, _util.warn)(e);
      this.fallbackToSystemFont();
      return;
    }
    this.data = data;
    this.fontType = getFontType(type, subtype);
    this.fontMatrix = properties.fontMatrix;
    this.widths = properties.widths;
    this.defaultWidth = properties.defaultWidth;
    this.toUnicode = properties.toUnicode;
    this.encoding = properties.baseEncoding;
    this.seacMap = properties.seacMap;
    this.loading = true;
  }
  Font.getFontID = function () {
    var ID = 1;
    return function Font_getFontID() {
      return String(ID++);
    };
  }();
  function int16(b0, b1) {
    return (b0 << 8) + b1;
  }
  function writeSignedInt16(bytes, index, value) {
    bytes[index + 1] = value;
    bytes[index] = value >>> 8;
  }
  function signedInt16(b0, b1) {
    var value = (b0 << 8) + b1;
    return value & 1 << 15 ? value - 0x10000 : value;
  }
  function int32(b0, b1, b2, b3) {
    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
  }
  function string16(value) {
    return String.fromCharCode(value >> 8 & 0xff, value & 0xff);
  }
  function safeString16(value) {
    value = value > 0x7FFF ? 0x7FFF : value < -0x8000 ? -0x8000 : value;
    return String.fromCharCode(value >> 8 & 0xff, value & 0xff);
  }
  function isTrueTypeFile(file) {
    var header = file.peekBytes(4);
    return (0, _util.readUint32)(header, 0) === 0x00010000;
  }
  function isTrueTypeCollectionFile(file) {
    var header = file.peekBytes(4);
    return (0, _util.bytesToString)(header) === 'ttcf';
  }
  function isOpenTypeFile(file) {
    var header = file.peekBytes(4);
    return (0, _util.bytesToString)(header) === 'OTTO';
  }
  function isType1File(file) {
    var header = file.peekBytes(2);
    if (header[0] === 0x25 && header[1] === 0x21) {
      return true;
    }
    if (header[0] === 0x80 && header[1] === 0x01) {
      return true;
    }
    return false;
  }
  function buildToFontChar(encoding, glyphsUnicodeMap, differences) {
    var toFontChar = [],
        unicode;
    for (var i = 0, ii = encoding.length; i < ii; i++) {
      unicode = (0, _unicode.getUnicodeForGlyph)(encoding[i], glyphsUnicodeMap);
      if (unicode !== -1) {
        toFontChar[i] = unicode;
      }
    }
    for (var charCode in differences) {
      unicode = (0, _unicode.getUnicodeForGlyph)(differences[charCode], glyphsUnicodeMap);
      if (unicode !== -1) {
        toFontChar[+charCode] = unicode;
      }
    }
    return toFontChar;
  }
  function isProblematicUnicodeLocation(code) {
    var i = 0,
        j = ProblematicCharRanges.length - 1;
    while (i < j) {
      var c = i + j + 1 >> 1;
      if (code < ProblematicCharRanges[c]) {
        j = c - 1;
      } else {
        i = c;
      }
    }
    return !(i & 1);
  }
  function adjustMapping(charCodeToGlyphId, properties, missingGlyphs) {
    var toUnicode = properties.toUnicode;
    var isSymbolic = !!(properties.flags & FontFlags.Symbolic);
    var isIdentityUnicode = properties.toUnicode instanceof IdentityToUnicodeMap;
    var newMap = Object.create(null);
    var toFontChar = [];
    var usedFontCharCodes = [];
    var nextAvailableFontCharCode = PRIVATE_USE_OFFSET_START;
    for (var originalCharCode in charCodeToGlyphId) {
      originalCharCode |= 0;
      var glyphId = charCodeToGlyphId[originalCharCode];
      if (missingGlyphs[glyphId]) {
        continue;
      }
      var fontCharCode = originalCharCode;
      var hasUnicodeValue = false;
      if (!isIdentityUnicode && toUnicode.has(originalCharCode)) {
        hasUnicodeValue = true;
        var unicode = toUnicode.get(fontCharCode);
        if (unicode.length === 1) {
          fontCharCode = unicode.charCodeAt(0);
        }
      }
      if (usedFontCharCodes[fontCharCode] !== undefined || isProblematicUnicodeLocation(fontCharCode) || isSymbolic && !hasUnicodeValue) {
        do {
          if (nextAvailableFontCharCode > PRIVATE_USE_OFFSET_END) {
            (0, _util.warn)('Ran out of space in font private use area.');
            break;
          }
          fontCharCode = nextAvailableFontCharCode++;
          if (SKIP_PRIVATE_USE_RANGE_F000_TO_F01F && fontCharCode === 0xF000) {
            fontCharCode = 0xF020;
            nextAvailableFontCharCode = fontCharCode + 1;
          }
        } while (usedFontCharCodes[fontCharCode] !== undefined);
      }
      newMap[fontCharCode] = glyphId;
      toFontChar[originalCharCode] = fontCharCode;
      usedFontCharCodes[fontCharCode] = true;
    }
    return {
      toFontChar: toFontChar,
      charCodeToGlyphId: newMap,
      nextAvailableFontCharCode: nextAvailableFontCharCode
    };
  }
  function getRanges(glyphs, numGlyphs) {
    var codes = [];
    for (var charCode in glyphs) {
      if (glyphs[charCode] >= numGlyphs) {
        continue;
      }
      codes.push({
        fontCharCode: charCode | 0,
        glyphId: glyphs[charCode]
      });
    }
    if (codes.length === 0) {
      codes.push({
        fontCharCode: 0,
        glyphId: 0
      });
    }
    codes.sort(function fontGetRangesSort(a, b) {
      return a.fontCharCode - b.fontCharCode;
    });
    var ranges = [];
    var length = codes.length;
    for (var n = 0; n < length;) {
      var start = codes[n].fontCharCode;
      var codeIndices = [codes[n].glyphId];
      ++n;
      var end = start;
      while (n < length && end + 1 === codes[n].fontCharCode) {
        codeIndices.push(codes[n].glyphId);
        ++end;
        ++n;
        if (end === 0xFFFF) {
          break;
        }
      }
      ranges.push([start, end, codeIndices]);
    }
    return ranges;
  }
  function createCmapTable(glyphs, numGlyphs) {
    var ranges = getRanges(glyphs, numGlyphs);
    var numTables = ranges[ranges.length - 1][1] > 0xFFFF ? 2 : 1;
    var cmap = '\x00\x00' + string16(numTables) + '\x00\x03' + '\x00\x01' + (0, _util.string32)(4 + numTables * 8);
    var i, ii, j, jj;
    for (i = ranges.length - 1; i >= 0; --i) {
      if (ranges[i][0] <= 0xFFFF) {
        break;
      }
    }
    var bmpLength = i + 1;
    if (ranges[i][0] < 0xFFFF && ranges[i][1] === 0xFFFF) {
      ranges[i][1] = 0xFFFE;
    }
    var trailingRangesCount = ranges[i][1] < 0xFFFF ? 1 : 0;
    var segCount = bmpLength + trailingRangesCount;
    var searchParams = OpenTypeFileBuilder.getSearchParams(segCount, 2);
    var startCount = '';
    var endCount = '';
    var idDeltas = '';
    var idRangeOffsets = '';
    var glyphsIds = '';
    var bias = 0;
    var range, start, end, codes;
    for (i = 0, ii = bmpLength; i < ii; i++) {
      range = ranges[i];
      start = range[0];
      end = range[1];
      startCount += string16(start);
      endCount += string16(end);
      codes = range[2];
      var contiguous = true;
      for (j = 1, jj = codes.length; j < jj; ++j) {
        if (codes[j] !== codes[j - 1] + 1) {
          contiguous = false;
          break;
        }
      }
      if (!contiguous) {
        var offset = (segCount - i) * 2 + bias * 2;
        bias += end - start + 1;
        idDeltas += string16(0);
        idRangeOffsets += string16(offset);
        for (j = 0, jj = codes.length; j < jj; ++j) {
          glyphsIds += string16(codes[j]);
        }
      } else {
        var startCode = codes[0];
        idDeltas += string16(startCode - start & 0xFFFF);
        idRangeOffsets += string16(0);
      }
    }
    if (trailingRangesCount > 0) {
      endCount += '\xFF\xFF';
      startCount += '\xFF\xFF';
      idDeltas += '\x00\x01';
      idRangeOffsets += '\x00\x00';
    }
    var format314 = '\x00\x00' + string16(2 * segCount) + string16(searchParams.range) + string16(searchParams.entry) + string16(searchParams.rangeShift) + endCount + '\x00\x00' + startCount + idDeltas + idRangeOffsets + glyphsIds;
    var format31012 = '';
    var header31012 = '';
    if (numTables > 1) {
      cmap += '\x00\x03' + '\x00\x0A' + (0, _util.string32)(4 + numTables * 8 + 4 + format314.length);
      format31012 = '';
      for (i = 0, ii = ranges.length; i < ii; i++) {
        range = ranges[i];
        start = range[0];
        codes = range[2];
        var code = codes[0];
        for (j = 1, jj = codes.length; j < jj; ++j) {
          if (codes[j] !== codes[j - 1] + 1) {
            end = range[0] + j - 1;
            format31012 += (0, _util.string32)(start) + (0, _util.string32)(end) + (0, _util.string32)(code);
            start = end + 1;
            code = codes[j];
          }
        }
        format31012 += (0, _util.string32)(start) + (0, _util.string32)(range[1]) + (0, _util.string32)(code);
      }
      header31012 = '\x00\x0C' + '\x00\x00' + (0, _util.string32)(format31012.length + 16) + '\x00\x00\x00\x00' + (0, _util.string32)(format31012.length / 12);
    }
    return cmap + '\x00\x04' + string16(format314.length + 4) + format314 + header31012 + format31012;
  }
  function validateOS2Table(os2) {
    var stream = new _stream.Stream(os2.data);
    var version = stream.getUint16();
    stream.getBytes(60);
    var selection = stream.getUint16();
    if (version < 4 && selection & 0x0300) {
      return false;
    }
    var firstChar = stream.getUint16();
    var lastChar = stream.getUint16();
    if (firstChar > lastChar) {
      return false;
    }
    stream.getBytes(6);
    var usWinAscent = stream.getUint16();
    if (usWinAscent === 0) {
      return false;
    }
    os2.data[8] = os2.data[9] = 0;
    return true;
  }
  function createOS2Table(properties, charstrings, override) {
    override = override || {
      unitsPerEm: 0,
      yMax: 0,
      yMin: 0,
      ascent: 0,
      descent: 0
    };
    var ulUnicodeRange1 = 0;
    var ulUnicodeRange2 = 0;
    var ulUnicodeRange3 = 0;
    var ulUnicodeRange4 = 0;
    var firstCharIndex = null;
    var lastCharIndex = 0;
    if (charstrings) {
      for (var code in charstrings) {
        code |= 0;
        if (firstCharIndex > code || !firstCharIndex) {
          firstCharIndex = code;
        }
        if (lastCharIndex < code) {
          lastCharIndex = code;
        }
        var position = (0, _unicode.getUnicodeRangeFor)(code);
        if (position < 32) {
          ulUnicodeRange1 |= 1 << position;
        } else if (position < 64) {
          ulUnicodeRange2 |= 1 << position - 32;
        } else if (position < 96) {
          ulUnicodeRange3 |= 1 << position - 64;
        } else if (position < 123) {
          ulUnicodeRange4 |= 1 << position - 96;
        } else {
          throw new _util.FormatError('Unicode ranges Bits > 123 are reserved for internal usage');
        }
      }
    } else {
      firstCharIndex = 0;
      lastCharIndex = 255;
    }
    var bbox = properties.bbox || [0, 0, 0, 0];
    var unitsPerEm = override.unitsPerEm || 1 / (properties.fontMatrix || _util.FONT_IDENTITY_MATRIX)[0];
    var scale = properties.ascentScaled ? 1.0 : unitsPerEm / PDF_GLYPH_SPACE_UNITS;
    var typoAscent = override.ascent || Math.round(scale * (properties.ascent || bbox[3]));
    var typoDescent = override.descent || Math.round(scale * (properties.descent || bbox[1]));
    if (typoDescent > 0 && properties.descent > 0 && bbox[1] < 0) {
      typoDescent = -typoDescent;
    }
    var winAscent = override.yMax || typoAscent;
    var winDescent = -override.yMin || -typoDescent;
    return '\x00\x03' + '\x02\x24' + '\x01\xF4' + '\x00\x05' + '\x00\x00' + '\x02\x8A' + '\x02\xBB' + '\x00\x00' + '\x00\x8C' + '\x02\x8A' + '\x02\xBB' + '\x00\x00' + '\x01\xDF' + '\x00\x31' + '\x01\x02' + '\x00\x00' + '\x00\x00\x06' + String.fromCharCode(properties.fixedPitch ? 0x09 : 0x00) + '\x00\x00\x00\x00\x00\x00' + (0, _util.string32)(ulUnicodeRange1) + (0, _util.string32)(ulUnicodeRange2) + (0, _util.string32)(ulUnicodeRange3) + (0, _util.string32)(ulUnicodeRange4) + '\x2A\x32\x31\x2A' + string16(properties.italicAngle ? 1 : 0) + string16(firstCharIndex || properties.firstChar) + string16(lastCharIndex || properties.lastChar) + string16(typoAscent) + string16(typoDescent) + '\x00\x64' + string16(winAscent) + string16(winDescent) + '\x00\x00\x00\x00' + '\x00\x00\x00\x00' + string16(properties.xHeight) + string16(properties.capHeight) + string16(0) + string16(firstCharIndex || properties.firstChar) + '\x00\x03';
  }
  function createPostTable(properties) {
    var angle = Math.floor(properties.italicAngle * Math.pow(2, 16));
    return '\x00\x03\x00\x00' + (0, _util.string32)(angle) + '\x00\x00' + '\x00\x00' + (0, _util.string32)(properties.fixedPitch) + '\x00\x00\x00\x00' + '\x00\x00\x00\x00' + '\x00\x00\x00\x00' + '\x00\x00\x00\x00';
  }
  function createNameTable(name, proto) {
    if (!proto) {
      proto = [[], []];
    }
    var strings = [proto[0][0] || 'Original licence', proto[0][1] || name, proto[0][2] || 'Unknown', proto[0][3] || 'uniqueID', proto[0][4] || name, proto[0][5] || 'Version 0.11', proto[0][6] || '', proto[0][7] || 'Unknown', proto[0][8] || 'Unknown', proto[0][9] || 'Unknown'];
    var stringsUnicode = [];
    var i, ii, j, jj, str;
    for (i = 0, ii = strings.length; i < ii; i++) {
      str = proto[1][i] || strings[i];
      var strBufUnicode = [];
      for (j = 0, jj = str.length; j < jj; j++) {
        strBufUnicode.push(string16(str.charCodeAt(j)));
      }
      stringsUnicode.push(strBufUnicode.join(''));
    }
    var names = [strings, stringsUnicode];
    var platforms = ['\x00\x01', '\x00\x03'];
    var encodings = ['\x00\x00', '\x00\x01'];
    var languages = ['\x00\x00', '\x04\x09'];
    var namesRecordCount = strings.length * platforms.length;
    var nameTable = '\x00\x00' + string16(namesRecordCount) + string16(namesRecordCount * 12 + 6);
    var strOffset = 0;
    for (i = 0, ii = platforms.length; i < ii; i++) {
      var strs = names[i];
      for (j = 0, jj = strs.length; j < jj; j++) {
        str = strs[j];
        var nameRecord = platforms[i] + encodings[i] + languages[i] + string16(j) + string16(str.length) + string16(strOffset);
        nameTable += nameRecord;
        strOffset += str.length;
      }
    }
    nameTable += strings.join('') + stringsUnicode.join('');
    return nameTable;
  }
  Font.prototype = {
    name: null,
    font: null,
    mimetype: null,
    encoding: null,
    get renderer() {
      var renderer = _font_renderer.FontRendererFactory.create(this, SEAC_ANALYSIS_ENABLED);
      return (0, _util.shadow)(this, 'renderer', renderer);
    },
    exportData: function Font_exportData() {
      var data = {};
      for (var i in this) {
        if (this.hasOwnProperty(i)) {
          data[i] = this[i];
        }
      }
      return data;
    },
    fallbackToSystemFont: function Font_fallbackToSystemFont() {
      var _this = this;

      this.missingFile = true;
      var charCode, unicode;
      var name = this.name;
      var type = this.type;
      var subtype = this.subtype;
      var fontName = name.replace(/[,_]/g, '-');
      var stdFontMap = (0, _standard_fonts.getStdFontMap)(),
          nonStdFontMap = (0, _standard_fonts.getNonStdFontMap)();
      var isStandardFont = !!stdFontMap[fontName] || !!(nonStdFontMap[fontName] && stdFontMap[nonStdFontMap[fontName]]);
      fontName = stdFontMap[fontName] || nonStdFontMap[fontName] || fontName;
      this.bold = fontName.search(/bold/gi) !== -1;
      this.italic = fontName.search(/oblique/gi) !== -1 || fontName.search(/italic/gi) !== -1;
      this.black = name.search(/Black/g) !== -1;
      this.remeasure = Object.keys(this.widths).length > 0;
      if (isStandardFont && type === 'CIDFontType2' && this.cidEncoding.indexOf('Identity-') === 0) {
        var GlyphMapForStandardFonts = (0, _standard_fonts.getGlyphMapForStandardFonts)();
        var map = [];
        for (charCode in GlyphMapForStandardFonts) {
          map[+charCode] = GlyphMapForStandardFonts[charCode];
        }
        if (/Arial-?Black/i.test(name)) {
          var SupplementalGlyphMapForArialBlack = (0, _standard_fonts.getSupplementalGlyphMapForArialBlack)();
          for (charCode in SupplementalGlyphMapForArialBlack) {
            map[+charCode] = SupplementalGlyphMapForArialBlack[charCode];
          }
        } else if (/Calibri/i.test(name)) {
          var SupplementalGlyphMapForCalibri = (0, _standard_fonts.getSupplementalGlyphMapForCalibri)();
          for (charCode in SupplementalGlyphMapForCalibri) {
            map[+charCode] = SupplementalGlyphMapForCalibri[charCode];
          }
        }
        var isIdentityUnicode = this.toUnicode instanceof IdentityToUnicodeMap;
        if (!isIdentityUnicode) {
          this.toUnicode.forEach(function (charCode, unicodeCharCode) {
            map[+charCode] = unicodeCharCode;
          });
        }
        this.toFontChar = map;
        this.toUnicode = new ToUnicodeMap(map);
      } else if (/Symbol/i.test(fontName)) {
        this.toFontChar = buildToFontChar(_encodings.SymbolSetEncoding, (0, _glyphlist.getGlyphsUnicode)(), this.differences);
      } else if (/Dingbats/i.test(fontName)) {
        if (/Wingdings/i.test(name)) {
          (0, _util.warn)('Non-embedded Wingdings font, falling back to ZapfDingbats.');
        }
        this.toFontChar = buildToFontChar(_encodings.ZapfDingbatsEncoding, (0, _glyphlist.getDingbatsGlyphsUnicode)(), this.differences);
      } else if (isStandardFont) {
        this.toFontChar = buildToFontChar(this.defaultEncoding, (0, _glyphlist.getGlyphsUnicode)(), this.differences);
      } else {
        var glyphsUnicodeMap = (0, _glyphlist.getGlyphsUnicode)();
        this.toUnicode.forEach(function (charCode, unicodeCharCode) {
          if (!_this.composite) {
            var glyphName = _this.differences[charCode] || _this.defaultEncoding[charCode];
            unicode = (0, _unicode.getUnicodeForGlyph)(glyphName, glyphsUnicodeMap);
            if (unicode !== -1) {
              unicodeCharCode = unicode;
            }
          }
          _this.toFontChar[charCode] = unicodeCharCode;
        });
      }
      this.loadedName = fontName.split('-')[0];
      this.loading = false;
      this.fontType = getFontType(type, subtype);
    },
    checkAndRepair: function Font_checkAndRepair(name, font, properties) {
      var VALID_TABLES = ['OS/2', 'cmap', 'head', 'hhea', 'hmtx', 'maxp', 'name', 'post', 'loca', 'glyf', 'fpgm', 'prep', 'cvt ', 'CFF '];
      function readTables(file, numTables) {
        var tables = Object.create(null);
        tables['OS/2'] = null;
        tables['cmap'] = null;
        tables['head'] = null;
        tables['hhea'] = null;
        tables['hmtx'] = null;
        tables['maxp'] = null;
        tables['name'] = null;
        tables['post'] = null;
        for (var i = 0; i < numTables; i++) {
          var table = readTableEntry(font);
          if (!VALID_TABLES.includes(table.tag)) {
            continue;
          }
          if (table.length === 0) {
            continue;
          }
          tables[table.tag] = table;
        }
        return tables;
      }
      function readTableEntry(file) {
        var tag = (0, _util.bytesToString)(file.getBytes(4));
        var checksum = file.getInt32() >>> 0;
        var offset = file.getInt32() >>> 0;
        var length = file.getInt32() >>> 0;
        var previousPosition = file.pos;
        file.pos = file.start ? file.start : 0;
        file.skip(offset);
        var data = file.getBytes(length);
        file.pos = previousPosition;
        if (tag === 'head') {
          data[8] = data[9] = data[10] = data[11] = 0;
          data[17] |= 0x20;
        }
        return {
          tag: tag,
          checksum: checksum,
          length: length,
          offset: offset,
          data: data
        };
      }
      function readOpenTypeHeader(ttf) {
        return {
          version: (0, _util.bytesToString)(ttf.getBytes(4)),
          numTables: ttf.getUint16(),
          searchRange: ttf.getUint16(),
          entrySelector: ttf.getUint16(),
          rangeShift: ttf.getUint16()
        };
      }
      function readTrueTypeCollectionHeader(ttc) {
        var ttcTag = (0, _util.bytesToString)(ttc.getBytes(4));
        (0, _util.assert)(ttcTag === 'ttcf', 'Must be a TrueType Collection font.');
        var majorVersion = ttc.getUint16();
        var minorVersion = ttc.getUint16();
        var numFonts = ttc.getInt32() >>> 0;
        var offsetTable = [];
        for (var i = 0; i < numFonts; i++) {
          offsetTable.push(ttc.getInt32() >>> 0);
        }
        var header = {
          ttcTag: ttcTag,
          majorVersion: majorVersion,
          minorVersion: minorVersion,
          numFonts: numFonts,
          offsetTable: offsetTable
        };
        switch (majorVersion) {
          case 1:
            return header;
          case 2:
            header.dsigTag = ttc.getInt32() >>> 0;
            header.dsigLength = ttc.getInt32() >>> 0;
            header.dsigOffset = ttc.getInt32() >>> 0;
            return header;
        }
        throw new _util.FormatError('Invalid TrueType Collection majorVersion: ' + majorVersion + '.');
      }
      function readTrueTypeCollectionData(ttc, fontName) {
        var _readTrueTypeCollecti = readTrueTypeCollectionHeader(ttc),
            numFonts = _readTrueTypeCollecti.numFonts,
            offsetTable = _readTrueTypeCollecti.offsetTable;

        for (var i = 0; i < numFonts; i++) {
          ttc.pos = (ttc.start || 0) + offsetTable[i];
          var potentialHeader = readOpenTypeHeader(ttc);
          var potentialTables = readTables(ttc, potentialHeader.numTables);
          if (!potentialTables['name']) {
            throw new _util.FormatError('TrueType Collection font must contain a "name" table.');
          }
          var nameTable = readNameTable(potentialTables['name']);
          for (var j = 0, jj = nameTable.length; j < jj; j++) {
            for (var k = 0, kk = nameTable[j].length; k < kk; k++) {
              var nameEntry = nameTable[j][k];
              if (nameEntry && nameEntry.replace(/\s/g, '') === fontName) {
                return {
                  header: potentialHeader,
                  tables: potentialTables
                };
              }
            }
          }
        }
        throw new _util.FormatError('TrueType Collection does not contain "' + fontName + '" font.');
      }
      function readCmapTable(cmap, font, isSymbolicFont, hasEncoding) {
        if (!cmap) {
          (0, _util.warn)('No cmap table available.');
          return {
            platformId: -1,
            encodingId: -1,
            mappings: [],
            hasShortCmap: false
          };
        }
        var segment;
        var start = (font.start ? font.start : 0) + cmap.offset;
        font.pos = start;
        font.getUint16();
        var numTables = font.getUint16();
        var potentialTable;
        var canBreak = false;
        for (var i = 0; i < numTables; i++) {
          var platformId = font.getUint16();
          var encodingId = font.getUint16();
          var offset = font.getInt32() >>> 0;
          var useTable = false;
          if (potentialTable && potentialTable.platformId === platformId && potentialTable.encodingId === encodingId) {
            continue;
          }
          if (platformId === 0 && encodingId === 0) {
            useTable = true;
          } else if (platformId === 1 && encodingId === 0) {
            useTable = true;
          } else if (platformId === 3 && encodingId === 1 && (hasEncoding || !potentialTable)) {
            useTable = true;
            if (!isSymbolicFont) {
              canBreak = true;
            }
          } else if (isSymbolicFont && platformId === 3 && encodingId === 0) {
            useTable = true;
            canBreak = true;
          }
          if (useTable) {
            potentialTable = {
              platformId: platformId,
              encodingId: encodingId,
              offset: offset
            };
          }
          if (canBreak) {
            break;
          }
        }
        if (potentialTable) {
          font.pos = start + potentialTable.offset;
        }
        if (!potentialTable || font.peekByte() === -1) {
          (0, _util.warn)('Could not find a preferred cmap table.');
          return {
            platformId: -1,
            encodingId: -1,
            mappings: [],
            hasShortCmap: false
          };
        }
        var format = font.getUint16();
        font.getUint16();
        font.getUint16();
        var hasShortCmap = false;
        var mappings = [];
        var j, glyphId;
        if (format === 0) {
          for (j = 0; j < 256; j++) {
            var index = font.getByte();
            if (!index) {
              continue;
            }
            mappings.push({
              charCode: j,
              glyphId: index
            });
          }
          hasShortCmap = true;
        } else if (format === 4) {
          var segCount = font.getUint16() >> 1;
          font.getBytes(6);
          var segIndex,
              segments = [];
          for (segIndex = 0; segIndex < segCount; segIndex++) {
            segments.push({ end: font.getUint16() });
          }
          font.getUint16();
          for (segIndex = 0; segIndex < segCount; segIndex++) {
            segments[segIndex].start = font.getUint16();
          }
          for (segIndex = 0; segIndex < segCount; segIndex++) {
            segments[segIndex].delta = font.getUint16();
          }
          var offsetsCount = 0;
          for (segIndex = 0; segIndex < segCount; segIndex++) {
            segment = segments[segIndex];
            var rangeOffset = font.getUint16();
            if (!rangeOffset) {
              segment.offsetIndex = -1;
              continue;
            }
            var offsetIndex = (rangeOffset >> 1) - (segCount - segIndex);
            segment.offsetIndex = offsetIndex;
            offsetsCount = Math.max(offsetsCount, offsetIndex + segment.end - segment.start + 1);
          }
          var offsets = [];
          for (j = 0; j < offsetsCount; j++) {
            offsets.push(font.getUint16());
          }
          for (segIndex = 0; segIndex < segCount; segIndex++) {
            segment = segments[segIndex];
            start = segment.start;
            var end = segment.end;
            var delta = segment.delta;
            offsetIndex = segment.offsetIndex;
            for (j = start; j <= end; j++) {
              if (j === 0xFFFF) {
                continue;
              }
              glyphId = offsetIndex < 0 ? j : offsets[offsetIndex + j - start];
              glyphId = glyphId + delta & 0xFFFF;
              mappings.push({
                charCode: j,
                glyphId: glyphId
              });
            }
          }
        } else if (format === 6) {
          var firstCode = font.getUint16();
          var entryCount = font.getUint16();
          for (j = 0; j < entryCount; j++) {
            glyphId = font.getUint16();
            var charCode = firstCode + j;
            mappings.push({
              charCode: charCode,
              glyphId: glyphId
            });
          }
        } else {
          (0, _util.warn)('cmap table has unsupported format: ' + format);
          return {
            platformId: -1,
            encodingId: -1,
            mappings: [],
            hasShortCmap: false
          };
        }
        mappings.sort(function (a, b) {
          return a.charCode - b.charCode;
        });
        for (i = 1; i < mappings.length; i++) {
          if (mappings[i - 1].charCode === mappings[i].charCode) {
            mappings.splice(i, 1);
            i--;
          }
        }
        return {
          platformId: potentialTable.platformId,
          encodingId: potentialTable.encodingId,
          mappings: mappings,
          hasShortCmap: hasShortCmap
        };
      }
      function sanitizeMetrics(font, header, metrics, numGlyphs) {
        if (!header) {
          if (metrics) {
            metrics.data = null;
          }
          return;
        }
        font.pos = (font.start ? font.start : 0) + header.offset;
        font.pos += header.length - 2;
        var numOfMetrics = font.getUint16();
        if (numOfMetrics > numGlyphs) {
          (0, _util.info)('The numOfMetrics (' + numOfMetrics + ') should not be ' + 'greater than the numGlyphs (' + numGlyphs + ')');
          numOfMetrics = numGlyphs;
          header.data[34] = (numOfMetrics & 0xff00) >> 8;
          header.data[35] = numOfMetrics & 0x00ff;
        }
        var numOfSidebearings = numGlyphs - numOfMetrics;
        var numMissing = numOfSidebearings - (metrics.length - numOfMetrics * 4 >> 1);
        if (numMissing > 0) {
          var entries = new Uint8Array(metrics.length + numMissing * 2);
          entries.set(metrics.data);
          metrics.data = entries;
        }
      }
      function sanitizeGlyph(source, sourceStart, sourceEnd, dest, destStart, hintsValid) {
        var glyphProfile = {
          length: 0,
          sizeOfInstructions: 0
        };
        if (sourceEnd - sourceStart <= 12) {
          return glyphProfile;
        }
        var glyf = source.subarray(sourceStart, sourceEnd);
        var contoursCount = signedInt16(glyf[0], glyf[1]);
        if (contoursCount < 0) {
          contoursCount = -1;
          writeSignedInt16(glyf, 0, contoursCount);
          dest.set(glyf, destStart);
          glyphProfile.length = glyf.length;
          return glyphProfile;
        }
        var i,
            j = 10,
            flagsCount = 0;
        for (i = 0; i < contoursCount; i++) {
          var endPoint = glyf[j] << 8 | glyf[j + 1];
          flagsCount = endPoint + 1;
          j += 2;
        }
        var instructionsStart = j;
        var instructionsLength = glyf[j] << 8 | glyf[j + 1];
        glyphProfile.sizeOfInstructions = instructionsLength;
        j += 2 + instructionsLength;
        var instructionsEnd = j;
        var coordinatesLength = 0;
        for (i = 0; i < flagsCount; i++) {
          var flag = glyf[j++];
          if (flag & 0xC0) {
            glyf[j - 1] = flag & 0x3F;
          }
          var xyLength = (flag & 2 ? 1 : flag & 16 ? 0 : 2) + (flag & 4 ? 1 : flag & 32 ? 0 : 2);
          coordinatesLength += xyLength;
          if (flag & 8) {
            var repeat = glyf[j++];
            i += repeat;
            coordinatesLength += repeat * xyLength;
          }
        }
        if (coordinatesLength === 0) {
          return glyphProfile;
        }
        var glyphDataLength = j + coordinatesLength;
        if (glyphDataLength > glyf.length) {
          return glyphProfile;
        }
        if (!hintsValid && instructionsL
