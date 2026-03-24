// ===== PROJECT DATA =====
const projects = [
  {
    title: "SAP Procurement Project",
    desc: "Complete Procure-to-Pay lifecycle including PR, PO, GR, Invoice Verification. Configured Material Management module for end-to-end procurement process automation.",
    details: [
      "Purchase Requisition & Purchase Order flow",
      "Goods Receipt processing",
      "Invoice Verification & 3-way matching",
      "Vendor master data management"
    ]
  },
  {
    title: "SQL Data Analysis",
    desc: "Business insights using advanced SQL queries, joins, subqueries, and aggregation techniques to drive data-driven decision making.",
    details: [
      "Complex multi-table JOIN queries",
      "Window functions for trend analysis",
      "Stored procedures for reporting",
      "Performance optimization & indexing"
    ]
  },
  {
    title: "Python Automation",
    desc: "Automation scripts to improve business efficiency, eliminate repetitive tasks, and streamline data processing workflows.",
    details: [
      "Automated data extraction & transformation",
      "Report generation scripts",
      "File processing & batch operations",
      "API integration for data sync"
    ]
  }
];

// ===== TYPEWRITER EFFECT =====
const roles = ["SAP Consultant", "SQL Developer", "Python Enthusiast", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    el.innerHTML = currentRole.substring(0, charIndex + 1) + '<span class="cursor"></span>';
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000);
      return;
    }
  } else {
    el.innerHTML = currentRole.substring(0, charIndex - 1) + '<span class="cursor"></span>';
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeWriter, isDeleting ? 40 : 80);
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll(".stat-number").forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };
    update();
  });
}

// ===== SKILL BAR ANIMATION =====
function animateSkillBars() {
  document.querySelectorAll(".skill-fill").forEach(bar => {
    bar.style.width = bar.getAttribute("data-width");
  });
}

// ===== INTERSECTION OBSERVER =====
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === "skills") {
        animateSkillBars();
      }
      if (entry.target.id === "hero") {
        animateCounters();
      }
    }
  });
}, observerOptions);

// ===== MODAL FUNCTIONS =====
function openProjectModal(index) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  const project = projects[index];

  let detailsHTML = "";
  if (project.details) {
    detailsHTML = "<ul style='padding-left: 20px; margin-top: 12px;'>" +
      project.details.map(d => `<li style="margin-bottom: 8px; color: #9090a0;">${d}</li>`).join("") +
      "</ul>";
  }

  body.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.desc}</p>
    ${detailsHTML}
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function openContactModal() {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  body.innerHTML = `
    <h2>📬 Contact Me</h2>
    <p><strong style="color:#f59e0b;">Email:</strong> <a href="mailto:suresh200308@gmail.com">suresh200308@gmail.com</a></p>
    <p><strong style="color:#f59e0b;">Phone:</strong> 7397194080</p>
    <p><strong style="color:#f59e0b;">GitHub:</strong> <a href="https://github.com/Sureshjhon" target="_blank">github.com/Sureshjhon</a></p>
    <p><strong style="color:#f59e0b;">LinkedIn:</strong> <a href="https://linkedin.com/in/suresh-raja-31374622a" target="_blank">linkedin.com/in/suresh-raja</a></p>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function openExperienceModal() {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  body.innerHTML = `
    <h2><i class="fas fa-briefcase" style="color:#f59e0b; margin-right:10px;"></i> SAP Consultant</h2>
    <h4 style="color: #f59e0b; font-size: 16px; margin-bottom: 16px;">VCORE TECHNOLOGIES, COIMBATORE</h4>
    <p style="font-size: 15px; line-height: 1.7;">Leveraged expertise in SAP processes, advanced queries, and business workflow optimizations to deliver tailored solutions. Key achievements & responsibilities:</p>
    <ul style='padding-left: 20px; margin-top: 12px; color: #9090a0;'>
      <li style="margin-bottom: 8px;">Configured and optimized end-to-end Procure-to-Pay lifecycle.</li>
      <li style="margin-bottom: 8px;">Provided deep-dive optimization into Material Management modules.</li>
      <li style="margin-bottom: 8px;">Designed and automated business workflows to eliminate redundancies.</li>
      <li style="margin-bottom: 8px;">Facilitated robust tracking of procurement and continuous support pipelines.</li>
    </ul>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.body.style.overflow = "";
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ===== MOBILE MENU =====
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// ===== SMOOTH SCROLL =====
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 26, 0.95)";
    navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.background = "rgba(10, 10, 26, 0.85)";
    navbar.style.boxShadow = "none";
  }
});

// ===== INITIALIZE =====
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  animateCounters();

  const skillsSection = document.getElementById("skills");
  const heroSection = document.getElementById("hero");
  if (skillsSection) observer.observe(skillsSection);
  if (heroSection) observer.observe(heroSection);
});