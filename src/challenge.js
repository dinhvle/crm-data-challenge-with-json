var data = require('../data/crm.json');

// var myFunctions = {


// Challenge #1: Write some code that will return an array of companies, and the people who work for them.
var employeesOfCompanies = [];
var companies = data.companies;
var people = data.people;
companies.forEach(function (company) {
  var employeesList = [];

  people.forEach(function (person) {
    if (person.employments.length) {
      person.employments.forEach(function (job) {
        if (job.company_id === company.id) {
          employeesList.push({
            id:person.id,
            first_name:person.first_name,
            last_name:person.last_name,
            title:job.title
          });
        }
      });
    }
  });
  employeesOfCompanies.push({name:company.name,employees:employeesList});
});

// console.log(companies);
// console.log(people);
console.log(employeesOfCompanies);
console.log(employeesOfCompanies[2]);


// }

// module.exports = myFunctions;
