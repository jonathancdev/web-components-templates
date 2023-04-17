export default class FooterComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
    <style>
   *,
   *::before,
   *::after {
     box-sizing: border-box;
   }

   * {
     margin: 0;
     padding: 0;
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

   footer {
     padding-bottom: 2rem;
   }

   footer .legal {
     text-align: center;
   }

   footer .legal p {
     font-weight: 600;
     padding: 3px 0;
   }

   footer .links {
     display: flex;
     flex-direction: column;
   }

   footer .links a {
     padding: 5px;
     font-size: var(--12px);
   }

   @media screen and (min-width: 769px) {

     footer .legal {
       padding: 0 var(--sidepadding);
     }

     footer .links {
       flex-direction: row;
       justify-content: center;
       width: 60%;
       margin: 1rem auto;
       flex-wrap: wrap;
     }

     footer .links a {
       padding: 5px 1rem;
       white-space: nowrap;
     }
   }

   @media screen and (min-width: 1025px) {
     footer .links {
       width: 100%;
     }
   }
 </style>
 <footer>
   <div class="content">
     <div class="legal">
       <p>Copyright Placeholder © 2023</p>
       <p>All Rights Reserved.</p>
       <div class="links">
         <a href="#">Sitemap</a><a href="#">Terms of Development</a><a href="#">Terms of Use</a><a href="#">Privacy
           Policy</a><a href="#">Legal</a>
       </div>
     </div>
   </div>
 </footer>
 `;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
