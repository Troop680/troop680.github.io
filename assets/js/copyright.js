copyrightText = document.getElementById("copyright")

const startYear = 1969
const dateObject = new Date()
const currentYear = dateObject.getFullYear()

copyrightText.innerText = `&copy; ${startYear} - ${currentYear} Troop 680`
