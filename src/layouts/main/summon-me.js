//* IMPORTS

import { createElement } from '../../utils/create-elements'
import { testimonialList } from '../../data/testimonial-list'
import { renderBtn } from '../../components/button'
import { renderForm } from '../../components/form'
import { updateHiddenInput } from '../../utils/hidden-input'

export function summonMe() {
  const main = document.querySelector('main')

  const summonMeSection = createElement('section', {
    id: 'summonMeSection'
  })

  const h2SummonMe = createElement('h2', {
    className: 'h2SummonMe',
    textContent: 'Summon Me'
  })

  const mainSMContainer = createElement('div', {
    className: 'mainSMContainer'
  })

  const summonMeContainer = createElement('div', {
    className: 'summonMeContainer'
  })

  const h4SummonMe = createElement('h4', {
    className: 'h4SummonMe',
    innerHTML: 'Summon me...<br>At your<br>own <span>risk</span>'
  })

  const summonIcon = createElement('img', {
    src: '/assets/eldersign_icon.png',
    alt: 'Elder Sign icon',
    title: 'Elder Sign icon',
    className: 'summonIcon',
    loading: 'lazy'
  })

  const selectFriendsContainer = createElement('div', {
    className: 'selectFriendsContainer'
  })

  const pSummonMe = createElement('p', {
    className: 'pSummonMe',
    innerHTML: 'Go further...<br>and also summon some <span>friends</span>'
  })

  const friendsBtnContainer = createElement('div', {
    className: 'friendsBtnContainer'
  })

  testimonialList.forEach((friend) => {
    const summonFriendBtn = renderBtn({
      container: friendsBtnContainer,
      className: 'btn summonFriendBtn nonSelectedBtn',
      textContent: `${friend.name}`,
      dataset: {
        value: friend.name
      },
      onClick: () => {
        if (summonFriendBtn.classList.contains('nonSelectedBtn')) {
          summonFriendBtn.classList.remove('nonSelectedBtn')
          summonFriendBtn.classList.add('selectedBtn')
        } else {
          summonFriendBtn.classList.remove('selectedBtn')
          summonFriendBtn.classList.add('nonSelectedBtn')
        }
      }
    })
  })

  const formContainer = createElement('div', {
    className: 'formContainer'
  })

  const { form, selectedFriendsInput } = renderForm(formContainer)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    updateHiddenInput(selectedFriendsInput)

    const formData = new FormData(form)
    console.log(Object.fromEntries(formData))

    form.reset()

    document.querySelectorAll('.selectedBtn').forEach((btn) => {
      btn.classList.remove('selectedBtn')
      btn.classList.add('nonSelectedBtn')
    })
  })

  selectFriendsContainer.append(pSummonMe, friendsBtnContainer)
  summonMeContainer.append(h4SummonMe, summonIcon, selectFriendsContainer)
  mainSMContainer.append(summonMeContainer, formContainer)
  summonMeSection.append(h2SummonMe, mainSMContainer)
  main.appendChild(summonMeSection)
}
