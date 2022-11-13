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
    listTitle = document.querySelector("h3"),
    titleList = document.querySelector(".title-list-group");





function allLiItems(inputTitleText,ulTag){
    let titlesLiTag = document.createElement("li");
    titlesLiTag.classList.add("title-list-group-items");
    titlesLiTag.innerText = inputTitleText;
    ulTag.appendChild(titlesLiTag)

}

function storeTitle(inputTitle ,inputTitleText){
    let alltitles;
    if(localStorage.getItem(inputTitle) === null){
        alltitles = [];
    }else {
        alltitles = JSON.parse(localStorage.getItem(inputTitle));
    }
    alltitles.push(inputTitleText);
    localStorage.setItem(inputTitle,JSON.stringify(alltitles));
    alltitles = JSON.parse(localStorage.getItem(inputTitle))
    return alltitles;
}






// var getTitles ;
    titleForm.addEventListener("submit",function(e){
        e.preventDefault();
        if(inputtitle.value === null){
            console.log("nul")
        }
        // console.log(inputtitle.value);
        let titleValue = inputtitle.value
        
        if(titleValue !== ""){
            allLiItems(titleValue,titleList);
            inputtitle.value = "";
        }else{
           console.log("enter your title")
        }
        let titleListArr = Array.from(titleList.children)
        titleListArr.forEach(function(titleArr){
            titleArr.addEventListener("click",function(){
            })
        })    
    })




// let getTitle = inputtitle.value;

if(allTitles !== null){
    allTitles.forEach(function(allTitle){
        allLiItems(allTitle,titleList)
    })
    
    titleList.addEventListener("click",function(e){
        let alltitle = e.target;
        if(alltitle.classList.contains("title-list-group-items")){
            console.log("list bth")
        }
    })
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

