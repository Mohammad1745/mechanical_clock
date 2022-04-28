document.addEventListener('DOMContentLoaded', () => {
    let app = document.getElementById('app')
    app.innerHTML = clock(12, 12, 12)
})

function clock(hour, minute, second) {

    let hourSegment = clockSegment('HOURS', cards(hour))
    let minuteSegment = clockSegment('MINUTES', cards(minute))
    let secondSegment = clockSegment('SECONDS', cards(second))

    return `
        <div class="clock">
            <div class="clock__hour clock__segment">${hourSegment}</div>
            <div class="clock__minute clock__segment">${minuteSegment}</div>
            <div class="clock__second clock__segment">${secondSegment}</div>
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

function card(digit) {
    return `
        <div class="card">
            <div class="card__digit">${digit}</div>
            <div class="card__top"></div>
            <div class="card__bottom"></div>
        </div>
    `
}