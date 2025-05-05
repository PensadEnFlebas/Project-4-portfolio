//* IMPORTS

import { createElement } from '../utils/create-elements'
import { stuList } from '../data/studies-list'

export function renderStuCard(container) {
  stuList.forEach((stu) => {
    const stuCard = createElement('article', {
      className: 'expStuCard stuCard'
    })

    const stuTitle = createElement('h3', {
      className: 'stuTitle',
      textContent: stu.title
    })

    const stuDate = createElement('p', {
      className: 'stuDate',
      textContent: stu.date
    })

    const stuCenter = createElement('p', {
      className: 'stuCenter',
      textContent: stu.center
    })

    const stuList = createElement('p', {
      className: 'stuList',
      innerHTML: stu.list
    })

    let stuImg
    if (stu.src === null) {
      stuImg = ''
    } else {
      stuImg = createElement('img', {
        className: 'expStuImg',
        src: stu.src,
        alt: `Cthulhu at work`,
        loading: 'lazy'
      })
    }

    stuCard.append(stuTitle, stuDate, stuCenter, stuList, stuImg)
    container.appendChild(stuCard)
  })
}
