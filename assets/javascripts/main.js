/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery-mask-plugin/dist/jquery.mask.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * jquery.mask.js
 * @version: v1.14.16
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(function ($) {
    'use strict';

    var Mask = function (el, mask, options) {

        var p = {
            invalid: [],
            getCaret: function () {
                try {
                    var sel,
                        pos = 0,
                        ctrl = el.get(0),
                        dSel = document.selection,
                        cSelStart = ctrl.selectionStart;

                    // IE Support
                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
                        sel = dSel.createRange();
                        sel.moveStart('character', -p.val().length);
                        pos = sel.text.length;
                    }
                    // Firefox support
                    else if (cSelStart || cSelStart === '0') {
                        pos = cSelStart;
                    }

                    return pos;
                } catch (e) {}
            },
            setCaret: function(pos) {
                try {
                    if (el.is(':focus')) {
                        var range, ctrl = el.get(0);

                        // Firefox, WebKit, etc..
                        if (ctrl.setSelectionRange) {
                            ctrl.setSelectionRange(pos, pos);
                        } else { // IE
                            range = ctrl.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    }
                } catch (e) {}
            },
            events: function() {
                el
                .on('keydown.mask', function(e) {
                    el.data('mask-keycode', e.keyCode || e.which);
                    el.data('mask-previus-value', el.val());
                    el.data('mask-previus-caret-pos', p.getCaret());
                    p.maskDigitPosMapOld = p.maskDigitPosMap;
                })
                .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
                .on('paste.mask drop.mask', function() {
                    setTimeout(function() {
                        el.keydown().keyup();
                    }, 100);
                })
                .on('change.mask', function(){
                    el.data('changed', true);
                })
                .on('blur.mask', function(){
                    if (oldValue !== p.val() && !el.data('changed')) {
                        el.trigger('change');
                    }
                    el.data('changed', false);
                })
                // it's very important that this callback remains in this position
                // otherwhise oldValue it's going to work buggy
                .on('blur.mask', function() {
                    oldValue = p.val();
                })
                // select all text on focus
                .on('focus.mask', function (e) {
                    if (options.selectOnFocus === true) {
                        $(e.target).select();
                    }
                })
                // clear the value if it not complete the mask
                .on('focusout.mask', function() {
                    if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                       p.val('');
                   }
                });
            },
            getRegexMask: function() {
                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

                for (var i = 0; i < mask.length; i++) {
                    translation = jMask.translation[mask.charAt(i)];

                    if (translation) {

                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
                        optional = translation.optional;
                        recursive = translation.recursive;

                        if (recursive) {
                            maskChunks.push(mask.charAt(i));
                            oRecursive = {digit: mask.charAt(i), pattern: pattern};
                        } else {
                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
                        }

                    } else {
                        maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                    }
                }

                r = maskChunks.join('');

                if (oRecursive) {
                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
                         .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
                }

                return new RegExp(r);
            },
            destroyEvents: function() {
                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
            },
            val: function(v) {
                var isInput = el.is('input'),
                    method = isInput ? 'val' : 'text',
                    r;

                if (arguments.length > 0) {
                    if (el[method]() !== v) {
                        el[method](v);
                    }
                    r = el;
                } else {
                    r = el[method]();
                }

                return r;
            },
            calculateCaretPosition: function(oldVal) {
                var newVal = p.getMasked(),
                    caretPosNew = p.getCaret();
                if (oldVal !== newVal) {
                    var caretPosOld = el.data('mask-previus-caret-pos') || 0,
                        newValL = newVal.length,
                        oldValL = oldVal.length,
                        maskDigitsBeforeCaret = 0,
                        maskDigitsAfterCaret = 0,
                        maskDigitsBeforeCaretAll = 0,
                        maskDigitsBeforeCaretAllOld = 0,
                        i = 0;

                    for (i = caretPosNew; i < newValL; i++) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsAfterCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsBeforeCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (p.maskDigitPosMap[i]) {
                            maskDigitsBeforeCaretAll++;
                        }
                    }

                    for (i = caretPosOld - 1; i >= 0; i--) {
                        if (p.maskDigitPosMapOld[i]) {
                            maskDigitsBeforeCaretAllOld++;
                        }
                    }

                    // if the cursor is at the end keep it there
                    if (caretPosNew > oldValL) {
                      caretPosNew = newValL * 10;
                    } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
                        if (!p.maskDigitPosMapOld[caretPosNew])  {
                          var caretPos = caretPosNew;
                          caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                          caretPosNew -= maskDigitsBeforeCaret;
                          if (p.maskDigitPosMap[caretPosNew])  {
                            caretPosNew = caretPos;
                          }
                        }
                    }
                    else if (caretPosNew > caretPosOld) {
                        caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
                        caretPosNew += maskDigitsAfterCaret;
                    }
                }
                return caretPosNew;
            },
            behaviour: function(e) {
                e = e || window.event;
                p.invalid = [];

                var keyCode = el.data('mask-keycode');

                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
                    var newVal = p.getMasked(),
                        caretPos = p.getCaret(),
                        oldVal = el.data('mask-previus-value') || '';

                    // this is a compensation to devices/browsers that don't compensate
                    // caret positioning the right way
                    setTimeout(function() {
                      p.setCaret(p.calculateCaretPosition(oldVal));
                    }, $.jMaskGlobals.keyStrokeCompensation);

                    p.val(newVal);
                    p.setCaret(caretPos);
                    return p.callbacks(e);
                }
            },
            getMasked: function(skipMaskChars, val) {
                var buf = [],
                    value = val === undefined ? p.val() : val + '',
                    m = 0, maskLen = mask.length,
                    v = 0, valLen = value.length,
                    offset = 1, addMethod = 'push',
                    resetPos = -1,
                    maskDigitCount = 0,
                    maskDigitPosArr = [],
                    lastMaskChar,
                    check;

                if (options.reverse) {
                    addMethod = 'unshift';
                    offset = -1;
                    lastMaskChar = 0;
                    m = maskLen - 1;
                    v = valLen - 1;
                    check = function () {
                        return m > -1 && v > -1;
                    };
                } else {
                    lastMaskChar = maskLen - 1;
                    check = function () {
                        return m < maskLen && v < valLen;
                    };
                }

                var lastUntranslatedMaskChar;
                while (check()) {
                    var maskDigit = mask.charAt(m),
                        valDigit = value.charAt(v),
                        translation = jMask.translation[maskDigit];

                    if (translation) {
                        if (valDigit.match(translation.pattern)) {
                            buf[addMethod](valDigit);
                             if (translation.recursive) {
                                if (resetPos === -1) {
                                    resetPos = m;
                                } else if (m === lastMaskChar && m !== resetPos) {
                                    m = resetPos - offset;
                                }

                                if (lastMaskChar === resetPos) {
                                    m -= offset;
                                }
                            }
                            m += offset;
                        } else if (valDigit === lastUntranslatedMaskChar) {
                            // matched the last untranslated (raw) mask character that we encountered
                            // likely an insert offset the mask character from the last entry; fall
                            // through and only increment v
                            maskDigitCount--;
                            lastUntranslatedMaskChar = undefined;
                        } else if (translation.optional) {
                            m += offset;
                            v -= offset;
                        } else if (translation.fallback) {
                            buf[addMethod](translation.fallback);
                            m += offset;
                            v -= offset;
                        } else {
                          p.invalid.push({p: v, v: valDigit, e: translation.pattern});
                        }
                        v += offset;
                    } else {
                        if (!skipMaskChars) {
                            buf[addMethod](maskDigit);
                        }

                        if (valDigit === maskDigit) {
                            maskDigitPosArr.push(v);
                            v += offset;
                        } else {
                            lastUntranslatedMaskChar = maskDigit;
                            maskDigitPosArr.push(v + maskDigitCount);
                            maskDigitCount++;
                        }

                        m += offset;
                    }
                }

                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
                    buf.push(lastMaskCharDigit);
                }

                var newVal = buf.join('');
                p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
                return newVal;
            },
            mapMaskdigitPositions: function(newVal, maskDigitPosArr, valLen) {
              var maskDiff = options.reverse ? newVal.length - valLen : 0;
              p.maskDigitPosMap = {};
              for (var i = 0; i < maskDigitPosArr.length; i++) {
                p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
              }
            },
            callbacks: function (e) {
                var val = p.val(),
                    changed = val !== oldValue,
                    defaultArgs = [val, e, el, options],
                    callback = function(name, criteria, args) {
                        if (typeof options[name] === 'function' && criteria) {
                            options[name].apply(this, args);
                        }
                    };

                callback('onChange', changed === true, defaultArgs);
                callback('onKeyPress', changed === true, defaultArgs);
                callback('onComplete', val.length === mask.length, defaultArgs);
                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
            }
        };

        el = $(el);
        var jMask = this, oldValue = p.val(), regexMask;

        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;

        // public methods
        jMask.mask = mask;
        jMask.options = options;
        jMask.remove = function() {
            var caret = p.getCaret();
            if (jMask.options.placeholder) {
                el.removeAttr('placeholder');
            }
            if (el.data('mask-maxlength')) {
                el.removeAttr('maxlength');
            }
            p.destroyEvents();
            p.val(jMask.getCleanVal());
            p.setCaret(caret);
            return el;
        };

        // get value without mask
        jMask.getCleanVal = function() {
           return p.getMasked(true);
        };

        // get masked value without the value being in the input or element
        jMask.getMaskedVal = function(val) {
           return p.getMasked(false, val);
        };

       jMask.init = function(onlyMask) {
            onlyMask = onlyMask || false;
            options = options || {};

            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;
            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;
            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);

            jMask = $.extend(true, {}, jMask, options);

            regexMask = p.getRegexMask();

            if (onlyMask) {
                p.events();
                p.val(p.getMasked());
            } else {
                if (options.placeholder) {
                    el.attr('placeholder' , options.placeholder);
                }

                // this is necessary, otherwise if the user submit the form
                // and then press the "back" button, the autocomplete will erase
                // the data. Works fine on IE9+, FF, Opera, Safari.
                if (el.data('mask')) {
                  el.attr('autocomplete', 'off');
                }

                // detect if is necessary let the user type freely.
                // for is a lot faster than forEach.
                for (var i = 0, maxlength = true; i < mask.length; i++) {
                    var translation = jMask.translation[mask.charAt(i)];
                    if (translation && translation.recursive) {
                        maxlength = false;
                        break;
                    }
                }

                if (maxlength) {
                    el.attr('maxlength', mask.length).data('mask-maxlength', true);
                }

                p.destroyEvents();
                p.events();

                var caret = p.getCaret();
                p.val(p.getMasked());
                p.setCaret(caret);
            }
        };

        jMask.init(!el.is('input'));
    };

    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
            options = {},
            prefix = 'data-mask-',
            mask = input.attr('data-mask');

        if (input.attr(prefix + 'reverse')) {
            options.reverse = true;
        }

        if (input.attr(prefix + 'clearifnotmatch')) {
            options.clearIfNotMatch = true;
        }

        if (input.attr(prefix + 'selectonfocus') === 'true') {
           options.selectOnFocus = true;
        }

        if (notSameMaskObject(input, mask, options)) {
            return input.data('mask', new Mask(this, mask, options));
        }
    },
    notSameMaskObject = function(field, mask, options) {
        options = options || {};
        var maskObject = $(field).data('mask'),
            stringify = JSON.stringify,
            value = $(field).val() || $(field).text();
        try {
            if (typeof mask === 'function') {
                mask = mask(value);
            }
            return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
        } catch (e) {}
    },
    eventSupported = function(eventName) {
        var el = document.createElement('div'), isSupported;

        eventName = 'on' + eventName;
        isSupported = (eventName in el);

        if ( !isSupported ) {
            el.setAttribute(eventName, 'return;');
            isSupported = typeof el[eventName] === 'function';
        }
        el = null;

        return isSupported;
    };

    $.fn.mask = function(mask, options) {
        options = options || {};
        var selector = this.selector,
            globals = $.jMaskGlobals,
            interval = globals.watchInterval,
            watchInputs = options.watchInputs || globals.watchInputs,
            maskFunction = function() {
                if (notSameMaskObject(this, mask, options)) {
                    return $(this).data('mask', new Mask(this, mask, options));
                }
            };

        $(this).each(maskFunction);

        if (selector && selector !== '' && watchInputs) {
            clearInterval($.maskWatchers[selector]);
            $.maskWatchers[selector] = setInterval(function(){
                $(document).find(selector).each(maskFunction);
            }, interval);
        }
        return this;
    };

    $.fn.masked = function(val) {
        return this.data('mask').getMaskedVal(val);
    };

    $.fn.unmask = function() {
        clearInterval($.maskWatchers[this.selector]);
        delete $.maskWatchers[this.selector];
        return this.each(function() {
            var dataMask = $(this).data('mask');
            if (dataMask) {
                dataMask.remove().removeData('mask');
            }
        });
    };

    $.fn.cleanVal = function() {
        return this.data('mask').getCleanVal();
    };

    $.applyDataMask = function(selector) {
        selector = selector || $.jMaskGlobals.maskElements;
        var $selector = (selector instanceof $) ? selector : $(selector);
        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };

    var globals = {
        maskElements: 'input,td,span,div',
        dataMaskAttr: '*[data-mask]',
        dataMask: true,
        watchInterval: 300,
        watchInputs: true,
        keyStrokeCompensation: 10,
        // old versions of chrome dont work great with input event
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
        watchDataMask: false,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            '0': {pattern: /\d/},
            '9': {pattern: /\d/, optional: true},
            '#': {pattern: /\d/, recursive: true},
            'A': {pattern: /[a-zA-Z0-9]/},
            'S': {pattern: /[a-zA-Z]/}
        }
    };

    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

    // looking for inputs with data-mask attribute
    if (globals.dataMask) {
        $.applyDataMask();
    }

    setInterval(function() {
        if ($.jMaskGlobals.watchDataMask) {
            $.applyDataMask();
        }
    }, globals.watchInterval);
}, __webpack_provided_window_dot_jQuery, window.Zepto));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./node_modules/owl.carousel2.thumbs/dist/owl.carousel2.thumbs.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/owl.carousel2.thumbs/dist/owl.carousel2.thumbs.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/*! owl.carousel2.thumbs - v0.1.8 | (c) 2016 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
!function(a,b,c,d){"use strict";var e=function(b){this.owl=b,this._thumbcontent=[],this._identifier=0,this.owl_currentitem=this.owl.options.startPosition,this.$element=this.owl.$element,this._handlers={"prepared.owl.carousel":a.proxy(function(b){if(!b.namespace||!this.owl.options.thumbs||this.owl.options.thumbImage||this.owl.options.thumbsPrerendered||this.owl.options.thumbImage){if(b.namespace&&this.owl.options.thumbs&&this.owl.options.thumbImage){var c=a(b.content).find("img");this._thumbcontent.push(c)}}else a(b.content).find("[data-thumb]").attr("data-thumb")!==d&&this._thumbcontent.push(a(b.content).find("[data-thumb]").attr("data-thumb"))},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this.owl.options.thumbs&&(this.render(),this.listen(),this._identifier=this.owl.$element.data("slider-id"),this.setActive())},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this.owl.options.thumbs&&(this._identifier=this.owl.$element.data("slider-id"),this.setActive())},this)},this.owl.options=a.extend({},e.Defaults,this.owl.options),this.owl.$element.on(this._handlers)};e.Defaults={thumbs:!0,thumbImage:!1,thumbContainerClass:"owl-thumbs",thumbItemClass:"owl-thumb-item",moveThumbsInside:!1},e.prototype.listen=function(){var b=this.owl.options;b.thumbsPrerendered&&(this._thumbcontent._thumbcontainer=a("."+b.thumbContainerClass)),a(this._thumbcontent._thumbcontainer).on("click",this._thumbcontent._thumbcontainer.children(),a.proxy(function(c){this._identifier=a(c.target).closest("."+b.thumbContainerClass).data("slider-id");var d=a(c.target).parent().is(this._thumbcontent._thumbcontainer)?a(c.target).index():a(c.target).closest("."+b.thumbItemClass).index();b.thumbsPrerendered?a("[data-slider-id="+this._identifier+"]").trigger("to.owl.carousel",[d,b.dotsSpeed,!0]):this.owl.to(d,b.dotsSpeed),c.preventDefault()},this))},e.prototype.render=function(){var b=this.owl.options;b.thumbsPrerendered?(this._thumbcontent._thumbcontainer=a("."+b.thumbContainerClass),b.moveThumbsInside&&this._thumbcontent._thumbcontainer.appendTo(this.$element)):this._thumbcontent._thumbcontainer=a("<div>").addClass(b.thumbContainerClass).appendTo(this.$element);var c;if(b.thumbImage)for(c=0;c<this._thumbcontent.length;++c)this._thumbcontent._thumbcontainer.append("<button class="+b.thumbItemClass+'><img src="'+this._thumbcontent[c].attr("src")+'" alt="'+this._thumbcontent[c].attr("alt")+'" /></button>');else for(c=0;c<this._thumbcontent.length;++c)this._thumbcontent._thumbcontainer.append("<button class="+b.thumbItemClass+">"+this._thumbcontent[c]+"</button>")},e.prototype.setActive=function(){this.owl_currentitem=this.owl._current-this.owl._clones.length/2,this.owl_currentitem===this.owl._items.length&&(this.owl_currentitem=0);var b=this.owl.options,c=b.thumbsPrerendered?a("."+b.thumbContainerClass+'[data-slider-id="'+this._identifier+'"]'):this._thumbcontent._thumbcontainer;c.children().filter(".active").removeClass("active"),c.children().eq(this.owl_currentitem).addClass("active")},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this.owl.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Thumbs=e}(window.Zepto||__webpack_provided_window_dot_jQuery,window,document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function n(){return(n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}).apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,a=t&&"classList"in document.createElement("p"),o=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i=new n(t);try{e=new CustomEvent("LazyLoad::Initialized",{detail:{instance:i}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:i})}window.dispatchEvent(e)},s=function(n,t){return n.getAttribute("data-"+t)},u=function(n,t,e){var i="data-"+t;null!==e?n.setAttribute(i,e):n.removeAttribute(i)},d=function(n){return s(n,"ll-status")},f=function(n,t){return u(n,"ll-status",t)},_=function(n){return f(n,null)},g=function(n){return null===d(n)},v=function(n){return"native"===d(n)},p=["loading","loaded","applied","error"],b=function(n,t,e,i){n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},h=function(n,t){a?n.classList.add(t):n.className+=(n.className?" ":"")+t},m=function(n,t){a?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},E=function(n){return n.llTempImage},I=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},y=function(n,t){n&&(n.loadingCount+=t)},A=function(n,t){n&&(n.toLoadCount=t)},L=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},w=function(n,t,e){e&&n.setAttribute(t,e)},z=function(n,t){n.removeAttribute(t)},k=function(n){return!!n.llOriginalAttrs},O=function(n){if(!k(n)){var t={};t.src=n.getAttribute("src"),t.srcset=n.getAttribute("srcset"),t.sizes=n.getAttribute("sizes"),n.llOriginalAttrs=t}},C=function(n){if(k(n)){var t=n.llOriginalAttrs;w(n,"src",t.src),w(n,"srcset",t.srcset),w(n,"sizes",t.sizes)}},N=function(n,t){w(n,"sizes",s(n,t.data_sizes)),w(n,"srcset",s(n,t.data_srcset)),w(n,"src",s(n,t.data_src))},x=function(n){z(n,"src"),z(n,"srcset"),z(n,"sizes")},M=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&L(e).forEach(t)},R=function(n,t){L(n).forEach(t)},G={IMG:function(n,t){M(n,(function(n){O(n),N(n,t)})),O(n),N(n,t)},IFRAME:function(n,t){w(n,"src",s(n,t.data_src))},VIDEO:function(n,t){R(n,(function(n){w(n,"src",s(n,t.data_src))})),w(n,"poster",s(n,t.data_poster)),w(n,"src",s(n,t.data_src)),n.load()}},T=function(n,t){var e=G[n.tagName];e&&e(n,t)},D=function(n,t,e){y(e,1),h(n,t.class_loading),f(n,"loading"),b(t.callback_loading,n,e)},F={IMG:function(n,t){u(n,t.data_src,null),u(n,t.data_srcset,null),u(n,t.data_sizes,null),M(n,(function(n){u(n,t.data_srcset,null),u(n,t.data_sizes,null)}))},IFRAME:function(n,t){u(n,t.data_src,null)},VIDEO:function(n,t){u(n,t.data_src,null),u(n,t.data_poster,null),R(n,(function(n){u(n,t.data_src,null)}))}},V=function(n,t){u(n,t.data_bg_multi,null),u(n,t.data_bg_multi_hidpi,null)},j=function(n,t){var e=F[n.tagName];e?e(n,t):function(n,t){u(n,t.data_bg,null),u(n,t.data_bg_hidpi,null)}(n,t)},P=["IMG","IFRAME","VIDEO"],S=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||b(n.callback_finish,t)},U=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},$=function(n,t,e){n.removeEventListener(t,e)},q=function(n){return!!n.llEvLisnrs},H=function(n){if(q(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];$(n,e,i)}delete n.llEvLisnrs}},B=function(n,t,e){!function(n){delete n.llTempImage}(n),y(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),m(n,t.class_loading),t.unobserve_completed&&I(n,e)},J=function(n,t,e){var i=E(n)||n;q(i)||function(n,t,e){q(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";U(n,i,t),U(n,"error",e)}(i,(function(a){!function(n,t,e,i){var a=v(t);B(t,e,i),h(t,e.class_loaded),f(t,"loaded"),j(t,e),b(e.callback_loaded,t,i),a||S(e,i)}(0,n,t,e),H(i)}),(function(a){!function(n,t,e,i){var a=v(t);B(t,e,i),h(t,e.class_error),f(t,"error"),b(e.callback_error,t,i),a||S(e,i)}(0,n,t,e),H(i)}))},K=function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),J(n,t,e),function(n,t,e){var i=s(n,t.data_bg),a=s(n,t.data_bg_hidpi),r=o&&a?a:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),E(n).setAttribute("src",r),D(n,t,e))}(n,t,e),function(n,t,e){var i=s(n,t.data_bg_multi),a=s(n,t.data_bg_multi_hidpi),r=o&&a?a:i;r&&(n.style.backgroundImage=r,function(n,t,e){h(n,t.class_applied),f(n,"applied"),V(n,t),t.unobserve_completed&&I(n,t),b(t.callback_applied,n,e)}(n,t,e))}(n,t,e)},Q=function(n,t,e){!function(n){return P.indexOf(n.tagName)>-1}(n)?K(n,t,e):function(n,t,e){J(n,t,e),T(n,t),D(n,t,e)}(n,t,e)},W=["IMG","IFRAME"],X=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},Y=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){f(n,"entered"),function(n,t,e){t.unobserve_entered&&I(n,e)}(n,e,i),b(e.callback_enter,n,t,i),function(n){return p.indexOf(d(n))>=0}(n)||Q(n,e,i)}(n.target,n,t,e):function(n,t,e,i){g(n)||(function(n,t,e,i){e.cancel_on_exit&&function(n){return"loading"===d(n)}(n)&&"IMG"===n.tagName&&(H(n),function(n){M(n,(function(n){x(n)})),x(n)}(n),function(n){M(n,(function(n){C(n)})),C(n)}(n),m(n,e.class_loading),y(i,-1),_(n),b(e.callback_cancel,n,t,i))}(n,t,e,i),b(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},Z=function(n){return Array.prototype.slice.call(n)},nn=function(n){return n.container.querySelectorAll(n.elements_selector)},tn=function(n){return function(n){return"error"===d(n)}(n)},en=function(n,t){return function(n){return Z(n).filter(g)}(n||nn(t))},an=function(n,e){var a=c(n);this._settings=a,this.loadingCount=0,function(n,t){i&&!X(n)&&(t._observer=new IntersectionObserver((function(e){Y(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(a,this),function(n,e){t&&window.addEventListener("online",(function(){!function(n,t){var e;(e=nn(n),Z(e).filter(tn)).forEach((function(t){m(t,n.class_error),_(t)})),t.update()}(n,e)}))}(a,this),this.update(e)};return an.prototype={update:function(n){var t,a,o=this._settings,r=en(n,o);A(this,r.length),!e&&i?X(o)?function(n,t,e){n.forEach((function(n){-1!==W.indexOf(n.tagName)&&(n.setAttribute("loading","lazy"),function(n,t,e){J(n,t,e),T(n,t),j(n,t),f(n,"native")}(n,t,e))})),A(e,0)}(r,o,this):(a=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,a)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),nn(this._settings).forEach((function(n){delete n.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;en(n,e).forEach((function(n){I(n,t),Q(n,e,t)}))}},an.load=function(n,t){var e=c(t);Q(n,e)},an.resetStatus=function(n){_(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(an,window.lazyLoadOptions),an}));


/***/ }),

