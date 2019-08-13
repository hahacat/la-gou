(function rem (w) {
  const d = w.document
  let fontSize = 100
  let width = d.clientWidth || 375
  width = width > 750 ? 750 : width
  let scale = fontSize / 375
  function setFont () {
    d.documentElement.style.fontSize = scale * width + 'px'
  }
  let event = w.orientationchange ? 'orientationchange' : 'resize'
  w.addEventListener(event, setFont, false)
  d.addEventListener('DOMContentLoaded', setFont, false)
})(window)
