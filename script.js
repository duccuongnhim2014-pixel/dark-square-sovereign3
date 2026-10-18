(() => {
  "use strict";
  const CLUB_URL = "https://www.chess.com/club/club-f0acc5c5";
  const toggle = document.getElementById("toolbox-toggle");
  const menu = document.getElementById("toolbox-menu");
  const toast = document.getElementById("toast");
  const scan = document.getElementById("scan-overlay");
  const confettiLayer = document.getElementById("confetti-layer");
  document.getElementById("year").textContent = new Date().getFullYear();
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
  }

  toggle.addEventListener("click", () => {
    const isOpen = !menu.hidden;
    menu.hidden = isOpen;
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open quick tools" : "Close quick tools");
  });

  async function copyClubLink() {
    try {
      await navigator.clipboard.writeText(CLUB_URL);
      showToast("Club link copied!");
    } catch (_) {
      const input = document.createElement("textarea");
      input.value = CLUB_URL;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      const ok = document.execCommand("copy");
      input.remove();
      showToast(ok ? "Club link copied!" : CLUB_URL);
    }
  }

  function celebrate() {
    const colors = ["#e54457", "#e7c27b", "#ff6d88", "#f7f3fb", "#9e79df"];
    for (let i = 0; i < 70; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 0.65}s`;
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      confettiLayer.appendChild(piece);
      setTimeout(() => piece.remove(), 3000);
    }
    showToast("Long live the Sovereign!");
  }

  menu.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    switch (button.dataset.action) {
      case "copy": copyClubLink(); break;
      case "scan":
        scan.classList.toggle("active");
        showToast(scan.classList.contains("active") ? "Scan effect enabled" : "Scan effect disabled");
        break;
      case "celebrate": celebrate(); break;
      case "top": window.scrollTo({ top: 0, behavior: "smooth" }); break;
      case "bottom": window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" }); break;
      case "contrast":
        document.body.classList.toggle("glow-off");
        showToast(document.body.classList.contains("glow-off") ? "Glow effects reduced" : "Glow effects restored");
        break;
    }
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
})();
