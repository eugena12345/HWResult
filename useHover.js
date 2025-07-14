import { useEffect, useRef, useState } from "react";

export const useHover = () => {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    const onHover = () => {
        setHovered(true)
    };
    const onLeave = () => {
        setHovered(false)
    };

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('mouseover', onHover);
            ref.current.addEventListener('mouseout', onLeave);
        }

        return () => {
            if (ref.current) {
                ref.current.removeEventListener('mouseover', onHover);
                ref.current.removeEventListener('mouseout', onLeave);
            }
        }
    }, []);

    return { hovered, ref };
};
