const item = document.querySelectorAll(".item");

for(let i = 0;i < item.length;i++){
    if(i % 2 == 0){
        item[i].style.color = "red"
    }
    else{
        item[i].style.color = "blue"
    }
}