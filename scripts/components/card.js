export default class CardComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
      <style>
        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 2rem;
          background-color: var(--color-gray-100);
          height: 300px;
          width: 300px;
          margin: 1rem auto;
        }
      </style>
      <div class="card">
        <slot></slot>
        <div>
          <slot></slot>
        </div>

      </div>
    `;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
