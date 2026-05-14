"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletModalContextProvider = exports.useWalletModalContext = void 0;
const web_sdk_core_1 = require("@0xsequence/web-sdk-core");
const [useWalletModalContext, WalletModalContextProvider] = (0, web_sdk_core_1.createGenericContext)();
exports.useWalletModalContext = useWalletModalContext;
exports.WalletModalContextProvider = WalletModalContextProvider;
//# sourceMappingURL=WalletModal.js.map