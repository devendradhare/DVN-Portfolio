(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var $c = { exports: {} },
  No = {},
  Uc = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ei = Symbol.for("react.element"),
  Kp = Symbol.for("react.portal"),
  Yp = Symbol.for("react.fragment"),
  Gp = Symbol.for("react.strict_mode"),
  Xp = Symbol.for("react.profiler"),
  qp = Symbol.for("react.provider"),
  Zp = Symbol.for("react.context"),
  Jp = Symbol.for("react.forward_ref"),
  bp = Symbol.for("react.suspense"),
  eh = Symbol.for("react.memo"),
  th = Symbol.for("react.lazy"),
  Gu = Symbol.iterator;
function nh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gu && e[Gu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Wc = Object.assign,
  Bc = {};
function Hn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bc),
    (this.updater = n || Vc);
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Qc() {}
Qc.prototype = Hn.prototype;
function Ds(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bc),
    (this.updater = n || Vc);
}
var $s = (Ds.prototype = new Qc());
$s.constructor = Ds;
Wc($s, Hn.prototype);
$s.isPureReactComponent = !0;
var Xu = Array.isArray,
  Hc = Object.prototype.hasOwnProperty,
  Us = { current: null },
  Kc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Hc.call(t, r) && !Kc.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: ei,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Us.current,
  };
}
function rh(e, t) {
  return {
    $$typeof: ei,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Vs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ei;
}
function ih(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var qu = /\/+/g;
function Jo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ih("" + e.key)
    : t.toString(36);
}
function Ri(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ei:
          case Kp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Jo(l, 0) : r),
      Xu(i)
        ? ((n = ""),
          e != null && (n = e.replace(qu, "$&/") + "/"),
          Ri(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (Vs(i) &&
            (i = rh(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(qu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Xu(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Jo(o, s);
      l += Ri(o, t, n, u, i);
    }
  else if (((u = nh(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Jo(o, s++)), (l += Ri(o, t, n, u, i));
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
  return l;
}
function ai(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ri(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function oh(e) {
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
var ke = { current: null },
  Li = { transition: null },
  lh = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: Li,
    ReactCurrentOwner: Us,
  };
A.Children = {
  map: ai,
  forEach: function (e, t, n) {
    ai(
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
      ai(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ai(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Vs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
A.Component = Hn;
A.Fragment = Yp;
A.Profiler = Xp;
A.PureComponent = Ds;
A.StrictMode = Gp;
A.Suspense = bp;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lh;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Wc({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Us.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Hc.call(t, u) &&
        !Kc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: ei, type: e.type, key: i, ref: o, props: r, _owner: l };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: qp, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = Yc;
A.createFactory = function (e) {
  var t = Yc.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: Jp, render: e };
};
A.isValidElement = Vs;
A.lazy = function (e) {
  return { $$typeof: th, _payload: { _status: -1, _result: e }, _init: oh };
};
A.memo = function (e, t) {
  return { $$typeof: eh, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = Li.transition;
  Li.transition = {};
  try {
    e();
  } finally {
    Li.transition = t;
  }
};
A.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
A.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
A.useContext = function (e) {
  return ke.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
A.useId = function () {
  return ke.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return ke.current.useRef(e);
};
A.useState = function (e) {
  return ke.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return ke.current.useTransition();
};
A.version = "18.2.0";
Uc.exports = A;
var M = Uc.exports;
const J = Dc(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sh = M,
  uh = Symbol.for("react.element"),
  ah = Symbol.for("react.fragment"),
  ch = Object.prototype.hasOwnProperty,
  fh = sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) ch.call(t, r) && !dh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: uh,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: fh.current,
  };
}
No.Fragment = ah;
No.jsx = Gc;
No.jsxs = Gc;
$c.exports = No;
var v = $c.exports,
  Ol = {},
  Xc = { exports: {} },
  Le = {},
  qc = { exports: {} },
  Zc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, R) {
    var z = P.length;
    P.push(R);
    e: for (; 0 < z; ) {
      var B = (z - 1) >>> 1,
        q = P[B];
      if (0 < i(q, R)) (P[B] = R), (P[z] = q), (z = B);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var R = P[0],
      z = P.pop();
    if (z !== R) {
      P[0] = z;
      e: for (var B = 0, q = P.length, ct = q >>> 1; B < ct; ) {
        var ft = 2 * (B + 1) - 1,
          qn = P[ft],
          nt = ft + 1,
          re = P[nt];
        if (0 > i(qn, z))
          nt < q && 0 > i(re, qn)
            ? ((P[B] = re), (P[nt] = z), (B = nt))
            : ((P[B] = qn), (P[ft] = z), (B = ft));
        else if (nt < q && 0 > i(re, z)) (P[B] = re), (P[nt] = z), (B = nt);
        else break e;
      }
    }
    return R;
  }
  function i(P, R) {
    var z = P.sortIndex - R.sortIndex;
    return z !== 0 ? z : P.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    a = [],
    m = 1,
    d = null,
    h = 3,
    w = !1,
    g = !1,
    y = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var R = n(a); R !== null; ) {
      if (R.callback === null) r(a);
      else if (R.startTime <= P)
        r(a), (R.sortIndex = R.expirationTime), t(u, R);
      else break;
      R = n(a);
    }
  }
  function S(P) {
    if (((y = !1), p(P), !g))
      if (n(u) !== null) (g = !0), ne(_);
      else {
        var R = n(a);
        R !== null && Xn(S, R.startTime - P);
      }
  }
  function _(P, R) {
    (g = !1), y && ((y = !1), f(I), (I = -1)), (w = !0);
    var z = h;
    try {
      for (
        p(R), d = n(u);
        d !== null && (!(d.expirationTime > R) || (P && !D()));

      ) {
        var B = d.callback;
        if (typeof B == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var q = B(d.expirationTime <= R);
          (R = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(u) && r(u),
            p(R);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var ct = !0;
      else {
        var ft = n(a);
        ft !== null && Xn(S, ft.startTime - R), (ct = !1);
      }
      return ct;
    } finally {
      (d = null), (h = z), (w = !1);
    }
  }
  var j = !1,
    E = null,
    I = -1,
    C = 5,
    O = -1;
  function D() {
    return !(e.unstable_now() - O < C);
  }
  function b() {
    if (E !== null) {
      var P = e.unstable_now();
      O = P;
      var R = !0;
      try {
        R = E(!0, P);
      } finally {
        R ? V() : ((j = !1), (E = null));
      }
    } else j = !1;
  }
  var V;
  if (typeof c == "function")
    V = function () {
      c(b);
    };
  else if (typeof MessageChannel < "u") {
    var pn = new MessageChannel(),
      ui = pn.port2;
    (pn.port1.onmessage = b),
      (V = function () {
        ui.postMessage(null);
      });
  } else
    V = function () {
      N(b, 0);
    };
  function ne(P) {
    (E = P), j || ((j = !0), V());
  }
  function Xn(P, R) {
    I = N(function () {
      P(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || w || ((g = !0), ne(_));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (C = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = h;
      }
      var z = h;
      h = R;
      try {
        return P();
      } finally {
        h = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, R) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = h;
      h = P;
      try {
        return R();
      } finally {
        h = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, R, z) {
      var B = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? B + z : B))
          : (z = B),
        P)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = z + q),
        (P = {
          id: m++,
          callback: R,
          priorityLevel: P,
          startTime: z,
          expirationTime: q,
          sortIndex: -1,
        }),
        z > B
          ? ((P.sortIndex = z),
            t(a, P),
            n(u) === null &&
              P === n(a) &&
              (y ? (f(I), (I = -1)) : (y = !0), Xn(S, z - B)))
          : ((P.sortIndex = q), t(u, P), g || w || ((g = !0), ne(_))),
        P
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (P) {
      var R = h;
      return function () {
        var z = h;
        h = R;
        try {
          return P.apply(this, arguments);
        } finally {
          h = z;
        }
      };
    });
})(Zc);
qc.exports = Zc;
var ph = qc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jc = M,
  Re = ph;
function k(e) {
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
var bc = new Set(),
  Nr = {};
function fn(e, t) {
  Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) bc.add(t[e]);
}
var yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Rl = Object.prototype.hasOwnProperty,
  hh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Zu = {},
  Ju = {};
function mh(e) {
  return Rl.call(Ju, e)
    ? !0
    : Rl.call(Zu, e)
    ? !1
    : hh.test(e)
    ? (Ju[e] = !0)
    : ((Zu[e] = !0), !1);
}
function vh(e, t, n, r) {
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
function gh(e, t, n, r) {
  if (t === null || typeof t > "u" || vh(e, t, n, r)) return !0;
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
function _e(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ws = /[\-:]([a-z])/g;
function Bs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ws, Bs);
    pe[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ws, Bs);
    pe[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ws, Bs);
  pe[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qs(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (gh(t, n, i, r) && (n = null),
    r || i === null
      ? mh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ci = Symbol.for("react.element"),
  gn = Symbol.for("react.portal"),
  yn = Symbol.for("react.fragment"),
  Hs = Symbol.for("react.strict_mode"),
  Ll = Symbol.for("react.profiler"),
  ef = Symbol.for("react.provider"),
  tf = Symbol.for("react.context"),
  Ks = Symbol.for("react.forward_ref"),
  zl = Symbol.for("react.suspense"),
  Al = Symbol.for("react.suspense_list"),
  Ys = Symbol.for("react.memo"),
  Ct = Symbol.for("react.lazy"),
  nf = Symbol.for("react.offscreen"),
  bu = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bu && e[bu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  bo;
function ar(e) {
  if (bo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      bo = (t && t[1]) || "";
    }
  return (
    `
` +
    bo +
    e
  );
}
var el = !1;
function tl(e, t) {
  if (!e || el) return "";
  el = !0;
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
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var u =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (el = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ar(e) : "";
}
function yh(e) {
  switch (e.tag) {
    case 5:
      return ar(e.type);
    case 16:
      return ar("Lazy");
    case 13:
      return ar("Suspense");
    case 19:
      return ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = tl(e.type, !1)), e;
    case 11:
      return (e = tl(e.type.render, !1)), e;
    case 1:
      return (e = tl(e.type, !0)), e;
    default:
      return "";
  }
}
function Fl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yn:
      return "Fragment";
    case gn:
      return "Portal";
    case Ll:
      return "Profiler";
    case Hs:
      return "StrictMode";
    case zl:
      return "Suspense";
    case Al:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tf:
        return (e.displayName || "Context") + ".Consumer";
      case ef:
        return (e._context.displayName || "Context") + ".Provider";
      case Ks:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ys:
        return (
          (t = e.displayName || null), t !== null ? t : Fl(e.type) || "Memo"
        );
      case Ct:
        (t = e._payload), (e = e._init);
        try {
          return Fl(e(t));
        } catch {}
    }
  return null;
}
function wh(e) {
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
      return Fl(t);
    case 8:
      return t === Hs ? "StrictMode" : "Mode";
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
function Qt(e) {
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
function rf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Sh(e) {
  var t = rf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function fi(e) {
  e._valueTracker || (e._valueTracker = Sh(e));
}
function of(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = rf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Dl(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ea(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function lf(e, t) {
  (t = t.checked), t != null && Qs(e, "checked", t, !1);
}
function $l(e, t) {
  lf(e, t);
  var n = Qt(t.value),
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
    ? Ul(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ul(e, t.type, Qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ta(e, t, n) {
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
function Ul(e, t, n) {
  (t !== "number" || Zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cr = Array.isArray;
function Tn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Qt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function na(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (cr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Qt(n) };
}
function sf(e, t) {
  var n = Qt(t.value),
    r = Qt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ra(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function uf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? uf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var di,
  af = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        di = di || document.createElement("div"),
          di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = di.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Tr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
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
  kh = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function (e) {
  kh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mr[t] = mr[e]);
  });
});
function cf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mr.hasOwnProperty(e) && mr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ff(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = cf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var _h = X(
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
function Bl(e, t) {
  if (t) {
    if (_h[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Ql(e, t) {
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
var Hl = null;
function Gs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Kl = null,
  In = null,
  Mn = null;
function ia(e) {
  if ((e = ri(e))) {
    if (typeof Kl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Ro(t)), Kl(e.stateNode, e.type, t));
  }
}
function df(e) {
  In ? (Mn ? Mn.push(e) : (Mn = [e])) : (In = e);
}
function pf() {
  if (In) {
    var e = In,
      t = Mn;
    if (((Mn = In = null), ia(e), t)) for (e = 0; e < t.length; e++) ia(t[e]);
  }
}
function hf(e, t) {
  return e(t);
}
function mf() {}
var nl = !1;
function vf(e, t, n) {
  if (nl) return e(t, n);
  nl = !0;
  try {
    return hf(e, t, n);
  } finally {
    (nl = !1), (In !== null || Mn !== null) && (mf(), pf());
  }
}
function Ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ro(n);
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Yl = !1;
if (yt)
  try {
    var Jn = {};
    Object.defineProperty(Jn, "passive", {
      get: function () {
        Yl = !0;
      },
    }),
      window.addEventListener("test", Jn, Jn),
      window.removeEventListener("test", Jn, Jn);
  } catch {
    Yl = !1;
  }
function xh(e, t, n, r, i, o, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var vr = !1,
  Ji = null,
  bi = !1,
  Gl = null,
  Eh = {
    onError: function (e) {
      (vr = !0), (Ji = e);
    },
  };
function Ch(e, t, n, r, i, o, l, s, u) {
  (vr = !1), (Ji = null), xh.apply(Eh, arguments);
}
function Ph(e, t, n, r, i, o, l, s, u) {
  if ((Ch.apply(this, arguments), vr)) {
    if (vr) {
      var a = Ji;
      (vr = !1), (Ji = null);
    } else throw Error(k(198));
    bi || ((bi = !0), (Gl = a));
  }
}
function dn(e) {
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
function gf(e) {
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
function oa(e) {
  if (dn(e) !== e) throw Error(k(188));
}
function jh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = dn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return oa(i), e;
        if (o === r) return oa(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function yf(e) {
  return (e = jh(e)), e !== null ? wf(e) : null;
}
function wf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sf = Re.unstable_scheduleCallback,
  la = Re.unstable_cancelCallback,
  Nh = Re.unstable_shouldYield,
  Th = Re.unstable_requestPaint,
  te = Re.unstable_now,
  Ih = Re.unstable_getCurrentPriorityLevel,
  Xs = Re.unstable_ImmediatePriority,
  kf = Re.unstable_UserBlockingPriority,
  eo = Re.unstable_NormalPriority,
  Mh = Re.unstable_LowPriority,
  _f = Re.unstable_IdlePriority,
  To = null,
  st = null;
function Oh(e) {
  if (st && typeof st.onCommitFiberRoot == "function")
    try {
      st.onCommitFiberRoot(To, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Je = Math.clz32 ? Math.clz32 : zh,
  Rh = Math.log,
  Lh = Math.LN2;
function zh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rh(e) / Lh) | 0)) | 0;
}
var pi = 64,
  hi = 4194304;
function fr(e) {
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
function to(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = fr(s)) : ((o &= l), o !== 0 && (r = fr(o)));
  } else (l = n & ~i), l !== 0 ? (r = fr(l)) : o !== 0 && (r = fr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Je(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ah(e, t) {
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
function Fh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Je(o),
      s = 1 << l,
      u = i[l];
    u === -1
      ? (!(s & n) || s & r) && (i[l] = Ah(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Xl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xf() {
  var e = pi;
  return (pi <<= 1), !(pi & 4194240) && (pi = 64), e;
}
function rl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ti(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Je(t)),
    (e[t] = n);
}
function Dh(e, t) {
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
    var i = 31 - Je(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function qs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var U = 0;
function Ef(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Cf,
  Zs,
  Pf,
  jf,
  Nf,
  ql = !1,
  mi = [],
  zt = null,
  At = null,
  Ft = null,
  Mr = new Map(),
  Or = new Map(),
  Nt = [],
  $h = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
    " "
  );
function sa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Mr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function bn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ri(t)), t !== null && Zs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Uh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (zt = bn(zt, e, t, n, r, i)), !0;
    case "dragenter":
      return (At = bn(At, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ft = bn(Ft, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Mr.set(o, bn(Mr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Or.set(o, bn(Or.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Tf(e) {
  var t = bt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gf(n)), t !== null)) {
          (e.blockedOn = t),
            Nf(e.priority, function () {
              Pf(n);
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
function zi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Hl = r), n.target.dispatchEvent(r), (Hl = null);
    } else return (t = ri(n)), t !== null && Zs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ua(e, t, n) {
  zi(e) && n.delete(t);
}
function Vh() {
  (ql = !1),
    zt !== null && zi(zt) && (zt = null),
    At !== null && zi(At) && (At = null),
    Ft !== null && zi(Ft) && (Ft = null),
    Mr.forEach(ua),
    Or.forEach(ua);
}
function er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ql ||
      ((ql = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Vh)));
}
function Rr(e) {
  function t(i) {
    return er(i, e);
  }
  if (0 < mi.length) {
    er(mi[0], e);
    for (var n = 1; n < mi.length; n++) {
      var r = mi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    zt !== null && er(zt, e),
      At !== null && er(At, e),
      Ft !== null && er(Ft, e),
      Mr.forEach(t),
      Or.forEach(t),
      n = 0;
    n < Nt.length;
    n++
  )
    (r = Nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nt.length && ((n = Nt[0]), n.blockedOn === null); )
    Tf(n), n.blockedOn === null && Nt.shift();
}
var On = _t.ReactCurrentBatchConfig,
  no = !0;
function Wh(e, t, n, r) {
  var i = U,
    o = On.transition;
  On.transition = null;
  try {
    (U = 1), Js(e, t, n, r);
  } finally {
    (U = i), (On.transition = o);
  }
}
function Bh(e, t, n, r) {
  var i = U,
    o = On.transition;
  On.transition = null;
  try {
    (U = 4), Js(e, t, n, r);
  } finally {
    (U = i), (On.transition = o);
  }
}
function Js(e, t, n, r) {
  if (no) {
    var i = Zl(e, t, n, r);
    if (i === null) pl(e, t, r, ro, n), sa(e, r);
    else if (Uh(i, e, t, n, r)) r.stopPropagation();
    else if ((sa(e, r), t & 4 && -1 < $h.indexOf(e))) {
      for (; i !== null; ) {
        var o = ri(i);
        if (
          (o !== null && Cf(o),
          (o = Zl(e, t, n, r)),
          o === null && pl(e, t, r, ro, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else pl(e, t, r, null, n);
  }
}
var ro = null;
function Zl(e, t, n, r) {
  if (((ro = null), (e = Gs(r)), (e = bt(e)), e !== null))
    if (((t = dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ro = e), null;
}
function If(e) {
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
      switch (Ih()) {
        case Xs:
          return 1;
        case kf:
          return 4;
        case eo:
        case Mh:
          return 16;
        case _f:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null,
  bs = null,
  Ai = null;
function Mf() {
  if (Ai) return Ai;
  var e,
    t = bs,
    n = t.length,
    r,
    i = "value" in It ? It.value : It.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Ai = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Fi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vi() {
  return !0;
}
function aa() {
  return !1;
}
function ze(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? vi
        : aa),
      (this.isPropagationStopped = aa),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = vi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = vi));
      },
      persist: function () {},
      isPersistent: vi,
    }),
    t
  );
}
var Kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  eu = ze(Kn),
  ni = X({}, Kn, { view: 0, detail: 0 }),
  Qh = ze(ni),
  il,
  ol,
  tr,
  Io = X({}, ni, {
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
    getModifierState: tu,
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
        : (e !== tr &&
            (tr && e.type === "mousemove"
              ? ((il = e.screenX - tr.screenX), (ol = e.screenY - tr.screenY))
              : (ol = il = 0),
            (tr = e)),
          il);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ol;
    },
  }),
  ca = ze(Io),
  Hh = X({}, Io, { dataTransfer: 0 }),
  Kh = ze(Hh),
  Yh = X({}, ni, { relatedTarget: 0 }),
  ll = ze(Yh),
  Gh = X({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xh = ze(Gh),
  qh = X({}, Kn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Zh = ze(qh),
  Jh = X({}, Kn, { data: 0 }),
  fa = ze(Jh),
  bh = {
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
  e0 = {
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
  t0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function n0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = t0[e]) ? !!t[e] : !1;
}
function tu() {
  return n0;
}
var r0 = X({}, ni, {
    key: function (e) {
      if (e.key) {
        var t = bh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? e0[e.keyCode] || "Unidentified"
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
    getModifierState: tu,
    charCode: function (e) {
      return e.type === "keypress" ? Fi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  i0 = ze(r0),
  o0 = X({}, Io, {
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
  da = ze(o0),
  l0 = X({}, ni, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tu,
  }),
  s0 = ze(l0),
  u0 = X({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  a0 = ze(u0),
  c0 = X({}, Io, {
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
  f0 = ze(c0),
  d0 = [9, 13, 27, 32],
  nu = yt && "CompositionEvent" in window,
  gr = null;
yt && "documentMode" in document && (gr = document.documentMode);
var p0 = yt && "TextEvent" in window && !gr,
  Of = yt && (!nu || (gr && 8 < gr && 11 >= gr)),
  pa = String.fromCharCode(32),
  ha = !1;
function Rf(e, t) {
  switch (e) {
    case "keyup":
      return d0.indexOf(t.keyCode) !== -1;
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
function Lf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var wn = !1;
function h0(e, t) {
  switch (e) {
    case "compositionend":
      return Lf(t);
    case "keypress":
      return t.which !== 32 ? null : ((ha = !0), pa);
    case "textInput":
      return (e = t.data), e === pa && ha ? null : e;
    default:
      return null;
  }
}
function m0(e, t) {
  if (wn)
    return e === "compositionend" || (!nu && Rf(e, t))
      ? ((e = Mf()), (Ai = bs = It = null), (wn = !1), e)
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
      return Of && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var v0 = {
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
function ma(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!v0[e.type] : t === "textarea";
}
function zf(e, t, n, r) {
  df(r),
    (t = io(t, "onChange")),
    0 < t.length &&
      ((n = new eu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var yr = null,
  Lr = null;
function g0(e) {
  Kf(e, 0);
}
function Mo(e) {
  var t = _n(e);
  if (of(t)) return e;
}
function y0(e, t) {
  if (e === "change") return t;
}
var Af = !1;
if (yt) {
  var sl;
  if (yt) {
    var ul = "oninput" in document;
    if (!ul) {
      var va = document.createElement("div");
      va.setAttribute("oninput", "return;"),
        (ul = typeof va.oninput == "function");
    }
    sl = ul;
  } else sl = !1;
  Af = sl && (!document.documentMode || 9 < document.documentMode);
}
function ga() {
  yr && (yr.detachEvent("onpropertychange", Ff), (Lr = yr = null));
}
function Ff(e) {
  if (e.propertyName === "value" && Mo(Lr)) {
    var t = [];
    zf(t, Lr, e, Gs(e)), vf(g0, t);
  }
}
function w0(e, t, n) {
  e === "focusin"
    ? (ga(), (yr = t), (Lr = n), yr.attachEvent("onpropertychange", Ff))
    : e === "focusout" && ga();
}
function S0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Mo(Lr);
}
function k0(e, t) {
  if (e === "click") return Mo(t);
}
function _0(e, t) {
  if (e === "input" || e === "change") return Mo(t);
}
function x0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == "function" ? Object.is : x0;
function zr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Rl.call(t, i) || !et(e[i], t[i])) return !1;
  }
  return !0;
}
function ya(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wa(e, t) {
  var n = ya(e);
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
    n = ya(n);
  }
}
function Df(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Df(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function $f() {
  for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zi(e.document);
  }
  return t;
}
function ru(e) {
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
function E0(e) {
  var t = $f(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Df(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ru(n)) {
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
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = wa(n, o));
        var l = wa(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var C0 = yt && "documentMode" in document && 11 >= document.documentMode,
  Sn = null,
  Jl = null,
  wr = null,
  bl = !1;
function Sa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bl ||
    Sn == null ||
    Sn !== Zi(r) ||
    ((r = Sn),
    "selectionStart" in r && ru(r)
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
    (wr && zr(wr, r)) ||
      ((wr = r),
      (r = io(Jl, "onSelect")),
      0 < r.length &&
        ((t = new eu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sn))));
}
function gi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: gi("Animation", "AnimationEnd"),
    animationiteration: gi("Animation", "AnimationIteration"),
    animationstart: gi("Animation", "AnimationStart"),
    transitionend: gi("Transition", "TransitionEnd"),
  },
  al = {},
  Uf = {};
yt &&
  ((Uf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function Oo(e) {
  if (al[e]) return al[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Uf) return (al[e] = t[n]);
  return e;
}
var Vf = Oo("animationend"),
  Wf = Oo("animationiteration"),
  Bf = Oo("animationstart"),
  Qf = Oo("transitionend"),
  Hf = new Map(),
  ka = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
function Kt(e, t) {
  Hf.set(e, t), fn(t, [e]);
}
for (var cl = 0; cl < ka.length; cl++) {
  var fl = ka[cl],
    P0 = fl.toLowerCase(),
    j0 = fl[0].toUpperCase() + fl.slice(1);
  Kt(P0, "on" + j0);
}
Kt(Vf, "onAnimationEnd");
Kt(Wf, "onAnimationIteration");
Kt(Bf, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(Qf, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
fn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
fn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
fn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
fn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ),
  N0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function _a(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ph(r, t, void 0, e), (e.currentTarget = null);
}
function Kf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== o && i.isPropagationStopped())) break e;
          _a(i, s, a), (o = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          _a(i, s, a), (o = u);
        }
    }
  }
  if (bi) throw ((e = Gl), (bi = !1), (Gl = null), e);
}
function Q(e, t) {
  var n = t[is];
  n === void 0 && (n = t[is] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Yf(t, e, 2, !1), n.add(r));
}
function dl(e, t, n) {
  var r = 0;
  t && (r |= 4), Yf(n, e, r, t);
}
var yi = "_reactListening" + Math.random().toString(36).slice(2);
function Ar(e) {
  if (!e[yi]) {
    (e[yi] = !0),
      bc.forEach(function (n) {
        n !== "selectionchange" && (N0.has(n) || dl(n, !1, e), dl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yi] || ((t[yi] = !0), dl("selectionchange", !1, t));
  }
}
function Yf(e, t, n, r) {
  switch (If(t)) {
    case 1:
      var i = Wh;
      break;
    case 4:
      i = Bh;
      break;
    default:
      i = Js;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Yl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function pl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = bt(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  vf(function () {
    var a = o,
      m = Gs(n),
      d = [];
    e: {
      var h = Hf.get(e);
      if (h !== void 0) {
        var w = eu,
          g = e;
        switch (e) {
          case "keypress":
            if (Fi(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = i0;
            break;
          case "focusin":
            (g = "focus"), (w = ll);
            break;
          case "focusout":
            (g = "blur"), (w = ll);
            break;
          case "beforeblur":
          case "afterblur":
            w = ll;
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
            w = ca;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Kh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = s0;
            break;
          case Vf:
          case Wf:
          case Bf:
            w = Xh;
            break;
          case Qf:
            w = a0;
            break;
          case "scroll":
            w = Qh;
            break;
          case "wheel":
            w = f0;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Zh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = da;
        }
        var y = (t & 4) !== 0,
          N = !y && e === "scroll",
          f = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var S = p.stateNode;
          if (
            (p.tag === 5 &&
              S !== null &&
              ((p = S),
              f !== null && ((S = Ir(c, f)), S != null && y.push(Fr(c, S, p)))),
            N)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((h = new w(h, g, null, n, m)), d.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Hl &&
            (g = n.relatedTarget || n.fromElement) &&
            (bt(g) || g[wt]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            m.window === m
              ? m
              : (h = m.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = a),
              (g = g ? bt(g) : null),
              g !== null &&
                ((N = dn(g)), g !== N || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = a)),
          w !== g)
        ) {
          if (
            ((y = ca),
            (S = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = da),
              (S = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (N = w == null ? h : _n(w)),
            (p = g == null ? h : _n(g)),
            (h = new y(S, c + "leave", w, n, m)),
            (h.target = N),
            (h.relatedTarget = p),
            (S = null),
            bt(m) === a &&
              ((y = new y(f, c + "enter", g, n, m)),
              (y.target = p),
              (y.relatedTarget = N),
              (S = y)),
            (N = S),
            w && g)
          )
            t: {
              for (y = w, f = g, c = 0, p = y; p; p = hn(p)) c++;
              for (p = 0, S = f; S; S = hn(S)) p++;
              for (; 0 < c - p; ) (y = hn(y)), c--;
              for (; 0 < p - c; ) (f = hn(f)), p--;
              for (; c--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = hn(y)), (f = hn(f));
              }
              y = null;
            }
          else y = null;
          w !== null && xa(d, h, w, y, !1),
            g !== null && N !== null && xa(d, N, g, y, !0);
        }
      }
      e: {
        if (
          ((h = a ? _n(a) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === "select" || (w === "input" && h.type === "file"))
        )
          var _ = y0;
        else if (ma(h))
          if (Af) _ = _0;
          else {
            _ = S0;
            var j = w0;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (_ = k0);
        if (_ && (_ = _(e, a))) {
          zf(d, _, n, m);
          break e;
        }
        j && j(e, h, a),
          e === "focusout" &&
            (j = h._wrapperState) &&
            j.controlled &&
            h.type === "number" &&
            Ul(h, "number", h.value);
      }
      switch (((j = a ? _n(a) : window), e)) {
        case "focusin":
          (ma(j) || j.contentEditable === "true") &&
            ((Sn = j), (Jl = a), (wr = null));
          break;
        case "focusout":
          wr = Jl = Sn = null;
          break;
        case "mousedown":
          bl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (bl = !1), Sa(d, n, m);
          break;
        case "selectionchange":
          if (C0) break;
        case "keydown":
        case "keyup":
          Sa(d, n, m);
      }
      var E;
      if (nu)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        wn
          ? Rf(e, n) && (I = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (Of &&
          n.locale !== "ko" &&
          (wn || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && wn && (E = Mf())
            : ((It = m),
              (bs = "value" in It ? It.value : It.textContent),
              (wn = !0))),
        (j = io(a, I)),
        0 < j.length &&
          ((I = new fa(I, e, null, n, m)),
          d.push({ event: I, listeners: j }),
          E ? (I.data = E) : ((E = Lf(n)), E !== null && (I.data = E)))),
        (E = p0 ? h0(e, n) : m0(e, n)) &&
          ((a = io(a, "onBeforeInput")),
          0 < a.length &&
            ((m = new fa("onBeforeInput", "beforeinput", null, n, m)),
            d.push({ event: m, listeners: a }),
            (m.data = E)));
    }
    Kf(d, t);
  });
}
function Fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function io(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ir(e, n)),
      o != null && r.unshift(Fr(e, o, i)),
      (o = Ir(e, t)),
      o != null && r.push(Fr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function hn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xa(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      i
        ? ((u = Ir(n, o)), u != null && l.unshift(Fr(n, u, s)))
        : i || ((u = Ir(n, o)), u != null && l.push(Fr(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var T0 = /\r\n?/g,
  I0 = /\u0000|\uFFFD/g;
function Ea(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      T0,
      `
`
    )
    .replace(I0, "");
}
function wi(e, t, n) {
  if (((t = Ea(t)), Ea(e) !== t && n)) throw Error(k(425));
}
function oo() {}
var es = null,
  ts = null;
function ns(e, t) {
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
var rs = typeof setTimeout == "function" ? setTimeout : void 0,
  M0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ca = typeof Promise == "function" ? Promise : void 0,
  O0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ca < "u"
      ? function (e) {
          return Ca.resolve(null).then(e).catch(R0);
        }
      : rs;
function R0(e) {
  setTimeout(function () {
    throw e;
  });
}
function hl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Rr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Rr(t);
}
function Dt(e) {
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
function Pa(e) {
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
var Yn = Math.random().toString(36).slice(2),
  lt = "__reactFiber$" + Yn,
  Dr = "__reactProps$" + Yn,
  wt = "__reactContainer$" + Yn,
  is = "__reactEvents$" + Yn,
  L0 = "__reactListeners$" + Yn,
  z0 = "__reactHandles$" + Yn;
function bt(e) {
  var t = e[lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[wt] || n[lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pa(e); e !== null; ) {
          if ((n = e[lt])) return n;
          e = Pa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ri(e) {
  return (
    (e = e[lt] || e[wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Ro(e) {
  return e[Dr] || null;
}
var os = [],
  xn = -1;
function Yt(e) {
  return { current: e };
}
function H(e) {
  0 > xn || ((e.current = os[xn]), (os[xn] = null), xn--);
}
function W(e, t) {
  xn++, (os[xn] = e.current), (e.current = t);
}
var Ht = {},
  ge = Yt(Ht),
  Pe = Yt(!1),
  on = Ht;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function je(e) {
  return (e = e.childContextTypes), e != null;
}
function lo() {
  H(Pe), H(ge);
}
function ja(e, t, n) {
  if (ge.current !== Ht) throw Error(k(168));
  W(ge, t), W(Pe, n);
}
function Gf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, wh(e) || "Unknown", i));
  return X({}, n, r);
}
function so(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (on = ge.current),
    W(ge, e),
    W(Pe, Pe.current),
    !0
  );
}
function Na(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Gf(e, t, on)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Pe),
      H(ge),
      W(ge, e))
    : H(Pe),
    W(Pe, n);
}
var ht = null,
  Lo = !1,
  ml = !1;
function Xf(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
function A0(e) {
  (Lo = !0), Xf(e);
}
function Gt() {
  if (!ml && ht !== null) {
    ml = !0;
    var e = 0,
      t = U;
    try {
      var n = ht;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ht = null), (Lo = !1);
    } catch (i) {
      throw (ht !== null && (ht = ht.slice(e + 1)), Sf(Xs, Gt), i);
    } finally {
      (U = t), (ml = !1);
    }
  }
  return null;
}
var En = [],
  Cn = 0,
  uo = null,
  ao = 0,
  Ae = [],
  Fe = 0,
  ln = null,
  mt = 1,
  vt = "";
function Xt(e, t) {
  (En[Cn++] = ao), (En[Cn++] = uo), (uo = e), (ao = t);
}
function qf(e, t, n) {
  (Ae[Fe++] = mt), (Ae[Fe++] = vt), (Ae[Fe++] = ln), (ln = e);
  var r = mt;
  e = vt;
  var i = 32 - Je(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Je(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (mt = (1 << (32 - Je(t) + i)) | (n << i) | r),
      (vt = o + e);
  } else (mt = (1 << o) | (n << i) | r), (vt = e);
}
function iu(e) {
  e.return !== null && (Xt(e, 1), qf(e, 1, 0));
}
function ou(e) {
  for (; e === uo; )
    (uo = En[--Cn]), (En[Cn] = null), (ao = En[--Cn]), (En[Cn] = null);
  for (; e === ln; )
    (ln = Ae[--Fe]),
      (Ae[Fe] = null),
      (vt = Ae[--Fe]),
      (Ae[Fe] = null),
      (mt = Ae[--Fe]),
      (Ae[Fe] = null);
}
var Oe = null,
  Ie = null,
  K = !1,
  Xe = null;
function Zf(e, t) {
  var n = Ue(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ta(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (Ie = Dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ln !== null ? { id: mt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ls(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ss(e) {
  if (K) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!Ta(e, t)) {
        if (ls(e)) throw Error(k(418));
        t = Dt(n.nextSibling);
        var r = Oe;
        t && Ta(e, t)
          ? Zf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Oe = e));
      }
    } else {
      if (ls(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (Oe = e);
    }
  }
}
function Ia(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function Si(e) {
  if (e !== Oe) return !1;
  if (!K) return Ia(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ns(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (ls(e)) throw (Jf(), Error(k(418)));
    for (; t; ) Zf(e, t), (t = Dt(t.nextSibling));
  }
  if ((Ia(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Oe ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Jf() {
  for (var e = Ie; e; ) e = Dt(e.nextSibling);
}
function $n() {
  (Ie = Oe = null), (K = !1);
}
function lu(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
var F0 = _t.ReactCurrentBatchConfig;
function Ye(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var co = Yt(null),
  fo = null,
  Pn = null,
  su = null;
function uu() {
  su = Pn = fo = null;
}
function au(e) {
  var t = co.current;
  H(co), (e._currentValue = t);
}
function us(e, t, n) {
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
function Rn(e, t) {
  (fo = e),
    (su = Pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (su !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
      if (fo === null) throw Error(k(308));
      (Pn = e), (fo.dependencies = { lanes: 0, firstContext: e });
    } else Pn = Pn.next = e;
  return t;
}
var en = null;
function cu(e) {
  en === null ? (en = [e]) : en.push(e);
}
function bf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), cu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    St(e, r)
  );
}
function St(e, t) {
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
var Pt = !1;
function fu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ed(e, t) {
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
function gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      St(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), cu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function Di(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qs(e, n);
  }
}
function Ma(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
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
function po(e, t, n, r) {
  var i = e.updateQueue;
  Pt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), l === null ? (o = a) : (l.next = a), (l = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== l &&
        (s === null ? (m.firstBaseUpdate = a) : (s.next = a),
        (m.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = i.baseState;
    (l = 0), (m = a = u = null), (s = o);
    do {
      var h = s.lane,
        w = s.eventTime;
      if ((r & h) === h) {
        m !== null &&
          (m = m.next = {
            eventTime: w,
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          });
        e: {
          var g = e,
            y = s;
          switch (((h = t), (w = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                d = g.call(w, d, h);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (h = typeof g == "function" ? g.call(w, d, h) : g),
                h == null)
              )
                break e;
              d = X({}, d, h);
              break e;
            case 2:
              Pt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [s]) : h.push(s));
      } else
        (w = {
          eventTime: w,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((a = m = w), (u = d)) : (m = m.next = w),
          (l |= h);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (h = s),
          (s = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (u = d),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = m),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (un |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function Oa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var td = new Jc.Component().refs;
function as(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = Vt(e),
      o = gt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = $t(e, o, i)),
      t !== null && (be(t, e, i, r), Di(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = Vt(e),
      o = gt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = $t(e, o, i)),
      t !== null && (be(t, e, i, r), Di(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = Vt(e),
      i = gt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = $t(e, i, r)),
      t !== null && (be(t, e, r, n), Di(t, e, r));
  },
};
function Ra(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zr(n, r) || !zr(i, o)
      : !0
  );
}
function nd(e, t, n) {
  var r = !1,
    i = Ht,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = We(o))
      : ((i = je(t) ? on : ge.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Dn(e, i) : Ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function La(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zo.enqueueReplaceState(t, t.state, null);
}
function cs(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = td), fu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = We(o))
    : ((o = je(t) ? on : ge.current), (i.context = Dn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (as(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && zo.enqueueReplaceState(i, i.state, null),
      po(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function nr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            s === td && (s = i.refs = {}),
              l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function ki(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function za(e) {
  var t = e._init;
  return t(e._payload);
}
function rd(e) {
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
  function i(f, c) {
    return (f = Wt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, p) {
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
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, p, S) {
    return c === null || c.tag !== 6
      ? ((c = _l(p, f.mode, S)), (c.return = f), c)
      : ((c = i(c, p)), (c.return = f), c);
  }
  function u(f, c, p, S) {
    var _ = p.type;
    return _ === yn
      ? m(f, c, p.props.children, S, p.key)
      : c !== null &&
        (c.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === Ct &&
            za(_) === c.type))
      ? ((S = i(c, p.props)), (S.ref = nr(f, c, p)), (S.return = f), S)
      : ((S = Qi(p.type, p.key, p.props, null, f.mode, S)),
        (S.ref = nr(f, c, p)),
        (S.return = f),
        S);
  }
  function a(f, c, p, S) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = xl(p, f.mode, S)), (c.return = f), c)
      : ((c = i(c, p.children || [])), (c.return = f), c);
  }
  function m(f, c, p, S, _) {
    return c === null || c.tag !== 7
      ? ((c = rn(p, f.mode, S, _)), (c.return = f), c)
      : ((c = i(c, p)), (c.return = f), c);
  }
  function d(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = _l("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ci:
          return (
            (p = Qi(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = nr(f, null, c)),
            (p.return = f),
            p
          );
        case gn:
          return (c = xl(c, f.mode, p)), (c.return = f), c;
        case Ct:
          var S = c._init;
          return d(f, S(c._payload), p);
      }
      if (cr(c) || Zn(c))
        return (c = rn(c, f.mode, p, null)), (c.return = f), c;
      ki(f, c);
    }
    return null;
  }
  function h(f, c, p, S) {
    var _ = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return _ !== null ? null : s(f, c, "" + p, S);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ci:
          return p.key === _ ? u(f, c, p, S) : null;
        case gn:
          return p.key === _ ? a(f, c, p, S) : null;
        case Ct:
          return (_ = p._init), h(f, c, _(p._payload), S);
      }
      if (cr(p) || Zn(p)) return _ !== null ? null : m(f, c, p, S, null);
      ki(f, p);
    }
    return null;
  }
  function w(f, c, p, S, _) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (f = f.get(p) || null), s(c, f, "" + S, _);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ci:
          return (f = f.get(S.key === null ? p : S.key) || null), u(c, f, S, _);
        case gn:
          return (f = f.get(S.key === null ? p : S.key) || null), a(c, f, S, _);
        case Ct:
          var j = S._init;
          return w(f, c, p, j(S._payload), _);
      }
      if (cr(S) || Zn(S)) return (f = f.get(p) || null), m(c, f, S, _, null);
      ki(c, S);
    }
    return null;
  }
  function g(f, c, p, S) {
    for (
      var _ = null, j = null, E = c, I = (c = 0), C = null;
      E !== null && I < p.length;
      I++
    ) {
      E.index > I ? ((C = E), (E = null)) : (C = E.sibling);
      var O = h(f, E, p[I], S);
      if (O === null) {
        E === null && (E = C);
        break;
      }
      e && E && O.alternate === null && t(f, E),
        (c = o(O, c, I)),
        j === null ? (_ = O) : (j.sibling = O),
        (j = O),
        (E = C);
    }
    if (I === p.length) return n(f, E), K && Xt(f, I), _;
    if (E === null) {
      for (; I < p.length; I++)
        (E = d(f, p[I], S)),
          E !== null &&
            ((c = o(E, c, I)), j === null ? (_ = E) : (j.sibling = E), (j = E));
      return K && Xt(f, I), _;
    }
    for (E = r(f, E); I < p.length; I++)
      (C = w(E, f, I, p[I], S)),
        C !== null &&
          (e && C.alternate !== null && E.delete(C.key === null ? I : C.key),
          (c = o(C, c, I)),
          j === null ? (_ = C) : (j.sibling = C),
          (j = C));
    return (
      e &&
        E.forEach(function (D) {
          return t(f, D);
        }),
      K && Xt(f, I),
      _
    );
  }
  function y(f, c, p, S) {
    var _ = Zn(p);
    if (typeof _ != "function") throw Error(k(150));
    if (((p = _.call(p)), p == null)) throw Error(k(151));
    for (
      var j = (_ = null), E = c, I = (c = 0), C = null, O = p.next();
      E !== null && !O.done;
      I++, O = p.next()
    ) {
      E.index > I ? ((C = E), (E = null)) : (C = E.sibling);
      var D = h(f, E, O.value, S);
      if (D === null) {
        E === null && (E = C);
        break;
      }
      e && E && D.alternate === null && t(f, E),
        (c = o(D, c, I)),
        j === null ? (_ = D) : (j.sibling = D),
        (j = D),
        (E = C);
    }
    if (O.done) return n(f, E), K && Xt(f, I), _;
    if (E === null) {
      for (; !O.done; I++, O = p.next())
        (O = d(f, O.value, S)),
          O !== null &&
            ((c = o(O, c, I)), j === null ? (_ = O) : (j.sibling = O), (j = O));
      return K && Xt(f, I), _;
    }
    for (E = r(f, E); !O.done; I++, O = p.next())
      (O = w(E, f, I, O.value, S)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? I : O.key),
          (c = o(O, c, I)),
          j === null ? (_ = O) : (j.sibling = O),
          (j = O));
    return (
      e &&
        E.forEach(function (b) {
          return t(f, b);
        }),
      K && Xt(f, I),
      _
    );
  }
  function N(f, c, p, S) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === yn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ci:
          e: {
            for (var _ = p.key, j = c; j !== null; ) {
              if (j.key === _) {
                if (((_ = p.type), _ === yn)) {
                  if (j.tag === 7) {
                    n(f, j.sibling),
                      (c = i(j, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  j.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === Ct &&
                    za(_) === j.type)
                ) {
                  n(f, j.sibling),
                    (c = i(j, p.props)),
                    (c.ref = nr(f, j, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, j);
                break;
              } else t(f, j);
              j = j.sibling;
            }
            p.type === yn
              ? ((c = rn(p.props.children, f.mode, S, p.key)),
                (c.return = f),
                (f = c))
              : ((S = Qi(p.type, p.key, p.props, null, f.mode, S)),
                (S.ref = nr(f, c, p)),
                (S.return = f),
                (f = S));
          }
          return l(f);
        case gn:
          e: {
            for (j = p.key; c !== null; ) {
              if (c.key === j)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = i(c, p.children || [])),
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
            (c = xl(p, f.mode, S)), (c.return = f), (f = c);
          }
          return l(f);
        case Ct:
          return (j = p._init), N(f, c, j(p._payload), S);
      }
      if (cr(p)) return g(f, c, p, S);
      if (Zn(p)) return y(f, c, p, S);
      ki(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = i(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = _l(p, f.mode, S)), (c.return = f), (f = c)),
        l(f))
      : n(f, c);
  }
  return N;
}
var Un = rd(!0),
  id = rd(!1),
  ii = {},
  ut = Yt(ii),
  $r = Yt(ii),
  Ur = Yt(ii);
function tn(e) {
  if (e === ii) throw Error(k(174));
  return e;
}
function du(e, t) {
  switch ((W(Ur, t), W($r, e), W(ut, ii), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Wl(t, e));
  }
  H(ut), W(ut, t);
}
function Vn() {
  H(ut), H($r), H(Ur);
}
function od(e) {
  tn(Ur.current);
  var t = tn(ut.current),
    n = Wl(t, e.type);
  t !== n && (W($r, e), W(ut, n));
}
function pu(e) {
  $r.current === e && (H(ut), H($r));
}
var Y = Yt(0);
function ho(e) {
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
var vl = [];
function hu() {
  for (var e = 0; e < vl.length; e++)
    vl[e]._workInProgressVersionPrimary = null;
  vl.length = 0;
}
var $i = _t.ReactCurrentDispatcher,
  gl = _t.ReactCurrentBatchConfig,
  sn = 0,
  G = null,
  se = null,
  ae = null,
  mo = !1,
  Sr = !1,
  Vr = 0,
  D0 = 0;
function he() {
  throw Error(k(321));
}
function mu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function vu(e, t, n, r, i, o) {
  if (
    ((sn = o),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($i.current = e === null || e.memoizedState === null ? W0 : B0),
    (e = n(r, i)),
    Sr)
  ) {
    o = 0;
    do {
      if (((Sr = !1), (Vr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (ae = se = null),
        (t.updateQueue = null),
        ($i.current = Q0),
        (e = n(r, i));
    } while (Sr);
  }
  if (
    (($i.current = vo),
    (t = se !== null && se.next !== null),
    (sn = 0),
    (ae = se = G = null),
    (mo = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function gu() {
  var e = Vr !== 0;
  return (Vr = 0), e;
}
function it() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ae === null ? (G.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function Be() {
  if (se === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ae === null ? G.memoizedState : ae.next;
  if (t !== null) (ae = t), (se = e);
  else {
    if (e === null) throw Error(k(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ae === null ? (G.memoizedState = ae = e) : (ae = ae.next = e);
  }
  return ae;
}
function Wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yl(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = se,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      a = o;
    do {
      var m = a.lane;
      if ((sn & m) === m)
        u !== null &&
          (u = u.next = {
            lane: 0,
            action: a.action,
            hasEagerState: a.hasEagerState,
            eagerState: a.eagerState,
            next: null,
          }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: m,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = d), (l = r)) : (u = u.next = d),
          (G.lanes |= m),
          (un |= m);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (l = r) : (u.next = s),
      et(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (G.lanes |= o), (un |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function wl(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    et(o, t.memoizedState) || (Ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ld() {}
function sd(e, t) {
  var n = G,
    r = Be(),
    i = t(),
    o = !et(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    yu(cd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Br(9, ad.bind(null, n, r, i, t), void 0, null),
      ce === null)
    )
      throw Error(k(349));
    sn & 30 || ud(n, t, i);
  }
  return i;
}
function ud(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ad(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), fd(t) && dd(e);
}
function cd(e, t, n) {
  return n(function () {
    fd(t) && dd(e);
  });
}
function fd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function dd(e) {
  var t = St(e, 1);
  t !== null && be(t, e, 1, -1);
}
function Aa(e) {
  var t = it();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = V0.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function pd() {
  return Be().memoizedState;
}
function Ui(e, t, n, r) {
  var i = it();
  (G.flags |= e),
    (i.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ao(e, t, n, r) {
  var i = Be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (se !== null) {
    var l = se.memoizedState;
    if (((o = l.destroy), r !== null && mu(r, l.deps))) {
      i.memoizedState = Br(t, n, o, r);
      return;
    }
  }
  (G.flags |= e), (i.memoizedState = Br(1 | t, n, o, r));
}
function Fa(e, t) {
  return Ui(8390656, 8, e, t);
}
function yu(e, t) {
  return Ao(2048, 8, e, t);
}
function hd(e, t) {
  return Ao(4, 2, e, t);
}
function md(e, t) {
  return Ao(4, 4, e, t);
}
function vd(e, t) {
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
function gd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ao(4, 4, vd.bind(null, t, e), n)
  );
}
function wu() {}
function yd(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wd(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sd(e, t, n) {
  return sn & 21
    ? (et(n, t) || ((n = xf()), (G.lanes |= n), (un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function $0(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = gl.transition;
  gl.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (gl.transition = r);
  }
}
function kd() {
  return Be().memoizedState;
}
function U0(e, t, n) {
  var r = Vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _d(e))
  )
    xd(t, n);
  else if (((n = bf(e, t, n, r)), n !== null)) {
    var i = Se();
    be(n, e, r, i), Ed(n, t, r);
  }
}
function V0(e, t, n) {
  var r = Vt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_d(e)) xd(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), et(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), cu(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = bf(e, t, i, r)),
      n !== null && ((i = Se()), be(n, e, r, i), Ed(n, t, r));
  }
}
function _d(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function xd(e, t) {
  Sr = mo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ed(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qs(e, n);
  }
}
var vo = {
    readContext: We,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  W0 = {
    readContext: We,
    useCallback: function (e, t) {
      return (it().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: Fa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ui(4194308, 4, vd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ui(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ui(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = it();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = it();
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
        (e = e.dispatch = U0.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = it();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Aa,
    useDebugValue: wu,
    useDeferredValue: function (e) {
      return (it().memoizedState = e);
    },
    useTransition: function () {
      var e = Aa(!1),
        t = e[0];
      return (e = $0.bind(null, e[1])), (it().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = it();
      if (K) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(k(349));
        sn & 30 || ud(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Fa(cd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Br(9, ad.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = it(),
        t = ce.identifierPrefix;
      if (K) {
        var n = vt,
          r = mt;
        (n = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Vr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = D0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  B0 = {
    readContext: We,
    useCallback: yd,
    useContext: We,
    useEffect: yu,
    useImperativeHandle: gd,
    useInsertionEffect: hd,
    useLayoutEffect: md,
    useMemo: wd,
    useReducer: yl,
    useRef: pd,
    useState: function () {
      return yl(Wr);
    },
    useDebugValue: wu,
    useDeferredValue: function (e) {
      var t = Be();
      return Sd(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = yl(Wr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: ld,
    useSyncExternalStore: sd,
    useId: kd,
    unstable_isNewReconciler: !1,
  },
  Q0 = {
    readContext: We,
    useCallback: yd,
    useContext: We,
    useEffect: yu,
    useImperativeHandle: gd,
    useInsertionEffect: hd,
    useLayoutEffect: md,
    useMemo: wd,
    useReducer: wl,
    useRef: pd,
    useState: function () {
      return wl(Wr);
    },
    useDebugValue: wu,
    useDeferredValue: function (e) {
      var t = Be();
      return se === null ? (t.memoizedState = e) : Sd(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = wl(Wr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: ld,
    useSyncExternalStore: sd,
    useId: kd,
    unstable_isNewReconciler: !1,
  };
function Wn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += yh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Sl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var H0 = typeof WeakMap == "function" ? WeakMap : Map;
function Cd(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yo || ((yo = !0), (ks = r)), fs(e, t);
    }),
    n
  );
}
function Pd(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        fs(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        fs(e, t),
          typeof r != "function" &&
            (Ut === null ? (Ut = new Set([this])) : Ut.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Da(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new H0();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = om.bind(null, e, t, n)), t.then(e, e));
}
function $a(e) {
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
function Ua(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = gt(-1, 1)), (t.tag = 2), $t(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var K0 = _t.ReactCurrentOwner,
  Ce = !1;
function we(e, t, n, r) {
  t.child = e === null ? id(t, null, n, r) : Un(t, e.child, n, r);
}
function Va(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Rn(t, i),
    (r = vu(e, t, n, r, o, i)),
    (n = gu()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kt(e, t, i))
      : (K && n && iu(t), (t.flags |= 1), we(e, t, r, i), t.child)
  );
}
function Wa(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ju(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), jd(e, t, o, r, i))
      : ((e = Qi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zr), n(l, r) && e.ref === t.ref)
    )
      return kt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Wt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zr(o, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), kt(e, t, i);
  }
  return ds(e, t, n, r, i);
}
function Nd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(Nn, Te),
        (Te |= n);
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
          W(Nn, Te),
          (Te |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        W(Nn, Te),
        (Te |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(Nn, Te),
      (Te |= r);
  return we(e, t, i, n), t.child;
}
function Td(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ds(e, t, n, r, i) {
  var o = je(n) ? on : ge.current;
  return (
    (o = Dn(t, o)),
    Rn(t, i),
    (n = vu(e, t, n, r, o, i)),
    (r = gu()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kt(e, t, i))
      : (K && r && iu(t), (t.flags |= 1), we(e, t, n, i), t.child)
  );
}
function Ba(e, t, n, r, i) {
  if (je(n)) {
    var o = !0;
    so(t);
  } else o = !1;
  if ((Rn(t, i), t.stateNode === null))
    Vi(e, t), nd(t, n, r), cs(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = We(a))
      : ((a = je(n) ? on : ge.current), (a = Dn(t, a)));
    var m = n.getDerivedStateFromProps,
      d =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && La(t, l, r, a)),
      (Pt = !1);
    var h = t.memoizedState;
    (l.state = h),
      po(t, r, l, i),
      (u = t.memoizedState),
      s !== r || h !== u || Pe.current || Pt
        ? (typeof m == "function" && (as(t, n, m, r), (u = t.memoizedState)),
          (s = Pt || Ra(t, n, s, r, h, u, a))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = a),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      ed(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Ye(t.type, s)),
      (l.props = a),
      (d = t.pendingProps),
      (h = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = We(u))
        : ((u = je(n) ? on : ge.current), (u = Dn(t, u)));
    var w = n.getDerivedStateFromProps;
    (m =
      typeof w == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== d || h !== u) && La(t, l, r, u)),
      (Pt = !1),
      (h = t.memoizedState),
      (l.state = h),
      po(t, r, l, i);
    var g = t.memoizedState;
    s !== d || h !== g || Pe.current || Pt
      ? (typeof w == "function" && (as(t, n, w, r), (g = t.memoizedState)),
        (a = Pt || Ra(t, n, a, r, h, g, u) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, g, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, g, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ps(e, t, n, r, o, i);
}
function ps(e, t, n, r, i, o) {
  Td(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Na(t, n, !1), kt(e, t, o);
  (r = t.stateNode), (K0.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Un(t, e.child, null, o)), (t.child = Un(t, null, s, o)))
      : we(e, t, s, o),
    (t.memoizedState = r.state),
    i && Na(t, n, !0),
    t.child
  );
}
function Id(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ja(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ja(e, t.context, !1),
    du(e, t.containerInfo);
}
function Qa(e, t, n, r, i) {
  return $n(), lu(i), (t.flags |= 256), we(e, t, n, r), t.child;
}
var hs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ms(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Md(e, t, n) {
  var r = t.pendingProps,
    i = Y.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    W(Y, i & 1),
    e === null)
  )
    return (
      ss(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = $o(l, r, 0, null)),
              (e = rn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ms(n)),
              (t.memoizedState = hs),
              e)
            : Su(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Y0(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Wt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Wt(s, o)) : ((o = rn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ms(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = hs),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Wt(o, { mode: "visible", children: r.children })),
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
function Su(e, t) {
  return (
    (t = $o({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function _i(e, t, n, r) {
  return (
    r !== null && lu(r),
    Un(t, e.child, null, n),
    (e = Su(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Y0(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Sl(Error(k(422)))), _i(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = $o({ mode: "visible", children: r.children }, i, 0, null)),
        (o = rn(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Un(t, e.child, null, l),
        (t.child.memoizedState = ms(l)),
        (t.memoizedState = hs),
        o);
  if (!(t.mode & 1)) return _i(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(k(419))), (r = Sl(o, r, void 0)), _i(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ce || s)) {
    if (((r = ce), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), St(e, i), be(r, e, i, -1));
    }
    return Pu(), (r = Sl(Error(k(421)))), _i(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = lm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ie = Dt(i.nextSibling)),
      (Oe = t),
      (K = !0),
      (Xe = null),
      e !== null &&
        ((Ae[Fe++] = mt),
        (Ae[Fe++] = vt),
        (Ae[Fe++] = ln),
        (mt = e.id),
        (vt = e.overflow),
        (ln = t)),
      (t = Su(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ha(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), us(e.return, t, n);
}
function kl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Od(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((we(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ha(e, n, t);
        else if (e.tag === 19) Ha(e, n, t);
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
  if ((W(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ho(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          kl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ho(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        kl(t, !0, n, null, o);
        break;
      case "together":
        kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (un |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function G0(e, t, n) {
  switch (t.tag) {
    case 3:
      Id(t), $n();
      break;
    case 5:
      od(t);
      break;
    case 1:
      je(t.type) && so(t);
      break;
    case 4:
      du(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      W(co, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Md(e, t, n)
          : (W(Y, Y.current & 1),
            (e = kt(e, t, n)),
            e !== null ? e.sibling : null);
      W(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Od(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        W(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Nd(e, t, n);
  }
  return kt(e, t, n);
}
var Rd, vs, Ld, zd;
Rd = function (e, t) {
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
vs = function () {};
Ld = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), tn(ut.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Dl(e, i)), (r = Dl(e, r)), (o = []);
        break;
      case "select":
        (i = X({}, i, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Vl(e, i)), (r = Vl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oo);
    }
    Bl(n, r);
    var l;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var s = i[a];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Nr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Nr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && Q("scroll", e),
                  o || s === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
zd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function rr(e, t) {
  if (!K)
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
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function X0(e, t, n) {
  var r = t.pendingProps;
  switch ((ou(t), t.tag)) {
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
      return me(t), null;
    case 1:
      return je(t.type) && lo(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vn(),
        H(Pe),
        H(ge),
        hu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Si(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xe !== null && (Es(Xe), (Xe = null)))),
        vs(e, t),
        me(t),
        null
      );
    case 5:
      pu(t);
      var i = tn(Ur.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ld(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return me(t), null;
        }
        if (((e = tn(ut.current)), Si(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[lt] = t), (r[Dr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < dr.length; i++) Q(dr[i], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", r), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              ea(r, o), Q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Q("invalid", r);
              break;
            case "textarea":
              na(r, o), Q("invalid", r);
          }
          Bl(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      wi(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      wi(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Nr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              fi(r), ta(r, o, !0);
              break;
            case "textarea":
              fi(r), ra(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = oo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = uf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[lt] = t),
            (e[Dr] = r),
            Rd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ql(n, r)), n)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < dr.length; i++) Q(dr[i], e);
                i = r;
                break;
              case "source":
                Q("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (i = r);
                break;
              case "details":
                Q("toggle", e), (i = r);
                break;
              case "input":
                ea(e, r), (i = Dl(e, r)), Q("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = X({}, r, { value: void 0 })),
                  Q("invalid", e);
                break;
              case "textarea":
                na(e, r), (i = Vl(e, r)), Q("invalid", e);
                break;
              default:
                i = r;
            }
            Bl(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? ff(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && af(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Tr(e, u)
                    : typeof u == "number" && Tr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Nr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && Q("scroll", e)
                      : u != null && Qs(e, o, u, l));
              }
            switch (n) {
              case "input":
                fi(e), ta(e, r, !1);
                break;
              case "textarea":
                fi(e), ra(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Qt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Tn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Tn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = oo);
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) zd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = tn(Ur.current)), tn(ut.current), Si(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[lt] = t),
            (o = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                wi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[lt] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (H(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Ie !== null && t.mode & 1 && !(t.flags & 128))
          Jf(), $n(), (t.flags |= 98560), (o = !1);
        else if (((o = Si(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[lt] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (o = !1);
        } else Xe !== null && (Es(Xe), (Xe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? ue === 0 && (ue = 3) : Pu())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        Vn(), vs(e, t), e === null && Ar(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return au(t.type._context), me(t), null;
    case 17:
      return je(t.type) && lo(), me(t), null;
    case 19:
      if ((H(Y), (o = t.memoizedState), o === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) rr(o, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = ho(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    rr(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            te() > Bn &&
            ((t.flags |= 128), (r = !0), rr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ho(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              rr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !K)
            )
              return me(t), null;
          } else
            2 * te() - o.renderingStartTime > Bn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), rr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = te()),
          (t.sibling = null),
          (n = Y.current),
          W(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        Cu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Te & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function q0(e, t) {
  switch ((ou(t), t.tag)) {
    case 1:
      return (
        je(t.type) && lo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vn(),
        H(Pe),
        H(ge),
        hu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return pu(t), null;
    case 13:
      if ((H(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        $n();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(Y), null;
    case 4:
      return Vn(), null;
    case 10:
      return au(t.type._context), null;
    case 22:
    case 23:
      return Cu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xi = !1,
  ve = !1,
  Z0 = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function jn(e, t) {
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
function gs(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Ka = !1;
function J0(e, t) {
  if (((es = no), (e = $f()), ru(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            a = 0,
            m = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (i !== 0 && d.nodeType !== 3) || (s = l + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (u = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (h = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++a === i && (s = l),
                h === o && ++m === r && (u = l),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = w;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ts = { focusedElem: e, selectionRange: n }, no = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    N = g.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ye(t.type, y),
                      N
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
                throw Error(k(163));
            }
        } catch (S) {
          Z(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (g = Ka), (Ka = !1), g;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && gs(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Fo(e, t) {
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
function ys(e) {
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
function Ad(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ad(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[lt], delete t[Dr], delete t[is], delete t[L0], delete t[z0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Fd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ya(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fd(e.return)) return null;
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
function ws(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = oo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ws(e, t, n), e = e.sibling; e !== null; ) ws(e, t, n), (e = e.sibling);
}
function Ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ss(e, t, n), e = e.sibling; e !== null; ) Ss(e, t, n), (e = e.sibling);
}
var fe = null,
  Ge = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null; ) Dd(e, t, n), (n = n.sibling);
}
function Dd(e, t, n) {
  if (st && typeof st.onCommitFiberUnmount == "function")
    try {
      st.onCommitFiberUnmount(To, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || jn(n, t);
    case 6:
      var r = fe,
        i = Ge;
      (fe = null),
        xt(e, t, n),
        (fe = r),
        (Ge = i),
        fe !== null &&
          (Ge
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (Ge
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? hl(e.parentNode, n)
              : e.nodeType === 1 && hl(e, n),
            Rr(e))
          : hl(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (i = Ge),
        (fe = n.stateNode.containerInfo),
        (Ge = !0),
        xt(e, t, n),
        (fe = r),
        (Ge = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && gs(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Z(n, t, s);
        }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), xt(e, t, n), (ve = r))
        : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function Ga(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Z0()),
      t.forEach(function (r) {
        var i = sm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (fe = s.stateNode), (Ge = !1);
              break e;
            case 3:
              (fe = s.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (fe = s.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          s = s.return;
        }
        if (fe === null) throw Error(k(160));
        Dd(o, l, i), (fe = null), (Ge = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        Z(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) $d(t, e), (t = t.sibling);
}
function $d(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), rt(e), r & 4)) {
        try {
          kr(3, e, e.return), Fo(3, e);
        } catch (y) {
          Z(e, e.return, y);
        }
        try {
          kr(5, e, e.return);
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 1:
      Qe(t, e), rt(e), r & 512 && n !== null && jn(n, n.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        rt(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Tr(i, "");
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && lf(i, o),
              Ql(s, l);
            var a = Ql(s, o);
            for (l = 0; l < u.length; l += 2) {
              var m = u[l],
                d = u[l + 1];
              m === "style"
                ? ff(i, d)
                : m === "dangerouslySetInnerHTML"
                ? af(i, d)
                : m === "children"
                ? Tr(i, d)
                : Qs(i, m, d, a);
            }
            switch (s) {
              case "input":
                $l(i, o);
                break;
              case "textarea":
                sf(i, o);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Tn(i, !!o.multiple, w, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Tn(i, !!o.multiple, o.defaultValue, !0)
                      : Tn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Dr] = o;
          } catch (y) {
            Z(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Rr(t.containerInfo);
        } catch (y) {
          Z(e, e.return, y);
        }
      break;
    case 4:
      Qe(t, e), rt(e);
      break;
    case 13:
      Qe(t, e),
        rt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (xu = te())),
        r & 4 && Ga(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (a = ve) || m), Qe(t, e), (ve = a)) : Qe(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !m && e.mode & 1)
        )
          for (T = e, m = e.child; m !== null; ) {
            for (d = T = m; T !== null; ) {
              switch (((h = T), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, h, h.return);
                  break;
                case 1:
                  jn(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      Z(r, n, y);
                    }
                  }
                  break;
                case 5:
                  jn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    qa(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (T = w)) : qa(d);
            }
            m = m.sibling;
          }
        e: for (m = null, d = e; ; ) {
          if (d.tag === 5) {
            if (m === null) {
              m = d;
              try {
                (i = d.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = d.stateNode),
                      (u = d.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = cf("display", l)));
              } catch (y) {
                Z(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (m === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (y) {
                Z(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            m === d && (m = null), (d = d.return);
          }
          m === d && (m = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), rt(e), r & 4 && Ga(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Tr(i, ""), (r.flags &= -33));
          var o = Ya(e);
          Ss(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Ya(e);
          ws(e, s, l);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      Z(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function b0(e, t, n) {
  (T = e), Ud(e);
}
function Ud(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var i = T,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || xi;
      if (!l) {
        var s = i.alternate,
          u = (s !== null && s.memoizedState !== null) || ve;
        s = xi;
        var a = ve;
        if (((xi = l), (ve = u) && !a))
          for (T = i; T !== null; )
            (l = T),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Za(i)
                : u !== null
                ? ((u.return = l), (T = u))
                : Za(i);
        for (; o !== null; ) (T = o), Ud(o), (o = o.sibling);
        (T = i), (xi = s), (ve = a);
      }
      Xa(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (T = o)) : Xa(e);
  }
}
function Xa(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || Fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ye(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Oa(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Oa(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var m = a.memoizedState;
                  if (m !== null) {
                    var d = m.dehydrated;
                    d !== null && Rr(d);
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
              throw Error(k(163));
          }
        ve || (t.flags & 512 && ys(t));
      } catch (h) {
        Z(t, t.return, h);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function qa(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Za(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fo(4, t);
          } catch (u) {
            Z(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Z(t, i, u);
            }
          }
          var o = t.return;
          try {
            ys(t);
          } catch (u) {
            Z(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ys(t);
          } catch (u) {
            Z(t, l, u);
          }
      }
    } catch (u) {
      Z(t, t.return, u);
    }
    if (t === e) {
      T = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (T = s);
      break;
    }
    T = t.return;
  }
}
var em = Math.ceil,
  go = _t.ReactCurrentDispatcher,
  ku = _t.ReactCurrentOwner,
  Ve = _t.ReactCurrentBatchConfig,
  $ = 0,
  ce = null,
  ie = null,
  de = 0,
  Te = 0,
  Nn = Yt(0),
  ue = 0,
  Qr = null,
  un = 0,
  Do = 0,
  _u = 0,
  _r = null,
  Ee = null,
  xu = 0,
  Bn = 1 / 0,
  dt = null,
  yo = !1,
  ks = null,
  Ut = null,
  Ei = !1,
  Mt = null,
  wo = 0,
  xr = 0,
  _s = null,
  Wi = -1,
  Bi = 0;
function Se() {
  return $ & 6 ? te() : Wi !== -1 ? Wi : (Wi = te());
}
function Vt(e) {
  return e.mode & 1
    ? $ & 2 && de !== 0
      ? de & -de
      : F0.transition !== null
      ? (Bi === 0 && (Bi = xf()), Bi)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : If(e.type))),
        e)
    : 1;
}
function be(e, t, n, r) {
  if (50 < xr) throw ((xr = 0), (_s = null), Error(k(185)));
  ti(e, n, r),
    (!($ & 2) || e !== ce) &&
      (e === ce && (!($ & 2) && (Do |= n), ue === 4 && Tt(e, de)),
      Ne(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((Bn = te() + 500), Lo && Gt()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  Fh(e, t);
  var r = to(e, e === ce ? de : 0);
  if (r === 0)
    n !== null && la(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && la(n), t === 1))
      e.tag === 0 ? A0(Ja.bind(null, e)) : Xf(Ja.bind(null, e)),
        O0(function () {
          !($ & 6) && Gt();
        }),
        (n = null);
    else {
      switch (Ef(r)) {
        case 1:
          n = Xs;
          break;
        case 4:
          n = kf;
          break;
        case 16:
          n = eo;
          break;
        case 536870912:
          n = _f;
          break;
        default:
          n = eo;
      }
      n = Gd(n, Vd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vd(e, t) {
  if (((Wi = -1), (Bi = 0), $ & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Ln() && e.callbackNode !== n) return null;
  var r = to(e, e === ce ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = So(e, r);
  else {
    t = r;
    var i = $;
    $ |= 2;
    var o = Bd();
    (ce !== e || de !== t) && ((dt = null), (Bn = te() + 500), nn(e, t));
    do
      try {
        rm();
        break;
      } catch (s) {
        Wd(e, s);
      }
    while (1);
    uu(),
      (go.current = o),
      ($ = i),
      ie !== null ? (t = 0) : ((ce = null), (de = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Xl(e)), i !== 0 && ((r = i), (t = xs(e, i)))), t === 1)
    )
      throw ((n = Qr), nn(e, 0), Tt(e, r), Ne(e, te()), n);
    if (t === 6) Tt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !tm(i) &&
          ((t = So(e, r)),
          t === 2 && ((o = Xl(e)), o !== 0 && ((r = o), (t = xs(e, o)))),
          t === 1))
      )
        throw ((n = Qr), nn(e, 0), Tt(e, r), Ne(e, te()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          qt(e, Ee, dt);
          break;
        case 3:
          if (
            (Tt(e, r), (r & 130023424) === r && ((t = xu + 500 - te()), 10 < t))
          ) {
            if (to(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = rs(qt.bind(null, e, Ee, dt), t);
            break;
          }
          qt(e, Ee, dt);
          break;
        case 4:
          if ((Tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Je(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = te() - r),
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
                : 1960 * em(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = rs(qt.bind(null, e, Ee, dt), r);
            break;
          }
          qt(e, Ee, dt);
          break;
        case 5:
          qt(e, Ee, dt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ne(e, te()), e.callbackNode === n ? Vd.bind(null, e) : null;
}
function xs(e, t) {
  var n = _r;
  return (
    e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
    (e = So(e, t)),
    e !== 2 && ((t = Ee), (Ee = n), t !== null && Es(t)),
    e
  );
}
function Es(e) {
  Ee === null ? (Ee = e) : Ee.push.apply(Ee, e);
}
function tm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!et(o(), i)) return !1;
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
function Tt(e, t) {
  for (
    t &= ~_u,
      t &= ~Do,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ja(e) {
  if ($ & 6) throw Error(k(327));
  Ln();
  var t = to(e, 0);
  if (!(t & 1)) return Ne(e, te()), null;
  var n = So(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xl(e);
    r !== 0 && ((t = r), (n = xs(e, r)));
  }
  if (n === 1) throw ((n = Qr), nn(e, 0), Tt(e, t), Ne(e, te()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, Ee, dt),
    Ne(e, te()),
    null
  );
}
function Eu(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((Bn = te() + 500), Lo && Gt());
  }
}
function an(e) {
  Mt !== null && Mt.tag === 0 && !($ & 6) && Ln();
  var t = $;
  $ |= 1;
  var n = Ve.transition,
    r = U;
  try {
    if (((Ve.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Ve.transition = n), ($ = t), !($ & 6) && Gt();
  }
}
function Cu() {
  (Te = Nn.current), H(Nn);
}
function nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), M0(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((ou(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && lo();
          break;
        case 3:
          Vn(), H(Pe), H(ge), hu();
          break;
        case 5:
          pu(r);
          break;
        case 4:
          Vn();
          break;
        case 13:
          H(Y);
          break;
        case 19:
          H(Y);
          break;
        case 10:
          au(r.type._context);
          break;
        case 22:
        case 23:
          Cu();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (ie = e = Wt(e.current, null)),
    (de = Te = t),
    (ue = 0),
    (Qr = null),
    (_u = Do = un = 0),
    (Ee = _r = null),
    en !== null)
  ) {
    for (t = 0; t < en.length; t++)
      if (((n = en[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    en = null;
  }
  return e;
}
function Wd(e, t) {
  do {
    var n = ie;
    try {
      if ((uu(), ($i.current = vo), mo)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        mo = !1;
      }
      if (
        ((sn = 0),
        (ae = se = G = null),
        (Sr = !1),
        (Vr = 0),
        (ku.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (Qr = t), (ie = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = de),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            m = s,
            d = m.tag;
          if (!(m.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = m.alternate;
            h
              ? ((m.updateQueue = h.updateQueue),
                (m.memoizedState = h.memoizedState),
                (m.lanes = h.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = $a(l);
          if (w !== null) {
            (w.flags &= -257),
              Ua(w, l, s, o, t),
              w.mode & 1 && Da(o, a, t),
              (t = w),
              (u = a);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Da(o, a, t), Pu();
              break e;
            }
            u = Error(k(426));
          }
        } else if (K && s.mode & 1) {
          var N = $a(l);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              Ua(N, l, s, o, t),
              lu(Wn(u, s));
            break e;
          }
        }
        (o = u = Wn(u, s)),
          ue !== 4 && (ue = 2),
          _r === null ? (_r = [o]) : _r.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Cd(o, u, t);
              Ma(o, f);
              break e;
            case 1:
              s = u;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Ut === null || !Ut.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Pd(o, s, t);
                Ma(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Hd(n);
    } catch (_) {
      (t = _), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Bd() {
  var e = go.current;
  return (go.current = vo), e === null ? vo : e;
}
function Pu() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    ce === null || (!(un & 268435455) && !(Do & 268435455)) || Tt(ce, de);
}
function So(e, t) {
  var n = $;
  $ |= 2;
  var r = Bd();
  (ce !== e || de !== t) && ((dt = null), nn(e, t));
  do
    try {
      nm();
      break;
    } catch (i) {
      Wd(e, i);
    }
  while (1);
  if ((uu(), ($ = n), (go.current = r), ie !== null)) throw Error(k(261));
  return (ce = null), (de = 0), ue;
}
function nm() {
  for (; ie !== null; ) Qd(ie);
}
function rm() {
  for (; ie !== null && !Nh(); ) Qd(ie);
}
function Qd(e) {
  var t = Yd(e.alternate, e, Te);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hd(e) : (ie = t),
    (ku.current = null);
}
function Hd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = q0(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (ie = null);
        return;
      }
    } else if (((n = X0(n, t, Te)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function qt(e, t, n) {
  var r = U,
    i = Ve.transition;
  try {
    (Ve.transition = null), (U = 1), im(e, t, n, r);
  } finally {
    (Ve.transition = i), (U = r);
  }
  return null;
}
function im(e, t, n, r) {
  do Ln();
  while (Mt !== null);
  if ($ & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Dh(e, o),
    e === ce && ((ie = ce = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ei ||
      ((Ei = !0),
      Gd(eo, function () {
        return Ln(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ve.transition), (Ve.transition = null);
    var l = U;
    U = 1;
    var s = $;
    ($ |= 4),
      (ku.current = null),
      J0(e, n),
      $d(n, e),
      E0(ts),
      (no = !!es),
      (ts = es = null),
      (e.current = n),
      b0(n),
      Th(),
      ($ = s),
      (U = l),
      (Ve.transition = o);
  } else e.current = n;
  if (
    (Ei && ((Ei = !1), (Mt = e), (wo = i)),
    (o = e.pendingLanes),
    o === 0 && (Ut = null),
    Oh(n.stateNode),
    Ne(e, te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (yo) throw ((yo = !1), (e = ks), (ks = null), e);
  return (
    wo & 1 && e.tag !== 0 && Ln(),
    (o = e.pendingLanes),
    o & 1 ? (e === _s ? xr++ : ((xr = 0), (_s = e))) : (xr = 0),
    Gt(),
    null
  );
}
function Ln() {
  if (Mt !== null) {
    var e = Ef(wo),
      t = Ve.transition,
      n = U;
    try {
      if (((Ve.transition = null), (U = 16 > e ? 16 : e), Mt === null))
        var r = !1;
      else {
        if (((e = Mt), (Mt = null), (wo = 0), $ & 6)) throw Error(k(331));
        var i = $;
        for ($ |= 4, T = e.current; T !== null; ) {
          var o = T,
            l = o.child;
          if (T.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (T = a; T !== null; ) {
                  var m = T;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, m, o);
                  }
                  var d = m.child;
                  if (d !== null) (d.return = m), (T = d);
                  else
                    for (; T !== null; ) {
                      m = T;
                      var h = m.sibling,
                        w = m.return;
                      if ((Ad(m), m === a)) {
                        T = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = w), (T = h);
                        break;
                      }
                      T = w;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var N = y.sibling;
                    (y.sibling = null), (y = N);
                  } while (y !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (T = l);
          else
            e: for (; T !== null; ) {
              if (((o = T), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (T = f);
                break e;
              }
              T = o.return;
            }
        }
        var c = e.current;
        for (T = c; T !== null; ) {
          l = T;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (T = p);
          else
            e: for (l = c; T !== null; ) {
              if (((s = T), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fo(9, s);
                  }
                } catch (_) {
                  Z(s, s.return, _);
                }
              if (s === l) {
                T = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (T = S);
                break e;
              }
              T = s.return;
            }
        }
        if (
          (($ = i), Gt(), st && typeof st.onPostCommitFiberRoot == "function")
        )
          try {
            st.onPostCommitFiberRoot(To, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Ve.transition = t);
    }
  }
  return !1;
}
function ba(e, t, n) {
  (t = Wn(n, t)),
    (t = Cd(e, t, 1)),
    (e = $t(e, t, 1)),
    (t = Se()),
    e !== null && (ti(e, 1, t), Ne(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) ba(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ba(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ut === null || !Ut.has(r)))
        ) {
          (e = Wn(n, e)),
            (e = Pd(t, e, 1)),
            (t = $t(t, e, 1)),
            (e = Se()),
            t !== null && (ti(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function om(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (de & n) === n &&
      (ue === 4 || (ue === 3 && (de & 130023424) === de && 500 > te() - xu)
        ? nn(e, 0)
        : (_u |= n)),
    Ne(e, t);
}
function Kd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hi), (hi <<= 1), !(hi & 130023424) && (hi = 4194304))
      : (t = 1));
  var n = Se();
  (e = St(e, t)), e !== null && (ti(e, t, n), Ne(e, n));
}
function lm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Kd(e, n);
}
function sm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Kd(e, n);
}
var Yd;
Yd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), G0(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), K && t.flags & 1048576 && qf(t, ao, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vi(e, t), (e = t.pendingProps);
      var i = Dn(t, ge.current);
      Rn(t, n), (i = vu(null, t, r, e, i, n));
      var o = gu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            je(r) ? ((o = !0), so(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            fu(t),
            (i.updater = zo),
            (t.stateNode = i),
            (i._reactInternals = t),
            cs(t, r, e, n),
            (t = ps(null, t, r, !0, o, n)))
          : ((t.tag = 0), K && o && iu(t), we(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = am(r)),
          (e = Ye(r, e)),
          i)
        ) {
          case 0:
            t = ds(null, t, r, e, n);
            break e;
          case 1:
            t = Ba(null, t, r, e, n);
            break e;
          case 11:
            t = Va(null, t, r, e, n);
            break e;
          case 14:
            t = Wa(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        ds(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        Ba(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Id(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          ed(e, t),
          po(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Wn(Error(k(423)), t)), (t = Qa(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Wn(Error(k(424)), t)), (t = Qa(e, t, r, n, i));
            break e;
          } else
            for (
              Ie = Dt(t.stateNode.containerInfo.firstChild),
                Oe = t,
                K = !0,
                Xe = null,
                n = id(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($n(), r === i)) {
            t = kt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        od(t),
        e === null && ss(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        ns(r, i) ? (l = null) : o !== null && ns(r, o) && (t.flags |= 32),
        Td(e, t),
        we(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ss(t), null;
    case 13:
      return Md(e, t, n);
    case 4:
      return (
        du(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Un(t, null, r, n)) : we(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        Va(e, t, r, i, n)
      );
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          W(co, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (et(o.value, l)) {
            if (o.children === i.children && !Pe.current) {
              t = kt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = gt(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var m = a.pending;
                        m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      us(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(k(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  us(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        we(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Rn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        we(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ye(r, t.pendingProps)),
        (i = Ye(r.type, i)),
        Wa(e, t, r, i, n)
      );
    case 15:
      return jd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        Vi(e, t),
        (t.tag = 1),
        je(r) ? ((e = !0), so(t)) : (e = !1),
        Rn(t, n),
        nd(t, r, i),
        cs(t, r, i, n),
        ps(null, t, r, !0, e, n)
      );
    case 19:
      return Od(e, t, n);
    case 22:
      return Nd(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Gd(e, t) {
  return Sf(e, t);
}
function um(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ue(e, t, n, r) {
  return new um(e, t, n, r);
}
function ju(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function am(e) {
  if (typeof e == "function") return ju(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ks)) return 11;
    if (e === Ys) return 14;
  }
  return 2;
}
function Wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
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
function Qi(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) ju(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case yn:
        return rn(n.children, i, o, t);
      case Hs:
        (l = 8), (i |= 8);
        break;
      case Ll:
        return (
          (e = Ue(12, n, t, i | 2)), (e.elementType = Ll), (e.lanes = o), e
        );
      case zl:
        return (e = Ue(13, n, t, i)), (e.elementType = zl), (e.lanes = o), e;
      case Al:
        return (e = Ue(19, n, t, i)), (e.elementType = Al), (e.lanes = o), e;
      case nf:
        return $o(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ef:
              l = 10;
              break e;
            case tf:
              l = 9;
              break e;
            case Ks:
              l = 11;
              break e;
            case Ys:
              l = 14;
              break e;
            case Ct:
              (l = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function rn(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function $o(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = nf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function _l(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function xl(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cm(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = rl(0)),
    (this.expirationTimes = rl(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = rl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Nu(e, t, n, r, i, o, l, s, u) {
  return (
    (e = new cm(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ue(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fu(o),
    e
  );
}
function fm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xd(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (dn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return Gf(e, n, t);
  }
  return t;
}
function qd(e, t, n, r, i, o, l, s, u) {
  return (
    (e = Nu(n, r, !0, e, i, o, l, s, u)),
    (e.context = Xd(null)),
    (n = e.current),
    (r = Se()),
    (i = Vt(n)),
    (o = gt(r, i)),
    (o.callback = t ?? null),
    $t(n, o, i),
    (e.current.lanes = i),
    ti(e, i, r),
    Ne(e, r),
    e
  );
}
function Uo(e, t, n, r) {
  var i = t.current,
    o = Se(),
    l = Vt(i);
  return (
    (n = Xd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $t(i, t, l)),
    e !== null && (be(e, i, l, o), Di(e, i, l)),
    l
  );
}
function ko(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ec(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tu(e, t) {
  ec(e, t), (e = e.alternate) && ec(e, t);
}
function dm() {
  return null;
}
var Zd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Iu(e) {
  this._internalRoot = e;
}
Vo.prototype.render = Iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Uo(e, t, null, null);
};
Vo.prototype.unmount = Iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function () {
      Uo(null, e, null, null);
    }),
      (t[wt] = null);
  }
};
function Vo(e) {
  this._internalRoot = e;
}
Vo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = jf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++);
    Nt.splice(n, 0, e), n === 0 && Tf(e);
  }
};
function Mu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Wo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function tc() {}
function pm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = ko(l);
        o.call(a);
      };
    }
    var l = qd(t, r, e, 0, null, !1, !1, "", tc);
    return (
      (e._reactRootContainer = l),
      (e[wt] = l.current),
      Ar(e.nodeType === 8 ? e.parentNode : e),
      an(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = ko(u);
      s.call(a);
    };
  }
  var u = Nu(e, 0, !1, null, null, !1, !1, "", tc);
  return (
    (e._reactRootContainer = u),
    (e[wt] = u.current),
    Ar(e.nodeType === 8 ? e.parentNode : e),
    an(function () {
      Uo(t, u, n, r);
    }),
    u
  );
}
function Bo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = ko(l);
        s.call(u);
      };
    }
    Uo(t, l, e, i);
  } else l = pm(n, t, e, i, r);
  return ko(l);
}
Cf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fr(t.pendingLanes);
        n !== 0 &&
          (qs(t, n | 1), Ne(t, te()), !($ & 6) && ((Bn = te() + 500), Gt()));
      }
      break;
    case 13:
      an(function () {
        var r = St(e, 1);
        if (r !== null) {
          var i = Se();
          be(r, e, 1, i);
        }
      }),
        Tu(e, 1);
  }
};
Zs = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Se();
      be(t, e, 134217728, n);
    }
    Tu(e, 134217728);
  }
};
Pf = function (e) {
  if (e.tag === 13) {
    var t = Vt(e),
      n = St(e, t);
    if (n !== null) {
      var r = Se();
      be(n, e, t, r);
    }
    Tu(e, t);
  }
};
jf = function () {
  return U;
};
Nf = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Kl = function (e, t, n) {
  switch (t) {
    case "input":
      if (($l(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = Ro(r);
            if (!i) throw Error(k(90));
            of(r), $l(r, i);
          }
        }
      }
      break;
    case "textarea":
      sf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Tn(e, !!n.multiple, t, !1);
  }
};
hf = Eu;
mf = an;
var hm = { usingClientEntryPoint: !1, Events: [ri, _n, Ro, df, pf, Eu] },
  ir = {
    findFiberByHostInstance: bt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  mm = {
    bundleType: ir.bundleType,
    version: ir.version,
    rendererPackageName: ir.rendererPackageName,
    rendererConfig: ir.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = yf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ir.findFiberByHostInstance || dm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ci.isDisabled && Ci.supportsFiber)
    try {
      (To = Ci.inject(mm)), (st = Ci);
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hm;
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mu(t)) throw Error(k(200));
  return fm(e, t, null, n);
};
Le.createRoot = function (e, t) {
  if (!Mu(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = Zd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Nu(e, 1, !1, null, null, n, !1, r, i)),
    (e[wt] = t.current),
    Ar(e.nodeType === 8 ? e.parentNode : e),
    new Iu(t)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = yf(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
  return an(e);
};
Le.hydrate = function (e, t, n) {
  if (!Wo(t)) throw Error(k(200));
  return Bo(null, e, t, !0, n);
};
Le.hydrateRoot = function (e, t, n) {
  if (!Mu(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Zd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = qd(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[wt] = t.current),
    Ar(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Vo(t);
};
Le.render = function (e, t, n) {
  if (!Wo(t)) throw Error(k(200));
  return Bo(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function (e) {
  if (!Wo(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (an(function () {
        Bo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[wt] = null);
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = Eu;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Wo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Bo(e, t, n, !1, r);
};
Le.version = "18.2.0-next-9e3b772b8-20220608";
function Jd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jd);
    } catch (e) {
      console.error(e);
    }
}
Jd(), (Xc.exports = Le);
var bd = Xc.exports,
  nc = bd;
(Ol.createRoot = nc.createRoot), (Ol.hydrateRoot = nc.hydrateRoot);
const vm = "_zoom_outerid_119se_1",
  gm = "_zoom_119se_1",
  ym = "_initialLink_119se_81",
  wm = "_node_119se_93",
  Sm = "_objective_119se_105",
  km = "_diviceNotice_119se_155",
  jt = {
    zoom_outerid: vm,
    zoom: gm,
    initialLink: ym,
    node: wm,
    objective: Sm,
    diviceNotice: km,
  },
  ep = M.createContext(null),
  tp = () => M.useContext(ep),
  _m = (e) => {
    const [t, n] = M.useState(1),
      [r, i] = M.useState(!1),
      [o, l] = M.useState(1e3),
      [s, u] = M.useState(310),
      [a, m] = M.useState({ x: 0, y: 0 }),
      [d, h] = M.useState(window.innerWidth),
      [w, g] = M.useState(null),
      [y, N] = M.useState(!0);
    M.useEffect(() => {
      const C = () => {
        h(window.innerWidth);
      };
      return (
        d <= 770 && (n(1), l(0), u(0)),
        window.addEventListener("resize", C),
        () => {
          window.removeEventListener("resize", C);
        }
      );
    }, []),
      M.useEffect(() => {
        f();
      }, [o, s, t]),
      M.useEffect(() => {
        const C = document.getElementById(jt.zoom_outerid);
        r ? (C.style.cursor = "grabbing") : (C.style.cursor = "grab");
      }, [r]),
      M.useEffect(() => {
        function C(D) {
          let b = 20;
          switch (D.key) {
            case "ArrowUp":
              g("Arrow Up key pressed"), u((V) => V + b);
              break;
            case "ArrowDown":
              g("Arrow Down key pressed"), u((V) => V - b);
              break;
            case "ArrowLeft":
              g("Arrow Left key pressed"), l((V) => V + b);
              break;
            case "ArrowRight":
              g("Arrow Right key pressed"), l((V) => V - b);
              break;
          }
        }
        function O(D) {
          g(null);
        }
        return (
          document.addEventListener("keydown", C),
          document.addEventListener("keyup", O),
          () => {
            document.removeEventListener("keydown", C),
              document.removeEventListener("keyup", O);
          }
        );
      }, []);
    const f = () => {
        const C = document.getElementById(jt.zoom);
        if (d <= 770) {
          (C.style.transform = "none"),
            (C.style.overflow = "scroll"),
            (C.style.height = "100%");
          return;
        }
        (C.style.transform = `translate(${o}px, ${s}px) scale(${t})`),
          (C.style.overflow = "visible"),
          (C.style.height = "none");
      },
      c = (C) => {
        y &&
          (C.preventDefault(),
          m({ x: C.clientX - o, y: C.clientY - s }),
          i(!0));
      },
      p = () => {
        i(!1);
      },
      S = (C) => {
        C.preventDefault(),
          !(!r || d <= 770) && (l(C.clientX - a.x), u(C.clientY - a.y));
      },
      _ = (C) => {
        if (d <= 770) {
          n(1);
          return;
        }
        const D =
          (C.wheelDelta ? C.wheelDelta : -C.deltaY) > 0 ? t * 1.05 : t / 1.05;
        if (D < 0.1 || D > 8) return;
        const b = (C.clientX - o) / t,
          V = (C.clientY - s) / t;
        n(D), l(C.clientX - b * D), u(C.clientY - V * D);
      },
      j = (C) => {
        m({ x: C.touches[0].clientX - o, y: C.touches[0].clientY - s }), i(!0);
      },
      E = (C) => {
        !r ||
          d <= 770 ||
          (l(C.touches[0].clientX - a.x), u(C.touches[0].clientY - a.y));
      },
      I = () => {
        i(!1);
      };
    return v.jsx(v.Fragment, {
      children: v.jsx(ep.Provider, {
        value: {
          scale: t,
          setScale: n,
          panning: r,
          setPanning: i,
          pointX: o,
          setPointX: l,
          pointY: s,
          setPointY: u,
          start: a,
          setStart: m,
          arrowKeyPressed: w,
          setArrowKeyPressed: g,
          setTransform: f,
          handleMouseDown: c,
          handleMouseUp: p,
          handleMouseMove: S,
          handleWheel: _,
          handleTouchStart: j,
          handleTouchMove: E,
          handleTouchEnd: I,
          notInsideAnyElement: y,
          setNotInsideAnyElement: N,
          innerWidth: d,
        },
        children: e.children,
      }),
    });
  },
  xm = "_shadowed_1bm5b_9",
  Em = "_hand_1bm5b_41",
  Cm = "_wave_1bm5b_1",
  Pm = "_aboutMe_1bm5b_145",
  jm = "_aboutMeSvg_1bm5b_221",
  Nm = "_aboutMeText_1bm5b_255",
  Tm = "_gradientName_1bm5b_275",
  mn = {
    shadowed: xm,
    hand: Em,
    wave: Cm,
    aboutMe: Pm,
    aboutMeSvg: jm,
    aboutMeText: Nm,
    gradientName: Tm,
  },
  Im = "./assets/main-176cb9a5.png";
var np = { exports: {} },
  Mm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Om = Mm,
  Rm = Om;
function rp() {}
function ip() {}
ip.resetWarningCache = rp;
var Lm = function () {
  function e(r, i, o, l, s, u) {
    if (u !== Rm) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ip,
    resetWarningCache: rp,
  };
  return (n.PropTypes = n), n;
};
np.exports = Lm();
var zm = np.exports;
const ee = Dc(zm);
var Am = Object.defineProperty,
  Fm = (e, t) => {
    for (var n in t) Am(e, n, { get: t[n], enumerable: !0 });
  },
  tt = {};
Fm(tt, {
  assign: () => Um,
  colors: () => Bt,
  createStringInterpolator: () => Du,
  skipAnimation: () => fp,
  to: () => cp,
  willAdvance: () => $u,
});
var Ou = li(),
  L = (e) => oi(e, Ou),
  Ru = li();
L.write = (e) => oi(e, Ru);
var Qo = li();
L.onStart = (e) => oi(e, Qo);
var Lu = li();
L.onFrame = (e) => oi(e, Lu);
var zu = li();
L.onFinish = (e) => oi(e, zu);
var zn = [];
L.setTimeout = (e, t) => {
  const n = L.now() + t,
    r = () => {
      const o = zn.findIndex((l) => l.cancel == r);
      ~o && zn.splice(o, 1), (Rt -= ~o ? 1 : 0);
    },
    i = { time: n, handler: e, cancel: r };
  return zn.splice(op(n), 0, i), (Rt += 1), lp(), i;
};
var op = (e) => ~(~zn.findIndex((t) => t.time > e) || ~zn.length);
L.cancel = (e) => {
  Qo.delete(e), Lu.delete(e), zu.delete(e), Ou.delete(e), Ru.delete(e);
};
L.sync = (e) => {
  (Cs = !0), L.batchedUpdates(e), (Cs = !1);
};
L.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...i) {
    (t = i), L.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      Qo.delete(n), (t = null);
    }),
    r
  );
};
var Au = typeof window < "u" ? window.requestAnimationFrame : () => {};
L.use = (e) => (Au = e);
L.now = typeof performance < "u" ? () => performance.now() : Date.now;
L.batchedUpdates = (e) => e();
L.catch = console.error;
L.frameLoop = "always";
L.advance = () => {
  L.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : up();
};
var Ot = -1,
  Rt = 0,
  Cs = !1;
function oi(e, t) {
  Cs ? (t.delete(e), e(0)) : (t.add(e), lp());
}
function lp() {
  Ot < 0 && ((Ot = 0), L.frameLoop !== "demand" && Au(sp));
}
function Dm() {
  Ot = -1;
}
function sp() {
  ~Ot && (Au(sp), L.batchedUpdates(up));
}
function up() {
  const e = Ot;
  Ot = L.now();
  const t = op(Ot);
  if ((t && (ap(zn.splice(0, t), (n) => n.handler()), (Rt -= t)), !Rt)) {
    Dm();
    return;
  }
  Qo.flush(),
    Ou.flush(e ? Math.min(64, Ot - e) : 16.667),
    Lu.flush(),
    Ru.flush(),
    zu.flush();
}
function li() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (Rt += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (Rt -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (Rt -= t.size),
        ap(t, (r) => r(n) && e.add(r)),
        (Rt += e.size),
        (t = e));
    },
  };
}
function ap(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      L.catch(r);
    }
  });
}
function Ps() {}
var $m = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  x = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function pt(e, t) {
  if (x.arr(e)) {
    if (!x.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var F = (e, t) => e.forEach(t);
function at(e, t, n) {
  if (x.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Me = (e) => (x.und(e) ? [] : x.arr(e) ? e : [e]);
function Er(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), F(n, t);
  }
}
var pr = (e, ...t) => Er(e, (n) => n(...t)),
  Fu = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  Du,
  cp,
  Bt = null,
  fp = !1,
  $u = Ps,
  Um = (e) => {
    e.to && (cp = e.to),
      e.now && (L.now = e.now),
      e.colors !== void 0 && (Bt = e.colors),
      e.skipAnimation != null && (fp = e.skipAnimation),
      e.createStringInterpolator && (Du = e.createStringInterpolator),
      e.requestAnimationFrame && L.use(e.requestAnimationFrame),
      e.batchedUpdates && (L.batchedUpdates = e.batchedUpdates),
      e.willAdvance && ($u = e.willAdvance),
      e.frameLoop && (L.frameLoop = e.frameLoop);
  },
  Cr = new Set(),
  $e = [],
  El = [],
  _o = 0,
  Ho = {
    get idle() {
      return !Cr.size && !$e.length;
    },
    start(e) {
      _o > e.priority ? (Cr.add(e), L.onStart(Vm)) : (dp(e), L(js));
    },
    advance: js,
    sort(e) {
      if (_o) L.onFrame(() => Ho.sort(e));
      else {
        const t = $e.indexOf(e);
        ~t && ($e.splice(t, 1), pp(e));
      }
    },
    clear() {
      ($e = []), Cr.clear();
    },
  };
function Vm() {
  Cr.forEach(dp), Cr.clear(), L(js);
}
function dp(e) {
  $e.includes(e) || pp(e);
}
function pp(e) {
  $e.splice(
    Wm($e, (t) => t.priority > e.priority),
    0,
    e
  );
}
function js(e) {
  const t = El;
  for (let n = 0; n < $e.length; n++) {
    const r = $e[n];
    (_o = r.priority), r.idle || ($u(r), r.advance(e), r.idle || t.push(r));
  }
  return (_o = 0), (El = $e), (El.length = 0), ($e = t), $e.length > 0;
}
function Wm(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var Bm = (e, t, n) => Math.min(Math.max(n, e), t),
  Qm = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  Ze = "[-+]?\\d*\\.?\\d+",
  xo = Ze + "%";
function Ko(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Hm = new RegExp("rgb" + Ko(Ze, Ze, Ze)),
  Km = new RegExp("rgba" + Ko(Ze, Ze, Ze, Ze)),
  Ym = new RegExp("hsl" + Ko(Ze, xo, xo)),
  Gm = new RegExp("hsla" + Ko(Ze, xo, xo, Ze)),
  Xm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  qm = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Zm = /^#([0-9a-fA-F]{6})$/,
  Jm = /^#([0-9a-fA-F]{8})$/;
function bm(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = Zm.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : Bt && Bt[e] !== void 0
    ? Bt[e]
    : (t = Hm.exec(e))
    ? ((vn(t[1]) << 24) | (vn(t[2]) << 16) | (vn(t[3]) << 8) | 255) >>> 0
    : (t = Km.exec(e))
    ? ((vn(t[1]) << 24) | (vn(t[2]) << 16) | (vn(t[3]) << 8) | oc(t[4])) >>> 0
    : (t = Xm.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = Jm.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = qm.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = Ym.exec(e))
    ? (rc(ic(t[1]), Pi(t[2]), Pi(t[3])) | 255) >>> 0
    : (t = Gm.exec(e))
    ? (rc(ic(t[1]), Pi(t[2]), Pi(t[3])) | oc(t[4])) >>> 0
    : null;
}
function Cl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function rc(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    o = Cl(i, r, e + 1 / 3),
    l = Cl(i, r, e),
    s = Cl(i, r, e - 1 / 3);
  return (
    (Math.round(o * 255) << 24) |
    (Math.round(l * 255) << 16) |
    (Math.round(s * 255) << 8)
  );
}
function vn(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function ic(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function oc(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Pi(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function lc(e) {
  let t = bm(e);
  if (t === null) return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    i = (t & 65280) >>> 8,
    o = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${o})`;
}
var Hr = (e, t, n) => {
  if (x.fun(e)) return e;
  if (x.arr(e)) return Hr({ range: e, output: t, extrapolate: n });
  if (x.str(e.output[0])) return Du(e);
  const r = e,
    i = r.output,
    o = r.range || [0, 1],
    l = r.extrapolateLeft || r.extrapolate || "extend",
    s = r.extrapolateRight || r.extrapolate || "extend",
    u = r.easing || ((a) => a);
  return (a) => {
    const m = t1(a, o);
    return e1(a, o[m], o[m + 1], i[m], i[m + 1], u, l, s, r.map);
  };
};
function e1(e, t, n, r, i, o, l, s, u) {
  let a = u ? u(e) : e;
  if (a < t) {
    if (l === "identity") return a;
    l === "clamp" && (a = t);
  }
  if (a > n) {
    if (s === "identity") return a;
    s === "clamp" && (a = n);
  }
  return r === i
    ? r
    : t === n
    ? e <= t
      ? r
      : i
    : (t === -1 / 0
        ? (a = -a)
        : n === 1 / 0
        ? (a = a - t)
        : (a = (a - t) / (n - t)),
      (a = o(a)),
      r === -1 / 0
        ? (a = -a)
        : i === 1 / 0
        ? (a = a + r)
        : (a = a * (i - r) + r),
      a);
}
function t1(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var n1 = (e, t = "end") => (n) => {
    n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
    const r = n * e,
      i = t === "end" ? Math.floor(r) : Math.ceil(r);
    return Bm(0, 1, i / e);
  },
  Eo = 1.70158,
  ji = Eo * 1.525,
  sc = Eo + 1,
  uc = (2 * Math.PI) / 3,
  ac = (2 * Math.PI) / 4.5,
  Ni = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  r1 = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => sc * e * e * e - Eo * e * e,
    easeOutBack: (e) => 1 + sc * Math.pow(e - 1, 3) + Eo * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((ji + 1) * 2 * e - ji)) / 2
        : (Math.pow(2 * e - 2, 2) * ((ji + 1) * (e * 2 - 2) + ji) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * uc),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * uc) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ac)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ac)) / 2 +
          1,
    easeInBounce: (e) => 1 - Ni(1 - e),
    easeOutBounce: Ni,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - Ni(1 - 2 * e)) / 2 : (1 + Ni(2 * e - 1)) / 2,
    steps: n1,
  },
  Kr = Symbol.for("FluidValue.get"),
  Qn = Symbol.for("FluidValue.observers"),
  De = (e) => !!(e && e[Kr]),
  xe = (e) => (e && e[Kr] ? e[Kr]() : e),
  cc = (e) => e[Qn] || null;
function i1(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Yr(e, t) {
  const n = e[Qn];
  n &&
    n.forEach((r) => {
      i1(r, t);
    });
}
var hp = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error("Unknown getter");
      o1(this, e);
    }
  },
  o1 = (e, t) => mp(e, Kr, t);
function Gn(e, t) {
  if (e[Kr]) {
    let n = e[Qn];
    n || mp(e, Qn, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Gr(e, t) {
  const n = e[Qn];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : (e[Qn] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var mp = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Hi = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  l1 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  fc = new RegExp(`(${Hi.source})(%|[a-z]+)`, "i"),
  s1 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Yo = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  vp = (e) => {
    const [t, n] = u1(e);
    if (!t || Fu()) return e;
    const r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    if (r) return r.trim();
    if (n && n.startsWith("--")) {
      const i = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(n);
      return i || e;
    } else {
      if (n && Yo.test(n)) return vp(n);
      if (n) return n;
    }
    return e;
  },
  u1 = (e) => {
    const t = Yo.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  },
  Pl,
  a1 = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  gp = (e) => {
    Pl ||
      (Pl = Bt
        ? new RegExp(`(${Object.keys(Bt).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    const t = e.output.map((o) =>
        xe(o).replace(Yo, vp).replace(l1, lc).replace(Pl, lc)
      ),
      n = t.map((o) => o.match(Hi).map(Number)),
      i = n[0]
        .map((o, l) =>
          n.map((s) => {
            if (!(l in s))
              throw Error('The arity of each "output" value must be equal');
            return s[l];
          })
        )
        .map((o) => Hr({ ...e, output: o }));
    return (o) => {
      var u;
      const l =
        !fc.test(t[0]) &&
        ((u = t.find((a) => fc.test(a))) == null ? void 0 : u.replace(Hi, ""));
      let s = 0;
      return t[0].replace(Hi, () => `${i[s++](o)}${l || ""}`).replace(s1, a1);
    };
  },
  Uu = "react-spring: ",
  yp = (e) => {
    const t = e;
    let n = !1;
    if (typeof t != "function")
      throw new TypeError(`${Uu}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  c1 = yp(console.warn);
function f1() {
  c1(`${Uu}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var d1 = yp(console.warn);
function p1() {
  d1(
    `${Uu}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Go(e) {
  return (
    x.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!Fu() && Yo.test(e)) || e in (Bt || {}))
  );
}
var Vu = Fu() ? M.useEffect : M.useLayoutEffect,
  h1 = () => {
    const e = M.useRef(!1);
    return (
      Vu(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function wp() {
  const e = M.useState()[1],
    t = h1();
  return () => {
    t.current && e(Math.random());
  };
}
function m1(e, t) {
  const [n] = M.useState(() => ({ inputs: t, result: e() })),
    r = M.useRef(),
    i = r.current;
  let o = i;
  return (
    o
      ? (t && o.inputs && v1(t, o.inputs)) || (o = { inputs: t, result: e() })
      : (o = n),
    M.useEffect(() => {
      (r.current = o), i == n && (n.inputs = n.result = void 0);
    }, [o]),
    o.result
  );
}
function v1(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var Sp = (e) => M.useEffect(e, g1),
  g1 = [];
function dc(e) {
  const t = M.useRef();
  return (
    M.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var Xr = Symbol.for("Animated:node"),
  y1 = (e) => !!e && e[Xr] === e,
  ot = (e) => e && e[Xr],
  Wu = (e, t) => $m(e, Xr, t),
  Xo = (e) => e && e[Xr] && e[Xr].getPayload(),
  kp = class {
    constructor() {
      Wu(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  si = class extends kp {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        x.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new si(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        x.num(e) &&
          ((this.lastPosition = e),
          t &&
            ((e = Math.round(e / t) * t),
            this.done && (this.lastPosition = e))),
        this._value === e ? !1 : ((this._value = e), !0)
      );
    }
    reset() {
      const { done: e } = this;
      (this.done = !1),
        x.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  qr = class extends si {
    constructor(e) {
      super(0),
        (this._string = null),
        (this._toString = Hr({ output: [e, e] }));
    }
    static create(e) {
      return new qr(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (x.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = Hr({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  Co = { dependencies: null },
  qo = class extends kp {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const t = {};
      return (
        at(this.source, (n, r) => {
          y1(n)
            ? (t[r] = n.getValue(e))
            : De(n)
            ? (t[r] = xe(n))
            : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && F(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        const t = new Set();
        return at(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      Co.dependencies && De(e) && Co.dependencies.add(e);
      const t = Xo(e);
      t && F(t, (n) => this.add(n));
    }
  },
  _p = class extends qo {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new _p(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length
        ? t.map((n, r) => n.setValue(e[r])).some(Boolean)
        : (super.setValue(e.map(w1)), !0);
    }
  };
function w1(e) {
  return (Go(e) ? qr : si).create(e);
}
function Ns(e) {
  const t = ot(e);
  return t ? t.constructor : x.arr(e) ? _p : Go(e) ? qr : si;
}
var pc = (e, t) => {
    const n = !x.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return M.forwardRef((r, i) => {
      const o = M.useRef(null),
        l =
          n &&
          M.useCallback(
            (g) => {
              o.current = _1(i, g);
            },
            [i]
          ),
        [s, u] = k1(r, t),
        a = wp(),
        m = () => {
          const g = o.current;
          if (n && !g) return;
          (g ? t.applyAnimatedValues(g, s.getValue(!0)) : !1) === !1 && a();
        },
        d = new S1(m, u),
        h = M.useRef();
      Vu(
        () => (
          (h.current = d),
          F(u, (g) => Gn(g, d)),
          () => {
            h.current &&
              (F(h.current.deps, (g) => Gr(g, h.current)),
              L.cancel(h.current.update));
          }
        )
      ),
        M.useEffect(m, []),
        Sp(() => () => {
          const g = h.current;
          F(g.deps, (y) => Gr(y, g));
        });
      const w = t.getComponentProps(s.getValue());
      return M.createElement(e, { ...w, ref: l });
    });
  },
  S1 = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && L.write(this.update);
    }
  };
function k1(e, t) {
  const n = new Set();
  return (
    (Co.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new qo(e)),
    (Co.dependencies = null),
    [e, n]
  );
}
function _1(e, t) {
  return e && (x.fun(e) ? e(t) : (e.current = t)), t;
}
var hc = Symbol.for("AnimatedComponent"),
  x1 = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (i) => new qo(i),
      getComponentProps: r = (i) => i,
    } = {}
  ) => {
    const i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      o = (l) => {
        const s = mc(l) || "Anonymous";
        return (
          x.str(l)
            ? (l = o[l] || (o[l] = pc(l, i)))
            : (l = l[hc] || (l[hc] = pc(l, i))),
          (l.displayName = `Animated(${s})`),
          l
        );
      };
    return (
      at(e, (l, s) => {
        x.arr(e) && (s = mc(l)), (o[s] = o(l));
      }),
      { animated: o }
    );
  },
  mc = (e) =>
    x.str(e)
      ? e
      : e && x.str(e.displayName)
      ? e.displayName
      : (x.fun(e) && e.name) || null;
function Jt(e, ...t) {
  return x.fun(e) ? e(...t) : e;
}
var Pr = (e, t) =>
    e === !0 || !!(t && e && (x.fun(e) ? e(t) : Me(e).includes(t))),
  xp = (e, t) => (x.obj(e) ? t && e[t] : e),
  Ep = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  E1 = (e) => e,
  Bu = (e, t = E1) => {
    let n = C1;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    const r = {};
    for (const i of n) {
      const o = t(e[i], i);
      x.und(o) || (r[i] = o);
    }
    return r;
  },
  C1 = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  P1 = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function j1(e) {
  const t = {};
  let n = 0;
  if (
    (at(e, (r, i) => {
      P1[i] || ((t[i] = r), n++);
    }),
    n)
  )
    return t;
}
function Cp(e) {
  const t = j1(e);
  if (t) {
    const n = { to: t };
    return at(e, (r, i) => i in t || (n[i] = r)), n;
  }
  return { ...e };
}
function Zr(e) {
  return (
    (e = xe(e)),
    x.arr(e)
      ? e.map(Zr)
      : Go(e)
      ? tt.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function N1(e) {
  for (const t in e) return !0;
  return !1;
}
function Ts(e) {
  return x.fun(e) || (x.arr(e) && x.obj(e[0]));
}
function T1(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function I1(e, t) {
  var n;
  t &&
    e.ref !== t &&
    ((n = e.ref) == null || n.delete(e), t.add(e), (e.ref = t));
}
var M1 = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  Is = { ...M1.default, mass: 1, damping: 1, easing: r1.linear, clamp: !1 },
  O1 = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, Is);
    }
  };
function R1(e, t, n) {
  n && ((n = { ...n }), vc(n, t), (t = { ...n, ...t })),
    vc(e, t),
    Object.assign(e, t);
  for (const l in Is) e[l] == null && (e[l] = Is[l]);
  let { frequency: r, damping: i } = e;
  const { mass: o } = e;
  return (
    x.und(r) ||
      (r < 0.01 && (r = 0.01),
      i < 0 && (i = 0),
      (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
      (e.friction = (4 * Math.PI * i * o) / r)),
    e
  );
}
function vc(e, t) {
  if (!x.und(t.decay)) e.duration = void 0;
  else {
    const n = !x.und(t.tension) || !x.und(t.friction);
    (n || !x.und(t.frequency) || !x.und(t.damping) || !x.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var gc = [],
  L1 = class {
    constructor() {
      (this.changed = !1),
        (this.values = gc),
        (this.toValues = null),
        (this.fromValues = gc),
        (this.config = new O1()),
        (this.immediate = !1);
    }
  };
function Pp(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
  return new Promise((l, s) => {
    let u,
      a,
      m = Pr(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (m) w();
    else {
      x.und(n.pause) || (i.paused = Pr(n.pause, t));
      let g = r == null ? void 0 : r.pause;
      g !== !0 && (g = i.paused || Pr(g, t)),
        (u = Jt(n.delay || 0, t)),
        g ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h());
    }
    function d() {
      i.resumeQueue.add(h),
        i.timeouts.delete(a),
        a.cancel(),
        (u = a.time - L.now());
    }
    function h() {
      u > 0 && !tt.skipAnimation
        ? ((i.delayed = !0),
          (a = L.setTimeout(w, u)),
          i.pauseQueue.add(d),
          i.timeouts.add(a))
        : w();
    }
    function w() {
      i.delayed && (i.delayed = !1),
        i.pauseQueue.delete(d),
        i.timeouts.delete(a),
        e <= (i.cancelId || 0) && (m = !0);
      try {
        o.start({ ...n, callId: e, cancel: m }, l);
      } catch (g) {
        s(g);
      }
    }
  });
}
var Qu = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((n) => n.cancelled)
      ? An(e.get())
      : t.every((n) => n.noop)
      ? jp(e.get())
      : qe(
          e.get(),
          t.every((n) => n.finished)
        ),
  jp = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  qe = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  An = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Np(e, t, n, r) {
  const { callId: i, parentId: o, onRest: l } = t,
    { asyncTo: s, promise: u } = n;
  return !o && e === s && !t.reset
    ? u
    : (n.promise = (async () => {
        (n.asyncId = i), (n.asyncTo = e);
        const a = Bu(t, (N, f) => (f === "onRest" ? void 0 : N));
        let m, d;
        const h = new Promise((N, f) => ((m = N), (d = f))),
          w = (N) => {
            const f =
              (i <= (n.cancelId || 0) && An(r)) ||
              (i !== n.asyncId && qe(r, !1));
            if (f) throw ((N.result = f), d(N), N);
          },
          g = (N, f) => {
            const c = new yc(),
              p = new wc();
            return (async () => {
              if (tt.skipAnimation)
                throw (Jr(n), (p.result = qe(r, !1)), d(p), p);
              w(c);
              const S = x.obj(N) ? { ...N } : { ...f, to: N };
              (S.parentId = i),
                at(a, (j, E) => {
                  x.und(S[E]) && (S[E] = j);
                });
              const _ = await r.start(S);
              return (
                w(c),
                n.paused &&
                  (await new Promise((j) => {
                    n.resumeQueue.add(j);
                  })),
                _
              );
            })();
          };
        let y;
        if (tt.skipAnimation) return Jr(n), qe(r, !1);
        try {
          let N;
          x.arr(e)
            ? (N = (async (f) => {
                for (const c of f) await g(c);
              })(e))
            : (N = Promise.resolve(e(g, r.stop.bind(r)))),
            await Promise.all([N.then(m), h]),
            (y = qe(r.get(), !0, !1));
        } catch (N) {
          if (N instanceof yc) y = N.result;
          else if (N instanceof wc) y = N.result;
          else throw N;
        } finally {
          i == n.asyncId &&
            ((n.asyncId = o),
            (n.asyncTo = o ? s : void 0),
            (n.promise = o ? u : void 0));
        }
        return (
          x.fun(l) &&
            L.batchedUpdates(() => {
              l(y, r, r.item);
            }),
          y
        );
      })());
}
function Jr(e, t) {
  Er(e.timeouts, (n) => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var yc = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
    }
  },
  wc = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
    }
  },
  Ms = (e) => e instanceof Hu,
  z1 = 1,
  Hu = class extends hp {
    constructor() {
      super(...arguments), (this.id = z1++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      const e = ot(this);
      return e && e.getValue();
    }
    to(...e) {
      return tt.to(this, e);
    }
    interpolate(...e) {
      return f1(), tt.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      Yr(this, { type: "change", parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || Ho.sort(this),
        Yr(this, { type: "priority", parent: this, priority: e });
    }
  },
  cn = Symbol.for("SpringPhase"),
  Tp = 1,
  Os = 2,
  Rs = 4,
  jl = (e) => (e[cn] & Tp) > 0,
  Et = (e) => (e[cn] & Os) > 0,
  or = (e) => (e[cn] & Rs) > 0,
  Sc = (e, t) => (t ? (e[cn] |= Os | Tp) : (e[cn] &= ~Os)),
  kc = (e, t) => (t ? (e[cn] |= Rs) : (e[cn] &= ~Rs)),
  A1 = class extends Hu {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new L1()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !x.und(e) || !x.und(t))
      ) {
        const n = x.obj(e) ? { ...e } : { ...t, from: e };
        x.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(Et(this) || this._state.asyncTo) || or(this);
    }
    get goal() {
      return xe(this.animation.to);
    }
    get velocity() {
      const e = ot(this);
      return e instanceof si
        ? e.lastVelocity || 0
        : e.getPayload().map((t) => t.lastVelocity || 0);
    }
    get hasAnimated() {
      return jl(this);
    }
    get isAnimating() {
      return Et(this);
    }
    get isPaused() {
      return or(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let t = !0,
        n = !1;
      const r = this.animation;
      let { toValues: i } = r;
      const { config: o } = r,
        l = Xo(r.to);
      !l && De(r.to) && (i = Me(xe(r.to))),
        r.values.forEach((a, m) => {
          if (a.done) return;
          const d = a.constructor == qr ? 1 : l ? l[m].lastPosition : i[m];
          let h = r.immediate,
            w = d;
          if (!h) {
            if (((w = a.lastPosition), o.tension <= 0)) {
              a.done = !0;
              return;
            }
            let g = (a.elapsedTime += e);
            const y = r.fromValues[m],
              N =
                a.v0 != null
                  ? a.v0
                  : (a.v0 = x.arr(o.velocity) ? o.velocity[m] : o.velocity);
            let f;
            const c =
              o.precision ||
              (y == d ? 0.005 : Math.min(1, Math.abs(d - y) * 0.001));
            if (x.und(o.duration))
              if (o.decay) {
                const p = o.decay === !0 ? 0.998 : o.decay,
                  S = Math.exp(-(1 - p) * g);
                (w = y + (N / (1 - p)) * (1 - S)),
                  (h = Math.abs(a.lastPosition - w) <= c),
                  (f = N * S);
              } else {
                f = a.lastVelocity == null ? N : a.lastVelocity;
                const p = o.restVelocity || c / 10,
                  S = o.clamp ? 0 : o.bounce,
                  _ = !x.und(S),
                  j = y == d ? a.v0 > 0 : y < d;
                let E,
                  I = !1;
                const C = 1,
                  O = Math.ceil(e / C);
                for (
                  let D = 0;
                  D < O &&
                  ((E = Math.abs(f) > p),
                  !(!E && ((h = Math.abs(d - w) <= c), h)));
                  ++D
                ) {
                  _ &&
                    ((I = w == d || w > d == j), I && ((f = -f * S), (w = d)));
                  const b = -o.tension * 1e-6 * (w - d),
                    V = -o.friction * 0.001 * f,
                    pn = (b + V) / o.mass;
                  (f = f + pn * C), (w = w + f * C);
                }
              }
            else {
              let p = 1;
              o.duration > 0 &&
                (this._memoizedDuration !== o.duration &&
                  ((this._memoizedDuration = o.duration),
                  a.durationProgress > 0 &&
                    ((a.elapsedTime = o.duration * a.durationProgress),
                    (g = a.elapsedTime += e))),
                (p = (o.progress || 0) + g / this._memoizedDuration),
                (p = p > 1 ? 1 : p < 0 ? 0 : p),
                (a.durationProgress = p)),
                (w = y + o.easing(p) * (d - y)),
                (f = (w - a.lastPosition) / e),
                (h = p == 1);
            }
            (a.lastVelocity = f),
              Number.isNaN(w) &&
                (console.warn("Got NaN while animating:", this), (h = !0));
          }
          l && !l[m].done && (h = !1),
            h ? (a.done = !0) : (t = !1),
            a.setValue(w, o.round) && (n = !0);
        });
      const s = ot(this),
        u = s.getValue();
      if (t) {
        const a = xe(r.to);
        (u !== a || n) && !o.decay
          ? (s.setValue(a), this._onChange(a))
          : n && o.decay && this._onChange(u),
          this._stop();
      } else n && this._onChange(u);
    }
    set(e) {
      return (
        L.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (Et(this)) {
        const { to: e, config: t } = this.animation;
        L.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this;
    }
    start(e, t) {
      let n;
      return (
        x.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [x.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map((r) => this._update(r))).then((r) => Qu(this, r))
      );
    }
    stop(e) {
      const { to: t } = this.animation;
      return (
        this._focus(this.get()),
        Jr(this._state, e && this._lastCallId),
        L.batchedUpdates(() => this._stop(t, e)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == "change"
        ? this._start()
        : e.type == "priority" && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      const t = this.key || "";
      let { to: n, from: r } = e;
      (n = x.obj(n) ? n[t] : n),
        (n == null || Ts(n)) && (n = void 0),
        (r = x.obj(r) ? r[t] : r),
        r == null && (r = void 0);
      const i = { to: n, from: r };
      return (
        jl(this) ||
          (e.reverse && ([n, r] = [r, n]),
          (r = xe(r)),
          x.und(r) ? ot(this) || this._set(n) : this._set(r)),
        i
      );
    }
    _update({ ...e }, t) {
      const { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          Bu(e, (l, s) => (/^on/.test(s) ? xp(l, n) : l))
        ),
        xc(this, e, "onProps"),
        sr(this, "onProps", e, this);
      const i = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      const o = this._state;
      return Pp(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: o,
        actions: {
          pause: () => {
            or(this) ||
              (kc(this, !0),
              pr(o.pauseQueue),
              sr(this, "onPause", qe(this, lr(this, this.animation.to)), this));
          },
          resume: () => {
            or(this) &&
              (kc(this, !1),
              Et(this) && this._resume(),
              pr(o.resumeQueue),
              sr(
                this,
                "onResume",
                qe(this, lr(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, i),
        },
      }).then((l) => {
        if (e.loop && l.finished && !(t && l.noop)) {
          const s = Ip(e);
          if (s) return this._update(s, !0);
        }
        return l;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(An(this));
      const r = !x.und(e.to),
        i = !x.und(e.from);
      if (r || i)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(An(this));
      const { key: o, defaultProps: l, animation: s } = this,
        { to: u, from: a } = s;
      let { to: m = u, from: d = a } = e;
      i && !r && (!t.default || x.und(m)) && (m = d),
        t.reverse && ([m, d] = [d, m]);
      const h = !pt(d, a);
      h && (s.from = d), (d = xe(d));
      const w = !pt(m, u);
      w && this._focus(m);
      const g = Ts(t.to),
        { config: y } = s,
        { decay: N, velocity: f } = y;
      (r || i) && (y.velocity = 0),
        t.config &&
          !g &&
          R1(
            y,
            Jt(t.config, o),
            t.config !== l.config ? Jt(l.config, o) : void 0
          );
      let c = ot(this);
      if (!c || x.und(m)) return n(qe(this, !0));
      const p = x.und(t.reset) ? i && !t.default : !x.und(d) && Pr(t.reset, o),
        S = p ? d : this.get(),
        _ = Zr(m),
        j = x.num(_) || x.arr(_) || Go(_),
        E = !g && (!j || Pr(l.immediate || t.immediate, o));
      if (w) {
        const D = Ns(m);
        if (D !== c.constructor)
          if (E) c = this._set(_);
          else
            throw Error(
              `Cannot animate between ${c.constructor.name} and ${D.name}, as the "to" prop suggests`
            );
      }
      const I = c.constructor;
      let C = De(m),
        O = !1;
      if (!C) {
        const D = p || (!jl(this) && h);
        (w || D) && ((O = pt(Zr(S), _)), (C = !O)),
          ((!pt(s.immediate, E) && !E) ||
            !pt(y.decay, N) ||
            !pt(y.velocity, f)) &&
            (C = !0);
      }
      if (
        (O && Et(this) && (s.changed && !p ? (C = !0) : C || this._stop(u)),
        !g &&
          ((C || De(u)) &&
            ((s.values = c.getPayload()),
            (s.toValues = De(m) ? null : I == qr ? [1] : Me(_))),
          s.immediate != E && ((s.immediate = E), !E && !p && this._set(u)),
          C))
      ) {
        const { onRest: D } = s;
        F(D1, (V) => xc(this, t, V));
        const b = qe(this, lr(this, u));
        pr(this._pendingCalls, b),
          this._pendingCalls.add(n),
          s.changed &&
            L.batchedUpdates(() => {
              var V;
              (s.changed = !p),
                D == null || D(b, this),
                p
                  ? Jt(l.onRest, b)
                  : (V = s.onStart) == null || V.call(s, b, this);
            });
      }
      p && this._set(S),
        g
          ? n(Np(t.to, t, this._state, this))
          : C
          ? this._start()
          : Et(this) && !w
          ? this._pendingCalls.add(n)
          : n(jp(S));
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to &&
        (cc(this) && this._detach(), (t.to = e), cc(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: t } = this.animation;
      De(t) && (Gn(t, this), Ms(t) && (e = t.priority + 1)),
        (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      De(e) && Gr(e, this);
    }
    _set(e, t = !0) {
      const n = xe(e);
      if (!x.und(n)) {
        const r = ot(this);
        if (!r || !pt(n, r.getValue())) {
          const i = Ns(n);
          !r || r.constructor != i ? Wu(this, i.create(n)) : r.setValue(n),
            r &&
              L.batchedUpdates(() => {
                this._onChange(n, t);
              });
        }
      }
      return ot(this);
    }
    _onStart() {
      const e = this.animation;
      e.changed ||
        ((e.changed = !0), sr(this, "onStart", qe(this, lr(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), Jt(this.animation.onChange, e, this)),
        Jt(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      const e = this.animation;
      ot(this).reset(xe(e.to)),
        e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)),
        Et(this) || (Sc(this, !0), or(this) || this._resume());
    }
    _resume() {
      tt.skipAnimation ? this.finish() : Ho.start(this);
    }
    _stop(e, t) {
      if (Et(this)) {
        Sc(this, !1);
        const n = this.animation;
        F(n.values, (i) => {
          i.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          Yr(this, { type: "idle", parent: this });
        const r = t ? An(this.get()) : qe(this.get(), lr(this, e ?? n.to));
        pr(this._pendingCalls, r),
          n.changed && ((n.changed = !1), sr(this, "onRest", r, this));
      }
    }
  };
function lr(e, t) {
  const n = Zr(t),
    r = Zr(e.get());
  return pt(r, n);
}
function Ip(e, t = e.loop, n = e.to) {
  const r = Jt(t);
  if (r) {
    const i = r !== !0 && Cp(r),
      o = (i || e).reverse,
      l = !i || i.reset;
    return br({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !o || Ts(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l,
      ...i,
    });
  }
}
function br(e) {
  const { to: t, from: n } = (e = Cp(e)),
    r = new Set();
  return (
    x.obj(t) && _c(t, r),
    x.obj(n) && _c(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function F1(e) {
  const t = br(e);
  return x.und(t.default) && (t.default = Bu(t)), t;
}
function _c(e, t) {
  at(e, (n, r) => n != null && t.add(r));
}
var D1 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function xc(e, t, n) {
  e.animation[n] = t[n] !== Ep(t, n) ? xp(t[n], e.key) : void 0;
}
function sr(e, t, ...n) {
  var r, i, o, l;
  (i = (r = e.animation)[t]) == null || i.call(r, ...n),
    (l = (o = e.defaultProps)[t]) == null || l.call(o, ...n);
}
var $1 = ["onStart", "onChange", "onRest"],
  U1 = 1,
  V1 = class {
    constructor(e, t) {
      (this.id = U1++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      const e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (const t in e) {
        const n = e[t];
        x.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(br(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = Me(e).map(br)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (zp(this, t), Ls(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        const n = this.springs;
        F(Me(t), (r) => n[r].stop(!!e));
      } else Jr(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (x.und(e)) this.start({ pause: !0 });
      else {
        const t = this.springs;
        F(Me(e), (n) => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (x.und(e)) this.start({ pause: !1 });
      else {
        const t = this.springs;
        F(Me(e), (n) => t[n].resume());
      }
      return this;
    }
    each(e) {
      at(this.springs, e);
    }
    _onFrame() {
      const { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        i = this._changed.size > 0;
      ((r && !this._started) || (i && !this._started)) &&
        ((this._started = !0),
        Er(e, ([s, u]) => {
          (u.value = this.get()), s(u, this, this._item);
        }));
      const o = !r && this._started,
        l = i || (o && n.size) ? this.get() : null;
      i &&
        t.size &&
        Er(t, ([s, u]) => {
          (u.value = l), s(u, this, this._item);
        }),
        o &&
          ((this._started = !1),
          Er(n, ([s, u]) => {
            (u.value = l), s(u, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      L.onFrame(this._onFrame);
    }
  };
function Ls(e, t) {
  return Promise.all(t.map((n) => Mp(e, n))).then((n) => Qu(e, n));
}
async function Mp(e, t, n) {
  const { keys: r, to: i, from: o, loop: l, onRest: s, onResolve: u } = t,
    a = x.obj(t.default) && t.default;
  l && (t.loop = !1), i === !1 && (t.to = null), o === !1 && (t.from = null);
  const m = x.arr(i) || x.fun(i) ? i : void 0;
  m
    ? ((t.to = void 0), (t.onRest = void 0), a && (a.onRest = void 0))
    : F($1, (y) => {
        const N = t[y];
        if (x.fun(N)) {
          const f = e._events[y];
          (t[y] = ({ finished: c, cancelled: p }) => {
            const S = f.get(N);
            S
              ? (c || (S.finished = !1), p && (S.cancelled = !0))
              : f.set(N, {
                  value: null,
                  finished: c || !1,
                  cancelled: p || !1,
                });
          }),
            a && (a[y] = t[y]);
        }
      });
  const d = e._state;
  t.pause === !d.paused
    ? ((d.paused = t.pause), pr(t.pause ? d.pauseQueue : d.resumeQueue))
    : d.paused && (t.pause = !0);
  const h = (r || Object.keys(e.springs)).map((y) => e.springs[y].start(t)),
    w = t.cancel === !0 || Ep(t, "cancel") === !0;
  (m || (w && d.asyncId)) &&
    h.push(
      Pp(++e._lastAsyncId, {
        props: t,
        state: d,
        actions: {
          pause: Ps,
          resume: Ps,
          start(y, N) {
            w
              ? (Jr(d, e._lastAsyncId), N(An(e)))
              : ((y.onRest = s), N(Np(m, y, d, e)));
          },
        },
      })
    ),
    d.paused &&
      (await new Promise((y) => {
        d.resumeQueue.add(y);
      }));
  const g = Qu(e, await Promise.all(h));
  if (l && g.finished && !(n && g.noop)) {
    const y = Ip(t, l, i);
    if (y) return zp(e, [y]), Mp(e, y, !0);
  }
  return u && L.batchedUpdates(() => u(g, e, e.item)), g;
}
function Ec(e, t) {
  const n = { ...e.springs };
  return (
    t &&
      F(Me(t), (r) => {
        x.und(r.keys) && (r = br(r)),
          x.obj(r.to) || (r = { ...r, to: void 0 }),
          Lp(n, r, (i) => Rp(i));
      }),
    Op(e, n),
    n
  );
}
function Op(e, t) {
  at(t, (n, r) => {
    e.springs[r] || ((e.springs[r] = n), Gn(n, e));
  });
}
function Rp(e, t) {
  const n = new A1();
  return (n.key = e), t && Gn(n, t), n;
}
function Lp(e, t, n) {
  t.keys &&
    F(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function zp(e, t) {
  F(t, (n) => {
    Lp(e.springs, n, (r) => Rp(r, e));
  });
}
var Zo = ({ children: e, ...t }) => {
    const n = M.useContext(Po),
      r = t.pause || !!n.pause,
      i = t.immediate || !!n.immediate;
    t = m1(() => ({ pause: r, immediate: i }), [r, i]);
    const { Provider: o } = Po;
    return M.createElement(o, { value: t }, e);
  },
  Po = W1(Zo, {});
Zo.Provider = Po.Provider;
Zo.Consumer = Po.Consumer;
function W1(e, t) {
  return (
    Object.assign(e, M.createContext(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var B1 = () => {
  const e = [],
    t = function (r) {
      p1();
      const i = [];
      return (
        F(e, (o, l) => {
          if (x.und(r)) i.push(o.start());
          else {
            const s = n(r, o, l);
            s && i.push(o.start(s));
          }
        }),
        i
      );
    };
  (t.current = e),
    (t.add = function (r) {
      e.includes(r) || e.push(r);
    }),
    (t.delete = function (r) {
      const i = e.indexOf(r);
      ~i && e.splice(i, 1);
    }),
    (t.pause = function () {
      return F(e, (r) => r.pause(...arguments)), this;
    }),
    (t.resume = function () {
      return F(e, (r) => r.resume(...arguments)), this;
    }),
    (t.set = function (r) {
      F(e, (i, o) => {
        const l = x.fun(r) ? r(o, i) : r;
        l && i.set(l);
      });
    }),
    (t.start = function (r) {
      const i = [];
      return (
        F(e, (o, l) => {
          if (x.und(r)) i.push(o.start());
          else {
            const s = this._getProps(r, o, l);
            s && i.push(o.start(s));
          }
        }),
        i
      );
    }),
    (t.stop = function () {
      return F(e, (r) => r.stop(...arguments)), this;
    }),
    (t.update = function (r) {
      return F(e, (i, o) => i.update(this._getProps(r, i, o))), this;
    });
  const n = function (r, i, o) {
    return x.fun(r) ? r(o, i) : r;
  };
  return (t._getProps = n), t;
};
function Q1(e, t, n) {
  const r = x.fun(t) && t;
  r && !n && (n = []);
  const i = M.useMemo(() => (r || arguments.length == 3 ? B1() : void 0), []),
    o = M.useRef(0),
    l = wp(),
    s = M.useMemo(
      () => ({
        ctrls: [],
        queue: [],
        flush(f, c) {
          const p = Ec(f, c);
          return o.current > 0 &&
            !s.queue.length &&
            !Object.keys(p).some((_) => !f.springs[_])
            ? Ls(f, c)
            : new Promise((_) => {
                Op(f, p),
                  s.queue.push(() => {
                    _(Ls(f, c));
                  }),
                  l();
              });
        },
      }),
      []
    ),
    u = M.useRef([...s.ctrls]),
    a = [],
    m = dc(e) || 0;
  M.useMemo(() => {
    F(u.current.slice(e, m), (f) => {
      T1(f, i), f.stop(!0);
    }),
      (u.current.length = e),
      d(m, e);
  }, [e]),
    M.useMemo(() => {
      d(0, Math.min(m, e));
    }, n);
  function d(f, c) {
    for (let p = f; p < c; p++) {
      const S = u.current[p] || (u.current[p] = new V1(null, s.flush)),
        _ = r ? r(p, S) : t[p];
      _ && (a[p] = F1(_));
    }
  }
  const h = u.current.map((f, c) => Ec(f, a[c])),
    w = M.useContext(Zo),
    g = dc(w),
    y = w !== g && N1(w);
  Vu(() => {
    o.current++, (s.ctrls = u.current);
    const { queue: f } = s;
    f.length && ((s.queue = []), F(f, (c) => c())),
      F(u.current, (c, p) => {
        i == null || i.add(c), y && c.start({ default: w });
        const S = a[p];
        S && (I1(c, S.ref), c.ref ? c.queue.push(S) : c.start(S));
      });
  }),
    Sp(() => () => {
      F(s.ctrls, (f) => f.stop(!0));
    });
  const N = h.map((f) => ({ ...f }));
  return i ? [N, i] : N;
}
function H1(e, t) {
  const n = x.fun(e),
    [[r], i] = Q1(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, i] : r;
}
var K1 = class extends Hu {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = Hr(...t));
    const n = this._get(),
      r = Ns(n);
    Wu(this, r.create(n));
  }
  advance(e) {
    const t = this._get(),
      n = this.get();
    pt(t, n) || (ot(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && Cc(this._active) && Nl(this);
  }
  _get() {
    const e = x.arr(this.source) ? this.source.map(xe) : Me(xe(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !Cc(this._active) &&
      ((this.idle = !1),
      F(Xo(this), (e) => {
        e.done = !1;
      }),
      tt.skipAnimation
        ? (L.batchedUpdates(() => this.advance()), Nl(this))
        : Ho.start(this));
  }
  _attach() {
    let e = 1;
    F(Me(this.source), (t) => {
      De(t) && Gn(t, this),
        Ms(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    F(Me(this.source), (e) => {
      De(e) && Gr(e, this);
    }),
      this._active.clear(),
      Nl(this);
  }
  eventObserved(e) {
    e.type == "change"
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == "idle"
      ? this._active.delete(e.parent)
      : e.type == "priority" &&
        (this.priority = Me(this.source).reduce(
          (t, n) => Math.max(t, (Ms(n) ? n.priority : 0) + 1),
          0
        ));
  }
};
function Y1(e) {
  return e.idle !== !1;
}
function Cc(e) {
  return !e.size || Array.from(e).every(Y1);
}
function Nl(e) {
  e.idle ||
    ((e.idle = !0),
    F(Xo(e), (t) => {
      t.done = !0;
    }),
    Yr(e, { type: "idle", parent: e }));
}
tt.assign({ createStringInterpolator: gp, to: (e, t) => new K1(e, t) });
var Ap = /^--/;
function G1(e, t) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : typeof t == "number" &&
      t !== 0 &&
      !Ap.test(e) &&
      !(jr.hasOwnProperty(e) && jr[e])
    ? t + "px"
    : ("" + t).trim();
}
var Pc = {};
function X1(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const n =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      style: r,
      children: i,
      scrollTop: o,
      scrollLeft: l,
      viewBox: s,
      ...u
    } = t,
    a = Object.values(u),
    m = Object.keys(u).map((d) =>
      n || e.hasAttribute(d)
        ? d
        : Pc[d] || (Pc[d] = d.replace(/([A-Z])/g, (h) => "-" + h.toLowerCase()))
    );
  i !== void 0 && (e.textContent = i);
  for (const d in r)
    if (r.hasOwnProperty(d)) {
      const h = G1(d, r[d]);
      Ap.test(d) ? e.style.setProperty(d, h) : (e.style[d] = h);
    }
  m.forEach((d, h) => {
    e.setAttribute(d, a[h]);
  }),
    o !== void 0 && (e.scrollTop = o),
    l !== void 0 && (e.scrollLeft = l),
    s !== void 0 && e.setAttribute("viewBox", s);
}
var jr = {
    animationIterationCount: !0,
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
  q1 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  Z1 = ["Webkit", "Ms", "Moz", "O"];
jr = Object.keys(jr).reduce(
  (e, t) => (Z1.forEach((n) => (e[q1(n, t)] = e[t])), e),
  jr
);
var J1 = /^(matrix|translate|scale|rotate|skew)/,
  b1 = /^(translate)/,
  ev = /^(rotate|skew)/,
  Tl = (e, t) => (x.num(e) && e !== 0 ? e + t : e),
  Ki = (e, t) =>
    x.arr(e)
      ? e.every((n) => Ki(n, t))
      : x.num(e)
      ? e === t
      : parseFloat(e) === t,
  tv = class extends qo {
    constructor({ x: e, y: t, z: n, ...r }) {
      const i = [],
        o = [];
      (e || t || n) &&
        (i.push([e || 0, t || 0, n || 0]),
        o.push((l) => [
          `translate3d(${l.map((s) => Tl(s, "px")).join(",")})`,
          Ki(l, 0),
        ])),
        at(r, (l, s) => {
          if (s === "transform")
            i.push([l || ""]), o.push((u) => [u, u === ""]);
          else if (J1.test(s)) {
            if ((delete r[s], x.und(l))) return;
            const u = b1.test(s) ? "px" : ev.test(s) ? "deg" : "";
            i.push(Me(l)),
              o.push(
                s === "rotate3d"
                  ? ([a, m, d, h]) => [
                      `rotate3d(${a},${m},${d},${Tl(h, u)})`,
                      Ki(h, 0),
                    ]
                  : (a) => [
                      `${s}(${a.map((m) => Tl(m, u)).join(",")})`,
                      Ki(a, s.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        i.length && (r.transform = new nv(i, o)),
        super(r);
    }
  },
  nv = class extends hp {
    constructor(e, t) {
      super(), (this.inputs = e), (this.transforms = t), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let e = "",
        t = !0;
      return (
        F(this.inputs, (n, r) => {
          const i = xe(n[0]),
            [o, l] = this.transforms[r](x.arr(i) ? i : n.map(xe));
          (e += " " + o), (t = t && l);
        }),
        t ? "none" : e
      );
    }
    observerAdded(e) {
      e == 1 && F(this.inputs, (t) => F(t, (n) => De(n) && Gn(n, this)));
    }
    observerRemoved(e) {
      e == 0 && F(this.inputs, (t) => F(t, (n) => De(n) && Gr(n, this)));
    }
    eventObserved(e) {
      e.type == "change" && (this._value = null), Yr(this, e);
    }
  },
  rv = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
tt.assign({
  batchedUpdates: bd.unstable_batchedUpdates,
  createStringInterpolator: gp,
  colors: Qm,
});
var iv = x1(rv, {
    applyAnimatedValues: X1,
    createAnimatedStyle: (e) => new tv(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  ov = iv.animated;
const lv = ({ children: e, ...t }) => {
  const [n, r] = H1(() => ({
      config: { mass: 1, tension: 150, friction: 10 },
    })),
    i = () => {
      r.start({ transform: "scale(1)" });
    },
    o = () => {
      r.start({ transform: "scale(1.05)" });
    },
    l = () => {
      console.log("mouuse over"), r.start({ transform: "scale(1.05)" });
    },
    s = () => {
      r.start({ transform: "scale(1)" });
    },
    u = J.Children.map(e, (a) =>
      J.cloneElement(a, {
        onMouseDown: i,
        onMouseUp: o,
        onMouseLeave: s,
        onMouseOver: l,
        ...t,
        style: { ...t.style, ...n },
      })
    );
  return v.jsx(v.Fragment, { children: u });
};
function sv() {
  return v.jsxs("div", {
    className: mn.aboutMe,
    children: [
      v.jsx(lv, {
        children: v.jsx(ov.img, {
          className: mn.shadowed,
          alt: "image of developer",
          src: Im,
        }),
      }),
      v.jsxs("svg", {
        width: "100",
        height: "100",
        xmlns: "http://www.w3.org/2000/svg",
        className: mn.aboutMeSvg,
        children: [
          v.jsx("path", {
            d: "M500,0 C500,-150 200,-100 170,-30",
            fill: "none",
            stroke: "white",
            strokeWidth: "4",
          }),
          v.jsx("path", {
            d: "M170,-50 L170,-30 L190, -35",
            fill: "none",
            stroke: "white",
            strokeWidth: "4",
          }),
        ],
      }),
      v.jsxs("div", {
        className: mn.aboutMeText,
        children: [
          v.jsxs("h1", {
            children: [
              "Hi, I'm",
              v.jsx("span", {
                className: mn.gradientName,
                children: "Devendra dhare",
              }),
              v.jsx("span", { className: mn.hand, children: "🤚" }),
            ],
          }),
          v.jsx("h2", { children: "I'm a Full Stack Web Developer." }),
        ],
      }),
    ],
  });
}
const Fp = "./assets/github-3b8e4d64.svg",
  uv = "./assets/git-0e4dcd4d.svg",
  av = "_MySkillsSection_8botf_1",
  cv = "_skills_8botf_13",
  zs = { MySkillsSection: av, skills: cv },
  fv = "./assets/reactLogo-95eb5092.svg",
  dv = "./assets/htmlLogo-b45f78da.svg",
  pv = "./assets/cssLogo-c6b8f3ec.svg",
  hv = "./assets/nodeLogo-68bf4739.svg",
  mv = "./assets/cLanguageLogo-13e91d5e.svg",
  vv = "./assets/cppLogo-f31dd5ad.svg",
  Ti = ({ top: e, left: t, subTitle: n, skillArr: r }) =>
    v.jsxs("div", {
      className: zs.skills,
      style: { top: e, left: t },
      children: [
        v.jsxs("h3", { children: [n, " : "] }),
        r.map((i, o) =>
          v.jsxs(
            "div",
            {
              style: { display: "flex", margin: "0 20px" },
              children: [
                v.jsx("img", { src: i.logo, alt: "react logo" }),
                v.jsxs("div", {
                  style: { margin: "0 15px" },
                  children: [
                    v.jsx("div", { children: i.name }),
                    v.jsx("div", { children: i.per }),
                  ],
                }),
              ],
            },
            o
          )
        ),
      ],
    }),
  gv = () =>
    v.jsxs("section", {
      className: ` ${zs.MySkillsSection}`,
      children: [
        v.jsx("h2", {
          className: zs.skills,
          style: { top: "100px", left: "-50px" },
          children: "Skills",
        }),
        v.jsx(Ti, {
          subTitle: "FRONTEND",
          skillArr: [
            { name: "react", logo: fv, per: "45%" },
            { name: "html", logo: dv, per: "70%" },
            { name: "css", logo: pv, per: "69%" },
          ],
          top: "-50px",
          left: "130px",
        }),
        v.jsx(Ti, {
          subTitle: "BACKEND",
          skillArr: [{ name: "node js", logo: hv, per: "45%" }],
          top: "-50px",
          left: "130px",
        }),
        v.jsx(Ti, {
          subTitle: "PROGRAMMING",
          skillArr: [
            { name: "C", logo: mv, per: "40%" },
            { name: "C++", logo: vv, per: "40%" },
          ],
          top: "-50px",
          left: "130px",
        }),
        v.jsx(Ti, {
          subTitle: "VCS",
          skillArr: [
            { name: "git", logo: uv, per: "20%" },
            { name: "github", logo: Fp, per: "60%" },
          ],
          top: "-50px",
          left: "130px",
        }),
      ],
    });
function jc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Nc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jc(Object(n), !0).forEach(function (r) {
          Dp(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : jc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Yi(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Yi = function (t) {
          return typeof t;
        })
      : (Yi = function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    Yi(e)
  );
}
function Dp(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yv(e, t) {
  return wv(e) || Sv(e, t) || kv(e, t) || _v();
}
function wv(e) {
  if (Array.isArray(e)) return e;
}
function Sv(e, t) {
  var n = e && ((typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"]);
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      l,
      s;
    try {
      for (
        n = n.call(e);
        !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t));
        i = !0
      );
    } catch (u) {
      (o = !0), (s = u);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw s;
      }
    }
    return r;
  }
}
function kv(e, t) {
  if (e) {
    if (typeof e == "string") return Tc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Tc(e, t);
  }
}
function Tc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _v() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var xv = function (t) {
    var n = J.useRef(t);
    return (
      J.useEffect(
        function () {
          n.current = t;
        },
        [t]
      ),
      n.current
    );
  },
  jo = function (t) {
    return t !== null && Yi(t) === "object";
  },
  Ic = "[object Object]",
  Ev = function e(t, n) {
    if (!jo(t) || !jo(n)) return t === n;
    var r = Array.isArray(t),
      i = Array.isArray(n);
    if (r !== i) return !1;
    var o = Object.prototype.toString.call(t) === Ic,
      l = Object.prototype.toString.call(n) === Ic;
    if (o !== l) return !1;
    if (!o && !r) return t === n;
    var s = Object.keys(t),
      u = Object.keys(n);
    if (s.length !== u.length) return !1;
    for (var a = {}, m = 0; m < s.length; m += 1) a[s[m]] = !0;
    for (var d = 0; d < u.length; d += 1) a[u[d]] = !0;
    var h = Object.keys(a);
    if (h.length !== s.length) return !1;
    var w = t,
      g = n,
      y = function (f) {
        return e(w[f], g[f]);
      };
    return h.every(y);
  },
  Cv = function (t, n, r) {
    return jo(t)
      ? Object.keys(t).reduce(function (i, o) {
          var l = !jo(n) || !Ev(t[o], n[o]);
          return r.includes(o)
            ? (l &&
                console.warn(
                  "Unsupported prop change: options.".concat(
                    o,
                    " is not a mutable property."
                  )
                ),
              i)
            : l
            ? Nc(Nc({}, i || {}), {}, Dp({}, o, t[o]))
            : i;
        }, null)
      : null;
  },
  $p = J.createContext(null);
$p.displayName = "ElementsContext";
var Pv = function (t, n) {
    if (!t)
      throw new Error(
        "Could not find Elements context; You need to wrap the part of your app that ".concat(
          n,
          " in an <Elements> provider."
        )
      );
    return t;
  },
  Up = J.createContext(null);
Up.displayName = "CartElementContext";
var jv = function (t, n) {
  if (!t)
    throw new Error(
      "Could not find Elements context; You need to wrap the part of your app that ".concat(
        n,
        " in an <Elements> provider."
      )
    );
  return t;
};
ee.any, ee.object;
var Mc = function (t) {
    var n = J.useContext($p);
    return Pv(n, t);
  },
  Oc = function (t) {
    var n = J.useContext(Up);
    return jv(n, t);
  };
ee.func.isRequired;
var ye = function (t, n, r) {
    var i = !!r,
      o = J.useRef(r);
    J.useEffect(
      function () {
        o.current = r;
      },
      [r]
    ),
      J.useEffect(
        function () {
          if (!i || !t) return function () {};
          var l = function () {
            o.current && o.current.apply(o, arguments);
          };
          return (
            t.on(n, l),
            function () {
              t.off(n, l);
            }
          );
        },
        [i, n, t, o]
      );
  },
  Nv = function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  oe = function (t, n) {
    var r = "".concat(Nv(t), "Element"),
      i = function (u) {
        var a = u.id,
          m = u.className,
          d = u.options,
          h = d === void 0 ? {} : d,
          w = u.onBlur,
          g = u.onFocus,
          y = u.onReady,
          N = u.onChange,
          f = u.onEscape,
          c = u.onClick,
          p = u.onLoadError,
          S = u.onLoaderStart,
          _ = u.onNetworksChange,
          j = u.onCheckout,
          E = u.onLineItemClick,
          I = u.onConfirm,
          C = u.onCancel,
          O = u.onShippingAddressChange,
          D = u.onShippingRateChange,
          b = Mc("mounts <".concat(r, ">")),
          V = b.elements,
          pn = J.useState(null),
          ui = yv(pn, 2),
          ne = ui[0],
          Xn = ui[1],
          P = J.useRef(null),
          R = J.useRef(null),
          z = Oc("mounts <".concat(r, ">")),
          B = z.setCart,
          q = z.setCartState;
        ye(ne, "blur", w),
          ye(ne, "focus", g),
          ye(ne, "escape", f),
          ye(ne, "click", c),
          ye(ne, "loaderror", p),
          ye(ne, "loaderstart", S),
          ye(ne, "networkschange", _),
          ye(ne, "lineitemclick", E),
          ye(ne, "confirm", I),
          ye(ne, "cancel", C),
          ye(ne, "shippingaddresschange", O),
          ye(ne, "shippingratechange", D);
        var ct;
        t === "cart"
          ? (ct = function (Yu) {
              q(Yu), y && y(Yu);
            })
          : y &&
            (t === "payButton"
              ? (ct = y)
              : (ct = function () {
                  y(ne);
                })),
          ye(ne, "ready", ct);
        var ft =
          t === "cart"
            ? function (re) {
                q(re), N && N(re);
              }
            : N;
        ye(ne, "change", ft);
        var qn =
          t === "cart"
            ? function (re) {
                q(re), j && j(re);
              }
            : j;
        ye(ne, "checkout", qn),
          J.useLayoutEffect(
            function () {
              if (P.current === null && V && R.current !== null) {
                var re = V.create(t, h);
                t === "cart" && B && B(re),
                  (P.current = re),
                  Xn(re),
                  re.mount(R.current);
              }
            },
            [V, h, B]
          );
        var nt = xv(h);
        return (
          J.useEffect(
            function () {
              if (P.current) {
                var re = Cv(h, nt, ["paymentRequest"]);
                re && P.current.update(re);
              }
            },
            [h, nt]
          ),
          J.useLayoutEffect(function () {
            return function () {
              P.current && (P.current.destroy(), (P.current = null));
            };
          }, []),
          J.createElement("div", { id: a, className: m, ref: R })
        );
      },
      o = function (u) {
        Mc("mounts <".concat(r, ">")), Oc("mounts <".concat(r, ">"));
        var a = u.id,
          m = u.className;
        return J.createElement("div", { id: a, className: m });
      },
      l = n ? o : i;
    return (
      (l.propTypes = {
        id: ee.string,
        className: ee.string,
        onChange: ee.func,
        onBlur: ee.func,
        onFocus: ee.func,
        onReady: ee.func,
        onEscape: ee.func,
        onClick: ee.func,
        onLoadError: ee.func,
        onLoaderStart: ee.func,
        onNetworksChange: ee.func,
        onCheckout: ee.func,
        onLineItemClick: ee.func,
        onConfirm: ee.func,
        onCancel: ee.func,
        onShippingAddressChange: ee.func,
        onShippingRateChange: ee.func,
        options: ee.object,
      }),
      (l.displayName = r),
      (l.__elementType = t),
      l
    );
  },
  le = typeof window > "u";
oe("auBankAccount", le);
var Tv = oe("card", le);
oe("cardNumber", le);
oe("cardExpiry", le);
oe("cardCvc", le);
oe("fpxBank", le);
oe("iban", le);
oe("idealBank", le);
oe("p24Bank", le);
oe("epsBank", le);
oe("payment", le);
oe("payButton", le);
oe("paymentRequestButton", le);
oe("linkAuthentication", le);
oe("address", le);
oe("shippingAddress", le);
oe("cart", le);
oe("paymentMethodMessaging", le);
oe("affirmMessage", le);
oe("afterpayClearpayMessage", le);
var Ku = Object.defineProperty,
  Iv = Object.getOwnPropertyDescriptor,
  Mv = Object.getOwnPropertyNames,
  Ov = Object.prototype.hasOwnProperty,
  Rv = (e, t) => {
    for (var n in t) Ku(e, n, { get: t[n], enumerable: !0 });
  },
  Lv = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Mv(t))
        !Ov.call(e, i) &&
          i !== n &&
          Ku(e, i, {
            get: () => t[i],
            enumerable: !(r = Iv(t, i)) || r.enumerable,
          });
    return e;
  },
  zv = (e) => Lv(Ku({}, "__esModule", { value: !0 }), e),
  Rc = (e, t, n) =>
    new Promise((r, i) => {
      var o = (u) => {
          try {
            s(n.next(u));
          } catch (a) {
            i(a);
          }
        },
        l = (u) => {
          try {
            s(n.throw(u));
          } catch (a) {
            i(a);
          }
        },
        s = (u) => (u.done ? r(u.value) : Promise.resolve(u.value).then(o, l));
      s((n = n.apply(e, t)).next());
    }),
  Vp = {};
Rv(Vp, {
  SubmissionError: () => Zt,
  appendExtraData: () => Gi,
  createClient: () => Wp,
  getDefaultClient: () => ng,
  isSubmissionError: () => Hv,
});
var As = zv(Vp),
  Lt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  Av = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
function Fv(e) {
  e = String(e);
  for (var t, n, r, i, o = "", l = 0, s = e.length % 3; l < e.length; ) {
    if (
      (n = e.charCodeAt(l++)) > 255 ||
      (r = e.charCodeAt(l++)) > 255 ||
      (i = e.charCodeAt(l++)) > 255
    )
      throw new TypeError(
        "Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range."
      );
    (t = (n << 16) | (r << 8) | i),
      (o +=
        Lt.charAt((t >> 18) & 63) +
        Lt.charAt((t >> 12) & 63) +
        Lt.charAt((t >> 6) & 63) +
        Lt.charAt(t & 63));
  }
  return s ? o.slice(0, s - 3) + "===".substring(s) : o;
}
function Dv(e) {
  if (((e = String(e).replace(/[\t\n\f\r ]+/g, "")), !Av.test(e)))
    throw new TypeError(
      "Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."
    );
  e += "==".slice(2 - (e.length & 3));
  for (var t, n = "", r, i, o = 0; o < e.length; )
    (t =
      (Lt.indexOf(e.charAt(o++)) << 18) |
      (Lt.indexOf(e.charAt(o++)) << 12) |
      ((r = Lt.indexOf(e.charAt(o++))) << 6) |
      (i = Lt.indexOf(e.charAt(o++)))),
      (n +=
        r === 64
          ? String.fromCharCode((t >> 16) & 255)
          : i === 64
          ? String.fromCharCode((t >> 16) & 255, (t >> 8) & 255)
          : String.fromCharCode((t >> 16) & 255, (t >> 8) & 255, t & 255));
  return n;
}
var $v = () =>
    navigator.webdriver ||
    !!document.documentElement.getAttribute(Dv("d2ViZHJpdmVy")) ||
    !!window.callPhantom ||
    !!window._phantom,
  Uv = class {
    constructor() {
      (this.loadedAt = Date.now()), (this.webdriver = $v());
    }
    data() {
      return { loadedAt: this.loadedAt, webdriver: this.webdriver };
    }
  },
  Vv = class {
    constructor(e) {
      (this.kind = "success"), (this.next = e.next);
    }
  };
function Wv(e) {
  return "next" in e && typeof e.next == "string";
}
var Bv = class {
  constructor(e, t) {
    (this.paymentIntentClientSecret = e),
      (this.resubmitKey = t),
      (this.kind = "stripePluginPending");
  }
};
function Qv(e) {
  if ("stripe" in e && "resubmitKey" in e && typeof e.resubmitKey == "string") {
    let { stripe: t } = e;
    return (
      typeof t == "object" &&
      t != null &&
      "paymentIntentClientSecret" in t &&
      typeof t.paymentIntentClientSecret == "string"
    );
  }
  return !1;
}
function Hv(e) {
  return e.kind === "error";
}
var Zt = class {
  constructor(...e) {
    (this.kind = "error"),
      (this.formErrors = []),
      (this.fieldErrors = new Map());
    var t;
    for (let n of e) {
      if (!n.field) {
        this.formErrors.push({
          code: n.code && Kv(n.code) ? n.code : "UNSPECIFIED",
          message: n.message,
        });
        continue;
      }
      let r = (t = this.fieldErrors.get(n.field)) != null ? t : [];
      r.push({
        code: n.code && Gv(n.code) ? n.code : "UNSPECIFIED",
        message: n.message,
      }),
        this.fieldErrors.set(n.field, r);
    }
  }
  getFormErrors() {
    return [...this.formErrors];
  }
  getFieldErrors(e) {
    var t;
    return (t = this.fieldErrors.get(e)) != null ? t : [];
  }
  getAllFieldErrors() {
    return Array.from(this.fieldErrors);
  }
};
function Kv(e) {
  return e in Yv;
}
var Yv = {
  BLOCKED: "BLOCKED",
  EMPTY: "EMPTY",
  FILES_TOO_BIG: "FILES_TOO_BIG",
  FORM_NOT_FOUND: "FORM_NOT_FOUND",
  INACTIVE: "INACTIVE",
  NO_FILE_UPLOADS: "NO_FILE_UPLOADS",
  PROJECT_NOT_FOUND: "PROJECT_NOT_FOUND",
  TOO_MANY_FILES: "TOO_MANY_FILES",
};
function Gv(e) {
  return e in Xv;
}
var Xv = {
  REQUIRED_FIELD_EMPTY: "REQUIRED_FIELD_EMPTY",
  REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING",
  STRIPE_CLIENT_ERROR: "STRIPE_CLIENT_ERROR",
  STRIPE_SCA_ERROR: "STRIPE_SCA_ERROR",
  TYPE_EMAIL: "TYPE_EMAIL",
  TYPE_NUMERIC: "TYPE_NUMERIC",
  TYPE_TEXT: "TYPE_TEXT",
};
function qv(e) {
  return (
    ("errors" in e &&
      Array.isArray(e.errors) &&
      e.errors.every((t) => typeof t.message == "string")) ||
    ("error" in e && typeof e.error == "string")
  );
}
var Zv = "3.0.1",
  Jv = (e) => Fv(JSON.stringify(e)),
  bv = (e) => {
    let t = `@formspree/core@${Zv}`;
    return e ? `${e} ${t}` : t;
  };
function Gi(e, t, n) {
  e instanceof FormData ? e.append(t, n) : (e[t] = n);
}
function eg(e) {
  return e !== null && typeof e == "object";
}
var tg = class {
  constructor(e = {}) {
    (this.project = e.project),
      (this.stripe = e.stripe),
      typeof window < "u" && (this.session = new Uv());
  }
  submitForm(e, t) {
    return Rc(this, arguments, function* (n, r, i = {}) {
      let o = i.endpoint || "https://formspree.io",
        l = this.project ? `${o}/p/${this.project}/f/${n}` : `${o}/f/${n}`,
        s = {
          Accept: "application/json",
          "Formspree-Client": bv(i.clientName),
        };
      this.session && (s["Formspree-Session-Data"] = Jv(this.session.data())),
        r instanceof FormData || (s["Content-Type"] = "application/json");
      function u(m) {
        return Rc(this, null, function* () {
          try {
            let d = yield (yield fetch(l, {
              method: "POST",
              mode: "cors",
              body: m instanceof FormData ? m : JSON.stringify(m),
              headers: s,
            })).json();
            if (eg(d)) {
              if (qv(d))
                return Array.isArray(d.errors)
                  ? new Zt(...d.errors)
                  : new Zt({ message: d.error });
              if (Qv(d))
                return new Bv(
                  d.stripe.paymentIntentClientSecret,
                  d.resubmitKey
                );
              if (Wv(d)) return new Vv({ next: d.next });
            }
            return new Zt({ message: "Unexpected response format" });
          } catch (d) {
            let h =
              d instanceof Error
                ? d.message
                : `Unknown error while posting to Formspree: ${JSON.stringify(
                    d
                  )}`;
            return new Zt({ message: h });
          }
        });
      }
      if (this.stripe && i.createPaymentMethod) {
        let m = yield i.createPaymentMethod();
        if (m.error)
          return new Zt({
            code: "STRIPE_CLIENT_ERROR",
            field: "paymentMethod",
            message: "Error creating payment method",
          });
        Gi(r, "paymentMethod", m.paymentMethod.id);
        let d = yield u(r);
        if (d.kind === "error") return d;
        if (d.kind === "stripePluginPending") {
          let h = yield this.stripe.handleCardAction(
            d.paymentIntentClientSecret
          );
          if (h.error)
            return new Zt({
              code: "STRIPE_CLIENT_ERROR",
              field: "paymentMethod",
              message: "Stripe SCA error",
            });
          r instanceof FormData
            ? r.delete("paymentMethod")
            : delete r.paymentMethod,
            Gi(r, "paymentIntent", h.paymentIntent.id),
            Gi(r, "resubmitKey", d.resubmitKey);
          let w = yield u(r);
          return Lc(w), w;
        }
        return d;
      }
      let a = yield u(r);
      return Lc(a), a;
    });
  }
};
function Lc(e) {
  let { kind: t } = e;
  if (t !== "success" && t !== "error")
    throw new Error(`Unexpected submission result (kind: ${t})`);
}
var Wp = (e) => new tg(e),
  ng = () => (Il || (Il = Wp()), Il),
  Il,
  Bp = {};
Object.defineProperty(Bp, "__esModule", { value: !0 });
function Xi(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Xi = function (t) {
          return typeof t;
        })
      : (Xi = function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    Xi(e)
  );
}
var Qp = "https://js.stripe.com/v3",
  rg = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
  zc =
    "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
  ig = function () {
    for (
      var t = document.querySelectorAll('script[src^="'.concat(Qp, '"]')),
        n = 0;
      n < t.length;
      n++
    ) {
      var r = t[n];
      if (rg.test(r.src)) return r;
    }
    return null;
  },
  og = function (t) {
    var n = t && !t.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
      r = document.createElement("script");
    r.src = "".concat(Qp).concat(n);
    var i = document.head || document.body;
    if (!i)
      throw new Error(
        "Expected document.body not to be null. Stripe.js requires a <body> element."
      );
    return i.appendChild(r), r;
  },
  lg = function (t, n) {
    !t ||
      !t._registerWrapper ||
      t._registerWrapper({
        name: "stripe-js",
        version: "1.54.2",
        startTime: n,
      });
  },
  Ii = null,
  sg = function (t) {
    return (
      Ii !== null ||
        (Ii = new Promise(function (n, r) {
          if (typeof window > "u" || typeof document > "u") {
            n(null);
            return;
          }
          if ((window.Stripe && t && console.warn(zc), window.Stripe)) {
            n(window.Stripe);
            return;
          }
          try {
            var i = ig();
            i && t ? console.warn(zc) : i || (i = og(t)),
              i.addEventListener("load", function () {
                window.Stripe
                  ? n(window.Stripe)
                  : r(new Error("Stripe.js not available"));
              }),
              i.addEventListener("error", function () {
                r(new Error("Failed to load Stripe.js"));
              });
          } catch (o) {
            r(o);
            return;
          }
        })),
      Ii
    );
  },
  ug = function (t, n, r) {
    if (t === null) return null;
    var i = t.apply(void 0, n);
    return lg(i, r), i;
  },
  Ac = function (t) {
    var n = `invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(
      JSON.stringify(t),
      `
`
    );
    if (t === null || Xi(t) !== "object") throw new Error(n);
    if (
      Object.keys(t).length === 1 &&
      typeof t.advancedFraudSignals == "boolean"
    )
      return t;
    throw new Error(n);
  },
  qi,
  Fs = !1,
  Hp = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    Fs = !0;
    var i = Date.now();
    return sg(qi).then(function (o) {
      return ug(o, n, i);
    });
  };
Hp.setLoadParameters = function (e) {
  if (Fs && qi) {
    var t = Ac(e),
      n = Object.keys(t),
      r = n.reduce(function (i, o) {
        var l;
        return (
          i && e[o] === ((l = qi) === null || l === void 0 ? void 0 : l[o])
        );
      }, !0);
    if (r) return;
  }
  if (Fs)
    throw new Error(
      "You cannot change load parameters after calling loadStripe"
    );
  qi = Ac(e);
};
Bp.loadStripe = Hp;
function Mi(e) {
  let { prefix: t, field: n, errors: r, ...i } = e;
  if (r == null) return null;
  let o = n ? r.getFieldErrors(n) : r.getFormErrors();
  return o.length === 0
    ? null
    : J.createElement(
        "div",
        { ...i },
        t ? `${t} ` : null,
        o.map((l) => l.message).join(", ")
      );
}
var ag = J.createContext(null);
function cg() {
  return M.useContext(ag) ?? { client: As.getDefaultClient() };
}
var fg = "2.5.1",
  dg = `@formspree/react@${fg}`;
function pg(e, t = {}) {
  let n = cg(),
    {
      client: r = n.client,
      extraData: i,
      onError: o,
      onSuccess: l,
      origin: s,
    } = t,
    { stripe: u } = r,
    a = M.useMemo(() => (u == null ? void 0 : u.elements().getElement(Tv)), [
      u,
    ]);
  return async function (m) {
    let d = hg(m) ? mg(m) : m;
    if (typeof i == "object")
      for (let [w, g] of Object.entries(i)) {
        let y;
        typeof g == "function" ? (y = await g()) : (y = g),
          y !== void 0 && As.appendExtraData(d, w, y);
      }
    let h = await r.submitForm(e, d, {
      endpoint: s,
      clientName: dg,
      createPaymentMethod:
        u && a
          ? () =>
              u.createPaymentMethod({
                type: "card",
                card: a,
                billing_details: vg(d),
              })
          : void 0,
    });
    As.isSubmissionError(h) ? o == null || o(h) : l == null || l(h);
  };
}
function hg(e) {
  return "preventDefault" in e && typeof e.preventDefault == "function";
}
function mg(e) {
  e.preventDefault();
  let t = e.currentTarget;
  if (t.tagName != "FORM")
    throw new Error("submit was triggered for a non-form element");
  return new FormData(t);
}
function vg(e) {
  let t = { address: gg(e) };
  for (let n of ["name", "email", "phone"]) {
    let r = e instanceof FormData ? e.get(n) : e[n];
    r && typeof r == "string" && (t[n] = r);
  }
  return t;
}
function gg(e) {
  let t = {};
  for (let [n, r] of [
    ["address_line1", "line1"],
    ["address_line2", "line2"],
    ["address_city", "city"],
    ["address_country", "country"],
    ["address_state", "state"],
    ["address_postal_code", "postal_code"],
  ]) {
    let i = e instanceof FormData ? e.get(n) : e[n];
    i && typeof i == "string" && (t[r] = i);
  }
  return t;
}
function yg(e, t = {}) {
  let [n, r] = M.useState(null),
    [i, o] = M.useState(null),
    [l, s] = M.useState(!1),
    [u, a] = M.useState(!1);
  if (!e)
    throw new Error(
      'You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")'
    );
  let m = pg(e, {
    client: t.client,
    extraData: t.data,
    onError(d) {
      r(d), s(!1), a(!1);
    },
    onSuccess(d) {
      r(null), o(d), s(!1), a(!0);
    },
    origin: t.endpoint,
  });
  return [
    { errors: n, result: i, submitting: l, succeeded: u },
    async function (d) {
      s(!0), await m(d);
    },
    function () {
      r(null), o(null), s(!1), a(!1);
    },
  ];
}
const wg = "_contactMeSection_1k95t_1",
  Sg = "_sendBtn_1k95t_21",
  kg = "_inputs_1k95t_45",
  _g = "_antennaSvg_1k95t_65",
  xg = "_antennaSvgAnm_1k95t_1",
  Eg = "_antennaSvgPosition_1k95t_79",
  Cg = "_baseAntennaSvgPosition_1k95t_97",
  Pg = "_antennaSignal_1k95t_157",
  jg = "_dvn_1k95t_1",
  He = {
    contactMeSection: wg,
    sendBtn: Sg,
    inputs: kg,
    antennaSvg: _g,
    antennaSvgAnm: xg,
    antennaSvgPosition: Eg,
    baseAntennaSvgPosition: Cg,
    antennaSignal: Pg,
    dvn: jg,
  },
  Ng = ({ left: e, top: t }) => {
    const [n, r] = yg("xpzgvayv"),
      { setNotInsideAnyElement: i } = tp(),
      [o, l] = M.useState(!1),
      s = M.useRef(null),
      u = M.useRef(null),
      a = M.useRef(null);
    return (
      n.succeeded &&
        ((s.current.value = ""),
        (u.current.value = ""),
        (a.current.value = "")),
      v.jsxs("section", {
        className: `${He.contactMeSection}`,
        style: { left: e, top: t },
        children: [
          v.jsx("span", { children: "Contect me" }),
          v.jsx("p", {
            style: { fontSize: "18px", textAlign: "center", padding: " 10px" },
            children:
              "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible",
          }),
          v.jsxs("form", {
            method: "POST",
            onSubmit: r,
            style: {
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
            },
            children: [
              v.jsx("input", {
                id: "name",
                type: "text",
                name: "name",
                placeholder: "Name",
                required: !0,
                onClick: () => s.current.focus(),
                ref: s,
                className: He.inputs,
              }),
              v.jsx(Mi, { prefix: "Name", field: "name", errors: n.errors }),
              v.jsx("input", {
                id: "email",
                type: "email",
                name: "email",
                placeholder: "Email",
                required: !0,
                onClick: () => u.current.focus(),
                ref: u,
                className: He.inputs,
              }),
              v.jsx(Mi, { prefix: "Email", field: "email", errors: n.errors }),
              v.jsx("textarea", {
                required: !0,
                id: "message",
                name: "message",
                placeholder: "Message",
                onClick: () => a.current.focus(),
                ref: a,
                className: He.inputs,
                onMouseEnter: () => i(!1),
                onMouseOut: () => i(!0),
              }),
              v.jsx(Mi, {
                prefix: "Message",
                field: "message",
                errors: n.errors,
              }),
              v.jsxs("button", {
                type: "submit",
                disabled: n.submitting,
                className: He.sendBtn,
                onClick: () => {
                  s.current.value.length &&
                    u.current.value.length &&
                    a.current.value.length &&
                    l(!0);
                },
                children: [
                  "Submit",
                  v.jsx("br", {}),
                  v.jsx("span", {
                    style: { color: "rgb(100, 255, 60)" },
                    children: n.succeeded && "Submited Successfully",
                  }),
                ],
              }),
              v.jsxs("div", {
                onMouseOver: () => l(!0),
                onMouseLeave: () => l(!1),
                children: [
                  v.jsxs("svg", {
                    className:
                      (o ? He.antennaSvg : " ") + " " + He.antennaSvgPosition,
                    viewBox: "0 0 400 400",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      v.jsx("path", {
                        d:
                          "M149.245 104.248C81.9148 221.504 205.983 311.565 310.669 252.026",
                        stroke: "#ffffff",
                        strokeOpacity: "0.9",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      v.jsx("path", {
                        d:
                          "M160.38 254.701C104.271 307.734 153.458 304.819 183.363 259.998",
                        stroke: "#ffffff",
                        strokeOpacity: "0.9",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      v.jsx("path", {
                        d:
                          "M160.216 107.72C220.701 143.14 268.514 196.678 314.141 248.914",
                        stroke: "#ffffff",
                        strokeOpacity: "0.9",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      v.jsx("path", {
                        d:
                          "M231.971 153.127C288.747 138.119 269.299 136.041 255.052 182.946",
                        stroke: "#ffffff",
                        strokeOpacity: "0.9",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      v.jsx("path", {
                        className: o ? He.antennaSignal : " ",
                        style: { animationDelay: "0s" },
                        d:
                          "M287.522 133.181C282.79 129.868 279.937 125.658 277.106 121.608",
                        stroke: "#ffffff",
                        strokeOpacity: "0.9",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      v.jsx("path", {
                        className: o ? He.antennaSignal : " ",
                        style: { animationDelay: "0.2s" },
                        d:
                          "M315.298 119.293C309.776 109.319 300.669 102.185 292.151 94.9893",
                        stroke: "#ffffff",
                        strokeOpacity: "0.9",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      v.jsx("path", {
                        className: o ? He.antennaSignal : " ",
                        style: { animationDelay: "0.4s" },
                        d:
                          "M328.029 92.6744C320.667 90.8189 316.782 85.6555 311.826 81.1011",
                        stroke: "#ffffff",
                        strokeOpacity: "0.9",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    ],
                  }),
                  v.jsxs("svg", {
                    className: He.baseAntennaSvgPosition,
                    viewBox: "0 0 400 400",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      v.jsx("path", {
                        d:
                          "M113.923 320.669C123.278 281.161 159.195 281.161 163.688 317.118",
                        stroke: "#ffffff",
                        strokeOpacity: "0.9",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      v.jsx("path", {
                        d:
                          "M226.184 325.629C175.203 324.332 111.184 327.346 63 326.182",
                        stroke: "#ffffff",
                        strokeOpacity: "0.9",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    ],
                  }),
                ],
              }),
              v.jsx(Mi, { errors: n.errors }),
            ],
          }),
        ],
      })
    );
  },
  Tg = "./assets/instagram-c513dce3.svg",
  Ig = "./assets/discord-5bbf8307.svg",
  Mg = "./assets/gmail-679b06e7.svg",
  Og = "./assets/linkedIn-67e58676.svg",
  Rg = "./assets/youtube-1fb96162.svg",
  Lg = "_socialSection_1l5g0_1",
  zg = "_mailCopyed_1l5g0_27",
  Ag = "_mailCopyedAnimation_1l5g0_35",
  Fg = "_asdf_1l5g0_1",
  Ml = { socialSection: Lg, mailCopyed: zg, mailCopyedAnimation: Ag, asdf: Fg },
  ur = ({ href: e, imgSrc: t, IconName: n }) =>
    v.jsx("div", {
      children: v.jsxs("a", {
        href: e,
        target: "_dvn",
        children: [
          v.jsx("img", { src: t, alt: `${n} Icon`, style: { width: "40px" } }),
          v.jsx("span", {
            style: { fontSize: "20px", margin: "0 10px" },
            children: n,
          }),
        ],
      }),
    }),
  Dg = ({ left: e, top: t }) => {
    const [n, r] = M.useState(!1),
      i = () => {
        navigator.clipboard
          .writeText("devendrdhare03@gmail.com")
          .then(() => {
            r(!0),
              setTimeout(() => {
                r(!1);
              }, 1e3);
          })
          .catch((o) => {
            alert("Unable to copy to clipboard", o);
          });
      };
    return v.jsx(v.Fragment, {
      children: v.jsxs("section", {
        className: Ml.socialSection,
        children: [
          v.jsx(ur, {
            href: "https://www.instagram.com/devendra_dhare22/",
            imgSrc: Tg,
            IconName: "Instagram",
          }),
          v.jsx(ur, {
            href: "https://github.com/devendradhare",
            imgSrc: Fp,
            IconName: "Github",
          }),
          v.jsx(ur, {
            href: "https://discord.gg/AKH3QQGb",
            imgSrc: Ig,
            IconName: "Discord",
          }),
          v.jsx(ur, {
            href: "https://www.linkedin.com/in/devendra-dhare-bbb214221/",
            imgSrc: Og,
            IconName: "LinkedIn",
          }),
          v.jsx(ur, {
            href: "https://www.youtube.com/channel/UCU8CkuqiYF3iojYnr8Zc4GQ",
            imgSrc: Rg,
            IconName: "YouTube",
          }),
          v.jsxs("div", {
            onClick: () => i(),
            children: [
              v.jsx("img", {
                src: Mg,
                alt: "Gamil Icon",
                style: { width: "40px" },
              }),
              v.jsx("span", {
                style: { fontSize: "20px", margin: "0 10px" },
                children: "Gmail",
              }),
              v.jsx("div", {
                children: v.jsx("span", {
                  className: n
                    ? `${Ml.mailCopyedAnimation}`
                    : `${Ml.mailCopyed}`,
                  children: "email copyed",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  $g = "./assets/tic_tac_toe_screenshort-1990822b.png",
  Ug = "./assets/LiveBus-a6a2f857.png",
  Vg = "./assets/MyPortfolio-215c86c7.png",
  Wg = "./assets/currencyExchange-d44b3597.jpg",
  Bg = "_projectSection_drsjk_1",
  Qg = "_projectsDiv_drsjk_39",
  Hg = "_imgDiv_drsjk_65",
  Kg = "_projectTital_drsjk_99",
  Yg = "_usedTech_drsjk_111",
  hr = {
    projectSection: Bg,
    projectsDiv: Qg,
    imgDiv: Hg,
    projectTital: Kg,
    usedTech: Yg,
  },
  Oi = ({ tital: e, discription: t, image: n, usedTech: r, style_: i }) =>
    v.jsxs("div", {
      className: hr.projectsDiv_dvn,
      style: { ...i, width: "500px" },
      children: [
        v.jsx("span", {
          className: hr.projectTital,
          style: { minWidth: "100%" },
          children: e,
        }),
        v.jsx("div", {
          className: hr.imgDiv,
          children: v.jsx("img", {
            src: n,
            alt: "toc-tac-toe-screenshort.jpg",
          }),
        }),
        v.jsx("div", {
          children: v.jsxs("p", {
            children: [
              t,
              v.jsx("div", {
                className: hr.usedTech,
                children: r.map((o, l) => v.jsx("div", { children: o }, l)),
              }),
            ],
          }),
        }),
      ],
    }),
  Gg = ({ top: e, left: t }) => {
    const n = {
      position: "absolute",
      top: "0px",
      left: "0px",
      border: "1px solid green",
    };
    return v.jsx("section", {
      className: hr.projectSection,
      style: {
        top: e,
        left: t,
        background: "red",
        width: "10px",
        height: "10px",
        overflow: "visible",
      },
      children: v.jsxs("div", {
        style: {
          background: "lightblue",
          width: "1px",
          height: "1px",
          position: "relative",
          overflow: "visible",
        },
        children: [
          v.jsx("span", {
            style: {
              ...n,
              top: "0px",
              left: "-70px",
              whiteSpace: "nowrap",
              fontSize: "28px",
              fontWeight: "bold",
            },
            children: "My projects",
          }),
          v.jsx("p", {
            style: { ...n, top: "60px", left: "-50px", width: "500px" },
            children:
              "I'd like to showcase a few projects that I've personally created. Each project represents a culmination of my efforts and skills, reflecting a diverse range of accomplishments.",
          }),
          v.jsx(Oi, {
            style_: { ...n, top: "500px", left: "-900px" },
            tital: "currency exchange rates",
            image: Wg,
            discription:
              "This React and CSS project tracks real-time exchange rates for all global currencies. It features an interactive world map that shows current exchange rates when you hover over any country. Ideal for monitoring global currency trends effortlessly.",
            usedTech: ["react", "css", "svg maps", "currency exchange API"],
          }),
          v.jsx(Oi, {
            style_: { ...n, top: "500px", left: "-300px" },
            tital: "Live Bus Tracker",
            image: Ug,
            discription:
              "The College Bus Tracking Web App is a sophisticated real-time trackingsystem designed to enhance the safety and convenience of college bustransportation. This application allows users, including students andbus drivers, to effortlessly monitor the precise location of collegebuses and track the whereabouts of individual students.",
            usedTech: ["react", "css", "node", "express"],
          }),
          v.jsx(Oi, {
            style_: { ...n, top: "500px", left: "300px" },
            tital: "My Portfolio",
            image: Vg,
            discription:
              "this the my portfolio website you are currently visiting in, Inspiredby the functionality of Google Maps, my portfolio provides a uniqueuser experience. Similar to navigating Google Maps, users can zoom inand out on the page. By scrolling up, you can zoom out to get anoverview, and then zoom in on the specific content you wish toexplore.",
            usedTech: ["react", "css", "contextAPI"],
          }),
          v.jsx(Oi, {
            style_: { ...n, top: "500px", left: "900px" },
            tital: "Smart Tic-Tac-Toi",
            image: $g,
            discription:
              "Implemented the classic game of Tic-Tac-Toe using the C programminglanguage. This project demonstrates proficiency in algorithmicthinking and logic implementation. The game is designed to run in a console environment, providing a simple yet effective demonstration ofcoding skills in C.",
            usedTech: ["c programming"],
          }),
        ],
      }),
    });
  },
  Xg = "_myCertificateSection_13frk_1",
  qg = "_tital_13frk_17",
  Zg = "_certificateImg_13frk_25",
  Jg = "_certificateTital_13frk_35",
  bg = "_titalDiv_13frk_51",
  Ke = {
    myCertificateSection: Xg,
    tital: qg,
    certificateImg: Zg,
    certificateTital: Jg,
    titalDiv: bg,
  },
  ey = "./assets/C_Language-43942da4.svg",
  ty = "./assets/CPP_With_STL-21bfb576.svg",
  ny = "./assets/DSA-629fb99c.svg",
  ry = "./assets/quiz-89e88593.jpg",
  iy = ({ left: e, top: t }) =>
    v.jsx(v.Fragment, {
      children: v.jsxs("section", {
        className: Ke.myCertificateSection,
        style: { left: e, top: t },
        children: [
          v.jsx("span", { className: Ke.tital, children: "Certificates" }),
          v.jsxs("div", {
            className: Ke.titalDiv,
            children: [
              v.jsxs("div", {
                children: [
                  v.jsx("p", {
                    className: Ke.certificateTital,
                    children:
                      "Achieved proficiency in 'C Language' during the period spanning November 23, 2021, to February 5, 2022.",
                  }),
                  v.jsx("img", {
                    src: ey,
                    alt: "c language certifiacte",
                    className: Ke.certificateImg,
                  }),
                ],
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("p", {
                    className: Ke.certificateTital,
                    children:
                      "Completed the 'C++ Language with Standard Template Library' course from April 15, 2022, to July 15, 2022.",
                  }),
                  v.jsx("img", {
                    src: ty,
                    alt: "c language certifiacte",
                    className: Ke.certificateImg,
                  }),
                ],
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("p", {
                    className: Ke.certificateTital,
                    children:
                      "Successfully concluded a comprehensive 3-month training program on 'Data Structures and Algorithms utilizing C++.",
                  }),
                  v.jsx("img", {
                    src: ny,
                    alt: "c language certifiacte",
                    className: Ke.certificateImg,
                  }),
                ],
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("p", {
                    className: Ke.certificateTital,
                    children:
                      "Achieved victory in a C Programming Quiz conducted by MySirG Private Limited on June 17, 2022",
                  }),
                  v.jsx("img", {
                    src: ry,
                    alt: "c language certifiacte",
                    className: Ke.certificateImg,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  oy = "./assets/resume-fac09a16.svg",
  ly = ({ left: e, top: t }) =>
    v.jsx(v.Fragment, {
      children: v.jsxs("section", {
        style: {
          left: e,
          top: t,
          fontSize: "30px",
          cursor: "pointer",
          margin: "0 10px",
          display: "flex",
        },
        children: [
          v.jsx("a", {
            href:
              "https://drive.google.com/file/d/1AX1BQMPHSWDqwpRzDc3nlI0DfbeznR1u/view?usp=sharing",
            target: "_blank",
            style: { margin: "0 8px" },
            download: !0,
            children: "Download Reseme",
          }),
          v.jsx("img", {
            src: oy,
            alt: "Resume Icon",
            style: { width: "40px" },
          }),
        ],
      }),
    }),
  sy = "_navigateSection_yscor_1",
  uy = "_mouseAnimation_yscor_43",
  ay = "_mouseScrollAnimation_yscor_1",
  Fc = { navigateSection: sy, mouseAnimation: uy, mouseScrollAnimation: ay },
  cy = "./assets/keyboard-ee107119.svg",
  fy = ({ left: e, top: t }) => {
    const [n, r] = M.useState(!1);
    return v.jsxs("section", {
      className: Fc.navigateSection,
      style: { left: e, top: t },
      children: [
        v.jsx("span", { children: "How to Navigate" }),
        v.jsxs("div", {
          children: [
            v.jsx("img", {
              src: cy,
              style: { width: "300px", height: "150px", display: "block" },
              alt: "keyboard svg",
            }),
            v.jsxs("p", {
              children: [
                "Press the keyboard's arrow keys in the direction you want to move",
                " ",
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          onMouseOver: () => r(!0),
          onMouseOut: () => r(!1),
          children: [
            v.jsxs("svg", {
              viewBox: "0 0 48 40",
              fill: "#ffffff",
              style: { width: "120px", margin: "50px 0 0 0" },
              children: [
                v.jsx("path", {
                  d: `\r
          M38.518,20.378c0.389-4.32-5.583-7.165-8.618-3.921c-7.499-1.981-16.092-2.424-22.482,2.541  c-5.291,3.59-7.781,12.642-1.982,16.907c3.589,2.429,7.931,2.563,12.048,2.664c1.335,0.013,2.219-0.15,2.46-0.35  c0.246,0.202,1.206,0.363,2.478,0.418c4.032,0.18,8.142,0.304,12.233-0.491C45.059,36.547,47.054,26.261,38.518,20.378z   \r
          M32.505,16.899c1.835-0.069,3.346,0.888,4.292,2.373c-1.61-0.93-3.334-1.671-5.015-2.268C32.026,16.95,32.268,16.91,32.505,16.899z   \r
          M22.441,37.637c-1.212,0.006-2.218,0.164-2.489,0.372c-0.198-0.186-0.956-0.365-2.437-0.439c-3.806-0.27-8.069-0.586-11.191-2.854  c-3.019-2.206-3.12-6.798-1.449-10.013c3.253-6.078,11.068-8.381,17.629-7.48c-0.234,3.239-0.345,6.478-0.384,9.717  c-0.007,0.531,0.427,0.965,0.958,0.958c6.186,0.084,12.558,0.049,18.735-0.423C44.04,37.643,29.275,37.654,22.441,37.637z   \r
          M24.003,25.975c-0.075-2.886-0.205-5.772-0.438-8.658c6.346,0.653,12.851,2.614,16.939,7.583c0.353,0.471,0.653,0.974,0.9,1.498  C35.661,25.973,29.768,25.914,24.003,25.975z \r
          `,
                }),
                v.jsx("path", {
                  className: n ? Fc.mouseAnimation : " ",
                  d:
                    "M45.608,21.287c-0.048,0.964-0.895,0.877-0.999,0.04  c-0.814-8.969-9.5-13.8-17.535-10.228c1.844,0.094,3.745,0.124,5.562,0.419c0.707,0.115,0.485,0.921,0.025,1  c-2.245,0.407-4.563,0.717-6.839,0.478c-1.215-0.382-0.831-1.723-0.893-2.654c0.05-1.689,0.221-3.349,0.557-5.01  c0.045-0.223,0.355-0.465,0.63-0.426c0.226,0.032,0.343,0.275,0.37,0.451c0.241,1.595,0.315,2.983,0.369,4.616  C35.213,4.752,46.387,11.097,45.608,21.287z",
                }),
              ],
            }),
            v.jsx("p", {
              children:
                "To zoom in or out on a webpage, simply scroll up to zoom in and scroll down to zoom out",
            }),
          ],
        }),
        v.jsxs("div", {
          children: [
            v.jsx("svg", {
              viewBox: "0 0 100 100",
              fill: "#ffffff",
              style: { width: "180px", margin: "50px 0 0 0" },
              children: v.jsxs("g", {
                children: [
                  v.jsx("path", {
                    d:
                      "M32.314,42.631V57.35c0.001,9.565,7.753,17.316,17.318,17.317h0.784c9.565-0.001,17.317-7.753,17.318-17.317V42.631   c-0.001-9.565-7.753-17.317-17.318-17.318h-0.784C40.066,25.314,32.315,33.066,32.314,42.631z M49.631,28.216h0.784   c3.985,0.001,7.579,1.611,10.193,4.222c2.611,2.613,4.221,6.208,4.222,10.193V57.35c-0.001,3.985-1.611,7.579-4.222,10.192   c-2.613,2.611-6.208,4.221-10.193,4.222h-0.784c-3.985-0.001-7.58-1.611-10.193-4.222c-2.611-2.613-4.221-6.208-4.222-10.192   V42.631c0.001-3.985,1.611-7.58,4.222-10.193C42.052,29.828,45.646,28.217,49.631,28.216z",
                  }),
                  v.jsx("path", {
                    d:
                      "M50,47.065c0.802,0,1.452-0.65,1.452-1.452v-4.258c0-0.802-0.65-1.452-1.452-1.452c-0.802,0-1.452,0.65-1.452,1.452v4.258   C48.548,46.415,49.198,47.065,50,47.065z",
                  }),
                  v.jsx("path", {
                    d:
                      "M56.374,86.609L56.374,86.609l-6.351,5.081l-6.351-5.081c-0.626-0.501-1.54-0.399-2.04,0.227   c-0.501,0.626-0.399,1.539,0.227,2.04l7.258,5.806c0.53,0.424,1.283,0.424,1.814,0l7.258-5.806c0.626-0.501,0.727-1.414,0.227-2.04   C57.914,86.209,57,86.108,56.374,86.609z",
                  }),
                  v.jsx("path", {
                    d:
                      "M56.374,13.392c0.626,0.501,1.539,0.399,2.04-0.227c0.501-0.626,0.399-1.539-0.227-2.04L50.93,5.318   c-0.531-0.425-1.283-0.425-1.814,0l-7.258,5.806c-0.626,0.501-0.728,1.414-0.227,2.04c0.501,0.626,1.414,0.727,2.04,0.227l0,0   l6.351-5.081L56.374,13.392z",
                  }),
                  v.jsx("path", {
                    d:
                      "M88.875,43.287c-0.501-0.626-1.415-0.727-2.04-0.227c-0.626,0.501-0.727,1.415-0.226,2.041l0,0l5.081,6.351l-5.081,6.351   c-0.501,0.626-0.4,1.539,0.227,2.04c0.626,0.501,1.54,0.4,2.041-0.226l5.806-7.258c0.424-0.531,0.424-1.283,0-1.814L88.875,43.287z   ",
                  }),
                  v.jsx("path", {
                    d:
                      "M13.165,43.06c-0.626-0.501-1.539-0.399-2.04,0.227l-5.806,7.258c-0.425,0.53-0.424,1.283,0,1.814l5.806,7.258   c0.501,0.626,1.414,0.727,2.04,0.227c0.626-0.501,0.728-1.414,0.227-2.04l0,0l-5.081-6.351l5.081-6.351   C13.893,44.474,13.791,43.561,13.165,43.06z",
                  }),
                ],
              }),
            }),
            v.jsx("p", {
              children:
                "To move around, just press and hold the right mouse button, then move your mouse in the direction you want to go.... Easy, right?",
            }),
          ],
        }),
      ],
    });
  };
const dy = () => {
  const {
      setScale: e,
      setPointX: t,
      setPointY: n,
      handleMouseDown: r,
      handleMouseUp: i,
      handleMouseMove: o,
      handleWheel: l,
      handleTouchStart: s,
      handleTouchMove: u,
      handleTouchEnd: a,
      innerWidth: m,
    } = tp(),
    [d, h] = M.useState(!1);
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx("section", {
        className: d ? jt.diviceNotice : " ",
        children: v.jsxs("div", {
          children: [
            v.jsx("p", {
              children: "For a better experience, open it on your computer",
            }),
            v.jsx("button", { onClick: () => h(!1), children: "Open Anyway" }),
          ],
        }),
      }),
      v.jsx("div", {
        id: jt.zoom_outerid,
        onMouseMove: o,
        onTouchMove: u,
        onTouchStart: s,
        onMouseDown: r,
        onMouseUp: i,
        onWheel: l,
        onTouchEnd: a,
        children: v.jsxs("div", {
          id: jt.zoom,
          children: [
            v.jsx(sv, { className: jt.aboutMe }),
            v.jsx("p", {
              className: jt.objective,
              children:
                "Welcome to my portfolio! I am a passionate Full Stack Web Developer with expertise in the MERN stack. I am dedicated to contributing to dynamic web projects while continually expanding my skills in web development.",
            }),
            v.jsx("div", {
              style: {
                top: "-850px",
                left: "-500px",
                fontSize: "25px",
                width: "800px",
                height: "690px",
                zIndex: "-1",
              },
              children: v.jsx("img", {
                src: "./trees/tree05.png",
                alt: "colorfull tree",
                srcset: "",
                style: { width: "100%" },
              }),
            }),
            v.jsx("div", {
              style: {
                top: "-750px",
                left: "-1500px",
                fontSize: "25px",
                width: "800px",
                height: "780px",
                zIndex: "-1",
              },
              children: v.jsx("img", {
                src: "./trees/tree02.png",
                alt: "colorfull tree",
                srcset: "",
                style: { width: "100%" },
              }),
            }),
            v.jsx("div", {
              style: {
                top: "150px",
                left: "-500px",
                fontSize: "25px",
                width: "800px",
                height: "780px",
                zIndex: "-1",
              },
              children: v.jsx("img", {
                src: "./trees/tree01.png",
                alt: "colorfull tree",
                srcset: "",
                style: { width: "100%" },
              }),
            }),
            v.jsx("div", {
              style: {
                top: "350px",
                left: "-2500px",
                fontSize: "25px",
                width: "800px",
                height: "780px",
                zIndex: "-1",
              },
              children: v.jsx("img", {
                src: "./trees/tree03.png",
                alt: "colorfull tree",
                srcset: "",
                style: { width: "100%" },
              }),
            }),
            v.jsx("div", {
              style: {
                top: "-260px",
                left: "980px",
                fontSize: "25px",
                width: "320px",
                zIndex: "1",
                display: "flex",
                overflow: "visible",
              },
              children: Array(1)
                .fill(0)
                .map((w, g) =>
                  v.jsx("img", {
                    src: `./trees/tree0${g}.png`,
                    alt: "colorfull tree",
                    srcset: "",
                    style: { minWidth: "500px" },
                  })
                ),
            }),
            v.jsx(Dg, { left: "-870px", top: "50px" }),
            v.jsx(ly, { left: "-950px", top: "430px" }),
            v.jsx(Gg, { left: "-600px", top: "650px" }),
            v.jsx(iy, { left: "1200px", top: "850px" }),
            v.jsx(gv, {}),
            v.jsx(Ng, { left: "250px", top: "-300px" }),
            m >= 770 && v.jsx(fy, { left: "-1700px", top: "10px" }),
            v.jsxs("svg", {
              className: `${jt.node}`,
              width: "1",
              height: "1",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                v.jsx("path", {
                  d: "M-240,-20 c80,130 -299,-30 -200,110",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d: "M-770,-10 C-650,20 -990,10 -900,60",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d:
                    "M-880,50 C-915,40 -880,210 -910,200 C-880,200 -910,360 -880,350",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d: "M-165,180 C-180,480 -100,290 130,280",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d: "M250,280 C280,290 240,160 300,170",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d: "M250,280 C290,250 240,600 300,570",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d: "M-430, 180 c120,280 -200,100 -160,460",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d: "M860,390 c800,90 110,150 920, 430",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d: "M-895,300 c-200,100 -20,90 -20, 130",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "2",
                }),
                v.jsx("path", {
                  d: "M-400,950 c-100,100 -900,100 -850, 200",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d: "M-350,955 c-100,100 -200,100 -250, 190",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d: "M-200,960 c-100,100 -200,100 200, 180",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
                v.jsx("path", {
                  d: "M0,950 c-100,100 500,100 550, 180",
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "4",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
function py() {
  return v.jsx(v.Fragment, {
    children: v.jsx(_m, { children: v.jsx(dy, {}) }),
  });
}
Ol.createRoot(document.getElementById("root")).render(
  v.jsx(J.StrictMode, { children: v.jsx(py, {}) })
);
