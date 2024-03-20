copyrightText = document.getElementById("copyright")

const startYear = 1969
const dateObject = new Date()
const currentYear = dateObject.getFullYear()

copyrightText.textContent = `&copy; ${startYear} - ${currentYear}
