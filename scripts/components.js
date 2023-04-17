import ButtonComponent from "./components/button.js";
import CardComponent from "./components/card.js";
import CarouselComponent from "./components/carousel.js";
import HeaderComponent from "./components/header.js";
import FooterComponent from "./components/footer.js";
import PopUpInfo from "./components/popUpInfo.js";
import SocialIconLink from "./components/socialIconLink.js";

customElements.define("button-component", ButtonComponent);
customElements.define("card-component", CardComponent);
customElements.define("carousel-component", CarouselComponent);
customElements.define("header-component", HeaderComponent);
customElements.define("footer-component", FooterComponent);
customElements.define("popup-info-component", PopUpInfo);
customElements.define("social-icon-link-component", SocialIconLink);

export {
  ButtonComponent,
  CardComponent,
  CarouselComponent,
  HeaderComponent,
  FooterComponent,
  PopUpInfo,
  SocialIconLink,
};
