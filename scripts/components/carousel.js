export default class CarouselComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
        <style>
  .carousel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    margin: 3rem auto 3rem auto;
    padding: 2rem 0;
    background-color: var(--color-gray-100);
    overflow: hidden;
  }

  button {
    border: none;
  }

  .prev,
  .next {
    position: absolute;
    top: 40%;
    cursor: pointer;
    background-color: var(--color-gray-400);
    padding: 0.5rem;
    z-index: 1;
  }

  .prev img,
  .next img {
    height: 0.8rem;
    width: 0.8rem;
  }

  .prev {
    left: 1px;
  }

  .next {
    right: 0;
  }

  @media screen and (min-width: 376px) {
    .prev img,
    .next img {
      height: 1rem;
      width: 1rem;
    }
  }


  @media screen and (min-width: 769px) {
    .carousel {
      height: 250px;
      width: calc(100vw - (var(--side-padding) * 2));
      /* margin-top: 0; */
    }

    .prev img,
    .next img {
      height: 1.4rem;
      width: 1.4rem;
    }
  }
</style>
<div class="carousel">
  <button class="prev"> <img src="/img/icons/svg/arrow-left.svg" alt="previous item arrow" />
  </button>
  <slot name="item"></slot>
  <button class="next"> <img src="/img/icons/svg/arrow-right.svg" alt="next item arrow" />
  </button>
</div>
      `;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.init();
  }

  init() {
    const items = this.querySelectorAll(".carousel-item");
    //set carousel to first item
    let currentItem = 1;
    //set display: block on first carousel item
    items[0].style.display = "flex";

    const prevButton = this.shadowRoot.querySelector(".prev");
    const nextButton = this.shadowRoot.querySelector(".next");

    //add event listeners for navigation
    prevButton.addEventListener("click", function () {
      previousItem();
    });
    nextButton.addEventListener("click", function () {
      nextItem();
    });
    //navigation functions
    function nextItem() {
      handleArrowClick((currentItem += 1));
    }
    function previousItem() {
      handleArrowClick((currentItem -= 1));
    }

    function handleArrowClick(itemIndex) {
      if (itemIndex > items.length) {
        currentItem = 1;
      }
      if (itemIndex < 1) {
        currentItem = items.length;
      }
      showCurrentItem(currentItem);
    }

    function showCurrentItem(currentItem) {
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
      items[currentItem - 1].style.display = "flex";
    }
    //autoplay
    function play() {
      nextItem();
    }
    setInterval(() => play(), 1500);
  }
}
