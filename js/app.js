let daysItem = document.querySelector('#days')
let hoursItem = document.querySelector('#hours');
let minutesItem = document.querySelector('#minutes');
let secondsItem = document.querySelector('#seconds');

let countDown = ()=>{
    let futureDate = new Date("02 oct 2023")
    let currentDate = new Date()
    let myDate = futureDate-currentDate
    // console.log(myDate)

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24)
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24
    let min = Math.floor(myDate / 1000 / 60) % 60
    let sec = Math.floor(myDate / 1000) % 60
    daysItem.innerHTML = days
    hoursItem.innerHTML = hours
    minutesItem.innerHTML = min
    secondsItem.innerHTML = sec

}
countDown();
setInterval(countDown,1000)