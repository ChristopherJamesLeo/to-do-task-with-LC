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





function allLiItems(inputTitleText,ulTag,cla){
    let titlesLiTag = document.createElement("li");
    titlesLiTag.classList.add(cla);
    titlesLiTag.innerText = inputTitleText;
    ulTag.appendChild(titlesLiTag)

}

function storeTitleValues(inputTitle ,inputTitleText){
    let alltitles;
    if(localStorage.getItem(inputTitle) === null){
        alltitles = [];
    }else {
        alltitles = JSON.parse(localStorage.getItem(inputTitle));
    }
    alltitles.push(inputTitleText);
    localStorage.setItem(inputTitle,JSON.stringify(alltitles));
    let getStorage = JSON.parse(localStorage.getItem(inputTitle))
    return getStorage;
}
function storeTitle(titleInput){
    if(titleInput !== ""){
        // console.log("not null")
        let titles;
        if(localStorage.getItem("titles") === null){
            titles = [];
        }else {
            titles = JSON.parse(localStorage.getItem("titles"));
        }
        titles.push(titleInput);
        localStorage.setItem("titles",JSON.stringify(titles));
        let titlesList = JSON.parse(localStorage.getItem("titles"));
        // console.log(titleList)
        return titlesList;
    }else{
        console.log("title is null")
    }
    
}





// var getTitles ;
    titleForm.addEventListener("submit",function(e){
        e.preventDefault();
        let titleValue = inputtitle.value
        
        if(titleValue !== ""){
            allLiItems(titleValue,titleList,"title-list-group-items");
            storeTitle(titleValue);
            storeTitleValues(titleValue,titleValue)
            inputtitle.value = "";
        }else{
           alert("Enter Your Task")
           inputtitle.focus()
        }
        let titleListArr = Array.from(titleList.children)
        titleListArr.forEach(function(titleArr){
            titleArr.addEventListener("click",function(){
                console.log(this.innerText)
            })
        })    
    })

let getTitle = inputtitle.value;



let getTitleDatas = JSON.parse(localStorage.getItem("titles"));
// console.log(getTitleDatas)
if(localStorage.getItem("titles") !== null){
    getTitleDatas.forEach(function(getTitleData){
        allLiItems(getTitleData,titleList,"title-list-group-items");
        let titleListArr = Array.from(titleList.children)
        titleListArr.forEach(function(titleArr){
            titleArr.addEventListener("click",function(){
                console.log(this.innerText)
            })
        }) 
    })
}




titleList.addEventListener("click",function(e){
    let liTag = e.target;
    if(liTag.classList.contains("title-list-group-items")){
        let liTagLists = JSON.parse(localStorage.getItem(liTag.textContent))
        liTagLists.forEach(function(liTagList){
            // allLiItems(liTagList,getlistContainer,"list-group-items");
            formTitle.textContent = liTagList.toUpperCase();
            if(formTitle.textContent.includes("LIST")){
                listTitle.innerText = formTitle.textContent;
            }else{
                listTitle.innerText = formTitle.textContent + " List";
            }
        })
    }
})
getSubmitBtn.addEventListener("click",function(e){
    e.preventDefault();
    let getKey = formTitle.innerText;
    let getInputValue = getInput.value;
    allLiItems(getInputValue,getlistContainer,"list-group-items");
    storeTitleValues(getKey,getInputValue);
    
})







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

