class a {
	prop1: string
}

class Student extends a{
	fullName: string;
	num: number;
	constructor(public firstName: string, public middleInitial, public lastName) {
		super();
		this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
		this.num = 1;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greater(person: Person): string {
	return `Hello, ${person.firstName} ${person.lastName}`;
}

let user: Student = new Student('Jane', 'M.', 'User');

document.body.innerHTML = greater(user);