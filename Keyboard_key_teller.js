
let box = document.querySelector('#key-box')
console.log(box)

document.addEventListener(
    "keydown",
    (e) => {
        console.log(e.key)
        document.getElementById('key-box').innerHTML = `You have entered ${e.key}`
})