/***/ "./work/assets/configs.js":
/*!********************************!*\
  !*** ./work/assets/configs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const body = document.body;

/***/ }),

/***/ "./work/assets/helpers.js":
/*!********************************!*\
  !*** ./work/assets/helpers.js ***!
  \********************************/
/*! exports provided: notification, findParent, scrollMax, _isMobile, formatNumber, finalPrice, initNotifyStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notification", function() { return notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findParent", function() { return findParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollMax", function() { return scrollMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isMobile", function() { return _isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalPrice", function() { return finalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNotifyStyles", function() { return initNotifyStyles; });
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_0__);


function notification(type) {
    $('body').notify({
        message: 'Hello World',
        type: type
    });
}

const findParent = (el, className) => {
    let _this = el;

    while (_this && !_this.classList.contains(className)) {
        _this = _this.parentNode;

        if (_this === document.body) {
            _this = null;
        }
    }

    return _this;
};

const scrollMax = (elmProto, position) => {
    if (position == 'top') {
        return elmProto.scrollHeight - elmProto.clientHeight;
    } else if (position == 'left') {
        return elmProto.scrollWidth - elmProto.clientWidth;
    }
};

const _isMobile = () => {
    let _laptopXs = '860';
    let _width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    let _isMobileAttr = false;
    if (_width <= _laptopXs) {
        _isMobileAttr = true;
    }

    return _isMobileAttr;
};

function formatNumber(number, n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = Number(number).toFixed(Math.max(0, ~~n)).toLocaleString();

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
}

function finalPrice() {
    let items = $('.item--price--block-items .item--price--block-total--item span[data-type="option-item-price"]');
    if (items.length > 0) {
        let number = 0;
        let finalPrice = 0;
        $.each(items, function () {
            number = parseInt($(this).attr('data-price').replace(/\D/g, ""), 10);
            finalPrice = finalPrice + number;
        });

        $('.item--price--block-total span[data-type="price"]').empty().append(formatNumber(finalPrice, 0, 3, ' ') + ' ₸');
    }
}

window.onresize = function () {
    updateCollapcedNavMenu();
};

let arrowWidth = 15;
$(document).on('change', 'select.resizeselect', function () {
    let $this = $(this);

    // create test element
    let text = $this.find("option:selected").text();
    let $test = $("<span>").html(text).css({
        "font-size": $this.css("font-size"), // ensures same size text
        "visibility": "hidden" // prevents FOUC
    });

    // add to parent, get width, and get out
    $test.appendTo($this.parent());
    let width = $test.width();
    $test.remove();

    // set select width
    $this.width(width + arrowWidth);
});

(function () {
    $('select.nice-select').niceSelect();

    if (!window['lazyLoadInstance']) {
        window['lazyLoadInstance'] = new LazyLoad({
            // Your custom settings go here
        });
    }

    initNotifyStyles();
    window.notify = $.notify; //making it global for production (NK)


    if (typeof window.scrollbar_cart_dropdown_items_init == 'undefined') {
        window.scrollbar_cart_dropdown_items_init = true;
        if (!$(".header .navbar ul.dropdown--cart-items--ul").hasClass('mCustomScrollbar')) {
            $(".header .navbar ul.dropdown--cart-items--ul").mCustomScrollbar();
        }
    }

    if (typeof window.scrollbar_cart_items_init == 'undefined') {
        window.scrollbar_cart_items_init = true;
        if (!$(".cart-items--block .cart-items--block-delivery--items-mini").hasClass('mCustomScrollbar')) {
            $(".cart-items--block .cart-items--block-delivery--items-mini").mCustomScrollbar();
        }
    }

    if (document.location.pathname.indexOf("login-notify-error") >= 1) {
        $.notify({
            title: 'Ошибка',
            message: 'Неправильный пароль'
        }, {
            style: 'error',
            autoHide: false,
            clickToHide: false
        });

        $.notify({
            title: 'У вас новое сообщение',
            message: 'Нажмите чтобы прочитать'
        }, {
            style: 'success',
            autoHide: false,
            clickToHide: false
        });

        $.notify({
            title: 'Уведомление',
            message: 'Какое то сообщение'
        }, {
            style: 'notice',
            autoHide: false,
            clickToHide: false
        });
    }

    $('.phone-mask').mask('+7 (000) 000-00-00', { clearIfNotMatch: true });
    $('.sms-code-mask').mask('0000');
    $('.cvc-code-mask').mask('000');

    $('.card-code-mask').mask('0000 0000 0000 0000');
    $('.card-month-code-mask').mask('00/00', { placeholder: "MM/YY" });

    setTimeout(() => $('select.resizeselect').trigger('change'), 0);

    openMenu();

    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();
    });

    $('.modal').on('shown.bs.modal', function (e) {
        $('html').addClass('freezePage');
        $('body').addClass('freezePage');
    });

    $('.modal').on('hidden.bs.modal', function (e) {
        $('html').removeClass('freezePage');
        $('body').removeClass('freezePage');
    });

    $('.header .navbar-nav .nav-search').on('click', function (e) {
        if ($('.header-search').is(':visible')) {
            //$('.header-search').removeClass("header-search-show")
            $('.header-search').delay(100).fadeOut();
        } else {
            $('.header-search').delay(100).fadeIn();
            //$('.header-search').addClass("header-search-show")
        }
    });
    /*
        $('.category-side--ul li a, .category-side--ul-sub li a').on('click', function(e) {
            e.stopPropagation();
            var parent = $(this).parent();
            var subList = parent.children('.category-side--ul-sub');
    
            if (subList.length > 0) {
                if (subList.hasClass('open')) {
                    parent.removeClass('open');
                    subList.removeClass('open');
                    subList.hide("slow", function () {
                    });
                } else {
                    subList.show("slow", function () {
                    });
                    parent.addClass('open');
                    subList.addClass('open');
                }
    
                return false;
            }
        });
    */

    centerInCartItems();
})();

