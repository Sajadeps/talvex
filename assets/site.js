// ── TALVEX PRODUCTION SCRIPTS ──
(() => {
  'use strict';

  // 1. SERVICES CATALOG (6 CORE SERVICES)
  const SERVICES_CATALOG = [
  {
    "id": "web",
    "title": "Modern Web Development",
    "icon": "🌐",
    "badge": "Next.js • High Speed",
    "shortDesc": "Create blazing-fast, responsive, secure, and intuitive web applications with modern React frameworks.",
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
    ],
    "artCode": "<div class=\"card-art-web\"><div class=\"web-bar\"><span class=\"wb-dot red\"></span><span class=\"wb-dot\"></span><span class=\"wb-dot\"></span><div class=\"wb-url\">https://talvex.com</div></div><div class=\"web-lines\"><span></span><span></span><span class=\"short red\"></span></div></div>"
  },
  {
    "id": "mobile",
    "title": "Mobile App Development",
    "icon": "📱",
    "badge": "iOS • Android • Native",
    "shortDesc": "Develop high-performance, intuitive mobile apps for iOS and Android using modern cross-platform native frameworks.",
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
    ],
    "artCode": "<div class=\"card-art-mob\"><div class=\"mob-notch\"><span class=\"notch-cam\"></span></div><div class=\"mob-card\"><div class=\"mob-dot red\"></div><div class=\"mob-bar\"></div></div></div>"
  },
  {
    "id": "uiux",
    "title": "UI/UX Design & Architecture",
    "icon": "🎨",
    "badge": "Figma • Systems • Delight",
    "shortDesc": "Design clean, intuitive, and visually memorable digital interfaces crafted with empathy and tested for usability.",
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
    ],
    "artCode": "<div class=\"card-art-design\"><div class=\"d-palette\"><span style=\"background:#DC2626\"></span><span style=\"background:#4B5563\"></span><span style=\"background:#1F2937\"></span></div><div class=\"d-vector\"></div></div>"
  },
  {
    "id": "cloud",
    "title": "Cloud Solutions & Infra",
    "icon": "☁️",
    "badge": "Resilient • High Scale",
    "shortDesc": "Architect and deploy resilient, high-availability cloud infrastructure built for elastic growth and enterprise security.",
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
    ],
    "artCode": "<div class=\"card-art-cloud\"><div class=\"cloud-ring cr-1\"></div><div class=\"cloud-ring cr-2\"></div><div class=\"cloud-center\">☁</div></div>"
  },
  {
    "id": "ai",
    "title": "AI & Workflow Automation",
    "icon": "🤖",
    "badge": "LLM Agents • Intelligence",
    "shortDesc": "Build intelligent automated features, generative LLM integrations, and predictive systems that multiply team productivity.",
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
    ],
    "artCode": "<div class=\"card-art-ai\"><div class=\"ai-sparkle\">✦</div><div class=\"ai-mesh\"><span></span><span></span><span></span></div><div class=\"ai-chip\">NEURAL</div></div>"
  },
  {
    "id": "consulting",
    "title": "IT & Digital Consulting",
    "icon": "💼",
    "badge": "Strategy • Transformation",
    "shortDesc": "Receive veteran technical leadership, legacy modernization roadmaps, security audits, and architectural guidance.",
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
    ],
    "artCode": "<div class=\"card-art-strat\"><div class=\"strat-bar sb-1\"></div><div class=\"strat-bar sb-2\"></div><div class=\"strat-bar sb-3\"></div><div class=\"strat-trend\">↗ +180%</div></div>"
  }
];

  const sliderStage = document.getElementById('sliderStage') || document.getElementById('orbitStage');
  const sliderCards = document.querySelectorAll('.slider-card, .orbit-card');
  const btnSliderPrev = document.getElementById('btnSliderPrev') || document.getElementById('btnOrbitPrev');
  const btnSliderNext = document.getElementById('btnSliderNext') || document.getElementById('btnOrbitNext');
  const sliderCounter = document.getElementById('sliderCounter') || document.getElementById('orbitCounter');
  const sliderDots = document.querySelectorAll('.slider-dot, .orbit-dot');
  const serviceModalOverlay = document.getElementById('serviceModalOverlay');
  const modalBackdrop = document.getElementById('serviceModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContactBtn = document.getElementById('modalContactBtn');

  let currentSliderIndex = 0;
  const totalServices = SERVICES_CATALOG.length;
  let isSliderPaused = false;
  let autoSliderTimer = null;

  function getSliderDiff(index, active, total) {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  }

  // 3D Orbit Arc Animation (Direct Match to Netlify Reference)
  function updateSlider(animate = true) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    sliderCards.forEach((card, idx) => {
      const diff = getSliderDiff(idx, currentSliderIndex, totalServices);
      const absDiff = Math.abs(diff);

      const isActive = diff === 0;
      card.classList.toggle('active-center', isActive);
      card.classList.toggle('active', isActive);

      if (absDiff > 2) {
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.style.zIndex = '1';
        card.style.transform = `translateX(${diff > 0 ? 550 : -550}px) translateY(120px) scale(0.6)`;
        return;
      }

      let tx = 0;
      let ty = 0;
      let rotZ = 0;
      let rotY = 0;
      let scale = 1;
      let opacity = 1;
      let zIndex = 10;

      if (diff === 0) {
        tx = 0;
        ty = 0;
        rotZ = 0;
        rotY = 0;
        scale = isMobile ? 1.04 : 1.08;
        opacity = 1;
        zIndex = 15;
        card.style.pointerEvents = 'auto';
      } else if (diff === -1) {
        tx = isMobile ? -145 : -245;
        ty = isMobile ? 22 : 36;
        rotZ = -9;
        rotY = 16;
        scale = isMobile ? 0.88 : 0.92;
        opacity = 0.88;
        zIndex = 10;
        card.style.pointerEvents = 'auto';
      } else if (diff === 1) {
        tx = isMobile ? 145 : 245;
        ty = isMobile ? 22 : 36;
        rotZ = 9;
        rotY = -16;
        scale = isMobile ? 0.88 : 0.92;
        opacity = 0.88;
        zIndex = 10;
        card.style.pointerEvents = 'auto';
      } else if (diff === -2) {
        tx = isMobile ? -245 : -445;
        ty = isMobile ? 60 : 95;
        rotZ = -18;
        rotY = 28;
        scale = isMobile ? 0.74 : 0.8;
        opacity = 0.65;
        zIndex = 6;
        card.style.pointerEvents = 'auto';
      } else if (diff === 2) {
        tx = isMobile ? 245 : 445;
        ty = isMobile ? 60 : 95;
        rotZ = 18;
        rotY = -28;
        scale = isMobile ? 0.74 : 0.8;
        opacity = 0.65;
        zIndex = 6;
        card.style.pointerEvents = 'auto';
      }

      card.style.transform = `translateX(${tx}px) translateY(${ty}px) rotateZ(${rotZ}deg) rotateY(${rotY}deg) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
    });

    // Update Counter & Dots
    const activeData = SERVICES_CATALOG[currentSliderIndex];
    if (activeData && sliderCounter) {
      sliderCounter.textContent = `SERVICE 0${currentSliderIndex + 1} / 0${totalServices} • ${activeData.title}`;
    }

    sliderDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSliderIndex);
    });
  }

  // Card click
  sliderCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      const cardIndex = parseInt(card.dataset.index, 10);
      if (cardIndex !== currentSliderIndex) {
        currentSliderIndex = cardIndex;
        updateSlider();
      } else {
        openServiceModal(cardIndex);
      }
    });
  });

  // Buttons
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

  // Auto-move carousel after 4 seconds
  function scheduleAutoSlide() {
    if (typeof setTimeout === 'undefined') return;
    if (autoSliderTimer) clearTimeout(autoSliderTimer);
    autoSliderTimer = setTimeout(() => {
      if (!isSliderPaused) {
        currentSliderIndex = (currentSliderIndex + 1) % totalServices;
        updateSlider();
      }
      scheduleAutoSlide();
    }, 4000);
  }

  if (sliderStage) {
    sliderStage.addEventListener('mouseenter', () => { isSliderPaused = true; });
    sliderStage.addEventListener('mouseleave', () => { isSliderPaused = false; });
    sliderStage.addEventListener('touchstart', () => { isSliderPaused = true; }, { passive: true });
    sliderStage.addEventListener('touchend', () => { isSliderPaused = false; }, { passive: true });
  }

  // Modal
  function openServiceModal(index) {
    const s = SERVICES_CATALOG[index];
    if (!s || !serviceModalOverlay) return;

    isSliderPaused = true;
    const iconEl = document.getElementById('modalIcon');
    const badgeEl = document.getElementById('modalBadge');
    const titleEl = document.getElementById('modalTitle');
    const descEl = document.getElementById('modalDesc');
    const delivEl = document.getElementById('modalDeliverables');
    const techEl = document.getElementById('modalTech');

    if (iconEl) iconEl.textContent = s.icon;
    if (badgeEl) badgeEl.textContent = s.badge;
    if (titleEl) titleEl.textContent = s.title;
    if (descEl) descEl.textContent = s.fullDesc;

    if (delivEl) {
      if (typeof delivEl.replaceChildren === 'function') {
        const lis = s.deliverables.map(item => {
          const li = document.createElement('li');
          li.textContent = item;
          return li;
        });
        delivEl.replaceChildren(...lis);
      } else {
        delivEl.innerHTML = s.deliverables.map(item => `<li>${item}</li>`).join('');
      }
    }

    if (techEl) {
      if (typeof techEl.replaceChildren === 'function') {
        const spans = s.tech.map(t => {
          const span = document.createElement('span');
          span.className = 'modal-tech-pill';
          span.textContent = t;
          return span;
        });
        techEl.replaceChildren(...spans);
      } else {
        techEl.innerHTML = s.tech.map(t => `<span class="modal-tech-pill">${t}</span>`).join('');
      }
    }

    serviceModalOverlay.classList.add('is-open');
    serviceModalOverlay.setAttribute('aria-hidden', 'false');
    if (typeof document !== 'undefined' && document.body && document.body.style) {
      document.body.style.overflow = 'hidden';
    }
    if (modalCloseBtn && typeof modalCloseBtn.focus === 'function') modalCloseBtn.focus();
  }

  function closeServiceModal() {
    if (!serviceModalOverlay) return;
    serviceModalOverlay.classList.remove('is-open');
    serviceModalOverlay.setAttribute('aria-hidden', 'true');
    if (typeof document !== 'undefined' && document.body && document.body.style) {
      document.body.style.overflow = '';
    }
    isSliderPaused = false;
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeServiceModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeServiceModal);
  if (modalContactBtn) modalContactBtn.addEventListener('click', () => closeServiceModal());

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModalOverlay && serviceModalOverlay.classList.contains('is-open')) {
      closeServiceModal();
    }
  });

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => updateSlider(false));
  }

  updateSlider(false);
  scheduleAutoSlide();

  // 2. MOUSE SPOTLIGHT FOLLOW (From Netlify Reference)
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      if (cursorGlow.style) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
      }
    }, { passive: true });
  }

  // 3. FIXED NAVBAR ON SCROLL PAST HERO
  const navContainer = document.querySelector('.nav-container');
  const scrollProgress = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function updateNavScroll() {
    const scrollY = typeof window !== 'undefined' ? (window.scrollY || 0) : 0;
    if (scrollY > 100) {
      if (navContainer && navContainer.classList) navContainer.classList.add('visible');
    } else {
      if (navContainer && navContainer.classList) navContainer.classList.remove('visible');
    }

    if (navbar && navbar.classList) {
      navbar.classList.toggle('scrolled', scrollY > 60);
    }

    if (scrollProgress && typeof document !== 'undefined' && document.documentElement) {
      const winScroll = document.documentElement.scrollTop || 0;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        scrollProgress.style.width = ((winScroll / height) * 100) + '%';
      }
    }

    // Scroll Spy
    if (sections.length > 0 && typeof document !== 'undefined' && document.documentElement) {
      const winScroll = document.documentElement.scrollTop || 0;
      let currentSection = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 160;
        if (winScroll >= top) {
          currentSection = sec.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        if (link.classList) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
          }
        }
      });
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', updateNavScroll, { passive: true });
    updateNavScroll();
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#') && typeof document !== 'undefined') {
        const targetEl = document.querySelector(targetId);
        if (targetEl && typeof targetEl.scrollIntoView === 'function') {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 4. MOBILE HAMBURGER MENU
  const ham = document.getElementById('hamburger');
  const navLinksList = document.querySelector('.nav-links');
  let menuOpen = false;

  function setMenuOpen(open) {
    menuOpen = open;
    if (ham && typeof ham.setAttribute === 'function') {
      ham.setAttribute('aria-expanded', String(menuOpen));
    }
    if (navLinksList && navLinksList.classList) {
      navLinksList.classList.toggle('open', menuOpen);
    }
  }

  if (ham) {
    ham.addEventListener('click', () => setMenuOpen(!menuOpen));
  }
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuOpen) setMenuOpen(false);
  });
  if (typeof matchMedia === 'function') {
    const mq = matchMedia('(max-width: 960px)');
    if (mq && typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', () => setMenuOpen(false));
    }
  }

  // 5. CONTACT FORM SUBMISSION
  const contactForm = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async event => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      if (submitBtn) submitBtn.disabled = true;
      if (statusEl) statusEl.textContent = 'Sending message...';

      const isNetlify = contactForm.getAttribute('data-netlify') === 'true' || contactForm.hasAttribute('data-netlify');

      if (isNetlify) {
        if (statusEl) {
          statusEl.textContent = 'Form endpoint is not connected yet. Netlify will capture this in production.';
        }
        if (submitBtn) submitBtn.disabled = false;
        return;
      }

      try {
        const body = new URLSearchParams(new FormData(contactForm)).toString();
        const res = await fetch(contactForm.getAttribute('action') || '/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body
        });
        if (res.ok) {
          contactForm.reset();
          if (statusEl) statusEl.textContent = 'Thank you! We will get back to you shortly.';
        } else {
          if (statusEl) statusEl.textContent = 'Submission received, but server could not confirm. Please email us directly.';
        }
      } catch (err) {
        if (statusEl) statusEl.textContent = 'Could not reach server. Please email talvexpvt@gmail.com.';
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // 6. SCROLL REVEAL OBSERVER
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
    revealElements.forEach(el => {
      if (el.classList) el.classList.add('visible');
    });
  }
})();
