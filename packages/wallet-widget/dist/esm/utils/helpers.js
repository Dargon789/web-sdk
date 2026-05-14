export const limitDecimals = (value, decimals) => {
    const splitValue = value.split('.');
    if (splitValue.length === 1) {
        return value;
    }
    return `${splitValue[0]}.${splitValue[1].slice(0, decimals)}`;
};
export const isEthAddress = (value) => {
    const ethAddressRegEx = /0x[a-fA-F0-9]{40}/;
    const isEthAddress = ethAddressRegEx.test(value);
    return isEthAddress;
};
// Gets n random elements at unique keys from collection up to the size of collection.
export const sampleSize = (collection, n) => {
    const random = seededRandom(1);
    const length = collection.length;
    if (!length || n < 1) {
        return [];
    }
    // Limit n to the size of the collection
    n = n > length ? length : n;
    const sampled = new Array(n);
    const indexes = new Set();
    // Find n unique indexes
    while (indexes.size < n) {
        indexes.add(Math.floor(random() * length));
    }
    for (const [idx, value] of Array.from(indexes).entries()) {
        sampled[idx] = collection[value];
    }
    return sampled;
};
export const isTruthy = (value) => Boolean(value);
// Deterministic random function
export const seededRandom = (seed) => {
    return () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };
};
//# sourceMappingURL=helpers.js.map