/*
 * Documentation chrome behaviour: mobile sidebar toggle, copy-to-clipboard for code blocks,
 * and per-preview RTL/LTR direction toggle. No dependencies.
 */
(function () {
  "use strict";

  // ---- Mobile sidebar ----
  function setupSidebar() {
    var btn = document.querySelector("[data-menu-btn]");
    var sidebar = document.querySelector(".doc-sidebar");
    if (!btn || !sidebar) return;
    var scrim;

    function close() {
      sidebar.classList.remove("is-open");
      if (scrim) { scrim.remove(); scrim = null; }
    }
    function open() {
      sidebar.classList.add("is-open");
      scrim = document.createElement("div");
      scrim.className = "doc-scrim";
      scrim.addEventListener("click", close);
      document.body.appendChild(scrim);
    }
    btn.addEventListener("click", function () {
      if (sidebar.classList.contains("is-open")) close(); else open();
    });
  }

  // ---- Copy buttons ----
  function setupCopy() {
    document.querySelectorAll(".doc-code").forEach(function (block) {
      var code = block.querySelector("code");
      if (!code) return;
      var btn = document.createElement("button");
      btn.className = "doc-copy";
      btn.type = "button";
      btn.textContent = "نسخ Copy";
      btn.addEventListener("click", function () {
        var text = code.innerText;
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = "✓ تم النسخ";
          btn.classList.add("is-copied");
          setTimeout(function () {
            btn.textContent = "نسخ Copy";
            btn.classList.remove("is-copied");
          }, 1600);
        });
      });
      block.appendChild(btn);
    });
  }

  // ---- RTL / LTR preview toggle ----
  function setupDirToggle() {
    document.querySelectorAll("[data-dir-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var targetSel = btn.getAttribute("data-dir-toggle");
        var stage = targetSel
          ? document.querySelector(targetSel)
          : btn.closest(".doc-preview").querySelector("[data-pc-root]");
        if (!stage) return;
        var next = stage.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
        stage.setAttribute("dir", next);
        btn.textContent = next === "rtl" ? "RTL ↔ LTR" : "LTR ↔ RTL";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupSidebar();
    setupCopy();
    setupDirToggle();
  });
})();
