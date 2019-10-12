window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (id, text) => {
    const element = document.getElementById(id)
    if (element) {
      element.innerText = text
    }
  }

  ['chrome', 'node', 'electron'].forEach(type => {
    replaceText(`${type}-version`, process.versions[type])
  })
})
