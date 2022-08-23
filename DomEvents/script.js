//an event listener is a function(callback function) that is called when an event fires.
// const button = document.querySelector('button');

// button.addEventListener('click', (event) => {
//     const li = document.createElement('li')
//     console.log(li)
//     const input = document.querySelector('input');
//     li.textContent = input.value;
//     const ul = document.querySelector('ul')
//     ul.appendChild(li);
//     input.value ='';

// })

// const bottom = document.getElementById('bottom')
// bottom.addEventListener('click', () => {
//     console.log('bottom was clicked')
// })

// const middle = document.getElementById('middle');

// middle.addEventListener('click', () => {
//     console.log('middle was clicked');
// })

// const first = document.getElementById('first');

// first.addEventListener('click', () => {
//     console.log('first was clicked')
// })

// const something = document.getElementById('something');
// const parentDiv = document.getElementById('parent-div');

// something.addEventListener('focus', () => {
//     console.log('something was focused')

// });

// parentDiv.addEventListener('click', (event) => {
//     console.log('clicked')
    
// })

const delegatedUl = document.getElementById('delegation');

const handleClick = (event) => {
    if (event.target.textContent === 'green') {
        console.log("It's green!");
    }
    //event is an arguement
}
delegatedUl.addEventListener('click', handleClick)