/* ==========================================
   CHITTER'S FRITTERS™
   APP.JS
========================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================
       MOBILE MENU
    ========================== */

    const mobileToggle =
        document.getElementById('mobileToggle');

    const mainNav =
        document.querySelector('.main-nav');

    if (mobileToggle && mainNav) {

        mobileToggle.addEventListener('click', () => {

            mainNav.classList.toggle('show');

            if (mobileToggle.innerHTML === '☰') {

                mobileToggle.innerHTML = '✕';

            } else {

                mobileToggle.innerHTML = '☰';

            }

        });

    }

    /* ==========================
       CLOSE MENU ON CLICK
    ========================== */

    document.querySelectorAll('.main-nav a')
        .forEach(link => {

            link.addEventListener('click', () => {

                if (mainNav) {

                    mainNav.classList.remove('show');

                }

                if (mobileToggle) {

                    mobileToggle.innerHTML = '☰';

                }

            });

        });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener('click', function (e) {

                const target =
                    document.querySelector(
                        this.getAttribute('href')
                    );

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                }

            });

        });

    /* ==========================
       HEADER EFFECT
    ========================== */

    const header =
        document.querySelector('.site-header');

    window.addEventListener('scroll', () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.boxShadow =
                '0 10px 30px rgba(0,0,0,.15)';

        } else {

            header.style.boxShadow =
                '0 4px 20px rgba(0,0,0,.08)';

        }

    });

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const sections =
        document.querySelectorAll('section');

    const navLinks =
        document.querySelectorAll('.main-nav a');

    window.addEventListener('scroll', () => {

        let current = '';

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute('id');

            }

        });

        navLinks.forEach(link => {

            link.classList.remove('active');

            if (
                link.getAttribute('href') ===
                '#' + current
            ) {

                link.classList.add('active');

            }

        });

    });

    /* ==========================
       FADE IN ANIMATION
    ========================== */

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            'visible'
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    document.querySelectorAll(
        '.product-card, .wholesale-card, .contact-card, .story-image'
    ).forEach(item => {

        item.classList.add('fade-up');

        observer.observe(item);

    });

    /* ==========================
       FORM SUCCESS MESSAGE
    ========================== */

    const form =
        document.querySelector(
            '.wholesale-form form'
        );

    if (form) {

        form.addEventListener(
            'submit',
            () => {

                alert(
                    'Thank you! Your wholesale request has been submitted.'
                );

            }
        );

    }

    /* ==========================
       HERO FLOAT EFFECT
    ========================== */

    const heroLogo =
        document.querySelector(
            '.hero-logo'
        );

    if (heroLogo) {

        let position = 0;
        let direction = 1;

        setInterval(() => {

            position +=
                0.2 * direction;

            if (position > 10) {

                direction = -1;

            }

            if (position < -10) {

                direction = 1;

            }

            heroLogo.style.transform =
                `translateY(${position}px)`;

        }, 25);

    }

    /* ==========================
       YEAR UPDATE
    ========================== */

    const year =
        document.getElementById('year');

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

    /* ==========================
       PAGE LOADED
    ========================== */

    console.log(
        "🍋 Chitter's Fritters Loaded"
    );

});
