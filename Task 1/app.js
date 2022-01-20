class Student {
    constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }
    // this.firstName = this.fullName.split()[0]
    // this.lastName = this.fullName.split()[-1]
    showFullName () {
    return this.fullName
    }
    nameIncludes(data) {
    if (this.showFullName().includes(data))
    return true; 
    return false;
  }
  static studentBuilder(fullName, direction) {
    return new Student (fullName, direction);
  }
  get direction(){
    return this.direction
  }
  set direction(value){
    if (typeof value === 'undefined'){
      alert('set direction');
      return ;
    }
  this.direction = value;
  }
}
const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder('Ihor Kohut', 'qc');






