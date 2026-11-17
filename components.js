class SiteHeader extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    const currentPage = path.startsWith("/projects/")
      ? "projects"
      : path.startsWith("/blog/") || path.startsWith("/posts/")
        ? "blog"
        : "about";

    const currentAttribute = (page) =>
      page === currentPage ? ' aria-current="page"' : "";

    this.innerHTML = `
      <header>
        <nav class="navbar" aria-label="Primary navigation">
          <ul>
            <li><a href="/"${currentAttribute("about")}>About</a></li>
            <li><a href="/projects/"${currentAttribute("projects")}>Projects</a></li>
            <li><a href="/blog/"${currentAttribute("blog")}>Blog</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <nav class="social-navbar" aria-label="Social media links">
          <a href="https://github.com/Den-Mont" aria-label="GitHub">
            <img src="/assets/github-dark.svg" width="24" height="24" alt="">
          </a>
          <a href="https://www.youtube.com/@den-mont" aria-label="YouTube">
            <img src="/assets/youtube-dark.svg" width="24" height="24" alt="">
          </a>
          <a href="https://www.linkedin.com/in/denzelmontes-melendez" aria-label="LinkedIn">
            <img src="/assets/linkedin-dark.svg" width="24" height="24" alt="">
          </a>
        </nav>
      </footer>
    `;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
