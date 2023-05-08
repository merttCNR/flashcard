document.querySelector(".newbtn").addEventListener('click', main);

// Button Const
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
// Word&Answer Const
const word10 = [" ","日","一","国","人","年","大 ","十","二","本","中"];

const answer10 =
[
" ",
"day, sun, Japan, counter for days",
"one",
"country",
"person",
"year,counter for years",
"large,big",
"ten",
"two",
"book, present, true, counter for long cylindrical things",
"in, inside, middle, mean, center"
];
const altanswer = 
[
    " ",
    "evidence, proof, certificate",
    "safeguard, protect",
    "unfold, expand",
    "attitude, condition",
    "single, alone, spontaneously",
    "hearing, judge, trial",
    "benefit, gain, profit, advantage",
    "fresh, vivid, clear",
    "give",
    "help, save"
];
const altanswer2 =
[" ",
"army, force, troops",
"plan, suggestion, draft",
"island",
"village; town",
"again, twice, second time",
"compare; race; ratio",
"border, region",
"mention; state; speak",
"agriculture; farmers",
"Europe"
];
const altanswer3 =[
    " ",
    "reward; praise",
    "skill; art; craft; ability",
    "brain; memory",
    "type; model",
    "history; chronicle",
    "record",
    "bridge",
    "beach",
    "ticket",
    "forest, woods"
];
// Variables
var rdm;
var worDiv;

function randomWord (){
    rdm = Math.floor(Math.random() * 10+1);
    document.querySelector(".wordh1").innerHTML= word10[rdm];
}
function randomButton(){
    
    let  brm = Math.floor(Math.random() *4 +1); // buttonların rastgele seçilmesi için random oluşturuldu.
    let alt = Math.floor(Math.random()*10+1); // alternatif şıklar için random oluşturuldu.
    switch (brm){
        case 1:
            btn1.textContent =answer10[rdm];
            btn2.textContent = altanswer[alt];
            btn3.textContent = altanswer2[alt];
            btn4.textContent = altanswer3[alt];
            break;
        case 2:
            btn2.textContent = answer10[rdm];
            btn1.textContent = altanswer[alt];
            btn3.textContent = altanswer2[alt];
            btn4.textContent = altanswer3[alt];
            break;
        case 3:
            btn3.textContent = answer10[rdm];
            btn1.textContent = altanswer[alt];
            btn2.textContent = altanswer2[alt];
            btn4.textContent = altanswer3[alt];
            break;
        case 4:
            btn4.textContent = answer10[rdm];
            btn1.textContent = altanswer[alt];
            btn2.textContent = altanswer2[alt];
            btn3.textContent = altanswer3[alt];
            break;
        default:
    }
}
// ButtonLis
var answerButtons = document.querySelectorAll('.btn');
answerButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var selectedAnswer = this.textContent;

    if (answer10.includes(selectedAnswer)) {
      this.style.backgroundColor = 'green';
     // alert('Doğru cevap!');
    } else{
      this.style.backgroundColor = 'red';
      //alert('Yanlış cevap!');
     };
  });
});
function defaultColor(){ // bu kod renkleri resetlemeye yarıyor.
        var btnid = document.getElementById("newbtnid");
    btnid.addEventListener("click", function(event) {
    if (event.target === btnid) {
       // alert("event calisti");
        var btnList = document.querySelectorAll(".btn");
        for (let i = 0; i < btnList.length; i++) {
        var btn = btnList[i];
        btn.style.backgroundColor = "#f0f0f0";
        }
    }
    });
}
function main(){
    randomWord();
    randomButton();
    defaultColor();
};
