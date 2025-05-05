import { createElement } from '../utils/create-elements'

export function renderSkillDetail({ skill, skillDetails, onClose }) {
  const closeDetailBtn = createElement('button', {
    className: 'closeDetailBtn',
    textContent: 'x'
  })

  closeDetailBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    onClose()
  })

  const detailImg = createElement('img', {
    className: 'detailImg',
    src: skill.descriptionImg,
    alt: 'Cthulhu picture',
    title: 'Cthulhu at its prime',
    loading: 'lazy'
  })

  const detailText = createElement('p', {
    className: 'detailText',
    innerHTML: skill.description
  })

  skillDetails.append(closeDetailBtn, detailImg, detailText)
}
