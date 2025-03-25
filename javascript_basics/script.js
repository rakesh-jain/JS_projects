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
btn1.addEventListener("click",()=>{
    let par = document.createElement("p");
    par.textContent = "This is a new paragraph added by you";
    paragraph.appendChild(par);
});

btn2.addEventListener("click",()=>{
    paragraph.removeChild(paragraph.lastElementChild);
});