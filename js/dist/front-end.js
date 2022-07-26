!(function (n) {
  var i = {};
  function a(e) {
    if (i[e]) return i[e].exports;
    var t = (i[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
  }
  (a.m = n),
    (a.c = i),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          a.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 72));
})({
  22: function (e, t) {
    var n, i, a;
    (n = jQuery),
      (a = 0),
      n(window).scroll(function () {
        (i = !0),
          157 <= n(window).scrollTop()
            ? n(".nav-container, .site-content").addClass(
                "nav-container-sticky"
              )
            : n(".nav-container, .site-content").removeClass(
                "nav-container-sticky"
              );
      }),
      setInterval(function () {
        i &&
          ((function () {
            var e = n(this).scrollTop();
            Math.abs(a - e) <= 0 ||
              (a < e && 700 < e
                ? n(".nav-container")
                    .removeClass("scrolling-up")
                    .addClass("scrolling-down")
                : e + n(window).height() < n(document).height() &&
                  n(".nav-container")
                    .removeClass("scrolling-down")
                    .addClass("scrolling-up"),
              (a = e));
          })(),
          (i = !1));
      }, 250);
  },
  23: function (e, t) {
    var n;
    !(function (n) {
      var i = !1;
      n(window)
        .keydown(function (e) {
          13 === e.which && (i = !0);
        })
        .keyup(function (e) {
          13 === e.which && (i = !1);
        }),
        n(".menu-item-has-children").hover(
          function () {
            n(this).addClass("hover-intent");
          },
          function () {
            var e = this;
            setTimeout(function () {
              n(e).removeClass("hover-intent");
            }, 100);
          }
        );
      var e,
        t,
        a,
        r,
        s,
        o,
        l,
        d,
        u,
        p = n(".nav-container"),
        c = p.find("#nav-toggle"),
        h = p.find("#main-navigation-wrapper"),
        f = p.find("#nav");
      if (
        (c.length &&
          (c.add(f).attr("aria-expanded", "false"),
          c.on("click", function () {
            n(this).add(h).toggleClass("toggled-on"),
              n(this).attr(
                "aria-expanded",
                "false" === n(this).attr("aria-expanded") ? "true" : "false"
              ),
              n("#nav-toggle-label").text(
                n("#nav-toggle-label").text() ===
                  imenet_screenReaderText.expand_toggle
                  ? imenet_screenReaderText.collapse_toggle
                  : imenet_screenReaderText.expand_toggle
              ),
              n(this).attr(
                "aria-label",
                n(this).attr("aria-label") ===
                  imenet_screenReaderText.expand_toggle
                  ? imenet_screenReaderText.collapse_toggle
                  : imenet_screenReaderText.expand_toggle
              ),
              n(this)
                .add(f)
                .attr(
                  "aria-expanded",
                  "false" === n(this).add(f).attr("aria-expanded")
                    ? "true"
                    : "false"
                );
          })),
        n(".menu-item a, .dropdown button").on("keyup", function () {
          0 !== n(".dropdown").find(":focus").length &&
            27 === event.keyCode &&
            ((thisDropdown = n(this).parent().parent().parent()),
            (screenReaderSpan = thisDropdown.find(".screen-reader-text")),
            (dropdownToggle = thisDropdown.find(".dropdown-toggle")),
            thisDropdown.find(".sub-menu").removeClass("toggled-on"),
            thisDropdown.find(".dropdown-toggle").removeClass("toggled-on"),
            thisDropdown.find(".dropdown").removeClass("toggled-on"),
            dropdownToggle.attr("aria-expanded", "false"),
            screenReaderSpan.text(imenet_screenReaderText.expand),
            thisDropdown.find(".dropdown-toggle:first").focus()),
            960 < window.innerWidth &&
              ((prevDropdown = n(this).parent().prev()),
              (screenReaderSpanPrev = prevDropdown.find(".screen-reader-text")),
              (dropdownTogglePrev = prevDropdown.find(".dropdown-toggle")),
              prevDropdown.find(".sub-menu").removeClass("toggled-on"),
              prevDropdown.find(".dropdown-toggle").removeClass("toggled-on"),
              prevDropdown.find(".dropdown").removeClass("toggled-on"),
              dropdownTogglePrev.attr("aria-expanded", "false"),
              screenReaderSpanPrev.text(imenet_screenReaderText.expand),
              (nextDropdown = n(this).parent().next()),
              (screenReaderSpanNext = nextDropdown.find(".screen-reader-text")),
              (dropdownToggleNext = nextDropdown.find(".dropdown-toggle")),
              nextDropdown.find(".sub-menu").removeClass("toggled-on"),
              nextDropdown.find(".dropdown-toggle").removeClass("toggled-on"),
              nextDropdown.find(".dropdown").removeClass("toggled-on"),
              dropdownToggleNext.attr("aria-expanded", "false"),
              screenReaderSpanNext.text(imenet_screenReaderText.expand));
        }),
        h.find(".menu-item-has-children").attr("aria-haspopup", "true"),
        n(".dropdown-toggle").each(function () {
          n(this).attr(
            "aria-label",
            ""
              .concat(imenet_screenReaderText.expand_for, " ")
              .concat(n(this).prev().text())
          );
        }),
        h.find(".dropdown-toggle").click(function (e) {
          var t;
          (i || window.innerWidth < 960) &&
            ((t = n(this).nextAll(".sub-menu")),
            e.preventDefault(),
            n(this).toggleClass("toggled-on"),
            t.toggleClass("toggled-on"),
            n(this).attr(
              "aria-expanded",
              "false" === n(this).attr("aria-expanded") ? "true" : "false"
            ),
            n(this).attr(
              "aria-label",
              (n(this).attr("aria-label") ===
              ""
                .concat(imenet_screenReaderText.collapse_for, " ")
                .concat(n(this).prev().text())
                ? "".concat(imenet_screenReaderText.expand_for, " ")
                : "".concat(imenet_screenReaderText.collapse_for, " ")
              ).concat(n(this).prev().text())
            ));
        }),
        n(".sub-menu .menu-item-has-children")
          .parent(".sub-menu")
          .addClass("has-sub-menu"),
        n(".menu-item a, button.dropdown-toggle").on("keydown", function (e) {
          if (-1 != [37, 38, 39, 40].indexOf(e.keyCode))
            switch (e.keyCode) {
              case 37:
                e.preventDefault(),
                  e.stopPropagation(),
                  (n(this).hasClass("dropdown-toggle")
                    ? n(this).prev("a")
                    : n(this).parent().prev().children("button.dropdown-toggle")
                        .length
                    ? n(this).parent().prev().children("button.dropdown-toggle")
                    : n(this).parent().prev().children("a")
                  ).focus(),
                  n(this).is("ul ul ul.sub-menu.toggled-on li:first-child a") &&
                    n(this)
                      .parents("ul.sub-menu.toggled-on li")
                      .children("button.dropdown-toggle")
                      .focus();
                break;
              case 39:
                e.preventDefault(),
                  e.stopPropagation(),
                  (n(this).next("button.dropdown-toggle").length
                    ? n(this).next("button.dropdown-toggle")
                    : n(this).parent().next().find("input").length
                    ? n(this).parent().next().find("input")
                    : n(this).parent().next().children("a")
                  ).focus(),
                  n(this).is("ul.sub-menu .dropdown-toggle.toggled-on") &&
                    n(this)
                      .parent()
                      .find("ul.sub-menu li:first-child a")
                      .focus();
                break;
              case 40:
                e.preventDefault(),
                  e.stopPropagation(),
                  (n(this).next().length
                    ? n(this).next().find("li:first-child a").first()
                    : n(this).parent().next().find("input").length
                    ? n(this).parent().next().find("input")
                    : n(this).parent().next().children("a")
                  ).focus(),
                  n(this).is("ul.sub-menu a") &&
                    n(this).next("button.dropdown-toggle").length &&
                    n(this).parent().next().children("a").focus(),
                  n(this).is("ul.sub-menu .dropdown-toggle") &&
                    n(this).parent().next().children(".dropdown-toggle")
                      .length &&
                    n(this)
                      .parent()
                      .next()
                      .children(".dropdown-toggle")
                      .focus();
                break;
              case 38:
                e.preventDefault(),
                  e.stopPropagation(),
                  (n(this).parent().prev().length
                    ? n(this).parent().prev().children("a")
                    : n(this)
                        .parents("ul")
                        .first()
                        .prev(".dropdown-toggle.toggled-on")
                  ).focus(),
                  n(this).is("ul.sub-menu .dropdown-toggle") &&
                    n(this).parent().prev().children(".dropdown-toggle")
                      .length &&
                    n(this)
                      .parent()
                      .prev()
                      .children(".dropdown-toggle")
                      .focus();
            }
        }),
        (a = document.getElementById("nav")) &&
          void 0 !== (r = document.getElementById("nav-toggle")))
      )
        if (
          ((e = document.getElementsByTagName("html")[0]),
          (t = document.getElementsByTagName("body")[0]),
          (s = a.getElementsByTagName("ul")[0]),
          (o = document.getElementById("main-navigation-wrapper")),
          void 0 !== s)
        ) {
          if (
            (s.setAttribute("aria-expanded", "false"),
            -1 === s.className.indexOf("nav-menu") &&
              (s.className += " nav-menu"),
            window.innerWidth < 960)
          ) {
            var v = null,
              m = null;
            navElements = a.querySelectorAll([
              ".nav-primary a[href]",
              ".nav-primary button",
            ]);
            for (var g = 0; g < navElements.length; g++)
              navElements[g].addEventListener("keydown", b);
          }
          for (
            r.onclick = function () {
              -1 !== a.className.indexOf("is-active")
                ? w()
                : ((e.className += " disable-scroll"),
                  (t.className += " js-nav-active"),
                  (a.className += " is-active"),
                  (r.className += " is-active"),
                  r.setAttribute("aria-expanded", "true"),
                  s.setAttribute("aria-expanded", "true"),
                  r.addEventListener("keydown", b, !1));
            },
              document.addEventListener("keyup", function (e) {
                27 == e.keyCode &&
                  -1 !== a.className.indexOf("is-active") &&
                  w();
              }),
              o.onclick = function (e) {
                e.target == o && -1 !== a.className.indexOf("is-active") && w();
              },
              l = s.getElementsByTagName("a"),
              s.getElementsByTagName("ul"),
              g = 0,
              d = l.length;
            g < d;
            g++
          )
            l[g].addEventListener("focus", y, !0),
              l[g].addEventListener("blur", y, !0);
        } else r.style.display = "none";
      function w() {
        r.removeEventListener("keydown", b, !1),
          (e.className = e.className.replace(" disable-scroll", "")),
          (t.className = t.className.replace(" js-nav-active", "")),
          (a.className = a.className.replace(" is-active", "")),
          (r.className = r.className.replace(" is-active", "")),
          r.setAttribute("aria-expanded", "false"),
          s.setAttribute("aria-expanded", "false"),
          r.focus();
      }
      function y() {
        for (var e = this; -1 === e.className.indexOf("nav-menu"); )
          "li" === e.tagName.toLowerCase() &&
            (-1 !== e.className.indexOf("focus")
              ? (e.className = e.className.replace(" focus", ""))
              : (e.className += " focus")),
            (e = e.parentElement);
      }
      function b(e) {
        (u = a.querySelectorAll([
          ".sub-menu.toggled-on > li a[href]",
          'ul[aria-expanded="true"] > li > a[href]',
          "area[href]",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          ".sub-menu.toggled-on > li > button:not([disabled]):not(.toggled-on)",
          'ul[aria-expanded="true"] > li > button:not([disabled]):not(.toggled-on)',
          "iframe",
          "object",
          "embed",
          "[contenteditable]",
          NaN,
        ])),
          (v = u[0]),
          (m = u[u.length - 1]) !== e.target ||
            9 !== e.keyCode ||
            e.shiftKey ||
            (e.preventDefault(), r.focus()),
          v === e.target &&
            9 === e.keyCode &&
            e.shiftKey &&
            (e.preventDefault(), r.focus()),
          r === e.target &&
            9 === e.keyCode &&
            e.shiftKey &&
            (e.preventDefault(), m.focus());
      }
    })(jQuery),
      (n = jQuery),
      (container = document.getElementById("nav")),
      container &&
        ((html = document.getElementsByTagName("html")[0]),
        (body = document.getElementsByTagName("body")[0]),
        (button = document.getElementById("nav-toggle")),
        "undefined" != typeof button &&
          ((menu = container.getElementsByTagName("ul")[0]),
          n(".menu-item").click(function () {
            -1 !== container.className.indexOf("is-active") &&
              (n("html").removeClass("disable-scroll"),
              n("body").removeClass("js-nav-active"),
              n("#nav").removeClass("is-active"),
              n("#nav-toggle").removeClass("is-active"),
              button.setAttribute("aria-expanded", "false"),
              menu.setAttribute("aria-expanded", "false"));
          })));
  },
  235: function (e, t, n) {
    "use strict";
    n.r(t);
    var t = n(71),
      i = n.n(t);
    n(22), n(73), n(23);
    function a(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function r(t, n) {
      void 0 === t && (t = {}),
        void 0 === n && (n = {}),
        Object.keys(n).forEach(function (e) {
          void 0 === t[e]
            ? (t[e] = n[e])
            : a(n[e]) &&
              a(t[e]) &&
              0 < Object.keys(n[e]).length &&
              r(t[e], n[e]);
        });
    }
    var s = {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: { blur: function () {}, nodeName: "" },
      querySelector: function () {
        return null;
      },
      querySelectorAll: function () {
        return [];
      },
      getElementById: function () {
        return null;
      },
      createEvent: function () {
        return { initEvent: function () {} };
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return [];
          },
        };
      },
      createElementNS: function () {
        return {};
      },
      importNode: function () {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function h() {
      var e = "undefined" != typeof document ? document : {};
      return r(e, s), e;
    }
    var o = {
      document: s,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {},
      },
      CustomEvent: function () {
        return this;
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return "";
          },
        };
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {};
      },
      requestAnimationFrame: function (e) {
        return "undefined" == typeof setTimeout
          ? (e(), null)
          : setTimeout(e, 0);
      },
      cancelAnimationFrame: function (e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function f() {
      var e = "undefined" != typeof window ? window : {};
      return r(e, o), e;
    }
    function l(e) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function d(e, t) {
      return (d =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function u(e, t, n) {
      return (u = (function () {
        if (
          "undefined" != typeof Reflect &&
          Reflect.construct &&
          !Reflect.construct.sham
        ) {
          if ("function" == typeof Proxy) return 1;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              1
            );
          } catch (e) {
            return;
          }
        }
      })()
        ? Reflect.construct
        : function (e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            i = new (Function.bind.apply(e, i))();
            return n && d(i, n.prototype), i;
          }).apply(null, arguments);
    }
    function p(e) {
      var i = "function" == typeof Map ? new Map() : void 0;
      return (p = function (e) {
        if (
          null === e ||
          ((t = e), -1 === Function.toString.call(t).indexOf("[native code]"))
        )
          return e;
        var t;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== i) {
          if (i.has(e)) return i.get(e);
          i.set(e, n);
        }
        function n() {
          return u(e, arguments, l(this).constructor);
        }
        return (
          (n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          d(n, e)
        );
      })(e);
    }
    var c = (function (i) {
      var e, t;
      function n(e) {
        var t,
          n = i.call.apply(i, [this].concat(e)) || this;
        return (
          (e = (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(n)),
          (t = e.__proto__),
          Object.defineProperty(e, "__proto__", {
            get: function () {
              return t;
            },
            set: function (e) {
              t.__proto__ = e;
            },
          }),
          n
        );
      }
      return (
        (t = i),
        ((e = n).prototype = Object.create(t.prototype)),
        ((e.prototype.constructor = e).__proto__ = t),
        n
      );
    })(p(Array));
    function v(e) {
      var t = [];
      return (
        (e = void 0 === e ? [] : e).forEach(function (e) {
          Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
        }),
        t
      );
    }
    function m(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function g(e, t) {
      var n = f(),
        i = h(),
        a = [];
      if (!t && e instanceof c) return e;
      if (!e) return new c(a);
      if ("string" == typeof e) {
        var r = e.trim();
        if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
          var s = "div";
          0 === r.indexOf("<li") && (s = "ul"),
            0 === r.indexOf("<tr") && (s = "tbody"),
            (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (s = "tr"),
            0 === r.indexOf("<tbody") && (s = "table"),
            0 === r.indexOf("<option") && (s = "select");
          var o = i.createElement(s);
          o.innerHTML = r;
          for (var l = 0; l < o.childNodes.length; l += 1)
            a.push(o.childNodes[l]);
        } else
          a = (function (e, t) {
            if ("string" != typeof e) return [e];
            for (
              var n = [], i = t.querySelectorAll(e), a = 0;
              a < i.length;
              a += 1
            )
              n.push(i[a]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) a.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof c) return e;
        a = e;
      }
      return new c(
        (function (e) {
          for (var t = [], n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(a)
      );
    }
    g.fn = c.prototype;
    var w = "resize scroll".split(" ");
    function y(a) {
      return function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (void 0 !== t[0]) return this.on.apply(this, [a].concat(t));
        for (var i = 0; i < this.length; i += 1)
          w.indexOf(a) < 0 &&
            (a in this[i] ? this[i][a]() : g(this[i]).trigger(a));
        return this;
      };
    }
    y("click"),
      y("blur"),
      y("focus"),
      y("focusin"),
      y("focusout"),
      y("keyup"),
      y("keydown"),
      y("keypress"),
      y("submit"),
      y("change"),
      y("mousedown"),
      y("mousemove"),
      y("mouseup"),
      y("mouseenter"),
      y("mouseleave"),
      y("mouseout"),
      y("mouseover"),
      y("touchstart"),
      y("touchend"),
      y("touchmove"),
      y("resize"),
      y("scroll");
    var b = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          this.forEach(function (e) {
            (e = e.classList).add.apply(e, i);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          this.forEach(function (e) {
            (e = e.classList).remove.apply(e, i);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          0 <
          m(this, function (t) {
            return (
              0 <
              i.filter(function (e) {
                return t.classList.contains(e);
              }).length
            );
          }).length
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        this.forEach(function (t) {
          i.forEach(function (e) {
            t.classList.toggle(e);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (var i in e) (this[n][i] = e[i]), this[n].setAttribute(i, e[i]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = t[0],
          r = t[1],
          s = t[2],
          a = t[3];
        function o(e) {
          var t = e.target;
          if (t) {
            var n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), g(t).is(r))) s.apply(t, n);
            else
              for (var i = g(t).parents(), a = 0; a < i.length; a += 1)
                g(i[a]).is(r) && s.apply(i[a], n);
          }
        }
        function l(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        "function" == typeof t[1] &&
          ((i = t[0]), (s = t[1]), (a = t[2]), (r = void 0));
        for (
          var d, a = a || !1, u = i.split(" "), p = 0;
          p < this.length;
          p += 1
        ) {
          var c = this[p];
          if (r)
            for (d = 0; d < u.length; d += 1) {
              var h = u[d];
              c.dom7LiveListeners || (c.dom7LiveListeners = {}),
                c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []),
                c.dom7LiveListeners[h].push({ listener: s, proxyListener: o }),
                c.addEventListener(h, o, a);
            }
          else
            for (d = 0; d < u.length; d += 1) {
              var f = u[d];
              c.dom7Listeners || (c.dom7Listeners = {}),
                c.dom7Listeners[f] || (c.dom7Listeners[f] = []),
                c.dom7Listeners[f].push({ listener: s, proxyListener: l }),
                c.addEventListener(f, l, a);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var i = t[0],
          a = t[1],
          r = t[2],
          s = t[3];
        "function" == typeof t[1] &&
          ((i = t[0]), (r = t[1]), (s = t[2]), (a = void 0));
        for (var s = s || !1, o = i.split(" "), l = 0; l < o.length; l += 1)
          for (var d = o[l], u = 0; u < this.length; u += 1) {
            var p = this[u],
              c = void 0;
            if (
              (!a && p.dom7Listeners
                ? (c = p.dom7Listeners[d])
                : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
              c && c.length)
            )
              for (var h = c.length - 1; 0 <= h; --h) {
                var f = c[h];
                ((!r || f.listener !== r) &&
                  !(
                    r &&
                    f.listener &&
                    f.listener.dom7proxy &&
                    f.listener.dom7proxy === r
                  ) &&
                  r) ||
                  (p.removeEventListener(d, f.proxyListener, s),
                  c.splice(h, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (
          var e = f(), t = arguments.length, n = new Array(t), i = 0;
          i < t;
          i++
        )
          n[i] = arguments[i];
        for (var a = n[0].split(" "), r = n[1], s = 0; s < a.length; s += 1)
          for (var o = a[s], l = 0; l < this.length; l += 1) {
            var d,
              u = this[l];
            e.CustomEvent &&
              ((d = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0,
              })),
              (u.dom7EventData = n.filter(function (e, t) {
                return 0 < t;
              })),
              u.dispatchEvent(d),
              (u.dom7EventData = []),
              delete u.dom7EventData);
          }
        return this;
      },
      transitionEnd: function (n) {
        var i = this;
        return (
          n &&
            i.on("transitionend", function e(t) {
              t.target === this && (n.call(this, t), i.off("transitionend", e));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (0 < this.length) {
          if (e) {
            e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (0 < this.length) {
          if (e) {
            e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = f();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (0 < this.length) {
          var e = f(),
            t = h(),
            n = this[0],
            i = n.getBoundingClientRect(),
            a = t.body,
            r = n.clientTop || a.clientTop || 0,
            t = n.clientLeft || a.clientLeft || 0,
            a = n === e ? e.scrollY : n.scrollTop,
            n = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + a - r, left: i.left + n - t };
        }
        return null;
      },
      css: function (e, t) {
        var n,
          i = f();
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (var a in e) this[n].style[a] = e[a];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 !== arguments.length || "string" != typeof e) return this;
        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
        return this;
      },
      each: function (n) {
        return (
          n &&
            this.forEach(function (e, t) {
              n.apply(e, [e, t]);
            }),
          this
        );
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          n,
          i = f(),
          a = h(),
          r = this[0];
        if (!r || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (r.matches) return r.matches(e);
          if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
          if (r.msMatchesSelector) return r.msMatchesSelector(e);
          for (t = g(e), n = 0; n < t.length; n += 1) if (t[n] === r) return !0;
          return !1;
        }
        if (e === a) return r === a;
        if (e === i) return r === i;
        if (e.nodeType || e instanceof c) {
          for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
            if (t[n] === r) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (t - 1 < e) return g([]);
        if (e < 0) {
          t = t + e;
          return t < 0 ? g([]) : g([this[t]]);
        }
        return g([this[e]]);
      },
      append: function () {
        for (var e = h(), t = 0; t < arguments.length; t += 1)
          for (
            var n = t < 0 || arguments.length <= t ? void 0 : arguments[t],
              i = 0;
            i < this.length;
            i += 1
          )
            if ("string" == typeof n) {
              var a = e.createElement("div");
              for (a.innerHTML = n; a.firstChild; )
                this[i].appendChild(a.firstChild);
            } else if (n instanceof c)
              for (var r = 0; r < n.length; r += 1) this[i].appendChild(n[r]);
            else this[i].appendChild(n);
        return this;
      },
      prepend: function (e) {
        for (var t, n = h(), i = 0; i < this.length; i += 1)
          if ("string" == typeof e) {
            var a = n.createElement("div");
            for (a.innerHTML = e, t = a.childNodes.length - 1; 0 <= t; --t)
              this[i].insertBefore(a.childNodes[t], this[i].childNodes[0]);
          } else if (e instanceof c)
            for (t = 0; t < e.length; t += 1)
              this[i].insertBefore(e[t], this[i].childNodes[0]);
          else this[i].insertBefore(e, this[i].childNodes[0]);
        return this;
      },
      next: function (e) {
        return 0 < this.length
          ? e
            ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(e)
              ? g([this[0].nextElementSibling])
              : g([])
            : this[0].nextElementSibling
            ? g([this[0].nextElementSibling])
            : g([])
          : g([]);
      },
      nextAll: function (e) {
        var t = [],
          n = this[0];
        if (!n) return g([]);
        for (; n.nextElementSibling; ) {
          var i = n.nextElementSibling;
          (!e || g(i).is(e)) && t.push(i), (n = i);
        }
        return g(t);
      },
      prev: function (e) {
        if (0 < this.length) {
          var t = this[0];
          return e
            ? t.previousElementSibling && g(t.previousElementSibling).is(e)
              ? g([t.previousElementSibling])
              : g([])
            : t.previousElementSibling
            ? g([t.previousElementSibling])
            : g([]);
        }
        return g([]);
      },
      prevAll: function (e) {
        var t = [],
          n = this[0];
        if (!n) return g([]);
        for (; n.previousElementSibling; ) {
          var i = n.previousElementSibling;
          (!e || g(i).is(e)) && t.push(i), (n = i);
        }
        return g(t);
      },
      parent: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          null === this[n].parentNode ||
            (e && !g(this[n].parentNode).is(e)) ||
            t.push(this[n].parentNode);
        return g(t);
      },
      parents: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].parentNode; i; )
            (e && !g(i).is(e)) || t.push(i), (i = i.parentNode);
        return g(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? g([]) : t.is(e) ? t : t.parents(e).eq(0);
      },
      find: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].querySelectorAll(e), a = 0; a < i.length; a += 1)
            t.push(i[a]);
        return g(t);
      },
      children: function (e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var i = this[n].children, a = 0; a < i.length; a += 1)
            (e && !g(i[a]).is(e)) || t.push(i[a]);
        return g(t);
      },
      filter: function (e) {
        return g(m(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(b).forEach(function (e) {
      g.fn[e] = b[e];
    });
    var C,
      T,
      x,
      S = g;
    function E(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function k() {
      return Date.now();
    }
    function M(e, t) {
      void 0 === t && (t = "x");
      var n,
        i,
        a,
        r,
        s,
        o = f(),
        s =
          ((r = e),
          (e = f()),
          (s =
            (s =
              !(s = e.getComputedStyle ? e.getComputedStyle(r, null) : s) &&
              r.currentStyle
                ? r.currentStyle
                : s) || r.style));
      return (
        o.WebKitCSSMatrix
          ? (6 < (i = s.transform || s.webkitTransform).split(",").length &&
              (i = i
                .split(", ")
                .map(function (e) {
                  return e.replace(",", ".");
                })
                .join(", ")),
            (a = new o.WebKitCSSMatrix("none" === i ? "" : i)))
          : (n = (a =
              s.MozTransform ||
              s.OTransform ||
              s.MsTransform ||
              s.msTransform ||
              s.transform ||
              s
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,"))
              .toString()
              .split(",")),
        "x" === t &&
          (i = o.WebKitCSSMatrix
            ? a.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        (i =
          "y" === t
            ? o.WebKitCSSMatrix
              ? a.m42
              : 16 === n.length
              ? parseFloat(n[13])
              : parseFloat(n[5])
            : i) || 0
      );
    }
    function P(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function X(e) {
      for (
        var t = Object(arguments.length <= 0 ? void 0 : e),
          n = ["__proto__", "constructor", "prototype"],
          i = 1;
        i < arguments.length;
        i += 1
      ) {
        var a = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (null != a)
          for (
            var r = Object.keys(Object(a)).filter(function (e) {
                return n.indexOf(e) < 0;
              }),
              s = 0,
              o = r.length;
            s < o;
            s += 1
          ) {
            var l = r[s],
              d = Object.getOwnPropertyDescriptor(a, l);
            void 0 !== d &&
              d.enumerable &&
              (P(t[l]) && P(a[l])
                ? a[l].__swiper__
                  ? (t[l] = a[l])
                  : X(t[l], a[l])
                : !P(t[l]) && P(a[l])
                ? ((t[l] = {}), a[l].__swiper__ ? (t[l] = a[l]) : X(t[l], a[l]))
                : (t[l] = a[l]));
          }
      }
      return t;
    }
    function L(n, i) {
      Object.keys(i).forEach(function (t) {
        P(i[t]) &&
          Object.keys(i[t]).forEach(function (e) {
            "function" == typeof i[t][e] && (i[t][e] = i[t][e].bind(n));
          }),
          (n[t] = i[t]);
      });
    }
    function O() {
      var n, e;
      return (
        C ||
          ((n = f()),
          (e = h()),
          (C = {
            touch: !!(
              "ontouchstart" in n ||
              (n.DocumentTouch && e instanceof n.DocumentTouch)
            ),
            pointerEvents:
              !!n.PointerEvent &&
              "maxTouchPoints" in n.navigator &&
              0 <= n.navigator.maxTouchPoints,
            observer: "MutationObserver" in n || "WebkitMutationObserver" in n,
            passiveListener: (function () {
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                n.addEventListener("testPassiveListener", null, t);
              } catch (e) {}
              return e;
            })(),
            gestures: "ongesturestart" in n,
          })),
        C
      );
    }
    function A(e) {
      var t, n, i, a, r, s, o, l, d, u;
      return (
        void 0 === e && (e = {}),
        T ||
          ((n = (void 0 === (t = e) ? {} : t).userAgent),
          (i = O()),
          (a = (u = f()).navigator.platform),
          (r = n || u.navigator.userAgent),
          (s = { ios: !1, android: !1 }),
          (o = u.screen.width),
          (l = u.screen.height),
          (d = r.match(/(Android);?[\s\/]+([\d.]+)?/)),
          (e = r.match(/(iPad).*OS\s([\d_]+)/)),
          (t = r.match(/(iPod)(.*OS\s([\d_]+))?/)),
          (n = !e && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
          (u = "Win32" === a),
          (a = "MacIntel" === a),
          !e &&
            a &&
            i.touch &&
            0 <=
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(o + "x" + l) &&
            ((e = (e = r.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"]),
            (a = !1)),
          d && !u && ((s.os = "android"), (s.android = !0)),
          (e || n || t) && ((s.os = "ios"), (s.ios = !0)),
          (T = s)),
        T
      );
    }
    function I() {
      var e, t;
      return (
        x ||
          ((t = f()),
          (x = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari:
              0 <=
                (e = t.navigator.userAgent.toLowerCase()).indexOf("safari") &&
              e.indexOf("chrome") < 0 &&
              e.indexOf("android") < 0,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent
            ),
          })),
        x
      );
    }
    t = {
      name: "resize",
      create: function () {
        var r = this;
        X(r, {
          resize: {
            observer: null,
            createObserver: function () {
              r &&
                !r.destroyed &&
                r.initialized &&
                ((r.resize.observer = new ResizeObserver(function (e) {
                  var t = r.width,
                    n = r.height,
                    i = t,
                    a = n;
                  e.forEach(function (e) {
                    var t = e.contentBoxSize,
                      n = e.contentRect,
                      e = e.target;
                    (e && e !== r.el) ||
                      ((i = n ? n.width : (t[0] || t).inlineSize),
                      (a = n ? n.height : (t[0] || t).blockSize));
                  }),
                    (i === t && a === n) || r.resize.resizeHandler();
                })),
                r.resize.observer.observe(r.el));
            },
            removeObserver: function () {
              r.resize.observer &&
                r.resize.observer.unobserve &&
                r.el &&
                (r.resize.observer.unobserve(r.el), (r.resize.observer = null));
            },
            resizeHandler: function () {
              r &&
                !r.destroyed &&
                r.initialized &&
                (r.emit("beforeResize"), r.emit("resize"));
            },
            orientationChangeHandler: function () {
              r && !r.destroyed && r.initialized && r.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function (e) {
          var t = f();
          e.params.resizeObserver && void 0 !== f().ResizeObserver
            ? e.resize.createObserver()
            : (t.addEventListener("resize", e.resize.resizeHandler),
              t.addEventListener(
                "orientationchange",
                e.resize.orientationChangeHandler
              ));
        },
        destroy: function (e) {
          var t = f();
          e.resize.removeObserver(),
            t.removeEventListener("resize", e.resize.resizeHandler),
            t.removeEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
        },
      },
    };
    function z() {
      return (z =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              i = arguments[t];
            for (n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var D = {
        attach: function (e, t) {
          void 0 === t && (t = {});
          var n = f(),
            i = this,
            a = new (n.MutationObserver || n.WebkitMutationObserver)(function (
              e
            ) {
              var t;
              1 !== e.length
                ? ((t = function () {
                    i.emit("observerUpdate", e[0]);
                  }),
                  n.requestAnimationFrame
                    ? n.requestAnimationFrame(t)
                    : n.setTimeout(t, 0))
                : i.emit("observerUpdate", e[0]);
            });
          a.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            i.observer.observers.push(a);
        },
        init: function () {
          var e = this;
          if (e.support.observer && e.params.observer) {
            if (e.params.observeParents)
              for (var t = e.$el.parents(), n = 0; n < t.length; n += 1)
                e.observer.attach(t[n]);
            e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren,
            }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      },
      n = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function () {
          L(this, { observer: z({}, D, { observers: [] }) });
        },
        on: {
          init: function (e) {
            e.observer.init();
          },
          destroy: function (e) {
            e.observer.destroy();
          },
        },
      };
    function N() {
      var e,
        t,
        n = this,
        i = n.params,
        a = n.el;
      (a && 0 === a.offsetWidth) ||
        (i.breakpoints && n.setBreakpoint(),
        (e = n.allowSlideNext),
        (t = n.allowSlidePrev),
        (a = n.snapGrid),
        (n.allowSlideNext = !0),
        (n.allowSlidePrev = !0),
        n.updateSize(),
        n.updateSlides(),
        n.updateSlidesClasses(),
        ("auto" === i.slidesPerView || 1 < i.slidesPerView) &&
        n.isEnd &&
        !n.isBeginning &&
        !n.params.centeredSlides
          ? n.slideTo(n.slides.length - 1, 0, !1, !0)
          : n.slideTo(n.activeIndex, 0, !1, !0),
        n.autoplay &&
          n.autoplay.running &&
          n.autoplay.paused &&
          n.autoplay.run(),
        (n.allowSlidePrev = t),
        (n.allowSlideNext = e),
        n.params.watchOverflow && a !== n.snapGrid && n.checkOverflow());
    }
    var B = !1;
    function _() {}
    var G = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function j(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var $ = {
        modular: {
          useParams: function (t) {
            var n = this;
            n.modules &&
              Object.keys(n.modules).forEach(function (e) {
                e = n.modules[e];
                e.params && X(t, e.params);
              });
          },
          useModules: function (n) {
            void 0 === n && (n = {});
            var i = this;
            i.modules &&
              Object.keys(i.modules).forEach(function (e) {
                var t = i.modules[e],
                  e = n[e] || {};
                t.on &&
                  i.on &&
                  Object.keys(t.on).forEach(function (e) {
                    i.on(e, t.on[e]);
                  }),
                  t.create && t.create.bind(i)(e);
              });
          },
        },
        eventsEmitter: {
          on: function (e, t, n) {
            var i = this;
            if ("function" != typeof t) return i;
            var a = n ? "unshift" : "push";
            return (
              e.split(" ").forEach(function (e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][a](t);
              }),
              i
            );
          },
          once: function (i, a, e) {
            var r = this;
            return "function" != typeof a
              ? r
              : ((s.__emitterProxy = a), r.on(i, s, e));
            function s() {
              r.off(i, s), s.__emitterProxy && delete s.__emitterProxy;
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              a.apply(r, t);
            }
          },
          onAny: function (e, t) {
            if ("function" != typeof e) return this;
            t = t ? "unshift" : "push";
            return (
              this.eventsAnyListeners.indexOf(e) < 0 &&
                this.eventsAnyListeners[t](e),
              this
            );
          },
          offAny: function (e) {
            var t = this;
            if (!t.eventsAnyListeners) return t;
            e = t.eventsAnyListeners.indexOf(e);
            return 0 <= e && t.eventsAnyListeners.splice(e, 1), t;
          },
          off: function (e, i) {
            var a = this;
            return (
              a.eventsListeners &&
                e.split(" ").forEach(function (n) {
                  void 0 === i
                    ? (a.eventsListeners[n] = [])
                    : a.eventsListeners[n] &&
                      a.eventsListeners[n].forEach(function (e, t) {
                        (e === i ||
                          (e.__emitterProxy && e.__emitterProxy === i)) &&
                          a.eventsListeners[n].splice(t, 1);
                      });
                }),
              a
            );
          },
          emit: function () {
            var e,
              n,
              i,
              a = this;
            if (!a.eventsListeners) return a;
            for (var t = arguments.length, r = new Array(t), s = 0; s < t; s++)
              r[s] = arguments[s];
            return (
              (i =
                "string" == typeof r[0] || Array.isArray(r[0])
                  ? ((e = r[0]), (n = r.slice(1, r.length)), a)
                  : ((e = r[0].events), (n = r[0].data), r[0].context || a)),
              n.unshift(i),
              (Array.isArray(e) ? e : e.split(" ")).forEach(function (t) {
                a.eventsAnyListeners &&
                  a.eventsAnyListeners.length &&
                  a.eventsAnyListeners.forEach(function (e) {
                    e.apply(i, [t].concat(n));
                  }),
                  a.eventsListeners &&
                    a.eventsListeners[t] &&
                    a.eventsListeners[t].forEach(function (e) {
                      e.apply(i, n);
                    });
              }),
              a
            );
          },
        },
        update: {
          updateSize: function () {
            var e = this,
              t = e.$el,
              n =
                void 0 !== e.params.width && null !== e.params.width
                  ? e.params.width
                  : t[0].clientWidth,
              i =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : t[0].clientHeight;
            (0 === n && e.isHorizontal()) ||
              (0 === i && e.isVertical()) ||
              ((n =
                n -
                parseInt(t.css("padding-left") || 0, 10) -
                parseInt(t.css("padding-right") || 0, 10)),
              (i =
                i -
                parseInt(t.css("padding-top") || 0, 10) -
                parseInt(t.css("padding-bottom") || 0, 10)),
              X(e, {
                width: (n = Number.isNaN(n) ? 0 : n),
                height: (i = Number.isNaN(i) ? 0 : i),
                size: e.isHorizontal() ? n : i,
              }));
          },
          updateSlides: function () {
            function n(e) {
              return t.isHorizontal()
                ? e
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[e];
            }
            function e(e, t) {
              return parseFloat(e.getPropertyValue(n(t)) || 0);
            }
            var t = this,
              i = t.params,
              a = t.$wrapperEl,
              r = t.size,
              s = t.rtlTranslate,
              o = t.wrongRTL,
              l = ((w = t.virtual && i.virtual.enabled) ? t.virtual : t).slides
                .length,
              d = a.children("." + t.params.slideClass),
              u = (w ? t.virtual.slides : d).length,
              p = [],
              c = [],
              h = [],
              f = i.slidesOffsetBefore;
            "function" == typeof f && (f = i.slidesOffsetBefore.call(t));
            var v = i.slidesOffsetAfter;
            "function" == typeof v && (v = i.slidesOffsetAfter.call(t));
            var m,
              g = t.snapGrid.length,
              w = t.slidesGrid.length,
              y = i.spaceBetween,
              b = -f,
              C = 0,
              T = 0;
            if (void 0 !== r) {
              "string" == typeof y &&
                0 <= y.indexOf("%") &&
                (y = (parseFloat(y.replace("%", "")) / 100) * r),
                (t.virtualSize = -y),
                s
                  ? d.css({ marginLeft: "", marginTop: "" })
                  : d.css({ marginRight: "", marginBottom: "" }),
                1 < i.slidesPerColumn &&
                  ((m =
                    Math.floor(u / i.slidesPerColumn) ===
                    u / t.params.slidesPerColumn
                      ? u
                      : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn),
                  "auto" !== i.slidesPerView &&
                    "row" === i.slidesPerColumnFill &&
                    (m = Math.max(m, i.slidesPerView * i.slidesPerColumn)));
              for (
                var x,
                  S,
                  E,
                  k,
                  M,
                  P = i.slidesPerColumn,
                  L = m / P,
                  O = Math.floor(u / i.slidesPerColumn),
                  A = 0;
                A < u;
                A += 1
              ) {
                R = 0;
                var I,
                  z,
                  D,
                  N,
                  B,
                  _,
                  G,
                  j,
                  $,
                  R,
                  F = d.eq(A);
                1 < i.slidesPerColumn &&
                  (($ = G = _ = void 0),
                  "row" === i.slidesPerColumnFill && 1 < i.slidesPerGroup
                    ? ((B = Math.floor(
                        A / (i.slidesPerGroup * i.slidesPerColumn)
                      )),
                      (D = A - i.slidesPerColumn * i.slidesPerGroup * B),
                      (N =
                        0 === B
                          ? i.slidesPerGroup
                          : Math.min(
                              Math.ceil((u - B * P * i.slidesPerGroup) / P),
                              i.slidesPerGroup
                            )),
                      (G =
                        D - ($ = Math.floor(D / N)) * N + B * i.slidesPerGroup),
                      F.css({
                        "-webkit-box-ordinal-group": (_ = G + ($ * m) / P),
                        "-moz-box-ordinal-group": _,
                        "-ms-flex-order": _,
                        "-webkit-order": _,
                        order: _,
                      }))
                    : "column" === i.slidesPerColumnFill
                    ? (($ = A - (G = Math.floor(A / P)) * P),
                      (O < G || (G === O && $ === P - 1)) &&
                        P <= ($ += 1) &&
                        (($ = 0), (G += 1)))
                    : (G = A - ($ = Math.floor(A / L)) * L),
                  F.css(
                    n("margin-top"),
                    0 !== $ && i.spaceBetween && i.spaceBetween + "px"
                  )),
                  "none" !== F.css("display") &&
                    ("auto" === i.slidesPerView
                      ? ((j = getComputedStyle(F[0])),
                        (I = F[0].style.transform),
                        (z = F[0].style.webkitTransform),
                        I && (F[0].style.transform = "none"),
                        z && (F[0].style.webkitTransform = "none"),
                        (R = i.roundLengths
                          ? t.isHorizontal()
                            ? F.outerWidth(!0)
                            : F.outerHeight(!0)
                          : ((D = e(j, "width")),
                            (N = e(j, "padding-left")),
                            (B = e(j, "padding-right")),
                            (_ = e(j, "margin-left")),
                            (G = e(j, "margin-right")),
                            ($ = j.getPropertyValue("box-sizing")) &&
                            "border-box" === $
                              ? D + _ + G
                              : (($ = (j = F[0]).clientWidth),
                                D + N + B + _ + G + (j.offsetWidth - $)))),
                        I && (F[0].style.transform = I),
                        z && (F[0].style.webkitTransform = z),
                        i.roundLengths && (R = Math.floor(R)))
                      : ((R =
                          (r - (i.slidesPerView - 1) * y) / i.slidesPerView),
                        i.roundLengths && (R = Math.floor(R)),
                        d[A] && (d[A].style[n("width")] = R + "px")),
                    d[A] && (d[A].swiperSlideSize = R),
                    h.push(R),
                    i.centeredSlides
                      ? ((b = b + R / 2 + C / 2 + y),
                        0 === C && 0 !== A && (b = b - r / 2 - y),
                        0 === A && (b = b - r / 2 - y),
                        Math.abs(b) < 0.001 && (b = 0),
                        i.roundLengths && (b = Math.floor(b)),
                        T % i.slidesPerGroup == 0 && p.push(b),
                        c.push(b))
                      : (i.roundLengths && (b = Math.floor(b)),
                        (T - Math.min(t.params.slidesPerGroupSkip, T)) %
                          t.params.slidesPerGroup ==
                          0 && p.push(b),
                        c.push(b),
                        (b = b + R + y)),
                    (t.virtualSize += R + y),
                    (C = R),
                    (T += 1));
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, r) + v),
                s &&
                  o &&
                  ("slide" === i.effect || "coverflow" === i.effect) &&
                  a.css({ width: t.virtualSize + i.spaceBetween + "px" }),
                i.setWrapperSize &&
                  a.css(
                    (((o = {})[n("width")] =
                      t.virtualSize + i.spaceBetween + "px"),
                    o)
                  ),
                1 < i.slidesPerColumn)
              )
                if (
                  ((t.virtualSize = (R + i.spaceBetween) * m),
                  (t.virtualSize =
                    Math.ceil(t.virtualSize / i.slidesPerColumn) -
                    i.spaceBetween),
                  a.css(
                    (((x = {})[n("width")] =
                      t.virtualSize + i.spaceBetween + "px"),
                    x)
                  ),
                  i.centeredSlides)
                ) {
                  for (var H = [], V = 0; V < p.length; V += 1) {
                    var W = p[V];
                    i.roundLengths && (W = Math.floor(W)),
                      p[V] < t.virtualSize + p[0] && H.push(W);
                  }
                  p = H;
                }
              if (!i.centeredSlides) {
                H = [];
                for (var q = 0; q < p.length; q += 1) {
                  var Y = p[q];
                  i.roundLengths && (Y = Math.floor(Y)),
                    p[q] <= t.virtualSize - r && H.push(Y);
                }
                (p = H),
                  1 <
                    Math.floor(t.virtualSize - r) -
                      Math.floor(p[p.length - 1]) && p.push(t.virtualSize - r);
              }
              0 === p.length && (p = [0]),
                0 !== i.spaceBetween &&
                  ((x =
                    t.isHorizontal() && s ? "marginLeft" : n("marginRight")),
                  d
                    .filter(function (e, t) {
                      return !i.cssMode || t !== d.length - 1;
                    })
                    .css((((s = {})[x] = y + "px"), s))),
                i.centeredSlides &&
                  i.centeredSlidesBounds &&
                  ((S = 0),
                  h.forEach(function (e) {
                    S += e + (i.spaceBetween || 0);
                  }),
                  (E = (S -= i.spaceBetween) - r),
                  (p = p.map(function (e) {
                    return e < 0 ? -f : E < e ? E + v : e;
                  }))),
                i.centerInsufficientSlides &&
                  ((k = 0),
                  h.forEach(function (e) {
                    k += e + (i.spaceBetween || 0);
                  }),
                  (k -= i.spaceBetween) < r &&
                    ((M = (r - k) / 2),
                    p.forEach(function (e, t) {
                      p[t] = e - M;
                    }),
                    c.forEach(function (e, t) {
                      c[t] = e + M;
                    }))),
                X(t, {
                  slides: d,
                  snapGrid: p,
                  slidesGrid: c,
                  slidesSizesGrid: h,
                }),
                u !== l && t.emit("slidesLengthChange"),
                p.length !== g &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                c.length !== w && t.emit("slidesGridLengthChange"),
                (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                  t.updateSlidesOffset();
            }
          },
          updateAutoHeight: function (e) {
            var t,
              n,
              i = this,
              a = [],
              r = 0;
            if (
              ("number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed),
              "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
            )
              if (i.params.centeredSlides)
                i.visibleSlides.each(function (e) {
                  a.push(e);
                });
              else
                for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                  var s = i.activeIndex + t;
                  if (s > i.slides.length) break;
                  a.push(i.slides.eq(s)[0]);
                }
            else a.push(i.slides.eq(i.activeIndex)[0]);
            for (t = 0; t < a.length; t += 1)
              void 0 !== a[t] && (r = r < (n = a[t].offsetHeight) ? n : r);
            r && i.$wrapperEl.css("height", r + "px");
          },
          updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
              e[t].swiperSlideOffset = this.isHorizontal()
                ? e[t].offsetLeft
                : e[t].offsetTop;
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
              n = t.params,
              i = t.slides,
              a = t.rtlTranslate;
            if (0 !== i.length) {
              void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
              var r = a ? e : -e;
              i.removeClass(n.slideVisibleClass),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = []);
              for (var s = 0; s < i.length; s += 1) {
                var o,
                  l,
                  d = i[s],
                  u =
                    (r +
                      (n.centeredSlides ? t.minTranslate() : 0) -
                      d.swiperSlideOffset) /
                    (d.swiperSlideSize + n.spaceBetween);
                (n.watchSlidesVisibility ||
                  (n.centeredSlides && n.autoHeight)) &&
                  ((l =
                    (o = -(r - d.swiperSlideOffset)) + t.slidesSizesGrid[s]),
                  ((0 <= o && o < t.size - 1) ||
                    (1 < l && l <= t.size) ||
                    (o <= 0 && l >= t.size)) &&
                    (t.visibleSlides.push(d),
                    t.visibleSlidesIndexes.push(s),
                    i.eq(s).addClass(n.slideVisibleClass))),
                  (d.progress = a ? -u : u);
              }
              t.visibleSlides = S(t.visibleSlides);
            }
          },
          updateProgress: function (e) {
            var t = this;
            void 0 === e &&
              ((o = t.rtlTranslate ? -1 : 1),
              (e = (t && t.translate && t.translate * o) || 0));
            var n = t.params,
              i = t.maxTranslate() - t.minTranslate(),
              a = t.progress,
              r = t.isBeginning,
              s = r,
              o = (l = t.isEnd),
              l =
                0 == i
                  ? (r = !(a = 0))
                  : ((r = (a = (e - t.minTranslate()) / i) <= 0), 1 <= a);
            X(t, { progress: a, isBeginning: r, isEnd: l }),
              (n.watchSlidesProgress ||
                n.watchSlidesVisibility ||
                (n.centeredSlides && n.autoHeight)) &&
                t.updateSlidesProgress(e),
              r && !s && t.emit("reachBeginning toEdge"),
              l && !o && t.emit("reachEnd toEdge"),
              ((s && !r) || (o && !l)) && t.emit("fromEdge"),
              t.emit("progress", a);
          },
          updateSlidesClasses: function () {
            var e = this,
              t = e.slides,
              n = e.params,
              i = e.$wrapperEl,
              a = e.activeIndex,
              r = e.realIndex,
              s = e.virtual && n.virtual.enabled;
            t.removeClass(
              n.slideActiveClass +
                " " +
                n.slideNextClass +
                " " +
                n.slidePrevClass +
                " " +
                n.slideDuplicateActiveClass +
                " " +
                n.slideDuplicateNextClass +
                " " +
                n.slideDuplicatePrevClass
            ),
              (a = s
                ? e.$wrapperEl.find(
                    "." + n.slideClass + '[data-swiper-slide-index="' + a + '"]'
                  )
                : t.eq(a)).addClass(n.slideActiveClass),
              n.loop &&
                (a.hasClass(n.slideDuplicateClass)
                  ? i.children(
                      "." +
                        n.slideClass +
                        ":not(." +
                        n.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        r +
                        '"]'
                    )
                  : i.children(
                      "." +
                        n.slideClass +
                        "." +
                        n.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        r +
                        '"]'
                    )
                ).addClass(n.slideDuplicateActiveClass),
              (r = a
                .nextAll("." + n.slideClass)
                .eq(0)
                .addClass(n.slideNextClass)),
              n.loop &&
                0 === r.length &&
                (r = t.eq(0)).addClass(n.slideNextClass),
              (a = a
                .prevAll("." + n.slideClass)
                .eq(0)
                .addClass(n.slidePrevClass)),
              n.loop &&
                0 === a.length &&
                (a = t.eq(-1)).addClass(n.slidePrevClass),
              n.loop &&
                ((r.hasClass(n.slideDuplicateClass)
                  ? i.children(
                      "." +
                        n.slideClass +
                        ":not(." +
                        n.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        r.attr("data-swiper-slide-index") +
                        '"]'
                    )
                  : i.children(
                      "." +
                        n.slideClass +
                        "." +
                        n.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        r.attr("data-swiper-slide-index") +
                        '"]'
                    )
                ).addClass(n.slideDuplicateNextClass),
                (a.hasClass(n.slideDuplicateClass)
                  ? i.children(
                      "." +
                        n.slideClass +
                        ":not(." +
                        n.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        a.attr("data-swiper-slide-index") +
                        '"]'
                    )
                  : i.children(
                      "." +
                        n.slideClass +
                        "." +
                        n.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        a.attr("data-swiper-slide-index") +
                        '"]'
                    )
                ).addClass(n.slideDuplicatePrevClass)),
              e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            var t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              i = t.slidesGrid,
              a = t.snapGrid,
              r = t.params,
              s = t.activeIndex,
              o = t.realIndex,
              l = t.snapIndex,
              d = e;
            if (void 0 === d) {
              for (var u = 0; u < i.length; u += 1)
                void 0 !== i[u + 1]
                  ? n >= i[u] && n < i[u + 1] - (i[u + 1] - i[u]) / 2
                    ? (d = u)
                    : n >= i[u] && n < i[u + 1] && (d = u + 1)
                  : n >= i[u] && (d = u);
              r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
            }
            (r =
              0 <= a.indexOf(n)
                ? a.indexOf(n)
                : (e = Math.min(r.slidesPerGroupSkip, d)) +
                  Math.floor((d - e) / r.slidesPerGroup)) >= a.length &&
              (r = a.length - 1),
              d !== s
                ? ((a = parseInt(
                    t.slides.eq(d).attr("data-swiper-slide-index") || d,
                    10
                  )),
                  X(t, {
                    snapIndex: r,
                    realIndex: a,
                    previousIndex: s,
                    activeIndex: d,
                  }),
                  t.emit("activeIndexChange"),
                  t.emit("snapIndexChange"),
                  o !== a && t.emit("realIndexChange"),
                  (t.initialized || t.params.runCallbacksOnInit) &&
                    t.emit("slideChange"))
                : r !== l && ((t.snapIndex = r), t.emit("snapIndexChange"));
          },
          updateClickedSlide: function (e) {
            var t,
              n = this,
              i = n.params,
              a = S(e.target).closest("." + i.slideClass)[0],
              r = !1;
            if (a)
              for (var s = 0; s < n.slides.length; s += 1)
                if (n.slides[s] === a) {
                  (r = !0), (t = s);
                  break;
                }
            if (!a || !r)
              return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
            (n.clickedSlide = a),
              n.virtual && n.params.virtual.enabled
                ? (n.clickedIndex = parseInt(
                    S(a).attr("data-swiper-slide-index"),
                    10
                  ))
                : (n.clickedIndex = t),
              i.slideToClickedSlide &&
                void 0 !== n.clickedIndex &&
                n.clickedIndex !== n.activeIndex &&
                n.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
              n = this.rtlTranslate,
              i = this.translate,
              a = this.$wrapperEl;
            return t.virtualTranslate
              ? n
                ? -i
                : i
              : t.cssMode
              ? i
              : ((e = M(a[0], e)), (e = n ? -e : e) || 0);
          },
          setTranslate: function (e, t) {
            var n = this,
              i = n.rtlTranslate,
              a = n.params,
              r = n.$wrapperEl,
              s = n.wrapperEl,
              o = n.progress,
              l = 0,
              d = 0;
            n.isHorizontal() ? (l = i ? -e : e) : (d = e),
              a.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
              a.cssMode
                ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    n.isHorizontal() ? -l : -d)
                : a.virtualTranslate ||
                  r.transform("translate3d(" + l + "px, " + d + "px, 0px)"),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? l : d),
              (0 == (d = n.maxTranslate() - n.minTranslate())
                ? 0
                : (e - n.minTranslate()) / d) !== o && n.updateProgress(e),
              n.emit("setTranslate", n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, n, i, a) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0),
              void 0 === i && (i = !0);
            var r = this,
              s = r.params,
              o = r.wrapperEl;
            if (r.animating && s.preventInteractionOnTransition) return !1;
            var l = r.minTranslate(),
              d = r.maxTranslate(),
              d = i && l < e ? l : i && e < d ? d : e;
            if ((r.updateProgress(d), s.cssMode)) {
              e = r.isHorizontal();
              return (
                0 !== t && o.scrollTo
                  ? o.scrollTo(
                      (((s = {})[e ? "left" : "top"] = -d),
                      (s.behavior = "smooth"),
                      s)
                    )
                  : (o[e ? "scrollLeft" : "scrollTop"] = -d),
                !0
              );
            }
            return (
              0 === t
                ? (r.setTransition(0),
                  r.setTranslate(d),
                  n &&
                    (r.emit("beforeTransitionStart", t, a),
                    r.emit("transitionEnd")))
                : (r.setTransition(t),
                  r.setTranslate(d),
                  n &&
                    (r.emit("beforeTransitionStart", t, a),
                    r.emit("transitionStart")),
                  r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                          n && r.emit("transitionEnd"));
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
              this.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var n = this,
              i = n.activeIndex,
              a = n.params,
              r = n.previousIndex;
            a.cssMode ||
              (a.autoHeight && n.updateAutoHeight(),
              (t = (t = t) || (r < i ? "next" : i < r ? "prev" : "reset")),
              n.emit("transitionStart"),
              e &&
                i !== r &&
                ("reset" !== t
                  ? (n.emit("slideChangeTransitionStart"),
                    "next" === t
                      ? n.emit("slideNextTransitionStart")
                      : n.emit("slidePrevTransitionStart"))
                  : n.emit("slideResetTransitionStart")));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var n = this,
              i = n.activeIndex,
              a = n.previousIndex,
              r = n.params;
            (n.animating = !1),
              r.cssMode ||
                (n.setTransition(0),
                (t = (t = t) || (a < i ? "next" : i < a ? "prev" : "reset")),
                n.emit("transitionEnd"),
                e &&
                  i !== a &&
                  ("reset" !== t
                    ? (n.emit("slideChangeTransitionEnd"),
                      "next" === t
                        ? n.emit("slideNextTransitionEnd")
                        : n.emit("slidePrevTransitionEnd"))
                    : n.emit("slideResetTransitionEnd")));
          },
        },
        slide: {
          slideTo: function (e, t, n, i) {
            if (
              (void 0 === t && (t = this.params.speed),
              void 0 === n && (n = !0),
              "number" != typeof (e = void 0 === e ? 0 : e) &&
                "string" != typeof e)
            )
              throw new Error(
                "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                  typeof e +
                  "] given."
              );
            if ("string" == typeof e) {
              var a = parseInt(e, 10);
              if (!isFinite(a))
                throw new Error(
                  "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                    e +
                    "] given."
                );
              e = a;
            }
            var r = this,
              s = e;
            s < 0 && (s = 0);
            var o = r.params,
              l = r.snapGrid,
              d = r.slidesGrid,
              u = r.previousIndex,
              p = r.activeIndex,
              c = r.rtlTranslate,
              a = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            (e = Math.min(r.params.slidesPerGroupSkip, s)),
              (e += Math.floor((s - e) / r.params.slidesPerGroup)) >=
                l.length && (e = l.length - 1),
              (p || o.initialSlide || 0) === (u || 0) &&
                n &&
                r.emit("beforeSlideChangeStart");
            var h,
              f = -l[e];
            if ((r.updateProgress(f), o.normalizeSlideIndex))
              for (var v = 0; v < d.length; v += 1) {
                var m = -Math.floor(100 * f),
                  g = Math.floor(100 * d[v]),
                  w = Math.floor(100 * d[v + 1]);
                void 0 !== d[v + 1]
                  ? g <= m && m < w - (w - g) / 2
                    ? (s = v)
                    : g <= m && m < w && (s = v + 1)
                  : g <= m && (s = v);
              }
            if (r.initialized && s !== p) {
              if (!r.allowSlideNext && f < r.translate && f < r.minTranslate())
                return !1;
              if (
                !r.allowSlidePrev &&
                f > r.translate &&
                f > r.maxTranslate() &&
                (p || 0) !== s
              )
                return !1;
            }
            if (
              ((h = p < s ? "next" : s < p ? "prev" : "reset"),
              (c && -f === r.translate) || (!c && f === r.translate))
            )
              return (
                r.updateActiveIndex(s),
                o.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== o.effect && r.setTranslate(f),
                "reset" !== h &&
                  (r.transitionStart(n, h), r.transitionEnd(n, h)),
                !1
              );
            if (o.cssMode) {
              (p = r.isHorizontal()), (o = -f);
              return (
                c && (o = a.scrollWidth - a.offsetWidth - o),
                0 !== t && a.scrollTo
                  ? a.scrollTo(
                      (((c = {})[p ? "left" : "top"] = o),
                      (c.behavior = "smooth"),
                      c)
                    )
                  : (a[p ? "scrollLeft" : "scrollTop"] = o),
                !0
              );
            }
            return (
              0 === t
                ? (r.setTransition(0),
                  r.setTranslate(f),
                  r.updateActiveIndex(s),
                  r.updateSlidesClasses(),
                  r.emit("beforeTransitionStart", t, i),
                  r.transitionStart(n, h),
                  r.transitionEnd(n, h))
                : (r.setTransition(t),
                  r.setTranslate(f),
                  r.updateActiveIndex(s),
                  r.updateSlidesClasses(),
                  r.emit("beforeTransitionStart", t, i),
                  r.transitionStart(n, h),
                  r.animating ||
                    ((r.animating = !0),
                    r.onSlideToWrapperTransitionEnd ||
                      (r.onSlideToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            r.onSlideToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            r.onSlideToWrapperTransitionEnd
                          ),
                          (r.onSlideToWrapperTransitionEnd = null),
                          delete r.onSlideToWrapperTransitionEnd,
                          r.transitionEnd(n, h));
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ))),
              !0
            );
          },
          slideToLoop: function (e, t, n, i) {
            return (
              void 0 === t && (t = this.params.speed),
              (e = void 0 === e ? 0 : e),
              this.params.loop && (e += this.loopedSlides),
              this.slideTo(e, t, (n = void 0 === n ? !0 : n), i)
            );
          },
          slideNext: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
              a = i.params,
              r = i.animating,
              s = i.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;
            if (a.loop) {
              if (r && a.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return i.slideTo(i.activeIndex + s, e, t, n);
          },
          slidePrev: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
              a = i.params,
              r = i.animating,
              s = i.snapGrid,
              o = i.slidesGrid,
              l = i.rtlTranslate;
            if (a.loop) {
              if (r && a.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function d(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var u,
              p = d(l ? i.translate : -i.translate),
              l = s.map(d),
              c = (s[l.indexOf(p)], s[l.indexOf(p) - 1]);
            return (
              void 0 === c &&
                a.cssMode &&
                s.forEach(function (e) {
                  !c && e <= p && (c = e);
                }),
              void 0 !== c && (u = o.indexOf(c)) < 0 && (u = i.activeIndex - 1),
              i.slideTo(u, e, t, n)
            );
          },
          slideReset: function (e, t, n) {
            return (
              void 0 === e && (e = this.params.speed),
              this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), n)
            );
          },
          slideToClosest: function (e, t, n, i) {
            void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              void 0 === i && (i = 0.5);
            var a = this,
              r = a.activeIndex,
              s = Math.min(a.params.slidesPerGroupSkip, r),
              o = s + Math.floor((r - s) / a.params.slidesPerGroup),
              l = a.rtlTranslate ? a.translate : -a.translate;
            return (
              l >= a.snapGrid[o]
                ? ((s = a.snapGrid[o]),
                  (a.snapGrid[o + 1] - s) * i < l - s &&
                    (r += a.params.slidesPerGroup))
                : l - (l = a.snapGrid[o - 1]) <= (a.snapGrid[o] - l) * i &&
                  (r -= a.params.slidesPerGroup),
              (r = Math.max(r, 0)),
              (r = Math.min(r, a.slidesGrid.length - 1)),
              a.slideTo(r, e, t, n)
            );
          },
          slideToClickedSlide: function () {
            var e,
              t = this,
              n = t.params,
              i = t.$wrapperEl,
              a =
                "auto" === n.slidesPerView
                  ? t.slidesPerViewDynamic()
                  : n.slidesPerView,
              r = t.clickedIndex;
            n.loop
              ? t.animating ||
                ((e = parseInt(
                  S(t.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                n.centeredSlides
                  ? r < t.loopedSlides - a / 2 ||
                    r > t.slides.length - t.loopedSlides + a / 2
                    ? (t.loopFix(),
                      (r = i
                        .children(
                          "." +
                            n.slideClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            n.slideDuplicateClass +
                            ")"
                        )
                        .eq(0)
                        .index()),
                      E(function () {
                        t.slideTo(r);
                      }))
                    : t.slideTo(r)
                  : r > t.slides.length - a
                  ? (t.loopFix(),
                    (r = i
                      .children(
                        "." +
                          n.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          n.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    E(function () {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r))
              : t.slideTo(r);
          },
        },
        loop: {
          loopCreate: function () {
            var i = this,
              e = h(),
              t = i.params,
              n = i.$wrapperEl;
            n.children(
              "." + t.slideClass + "." + t.slideDuplicateClass
            ).remove();
            var a = n.children("." + t.slideClass);
            if (t.loopFillGroupWithBlank) {
              var r = t.slidesPerGroup - (a.length % t.slidesPerGroup);
              if (r !== t.slidesPerGroup) {
                for (var s = 0; s < r; s += 1) {
                  var o = S(e.createElement("div")).addClass(
                    t.slideClass + " " + t.slideBlankClass
                  );
                  n.append(o);
                }
                a = n.children("." + t.slideClass);
              }
            }
            "auto" !== t.slidesPerView ||
              t.loopedSlides ||
              (t.loopedSlides = a.length),
              (i.loopedSlides = Math.ceil(
                parseFloat(t.loopedSlides || t.slidesPerView, 10)
              )),
              (i.loopedSlides += t.loopAdditionalSlides),
              i.loopedSlides > a.length && (i.loopedSlides = a.length);
            var l = [],
              d = [];
            a.each(function (e, t) {
              var n = S(e);
              t < i.loopedSlides && d.push(e),
                t < a.length && t >= a.length - i.loopedSlides && l.push(e),
                n.attr("data-swiper-slide-index", t);
            });
            for (var u = 0; u < d.length; u += 1)
              n.append(S(d[u].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (var p = l.length - 1; 0 <= p; --p)
              n.prepend(S(l[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
          },
          loopFix: function () {
            var e = this;
            e.emit("beforeLoopFix");
            var t = e.activeIndex,
              n = e.slides,
              i = e.loopedSlides,
              a = e.allowSlidePrev,
              r = e.allowSlideNext,
              s = e.snapGrid,
              o = e.rtlTranslate;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            var l,
              s = -s[t] - e.getTranslate();
            t < i
              ? ((l = n.length - 3 * i + t),
                e.slideTo((l += i), 0, !1, !0) &&
                  0 != s &&
                  e.setTranslate((o ? -e.translate : e.translate) - s))
              : t >= n.length - i &&
                ((l = -n.length + t + i),
                e.slideTo((l += i), 0, !1, !0) &&
                  0 != s &&
                  e.setTranslate((o ? -e.translate : e.translate) - s)),
              (e.allowSlidePrev = a),
              (e.allowSlideNext = r),
              e.emit("loopFix");
          },
          loopDestroy: function () {
            var e = this.$wrapperEl,
              t = this.params,
              n = this.slides;
            e
              .children(
                "." +
                  t.slideClass +
                  "." +
                  t.slideDuplicateClass +
                  ",." +
                  t.slideClass +
                  "." +
                  t.slideBlankClass
              )
              .remove(),
              n.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            var t = this;
            t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode ||
              (((t = t.el).style.cursor = "move"),
              (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (t.style.cursor = e ? "grabbing" : "grab"));
          },
          unsetGrabCursor: function () {
            var e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.el.style.cursor = "");
          },
        },
        manipulation: {
          appendSlide: function (e) {
            var t = this,
              n = t.$wrapperEl,
              i = t.params;
            if (
              (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            )
              for (var a = 0; a < e.length; a += 1) e[a] && n.append(e[a]);
            else n.append(e);
            i.loop && t.loopCreate(),
              (i.observer && t.support.observer) || t.update();
          },
          prependSlide: function (e) {
            var t = this,
              n = t.params,
              i = t.$wrapperEl,
              a = t.activeIndex;
            n.loop && t.loopDestroy();
            var r = a + 1;
            if ("object" == typeof e && "length" in e) {
              for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
              r = a + e.length;
            } else i.prepend(e);
            n.loop && t.loopCreate(),
              (n.observer && t.support.observer) || t.update(),
              t.slideTo(r, 0, !1);
          },
          addSlide: function (e, t) {
            var n = this,
              i = n.$wrapperEl,
              a = n.params,
              r = n.activeIndex;
            a.loop &&
              ((r -= n.loopedSlides),
              n.loopDestroy(),
              (n.slides = i.children("." + a.slideClass)));
            var s = n.slides.length;
            if (e <= 0) n.prependSlide(t);
            else if (s <= e) n.appendSlide(t);
            else {
              for (var o = e < r ? r + 1 : r, l = [], d = s - 1; e <= d; --d) {
                var u = n.slides.eq(d);
                u.remove(), l.unshift(u);
              }
              if ("object" == typeof t && "length" in t) {
                for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                o = e < r ? r + t.length : r;
              } else i.append(t);
              for (var c = 0; c < l.length; c += 1) i.append(l[c]);
              a.loop && n.loopCreate(),
                (a.observer && n.support.observer) || n.update(),
                a.loop
                  ? n.slideTo(o + n.loopedSlides, 0, !1)
                  : n.slideTo(o, 0, !1);
            }
          },
          removeSlide: function (e) {
            var t = this,
              n = t.params,
              i = t.$wrapperEl,
              a = t.activeIndex;
            n.loop &&
              ((a -= t.loopedSlides),
              t.loopDestroy(),
              (t.slides = i.children("." + n.slideClass)));
            var r,
              s = a;
            if ("object" == typeof e && "length" in e) {
              for (var o = 0; o < e.length; o += 1)
                (r = e[o]),
                  t.slides[r] && t.slides.eq(r).remove(),
                  r < s && --s;
              s = Math.max(s, 0);
            } else
              t.slides[(r = e)] && t.slides.eq(r).remove(),
                r < s && --s,
                (s = Math.max(s, 0));
            n.loop && t.loopCreate(),
              (n.observer && t.support.observer) || t.update(),
              n.loop
                ? t.slideTo(s + t.loopedSlides, 0, !1)
                : t.slideTo(s, 0, !1);
          },
          removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
          },
        },
        events: {
          attachEvents: function () {
            var e = this,
              t = h(),
              n = e.params,
              i = e.touchEvents,
              a = e.el,
              r = e.wrapperEl,
              s = e.device,
              o = e.support;
            (e.onTouchStart = function (e) {
              var t = this,
                n = h(),
                i = f(),
                a = t.touchEventsData,
                r = t.params,
                s = t.touches;
              if (!t.animating || !r.preventInteractionOnTransition) {
                var o = e;
                o.originalEvent && (o = o.originalEvent);
                var l = S(o.target);
                if (
                  "wrapper" !== r.touchEventsTarget ||
                  l.closest(t.wrapperEl).length
                )
                  if (
                    ((a.isTouchEvent = "touchstart" === o.type),
                    a.isTouchEvent || !("which" in o) || 3 !== o.which)
                  )
                    if (!(!a.isTouchEvent && "button" in o && 0 < o.button))
                      if (!a.isTouched || !a.isMoved)
                        if (
                          (!!r.noSwipingClass &&
                            "" !== r.noSwipingClass &&
                            o.target &&
                            o.target.shadowRoot &&
                            e.path &&
                            e.path[0] &&
                            (l = S(e.path[0])),
                          r.noSwiping &&
                            l.closest(
                              r.noSwipingSelector || "." + r.noSwipingClass
                            )[0])
                        )
                          t.allowClick = !0;
                        else if (
                          !r.swipeHandler ||
                          l.closest(r.swipeHandler)[0]
                        ) {
                          (s.currentX = (
                            "touchstart" === o.type ? o.targetTouches[0] : o
                          ).pageX),
                            (s.currentY = (
                              "touchstart" === o.type ? o.targetTouches[0] : o
                            ).pageY);
                          var d = s.currentX,
                            u = s.currentY,
                            p = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                            c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                          if (p && (d <= c || d >= i.innerWidth - c)) {
                            if ("prevent" !== p) return;
                            e.preventDefault();
                          }
                          X(a, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0,
                          }),
                            (s.startX = d),
                            (s.startY = u),
                            (a.touchStartTime = k()),
                            (t.allowClick = !0),
                            t.updateSize(),
                            (t.swipeDirection = void 0),
                            0 < r.threshold && (a.allowThresholdMove = !1),
                            "touchstart" !== o.type &&
                              ((u = !0),
                              l.is(a.formElements) && (u = !1),
                              n.activeElement &&
                                S(n.activeElement).is(a.formElements) &&
                                n.activeElement !== l[0] &&
                                n.activeElement.blur(),
                              (u =
                                u &&
                                t.allowTouchMove &&
                                r.touchStartPreventDefault),
                              (!r.touchStartForcePreventDefault && !u) ||
                                l[0].isContentEditable ||
                                o.preventDefault()),
                            t.emit("touchStart", o);
                        }
              }
            }.bind(e)),
              (e.onTouchMove = function (e) {
                var t = h(),
                  n = this,
                  i = n.touchEventsData,
                  a = n.params,
                  r = n.touches,
                  s = n.rtlTranslate,
                  o = e;
                if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
                  if (!i.isTouchEvent || "touchmove" === o.type) {
                    var l =
                        "touchmove" === o.type &&
                        o.targetTouches &&
                        (o.targetTouches[0] || o.changedTouches[0]),
                      e = ("touchmove" === o.type ? l : o).pageX,
                      l = ("touchmove" === o.type ? l : o).pageY;
                    if (o.preventedByNestedSwiper)
                      return (r.startX = e), void (r.startY = l);
                    if (!n.allowTouchMove)
                      return (
                        (n.allowClick = !1),
                        void (
                          i.isTouched &&
                          (X(r, {
                            startX: e,
                            startY: l,
                            currentX: e,
                            currentY: l,
                          }),
                          (i.touchStartTime = k()))
                        )
                      );
                    if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                      if (n.isVertical()) {
                        if (
                          (l < r.startY && n.translate <= n.maxTranslate()) ||
                          (l > r.startY && n.translate >= n.minTranslate())
                        )
                          return (i.isTouched = !1), void (i.isMoved = !1);
                      } else if (
                        (e < r.startX && n.translate <= n.maxTranslate()) ||
                        (e > r.startX && n.translate >= n.minTranslate())
                      )
                        return;
                    if (
                      i.isTouchEvent &&
                      t.activeElement &&
                      o.target === t.activeElement &&
                      S(o.target).is(i.formElements)
                    )
                      return (i.isMoved = !0), void (n.allowClick = !1);
                    if (
                      (i.allowTouchCallbacks && n.emit("touchMove", o),
                      !(o.targetTouches && 1 < o.targetTouches.length))
                    ) {
                      (r.currentX = e), (r.currentY = l);
                      (t = r.currentX - r.startX), (e = r.currentY - r.startY);
                      if (
                        !(
                          n.params.threshold &&
                          Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) <
                            n.params.threshold
                        )
                      )
                        if (
                          (void 0 === i.isScrolling &&
                            ((n.isHorizontal() && r.currentY === r.startY) ||
                            (n.isVertical() && r.currentX === r.startX)
                              ? (i.isScrolling = !1)
                              : 25 <= t * t + e * e &&
                                ((l =
                                  (180 * Math.atan2(Math.abs(e), Math.abs(t))) /
                                  Math.PI),
                                (i.isScrolling = n.isHorizontal()
                                  ? l > a.touchAngle
                                  : 90 - l > a.touchAngle))),
                          i.isScrolling && n.emit("touchMoveOpposite", o),
                          void 0 === i.startMoving &&
                            ((r.currentX === r.startX &&
                              r.currentY === r.startY) ||
                              (i.startMoving = !0)),
                          i.isScrolling)
                        )
                          i.isTouched = !1;
                        else if (i.startMoving) {
                          (n.allowClick = !1),
                            !a.cssMode && o.cancelable && o.preventDefault(),
                            a.touchMoveStopPropagation &&
                              !a.nested &&
                              o.stopPropagation(),
                            i.isMoved ||
                              (a.loop && n.loopFix(),
                              (i.startTranslate = n.getTranslate()),
                              n.setTransition(0),
                              n.animating &&
                                n.$wrapperEl.trigger(
                                  "webkitTransitionEnd transitionend"
                                ),
                              (i.allowMomentumBounce = !1),
                              !a.grabCursor ||
                                (!0 !== n.allowSlideNext &&
                                  !0 !== n.allowSlidePrev) ||
                                n.setGrabCursor(!0),
                              n.emit("sliderFirstMove", o)),
                            n.emit("sliderMove", o),
                            (i.isMoved = !0);
                          t = n.isHorizontal() ? t : e;
                          (r.diff = t),
                            (t *= a.touchRatio),
                            (n.swipeDirection =
                              0 < (t = s ? -t : t) ? "prev" : "next"),
                            (i.currentTranslate = t + i.startTranslate);
                          (e = !0), (s = a.resistanceRatio);
                          if (
                            (a.touchReleaseOnEdges && (s = 0),
                            0 < t && i.currentTranslate > n.minTranslate()
                              ? ((e = !1),
                                a.resistance &&
                                  (i.currentTranslate =
                                    n.minTranslate() -
                                    1 +
                                    Math.pow(
                                      -n.minTranslate() + i.startTranslate + t,
                                      s
                                    )))
                              : t < 0 &&
                                i.currentTranslate < n.maxTranslate() &&
                                ((e = !1),
                                a.resistance &&
                                  (i.currentTranslate =
                                    n.maxTranslate() +
                                    1 -
                                    Math.pow(
                                      n.maxTranslate() - i.startTranslate - t,
                                      s
                                    ))),
                            e && (o.preventedByNestedSwiper = !0),
                            !n.allowSlideNext &&
                              "next" === n.swipeDirection &&
                              i.currentTranslate < i.startTranslate &&
                              (i.currentTranslate = i.startTranslate),
                            !n.allowSlidePrev &&
                              "prev" === n.swipeDirection &&
                              i.currentTranslate > i.startTranslate &&
                              (i.currentTranslate = i.startTranslate),
                            n.allowSlidePrev ||
                              n.allowSlideNext ||
                              (i.currentTranslate = i.startTranslate),
                            0 < a.threshold)
                          ) {
                            if (
                              !(
                                Math.abs(t) > a.threshold ||
                                i.allowThresholdMove
                              )
                            )
                              return void (i.currentTranslate =
                                i.startTranslate);
                            if (!i.allowThresholdMove)
                              return (
                                (i.allowThresholdMove = !0),
                                (r.startX = r.currentX),
                                (r.startY = r.currentY),
                                (i.currentTranslate = i.startTranslate),
                                void (r.diff = n.isHorizontal()
                                  ? r.currentX - r.startX
                                  : r.currentY - r.startY)
                              );
                          }
                          a.followFinger &&
                            !a.cssMode &&
                            ((a.freeMode ||
                              a.watchSlidesProgress ||
                              a.watchSlidesVisibility) &&
                              (n.updateActiveIndex(), n.updateSlidesClasses()),
                            a.freeMode &&
                              (0 === i.velocities.length &&
                                i.velocities.push({
                                  position:
                                    r[n.isHorizontal() ? "startX" : "startY"],
                                  time: i.touchStartTime,
                                }),
                              i.velocities.push({
                                position:
                                  r[n.isHorizontal() ? "currentX" : "currentY"],
                                time: k(),
                              })),
                            n.updateProgress(i.currentTranslate),
                            n.setTranslate(i.currentTranslate));
                        }
                    }
                  }
                } else
                  i.startMoving &&
                    i.isScrolling &&
                    n.emit("touchMoveOpposite", o);
              }.bind(e)),
              (e.onTouchEnd = function (e) {
                var t = this,
                  n = t.touchEventsData,
                  i = t.params,
                  a = t.touches,
                  r = t.rtlTranslate,
                  s = t.$wrapperEl,
                  o = t.slidesGrid,
                  l = t.snapGrid,
                  d = e;
                if (
                  (d.originalEvent && (d = d.originalEvent),
                  n.allowTouchCallbacks && t.emit("touchEnd", d),
                  (n.allowTouchCallbacks = !1),
                  !n.isTouched)
                )
                  return (
                    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
                    (n.isMoved = !1),
                    void (n.startMoving = !1)
                  );
                i.grabCursor &&
                  n.isMoved &&
                  n.isTouched &&
                  (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                  t.setGrabCursor(!1);
                var u,
                  p = k(),
                  e = p - n.touchStartTime;
                if (
                  (t.allowClick &&
                    (t.updateClickedSlide(d),
                    t.emit("tap click", d),
                    e < 300 &&
                      p - n.lastClickTime < 300 &&
                      t.emit("doubleTap doubleClick", d)),
                  (n.lastClickTime = k()),
                  E(function () {
                    t.destroyed || (t.allowClick = !0);
                  }),
                  !n.isTouched ||
                    !n.isMoved ||
                    !t.swipeDirection ||
                    0 === a.diff ||
                    n.currentTranslate === n.startTranslate)
                )
                  return (
                    (n.isTouched = !1),
                    (n.isMoved = !1),
                    void (n.startMoving = !1)
                  );
                if (
                  ((n.isTouched = !1),
                  (n.isMoved = !1),
                  (n.startMoving = !1),
                  (u = i.followFinger
                    ? r
                      ? t.translate
                      : -t.translate
                    : -n.currentTranslate),
                  !i.cssMode)
                )
                  if (i.freeMode)
                    if (u < -t.minTranslate()) t.slideTo(t.activeIndex);
                    else if (u > -t.maxTranslate())
                      t.slides.length < l.length
                        ? t.slideTo(l.length - 1)
                        : t.slideTo(t.slides.length - 1);
                    else {
                      if (i.freeModeMomentum) {
                        1 < n.velocities.length
                          ? ((g = n.velocities.pop()),
                            (h = n.velocities.pop()),
                            (c = g.position - h.position),
                            (h = g.time - h.time),
                            (t.velocity = c / h),
                            (t.velocity /= 2),
                            Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                              (t.velocity = 0),
                            (150 < h || 300 < k() - g.time) && (t.velocity = 0))
                          : (t.velocity = 0),
                          (t.velocity *= i.freeModeMomentumVelocityRatio),
                          (n.velocities.length = 0);
                        var c = 1e3 * i.freeModeMomentumRatio,
                          h = t.velocity * c,
                          f = t.translate + h;
                        r && (f = -f);
                        var v,
                          m,
                          g = !1,
                          h =
                            20 *
                            Math.abs(t.velocity) *
                            i.freeModeMomentumBounceRatio;
                        if (f < t.maxTranslate())
                          i.freeModeMomentumBounce
                            ? (f + t.maxTranslate() < -h &&
                                (f = t.maxTranslate() - h),
                              (v = t.maxTranslate()),
                              (n.allowMomentumBounce = g = !0))
                            : (f = t.maxTranslate()),
                            i.loop && i.centeredSlides && (m = !0);
                        else if (f > t.minTranslate())
                          i.freeModeMomentumBounce
                            ? (f - t.minTranslate() > h &&
                                (f = t.minTranslate() + h),
                              (v = t.minTranslate()),
                              (n.allowMomentumBounce = g = !0))
                            : (f = t.minTranslate()),
                            i.loop && i.centeredSlides && (m = !0);
                        else if (i.freeModeSticky) {
                          for (var w, y = 0; y < l.length; y += 1)
                            if (l[y] > -f) {
                              w = y;
                              break;
                            }
                          f = -(f =
                            Math.abs(l[w] - f) < Math.abs(l[w - 1] - f) ||
                            "next" === t.swipeDirection
                              ? l[w]
                              : l[w - 1]);
                        }
                        if (
                          (m &&
                            t.once("transitionEnd", function () {
                              t.loopFix();
                            }),
                          0 !== t.velocity)
                        )
                          (c = r
                            ? Math.abs((-f - t.translate) / t.velocity)
                            : Math.abs((f - t.translate) / t.velocity)),
                            i.freeModeSticky &&
                              (c =
                                (m = Math.abs((r ? -f : f) - t.translate)) <
                                (r = t.slidesSizesGrid[t.activeIndex])
                                  ? i.speed
                                  : m < 2 * r
                                  ? 1.5 * i.speed
                                  : 2.5 * i.speed);
                        else if (i.freeModeSticky)
                          return void t.slideToClosest();
                        i.freeModeMomentumBounce && g
                          ? (t.updateProgress(v),
                            t.setTransition(c),
                            t.setTranslate(f),
                            t.transitionStart(!0, t.swipeDirection),
                            (t.animating = !0),
                            s.transitionEnd(function () {
                              t &&
                                !t.destroyed &&
                                n.allowMomentumBounce &&
                                (t.emit("momentumBounce"),
                                t.setTransition(i.speed),
                                setTimeout(function () {
                                  t.setTranslate(v),
                                    s.transitionEnd(function () {
                                      t && !t.destroyed && t.transitionEnd();
                                    });
                                }, 0));
                            }))
                          : t.velocity
                          ? (t.updateProgress(f),
                            t.setTransition(c),
                            t.setTranslate(f),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating ||
                              ((t.animating = !0),
                              s.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd();
                              })))
                          : (t.emit("_freeModeNoMomentumRelease"),
                            t.updateProgress(f)),
                          t.updateActiveIndex(),
                          t.updateSlidesClasses();
                      } else {
                        if (i.freeModeSticky) return void t.slideToClosest();
                        i.freeMode && t.emit("_freeModeNoMomentumRelease");
                      }
                      (!i.freeModeMomentum || e >= i.longSwipesMs) &&
                        (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses());
                    }
                  else {
                    for (
                      var b = 0, C = t.slidesSizesGrid[0], T = 0;
                      T < o.length;
                      T += T < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
                    ) {
                      var x =
                        T < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                      void 0 !== o[T + x]
                        ? u >= o[T] &&
                          u < o[T + x] &&
                          (C = o[(b = T) + x] - o[T])
                        : u >= o[T] &&
                          ((b = T), (C = o[o.length - 1] - o[o.length - 2]));
                    }
                    (g = (u - o[b]) / C),
                      (c = b < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup);
                    e > i.longSwipesMs
                      ? i.longSwipes
                        ? ("next" === t.swipeDirection &&
                            (g >= i.longSwipesRatio
                              ? t.slideTo(b + c)
                              : t.slideTo(b)),
                          "prev" === t.swipeDirection &&
                            (g > 1 - i.longSwipesRatio
                              ? t.slideTo(b + c)
                              : t.slideTo(b)))
                        : t.slideTo(t.activeIndex)
                      : i.shortSwipes
                      ? t.navigation &&
                        (d.target === t.navigation.nextEl ||
                          d.target === t.navigation.prevEl)
                        ? d.target === t.navigation.nextEl
                          ? t.slideTo(b + c)
                          : t.slideTo(b)
                        : ("next" === t.swipeDirection && t.slideTo(b + c),
                          "prev" === t.swipeDirection && t.slideTo(b))
                      : t.slideTo(t.activeIndex);
                  }
              }.bind(e)),
              n.cssMode &&
                (e.onScroll = function () {
                  var e = this,
                    t = e.wrapperEl,
                    n = e.rtlTranslate;
                  (e.previousTranslate = e.translate),
                    e.isHorizontal()
                      ? (e.translate = n
                          ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                          : -t.scrollLeft)
                      : (e.translate = -t.scrollTop),
                    -0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                    (0 == (t = e.maxTranslate() - e.minTranslate())
                      ? 0
                      : (e.translate - e.minTranslate()) / t) !== e.progress &&
                      e.updateProgress(n ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1);
                }.bind(e)),
              (e.onClick = function (e) {
                this.allowClick ||
                  (this.params.preventClicks && e.preventDefault(),
                  this.params.preventClicksPropagation &&
                    this.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation()));
              }.bind(e));
            var l,
              d = !!n.nested;
            !o.touch && o.pointerEvents
              ? (a.addEventListener(i.start, e.onTouchStart, !1),
                t.addEventListener(i.move, e.onTouchMove, d),
                t.addEventListener(i.end, e.onTouchEnd, !1))
              : (o.touch &&
                  ((l = !(
                    "touchstart" !== i.start ||
                    !o.passiveListener ||
                    !n.passiveListeners
                  ) && { passive: !0, capture: !1 }),
                  a.addEventListener(i.start, e.onTouchStart, l),
                  a.addEventListener(
                    i.move,
                    e.onTouchMove,
                    o.passiveListener ? { passive: !1, capture: d } : d
                  ),
                  a.addEventListener(i.end, e.onTouchEnd, l),
                  i.cancel && a.addEventListener(i.cancel, e.onTouchEnd, l),
                  B || (t.addEventListener("touchstart", _), (B = !0))),
                ((n.simulateTouch && !s.ios && !s.android) ||
                  (n.simulateTouch && !o.touch && s.ios)) &&
                  (a.addEventListener("mousedown", e.onTouchStart, !1),
                  t.addEventListener("mousemove", e.onTouchMove, d),
                  t.addEventListener("mouseup", e.onTouchEnd, !1))),
              (n.preventClicks || n.preventClicksPropagation) &&
                a.addEventListener("click", e.onClick, !0),
              n.cssMode && r.addEventListener("scroll", e.onScroll),
              n.updateOnWindowResize
                ? e.on(
                    s.ios || s.android
                      ? "resize orientationchange observerUpdate"
                      : "resize observerUpdate",
                    N,
                    !0
                  )
                : e.on("observerUpdate", N, !0);
          },
          detachEvents: function () {
            var e,
              t = this,
              n = h(),
              i = t.params,
              a = t.touchEvents,
              r = t.el,
              s = t.wrapperEl,
              o = t.device,
              l = t.support,
              d = !!i.nested;
            !l.touch && l.pointerEvents
              ? (r.removeEventListener(a.start, t.onTouchStart, !1),
                n.removeEventListener(a.move, t.onTouchMove, d),
                n.removeEventListener(a.end, t.onTouchEnd, !1))
              : (l.touch &&
                  ((e = !(
                    "onTouchStart" !== a.start ||
                    !l.passiveListener ||
                    !i.passiveListeners
                  ) && { passive: !0, capture: !1 }),
                  r.removeEventListener(a.start, t.onTouchStart, e),
                  r.removeEventListener(a.move, t.onTouchMove, d),
                  r.removeEventListener(a.end, t.onTouchEnd, e),
                  a.cancel && r.removeEventListener(a.cancel, t.onTouchEnd, e)),
                ((i.simulateTouch && !o.ios && !o.android) ||
                  (i.simulateTouch && !l.touch && o.ios)) &&
                  (r.removeEventListener("mousedown", t.onTouchStart, !1),
                  n.removeEventListener("mousemove", t.onTouchMove, d),
                  n.removeEventListener("mouseup", t.onTouchEnd, !1))),
              (i.preventClicks || i.preventClicksPropagation) &&
                r.removeEventListener("click", t.onClick, !0),
              i.cssMode && s.removeEventListener("scroll", t.onScroll),
              t.off(
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                N
              );
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            var e,
              n,
              t,
              i = this,
              a = i.activeIndex,
              r = i.initialized,
              s = i.loopedSlides,
              o = void 0 === s ? 0 : s,
              l = i.params,
              d = i.$el,
              u = l.breakpoints;
            !u ||
              (u && 0 === Object.keys(u).length) ||
              ((e = i.getBreakpoint(u, i.params.breakpointsBase, i.el)) &&
                i.currentBreakpoint !== e &&
                ((n = e in u ? u[e] : void 0) &&
                  [
                    "slidesPerView",
                    "spaceBetween",
                    "slidesPerGroup",
                    "slidesPerGroupSkip",
                    "slidesPerColumn",
                  ].forEach(function (e) {
                    var t = n[e];
                    void 0 !== t &&
                      (n[e] =
                        "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                          ? "slidesPerView" === e
                            ? parseFloat(t)
                            : parseInt(t, 10)
                          : "auto");
                  }),
                (t = n || i.originalParams),
                (s = 1 < l.slidesPerColumn),
                (u = 1 < t.slidesPerColumn),
                s && !u
                  ? (d.removeClass(
                      l.containerModifierClass +
                        "multirow " +
                        l.containerModifierClass +
                        "multirow-column"
                    ),
                    i.emitContainerClasses())
                  : !s &&
                    u &&
                    (d.addClass(l.containerModifierClass + "multirow"),
                    "column" === t.slidesPerColumnFill &&
                      d.addClass(l.containerModifierClass + "multirow-column"),
                    i.emitContainerClasses()),
                (d = t.direction && t.direction !== l.direction),
                (l = l.loop && (t.slidesPerView !== l.slidesPerView || d)),
                d && r && i.changeDirection(),
                X(i.params, t),
                X(i, {
                  allowTouchMove: i.params.allowTouchMove,
                  allowSlideNext: i.params.allowSlideNext,
                  allowSlidePrev: i.params.allowSlidePrev,
                }),
                (i.currentBreakpoint = e),
                i.emit("_beforeBreakpoint", t),
                l &&
                  r &&
                  (i.loopDestroy(),
                  i.loopCreate(),
                  i.updateSlides(),
                  i.slideTo(a - o + i.loopedSlides, 0, !1)),
                i.emit("breakpoint", t)));
          },
          getBreakpoint: function (e, t, n) {
            if (
              (void 0 === t && (t = "window"), e && ("container" !== t || n))
            ) {
              var i = !1,
                a = f(),
                r = "window" === t ? a.innerWidth : n.clientWidth,
                s = "window" === t ? a.innerHeight : n.clientHeight,
                o = Object.keys(e).map(function (e) {
                  if ("string" != typeof e || 0 !== e.indexOf("@"))
                    return { value: e, point: e };
                  var t = parseFloat(e.substr(1));
                  return { value: s * t, point: e };
                });
              o.sort(function (e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10);
              });
              for (var l = 0; l < o.length; l += 1) {
                var d = o[l],
                  u = d.point;
                d.value <= r && (i = u);
              }
              return i || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
              t = e.params,
              n = e.isLocked,
              i =
                0 < e.slides.length &&
                t.slidesOffsetBefore +
                  t.spaceBetween * (e.slides.length - 1) +
                  e.slides[0].offsetWidth * e.slides.length;
            t.slidesOffsetBefore && t.slidesOffsetAfter && i
              ? (e.isLocked = i <= e.size)
              : (e.isLocked = 1 === e.snapGrid.length),
              (e.allowSlideNext = !e.isLocked),
              (e.allowSlidePrev = !e.isLocked),
              n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
              n &&
                n !== e.isLocked &&
                ((e.isEnd = !1), e.navigation && e.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var n,
              i,
              e = this,
              t = e.classNames,
              a = e.params,
              r = e.rtl,
              s = e.$el,
              o = e.device,
              l = e.support,
              o =
                ((o = [
                  "initialized",
                  a.direction,
                  { "pointer-events": l.pointerEvents && !l.touch },
                  { "free-mode": a.freeMode },
                  { autoheight: a.autoHeight },
                  { rtl: r },
                  { multirow: 1 < a.slidesPerColumn },
                  {
                    "multirow-column":
                      1 < a.slidesPerColumn &&
                      "column" === a.slidesPerColumnFill,
                  },
                  { android: o.android },
                  { ios: o.ios },
                  { "css-mode": a.cssMode },
                ]),
                (n = a.containerModifierClass),
                (i = []),
                o.forEach(function (t) {
                  "object" == typeof t
                    ? Object.keys(t).forEach(function (e) {
                        t[e] && i.push(n + e);
                      })
                    : "string" == typeof t && i.push(n + t);
                }),
                i);
            t.push.apply(t, o),
              s.addClass([].concat(t).join(" ")),
              e.emitContainerClasses();
          },
          removeClasses: function () {
            var e = this.$el,
              t = this.classNames;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (e, t, n, i, a, r) {
            var s = f();
            function o() {
              r && r();
            }
            !(S(e).parent("picture")[0] || (e.complete && a)) && t
              ? (((s = new s.Image()).onload = o),
                (s.onerror = o),
                i && (s.sizes = i),
                n && (s.srcset = n),
                t && (s.src = t))
              : o();
          },
          preloadImages: function () {
            var e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (var n = 0; n < e.imagesToLoad.length; n += 1) {
              var i = e.imagesToLoad[n];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      R = {},
      F = (function () {
        function l() {
          for (var n, e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          if (
            ((n = X(
              {},
              (n =
                (n =
                  1 === t.length &&
                  t[0].constructor &&
                  "Object" === Object.prototype.toString.call(t[0]).slice(8, -1)
                    ? t[0]
                    : ((s = t[0]), t[1])) || {})
            )),
            s && !n.el && (n.el = s),
            n.el && 1 < S(n.el).length)
          ) {
            var a = [];
            return (
              S(n.el).each(function (e) {
                e = X({}, n, { el: e });
                a.push(new l(e));
              }),
              a
            );
          }
          var r = this;
          (r.__swiper__ = !0),
            (r.support = O()),
            (r.device = A({ userAgent: n.userAgent })),
            (r.browser = I()),
            (r.eventsListeners = {}),
            (r.eventsAnyListeners = []),
            void 0 === r.modules && (r.modules = {}),
            Object.keys(r.modules).forEach(function (e) {
              var t = r.modules[e];
              t.params &&
                ((e = Object.keys(t.params)[0]),
                "object" == typeof (t = t.params[e]) &&
                  null !== t &&
                  e in n &&
                  "enabled" in t &&
                  (!0 === n[e] && (n[e] = { enabled: !0 }),
                  "object" != typeof n[e] ||
                    "enabled" in n[e] ||
                    (n[e].enabled = !0),
                  n[e] || (n[e] = { enabled: !1 })));
            });
          var s,
            o = X({}, G);
          return (
            r.useParams(o),
            (r.params = X({}, o, R, n)),
            (r.originalParams = X({}, r.params)),
            (r.passedParams = X({}, n)),
            r.params &&
              r.params.on &&
              Object.keys(r.params.on).forEach(function (e) {
                r.on(e, r.params.on[e]);
              }),
            r.params && r.params.onAny && r.onAny(r.params.onAny),
            (r.$ = S),
            X(r, {
              el: s,
              classNames: [],
              slides: S(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === r.params.direction;
              },
              isVertical: function () {
                return "vertical" === r.params.direction;
              },
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: r.params.allowSlideNext,
              allowSlidePrev: r.params.allowSlidePrev,
              touchEvents:
                ((o = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                (s = ["mousedown", "mousemove", "mouseup"]),
                r.support.pointerEvents &&
                  (s = ["pointerdown", "pointermove", "pointerup"]),
                (r.touchEventsTouch = {
                  start: o[0],
                  move: o[1],
                  end: o[2],
                  cancel: o[3],
                }),
                (r.touchEventsDesktop = { start: s[0], move: s[1], end: s[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video, label",
                lastClickTime: k(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: r.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            r.useModules(),
            r.emit("_swiper"),
            r.params.init && r.init(),
            r
          );
        }
        var e,
          t,
          n = l.prototype;
        return (
          (n.emitContainerClasses = function () {
            var e,
              t = this;
            t.params._emitClasses &&
              t.el &&
              ((e = t.el.className.split(" ").filter(function (e) {
                return (
                  0 === e.indexOf("swiper-container") ||
                  0 === e.indexOf(t.params.containerModifierClass)
                );
              })),
              t.emit("_containerClasses", e.join(" ")));
          }),
          (n.getSlideClasses = function (e) {
            var t = this;
            return e.className
              .split(" ")
              .filter(function (e) {
                return (
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
                );
              })
              .join(" ");
          }),
          (n.emitSlidesClasses = function () {
            var n,
              i = this;
            i.params._emitClasses &&
              i.el &&
              ((n = []),
              i.slides.each(function (e) {
                var t = i.getSlideClasses(e);
                n.push({ slideEl: e, classNames: t }),
                  i.emit("_slideClass", e, t);
              }),
              i.emit("_slideClasses", n));
          }),
          (n.slidesPerViewDynamic = function () {
            var e = this,
              t = e.params,
              n = e.slides,
              i = e.slidesGrid,
              a = e.size,
              r = e.activeIndex,
              s = 1;
            if (t.centeredSlides) {
              for (
                var o, l = n[r].swiperSlideSize, d = r + 1;
                d < n.length;
                d += 1
              )
                n[d] &&
                  !o &&
                  ((s += 1), a < (l += n[d].swiperSlideSize) && (o = !0));
              for (var u = r - 1; 0 <= u; --u)
                n[u] &&
                  !o &&
                  ((s += 1), a < (l += n[u].swiperSlideSize) && (o = !0));
            } else
              for (var p = r + 1; p < n.length; p += 1)
                i[p] - i[r] < a && (s += 1);
            return s;
          }),
          (n.update = function () {
            var e,
              t,
              n = this;
            function i() {
              var e = n.rtlTranslate ? -1 * n.translate : n.translate,
                e = Math.min(Math.max(e, n.maxTranslate()), n.minTranslate());
              n.setTranslate(e), n.updateActiveIndex(), n.updateSlidesClasses();
            }
            n &&
              !n.destroyed &&
              ((e = n.snapGrid),
              (t = n.params).breakpoints && n.setBreakpoint(),
              n.updateSize(),
              n.updateSlides(),
              n.updateProgress(),
              n.updateSlidesClasses(),
              n.params.freeMode
                ? (i(), n.params.autoHeight && n.updateAutoHeight())
                : (("auto" === n.params.slidesPerView ||
                    1 < n.params.slidesPerView) &&
                  n.isEnd &&
                  !n.params.centeredSlides
                    ? n.slideTo(n.slides.length - 1, 0, !1, !0)
                    : n.slideTo(n.activeIndex, 0, !1, !0)) || i(),
              t.watchOverflow && e !== n.snapGrid && n.checkOverflow(),
              n.emit("update"));
          }),
          (n.changeDirection = function (t, e) {
            void 0 === e && (e = !0);
            var n = this,
              i = n.params.direction;
            return (
              (t = t || ("horizontal" === i ? "vertical" : "horizontal")) ===
                i ||
                ("horizontal" !== t && "vertical" !== t) ||
                (n.$el
                  .removeClass("" + n.params.containerModifierClass + i)
                  .addClass("" + n.params.containerModifierClass + t),
                n.emitContainerClasses(),
                (n.params.direction = t),
                n.slides.each(function (e) {
                  "vertical" === t
                    ? (e.style.width = "")
                    : (e.style.height = "");
                }),
                n.emit("changeDirection"),
                e && n.update()),
              n
            );
          }),
          (n.mount = function (e) {
            var t = this;
            if (t.mounted) return !0;
            var n,
              i = S(e || t.params.el);
            return (
              !!(e = i[0]) &&
              ((e.swiper = t),
              e && e.shadowRoot && e.shadowRoot.querySelector
                ? ((n = S(
                    e.shadowRoot.querySelector("." + t.params.wrapperClass)
                  )).children = function (e) {
                    return i.children(e);
                  })
                : (n = i.children("." + t.params.wrapperClass)),
              X(t, {
                $el: i,
                el: e,
                $wrapperEl: n,
                wrapperEl: n[0],
                mounted: !0,
                rtl:
                  "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                rtlTranslate:
                  "horizontal" === t.params.direction &&
                  ("rtl" === e.dir.toLowerCase() ||
                    "rtl" === i.css("direction")),
                wrongRTL: "-webkit-box" === n.css("display"),
              }),
              !0)
            );
          }),
          (n.init = function (e) {
            var t = this;
            return (
              t.initialized ||
                !1 === t.mount(e) ||
                (t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.params.loop && t.loopCreate(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.setGrabCursor(),
                t.params.preloadImages && t.preloadImages(),
                t.params.loop
                  ? t.slideTo(
                      t.params.initialSlide + t.loopedSlides,
                      0,
                      t.params.runCallbacksOnInit
                    )
                  : t.slideTo(
                      t.params.initialSlide,
                      0,
                      t.params.runCallbacksOnInit
                    ),
                t.attachEvents(),
                (t.initialized = !0),
                t.emit("init"),
                t.emit("afterInit")),
              t
            );
          }),
          (n.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var n,
              i = this,
              a = i.params,
              r = i.$el,
              s = i.$wrapperEl,
              o = i.slides;
            return (
              void 0 === i.params ||
                i.destroyed ||
                (i.emit("beforeDestroy"),
                (i.initialized = !1),
                i.detachEvents(),
                a.loop && i.loopDestroy(),
                t &&
                  (i.removeClasses(),
                  r.removeAttr("style"),
                  s.removeAttr("style"),
                  o &&
                    o.length &&
                    o
                      .removeClass(
                        [
                          a.slideVisibleClass,
                          a.slideActiveClass,
                          a.slideNextClass,
                          a.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(function (e) {
                  i.off(e);
                }),
                !1 !== e &&
                  ((i.$el[0].swiper = null),
                  (n = i),
                  Object.keys(n).forEach(function (e) {
                    try {
                      n[e] = null;
                    } catch (e) {}
                    try {
                      delete n[e];
                    } catch (e) {}
                  })),
                (i.destroyed = !0)),
              null
            );
          }),
          (l.extendDefaults = function (e) {
            X(R, e);
          }),
          (l.installModule = function (e) {
            l.prototype.modules || (l.prototype.modules = {});
            var t =
              e.name || Object.keys(l.prototype.modules).length + "_" + k();
            l.prototype.modules[t] = e;
          }),
          (l.use = function (e) {
            return (
              Array.isArray(e)
                ? e.forEach(function (e) {
                    return l.installModule(e);
                  })
                : l.installModule(e),
              l
            );
          }),
          (e = l),
          (t = [
            {
              key: "extendedDefaults",
              get: function () {
                return R;
              },
            },
            {
              key: "defaults",
              get: function () {
                return G;
              },
            },
          ]),
          (n = null) && j(e.prototype, n),
          t && j(e, t),
          l
        );
      })();
    Object.keys($).forEach(function (t) {
      Object.keys($[t]).forEach(function (e) {
        F.prototype[e] = $[t][e];
      });
    }),
      F.use([t, n]);
    n = F;
    function H() {
      return (H =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              i = arguments[t];
            for (n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var V = {
      toggleEl: function (e, t) {
        e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
      },
      update: function () {
        var e,
          t,
          n = this,
          i = n.params.navigation,
          a = n.navigation.toggleEl;
        n.params.loop ||
          ((e = (t = n.navigation).$nextEl),
          (t = t.$prevEl) &&
            0 < t.length &&
            (n.isBeginning ? a(t, !0) : a(t, !1),
            t[
              n.params.watchOverflow && n.isLocked ? "addClass" : "removeClass"
            ](i.lockClass)),
          e &&
            0 < e.length &&
            (n.isEnd ? a(e, !0) : a(e, !1),
            e[
              n.params.watchOverflow && n.isLocked ? "addClass" : "removeClass"
            ](i.lockClass)));
      },
      onPrevClick: function (e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init: function () {
        var e,
          t,
          n = this,
          i = n.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = S(i.nextEl)),
            n.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              1 < e.length &&
              1 === n.$el.find(i.nextEl).length &&
              (e = n.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = S(i.prevEl)),
            n.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              1 < t.length &&
              1 === n.$el.find(i.prevEl).length &&
              (t = n.$el.find(i.prevEl))),
          e && 0 < e.length && e.on("click", n.navigation.onNextClick),
          t && 0 < t.length && t.on("click", n.navigation.onPrevClick),
          X(n.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }));
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          n = t.$nextEl,
          t = t.$prevEl;
        n &&
          n.length &&
          (n.off("click", e.navigation.onNextClick),
          n.removeClass(e.params.navigation.disabledClass)),
          t &&
            t.length &&
            (t.off("click", e.navigation.onPrevClick),
            t.removeClass(e.params.navigation.disabledClass));
      },
    };
    function W() {
      return (W =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              i = arguments[t];
            for (n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var q = {
      update: function () {
        var e = this,
          t = e.rtl,
          n = e.params.pagination;
        if (
          n.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var i,
            a = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides
              .length,
            r = e.pagination.$el,
            s = e.params.loop
              ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((i = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )) >
                  a - 1 - 2 * e.loopedSlides && (i -= a - 2 * e.loopedSlides),
                s - 1 < i && (i -= s),
                i < 0 && "bullets" !== e.params.paginationType && (i = s + i))
              : (i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === n.type &&
              e.pagination.bullets &&
              0 < e.pagination.bullets.length)
          ) {
            var o,
              l,
              d,
              u,
              p,
              c = e.pagination.bullets;
            if (
              (n.dynamicBullets &&
                ((e.pagination.bulletSize = c
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  e.isHorizontal() ? "width" : "height",
                  e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"
                ),
                1 < n.dynamicMainBullets &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                  e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        n.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (o = i - e.pagination.dynamicBulletIndex),
                (d =
                  ((l = o + (Math.min(c.length, n.dynamicMainBullets) - 1)) +
                    o) /
                  2)),
              c.removeClass(
                n.bulletActiveClass +
                  " " +
                  n.bulletActiveClass +
                  "-next " +
                  n.bulletActiveClass +
                  "-next-next " +
                  n.bulletActiveClass +
                  "-prev " +
                  n.bulletActiveClass +
                  "-prev-prev " +
                  n.bulletActiveClass +
                  "-main"
              ),
              1 < r.length)
            )
              c.each(function (e) {
                var t = S(e),
                  e = t.index();
                e === i && t.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (o <= e &&
                      e <= l &&
                      t.addClass(n.bulletActiveClass + "-main"),
                    e === o &&
                      t
                        .prev()
                        .addClass(n.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(n.bulletActiveClass + "-prev-prev"),
                    e === l &&
                      t
                        .next()
                        .addClass(n.bulletActiveClass + "-next")
                        .next()
                        .addClass(n.bulletActiveClass + "-next-next"));
              });
            else {
              var h = c.eq(i),
                f = h.index();
              if ((h.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                for (var a = c.eq(o), h = c.eq(l), v = o; v <= l; v += 1)
                  c.eq(v).addClass(n.bulletActiveClass + "-main");
                if (e.params.loop)
                  if (f >= c.length - n.dynamicMainBullets) {
                    for (var m = n.dynamicMainBullets; 0 <= m; --m)
                      c.eq(c.length - m).addClass(
                        n.bulletActiveClass + "-main"
                      );
                    c.eq(c.length - n.dynamicMainBullets - 1).addClass(
                      n.bulletActiveClass + "-prev"
                    );
                  } else
                    a
                      .prev()
                      .addClass(n.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(n.bulletActiveClass + "-prev-prev"),
                      h
                        .next()
                        .addClass(n.bulletActiveClass + "-next")
                        .next()
                        .addClass(n.bulletActiveClass + "-next-next");
                else
                  a
                    .prev()
                    .addClass(n.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(n.bulletActiveClass + "-prev-prev"),
                    h
                      .next()
                      .addClass(n.bulletActiveClass + "-next")
                      .next()
                      .addClass(n.bulletActiveClass + "-next-next");
              }
            }
            n.dynamicBullets &&
              ((p = Math.min(c.length, n.dynamicMainBullets + 4)),
              (u =
                (e.pagination.bulletSize * p - e.pagination.bulletSize) / 2 -
                d * e.pagination.bulletSize),
              (p = t ? "right" : "left"),
              c.css(e.isHorizontal() ? p : "top", u + "px"));
          }
          "fraction" === n.type &&
            (r.find("." + n.currentClass).text(n.formatFractionCurrent(i + 1)),
            r.find("." + n.totalClass).text(n.formatFractionTotal(s))),
            "progressbar" === n.type &&
              ((d = n.progressbarOpposite
                ? e.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : e.isHorizontal()
                ? "horizontal"
                : "vertical"),
              (t = (i + 1) / s),
              (u = p = 1),
              "horizontal" === d ? (p = t) : (u = t),
              r
                .find("." + n.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + p + ") scaleY(" + u + ")"
                )
                .transition(e.params.speed)),
            "custom" === n.type && n.renderCustom
              ? (r.html(n.renderCustom(e, i + 1, s)),
                e.emit("paginationRender", r[0]))
              : e.emit("paginationUpdate", r[0]),
            r[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](n.lockClass);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var n = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides
              .length,
            i = e.pagination.$el,
            a = "";
          if ("bullets" === t.type) {
            var r = e.params.loop
              ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode && !e.params.loop && n < r && (r = n);
            for (var s = 0; s < r; s += 1)
              t.renderBullet
                ? (a += t.renderBullet.call(e, s, t.bulletClass))
                : (a +=
                    "<" +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    ">");
            i.html(a),
              (e.pagination.bullets = i.find(
                "." + t.bulletClass.replace(/ /g, ".")
              ));
          }
          "fraction" === t.type &&
            ((a = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(a)),
            "progressbar" === t.type &&
              ((a = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(a)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var e,
          t = this,
          n = t.params.pagination;
        !n.el ||
          (0 !== (e = S(n.el)).length &&
            (t.params.uniqueNavElements &&
              "string" == typeof n.el &&
              1 < e.length &&
              (e = t.$el.find(n.el)),
            "bullets" === n.type && n.clickable && e.addClass(n.clickableClass),
            e.addClass(n.modifierClass + n.type),
            "bullets" === n.type &&
              n.dynamicBullets &&
              (e.addClass("" + n.modifierClass + n.type + "-dynamic"),
              (t.pagination.dynamicBulletIndex = 0),
              n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)),
            "progressbar" === n.type &&
              n.progressbarOpposite &&
              e.addClass(n.progressbarOppositeClass),
            n.clickable &&
              e.on(
                "click",
                "." + n.bulletClass.replace(/ /g, "."),
                function (e) {
                  e.preventDefault();
                  e = S(this).index() * t.params.slidesPerGroup;
                  t.params.loop && (e += t.loopedSlides), t.slideTo(e);
                }
              ),
            X(t.pagination, { $el: e, el: e[0] })));
      },
      destroy: function () {
        var e,
          t = this,
          n = t.params.pagination;
        n.el &&
          t.pagination.el &&
          t.pagination.$el &&
          0 !== t.pagination.$el.length &&
          ((e = t.pagination.$el).removeClass(n.hiddenClass),
          e.removeClass(n.modifierClass + n.type),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass(n.bulletActiveClass),
          n.clickable &&
            e.off("click", "." + n.bulletClass.replace(/ /g, ".")));
      },
    };
    function Y() {
      return (Y =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              i = arguments[t];
            for (n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var K = {
      setTranslate: function () {
        for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
          var i = e.slides.eq(n),
            a = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (a -= e.translate);
          var r = 0;
          e.isHorizontal() || ((r = a), (a = 0));
          var s = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: s }).transform(
            "translate3d(" + a + "px, " + r + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var n,
          i = this,
          t = i.slides,
          a = i.$wrapperEl;
        t.transition(e),
          i.params.virtualTranslate &&
            0 !== e &&
            ((n = !1),
            t.transitionEnd(function () {
              if (!n && i && !i.destroyed) {
                (n = !0), (i.animating = !1);
                for (
                  var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                  t < e.length;
                  t += 1
                )
                  a.trigger(e[t]);
              }
            }));
      },
    };
    function U() {
      return (U =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              i = arguments[t];
            for (n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var Q = {
      run: function () {
        var t = this,
          e = t.slides.eq(t.activeIndex),
          n = t.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (n = e.attr("data-swiper-autoplay") || t.params.autoplay.delay),
          clearTimeout(t.autoplay.timeout),
          (t.autoplay.timeout = E(function () {
            var e;
            t.params.autoplay.reverseDirection
              ? t.params.loop
                ? (t.loopFix(),
                  (e = t.slidePrev(t.params.speed, !0, !0)),
                  t.emit("autoplay"))
                : t.isBeginning
                ? t.params.autoplay.stopOnLastSlide
                  ? t.autoplay.stop()
                  : ((e = t.slideTo(
                      t.slides.length - 1,
                      t.params.speed,
                      !0,
                      !0
                    )),
                    t.emit("autoplay"))
                : ((e = t.slidePrev(t.params.speed, !0, !0)),
                  t.emit("autoplay"))
              : t.params.loop
              ? (t.loopFix(),
                (e = t.slideNext(t.params.speed, !0, !0)),
                t.emit("autoplay"))
              : t.isEnd
              ? t.params.autoplay.stopOnLastSlide
                ? t.autoplay.stop()
                : ((e = t.slideTo(0, t.params.speed, !0, !0)),
                  t.emit("autoplay"))
              : ((e = t.slideNext(t.params.speed, !0, !0)), t.emit("autoplay")),
              ((t.params.cssMode && t.autoplay.running) || !1 === e) &&
                t.autoplay.run();
          }, n));
      },
      start: function () {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit("autoplayStart"),
          e.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        var e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  "transitionend",
                  t.autoplay.onTransitionEnd
                ),
                t.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  t.autoplay.onTransitionEnd
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
      onVisibilityChange: function () {
        var e = this,
          t = h();
        "hidden" === t.visibilityState &&
          e.autoplay.running &&
          e.autoplay.pause(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (e.autoplay.run(), (e.autoplay.paused = !1));
      },
      onTransitionEnd: function (e) {
        var t = this;
        t &&
          !t.destroyed &&
          t.$wrapperEl &&
          e.target === t.$wrapperEl[0] &&
          (t.$wrapperEl[0].removeEventListener(
            "transitionend",
            t.autoplay.onTransitionEnd
          ),
          t.$wrapperEl[0].removeEventListener(
            "webkitTransitionEnd",
            t.autoplay.onTransitionEnd
          ),
          (t.autoplay.paused = !1),
          t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
      },
    };
    n.use([
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          L(this, { navigation: H({}, V) });
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function (e) {
            e.navigation.update();
          },
          fromEdge: function (e) {
            e.navigation.update();
          },
          destroy: function (e) {
            e.navigation.destroy();
          },
          click: function (e, t) {
            var n,
              i = e.navigation,
              a = i.$nextEl,
              i = i.$prevEl,
              t = t.target;
            !e.params.navigation.hideOnClick ||
              S(t).is(i) ||
              S(t).is(a) ||
              (e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === t || e.pagination.el.contains(t))) ||
              (a
                ? (n = a.hasClass(e.params.navigation.hiddenClass))
                : i && (n = i.hasClass(e.params.navigation.hiddenClass)),
              !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"),
              a && a.toggleClass(e.params.navigation.hiddenClass),
              i && i.toggleClass(e.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          L(this, { pagination: W({ dynamicBulletIndex: 0 }, q) });
        },
        on: {
          init: function (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange: function (e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange: function (e) {
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange: function (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange: function (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy: function (e) {
            e.pagination.destroy();
          },
          click: function (e, t) {
            t = t.target;
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              0 < e.pagination.$el.length &&
              !S(t).hasClass(e.params.pagination.bulletClass) &&
              ((e.navigation &&
                ((e.navigation.nextEl && t === e.navigation.nextEl) ||
                  (e.navigation.prevEl && t === e.navigation.prevEl))) ||
                (!0 ===
                e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                  ? e.emit("paginationShow")
                  : e.emit("paginationHide"),
                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)));
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          L(this, { fadeEffect: Y({}, K) });
        },
        on: {
          beforeInit: function (e) {
            var t;
            "fade" === e.params.effect &&
              (e.classNames.push(e.params.containerModifierClass + "fade"),
              X(
                e.params,
                (t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                })
              ),
              X(e.originalParams, t));
          },
          setTranslate: function (e) {
            "fade" === e.params.effect && e.fadeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "fade" === e.params.effect && e.fadeEffect.setTransition(t);
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          L(this, { autoplay: U({}, Q, { running: !1, paused: !1 }) });
        },
        on: {
          init: function (e) {
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              h().addEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              ));
          },
          beforeTransitionStart: function (e, t, n) {
            e.autoplay.running &&
              (n || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(t)
                : e.autoplay.stop());
          },
          sliderFirstMove: function (e) {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          touchEnd: function (e) {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
          },
          destroy: function (e) {
            e.autoplay.running && e.autoplay.stop(),
              h().removeEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              );
          },
        },
      },
    ]);
    new n(".swiper-container", {
      loop: !0,
      slidesPerView: 1,
      centeredSlides: !0,
      effect: "fade",
      autoplay: { delay: 3e3, disableOnInteraction: !0 },
      pagination: { el: ".swiper-pagination", clickable: !0 },
    });
    document.body.classList.remove("no-js"),
      document.body.classList.add("js"),
      (function (a) {
        var n = a(".back-to-top").offset(),
          e = a(".block");
        a(document).scroll(function () {
          e.each(function (e) {
            var t = a(this).offset().top - a(window).scrollTop();
            if (t < n.top && 0 < t + a(this).height())
              return (
                a(".back-to-top")
                  .removeClass("has-light-bg has-dark-bg")
                  .addClass(
                    a(this).hasClass("has-light-bg")
                      ? "has-light-bg"
                      : "has-dark-bg"
                  ),
                !1
              );
          });
        }),
          (a.fn.isInViewport = function () {
            var e = a(this).offset().top,
              t = e + a(this).outerHeight(),
              n = a(window).scrollTop(),
              i = n + a(window).height();
            return n < t && e < i;
          }),
          a(window).on("resize scroll", function () {
            a(".block").each(function () {
              a(this).isInViewport() &&
                a(".back-to-top")
                  .removeClass("has-light-bg has-dark-bg")
                  .addClass(
                    a(this).hasClass("has-light-bg")
                      ? "has-light-bg"
                      : "has-dark-bg"
                  );
            });
          });
        var i = new RegExp(location.host);
        a("a")
          .not(".menu-item a")
          .each(function () {
            var e,
              t = a(this).attr("aria-label");
            i.test(a(this).attr("href")) ||
              t ||
              ("#content" !== a(this).attr("href") &&
                ((e = a(this).text()),
                a(this).addClass("is-external-link"),
                a(this).attr(
                  "aria-label",
                  imenet_screenReaderText.external_link + " " + e
                ))),
              i.test(a(this).attr("href")) ||
                t ||
                "_blank" !== a(this).attr("target") ||
                a(this).attr(
                  "aria-label",
                  imenet_screenReaderText.external_link +
                    ", " +
                    imenet_screenReaderText.target_blank +
                    " " +
                    e
                );
          }),
          a(window).scroll(function () {
            var e = ".back-to-top";
            300 < a(this).scrollTop()
              ? a(e).addClass("is-visible")
              : a(e).removeClass("is-visible"),
              1200 < a(this).scrollTop()
                ? a(e).addClass("fade-out")
                : a(e).removeClass("fade-out");
          }),
          a(function () {
            a("p:empty").remove();
          });
      })(jQuery),
      document.addEventListener("DOMContentLoaded", function () {
        for (
          var e = new i.a(
              { ease: "easeInQuad" },
              {
                easeInQuad: function (e, t, n, i) {
                  return n * (e /= i) * e + t;
                },
                easeOutQuad: function (e, t, n, i) {
                  return -n * (e /= i) * (e - 2) + t;
                },
              }
            ),
            t = document.getElementsByClassName("js-trigger"),
            n = 0;
          n < t.length;
          n++
        )
          e.registerTrigger(t[n]);
      });
  },
  71: function (e, t, n) {
    "use strict";
    var i,
      a =
        ((i = {
          tolerance: 0,
          duration: 800,
          easing: "easeOutQuart",
          container: window,
          callback: function () {},
        }),
        (s.prototype.registerTrigger = function (e, t) {
          var n = this;
          if (e) {
            var i,
              a,
              r = e.getAttribute("href") || e.getAttribute("data-target"),
              s =
                r && "#" !== r
                  ? document.getElementById(r.substring(1))
                  : document.body,
              o = u(
                this.options,
                ((i = e),
                (r = this.options),
                (a = {}),
                Object.keys(r).forEach(function (e) {
                  var t = i.getAttribute(
                    "data-mt-".concat(
                      e.replace(/([A-Z])/g, function (e) {
                        return "-" + e.toLowerCase();
                      })
                    )
                  );
                  t && (a[e] = isNaN(t) ? t : parseInt(t, 10));
                }),
                a)
              );
            "function" == typeof t && (o.callback = t);
            var l = function (e) {
              e.preventDefault(), n.move(s, o);
            };
            return (
              e.addEventListener("click", l, !1),
              function () {
                return e.removeEventListener("click", l, !1);
              }
            );
          }
        }),
        (s.prototype.move = function (i) {
          var a,
            r,
            s,
            o,
            e,
            l = this,
            d =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          (0 !== i && !i) ||
            ((d = u(this.options, d)),
            (a = "number" == typeof i ? i : i.getBoundingClientRect().top),
            (r = p(d.container)),
            (s = null),
            (a -= d.tolerance),
            (e = function e(t) {
              var n = p(l.options.container),
                t = t - (s = s || t - 1);
              if (o && ((0 < a && n < o) || (a < 0 && o < n)))
                return d.callback(i);
              o = n;
              n = l.easeFunctions[d.easing](t, r, a, d.duration);
              d.container.scroll(0, n),
                t < d.duration
                  ? window.requestAnimationFrame(e)
                  : (d.container.scroll(0, a + r), d.callback(i));
            }),
            window.requestAnimationFrame(e));
        }),
        (s.prototype.addEaseFunction = function (e, t) {
          this.easeFunctions[e] = t;
        }),
        s);
    function r(e, t, n, i) {
      return (e /= i), -n * (--e * e * e * e - 1) + t;
    }
    function u(t, n) {
      var i = {};
      return (
        Object.keys(t).forEach(function (e) {
          i[e] = t[e];
        }),
        Object.keys(n).forEach(function (e) {
          i[e] = n[e];
        }),
        i
      );
    }
    function p(e) {
      return e instanceof HTMLElement ? e.scrollTop : e.pageYOffset;
    }
    function s() {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      (this.options = u(i, e)),
        (this.easeFunctions = u({ easeOutQuart: r }, t));
    }
    e.exports = a;
  },
  72: function (e, t, n) {
    e.exports = n(235);
  },
  73: function (e, t, n) {
    var i;
    (i = function () {
      return (
        (a = {}),
        (n.m = i =
          [
            function (e, t) {
              "use strict";
              e.exports = (function () {
                if (
                  "undefined" == typeof document ||
                  "undefined" == typeof window
                )
                  return {
                    ask: function () {
                      return "initial";
                    },
                    element: function () {
                      return null;
                    },
                    ignoreKeys: function () {},
                    specificKeys: function () {},
                    registerOnChange: function () {},
                    unRegisterOnChange: function () {},
                  };
                var t = document.documentElement,
                  n = null,
                  a = "initial",
                  r = a,
                  i = Date.now(),
                  s = "false",
                  o = ["button", "input", "select", "textarea"],
                  l = [],
                  d = [16, 17, 18, 91, 93],
                  u = [],
                  p = {
                    keydown: "keyboard",
                    keyup: "keyboard",
                    mousedown: "mouse",
                    mousemove: "mouse",
                    MSPointerDown: "pointer",
                    MSPointerMove: "pointer",
                    pointerdown: "pointer",
                    pointermove: "pointer",
                    touchstart: "touch",
                    touchend: "touch",
                  },
                  c = !1,
                  h = { x: null, y: null },
                  f = { 2: "touch", 3: "touch", 4: "mouse" },
                  v = !1;
                try {
                  var e = Object.defineProperty({}, "passive", {
                    get: function () {
                      v = !0;
                    },
                  });
                  window.addEventListener("test", null, e);
                } catch (e) {}
                var m = function () {
                    var e = !!v && { passive: !0 };
                    document.addEventListener("DOMContentLoaded", g),
                      window.PointerEvent
                        ? (window.addEventListener("pointerdown", w),
                          window.addEventListener("pointermove", b))
                        : window.MSPointerEvent
                        ? (window.addEventListener("MSPointerDown", w),
                          window.addEventListener("MSPointerMove", b))
                        : (window.addEventListener("mousedown", w),
                          window.addEventListener("mousemove", b),
                          "ontouchstart" in window &&
                            (window.addEventListener("touchstart", w, e),
                            window.addEventListener("touchend", w))),
                      window.addEventListener(k(), b, e),
                      window.addEventListener("keydown", w),
                      window.addEventListener("keyup", w),
                      window.addEventListener("focusin", C),
                      window.addEventListener("focusout", T);
                  },
                  g = function () {
                    if (
                      (s = !(
                        t.getAttribute("data-whatpersist") ||
                        "false" ===
                          document.body.getAttribute("data-whatpersist")
                      ))
                    )
                      try {
                        window.sessionStorage.getItem("what-input") &&
                          (a = window.sessionStorage.getItem("what-input")),
                          window.sessionStorage.getItem("what-intent") &&
                            (r = window.sessionStorage.getItem("what-intent"));
                      } catch (e) {}
                    y("input"), y("intent");
                  },
                  w = function (e) {
                    var t = e.which,
                      n = p[e.type];
                    "pointer" === n && (n = S(e));
                    var i = !u.length && -1 === d.indexOf(t),
                      e = u.length && -1 !== u.indexOf(t),
                      e =
                        ("keyboard" === n && t && (i || e)) ||
                        "mouse" === n ||
                        "touch" === n;
                    (e = E(n) ? !1 : e) &&
                      a !== n &&
                      (x("input", (a = n)), y("input")),
                      !e ||
                        r === n ||
                        ((e = document.activeElement) &&
                          e.nodeName &&
                          (-1 === o.indexOf(e.nodeName.toLowerCase()) ||
                            ("button" === e.nodeName.toLowerCase() &&
                              !L(e, "form"))) &&
                          (x("intent", (r = n)), y("intent")));
                  },
                  y = function (e) {
                    t.setAttribute("data-what" + e, "input" === e ? a : r),
                      M(e);
                  },
                  b = function (e) {
                    var t = p[e.type];
                    "pointer" === t && (t = S(e)),
                      P(e),
                      ((!c && !E(t)) ||
                        (c && "wheel" === e.type) ||
                        "mousewheel" === e.type ||
                        "DOMMouseScroll" === e.type) &&
                        r !== t &&
                        (x("intent", (r = t)), y("intent"));
                  },
                  C = function (e) {
                    e.target.nodeName
                      ? ((n = e.target.nodeName.toLowerCase()),
                        t.setAttribute("data-whatelement", n),
                        e.target.classList &&
                          e.target.classList.length &&
                          t.setAttribute(
                            "data-whatclasses",
                            e.target.classList.toString().replace(" ", ",")
                          ))
                      : T();
                  },
                  T = function () {
                    (n = null),
                      t.removeAttribute("data-whatelement"),
                      t.removeAttribute("data-whatclasses");
                  },
                  x = function (e, t) {
                    if (s)
                      try {
                        window.sessionStorage.setItem("what-" + e, t);
                      } catch (e) {}
                  },
                  S = function (e) {
                    return "number" == typeof e.pointerType
                      ? f[e.pointerType]
                      : "pen" === e.pointerType
                      ? "touch"
                      : e.pointerType;
                  },
                  E = function (e) {
                    var t = Date.now(),
                      e = "mouse" === e && "touch" === a && t - i < 200;
                    return (i = t), e;
                  },
                  k = function () {
                    return "onwheel" in document.createElement("div")
                      ? "wheel"
                      : void 0 !== document.onmousewheel
                      ? "mousewheel"
                      : "DOMMouseScroll";
                  },
                  M = function (e) {
                    for (var t = 0, n = l.length; t < n; t++)
                      l[t].type === e &&
                        l[t].fn.call(void 0, "input" === e ? a : r);
                  },
                  P = function (e) {
                    h.x !== e.screenX || h.y !== e.screenY
                      ? ((c = !1), (h.x = e.screenX), (h.y = e.screenY))
                      : (c = !0);
                  },
                  L = function (e, t) {
                    var n = window.Element.prototype;
                    if (
                      (n.matches ||
                        (n.matches =
                          n.msMatchesSelector || n.webkitMatchesSelector),
                      n.closest)
                    )
                      return e.closest(t);
                    do {
                      if (e.matches(t)) return e;
                    } while (
                      null !== (e = e.parentElement || e.parentNode) &&
                      1 === e.nodeType
                    );
                    return null;
                  };
                return (
                  "addEventListener" in window &&
                    Array.prototype.indexOf &&
                    ((p[k()] = "mouse"), m()),
                  {
                    ask: function (e) {
                      return "intent" === e ? r : a;
                    },
                    element: function () {
                      return n;
                    },
                    ignoreKeys: function (e) {
                      d = e;
                    },
                    specificKeys: function (e) {
                      u = e;
                    },
                    registerOnChange: function (e, t) {
                      l.push({ fn: e, type: t || "input" });
                    },
                    unRegisterOnChange: function (e) {
                      e = (function (e) {
                        for (var t = 0, n = l.length; t < n; t++)
                          if (l[t].fn === e) return t;
                      })(e);
                      (!e && 0 !== e) || l.splice(e, 1);
                    },
                    clearStorage: function () {
                      window.sessionStorage.clear();
                    },
                  }
                );
              })();
            },
          ]),
        (n.c = a),
        (n.p = ""),
        n(0)
      );
      function n(e) {
        if (a[e]) return a[e].exports;
        var t = (a[e] = { exports: {}, id: e, loaded: !1 });
        return (
          i[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports
        );
      }
      var i, a;
    }),
      (e.exports = i());
  },
});
