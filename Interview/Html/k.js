function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.fullName = function () {
      return this.name + " " + this.age +" "+ this.address;
    };
  }
  
  Person.prototype.ageAddress=function(){
      return this.age+" "+ this.address
  }
  
  const p = new Person("rashid", 26);
  const p2 = new Person("sajid", 19);
  Person.prototype.address = "USA";
  console.log(p.fullName());
  console.log(p.ageAddress())
  