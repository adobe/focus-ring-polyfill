// Provides explicit indication of elements receiving focus through keyboard interaction rather than mouse or touch.
(function(document) {
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
  var keyboardFocus = false;
  var elements = document.getElementsByClassName('focus-ring');

  function onKeydownHandler(event) {
    if (event.ctrlKey || event.altKey || event.metaKey || NAVIGATION_KEYS.indexOf(event.key) === -1) {
      return;
    }
    keyboardFocus = true;

    if (document.activeElement && document.activeElement !== document.body) {
      document.activeElement.classList.add('focus-ring');
    }
  }

  function onMousedownHandler() {
    keyboardFocus = false;

    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('focus-ring');
    }

  }

  function onFocusHandler(event) {
    if (keyboardFocus) {
      event.target.classList.add('focus-ring');
    }
  }

  function onBlurHandler(event) {
    event.target.classList.remove('focus-ring');
  }

  document.addEventListener('keydown', onKeydownHandler, true);
  document.addEventListener('mousedown', onMousedownHandler, true);
  document.addEventListener('focus', onFocusHandler, true);
  document.addEventListener('blur', onBlurHandler, true);
}(document));
