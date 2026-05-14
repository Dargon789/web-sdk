import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, CheckmarkIcon, CopyIcon, Text } from '@0xsequence/design-system';
import { useClipboard } from '@0xsequence/hooks';
export const CopyButton = (props) => {
    const { includeLabel = false, text, size = 'xs' } = props;
    const [isCopied, setCopied] = useClipboard({ timeout: 4000 });
    const label = isCopied ? 'Copied!' : 'Copy';
    return (_jsxs("div", { className: "flex flex-row gap-1 items-center hover:opacity-80 cursor-pointer", onClick: () => setCopied(text), children: [isCopied ? _jsx(CheckmarkIcon, { size: size }) : _jsx(CopyIcon, { size: size }), includeLabel && (_jsx(Text, { color: "primary", fontWeight: "medium", variant: "normal", children: label }))] })
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
//# sourceMappingURL=CopyButton.js.map