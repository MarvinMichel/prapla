const flowSections = document.querySelectorAll('section.flow')

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add('animate')
    }
  })
}, { threshold: .5 })

flowSections.forEach(section => {
  observer.observe(section)
})