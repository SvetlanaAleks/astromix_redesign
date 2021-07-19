import objectFitImages from "object-fit-images";
import "select2/dist/js/select2.full";
import layout from "./global/layout";
import Controls from "./modules/Controls";
import DOMRenderer from "./modules/DOMRenderer";
import Sliders from "./modules/Sliders";
import Menu from "./modules/Menu";

$(function () {
  objectFitImages();

  Controls.init();
  DOMRenderer.init();
  Sliders.init();
  Menu.init();

  layout.layoutHandler({
    onInit: (layout) => {
      if (layout.WIN_WIDTH < 769) {
        Sliders.initCertificatesMob();
      } else {
        Sliders.destroyCertificatesMob();
      }
    },

    afterResize: (layout) => {
      if (layout.WIN_WIDTH >= 769) {
        Sliders.destroyCertificatesMob();
      } else {
        Sliders.initCertificatesMob();
      }
    },
  });
  $(".js-select").select2({
    width: "100%",
    language: {
      noResults: function () {
        return "Введите минимум 3 символа";
      },
    },
    escapeMarkup: function (markup) {
      return markup;
    },
  });
});
