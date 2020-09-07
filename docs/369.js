(self["webpackChunk_comprehensive_demo_app_01"] = self["webpackChunk_comprehensive_demo_app_01"] || []).push([[369],{

/***/ 369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) @material-ui/core@^4.9.4 (singleton) (fallback: ./node_modules/@material-ui/core/esm/index.js)
var index_js_ = __webpack_require__(1399);

// EXTERNAL MODULE: consume shared module (default) react-router-dom@^5.1.2 (singleton) (fallback: ./node_modules/react-router-dom/esm/react-router-dom.js)
var react_router_dom_js_ = __webpack_require__(5819);

// EXTERNAL MODULE: consume shared module (default) react@^16.13.0 (singleton) (fallback: ./node_modules/react/index.js)
var react_index_js_ = __webpack_require__(5558);
var react_index_js_default = /*#__PURE__*/__webpack_require__.n(react_index_js_);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(9659);

// EXTERNAL MODULE: consume shared module (default) markdown-to-jsx@^6.11.0 (strict) (fallback: ./node_modules/markdown-to-jsx/dist/esm.js)
var esm_js_ = __webpack_require__(9136);
var esm_js_default = /*#__PURE__*/__webpack_require__.n(esm_js_);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 1 modules
var withStyles = __webpack_require__(4670);

// CONCATENATED MODULE: ./src/Markdown.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1)
  },
  blockquote: {
    margin: 0,
    padding: theme.spacing(2, 0, 2, 4),
    borderLeft: `${theme.spacing(1)}px solid ${theme.palette.divider}`,
    color: theme.palette.text.hint
  }
});

const options = {
  overrides: {
    h1: {
      component: Typography/* default */.Z,
      props: {
        gutterBottom: true,
        variant: "h5"
      }
    },
    h2: {
      component: Typography/* default */.Z,
      props: {
        gutterBottom: true,
        variant: "h6"
      }
    },
    h3: {
      component: Typography/* default */.Z,
      props: {
        gutterBottom: true,
        variant: "subtitle1"
      }
    },
    h4: {
      component: Typography/* default */.Z,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true
      }
    },
    p: {
      component: Typography/* default */.Z,
      props: {
        paragraph: true
      }
    },
    a: {
      component: Link/* default */.Z
    },
    li: {
      component: (0,withStyles/* default */.Z)(styles)(({
        classes,
        ...props
      }) => /*#__PURE__*/react_index_js_default().createElement("li", {
        className: classes.listItem
      }, /*#__PURE__*/react_index_js_default().createElement(Typography/* default */.Z, _extends({
        component: "span"
      }, props))))
    },
    pre: {
      component: index_js_.Paper,
      props: {
        elevation: 0,
        style: {
          padding: "4px 8px"
        }
      }
    },
    blockquote: {
      component: (0,withStyles/* default */.Z)(styles)(({
        classes,
        ...props
      }) => /*#__PURE__*/react_index_js_default().createElement("blockquote", {
        className: classes.blockquote
      }, /*#__PURE__*/react_index_js_default().createElement(Typography/* default */.Z, _extends({
        component: "span"
      }, props))))
    }
  }
};
function Markdown(props) {
  return /*#__PURE__*/react_index_js_default().createElement((esm_js_default()), _extends({
    options: options
  }, props));
}
// CONCATENATED MODULE: ./src/Page.jsx


const useStyles = (0,index_js_.makeStyles)(theme => (0,index_js_.createStyles)({
  root: {
    flex: 1
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: 'calc(100vh - 64px)',
    position: 'relative'
  }
}));

function Page({
  title,
  children
}) {
  const classes = useStyles();
  return /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.AppBar, {
    position: "relative"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Toolbar, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.Typography, {
    variant: "h6",
    noWrap: true
  }, title))), /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.content
  }, children));
}

/* harmony default export */ const src_Page = (Page);
// CONCATENATED MODULE: ./src/docs/Welcome.md
/* harmony default export */ const Welcome = ("Welcome to the Module Federation Demo!\n\nClick any of the items on the left to get started.\n\nFeel free to leave me feedback: [https://github.com/module-federation/mfe-webpack-demo](https://github.com/module-federation/mfe-webpack-demo)\n");
// CONCATENATED MODULE: ./src/pages/index-page.jsx





