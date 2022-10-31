import { routes } from "./routes.js";
const pageContent = document.getElementById("pageContent");
document.addEventListener("DOMContentLoaded", () => {
  let url = window.location.pathname;
  setRouteChange(url);
});
function changeContent(state) {
  pageContent.innerHTML = state.page.content;
}
function setRoutePush(url) {
  let page = routes["/" + url];
  if (url === "") url = window.location.origin;
  window.history.pushState({ page: page }, null, url);
  changeContent(history.state);
}
function setRouteChange(url) {
  window.history.replaceState({ page: routes[url] }, null, url);
  changeContent(history.state);
}
window.addEventListener("popstate", function () {
  let url = this.window.location.pathname;
  setRouteChange(url);
});
let links = [...document.getElementsByTagName("a")];
for (let i of links) {
  i.addEventListener("click", () => {
    setRoutePush(i.id);
  });
}
