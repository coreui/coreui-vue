export const addClass = (el, className) => {
  if (className && isElement(el)) {
    el.classList.add(className)
  }
}

export const removeClass = (el, className) => {
  if (className && isElement(el)) {
    el.classList.remove(className)
  }
}
