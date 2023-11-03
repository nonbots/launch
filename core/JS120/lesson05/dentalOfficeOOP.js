//inheritance 
 // polymorphism through class inheritance
 // duck typing
//mixin 
//collaborator objects
// super keyword
// subclasses, super classes
//
//things we could both fix:
//cover duck typing by having every specialist do their own exam
// hygienist cleans teeth and rootCanals
const clean = {
  clean(patient) {
    console.log(`${this.constructor.name} ${this.name} is cleaning ${patient.constructor.name} ${patient.name}.`);
  }
}
const rootCanal = {
  rootCanal (gen, patient) {
    console.log(`${gen.constructor.name} ${gen.name} is providing a root canal for ${patient.constructor.name} ${patient.name}.`);
  }
}
const extraction = {
  extraction (gen, patient) {
    console.log(`${gen.constructor.name} ${gen.name} is providing a extraction for ${patient.constructor.name} ${patient.name}.`);
  }
}

class Staff {
  constructor(name, attendedDentalSchool = undefined) {
    this.name = name;
    this.attendedDentalSchool = attendedDentalSchool;
  }
}

class Receptionist extends Staff {
  constructor(name, attendedDentalSchool, general) {
    super(name, attendedDentalSchool);
    this.general = general;
  }
  makeApt(patient) {
    if(patient.apts.length === 0) {
      console.log(`It looks like ${patient.name} is a new patient. Let's make an appointment for an exam first.`)
      patient.apts.push({procedures: this.general.exam, attended: false})
      console.log(`Alright ${patient.name}'s exam with ${this.general.constructor.name} ${this.general.name} has be scheduled.`);
    } else if (patient.apts.procedures[0].name === "exam" && patient.apts.attend === false ) {
      console.log(`It looks like ${patient.name} already has an exam scheduled.`);
    } else  {
      let procedures = Object.values(patient.apts[0].notes);
      procedures.forEach(proc => patient.apts.push({procedures: proc, attended: false}));
    }
  }
}

class Assistant extends Staff {
  constructor(name, attendedDentalSchool) {
    super(name, attendedDentalSchool)
  }
  assist(dentist) {
    console.log(`${this.constructor.name} ${this.name} is assisting ${dentist.constructor.name} ${dentist.name}.`);
  }
}
class Hygienist extends Staff {
  constructor(name, attendedDentalSchool) {
    super(name, attendedDentalSchool)
  }
}
Object.assign(Hygienist.prototype, clean, rootCanal)

class Dentist extends Staff {
  constructor(name, attendedDentalSchool) {
    super(name, attendedDentalSchool)
  }
  prescribe(patient) {
    console.log(`${this.constructor.name} ${this.name} is prescribing medication to  ${patient.constructor.name} ${patient.name}.`);
  }
  // exam(gen, patient) {
  //   console.log(`${gen.constructor.name} ${gen.name} is examining ${patient.constructor.name} ${patient.name}.`);
  //   patient.apts[0].attended = true;
  //   //notes property store the maping of problems to procedure
  //   console.log(`Exam is completed.`);
  // }
}
class Orthodontist extends Dentist {
  constructor(name, attendedDentalSchool) {
    super(name, attendedDentalSchool);
    this.proSolMap = {
    // "crooked teeth": [this.straighthen.bind(this)],
    };
  }
  exam(ortho, patient) {
    console.log(`${ortho.constructor.name} ${ortho.name} is examining ${patient.constructor.name} ${patient.name}.`);
    patient.apts[2].attended = true;
    //notes property store the maping of problems to procedure
    let problem = patient.problems[1];
    // console.log(patient.problems);
    // console.log(patient.problems.length);
    // console.log(problem, i, "PROBLEM");
    patient.apts[2].notes = {};
    patient.apts[2].notes[problem] = ortho.proSolMap[problem];
    console.log(`Exam is completed.`);
    console.log(`Please request for appointments with the specialists.`);
    console.log(patient.apts[2].notes,"NOTES");
  }
  straigthen(patient) {
    console.log(`${this.constructor.name} ${this.name} is straigthening teeth for ${patient.constructor.name} ${patient.name}.`);
  }

}
class General extends Dentist {
  constructor(name, attendedDentalSchool, specialists) {
    super(name, attendedDentalSchool);
    this.specialists = specialists;
    this.proSolMap = {
      "crooked teeth": [this.specialists.orthodontist.exam.bind(this.specialists.orthodontist)],
      "small cavity": [this.filling.bind(this)],
      "medium cavity": [this.crown.bind(this)], 
      "large cavity": [this.specialists.endodontist.exam.bind(this.specialists.endodontist)]
    };
    // this.proSolMap = {
    //   "crooked teeth": [this.specialists.orthodontist.straigthen.bind(this.specialists.orthodontist)],
    //   "small cavity": [this.filling.bind(this)],
    //   "medium cavity": [this.crown.bind(this)], 
    //   "large cavity": [this.specialists.endodontist.rootCanal.bind(this.specialists.endodontist), this.crown.bind(this)]
    // };
  }
  crown(gen, patient) {
    console.log(`${gen.constructor.name} ${gen.name} is adding a crown on ${patient.constructor.name} ${patient.name}.`);
  }
  exam(gen, patient) {
    console.log(`${gen.constructor.name} ${gen.name} is examining ${patient.constructor.name} ${patient.name}.`);
    patient.apts[0].attended = true;
    //notes property store the maping of problems to procedure
    for (let i = 0; i < patient.problems.length; i += 1) {
      let problem = patient.problems[i];
      console.log(patient.problems);
      console.log(patient.problems.length);
      console.log(problem, i, "PROBLEM");
      if (!("notes" in patient.apts[0])) {
        patient.apts[0].notes = {};
        patient.apts[0].notes[problem] = gen.proSolMap[problem];
      } else {
        patient.apts[0].notes[problem] = gen.proSolMap[problem];
      }
    }
    console.log(`Exam is completed.`);
    console.log(`Please request for appointments with the specialists.`);
    console.log(patient.apts[0].notes,"NOTES");
  }

