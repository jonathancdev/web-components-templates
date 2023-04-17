export default class SocialIconLink extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
      <style>
        .wrapper {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 5px;
          width: 50px;
          height: 50px;
          border-radius: 100%;
          transition: all 0.2s ease-in-out;
        }

        .icon {
          width: 40px;
          height: 40px;
          display: block;
          transition: all 0.1s ease-in-out;
        }

        .link {
          font-size: 1rem;
          color: var(--color-primary);
          text-decoration: none;
          transition: all 0.2s ease-in-out;
        }

        .link:hover,
        .link:focus {
          color: var(--color-primary-dark);
        }
      </style>
      <div class="wrapper">
        <a class="link">
          <img class="icon" />
        </a>
      </div>
    `;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const iconUrl = this.getAttribute("icon-url");
    const linkUrl = this.getAttribute("link-url");

    if (iconUrl) {
      const icon = this.shadowRoot.querySelector(".icon");
      icon.src = iconUrl;
    }

    if (linkUrl) {
      const link = this.shadowRoot.querySelector(".link");
      link.href = linkUrl;
    }
  }
}
