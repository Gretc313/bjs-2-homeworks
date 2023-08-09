function Student(name, gender, age) {

	this.name = name;
	this.gender = gender;
	this.age = age;

}
let student = {
	marks: [],
}
Student.prototype = student;

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (marks in Student) {
		for (let i = 0; i < marksToAdd.length; i++) {
			this.marks.push(marksToAdd[i]);
		}
	} else {
		return 0;
	}

}

Student.prototype.getAverage = function() {
	if (this.marks.lenght === 0) {
		return 0;
	} else {
		let sum = this.marks[0];
		let average;
		for (let i = 0; i < this.marks.length; i++) {
			sum += this.marks[i];
		}
		average = sum / this.marks.length;
		return average;
	}
}

Student.prototype.exclude = function(reason) {
	delete Student.subject;
	delete Student.marks;
	Student.excluded = reason;
}
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);