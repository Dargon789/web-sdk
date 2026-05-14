"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentContextProvider = exports.useEnvironmentContext = void 0;
const genericContext_1 = require("./genericContext");
const [useEnvironmentContext, EnvironmentContextProvider] = (0, genericContext_1.createGenericContext)();
exports.useEnvironmentContext = useEnvironmentContext;
exports.EnvironmentContextProvider = EnvironmentContextProvider;
//# sourceMappingURL=Environment.js.map