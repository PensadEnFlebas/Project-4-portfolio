//* IMPORTS

import { createElement } from '../../utils/create-elements'
import { skillsList } from '../../data/skills-list'
import { basicSetTimeout, scrollSetTimeout } from '../../utils/set-time-out'
import { renderSkillDetail } from '../../components/skill-details'

export function skills() {
  const main = document.querySelector('main')

  const skillsSection = createElement('section', {
    id: 'skillsSection'
  })

  const h2Skills = createElement('h2', {
    className: 'h2Skills',
    innerHTML: 'Skills <span>&</span> Powers'
  })

  const skillsContainer = createElement('div', {
    className: 'skillsContainer'
  })

  const skillDetails = createElement('div', {
    className: 'skillDetails hidden'
  })

  let skillOpened = null
  let skillTextHighlight = null

  skillsList.forEach((skill) => {
    const skillCard = createElement('article', {
      className: 'skillCard'
    })

    const skillImg = createElement('img', {
      className: 'skillImg',
      src: skill.src,
      alt: 'Necronomicom picture',
      title: 'Necronomicom: damned book of the dead',
      loading: 'lazy'
    })

    const skillText = createElement('h3', {
      className: 'h3Skills',
      textContent: skill.title
    })

    skillCard.append(skillImg, skillText)
    skillsContainer.appendChild(skillCard)

    skillCard.addEventListener('click', () => {
      if (skillOpened === skill.title) {
        skillDetails.classList.add('hidden')
        skillText.classList.remove('skillTextHighlight')

        basicSetTimeout(skillOpened)

        skillOpened = null
        skillTextHighlight = null
        return
      }

      if (skillTextHighlight) {
        skillTextHighlight.classList.remove('skillTextHighlight')
      }

      skillOpened = skill.title
      skillTextHighlight = skillText
      skillText.classList.add('skillTextHighlight')
      skillDetails.innerHTML = ''

      renderSkillDetail({
        skill,
        skillDetails,
        onClose: () => {
          skillDetails.classList.add('hidden')
          skillText.classList.remove('skillTextHighlight')

          basicSetTimeout(skillOpened)

          skillOpened = null
          skillTextHighlight = null
        }
      })

      scrollSetTimeout(skillDetails, skillText)
    })
  })

  skillsSection.append(h2Skills, skillsContainer, skillDetails)
  main.appendChild(skillsSection)
}
