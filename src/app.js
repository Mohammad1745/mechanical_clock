let digits = [0,0,0,0,0,0]
let prevDigits = [0,0,0,0,0,0]

document.addEventListener('DOMContentLoaded', () => {
    let app = document.getElementById('app')
    app.innerHTML = clock(0, 0, 0)
    runClock()
})

function runClock() {
    prevDigits = digits
    digits = clockDigits()
    digits.map((digit, index) => {
        if (digit !== prevDigits[index]) {
            changeDigit(index)
        }
    })

    setTimeout(()=>{
        runClock()
    }, 333)
}

function clock(hour, minute, second) {
    let hourSegment = clockSegment('HOURS', cards(hour))
    let minuteSegment = clockSegment('MINUTES', cards(minute))
    let secondSegment = clockSegment('SECONDS', cards(second))

    return `
        <div class="clock">
            <div class="clock__segment">${hourSegment}</div>
            <div class="clock__segment">${minuteSegment}</div>
            <div class="clock__segment">${secondSegment}</div>
        </div>
    `
}

function clockSegment(title, digits) {
    return `
        <div class="title">${title}</div>
        <div class="digits">
            ${digits[0]}
            ${digits[1]}
        </div>
    `
}

function cards(number) {
    return number < 10 ?
        [card(0), card(number)]
        : [card(Math.floor(number/10)), card(number%10)]
}

function card(digit, id='card') {
    return `
        <div class="card" id="${id}">
            <div class="card__digit">${digit}</div>
            <div class="card__top">
                <div class="card__top__text card__top--flip">${digit}</div>
                <div class="card__top__text">${digit}</div>
            </div>
            <div class="card__bottom">
                <div class="card__bottom__text card__bottom--flip">${digit}</div>
                <div class="card__bottom__text">${digit}</div>
            </div>
        </div>
    `
}

function clockDigits(){
    let date = new Date()

    return [
        Math.floor(date.getHours()/10),
        date.getHours()%10,
        Math.floor(date.getMinutes()/10),
        date.getMinutes()%10,
        Math.floor(date.getSeconds()/10),
        date.getSeconds()%10,
    ]
}

function changeDigit(index) {
    let newCard = card(digits[index], 'new_card')
    let cards = document.querySelectorAll('.card')
    cards[index].querySelector('.card__top').innerText = digits[index]
    cards[index].querySelector('.card__digit').innerText = digits[index]
    cards[index].querySelector('.card__bottom__text').innerText = digits[index]
    let cardTop = cards[index].querySelector('.card__top')
    // cardTop.style.transform = 'rotateX(90deg)'
}