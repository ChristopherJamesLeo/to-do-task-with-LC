console.log("hello world")
let getform = document.querySelector("#form-group"),
    getInput = document.querySelector("#form-input"),
    getSubmitBtn = document.querySelector("#submit-btn"),
    getlistContainer = document.querySelector("#list-group"),
    getClearAllBtn = document.querySelector("#clear-all-btn"),

    formTitle = document.querySelector(".form-title"),
    inputtitle = document.querySelector("#title"),
    titleForm = document.querySelector("#mytitle"),
    confirmBtn = document.querySelector("#confirm"),
    introPage = document.querySelector(".introContainer"),
    mainPage = document.querySelector(".container"),
    listTitle = document.querySelector("h3");

if(localStorage.getItem("listData")=== null){
    introPage.style.display = "block";
    mainPage.style.display= "none";
    titleForm.addEventListener("submit",function(e){
        e.preventDefault();
        let getTitle = inputtitle.value;
        localStorage.setItem("title",getTitle)
        if(getTitle.length === 0){
            alert("Type Your Title");
        }else{
            formTitle.innerText = getTitle;
            introPage.style.display = `none`;
            mainPage.style.display= "block";
            let uppCase = getTitle.toUpperCase();
            // console.log(uppCase)
            if(uppCase.includes(" LIST")){
                listTitle.innerText = `${getTitle}`;
            }else {
                listTitle.innerText = `${getTitle} List`;
            }
        }
    })
}else {
    let getTitle = inputtitle.value;
    introPage.style.display = `none`;
    mainPage.style.display= "block";
    formTitle.innerText = localStorage.getItem("title");
    listTitle.innerText = `${localStorage.getItem("title")} List`;
}



// Date and Time 
let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
let months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

let getTime = document.getElementById("time");
let shortdate = document.getElementById("shortdate");
let longdate = document.getElementById("longdate");
function time(){
    let getDate = new Date;
    let getDay = getDate.getDay();// sat sun
    let getDates = getDate.getDate(); // 1 to 30
    let getMonth = getDate.getMonth();
    let getYear = getDate.getUTCFullYear(); // 2022
    let getHour = getDate.getHours();
    let getMinute = getDate.getMinutes();
    let getSecond = getDate.getSeconds();
    if(getHour > 12){
        let amPm = getHour-12;
        getTime.innerText = `${amPm} : ${getMinute} : ${getSecond} PM`;
    }else{
        let amPm = getHour;
        getTime.innerText = `${amPm} : ${getMinute} : ${getSecond} AM`;
    }

    shortdate.innerText = `${getDates}.${getMonth+1}.${getYear}`;
    longdate.innerText =`${days[getDay]} / ${months[getMonth]} / ${getYear}`;
}

time();
let timeinterval =  setInterval(time, 1000);


getform.addEventListener("submit",function(e){
    e.preventDefault();
    task = getInput.value.trim();
    if (task.length === 0) {
        alert("Enter Your Daily Task")

    }else{
        let litag = document.createElement("li");
        litag.classList.add("list-group-items");
        getlistContainer.appendChild(litag);
        let getDate = new Date, getDates = getDate.getDate(), getMonth = getDate.getMonth(),getYear = getDate.getUTCFullYear();
        litag.innerHTML =`<span>${task}</span><span>${getDates}.${getMonth+1}.${getYear}</span> <a href="#" id="delete-btn"><ion-icon name="trash-outline"  class="delete-btn"></ion-icon></a>`
        getlistContainer.appendChild(litag);
        getInput.value = "";
        var listArr ;
        if(localStorage.getItem("listData")=== null){
            listArr= [];
        } else {
            listArr = JSON.parse(localStorage.getItem("listData"));
        }
        listArr.push(task);
        localStorage.setItem("listData",JSON.stringify(listArr));
    }
})

// delete list
getlistContainer.addEventListener("click",function(e){
    let target = e.target;
    console.log(target)
    if(target.classList.contains("delete-btn")){
        let targetParent = target.parentElement.parentElement;
        targetParent.remove();
    }

})


// Show Storage data
let getData = JSON.parse(localStorage.getItem("listData"));

if (getData === null) {
    // alert("Input Your Daily Tast")
    getInput.focus();
}else{
    getData.forEach(function(lists){
        let getDate = new Date, getDates = getDate.getDate(), getMonth = getDate.getMonth(),getYear = getDate.getUTCFullYear();
        let litag = document.createElement("li");
        litag.classList.add("list-group-items");
        getlistContainer.appendChild(litag);
        litag.innerHTML =`<span>${lists}</span><span>${getDates}.${getMonth+1}.${getYear}</span> <a href="#" id="delete-btn"><ion-icon name="trash-outline"  class="delete-btn"></ion-icon></a>`
        getlistContainer.appendChild(litag);
    });
}

// Clear All Data

getClearAllBtn.addEventListener("click",function(){
    alert("You push the clear all button that will be delete all memories")
    let getlistsArr =Array.from(getlistContainer.children) ;

    for(let i = 0 ; i < getlistsArr.length ; i++){
        getlistsArr[i].remove();
    }

    if(localStorage.getItem("listData") === null){
        return;
    }else {
        localStorage.removeItem("listData");
    }
})


