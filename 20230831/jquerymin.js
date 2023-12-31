(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  function n(e, t, n) {
    n = n || be;
    var r,
      i,
      o = n.createElement("script");
    if (((o.text = e), t))
      for (r in we)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))),
          i && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function r(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? pe[de.call(e)] || "object"
      : typeof e;
  }
  function i(e) {
    var t = !!e && "length" in e && e.length,
      n = r(e);
    return (
      !me(e) &&
      !xe(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function o(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function a(e, t) {
    return t
      ? "\0" === e
        ? "�"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  function s(e, t, n) {
    return me(t)
      ? Se.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? Se.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? Se.grep(e, function (e) {
          return fe.call(t, e) > -1 !== n;
        })
      : Se.filter(t, e, n);
  }
  function u(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function l(e) {
    var t = {};
    return (
      Se.each(e.match(Be) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function c(e) {
    return e;
  }
  function f(e) {
    throw e;
  }
  function p(e, t, n, r) {
    var i;
    try {
      e && me((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && me((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function d() {
    be.removeEventListener("DOMContentLoaded", d),
      e.removeEventListener("load", d),
      Se.ready();
  }
  function h(e, t) {
    return t.toUpperCase();
  }
  function g(e) {
    return e.replace(Ue, "ms-").replace(Ve, h);
  }
  function v() {
    this.expando = Se.expando + v.uid++;
  }
  function y(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Je.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function m(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Ke, "-$&").toLowerCase()),
        (n = e.getAttribute(r)),
        "string" == typeof n)
      ) {
        try {
          n = y(n);
        } catch (e) {}
        Qe.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function x(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return Se.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (Se.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (Se.cssNumber[t] || ("px" !== l && +u)) &&
        et.exec(Se.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; a--; )
        Se.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), Se.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  function b(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = at[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = Se.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (at[r] = i),
      i)
    );
  }
  function w(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]),
        r.style &&
          ((n = r.style.display),
          t
            ? ("none" === n &&
                ((i[o] = Ye.get(r, "display") || null),
                i[o] || (r.style.display = "")),
              "" === r.style.display && ot(r) && (i[o] = b(r)))
            : "none" !== n && ((i[o] = "none"), Ye.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  function T(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && o(e, t)) ? Se.merge([e], n) : n
    );
  }
  function C(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Ye.set(e[n], "globalEval", !t || Ye.get(t[n], "globalEval"));
  }
  function S(e, t, n, i, o) {
    for (
      var a,
        s,
        u,
        l,
        c,
        f,
        p = t.createDocumentFragment(),
        d = [],
        h = 0,
        g = e.length;
      h < g;
      h++
    )
      if (((a = e[h]), a || 0 === a))
        if ("object" === r(a)) Se.merge(d, a.nodeType ? [a] : a);
        else if (ht.test(a)) {
          for (
            s = s || p.appendChild(t.createElement("div")),
              u = (ft.exec(a) || ["", ""])[1].toLowerCase(),
              l = dt[u] || dt._default,
              s.innerHTML = l[1] + Se.htmlPrefilter(a) + l[2],
              f = l[0];
            f--;

          )
            s = s.lastChild;
          Se.merge(d, s.childNodes), (s = p.firstChild), (s.textContent = "");
        } else d.push(t.createTextNode(a));
    for (p.textContent = "", h = 0; (a = d[h++]); )
      if (i && Se.inArray(a, i) > -1) o && o.push(a);
      else if (((c = rt(a)), (s = T(p.appendChild(a), "script")), c && C(s), n))
        for (f = 0; (a = s[f++]); ) pt.test(a.type || "") && n.push(a);
    return p;
  }
  function E() {
    return !0;
  }
  function k() {
    return !1;
  }
  function j(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        j(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = k;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        (i = function (e) {
          return Se().off(e), a.apply(this, arguments);
        }),
        (i.guid = a.guid || (a.guid = Se.guid++))),
      e.each(function () {
        Se.event.add(this, t, i, r, n);
      })
    );
  }
  function A(e, t, n) {
    n
      ? (Ye.set(e, t, !1),
        Se.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var n,
              r = Ye.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (r)
                (Se.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = ue.call(arguments)),
                Ye.set(this, t, r),
                this[t](),
                (n = Ye.get(this, t)),
                Ye.set(this, t, !1),
                r !== n)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), n;
            } else
              r &&
                (Ye.set(this, t, Se.event.trigger(r[0], r.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = E));
          },
        }))
      : void 0 === Ye.get(e, t) && Se.event.add(e, t, E);
  }
  function D(e, t) {
    return (
      (o(e, "table") &&
        o(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        Se(e).children("tbody")[0]) ||
      e
    );
  }
  function N(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function q(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function L(e, t) {
    var n, r, i, o, a, s, u;
    if (1 === t.nodeType) {
      if (Ye.hasData(e) && ((o = Ye.get(e)), (u = o.events), u))
        for (i in (Ye.remove(t, "handle events"), u))
          for (n = 0, r = u[i].length; n < r; n++) Se.event.add(t, i, u[i][n]);
      Qe.hasData(e) &&
        ((a = Qe.access(e)), (s = Se.extend({}, a)), Qe.set(t, s));
    }
  }
  function H(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && ct.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function O(e, t, r, i) {
    t = le(t);
    var o,
      a,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      h = t[0],
      g = me(h);
    if (g || (p > 1 && "string" == typeof h && !ye.checkClone && yt.test(h)))
      return e.each(function (n) {
        var o = e.eq(n);
        g && (t[0] = h.call(this, n, o.html())), O(o, t, r, i);
      });
    if (
      p &&
      ((o = S(t, e[0].ownerDocument, !1, e, i)),
      (a = o.firstChild),
      1 === o.childNodes.length && (o = a),
      a || i)
    ) {
      for (s = Se.map(T(o, "script"), N), u = s.length; f < p; f++)
        (l = o),
          f !== d &&
            ((l = Se.clone(l, !0, !0)), u && Se.merge(s, T(l, "script"))),
          r.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, Se.map(s, q), f = 0; f < u; f++)
          (l = s[f]),
            pt.test(l.type || "") &&
              !Ye.access(l, "globalEval") &&
              Se.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? Se._evalUrl &&
                  !l.noModule &&
                  Se._evalUrl(
                    l.src,
                    { nonce: l.nonce || l.getAttribute("nonce") },
                    c
                  )
                : n(l.textContent.replace(mt, ""), l, c));
    }
    return e;
  }
  function P(e, t, n) {
    for (var r, i = t ? Se.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || Se.cleanData(T(r)),
        r.parentNode &&
          (n && rt(r) && C(T(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  function M(e, t, n) {
    var r,
      i,
      o,
      a,
      s = bt.test(t),
      u = e.style;
    return (
      (n = n || wt(e)),
      n &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(De, "$1") || void 0),
        "" !== a || rt(e) || (a = Se.style(e, t)),
        !ye.pixelBoxStyles() &&
          xt.test(a) &&
          Ct.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function R(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function I(e) {
    for (var t = e[0].toUpperCase() + e.slice(1), n = St.length; n--; )
      if (((e = St[n] + t), e in Et)) return e;
  }
  function W(e) {
    var t = Se.cssProps[e] || kt[e];
    return t || (e in Et ? e : (kt[e] = I(e) || e));
  }
  function F(e, t, n) {
    var r = et.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function $(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += Se.css(e, n + tt[a], !0, i)),
        r
          ? ("content" === n && (u -= Se.css(e, "padding" + tt[a], !0, i)),
            "margin" !== n &&
              (u -= Se.css(e, "border" + tt[a] + "Width", !0, i)))
          : ((u += Se.css(e, "padding" + tt[a], !0, i)),
            "padding" !== n
              ? (u += Se.css(e, "border" + tt[a] + "Width", !0, i))
              : (s += Se.css(e, "border" + tt[a] + "Width", !0, i)));
    return (
      !r &&
        o >= 0 &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u + l
    );
  }
  function B(e, t, n) {
    var r = wt(e),
      i = !ye.boxSizingReliable() || n,
      a = i && "border-box" === Se.css(e, "boxSizing", !1, r),
      s = a,
      u = M(e, t, r),
      l = "offset" + t[0].toUpperCase() + t.slice(1);
    if (xt.test(u)) {
      if (!n) return u;
      u = "auto";
    }
    return (
      ((!ye.boxSizingReliable() && a) ||
        (!ye.reliableTrDimensions() && o(e, "tr")) ||
        "auto" === u ||
        (!parseFloat(u) && "inline" === Se.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((a = "border-box" === Se.css(e, "boxSizing", !1, r)),
        (s = l in e),
        s && (u = e[l])),
      (u = parseFloat(u) || 0),
      u + $(e, t, n || (a ? "border" : "content"), s, r, u) + "px"
    );
  }
  function _(e, t, n, r, i) {
    return new _.prototype.init(e, t, n, r, i);
  }
  function z() {
    qt &&
      (!1 === be.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(z)
        : e.setTimeout(z, Se.fx.interval),
      Se.fx.tick());
  }
  function X() {
    return (
      e.setTimeout(function () {
        Nt = void 0;
      }),
      (Nt = Date.now())
    );
  }
  function U(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      (n = tt[r]), (i["margin" + n] = i["padding" + n] = e);
    return t && (i.opacity = i.width = e), i;
  }
  function V(e, t, n) {
    for (
      var r,
        i = (Q.tweeners[t] || []).concat(Q.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function G(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && ot(e),
      v = Ye.get(e, "fxshow");
    for (r in (n.queue ||
      ((a = Se._queueHooks(e, "fx")),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      p.always(function () {
        p.always(function () {
          a.unqueued--, Se.queue(e, "fx").length || a.empty.fire();
        });
      })),
    t))
      if (((i = t[r]), Lt.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
        ) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }
        d[r] = (v && v[r]) || Se.style(e, r);
      }
    if (((u = !Se.isEmptyObject(t)), u || !Se.isEmptyObject(d)))
      for (r in (f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        (l = v && v.display),
        null == l && (l = Ye.get(e, "display")),
        (c = Se.css(e, "display")),
        "none" === c &&
          (l
            ? (c = l)
            : (w([e], !0),
              (l = e.style.display || l),
              (c = Se.css(e, "display")),
              w([e]))),
        ("inline" === c || ("inline-block" === c && null != l)) &&
          "none" === Se.css(e, "float") &&
          (u ||
            (p.done(function () {
              h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
          (h.display = "inline-block"))),
      n.overflow &&
        ((h.overflow = "hidden"),
        p.always(function () {
          (h.overflow = n.overflow[0]),
            (h.overflowX = n.overflow[1]),
            (h.overflowY = n.overflow[2]);
        })),
      (u = !1),
      d))
        u ||
          (v
            ? "hidden" in v && (g = v.hidden)
            : (v = Ye.access(e, "fxshow", { display: l })),
          o && (v.hidden = !g),
          g && w([e], !0),
          p.done(function () {
            for (r in (g || w([e]), Ye.remove(e, "fxshow"), d))
              Se.style(e, r, d[r]);
          })),
          (u = V(g ? v[r] : 0, r, p)),
          r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
  }
  function Y(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = g(n)),
        (i = t[r]),
        (o = e[n]),
        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = Se.cssHooks[r]),
        a && "expand" in a)
      )
        for (n in ((o = a.expand(o)), delete e[r], o))
          n in e || ((e[n] = o[n]), (t[n] = i));
      else t[r] = i;
  }
  function Q(e, t, n) {
    var r,
      i,
      o = 0,
      a = Q.prefilters.length,
      s = Se.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = Nt || X(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = n / l.duration || 0,
            o = 1 - r,
            a = 0,
            u = l.tweens.length;
          a < u;
          a++
        )
          l.tweens[a].run(o);
        return (
          s.notifyWith(e, [l, o, n]),
          o < 1 && u
            ? n
            : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: Se.extend({}, t),
        opts: Se.extend(
          !0,
          { specialEasing: {}, easing: Se.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: Nt || X(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = Se.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (Y(c, l.opts.specialEasing); o < a; o++)
      if (((r = Q.prefilters[o].call(l, e, c, l.opts)), r))
        return (
          me(r.stop) &&
            (Se._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      Se.map(c, V, l),
      me(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      Se.fx.timer(Se.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  function J(e) {
    var t = e.match(Be) || [];
    return t.join(" ");
  }
  function K(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function Z(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(Be)) || [];
  }
  function ee(e, t, n, i) {
    var o;
    if (Array.isArray(t))
      Se.each(t, function (t, r) {
        n || zt.test(e)
          ? i(e, r)
          : ee(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== r(t)) i(e, t);
    else for (o in t) ee(e + "[" + o + "]", t[o], n, i);
  }
  function te(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(Be) || [];
      if (me(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function ne(e, t, n, r) {
    function i(s) {
      var u;
      return (
        (o[s] = !0),
        Se.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || a || o[l]
            ? a
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), i(l), !1);
        }),
        u
      );
    }
    var o = {},
      a = e === nn;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function re(e, t) {
    var n,
      r,
      i = Se.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && Se.extend(!0, e, r), e;
  }
  function ie(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function oe(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()),
        o)
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (((a = l[u + " " + o] || l["* " + o]), !a))
            for (i in l)
              if (
                ((s = i.split(" ")),
                s[1] === o && ((a = l[u + " " + s[0]] || l["* " + s[0]]), a))
              ) {
                !0 === a
                  ? (a = l[i])
                  : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e.throws) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  var ae = [],
    se = Object.getPrototypeOf,
    ue = ae.slice,
    le = ae.flat
      ? function (e) {
          return ae.flat.call(e);
        }
      : function (e) {
          return ae.concat.apply([], e);
        },
    ce = ae.push,
    fe = ae.indexOf,
    pe = {},
    de = pe.toString,
    he = pe.hasOwnProperty,
    ge = he.toString,
    ve = ge.call(Object),
    ye = {},
    me = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    xe = function (e) {
      return null != e && e === e.window;
    },
    be = e.document,
    we = { type: !0, src: !0, nonce: !0, noModule: !0 },
    Te = "3.7.1",
    Ce = /HTML$/i,
    Se = function (e, t) {
      return new Se.fn.init(e, t);
    };
  (Se.fn = Se.prototype =
    {
      jquery: Te,
      constructor: Se,
      length: 0,
      toArray: function () {
        return ue.call(this);
      },
      get: function (e) {
        return null == e
          ? ue.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = Se.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return Se.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          Se.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(ue.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          Se.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          Se.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: ce,
      sort: ae.sort,
      splice: ae.splice,
    }),
    (Se.extend = Se.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || me(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (Se.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || Se.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = Se.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    Se.extend({
      expando: "jQuery" + (Te + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== de.call(e)) &&
          ((t = se(e)),
          !t ||
            ((n = he.call(t, "constructor") && t.constructor),
            "function" == typeof n && ge.call(n) === ve))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, r) {
        n(e, { nonce: t && t.nonce }, r);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (i(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (!i) for (; (t = e[r++]); ) n += Se.text(t);
        return 1 === i || 11 === i
          ? e.textContent
          : 9 === i
          ? e.documentElement.textContent
          : 3 === i || 4 === i
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (i(Object(e))
              ? Se.merge(n, "string" == typeof e ? [e] : e)
              : ce.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : fe.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Ce.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
          (r = !t(e[o], o)), r !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          o,
          a = 0,
          s = [];
        if (i(e))
          for (r = e.length; a < r; a++)
            (o = t(e[a], a, n)), null != o && s.push(o);
        else for (a in e) (o = t(e[a], a, n)), null != o && s.push(o);
        return le(s);
      },
      guid: 1,
      support: ye,
    }),
    "function" == typeof Symbol &&
      (Se.fn[Symbol.iterator] = ae[Symbol.iterator]),
    Se.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        pe["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var Ee = ae.pop,
    ke = ae.sort,
    je = ae.splice,
    Ae = "[\\x20\\t\\r\\n\\f]",
    De = new RegExp("^" + Ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ae + "+$", "g");
  Se.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var Ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  Se.escapeSelector = function (e) {
    return (e + "").replace(Ne, a);
  };
  var qe = be,
    Le = ce;
  (function () {
    function t() {
      try {
        return N.activeElement;
      } catch (e) {}
    }
    function n(e, t, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        d,
        v = t && t.ownerDocument,
        y = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== y && 9 !== y && 11 !== y))
      )
        return r;
      if (!i && (p(t), (t = t || N), L)) {
        if (11 !== y && (l = re.exec(e)))
          if ((o = l[1])) {
            if (9 === y) {
              if (!(s = t.getElementById(o))) return r;
              if (s.id === o) return P.call(r, s), r;
            } else if (
              v &&
              (s = v.getElementById(o)) &&
              n.contains(t, s) &&
              s.id === o
            )
              return P.call(r, s), r;
          } else {
            if (l[2]) return P.apply(r, t.getElementsByTagName(e)), r;
            if ((o = l[3]) && t.getElementsByClassName)
              return P.apply(r, t.getElementsByClassName(o)), r;
          }
        if (!(B[e + " "] || (H && H.test(e)))) {
          if (((d = e), (v = t), 1 === y && (J.test(e) || Q.test(e)))) {
            for (
              v = (ie.test(e) && f(t.parentNode)) || t,
                (v == t && ye.scope) ||
                  ((u = t.getAttribute("id"))
                    ? (u = Se.escapeSelector(u))
                    : t.setAttribute("id", (u = M))),
                c = h(e),
                a = c.length;
              a--;

            )
              c[a] = (u ? "#" + u : ":scope") + " " + g(c[a]);
            d = c.join(",");
          }
          try {
            return P.apply(r, v.querySelectorAll(d)), r;
          } catch (t) {
            B(e, !0);
          } finally {
            u === M && t.removeAttribute("id");
          }
        }
      }
      return S(e.replace(De, "$1"), t, r, i);
    }
    function r() {
      function e(n, r) {
        return (
          t.push(n + " ") > k.cacheLength && delete e[t.shift()],
          (e[n + " "] = r)
        );
      }
      var t = [];
      return e;
    }
    function i(e) {
      return (e[M] = !0), e;
    }
    function a(e) {
      var t = N.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function s(e) {
      return function (t) {
        return o(t, "input") && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        return (o(t, "input") || o(t, "button")) && t.type === e;
      };
    }
    function l(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ce(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function c(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function f(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function p(e) {
      var t,
        r = e ? e.ownerDocument || e : qe;
      return r != N && 9 === r.nodeType && r.documentElement
        ? ((N = r),
          (q = N.documentElement),
          (L = !Se.isXMLDoc(N)),
          (O = q.matches || q.webkitMatchesSelector || q.msMatchesSelector),
          q.msMatchesSelector &&
            qe != N &&
            (t = N.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", le),
          (ye.getById = a(function (e) {
            return (
              (q.appendChild(e).id = Se.expando),
              !N.getElementsByName || !N.getElementsByName(Se.expando).length
            );
          })),
          (ye.disconnectedMatch = a(function (e) {
            return O.call(e, "*");
          })),
          (ye.scope = a(function () {
            return N.querySelectorAll(":scope");
          })),
          (ye.cssHas = a(function () {
            try {
              return N.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          ye.getById
            ? ((k.filter.ID = function (e) {
                var t = e.replace(oe, se);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (k.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && L) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((k.filter.ID = function (e) {
                var t = e.replace(oe, se);
                return function (e) {
                  var n =
                    void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t;
                };
              }),
              (k.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && L) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if (((n = o.getAttributeNode("id")), n && n.value === e))
                      return [o];
                    for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                      if (((n = o.getAttributeNode("id")), n && n.value === e))
                        return [o];
                  }
                  return [];
                }
              })),
          (k.find.TAG = function (e, t) {
            return void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (k.find.CLASS = function (e, t) {
            if (void 0 !== t.getElementsByClassName && L)
              return t.getElementsByClassName(e);
          }),
          (H = []),
          a(function (e) {
            var t;
            (q.appendChild(e).innerHTML =
              "<a id='" +
              M +
              "' href='' disabled='disabled'></a><select id='" +
              M +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                H.push("\\[" + Ae + "*(?:value|" + z + ")"),
              e.querySelectorAll("[id~=" + M + "-]").length || H.push("~="),
              e.querySelectorAll("a#" + M + "+*").length || H.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || H.push(":checked"),
              (t = N.createElement("input")),
              t.setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (q.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                H.push(":enabled", ":disabled"),
              (t = N.createElement("input")),
              t.setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                H.push("\\[" + Ae + "*name" + Ae + "*=" + Ae + "*(?:''|\"\")");
          }),
          ye.cssHas || H.push(":has"),
          (H = H.length && new RegExp(H.join("|"))),
          (_ = function (e, t) {
            if (e === t) return (D = !0), 0;
            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              r ||
              ((r =
                (e.ownerDocument || e) == (t.ownerDocument || t)
                  ? e.compareDocumentPosition(t)
                  : 1),
              1 & r || (!ye.sortDetached && t.compareDocumentPosition(e) === r)
                ? e === N || (e.ownerDocument == qe && n.contains(qe, e))
                  ? -1
                  : t === N || (t.ownerDocument == qe && n.contains(qe, t))
                  ? 1
                  : A
                  ? fe.call(A, e) - fe.call(A, t)
                  : 0
                : 4 & r
                ? -1
                : 1)
            );
          }),
          N)
        : N;
    }
    function d() {}
    function h(e, t) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = F[e + " "];
      if (c) return t ? 0 : c.slice(0);
      for (s = e, u = [], l = k.preFilter; s; ) {
        for (a in ((r && !(i = Y.exec(s))) ||
          (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
        (r = !1),
        (i = Q.exec(s)) &&
          ((r = i.shift()),
          o.push({ value: r, type: i[0].replace(De, " ") }),
          (s = s.slice(r.length))),
        k.filter))
          !(i = ee[a].exec(s)) ||
            (l[a] && !(i = l[a](i))) ||
            ((r = i.shift()),
            o.push({ value: r, type: a, matches: i }),
            (s = s.slice(r.length)));
        if (!r) break;
      }
      return t ? s.length : s ? n.error(e) : F(e, u).slice(0);
    }
    function g(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function v(e, t, n) {
      var r = t.dir,
        i = t.next,
        a = i || r,
        s = n && "parentNode" === a,
        u = I++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
            return !1;
          }
        : function (t, n, l) {
            var c,
              f,
              p = [R, u];
            if (l) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || s)
                  if (((f = t[M] || (t[M] = {})), i && o(t, i))) t = t[r] || t;
                  else {
                    if ((c = f[a]) && c[0] === R && c[1] === u)
                      return (p[2] = c[2]);
                    if (((f[a] = p), (p[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function y(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function m(e, t, r) {
      for (var i = 0, o = t.length; i < o; i++) n(e, t[i], r);
      return r;
    }
    function x(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function b(e, t, n, r, o, a) {
      return (
        r && !r[M] && (r = b(r)),
        o && !o[M] && (o = b(o, a)),
        i(function (i, a, s, u) {
          var l,
            c,
            f,
            p,
            d = [],
            h = [],
            g = a.length,
            v = i || m(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!i && t) ? v : x(v, d, e, s, u);
          if (
            (n
              ? ((p = o || (i ? e : g || r) ? [] : a), n(y, p, s, u))
              : (p = y),
            r)
          )
            for (l = x(p, h), r(l, [], s, u), c = l.length; c--; )
              (f = l[c]) && (p[h[c]] = !(y[h[c]] = f));
          if (i) {
            if (o || e) {
              if (o) {
                for (l = [], c = p.length; c--; )
                  (f = p[c]) && l.push((y[c] = f));
                o(null, (p = []), l, u);
              }
              for (c = p.length; c--; )
                (f = p[c]) &&
                  (l = o ? fe.call(i, f) : d[c]) > -1 &&
                  (i[l] = !(a[l] = f));
            }
          } else (p = x(p === a ? p.splice(g, p.length) : p)), o ? o(null, a, p, u) : P.apply(a, p);
        })
      );
    }
    function w(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = k.relative[e[0].type],
          a = o || k.relative[" "],
          s = o ? 1 : 0,
          u = v(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          l = v(
            function (e) {
              return fe.call(t, e) > -1;
            },
            a,
            !0
          ),
          c = [
            function (e, n, r) {
              var i =
                (!o && (r || n != j)) ||
                ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
              return (t = null), i;
            },
          ];
        s < i;
        s++
      )
        if ((n = k.relative[e[s].type])) c = [v(y(c), n)];
        else {
          if (((n = k.filter[e[s].type].apply(null, e[s].matches)), n[M])) {
            for (r = ++s; r < i && !k.relative[e[r].type]; r++);
            return b(
              s > 1 && y(c),
              s > 1 &&
                g(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(De, "$1"),
              n,
              s < r && w(e.slice(s, r)),
              r < i && w((e = e.slice(r))),
              r < i && g(e)
            );
          }
          c.push(n);
        }
      return y(c);
    }
    function T(e, t) {
      var n = t.length > 0,
        r = e.length > 0,
        o = function (i, o, a, s, u) {
          var l,
            c,
            f,
            d = 0,
            h = "0",
            g = i && [],
            v = [],
            y = j,
            m = i || (r && k.find.TAG("*", u)),
            b = (R += null == y ? 1 : Math.random() || 0.1),
            w = m.length;
          for (
            u && (j = o == N || o || u);
            h !== w && null != (l = m[h]);
            h++
          ) {
            if (r && l) {
              for (
                c = 0, o || l.ownerDocument == N || (p(l), (a = !L));
                (f = e[c++]);

              )
                if (f(l, o || N, a)) {
                  P.call(s, l);
                  break;
                }
              u && (R = b);
            }
            n && ((l = !f && l) && d--, i && g.push(l));
          }
          if (((d += h), n && h !== d)) {
            for (c = 0; (f = t[c++]); ) f(g, v, o, a);
            if (i) {
              if (d > 0) for (; h--; ) g[h] || v[h] || (v[h] = Ee.call(s));
              v = x(v);
            }
            P.apply(s, v),
              u && !i && v.length > 0 && d + t.length > 1 && Se.uniqueSort(s);
          }
          return u && ((R = b), (j = y)), g;
        };
      return n ? i(o) : o;
    }
    function C(e, t) {
      var n,
        r = [],
        i = [],
        o = $[e + " "];
      if (!o) {
        for (t || (t = h(e)), n = t.length; n--; )
          (o = w(t[n])), o[M] ? r.push(o) : i.push(o);
        (o = $(e, T(i, r))), (o.selector = e);
      }
      return o;
    }
    function S(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && h((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (
          ((o = c[0] = c[0].slice(0)),
          o.length > 2 &&
            "ID" === (a = o[0]).type &&
            9 === t.nodeType &&
            L &&
            k.relative[o[1].type])
        ) {
          if (((t = (k.find.ID(a.matches[0].replace(oe, se), t) || [])[0]), !t))
            return n;
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        for (
          i = ee.needsContext.test(e) ? 0 : o.length;
          i-- && ((a = o[i]), !k.relative[(s = a.type)]);

        )
          if (
            (u = k.find[s]) &&
            (r = u(
              a.matches[0].replace(oe, se),
              (ie.test(o[0].type) && f(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), (e = r.length && g(o)), !e))
              return P.apply(n, r), n;
            break;
          }
      }
      return (
        (l || C(e, c))(r, t, !L, n, !t || (ie.test(e) && f(t.parentNode)) || t),
        n
      );
    }
    var E,
      k,
      j,
      A,
      D,
      N,
      q,
      L,
      H,
      O,
      P = Le,
      M = Se.expando,
      R = 0,
      I = 0,
      W = r(),
      F = r(),
      $ = r(),
      B = r(),
      _ = function (e, t) {
        return e === t && (D = !0), 0;
      },
      z =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      X =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        Ae +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      U =
        "\\[" +
        Ae +
        "*(" +
        X +
        ")(?:" +
        Ae +
        "*([*^$|!~]?=)" +
        Ae +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        X +
        "))|)" +
        Ae +
        "*\\]",
      V =
        ":(" +
        X +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        U +
        ")*)|.*)\\)|)",
      G = new RegExp(Ae + "+", "g"),
      Y = new RegExp("^" + Ae + "*," + Ae + "*"),
      Q = new RegExp("^" + Ae + "*([>+~]|" + Ae + ")" + Ae + "*"),
      J = new RegExp(Ae + "|>"),
      K = new RegExp(V),
      Z = new RegExp("^" + X + "$"),
      ee = {
        ID: new RegExp("^#(" + X + ")"),
        CLASS: new RegExp("^\\.(" + X + ")"),
        TAG: new RegExp("^(" + X + "|[*])"),
        ATTR: new RegExp("^" + U),
        PSEUDO: new RegExp("^" + V),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            Ae +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            Ae +
            "*(?:([+-]|)" +
            Ae +
            "*(\\d+)|))" +
            Ae +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + z + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            Ae +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            Ae +
            "*((?:-\\d)?\\d*)" +
            Ae +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      te = /^(?:input|select|textarea|button)$/i,
      ne = /^h\d$/i,
      re = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ie = /[+~]/,
      oe = new RegExp(
        "\\\\[\\da-fA-F]{1,6}" + Ae + "?|\\\\([^\\r\\n\\f])",
        "g"
      ),
      se = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      le = function () {
        p();
      },
      ce = v(
        function (e) {
          return !0 === e.disabled && o(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      P.apply((ae = ue.call(qe.childNodes)), qe.childNodes),
        ae[qe.childNodes.length].nodeType;
    } catch (e) {
      P = {
        apply: function (e, t) {
          Le.apply(e, ue.call(t));
        },
        call: function (e) {
          Le.apply(e, ue.call(arguments, 1));
        },
      };
    }
    for (E in ((n.matches = function (e, t) {
      return n(e, null, null, t);
    }),
    (n.matchesSelector = function (e, t) {
      if ((p(e), L && !B[t + " "] && (!H || !H.test(t))))
        try {
          var r = O.call(e, t);
          if (
            r ||
            ye.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {
          B(t, !0);
        }
      return n(t, N, null, [e]).length > 0;
    }),
    (n.contains = function (e, t) {
      return (e.ownerDocument || e) != N && p(e), Se.contains(e, t);
    }),
    (n.attr = function (e, t) {
      (e.ownerDocument || e) != N && p(e);
      var n = k.attrHandle[t.toLowerCase()],
        r = n && he.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (n.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (Se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((D = !ye.sortStable),
        (A = !ye.sortStable && ue.call(e, 0)),
        ke.call(e, _),
        D)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) je.call(e, n[r], 1);
      }
      return (A = null), e;
    }),
    (Se.fn.uniqueSort = function () {
      return this.pushStack(Se.uniqueSort(ue.apply(this)));
    }),
    (k = Se.expr =
      {
        cacheLength: 50,
        createPseudo: i,
        match: ee,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(oe, se)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(oe, se)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || n.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && n.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return ee.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    K.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(oe, se).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return o(e, t);
                };
          },
          CLASS: function (e) {
            var t = W[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + Ae + ")" + e + "(" + Ae + "|$)")) &&
                W(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, r) {
            return function (i) {
              var o = n.attr(i, e);
              return null == o
                ? "!=" === t
                : !t ||
                    ((o += ""),
                    "=" === t
                      ? o === r
                      : "!=" === t
                      ? o !== r
                      : "^=" === t
                      ? r && 0 === o.indexOf(r)
                      : "*=" === t
                      ? r && o.indexOf(r) > -1
                      : "$=" === t
                      ? r && o.slice(-r.length) === r
                      : "~=" === t
                      ? (" " + o.replace(G, " ") + " ").indexOf(r) > -1
                      : "|=" === t &&
                        (o === r || o.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var a = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              u = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var c,
                    f,
                    p,
                    d,
                    h,
                    g = a !== s ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    y = u && t.nodeName.toLowerCase(),
                    m = !l && !u,
                    x = !1;
                  if (v) {
                    if (a) {
                      for (; g; ) {
                        for (p = t; (p = p[g]); )
                          if (u ? o(p, y) : 1 === p.nodeType) return !1;
                        h = g = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? v.firstChild : v.lastChild]), s && m)) {
                      for (
                        f = v[M] || (v[M] = {}),
                          c = f[e] || [],
                          d = c[0] === R && c[1],
                          x = d && c[2],
                          p = d && v.childNodes[d];
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++x && p === t) {
                          f[e] = [R, d, x];
                          break;
                        }
                    } else if (
                      (m &&
                        ((f = t[M] || (t[M] = {})),
                        (c = f[e] || []),
                        (d = c[0] === R && c[1]),
                        (x = d)),
                      !1 === x)
                    )
                      for (
                        ;
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                        ((u ? !o(p, y) : 1 !== p.nodeType) ||
                          !++x ||
                          (m && ((f = p[M] || (p[M] = {})), (f[e] = [R, x])),
                          p !== t));

                      );
                    return (x -= i), x === r || (x % r == 0 && x / r >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var r,
              o =
                k.pseudos[e] ||
                k.setFilters[e.toLowerCase()] ||
                n.error("unsupported pseudo: " + e);
            return o[M]
              ? o(t)
              : o.length > 1
              ? ((r = [e, e, "", t]),
                k.setFilters.hasOwnProperty(e.toLowerCase())
                  ? i(function (e, n) {
                      for (var r, i = o(e, t), a = i.length; a--; )
                        (r = fe.call(e, i[a])), (e[r] = !(n[r] = i[a]));
                    })
                  : function (e) {
                      return o(e, 0, r);
                    })
              : o;
          },
        },
        pseudos: {
          not: i(function (e) {
            var t = [],
              n = [],
              r = C(e.replace(De, "$1"));
            return r[M]
              ? i(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: i(function (e) {
            return function (t) {
              return n(e, t).length > 0;
            };
          }),
          contains: i(function (e) {
            return (
              (e = e.replace(oe, se)),
              function (t) {
                return (t.textContent || Se.text(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: i(function (e) {
            return (
              Z.test(e || "") || n.error("unsupported lang: " + e),
              (e = e.replace(oe, se).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = L
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()), n === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === q;
          },
          focus: function (e) {
            return (
              e === t() && N.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: l(!1),
          disabled: l(!0),
          checked: function (e) {
            return (
              (o(e, "input") && !!e.checked) || (o(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !k.pseudos.empty(e);
          },
          header: function (e) {
            return ne.test(e.nodeName);
          },
          input: function (e) {
            return te.test(e.nodeName);
          },
          button: function (e) {
            return (o(e, "input") && "button" === e.type) || o(e, "button");
          },
          text: function (e) {
            var t;
            return (
              o(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: c(function () {
            return [0];
          }),
          last: c(function (e, t) {
            return [t - 1];
          }),
          eq: c(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: c(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: c(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: c(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: c(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }),
    (k.pseudos.nth = k.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      k.pseudos[E] = s(E);
    for (E in { submit: !0, reset: !0 }) k.pseudos[E] = u(E);
    (d.prototype = k.filters = k.pseudos),
      (k.setFilters = new d()),
      (ye.sortStable = M.split("").sort(_).join("") === M),
      p(),
      (ye.sortDetached = a(function (e) {
        return 1 & e.compareDocumentPosition(N.createElement("fieldset"));
      })),
      (Se.find = n),
      (Se.expr[":"] = Se.expr.pseudos),
      (Se.unique = Se.uniqueSort),
      (n.compile = C),
      (n.select = S),
      (n.setDocument = p),
      (n.tokenize = h),
      (n.escape = Se.escapeSelector),
      (n.getText = Se.text),
      (n.isXML = Se.isXMLDoc),
      (n.selectors = Se.expr),
      (n.support = Se.support),
      (n.uniqueSort = Se.uniqueSort);
  })();
  var He = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && Se(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    Oe = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    Pe = Se.expr.match.needsContext,
    Me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (Se.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? Se.find.matchesSelector(r, e)
          ? [r]
          : []
        : Se.find.matches(
            e,
            Se.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    Se.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            Se(e).filter(function () {
              for (t = 0; t < r; t++) if (Se.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) Se.find(e, i[t], n);
        return r > 1 ? Se.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(s(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(s(this, e || [], !0));
      },
      is: function (e) {
        return !!s(
          this,
          "string" == typeof e && Pe.test(e) ? Se(e) : e || [],
          !1
        ).length;
      },
    });
  var Re,
    Ie = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    We = (Se.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || Re), "string" == typeof e)) {
        if (
          ((r =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : Ie.exec(e)),
          !r || (!r[1] && t))
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof Se ? t[0] : t),
            Se.merge(
              this,
              Se.parseHTML(
                r[1],
                t && t.nodeType ? t.ownerDocument || t : be,
                !0
              )
            ),
            Me.test(r[1]) && Se.isPlainObject(t))
          )
            for (r in t) me(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = be.getElementById(r[2])),
          i && ((this[0] = i), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : me(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(Se)
        : Se.makeArray(e, this);
    });
  (We.prototype = Se.fn), (Re = Se(be));
  var Fe = /^(?:parents|prev(?:Until|All))/,
    $e = { children: !0, contents: !0, next: !0, prev: !0 };
  Se.fn.extend({
    has: function (e) {
      var t = Se(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (Se.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && Se(e);
      if (!Pe.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && Se.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? Se.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? fe.call(Se(e), this[0])
          : fe.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(Se.uniqueSort(Se.merge(this.get(), Se(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    Se.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return He(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return He(e, "parentNode", n);
        },
        next: function (e) {
          return u(e, "nextSibling");
        },
        prev: function (e) {
          return u(e, "previousSibling");
        },
        nextAll: function (e) {
          return He(e, "nextSibling");
        },
        prevAll: function (e) {
          return He(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return He(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return He(e, "previousSibling", n);
        },
        siblings: function (e) {
          return Oe((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Oe(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && se(e.contentDocument)
            ? e.contentDocument
            : (o(e, "template") && (e = e.content || e),
              Se.merge([], e.childNodes));
        },
      },
      function (e, t) {
        Se.fn[e] = function (n, r) {
          var i = Se.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = Se.filter(r, i)),
            this.length > 1 &&
              ($e[e] || Se.uniqueSort(i), Fe.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var Be = /[^\x20\t\r\n\f]+/g;
  (Se.Callbacks = function (e) {
    e = "string" == typeof e ? l(e) : Se.extend({}, e);
    var t,
      n,
      i,
      o,
      a = [],
      s = [],
      u = -1,
      c = function () {
        for (o = o || e.once, i = t = !0; s.length; u = -1)
          for (n = s.shift(); ++u < a.length; )
            !1 === a[u].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((u = a.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (a = n ? [] : "");
      },
      f = {
        add: function () {
          return (
            a &&
              (n && !t && ((u = a.length - 1), s.push(n)),
              (function t(n) {
                Se.each(n, function (n, i) {
                  me(i)
                    ? (e.unique && f.has(i)) || a.push(i)
                    : i && i.length && "string" !== r(i) && t(i);
                });
              })(arguments),
              n && !t && c()),
            this
          );
        },
        remove: function () {
          return (
            Se.each(arguments, function (e, t) {
              for (var n; (n = Se.inArray(t, a, n)) > -1; )
                a.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? Se.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (o = s = []), (a = n = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (o = s = []), n || t || (a = n = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, n) {
          return (
            o ||
              ((n = n || []),
              (n = [e, n.slice ? n.slice() : n]),
              s.push(n),
              t || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return f;
  }),
    Se.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              Se.Callbacks("memory"),
              Se.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              Se.Callbacks("once memory"),
              Se.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              Se.Callbacks("once memory"),
              Se.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return Se.Deferred(function (t) {
                Se.each(n, function (n, r) {
                  var i = me(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && me(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }),
                  (e = null);
              }).promise();
            },
            then: function (t, r, i) {
              function o(t, n, r, i) {
                return function () {
                  var s = this,
                    u = arguments,
                    l = function () {
                      var e, l;
                      if (!(t < a)) {
                        if (((e = r.apply(s, u)), e === n.promise()))
                          throw new TypeError("Thenable self-resolution");
                        (l =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          me(l)
                            ? i
                              ? l.call(e, o(a, n, c, i), o(a, n, f, i))
                              : (a++,
                                l.call(
                                  e,
                                  o(a, n, c, i),
                                  o(a, n, f, i),
                                  o(a, n, c, n.notifyWith)
                                ))
                            : (r !== c && ((s = void 0), (u = [e])),
                              (i || n.resolveWith)(s, u));
                      }
                    },
                    p = i
                      ? l
                      : function () {
                          try {
                            l();
                          } catch (e) {
                            Se.Deferred.exceptionHook &&
                              Se.Deferred.exceptionHook(e, p.error),
                              t + 1 >= a &&
                                (r !== f && ((s = void 0), (u = [e])),
                                n.rejectWith(s, u));
                          }
                        };
                  t
                    ? p()
                    : (Se.Deferred.getErrorHook
                        ? (p.error = Se.Deferred.getErrorHook())
                        : Se.Deferred.getStackHook &&
                          (p.error = Se.Deferred.getStackHook()),
                      e.setTimeout(p));
                };
              }
              var a = 0;
              return Se.Deferred(function (e) {
                n[0][3].add(o(0, e, me(i) ? i : c, e.notifyWith)),
                  n[1][3].add(o(0, e, me(t) ? t : c)),
                  n[2][3].add(o(0, e, me(r) ? r : f));
              }).promise();
            },
            promise: function (e) {
              return null != e ? Se.extend(e, i) : i;
            },
          },
          o = {};
        return (
          Se.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (i[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    r = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = ue.call(arguments),
          o = Se.Deferred(),
          a = function (e) {
            return function (n) {
              (r[e] = this),
                (i[e] = arguments.length > 1 ? ue.call(arguments) : n),
                --t || o.resolveWith(r, i);
            };
          };
        if (
          t <= 1 &&
          (p(e, o.done(a(n)).resolve, o.reject, !t),
          "pending" === o.state() || me(i[n] && i[n].then))
        )
          return o.then();
        for (; n--; ) p(i[n], a(n), o.reject);
        return o.promise();
      },
    });
  var _e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (Se.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      _e.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (Se.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var ze = Se.Deferred();
  (Se.fn.ready = function (e) {
    return (
      ze.then(e).catch(function (e) {
        Se.readyException(e);
      }),
      this
    );
  }),
    Se.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --Se.readyWait : Se.isReady) ||
          ((Se.isReady = !0),
          (!0 !== e && --Se.readyWait > 0) || ze.resolveWith(be, [Se]));
      },
    }),
    (Se.ready.then = ze.then),
    "complete" === be.readyState ||
    ("loading" !== be.readyState && !be.documentElement.doScroll)
      ? e.setTimeout(Se.ready)
      : (be.addEventListener("DOMContentLoaded", d),
        e.addEventListener("load", d));
  var Xe = function (e, t, n, i, o, a, s) {
      var u = 0,
        l = e.length,
        c = null == n;
      if ("object" === r(n))
        for (u in ((o = !0), n)) Xe(e, t, u, n[u], !0, a, s);
      else if (
        void 0 !== i &&
        ((o = !0),
        me(i) || (s = !0),
        c &&
          (s
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(Se(e), n);
              }))),
        t)
      )
        for (; u < l; u++) t(e[u], n, s ? i : i.call(e[u], u, t(e[u], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : a;
    },
    Ue = /^-ms-/,
    Ve = /-([a-z])/g,
    Ge = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (v.uid = 1),
    (v.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Ge(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[g(t)] = n;
        else for (r in t) i[g(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][g(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            Array.isArray(t)
              ? (t = t.map(g))
              : ((t = g(t)), (t = t in r ? [t] : t.match(Be) || [])),
              (n = t.length);
            for (; n--; ) delete r[t[n]];
          }
          (void 0 === t || Se.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !Se.isEmptyObject(t);
      },
    });
  var Ye = new v(),
    Qe = new v(),
    Je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ke = /[A-Z]/g;
  Se.extend({
    hasData: function (e) {
      return Qe.hasData(e) || Ye.hasData(e);
    },
    data: function (e, t, n) {
      return Qe.access(e, t, n);
    },
    removeData: function (e, t) {
      Qe.remove(e, t);
    },
    _data: function (e, t, n) {
      return Ye.access(e, t, n);
    },
    _removeData: function (e, t) {
      Ye.remove(e, t);
    },
  }),
    Se.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = Qe.get(o)), 1 === o.nodeType && !Ye.get(o, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                ((r = a[n].name),
                0 === r.indexOf("data-") &&
                  ((r = g(r.slice(5))), m(o, r, i[r])));
            Ye.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              Qe.set(this, e);
            })
          : Xe(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return (
                    (n = Qe.get(o, e)),
                    void 0 !== n
                      ? n
                      : ((n = m(o, e)), void 0 !== n ? n : void 0)
                  );
                this.each(function () {
                  Qe.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Qe.remove(this, e);
        });
      },
    }),
    Se.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Ye.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Ye.access(e, t, Se.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = Se.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = Se._queueHooks(e, t),
          a = function () {
            Se.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Ye.get(e, n) ||
          Ye.access(e, n, {
            empty: Se.Callbacks("once memory").add(function () {
              Ye.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    Se.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? Se.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = Se.queue(this, e, t);
                Se._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && Se.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          Se.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = Se.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = Ye.get(o[a], e + "queueHooks")),
            n && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var Ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    et = new RegExp("^(?:([+-])=|)(" + Ze + ")([a-z%]*)$", "i"),
    tt = ["Top", "Right", "Bottom", "Left"],
    nt = be.documentElement,
    rt = function (e) {
      return Se.contains(e.ownerDocument, e);
    },
    it = { composed: !0 };
  nt.getRootNode &&
    (rt = function (e) {
      return (
        Se.contains(e.ownerDocument, e) || e.getRootNode(it) === e.ownerDocument
      );
    });
  var ot = function (e, t) {
      return (
        (e = t || e),
        "none" === e.style.display ||
          ("" === e.style.display && rt(e) && "none" === Se.css(e, "display"))
      );
    },
    at = {};
  Se.fn.extend({
    show: function () {
      return w(this, !0);
    },
    hide: function () {
      return w(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ot(this) ? Se(this).show() : Se(this).hide();
          });
    },
  });
  var st,
    ut,
    lt,
    ct = /^(?:checkbox|radio)$/i,
    ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pt = /^$|^module$|\/(?:java|ecma)script/i;
  (st = be.createDocumentFragment()),
    (ut = st.appendChild(be.createElement("div"))),
    (lt = be.createElement("input")),
    lt.setAttribute("type", "radio"),
    lt.setAttribute("checked", "checked"),
    lt.setAttribute("name", "t"),
    ut.appendChild(lt),
    (ye.checkClone = ut.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ut.innerHTML = "<textarea>x</textarea>"),
    (ye.noCloneChecked = !!ut.cloneNode(!0).lastChild.defaultValue),
    (ut.innerHTML = "<option></option>"),
    (ye.option = !!ut.lastChild);
  var dt = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  (dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead),
    (dt.th = dt.td),
    ye.option ||
      (dt.optgroup = dt.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ht = /<|&#?\w+;/,
    gt = /^([^.]*)(?:\.(.+)|)/;
  (Se.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Ye.get(e);
      if (Ge(e))
        for (
          n.handler && ((o = n), (n = o.handler), (i = o.selector)),
            i && Se.find.matchesSelector(nt, i),
            n.guid || (n.guid = Se.guid++),
            (u = v.events) || (u = v.events = Object.create(null)),
            (a = v.handle) ||
              (a = v.handle =
                function (t) {
                  return void 0 !== Se && Se.event.triggered !== t.type
                    ? Se.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            t = (t || "").match(Be) || [""],
            l = t.length;
          l--;

        )
          (s = gt.exec(t[l]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = Se.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = Se.event.special[d] || {}),
              (c = Se.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && Se.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                ((p = u[d] = []),
                (p.delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (Se.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Ye.hasData(e) && Ye.get(e);
      if (v && (u = v.events)) {
        for (t = (t || "").match(Be) || [""], l = t.length; l--; )
          if (
            ((s = gt.exec(t[l]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = Se.event.special[d] || {},
                d = (r ? f.delegateType : f.bindType) || d,
                p = u[d] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                Se.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) Se.event.remove(e, d + t[l], n, r, !0);
        Se.isEmptyObject(u) && Ye.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = Se.event.fix(e),
        l = (Ye.get(this, "events") || Object.create(null))[u.type] || [],
        c = Se.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        for (
          a = Se.event.handlers.call(this, u, l), t = 0;
          (i = a[t++]) && !u.isPropagationStopped();

        )
          for (
            u.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

          )
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              (r = (
                (Se.event.special[o.origType] || {}).handle || o.handler
              ).apply(i.elem, s)),
              void 0 !== r &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              (r = t[n]),
                (i = r.selector + " "),
                void 0 === a[i] &&
                  (a[i] = r.needsContext
                    ? Se(i, this).index(l) > -1
                    : Se.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(Se.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: me(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[Se.expando] ? e : new Se.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            ct.test(t.type) && t.click && o(t, "input") && A(t, "click", !0), !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            ct.test(t.type) && t.click && o(t, "input") && A(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (ct.test(t.type) &&
              t.click &&
              o(t, "input") &&
              Ye.get(t, "click")) ||
            o(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (Se.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (Se.Event = function (e, t) {
      if (!(this instanceof Se.Event)) return new Se.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? E
              : k),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && Se.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[Se.expando] = !0);
    }),
    (Se.Event.prototype = {
      constructor: Se.Event,
      isDefaultPrevented: k,
      isPropagationStopped: k,
      isImmediatePropagationStopped: k,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = E),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = E),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = E),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    Se.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      Se.event.addProp
    ),
    Se.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      function n(e) {
        if (be.documentMode) {
          var n = Ye.get(this, "handle"),
            r = Se.event.fix(e);
          (r.type = "focusin" === e.type ? "focus" : "blur"),
            (r.isSimulated = !0),
            n(e),
            r.target === r.currentTarget && n(r);
        } else Se.event.simulate(t, e.target, Se.event.fix(e));
      }
      (Se.event.special[e] = {
        setup: function () {
          var r;
          if ((A(this, e, !0), !be.documentMode)) return !1;
          (r = Ye.get(this, t)),
            r || this.addEventListener(t, n),
            Ye.set(this, t, (r || 0) + 1);
        },
        trigger: function () {
          return A(this, e), !0;
        },
        teardown: function () {
          var e;
          if (!be.documentMode) return !1;
          (e = Ye.get(this, t) - 1),
            e
              ? Ye.set(this, t, e)
              : (this.removeEventListener(t, n), Ye.remove(this, t));
        },
        _default: function (t) {
          return Ye.get(t.target, e);
        },
        delegateType: t,
      }),
        (Se.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this.document || this,
              i = be.documentMode ? this : r,
              o = Ye.get(i, t);
            o ||
              (be.documentMode
                ? this.addEventListener(t, n)
                : r.addEventListener(e, n, !0)),
              Ye.set(i, t, (o || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this.document || this,
              i = be.documentMode ? this : r,
              o = Ye.get(i, t) - 1;
            o
              ? Ye.set(i, t, o)
              : (be.documentMode
                  ? this.removeEventListener(t, n)
                  : r.removeEventListener(e, n, !0),
                Ye.remove(i, t));
          },
        });
    }),
    Se.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        Se.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || Se.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    Se.fn.extend({
      on: function (e, t, n, r) {
        return j(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return j(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            Se(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = k),
          this.each(function () {
            Se.event.remove(this, e, n, t);
          })
        );
      },
    });
  var vt = /<script|<style|<link/i,
    yt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    mt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  Se.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = rt(e);
      if (
        !(
          ye.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          Se.isXMLDoc(e)
        )
      )
        for (a = T(s), o = T(e), r = 0, i = o.length; r < i; r++) H(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || T(e), a = a || T(s), r = 0, i = o.length; r < i; r++)
            L(o[r], a[r]);
        else L(e, s);
      return (
        (a = T(s, "script")), a.length > 0 && C(a, !u && T(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = Se.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Ge(n)) {
          if ((t = n[Ye.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? Se.event.remove(n, r) : Se.removeEvent(n, r, t.handle);
            n[Ye.expando] = void 0;
          }
          n[Qe.expando] && (n[Qe.expando] = void 0);
        }
    },
  }),
    Se.fn.extend({
      detach: function (e) {
        return P(this, e, !0);
      },
      remove: function (e) {
        return P(this, e);
      },
      text: function (e) {
        return Xe(
          this,
          function (e) {
            return void 0 === e
              ? Se.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return O(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = D(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return O(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = D(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return O(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return O(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (Se.cleanData(T(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return Se.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Xe(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !vt.test(e) &&
              !dt[(ft.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = Se.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (Se.cleanData(T(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return O(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            Se.inArray(this, e) < 0 &&
              (Se.cleanData(T(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    Se.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        Se.fn[e] = function (e) {
          for (var n, r = [], i = Se(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              Se(i[a])[t](n),
              ce.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var xt = new RegExp("^(" + Ze + ")(?!px)[a-z%]+$", "i"),
    bt = /^--/,
    wt = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Tt = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ct = new RegExp(tt.join("|"), "i");
  (function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          nt.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (r = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (a = 36 === n(t.right)),
          (i = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (o = 12 === n(c.offsetWidth / 3)),
          nt.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var r,
      i,
      o,
      a,
      s,
      u,
      l = be.createElement("div"),
      c = be.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (ye.clearCloneStyle = "content-box" === c.style.backgroundClip),
      Se.extend(ye, {
        boxSizingReliable: function () {
          return t(), i;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), r;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, r, i;
          return (
            null == s &&
              ((t = be.createElement("table")),
              (n = be.createElement("tr")),
              (r = be.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "box-sizing:content-box;border:1px solid"),
              (n.style.height = "1px"),
              (r.style.height = "9px"),
              (r.style.display = "block"),
              nt.appendChild(t).appendChild(n).appendChild(r),
              (i = e.getComputedStyle(n)),
              (s =
                parseInt(i.height, 10) +
                  parseInt(i.borderTopWidth, 10) +
                  parseInt(i.borderBottomWidth, 10) ===
                n.offsetHeight),
              nt.removeChild(t)),
            s
          );
        },
      }));
  })();
  var St = ["Webkit", "Moz", "ms"],
    Et = be.createElement("div").style,
    kt = {},
    jt = /^(none|table(?!-c[ea]).+)/,
    At = { position: "absolute", visibility: "hidden", display: "block" },
    Dt = { letterSpacing: "0", fontWeight: "400" };
  Se.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = M(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = g(t),
          u = bt.test(t),
          l = e.style;
        if (
          (u || (t = W(s)),
          (a = Se.cssHooks[t] || Se.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        (o = typeof n),
          "string" === o &&
            (i = et.exec(n)) &&
            i[1] &&
            ((n = x(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (Se.cssNumber[s] ? "" : "px")),
            ye.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = g(t),
        u = bt.test(t);
      return (
        u || (t = W(s)),
        (a = Se.cssHooks[t] || Se.cssHooks[s]),
        a && "get" in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = M(e, t, r)),
        "normal" === i && t in Dt && (i = Dt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    Se.each(["height", "width"], function (e, t) {
      Se.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !jt.test(Se.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? B(e, t, r)
              : Tt(e, At, function () {
                  return B(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = wt(e),
            a = !ye.scrollboxSize() && "absolute" === o.position,
            s = a || r,
            u = s && "border-box" === Se.css(e, "boxSizing", !1, o),
            l = r ? $(e, t, r, u, o) : 0;
          return (
            u &&
              a &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  $(e, t, "border", !1, o) -
                  0.5
              )),
            l &&
              (i = et.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = Se.css(e, t))),
            F(e, n, l)
          );
        },
      };
    }),
    (Se.cssHooks.marginLeft = R(ye.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(M(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Tt(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    Se.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (Se.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + tt[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (Se.cssHooks[e + t].set = F);
    }),
    Se.fn.extend({
      css: function (e, t) {
        return Xe(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = wt(e), i = t.length; a < i; a++)
                o[t[a]] = Se.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? Se.style(e, t, n) : Se.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (Se.Tween = _),
    (_.prototype = {
      constructor: _,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || Se.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (Se.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = _.propHooks[this.prop];
        return e && e.get ? e.get(this) : _.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = _.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                Se.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : _.propHooks._default.set(this),
          this
        );
      },
    }),
    (_.prototype.init.prototype = _.prototype),
    (_.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : ((t = Se.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
        },
        set: function (e) {
          Se.fx.step[e.prop]
            ? Se.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!Se.cssHooks[e.prop] && null == e.elem.style[W(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : Se.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (_.propHooks.scrollTop = _.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (Se.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (Se.fx = _.prototype.init),
    (Se.fx.step = {});
  var Nt,
    qt,
    Lt = /^(?:toggle|show|hide)$/,
    Ht = /queueHooks$/;
  (Se.Animation = Se.extend(Q, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return x(n.elem, e, et.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      me(e) ? ((t = e), (e = ["*"])) : (e = e.match(Be));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (Q.tweeners[n] = Q.tweeners[n] || []),
          Q.tweeners[n].unshift(t);
    },
    prefilters: [G],
    prefilter: function (e, t) {
      t ? Q.prefilters.unshift(e) : Q.prefilters.push(e);
    },
  })),
    (Se.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? Se.extend({}, e)
          : {
              complete: n || (!n && t) || (me(e) && e),
              duration: e,
              easing: (n && t) || (t && !me(t) && t),
            };
      return (
        Se.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in Se.fx.speeds
              ? (r.duration = Se.fx.speeds[r.duration])
              : (r.duration = Se.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          me(r.old) && r.old.call(this), r.queue && Se.dequeue(this, r.queue);
        }),
        r
      );
    }),
    Se.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ot)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = Se.isEmptyObject(e),
          o = Se.speed(t, n, r),
          a = function () {
            var t = Q(this, Se.extend({}, e), o);
            (i || Ye.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = Se.timers,
              a = Ye.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && Ht.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || Se.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Ye.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = Se.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                Se.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    Se.each(["toggle", "show", "hide"], function (e, t) {
      var n = Se.fn[t];
      Se.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(U(t, !0), e, r, i);
      };
    }),
    Se.each(
      {
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        Se.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (Se.timers = []),
    (Se.fx.tick = function () {
      var e,
        t = 0,
        n = Se.timers;
      for (Nt = Date.now(); t < n.length; t++)
        (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
      n.length || Se.fx.stop(), (Nt = void 0);
    }),
    (Se.fx.timer = function (e) {
      Se.timers.push(e), Se.fx.start();
    }),
    (Se.fx.interval = 13),
    (Se.fx.start = function () {
      qt || ((qt = !0), z());
    }),
    (Se.fx.stop = function () {
      qt = null;
    }),
    (Se.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (Se.fn.delay = function (t, n) {
      return (
        (t = (Se.fx && Se.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = be.createElement("input"),
        t = be.createElement("select"),
        n = t.appendChild(be.createElement("option"));
      (e.type = "checkbox"),
        (ye.checkOn = "" !== e.value),
        (ye.optSelected = n.selected),
        (e = be.createElement("input")),
        (e.value = "t"),
        (e.type = "radio"),
        (ye.radioValue = "t" === e.value);
    })();
  var Ot,
    Pt = Se.expr.attrHandle;
  Se.fn.extend({
    attr: function (e, t) {
      return Xe(this, Se.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        Se.removeAttr(this, e);
      });
    },
  }),
    Se.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? Se.prop(e, t, n)
            : ((1 === o && Se.isXMLDoc(e)) ||
                (i =
                  Se.attrHooks[t.toLowerCase()] ||
                  (Se.expr.match.bool.test(t) ? Ot : void 0)),
              void 0 !== n
                ? null === n
                  ? void Se.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : ((r = Se.find.attr(e, t)), null == r ? void 0 : r));
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!ye.radioValue && "radio" === t && o(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(Be);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (Ot = {
      set: function (e, t, n) {
        return !1 === t ? Se.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    Se.each(Se.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Pt[t] || Se.find.attr;
      Pt[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = Pt[a]),
            (Pt[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (Pt[a] = o)),
          i
        );
      };
    });
  var Mt = /^(?:input|select|textarea|button)$/i,
    Rt = /^(?:a|area)$/i;
  Se.fn.extend({
    prop: function (e, t) {
      return Xe(this, Se.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[Se.propFix[e] || e];
      });
    },
  }),
    Se.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && Se.isXMLDoc(e)) ||
              ((t = Se.propFix[t] || t), (i = Se.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = Se.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Mt.test(e.nodeName) || (Rt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ye.optSelected ||
      (Se.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    Se.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        Se.propFix[this.toLowerCase()] = this;
      }
    ),
    Se.fn.extend({
      addClass: function (e) {
        var t, n, r, i, o, a;
        return me(e)
          ? this.each(function (t) {
              Se(this).addClass(e.call(this, t, K(this)));
            })
          : ((t = Z(e)),
            t.length
              ? this.each(function () {
                  if (
                    ((r = K(this)),
                    (n = 1 === this.nodeType && " " + J(r) + " "),
                    n)
                  ) {
                    for (o = 0; o < t.length; o++)
                      (i = t[o]),
                        n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    (a = J(n)), r !== a && this.setAttribute("class", a);
                  }
                })
              : this);
      },
      removeClass: function (e) {
        var t, n, r, i, o, a;
        return me(e)
          ? this.each(function (t) {
              Se(this).removeClass(e.call(this, t, K(this)));
            })
          : arguments.length
          ? ((t = Z(e)),
            t.length
              ? this.each(function () {
                  if (
                    ((r = K(this)),
                    (n = 1 === this.nodeType && " " + J(r) + " "),
                    n)
                  ) {
                    for (o = 0; o < t.length; o++)
                      for (i = t[o]; n.indexOf(" " + i + " ") > -1; )
                        n = n.replace(" " + i + " ", " ");
                    (a = J(n)), r !== a && this.setAttribute("class", a);
                  }
                })
              : this)
          : this.attr("class", "");
      },
      toggleClass: function (e, t) {
        var n,
          r,
          i,
          o,
          a = typeof e,
          s = "string" === a || Array.isArray(e);
        return me(e)
          ? this.each(function (n) {
              Se(this).toggleClass(e.call(this, n, K(this), t), t);
            })
          : "boolean" == typeof t && s
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ((n = Z(e)),
            this.each(function () {
              if (s)
                for (o = Se(this), i = 0; i < n.length; i++)
                  (r = n[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== e && "boolean" !== a) ||
                  ((r = K(this)),
                  r && Ye.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === e ? "" : Ye.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (1 === n.nodeType && (" " + J(K(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var It = /\r/g;
  Se.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = me(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              ((i = r ? e.call(this, n, Se(this).val()) : e),
              null == i
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = Se.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              (t =
                Se.valHooks[this.type] ||
                Se.valHooks[this.nodeName.toLowerCase()]),
              (t && "set" in t && void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? ((t = Se.valHooks[i.type] || Se.valHooks[i.nodeName.toLowerCase()]),
          t && "get" in t && void 0 !== (n = t.get(i, "value"))
            ? n
            : ((n = i.value),
              "string" == typeof n ? n.replace(It, "") : null == n ? "" : n))
        : void 0;
    },
  }),
    Se.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = Se.find.attr(e, "value");
            return null != t ? t : J(Se.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              a = e.selectedIndex,
              s = "select-one" === e.type,
              u = s ? null : [],
              l = s ? a + 1 : i.length;
            for (r = a < 0 ? l : s ? a : 0; r < l; r++)
              if (
                ((n = i[r]),
                (n.selected || r === a) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !o(n.parentNode, "optgroup")))
              ) {
                if (((t = Se(n).val()), s)) return t;
                u.push(t);
              }
            return u;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = Se.makeArray(t), a = i.length;
              a--;

            )
              (r = i[a]),
                (r.selected = Se.inArray(Se.valHooks.option.get(r), o) > -1) &&
                  (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    Se.each(["radio", "checkbox"], function () {
      (Se.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = Se.inArray(Se(e).val(), t) > -1);
        },
      }),
        ye.checkOn ||
          (Se.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Wt = e.location,
    Ft = { guid: Date.now() },
    $t = /\?/;
  Se.parseXML = function (t) {
    var n, r;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {}
    return (
      (r = n && n.getElementsByTagName("parsererror")[0]),
      (n && !r) ||
        Se.error(
          "Invalid XML: " +
            (r
              ? Se.map(r.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : t)
        ),
      n
    );
  };
  var Bt = /^(?:focusinfocus|focusoutblur)$/,
    _t = function (e) {
      e.stopPropagation();
    };
  Se.extend(Se.event, {
    trigger: function (t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d = [r || be],
        h = he.call(t, "type") ? t.type : t,
        g = he.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = p = s = r = r || be),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Bt.test(h + Se.event.triggered) &&
          (h.indexOf(".") > -1 &&
            ((g = h.split(".")), (h = g.shift()), g.sort()),
          (l = h.indexOf(":") < 0 && "on" + h),
          (t = t[Se.expando] ? t : new Se.Event(h, "object" == typeof t && t)),
          (t.isTrigger = i ? 2 : 3),
          (t.namespace = g.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : Se.makeArray(n, [t])),
          (f = Se.event.special[h] || {}),
          i || !f.trigger || !1 !== f.trigger.apply(r, n)))
      ) {
        if (!i && !f.noBubble && !xe(r)) {
          for (
            u = f.delegateType || h, Bt.test(u + h) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            d.push(a), (s = a);
          s === (r.ownerDocument || be) &&
            d.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
          (p = a),
            (t.type = o > 1 ? u : f.bindType || h),
            (c =
              (Ye.get(a, "events") || Object.create(null))[t.type] &&
              Ye.get(a, "handle")),
            c && c.apply(a, n),
            (c = l && a[l]),
            c &&
              c.apply &&
              Ge(a) &&
              ((t.result = c.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          i ||
            t.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(d.pop(), n)) ||
            !Ge(r) ||
            (l &&
              me(r[h]) &&
              !xe(r) &&
              ((s = r[l]),
              s && (r[l] = null),
              (Se.event.triggered = h),
              t.isPropagationStopped() && p.addEventListener(h, _t),
              r[h](),
              t.isPropagationStopped() && p.removeEventListener(h, _t),
              (Se.event.triggered = void 0),
              s && (r[l] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = Se.extend(new Se.Event(), n, { type: e, isSimulated: !0 });
      Se.event.trigger(r, null, t);
    },
  }),
    Se.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          Se.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return Se.event.trigger(e, t, n, !0);
      },
    });
  var zt = /\[\]$/,
    Xt = /\r?\n/g,
    Ut = /^(?:submit|button|image|reset|file)$/i,
    Vt = /^(?:input|select|textarea|keygen)/i;
  (Se.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = me(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !Se.isPlainObject(e)))
      Se.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) ee(n, e[n], t, i);
    return r.join("&");
  }),
    Se.fn.extend({
      serialize: function () {
        return Se.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = Se.prop(this, "elements");
          return e ? Se.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !Se(this).is(":disabled") &&
              Vt.test(this.nodeName) &&
              !Ut.test(e) &&
              (this.checked || !ct.test(e))
            );
          })
          .map(function (e, t) {
            var n = Se(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? Se.map(n, function (e) {
                  return { name: t.name, value: e.replace(Xt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Xt, "\r\n") };
          })
          .get();
      },
    });
  var Gt = /%20/g,
    Yt = /#.*$/,
    Qt = /([?&])_=[^&]*/,
    Jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Zt = /^(?:GET|HEAD)$/,
    en = /^\/\//,
    tn = {},
    nn = {},
    rn = "*/".concat("*"),
    on = be.createElement("a");
  (on.href = Wt.href),
    Se.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Wt.href,
        type: "GET",
        isLocal: Kt.test(Wt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": rn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": Se.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? re(re(e, Se.ajaxSettings), t) : re(Se.ajaxSettings, e);
      },
      ajaxPrefilter: te(tn),
      ajaxTransport: te(nn),
      ajax: function (t, n) {
        function r(t, n, r, s) {
          var l,
            p,
            d,
            b,
            w,
            T = n;
          c ||
            ((c = !0),
            u && e.clearTimeout(u),
            (i = void 0),
            (a = s || ""),
            (C.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && t < 300) || 304 === t),
            r && (b = ie(h, C, r)),
            !l &&
              Se.inArray("script", h.dataTypes) > -1 &&
              Se.inArray("json", h.dataTypes) < 0 &&
              (h.converters["text script"] = function () {}),
            (b = oe(h, b, C, l)),
            l
              ? (h.ifModified &&
                  ((w = C.getResponseHeader("Last-Modified")),
                  w && (Se.lastModified[o] = w),
                  (w = C.getResponseHeader("etag")),
                  w && (Se.etag[o] = w)),
                204 === t || "HEAD" === h.type
                  ? (T = "nocontent")
                  : 304 === t
                  ? (T = "notmodified")
                  : ((T = b.state), (p = b.data), (d = b.error), (l = !d)))
              : ((d = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (n || T) + ""),
            l ? y.resolveWith(g, [p, T, C]) : y.rejectWith(g, [C, T, d]),
            C.statusCode(x),
            (x = void 0),
            f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]),
            m.fireWith(g, [C, T]),
            f &&
              (v.trigger("ajaxComplete", [C, h]),
              --Se.active || Se.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = Se.ajaxSetup({}, n),
          g = h.context || h,
          v = h.context && (g.nodeType || g.jquery) ? Se(g) : Se.event,
          y = Se.Deferred(),
          m = Se.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          w = {},
          T = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = Jt.exec(a)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) C.always(e[C.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return i && i.abort(t), r(0, t), this;
            },
          };
        if (
          (y.promise(C),
          (h.url = ((t || h.url || Wt.href) + "").replace(
            en,
            Wt.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(Be) || [""]),
          null == h.crossDomain)
        ) {
          l = be.createElement("a");
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                on.protocol + "//" + on.host != l.protocol + "//" + l.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = Se.param(h.data, h.traditional)),
          ne(tn, h, n, C),
          c)
        )
          return C;
        for (p in ((f = Se.event && h.global),
        f && 0 == Se.active++ && Se.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Zt.test(h.type)),
        (o = h.url.replace(Yt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(Gt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += ($t.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Qt, "$1")),
              (d = ($t.test(o) ? "&" : "?") + "_=" + Ft.guid++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (Se.lastModified[o] &&
            C.setRequestHeader("If-Modified-Since", Se.lastModified[o]),
          Se.etag[o] && C.setRequestHeader("If-None-Match", Se.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          C.setRequestHeader("Content-Type", h.contentType),
        C.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + rn + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          C.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c))
          return C.abort();
        if (
          ((T = "abort"),
          m.add(h.complete),
          C.done(h.success),
          C.fail(h.error),
          (i = ne(nn, h, n, C)),
          i)
        ) {
          if (((C.readyState = 1), f && v.trigger("ajaxSend", [C, h]), c))
            return C;
          h.async &&
            h.timeout > 0 &&
            (u = e.setTimeout(function () {
              C.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), i.send(b, r);
          } catch (e) {
            if (c) throw e;
            r(-1, e);
          }
        } else r(-1, "No Transport");
        return C;
      },
      getJSON: function (e, t, n) {
        return Se.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return Se.get(e, void 0, t, "script");
      },
    }),
    Se.each(["get", "post"], function (e, t) {
      Se[t] = function (e, n, r, i) {
        return (
          me(n) && ((i = i || r), (r = n), (n = void 0)),
          Se.ajax(
            Se.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              Se.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    Se.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (Se._evalUrl = function (e, t, n) {
      return Se.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          Se.globalEval(e, t, n);
        },
      });
    }),
    Se.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (me(e) && (e = e.call(this[0])),
            (t = Se(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return me(e)
          ? this.each(function (t) {
              Se(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = Se(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = me(e);
        return this.each(function (n) {
          Se(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              Se(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (Se.expr.pseudos.hidden = function (e) {
      return !Se.expr.pseudos.visible(e);
    }),
    (Se.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (Se.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var an = { 0: 200, 1223: 204 },
    sn = Se.ajaxSettings.xhr();
  (ye.cors = !!sn && "withCredentials" in sn),
    (ye.ajax = sn = !!sn),
    Se.ajaxTransport(function (t) {
      var n, r;
      if (ye.cors || (sn && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              i["X-Requested-With"] ||
              (i["X-Requested-With"] = "XMLHttpRequest"),
            i))
              s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        an[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    Se.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    Se.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return Se.globalEval(e), e;
        },
      },
    }),
    Se.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    Se.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (r, i) {
            (t = Se("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              be.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var un,
    ln = [],
    cn = /(=)\?(?=&|$)|\?\?/;
  Se.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = ln.pop() || Se.expando + "_" + Ft.guid++;
      return (this[e] = !0), e;
    },
  }),
    Se.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (cn.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              cn.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            me(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(cn, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += ($t.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || Se.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? Se(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), ln.push(i)),
              a && me(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (ye.createHTMLDocument =
      ((un = be.implementation.createHTMLDocument("").body),
      (un.innerHTML = "<form></form><form></form>"),
      2 === un.childNodes.length)),
    (Se.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (ye.createHTMLDocument
              ? ((t = be.implementation.createHTMLDocument("")),
                (r = t.createElement("base")),
                (r.href = be.location.href),
                t.head.appendChild(r))
              : (t = be)),
          (i = Me.exec(e)),
          (o = !n && []),
          i
            ? [t.createElement(i[1])]
            : ((i = S([e], t, o)),
              o && o.length && Se(o).remove(),
              Se.merge([], i.childNodes)));
      var r, i, o;
    }),
    (Se.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = J(e.slice(s))), (e = e.slice(0, s))),
        me(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          Se.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? Se("<div>").append(Se.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (Se.expr.pseudos.animated = function (e) {
      return Se.grep(Se.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (Se.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = Se.css(e, "position"),
          f = Se(e),
          p = {};
        "static" === c && (e.style.position = "relative"),
          (s = f.offset()),
          (o = Se.css(e, "top")),
          (u = Se.css(e, "left")),
          (l =
            ("absolute" === c || "fixed" === c) &&
            (o + u).indexOf("auto") > -1),
          l
            ? ((r = f.position()), (a = r.top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          me(t) && (t = t.call(e, n, Se.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p);
      },
    }),
    Se.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                Se.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === Se.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === Se.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              ((i = Se(e).offset()),
              (i.top += Se.css(e, "borderTopWidth", !0)),
              (i.left += Se.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - Se.css(r, "marginTop", !0),
            left: t.left - i.left - Se.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === Se.css(e, "position");

          )
            e = e.offsetParent;
          return e || nt;
        });
      },
    }),
    Se.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        Se.fn[e] = function (r) {
          return Xe(
            this,
            function (e, r, i) {
              var o;
              if (
                (xe(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    Se.each(["top", "left"], function (e, t) {
      Se.cssHooks[t] = R(ye.pixelPosition, function (e, n) {
        if (n)
          return (n = M(e, t)), xt.test(n) ? Se(e).position()[t] + "px" : n;
      });
    }),
    Se.each({ Height: "height", Width: "width" }, function (e, t) {
      Se.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          Se.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return Xe(
              this,
              function (t, n, i) {
                var o;
                return xe(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? Se.css(t, n, s)
                  : Se.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    Se.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        Se.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    Se.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      },
    }),
    Se.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        Se.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var fn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (Se.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), me(e)))
      return (
        (r = ue.call(arguments, 2)),
        (i = function () {
          return e.apply(t || this, r.concat(ue.call(arguments)));
        }),
        (i.guid = e.guid = e.guid || Se.guid++),
        i
      );
  }),
    (Se.holdReady = function (e) {
      e ? Se.readyWait++ : Se.ready(!0);
    }),
    (Se.isArray = Array.isArray),
    (Se.parseJSON = JSON.parse),
    (Se.nodeName = o),
    (Se.isFunction = me),
    (Se.isWindow = xe),
    (Se.camelCase = g),
    (Se.type = r),
    (Se.now = Date.now),
    (Se.isNumeric = function (e) {
      var t = Se.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (Se.trim = function (e) {
      return null == e ? "" : (e + "").replace(fn, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return Se;
      });
  var pn = e.jQuery,
    dn = e.$;
  return (
    (Se.noConflict = function (t) {
      return (
        e.$ === Se && (e.$ = dn), t && e.jQuery === Se && (e.jQuery = pn), Se
      );
    }),
    void 0 === t && (e.jQuery = e.$ = Se),
    Se
  );
});
