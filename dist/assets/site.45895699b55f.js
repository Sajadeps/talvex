'use strict';
// ── SERVICES DATA FOR MODAL ──
    // ── SERVICES STRAIGHT ORDER CAROUSEL SCRIPT ──
    const SERVICES_CATALOG = [
  {
    "title": "Custom Software Development",
    "icon": "🛠️",
    "badge": "Enterprise • Architecture",
    "fullDesc": "We engineer robust, high-performance custom software solutions tailored to your unique operational requirements. From scalable microservice architectures to secure enterprise integrations, our platforms ensure flawless performance, zero technical debt, and infinite horizontal scalability.",
    "deliverables": [
      "Microservice & API Architecture",
      "High-Throughput Data Engines",
      "Enterprise System Integrations",
      "Custom Workflow Automation"
    ],
    "tech": [
      "Node.js",
      "Go",
      "Python",
      "PostgreSQL",
      "Docker",
      "Redis"
    ]
  },
  {
    "title": "Modern Web Development",
    "icon": "🌐",
    "badge": "Next.js • High Speed",
    "fullDesc": "Deliver delightful web experiences powered by modern Next.js and React stacks. We build sub-second loading websites, dynamic single-page applications, and high-conversion landing pages optimized for search engines, mobile responsiveness, and peak conversion rates.",
    "deliverables": [
      "Server-Side Rendered (SSR) Web Apps",
      "Design Systems & Component Libraries",
      "Lighthouse 100 Performance Optimization",
      "Headless CMS & Commerce Integration"
    ],
    "tech": [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "GraphQL"
    ]
  },
  {
    "title": "Mobile App Development",
    "icon": "📱",
    "badge": "iOS • Android • Native",
    "fullDesc": "Craft seamless, native-feeling mobile applications for smartphones and tablets. Utilizing React Native and Flutter, we deliver unified codebases with native speed, real-time synchronization, fluid touch gestures, and full offline-first capabilities.",
    "deliverables": [
      "iOS & Android Mobile Applications",
      "Offline-First Architecture & Sync",
      "Smooth 60fps Micro-Interactions",
      "App Store & Google Play Deployment"
    ],
    "tech": [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase"
    ]
  },
  {
    "title": "UI/UX Design & Architecture",
    "icon": "🎨",
    "badge": "Figma • Systems • Delight",
    "fullDesc": "Transform complex operational concepts into intuitive, visually breathtaking digital products. We conduct comprehensive UX research, user journey mapping, and interactive wireframing to produce pixel-perfect Figma design systems ready for developer handoff.",
    "deliverables": [
      "User Journey & UX Wireframing",
      "Design Systems & UI Pattern Kits",
      "Clickable High-Fidelity Prototypes",
      "Usability Testing & Conversion Audits"
    ],
    "tech": [
      "Figma",
      "Design Systems",
      "Wireframing",
      "Prototyping",
      "Usability Testing"
    ]
  },
  {
    "title": "Cloud Solutions & Infra",
    "icon": "☁️",
    "badge": "Resilient • High Scale",
    "fullDesc": "Modernize your infrastructure with secure, automated cloud environments. We design multi-region topologies, serverless compute layers, and resilient disaster-recovery pipelines that scale seamlessly on demand with enterprise-grade SLA compliance.",
    "deliverables": [
      "Cloud Migration & Architecture Strategy",
      "Serverless & Kubernetes Orchestration",
      "Multi-Region High Availability",
      "Cloud Cost Optimization Audits"
    ],
    "tech": [
      "AWS",
      "Google Cloud",
      "Kubernetes",
      "Docker",
      "Terraform"
    ]
  },
  {
    "title": "DevOps & CI/CD Pipelines",
    "icon": "⚙️",
    "badge": "Automation • Reliability",
    "fullDesc": "Accelerate your software release cycles while dramatically improving production platform reliability. We implement modern CI/CD pipelines, automated testing gates, container clusters, and real-time observability telemetry for zero-downtime releases.",
    "deliverables": [
      "Automated CI/CD Deployment Pipelines",
      "Infrastructure as Code (IaC) via Terraform",
      "24/7 Monitoring & Alerting Telemetry",
      "Zero-Downtime Blue/Green Deployments"
    ],
    "tech": [
      "GitHub Actions",
      "Terraform",
      "Docker",
      "Grafana",
      "Prometheus"
    ]
  },
  {
    "title": "AI & Workflow Automation",
    "icon": "🤖",
    "badge": "LLM Agents • Intelligence",
    "fullDesc": "Harness frontier Artificial Intelligence for tangible business impact. We build custom retrieval-augmented generation (RAG) knowledge systems, fine-tuned LLM agents, automated data pipelines, and predictive recommendation models embedded directly into your workflow.",
    "deliverables": [
      "Autonomous LLM & RAG Agents",
      "Custom Workflow Automation Bots",
      "Predictive Data & Recommendation Models",
      "Enterprise AI Guardrails & Prompt Defense"
    ],
    "tech": [
      "Python",
      "Gemini API",
      "PyTorch",
      "LangChain",
      "OpenAI"
    ]
  },
  {
    "title": "IT & Digital Consulting",
    "icon": "💼",
    "badge": "Strategy • Transformation",
    "fullDesc": "Partner with veteran technology advisors. We conduct technical due diligence, architectural assessments, cybersecurity reviews, and strategic roadmapping to ensure your technology investments deliver maximum impact and high ROI.",
    "deliverables": [
      "Technical Due Diligence & Audits",
      "Legacy Code Modernization Roadmaps",
      "Cybersecurity & Compliance Reviews",
      "Strategic Technology Advisory"
    ],
    "tech": [
      "Roadmaps",
      "Architecture",
      "Security",
      "Code Audits"
    ]
  }
];

    const sliderStage = document.getElementById('sliderStage');
    const sliderCards = document.querySelectorAll('.slider-card');
    const btnSliderPrev = document.getElementById('btnSliderPrev');
    const btnSliderNext = document.getElementById('btnSliderNext');
    const sliderCounter = document.getElementById('sliderCounter');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const serviceModalOverlay = document.getElementById('serviceModalOverlay');
    const modalBackdrop = document.getElementById('serviceModalBackdrop');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalContactBtn = document.getElementById('modalContactBtn');

    let currentSliderIndex = 0;
    const totalServices = SERVICES_CATALOG.length;


    function getSliderDiff(index, active, total) {
      let diff = index - active;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;
      return diff;
    }

    function updateSlider() {
      const isMobile = window.innerWidth <= 768;

      sliderCards.forEach((card, idx) => {
        const diff = getSliderDiff(idx, currentSliderIndex, totalServices);
        const absDiff = Math.abs(diff);

        card.classList.toggle('active-center', diff === 0);
        card.inert = absDiff > 2;
        card.setAttribute('aria-hidden', String(absDiff > 2));

        if (absDiff > 2) {
          card.style.opacity = '0';
          card.style.pointerEvents = 'none';
          card.style.zIndex = '1';
          card.style.transform = `translateX(${diff > 0 ? 850 : -850}px) translateY(0px) scale(0.65)`;
          return;
        }

        let tx = 0;
        let scale = 1;
        let opacity = 1;
        let zIndex = 10;

        if (diff === 0) {
          tx = 0;
          scale = isMobile ? 1.02 : 1.06;
          opacity = 1;
          zIndex = 15;
          card.style.pointerEvents = 'auto';
        } else if (diff === -1) {
          tx = isMobile ? -170 : -330;
          scale = isMobile ? 0.88 : 0.92;
          opacity = 0.78;
          zIndex = 10;
          card.style.pointerEvents = 'auto';
        } else if (diff === 1) {
          tx = isMobile ? 170 : 330;
          scale = isMobile ? 0.88 : 0.92;
          opacity = 0.78;
          zIndex = 10;
          card.style.pointerEvents = 'auto';
        } else if (diff === -2) {
          tx = isMobile ? -300 : -620;
          scale = isMobile ? 0.74 : 0.8;
          opacity = 0.42;
          zIndex = 5;
          card.style.pointerEvents = 'auto';
        } else if (diff === 2) {
          tx = isMobile ? 300 : 620;
          scale = isMobile ? 0.74 : 0.8;
          opacity = 0.42;
          zIndex = 5;
          card.style.pointerEvents = 'auto';
        }

        // STRAIGHT ORDER: Pure horizontal translation, zero rotation, zero arc drop
        card.style.transform = `translateX(${tx}px) translateY(0px) scale(${scale})`;
        card.style.opacity = opacity;
        card.style.zIndex = zIndex;
      });

      // Update dashboard pill
      const activeData = SERVICES_CATALOG[currentSliderIndex];
      if (activeData && sliderCounter) {
        sliderCounter.textContent = `SERVICE 0${currentSliderIndex + 1} / 0${totalServices} • ${activeData.title}`;
      }

      // Update pagination dots
      sliderDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSliderIndex);
        dot.setAttribute('aria-current', String(idx === currentSliderIndex));
      });
    }

    // Card Clicking
    sliderCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const cardIndex = parseInt(card.dataset.index, 10);
        if (e.target.closest('button')) { openServiceModal(cardIndex); return; }
        if (cardIndex !== currentSliderIndex) {
          currentSliderIndex = cardIndex;
          updateSlider();
        } else {
          openServiceModal(cardIndex);
        }
      });
    });

    // Navigation buttons
    if (btnSliderPrev) {
      btnSliderPrev.addEventListener('click', () => {
        currentSliderIndex = (currentSliderIndex - 1 + totalServices) % totalServices;
        updateSlider();
      });
    }

    if (btnSliderNext) {
      btnSliderNext.addEventListener('click', () => {
        currentSliderIndex = (currentSliderIndex + 1) % totalServices;
        updateSlider();
      });
    }

    sliderDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        currentSliderIndex = parseInt(dot.dataset.index, 10);
        updateSlider();
      });
    });

    // Touch swipe support
    let touchStartX = 0;
    if (sliderStage) {
      sliderStage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
      }, { passive: true });

      sliderStage.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchEndX - touchStartX;
        if (Math.abs(diffX) > 40) {
          if (diffX < 0) {
            currentSliderIndex = (currentSliderIndex + 1) % totalServices;
          } else {
            currentSliderIndex = (currentSliderIndex - 1 + totalServices) % totalServices;
          }
          updateSlider();
        }
      }, { passive: true });
    }

    // Manual navigation keeps the carousel stable while reading or using a keyboard.
    let previousFocus = null;
    // Modal logic
    function openServiceModal(index) {
      const s = SERVICES_CATALOG[index];
      if (!s || !serviceModalOverlay) return;
      document.getElementById('modalIcon').textContent = s.icon;
      document.getElementById('modalBadge').textContent = s.badge;
      document.getElementById('modalTitle').textContent = s.title;
      document.getElementById('modalDesc').textContent = s.fullDesc;

      const deliverablesList = document.getElementById('modalDeliverables');
      deliverablesList.replaceChildren(...s.deliverables.map(item => { const li = document.createElement('li'); li.textContent = item; return li; }));

      const techGrid = document.getElementById('modalTech');
      techGrid.replaceChildren(...s.tech.map(item => { const span = document.createElement('span'); span.className = 'modal-tech-pill'; span.textContent = item; return span; }));

      previousFocus = document.activeElement;
      serviceModalOverlay.classList.add('is-open');
      serviceModalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (modalCloseBtn) modalCloseBtn.focus();
    }

    function closeServiceModal() {
      if (!serviceModalOverlay) return;
      serviceModalOverlay.classList.remove('is-open');
      serviceModalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      previousFocus?.focus();
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeServiceModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeServiceModal);
    if (modalContactBtn) {
      modalContactBtn.addEventListener('click', () => {
        closeServiceModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && serviceModalOverlay.classList.contains('is-open')) {
        const items = [...serviceModalOverlay.querySelectorAll('button, a[href]')];
        const first = items[0], last = items.at(-1);
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      if (e.key === 'Escape' && serviceModalOverlay && serviceModalOverlay.classList.contains('is-open')) {
        closeServiceModal();
      }
    });

    // Window resize adjustment
    window.addEventListener('resize', () => {
      updateSlider();
    });

    // Initialize straight slider
    updateSlider();
    sliderStage.classList.add('is-enhanced');

    // ── FIXED / FLOATING NAVBAR ON SCROLL PAST HERO ──
    const navContainer = document.querySelector('.nav-container');
    const scrollProgress = document.getElementById('scrollProgress');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    

    function updateNavScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      
      // Threshold: appear when user begins scrolling past the hero card
      // Using 100px so it appears reliably as soon as user leaves the top hero area
      if (scrollY > 100) {
        if (navContainer) navContainer.classList.add('visible');
      } else {
        if (navContainer) navContainer.classList.remove('visible');
      }

      // Navbar elevation styling on scroll
      if (navbar) {
        navbar.classList.toggle('scrolled', scrollY > 60);
      }

      // Top scroll progress bar
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollProgress && height > 0) {
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
      }

      // Scroll Spy for Nav links
      let currentSection = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 160;
        if (winScroll >= top) {
          currentSection = sec.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
          link.classList.add('active');
        }
      });
    }

    let scrollPending = false;
    window.addEventListener('scroll', () => {
      if (scrollPending) return;
      scrollPending = true;
      requestAnimationFrame(() => { updateNavScroll(); scrollPending = false; });
    }, { passive: true });
    // Run once on load
    updateNavScroll();

    // Smooth scroll for nav links & close mobile menu if open
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
            setMenuOpen(false);
          }
        }
      });
    });

    // Mobile menu

    const ham = document.getElementById('hamburger');
    const navLinksList = document.querySelector('.nav-links');
    let menuOpen = false;

    function setMenuOpen(open) {
      menuOpen = open;
      navLinksList.classList.toggle('is-open', open);
      ham.setAttribute('aria-expanded', String(open));
    }
    ham.addEventListener('click', () => setMenuOpen(!menuOpen));
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); ham.focus(); } });
    matchMedia('(max-width: 960px)').addEventListener('change', () => setMenuOpen(false));

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async event => {
      event.preventDefault();
      const button = document.getElementById('contact-submit-btn');
      const status = document.getElementById('form-status');
      if (button.disabled || !contactForm.reportValidity()) return;
      // Netlify strips this marker when form detection is enabled during deployment.
      if (contactForm.hasAttribute('data-netlify') || location.protocol === 'file:') {
        status.textContent = 'This form is not connected yet. Please email talvexpvt@gmail.com.';
        return;
      }
      button.disabled = true;
      button.textContent = 'Sending…';
      status.textContent = '';
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(contactForm)).toString(),
          signal: controller.signal
        });
        if (!response.ok) throw new Error('Submission failed');
        status.textContent = 'Thank you! Your message has been submitted.';
        contactForm.reset();
      } catch {
        status.textContent = 'We could not confirm delivery. Your message is still here. Please try again or email talvexpvt@gmail.com.';
      } finally {
        clearTimeout(timeout);
        button.disabled = false;
        button.textContent = 'Send Message →';
      }
    });

  // ── SCROLL REVEAL OBSERVER ──
  const revealElements = document.querySelectorAll('.reveal');
  if (typeof IntersectionObserver !== 'undefined' && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }
