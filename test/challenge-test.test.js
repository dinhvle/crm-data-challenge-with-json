const expect = require("chai").expect
const lib = require("../src/challenge")

var data = {
 "people": [
   {
     "id": 2,
     "first_name": "Savannah",
     "last_name": "Clementina",
     "employments": [

     ]
   },
   {
     "id": 3,
     "first_name": "Elyse",
     "last_name": "Jensen",
     "employments": [
       {
         "company_id": 4,
         "title": "Chief Communications Consultant"
       }
     ]
   },
   {
     "id": 6,
     "first_name": "Elise",
     "last_name": "Camylle",
     "employments": [
       {
         "company_id": 1,
         "title": "Regional Applications Designer"
       },
       {
         "company_id": 9,
         "title": "Internal Mobility Executive"
       }
     ]
   },
 ],
 "companies": [
   {
     "id": 0,
     "name": "Nicolas and Sons"
   },
   {
     "id": 1,
     "name": "Mueller LLC"
   },
   {
     "id": 4,
     "name": "Schmidt-Rolfson"
   },
   {
     "id": 9,
     "name": "Steuber, Wisozk and Gorczany"
   }
 ]
}

describe("employeesOfCompanies", () => {

  it("returns an array of companies and their employees", () => {
    // TODO: write this test
    expect(1).to.equal(2)
  })

})

describe("allEmployments", () => {

  it("returns an array of employments with the person and company info", () => {
    // TODO: write this test
    expect(1).to.equal(2)
  })

})

describe("peopleWithoutEmployments", () => {

  it("returns an array of people without employments", () => {
    // TODO: write this test
    expect(1).to.equal(2)
  })

})
