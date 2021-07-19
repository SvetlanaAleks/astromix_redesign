import "slick-carousel";
import noScroll from "../global/noScroll";
const Sliders = (function () {
  "use strict";
  let isCertificatesSliderMob = false;
  let isCertificatesSliderDesc = false;

  return {
    destroyCertificatesMob: function () {
      if (isCertificatesSliderMob) {
        $(".js-certificates-mob").slick("destroy");
        isCertificatesSliderMob = false;
      }
    },
    destroyCertificatesDesc: function () {
      if (isCertificatesSliderDesc) {
        $(".js-popup-certificates").slick("destroy");
        isCertificatesSliderDesc = false;
      }
    },

    initCertificatesMob: function () {
      $(".js-certificates-mob").not(".slick-initialized").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        variableWidth: true,
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       // slidesToShow: 2,
        //       // slidesToScroll: 1,
        //     },
        //   },
        // ],
      });
      isCertificatesSliderMob = true;
    },
    closePopupCertificates: function () {
      $(".js-close-popup-certificates").click(function (e) {
        e.preventDefault();
        $(".popup-certificates").removeClass("popup-certificates--active");
        Sliders.destroyCertificatesDesc();
        noScroll.off();
      });
    },
    showPopupCertificates: function () {
      $(".js-certificate").click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const initialSlide = _this.data("src");
        $(".popup-certificates").addClass("popup-certificates--active");
        noScroll.on();
        Sliders.initSliderCertificates(initialSlide);
      });
    },
    initSliderCertificates: function (initialSlide) {
      $(".js-popup-certificates").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: initialSlide,
        dots: true,
        prevArrow:
          '<button class="prev"><i class="fico fico-arrow"></i></button>',
        nextArrow:
          '<button class="next"><i class="fico fico-arrow"></i></button>',
        speed: 500,
        fade: true,
        cssEase: "linear",
      });
      isCertificatesSliderDesc = true;
    },
    init: function () {
      Sliders.showPopupCertificates();
      Sliders.closePopupCertificates();
    },
  };
})();

export default Sliders;
