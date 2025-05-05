export const switchMode = () => {
  const body = document.querySelector('body')
  const darkThemeButton = document.querySelector('#darkThemeButton')
  const darkThemeIcon = document.querySelector('#darkThemeIcon')

  const checkingMode = localStorage.getItem('theme')
  if (checkingMode === 'dark') {
    body.classList.add('dark')
    darkThemeIcon.src = '/assets/dark_icon.svg'
  }

  darkThemeButton.addEventListener('click', () => {
    const darkMode = body.classList.toggle('dark')

    darkThemeIcon.src = darkMode
      ? '/assets/light_icon.svg'
      : '/assets/dark_icon.svg'

    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  })
}
