// const item = document.querySelectorAll(".item");

// for(let i = 0;i < item.length;i++){
//     if(i % 2 == 0){
//         item[i].style.color = "red"
//     }
//     else{
//         item[i].style.color = "blue"
//     }
// }

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const royhat = document.querySelectorAll(".item");

const a = () => {
    for(let i of royhat){
        i.style.backgroundColor = ""
    }
}
btn.addEventListener("click",() => {
    a();
    let c = 0;
    for(let i of royhat){
        if(input.value.toLocaleLowerCase() == i.textContent.toLocaleLowerCase()){
            i.style.backgroundColor = "red";
            c++;
        }
        else{
            i.style.backgroundColor = "green"
        }
    }
    if(c == 0){
        console.log('bu yerda unday ism mavjud emas');
    }
})