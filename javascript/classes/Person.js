class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}

let person = new Person("Jane Doe");
                        console.log(person.name);

                        // attempt to change the name, but cannot
                        person.name = 'Jane Smith';
                        console.log(person.name); // Jane Doe