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
    document.querySelectorAll('.card__top--flip').forEach(dom => {
        dom.classList.remove('flip-top')
    })
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
            <div class="card__top card__top--fixed" id="card_top_fixed">0</div>
            <div class="card__top card__top--flip" id="card_top_flip">0</div>
            <div class="card__bottom card__bottom--fixed" id="card_bottom_fixed">0</div>
            <div class="card__bottom card__bottom--flip" id="card_bottom_flip">0</div>
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
    let digit = digits[index]
    let prevDigit = prevDigits[index]

    let cards = document.querySelectorAll('.card')
    let topFixed = cards[index].querySelector('.card__top--fixed')
    let topFlip = cards[index].querySelector('.card__top--flip')
    let bottomFixed = cards[index].querySelector('.card__bottom--fixed')
    let bottomFlip = cards[index].querySelector('.card__bottom--flip')

    topFixed.innerText = digit
    topFlip.innerText = prevDigit
    bottomFixed.innerText = prevDigit
    bottomFlip.innerText = digit

    topFlip.classList.add('top-flip')
    bottomFlip.classList.add('bottom-flip')
    bottomFlip.addEventListener('animationend', animationHandler(topFlip, bottomFlip, bottomFixed, digit))
}
function animationHandler(topFlip, bottomFlip, bottomFixed, digit) {
    return event => {
        topFlip.innerText = digit
        bottomFixed.innerText = digit
        topFlip.classList.remove('top-flip')
        bottomFlip.classList.remove('bottom-flip')
    }
}