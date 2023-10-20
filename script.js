let input = document.getElementById("input");
let btn  =document.getElementById("btn");
let guessRem = document.getElementById("guessRem");

// RANDON NUMBER BW 1 AND 10, SO EXCLUDING 1 AND 10
let rn = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
let guess = 3;
guessRem.textContent = guess;

btn.addEventListener("click" , () => {
    let val = input.value;

    if(val == ''){
        alert("Input can't be empty")
    }
    else if(isNaN(val) || (Number(val)<=1 || Number(val)>=10)){
        alert("Input must be a number bw 1 and 10")
    }
    else{
        if(val == rn){
            alert("You are right !!!!!!!");
            guess = 3;
            guessRem.textContent = guess;
            input.value = '';
            location.reload();
        }
        else{
            if(val< rn){
                alert("Too low!")
            }
            else{
                alert("Too high!")
            }

            input.value = '';
            guess -= 1;
            guessRem.textContent = guess;

            if(guess==0){
                guess = 3;
                guessRem.textContent = guess;
                input.value = '';
                alert("You made 3 wrong guesses.You lost")
                location.reload();
            }
        }
    }
})
