import "./index.html";
import "./sass/style.sass";
import { burgerMenu } from "./modules/burger.js";
import { tabs } from "./modules/tabs";

burgerMenu({
  selectorMenu: ".navigation__list",
  openMenuSelector: "navigation__list_active",
});

tabs({
  selectorTabsButtons: ".tabs__btn",
  activeClassButton: "tabs__btn_active",
  selectorTabsElement: ".tabs__item",
  activeClassTab: "tabs__item_active",
});
