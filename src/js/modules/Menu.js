import { DOC } from "../global/constants";
import noScroll from "../global/noScroll";
const Menu = (function () {
  "use strict";
  const burgerMenu = $(".js-burger");
  const linkToTarget = $(".js-scroll");
  const fixedMenu = $(".js-fixed-menu");
  const menuHeight = fixedMenu.height();
  const scrollHeight = menuHeight;
  return {
    showScrollMenu: function () {
      DOC.scroll(function () {
        const scrollTop = DOC.scrollTop();
        let percent = 0;
        let bg = "none";
        if (scrollTop < scrollHeight) {
          percent = (scrollTop / scrollHeight).toFixed(2);
          fixedMenu.removeClass("fixed");
        } else {
          percent = 1;
          bg = "rgba(255,255,255,.95)";
          fixedMenu.addClass("fixed");
        }
        fixedMenu.css({
          background: bg,
        });
      });
    },
    showMobileMenu: function () {
      burgerMenu.click(function (e) {
        e.preventDefault();
        const target = $($(this).data("target"));
        target.toggleClass("menu-mobile--active");
        burgerMenu.toggleClass("burger--active");
        if (target.hasClass("menu-mobile--active")) {
          noScroll.on();
        } else {
          noScroll.off();
        }
      });
    },
    scrollToTarget: function () {
      linkToTarget.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const href = _this.attr("href");
        const target = $(href);
        $(".menu-mobile").removeClass("menu-mobile--active");
        burgerMenu.removeClass("burger--active");
        const top = target.offset().top;
        $("html, body").animate(
          {
            scrollTop: top,
          },
          1000
        );
      });
    },
    init: function () {
      Menu.showScrollMenu();
      Menu.showMobileMenu();
      Menu.scrollToTarget();
    },
  };
})();

export default Menu;
