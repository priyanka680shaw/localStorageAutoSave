const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", ()=>{
    localStorage.setItem("savedText",textarea.value);
})

const data = localStorage.getItem("savedText");
console.log(data);
textarea.innerText = data;