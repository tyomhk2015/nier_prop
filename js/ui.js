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

const resetTabContent = () => {
  navigationUL.querySelector(`.${ACTIVE_CLASS_NAME}`).classList.remove(ACTIVE_CLASS_NAME);
  contentWrapper.querySelector(`.${ACTIVE_CLASS_NAME}`).classList.remove(ACTIVE_CLASS_NAME);

  navigationUL.querySelector('#home').classList.add(ACTIVE_CLASS_NAME);
  contentWrapper.querySelector('.js-home').classList.add(ACTIVE_CLASS_NAME);
}

navigationUL.addEventListener("click", (e) => {
  const tab = e.target.closest(".js-tab");
  if(!tab) return;
  switchTab(tab);
  switchContent(tab.id);
  paintImage();
});