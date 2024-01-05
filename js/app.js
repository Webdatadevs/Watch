const contentElement = document.querySelector('.content')
const timeClearElement = document.querySelector('#timeClear')
let timeOclock;

function getDate() {
    let newLocDate = new Date()
    let getHoursEl = newLocDate.getHours()
    let getMinutesEl = newLocDate.getMinutes()
    let getSecondsEl = newLocDate.getSeconds()
    getHoursEl = getHoursEl < 10 ? '0' + getHoursEl : getHoursEl
    getMinutesEl = getMinutesEl < 10 ? '0' + getMinutesEl : getMinutesEl
    getSecondsEl = getSecondsEl < 10 ? '0' + getSecondsEl : getSecondsEl
    contentElement.children[0].textContent = getHoursEl
    contentElement.children[2].textContent = getMinutesEl
    contentElement.children[4].textContent = getSecondsEl
}

timeOclock = setInterval(getDate, 1000);
timeClearElement.addEventListener('click', function (event) {
    clearInterval(timeOclock)
})
getDate()