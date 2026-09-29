// Mobile Menu Toggle Script
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active-menu');
        });
    }
});

if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const hero = document.querySelector('.hero-section');
        const heroBackground = document.querySelector('[data-parallax-background]');
        const heroSubject = document.querySelector('[data-parallax-subject]');

        if (hero && heroBackground) {
            gsap.fromTo(heroBackground, { yPercent: -4 }, {
                yPercent: 10,
                ease: 'none',
                scrollTrigger: {
                    trigger: hero,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.7
                }
            });
        }

        if (hero && heroSubject) {
            gsap.to(heroSubject, {
                y: -70,
                ease: 'none',
                scrollTrigger: {
                    trigger: hero,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.7
                }
            });
        }

        const statement = document.querySelector('[data-statement-section]');
        const statementLines = gsap.utils.toArray('[data-statement-line]');
        if (statement && statementLines.length) {
            const statementOffset = Math.min(150, window.innerWidth * 0.12);
            const statementMotion = gsap.timeline({
                scrollTrigger: {
                    trigger: statement,
                    start: 'top top',
                    end: '+=115%',
                    pin: true,
                    scrub: 0.8,
                    invalidateOnRefresh: true
                }
            });

            statementMotion.fromTo(statementLines, {
                x: (index) => index === 1 ? statementOffset : -statementOffset,
                y: (index) => index === 1 ? 30 : index === 2 ? -24 : 20,
                opacity: 0.45,
                scale: 0.94
            }, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.08,
                ease: 'power3.out'
            });

            statementMotion.fromTo('.statement-kicker, .statement-description, .statement-link', {
                y: 22,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.45,
                stagger: 0.08,
                ease: 'power2.out'
            }, 0.55);
        }

        const story = document.querySelector('.parallax-story-section');
        if (story) {
            gsap.utils.toArray('.floating-img-box').forEach((image) => {
                const speed = Number(image.dataset.speed) || 0.2;
                const drift = speed * 640;

                gsap.fromTo(image, { y: -drift / 2 }, {
                    y: drift / 2,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: story,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 0.7
                    }
                });
            });

            gsap.fromTo('.story-content-wrapper', { y: 42 }, {
                y: -42,
                ease: 'none',
                scrollTrigger: {
                    trigger: story,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.7
                }
            });
        }

        const newsletter = document.querySelector('.newsletter-section');
        const newsletterContent = newsletter?.querySelector('[data-parallax-content]');
        if (newsletter && newsletterContent) {
            gsap.fromTo(newsletterContent, { y: 32 }, {
                y: -32,
                ease: 'none',
                scrollTrigger: {
                    trigger: newsletter,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.7
                }
            });
        }
    }

    window.addEventListener('load', () => ScrollTrigger.refresh());
}