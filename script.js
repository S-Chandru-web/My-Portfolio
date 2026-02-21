/* DATA */
const mqItems = ['MongoDB',
    'Express.js',
    'React',
    'Node.js',
    'Next.js',
    'Socket.io',
    'JavaScript',
    'HTML & CSS',
    'SQL',
    'REST APIs',
    'Git & GitHub',
    'GitLab',
    'Netlify',
    'Vercel',
    'Postman'];

const skillCats = [{
    label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React']
}

    ,
{
    label: 'Backend', items: ['Node.js', 'Express.js', 'REST API Design', 'Socket.io', 'JWT Auth']
}

    ,
{
    label: 'Database', items: ['MongoDB', 'Mongoose', 'SQL']
}

    ,
{
    label: 'Tools & DevOps', items: ['Git & GitHub', 'GitLab', 'Netlify / Vercel', 'Postman', 'VS Code']
}

    ,
];

const projects = [{
    num: '01', title: 'NETFLIX CLONE', desc: 'Dynamic movie streaming UI built with React. Integrated external APIs to fetch real-time movie data, with routing, state management, and clean component architecture.', tags: ['React', 'API Integration', 'React Router', 'State Management'], gh: 'https://github.com/S-Chandru-web', live: 'https://effulgent-gaufre-587ac7.netlify.app/'
}

    ,
{
    num: '02', title: 'WEATHER APPLICATION', desc: 'Responsive weather app using the OpenWeather API. Search any city to view temperature, humidity, wind speed, and conditions with full error handling.', tags: ['React', 'OpenWeather API', 'State Management', 'Responsive UI'], gh: 'https://github.com/S-Chandru-web', live: 'https://helpful-nasturtium-706c1d.netlify.app'
}

    ,
{
    num: '03', title: 'REAL-TIME CHAT APP', desc: 'Full-stack MERN chat application with instant messaging via Socket.io bidirectional communication, user authentication, and real-time message broadcasting.', tags: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB'], gh: 'https://github.com/S-Chandru-web', live: 'https://effervescent-gelato-7524f3.netlify.app/'
}

    ,
{
    num: '04', title: 'COFFEE SHOP WEBSITE', desc: 'Responsive coffee shop frontend showcasing menu, pricing, customer reviews, and a blog. Built with HTML, CSS, and JavaScript focusing on clean design and mobile responsiveness.', tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'], gh: 'https://github.com/S-Chandru-web', live: 'https://6947d693dde99e02dcfe8226--sparkly-sprinkles-fb4520.netlify.app/'
}

    ,
];

const experience = [{
    period: '2026 - present', type: 'work', role: 'MERN STACK FULL-STACK TRAINEE', co: 'Veloxity Tech — Hybrid', pts: ['Working as a MERN Stack Trainee contributing to full-stack web application development.', 'Developing responsive frontend applications using React and integrating RESTful APIs.', 'Building and maintaining backend services using Node.js, Express, and MongoDB.', 'Deploying and managing applications on AWS (EC2 / S3 / basic cloud setup).', 'Collaborating with team members for API coordination, debugging, and performance improvements.']
}

    ,
{
    period: 'Jan 2026 – Feb 2026', type: 'work', role: 'MERN STACK WEB DEV INTERN', co: 'Codtech IT Solutions Pvt. Ltd. — Remote', pts: ['Completed a structured 4-week internship focused on MERN Stack Web Development.', 'Worked on full-stack projects involving React, Node.js, Express, and MongoDB.', 'Developed and tested RESTful APIs and integrated them with frontend applications.', 'Participated in team discussions, received mentor feedback, and improved code quality.', 'Gained hands-on experience in real-world project development and deployment.']
}

    ,
{
    period: '2024', type: 'work', role: 'WEB DEVELOPER INTERN', co: 'Vi Microsystems Pvt. Ltd. — Perungudi, Chennai', pts: ['Developed responsive and user-friendly web interfaces using HTML5, CSS3, JavaScript (ES6+), React.js and Angular following modern UI standards.', 'Collaborated with team members to implement front-end features, improve usability, and fix UI/UX-related issues.', 'Gained hands-on experience in writing clean, maintainable code in a real-time environment.']
}

    ,
];

/* RENDER MARQUEE */
document.getElementById('mq-el').innerHTML = [...mqItems,
...mqItems,
...mqItems,
...mqItems].map(s => '<div class="mq-item"><div class="dot"></div>' + s + '</div>').join('');

