const txtInput = document.querySelector(".inputs input");
checkBtn = document.querySelector (".inputs button");
infotxt = document.querySelector (".info-txt");
let filterinput;


checkBtn.addEventListener ("click", () => {
     let reverseinput = filterinput.split("").reverse().join ("");
     console.log(filterinput, reverseinput);
     infotxt.style.display = "block";
     if (filterinput != reverseinput) {
        return infotxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a Palindrome!`;
     }
     infotxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a Palindrome!`;
})

txtInput.addEventListener ("keyup" , ()=> {
     filterinput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"")
     console.log (txtInput.value)

     if (filterinput) {
     return checkBtn.classList.add("active");
     }
     infotxt.style.display = "none";
     checkBtn.classList.remove("active");
})


