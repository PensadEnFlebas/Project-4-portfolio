export function getHeaderHeight() {
  const header = document.querySelector('header')
  return header.getBoundingClientRect().height
}
