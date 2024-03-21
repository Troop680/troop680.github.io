const startYear = 1969
const dateObject = new Date()
const currentYear = dateObject.getFullYear()

document.getElementById("startCRYear").textContent = `${startYear}`
document.getElementById("currentCRYear").textContent = `${currentYear}`
