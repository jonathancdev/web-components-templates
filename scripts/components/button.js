export default class ButtonComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
        <style>
    .button {
      padding: 0.5rem 3rem;
      padding-top: 0.7rem;
      width: max-content;
      background-color: var(--color-gray-100);
      border: 1px solid var(--color-primary);
      transition: background-color .3s ease, color .3s ease, transform .2s ease-in-out, box-shadow .2s ease;
      cursor: pointer;
    }

    .button:hover {
      background-color: var(--color-gray-50);
    }

    .button.small {
      font-size: var(--12px);
      padding: 3px 1rem;
    }

    .button.filled {
      background-color: var(--color-gray-500);
      border-color: var(--color-gray-500);
      color: var(--color-white);
      font-weight: 400;
    }

    .button.filled:hover {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
    }
  </style>
  <div class="button">
    <slot class="text"></slot>
  </div>
      `;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const button = this.shadowRoot.querySelector(".button");
    this.setVariant(button);
    this.setSize(button);
  }
  setSize(button) {
    const size = this.getAttribute("size");
    if (size === "small") {
      button.classList.add("small");
    } else if (variant === "secondary") {
      button.classList.add("my-component--secondary");
    }
  }
  setVariant(button) {
    const variant = this.getAttribute("variant");
    console.log(variant);
    if (variant === "filled") {
      button.classList.add("filled");
    } else if (variant === "black") {
      button.classList.add("black");
    }
  }
}
