(function (root) {
   "use strict";
   var isOn = false;
   var scrollbarSize;
   var scrollTop;

   function getScrollbarSize() {
      if (typeof scrollbarSize !== 'undefined') return scrollbarSize;

      var doc = document.documentElement;
      var dummyScroller = document.createElement('div');
      dummyScroller.setAttribute('style', 'width:99px;height:99px;' + 'position:absolute;top:-9999px;overflow:scroll;');
      doc.appendChild(dummyScroller);
      scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
      doc.removeChild(dummyScroller);
      return scrollbarSize;
   }

   function hasScrollbar() {
      return document.documentElement.scrollHeight > window.innerHeight;
   }

   function on(options) {
      if (typeof document === 'undefined' || isOn) return;
      var doc = document.documentElement;
      scrollTop = window.pageYOffset;
      if (hasScrollbar()) {
         doc.style.width = 'calc(100% - ' + getScrollbarSize() + 'px)';
      } else {
         doc.style.width = '100%';
      }
      doc.style.position = 'fixed';
      doc.style.top = -scrollTop + 'px';
      doc.style.overflow = 'hidden';
      isOn = true;
   }

   function off() {
      if (typeof document === 'undefined' || !isOn) return;
      var doc = document.documentElement;
      doc.style.width = '';
      doc.style.position = '';
      doc.style.top = '';
      doc.style.overflow = '';
      window.scroll(0, scrollTop);
      isOn = false;
   }

   function toggle() {
      if (isOn) {
         off();
         return;
      }
      on();
   }

   var noScroll = {
      on: on,
      off: off,
      toggle: toggle,
   };

   if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
      module.exports = noScroll;
   } else {
      root.noScroll = noScroll;
   }
})(window);

 //# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWJzL25vLXNjcm9sbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24ocm9vdCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIGlzT24gPSBmYWxzZTtcbiAgdmFyIHNjcm9sbGJhclNpemU7XG4gIHZhciBzY3JvbGxUb3A7XG5cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyU2l6ZSgpIHtcbiAgICBpZiAodHlwZW9mIHNjcm9sbGJhclNpemUgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gc2Nyb2xsYmFyU2l6ZTtcblxuICAgIHZhciBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIGR1bW15U2Nyb2xsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdW1teVNjcm9sbGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6OTlweDtoZWlnaHQ6OTlweDsnICsgJ3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4O292ZXJmbG93OnNjcm9sbDsnKTtcbiAgICBkb2MuYXBwZW5kQ2hpbGQoZHVtbXlTY3JvbGxlcik7XG4gICAgc2Nyb2xsYmFyU2l6ZSA9IGR1bW15U2Nyb2xsZXIub2Zmc2V0V2lkdGggLSBkdW1teVNjcm9sbGVyLmNsaWVudFdpZHRoO1xuICAgIGRvYy5yZW1vdmVDaGlsZChkdW1teVNjcm9sbGVyKTtcbiAgICByZXR1cm4gc2Nyb2xsYmFyU2l6ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc1Njcm9sbGJhcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCBpc09uKSByZXR1cm47XG4gICAgdmFyIGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgaWYgKGhhc1Njcm9sbGJhcigpKSB7XG4gICAgICBkb2Muc3R5bGUud2lkdGggPSAnY2FsYygxMDAlIC0gJysgZ2V0U2Nyb2xsYmFyU2l6ZSgpICsncHgpJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIH1cbiAgICBkb2Muc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGRvYy5zdHlsZS50b3AgPSAtc2Nyb2xsVG9wICsgJ3B4JztcbiAgICBkb2Muc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBpc09uID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZigpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhaXNPbikgcmV0dXJuO1xuICAgIHZhciBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgZG9jLnN0eWxlLndpZHRoID0gJyc7XG4gICAgZG9jLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgZG9jLnN0eWxlLnRvcCA9ICcnO1xuICAgIGRvYy5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgIHdpbmRvdy5zY3JvbGwoMCwgc2Nyb2xsVG9wKTtcbiAgICBpc09uID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgaWYgKGlzT24pIHtcbiAgICAgIG9mZigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbigpO1xuICB9XG5cbiAgdmFyIG5vU2Nyb2xsID0ge1xuICAgIG9uOiBvbixcbiAgICBvZmY6IG9mZixcbiAgICB0b2dnbGU6IHRvZ2dsZSxcbiAgfTtcblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gbm9TY3JvbGw7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5ub1Njcm9sbCA9IG5vU2Nyb2xsO1xuICB9XG59KSh3aW5kb3cpO1xuIl0sImZpbGUiOiJsaWJzL25vLXNjcm9sbC5qcyJ9
