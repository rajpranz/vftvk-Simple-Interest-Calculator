//This function gets the value of rate, years, interest and calculates the amount payable
function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    // checks to see if the principal amount is greater than zero
    if(principal <=0){
        alert("Enter a positive number");
        //for user friendlyness move cursor to the principal text box
        document.getElementById("principal").focus();

    }else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    var total = parseFloat(principal)+parseFloat(interest);
    result.innerText="If you deposit "+principal+",at an interest rate of "+rate+"%. You will receive an amount of "+interest+",in the year "+year;
    }


}

function updateResult(){
    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        