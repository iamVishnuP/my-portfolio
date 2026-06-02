import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const stateRef = useRef('default');

  useEffect(() => {
    // Check if it's a touch device; if so, fall back to default cursor behavior
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    if (!dot) return;

    // Use GSAP to set initial positioning properties
    // xPercent and yPercent of -50 ensures the dot is perfectly centered
    gsap.set(dot, { xPercent: -50, yPercent: -50, opacity: 0 });

    // Track mouse coordinates
    const onMouseMove = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'power2.out',
      });
    };

    // Morph the custom cursor dot to distinct styles depending on hovered elements
    const changeState = (nextState) => {
      if (stateRef.current === nextState) return;
      stateRef.current = nextState;

      // Kill active tweens on the dot to prevent conflicts
      gsap.killTweensOf(dot);

      switch (nextState) {
        case 'clickable':
          // Clickable hover: dot expands, retains cyan color and glows deeper
          gsap.to(dot, {
            scale: 2.0,
            backgroundColor: '#00f2fe',
            mixBlendMode: 'screen',
            borderRadius: '50%',
            opacity: 1,
            boxShadow: '0 0 15px #00f2fe',
            duration: 0.2,
            ease: 'power2.out',
          });
          break;

        case 'text':
          // Text hover: dot expands significantly, fills solid white, and inverts text colors behind it
          gsap.to(dot, {
            scale: 3.5,
            backgroundColor: '#ffffff',
            mixBlendMode: 'difference',
              borderRadius: '50%',
              opacity: 1,
              boxShadow: 'none',
              duration: 0.2,
              ease: 'power2.out',
            });
            break; 

        case 'input':
          // Form Input: dot transforms into a sleek, high-visibility vertical blinker caret line
          gsap.to(dot, {
            scale: 1,
            scaleX: 0.2,
            scaleY: 2.2,
            backgroundColor: '#00f2fe',
            mixBlendMode: 'screen',
            borderRadius: '2px',
            opacity: 1,
            boxShadow: '0 0 8px #00f2fe',
            duration: 0.2,
            ease: 'power2.out',
          });
          break;

        case 'social':
          // Social links: highly active pulse and deep purple color swap
          gsap.to(dot, {
            scale: 2.2,
            backgroundColor: '#7f00ff',
            mixBlendMode: 'screen',
            borderRadius: '50%',
            opacity: 1,
            boxShadow: '0 0 15px #7f00ff',
            duration: 0.2,
            ease: 'back.out(1.5)',
          });
          break;

        case 'default':
        default:
          // Default State: Small neon cyan core dot
          gsap.to(dot, {
            scale: 1,
            scaleX: 1,
            scaleY: 1,
            backgroundColor: '#00f2fe',
            mixBlendMode: 'screen',
            borderRadius: '50%',
            opacity: 1,
            boxShadow: '0 0 8px #00f2fe',
            duration: 0.2,
            ease: 'power2.out',
          });
          break;
      }
    };

    // High performance global event delegation for detecting hover states
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const socialEl = target.closest('.social-icon, a[href*="github"], a[href*="linkedin"], a[href*="mailto"], .magnetic-target');
      const inputEl = target.closest('input, textarea');
      const clickableEl = target.closest('a, button, [role="button"], .cursor-pointer, select, .interactive-card');
      const textEl = target.closest('h1, h2, h3, h4, .heading-display, .text-hover-target, span.select-text');

      if (socialEl) {
        changeState('social');
      } else if (inputEl) {
        changeState('input');
      } else if (clickableEl) {
        changeState('clickable');
      } else if (textEl) {
        changeState('text');
      } else {
        changeState('default');
      }
    };

    // Fade cursor out when mouse leaves the browser window frame, fade back in when it enters
    const onMouseLeaveDoc = () => {
      gsap.to(dot, { opacity: 0, duration: 0.2 });
    };

    const onMouseEnterDoc = () => {
      gsap.to(dot, { opacity: 1, duration: 0.2 });
    };

    // Attach listeners
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeaveDoc);
    document.addEventListener('mouseenter', onMouseEnterDoc);

    // Initial fade in of the custom cursor dot
    gsap.to(dot, { opacity: 1, duration: 0.3 });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeaveDoc);
      document.removeEventListener('mouseenter', onMouseEnterDoc);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="custom-cursor fixed top-0 left-0 w-2.5 h-2.5 bg-[#00f2fe] rounded-full pointer-events-none z-50 hidden md:block select-none shadow-[0_0_8px_#00f2fe] mix-blend-screen"
    />
  );
}
