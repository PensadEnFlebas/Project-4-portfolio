export function smoothScroll() {
  const allSectionLinks = document.querySelectorAll('a[href^="#"]')

  allSectionLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()

      const href = link.getAttribute('href')
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const header = document.querySelector('header')
        const headerHeight = header.offsetHeight

        window.scrollTo({
          top: targetElement.offsetTop - headerHeight,
          behavior: 'smooth'
        })
      }
    })
  })
}
