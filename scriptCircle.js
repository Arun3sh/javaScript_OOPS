class Circle{
  constructor(r,color){
    this.r = r;
    this.color = color;
  }
  getArea(){
    var area = 3.14*this.r;
    console.log("Area for circle with radius "+ this.r + " is "+ area.toFixed(2));
  }

  getCircumference(){
    var circumference = 2*3.14*this.r;
    console.log("Circumference for circle with radius "+ this.r + " is "+ circumference.toFixed(2) );
  }

}

var firstCircle = new Circle(10, "red");
firstCircle.getCircumference();
firstCircle.getArea();