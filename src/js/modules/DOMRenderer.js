const DOMRenderer = (function () {
  "use strict";
  const data = [
    {
      block: `.js-questions-content`,
      text: '<h2 class="questions__title">Эти вопросы мучают вас,<span>а порой — доводят до отчаяния... </span></h2>',
    },
    {
      block: ".js-chief-astrologer-title",
      text: '<h2 class="chief-astrologer__title">Вы хотите получить четкие ответы на свои вопросы и понять <span>что делать дальше? Я помогу</span></h2>',
    },
    {
      block: ".js-chief-astrologer-info",
      text: '<div class="chief-astrologer__info"><p class="chief-astrologer__name">Привет, меня зовут<span>Елена Лапик</span></p><div class="chief-astrologer__desc"><p class="chief-astrologer__text">Я главный астролог и архитектор гороскопов в Astromix. </p><p class="chief-astrologer__text">Знаю, вам нужна ясность, чтобы не мучить себя сомнениями и ожиданиями.</p><p class="chief-astrologer__text">Поэтому вместе с гороскопом <span>я составляю список рекомендаций.</span></p><p class="chief-astrologer__text">Важно, чтобы вы не просто знали, почему так происходит, а понимали, что делать дальше.</p><p class="chief-astrologer__text">Пришло время узнать о себе больше и начать жить той жизнью, о которой вы давно мечтаете.</p></div></div>',
    },
    {
      block: ".js-info-title",
      text: `<h2 class="info__title">Взгляните на свою жизнь другими глазами и узнайте, <span>как быть счастливой в любви</span></h2>`,
    },
    {
      block: ".js-reviews-title",
      text: `<h2 class="reviews__title">Они уже меняют свою жизнь<span>А вы готовы?</span></h2>`,
    },
  ];
  const descHoroscope = $("#horoscope-info");
  return {
    rendererContent: function (data) {
      $.map(data, function (element, index) {
        const block = $(element.block);
        const text = element.text;
        block.html(text);
      });
    },
    reverseSection: function () {
      $(".js-horoscope-info-title").after(descHoroscope);
    },
    init: function () {
      DOMRenderer.rendererContent(data);
      DOMRenderer.reverseSection();
    },
  };
})();

export default DOMRenderer;
