function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');//Good Morning Victor


let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
  },
};

// console.log(item.discount(20))   // should return 40
// console.log(item.discount(50))  // should return 25
// console.log(item.discount(25))   // should return 37.5


function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();
  let bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every(key => a[key] === b[key]);
}

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
// console.log(objectsEqual({a: 'foo', b:'qux'}, {b:'qux', a: 'foo'})); //false so order does not matter in this case

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    addNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// // console.log("NOTESSSSSS ++++>", foo.notes);
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"


// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}

bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}

function createSchool() {

  return {
  students: [foo, bar, qux],
  getReportCard (student) {
    student.courses.forEach(course => {
      let grade = course.grade ? course.grade : `In process`;
      console.log(`${course.name}: ${grade}`)
    })
    // return student.courses.reduce((a,b) => a + b.grade,0) / student.courses.length;
  },

  courseReport(subject) {
    let grades = [];
    console.log(`${subject} Grades`);
    this.students.forEach(student => {
      for (let i = 0; i < student.courses.length; i += 1) {
        if(student.courses[i].name === subject && student.courses[i].grade) {
          console.log(`${student.name}: ${student.courses[i].grade}`)
          grades.push(student.courses[i].grade);
        }
      }
    });

    if (grades.length > 0) {
      let sum = grades.reduce((a,b) => a + b);
      console.log("---");
      console.log(`Course Average: ${ sum / grades.length}`);
    } else {
      console.log(undefined);
    }
  }
}
}

const school = createSchool();

school.getReportCard(foo);
//Math: 95
//Advanced Math: 90
//Physics: In progress

school.courseReport('Math');
//Math Grades=
//foo: 95
//bar: 91
//qux: 93
//---
//Course Average: 93

school.courseReport('Advanced Math');
//Advanced Math Grades=
//foo: 90
//qux: 90
//---
//Course Average: 90

school.courseReport('Physics');
//undefined
