//* IMPORTS

import { createElement } from '../utils/create-elements'

export function renderBtn({
  container,
  iconImg = '/assets/eldersign.gif',
  onClick,
  ...attributes
}) {
  const button = createElement('button', attributes)

  if (iconImg) {
    const icon = createElement('img', {
      src: iconImg,
      alt: 'Elder Sign icon',
      className: 'btnIcon',
      loading: 'lazy'
    })
    button.prepend(icon)
  }

  button.addEventListener('click', onClick)

  container.append(button)

  return button
}
