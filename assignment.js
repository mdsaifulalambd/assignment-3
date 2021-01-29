//A function to convert Kilometer to meter.

function kilometerToMeter(km){
       
        var meter = km*1000;

        return meter;
    }

   

//A Function to calculate budget.

function budgetCalculator(watch, mobile, laptop){
    
    var watchPrice = watch*50;
    var mobilePrice = mobile*100;
    var laptopPrice = laptop*500;
    var totalBudget= watchPrice+mobilePrice+laptopPrice;
    return totalBudget; 
}



//hotelCost calculator.

function hotelCost(day){
    var cost =0;
    if(day<=10){
        cost=day*100;
    }
    else if (day<=20){
        var cost=10*100;
        var remaining=day-10;
        var scondCost=remaining*80;
        cost=cost+scondCost;
    }
    else{
        var cost=10*100;
        var secondCost = 10*80;
        var remaining=day-20;
        var thirdCost=remaining*50;
        cost=cost+secondCost+thirdCost;

    }
    return cost;
}
var result=hotelCost(21);
console.log(result);


//megaFriend

function megaFriend(str){

  var large = 0;
  var longest;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > large) {
      var large = str[i].length;
      longest = str[i];
    }
  }
    return longest;
}

