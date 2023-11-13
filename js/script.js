let inputData = document.querySelectorAll(".input-data");
let startCalcBtn = document.querySelector("#start-calc-btn");

startCalcBtn.addEventListener("click", () => {
    let userDistance = parseFloat(inputData[0].value);
    let userAge = parseInt(inputData[1].value);

    if(userDistance === "" || userAge === ""){
        alert("Assicurati di non aver lasciato campi vuoti!");
    }
    else{
        let actualPrice;
        let purePrice = userDistance * 0.1976;

        if( userAge < 18){
            actualPrice = purePrice - (purePrice * 17.65 / 100);
        }
        else if (userAge >= 65) {
            actualPrice = purePrice - (purePrice * 53.27 / 100);
        }
        else{
            actualPrice = purePrice;
        }
        
        inputData[0].value= "";
        inputData[1].value= "";
        console.log(`€${actualPrice.toFixed(2)}`);
    }
});