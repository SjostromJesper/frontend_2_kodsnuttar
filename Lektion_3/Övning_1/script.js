class Teacher {
    constructor(name, mail) {
        this.name = name;
        this.mail = mail;
    }
}

class Course {
    constructor(courseName, teacher) {
        this.courseName = courseName;
        this.teacher = teacher;
    }
}

class Student {
    constructor(name, age, courses) {
        this.name = name;
        this.age = age;
        this.courses = courses;
    }

    printInfo() {
        this.courses.forEach(course => {
            console.log(course.courseName);
            console.log(course.teacher.name);
            console.log(course.teacher.mail);
        });
    }
}

const teacher1 = new Teacher("Hugo", "hugosmail@test.se");
const teacher2 = new Teacher("Jesper", "jeppesmail@test.se");
const course1 = new Course("frontend1", teacher1);
const course2 = new Course("frontend2", teacher2);
const student = new Student("Jöns", 13, [course1, course2]);

student.printInfo();
