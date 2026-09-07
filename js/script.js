/* =========================================================
   PROJECT FILTER
========================================================= */

const projectFilters = document.querySelectorAll('.project-filter');
const projectCards = document.querySelectorAll('.project-card');

projectFilters.forEach(filter => {

    filter.addEventListener('click', () => {

        const selectedFilter = filter.dataset.filter;


        // Active button
        projectFilters.forEach(btn => {

            btn.classList.remove(
                'active-filter',
                'bg-[#ff2d20]',
                'text-white',
                'border-[#ff2d20]/40'
            );

            btn.classList.add(
                'bg-white/[0.03]',
                'text-gray-400',
                'border-white/10'
            );

        });


        filter.classList.remove(
            'bg-white/[0.03]',
            'text-gray-400',
            'border-white/10'
        );

        filter.classList.add(
            'active-filter',
            'bg-[#ff2d20]',
            'text-white',
            'border-[#ff2d20]/40'
        );


        // Filter projects
        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (
                selectedFilter === 'all' ||
                category === selectedFilter
            ) {

                card.style.display = 'block';

                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);

            } else {

                card.style.opacity = '0';
                card.style.transform = 'translateY(15px)';

                setTimeout(() => {
                    card.style.display = 'none';
                }, 250);

            }

        });

    });

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {

    contactForm.addEventListener('submit', function (e) {

        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();


        // Basic validation
        if (!name || !email || !subject || !message) {

            formStatus.classList.remove(
                'hidden',
                'text-green-400',
                'bg-green-500/10',
                'border-green-500/20'
            );

            formStatus.classList.add(
                'text-red-400',
                'bg-red-500/10',
                'border',
                'border-red-500/20'
            );

            formStatus.innerHTML = `
                <i class="fa-solid fa-circle-exclamation mr-2"></i>
                Please fill in all required fields.
            `;

            return;
        }


        // Show success message
        formStatus.classList.remove('hidden');

        formStatus.classList.remove(
            'text-red-400',
            'bg-red-500/10',
            'border-red-500/20'
        );

        formStatus.classList.add(
            'text-green-400',
            'bg-green-500/10',
            'border',
            'border-green-500/20'
        );

        formStatus.innerHTML = `
            <i class="fa-solid fa-circle-check mr-2"></i>
            Thanks ${name}! Your message has been received.
        `;


        // Reset form
        contactForm.reset();


        // Hide status after 5 seconds
        setTimeout(() => {

            formStatus.classList.add('hidden');

        }, 5000);

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear = document.getElementById('currentYear');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}



/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop = document.getElementById('backToTop');

if (backToTop) {

    window.addEventListener('scroll', () => {

        if (window.scrollY > 500) {

            backToTop.classList.add('show');

        } else {

            backToTop.classList.remove('show');

        }

    });


    backToTop.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}



/* =========================================================
   SCROLL PROGRESS
========================================================= */

const scrollProgress = document.getElementById('scrollProgress');

if (scrollProgress) {

    window.addEventListener('scroll', () => {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollPercentage =
            (scrollTop / documentHeight) * 100;

        scrollProgress.style.width =
            scrollPercentage + '%';

    });

}


/* =========================================================
   ACTIVE NAVBAR LINK
========================================================= */

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll(
    'nav a[href^="#"]'
);

function updateActiveNav() {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute('id');

        }

    });


    navLinks.forEach(link => {

        link.classList.remove(
            'text-[#ff6b61]'
        );


        if (
            link.getAttribute('href') ===
            `#${currentSection}`
        ) {

            link.classList.add(
                'text-[#ff6b61]'
            );

        }

    });

}


window.addEventListener(
    'scroll',
    updateActiveNav
);

updateActiveNav();