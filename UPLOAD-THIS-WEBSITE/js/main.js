/* 7hillswebmasters — plain JavaScript. No install needed. */

(function () {
  var EMAIL = "septcollineswebmasters@gmail.com";

  // Sticky header
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var menuBtn = document.querySelector(".menu-btn");
  var mobileNav = document.querySelector(".mobile-nav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function buildBody(kind, data) {
    var lines = [
      "Lead type: " + (kind === "schedule" ? "Schedule a call" : "Contact form"),
      "Name: " + (data.name || ""),
      "Email: " + (data.email || ""),
      "Company: " + (data.company || "—"),
      "Website: " + (data.website || "—"),
      "Service: " + (data.service || "—"),
    ];
    if (kind === "schedule") {
      lines.push(
        "Preferred: " +
          (data.preferredDate || "") +
          " " +
          (data.preferredTime || "") +
          " (" +
          (data.timezone || "") +
          ")"
      );
    }
    lines.push("", "Message:", data.message || "");
    return lines.join("\n");
  }

  function showStatus(el, type, text) {
    if (!el) return;
    el.className = "form-status show " + type;
    el.textContent = text;
  }

  function sendLead(kind, form, statusEl, button) {
    var data = Object.fromEntries(new FormData(form).entries());

    // Honeypot spam trap
    if (data.website_url) return;

    var subject =
      kind === "schedule"
        ? "Schedule a call — " + data.name
        : "New lead — " + (data.service || "General") + " — " + data.name;

    var formData = new FormData();
    formData.append("name", data.name || "");
    formData.append("email", data.email || "");
    formData.append("company", data.company || "");
    formData.append("website", data.website || "");
    formData.append("service", data.service || "");
    formData.append("preferredDate", data.preferredDate || "");
    formData.append("preferredTime", data.preferredTime || "");
    formData.append("timezone", data.timezone || "");
    formData.append("message", buildBody(kind, data));
    formData.append("_subject", subject);
    formData.append("_template", "table");
    formData.append("_replyto", data.email || "");
    formData.append("_captcha", "false");

    var original = button.textContent;
    button.disabled = true;
    button.textContent = kind === "schedule" ? "Sending request…" : "Sending to email…";
    showStatus(statusEl, "success", "Sending…");

    fetch("https://formsubmit.co/ajax/" + encodeURIComponent(EMAIL), {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then(function (res) {
        return res.json().then(function (json) {
          return { ok: res.ok, json: json };
        }).catch(function () {
          return { ok: res.ok, json: {} };
        });
      })
      .then(function (result) {
        if (!result.ok || result.json.success === false) {
          throw new Error(
            result.json.message ||
              "We could not send your message right now. Please try again."
          );
        }
        form.reset();
        showStatus(
          statusEl,
          "success",
          kind === "schedule"
            ? "Call request sent to " + EMAIL + ". We will confirm by email."
            : "Thanks! Your message was sent to " + EMAIL + ". We will reply shortly."
        );
      })
      .catch(function (err) {
        showStatus(
          statusEl,
          "error",
          (err && err.message) ||
            "Something went wrong. Please try again in a moment."
        );
      })
      .finally(function () {
        button.disabled = false;
        button.textContent = original;
      });
  }

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendLead(
        "contact",
        contactForm,
        document.getElementById("contact-status"),
        contactForm.querySelector('button[type="submit"]')
      );
    });
  }

  var scheduleForm = document.getElementById("schedule-form");
  if (scheduleForm) {
    scheduleForm.addEventListener("submit", function (e) {
      e.preventDefault();
      sendLead(
        "schedule",
        scheduleForm,
        document.getElementById("schedule-status"),
        scheduleForm.querySelector('button[type="submit"]')
      );
    });
  }
})();
