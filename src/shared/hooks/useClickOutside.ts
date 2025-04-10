import { useEffect, useRef } from "react";

const defaultEvents = ["mousedown", "touchstart"] as const;

type EventType = (typeof defaultEvents)[number];

export const useClickOutside = <T extends HTMLElement = HTMLDivElement>(
    callback: () => void,
    events: readonly EventType[] = defaultEvents,
) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };
        events.forEach((event) =>
            document.addEventListener(event, handleClickOutside),
        );

        return () => {
            events.forEach((event) =>
                document.removeEventListener(event, handleClickOutside),
            );
        };
    }, [callback, events]);

    return ref;
};
