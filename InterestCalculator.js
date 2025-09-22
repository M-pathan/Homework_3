
//Total = Principle(1+Rate*Time)
function  Interest()
{
    var Amount = document.getElementById('principle').value;
    var rateInput = document.getElementById('rate').value;
    var rate = rateInput /100 ;
    var time = document.getElementById('time').value;
   //Calculate total interest 
    var interest = Amount * rate * time;
    //Calculate Total amount of intrest
    var Total = Amount * (1 + rate *time);
    
    document.getElementById('res').innerHTML ="With a begining principle of " + Amount  + "and with a growth rate of " + rateInput + "% "
                                           + " for " + time + " Years ,Your Total Intrest will be $" + 
                                            interest.toFixed(2) + "with a grand total of $" + Total.toFixed(2) ;
}