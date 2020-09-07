(self["webpackChunk_comprehensive_demo_app_01"] = self["webpackChunk_comprehensive_demo_app_01"] || []).push([[339],{

/***/ 339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) @material-ui/core@^4.9.4 (singleton) (fallback: ./node_modules/@material-ui/core/esm/index.js)
var index_js_ = __webpack_require__(399);

// EXTERNAL MODULE: consume shared module (default) react-router-dom@^5.1.2 (singleton) (fallback: ./node_modules/react-router-dom/esm/react-router-dom.js)
var react_router_dom_js_ = __webpack_require__(819);

// EXTERNAL MODULE: consume shared module (default) react@^16.13.0 (singleton) (fallback: ./node_modules/react/index.js)
var react_index_js_ = __webpack_require__(558);
var react_index_js_default = /*#__PURE__*/__webpack_require__.n(react_index_js_);

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
// EXTERNAL MODULE: remote login/loadApp
var loadApp = __webpack_require__(235);
var loadApp_default = /*#__PURE__*/__webpack_require__.n(loadApp);

// CONCATENATED MODULE: ./src/UserContext.js

const UserContext = /*#__PURE__*/(0,react_index_js_.createContext)();
const {
  Provider
} = UserContext;
const initialState = {};
const ContextProvider = props => {
  const [user, setUser] = (0,react_index_js_.useState)(initialState);
  return /*#__PURE__*/react_index_js_default().createElement(Provider, {
    value: [user, setUser]
  }, props.children);
};
// CONCATENATED MODULE: ./src/pages/svelte-page.jsx






const SveltePage = () => {
  const [user, setUser] = (0,react_index_js_.useContext)(UserContext);
  const history = (0,react_router_dom_js_.useHistory)();
  const el = (0,react_index_js_.useRef)();
  (0,react_index_js_.useEffect)(() => {
    if (el.current.innerHTML.length === 0) {
      (0,loadApp_default())('login');
    }

    window.addEventListener('login', ({
      detail: response
    }) => {
      setUser(response.user.json());
      history.push("/user");
    });
  });
  return /*#__PURE__*/react_index_js_default().createElement(src_Page, {
    title: "Svelte Demo"
  }, /*#__PURE__*/react_index_js_default().createElement("div", {
    id: "login",
    ref: el
  }));
};

/* harmony default export */ const svelte_page = (SveltePage);
// EXTERNAL MODULE: consume shared module (default) styled-components@^5.1.1 (strict) (fallback: ./node_modules/styled-components/dist/styled-components.browser.esm.js)
var styled_components_browser_esm_js_ = __webpack_require__(314);
var styled_components_browser_esm_js_default = /*#__PURE__*/__webpack_require__.n(styled_components_browser_esm_js_);

// EXTERNAL MODULE: remote user/UserCard
var UserCard = __webpack_require__(918);
var UserCard_default = /*#__PURE__*/__webpack_require__.n(UserCard);

// CONCATENATED MODULE: ./src/pages/user.jsx






const User = () => {
  const [user] = (0,react_index_js_.useContext)(UserContext);
  return /*#__PURE__*/react_index_js_default().createElement(src_Page, {
    title: `Welcome, ${user.name}!`
  }, /*#__PURE__*/react_index_js_default().createElement(Wrapper, null, /*#__PURE__*/react_index_js_default().createElement((UserCard_default()), {
    name: user.name,
    picture: user.picture,
    address: user.address,
    about: user.about
  })));
};

const Wrapper = (styled_components_browser_esm_js_default()).section`
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
/* harmony default export */ const user = (User);
// CONCATENATED MODULE: ./src/Routes.jsx





const Routes = () => /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Switch, null, /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
  path: "/user",
  component: user
}), /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
  path: "/",
  component: svelte_page
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
  const [user, setUser] = (0,react_index_js_.useContext)(UserContext);
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
  }, "SideNav")), /*#__PURE__*/react_index_js_default().createElement(index_js_.Divider, null), /*#__PURE__*/react_index_js_default().createElement(index_js_.List, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListSubheader, null, "Pages"), Boolean(user.username) && /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    to: "/user"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "User (React)"
  })), !Boolean(user.username) && /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    to: "/"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "Login (Svelte)"
  }))), Boolean(user.username) && /*#__PURE__*/react_index_js_default().createElement(index_js_.List, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListSubheader, null, "Actions"), /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItem, {
    button: true,
    component: react_router_dom_js_.Link,
    onClick: () => setUser({}),
    to: "/"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.ListItemText, {
    primary: "Logout"
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
  return /*#__PURE__*/react_index_js_default().createElement(ContextProvider, null, /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.HashRouter, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.CssBaseline, null), /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_index_js_default().createElement(SideNav, null), /*#__PURE__*/react_index_js_default().createElement(src_Routes, null))));
}

/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.13.0 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(169);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);

// CONCATENATED MODULE: ./src/bootstrap.jsx



react_dom_index_js_default().render( /*#__PURE__*/react_index_js_default().createElement(src_App, null), document.getElementById("root"));

/***/ })

}]);
//# sourceMappingURL=339.js.map