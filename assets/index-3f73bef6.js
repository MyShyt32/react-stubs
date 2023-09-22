(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function od(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Zu = { exports: {} },
  il = {},
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
  fd = Symbol.for("react.context"),
  pd = Symbol.for("react.forward_ref"),
  md = Symbol.for("react.suspense"),
  hd = Symbol.for("react.memo"),
  yd = Symbol.for("react.lazy"),
  Lo = Symbol.iterator;
function vd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lo && e[Lo]) || e["@@iterator"]),
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
function Wi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _u),
    (this.updater = n || Gu);
}
var Bi = (Wi.prototype = new Ku());
Bi.constructor = Wi;
Yu(Bi, dn.prototype);
Bi.isPureReactComponent = !0;
var Mo = Array.isArray,
  bu = Object.prototype.hasOwnProperty,
  Hi = { current: null },
  $u = { key: !0, ref: !0, __self: !0, __source: !0 };
function ea(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      bu.call(t, r) && !$u.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: bn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Hi.current,
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
function Xi(e) {
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
var Vo = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ad("" + e.key)
    : t.toString(36);
}
function wr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case bn:
          case ud:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + kl(o, 0) : r),
      Mo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Vo, "$&/") + "/"),
          wr(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Xi(l) &&
            (l = gd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Vo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Mo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + kl(i, u);
      o += wr(i, t, n, a, l);
    }
  else if (((a = vd(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + kl(i, u++)), (o += wr(i, t, n, a, l));
  else if (i === "object")
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
  return o;
}
function ir(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
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
    ReactCurrentOwner: Hi,
  };
T.Children = {
  map: ir,
  forEach: function (e, t, n) {
    ir(
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
      ir(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ir(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = dn;
T.Fragment = ad;
T.Profiler = dd;
T.PureComponent = Wi;
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
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Hi.current)),
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
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: bn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: fd,
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
  return { $$typeof: pd, render: e };
};
T.isValidElement = Xi;
T.lazy = function (e) {
  return { $$typeof: yd, _payload: { _status: -1, _result: e }, _init: xd };
};
T.memo = function (e, t) {
  return { $$typeof: hd, type: e, compare: t === void 0 ? null : t };
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
var In = Ju.exports;
const kd = od(In);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd = In,
  Ed = Symbol.for("react.element"),
  Fd = Symbol.for("react.fragment"),
  jd = Object.prototype.hasOwnProperty,
  Cd = wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ta(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) jd.call(t, r) && !Rd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ed,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Cd.current,
  };
}
il.Fragment = Fd;
il.jsx = ta;
il.jsxs = ta;
Zu.exports = il;
var d = Zu.exports,
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
  function t(E, R) {
    var P = E.length;
    E.push(R);
    e: for (; 0 < P; ) {
      var B = (P - 1) >>> 1,
        J = E[B];
      if (0 < l(J, R)) (E[B] = R), (E[P] = J), (P = B);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var R = E[0],
      P = E.pop();
    if (P !== R) {
      E[0] = P;
      e: for (var B = 0, J = E.length, rr = J >>> 1; B < rr; ) {
        var St = 2 * (B + 1) - 1,
          Sl = E[St],
          kt = St + 1,
          lr = E[kt];
        if (0 > l(Sl, P))
          kt < J && 0 > l(lr, Sl)
            ? ((E[B] = lr), (E[kt] = P), (B = kt))
            : ((E[B] = Sl), (E[St] = P), (B = St));
        else if (kt < J && 0 > l(lr, P)) (E[B] = lr), (E[kt] = P), (B = kt);
        else break e;
      }
    }
    return R;
  }
  function l(E, R) {
    var P = E.sortIndex - R.sortIndex;
    return P !== 0 ? P : E.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    s = [],
    h = 1,
    v = null,
    y = 3,
    S = !1,
    k = !1,
    w = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var R = n(s); R !== null; ) {
      if (R.callback === null) r(s);
      else if (R.startTime <= E)
        r(s), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(s);
    }
  }
  function A(E) {
    if (((w = !1), p(E), !k))
      if (n(a) !== null) (k = !0), b(F);
      else {
        var R = n(s);
        R !== null && xt(A, R.startTime - E);
      }
  }
  function F(E, R) {
    (k = !1), w && ((w = !1), f(m), (m = -1)), (S = !0);
    var P = y;
    try {
      for (
        p(R), v = n(a);
        v !== null && (!(v.expirationTime > R) || (E && !pe()));

      ) {
        var B = v.callback;
        if (typeof B == "function") {
          (v.callback = null), (y = v.priorityLevel);
          var J = B(v.expirationTime <= R);
          (R = e.unstable_now()),
            typeof J == "function" ? (v.callback = J) : v === n(a) && r(a),
            p(R);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var rr = !0;
      else {
        var St = n(s);
        St !== null && xt(A, St.startTime - R), (rr = !1);
      }
      return rr;
    } finally {
      (v = null), (y = P), (S = !1);
    }
  }
  var C = !1,
    g = null,
    m = -1,
    q = 5,
    z = -1;
  function pe() {
    return !(e.unstable_now() - z < q);
  }
  function At() {
    if (g !== null) {
      var E = e.unstable_now();
      z = E;
      var R = !0;
      try {
        R = g(!0, E);
      } finally {
        R ? N() : ((C = !1), (g = null));
      }
    } else C = !1;
  }
  var N;
  if (typeof c == "function")
    N = function () {
      c(At);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      te = D.port2;
    (D.port1.onmessage = At),
      (N = function () {
        te.postMessage(null);
      });
  } else
    N = function () {
      L(At, 0);
    };
  function b(E) {
    (g = E), C || ((C = !0), N());
  }
  function xt(E, R) {
    m = L(function () {
      E(e.unstable_now());
    }, R);
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
      k || S || ((k = !0), b(F));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (q = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (E) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = y;
      }
      var P = y;
      y = R;
      try {
        return E();
      } finally {
        y = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, R) {
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
      var P = y;
      y = E;
      try {
        return R();
      } finally {
        y = P;
      }
    }),
    (e.unstable_scheduleCallback = function (E, R, P) {
      var B = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? B + P : B))
          : (P = B),
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
          id: h++,
          callback: R,
          priorityLevel: E,
          startTime: P,
          expirationTime: J,
          sortIndex: -1,
        }),
        P > B
          ? ((E.sortIndex = P),
            t(s, E),
            n(a) === null &&
              E === n(s) &&
              (w ? (f(m), (m = -1)) : (w = !0), xt(A, P - B)))
          : ((E.sortIndex = J), t(a, E), k || S || ((k = !0), b(F))),
        E
      );
    }),
    (e.unstable_shouldYield = pe),
    (e.unstable_wrapCallback = function (E) {
      var R = y;
      return function () {
        var P = y;
        y = R;
        try {
          return E.apply(this, arguments);
        } finally {
          y = P;
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
 */ var ia = In,
  ke = Pd;
function x(e) {
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
var oa = new Set(),
  On = {};
function Ot(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) oa.add(t[e]);
}
var Ge = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yl = Object.prototype.hasOwnProperty,
  zd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uo = {},
  qo = {};
function Nd(e) {
  return Yl.call(qo, e)
    ? !0
    : Yl.call(Uo, e)
    ? !1
    : zd.test(e)
    ? (qo[e] = !0)
    : ((Uo[e] = !0), !1);
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
function Dd(e, t, n, r) {
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
function fe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Zi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Zi);
    le[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Zi);
    le[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qi, Zi);
  le[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ji(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Dd(t, n, l, r) && (n = null),
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
var be = ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  or = Symbol.for("react.element"),
  Vt = Symbol.for("react.portal"),
  Ut = Symbol.for("react.fragment"),
  Gi = Symbol.for("react.strict_mode"),
  _l = Symbol.for("react.profiler"),
  ua = Symbol.for("react.provider"),
  aa = Symbol.for("react.context"),
  Yi = Symbol.for("react.forward_ref"),
  Kl = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  _i = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  sa = Symbol.for("react.offscreen"),
  Wo = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wo && e[Wo]) || e["@@iterator"]),
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
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Sn(e) : "";
}
function Id(e) {
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
    case Gi:
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
      case Yi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _i:
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
      return t === Gi ? "StrictMode" : "Mode";
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
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
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
function ei(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bo(e, t) {
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
function fa(e, t) {
  (t = t.checked), t != null && Ji(e, "checked", t, !1);
}
function ti(e, t) {
  fa(e, t);
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
    ? ni(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ni(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ho(e, t, n) {
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
function ni(e, t, n) {
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
function ri(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (kn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function pa(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Qo(e) {
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
function li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ma(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ar,
  ha = (function (e) {
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
function ya(e, t, n) {
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
        l = ya(n, t[n], r);
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
function ii(e, t) {
  if (t) {
    if (Vd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function oi(e, t) {
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
var ui = null;
function Ki(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ai = null,
  Kt = null,
  bt = null;
function Zo(e) {
  if ((e = tr(e))) {
    if (typeof ai != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = dl(t)), ai(e.stateNode, e.type, t));
  }
}
function ga(e) {
  Kt ? (bt ? bt.push(e) : (bt = [e])) : (Kt = e);
}
function Aa() {
  if (Kt) {
    var e = Kt,
      t = bt;
    if (((bt = Kt = null), Zo(e), t)) for (e = 0; e < t.length; e++) Zo(t[e]);
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
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var si = !1;
if (Ge)
  try {
    var mn = {};
    Object.defineProperty(mn, "passive", {
      get: function () {
        si = !0;
      },
    }),
      window.addEventListener("test", mn, mn),
      window.removeEventListener("test", mn, mn);
  } catch {
    si = !1;
  }
function Ud(e, t, n, r, l, i, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (h) {
    this.onError(h);
  }
}
var jn = !1,
  Lr = null,
  Mr = !1,
  di = null,
  qd = {
    onError: function (e) {
      (jn = !0), (Lr = e);
    },
  };
function Wd(e, t, n, r, l, i, o, u, a) {
  (jn = !1), (Lr = null), Ud.apply(qd, arguments);
}
function Bd(e, t, n, r, l, i, o, u, a) {
  if ((Wd.apply(this, arguments), jn)) {
    if (jn) {
      var s = Lr;
      (jn = !1), (Lr = null);
    } else throw Error(x(198));
    Mr || ((Mr = !0), (di = s));
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
function Jo(e) {
  if (Lt(e) !== e) throw Error(x(188));
}
function Hd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Lt(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Jo(l), e;
        if (i === r) return Jo(l), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Ea(e) {
  return (e = Hd(e)), e !== null ? Fa(e) : null;
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
  Go = ke.unstable_cancelCallback,
  Xd = ke.unstable_shouldYield,
  Qd = ke.unstable_requestPaint,
  G = ke.unstable_now,
  Zd = ke.unstable_getCurrentPriorityLevel,
  bi = ke.unstable_ImmediatePriority,
  Ca = ke.unstable_UserBlockingPriority,
  Vr = ke.unstable_NormalPriority,
  Jd = ke.unstable_LowPriority,
  Ra = ke.unstable_IdlePriority,
  ol = null,
  We = null;
function Gd(e) {
  if (We && typeof We.onCommitFiberRoot == "function")
    try {
      We.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
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
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = wn(u)) : ((i &= o), i !== 0 && (r = wn(i)));
  } else (o = n & ~l), o !== 0 ? (r = wn(o)) : i !== 0 && (r = wn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
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
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      a = l[o];
    a === -1
      ? (!(u & n) || u & r) && (l[o] = bd(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function ci(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Pa() {
  var e = sr;
  return (sr <<= 1), !(sr & 4194240) && (sr = 64), e;
}
function Cl(e) {
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
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function $i(e, t) {
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
  eo,
  Ta,
  Da,
  Ia,
  fi = !1,
  cr = [],
  ot = null,
  ut = null,
  at = null,
  Vn = new Map(),
  Un = new Map(),
  nt = [],
  tc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Yo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
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
function hn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = tr(t)), t !== null && eo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function nc(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = hn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (ut = hn(ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (at = hn(at, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Vn.set(i, hn(Vn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Un.set(i, hn(Un.get(i) || null, e, t, n, r, l)), !0
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
            Ia(e.priority, function () {
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
    var n = pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ui = r), n.target.dispatchEvent(r), (ui = null);
    } else return (t = tr(n)), t !== null && eo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _o(e, t, n) {
  Fr(e) && n.delete(t);
}
function rc() {
  (fi = !1),
    ot !== null && Fr(ot) && (ot = null),
    ut !== null && Fr(ut) && (ut = null),
    at !== null && Fr(at) && (at = null),
    Vn.forEach(_o),
    Un.forEach(_o);
}
function yn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fi ||
      ((fi = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, rc)));
}
function qn(e) {
  function t(l) {
    return yn(l, e);
  }
  if (0 < cr.length) {
    yn(cr[0], e);
    for (var n = 1; n < cr.length; n++) {
      var r = cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && yn(ot, e),
      ut !== null && yn(ut, e),
      at !== null && yn(at, e),
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
    i = $t.transition;
  $t.transition = null;
  try {
    (O = 1), to(e, t, n, r);
  } finally {
    (O = l), ($t.transition = i);
  }
}
function ic(e, t, n, r) {
  var l = O,
    i = $t.transition;
  $t.transition = null;
  try {
    (O = 4), to(e, t, n, r);
  } finally {
    (O = l), ($t.transition = i);
  }
}
function to(e, t, n, r) {
  if (qr) {
    var l = pi(e, t, n, r);
    if (l === null) Ml(e, t, r, Wr, n), Yo(e, r);
    else if (nc(l, e, t, n, r)) r.stopPropagation();
    else if ((Yo(e, r), t & 4 && -1 < tc.indexOf(e))) {
      for (; l !== null; ) {
        var i = tr(l);
        if (
          (i !== null && Na(i),
          (i = pi(e, t, n, r)),
          i === null && Ml(e, t, r, Wr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var Wr = null;
function pi(e, t, n, r) {
  if (((Wr = null), (e = Ki(r)), (e = Ft(e)), e !== null))
    if (((t = Lt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Wr = e), null;
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
        case bi:
          return 1;
        case Ca:
          return 4;
        case Vr:
        case Jd:
          return 16;
        case Ra:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var lt = null,
  no = null,
  jr = null;
function Ma() {
  if (jr) return jr;
  var e,
    t = no,
    n = t.length,
    r,
    l = "value" in lt ? lt.value : lt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Cr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fr() {
  return !0;
}
function Ko() {
  return !1;
}
function Ee(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? fr
        : Ko),
      (this.isPropagationStopped = Ko),
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
          (this.isDefaultPrevented = fr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fr));
      },
      persist: function () {},
      isPersistent: fr,
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
  ro = Ee(cn),
  er = Q({}, cn, { view: 0, detail: 0 }),
  oc = Ee(er),
  Rl,
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
    getModifierState: lo,
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
              ? ((Rl = e.screenX - vn.screenX), (Pl = e.screenY - vn.screenY))
              : (Pl = Rl = 0),
            (vn = e)),
          Rl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  bo = Ee(ul),
  uc = Q({}, ul, { dataTransfer: 0 }),
  ac = Ee(uc),
  sc = Q({}, er, { relatedTarget: 0 }),
  zl = Ee(sc),
  dc = Q({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cc = Ee(dc),
  fc = Q({}, cn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pc = Ee(fc),
  mc = Q({}, cn, { data: 0 }),
  $o = Ee(mc),
  hc = {
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
  yc = {
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
function lo() {
  return gc;
}
var Ac = Q({}, er, {
    key: function (e) {
      if (e.key) {
        var t = hc[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? yc[e.keyCode] || "Unidentified"
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
    getModifierState: lo,
    charCode: function (e) {
      return e.type === "keypress" ? Cr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cr(e)
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
    getModifierState: lo,
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
  Cc = Ee(jc),
  Rc = [9, 13, 27, 32],
  io = Ge && "CompositionEvent" in window,
  Cn = null;
Ge && "documentMode" in document && (Cn = document.documentMode);
var Pc = Ge && "TextEvent" in window && !Cn,
  Va = Ge && (!io || (Cn && 8 < Cn && 11 >= Cn)),
  tu = String.fromCharCode(32),
  nu = !1;
function Ua(e, t) {
  switch (e) {
    case "keyup":
      return Rc.indexOf(t.keyCode) !== -1;
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
    return e === "compositionend" || (!io && Ua(e, t))
      ? ((e = Ma()), (jr = no = lt = null), (qt = !1), e)
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
function Wa(e, t, n, r) {
  ga(r),
    (t = Br(t, "onChange")),
    0 < t.length &&
      ((n = new ro("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Rn = null,
  Wn = null;
function Dc(e) {
  ba(e, 0);
}
function al(e) {
  var t = Ht(e);
  if (ca(t)) return e;
}
function Ic(e, t) {
  if (e === "change") return t;
}
var Ba = !1;
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
  Ba = Nl && (!document.documentMode || 9 < document.documentMode);
}
function iu() {
  Rn && (Rn.detachEvent("onpropertychange", Ha), (Wn = Rn = null));
}
function Ha(e) {
  if (e.propertyName === "value" && al(Wn)) {
    var t = [];
    Wa(t, Wn, e, Ki(e)), ka(Dc, t);
  }
}
function Oc(e, t, n) {
  e === "focusin"
    ? (iu(), (Rn = t), (Wn = n), Rn.attachEvent("onpropertychange", Ha))
    : e === "focusout" && iu();
}
function Lc(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return al(Wn);
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
function Bn(e, t) {
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
function ou(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uu(e, t) {
  var n = ou(e);
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
    n = ou(n);
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
function oo(e) {
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
    if (r !== null && oo(n)) {
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
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = uu(n, i));
        var o = uu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
var Wc = Ge && "documentMode" in document && 11 >= document.documentMode,
  Wt = null,
  mi = null,
  Pn = null,
  hi = !1;
function au(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hi ||
    Wt == null ||
    Wt !== Or(r) ||
    ((r = Wt),
    "selectionStart" in r && oo(r)
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
    (Pn && Bn(Pn, r)) ||
      ((Pn = r),
      (r = Br(mi, "onSelect")),
      0 < r.length &&
        ((t = new ro("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Wt))));
}
function pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bt = {
    animationend: pr("Animation", "AnimationEnd"),
    animationiteration: pr("Animation", "AnimationIteration"),
    animationstart: pr("Animation", "AnimationStart"),
    transitionend: pr("Transition", "TransitionEnd"),
  },
  Dl = {},
  Za = {};
Ge &&
  ((Za = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bt.animationend.animation,
    delete Bt.animationiteration.animation,
    delete Bt.animationstart.animation),
  "TransitionEvent" in window || delete Bt.transitionend.transition);
function sl(e) {
  if (Dl[e]) return Dl[e];
  if (!Bt[e]) return e;
  var t = Bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Za) return (Dl[e] = t[n]);
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
function yt(e, t) {
  Ka.set(e, t), Ot(t, [e]);
}
for (var Il = 0; Il < su.length; Il++) {
  var Ol = su[Il],
    Bc = Ol.toLowerCase(),
    Hc = Ol[0].toUpperCase() + Ol.slice(1);
  yt(Bc, "on" + Hc);
}
yt(Ja, "onAnimationEnd");
yt(Ga, "onAnimationIteration");
yt(Ya, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(_a, "onTransitionEnd");
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
  (e.currentTarget = n), Bd(r, t, void 0, e), (e.currentTarget = null);
}
function ba(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          du(l, u, s), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          du(l, u, s), (i = a);
        }
    }
  }
  if (Mr) throw ((e = di), (Mr = !1), (di = null), e);
}
function V(e, t) {
  var n = t[xi];
  n === void 0 && (n = t[xi] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($a(t, e, 2, !1), n.add(r));
}
function Ll(e, t, n) {
  var r = 0;
  t && (r |= 4), $a(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[mr]) {
    (e[mr] = !0),
      oa.forEach(function (n) {
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
      l = ic;
      break;
    default:
      l = to;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !si ||
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
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Ft(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ka(function () {
    var s = i,
      h = Ki(n),
      v = [];
    e: {
      var y = Ka.get(e);
      if (y !== void 0) {
        var S = ro,
          k = e;
        switch (e) {
          case "keypress":
            if (Cr(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = xc;
            break;
          case "focusin":
            (k = "focus"), (S = zl);
            break;
          case "focusout":
            (k = "blur"), (S = zl);
            break;
          case "beforeblur":
          case "afterblur":
            S = zl;
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
            S = bo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = ac;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = wc;
            break;
          case Ja:
          case Ga:
          case Ya:
            S = cc;
            break;
          case _a:
            S = Fc;
            break;
          case "scroll":
            S = oc;
            break;
          case "wheel":
            S = Cc;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = pc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = eu;
        }
        var w = (t & 4) !== 0,
          L = !w && e === "scroll",
          f = w ? (y !== null ? y + "Capture" : null) : y;
        w = [];
        for (var c = s, p; c !== null; ) {
          p = c;
          var A = p.stateNode;
          if (
            (p.tag === 5 &&
              A !== null &&
              ((p = A),
              f !== null && ((A = Mn(c, f)), A != null && w.push(Xn(c, A, p)))),
            L)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((y = new S(y, k, null, n, h)), v.push({ event: y, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          y &&
            n !== ui &&
            (k = n.relatedTarget || n.fromElement) &&
            (Ft(k) || k[Ye]))
        )
          break e;
        if (
          (S || y) &&
          ((y =
            h.window === h
              ? h
              : (y = h.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          S
            ? ((k = n.relatedTarget || n.toElement),
              (S = s),
              (k = k ? Ft(k) : null),
              k !== null &&
                ((L = Lt(k)), k !== L || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((S = null), (k = s)),
          S !== k)
        ) {
          if (
            ((w = bo),
            (A = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = eu),
              (A = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (L = S == null ? y : Ht(S)),
            (p = k == null ? y : Ht(k)),
            (y = new w(A, c + "leave", S, n, h)),
            (y.target = L),
            (y.relatedTarget = p),
            (A = null),
            Ft(h) === s &&
              ((w = new w(f, c + "enter", k, n, h)),
              (w.target = p),
              (w.relatedTarget = L),
              (A = w)),
            (L = A),
            S && k)
          )
            t: {
              for (w = S, f = k, c = 0, p = w; p; p = Mt(p)) c++;
              for (p = 0, A = f; A; A = Mt(A)) p++;
              for (; 0 < c - p; ) (w = Mt(w)), c--;
              for (; 0 < p - c; ) (f = Mt(f)), p--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Mt(w)), (f = Mt(f));
              }
              w = null;
            }
          else w = null;
          S !== null && cu(v, y, S, w, !1),
            k !== null && L !== null && cu(v, L, k, w, !0);
        }
      }
      e: {
        if (
          ((y = s ? Ht(s) : window),
          (S = y.nodeName && y.nodeName.toLowerCase()),
          S === "select" || (S === "input" && y.type === "file"))
        )
          var F = Ic;
        else if (ru(y))
          if (Ba) F = Vc;
          else {
            F = Lc;
            var C = Oc;
          }
        else
          (S = y.nodeName) &&
            S.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (F = Mc);
        if (F && (F = F(e, s))) {
          Wa(v, F, n, h);
          break e;
        }
        C && C(e, y, s),
          e === "focusout" &&
            (C = y._wrapperState) &&
            C.controlled &&
            y.type === "number" &&
            ni(y, "number", y.value);
      }
      switch (((C = s ? Ht(s) : window), e)) {
        case "focusin":
          (ru(C) || C.contentEditable === "true") &&
            ((Wt = C), (mi = s), (Pn = null));
          break;
        case "focusout":
          Pn = mi = Wt = null;
          break;
        case "mousedown":
          hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hi = !1), au(v, n, h);
          break;
        case "selectionchange":
          if (Wc) break;
        case "keydown":
        case "keyup":
          au(v, n, h);
      }
      var g;
      if (io)
        e: {
          switch (e) {
            case "compositionstart":
              var m = "onCompositionStart";
              break e;
            case "compositionend":
              m = "onCompositionEnd";
              break e;
            case "compositionupdate":
              m = "onCompositionUpdate";
              break e;
          }
          m = void 0;
        }
      else
        qt
          ? Ua(e, n) && (m = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (m = "onCompositionStart");
      m &&
        (Va &&
          n.locale !== "ko" &&
          (qt || m !== "onCompositionStart"
            ? m === "onCompositionEnd" && qt && (g = Ma())
            : ((lt = h),
              (no = "value" in lt ? lt.value : lt.textContent),
              (qt = !0))),
        (C = Br(s, m)),
        0 < C.length &&
          ((m = new $o(m, e, null, n, h)),
          v.push({ event: m, listeners: C }),
          g ? (m.data = g) : ((g = qa(n)), g !== null && (m.data = g)))),
        (g = Pc ? zc(e, n) : Nc(e, n)) &&
          ((s = Br(s, "onBeforeInput")),
          0 < s.length &&
            ((h = new $o("onBeforeInput", "beforeinput", null, n, h)),
            v.push({ event: h, listeners: s }),
            (h.data = g)));
    }
    ba(v, t);
  });
}
function Xn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Mn(e, n)),
      i != null && r.unshift(Xn(e, i, l)),
      (i = Mn(e, t)),
      i != null && r.push(Xn(e, i, l))),
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
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Mn(n, i)), a != null && o.unshift(Xn(n, a, u)))
        : l || ((a = Mn(n, i)), a != null && o.push(Xn(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Qc = /\r\n?/g,
  Zc = /\u0000|\uFFFD/g;
function fu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qc,
      `
`
    )
    .replace(Zc, "");
}
function hr(e, t, n) {
  if (((t = fu(t)), fu(e) !== t && n)) throw Error(x(425));
}
function Hr() {}
var yi = null,
  vi = null;
function gi(e, t) {
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
var Ai = typeof setTimeout == "function" ? setTimeout : void 0,
  Jc = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pu = typeof Promise == "function" ? Promise : void 0,
  Gc =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pu < "u"
      ? function (e) {
          return pu.resolve(null).then(e).catch(Yc);
        }
      : Ai;
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
var fn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + fn,
  Qn = "__reactProps$" + fn,
  Ye = "__reactContainer$" + fn,
  xi = "__reactEvents$" + fn,
  _c = "__reactListeners$" + fn,
  Kc = "__reactHandles$" + fn;
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
function Ht(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function dl(e) {
  return e[Qn] || null;
}
var Si = [],
  Xt = -1;
function vt(e) {
  return { current: e };
}
function U(e) {
  0 > Xt || ((e.current = Si[Xt]), (Si[Xt] = null), Xt--);
}
function M(e, t) {
  Xt++, (Si[Xt] = e.current), (e.current = t);
}
var ht = {},
  ae = vt(ht),
  ye = vt(!1),
  zt = ht;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
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
  U(ye), U(ae);
}
function hu(e, t, n) {
  if (ae.current !== ht) throw Error(x(168));
  M(ae, t), M(ye, n);
}
function es(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Od(e) || "Unknown", l));
  return Q({}, n, r);
}
function Qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht),
    (zt = ae.current),
    M(ae, e),
    M(ye, ye.current),
    !0
  );
}
function yu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = es(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(ye),
      U(ae),
      M(ae, e))
    : U(ye),
    M(ye, n);
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
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), ja(bi, gt), l);
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
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Qe = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Ze = i + e);
  } else (Qe = (1 << i) | (n << l) | r), (Ze = e);
}
function uo(e) {
  e.return !== null && (wt(e, 1), ns(e, 1, 0));
}
function ao(e) {
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
  W = !1,
  Ie = null;
function rs(e, t) {
  var n = Ce(5, null, null, 0);
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
            (n = Ce(18, null, null, 0)),
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
function ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wi(e) {
  if (W) {
    var t = xe;
    if (t) {
      var n = t;
      if (!vu(e, t)) {
        if (ki(e)) throw Error(x(418));
        t = st(n.nextSibling);
        var r = Se;
        t && vu(e, t)
          ? rs(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Se = e));
      }
    } else {
      if (ki(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Se = e);
    }
  }
}
function gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function yr(e) {
  if (e !== Se) return !1;
  if (!W) return gu(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (ki(e)) throw (ls(), Error(x(418)));
    for (; t; ) rs(e, t), (t = st(t.nextSibling));
  }
  if ((gu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
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
  (xe = Se = null), (W = !1);
}
function so(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
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
  co = null;
function fo() {
  co = Jt = Yr = null;
}
function po(e) {
  var t = Gr.current;
  U(Gr), (e._currentValue = t);
}
function Ei(e, t, n) {
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
    (co = Jt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (co !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jt === null)) {
      if (Yr === null) throw Error(x(308));
      (Jt = e), (Yr.dependencies = { lanes: 0, firstContext: e });
    } else Jt = Jt.next = e;
  return t;
}
var jt = null;
function mo(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function is(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), mo(t)) : ((n.next = l.next), (l.next = n)),
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
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function os(e, t) {
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
    l === null ? ((t.next = t), mo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    _e(e, n)
  );
}
function Rr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $i(e, n);
  }
}
function Au(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
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
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), o === null ? (i = s) : (o.next = s), (o = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = s) : (u.next = s),
        (h.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var v = l.baseState;
    (o = 0), (h = s = a = null), (u = i);
    do {
      var y = u.lane,
        S = u.eventTime;
      if ((r & y) === y) {
        h !== null &&
          (h = h.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            w = u;
          switch (((y = t), (S = n), w.tag)) {
            case 1:
              if (((k = w.payload), typeof k == "function")) {
                v = k.call(S, v, y);
                break e;
              }
              v = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = w.payload),
                (y = typeof k == "function" ? k.call(S, v, y) : k),
                y == null)
              )
                break e;
              v = Q({}, v, y);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (y = l.effects),
          y === null ? (l.effects = [u]) : y.push(u));
      } else
        (S = {
          eventTime: S,
          lane: y,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((s = h = S), (a = v)) : (h = h.next = S),
          (o |= y);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (y = u),
          (u = y.next),
          (y.next = null),
          (l.lastBaseUpdate = y),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (a = v),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Dt |= o), (e.lanes = o), (e.memoizedState = v);
  }
}
function xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var us = new ia.Component().refs;
function Fi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Lt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = ft(e),
      i = Je(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = dt(e, i, l)),
      t !== null && (Le(t, e, l, r), Rr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = ft(e),
      i = Je(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = dt(e, i, l)),
      t !== null && (Le(t, e, l, r), Rr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = ft(e),
      l = Je(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = dt(e, l, r)),
      t !== null && (Le(t, e, r, n), Rr(t, e, r));
  },
};
function Su(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bn(n, r) || !Bn(l, i)
      : !0
  );
}
function as(e, t, n) {
  var r = !1,
    l = ht,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pe(i))
      : ((l = ve(t) ? zt : ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? rn(e, l) : ht)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ku(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fl.enqueueReplaceState(t, t.state, null);
}
function ji(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = us), ho(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Pe(i))
    : ((i = ve(t) ? zt : ae.current), (l.context = rn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Fi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && fl.enqueueReplaceState(l, l.state, null),
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
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === us && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
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
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = pt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, A) {
    return c === null || c.tag !== 6
      ? ((c = Zl(p, f.mode, A)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function a(f, c, p, A) {
    var F = p.type;
    return F === Ut
      ? h(f, c, p.props.children, A, p.key)
      : c !== null &&
        (c.elementType === F ||
          (typeof F == "object" &&
            F !== null &&
            F.$$typeof === et &&
            wu(F) === c.type))
      ? ((A = l(c, p.props)), (A.ref = gn(f, c, p)), (A.return = f), A)
      : ((A = Ir(p.type, p.key, p.props, null, f.mode, A)),
        (A.ref = gn(f, c, p)),
        (A.return = f),
        A);
  }
  function s(f, c, p, A) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Jl(p, f.mode, A)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function h(f, c, p, A, F) {
    return c === null || c.tag !== 7
      ? ((c = Pt(p, f.mode, A, F)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function v(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Zl("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case or:
          return (
            (p = Ir(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = gn(f, null, c)),
            (p.return = f),
            p
          );
        case Vt:
          return (c = Jl(c, f.mode, p)), (c.return = f), c;
        case et:
          var A = c._init;
          return v(f, A(c._payload), p);
      }
      if (kn(c) || pn(c))
        return (c = Pt(c, f.mode, p, null)), (c.return = f), c;
      vr(f, c);
    }
    return null;
  }
  function y(f, c, p, A) {
    var F = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return F !== null ? null : u(f, c, "" + p, A);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case or:
          return p.key === F ? a(f, c, p, A) : null;
        case Vt:
          return p.key === F ? s(f, c, p, A) : null;
        case et:
          return (F = p._init), y(f, c, F(p._payload), A);
      }
      if (kn(p) || pn(p)) return F !== null ? null : h(f, c, p, A, null);
      vr(f, p);
    }
    return null;
  }
  function S(f, c, p, A, F) {
    if ((typeof A == "string" && A !== "") || typeof A == "number")
      return (f = f.get(p) || null), u(c, f, "" + A, F);
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case or:
          return (f = f.get(A.key === null ? p : A.key) || null), a(c, f, A, F);
        case Vt:
          return (f = f.get(A.key === null ? p : A.key) || null), s(c, f, A, F);
        case et:
          var C = A._init;
          return S(f, c, p, C(A._payload), F);
      }
      if (kn(A) || pn(A)) return (f = f.get(p) || null), h(c, f, A, F, null);
      vr(c, A);
    }
    return null;
  }
  function k(f, c, p, A) {
    for (
      var F = null, C = null, g = c, m = (c = 0), q = null;
      g !== null && m < p.length;
      m++
    ) {
      g.index > m ? ((q = g), (g = null)) : (q = g.sibling);
      var z = y(f, g, p[m], A);
      if (z === null) {
        g === null && (g = q);
        break;
      }
      e && g && z.alternate === null && t(f, g),
        (c = i(z, c, m)),
        C === null ? (F = z) : (C.sibling = z),
        (C = z),
        (g = q);
    }
    if (m === p.length) return n(f, g), W && wt(f, m), F;
    if (g === null) {
      for (; m < p.length; m++)
        (g = v(f, p[m], A)),
          g !== null &&
            ((c = i(g, c, m)), C === null ? (F = g) : (C.sibling = g), (C = g));
      return W && wt(f, m), F;
    }
    for (g = r(f, g); m < p.length; m++)
      (q = S(g, f, m, p[m], A)),
        q !== null &&
          (e && q.alternate !== null && g.delete(q.key === null ? m : q.key),
          (c = i(q, c, m)),
          C === null ? (F = q) : (C.sibling = q),
          (C = q));
    return (
      e &&
        g.forEach(function (pe) {
          return t(f, pe);
        }),
      W && wt(f, m),
      F
    );
  }
  function w(f, c, p, A) {
    var F = pn(p);
    if (typeof F != "function") throw Error(x(150));
    if (((p = F.call(p)), p == null)) throw Error(x(151));
    for (
      var C = (F = null), g = c, m = (c = 0), q = null, z = p.next();
      g !== null && !z.done;
      m++, z = p.next()
    ) {
      g.index > m ? ((q = g), (g = null)) : (q = g.sibling);
      var pe = y(f, g, z.value, A);
      if (pe === null) {
        g === null && (g = q);
        break;
      }
      e && g && pe.alternate === null && t(f, g),
        (c = i(pe, c, m)),
        C === null ? (F = pe) : (C.sibling = pe),
        (C = pe),
        (g = q);
    }
    if (z.done) return n(f, g), W && wt(f, m), F;
    if (g === null) {
      for (; !z.done; m++, z = p.next())
        (z = v(f, z.value, A)),
          z !== null &&
            ((c = i(z, c, m)), C === null ? (F = z) : (C.sibling = z), (C = z));
      return W && wt(f, m), F;
    }
    for (g = r(f, g); !z.done; m++, z = p.next())
      (z = S(g, f, m, z.value, A)),
        z !== null &&
          (e && z.alternate !== null && g.delete(z.key === null ? m : z.key),
          (c = i(z, c, m)),
          C === null ? (F = z) : (C.sibling = z),
          (C = z));
    return (
      e &&
        g.forEach(function (At) {
          return t(f, At);
        }),
      W && wt(f, m),
      F
    );
  }
  function L(f, c, p, A) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Ut &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case or:
          e: {
            for (var F = p.key, C = c; C !== null; ) {
              if (C.key === F) {
                if (((F = p.type), F === Ut)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (c = l(C, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  C.elementType === F ||
                  (typeof F == "object" &&
                    F !== null &&
                    F.$$typeof === et &&
                    wu(F) === C.type)
                ) {
                  n(f, C.sibling),
                    (c = l(C, p.props)),
                    (c.ref = gn(f, C, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            p.type === Ut
              ? ((c = Pt(p.props.children, f.mode, A, p.key)),
                (c.return = f),
                (f = c))
              : ((A = Ir(p.type, p.key, p.props, null, f.mode, A)),
                (A.ref = gn(f, c, p)),
                (A.return = f),
                (f = A));
          }
          return o(f);
        case Vt:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Jl(p, f.mode, A)), (c.return = f), (f = c);
          }
          return o(f);
        case et:
          return (C = p._init), L(f, c, C(p._payload), A);
      }
      if (kn(p)) return k(f, c, p, A);
      if (pn(p)) return w(f, c, p, A);
      vr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Zl(p, f.mode, A)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return L;
}
var on = ss(!0),
  ds = ss(!1),
  nr = {},
  Be = vt(nr),
  Zn = vt(nr),
  Jn = vt(nr);
function Ct(e) {
  if (e === nr) throw Error(x(174));
  return e;
}
function yo(e, t) {
  switch ((M(Jn, t), M(Zn, e), M(Be, nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = li(t, e));
  }
  U(Be), M(Be, t);
}
function un() {
  U(Be), U(Zn), U(Jn);
}
function cs(e) {
  Ct(Jn.current);
  var t = Ct(Be.current),
    n = li(t, e.type);
  t !== n && (M(Zn, e), M(Be, n));
}
function vo(e) {
  Zn.current === e && (U(Be), U(Zn));
}
var H = vt(0);
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
function go() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Pr = be.ReactCurrentDispatcher,
  Wl = be.ReactCurrentBatchConfig,
  Tt = 0,
  X = null,
  _ = null,
  $ = null,
  br = !1,
  zn = !1,
  Gn = 0,
  ef = 0;
function ie() {
  throw Error(x(321));
}
function Ao(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function xo(e, t, n, r, l, i) {
  if (
    ((Tt = i),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Pr.current = e === null || e.memoizedState === null ? lf : of),
    (e = n(r, l)),
    zn)
  ) {
    i = 0;
    do {
      if (((zn = !1), (Gn = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        ($ = _ = null),
        (t.updateQueue = null),
        (Pr.current = uf),
        (e = n(r, l));
    } while (zn);
  }
  if (
    ((Pr.current = $r),
    (t = _ !== null && _.next !== null),
    (Tt = 0),
    ($ = _ = X = null),
    (br = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function So() {
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
  return $ === null ? (X.memoizedState = $ = e) : ($ = $.next = e), $;
}
function ze() {
  if (_ === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _.next;
  var t = $ === null ? X.memoizedState : $.next;
  if (t !== null) ($ = t), (_ = e);
  else {
    if (e === null) throw Error(x(310));
    (_ = e),
      (e = {
        memoizedState: _.memoizedState,
        baseState: _.baseState,
        baseQueue: _.baseQueue,
        queue: _.queue,
        next: null,
      }),
      $ === null ? (X.memoizedState = $ = e) : ($ = $.next = e);
  }
  return $;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = _,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      s = i;
    do {
      var h = s.lane;
      if ((Tt & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var v = {
          lane: h,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = v), (o = r)) : (a = a.next = v),
          (X.lanes |= h),
          (Dt |= h);
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? (o = r) : (a.next = u),
      Me(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (X.lanes |= i), (Dt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Me(i, t.memoizedState) || (he = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function fs() {}
function ps(e, t) {
  var n = X,
    r = ze(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    ko(ys.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ($ !== null && $.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      _n(9, hs.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(x(349));
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
function hs(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vs(t) && gs(e);
}
function ys(e, t, n) {
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
    (e = e.dispatch = rf.bind(null, X, e)),
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
function pl(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (_ !== null) {
    var o = _.memoizedState;
    if (((i = o.destroy), r !== null && Ao(r, o.deps))) {
      l.memoizedState = _n(t, n, i, r);
      return;
    }
  }
  (X.flags |= e), (l.memoizedState = _n(1 | t, n, i, r));
}
function Fu(e, t) {
  return zr(8390656, 8, e, t);
}
function ko(e, t) {
  return pl(2048, 8, e, t);
}
function xs(e, t) {
  return pl(4, 2, e, t);
}
function Ss(e, t) {
  return pl(4, 4, e, t);
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
    (n = n != null ? n.concat([e]) : null), pl(4, 4, ks.bind(null, t, e), n)
  );
}
function wo() {}
function Es(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ao(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Fs(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ao(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function js(e, t, n) {
  return Tt & 21
    ? (Me(n, t) || ((n = Pa()), (X.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function tf(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Wl.transition = r);
  }
}
function Cs() {
  return ze().memoizedState;
}
function nf(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rs(e))
  )
    Ps(t, n);
  else if (((n = is(e, t, n, r)), n !== null)) {
    var l = de();
    Le(n, e, r, l), zs(n, t, r);
  }
}
function rf(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rs(e)) Ps(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), mo(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = is(e, t, l, r)),
      n !== null && ((l = de()), Le(n, e, r, l), zs(n, t, r));
  }
}
function Rs(e) {
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
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $i(e, n);
  }
}
var $r = {
    readContext: Pe,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  lf = {
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
        (e = e.dispatch = nf.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Eu,
    useDebugValue: wo,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = Eu(!1),
        t = e[0];
      return (e = tf.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        l = Ue();
      if (W) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(x(349));
        Tt & 30 || ms(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Fu(ys.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        _n(9, hs.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = ee.identifierPrefix;
      if (W) {
        var n = Ze,
          r = Qe;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ef++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  of = {
    readContext: Pe,
    useCallback: Es,
    useContext: Pe,
    useEffect: ko,
    useImperativeHandle: ws,
    useInsertionEffect: xs,
    useLayoutEffect: Ss,
    useMemo: Fs,
    useReducer: Bl,
    useRef: As,
    useState: function () {
      return Bl(Yn);
    },
    useDebugValue: wo,
    useDeferredValue: function (e) {
      var t = ze();
      return js(t, _.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Yn)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: fs,
    useSyncExternalStore: ps,
    useId: Cs,
    unstable_isNewReconciler: !1,
  },
  uf = {
    readContext: Pe,
    useCallback: Es,
    useContext: Pe,
    useEffect: ko,
    useImperativeHandle: ws,
    useInsertionEffect: xs,
    useLayoutEffect: Ss,
    useMemo: Fs,
    useReducer: Hl,
    useRef: As,
    useState: function () {
      return Hl(Yn);
    },
    useDebugValue: wo,
    useDeferredValue: function (e) {
      var t = ze();
      return _ === null ? (t.memoizedState = e) : js(t, _.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Yn)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: fs,
    useSyncExternalStore: ps,
    useId: Cs,
    unstable_isNewReconciler: !1,
  };
function an(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Id(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ci(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var af = typeof WeakMap == "function" ? WeakMap : Map;
function Ns(e, t, n) {
  (n = Je(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      tl || ((tl = !0), (Mi = r)), Ci(e, t);
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
        Ci(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ci(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new af();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = kf.bind(null, e, t, n)), t.then(e, e));
}
function Cu(e) {
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
function Ru(e, t, n, r, l) {
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
var sf = be.ReactCurrentOwner,
  he = !1;
function se(e, t, n, r) {
  t.child = e === null ? ds(t, null, n, r) : on(t, e.child, n, r);
}
function Pu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    en(t, l),
    (r = xo(e, t, n, r, i, l)),
    (n = So()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (W && n && uo(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function zu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !No(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ds(e, t, i, r, l))
      : ((e = Ir(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bn), n(o, r) && e.ref === t.ref)
    )
      return Ke(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ds(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bn(i, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), Ke(e, t, l);
  }
  return Ri(e, t, n, r, l);
}
function Is(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Yt, Ae),
        (Ae |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
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
        (r = i !== null ? i.baseLanes : n),
        M(Yt, Ae),
        (Ae |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(Yt, Ae),
      (Ae |= r);
  return se(e, t, l, n), t.child;
}
function Os(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ri(e, t, n, r, l) {
  var i = ve(n) ? zt : ae.current;
  return (
    (i = rn(t, i)),
    en(t, l),
    (n = xo(e, t, n, r, i, l)),
    (r = So()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (W && r && uo(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function Nu(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    Qr(t);
  } else i = !1;
  if ((en(t, l), t.stateNode === null))
    Nr(e, t), as(t, n, r), ji(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Pe(s))
      : ((s = ve(n) ? zt : ae.current), (s = rn(t, s)));
    var h = n.getDerivedStateFromProps,
      v =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && ku(t, o, r, s)),
      (tt = !1);
    var y = t.memoizedState;
    (o.state = y),
      _r(t, r, o, l),
      (a = t.memoizedState),
      u !== r || y !== a || ye.current || tt
        ? (typeof h == "function" && (Fi(t, n, h, r), (a = t.memoizedState)),
          (u = tt || Su(t, n, u, r, y, a, s))
            ? (v ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = s),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      os(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : Te(t.type, u)),
      (o.props = s),
      (v = t.pendingProps),
      (y = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Pe(a))
        : ((a = ve(n) ? zt : ae.current), (a = rn(t, a)));
    var S = n.getDerivedStateFromProps;
    (h =
      typeof S == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== v || y !== a) && ku(t, o, r, a)),
      (tt = !1),
      (y = t.memoizedState),
      (o.state = y),
      _r(t, r, o, l);
    var k = t.memoizedState;
    u !== v || y !== k || ye.current || tt
      ? (typeof S == "function" && (Fi(t, n, S, r), (k = t.memoizedState)),
        (s = tt || Su(t, n, s, r, y, k, a) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, k, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, k, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = a),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pi(e, t, n, r, i, l);
}
function Pi(e, t, n, r, l, i) {
  Os(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && yu(t, n, !1), Ke(e, t, i);
  (r = t.stateNode), (sf.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = on(t, e.child, null, i)), (t.child = on(t, null, u, i)))
      : se(e, t, u, i),
    (t.memoizedState = r.state),
    l && yu(t, n, !0),
    t.child
  );
}
function Ls(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hu(e, t.context, !1),
    yo(e, t.containerInfo);
}
function Tu(e, t, n, r, l) {
  return ln(), so(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var zi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ni(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ms(e, t, n) {
  var r = t.pendingProps,
    l = H.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M(H, l & 1),
    e === null)
  )
    return (
      wi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = yl(o, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ni(n)),
              (t.memoizedState = zi),
              e)
            : Eo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return df(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = pt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = pt(u, i)) : ((i = Pt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ni(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = zi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pt(i, { mode: "visible", children: r.children })),
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
function Eo(e, t) {
  return (
    (t = yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gr(e, t, n, r) {
  return (
    r !== null && so(r),
    on(t, e.child, null, n),
    (e = Eo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function df(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xl(Error(x(422)))), gr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = yl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Pt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && on(t, e.child, null, o),
        (t.child.memoizedState = Ni(o)),
        (t.memoizedState = zi),
        i);
  if (!(t.mode & 1)) return gr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(x(419))), (r = Xl(i, r, void 0)), gr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), he || u)) {
    if (((r = ee), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), _e(e, l), Le(r, e, l, -1));
    }
    return zo(), (r = Xl(Error(x(421)))), gr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (xe = st(l.nextSibling)),
      (Se = t),
      (W = !0),
      (Ie = null),
      e !== null &&
        ((Fe[je++] = Qe),
        (Fe[je++] = Ze),
        (Fe[je++] = Nt),
        (Qe = e.id),
        (Ze = e.overflow),
        (Nt = t)),
      (t = Eo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Du(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ei(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Vs(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((se(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Du(e, n, t);
        else if (e.tag === 19) Du(e, n, t);
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
  if ((M(H, r), !(t.mode & 1))) t.memoizedState = null;
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
          Ql(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ql(t, !0, n, null, i);
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
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cf(e, t, n) {
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
      yo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      M(Gr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ms(e, t, n)
          : (M(H, H.current & 1),
            (e = Ke(e, t, n)),
            e !== null ? e.sibling : null);
      M(H, H.current & 1);
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
        M(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Is(e, t, n);
  }
  return Ke(e, t, n);
}
var Us, Ti, qs, Ws;
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
Ti = function () {};
qs = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ct(Be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hr);
    }
    ii(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (On.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (On.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && V("scroll", e),
                  i || u === a || (i = []))
                : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Ws = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function An(e, t) {
  if (!W)
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
function oe(e) {
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
function ff(e, t, n) {
  var r = t.pendingProps;
  switch ((ao(t), t.tag)) {
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
      return oe(t), null;
    case 1:
      return ve(t.type) && Xr(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        un(),
        U(ye),
        U(ae),
        go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (qi(Ie), (Ie = null)))),
        Ti(e, t),
        oe(t),
        null
      );
    case 5:
      vo(t);
      var l = Ct(Jn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qs(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return oe(t), null;
        }
        if (((e = Ct(Be.current)), yr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[qe] = t), (r[Qn] = i), (e = (t.mode & 1) !== 0), n)) {
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
              Bo(r, i), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              Xo(r, i), V("invalid", r);
          }
          ii(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : On.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              ur(r), Ho(r, i, !0);
              break;
            case "textarea":
              ur(r), Qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Hr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ma(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[qe] = t),
            (e[Qn] = r),
            Us(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = oi(n, r)), n)) {
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
                Bo(e, r), (l = ei(e, r)), V("invalid", e);
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
                Xo(e, r), (l = ri(e, r)), V("invalid", e);
                break;
              default:
                l = r;
            }
            ii(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? va(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ha(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Ln(e, a)
                    : typeof a == "number" && Ln(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (On.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && V("scroll", e)
                      : a != null && Ji(e, i, a, o));
              }
            switch (n) {
              case "input":
                ur(e), Ho(e, r, !1);
                break;
              case "textarea":
                ur(e), Qo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? _t(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      _t(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hr);
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
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) Ws(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Ct(Jn.current)), Ct(Be.current), yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (i = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (U(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && xe !== null && t.mode & 1 && !(t.flags & 128))
          ls(), ln(), (t.flags |= 98560), (i = !1);
        else if (((i = yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[qe] = t;
          } else
            ln(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (i = !1);
        } else Ie !== null && (qi(Ie), (Ie = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? K === 0 && (K = 3) : zo())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        un(), Ti(e, t), e === null && Hn(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return po(t.type._context), oe(t), null;
    case 17:
      return ve(t.type) && Xr(), oe(t), null;
    case 19:
      if ((U(H), (i = t.memoizedState), i === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) An(i, !1);
        else {
          if (K !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Kr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    An(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            G() > sn &&
            ((t.flags |= 128), (r = !0), An(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              An(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !W)
            )
              return oe(t), null;
          } else
            2 * G() - i.renderingStartTime > sn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), An(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = H.current),
          M(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        Po(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function pf(e, t) {
  switch ((ao(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && Xr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        un(),
        U(ye),
        U(ae),
        go(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vo(t), null;
    case 13:
      if ((U(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        ln();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(H), null;
    case 4:
      return un(), null;
    case 10:
      return po(t.type._context), null;
    case 22:
    case 23:
      return Po(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ar = !1,
  ue = !1,
  mf = typeof WeakSet == "function" ? WeakSet : Set,
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
function Di(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Iu = !1;
function hf(e, t) {
  if (((yi = qr), (e = Qa()), oo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            s = 0,
            h = 0,
            v = e,
            y = null;
          t: for (;;) {
            for (
              var S;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = o + l),
                v !== i || (r !== 0 && v.nodeType !== 3) || (a = o + r),
                v.nodeType === 3 && (o += v.nodeValue.length),
                (S = v.firstChild) !== null;

            )
              (y = v), (v = S);
            for (;;) {
              if (v === e) break t;
              if (
                (y === n && ++s === l && (u = o),
                y === i && ++h === r && (a = o),
                (S = v.nextSibling) !== null)
              )
                break;
              (v = y), (y = v.parentNode);
            }
            v = S;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vi = { focusedElem: e, selectionRange: n }, qr = !1, j = t; j !== null; )
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
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Te(t.type, w),
                      L
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (A) {
          Z(t, t.return, A);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (k = Iu), (Iu = !1), k;
}
function Nn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Di(t, n, i);
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
function Ii(e) {
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
function Bs(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bs(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[Qn], delete t[xi], delete t[_c], delete t[Kc])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hs(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ou(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hs(e.return)) return null;
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
function Oi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), (e = e.sibling);
}
function Li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Li(e, t, n), e = e.sibling; e !== null; ) Li(e, t, n), (e = e.sibling);
}
var ne = null,
  De = !1;
function $e(e, t, n) {
  for (n = n.child; n !== null; ) Xs(e, t, n), (n = n.sibling);
}
function Xs(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function")
    try {
      We.onCommitFiberUnmount(ol, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || Gt(n, t);
    case 6:
      var r = ne,
        l = De;
      (ne = null),
        $e(e, t, n),
        (ne = r),
        (De = l),
        ne !== null &&
          (De
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (De
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Vl(e.parentNode, n)
              : e.nodeType === 1 && Vl(e, n),
            qn(e))
          : Vl(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (l = De),
        (ne = n.stateNode.containerInfo),
        (De = !0),
        $e(e, t, n),
        (ne = r),
        (De = l);
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
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Di(n, t, o),
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
    n === null && (n = e.stateNode = new mf()),
      t.forEach(function (r) {
        var l = Ef.bind(null, e, r);
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
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (De = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (De = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(x(160));
        Xs(i, o, l), (ne = null), (De = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        Z(l, t, s);
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
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && fa(l, i),
              oi(u, o);
            var s = oi(u, i);
            for (o = 0; o < a.length; o += 2) {
              var h = a[o],
                v = a[o + 1];
              h === "style"
                ? va(l, v)
                : h === "dangerouslySetInnerHTML"
                ? ha(l, v)
                : h === "children"
                ? Ln(l, v)
                : Ji(l, h, v, s);
            }
            switch (u) {
              case "input":
                ti(l, i);
                break;
              case "textarea":
                pa(l, i);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? _t(l, !!i.multiple, S, !1)
                  : y !== !!i.multiple &&
                    (i.defaultValue != null
                      ? _t(l, !!i.multiple, i.defaultValue, !0)
                      : _t(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Qn] = i;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ne(t, e), Ve(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
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
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Co = G())),
        r & 4 && Lu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (s = ue) || h), Ne(t, e), (ue = s)) : Ne(t, e),
        Ve(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !h && e.mode & 1)
        )
          for (j = e, h = e.child; h !== null; ) {
            for (v = j = h; j !== null; ) {
              switch (((y = j), (S = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nn(4, y, y.return);
                  break;
                case 1:
                  Gt(y, y.return);
                  var k = y.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
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
                  Gt(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    Vu(v);
                    continue;
                  }
              }
              S !== null ? ((S.return = y), (j = S)) : Vu(v);
            }
            h = h.sibling;
          }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                (l = v.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = v.stateNode),
                      (a = v.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = ya("display", o)));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (v.tag === 6) {
            if (h === null)
              try {
                v.stateNode.nodeValue = s ? "" : v.memoizedProps;
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
            h === v && (h = null), (v = v.return);
          }
          h === v && (h = null), (v.sibling.return = v.return), (v = v.sibling);
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
          if (Hs(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ln(l, ""), (r.flags &= -33));
          var i = Ou(e);
          Li(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Ou(e);
          Oi(e, u, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yf(e, t, n) {
  (j = e), Zs(e);
}
function Zs(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Ar;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || ue;
        u = Ar;
        var s = ue;
        if (((Ar = o), (ue = a) && !s))
          for (j = l; j !== null; )
            (o = j),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Uu(l)
                : a !== null
                ? ((a.return = o), (j = a))
                : Uu(l);
        for (; i !== null; ) (j = i), Zs(i), (i = i.sibling);
        (j = l), (Ar = u), (ue = s);
      }
      Mu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (j = i)) : Mu(e);
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
              var i = t.updateQueue;
              i !== null && xu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xu(t, o, n);
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
                var s = t.alternate;
                if (s !== null) {
                  var h = s.memoizedState;
                  if (h !== null) {
                    var v = h.dehydrated;
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
              throw Error(x(163));
          }
        ue || (t.flags & 512 && Ii(t));
      } catch (y) {
        Z(t, t.return, y);
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
          var i = t.return;
          try {
            Ii(t);
          } catch (a) {
            Z(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ii(t);
          } catch (a) {
            Z(t, o, a);
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
var vf = Math.ceil,
  el = be.ReactCurrentDispatcher,
  Fo = be.ReactCurrentOwner,
  Re = be.ReactCurrentBatchConfig,
  I = 0,
  ee = null,
  Y = null,
  re = 0,
  Ae = 0,
  Yt = vt(0),
  K = 0,
  Kn = null,
  Dt = 0,
  hl = 0,
  jo = 0,
  Tn = null,
  me = null,
  Co = 0,
  sn = 1 / 0,
  He = null,
  tl = !1,
  Mi = null,
  ct = null,
  xr = !1,
  it = null,
  nl = 0,
  Dn = 0,
  Vi = null,
  Tr = -1,
  Dr = 0;
function de() {
  return I & 6 ? G() : Tr !== -1 ? Tr : (Tr = G());
}
function ft(e) {
  return e.mode & 1
    ? I & 2 && re !== 0
      ? re & -re
      : $c.transition !== null
      ? (Dr === 0 && (Dr = Pa()), Dr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : La(e.type))),
        e)
    : 1;
}
function Le(e, t, n, r) {
  if (50 < Dn) throw ((Dn = 0), (Vi = null), Error(x(185)));
  $n(e, n, r),
    (!(I & 2) || e !== ee) &&
      (e === ee && (!(I & 2) && (hl |= n), K === 4 && rt(e, re)),
      ge(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((sn = G() + 500), cl && gt()));
}
function ge(e, t) {
  var n = e.callbackNode;
  $d(e, t);
  var r = Ur(e, e === ee ? re : 0);
  if (r === 0)
    n !== null && Go(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Go(n), t === 1))
      e.tag === 0 ? bc(qu.bind(null, e)) : ts(qu.bind(null, e)),
        Gc(function () {
          !(I & 6) && gt();
        }),
        (n = null);
    else {
      switch (za(r)) {
        case 1:
          n = bi;
          break;
        case 4:
          n = Ca;
          break;
        case 16:
          n = Vr;
          break;
        case 536870912:
          n = Ra;
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
  if (((Tr = -1), (Dr = 0), I & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var r = Ur(e, e === ee ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = Ys();
    (ee !== e || re !== t) && ((He = null), (sn = G() + 500), Rt(e, t));
    do
      try {
        xf();
        break;
      } catch (u) {
        Gs(e, u);
      }
    while (1);
    fo(),
      (el.current = i),
      (I = l),
      Y !== null ? (t = 0) : ((ee = null), (re = 0), (t = K));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ci(e)), l !== 0 && ((r = l), (t = Ui(e, l)))), t === 1)
    )
      throw ((n = Kn), Rt(e, 0), rt(e, r), ge(e, G()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !gf(l) &&
          ((t = rl(e, r)),
          t === 2 && ((i = ci(e)), i !== 0 && ((r = i), (t = Ui(e, i)))),
          t === 1))
      )
        throw ((n = Kn), Rt(e, 0), rt(e, r), ge(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Et(e, me, He);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = Co + 500 - G()), 10 < t))
          ) {
            if (Ur(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ai(Et.bind(null, e, me, He), t);
            break;
          }
          Et(e, me, He);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
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
                : 1960 * vf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ai(Et.bind(null, e, me, He), r);
            break;
          }
          Et(e, me, He);
          break;
        case 5:
          Et(e, me, He);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ge(e, G()), e.callbackNode === n ? Js.bind(null, e) : null;
}
function Ui(e, t) {
  var n = Tn;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && qi(t)),
    e
  );
}
function qi(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function gf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
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
    t &= ~jo,
      t &= ~hl,
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
  if (I & 6) throw Error(x(327));
  tn();
  var t = Ur(e, 0);
  if (!(t & 1)) return ge(e, G()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ci(e);
    r !== 0 && ((t = r), (n = Ui(e, r)));
  }
  if (n === 1) throw ((n = Kn), Rt(e, 0), rt(e, t), ge(e, G()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, me, He),
    ge(e, G()),
    null
  );
}
function Ro(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((sn = G() + 500), cl && gt());
  }
}
function It(e) {
  it !== null && it.tag === 0 && !(I & 6) && tn();
  var t = I;
  I |= 1;
  var n = Re.transition,
    r = O;
  try {
    if (((Re.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Re.transition = n), (I = t), !(I & 6) && gt();
  }
}
function Po() {
  (Ae = Yt.current), U(Yt);
}
function Rt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jc(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((ao(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xr();
          break;
        case 3:
          un(), U(ye), U(ae), go();
          break;
        case 5:
          vo(r);
          break;
        case 4:
          un();
          break;
        case 13:
          U(H);
          break;
        case 19:
          U(H);
          break;
        case 10:
          po(r.type._context);
          break;
        case 22:
        case 23:
          Po();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (Y = e = pt(e.current, null)),
    (re = Ae = t),
    (K = 0),
    (Kn = null),
    (jo = hl = Dt = 0),
    (me = Tn = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
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
      if ((fo(), (Pr.current = $r), br)) {
        for (var r = X.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        br = !1;
      }
      if (
        ((Tt = 0),
        ($ = _ = X = null),
        (zn = !1),
        (Gn = 0),
        (Fo.current = null),
        n === null || n.return === null)
      ) {
        (K = 1), (Kn = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            h = u,
            v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var y = h.alternate;
            y
              ? ((h.updateQueue = y.updateQueue),
                (h.memoizedState = y.memoizedState),
                (h.lanes = y.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var S = Cu(o);
          if (S !== null) {
            (S.flags &= -257),
              Ru(S, o, u, i, t),
              S.mode & 1 && ju(i, s, t),
              (t = S),
              (a = s);
            var k = t.updateQueue;
            if (k === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ju(i, s, t), zo();
              break e;
            }
            a = Error(x(426));
          }
        } else if (W && u.mode & 1) {
          var L = Cu(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              Ru(L, o, u, i, t),
              so(an(a, u));
            break e;
          }
        }
        (i = a = an(a, u)),
          K !== 4 && (K = 2),
          Tn === null ? (Tn = [i]) : Tn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Ns(i, a, t);
              Au(i, f);
              break e;
            case 1:
              u = a;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ct === null || !ct.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var A = Ts(i, u, t);
                Au(i, A);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
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
function zo() {
  (K === 0 || K === 3 || K === 2) && (K = 4),
    ee === null || (!(Dt & 268435455) && !(hl & 268435455)) || rt(ee, re);
}
function rl(e, t) {
  var n = I;
  I |= 2;
  var r = Ys();
  (ee !== e || re !== t) && ((He = null), Rt(e, t));
  do
    try {
      Af();
      break;
    } catch (l) {
      Gs(e, l);
    }
  while (1);
  if ((fo(), (I = n), (el.current = r), Y !== null)) throw Error(x(261));
  return (ee = null), (re = 0), K;
}
function Af() {
  for (; Y !== null; ) _s(Y);
}
function xf() {
  for (; Y !== null && !Xd(); ) _s(Y);
}
function _s(e) {
  var t = $s(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ks(e) : (Y = t),
    (Fo.current = null);
}
function Ks(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pf(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (K = 6), (Y = null);
        return;
      }
    } else if (((n = ff(n, t, Ae)), n !== null)) {
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
    l = Re.transition;
  try {
    (Re.transition = null), (O = 1), Sf(e, t, n, r);
  } finally {
    (Re.transition = l), (O = r);
  }
  return null;
}
function Sf(e, t, n, r) {
  do tn();
  while (it !== null);
  if (I & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ec(e, i),
    e === ee && ((Y = ee = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xr ||
      ((xr = !0),
      ed(Vr, function () {
        return tn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Re.transition), (Re.transition = null);
    var o = O;
    O = 1;
    var u = I;
    (I |= 4),
      (Fo.current = null),
      hf(e, n),
      Qs(n, e),
      qc(vi),
      (qr = !!yi),
      (vi = yi = null),
      (e.current = n),
      yf(n),
      Qd(),
      (I = u),
      (O = o),
      (Re.transition = i);
  } else e.current = n;
  if (
    (xr && ((xr = !1), (it = e), (nl = l)),
    (i = e.pendingLanes),
    i === 0 && (ct = null),
    Gd(n.stateNode),
    ge(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw ((tl = !1), (e = Mi), (Mi = null), e);
  return (
    nl & 1 && e.tag !== 0 && tn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Vi ? Dn++ : ((Dn = 0), (Vi = e))) : (Dn = 0),
    gt(),
    null
  );
}
function tn() {
  if (it !== null) {
    var e = za(nl),
      t = Re.transition,
      n = O;
    try {
      if (((Re.transition = null), (O = 16 > e ? 16 : e), it === null))
        var r = !1;
      else {
        if (((e = it), (it = null), (nl = 0), I & 6)) throw Error(x(331));
        var l = I;
        for (I |= 4, j = e.current; j !== null; ) {
          var i = j,
            o = i.child;
          if (j.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (j = s; j !== null; ) {
                  var h = j;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nn(8, h, i);
                  }
                  var v = h.child;
                  if (v !== null) (v.return = h), (j = v);
                  else
                    for (; j !== null; ) {
                      h = j;
                      var y = h.sibling,
                        S = h.return;
                      if ((Bs(h), h === s)) {
                        j = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = S), (j = y);
                        break;
                      }
                      j = S;
                    }
                }
              }
              var k = i.alternate;
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
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (j = o);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (j = f);
                break e;
              }
              j = i.return;
            }
        }
        var c = e.current;
        for (j = c; j !== null; ) {
          o = j;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (j = p);
          else
            e: for (o = c; j !== null; ) {
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
              if (u === o) {
                j = null;
                break e;
              }
              var A = u.sibling;
              if (A !== null) {
                (A.return = u.return), (j = A);
                break e;
              }
              j = u.return;
            }
        }
        if (
          ((I = l), gt(), We && typeof We.onPostCommitFiberRoot == "function")
        )
          try {
            We.onPostCommitFiberRoot(ol, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (Re.transition = t);
    }
  }
  return !1;
}
function Wu(e, t, n) {
  (t = an(n, t)),
    (t = Ns(e, t, 1)),
    (e = dt(e, t, 1)),
    (t = de()),
    e !== null && ($n(e, 1, t), ge(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Wu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wu(t, e, n);
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
function kf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (re & n) === n &&
      (K === 4 || (K === 3 && (re & 130023424) === re && 500 > G() - Co)
        ? Rt(e, 0)
        : (jo |= n)),
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
function wf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bs(e, n);
}
function Ef(e, t) {
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
      throw Error(x(314));
  }
  r !== null && r.delete(t), bs(e, n);
}
var $s;
$s = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), cf(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), W && t.flags & 1048576 && ns(t, Jr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Nr(e, t), (e = t.pendingProps);
      var l = rn(t, ae.current);
      en(t, n), (l = xo(null, t, r, e, l, n));
      var i = So();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((i = !0), Qr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ho(t),
            (l.updater = fl),
            (t.stateNode = l),
            (l._reactInternals = t),
            ji(t, r, e, n),
            (t = Pi(null, t, r, !0, i, n)))
          : ((t.tag = 0), W && i && uo(t), se(null, t, l, n), (t = t.child)),
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
          (l = t.tag = jf(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Ri(null, t, r, e, n);
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
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ri(e, t, r, l, n)
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
        if ((Ls(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          os(e, t),
          _r(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = an(Error(x(423)), t)), (t = Tu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = an(Error(x(424)), t)), (t = Tu(e, t, r, n, l));
            break e;
          } else
            for (
              xe = st(t.stateNode.containerInfo.firstChild),
                Se = t,
                W = !0,
                Ie = null,
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
        e === null && wi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        gi(r, l) ? (o = null) : i !== null && gi(r, i) && (t.flags |= 32),
        Os(e, t),
        se(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && wi(t), null;
    case 13:
      return Ms(e, t, n);
    case 4:
      return (
        yo(t, t.stateNode.containerInfo),
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
          (i = t.memoizedProps),
          (o = l.value),
          M(Gr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !ye.current) {
              t = Ke(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Je(-1, n & -n)), (a.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var h = s.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (s.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Ei(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(x(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ei(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
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
      return Ds(e, t, t.type, t.pendingProps, n);
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
        ji(t, r, l, n),
        Pi(null, t, r, !0, e, n)
      );
    case 19:
      return Vs(e, t, n);
    case 22:
      return Is(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function ed(e, t) {
  return ja(e, t);
}
function Ff(e, t, n, r) {
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
function Ce(e, t, n, r) {
  return new Ff(e, t, n, r);
}
function No(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jf(e) {
  if (typeof e == "function") return No(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yi)) return 11;
    if (e === _i) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
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
function Ir(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) No(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ut:
        return Pt(n.children, l, i, t);
      case Gi:
        (o = 8), (l |= 8);
        break;
      case _l:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = _l), (e.lanes = i), e
        );
      case Kl:
        return (e = Ce(13, n, t, l)), (e.elementType = Kl), (e.lanes = i), e;
      case bl:
        return (e = Ce(19, n, t, l)), (e.elementType = bl), (e.lanes = i), e;
      case sa:
        return yl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ua:
              o = 10;
              break e;
            case aa:
              o = 9;
              break e;
            case Yi:
              o = 11;
              break e;
            case _i:
              o = 14;
              break e;
            case et:
              (o = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Pt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function yl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = sa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zl(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function Jl(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cf(e, t, n, r, l) {
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
    (this.eventTimes = Cl(0)),
    (this.expirationTimes = Cl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Cl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function To(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new Cf(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ce(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(i),
    e
  );
}
function Rf(e, t, n) {
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
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (Lt(e) !== e || e.tag !== 1) throw Error(x(170));
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
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return es(e, n, t);
  }
  return t;
}
function nd(e, t, n, r, l, i, o, u, a) {
  return (
    (e = To(n, r, !0, e, l, i, o, u, a)),
    (e.context = td(null)),
    (n = e.current),
    (r = de()),
    (l = ft(n)),
    (i = Je(r, l)),
    (i.callback = t ?? null),
    dt(n, i, l),
    (e.current.lanes = l),
    $n(e, l, r),
    ge(e, r),
    e
  );
}
function vl(e, t, n, r) {
  var l = t.current,
    i = de(),
    o = ft(l);
  return (
    (n = td(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Je(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dt(l, t, o)),
    e !== null && (Le(e, l, o, i), Rr(e, l, o)),
    o
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
function Bu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Do(e, t) {
  Bu(e, t), (e = e.alternate) && Bu(e, t);
}
function Pf() {
  return null;
}
var rd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Io(e) {
  this._internalRoot = e;
}
gl.prototype.render = Io.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  vl(e, t, null, null);
};
gl.prototype.unmount = Io.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    It(function () {
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
    var t = Da();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && Oa(e);
  }
};
function Oo(e) {
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
function Hu() {}
function zf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = ll(o);
        i.call(s);
      };
    }
    var o = nd(t, r, e, 0, null, !1, !1, "", Hu);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Hn(e.nodeType === 8 ? e.parentNode : e),
      It(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = ll(a);
      u.call(s);
    };
  }
  var a = To(e, 0, !1, null, null, !1, !1, "", Hu);
  return (
    (e._reactRootContainer = a),
    (e[Ye] = a.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    It(function () {
      vl(t, a, n, r);
    }),
    a
  );
}
function xl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = ll(o);
        u.call(a);
      };
    }
    vl(t, o, e, l);
  } else o = zf(n, t, e, l, r);
  return ll(o);
}
Na = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wn(t.pendingLanes);
        n !== 0 &&
          ($i(t, n | 1), ge(t, G()), !(I & 6) && ((sn = G() + 500), gt()));
      }
      break;
    case 13:
      It(function () {
        var r = _e(e, 1);
        if (r !== null) {
          var l = de();
          Le(r, e, 1, l);
        }
      }),
        Do(e, 1);
  }
};
eo = function (e) {
  if (e.tag === 13) {
    var t = _e(e, 134217728);
    if (t !== null) {
      var n = de();
      Le(t, e, 134217728, n);
    }
    Do(e, 134217728);
  }
};
Ta = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = _e(e, t);
    if (n !== null) {
      var r = de();
      Le(n, e, t, r);
    }
    Do(e, t);
  }
};
Da = function () {
  return O;
};
Ia = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
ai = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ti(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            if (!l) throw Error(x(90));
            ca(r), ti(r, l);
          }
        }
      }
      break;
    case "textarea":
      pa(e, n);
      break;
    case "select":
      (t = n.value), t != null && _t(e, !!n.multiple, t, !1);
  }
};
xa = Ro;
Sa = It;
var Nf = { usingClientEntryPoint: !1, Events: [tr, Ht, dl, ga, Aa, Ro] },
  xn = {
    findFiberByHostInstance: Ft,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Tf = {
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
    findFiberByHostInstance: xn.findFiberByHostInstance || Pf,
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
      (ol = Sr.inject(Tf)), (We = Sr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oo(t)) throw Error(x(200));
  return Rf(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Oo(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = rd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = To(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    new Io(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Ea(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return It(e);
};
we.hydrate = function (e, t, n) {
  if (!Al(t)) throw Error(x(200));
  return xl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Oo(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = rd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = nd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Hn(e),
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
  if (!Al(t)) throw Error(x(200));
  return xl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!Al(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (It(function () {
        xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Ro;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Al(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
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
var Df = na.exports,
  Xu = Df;
(Gl.createRoot = Xu.createRoot), (Gl.hydrateRoot = Xu.hydrateRoot);
function If(e) {
  const n = {
    transform: `scale(${0.5})`,
    transformOrigin: "top left",
    width: "200%",
    height: "200%",
  };
  return d.jsx("div", { style: n, children: e.children });
}
const Of =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABICAYAAACz6LpGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPzSURBVHhe7dHRbuUwCEXR/v9Pz1SqRm1HG4wTICE5S9pP5Ro7/RAREREREREREREREREREREREREREREREREREXmiPxcmF6N/ytSq0K67JIXogz+tDHTuHZNE9IGf3Bl03l2TJPRx39IuOmNCchB9zLe1g34/JdlEH/HNRdDvpiVB9PHe3gr9ZmISQB9OfWWh2cmJgT6W+h2huenJf+gjKbuf6O9PSH6gD6SUfKIPo9S/Xo0+SLRJ6P5XVoV2ne3V6INEmo7e1FkX2n2kV6IPEelJ6H0ddaM77PQ69BEiPRW9tbIr0D12ehX6AJGejN5b1VXoLju9Bj1+1S46w8tCs9F20RkVEZrbLYJ+F+0V6OGrjqBzvCw0e6Qo+m12hOaOFEG/i/QK9PBVR9A5XhaaPdsK/SYzQnNn89D8qsejR0c6gs7xstBsRiv0m6wIzWXkoflVj0YPXnUUneVlodnMPDSfEaG5rDw0v+qR6KGrzqDzvCw0m52H5s9GaC4zD817PQ49MtIZdJ6XhWYr8tD8mQjNZWehWa/HoUeuOovO9LLQbFUemj8aobnsLDTr9Sj0wFUZ6FwvC81W5qH5IxGaq8hCs1aPQY+LlIHO9bLQbHUWmj0SobmqCM15PQI9bFUWOtvLQrMdWWh2N0JzVRGa8xqPHrUqE53vZaHZrgjN7UZorioLzVqNRg+KlInO98pE5x/JQrM7ZaGzI1lo1mo0elCkTHS+VwXasxuhuZ0y0fmrLDRrNRo9aFU22uFVifZFs9BstGy0w8tCs1Zj0WNWVaA9XtVoZzRCc9Gy0Q4vC81ajUQPiVSB9nh1oL2RCM1Fy0Y7vCw0azUSPWRVFdrl1YV2ryI0Fy0b7fCy0KzVOPSIVZVon1cn2u9lodlImej8VYTmvEahB0SqRPu8OtF+Lw/Nr8pCZ0ciNGc1Dj0ikoVmq+tGd/CqRjurIjRnNQo9IJKFZjvqRnfwqkY7K7LQrNUYdPlIFprtqhvdwasa7ayI0JzXGHT5SBaa7aob3cGrGu3MzkKzXmPQ5SMRmuusG93BqxrtzM5Cs14j0MUjEZrrrhvdwasa7czMQrNeI9DFI1lotrtudAevarQzKwvNeo1Bl49kodnuutEdvKrRzow8NO81Al08GqG5K+pGd/CqRjvP5qH5VbdHl45GaO6qOtF+rw6090wemo90e3TpSBaavapOtN+rA+3dLYp+u+r26NKRLDR7ZV1o96oOtDfaDvr9qhHo4pEsNHtlXWj3qg601+sIOifS7dGlI8lv9I1WPQG9K9rt0aWjyTf6PpGmozftdGt04Wjyjb5PtKnoLbvdHl06mnyhbxNtKnrLbgd9fPwFeQWjaOltzTgAAAAASUVORK5CYII=",
  Lf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABJCAYAAABrYykXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKwSURBVHhe7dDRjtwgEAXR+f+fTrQPliyr2tNgGvBuHakeMrkGko8kSeX+dSb+f2npDu2zEdqtbAv0sEx/Hf2f9BShbUuEditbjh6V6Q7td4rQbkYR2rZGaLeqLdDDMkVou1uEdjOK0LY1QrsVbYEelilC2x0jtKsuQtueCO1mtw16XKYIbXeM0K6yCG17I7Sb2TbocZkitN01QruqIrR9EqHdrLZBj8sWoe2uEdpVdIf2TyK0m9E26HHZIrTdOUK70d2h/dMI7araEj000x3a7xyh3cju0H5EhHYVbYsemylC290jtBvRN/TNqAjtRvQK9PBMEdq+IUK7p31D34yM0O5pr0APzxSh7VsitOspi74dHaFd1K9C/8BMEdq+JUK7TD3onIoI7aKeqjizGz3mW3don6kC3XPXKvSWygjtonrRWdemogdkitA2UxW6664V6B3VEdpF9ch8++T8ZsdlrUVom6kS3XfXDHTv7Ajtolq1fNd7R7PjotYI7TJVozvvqkZ3rojQLqrF9ZvzOefO6LehzhevrBrdac9rQd/Qn8+/0TdDHResbAa6157XgvaZ31rvSfs5eIdmoHt/Q2f099VlRfvMb9G3jxyHrm4WuvvtXdGmuha0v54XbYa6Xriqmej+txahbXVZ0f78292Gfu92HLi6mej+N3aH9tW1oP31Nzq39Z6vjktWNhu94U1l0HfVtaBv6M/n3+ibR44DVzcbveEtZdG31bWgb779Rn/f7ThsdSvQO3auB51TXavzd+dzjt9+XP9+mOPAla1Cb9m1XnRWdT0y3z45P3QcuqqV6D07NQKdW10vOuvacHTJrFajN+3QSHR+dU9VnClJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiR98/n8B+4ckCcq7saRAAAAAElFTkSuQmCC",
  Mf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAAADCAYAAABcWNmoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAInSURBVEhL7ZVZaxVBEEbbaOIW95Vshoj7jiExRgkBDagoggiiuKARQv7/D3CO/R1uPwwy3Ee5B4bTSWZqumqqOiWcjeFYfCKGU/GR7jpQl+V8fKi7putycJyjMZyL2zj+Drz3ZAyu++IQg1gwNI57BXNo45gruVMDMBcwx744M911sC5745yOYTY+HsOZuI1zIZ7qrsN1OTgO9/Mc9MXxPvB544Hv6YvD/tgnDI3T11NtnElvjujrTeOM05t/WYthOb4Zw/14rrtswGcxH9QPvR7DlfhWDPfi+e6ycZ7GJOumN2JYjO/E4Nq/gc8Qw8IZm8Is1GW5G8PteCkGcyAnm9VcyZ0agDUBa2XtwJpSaJv/eczHu1yX5WEM1+OVGFZjGtom2YoZkEt1WR7FcC2+GsPjmEG1SbZjfnaAvQ983njge3ivA+p+2J+D577BfMwPzJs6OFjWh3rZoJPeHPEk5uB0qDfjcXqzvIt5mR9zN+ZUMYkvMfhhX8TwJiYBT6VfMY1FUeFrDDbSTgyv4gfd5Un+I6ZRHJrvMfdwL/gsGLMdim8xRbpYl+VnzJ4tvrmAObbNbC2ojSevNaOGfjhrCw5a24SfYj6M/wn3YgbpRl2W9zE4aDYPfIwZMptrP2aQHN4PMTggGvw793tgGYe4DrHvA/fhvsD9sn8PLPMiTxvR/MG6WCfo683fcdubn2P4H3uTwfZweh3Dy7g9sP/VmxyyOZzK2z+3vjBE0tyuBwAAAABJRU5ErkJggg==",
  Vf =
    "data:image/png;base64,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",
  Uf =
    "data:image/png;base64,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",
  qf =
    "data:image/png;base64,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",
  Wf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+QAAAAoCAYAAAB3nzBDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASnSURBVHhe7ddBagNJEEXBuf+lZ8hFQyNedbVkaUB2BLyN9NMC7+qfB/9+KFr9ryYAAAD+mHocviNa/a8mAAAA/ph6HL4jWv2vJgAAAP6Yehy+I1r9ryYAAAD+mHocviNa/a8mAAAA/ph6HE4AAADAB9VjfAIAAAA+qB7jEwAAAPBB9Rif/i/12+fuqtvp0eq78+fnHtVmuqtup5XaTo9qM/3U7m/W99Mz6v4cAADAr1QPoOnT6jev2qmb6XD13ajvp0N9V+3UzbRS2+lQ31XPqPtq1OfTHXV3FQAAwK9SD5/pk+r37nSl9tOoz6ez+n4a9flVV2o/rdR2GvX5VXfU3Svt1M3dAAAAfoV68EyfUr/1TCu13XVW37/aldpPK7V9tZ26ebUrtX8mAACAX6EePD9tpbavVGq366y+/0krtZ1WavuTrtT+1a7U/tkAAAC+Xj12ftpKbY8e1eao1G7XWX1/rtTuaKW200ptz5XaHa3U9qjU7txKbY8e1eYIAADg69Vj56et1HZaqe1UavfYldofrdT2aKW200ptj1Zqe7RS2+lK7Y9Wajtdqf0EAADw1eqh89NWajut1HYqtTu6o+6mnbqZVmo7rdR22qmbaaW205XaH63UdrpS+wkAAOCr1UPnp71D/d2jUrvprrqddupmWqnttFLbaaduplK76Y66m1Zqew4AAODPqEfR9H+q37+q1G66q26nnbqZVmo7rdR22qmbqdRuuqPupiu1vwoAAOBXqgfQ9Gn1m3crtZvuqttpp26mldpOK7WddupmKrWb7qi7aadu7gQAAPBr1KNn+pT6rWcrtZvuqttpp26mldpOK7WddupmKrWb7qi76a66vRMAAMDXq8fO9An1O+ce1WYqtZvuqttpp26mldpOK7WddupmKrWb7qi76RX1d64CAAD4avXQmd6tfuNopbZTqd10V91OO3UzrdR2WqnttFM3U6nddEfdTe9Sf/scAADA16pHzvRu9RvTldpPpXbTXXU77dTNtFLbaaW2007dTKV2R1dqf1RqN91RdxMAAMDXqkfO9G71G9NKbY9K7aa76nbaqZtppbbTSm2nnbqZVmo7Xan9Uand0U7dTAAAAF+rHjnTu9VvHD2qzblSu+muup126mZaqe20Uttpp26mldoeldqdK7U7t1LbIwAAgK9Vj5x3dVbfv1qp3XRX3U47dTOt1HZaqe20UzfTldq/2kptXw0AAOCr1UPnXZ3V969WajfdVbfTTt1MK7WdVmo77dTNdKX2r3al9q8EAADw1eqh864e1WbVqM+nUrvprrqddupmWqnttFLbaadupp26eaUrtX82AACAr1ePnXdVavfYob47elSb6a66nXbqZlqp7bRS22mnbqY76q4a9fl0R93dCQAA4FeoB8+7unJ3X7vpUW2mu+p22qmbaaW200ptp526mZ61+xv1/fSMun8MAAAAOKnH8wQAAAB8UD3GJwAAAOCGelRPV2p/BAAAANxQj+qjUrsjAAAA4KZ6WL8aAAAA8IR6XD8bAAAAF+ohJUmSJEmSPlt+KEmSJEmSPlt+KEmSJEmSPlt+KEmSJEmSPtY///4HLKCWuz4mcAsAAAAASUVORK5CYII=",
  Bf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAICAYAAADHlHLmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAvSURBVFhH7chBDQAwDAOx8ifdEQiARvNJ/txIkiRJkvRRC9SKE+gQJ9AhTuC82QeAkbxunu1idQAAAABJRU5ErkJggg==",
  Hf =
    "data:image/png;base64,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",
  Xf =
    "data:image/png;base64,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",
  Qf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAICAYAAADHlHLmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAvSURBVFhH7chBDQAwDAOx8ifdEQiARvNJ/txIkiRJkvRRC9SKE+gQJ9AhTuC82QeAkbxunu1idQAAAABJRU5ErkJggg==",
  Zf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAA4CAYAAAAilkrCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHrSURBVHhe7dgxbhxBEARB/v/TFA3J0qbVOBq1EUA5k0A/YL5+fJuZmZmZ/eIeH83MzMzMPrXHRzMzMzOzT+3x0czMzMzsU/tPhr90XW+6rjdd19vb+/mArutN1/Wm63pb7wAAAAAAQ65fprquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAAPAi1y9VXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGHL9MtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAXuX6p6rredF1vuq639X4+oOt603W96bre1jsAAAAAwJDrl6mu603X9abrelvv5wO6rjdd15uu6229AwAAAAC8yPVLVdf1put603W9rffzAV3Xm67rTdf1tt4BAAAAAIZcv0x1XW+6rjdd19t6Px/Qdb3put50XW/rHQAAAADgRa5fqrquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAADDk+mWq63rTdb3put7W+/mArutN1/Wm63pb7wAAAAAAL3L9UtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAh1y9TXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGPbvi9TMzMzM7Df2+GhmZmZm9qk9PpqZmZmZfWqPj2ZmZmZmH9jX9x+UB51dgY19sQAAAABJRU5ErkJggg==",
  Jf =
    "data:image/png;base64,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",
  Gf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAA4CAYAAAAilkrCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHrSURBVHhe7dgxbhxBEARB/v/TFA3J0qbVOBq1EUA5k0A/YL5+fJuZmZmZ/eIeH83MzMzMPrXHRzMzMzOzT+3x0czMzMzsU/tPhr90XW+6rjdd19vb+/mArutN1/Wm63pb7wAAAAAAQ65fprquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAAPAi1y9VXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGHL9MtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAXuX6p6rredF1vuq639X4+oOt603W96bre1jsAAAAAwJDrl6mu603X9abrelvv5wO6rjdd15uu6229AwAAAAC8yPVLVdf1put603W9rffzAV3Xm67rTdf1tt4BAAAAAIZcv0x1XW+6rjdd19t6Px/Qdb3put50XW/rHQAAAADgRa5fqrquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAADDk+mWq63rTdb3put7W+/mArutN1/Wm63pb7wAAAAAAL3L9UtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAh1y9TXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGPbvi9TMzMzM7Df2+GhmZmZm9qk9PpqZmZmZfWqPj2ZmZmZmH9jX9x+UB51dgY19sQAAAABJRU5ErkJggg==",
  Yf = "./assets/notAChckStmp-18a70a7d.png",
  _f =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAA4CAYAAAAilkrCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHrSURBVHhe7dgxbhxBEARB/v/TFA3J0qbVOBq1EUA5k0A/YL5+fJuZmZmZ/eIeH83MzMzMPrXHRzMzMzOzT+3x0czMzMzsU/tPhr90XW+6rjdd19vb+/mArutN1/Wm63pb7wAAAAAAQ65fprquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAAPAi1y9VXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGHL9MtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAXuX6p6rredF1vuq639X4+oOt603W96bre1jsAAAAAwJDrl6mu603X9abrelvv5wO6rjdd15uu6229AwAAAAC8yPVLVdf1put603W9rffzAV3Xm67rTdf1tt4BAAAAAIZcv0x1XW+6rjdd19t6Px/Qdb3put50XW/rHQAAAADgRa5fqrquN13Xm67rbb2fD+i63nRdb7qut/UOAAAAADDk+mWq63rTdb3put7W+/mArutN1/Wm63pb7wAAAAAAL3L9UtV1vem63nRdb+v9fEDX9abretN1va13AAAAAIAh1y9TXdebrutN1/W23s8HdF1vuq43XdfbegcAAAAAGPbvi9TMzMzM7Df2+GhmZmZm9qk9PpqZmZmZfWqPj2ZmZmZmH9jX9x+UB51dgY19sQAAAABJRU5ErkJggg==",
  Kf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAACCAYAAADSBaePAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAcSURBVDhPY4CC/6N4FA8iDAfYJEfxKB4gzMAAAAC3RsjfOTGQAAAAAElFTkSuQmCC",
  bf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAACCAYAAADSBaePAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAcSURBVDhPY4CC/6N4FA8iDAfYJEfxKB4gzMAAAAC3RsjfOTGQAAAAAElFTkSuQmCC",
  $f =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAACCAYAAADSBaePAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAcSURBVDhPY4CC/6N4FA8iDAfYJEfxKB4gzMAAAAC3RsjfOTGQAAAAAElFTkSuQmCC",
  ep =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAAACCAYAAACpIWVDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAbSURBVDhPY4CC/6N4FNMRwwE2yVE8immEGRgA1DA22MjnuFIAAAAASUVORK5CYII=";
function tp({ pos: e }) {
  let { statePos: t, fedPos: n, otPos: r } = e;
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx("p", {
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
      d.jsxs("div", {
        children: [
          d.jsx("img", {
            src: Of,
            style: {
              position: "absolute",
              width: ".65in",
              height: ".23in",
              top: ".22in",
              left: "7.455in",
            },
          }),
          d.jsx("img", {
            src: Lf,
            style: {
              position: "absolute",
              width: ".62in",
              height: ".24in",
              top: ".442in",
              left: "7.455in",
            },
          }),
          d.jsx("img", {
            src: Mf,
            style: {
              position: "absolute",
              width: "2.64in",
              height: ".03in",
              top: ".17in",
              left: "1.31in",
            },
          }),
          d.jsx("img", {
            src: Vf,
            style: {
              position: "absolute",
              width: "2.64in",
              height: ".12in",
              top: ".19in",
              left: "1.31in",
            },
          }),
          d.jsx("img", {
            src: Uf,
            style: {
              position: "absolute",
              width: "2.64in",
              height: ".12in",
              top: ".29in",
              left: "1.31in",
            },
          }),
          d.jsx("img", {
            src: qf,
            style: {
              position: "absolute",
              width: "2.64in",
              height: ".12in",
              top: ".4in",
              left: "1.31in",
            },
          }),
          d.jsx("img", {
            src: Wf,
            style: {
              position: "absolute",
              width: "3.325in",
              height: ".15in",
              top: "2.58in",
              left: ".285in",
            },
          }),
          d.jsx("img", {
            src: Hf,
            style: {
              position: "absolute",
              width: "2.215in",
              height: ".15in",
              top: "2.745in",
              left: "4.92in",
            },
          }),
          d.jsx("img", {
            src: Bf,
            style: {
              position: "absolute",
              width: ".8in",
              height: ".03in",
              top: "2.69in",
              left: "3.85in",
            },
          }),
          d.jsx("img", {
            src: Xf,
            style: {
              position: "absolute",
              width: "3.17in",
              height: ".14in",
              top: "3.33in",
              left: "4.92in",
            },
          }),
          d.jsx("img", {
            src: Qf,
            style: {
              position: "absolute",
              width: ".793in",
              height: ".03in",
              top: "2.863in",
              left: "7.316in",
            },
          }),
          d.jsx("img", {
            src: Zf,
            style: {
              position: "absolute",
              width: "2.245in",
              height: ".19in",
              top: 2.87 + r + "in",
              left: "1.31in",
            },
          }),
          d.jsx("img", {
            src: Jf,
            style: {
              position: "absolute",
              width: "3.25in",
              height: ".13in",
              top: "3.335in",
              left: ".288in",
            },
          }),
          d.jsx("img", {
            src: Gf,
            style: {
              position: "absolute",
              width: "2.245in",
              height: ".19in",
              top: 3.84 + t + n + "in",
              left: "1.31in",
            },
          }),
          d.jsx("img", {
            src: _f,
            style: {
              position: "absolute",
              width: "2.245in",
              height: ".19in",
              top: 4.255 + t + n + "in",
              left: "1.31in",
            },
          }),
          d.jsx("img", {
            src: Yf,
            style: {
              position: "absolute",
              width: "5.16in",
              height: "2.18in",
              top: "8.22in",
              left: "1.14in",
            },
          }),
          d.jsx("img", {
            src: Kf,
            style: {
              position: "absolute",
              width: "1.88in",
              height: ".01in",
              top: "9.05in",
              left: "1.38in",
            },
          }),
          d.jsx("img", {
            src: bf,
            style: {
              position: "absolute",
              width: "1.88in",
              height: ".01in",
              top: "9.05in",
              left: "3.2in",
            },
          }),
          d.jsx("img", {
            src: $f,
            style: {
              position: "absolute",
              width: "2.1in",
              height: ".01in",
              top: "9.05in",
              left: "5in",
            },
          }),
          d.jsx("img", {
            src: ep,
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
      d.jsx("p", {
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
      d.jsxs("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
function np({ handleEdit: e }) {
  const t = (n) => {
    const [r, l] = e(n),
      i = document.getElementById(n.target.id);
    r.addEventListener("change", (o) => {
      switch (o.target.id) {
        case "perBegin":
          i.innerText = o.target.value;
          break;
        case "perEnd":
          i.innerText = o.target.value;
          break;
        case "payDateTop":
          (document.getElementById("payDateBott").innerText = o.target.value),
            (i.innerText = o.target.value);
          break;
        case "payDateBott":
          (i.innerText = o.target.value),
            (document.getElementById("payDateTop").innerText = o.target.value);
          break;
      }
      l.removeChild(r);
    });
  };
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      style: { fontSize: "9pt", wordSpacing: ".04in" },
      children: [
        d.jsx("p", {
          style: {
            position: "absolute",
            top: ".53in",
            left: "4.92in",
            width: "1.05in",
          },
          children: "Period Beginning:",
        }),
        d.jsx("p", {
          style: {
            position: "absolute",
            top: ".7in",
            left: "4.92in",
            width: "1.05in",
          },
          children: "Period Ending:",
        }),
        d.jsx("p", {
          style: {
            position: "absolute",
            top: ".87in",
            left: "4.92in",
            width: "1.05in",
          },
          children: "Pay Date:",
        }),
        d.jsx("p", {
          style: {
            position: "absolute",
            top: "8.12in",
            left: "4.925in",
            width: "1.05in",
          },
          children: "Pay date:",
        }),
        d.jsx("p", {
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
        d.jsx("p", {
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
        d.jsx("p", {
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
        d.jsx("p", {
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
function rp({ employee: e, handleEdit: t, dispatch: n }) {
  let { name: r, address: l, apt: i, city: o, state: u, zip: a } = e,
    s;
  r !== void 0 &&
    ((r = r.toUpperCase()),
    (l = l.toUpperCase()),
    (i = i.toUpperCase()),
    (s = (o + " " + u + " " + a).toUpperCase()));
  const h = (v) => {
    const [y, S] = t(v);
    y.addEventListener("change", (k) => {
      n({
        type: "txt",
        payload: k.target.value,
        cat: "employee",
        key: k.target.id,
      }),
        S.removeChild(y);
    });
  };
  return d.jsx(d.Fragment, {
    children:
      i !== "" && i !== void 0
        ? d.jsxs(d.Fragment, {
            children: [
              d.jsxs("div", {
                style: {
                  fontSize: "9pt",
                  fontWeight: "bold",
                  wordSpacing: ".06in",
                },
                children: [
                  d.jsx("p", {
                    id: "name",
                    className: "edit",
                    onClick: h,
                    value: "name",
                    style: {
                      position: "absolute",
                      top: "1.445in",
                      left: "5.16in",
                    },
                    children: r,
                  }),
                  d.jsx("p", {
                    id: "address",
                    className: "edit",
                    onClick: h,
                    style: {
                      position: "absolute",
                      top: "1.61in",
                      left: "5.16in",
                    },
                    children: l,
                  }),
                  d.jsx("p", {
                    id: "apt",
                    className: "edit",
                    onClick: h,
                    style: {
                      position: "absolute",
                      top: "1.78in",
                      left: "5.16in",
                    },
                    children: i,
                  }),
                  d.jsx("p", {
                    id: "address3",
                    className: "edit",
                    onClick: h,
                    style: {
                      position: "absolute",
                      top: "1.95in",
                      left: "5.16in",
                    },
                    children: s,
                  }),
                ],
              }),
              d.jsx("p", {
                id: "name",
                className: "edit",
                onClick: h,
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
        : d.jsxs(d.Fragment, {
            children: [
              d.jsxs("div", {
                style: {
                  fontSize: "9pt",
                  fontWeight: "bold",
                  wordSpacing: ".06in",
                },
                children: [
                  d.jsx("p", {
                    id: "name",
                    className: "edit",
                    onClick: h,
                    style: {
                      position: "absolute",
                      top: "1.445in",
                      left: "5.16in",
                    },
                    children: r,
                  }),
                  d.jsx("p", {
                    id: "address",
                    className: "edit",
                    onClick: h,
                    style: {
                      position: "absolute",
                      top: "1.61in",
                      left: "5.16in",
                    },
                    children: l,
                  }),
                  d.jsx("p", {
                    id: "address3",
                    className: "edit",
                    onClick: h,
                    style: {
                      position: "absolute",
                      top: "1.78in",
                      left: "5.16in",
                    },
                    children: s,
                  }),
                ],
              }),
              d.jsx("p", {
                id: "name",
                className: "edit",
                onClick: h,
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
function lp({ employer: e, handleEdit: t, dispatch: n }) {
  let { name: r, address: l, apt: i, city: o, state: u, zip: a } = e,
    s;
  r !== void 0 &&
    ((r = r.toUpperCase()),
    (l = l.toUpperCase()),
    (i = i.toUpperCase()),
    (s = (o + " " + u + " " + a).toUpperCase()));
  const h = (v) => {
    const [y, S] = t(v);
    y.addEventListener("change", (k) => {
      n({
        type: "txt",
        payload: k.target.value,
        cat: "employer",
        key: k.target.id,
      }),
        S.removeChild(y);
    });
  };
  return d.jsx(d.Fragment, {
    children:
      i !== void 0 && i !== ""
        ? d.jsxs(d.Fragment, {
            children: [
              d.jsxs("div", {
                style: {
                  fontSize: "7.5pt",
                  lineHeight: ".16",
                  fontStyle: "italic",
                  letterSpacing: ".0045in",
                },
                children: [
                  d.jsx("p", {
                    style: {
                      position: "absolute",
                      wordSpacing: ".1in",
                      top: ".63in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    id: "name",
                    children: r,
                  }),
                  d.jsx("p", {
                    id: "apt",
                    style: {
                      position: "absolute",
                      top: ".8in",
                      left: "1.38in",
                      width: "2.2in",
                      wordSpacing: ".058in",
                    },
                    className: "edit",
                    onClick: h,
                    children: i,
                  }),
                  d.jsx("p", {
                    id: "address",
                    style: {
                      position: "absolute",
                      top: ".96in",
                      wordSpacing: ".041in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    children: l,
                  }),
                  d.jsx("p", {
                    id: "address3",
                    style: {
                      position: "absolute",
                      top: "1.14in",
                      wordSpacing: ".1in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    children: s,
                  }),
                ],
              }),
              d.jsxs("div", {
                style: { fontSize: "9pt", lineHeight: ".16" },
                children: [
                  d.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.03in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    id: "name",
                    children: r,
                  }),
                  d.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.2in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    id: "apt",
                    children: i,
                  }),
                  d.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.36in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    id: "address",
                    children: l,
                  }),
                  d.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.53in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    id: "address3",
                    children: s,
                  }),
                ],
              }),
            ],
          })
        : d.jsxs(d.Fragment, {
            children: [
              d.jsxs("div", {
                style: {
                  fontSize: "7.5pt",
                  lineHeight: ".16",
                  fontStyle: "italic",
                  letterSpacing: ".0045in",
                },
                children: [
                  d.jsx("p", {
                    style: {
                      position: "absolute",
                      wordSpacing: ".1in",
                      top: ".63in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    id: "name",
                    children: r,
                  }),
                  d.jsx("p", {
                    id: "address",
                    style: {
                      position: "absolute",
                      top: ".8in",
                      left: "1.38in",
                      width: "2.2in",
                      wordSpacing: ".058in",
                    },
                    className: "edit",
                    onClick: h,
                    children: l,
                  }),
                  d.jsx("p", {
                    id: "address3",
                    style: {
                      position: "absolute",
                      top: ".96in",
                      wordSpacing: ".041in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    children: s,
                  }),
                ],
              }),
              d.jsxs("div", {
                style: { fontSize: "9pt", lineHeight: ".16" },
                children: [
                  d.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.03in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    id: "name",
                    children: r,
                  }),
                  d.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.2in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    id: "address",
                    children: l,
                  }),
                  d.jsx("p", {
                    style: {
                      position: "absolute",
                      top: "8.36in",
                      left: "1.38in",
                      width: "2.2in",
                    },
                    className: "edit",
                    onClick: h,
                    id: "address3",
                    children: s,
                  }),
                ],
              }),
            ],
          }),
  });
}
function ip() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "6pt",
          top: ".12in",
          left: "1.398in",
          wordSpacing: ".04in",
        },
        children: "CO.",
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "6pt",
          top: ".12in",
          left: "1.776in",
          wordSpacing: ".04in",
        },
        children: "FILE",
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "6pt",
          top: ".12in",
          left: "2.24in",
          wordSpacing: ".04in",
        },
        children: "DEPT.",
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "6pt",
          top: ".12in",
          left: "2.69in",
          wordSpacing: ".04in",
        },
        children: "CLOCK",
      }),
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
      d.jsx("p", {
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
function op({ taxInfo: e, handleEdit: t, dispatch: n }) {
  let { status: r, fed: l, state: i, stateTaxed: o } = e;
  o !== void 0 && (o = o.toUpperCase());
  const u = (a) => {
    const [s, h] = t(a);
    s.addEventListener("change", (v) => {
      n({
        type: "txt",
        payload: v.target.value,
        cat: "taxInfo",
        key: v.target.id,
      }),
        h.removeChild(s);
    });
  };
  return d.jsxs("div", {
    style: { fontSize: "7pt", wordSpacing: ".07in" },
    children: [
      d.jsx("p", {
        style: {
          position: "absolute",
          top: "1.62in",
          left: "1.38in",
          width: ".65in",
        },
        children: "Filing Status:",
      }),
      d.jsx("p", {
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
      d.jsx("p", {
        style: { position: "absolute", top: "1.76in", left: "1.38in" },
        children: "Exemptions/Allowances:",
      }),
      d.jsx("p", {
        style: { position: "absolute", top: "1.89in", left: "1.52in" },
        children: "Federal:",
      }),
      d.jsx("p", {
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
      d.jsxs("p", {
        id: "stateTaxed",
        onClick: u,
        className: "edit",
        style: { position: "absolute", top: "2.01in", left: "1.52in" },
        children: [o, ":"],
      }),
      d.jsx("p", {
        onClick: u,
        className: "edit",
        id: "state",
        style: { position: "absolute", top: "2.01in", left: "1.955in" },
        children: i,
      }),
    ],
  });
}
function Qu() {
  let e = new Date(),
    t = new Date(e.getFullYear(), 0, 1);
  return Math.ceil(((e.getTime() - t.getTime()) / 864e5 + t.getDay() + 1) / 7);
}
function up({ taxInfo: e, payInfo: t, pos: n, handleEdit: r, dispatch: l }) {
  let { status: i, fed: o, state: u, stateTaxed: a } = e,
    {
      sched: s,
      rate: h,
      hours: v,
      otHrs: y,
      by: S,
      minGross: k,
      regYTD: w,
      otYTD: L,
    } = t,
    { statePos: f, fedPos: c, otPos: p } = n;
  (h = parseFloat(h).toFixed(4)), (v = parseFloat(v).toFixed(2));
  let A = (h * v).toFixed(2);
  w = parseFloat(A * (parseFloat(Qu()) - 1)).toFixed(2);
  let F = (h * 1.5).toFixed(4);
  y = parseFloat(y).toFixed(2);
  let C = (F * y).toFixed(2);
  L = parseFloat(parseFloat(C) * (parseFloat(Qu()) - 1)).toFixed(2);
  let g = (parseFloat(A) + parseFloat(C)).toFixed(2),
    m = (parseFloat(w) + parseFloat(L)).toFixed(2),
    q = (parseFloat(g) * -0.062).toFixed(2),
    z;
  i === "Married" && parseFloat(m) > 25e4 && (z = parseFloat(15500).toFixed(2)),
    i !== "Married" &&
      parseFloat(m) > 160200 &&
      (z = parseFloat(9932.4).toFixed(2)),
    (z = (parseFloat(m) * 0.062).toFixed(2));
  let pe = (parseFloat(g) * -0.0145).toFixed(2),
    At = (parseFloat(m) * 0.0145).toFixed(2),
    N,
    D;
  o === void 0 || o === "Tax Blocked" || o === ""
    ? ((N = 0), (D = 0))
    : (i === "Single" &&
        (parseFloat(m) <= 11e3 &&
          ((N = (parseFloat(g) * -0.1).toFixed(2)),
          (D = (parseFloat(m) * 0.1).toFixed(2))),
        parseFloat(m) > 11e3 &&
          parseFloat(m) <= 44725 &&
          ((N = (parseFloat(g) * -0.12).toFixed(2)),
          (D = ((parseFloat(m) - 11e3) * 0.12 + 1100).toFixed(2))),
        parseFloat(m) > 44725 &&
          parseFloat(m) <= 95375 &&
          ((N = (parseFloat(g) * -0.22).toFixed(2)),
          (D = ((parseFloat(m) - 44725) * 0.22 + 5147).toFixed(2))),
        parseFloat(m) > 95375 &&
          parseFloat(m) <= 182100 &&
          ((N = (parseFloat(g) * -0.24).toFixed(2)),
          (D = ((parseFloat(m) - 95375) * 0.24 + 16290).toFixed(2))),
        parseFloat(m) > 182100 &&
          parseFloat(m) <= 231250 &&
          ((N = (parseFloat(g) * -0.32).toFixed(2)),
          (D = ((parseFloat(m) - 182100) * 0.32 + 37104).toFixed(2))),
        parseFloat(m) > 231250 &&
          parseFloat(m) <= 578125 &&
          ((N = (parseFloat(g) * -0.35).toFixed(2)),
          (D = ((parseFloat(m) - 231250) * 0.35 + 52832).toFixed(2))),
        parseFloat(m) > 578125 &&
          ((N = (parseFloat(g) * -0.37).toFixed(2)),
          (D = ((parseFloat(m) - 578125) * 0.37 + 174238.25).toFixed(2)))),
      i === "Married filing seperately" &&
        (parseFloat(m) <= 11e3 &&
          ((N = (parseFloat(g) * -0.1).toFixed(2)),
          (D = (parseFloat(m) * 0.1).toFixed(2))),
        parseFloat(m) > 11e3 &&
          parseFloat(m) <= 44725 &&
          ((N = (parseFloat(g) * -0.12).toFixed(2)),
          (D = ((parseFloat(m) - 11e3) * 0.12 + 1100).toFixed(2))),
        parseFloat(m) > 44725 &&
          parseFloat(m) <= 95375 &&
          ((N = (parseFloat(g) * -0.22).toFixed(2)),
          (D = ((parseFloat(m) - 44725) * 0.22 + 5147).toFixed(2))),
        parseFloat(m) > 95375 &&
          parseFloat(m) <= 182100 &&
          ((N = (parseFloat(g) * -0.24).toFixed(2)),
          (D = ((parseFloat(m) - 95375) * 0.24 + 16290).toFixed(2))),
        parseFloat(m) > 182100 &&
          parseFloat(m) <= 231250 &&
          ((N = (parseFloat(g) * -0.32).toFixed(2)),
          (D = ((parseFloat(m) - 182100) * 0.32 + 37104).toFixed(2))),
        parseFloat(m) > 231250 &&
          parseFloat(m) <= 346875 &&
          ((N = (parseFloat(g) * -0.35).toFixed(2)),
          (D = ((parseFloat(m) - 231250) * 0.35 + 52832).toFixed(2))),
        parseFloat(m) > 346875 &&
          ((N = (parseFloat(g) * -0.37).toFixed(2)),
          (D = ((parseFloat(m) - 346875) * 0.37 + 93300.75).toFixed(2)))),
      i === "Head of House" &&
        (parseFloat(m) <= 15700 &&
          ((N = (parseFloat(g) * -0.1).toFixed(2)),
          (D = (parseFloat(m) * 0.1).toFixed(2))),
        parseFloat(m) > 15700 &&
          parseFloat(m) <= 59850 &&
          ((N = (parseFloat(g) * -0.12).toFixed(2)),
          (D = ((parseFloat(m) - 15700) * 0.12 + 1570).toFixed(2))),
        parseFloat(m) > 59850 &&
          parseFloat(m) <= 95350 &&
          ((N = (parseFloat(g) * -0.22).toFixed(2)),
          (D = ((parseFloat(m) - 59850) * 0.22 + 6868).toFixed(2))),
        parseFloat(m) > 95350 &&
          parseFloat(m) <= 182100 &&
          ((N = (parseFloat(g) * -0.24).toFixed(2)),
          (D = ((parseFloat(m) - 95350) * 0.24 + 14678).toFixed(2))),
        parseFloat(m) > 182100 &&
          parseFloat(m) <= 231250 &&
          ((N = (parseFloat(g) * -0.32).toFixed(2)),
          (D = ((parseFloat(m) - 182100) * 0.32 + 35498).toFixed(2))),
        parseFloat(m) > 231250 &&
          parseFloat(m) <= 578100 &&
          ((N = (parseFloat(g) * -0.35).toFixed(2)),
          (D = ((parseFloat(m) - 231250) * 0.35 + 51226).toFixed(2))),
        parseFloat(m) > 578100 &&
          ((N = (parseFloat(g) * -0.37).toFixed(2)),
          (D = ((parseFloat(m) - 578100) * 0.37 + 172623.5).toFixed(2)))),
      i === "Married" &&
        (parseFloat(m) <= 22e3 &&
          ((N = (parseFloat(g) * -0.1).toFixed(2)),
          (D = (parseFloat(m) * 0.1).toFixed(2))),
        parseFloat(m) > 22e3 &&
          parseFloat(m) <= 89450 &&
          ((N = (parseFloat(g) * -0.12).toFixed(2)),
          (D = ((parseFloat(m) - 22e3) * 0.12 + 2200).toFixed(2))),
        parseFloat(m) > 89450 &&
          parseFloat(m) <= 190750 &&
          ((N = (parseFloat(g) * -0.22).toFixed(2)),
          (D = ((parseFloat(m) - 89450) * 0.22 + 10294).toFixed(2))),
        parseFloat(m) > 190750 &&
          parseFloat(m) <= 364200 &&
          ((N = (parseFloat(g) * -0.24).toFixed(2)),
          (D = ((parseFloat(m) - 190750) * 0.24 + 32580).toFixed(2))),
        parseFloat(m) > 364200 &&
          parseFloat(m) <= 462500 &&
          ((N = (parseFloat(g) * -0.32).toFixed(2)),
          (D = ((parseFloat(m) - 364200) * 0.32 + 74208).toFixed(2))),
        parseFloat(m) > 462500 &&
          parseFloat(m) <= 693750 &&
          ((N = (parseFloat(g) * -0.35).toFixed(2)),
          (D = ((parseFloat(m) - 462500) * 0.35 + 105664).toFixed(2))),
        parseFloat(m) > 693750 &&
          ((N = (parseFloat(g) * -0.37).toFixed(2)),
          (D = ((parseFloat(m) - 693750) * 0.37 + 186601.5).toFixed(2))))),
    a !== void 0 && (a = a.toUpperCase());
  let te, b;
  (i === "Married" && u !== "Tax Blocked") ||
  (i === "Married" && u !== void 0) ||
  (i === "Married" && u !== "")
    ? (parseFloat(m) <= 1e3 &&
        ((te = (parseFloat(g) * -0.01).toFixed(2)),
        (b = (parseFloat(m) * 0.01).toFixed(2))),
      parseFloat(m) > 1e3 &&
        parseFloat(m) <= 3e3 &&
        ((te = (parseFloat(g) * -0.02).toFixed(2)),
        (b = (parseFloat(m) * 0.02).toFixed(2))),
      parseFloat(m) > 3e3 &&
        parseFloat(m) <= 5e3 &&
        ((te = (parseFloat(g) * -0.03).toFixed(2)),
        (b = (parseFloat(m) * 0.03).toFixed(2))),
      parseFloat(m) > 5e3 &&
        parseFloat(m) <= 7e3 &&
        ((te = (parseFloat(g) * -0.04).toFixed(2)),
        (b = (parseFloat(m) * 0.04).toFixed(2))),
      parseFloat(m) > 7e3 &&
        parseFloat(m) <= 1e4 &&
        ((te = (parseFloat(g) * -0.05).toFixed(2)),
        (b = (parseFloat(m) * 0.05).toFixed(2))),
      parseFloat(m) > 1e4 &&
        ((te = (parseFloat(g) * -0.0575).toFixed(2)),
        (b = (parseFloat(m) * 0.0575).toFixed(2))))
    : u !== void 0 || u !== "Tax Blocked" || u !== ""
    ? (parseFloat(m) <= 750 &&
        ((te = (parseFloat(g) * -0.01).toFixed(2)),
        (b = (parseFloat(m) * 0.01).toFixed(2))),
      parseFloat(m) > 750 &&
        parseFloat(m) <= 2250 &&
        ((te = (parseFloat(g) * -0.02).toFixed(2)),
        (b = (parseFloat(m) * 0.02).toFixed(2))),
      parseFloat(m) > 2250 &&
        parseFloat(m) <= 3750 &&
        ((te = (parseFloat(g) * -0.03).toFixed(2)),
        (b = (parseFloat(m) * 0.03).toFixed(2))),
      parseFloat(m) > 3750 &&
        parseFloat(m) <= 5250 &&
        ((te = (parseFloat(g) * -0.04).toFixed(2)),
        (b = (parseFloat(m) * 0.04).toFixed(2))),
      parseFloat(m) > 5250 &&
        parseFloat(m) <= 7e3 &&
        ((te = (parseFloat(g) * -0.05).toFixed(2)),
        (b = (parseFloat(m) * 0.05).toFixed(2))),
      parseFloat(m) > 7e3 &&
        ((te = (parseFloat(g) * -0.0575).toFixed(2)),
        (b = (parseFloat(m) * 0.0575).toFixed(2))))
    : ((te = 0), (b = 0));
  let xt = (
    parseFloat(g) +
    parseFloat(q) +
    parseFloat(pe) +
    parseFloat(te) +
    parseFloat(N)
  ).toFixed(2);
  const E = (R) => {
    const [P, B] = r(R);
    P.addEventListener("change", (J) => {
      l({
        type: "txt",
        payload: J.target.value,
        cat: "payInfo",
        key: J.target.id,
      }),
        B.removeChild(P);
    });
  };
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9.5pt",
          left: ".285in",
          top: "2.57in",
        },
        children: "Regular",
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9.5pt",
          right: "6.48in",
          top: "2.57in",
        },
        className: "edit",
        onClick: E,
        id: "rate",
        children: h,
      }),
      d.jsx("p", {
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
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9.5pt",
          right: "4.95in",
          top: "2.57in",
        },
        id: "regPayThisPeriod",
        children: A,
      }),
      d.jsx("p", {
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
      d.jsx("p", {
        style: {
          position: "absolute",
          fontWeight: "bold",
          fontSize: "7pt",
          left: "2.35in",
          top: "2.46in",
        },
        id: "by",
        children: S,
      }),
      d.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 2.75 + parseFloat(p) + "in",
          fontWeight: "bold",
        },
        id: "grossPay",
        children: ["$", g],
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: 2.75 + parseFloat(p) + "in",
        },
        id: "grossYTD",
        children: m,
      }),
      d.jsx("p", {
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
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: "3.33in",
        },
        children: "Social Security Tax",
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: "3.495in",
        },
        children: "Medicare Tax",
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: 3.9 + f + c + "in",
        },
        children: "Checking Acct 1",
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: "3.33in",
        },
        id: "ssTax",
        children: q,
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: "3.495in",
        },
        id: "medTax",
        children: pe,
      }),
      d.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 3.9 + f + c + "in",
        },
        id: "paidAmount",
        children: ["-", xt],
      }),
      d.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 3.72 + f + c + "in",
          fontWeight: "bold",
        },
        id: "netPay",
        children: ["$", xt],
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 4.135 + f + c + "in",
          fontWeight: "bold",
        },
        children: "$0.00",
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: "3.338in",
        },
        id: "ssTaxYTD",
        children: z,
      }),
      d.jsx("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: "3.5in",
        },
        id: "medTaxYTD",
        children: At,
      }),
      d.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          right: ".348in",
          top: "8.938in",
        },
        id: "chckAmount",
        children: ["$", xt],
      }),
      d.jsx("p", {
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
      d.jsxs("p", {
        style: {
          position: "absolute",
          fontSize: "9pt",
          left: "1.45in",
          top: 4.55 + f + c + "in",
        },
        id: "taxableWageSen",
        children: ["Your federal taxable wages this period are $", g],
      }),
      d.jsx("p", {
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
      parseFloat(p) !== 0 && p !== void 0
        ? d.jsxs(d.Fragment, {
            children: [
              d.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9.5pt",
                  left: ".285in",
                  top: 2.57 + p + "in",
                },
                children: "Overtime",
              }),
              d.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9.5pt",
                  right: "6.48in",
                  top: 2.57 + p + "in",
                },
                id: "otRate",
                children: F,
              }),
              d.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9.5pt",
                  right: "5.86in",
                  top: 2.57 + p + "in",
                },
                className: "edit",
                onClick: E,
                id: "otHrs",
                children: y,
              }),
              d.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9.5pt",
                  right: "4.95in",
                  top: 2.57 + p + "in",
                },
                id: "otThisPeriod",
                children: C,
              }),
              d.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  right: "3.83in",
                  top: 2.58 + p + "in",
                },
                className: "edit",
                onClick: E,
                id: "otYTD",
                children: L,
              }),
            ],
          })
        : null,
      f !== 0 && f !== void 0
        ? d.jsxs(d.Fragment, {
            children: [
              d.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  left: "1.31in",
                  top: 3.66 + c + "in",
                },
                id: "stateTaxTxt",
                children:
                  a !== void 0
                    ? a + " State Income Tax"
                    : "GA State Income Tax",
              }),
              d.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  right: "4.95in",
                  top: 3.66 + c + "in",
                },
                id: "stateTax",
                children: te,
              }),
              d.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  right: "3.83in",
                  top: 3.67 + c + "in",
                },
                id: "stateTaxYTD",
                children: b,
              }),
            ],
          })
        : null,
      c !== 0 && c !== void 0
        ? d.jsxs(d.Fragment, {
            children: [
              d.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  left: "1.31in",
                  top: 3.67 + "in",
                },
                id: "fedTaxTxt",
                children: "Federal Income Tax",
              }),
              d.jsx("p", {
                style: {
                  position: "absolute",
                  fontSize: "9pt",
                  right: "4.95in",
                  top: 3.67 + "in",
                },
                id: "fedTax",
                children: N,
              }),
              d.jsx("p", {
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
function id({ handleEdit: e, state: t, dispatch: n }) {
  const { employee: r, employer: l, taxInfo: i, payInfo: o, pos: u } = t;
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
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
        d.jsx(tp, { pos: u }),
        d.jsx(ip, {}),
        d.jsx(lp, { employer: l, handleEdit: e, dispatch: n }),
        d.jsx(np, { handleEdit: e }),
        d.jsx(op, { taxInfo: i, handleEdit: e, dispatch: n }),
        d.jsx(rp, { employee: r, handleEdit: e, dispatch: n }),
        d.jsx(up, {
          taxInfo: i,
          payInfo: o,
          pos: u,
          handleEdit: e,
          dispatch: n,
        }),
      ],
    }),
  });
}
function ap({ handleEdit: e, state: t, onSubmit: n, dispatch: r, pos: l }) {
  const i = (u) => {
      switch (u.target.id) {
        case "employeeName":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employee",
            key: u.target.name,
          });
          break;
        case "employeeAddress":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employee",
            key: u.target.name,
          });
          break;
        case "employeeApt":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employee",
            key: u.target.name,
          });
          break;
        case "employeeCity":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employee",
            key: u.target.name,
          });
          break;
        case "employeeState":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employee",
            key: u.target.name,
          }),
            r({
              type: "txt",
              payload: u.target.value,
              cat: "taxInfo",
              key: "stateTaxed",
            });
          break;
        case "employeeZip":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employee",
            key: u.target.name,
          });
          break;
        case "employerName":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employer",
            key: u.target.name,
          });
          break;
        case "employerAddress":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employer",
            key: u.target.name,
          });
          break;
        case "employerApt":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employer",
            key: u.target.name,
          });
          break;
        case "employerCity":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employer",
            key: u.target.name,
          });
          break;
        case "employerState":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employer",
            key: u.target.name,
          });
          break;
        case "employerZip":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "employer",
            key: u.target.name,
          });
          break;
        case "filingStatus":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "taxInfo",
            key: u.target.name,
          });
          break;
        case "fedExemptions":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "taxInfo",
            key: u.target.name,
          }),
            u.target.value !== "Tax Blocked" && u.target.value !== void 0
              ? r({ type: "txt", cat: "pos", key: "fedPos", payload: 0.2 })
              : r({ type: "txt", cat: "pos", key: "fedPos", payload: 0 });
          break;
        case "stateExemptions":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "taxInfo",
            key: u.target.name,
          }),
            u.target.value !== "Tax Blocked" && u.target.value !== void 0
              ? r({ type: "txt", cat: "pos", key: "statePos", payload: 0.2 })
              : r({ type: "txt", cat: "pos", key: "statePos", payload: 0 });
          break;
        case "payRate":
          r({
            type: "txt",
            payload: parseFloat(parseFloat(u.target.value) * 1.5),
            cat: "payInfo",
            key: "otRate",
          }),
            r({
              type: "txt",
              payload: u.target.value,
              cat: "payInfo",
              key: "rate",
            });
          break;
        case "paySchedule":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "payInfo",
            key: u.target.name,
          });
          break;
        case "paidBy":
          r({
            type: "txt",
            payload: u.target.value,
            cat: "payInfo",
            key: u.target.name,
          });
          break;
        case "minGross":
          if (
            (r({
              type: "txt",
              payload: u.target.value,
              cat: "payInfo",
              key: u.target.name,
            }),
            u.target.value !== void 0 && t.payInfo.by === "hours")
          ) {
            let a = parseFloat(u.target.value) / parseFloat(t.payInfo.rate),
              s,
              h;
            t.payInfo.sched === "1" &&
              (parseFloat(a) > 40 &&
                (r({ type: "txt", payload: 40, cat: "payInfo", key: "hours" }),
                console.log(a),
                (s =
                  ((parseFloat(a) - 40) * parseFloat(t.payInfo.rate)) /
                  parseFloat(t.payInfo.otRate)),
                s <= 26 &&
                  ((h = s * 1.5),
                  r({
                    type: "txt",
                    payload: (Math.random() * (h - s) + s).toFixed(2),
                    cat: "payInfo",
                    key: "otHrs",
                  })),
                s > 26 &&
                  s <= 28 &&
                  ((h = s * 1.4),
                  r({
                    type: "txt",
                    cat: "payInfo",
                    key: "otHrs",
                    payload: (Math.random() * (h - s) + s).toFixed(2),
                  })),
                s > 28 &&
                  s <= 30 &&
                  ((h = s * 1.3),
                  r({
                    type: "txt",
                    cat: "payInfo",
                    key: "otHrs",
                    payload: (Math.random() * (h - s) + s).toFixed(2),
                  })),
                s > 30 &&
                  s <= 33 &&
                  ((h = s * 1.2),
                  r({
                    type: "txt",
                    cat: "payInfo",
                    key: "otHrs",
                    payload: (Math.random() * (h - s) + s).toFixed(2),
                  })),
                s > 33 &&
                  s <= 36 &&
                  ((h = s * 1.1),
                  r({
                    type: "txt",
                    cat: "payInfo",
                    key: "otHrs",
                    payload: (Math.random() * (h - s) + s).toFixed(2),
                  })),
                s > 36 &&
                  s <= 40 &&
                  r({
                    type: "txt",
                    cat: "payInfo",
                    key: "otHrs",
                    payload: (Math.random() * (40 - s) + s).toFixed(2),
                  }),
                r({ type: "txt", cat: "pos", key: "otPos", payload: 0.15 })),
              parseFloat(a) < 40 &&
                (r({
                  type: "txt",
                  cat: "payInfo",
                  key: "hours",
                  payload: parseFloat(a).toFixed(2),
                }),
                r({ type: "txt", cat: "pos", key: "otPos", payload: 0 }))),
              t.payInfo.sched === "2" &&
                (parseFloat(a) > 80 &&
                  (r({
                    type: "txt",
                    cat: "payInfo",
                    key: "hours",
                    payload: 80,
                  }),
                  (s =
                    ((parseFloat(a) - 80) * parseFloat(t.payInfo.rate)) /
                    parseFloat(t.payInfo.otRate)),
                  s <= 52 &&
                    ((h = s * 1.5),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (h - s) + s).toFixed(2),
                    })),
                  s > 52 &&
                    s <= 56 &&
                    ((h = s * 1.4),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (h - s) + s).toFixed(2),
                    })),
                  s > 56 &&
                    s <= 60 &&
                    ((h = s * 1.3),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (h - s) + s).toFixed(2),
                    })),
                  s > 60 &&
                    s <= 66 &&
                    ((h = s * 1.2),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (h - s) + s).toFixed(2),
                    })),
                  s > 66 &&
                    s <= 72 &&
                    ((h = s * 1.1),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (h - s) + s).toFixed(2),
                    })),
                  s > 72 &&
                    s <= 80 &&
                    ((h = 80),
                    r({
                      type: "txt",
                      cat: "payInfo",
                      key: "otHrs",
                      payload: (Math.random() * (h - s) + s).toFixed(2),
                    })),
                  r({ type: "txt", cat: "pos", key: "otPos", payload: 0.15 })),
                parseFloat(a) < 80 &&
                  (r({
                    type: "txt",
                    cat: "payInfo",
                    key: "hours",
                    payload: parseFloat(a).toFixed(2),
                  }),
                  r({ type: "txt", cat: "pos", key: "otPos", payload: 0 })));
          }
          break;
      }
    },
    o = (u) => {
      u.preventDefault(), n();
    };
  return d.jsxs(d.Fragment, {
    children: [
      d.jsxs("form", {
        onSubmit: o,
        children: [
          d.jsx("div", {
            className: "form-row",
            children: d.jsx("h2", { children: "Employee Info:" }),
          }),
          d.jsx("div", {
            className: "form-row",
            children: d.jsx("input", {
              onChange: i,
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
          d.jsxs("div", {
            className: "form-row",
            children: [
              d.jsx("input", {
                onChange: i,
                autoComplete: "address-line1",
                type: "text",
                required: !0,
                cat: "employee",
                name: "address",
                id: "employeeAddress",
                placeholder: "Address",
                value: t.employee.address,
              }),
              d.jsx("input", {
                onChange: i,
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
          d.jsxs("div", {
            className: "form-row",
            children: [
              d.jsx("input", {
                onChange: i,
                autoComplete: "address-level2",
                type: "text",
                required: !0,
                cat: "employee",
                name: "city",
                id: "employeeCity",
                placeholder: "City",
                value: t.employee.city,
              }),
              d.jsx("input", {
                onChange: i,
                autoComplete: "address-level1",
                type: "text",
                required: !0,
                cat: "employee",
                name: "state",
                id: "employeeState",
                placeholder: "State",
                value: t.employee.state,
              }),
              d.jsx("input", {
                onChange: i,
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
          d.jsx("div", {
            className: "form-row",
            children: d.jsx("h2", { children: "Employer Info:" }),
          }),
          d.jsx("div", {
            className: "form-row",
            children: d.jsx("input", {
              onChange: i,
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
          d.jsxs("div", {
            className: "form-row",
            children: [
              d.jsx("input", {
                onChange: i,
                autoComplete: "address-line1",
                type: "text",
                required: !0,
                cat: "employer",
                name: "address",
                id: "employerAddress",
                placeholder: "Address",
                value: t.employer.address,
              }),
              d.jsx("input", {
                onChange: i,
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
          d.jsxs("div", {
            className: "form-row",
            children: [
              d.jsx("input", {
                onChange: i,
                autoComplete: "address-level2",
                type: "text",
                required: !0,
                cat: "employer",
                name: "city",
                id: "employerCity",
                placeholder: "City",
                value: t.employer.city,
              }),
              d.jsx("input", {
                onChange: i,
                autoComplete: "address-level1",
                type: "text",
                required: !0,
                cat: "employer",
                name: "state",
                id: "employerState",
                placeholder: "State",
                value: t.employer.state,
              }),
              d.jsx("input", {
                onChange: i,
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
          d.jsx("div", {
            className: "form-row",
            children: d.jsx("h2", { children: "Tax Info:" }),
          }),
          d.jsxs("div", {
            className: "form-row",
            children: [
              d.jsxs("select", {
                value: t.taxInfo.status,
                onChange: i,
                cat: "taxInfo",
                name: "status",
                id: "filingStatus",
                required: !0,
                style: { width: "33.3%" },
                children: [
                  d.jsx("option", { hidden: !0, children: "Filing Status:" }),
                  d.jsx("option", { value: "Single", children: "Single" }),
                  d.jsx("option", {
                    value: "Married filing seperately",
                    children: "Married filing seperately",
                  }),
                  d.jsx("option", {
                    value: "Married",
                    children: "Married filing jointly",
                  }),
                  d.jsx("option", {
                    value: "Head of House",
                    children: "Head of house",
                  }),
                ],
              }),
              d.jsxs("select", {
                value: t.taxInfo.fed,
                cat: "taxInfo",
                name: "fed",
                id: "fedExemptions",
                required: !0,
                style: { width: "33.3%" },
                onChange: i,
                children: [
                  d.jsx("option", {
                    hidden: !0,
                    children: "Federal Exemptions:",
                  }),
                  d.jsx("option", { value: "Tax Blocked", children: "Exempt" }),
                  d.jsx("option", { value: "0", children: "0" }),
                  d.jsx("option", { value: "1", children: "1" }),
                  d.jsx("option", { value: "2", children: "2" }),
                  d.jsx("option", { value: "3", children: "3" }),
                  d.jsx("option", { value: "4", children: "4" }),
                  d.jsx("option", { value: "5", children: "5" }),
                ],
              }),
              d.jsxs("select", {
                value: t.taxInfo.state,
                onChange: i,
                cat: "taxInfo",
                name: "state",
                id: "stateExemptions",
                required: !0,
                style: { width: "33.3%" },
                children: [
                  d.jsx("option", {
                    hidden: !0,
                    children: "State Exemptions:",
                  }),
                  d.jsx("option", { value: "Tax Blocked", children: "Exempt" }),
                  d.jsx("option", { value: "0", children: "0" }),
                  d.jsx("option", { value: "1", children: "1" }),
                  d.jsx("option", { value: "2", children: "2" }),
                  d.jsx("option", { value: "3", children: "3" }),
                  d.jsx("option", { value: "4", children: "4" }),
                  d.jsx("option", { value: "5", children: "5" }),
                ],
              }),
            ],
          }),
          d.jsx("div", {
            className: "form-row",
            children: d.jsx("h2", { children: "Pay Info:" }),
          }),
          d.jsxs("div", {
            className: "form-row",
            children: [
              d.jsxs("select", {
                value: t.payInfo.sched,
                onChange: i,
                id: "paySchedule",
                name: "sched",
                required: !0,
                style: { width: "33.3%" },
                children: [
                  d.jsx("option", { hidden: !0, children: "Pay Schedule:" }),
                  d.jsx("option", { value: "1", children: "Weekly" }),
                  d.jsx("option", { value: "2", children: "Bi-Weekly" }),
                ],
              }),
              d.jsx("input", {
                onChange: i,
                name: "rate",
                required: !0,
                id: "payRate",
                placeholder: "Pay rate",
                type: "text",
                value: t.payInfo.rate,
              }),
              d.jsxs("select", {
                value: t.payInfo.by,
                onChange: i,
                name: "by",
                id: "paidBy",
                required: !0,
                style: { width: "33.3%" },
                children: [
                  d.jsx("option", { hidden: !0, children: "Paid by:" }),
                  d.jsx("option", { value: "hours", children: "Hour" }),
                ],
              }),
              d.jsx("input", {
                onChange: i,
                required: !0,
                id: "minGross",
                placeholder: "Min Gross",
                type: "text",
                name: "minGross",
                value: t.payInfo.minGross,
              }),
            ],
          }),
          d.jsx("button", { type: "submit", children: "Preview" }),
        ],
      }),
      d.jsx(If, {
        children: d.jsx(id, { handleEdit: e, state: t, dispatch: r }),
      }),
    ],
  });
}
const sp = (e, t) => {
    switch (t.type) {
      case "txt":
        return { ...e, [t.cat]: { ...e[t.cat], [t.key]: t.payload } };
    }
  },
  dp = {
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
  cp = {
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
function fp() {
  const [e, t] = In.useState(!1),
    n = e ? cp : dp,
    [r, l] = In.useReducer(sp, n),
    i = () => {
      t(!0);
    },
    o = (u) => {
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
      const s = document.getElementById("stubContainer");
      return s.appendChild(a), a.focus(), [a, s];
    };
  return d.jsx(d.Fragment, {
    children: e
      ? d.jsx(id, { handleEdit: o, state: r, dispatch: l })
      : d.jsx(ap, {
          handleEdit: o,
          state: r,
          onSubmit: i,
          dispatch: l,
          pos: r.pos,
        }),
  });
}
Gl.createRoot(document.getElementById("root")).render(
  d.jsx(kd.StrictMode, { children: d.jsx(fp, {}) })
);