function centerInCartItems() {
    if ($('body').hasClass('body__cart')) {
        centerItVariableWidth('.cart-stepper .col.col-lg-3.active', '.cart-stepper');
    }
}

function centerItVariableWidth(target, outer) {
    var out = $(outer);
    var tar = $(target);
    var x = out.width();
    var y = tar.outerWidth(true);
    var z = tar.index();
    var q = 0;
    var m = out.find('.col.col-lg-3');
    //Just need to add up the width of all the elements before our target.
    for (var i = 0; i < z; i++) {
        q += $(m[i]).outerWidth(true);
    }
    out.scrollLeft(Math.max(0, q - (x - y) / 2));
}

function addImportantStyle(element, style) {
    if ($(element).attr('style') !== '') {
        $(element).attr('style', $(element).attr('style') + ';' + style);
    } else {
        $(element).attr('style', style);
    }
}

function updateCollapcedNavMenu() {
    if ($('#modal-navmenu ul.navbar-nav').length > 0) {

        let headerContainer = $('#wrap-wrap .header .container');

        if (!_isMobile()) {
            let navMargin = parseInt(headerContainer.css("margin-right"));
            let navHeight = 150;

            $('#modal-navmenu ul.navbar-nav li').each(function () {
                navHeight += $(this).outerHeight(true);
            });

            $('#modal-navmenu ul.navbar-nav').each(function () {
                this.style.setProperty('margin-right', navMargin + 'px', 'important');
                this.style.setProperty('height', navHeight + 'px', '');
            });
            //$( '#modal-navmenu ul.navbar-nav').each(function () {});
        }
    }
}

function openMenu() {
    $(".header .navbar-toggler").on("click", function (e) {
        //if (_isMobile()) {
        e.preventDefault();

        let target = $(this).data('target');
        let modalNav = $('#modal-navmenu');
        let header = $('.header');

        if ($(this).hasClass('collapsed')) {
            $('.modal').modal('hide');
            window.scrollTo(0, 0);

            let clonned = $(target).clone();
            $(clonned).addClass('show').addClass('d-flex').addClass('align-items-start').addClass('flex-column').addClass('flex-wrap');

            modalNav.find('.modal-body').empty().append(clonned);

            //modalNav.find('.modal-header').empty().append(header.clone());
            //modalNav.find('.modal-header .navbar-toggler').removeClass('collapsed');

            modalNav.find('a.nav-link').removeClass('text-uppercase');
            modalNav.modal('show');

            if (!_isMobile()) {
                modalNav.css('top', header.outerHeight() + 'px');
            }

            $('.modal-backdrop').remove();
            $('.header .navbar-toggler').removeClass('collapsed');

            updateCollapcedNavMenu();

            //let heightFooter = modalNav.find('.navbar-footer').height();
            //modalNav.find('.modal-body .navbar-collapse').css('height', 'calc(100vh - ' + (heightFooter ) + 'px)')
        } else {
            modalNav.modal('hide');
            $(this).addClass('collapsed');
        }
        //}

        return false;
    });
}

function initNotifyStyles() {
    $.notify.addStyle('error', {
        html: "<div class='notify--message notify--error'>" + "<div class='clearfix' style='display: flex; width: 100%;'>" + "<div class='notify--icon'>" + "<span class='icon icon--notify-error'></span>" + "</div>" + "<div class='notify--text'>" + "<span class='notify--text-title' data-notify-html='title' />" + "<span class='notify--text-message' data-notify-html='message' />" + "</div>" + "<div class='notify--buttons'>" + "<span class='icon icon--notify-close'>" + "</div>" + "</div>" + "</div>"
    });

    $.notify.addStyle('success', {
        html: "<div class='notify--message notify--success'>" + "<div class='clearfix' style='display: flex; width: 100%;'>" + "<div class='notify--icon'>" + "<span class='icon icon--notify-success'></span>" + "</div>" + "<div class='notify--text'>" + "<span class='notify--text-title' data-notify-html='title' />" + "<span class='notify--text-message' data-notify-html='message' />" + "</div>" + "<div class='notify--buttons'>" + "<span class='icon icon--notify-close'>" + "</div>" + "</div>" + "</div>"
    });

    $.notify.addStyle('notice', {
        html: "<div class='notify--message notify--notice'>" + "<div class='clearfix' style='display: flex; width: 100%;'>" + "<div class='notify--icon'>" + "<span class='icon icon--notify-notice'></span>" + "</div>" + "<div class='notify--text'>" + "<span class='notify--text-title' data-notify-html='title' />" + "<span class='notify--text-message' data-notify-html='message' />" + "</div>" + "<div class='notify--buttons'>" + "<span class='icon icon--notify-close'>" + "</div>" + "</div>" + "</div>"
    });

    //listen for click events from this style
    $(document).on('click', '.notifyjs-error-base .notify--buttons .icon--notify-close, .notifyjs-notice-base .notify--buttons .icon--notify-close, .notifyjs-success-base .notify--buttons .icon--notify-close', function () {
        //programmatically trigger propogating hide event
        $(this).trigger('notify-hide');
    });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/assets/main.js":
/*!*****************************!*\
  !*** ./work/assets/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs */ "./work/assets/configs.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_configs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "bootstrap");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_prefixfree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/prefixfree */ "./work/assets/vendor/prefixfree.js");
/* harmony import */ var _vendor_prefixfree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_prefixfree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_jquery_nice_select_js_jquery_nice_select_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/jquery/nice-select/js/jquery.nice-select.min */ "./work/assets/vendor/jquery/nice-select/js/jquery.nice-select.min.js");
/* harmony import */ var _vendor_jquery_nice_select_js_jquery_nice_select_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_nice_select_js_jquery_nice_select_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./work/assets/helpers.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules */ "./work/modules/index.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts */ "./work/parts/index.js");



