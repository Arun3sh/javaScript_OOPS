class price{
 
  priceCalculation(a){
    var finalFee = (a* 12) + 45 + (0.5*a)
    console.log(finalFee);
  }
}

var res = new price();
res.priceCalculation(prompt("Enter KM Travelled"));