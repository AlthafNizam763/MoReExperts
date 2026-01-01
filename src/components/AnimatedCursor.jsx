import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position state for the main dot (instant)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring configuration for the trailing ring's smooth follow effect
    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    // If touch device or small screen, don't render custom cursor
    const isMobile = () => {
        if (typeof window === 'undefined') return false;
        return (
            ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0) ||
            window.innerWidth < 768
        );
    }

    const [mobile, setMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => setMobile(isMobile());
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (mobile) return null;

    return (
        <>
            <style>{`
        body, a, button, input {
            cursor: none; /* Hide default cursor */
        }
      `}</style>

            {/* Small dot - updates instantly */}
            <motion.div
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference', // Cool effect over light/dark bg
                    opacity: isVisible ? 1 : 0,
                }}
                className="cursor-dot"
            />

            {/* Trailing ring - smooth spring follow */}
            <motion.div
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    border: '1px solid #fff',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    x: '-50%', // Centering offset for the larger ring
                    y: '-50%',
                    mixBlendMode: 'difference',
                    opacity: isVisible ? 1 : 0,
                }}
                className="cursor-ring"
            />
        </>
    );
};

export default AnimatedCursor;
