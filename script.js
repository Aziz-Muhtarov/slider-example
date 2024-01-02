const entities = [
    {
        city: 'Rostov-on-Don LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request',
        img: '/src/img/first-photo.jpg'
    },
    {
        city: 'Sochi Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request',
        img: './src/img/second-photo.jpg'
    },
    {
        city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request',
        img: './src/img/third-photo.jpg'
    }
]

const city = document.querySelector('.city')
const area = document.querySelector('.area')
const time = document.querySelector('.time')
const cost = document.querySelector('.cost')
const img = document.querySelector('.image')



const setEntity = (index) => {
    city.innerText = entities[index].city
    area.innerText = entities[index].area
    time.innerText = entities[index].time
    cost.innerText = entities[index].cost
    img.style.backgroundImage = `url(${entities[index].img})`
}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const firstImg = document.querySelector('.firstImg')
const secondImg = document.querySelector('.secondImg')
const thirdImg = document.querySelector('.thirdImg')

const firstPoint = document.querySelector('.firstPoint')
const secondPoint = document.querySelector('.secondPoint')
const thirdPoint = document.querySelector('.thirdPoint')



let currentIndex = 0

prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
})

next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
})

firstImg.addEventListener('click', () => {
    setEntity(currentIndex + 0);
})

secondImg.addEventListener('click', () => {
    setEntity(currentIndex + 1);
})

thirdImg.addEventListener('click', () => {
    setEntity(currentIndex + 2);
})

firstPoint.addEventListener('click', () => {
    setEntity(currentIndex + 0);
    firstPoint.style.backgroundColor = '#fff';
})

secondPoint.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    secondPoint.style.backgroundColor = '#fff';
})

thirdPoint.addEventListener('click', () => {
    setEntity(currentIndex + 2);
    thirdPoint.style.backgroundColor = '#fff';
})
