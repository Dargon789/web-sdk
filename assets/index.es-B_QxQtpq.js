const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-WBbqB-Hi.js","./index-DBAtkmLD.js","./index-BHwcnrtI.css"])))=>i.map(i=>d[i]);
import { p as process$1, d as getAugmentedNamespace, j as global, B as Buffer, m as recoverAddress, o as elliptic, e as eventsExports, g as getDefaultExportFromCjs, c as commonjsGlobal, w as wt$4, _ as __vitePreload } from "./index-DBAtkmLD.js";
var __spreadArray = function(to2, from2, pack) {
  if (pack || arguments.length === 2) for (var i3 = 0, l2 = from2.length, ar2; i3 < l2; i3++) {
    if (ar2 || !(i3 in from2)) {
      if (!ar2) ar2 = Array.prototype.slice.call(from2, 0, i3);
      ar2[i3] = from2[i3];
    }
  }
  return to2.concat(ar2 || Array.prototype.slice.call(from2));
};
var BrowserInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BrowserInfo2(name, version, os2) {
      this.name = name;
      this.version = version;
      this.os = os2;
      this.type = "browser";
    }
    return BrowserInfo2;
  }()
);
var NodeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function NodeInfo2(version) {
      this.version = version;
      this.type = "node";
      this.name = "node";
      this.os = process$1.platform;
    }
    return NodeInfo2;
  }()
);
var SearchBotDeviceInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function SearchBotDeviceInfo2(name, version, os2, bot) {
      this.name = name;
      this.version = version;
      this.os = os2;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  }()
);
var BotInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  }()
);
var ReactNativeInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  }()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua2) {
  return ua2 !== "" && userAgentRules.reduce(function(matched, _a2) {
    var browser2 = _a2[0], regex = _a2[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua2);
    return !!uaMatch && [browser2, uaMatch];
  }, false);
}
function parseUserAgent(ua2) {
  var matchedRule = matchUserAgent(ua2);
  if (!matchedRule) {
    return null;
  }
  var name = matchedRule[0], match = matchedRule[1];
  if (name === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version = versionParts.join(".");
  var os2 = detectOS(ua2);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua2);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name, version, os2, searchBotMatch[1]);
  }
  return new BrowserInfo(name, version, os2);
}
function detectOS(ua2) {
  for (var ii2 = 0, count = operatingSystemRules.length; ii2 < count; ii2++) {
    var _a2 = operatingSystemRules[ii2], os2 = _a2[0], regex = _a2[1];
    var match = regex.exec(ua2);
    if (match) {
      return os2;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode = typeof process$1 !== "undefined" && process$1.version;
  return isNode ? new NodeInfo(process$1.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii2 = 0; ii2 < count; ii2++) {
    output.push("0");
  }
  return output;
}
var cjs$3 = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d4, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d5, b3) {
    d5.__proto__ = b3;
  } || function(d5, b3) {
    for (var p2 in b3) if (b3.hasOwnProperty(p2)) d5[p2] = b3[p2];
  };
  return extendStatics(d4, b2);
};
function __extends(d4, b2) {
  extendStatics(d4, b2);
  function __() {
    this.constructor = d4;
  }
  d4.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s2, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
      s2 = arguments[i3];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t[p2] = s2[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t = {};
  for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
    t[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p2 = Object.getOwnPropertySymbols(s2); i3 < p2.length; i3++) {
      if (e2.indexOf(p2[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i3]))
        t[p2[i3]] = s2[p2[i3]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d4 = decorators[i3]) r2 = (c2 < 3 ? d4(r2) : c2 > 3 ? d4(target, key, r2) : d4(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f5, y3, t, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n3) {
    return function(v2) {
      return step([n3, v2]);
    };
  }
  function step(op) {
    if (f5) throw new TypeError("Generator is already executing.");
    while (_3) try {
      if (f5 = 1, y3 && (t = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t = y3["return"]) && t.call(y3), 0) : y3.next) && !(t = t.call(y3, op[1])).done) return t;
      if (y3 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y3 = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t[1]) {
            _3.label = t[1];
            t = op;
            break;
          }
          if (t && _3.label < t[2]) {
            _3.label = t[2];
            _3.ops.push(op);
            break;
          }
          if (t[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body.call(thisArg, _3);
    } catch (e2) {
      op = [6, e2];
      y3 = 0;
    } finally {
      f5 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o3, m4, k2, k22) {
  if (k22 === void 0) k22 = k2;
  o3[k22] = m4[k2];
}
function __exportStar(m4, exports) {
  for (var p2 in m4) if (p2 !== "default" && !exports.hasOwnProperty(p2)) exports[p2] = m4[p2];
}
function __values(o3) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m4 = s2 && o3[s2], i3 = 0;
  if (m4) return m4.call(o3);
  if (o3 && typeof o3.length === "number") return {
    next: function() {
      if (o3 && i3 >= o3.length) o3 = void 0;
      return { value: o3 && o3[i3++], done: !o3 };
    }
  };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o3, n3) {
  var m4 = typeof Symbol === "function" && o3[Symbol.iterator];
  if (!m4) return o3;
  var i3 = m4.call(o3), r2, ar2 = [], e2;
  try {
    while ((n3 === void 0 || n3-- > 0) && !(r2 = i3.next()).done) ar2.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m4 = i3["return"])) m4.call(i3);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar2;
}
function __spread() {
  for (var ar2 = [], i3 = 0; i3 < arguments.length; i3++)
    ar2 = ar2.concat(__read(arguments[i3]));
  return ar2;
}
function __spreadArrays() {
  for (var s2 = 0, i3 = 0, il = arguments.length; i3 < il; i3++) s2 += arguments[i3].length;
  for (var r2 = Array(s2), k2 = 0, i3 = 0; i3 < il; i3++)
    for (var a2 = arguments[i3], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
      r2[k2] = a2[j2];
  return r2;
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g2 = generator.apply(thisArg, _arguments || []), i3, q2 = [];
  return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3;
  function verb(n3) {
    if (g2[n3]) i3[n3] = function(v2) {
      return new Promise(function(a2, b2) {
        q2.push([n3, v2, a2, b2]) > 1 || resume(n3, v2);
      });
    };
  }
  function resume(n3, v2) {
    try {
      step(g2[n3](v2));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r2) {
    r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f5, v2) {
    if (f5(v2), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator(o3) {
  var i3, p2;
  return i3 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i3[Symbol.iterator] = function() {
    return this;
  }, i3;
  function verb(n3, f5) {
    i3[n3] = o3[n3] ? function(v2) {
      return (p2 = !p2) ? { value: __await(o3[n3](v2)), done: n3 === "return" } : f5 ? f5(v2) : v2;
    } : f5;
  }
}
function __asyncValues(o3) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m4 = o3[Symbol.asyncIterator], i3;
  return m4 ? m4.call(o3) : (o3 = typeof __values === "function" ? __values(o3) : o3[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3);
  function verb(n3) {
    i3[n3] = o3[n3] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o3[n3](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d4, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d4 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod) if (Object.hasOwnProperty.call(mod, k2)) result[k2] = mod[k2];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
const tslib_es6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return __assign;
  },
  __asyncDelegator,
  __asyncGenerator,
  __asyncValues,
  __await,
  __awaiter,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __createBinding,
  __decorate,
  __exportStar,
  __extends,
  __generator,
  __importDefault,
  __importStar,
  __makeTemplateObject,
  __metadata,
  __param,
  __read,
  __rest,
  __spread,
  __spreadArrays,
  __values
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(tslib_es6);
var utils = {};
var delay = {};
var hasRequiredDelay;
function requireDelay() {
  if (hasRequiredDelay) return delay;
  hasRequiredDelay = 1;
  Object.defineProperty(delay, "__esModule", { value: true });
  delay.delay = void 0;
  function delay$1(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, timeout);
    });
  }
  delay.delay = delay$1;
  return delay;
}
var convert = {};
var constants = {};
var misc = {};
var hasRequiredMisc;
function requireMisc() {
  if (hasRequiredMisc) return misc;
  hasRequiredMisc = 1;
  Object.defineProperty(misc, "__esModule", { value: true });
  misc.ONE_THOUSAND = misc.ONE_HUNDRED = void 0;
  misc.ONE_HUNDRED = 100;
  misc.ONE_THOUSAND = 1e3;
  return misc;
}
var time = {};
var hasRequiredTime;
function requireTime() {
  if (hasRequiredTime) return time;
  hasRequiredTime = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
    exports.ONE_SECOND = 1;
    exports.FIVE_SECONDS = 5;
    exports.TEN_SECONDS = 10;
    exports.THIRTY_SECONDS = 30;
    exports.SIXTY_SECONDS = 60;
    exports.ONE_MINUTE = exports.SIXTY_SECONDS;
    exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
    exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
    exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
    exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
    exports.ONE_HOUR = exports.SIXTY_MINUTES;
    exports.THREE_HOURS = exports.ONE_HOUR * 3;
    exports.SIX_HOURS = exports.ONE_HOUR * 6;
    exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
    exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
    exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
    exports.THREE_DAYS = exports.ONE_DAY * 3;
    exports.FIVE_DAYS = exports.ONE_DAY * 5;
    exports.SEVEN_DAYS = exports.ONE_DAY * 7;
    exports.THIRTY_DAYS = exports.ONE_DAY * 30;
    exports.ONE_WEEK = exports.SEVEN_DAYS;
    exports.TWO_WEEKS = exports.ONE_WEEK * 2;
    exports.THREE_WEEKS = exports.ONE_WEEK * 3;
    exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
    exports.ONE_YEAR = exports.ONE_DAY * 365;
  })(time);
  return time;
}
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0;
    tslib_1.__exportStar(requireMisc(), exports);
    tslib_1.__exportStar(requireTime(), exports);
  })(constants);
  return constants;
}
var hasRequiredConvert;
function requireConvert() {
  if (hasRequiredConvert) return convert;
  hasRequiredConvert = 1;
  Object.defineProperty(convert, "__esModule", { value: true });
  convert.fromMiliseconds = convert.toMiliseconds = void 0;
  const constants_1 = requireConstants();
  function toMiliseconds(seconds) {
    return seconds * constants_1.ONE_THOUSAND;
  }
  convert.toMiliseconds = toMiliseconds;
  function fromMiliseconds(miliseconds) {
    return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
  }
  convert.fromMiliseconds = fromMiliseconds;
  return convert;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0;
    tslib_1.__exportStar(requireDelay(), exports);
    tslib_1.__exportStar(requireConvert(), exports);
  })(utils);
  return utils;
}
var watch$2 = {};
var hasRequiredWatch$1;
function requireWatch$1() {
  if (hasRequiredWatch$1) return watch$2;
  hasRequiredWatch$1 = 1;
  Object.defineProperty(watch$2, "__esModule", { value: true });
  watch$2.Watch = void 0;
  class Watch {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(label) {
      if (this.timestamps.has(label)) {
        throw new Error(`Watch already started for label: ${label}`);
      }
      this.timestamps.set(label, { started: Date.now() });
    }
    stop(label) {
      const timestamp = this.get(label);
      if (typeof timestamp.elapsed !== "undefined") {
        throw new Error(`Watch already stopped for label: ${label}`);
      }
      const elapsed = Date.now() - timestamp.started;
      this.timestamps.set(label, { started: timestamp.started, elapsed });
    }
    get(label) {
      const timestamp = this.timestamps.get(label);
      if (typeof timestamp === "undefined") {
        throw new Error(`No timestamp found for label: ${label}`);
      }
      return timestamp;
    }
    elapsed(label) {
      const timestamp = this.get(label);
      const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
      return elapsed;
    }
  }
  watch$2.Watch = Watch;
  watch$2.default = Watch;
  return watch$2;
}
var types = {};
var watch$1 = {};
var hasRequiredWatch;
function requireWatch() {
  if (hasRequiredWatch) return watch$1;
  hasRequiredWatch = 1;
  Object.defineProperty(watch$1, "__esModule", { value: true });
  watch$1.IWatch = void 0;
  class IWatch {
  }
  watch$1.IWatch = IWatch;
  return watch$1;
}
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes) return types;
  hasRequiredTypes = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require$$0;
    tslib_1.__exportStar(requireWatch(), exports);
  })(types);
  return types;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_1 = require$$0;
  tslib_1.__exportStar(requireUtils(), exports);
  tslib_1.__exportStar(requireWatch$1(), exports);
  tslib_1.__exportStar(requireTypes(), exports);
  tslib_1.__exportStar(requireConstants(), exports);
})(cjs$3);
var cjs$2 = {};
Object.defineProperty(cjs$2, "__esModule", { value: true });
cjs$2.getLocalStorage = cjs$2.getLocalStorageOrThrow = cjs$2.getCrypto = cjs$2.getCryptoOrThrow = getLocation_1 = cjs$2.getLocation = cjs$2.getLocationOrThrow = getNavigator_1 = cjs$2.getNavigator = cjs$2.getNavigatorOrThrow = getDocument_1 = cjs$2.getDocument = cjs$2.getDocumentOrThrow = cjs$2.getFromWindowOrThrow = cjs$2.getFromWindow = void 0;
function getFromWindow(name) {
  let res = void 0;
  if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
    res = window[name];
  }
  return res;
}
cjs$2.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
  const res = getFromWindow(name);
  if (!res) {
    throw new Error(`${name} is not defined in Window`);
  }
  return res;
}
cjs$2.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
  return getFromWindowOrThrow("document");
}
cjs$2.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
  return getFromWindow("document");
}
var getDocument_1 = cjs$2.getDocument = getDocument;
function getNavigatorOrThrow() {
  return getFromWindowOrThrow("navigator");
}
cjs$2.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
  return getFromWindow("navigator");
}
var getNavigator_1 = cjs$2.getNavigator = getNavigator;
function getLocationOrThrow() {
  return getFromWindowOrThrow("location");
}
cjs$2.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
  return getFromWindow("location");
}
var getLocation_1 = cjs$2.getLocation = getLocation;
function getCryptoOrThrow() {
  return getFromWindowOrThrow("crypto");
}
cjs$2.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
  return getFromWindow("crypto");
}
cjs$2.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
  return getFromWindowOrThrow("localStorage");
}
cjs$2.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
  return getFromWindow("localStorage");
}
cjs$2.getLocalStorage = getLocalStorage;
var cjs$1 = {};
Object.defineProperty(cjs$1, "__esModule", { value: true });
var getWindowMetadata_1 = cjs$1.getWindowMetadata = void 0;
const window_getters_1 = cjs$2;
function getWindowMetadata() {
  let doc;
  let loc;
  try {
    doc = window_getters_1.getDocumentOrThrow();
    loc = window_getters_1.getLocationOrThrow();
  } catch (e2) {
    return null;
  }
  function getIcons() {
    const links = doc.getElementsByTagName("link");
    const icons2 = [];
    for (let i3 = 0; i3 < links.length; i3++) {
      const link = links[i3];
      const rel = link.getAttribute("rel");
      if (rel) {
        if (rel.toLowerCase().indexOf("icon") > -1) {
          const href = link.getAttribute("href");
          if (href) {
            if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
              let absoluteHref = loc.protocol + "//" + loc.host;
              if (href.indexOf("/") === 0) {
                absoluteHref += href;
              } else {
                const path = loc.pathname.split("/");
                path.pop();
                const finalPath = path.join("/");
                absoluteHref += finalPath + "/" + href;
              }
              icons2.push(absoluteHref);
            } else if (href.indexOf("//") === 0) {
              const absoluteUrl = loc.protocol + href;
              icons2.push(absoluteUrl);
            } else {
              icons2.push(href);
            }
          }
        }
      }
    }
    return icons2;
  }
  function getWindowMetadataOfAny(...args) {
    const metaTags = doc.getElementsByTagName("meta");
    for (let i3 = 0; i3 < metaTags.length; i3++) {
      const tag = metaTags[i3];
      const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
        if (attr) {
          return args.includes(attr);
        }
        return false;
      });
      if (attributes.length && attributes) {
        const content = tag.getAttribute("content");
        if (content) {
          return content;
        }
      }
    }
    return "";
  }
  function getName() {
    let name2 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
    if (!name2) {
      name2 = doc.title;
    }
    return name2;
  }
  function getDescription() {
    const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
    return description2;
  }
  const name = getName();
  const description = getDescription();
  const url = loc.origin;
  const icons = getIcons();
  const meta = {
    description,
    url,
    icons,
    name
  };
  return meta;
}
getWindowMetadata_1 = cjs$1.getWindowMetadata = getWindowMetadata;
const JSONStringify = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
const JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}
function En$3(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function fe$2(t, ...e2) {
  if (!En$3(t)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
}
function De$3(t, e2 = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
}
function gn$3(t, e2) {
  fe$2(t);
  const n3 = e2.outputLen;
  if (t.length < n3) throw new Error("digestInto() expects output buffer of length at least " + n3);
}
const it$2 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _t$4 = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
function yn$3(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function de$3(t) {
  return typeof t == "string" && (t = yn$3(t)), fe$2(t), t;
}
let xn$3 = class xn {
  clone() {
    return this._cloneInto();
  }
};
function Bn$3(t) {
  const e2 = (r2) => t().update(de$3(r2)).digest(), n3 = t();
  return e2.outputLen = n3.outputLen, e2.blockLen = n3.blockLen, e2.create = () => t(), e2;
}
function he$2(t = 32) {
  if (it$2 && typeof it$2.getRandomValues == "function") return it$2.getRandomValues(new Uint8Array(t));
  if (it$2 && typeof it$2.randomBytes == "function") return it$2.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function Cn$3(t, e2, n3, r2) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n3, r2);
  const o3 = BigInt(32), s2 = BigInt(4294967295), a2 = Number(n3 >> o3 & s2), u2 = Number(n3 & s2), i3 = r2 ? 4 : 0, D2 = r2 ? 0 : 4;
  t.setUint32(e2 + i3, a2, r2), t.setUint32(e2 + D2, u2, r2);
}
let An$2 = class An extends xn$3 {
  constructor(e2, n3, r2, o3) {
    super(), this.blockLen = e2, this.outputLen = n3, this.padOffset = r2, this.isLE = o3, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e2), this.view = _t$4(this.buffer);
  }
  update(e2) {
    De$3(this);
    const { view: n3, buffer: r2, blockLen: o3 } = this;
    e2 = de$3(e2);
    const s2 = e2.length;
    for (let a2 = 0; a2 < s2; ) {
      const u2 = Math.min(o3 - this.pos, s2 - a2);
      if (u2 === o3) {
        const i3 = _t$4(e2);
        for (; o3 <= s2 - a2; a2 += o3) this.process(i3, a2);
        continue;
      }
      r2.set(e2.subarray(a2, a2 + u2), this.pos), this.pos += u2, a2 += u2, this.pos === o3 && (this.process(n3, 0), this.pos = 0);
    }
    return this.length += e2.length, this.roundClean(), this;
  }
  digestInto(e2) {
    De$3(this), gn$3(e2, this), this.finished = true;
    const { buffer: n3, view: r2, blockLen: o3, isLE: s2 } = this;
    let { pos: a2 } = this;
    n3[a2++] = 128, this.buffer.subarray(a2).fill(0), this.padOffset > o3 - a2 && (this.process(r2, 0), a2 = 0);
    for (let l2 = a2; l2 < o3; l2++) n3[l2] = 0;
    Cn$3(r2, o3 - 8, BigInt(this.length * 8), s2), this.process(r2, 0);
    const u2 = _t$4(e2), i3 = this.outputLen;
    if (i3 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const D2 = i3 / 4, c2 = this.get();
    if (D2 > c2.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l2 = 0; l2 < D2; l2++) u2.setUint32(4 * l2, c2[l2], s2);
  }
  digest() {
    const { buffer: e2, outputLen: n3 } = this;
    this.digestInto(e2);
    const r2 = e2.slice(0, n3);
    return this.destroy(), r2;
  }
  _cloneInto(e2) {
    e2 || (e2 = new this.constructor()), e2.set(...this.get());
    const { blockLen: n3, buffer: r2, length: o3, finished: s2, destroyed: a2, pos: u2 } = this;
    return e2.length = o3, e2.pos = u2, e2.finished = s2, e2.destroyed = a2, o3 % n3 && e2.buffer.set(r2), e2;
  }
};
const wt$3 = BigInt(2 ** 32 - 1), St$4 = BigInt(32);
function le$4(t, e2 = false) {
  return e2 ? { h: Number(t & wt$3), l: Number(t >> St$4 & wt$3) } : { h: Number(t >> St$4 & wt$3) | 0, l: Number(t & wt$3) | 0 };
}
function mn$3(t, e2 = false) {
  let n3 = new Uint32Array(t.length), r2 = new Uint32Array(t.length);
  for (let o3 = 0; o3 < t.length; o3++) {
    const { h: s2, l: a2 } = le$4(t[o3], e2);
    [n3[o3], r2[o3]] = [s2, a2];
  }
  return [n3, r2];
}
const _n$3 = (t, e2) => BigInt(t >>> 0) << St$4 | BigInt(e2 >>> 0), Sn$2 = (t, e2, n3) => t >>> n3, vn$3 = (t, e2, n3) => t << 32 - n3 | e2 >>> n3, In$3 = (t, e2, n3) => t >>> n3 | e2 << 32 - n3, Un$3 = (t, e2, n3) => t << 32 - n3 | e2 >>> n3, Tn$3 = (t, e2, n3) => t << 64 - n3 | e2 >>> n3 - 32, Fn$3 = (t, e2, n3) => t >>> n3 - 32 | e2 << 64 - n3, Nn$2 = (t, e2) => e2, Ln$3 = (t, e2) => t, On$3 = (t, e2, n3) => t << n3 | e2 >>> 32 - n3, Hn$3 = (t, e2, n3) => e2 << n3 | t >>> 32 - n3, zn$3 = (t, e2, n3) => e2 << n3 - 32 | t >>> 64 - n3, Mn$3 = (t, e2, n3) => t << n3 - 32 | e2 >>> 64 - n3;
function qn$3(t, e2, n3, r2) {
  const o3 = (e2 >>> 0) + (r2 >>> 0);
  return { h: t + n3 + (o3 / 2 ** 32 | 0) | 0, l: o3 | 0 };
}
const $n$2 = (t, e2, n3) => (t >>> 0) + (e2 >>> 0) + (n3 >>> 0), kn$3 = (t, e2, n3, r2) => e2 + n3 + r2 + (t / 2 ** 32 | 0) | 0, Rn$3 = (t, e2, n3, r2) => (t >>> 0) + (e2 >>> 0) + (n3 >>> 0) + (r2 >>> 0), jn$3 = (t, e2, n3, r2, o3) => e2 + n3 + r2 + o3 + (t / 2 ** 32 | 0) | 0, Zn$3 = (t, e2, n3, r2, o3) => (t >>> 0) + (e2 >>> 0) + (n3 >>> 0) + (r2 >>> 0) + (o3 >>> 0), Gn$3 = (t, e2, n3, r2, o3, s2) => e2 + n3 + r2 + o3 + s2 + (t / 2 ** 32 | 0) | 0, x$7 = { fromBig: le$4, split: mn$3, toBig: _n$3, shrSH: Sn$2, shrSL: vn$3, rotrSH: In$3, rotrSL: Un$3, rotrBH: Tn$3, rotrBL: Fn$3, rotr32H: Nn$2, rotr32L: Ln$3, rotlSH: On$3, rotlSL: Hn$3, rotlBH: zn$3, rotlBL: Mn$3, add: qn$3, add3L: $n$2, add3H: kn$3, add4L: Rn$3, add4H: jn$3, add5H: Gn$3, add5L: Zn$3 }, [Vn$3, Yn$3] = (() => x$7.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))))(), P$4 = new Uint32Array(80), Q$3 = new Uint32Array(80);
let Jn$3 = class Jn extends An$2 {
  constructor() {
    super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e2, Al: n3, Bh: r2, Bl: o3, Ch: s2, Cl: a2, Dh: u2, Dl: i3, Eh: D2, El: c2, Fh: l2, Fl: p2, Gh: w2, Gl: h4, Hh: g2, Hl: S3 } = this;
    return [e2, n3, r2, o3, s2, a2, u2, i3, D2, c2, l2, p2, w2, h4, g2, S3];
  }
  set(e2, n3, r2, o3, s2, a2, u2, i3, D2, c2, l2, p2, w2, h4, g2, S3) {
    this.Ah = e2 | 0, this.Al = n3 | 0, this.Bh = r2 | 0, this.Bl = o3 | 0, this.Ch = s2 | 0, this.Cl = a2 | 0, this.Dh = u2 | 0, this.Dl = i3 | 0, this.Eh = D2 | 0, this.El = c2 | 0, this.Fh = l2 | 0, this.Fl = p2 | 0, this.Gh = w2 | 0, this.Gl = h4 | 0, this.Hh = g2 | 0, this.Hl = S3 | 0;
  }
  process(e2, n3) {
    for (let d4 = 0; d4 < 16; d4++, n3 += 4) P$4[d4] = e2.getUint32(n3), Q$3[d4] = e2.getUint32(n3 += 4);
    for (let d4 = 16; d4 < 80; d4++) {
      const m4 = P$4[d4 - 15] | 0, F2 = Q$3[d4 - 15] | 0, q2 = x$7.rotrSH(m4, F2, 1) ^ x$7.rotrSH(m4, F2, 8) ^ x$7.shrSH(m4, F2, 7), z2 = x$7.rotrSL(m4, F2, 1) ^ x$7.rotrSL(m4, F2, 8) ^ x$7.shrSL(m4, F2, 7), I3 = P$4[d4 - 2] | 0, O4 = Q$3[d4 - 2] | 0, ot2 = x$7.rotrSH(I3, O4, 19) ^ x$7.rotrBH(I3, O4, 61) ^ x$7.shrSH(I3, O4, 6), tt2 = x$7.rotrSL(I3, O4, 19) ^ x$7.rotrBL(I3, O4, 61) ^ x$7.shrSL(I3, O4, 6), st2 = x$7.add4L(z2, tt2, Q$3[d4 - 7], Q$3[d4 - 16]), at2 = x$7.add4H(st2, q2, ot2, P$4[d4 - 7], P$4[d4 - 16]);
      P$4[d4] = at2 | 0, Q$3[d4] = st2 | 0;
    }
    let { Ah: r2, Al: o3, Bh: s2, Bl: a2, Ch: u2, Cl: i3, Dh: D2, Dl: c2, Eh: l2, El: p2, Fh: w2, Fl: h4, Gh: g2, Gl: S3, Hh: v2, Hl: L3 } = this;
    for (let d4 = 0; d4 < 80; d4++) {
      const m4 = x$7.rotrSH(l2, p2, 14) ^ x$7.rotrSH(l2, p2, 18) ^ x$7.rotrBH(l2, p2, 41), F2 = x$7.rotrSL(l2, p2, 14) ^ x$7.rotrSL(l2, p2, 18) ^ x$7.rotrBL(l2, p2, 41), q2 = l2 & w2 ^ ~l2 & g2, z2 = p2 & h4 ^ ~p2 & S3, I3 = x$7.add5L(L3, F2, z2, Yn$3[d4], Q$3[d4]), O4 = x$7.add5H(I3, v2, m4, q2, Vn$3[d4], P$4[d4]), ot2 = I3 | 0, tt2 = x$7.rotrSH(r2, o3, 28) ^ x$7.rotrBH(r2, o3, 34) ^ x$7.rotrBH(r2, o3, 39), st2 = x$7.rotrSL(r2, o3, 28) ^ x$7.rotrBL(r2, o3, 34) ^ x$7.rotrBL(r2, o3, 39), at2 = r2 & s2 ^ r2 & u2 ^ s2 & u2, Ct2 = o3 & a2 ^ o3 & i3 ^ a2 & i3;
      v2 = g2 | 0, L3 = S3 | 0, g2 = w2 | 0, S3 = h4 | 0, w2 = l2 | 0, h4 = p2 | 0, { h: l2, l: p2 } = x$7.add(D2 | 0, c2 | 0, O4 | 0, ot2 | 0), D2 = u2 | 0, c2 = i3 | 0, u2 = s2 | 0, i3 = a2 | 0, s2 = r2 | 0, a2 = o3 | 0;
      const At2 = x$7.add3L(ot2, st2, Ct2);
      r2 = x$7.add3H(At2, O4, tt2, at2), o3 = At2 | 0;
    }
    ({ h: r2, l: o3 } = x$7.add(this.Ah | 0, this.Al | 0, r2 | 0, o3 | 0)), { h: s2, l: a2 } = x$7.add(this.Bh | 0, this.Bl | 0, s2 | 0, a2 | 0), { h: u2, l: i3 } = x$7.add(this.Ch | 0, this.Cl | 0, u2 | 0, i3 | 0), { h: D2, l: c2 } = x$7.add(this.Dh | 0, this.Dl | 0, D2 | 0, c2 | 0), { h: l2, l: p2 } = x$7.add(this.Eh | 0, this.El | 0, l2 | 0, p2 | 0), { h: w2, l: h4 } = x$7.add(this.Fh | 0, this.Fl | 0, w2 | 0, h4 | 0), { h: g2, l: S3 } = x$7.add(this.Gh | 0, this.Gl | 0, g2 | 0, S3 | 0), { h: v2, l: L3 } = x$7.add(this.Hh | 0, this.Hl | 0, v2 | 0, L3 | 0), this.set(r2, o3, s2, a2, u2, i3, D2, c2, l2, p2, w2, h4, g2, S3, v2, L3);
  }
  roundClean() {
    P$4.fill(0), Q$3.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
const Kn$3 = Bn$3(() => new Jn$3());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const vt$3 = BigInt(0), be$2 = BigInt(1), Wn$3 = BigInt(2);
function It$3(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ut$3(t) {
  if (!It$3(t)) throw new Error("Uint8Array expected");
}
function Tt$3(t, e2) {
  if (typeof e2 != "boolean") throw new Error(t + " boolean expected, got " + e2);
}
const Xn$3 = Array.from({ length: 256 }, (t, e2) => e2.toString(16).padStart(2, "0"));
function Ft$3(t) {
  Ut$3(t);
  let e2 = "";
  for (let n3 = 0; n3 < t.length; n3++) e2 += Xn$3[t[n3]];
  return e2;
}
function pe$2(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? vt$3 : BigInt("0x" + t);
}
const K$2 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function we$2(t) {
  if (t >= K$2._0 && t <= K$2._9) return t - K$2._0;
  if (t >= K$2.A && t <= K$2.F) return t - (K$2.A - 10);
  if (t >= K$2.a && t <= K$2.f) return t - (K$2.a - 10);
}
function Ee$3(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e2 = t.length, n3 = e2 / 2;
  if (e2 % 2) throw new Error("hex string expected, got unpadded hex of length " + e2);
  const r2 = new Uint8Array(n3);
  for (let o3 = 0, s2 = 0; o3 < n3; o3++, s2 += 2) {
    const a2 = we$2(t.charCodeAt(s2)), u2 = we$2(t.charCodeAt(s2 + 1));
    if (a2 === void 0 || u2 === void 0) {
      const i3 = t[s2] + t[s2 + 1];
      throw new Error('hex string expected, got non-hex character "' + i3 + '" at index ' + s2);
    }
    r2[o3] = a2 * 16 + u2;
  }
  return r2;
}
function Pn$2(t) {
  return pe$2(Ft$3(t));
}
function Et$4(t) {
  return Ut$3(t), pe$2(Ft$3(Uint8Array.from(t).reverse()));
}
function ge(t, e2) {
  return Ee$3(t.toString(16).padStart(e2 * 2, "0"));
}
function Nt$3(t, e2) {
  return ge(t, e2).reverse();
}
function W$1(t, e2, n3) {
  let r2;
  if (typeof e2 == "string") try {
    r2 = Ee$3(e2);
  } catch (s2) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + s2);
  }
  else if (It$3(e2)) r2 = Uint8Array.from(e2);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o3 = r2.length;
  if (typeof n3 == "number" && o3 !== n3) throw new Error(t + " of length " + n3 + " expected, got " + o3);
  return r2;
}
function ye$1(...t) {
  let e2 = 0;
  for (let r2 = 0; r2 < t.length; r2++) {
    const o3 = t[r2];
    Ut$3(o3), e2 += o3.length;
  }
  const n3 = new Uint8Array(e2);
  for (let r2 = 0, o3 = 0; r2 < t.length; r2++) {
    const s2 = t[r2];
    n3.set(s2, o3), o3 += s2.length;
  }
  return n3;
}
const Lt$3 = (t) => typeof t == "bigint" && vt$3 <= t;
function Qn$3(t, e2, n3) {
  return Lt$3(t) && Lt$3(e2) && Lt$3(n3) && e2 <= t && t < n3;
}
function ft$2(t, e2, n3, r2) {
  if (!Qn$3(e2, n3, r2)) throw new Error("expected valid " + t + ": " + n3 + " <= n < " + r2 + ", got " + e2);
}
function tr$3(t) {
  let e2;
  for (e2 = 0; t > vt$3; t >>= be$2, e2 += 1) ;
  return e2;
}
const er$3 = (t) => (Wn$3 << BigInt(t - 1)) - be$2, nr$3 = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || It$3(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e2) => e2.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function Ot$3(t, e2, n3 = {}) {
  const r2 = (o3, s2, a2) => {
    const u2 = nr$3[s2];
    if (typeof u2 != "function") throw new Error("invalid validator function");
    const i3 = t[o3];
    if (!(a2 && i3 === void 0) && !u2(i3, t)) throw new Error("param " + String(o3) + " is invalid. Expected " + s2 + ", got " + i3);
  };
  for (const [o3, s2] of Object.entries(e2)) r2(o3, s2, false);
  for (const [o3, s2] of Object.entries(n3)) r2(o3, s2, true);
  return t;
}
function xe$3(t) {
  const e2 = /* @__PURE__ */ new WeakMap();
  return (n3, ...r2) => {
    const o3 = e2.get(n3);
    if (o3 !== void 0) return o3;
    const s2 = t(n3, ...r2);
    return e2.set(n3, s2), s2;
  };
}
const M$5 = BigInt(0), N$4 = BigInt(1), nt$1 = BigInt(2), rr$3 = BigInt(3), Ht$2 = BigInt(4), Be$2 = BigInt(5), Ce$2 = BigInt(8);
function H$3(t, e2) {
  const n3 = t % e2;
  return n3 >= M$5 ? n3 : e2 + n3;
}
function or$4(t, e2, n3) {
  if (e2 < M$5) throw new Error("invalid exponent, negatives unsupported");
  if (n3 <= M$5) throw new Error("invalid modulus");
  if (n3 === N$4) return M$5;
  let r2 = N$4;
  for (; e2 > M$5; ) e2 & N$4 && (r2 = r2 * t % n3), t = t * t % n3, e2 >>= N$4;
  return r2;
}
function J$4(t, e2, n3) {
  let r2 = t;
  for (; e2-- > M$5; ) r2 *= r2, r2 %= n3;
  return r2;
}
function Ae$3(t, e2) {
  if (t === M$5) throw new Error("invert: expected non-zero number");
  if (e2 <= M$5) throw new Error("invert: expected positive modulus, got " + e2);
  let n3 = H$3(t, e2), r2 = e2, o3 = M$5, s2 = N$4;
  for (; n3 !== M$5; ) {
    const u2 = r2 / n3, i3 = r2 % n3, D2 = o3 - s2 * u2;
    r2 = n3, n3 = i3, o3 = s2, s2 = D2;
  }
  if (r2 !== N$4) throw new Error("invert: does not exist");
  return H$3(o3, e2);
}
function sr$3(t) {
  const e2 = (t - N$4) / nt$1;
  let n3, r2, o3;
  for (n3 = t - N$4, r2 = 0; n3 % nt$1 === M$5; n3 /= nt$1, r2++) ;
  for (o3 = nt$1; o3 < t && or$4(o3, e2, t) !== t - N$4; o3++) if (o3 > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r2 === 1) {
    const a2 = (t + N$4) / Ht$2;
    return function(i3, D2) {
      const c2 = i3.pow(D2, a2);
      if (!i3.eql(i3.sqr(c2), D2)) throw new Error("Cannot find square root");
      return c2;
    };
  }
  const s2 = (n3 + N$4) / nt$1;
  return function(u2, i3) {
    if (u2.pow(i3, e2) === u2.neg(u2.ONE)) throw new Error("Cannot find square root");
    let D2 = r2, c2 = u2.pow(u2.mul(u2.ONE, o3), n3), l2 = u2.pow(i3, s2), p2 = u2.pow(i3, n3);
    for (; !u2.eql(p2, u2.ONE); ) {
      if (u2.eql(p2, u2.ZERO)) return u2.ZERO;
      let w2 = 1;
      for (let g2 = u2.sqr(p2); w2 < D2 && !u2.eql(g2, u2.ONE); w2++) g2 = u2.sqr(g2);
      const h4 = u2.pow(c2, N$4 << BigInt(D2 - w2 - 1));
      c2 = u2.sqr(h4), l2 = u2.mul(l2, h4), p2 = u2.mul(p2, c2), D2 = w2;
    }
    return l2;
  };
}
function ir$3(t) {
  if (t % Ht$2 === rr$3) {
    const e2 = (t + N$4) / Ht$2;
    return function(r2, o3) {
      const s2 = r2.pow(o3, e2);
      if (!r2.eql(r2.sqr(s2), o3)) throw new Error("Cannot find square root");
      return s2;
    };
  }
  if (t % Ce$2 === Be$2) {
    const e2 = (t - Be$2) / Ce$2;
    return function(r2, o3) {
      const s2 = r2.mul(o3, nt$1), a2 = r2.pow(s2, e2), u2 = r2.mul(o3, a2), i3 = r2.mul(r2.mul(u2, nt$1), a2), D2 = r2.mul(u2, r2.sub(i3, r2.ONE));
      if (!r2.eql(r2.sqr(D2), o3)) throw new Error("Cannot find square root");
      return D2;
    };
  }
  return sr$3(t);
}
const ur$2 = (t, e2) => (H$3(t, e2) & N$4) === N$4, cr$3 = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function ar$3(t) {
  const e2 = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n3 = cr$3.reduce((r2, o3) => (r2[o3] = "function", r2), e2);
  return Ot$3(t, n3);
}
function fr$2(t, e2, n3) {
  if (n3 < M$5) throw new Error("invalid exponent, negatives unsupported");
  if (n3 === M$5) return t.ONE;
  if (n3 === N$4) return e2;
  let r2 = t.ONE, o3 = e2;
  for (; n3 > M$5; ) n3 & N$4 && (r2 = t.mul(r2, o3)), o3 = t.sqr(o3), n3 >>= N$4;
  return r2;
}
function Dr$2(t, e2) {
  const n3 = new Array(e2.length), r2 = e2.reduce((s2, a2, u2) => t.is0(a2) ? s2 : (n3[u2] = s2, t.mul(s2, a2)), t.ONE), o3 = t.inv(r2);
  return e2.reduceRight((s2, a2, u2) => t.is0(a2) ? s2 : (n3[u2] = t.mul(s2, n3[u2]), t.mul(s2, a2)), o3), n3;
}
function me$3(t, e2) {
  const n3 = e2 !== void 0 ? e2 : t.toString(2).length, r2 = Math.ceil(n3 / 8);
  return { nBitLength: n3, nByteLength: r2 };
}
function _e$4(t, e2, n3 = false, r2 = {}) {
  if (t <= M$5) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: o3, nByteLength: s2 } = me$3(t, e2);
  if (s2 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a2;
  const u2 = Object.freeze({ ORDER: t, isLE: n3, BITS: o3, BYTES: s2, MASK: er$3(o3), ZERO: M$5, ONE: N$4, create: (i3) => H$3(i3, t), isValid: (i3) => {
    if (typeof i3 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i3);
    return M$5 <= i3 && i3 < t;
  }, is0: (i3) => i3 === M$5, isOdd: (i3) => (i3 & N$4) === N$4, neg: (i3) => H$3(-i3, t), eql: (i3, D2) => i3 === D2, sqr: (i3) => H$3(i3 * i3, t), add: (i3, D2) => H$3(i3 + D2, t), sub: (i3, D2) => H$3(i3 - D2, t), mul: (i3, D2) => H$3(i3 * D2, t), pow: (i3, D2) => fr$2(u2, i3, D2), div: (i3, D2) => H$3(i3 * Ae$3(D2, t), t), sqrN: (i3) => i3 * i3, addN: (i3, D2) => i3 + D2, subN: (i3, D2) => i3 - D2, mulN: (i3, D2) => i3 * D2, inv: (i3) => Ae$3(i3, t), sqrt: r2.sqrt || ((i3) => (a2 || (a2 = ir$3(t)), a2(u2, i3))), invertBatch: (i3) => Dr$2(u2, i3), cmov: (i3, D2, c2) => c2 ? D2 : i3, toBytes: (i3) => n3 ? Nt$3(i3, s2) : ge(i3, s2), fromBytes: (i3) => {
    if (i3.length !== s2) throw new Error("Field.fromBytes: expected " + s2 + " bytes, got " + i3.length);
    return n3 ? Et$4(i3) : Pn$2(i3);
  } });
  return Object.freeze(u2);
}
const Se$3 = BigInt(0), gt$3 = BigInt(1);
function zt$3(t, e2) {
  const n3 = e2.negate();
  return t ? n3 : e2;
}
function ve$2(t, e2) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e2) throw new Error("invalid window size, expected [1.." + e2 + "], got W=" + t);
}
function Mt$2(t, e2) {
  ve$2(t, e2);
  const n3 = Math.ceil(e2 / t) + 1, r2 = 2 ** (t - 1);
  return { windows: n3, windowSize: r2 };
}
function dr$3(t, e2) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n3, r2) => {
    if (!(n3 instanceof e2)) throw new Error("invalid point at index " + r2);
  });
}
function hr$3(t, e2) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n3, r2) => {
    if (!e2.isValid(n3)) throw new Error("invalid scalar at index " + r2);
  });
}
const qt$2 = /* @__PURE__ */ new WeakMap(), Ie$2 = /* @__PURE__ */ new WeakMap();
function $t$1(t) {
  return Ie$2.get(t) || 1;
}
function lr$3(t, e2) {
  return { constTimeNegate: zt$3, hasPrecomputes(n3) {
    return $t$1(n3) !== 1;
  }, unsafeLadder(n3, r2, o3 = t.ZERO) {
    let s2 = n3;
    for (; r2 > Se$3; ) r2 & gt$3 && (o3 = o3.add(s2)), s2 = s2.double(), r2 >>= gt$3;
    return o3;
  }, precomputeWindow(n3, r2) {
    const { windows: o3, windowSize: s2 } = Mt$2(r2, e2), a2 = [];
    let u2 = n3, i3 = u2;
    for (let D2 = 0; D2 < o3; D2++) {
      i3 = u2, a2.push(i3);
      for (let c2 = 1; c2 < s2; c2++) i3 = i3.add(u2), a2.push(i3);
      u2 = i3.double();
    }
    return a2;
  }, wNAF(n3, r2, o3) {
    const { windows: s2, windowSize: a2 } = Mt$2(n3, e2);
    let u2 = t.ZERO, i3 = t.BASE;
    const D2 = BigInt(2 ** n3 - 1), c2 = 2 ** n3, l2 = BigInt(n3);
    for (let p2 = 0; p2 < s2; p2++) {
      const w2 = p2 * a2;
      let h4 = Number(o3 & D2);
      o3 >>= l2, h4 > a2 && (h4 -= c2, o3 += gt$3);
      const g2 = w2, S3 = w2 + Math.abs(h4) - 1, v2 = p2 % 2 !== 0, L3 = h4 < 0;
      h4 === 0 ? i3 = i3.add(zt$3(v2, r2[g2])) : u2 = u2.add(zt$3(L3, r2[S3]));
    }
    return { p: u2, f: i3 };
  }, wNAFUnsafe(n3, r2, o3, s2 = t.ZERO) {
    const { windows: a2, windowSize: u2 } = Mt$2(n3, e2), i3 = BigInt(2 ** n3 - 1), D2 = 2 ** n3, c2 = BigInt(n3);
    for (let l2 = 0; l2 < a2; l2++) {
      const p2 = l2 * u2;
      if (o3 === Se$3) break;
      let w2 = Number(o3 & i3);
      if (o3 >>= c2, w2 > u2 && (w2 -= D2, o3 += gt$3), w2 === 0) continue;
      let h4 = r2[p2 + Math.abs(w2) - 1];
      w2 < 0 && (h4 = h4.negate()), s2 = s2.add(h4);
    }
    return s2;
  }, getPrecomputes(n3, r2, o3) {
    let s2 = qt$2.get(r2);
    return s2 || (s2 = this.precomputeWindow(r2, n3), n3 !== 1 && qt$2.set(r2, o3(s2))), s2;
  }, wNAFCached(n3, r2, o3) {
    const s2 = $t$1(n3);
    return this.wNAF(s2, this.getPrecomputes(s2, n3, o3), r2);
  }, wNAFCachedUnsafe(n3, r2, o3, s2) {
    const a2 = $t$1(n3);
    return a2 === 1 ? this.unsafeLadder(n3, r2, s2) : this.wNAFUnsafe(a2, this.getPrecomputes(a2, n3, o3), r2, s2);
  }, setWindowSize(n3, r2) {
    ve$2(r2, e2), Ie$2.set(n3, r2), qt$2.delete(n3);
  } };
}
function br$3(t, e2, n3, r2) {
  if (dr$3(n3, t), hr$3(r2, e2), n3.length !== r2.length) throw new Error("arrays of points and scalars must have equal length");
  const o3 = t.ZERO, s2 = tr$3(BigInt(n3.length)), a2 = s2 > 12 ? s2 - 3 : s2 > 4 ? s2 - 2 : s2 ? 2 : 1, u2 = (1 << a2) - 1, i3 = new Array(u2 + 1).fill(o3), D2 = Math.floor((e2.BITS - 1) / a2) * a2;
  let c2 = o3;
  for (let l2 = D2; l2 >= 0; l2 -= a2) {
    i3.fill(o3);
    for (let w2 = 0; w2 < r2.length; w2++) {
      const h4 = r2[w2], g2 = Number(h4 >> BigInt(l2) & BigInt(u2));
      i3[g2] = i3[g2].add(n3[w2]);
    }
    let p2 = o3;
    for (let w2 = i3.length - 1, h4 = o3; w2 > 0; w2--) h4 = h4.add(i3[w2]), p2 = p2.add(h4);
    if (c2 = c2.add(p2), l2 !== 0) for (let w2 = 0; w2 < a2; w2++) c2 = c2.double();
  }
  return c2;
}
function pr$3(t) {
  return ar$3(t.Fp), Ot$3(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...me$3(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
const G$2 = BigInt(0), j$5 = BigInt(1), yt$2 = BigInt(2), wr$3 = BigInt(8), Er$3 = { zip215: true };
function gr$3(t) {
  const e2 = pr$3(t);
  return Ot$3(t, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...e2 });
}
function yr$3(t) {
  const e2 = gr$3(t), { Fp: n3, n: r2, prehash: o3, hash: s2, randomBytes: a2, nByteLength: u2, h: i3 } = e2, D2 = yt$2 << BigInt(u2 * 8) - j$5, c2 = n3.create, l2 = _e$4(e2.n, e2.nBitLength), p2 = e2.uvRatio || ((y3, f5) => {
    try {
      return { isValid: true, value: n3.sqrt(y3 * n3.inv(f5)) };
    } catch {
      return { isValid: false, value: G$2 };
    }
  }), w2 = e2.adjustScalarBytes || ((y3) => y3), h4 = e2.domain || ((y3, f5, b2) => {
    if (Tt$3("phflag", b2), f5.length || b2) throw new Error("Contexts/pre-hash are not supported");
    return y3;
  });
  function g2(y3, f5) {
    ft$2("coordinate " + y3, f5, G$2, D2);
  }
  function S3(y3) {
    if (!(y3 instanceof d4)) throw new Error("ExtendedPoint expected");
  }
  const v2 = xe$3((y3, f5) => {
    const { ex: b2, ey: E2, ez: B3 } = y3, C2 = y3.is0();
    f5 == null && (f5 = C2 ? wr$3 : n3.inv(B3));
    const A2 = c2(b2 * f5), U2 = c2(E2 * f5), _3 = c2(B3 * f5);
    if (C2) return { x: G$2, y: j$5 };
    if (_3 !== j$5) throw new Error("invZ was invalid");
    return { x: A2, y: U2 };
  }), L3 = xe$3((y3) => {
    const { a: f5, d: b2 } = e2;
    if (y3.is0()) throw new Error("bad point: ZERO");
    const { ex: E2, ey: B3, ez: C2, et: A2 } = y3, U2 = c2(E2 * E2), _3 = c2(B3 * B3), T2 = c2(C2 * C2), $2 = c2(T2 * T2), R3 = c2(U2 * f5), V3 = c2(T2 * c2(R3 + _3)), Y2 = c2($2 + c2(b2 * c2(U2 * _3)));
    if (V3 !== Y2) throw new Error("bad point: equation left != right (1)");
    const Z2 = c2(E2 * B3), X2 = c2(C2 * A2);
    if (Z2 !== X2) throw new Error("bad point: equation left != right (2)");
    return true;
  });
  class d4 {
    constructor(f5, b2, E2, B3) {
      this.ex = f5, this.ey = b2, this.ez = E2, this.et = B3, g2("x", f5), g2("y", b2), g2("z", E2), g2("t", B3), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(f5) {
      if (f5 instanceof d4) throw new Error("extended point not allowed");
      const { x: b2, y: E2 } = f5 || {};
      return g2("x", b2), g2("y", E2), new d4(b2, E2, j$5, c2(b2 * E2));
    }
    static normalizeZ(f5) {
      const b2 = n3.invertBatch(f5.map((E2) => E2.ez));
      return f5.map((E2, B3) => E2.toAffine(b2[B3])).map(d4.fromAffine);
    }
    static msm(f5, b2) {
      return br$3(d4, l2, f5, b2);
    }
    _setWindowSize(f5) {
      q2.setWindowSize(this, f5);
    }
    assertValidity() {
      L3(this);
    }
    equals(f5) {
      S3(f5);
      const { ex: b2, ey: E2, ez: B3 } = this, { ex: C2, ey: A2, ez: U2 } = f5, _3 = c2(b2 * U2), T2 = c2(C2 * B3), $2 = c2(E2 * U2), R3 = c2(A2 * B3);
      return _3 === T2 && $2 === R3;
    }
    is0() {
      return this.equals(d4.ZERO);
    }
    negate() {
      return new d4(c2(-this.ex), this.ey, this.ez, c2(-this.et));
    }
    double() {
      const { a: f5 } = e2, { ex: b2, ey: E2, ez: B3 } = this, C2 = c2(b2 * b2), A2 = c2(E2 * E2), U2 = c2(yt$2 * c2(B3 * B3)), _3 = c2(f5 * C2), T2 = b2 + E2, $2 = c2(c2(T2 * T2) - C2 - A2), R3 = _3 + A2, V3 = R3 - U2, Y2 = _3 - A2, Z2 = c2($2 * V3), X2 = c2(R3 * Y2), et2 = c2($2 * Y2), pt2 = c2(V3 * R3);
      return new d4(Z2, X2, pt2, et2);
    }
    add(f5) {
      S3(f5);
      const { a: b2, d: E2 } = e2, { ex: B3, ey: C2, ez: A2, et: U2 } = this, { ex: _3, ey: T2, ez: $2, et: R3 } = f5;
      if (b2 === BigInt(-1)) {
        const re2 = c2((C2 - B3) * (T2 + _3)), oe2 = c2((C2 + B3) * (T2 - _3)), mt2 = c2(oe2 - re2);
        if (mt2 === G$2) return this.double();
        const se2 = c2(A2 * yt$2 * R3), ie2 = c2(U2 * yt$2 * $2), ue2 = ie2 + se2, ce2 = oe2 + re2, ae2 = ie2 - se2, Dn2 = c2(ue2 * mt2), dn2 = c2(ce2 * ae2), hn3 = c2(ue2 * ae2), ln2 = c2(mt2 * ce2);
        return new d4(Dn2, dn2, ln2, hn3);
      }
      const V3 = c2(B3 * _3), Y2 = c2(C2 * T2), Z2 = c2(U2 * E2 * R3), X2 = c2(A2 * $2), et2 = c2((B3 + C2) * (_3 + T2) - V3 - Y2), pt2 = X2 - Z2, ee2 = X2 + Z2, ne2 = c2(Y2 - b2 * V3), un2 = c2(et2 * pt2), cn3 = c2(ee2 * ne2), an2 = c2(et2 * ne2), fn2 = c2(pt2 * ee2);
      return new d4(un2, cn3, fn2, an2);
    }
    subtract(f5) {
      return this.add(f5.negate());
    }
    wNAF(f5) {
      return q2.wNAFCached(this, f5, d4.normalizeZ);
    }
    multiply(f5) {
      const b2 = f5;
      ft$2("scalar", b2, j$5, r2);
      const { p: E2, f: B3 } = this.wNAF(b2);
      return d4.normalizeZ([E2, B3])[0];
    }
    multiplyUnsafe(f5, b2 = d4.ZERO) {
      const E2 = f5;
      return ft$2("scalar", E2, G$2, r2), E2 === G$2 ? F2 : this.is0() || E2 === j$5 ? this : q2.wNAFCachedUnsafe(this, E2, d4.normalizeZ, b2);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i3).is0();
    }
    isTorsionFree() {
      return q2.unsafeLadder(this, r2).is0();
    }
    toAffine(f5) {
      return v2(this, f5);
    }
    clearCofactor() {
      const { h: f5 } = e2;
      return f5 === j$5 ? this : this.multiplyUnsafe(f5);
    }
    static fromHex(f5, b2 = false) {
      const { d: E2, a: B3 } = e2, C2 = n3.BYTES;
      f5 = W$1("pointHex", f5, C2), Tt$3("zip215", b2);
      const A2 = f5.slice(), U2 = f5[C2 - 1];
      A2[C2 - 1] = U2 & -129;
      const _3 = Et$4(A2), T2 = b2 ? D2 : n3.ORDER;
      ft$2("pointHex.y", _3, G$2, T2);
      const $2 = c2(_3 * _3), R3 = c2($2 - j$5), V3 = c2(E2 * $2 - B3);
      let { isValid: Y2, value: Z2 } = p2(R3, V3);
      if (!Y2) throw new Error("Point.fromHex: invalid y coordinate");
      const X2 = (Z2 & j$5) === j$5, et2 = (U2 & 128) !== 0;
      if (!b2 && Z2 === G$2 && et2) throw new Error("Point.fromHex: x=0 and x_0=1");
      return et2 !== X2 && (Z2 = c2(-Z2)), d4.fromAffine({ x: Z2, y: _3 });
    }
    static fromPrivateKey(f5) {
      return O4(f5).point;
    }
    toRawBytes() {
      const { x: f5, y: b2 } = this.toAffine(), E2 = Nt$3(b2, n3.BYTES);
      return E2[E2.length - 1] |= f5 & j$5 ? 128 : 0, E2;
    }
    toHex() {
      return Ft$3(this.toRawBytes());
    }
  }
  d4.BASE = new d4(e2.Gx, e2.Gy, j$5, c2(e2.Gx * e2.Gy)), d4.ZERO = new d4(G$2, j$5, j$5, G$2);
  const { BASE: m4, ZERO: F2 } = d4, q2 = lr$3(d4, u2 * 8);
  function z2(y3) {
    return H$3(y3, r2);
  }
  function I3(y3) {
    return z2(Et$4(y3));
  }
  function O4(y3) {
    const f5 = n3.BYTES;
    y3 = W$1("private key", y3, f5);
    const b2 = W$1("hashed private key", s2(y3), 2 * f5), E2 = w2(b2.slice(0, f5)), B3 = b2.slice(f5, 2 * f5), C2 = I3(E2), A2 = m4.multiply(C2), U2 = A2.toRawBytes();
    return { head: E2, prefix: B3, scalar: C2, point: A2, pointBytes: U2 };
  }
  function ot2(y3) {
    return O4(y3).pointBytes;
  }
  function tt2(y3 = new Uint8Array(), ...f5) {
    const b2 = ye$1(...f5);
    return I3(s2(h4(b2, W$1("context", y3), !!o3)));
  }
  function st2(y3, f5, b2 = {}) {
    y3 = W$1("message", y3), o3 && (y3 = o3(y3));
    const { prefix: E2, scalar: B3, pointBytes: C2 } = O4(f5), A2 = tt2(b2.context, E2, y3), U2 = m4.multiply(A2).toRawBytes(), _3 = tt2(b2.context, U2, C2, y3), T2 = z2(A2 + _3 * B3);
    ft$2("signature.s", T2, G$2, r2);
    const $2 = ye$1(U2, Nt$3(T2, n3.BYTES));
    return W$1("result", $2, n3.BYTES * 2);
  }
  const at2 = Er$3;
  function Ct2(y3, f5, b2, E2 = at2) {
    const { context: B3, zip215: C2 } = E2, A2 = n3.BYTES;
    y3 = W$1("signature", y3, 2 * A2), f5 = W$1("message", f5), b2 = W$1("publicKey", b2, A2), C2 !== void 0 && Tt$3("zip215", C2), o3 && (f5 = o3(f5));
    const U2 = Et$4(y3.slice(A2, 2 * A2));
    let _3, T2, $2;
    try {
      _3 = d4.fromHex(b2, C2), T2 = d4.fromHex(y3.slice(0, A2), C2), $2 = m4.multiplyUnsafe(U2);
    } catch {
      return false;
    }
    if (!C2 && _3.isSmallOrder()) return false;
    const R3 = tt2(B3, T2.toRawBytes(), _3.toRawBytes(), f5);
    return T2.add(_3.multiplyUnsafe(R3)).subtract($2).clearCofactor().equals(d4.ZERO);
  }
  return m4._setWindowSize(8), { CURVE: e2, getPublicKey: ot2, sign: st2, verify: Ct2, ExtendedPoint: d4, utils: { getExtendedPublicKey: O4, randomPrivateKey: () => a2(n3.BYTES), precompute(y3 = 8, f5 = d4.BASE) {
    return f5._setWindowSize(y3), f5.multiply(BigInt(3)), f5;
  } } };
}
BigInt(0), BigInt(1);
const kt$2 = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Ue$4 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const xr$3 = BigInt(1), Te$2 = BigInt(2);
BigInt(3);
const Br$2 = BigInt(5), Cr$2 = BigInt(8);
function Ar$3(t) {
  const e2 = BigInt(10), n3 = BigInt(20), r2 = BigInt(40), o3 = BigInt(80), s2 = kt$2, u2 = t * t % s2 * t % s2, i3 = J$4(u2, Te$2, s2) * u2 % s2, D2 = J$4(i3, xr$3, s2) * t % s2, c2 = J$4(D2, Br$2, s2) * D2 % s2, l2 = J$4(c2, e2, s2) * c2 % s2, p2 = J$4(l2, n3, s2) * l2 % s2, w2 = J$4(p2, r2, s2) * p2 % s2, h4 = J$4(w2, o3, s2) * w2 % s2, g2 = J$4(h4, o3, s2) * w2 % s2, S3 = J$4(g2, e2, s2) * c2 % s2;
  return { pow_p_5_8: J$4(S3, Te$2, s2) * t % s2, b2: u2 };
}
function mr$3(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function _r$3(t, e2) {
  const n3 = kt$2, r2 = H$3(e2 * e2 * e2, n3), o3 = H$3(r2 * r2 * e2, n3), s2 = Ar$3(t * o3).pow_p_5_8;
  let a2 = H$3(t * r2 * s2, n3);
  const u2 = H$3(e2 * a2 * a2, n3), i3 = a2, D2 = H$3(a2 * Ue$4, n3), c2 = u2 === t, l2 = u2 === H$3(-t, n3), p2 = u2 === H$3(-t * Ue$4, n3);
  return c2 && (a2 = i3), (l2 || p2) && (a2 = D2), ur$2(a2, n3) && (a2 = H$3(-a2, n3)), { isValid: c2 || l2, value: a2 };
}
const Sr$3 = (() => _e$4(kt$2, void 0, true))(), vr$3 = (() => ({ a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: Sr$3, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: Cr$2, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: Kn$3, randomBytes: he$2, adjustScalarBytes: mr$3, uvRatio: _r$3 }))(), Rt$4 = (() => yr$3(vr$3))(), jt$2 = "EdDSA", Zt$2 = "JWT", ut$3 = ".", Dt$1 = "base64url", Gt$3 = "utf8", xt$3 = "utf8", Vt$2 = ":", Yt$3 = "did", Jt$3 = "key", dt$3 = "base58btc", Kt$2 = "z", Wt$3 = "K36", Ne$3 = 32;
function Xt$2(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Le$4(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt$2(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Oe$3(t, e2) {
  e2 || (e2 = t.reduce((o3, s2) => o3 + s2.length, 0));
  const n3 = Le$4(e2);
  let r2 = 0;
  for (const o3 of t) n3.set(o3, r2), r2 += o3.length;
  return Xt$2(n3);
}
function Ir$3(t, e2) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var n3 = new Uint8Array(256), r2 = 0; r2 < n3.length; r2++) n3[r2] = 255;
  for (var o3 = 0; o3 < t.length; o3++) {
    var s2 = t.charAt(o3), a2 = s2.charCodeAt(0);
    if (n3[a2] !== 255) throw new TypeError(s2 + " is ambiguous");
    n3[a2] = o3;
  }
  var u2 = t.length, i3 = t.charAt(0), D2 = Math.log(u2) / Math.log(256), c2 = Math.log(256) / Math.log(u2);
  function l2(h4) {
    if (h4 instanceof Uint8Array || (ArrayBuffer.isView(h4) ? h4 = new Uint8Array(h4.buffer, h4.byteOffset, h4.byteLength) : Array.isArray(h4) && (h4 = Uint8Array.from(h4))), !(h4 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (h4.length === 0) return "";
    for (var g2 = 0, S3 = 0, v2 = 0, L3 = h4.length; v2 !== L3 && h4[v2] === 0; ) v2++, g2++;
    for (var d4 = (L3 - v2) * c2 + 1 >>> 0, m4 = new Uint8Array(d4); v2 !== L3; ) {
      for (var F2 = h4[v2], q2 = 0, z2 = d4 - 1; (F2 !== 0 || q2 < S3) && z2 !== -1; z2--, q2++) F2 += 256 * m4[z2] >>> 0, m4[z2] = F2 % u2 >>> 0, F2 = F2 / u2 >>> 0;
      if (F2 !== 0) throw new Error("Non-zero carry");
      S3 = q2, v2++;
    }
    for (var I3 = d4 - S3; I3 !== d4 && m4[I3] === 0; ) I3++;
    for (var O4 = i3.repeat(g2); I3 < d4; ++I3) O4 += t.charAt(m4[I3]);
    return O4;
  }
  function p2(h4) {
    if (typeof h4 != "string") throw new TypeError("Expected String");
    if (h4.length === 0) return new Uint8Array();
    var g2 = 0;
    if (h4[g2] !== " ") {
      for (var S3 = 0, v2 = 0; h4[g2] === i3; ) S3++, g2++;
      for (var L3 = (h4.length - g2) * D2 + 1 >>> 0, d4 = new Uint8Array(L3); h4[g2]; ) {
        var m4 = n3[h4.charCodeAt(g2)];
        if (m4 === 255) return;
        for (var F2 = 0, q2 = L3 - 1; (m4 !== 0 || F2 < v2) && q2 !== -1; q2--, F2++) m4 += u2 * d4[q2] >>> 0, d4[q2] = m4 % 256 >>> 0, m4 = m4 / 256 >>> 0;
        if (m4 !== 0) throw new Error("Non-zero carry");
        v2 = F2, g2++;
      }
      if (h4[g2] !== " ") {
        for (var z2 = L3 - v2; z2 !== L3 && d4[z2] === 0; ) z2++;
        for (var I3 = new Uint8Array(S3 + (L3 - z2)), O4 = S3; z2 !== L3; ) I3[O4++] = d4[z2++];
        return I3;
      }
    }
  }
  function w2(h4) {
    var g2 = p2(h4);
    if (g2) return g2;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: l2, decodeUnsafe: p2, decode: w2 };
}
var Ur$3 = Ir$3, Tr$3 = Ur$3;
const He$2 = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Fr$2 = (t) => new TextEncoder().encode(t), Nr$3 = (t) => new TextDecoder().decode(t);
let Lr$2 = class Lr {
  constructor(e2, n3, r2) {
    this.name = e2, this.prefix = n3, this.baseEncode = r2;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
};
let Or$3 = class Or {
  constructor(e2, n3, r2) {
    if (this.name = e2, this.prefix = n3, n3.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = n3.codePointAt(0), this.baseDecode = r2;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return ze$2(this, e2);
  }
};
let Hr$3 = class Hr {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return ze$2(this, e2);
  }
  decode(e2) {
    const n3 = e2[0], r2 = this.decoders[n3];
    if (r2) return r2.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
const ze$2 = (t, e2) => new Hr$3({ ...t.decoders || { [t.prefix]: t }, ...e2.decoders || { [e2.prefix]: e2 } });
let zr$3 = class zr {
  constructor(e2, n3, r2, o3) {
    this.name = e2, this.prefix = n3, this.baseEncode = r2, this.baseDecode = o3, this.encoder = new Lr$2(e2, n3, r2), this.decoder = new Or$3(e2, n3, o3);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
const Bt$3 = ({ name: t, prefix: e2, encode: n3, decode: r2 }) => new zr$3(t, e2, n3, r2), ht$3 = ({ prefix: t, name: e2, alphabet: n3 }) => {
  const { encode: r2, decode: o3 } = Tr$3(n3, e2);
  return Bt$3({ prefix: t, name: e2, encode: r2, decode: (s2) => He$2(o3(s2)) });
}, Mr$2 = (t, e2, n3, r2) => {
  const o3 = {};
  for (let c2 = 0; c2 < e2.length; ++c2) o3[e2[c2]] = c2;
  let s2 = t.length;
  for (; t[s2 - 1] === "="; ) --s2;
  const a2 = new Uint8Array(s2 * n3 / 8 | 0);
  let u2 = 0, i3 = 0, D2 = 0;
  for (let c2 = 0; c2 < s2; ++c2) {
    const l2 = o3[t[c2]];
    if (l2 === void 0) throw new SyntaxError(`Non-${r2} character`);
    i3 = i3 << n3 | l2, u2 += n3, u2 >= 8 && (u2 -= 8, a2[D2++] = 255 & i3 >> u2);
  }
  if (u2 >= n3 || 255 & i3 << 8 - u2) throw new SyntaxError("Unexpected end of data");
  return a2;
}, qr$1 = (t, e2, n3) => {
  const r2 = e2[e2.length - 1] === "=", o3 = (1 << n3) - 1;
  let s2 = "", a2 = 0, u2 = 0;
  for (let i3 = 0; i3 < t.length; ++i3) for (u2 = u2 << 8 | t[i3], a2 += 8; a2 > n3; ) a2 -= n3, s2 += e2[o3 & u2 >> a2];
  if (a2 && (s2 += e2[o3 & u2 << n3 - a2]), r2) for (; s2.length * n3 & 7; ) s2 += "=";
  return s2;
}, k$4 = ({ name: t, prefix: e2, bitsPerChar: n3, alphabet: r2 }) => Bt$3({ prefix: e2, name: t, encode(o3) {
  return qr$1(o3, r2, n3);
}, decode(o3) {
  return Mr$2(o3, r2, n3, t);
} }), $r$3 = Bt$3({ prefix: "\0", name: "identity", encode: (t) => Nr$3(t), decode: (t) => Fr$2(t) });
var kr$2 = Object.freeze({ __proto__: null, identity: $r$3 });
const Rr$3 = k$4({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var jr$2 = Object.freeze({ __proto__: null, base2: Rr$3 });
const Zr$3 = k$4({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Gr$2 = Object.freeze({ __proto__: null, base8: Zr$3 });
const Vr$2 = ht$3({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Yr$3 = Object.freeze({ __proto__: null, base10: Vr$2 });
const Jr$3 = k$4({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Kr$2 = k$4({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Wr$3 = Object.freeze({ __proto__: null, base16: Jr$3, base16upper: Kr$2 });
const Xr$2 = k$4({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Pr$2 = k$4({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Qr$2 = k$4({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), to$2 = k$4({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), eo$2 = k$4({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), no$3 = k$4({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), ro$3 = k$4({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), oo$2 = k$4({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), so$2 = k$4({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var io$2 = Object.freeze({ __proto__: null, base32: Xr$2, base32upper: Pr$2, base32pad: Qr$2, base32padupper: to$2, base32hex: eo$2, base32hexupper: no$3, base32hexpad: ro$3, base32hexpadupper: oo$2, base32z: so$2 });
const uo$2 = ht$3({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), co$3 = ht$3({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var ao$3 = Object.freeze({ __proto__: null, base36: uo$2, base36upper: co$3 });
const fo$2 = ht$3({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Do$2 = ht$3({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var ho$2 = Object.freeze({ __proto__: null, base58btc: fo$2, base58flickr: Do$2 });
const lo$2 = k$4({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), bo$2 = k$4({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), po$2 = k$4({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), wo$2 = k$4({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Eo$2 = Object.freeze({ __proto__: null, base64: lo$2, base64pad: bo$2, base64url: po$2, base64urlpad: wo$2 });
const Me$4 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), go$2 = Me$4.reduce((t, e2, n3) => (t[n3] = e2, t), []), yo$2 = Me$4.reduce((t, e2, n3) => (t[e2.codePointAt(0)] = n3, t), []);
function xo$2(t) {
  return t.reduce((e2, n3) => (e2 += go$2[n3], e2), "");
}
function Bo$2(t) {
  const e2 = [];
  for (const n3 of t) {
    const r2 = yo$2[n3.codePointAt(0)];
    if (r2 === void 0) throw new Error(`Non-base256emoji character: ${n3}`);
    e2.push(r2);
  }
  return new Uint8Array(e2);
}
const Co$2 = Bt$3({ prefix: "🚀", name: "base256emoji", encode: xo$2, decode: Bo$2 });
var Ao$2 = Object.freeze({ __proto__: null, base256emoji: Co$2 }), mo$2 = $e$4, qe$3 = 128, So$2 = -128, vo$2 = Math.pow(2, 31);
function $e$4(t, e2, n3) {
  e2 = e2 || [], n3 = n3 || 0;
  for (var r2 = n3; t >= vo$2; ) e2[n3++] = t & 255 | qe$3, t /= 128;
  for (; t & So$2; ) e2[n3++] = t & 255 | qe$3, t >>>= 7;
  return e2[n3] = t | 0, $e$4.bytes = n3 - r2 + 1, e2;
}
var Io$2 = Pt$2, Uo$2 = 128, ke$4 = 127;
function Pt$2(t, r2) {
  var n3 = 0, r2 = r2 || 0, o3 = 0, s2 = r2, a2, u2 = t.length;
  do {
    if (s2 >= u2) throw Pt$2.bytes = 0, new RangeError("Could not decode varint");
    a2 = t[s2++], n3 += o3 < 28 ? (a2 & ke$4) << o3 : (a2 & ke$4) * Math.pow(2, o3), o3 += 7;
  } while (a2 >= Uo$2);
  return Pt$2.bytes = s2 - r2, n3;
}
var To$2 = Math.pow(2, 7), Fo$2 = Math.pow(2, 14), No$2 = Math.pow(2, 21), Lo$2 = Math.pow(2, 28), Oo$2 = Math.pow(2, 35), Ho$2 = Math.pow(2, 42), zo$2 = Math.pow(2, 49), Mo$2 = Math.pow(2, 56), qo$2 = Math.pow(2, 63), $o$2 = function(t) {
  return t < To$2 ? 1 : t < Fo$2 ? 2 : t < No$2 ? 3 : t < Lo$2 ? 4 : t < Oo$2 ? 5 : t < Ho$2 ? 6 : t < zo$2 ? 7 : t < Mo$2 ? 8 : t < qo$2 ? 9 : 10;
}, ko$2 = { encode: mo$2, decode: Io$2, encodingLength: $o$2 }, Re$2 = ko$2;
const je$3 = (t, e2, n3 = 0) => (Re$2.encode(t, e2, n3), e2), Ze$1 = (t) => Re$2.encodingLength(t), Qt$2 = (t, e2) => {
  const n3 = e2.byteLength, r2 = Ze$1(t), o3 = r2 + Ze$1(n3), s2 = new Uint8Array(o3 + n3);
  return je$3(t, s2, 0), je$3(n3, s2, r2), s2.set(e2, o3), new Ro$2(t, n3, e2, s2);
};
let Ro$2 = class Ro {
  constructor(e2, n3, r2, o3) {
    this.code = e2, this.size = n3, this.digest = r2, this.bytes = o3;
  }
};
const Ge$4 = ({ name: t, code: e2, encode: n3 }) => new jo$2(t, e2, n3);
let jo$2 = class jo {
  constructor(e2, n3, r2) {
    this.name = e2, this.code = n3, this.encode = r2;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const n3 = this.encode(e2);
      return n3 instanceof Uint8Array ? Qt$2(this.code, n3) : n3.then((r2) => Qt$2(this.code, r2));
    } else throw Error("Unknown type, must be binary type");
  }
};
const Ve$3 = (t) => async (e2) => new Uint8Array(await crypto.subtle.digest(t, e2)), Zo$1 = Ge$4({ name: "sha2-256", code: 18, encode: Ve$3("SHA-256") }), Go$2 = Ge$4({ name: "sha2-512", code: 19, encode: Ve$3("SHA-512") });
var Vo$2 = Object.freeze({ __proto__: null, sha256: Zo$1, sha512: Go$2 });
const Ye$2 = 0, Yo$2 = "identity", Je$1 = He$2, Jo$2 = (t) => Qt$2(Ye$2, Je$1(t)), Ko$2 = { code: Ye$2, name: Yo$2, encode: Je$1, digest: Jo$2 };
var Wo$2 = Object.freeze({ __proto__: null, identity: Ko$2 });
new TextEncoder(), new TextDecoder();
const Ke$4 = { ...kr$2, ...jr$2, ...Gr$2, ...Yr$3, ...Wr$3, ...io$2, ...ao$3, ...ho$2, ...Eo$2, ...Ao$2 };
({ ...Vo$2, ...Wo$2 });
function We$1(t, e2, n3, r2) {
  return { name: t, prefix: e2, encoder: { name: t, prefix: e2, encode: n3 }, decoder: { decode: r2 } };
}
const Xe$1 = We$1("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), te$2 = We$1("ascii", "a", (t) => {
  let e2 = "a";
  for (let n3 = 0; n3 < t.length; n3++) e2 += String.fromCharCode(t[n3]);
  return e2;
}, (t) => {
  t = t.substring(1);
  const e2 = Le$4(t.length);
  for (let n3 = 0; n3 < t.length; n3++) e2[n3] = t.charCodeAt(n3);
  return e2;
}), Pe$1 = { utf8: Xe$1, "utf-8": Xe$1, hex: Ke$4.base16, latin1: te$2, ascii: te$2, binary: te$2, ...Ke$4 };
function ct$2(t, e2 = "utf8") {
  const n3 = Pe$1[e2];
  if (!n3) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n3.encoder.encode(t).substring(1);
}
function rt$2(t, e2 = "utf8") {
  const n3 = Pe$1[e2];
  if (!n3) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt$2(globalThis.Buffer.from(t, "utf-8")) : n3.decoder.decode(`${n3.prefix}${t}`);
}
function lt$2(t) {
  return safeJsonParse(ct$2(rt$2(t, Dt$1), Gt$3));
}
function bt$1(t) {
  return ct$2(rt$2(safeJsonStringify(t), Gt$3), Dt$1);
}
function Qe$1(t) {
  const e2 = rt$2(Wt$3, dt$3), n3 = Kt$2 + ct$2(Oe$3([e2, t]), dt$3);
  return [Yt$3, Jt$3, n3].join(Vt$2);
}
function en$3(t) {
  return ct$2(t, Dt$1);
}
function nn$3(t) {
  return rt$2(t, Dt$1);
}
function rn$3(t) {
  return rt$2([bt$1(t.header), bt$1(t.payload)].join(ut$3), xt$3);
}
function on$3(t) {
  return [bt$1(t.header), bt$1(t.payload), en$3(t.signature)].join(ut$3);
}
function sn$3(t) {
  const e2 = t.split(ut$3), n3 = lt$2(e2[0]), r2 = lt$2(e2[1]), o3 = nn$3(e2[2]), s2 = rt$2(e2.slice(0, 2).join(ut$3), xt$3);
  return { header: n3, payload: r2, signature: o3, data: s2 };
}
function Po$2(t = he$2(Ne$3)) {
  const e2 = Rt$4.getPublicKey(t);
  return { secretKey: Oe$3([t, e2]), publicKey: e2 };
}
async function Qo$1(t, e2, n3, r2, o3 = cjs$3.fromMiliseconds(Date.now())) {
  const s2 = { alg: jt$2, typ: Zt$2 }, a2 = Qe$1(r2.publicKey), u2 = o3 + n3, i3 = { iss: a2, sub: t, aud: e2, iat: o3, exp: u2 }, D2 = rn$3({ header: s2, payload: i3 }), c2 = Rt$4.sign(D2, r2.secretKey.slice(0, 32));
  return on$3({ header: s2, payload: i3, signature: c2 });
}
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}
function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}
function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j2 = 0; j2 < BASE_MAP.length; j2++) {
    BASE_MAP[j2] = 255;
  }
  for (var i3 = 0; i3 < ALPHABET.length; i3++) {
    var x2 = ALPHABET.charAt(i3);
    var xc2 = x2.charCodeAt(0);
    if (BASE_MAP[xc2] !== 255) {
      throw new TypeError(x2 + " is ambiguous");
    }
    BASE_MAP[xc2] = i3;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array) ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i4 = 0;
      for (var it1 = size - 1; (carry !== 0 || i4 < length) && it1 !== -1; it1--, i4++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i4;
      pbegin++;
    }
    var it22 = size - length;
    while (it22 !== size && b58[it22] === 0) {
      it22++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it22 < size; ++it22) {
      str += ALPHABET.charAt(b58[it22]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i4 = 0;
      for (var it3 = size - 1; (carry !== 0 || i4 < length) && it3 !== -1; it3--, i4++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i4;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j3 = zeroes;
    while (it4 !== size) {
      vch[j3++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name} character`);
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
const coerce = (o3) => {
  if (o3 instanceof Uint8Array && o3.constructor.name === "Uint8Array")
    return o3;
  if (o3 instanceof ArrayBuffer)
    return new Uint8Array(o3);
  if (ArrayBuffer.isView(o3)) {
    return new Uint8Array(o3.buffer, o3.byteOffset, o3.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
const fromString$1 = (str) => new TextEncoder().encode(str);
const toString$1 = (b2) => new TextDecoder().decode(b2);
class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or$3(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or$3(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
}
const or$3 = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({ name, prefix, encode: encode2, decode: decode2 }) => new Codec(name, prefix, encode2, decode2);
const baseX = ({ prefix, name, alphabet: alphabet2 }) => {
  const { encode: encode2, decode: decode2 } = _brrp__multiformats_scope_baseX(alphabet2, name);
  return from({
    prefix,
    name,
    encode: encode2,
    decode: (text) => coerce(decode2(text))
  });
};
const decode$1 = (string2, alphabet2, bitsPerChar, name) => {
  const codes = {};
  for (let i3 = 0; i3 < alphabet2.length; ++i3) {
    codes[alphabet2[i3]] = i3;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i3 = 0; i3 < end; ++i3) {
    const value = codes[string2[i3]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
const encode$1 = (data, alphabet2, bitsPerChar) => {
  const pad = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i3 = 0; i3 < data.length; ++i3) {
    buffer = buffer << 8 | data[i3];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
const rfc4648 = ({ name, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode$1(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode$1(input, alphabet2, bitsPerChar, name);
    }
  });
};
const identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString$1(buf),
  decode: (str) => fromString$1(str)
});
const identityBase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity
}, Symbol.toStringTag, { value: "Module" }));
const base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
const base2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2
}, Symbol.toStringTag, { value: "Module" }));
const base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
const base8$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8
}, Symbol.toStringTag, { value: "Module" }));
const base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
const base10$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10
}, Symbol.toStringTag, { value: "Module" }));
const base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});
const base16$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16,
  base16upper
}, Symbol.toStringTag, { value: "Module" }));
const base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});
const base32$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32,
  base32hex,
  base32hexpad,
  base32hexpadupper,
  base32hexupper,
  base32pad,
  base32padupper,
  base32upper,
  base32z
}, Symbol.toStringTag, { value: "Module" }));
const base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
const base36$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36,
  base36upper
}, Symbol.toStringTag, { value: "Module" }));
const base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
const base58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc,
  base58flickr
}, Symbol.toStringTag, { value: "Module" }));
const base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
const base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
const base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
const base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});
const base64$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64,
  base64pad,
  base64url,
  base64urlpad
}, Symbol.toStringTag, { value: "Module" }));
const alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
const alphabetBytesToChars = alphabet.reduce((p2, c2, i3) => {
  p2[i3] = c2;
  return p2;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p2, c2, i3) => {
  p2[c2.codePointAt(0)] = i3;
  return p2;
}, []);
function encode(data) {
  return data.reduce((p2, c2) => {
    p2 += alphabetBytesToChars[c2];
    return p2;
  }, "");
}
function decode(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = from({
  prefix: "🚀",
  name: "base256emoji",
  encode,
  decode
});
const base256emoji$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const bases = {
  ...identityBase,
  ...base2$1,
  ...base8$1,
  ...base10$1,
  ...base16$1,
  ...base32$1,
  ...base36$1,
  ...base58,
  ...base64$1,
  ...base256emoji$1
};
function createCodec(name, prefix, encode2, decode2) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode: encode2
    },
    decoder: { decode: decode2 }
  };
}
const string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i3 = 0; i3 < buf.length; i3++) {
    string2 += String.fromCharCode(buf[i3]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i3 = 0; i3 < str.length; i3++) {
    buf[i3] = str.charCodeAt(i3);
  }
  return buf;
});
const BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
function fromString(string2, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string2, "utf8");
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}
function toString(array, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}
const C$4 = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };
var define_process_env_default = {};
const Pe = ":";
function Ye$1(e2) {
  const [t, n3] = e2.split(Pe);
  return { namespace: t, reference: n3 };
}
function Hr$2(e2, t = []) {
  const n3 = [];
  return Object.keys(e2).forEach((r2) => {
    if (t.length && !t.includes(r2)) return;
    const o3 = e2[r2];
    n3.push(...o3.accounts);
  }), n3;
}
function Le$3(e2, t) {
  return e2.includes(":") ? [e2] : t.chains || [];
}
const Ft$2 = "ReactNative", H$2 = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Gt$2 = "js";
function et$1() {
  return typeof process$1 < "u" && typeof process$1.versions < "u" && typeof process$1.versions.node < "u";
}
function ne$1() {
  return !getDocument_1() && !!getNavigator_1() && navigator.product === Ft$2;
}
function Wr$2() {
  return ne$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function zr$2() {
  return ne$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function Ae$2() {
  return !et$1() && !!getNavigator_1() && !!getDocument_1();
}
function ue$2() {
  return ne$1() ? H$2.reactNative : et$1() ? H$2.node : Ae$2() ? H$2.browser : H$2.unknown;
}
function Jr$2() {
  var e2;
  try {
    return ne$1() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e2 = global.Application) == null ? void 0 : e2.applicationId : void 0;
  } catch {
    return;
  }
}
function Wt$2(e2, t) {
  const n3 = new URLSearchParams(e2);
  for (const r2 of Object.keys(t).sort()) if (t.hasOwnProperty(r2)) {
    const o3 = t[r2];
    o3 !== void 0 && n3.set(r2, o3);
  }
  return n3.toString();
}
function Yr$2() {
  return getWindowMetadata_1() || { name: "", description: "", url: "", icons: [""] };
}
function zt$2() {
  if (ue$2() === H$2.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: n3, Version: r2 } = global.Platform;
    return [n3, r2].join("-");
  }
  const e2 = detect();
  if (e2 === null) return "unknown";
  const t = e2.os ? e2.os.replace(" ", "").toLowerCase() : "unknown";
  return e2.type === "browser" ? [t, e2.name, e2.version].join("-") : [t, e2.version].join("-");
}
function Jt$2() {
  var e2;
  const t = ue$2();
  return t === H$2.browser ? [t, ((e2 = getLocation_1()) == null ? void 0 : e2.host) || "unknown"].join(":") : t;
}
function Yt$2(e2, t, n3) {
  const r2 = zt$2(), o3 = Jt$2();
  return [[e2, t].join("-"), [Gt$2, n3].join("-"), r2, o3].join("/");
}
function Zr$2({ protocol: e2, version: t, relayUrl: n3, sdkVersion: r2, auth: o3, projectId: s2, useOnCloseEvent: i3, bundleId: c2, packageName: u2 }) {
  const a2 = n3.split("?"), l2 = Yt$2(e2, t, r2), f5 = { auth: o3, ua: l2, projectId: s2, useOnCloseEvent: i3 || void 0, packageName: u2 || void 0, bundleId: c2 || void 0 }, d4 = Wt$2(a2[1] || "", f5);
  return a2[0] + "?" + d4;
}
function re$2(e2, t) {
  return e2.filter((n3) => t.includes(n3)).length === e2.length;
}
function no$2(e2) {
  return Object.fromEntries(e2.entries());
}
function ro$2(e2) {
  return new Map(Object.entries(e2));
}
function co$2(e2 = cjs$3.FIVE_MINUTES, t) {
  const n3 = cjs$3.toMiliseconds(e2 || cjs$3.FIVE_MINUTES);
  let r2, o3, s2, i3;
  return { resolve: (c2) => {
    s2 && r2 && (clearTimeout(s2), r2(c2), i3 = Promise.resolve(c2));
  }, reject: (c2) => {
    s2 && o3 && (clearTimeout(s2), o3(c2));
  }, done: () => new Promise((c2, u2) => {
    if (i3) return c2(i3);
    s2 = setTimeout(() => {
      const a2 = new Error(t);
      i3 = Promise.reject(a2), u2(a2);
    }, n3), r2 = c2, o3 = u2;
  }) };
}
function ao$2(e2, t, n3) {
  return new Promise(async (r2, o3) => {
    const s2 = setTimeout(() => o3(new Error(n3)), t);
    try {
      const i3 = await e2;
      r2(i3);
    } catch (i3) {
      o3(i3);
    }
    clearTimeout(s2);
  });
}
function tt$1(e2, t) {
  if (typeof t == "string" && t.startsWith(`${e2}:`)) return t;
  if (e2.toLowerCase() === "topic") {
    if (typeof t != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (e2.toLowerCase() === "id") {
    if (typeof t != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${e2}`);
}
function uo$1(e2) {
  return tt$1("topic", e2);
}
function fo$1(e2) {
  return tt$1("id", e2);
}
function lo$1(e2) {
  const [t, n3] = e2.split(":"), r2 = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof n3 == "string") r2.topic = n3;
  else if (t === "id" && Number.isInteger(Number(n3))) r2.id = Number(n3);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n3}`);
  return r2;
}
function ho$1(e2, t) {
  return cjs$3.fromMiliseconds(Date.now() + cjs$3.toMiliseconds(e2));
}
function po$1(e2) {
  return Date.now() >= cjs$3.toMiliseconds(e2);
}
function go$1(e2, t) {
  return `${e2}${t ? `:${t}` : ""}`;
}
function Q$2(e2 = [], t = []) {
  return [.../* @__PURE__ */ new Set([...e2, ...t])];
}
async function yo$1({ id: e2, topic: t, wcDeepLink: n3 }) {
  var r2;
  try {
    if (!n3) return;
    const o3 = typeof n3 == "string" ? JSON.parse(n3) : n3, s2 = o3 == null ? void 0 : o3.href;
    if (typeof s2 != "string") return;
    const i3 = en$2(s2, e2, t), c2 = ue$2();
    if (c2 === H$2.browser) {
      if (!((r2 = getDocument_1()) != null && r2.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      tn$2(i3);
    } else c2 === H$2.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i3);
  } catch (o3) {
    console.error(o3);
  }
}
function en$2(e2, t, n3) {
  const r2 = `requestId=${t}&sessionTopic=${n3}`;
  e2.endsWith("/") && (e2 = e2.slice(0, -1));
  let o3 = `${e2}`;
  if (e2.startsWith("https://t.me")) {
    const s2 = e2.includes("?") ? "&startapp=" : "?startapp=";
    o3 = `${o3}${s2}${on$2(r2, true)}`;
  } else o3 = `${o3}/wc?${r2}`;
  return o3;
}
function tn$2(e2) {
  let t = "_self";
  rn$2() ? t = "_top" : (nn$2() || e2.startsWith("https://") || e2.startsWith("http://")) && (t = "_blank"), window.open(e2, t, "noreferrer noopener");
}
async function mo$1(e2, t) {
  let n3 = "";
  try {
    if (Ae$2() && (n3 = localStorage.getItem(t), n3)) return n3;
    n3 = await e2.getItem(t);
  } catch (r2) {
    console.error(r2);
  }
  return n3;
}
function bo$1(e2, t) {
  if (!e2.includes(t)) return null;
  const n3 = e2.split(/([&,?,=])/), r2 = n3.indexOf(t);
  return n3[r2 + 2];
}
function wo$1() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e2) => {
    const t = Math.random() * 16 | 0;
    return (e2 === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Eo$1() {
  return typeof process$1 < "u" && define_process_env_default.IS_VITEST === "true";
}
function nn$2() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function rn$2() {
  try {
    return window.self !== window.top;
  } catch {
    return false;
  }
}
function on$2(e2, t = false) {
  const n3 = Buffer.from(e2).toString("base64");
  return t ? n3.replace(/[=]/g, "") : n3;
}
function rt$1(e2) {
  return Buffer.from(e2, "base64").toString("utf-8");
}
function vo$1(e2) {
  return new Promise((t) => setTimeout(t, e2));
}
function Ne$2(e2) {
  if (!Number.isSafeInteger(e2) || e2 < 0) throw new Error("positive integer expected, got " + e2);
}
function xo$1(e2) {
  return e2 instanceof Uint8Array || ArrayBuffer.isView(e2) && e2.constructor.name === "Uint8Array";
}
function je$2(e2, ...t) {
  if (!xo$1(e2)) throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e2.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e2.length);
}
function ot$1(e2) {
  if (typeof e2 != "function" || typeof e2.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ne$2(e2.outputLen), Ne$2(e2.blockLen);
}
function me$2(e2, t = true) {
  if (e2.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e2.finished) throw new Error("Hash#digest() has already been called");
}
function sn$2(e2, t) {
  je$2(e2);
  const n3 = t.outputLen;
  if (e2.length < n3) throw new Error("digestInto() expects output buffer of length at least " + n3);
}
const Ce$1 = BigInt(2 ** 32 - 1), cn$2 = BigInt(32);
function Oo$1(e2, t = false) {
  return t ? { h: Number(e2 & Ce$1), l: Number(e2 >> cn$2 & Ce$1) } : { h: Number(e2 >> cn$2 & Ce$1) | 0, l: Number(e2 & Ce$1) | 0 };
}
function Io$1(e2, t = false) {
  let n3 = new Uint32Array(e2.length), r2 = new Uint32Array(e2.length);
  for (let o3 = 0; o3 < e2.length; o3++) {
    const { h: s2, l: i3 } = Oo$1(e2[o3], t);
    [n3[o3], r2[o3]] = [s2, i3];
  }
  return [n3, r2];
}
const Ao$1 = (e2, t, n3) => e2 << n3 | t >>> 32 - n3, No$1 = (e2, t, n3) => t << n3 | e2 >>> 32 - n3, So$1 = (e2, t, n3) => t << n3 - 32 | e2 >>> 64 - n3, Uo$1 = (e2, t, n3) => e2 << n3 - 32 | t >>> 64 - n3, be$1 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function _o$1(e2) {
  return new Uint32Array(e2.buffer, e2.byteOffset, Math.floor(e2.byteLength / 4));
}
function st$1(e2) {
  return new DataView(e2.buffer, e2.byteOffset, e2.byteLength);
}
function J$3(e2, t) {
  return e2 << 32 - t | e2 >>> t;
}
const an$2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function To$1(e2) {
  return e2 << 24 & 4278190080 | e2 << 8 & 16711680 | e2 >>> 8 & 65280 | e2 >>> 24 & 255;
}
function un$2(e2) {
  for (let t = 0; t < e2.length; t++) e2[t] = To$1(e2[t]);
}
function $o$1(e2) {
  if (typeof e2 != "string") throw new Error("utf8ToBytes expected string, got " + typeof e2);
  return new Uint8Array(new TextEncoder().encode(e2));
}
function we$1(e2) {
  return typeof e2 == "string" && (e2 = $o$1(e2)), je$2(e2), e2;
}
let it$1 = class it {
  clone() {
    return this._cloneInto();
  }
};
function fn$2(e2) {
  const t = (r2) => e2().update(we$1(r2)).digest(), n3 = e2();
  return t.outputLen = n3.outputLen, t.blockLen = n3.blockLen, t.create = () => e2(), t;
}
function Se$2(e2 = 32) {
  if (be$1 && typeof be$1.getRandomValues == "function") return be$1.getRandomValues(new Uint8Array(e2));
  if (be$1 && typeof be$1.randomBytes == "function") return be$1.randomBytes(e2);
  throw new Error("crypto.getRandomValues must be defined");
}
const ln$2 = [], dn$2 = [], hn$2 = [], Ro$1 = BigInt(0), Ue$3 = BigInt(1), Po$1 = BigInt(2), Lo$1 = BigInt(7), Bo$1 = BigInt(256), jo$1 = BigInt(113);
for (let e2 = 0, t = Ue$3, n3 = 1, r2 = 0; e2 < 24; e2++) {
  [n3, r2] = [r2, (2 * n3 + 3 * r2) % 5], ln$2.push(2 * (5 * r2 + n3)), dn$2.push((e2 + 1) * (e2 + 2) / 2 % 64);
  let o3 = Ro$1;
  for (let s2 = 0; s2 < 7; s2++) t = (t << Ue$3 ^ (t >> Lo$1) * jo$1) % Bo$1, t & Po$1 && (o3 ^= Ue$3 << (Ue$3 << BigInt(s2)) - Ue$3);
  hn$2.push(o3);
}
const [Co$1, ko$1] = Io$1(hn$2, true), pn$2 = (e2, t, n3) => n3 > 32 ? So$1(e2, t, n3) : Ao$1(e2, t, n3), gn$2 = (e2, t, n3) => n3 > 32 ? Uo$1(e2, t, n3) : No$1(e2, t, n3);
function Do$1(e2, t = 24) {
  const n3 = new Uint32Array(10);
  for (let r2 = 24 - t; r2 < 24; r2++) {
    for (let i3 = 0; i3 < 10; i3++) n3[i3] = e2[i3] ^ e2[i3 + 10] ^ e2[i3 + 20] ^ e2[i3 + 30] ^ e2[i3 + 40];
    for (let i3 = 0; i3 < 10; i3 += 2) {
      const c2 = (i3 + 8) % 10, u2 = (i3 + 2) % 10, a2 = n3[u2], l2 = n3[u2 + 1], f5 = pn$2(a2, l2, 1) ^ n3[c2], d4 = gn$2(a2, l2, 1) ^ n3[c2 + 1];
      for (let g2 = 0; g2 < 50; g2 += 10) e2[i3 + g2] ^= f5, e2[i3 + g2 + 1] ^= d4;
    }
    let o3 = e2[2], s2 = e2[3];
    for (let i3 = 0; i3 < 24; i3++) {
      const c2 = dn$2[i3], u2 = pn$2(o3, s2, c2), a2 = gn$2(o3, s2, c2), l2 = ln$2[i3];
      o3 = e2[l2], s2 = e2[l2 + 1], e2[l2] = u2, e2[l2 + 1] = a2;
    }
    for (let i3 = 0; i3 < 50; i3 += 10) {
      for (let c2 = 0; c2 < 10; c2++) n3[c2] = e2[i3 + c2];
      for (let c2 = 0; c2 < 10; c2++) e2[i3 + c2] ^= ~n3[(c2 + 2) % 10] & n3[(c2 + 4) % 10];
    }
    e2[0] ^= Co$1[r2], e2[1] ^= ko$1[r2];
  }
  n3.fill(0);
}
let Bt$2 = class Bt extends it$1 {
  constructor(t, n3, r2, o3 = false, s2 = 24) {
    if (super(), this.blockLen = t, this.suffix = n3, this.outputLen = r2, this.enableXOF = o3, this.rounds = s2, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, Ne$2(r2), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = _o$1(this.state);
  }
  keccak() {
    an$2 || un$2(this.state32), Do$1(this.state32, this.rounds), an$2 || un$2(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    me$2(this);
    const { blockLen: n3, state: r2 } = this;
    t = we$1(t);
    const o3 = t.length;
    for (let s2 = 0; s2 < o3; ) {
      const i3 = Math.min(n3 - this.pos, o3 - s2);
      for (let c2 = 0; c2 < i3; c2++) r2[this.pos++] ^= t[s2++];
      this.pos === n3 && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: t, suffix: n3, pos: r2, blockLen: o3 } = this;
    t[r2] ^= n3, (n3 & 128) !== 0 && r2 === o3 - 1 && this.keccak(), t[o3 - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    me$2(this, false), je$2(t), this.finish();
    const n3 = this.state, { blockLen: r2 } = this;
    for (let o3 = 0, s2 = t.length; o3 < s2; ) {
      this.posOut >= r2 && this.keccak();
      const i3 = Math.min(r2 - this.posOut, s2 - o3);
      t.set(n3.subarray(this.posOut, this.posOut + i3), o3), this.posOut += i3, o3 += i3;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return Ne$2(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (sn$2(t, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: n3, suffix: r2, outputLen: o3, rounds: s2, enableXOF: i3 } = this;
    return t || (t = new Bt(n3, r2, o3, i3, s2)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s2, t.suffix = r2, t.outputLen = o3, t.enableXOF = i3, t.destroyed = this.destroyed, t;
  }
};
const Mo$1 = (e2, t, n3) => fn$2(() => new Bt$2(t, e2, n3)), Vo$1 = Mo$1(1, 136, 256 / 8), Ho$1 = "https://rpc.walletconnect.org/v1";
function ct$1(e2) {
  const t = `Ethereum Signed Message:
${e2.length}`, n3 = new TextEncoder().encode(t + e2);
  return "0x" + Buffer.from(Vo$1(n3)).toString("hex");
}
async function yn$2(e2, t, n3, r2, o3, s2) {
  switch (n3.t) {
    case "eip191":
      return await mn$2(e2, t, n3.s);
    case "eip1271":
      return await bn$2(e2, t, n3.s, r2, o3, s2);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n3.t}`);
  }
}
async function mn$2(e2, t, n3) {
  return (await recoverAddress({ hash: ct$1(t), signature: n3 })).toLowerCase() === e2.toLowerCase();
}
async function bn$2(e2, t, n3, r2, o3, s2) {
  const i3 = Ye$1(r2);
  if (!i3.namespace || !i3.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r2}`);
  try {
    const c2 = "0x1626ba7e", u2 = "0000000000000000000000000000000000000000000000000000000000000040", a2 = "0000000000000000000000000000000000000000000000000000000000000041", l2 = n3.substring(2), f5 = ct$1(t).substring(2), d4 = c2 + f5 + u2 + a2 + l2, g2 = await fetch(`${s2 || Ho$1}/?chainId=${r2}&projectId=${o3}`, { method: "POST", body: JSON.stringify({ id: Ko$1(), jsonrpc: "2.0", method: "eth_call", params: [{ to: e2, data: d4 }, "latest"] }) }), { result: y3 } = await g2.json();
    return y3 ? y3.slice(0, c2.length).toLowerCase() === c2.toLowerCase() : false;
  } catch (c2) {
    return console.error("isValidEip1271Signature: ", c2), false;
  }
}
function Ko$1() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var Fo$1 = Object.defineProperty, qo$1 = Object.defineProperties, Go$1 = Object.getOwnPropertyDescriptors, wn$2 = Object.getOwnPropertySymbols, Wo$1 = Object.prototype.hasOwnProperty, zo$1 = Object.prototype.propertyIsEnumerable, En$2 = (e2, t, n3) => t in e2 ? Fo$1(e2, t, { enumerable: true, configurable: true, writable: true, value: n3 }) : e2[t] = n3, at$1 = (e2, t) => {
  for (var n3 in t || (t = {})) Wo$1.call(t, n3) && En$2(e2, n3, t[n3]);
  if (wn$2) for (var n3 of wn$2(t)) zo$1.call(t, n3) && En$2(e2, n3, t[n3]);
  return e2;
}, vn$2 = (e2, t) => qo$1(e2, Go$1(t));
const Jo$1 = "did:pkh:", ke$3 = (e2) => e2 == null ? void 0 : e2.split(":"), xn$2 = (e2) => {
  const t = e2 && ke$3(e2);
  if (t) return e2.includes(Jo$1) ? t[3] : t[1];
}, On$2 = (e2) => {
  const t = e2 && ke$3(e2);
  if (t) return t[2] + ":" + t[3];
}, ut$2 = (e2) => {
  const t = e2 && ke$3(e2);
  if (t) return t.pop();
};
async function Yo$1(e2) {
  const { cacao: t, projectId: n3 } = e2, { s: r2, p: o3 } = t, s2 = In$2(o3, o3.iss), i3 = ut$2(o3.iss);
  return await yn$2(i3, s2, r2, On$2(o3.iss), n3);
}
const In$2 = (e2, t) => {
  const n3 = `${e2.domain} wants you to sign in with your Ethereum account:`, r2 = ut$2(t);
  if (!e2.aud && !e2.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let o3 = e2.statement || void 0;
  const s2 = `URI: ${e2.aud || e2.uri}`, i3 = `Version: ${e2.version}`, c2 = `Chain ID: ${xn$2(t)}`, u2 = `Nonce: ${e2.nonce}`, a2 = `Issued At: ${e2.iat}`, l2 = e2.exp ? `Expiration Time: ${e2.exp}` : void 0, f5 = e2.nbf ? `Not Before: ${e2.nbf}` : void 0, d4 = e2.requestId ? `Request ID: ${e2.requestId}` : void 0, g2 = e2.resources ? `Resources:${e2.resources.map((h4) => `
- ${h4}`).join("")}` : void 0, y3 = Me$3(e2.resources);
  if (y3) {
    const h4 = oe$1(y3);
    o3 = dt$2(o3, h4);
  }
  return [n3, r2, "", o3, "", s2, i3, c2, u2, a2, l2, f5, d4, g2].filter((h4) => h4 != null).join(`
`);
};
function Un$2(e2) {
  return Buffer.from(JSON.stringify(e2)).toString("base64");
}
function _n$2(e2) {
  return JSON.parse(Buffer.from(e2, "base64").toString("utf-8"));
}
function Y$2(e2) {
  if (!e2) throw new Error("No recap provided, value is undefined");
  if (!e2.att) throw new Error("No `att` property found");
  const t = Object.keys(e2.att);
  if (!(t != null && t.length)) throw new Error("No resources found in `att` property");
  t.forEach((n3) => {
    const r2 = e2.att[n3];
    if (Array.isArray(r2)) throw new Error(`Resource must be an object: ${n3}`);
    if (typeof r2 != "object") throw new Error(`Resource must be an object: ${n3}`);
    if (!Object.keys(r2).length) throw new Error(`Resource object is empty: ${n3}`);
    Object.keys(r2).forEach((o3) => {
      const s2 = r2[o3];
      if (!Array.isArray(s2)) throw new Error(`Ability limits ${o3} must be an array of objects, found: ${s2}`);
      if (!s2.length) throw new Error(`Value of ${o3} is empty array, must be an array with objects`);
      s2.forEach((i3) => {
        if (typeof i3 != "object") throw new Error(`Ability limits (${o3}) must be an array of objects, found: ${i3}`);
      });
    });
  });
}
function Tn$2(e2, t, n3, r2 = {}) {
  return n3 == null ? void 0 : n3.sort((o3, s2) => o3.localeCompare(s2)), { att: { [e2]: ft$1(t, n3, r2) } };
}
function ft$1(e2, t, n3 = {}) {
  t = t == null ? void 0 : t.sort((o3, s2) => o3.localeCompare(s2));
  const r2 = t.map((o3) => ({ [`${e2}/${o3}`]: [n3] }));
  return Object.assign({}, ...r2);
}
function De$2(e2) {
  return Y$2(e2), `urn:recap:${Un$2(e2).replace(/=/g, "")}`;
}
function oe$1(e2) {
  const t = _n$2(e2.replace("urn:recap:", ""));
  return Y$2(t), t;
}
function ts$1(e2, t, n3) {
  const r2 = Tn$2(e2, t, n3);
  return De$2(r2);
}
function lt$1(e2) {
  return e2 && e2.includes("urn:recap:");
}
function ns$1(e2, t) {
  const n3 = oe$1(e2), r2 = oe$1(t), o3 = Rn$2(n3, r2);
  return De$2(o3);
}
function Rn$2(e2, t) {
  Y$2(e2), Y$2(t);
  const n3 = Object.keys(e2.att).concat(Object.keys(t.att)).sort((o3, s2) => o3.localeCompare(s2)), r2 = { att: {} };
  return n3.forEach((o3) => {
    var s2, i3;
    Object.keys(((s2 = e2.att) == null ? void 0 : s2[o3]) || {}).concat(Object.keys(((i3 = t.att) == null ? void 0 : i3[o3]) || {})).sort((c2, u2) => c2.localeCompare(u2)).forEach((c2) => {
      var u2, a2;
      r2.att[o3] = vn$2(at$1({}, r2.att[o3]), { [c2]: ((u2 = e2.att[o3]) == null ? void 0 : u2[c2]) || ((a2 = t.att[o3]) == null ? void 0 : a2[c2]) });
    });
  }), r2;
}
function dt$2(e2 = "", t) {
  Y$2(t);
  const n3 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (e2.includes(n3)) return e2;
  const r2 = [];
  let o3 = 0;
  Object.keys(t.att).forEach((c2) => {
    const u2 = Object.keys(t.att[c2]).map((f5) => ({ ability: f5.split("/")[0], action: f5.split("/")[1] }));
    u2.sort((f5, d4) => f5.action.localeCompare(d4.action));
    const a2 = {};
    u2.forEach((f5) => {
      a2[f5.ability] || (a2[f5.ability] = []), a2[f5.ability].push(f5.action);
    });
    const l2 = Object.keys(a2).map((f5) => (o3++, `(${o3}) '${f5}': '${a2[f5].join("', '")}' for '${c2}'.`));
    r2.push(l2.join(", ").replace(".,", "."));
  });
  const s2 = r2.join(" "), i3 = `${n3}${s2}`;
  return `${e2 ? e2 + " " : ""}${i3}`;
}
function rs$1(e2) {
  var t;
  const n3 = oe$1(e2);
  Y$2(n3);
  const r2 = (t = n3.att) == null ? void 0 : t.eip155;
  return r2 ? Object.keys(r2).map((o3) => o3.split("/")[1]) : [];
}
function os$1(e2) {
  const t = oe$1(e2);
  Y$2(t);
  const n3 = [];
  return Object.values(t.att).forEach((r2) => {
    Object.values(r2).forEach((o3) => {
      var s2;
      (s2 = o3 == null ? void 0 : o3[0]) != null && s2.chains && n3.push(o3[0].chains);
    });
  }), [...new Set(n3.flat())];
}
function Me$3(e2) {
  if (!e2) return;
  const t = e2 == null ? void 0 : e2[e2.length - 1];
  return lt$1(t) ? t : void 0;
}
function ht$2(e2) {
  if (!Number.isSafeInteger(e2) || e2 < 0) throw new Error("positive integer expected, got " + e2);
}
function Ln$2(e2) {
  return e2 instanceof Uint8Array || ArrayBuffer.isView(e2) && e2.constructor.name === "Uint8Array";
}
function F$2(e2, ...t) {
  if (!Ln$2(e2)) throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e2.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e2.length);
}
function Bn$2(e2, t = true) {
  if (e2.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e2.finished) throw new Error("Hash#digest() has already been called");
}
function ss$1(e2, t) {
  F$2(e2);
  const n3 = t.outputLen;
  if (e2.length < n3) throw new Error("digestInto() expects output buffer of length at least " + n3);
}
function jn$2(e2) {
  if (typeof e2 != "boolean") throw new Error(`boolean expected, not ${e2}`);
}
const se$2 = (e2) => new Uint32Array(e2.buffer, e2.byteOffset, Math.floor(e2.byteLength / 4)), is$1 = (e2) => new DataView(e2.buffer, e2.byteOffset, e2.byteLength), cs$1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!cs$1) throw new Error("Non little-endian hardware is not supported");
function as$1(e2) {
  if (typeof e2 != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e2));
}
function pt$2(e2) {
  if (typeof e2 == "string") e2 = as$1(e2);
  else if (Ln$2(e2)) e2 = gt$2(e2);
  else throw new Error("Uint8Array expected, got " + typeof e2);
  return e2;
}
function us$1(e2, t) {
  if (t == null || typeof t != "object") throw new Error("options must be defined");
  return Object.assign(e2, t);
}
function fs$2(e2, t) {
  if (e2.length !== t.length) return false;
  let n3 = 0;
  for (let r2 = 0; r2 < e2.length; r2++) n3 |= e2[r2] ^ t[r2];
  return n3 === 0;
}
const ls$1 = (e2, t) => {
  function n3(r2, ...o3) {
    if (F$2(r2), e2.nonceLength !== void 0) {
      const l2 = o3[0];
      if (!l2) throw new Error("nonce / iv required");
      e2.varSizeNonce ? F$2(l2) : F$2(l2, e2.nonceLength);
    }
    const s2 = e2.tagLength;
    s2 && o3[1] !== void 0 && F$2(o3[1]);
    const i3 = t(r2, ...o3), c2 = (l2, f5) => {
      if (f5 !== void 0) {
        if (l2 !== 2) throw new Error("cipher output not supported");
        F$2(f5);
      }
    };
    let u2 = false;
    return { encrypt(l2, f5) {
      if (u2) throw new Error("cannot encrypt() twice with same key + nonce");
      return u2 = true, F$2(l2), c2(i3.encrypt.length, f5), i3.encrypt(l2, f5);
    }, decrypt(l2, f5) {
      if (F$2(l2), s2 && l2.length < s2) throw new Error("invalid ciphertext length: smaller than tagLength=" + s2);
      return c2(i3.decrypt.length, f5), i3.decrypt(l2, f5);
    } };
  }
  return Object.assign(n3, e2), n3;
};
function Cn$2(e2, t, n3 = true) {
  if (t === void 0) return new Uint8Array(e2);
  if (t.length !== e2) throw new Error("invalid output length, expected " + e2 + ", got: " + t.length);
  if (n3 && !ds$1(t)) throw new Error("invalid output, must be aligned");
  return t;
}
function kn$2(e2, t, n3, r2) {
  if (typeof e2.setBigUint64 == "function") return e2.setBigUint64(t, n3, r2);
  const o3 = BigInt(32), s2 = BigInt(4294967295), i3 = Number(n3 >> o3 & s2), c2 = Number(n3 & s2), u2 = 4, a2 = 0;
  e2.setUint32(t + u2, i3, r2), e2.setUint32(t + a2, c2, r2);
}
function ds$1(e2) {
  return e2.byteOffset % 4 === 0;
}
function gt$2(e2) {
  return Uint8Array.from(e2);
}
function Ee$2(...e2) {
  for (let t = 0; t < e2.length; t++) e2[t].fill(0);
}
const Dn$2 = (e2) => Uint8Array.from(e2.split("").map((t) => t.charCodeAt(0))), hs$1 = Dn$2("expand 16-byte k"), ps$1 = Dn$2("expand 32-byte k"), gs$1 = se$2(hs$1), ys$1 = se$2(ps$1);
function x$6(e2, t) {
  return e2 << t | e2 >>> 32 - t;
}
function yt$1(e2) {
  return e2.byteOffset % 4 === 0;
}
const Ve$2 = 64, ms$1 = 16, Mn$2 = 2 ** 32 - 1, Vn$2 = new Uint32Array();
function bs$2(e2, t, n3, r2, o3, s2, i3, c2) {
  const u2 = o3.length, a2 = new Uint8Array(Ve$2), l2 = se$2(a2), f5 = yt$1(o3) && yt$1(s2), d4 = f5 ? se$2(o3) : Vn$2, g2 = f5 ? se$2(s2) : Vn$2;
  for (let y3 = 0; y3 < u2; i3++) {
    if (e2(t, n3, r2, l2, i3, c2), i3 >= Mn$2) throw new Error("arx: counter overflow");
    const h4 = Math.min(Ve$2, u2 - y3);
    if (f5 && h4 === Ve$2) {
      const m4 = y3 / 4;
      if (y3 % 4 !== 0) throw new Error("arx: invalid block position");
      for (let B3 = 0, b2; B3 < ms$1; B3++) b2 = m4 + B3, g2[b2] = d4[b2] ^ l2[B3];
      y3 += Ve$2;
      continue;
    }
    for (let m4 = 0, B3; m4 < h4; m4++) B3 = y3 + m4, s2[B3] = o3[B3] ^ a2[m4];
    y3 += h4;
  }
}
function ws$1(e2, t) {
  const { allowShortKeys: n3, extendNonceFn: r2, counterLength: o3, counterRight: s2, rounds: i3 } = us$1({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, t);
  if (typeof e2 != "function") throw new Error("core must be a function");
  return ht$2(o3), ht$2(i3), jn$2(s2), jn$2(n3), (c2, u2, a2, l2, f5 = 0) => {
    F$2(c2), F$2(u2), F$2(a2);
    const d4 = a2.length;
    if (l2 === void 0 && (l2 = new Uint8Array(d4)), F$2(l2), ht$2(f5), f5 < 0 || f5 >= Mn$2) throw new Error("arx: counter overflow");
    if (l2.length < d4) throw new Error(`arx: output (${l2.length}) is shorter than data (${d4})`);
    const g2 = [];
    let y3 = c2.length, h4, m4;
    if (y3 === 32) g2.push(h4 = gt$2(c2)), m4 = ys$1;
    else if (y3 === 16 && n3) h4 = new Uint8Array(32), h4.set(c2), h4.set(c2, 16), m4 = gs$1, g2.push(h4);
    else throw new Error(`arx: invalid 32-byte key, got length=${y3}`);
    yt$1(u2) || g2.push(u2 = gt$2(u2));
    const B3 = se$2(h4);
    if (r2) {
      if (u2.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      r2(m4, B3, se$2(u2.subarray(0, 16)), B3), u2 = u2.subarray(16);
    }
    const b2 = 16 - o3;
    if (b2 !== u2.length) throw new Error(`arx: nonce must be ${b2} or 16 bytes`);
    if (b2 !== 12) {
      const I3 = new Uint8Array(12);
      I3.set(u2, s2 ? 0 : 12 - u2.length), u2 = I3, g2.push(u2);
    }
    const _3 = se$2(u2);
    return bs$2(e2, m4, B3, _3, a2, l2, f5, i3), Ee$2(...g2), l2;
  };
}
const M$4 = (e2, t) => e2[t++] & 255 | (e2[t++] & 255) << 8;
let Es$1 = class Es {
  constructor(t) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, t = pt$2(t), F$2(t, 32);
    const n3 = M$4(t, 0), r2 = M$4(t, 2), o3 = M$4(t, 4), s2 = M$4(t, 6), i3 = M$4(t, 8), c2 = M$4(t, 10), u2 = M$4(t, 12), a2 = M$4(t, 14);
    this.r[0] = n3 & 8191, this.r[1] = (n3 >>> 13 | r2 << 3) & 8191, this.r[2] = (r2 >>> 10 | o3 << 6) & 7939, this.r[3] = (o3 >>> 7 | s2 << 9) & 8191, this.r[4] = (s2 >>> 4 | i3 << 12) & 255, this.r[5] = i3 >>> 1 & 8190, this.r[6] = (i3 >>> 14 | c2 << 2) & 8191, this.r[7] = (c2 >>> 11 | u2 << 5) & 8065, this.r[8] = (u2 >>> 8 | a2 << 8) & 8191, this.r[9] = a2 >>> 5 & 127;
    for (let l2 = 0; l2 < 8; l2++) this.pad[l2] = M$4(t, 16 + 2 * l2);
  }
  process(t, n3, r2 = false) {
    const o3 = r2 ? 0 : 2048, { h: s2, r: i3 } = this, c2 = i3[0], u2 = i3[1], a2 = i3[2], l2 = i3[3], f5 = i3[4], d4 = i3[5], g2 = i3[6], y3 = i3[7], h4 = i3[8], m4 = i3[9], B3 = M$4(t, n3 + 0), b2 = M$4(t, n3 + 2), _3 = M$4(t, n3 + 4), I3 = M$4(t, n3 + 6), k2 = M$4(t, n3 + 8), E2 = M$4(t, n3 + 10), L3 = M$4(t, n3 + 12), j2 = M$4(t, n3 + 14);
    let v2 = s2[0] + (B3 & 8191), O4 = s2[1] + ((B3 >>> 13 | b2 << 3) & 8191), w2 = s2[2] + ((b2 >>> 10 | _3 << 6) & 8191), R3 = s2[3] + ((_3 >>> 7 | I3 << 9) & 8191), A2 = s2[4] + ((I3 >>> 4 | k2 << 12) & 8191), T2 = s2[5] + (k2 >>> 1 & 8191), N2 = s2[6] + ((k2 >>> 14 | E2 << 2) & 8191), S3 = s2[7] + ((E2 >>> 11 | L3 << 5) & 8191), U2 = s2[8] + ((L3 >>> 8 | j2 << 8) & 8191), $2 = s2[9] + (j2 >>> 5 | o3), p2 = 0, C2 = p2 + v2 * c2 + O4 * (5 * m4) + w2 * (5 * h4) + R3 * (5 * y3) + A2 * (5 * g2);
    p2 = C2 >>> 13, C2 &= 8191, C2 += T2 * (5 * d4) + N2 * (5 * f5) + S3 * (5 * l2) + U2 * (5 * a2) + $2 * (5 * u2), p2 += C2 >>> 13, C2 &= 8191;
    let D2 = p2 + v2 * u2 + O4 * c2 + w2 * (5 * m4) + R3 * (5 * h4) + A2 * (5 * y3);
    p2 = D2 >>> 13, D2 &= 8191, D2 += T2 * (5 * g2) + N2 * (5 * d4) + S3 * (5 * f5) + U2 * (5 * l2) + $2 * (5 * a2), p2 += D2 >>> 13, D2 &= 8191;
    let P3 = p2 + v2 * a2 + O4 * u2 + w2 * c2 + R3 * (5 * m4) + A2 * (5 * h4);
    p2 = P3 >>> 13, P3 &= 8191, P3 += T2 * (5 * y3) + N2 * (5 * g2) + S3 * (5 * d4) + U2 * (5 * f5) + $2 * (5 * l2), p2 += P3 >>> 13, P3 &= 8191;
    let G2 = p2 + v2 * l2 + O4 * a2 + w2 * u2 + R3 * c2 + A2 * (5 * m4);
    p2 = G2 >>> 13, G2 &= 8191, G2 += T2 * (5 * h4) + N2 * (5 * y3) + S3 * (5 * g2) + U2 * (5 * d4) + $2 * (5 * f5), p2 += G2 >>> 13, G2 &= 8191;
    let X2 = p2 + v2 * f5 + O4 * l2 + w2 * a2 + R3 * u2 + A2 * c2;
    p2 = X2 >>> 13, X2 &= 8191, X2 += T2 * (5 * m4) + N2 * (5 * h4) + S3 * (5 * y3) + U2 * (5 * g2) + $2 * (5 * d4), p2 += X2 >>> 13, X2 &= 8191;
    let Z2 = p2 + v2 * d4 + O4 * f5 + w2 * l2 + R3 * a2 + A2 * u2;
    p2 = Z2 >>> 13, Z2 &= 8191, Z2 += T2 * c2 + N2 * (5 * m4) + S3 * (5 * h4) + U2 * (5 * y3) + $2 * (5 * g2), p2 += Z2 >>> 13, Z2 &= 8191;
    let he2 = p2 + v2 * g2 + O4 * d4 + w2 * f5 + R3 * l2 + A2 * a2;
    p2 = he2 >>> 13, he2 &= 8191, he2 += T2 * u2 + N2 * c2 + S3 * (5 * m4) + U2 * (5 * h4) + $2 * (5 * y3), p2 += he2 >>> 13, he2 &= 8191;
    let pe2 = p2 + v2 * y3 + O4 * g2 + w2 * d4 + R3 * f5 + A2 * l2;
    p2 = pe2 >>> 13, pe2 &= 8191, pe2 += T2 * a2 + N2 * u2 + S3 * c2 + U2 * (5 * m4) + $2 * (5 * h4), p2 += pe2 >>> 13, pe2 &= 8191;
    let ge2 = p2 + v2 * h4 + O4 * y3 + w2 * g2 + R3 * d4 + A2 * f5;
    p2 = ge2 >>> 13, ge2 &= 8191, ge2 += T2 * l2 + N2 * a2 + S3 * u2 + U2 * c2 + $2 * (5 * m4), p2 += ge2 >>> 13, ge2 &= 8191;
    let ye2 = p2 + v2 * m4 + O4 * h4 + w2 * y3 + R3 * g2 + A2 * d4;
    p2 = ye2 >>> 13, ye2 &= 8191, ye2 += T2 * f5 + N2 * l2 + S3 * a2 + U2 * u2 + $2 * c2, p2 += ye2 >>> 13, ye2 &= 8191, p2 = (p2 << 2) + p2 | 0, p2 = p2 + C2 | 0, C2 = p2 & 8191, p2 = p2 >>> 13, D2 += p2, s2[0] = C2, s2[1] = D2, s2[2] = P3, s2[3] = G2, s2[4] = X2, s2[5] = Z2, s2[6] = he2, s2[7] = pe2, s2[8] = ge2, s2[9] = ye2;
  }
  finalize() {
    const { h: t, pad: n3 } = this, r2 = new Uint16Array(10);
    let o3 = t[1] >>> 13;
    t[1] &= 8191;
    for (let c2 = 2; c2 < 10; c2++) t[c2] += o3, o3 = t[c2] >>> 13, t[c2] &= 8191;
    t[0] += o3 * 5, o3 = t[0] >>> 13, t[0] &= 8191, t[1] += o3, o3 = t[1] >>> 13, t[1] &= 8191, t[2] += o3, r2[0] = t[0] + 5, o3 = r2[0] >>> 13, r2[0] &= 8191;
    for (let c2 = 1; c2 < 10; c2++) r2[c2] = t[c2] + o3, o3 = r2[c2] >>> 13, r2[c2] &= 8191;
    r2[9] -= 8192;
    let s2 = (o3 ^ 1) - 1;
    for (let c2 = 0; c2 < 10; c2++) r2[c2] &= s2;
    s2 = ~s2;
    for (let c2 = 0; c2 < 10; c2++) t[c2] = t[c2] & s2 | r2[c2];
    t[0] = (t[0] | t[1] << 13) & 65535, t[1] = (t[1] >>> 3 | t[2] << 10) & 65535, t[2] = (t[2] >>> 6 | t[3] << 7) & 65535, t[3] = (t[3] >>> 9 | t[4] << 4) & 65535, t[4] = (t[4] >>> 12 | t[5] << 1 | t[6] << 14) & 65535, t[5] = (t[6] >>> 2 | t[7] << 11) & 65535, t[6] = (t[7] >>> 5 | t[8] << 8) & 65535, t[7] = (t[8] >>> 8 | t[9] << 5) & 65535;
    let i3 = t[0] + n3[0];
    t[0] = i3 & 65535;
    for (let c2 = 1; c2 < 8; c2++) i3 = (t[c2] + n3[c2] | 0) + (i3 >>> 16) | 0, t[c2] = i3 & 65535;
    Ee$2(r2);
  }
  update(t) {
    Bn$2(this);
    const { buffer: n3, blockLen: r2 } = this;
    t = pt$2(t);
    const o3 = t.length;
    for (let s2 = 0; s2 < o3; ) {
      const i3 = Math.min(r2 - this.pos, o3 - s2);
      if (i3 === r2) {
        for (; r2 <= o3 - s2; s2 += r2) this.process(t, s2);
        continue;
      }
      n3.set(t.subarray(s2, s2 + i3), this.pos), this.pos += i3, s2 += i3, this.pos === r2 && (this.process(n3, 0, false), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Ee$2(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(t) {
    Bn$2(this), ss$1(t, this), this.finished = true;
    const { buffer: n3, h: r2 } = this;
    let { pos: o3 } = this;
    if (o3) {
      for (n3[o3++] = 1; o3 < 16; o3++) n3[o3] = 0;
      this.process(n3, 0, true);
    }
    this.finalize();
    let s2 = 0;
    for (let i3 = 0; i3 < 8; i3++) t[s2++] = r2[i3] >>> 0, t[s2++] = r2[i3] >>> 8;
    return t;
  }
  digest() {
    const { buffer: t, outputLen: n3 } = this;
    this.digestInto(t);
    const r2 = t.slice(0, n3);
    return this.destroy(), r2;
  }
};
function vs$2(e2) {
  const t = (r2, o3) => e2(o3).update(pt$2(r2)).digest(), n3 = e2(new Uint8Array(32));
  return t.outputLen = n3.outputLen, t.blockLen = n3.blockLen, t.create = (r2) => e2(r2), t;
}
const xs$2 = vs$2((e2) => new Es$1(e2));
function Os$2(e2, t, n3, r2, o3, s2 = 20) {
  let i3 = e2[0], c2 = e2[1], u2 = e2[2], a2 = e2[3], l2 = t[0], f5 = t[1], d4 = t[2], g2 = t[3], y3 = t[4], h4 = t[5], m4 = t[6], B3 = t[7], b2 = o3, _3 = n3[0], I3 = n3[1], k2 = n3[2], E2 = i3, L3 = c2, j2 = u2, v2 = a2, O4 = l2, w2 = f5, R3 = d4, A2 = g2, T2 = y3, N2 = h4, S3 = m4, U2 = B3, $2 = b2, p2 = _3, C2 = I3, D2 = k2;
  for (let G2 = 0; G2 < s2; G2 += 2) E2 = E2 + O4 | 0, $2 = x$6($2 ^ E2, 16), T2 = T2 + $2 | 0, O4 = x$6(O4 ^ T2, 12), E2 = E2 + O4 | 0, $2 = x$6($2 ^ E2, 8), T2 = T2 + $2 | 0, O4 = x$6(O4 ^ T2, 7), L3 = L3 + w2 | 0, p2 = x$6(p2 ^ L3, 16), N2 = N2 + p2 | 0, w2 = x$6(w2 ^ N2, 12), L3 = L3 + w2 | 0, p2 = x$6(p2 ^ L3, 8), N2 = N2 + p2 | 0, w2 = x$6(w2 ^ N2, 7), j2 = j2 + R3 | 0, C2 = x$6(C2 ^ j2, 16), S3 = S3 + C2 | 0, R3 = x$6(R3 ^ S3, 12), j2 = j2 + R3 | 0, C2 = x$6(C2 ^ j2, 8), S3 = S3 + C2 | 0, R3 = x$6(R3 ^ S3, 7), v2 = v2 + A2 | 0, D2 = x$6(D2 ^ v2, 16), U2 = U2 + D2 | 0, A2 = x$6(A2 ^ U2, 12), v2 = v2 + A2 | 0, D2 = x$6(D2 ^ v2, 8), U2 = U2 + D2 | 0, A2 = x$6(A2 ^ U2, 7), E2 = E2 + w2 | 0, D2 = x$6(D2 ^ E2, 16), S3 = S3 + D2 | 0, w2 = x$6(w2 ^ S3, 12), E2 = E2 + w2 | 0, D2 = x$6(D2 ^ E2, 8), S3 = S3 + D2 | 0, w2 = x$6(w2 ^ S3, 7), L3 = L3 + R3 | 0, $2 = x$6($2 ^ L3, 16), U2 = U2 + $2 | 0, R3 = x$6(R3 ^ U2, 12), L3 = L3 + R3 | 0, $2 = x$6($2 ^ L3, 8), U2 = U2 + $2 | 0, R3 = x$6(R3 ^ U2, 7), j2 = j2 + A2 | 0, p2 = x$6(p2 ^ j2, 16), T2 = T2 + p2 | 0, A2 = x$6(A2 ^ T2, 12), j2 = j2 + A2 | 0, p2 = x$6(p2 ^ j2, 8), T2 = T2 + p2 | 0, A2 = x$6(A2 ^ T2, 7), v2 = v2 + O4 | 0, C2 = x$6(C2 ^ v2, 16), N2 = N2 + C2 | 0, O4 = x$6(O4 ^ N2, 12), v2 = v2 + O4 | 0, C2 = x$6(C2 ^ v2, 8), N2 = N2 + C2 | 0, O4 = x$6(O4 ^ N2, 7);
  let P3 = 0;
  r2[P3++] = i3 + E2 | 0, r2[P3++] = c2 + L3 | 0, r2[P3++] = u2 + j2 | 0, r2[P3++] = a2 + v2 | 0, r2[P3++] = l2 + O4 | 0, r2[P3++] = f5 + w2 | 0, r2[P3++] = d4 + R3 | 0, r2[P3++] = g2 + A2 | 0, r2[P3++] = y3 + T2 | 0, r2[P3++] = h4 + N2 | 0, r2[P3++] = m4 + S3 | 0, r2[P3++] = B3 + U2 | 0, r2[P3++] = b2 + $2 | 0, r2[P3++] = _3 + p2 | 0, r2[P3++] = I3 + C2 | 0, r2[P3++] = k2 + D2 | 0;
}
const Is$2 = ws$1(Os$2, { counterRight: false, counterLength: 4, allowShortKeys: false }), As$2 = new Uint8Array(16), Hn$2 = (e2, t) => {
  e2.update(t);
  const n3 = t.length % 16;
  n3 && e2.update(As$2.subarray(n3));
}, Ns$2 = new Uint8Array(32);
function Kn$2(e2, t, n3, r2, o3) {
  const s2 = e2(t, n3, Ns$2), i3 = xs$2.create(s2);
  o3 && Hn$2(i3, o3), Hn$2(i3, r2);
  const c2 = new Uint8Array(16), u2 = is$1(c2);
  kn$2(u2, 0, BigInt(o3 ? o3.length : 0), true), kn$2(u2, 8, BigInt(r2.length), true), i3.update(c2);
  const a2 = i3.digest();
  return Ee$2(s2, c2), a2;
}
const Ss$1 = (e2) => (t, n3, r2) => ({ encrypt(s2, i3) {
  const c2 = s2.length;
  i3 = Cn$2(c2 + 16, i3, false), i3.set(s2);
  const u2 = i3.subarray(0, -16);
  e2(t, n3, u2, u2, 1);
  const a2 = Kn$2(e2, t, n3, u2, r2);
  return i3.set(a2, c2), Ee$2(a2), i3;
}, decrypt(s2, i3) {
  i3 = Cn$2(s2.length - 16, i3, false);
  const c2 = s2.subarray(0, -16), u2 = s2.subarray(-16), a2 = Kn$2(e2, t, n3, c2, r2);
  if (!fs$2(u2, a2)) throw new Error("invalid tag");
  return i3.set(s2.subarray(0, -16)), e2(t, n3, i3, i3, 1), Ee$2(a2), i3;
} }), Fn$2 = ls$1({ blockSize: 64, nonceLength: 12, tagLength: 16 }, Ss$1(Is$2));
let qn$2 = class qn extends it$1 {
  constructor(t, n3) {
    super(), this.finished = false, this.destroyed = false, ot$1(t);
    const r2 = we$1(n3);
    if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o3 = this.blockLen, s2 = new Uint8Array(o3);
    s2.set(r2.length > o3 ? t.create().update(r2).digest() : r2);
    for (let i3 = 0; i3 < s2.length; i3++) s2[i3] ^= 54;
    this.iHash.update(s2), this.oHash = t.create();
    for (let i3 = 0; i3 < s2.length; i3++) s2[i3] ^= 106;
    this.oHash.update(s2), s2.fill(0);
  }
  update(t) {
    return me$2(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    me$2(this), je$2(t, this.outputLen), this.finished = true, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n3, iHash: r2, finished: o3, destroyed: s2, blockLen: i3, outputLen: c2 } = this;
    return t = t, t.finished = o3, t.destroyed = s2, t.blockLen = i3, t.outputLen = c2, t.oHash = n3._cloneInto(t.oHash), t.iHash = r2._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
const mt$2 = (e2, t, n3) => new qn$2(e2, t).update(n3).digest();
mt$2.create = (e2, t) => new qn$2(e2, t);
function Us$1(e2, t, n3) {
  return ot$1(e2), n3 === void 0 && (n3 = new Uint8Array(e2.outputLen)), mt$2(e2, we$1(n3), we$1(t));
}
const bt = new Uint8Array([0]), Gn$2 = new Uint8Array();
function _s$1(e2, t, n3, r2 = 32) {
  if (ot$1(e2), Ne$2(r2), r2 > 255 * e2.outputLen) throw new Error("Length should be <= 255*HashLen");
  const o3 = Math.ceil(r2 / e2.outputLen);
  n3 === void 0 && (n3 = Gn$2);
  const s2 = new Uint8Array(o3 * e2.outputLen), i3 = mt$2.create(e2, t), c2 = i3._cloneInto(), u2 = new Uint8Array(i3.outputLen);
  for (let a2 = 0; a2 < o3; a2++) bt[0] = a2 + 1, c2.update(a2 === 0 ? Gn$2 : u2).update(n3).update(bt).digestInto(u2), s2.set(u2, e2.outputLen * a2), i3._cloneInto(c2);
  return i3.destroy(), c2.destroy(), u2.fill(0), bt.fill(0), s2.slice(0, r2);
}
const Ts$2 = (e2, t, n3, r2, o3) => _s$1(e2, Us$1(e2, t, n3), r2, o3);
function $s$1(e2, t, n3, r2) {
  if (typeof e2.setBigUint64 == "function") return e2.setBigUint64(t, n3, r2);
  const o3 = BigInt(32), s2 = BigInt(4294967295), i3 = Number(n3 >> o3 & s2), c2 = Number(n3 & s2), u2 = r2 ? 4 : 0, a2 = r2 ? 0 : 4;
  e2.setUint32(t + u2, i3, r2), e2.setUint32(t + a2, c2, r2);
}
function Rs$2(e2, t, n3) {
  return e2 & t ^ ~e2 & n3;
}
function Ps$2(e2, t, n3) {
  return e2 & t ^ e2 & n3 ^ t & n3;
}
let Ls$3 = class Ls extends it$1 {
  constructor(t, n3, r2, o3) {
    super(), this.blockLen = t, this.outputLen = n3, this.padOffset = r2, this.isLE = o3, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(t), this.view = st$1(this.buffer);
  }
  update(t) {
    me$2(this);
    const { view: n3, buffer: r2, blockLen: o3 } = this;
    t = we$1(t);
    const s2 = t.length;
    for (let i3 = 0; i3 < s2; ) {
      const c2 = Math.min(o3 - this.pos, s2 - i3);
      if (c2 === o3) {
        const u2 = st$1(t);
        for (; o3 <= s2 - i3; i3 += o3) this.process(u2, i3);
        continue;
      }
      r2.set(t.subarray(i3, i3 + c2), this.pos), this.pos += c2, i3 += c2, this.pos === o3 && (this.process(n3, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    me$2(this), sn$2(t, this), this.finished = true;
    const { buffer: n3, view: r2, blockLen: o3, isLE: s2 } = this;
    let { pos: i3 } = this;
    n3[i3++] = 128, this.buffer.subarray(i3).fill(0), this.padOffset > o3 - i3 && (this.process(r2, 0), i3 = 0);
    for (let f5 = i3; f5 < o3; f5++) n3[f5] = 0;
    $s$1(r2, o3 - 8, BigInt(this.length * 8), s2), this.process(r2, 0);
    const c2 = st$1(t), u2 = this.outputLen;
    if (u2 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const a2 = u2 / 4, l2 = this.get();
    if (a2 > l2.length) throw new Error("_sha2: outputLen bigger than state");
    for (let f5 = 0; f5 < a2; f5++) c2.setUint32(4 * f5, l2[f5], s2);
  }
  digest() {
    const { buffer: t, outputLen: n3 } = this;
    this.digestInto(t);
    const r2 = t.slice(0, n3);
    return this.destroy(), r2;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n3, buffer: r2, length: o3, finished: s2, destroyed: i3, pos: c2 } = this;
    return t.length = o3, t.pos = c2, t.finished = s2, t.destroyed = i3, o3 % n3 && t.buffer.set(r2), t;
  }
};
const Bs$1 = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), ie$2 = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), ce$2 = new Uint32Array(64);
let js$2 = class js extends Ls$3 {
  constructor() {
    super(64, 32, 8, false), this.A = ie$2[0] | 0, this.B = ie$2[1] | 0, this.C = ie$2[2] | 0, this.D = ie$2[3] | 0, this.E = ie$2[4] | 0, this.F = ie$2[5] | 0, this.G = ie$2[6] | 0, this.H = ie$2[7] | 0;
  }
  get() {
    const { A: t, B: n3, C: r2, D: o3, E: s2, F: i3, G: c2, H: u2 } = this;
    return [t, n3, r2, o3, s2, i3, c2, u2];
  }
  set(t, n3, r2, o3, s2, i3, c2, u2) {
    this.A = t | 0, this.B = n3 | 0, this.C = r2 | 0, this.D = o3 | 0, this.E = s2 | 0, this.F = i3 | 0, this.G = c2 | 0, this.H = u2 | 0;
  }
  process(t, n3) {
    for (let f5 = 0; f5 < 16; f5++, n3 += 4) ce$2[f5] = t.getUint32(n3, false);
    for (let f5 = 16; f5 < 64; f5++) {
      const d4 = ce$2[f5 - 15], g2 = ce$2[f5 - 2], y3 = J$3(d4, 7) ^ J$3(d4, 18) ^ d4 >>> 3, h4 = J$3(g2, 17) ^ J$3(g2, 19) ^ g2 >>> 10;
      ce$2[f5] = h4 + ce$2[f5 - 7] + y3 + ce$2[f5 - 16] | 0;
    }
    let { A: r2, B: o3, C: s2, D: i3, E: c2, F: u2, G: a2, H: l2 } = this;
    for (let f5 = 0; f5 < 64; f5++) {
      const d4 = J$3(c2, 6) ^ J$3(c2, 11) ^ J$3(c2, 25), g2 = l2 + d4 + Rs$2(c2, u2, a2) + Bs$1[f5] + ce$2[f5] | 0, h4 = (J$3(r2, 2) ^ J$3(r2, 13) ^ J$3(r2, 22)) + Ps$2(r2, o3, s2) | 0;
      l2 = a2, a2 = u2, u2 = c2, c2 = i3 + g2 | 0, i3 = s2, s2 = o3, o3 = r2, r2 = g2 + h4 | 0;
    }
    r2 = r2 + this.A | 0, o3 = o3 + this.B | 0, s2 = s2 + this.C | 0, i3 = i3 + this.D | 0, c2 = c2 + this.E | 0, u2 = u2 + this.F | 0, a2 = a2 + this.G | 0, l2 = l2 + this.H | 0, this.set(r2, o3, s2, i3, c2, u2, a2, l2);
  }
  roundClean() {
    ce$2.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
const He$1 = fn$2(() => new js$2());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Wn$2 = BigInt(0);
function wt$2(e2) {
  return e2 instanceof Uint8Array || ArrayBuffer.isView(e2) && e2.constructor.name === "Uint8Array";
}
function zn$2(e2) {
  if (!wt$2(e2)) throw new Error("Uint8Array expected");
}
const Cs$2 = Array.from({ length: 256 }, (e2, t) => t.toString(16).padStart(2, "0"));
function ks$1(e2) {
  zn$2(e2);
  let t = "";
  for (let n3 = 0; n3 < e2.length; n3++) t += Cs$2[e2[n3]];
  return t;
}
function Ds$2(e2) {
  if (typeof e2 != "string") throw new Error("hex string expected, got " + typeof e2);
  return e2 === "" ? Wn$2 : BigInt("0x" + e2);
}
const ee = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Jn$2(e2) {
  if (e2 >= ee._0 && e2 <= ee._9) return e2 - ee._0;
  if (e2 >= ee.A && e2 <= ee.F) return e2 - (ee.A - 10);
  if (e2 >= ee.a && e2 <= ee.f) return e2 - (ee.a - 10);
}
function Yn$2(e2) {
  if (typeof e2 != "string") throw new Error("hex string expected, got " + typeof e2);
  const t = e2.length, n3 = t / 2;
  if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
  const r2 = new Uint8Array(n3);
  for (let o3 = 0, s2 = 0; o3 < n3; o3++, s2 += 2) {
    const i3 = Jn$2(e2.charCodeAt(s2)), c2 = Jn$2(e2.charCodeAt(s2 + 1));
    if (i3 === void 0 || c2 === void 0) {
      const u2 = e2[s2] + e2[s2 + 1];
      throw new Error('hex string expected, got non-hex character "' + u2 + '" at index ' + s2);
    }
    r2[o3] = i3 * 16 + c2;
  }
  return r2;
}
function Xn$2(e2) {
  return zn$2(e2), Ds$2(ks$1(Uint8Array.from(e2).reverse()));
}
function Ms$1(e2, t) {
  return Yn$2(e2.toString(16).padStart(t * 2, "0"));
}
function Vs$2(e2, t) {
  return Ms$1(e2, t).reverse();
}
function Zn$2(e2, t, n3) {
  let r2;
  if (typeof t == "string") try {
    r2 = Yn$2(t);
  } catch (s2) {
    throw new Error(e2 + " must be hex string or Uint8Array, cause: " + s2);
  }
  else if (wt$2(t)) r2 = Uint8Array.from(t);
  else throw new Error(e2 + " must be hex string or Uint8Array");
  const o3 = r2.length;
  if (typeof n3 == "number" && o3 !== n3) throw new Error(e2 + " of length " + n3 + " expected, got " + o3);
  return r2;
}
const Et$3 = (e2) => typeof e2 == "bigint" && Wn$2 <= e2;
function Hs$2(e2, t, n3) {
  return Et$3(e2) && Et$3(t) && Et$3(n3) && t <= e2 && e2 < n3;
}
function Qn$2(e2, t, n3, r2) {
  if (!Hs$2(t, n3, r2)) throw new Error("expected valid " + e2 + ": " + n3 + " <= n < " + r2 + ", got " + t);
}
const Ks$1 = { bigint: (e2) => typeof e2 == "bigint", function: (e2) => typeof e2 == "function", boolean: (e2) => typeof e2 == "boolean", string: (e2) => typeof e2 == "string", stringOrUint8Array: (e2) => typeof e2 == "string" || wt$2(e2), isSafeInteger: (e2) => Number.isSafeInteger(e2), array: (e2) => Array.isArray(e2), field: (e2, t) => t.Fp.isValid(e2), hash: (e2) => typeof e2 == "function" && Number.isSafeInteger(e2.outputLen) };
function Fs$1(e2, t, n3 = {}) {
  const r2 = (o3, s2, i3) => {
    const c2 = Ks$1[s2];
    if (typeof c2 != "function") throw new Error("invalid validator function");
    const u2 = e2[o3];
    if (!(i3 && u2 === void 0) && !c2(u2, e2)) throw new Error("param " + String(o3) + " is invalid. Expected " + s2 + ", got " + u2);
  };
  for (const [o3, s2] of Object.entries(t)) r2(o3, s2, false);
  for (const [o3, s2] of Object.entries(n3)) r2(o3, s2, true);
  return e2;
}
const ve$1 = BigInt(0), Ke$3 = BigInt(1);
function er$2(e2, t) {
  const n3 = e2 % t;
  return n3 >= ve$1 ? n3 : t + n3;
}
function qs$3(e2, t, n3) {
  if (t < ve$1) throw new Error("invalid exponent, negatives unsupported");
  if (n3 <= ve$1) throw new Error("invalid modulus");
  if (n3 === Ke$3) return ve$1;
  let r2 = Ke$3;
  for (; t > ve$1; ) t & Ke$3 && (r2 = r2 * e2 % n3), e2 = e2 * e2 % n3, t >>= Ke$3;
  return r2;
}
function z$5(e2, t, n3) {
  let r2 = e2;
  for (; t-- > ve$1; ) r2 *= r2, r2 %= n3;
  return r2;
}
BigInt(0), BigInt(1), BigInt(0), BigInt(1), BigInt(2), BigInt(8);
const xe$2 = BigInt(0), vt$2 = BigInt(1);
function Gs$2(e2) {
  return Fs$1(e2, { a: "bigint" }, { montgomeryBits: "isSafeInteger", nByteLength: "isSafeInteger", adjustScalarBytes: "function", domain: "function", powPminus2: "function", Gu: "bigint" }), Object.freeze({ ...e2 });
}
function Ws$2(e2) {
  const t = Gs$2(e2), { P: n3 } = t, r2 = (b2) => er$2(b2, n3), o3 = t.montgomeryBits, s2 = Math.ceil(o3 / 8), i3 = t.nByteLength, c2 = t.adjustScalarBytes || ((b2) => b2), u2 = t.powPminus2 || ((b2) => qs$3(b2, n3 - BigInt(2), n3));
  function a2(b2, _3, I3) {
    const k2 = r2(b2 * (_3 - I3));
    return _3 = r2(_3 - k2), I3 = r2(I3 + k2), [_3, I3];
  }
  const l2 = (t.a - BigInt(2)) / BigInt(4);
  function f5(b2, _3) {
    Qn$2("u", b2, xe$2, n3), Qn$2("scalar", _3, xe$2, n3);
    const I3 = _3, k2 = b2;
    let E2 = vt$2, L3 = xe$2, j2 = b2, v2 = vt$2, O4 = xe$2, w2;
    for (let A2 = BigInt(o3 - 1); A2 >= xe$2; A2--) {
      const T2 = I3 >> A2 & vt$2;
      O4 ^= T2, w2 = a2(O4, E2, j2), E2 = w2[0], j2 = w2[1], w2 = a2(O4, L3, v2), L3 = w2[0], v2 = w2[1], O4 = T2;
      const N2 = E2 + L3, S3 = r2(N2 * N2), U2 = E2 - L3, $2 = r2(U2 * U2), p2 = S3 - $2, C2 = j2 + v2, D2 = j2 - v2, P3 = r2(D2 * N2), G2 = r2(C2 * U2), X2 = P3 + G2, Z2 = P3 - G2;
      j2 = r2(X2 * X2), v2 = r2(k2 * r2(Z2 * Z2)), E2 = r2(S3 * $2), L3 = r2(p2 * (S3 + r2(l2 * p2)));
    }
    w2 = a2(O4, E2, j2), E2 = w2[0], j2 = w2[1], w2 = a2(O4, L3, v2), L3 = w2[0], v2 = w2[1];
    const R3 = u2(L3);
    return r2(E2 * R3);
  }
  function d4(b2) {
    return Vs$2(r2(b2), s2);
  }
  function g2(b2) {
    const _3 = Zn$2("u coordinate", b2, s2);
    return i3 === 32 && (_3[31] &= 127), Xn$2(_3);
  }
  function y3(b2) {
    const _3 = Zn$2("scalar", b2), I3 = _3.length;
    if (I3 !== s2 && I3 !== i3) {
      let k2 = "" + s2 + " or " + i3;
      throw new Error("invalid scalar, expected " + k2 + " bytes, got " + I3);
    }
    return Xn$2(c2(_3));
  }
  function h4(b2, _3) {
    const I3 = g2(_3), k2 = y3(b2), E2 = f5(I3, k2);
    if (E2 === xe$2) throw new Error("invalid private or public key received");
    return d4(E2);
  }
  const m4 = d4(t.Gu);
  function B3(b2) {
    return h4(b2, m4);
  }
  return { scalarMult: h4, scalarMultBase: B3, getSharedSecret: (b2, _3) => h4(b2, _3), getPublicKey: (b2) => B3(b2), utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) }, GuBytes: m4 };
}
const xt$2 = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
const zs$1 = BigInt(1), tr$2 = BigInt(2), Js$2 = BigInt(3), Ys$2 = BigInt(5);
BigInt(8);
function Xs$2(e2) {
  const t = BigInt(10), n3 = BigInt(20), r2 = BigInt(40), o3 = BigInt(80), s2 = xt$2, c2 = e2 * e2 % s2 * e2 % s2, u2 = z$5(c2, tr$2, s2) * c2 % s2, a2 = z$5(u2, zs$1, s2) * e2 % s2, l2 = z$5(a2, Ys$2, s2) * a2 % s2, f5 = z$5(l2, t, s2) * l2 % s2, d4 = z$5(f5, n3, s2) * f5 % s2, g2 = z$5(d4, r2, s2) * d4 % s2, y3 = z$5(g2, o3, s2) * g2 % s2, h4 = z$5(y3, o3, s2) * g2 % s2, m4 = z$5(h4, t, s2) * l2 % s2;
  return { pow_p_5_8: z$5(m4, tr$2, s2) * e2 % s2, b2: c2 };
}
function Zs$2(e2) {
  return e2[0] &= 248, e2[31] &= 127, e2[31] |= 64, e2;
}
const Ot$2 = Ws$2({ P: xt$2, a: BigInt(486662), montgomeryBits: 255, nByteLength: 32, Gu: BigInt(9), powPminus2: (e2) => {
  const t = xt$2, { pow_p_5_8: n3, b2: r2 } = Xs$2(e2);
  return er$2(z$5(n3, Js$2, t) * r2, t);
}, adjustScalarBytes: Zs$2, randomBytes: Se$2 }), It$2 = "base10", V$2 = "base16", At$2 = "base64pad", Qs$2 = "base64url", Oe$2 = "utf8", Nt$2 = 0, Ie$1 = 1, _e$3 = 2, ei$2 = 0, nr$2 = 1, Te$1 = 12, St$3 = 32;
function ti$2() {
  const e2 = Ot$2.utils.randomPrivateKey(), t = Ot$2.getPublicKey(e2);
  return { privateKey: toString(e2, V$2), publicKey: toString(t, V$2) };
}
function ni$2() {
  const e2 = Se$2(St$3);
  return toString(e2, V$2);
}
function ri$2(e2, t) {
  const n3 = Ot$2.getSharedSecret(fromString(e2, V$2), fromString(t, V$2)), r2 = Ts$2(He$1, n3, void 0, void 0, St$3);
  return toString(r2, V$2);
}
function oi$2(e2) {
  const t = He$1(fromString(e2, V$2));
  return toString(t, V$2);
}
function si$2(e2) {
  const t = He$1(fromString(e2, Oe$2));
  return toString(t, V$2);
}
function Ut$2(e2) {
  return fromString(`${e2}`, It$2);
}
function fe$1(e2) {
  return Number(toString(e2, It$2));
}
function ii$2(e2) {
  const t = Ut$2(typeof e2.type < "u" ? e2.type : Nt$2);
  if (fe$1(t) === Ie$1 && typeof e2.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const n3 = typeof e2.senderPublicKey < "u" ? fromString(e2.senderPublicKey, V$2) : void 0, r2 = typeof e2.iv < "u" ? fromString(e2.iv, V$2) : Se$2(Te$1), o3 = fromString(e2.symKey, V$2), s2 = Fn$2(o3, r2).encrypt(fromString(e2.message, Oe$2));
  return _t$3({ type: t, sealed: s2, iv: r2, senderPublicKey: n3, encoding: e2.encoding });
}
function ci$2(e2) {
  const t = fromString(e2.symKey, V$2), { sealed: n3, iv: r2 } = Fe$2(e2), o3 = Fn$2(t, r2).decrypt(n3);
  if (o3 === null) throw new Error("Failed to decrypt");
  return toString(o3, Oe$2);
}
function ai$2(e2, t) {
  const n3 = Ut$2(_e$3), r2 = Se$2(Te$1), o3 = fromString(e2, Oe$2);
  return _t$3({ type: n3, sealed: o3, iv: r2, encoding: t });
}
function ui$2(e2, t) {
  const { sealed: n3 } = Fe$2({ encoded: e2, encoding: t });
  return toString(n3, Oe$2);
}
function _t$3(e2) {
  const { encoding: t = At$2 } = e2;
  if (fe$1(e2.type) === _e$3) return toString(concat([e2.type, e2.sealed]), t);
  if (fe$1(e2.type) === Ie$1) {
    if (typeof e2.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([e2.type, e2.senderPublicKey, e2.iv, e2.sealed]), t);
  }
  return toString(concat([e2.type, e2.iv, e2.sealed]), t);
}
function Fe$2(e2) {
  const { encoded: t, encoding: n3 = At$2 } = e2, r2 = fromString(t, n3), o3 = r2.slice(ei$2, nr$2), s2 = nr$2;
  if (fe$1(o3) === Ie$1) {
    const a2 = s2 + St$3, l2 = a2 + Te$1, f5 = r2.slice(s2, a2), d4 = r2.slice(a2, l2), g2 = r2.slice(l2);
    return { type: o3, sealed: g2, iv: d4, senderPublicKey: f5 };
  }
  if (fe$1(o3) === _e$3) {
    const a2 = r2.slice(s2), l2 = Se$2(Te$1);
    return { type: o3, sealed: a2, iv: l2 };
  }
  const i3 = s2 + Te$1, c2 = r2.slice(s2, i3), u2 = r2.slice(i3);
  return { type: o3, sealed: u2, iv: c2 };
}
function fi$2(e2, t) {
  const n3 = Fe$2({ encoded: e2, encoding: t == null ? void 0 : t.encoding });
  return rr$2({ type: fe$1(n3.type), senderPublicKey: typeof n3.senderPublicKey < "u" ? toString(n3.senderPublicKey, V$2) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function rr$2(e2) {
  const t = (e2 == null ? void 0 : e2.type) || Nt$2;
  if (t === Ie$1) {
    if (typeof (e2 == null ? void 0 : e2.senderPublicKey) > "u") throw new Error("missing sender public key");
    if (typeof (e2 == null ? void 0 : e2.receiverPublicKey) > "u") throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e2 == null ? void 0 : e2.senderPublicKey, receiverPublicKey: e2 == null ? void 0 : e2.receiverPublicKey };
}
function li$2(e2) {
  return e2.type === Ie$1 && typeof e2.senderPublicKey == "string" && typeof e2.receiverPublicKey == "string";
}
function di$2(e2) {
  return e2.type === _e$3;
}
function or$2(e2) {
  return new elliptic.ec("p256").keyFromPublic({ x: Buffer.from(e2.x, "base64").toString("hex"), y: Buffer.from(e2.y, "base64").toString("hex") }, "hex");
}
function hi$2(e2) {
  let t = e2.replace(/-/g, "+").replace(/_/g, "/");
  const n3 = t.length % 4;
  return n3 > 0 && (t += "=".repeat(4 - n3)), t;
}
function pi$2(e2) {
  return Buffer.from(hi$2(e2), "base64");
}
function gi$2(e2, t) {
  const [n3, r2, o3] = e2.split("."), s2 = pi$2(o3);
  if (s2.length !== 64) throw new Error("Invalid signature length");
  const i3 = s2.slice(0, 32).toString("hex"), c2 = s2.slice(32, 64).toString("hex"), u2 = `${n3}.${r2}`, a2 = He$1(u2), l2 = or$2(t), f5 = toString(a2, V$2);
  if (!l2.verify(f5, { r: i3, s: c2 })) throw new Error("Invalid signature");
  return sn$3(e2).payload;
}
const sr$2 = "irn";
function yi$2(e2) {
  return (e2 == null ? void 0 : e2.relay) || { protocol: sr$2 };
}
function mi$2(e2) {
  const t = C$4[e2];
  if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e2}`);
  return t;
}
function ir$2(e2, t = "-") {
  const n3 = {}, r2 = "relay" + t;
  return Object.keys(e2).forEach((o3) => {
    if (o3.startsWith(r2)) {
      const s2 = o3.replace(r2, ""), i3 = e2[o3];
      n3[s2] = i3;
    }
  }), n3;
}
function bi$2(e2) {
  if (!e2.includes("wc:")) {
    const a2 = rt$1(e2);
    a2 != null && a2.includes("wc:") && (e2 = a2);
  }
  e2 = e2.includes("wc://") ? e2.replace("wc://", "") : e2, e2 = e2.includes("wc:") ? e2.replace("wc:", "") : e2;
  const t = e2.indexOf(":"), n3 = e2.indexOf("?") !== -1 ? e2.indexOf("?") : void 0, r2 = e2.substring(0, t), o3 = e2.substring(t + 1, n3).split("@"), s2 = typeof n3 < "u" ? e2.substring(n3) : "", i3 = new URLSearchParams(s2), c2 = {};
  i3.forEach((a2, l2) => {
    c2[l2] = a2;
  });
  const u2 = typeof c2.methods == "string" ? c2.methods.split(",") : void 0;
  return { protocol: r2, topic: cr$2(o3[0]), version: parseInt(o3[1], 10), symKey: c2.symKey, relay: ir$2(c2), methods: u2, expiryTimestamp: c2.expiryTimestamp ? parseInt(c2.expiryTimestamp, 10) : void 0 };
}
function cr$2(e2) {
  return e2.startsWith("//") ? e2.substring(2) : e2;
}
function ar$2(e2, t = "-") {
  const n3 = "relay", r2 = {};
  return Object.keys(e2).forEach((o3) => {
    const s2 = o3, i3 = n3 + t + s2;
    e2[s2] && (r2[i3] = e2[s2]);
  }), r2;
}
function wi$2(e2) {
  const t = new URLSearchParams(), n3 = ar$2(e2.relay);
  Object.keys(n3).sort().forEach((o3) => {
    t.set(o3, n3[o3]);
  }), t.set("symKey", e2.symKey), e2.expiryTimestamp && t.set("expiryTimestamp", e2.expiryTimestamp.toString()), e2.methods && t.set("methods", e2.methods.join(","));
  const r2 = t.toString();
  return `${e2.protocol}:${e2.topic}@${e2.version}?${r2}`;
}
function Ei$2(e2, t, n3) {
  return `${e2}?wc_ev=${n3}&topic=${t}`;
}
function le$3(e2) {
  const t = [];
  return e2.forEach((n3) => {
    const [r2, o3] = n3.split(":");
    t.push(`${r2}:${o3}`);
  }), t;
}
function lr$2(e2) {
  const t = [];
  return Object.values(e2).forEach((n3) => {
    t.push(...le$3(n3.accounts));
  }), t;
}
function dr$2(e2, t) {
  const n3 = [];
  return Object.values(e2).forEach((r2) => {
    le$3(r2.accounts).includes(t) && n3.push(...r2.methods);
  }), n3;
}
function hr$2(e2, t) {
  const n3 = [];
  return Object.values(e2).forEach((r2) => {
    le$3(r2.accounts).includes(t) && n3.push(...r2.events);
  }), n3;
}
function Tt$2(e2) {
  return e2.includes(":");
}
function pr$2(e2) {
  return Tt$2(e2) ? e2.split(":")[0] : e2;
}
function gr$2(e2) {
  const t = {};
  return e2 == null ? void 0 : e2.forEach((n3) => {
    var r2;
    const [o3, s2] = n3.split(":");
    t[o3] || (t[o3] = { accounts: [], chains: [], events: [], methods: [] }), t[o3].accounts.push(n3), (r2 = t[o3].chains) == null || r2.push(`${o3}:${s2}`);
  }), t;
}
function Ti$2(e2, t) {
  t = t.map((r2) => r2.replace("did:pkh:", ""));
  const n3 = gr$2(t);
  for (const [r2, o3] of Object.entries(n3)) o3.methods ? o3.methods = Q$2(o3.methods, e2) : o3.methods = e2, o3.events = ["chainChanged", "accountsChanged"];
  return n3;
}
const yr$2 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, mr$2 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function te$1(e2, t) {
  const { message: n3, code: r2 } = mr$2[e2];
  return { message: t ? `${n3} ${t}` : n3, code: r2 };
}
function de$2(e2, t) {
  const { message: n3, code: r2 } = yr$2[e2];
  return { message: t ? `${n3} ${t}` : n3, code: r2 };
}
function $e$3(e2, t) {
  return Array.isArray(e2) ? true : false;
}
function qe$2(e2) {
  return Object.getPrototypeOf(e2) === Object.prototype && Object.keys(e2).length;
}
function ae$1(e2) {
  return typeof e2 > "u";
}
function q$3(e2, t) {
  return t && ae$1(e2) ? true : typeof e2 == "string" && !!e2.trim().length;
}
function Ge$3(e2, t) {
  return t && ae$1(e2) ? true : typeof e2 == "number" && !isNaN(e2);
}
function $i$2(e2, t) {
  const { requiredNamespaces: n3 } = t, r2 = Object.keys(e2.namespaces), o3 = Object.keys(n3);
  let s2 = true;
  return re$2(o3, r2) ? (r2.forEach((i3) => {
    const { accounts: c2, methods: u2, events: a2 } = e2.namespaces[i3], l2 = le$3(c2), f5 = n3[i3];
    (!re$2(Le$3(i3, f5), l2) || !re$2(f5.methods, u2) || !re$2(f5.events, a2)) && (s2 = false);
  }), s2) : false;
}
function Re$1(e2) {
  return q$3(e2, false) && e2.includes(":") ? e2.split(":").length === 2 : false;
}
function br$2(e2) {
  if (q$3(e2, false) && e2.includes(":")) {
    const t = e2.split(":");
    if (t.length === 3) {
      const n3 = t[0] + ":" + t[1];
      return !!t[2] && Re$1(n3);
    }
  }
  return false;
}
function Ri$2(e2) {
  function t(n3) {
    try {
      return typeof new URL(n3) < "u";
    } catch {
      return false;
    }
  }
  try {
    if (q$3(e2, false)) {
      if (t(e2)) return true;
      const n3 = rt$1(e2);
      return t(n3);
    }
  } catch {
  }
  return false;
}
function Pi$2(e2) {
  var t;
  return (t = e2 == null ? void 0 : e2.proposer) == null ? void 0 : t.publicKey;
}
function Li$2(e2) {
  return e2 == null ? void 0 : e2.topic;
}
function Bi$1(e2, t) {
  let n3 = null;
  return q$3(e2 == null ? void 0 : e2.publicKey, false) || (n3 = te$1("MISSING_OR_INVALID", `${t} controller public key should be a string`)), n3;
}
function Rt$3(e2) {
  let t = true;
  return $e$3(e2) ? e2.length && (t = e2.every((n3) => q$3(n3, false))) : t = false, t;
}
function wr$2(e2, t, n3) {
  let r2 = null;
  return $e$3(t) && t.length ? t.forEach((o3) => {
    r2 || Re$1(o3) || (r2 = de$2("UNSUPPORTED_CHAINS", `${n3}, chain ${o3} should be a string and conform to "namespace:chainId" format`));
  }) : Re$1(e2) || (r2 = de$2("UNSUPPORTED_CHAINS", `${n3}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r2;
}
function Er$2(e2, t, n3) {
  let r2 = null;
  return Object.entries(e2).forEach(([o3, s2]) => {
    if (r2) return;
    const i3 = wr$2(o3, Le$3(o3, s2), `${t} ${n3}`);
    i3 && (r2 = i3);
  }), r2;
}
function vr$2(e2, t) {
  let n3 = null;
  return $e$3(e2) ? e2.forEach((r2) => {
    n3 || br$2(r2) || (n3 = de$2("UNSUPPORTED_ACCOUNTS", `${t}, account ${r2} should be a string and conform to "namespace:chainId:address" format`));
  }) : n3 = de$2("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n3;
}
function xr$2(e2, t) {
  let n3 = null;
  return Object.values(e2).forEach((r2) => {
    if (n3) return;
    const o3 = vr$2(r2 == null ? void 0 : r2.accounts, `${t} namespace`);
    o3 && (n3 = o3);
  }), n3;
}
function Or$2(e2, t) {
  let n3 = null;
  return Rt$3(e2 == null ? void 0 : e2.methods) ? Rt$3(e2 == null ? void 0 : e2.events) || (n3 = de$2("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : n3 = de$2("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), n3;
}
function Pt$1(e2, t) {
  let n3 = null;
  return Object.values(e2).forEach((r2) => {
    if (n3) return;
    const o3 = Or$2(r2, `${t}, namespace`);
    o3 && (n3 = o3);
  }), n3;
}
function ji$1(e2, t, n3) {
  let r2 = null;
  if (e2 && qe$2(e2)) {
    const o3 = Pt$1(e2, t);
    o3 && (r2 = o3);
    const s2 = Er$2(e2, t, n3);
    s2 && (r2 = s2);
  } else r2 = te$1("MISSING_OR_INVALID", `${t}, ${n3} should be an object with data`);
  return r2;
}
function Ir$2(e2, t) {
  let n3 = null;
  if (e2 && qe$2(e2)) {
    const r2 = Pt$1(e2, t);
    r2 && (n3 = r2);
    const o3 = xr$2(e2, t);
    o3 && (n3 = o3);
  } else n3 = te$1("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return n3;
}
function Ar$2(e2) {
  return q$3(e2.protocol, true);
}
function Ci$2(e2, t) {
  let n3 = false;
  return !e2 ? n3 = true : e2 && $e$3(e2) && e2.length && e2.forEach((r2) => {
    n3 = Ar$2(r2);
  }), n3;
}
function ki$1(e2) {
  return typeof e2 == "number";
}
function Di$2(e2) {
  return typeof e2 < "u" && typeof e2 !== null;
}
function Mi$1(e2) {
  return !(!e2 || typeof e2 != "object" || !e2.code || !Ge$3(e2.code, false) || !e2.message || !q$3(e2.message, false));
}
function Vi$1(e2) {
  return !(ae$1(e2) || !q$3(e2.method, false));
}
function Hi$1(e2) {
  return !(ae$1(e2) || ae$1(e2.result) && ae$1(e2.error) || !Ge$3(e2.id, false) || !q$3(e2.jsonrpc, false));
}
function Ki$1(e2) {
  return !(ae$1(e2) || !q$3(e2.name, false));
}
function Fi$1(e2, t) {
  return !(!Re$1(t) || !lr$2(e2).includes(t));
}
function qi$1(e2, t, n3) {
  return q$3(n3, false) ? dr$2(e2, t).includes(n3) : false;
}
function Gi$1(e2, t, n3) {
  return q$3(n3, false) ? hr$2(e2, t).includes(n3) : false;
}
function Nr$2(e2, t, n3) {
  let r2 = null;
  const o3 = Wi$1(e2), s2 = zi$2(t), i3 = Object.keys(o3), c2 = Object.keys(s2), u2 = Sr$2(Object.keys(e2)), a2 = Sr$2(Object.keys(t)), l2 = u2.filter((f5) => !a2.includes(f5));
  return l2.length && (r2 = te$1("NON_CONFORMING_NAMESPACES", `${n3} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l2.toString()}
      Received: ${Object.keys(t).toString()}`)), re$2(i3, c2) || (r2 = te$1("NON_CONFORMING_NAMESPACES", `${n3} namespaces chains don't satisfy required namespaces.
      Required: ${i3.toString()}
      Approved: ${c2.toString()}`)), Object.keys(t).forEach((f5) => {
    if (!f5.includes(":") || r2) return;
    const d4 = le$3(t[f5].accounts);
    d4.includes(f5) || (r2 = te$1("NON_CONFORMING_NAMESPACES", `${n3} namespaces accounts don't satisfy namespace accounts for ${f5}
        Required: ${f5}
        Approved: ${d4.toString()}`));
  }), i3.forEach((f5) => {
    r2 || (re$2(o3[f5].methods, s2[f5].methods) ? re$2(o3[f5].events, s2[f5].events) || (r2 = te$1("NON_CONFORMING_NAMESPACES", `${n3} namespaces events don't satisfy namespace events for ${f5}`)) : r2 = te$1("NON_CONFORMING_NAMESPACES", `${n3} namespaces methods don't satisfy namespace methods for ${f5}`));
  }), r2;
}
function Wi$1(e2) {
  const t = {};
  return Object.keys(e2).forEach((n3) => {
    var r2;
    n3.includes(":") ? t[n3] = e2[n3] : (r2 = e2[n3].chains) == null || r2.forEach((o3) => {
      t[o3] = { methods: e2[n3].methods, events: e2[n3].events };
    });
  }), t;
}
function Sr$2(e2) {
  return [...new Set(e2.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function zi$2(e2) {
  const t = {};
  return Object.keys(e2).forEach((n3) => {
    if (n3.includes(":")) t[n3] = e2[n3];
    else {
      const r2 = le$3(e2[n3].accounts);
      r2 == null ? void 0 : r2.forEach((o3) => {
        t[o3] = { accounts: e2[n3].accounts.filter((s2) => s2.includes(`${o3}:`)), methods: e2[n3].methods, events: e2[n3].events };
      });
    }
  }), t;
}
function Ji$1(e2, t) {
  return Ge$3(e2, false) && e2 <= t.max && e2 >= t.min;
}
function Yi$1() {
  const e2 = ue$2();
  return new Promise((t) => {
    switch (e2) {
      case H$2.browser:
        t(Ur$2());
        break;
      case H$2.reactNative:
        t(_r$2());
        break;
      case H$2.node:
        t(Tr$2());
        break;
      default:
        t(true);
    }
  });
}
function Ur$2() {
  return Ae$2() && (navigator == null ? void 0 : navigator.onLine);
}
async function _r$2() {
  if (ne$1() && typeof global < "u" && global != null && global.NetInfo) {
    const e2 = await (global == null ? void 0 : global.NetInfo.fetch());
    return e2 == null ? void 0 : e2.isConnected;
  }
  return true;
}
function Tr$2() {
  return true;
}
function Xi$1(e2) {
  switch (ue$2()) {
    case H$2.browser:
      $r$2(e2);
      break;
    case H$2.reactNative:
      Rr$2(e2);
      break;
  }
}
function $r$2(e2) {
  !ne$1() && Ae$2() && (window.addEventListener("online", () => e2(true)), window.addEventListener("offline", () => e2(false)));
}
function Rr$2(e2) {
  var _a2;
  ne$1() && typeof global < "u" && global != null && global.NetInfo && ((_a2 = global) == null ? void 0 : _a2.NetInfo.addEventListener((t) => e2(t == null ? void 0 : t.isConnected)));
}
const Lt$2 = {};
let Zi$1 = class Zi {
  static get(t) {
    return Lt$2[t];
  }
  static set(t, n3) {
    Lt$2[t] = n3;
  }
  static delete(t) {
    delete Lt$2[t];
  }
};
class IEvents {
}
let n$2 = class n extends IEvents {
  constructor(e2) {
    super();
  }
};
const s = cjs$3.FIVE_SECONDS, r$1 = { pulse: "heartbeat_pulse" };
let i$2 = class i extends n$2 {
  constructor(e2) {
    super(e2), this.events = new eventsExports.EventEmitter(), this.interval = s, this.interval = (e2 == null ? void 0 : e2.interval) || s;
  }
  static async init(e2) {
    const t = new i(e2);
    return await t.init(), t;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), cjs$3.toMiliseconds(this.interval));
  }
  pulse() {
    this.events.emit(r$1.pulse);
  }
};
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c2) => c2.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey(key) {
  var _a2;
  if (!key) {
    return "";
  }
  return ((_a2 = key.split("?")[0]) == null ? void 0 : _a2.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "")) || "";
}
function joinKeys(...keys2) {
  return normalizeKey(keys2.join(":"));
}
function normalizeBaseKey(base3) {
  base3 = normalizeKey(base3);
  return base3 ? base3 + ":" : "";
}
function defineDriver(factory) {
  return factory;
}
const DRIVER_NAME = "memory";
const memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base3 of context.mountpoints) {
      if (key.startsWith(base3)) {
        return {
          base: base3,
          relativeKey: key.slice(base3.length),
          driver: context.mounts[base3]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base3, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base3) || includeParent && base3.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base3.length > mountpoint.length ? base3.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r2) => r2.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r2) => r2.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      const mounts = getMounts(base3, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p2) => fullKey.startsWith(p2))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p2) => !p2.startsWith(mount.mountpoint))
        ];
      }
      return base3 ? allKeys.filter(
        (key) => key.startsWith(base3) && key[key.length - 1] !== "$"
      ) : allKeys.filter((key) => key[key.length - 1] !== "$");
    },
    // Utils
    async clear(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      await Promise.all(
        getMounts(base3, false).map(async (m4) => {
          if (m4.driver.clear) {
            return asyncCall(m4.driver.clear, m4.relativeBase, opts);
          }
          if (m4.driver.removeItem) {
            const keys2 = await m4.driver.getKeys(m4.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key) => m4.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base3, driver) {
      base3 = normalizeBaseKey(base3);
      if (base3 && context.mounts[base3]) {
        throw new Error(`already mounted at ${base3}`);
      }
      if (base3) {
        context.mountpoints.push(base3);
        context.mountpoints.sort((a2, b2) => b2.length - a2.length);
      }
      context.mounts[base3] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base3)).then((unwatcher) => {
          context.unwatch[base3] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base3, _dispose = true) {
      var _a2, _b;
      base3 = normalizeBaseKey(base3);
      if (!base3 || !context.mounts[base3]) {
        return;
      }
      if (context.watching && base3 in context.unwatch) {
        (_b = (_a2 = context.unwatch)[base3]) == null ? void 0 : _b.call(_a2);
        delete context.unwatch[base3];
      }
      if (_dispose) {
        await dispose(context.mounts[base3]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base3);
      delete context.mounts[base3];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m4 = getMount(key);
      return {
        driver: m4.driver,
        base: m4.base
      };
    },
    getMounts(base3 = "", opts = {}) {
      base3 = normalizeKey(base3);
      const mounts = getMounts(base3, opts.parents);
      return mounts.map((m4) => ({
        driver: m4.driver,
        base: m4.mountpoint
      }));
    },
    // Aliases
    keys: (base3, opts = {}) => storage.getKeys(base3, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base3) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base3 + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  request.onupgradeneeded = () => request.result.createObjectStore(storeName);
  const dbp = promisifyRequest(request);
  return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set$1(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}
const x$5 = "idb-keyval";
var z$4 = (i3 = {}) => {
  const t = i3.base && i3.base.length > 0 ? `${i3.base}:` : "", e2 = (s2) => t + s2;
  let n3;
  return i3.dbName && i3.storeName && (n3 = createStore(i3.dbName, i3.storeName)), { name: x$5, options: i3, async hasItem(s2) {
    return !(typeof await get(e2(s2), n3) > "u");
  }, async getItem(s2) {
    return await get(e2(s2), n3) ?? null;
  }, setItem(s2, a2) {
    return set$1(e2(s2), a2, n3);
  }, removeItem(s2) {
    return del(e2(s2), n3);
  }, getKeys() {
    return keys(n3);
  }, clear() {
    return clear(n3);
  } };
};
const D$3 = "WALLET_CONNECT_V2_INDEXED_DB", E$4 = "keyvaluestorage";
let _$5 = class _ {
  constructor() {
    this.indexedDb = createStorage({ driver: z$4({ dbName: D$3, storeName: E$4 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const e2 = await this.indexedDb.getItem(t);
    if (e2 !== null) return e2;
  }
  async setItem(t, e2) {
    await this.indexedDb.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var l$2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, c$4 = { exports: {} };
(function() {
  let i3;
  function t() {
  }
  i3 = t, i3.prototype.getItem = function(e2) {
    return this.hasOwnProperty(e2) ? String(this[e2]) : null;
  }, i3.prototype.setItem = function(e2, n3) {
    this[e2] = String(n3);
  }, i3.prototype.removeItem = function(e2) {
    delete this[e2];
  }, i3.prototype.clear = function() {
    const e2 = this;
    Object.keys(e2).forEach(function(n3) {
      e2[n3] = void 0, delete e2[n3];
    });
  }, i3.prototype.key = function(e2) {
    return e2 = e2 || 0, Object.keys(this)[e2];
  }, i3.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l$2 < "u" && l$2.localStorage ? c$4.exports = l$2.localStorage : typeof window < "u" && window.localStorage ? c$4.exports = window.localStorage : c$4.exports = new t();
})();
function k$3(i3) {
  var t;
  return [i3[0], safeJsonParse((t = i3[1]) != null ? t : "")];
}
let K$1 = class K {
  constructor() {
    this.localStorage = c$4.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k$3);
  }
  async getItem(t) {
    const e2 = this.localStorage.getItem(t);
    if (e2 !== null) return safeJsonParse(e2);
  }
  async setItem(t, e2) {
    this.localStorage.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
const N$3 = "wc_storage_version", y$4 = 1, O$5 = async (i3, t, e2) => {
  const n3 = N$3, s2 = await t.getItem(n3);
  if (s2 && s2 >= y$4) {
    e2(t);
    return;
  }
  const a2 = await i3.getKeys();
  if (!a2.length) {
    e2(t);
    return;
  }
  const m4 = [];
  for (; a2.length; ) {
    const r2 = a2.shift();
    if (!r2) continue;
    const o3 = r2.toLowerCase();
    if (o3.includes("wc@") || o3.includes("walletconnect") || o3.includes("wc_") || o3.includes("wallet_connect")) {
      const f5 = await i3.getItem(r2);
      await t.setItem(r2, f5), m4.push(r2);
    }
  }
  await t.setItem(n3, y$4), e2(t), j$4(i3, m4);
}, j$4 = async (i3, t) => {
  t.length && t.forEach(async (e2) => {
    await i3.removeItem(e2);
  });
};
let h$3 = class h {
  constructor() {
    this.initialized = false, this.setInitialized = (e2) => {
      this.storage = e2, this.initialized = true;
    };
    const t = new K$1();
    this.storage = t;
    try {
      const e2 = new _$5();
      O$5(t, e2, this.setInitialized);
    } catch {
      this.initialized = true;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, e2) {
    return await this.initialize(), this.storage.setItem(t, e2);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const e2 = setInterval(() => {
        this.initialized && (clearInterval(e2), t());
      }, 20);
    });
  }
};
function tryStringify(o3) {
  try {
    return JSON.stringify(o3);
  } catch (e2) {
    return '"[Circular]"';
  }
}
var quickFormatUnescaped = format$1;
function format$1(f5, args, opts) {
  var ss2 = opts && opts.stringify || tryStringify;
  var offset = 1;
  if (typeof f5 === "object" && f5 !== null) {
    var len = args.length + offset;
    if (len === 1) return f5;
    var objects = new Array(len);
    objects[0] = ss2(f5);
    for (var index = 1; index < len; index++) {
      objects[index] = ss2(args[index]);
    }
    return objects.join(" ");
  }
  if (typeof f5 !== "string") {
    return f5;
  }
  var argLen = args.length;
  if (argLen === 0) return f5;
  var str = "";
  var a2 = 1 - offset;
  var lastPos = -1;
  var flen = f5 && f5.length || 0;
  for (var i3 = 0; i3 < flen; ) {
    if (f5.charCodeAt(i3) === 37 && i3 + 1 < flen) {
      lastPos = lastPos > -1 ? lastPos : 0;
      switch (f5.charCodeAt(i3 + 1)) {
        case 100:
        case 102:
          if (a2 >= argLen)
            break;
          if (args[a2] == null) break;
          if (lastPos < i3)
            str += f5.slice(lastPos, i3);
          str += Number(args[a2]);
          lastPos = i3 + 2;
          i3++;
          break;
        case 105:
          if (a2 >= argLen)
            break;
          if (args[a2] == null) break;
          if (lastPos < i3)
            str += f5.slice(lastPos, i3);
          str += Math.floor(Number(args[a2]));
          lastPos = i3 + 2;
          i3++;
          break;
        case 79:
        case 111:
        case 106:
          if (a2 >= argLen)
            break;
          if (args[a2] === void 0) break;
          if (lastPos < i3)
            str += f5.slice(lastPos, i3);
          var type = typeof args[a2];
          if (type === "string") {
            str += "'" + args[a2] + "'";
            lastPos = i3 + 2;
            i3++;
            break;
          }
          if (type === "function") {
            str += args[a2].name || "<anonymous>";
            lastPos = i3 + 2;
            i3++;
            break;
          }
          str += ss2(args[a2]);
          lastPos = i3 + 2;
          i3++;
          break;
        case 115:
          if (a2 >= argLen)
            break;
          if (lastPos < i3)
            str += f5.slice(lastPos, i3);
          str += String(args[a2]);
          lastPos = i3 + 2;
          i3++;
          break;
        case 37:
          if (lastPos < i3)
            str += f5.slice(lastPos, i3);
          str += "%";
          lastPos = i3 + 2;
          i3++;
          a2--;
          break;
      }
      ++a2;
    }
    ++i3;
  }
  if (lastPos === -1)
    return f5;
  else if (lastPos < flen) {
    str += f5.slice(lastPos);
  }
  return str;
}
const format = quickFormatUnescaped;
var browser = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
  mapHttpRequest: mock,
  mapHttpResponse: mock,
  wrapRequestSerializer: passthrough,
  wrapResponseSerializer: passthrough,
  wrapErrorSerializer: passthrough,
  req: mock,
  res: mock,
  err: asErrValue
};
function shouldSerialize(serialize, serializers) {
  if (Array.isArray(serialize)) {
    const hasToFilter = serialize.filter(function(k2) {
      return k2 !== "!stdSerializers.err";
    });
    return hasToFilter;
  } else if (serialize === true) {
    return Object.keys(serializers);
  }
  return false;
}
function pino(opts) {
  opts = opts || {};
  opts.browser = opts.browser || {};
  const transmit2 = opts.browser.transmit;
  if (transmit2 && typeof transmit2.send !== "function") {
    throw Error("pino: transmit option must have a send function");
  }
  const proto = opts.browser.write || _console;
  if (opts.browser.write) opts.browser.asObject = true;
  const serializers = opts.serializers || {};
  const serialize = shouldSerialize(opts.browser.serialize, serializers);
  let stdErrSerialize = opts.browser.serialize;
  if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
  const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
  if (typeof proto === "function") {
    proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
  }
  if (opts.enabled === false) opts.level = "silent";
  const level = opts.level || "info";
  const logger = Object.create(proto);
  if (!logger.log) logger.log = noop;
  Object.defineProperty(logger, "levelVal", {
    get: getLevelVal
  });
  Object.defineProperty(logger, "level", {
    get: getLevel,
    set: setLevel
  });
  const setOpts = {
    transmit: transmit2,
    serialize,
    asObject: opts.browser.asObject,
    levels,
    timestamp: getTimeFunction(opts)
  };
  logger.levels = pino.levels;
  logger.level = level;
  logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
  logger.serializers = serializers;
  logger._serialize = serialize;
  logger._stdErrSerialize = stdErrSerialize;
  logger.child = child;
  if (transmit2) logger._logEvent = createLogEventShape();
  function getLevelVal() {
    return this.level === "silent" ? Infinity : this.levels.values[this.level];
  }
  function getLevel() {
    return this._level;
  }
  function setLevel(level2) {
    if (level2 !== "silent" && !this.levels.values[level2]) {
      throw Error("unknown level " + level2);
    }
    this._level = level2;
    set(setOpts, logger, "error", "log");
    set(setOpts, logger, "fatal", "error");
    set(setOpts, logger, "warn", "error");
    set(setOpts, logger, "info", "log");
    set(setOpts, logger, "debug", "log");
    set(setOpts, logger, "trace", "log");
  }
  function child(bindings, childOptions) {
    if (!bindings) {
      throw new Error("missing bindings for child Pino");
    }
    childOptions = childOptions || {};
    if (serialize && bindings.serializers) {
      childOptions.serializers = bindings.serializers;
    }
    const childOptionsSerializers = childOptions.serializers;
    if (serialize && childOptionsSerializers) {
      var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
      var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
      delete bindings.serializers;
      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
    }
    function Child(parent) {
      this._childLevel = (parent._childLevel | 0) + 1;
      this.error = bind(parent, bindings, "error");
      this.fatal = bind(parent, bindings, "fatal");
      this.warn = bind(parent, bindings, "warn");
      this.info = bind(parent, bindings, "info");
      this.debug = bind(parent, bindings, "debug");
      this.trace = bind(parent, bindings, "trace");
      if (childSerializers) {
        this.serializers = childSerializers;
        this._serialize = childSerialize;
      }
      if (transmit2) {
        this._logEvent = createLogEventShape(
          [].concat(parent._logEvent.bindings, bindings)
        );
      }
    }
    Child.prototype = this;
    return new Child(this);
  }
  return logger;
}
pino.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal"
  }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
function set(opts, logger, level, fallback) {
  const proto = Object.getPrototypeOf(logger);
  logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
  wrap(opts, logger, level);
}
function wrap(opts, logger, level) {
  if (!opts.transmit && logger[level] === noop) return;
  logger[level] = /* @__PURE__ */ function(write) {
    return function LOG() {
      const ts2 = opts.timestamp();
      const args = new Array(arguments.length);
      const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
      for (var i3 = 0; i3 < args.length; i3++) args[i3] = arguments[i3];
      if (opts.serialize && !opts.asObject) {
        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
      }
      if (opts.asObject) write.call(proto, asObject(this, level, args, ts2));
      else write.apply(proto, args);
      if (opts.transmit) {
        const transmitLevel = opts.transmit.level || logger.level;
        const transmitValue = pino.levels.values[transmitLevel];
        const methodValue = pino.levels.values[level];
        if (methodValue < transmitValue) return;
        transmit(this, {
          ts: ts2,
          methodLevel: level,
          methodValue,
          transmitLevel,
          transmitValue: pino.levels.values[opts.transmit.level || logger.level],
          send: opts.transmit.send,
          val: logger.levelVal
        }, args);
      }
    };
  }(logger[level]);
}
function asObject(logger, level, args, ts2) {
  if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
  const argsCloned = args.slice();
  let msg = argsCloned[0];
  const o3 = {};
  if (ts2) {
    o3.time = ts2;
  }
  o3.level = pino.levels.values[level];
  let lvl = (logger._childLevel | 0) + 1;
  if (lvl < 1) lvl = 1;
  if (msg !== null && typeof msg === "object") {
    while (lvl-- && typeof argsCloned[0] === "object") {
      Object.assign(o3, argsCloned.shift());
    }
    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
  } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
  if (msg !== void 0) o3.msg = msg;
  return o3;
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
  for (const i3 in args) {
    if (stdErrSerialize && args[i3] instanceof Error) {
      args[i3] = pino.stdSerializers.err(args[i3]);
    } else if (typeof args[i3] === "object" && !Array.isArray(args[i3])) {
      for (const k2 in args[i3]) {
        if (serialize && serialize.indexOf(k2) > -1 && k2 in serializers) {
          args[i3][k2] = serializers[k2](args[i3][k2]);
        }
      }
    }
  }
}
function bind(parent, bindings, level) {
  return function() {
    const args = new Array(1 + arguments.length);
    args[0] = bindings;
    for (var i3 = 1; i3 < args.length; i3++) {
      args[i3] = arguments[i3 - 1];
    }
    return parent[level].apply(this, args);
  };
}
function transmit(logger, opts, args) {
  const send = opts.send;
  const ts2 = opts.ts;
  const methodLevel = opts.methodLevel;
  const methodValue = opts.methodValue;
  const val = opts.val;
  const bindings = logger._logEvent.bindings;
  applySerializers(
    args,
    logger._serialize || Object.keys(logger.serializers),
    logger.serializers,
    logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
  );
  logger._logEvent.ts = ts2;
  logger._logEvent.messages = args.filter(function(arg) {
    return bindings.indexOf(arg) === -1;
  });
  logger._logEvent.level.label = methodLevel;
  logger._logEvent.level.value = methodValue;
  send(methodLevel, logger._logEvent, val);
  logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
  return {
    ts: 0,
    messages: [],
    bindings: bindings || [],
    level: { label: "", value: 0 }
  };
}
function asErrValue(err) {
  const obj = {
    type: err.constructor.name,
    msg: err.message,
    stack: err.stack
  };
  for (const key in err) {
    if (obj[key] === void 0) {
      obj[key] = err[key];
    }
  }
  return obj;
}
function getTimeFunction(opts) {
  if (typeof opts.timestamp === "function") {
    return opts.timestamp;
  }
  if (opts.timestamp === false) {
    return nullTime;
  }
  return epochTime;
}
function mock() {
  return {};
}
function passthrough(a2) {
  return a2;
}
function noop() {
}
function nullTime() {
  return false;
}
function epochTime() {
  return Date.now();
}
function unixTime() {
  return Math.round(Date.now() / 1e3);
}
function isoTime() {
  return new Date(Date.now()).toISOString();
}
function pfGlobalThisOrFallback() {
  function defd(o3) {
    return typeof o3 !== "undefined" && o3;
  }
  try {
    if (typeof globalThis !== "undefined") return globalThis;
    Object.defineProperty(Object.prototype, "globalThis", {
      get: function() {
        delete Object.prototype.globalThis;
        return this.globalThis = this;
      },
      configurable: true
    });
    return globalThis;
  } catch (e2) {
    return defd(self) || defd(window) || defd(this) || {};
  }
}
const gt$1 = /* @__PURE__ */ getDefaultExportFromCjs(browser);
const c$3 = { level: "info" }, n$1 = "custom_context", l$1 = 1e3 * 1024;
let O$4 = class O {
  constructor(e2) {
    this.nodeValue = e2, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
let d$4 = class d {
  constructor(e2) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e2, this.sizeInBytes = 0;
  }
  append(e2) {
    const t = new O$4(e2);
    if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e2} with size ${t.size}`);
    for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
  }
  shift() {
    if (!this.head) return;
    const e2 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e2.size;
  }
  toArray() {
    const e2 = [];
    let t = this.head;
    for (; t !== null; ) e2.push(t.value), t = t.next;
    return e2;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e2 = this.head;
    return { next: () => {
      if (!e2) return { done: true, value: null };
      const t = e2.value;
      return e2 = e2.next, { done: false, value: t };
    } };
  }
};
let L$4 = class L {
  constructor(e2, t = l$1) {
    this.level = e2 ?? "error", this.levelValue = browser.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new d$4(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e2, t) {
    t === browser.levels.values.error ? console.error(e2) : t === browser.levels.values.warn ? console.warn(e2) : t === browser.levels.values.debug ? console.debug(e2) : t === browser.levels.values.trace ? console.trace(e2) : console.log(e2);
  }
  appendToLogs(e2) {
    this.logs.append(safeJsonStringify({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e2 }));
    const t = typeof e2 == "string" ? JSON.parse(e2).level : e2.level;
    t >= this.levelValue && this.forwardToConsole(e2, t);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new d$4(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e2) {
    const t = this.getLogArray();
    return t.push(safeJsonStringify({ extraMetadata: e2 })), new Blob(t, { type: "application/json" });
  }
};
let m$2 = class m {
  constructor(e2, t = l$1) {
    this.baseChunkLogger = new L$4(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
  downloadLogsBlobInBrowser(e2) {
    const t = URL.createObjectURL(this.logsToBlob(e2)), o3 = document.createElement("a");
    o3.href = t, o3.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o3), o3.click(), document.body.removeChild(o3), URL.revokeObjectURL(t);
  }
};
let B$2 = class B {
  constructor(e2, t = l$1) {
    this.baseChunkLogger = new L$4(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
};
var x$4 = Object.defineProperty, S$3 = Object.defineProperties, _$4 = Object.getOwnPropertyDescriptors, p$4 = Object.getOwnPropertySymbols, T$5 = Object.prototype.hasOwnProperty, z$3 = Object.prototype.propertyIsEnumerable, f$5 = (r2, e2, t) => e2 in r2 ? x$4(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, i$1 = (r2, e2) => {
  for (var t in e2 || (e2 = {})) T$5.call(e2, t) && f$5(r2, t, e2[t]);
  if (p$4) for (var t of p$4(e2)) z$3.call(e2, t) && f$5(r2, t, e2[t]);
  return r2;
}, g$3 = (r2, e2) => S$3(r2, _$4(e2));
function k$2(r2) {
  return g$3(i$1({}, r2), { level: (r2 == null ? void 0 : r2.level) || c$3.level });
}
function v$6(r2, e2 = n$1) {
  return r2[e2] || "";
}
function b$2(r2, e2, t = n$1) {
  return r2[t] = e2, r2;
}
function y$3(r2, e2 = n$1) {
  let t = "";
  return typeof r2.bindings > "u" ? t = v$6(r2, e2) : t = r2.bindings().context || "", t;
}
function w$4(r2, e2, t = n$1) {
  const o3 = y$3(r2, t);
  return o3.trim() ? `${o3}/${e2}` : e2;
}
function E$3(r2, e2, t = n$1) {
  const o3 = w$4(r2, e2, t), a2 = r2.child({ context: o3 });
  return b$2(a2, o3, t);
}
function C$3(r2) {
  var e2, t;
  const o3 = new m$2((e2 = r2.opts) == null ? void 0 : e2.level, r2.maxSizeInBytes);
  return { logger: gt$1(g$3(i$1({}, r2.opts), { level: "trace", browser: g$3(i$1({}, (t = r2.opts) == null ? void 0 : t.browser), { write: (a2) => o3.write(a2) }) })), chunkLoggerController: o3 };
}
function I$2(r2) {
  var e2;
  const t = new B$2((e2 = r2.opts) == null ? void 0 : e2.level, r2.maxSizeInBytes);
  return { logger: gt$1(g$3(i$1({}, r2.opts), { level: "trace" }), t), chunkLoggerController: t };
}
function A$1(r2) {
  return typeof r2.loggerOverride < "u" && typeof r2.loggerOverride != "string" ? { logger: r2.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C$3(r2) : I$2(r2);
}
var a = Object.defineProperty, u$1 = (e2, s2, r2) => s2 in e2 ? a(e2, s2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[s2] = r2, c$2 = (e2, s2, r2) => u$1(e2, typeof s2 != "symbol" ? s2 + "" : s2, r2);
let h$2 = class h2 extends IEvents {
  constructor(s2) {
    super(), this.opts = s2, c$2(this, "protocol", "wc"), c$2(this, "version", 2);
  }
};
var p$3 = Object.defineProperty, b$1 = (e2, s2, r2) => s2 in e2 ? p$3(e2, s2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[s2] = r2, v$5 = (e2, s2, r2) => b$1(e2, s2 + "", r2);
let I$1 = class I extends IEvents {
  constructor(s2, r2) {
    super(), this.core = s2, this.logger = r2, v$5(this, "records", /* @__PURE__ */ new Map());
  }
};
let y$2 = class y {
  constructor(s2, r2) {
    this.logger = s2, this.core = r2;
  }
};
let m$1 = class m2 extends IEvents {
  constructor(s2, r2) {
    super(), this.relayer = s2, this.logger = r2;
  }
};
let d$3 = class d2 extends IEvents {
  constructor(s2) {
    super();
  }
};
let f$4 = class f {
  constructor(s2, r2, t, q2) {
    this.core = s2, this.logger = r2, this.name = t;
  }
};
let P$3 = class P extends IEvents {
  constructor(s2, r2) {
    super(), this.relayer = s2, this.logger = r2;
  }
};
let S$2 = class S extends IEvents {
  constructor(s2, r2) {
    super(), this.core = s2, this.logger = r2;
  }
};
let M$3 = class M {
  constructor(s2, r2, t) {
    this.core = s2, this.logger = r2, this.store = t;
  }
};
let O$3 = class O2 {
  constructor(s2, r2) {
    this.projectId = s2, this.logger = r2;
  }
};
let R$1 = class R {
  constructor(s2, r2, t) {
    this.core = s2, this.logger = r2, this.telemetryEnabled = t;
  }
};
var T$4 = Object.defineProperty, k$1 = (e2, s2, r2) => s2 in e2 ? T$4(e2, s2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[s2] = r2, i2 = (e2, s2, r2) => k$1(e2, typeof s2 != "symbol" ? s2 + "" : s2, r2);
let J$2 = class J {
  constructor(s2) {
    this.opts = s2, i2(this, "protocol", "wc"), i2(this, "version", 2);
  }
};
let V$1 = class V {
  constructor(s2) {
    this.client = s2;
  }
};
const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
const STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: "Parse error" },
  [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
  [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
  [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
  [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
  [SERVER_ERROR]: { code: -32e3, message: "Server error" }
};
const DEFAULT_ERROR = SERVER_ERROR;
function isReservedErrorCode(code) {
  return RESERVED_ERROR_CODES.includes(code);
}
function getError(type) {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code) {
  const match = Object.values(STANDARD_ERROR_MAP).find((e2) => e2.code === code);
  if (!match) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return match;
}
function parseConnectionError(e2, url, type) {
  return e2.message.includes("getaddrinfo ENOTFOUND") || e2.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e2;
}
var cjs = {};
var crypto$1 = {};
var hasRequiredCrypto;
function requireCrypto() {
  if (hasRequiredCrypto) return crypto$1;
  hasRequiredCrypto = 1;
  Object.defineProperty(crypto$1, "__esModule", { value: true });
  crypto$1.isBrowserCryptoAvailable = crypto$1.getSubtleCrypto = crypto$1.getBrowerCrypto = void 0;
  function getBrowerCrypto() {
    return (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.crypto) || (commonjsGlobal === null || commonjsGlobal === void 0 ? void 0 : commonjsGlobal.msCrypto) || {};
  }
  crypto$1.getBrowerCrypto = getBrowerCrypto;
  function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
  }
  crypto$1.getSubtleCrypto = getSubtleCrypto;
  function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
  }
  crypto$1.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  return crypto$1;
}
var env = {};
var hasRequiredEnv;
function requireEnv() {
  if (hasRequiredEnv) return env;
  hasRequiredEnv = 1;
  Object.defineProperty(env, "__esModule", { value: true });
  env.isBrowser = env.isNode = env.isReactNative = void 0;
  function isReactNative() {
    return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
  }
  env.isReactNative = isReactNative;
  function isNode() {
    return typeof process$1 !== "undefined" && typeof process$1.versions !== "undefined" && typeof process$1.versions.node !== "undefined";
  }
  env.isNode = isNode;
  function isBrowser() {
    return !isReactNative() && !isNode();
  }
  env.isBrowser = isBrowser;
  return env;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_1 = require$$0;
  tslib_1.__exportStar(requireCrypto(), exports);
  tslib_1.__exportStar(requireEnv(), exports);
})(cjs);
function payloadId(entropy = 3) {
  const date = Date.now() * Math.pow(10, entropy);
  const extra = Math.floor(Math.random() * Math.pow(10, entropy));
  return date + extra;
}
function getBigIntRpcId(entropy = 6) {
  return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  return error;
}
class e {
}
class n2 extends e {
  constructor() {
    super();
  }
}
class r extends n2 {
  constructor(c2) {
    super();
  }
}
const HTTP_REGEX = "^https?:";
const WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length)
    return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined")
    return false;
  return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
let o$2 = class o extends r {
  constructor(t) {
    super(t), this.events = new eventsExports.EventEmitter(), this.hasRegisteredEventListeners = false, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async request(t, e2) {
    return this.requestStrict(formatJsonRpcRequest(t.method, t.params || [], t.id || getBigIntRpcId().toString()), e2);
  }
  async requestStrict(t, e2) {
    return new Promise(async (i3, s2) => {
      if (!this.connection.connected) try {
        await this.open();
      } catch (n3) {
        s2(n3);
      }
      this.events.on(`${t.id}`, (n3) => {
        isJsonRpcError(n3) ? s2(n3.error) : i3(n3.result);
      });
      try {
        await this.connection.send(t, e2);
      } catch (n3) {
        s2(n3);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), isJsonRpcResponse(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = true);
  }
};
const v$4 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), w$3 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", d$2 = (r2) => r2.split("?")[0], h$1 = 10, b = v$4();
let f$3 = class f2 {
  constructor(e2) {
    if (this.url = e2, this.events = new eventsExports.EventEmitter(), this.registering = false, !isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    this.url = e2;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async open(e2 = this.url) {
    await this.register(e2);
  }
  async close() {
    return new Promise((e2, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n3) => {
        this.onClose(n3), e2();
      }, this.socket.close();
    });
  }
  async send(e2) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify(e2));
    } catch (t) {
      this.onError(e2.id, t);
    }
  }
  register(e2 = this.url) {
    if (!isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n3, s2) => {
        this.events.once("register_error", (o3) => {
          this.resetMaxListeners(), s2(o3);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return s2(new Error("WebSocket connection is missing or invalid"));
          n3(this.socket);
        });
      });
    }
    return this.url = e2, this.registering = true, new Promise((t, n3) => {
      const s2 = cjs.isReactNative() ? void 0 : { rejectUnauthorized: !isLocalhostUrl(e2) }, o3 = new b(e2, [], s2);
      w$3() ? o3.onerror = (i3) => {
        const a2 = i3;
        n3(this.emitError(a2.error));
      } : o3.on("error", (i3) => {
        n3(this.emitError(i3));
      }), o3.onopen = () => {
        this.onOpen(o3), t(o3);
      };
    });
  }
  onOpen(e2) {
    e2.onmessage = (t) => this.onPayload(t), e2.onclose = (t) => this.onClose(t), this.socket = e2, this.registering = false, this.events.emit("open");
  }
  onClose(e2) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e2);
  }
  onPayload(e2) {
    if (typeof e2.data > "u") return;
    const t = typeof e2.data == "string" ? safeJsonParse(e2.data) : e2.data;
    this.events.emit("payload", t);
  }
  onError(e2, t) {
    const n3 = this.parseError(t), s2 = n3.message || n3.toString(), o3 = formatJsonRpcError(e2, s2);
    this.events.emit("payload", o3);
  }
  parseError(e2, t = this.url) {
    return parseConnectionError(e2, d$2(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h$1 && this.events.setMaxListeners(h$1);
  }
  emitError(e2) {
    const t = this.parseError(new Error((e2 == null ? void 0 : e2.message) || `WebSocket connection failed for host: ${d$2(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};
var lodash_isequal = { exports: {} };
lodash_isequal.exports;
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e2) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  function baseTimes(n3, iteratee) {
    var index = -1, result = Array(n3);
    while (++index < n3) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  function setToArray(set2) {
    var index = -1, result = Array(set2.size);
    set2.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  var Buffer2 = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array2 = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
  var DataView2 = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap2 = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if (hasOwnProperty.call(value, key) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert2 = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert2 || (convert2 = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert2(object), convert2(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys2, getSymbols);
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e2) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var getTag = baseGetTag;
  if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function keys2(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function stubArray() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module.exports = isEqual;
})(lodash_isequal, lodash_isequal.exports);
var lodash_isequalExports = lodash_isequal.exports;
const Ls$2 = /* @__PURE__ */ getDefaultExportFromCjs(lodash_isequalExports);
const xe$1 = "wc", Oe$1 = 2, he$1 = "core", B$1 = `${xe$1}@2:${he$1}:`, mt$1 = { name: he$1, logger: "error" }, vt$1 = { database: ":memory:" }, ft = "crypto", Ae$1 = "client_ed25519_seed", _t$2 = cjs$3.ONE_DAY, Et$2 = "keychain", wt$1 = "0.3", It$1 = "messages", Tt$1 = "0.3", Ne$1 = cjs$3.SIX_HOURS, Ct$1 = "publisher", Pt = "irn", St$2 = "error", $e$2 = "wss://relay.walletconnect.org", Rt$2 = "relayer", T$3 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, xt$1 = "_subscription", L$3 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Ot$1 = 0.1, me$1 = "2.19.0", Q$1 = { link_mode: "link_mode", relay: "relay" }, At$1 = "0.3", Nt$1 = "WALLETCONNECT_CLIENT_ID", ze$1 = "WALLETCONNECT_LINK_MODE_APPS", $$3 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, $t = "subscription", zt$1 = "0.3", Lt$1 = cjs$3.FIVE_SECONDS * 1e3, kt$1 = "pairing", Ut$1 = "0.3", ie$1 = { wc_pairingDelete: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjs$3.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjs$3.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 0 } } }, se$1 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, F$1 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Ft$1 = "history", Mt$1 = "0.3", Kt$1 = "expirer", M$2 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Bt$1 = "0.3", jt$1 = "verify-api", js$1 = "https://verify.walletconnect.com", Vt$1 = "https://verify.walletconnect.org", le$2 = Vt$1, qt$1 = `${le$2}/v3`, Gt$1 = [js$1, Vt$1], Ht$1 = "echo", Yt$1 = "https://echo.walletconnect.com", q$2 = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" }, J$1 = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" }, qs$2 = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" }, Gs$1 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" }, Hs$1 = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" }, Ys$1 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" }, Jt$1 = 0.1, Xt$1 = "event-client", Wt$1 = 86400, Zt$1 = "https://pulse.walletconnect.org/batch";
function Js$1(n3, e2) {
  if (n3.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s2 = 0; s2 < t.length; s2++) t[s2] = 255;
  for (var i3 = 0; i3 < n3.length; i3++) {
    var r2 = n3.charAt(i3), o3 = r2.charCodeAt(0);
    if (t[o3] !== 255) throw new TypeError(r2 + " is ambiguous");
    t[o3] = i3;
  }
  var a2 = n3.length, c2 = n3.charAt(0), h4 = Math.log(a2) / Math.log(256), u2 = Math.log(256) / Math.log(a2);
  function g2(l2) {
    if (l2 instanceof Uint8Array || (ArrayBuffer.isView(l2) ? l2 = new Uint8Array(l2.buffer, l2.byteOffset, l2.byteLength) : Array.isArray(l2) && (l2 = Uint8Array.from(l2))), !(l2 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (l2.length === 0) return "";
    for (var y3 = 0, O4 = 0, w2 = 0, v2 = l2.length; w2 !== v2 && l2[w2] === 0; ) w2++, y3++;
    for (var k2 = (v2 - w2) * u2 + 1 >>> 0, I3 = new Uint8Array(k2); w2 !== v2; ) {
      for (var V3 = l2[w2], X2 = 0, K3 = k2 - 1; (V3 !== 0 || X2 < O4) && K3 !== -1; K3--, X2++) V3 += 256 * I3[K3] >>> 0, I3[K3] = V3 % a2 >>> 0, V3 = V3 / a2 >>> 0;
      if (V3 !== 0) throw new Error("Non-zero carry");
      O4 = X2, w2++;
    }
    for (var Y2 = k2 - O4; Y2 !== k2 && I3[Y2] === 0; ) Y2++;
    for (var ge2 = c2.repeat(y3); Y2 < k2; ++Y2) ge2 += n3.charAt(I3[Y2]);
    return ge2;
  }
  function m4(l2) {
    if (typeof l2 != "string") throw new TypeError("Expected String");
    if (l2.length === 0) return new Uint8Array();
    var y3 = 0;
    if (l2[y3] !== " ") {
      for (var O4 = 0, w2 = 0; l2[y3] === c2; ) O4++, y3++;
      for (var v2 = (l2.length - y3) * h4 + 1 >>> 0, k2 = new Uint8Array(v2); l2[y3]; ) {
        var I3 = t[l2.charCodeAt(y3)];
        if (I3 === 255) return;
        for (var V3 = 0, X2 = v2 - 1; (I3 !== 0 || V3 < w2) && X2 !== -1; X2--, V3++) I3 += a2 * k2[X2] >>> 0, k2[X2] = I3 % 256 >>> 0, I3 = I3 / 256 >>> 0;
        if (I3 !== 0) throw new Error("Non-zero carry");
        w2 = V3, y3++;
      }
      if (l2[y3] !== " ") {
        for (var K3 = v2 - w2; K3 !== v2 && k2[K3] === 0; ) K3++;
        for (var Y2 = new Uint8Array(O4 + (v2 - K3)), ge2 = O4; K3 !== v2; ) Y2[ge2++] = k2[K3++];
        return Y2;
      }
    }
  }
  function A2(l2) {
    var y3 = m4(l2);
    if (y3) return y3;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: g2, decodeUnsafe: m4, decode: A2 };
}
var Xs$1 = Js$1, Ws$1 = Xs$1;
const Qt$1 = (n3) => {
  if (n3 instanceof Uint8Array && n3.constructor.name === "Uint8Array") return n3;
  if (n3 instanceof ArrayBuffer) return new Uint8Array(n3);
  if (ArrayBuffer.isView(n3)) return new Uint8Array(n3.buffer, n3.byteOffset, n3.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Zs$1 = (n3) => new TextEncoder().encode(n3), Qs$1 = (n3) => new TextDecoder().decode(n3);
let er$1 = class er {
  constructor(e2, t, s2) {
    this.name = e2, this.prefix = t, this.baseEncode = s2;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
};
let tr$1 = class tr {
  constructor(e2, t, s2) {
    if (this.name = e2, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s2;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return ei$1(this, e2);
  }
};
let ir$1 = class ir {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return ei$1(this, e2);
  }
  decode(e2) {
    const t = e2[0], s2 = this.decoders[t];
    if (s2) return s2.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
const ei$1 = (n3, e2) => new ir$1({ ...n3.decoders || { [n3.prefix]: n3 }, ...e2.decoders || { [e2.prefix]: e2 } });
let sr$1 = class sr {
  constructor(e2, t, s2, i3) {
    this.name = e2, this.prefix = t, this.baseEncode = s2, this.baseDecode = i3, this.encoder = new er$1(e2, t, s2), this.decoder = new tr$1(e2, t, i3);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
const ve = ({ name: n3, prefix: e2, encode: t, decode: s2 }) => new sr$1(n3, e2, t, s2), ue$1 = ({ prefix: n3, name: e2, alphabet: t }) => {
  const { encode: s2, decode: i3 } = Ws$1(t, e2);
  return ve({ prefix: n3, name: e2, encode: s2, decode: (r2) => Qt$1(i3(r2)) });
}, rr$1 = (n3, e2, t, s2) => {
  const i3 = {};
  for (let u2 = 0; u2 < e2.length; ++u2) i3[e2[u2]] = u2;
  let r2 = n3.length;
  for (; n3[r2 - 1] === "="; ) --r2;
  const o3 = new Uint8Array(r2 * t / 8 | 0);
  let a2 = 0, c2 = 0, h4 = 0;
  for (let u2 = 0; u2 < r2; ++u2) {
    const g2 = i3[n3[u2]];
    if (g2 === void 0) throw new SyntaxError(`Non-${s2} character`);
    c2 = c2 << t | g2, a2 += t, a2 >= 8 && (a2 -= 8, o3[h4++] = 255 & c2 >> a2);
  }
  if (a2 >= t || 255 & c2 << 8 - a2) throw new SyntaxError("Unexpected end of data");
  return o3;
}, nr$1 = (n3, e2, t) => {
  const s2 = e2[e2.length - 1] === "=", i3 = (1 << t) - 1;
  let r2 = "", o3 = 0, a2 = 0;
  for (let c2 = 0; c2 < n3.length; ++c2) for (a2 = a2 << 8 | n3[c2], o3 += 8; o3 > t; ) o3 -= t, r2 += e2[i3 & a2 >> o3];
  if (o3 && (r2 += e2[i3 & a2 << t - o3]), s2) for (; r2.length * t & 7; ) r2 += "=";
  return r2;
}, C$2 = ({ name: n3, prefix: e2, bitsPerChar: t, alphabet: s2 }) => ve({ prefix: e2, name: n3, encode(i3) {
  return nr$1(i3, s2, t);
}, decode(i3) {
  return rr$1(i3, s2, t, n3);
} }), or$1 = ve({ prefix: "\0", name: "identity", encode: (n3) => Qs$1(n3), decode: (n3) => Zs$1(n3) });
var ar$1 = Object.freeze({ __proto__: null, identity: or$1 });
const cr$1 = C$2({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var hr$1 = Object.freeze({ __proto__: null, base2: cr$1 });
const lr$1 = C$2({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var ur$1 = Object.freeze({ __proto__: null, base8: lr$1 });
const dr$1 = ue$1({ prefix: "9", name: "base10", alphabet: "0123456789" });
var pr$1 = Object.freeze({ __proto__: null, base10: dr$1 });
const gr$1 = C$2({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), yr$1 = C$2({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var br$1 = Object.freeze({ __proto__: null, base16: gr$1, base16upper: yr$1 });
const Dr$1 = C$2({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), mr$1 = C$2({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), vr$1 = C$2({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), fr$1 = C$2({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), _r$1 = C$2({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Er$1 = C$2({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), wr$1 = C$2({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Ir$1 = C$2({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Tr$1 = C$2({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Cr$1 = Object.freeze({ __proto__: null, base32: Dr$1, base32upper: mr$1, base32pad: vr$1, base32padupper: fr$1, base32hex: _r$1, base32hexupper: Er$1, base32hexpad: wr$1, base32hexpadupper: Ir$1, base32z: Tr$1 });
const Pr$1 = ue$1({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Sr$1 = ue$1({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Rr$1 = Object.freeze({ __proto__: null, base36: Pr$1, base36upper: Sr$1 });
const xr$1 = ue$1({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Or$1 = ue$1({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Ar$1 = Object.freeze({ __proto__: null, base58btc: xr$1, base58flickr: Or$1 });
const Nr$1 = C$2({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), $r$1 = C$2({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), zr$1 = C$2({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Lr$1 = C$2({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var kr$1 = Object.freeze({ __proto__: null, base64: Nr$1, base64pad: $r$1, base64url: zr$1, base64urlpad: Lr$1 });
const ti$1 = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Ur$1 = ti$1.reduce((n3, e2, t) => (n3[t] = e2, n3), []), Fr$1 = ti$1.reduce((n3, e2, t) => (n3[e2.codePointAt(0)] = t, n3), []);
function Mr$1(n3) {
  return n3.reduce((e2, t) => (e2 += Ur$1[t], e2), "");
}
function Kr$1(n3) {
  const e2 = [];
  for (const t of n3) {
    const s2 = Fr$1[t.codePointAt(0)];
    if (s2 === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e2.push(s2);
  }
  return new Uint8Array(e2);
}
const Br$1 = ve({ prefix: "🚀", name: "base256emoji", encode: Mr$1, decode: Kr$1 });
var jr$1 = Object.freeze({ __proto__: null, base256emoji: Br$1 }), Vr$1 = si$1, ii$1 = 128, Gr$1 = -128, Hr$1 = Math.pow(2, 31);
function si$1(n3, e2, t) {
  e2 = e2 || [], t = t || 0;
  for (var s2 = t; n3 >= Hr$1; ) e2[t++] = n3 & 255 | ii$1, n3 /= 128;
  for (; n3 & Gr$1; ) e2[t++] = n3 & 255 | ii$1, n3 >>>= 7;
  return e2[t] = n3 | 0, si$1.bytes = t - s2 + 1, e2;
}
var Yr$1 = Le$2, Jr$1 = 128, ri$1 = 127;
function Le$2(n3, s2) {
  var t = 0, s2 = s2 || 0, i3 = 0, r2 = s2, o3, a2 = n3.length;
  do {
    if (r2 >= a2) throw Le$2.bytes = 0, new RangeError("Could not decode varint");
    o3 = n3[r2++], t += i3 < 28 ? (o3 & ri$1) << i3 : (o3 & ri$1) * Math.pow(2, i3), i3 += 7;
  } while (o3 >= Jr$1);
  return Le$2.bytes = r2 - s2, t;
}
var Xr$1 = Math.pow(2, 7), Wr$1 = Math.pow(2, 14), Zr$1 = Math.pow(2, 21), Qr$1 = Math.pow(2, 28), en$1 = Math.pow(2, 35), tn$1 = Math.pow(2, 42), sn$1 = Math.pow(2, 49), rn$1 = Math.pow(2, 56), nn$1 = Math.pow(2, 63), on$1 = function(n3) {
  return n3 < Xr$1 ? 1 : n3 < Wr$1 ? 2 : n3 < Zr$1 ? 3 : n3 < Qr$1 ? 4 : n3 < en$1 ? 5 : n3 < tn$1 ? 6 : n3 < sn$1 ? 7 : n3 < rn$1 ? 8 : n3 < nn$1 ? 9 : 10;
}, an$1 = { encode: Vr$1, decode: Yr$1, encodingLength: on$1 }, ni$1 = an$1;
const oi$1 = (n3, e2, t = 0) => (ni$1.encode(n3, e2, t), e2), ai$1 = (n3) => ni$1.encodingLength(n3), ke$2 = (n3, e2) => {
  const t = e2.byteLength, s2 = ai$1(n3), i3 = s2 + ai$1(t), r2 = new Uint8Array(i3 + t);
  return oi$1(n3, r2, 0), oi$1(t, r2, s2), r2.set(e2, i3), new cn$1(n3, t, e2, r2);
};
let cn$1 = class cn {
  constructor(e2, t, s2, i3) {
    this.code = e2, this.size = t, this.digest = s2, this.bytes = i3;
  }
};
const ci$1 = ({ name: n3, code: e2, encode: t }) => new hn$1(n3, e2, t);
let hn$1 = class hn {
  constructor(e2, t, s2) {
    this.name = e2, this.code = t, this.encode = s2;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const t = this.encode(e2);
      return t instanceof Uint8Array ? ke$2(this.code, t) : t.then((s2) => ke$2(this.code, s2));
    } else throw Error("Unknown type, must be binary type");
  }
};
const hi$1 = (n3) => async (e2) => new Uint8Array(await crypto.subtle.digest(n3, e2)), ln$1 = ci$1({ name: "sha2-256", code: 18, encode: hi$1("SHA-256") }), un$1 = ci$1({ name: "sha2-512", code: 19, encode: hi$1("SHA-512") });
var dn$1 = Object.freeze({ __proto__: null, sha256: ln$1, sha512: un$1 });
const li$1 = 0, pn$1 = "identity", ui$1 = Qt$1, gn$1 = (n3) => ke$2(li$1, ui$1(n3)), yn$1 = { code: li$1, name: pn$1, encode: ui$1, digest: gn$1 };
var bn$1 = Object.freeze({ __proto__: null, identity: yn$1 });
new TextEncoder(), new TextDecoder();
const di$1 = { ...ar$1, ...hr$1, ...ur$1, ...pr$1, ...br$1, ...Cr$1, ...Rr$1, ...Ar$1, ...kr$1, ...jr$1 };
({ ...dn$1, ...bn$1 });
function Dn$1(n3 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(n3) : new Uint8Array(n3);
}
function pi$1(n3, e2, t, s2) {
  return { name: n3, prefix: e2, encoder: { name: n3, prefix: e2, encode: t }, decoder: { decode: s2 } };
}
const gi$1 = pi$1("utf8", "u", (n3) => "u" + new TextDecoder("utf8").decode(n3), (n3) => new TextEncoder().encode(n3.substring(1))), Ue$2 = pi$1("ascii", "a", (n3) => {
  let e2 = "a";
  for (let t = 0; t < n3.length; t++) e2 += String.fromCharCode(n3[t]);
  return e2;
}, (n3) => {
  n3 = n3.substring(1);
  const e2 = Dn$1(n3.length);
  for (let t = 0; t < n3.length; t++) e2[t] = n3.charCodeAt(t);
  return e2;
}), mn$1 = { utf8: gi$1, "utf-8": gi$1, hex: di$1.base16, latin1: Ue$2, ascii: Ue$2, binary: Ue$2, ...di$1 };
function vn$1(n3, e2 = "utf8") {
  const t = mn$1[e2];
  if (!t) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(n3, "utf8") : t.decoder.decode(`${t.prefix}${n3}`);
}
var fn$1 = Object.defineProperty, _n$1 = (n3, e2, t) => e2 in n3 ? fn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, G$1 = (n3, e2, t) => _n$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let yi$1 = class yi {
  constructor(e2, t) {
    this.core = e2, this.logger = t, G$1(this, "keychain", /* @__PURE__ */ new Map()), G$1(this, "name", Et$2), G$1(this, "version", wt$1), G$1(this, "initialized", false), G$1(this, "storagePrefix", B$1), G$1(this, "init", async () => {
      if (!this.initialized) {
        const s2 = await this.getKeyChain();
        typeof s2 < "u" && (this.keychain = s2), this.initialized = true;
      }
    }), G$1(this, "has", (s2) => (this.isInitialized(), this.keychain.has(s2))), G$1(this, "set", async (s2, i3) => {
      this.isInitialized(), this.keychain.set(s2, i3), await this.persist();
    }), G$1(this, "get", (s2) => {
      this.isInitialized();
      const i3 = this.keychain.get(s2);
      if (typeof i3 > "u") {
        const { message: r2 } = te$1("NO_MATCHING_KEY", `${this.name}: ${s2}`);
        throw new Error(r2);
      }
      return i3;
    }), G$1(this, "del", async (s2) => {
      this.isInitialized(), this.keychain.delete(s2), await this.persist();
    }), this.core = e2, this.logger = E$3(t, this.name);
  }
  get context() {
    return y$3(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e2) {
    await this.core.storage.setItem(this.storageKey, no$2(e2));
  }
  async getKeyChain() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? ro$2(e2) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var En$1 = Object.defineProperty, wn$1 = (n3, e2, t) => e2 in n3 ? En$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, P$2 = (n3, e2, t) => wn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let bi$1 = class bi {
  constructor(e2, t, s2) {
    this.core = e2, this.logger = t, P$2(this, "name", ft), P$2(this, "keychain"), P$2(this, "randomSessionIdentifier", ni$2()), P$2(this, "initialized", false), P$2(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }), P$2(this, "hasKeys", (i3) => (this.isInitialized(), this.keychain.has(i3))), P$2(this, "getClientId", async () => {
      this.isInitialized();
      const i3 = await this.getClientSeed(), r2 = Po$2(i3);
      return Qe$1(r2.publicKey);
    }), P$2(this, "generateKeyPair", () => {
      this.isInitialized();
      const i3 = ti$2();
      return this.setPrivateKey(i3.publicKey, i3.privateKey);
    }), P$2(this, "signJWT", async (i3) => {
      this.isInitialized();
      const r2 = await this.getClientSeed(), o3 = Po$2(r2), a2 = this.randomSessionIdentifier, c2 = _t$2;
      return await Qo$1(a2, i3, c2, o3);
    }), P$2(this, "generateSharedKey", (i3, r2, o3) => {
      this.isInitialized();
      const a2 = this.getPrivateKey(i3), c2 = ri$2(a2, r2);
      return this.setSymKey(c2, o3);
    }), P$2(this, "setSymKey", async (i3, r2) => {
      this.isInitialized();
      const o3 = r2 || oi$2(i3);
      return await this.keychain.set(o3, i3), o3;
    }), P$2(this, "deleteKeyPair", async (i3) => {
      this.isInitialized(), await this.keychain.del(i3);
    }), P$2(this, "deleteSymKey", async (i3) => {
      this.isInitialized(), await this.keychain.del(i3);
    }), P$2(this, "encode", async (i3, r2, o3) => {
      this.isInitialized();
      const a2 = rr$2(o3), c2 = safeJsonStringify(r2);
      if (di$2(a2)) return ai$2(c2, o3 == null ? void 0 : o3.encoding);
      if (li$2(a2)) {
        const m4 = a2.senderPublicKey, A2 = a2.receiverPublicKey;
        i3 = await this.generateSharedKey(m4, A2);
      }
      const h4 = this.getSymKey(i3), { type: u2, senderPublicKey: g2 } = a2;
      return ii$2({ type: u2, symKey: h4, message: c2, senderPublicKey: g2, encoding: o3 == null ? void 0 : o3.encoding });
    }), P$2(this, "decode", async (i3, r2, o3) => {
      this.isInitialized();
      const a2 = fi$2(r2, o3);
      if (di$2(a2)) {
        const c2 = ui$2(r2, o3 == null ? void 0 : o3.encoding);
        return safeJsonParse(c2);
      }
      if (li$2(a2)) {
        const c2 = a2.receiverPublicKey, h4 = a2.senderPublicKey;
        i3 = await this.generateSharedKey(c2, h4);
      }
      try {
        const c2 = this.getSymKey(i3), h4 = ci$2({ symKey: c2, encoded: r2, encoding: o3 == null ? void 0 : o3.encoding });
        return safeJsonParse(h4);
      } catch (c2) {
        this.logger.error(`Failed to decode message from topic: '${i3}', clientId: '${await this.getClientId()}'`), this.logger.error(c2);
      }
    }), P$2(this, "getPayloadType", (i3, r2 = At$2) => {
      const o3 = Fe$2({ encoded: i3, encoding: r2 });
      return fe$1(o3.type);
    }), P$2(this, "getPayloadSenderPublicKey", (i3, r2 = At$2) => {
      const o3 = Fe$2({ encoded: i3, encoding: r2 });
      return o3.senderPublicKey ? toString(o3.senderPublicKey, V$2) : void 0;
    }), this.core = e2, this.logger = E$3(t, this.name), this.keychain = s2 || new yi$1(this.core, this.logger);
  }
  get context() {
    return y$3(this.logger);
  }
  async setPrivateKey(e2, t) {
    return await this.keychain.set(e2, t), e2;
  }
  getPrivateKey(e2) {
    return this.keychain.get(e2);
  }
  async getClientSeed() {
    let e2 = "";
    try {
      e2 = this.keychain.get(Ae$1);
    } catch {
      e2 = ni$2(), await this.keychain.set(Ae$1, e2);
    }
    return vn$1(e2, "base16");
  }
  getSymKey(e2) {
    return this.keychain.get(e2);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var In$1 = Object.defineProperty, Tn$1 = (n3, e2, t) => e2 in n3 ? In$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, H$1 = (n3, e2, t) => Tn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Di$1 = class Di extends y$2 {
  constructor(e2, t) {
    super(e2, t), this.logger = e2, this.core = t, H$1(this, "messages", /* @__PURE__ */ new Map()), H$1(this, "name", It$1), H$1(this, "version", Tt$1), H$1(this, "initialized", false), H$1(this, "storagePrefix", B$1), H$1(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s2 = await this.getRelayerMessages();
          typeof s2 < "u" && (this.messages = s2), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s2) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s2);
        } finally {
          this.initialized = true;
        }
      }
    }), H$1(this, "set", async (s2, i3) => {
      this.isInitialized();
      const r2 = si$2(i3);
      let o3 = this.messages.get(s2);
      return typeof o3 > "u" && (o3 = {}), typeof o3[r2] < "u" || (o3[r2] = i3, this.messages.set(s2, o3), await this.persist()), r2;
    }), H$1(this, "get", (s2) => {
      this.isInitialized();
      let i3 = this.messages.get(s2);
      return typeof i3 > "u" && (i3 = {}), i3;
    }), H$1(this, "has", (s2, i3) => {
      this.isInitialized();
      const r2 = this.get(s2), o3 = si$2(i3);
      return typeof r2[o3] < "u";
    }), H$1(this, "del", async (s2) => {
      this.isInitialized(), this.messages.delete(s2), await this.persist();
    }), this.logger = E$3(e2, this.name), this.core = t;
  }
  get context() {
    return y$3(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e2) {
    await this.core.storage.setItem(this.storageKey, no$2(e2));
  }
  async getRelayerMessages() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? ro$2(e2) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Cn$1 = Object.defineProperty, Pn$1 = Object.defineProperties, Sn$1 = Object.getOwnPropertyDescriptors, mi$1 = Object.getOwnPropertySymbols, Rn$1 = Object.prototype.hasOwnProperty, xn$1 = Object.prototype.propertyIsEnumerable, Fe$1 = (n3, e2, t) => e2 in n3 ? Cn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, fe = (n3, e2) => {
  for (var t in e2 || (e2 = {})) Rn$1.call(e2, t) && Fe$1(n3, t, e2[t]);
  if (mi$1) for (var t of mi$1(e2)) xn$1.call(e2, t) && Fe$1(n3, t, e2[t]);
  return n3;
}, Me$2 = (n3, e2) => Pn$1(n3, Sn$1(e2)), j$3 = (n3, e2, t) => Fe$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let On$1 = class On extends m$1 {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, j$3(this, "events", new eventsExports.EventEmitter()), j$3(this, "name", Ct$1), j$3(this, "queue", /* @__PURE__ */ new Map()), j$3(this, "publishTimeout", cjs$3.toMiliseconds(cjs$3.ONE_MINUTE)), j$3(this, "initialPublishTimeout", cjs$3.toMiliseconds(cjs$3.ONE_SECOND * 15)), j$3(this, "needsTransportRestart", false), j$3(this, "publish", async (s2, i3, r2) => {
      var o3;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s2, message: i3, opts: r2 } });
      const a2 = (r2 == null ? void 0 : r2.ttl) || Ne$1, c2 = yi$2(r2), h4 = (r2 == null ? void 0 : r2.prompt) || false, u2 = (r2 == null ? void 0 : r2.tag) || 0, g2 = (r2 == null ? void 0 : r2.id) || getBigIntRpcId().toString(), m4 = { topic: s2, message: i3, opts: { ttl: a2, relay: c2, prompt: h4, tag: u2, id: g2, attestation: r2 == null ? void 0 : r2.attestation, tvf: r2 == null ? void 0 : r2.tvf } }, A2 = `Failed to publish payload, please try again. id:${g2} tag:${u2}`;
      try {
        const l2 = new Promise(async (y3) => {
          const O4 = ({ id: v2 }) => {
            m4.opts.id === v2 && (this.removeRequestFromQueue(v2), this.relayer.events.removeListener(T$3.publish, O4), y3(m4));
          };
          this.relayer.events.on(T$3.publish, O4);
          const w2 = ao$2(new Promise((v2, k2) => {
            this.rpcPublish({ topic: s2, message: i3, ttl: a2, prompt: h4, tag: u2, id: g2, attestation: r2 == null ? void 0 : r2.attestation, tvf: r2 == null ? void 0 : r2.tvf }).then(v2).catch((I3) => {
              this.logger.warn(I3, I3 == null ? void 0 : I3.message), k2(I3);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${g2} tag:${u2}`);
          try {
            await w2, this.events.removeListener(T$3.publish, O4);
          } catch (v2) {
            this.queue.set(g2, Me$2(fe({}, m4), { attempt: 1 })), this.logger.warn(v2, v2 == null ? void 0 : v2.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: g2, topic: s2, message: i3, opts: r2 } }), await ao$2(l2, this.publishTimeout, A2);
      } catch (l2) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(l2), (o3 = r2 == null ? void 0 : r2.internal) != null && o3.throwOnFailedPublish) throw l2;
      } finally {
        this.queue.delete(g2);
      }
    }), j$3(this, "on", (s2, i3) => {
      this.events.on(s2, i3);
    }), j$3(this, "once", (s2, i3) => {
      this.events.once(s2, i3);
    }), j$3(this, "off", (s2, i3) => {
      this.events.off(s2, i3);
    }), j$3(this, "removeListener", (s2, i3) => {
      this.events.removeListener(s2, i3);
    }), this.relayer = e2, this.logger = E$3(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y$3(this.logger);
  }
  async rpcPublish(e2) {
    var t, s2, i3, r2;
    const { topic: o3, message: a2, ttl: c2 = Ne$1, prompt: h4, tag: u2, id: g2, attestation: m4, tvf: A2 } = e2, l2 = { method: mi$2(yi$2().protocol).publish, params: fe({ topic: o3, message: a2, ttl: c2, prompt: h4, tag: u2, attestation: m4 }, A2), id: g2 };
    ae$1((t = l2.params) == null ? void 0 : t.prompt) && ((s2 = l2.params) == null || delete s2.prompt), ae$1((i3 = l2.params) == null ? void 0 : i3.tag) && ((r2 = l2.params) == null || delete r2.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: l2 });
    const y3 = await this.relayer.request(l2);
    return this.relayer.events.emit(T$3.publish, e2), this.logger.debug("Successfully Published Payload"), y3;
  }
  removeRequestFromQueue(e2) {
    this.queue.delete(e2);
  }
  checkQueue() {
    this.queue.forEach(async (e2, t) => {
      const s2 = e2.attempt + 1;
      this.queue.set(t, Me$2(fe({}, e2), { attempt: s2 }));
      const { topic: i3, message: r2, opts: o3, attestation: a2 } = e2;
      this.logger.warn({}, `Publisher: queue->publishing: ${e2.opts.id}, tag: ${e2.opts.tag}, attempt: ${s2}`), await this.rpcPublish(Me$2(fe({}, e2), { topic: i3, message: r2, ttl: o3.ttl, prompt: o3.prompt, tag: o3.tag, id: o3.id, attestation: a2, tvf: o3.tvf })), this.logger.warn({}, `Publisher: queue->published: ${e2.opts.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r$1.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(T$3.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(T$3.message_ack, (e2) => {
      this.removeRequestFromQueue(e2.id.toString());
    });
  }
};
var An$1 = Object.defineProperty, Nn$1 = (n3, e2, t) => e2 in n3 ? An$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, re$1 = (n3, e2, t) => Nn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let $n$1 = class $n {
  constructor() {
    re$1(this, "map", /* @__PURE__ */ new Map()), re$1(this, "set", (e2, t) => {
      const s2 = this.get(e2);
      this.exists(e2, t) || this.map.set(e2, [...s2, t]);
    }), re$1(this, "get", (e2) => this.map.get(e2) || []), re$1(this, "exists", (e2, t) => this.get(e2).includes(t)), re$1(this, "delete", (e2, t) => {
      if (typeof t > "u") {
        this.map.delete(e2);
        return;
      }
      if (!this.map.has(e2)) return;
      const s2 = this.get(e2);
      if (!this.exists(e2, t)) return;
      const i3 = s2.filter((r2) => r2 !== t);
      if (!i3.length) {
        this.map.delete(e2);
        return;
      }
      this.map.set(e2, i3);
    }), re$1(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var zn$1 = Object.defineProperty, Ln$1 = Object.defineProperties, kn$1 = Object.getOwnPropertyDescriptors, vi$1 = Object.getOwnPropertySymbols, Un$1 = Object.prototype.hasOwnProperty, Fn$1 = Object.prototype.propertyIsEnumerable, Ke$2 = (n3, e2, t) => e2 in n3 ? zn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, de$1 = (n3, e2) => {
  for (var t in e2 || (e2 = {})) Un$1.call(e2, t) && Ke$2(n3, t, e2[t]);
  if (vi$1) for (var t of vi$1(e2)) Fn$1.call(e2, t) && Ke$2(n3, t, e2[t]);
  return n3;
}, Be$1 = (n3, e2) => Ln$1(n3, kn$1(e2)), D$2 = (n3, e2, t) => Ke$2(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let fi$1 = class fi extends P$3 {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, D$2(this, "subscriptions", /* @__PURE__ */ new Map()), D$2(this, "topicMap", new $n$1()), D$2(this, "events", new eventsExports.EventEmitter()), D$2(this, "name", $t), D$2(this, "version", zt$1), D$2(this, "pending", /* @__PURE__ */ new Map()), D$2(this, "cached", []), D$2(this, "initialized", false), D$2(this, "pendingSubscriptionWatchLabel", "pending_sub_watch_label"), D$2(this, "pollingInterval", 20), D$2(this, "storagePrefix", B$1), D$2(this, "subscribeTimeout", cjs$3.toMiliseconds(cjs$3.ONE_MINUTE)), D$2(this, "initialSubscribeTimeout", cjs$3.toMiliseconds(cjs$3.ONE_SECOND * 15)), D$2(this, "clientId"), D$2(this, "batchSubscribeTopicsLimit", 500), D$2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
    }), D$2(this, "subscribe", async (s2, i3) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s2, opts: i3 } });
      try {
        const r2 = yi$2(i3), o3 = { topic: s2, relay: r2, transportType: i3 == null ? void 0 : i3.transportType };
        this.pending.set(s2, o3);
        const a2 = await this.rpcSubscribe(s2, r2, i3);
        return typeof a2 == "string" && (this.onSubscribe(a2, o3), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s2, opts: i3 } })), a2;
      } catch (r2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r2), r2;
      }
    }), D$2(this, "unsubscribe", async (s2, i3) => {
      this.isInitialized(), typeof (i3 == null ? void 0 : i3.id) < "u" ? await this.unsubscribeById(s2, i3.id, i3) : await this.unsubscribeByTopic(s2, i3);
    }), D$2(this, "isSubscribed", async (s2) => {
      if (this.topics.includes(s2)) return true;
      const i3 = `${this.pendingSubscriptionWatchLabel}_${s2}`;
      return await new Promise((r2, o3) => {
        const a2 = new cjs$3.Watch();
        a2.start(i3);
        const c2 = setInterval(() => {
          (!this.pending.has(s2) && this.topics.includes(s2) || this.cached.some((h4) => h4.topic === s2)) && (clearInterval(c2), a2.stop(i3), r2(true)), a2.elapsed(i3) >= Lt$1 && (clearInterval(c2), a2.stop(i3), o3(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => false);
    }), D$2(this, "on", (s2, i3) => {
      this.events.on(s2, i3);
    }), D$2(this, "once", (s2, i3) => {
      this.events.once(s2, i3);
    }), D$2(this, "off", (s2, i3) => {
      this.events.off(s2, i3);
    }), D$2(this, "removeListener", (s2, i3) => {
      this.events.removeListener(s2, i3);
    }), D$2(this, "start", async () => {
      await this.onConnect();
    }), D$2(this, "stop", async () => {
      await this.onDisconnect();
    }), D$2(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), D$2(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const s2 = [];
      this.pending.forEach((i3) => {
        s2.push(i3);
      }), await this.batchSubscribe(s2);
    }), D$2(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(r$1.pulse, async () => {
        await this.checkPending();
      }), this.events.on($$3.created, async (s2) => {
        const i3 = $$3.created;
        this.logger.info(`Emitting ${i3}`), this.logger.debug({ type: "event", event: i3, data: s2 }), await this.persist();
      }), this.events.on($$3.deleted, async (s2) => {
        const i3 = $$3.deleted;
        this.logger.info(`Emitting ${i3}`), this.logger.debug({ type: "event", event: i3, data: s2 }), await this.persist();
      });
    }), this.relayer = e2, this.logger = E$3(t, this.name), this.clientId = "";
  }
  get context() {
    return y$3(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  get hasAnyTopics() {
    return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
  }
  hasSubscription(e2, t) {
    let s2 = false;
    try {
      s2 = this.getSubscription(e2).topic === t;
    } catch {
    }
    return s2;
  }
  reset() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e2, t) {
    const s2 = this.topicMap.get(e2);
    await Promise.all(s2.map(async (i3) => await this.unsubscribeById(e2, i3, t)));
  }
  async unsubscribeById(e2, t, s2) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: s2 } });
    try {
      const i3 = yi$2(s2);
      await this.restartToComplete({ topic: e2, id: t, relay: i3 }), await this.rpcUnsubscribe(e2, t, i3);
      const r2 = de$2("USER_DISCONNECTED", `${this.name}, ${e2}`);
      await this.onUnsubscribe(e2, t, r2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: s2 } });
    } catch (i3) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i3), i3;
    }
  }
  async rpcSubscribe(e2, t, s2) {
    var i3;
    (!s2 || (s2 == null ? void 0 : s2.transportType) === Q$1.relay) && await this.restartToComplete({ topic: e2, id: e2, relay: t });
    const r2 = { method: mi$2(t.protocol).subscribe, params: { topic: e2 } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: r2 });
    const o3 = (i3 = s2 == null ? void 0 : s2.internal) == null ? void 0 : i3.throwOnFailedPublish;
    try {
      const a2 = await this.getSubscriptionId(e2);
      if ((s2 == null ? void 0 : s2.transportType) === Q$1.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(r2).catch((u2) => this.logger.warn(u2));
      }, cjs$3.toMiliseconds(cjs$3.ONE_SECOND)), a2;
      const c2 = new Promise(async (u2) => {
        const g2 = (m4) => {
          m4.topic === e2 && (this.events.removeListener($$3.created, g2), u2(m4.id));
        };
        this.events.on($$3.created, g2);
        try {
          const m4 = await ao$2(new Promise((A2, l2) => {
            this.relayer.request(r2).catch((y3) => {
              this.logger.warn(y3, y3 == null ? void 0 : y3.message), l2(y3);
            }).then(A2);
          }), this.initialSubscribeTimeout, `Subscribing to ${e2} failed, please try again`);
          this.events.removeListener($$3.created, g2), u2(m4);
        } catch {
        }
      }), h4 = await ao$2(c2, this.subscribeTimeout, `Subscribing to ${e2} failed, please try again`);
      if (!h4 && o3) throw new Error(`Subscribing to ${e2} failed, please try again`);
      return h4 ? a2 : null;
    } catch (a2) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(T$3.connection_stalled), o3) throw a2;
    }
    return null;
  }
  async rpcBatchSubscribe(e2) {
    if (!e2.length) return;
    const t = e2[0].relay, s2 = { method: mi$2(t.protocol).batchSubscribe, params: { topics: e2.map((i3) => i3.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s2 });
    try {
      await await ao$2(new Promise((i3) => {
        this.relayer.request(s2).catch((r2) => this.logger.warn(r2)).then(i3);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(T$3.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e2) {
    if (!e2.length) return;
    const t = e2[0].relay, s2 = { method: mi$2(t.protocol).batchFetchMessages, params: { topics: e2.map((r2) => r2.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s2 });
    let i3;
    try {
      i3 = await await ao$2(new Promise((r2, o3) => {
        this.relayer.request(s2).catch((a2) => {
          this.logger.warn(a2), o3(a2);
        }).then(r2);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(T$3.connection_stalled);
    }
    return i3;
  }
  rpcUnsubscribe(e2, t, s2) {
    const i3 = { method: mi$2(s2.protocol).unsubscribe, params: { topic: e2, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i3 }), this.relayer.request(i3);
  }
  onSubscribe(e2, t) {
    this.setSubscription(e2, Be$1(de$1({}, t), { id: e2 })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e2) {
    e2.length && e2.forEach((t) => {
      this.setSubscription(t.id, de$1({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e2, t, s2) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e2) && this.deleteSubscription(t, s2), await this.relayer.messages.del(e2);
  }
  async setRelayerSubscriptions(e2) {
    await this.relayer.core.storage.setItem(this.storageKey, e2);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e2, t) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e2, subscription: t }), this.addSubscription(e2, t);
  }
  addSubscription(e2, t) {
    this.subscriptions.set(e2, de$1({}, t)), this.topicMap.set(t.topic, e2), this.events.emit($$3.created, t);
  }
  getSubscription(e2) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e2 });
    const t = this.subscriptions.get(e2);
    if (!t) {
      const { message: s2 } = te$1("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(s2);
    }
    return t;
  }
  deleteSubscription(e2, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e2, reason: t });
    const s2 = this.getSubscription(e2);
    this.subscriptions.delete(e2), this.topicMap.delete(s2.topic, e2), this.events.emit($$3.deleted, Be$1(de$1({}, s2), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit($$3.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e2 = [...this.cached], t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let s2 = 0; s2 < t; s2++) {
        const i3 = e2.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i3);
      }
    }
    this.events.emit($$3.resubscribed);
  }
  async restore() {
    try {
      const e2 = await this.getRelayerSubscriptions();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.subscriptions.size) {
        const { message: t } = te$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e2);
    }
  }
  async batchSubscribe(e2) {
    e2.length && (await this.rpcBatchSubscribe(e2), this.onBatchSubscribe(await Promise.all(e2.map(async (t) => Be$1(de$1({}, t), { id: await this.getSubscriptionId(t.topic) })))));
  }
  async batchFetchMessages(e2) {
    if (!e2.length) return;
    this.logger.trace(`Fetching batch messages for ${e2.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e2);
    t && t.messages && (await vo$1(cjs$3.toMiliseconds(cjs$3.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async restartToComplete(e2) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e2), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e2) {
    return si$2(e2 + await this.getClientId());
  }
};
var Mn$1 = Object.defineProperty, _i$1 = Object.getOwnPropertySymbols, Kn$1 = Object.prototype.hasOwnProperty, Bn$1 = Object.prototype.propertyIsEnumerable, je$1 = (n3, e2, t) => e2 in n3 ? Mn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, Ei$1 = (n3, e2) => {
  for (var t in e2 || (e2 = {})) Kn$1.call(e2, t) && je$1(n3, t, e2[t]);
  if (_i$1) for (var t of _i$1(e2)) Bn$1.call(e2, t) && je$1(n3, t, e2[t]);
  return n3;
}, p$2 = (n3, e2, t) => je$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let wi$1 = class wi extends d$3 {
  constructor(e2) {
    super(e2), p$2(this, "protocol", "wc"), p$2(this, "version", 2), p$2(this, "core"), p$2(this, "logger"), p$2(this, "events", new eventsExports.EventEmitter()), p$2(this, "provider"), p$2(this, "messages"), p$2(this, "subscriber"), p$2(this, "publisher"), p$2(this, "name", Rt$2), p$2(this, "transportExplicitlyClosed", false), p$2(this, "initialized", false), p$2(this, "connectionAttemptInProgress", false), p$2(this, "relayUrl"), p$2(this, "projectId"), p$2(this, "packageName"), p$2(this, "bundleId"), p$2(this, "hasExperiencedNetworkDisruption", false), p$2(this, "pingTimeout"), p$2(this, "heartBeatTimeout", cjs$3.toMiliseconds(cjs$3.THIRTY_SECONDS + cjs$3.FIVE_SECONDS)), p$2(this, "reconnectTimeout"), p$2(this, "connectPromise"), p$2(this, "reconnectInProgress", false), p$2(this, "requestsInFlight", []), p$2(this, "connectTimeout", cjs$3.toMiliseconds(cjs$3.ONE_SECOND * 15)), p$2(this, "request", async (t) => {
      var s2, i3;
      this.logger.debug("Publishing Request Payload");
      const r2 = t.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: r2, method: t.method, topic: (s2 = t.params) == null ? void 0 : s2.topic }, "relayer.request - publishing...");
        const o3 = `${r2}:${((i3 = t.params) == null ? void 0 : i3.tag) || ""}`;
        this.requestsInFlight.push(o3);
        const a2 = await this.provider.request(t);
        return this.requestsInFlight = this.requestsInFlight.filter((c2) => c2 !== o3), a2;
      } catch (o3) {
        throw this.logger.debug(`Failed to Publish Request: ${r2}`), o3;
      }
    }), p$2(this, "resetPingTimeout", () => {
      if (et$1()) try {
        clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var t, s2, i3;
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (i3 = (s2 = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : s2.socket) == null || i3.terminate();
        }, this.heartBeatTimeout);
      } catch (t) {
        this.logger.warn(t, t == null ? void 0 : t.message);
      }
    }), p$2(this, "onPayloadHandler", (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }), p$2(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(T$3.connect);
    }), p$2(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), p$2(this, "onProviderErrorHandler", (t) => {
      this.logger.fatal(`Fatal socket error: ${t.message}`), this.events.emit(T$3.error, t), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), p$2(this, "registerProviderListeners", () => {
      this.provider.on(L$3.payload, this.onPayloadHandler), this.provider.on(L$3.connect, this.onConnectHandler), this.provider.on(L$3.disconnect, this.onDisconnectHandler), this.provider.on(L$3.error, this.onProviderErrorHandler);
    }), this.core = e2.core, this.logger = typeof e2.logger < "u" && typeof e2.logger != "string" ? E$3(e2.logger, this.name) : gt$1(k$2({ level: e2.logger || St$2 })), this.messages = new Di$1(this.logger, e2.core), this.subscriber = new fi$1(this, this.logger), this.publisher = new On$1(this, this.logger), this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || $e$2, this.projectId = e2.projectId, Wr$2() ? this.packageName = Jr$2() : zr$2() && (this.bundleId = Jr$2()), this.provider = {};
  }
  async init() {
    if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.subscriber.hasAnyTopics) try {
      await this.transportOpen();
    } catch (e2) {
      this.logger.warn(e2, e2 == null ? void 0 : e2.message);
    }
  }
  get context() {
    return y$3(this.logger);
  }
  get connected() {
    var e2, t, s2;
    return ((s2 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : s2.readyState) === 1 || false;
  }
  get connecting() {
    var e2, t, s2;
    return ((s2 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : s2.readyState) === 0 || this.connectPromise !== void 0 || false;
  }
  async publish(e2, t, s2) {
    this.isInitialized(), await this.publisher.publish(e2, t, s2), await this.recordMessageEvent({ topic: e2, message: t, publishedAt: Date.now(), transportType: Q$1.relay });
  }
  async subscribe(e2, t) {
    var s2, i3, r2;
    this.isInitialized(), (!(t != null && t.transportType) || (t == null ? void 0 : t.transportType) === "relay") && await this.toEstablishConnection();
    const o3 = typeof ((s2 = t == null ? void 0 : t.internal) == null ? void 0 : s2.throwOnFailedPublish) > "u" ? true : (i3 = t == null ? void 0 : t.internal) == null ? void 0 : i3.throwOnFailedPublish;
    let a2 = ((r2 = this.subscriber.topicMap.get(e2)) == null ? void 0 : r2[0]) || "", c2;
    const h4 = (u2) => {
      u2.topic === e2 && (this.subscriber.off($$3.created, h4), c2());
    };
    return await Promise.all([new Promise((u2) => {
      c2 = u2, this.subscriber.on($$3.created, h4);
    }), new Promise(async (u2, g2) => {
      a2 = await this.subscriber.subscribe(e2, Ei$1({ internal: { throwOnFailedPublish: o3 } }, t)).catch((m4) => {
        o3 && g2(m4);
      }) || a2, u2();
    })]), a2;
  }
  async unsubscribe(e2, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e2, t);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await ao$2(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e2) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, s2) => {
      await this.connect(e2).then(t).catch(s2).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e2) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e2 || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Yi$1()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e2) {
    if ((e2 == null ? void 0 : e2.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e2.sort((s2, i3) => s2.publishedAt - i3.publishedAt);
    this.logger.debug(`Batch of ${t.length} message events sorted`);
    for (const s2 of t) try {
      await this.onMessageEvent(s2);
    } catch (i3) {
      this.logger.warn(i3, "Error while processing batch message event: " + (i3 == null ? void 0 : i3.message));
    }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  async onLinkMessageEvent(e2, t) {
    const { topic: s2 } = e2;
    if (!t.sessionExists) {
      const i3 = ho$1(cjs$3.FIVE_MINUTES), r2 = { topic: s2, expiry: i3, relay: { protocol: "irn" }, active: false };
      await this.core.pairing.pairings.set(s2, r2);
    }
    this.events.emit(T$3.message, e2), await this.recordMessageEvent(e2);
  }
  async connect(e2) {
    await this.confirmOnlineStateOrThrow(), e2 && e2 !== this.relayUrl && (this.relayUrl = e2, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    let t = 1;
    for (; t < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (s2, i3) => {
          const r2 = () => {
            i3(new Error("Connection interrupted while trying to subscribe"));
          };
          this.provider.once(L$3.disconnect, r2), await ao$2(new Promise((o3, a2) => {
            this.provider.connect().then(o3).catch(a2);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o3) => {
            i3(o3);
          }).finally(() => {
            this.provider.off(L$3.disconnect, r2), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o3, a2) => {
            const c2 = () => {
              a2(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(L$3.disconnect, c2), await this.subscriber.start().then(o3).catch(a2).finally(() => {
              this.provider.off(L$3.disconnect, c2);
            });
          }), this.hasExperiencedNetworkDisruption = false, s2();
        });
      } catch (s2) {
        await this.subscriber.stop();
        const i3 = s2;
        this.logger.warn({}, i3.message), this.hasExperiencedNetworkDisruption = true;
      } finally {
        this.connectionAttemptInProgress = false;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
        break;
      }
      await new Promise((s2) => setTimeout(s2, cjs$3.toMiliseconds(t * 1))), t++;
    }
  }
  startPingTimeout() {
    var e2, t, s2, i3, r2;
    if (et$1()) try {
      (t = (e2 = this.provider) == null ? void 0 : e2.connection) != null && t.socket && ((r2 = (i3 = (s2 = this.provider) == null ? void 0 : s2.connection) == null ? void 0 : i3.socket) == null || r2.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o3) {
      this.logger.warn(o3, o3 == null ? void 0 : o3.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e2 = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o$2(new f$3(Zr$2({ sdkVersion: me$1, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e2, useOnCloseEvent: true, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e2) {
    const { topic: t, message: s2 } = e2;
    await this.messages.set(t, s2);
  }
  async shouldIgnoreMessageEvent(e2) {
    const { topic: t, message: s2 } = e2;
    if (!s2 || s2.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${s2}`), true;
    if (!await this.subscriber.isSubscribed(t)) return this.logger.warn(`Ignoring message for non-subscribed topic ${t}`), true;
    const i3 = this.messages.has(t, s2);
    return i3 && this.logger.warn(`Ignoring duplicate message: ${s2}`), i3;
  }
  async onProviderPayload(e2) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e2 }), isJsonRpcRequest(e2)) {
      if (!e2.method.endsWith(xt$1)) return;
      const t = e2.params, { topic: s2, message: i3, publishedAt: r2, attestation: o3 } = t.data, a2 = { topic: s2, message: i3, publishedAt: r2, transportType: Q$1.relay, attestation: o3 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ei$1({ type: "event", event: t.id }, a2)), this.events.emit(t.id, a2), await this.acknowledgePayload(e2), await this.onMessageEvent(a2);
    } else isJsonRpcResponse(e2) && this.events.emit(T$3.message_ack, e2);
  }
  async onMessageEvent(e2) {
    await this.shouldIgnoreMessageEvent(e2) || (this.events.emit(T$3.message, e2), await this.recordMessageEvent(e2));
  }
  async acknowledgePayload(e2) {
    const t = formatJsonRpcResult(e2.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(L$3.payload, this.onPayloadHandler), this.provider.off(L$3.connect, this.onConnectHandler), this.provider.off(L$3.disconnect, this.onDisconnectHandler), this.provider.off(L$3.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e2 = await Yi$1();
    Xi$1(async (t) => {
      e2 !== t && (e2 = t, t ? await this.transportOpen().catch((s2) => this.logger.error(s2, s2 == null ? void 0 : s2.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(T$3.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e2) => this.logger.error(e2, e2 == null ? void 0 : e2.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
    }, cjs$3.toMiliseconds(Ot$1)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(), !this.connected && await this.connect();
  }
};
var jn$1 = Object.defineProperty, Ii$1 = Object.getOwnPropertySymbols, Vn$1 = Object.prototype.hasOwnProperty, qn$1 = Object.prototype.propertyIsEnumerable, Ve$1 = (n3, e2, t) => e2 in n3 ? jn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, Ti$1 = (n3, e2) => {
  for (var t in e2 || (e2 = {})) Vn$1.call(e2, t) && Ve$1(n3, t, e2[t]);
  if (Ii$1) for (var t of Ii$1(e2)) qn$1.call(e2, t) && Ve$1(n3, t, e2[t]);
  return n3;
}, z$2 = (n3, e2, t) => Ve$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Ci$1 = class Ci extends f$4 {
  constructor(e2, t, s2, i3 = B$1, r2 = void 0) {
    super(e2, t, s2, i3), this.core = e2, this.logger = t, this.name = s2, z$2(this, "map", /* @__PURE__ */ new Map()), z$2(this, "version", At$1), z$2(this, "cached", []), z$2(this, "initialized", false), z$2(this, "getKey"), z$2(this, "storagePrefix", B$1), z$2(this, "recentlyDeleted", []), z$2(this, "recentlyDeletedLimit", 200), z$2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o3) => {
        this.getKey && o3 !== null && !ae$1(o3) ? this.map.set(this.getKey(o3), o3) : Pi$2(o3) ? this.map.set(o3.id, o3) : Li$2(o3) && this.map.set(o3.topic, o3);
      }), this.cached = [], this.initialized = true);
    }), z$2(this, "set", async (o3, a2) => {
      this.isInitialized(), this.map.has(o3) ? await this.update(o3, a2) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o3, value: a2 }), this.map.set(o3, a2), await this.persist());
    }), z$2(this, "get", (o3) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o3 }), this.getData(o3))), z$2(this, "getAll", (o3) => (this.isInitialized(), o3 ? this.values.filter((a2) => Object.keys(o3).every((c2) => Ls$2(a2[c2], o3[c2]))) : this.values)), z$2(this, "update", async (o3, a2) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o3, update: a2 });
      const c2 = Ti$1(Ti$1({}, this.getData(o3)), a2);
      this.map.set(o3, c2), await this.persist();
    }), z$2(this, "delete", async (o3, a2) => {
      this.isInitialized(), this.map.has(o3) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o3, reason: a2 }), this.map.delete(o3), this.addToRecentlyDeleted(o3), await this.persist());
    }), this.logger = E$3(t, this.name), this.storagePrefix = i3, this.getKey = r2;
  }
  get context() {
    return y$3(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e2) {
    this.recentlyDeleted.push(e2), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e2) {
    const t = this.map.get(e2);
    if (!t) {
      if (this.recentlyDeleted.includes(e2)) {
        const { message: i3 } = te$1("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e2}`);
        throw this.logger.error(i3), new Error(i3);
      }
      const { message: s2 } = te$1("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.error(s2), new Error(s2);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e2 = await this.getDataStore();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.map.size) {
        const { message: t } = te$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Gn$1 = Object.defineProperty, Hn$1 = (n3, e2, t) => e2 in n3 ? Gn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, d$1 = (n3, e2, t) => Hn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Pi$1 = class Pi {
  constructor(e2, t) {
    this.core = e2, this.logger = t, d$1(this, "name", kt$1), d$1(this, "version", Ut$1), d$1(this, "events", new wt$4()), d$1(this, "pairings"), d$1(this, "initialized", false), d$1(this, "storagePrefix", B$1), d$1(this, "ignoredPayloadTypes", [Ie$1]), d$1(this, "registeredMethods", []), d$1(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }), d$1(this, "register", ({ methods: s2 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s2])];
    }), d$1(this, "create", async (s2) => {
      this.isInitialized();
      const i3 = ni$2(), r2 = await this.core.crypto.setSymKey(i3), o3 = ho$1(cjs$3.FIVE_MINUTES), a2 = { protocol: Pt }, c2 = { topic: r2, expiry: o3, relay: a2, active: false, methods: s2 == null ? void 0 : s2.methods }, h4 = wi$2({ protocol: this.core.protocol, version: this.core.version, topic: r2, symKey: i3, relay: a2, expiryTimestamp: o3, methods: s2 == null ? void 0 : s2.methods });
      return this.events.emit(se$1.create, c2), this.core.expirer.set(r2, o3), await this.pairings.set(r2, c2), await this.core.relayer.subscribe(r2, { transportType: s2 == null ? void 0 : s2.transportType }), { topic: r2, uri: h4 };
    }), d$1(this, "pair", async (s2) => {
      this.isInitialized();
      const i3 = this.core.eventClient.createEvent({ properties: { topic: s2 == null ? void 0 : s2.uri, trace: [q$2.pairing_started] } });
      this.isValidPair(s2, i3);
      const { topic: r2, symKey: o3, relay: a2, expiryTimestamp: c2, methods: h4 } = bi$2(s2.uri);
      i3.props.properties.topic = r2, i3.addTrace(q$2.pairing_uri_validation_success), i3.addTrace(q$2.pairing_uri_not_expired);
      let u2;
      if (this.pairings.keys.includes(r2)) {
        if (u2 = this.pairings.get(r2), i3.addTrace(q$2.existing_pairing), u2.active) throw i3.setError(J$1.active_pairing_already_exists), new Error(`Pairing already exists: ${r2}. Please try again with a new connection URI.`);
        i3.addTrace(q$2.pairing_not_expired);
      }
      const g2 = c2 || ho$1(cjs$3.FIVE_MINUTES), m4 = { topic: r2, relay: a2, expiry: g2, active: false, methods: h4 };
      this.core.expirer.set(r2, g2), await this.pairings.set(r2, m4), i3.addTrace(q$2.store_new_pairing), s2.activatePairing && await this.activate({ topic: r2 }), this.events.emit(se$1.create, m4), i3.addTrace(q$2.emit_inactive_pairing), this.core.crypto.keychain.has(r2) || await this.core.crypto.setSymKey(o3, r2), i3.addTrace(q$2.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        i3.setError(J$1.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(r2, { relay: a2 });
      } catch (A2) {
        throw i3.setError(J$1.subscribe_pairing_topic_failure), A2;
      }
      return i3.addTrace(q$2.subscribe_pairing_topic_success), m4;
    }), d$1(this, "activate", async ({ topic: s2 }) => {
      this.isInitialized();
      const i3 = ho$1(cjs$3.FIVE_MINUTES);
      this.core.expirer.set(s2, i3), await this.pairings.update(s2, { active: true, expiry: i3 });
    }), d$1(this, "ping", async (s2) => {
      this.isInitialized(), await this.isValidPing(s2), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: i3 } = s2;
      if (this.pairings.keys.includes(i3)) {
        const r2 = await this.sendRequest(i3, "wc_pairingPing", {}), { done: o3, resolve: a2, reject: c2 } = co$2();
        this.events.once(go$1("pairing_ping", r2), ({ error: h4 }) => {
          h4 ? c2(h4) : a2();
        }), await o3();
      }
    }), d$1(this, "updateExpiry", async ({ topic: s2, expiry: i3 }) => {
      this.isInitialized(), await this.pairings.update(s2, { expiry: i3 });
    }), d$1(this, "updateMetadata", async ({ topic: s2, metadata: i3 }) => {
      this.isInitialized(), await this.pairings.update(s2, { peerMetadata: i3 });
    }), d$1(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), d$1(this, "disconnect", async (s2) => {
      this.isInitialized(), await this.isValidDisconnect(s2);
      const { topic: i3 } = s2;
      this.pairings.keys.includes(i3) && (await this.sendRequest(i3, "wc_pairingDelete", de$2("USER_DISCONNECTED")), await this.deletePairing(i3));
    }), d$1(this, "formatUriFromPairing", (s2) => {
      this.isInitialized();
      const { topic: i3, relay: r2, expiry: o3, methods: a2 } = s2, c2 = this.core.crypto.keychain.get(i3);
      return wi$2({ protocol: this.core.protocol, version: this.core.version, topic: i3, symKey: c2, relay: r2, expiryTimestamp: o3, methods: a2 });
    }), d$1(this, "sendRequest", async (s2, i3, r2) => {
      const o3 = formatJsonRpcRequest(i3, r2), a2 = await this.core.crypto.encode(s2, o3), c2 = ie$1[i3].req;
      return this.core.history.set(s2, o3), this.core.relayer.publish(s2, a2, c2), o3.id;
    }), d$1(this, "sendResult", async (s2, i3, r2) => {
      const o3 = formatJsonRpcResult(s2, r2), a2 = await this.core.crypto.encode(i3, o3), c2 = (await this.core.history.get(i3, s2)).request.method, h4 = ie$1[c2].res;
      await this.core.relayer.publish(i3, a2, h4), await this.core.history.resolve(o3);
    }), d$1(this, "sendError", async (s2, i3, r2) => {
      const o3 = formatJsonRpcError(s2, r2), a2 = await this.core.crypto.encode(i3, o3), c2 = (await this.core.history.get(i3, s2)).request.method, h4 = ie$1[c2] ? ie$1[c2].res : ie$1.unregistered_method.res;
      await this.core.relayer.publish(i3, a2, h4), await this.core.history.resolve(o3);
    }), d$1(this, "deletePairing", async (s2, i3) => {
      await this.core.relayer.unsubscribe(s2), await Promise.all([this.pairings.delete(s2, de$2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s2), i3 ? Promise.resolve() : this.core.expirer.del(s2)]);
    }), d$1(this, "cleanup", async () => {
      const s2 = this.pairings.getAll().filter((i3) => po$1(i3.expiry));
      await Promise.all(s2.map((i3) => this.deletePairing(i3.topic)));
    }), d$1(this, "onRelayEventRequest", (s2) => {
      const { topic: i3, payload: r2 } = s2;
      switch (r2.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(i3, r2);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(i3, r2);
        default:
          return this.onUnknownRpcMethodRequest(i3, r2);
      }
    }), d$1(this, "onRelayEventResponse", async (s2) => {
      const { topic: i3, payload: r2 } = s2, o3 = (await this.core.history.get(i3, r2.id)).request.method;
      switch (o3) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i3, r2);
        default:
          return this.onUnknownRpcMethodResponse(o3);
      }
    }), d$1(this, "onPairingPingRequest", async (s2, i3) => {
      const { id: r2 } = i3;
      try {
        this.isValidPing({ topic: s2 }), await this.sendResult(r2, s2, true), this.events.emit(se$1.ping, { id: r2, topic: s2 });
      } catch (o3) {
        await this.sendError(r2, s2, o3), this.logger.error(o3);
      }
    }), d$1(this, "onPairingPingResponse", (s2, i3) => {
      const { id: r2 } = i3;
      setTimeout(() => {
        isJsonRpcResult(i3) ? this.events.emit(go$1("pairing_ping", r2), {}) : isJsonRpcError(i3) && this.events.emit(go$1("pairing_ping", r2), { error: i3.error });
      }, 500);
    }), d$1(this, "onPairingDeleteRequest", async (s2, i3) => {
      const { id: r2 } = i3;
      try {
        this.isValidDisconnect({ topic: s2 }), await this.deletePairing(s2), this.events.emit(se$1.delete, { id: r2, topic: s2 });
      } catch (o3) {
        await this.sendError(r2, s2, o3), this.logger.error(o3);
      }
    }), d$1(this, "onUnknownRpcMethodRequest", async (s2, i3) => {
      const { id: r2, method: o3 } = i3;
      try {
        if (this.registeredMethods.includes(o3)) return;
        const a2 = de$2("WC_METHOD_UNSUPPORTED", o3);
        await this.sendError(r2, s2, a2), this.logger.error(a2);
      } catch (a2) {
        await this.sendError(r2, s2, a2), this.logger.error(a2);
      }
    }), d$1(this, "onUnknownRpcMethodResponse", (s2) => {
      this.registeredMethods.includes(s2) || this.logger.error(de$2("WC_METHOD_UNSUPPORTED", s2));
    }), d$1(this, "isValidPair", (s2, i3) => {
      var r2;
      if (!Di$2(s2)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `pair() params: ${s2}`);
        throw i3.setError(J$1.malformed_pairing_uri), new Error(a2);
      }
      if (!Ri$2(s2.uri)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `pair() uri: ${s2.uri}`);
        throw i3.setError(J$1.malformed_pairing_uri), new Error(a2);
      }
      const o3 = bi$2(s2 == null ? void 0 : s2.uri);
      if (!((r2 = o3 == null ? void 0 : o3.relay) != null && r2.protocol)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw i3.setError(J$1.malformed_pairing_uri), new Error(a2);
      }
      if (!(o3 != null && o3.symKey)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", "pair() uri#symKey");
        throw i3.setError(J$1.malformed_pairing_uri), new Error(a2);
      }
      if (o3 != null && o3.expiryTimestamp && cjs$3.toMiliseconds(o3 == null ? void 0 : o3.expiryTimestamp) < Date.now()) {
        i3.setError(J$1.pairing_expired);
        const { message: a2 } = te$1("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a2);
      }
    }), d$1(this, "isValidPing", async (s2) => {
      if (!Di$2(s2)) {
        const { message: r2 } = te$1("MISSING_OR_INVALID", `ping() params: ${s2}`);
        throw new Error(r2);
      }
      const { topic: i3 } = s2;
      await this.isValidPairingTopic(i3);
    }), d$1(this, "isValidDisconnect", async (s2) => {
      if (!Di$2(s2)) {
        const { message: r2 } = te$1("MISSING_OR_INVALID", `disconnect() params: ${s2}`);
        throw new Error(r2);
      }
      const { topic: i3 } = s2;
      await this.isValidPairingTopic(i3);
    }), d$1(this, "isValidPairingTopic", async (s2) => {
      if (!q$3(s2, false)) {
        const { message: i3 } = te$1("MISSING_OR_INVALID", `pairing topic should be a string: ${s2}`);
        throw new Error(i3);
      }
      if (!this.pairings.keys.includes(s2)) {
        const { message: i3 } = te$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s2}`);
        throw new Error(i3);
      }
      if (po$1(this.pairings.get(s2).expiry)) {
        await this.deletePairing(s2);
        const { message: i3 } = te$1("EXPIRED", `pairing topic: ${s2}`);
        throw new Error(i3);
      }
    }), this.core = e2, this.logger = E$3(t, this.name), this.pairings = new Ci$1(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y$3(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(T$3.message, async (e2) => {
      const { topic: t, message: s2, transportType: i3 } = e2;
      if (!this.pairings.keys.includes(t) || i3 === Q$1.link_mode || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s2))) return;
      const r2 = await this.core.crypto.decode(t, s2);
      try {
        isJsonRpcRequest(r2) ? (this.core.history.set(t, r2), this.onRelayEventRequest({ topic: t, payload: r2 })) : isJsonRpcResponse(r2) && (await this.core.history.resolve(r2), await this.onRelayEventResponse({ topic: t, payload: r2 }), this.core.history.delete(t, r2.id));
      } catch (o3) {
        this.logger.error(o3);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(M$2.expired, async (e2) => {
      const { topic: t } = lo$1(e2.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(se$1.expire, { topic: t }));
    });
  }
};
var Yn$1 = Object.defineProperty, Jn$1 = (n3, e2, t) => e2 in n3 ? Yn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, S$1 = (n3, e2, t) => Jn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Si$1 = class Si extends I$1 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, S$1(this, "records", /* @__PURE__ */ new Map()), S$1(this, "events", new eventsExports.EventEmitter()), S$1(this, "name", Ft$1), S$1(this, "version", Mt$1), S$1(this, "cached", []), S$1(this, "initialized", false), S$1(this, "storagePrefix", B$1), S$1(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s2) => this.records.set(s2.id, s2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), S$1(this, "set", (s2, i3, r2) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s2, request: i3, chainId: r2 }), this.records.has(i3.id)) return;
      const o3 = { id: i3.id, topic: s2, request: { method: i3.method, params: i3.params || null }, chainId: r2, expiry: ho$1(cjs$3.THIRTY_DAYS) };
      this.records.set(o3.id, o3), this.persist(), this.events.emit(F$1.created, o3);
    }), S$1(this, "resolve", async (s2) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s2 }), !this.records.has(s2.id)) return;
      const i3 = await this.getRecord(s2.id);
      typeof i3.response > "u" && (i3.response = isJsonRpcError(s2) ? { error: s2.error } : { result: s2.result }, this.records.set(i3.id, i3), this.persist(), this.events.emit(F$1.updated, i3));
    }), S$1(this, "get", async (s2, i3) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s2, id: i3 }), await this.getRecord(i3))), S$1(this, "delete", (s2, i3) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i3 }), this.values.forEach((r2) => {
        if (r2.topic === s2) {
          if (typeof i3 < "u" && r2.id !== i3) return;
          this.records.delete(r2.id), this.events.emit(F$1.deleted, r2);
        }
      }), this.persist();
    }), S$1(this, "exists", async (s2, i3) => (this.isInitialized(), this.records.has(i3) ? (await this.getRecord(i3)).topic === s2 : false)), S$1(this, "on", (s2, i3) => {
      this.events.on(s2, i3);
    }), S$1(this, "once", (s2, i3) => {
      this.events.once(s2, i3);
    }), S$1(this, "off", (s2, i3) => {
      this.events.off(s2, i3);
    }), S$1(this, "removeListener", (s2, i3) => {
      this.events.removeListener(s2, i3);
    }), this.logger = E$3(t, this.name);
  }
  get context() {
    return y$3(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e2 = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u") return;
      const s2 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e2.push(s2);
    }), e2;
  }
  async setJsonRpcRecords(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e2) {
    this.isInitialized();
    const t = this.records.get(e2);
    if (!t) {
      const { message: s2 } = te$1("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(s2);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(F$1.sync);
  }
  async restore() {
    try {
      const e2 = await this.getJsonRpcRecords();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.records.size) {
        const { message: t } = te$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e2);
    }
  }
  registerEventListeners() {
    this.events.on(F$1.created, (e2) => {
      const t = F$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(F$1.updated, (e2) => {
      const t = F$1.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(F$1.deleted, (e2) => {
      const t = F$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.core.heartbeat.on(r$1.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e2 = false;
      this.records.forEach((t) => {
        cjs$3.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(F$1.deleted, t, false), e2 = true);
      }), e2 && this.persist();
    } catch (e2) {
      this.logger.warn(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Xn$1 = Object.defineProperty, Wn$1 = (n3, e2, t) => e2 in n3 ? Xn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, x$3 = (n3, e2, t) => Wn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Ri$1 = class Ri extends S$2 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, x$3(this, "expirations", /* @__PURE__ */ new Map()), x$3(this, "events", new eventsExports.EventEmitter()), x$3(this, "name", Kt$1), x$3(this, "version", Bt$1), x$3(this, "cached", []), x$3(this, "initialized", false), x$3(this, "storagePrefix", B$1), x$3(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s2) => this.expirations.set(s2.target, s2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), x$3(this, "has", (s2) => {
      try {
        const i3 = this.formatTarget(s2);
        return typeof this.getExpiration(i3) < "u";
      } catch {
        return false;
      }
    }), x$3(this, "set", (s2, i3) => {
      this.isInitialized();
      const r2 = this.formatTarget(s2), o3 = { target: r2, expiry: i3 };
      this.expirations.set(r2, o3), this.checkExpiry(r2, o3), this.events.emit(M$2.created, { target: r2, expiration: o3 });
    }), x$3(this, "get", (s2) => {
      this.isInitialized();
      const i3 = this.formatTarget(s2);
      return this.getExpiration(i3);
    }), x$3(this, "del", (s2) => {
      if (this.isInitialized(), this.has(s2)) {
        const i3 = this.formatTarget(s2), r2 = this.getExpiration(i3);
        this.expirations.delete(i3), this.events.emit(M$2.deleted, { target: i3, expiration: r2 });
      }
    }), x$3(this, "on", (s2, i3) => {
      this.events.on(s2, i3);
    }), x$3(this, "once", (s2, i3) => {
      this.events.once(s2, i3);
    }), x$3(this, "off", (s2, i3) => {
      this.events.off(s2, i3);
    }), x$3(this, "removeListener", (s2, i3) => {
      this.events.removeListener(s2, i3);
    }), this.logger = E$3(t, this.name);
  }
  get context() {
    return y$3(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e2) {
    if (typeof e2 == "string") return uo$1(e2);
    if (typeof e2 == "number") return fo$1(e2);
    const { message: t } = te$1("UNKNOWN_TYPE", `Target type: ${typeof e2}`);
    throw new Error(t);
  }
  async setExpirations(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(M$2.sync);
  }
  async restore() {
    try {
      const e2 = await this.getExpirations();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.expirations.size) {
        const { message: t } = te$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e2);
    }
  }
  getExpiration(e2) {
    const t = this.expirations.get(e2);
    if (!t) {
      const { message: s2 } = te$1("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.warn(s2), new Error(s2);
    }
    return t;
  }
  checkExpiry(e2, t) {
    const { expiry: s2 } = t;
    cjs$3.toMiliseconds(s2) - Date.now() <= 0 && this.expire(e2, t);
  }
  expire(e2, t) {
    this.expirations.delete(e2), this.events.emit(M$2.expired, { target: e2, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e2, t) => this.checkExpiry(t, e2));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r$1.pulse, () => this.checkExpirations()), this.events.on(M$2.created, (e2) => {
      const t = M$2.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(M$2.expired, (e2) => {
      const t = M$2.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(M$2.deleted, (e2) => {
      const t = M$2.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Zn$1 = Object.defineProperty, Qn$1 = (n3, e2, t) => e2 in n3 ? Zn$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, _$3 = (n3, e2, t) => Qn$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let xi$1 = class xi extends M$3 {
  constructor(e2, t, s2) {
    super(e2, t, s2), this.core = e2, this.logger = t, this.store = s2, _$3(this, "name", jt$1), _$3(this, "abortController"), _$3(this, "isDevEnv"), _$3(this, "verifyUrlV3", qt$1), _$3(this, "storagePrefix", B$1), _$3(this, "version", Oe$1), _$3(this, "publicKey"), _$3(this, "fetchPromise"), _$3(this, "init", async () => {
      var i3;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && cjs$3.toMiliseconds((i3 = this.publicKey) == null ? void 0 : i3.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), _$3(this, "register", async (i3) => {
      if (!Ae$2() || this.isDevEnv) return;
      const r2 = window.location.origin, { id: o3, decryptedId: a2 } = i3, c2 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${r2}&id=${o3}&decryptedId=${a2}`;
      try {
        const h4 = getDocument_1(), u2 = this.startAbortTimer(cjs$3.ONE_SECOND * 5), g2 = await new Promise((m4, A2) => {
          const l2 = () => {
            window.removeEventListener("message", O4), h4.body.removeChild(y3), A2("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", l2);
          const y3 = h4.createElement("iframe");
          y3.src = c2, y3.style.display = "none", y3.addEventListener("error", l2, { signal: this.abortController.signal });
          const O4 = (w2) => {
            if (w2.data && typeof w2.data == "string") try {
              const v2 = JSON.parse(w2.data);
              if (v2.type === "verify_attestation") {
                if (sn$3(v2.attestation).payload.id !== o3) return;
                clearInterval(u2), h4.body.removeChild(y3), this.abortController.signal.removeEventListener("abort", l2), window.removeEventListener("message", O4), m4(v2.attestation === null ? "" : v2.attestation);
              }
            } catch (v2) {
              this.logger.warn(v2);
            }
          };
          h4.body.appendChild(y3), window.addEventListener("message", O4, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", g2), g2;
      } catch (h4) {
        this.logger.warn(h4);
      }
      return "";
    }), _$3(this, "resolve", async (i3) => {
      if (this.isDevEnv) return "";
      const { attestationId: r2, hash: o3, encryptedId: a2 } = i3;
      if (r2 === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (r2) {
        if (sn$3(r2).payload.id !== a2) return;
        const h4 = await this.isValidJwtAttestation(r2);
        if (h4) {
          if (!h4.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h4;
        }
      }
      if (!o3) return;
      const c2 = this.getVerifyUrl(i3 == null ? void 0 : i3.verifyUrl);
      return this.fetchAttestation(o3, c2);
    }), _$3(this, "fetchAttestation", async (i3, r2) => {
      this.logger.debug(`resolving attestation: ${i3} from url: ${r2}`);
      const o3 = this.startAbortTimer(cjs$3.ONE_SECOND * 5), a2 = await fetch(`${r2}/attestation/${i3}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o3), a2.status === 200 ? await a2.json() : void 0;
    }), _$3(this, "getVerifyUrl", (i3) => {
      let r2 = i3 || le$2;
      return Gt$1.includes(r2) || (this.logger.info(`verify url: ${r2}, not included in trusted list, assigning default: ${le$2}`), r2 = le$2), r2;
    }), _$3(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const i3 = this.startAbortTimer(cjs$3.FIVE_SECONDS), r2 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(i3), await r2.json();
      } catch (i3) {
        this.logger.warn(i3);
      }
    }), _$3(this, "persistPublicKey", async (i3) => {
      this.logger.debug("persisting public key to local storage", i3), await this.store.setItem(this.storeKey, i3), this.publicKey = i3;
    }), _$3(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), _$3(this, "isValidJwtAttestation", async (i3) => {
      const r2 = await this.getPublicKey();
      try {
        if (r2) return this.validateAttestation(i3, r2);
      } catch (a2) {
        this.logger.error(a2), this.logger.warn("error validating attestation");
      }
      const o3 = await this.fetchAndPersistPublicKey();
      try {
        if (o3) return this.validateAttestation(i3, o3);
      } catch (a2) {
        this.logger.error(a2), this.logger.warn("error validating attestation");
      }
    }), _$3(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), _$3(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (r2) => {
        const o3 = await this.fetchPublicKey();
        o3 && (await this.persistPublicKey(o3), r2(o3));
      });
      const i3 = await this.fetchPromise;
      return this.fetchPromise = void 0, i3;
    }), _$3(this, "validateAttestation", (i3, r2) => {
      const o3 = gi$2(i3, r2.publicKey), a2 = { hasExpired: cjs$3.toMiliseconds(o3.exp) < Date.now(), payload: o3 };
      if (a2.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a2.payload.origin, isScam: a2.payload.isScam, isVerified: a2.payload.isVerified };
    }), this.logger = E$3(t, this.name), this.abortController = new AbortController(), this.isDevEnv = Eo$1(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return y$3(this.logger);
  }
  startAbortTimer(e2) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), cjs$3.toMiliseconds(e2));
  }
};
var eo$1 = Object.defineProperty, to$1 = (n3, e2, t) => e2 in n3 ? eo$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, Oi$1 = (n3, e2, t) => to$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let Ai$1 = class Ai extends O$3 {
  constructor(e2, t) {
    super(e2, t), this.projectId = e2, this.logger = t, Oi$1(this, "context", Ht$1), Oi$1(this, "registerDeviceToken", async (s2) => {
      const { clientId: i3, token: r2, notificationType: o3, enableEncrypted: a2 = false } = s2, c2 = `${Yt$1}/${this.projectId}/clients`;
      await fetch(c2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: i3, type: o3, token: r2, always_raw: a2 }) });
    }), this.logger = E$3(t, this.context);
  }
};
var io$1 = Object.defineProperty, Ni$1 = Object.getOwnPropertySymbols, so$1 = Object.prototype.hasOwnProperty, ro$1 = Object.prototype.propertyIsEnumerable, qe$1 = (n3, e2, t) => e2 in n3 ? io$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, pe$1 = (n3, e2) => {
  for (var t in e2 || (e2 = {})) so$1.call(e2, t) && qe$1(n3, t, e2[t]);
  if (Ni$1) for (var t of Ni$1(e2)) ro$1.call(e2, t) && qe$1(n3, t, e2[t]);
  return n3;
}, E$2 = (n3, e2, t) => qe$1(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let $i$1 = class $i extends R$1 {
  constructor(e2, t, s2 = true) {
    super(e2, t, s2), this.core = e2, this.logger = t, E$2(this, "context", Xt$1), E$2(this, "storagePrefix", B$1), E$2(this, "storageVersion", Jt$1), E$2(this, "events", /* @__PURE__ */ new Map()), E$2(this, "shouldPersist", false), E$2(this, "init", async () => {
      if (!Eo$1()) try {
        const i3 = { eventId: wo$1(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: Yt$2(this.core.relayer.protocol, this.core.relayer.version, me$1) } } };
        await this.sendEvent([i3]);
      } catch (i3) {
        this.logger.warn(i3);
      }
    }), E$2(this, "createEvent", (i3) => {
      const { event: r2 = "ERROR", type: o3 = "", properties: { topic: a2, trace: c2 } } = i3, h4 = wo$1(), u2 = this.core.projectId || "", g2 = Date.now(), m4 = pe$1({ eventId: h4, timestamp: g2, props: { event: r2, type: o3, properties: { topic: a2, trace: c2 } }, bundleId: u2, domain: this.getAppDomain() }, this.setMethods(h4));
      return this.telemetryEnabled && (this.events.set(h4, m4), this.shouldPersist = true), m4;
    }), E$2(this, "getEvent", (i3) => {
      const { eventId: r2, topic: o3 } = i3;
      if (r2) return this.events.get(r2);
      const a2 = Array.from(this.events.values()).find((c2) => c2.props.properties.topic === o3);
      if (a2) return pe$1(pe$1({}, a2), this.setMethods(a2.eventId));
    }), E$2(this, "deleteEvent", (i3) => {
      const { eventId: r2 } = i3;
      this.events.delete(r2), this.shouldPersist = true;
    }), E$2(this, "setEventListeners", () => {
      this.core.heartbeat.on(r$1.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((i3) => {
          cjs$3.fromMiliseconds(Date.now()) - cjs$3.fromMiliseconds(i3.timestamp) > Wt$1 && (this.events.delete(i3.eventId), this.shouldPersist = true);
        });
      });
    }), E$2(this, "setMethods", (i3) => ({ addTrace: (r2) => this.addTrace(i3, r2), setError: (r2) => this.setError(i3, r2) })), E$2(this, "addTrace", (i3, r2) => {
      const o3 = this.events.get(i3);
      o3 && (o3.props.properties.trace.push(r2), this.events.set(i3, o3), this.shouldPersist = true);
    }), E$2(this, "setError", (i3, r2) => {
      const o3 = this.events.get(i3);
      o3 && (o3.props.type = r2, o3.timestamp = Date.now(), this.events.set(i3, o3), this.shouldPersist = true);
    }), E$2(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
    }), E$2(this, "restore", async () => {
      try {
        const i3 = await this.core.storage.getItem(this.storageKey) || [];
        if (!i3.length) return;
        i3.forEach((r2) => {
          this.events.set(r2.eventId, pe$1(pe$1({}, r2), this.setMethods(r2.eventId)));
        });
      } catch (i3) {
        this.logger.warn(i3);
      }
    }), E$2(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const i3 = [];
      for (const [r2, o3] of this.events) o3.props.type && i3.push(o3);
      if (i3.length !== 0) try {
        if ((await this.sendEvent(i3)).ok) for (const r2 of i3) this.events.delete(r2.eventId), this.shouldPersist = true;
      } catch (r2) {
        this.logger.warn(r2);
      }
    }), E$2(this, "sendEvent", async (i3) => {
      const r2 = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${Zt$1}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${me$1}${r2}`, { method: "POST", body: JSON.stringify(i3) });
    }), E$2(this, "getAppDomain", () => Yr$2().url), this.logger = E$3(t, this.context), this.telemetryEnabled = s2, s2 ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
};
var no$1 = Object.defineProperty, zi$1 = Object.getOwnPropertySymbols, oo$1 = Object.prototype.hasOwnProperty, ao$1 = Object.prototype.propertyIsEnumerable, Ge$2 = (n3, e2, t) => e2 in n3 ? no$1(n3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : n3[e2] = t, Li$1 = (n3, e2) => {
  for (var t in e2 || (e2 = {})) oo$1.call(e2, t) && Ge$2(n3, t, e2[t]);
  if (zi$1) for (var t of zi$1(e2)) ao$1.call(e2, t) && Ge$2(n3, t, e2[t]);
  return n3;
}, f$2 = (n3, e2, t) => Ge$2(n3, typeof e2 != "symbol" ? e2 + "" : e2, t);
let _e$2 = class _e extends h$2 {
  constructor(e2) {
    var t;
    super(e2), f$2(this, "protocol", xe$1), f$2(this, "version", Oe$1), f$2(this, "name", he$1), f$2(this, "relayUrl"), f$2(this, "projectId"), f$2(this, "customStoragePrefix"), f$2(this, "events", new eventsExports.EventEmitter()), f$2(this, "logger"), f$2(this, "heartbeat"), f$2(this, "relayer"), f$2(this, "crypto"), f$2(this, "storage"), f$2(this, "history"), f$2(this, "expirer"), f$2(this, "pairing"), f$2(this, "verify"), f$2(this, "echoClient"), f$2(this, "linkModeSupportedApps"), f$2(this, "eventClient"), f$2(this, "initialized", false), f$2(this, "logChunkController"), f$2(this, "on", (o3, a2) => this.events.on(o3, a2)), f$2(this, "once", (o3, a2) => this.events.once(o3, a2)), f$2(this, "off", (o3, a2) => this.events.off(o3, a2)), f$2(this, "removeListener", (o3, a2) => this.events.removeListener(o3, a2)), f$2(this, "dispatchEnvelope", ({ topic: o3, message: a2, sessionExists: c2 }) => {
      if (!o3 || !a2) return;
      const h4 = { topic: o3, message: a2, publishedAt: Date.now(), transportType: Q$1.link_mode };
      this.relayer.onLinkMessageEvent(h4, { sessionExists: c2 });
    }), this.projectId = e2 == null ? void 0 : e2.projectId, this.relayUrl = (e2 == null ? void 0 : e2.relayUrl) || $e$2, this.customStoragePrefix = e2 != null && e2.customStoragePrefix ? `:${e2.customStoragePrefix}` : "";
    const s2 = k$2({ level: typeof (e2 == null ? void 0 : e2.logger) == "string" && e2.logger ? e2.logger : mt$1.logger, name: he$1 }), { logger: i3, chunkLoggerController: r2 } = A$1({ opts: s2, maxSizeInBytes: e2 == null ? void 0 : e2.maxLogBlobSizeInBytes, loggerOverride: e2 == null ? void 0 : e2.logger });
    this.logChunkController = r2, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var o3, a2;
      (o3 = this.logChunkController) != null && o3.downloadLogsBlobInBrowser && ((a2 = this.logChunkController) == null || a2.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E$3(i3, this.name), this.heartbeat = new i$2(), this.crypto = new bi$1(this, this.logger, e2 == null ? void 0 : e2.keychain), this.history = new Si$1(this, this.logger), this.expirer = new Ri$1(this, this.logger), this.storage = e2 != null && e2.storage ? e2.storage : new h$3(Li$1(Li$1({}, vt$1), e2 == null ? void 0 : e2.storageOptions)), this.relayer = new wi$1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Pi$1(this, this.logger), this.verify = new xi$1(this, this.logger, this.storage), this.echoClient = new Ai$1(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new $i$1(this, this.logger, e2 == null ? void 0 : e2.telemetryEnabled);
  }
  static async init(e2) {
    const t = new _e(e2);
    await t.initialize();
    const s2 = await t.crypto.getClientId();
    return await t.storage.setItem(Nt$1, s2), t;
  }
  get context() {
    return y$3(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e2;
    return (e2 = this.logChunkController) == null ? void 0 : e2.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e2) {
    this.linkModeSupportedApps.includes(e2) || (this.linkModeSupportedApps.push(e2), await this.storage.setItem(ze$1, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(ze$1) || [], this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e2) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e2), this.logger.error(e2.message), e2;
    }
  }
};
const co$1 = _e$2;
const De$1 = "wc", Le$1 = 2, Me$1 = "client", me = `${De$1}@${Le$1}:${Me$1}:`, _e$1 = { name: Me$1, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.org" }, ke$1 = "WALLETCONNECT_DEEPLINK_CHOICE", pt$1 = "proposal", $e$1 = "Proposal expired", ht$1 = "session", Y$1 = cjs$3.SEVEN_DAYS, dt$1 = "engine", N$2 = { wc_sessionPropose: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: cjs$3.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: cjs$3.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: cjs$3.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: cjs$3.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: cjs$3.FIVE_MINUTES, prompt: false, tag: 1119 } } }, Ee$1 = { min: cjs$3.FIVE_MINUTES, max: cjs$3.SEVEN_DAYS }, $$2 = { idle: "IDLE", active: "ACTIVE" }, Ke$1 = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" } }, ut$1 = "request", gt = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"], yt = "wc", wt = "auth", mt = "authKeys", _t$1 = "pairingTopics", Et$1 = "requests", ce$1 = `${yt}@${1.5}:${wt}:`, le$1 = `${ce$1}:PUB_KEY`;
var Rs$1 = Object.defineProperty, fs$1 = Object.defineProperties, Is$1 = Object.getOwnPropertyDescriptors, St$1 = Object.getOwnPropertySymbols, vs$1 = Object.prototype.hasOwnProperty, qs$1 = Object.prototype.propertyIsEnumerable, Ue$1 = (S3, n3, e2) => n3 in S3 ? Rs$1(S3, n3, { enumerable: true, configurable: true, writable: true, value: e2 }) : S3[n3] = e2, v$3 = (S3, n3) => {
  for (var e2 in n3 || (n3 = {})) vs$1.call(n3, e2) && Ue$1(S3, e2, n3[e2]);
  if (St$1) for (var e2 of St$1(n3)) qs$1.call(n3, e2) && Ue$1(S3, e2, n3[e2]);
  return S3;
}, x$2 = (S3, n3) => fs$1(S3, Is$1(n3)), c$1 = (S3, n3, e2) => Ue$1(S3, typeof n3 != "symbol" ? n3 + "" : n3, e2);
let Ts$1 = class Ts extends V$1 {
  constructor(n3) {
    super(n3), c$1(this, "name", dt$1), c$1(this, "events", new wt$4()), c$1(this, "initialized", false), c$1(this, "requestQueue", { state: $$2.idle, queue: [] }), c$1(this, "sessionRequestQueue", { state: $$2.idle, queue: [] }), c$1(this, "requestQueueDelay", cjs$3.ONE_SECOND), c$1(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), c$1(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), c$1(this, "recentlyDeletedLimit", 200), c$1(this, "relayMessageCache", []), c$1(this, "pendingSessions", /* @__PURE__ */ new Map()), c$1(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(N$2) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, cjs$3.toMiliseconds(this.requestQueueDelay)));
    }), c$1(this, "connect", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const t = x$2(v$3({}, e2), { requiredNamespaces: e2.requiredNamespaces || {}, optionalNamespaces: e2.optionalNamespaces || {} });
      await this.isValidConnect(t);
      const { pairingTopic: s2, requiredNamespaces: i3, optionalNamespaces: r2, sessionProperties: o3, relays: a2 } = t;
      let l2 = s2, u2, g2 = false;
      try {
        if (l2) {
          const R3 = this.client.core.pairing.pairings.get(l2);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), g2 = R3.active;
        }
      } catch (R3) {
        throw this.client.logger.error(`connect() -> pairing.get(${l2}) failed`), R3;
      }
      if (!l2 || !g2) {
        const { topic: R3, uri: D2 } = await this.client.core.pairing.create();
        l2 = R3, u2 = D2;
      }
      if (!l2) {
        const { message: R3 } = te$1("NO_MATCHING_KEY", `connect() pairing topic: ${l2}`);
        throw new Error(R3);
      }
      const h4 = await this.client.core.crypto.generateKeyPair(), d4 = N$2.wc_sessionPropose.req.ttl || cjs$3.FIVE_MINUTES, y3 = ho$1(d4), m4 = x$2(v$3({ requiredNamespaces: i3, optionalNamespaces: r2, relays: a2 ?? [{ protocol: Pt }], proposer: { publicKey: h4, metadata: this.client.metadata }, expiryTimestamp: y3, pairingTopic: l2 }, o3 && { sessionProperties: o3 }), { id: payloadId() }), I3 = go$1("session_connect", m4.id), { reject: p2, resolve: E2, done: V3 } = co$2(d4, $e$1), q2 = ({ id: R3 }) => {
        R3 === m4.id && (this.client.events.off("proposal_expire", q2), this.pendingSessions.delete(m4.id), this.events.emit(I3, { error: { message: $e$1, code: 0 } }));
      };
      return this.client.events.on("proposal_expire", q2), this.events.once(I3, ({ error: R3, session: D2 }) => {
        this.client.events.off("proposal_expire", q2), R3 ? p2(R3) : D2 && E2(D2);
      }), await this.sendRequest({ topic: l2, method: "wc_sessionPropose", params: m4, throwOnFailedPublish: true, clientRpcId: m4.id }), await this.setProposal(m4.id, m4), { uri: u2, approval: V3 };
    }), c$1(this, "pair", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(e2);
      } catch (t) {
        throw this.client.logger.error("pair() failed"), t;
      }
    }), c$1(this, "approve", async (e2) => {
      var t, s2, i3;
      const r2 = this.client.core.eventClient.createEvent({ properties: { topic: (t = e2 == null ? void 0 : e2.id) == null ? void 0 : t.toString(), trace: [qs$2.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (P3) {
        throw r2.setError(Gs$1.no_internet_connection), P3;
      }
      try {
        await this.isValidProposalId(e2 == null ? void 0 : e2.id);
      } catch (P3) {
        throw this.client.logger.error(`approve() -> proposal.get(${e2 == null ? void 0 : e2.id}) failed`), r2.setError(Gs$1.proposal_not_found), P3;
      }
      try {
        await this.isValidApprove(e2);
      } catch (P3) {
        throw this.client.logger.error("approve() -> isValidApprove() failed"), r2.setError(Gs$1.session_approve_namespace_validation_failure), P3;
      }
      const { id: o3, relayProtocol: a2, namespaces: l2, sessionProperties: u2, sessionConfig: g2 } = e2, h4 = this.client.proposal.get(o3);
      this.client.core.eventClient.deleteEvent({ eventId: r2.eventId });
      const { pairingTopic: d4, proposer: y3, requiredNamespaces: m4, optionalNamespaces: I3 } = h4;
      let p2 = (s2 = this.client.core.eventClient) == null ? void 0 : s2.getEvent({ topic: d4 });
      p2 || (p2 = (i3 = this.client.core.eventClient) == null ? void 0 : i3.createEvent({ type: qs$2.session_approve_started, properties: { topic: d4, trace: [qs$2.session_approve_started, qs$2.session_namespaces_validation_success] } }));
      const E2 = await this.client.core.crypto.generateKeyPair(), V3 = y3.publicKey, q2 = await this.client.core.crypto.generateSharedKey(E2, V3), R3 = v$3(v$3({ relay: { protocol: a2 ?? "irn" }, namespaces: l2, controller: { publicKey: E2, metadata: this.client.metadata }, expiry: ho$1(Y$1) }, u2 && { sessionProperties: u2 }), g2 && { sessionConfig: g2 }), D2 = Q$1.relay;
      p2.addTrace(qs$2.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(q2, { transportType: D2 });
      } catch (P3) {
        throw p2.setError(Gs$1.subscribe_session_topic_failure), P3;
      }
      p2.addTrace(qs$2.subscribe_session_topic_success);
      const ee2 = x$2(v$3({}, R3), { topic: q2, requiredNamespaces: m4, optionalNamespaces: I3, pairingTopic: d4, acknowledged: false, self: R3.controller, peer: { publicKey: y3.publicKey, metadata: y3.metadata }, controller: E2, transportType: Q$1.relay });
      await this.client.session.set(q2, ee2), p2.addTrace(qs$2.store_session);
      try {
        p2.addTrace(qs$2.publishing_session_settle), await this.sendRequest({ topic: q2, method: "wc_sessionSettle", params: R3, throwOnFailedPublish: true }).catch((P3) => {
          throw p2 == null ? void 0 : p2.setError(Gs$1.session_settle_publish_failure), P3;
        }), p2.addTrace(qs$2.session_settle_publish_success), p2.addTrace(qs$2.publishing_session_approve), await this.sendResult({ id: o3, topic: d4, result: { relay: { protocol: a2 ?? "irn" }, responderPublicKey: E2 }, throwOnFailedPublish: true }).catch((P3) => {
          throw p2 == null ? void 0 : p2.setError(Gs$1.session_approve_publish_failure), P3;
        }), p2.addTrace(qs$2.session_approve_publish_success);
      } catch (P3) {
        throw this.client.logger.error(P3), this.client.session.delete(q2, de$2("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(q2), P3;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: p2.eventId }), await this.client.core.pairing.updateMetadata({ topic: d4, metadata: y3.metadata }), await this.client.proposal.delete(o3, de$2("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: d4 }), await this.setExpiry(q2, ho$1(Y$1)), { topic: q2, acknowledged: () => Promise.resolve(this.client.session.get(q2)) };
    }), c$1(this, "reject", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(e2);
      } catch (r2) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r2;
      }
      const { id: t, reason: s2 } = e2;
      let i3;
      try {
        i3 = this.client.proposal.get(t).pairingTopic;
      } catch (r2) {
        throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`), r2;
      }
      i3 && (await this.sendError({ id: t, topic: i3, error: s2, rpcOpts: N$2.wc_sessionPropose.reject }), await this.client.proposal.delete(t, de$2("USER_DISCONNECTED")));
    }), c$1(this, "update", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(e2);
      } catch (g2) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), g2;
      }
      const { topic: t, namespaces: s2 } = e2, { done: i3, resolve: r2, reject: o3 } = co$2(), a2 = payloadId(), l2 = getBigIntRpcId().toString(), u2 = this.client.session.get(t).namespaces;
      return this.events.once(go$1("session_update", a2), ({ error: g2 }) => {
        g2 ? o3(g2) : r2();
      }), await this.client.session.update(t, { namespaces: s2 }), await this.sendRequest({ topic: t, method: "wc_sessionUpdate", params: { namespaces: s2 }, throwOnFailedPublish: true, clientRpcId: a2, relayRpcId: l2 }).catch((g2) => {
        this.client.logger.error(g2), this.client.session.update(t, { namespaces: u2 }), o3(g2);
      }), { acknowledged: i3 };
    }), c$1(this, "extend", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(e2);
      } catch (a2) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a2;
      }
      const { topic: t } = e2, s2 = payloadId(), { done: i3, resolve: r2, reject: o3 } = co$2();
      return this.events.once(go$1("session_extend", s2), ({ error: a2 }) => {
        a2 ? o3(a2) : r2();
      }), await this.setExpiry(t, ho$1(Y$1)), this.sendRequest({ topic: t, method: "wc_sessionExtend", params: {}, clientRpcId: s2, throwOnFailedPublish: true }).catch((a2) => {
        o3(a2);
      }), { acknowledged: i3 };
    }), c$1(this, "request", async (e2) => {
      this.isInitialized();
      try {
        await this.isValidRequest(e2);
      } catch (p2) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), p2;
      }
      const { chainId: t, request: s2, topic: i3, expiry: r2 = N$2.wc_sessionRequest.req.ttl } = e2, o3 = this.client.session.get(i3);
      (o3 == null ? void 0 : o3.transportType) === Q$1.relay && await this.confirmOnlineStateOrThrow();
      const a2 = payloadId(), l2 = getBigIntRpcId().toString(), { done: u2, resolve: g2, reject: h4 } = co$2(r2, "Request expired. Please try again.");
      this.events.once(go$1("session_request", a2), ({ error: p2, result: E2 }) => {
        p2 ? h4(p2) : g2(E2);
      });
      const d4 = "wc_sessionRequest", y3 = this.getAppLinkIfEnabled(o3.peer.metadata, o3.transportType);
      if (y3) return await this.sendRequest({ clientRpcId: a2, relayRpcId: l2, topic: i3, method: d4, params: { request: x$2(v$3({}, s2), { expiryTimestamp: ho$1(r2) }), chainId: t }, expiry: r2, throwOnFailedPublish: true, appLink: y3 }).catch((p2) => h4(p2)), this.client.events.emit("session_request_sent", { topic: i3, request: s2, chainId: t, id: a2 }), await u2();
      const m4 = { request: x$2(v$3({}, s2), { expiryTimestamp: ho$1(r2) }), chainId: t }, I3 = this.shouldSetTVF(d4, m4);
      return await Promise.all([new Promise(async (p2) => {
        await this.sendRequest(v$3({ clientRpcId: a2, relayRpcId: l2, topic: i3, method: d4, params: m4, expiry: r2, throwOnFailedPublish: true }, I3 && { tvf: this.getTVFParams(a2, m4) })).catch((E2) => h4(E2)), this.client.events.emit("session_request_sent", { topic: i3, request: s2, chainId: t, id: a2 }), p2();
      }), new Promise(async (p2) => {
        var E2;
        if (!((E2 = o3.sessionConfig) != null && E2.disableDeepLink)) {
          const V3 = await mo$1(this.client.core.storage, ke$1);
          await yo$1({ id: a2, topic: i3, wcDeepLink: V3 });
        }
        p2();
      }), u2()]).then((p2) => p2[2]);
    }), c$1(this, "respond", async (e2) => {
      this.isInitialized(), await this.isValidRespond(e2);
      const { topic: t, response: s2 } = e2, { id: i3 } = s2, r2 = this.client.session.get(t);
      r2.transportType === Q$1.relay && await this.confirmOnlineStateOrThrow();
      const o3 = this.getAppLinkIfEnabled(r2.peer.metadata, r2.transportType);
      isJsonRpcResult(s2) ? await this.sendResult({ id: i3, topic: t, result: s2.result, throwOnFailedPublish: true, appLink: o3 }) : isJsonRpcError(s2) && await this.sendError({ id: i3, topic: t, error: s2.error, appLink: o3 }), this.cleanupAfterResponse(e2);
    }), c$1(this, "ping", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(e2);
      } catch (s2) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s2;
      }
      const { topic: t } = e2;
      if (this.client.session.keys.includes(t)) {
        const s2 = payloadId(), i3 = getBigIntRpcId().toString(), { done: r2, resolve: o3, reject: a2 } = co$2();
        this.events.once(go$1("session_ping", s2), ({ error: l2 }) => {
          l2 ? a2(l2) : o3();
        }), await Promise.all([this.sendRequest({ topic: t, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s2, relayRpcId: i3 }), r2()]);
      } else this.client.core.pairing.pairings.keys.includes(t) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: t }));
    }), c$1(this, "emit", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e2);
      const { topic: t, event: s2, chainId: i3 } = e2, r2 = getBigIntRpcId().toString(), o3 = payloadId();
      await this.sendRequest({ topic: t, method: "wc_sessionEvent", params: { event: s2, chainId: i3 }, throwOnFailedPublish: true, relayRpcId: r2, clientRpcId: o3 });
    }), c$1(this, "disconnect", async (e2) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e2);
      const { topic: t } = e2;
      if (this.client.session.keys.includes(t)) await this.sendRequest({ topic: t, method: "wc_sessionDelete", params: de$2("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: t, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({ topic: t });
      else {
        const { message: s2 } = te$1("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
        throw new Error(s2);
      }
    }), c$1(this, "find", (e2) => (this.isInitialized(), this.client.session.getAll().filter((t) => $i$2(t, e2)))), c$1(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), c$1(this, "authenticate", async (e2, t) => {
      var s2;
      this.isInitialized(), this.isValidAuthenticate(e2);
      const i3 = t && this.client.core.linkModeSupportedApps.includes(t) && ((s2 = this.client.metadata.redirect) == null ? void 0 : s2.linkMode), r2 = i3 ? Q$1.link_mode : Q$1.relay;
      r2 === Q$1.relay && await this.confirmOnlineStateOrThrow();
      const { chains: o3, statement: a2 = "", uri: l2, domain: u2, nonce: g2, type: h4, exp: d4, nbf: y3, methods: m4 = [], expiry: I3 } = e2, p2 = [...e2.resources || []], { topic: E2, uri: V3 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: r2 });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: E2, uri: V3 } });
      const q2 = await this.client.core.crypto.generateKeyPair(), R3 = oi$2(q2);
      if (await Promise.all([this.client.auth.authKeys.set(le$1, { responseTopic: R3, publicKey: q2 }), this.client.auth.pairingTopics.set(R3, { topic: R3, pairingTopic: E2 })]), await this.client.core.relayer.subscribe(R3, { transportType: r2 }), this.client.logger.info(`sending request to new pairing topic: ${E2}`), m4.length > 0) {
        const { namespace: b2 } = Ye$1(o3[0]);
        let L3 = ts$1(b2, "request", m4);
        Me$3(p2) && (L3 = ns$1(L3, p2.pop())), p2.push(L3);
      }
      const D2 = I3 && I3 > N$2.wc_sessionAuthenticate.req.ttl ? I3 : N$2.wc_sessionAuthenticate.req.ttl, ee2 = { authPayload: { type: h4 ?? "caip122", chains: o3, statement: a2, aud: l2, domain: u2, version: "1", nonce: g2, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: d4, nbf: y3, resources: p2 }, requester: { publicKey: q2, metadata: this.client.metadata }, expiryTimestamp: ho$1(D2) }, P3 = { eip155: { chains: o3, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...m4])], events: ["chainChanged", "accountsChanged"] } }, X2 = { requiredNamespaces: {}, optionalNamespaces: P3, relays: [{ protocol: "irn" }], pairingTopic: E2, proposer: { publicKey: q2, metadata: this.client.metadata }, expiryTimestamp: ho$1(N$2.wc_sessionPropose.req.ttl), id: payloadId() }, { done: ft2, resolve: Fe2, reject: Re2 } = co$2(D2, "Request expired"), te2 = payloadId(), pe2 = go$1("session_connect", X2.id), fe2 = go$1("session_request", te2), he2 = async ({ error: b2, session: L3 }) => {
        this.events.off(fe2, Ie2), b2 ? Re2(b2) : L3 && Fe2({ session: L3 });
      }, Ie2 = async (b2) => {
        var L3, je2, Qe2;
        if (await this.deletePendingAuthRequest(te2, { message: "fulfilled", code: 0 }), b2.error) {
          const ie2 = de$2("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return b2.error.code === ie2.code ? void 0 : (this.events.off(pe2, he2), Re2(b2.error.message));
        }
        await this.deleteProposal(X2.id), this.events.off(pe2, he2);
        const { cacaos: He2, responder: Q2 } = b2.result, qe2 = [], ze2 = [];
        for (const ie2 of He2) {
          await Yo$1({ cacao: ie2, projectId: this.client.core.projectId }) || (this.client.logger.error(ie2, "Signature verification failed"), Re2(de$2("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: Te2 } = ie2, Ne2 = Me$3(Te2.resources), Ye2 = [On$2(Te2.iss)], It2 = ut$2(Te2.iss);
          if (Ne2) {
            const Pe2 = rs$1(Ne2), vt2 = os$1(Ne2);
            qe2.push(...Pe2), Ye2.push(...vt2);
          }
          for (const Pe2 of Ye2) ze2.push(`${Pe2}:${It2}`);
        }
        const se2 = await this.client.core.crypto.generateSharedKey(q2, Q2.publicKey);
        let de2;
        qe2.length > 0 && (de2 = { topic: se2, acknowledged: true, self: { publicKey: q2, metadata: this.client.metadata }, peer: Q2, controller: Q2.publicKey, expiry: ho$1(Y$1), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: E2, namespaces: Ti$2([...new Set(qe2)], [...new Set(ze2)]), transportType: r2 }, await this.client.core.relayer.subscribe(se2, { transportType: r2 }), await this.client.session.set(se2, de2), E2 && await this.client.core.pairing.updateMetadata({ topic: E2, metadata: Q2.metadata }), de2 = this.client.session.get(se2)), (L3 = this.client.metadata.redirect) != null && L3.linkMode && (je2 = Q2.metadata.redirect) != null && je2.linkMode && (Qe2 = Q2.metadata.redirect) != null && Qe2.universal && t && (this.client.core.addLinkModeSupportedApp(Q2.metadata.redirect.universal), this.client.session.update(se2, { transportType: Q$1.link_mode })), Fe2({ auths: He2, session: de2 });
      };
      this.events.once(pe2, he2), this.events.once(fe2, Ie2);
      let ve2;
      try {
        if (i3) {
          const b2 = formatJsonRpcRequest("wc_sessionAuthenticate", ee2, te2);
          this.client.core.history.set(E2, b2);
          const L3 = await this.client.core.crypto.encode("", b2, { type: _e$3, encoding: Qs$2 });
          ve2 = Ei$2(t, E2, L3);
        } else await Promise.all([this.sendRequest({ topic: E2, method: "wc_sessionAuthenticate", params: ee2, expiry: e2.expiry, throwOnFailedPublish: true, clientRpcId: te2 }), this.sendRequest({ topic: E2, method: "wc_sessionPropose", params: X2, expiry: N$2.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: X2.id })]);
      } catch (b2) {
        throw this.events.off(pe2, he2), this.events.off(fe2, Ie2), b2;
      }
      return await this.setProposal(X2.id, X2), await this.setAuthRequest(te2, { request: x$2(v$3({}, ee2), { verifyContext: {} }), pairingTopic: E2, transportType: r2 }), { uri: ve2 ?? V3, response: ft2 };
    }), c$1(this, "approveSessionAuthenticate", async (e2) => {
      const { id: t, auths: s2 } = e2, i3 = this.client.core.eventClient.createEvent({ properties: { topic: t.toString(), trace: [Hs$1.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (I3) {
        throw i3.setError(Ys$1.no_internet_connection), I3;
      }
      const r2 = this.getPendingAuthRequest(t);
      if (!r2) throw i3.setError(Ys$1.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${t}`);
      const o3 = r2.transportType || Q$1.relay;
      o3 === Q$1.relay && await this.confirmOnlineStateOrThrow();
      const a2 = r2.requester.publicKey, l2 = await this.client.core.crypto.generateKeyPair(), u2 = oi$2(a2), g2 = { type: Ie$1, receiverPublicKey: a2, senderPublicKey: l2 }, h4 = [], d4 = [];
      for (const I3 of s2) {
        if (!await Yo$1({ cacao: I3, projectId: this.client.core.projectId })) {
          i3.setError(Ys$1.invalid_cacao);
          const R3 = de$2("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: t, topic: u2, error: R3, encodeOpts: g2 }), new Error(R3.message);
        }
        i3.addTrace(Hs$1.cacaos_verified);
        const { p: p2 } = I3, E2 = Me$3(p2.resources), V3 = [On$2(p2.iss)], q2 = ut$2(p2.iss);
        if (E2) {
          const R3 = rs$1(E2), D2 = os$1(E2);
          h4.push(...R3), V3.push(...D2);
        }
        for (const R3 of V3) d4.push(`${R3}:${q2}`);
      }
      const y3 = await this.client.core.crypto.generateSharedKey(l2, a2);
      i3.addTrace(Hs$1.create_authenticated_session_topic);
      let m4;
      if ((h4 == null ? void 0 : h4.length) > 0) {
        m4 = { topic: y3, acknowledged: true, self: { publicKey: l2, metadata: this.client.metadata }, peer: { publicKey: a2, metadata: r2.requester.metadata }, controller: a2, expiry: ho$1(Y$1), authentication: s2, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: r2.pairingTopic, namespaces: Ti$2([...new Set(h4)], [...new Set(d4)]), transportType: o3 }, i3.addTrace(Hs$1.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(y3, { transportType: o3 });
        } catch (I3) {
          throw i3.setError(Ys$1.subscribe_authenticated_session_topic_failure), I3;
        }
        i3.addTrace(Hs$1.subscribe_authenticated_session_topic_success), await this.client.session.set(y3, m4), i3.addTrace(Hs$1.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: r2.pairingTopic, metadata: r2.requester.metadata });
      }
      i3.addTrace(Hs$1.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: u2, id: t, result: { cacaos: s2, responder: { publicKey: l2, metadata: this.client.metadata } }, encodeOpts: g2, throwOnFailedPublish: true, appLink: this.getAppLinkIfEnabled(r2.requester.metadata, o3) });
      } catch (I3) {
        throw i3.setError(Ys$1.authenticated_session_approve_publish_failure), I3;
      }
      return await this.client.auth.requests.delete(t, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: r2.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i3.eventId }), { session: m4 };
    }), c$1(this, "rejectSessionAuthenticate", async (e2) => {
      this.isInitialized();
      const { id: t, reason: s2 } = e2, i3 = this.getPendingAuthRequest(t);
      if (!i3) throw new Error(`Could not find pending auth request with id ${t}`);
      i3.transportType === Q$1.relay && await this.confirmOnlineStateOrThrow();
      const r2 = i3.requester.publicKey, o3 = await this.client.core.crypto.generateKeyPair(), a2 = oi$2(r2), l2 = { type: Ie$1, receiverPublicKey: r2, senderPublicKey: o3 };
      await this.sendError({ id: t, topic: a2, error: s2, encodeOpts: l2, rpcOpts: N$2.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(i3.requester.metadata, i3.transportType) }), await this.client.auth.requests.delete(t, { message: "rejected", code: 0 }), await this.client.proposal.delete(t, de$2("USER_DISCONNECTED"));
    }), c$1(this, "formatAuthMessage", (e2) => {
      this.isInitialized();
      const { request: t, iss: s2 } = e2;
      return In$2(t, s2);
    }), c$1(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const e2 = this.relayMessageCache.shift();
          e2 && await this.onRelayMessage(e2);
        } catch (e2) {
          this.client.logger.error(e2);
        }
      }, 50);
    }), c$1(this, "cleanupDuplicatePairings", async (e2) => {
      if (e2.pairingTopic) try {
        const t = this.client.core.pairing.pairings.get(e2.pairingTopic), s2 = this.client.core.pairing.pairings.getAll().filter((i3) => {
          var r2, o3;
          return ((r2 = i3.peerMetadata) == null ? void 0 : r2.url) && ((o3 = i3.peerMetadata) == null ? void 0 : o3.url) === e2.peer.metadata.url && i3.topic && i3.topic !== t.topic;
        });
        if (s2.length === 0) return;
        this.client.logger.info(`Cleaning up ${s2.length} duplicate pairing(s)`), await Promise.all(s2.map((i3) => this.client.core.pairing.disconnect({ topic: i3.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (t) {
        this.client.logger.error(t);
      }
    }), c$1(this, "deleteSession", async (e2) => {
      var t;
      const { topic: s2, expirerHasDeleted: i3 = false, emitEvent: r2 = true, id: o3 = 0 } = e2, { self: a2 } = this.client.session.get(s2);
      await this.client.core.relayer.unsubscribe(s2), await this.client.session.delete(s2, de$2("USER_DISCONNECTED")), this.addToRecentlyDeleted(s2, "session"), this.client.core.crypto.keychain.has(a2.publicKey) && await this.client.core.crypto.deleteKeyPair(a2.publicKey), this.client.core.crypto.keychain.has(s2) && await this.client.core.crypto.deleteSymKey(s2), i3 || this.client.core.expirer.del(s2), this.client.core.storage.removeItem(ke$1).catch((l2) => this.client.logger.warn(l2)), this.getPendingSessionRequests().forEach((l2) => {
        l2.topic === s2 && this.deletePendingSessionRequest(l2.id, de$2("USER_DISCONNECTED"));
      }), s2 === ((t = this.sessionRequestQueue.queue[0]) == null ? void 0 : t.topic) && (this.sessionRequestQueue.state = $$2.idle), r2 && this.client.events.emit("session_delete", { id: o3, topic: s2 });
    }), c$1(this, "deleteProposal", async (e2, t) => {
      if (t) try {
        const s2 = this.client.proposal.get(e2), i3 = this.client.core.eventClient.getEvent({ topic: s2.pairingTopic });
        i3 == null ? void 0 : i3.setError(Gs$1.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(e2, de$2("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e2)]), this.addToRecentlyDeleted(e2, "proposal");
    }), c$1(this, "deletePendingSessionRequest", async (e2, t, s2 = false) => {
      await Promise.all([this.client.pendingRequest.delete(e2, t), s2 ? Promise.resolve() : this.client.core.expirer.del(e2)]), this.addToRecentlyDeleted(e2, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i3) => i3.id !== e2), s2 && (this.sessionRequestQueue.state = $$2.idle, this.client.events.emit("session_request_expire", { id: e2 }));
    }), c$1(this, "deletePendingAuthRequest", async (e2, t, s2 = false) => {
      await Promise.all([this.client.auth.requests.delete(e2, t), s2 ? Promise.resolve() : this.client.core.expirer.del(e2)]);
    }), c$1(this, "setExpiry", async (e2, t) => {
      this.client.session.keys.includes(e2) && (this.client.core.expirer.set(e2, t), await this.client.session.update(e2, { expiry: t }));
    }), c$1(this, "setProposal", async (e2, t) => {
      this.client.core.expirer.set(e2, ho$1(N$2.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e2, t);
    }), c$1(this, "setAuthRequest", async (e2, t) => {
      const { request: s2, pairingTopic: i3, transportType: r2 = Q$1.relay } = t;
      this.client.core.expirer.set(e2, s2.expiryTimestamp), await this.client.auth.requests.set(e2, { authPayload: s2.authPayload, requester: s2.requester, expiryTimestamp: s2.expiryTimestamp, id: e2, pairingTopic: i3, verifyContext: s2.verifyContext, transportType: r2 });
    }), c$1(this, "setPendingSessionRequest", async (e2) => {
      const { id: t, topic: s2, params: i3, verifyContext: r2 } = e2, o3 = i3.request.expiryTimestamp || ho$1(N$2.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(t, o3), await this.client.pendingRequest.set(t, { id: t, topic: s2, params: i3, verifyContext: r2 });
    }), c$1(this, "sendRequest", async (e2) => {
      const { topic: t, method: s2, params: i3, expiry: r2, relayRpcId: o3, clientRpcId: a2, throwOnFailedPublish: l2, appLink: u2, tvf: g2 } = e2, h4 = formatJsonRpcRequest(s2, i3, a2);
      let d4;
      const y3 = !!u2;
      try {
        const p2 = y3 ? Qs$2 : At$2;
        d4 = await this.client.core.crypto.encode(t, h4, { encoding: p2 });
      } catch (p2) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`), p2;
      }
      let m4;
      if (gt.includes(s2)) {
        const p2 = si$2(JSON.stringify(h4)), E2 = si$2(d4);
        m4 = await this.client.core.verify.register({ id: E2, decryptedId: p2 });
      }
      const I3 = N$2[s2].req;
      if (I3.attestation = m4, r2 && (I3.ttl = r2), o3 && (I3.id = o3), this.client.core.history.set(t, h4), y3) {
        const p2 = Ei$2(u2, t, d4);
        await global.Linking.openURL(p2, this.client.name);
      } else {
        const p2 = N$2[s2].req;
        r2 && (p2.ttl = r2), o3 && (p2.id = o3), p2.tvf = x$2(v$3({}, g2), { correlationId: h4.id }), l2 ? (p2.internal = x$2(v$3({}, p2.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t, d4, p2)) : this.client.core.relayer.publish(t, d4, p2).catch((E2) => this.client.logger.error(E2));
      }
      return h4.id;
    }), c$1(this, "sendResult", async (e2) => {
      const { id: t, topic: s2, result: i3, throwOnFailedPublish: r2, encodeOpts: o3, appLink: a2 } = e2, l2 = formatJsonRpcResult(t, i3);
      let u2;
      const g2 = a2 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const y3 = g2 ? Qs$2 : At$2;
        u2 = await this.client.core.crypto.encode(s2, l2, x$2(v$3({}, o3 || {}), { encoding: y3 }));
      } catch (y3) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s2} failed`), y3;
      }
      let h4, d4;
      try {
        h4 = await this.client.core.history.get(s2, t);
        const y3 = h4.request;
        try {
          this.shouldSetTVF(y3.method, y3.params) && (d4 = this.getTVFParams(t, y3.params, i3));
        } catch (m4) {
          this.client.logger.warn("sendResult() -> getTVFParams() failed", m4);
        }
      } catch (y3) {
        throw this.client.logger.error(`sendResult() -> history.get(${s2}, ${t}) failed`), y3;
      }
      if (g2) {
        const y3 = Ei$2(a2, s2, u2);
        await global.Linking.openURL(y3, this.client.name);
      } else {
        const y3 = h4.request.method, m4 = N$2[y3].res;
        m4.tvf = x$2(v$3({}, d4), { correlationId: t }), r2 ? (m4.internal = x$2(v$3({}, m4.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s2, u2, m4)) : this.client.core.relayer.publish(s2, u2, m4).catch((I3) => this.client.logger.error(I3));
      }
      await this.client.core.history.resolve(l2);
    }), c$1(this, "sendError", async (e2) => {
      const { id: t, topic: s2, error: i3, encodeOpts: r2, rpcOpts: o3, appLink: a2 } = e2, l2 = formatJsonRpcError(t, i3);
      let u2;
      const g2 = a2 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const d4 = g2 ? Qs$2 : At$2;
        u2 = await this.client.core.crypto.encode(s2, l2, x$2(v$3({}, r2 || {}), { encoding: d4 }));
      } catch (d4) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s2} failed`), d4;
      }
      let h4;
      try {
        h4 = await this.client.core.history.get(s2, t);
      } catch (d4) {
        throw this.client.logger.error(`sendError() -> history.get(${s2}, ${t}) failed`), d4;
      }
      if (g2) {
        const d4 = Ei$2(a2, s2, u2);
        await global.Linking.openURL(d4, this.client.name);
      } else {
        const d4 = h4.request.method, y3 = o3 || N$2[d4].res;
        this.client.core.relayer.publish(s2, u2, y3);
      }
      await this.client.core.history.resolve(l2);
    }), c$1(this, "cleanup", async () => {
      const e2 = [], t = [];
      this.client.session.getAll().forEach((s2) => {
        let i3 = false;
        po$1(s2.expiry) && (i3 = true), this.client.core.crypto.keychain.has(s2.topic) || (i3 = true), i3 && e2.push(s2.topic);
      }), this.client.proposal.getAll().forEach((s2) => {
        po$1(s2.expiryTimestamp) && t.push(s2.id);
      }), await Promise.all([...e2.map((s2) => this.deleteSession({ topic: s2 })), ...t.map((s2) => this.deleteProposal(s2))]);
    }), c$1(this, "onRelayEventRequest", async (e2) => {
      this.requestQueue.queue.push(e2), await this.processRequestsQueue();
    }), c$1(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === $$2.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = $$2.active;
        const e2 = this.requestQueue.queue.shift();
        if (e2) try {
          await this.processRequest(e2);
        } catch (t) {
          this.client.logger.warn(t);
        }
      }
      this.requestQueue.state = $$2.idle;
    }), c$1(this, "processRequest", async (e2) => {
      const { topic: t, payload: s2, attestation: i3, transportType: r2, encryptedId: o3 } = e2, a2 = s2.method;
      if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: a2 })) switch (a2) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: t, payload: s2, attestation: i3, encryptedId: o3 });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(t, s2);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(t, s2);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(t, s2);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(t, s2);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(t, s2);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: t, payload: s2, attestation: i3, encryptedId: o3, transportType: r2 });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(t, s2);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: t, payload: s2, attestation: i3, encryptedId: o3, transportType: r2 });
        default:
          return this.client.logger.info(`Unsupported request method ${a2}`);
      }
    }), c$1(this, "onRelayEventResponse", async (e2) => {
      const { topic: t, payload: s2, transportType: i3 } = e2, r2 = (await this.client.core.history.get(t, s2.id)).request.method;
      switch (r2) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(t, s2, i3);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(t, s2);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(t, s2);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(t, s2);
        case "wc_sessionPing":
          return this.onSessionPingResponse(t, s2);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(t, s2);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(t, s2);
        default:
          return this.client.logger.info(`Unsupported response method ${r2}`);
      }
    }), c$1(this, "onRelayEventUnknownPayload", (e2) => {
      const { topic: t } = e2, { message: s2 } = te$1("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s2);
    }), c$1(this, "shouldIgnorePairingRequest", (e2) => {
      const { topic: t, requestMethod: s2 } = e2, i3 = this.expectedPairingMethodMap.get(t);
      return !i3 || i3.includes(s2) ? false : !!(i3.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), c$1(this, "onSessionProposeRequest", async (e2) => {
      const { topic: t, payload: s2, attestation: i3, encryptedId: r2 } = e2, { params: o3, id: a2 } = s2;
      try {
        const l2 = this.client.core.eventClient.getEvent({ topic: t });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l2 == null ? void 0 : l2.setError(J$1.proposal_listener_not_found)), this.isValidConnect(v$3({}, s2.params));
        const u2 = o3.expiryTimestamp || ho$1(N$2.wc_sessionPropose.req.ttl), g2 = v$3({ id: a2, pairingTopic: t, expiryTimestamp: u2 }, o3);
        await this.setProposal(a2, g2);
        const h4 = await this.getVerifyContext({ attestationId: i3, hash: si$2(JSON.stringify(s2)), encryptedId: r2, metadata: g2.proposer.metadata });
        l2 == null ? void 0 : l2.addTrace(q$2.emit_session_proposal), this.client.events.emit("session_proposal", { id: a2, params: g2, verifyContext: h4 });
      } catch (l2) {
        await this.sendError({ id: a2, topic: t, error: l2, rpcOpts: N$2.wc_sessionPropose.autoReject }), this.client.logger.error(l2);
      }
    }), c$1(this, "onSessionProposeResponse", async (e2, t, s2) => {
      const { id: i3 } = t;
      if (isJsonRpcResult(t)) {
        const { result: r2 } = t;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: r2 });
        const o3 = this.client.proposal.get(i3);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o3 });
        const a2 = o3.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a2 });
        const l2 = r2.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l2 });
        const u2 = await this.client.core.crypto.generateSharedKey(a2, l2);
        this.pendingSessions.set(i3, { sessionTopic: u2, pairingTopic: e2, proposalId: i3, publicKey: a2 });
        const g2 = await this.client.core.relayer.subscribe(u2, { transportType: s2 });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: g2 }), await this.client.core.pairing.activate({ topic: e2 });
      } else if (isJsonRpcError(t)) {
        await this.client.proposal.delete(i3, de$2("USER_DISCONNECTED"));
        const r2 = go$1("session_connect", i3);
        if (this.events.listenerCount(r2) === 0) throw new Error(`emitting ${r2} without any listeners, 954`);
        this.events.emit(r2, { error: t.error });
      }
    }), c$1(this, "onSessionSettleRequest", async (e2, t) => {
      const { id: s2, params: i3 } = t;
      try {
        this.isValidSessionSettleRequest(i3);
        const { relay: r2, controller: o3, expiry: a2, namespaces: l2, sessionProperties: u2, sessionConfig: g2 } = t.params, h4 = [...this.pendingSessions.values()].find((m4) => m4.sessionTopic === e2);
        if (!h4) return this.client.logger.error(`Pending session not found for topic ${e2}`);
        const d4 = this.client.proposal.get(h4.proposalId), y3 = x$2(v$3(v$3({ topic: e2, relay: r2, expiry: a2, namespaces: l2, acknowledged: true, pairingTopic: h4.pairingTopic, requiredNamespaces: d4.requiredNamespaces, optionalNamespaces: d4.optionalNamespaces, controller: o3.publicKey, self: { publicKey: h4.publicKey, metadata: this.client.metadata }, peer: { publicKey: o3.publicKey, metadata: o3.metadata } }, u2 && { sessionProperties: u2 }), g2 && { sessionConfig: g2 }), { transportType: Q$1.relay });
        await this.client.session.set(y3.topic, y3), await this.setExpiry(y3.topic, y3.expiry), await this.client.core.pairing.updateMetadata({ topic: h4.pairingTopic, metadata: y3.peer.metadata }), this.client.events.emit("session_connect", { session: y3 }), this.events.emit(go$1("session_connect", h4.proposalId), { session: y3 }), this.pendingSessions.delete(h4.proposalId), this.deleteProposal(h4.proposalId, false), this.cleanupDuplicatePairings(y3), await this.sendResult({ id: t.id, topic: e2, result: true, throwOnFailedPublish: true });
      } catch (r2) {
        await this.sendError({ id: s2, topic: e2, error: r2 }), this.client.logger.error(r2);
      }
    }), c$1(this, "onSessionSettleResponse", async (e2, t) => {
      const { id: s2 } = t;
      isJsonRpcResult(t) ? (await this.client.session.update(e2, { acknowledged: true }), this.events.emit(go$1("session_approve", s2), {})) : isJsonRpcError(t) && (await this.client.session.delete(e2, de$2("USER_DISCONNECTED")), this.events.emit(go$1("session_approve", s2), { error: t.error }));
    }), c$1(this, "onSessionUpdateRequest", async (e2, t) => {
      const { params: s2, id: i3 } = t;
      try {
        const r2 = `${e2}_session_update`, o3 = Zi$1.get(r2);
        if (o3 && this.isRequestOutOfSync(o3, i3)) {
          this.client.logger.warn(`Discarding out of sync request - ${i3}`), this.sendError({ id: i3, topic: e2, error: de$2("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(v$3({ topic: e2 }, s2));
        try {
          Zi$1.set(r2, i3), await this.client.session.update(e2, { namespaces: s2.namespaces }), await this.sendResult({ id: i3, topic: e2, result: true, throwOnFailedPublish: true });
        } catch (a2) {
          throw Zi$1.delete(r2), a2;
        }
        this.client.events.emit("session_update", { id: i3, topic: e2, params: s2 });
      } catch (r2) {
        await this.sendError({ id: i3, topic: e2, error: r2 }), this.client.logger.error(r2);
      }
    }), c$1(this, "isRequestOutOfSync", (e2, t) => t.toString().slice(0, -3) < e2.toString().slice(0, -3)), c$1(this, "onSessionUpdateResponse", (e2, t) => {
      const { id: s2 } = t, i3 = go$1("session_update", s2);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(go$1("session_update", s2), {}) : isJsonRpcError(t) && this.events.emit(go$1("session_update", s2), { error: t.error });
    }), c$1(this, "onSessionExtendRequest", async (e2, t) => {
      const { id: s2 } = t;
      try {
        this.isValidExtend({ topic: e2 }), await this.setExpiry(e2, ho$1(Y$1)), await this.sendResult({ id: s2, topic: e2, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_extend", { id: s2, topic: e2 });
      } catch (i3) {
        await this.sendError({ id: s2, topic: e2, error: i3 }), this.client.logger.error(i3);
      }
    }), c$1(this, "onSessionExtendResponse", (e2, t) => {
      const { id: s2 } = t, i3 = go$1("session_extend", s2);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(go$1("session_extend", s2), {}) : isJsonRpcError(t) && this.events.emit(go$1("session_extend", s2), { error: t.error });
    }), c$1(this, "onSessionPingRequest", async (e2, t) => {
      const { id: s2 } = t;
      try {
        this.isValidPing({ topic: e2 }), await this.sendResult({ id: s2, topic: e2, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s2, topic: e2 });
      } catch (i3) {
        await this.sendError({ id: s2, topic: e2, error: i3 }), this.client.logger.error(i3);
      }
    }), c$1(this, "onSessionPingResponse", (e2, t) => {
      const { id: s2 } = t, i3 = go$1("session_ping", s2);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      setTimeout(() => {
        isJsonRpcResult(t) ? this.events.emit(go$1("session_ping", s2), {}) : isJsonRpcError(t) && this.events.emit(go$1("session_ping", s2), { error: t.error });
      }, 500);
    }), c$1(this, "onSessionDeleteRequest", async (e2, t) => {
      const { id: s2 } = t;
      try {
        this.isValidDisconnect({ topic: e2, reason: t.params }), Promise.all([new Promise((i3) => {
          this.client.core.relayer.once(T$3.publish, async () => {
            i3(await this.deleteSession({ topic: e2, id: s2 }));
          });
        }), this.sendResult({ id: s2, topic: e2, result: true, throwOnFailedPublish: true }), this.cleanupPendingSentRequestsForTopic({ topic: e2, error: de$2("USER_DISCONNECTED") })]).catch((i3) => this.client.logger.error(i3));
      } catch (i3) {
        this.client.logger.error(i3);
      }
    }), c$1(this, "onSessionRequest", async (e2) => {
      var t, s2, i3;
      const { topic: r2, payload: o3, attestation: a2, encryptedId: l2, transportType: u2 } = e2, { id: g2, params: h4 } = o3;
      try {
        await this.isValidRequest(v$3({ topic: r2 }, h4));
        const d4 = this.client.session.get(r2), y3 = await this.getVerifyContext({ attestationId: a2, hash: si$2(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", h4, g2))), encryptedId: l2, metadata: d4.peer.metadata, transportType: u2 }), m4 = { id: g2, topic: r2, params: h4, verifyContext: y3 };
        await this.setPendingSessionRequest(m4), u2 === Q$1.link_mode && (t = d4.peer.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp((s2 = d4.peer.metadata.redirect) == null ? void 0 : s2.universal), (i3 = this.client.signConfig) != null && i3.disableRequestQueue ? this.emitSessionRequest(m4) : (this.addSessionRequestToSessionRequestQueue(m4), this.processSessionRequestQueue());
      } catch (d4) {
        await this.sendError({ id: g2, topic: r2, error: d4 }), this.client.logger.error(d4);
      }
    }), c$1(this, "onSessionRequestResponse", (e2, t) => {
      const { id: s2 } = t, i3 = go$1("session_request", s2);
      if (this.events.listenerCount(i3) === 0) throw new Error(`emitting ${i3} without any listeners`);
      isJsonRpcResult(t) ? this.events.emit(go$1("session_request", s2), { result: t.result }) : isJsonRpcError(t) && this.events.emit(go$1("session_request", s2), { error: t.error });
    }), c$1(this, "onSessionEventRequest", async (e2, t) => {
      const { id: s2, params: i3 } = t;
      try {
        const r2 = `${e2}_session_event_${i3.event.name}`, o3 = Zi$1.get(r2);
        if (o3 && this.isRequestOutOfSync(o3, s2)) {
          this.client.logger.info(`Discarding out of sync request - ${s2}`);
          return;
        }
        this.isValidEmit(v$3({ topic: e2 }, i3)), this.client.events.emit("session_event", { id: s2, topic: e2, params: i3 }), Zi$1.set(r2, s2);
      } catch (r2) {
        await this.sendError({ id: s2, topic: e2, error: r2 }), this.client.logger.error(r2);
      }
    }), c$1(this, "onSessionAuthenticateResponse", (e2, t) => {
      const { id: s2 } = t;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: e2, payload: t }), isJsonRpcResult(t) ? this.events.emit(go$1("session_request", s2), { result: t.result }) : isJsonRpcError(t) && this.events.emit(go$1("session_request", s2), { error: t.error });
    }), c$1(this, "onSessionAuthenticateRequest", async (e2) => {
      var t;
      const { topic: s2, payload: i3, attestation: r2, encryptedId: o3, transportType: a2 } = e2;
      try {
        const { requester: l2, authPayload: u2, expiryTimestamp: g2 } = i3.params, h4 = await this.getVerifyContext({ attestationId: r2, hash: si$2(JSON.stringify(i3)), encryptedId: o3, metadata: l2.metadata, transportType: a2 }), d4 = { requester: l2, pairingTopic: s2, id: i3.id, authPayload: u2, verifyContext: h4, expiryTimestamp: g2 };
        await this.setAuthRequest(i3.id, { request: d4, pairingTopic: s2, transportType: a2 }), a2 === Q$1.link_mode && (t = l2.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp(l2.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s2, params: i3.params, id: i3.id, verifyContext: h4 });
      } catch (l2) {
        this.client.logger.error(l2);
        const u2 = i3.params.requester.publicKey, g2 = await this.client.core.crypto.generateKeyPair(), h4 = this.getAppLinkIfEnabled(i3.params.requester.metadata, a2), d4 = { type: Ie$1, receiverPublicKey: u2, senderPublicKey: g2 };
        await this.sendError({ id: i3.id, topic: s2, error: l2, encodeOpts: d4, rpcOpts: N$2.wc_sessionAuthenticate.autoReject, appLink: h4 });
      }
    }), c$1(this, "addSessionRequestToSessionRequestQueue", (e2) => {
      this.sessionRequestQueue.queue.push(e2);
    }), c$1(this, "cleanupAfterResponse", (e2) => {
      this.deletePendingSessionRequest(e2.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = $$2.idle, this.processSessionRequestQueue();
      }, cjs$3.toMiliseconds(this.requestQueueDelay));
    }), c$1(this, "cleanupPendingSentRequestsForTopic", ({ topic: e2, error: t }) => {
      const s2 = this.client.core.history.pending;
      s2.length > 0 && s2.filter((i3) => i3.topic === e2 && i3.request.method === "wc_sessionRequest").forEach((i3) => {
        const r2 = i3.request.id, o3 = go$1("session_request", r2);
        if (this.events.listenerCount(o3) === 0) throw new Error(`emitting ${o3} without any listeners`);
        this.events.emit(go$1("session_request", i3.request.id), { error: t });
      });
    }), c$1(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === $$2.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e2 = this.sessionRequestQueue.queue[0];
      if (!e2) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = $$2.active, this.emitSessionRequest(e2);
      } catch (t) {
        this.client.logger.error(t);
      }
    }), c$1(this, "emitSessionRequest", (e2) => {
      this.client.events.emit("session_request", e2);
    }), c$1(this, "onPairingCreated", (e2) => {
      if (e2.methods && this.expectedPairingMethodMap.set(e2.topic, e2.methods), e2.active) return;
      const t = this.client.proposal.getAll().find((s2) => s2.pairingTopic === e2.topic);
      t && this.onSessionProposeRequest({ topic: e2.topic, payload: formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: t.requiredNamespaces, optionalNamespaces: t.optionalNamespaces, relays: t.relays, proposer: t.proposer, sessionProperties: t.sessionProperties }, t.id) });
    }), c$1(this, "isValidConnect", async (e2) => {
      if (!Di$2(e2)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e2)}`);
        throw new Error(a2);
      }
      const { pairingTopic: t, requiredNamespaces: s2, optionalNamespaces: i3, sessionProperties: r2, relays: o3 } = e2;
      if (ae$1(t) || await this.isValidPairingTopic(t), !Ci$2(o3)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `connect() relays: ${o3}`);
        throw new Error(a2);
      }
      !ae$1(s2) && qe$2(s2) !== 0 && this.validateNamespaces(s2, "requiredNamespaces"), !ae$1(i3) && qe$2(i3) !== 0 && this.validateNamespaces(i3, "optionalNamespaces"), ae$1(r2) || this.validateSessionProps(r2, "sessionProperties");
    }), c$1(this, "validateNamespaces", (e2, t) => {
      const s2 = ji$1(e2, "connect()", t);
      if (s2) throw new Error(s2.message);
    }), c$1(this, "isValidApprove", async (e2) => {
      if (!Di$2(e2)) throw new Error(te$1("MISSING_OR_INVALID", `approve() params: ${e2}`).message);
      const { id: t, namespaces: s2, relayProtocol: i3, sessionProperties: r2 } = e2;
      this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
      const o3 = this.client.proposal.get(t), a2 = Ir$2(s2, "approve()");
      if (a2) throw new Error(a2.message);
      const l2 = Nr$2(o3.requiredNamespaces, s2, "approve()");
      if (l2) throw new Error(l2.message);
      if (!q$3(i3, true)) {
        const { message: u2 } = te$1("MISSING_OR_INVALID", `approve() relayProtocol: ${i3}`);
        throw new Error(u2);
      }
      ae$1(r2) || this.validateSessionProps(r2, "sessionProperties");
    }), c$1(this, "isValidReject", async (e2) => {
      if (!Di$2(e2)) {
        const { message: i3 } = te$1("MISSING_OR_INVALID", `reject() params: ${e2}`);
        throw new Error(i3);
      }
      const { id: t, reason: s2 } = e2;
      if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !Mi$1(s2)) {
        const { message: i3 } = te$1("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s2)}`);
        throw new Error(i3);
      }
    }), c$1(this, "isValidSessionSettleRequest", (e2) => {
      if (!Di$2(e2)) {
        const { message: l2 } = te$1("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e2}`);
        throw new Error(l2);
      }
      const { relay: t, controller: s2, namespaces: i3, expiry: r2 } = e2;
      if (!Ar$2(t)) {
        const { message: l2 } = te$1("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l2);
      }
      const o3 = Bi$1(s2, "onSessionSettleRequest()");
      if (o3) throw new Error(o3.message);
      const a2 = Ir$2(i3, "onSessionSettleRequest()");
      if (a2) throw new Error(a2.message);
      if (po$1(r2)) {
        const { message: l2 } = te$1("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l2);
      }
    }), c$1(this, "isValidUpdate", async (e2) => {
      if (!Di$2(e2)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `update() params: ${e2}`);
        throw new Error(a2);
      }
      const { topic: t, namespaces: s2 } = e2;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      const i3 = this.client.session.get(t), r2 = Ir$2(s2, "update()");
      if (r2) throw new Error(r2.message);
      const o3 = Nr$2(i3.requiredNamespaces, s2, "update()");
      if (o3) throw new Error(o3.message);
    }), c$1(this, "isValidExtend", async (e2) => {
      if (!Di$2(e2)) {
        const { message: s2 } = te$1("MISSING_OR_INVALID", `extend() params: ${e2}`);
        throw new Error(s2);
      }
      const { topic: t } = e2;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
    }), c$1(this, "isValidRequest", async (e2) => {
      if (!Di$2(e2)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `request() params: ${e2}`);
        throw new Error(a2);
      }
      const { topic: t, request: s2, chainId: i3, expiry: r2 } = e2;
      this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      const { namespaces: o3 } = this.client.session.get(t);
      if (!Fi$1(o3, i3)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `request() chainId: ${i3}`);
        throw new Error(a2);
      }
      if (!Vi$1(s2)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `request() ${JSON.stringify(s2)}`);
        throw new Error(a2);
      }
      if (!qi$1(o3, i3, s2.method)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `request() method: ${s2.method}`);
        throw new Error(a2);
      }
      if (r2 && !Ji$1(r2, Ee$1)) {
        const { message: a2 } = te$1("MISSING_OR_INVALID", `request() expiry: ${r2}. Expiry must be a number (in seconds) between ${Ee$1.min} and ${Ee$1.max}`);
        throw new Error(a2);
      }
    }), c$1(this, "isValidRespond", async (e2) => {
      var t;
      if (!Di$2(e2)) {
        const { message: r2 } = te$1("MISSING_OR_INVALID", `respond() params: ${e2}`);
        throw new Error(r2);
      }
      const { topic: s2, response: i3 } = e2;
      try {
        await this.isValidSessionTopic(s2);
      } catch (r2) {
        throw (t = e2 == null ? void 0 : e2.response) != null && t.id && this.cleanupAfterResponse(e2), r2;
      }
      if (!Hi$1(i3)) {
        const { message: r2 } = te$1("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i3)}`);
        throw new Error(r2);
      }
    }), c$1(this, "isValidPing", async (e2) => {
      if (!Di$2(e2)) {
        const { message: s2 } = te$1("MISSING_OR_INVALID", `ping() params: ${e2}`);
        throw new Error(s2);
      }
      const { topic: t } = e2;
      await this.isValidSessionOrPairingTopic(t);
    }), c$1(this, "isValidEmit", async (e2) => {
      if (!Di$2(e2)) {
        const { message: o3 } = te$1("MISSING_OR_INVALID", `emit() params: ${e2}`);
        throw new Error(o3);
      }
      const { topic: t, event: s2, chainId: i3 } = e2;
      await this.isValidSessionTopic(t);
      const { namespaces: r2 } = this.client.session.get(t);
      if (!Fi$1(r2, i3)) {
        const { message: o3 } = te$1("MISSING_OR_INVALID", `emit() chainId: ${i3}`);
        throw new Error(o3);
      }
      if (!Ki$1(s2)) {
        const { message: o3 } = te$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s2)}`);
        throw new Error(o3);
      }
      if (!Gi$1(r2, i3, s2.name)) {
        const { message: o3 } = te$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s2)}`);
        throw new Error(o3);
      }
    }), c$1(this, "isValidDisconnect", async (e2) => {
      if (!Di$2(e2)) {
        const { message: s2 } = te$1("MISSING_OR_INVALID", `disconnect() params: ${e2}`);
        throw new Error(s2);
      }
      const { topic: t } = e2;
      await this.isValidSessionOrPairingTopic(t);
    }), c$1(this, "isValidAuthenticate", (e2) => {
      const { chains: t, uri: s2, domain: i3, nonce: r2 } = e2;
      if (!Array.isArray(t) || t.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!q$3(s2, false)) throw new Error("uri is required parameter");
      if (!q$3(i3, false)) throw new Error("domain is required parameter");
      if (!q$3(r2, false)) throw new Error("nonce is required parameter");
      if ([...new Set(t.map((a2) => Ye$1(a2).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: o3 } = Ye$1(t[0]);
      if (o3 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), c$1(this, "getVerifyContext", async (e2) => {
      const { attestationId: t, hash: s2, encryptedId: i3, metadata: r2, transportType: o3 } = e2, a2 = { verified: { verifyUrl: r2.verifyUrl || le$2, validation: "UNKNOWN", origin: r2.url || "" } };
      try {
        if (o3 === Q$1.link_mode) {
          const u2 = this.getAppLinkIfEnabled(r2, o3);
          return a2.verified.validation = u2 && new URL(u2).origin === new URL(r2.url).origin ? "VALID" : "INVALID", a2;
        }
        const l2 = await this.client.core.verify.resolve({ attestationId: t, hash: s2, encryptedId: i3, verifyUrl: r2.verifyUrl });
        l2 && (a2.verified.origin = l2.origin, a2.verified.isScam = l2.isScam, a2.verified.validation = l2.origin === new URL(r2.url).origin ? "VALID" : "INVALID");
      } catch (l2) {
        this.client.logger.warn(l2);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(a2)}`), a2;
    }), c$1(this, "validateSessionProps", (e2, t) => {
      Object.values(e2).forEach((s2) => {
        if (!q$3(s2, false)) {
          const { message: i3 } = te$1("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(s2)}`);
          throw new Error(i3);
        }
      });
    }), c$1(this, "getPendingAuthRequest", (e2) => {
      const t = this.client.auth.requests.get(e2);
      return typeof t == "object" ? t : void 0;
    }), c$1(this, "addToRecentlyDeleted", (e2, t) => {
      if (this.recentlyDeletedMap.set(e2, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s2 = 0;
        const i3 = this.recentlyDeletedLimit / 2;
        for (const r2 of this.recentlyDeletedMap.keys()) {
          if (s2++ >= i3) break;
          this.recentlyDeletedMap.delete(r2);
        }
      }
    }), c$1(this, "checkRecentlyDeleted", (e2) => {
      const t = this.recentlyDeletedMap.get(e2);
      if (t) {
        const { message: s2 } = te$1("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e2}`);
        throw new Error(s2);
      }
    }), c$1(this, "isLinkModeEnabled", (e2, t) => {
      var s2, i3, r2, o3, a2, l2, u2, g2, h4;
      return !e2 || t !== Q$1.link_mode ? false : ((i3 = (s2 = this.client.metadata) == null ? void 0 : s2.redirect) == null ? void 0 : i3.linkMode) === true && ((o3 = (r2 = this.client.metadata) == null ? void 0 : r2.redirect) == null ? void 0 : o3.universal) !== void 0 && ((l2 = (a2 = this.client.metadata) == null ? void 0 : a2.redirect) == null ? void 0 : l2.universal) !== "" && ((u2 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : u2.universal) !== void 0 && ((g2 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : g2.universal) !== "" && ((h4 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : h4.linkMode) === true && this.client.core.linkModeSupportedApps.includes(e2.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }), c$1(this, "getAppLinkIfEnabled", (e2, t) => {
      var s2;
      return this.isLinkModeEnabled(e2, t) ? (s2 = e2 == null ? void 0 : e2.redirect) == null ? void 0 : s2.universal : void 0;
    }), c$1(this, "handleLinkModeMessage", ({ url: e2 }) => {
      if (!e2 || !e2.includes("wc_ev") || !e2.includes("topic")) return;
      const t = bo$1(e2, "topic") || "", s2 = decodeURIComponent(bo$1(e2, "wc_ev") || ""), i3 = this.client.session.keys.includes(t);
      i3 && this.client.session.update(t, { transportType: Q$1.link_mode }), this.client.core.dispatchEnvelope({ topic: t, message: s2, sessionExists: i3 });
    }), c$1(this, "registerLinkModeListeners", async () => {
      var e2;
      if (Eo$1() || ne$1() && (e2 = this.client.metadata.redirect) != null && e2.linkMode) {
        const t = global == null ? void 0 : global.Linking;
        if (typeof t < "u") {
          t.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s2 = await t.getInitialURL();
          s2 && setTimeout(() => {
            this.handleLinkModeMessage({ url: s2 });
          }, 50);
        }
      }
    }), c$1(this, "shouldSetTVF", (e2, t) => {
      if (!t || e2 !== "wc_sessionRequest") return false;
      const { request: s2 } = t;
      return Object.keys(Ke$1).includes(s2.method);
    }), c$1(this, "getTVFParams", (e2, t, s2) => {
      var i3, r2;
      try {
        const o3 = t.request.method, a2 = this.extractTxHashesFromResult(o3, s2);
        return x$2(v$3({ correlationId: e2, rpcMethods: [o3], chainId: t.chainId }, this.isValidContractData(t.request.params) && { contractAddresses: [(r2 = (i3 = t.request.params) == null ? void 0 : i3[0]) == null ? void 0 : r2.to] }), { txHashes: a2 });
      } catch (o3) {
        this.client.logger.warn("Error getting TVF params", o3);
      }
      return {};
    }), c$1(this, "isValidContractData", (e2) => {
      var t;
      if (!e2) return false;
      try {
        const s2 = (e2 == null ? void 0 : e2.data) || ((t = e2 == null ? void 0 : e2[0]) == null ? void 0 : t.data);
        if (!s2.startsWith("0x")) return false;
        const i3 = s2.slice(2);
        return /^[0-9a-fA-F]*$/.test(i3) ? i3.length % 2 === 0 : false;
      } catch {
      }
      return false;
    }), c$1(this, "extractTxHashesFromResult", (e2, t) => {
      try {
        const s2 = Ke$1[e2];
        if (typeof t == "string") return [t];
        const i3 = t[s2.key];
        if ($e$3(i3)) return i3;
        if (typeof i3 == "string") return [i3];
      } catch (s2) {
        this.client.logger.warn("Error extracting tx hashes from result", s2);
      }
      return [];
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: n3 } = te$1("NOT_INITIALIZED", this.name);
      throw new Error(n3);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(T$3.message, (n3) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(n3) : this.onRelayMessage(n3);
    });
  }
  async onRelayMessage(n3) {
    const { topic: e2, message: t, attestation: s2, transportType: i3 } = n3, { publicKey: r2 } = this.client.auth.authKeys.keys.includes(le$1) ? this.client.auth.authKeys.get(le$1) : { responseTopic: void 0, publicKey: void 0 }, o3 = await this.client.core.crypto.decode(e2, t, { receiverPublicKey: r2, encoding: i3 === Q$1.link_mode ? Qs$2 : At$2 });
    try {
      isJsonRpcRequest(o3) ? (this.client.core.history.set(e2, o3), this.onRelayEventRequest({ topic: e2, payload: o3, attestation: s2, transportType: i3, encryptedId: si$2(t) })) : isJsonRpcResponse(o3) ? (await this.client.core.history.resolve(o3), await this.onRelayEventResponse({ topic: e2, payload: o3, transportType: i3 }), this.client.core.history.delete(e2, o3.id)) : this.onRelayEventUnknownPayload({ topic: e2, payload: o3, transportType: i3 });
    } catch (a2) {
      this.client.logger.error(a2);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(M$2.expired, async (n3) => {
      const { topic: e2, id: t } = lo$1(n3.target);
      if (t && this.client.pendingRequest.keys.includes(t)) return await this.deletePendingSessionRequest(t, te$1("EXPIRED"), true);
      if (t && this.client.auth.requests.keys.includes(t)) return await this.deletePendingAuthRequest(t, te$1("EXPIRED"), true);
      e2 ? this.client.session.keys.includes(e2) && (await this.deleteSession({ topic: e2, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: e2 })) : t && (await this.deleteProposal(t, true), this.client.events.emit("proposal_expire", { id: t }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(se$1.create, (n3) => this.onPairingCreated(n3)), this.client.core.pairing.events.on(se$1.delete, (n3) => {
      this.addToRecentlyDeleted(n3.topic, "pairing");
    });
  }
  isValidPairingTopic(n3) {
    if (!q$3(n3, false)) {
      const { message: e2 } = te$1("MISSING_OR_INVALID", `pairing topic should be a string: ${n3}`);
      throw new Error(e2);
    }
    if (!this.client.core.pairing.pairings.keys.includes(n3)) {
      const { message: e2 } = te$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n3}`);
      throw new Error(e2);
    }
    if (po$1(this.client.core.pairing.pairings.get(n3).expiry)) {
      const { message: e2 } = te$1("EXPIRED", `pairing topic: ${n3}`);
      throw new Error(e2);
    }
  }
  async isValidSessionTopic(n3) {
    if (!q$3(n3, false)) {
      const { message: e2 } = te$1("MISSING_OR_INVALID", `session topic should be a string: ${n3}`);
      throw new Error(e2);
    }
    if (this.checkRecentlyDeleted(n3), !this.client.session.keys.includes(n3)) {
      const { message: e2 } = te$1("NO_MATCHING_KEY", `session topic doesn't exist: ${n3}`);
      throw new Error(e2);
    }
    if (po$1(this.client.session.get(n3).expiry)) {
      await this.deleteSession({ topic: n3 });
      const { message: e2 } = te$1("EXPIRED", `session topic: ${n3}`);
      throw new Error(e2);
    }
    if (!this.client.core.crypto.keychain.has(n3)) {
      const { message: e2 } = te$1("MISSING_OR_INVALID", `session topic does not exist in keychain: ${n3}`);
      throw await this.deleteSession({ topic: n3 }), new Error(e2);
    }
  }
  async isValidSessionOrPairingTopic(n3) {
    if (this.checkRecentlyDeleted(n3), this.client.session.keys.includes(n3)) await this.isValidSessionTopic(n3);
    else if (this.client.core.pairing.pairings.keys.includes(n3)) this.isValidPairingTopic(n3);
    else if (q$3(n3, false)) {
      const { message: e2 } = te$1("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n3}`);
      throw new Error(e2);
    } else {
      const { message: e2 } = te$1("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n3}`);
      throw new Error(e2);
    }
  }
  async isValidProposalId(n3) {
    if (!ki$1(n3)) {
      const { message: e2 } = te$1("MISSING_OR_INVALID", `proposal id should be a number: ${n3}`);
      throw new Error(e2);
    }
    if (!this.client.proposal.keys.includes(n3)) {
      const { message: e2 } = te$1("NO_MATCHING_KEY", `proposal id doesn't exist: ${n3}`);
      throw new Error(e2);
    }
    if (po$1(this.client.proposal.get(n3).expiryTimestamp)) {
      await this.deleteProposal(n3);
      const { message: e2 } = te$1("EXPIRED", `proposal id: ${n3}`);
      throw new Error(e2);
    }
  }
};
let Ns$1 = class Ns extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, pt$1, me), this.core = n3, this.logger = e2;
  }
};
let Rt$1 = class Rt extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, ht$1, me), this.core = n3, this.logger = e2;
  }
};
let Ps$1 = class Ps extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, ut$1, me, (t) => t.id), this.core = n3, this.logger = e2;
  }
};
let Os$1 = class Os extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, mt, ce$1, () => le$1), this.core = n3, this.logger = e2;
  }
};
let bs$1 = class bs extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, _t$1, ce$1), this.core = n3, this.logger = e2;
  }
};
let As$1 = class As extends Ci$1 {
  constructor(n3, e2) {
    super(n3, e2, Et$1, ce$1, (t) => t.id), this.core = n3, this.logger = e2;
  }
};
var Cs$1 = Object.defineProperty, xs$1 = (S3, n3, e2) => n3 in S3 ? Cs$1(S3, n3, { enumerable: true, configurable: true, writable: true, value: e2 }) : S3[n3] = e2, Ge$1 = (S3, n3, e2) => xs$1(S3, typeof n3 != "symbol" ? n3 + "" : n3, e2);
let Vs$1 = class Vs {
  constructor(n3, e2) {
    this.core = n3, this.logger = e2, Ge$1(this, "authKeys"), Ge$1(this, "pairingTopics"), Ge$1(this, "requests"), this.authKeys = new Os$1(this.core, this.logger), this.pairingTopics = new bs$1(this.core, this.logger), this.requests = new As$1(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
};
var Ds$1 = Object.defineProperty, Ls$1 = (S3, n3, e2) => n3 in S3 ? Ds$1(S3, n3, { enumerable: true, configurable: true, writable: true, value: e2 }) : S3[n3] = e2, _$2 = (S3, n3, e2) => Ls$1(S3, typeof n3 != "symbol" ? n3 + "" : n3, e2);
let Se$1 = class Se extends J$2 {
  constructor(n3) {
    super(n3), _$2(this, "protocol", De$1), _$2(this, "version", Le$1), _$2(this, "name", _e$1.name), _$2(this, "metadata"), _$2(this, "core"), _$2(this, "logger"), _$2(this, "events", new eventsExports.EventEmitter()), _$2(this, "engine"), _$2(this, "session"), _$2(this, "proposal"), _$2(this, "pendingRequest"), _$2(this, "auth"), _$2(this, "signConfig"), _$2(this, "on", (t, s2) => this.events.on(t, s2)), _$2(this, "once", (t, s2) => this.events.once(t, s2)), _$2(this, "off", (t, s2) => this.events.off(t, s2)), _$2(this, "removeListener", (t, s2) => this.events.removeListener(t, s2)), _$2(this, "removeAllListeners", (t) => this.events.removeAllListeners(t)), _$2(this, "connect", async (t) => {
      try {
        return await this.engine.connect(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "pair", async (t) => {
      try {
        return await this.engine.pair(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "approve", async (t) => {
      try {
        return await this.engine.approve(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "reject", async (t) => {
      try {
        return await this.engine.reject(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "update", async (t) => {
      try {
        return await this.engine.update(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "extend", async (t) => {
      try {
        return await this.engine.extend(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "request", async (t) => {
      try {
        return await this.engine.request(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "respond", async (t) => {
      try {
        return await this.engine.respond(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "ping", async (t) => {
      try {
        return await this.engine.ping(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "emit", async (t) => {
      try {
        return await this.engine.emit(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "disconnect", async (t) => {
      try {
        return await this.engine.disconnect(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "find", (t) => {
      try {
        return this.engine.find(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }), _$2(this, "authenticate", async (t, s2) => {
      try {
        return await this.engine.authenticate(t, s2);
      } catch (i3) {
        throw this.logger.error(i3.message), i3;
      }
    }), _$2(this, "formatAuthMessage", (t) => {
      try {
        return this.engine.formatAuthMessage(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "approveSessionAuthenticate", async (t) => {
      try {
        return await this.engine.approveSessionAuthenticate(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), _$2(this, "rejectSessionAuthenticate", async (t) => {
      try {
        return await this.engine.rejectSessionAuthenticate(t);
      } catch (s2) {
        throw this.logger.error(s2.message), s2;
      }
    }), this.name = (n3 == null ? void 0 : n3.name) || _e$1.name, this.metadata = (n3 == null ? void 0 : n3.metadata) || Yr$2(), this.signConfig = n3 == null ? void 0 : n3.signConfig;
    const e2 = typeof (n3 == null ? void 0 : n3.logger) < "u" && typeof (n3 == null ? void 0 : n3.logger) != "string" ? n3.logger : gt$1(k$2({ level: (n3 == null ? void 0 : n3.logger) || _e$1.logger }));
    this.core = (n3 == null ? void 0 : n3.core) || new co$1(n3), this.logger = E$3(e2, this.name), this.session = new Rt$1(this.core, this.logger), this.proposal = new Ns$1(this.core, this.logger), this.pendingRequest = new Ps$1(this.core, this.logger), this.engine = new Ts$1(this), this.auth = new Vs$1(this.core, this.logger);
  }
  static async init(n3) {
    const e2 = new Se(n3);
    return await e2.initialize(), e2;
  }
  get context() {
    return y$3(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), setTimeout(() => {
        this.engine.processRelayMessageCache();
      }, cjs$3.toMiliseconds(cjs$3.ONE_SECOND));
    } catch (n3) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n3.message), n3;
    }
  }
};
var browserPonyfill = { exports: {} };
(function(module, exports) {
  var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof commonjsGlobal !== "undefined" && commonjsGlobal;
  var __globalThis__ = function() {
    function F2() {
      this.fetch = false;
      this.DOMException = __global__.DOMException;
    }
    F2.prototype = __global__;
    return new F2();
  }();
  (function(globalThis2) {
    (function(exports2) {
      var g2 = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
      typeof commonjsGlobal !== "undefined" && commonjsGlobal || {};
      var support = {
        searchParams: "URLSearchParams" in g2,
        iterable: "Symbol" in g2 && "iterator" in Symbol,
        blob: "FileReader" in g2 && "Blob" in g2 && function() {
          try {
            new Blob();
            return true;
          } catch (e2) {
            return false;
          }
        }(),
        formData: "FormData" in g2,
        arrayBuffer: "ArrayBuffer" in g2
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (support.arrayBuffer) {
        var viewClasses = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ];
        var isArrayBufferView = ArrayBuffer.isView || function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }
      function normalizeName(name) {
        if (typeof name !== "string") {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
          throw new TypeError('Invalid character in header field name: "' + name + '"');
        }
        return name.toLowerCase();
      }
      function normalizeValue(value) {
        if (typeof value !== "string") {
          value = String(value);
        }
        return value;
      }
      function iteratorFor(items) {
        var iterator = {
          next: function() {
            var value = items.shift();
            return { done: value === void 0, value };
          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function() {
            return iterator;
          };
        }
        return iterator;
      }
      function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function(value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            if (header.length != 2) {
              throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
            }
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function(name) {
            this.append(name, headers[name]);
          }, this);
        }
      }
      Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      };
      Headers.prototype["delete"] = function(name) {
        delete this.map[normalizeName(name)];
      };
      Headers.prototype.get = function(name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };
      Headers.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };
      Headers.prototype.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return iteratorFor(items);
      };
      Headers.prototype.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
        if (body._noBody) return;
        if (body.bodyUsed) {
          return Promise.reject(new TypeError("Already read"));
        }
        body.bodyUsed = true;
      }
      function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
          reader.onload = function() {
            resolve(reader.result);
          };
          reader.onerror = function() {
            reject(reader.error);
          };
        });
      }
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }
      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
        var encoding = match ? match[1] : "utf-8";
        reader.readAsText(blob, encoding);
        return promise;
      }
      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i3 = 0; i3 < view.length; i3++) {
          chars[i3] = String.fromCharCode(view[i3]);
        }
        return chars.join("");
      }
      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }
      function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
          this.bodyUsed = this.bodyUsed;
          this._bodyInit = body;
          if (!body) {
            this._noBody = true;
            this._bodyText = "";
          } else if (typeof body === "string") {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get("content-type")) {
            if (typeof body === "string") {
              this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
          }
        };
        if (support.blob) {
          this.blob = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };
        }
        this.arrayBuffer = function() {
          if (this._bodyArrayBuffer) {
            var isConsumed = consumed(this);
            if (isConsumed) {
              return isConsumed;
            } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
              return Promise.resolve(
                this._bodyArrayBuffer.buffer.slice(
                  this._bodyArrayBuffer.byteOffset,
                  this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                )
              );
            } else {
              return Promise.resolve(this._bodyArrayBuffer);
            }
          } else if (support.blob) {
            return this.blob().then(readBlobAsArrayBuffer);
          } else {
            throw new Error("could not read as ArrayBuffer");
          }
        };
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
        if (support.formData) {
          this.formData = function() {
            return this.text().then(decode2);
          };
        }
        this.json = function() {
          return this.text().then(JSON.parse);
        };
        return this;
      }
      var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        if (!(this instanceof Request)) {
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        }
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError("Already read");
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || "same-origin";
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || "GET");
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal || function() {
          if ("AbortController" in g2) {
            var ctrl = new AbortController();
            return ctrl.signal;
          }
        }();
        this.referrer = null;
        if ((this.method === "GET" || this.method === "HEAD") && body) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }
        this._initBody(body);
        if (this.method === "GET" || this.method === "HEAD") {
          if (options.cache === "no-store" || options.cache === "no-cache") {
            var reParamSearch = /([?&])_=[^&]*/;
            if (reParamSearch.test(this.url)) {
              this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
            } else {
              var reQueryString = /\?/;
              this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
            }
          }
        }
      }
      Request.prototype.clone = function() {
        return new Request(this, { body: this._bodyInit });
      };
      function decode2(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split("\r").map(function(header) {
          return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
        }).forEach(function(line) {
          var parts = line.split(":");
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(":").trim();
            try {
              headers.append(key, value);
            } catch (error) {
              console.warn("Response " + error.message);
            }
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!(this instanceof Response)) {
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        }
        if (!options) {
          options = {};
        }
        this.type = "default";
        this.status = options.status === void 0 ? 200 : options.status;
        if (this.status < 200 || this.status > 599) {
          throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
        }
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
        this.headers = new Headers(options.headers);
        this.url = options.url || "";
        this._initBody(bodyInit);
      }
      Body.call(Response.prototype);
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };
      Response.error = function() {
        var response = new Response(null, { status: 200, statusText: "" });
        response.ok = false;
        response.status = 0;
        response.type = "error";
        return response;
      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError("Invalid status code");
        }
        return new Response(null, { status, headers: { location: url } });
      };
      exports2.DOMException = g2.DOMException;
      try {
        new exports2.DOMException();
      } catch (err) {
        exports2.DOMException = function(message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };
        exports2.DOMException.prototype = Object.create(Error.prototype);
        exports2.DOMException.prototype.constructor = exports2.DOMException;
      }
      function fetch2(input, init) {
        return new Promise(function(resolve, reject) {
          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) {
            return reject(new exports2.DOMException("Aborted", "AbortError"));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function() {
            var options = {
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
              options.status = 200;
            } else {
              options.status = xhr.status;
            }
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            setTimeout(function() {
              resolve(new Response(body, options));
            }, 0);
          };
          xhr.onerror = function() {
            setTimeout(function() {
              reject(new TypeError("Network request failed"));
            }, 0);
          };
          xhr.ontimeout = function() {
            setTimeout(function() {
              reject(new TypeError("Network request timed out"));
            }, 0);
          };
          xhr.onabort = function() {
            setTimeout(function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            }, 0);
          };
          function fixUrl(url) {
            try {
              return url === "" && g2.location.href ? g2.location.href : url;
            } catch (e2) {
              return url;
            }
          }
          xhr.open(request.method, fixUrl(request.url), true);
          if (request.credentials === "include") {
            xhr.withCredentials = true;
          } else if (request.credentials === "omit") {
            xhr.withCredentials = false;
          }
          if ("responseType" in xhr) {
            if (support.blob) {
              xhr.responseType = "blob";
            } else if (support.arrayBuffer) {
              xhr.responseType = "arraybuffer";
            }
          }
          if (init && typeof init.headers === "object" && !(init.headers instanceof Headers || g2.Headers && init.headers instanceof g2.Headers)) {
            var names = [];
            Object.getOwnPropertyNames(init.headers).forEach(function(name) {
              names.push(normalizeName(name));
              xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
            });
            request.headers.forEach(function(value, name) {
              if (names.indexOf(name) === -1) {
                xhr.setRequestHeader(name, value);
              }
            });
          } else {
            request.headers.forEach(function(value, name) {
              xhr.setRequestHeader(name, value);
            });
          }
          if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                request.signal.removeEventListener("abort", abortXhr);
              }
            };
          }
          xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
        });
      }
      fetch2.polyfill = true;
      if (!g2.fetch) {
        g2.fetch = fetch2;
        g2.Headers = Headers;
        g2.Request = Request;
        g2.Response = Response;
      }
      exports2.Headers = Headers;
      exports2.Request = Request;
      exports2.Response = Response;
      exports2.fetch = fetch2;
      Object.defineProperty(exports2, "__esModule", { value: true });
      return exports2;
    })({});
  })(__globalThis__);
  __globalThis__.fetch.ponyfill = true;
  delete __globalThis__.fetch.polyfill;
  var ctx = __global__.fetch ? __global__ : __globalThis__;
  exports = ctx.fetch;
  exports.default = ctx.fetch;
  exports.fetch = ctx.fetch;
  exports.Headers = ctx.Headers;
  exports.Request = ctx.Request;
  exports.Response = ctx.Response;
  module.exports = exports;
})(browserPonyfill, browserPonyfill.exports);
var browserPonyfillExports = browserPonyfill.exports;
const o$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserPonyfillExports);
var P$1 = Object.defineProperty, w$2 = Object.defineProperties, E$1 = Object.getOwnPropertyDescriptors, c = Object.getOwnPropertySymbols, L$2 = Object.prototype.hasOwnProperty, O$2 = Object.prototype.propertyIsEnumerable, l = (r2, t, e2) => t in r2 ? P$1(r2, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : r2[t] = e2, p$1 = (r2, t) => {
  for (var e2 in t) L$2.call(t, e2) && l(r2, e2, t[e2]);
  if (c) for (var e2 of c(t)) O$2.call(t, e2) && l(r2, e2, t[e2]);
  return r2;
}, v$2 = (r2, t) => w$2(r2, E$1(t));
const j$2 = { Accept: "application/json", "Content-Type": "application/json" }, T$2 = "POST", d3 = { headers: j$2, method: T$2 }, g$2 = 10;
let f$1 = class f3 {
  constructor(t, e2 = false) {
    if (this.url = t, this.disableProviderPing = e2, this.events = new eventsExports.EventEmitter(), this.isAvailable = false, this.registering = false, !isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    this.url = t, this.disableProviderPing = e2;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || await this.register();
    try {
      const e2 = safeJsonStringify(t), s2 = await (await o$1(this.url, v$2(p$1({}, d3), { body: e2 }))).json();
      this.onPayload({ data: s2 });
    } catch (e2) {
      this.onError(t.id, e2);
    }
  }
  async register(t = this.url) {
    if (!isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const e2 = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= e2 || this.events.listenerCount("open") >= e2) && this.events.setMaxListeners(e2 + 1), new Promise((s2, i3) => {
        this.events.once("register_error", (n3) => {
          this.resetMaxListeners(), i3(n3);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u") return i3(new Error("HTTP connection is missing or invalid"));
          s2();
        });
      });
    }
    this.url = t, this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const e2 = safeJsonStringify({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await o$1(t, v$2(p$1({}, d3), { body: e2 }));
      }
      this.onOpen();
    } catch (e2) {
      const s2 = this.parseError(e2);
      throw this.events.emit("register_error", s2), this.onClose(), s2;
    }
  }
  onOpen() {
    this.isAvailable = true, this.registering = false, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = false, this.registering = false, this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const e2 = typeof t.data == "string" ? safeJsonParse(t.data) : t.data;
    this.events.emit("payload", e2);
  }
  onError(t, e2) {
    const s2 = this.parseError(e2), i3 = s2.message || s2.toString(), n3 = formatJsonRpcError(t, i3);
    this.events.emit("payload", n3);
  }
  parseError(t, e2 = this.url) {
    return parseConnectionError(t, e2, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > g$2 && this.events.setMaxListeners(g$2);
  }
};
const be = "error", _t = "wss://relay.walletconnect.org", Ct = "wc", It = "universal_provider", $e = `${Ct}@2:${It}:`, ye = "https://rpc.walletconnect.org/v1/", w$1 = "generic", Ot = `${ye}bundler`, f4 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function At() {
  this.__data__ = [], this.size = 0;
}
var jt = At;
function Ht(r2, e2) {
  return r2 === e2 || r2 !== r2 && e2 !== e2;
}
var z$1 = Ht, Et = z$1;
function St(r2, e2) {
  for (var t = r2.length; t--; ) if (Et(r2[t][0], e2)) return t;
  return -1;
}
var k = St, Nt = k, Tt = Array.prototype, Dt = Tt.splice;
function qt(r2) {
  var e2 = this.__data__, t = Nt(e2, r2);
  if (t < 0) return false;
  var i3 = e2.length - 1;
  return t == i3 ? e2.pop() : Dt.call(e2, t, 1), --this.size, true;
}
var Rt2 = qt, xt = k;
function Lt(r2) {
  var e2 = this.__data__, t = xt(e2, r2);
  return t < 0 ? void 0 : e2[t][1];
}
var Ut = Lt, Ft = k;
function Mt(r2) {
  return Ft(this.__data__, r2) > -1;
}
var Gt = Mt, zt = k;
function kt(r2, e2) {
  var t = this.__data__, i3 = zt(t, r2);
  return i3 < 0 ? (++this.size, t.push([r2, e2])) : t[i3][1] = e2, this;
}
var Bt2 = kt, Vt = jt, Jt = Rt2, Kt = Ut, Wt = Gt, Xt = Bt2;
function _$1(r2) {
  var e2 = -1, t = r2 == null ? 0 : r2.length;
  for (this.clear(); ++e2 < t; ) {
    var i3 = r2[e2];
    this.set(i3[0], i3[1]);
  }
}
_$1.prototype.clear = Vt, _$1.prototype.delete = Jt, _$1.prototype.get = Kt, _$1.prototype.has = Wt, _$1.prototype.set = Xt;
var B2 = _$1, Yt = B2;
function Zt() {
  this.__data__ = new Yt(), this.size = 0;
}
var Qt = Zt;
function er2(r2) {
  var e2 = this.__data__, t = e2.delete(r2);
  return this.size = e2.size, t;
}
var tr2 = er2;
function rr(r2) {
  return this.__data__.get(r2);
}
var ir2 = rr;
function sr2(r2) {
  return this.__data__.has(r2);
}
var nr = sr2, ar = typeof G == "object" && G && G.Object === Object && G, we = ar, or = we, cr = typeof self == "object" && self && self.Object === Object && self, hr = or || cr || Function("return this")(), C$1 = hr, pr = C$1, ur = pr.Symbol, _e2 = ur, Ce = _e2, Ie = Object.prototype, lr = Ie.hasOwnProperty, dr = Ie.toString, F = Ce ? Ce.toStringTag : void 0;
function vr(r2) {
  var e2 = lr.call(r2, F), t = r2[F];
  try {
    r2[F] = void 0;
    var i3 = true;
  } catch {
  }
  var s2 = dr.call(r2);
  return i3 && (e2 ? r2[F] = t : delete r2[F]), s2;
}
var fr = vr, mr = Object.prototype, gr = mr.toString;
function Pr(r2) {
  return gr.call(r2);
}
var br = Pr, Oe = _e2, $r = fr, yr = br, wr = "[object Null]", _r = "[object Undefined]", Ae = Oe ? Oe.toStringTag : void 0;
function Cr(r2) {
  return r2 == null ? r2 === void 0 ? _r : wr : Ae && Ae in Object(r2) ? $r(r2) : yr(r2);
}
var V2 = Cr;
function Ir(r2) {
  var e2 = typeof r2;
  return r2 != null && (e2 == "object" || e2 == "function");
}
var $$1 = Ir, Or2 = V2, Ar = $$1, jr = "[object AsyncFunction]", Hr2 = "[object Function]", Er = "[object GeneratorFunction]", Sr = "[object Proxy]";
function Nr(r2) {
  if (!Ar(r2)) return false;
  var e2 = Or2(r2);
  return e2 == Hr2 || e2 == Er || e2 == jr || e2 == Sr;
}
var te = Nr, Tr = C$1, Dr = Tr["__core-js_shared__"], qr = Dr, re = qr, je = function() {
  var r2 = /[^.]+$/.exec(re && re.keys && re.keys.IE_PROTO || "");
  return r2 ? "Symbol(src)_1." + r2 : "";
}();
function Rr(r2) {
  return !!je && je in r2;
}
var xr = Rr, Lr2 = Function.prototype, Ur = Lr2.toString;
function Fr(r2) {
  if (r2 != null) {
    try {
      return Ur.call(r2);
    } catch {
    }
    try {
      return r2 + "";
    } catch {
    }
  }
  return "";
}
var Mr = Fr, Gr = te, zr2 = xr, kr = $$1, Br = Mr, Vr = /[\\^$.*+?()[\]{}|]/g, Jr = /^\[object .+?Constructor\]$/, Kr = Function.prototype, Wr = Object.prototype, Xr = Kr.toString, Yr = Wr.hasOwnProperty, Zr = RegExp("^" + Xr.call(Yr).replace(Vr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Qr(r2) {
  if (!kr(r2) || zr2(r2)) return false;
  var e2 = Gr(r2) ? Zr : Jr;
  return e2.test(Br(r2));
}
var ei = Qr;
function ti(r2, e2) {
  return r2 == null ? void 0 : r2[e2];
}
var ri = ti, ii = ei, si = ri;
function ni(r2, e2) {
  var t = si(r2, e2);
  return ii(t) ? t : void 0;
}
var ie = ni, ai = ie, oi = C$1, ci = ai(oi, "Map"), He = ci, hi = ie, pi = hi(Object, "create"), J2 = pi, Ee = J2;
function ui() {
  this.__data__ = Ee ? Ee(null) : {}, this.size = 0;
}
var li = ui;
function di(r2) {
  var e2 = this.has(r2) && delete this.__data__[r2];
  return this.size -= e2 ? 1 : 0, e2;
}
var vi = di, fi2 = J2, mi = "__lodash_hash_undefined__", gi = Object.prototype, Pi2 = gi.hasOwnProperty;
function bi2(r2) {
  var e2 = this.__data__;
  if (fi2) {
    var t = e2[r2];
    return t === mi ? void 0 : t;
  }
  return Pi2.call(e2, r2) ? e2[r2] : void 0;
}
var $i2 = bi2, yi2 = J2, wi2 = Object.prototype, _i = wi2.hasOwnProperty;
function Ci2(r2) {
  var e2 = this.__data__;
  return yi2 ? e2[r2] !== void 0 : _i.call(e2, r2);
}
var Ii = Ci2, Oi = J2, Ai2 = "__lodash_hash_undefined__";
function ji(r2, e2) {
  var t = this.__data__;
  return this.size += this.has(r2) ? 0 : 1, t[r2] = Oi && e2 === void 0 ? Ai2 : e2, this;
}
var Hi = ji, Ei = li, Si2 = vi, Ni = $i2, Ti = Ii, Di2 = Hi;
function I2(r2) {
  var e2 = -1, t = r2 == null ? 0 : r2.length;
  for (this.clear(); ++e2 < t; ) {
    var i3 = r2[e2];
    this.set(i3[0], i3[1]);
  }
}
I2.prototype.clear = Ei, I2.prototype.delete = Si2, I2.prototype.get = Ni, I2.prototype.has = Ti, I2.prototype.set = Di2;
var qi = I2, Se2 = qi, Ri2 = B2, xi2 = He;
function Li() {
  this.size = 0, this.__data__ = { hash: new Se2(), map: new (xi2 || Ri2)(), string: new Se2() };
}
var Ui = Li;
function Fi(r2) {
  var e2 = typeof r2;
  return e2 == "string" || e2 == "number" || e2 == "symbol" || e2 == "boolean" ? r2 !== "__proto__" : r2 === null;
}
var Mi = Fi, Gi = Mi;
function zi(r2, e2) {
  var t = r2.__data__;
  return Gi(e2) ? t[typeof e2 == "string" ? "string" : "hash"] : t.map;
}
var K2 = zi, ki = K2;
function Bi(r2) {
  var e2 = ki(this, r2).delete(r2);
  return this.size -= e2 ? 1 : 0, e2;
}
var Vi = Bi, Ji = K2;
function Ki(r2) {
  return Ji(this, r2).get(r2);
}
var Wi = Ki, Xi = K2;
function Yi(r2) {
  return Xi(this, r2).has(r2);
}
var Zi2 = Yi, Qi = K2;
function es(r2, e2) {
  var t = Qi(this, r2), i3 = t.size;
  return t.set(r2, e2), this.size += t.size == i3 ? 0 : 1, this;
}
var ts = es, rs = Ui, is = Vi, ss = Wi, ns = Zi2, as = ts;
function O$1(r2) {
  var e2 = -1, t = r2 == null ? 0 : r2.length;
  for (this.clear(); ++e2 < t; ) {
    var i3 = r2[e2];
    this.set(i3[0], i3[1]);
  }
}
O$1.prototype.clear = rs, O$1.prototype.delete = is, O$1.prototype.get = ss, O$1.prototype.has = ns, O$1.prototype.set = as;
var os = O$1, cs = B2, hs = He, ps = os, us = 200;
function ls(r2, e2) {
  var t = this.__data__;
  if (t instanceof cs) {
    var i3 = t.__data__;
    if (!hs || i3.length < us - 1) return i3.push([r2, e2]), this.size = ++t.size, this;
    t = this.__data__ = new ps(i3);
  }
  return t.set(r2, e2), this.size = t.size, this;
}
var ds = ls, vs = B2, fs = Qt, ms = tr2, gs = ir2, Ps2 = nr, bs2 = ds;
function A(r2) {
  var e2 = this.__data__ = new vs(r2);
  this.size = e2.size;
}
A.prototype.clear = fs, A.prototype.delete = ms, A.prototype.get = gs, A.prototype.has = Ps2, A.prototype.set = bs2;
var $s = A, ys = ie, ws = function() {
  try {
    var r2 = ys(Object, "defineProperty");
    return r2({}, "", {}), r2;
  } catch {
  }
}(), Ne = ws, Te = Ne;
function _s(r2, e2, t) {
  e2 == "__proto__" && Te ? Te(r2, e2, { configurable: true, enumerable: true, value: t, writable: true }) : r2[e2] = t;
}
var se = _s, Cs = se, Is = z$1;
function Os2(r2, e2, t) {
  (t !== void 0 && !Is(r2[e2], t) || t === void 0 && !(e2 in r2)) && Cs(r2, e2, t);
}
var De = Os2;
function As2(r2) {
  return function(e2, t, i3) {
    for (var s2 = -1, n3 = Object(e2), a2 = i3(e2), o3 = a2.length; o3--; ) {
      var c2 = a2[r2 ? o3 : ++s2];
      if (t(n3[c2], c2, n3) === false) break;
    }
    return e2;
  };
}
var js2 = As2, Hs = js2, Es2 = Hs(), Ss = Es2, ne = { exports: {} };
(function(r2, e2) {
  var t = C$1, i3 = e2 && !e2.nodeType && e2, s2 = i3 && true && r2 && !r2.nodeType && r2, n3 = s2 && s2.exports === i3, a2 = n3 ? t.Buffer : void 0, o3 = a2 ? a2.allocUnsafe : void 0;
  function c2(u2, l2) {
    if (l2) return u2.slice();
    var P3 = u2.length, d4 = o3 ? o3(P3) : new u2.constructor(P3);
    return u2.copy(d4), d4;
  }
  r2.exports = c2;
})(ne, ne.exports);
var Ns2 = C$1, Ts2 = Ns2.Uint8Array, Ds = Ts2, qe = Ds;
function qs(r2) {
  var e2 = new r2.constructor(r2.byteLength);
  return new qe(e2).set(new qe(r2)), e2;
}
var Rs = qs, xs = Rs;
function Ls2(r2, e2) {
  var t = e2 ? xs(r2.buffer) : r2.buffer;
  return new r2.constructor(t, r2.byteOffset, r2.length);
}
var Us = Ls2;
function Fs(r2, e2) {
  var t = -1, i3 = r2.length;
  for (e2 || (e2 = Array(i3)); ++t < i3; ) e2[t] = r2[t];
  return e2;
}
var Ms = Fs, Gs = $$1, Re = Object.create, zs = /* @__PURE__ */ function() {
  function r2() {
  }
  return function(e2) {
    if (!Gs(e2)) return {};
    if (Re) return Re(e2);
    r2.prototype = e2;
    var t = new r2();
    return r2.prototype = void 0, t;
  };
}(), ks = zs;
function Bs(r2, e2) {
  return function(t) {
    return r2(e2(t));
  };
}
var Vs2 = Bs, Js = Vs2, Ks = Js(Object.getPrototypeOf, Object), xe = Ks, Ws = Object.prototype;
function Xs(r2) {
  var e2 = r2 && r2.constructor, t = typeof e2 == "function" && e2.prototype || Ws;
  return r2 === t;
}
var Le = Xs, Ys = ks, Zs = xe, Qs = Le;
function en(r2) {
  return typeof r2.constructor == "function" && !Qs(r2) ? Ys(Zs(r2)) : {};
}
var tn = en;
function rn(r2) {
  return r2 != null && typeof r2 == "object";
}
var M$1 = rn, sn = V2, nn = M$1, an = "[object Arguments]";
function on(r2) {
  return nn(r2) && sn(r2) == an;
}
var cn2 = on, Ue = cn2, hn2 = M$1, Fe = Object.prototype, pn = Fe.hasOwnProperty, un = Fe.propertyIsEnumerable, ln = Ue(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ue : function(r2) {
  return hn2(r2) && pn.call(r2, "callee") && !un.call(r2, "callee");
}, Me = ln, dn = Array.isArray, Ge = dn, vn = 9007199254740991;
function fn(r2) {
  return typeof r2 == "number" && r2 > -1 && r2 % 1 == 0 && r2 <= vn;
}
var ze = fn, mn = te, gn = ze;
function Pn(r2) {
  return r2 != null && gn(r2.length) && !mn(r2);
}
var ae = Pn, bn = ae, $n2 = M$1;
function yn(r2) {
  return $n2(r2) && bn(r2);
}
var wn = yn, W = { exports: {} };
function _n() {
  return false;
}
var Cn = _n;
(function(r2, e2) {
  var t = C$1, i3 = Cn, s2 = e2 && !e2.nodeType && e2, n3 = s2 && true && r2 && !r2.nodeType && r2, a2 = n3 && n3.exports === s2, o3 = a2 ? t.Buffer : void 0, c2 = o3 ? o3.isBuffer : void 0, u2 = c2 || i3;
  r2.exports = u2;
})(W, W.exports);
var In = V2, On2 = xe, An2 = M$1, jn = "[object Object]", Hn = Function.prototype, En = Object.prototype, ke = Hn.toString, Sn = En.hasOwnProperty, Nn = ke.call(Object);
function Tn(r2) {
  if (!An2(r2) || In(r2) != jn) return false;
  var e2 = On2(r2);
  if (e2 === null) return true;
  var t = Sn.call(e2, "constructor") && e2.constructor;
  return typeof t == "function" && t instanceof t && ke.call(t) == Nn;
}
var Dn = Tn, qn2 = V2, Rn = ze, xn2 = M$1, Ln = "[object Arguments]", Un = "[object Array]", Fn = "[object Boolean]", Mn = "[object Date]", Gn = "[object Error]", zn = "[object Function]", kn = "[object Map]", Bn = "[object Number]", Vn = "[object Object]", Jn2 = "[object RegExp]", Kn = "[object Set]", Wn = "[object String]", Xn = "[object WeakMap]", Yn = "[object ArrayBuffer]", Zn = "[object DataView]", Qn = "[object Float32Array]", ea = "[object Float64Array]", ta = "[object Int8Array]", ra = "[object Int16Array]", ia = "[object Int32Array]", sa = "[object Uint8Array]", na = "[object Uint8ClampedArray]", aa = "[object Uint16Array]", oa = "[object Uint32Array]", p = {};
p[Qn] = p[ea] = p[ta] = p[ra] = p[ia] = p[sa] = p[na] = p[aa] = p[oa] = true, p[Ln] = p[Un] = p[Yn] = p[Fn] = p[Zn] = p[Mn] = p[Gn] = p[zn] = p[kn] = p[Bn] = p[Vn] = p[Jn2] = p[Kn] = p[Wn] = p[Xn] = false;
function ca(r2) {
  return xn2(r2) && Rn(r2.length) && !!p[qn2(r2)];
}
var ha = ca;
function pa(r2) {
  return function(e2) {
    return r2(e2);
  };
}
var ua = pa, oe = { exports: {} };
(function(r2, e2) {
  var t = we, i3 = e2 && !e2.nodeType && e2, s2 = i3 && true && r2 && !r2.nodeType && r2, n3 = s2 && s2.exports === i3, a2 = n3 && t.process, o3 = function() {
    try {
      var c2 = s2 && s2.require && s2.require("util").types;
      return c2 || a2 && a2.binding && a2.binding("util");
    } catch {
    }
  }();
  r2.exports = o3;
})(oe, oe.exports);
var la = ha, da = ua, Be = oe.exports, Ve = Be && Be.isTypedArray, va = Ve ? da(Ve) : la, Je = va;
function fa(r2, e2) {
  if (!(e2 === "constructor" && typeof r2[e2] == "function") && e2 != "__proto__") return r2[e2];
}
var Ke = fa, ma = se, ga = z$1, Pa = Object.prototype, ba = Pa.hasOwnProperty;
function $a(r2, e2, t) {
  var i3 = r2[e2];
  (!(ba.call(r2, e2) && ga(i3, t)) || t === void 0 && !(e2 in r2)) && ma(r2, e2, t);
}
var ya = $a, wa = ya, _a = se;
function Ca(r2, e2, t, i3) {
  var s2 = !t;
  t || (t = {});
  for (var n3 = -1, a2 = e2.length; ++n3 < a2; ) {
    var o3 = e2[n3], c2 = i3 ? i3(t[o3], r2[o3], o3, t, r2) : void 0;
    c2 === void 0 && (c2 = r2[o3]), s2 ? _a(t, o3, c2) : wa(t, o3, c2);
  }
  return t;
}
var Ia = Ca;
function Oa(r2, e2) {
  for (var t = -1, i3 = Array(r2); ++t < r2; ) i3[t] = e2(t);
  return i3;
}
var Aa = Oa, ja = 9007199254740991, Ha = /^(?:0|[1-9]\d*)$/;
function Ea(r2, e2) {
  var t = typeof r2;
  return e2 = e2 ?? ja, !!e2 && (t == "number" || t != "symbol" && Ha.test(r2)) && r2 > -1 && r2 % 1 == 0 && r2 < e2;
}
var We = Ea, Sa = Aa, Na = Me, Ta = Ge, Da = W.exports, qa = We, Ra = Je, xa = Object.prototype, La = xa.hasOwnProperty;
function Ua(r2, e2) {
  var t = Ta(r2), i3 = !t && Na(r2), s2 = !t && !i3 && Da(r2), n3 = !t && !i3 && !s2 && Ra(r2), a2 = t || i3 || s2 || n3, o3 = a2 ? Sa(r2.length, String) : [], c2 = o3.length;
  for (var u2 in r2) (e2 || La.call(r2, u2)) && !(a2 && (u2 == "length" || s2 && (u2 == "offset" || u2 == "parent") || n3 && (u2 == "buffer" || u2 == "byteLength" || u2 == "byteOffset") || qa(u2, c2))) && o3.push(u2);
  return o3;
}
var Fa = Ua;
function Ma(r2) {
  var e2 = [];
  if (r2 != null) for (var t in Object(r2)) e2.push(t);
  return e2;
}
var Ga = Ma, za = $$1, ka = Le, Ba = Ga, Va = Object.prototype, Ja = Va.hasOwnProperty;
function Ka(r2) {
  if (!za(r2)) return Ba(r2);
  var e2 = ka(r2), t = [];
  for (var i3 in r2) i3 == "constructor" && (e2 || !Ja.call(r2, i3)) || t.push(i3);
  return t;
}
var Wa = Ka, Xa = Fa, Ya = Wa, Za = ae;
function Qa(r2) {
  return Za(r2) ? Xa(r2, true) : Ya(r2);
}
var Xe = Qa, eo = Ia, to = Xe;
function ro(r2) {
  return eo(r2, to(r2));
}
var io = ro, Ye = De, so = ne.exports, no = Us, ao = Ms, oo = tn, Ze = Me, Qe = Ge, co = wn, ho = W.exports, po = te, uo = $$1, lo = Dn, vo = Je, et = Ke, fo = io;
function mo(r2, e2, t, i3, s2, n3, a2) {
  var o3 = et(r2, t), c2 = et(e2, t), u2 = a2.get(c2);
  if (u2) {
    Ye(r2, t, u2);
    return;
  }
  var l2 = n3 ? n3(o3, c2, t + "", r2, e2, a2) : void 0, P3 = l2 === void 0;
  if (P3) {
    var d4 = Qe(c2), Q2 = !d4 && ho(c2), ve2 = !d4 && !Q2 && vo(c2);
    l2 = c2, d4 || Q2 || ve2 ? Qe(o3) ? l2 = o3 : co(o3) ? l2 = ao(o3) : Q2 ? (P3 = false, l2 = so(c2, true)) : ve2 ? (P3 = false, l2 = no(c2, true)) : l2 = [] : lo(c2) || Ze(c2) ? (l2 = o3, Ze(o3) ? l2 = fo(o3) : (!uo(o3) || po(o3)) && (l2 = oo(c2))) : P3 = false;
  }
  P3 && (a2.set(c2, l2), s2(l2, c2, i3, n3, a2), a2.delete(c2)), Ye(r2, t, l2);
}
var go = mo, Po = $s, bo = De, $o = Ss, yo = go, wo = $$1, _o = Xe, Co = Ke;
function tt(r2, e2, t, i3, s2) {
  r2 !== e2 && $o(e2, function(n3, a2) {
    if (s2 || (s2 = new Po()), wo(n3)) yo(r2, e2, a2, t, tt, i3, s2);
    else {
      var o3 = i3 ? i3(Co(r2, a2), n3, a2 + "", r2, e2, s2) : void 0;
      o3 === void 0 && (o3 = n3), bo(r2, a2, o3);
    }
  }, _o);
}
var Io = tt;
function Oo(r2) {
  return r2;
}
var rt = Oo;
function Ao(r2, e2, t) {
  switch (t.length) {
    case 0:
      return r2.call(e2);
    case 1:
      return r2.call(e2, t[0]);
    case 2:
      return r2.call(e2, t[0], t[1]);
    case 3:
      return r2.call(e2, t[0], t[1], t[2]);
  }
  return r2.apply(e2, t);
}
var jo2 = Ao, Ho = jo2, it2 = Math.max;
function Eo(r2, e2, t) {
  return e2 = it2(e2 === void 0 ? r2.length - 1 : e2, 0), function() {
    for (var i3 = arguments, s2 = -1, n3 = it2(i3.length - e2, 0), a2 = Array(n3); ++s2 < n3; ) a2[s2] = i3[e2 + s2];
    s2 = -1;
    for (var o3 = Array(e2 + 1); ++s2 < e2; ) o3[s2] = i3[s2];
    return o3[e2] = t(a2), Ho(r2, this, o3);
  };
}
var So = Eo;
function No(r2) {
  return function() {
    return r2;
  };
}
var To = No, Do = To, st = Ne, qo = rt, Ro2 = st ? function(r2, e2) {
  return st(r2, "toString", { configurable: true, enumerable: false, value: Do(e2), writable: true });
} : qo, xo = Ro2, Lo = 800, Uo = 16, Fo = Date.now;
function Mo(r2) {
  var e2 = 0, t = 0;
  return function() {
    var i3 = Fo(), s2 = Uo - (i3 - t);
    if (t = i3, s2 > 0) {
      if (++e2 >= Lo) return arguments[0];
    } else e2 = 0;
    return r2.apply(void 0, arguments);
  };
}
var Go = Mo, zo = xo, ko = Go, Bo = ko(zo), Vo = Bo, Jo = rt, Ko = So, Wo = Vo;
function Xo(r2, e2) {
  return Wo(Ko(r2, e2, Jo), r2 + "");
}
var Yo = Xo, Zo = z$1, Qo = ae, ec = We, tc = $$1;
function rc(r2, e2, t) {
  if (!tc(t)) return false;
  var i3 = typeof e2;
  return (i3 == "number" ? Qo(t) && ec(e2, t.length) : i3 == "string" && e2 in t) ? Zo(t[e2], r2) : false;
}
var ic = rc, sc = Yo, nc = ic;
function ac(r2) {
  return sc(function(e2, t) {
    var i3 = -1, s2 = t.length, n3 = s2 > 1 ? t[s2 - 1] : void 0, a2 = s2 > 2 ? t[2] : void 0;
    for (n3 = r2.length > 3 && typeof n3 == "function" ? (s2--, n3) : void 0, a2 && nc(t[0], t[1], a2) && (n3 = s2 < 3 ? void 0 : n3, s2 = 1), e2 = Object(e2); ++i3 < s2; ) {
      var o3 = t[i3];
      o3 && r2(e2, o3, i3, n3);
    }
    return e2;
  });
}
var oc = ac, cc = Io, hc = oc, pc = hc(function(r2, e2, t) {
  cc(r2, e2, t);
}), uc = pc, lc = Object.defineProperty, dc = Object.defineProperties, vc = Object.getOwnPropertyDescriptors, nt = Object.getOwnPropertySymbols, fc = Object.prototype.hasOwnProperty, mc = Object.prototype.propertyIsEnumerable, at = (r2, e2, t) => e2 in r2 ? lc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, X = (r2, e2) => {
  for (var t in e2 || (e2 = {})) fc.call(e2, t) && at(r2, t, e2[t]);
  if (nt) for (var t of nt(e2)) mc.call(e2, t) && at(r2, t, e2[t]);
  return r2;
}, gc = (r2, e2) => dc(r2, vc(e2));
function v$1(r2, e2, t) {
  var i3;
  const s2 = Ye$1(r2);
  return ((i3 = e2.rpcMap) == null ? void 0 : i3[s2.reference]) || `${ye}?chainId=${s2.namespace}:${s2.reference}&projectId=${t}`;
}
function y$1(r2) {
  return r2.includes(":") ? r2.split(":")[1] : r2;
}
function ot(r2) {
  return r2.map((e2) => `${e2.split(":")[0]}:${e2.split(":")[1]}`);
}
function Pc(r2, e2) {
  const t = Object.keys(e2.namespaces).filter((s2) => s2.includes(r2));
  if (!t.length) return [];
  const i3 = [];
  return t.forEach((s2) => {
    const n3 = e2.namespaces[s2].accounts;
    i3.push(...n3);
  }), i3;
}
function ce(r2 = {}, e2 = {}) {
  const t = ct(r2), i3 = ct(e2);
  return uc(t, i3);
}
function ct(r2) {
  var e2, t, i3, s2;
  const n3 = {};
  if (!qe$2(r2)) return n3;
  for (const [a2, o3] of Object.entries(r2)) {
    const c2 = Tt$2(a2) ? [a2] : o3.chains, u2 = o3.methods || [], l2 = o3.events || [], P3 = o3.rpcMap || {}, d4 = pr$2(a2);
    n3[d4] = gc(X(X({}, n3[d4]), o3), { chains: Q$2(c2, (e2 = n3[d4]) == null ? void 0 : e2.chains), methods: Q$2(u2, (t = n3[d4]) == null ? void 0 : t.methods), events: Q$2(l2, (i3 = n3[d4]) == null ? void 0 : i3.events), rpcMap: X(X({}, P3), (s2 = n3[d4]) == null ? void 0 : s2.rpcMap) });
  }
  return n3;
}
function bc(r2) {
  return r2.includes(":") ? r2.split(":")[2] : r2;
}
function ht(r2) {
  const e2 = {};
  for (const [t, i3] of Object.entries(r2)) {
    const s2 = i3.methods || [], n3 = i3.events || [], a2 = i3.accounts || [], o3 = Tt$2(t) ? [t] : i3.chains ? i3.chains : ot(i3.accounts);
    e2[t] = { chains: o3, methods: s2, events: n3, accounts: a2 };
  }
  return e2;
}
function he(r2) {
  return typeof r2 == "number" ? r2 : r2.includes("0x") ? parseInt(r2, 16) : (r2 = r2.includes(":") ? r2.split(":")[1] : r2, isNaN(Number(r2)) ? r2 : Number(r2));
}
const pt = {}, h3 = (r2) => pt[r2], pe = (r2, e2) => {
  pt[r2] = e2;
};
var $c = Object.defineProperty, yc = (r2, e2, t) => e2 in r2 ? $c(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, j$1 = (r2, e2, t) => yc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class wc {
  constructor(e2) {
    j$1(this, "name", "polkadot"), j$1(this, "client"), j$1(this, "httpProviders"), j$1(this, "events"), j$1(this, "namespace"), j$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var _c = Object.defineProperty, Cc = Object.defineProperties, Ic = Object.getOwnPropertyDescriptors, ut = Object.getOwnPropertySymbols, Oc = Object.prototype.hasOwnProperty, Ac = Object.prototype.propertyIsEnumerable, ue = (r2, e2, t) => e2 in r2 ? _c(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, lt = (r2, e2) => {
  for (var t in e2 || (e2 = {})) Oc.call(e2, t) && ue(r2, t, e2[t]);
  if (ut) for (var t of ut(e2)) Ac.call(e2, t) && ue(r2, t, e2[t]);
  return r2;
}, dt = (r2, e2) => Cc(r2, Ic(e2)), H = (r2, e2, t) => ue(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class jc {
  constructor(e2) {
    H(this, "name", "eip155"), H(this, "client"), H(this, "chainId"), H(this, "namespace"), H(this, "httpProviders"), H(this, "events"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(e2) {
    switch (e2.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e2);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(e2);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(e2);
    }
    return this.namespace.methods.includes(e2.request.method) ? await this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(parseInt(e2), t), this.chainId = parseInt(e2), this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(`${this.name}:${e2}`, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = parseInt(y$1(t));
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const e2 = this.chainId, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  async handleSwitchChain(e2) {
    var t, i3;
    let s2 = e2.request.params ? (t = e2.request.params[0]) == null ? void 0 : t.chainId : "0x0";
    s2 = s2.startsWith("0x") ? s2 : `0x${s2}`;
    const n3 = parseInt(s2, 16);
    if (this.isChainApproved(n3)) this.setDefaultChain(`${n3}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: e2.topic, request: { method: e2.request.method, params: [{ chainId: s2 }] }, chainId: (i3 = this.namespace.chains) == null ? void 0 : i3[0] }), this.setDefaultChain(`${n3}`);
    else throw new Error(`Failed to switch to chain 'eip155:${n3}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e2) {
    return this.namespace.chains.includes(`${this.name}:${e2}`);
  }
  async getCapabilities(e2) {
    var t, i3, s2;
    const n3 = (i3 = (t = e2.request) == null ? void 0 : t.params) == null ? void 0 : i3[0];
    if (!n3) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const a2 = this.client.session.get(e2.topic), o3 = ((s2 = a2 == null ? void 0 : a2.sessionProperties) == null ? void 0 : s2.capabilities) || {};
    if (o3 != null && o3[n3]) return o3 == null ? void 0 : o3[n3];
    const c2 = await this.client.request(e2);
    try {
      await this.client.session.update(e2.topic, { sessionProperties: dt(lt({}, a2.sessionProperties || {}), { capabilities: dt(lt({}, o3 || {}), { [n3]: c2 }) }) });
    } catch (u2) {
      console.warn("Failed to update session with capabilities", u2);
    }
    return c2;
  }
  async getCallStatus(e2) {
    var t, i3;
    const s2 = this.client.session.get(e2.topic), n3 = (t = s2.sessionProperties) == null ? void 0 : t.bundler_name;
    if (n3) {
      const o3 = this.getBundlerUrl(e2.chainId, n3);
      try {
        return await this.getUserOperationReceipt(o3, e2);
      } catch (c2) {
        console.warn("Failed to fetch call status from bundler", c2, o3);
      }
    }
    const a2 = (i3 = s2.sessionProperties) == null ? void 0 : i3.bundler_url;
    if (a2) try {
      return await this.getUserOperationReceipt(a2, e2);
    } catch (o3) {
      console.warn("Failed to fetch call status from custom bundler", o3, a2);
    }
    if (this.namespace.methods.includes(e2.request.method)) return await this.client.request(e2);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(e2, t) {
    var i3;
    const s2 = new URL(e2), n3 = await fetch(s2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt", [(i3 = t.request.params) == null ? void 0 : i3[0]])) });
    if (!n3.ok) throw new Error(`Failed to fetch user operation receipt - ${n3.status}`);
    return await n3.json();
  }
  getBundlerUrl(e2, t) {
    return `${Ot}?projectId=${this.client.core.projectId}&chainId=${e2}&bundler=${t}`;
  }
}
var Hc = Object.defineProperty, Ec = (r2, e2, t) => e2 in r2 ? Hc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, E = (r2, e2, t) => Ec(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Sc {
  constructor(e2) {
    E(this, "name", "solana"), E(this, "client"), E(this, "httpProviders"), E(this, "events"), E(this, "namespace"), E(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var Nc = Object.defineProperty, Tc = (r2, e2, t) => e2 in r2 ? Nc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, S2 = (r2, e2, t) => Tc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Dc {
  constructor(e2) {
    S2(this, "name", "cosmos"), S2(this, "client"), S2(this, "httpProviders"), S2(this, "events"), S2(this, "namespace"), S2(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var qc = Object.defineProperty, Rc = (r2, e2, t) => e2 in r2 ? qc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, N$1 = (r2, e2, t) => Rc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class xc {
  constructor(e2) {
    N$1(this, "name", "algorand"), N$1(this, "client"), N$1(this, "httpProviders"), N$1(this, "events"), N$1(this, "namespace"), N$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    if (!this.httpProviders[e2]) {
      const i3 = t || v$1(`${this.name}:${e2}`, this.namespace, this.client.core.projectId);
      if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
      this.setHttpProvider(e2, i3);
    }
    this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      e2[t] = this.createHttpProvider(t, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    return typeof i3 > "u" ? void 0 : new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var Lc = Object.defineProperty, Uc = (r2, e2, t) => e2 in r2 ? Lc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, T$1 = (r2, e2, t) => Uc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Fc {
  constructor(e2) {
    T$1(this, "name", "cip34"), T$1(this, "client"), T$1(this, "httpProviders"), T$1(this, "events"), T$1(this, "namespace"), T$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      const i3 = this.getCardanoRPCUrl(t), s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, i3);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  getCardanoRPCUrl(e2) {
    const t = this.namespace.rpcMap;
    if (t) return t[e2];
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || this.getCardanoRPCUrl(e2);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var Mc = Object.defineProperty, Gc = (r2, e2, t) => e2 in r2 ? Mc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, D$1 = (r2, e2, t) => Gc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class zc {
  constructor(e2) {
    D$1(this, "name", "elrond"), D$1(this, "client"), D$1(this, "httpProviders"), D$1(this, "events"), D$1(this, "namespace"), D$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var kc = Object.defineProperty, Bc = (r2, e2, t) => e2 in r2 ? kc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, q$1 = (r2, e2, t) => Bc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Vc {
  constructor(e2) {
    q$1(this, "name", "multiversx"), q$1(this, "client"), q$1(this, "httpProviders"), q$1(this, "events"), q$1(this, "namespace"), q$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      const s2 = y$1(t);
      e2[s2] = this.createHttpProvider(s2, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var Jc = Object.defineProperty, Kc = (r2, e2, t) => e2 in r2 ? Jc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, R2 = (r2, e2, t) => Kc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Wc {
  constructor(e2) {
    R2(this, "name", "near"), R2(this, "client"), R2(this, "httpProviders"), R2(this, "events"), R2(this, "namespace"), R2(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    if (this.chainId = e2, !this.httpProviders[e2]) {
      const i3 = t || v$1(`${this.name}:${e2}`, this.namespace);
      if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
      this.setHttpProvider(e2, i3);
    }
    this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      var i3;
      e2[t] = this.createHttpProvider(t, (i3 = this.namespace.rpcMap) == null ? void 0 : i3[t]);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace);
    return typeof i3 > "u" ? void 0 : new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var Xc = Object.defineProperty, Yc = (r2, e2, t) => e2 in r2 ? Xc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, x$1 = (r2, e2, t) => Yc(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Zc {
  constructor(e2) {
    x$1(this, "name", "tezos"), x$1(this, "client"), x$1(this, "httpProviders"), x$1(this, "events"), x$1(this, "namespace"), x$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace = Object.assign(this.namespace, e2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider().request(e2.request);
  }
  setDefaultChain(e2, t) {
    if (this.chainId = e2, !this.httpProviders[e2]) {
      const i3 = t || v$1(`${this.name}:${e2}`, this.namespace);
      if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
      this.setHttpProvider(e2, i3);
    }
    this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e2 = {};
    return this.namespace.chains.forEach((t) => {
      e2[t] = this.createHttpProvider(t);
    }), e2;
  }
  getHttpProvider() {
    const e2 = `${this.name}:${this.chainId}`, t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace);
    return typeof i3 > "u" ? void 0 : new o$2(new f$1(i3));
  }
}
var Qc = Object.defineProperty, eh = (r2, e2, t) => e2 in r2 ? Qc(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, L$1 = (r2, e2, t) => eh(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class th {
  constructor(e2) {
    L$1(this, "name", w$1), L$1(this, "client"), L$1(this, "httpProviders"), L$1(this, "events"), L$1(this, "namespace"), L$1(this, "chainId"), this.namespace = e2.namespace, this.events = h3("events"), this.client = h3("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e2) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e2.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e2.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e2.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(e2.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e2) {
    return this.namespace.methods.includes(e2.request.method) ? this.client.request(e2) : this.getHttpProvider(e2.chainId).request(e2.request);
  }
  setDefaultChain(e2, t) {
    this.httpProviders[e2] || this.setHttpProvider(e2, t), this.chainId = e2, this.events.emit(f4.DEFAULT_CHAIN_CHANGED, `${this.name}:${e2}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e2 = this.namespace.chains[0];
    if (!e2) throw new Error("ChainId not found");
    return e2.split(":")[1];
  }
  getAccounts() {
    const e2 = this.namespace.accounts;
    return e2 ? [...new Set(e2.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var e2, t;
    const i3 = {};
    return (t = (e2 = this.namespace) == null ? void 0 : e2.accounts) == null || t.forEach((s2) => {
      const n3 = Ye$1(s2);
      i3[`${n3.namespace}:${n3.reference}`] = this.createHttpProvider(s2);
    }), i3;
  }
  getHttpProvider(e2) {
    const t = this.httpProviders[e2];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e2} not found`);
    return t;
  }
  setHttpProvider(e2, t) {
    const i3 = this.createHttpProvider(e2, t);
    i3 && (this.httpProviders[e2] = i3);
  }
  createHttpProvider(e2, t) {
    const i3 = t || v$1(e2, this.namespace, this.client.core.projectId);
    if (!i3) throw new Error(`No RPC url provided for chainId: ${e2}`);
    return new o$2(new f$1(i3, h3("disableProviderPing")));
  }
}
var rh = Object.defineProperty, ih = Object.defineProperties, sh = Object.getOwnPropertyDescriptors, vt = Object.getOwnPropertySymbols, nh = Object.prototype.hasOwnProperty, ah = Object.prototype.propertyIsEnumerable, le = (r2, e2, t) => e2 in r2 ? rh(r2, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e2] = t, Y = (r2, e2) => {
  for (var t in e2 || (e2 = {})) nh.call(e2, t) && le(r2, t, e2[t]);
  if (vt) for (var t of vt(e2)) ah.call(e2, t) && le(r2, t, e2[t]);
  return r2;
}, de = (r2, e2) => ih(r2, sh(e2)), g$1 = (r2, e2, t) => le(r2, typeof e2 != "symbol" ? e2 + "" : e2, t);
class Z {
  constructor(e2) {
    g$1(this, "client"), g$1(this, "namespaces"), g$1(this, "optionalNamespaces"), g$1(this, "sessionProperties"), g$1(this, "events", new wt$4()), g$1(this, "rpcProviders", {}), g$1(this, "session"), g$1(this, "providerOpts"), g$1(this, "logger"), g$1(this, "uri"), g$1(this, "disableProviderPing", false), this.providerOpts = e2, this.logger = typeof (e2 == null ? void 0 : e2.logger) < "u" && typeof (e2 == null ? void 0 : e2.logger) != "string" ? e2.logger : gt$1(k$2({ level: (e2 == null ? void 0 : e2.logger) || be })), this.disableProviderPing = (e2 == null ? void 0 : e2.disableProviderPing) || false;
  }
  static async init(e2) {
    const t = new Z(e2);
    return await t.initialize(), t;
  }
  async request(e2, t, i3) {
    const [s2, n3] = this.validateChain(t);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(s2).request({ request: Y({}, e2), chainId: `${s2}:${n3}`, topic: this.session.topic, expiry: i3 });
  }
  sendAsync(e2, t, i3, s2) {
    const n3 = (/* @__PURE__ */ new Date()).getTime();
    this.request(e2, i3, s2).then((a2) => t(null, formatJsonRpcResult(n3, a2))).catch((a2) => t(a2, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e2;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e2 = this.session) == null ? void 0 : e2.topic, reason: de$2("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e2) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e2), await this.cleanupPendingPairings(), !e2.skipPairing) return await this.pair(e2.pairingTopic);
  }
  async authenticate(e2, t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e2), await this.cleanupPendingPairings();
    const { uri: i3, response: s2 } = await this.client.authenticate(e2, t);
    i3 && (this.uri = i3, this.events.emit("display_uri", i3));
    const n3 = await s2();
    if (this.session = n3.session, this.session) {
      const a2 = ht(this.session.namespaces);
      this.namespaces = ce(this.namespaces, a2), this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return n3;
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(e2) {
    const { uri: t, approval: i3 } = await this.client.connect({ pairingTopic: e2, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
    t && (this.uri = t, this.events.emit("display_uri", t));
    const s2 = await i3();
    this.session = s2;
    const n3 = ht(s2.namespaces);
    return this.namespaces = ce(this.namespaces, n3), this.persist("namespaces", this.namespaces), this.onConnect(), this.session;
  }
  setDefaultChain(e2, t) {
    try {
      if (!this.session) return;
      const [i3, s2] = this.validateChain(e2), n3 = this.getProvider(i3);
      n3.name === w$1 ? n3.setDefaultChain(`${i3}:${s2}`, t) : n3.setDefaultChain(s2, t);
    } catch (i3) {
      if (!/Please call connect/.test(i3.message)) throw i3;
    }
  }
  async cleanupPendingPairings(e2 = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if ($e$3(t)) {
      for (const i3 of t) e2.deletePairings ? this.client.core.expirer.set(i3.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i3.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const e2 = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[e2]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await Se$1.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || be, relayUrl: this.providerOpts.relayUrl || _t, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const e2 = [...new Set(Object.keys(this.session.namespaces).map((t) => pr$2(t)))];
    pe("client", this.client), pe("events", this.events), pe("disableProviderPing", this.disableProviderPing), e2.forEach((t) => {
      if (!this.session) return;
      const i3 = Pc(t, this.session), s2 = ot(i3), n3 = ce(this.namespaces, this.optionalNamespaces), a2 = de(Y({}, n3[t]), { accounts: i3, chains: s2 });
      switch (t) {
        case "eip155":
          this.rpcProviders[t] = new jc({ namespace: a2 });
          break;
        case "algorand":
          this.rpcProviders[t] = new xc({ namespace: a2 });
          break;
        case "solana":
          this.rpcProviders[t] = new Sc({ namespace: a2 });
          break;
        case "cosmos":
          this.rpcProviders[t] = new Dc({ namespace: a2 });
          break;
        case "polkadot":
          this.rpcProviders[t] = new wc({ namespace: a2 });
          break;
        case "cip34":
          this.rpcProviders[t] = new Fc({ namespace: a2 });
          break;
        case "elrond":
          this.rpcProviders[t] = new zc({ namespace: a2 });
          break;
        case "multiversx":
          this.rpcProviders[t] = new Vc({ namespace: a2 });
          break;
        case "near":
          this.rpcProviders[t] = new Wc({ namespace: a2 });
          break;
        case "tezos":
          this.rpcProviders[t] = new Zc({ namespace: a2 });
          break;
        default:
          this.rpcProviders[w$1] ? this.rpcProviders[w$1].updateNamespace(a2) : this.rpcProviders[w$1] = new th({ namespace: a2 });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e2) => {
      this.events.emit("session_ping", e2);
    }), this.client.on("session_event", (e2) => {
      const { params: t } = e2, { event: i3 } = t;
      if (i3.name === "accountsChanged") {
        const s2 = i3.data;
        s2 && $e$3(s2) && this.events.emit("accountsChanged", s2.map(bc));
      } else if (i3.name === "chainChanged") {
        const s2 = t.chainId, n3 = t.event.data, a2 = pr$2(s2), o3 = he(s2) !== he(n3) ? `${a2}:${he(n3)}` : s2;
        this.onChainChanged(o3);
      } else this.events.emit(i3.name, i3.data);
      this.events.emit("session_event", e2);
    }), this.client.on("session_update", ({ topic: e2, params: t }) => {
      var i3;
      const { namespaces: s2 } = t, n3 = (i3 = this.client) == null ? void 0 : i3.session.get(e2);
      this.session = de(Y({}, n3), { namespaces: s2 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e2, params: t });
    }), this.client.on("session_delete", async (e2) => {
      await this.cleanup(), this.events.emit("session_delete", e2), this.events.emit("disconnect", de(Y({}, de$2("USER_DISCONNECTED")), { data: e2.topic }));
    }), this.on(f4.DEFAULT_CHAIN_CHANGED, (e2) => {
      this.onChainChanged(e2, true);
    });
  }
  getProvider(e2) {
    return this.rpcProviders[e2] || this.rpcProviders[w$1];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e2) => {
      var t;
      this.getProvider(e2).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e2]);
    });
  }
  setNamespaces(e2) {
    const { namespaces: t, optionalNamespaces: i3, sessionProperties: s2 } = e2;
    t && Object.keys(t).length && (this.namespaces = t), i3 && Object.keys(i3).length && (this.optionalNamespaces = i3), this.sessionProperties = s2, this.persist("namespaces", t), this.persist("optionalNamespaces", i3);
  }
  validateChain(e2) {
    const [t, i3] = (e2 == null ? void 0 : e2.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, i3];
    if (t && !Object.keys(this.namespaces || {}).map((a2) => pr$2(a2)).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
    if (t && i3) return [t, i3];
    const s2 = pr$2(Object.keys(this.namespaces)[0]), n3 = this.rpcProviders[s2].getDefaultChain();
    return [s2, n3];
  }
  async requestAccounts() {
    const [e2] = this.validateChain();
    return await this.getProvider(e2).requestAccounts();
  }
  onChainChanged(e2, t = false) {
    if (!this.namespaces) return;
    const [i3, s2] = this.validateChain(e2);
    s2 && (t || this.getProvider(i3).setDefaultChain(s2), this.namespaces[i3] ? this.namespaces[i3].defaultChain = s2 : this.namespaces[`${i3}:${s2}`] ? this.namespaces[`${i3}:${s2}`].defaultChain = s2 : this.namespaces[`${i3}:${s2}`] = { defaultChain: s2 }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", s2));
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: true });
  }
  persist(e2, t) {
    this.client.core.storage.setItem(`${$e}/${e2}`, t);
  }
  async getFromStore(e2) {
    return await this.client.core.storage.getItem(`${$e}/${e2}`);
  }
}
const oh = Z;
const T = "wc", $ = "ethereum_provider", j = `${T}@2:${$}:`, q = "https://rpc.walletconnect.org/v1/", u = ["eth_sendTransaction", "personal_sign"], M2 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"], m3 = ["chainChanged", "accountsChanged"], O3 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var N = Object.defineProperty, D = Object.defineProperties, U = Object.getOwnPropertyDescriptors, P2 = Object.getOwnPropertySymbols, Q = Object.prototype.hasOwnProperty, L2 = Object.prototype.propertyIsEnumerable, y2 = (a2, t, s2) => t in a2 ? N(a2, t, { enumerable: true, configurable: true, writable: true, value: s2 }) : a2[t] = s2, g = (a2, t) => {
  for (var s2 in t || (t = {})) Q.call(t, s2) && y2(a2, s2, t[s2]);
  if (P2) for (var s2 of P2(t)) L2.call(t, s2) && y2(a2, s2, t[s2]);
  return a2;
}, _2 = (a2, t) => D(a2, U(t)), o2 = (a2, t, s2) => y2(a2, typeof t != "symbol" ? t + "" : t, s2);
function v(a2) {
  return Number(a2[0].split(":")[1]);
}
function C(a2) {
  return `0x${a2.toString(16)}`;
}
function x(a2) {
  const { chains: t, optionalChains: s2, methods: i3, optionalMethods: e2, events: n3, optionalEvents: h4, rpcMap: l2 } = a2;
  if (!$e$3(t)) throw new Error("Invalid chains");
  const r2 = { chains: t, methods: i3 || u, events: n3 || m3, rpcMap: g({}, t.length ? { [v(t)]: l2[v(t)] } : {}) }, c2 = n3 == null ? void 0 : n3.filter((d4) => !m3.includes(d4)), p2 = i3 == null ? void 0 : i3.filter((d4) => !u.includes(d4));
  if (!s2 && !h4 && !e2 && !(c2 != null && c2.length) && !(p2 != null && p2.length)) return { required: t.length ? r2 : void 0 };
  const I3 = (c2 == null ? void 0 : c2.length) && (p2 == null ? void 0 : p2.length) || !s2, f5 = { chains: [...new Set(I3 ? r2.chains.concat(s2 || []) : s2)], methods: [...new Set(r2.methods.concat(e2 != null && e2.length ? e2 : M2))], events: [...new Set(r2.events.concat(h4 != null && h4.length ? h4 : O3))], rpcMap: l2 };
  return { required: t.length ? r2 : void 0, optional: s2.length ? f5 : void 0 };
}
class w {
  constructor() {
    o2(this, "events", new eventsExports.EventEmitter()), o2(this, "namespace", "eip155"), o2(this, "accounts", []), o2(this, "signer"), o2(this, "chainId", 1), o2(this, "modal"), o2(this, "rpc"), o2(this, "STORAGE_KEY", j), o2(this, "on", (t, s2) => (this.events.on(t, s2), this)), o2(this, "once", (t, s2) => (this.events.once(t, s2), this)), o2(this, "removeListener", (t, s2) => (this.events.removeListener(t, s2), this)), o2(this, "off", (t, s2) => (this.events.off(t, s2), this)), o2(this, "parseAccount", (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t), this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s2 = new w();
    return await s2.initialize(t), s2;
  }
  async request(t, s2) {
    return await this.signer.request(t, this.formatChainId(this.chainId), s2);
  }
  sendAsync(t, s2, i3) {
    this.signer.sendAsync(t, s2, this.formatChainId(this.chainId), i3);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s2, optional: i3 } = x(this.rpc);
    try {
      const e2 = await new Promise(async (h4, l2) => {
        var r2;
        this.rpc.showQrModal && ((r2 = this.modal) == null || r2.subscribeModal((c2) => {
          !c2.open && !this.signer.session && (this.signer.abortPairingAttempt(), l2(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(_2(g({ namespaces: g({}, s2 && { [this.namespace]: s2 }) }, i3 && { optionalNamespaces: { [this.namespace]: i3 } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((c2) => {
          h4(c2);
        }).catch((c2) => {
          l2(new Error(c2.message));
        });
      });
      if (!e2) return;
      const n3 = Hr$2(e2.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n3), this.setAccounts(n3), this.events.emit("connect", { chainId: C(this.chainId) });
    } catch (e2) {
      throw this.signer.logger.error(e2), e2;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(t, s2) {
    if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: t == null ? void 0 : t.chains });
    try {
      const i3 = await new Promise(async (n3, h4) => {
        var l2;
        this.rpc.showQrModal && ((l2 = this.modal) == null || l2.subscribeModal((r2) => {
          !r2.open && !this.signer.session && (this.signer.abortPairingAttempt(), h4(new Error("Connection request reset. Please try again.")));
        })), await this.signer.authenticate(_2(g({}, t), { chains: this.rpc.chains }), s2).then((r2) => {
          n3(r2);
        }).catch((r2) => {
          h4(new Error(r2.message));
        });
      }), e2 = i3.session;
      if (e2) {
        const n3 = Hr$2(e2.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n3), this.setAccounts(n3), this.events.emit("connect", { chainId: C(this.chainId) });
      }
      return i3;
    } catch (i3) {
      throw this.signer.logger.error(i3), i3;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: s2 } = t, { event: i3 } = s2;
      i3.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i3.data), this.events.emit("accountsChanged", this.accounts)) : i3.name === "chainChanged" ? this.setChainId(this.formatChainId(i3.data)) : this.events.emit(i3.name, i3.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const s2 = parseInt(t);
      this.chainId = s2, this.events.emit("chainChanged", C(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", _2(g({}, de$2("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var s2, i3;
      this.rpc.showQrModal && ((s2 = this.modal) == null || s2.closeModal(), (i3 = this.modal) == null || i3.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const s2 = t.filter((i3) => this.isCompatibleChainId(i3)).map((i3) => this.parseChainId(i3));
    s2.length && (this.chainId = s2[0], this.events.emit("chainChanged", C(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const s2 = this.parseChainId(t);
      this.chainId = s2, this.switchEthereumChain(s2);
    }
  }
  parseAccountId(t) {
    const [s2, i3, e2] = t.split(":");
    return { chainId: `${s2}:${i3}`, address: e2 };
  }
  setAccounts(t) {
    this.accounts = t.filter((s2) => this.parseChainId(this.parseAccountId(s2).chainId) === this.chainId).map((s2) => this.parseAccountId(s2).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var s2, i3;
    const e2 = (s2 = t == null ? void 0 : t.chains) != null ? s2 : [], n3 = (i3 = t == null ? void 0 : t.optionalChains) != null ? i3 : [], h4 = e2.concat(n3);
    if (!h4.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
    const l2 = e2.length ? (t == null ? void 0 : t.methods) || u : [], r2 = e2.length ? (t == null ? void 0 : t.events) || m3 : [], c2 = (t == null ? void 0 : t.optionalMethods) || [], p2 = (t == null ? void 0 : t.optionalEvents) || [], I3 = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(h4, t.projectId), f5 = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: e2 == null ? void 0 : e2.map((d4) => this.formatChainId(d4)), optionalChains: n3.map((d4) => this.formatChainId(d4)), methods: l2, events: r2, optionalMethods: c2, optionalEvents: p2, rpcMap: I3, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: f5, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s2) {
    const i3 = {};
    return t.forEach((e2) => {
      i3[e2] = this.getRpcUrl(e2, s2);
    }), i3;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? v(this.rpc.chains) : v(this.rpc.optionalChains), this.signer = await oh.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storage: t.storage, storageOptions: t.storageOptions, customStoragePrefix: t.customStoragePrefix, telemetryEnabled: t.telemetryEnabled, logger: t.logger }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s2;
      try {
        const { WalletConnectModal: i3 } = await __vitePreload(() => import("./index-WBbqB-Hi.js").then((n3) => n3.i), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
        s2 = i3;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s2) try {
        this.modal = new s2(g({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions));
      } catch (i3) {
        throw this.signer.logger.error(i3), new Error("Could not generate WalletConnectModal Instance");
      }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: s2, optionalChains: i3, rpcMap: e2 } = t;
    s2 && $e$3(s2) && (this.rpc.chains = s2.map((n3) => this.formatChainId(n3)), s2.forEach((n3) => {
      this.rpc.rpcMap[n3] = (e2 == null ? void 0 : e2[n3]) || this.getRpcUrl(n3);
    })), i3 && $e$3(i3) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i3 == null ? void 0 : i3.map((n3) => this.formatChainId(n3)), i3.forEach((n3) => {
      this.rpc.rpcMap[n3] = (e2 == null ? void 0 : e2[n3]) || this.getRpcUrl(n3);
    }));
  }
  getRpcUrl(t, s2) {
    var i3;
    return ((i3 = this.rpc.rpcMap) == null ? void 0 : i3[t]) || `${q}?chainId=eip155:${t}&projectId=${s2 || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (this.session) try {
      const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s2 = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
      this.setChainIds(t ? [this.formatChainId(t)] : s2 == null ? void 0 : s2.accounts), this.setAccounts(s2 == null ? void 0 : s2.accounts);
    } catch (t) {
      this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch((s2) => this.signer.logger.warn(s2));
    }
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((s2) => this.parseAccount(s2));
  }
}
const z = w;
export {
  z as EthereumProvider,
  O3 as OPTIONAL_EVENTS,
  M2 as OPTIONAL_METHODS,
  m3 as REQUIRED_EVENTS,
  u as REQUIRED_METHODS,
  w as default
};
