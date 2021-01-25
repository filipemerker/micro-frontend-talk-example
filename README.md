# 📦 Micro-frontends Talk Example

<h1 align="center"><img src="/public/screenshot.png" width="500px" alt="Apps screenshot" /></h1>

> This is an example used in my [talk about micro-frontends with Module Federation](https://youtu.be/ojplNjHY13E?t=2565)

It basically consists of three repos:

- *The Shell (this one) - Uses React*
- [The Login Page](https://github.com/filipemerker/module-federation-login) - Uses Svelte
- [The User Page](https://github.com/filipemerker/module-federation-user) - Uses React

They are integrated toguether by [Webpack's Module Federation Plugin](https://webpack.js.org/concepts/module-federation/), and they're a ***very good**  example of a Micro-frontend architecture.*

## Live example
The user is **pam** and the password is **123**

[https://filipemerker.github.io/micro-frontend-talk-example/](https://filipemerker.github.io/micro-frontend-talk-example/)
