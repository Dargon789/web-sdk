"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworksFilter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const micro_observables_1 = require("micro-observables");
const index_js_1 = require("../../hooks/index.js");
const ListCardNetwork_js_1 = require("../ListCard/ListCardNetwork.js");
const NetworksFilter = () => {
    const { selectedNetworksObservable, setSelectedNetworks, allNetworks } = (0, index_js_1.useSettings)();
    const selectedNetworks = (0, micro_observables_1.useObservable)(selectedNetworksObservable);
    const onClickNetwork = (chainId) => {
        if (selectedNetworks.length === allNetworks.length) {
            setSelectedNetworks([chainId]);
        }
        else if (selectedNetworks.includes(chainId)) {
            setSelectedNetworks(selectedNetworks.filter(n => n !== chainId));
        }
        else {
            setSelectedNetworks([...selectedNetworks, chainId]);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col bg-background-primary gap-3", children: allNetworks.map(chainId => ((0, jsx_runtime_1.jsx)(ListCardNetwork_js_1.ListCardNetwork, { chainId: chainId, isSelected: selectedNetworks.length !== allNetworks.length && selectedNetworks.includes(chainId), onClick: () => onClickNetwork(chainId) }, chainId))) }));
};
exports.NetworksFilter = NetworksFilter;
//# sourceMappingURL=NetworksFilter.js.map