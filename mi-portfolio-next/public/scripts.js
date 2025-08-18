// /public/scripts.js
(function () {
  if (typeof window === "undefined") return;

  /* -------------------- PARTICULAS (Home) -------------------- */
  const P_CFG = {
    fullScreen: { enable: false },
    detectRetina: true,
    particles: {
      number: { value: 60 },
      color: { value: "#4a90e2" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: { min: 2, max: 6 } },
      move: { enable: true, speed: 1.5, outModes: "out" }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      }
    }
  };

  function bootParticles() {
    const el = document.getElementById("tsparticles");
    if (!el) return;

    if (!window.tsParticles) {
      setTimeout(bootParticles, 50);
      return;
    }

    // Evita contenedores duplicados al navegar
    try {
      window.tsParticles.dom().forEach((c) => {
        const target = c?.domItem || c?.interactivity?.element;
        if (target && target.id === "tsparticles") c.destroy();
      });
    } catch (_) {}

    if (el.__particlesLoaded) return;
    el.__particlesLoaded = true;

    window.tsParticles.load("tsparticles", P_CFG);
  }

  function initHeroArrow() {
    const arrow = document.getElementById("hero-arrow");
    const hero  = document.getElementById("home");
    const intro = document.getElementById("intro");
    if (!arrow || !hero) return;

    // Oculta si no estás en el home de verdad
    const isOnHomeRoute = () => location.pathname === "/";

    // Oculta cuando no estás arriba o cuando ya “entraste” a intro
    const evaluate = () => {
      let hide = !isOnHomeRoute() || window.scrollY > 100;
      if (!hide && intro) {
        // si #intro está al menos tocando el viewport, oculto flecha
        const r = intro.getBoundingClientRect();
        if (r.top < (innerHeight - 80)) hide = true;
      }
      arrow.classList.toggle("is-hidden", hide);
    };

    // Primera evaluación
    evaluate();

    // Listeners
    window.addEventListener("scroll", evaluate, { passive: true });
    window.addEventListener("hashchange", evaluate);
    window.addEventListener("popstate", evaluate);
  }
  /* -------------------- FILTROS (Portfolio) -------------------- */
  function initFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    if (!buttons.length) return;

    // Evita duplicar listeners
    buttons.forEach((btn) => {
      if (btn.dataset.wired === "1") return;

      btn.addEventListener("click", () => {
        // activa visualmente
        const current = document.querySelector(".filter-btn.active");
        if (current) current.classList.remove("active");
        btn.classList.add("active");

        const filter = btn.dataset.filter?.toLowerCase() || "all";
        document.querySelectorAll(".project-card").forEach((card) => {
          const tech = (card.dataset.tech || "").toLowerCase().split(/\s+/); // admite múltiples tags
          const show = filter === "all" || tech.includes(filter);
          card.style.display = show ? "" : "none"; // "" restaura el display CSS original
        });
      });

      btn.dataset.wired = "1";
    });

    // Si no hay activo, activa "Todos" por defecto y aplica filtro
    if (!document.querySelector(".filter-btn.active")) {
      const allBtn = document.querySelector('.filter-btn[data-filter="all"]') || buttons[0];
      allBtn.classList.add("active");
      allBtn.click(); // aplica inmediatamente
    }
  }

  /* -------------------- CAROUSELS (Cert & Workflow) -------------------- */
  function initCarousels() {
    document.querySelectorAll(".cert-carousel, .workflow-carousel").forEach((carousel) => {
      if (carousel.dataset.wired === "1") return;

      const trackContainer = carousel.querySelector(".carousel-track-container");
      const track = carousel.querySelector(".carousel-track");
      const prevBtn = carousel.querySelector(".carousel-btn.prev");
      const nextBtn = carousel.querySelector(".carousel-btn.next");
      if (!trackContainer || !track || !prevBtn || !nextBtn) return;

      const firstSlide = carousel.querySelector(".carousel-slide");
      const gapPx = parseFloat(getComputedStyle(track).gap || "0") || 24;
      const step = firstSlide ? firstSlide.offsetWidth + gapPx : trackContainer.clientWidth;

      prevBtn.addEventListener("click", () => {
        trackContainer.scrollBy({ left: -step, behavior: "smooth" });
      });
      nextBtn.addEventListener("click", () => {
        trackContainer.scrollBy({ left: step, behavior: "smooth" });
      });

      carousel.dataset.wired = "1";
    });
  }


  /* -------------------- Arranque y re-enganche SPA -------------------- */
  function bootAll() {
    bootParticles();
    initFilters();
    initCarousels();
    initHeroArrow();  
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootAll);
  } else {
    bootAll();
  }

  const reBoot = () => setTimeout(bootAll, 0);
  window.addEventListener("hashchange", reBoot);
  window.addEventListener("popstate", reBoot);
  ["pushState", "replaceState"].forEach((fn) => {
    const orig = history[fn];
    history[fn] = function () {
      const ret = orig.apply(this, arguments);
      reBoot();
      return ret;
    };
  });

  const mo = new MutationObserver(() => bootAll());
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
