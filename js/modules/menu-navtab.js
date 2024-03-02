export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    console.log(tabContent[index].dataset.anime);
    tabContent[index].classList.add("ativo");
  }

  function anime(index) {
    tabContent.forEach((section) => {
      delete section.dataset.anime;
    });

    if (index % 2 === 0) {
      tabContent[index].dataset.anime = "show-right";
    } else {
      tabContent[index].dataset.anime = "show-down";
    }
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
        anime(index);
      });
    });
  }
}
initTabNav();
