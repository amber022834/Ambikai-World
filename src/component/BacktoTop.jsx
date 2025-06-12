import React, { useEffect, useState } from 'react';
import "./BacktoTop.scss";

export default function BacktoTop() {
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.Footer'); // 用 className
            if (!footer) return;

            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // 若 footer 快進入畫面，切換狀態
            if (footerTop < windowHeight + 20) { // 20px 緩衝
                setIsNearFooter(true);
            } else {
                setIsNearFooter(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className="Back-to-top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
        >
            <img
                src="./fox.png"
                alt="Back to top"
                style={{ width: '40px', height: '40px' }}
            />
        </button>
    );
}
