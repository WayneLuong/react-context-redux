import { useEffect } from 'react';

export const useWindowEvent = (event, callback) => {
    useEffect(() => {
        window.addEventListener(event, callback);
        return () => window.removeEventListener(event, callback);
    }, [event, callback]);
};

export const useGlobalMouseUp = (callback) => {
    return useWindowEvent("mouseup", callback);
};

export const useGlobalMouseMove = (callback) => {
    return useWindowEvent("mousemove", callback);
};

/* export default function CoolComponent() {
    useGlobalMouseMove(e => console.log(e));
    return <div>Other code here</div>;
} */