(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Zu = { exports: {} },
  ol = {},
  Ju = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bn = Symbol.for("react.element"),
  ud = Symbol.for("react.portal"),
  ad = Symbol.for("react.fragment"),
  sd = Symbol.for("react.strict_mode"),
  dd = Symbol.for("react.profiler"),
  cd = Symbol.for("react.provider"),
  pd = Symbol.for("react.context"),
  fd = Symbol.for("react.forward_ref"),
  md = Symbol.for("react.suspense"),
  yd = Symbol.for("react.memo"),
  hd = Symbol.for("react.lazy"),
  Li = Symbol.iterator;
function vd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Li && e[Li]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yu = Object.assign,
  _u = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _u),
    (this.updater = n || Gu);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ku() {}
Ku.prototype = dn.prototype;
function Wo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _u),
    (this.updater = n || Gu);
}
var Bo = (Wo.prototype = new Ku());
Bo.constructor = Wo;
Yu(Bo, dn.prototype);
Bo.isPureReactComponent = !0;
var Mi = Array.isArray,
  bu = Object.prototype.hasOwnProperty,
  Xo = { current: null },
  $u = { key: !0, ref: !0, __self: !0, __source: !0 };
function ea(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      bu.call(t, r) && !$u.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), p = 0; p < u; p++) a[p] = arguments[p + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: bn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Xo.current,
  };
}
function gd(e, t) {
  return {
    $$typeof: bn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bn;
}
function Ad(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vi = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ad("" + e.key)
    : t.toString(36);
}
function wr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case bn:
          case ud:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + kl(i, 0) : r),
      Mi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Vi, "$&/") + "/"),
          wr(l, t, n, "", function (p) {
            return p;
          }))
        : l != null &&
          (Qo(l) &&
            (l = gd(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Vi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Mi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + kl(o, u);
      i += wr(o, t, n, a, l);
    }
  else if (((a = vd(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + kl(o, u++)), (i += wr(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function or(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function xd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Er = { transition: null },
  Sd = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: Xo,
  };
T.Children = {
  map: or,
  forEach: function (e, t, n) {
    or(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      or(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      or(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = dn;
T.Fragment = ad;
T.Profiler = dd;
T.PureComponent = Wo;
T.StrictMode = sd;
T.Suspense = md;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sd;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Yu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Xo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      bu.call(t, a) &&
        !$u.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var p = 0; p < a; p++) u[p] = arguments[p + 2];
    r.children = u;
  }
  return { $$typeof: bn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: pd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cd, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ea;
T.createFactory = function (e) {
  var t = ea.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: fd, render: e };
};
T.isValidElement = Qo;
T.lazy = function (e) {
  return { $$typeof: hd, _payload: { _status: -1, _result: e }, _init: xd };
};
T.memo = function (e, t) {
  return { $$typeof: yd, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = t;
  }
};
T.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ce.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
T.useId = function () {
  return ce.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ce.current.useRef(e);
};
T.useState = function (e) {
  return ce.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ce.current.useTransition();
};
T.version = "18.2.0";
Ju.exports = T;
var Dn = Ju.exports;
const kd = id(Dn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd = Dn,
  Ed = Symbol.for("react.element"),
  Fd = Symbol.for("react.fragment"),
  jd = Object.prototype.hasOwnProperty,
  Rd = wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ta(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) jd.call(t, r) && !Cd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ed,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Rd.current,
  };
}
ol.Fragment = Fd;
ol.jsx = ta;
ol.jsxs = ta;
Zu.exports = ol;
var s = Zu.exports,
  Gl = {},
  na = { exports: {} },
  we = {},
  ra = { exports: {} },
  la = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, C) {
    var P = E.length;
    E.push(C);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        J = E[W];
      if (0 < l(J, C)) (E[W] = C), (E[P] = J), (P = W);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var C = E[0],
      P = E.pop();
    if (P !== C) {
      E[0] = P;
      e: for (var W = 0, J = E.length, rr = J >>> 1; W < rr; ) {
        var St = 2 * (W + 1) - 1,
          Sl = E[St],
          kt = St + 1,
          lr = E[kt];
        if (0 > l(Sl, P))
          kt < J && 0 > l(lr, Sl)
            ? ((E[W] = lr), (E[kt] = P), (W = kt))
            : ((E[W] = Sl), (E[St] = P), (W = St));
        else if (kt < J && 0 > l(lr, P)) (E[W] = lr), (E[kt] = P), (W = kt);
        else break e;
      }
    }
    return C;
  }
  function l(E, C) {
    var P = E.sortIndex - C.sortIndex;
    return P !== 0 ? P : E.id - C.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    p = [],
    f = 1,
    v = null,
    c = 3,
    g = !1,
    k = !1,
    w = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(E) {
    for (var C = n(p); C !== null; ) {
      if (C.callback === null) r(p);
      else if (C.startTime <= E)
        r(p), (C.sortIndex = C.expirationTime), t(a, C);
      else break;
      C = n(p);
    }
  }
  function x(E) {
    if (((w = !1), y(E), !k))
      if (n(a) !== null) (k = !0), ee(F);
      else {
        var C = n(p);
        C !== null && xt(x, C.startTime - E);
      }
  }
  function F(E, C) {
    (k = !1), w && ((w = !1), m(h), (h = -1)), (g = !0);
    var P = c;
    try {
      for (
        y(C), v = n(a);
        v !== null && (!(v.expirationTime > C) || (E && !fe()));

      ) {
        var W = v.callback;
        if (typeof W == "function") {
          (v.callback = null), (c = v.priorityLevel);
          var J = W(v.expirationTime <= C);
          (C = e.unstable_now()),
            typeof J == "function" ? (v.callback = J) : v === n(a) && r(a),
            y(C);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var rr = !0;
      else {
        var St = n(p);
        St !== null && xt(x, St.startTime - C), (rr = !1);
      }
      return rr;
    } finally {
      (v = null), (c = P), (g = !1);
    }
  }
  var R = !1,
    A = null,
    h = -1,
    q = 5,
    z = -1;
  function fe() {
    return !(e.unstable_now() - z < q);
  }
  function At() {
    if (A !== null) {
      var E = e.unstable_now();
      z = E;
      var C = !0;
      try {
        C = A(!0, E);
      } finally {
        C ? N() : ((R = !1), (A = null));
      }
    } else R = !1;
  }
  var N;
  if (typeof d == "function")
    N = function () {
      d(At);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      le = D.port2;
    (D.port1.onmessage = At),
      (N = function () {
        le.postMessage(null);
      });
  } else
    N = function () {
      L(At, 0);
    };
  function ee(E) {
    (A = E), R || ((R = !0), N());
  }
  function xt(E, C) {
    h = L(function () {
      E(e.unstable_now());
    }, C);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || g || ((k = !0), ee(F));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (q = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (E) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var C = 3;
          break;
        default:
          C = c;
      }
      var P = c;
      c = C;
      try {
        return E();
      } finally {
        c = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, C) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var P = c;
      c = E;
      try {
        return C();
      } finally {
        c = P;
      }
    }),
    (e.unstable_scheduleCallback = function (E, C, P) {
      var W = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        E)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = P + J),
        (E = {
          id: f++,
          callback: C,
          priorityLevel: E,
          startTime: P,
          expirationTime: J,
          sortIndex: -1,
        }),
        P > W
          ? ((E.sortIndex = P),
            t(p, E),
            n(a) === null &&
              E === n(p) &&
              (w ? (m(h), (h = -1)) : (w = !0), xt(x, P - W)))
          : ((E.sortIndex = J), t(a, E), k || g || ((k = !0), ee(F))),
        E
      );
    }),
    (e.unstable_shouldYield = fe),
    (e.unstable_wrapCallback = function (E) {
      var C = c;
      return function () {
        var P = c;
        c = C;
        try {
          return E.apply(this, arguments);
        } finally {
          c = P;
        }
      };
    });
})(la);
ra.exports = la;
var Pd = ra.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oa = Dn,
  ke = Pd;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ia = new Set(),
  On = {};
function Ot(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) ia.add(t[e]);
}
var Ge = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yl = Object.prototype.hasOwnProperty,
  zd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ui = {},
  qi = {};
function Nd(e) {
  return Yl.call(qi, e)
    ? !0
    : Yl.call(Ui, e)
    ? !1
    : zd.test(e)
    ? (qi[e] = !0)
    : ((Ui[e] = !0), !1);
}
function Td(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Id(e, t, n, r) {
  if (t === null || typeof t > "u" || Td(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zo = /[\-:]([a-z])/g;
function Jo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zo, Jo);
    re[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zo, Jo);
    re[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Zo, Jo);
  re[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Go(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Id(t, n, l, r) && (n = null),
    r || l === null
      ? Nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = oa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ir = Symbol.for("react.element"),
  Vt = Symbol.for("react.portal"),
  Ut = Symbol.for("react.fragment"),
  Yo = Symbol.for("react.strict_mode"),
  _l = Symbol.for("react.profiler"),
  ua = Symbol.for("react.provider"),
  aa = Symbol.for("react.context"),
  _o = Symbol.for("react.forward_ref"),
  Kl = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  Ko = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  sa = Symbol.for("react.offscreen"),
  Hi = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hi && e[Hi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  wl;
function Sn(e) {
  if (wl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wl = (t && t[1]) || "";
    }
  return (
    `
` +
    wl +
    e
  );
}
var El = !1;
function Fl(e, t) {
  if (!e || El) return "";
  El = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (p) {
        r = p;
      }
      e();
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (
        var l = p.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Sn(e) : "";
}
function Dd(e) {
  switch (e.tag) {
    case 5:
      return Sn(e.type);
    case 16:
      return Sn("Lazy");
    case 13:
      return Sn("Suspense");
    case 19:
      return Sn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Fl(e.type, !1)), e;
    case 11:
      return (e = Fl(e.type.render, !1)), e;
    case 1:
      return (e = Fl(e.type, !0)), e;
    default:
      return "";
  }
}
function $l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Vt:
      return "Portal";
    case _l:
      return "Profiler";
    case Yo:
      return "StrictMode";
    case Kl:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case aa:
        return (e.displayName || "Context") + ".Consumer";
      case ua:
        return (e._context.displayName || "Context") + ".Provider";
      case _o:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ko:
        return (
          (t = e.displayName || null), t !== null ? t : $l(e.type) || "Memo"
        );
      case et:
        (t = e._payload), (e = e._init);
        try {
          return $l(e(t));
        } catch {}
    }
  return null;
}
function Od(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $l(t);
    case 8:
      return t === Yo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function da(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ld(e) {
  var t = da(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ur(e) {
  e._valueTracker || (e._valueTracker = Ld(e));
}
function ca(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = da(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Or(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eo(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Wi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pa(e, t) {
  (t = t.checked), t != null && Go(e, "checked", t, !1);
}
function to(e, t) {
  pa(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? no(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && no(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function no(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kn = Array.isArray;
function _t(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ro(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (kn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function fa(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Qi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ma(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ma(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ar,
  ya = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ar = ar || document.createElement("div"),
          ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ar.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ln(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Md = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  Md.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function ha(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
    ? ("" + t).trim()
    : t + "px";
}
function va(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ha(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Vd = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function oo(e, t) {
  if (t) {
    if (Vd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function io(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var uo = null;
function bo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ao = null,
  Kt = null,
  bt = null;
function Zi(e) {
  if ((e = tr(e))) {
    if (typeof ao != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = dl(t)), ao(e.stateNode, e.type, t));
  }
}
function ga(e) {
  Kt ? (bt ? bt.push(e) : (bt = [e])) : (Kt = e);
}
function Aa() {
  if (Kt) {
    var e = Kt,
      t = bt;
    if (((bt = Kt = null), Zi(e), t)) for (e = 0; e < t.length; e++) Zi(t[e]);
  }
}
function xa(e, t) {
  return e(t);
}
function Sa() {}
var jl = !1;
function ka(e, t, n) {
  if (jl) return e(t, n);
  jl = !0;
  try {
    return xa(e, t, n);
  } finally {
    (jl = !1), (Kt !== null || bt !== null) && (Sa(), Aa());
  }
}
function Mn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var so = !1;
if (Ge)
  try {
    var mn = {};
    Object.defineProperty(mn, "passive", {
      get: function () {
        so = !0;
      },
    }),
      window.addEventListener("test", mn, mn),
      window.removeEventListener("test", mn, mn);
  } catch {
    so = !1;
  }
function Ud(e, t, n, r, l, o, i, u, a) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (f) {
    this.onError(f);
  }
}
var jn = !1,
  Lr = null,
  Mr = !1,
  co = null,
  qd = {
    onError: function (e) {
      (jn = !0), (Lr = e);
    },
  };
function Hd(e, t, n, r, l, o, i, u, a) {
  (jn = !1), (Lr = null), Ud.apply(qd, arguments);
}
function Wd(e, t, n, r, l, o, i, u, a) {
  if ((Hd.apply(this, arguments), jn)) {
    if (jn) {
      var p = Lr;
      (jn = !1), (Lr = null);
    } else throw Error(S(198));
    Mr || ((Mr = !0), (co = p));
  }
}
function Lt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function wa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ji(e) {
  if (Lt(e) !== e) throw Error(S(188));
}
function Bd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Lt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ji(l), e;
        if (o === r) return Ji(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Ea(e) {
  return (e = Bd(e)), e !== null ? Fa(e) : null;
}
function Fa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ja = ke.unstable_scheduleCallback,
  Gi = ke.unstable_cancelCallback,
  Xd = ke.unstable_shouldYield,
  Qd = ke.unstable_requestPaint,
  G = ke.unstable_now,
  Zd = ke.unstable_getCurrentPriorityLevel,
  $o = ke.unstable_ImmediatePriority,
  Ra = ke.unstable_UserBlockingPriority,
  Vr = ke.unstable_NormalPriority,
  Jd = ke.unstable_LowPriority,
  Ca = ke.unstable_IdlePriority,
  il = null,
  He = null;
function Gd(e) {
  if (He && typeof He.onCommitFiberRoot == "function")
    try {
      He.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Kd,
  Yd = Math.log,
  _d = Math.LN2;
function Kd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yd(e) / _d) | 0)) | 0;
}
var sr = 64,
  dr = 4194304;
function wn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ur(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = wn(u)) : ((o &= i), o !== 0 && (r = wn(o)));
  } else (i = n & ~l), i !== 0 ? (r = wn(i)) : o !== 0 && (r = wn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function bd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $d(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Oe(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = bd(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function po(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Pa() {
  var e = sr;
  return (sr <<= 1), !(sr & 4194240) && (sr = 64), e;
}
function Rl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function $n(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function ec(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ei(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function za(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Na,
  ti,
  Ta,
  Ia,
  Da,
  fo = !1,
  cr = [],
  it = null,
  ut = null,
  at = null,
  Vn = new Map(),
  Un = new Map(),
  nt = [],
  tc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Yi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Vn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Un.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = tr(t)), t !== null && ti(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function nc(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (it = yn(it, e, t, n, r, l)), !0;
    case "dragenter":
      return (ut = yn(ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (at = yn(at, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Vn.set(o, yn(Vn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Un.set(o, yn(Un.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Oa(e) {
  var t = Ft(e.target);
  if (t !== null) {
    var n = Lt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wa(n)), t !== null)) {
          (e.blockedOn = t),
            Da(e.priority, function () {
              Ta(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (uo = r), n.target.dispatchEvent(r), (uo = null);
    } else return (t = tr(n)), t !== null && ti(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _i(e, t, n) {
  Fr(e) && n.delete(t);
}
function rc() {
  (fo = !1),
    it !== null && Fr(it) && (it = null),
    ut !== null && Fr(ut) && (ut = null),
    at !== null && Fr(at) && (at = null),
    Vn.forEach(_i),
    Un.forEach(_i);
}
function hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fo ||
      ((fo = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, rc)));
}
function qn(e) {
  function t(l) {
    return hn(l, e);
  }
  if (0 < cr.length) {
    hn(cr[0], e);
    for (var n = 1; n < cr.length; n++) {
      var r = cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && hn(it, e),
      ut !== null && hn(ut, e),
      at !== null && hn(at, e),
      Vn.forEach(t),
      Un.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    (r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    Oa(n), n.blockedOn === null && nt.shift();
}
var $t = be.ReactCurrentBatchConfig,
  qr = !0;
function lc(e, t, n, r) {
  var l = O,
    o = $t.transition;
  $t.transition = null;
  try {
    (O = 1), ni(e, t, n, r);
  } finally {
    (O = l), ($t.transition = o);
  }
}
function oc(e, t, n, r) {
  var l = O,
    o = $t.transition;
  $t.transition = null;
  try {
    (O = 4), ni(e, t, n, r);
  } finally {
    (O = l), ($t.transition = o);
  }
}
function ni(e, t, n, r) {
  if (qr) {
    var l = mo(e, t, n, r);
    if (l === null) Ml(e, t, r, Hr, n), Yi(e, r);
    else if (nc(l, e, t, n, r)) r.stopPropagation();
    else if ((Yi(e, r), t & 4 && -1 < tc.indexOf(e))) {
      for (; l !== null; ) {
        var o = tr(l);
        if (
          (o !== null && Na(o),
          (o = mo(e, t, n, r)),
          o === null && Ml(e, t, r, Hr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var Hr = null;
function mo(e, t, n, r) {
  if (((Hr = null), (e = bo(r)), (e = Ft(e)), e !== null))
    if (((t = Lt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Hr = e), null;
}
function La(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Zd()) {
        case $o:
          return 1;
        case Ra:
          return 4;
        case Vr:
        case Jd:
          return 16;
        case Ca:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var lt = null,
  ri = null,
  jr = null;
function Ma() {
  if (jr) return jr;
  var e,
    t = ri,
    n = t.length,
    r,
    l = "value" in lt ? lt.value : lt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Rr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pr() {
  return !0;
}
function Ki() {
  return !1;
}
function Ee(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? pr
        : Ki),
      (this.isPropagationStopped = Ki),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = pr));
      },
      persist: function () {},
      isPersistent: pr,
    }),
    t
  );
}
var cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  li = Ee(cn),
  er = Q({}, cn, { view: 0, detail: 0 }),
  ic = Ee(er),
  Cl,
  Pl,
  vn,
  ul = Q({}, er, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vn &&
            (vn && e.type === "mousemove"
              ? ((Cl = e.screenX - vn.screenX), (Pl = e.screenY - vn.screenY))
              : (Pl = Cl = 0),
            (vn = e)),
          Cl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  bi = Ee(ul),
  uc = Q({}, ul, { dataTransfer: 0 }),
  ac = Ee(uc),
  sc = Q({}, er, { relatedTarget: 0 }),
  zl = Ee(sc),
  dc = Q({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cc = Ee(dc),
  pc = Q({}, cn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fc = Ee(pc),
  mc = Q({}, cn, { data: 0 }),
  $i = Ee(mc),
  yc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  hc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vc = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gc(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vc[e]) ? !!t[e] : !1;
}
function oi() {
  return gc;
}
var Ac = Q({}, er, {
    key: function (e) {
      if (e.key) {
        var t = yc[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Rr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? hc[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oi,
    charCode: function (e) {
      return e.type === "keypress" ? Rr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Rr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xc = Ee(Ac),
  Sc = Q({}, ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  eu = Ee(Sc),
  kc = Q({}, er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oi,
  }),
  wc = Ee(kc),
  Ec = Q({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fc = Ee(Ec),
  jc = Q({}, ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Rc = Ee(jc),
  Cc = [9, 13, 27, 32],
  ii = Ge && "CompositionEvent" in window,
  Rn = null;
Ge && "documentMode" in document && (Rn = document.documentMode);
var Pc = Ge && "TextEvent" in window && !Rn,
  Va = Ge && (!ii || (Rn && 8 < Rn && 11 >= Rn)),
  tu = String.fromCharCode(32),
  nu = !1;
function Ua(e, t) {
  switch (e) {
    case "keyup":
      return Cc.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var qt = !1;
function zc(e, t) {
  switch (e) {
    case "compositionend":
      return qa(t);
    case "keypress":
      return t.which !== 32 ? null : ((nu = !0), tu);
    case "textInput":
      return (e = t.data), e === tu && nu ? null : e;
    default:
      return null;
  }
}
function Nc(e, t) {
  if (qt)
    return e === "compositionend" || (!ii && Ua(e, t))
      ? ((e = Ma()), (jr = ri = lt = null), (qt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Va && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tc = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tc[e.type] : t === "textarea";
}
function Ha(e, t, n, r) {
  ga(r),
    (t = Wr(t, "onChange")),
    0 < t.length &&
      ((n = new li("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cn = null,
  Hn = null;
function Ic(e) {
  ba(e, 0);
}
function al(e) {
  var t = Bt(e);
  if (ca(t)) return e;
}
function Dc(e, t) {
  if (e === "change") return t;
}
var Wa = !1;
if (Ge) {
  var Nl;
  if (Ge) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var lu = document.createElement("div");
      lu.setAttribute("oninput", "return;"),
        (Tl = typeof lu.oninput == "function");
    }
    Nl = Tl;
  } else Nl = !1;
  Wa = Nl && (!document.documentMode || 9 < document.documentMode);
}
function ou() {
  Cn && (Cn.detachEvent("onpropertychange", Ba), (Hn = Cn = null));
}
function Ba(e) {
  if (e.propertyName === "value" && al(Hn)) {
    var t = [];
    Ha(t, Hn, e, bo(e)), ka(Ic, t);
  }
}
function Oc(e, t, n) {
  e === "focusin"
    ? (ou(), (Cn = t), (Hn = n), Cn.attachEvent("onpropertychange", Ba))
    : e === "focusout" && ou();
}
function Lc(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return al(Hn);
}
function Mc(e, t) {
  if (e === "click") return al(t);
}
function Vc(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function Uc(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : Uc;
function Wn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Yl.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uu(e, t) {
  var n = iu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = iu(n);
  }
}
function Xa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qa() {
  for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Or(e.document);
  }
  return t;
}
function ui(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function qc(e) {
  var t = Qa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ui(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = uu(n, o));
        var i = uu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Hc = Ge && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  yo = null,
  Pn = null,
  ho = !1;
function au(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ho ||
    Ht == null ||
    Ht !== Or(r) ||
    ((r = Ht),
    "selectionStart" in r && ui(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && Wn(Pn, r)) ||
      ((Pn = r),
      (r = Wr(yo, "onSelect")),
      0 < r.length &&
        ((t = new li("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wt = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd"),
  },
  Il = {},
  Za = {};
Ge &&
  ((Za = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function sl(e) {
  if (Il[e]) return Il[e];
  if (!Wt[e]) return e;
  var t = Wt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Za) return (Il[e] = t[n]);
  return e;
}
var Ja = sl("animationend"),
  Ga = sl("animationiteration"),
  Ya = sl("animationstart"),
  _a = sl("transitionend"),
  Ka = new Map(),
  su =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ht(e, t) {
  Ka.set(e, t), Ot(t, [e]);
}
for (var Dl = 0; Dl < su.length; Dl++) {
  var Ol = su[Dl],
    Wc = Ol.toLowerCase(),
    Bc = Ol[0].toUpperCase() + Ol.slice(1);
  ht(Wc, "on" + Bc);
}
ht(Ja, "onAnimationEnd");
ht(Ga, "onAnimationIteration");
ht(Ya, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(_a, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
Ot(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ot(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ot(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ot(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ot(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var En =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xc = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function du(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Wd(r, t, void 0, e), (e.currentTarget = null);
}
function ba(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            p = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          du(l, u, p), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (p = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          du(l, u, p), (o = a);
        }
    }
  }
  if (Mr) throw ((e = co), (Mr = !1), (co = null), e);
}
function V(e, t) {
  var n = t[So];
  n === void 0 && (n = t[So] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($a(t, e, 2, !1), n.add(r));
}
function Ll(e, t, n) {
  var r = 0;
  t && (r |= 4), $a(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(e) {
  if (!e[mr]) {
    (e[mr] = !0),
      ia.forEach(function (n) {
        n !== "selectionchange" && (Xc.has(n) || Ll(n, !1, e), Ll(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || ((t[mr] = !0), Ll("selectionchange", !1, t));
  }
}
function $a(e, t, n, r) {
  switch (La(t)) {
    case 1:
      var l = lc;
      break;
    case 4:
      l = oc;
      break;
    default:
      l = ni;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !so ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Ft(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ka(function () {
    var p = o,
      f = bo(n),
      v = [];
    e: {
      var c = Ka.get(e);
      if (c !== void 0) {
        var g = li,
          k = e;
        switch (e) {
          case "keypress":
            if (Rr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = xc;
            break;
          case "focusin":
            (k = "focus"), (g = zl);
            break;
          case "focusout":
            (k = "blur"), (g = zl);
            break;
          case "beforeblur":
          case "afterblur":
            g = zl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = bi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = ac;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = wc;
            break;
          case Ja:
          case Ga:
          case Ya:
            g = cc;
            break;
          case _a:
            g = Fc;
            break;
          case "scroll":
            g = ic;
            break;
          case "wheel":
            g = Rc;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = fc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = eu;
        }
        var w = (t & 4) !== 0,
          L = !w && e === "scroll",
          m = w ? (c !== null ? c + "Capture" : null) : c;
        w = [];
        for (var d = p, y; d !== null; ) {
          y = d;
          var x = y.stateNode;
          if (
            (y.tag === 5 &&
              x !== null &&
              ((y = x),
              m !== null && ((x = Mn(d, m)), x != null && w.push(Xn(d, x, y)))),
            L)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((c = new g(c, k, null, n, f)), v.push({ event: c, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          c &&
            n !== uo &&
            (k = n.relatedTarget || n.fromElement) &&
            (Ft(k) || k[Ye]))
        )
          break e;
        if (
          (g || c) &&
          ((c =
            f.window === f
              ? f
              : (c = f.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          g
            ? ((k = n.relatedTarget || n.toElement),
              (g = p),
              (k = k ? Ft(k) : null),
              k !== null &&
                ((L = Lt(k)), k !== L || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((g = null), (k = p)),
          g !== k)
        ) {
          if (
            ((w = bi),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = eu),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (L = g == null ? c : Bt(g)),
            (y = k == null ? c : Bt(k)),
            (c = new w(x, d + "leave", g, n, f)),
            (c.target = L),
            (c.relatedTarget = y),
            (x = null),
            Ft(f) === p &&
              ((w = new w(m, d + "enter", k, n, f)),
              (w.target = y),
              (w.relatedTarget = L),
              (x = w)),
            (L = x),
            g && k)
          )
            t: {
              for (w = g, m = k, d = 0, y = w; y; y = Mt(y)) d++;
              for (y = 0, x = m; x; x = Mt(x)) y++;
              for (; 0 < d - y; ) (w = Mt(w)), d--;
              for (; 0 < y - d; ) (m = Mt(m)), y--;
              for (; d--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = Mt(w)), (m = Mt(m));
              }
              w = null;
            }
          else w = null;
          g !== null && cu(v, c, g, w, !1),
            k !== null && L !== null && cu(v, L, k, w, !0);
        }
      }
      e: {
        if (
          ((c = p ? Bt(p) : window),
          (g = c.nodeName && c.nodeName.toLowerCase()),
          g === "select" || (g === "input" && c.type === "file"))
        )
          var F = Dc;
        else if (ru(c))
          if (Wa) F = Vc;
          else {
            F = Lc;
            var R = Oc;
          }
        else
          (g = c.nodeName) &&
            g.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (F = Mc);
        if (F && (F = F(e, p))) {
          Ha(v, F, n, f);
          break e;
        }
        R && R(e, c, p),
          e === "focusout" &&
            (R = c._wrapperState) &&
            R.controlled &&
            c.type === "number" &&
            no(c, "number", c.value);
      }
      switch (((R = p ? Bt(p) : window), e)) {
        case "focusin":
          (ru(R) || R.contentEditable === "true") &&
            ((Ht = R), (yo = p), (Pn = null));
          break;
        case "focusout":
          Pn = yo = Ht = null;
          break;
        case "mousedown":
          ho = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ho = !1), au(v, n, f);
          break;
        case "selectionchange":
          if (Hc) break;
        case "keydown":
        case "keyup":
          au(v, n, f);
      }
      var A;
      if (ii)
        e: {
          switch (e) {
            case "compositionstart":
              var h = "onCompositionStart";
              break e;
            case "compositionend":
              h = "onCompositionEnd";
              break e;
            case "compositionupdate":
              h = "onCompositionUpdate";
              break e;
          }
          h = void 0;
        }
      else
        qt
          ? Ua(e, n) && (h = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (h = "onCompositionStart");
      h &&
        (Va &&
          n.locale !== "ko" &&
          (qt || h !== "onCompositionStart"
            ? h === "onCompositionEnd" && qt && (A = Ma())
            : ((lt = f),
              (ri = "value" in lt ? lt.value : lt.textContent),
              (qt = !0))),
        (R = Wr(p, h)),
        0 < R.length &&
          ((h = new $i(h, e, null, n, f)),
          v.push({ event: h, listeners: R }),
          A ? (h.data = A) : ((A = qa(n)), A !== null && (h.data = A)))),
        (A = Pc ? zc(e, n) : Nc(e, n)) &&
          ((p = Wr(p, "onBeforeInput")),
          0 < p.length &&
            ((f = new $i("onBeforeInput", "beforeinput", null, n, f)),
            v.push({ event: f, listeners: p }),
            (f.data = A)));
    }
    ba(v, t);
  });
}
function Xn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Mn(e, n)),
      o != null && r.unshift(Xn(e, o, l)),
      (o = Mn(e, t)),
      o != null && r.push(Xn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      p = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      p !== null &&
      ((u = p),
      l
        ? ((a = Mn(n, o)), a != null && i.unshift(Xn(n, a, u)))
        : l || ((a = Mn(n, o)), a != null && i.push(Xn(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Qc = /\r\n?/g,
  Zc = /\u0000|\uFFFD/g;
function pu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qc,
      `
`
    )
    .replace(Zc, "");
}
function yr(e, t, n) {
  if (((t = pu(t)), pu(e) !== t && n)) throw Error(S(425));
}
function Br() {}
var vo = null,
  go = null;
function Ao(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var xo = typeof setTimeout == "function" ? setTimeout : void 0,
  Jc = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fu = typeof Promise == "function" ? Promise : void 0,
  Gc =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fu < "u"
      ? function (e) {
          return fu.resolve(null).then(e).catch(Yc);
        }
      : xo;
function Yc(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), qn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  qn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function mu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var pn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + pn,
  Qn = "__reactProps$" + pn,
  Ye = "__reactContainer$" + pn,
  So = "__reactEvents$" + pn,
  _c = "__reactListeners$" + pn,
  Kc = "__reactHandles$" + pn;
function Ft(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = mu(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = mu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function tr(e) {
  return (
    (e = e[qe] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function dl(e) {
  return e[Qn] || null;
}
var ko = [],
  Xt = -1;
function vt(e) {
  return { current: e };
}
function U(e) {
  0 > Xt || ((e.current = ko[Xt]), (ko[Xt] = null), Xt--);
}
function M(e, t) {
  Xt++, (ko[Xt] = e.current), (e.current = t);
}
var yt = {},
  ae = vt(yt),
  he = vt(!1),
  zt = yt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function Xr() {
  U(he), U(ae);
}
function yu(e, t, n) {
  if (ae.current !== yt) throw Error(S(168));
  M(ae, t), M(he, n);
}
function es(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Od(e) || "Unknown", l));
  return Q({}, n, r);
}
function Qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yt),
    (zt = ae.current),
    M(ae, e),
    M(he, he.current),
    !0
  );
}
function hu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = es(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(he),
      U(ae),
      M(ae, e))
    : U(he),
    M(he, n);
}
var Xe = null,
  cl = !1,
  Ul = !1;
function ts(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function bc(e) {
  (cl = !0), ts(e);
}
function gt() {
  if (!Ul && Xe !== null) {
    Ul = !0;
    var e = 0,
      t = O;
    try {
      var n = Xe;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (cl = !1);
    } catch (l) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), ja($o, gt), l);
    } finally {
      (O = t), (Ul = !1);
    }
  }
  return null;
}
var Qt = [],
  Zt = 0,
  Zr = null,
  Jr = 0,
  Fe = [],
  je = 0,
  Nt = null,
  Qe = 1,
  Ze = "";
function wt(e, t) {
  (Qt[Zt++] = Jr), (Qt[Zt++] = Zr), (Zr = e), (Jr = t);
}
function ns(e, t, n) {
  (Fe[je++] = Qe), (Fe[je++] = Ze), (Fe[je++] = Nt), (Nt = e);
  var r = Qe;
  e = Ze;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Qe = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Ze = o + e);
  } else (Qe = (1 << o) | (n << l) | r), (Ze = e);
}
function ai(e) {
  e.return !== null && (wt(e, 1), ns(e, 1, 0));
}
function si(e) {
  for (; e === Zr; )
    (Zr = Qt[--Zt]), (Qt[Zt] = null), (Jr = Qt[--Zt]), (Qt[Zt] = null);
  for (; e === Nt; )
    (Nt = Fe[--je]),
      (Fe[je] = null),
      (Ze = Fe[--je]),
      (Fe[je] = null),
      (Qe = Fe[--je]),
      (Fe[je] = null);
}
var Se = null,
  xe = null,
  H = !1,
  De = null;
function rs(e, t) {
  var n = Re(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function vu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (xe = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Nt !== null ? { id: Qe, overflow: Ze } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Re(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eo(e) {
  if (H) {
    var t = xe;
    if (t) {
      var n = t;
      if (!vu(e, t)) {
        if (wo(e)) throw Error(S(418));
        t = st(n.nextSibling);
        var r = Se;
        t && vu(e, t)
          ? rs(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Se = e));
      }
    } else {
      if (wo(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Se = e);
    }
  }
}
function gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function hr(e) {
  if (e !== Se) return !1;
  if (!H) return gu(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ao(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (wo(e)) throw (ls(), Error(S(418)));
    for (; t; ) rs(e, t), (t = st(t.nextSibling));
  }
  if ((gu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Se ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function ls() {
  for (var e = xe; e; ) e = st(e.nextSibling);
}
function ln() {
  (xe = Se = null), (H = !1);
}
function di(e) {
  De === null ? (De = [e]) : De.push(e);
}
var $c = be.ReactCurrentBatchConfig;
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Gr = vt(null),
  Yr = null,
  Jt = null,
  ci = null;
function pi() {
  ci = Jt = Yr = null;
}
function fi(e) {
  var t = Gr.current;
  U(Gr), (e._currentValue = t);
}
function Fo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function en(e, t) {
  (Yr = e),
    (ci = Jt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (ci !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jt === null)) {
      if (Yr === null) throw Error(S(308));
      (Jt = e), (Yr.dependencies = { lanes: 0, firstContext: e });
    } else Jt = Jt.next = e;
  return t;
}
var jt = null;
function mi(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function os(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), mi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    _e(e, r)
  );
}
function _e(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function yi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function is(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Je(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      _e(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), mi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    _e(e, n)
  );
}
function Cr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ei(e, n);
  }
}
function Au(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function _r(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      p = a.next;
    (a.next = null), i === null ? (o = p) : (i.next = p), (i = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== i &&
        (u === null ? (f.firstBaseUpdate = p) : (u.next = p),
        (f.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var v = l.baseState;
    (i = 0), (f = p = a = null), (u = o);
    do {
      var c = u.lane,
        g = u.eventTime;
      if ((r & c) === c) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            w = u;
          switch (((c = t), (g = n), w.tag)) {
            case 1:
              if (((k = w.payload), typeof k == "function")) {
                v = k.call(g, v, c);
                break e;
              }
              v = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = w.payload),
                (c = typeof k == "function" ? k.call(g, v, c) : k),
                c == null)
              )
                break e;
              v = Q({}, v, c);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (c = l.effects),
          c === null ? (l.effects = [u]) : c.push(u));
      } else
        (g = {
          eventTime: g,
          lane: c,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          f === null ? ((p = f = g), (a = v)) : (f = f.next = g),
          (i |= c);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (c = u),
          (u = c.next),
          (c.next = null),
          (l.lastBaseUpdate = c),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (a = v),
      (l.baseState = a),
      (l.firstBaseUpdate = p),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (It |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var us = new oa.Component().refs;
function jo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Lt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = pt(e),
      o = Je(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = dt(e, o, l)),
      t !== null && (Le(t, e, l, r), Cr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = pt(e),
      o = Je(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = dt(e, o, l)),
      t !== null && (Le(t, e, l, r), Cr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = pt(e),
      l = Je(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = dt(e, l, r)),
      t !== null && (Le(t, e, r, n), Cr(t, e, r));
  },
};
function Su(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Wn(n, r) || !Wn(l, o)
      : !0
  );
}
function as(e, t, n) {
  var r = !1,
    l = yt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Pe(o))
      : ((l = ve(t) ? zt : ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? rn(e, l) : yt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ku(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function Ro(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = us), yi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Pe(o))
    : ((o = ve(t) ? zt : ae.current), (l.context = rn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (jo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && pl.enqueueReplaceState(l, l.state, null),
      _r(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === us && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function wu(e) {
  var t = e._init;
  return t(e._payload);
}
function ss(e) {
  function t(m, d) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [d]), (m.flags |= 16)) : y.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function l(m, d) {
    return (m = ft(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, d, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < d ? ((m.flags |= 2), d) : y)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, d, y, x) {
    return d === null || d.tag !== 6
      ? ((d = Zl(y, m.mode, x)), (d.return = m), d)
      : ((d = l(d, y)), (d.return = m), d);
  }
  function a(m, d, y, x) {
    var F = y.type;
    return F === Ut
      ? f(m, d, y.props.children, x, y.key)
      : d !== null &&
        (d.elementType === F ||
          (typeof F == "object" &&
            F !== null &&
            F.$$typeof === et &&
            wu(F) === d.type))
      ? ((x = l(d, y.props)), (x.ref = gn(m, d, y)), (x.return = m), x)
      : ((x = Dr(y.type, y.key, y.props, null, m.mode, x)),
        (x.ref = gn(m, d, y)),
        (x.return = m),
        x);
  }
  function p(m, d, y, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== y.containerInfo ||
      d.stateNode.implementation !== y.implementation
      ? ((d = Jl(y, m.mode, x)), (d.return = m), d)
      : ((d = l(d, y.children || [])), (d.return = m), d);
  }
  function f(m, d, y, x, F) {
    return d === null || d.tag !== 7
      ? ((d = Pt(y, m.mode, x, F)), (d.return = m), d)
      : ((d = l(d, y)), (d.return = m), d);
  }
  function v(m, d, y) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Zl("" + d, m.mode, y)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ir:
          return (
            (y = Dr(d.type, d.key, d.props, null, m.mode, y)),
            (y.ref = gn(m, null, d)),
            (y.return = m),
            y
          );
        case Vt:
          return (d = Jl(d, m.mode, y)), (d.return = m), d;
        case et:
          var x = d._init;
          return v(m, x(d._payload), y);
      }
      if (kn(d) || fn(d))
        return (d = Pt(d, m.mode, y, null)), (d.return = m), d;
      vr(m, d);
    }
    return null;
  }
  function c(m, d, y, x) {
    var F = d !== null ? d.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return F !== null ? null : u(m, d, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ir:
          return y.key === F ? a(m, d, y, x) : null;
        case Vt:
          return y.key === F ? p(m, d, y, x) : null;
        case et:
          return (F = y._init), c(m, d, F(y._payload), x);
      }
      if (kn(y) || fn(y)) return F !== null ? null : f(m, d, y, x, null);
      vr(m, y);
    }
    return null;
  }
  function g(m, d, y, x, F) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(y) || null), u(d, m, "" + x, F);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ir:
          return (m = m.get(x.key === null ? y : x.key) || null), a(d, m, x, F);
        case Vt:
          return (m = m.get(x.key === null ? y : x.key) || null), p(d, m, x, F);
        case et:
          var R = x._init;
          return g(m, d, y, R(x._payload), F);
      }
      if (kn(x) || fn(x)) return (m = m.get(y) || null), f(d, m, x, F, null);
      vr(d, x);
    }
    return null;
  }
  function k(m, d, y, x) {
    for (
      var F = null, R = null, A = d, h = (d = 0), q = null;
      A !== null && h < y.length;
      h++
    ) {
      A.index > h ? ((q = A), (A = null)) : (q = A.sibling);
      var z = c(m, A, y[h], x);
      if (z === null) {
        A === null && (A = q);
        break;
      }
      e && A && z.alternate === null && t(m, A),
        (d = o(z, d, h)),
        R === null ? (F = z) : (R.sibling = z),
        (R = z),
        (A = q);
    }
    if (h === y.length) return n(m, A), H && wt(m, h), F;
    if (A === null) {
      for (; h < y.length; h++)
        (A = v(m, y[h], x)),
          A !== null &&
            ((d = o(A, d, h)), R === null ? (F = A) : (R.sibling = A), (R = A));
      return H && wt(m, h), F;
    }
    for (A = r(m, A); h < y.length; h++)
      (q = g(A, m, h, y[h], x)),
        q !== null &&
          (e && q.alternate !== null && A.delete(q.key === null ? h : q.key),
          (d = o(q, d, h)),
          R === null ? (F = q) : (R.sibling = q),
          (R = q));
    return (
      e &&
        A.forEach(function (fe) {
          return t(m, fe);
        }),
      H && wt(m, h),
      F
    );
  }
  function w(m, d, y, x) {
    var F = fn(y);
    if (typeof F != "function") throw Error(S(150));
    if (((y = F.call(y)), y == null)) throw Error(S(151));
    for (
      var R = (F = null), A = d, h = (d = 0), q = null, z = y.next();
      A !== null && !z.done;
      h++, z = y.next()
    ) {
      A.index > h ? ((q = A), (A = null)) : (q = A.sibling);
      var fe = c(m, A, z.value, x);
      if (fe === null) {
        A === null && (A = q);
        break;
      }
      e && A && fe.alternate === null && t(m, A),
        (d = o(fe, d, h)),
        R === null ? (F = fe) : (R.sibling = fe),
        (R = fe),
        (A = q);
    }
    if (z.done) return n(m, A), H && wt(m, h), F;
    if (A === null) {
      for (; !z.done; h++, z = y.next())
        (z = v(m, z.value, x)),
          z !== null &&
            ((d = o(z, d, h)), R === null ? (F = z) : (R.sibling = z), (R = z));
      return H && wt(m, h), F;
    }
    for (A = r(m, A); !z.done; h++, z = y.next())
      (z = g(A, m, h, z.value, x)),
        z !== null &&
          (e && z.alternate !== null && A.delete(z.key === null ? h : z.key),
          (d = o(z, d, h)),
          R === null ? (F = z) : (R.sibling = z),
          (R = z));
    return (
      e &&
        A.forEach(function (At) {
          return t(m, At);
        }),
      H && wt(m, h),
      F
    );
  }
  function L(m, d, y, x) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Ut &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case ir:
          e: {
            for (var F = y.key, R = d; R !== null; ) {
              if (R.key === F) {
                if (((F = y.type), F === Ut)) {
                  if (R.tag === 7) {
                    n(m, R.sibling),
                      (d = l(R, y.props.children)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                } else if (
                  R.elementType === F ||
                  (typeof F == "object" &&
                    F !== null &&
                    F.$$typeof === et &&
                    wu(F) === R.type)
                ) {
                  n(m, R.sibling),
                    (d = l(R, y.props)),
                    (d.ref = gn(m, R, y)),
                    (d.return = m),
                    (m = d);
                  break e;
                }
                n(m, R);
                break;
              } else t(m, R);
              R = R.sibling;
            }
            y.type === Ut
              ? ((d = Pt(y.props.children, m.mode, x, y.key)),
                (d.return = m),
                (m = d))
              : ((x = Dr(y.type, y.key, y.props, null, m.mode, x)),
                (x.ref = gn(m, d, y)),
                (x.return = m),
                (m = x));
          }
          return i(m);
        case Vt:
          e: {
            for (R = y.key; d !== null; ) {
              if (d.key === R)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === y.containerInfo &&
                  d.stateNode.implementation === y.implementation
                ) {
                  n(m, d.sibling),
                    (d = l(d, y.children || [])),
                    (d.return = m),
                    (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            (d = Jl(y, m.mode, x)), (d.return = m), (m = d);
          }
          return i(m);
        case et:
          return (R = y._init), L(m, d, R(y._payload), x);
      }
      if (kn(y)) return k(m, d, y, x);
      if (fn(y)) return w(m, d, y, x);
      vr(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = l(d, y)), (d.return = m), (m = d))
          : (n(m, d), (d = Zl(y, m.mode, x)), (d.return = m), (m = d)),
        i(m))
      : n(m, d);
  }
  return L;
}
var on = ss(!0),
  ds = ss(!1),
  nr = {},
  We = vt(nr),
  Zn = vt(nr),
  Jn = vt(nr);
function Rt(e) {
  if (e === nr) throw Error(S(174));
  return e;
}
function hi(e, t) {
  switch ((M(Jn, t), M(Zn, e), M(We, nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = lo(t, e));
  }
  U(We), M(We, t);
}
function un() {
  U(We), U(Zn), U(Jn);
}
function cs(e) {
  Rt(Jn.current);
  var t = Rt(We.current),
    n = lo(t, e.type);
  t !== n && (M(Zn, e), M(We, n));
}
function vi(e) {
  Zn.current === e && (U(We), U(Zn));
}
var B = vt(0);
function Kr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ql = [];
function gi() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Pr = be.ReactCurrentDispatcher,
  Hl = be.ReactCurrentBatchConfig,
  Tt = 0,
  X = null,
  _ = null,
  b = null,
  br = !1,
  zn = !1,
  Gn = 0,
  ep = 0;
function oe() {
  throw Error(S(321));
}
function Ai(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function xi(e, t, n, r, l, o) {
  if (
    ((Tt = o),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Pr.current = e === null || e.memoizedState === null ? lp : op),
    (e = n(r, l)),
    zn)
  ) {
    o = 0;
    do {
      if (((zn = !1), (Gn = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (b = _ = null),
        (t.updateQueue = null),
        (Pr.current = ip),
        (e = n(r, l));
    } while (zn);
  }
  if (
    ((Pr.current = $r),
    (t = _ !== null && _.next !== null),
    (Tt = 0),
    (b = _ = X = null),
    (br = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Si() {
  var e = Gn !== 0;
  return (Gn = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (X.memoizedState = b = e) : (b = b.next = e), b;
}
function ze() {
  if (_ === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _.next;
  var t = b === null ? X.memoizedState : b.next;
  if (t !== null) (b = t), (_ = e);
  else {
    if (e === null) throw Error(S(310));
    (_ = e),
      (e = {
        memoizedState: _.memoizedState,
        baseState: _.baseState,
        baseQueue: _.baseQueue,
        queue: _.queue,
        next: null,
      }),
      b === null ? (X.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wl(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = _,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      p = o;
    do {
      var f = p.lane;
      if ((Tt & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
          (r = p.hasEagerState ? p.eagerState : e(r, p.action));
      else {
        var v = {
          lane: f,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null,
        };
        a === null ? ((u = a = v), (i = r)) : (a = a.next = v),
          (X.lanes |= f),
          (It |= f);
      }
      p = p.next;
    } while (p !== null && p !== o);
    a === null ? (i = r) : (a.next = u),
      Me(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (X.lanes |= o), (It |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bl(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Me(o, t.memoizedState) || (ye = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ps() {}
function fs(e, t) {
  var n = X,
    r = ze(),
    l = t(),
    o = !Me(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ye = !0)),
    (r = r.queue),
    ki(hs.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      _n(9, ys.bind(null, n, r, l, t), void 0, null),
      $ === null)
    )
      throw Error(S(349));
    Tt & 30 || ms(n, t, l);
  }
  return l;
}
function ms(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ys(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vs(t) && gs(e);
}
function hs(e, t, n) {
  return n(function () {
    vs(t) && gs(e);
  });
}
function vs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function gs(e) {
  var t = _e(e, 1);
  t !== null && Le(t, e, 1, -1);
}
function Eu(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rp.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function _n(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function As() {
  return ze().memoizedState;
}
function zr(e, t, n, r) {
  var l = Ue();
  (X.flags |= e),
    (l.memoizedState = _n(1 | t, n, void 0, r === void 0 ? null : r));
}
function fl(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (_ !== null) {
    var i = _.memoizedState;
    if (((o = i.destroy), r !== null && Ai(r, i.deps))) {
      l.memoizedState = _n(t, n, o, r);
      return;
    }
  }
  (X.flags |= e), (l.memoizedState = _n(1 | t, n, o, r));
}
function Fu(e, t) {
  return zr(8390656, 8, e, t);
}
function ki(e, t) {
  return fl(2048, 8, e, t);
}
function xs(e, t) {
  return fl(4, 2, e, t);
}
function Ss(e, t) {
  return fl(4, 4, e, t);
}
function ks(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ws(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fl(4, 4, ks.bind(null, t, e), n)
  );
}
function wi() {}
function Es(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ai(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Fs(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ai(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function js(e, t, n) {
  return Tt & 21
    ? (Me(n, t) || ((n = Pa()), (X.lanes |= n), (It |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function tp(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Hl.transition = r);
  }
}
function Rs() {
  return ze().memoizedState;
}
function np(e, t, n) {
  var r = pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cs(e))
  )
    Ps(t, n);
  else if (((n = os(e, t, n, r)), n !== null)) {
    var l = de();
    Le(n, e, r, l), zs(n, t, r);
  }
}
function rp(e, t, n) {
  var r = pt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cs(e)) Ps(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), mi(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = os(e, t, l, r)),
      n !== null && ((l = de()), Le(n, e, r, l), zs(n, t, r));
  }
}
function Cs(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Ps(e, t) {
  zn = br = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zs(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ei(e, n);
  }
}
var $r = {
    readContext: Pe,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: Fu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zr(4194308, 4, ks.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = np.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Eu,
    useDebugValue: wi,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = Eu(!1),
        t = e[0];
      return (e = tp.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        l = Ue();
      if (H) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), $ === null)) throw Error(S(349));
        Tt & 30 || ms(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Fu(hs.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        _n(9, ys.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = $.identifierPrefix;
      if (H) {
        var n = Ze,
          r = Qe;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ep++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  op = {
    readContext: Pe,
    useCallback: Es,
    useContext: Pe,
    useEffect: ki,
    useImperativeHandle: ws,
    useInsertionEffect: xs,
    useLayoutEffect: Ss,
    useMemo: Fs,
    useReducer: Wl,
    useRef: As,
    useState: function () {
      return Wl(Yn);
    },
    useDebugValue: wi,
    useDeferredValue: function (e) {
      var t = ze();
      return js(t, _.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Yn)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: ps,
    useSyncExternalStore: fs,
    useId: Rs,
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: Pe,
    useCallback: Es,
    useContext: Pe,
    useEffect: ki,
    useImperativeHandle: ws,
    useInsertionEffect: xs,
    useLayoutEffect: Ss,
    useMemo: Fs,
    useReducer: Bl,
    useRef: As,
    useState: function () {
      return Bl(Yn);
    },
    useDebugValue: wi,
    useDeferredValue: function (e) {
      var t = ze();
      return _ === null ? (t.memoizedState = e) : js(t, _.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Yn)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: ps,
    useSyncExternalStore: fs,
    useId: Rs,
    unstable_isNewReconciler: !1,
  };
function an(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Dd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Co(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var up = typeof WeakMap == "function" ? WeakMap : Map;
function Ns(e, t, n) {
  (n = Je(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      tl || ((tl = !0), (Vo = r)), Co(e, t);
    }),
    n
  );
}
function Ts(e, t, n) {
  (n = Je(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Co(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Co(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new up();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Sp.bind(null, e, t, n)), t.then(e, e));
}
function Ru(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Je(-1, 1)), (t.tag = 2), dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ap = be.ReactCurrentOwner,
  ye = !1;
function se(e, t, n, r) {
  t.child = e === null ? ds(t, null, n, r) : on(t, e.child, n, r);
}
function Pu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    en(t, l),
    (r = xi(e, t, n, r, o, l)),
    (n = Si()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (H && n && ai(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function zu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ni(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Is(e, t, o, r, l))
      : ((e = Dr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wn), n(i, r) && e.ref === t.ref)
    )
      return Ke(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ft(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Is(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wn(o, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), Ke(e, t, l);
  }
  return Po(e, t, n, r, l);
}
function Ds(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Yt, Ae),
        (Ae |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          M(Yt, Ae),
          (Ae |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        M(Yt, Ae),
        (Ae |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(Yt, Ae),
      (Ae |= r);
  return se(e, t, l, n), t.child;
}
function Os(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Po(e, t, n, r, l) {
  var o = ve(n) ? zt : ae.current;
  return (
    (o = rn(t, o)),
    en(t, l),
    (n = xi(e, t, n, r, o, l)),
    (r = Si()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (H && r && ai(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function Nu(e, t, n, r, l) {
  if (ve(n)) {
    var o = !0;
    Qr(t);
  } else o = !1;
  if ((en(t, l), t.stateNode === null))
    Nr(e, t), as(t, n, r), Ro(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      p = n.contextType;
    typeof p == "object" && p !== null
      ? (p = Pe(p))
      : ((p = ve(n) ? zt : ae.current), (p = rn(t, p)));
    var f = n.getDerivedStateFromProps,
      v =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== p) && ku(t, i, r, p)),
      (tt = !1);
    var c = t.memoizedState;
    (i.state = c),
      _r(t, r, i, l),
      (a = t.memoizedState),
      u !== r || c !== a || he.current || tt
        ? (typeof f == "function" && (jo(t, n, f, r), (a = t.memoizedState)),
          (u = tt || Su(t, n, u, r, c, a, p))
            ? (v ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = p),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      is(e, t),
      (u = t.memoizedProps),
      (p = t.type === t.elementType ? u : Te(t.type, u)),
      (i.props = p),
      (v = t.pendingProps),
      (c = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Pe(a))
        : ((a = ve(n) ? zt : ae.current), (a = rn(t, a)));
    var g = n.getDerivedStateFromProps;
    (f =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== v || c !== a) && ku(t, i, r, a)),
      (tt = !1),
      (c = t.memoizedState),
      (i.state = c),
      _r(t, r, i, l);
    var k = t.memoizedState;
    u !== v || c !== k || he.current || tt
      ? (typeof g == "function" && (jo(t, n, g, r), (k = t.memoizedState)),
        (p = tt || Su(t, n, p, r, c, k, a) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, k, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, k, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = a),
        (r = p))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zo(e, t, n, r, o, l);
}
function zo(e, t, n, r, l, o) {
  Os(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && hu(t, n, !1), Ke(e, t, o);
  (r = t.stateNode), (ap.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = on(t, e.child, null, o)), (t.child = on(t, null, u, o)))
      : se(e, t, u, o),
    (t.memoizedState = r.state),
    l && hu(t, n, !0),
    t.child
  );
}
function Ls(e) {
  var t = e.stateNode;
  t.pendingContext
    ? yu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yu(e, t.context, !1),
    hi(e, t.containerInfo);
}
function Tu(e, t, n, r, l) {
  return ln(), di(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var No = { dehydrated: null, treeContext: null, retryLane: 0 };
function To(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ms(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M(B, l & 1),
    e === null)
  )
    return (
      Eo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = hl(i, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = To(n)),
              (t.memoizedState = No),
              e)
            : Ei(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return sp(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = ft(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ft(u, o)) : ((o = Pt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? To(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = No),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ft(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ei(e, t) {
  return (
    (t = hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gr(e, t, n, r) {
  return (
    r !== null && di(r),
    on(t, e.child, null, n),
    (e = Ei(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xl(Error(S(422)))), gr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = hl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Pt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && on(t, e.child, null, i),
        (t.child.memoizedState = To(i)),
        (t.memoizedState = No),
        o);
  if (!(t.mode & 1)) return gr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(S(419))), (r = Xl(o, r, void 0)), gr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ye || u)) {
    if (((r = $), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), _e(e, l), Le(r, e, l, -1));
    }
    return zi(), (r = Xl(Error(S(421)))), gr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = kp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (xe = st(l.nextSibling)),
      (Se = t),
      (H = !0),
      (De = null),
      e !== null &&
        ((Fe[je++] = Qe),
        (Fe[je++] = Ze),
        (Fe[je++] = Nt),
        (Qe = e.id),
        (Ze = e.overflow),
        (Nt = t)),
      (t = Ei(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Iu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fo(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Vs(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Iu(e, n, t);
        else if (e.tag === 19) Iu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Kr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ql(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ql(t, !0, n, null, o);
        break;
      case "together":
        Ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Nr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ke(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (It |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function dp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ls(t), ln();
      break;
    case 5:
      cs(t);
      break;
    case 1:
      ve(t.type) && Qr(t);
      break;
    case 4:
      hi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      M(Gr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ms(e, t, n)
          : (M(B, B.current & 1),
            (e = Ke(e, t, n)),
            e !== null ? e.sibling : null);
      M(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Vs(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ds(e, t, n);
  }
  return Ke(e, t, n);
}
var Us, Io, qs, Hs;
Us = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Io = function () {};
qs = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Rt(We.current);
    var o = null;
    switch (n) {
      case "input":
        (l = eo(e, l)), (r = eo(e, r)), (o = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ro(e, l)), (r = ro(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Br);
    }
    oo(n, r);
    var i;
    n = null;
    for (p in l)
      if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
        if (p === "style") {
          var u = l[p];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          p !== "dangerouslySetInnerHTML" &&
            p !== "children" &&
            p !== "suppressContentEditableWarning" &&
            p !== "suppressHydrationWarning" &&
            p !== "autoFocus" &&
            (On.hasOwnProperty(p)
              ? o || (o = [])
              : (o = o || []).push(p, null));
    for (p in r) {
      var a = r[p];
      if (
        ((u = l != null ? l[p] : void 0),
        r.hasOwnProperty(p) && a !== u && (a != null || u != null))
      )
        if (p === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(p, n)), (n = a);
        else
          p === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(p, a))
            : p === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(p, "" + a)
            : p !== "suppressContentEditableWarning" &&
              p !== "suppressHydrationWarning" &&
              (On.hasOwnProperty(p)
                ? (a != null && p === "onScroll" && V("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(p, a));
    }
    n && (o = o || []).push("style", n);
    var p = o;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
Hs = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function An(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function cp(e, t, n) {
  var r = t.pendingProps;
  switch ((si(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ie(t), null;
    case 1:
      return ve(t.type) && Xr(), ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        un(),
        U(he),
        U(ae),
        gi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Ho(De), (De = null)))),
        Io(e, t),
        ie(t),
        null
      );
    case 5:
      vi(t);
      var l = Rt(Jn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qs(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ie(t), null;
        }
        if (((e = Rt(We.current)), hr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[qe] = t), (r[Qn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < En.length; l++) V(En[l], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Wi(r, o), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              Xi(r, o), V("invalid", r);
          }
          oo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : On.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              ur(r), Bi(r, o, !0);
              break;
            case "textarea":
              ur(r), Qi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ma(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[qe] = t),
            (e[Qn] = r),
            Us(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = io(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < En.length; l++) V(En[l], e);
                l = r;
                break;
              case "source":
                V("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (l = r);
                break;
              case "details":
                V("toggle", e), (l = r);
                break;
              case "input":
                Wi(e, r), (l = eo(e, r)), V("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                Xi(e, r), (l = ro(e, r)), V("invalid", e);
                break;
              default:
                l = r;
            }
            oo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? va(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ya(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Ln(e, a)
                    : typeof a == "number" && Ln(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (On.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && V("scroll", e)
                      : a != null && Go(e, o, a, i));
              }
            switch (n) {
              case "input":
                ur(e), Bi(e, r, !1);
                break;
              case "textarea":
                ur(e), Qi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? _t(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      _t(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Br);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) Hs(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Rt(Jn.current)), Rt(We.current), hr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (o = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return ie(t), null;
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && xe !== null && t.mode & 1 && !(t.flags & 128))
          ls(), ln(), (t.flags |= 98560), (o = !1);
        else if (((o = hr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[qe] = t;
          } else
            ln(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ie(t), (o = !1);
        } else De !== null && (Ho(De), (De = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? K === 0 && (K = 3) : zi())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return (
        un(), Io(e, t), e === null && Bn(t.stateNode.containerInfo), ie(t), null
      );
    case 10:
      return fi(t.type._context), ie(t), null;
    case 17:
      return ve(t.type) && Xr(), ie(t), null;
    case 19:
      if ((U(B), (o = t.memoizedState), o === null)) return ie(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) An(o, !1);
        else {
          if (K !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Kr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    An(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            G() > sn &&
            ((t.flags |= 128), (r = !0), An(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              An(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !H)
            )
              return ie(t), null;
          } else
            2 * G() - o.renderingStartTime > sn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), An(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = G()),
          (t.sibling = null),
          (n = B.current),
          M(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        Pi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function pp(e, t) {
  switch ((si(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && Xr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        un(),
        U(he),
        U(ae),
        gi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vi(t), null;
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        ln();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(B), null;
    case 4:
      return un(), null;
    case 10:
      return fi(t.type._context), null;
    case 22:
    case 23:
      return Pi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ar = !1,
  ue = !1,
  fp = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Do(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Du = !1;
function mp(e, t) {
  if (((vo = qr), (e = Qa()), ui(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            p = 0,
            f = 0,
            v = e,
            c = null;
          t: for (;;) {
            for (
              var g;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (a = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (g = v.firstChild) !== null;

            )
              (c = v), (v = g);
            for (;;) {
              if (v === e) break t;
              if (
                (c === n && ++p === l && (u = i),
                c === o && ++f === r && (a = i),
                (g = v.nextSibling) !== null)
              )
                break;
              (v = c), (c = v.parentNode);
            }
            v = g;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (go = { focusedElem: e, selectionRange: n }, qr = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var w = k.memoizedProps,
                    L = k.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Te(t.type, w),
                      L
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (x) {
          Z(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (k = Du), (Du = !1), k;
}
function Nn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Do(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ws(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ws(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[Qn], delete t[So], delete t[_c], delete t[Kc])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Bs(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ou(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bs(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lo(e, t, n), e = e.sibling; e !== null; ) Lo(e, t, n), (e = e.sibling);
}
function Mo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mo(e, t, n), e = e.sibling; e !== null; ) Mo(e, t, n), (e = e.sibling);
}
var te = null,
  Ie = !1;
function $e(e, t, n) {
  for (n = n.child; n !== null; ) Xs(e, t, n), (n = n.sibling);
}
function Xs(e, t, n) {
  if (He && typeof He.onCommitFiberUnmount == "function")
    try {
      He.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || Gt(n, t);
    case 6:
      var r = te,
        l = Ie;
      (te = null),
        $e(e, t, n),
        (te = r),
        (Ie = l),
        te !== null &&
          (Ie
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Ie
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Vl(e.parentNode, n)
              : e.nodeType === 1 && Vl(e, n),
            qn(e))
          : Vl(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (l = Ie),
        (te = n.stateNode.containerInfo),
        (Ie = !0),
        $e(e, t, n),
        (te = r),
        (Ie = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Do(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      $e(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (Gt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Z(n, t, u);
        }
      $e(e, t, n);
      break;
    case 21:
      $e(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), $e(e, t, n), (ue = r))
        : $e(e, t, n);
      break;
    default:
      $e(e, t, n);
  }
}
function Lu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fp()),
      t.forEach(function (r) {
        var l = wp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ne(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (te = u.stateNode), (Ie = !1);
              break e;
            case 3:
              (te = u.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (te = u.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          u = u.return;
        }
        if (te === null) throw Error(S(160));
        Xs(o, i, l), (te = null), (Ie = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (p) {
        Z(l, t, p);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qs(t, e), (t = t.sibling);
}
function Qs(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ne(t, e), Ve(e), r & 4)) {
        try {
          Nn(3, e, e.return), ml(3, e);
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          Nn(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      Ne(t, e), Ve(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (
        (Ne(t, e),
        Ve(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ln(l, "");
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && pa(l, o),
              io(u, i);
            var p = io(u, o);
            for (i = 0; i < a.length; i += 2) {
              var f = a[i],
                v = a[i + 1];
              f === "style"
                ? va(l, v)
                : f === "dangerouslySetInnerHTML"
                ? ya(l, v)
                : f === "children"
                ? Ln(l, v)
                : Go(l, f, v, p);
            }
            switch (u) {
              case "input":
                to(l, o);
                break;
              case "textarea":
                fa(l, o);
                break;
              case "select":
                var c = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? _t(l, !!o.multiple, g, !1)
                  : c !== !!o.multiple &&
                    (o.defaultValue != null
                      ? _t(l, !!o.multiple, o.defaultValue, !0)
                      : _t(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Qn] = o;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ne(t, e), Ve(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ne(t, e), Ve(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qn(t.containerInfo);
        } catch (w) {
          Z(e, e.return, w);
        }
      break;
    case 4:
      Ne(t, e), Ve(e);
      break;
    case 13:
      Ne(t, e),
        Ve(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ri = G())),
        r & 4 && Lu(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (p = ue) || f), Ne(t, e), (ue = p)) : Ne(t, e),
        Ve(e),
        r & 8192)
      ) {
        if (
          ((p = e.memoizedState !== null),
          (e.stateNode.isHidden = p) && !f && e.mode & 1)
        )
          for (j = e, f = e.child; f !== null; ) {
            for (v = j = f; j !== null; ) {
              switch (((c = j), (g = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nn(4, c, c.return);
                  break;
                case 1:
                  Gt(c, c.return);
                  var k = c.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (w) {
                      Z(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Gt(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Vu(v);
                    continue;
                  }
              }
              g !== null ? ((g.return = c), (j = g)) : Vu(v);
            }
            f = f.sibling;
          }
        e: for (f = null, v = e; ; ) {
          if (v.tag === 5) {
            if (f === null) {
              f = v;
              try {
                (l = v.stateNode),
                  p
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = v.stateNode),
                      (a = v.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = ha("display", i)));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (v.tag === 6) {
            if (f === null)
              try {
                v.stateNode.nodeValue = p ? "" : v.memoizedProps;
              } catch (w) {
                Z(e, e.return, w);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            f === v && (f = null), (v = v.return);
          }
          f === v && (f = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Ne(t, e), Ve(e), r & 4 && Lu(e);
      break;
    case 21:
      break;
    default:
      Ne(t, e), Ve(e);
  }
}
function Ve(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bs(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ln(l, ""), (r.flags &= -33));
          var o = Ou(e);
          Mo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ou(e);
          Lo(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yp(e, t, n) {
  (j = e), Zs(e);
}
function Zs(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Ar;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || ue;
        u = Ar;
        var p = ue;
        if (((Ar = i), (ue = a) && !p))
          for (j = l; j !== null; )
            (i = j),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Uu(l)
                : a !== null
                ? ((a.return = i), (j = a))
                : Uu(l);
        for (; o !== null; ) (j = o), Zs(o), (o = o.sibling);
        (j = l), (Ar = u), (ue = p);
      }
      Mu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (j = o)) : Mu(e);
  }
}
function Mu(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && xu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var p = t.alternate;
                if (p !== null) {
                  var f = p.memoizedState;
                  if (f !== null) {
                    var v = f.dehydrated;
                    v !== null && qn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        ue || (t.flags & 512 && Oo(t));
      } catch (c) {
        Z(t, t.return, c);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Vu(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Uu(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, l, a);
            }
          }
          var o = t.return;
          try {
            Oo(t);
          } catch (a) {
            Z(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Oo(t);
          } catch (a) {
            Z(t, i, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (j = u);
      break;
    }
    j = t.return;
  }
}
var hp = Math.ceil,
  el = be.ReactCurrentDispatcher,
  Fi = be.ReactCurrentOwner,
  Ce = be.ReactCurrentBatchConfig,
  I = 0,
  $ = null,
  Y = null,
  ne = 0,
  Ae = 0,
  Yt = vt(0),
  K = 0,
  Kn = null,
  It = 0,
  yl = 0,
  ji = 0,
  Tn = null,
  me = null,
  Ri = 0,
  sn = 1 / 0,
  Be = null,
  tl = !1,
  Vo = null,
  ct = null,
  xr = !1,
  ot = null,
  nl = 0,
  In = 0,
  Uo = null,
  Tr = -1,
  Ir = 0;
function de() {
  return I & 6 ? G() : Tr !== -1 ? Tr : (Tr = G());
}
function pt(e) {
  return e.mode & 1
    ? I & 2 && ne !== 0
      ? ne & -ne
      : $c.transition !== null
      ? (Ir === 0 && (Ir = Pa()), Ir)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : La(e.type))),
        e)
    : 1;
}
function Le(e, t, n, r) {
  if (50 < In) throw ((In = 0), (Uo = null), Error(S(185)));
  $n(e, n, r),
    (!(I & 2) || e !== $) &&
      (e === $ && (!(I & 2) && (yl |= n), K === 4 && rt(e, ne)),
      ge(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((sn = G() + 500), cl && gt()));
}
function ge(e, t) {
  var n = e.callbackNode;
  $d(e, t);
  var r = Ur(e, e === $ ? ne : 0);
  if (r === 0)
    n !== null && Gi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Gi(n), t === 1))
      e.tag === 0 ? bc(qu.bind(null, e)) : ts(qu.bind(null, e)),
        Gc(function () {
          !(I & 6) && gt();
        }),
        (n = null);
    else {
      switch (za(r)) {
        case 1:
          n = $o;
          break;
        case 4:
          n = Ra;
          break;
        case 16:
          n = Vr;
          break;
        case 536870912:
          n = Ca;
          break;
        default:
          n = Vr;
      }
      n = ed(n, Js.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Js(e, t) {
  if (((Tr = -1), (Ir = 0), I & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var r = Ur(e, e === $ ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = Ys();
    ($ !== e || ne !== t) && ((Be = null), (sn = G() + 500), Ct(e, t));
    do
      try {
        Ap();
        break;
      } catch (u) {
        Gs(e, u);
      }
    while (1);
    pi(),
      (el.current = o),
      (I = l),
      Y !== null ? (t = 0) : (($ = null), (ne = 0), (t = K));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = po(e)), l !== 0 && ((r = l), (t = qo(e, l)))), t === 1)
    )
      throw ((n = Kn), Ct(e, 0), rt(e, r), ge(e, G()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !vp(l) &&
          ((t = rl(e, r)),
          t === 2 && ((o = po(e)), o !== 0 && ((r = o), (t = qo(e, o)))),
          t === 1))
      )
        throw ((n = Kn), Ct(e, 0), rt(e, r), ge(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Et(e, me, Be);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = Ri + 500 - G()), 10 < t))
          ) {
            if (Ur(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = xo(Et.bind(null, e, me, Be), t);
            break;
          }
          Et(e, me, Be);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * hp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xo(Et.bind(null, e, me, Be), r);
            break;
          }
          Et(e, me, Be);
          break;
        case 5:
          Et(e, me, Be);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ge(e, G()), e.callbackNode === n ? Js.bind(null, e) : null;
}
function qo(e, t) {
  var n = Tn;
  return (
    e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && Ho(t)),
    e
  );
}
function Ho(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function vp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rt(e, t) {
  for (
    t &= ~ji,
      t &= ~yl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function qu(e) {
  if (I & 6) throw Error(S(327));
  tn();
  var t = Ur(e, 0);
  if (!(t & 1)) return ge(e, G()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = po(e);
    r !== 0 && ((t = r), (n = qo(e, r)));
  }
  if (n === 1) throw ((n = Kn), Ct(e, 0), rt(e, t), ge(e, G()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, me, Be),
    ge(e, G()),
    null
  );
}
function Ci(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((sn = G() + 500), cl && gt());
  }
}
function Dt(e) {
  ot !== null && ot.tag === 0 && !(I & 6) && tn();
  var t = I;
  I |= 1;
  var n = Ce.transition,
    r = O;
  try {
    if (((Ce.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Ce.transition = n), (I = t), !(I & 6) && gt();
  }
}
function Pi() {
  (Ae = Yt.current), U(Yt);
}
function Ct(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jc(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((si(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xr();
          break;
        case 3:
          un(), U(he), U(ae), gi();
          break;
        case 5:
          vi(r);
          break;
        case 4:
          un();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          fi(r.type._context);
          break;
        case 22:
        case 23:
          Pi();
      }
      n = n.return;
    }
  if (
    (($ = e),
    (Y = e = ft(e.current, null)),
    (ne = Ae = t),
    (K = 0),
    (Kn = null),
    (ji = yl = It = 0),
    (me = Tn = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    jt = null;
  }
  return e;
}
function Gs(e, t) {
  do {
    var n = Y;
    try {
      if ((pi(), (Pr.current = $r), br)) {
        for (var r = X.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        br = !1;
      }
      if (
        ((Tt = 0),
        (b = _ = X = null),
        (zn = !1),
        (Gn = 0),
        (Fi.current = null),
        n === null || n.return === null)
      ) {
        (K = 1), (Kn = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = ne),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var p = a,
            f = u,
            v = f.tag;
          if (!(f.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var c = f.alternate;
            c
              ? ((f.updateQueue = c.updateQueue),
                (f.memoizedState = c.memoizedState),
                (f.lanes = c.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var g = Ru(i);
          if (g !== null) {
            (g.flags &= -257),
              Cu(g, i, u, o, t),
              g.mode & 1 && ju(o, p, t),
              (t = g),
              (a = p);
            var k = t.updateQueue;
            if (k === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ju(o, p, t), zi();
              break e;
            }
            a = Error(S(426));
          }
        } else if (H && u.mode & 1) {
          var L = Ru(i);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              Cu(L, i, u, o, t),
              di(an(a, u));
            break e;
          }
        }
        (o = a = an(a, u)),
          K !== 4 && (K = 2),
          Tn === null ? (Tn = [o]) : Tn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Ns(o, a, t);
              Au(o, m);
              break e;
            case 1:
              u = a;
              var d = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (ct === null || !ct.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Ts(o, u, t);
                Au(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ks(n);
    } catch (F) {
      (t = F), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ys() {
  var e = el.current;
  return (el.current = $r), e === null ? $r : e;
}
function zi() {
  (K === 0 || K === 3 || K === 2) && (K = 4),
    $ === null || (!(It & 268435455) && !(yl & 268435455)) || rt($, ne);
}
function rl(e, t) {
  var n = I;
  I |= 2;
  var r = Ys();
  ($ !== e || ne !== t) && ((Be = null), Ct(e, t));
  do
    try {
      gp();
      break;
    } catch (l) {
      Gs(e, l);
    }
  while (1);
  if ((pi(), (I = n), (el.current = r), Y !== null)) throw Error(S(261));
  return ($ = null), (ne = 0), K;
}
function gp() {
  for (; Y !== null; ) _s(Y);
}
function Ap() {
  for (; Y !== null && !Xd(); ) _s(Y);
}
function _s(e) {
  var t = $s(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ks(e) : (Y = t),
    (Fi.current = null);
}
function Ks(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pp(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (K = 6), (Y = null);
        return;
      }
    } else if (((n = cp(n, t, Ae)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  K === 0 && (K = 5);
}
function Et(e, t, n) {
  var r = O,
    l = Ce.transition;
  try {
    (Ce.transition = null), (O = 1), xp(e, t, n, r);
  } finally {
    (Ce.transition = l), (O = r);
  }
  return null;
}
function xp(e, t, n, r) {
  do tn();
  while (ot !== null);
  if (I & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (ec(e, o),
    e === $ && ((Y = $ = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xr ||
      ((xr = !0),
      ed(Vr, function () {
        return tn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ce.transition), (Ce.transition = null);
    var i = O;
    O = 1;
    var u = I;
    (I |= 4),
      (Fi.current = null),
      mp(e, n),
      Qs(n, e),
      qc(go),
      (qr = !!vo),
      (go = vo = null),
      (e.current = n),
      yp(n),
      Qd(),
      (I = u),
      (O = i),
      (Ce.transition = o);
  } else e.current = n;
  if (
    (xr && ((xr = !1), (ot = e), (nl = l)),
    (o = e.pendingLanes),
    o === 0 && (ct = null),
    Gd(n.stateNode),
    ge(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw ((tl = !1), (e = Vo), (Vo = null), e);
  return (
    nl & 1 && e.tag !== 0 && tn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Uo ? In++ : ((In = 0), (Uo = e))) : (In = 0),
    gt(),
    null
  );
}
function tn() {
  if (ot !== null) {
    var e = za(nl),
      t = Ce.transition,
      n = O;
    try {
      if (((Ce.transition = null), (O = 16 > e ? 16 : e), ot === null))
        var r = !1;
      else {
        if (((e = ot), (ot = null), (nl = 0), I & 6)) throw Error(S(331));
        var l = I;
        for (I |= 4, j = e.current; j !== null; ) {
          var o = j,
            i = o.child;
          if (j.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var p = u[a];
                for (j = p; j !== null; ) {
                  var f = j;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nn(8, f, o);
                  }
                  var v = f.child;
                  if (v !== null) (v.return = f), (j = v);
                  else
                    for (; j !== null; ) {
                      f = j;
                      var c = f.sibling,
                        g = f.return;
                      if ((Ws(f), f === p)) {
                        j = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = g), (j = c);
                        break;
                      }
                      j = g;
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var L = w.sibling;
                    (w.sibling = null), (w = L);
                  } while (w !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (j = i);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nn(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (j = m);
                break e;
              }
              j = o.return;
            }
        }
        var d = e.current;
        for (j = d; j !== null; ) {
          i = j;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (j = y);
          else
            e: for (i = d; j !== null; ) {
              if (((u = j), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, u);
                  }
                } catch (F) {
                  Z(u, u.return, F);
                }
              if (u === i) {
                j = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                (x.return = u.return), (j = x);
                break e;
              }
              j = u.return;
            }
        }
        if (
          ((I = l), gt(), He && typeof He.onPostCommitFiberRoot == "function")
        )
          try {
            He.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (Ce.transition = t);
    }
  }
  return !1;
}
function Hu(e, t, n) {
  (t = an(n, t)),
    (t = Ns(e, t, 1)),
    (e = dt(e, t, 1)),
    (t = de()),
    e !== null && ($n(e, 1, t), ge(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Hu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = an(n, e)),
            (e = Ts(t, e, 1)),
            (t = dt(t, e, 1)),
            (e = de()),
            t !== null && ($n(t, 1, e), ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    $ === e &&
      (ne & n) === n &&
      (K === 4 || (K === 3 && (ne & 130023424) === ne && 500 > G() - Ri)
        ? Ct(e, 0)
        : (ji |= n)),
    ge(e, t);
}
function bs(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = dr), (dr <<= 1), !(dr & 130023424) && (dr = 4194304))
      : (t = 1));
  var n = de();
  (e = _e(e, t)), e !== null && ($n(e, t, n), ge(e, n));
}
function kp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bs(e, n);
}
function wp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), bs(e, n);
}
var $s;
$s = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), dp(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), H && t.flags & 1048576 && ns(t, Jr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Nr(e, t), (e = t.pendingProps);
      var l = rn(t, ae.current);
      en(t, n), (l = xi(null, t, r, e, l, n));
      var o = Si();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((o = !0), Qr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            yi(t),
            (l.updater = pl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ro(t, r, e, n),
            (t = zo(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && ai(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Nr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Fp(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Po(null, t, r, e, n);
            break e;
          case 1:
            t = Nu(null, t, r, e, n);
            break e;
          case 11:
            t = Pu(null, t, r, e, n);
            break e;
          case 14:
            t = zu(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Po(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Nu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ls(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          is(e, t),
          _r(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = an(Error(S(423)), t)), (t = Tu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = an(Error(S(424)), t)), (t = Tu(e, t, r, n, l));
            break e;
          } else
            for (
              xe = st(t.stateNode.containerInfo.firstChild),
                Se = t,
                H = !0,
                De = null,
                n = ds(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ln(), r === l)) {
            t = Ke(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cs(t),
        e === null && Eo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ao(r, l) ? (i = null) : o !== null && Ao(r, o) && (t.flags |= 32),
        Os(e, t),
        se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Eo(t), null;
    case 13:
      return Ms(e, t, n);
    case 4:
      return (
        hi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = on(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Pu(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          M(Gr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Me(o.value, i)) {
            if (o.children === l.children && !he.current) {
              t = Ke(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Je(-1, n & -n)), (a.tag = 2);
                      var p = o.updateQueue;
                      if (p !== null) {
                        p = p.shared;
                        var f = p.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (p.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Fo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(S(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Fo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        en(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        zu(e, t, r, l, n)
      );
    case 15:
      return Is(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Nr(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), Qr(t)) : (e = !1),
        en(t, n),
        as(t, r, l),
        Ro(t, r, l, n),
        zo(null, t, r, !0, e, n)
      );
    case 19:
      return Vs(e, t, n);
    case 22:
      return Ds(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function ed(e, t) {
  return ja(e, t);
}
function Ep(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Re(e, t, n, r) {
  return new Ep(e, t, n, r);
}
function Ni(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Fp(e) {
  if (typeof e == "function") return Ni(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _o)) return 11;
    if (e === Ko) return 14;
  }
  return 2;
}
function ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Re(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Dr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ni(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ut:
        return Pt(n.children, l, o, t);
      case Yo:
        (i = 8), (l |= 8);
        break;
      case _l:
        return (
          (e = Re(12, n, t, l | 2)), (e.elementType = _l), (e.lanes = o), e
        );
      case Kl:
        return (e = Re(13, n, t, l)), (e.elementType = Kl), (e.lanes = o), e;
      case bl:
        return (e = Re(19, n, t, l)), (e.elementType = bl), (e.lanes = o), e;
      case sa:
        return hl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ua:
              i = 10;
              break e;
            case aa:
              i = 9;
              break e;
            case _o:
              i = 11;
              break e;
            case Ko:
              i = 14;
              break e;
            case et:
              (i = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Re(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Pt(e, t, n, r) {
  return (e = Re(7, e, r, t)), (e.lanes = n), e;
}
function hl(e, t, n, r) {
  return (
    (e = Re(22, e, r, t)),
    (e.elementType = sa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zl(e, t, n) {
  return (e = Re(6, e, null, t)), (e.lanes = n), e;
}
function Jl(e, t, n) {
  return (
    (t = Re(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Rl(0)),
    (this.expirationTimes = Rl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Rl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ti(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new jp(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Re(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yi(o),
    e
  );
}
function Rp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function td(e) {
  if (!e) return yt;
  e = e._reactInternals;
  e: {
    if (Lt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return es(e, n, t);
  }
  return t;
}
function nd(e, t, n, r, l, o, i, u, a) {
  return (
    (e = Ti(n, r, !0, e, l, o, i, u, a)),
    (e.context = td(null)),
    (n = e.current),
    (r = de()),
    (l = pt(n)),
    (o = Je(r, l)),
    (o.callback = t ?? null),
    dt(n, o, l),
    (e.current.lanes = l),
    $n(e, l, r),
    ge(e, r),
    e
  );
}
function vl(e, t, n, r) {
  var l = t.current,
    o = de(),
    i = pt(l);
  return (
    (n = td(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Je(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dt(l, t, i)),
    e !== null && (Le(e, l, i, o), Cr(e, l, i)),
    i
  );
}
function ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ii(e, t) {
  Wu(e, t), (e = e.alternate) && Wu(e, t);
}
function Cp() {
  return null;
}
var rd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Di(e) {
  this._internalRoot = e;
}
gl.prototype.render = Di.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  vl(e, t, null, null);
};
gl.prototype.unmount = Di.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dt(function () {
      vl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function gl(e) {
  this._internalRoot = e;
}
gl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ia();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && Oa(e);
  }
};
function Oi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Al(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bu() {}
function Pp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = ll(i);
        o.call(p);
      };
    }
    var i = nd(t, r, e, 0, null, !1, !1, "", Bu);
    return (
      (e._reactRootContainer = i),
      (e[Ye] = i.current),
      Bn(e.nodeType === 8 ? e.parentNode : e),
      Dt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var p = ll(a);
      u.call(p);
    };
  }
  var a = Ti(e, 0, !1, null, null, !1, !1, "", Bu);
  return (
    (e._reactRootContainer = a),
    (e[Ye] = a.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function () {
      vl(t, a, n, r);
    }),
    a
  );
}
function xl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = ll(i);
        u.call(a);
      };
    }
    vl(t, i, e, l);
  } else i = Pp(n, t, e, l, r);
  return ll(i);
}
Na = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wn(t.pendingLanes);
        n !== 0 &&
          (ei(t, n | 1), ge(t, G()), !(I & 6) && ((sn = G() + 500), gt()));
      }
      break;
    case 13:
      Dt(function () {
        var r = _e(e, 1);
        if (r !== null) {
          var l = de();
          Le(r, e, 1, l);
        }
      }),
        Ii(e, 1);
  }
};
ti = function (e) {
  if (e.tag === 13) {
    var t = _e(e, 134217728);
    if (t !== null) {
      var n = de();
      Le(t, e, 134217728, n);
    }
    Ii(e, 134217728);
  }
};
Ta = function (e) {
  if (e.tag === 13) {
    var t = pt(e),
      n = _e(e, t);
    if (n !== null) {
      var r = de();
      Le(n, e, t, r);
    }
    Ii(e, t);
  }
};
Ia = function () {
  return O;
};
Da = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
ao = function (e, t, n) {
  switch (t) {
    case "input":
      if ((to(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = dl(r);
            if (!l) throw Error(S(90));
            ca(r), to(r, l);
          }
        }
      }
      break;
    case "textarea":
      fa(e, n);
      break;
    case "select":
      (t = n.value), t != null && _t(e, !!n.multiple, t, !1);
  }
};
xa = Ci;
Sa = Dt;
var zp = { usingClientEntryPoint: !1, Events: [tr, Bt, dl, ga, Aa, Ci] },
  xn = {
    findFiberByHostInstance: Ft,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Np = {
    bundleType: xn.bundleType,
    version: xn.version,
    rendererPackageName: xn.rendererPackageName,
    rendererConfig: xn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: be.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ea(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: xn.findFiberByHostInstance || Cp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber)
    try {
      (il = Sr.inject(Np)), (He = Sr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zp;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oi(t)) throw Error(S(200));
  return Rp(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Oi(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = rd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ti(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    new Di(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Ea(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Dt(e);
};
we.hydrate = function (e, t, n) {
  if (!Al(t)) throw Error(S(200));
  return xl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Oi(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = rd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = nd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ye] = t.current),
    Bn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new gl(t);
};
we.render = function (e, t, n) {
  if (!Al(t)) throw Error(S(200));
  return xl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!Al(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Dt(function () {
        xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Ci;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Al(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return xl(e, t, n, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
function ld() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ld);
    } catch (e) {
      console.error(e);
    }
}
ld(), (na.exports = we);
var Tp = na.exports,
  Xu = Tp;
(Gl.createRoot = Xu.createRoot), (Gl.hydrateRoot = Xu.hydrateRoot);
function Ip(e) {
  const n = {
    transform: `scale(${0.5})`,
    transformOrigin: "top left",
    width: "200%",
    height: "200%",
  };
  return s.jsx("div", { style: n, children: e.children });
}
const Dp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABICAYAAACz6LpGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPzSURBVHhe7dHRbuUwCEXR/v9Pz1SqRm1HG4wTICE5S9pP5Ro7/RAREREREREREREREREREREREREREREREREREXmiPxcmF6N/ytSq0K67JIXogz+tDHTuHZNE9IGf3Bl03l2TJPRx39IuOmNCchB9zLe1g34/JdlEH/HNRdDvpiVB9PHe3gr9ZmISQB9OfWWh2cmJgT6W+h2huenJf+gjKbuf6O9PSH6gD6SUfKIPo9S/Xo0+SLRJ6P5XVoV2ne3V6INEmo7e1FkX2n2kV6IPEelJ6H0ddaM77PQ69BEiPRW9tbIr0D12ehX6AJGejN5b1VXoLju9Bj1+1S46w8tCs9F20RkVEZrbLYJ+F+0V6OGrjqBzvCw0e6Qo+m12hOaOFEG/i/QK9PBVR9A5XhaaPdsK/SYzQnNn89D8qsejR0c6gs7xstBsRiv0m6wIzWXkoflVj0YPXnUUneVlodnMPDSfEaG5rDw0v+qR6KGrzqDzvCw0m52H5s9GaC4zD817PQ49MtIZdJ6XhWYr8tD8mQjNZWehWa/HoUeuOovO9LLQbFUemj8aobnsLDTr9Sj0wFUZ6FwvC81W5qH5IxGaq8hCs1aPQY+LlIHO9bLQbHUWmj0SobmqCM15PQI9bFUWOtvLQrMdWWh2N0JzVRGa8xqPHrUqE53vZaHZrgjN7UZorioLzVqNRg+KlInO98pE5x/JQrM7ZaGzI1lo1mo0elCkTHS+VwXasxuhuZ0y0fmrLDRrNRo9aFU22uFVifZFs9BstGy0w8tCs1Zj0WNWVaA9XtVoZzRCc9Gy0Q4vC81ajUQPiVSB9nh1oL2RCM1Fy0Y7vCw0azUSPWRVFdrl1YV2ryI0Fy0b7fCy0KzVOPSIVZVon1cn2u9lodlImej8VYTmvEahB0SqRPu8OtF+Lw/Nr8pCZ0ciNGc1Dj0ikoVmq+tGd/CqRjurIjRnNQo9IJKFZjvqRnfwqkY7K7LQrNUYdPlIFprtqhvdwasa7ayI0JzXGHT5SBaa7aob3cGrGu3MzkKzXmPQ5SMRmuusG93BqxrtzM5Cs14j0MUjEZrrrhvdwasa7czMQrNeI9DFI1lotrtudAevarQzKwvNeo1Bl49kodnuutEdvKrRzow8NO81Al08GqG5K+pGd/CqRjvP5qH5VbdHl45GaO6qOtF+rw6090wemo90e3TpSBaavapOtN+rA+3dLYp+u+r26NKRLDR7ZV1o96oOtDfaDvr9qhHo4pEsNHtlXWj3qg601+sIOifS7dGlI8lv9I1WPQG9K9rt0aWjyTf6PpGmozftdGt04Wjyjb5PtKnoLbvdHl06mnyhbxNtKnrLbgd9fPwFeQWjaOltzTgAAAAASUVORK5CYII=",
  Op =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABJCAYAAABrYykXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKwSURBVHhe7dDRjtwgEAXR+f+fTrQPliyr2tNgGvBuHakeMrkGko8kSeX+dSb+f2npDu2zEdqtbAv0sEx/Hf2f9BShbUuEditbjh6V6Q7td4rQbkYR2rZGaLeqLdDDMkVou1uEdjOK0LY1QrsVbYEelilC2x0jtKsuQtueCO1mtw16XKYIbXeM0K6yCG17I7Sb2TbocZkitN01QruqIrR9EqHdrLZBj8sWoe2uEdpVdIf2TyK0m9E26HHZIrTdOUK70d2h/dMI7araEj000x3a7xyh3cju0H5EhHYVbYsemylC290jtBvRN/TNqAjtRvQK9PBMEdq+IUK7p31D34yM0O5pr0APzxSh7VsitOspi74dHaFd1K9C/8BMEdq+JUK7TD3onIoI7aKeqjizGz3mW3don6kC3XPXKvSWygjtonrRWdemogdkitA2UxW6664V6B3VEdpF9ch8++T8ZsdlrUVom6kS3XfXDHTv7Ajtolq1fNd7R7PjotYI7TJVozvvqkZ3rojQLqrF9ZvzOefO6LehzhevrBrdac9rQd/Qn8+/0TdDHResbAa6157XgvaZ31rvSfs5eIdmoHt/Q2f099VlRfvMb9G3jxyHrm4WuvvtXdGmuha0v54XbYa6Xriqmej+txahbXVZ0f78292Gfu92HLi6mej+N3aH9tW1oP31Nzq39Z6vjktWNhu94U1l0HfVtaBv6M/n3+ibR44DVzcbveEtZdG31bWgb779Rn/f7ThsdSvQO3auB51TXavzd+dzjt9+XP9+mOPAla1Cb9m1XnRWdT0y3z45P3QcuqqV6D07NQKdW10vOuvacHTJrFajN+3QSHR+dU9VnClJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiR98/n8B+4ckCcq7saRAAAAAElFTkSuQmCC",
  Lp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAAADCAYAAABcWNmoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAInSURBVEhL7ZVZaxVBEEbbaOIW95Vshoj7jiExRgkBDagoggiiuKARQv7/D3CO/R1uPwwy3Ee5B4bTSWZqumqqOiWcjeFYfCKGU/GR7jpQl+V8fKi7putycJyjMZyL2zj+Drz3ZAyu++IQg1gwNI57BXNo45gruVMDMBcwx744M911sC5745yOYTY+HsOZuI1zIZ7qrsN1OTgO9/Mc9MXxPvB544Hv6YvD/tgnDI3T11NtnElvjujrTeOM05t/WYthOb4Zw/14rrtswGcxH9QPvR7DlfhWDPfi+e6ycZ7GJOumN2JYjO/E4Nq/gc8Qw8IZm8Is1GW5G8PteCkGcyAnm9VcyZ0agDUBa2XtwJpSaJv/eczHu1yX5WEM1+OVGFZjGtom2YoZkEt1WR7FcC2+GsPjmEG1SbZjfnaAvQ983njge3ivA+p+2J+D577BfMwPzJs6OFjWh3rZoJPeHPEk5uB0qDfjcXqzvIt5mR9zN+ZUMYkvMfhhX8TwJiYBT6VfMY1FUeFrDDbSTgyv4gfd5Un+I6ZRHJrvMfdwL/gsGLMdim8xRbpYl+VnzJ4tvrmAObbNbC2ojSevNaOGfjhrCw5a24SfYj6M/wn3YgbpRl2W9zE4aDYPfIwZMptrP2aQHN4PMTggGvw793tgGYe4DrHvA/fhvsD9sn8PLPMiTxvR/MG6WCfo683fcdubn2P4H3uTwfZweh3Dy7g9sP/VmxyyOZzK2z+3vjBE0tyuBwAAAABJRU5ErkJggg==",
  Mp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAAAMCAYAAACtDmt9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAc/SURBVGhD7dkHjzRXEYXhIeecc44m55xzBtkEmQyyASEQSEiIX8+83nqW4qPlxSskVus90qhmd7rrVtU9t0L3afDykeG5I184Mrx45LPPnydcfD29auRTzp+nXXw9vWJkuEoPvHLkU8+fIz3PGfmikcF3vwX3pCNdge5gTTaEq/TkW+Brvh/p4SOfg5g+/fx58sXXSz1PPH+edfH19JKR4QUjnzcyvGzkM84fel49Mj3PvPh6eunI8Px7ZNh6nnTx9fSakf3d/4PrwpEe67Ru6wf2ZN+RHv7wL/C7ONAjPukpbuEqbm49j0du0nMdbj6CN40MbtzGIUmbJ8BvHdkmIfJ19LxlZKRB5DePDIJgQwOy7c1zTzoQkO7gWvcGOvfm8SGfEJCv2YzAfAl83EHfehDnbSM7bA7E60YGm7IP8htHtrGI8/aRHRKb+vqRwcHbB/ANIyMT4rxjZH8jmevCkR7rtK5kxJ7sQ0B2B/5s0vG7OEhG4lO8jjjloO8D+NqRJShJ5LZyc+v5X3Dz9P2R7zp/kOt3I7tBcH8xMnxk5FdHhu+MfM/5gxQPj2zzOfarkeFDI78+Mnxr5PvPH5vw25FtOmd+M7Jruja4N9BpjWDtAovQD43M5mwPfAl85HMQi2IjqGJWDItlENvwpZGfGBkeHNmBs3F/HBlJHM77R4bPj/zUyPCTkZFDMvjTyA6jQ/XDkeGz98jg9653iOlJL/JZL7CDXYG92Y/s/MpPCYb/QVzEKRxx8/cjOxQSyM9HhtvIzZLjey++HnLzwyPDVdx898XX0/dG/hsBZCSLBQEt2LL0V0ZGCotsAiDK+0YGRlY9ZOkvjyxzy4BfHBlUkA+MDB8cuauLe9KhTaW7TUC4HXAbs6sCH/LJQeJrviPcTgZitbO5mFatHKSvjazSItzHRgYbo5KGT4+MEKrYN0ZWIVWInVTuGyl5BIc0kjqQCNnfqulOKu6nL1indXU07Mk+xGV34A//Ar+Lg05EfIqXKr+5qcodcTOyO9i3lZtfGFni0zleh5ufG3kZMA4Hm5FhMpz/BddKBOEm6HFvoPOm6TnylY5wE/Qc+Rrovwl60kHPka83Tc+Rr/93PTJDmZ9i2b8MrB396Mggw+zKIqtXESzwyZHNkzLernRGineODFrmKgLjVZsyuYz38ZFdo4q6N9BpjWDtbDHjsjGbVdFdofjI5yAWxUZVF7NiqIruCqX13jO1alMmN1N+ZmQbZkbeFUr12xVBtalamgVl96qzmXtXKNWPDH7velWdnvSqxtYL7GBXYG/2Ix6/8tMcu9tVcRGncMRNHUVdhmq8K90dNy9wxM2ShdHEiHs5WwQXfntk+NHIyGEz/zqyNs9DIPNYYPh3R4YHRtbeyFp/HplRHlSYD4Og7Pn5ByN3QnJPOjhId8FDtD0/m3t2y8yHfNLC8jXfHRAxCWK1W2Yx7XBoPf82sjZb8Pfcaxa8bMvOMFN2uJD97yPbXC35nnu1grtFNVPWgiPpP0b2t9Z8z73upy9Yp3WRiz3ZJwmwO/Bnz8/8Lg7GEPEpXpLK5qaDv+fnH4+sTfZc4LZy8w8jO+wKw19GPhZuet5xuVkFnNPmjTbF3Lszjsq2q5iZoqohu6oAZXvZbOvhwJ6PVCIHL6gAZXuE21XVtbuK0bmfMDtw2WJ+ZmM2q5B7PuIjnwMfig3iilkxdNh3NURCGTw4uB0+FVtVrdKpkLsayvIqSlBJyvYOgPkxUkgauxoiMxn83vWSPD3p1QXuasiOXX3Ym/0qNr/yU/LZzxLERZzCETcRfHNzV9XbyM06CNw80vPfcjPfdW+PxJbjtXlaGZtcwG2eDQuIysjAce1i0E5dR4/fAj3poMf/gmvdG+jceqydDmTaeth+HT1iVgzpEdtAjw0JyNtBQ8qtx0HeeowH19HjukAPGfze9fdyIb0SwtbDjq2HvdfRs7lwFTfpuePmv/Bo3Az/wc3djsnGu20xr5V1OKi9SbHs9s2RQXXYc5S2rUyMpFqvqoSstEcO7ehuf7RtuyK6Jx0qJt2tpYrs9sdstisiH/JJ0Pia7zKvmASx2pVMTMvKNkRb16FQmfZTaFX2ch47w+ucKqON90quTVdxd4uvOqocwdPlKr2DqmXubx2A64L76QvWaV2kY0/2qeD7VRt/+Bf4XRwkJ/EpXqrZ5qYKv2d8bwMaE247N407dQG4aeR4LNz0duby9UrG2oSfjaz9s5lmooAU+zWMuTBjZZyfjqxts5n7XTNS7APgPW8bLdt7r5zTNhNxuwYp9jtiOvdBMgvVbmnNzZ7ZLNB7xuXjPkhiUWy01GJWDG282Abk2g/LbFwPfiSIX47sYGlXN3ERbR8ARKplltF/PbKDrT3cxEX8fQD83vUSBD3p1ZJbL7BjHwD2Zr8Ewa/89KBrz8riIk7hiJueOUR+3Nyz8m3lpoS1k7NnKXvMeDRu1ilJWDs53+EOd3j84HT6J6/xsPWYHsH8AAAAAElFTkSuQmCC",
  Vp =
    "data:image/png;base64,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",
  Up =
    "data:image/png;base64,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",
  qp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+QAAAAoCAYAAAB3nzBDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASnSURBVHhe7ddBagNJEEXBuf+lZ8hFQyNedbVkaUB2BLyN9NMC7+qfB/9+KFr9ryYAAAD+mHocviNa/a8mAAAA/ph6HL4jWv2vJgAAAP6Yehy+I1r9ryYAAAD+mHocviNa/a8mAAAA/ph6HE4AAADAB9VjfAIAAAA+qB7jEwAAAPBB9Rif/i/12+fuqtvp0eq78+fnHtVmuqtup5XaTo9qM/3U7m/W99Mz6v4cAADAr1QPoOnT6jev2qmb6XD13ajvp0N9V+3UzbRS2+lQ31XPqPtq1OfTHXV3FQAAwK9SD5/pk+r37nSl9tOoz6ez+n4a9flVV2o/rdR2GvX5VXfU3Svt1M3dAAAAfoV68EyfUr/1TCu13XVW37/aldpPK7V9tZ26ebUrtX8mAACAX6EePD9tpbavVGq366y+/0krtZ1WavuTrtT+1a7U/tkAAAC+Xj12ftpKbY8e1eao1G7XWX1/rtTuaKW200ptz5XaHa3U9qjU7txKbY8e1eYIAADg69Vj56et1HZaqe1UavfYldofrdT2aKW200ptj1Zqe7RS2+lK7Y9Wajtdqf0EAADw1eqh89NWajut1HYqtTu6o+6mnbqZVmo7rdR22qmbaaW205XaH63UdrpS+wkAAOCr1UPnp71D/d2jUrvprrqddupmWqnttFLbaaduplK76Y66m1Zqew4AAODPqEfR9H+q37+q1G66q26nnbqZVmo7rdR22qmbqdRuuqPupiu1vwoAAOBXqgfQ9Gn1m3crtZvuqttpp26mldpOK7WddupmKrWb7qi7aadu7gQAAPBr1KNn+pT6rWcrtZvuqttpp26mldpOK7WddupmKrWb7qi76a66vRMAAMDXq8fO9An1O+ce1WYqtZvuqttpp26mldpOK7WddupmKrWb7qi76RX1d64CAAD4avXQmd6tfuNopbZTqd10V91OO3UzrdR2WqnttFM3U6nddEfdTe9Sf/scAADA16pHzvRu9RvTldpPpXbTXXU77dTNtFLbaaW2007dTKV2R1dqf1RqN91RdxMAAMDXqkfO9G71G9NKbY9K7aa76nbaqZtppbbTSm2nnbqZVmo7Xan9Uand0U7dTAAAAF+rHjnTu9VvHD2qzblSu+muup126mZaqe20Uttpp26mldoeldqdK7U7t1LbIwAAgK9Vj5x3dVbfv1qp3XRX3U47dTOt1HZaqe20UzfTldq/2kptXw0AAOCr1UPnXZ3V969WajfdVbfTTt1MK7WdVmo77dTNdKX2r3al9q8EAADw1eqh864e1WbVqM+nUrvprrqddupmWqnttFLbaadupp26eaUrtX82AACAr1ePnXdVavfYob47elSb6a66nXbqZlqp7bRS22mnbqY76q4a9fl0R93dCQAA4FeoB8+7unJ3X7vpUW2mu+p22qmbaaW200ptp526mZ61+xv1/fSMun8MAAAAOKnH8wQAAAB8UD3GJwAAAOCGelRPV2p/BAAAANxQj+qjUrsjAAAA4KZ6WL8aAAAA8IR6XD8bAAAAF+ohJUmSJEmSPlt+KEmSJEmSPlt+KEmSJEmSPlt+KEmSJEmSPtY///4HLKCWuz4mcAsAAAAASUVORK5CYII=",
  Hp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAICAYAAADHlHLmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAvSURBVFhH7chBDQAwDAOx8ifdEQiARvNJ/txIkiRJkvRRC9SKE+gQJ9AhTuC82QeAkbxunu1idQAAAABJRU5ErkJggg==",
  Wp =
    "data:image/png;base64,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",
  Bp =
    "data:image/png;base64,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",
  Xp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAICAYAAADHlHLmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAvSURBVFhH7chBDQAwDAOx8ifdEQiARvNJ/txIkiRJkvRRC9SKE+gQJ9AhTuC82QeAkbxunu1idQAAAABJRU5ErkJggg==",
  Qp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAA4CAYAAAAilkrCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHrSURBVHhe7dgxbhxBEARB/v/TFA3J0qbVOBq1EUA5k0A/YL5+fJuZmZmZ/eIeH83MzMzMPrXHRzMzMzOzT+3x0czMzMzsU/tPhr90XW+6rjdd19vb+/mArutN1/Wm63pb7wAAAAAAQ65fprquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAAPAi1y9VXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGHL9MtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAXuX6p6rredF1vuq639X4+oOt603W96bre1jsAAAAAwJDrl6mu603X9abrelvv5wO6rjdd15uu6229AwAAAAC8yPVLVdf1put603W9rffzAV3Xm67rTdf1tt4BAAAAAIZcv0x1XW+6rjdd19t6Px/Qdb3put50XW/rHQAAAADgRa5fqrquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAADDk+mWq63rTdb3put7W+/mArutN1/Wm63pb7wAAAAAAL3L9UtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAh1y9TXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGPbvi9TMzMzM7Df2+GhmZmZm9qk9PpqZmZmZfWqPj2ZmZmZmH9jX9x+UB51dgY19sQAAAABJRU5ErkJggg==",
  Zp =
    "data:image/png;base64,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",
  Jp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAA4CAYAAAAilkrCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHrSURBVHhe7dgxbhxBEARB/v/TFA3J0qbVOBq1EUA5k0A/YL5+fJuZmZmZ/eIeH83MzMzMPrXHRzMzMzOzT+3x0czMzMzsU/tPhr90XW+6rjdd19vb+/mArutN1/Wm63pb7wAAAAAAQ65fprquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAAPAi1y9VXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGHL9MtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAXuX6p6rredF1vuq639X4+oOt603W96bre1jsAAAAAwJDrl6mu603X9abrelvv5wO6rjdd15uu6229AwAAAAC8yPVLVdf1put603W9rffzAV3Xm67rTdf1tt4BAAAAAIZcv0x1XW+6rjdd19t6Px/Qdb3put50XW/rHQAAAADgRa5fqrquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAADDk+mWq63rTdb3put7W+/mArutN1/Wm63pb7wAAAAAAL3L9UtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAh1y9TXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGPbvi9TMzMzM7Df2+GhmZmZm9qk9PpqZmZmZfWqPj2ZmZmZmH9jX9x+UB51dgY19sQAAAABJRU5ErkJggg==",
  Gp = "/assets/notAChckStmp-18a70a7d.png",
  Yp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAA4CAYAAAAilkrCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHrSURBVHhe7dgxbhxBEARB/v/TFA3J0qbVOBq1EUA5k0A/YL5+fJuZmZmZ/eIeH83MzMzMPrXHRzMzMzOzT+3x0czMzMzsU/tPhr90XW+6rjdd19vb+/mArutN1/Wm63pb7wAAAAAAQ65fprquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAAPAi1y9VXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGHL9MtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAXuX6p6rredF1vuq639X4+oOt603W96bre1jsAAAAAwJDrl6mu603X9abrelvv5wO6rjdd15uu6229AwAAAAC8yPVLVdf1put603W9rffzAV3Xm67rTdf1tt4BAAAAAIZcv0x1XW+6rjdd19t6Px/Qdb3put50XW/rHQAAAADgRa5fqrquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAADDk+mWq63rTdb3put7W+/mArutN1/Wm63pb7wAAAAAAL3L9UtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAh1y9TXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGPbvi9TMzMzM7Df2+GhmZmZm9qk9PpqZmZmZfWqPj2ZmZmZmH9jX9x+UB51dgY19sQAAAABJRU5ErkJggg==",
  _p =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAACCAYAAADSBaePAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAcSURBVDhPY4CC/6N4FA8iDAfYJEfxKB4gzMAAAAC3RsjfOTGQAAAAAElFTkSuQmCC",
  Kp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAACCAYAAADSBaePAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAcSURBVDhPY4CC/6N4FA8iDAfYJEfxKB4gzMAAAAC3RsjfOTGQAAAAAElFTkSuQmCC",
  bp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAACCAYAAADSBaePAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAcSURBVDhPY4CC/6N4FA8iDAfYJEfxKB4gzMAAAAC3RsjfOTGQAAAAAElFTkSuQmCC",
  $p =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAAACCAYAAACpIWVDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAbSURBVDhPY4CC/6N4FNMRwwE2yVE8immEGRgA1DA22MjnuFIAAAAASUVORK5CYII=";
function ef({ pos: e }) {
  let { statePos: t, fedPos: n, otPos: r } = e;
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "15pt",
          fontWeight: "bolder",
          wordSpacing: ".07in",
          top: ".025in",
          left: "4.856in",
          width: "2.1in",
        },
        children: "Earnings Statement",
      }),
      s.jsxs("div", {
        children: [
          s.jsx("img", {
            src: Dp,
            style: {
              position: "absolute",
              width: ".65in",
              height: ".23in",
              top: ".22in",
              left: "7.455in",
            },
          }),
          s.jsx("img", {
            src: Op,
            style: {
              position: "absolute",
              width: ".62in",
              height: ".24in",
              top: ".442in",
              left: "7.455in",
            },
          }),
          s.jsx("img", {
            src: Lp,
            style: {
              position: "absolute",
              width: "2.64in",
              height: ".03in",
              top: ".17in",
              left: "1.31in",
            },
          }),
          s.jsx("img", {
            src: Mp,
            style: {
              position: "absolute",
              width: "2.64in",
              height: ".12in",
              top: ".19in",
              left: "1.31in",
            },
          }),
          s.jsx("img", {
            src: Vp,
            style: {
              position: "absolute",
              width: "2.64in",
              height: ".12in",
              top: ".29in",
              left: "1.31in",
            },
          }),
          s.jsx("img", {
            src: Up,
            style: {
              position: "absolute",
              width: "2.64in",
              height: ".12in",
              top: ".4in",
              left: "1.31in",
            },
          }),
          s.jsx("img", {
            src: qp,
            style: {
              position: "absolute",
              width: "3.325in",
              height: ".15in",
              top: "2.58in",
              left: ".285in",
            },
          }),
          s.jsx("img", {
            src: Wp,
            style: {
              position: "absolute",
              width: "2.215in",
              height: ".15in",
              top: "2.745in",
              left: "4.92in",
            },
          }),
          s.jsx("img", {
            src: Hp,
            style: {
              position: "absolute",
              width: ".8in",
              height: ".03in",
              top: "2.69in",
              left: "3.85in",
            },
          }),
          s.jsx("img", {
            src: Bp,
            style: {
              position: "absolute",
              width: "3.17in",
              height: ".14in",
              top: "3.33in",
              left: "4.92in",
            },
          }),
          s.jsx("img", {
            src: Xp,
            style: {
              position: "absolute",
              width: ".793in",
              height: ".03in",
              top: "2.863in",
              left: "7.316in",
            },
          }),
          s.jsx("img", {
            src: Qp,
            style: {
              position: "absolute",
              width: "2.245in",
              height: ".19in",
              top: 2.87 + r + "in",
              left: "1.31in",
            },
          }),
          s.jsx("img", {
            src: Zp,
            style: {
              position: "absolute",
              width: "3.25in",
              height: ".13in",
              top: "3.335in",
              left: ".288in",
            },
          }),
          s.jsx("img", {
            src: Jp,
            style: {
              position: "absolute",
              width: "2.245in",
              height: ".19in",
              top: 3.84 + t + n + "in",
              left: "1.31in",
            },
          }),
          s.jsx("img", {
            src: Yp,
            style: {
              position: "absolute",
              width: "2.245in",
              height: ".19in",
              top: 4.255 + t + n + "in",
              left: "1.31in",
            },
          }),
          s.jsx("img", {
            src: Gp,
            style: {
              position: "absolute",
              width: "5.16in",
              height: "2.18in",
              top: "8.22in",
              left: "1.14in",
            },
          }),
          s.jsx("img", {
            src: _p,
            style: {
              position: "absolute",
              width: "1.88in",
              height: ".01in",
              top: "9.05in",
              left: "1.38in",
            },
          }),
          s.jsx("img", {
            src: Kp,
            style: {
              position: "absolute",
              width: "1.88in",
              height: ".01in",
              top: "9.05in",
              left: "3.2in",
            },
          }),
          s.jsx("img", {
            src: bp,
            style: {
              position: "absolute",
              width: "2.1in",
              height: ".01in",
              top: "9.05in",
              left: "5in",
            },
          }),
          s.jsx("img", {
            src: $p,
            style: {
              position: "absolute",
              width: "1.1in",
              height: ".01in",
              top: "9.05in",
              left: "7.04in",
            },
          }),
        ],
      }),
      s.jsx("p", {
        style: {
          fontSize: "16pt",
          fontWeight: "bold",
          position: "absolute",
          width: "2.1in",
          top: "9.725in",
          left: "5.53in",
        },
        children: "NON-NEGOTIABLE",
      }),
      s.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "3pt",
          wordSpacing: ".04in",
          top: "7.5in",
          left: "7.45in",
          width: ".45in",
        },
        children: ["© ", "2000 ADP, Inc."],
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "8pt",
          fontWeight: "bold",
          wordSpacing: ".1in",
          top: "2.46in",
          left: "4.92in",
        },
        children: "Other Benefits and",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "7pt",
          left: "6.44in",
          top: "2.64in",
          wordSpacing: ".054in",
          fontWeight: "bold",
        },
        children: "this period",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "7pt",
          left: "7.415in",
          top: "2.64in",
          wordSpacing: ".059in",
          fontWeight: "bold",
        },
        children: "total to date",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "7pt",
          left: "2.96in",
          top: "2.47in",
          wordSpacing: ".06in",
          fontWeight: "bold",
        },
        children: "this period",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "7pt",
          left: "3.95in",
          top: "2.47in",
          wordSpacing: ".054in",
          fontWeight: "bold",
        },
        children: "year to date",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.32in",
          top: "3.17in",
          wordSpacing: ".054in",
          fontWeight: "bold",
        },
        children: "Statutory",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: 2.75 + r + "in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "Gross Pay",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: 3.72 + t + n + "in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "Net Pay",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: 4.14 + t + n + "in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "Net Check",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "8pt",
          left: "4.905in",
          top: "8.81in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "account number",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "8pt",
          left: "6.08in",
          top: "8.81in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "transit",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "8pt",
          left: "6.54in",
          top: "8.81in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "ABA",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "8pt",
          left: "7.67in",
          top: "8.81in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "amount",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "8pt",
          left: "6.12in",
          top: "8.965in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "xxxx",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "8pt",
          left: "6.47in",
          top: "8.965in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "xxxx",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "8pt",
          left: "1.375in",
          top: "8.81in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "Deposited to the account of",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "8pt",
          left: "4.93in",
          top: "7.965in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        children: "Advice number:",
      }),
    ],
  });
}
const kr = { begin: "11/20/2022", end: "11/26/2022", pay: "12/02/2022" };
function tf({ handleEdit: e }) {
  const t = (n) => {
    const [r, l] = e(n),
      o = document.getElementById(n.target.id);
    r.addEventListener("change", (i) => {
      switch (i.target.id) {
        case "perBegin":
          o.innerText = i.target.value;
          break;
        case "perEnd":
          o.innerText = i.target.value;
          break;
        case "payDateTop":
          (document.getElementById("payDateBott").innerText = i.target.value),
            (o.innerText = i.target.value);
          break;
        case "payDateBott":
          (o.innerText = i.target.value),
            (document.getElementById("payDateTop").innerText = i.target.value);
          break;
      }
      l.removeChild(r);
    });
  };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      style: { fontSize: "9pt", wordSpacing: ".04in" },
      children: [
        s.jsx("p", {
          style: {
            position: "absolute",
            top: ".53in",
            left: "4.92in",
            width: "1.05in",
          },
          children: "Period Beginning:",
        }),
        s.jsx("p", {
          style: {
            position: "absolute",
            top: ".7in",
            left: "4.92in",
            width: "1.05in",
          },
          children: "Period Ending:",
        }),
        s.jsx("p", {
          style: {
            position: "absolute",
            top: ".87in",
            left: "4.92in",
            width: "1.05in",
          },
          children: "Pay Date:",
        }),
        s.jsx("p", {
          style: {
            position: "absolute",
            top: "8.12in",
            left: "4.925in",
            width: "1.05in",
          },
          children: "Pay date:",
        }),
        s.jsx("p", {
          style: {
            position: "absolute",
            top: ".53in",
            right: "1.57in",
            width: ".7in",
            direction: "rtl",
          },
          id: "perBegin",
          className: "edit",
          onClick: t,
          children: kr.begin,
        }),
        s.jsx("p", {
          style: {
            position: "absolute",
            top: ".7in",
            right: "1.57in",
            width: ".7in",
            direction: "rtl",
          },
          id: "perEnd",
          className: "edit",
          onClick: t,
          children: kr.end,
        }),
        s.jsx("p", {
          style: {
            position: "absolute",
            top: ".87in",
            right: "1.57in",
            width: ".7in",
            direction: "rtl",
          },
          id: "payDateTop",
          className: "edit",
          onClick: t,
          children: kr.pay,
        }),
        s.jsx("p", {
          style: {
            position: "absolute",
            top: "8.12in",
            right: "1.415in",
            width: ".7in",
            direction: "rtl",
          },
          id: "payDateBott",
          className: "edit",
          onClick: t,
          children: kr.pay,
        }),
      ],
    }),
  });
}
function nf({ employee: e, handleEdit: t, dispatch: n }) {
  let { name: r, address: l, apt: o, city: i, state: u, zip: a } = e,
    p;
  r !== void 0 &&
    ((r = r.toUpperCase()),
    (l = l.toUpperCase()),
    (o = o.toUpperCase()),
    (p = (i + " " + u + " " + a).toUpperCase()));
  const f = (v) => {
    const [c, g] = t(v);
    c.addEventListener("change", (k) => {
      n({
        type: "txt",
        payload: k.target.value,
        cat: "employee",
        key: k.target.id,
      }),
        g.removeChild(c);
    });
  };
  return s.jsx(s.Fragment, {
    children:
      o !== "" && o !== void 0
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsxs("div", {
                style: {
                  fontSize: "9pt",
                  fontWeight: "bold",
                  wordSpacing: ".06in",
                },
                children: [
                  s.jsx("p", {
                    id: "name",
                    className: "edit",
                    onClick: f,
                    value: "name",
                    style: {
                      position: "absolute",
                      top: "1.445in",
                      left: "5.16in",
                    },
                    children: r,
                  }),
                  s.jsx("p", {
                    id: "address",
                    className: "edit",
                    onClick: f,
                    style: {
                      position: "absolute",
                      top: "1.61in",
                      left: "5.16in",
                    },
                    children: l,
                  }),
                  s.jsx("p", {
                    id: "apt",
                    className: "edit",
                    onClick: f,
                    style: {
                      position: "absolute",
                      top: "1.78in",
                      left: "5.16in",
                    },
                    children: o,
                  }),
                  s.jsx("p", {
                    id: "address3",
                    className: "edit",
                    onClick: f,
                    style: {
                      position: "absolute",
                      top: "1.95in",
                      left: "5.16in",
                    },
                    children: p,
                  }),
                ],
              }),
              s.jsx("p", {
                id: "name",
                className: "edit",
                onClick: f,
                style: {
                  position: "absolute",
                  fontSize: "8pt",
                  fontWeight: "bold",
                  top: "8.98in",
                  left: "1.38in",
                  wordSpacing: ".06in",
                },
                children: r,
              }),
            ],
          })
        : s.jsxs(s.Fragment, {
            children: [
              s.jsxs("div", {
                style: {
                  fontSize: "9pt",
                  fontWeight: "bold",
                  wordSpacing: ".06in",
                },
                children: [
                  s.jsx("p", {
                    id: "name",
                    className: "edit",
                    onClick: f,
                    style: {
                      position: "absolute",
                      top: "1.445in",
                      left: "5.16in",
                    },
                    children: r,
                  }),
                  s.jsx("p", {
                    id: "address",
                    className: "edit",
                    onClick: f,
                    style: {
                      position: "absolute",
                      top: "1.61in",
                      left: "5.16in",
                    },
                    children: l,
                  }),
                  s.jsx("p", {
                    id: "address3",
                    className: "edit",
                    onClick: f,
                    style: {
                      position: "absolute",
                      top: "1.78in",
                      left: "5.16in",
                    },
                    children: p,
                  }),
                ],
              }),
              s.jsx("p", {
                id: "name",
                className: "edit",
                onClick: f,
                style: {
                  position: "absolute",
                  fontSize: "8pt",
                  fontWeight: "bold",
                  top: "8.98in",
                  left: "1.38in",
                  wordSpacing: ".06in",
                },
                children: r,
              }),
            ],
          }),
  });
}
function rf({ employer: e, handleEdit: t, dispatch: n }) {
  let { name: r, address: l, apt: o, city: i, state: u, zip: a } = e,
    p;
  r !== void 0 &&
    ((r = r.toUpperCase()),
    (l = l.toUpperCase()),
    (o = o.toUpperCase()),
    (p = (i + " " + u + " " + a).toUpperCase()));
  const f = (v) => {
    const [c, g] = t(v);
    c.addEventListener("change", (k) => {
      n({
        type: "txt",
        payload: k.target.value,
        cat: "employer",
        key: k.target.id,
      }),
        g.removeChild(c);
    });
  };
  return s.jsx(s.Fragment, {
    children:
      o !== void 0 && o !== ""
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsxs("div", {
                style: {
                  fontSize: "7.5pt",
                  lineHeight: ".16",
                  fontStyle: "italic",
                  letterSpacing: ".0045in",
                },
                children: [
                  s.jsx("p", {
                    style: {
                      position: "absolute",
                      wordSpacing: ".1in",
                      top: ".63in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    id: "name",
                    children: r,
                  }),
                  s.jsx("p", {
                    id: "apt",
                    style: {
                      position: "absolute",
                      top: ".8in",
                      left: "1.38in",
                      width: "2.2in",
                      wordSpacing: ".058in",
                    },
                    className: "edit",
                    onClick: f,
                    children: o,
                  }),
                  s.jsx("p", {
                    id: "address",
                    style: {
                      position: "absolute",
                      top: ".96in",
                      wordSpacing: ".041in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    children: l,
                  }),
                  s.jsx("p", {
                    id: "address3",
                    style: {
                      position: "absolute",
                      top: "1.14in",
                      wordSpacing: ".1in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    children: p,
                  }),
                ],
              }),
              s.jsxs("div", {
                style: { fontSize: "9pt", lineHeight: ".16" },
                children: [
                  s.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.03in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    id: "name",
                    children: r,
                  }),
                  s.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.2in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    id: "apt",
                    children: o,
                  }),
                  s.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.36in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    id: "address",
                    children: l,
                  }),
                  s.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.53in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    id: "address3",
                    children: p,
                  }),
                ],
              }),
            ],
          })
        : s.jsxs(s.Fragment, {
            children: [
              s.jsxs("div", {
                style: {
                  fontSize: "7.5pt",
                  lineHeight: ".16",
                  fontStyle: "italic",
                  letterSpacing: ".0045in",
                },
                children: [
                  s.jsx("p", {
                    style: {
                      position: "absolute",
                      wordSpacing: ".1in",
                      top: ".63in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    id: "name",
                    children: r,
                  }),
                  s.jsx("p", {
                    id: "address",
                    style: {
                      position: "absolute",
                      top: ".8in",
                      left: "1.38in",
                      width: "2.2in",
                      wordSpacing: ".058in",
                    },
                    className: "edit",
                    onClick: f,
                    children: l,
                  }),
                  s.jsx("p", {
                    id: "address3",
                    style: {
                      position: "absolute",
                      top: ".96in",
                      wordSpacing: ".041in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    children: p,
                  }),
                ],
              }),
              s.jsxs("div", {
                style: { fontSize: "9pt", lineHeight: ".16" },
                children: [
                  s.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.03in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    id: "name",
                    children: r,
                  }),
                  s.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.2in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    id: "address",
                    children: l,
                  }),
                  s.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.36in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: f,
                    id: "address3",
                    children: p,
                  }),
                ],
              }),
            ],
          }),
  });
}
function lf() {
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "6pt",
          top: ".12in",
          left: "1.398in",
          wordSpacing: ".04in",
        },
        children: "CO.",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "6pt",
          top: ".12in",
          left: "1.776in",
          wordSpacing: ".04in",
        },
        children: "FILE",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "6pt",
          top: ".12in",
          left: "2.24in",
          wordSpacing: ".04in",
        },
        children: "DEPT.",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "6pt",
          top: ".12in",
          left: "2.69in",
          wordSpacing: ".04in",
        },
        children: "CLOCK",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "6pt",
          width: ".5in",
          top: ".12in",
          left: "3.1in",
          wordSpacing: ".04in",
        },
        children: "VCHR. NO.",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "7pt",
          fontWeight: "bold",
          top: ".19in",
          left: "1.4in",
          wordSpacing: ".04in",
        },
        id: "companyCode",
        children: "CIS",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "7pt",
          top: ".19in",
          left: "1.77in",
          wordSpacing: ".04in",
        },
        id: "fileNum",
        children: "449343",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "7pt",
          top: ".19in",
          left: "2.22in",
          wordSpacing: ".04in",
        },
        id: "deptNum",
        children: "109200",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "7pt",
          top: ".19in",
          left: "2.65in",
          wordSpacing: ".04in",
        },
        id: "clockNum",
        children: "1T12",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "7pt",
          top: ".19in",
          left: "3.11in",
          wordSpacing: ".04in",
        },
        id: "vchrNum",
        children: "0000497754",
      }),
    ],
  });
}
function of({ taxInfo: e, handleEdit: t, dispatch: n }) {
  let { status: r, fed: l, state: o, stateTaxed: i } = e;
  i !== void 0 && (i = i.toUpperCase());
  const u = (a) => {
    const [p, f] = t(a);
    p.addEventListener("change", (v) => {
      n({
        type: "txt",
        payload: v.target.value,
        cat: "taxInfo",
        key: v.target.id,
      }),
        f.removeChild(p);
    });
  };
  return s.jsxs("div", {
    style: { fontSize: "7pt", wordSpacing: ".07in" },
    children: [
      s.jsx("p", {
        style: {
          position: "absolute",
          top: "1.62in",
          left: "1.38in",
          width: ".65in",
        },
        children: "Filing Status:",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          top: "1.62in",
          left: "2.05in",
          width: "1.6in",
        },
        className: "edit",
        onClick: u,
        id: "status",
        children: r,
      }),
      s.jsx("p", {
        style: { position: "absolute", top: "1.76in", left: "1.38in" },
        children: "Exemptions/Allowances:",
      }),
      s.jsx("p", {
        style: { position: "absolute", top: "1.89in", left: "1.52in" },
        children: "Federal:",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          top: "1.89in",
          left: "1.955in",
          width: ".7in",
        },
        onClick: u,
        className: "edit",
        id: "fed",
        children: l,
      }),
      s.jsxs("p", {
        id: "stateTaxed",
        onClick: u,
        className: "edit",
        style: { position: "absolute", top: "2.01in", left: "1.52in" },
        children: [i, ":"],
      }),
      s.jsx("p", {
        onClick: u,
        className: "edit",
        id: "state",
        style: { position: "absolute", top: "2.01in", left: "1.955in" },
        children: o,
      }),
    ],
  });
}
function Qu() {
  let e = new Date(),
    t = new Date(e.getFullYear(), 0, 1);
  return Math.ceil(((e.getTime() - t.getTime()) / 864e5 + t.getDay() + 1) / 7);
}
function uf({ taxInfo: e, payInfo: t, pos: n, handleEdit: r, dispatch: l }) {
  let { status: o, fed: i, state: u, stateTaxed: a } = e,
    {
      sched: p,
      rate: f,
      hours: v,
      otHrs: c,
      by: g,
      minGross: k,
      regYTD: w,
      otYTD: L,
    } = t,
    { statePos: m, fedPos: d, otPos: y } = n;
  (f = parseFloat(f).toFixed(4)), (v = parseFloat(v).toFixed(2));
  let x = (f * v).toFixed(2);
  w = parseFloat(x * (parseFloat(Qu()) - 1)).toFixed(2);
  let F = (f * 1.5).toFixed(4);
  c = parseFloat(c).toFixed(2);
  let R = (F * c).toFixed(2);
  L = parseFloat(parseFloat(R) * (parseFloat(Qu()) - 1)).toFixed(2);
  let A = (parseFloat(x) + parseFloat(R)).toFixed(2),
    h = (parseFloat(w) + parseFloat(L)).toFixed(2),
    q = (parseFloat(A) * -0.062).toFixed(2),
    z;
  o === "Married" && parseFloat(h) > 25e4 && (z = parseFloat(15500).toFixed(2)),
    o !== "Married" &&
      parseFloat(h) > 160200 &&
      (z = parseFloat(9932.4).toFixed(2)),
    (z = (parseFloat(h) * 0.062).toFixed(2));
  let fe = (parseFloat(A) * -0.0145).toFixed(2),
    At = (parseFloat(h) * 0.0145).toFixed(2),
    N,
    D;
  i !== void 0 || i !== "Tax Blocked"
    ? (o === "Single" &&
        (parseFloat(h) <= 11e3 &&
          ((N = (parseFloat(A) * -0.1).toFixed(2)),
          (D = (parseFloat(h) * 0.1).toFixed(2))),
        parseFloat(h) > 11e3 &&
          parseFloat(h) <= 44725 &&
          ((N = (parseFloat(A) * -0.12).toFixed(2)),
          (D = ((parseFloat(h) - 11e3) * 0.12 + 1100).toFixed(2))),
        parseFloat(h) > 44725 &&
          parseFloat(h) <= 95375 &&
          ((N = (parseFloat(A) * -0.22).toFixed(2)),
          (D = ((parseFloat(h) - 44725) * 0.22 + 5147).toFixed(2))),
        parseFloat(h) > 95375 &&
          parseFloat(h) <= 182100 &&
          ((N = (parseFloat(A) * -0.24).toFixed(2)),
          (D = ((parseFloat(h) - 95375) * 0.24 + 16290).toFixed(2))),
        parseFloat(h) > 182100 &&
          parseFloat(h) <= 231250 &&
          ((N = (parseFloat(A) * -0.32).toFixed(2)),
          (D = ((parseFloat(h) - 182100) * 0.32 + 37104).toFixed(2))),
        parseFloat(h) > 231250 &&
          parseFloat(h) <= 578125 &&
          ((N = (parseFloat(A) * -0.35).toFixed(2)),
          (D = ((parseFloat(h) - 231250) * 0.35 + 52832).toFixed(2))),
        parseFloat(h) > 578125 &&
          ((N = (parseFloat(A) * -0.37).toFixed(2)),
          (D = ((parseFloat(h) - 578125) * 0.37 + 174238.25).toFixed(2)))),
      o === "Married filing seperately" &&
        (parseFloat(h) <= 11e3 &&
          ((N = (parseFloat(A) * -0.1).toFixed(2)),
          (D = (parseFloat(h) * 0.1).toFixed(2))),
        parseFloat(h) > 11e3 &&
          parseFloat(h) <= 44725 &&
          ((N = (parseFloat(A) * -0.12).toFixed(2)),
          (D = ((parseFloat(h) - 11e3) * 0.12 + 1100).toFixed(2))),
        parseFloat(h) > 44725 &&
          parseFloat(h) <= 95375 &&
          ((N = (parseFloat(A) * -0.22).toFixed(2)),
          (D = ((parseFloat(h) - 44725) * 0.22 + 5147).toFixed(2))),
        parseFloat(h) > 95375 &&
          parseFloat(h) <= 182100 &&
          ((N = (parseFloat(A) * -0.24).toFixed(2)),
          (D = ((parseFloat(h) - 95375) * 0.24 + 16290).toFixed(2))),
        parseFloat(h) > 182100 &&
          parseFloat(h) <= 231250 &&
          ((N = (parseFloat(A) * -0.32).toFixed(2)),
          (D = ((parseFloat(h) - 182100) * 0.32 + 37104).toFixed(2))),
        parseFloat(h) > 231250 &&
          parseFloat(h) <= 346875 &&
          ((N = (parseFloat(A) * -0.35).toFixed(2)),
          (D = ((parseFloat(h) - 231250) * 0.35 + 52832).toFixed(2))),
        parseFloat(h) > 346875 &&
          ((N = (parseFloat(A) * -0.37).toFixed(2)),
          (D = ((parseFloat(h) - 346875) * 0.37 + 93300.75).toFixed(2)))),
      o === "Head of House" &&
        (parseFloat(h) <= 15700 &&
          ((N = (parseFloat(A) * -0.1).toFixed(2)),
          (D = (parseFloat(h) * 0.1).toFixed(2))),
        parseFloat(h) > 15700 &&
          parseFloat(h) <= 59850 &&
          ((N = (parseFloat(A) * -0.12).toFixed(2)),
          (D = ((parseFloat(h) - 15700) * 0.12 + 1570).toFixed(2))),
        parseFloat(h) > 59850 &&
          parseFloat(h) <= 95350 &&
          ((N = (parseFloat(A) * -0.22).toFixed(2)),
          (D = ((parseFloat(h) - 59850) * 0.22 + 6868).toFixed(2))),
        parseFloat(h) > 95350 &&
          parseFloat(h) <= 182100 &&
          ((N = (parseFloat(A) * -0.24).toFixed(2)),
          (D = ((parseFloat(h) - 95350) * 0.24 + 14678).toFixed(2))),
        parseFloat(h) > 182100 &&
          parseFloat(h) <= 231250 &&
          ((N = (parseFloat(A) * -0.32).toFixed(2)),
          (D = ((parseFloat(h) - 182100) * 0.32 + 35498).toFixed(2))),
        parseFloat(h) > 231250 &&
          parseFloat(h) <= 578100 &&
          ((N = (parseFloat(A) * -0.35).toFixed(2)),
          (D = ((parseFloat(h) - 231250) * 0.35 + 51226).toFixed(2))),
        parseFloat(h) > 578100 &&
          ((N = (parseFloat(A) * -0.37).toFixed(2)),
          (D = ((parseFloat(h) - 578100) * 0.37 + 172623.5).toFixed(2)))),
      o === "Married" &&
        (parseFloat(h) <= 22e3 &&
          ((N = (parseFloat(A) * -0.1).toFixed(2)),
          (D = (parseFloat(h) * 0.1).toFixed(2))),
        parseFloat(h) > 22e3 &&
          parseFloat(h) <= 89450 &&
          ((N = (parseFloat(A) * -0.12).toFixed(2)),
          (D = ((parseFloat(h) - 22e3) * 0.12 + 2200).toFixed(2))),
        parseFloat(h) > 89450 &&
          parseFloat(h) <= 190750 &&
          ((N = (parseFloat(A) * -0.22).toFixed(2)),
          (D = ((parseFloat(h) - 89450) * 0.22 + 10294).toFixed(2))),
        parseFloat(h) > 190750 &&
          parseFloat(h) <= 364200 &&
          ((N = (parseFloat(A) * -0.24).toFixed(2)),
          (D = ((parseFloat(h) - 190750) * 0.24 + 32580).toFixed(2))),
        parseFloat(h) > 364200 &&
          parseFloat(h) <= 462500 &&
          ((N = (parseFloat(A) * -0.32).toFixed(2)),
          (D = ((parseFloat(h) - 364200) * 0.32 + 74208).toFixed(2))),
        parseFloat(h) > 462500 &&
          parseFloat(h) <= 693750 &&
          ((N = (parseFloat(A) * -0.35).toFixed(2)),
          (D = ((parseFloat(h) - 462500) * 0.35 + 105664).toFixed(2))),
        parseFloat(h) > 693750 &&
          ((N = (parseFloat(A) * -0.37).toFixed(2)),
          (D = ((parseFloat(h) - 693750) * 0.37 + 186601.5).toFixed(2)))))
    : (N = 0),
    a !== void 0 && (a = a.toUpperCase());
  let le, ee;
  o === "Married" && u !== "Tax Blocked" && u !== void 0
    ? (parseFloat(h) <= 1e3 &&
        ((le = (parseFloat(A) * -0.01).toFixed(2)),
        (ee = (parseFloat(h) * 0.01).toFixed(2))),
      parseFloat(h) > 1e3 &&
        parseFloat(h) <= 3e3 &&
        ((le = (parseFloat(A) * -0.02).toFixed(2)),
        (ee = (parseFloat(h) * 0.02).toFixed(2))),
      parseFloat(h) > 3e3 &&
        parseFloat(h) <= 5e3 &&
        ((le = (parseFloat(A) * -0.03).toFixed(2)),
        (ee = (parseFloat(h) * 0.03).toFixed(2))),
      parseFloat(h) > 5e3 &&
        parseFloat(h) <= 7e3 &&
        ((le = (parseFloat(A) * -0.04).toFixed(2)),
        (ee = (parseFloat(h) * 0.04).toFixed(2))),
      parseFloat(h) > 7e3 &&
        parseFloat(h) <= 1e4 &&
        ((le = (parseFloat(A) * -0.05).toFixed(2)),
        (ee = (parseFloat(h) * 0.05).toFixed(2))),
      parseFloat(h) > 1e4 &&
        ((le = (parseFloat(A) * -0.0575).toFixed(2)),
        (ee = (parseFloat(h) * 0.0575).toFixed(2))))
    : u !== void 0 &&
      u !== "Tax Blocked" &&
      (parseFloat(h) <= 750 &&
        ((le = (parseFloat(A) * -0.01).toFixed(2)),
        (ee = (parseFloat(h) * 0.01).toFixed(2))),
      parseFloat(h) > 750 &&
        parseFloat(h) <= 2250 &&
        ((le = (parseFloat(A) * -0.02).toFixed(2)),
        (ee = (parseFloat(h) * 0.02).toFixed(2))),
      parseFloat(h) > 2250 &&
        parseFloat(h) <= 3750 &&
        ((le = (parseFloat(A) * -0.03).toFixed(2)),
        (ee = (parseFloat(h) * 0.03).toFixed(2))),
      parseFloat(h) > 3750 &&
        parseFloat(h) <= 5250 &&
        ((le = (parseFloat(A) * -0.04).toFixed(2)),
        (ee = (parseFloat(h) * 0.04).toFixed(2))),
      parseFloat(h) > 5250 &&
        parseFloat(h) <= 7e3 &&
        ((le = (parseFloat(A) * -0.05).toFixed(2)),
        (ee = (parseFloat(h) * 0.05).toFixed(2))),
      parseFloat(h) > 7e3 &&
        ((le = (parseFloat(A) * -0.0575).toFixed(2)),
        (ee = (parseFloat(h) * 0.0575).toFixed(2))));
  let xt = (
    parseFloat(A) +
    parseFloat(q) +
    parseFloat(fe) +
    parseFloat(le) +
    parseFloat(N)
  ).toFixed(2);
  const E = (C) => {
    const [P, W] = r(C);
    P.addEventListener("change", (J) => {
      l({
        type: "txt",
        payload: J.target.value,
        cat: "payInfo",
        key: J.target.id,
      }),
        W.removeChild(P);
    });
  };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9.5pt",
          left: ".285in",
          top: "2.57in",
        },
        children: "Regular",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9.5pt",
          right: "6.48in",
          top: "2.57in",
        },
        className: "edit",
        onClick: E,
        id: "rate",
        children: f,
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9.5pt",
          right: "5.86in",
          top: "2.57in",
        },
        className: "edit",
        onClick: E,
        id: "hours",
        children: v,
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9.5pt",
          right: "4.95in",
          top: "2.57in",
        },
        id: "regPayThisPeriod",
        children: x,
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontWeight: "bold",
          fontSize: "7pt",
          left: "1.815in",
          top: "2.46in",
        },
        id: "rateTxt",
        children: "rate",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontWeight: "bold",
          fontSize: "7pt",
          left: "2.35in",
          top: "2.46in",
        },
        id: "by",
        children: g,
      }),
      s.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 2.75 + parseFloat(y) + "in",
          fontWeight: "bold",
        },
        id: "grossPay",
        children: ["$", A],
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: 2.75 + parseFloat(y) + "in",
        },
        id: "grossYTD",
        children: h,
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: "2.58in",
        },
        className: "edit",
        onClick: E,
        id: "regYTD",
        children: w,
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: "3.33in",
        },
        children: "Social Security Tax",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: "3.495in",
        },
        children: "Medicare Tax",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: 3.9 + m + d + "in",
        },
        children: "Checking Acct 1",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: "3.33in",
        },
        id: "ssTax",
        children: q,
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: "3.495in",
        },
        id: "medTax",
        children: fe,
      }),
      s.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 3.9 + m + d + "in",
        },
        id: "paidAmount",
        children: ["-", xt],
      }),
      s.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 3.72 + m + d + "in",
          fontWeight: "bold",
        },
        id: "netPay",
        children: ["$", xt],
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 4.135 + m + d + "in",
          fontWeight: "bold",
        },
        children: "$0.00",
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: "3.338in",
        },
        id: "ssTaxYTD",
        children: z,
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: "3.5in",
        },
        id: "medTaxYTD",
        children: At,
      }),
      s.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: ".348in",
          top: "8.938in",
        },
        id: "chckAmount",
        children: ["$", xt],
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "1.29in",
          top: "7.94in",
          fontWeight: "bold",
        },
        id: "adviceNum",
        children: "00000497754",
      }),
      s.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.45in",
          top: 4.55 + m + d + "in",
        },
        id: "taxableWageSen",
        children: ["Your federal taxable wages this period are $", A],
      }),
      s.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "8pt",
          left: "4.865in",
          top: "8.965in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        },
        id: "accountNum",
        children: "xxxxxxxx8630",
      }),
      parseFloat(y) !== 0 && y !== void 0
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9.5pt",
                  left: ".285in",
                  top: 2.57 + y + "in",
                },
                children: "Overtime",
              }),
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9.5pt",
                  right: "6.48in",
                  top: 2.57 + y + "in",
                },
                id: "otRate",
                children: F,
              }),
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9.5pt",
                  right: "5.86in",
                  top: 2.57 + y + "in",
                },
                className: "edit",
                onClick: E,
                id: "otHrs",
                children: c,
              }),
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9.5pt",
                  right: "4.95in",
                  top: 2.57 + y + "in",
                },
                id: "otThisPeriod",
                children: R,
              }),
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  right: "3.83in",
                  top: 2.58 + y + "in",
                },
                className: "edit",
                onClick: E,
                id: "otYTD",
                children: L,
              }),
            ],
          })
        : null,
      m !== 0 && m !== void 0
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  left: "1.31in",
                  top: 3.66 + d + "in",
                },
                id: "stateTaxTxt",
                children:
                  a !== void 0
                    ? a + " State Income Tax"
                    : "GA State Income Tax",
              }),
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  right: "4.95in",
                  top: 3.66 + d + "in",
                },
                id: "stateTax",
                children: le,
              }),
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  right: "3.83in",
                  top: 3.67 + d + "in",
                },
                id: "stateTaxYTD",
                children: ee,
              }),
            ],
          })
        : null,
      d !== 0 && d !== void 0
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  left: "1.31in",
                  top: 3.67 + "in",
                },
                id: "fedTaxTxt",
                children: "Federal Income Tax",
              }),
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  right: "4.95in",
                  top: 3.67 + "in",
                },
                id: "fedTax",
                children: N,
              }),
              s.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  right: "3.83in",
                  top: 3.67 + "in",
                },
                id: "fedTaxYTD",
                children: D,
              }),
            ],
          })
        : null,
    ],
  });
}
function od({ handleEdit: e, state: t, dispatch: n }) {
  const { employee: r, employer: l, taxInfo: o, payInfo: i, pos: u } = t;
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      id: "stubContainer",
      className: "stubContainer",
      style: {
        width: "8.5in",
        height: "11in",
        position: "absolute",
        margin: 0,
        padding: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      children: [
        s.jsx(ef, { pos: u }),
        s.jsx(lf, {}),
        s.jsx(rf, { employer: l, handleEdit: e, dispatch: n }),
        s.jsx(tf, { handleEdit: e }),
        s.jsx(of, { taxInfo: o, handleEdit: e, dispatch: n }),
        s.jsx(nf, { employee: r, handleEdit: e, dispatch: n }),
        s.jsx(uf, {
          taxInfo: o,
          payInfo: i,
          pos: u,
          handleEdit: e,
          dispatch: n,
        }),
      ],
    }),
  });
}
function af({ handleEdit: e, state: t, onSubmit: n, dispatch: r, pos: l }) {
  const { statePos: o, fedPos: i, otPos: u } = l,
    a = (f) => {
      switch (f.target.id) {
        case "employeeName":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employee",
            key: f.target.name,
          });
          break;
        case "employeeAddress":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employee",
            key: f.target.name,
          });
          break;
        case "employeeApt":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employee",
            key: f.target.name,
          });
          break;
        case "employeeCity":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employee",
            key: f.target.name,
          });
          break;
        case "employeeState":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employee",
            key: f.target.name,
          }),
            r({
              type: "txt",
              payload: f.target.value,
              cat: "taxInfo",
              key: "stateTaxed",
            });
          break;
        case "employeeZip":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employee",
            key: f.target.name,
          });
          break;
        case "employerName":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employer",
            key: f.target.name,
          });
          break;
        case "employerAddress":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employer",
            key: f.target.name,
          });
          break;
        case "employerApt":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employer",
            key: f.target.name,
          });
          break;
        case "employerCity":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employer",
            key: f.target.name,
          });
          break;
        case "employerState":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employer",
            key: f.target.name,
          });
          break;
        case "employerZip":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "employer",
            key: f.target.name,
          });
          break;
        case "filingStatus":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "taxInfo",
            key: f.target.name,
          });
          break;
        case "fedExemptions":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "taxInfo",
            key: f.target.name,
          }),
            f.target.value !== "Tax Blocked" && f.target.value !== void 0
              ? r({ type: "txt", cat: "pos", key: "fedPos", payload: 0.2 })
              : r({ type: "txt", cat: "pos", key: "fedPos", payload: 0 });
          break;
        case "stateExemptions":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "taxInfo",
            key: f.target.name,
          }),
            f.target.value !== "Tax Blocked" && f.target.value !== void 0
              ? r({ type: "txt", cat: "pos", key: "statePos", payload: 0.2 })
              : r({ type: "txt", cat: "pos", key: "statePos", payload: 0 });
          break;
        case "payRate":
          r({
            type: "txt",
            payload: parseFloat(parseFloat(f.target.value) * 1.5),
            cat: "payInfo",
            key: "otRate",
          }),
            r({
              type: "txt",
              payload: f.target.value,
              cat: "payInfo",
              key: "rate",
            });
          break;
        case "paySchedule":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "payInfo",
            key: f.target.name,
          });
          break;
        case "paidBy":
          r({
            type: "txt",
            payload: f.target.value,
            cat: "payInfo",
            key: f.target.name,
          });
          break;
        case "minGross":
          if (
            (r({
              type: "txt",
              payload: f.target.value,
              cat: "payInfo",
              key: f.target.name,
            }),
            f.target.value !== void 0 && t.payInfo.by === "hours")
          ) {
            let v = parseFloat(f.target.value) / parseFloat(t.payInfo.rate),
              c,
              g;
            t.payInfo.sched === "1" &&
              (parseFloat(v) > 40 &&
                (r({ type: "txt", payload: 40, cat: "payInfo", key: "hours" }),
                console.log(v),
                (c =
                  ((parseFloat(v) - 40) * parseFloat(t.payInfo.rate)) /
                  parseFloat(t.payInfo.otRate)),
                c <= 26 &&
                  ((g = c * 1.5),
                  r({
                    type: "txt",
                    payload: (Math.random() * (g - c) + c).toFixed(2),
                    cat: "payInfo",
                    key: "otHrs",
                  })),
                c > 26 &&
                  c <= 28 &&
                  ((g = c * 1.4),
                  r({
                    type: "txt",
                    cat: "payInfo",
                    key: "otHrs",
                    payload: (Math.random() * (g - c) + c).toFixed(2),
                  })),
                c > 28 &&
                  c <= 30 &&
                  ((g = c * 1.3),
                  r({
                    type: "txt",
                    cat: "payInfo",
                    key: "otHrs",
                    payload: (Math.random() * (g - c) + c).toFixed(2),
                  })),
                c > 30 &&
                  c <= 33 &&
                  ((g = c * 1.2),
                  r({
                    type: "txt",
                    cat: "payInfo",
                    key: "otHrs",
                    payload: (Math.random() * (g - c) + c).toFixed(2),
                  })),
                c > 33 &&
                  c <= 36 &&
                  ((g = c * 1.1),
                  r({
                    type: "txt",
                    cat: "payInfo",
                    key: "otHrs",
                    payload: (Math.random() * (g - c) + c).toFixed(2),
                  })),
                c > 36 &&
                  c <= 40 &&
                  r({
                    type: "txt",
                    cat: "payInfo",
                    key: "otHrs",
                    payload: (Math.random() * (40 - c) + c).toFixed(2),
                  }),
                r({ type: "txt", cat: "pos", key: "otPos", payload: 0.15 })),
              parseFloat(v) < 40 &&
                (r({
                  type: "txt",
                  cat: "payInfo",
                  key: "hours",
                  payload: parseFloat(v).toFixed(2),
                }),
                r({ type: "txt", cat: "pos", key: "otPos", payload: 0 }))),
              t.payInfo.sched === "2" &&
                (parseFloat(v) > 80 &&
                  (r({
                    type: "txt",
                    cat: "payInfo",
                    key: "hours",
                    payload: 80,
                  }),
                  (c =
                    ((parseFloat(v) - 80) * parseFloat(t.payInfo.rate)) /
                    parseFloat(t.payInfo.otRate)),
                  c <= 52 &&
                    ((g = c * 1.5),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (g - c) + c).toFixed(2),
                    })),
                  c > 52 &&
                    c <= 56 &&
                    ((g = c * 1.4),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (g - c) + c).toFixed(2),
                    })),
                  c > 56 &&
                    c <= 60 &&
                    ((g = c * 1.3),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (g - c) + c).toFixed(2),
                    })),
                  c > 60 &&
                    c <= 66 &&
                    ((g = c * 1.2),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (g - c) + c).toFixed(2),
                    })),
                  c > 66 &&
                    c <= 72 &&
                    ((g = c * 1.1),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (g - c) + c).toFixed(2),
                    })),
                  c > 72 &&
                    c <= 80 &&
                    ((g = 80),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (g - c) + c).toFixed(2),
                    })),
                  r({ type: "txt", cat: "pos", key: "otPos", payload: 0.15 })),
                parseFloat(v) < 80 &&
                  (r({
                    type: "txt",
                    cat: "payInfo",
                    key: "hours",
                    payload: parseFloat(v).toFixed(2),
                  }),
                  r({ type: "txt", cat: "pos", key: "otPos", payload: 0 })));
          }
          break;
      }
    },
    p = (f) => {
      f.preventDefault(), console.log(f);
      const v = {
        employee: {
          name: t.employee.name,
          address: t.employee.address,
          apt: t.employee.apt,
          city: t.employee.city,
          state: t.employee.state,
          zip: t.employee.zip,
        },
        employer: {
          name: t.employer.name,
          address: t.employer.address,
          apt: t.employer.apt,
          city: t.employer.city,
          state: t.employer.state,
          zip: t.employer.zip,
        },
        taxInfo: {
          status: t.taxInfo.status,
          fed: t.taxInfo.fed,
          state: t.taxInfo.state,
          stateTaxed: t.employee.state,
        },
        payInfo: {
          sched: t.payInfo.sched,
          rate: t.payInfo.rate,
          otRate: t.payInfo.otRate,
          hours: t.payInfo.hours,
          otHrs: t.payInfo.otHrs,
          by: t.payInfo.by,
          minGross: t.payInfo.minGross,
          regYTD: 431.68,
          otYTD: 431.68,
        },
        pos: { statePos: o, fedPos: i, otPos: u },
      };
      console.log(v), n(v);
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsxs("form", {
        onSubmit: p,
        children: [
          s.jsx("div", {
            className: "form-row",
            children: s.jsx("h2", { children: "Employee Info:" }),
          }),
          s.jsx("div", {
            className: "form-row",
            children: s.jsx("input", {
              onChange: a,
              autoComplete: "name",
              type: "text",
              required: !0,
              cat: "employee",
              name: "name",
              id: "employeeName",
              placeholder: "Name",
              value: t.employee.name,
            }),
          }),
          s.jsxs("div", {
            className: "form-row",
            children: [
              s.jsx("input", {
                onChange: a,
                autoComplete: "address-line1",
                type: "text",
                required: !0,
                cat: "employee",
                name: "address",
                id: "employeeAddress",
                placeholder: "Address",
                value: t.employee.address,
              }),
              s.jsx("input", {
                onChange: a,
                autoComplete: "address-line2",
                placeholder: "Apt",
                type: "text",
                cat: "employee",
                name: "apt",
                id: "employeeApt",
                value: t.employee.apt,
              }),
            ],
          }),
          s.jsxs("div", {
            className: "form-row",
            children: [
              s.jsx("input", {
                onChange: a,
                autoComplete: "address-level2",
                type: "text",
                required: !0,
                cat: "employee",
                name: "city",
                id: "employeeCity",
                placeholder: "City",
                value: t.employee.city,
              }),
              s.jsx("input", {
                onChange: a,
                autoComplete: "address-level1",
                type: "text",
                required: !0,
                cat: "employee",
                name: "state",
                id: "employeeState",
                placeholder: "State",
                value: t.employee.state,
              }),
              s.jsx("input", {
                onChange: a,
                autoComplete: "postal-code",
                type: "text",
                required: !0,
                cat: "employee",
                name: "zip",
                id: "employeeZip",
                placeholder: "Zip",
                value: t.employee.zip,
              }),
            ],
          }),
          s.jsx("div", {
            className: "form-row",
            children: s.jsx("h2", { children: "Employer Info:" }),
          }),
          s.jsx("div", {
            className: "form-row",
            children: s.jsx("input", {
              onChange: a,
              autoComplete: "organization",
              type: "text",
              required: !0,
              cat: "employer",
              name: "name",
              id: "employerName",
              placeholder: "Name",
              value: t.employer.name,
            }),
          }),
          s.jsxs("div", {
            className: "form-row",
            children: [
              s.jsx("input", {
                onChange: a,
                autoComplete: "address-line1",
                type: "text",
                required: !0,
                cat: "employer",
                name: "address",
                id: "employerAddress",
                placeholder: "Address",
                value: t.employer.address,
              }),
              s.jsx("input", {
                onChange: a,
                autoComplete: "address-line2",
                type: "text",
                cat: "employer",
                name: "apt",
                id: "employerApt",
                placeholder: "ATTN/Suite",
                value: t.employer.apt,
              }),
            ],
          }),
          s.jsxs("div", {
            className: "form-row",
            children: [
              s.jsx("input", {
                onChange: a,
                autoComplete: "address-level2",
                type: "text",
                required: !0,
                cat: "employer",
                name: "city",
                id: "employerCity",
                placeholder: "City",
                value: t.employer.city,
              }),
              s.jsx("input", {
                onChange: a,
                autoComplete: "address-level1",
                type: "text",
                required: !0,
                cat: "employer",
                name: "state",
                id: "employerState",
                placeholder: "State",
                value: t.employer.state,
              }),
              s.jsx("input", {
                onChange: a,
                autoComplete: "postal-code",
                type: "text",
                required: !0,
                cat: "employer",
                name: "zip",
                id: "employerZip",
                placeholder: "Zip",
                value: t.employer.zip,
              }),
            ],
          }),
          s.jsx("div", {
            className: "form-row",
            children: s.jsx("h2", { children: "Tax Info:" }),
          }),
          s.jsxs("div", {
            className: "form-row",
            children: [
              s.jsxs("select", {
                value: t.taxInfo.status,
                onChange: a,
                cat: "taxInfo",
                name: "status",
                id: "filingStatus",
                required: !0,
                style: { width: "33.3%" },
                children: [
                  s.jsx("option", { hidden: !0, children: "Filing Status:" }),
                  s.jsx("option", { value: "Single", children: "Single" }),
                  s.jsx("option", {
                    value: "Married filing seperately",
                    children: "Married filing seperately",
                  }),
                  s.jsx("option", {
                    value: "Married",
                    children: "Married filing jointly",
                  }),
                  s.jsx("option", {
                    value: "Head of House",
                    children: "Head of house",
                  }),
                ],
              }),
              s.jsxs("select", {
                value: t.taxInfo.fed,
                cat: "taxInfo",
                name: "fed",
                id: "fedExemptions",
                required: !0,
                style: { width: "33.3%" },
                onChange: a,
                children: [
                  s.jsx("option", {
                    hidden: !0,
                    children: "Federal Exemptions:",
                  }),
                  s.jsx("option", { value: "Tax Blocked", children: "Exempt" }),
                  s.jsx("option", { value: "0", children: "0" }),
                  s.jsx("option", { value: "1", children: "1" }),
                  s.jsx("option", { value: "2", children: "2" }),
                  s.jsx("option", { value: "3", children: "3" }),
                  s.jsx("option", { value: "4", children: "4" }),
                  s.jsx("option", { value: "5", children: "5" }),
                ],
              }),
              s.jsxs("select", {
                value: t.taxInfo.state,
                onChange: a,
                cat: "taxInfo",
                name: "state",
                id: "stateExemptions",
                required: !0,
                style: { width: "33.3%" },
                children: [
                  s.jsx("option", {
                    hidden: !0,
                    children: "State Exemptions:",
                  }),
                  s.jsx("option", { value: "Tax Blocked", children: "Exempt" }),
                  s.jsx("option", { value: "0", children: "0" }),
                  s.jsx("option", { value: "1", children: "1" }),
                  s.jsx("option", { value: "2", children: "2" }),
                  s.jsx("option", { value: "3", children: "3" }),
                  s.jsx("option", { value: "4", children: "4" }),
                  s.jsx("option", { value: "5", children: "5" }),
                ],
              }),
            ],
          }),
          s.jsx("div", {
            className: "form-row",
            children: s.jsx("h2", { children: "Pay Info:" }),
          }),
          s.jsxs("div", {
            className: "form-row",
            children: [
              s.jsxs("select", {
                value: t.payInfo.sched,
                onChange: a,
                id: "paySchedule",
                name: "sched",
                required: !0,
                style: { width: "33.3%" },
                children: [
                  s.jsx("option", { hidden: !0, children: "Pay Schedule:" }),
                  s.jsx("option", { value: "1", children: "Weekly" }),
                  s.jsx("option", { value: "2", children: "Bi-Weekly" }),
                ],
              }),
              s.jsx("input", {
                onChange: a,
                name: "rate",
                required: !0,
                id: "payRate",
                placeholder: "Pay rate",
                type: "text",
                value: t.payInfo.rate,
              }),
              s.jsxs("select", {
                value: t.payInfo.by,
                onChange: a,
                name: "by",
                id: "paidBy",
                required: !0,
                style: { width: "33.3%" },
                children: [
                  s.jsx("option", { hidden: !0, children: "Paid by:" }),
                  s.jsx("option", { value: "hours", children: "Hour" }),
                ],
              }),
              s.jsx("input", {
                onChange: a,
                required: !0,
                id: "minGross",
                placeholder: "Min Gross",
                type: "text",
                name: "minGross",
                value: t.payInfo.minGross,
              }),
            ],
          }),
          s.jsx("button", { type: "submit", children: "Preview" }),
        ],
      }),
      s.jsx(Ip, {
        children: s.jsx(od, { handleEdit: e, state: t, dispatch: r }),
      }),
    ],
  });
}
const sf = (e, t) => {
    switch (t.type) {
      case "txt":
        return { ...e, [t.cat]: { ...e[t.cat], [t.key]: t.payload } };
    }
  },
  df = {
    employee: { name: "", address: "", apt: "", city: "", state: "", zip: "" },
    employer: { name: "", address: "", apt: "", city: "", state: "", zip: "" },
    taxInfo: { status: "", fed: "", state: "", stateTaxed: "" },
    payInfo: {
      sched: "",
      rate: "",
      otRate: "",
      hours: "",
      otHrs: "",
      by: "",
      minGross: "",
      regYTD: "",
      otYTD: "",
    },
    pos: { statePos: 0, fedPos: 0, otPos: 0 },
  },
  cf = {
    employee: {
      name: "John Doe",
      address: "110 Main Street",
      apt: "Apt 216",
      city: "atlanta",
      state: "ga",
      zip: "51627",
    },
    employer: {
      name: "cis services llc",
      address: "4300 Pleasantdale Road",
      apt: "ATTN: Payroll",
      city: "birmingham",
      state: "al",
      zip: "64835",
    },
    taxInfo: {
      status: "Married filing seperately",
      fed: "0",
      state: "0",
      stateTaxed: "GA",
    },
    payInfo: {
      sched: "1",
      rate: 15.5,
      otRate: 15.5 * 1.5,
      hours: 40,
      otHrs: 7.39,
      by: "hours",
      minGross: 0,
      regYTD: 431.68,
      otYTD: 431.68,
    },
    pos: { statePos: 0.2, fedPos: 0.2, otPos: 0.15 },
  };
function pf() {
  const [e, t] = Dn.useState(!1),
    n = e ? cf : df,
    [r, l] = Dn.useReducer(sf, n),
    o = (u) => {
      const { employee: a, employer: p, taxInfo: f, payInfo: v, pos: c } = u;
      l({
        type: "txt",
        cat: "employee",
        key: "name",
        payload: u.employee.name,
      }),
        l({
          type: "txt",
          cat: "employee",
          key: "address",
          payload: u.employee.address,
        }),
        l({
          type: "txt",
          cat: "employee",
          key: "apt",
          payload: u.employee.apt,
        }),
        l({
          type: "txt",
          cat: "employee",
          key: "city",
          payload: u.employee.city,
        }),
        l({
          type: "txt",
          cat: "employee",
          key: "state",
          payload: u.employee.state,
        }),
        l({
          type: "txt",
          cat: "employee",
          key: "zip",
          payload: u.employee.zip,
        }),
        l({
          type: "txt",
          cat: "employer",
          key: "name",
          payload: u.employer.name,
        }),
        l({
          type: "txt",
          cat: "employer",
          key: "address",
          payload: u.employer.address,
        }),
        l({
          type: "txt",
          cat: "employer",
          key: "apt",
          payload: u.employer.apt,
        }),
        l({
          type: "txt",
          cat: "employer",
          key: "city",
          payload: u.employer.city,
        }),
        l({
          type: "txt",
          cat: "employer",
          key: "state",
          payload: u.employer.state,
        }),
        l({
          type: "txt",
          cat: "employer",
          key: "zip",
          payload: u.employer.zip,
        }),
        l({
          type: "txt",
          cat: "taxInfo",
          key: "status",
          payload: u.taxInfo.status,
        }),
        l({ type: "txt", cat: "taxInfo", key: "fed", payload: u.taxInfo.fed }),
        l({
          type: "txt",
          cat: "taxInfo",
          key: "state",
          payload: u.taxInfo.state,
        }),
        l({
          type: "txt",
          cat: "taxInfo",
          key: "stateTaxed",
          payload: u.taxInfo.stateTaxed,
        }),
        l({ type: "txt", cat: "payInfo", key: "sched", payload: v.sched }),
        l({ type: "txt", cat: "payInfo", key: "rate", payload: v.rate }),
        l({ type: "txt", cat: "payInfo", key: "hours", payload: v.hours }),
        l({ type: "txt", cat: "payInfo", key: "otHrs", payload: v.otHrs }),
        l({ type: "txt", cat: "payInfo", key: "by", payload: v.by }),
        l({
          type: "txt",
          cat: "payInfo",
          key: "minGross",
          payload: v.minGross,
        }),
        l({ type: "txt", cat: "payInfo", key: "regYTD", payload: v.regYTD }),
        l({ type: "txt", cat: "payInfo", key: "otYTD", payload: v.otYTD }),
        l({ type: "txt", cat: "pos", key: "statePos", payload: c.statePos }),
        l({ type: "txt", cat: "pos", key: "fedPos", payload: c.fedPos }),
        l({ type: "txt", cat: "pos", key: "otPos", payload: c.otPos }),
        t(!0);
    },
    i = (u) => {
      let a = document.createElement("input");
      (a.value = u.target.innerText),
        (a.id = u.target.id),
        (a.style.position = u.target.style.position),
        (a.style.height = ".08in"),
        (a.style.top =
          parseFloat(u.target.style.top) +
          parseFloat(a.style.height) * 2 +
          "in"),
        (a.style.left = u.target.style.left),
        (a.style.right = u.target.style.right),
        (a.style.width = u.target.style.width);
      const p = document.getElementById("stubContainer");
      return p.appendChild(a), a.focus(), [a, p];
    };
  return s.jsx(s.Fragment, {
    children: e
      ? s.jsx(od, { handleEdit: i, state: r, dispatch: l })
      : s.jsx(af, {
          handleEdit: i,
          state: r,
          onSubmit: o,
          dispatch: l,
          pos: r.pos,
        }),
  });
}
Gl.createRoot(document.getElementById("root")).render(
  s.jsx(kd.StrictMode, { children: s.jsx(pf, {}) })
);
