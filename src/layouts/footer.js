//* IMPORTS

import { createElement } from '../utils/create-elements'
import { socialMediaList } from '../data/social-media-links'

export function footer() {
  const footer = document.querySelector('footer')

  const pFooter = createElement('p', {
    className: 'pFooter',
    innerHTML:
      '© 2025 Project by <span>Goblin</span> for <span>RockTheCode</span>'
  })

  const footerIconsDiv = createElement('div', {
    className: 'footerIconsDiv'
  })

  socialMediaList.forEach((media) => {
    const footerLi = createElement('li', {
      className: 'footerLi'
    })

    const footerLink = createElement('a', {
      className: 'footerLink',
      href: media.href,
      'aria-label': `Link to ${media.name}`,
      rel: 'noopener noreferrer'
    })

    const footerIcon = createElement('img', {
      src: media.src,
      alt: `${media.name} icon`,
      title: `Go to my ${media.name} page`,
      className: 'footerIcon',
      loading: 'lazy'
    })

    footerLink.appendChild(footerIcon)
    footerLi.appendChild(footerLink)
    footerIconsDiv.appendChild(footerLi)

    footerLink.addEventListener('click', () => {
      window.open(`${media.href}`, '_blank')
    })
  })

  footer.append(pFooter, footerIconsDiv)
}
