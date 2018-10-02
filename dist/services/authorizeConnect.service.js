'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var authoriseAndConnect = function () {
    function authoriseAndConnect() {
        _classCallCheck(this, authoriseAndConnect);

        this.safeAppHandle = null;
        this.appInfo = {
            name: 'Hello SAFE Network',
            id: 'net.maidsafe.tutorials.web-app',
            version: '0.1.0',
            vendor: 'MaidSafe.net Ltd.'
        };
        this.authUri = null;
        this.connection = null;
    }

    // Authorize application,
    // establish connection to network,
    // and return app handle.


    _createClass(authoriseAndConnect, [{
        key: 'appHandle',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var currentHandle;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                // Initialize application
                                console.log('Initialising SAFE application...');
                                console.log(window);
                                _context.next = 5;
                                return window.safe.initialiseApp(this.appInfo);

                            case 5:
                                currentHandle = _context.sent;
                                _context.next = 8;
                                return currentHandle.auth.genAuthUri();

                            case 8:
                                this.safeAppHandle = _context.sent;
                                _context.next = 11;
                                return window.safe.authorise(this.safeAppHandle);

                            case 11:
                                this.authUri = _context.sent;

                                console.log('SAFE application authorised by user');

                                _context.next = 15;
                                return currentHandle.auth.loginFromUri(this.authUri);

                            case 15:
                                this.connection = _context.sent;

                                console.log("Application connected to the network");

                                this.currentAppHandle = currentHandle;
                                console.log(this.currentAppHandle);
                                console.log(this.authUri);
                                console.log(this.connection);

                                return _context.abrupt('return', this.currentAppHandle);

                            case 24:
                                _context.prev = 24;
                                _context.t0 = _context['catch'](0);
                                throw _context.t0;

                            case 27:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 24]]);
            }));

            function appHandle() {
                return _ref.apply(this, arguments);
            }

            return appHandle;
        }()
    }, {
        key: 'currentAppHandle',
        get: function get() {
            if (this.safeAppHandle == null || this.safeAppHandle == undefined) {
                return undefined;
            }
            return this.safeAppHandle;
        },
        set: function set(handle) {
            this.safeAppHandle = handle;
        }
    }]);

    return authoriseAndConnect;
}();

module.exports = { authoriseAndConnect: authoriseAndConnect };