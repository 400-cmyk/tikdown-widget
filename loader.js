/*!
 * TikDown Embeddable Widget Loader
 * Usage: place a <div id="tikdown-widget"></div> where you want the widget,
 * then include this script once anywhere on the page:
 * <script src="https://www.tikdown.store/p/loader.js" async></script>
 */
(function () {
  var EMBED_URL = 'https://400-cmyk.github.io/tikdown-widget/embed.html';

  function init() {
    var targets = document.querySelectorAll('#tikdown-widget, .tikdown-widget');
    if (!targets.length) return;

    targets.forEach(function (el) {
      if (el.getAttribute('data-td-loaded')) return;
      el.setAttribute('data-td-loaded', '1');

      var iframe = document.createElement('iframe');
      iframe.src = EMBED_URL;
      iframe.style.width = '100%';
      iframe.style.maxWidth = '480px';
      iframe.style.border = 'none';
      iframe.style.height = '150px';
      iframe.style.display = 'block';
      iframe.style.margin = '0 auto';
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('title', 'TikTok Video Downloader Widget by TikDown');
      iframe.setAttribute('loading', 'lazy');

      el.appendChild(iframe);
    });
  }

  // Listen for auto-resize messages coming from the embed page
  window.addEventListener('message', function (event) {
    if (!event.data || typeof event.data.tikdownWidgetHeight === 'undefined') return;
    var iframes = document.querySelectorAll('#tikdown-widget iframe, .tikdown-widget iframe');
    iframes.forEach(function (f) {
      f.style.height = (event.data.tikdownWidgetHeight + 10) + 'px';
    });
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
