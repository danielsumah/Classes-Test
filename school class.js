class Students {
    constructor (fullName, email, studentClass) {
        this._fullName = fullName;
        this._email = email;
        this._studentClass = studentClass;
    }
}

class Staff {
    constructor (fullName, email, department) {
        this._fullName = fullName;
        this._email = email;
        this._department = department;
    }
}

class Lecturers extends Staff {
    constructor(fullName, email, department, highestQualification, yearsOfExperience) {
        // Inherent behavior
        super(fullName, email, department);

        // Custom behavior
        this._highestQualification = highestQualification;
        this._yearsOfExperience = yearsOfExperience
    }
}