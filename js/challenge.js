// build countup timer
let totalSeconds = 0;
function upTimer() {
    ++totalSeconds;
    document.getElementById("counter").textContent = totalSeconds;
}
let timer = setInterval(upTimer, 1000);

// establish node variables
// minus = document.getElementById("minus");
// plus = document.getElementById("plus");
// heart = document.getElementById("heart");
// pause = document.getElementById("pause");
// formField = document.getElementsByTagName("form");
counter = document.getElementById("counter")

const btnsArr = [...document.getElementsByTagName("button")];
// console.log(btnsArr);
let btnsIds = []
for (let i = 0; i < btnsArr.length; i++) {
    btnsIds.push(btnsArr[i].id)
}
[btnsIds] = [btnsArr]

// handle minus/plus
minus.addEventListener('click', function() {
   --totalSeconds;
   counter.textContent = totalSeconds;
})
plus.addEventListener('click', function() {
    ++totalSeconds;
    counter.textContent = totalSeconds;
})


// handle liker
let likesArray = [];

heart.addEventListener('click', function() {
    let result = likesArray.find(elem => elem.time === totalSeconds);
    if (!!result) {
        result.likes++
    } else {
        let obj = {time: totalSeconds, likes: 1}
        likesArray = [...likesArray, obj]
    }
    let likeList = [...document.querySelectorAll(".likes li")]
    likeList.forEach(element => element.remove())
    buildLikesList()
})

function buildLikesList () {
    likesArray.forEach(ele => {
        let li = document.createElement('li');
        li.textContent = `${ele.time} has been liked ${ele.likes} times`
        document.getElementsByClassName("likes")[0].appendChild(li)
    })
}

// handle pause
let paused = false;
let nonPauseBtns = []
for (let i = 0; i < btnsIds.length; i++) {
    if (btnsIds[i].id != "pause") {
        nonPauseBtns.push(btnsIds[i])
    }
}
function disableBtn(btn) {
    btn.setAttribute("disabled", true)
}
function enableBtn(btn) {
    btn.removeAttribute("disabled")
}
pause.addEventListener('click', function() {
    if (!paused) {
        paused = true;
        clearInterval(timer)
        nonPauseBtns.forEach(btn => disableBtn(btn))
        pause.textContent = "resume"
    } else if (paused) {
        paused = false
        timer = setInterval(upTimer, 1000)
        nonPauseBtns.forEach(btn => enableBtn(btn))
        pause.textContent = "pause"
    }
})

// comment handler
let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    buildComments(e.target["comment-input"].value)
    form.reset()
})
function buildComments(comment) {
    let p = document.createElement('p');
    p.textContent = comment;
    let commentList = document.getElementById("list");
    commentList.appendChild(p)
}




// heart.addEventListener('click', function() {
//     let likeListNode = document.getElementsByClassName("likes")[0];
//     let likeList = [...document.querySelectorAll(".likes li")];
//     let likeNums = document.createElement("li");
//     likeNums.value = totalSeconds;
//     let numCount = 1
//     likeNums.textContent = `${totalSeconds} has been liked`;
//     // const indexToUpdate = likeList.map(elem => parseInt(elem.value)).find(elem => elem === totalSeconds)
//     // if(indexToUpdate) {
//     //     //update element at index
//     // } else {
//     //     //append new element
//     // }
//     // console.log(indexToUpdate)
//     likeListNode.appendChild(likeNums)
// })


// likeList.map(elem => parseInt(elem.innerText))
