
/* const user = {
    name:'john',
    age:34,
    isAdmin:true
}

console.log(typeof(user))
console.log(user)

const data1 = JSON.stringify(user)
console.log(data1)

const new_user = JSON.parse(data1)
console.log(new_user) */

const getData = async(url) => {
    const response =  await fetch(url)
     if (!response.ok) {
         console.log('connectiom error')
     } else {
         return await response.json()
     }
 }



const wrapper = document.querySelector('.wrapper')
const goods = getData('db.json')
    .then((goods) => {
        goods.forEach(good => {
            console.log(good)

            wrapper.insertAdjacentHTML('beforeend',`
                <div class="card">
                    <div class="card_img" style="background-image: url(${good.img})"></div>
                    <div class="card_title">${good.title}</div>
                    <div class="card_descr">${good.description}</div>
                    <div class="card_price">${good.price}</div>
                </div>  
            `)
        });    
    })


const menu = document.querySelector('.menu')

window.addEventListener('keydown', (event) =>{
    console.log(event)
    if (event.code == 'KeyQ') {
        menu.style.left = 0
    }
    if (event.code == 'KeyW') {
        menu.style.left = '-100%'
    }
})
 