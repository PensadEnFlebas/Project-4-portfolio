//* IMPORTS

import { getHeaderHeight } from './get-headerHeight'

export function basicSetTimeout(card) {
  setTimeout(() => {
    if (card === null) {
      skillDetails.innerHTML = ''
    }
  }, 500)
}

export function scrollSetTimeout(tag, text) {
  setTimeout(() => {
    tag.classList.remove('hidden')
    text.classList.add('skillTextHighlight')

    setTimeout(() => {
      const headerHeight = getHeaderHeight()

      const tagTop = tag.getBoundingClientRect().top + window.scrollY
      const targetScroll = tagTop - headerHeight - 170

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      })
    }, 100)
  }, 10)
}
