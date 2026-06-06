'use strict';

// debugger;

const employees = document.querySelectorAll('li');
const listOfEmployees = document.querySelector('ul');

const sortedEmployees = sortList([...employees]);

for (let i = 0; i < sortedEmployees.length; i++) {
  listOfEmployees.append(sortedEmployees[i]);
}
getEmployees(sortedEmployees);

function getEmployees(list) {
  const rightList = [];

  for (let i = 0; i < list.length; i++) {
    rightList.push({
      name: list[i].textContent.trim(),
      position: list[i].dataset.position,
      salary: list[i].dataset.salary,
      age: list[i].dataset.age,
    });
  }

  return rightList;
}

function sortList(list) {
  return list.sort((person1, person2) => {
    return (
      Number(person2.dataset.salary.replaceAll(/\D/g, '')) -
      Number(person1.dataset.salary.replaceAll(/\D/g, ''))
    );
  });
}
