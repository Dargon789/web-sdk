"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@0xsequence/design-system");
const hooks_1 = require("@0xsequence/hooks");
const CopyButton = (props) => {
    const { includeLabel = false, text, size = 'xs' } = props;
    const [isCopied, setCopied] = (0, hooks_1.useClipboard)({ timeout: 4000 });
    const label = isCopied ? 'Copied!' : 'Copy';
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-1 items-center hover:opacity-80 cursor-pointer", onClick: () => setCopied(text), children: [isCopied ? (0, jsx_runtime_1.jsx)(design_system_1.CheckmarkIcon, { size: size }) : (0, jsx_runtime_1.jsx)(design_system_1.CopyIcon, { size: size }), includeLabel && ((0, jsx_runtime_1.jsx)(design_system_1.Text, { color: "primary", fontWeight: "medium", variant: "normal", children: label }))] })
    // <Button
    //   size={size!}
    //   leftIcon={isCopied ? CheckmarkIcon : CopyIcon}
    //   label={buttonVariant === 'with-label' ? label : undefined}
    //   variant={buttonVariant === 'icon' ? 'ghost' : buttonVariant === 'text' ? 'text' : 'glass'}
    //   onClick={() => setCopied(text)}
    //   {...rest}
    // />
    );
};
exports.CopyButton = CopyButton;
//# sourceMappingURL=CopyButton.js.map