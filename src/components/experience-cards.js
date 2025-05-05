//* IMPORTS

import { createElement } from '../utils/create-elements'
import { expList } from '../data/experience-list'

export function renderExpCard(container) {
  expList.forEach((exp) => {
    const expCard = createElement('article', {
      className: 'expStuCard expCard'
    })

    const expTitle = createElement('h3', {
      className: 'expTitle',
      textContent: exp.title
    })

    const expTerm = createElement('p', {
      className: 'expTerm',
      textContent: exp.term
    })

    const expCompany = createElement('p', {
      className: 'expCompany',
      textContent: exp.company
    })

    const expDescription = createElement('p', {
      className: 'expDescription',
      textContent: exp.description
    })

    let expImg
    if (exp.src === null) {
      expImg = ''
    } else {
      expImg = createElement('img', {
        className: 'expStuImg',
        src: exp.src,
        alt: `Cthulhu at work`,
        loading: 'lazy'
      })
    }

    expCard.append(expTitle, expTerm, expCompany, expDescription, expImg)
    container.appendChild(expCard)
  })
}
