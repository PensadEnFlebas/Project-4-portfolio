//* IMPORTS

import { createElement } from '../utils/create-elements'

export function renderForm(container) {
  const form = createElement('form', {
    id: 'summonMeForm'
  })

  const nameInput = createElement('input', {
    className: 'formInput nameInput',
    type: 'text',
    name: 'name',
    placeholder: 'Your name',
    minLength: 2,
    maxLength: 30,
    required: true,
    pattern: '^\\S(.*\\S)?$',
    title: 'No spaces at the beginning or end. Min 2, max 30 characters.'
  })

  const emailInput = createElement('input', {
    className: 'formInput emailInput',
    type: 'email',
    name: 'email',
    placeholder: 'Your @ email',
    maxLength: 50,
    required: true,
    pattern: '^\\S+@\\S+\\.\\S+$',
    title: 'Enter a valid email. No leading/trailing spaces allowed.'
  })

  const suggestionTextarea = createElement('textarea', {
    className: 'formInput suggestionInput',
    name: 'suggestion',
    placeholder: 'Your message',
    maxLength: 500,
    rows: 5,
    required: true
  })

  const selectedFriendsInput = createElement('input', {
    id: 'selectedFriendsInput',
    type: 'hidden',
    name: 'selectedFriends',
    value: ''
  })

  const submitBtn = createElement('button', {
    className: 'btn submitBtn',
    type: 'submit',
    textContent: 'Submit'
  })

  const submitBtnIcon = createElement('img', {
    src: '/assets/send_icon.webp',
    alt: 'Send icon',
    className: 'submitBtnIcon',
    loading: 'lazy'
  })

  submitBtn.prepend(submitBtnIcon)

  form.append(
    nameInput,
    emailInput,
    suggestionTextarea,
    selectedFriendsInput,
    submitBtn
  )

  container.appendChild(form)

  return { form, selectedFriendsInput }
}