const IndexPage = () => /*#__PURE__*/react_index_js_default().createElement(src_Page, {
  title: "Module Federation Demo"
}, /*#__PURE__*/react_index_js_default().createElement(Markdown, null, Welcome));

/* harmony default export */ const index_page = (IndexPage);
// EXTERNAL MODULE: remote svelte/loadApp
var remote_svelte_loadApp = __webpack_require__(6504);
var loadApp_default = /*#__PURE__*/__webpack_require__.n(remote_svelte_loadApp);

// CONCATENATED MODULE: ./src/pages/svelte-page.jsx




const SveltePage = () => {
  const el = (0,react_index_js_.useRef)();
  (0,react_index_js_.useEffect)(() => {
    if (el.current.innerHTML.length === 0) {
      (0,loadApp_default())('svelte', 'federation');
    }

    window.addEventListener('login', ({
      detail
    }) => {
      console.log('em riba', detail.json());
    });
  });
  return /*#__PURE__*/react_index_js_default().createElement(src_Page, {
    title: "Svelte Demo"
  }, /*#__PURE__*/react_index_js_default().createElement("div", {
    id: "svelte",
    ref: el
  }));
};

/* harmony default export */ const svelte_page = (SveltePage);
// EXTERNAL MODULE: consume shared module (default) styled-components@^5.1.1 (strict) (fallback: ./node_modules/styled-components/dist/styled-components.browser.esm.js)
var styled_components_browser_esm_js_ = __webpack_require__(8314);
var styled_components_browser_esm_js_default = /*#__PURE__*/__webpack_require__.n(styled_components_browser_esm_js_);

// CONCATENATED MODULE: ./src/pages/user.jsx




const User = () => {
  const el = (0,react_index_js_.useRef)();
  (0,react_index_js_.useEffect)(() => {
    if (el.current.innerHTML.length === 0) {
      loadApp('svelte', 'federation');
    }

    window.addEventListener('login', ({
      detail
    }) => {
      console.log('em riba', detail.json());
    });
  });
  return /*#__PURE__*/react_index_js_default().createElement(src_Page, {
    title: `User ${user.name}`
  }, /*#__PURE__*/react_index_js_default().createElement(Wrapper, null, "uhuu"));
};

const Wrapper = (styled_components_browser_esm_js_default()).section`
  background: #f26b26;
  background: -webkit-gradient(linear, left top, right bottom, from(#f26b26), to(#8f2784));
  background: linear-gradient(to bottom right, #f26b26 0%, #8f2784 100%);
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
/* harmony default export */ const pages_user = (User);
// CONCATENATED MODULE: ./src/Routes.jsx






const Routes = () => /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Switch, null, /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
  path: "/",
  exact: true
}, /*#__PURE__*/react_index_js_default().createElement(index_page, null)), /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
  path: "/svelte",
  component: svelte_page
}), /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
  path: "/user",
  component: pages_user
}));

/* harmony default export */ const src_Routes = (Routes);
// CONCATENATED MODULE: ./src/SideNav.jsx



const drawerWidth = 240;
const SideNav_useStyles = (0,index_js_.makeStyles)(theme => (0,index_js_.createStyles)({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: { ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
function SideNav() {
  const classes = SideNav_useStyles();
  return /*#__PURE__*/react_index_js_default().createElement(index_js_.Drawer, {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left"
  }, /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Typography, {
    variant: "h6"
  }, "SideNav")), /*#__PURE__*/react_index_js_default().createElement(index_js_.Divider, null), /*#__PURE__*/react_index_js_default().createElement(index_js_.List, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListSubheader, null, "Demo Pages"), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    to: "/"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "Main"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    to: "/user"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "User"
  })), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    to: "/svelte"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "Svelte Page"
  }))));
}
// CONCATENATED MODULE: ./src/App.jsx





const App_useStyles = (0,index_js_.makeStyles)(theme => (0,index_js_.createStyles)({
  root: {
    display: "flex"
  }
}));

function App() {
  const classes = App_useStyles();
  return /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.HashRouter, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.CssBaseline, null), /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_index_js_default().createElement(SideNav, null), /*#__PURE__*/react_index_js_default().createElement(src_Routes, null)));
}

/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.13.0 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(2169);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);

// CONCATENATED MODULE: ./src/bootstrap.jsx



react_dom_index_js_default().render( /*#__PURE__*/react_index_js_default().createElement(src_App, null), document.getElementById("root"));

/***/ })

}]);
//# sourceMappingURL=369.js.map