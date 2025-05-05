//* IMPORTS

import { createElement } from '../../utils/create-elements'
import { renderTestimonialCard } from '../../components/testimonial-cards'

export function testimonials() {
  const main = document.querySelector('main')

  const testimonialSection = createElement('section', {
    id: 'testimonialSection'
  })

  const h2Testimonial = createElement('h2', {
    className: 'h2Testimonial',
    innerHTML: 'TESTIMONIALS'
  })

  const testimonialContainer = createElement('div', {
    className: 'testimonialContainer'
  })

  renderTestimonialCard(testimonialContainer)

  testimonialSection.append(h2Testimonial, testimonialContainer)
  main.appendChild(testimonialSection)
}
