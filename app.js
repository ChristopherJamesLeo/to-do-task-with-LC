console.log("hello world")
let getform = document.querySelector("#form-group"),
    getInput = document.querySelector("#form-input"),
    getSubmitBtn = document.querySelector("#submit-btn"),
    getlistContainer = document.querySelector("#list-group"),
    getClearAllBtn = document.querySelector("#clear-all-btn"),
    getMainContainer = document.querySelector(".container")
    formTitle = document.querySelector(".form-title"),
    inputtitle = document.querySelector("#title"),
    titleForm = document.querySelector("#mytitle"),
    confirmBtn = document.querySelector("#confirm"),
    introPage = document.querySelector(".introContainer"),
    mainPage = document.querySelector(".container"),
    listTitle = document.querySelector("h3"),
    titleList = document.querySelector(".title-list-group"),
    getClearallTitleBtn = document.querySelector("#clear-all-title"),
    getShowAllTitle = document.querySelector("#showAllTitle");





function allLiItems(inputTitleText,ulTag,cla,delCla){
    
    let titlesLiTag = document.createElement("li");
    titlesLiTag.classList.add(cla);
    titlesLiTag.innerHTML = `<span>${inputTitleText}</span><a href="#" ><ion-icon name="trash-outline" class=${delCla} ></ion-icon></a>`;
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
        getClearallTitleBtn.style.display = "block";
        if(titleValue !== ""){
            allLiItems(titleValue,titleList,"title-list-group-items","deleList");
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

if(localStorage.getItem("titles") !== null){
    getClearallTitleBtn.style.display = "block";
    getTitleDatas.forEach(function(getTitleData){
        allLiItems(getTitleData,titleList,"title-list-group-items","deleList");
    })
}



titleList.addEventListener("click",function(e){
    let liTag = e.target;
    if(liTag.classList.contains("title-list-group-items")){
        getMainContainer.style.display = "block";
        introPage.style.display = "none";
        getlistContainer.style.display = "block";
        let liTagLists = JSON.parse(localStorage.getItem(liTag.textContent))
        liTagLists.forEach(function(liTagList){
            let getEachLists = JSON.parse(localStorage.getItem(liTagList));
            if(localStorage.getItem(liTagList) !== null){
                getClearAllBtn.style.display = "block";
                console.log(JSON.parse(localStorage.getItem(liTagList)))
                getEachLists.forEach(function(getEachList){     
                    allLiItems(getEachList,getlistContainer,"list-group-items","deleClearList");
                })
                formTitle.textContent = getEachLists[0];
                if(liTagList.includes("list")||liTagList.includes("List") ||formTitle.textContent.includes("list") ){
                    listTitle.innerText = formTitle.textContent;
                }else{
                    listTitle.innerText = formTitle.textContent+ " List";
                }
            }
        })
    }
})
getSubmitBtn.addEventListener("click",function(e){
    e.preventDefault();
    let getKey = formTitle.innerText;
    let getInputValue = getInput.value;
    if(getInputValue !== ""){
        allLiItems(getInputValue,getlistContainer,"list-group-items","deleClearList");
        storeTitleValues(getKey,getInputValue);
    }else{
        alert("enter your list")
        getInput.focus();
    }
    getClearAllBtn.style.display = "block";
    getInput.value = "";
    getInput.focus();
    
})


getlistContainer.addEventListener("click",function(e){
    let btnTar = e.target;
    if(btnTar.classList.contains("deleClearList")){
        let delLis = btnTar.parentElement.parentElement;
        delLis.remove();
    }
})

getClearAllBtn.addEventListener("click",function(e){
    alert(`Are You Sure Delete Your ${formTitle.innerText}`)
    let getformTitle = formTitle.innerText;
    let getData = JSON.parse(localStorage.getItem(getformTitle));
    // console.log(getData)
    getData=[getformTitle];
    localStorage.setItem(getformTitle,JSON.stringify(getData));
    let allList = Array.from(getlistContainer.children);
    console.log(allList)
    for(let i = 0 ; i < allList.length ; i++){
        let toDeleList = allList[i];
        toDeleList.remove();
    }
    getClearAllBtn.style.display = "none";

})

getClearallTitleBtn.addEventListener("click",function(){
    alert(`Are Your Sure Clear Your All Data`)
    getClearallTitleBtn.style.display = "none";
    let alltitle = Array.from(titleList.children);
    for (let i = 0; i < alltitle.length; i++) {
        let titles = alltitle[i];
        titles.remove();
        
    }
    localStorage.clear();
})

getShowAllTitle.addEventListener("click",function(){
    let clearMainLists = Array.from(this.previousElementSibling.previousElementSibling.children);
    for(let i = 0; i < clearMainLists.length ; i++){
        clearMainLists[i].remove();
    }
    

    
    window.location.reload();
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

