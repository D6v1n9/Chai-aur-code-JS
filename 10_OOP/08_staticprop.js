class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){      // The static keyword defines a static method or field for a class, or a static initialization block
        return `123`        // Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();  
console.log(iphone.createId());  // Error
