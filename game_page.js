player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+"-";
document.getElementById("player2_name").innerHTML=player2_name+"-";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);
    
    c1=word.charAt(1);

    lengthdivideby2=Math.floor(word.length/2);
    
    c2=word.charAt(lengthdivideby2);

    lengthminus1=word.length-1; 

    c3=word.charAt(lengthminus1);

    w1=word.replace(c1,"_");

    w2=w1.replace(c2,"_");

    w3=w2.replace(c3,"_");

    questionword="<h4 id='word_display'>Q."+w3+"</h4>";

    input_box="<br> answer-<input id='input_check_box'>";

    check_button="<br> <button class='btn btn-info' onclick='check()'>check </button>";

    row=questionword+input_box+check_button;
    
    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";
}

question_turn="player_1";
answer_turn="player_2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if (answer_turn=="player_1") {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        } else {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if (question_turn=="player_1") {
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="question turn-"+player2_name;
    } else {
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="question turn-"+player1_name;
    }

    if (answer_turn=="player_1") {
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;
    } else {
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="answer turn-"+player1_name;
    }

    document.getElementById("output").innerHTML="";

}