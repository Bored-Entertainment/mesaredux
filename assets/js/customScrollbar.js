'use strict';

(function() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  var isFirefox = /firefox/i.test(navigator.userAgent || '');
  var hasCoarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

  if (!isFirefox || hasCoarsePointer) {
    return;
  }

  var doc = document.documentElement;
  var body = document.body;

  if (!doc || !body) {
    return;
  }

  var SCROLLBAR_WIDTH = 16;
  var MIN_THUMB_SIZE = 30;
  var BUTTON_SCROLL_STEP = 48;
  var BUTTON_SCROLL_INTERVAL = 55;

  doc.classList.add('custom-scrollbar-active');
  body.classList.add('custom-scrollbar-active');

  var scrollbar = document.createElement('div');
  scrollbar.className = 'custom-scrollbar';
  scrollbar.setAttribute('role', 'none');

  scrollbar.innerHTML = '' +
    '<button type="button" class="custom-scrollbar-button up" aria-hidden="true"></button>' +
    '<div class="custom-scrollbar-track" role="presentation">' +
      '<div class="custom-scrollbar-thumb" role="presentation"></div>' +
    '</div>' +
    '<button type="button" class="custom-scrollbar-button down" aria-hidden="true"></button>';

  body.appendChild(scrollbar);

  var track = scrollbar.querySelector('.custom-scrollbar-track');
  var thumb = scrollbar.querySelector('.custom-scrollbar-thumb');
  var buttonUp = scrollbar.querySelector('.custom-scrollbar-button.up');
  var buttonDown = scrollbar.querySelector('.custom-scrollbar-button.down');

  if (!track || !thumb || !buttonUp || !buttonDown) {
    return;
  }

  var isDragging = false;
  var dragStartY = 0;
  var dragStartScroll = 0;
  var buttonTimer = null;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function getScrollableHeight() {
    return Math.max(doc.scrollHeight, body.scrollHeight) - doc.clientHeight;
  }

  function toggleVisibility() {
    var shouldShow = getScrollableHeight() > 0;
    scrollbar.classList.toggle('is-visible', shouldShow);
    body.classList.toggle('custom-scrollbar-visible', shouldShow);
    return shouldShow;
  }

  function updateThumb() {
    if (!toggleVisibility()) {
      return;
    }

    var scrollableHeight = getScrollableHeight();
    if (scrollableHeight <= 0) {
      thumb.style.height = MIN_THUMB_SIZE + 'px';
      thumb.style.top = '0px';
      return;
    }

    var trackHeight = track.clientHeight;
    if (trackHeight <= 0) {
      return;
    }

    var visibleRatio = doc.clientHeight / (Math.max(doc.scrollHeight, body.scrollHeight));
    var thumbHeight = clamp(trackHeight * visibleRatio, MIN_THUMB_SIZE, trackHeight);
    var maxThumbTop = trackHeight - thumbHeight;
    var scrollTop = doc.scrollTop;
    var thumbTop = maxThumbTop > 0 ? (scrollTop / scrollableHeight) * maxThumbTop : 0;

    thumb.style.height = thumbHeight + 'px';
    thumb.style.top = thumbTop + 'px';
  }

  function stopDragging() {
    if (!isDragging) {
      return;
    }
    isDragging = false;
    thumb.classList.remove('is-dragging');
    body.classList.remove('custom-scrollbar-dragging');
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', stopDragging);
  }

  function onDragStart(event) {
    if (event.button !== 0) {
      return;
    }

    isDragging = true;
    dragStartY = event.clientY;
    dragStartScroll = doc.scrollTop;
    thumb.classList.add('is-dragging');
    body.classList.add('custom-scrollbar-dragging');

    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', stopDragging);

    event.preventDefault();
  }

  function onDragMove(event) {
    if (!isDragging) {
      return;
    }

    var trackHeight = track.clientHeight;
    if (trackHeight <= 0) {
      return;
    }

    var thumbHeight = thumb.offsetHeight;
    var maxThumbTop = trackHeight - thumbHeight;
    var scrollableHeight = getScrollableHeight();

    if (maxThumbTop <= 0 || scrollableHeight <= 0) {
      return;
    }

    var deltaY = event.clientY - dragStartY;
    var scrollDelta = (deltaY / maxThumbTop) * scrollableHeight;
    doc.scrollTop = clamp(dragStartScroll + scrollDelta, 0, scrollableHeight);
  }

  function scrollTrackTo(positionY) {
    var trackRect = track.getBoundingClientRect();
    var thumbHeight = thumb.offsetHeight;
    var trackHeight = trackRect.height;
    var scrollableHeight = getScrollableHeight();

    if (trackHeight <= 0 || scrollableHeight <= 0) {
      return;
    }

    var offset = positionY - trackRect.top - (thumbHeight / 2);
    var maxThumbTop = trackHeight - thumbHeight;
    var thumbTop = clamp(offset, 0, maxThumbTop);
    var scrollTop = (thumbTop / maxThumbTop) * scrollableHeight;
    doc.scrollTop = clamp(scrollTop, 0, scrollableHeight);
  }

  function onTrackMouseDown(event) {
    if (event.button !== 0) {
      return;
    }
    if (event.target === thumb) {
      return;
    }
    scrollTrackTo(event.clientY);
    event.preventDefault();
  }

  function startButtonScroll(direction) {
    var scrollStep = function() {
      doc.scrollBy({ top: direction * BUTTON_SCROLL_STEP, behavior: 'auto' });
      updateThumb();
    };

    scrollStep();
    stopButtonScroll();
    buttonTimer = window.setInterval(scrollStep, BUTTON_SCROLL_INTERVAL);
  }

  function stopButtonScroll() {
    if (buttonTimer !== null) {
      window.clearInterval(buttonTimer);
      buttonTimer = null;
    }
  }

  thumb.addEventListener('mousedown', onDragStart);
  track.addEventListener('mousedown', onTrackMouseDown);

  buttonUp.addEventListener('mousedown', function(event) {
    if (event.button !== 0) {
      return;
    }
    startButtonScroll(-1);
    event.preventDefault();
  });

  buttonDown.addEventListener('mousedown', function(event) {
    if (event.button !== 0) {
      return;
    }
    startButtonScroll(1);
    event.preventDefault();
  });

  ['mouseup', 'mouseleave', 'blur'].forEach(function(type) {
    buttonUp.addEventListener(type, stopButtonScroll);
    buttonDown.addEventListener(type, stopButtonScroll);
  });

  document.addEventListener('mouseup', function() {
    stopDragging();
    stopButtonScroll();
  });

  window.addEventListener('blur', function() {
    stopDragging();
    stopButtonScroll();
  });

  window.addEventListener('scroll', updateThumb, { passive: true });
  window.addEventListener('resize', updateThumb);

  if (typeof ResizeObserver === 'function') {
    var resizeObserver = new ResizeObserver(function() {
      updateThumb();
    });

    resizeObserver.observe(body);
    resizeObserver.observe(doc);
  }

  if ('MutationObserver' in window) {
    var mutationObserver = new MutationObserver(function() {
      window.requestAnimationFrame(updateThumb);
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });
  }

  window.addEventListener('DOMContentLoaded', updateThumb);
  window.requestAnimationFrame(updateThumb);
})();
