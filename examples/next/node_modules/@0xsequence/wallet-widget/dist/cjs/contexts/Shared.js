"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSharedContext = exports.SharedContextProvider = void 0;
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const [useSharedContext, SharedContextProvider] = (0, web_sdk_core_1.createGenericContext)();
exports.useSharedContext = useSharedContext;
exports.SharedContextProvider = SharedContextProvider;
//# sourceMappingURL=Shared.js.map