//A function to convert Kilometer to meter.

function kilometerToMeter(km){
       //1 kilometer=1000 meter.
        var meter = km*1000;

        return meter;
    }

   

//A Function to calculate budget.

function budgetCalculator(watch, mobile, laptop){
    
    var watchPrice = watch*50; // 1 watch=$50.
    var mobilePrice = mobile*100; // 1 mobile=$100.
    var laptopPrice = laptop*500; // 1 laptop = $500.
    
    //Total price.

    var totalBudget= watchPrice+mobilePrice+laptopPrice;

    return totalBudget; 
}



//hotelCost calculator.

function hotelCost(day){
    var cost =0;
    //1-10 days cost.
    if(day<=10){
        cost=day*100;
    }
    // 11th to 20th days cost.
    else if (day<=20){
        var cost=10*100;
        var remaining=day-10;
        var scondCost=remaining*80;
        cost=cost+scondCost;
    }
    //20+ days cost.
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


//A function to get longest string.

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


