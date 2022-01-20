class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    showFullName() {
      return this.name + ' ' + this.surname
    }
  }
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year
    }
    showFullName(date) {
      return super.showFullName() + ' ' + date
    }
    showCourse() {
      let date = new Date().getFullYear()
      let result = date - this.year
      return result
    }
  }

 
