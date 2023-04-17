export default class PopUpInfo extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
            <style>
  .wrapper {
    position: relative;
    width: min-content;
    margin: 0.5rem;
  }

  .info {
    font-size: 1rem;
    border: 1px solid var(--color-primary);
    padding: 1rem 1.5rem;
    background: white;
    border-radius: 20px;
    opacity: 0;
    transition: none;
    position: absolute;
    left: 10px;
    bottom: 20px;
    min-width: 120px;
    margin: 3px;
    text-align: start;
    z-index: -1;
  }


  .icon:hover+.info,
  .icon:focus+.info {
    opacity: 1;
    z-index: 1;
    transition: opacity 0.4s ease 0.1s;
  }
</style>
<div class="wrapper">
  <img class="icon" />

  <span class="info"></span>
</div>
          `;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.setIconUrl();
    this.setText();
    this.setPosition();
  }
  setPosition() {
    const info = this.shadowRoot.querySelector(".info");
    //get position of element on page to determine left/right
    const wrapper = this.shadowRoot.querySelector(".wrapper");
    const x = wrapper.offsetLeft;
    //get text width
    const textWidth = info.offsetWidth;
    //get document width
    const doc = document.documentElement;
    const docWidth = doc.offsetWidth;
    const rightSideWidth = docWidth - x;

    const overflowRight = rightSideWidth < textWidth;

    if (overflowRight) {
      info.setAttribute("style", `transform: translateX(${0 - textWidth}px)`);
    }
  }
  setIconUrl() {
    const icon = this.shadowRoot.querySelector(".icon");
    const imgUrl = this.attributes.icon.value;
    if (imgUrl) {
      icon.src = imgUrl;
    }
  }
  setText() {
    const info = this.shadowRoot.querySelector(".info");

    const text = this.innerHTML;
    const span = document.createElement("span");
    console.log(typeof text);
    console.log(text);
    if (text) {
      console.log("yes text");
      span.innerHTML = text;
    } else {
      console.log("no text");
      span.innerText = "or have a fallback text.";
    }
    info.appendChild(span);
  }
}
