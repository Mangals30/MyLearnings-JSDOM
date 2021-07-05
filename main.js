const currentYear = document.querySelector('#year')
const dates = document.querySelector('#dates')
const courses = document.querySelectorAll('li')
const {
  month,
  date,
  year,
  hours,
  minutes,
  seconds
} = getDate()
console.log(month, date, year, hours, minutes, seconds)
dates.textContent = `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`
currentYear.textContent = year

for (let i = 0; i < courses.length; i++) {
  console.log(courses[i])
  if (courses[i].textContent.toLowerCase().endsWith('learned')) {
    courses[i].style.background = '#5bbc7a'
  } else if (courses[i].textContent.toLowerCase().endsWith('learning')) {
    courses[i].style.background = '#f7dc5c'
  } else if (courses[i].textContent.toLowerCase().endsWith('yet to learn')) {
    courses[i].style.background = '#eb695b'
  } else {
    courses[i].style.background = 'none'
  }
}


setInterval(() => {
  currentYear.style.color = hexaDecimalColor()
  dates.style.background = hexaDecimalColor()
}, 1000);