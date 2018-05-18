// Provides explicit indication of elements receiving focus through keyboard interaction rather than mouse or touch.
(function(doc) {
  // In case file is imported in SSR context, don't polyfill anything
  if (!doc) {
    return;
  }

  var NAVIGATION_KEYS = [
    'Tab',
    'ArrowUp',
    'ArrowRight',
    'ArrowDown',
    'ArrowLeft',
    'Home',
    'End',
    'PageUp',
    'PageDown',
    'Enter',
    ' ',
    'Escape',

    /* IE9 and Firefox < 37 */
    'Up',
    'Right',
    'Down',
    'Left',
    'Esc'
  ];
  var TEXT_INPUT_TYPES = [
    'text',
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'time',
    'url',
    'week'
  ];
  var keyboardFocus = false;
  var elements = doc.getElementsByClassName('focus-ring');

  function onKeydownHandler(event) {
    if (event.ctrlKey || event.altKey || event.metaKey || NAVIGATION_KEYS.indexOf(event.key) === -1) {
      return;
    }
    keyboardFocus = true;

    if (doc.activeElement &&
        doc.activeElement !== doc.body &&
        doc.activeElement.tagName !== 'TEXTAREA' &&
        !(doc.activeElement.tagName === 'INPUT' &&
          TEXT_INPUT_TYPES.indexOf(doc.activeElement.type) !== -1)) {
      doc.activeElement.classList.add('focus-ring');
    }
  }

  function onMousedownHandler() {
    keyboardFocus = false;

    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('focus-ring');
    }

  }

  function onFocusHandler(event) {
    var classList = event.target.classList;
    if (classList && keyboardFocus) {
      classList.add('focus-ring');
    }
  }

  function onBlurHandler(event) {
    var classList = event.target.classList;
    classList && classList.remove('focus-ring');
  }

  doc.addEventListener('keydown', onKeydownHandler, true);
  doc.addEventListener('mousedown', onMousedownHandler, true);
  doc.addEventListener('focus', onFocusHandler, true);
  doc.addEventListener('blur', onBlurHandler, true);
})(typeof window === "undefined" ? undefined : document);
