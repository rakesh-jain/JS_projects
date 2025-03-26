function sayHello() {
    alert("Hello, good morning!");
}

function changetext() {
    // Select the h1 element and change its text
    const h1data = document.querySelector("h1");
    h1data.textContent = "Hello, I am Rakesh";
    
    // Show an alert
    //sayHello();
    addeParagraph();
}

function addeParagraph(){
    document.getElementById("content").innerHTML = "<p>  i am learning javascript </p>";
}

let btn = document.getElementById("btnRate");
let output =document.getElementById("output");

btn.addEventListener("click",()=>{

    let rates = document.getElementsByName("rate");
    rates.forEach((rate)=>{
        if(rate.checked){
            output.innerText = `You have rated ${rate.value}`;
        }
    });
});

let btn1 = document.getElementById("addsections");
let btn2 = document.getElementById("removeSections");

let paragraph = document.getElementById("addingSection");
// btn1.addEventListener("click",()=>{
//     let par = document.createElement("p");
//     par.textContent = "This is a new paragraph added by you";
//     paragraph.appendChild(par);
// });

btn2.addEventListener("click",()=>{
    paragraph.removeChild(paragraph.lastElementChild);
});

let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
    let count = document.getElementsByTagName('p');
    alert(`There are ${count.length} paragraph elements on the page`);
});

async function asyncFunction() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        let i = 0;
        let intervalId = setInterval(() => {
            if (i < data.length) {
                //console.log(data[i]);
                btn1.addEventListener("click",()=>{
                    let par = document.createElement("p");
                    let title = document.createElement('h4');
                    title.textContent = data[i].title;
                    par.textContent = data[i].body;
                    paragraph.
                    appendChild(title)
                    .appendChild(par);
                });
                i++;
            } else {  
                clearInterval(intervalId);
            }
        }, 200);
    } catch (err) {
        console.log(err);
    }
}

asyncFunction();


//creating a  new element 
