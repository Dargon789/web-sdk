import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useMemo, useRef, useState } from 'react';
export const useIntersectionObserver = (ref, options) => {
    const [entry, setEntry] = useState(null);
    const observer = useMemo(() => new IntersectionObserver(([entry]) => setEntry(entry), options), []);
    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, [ref.current, observer]);
    return entry?.isIntersecting ?? false;
};
export const InfiniteScroll = (props) => {
    const { onLoad, hasMore = true, children, resetTrigger } = props;
    const [pageNumber, setPageNumber] = useState(0);
    const [isFetching, setIsFetching] = useState(false);
    const bottomRef = useRef(null);
    const isBottom = useIntersectionObserver(bottomRef);
    useEffect(() => {
        setPageNumber(0);
    }, [resetTrigger]);
    useEffect(() => {
        if (isBottom && hasMore && !isFetching) {
            handleLoad();
        }
    }, [isBottom]);
    const handleLoad = async () => {
        setIsFetching(true);
        await onLoad(pageNumber);
        setPageNumber(pageNumber => pageNumber + 1);
        setIsFetching(false);
    };
    return (_jsxs(_Fragment, { children: [children, _jsx("span", { ref: bottomRef })] }));
};
//# sourceMappingURL=InfiniteScroll.js.map