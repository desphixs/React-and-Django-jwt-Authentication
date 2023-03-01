(() => {
    "use strict";
    var t = function() {
        return (t =
            Object.assign ||
            function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var o in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
            }).apply(this, arguments);
    };
    const e = (function() {
        function e(e) {
            void 0 === e && (e = {}), (this.itemsState = {});
            var i = "object" == typeof e && "nameSpace" in e ? e.nameSpace : "hc",
                n = {
                    nameSpace: "hc",
                    toggleButtonAttr: "data-" + i + "-control",
                    toggleContentAttr: "data-" + i + "-content",
                    activeClass: "is-active",
                    isAnimation: !0,
                    closeOthers: !0,
                    animationSpeed: 400,
                    cssEasing: "ease-in-out",
                    onSlideStart: function() {},
                    onSlideEnd: function() {},
                };
            (this.options = t(t({}, n), e)),
            (this.toggleContentEls = [].slice.call(
                document.querySelectorAll("[" + this.options.toggleContentAttr + "]")
            )),
            (this.toggleButtonEls = [].slice.call(
                document.querySelectorAll("[" + this.options.toggleButtonAttr + "]")
            )),
            0 !== this.toggleContentEls.length &&
                this.initContentsState(this.toggleContentEls),
                0 !== this.toggleButtonEls.length &&
                this.handleButtonsEvent(this.toggleButtonEls);
        }
        return (
            (e.prototype.initContentsState = function(t) {
                var e = this;
                (this.itemsState = {}),
                t.forEach(function(t) {
                    (t.style.overflow = "hidden"), (t.style.maxHeight = "none");
                    var i = t.classList.contains(e.options.activeClass),
                        n = t.getAttribute(e.options.toggleContentAttr);
                    n &&
                        (e.setItemState(n, i),
                            i ? e.open(n, !1, !1) : e.close(n, !1, !1));
                });
            }),
            (e.prototype.handleButtonsEvent = function(t) {
                var e = this;
                t.forEach(function(t) {
                    var i = t.getAttribute(e.options.toggleButtonAttr);
                    i &&
                        t.addEventListener(
                            "click",
                            function(t) {
                                t.preventDefault(), e.toggleSlide(i, !0);
                            }, !1
                        );
                });
            }),
            (e.prototype.setItemState = function(t, e) {
                this.itemsState[t] = {
                    isOpen: e,
                    isAnimating: !1
                };
            }),
            (e.prototype.toggleSlide = function(t, e) {
                var i, n;
                void 0 === e && (e = !0),
                    (null === (i = this.itemsState[t]) || void 0 === i ?
                        void 0 :
                        i.isAnimating) ||
                    (!1 ===
                        (null === (n = this.itemsState[t]) || void 0 === n ?
                            void 0 :
                            n.isOpen) ?
                        this.open(t, e, this.options.isAnimation) :
                        this.close(t, e, this.options.isAnimation));
            }),
            (e.prototype.open = function(t, e, i) {
                var n = this;
                if ((void 0 === e && (e = !0), void 0 === i && (i = !0), t)) {
                    Object.prototype.hasOwnProperty.call(this.itemsState, t) ||
                        this.setItemState(t, !1);
                    var o = document.querySelector(
                        "[" + this.options.toggleContentAttr + "='" + t + "']"
                    );
                    if (o) {
                        (this.itemsState[t].isAnimating = !0),
                        this.options.closeOthers && [].slice.call(this.toggleContentEls).forEach(function(e) {
                            var o = e.getAttribute(n.options.toggleContentAttr);
                            o && o !== t && n.close(o, !1, i);
                        }), !1 !== e && this.options.onSlideStart(!0, t);
                        var s = this.getTargetHeight(o);
                        (o.style.visibility = "visible"),
                        o.classList.add(this.options.activeClass);
                        var a = document.querySelectorAll(
                            "[" + this.options.toggleButtonAttr + "='" + t + "']"
                        );
                        a.length > 0 && [].slice.call(a).forEach(function(t) {
                                t.classList.add(n.options.activeClass),
                                    t.hasAttribute("aria-expanded") &&
                                    t.setAttribute("aria-expanded", "true");
                            }),
                            i ?
                            ((o.style.overflow = "hidden"),
                                (o.style.transition =
                                    this.options.animationSpeed +
                                    "ms " +
                                    this.options.cssEasing),
                                (o.style.maxHeight = (s || "1000") + "px"),
                                setTimeout(function() {
                                    !1 !== e && n.options.onSlideEnd(!0, t),
                                        (o.style.maxHeight = "none"),
                                        (o.style.transition = ""),
                                        (o.style.overflow = ""),
                                        (n.itemsState[t].isAnimating = !1);
                                }, this.options.animationSpeed)) :
                            ((o.style.maxHeight = "none"),
                                (o.style.overflow = ""),
                                (this.itemsState[t].isAnimating = !1)),
                            (this.itemsState[t].isOpen = !0),
                            o.hasAttribute("aria-hidden") &&
                            o.setAttribute("aria-hidden", "false");
                    }
                }
            }),
            (e.prototype.close = function(t, e, i) {
                var n = this;
                if ((void 0 === e && (e = !0), void 0 === i && (i = !0), t)) {
                    Object.prototype.hasOwnProperty.call(this.itemsState, t) ||
                        this.setItemState(t, !1),
                        (this.itemsState[t].isAnimating = !0), !1 !== e && this.options.onSlideStart(!1, t);
                    var o = document.querySelector(
                        "[" + this.options.toggleContentAttr + "='" + t + "']"
                    );
                    (o.style.overflow = "hidden"),
                    o.classList.remove(this.options.activeClass),
                        (o.style.maxHeight = o.clientHeight + "px"),
                        setTimeout(function() {
                            o.style.maxHeight = "0px";
                        }, 5);
                    var s = document.querySelectorAll(
                        "[" + this.options.toggleButtonAttr + "='" + t + "']"
                    );
                    s.length > 0 && [].slice.call(s).forEach(function(t) {
                            t.classList.remove(n.options.activeClass),
                                t.hasAttribute("aria-expanded") &&
                                t.setAttribute("aria-expanded", "false");
                        }),
                        i ?
                        ((o.style.transition =
                                this.options.animationSpeed + "ms " + this.options.cssEasing),
                            setTimeout(function() {
                                !1 !== e && n.options.onSlideEnd(!1, t),
                                    (o.style.transition = ""),
                                    (n.itemsState[t].isAnimating = !1),
                                    (o.style.visibility = "hidden");
                            }, this.options.animationSpeed)) :
                        (this.options.onSlideEnd(!1, t),
                            (this.itemsState[t].isAnimating = !1),
                            (o.style.visibility = "hidden")),
                        Object.prototype.hasOwnProperty.call(this.itemsState, t) &&
                        (this.itemsState[t].isOpen = !1),
                        o.hasAttribute("aria-hidden") &&
                        o.setAttribute("aria-hidden", "true");
                }
            }),
            (e.prototype.getTargetHeight = function(t) {
                if (t) {
                    var e = t.cloneNode(!0),
                        i = t.parentNode;
                    if (i) {
                        var n = [].slice.call(e.querySelectorAll("input[name]"));
                        if (0 !== n.length) {
                            var o = "-" + new Date().getTime();
                            n.forEach(function(t) {
                                t.name += o;
                            });
                        }
                        (e.style.maxHeight = "none"),
                        (e.style.opacity = "0"),
                        i.appendChild(e);
                        var s = e.clientHeight;
                        return i.removeChild(e), s;
                    }
                }
            }),
            e
        );
    })();
    window.HandyCollapse = e;
})();