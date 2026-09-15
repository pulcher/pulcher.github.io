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
    var tabs = Array.prototype.slice.call(drawerBoard.querySelectorAll('[data-drawer-target]'));
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

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        activatePanel(tab.getAttribute('data-drawer-target'));
      });

      tab.addEventListener('keydown', function (event) {
        var nextIndex = null;

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === 'Home') {
          nextIndex = 0;
        } else if (event.key === 'End') {
          nextIndex = tabs.length - 1;
        }

        if (nextIndex !== null) {
          event.preventDefault();
          tabs[nextIndex].focus();
          activatePanel(tabs[nextIndex].getAttribute('data-drawer-target'));
        }
      });
    });
  }
})();
