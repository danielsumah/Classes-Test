class Students {
    _fullName: string;
    _email: string;
    _studentClass: string;
    constructor (fullName:string, email:string, studentClass:string) {
        this._fullName = fullName;
        this._email = email;
        this._studentClass = studentClass;
    }
}

class Staff {
    _fullName: string;
    _email: string;
    _department: string;
    constructor (fullName: string, email: string, department: string) {
        this._fullName = fullName;
        this._email = email;
        this._department = department;
    }
}

class Lecturers extends Staff {
    _highestQualification: any;
    _yearsOfExperience: any;
    constructor(fullName: string, email: string, department: string, highestQualification: any, yearsOfExperience: any) {
        // Inherent behavior
        super(fullName, email, department);

        // Custom behavior
        this._highestQualification = highestQualification;
        this._yearsOfExperience = yearsOfExperience
    }
}