/* RENDER SKILLS */
document.getElementById('sk-block').innerHTML = '<div class="sk-heading"><div class="sk-eyebrow">Tech I Use</div><div class="sk-h2">MY SKILLS</div></div>' + skillCats.map(c => '<div class="sk-cat"><div class="sk-cat-label">' + c.label + '</div><div class="sk-tags">' + c.items.map(i => '<span class="sk-tag">' + i + '</span>').join('') + '</div></div>').join('');

/* RENDER PROJECTS */
const ghI = '<svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>';
const lvI = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>';
document.getElementById('proj-list').innerHTML = projects.map(p => '<div class="proj-card" data-h><div class="proj-num">' + p.num + '</div><div class="proj-info"><div class="proj-title">' + p.title + '</div><div class="proj-desc">' + p.desc + '</div></div><div class="proj-meta"><div class="proj-tags">' + p.tags.map(t => '<span class="tag">' + t + '</span>').join('') + '</div><div class="proj-links"><a href="' + p.gh + '" target="_blank">' + ghI + ' Code</a><a href="' + p.live + '" target="_blank">' + lvI + ' Live</a></div></div></div>').join('');

/* RENDER EXPERIENCE */
document.getElementById('exp-list').innerHTML = experience.map(e => '<div class="exp-item"><div class="exp-period">' + e.period + '<div class="exp-badge">Experience</div></div><div><div class="exp-role">' + e.role + '</div><div class="exp-co">' + e.co + '</div><ul class="exp-pts">' + e.pts.map(p => '<li>' + p + '</li>').join('') + '</ul></div></div>').join('');

/* CURSOR */
const curEl = document.getElementById('cur'),
    curR = document.getElementById('cur-r');
let mx = -100,
    my = -100,
    rx = -100,
    ry = -100;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY
});
const lerp = (a, b, t) => a + (b - a) * t;

(function loop() {
    rx = lerp(rx, mx, .13); ry = lerp(ry, my, .13); curEl.style.left = mx + 'px'; curEl.style.top = my + 'px'; curR.style.left = rx + 'px'; curR.style.top = ry + 'px'; requestAnimationFrame(loop)
})();

document.addEventListener('mouseover', e => {
    document.body.classList.toggle('hov', ! !e.target.closest('a,button,[data-h],.sk-tag,.proj-card'))
});

/* SMOOTH SCROLL for all anchor links — works in iframes too */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const id = this.getAttribute('href').slice(1);
        const target = document.getElementById(id);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth', block: 'start'
            });
        }
    });
});

/* NAV scroll + active */
const navEl = document.getElementById('main-nav');
const secs = Array.from(document.querySelectorAll('section[id]'));
const navAs = document.querySelectorAll('.nav-links a,.mob-nav a');

window.addEventListener('scroll', () => {
    navEl.classList.toggle('scrolled', window.scrollY > 60);
    let cur2 = '';

    secs.forEach(s => {
        if (window.scrollY >= s.offsetTop - 180) cur2 = s.id
    });

    navAs.forEach(a => {
        const t = a.getAttribute('href').replace('#', ''); a.classList.toggle('active', t === cur2 || (t === 'tech-skills' && cur2 === 'about'))
    });
}

    , {
        passive: true
    });

/* SCROLL REVEAL — starts hidden via JS, not CSS, so content always visible on first load */
const revealEls = document.querySelectorAll('.reveal');
revealEls.forEach(el => el.classList.add('hidden'));

const ro = new IntersectionObserver(es => {
    es.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.remove('hidden'); ro.unobserve(e.target)
        }
    })
}

    , {
        threshold: .08, rootMargin: '0px 0px -40px 0px'
    });
revealEls.forEach(el => ro.observe(el));

/* MOBILE HAMBURGER */
const mobBtn = document.getElementById('mob-btn');
const mobNav = document.getElementById('mob-nav');

if (mobBtn && mobNav) {
    mobBtn.addEventListener('click', () => {
        const o = mobNav.classList.toggle('open'); mobBtn.classList.toggle('open', o)
    });

    mobNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        mobNav.classList.remove('open'); mobBtn.classList.remove('open')
    }));
}

/* CONTACT FORM */
const cf = document.getElementById('cf');
const sb = document.getElementById('submit-btn');

if (cf && sb) {
    cf.addEventListener('submit', () => {
        sb.disabled = true; sb.textContent = 'Sending...';

        setTimeout(() => {
            sb.classList.add('sent'); sb.textContent = 'Sent!';

            setTimeout(() => {
                sb.classList.remove('sent'); sb.disabled = false; sb.textContent = 'Send Message'
            }

                , 3500);
        }

            , 1600);
    });
}
