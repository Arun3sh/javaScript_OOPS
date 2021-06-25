class Person{

  getDetails(){
    this.name = prompt("Enter your name");
    this.age = prompt("Enter your age");
    this.city = prompt("Enter your City");
    this.job = prompt("Enter your Job");
    this.company = prompt("Enter your company");
  }


}

var entry = new Person();
entry.getDetails();
console.log(entry);