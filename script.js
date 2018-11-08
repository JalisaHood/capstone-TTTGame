
    


function startGame(){
    document.turn = "X";
    setMessage(document.turn + " starts");
    }
function setMessage(msg){
        document.getElementById("message").innerText= msg;
    }
function nextMove(square){

         if (square.innerText == ""){
        square.innerText= document.turn;
        switchTurn();
    } else {
        setMessage("select another space");
         }
    }
function switchTurn () {
    
     if (document.turn == "X"){
            document.turn = "O";
            setMessage("It's " + document.turn + "'s turn!")

    }else{
            document.turn ="X";
            setMessage("It's " + document.turn + "'s turn!")
        }
    
        if (checkforWinner()!=-1 && checkforWinner()!="") {
            if (checkforWinner()=="X") {
                alert('Player X wins!')
            }else if (checkforWinner() == "O") {
                alert('Player O wins!')
            }
            reset()
    }
    }
    
function checkforWinner(){
      let s1 = $("#s1").text()
      let s2 = $("#s2").text()
      let s3 = $("#s3").text()
      let s4 = $("#s4").text()
      let s5 = $("#s5").text()
      let s6 = $("#s6").text()
      let s7 = $("#s7").text()
      let s8= $("#s8").text()
      let s9 = $("#s9").text()
        
        if ((s1==s2)&&(s2==s3)) {
         return s3
             } else if ((s4==s5)&&(s5==s6)) {
                 return s6
             } else if ((s7==s8)&&(s8==s9)) {
                 return s9   
             }else if ((s1==s4)&&(s4==s7)) {
                return s7 
            }else if ((s2==s5)&&(s5==s8)) {
                return s8 
            }else if ((s3==s6)&&(s6==s9)) {
                 return s9
            }else if ((s1==s5)&&(s5==s9)) {
                 return s9
            }else if ((s3==s5)&&(s5==s7)) {
                 return s7
            } else{
                return 0
            }
        }
function reset() {
       s1 = $("#s1").html('')
       s2 = $("#s2").html('')
       s3 = $("#s3").html('')
       s4 = $("#s4").html('')
       s5 = $("#s5").html('')
       s6 = $("#s6").html('')
       s7 = $("#s7").html('')
       s8 = $("#s8").html('')
       s9 = $("#s9").html('')

}
function checkRow(a, b, c , move){
        var result= false;
        if(getBox(a)==move && getBox(b)== move && getBox(c)== move){
            result= true;
        }
        return result;
    }
function getBox(number) {
        return document.getElementById("s" + number).innerText;
    }

function clearBox(){
            document.getElementById("box tr td").innerText = "";
        } 
    
    