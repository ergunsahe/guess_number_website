let  first= Math.floor((Math.random() * 100) + 1);
let times_try = 1;
document.getElementById("submit").addEventListener("click",
function () {
    
    let second_num = document.getElementById("number").value;
    let guess_num = parseInt(second_num);
    if (first === guess_num) {
        document.getElementById("lowerupper").innerHTML =`You are the Winner...`;
        alert(`You are the Winner:D. You guest after ${times_try-1}`);     
        
        // document.getElementById("tryingtimes").innerHTML =`You have tried ${times_try} times..`;
        // times_try += 1;
    } else if (first > guess_num) {
      
        document.getElementById("lowerupper").innerHTML =`I am thinking about higher number`;
        document.getElementById("tryingtimes").innerHTML =`You have tried ${times_try} times..`;
        times_try += 1;
    } else {
     
        document.getElementById("lowerupper").innerHTML =`I am thinking about lower number`;
        document.getElementById("tryingtimes").innerHTML =`You have tried ${times_try} times..`;
        times_try += 1;
    }
}
)