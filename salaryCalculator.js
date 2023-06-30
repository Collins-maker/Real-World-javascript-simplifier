class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    //function to calculate the the annual salary of employees
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      // Adding a 30% bonus for managers
      return super.calculateAnnualSalary() + (super.calculateAnnualSalary() * 0.3);
    }
  }
  
  // Creating instances of the 'Manager' class
  const manager1 = new Manager('Mtumishi Collins', 120000, 'HR');
  const manager2 = new Manager('Jonathan Mwaniki', 100000, 'trainer');
  
  // Calculating their annual salaries
  const manager1AnnualSalary = manager1.calculateAnnualSalary();
  const manager2AnnualSalary = manager2.calculateAnnualSalary();
  
  console.log(manager1.name + "'s annual salary: $" + manager1AnnualSalary);
  console.log(manager2.name + "'s annual salary: $" + manager2AnnualSalary);
  