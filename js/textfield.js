!function (t) {
    function e(s) {
        if (i[s]) return i[s].exports;
        var n = i[s] = {i: s, l: !1, exports: {}};
        return t[s].call(n.exports, n, n.exports, e), n.l = !0, n.exports
    }

    var i = {};
    e.m = t, e.c = i, e.i = function (t) {
        return t
    }, e.d = function (t, i, s) {
        e.o(t, i) || Object.defineProperty(t, i, {configurable: !1, enumerable: !0, get: s})
    }, e.n = function (t) {
        var i = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 1)
}([function (t, e, i) {
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    !function (t) {
        "use strict";
        var e = "ca.textfield.", i = {
            FOCUS: e + "focus",
            BLUR: e + "blur",
            CHANGED: e + "changed",
            DIRTY: e + "dirty",
            VALID: e + "valid",
            INVALID: e + "invalid",
            RESET: e + "reset"
        }, n = {TEXT_FIELD: ".md-textfield", DATA_TOGGLE: '[data-toggle="textfield"]'}, o = function () {
            var e = function (e, i) {
                this.$textfield_ = t(e), this.isShown_ = !1, this.isAnimating_ = !1, this.startY_ = 0, this.currentY_ = 0, this.touchingBSheet_ = !1, this.init_(i)
            };
            return e.VERSION = "1.0", e.prototype.Classes_ = {
                INPUT: "md-textfield__input",
                IS_DIRTY: "md-textfield--dirty",
                IS_FOCUSED: "md-textfield--focused",
                IS_DISABLED: "md-textfield--disabled",
                IS_INVALID: "md-textfield--invalid",
                FLOATING_LABEL: "md-textfield--floating-label",
                HAS_PLACEHOLDER: "md-textfield--has-placeholder",
                COUNTER_SPAN: "md-textfield__counter"
            }, e.prototype.init_ = function (e) {
                this.config = t.extend({}, this.Default, e), this.$textfield_ && (this.$input_ = this.$textfield_.find("." + this.Classes_.INPUT), this.$input_ && (this.boundUpdateClassesHandler = this.updateClasses_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.boundResetHandler = this.onReset_.bind(this), this.$input_.on("input", this.boundUpdateClassesHandler), this.$input_.on("focus", this.boundFocusHandler), this.$input_.on("blur", this.boundBlurHandler), this.$input_.on("reset", this.boundResetHandler), this.setTextfieldClass_(), this.setCount_(), this.updateClasses_(), "undefined" !== s(this.$input_.attr("autofocus")) && !1 !== this.$input_.attr("autofocus") && (this.$textfield_.focus(), this.checkFocus())))
            }, e.prototype.Default = {float: !1, count: !1}, e.prototype.setTextfieldClass_ = function () {
                (this.config.float || this.$textfield_.hasClass(this.Classes_.FLOATING_LABEL)) && this.$textfield_.addClass(this.Classes_.FLOATING_LABEL), "undefined" !== s(this.$input_.attr("placeholder")) && !1 !== this.$input_.attr("placeholder") && this.$textfield_.addClass(this.Classes_.HAS_PLACEHOLDER)
            }, e.prototype.setCount_ = function () {
                if (this.config.count) {
                    var t = this.$textfield_.find("." + this.Classes_.COUNTER_SPAN);
                    t.length && (this.$counterSpan = t, this.$input_.on("input", this.onKeyDownCount_.bind(this)), this.maxLength = this.$input_.attr("maxlength"))
                }
            }, e.prototype.onKeyDown_ = function (t) {
                var e = t.target.value.split("\n").length;
                13 === t.keyCode && e >= this.maxRows && t.preventDefault()
            }, e.prototype.onKeyDownCount_ = function (t) {
                var e = t.target.value.length;
                this.$counterSpan.text(e + "/" + this.maxLength)
            }, e.prototype.onFocus_ = function () {
                this.$textfield_.addClass(this.Classes_.IS_FOCUSED), this.$textfield_.trigger(i.FOCUS)
            }, e.prototype.onBlur_ = function () {
                this.$textfield_.removeClass(this.Classes_.IS_FOCUSED), this.$textfield_.trigger(i.BLUR)
            }, e.prototype.onReset_ = function () {
                this.updateClasses_(), this.$textfield_.trigger(i.RESET)
            }, e.prototype.updateClasses_ = function () {
                this.checkDisabled(), this.checkDirty(), this.checkFocus(), this.checkValidity_()
            }, e.prototype.checkDisabled = function () {
                this.$input_.prop("disabled") ? this.$textfield_.addClass(this.Classes_.IS_DISABLED) : this.$textfield_.removeClass(this.Classes_.IS_DISABLED)
            }, e.prototype.checkFocus = function () {
                "undefined" !== s(this.$input_.attr("autofocus")) && !1 !== this.$input_.attr("autofocus") && this.$textfield_.addClass(this.Classes_.IS_FOCUSED)
            }, e.prototype.checkValidity_ = function () {
                this.$textfield_.hasClass(this.Classes_.IS_DIRTY) && "undefined" !== s(this.$input_.get(0).validity) && (this.$input_.get(0).validity.valid ? (this.$textfield_.removeClass(this.Classes_.IS_INVALID), this.$textfield_.trigger(i.VALID)) : (this.$textfield_.addClass(this.Classes_.IS_INVALID), this.$textfield_.trigger(i.INVALID)))
            }, e.prototype.checkDirty = function () {
                "" != this.$input_.val() && this.$input_.val().length > 0 ? (this.$textfield_.addClass(this.Classes_.IS_DIRTY), this.$textfield_.trigger(i.DIRTY)) : this.$textfield_.removeClass(this.Classes_.IS_DIRTY)
            }, e.prototype.disable = function () {
                this.$input_.prop("disabled", !0), this.updateClasses_()
            }, e.prototype.enable = function () {
                this.$input_.prop("disabled", !1), this.updateClasses_()
            }, e.prototype.clear = function () {
                this.$input_.val(""), this.updateClasses_()
            }, e.prototype.destroy = function (t) {
                this.$textfield_.removeClass(this.Classes_.IS_DIRTY).removeClass(this.Classes_.IS_INVALID), this.$input_.unbind("input", this.boundUpdateClassesHandler), this.$input_.unbind("focus", this.boundFocusHandler), this.$input_.unbind("blur", this.boundBlurHandler), this.$input_.unbind("reset", this.boundResetHandler), this.$textfield_.data("ca.textfield", null)
            }, e.Plugin_ = function (i) {
                return this.each(function () {
                    var s = t(this), n = s.data("ca.textfield");
                    if (n || s.data("ca.textfield", n = new e(this, i)), "string" == typeof i) {
                        if (void 0 === n[i]) throw new Error('No method named "' + i + '"');
                        n[i]()
                    }
                })
            }, e
        }();
        t(window).on("load", function () {
            t(n.DATA_TOGGLE).each(function () {
                var e = t(this), i = e.data();
                o.Plugin_.call(e, i)
            })
        }), t.fn.MaterialTextfield = o.Plugin_, t.fn.MaterialTextfield.Constructor = o, t.fn.MaterialTextfield.noConflict = function () {
            return t.fn.MaterialTextfield = o, o.Plugin_
        }
    }(jQuery)
}, function (t, e, i) {
    t.exports = i(0)
}]);