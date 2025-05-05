//* IMPORTS

import { createElement } from '../../utils/create-elements'

export function aboutMe() {
  const main = document.querySelector('main')

  const aboutMeSection = createElement('section', {
    id: 'aboutMeSection'
  })

  const h2AboutMe = createElement('h2', {
    className: 'h2AboutMe',
    textContent: 'About Me'
  })

  const aboutMeTextContainer = createElement('div', {
    className: 'aboutMeTextContainer'
  })

  const pAboutMe = createElement('p', {
    className: 'pAboutMe',
    innerHTML:
      "As a <span>cosmic entity</span> with eons of life and experience, I'm responsible of all creature's fate in your dimension. I'm waiting drowing in deep sleep under a seal in <span>the sunken city of R'Lyeh</span>, awaiting the bloody sacrifices from the worshippers of my cult to return and <span>spread the Apocalypse</span> to everyone who doesn't chant <span>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn</span> (In his house at R'lyeh, dead Cthulhu waits dreaming).<br><br>Ah, I also love <span>arcane damned books</span>, fast'n'loud <span>heavy, thrash & speed Metal</span> and <span>kittens</span> with bat wings or tentacles... or both."
  })

  aboutMeTextContainer.appendChild(pAboutMe)
  aboutMeSection.append(h2AboutMe, aboutMeTextContainer)
  main.appendChild(aboutMeSection)
}
