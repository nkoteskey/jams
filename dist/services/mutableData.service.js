"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Create mutable data, store it, and return handle
var createMutableData = function () {
    function createMutableData(data, appHandle) {
        _classCallCheck(this, createMutableData);

        this.typeTag = 1500;
        this.mdHandle = null;
        this.initialData = data;
        this.safeAppHandle = appHandle;
    }

    _createClass(createMutableData, [{
        key: "initialiseMD",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.currentAppHandle.mutableData.newRandomPublic(this.typeTag);

                            case 2:
                                this.currentMDHandle = _context.sent;

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function initialiseMD() {
                return _ref.apply(this, arguments);
            }

            return initialiseMD;
        }()
    }, {
        key: "storeMD",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.initialiseMD();

                            case 2:
                                _context2.next = 4;
                                return window.safeMutableData.quickSetup(this.mdHandle, this.initialData);

                            case 4:
                                _context2.next = 6;
                                return this.storeMD();

                            case 6:
                                return _context2.abrupt("return", this.currentMDHandle = _context2.sent);

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function storeMD() {
                return _ref2.apply(this, arguments);
            }

            return storeMD;
        }()
    }, {
        key: "currentMDHandle",
        get: function get() {
            if (this.mdHandle == null || this.mdHandle == undefined) {
                return undefined;
            }
            return this.mdHandle;
        },
        set: function set(handle) {
            this.mdHandle = handle;
        }
    }]);

    return createMutableData;
}();

exports.default = createMutableData;