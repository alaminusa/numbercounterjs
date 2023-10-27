let counterUp = document.querySelectorAll(".counterUp");

// console.log(counterUp.dataset.number);

let arr = Array.from(counterUp);


arr.map((item)=>{
    
    let counter = 0;

    function count() {
        counter++
        item.innerHTML = counter;
        if (counter == item.dataset.number) {
            clearInterval(stop);
        }
    }
    
    let stop = setInterval(() => {
        count();
    
    }, 1000/item.dataset.number);
})