  filling(gen, patient) {
    console.log(`${gen.constructor.name} ${gen.name} is providing a filling for ${patient.constructor.name} ${patient.name}.`);
  }
}
Object.assign(General.prototype, clean, rootCanal, extraction);

class Surgeon extends Dentist {
  constructor(name, attendedDentalSchool) {
    super(name, attendedDentalSchool)
  }
  implant(patient) {
    console.log(`${this.constructor.name} ${this.name} is providing an implant for ${patient.constructor.name} ${patient.name}.`);
  }
}
Object.assign(Surgeon.prototype, extraction);

class Endodontist extends Dentist {
  constructor(name, attendedDentalSchool) {
    super(name, attendedDentalSchool)
    console.log(this.general, "GENERAL HERE");
    this.proSolMap = {
      // "large cavity": [this.rootCanal.bind(this), this.general.crown.bind(this.general)],
    }
  }
  exam(endo, patient) {
    console.log(`${endo.constructor.name} ${endo.name} is examining ${patient.constructor.name} ${patient.name}.`);
    patient.apts[1].attended = true;
    //notes property store the maping of problems to procedure
    let problem = patient.problems[0];
    // console.log(patient.problems);
    // console.log(patient.problems.length);
    // console.log(problem, i, "PROBLEM");
    patient.apts[1].notes = {};
    patient.apts[1].notes[problem] = endo.proSolMap[problem];
    console.log(`Exam is completed.`);
    console.log(`Please request for appointments with the specialists.`);
    console.log(patient.apts[1].notes,"NOTES");
  }
}
Object.assign(Endodontist.prototype, rootCanal);

class Patient {
  constructor(name,dentists, receptionist, general) {
    this.name = name;
    this.problems = ["large cavity", "crooked teeth"];
    this.apts = [];
    this.dentists = dentists //{genBob: {...}, }
    this.receptionist = receptionist;
    this.general = general;
  }
  requestApt() {
    console.log(`${this.name} would like to see a dentist for ${this.printProblems()}.`);
    this.receptionist.makeApt(this);
  }
  printProblems() {
    let newProblems = this.problems.slice();
    let last = newProblems.pop();
    return newProblems.join(",") + " and " + last;
  }
  getExam() {
    if(this.apts.length === 0) {
      console.log("Please request an appointment for an exam first.");
    } else if (this.apts[0].attended === false) {
      this.apts[0].procedures(this.general, this);
      this.apts[0].attended = true;
    } else {
      console.log(`${this.name} already attended the exam.`);
    }
  }
}

class Office {
  constructor() {
    this.specialists = {
    hygientist:  new Hygienist("Harry", false), 
    // this.hygStacy = new Hygienist("Stacy", false);
    assistant: new Assistant("Linda", false),
    // this.astBen = new Assistant("Ben", false);
    // this.astTim = new Assistant("Tim", false);

    // this.genNate = new General("Nate", true);
    // this.genBill = new General("Bill", true);
    endodontist: new Endodontist("Rebecca", true,),
    orthodontist: new Orthodontist("Candy", true),
    surgeon: new Surgeon("Sean", true),
    };
    this.general = new General("Bob", true, this.specialists);
    this.receptionist =  new Receptionist("Mary", false, this.general);
    // this.recLary = new Receptionist("Lary", false);
    this.patient = new Patient("Nhan", this.specialists, this.receptionist, this.general);
    this.specialists.endodontist.general = this.general;
    console.log( this.specialists.endodontist.general,"HEREEEEEEEEEEEEEEEEEEEEE");
  }
}

let office = new Office();
console.log(office.endodontist);
// console.log(office);
// office.patient.requestApt();
// office.patient.getExam();
// office.patient.requestApt();
// console.log(office.general.proSolMap);
// console.log(office.patient.apts[0].notes);
// console.log(office.specialists.endodontist.rootCanal);
// console.log(office.specialists.orthodontist.straigthen);
// console.log(office.specialists.hygientist.clean);

//
// const obj = {
//   "this is": "working",
// }
// let that = "this is";
//  console.log(obj[that]);