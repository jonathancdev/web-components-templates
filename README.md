# Web Components Templates

This repository provides a simple website template built with pure HTML, CSS,
and JavaScript and the included Web Components templates. The file structure is
designed to be easily customizable and serve as a source for individual Web
Components templates that anyone can copy and use.

## Installation

To use this repository, simply clone or download the code to your local machine.

```
git clone https://github.com/jonathancdev/web-components-templates
```

## Getting Started

To get started, open the index.html file in your browser. You should see a
simple web site with a header, footer, and some sample content along with
example usage of the component templates included in this repository.

## File Structure

The file structure for the site is simple. All of the JavaScript and most of the
CSS is coupled to the individual web components and kept in the .js file. The
file structure is as follows:

. ├── img/ │ └── icons/ │ ├── svg/ │ │ ├── icon.svg │ │ ├── icon.svg │ │ ├──
icon.svg │ │ └── etc... │ └── logo/ │ └── logo.svg ├── scripts/ │ ├──
components/ │ │ ├── component.js │ │ ├── component.js │ │ ├── component.js │ │
└── etc... │ └── components.js ├── styles/ │ ├── home/ │ │ └── home.css │ ├──
globals.css │ ├── styles.css │ ├── typography.css │ └── variables.css ├──
index.html └── README.md

All of the components are imported from /components into components.js using ES6
modules. They are then made available in the head of index.html.

```
components.js

//import all of the components you need here
import ButtonComponent from "./components/button.js";

//define the custom elements for use in HTML here
customElements.define("button-component", ButtonComponent);

export {
  //export each component
  ButtonComponent
};
```

Global styles are also separated into several files in /styles, imported into
styles.css, and then linked in the head of index.html.

```
styles.css

/*import global styles*/
@import url("./globals.css");
@import url("./variables.css");
@import url("./typography.css");

/*import individual page styles */
@import url("./home/home.css");

```

```
index.html

<head>
  <!-- import styles -->
  <link rel="stylesheet" href="/styles/styles.css" />
  <!-- import script with all components -->
  <script type="module" src="/scripts/components.js"></script>
</head>
```

# Customization

The file structure of this repository is designed to make customization easy.
You can easily add more pages in the root directory. Import the same components
and styles as in index.html, or write new scripts and css import files in order
to only include the styles and components you want to make available to each
page.

## Troubleshooting

If you encounter any issues with this repository, please open an issue on the
Github repository page.

## Contribution Guidelines

If you would like to contribute to this repository, please follow these
guidelines:

    Fork the repository and clone it to your local machine.
    Create a new branch for your changes.
    Make your changes and test them thoroughly.
    Submit a pull request with a clear description of your changes.

## License

This repository is licensed under the MIT License. See the LICENSE file for more
information.
