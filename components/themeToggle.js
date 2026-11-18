const html = document.querySelector('#root-html')
const themeToggleBtn = document.querySelector('#toggle-theme-button')

themeToggleBtn.addEventListener('click', themeToggle)

function themeToggle(){
    html.classList.toggle('dark-theme')
    
    themeToggleBtn.textContent = themeToggleBtn.textContent === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'
}