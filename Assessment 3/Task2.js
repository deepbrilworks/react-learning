// User Class
class User {
    constructor(name, email, age) {
        this.name = this.validateName(name);
        this.email = this.isValidEmail(email) ? email : 'Invalid email';
        this.age = this.validateAge(age);
    }

    validateName(name) {
        if (name.length >= 3) {
            return name;
        } else {
            console.error('Name must be at least 3 characters long.');
            throw new Error('Name must be at least 3 characters long.');
        }
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validateAge(age) {
        if (typeof age === 'number' && age > 0) {
            return age;
        } else {
            console.error('Age must be a number greater than 0.');
            throw new Error('Age must be a number greater than 0.');
        }
    }

    getDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
    }

    changeEmail(newEmail) {
        if (this.isValidEmail(newEmail)) {
            this.email = newEmail;
        } else {
            console.error('Invalid email format.');
            throw new Error('Invalid email format.');
        }
    }
}

// Admin Class that extends User
class Admin extends User {
    constructor(name, email, age, role = 'admin', permissions = ['edit', 'delete', 'view']) {
        super(name, email, age);
        this.role = role;
        this.permissions = permissions;
    }

    // Override getDetails() to include role and permissions
    getDetails() {
        return `${super.getDetails()}, Role: ${this.role}, Permissions: ${this.permissions.join(', ')}`;
    }

    changeEmail(newEmail) {
        if (this.isValidEmail(newEmail)) {
            console.log(`Admin [${this.name}] changed their email to [${newEmail}]`);
            super.changeEmail(newEmail);
        } else {
            console.error('Invalid email format.');
            throw new Error('Invalid email format.');
        }
    }

    addPermission(permission) {
        if (!this.permissions.includes(permission)) {
            this.permissions.push(permission);
        } else {
            console.log(`${permission} is already in the permissions list.`);
        }
    }

    removePermission(permission) {
        const index = this.permissions.indexOf(permission);
        if (index !== -1) {
            this.permissions.splice(index, 1);
        } else {
            console.log(`${permission} is not found in the permissions list.`);
        }
    }
}

try {

    const user = new User('John Doe', 'john@example.com', 25);
    console.log(user.getDetails()); // Name: John Doe, Email: john@example.com, Age: 25

    console.log(`Is Email [${user.email}] Valid : ${user.isValidEmail(user.email)}`);

    user.changeEmail('john.doe@example.com');
    console.log(user.getDetails()); // Name: John Doe, Email: john.doe@example.com, Age: 25

    const admin = new Admin('Jane Admin', 'jane.admin@example.com', 30);
    console.log(admin.getDetails()); // Name: Jane Admin, Email: jane.admin@example.com, Age: 30, Role: admin, Permissions: view, edit, delete

    admin.addPermission('manage');
    console.log(admin.getDetails()); // Name: Jane Admin, Email: jane.admin@example.com, Age: 30, Role: admin, Permissions: view, edit, delete, manage

    admin.removePermission('edit');
    console.log(admin.getDetails()); // Name: Jane Admin, Email: jane.admin@example.com, Age: 30, Role: admin, Permissions: view, delete, manage
  
    admin.changeEmail('jane.admin@newdomain.com');

} catch (error) {
    console.log(error.message);
}
