//* IMPORTS

import { createElement } from '../../utils/create-elements'
import { heroImages } from '../../data/hero-images'

export function hero() {
  const main = document.querySelector('main')

  const hero = createElement('section', {
    id: 'hero'
  })

  const heroTextContainer = createElement('div', {
    className: 'heroTextContainer'
  })

  const pStartHero = createElement('p', {
    className: 'pStartHero',
    textContent: 'Hello!'
  })

  const h2Hero = createElement('h2', {
    className: 'h4Hero',
    textContent: "I'm a Great Old One God"
  })

  const h3Hero = createElement('h3', {
    className: 'h3Hero',
    textContent: "I'll awake again, destroy your world and rule over the ruins"
  })

  const pEndHero = createElement('p', {
    className: 'pEndHero',
    textContent: "Cthulhu R'lyeh Ph'nglui mglw'nafh wgah'nagl fhtagn"
  })

  const heroImg = createElement('img', {
    id: 'heroImg',
    src: heroImages[0],
    alt: 'Cthulhu picture',
    title: "Cthulhu's graduation picture and more",
    loading: 'lazy'
  })

  let imgIndex = 0
  heroImg.addEventListener('click', () => {
    imgIndex = (imgIndex + 1) % heroImages.length
    heroImg.src = heroImages[imgIndex]
  })

  heroTextContainer.append(pStartHero, h2Hero, h3Hero, pEndHero)
  hero.append(heroTextContainer, heroImg)
  main.appendChild(hero)
}
