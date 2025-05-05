export function updateHiddenInput(hiddenInput) {
  const selected = Array.from(document.querySelectorAll('.selectedBtn')).map(
    (btn) => btn.dataset.value
  )
  hiddenInput.value = selected.join(', ')
}
