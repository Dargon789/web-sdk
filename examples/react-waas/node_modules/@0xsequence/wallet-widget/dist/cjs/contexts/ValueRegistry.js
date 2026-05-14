"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueRegistryContextProvider = exports.useValueRegistryContext = void 0;
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const [useValueRegistryContext, ValueRegistryContextProvider] = (0, web_sdk_core_1.createGenericContext)();
exports.useValueRegistryContext = useValueRegistryContext;
exports.ValueRegistryContextProvider = ValueRegistryContextProvider;
//# sourceMappingURL=ValueRegistry.js.map