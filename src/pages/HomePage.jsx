import React, { useRef } from 'react';
import { HomePageHero } from '../cmps/homepage/HomePageHero.jsx';
import { HomePageProductivity } from '../cmps/homepage/HomePageProductivity.jsx';
import { HomePageCards } from '../cmps/homepage/HompageCards.jsx';
import { HomePageSignUp } from '../cmps/homepage/HomPageSignUp.jsx';
import { HomePageHeader } from '../cmps/homepage/HomePageHeader.jsx';
import { HomePageFooter } from '../cmps/homepage/HomePageFooter.jsx';

export function HomePage() {
    document.title = 'Tarello';
    const topRef = useRef(null);

    function scrollToTop() {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="homepage">
            <div ref={topRef} /> {/* Invisible element at the top */}
            <HomePageHeader />

            <section className="homepage-container">
                <HomePageHero />
            </section>

            <section className="homepage-productivity">
                <HomePageProductivity />
                <HomePageCards />
            </section>

            <section className="homepage-signup">
                <HomePageSignUp />
            </section>
            <HomePageFooter scrollToTop={scrollToTop} />
        </section>
    );
}