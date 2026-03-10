(function () {
  var menuToggle = document.querySelector('.menu-toggle');
  var siteNav = document.querySelector('.site-nav');
  var drawerBoard = document.querySelector('[data-drawer-board]');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (drawerBoard) {
    var tabs = drawerBoard.querySelectorAll('[data-drawer-target]');
    var panels = drawerBoard.querySelectorAll('.drawer-panel');

    var activatePanel = function (targetId) {
      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-drawer-target') === targetId;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      panels.forEach(function (panel) {
        panel.classList.toggle('is-active', panel.id === targetId);
      });
    };

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activatePanel(tab.getAttribute('data-drawer-target'));
      });
    });
  }
})();
