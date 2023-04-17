export default class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
    <style>

    /*css reset*/
  :host * {
    box-sizing: border-box;
  }

  a,
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  .hover-area {
    cursor: pointer;
  }

  /* MOBILE FIRST */
  header {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);
    width: 100vw;
    padding: 0 var(--side-padding);
    margin: 0 auto;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-primary);
    z-index: 2;
  }

  .logo a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu {
    display: none;
  }

  .toggle-menu-button {
    height: 2rem;
    width: 2rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .toggle-menu-button img {
    width: 100%;
    display: none;
  }

  .toggle-menu-button img.visible {
    display: block;
  }


  @media only screen and (min-width: 769px) {
    .toggle-menu-button {
      display: none;
    }

    header nav.menu {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    header nav.menu a,
    header nav.menu p {
      padding: 5px 1.2rem 3px 1.2rem;
    }

    /*navlink hover action*/
    header a:hover
     {
      text-decoration: underline;
    }

    /* menu hover dropdown element */
    header nav div {
      position: relative;
      display: flex;
      align-items: center;
    }

    /* caret svg */
    header nav img {
      height: 1.25rem;
      margin-top: 2px;
      margin-left: -22px;
      color: var(--color-primary);
      pointer-events: none;
    }

    header nav.submenu {
      display: none;
      background-color: var(--color-white);
    }

    header nav.submenu a {
      padding: 5px 1.2rem 3px 1.2rem;
      margin: 0.5rem 0;
      font-size: var(--18px);
      white-space: nowrap;
    }

    /*submenu navlink hover action*/
    header nav.submenu a:hover {
     text-decoration: underline;
    }

    /* show submenu on hover */
    header nav div:hover nav.submenu {
      position: absolute;
      top: 2rem;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      padding: 1rem 0;
      margin-left: 1rem;
    }

    header nav div:hover nav.submenu div {
      display: flex;
      flex-direction: column;
      border: 1px solid;
      border-color: var(--color-primary);
      background-color: var(--color-white);
      padding: 1rem;
    }
  }



  /*mobile menu styles*/
  @media screen and (max-width: 768px) {

    .mobile-menu {
      display: none;
      position: absolute;
      top: 3rem;
      right: 1rem;
      background-color: var(--color-white);
      border: 1px solid var(--color-primary);
    }

    .mobile-submenu {
      display: none;
    }

    .mobile-menu.open,
    .mobile-submenu.open {
      display: flex;
      flex-direction: column;
    }

    .mobile-menu div:first-child {
      display: flex;
      flex-direction: column;
      padding: 0.5rem 2rem;
    }

    .mobile-menu a,
    .mobile-menu span {
      padding: 0.5rem 0;
      font-size: var(--18px);
    }

    .mobile-submenu a {
      font-size: var(--16px);
    }

    .mobile-menu a.active,
    .mobile-menu span.active {
      background-color: var(--color-pink);
    }

    .mobile-menu span {
      border: none;
      background-color: transparent;
    }

    .mobile-menu span {
      position: relative;
      color: var(--color-primary);
      font-size: var(--18px);
      font-weight: 300;
    }

    .mobile-menu span img {
      position: absolute;
      top: 8px;
      right: 5px;
      height: 1.25rem;
      margin-top: 2px;
    }
  }

  /* tablet size */
  @media only screen and (min-width: 769px) {
    .mobile-menu,
    .mobile-menu.open {
      display: none;
    }
  }
</style>
<header>
  <!-- logo -->
  <div class="logo">
    <a href="./index.html">
      <img src="/img/logo/logo.svg" />
    </a>
  </div>
  <!-- mobile menu toggle icon -->
  <button class="toggle-menu-button">
    <img class="hamburger-icon visible" src="/img/icons/svg/hamburger.svg" />
    <img class="close-icon" src="/img/icons/svg/close.svg" />
  </button>
  <!-- mobile nav-->
  <nav class="mobile-menu">
    <div>
      <a href="/company.html">Info</a>
      <a href="/projects.html">Contact</a>
      <span class="toggle-submenu-button">
        More<img class="submenu-caret-icon" src="/img/icons/svg/caret-down.svg" />
      </span>
      <!-- mobile submenu -->
      <nav class="mobile-submenu">
        <a href="/lorem.html">Lorem</a>
        <a href="/ipsum.html">Ipsum</a>
        <a href="/dolor.html">Dolor</a>
      </nav>
    </div>
  </nav>
  <!-- standard nav -->
  <nav class="menu">
    <a href="info.html">Info</a>
    <a href="/projects.html">Contact</a>
    <div>
      <p class="hover-area">More</p>
      <img src="/img/icons/svg/caret-down.svg" />
      <!-- standard submenu -->
      <nav class="submenu">
        <div>
          <a href="/lorem.html">Lorem</a>
          <a href="/ipsum.html">Ipsum</a>
          <a href="/dolor.html">Dolor</a>
        </div>
      </nav>
    </div>
  </nav>
</header>
 `;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.init();
  }
  init() {
    //mobile menu elements, handlers, and functions
    const menu = this.shadowRoot.querySelector(".mobile-menu");
    const submenu = this.shadowRoot.querySelector(".mobile-submenu");
    //main menu toggle button and icons
    const toggleMenuButton = this.shadowRoot.querySelector(
      ".toggle-menu-button"
    );
    const hamburgerIcon = this.shadowRoot.querySelector(".hamburger-icon");
    const closeIcon = this.shadowRoot.querySelector(".close-icon");
    //submenu toggle button and icon
    const toggleSubmenuButton = this.shadowRoot.querySelector(
      ".toggle-submenu-button"
    );
    console.log(toggleSubmenuButton);
    const submenuCaretIcon = this.shadowRoot.querySelector(
      ".submenu-caret-icon"
    );
    //event listeners
    toggleMenuButton.addEventListener("click", () => {
      handleHamburgerClick();
    });
    toggleSubmenuButton.addEventListener("click", () => {
      handleSubmenuClick();
    });
    //class toggle functions
    const handleHamburgerClick = () => {
      hamburgerIcon.classList.toggle("visible");
      closeIcon.classList.toggle("visible");
      menu.classList.toggle("open");
    };
    const handleSubmenuClick = () => {
      submenuCaretIcon.classList.toggle("open");
      submenu.classList.toggle("open");
    };
  }
}
