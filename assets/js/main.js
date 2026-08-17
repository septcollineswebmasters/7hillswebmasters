(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  /* ---- Header: mobile nav + scrolled state ---- */
  var header = qs("[data-header]");
  var toggle = qs("[data-nav-toggle]");
  var nav = qs("[data-nav]");

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });
    qsa("a", nav).forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      });
    });
  }

  /* ---- Active nav link ---- */
  var path = window.location.pathname.replace(/\/+$/, "") || "/";
  qsa("[data-nav] a[data-nav-match]").forEach(function (link) {
    var match = link.getAttribute("data-nav-match");
    if (match === "/" && path === "/") {
      link.setAttribute("aria-current", "page");
    } else if (match !== "/" && path.indexOf(match) === 0) {
      link.setAttribute("aria-current", "page");
    }
  });

  /* ---- Reveal on scroll ---- */
  var revealEls = qsa("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---- FAQ accordion ---- */
  qsa("[data-faq]").forEach(function (item) {
    var btn = qs("button", item);
    var panel = qs(".faq-panel", item);
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var open = item.classList.contains("is-open");
      qsa("[data-faq]").forEach(function (other) {
        other.classList.remove("is-open");
        var otherBtn = qs("button", other);
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---- Contact form ---- */
  var form = qs("[data-contact-form]");
  if (form) {
    var status = qs("[data-form-status]");
    var success = qs("[data-form-success]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var endpoint = config.formEndpoint || form.getAttribute("action");
      if (!endpoint || endpoint.indexOf("YOUR_FORM_ID") !== -1) {
        if (status) {
          status.hidden = false;
          status.className = "form-status is-error";
          status.textContent =
            "Form endpoint is not configured yet. Add your Formspree URL in assets/js/config.js.";
        }
        return;
      }

      var submitBtn = qs("[type='submit']", form);
      if (submitBtn) submitBtn.disabled = true;
      if (status) {
        status.hidden = false;
        status.className = "form-status";
        status.textContent = "Sending…";
      }

      var data = new FormData(form);
      fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          form.hidden = true;
          if (status) status.hidden = true;
          if (success) success.hidden = false;
        })
        .catch(function () {
          if (status) {
            status.className = "form-status is-error";
            status.textContent =
              "Something went wrong. Please email us at " +
              (config.contactEmail || "septcollineswebmasters@gmail.com") +
              " or try again.";
          }
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  /* ---- Calendly embed ---- */
  var calRoot = qs("[data-calendly]");
  if (calRoot && config.calendlyUrl) {
    calRoot.setAttribute("data-url", config.calendlyUrl);
    var note = qs("[data-calendly-url]");
    if (note) note.textContent = config.calendlyUrl;
    var boot = function () {
      if (window.Calendly && typeof window.Calendly.initInlineWidget === "function") {
        calRoot.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: config.calendlyUrl,
          parentElement: calRoot
        });
      }
    };
    if (window.Calendly) {
      boot();
    } else {
      window.addEventListener("load", boot);
    }
  }

  /* ---- Current year ---- */
  qsa("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
