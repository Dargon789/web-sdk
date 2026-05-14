import { type PropsWithChildren, type RefObject } from 'react';
export declare const useIntersectionObserver: (ref: RefObject<Element | null>, options?: IntersectionObserverInit) => any;
interface InfiniteScrollProps {
    onLoad: (pageNumber: number) => Promise<any>;
    hasMore?: boolean;
    resetTrigger?: boolean;
}
export declare const InfiniteScroll: (props: PropsWithChildren<InfiniteScrollProps>) => JSX.Element;
export {};
//# sourceMappingURL=InfiniteScroll.d.ts.map