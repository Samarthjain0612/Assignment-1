let words=
[
    {
        jumbled:"epkasre",
        correct:"speaker"
    },
    {
        jumbled:"papolt",
        correct:"laptop"
    },
    {
        jumbled:"boilem",
        correct:"mobile"
    },
    {
        jumbled:"mputcoer",
        correct:"computer"
    },
    {
        jumbled:"arphenoe",
        correct:"earphone"
    },
    
]

let currentWord=0;
let score=0;

function displayWord()
{
    document.querySelector("#j-word").innerText = 
    words[currentWord].jumbled;

    document.querySelector("#score").innerText=score;
}


displayWord();


function checkAnswer()
{
    
            let answer=document.querySelector("#inp").value;

            if(answer.toLowerCase()===words[currentWord].correct.toLowerCase()){

                score++;

            }

            if(currentWord==words.length-1){

                let msg="";

                if(score===5){
                    msg="Amazing game, Your score is  "+score;
                }
                else if(score===4){
                    msg="Good Game, Your score is  "+score
                }
                else if(score<4){
                    msg="Good Try, Your score is  "+score
                }

                alert(msg);

                location.reload();
            }
            else{
                currentWord++;
                displayWord();
                document.querySelector("#inp").value="";
            }

            

    
}