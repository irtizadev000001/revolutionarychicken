const products = [
    {
        category: 'Feeders and Waterers',
        title: 'Waste-Proof Rain-Proof Mouse-Proof Chicken Feeder with Patent Pending Feeder Ports',
        price: '$59.00 – $66.00',
        rating: '★ 5.00 out of 5',
        image: 'images/new-new-feeder.webp'
    },
    {
        category: 'Feeders and Waterers',
        title: 'Revolutionary Chicken Feeder & Waterer Combo BPA Free',
        price: '$84.00 – $105.00',
        rating: '★ 5.00 out of 5',
        image: 'images/Waterer-choice.webp'
    },
    {
        category: 'Accessories',
        title: 'Anti-Roost Dome for Feeder',
        price: '$3.00',
        rating: '★ 5.00 out of 5',
        image: 'images/anti-roost-dome-for-feeder.webp'
    },
    {
        category: 'Accessories',
        title: 'Feeder Port Cover',
        price: '$0.35',
        rating: '★ 5.00 out of 5',
        image: 'images/new-feeder-port-cover-5.webp'
    },
    {
        category: 'DIY Kits',
        title: 'Barrel Waterer DIY Kit',
        price: '$12.00 – $30.00',
        rating: '★ 5.00 out of 5',
        image: 'images/kit-picture-edited.webp'
    },
    {
        category: 'Supplements Feeders',
        title: 'Automatic Grit Feeder',
        price: '$13.99',
        rating: '★ 5.00 out of 5',
        image: 'images/grit-no-background-scaled.webp'
    },
    {
        category: 'Supplements Feeders',
        title: 'Automatic Oyster Shell Feeder',
        price: '$13.99',
        rating: '★ 5.00 out of 5',
        image: 'images/oyster-feeder-no-background.webp'
    }
];

function createProductCard(product) {
    return `
        <article class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" loading="lazy" decoding="async">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                ${product.rating ? `<div class="product-rating">${product.rating}</div>` : ''}
                <div class="product-price">${product.price}</div>
            </div>
        </article>
    `;
}

const track = document.querySelector('#marqueeTrack');
if (track) {
    const productCards = products.map(createProductCard).join('');
    track.innerHTML = `
        <div class="marquee-group">${productCards}</div>
        <div class="marquee-group" aria-hidden="true">${productCards}</div>
    `;
}

const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm?.addEventListener('submit', (event) => {
    event.preventDefault();
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active-menu');
    });
}

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