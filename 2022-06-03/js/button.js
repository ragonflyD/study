const button = document.getElementById("main-btn");
const body = document.querySelector("body");

// 0 < x < 250
function randomNum() {
    let num = (Math.floor(Math.random()*200)+1) + (Math.floor(Math.random()*50)+1);
    console.log(num);
    return num;
}

// 색상 설정
function randomColor(randomNum) {
    let re_arr = [];
    for(let i = 0; i < 3; i++){
        re_arr.push(randomNum());
    }
    console.log(re_arr)
    return re_arr;
}

// 색상 변경
function colorChange(randomColor) {
    let arr = randomColor;
    body.style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}


button.addEventListener("click", function(event){
    colorChange(randomColor(randomNum))}
);