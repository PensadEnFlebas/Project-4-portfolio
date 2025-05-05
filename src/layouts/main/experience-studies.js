//* IMPORTS

import { createElement } from '../../utils/create-elements'
import { renderBtn } from '../../components/button'
import { renderExpCard } from '../../components/experience-cards'
import { renderStuCard } from '../../components/studies-cards'

export function experienceStudies() {
  const main = document.querySelector('main')

  const expStuSection = createElement('section', {
    id: 'expStuSection'
  })

  const expStuContainer = createElement('div', {
    className: 'expStuContainer'
  })

  const expDiv = createElement('div', {
    className: 'expDiv showedDiv'
  })

  const stuDiv = createElement('div', {
    className: 'stuDiv hiddenDiv'
  })

  const expBtn = renderBtn({
    container: expStuContainer,
    className: 'btn expBtn clickedBtn',
    textContent: 'EXPERIENCE',
    onClick: () => {
      expBtn.classList.add('clickedBtn')
      expBtn.classList.remove('nonClickedBtn')
      stuBtn.classList.remove('clickedBtn')
      stuBtn.classList.add('nonClickedBtn')

      expDiv.classList.remove('hiddenDiv')
      expDiv.classList.add('showedDiv')
      stuDiv.classList.remove('showedDiv')
      stuDiv.classList.add('hiddenDiv')
    }
  })

  const stuBtn = renderBtn({
    container: expStuContainer,
    className: 'btn stuBtn nonClickedBtn',
    textContent: 'STUDIES',
    onClick: () => {
      stuBtn.classList.add('clickedBtn')
      stuBtn.classList.remove('nonClickedBtn')
      expBtn.classList.remove('clickedBtn')
      expBtn.classList.add('nonClickedBtn')

      stuDiv.classList.remove('hiddenDiv')
      stuDiv.classList.add('showedDiv')
      expDiv.classList.remove('showedDiv')
      expDiv.classList.add('hiddenDiv')
    }
  })

  renderExpCard(expDiv)
  renderStuCard(stuDiv)

  expStuSection.append(expStuContainer, expDiv, stuDiv)
  main.appendChild(expStuSection)
}
