const Controls = (function () {
  "use strict";
  const tabsForm = $(".js-tab");
  return {
    choiceGender: function () {
      tabsForm.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        tabsForm.removeClass("active");
        _this.addClass("active");
      });
    },
    init: function () {
      Controls.choiceGender();
    },
  };
})();

export default Controls;
