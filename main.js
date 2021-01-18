const input = document.querySelector(".input")
let Title = document.querySelector(".title")



input.addEventListener('keyup', () => {
    Title.textContent = input.value

    if(Title.textContent === 'hack'){
        document.body.style.backgroundColor = 'red'
    } else if (Title.textContent === 'done'){
        document.body.style.backgroundColor = 'lime'
    } else {
        document.body.style.backgroundColor = 'grey'
    }
    
})





