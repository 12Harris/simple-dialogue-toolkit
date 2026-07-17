// Dialogue Graph Toolkit docs — small shared behaviors.
// Highlights the current page in the sidebar nav and wires up the
// mobile nav toggle. No frameworks, no build step.

document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-list a").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  const toggle = document.querySelector(".nav-toggle");
  const sidebar = document.querySelector(".sidebar");
  if (toggle && sidebar) {
    toggle.addEventListener("click", () => sidebar.classList.toggle("open"));
    document.addEventListener("click", (e) => {
      if (
        sidebar.classList.contains("open") &&
        !sidebar.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        sidebar.classList.remove("open");
      }
    });
  }
});
