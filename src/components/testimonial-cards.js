//* IMPORTS

import { createElement } from '../utils/create-elements'
import { testimonialList } from '../data/testimonial-list'
import { renderBtn } from './button'

export function renderTestimonialCard(container) {
  testimonialList.forEach((testimonial) => {
    const testimonialCard = createElement('article', {
      className: 'testimonialCard'
    })

    const testimonialImg = createElement('img', {
      id: 'testimonialImg',
      src: testimonial.src[0],
      alt: `${testimonial.name} pictures`,
      title: `${testimonial.name} pictures`,
      loading: 'lazy'
    })

    let testimonialImgIndex = 0
    testimonialImg.addEventListener('click', () => {
      testimonialImgIndex = (testimonialImgIndex + 1) % testimonial.src.length
      testimonialImg.src = testimonial.src[testimonialImgIndex]
    })

    const testimonialName = createElement('h4', {
      className: 'testimonialName',
      textContent: testimonial.name
    })

    const testimonialDescription = createElement('p', {
      className: 'testimonialDescription',
      innerHTML: testimonial.description
    })

    const testimonialIcon = createElement('img', {
      className: 'testimonialIcon',
      src: testimonial.icon,
      alt: `${testimonial.name} icon`,
      title: `${testimonial.name} icon`,
      loading: 'lazy'
    })

    const testimonialText = createElement('p', {
      className: 'testimonialText',
      innerHTML: testimonial.text
    })

    testimonialCard.append(
      testimonialImg,
      testimonialName,
      testimonialDescription,
      testimonialIcon,
      testimonialText
    )

    renderBtn({
      container: testimonialCard,
      className: 'btn testimonialBtn',
      textContent: `Projects with ${testimonial.name}`,
      onClick: () => window.open(`${testimonial.web}`, '_blank')
    })

    container.appendChild(testimonialCard)
  })
}
