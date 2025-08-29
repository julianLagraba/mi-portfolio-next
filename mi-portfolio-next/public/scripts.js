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

/* -------------------- CAROUSELS (Cert & Workflow) — smooth transform -------------------- */
function initCarousels() {
  document.querySelectorAll(".cert-carousel, .workflow-carousel").forEach((carousel) => {
    if (carousel.dataset.wired === "1") return;

    const container   = carousel.querySelector(".carousel-track-container");
    const track       = carousel.querySelector(".carousel-track");
    const prevBtn     = carousel.querySelector(".carousel-btn.prev");
    const nextBtn     = carousel.querySelector(".carousel-btn.next");
    if (!container || !track || !prevBtn || !nextBtn) return;

    // 1) Duplico la primera tanda para loop continuo
    const originals = Array.from(track.querySelectorAll(".carousel-slide"));
    if (!originals.length) return;
    const frag = document.createDocumentFragment();
    originals.forEach((s) => {
      const c = s.cloneNode(true);
      c.setAttribute("aria-hidden", "true");
      c.dataset.clone = "1";
      frag.appendChild(c);
    });
    track.appendChild(frag);

    // 2) Métricas
    let firstSetWidth = 0;
    let gap = 0;
    const measure = () => {
      const cs = getComputedStyle(track);
      gap = parseFloat(cs.gap || "0") || 0;
      firstSetWidth = originals.reduce((acc, s) => acc + s.offsetWidth, 0) + gap * (originals.length - 1);
    };

    // Esperar a que carguen imágenes para medir bien
    const imgs = track.querySelectorAll("img");
    let loaded = 0;
    const onReady = () => {
      measure();
      // 3) Autoplay por transform (sin snaps)
      container.style.scrollSnapType = "none";
      let offset = 0;
      const loopSec = Number(carousel.dataset.speed || 8); // igual que skills
      let playing = true, rafId = 0, last = 0;

      const speedPxPerMs = () => (firstSetWidth > 0 ? firstSetWidth / (loopSec * 1000) : 0);

      const animate = (t) => {
        if (!last) last = t;
        const dt = t - last;
        last = t;

        if (playing && firstSetWidth > 0) {
          offset += dt * speedPxPerMs();
          if (offset >= firstSetWidth) offset -= firstSetWidth; // wrap perfecto
          track.style.transform = `translate3d(${-offset}px,0,0)`; // GPU
        }
        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);

      // 4) Controles manuales (tween corto para que no “salte”)
      let tweenId = 0;
      const stepWidth = () => (originals[0]?.offsetWidth || container.clientWidth) + gap;
      const tweenTo = (delta) => {
        playing = false;
        cancelAnimationFrame(tweenId);
        const start = performance.now();
        const duration = 220;
        const startOffset = offset;
        const target = (startOffset + delta + firstSetWidth) % firstSetWidth;
        const ease = (x) => 1 - Math.pow(1 - x, 3);

        const run = (now) => {
          const p = Math.min(1, (now - start) / duration);
          const val = startOffset + ((target - startOffset + firstSetWidth) % firstSetWidth) * ease(p);
          offset = (val + firstSetWidth) % firstSetWidth;
          track.style.transform = `translate3d(${-offset}px,0,0)`;
          if (p < 1) tweenId = requestAnimationFrame(run);
          else playing = true;
        };
        tweenId = requestAnimationFrame(run);
      };

      prevBtn.addEventListener("click", () => tweenTo(-stepWidth()));
      nextBtn.addEventListener("click", () => tweenTo(+stepWidth()));

      // 5) Pausas por interacción
      ["mouseenter","focusin","pointerdown","touchstart","wheel"].forEach(evt =>
        container.addEventListener(evt, () => { playing = false; }, { passive: true })
      );
      ["mouseleave","focusout","pointerup","touchend"].forEach(evt =>
        container.addEventListener(evt, () => { playing = true; }, { passive: true })
      );

      // 6) Mantener continuidad al redimensionar
      const ro = new ResizeObserver(() => {
        const old = firstSetWidth || 1;
        measure();
        const ratio = offset / old;
        offset = ratio * firstSetWidth;
        track.style.transform = `translate3d(${-offset}px,0,0)`;
      });
      ro.observe(track);

      // Respeta prefers-reduced-motion
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) playing = false;

      // Limpieza opcional si desmontás carousels dinámicamente
      carousel.addEventListener("carousel:destroy", () => {
        cancelAnimationFrame(rafId);
        cancelAnimationFrame(tweenId);
        ro.disconnect();
      });
    };

    if (!imgs.length) onReady();
    else imgs.forEach((im) => (im.complete ? ++loaded : im.addEventListener("load", () => ++loaded >= imgs.length && onReady())));
    if (loaded >= imgs.length) onReady();

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
