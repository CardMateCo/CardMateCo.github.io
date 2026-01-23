import React, { useEffect, useRef, useState } from 'react';

const FloatingBeers = ({
    count = 15,
    opacity = 0.2,
    minScale = 1.1,
    maxScale = 1.8,
    duration = 8000,
    icons = ['🍺']
}) => {
    const containerRef = useRef(null);
    const beersRef = useRef([]); // Stores ref references to the DOM elements
    const requestRef = useRef();

    // Helper to get window dimensions safely
    const getDims = () => ({
        width: window.innerWidth,
        height: window.innerHeight
    });

    // Check overlap with existing placed beers
    const isOverlapping = (x, y, existingPositions, minDistance = 60) => {
        return existingPositions.some(pos =>
            Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2) < minDistance
        );
    };

    useEffect(() => {
        const { width, height } = getDims();
        const minDistance = 60;

        // Initialize beers metadata if not already done
        // We only do this once on mount/count change, but we need the refs to be ready.
        // So we use a layout effect or just standard effect but wait for render.
    }, []);

    // We render the divs first, then animate them.
    // We use state to render the initial DOM nodes.
    const [beerFiles, setBeerFiles] = useState(() =>
        Array(count).fill(0).map((_, i) => ({
            id: i,
            icon: icons[Math.floor(Math.random() * icons.length)],
            scale: minScale + Math.random() * (maxScale - minScale),
            rotationSpeed: Math.random() * 15 + 5, // sec
            rotationDirection: Math.random() > 0.5 ? 1 : -1,
        }))
    );

    useEffect(() => {
        const { width, height } = getDims();

        beersRef.current.forEach((beerEl, i) => {
            if (!beerEl) return;

            // Initialize position
            // For the "initial" state, we want them scattered like the RN code: 
            // y = Math.random() * (height + 100) - 50;
            // But we can't easily check overlap against *other* DOM nodes without a state.
            // We'll just randomize for now.

            const startCycle = (isFirstRun = false) => {
                const currentDims = getDims();
                const startY = -60;
                const endY = currentDims.height + 60;

                let x = Math.random() * currentDims.width;
                // Simple overlap check could go here if we tracked all current Xs, but randomized is usually fine for web.

                if (isFirstRun) {
                    // First run: distribute on screen
                    const initialY = Math.random() * (currentDims.height + 100) - 50;
                    // Set initial styles
                    beerEl.style.transition = 'none';
                    beerEl.style.transform = `translate3d(${x}px, ${initialY}px, 0) scale(${beerFiles[i].scale}) rotate(0deg)`;

                    // Calculate time to reach bottom from current position
                    const distance = endY - initialY;
                    const totalDistance = currentDims.height + 100;
                    const currentDuration = (duration * (distance / totalDistance)) + (Math.random() * duration * 0.3);

                    // Trigger fall after a slight delay to allow browser to paint initial state
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            beerEl.style.transition = `transform ${currentDuration}ms linear`;
                            beerEl.style.transform = `translate3d(${x}px, ${endY}px, 0) scale(${beerFiles[i].scale}) rotate(${360 * beerFiles[i].rotationDirection}deg)`;
                        });
                    });
                } else {
                    // Standard reset
                    beerEl.style.transition = 'none';
                    beerEl.style.transform = `translate3d(${x}px, ${startY}px, 0) scale(${beerFiles[i].scale}) rotate(0deg)`;

                    // Force reflow
                    void beerEl.offsetHeight;

                    const fallDuration = duration + Math.random() * duration;
                    beerEl.style.transition = `transform ${fallDuration}ms linear`;
                    beerEl.style.transform = `translate3d(${x}px, ${endY}px, 0) scale(${beerFiles[i].scale}) rotate(${360 * beerFiles[i].rotationDirection}deg)`;
                }
            };

            // Handle transition end to loop
            const onTransitionEnd = (e) => {
                if (e.propertyName !== 'transform') return;
                // Verify we hit the bottom (approximately)
                // Actually, just restart.
                startCycle();
            };

            beerEl.addEventListener('transitionend', onTransitionEnd);

            // Start!
            startCycle(true);

            // Cleanup
            beerEl._cleanup = () => {
                beerEl.removeEventListener('transitionend', onTransitionEnd);
            };
        });

        return () => {
            beersRef.current.forEach(el => el && el._cleanup && el._cleanup());
        };
    }, [count, duration]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0, // Behind content if content has higher z-index, but typical use is z-index: -1 or just verify structure. 
                // User put specific background colors on body, so this should probably be on top of body bg but behind content.
                // Z-index -1 might hide it behind body background if set on html/body. 
                // Safest is z-index: 0 or 1 and content higher.
                overflow: 'hidden'
            }}
        >
            {beerFiles.map((beer, i) => (
                <div
                    key={beer.id}
                    ref={el => beersRef.current[i] = el}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '50px', // approximate size container
                        height: '50px',
                        fontSize: '40px',
                        opacity: opacity,
                        willChange: 'transform',
                        // Initial styles are set by JS
                    }}
                >
                    {beer.icon}
                </div>
            ))}
        </div>
    );
};

export default FloatingBeers;
