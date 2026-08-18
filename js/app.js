/**
 * SRE & OBSERVABILITY PORTFOLIO TEMPLATE
 * Author: Axel Kabir Ahumada Tenazoa
 * License: MIT License
 * 
 * Interactive Telemetry Engine & UI Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initConsoleTabs();
  initTelemetryChart();
  initCertFilters();
  initCopyClipboard();
  initScrollSpy();
});

/* ==========================================================================
   1. Mobile Navigation
   ========================================================================== */
function initMobileNav() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (!mobileBtn || !mainNav) return;

  mobileBtn.addEventListener('click', () => {
    mainNav.classList.toggle('mobile-active');
    const isExpanded = mainNav.classList.contains('mobile-active');
    mobileBtn.setAttribute('aria-expanded', isExpanded);
    mobileBtn.innerHTML = isExpanded ? '✕' : '☰';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('mobile-active');
      mobileBtn.innerHTML = '☰';
    });
  });
}

/* ==========================================================================
   2. Observability Console Tabs
   ========================================================================== */
function initConsoleTabs() {
  const tabButtons = document.querySelectorAll('.console-tab-btn');
  const panels = document.querySelectorAll('.console-content-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(`tab-${targetTab}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. Real-time Telemetry & APM Canvas Chart (Simulation)
   ========================================================================== */
function initTelemetryChart() {
  const canvas = document.getElementById('telemetryChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const maxPoints = 30;
  let throughputData = [];
  let latencyData = [];

  // Initial values
  for (let i = 0; i < maxPoints; i++) {
    throughputData.push(1600 + Math.random() * 500);
    latencyData.push(12 + Math.random() * 8);
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function drawChart() {
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    // Draw horizontal grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    const gridRows = 4;
    for (let r = 0; r <= gridRows; r++) {
      const y = (height / gridRows) * r;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const stepX = width / (maxPoints - 1);

    // 1. Throughput Line (Cyan)
    const maxTps = 3000;
    ctx.beginPath();
    throughputData.forEach((val, index) => {
      const x = index * stepX;
      const y = height - (val / maxTps) * (height * 0.85);
      if (index === 0) ctx.moveTo(x, y);
      else {
        const prevX = (index - 1) * stepX;
        const prevY = height - (throughputData[index - 1] / maxTps) * (height * 0.85);
        const midX = (prevX + x) / 2;
        ctx.bezierCurveTo(midX, prevY, midX, y, x, y);
      }
    });
    ctx.strokeStyle = '#06B6D4';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // 2. Latency Line (Emerald Green)
    const maxLat = 50;
    ctx.beginPath();
    latencyData.forEach((val, index) => {
      const x = index * stepX;
      const y = height - (val / maxLat) * (height * 0.7);
      if (index === 0) ctx.moveTo(x, y);
      else {
        const prevX = (index - 1) * stepX;
        const prevY = height - (latencyData[index - 1] / maxLat) * (height * 0.7);
        const midX = (prevX + x) / 2;
        ctx.bezierCurveTo(midX, prevY, midX, y, x, y);
      }
    });
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Periodic metric updates
  setInterval(() => {
    const lastTps = throughputData[throughputData.length - 1];
    const newTps = Math.max(1400, Math.min(2800, lastTps + (Math.random() - 0.48) * 120));
    throughputData.shift();
    throughputData.push(newTps);

    const lastLat = latencyData[latencyData.length - 1];
    const newLat = Math.max(10, Math.min(26, lastLat + (Math.random() - 0.5) * 2.5));
    latencyData.shift();
    latencyData.push(newLat);

    const tpsEl = document.getElementById('kpi-tps-val');
    const latEl = document.getElementById('kpi-lat-val');
    if (tpsEl) tpsEl.textContent = `${Math.round(newTps)} tps`;
    if (latEl) latEl.textContent = `${newLat.toFixed(1)} ms`;

    drawChart();
  }, 1000);

  drawChart();

  const serviceSelect = document.getElementById('serviceSelect');
  if (serviceSelect) {
    serviceSelect.addEventListener('change', (e) => {
      showToast(`Telemetría conmutada: ${e.target.value}`);
    });
  }
}

/* ==========================================================================
   4. Certifications Filter
   ========================================================================== */
function initCertFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      certCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. Copy to Clipboard with Toast Notification
   ========================================================================== */
function initCopyClipboard() {
  const copyBtns = document.querySelectorAll('.btn-copy-email');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = btn.getAttribute('data-email') || 'tu-email@ejemplo.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Correo copiado al portapapeles: ' + email);
      }).catch(() => {
        showToast('Error al copiar correo');
      });
    });
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   6. Scroll Spy Navigation
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
