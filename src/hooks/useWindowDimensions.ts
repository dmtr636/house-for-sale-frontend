import React, { useState, useEffect } from 'react';

export function useWindowDimension() {
    const [dimension, setDimension] = useState([
        typeof window !== "undefined" ? window.innerWidth : 0,
        typeof window !== "undefined" ? window.innerHeight : 0,
    ]);
    useEffect(() => {
        const debouncedResizeHandler = debounce(() => {
            console.log('***** debounced resize'); // See the cool difference in console
            setDimension([window.innerWidth, window.innerHeight]);
        }, 10); // 10ms
        window.addEventListener('resize', debouncedResizeHandler);
        return () => window.removeEventListener('resize', debouncedResizeHandler);
    }, []); // Note this empty array. this effect should run only on mount and unmount
    return dimension;
}

const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};