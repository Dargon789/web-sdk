import { jsx as _jsx } from "react/jsx-runtime";
import { useObservable } from 'micro-observables';
import { useSettings } from '../../hooks/index.js';
import { ListCardNetwork } from '../ListCard/ListCardNetwork.js';
export const NetworksFilter = () => {
    const { selectedNetworksObservable, setSelectedNetworks, allNetworks } = useSettings();
    const selectedNetworks = useObservable(selectedNetworksObservable);
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
    return (_jsx("div", { className: "flex flex-col bg-background-primary gap-3", children: allNetworks.map(chainId => (_jsx(ListCardNetwork, { chainId: chainId, isSelected: selectedNetworks.length !== allNetworks.length && selectedNetworks.includes(chainId), onClick: () => onClickNetwork(chainId) }, chainId))) }));
};
//# sourceMappingURL=NetworksFilter.js.map