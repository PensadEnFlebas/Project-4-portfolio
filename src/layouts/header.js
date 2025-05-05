//* IMPORTS

import { createElement } from '../utils/create-elements'
import { headerLinks } from '../data/header-links'
import { divideArray } from '../utils/divide-arrays'
import { switchMode } from '../utils/dark-mode-switch'
import { adjustMainMargin } from '../utils/margin-top-adjustment'

export function header() {
  const header = document.querySelector('header')

  const nameDiv = createElement('div', {
    className: 'nameDiv'
  })

  const h1Name = createElement('h1', {
    className: 'h1Name',
    textContent: 'CTHULHU'
  })

  h1Name.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  const spanName = createElement('span', {
    className: 'spanName',
    textContent: "from R'Lyeh"
  })

  const darkThemeButton = createElement('button', {
    id: 'darkThemeButton',
    title: 'Switching Theme Button'
  })

  const darkThemeIcon = createElement('img', {
    id: 'darkThemeIcon',
    src: '/assets/dark_icon.svg',
    alt: 'Dark theme icon',
    loading: 'lazy'
  })

  const navBar = createElement('nav', {
    className: 'navBar'
  })

  const subHeaderMenu = divideArray(headerLinks, 3)

  subHeaderMenu.forEach((subMenu) => {
    const ulHeaderMenu = createElement('ul', {
      className: 'ulHeaderMenu'
    })

    subMenu.forEach((link) => {
      const liHeaderMenu = createElement('li', {
        className: 'liHeaderMenu'
      })

      const linkHeaderMenu = createElement('a', {
        className: 'linkHeaderMenu',
        textContent: link.nombre,
        href: link.href,
        'aria-label': `Link to ${link.nombre}`,
        rel: 'noopener noreferrer'
      })

      liHeaderMenu.appendChild(linkHeaderMenu)
      ulHeaderMenu.appendChild(liHeaderMenu)
    })

    navBar.appendChild(ulHeaderMenu)
  })

  darkThemeButton.appendChild(darkThemeIcon)
  nameDiv.append(h1Name, spanName, darkThemeButton)
  header.append(nameDiv, navBar)

  switchMode()
  adjustMainMargin()
}
