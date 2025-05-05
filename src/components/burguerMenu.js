//* IMPORTS

import { createElement } from '../utils/create-elements'
import { headerLinks } from '../data/header-links'

export function burgerMenu() {
  const body = document.querySelector('body')

  const burgerBtn = createElement('button', {
    className: 'burgerBtn',
    textContent: '☰',
    'aria-label': 'Desplegar menú'
  })

  const overlay = createElement('div', {
    className: 'burgerOverlay hidden'
  })

  const burgerMenuDiv = createElement('nav', {
    className: 'burgerMenuDiv'
  })

  const burgerMenuList = createElement('ul', {
    className: 'burgerMenuList'
  })

  headerLinks.forEach((link) => {
    const burgerMenuItem = createElement('li', {
      className: 'burgerMenuItem'
    })
    const burgerMenuLink = createElement('a', {
      href: link.href,
      textContent: link.nombre,
      className: 'burgerMenuLink',
      'aria-label': `Link to ${link.nombre}`,
      rel: 'noopener noreferrer'
    })

    burgerMenuLink.addEventListener('click', (e) => {
      e.preventDefault()

      overlay.classList.add('hidden')
      overlay.classList.remove('visible')
      burgerBtn.textContent = '☰'
    })

    burgerMenuItem.appendChild(burgerMenuLink)
    burgerMenuList.appendChild(burgerMenuItem)
  })

  burgerMenuDiv.appendChild(burgerMenuList)
  overlay.appendChild(burgerMenuDiv)
  body.append(burgerBtn, overlay)

  burgerBtn.addEventListener('click', () => {
    const isOpen = !overlay.classList.contains('hidden')
    overlay.classList.toggle('hidden')
    overlay.classList.toggle('visible')
    burgerBtn.textContent = isOpen ? '☰' : '✖️'
  })

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.add('hidden')
      overlay.classList.remove('visible')
      burgerBtn.textContent = '☰'
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('visible')) {
      overlay.classList.add('hidden')
      overlay.classList.remove('visible')
      burgerBtn.textContent = '☰'
    }
  })
}