//import './vendor/jquery/notify.min';
//import './vendor/jquery/scroll/jquery.mCustomScrollbar.concat.min';


//import PhotoSwipe from './vendor/jquery/photoswipe/photoswipe';
//import './vendor/jquery/slick/slick';





/***/ }),

/***/ "./work/assets/vendor/jquery/nice-select/js/jquery.nice-select.min.js":
/*!****************************************************************************!*\
  !*** ./work/assets/vendor/jquery/nice-select/js/jquery.nice-select.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
                var n = e(this),
                    i = n.data("display");s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
            });
        }if ("string" == typeof t) return "update" == t ? this.each(function () {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");n.length && (n.remove(), s(t), i && t.next().trigger("click"));
        }) : "destroy" == t ? (this.each(function () {
            var t = e(this),
                s = e(this).next(".nice-select");s.length && (s.remove(), t.css("display", ""));
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;this.hide(), this.each(function () {
            var t = e(this);t.next().hasClass("nice-select") || s(t);
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
            var s = e(this);e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
        }), e(document).on("click.nice_select", function (t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
            var s = e(this),
                n = s.closest(".nice-select");n.find(".selected").removeClass("selected"), s.addClass("selected");var i = s.data("display") || s.text();n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
        }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
                } else s.trigger("click");return !1;
            }if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
                } else s.trigger("click");return !1;
            }if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
        });var n = document.createElement("a").style;return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
    };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/assets/vendor/jquery/photoswipe/photoswipe-ui-default.js":
/*!***********************************************************************!*\
  !*** ./work/assets/vendor/jquery/photoswipe/photoswipe-ui-default.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this, function () {

	'use strict';

	var PhotoSwipeUI_Default = function (pswp, framework) {

		var ui = this;
		var _overlayUIUpdated = false,
		    _controlsVisible = true,
		    _fullscrenAPI,
		    _controls,
		    _captionContainer,
		    _fakeCaptionContainer,
		    _indexIndicator,
		    _shareButton,
		    _shareModal,
		    _shareModalHidden = true,
		    _initalCloseOnScrollValue,
		    _isIdle,
		    _listen,
		    _loadingIndicator,
		    _loadingIndicatorHidden,
		    _loadingIndicatorTimeout,
		    _galleryHasOneSlide,
		    _options,
		    _defaultUIOptions = {
			barsSize: { top: 44, bottom: 'auto' },
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
			timeToIdle: 4000,
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s

			addCaptionHTMLFn: function (item, captionEl /*, isFake */) {
				if (!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl: true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [{ id: 'facebook', label: 'Share on Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}' }, { id: 'twitter', label: 'Tweet', url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}' }, { id: 'pinterest', label: 'Pin it', url: 'http://www.pinterest.com/pin/create/button/' + '?url={{url}}&media={{image_url}}&description={{text}}' }, { id: 'download', label: 'Download image', url: '{{raw_image_url}}', download: true }],
			getImageURLForShare: function () /* shareButtonData */{
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function () /* shareButtonData */{
				return window.location.href;
			},
			getTextForShare: function () /* shareButtonData */{
				return pswp.currItem.title || '';
			},

			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		    _blockControlsTap,
		    _blockControlsTapTimeout;

		var _onControlsTap = function (e) {
			if (_blockControlsTap) {
				return true;
			}

			e = e || window.event;

			if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}

			var target = e.target || e.srcElement,
			    uiElement,
			    clickedClass = target.getAttribute('class') || '',
			    found;

			for (var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if (uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name) > -1) {
					uiElement.onTap();
					found = true;
				}
			}

			if (found) {
				if (e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function () {
					_blockControlsTap = false;
				}, tapDelay);
			}
		},
		    _fitControlsInViewport = function () {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		    _togglePswpClass = function (el, cName, add) {
			framework[(add ? 'add' : 'remove') + 'Class'](el, 'pswp__' + cName);
		},


		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function () {
			var hasOneSlide = _options.getNumItemsFn() === 1;

			if (hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		    _toggleShareModalClass = function () {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		    _toggleShareModal = function () {

			_shareModalHidden = !_shareModalHidden;

			if (!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function () {
					if (!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function () {
					if (_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}

			if (!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},
		    _openWindowPopup = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if (!target.href) {
				return false;
			}

			if (target.hasAttribute('download')) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,' + 'location=yes,width=550,height=420,top=100,left=' + (window.screen ? Math.round(screen.width / 2 - 275) : 100));

			if (!_shareModalHidden) {
				_toggleShareModal();
			}

			return false;
		},
		    _updateShareURLs = function () {
			var shareButtonOut = '',
			    shareButtonData,
			    shareURL,
			    image_url,
			    page_url,
			    share_text;

			for (var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url)).replace('{{image_url}}', encodeURIComponent(image_url)).replace('{{raw_image_url}}', image_url).replace('{{text}}', encodeURIComponent(share_text));

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" ' + 'class="pswp__share--' + shareButtonData.id + '"' + (shareButtonData.download ? 'download' : '') + '>' + shareButtonData.label + '</a>';

				if (_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;
		},
		    _hasCloseClass = function (target) {
			for (var i = 0; i < _options.closeElClasses.length; i++) {
				if (framework.hasClass(target, 'pswp__' + _options.closeElClasses[i])) {
					return true;
				}
			}
		},
		    _idleInterval,
		    _idleTimer,
		    _idleIncrement = 0,
		    _onIdleMouseMove = function () {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if (_isIdle) {
				ui.setIdle(false);
			}
		},
		    _onMouseLeaveWindow = function (e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function () {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		    _setupFullscreenAPI = function () {
			if (_options.fullscreenEl && !framework.features.isOldAndroid) {
				if (!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if (_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		    _setupLoadingIndicator = function () {
			// Setup loading indicator
			if (_options.preloaderEl) {

				_toggleLoadingIndicator(true);

				_listen('beforeChange', function () {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function () {

						if (pswp.currItem && pswp.currItem.loading) {

							if (!pswp.allowProgressiveImg() || pswp.currItem.img && !pswp.currItem.img.naturalWidth) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false);
								// items-controller.js function allowProgressiveImg
							}
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}
					}, _options.loadingIndicatorDelay);
				});
				_listen('imageLoadComplete', function (index, item) {
					if (pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});
			}
		},
		    _toggleLoadingIndicator = function (hide) {
			if (_loadingIndicatorHidden !== hide) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		    _applyNavBarGaps = function (item) {
			var gap = item.vGap;

			if (_fitControlsInViewport()) {

				var bars = _options.barsSize;
				if (_options.captionEl && bars.bottom === 'auto') {
					if (!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild(framework.createEl('pswp__caption__center'));
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize, 10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}

				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		    _setupIdle = function () {
			// Hide controls when mouse is used
			if (_options.timeToIdle) {
				_listen('mouseUsed', function () {

					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function () {
						_idleIncrement++;
						if (_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		    _setupHidingControlsDuringGestures = function () {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function (now) {
				if (_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if (!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose', function (now) {
				if (_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if (pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function () {
				pinchControlsHidden = false;
				if (pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});
		};

		var _uiElements = [{
			name: 'caption',
			option: 'captionEl',
			onInit: function (el) {
				_captionContainer = el;
			}
		}, {
			name: 'share-modal',
			option: 'shareEl',
			onInit: function (el) {
				_shareModal = el;
			},
			onTap: function () {
				_toggleShareModal();
			}
		}, {
			name: 'button--share',
			option: 'shareEl',
			onInit: function (el) {
				_shareButton = el;
			},
			onTap: function () {
				_toggleShareModal();
			}
		}, {
			name: 'button--zoom',
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		}, {
			name: 'counter',
			option: 'counterEl',
			onInit: function (el) {
				_indexIndicator = el;
			}
		}, {
			name: 'button--close',
			option: 'closeEl',
			onTap: pswp.close
		}, {
			name: 'button--arrow--left',
			option: 'arrowEl',
			onTap: pswp.prev
		}, {
			name: 'button--arrow--right',
			option: 'arrowEl',
			onTap: pswp.next
		}, {
			name: 'button--fs',
			option: 'fullscreenEl',
			onTap: function () {
				if (_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			}
		}, {
			name: 'preloader',
			option: 'preloaderEl',
			onInit: function (el) {
				_loadingIndicator = el;
			}
		}];

		var _setupUIElements = function () {
			var item, classAttr, uiElement;

			var loopThroughChildElements = function (sChildren) {
				if (!sChildren) {
					return;
				}

				var l = sChildren.length;
				for (var i = 0; i < l; i++) {
					item = sChildren[i];
					classAttr = item.className;

					for (var a = 0; a < _uiElements.length; a++) {
						uiElement = _uiElements[a];

						if (classAttr.indexOf('pswp__' + uiElement.name) > -1) {

							if (_options[uiElement.option]) {
								// if element is not disabled from options

								framework.removeClass(item, 'pswp__element--disabled');
								if (uiElement.onInit) {
									uiElement.onInit(item);
								}

								//item.style.display = 'block';
							} else {
								framework.addClass(item, 'pswp__element--disabled');
								//item.style.display = 'none';
							}
						}
					}
				}
			};
			loopThroughChildElements(_controls.children);

			var topBar = framework.getChildByClass(_controls, 'pswp__top-bar');
			if (topBar) {
				loopThroughChildElements(topBar.children);
			}
		};

		ui.init = function () {

			// extend options
			framework.extend(pswp.options, _defaultUIOptions, true);

			// create local link for fast access
			_options = pswp.options;

			// find pswp__ui element
			_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

			// create local link
			_listen = pswp.listen;

			_setupHidingControlsDuringGestures();

			// update controls when slides change
			_listen('beforeChange', ui.update);

			// toggle zoom on double-tap
			_listen('doubleTap', function (point) {
				var initialZoomLevel = pswp.currItem.initialZoomLevel;
				if (pswp.getZoomLevel() !== initialZoomLevel) {
					pswp.zoomTo(initialZoomLevel, point, 333);
				} else {
					pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
				}
			});

			// Allow text selection in caption
			_listen('preventDragEvent', function (e, isDown, preventObj) {
				var t = e.target || e.srcElement;
				if (t && t.getAttribute('class') && e.type.indexOf('mouse') > -1 && (t.getAttribute('class').indexOf('__caption') > 0 || /(SMALL|STRONG|EM)/i.test(t.tagName))) {
					preventObj.prevent = false;
				}
			});

			// bind events for UI
			_listen('bindEvents', function () {
				framework.bind(_controls, 'pswpTap click', _onControlsTap);
				framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

				if (!pswp.likelyTouchDevice) {
					framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
				}
			});

			// unbind events for UI
			_listen('unbindEvents', function () {
				if (!_shareModalHidden) {
					_toggleShareModal();
				}

				if (_idleInterval) {
					clearInterval(_idleInterval);
				}
				framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
				framework.unbind(document, 'mousemove', _onIdleMouseMove);
				framework.unbind(_controls, 'pswpTap click', _onControlsTap);
				framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
				framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

				if (_fullscrenAPI) {
					framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					if (_fullscrenAPI.isFullscreen()) {
						_options.hideAnimationDuration = 0;
						_fullscrenAPI.exit();
					}
					_fullscrenAPI = null;
				}
			});

			// clean up things when gallery is destroyed
			_listen('destroy', function () {
				if (_options.captionEl) {
					if (_fakeCaptionContainer) {
						_controls.removeChild(_fakeCaptionContainer);
					}
					framework.removeClass(_captionContainer, 'pswp__caption--empty');
				}

				if (_shareModal) {
					_shareModal.children[0].onclick = null;
				}
				framework.removeClass(_controls, 'pswp__ui--over-close');
				framework.addClass(_controls, 'pswp__ui--hidden');
				ui.setIdle(false);
			});

			if (!_options.showAnimationDuration) {
				framework.removeClass(_controls, 'pswp__ui--hidden');
			}
			_listen('initialZoomIn', function () {
				if (_options.showAnimationDuration) {
					framework.removeClass(_controls, 'pswp__ui--hidden');
				}
			});
			_listen('initialZoomOut', function () {
				framework.addClass(_controls, 'pswp__ui--hidden');
			});

			_listen('parseVerticalMargin', _applyNavBarGaps);

			_setupUIElements();

			if (_options.shareEl && _shareButton && _shareModal) {
				_shareModalHidden = true;
			}

			_countNumItems();

			_setupIdle();

			_setupFullscreenAPI();

			_setupLoadingIndicator();
		};

		ui.setIdle = function (isIdle) {
			_isIdle = isIdle;
			_togglePswpClass(_controls, 'ui--idle', isIdle);
		};

		ui.update = function () {
			// Don't update UI if it's hidden
			if (_controlsVisible && pswp.currItem) {

				ui.updateIndexIndicator();

				if (_options.captionEl) {
					_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

					_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
				}

				_overlayUIUpdated = true;
			} else {
				_overlayUIUpdated = false;
			}

			if (!_shareModalHidden) {
				_toggleShareModal();
			}

			_countNumItems();
		};

		ui.updateFullscreen = function (e) {

			if (e) {
				// some browsers change window scroll position during the fullscreen
				// so PhotoSwipe updates it just in case
				setTimeout(function () {
					pswp.setScrollOffset(0, framework.getScrollY());
				}, 50);
			}

			// toogle pswp--fs class on root element
			framework[(_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class'](pswp.template, 'pswp--fs');
		};

		ui.updateIndexIndicator = function () {
			if (_options.counterEl) {
				_indexIndicator.innerHTML = pswp.getCurrentIndex() + 1 + _options.indexIndicatorSep + _options.getNumItemsFn();
			}
		};

		ui.onGlobalTap = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			if (_blockControlsTap) {
				return;
			}

			if (e.detail && e.detail.pointerType === 'mouse') {

				// close gallery if clicked outside of the image
				if (_hasCloseClass(target)) {
					pswp.close();
					return;
				}

				if (framework.hasClass(target, 'pswp__img')) {
					if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
						if (_options.clickToCloseNonZoomable) {
							pswp.close();
						}
					} else {
						pswp.toggleDesktopZoom(e.detail.releasePoint);
					}
				}
			} else {

				// tap anywhere (except buttons) to toggle visibility of controls
				if (_options.tapToToggleControls) {
					if (_controlsVisible) {
						ui.hideControls();
					} else {
						ui.showControls();
					}
				}

				// tap to close gallery
				if (_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target))) {
					pswp.close();
					return;
				}
			}
		};
		ui.onMouseOver = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			// add class when mouse is over an element that should close the gallery
			_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
		};

		ui.hideControls = function () {
			framework.addClass(_controls, 'pswp__ui--hidden');
			_controlsVisible = false;
		};

		ui.showControls = function () {
			_controlsVisible = true;
			if (!_overlayUIUpdated) {
				ui.update();
			}
			framework.removeClass(_controls, 'pswp__ui--hidden');
		};

		ui.supportsFullscreen = function () {
			var d = document;
			return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
		};

		ui.getFullscreenAPI = function () {
			var dE = document.documentElement,
			    api,
			    tF = 'fullscreenchange';

			if (dE.requestFullscreen) {
				api = {
					enterK: 'requestFullscreen',
					exitK: 'exitFullscreen',
					elementK: 'fullscreenElement',
					eventK: tF
				};
			} else if (dE.mozRequestFullScreen) {
				api = {
					enterK: 'mozRequestFullScreen',
					exitK: 'mozCancelFullScreen',
					elementK: 'mozFullScreenElement',
					eventK: 'moz' + tF
				};
			} else if (dE.webkitRequestFullscreen) {
				api = {
					enterK: 'webkitRequestFullscreen',
					exitK: 'webkitExitFullscreen',
					elementK: 'webkitFullscreenElement',
					eventK: 'webkit' + tF
				};
			} else if (dE.msRequestFullscreen) {
				api = {
					enterK: 'msRequestFullscreen',
					exitK: 'msExitFullscreen',
					elementK: 'msFullscreenElement',
					eventK: 'MSFullscreenChange'
				};
			}

			if (api) {
				api.enter = function () {
					// disable close-on-scroll in fullscreen
					_initalCloseOnScrollValue = _options.closeOnScroll;
					_options.closeOnScroll = false;

					if (this.enterK === 'webkitRequestFullscreen') {
						pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
					} else {
						return pswp.template[this.enterK]();
					}
				};
				api.exit = function () {
					_options.closeOnScroll = _initalCloseOnScrollValue;

					return document[this.exitK]();
				};
				api.isFullscreen = function () {
					return document[this.elementK];
				};
			}

			return api;
		};
	};
	return PhotoSwipeUI_Default;
});

/***/ }),

/***/ "./work/assets/vendor/prefixfree.js":
/*!******************************************!*\
  !*** ./work/assets/vendor/prefixfree.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
(function () {
  function m(a, b) {
    return [].slice.call((b || document).querySelectorAll(a));
  }if (window.addEventListener) {
    var e = window.StyleFix = { link: function (a) {
        var b = a.href || a.getAttribute("data-href");try {
          if (!b || "stylesheet" !== a.rel || a.hasAttribute("data-noprefix")) return;
        } catch (p) {
          return;
        }var d = b.replace(/[^\/]+$/, ""),
            f = (/^[a-z]{3,10}:/.exec(d) || [""])[0],
            h = (/^[a-z]{3,10}:\/\/[^\/]+/.exec(d) || [""])[0],
            k = /^([^?]*)\??/.exec(b)[1],
            g = a.parentNode,
            c = new XMLHttpRequest(),
            l;c.onreadystatechange = function () {
          4 === c.readyState && l();
        };l = function () {
          var b = c.responseText;if (b && a.parentNode && (!c.status || 400 > c.status || 600 < c.status)) {
            if ((b = e.fix(b, !0, a)) && d) var b = b.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function (b, a, c) {
              return (/^([a-z]{3,10}:|#)/i.test(c) ? b : /^\/\//.test(c) ? 'url("' + f + c + '")' : /^\//.test(c) ? 'url("' + h + c + '")' : /^\?/.test(c) ? 'url("' + k + c + '")' : 'url("' + d + c + '")'
              );
            }),
                n = d.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1"),
                b = b.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + n, "gi"), "$1");n = document.createElement("style");n.textContent = "/*# sourceURL=" + a.getAttribute("href") + " */\n/*@ sourceURL=" + a.getAttribute("href") + " */\n" + b;n.media = a.media;n.disabled = a.disabled;n.setAttribute("data-href", a.getAttribute("href"));a.id && (n.id = a.id);g.insertBefore(n, a);g.removeChild(a);n.media = a.media;
          }
        };try {
          c.open("GET", b), c.send(null);
        } catch (p) {
          "undefined" != typeof XDomainRequest && (c = new XDomainRequest(), c.onerror = c.onprogress = function () {}, c.onload = l, c.open("GET", b), c.send(null));
        }a.setAttribute("data-inprogress", "");
      }, styleElement: function (a) {
        if (!a.hasAttribute("data-noprefix")) {
          var b = a.disabled;a.textContent = e.fix(a.textContent, !0, a);a.disabled = b;
        }
      }, styleAttribute: function (a) {
        var b = a.getAttribute("style"),
            b = e.fix(b, !1, a);a.setAttribute("style", b);
      }, process: function () {
        m('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);m("style").forEach(StyleFix.styleElement);m("[style]").forEach(StyleFix.styleAttribute);
      }, register: function (a, b) {
        (e.fixers = e.fixers || []).splice(void 0 === b ? e.fixers.length : b, 0, a);
      }, fix: function (a, b, d) {
        if (e.fixers) for (var f = 0; f < e.fixers.length; f++) a = e.fixers[f](a, b, d) || a;return a;
      }, camelCase: function (a) {
        return a.replace(/-([a-z])/g, function (b, a) {
          return a.toUpperCase();
        }).replace("-", "");
      }, deCamelCase: function (a) {
        return a.replace(/[A-Z]/g, function (b) {
          return "-" + b.toLowerCase();
        });
      } };(function () {
      setTimeout(function () {
        m('link[rel="stylesheet"]').forEach(StyleFix.link);
      }, 10);document.addEventListener("DOMContentLoaded", StyleFix.process, !1);
    })();
  }
})();
(function (m) {
  function e(b, d, f, h, k) {
    b = a[b];b.length && (b = RegExp(d + "(" + b.join("|") + ")" + f, "gi"), k = k.replace(b, h));return k;
  }if (window.StyleFix && window.getComputedStyle) {
    var a = window.PrefixFree = { prefixCSS: function (b, d, f) {
        var h = a.prefix;-1 < a.functions.indexOf("linear-gradient") && (b = b.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig, function (b, a, d, f) {
          return a + (d || "") + "linear-gradient(" + (90 - f) + "deg";
        }));b = e("functions", "(\\s|:|,)", "\\s*\\(", "$1" + h + "$2(", b);b = e("keywords", "(\\s|:)", "(\\s|;|\\}|$)", "$1" + h + "$2$3", b);b = e("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + h + "$2:", b);if (a.properties.length) {
          var k = RegExp("\\b(" + a.properties.join("|") + ")(?!:)", "gi");b = e("valueProperties", "\\b", ":(.+?);", function (a) {
            return a.replace(k, h + "$1");
          }, b);
        }d && (b = e("selectors", "", "\\b", a.prefixSelector, b), b = e("atrules", "@", "\\b", "@" + h + "$1", b));b = b.replace(RegExp("-" + h, "g"), "-");return b = b.replace(/-\*-(?=[a-z]+)/gi, a.prefix);
      }, property: function (b) {
        return (0 <= a.properties.indexOf(b) ? a.prefix : "") + b;
      }, value: function (b, d) {
        b = e("functions", "(^|\\s|,)", "\\s*\\(", "$1" + a.prefix + "$2(", b);b = e("keywords", "(^|\\s)", "(\\s|$)", "$1" + a.prefix + "$2$3", b);0 <= a.valueProperties.indexOf(d) && (b = e("properties", "(^|\\s|,)", "($|\\s|,)", "$1" + a.prefix + "$2$3", b));return b;
      }, prefixSelector: function (b) {
        return a.selectorMap[b] || b;
      }, prefixProperty: function (b, d) {
        var f = a.prefix + b;return d ? StyleFix.camelCase(f) : f;
      } };(function () {
      var b = {},
          d = [],
          f = getComputedStyle(document.documentElement, null),
          h = document.createElement("div").style,
          k = function (a) {
        if ("-" === a.charAt(0)) {
          d.push(a);a = a.split("-");var c = a[1];for (b[c] = ++b[c] || 1; 3 < a.length;) a.pop(), c = a.join("-"), StyleFix.camelCase(c) in h && -1 === d.indexOf(c) && d.push(c);
        }
      };if (f && 0 < f.length) for (var g = 0; g < f.length; g++) k(f[g]);else for (var c in f) k(StyleFix.deCamelCase(c));var g = 0,
          e,
          p;for (p in b) f = b[p], g < f && (e = p, g = f);a.prefix = "-" + e + "-";a.Prefix = StyleFix.camelCase(a.prefix);a.properties = [];for (g = 0; g < d.length; g++) c = d[g], 0 === c.indexOf(a.prefix) && (e = c.slice(a.prefix.length), StyleFix.camelCase(e) in h || a.properties.push(e));
      !("Ms" != a.Prefix || "transform" in h || "MsTransform" in h) && "msTransform" in h && a.properties.push("transform", "transform-origin");a.properties.sort();
    })();(function () {
      function b(a, b) {
        e[b] = "";e[b] = a;return !!e[b];
      }var d = { "linear-gradient": { property: "backgroundImage", params: "red, teal" }, calc: { property: "width", params: "1px + 5%" }, element: { property: "backgroundImage", params: "#foo" }, "cross-fade": { property: "backgroundImage", params: "url(a.png), url(b.png), 50%" }, "image-set": { property: "backgroundImage", params: "url(a.png) 1x, url(b.png) 2x" } };
      d["repeating-linear-gradient"] = d["repeating-radial-gradient"] = d["radial-gradient"] = d["linear-gradient"];var f = { initial: "color", grab: "cursor", grabbing: "cursor", "zoom-in": "cursor", "zoom-out": "cursor", box: "display", flexbox: "display", "inline-flexbox": "display", flex: "display", "inline-flex": "display", grid: "display", "inline-grid": "display", "max-content": "width", "min-content": "width", "fit-content": "width", "fill-available": "width", "contain-floats": "width" };a.functions = [];a.keywords = [];var e = document.createElement("div").style,
          k;for (k in d) {
        var g = d[k],
            c = g.property,
            g = k + "(" + g.params + ")";!b(g, c) && b(a.prefix + g, c) && a.functions.push(k);
      }for (var l in f) c = f[l], !b(l, c) && b(a.prefix + l, c) && a.keywords.push(l);
    })();(function () {
      function b(a) {
        h.textContent = a + "{}";return !!h.sheet.cssRules.length;
      }var d = { ":any-link": null, "::backdrop": null, ":fullscreen": null, ":full-screen": ":fullscreen", "::placeholder": null, ":placeholder": "::placeholder", "::input-placeholder": "::placeholder", ":input-placeholder": "::placeholder", ":read-only": null, ":read-write": null,
        "::selection": null },
          e = { keyframes: "name", viewport: null, document: 'regexp(".")' };a.selectors = [];a.selectorMap = {};a.atrules = [];var h = m.appendChild(document.createElement("style")),
          k;for (k in d) {
        var g = d[k] || k,
            c = k.replace(/::?/, function (b) {
          return b + a.prefix;
        });!b(g) && b(c) && (a.selectors.push(g), a.selectorMap[g] = c);
      }for (var l in e) d = l + " " + (e[l] || ""), !b("@" + d) && b("@" + a.prefix + d) && a.atrules.push(l);m.removeChild(h);
    })();a.valueProperties = ["transition", "transition-property", "will-change"];m.className += " " + a.prefix;
    StyleFix.register(a.prefixCSS);
  }
})(document.documentElement);

/***/ }),

/***/ "./work/modules/index.js":
/*!*******************************!*\
  !*** ./work/modules/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./work/parts/cart/delivery/index.js":
/*!*******************************************!*\
  !*** ./work/parts/cart/delivery/index.js ***!
  \*******************************************/
/*! exports provided: OpenDeliveryOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenDeliveryOptions", function() { return OpenDeliveryOptions; });
class OpenDeliveryOptions {
    constructor(optionalOptions = {}) {
        if (typeof window.open_delivery_panel_checkbox_init == 'undefined') {
            window.open_delivery_panel_checkbox_init = true;

            $(document).on('change', '.open-delivery-panel input[type="checkbox"]', function () {
                let parentNode = this.closest('.open-delivery-panel');
                let dataOpen = $(parentNode).data('toopen');

                $(parentNode).closest('.cart-items--block-delivery--form--other').find(dataOpen).toggleClass("d-none");
            });
        }
    }

    destructor() {}
}

/* harmony default export */ __webpack_exports__["default"] = (new OpenDeliveryOptions());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/cart/delivery/modal.js":
/*!*******************************************!*\
  !*** ./work/parts/cart/delivery/modal.js ***!
  \*******************************************/
/*! exports provided: OpenModalItemsOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenModalItemsOptions", function() { return OpenModalItemsOptions; });
class OpenModalItemsOptions {
    constructor(optionalOptions = {}) {
        $(document).on('click', '.all-categories', function () {
            let categories = $(document).find('.items-lists--categories');
            let modal = $(document).find('.category-modal');
            let clonned = categories.clone(true).removeClass('d-none');

            clonned.find('.category-side--colors-data').remove();
            //categories.addClass('show').removeClass('d-none');
            //categories.find('.category-side--ul').removeClass('d-none');

            modal.find('.category-modal--body').empty().append(clonned);

            $(document).find('#wrap').hide();
            $(document).find('.mobile-search').hide();

            modal.find('.mobile-back').on('click', 'a', function () {
                modal.removeClass("show");
                modal.find('.category-modal--body').empty();
                $(document).find('#wrap').show();
                $(document).find('.mobile-search').show();
            });

            modal.toggleClass("show");

            return false;
        });

        $(document).on('click', '.all-filters', function () {
            let categories = $(document).find('.items-lists--categories');
            let modal = $(document).find('.filter-modal');
            let clonned = categories.clone().removeClass('d-none');

            clonned.find('.category-side--ul').remove();

            modal.find('.filter-modal--body').empty().append(clonned);

            $(document).find('#wrap').hide();
            $(document).find('.mobile-search').hide();

            modal.find('.mobile-back').on('click', 'a', function () {
                modal.removeClass("show");
                modal.find('.filter-modal--body').empty();
                $(document).find('#wrap').show();
                $(document).find('.mobile-search').show();
            });

            modal.toggleClass("show");

            return false;
        });
    }

    destructor() {}
}

/* harmony default export */ __webpack_exports__["default"] = (new OpenModalItemsOptions());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/header/index.js":
/*!************************************!*\
  !*** ./work/parts/header/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./work/parts/index.js":
/*!*****************************!*\
  !*** ./work/parts/index.js ***!
  \*****************************/
/*! exports provided: Header, MainSlider, ItemSlider, openChat, ItemOptionCheckbox, ItemMiniSlider, moveToMobileVersion, ItemScrolledSlider, ItemVerticalSlider, ItemPartnersSlider, PartnersCounter, OpenDeliveryOptions, OpenModalItemsOptions, AddToCartModals, addToTotalPrice, OpenModalsList, ScrollSubMenu, OwlThumbs, OpenGallery, LoginSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./work/parts/header/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _main_page_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/slider */ "./work/parts/main-page/slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainSlider", function() { return _main_page_slider__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _main_page_item_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/item-slider */ "./work/parts/main-page/item-slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemSlider", function() { return _main_page_item_slider__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _profile_page_rightside_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-page/rightside-chat */ "./work/parts/profile-page/rightside-chat/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openChat", function() { return _profile_page_rightside_chat__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _item_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item/checkbox */ "./work/parts/item/checkbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemOptionCheckbox", function() { return _item_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _item_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item/slider */ "./work/parts/item/slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemMiniSlider", function() { return _item_slider__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _item_move__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item/move */ "./work/parts/item/move.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveToMobileVersion", function() { return _item_move__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _item_scrolled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/scrolled */ "./work/parts/item/scrolled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemScrolledSlider", function() { return _item_scrolled__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _item_vertical__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item/vertical */ "./work/parts/item/vertical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemVerticalSlider", function() { return _item_vertical__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _partners_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partners/slider */ "./work/parts/partners/slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemPartnersSlider", function() { return _partners_slider__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _partners_counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partners/counter */ "./work/parts/partners/counter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PartnersCounter", function() { return _partners_counter__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _cart_delivery_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/delivery/index */ "./work/parts/cart/delivery/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenDeliveryOptions", function() { return _cart_delivery_index__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _cart_delivery_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/delivery/modal */ "./work/parts/cart/delivery/modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenModalItemsOptions", function() { return _cart_delivery_modal__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _item_addCart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item/addCart */ "./work/parts/item/addCart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddToCartModals", function() { return _item_addCart__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _item_addToTotalPrice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./item/addToTotalPrice */ "./work/parts/item/addToTotalPrice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToTotalPrice", function() { return _item_addToTotalPrice__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _lists_grid_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lists/grid/index */ "./work/parts/lists/grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenModalsList", function() { return _lists_grid_index__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _lists_grid_scroll_submenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lists/grid/scroll-submenu */ "./work/parts/lists/grid/scroll-submenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollSubMenu", function() { return _lists_grid_scroll_submenu__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _scripts_owlThumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scripts/owlThumbs */ "./work/parts/scripts/owlThumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwlThumbs", function() { return _scripts_owlThumbs__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _item_openGallery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./item/openGallery */ "./work/parts/item/openGallery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenGallery", function() { return _item_openGallery__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _modal_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modal/login */ "./work/parts/modal/login.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSlider", function() { return _modal_login__WEBPACK_IMPORTED_MODULE_19__["default"]; });






















/***/ }),

/***/ "./work/parts/item/addCart.js":
/*!************************************!*\
  !*** ./work/parts/item/addCart.js ***!
  \************************************/
/*! exports provided: AddToCartModals, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartModals", function() { return AddToCartModals; });
class AddToCartModals {
    constructor(optionalOptions = {}) {
        return; //в продакшене обрабатывается по другому
        $('#modal-add-to-cart').on('show.bs.modal', function (event) {
            let modal = $(this);
            modal.find('.add-to-cart-image img').attr("src", $('.owl-thumbs .owl-thumb-item').first().find('img').data('original'));
            modal.find('.add-to-cart-title').empty().text($('.item--price--block-title').first().text());
            modal.find('.add-to-cart-price').empty().html($('.item--price--block-total--text span[data-type="price"]').first().html());

            let number = parseInt($('.cart-icon-amount').first().text().replace(/\D/g, ""), 10);
            $('.cart-icon-amount').empty().append(number + 1);
        });
    }

    destructor() {}
}

/* harmony default export */ __webpack_exports__["default"] = (new AddToCartModals());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/item/addToTotalPrice.js":
/*!********************************************!*\
  !*** ./work/parts/item/addToTotalPrice.js ***!
  \********************************************/
/*! exports provided: addToTotalPrice, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToTotalPrice", function() { return addToTotalPrice; });
/* harmony import */ var _assets_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/helpers */ "./work/assets/helpers.js");


class addToTotalPrice {
    constructor(optionalOptions = {}) {
        $(document).on('change', 'div[data-add-to-cart="true"] input[type="checkbox"], div[data-add-to-cart="true"] input[type="radio"]', function () {
            let parentNode = $(this).closest('[data-product-name]');
            let parentParentNode = $(this).closest('[data-product-type]');

            let active = $(this).closest('.item--option:not(.active)');

            let canAdd = true;
            let checkboxCount = $(this).closest('.item--option--option').find('input[type="checkbox"]:checked');

            if (!$(this).is(":checked") && checkboxCount.length === 0) {
                canAdd = false;
            }

            if (parentNode && !active.length) {
                let html = '<div data-option-type="' + parentParentNode.attr('data-product-type') + '" class="item--price--block-total--item d-none d-lg-flex">';
                html += '<span class="font-size-18 color-7E7E7E">' + parentNode.attr('data-product-name') + '</span>';
                if (parentNode.attr('data-cost') > 0) {
                    html += '<span data-type="option-item-price" data-price="' + parentNode.attr('data-cost') + '" class="font-size-18 text-uppercase color-000000 text-right">' + parentNode.attr('data-cost') + ' ₸</span>';
                }
                html += '</div>';

                let item = $('.item--price--block-items').find('.item--price--block-total--item[data-option-type=' + parentParentNode.attr('data-product-type') + ']');
                if (item.length) {
                    $(item).remove();
                }

                if (canAdd) {
                    $('.item--price--block-items').append(html);
                }
            }

            Object(_assets_helpers__WEBPACK_IMPORTED_MODULE_0__["finalPrice"])();
        });
    }

    destructor() {}
}

/* harmony default export */ __webpack_exports__["default"] = (new addToTotalPrice());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/item/checkbox.js":
/*!*************************************!*\
  !*** ./work/parts/item/checkbox.js ***!
  \*************************************/
/*! exports provided: ItemOptionCheckbox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemOptionCheckbox", function() { return ItemOptionCheckbox; });
/* harmony import */ var _assets_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/helpers */ "./work/assets/helpers.js");


class ItemOptionCheckbox {
    constructor(optionalOptions = {}) {
        if (typeof window.item_option_checkbox_init == 'undefined') {

            window.item_option_checkbox_init = true;

            $(document).on('change', '.item--option .item--option--checkbox input[type="checkbox"]', function () {
                let parentNode = this.closest('.item--option');

                if ($(parentNode).hasClass('active')) {

                    let typeName = '';
                    let options = $(parentNode).find('.item--option--description > .item--option--option');
                    if (options.length) {
                        typeName = options.attr('data-product-type');
                        $(options).find('.item--option--scrolled-item input[type="checkbox"]').prop('checked', false);
                    } else {
                        options = $(parentNode).find('.item--option--base');
                        if (options.length) {
                            typeName = options.attr('data-product-type');
                        }
                    }

                    if (typeName !== '') {
                        let item = $('.item--price--block-items').find('.item--price--block-total--item[data-option-type=' + typeName + ']');
                        if (item.length) {
                            item.remove();
                        }
                    }
                }

                Object(_assets_helpers__WEBPACK_IMPORTED_MODULE_0__["finalPrice"])();

                $(parentNode).toggleClass("active");
            });

            $(document).on('change', '.item--option .item--option--scrolled-item input[type="checkbox"]', function () {
                let parentNode = this.closest('.item--option--option');
                $(parentNode).find('.item--option--scrolled-item input[type="checkbox"]').not(this).prop('checked', false);
            });
        }
    }

    destructor() {}
}

/* harmony default export */ __webpack_exports__["default"] = (new ItemOptionCheckbox());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/item/move.js":
/*!*********************************!*\
  !*** ./work/parts/item/move.js ***!
  \*********************************/
/*! exports provided: moveToMobileVersion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveToMobileVersion", function() { return moveToMobileVersion; });
class moveToMobileVersion {
    constructor(optionalOptions = {}) {
        $(window).on('resize', function () {
            let win = $(this); //this = window
            // Если мобилка
            if (win.width() <= 990) {
                let itemPage = $(document).find('.item-one');
                if (!itemPage) {
                    return false;
                }

                // Ищем блок с ценами/названием/категорией
                let mobileBlockStikly = $(itemPage).find('.item--mobile--price-block.stikly .item--price--block-wrap');

                // Ищем блок с ценами/названием/категорией
                let mobileBlock = $(itemPage).find('.item--mobile--price-block.non-stikly');
                // Обнуляем текущий блок
                mobileBlock.empty();

                // Находим текущий блок с ценой/названием/категорией и переносим его в "мобильный" блок
                $(mobileBlock).append($(itemPage).find('.item--price--block').html());

                $(mobileBlock).find('.item--price--block-items').remove();
                $(mobileBlock).find('.item--price--block-wrap').remove();

                $(mobileBlockStikly).empty().append($(itemPage).find('.item--price--block .item--price--block-wrap').html());

                // Если есть тэги, тоже переносим
                let tags = itemPage.find('.item--slider-tags');
                if (tags) {
                    mobileBlock.find('.item--price--block-category').append(tags.clone().removeClass('d-none').addClass('d-flex'));
                }

                // Ищем блок с описанием
                let mobileDescription = $(itemPage).find('.item--mobile--desc-block');
                mobileDescription.empty();
                // Переносим описание
                let descktopDescription = $(itemPage).find('.accordion');
                $(mobileDescription).append(descktopDescription.clone());
            }
            if (win.width() >= 1280) {/* ... */}
        });

        function mobilePriceToMove(event) {
            var element = $('.item--mobile--price-block .item--price--block-wrap');
            var footer = $('#sticky-footer');

            if (element.length > 0) {
                if (element.offset().top + element.height() >= footer.offset().top - 10) {
                    //element.css('position', 'absolute');
                    element.css('display', 'flex');
                    element.css('position', 'relative');
                    element.addClass('move-stickly');
                }

                if ($(document).scrollTop() + window.innerHeight < footer.offset().top) {
                    //element.css('position', 'fixed');
                    element.css('display', 'flex');
                    element.css('position', 'fixed');
                    element.removeClass('move-stickly');
                }
            }
        }

        $(window).on('scroll', function (event) {
            mobilePriceToMove(event);
        });

        $(window).trigger('resize');
    }

    destructor() {}
}

/* harmony default export */ __webpack_exports__["default"] = (new moveToMobileVersion());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/item/openGallery.js":
/*!****************************************!*\
  !*** ./work/parts/item/openGallery.js ***!
  \****************************************/
/*! exports provided: OpenGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenGallery", function() { return OpenGallery; });
/* harmony import */ var _assets_vendor_jquery_photoswipe_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/vendor/jquery/photoswipe/photoswipe-ui-default */ "./work/assets/vendor/jquery/photoswipe/photoswipe-ui-default.js");
/* harmony import */ var _assets_vendor_jquery_photoswipe_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_vendor_jquery_photoswipe_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_0__);


class OpenGallery {
    constructor(optionalOptions = {}) {
        this._containers = $('.owl-item--slider-carousel .owl-item.active');

        if (!this._containers) {
            this.destructor();
        } else {

            if (typeof window.openGalleryInit === "undefined") {
                window.openGalleryInit = true;
            } else {
                window.openGalleryInit = false;
            }

            if (window.openGalleryInit === true) {
                $(document).on('click', '.owl-item--slider-carousel .owl-item.active', function (e) {
                    e.preventDefault();

                    var items = $('.item--slider .owl-thumbs .owl-thumb-item');
                    var links = {};
                    links.items = [];

                    if ($(this).find('video').length > 0) {
                        return false;
                    }

                    if (items.length > 0) {
                        var indexNumber = 0;

                        items.each(function () {
                            var item = $(this).find("img");

                            if ($(this).hasClass('active')) {
                                indexNumber = $(this).index();
                            }

                            if (item.data("original") && item.data("original").length > 0) {
                                links.items.push({
                                    src: item.data("original"),
                                    w: item.data("w"),
                                    h: item.data("h")
                                });
                            }
                        });

                        var c = {
                            index: indexNumber,
                            mainClass: "pswp--minimal--dark",
                            barsSize: {
                                top: 0,
                                bottom: 0
                            },
                            captionEl: !1,
                            fullscreenEl: !1,
                            shareEl: !1,
                            bgOpacity: .85,
                            tapToClose: !0,
                            tapToToggleControls: !1
                        };

                        var pswpElement = document.querySelectorAll('.pswp')[0];

                        window.photoswipeSlideshow = new PhotoSwipe(pswpElement, _assets_vendor_jquery_photoswipe_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_0___default.a, links.items, c);
                        window.photoswipeSlideshow.init();
                    }
                });
            }
        }
    }

    destructor() {
        this._containers = null;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new OpenGallery());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/item/scrolled.js":
/*!*************************************!*\
  !*** ./work/parts/item/scrolled.js ***!
  \*************************************/
/*! exports provided: ItemScrolledSlider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemScrolledSlider", function() { return ItemScrolledSlider; });
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "owl.carousel");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);


class ItemScrolledSlider {
    constructor(optionalOptions = {}) {
        this._containers = document.querySelectorAll('.scrolled');

        if (!this._containers) {
            this.destructor();
        } else {
            this._sliders = [];

            this._containers.forEach(slider => {

                if (!$(slider).hasClass('owl-loaded')) {

                    //console.log('test');

                    const defaultOptions = {
                        margin: 10,
                        loop: false,
                        autoWidth: true,
                        nav: true,
                        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                        //navContainer: '.item--option--option .custom-nav',
                        items: 4
                    };

                    let owl = $(slider).owlCarousel(defaultOptions);
                    this._sliders.push(owl);

                    owl.on('changed.owl.carousel', function (event) {
                        if (event.page.count == event.page.index + 1) {
                            $(this).find('.owl-nav .owl-next').hide();
                        } else {
                            $(this).find('.owl-nav .owl-next').show();
                        }
                    });
                }
            });
        }
    }

    destructor() {
        this._sliders = null;
        this._containers = null;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new ItemScrolledSlider());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/item/slider.js":
/*!***********************************!*\
  !*** ./work/parts/item/slider.js ***!
  \***********************************/
/*! exports provided: ItemMiniSlider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMiniSlider", function() { return ItemMiniSlider; });
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "owl.carousel");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var owl_carousel2_thumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel2.thumbs */ "./node_modules/owl.carousel2.thumbs/dist/owl.carousel2.thumbs.min.js");
/* harmony import */ var owl_carousel2_thumbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel2_thumbs__WEBPACK_IMPORTED_MODULE_1__);



class ItemMiniSlider {
    constructor(optionalOptions = {}) {
        this._containers = document.querySelectorAll('.owl-item--slider-carousel');

        if (!this._containers) {
            this.destructor();
        } else {
            this._sliders = [];

            this._containers.forEach(slider => {
                if (!$(slider).hasClass('owl-loaded')) {
                    let dotsContainer = $(slider).data('dots');

                    const defaultOptions = {
                        items: 1,
                        loop: false,
                        margin: 0,
                        autoplay: true,
                        autoplayTimeout: 6000,
                        autoplayHoverPause: true,
                        nav: false,
                        mouseDrag: false,
                        autoHeight: true,
                        dotsContainer: dotsContainer,
                        thumbs: true,
                        thumbImage: false,
                        thumbsPrerendered: true,
                        thumbContainerClass: 'owl-thumbs',
                        thumbItemClass: 'owl-thumb-item',
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 1
                            },
                            1000: {
                                items: 1
                            }
                        }
                    };

                    this._sliders.push($(slider).owlCarousel(defaultOptions).on('changed.owl.carousel', function (e) {
                        $('.owl-thumb-item').removeClass('active');
                        $('.owl-thumb-item.active').blur();
                        $('.owl-thumb-item').eq(e.item.index).addClass('active');
                    }));

                    $('.owl-thumb-item').click(function () {
                        $(slider).trigger('to.owl.carousel', [$(this).index(), 300]);
                        return false;
                    });

                    $(dotsContainer + ' li').click(function () {
                        $(slider).trigger('to.owl.carousel', [$(this).index(), 300]);
                        return false;
                    });
                }
            });
        }
    }

    destructor() {
        this._sliders = null;
        this._containers = null;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new ItemMiniSlider());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/item/vertical.js":
/*!*************************************!*\
  !*** ./work/parts/item/vertical.js ***!
  \*************************************/
/*! exports provided: ItemVerticalSlider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVerticalSlider", function() { return ItemVerticalSlider; });
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "owl.carousel");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);


class ItemVerticalSlider {
    constructor(optionalOptions = {}) {
        this._containers = document.querySelectorAll('.owl-vertical-slider');

        if (!this._containers) {
            this.destructor();
        } else {
            this._sliders = [];

            this._containers.forEach(slider => {
                if (!$(slider).hasClass('owl-loaded')) {
                    const defaultOptions = {
                        autoplay: false,
                        arrows: false,
                        dots: false,
                        infinite: false,
                        vertical: true,
                        verticalSwiping: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        adaptiveHeight: true,
                        swipe: false
                        //variableWidth: true
                    };

                    this._sliders.push($(slider).slick(defaultOptions));
                }
            });
        }
    }

    destructor() {
        this._sliders = null;
        this._containers = null;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new ItemVerticalSlider());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/lists/grid/index.js":
/*!****************************************!*\
  !*** ./work/parts/lists/grid/index.js ***!
  \****************************************/
/*! exports provided: OpenModalsList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenModalsList", function() { return OpenModalsList; });
class OpenModalsList {
    constructor(optionalOptions = {}) {
        $('#modal-dialog').on('show.bs.modal', function (event) {
            let button = $(event.relatedTarget); // Button that triggered the modal
            let body = button.closest('.col-to-modal');
            let content = $(body).find('.cart-items--block-delivery--items-mini');
            let clonned = content.clone().removeClass('d-none');
            clonned.find('.cart-items--block-total').remove();

            let modal = $(this);
            modal.find('.modal-body').empty().append(clonned);
        });
    }

    destructor() {}
}

/* harmony default export */ __webpack_exports__["default"] = (new OpenModalsList());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/lists/grid/scroll-submenu.js":
/*!*************************************************!*\
  !*** ./work/parts/lists/grid/scroll-submenu.js ***!
  \*************************************************/
/*! exports provided: ScrollSubMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSubMenu", function() { return ScrollSubMenu; });
/* harmony import */ var _assets_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../assets/helpers */ "./work/assets/helpers.js");


class ScrollSubMenu {
    constructor() {
        let _leftScrollButton = document.querySelector('.category-mobile--arrow--left');
        let _rightScrollButton = document.querySelector('.category-mobile--arrow--right');
        let nav = document.querySelector('.category-mobile');

        if (!_rightScrollButton) {
            this.destructor();
        } else {
            _leftScrollButton.addEventListener('click', this._handleScrollLeftClicked.bind(null, { nav, _leftScrollButton, _rightScrollButton }));
            _rightScrollButton.addEventListener('click', this._handleScrollRightClicked.bind(null, { nav, _rightScrollButton, _leftScrollButton }));
        }
    }

    destructor() {}

    _handleScrollLeftClicked({ nav, _leftScrollButton, _rightScrollButton }, e) {
        nav.scrollLeft -= 20;

        if (nav.scrollLeft == 0) {
            _leftScrollButton.style.display = 'none';
            _rightScrollButton.style.display = 'inline-block';
        } else {
            _leftScrollButton.style.display = 'inline-block';
            _rightScrollButton.style.display = 'none';
        }
    }

    _handleScrollRightClicked({ nav, _rightScrollButton, _leftScrollButton }, e) {
        nav.scrollLeft += 20;

        if (nav.scrollLeft >= Object(_assets_helpers__WEBPACK_IMPORTED_MODULE_0__["scrollMax"])(nav, 'left')) {
            _rightScrollButton.style.display = 'none';
            _leftScrollButton.style.display = 'inline-block';
        } else {
            _rightScrollButton.style.display = 'inline-block';
            _leftScrollButton.style.display = 'none';
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new ScrollSubMenu());

/***/ }),

/***/ "./work/parts/main-page/item-slider/index.js":
/*!***************************************************!*\
  !*** ./work/parts/main-page/item-slider/index.js ***!
  \***************************************************/
/*! exports provided: ItemSlider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSlider", function() { return ItemSlider; });
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "owl.carousel");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);


class ItemSlider {
    constructor(optionalOptions = {}) {
        this._containers = document.querySelectorAll('.owl-item-carousel');

        if (!this._containers) {
            this.destructor();
        } else {
            this._sliders = [];

            this._containers.forEach(slider => {
                if (!$(slider).hasClass('owl-loaded')) {
                    let dotsContainer = $(slider).data('dots');
                    const defaultOptions = {
                        items: 1,
                        loop: true,
                        margin: 0,
                        autoplay: true,
                        autoplayTimeout: 6000,
                        autoplayHoverPause: true,
                        nav: false,
                        dotsContainer: dotsContainer,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 1
                            },
                            1000: {
                                items: 1
                            }
                        }
                    };

                    this._sliders.push($(slider).owlCarousel(defaultOptions));

                    $(dotsContainer + ' li').click(function () {
                        $(slider).trigger('to.owl.carousel', [$(this).index(), 300]);
                        return false;
                    });
                }
            });
        }
    }

    destructor() {
        this._sliders = null;
        this._containers = null;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new ItemSlider());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/main-page/slider/index.js":
/*!**********************************************!*\
  !*** ./work/parts/main-page/slider/index.js ***!
  \**********************************************/
/*! exports provided: MainSlider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSlider", function() { return MainSlider; });
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "owl.carousel");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__);



class MainSlider {
    constructor(optionalOptions = {}) {
        this._containers = document.querySelectorAll('.owl-main-carousel');

        if (!this._containers) {
            this.destructor();
        } else {
            this._sliders = [];

            this._containers.forEach(slider => {
                if (!$(slider).hasClass('owl-loaded')) {
                    let dotsContainer = $(slider).data('dots');
                    const defaultOptions = {
                        items: 1,
                        loop: true,
                        margin: 0,
                        autoplay: true,
                        autoplayTimeout: 6000,
                        autoplayHoverPause: true,
                        nav: true,
                        dotsContainer: dotsContainer,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 1
                            },
                            1000: {
                                items: 1
                            }
                        }
                    };

                    let owl = $(slider).owlCarousel(defaultOptions);

                    this._sliders.push(owl);

                    owl.on('changed.owl.carousel', function (event) {
                        window['lazyLoadInstance'].update();
                    });

                    $(dotsContainer + ' li').click(function () {
                        $(slider).trigger('to.owl.carousel', [$(this).index(), 300]);
                        return false;
                    });
                }
            });
        }
    }

    destructor() {
        this._sliders = null;
        this._containers = null;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new MainSlider());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/modal/login.js":
/*!***********************************!*\
  !*** ./work/parts/modal/login.js ***!
  \***********************************/
/*! exports provided: LoginSlider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSlider", function() { return LoginSlider; });
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "owl.carousel");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);


class LoginSlider {
    constructor(optionalOptions = {}) {
        this._containers = document.querySelectorAll('.owl-login-carousel');

        if (!this._containers) {
            this.destructor();
        } else {
            this._sliders = [];

            this._containers.forEach(slider => {
                if (!$(slider).hasClass('owl-loaded')) {
                    const defaultOptions = {
                        items: 1,
                        loop: false,
                        margin: 0,
                        startPosition: 0,
                        autoplay: false,
                        mouseDrag: false,
                        touchDrag: false,
                        pullDrag: false,
                        autoplayTimeout: 6000,
                        autoplayHoverPause: false,
                        nav: false,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 1
                            },
                            1000: {
                                items: 1
                            }
                        }
                    };

                    this._sliders.push($(slider).owlCarousel(defaultOptions));

                    $('#modal-login .modal-auth .login-phone .buttons-submit').click(function () {
                        $('#modal-login .modal-auth .login-code').find('.sub-head span.telephone').html($('#modal-login .modal-auth .login-phone').find('input[name="phone"]').val());

                        $(slider).trigger('next.owl.carousel');

                        let modalCloseButton = $('#modal-login .modal-header button');

                        modalCloseButton.removeAttr('data-dismiss');
                        modalCloseButton.addClass('back-button');
                    });

                    $(document).on('click', '#modal-login .modal-header button.back-button', function () {
                        let modalCloseButton = $('#modal-login .modal-header button');

                        modalCloseButton.attr('data-dismiss', 'modal');
                        modalCloseButton.removeClass('back-button');

                        $(slider).trigger('prev.owl.carousel');
                    });
                }
            });
        }
    }

    destructor() {
        this._sliders = null;
        this._containers = null;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new LoginSlider());

/*
export class SendLoginPhone {
    constructor(optionalOptions = {}) {
        $(document).on('submit','#modal-login form',function() {
            $('#modal-login').modal('hide')

            $('#modal-login-code').modal('show')
            $('#modal-login-code').find('.sub-head span.telephone').html($(this).find('input[name="phone"]').val())

            return false;
        });
    }

    destructor() {
    }
}

export default new SendLoginPhone();
*/
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/partners/counter.js":
/*!****************************************!*\
  !*** ./work/parts/partners/counter.js ***!
  \****************************************/
/*! exports provided: PartnersCounter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersCounter", function() { return PartnersCounter; });
class PartnersCounter {
    constructor(optionalOptions = {}) {
        //if (!this._containers) {
        //    this.destructor();
        //} else {
        function incDecValue(e, type) {
            e.preventDefault();
            var fieldName = $(e.target).data('field');
            var parent = $(e.target).closest('div');
            var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

            if (isNaN(currentVal)) {
                currentVal = 0;
            } else {
                if (currentVal >= 0) {
                    if (type === 'plus') {
                        currentVal = currentVal + 1;
                    } else {
                        currentVal = currentVal - 1;
                    }
                }

                if (currentVal < 0) {
                    currentVal = 0;
                }
            }

            parent.find('input[name=' + fieldName + ']').val(currentVal);

            $(e.target).closest('.card-body').find('.partners-submit').show();
        }

        $('.plus-minus').on('click', '.button-plus', function (e) {
            incDecValue(e, 'plus');
        });

        $('.plus-minus').on('click', '.button-minus', function (e) {
            incDecValue(e, 'minus');
        });
        //}
    }

    destructor() {}
}

/* harmony default export */ __webpack_exports__["default"] = (new PartnersCounter());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/partners/slider.js":
/*!***************************************!*\
  !*** ./work/parts/partners/slider.js ***!
  \***************************************/
/*! exports provided: ItemPartnersSlider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPartnersSlider", function() { return ItemPartnersSlider; });
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel */ "owl.carousel");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_0__);


class ItemPartnersSlider {
    constructor(optionalOptions = {}) {
        this._containers = document.querySelectorAll('.owl-partners--slider-carousel');

        if (!this._containers) {
            this.destructor();
        } else {
            this._sliders = [];

            this._containers.forEach(slider => {

                const defaultOptions = {
                    items: 1,
                    loop: true,
                    margin: 0,
                    autoplay: false,
                    nav: true,
                    mouseDrag: false,
                    thumbs: true,
                    thumbImage: false,
                    thumbsPrerendered: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                };

                $(slider).owlCarousel(defaultOptions);
            });
        }
    }

    destructor() {
        this._sliders = null;
        this._containers = null;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new ItemPartnersSlider());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/profile-page/rightside-chat/index.js":
/*!*********************************************************!*\
  !*** ./work/parts/profile-page/rightside-chat/index.js ***!
  \*********************************************************/
/*! exports provided: openChat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openChat", function() { return openChat; });
/* harmony import */ var _assets_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../assets/helpers */ "./work/assets/helpers.js");


class openChat {
    constructor() {
        let itemsChats = document.querySelectorAll('.profile--chat-item--click');

        if (!itemsChats) {
            this.destructor();
        } else {
            itemsChats.forEach(chat => {
                chat.addEventListener('click', this._handleChatOpen);
            });
        }
    }

    destructor() {}

    _handleChatOpen(e) {
        if (Object(_assets_helpers__WEBPACK_IMPORTED_MODULE_0__["_isMobile"])()) {
            e.preventDefault();

            $('.modal').modal('hide');

            let profileChat = $('.profile--chat-messages');
            let modalMessage = $('#modal-messanger');
            //let header = $('#wrap-wrap .header');

            let clonned = profileChat.clone();
            $(clonned).addClass('d-flex').addClass('align-items-start').addClass('flex-column').addClass('flex-wrap');

            modalMessage.find('.modal-body').empty().append(clonned);
            //modalMessage.find('.modal-header').empty().append(header.clone(true));

            modalMessage.modal('show');
            $('.modal-backdrop').remove();

            let heightHeader = modalMessage.find('.profile--chat-message--header').outerHeight();
            let heightFooter = modalMessage.find('.profile--chat-message--bottom').outerHeight();

            let calculateHeight = heightHeader + heightFooter + 74;

            let bodyChat = modalMessage.find('.modal-body .profile--chat-message--body');

            bodyChat.css('height', 'calc(100vh - ' + calculateHeight + 'px)');
            bodyChat.css('max-height', 'calc(100vh - ' + calculateHeight + 'px)');
            bodyChat.css('min-height', 'calc(100vh - ' + calculateHeight + 'px)');

            bodyChat.scrollTop(bodyChat[0].scrollHeight);

            //modalNav.find('.modal-body .profile--chat-message--body').css('height', 'calc(100vh - ' + heightFooter + 'px)')
        }
        return false;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new openChat());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./work/parts/scripts/owlThumbs.js":
/*!*****************************************!*\
  !*** ./work/parts/scripts/owlThumbs.js ***!
  \*****************************************/
/*! exports provided: OwlThumbs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlThumbs", function() { return OwlThumbs; });
class OwlThumbs {
    constructor(optionalOptions = {}) {
        this._container = $("#slider-item-thumbs");

        if (!this._container) {
            this.destructor();
        } else {
            this._container.mCustomScrollbar('destroy');
            this._container.mCustomScrollbar({ theme: 'minimal', autoHideScrollbar: true });
        }
    }

    destructor() {
        this._container = null;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new OwlThumbs());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./work/assets/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nazar/www/tip-top.shop/rails-tip-top.shop/html/work/assets/main.js */"./work/assets/main.js");


/***/ }),

/***/ "bootstrap":
/*!****************************!*\
  !*** external "bootstrap" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = bootstrap;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "owl.carousel":
/*!***********************************!*\
  !*** external "$.fn.owlCarousel" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = $.fn.owlCarousel;

/***/ })

/******/ });