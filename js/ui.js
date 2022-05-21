const DEFAULT_BG = {
  color: "#d1cdb7",
  image: "linear-gradient(to right, #ccc8b1 1px, rgba(204,200,177,0) 1px), linear-gradient(to bottom, #ccc8b1 1px, rgba(204,200,177,0) 1px)",
  size: ".3rem .3rem"
}

const navigationUL = document.querySelector(".js-navigation-ul");
const contentWrapper = document.querySelector(".js-content-wrapper");

const switchTab = (tab) => {
  if(tab.classList.contains(ACTIVE_CLASS_NAME)) return;
  navigationUL.querySelector(`.${ACTIVE_CLASS_NAME}`).classList.remove(ACTIVE_CLASS_NAME);
  tab.classList.add(ACTIVE_CLASS_NAME);
}

const switchContent = (contentID) => {
  contentWrapper.querySelector(`.${ACTIVE_CLASS_NAME}`).classList.remove(ACTIVE_CLASS_NAME);
  contentWrapper.querySelector(`.js-${contentID}`).classList.add(ACTIVE_CLASS_NAME);
}

navigationUL.addEventListener("click", (e) => {
  const tab = e.target.closest(".js-tab");
  if(!tab) return;
  switchTab(tab);
  switchContent(tab.id);
});