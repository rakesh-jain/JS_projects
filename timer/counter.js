
let count=0;
let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementCounter');
let decrementBtn = document.getElementById('decrementCounter');
let resetBtn = document.getElementById('resetCounter');

incrementBtn.addEventListener('click',()=>{
    count++;
    counter.innerText = count;
});

decrementBtn.addEventListener('click',()=>{
    if(count>0){
        count--;
        counter.innerText = count;
    }else{
        counter.innerText = "Counter can't be negative";
    }
});


resetBtn.addEventListener('click',()=>{
    count = 0;
    counter.innerText = count;
});

