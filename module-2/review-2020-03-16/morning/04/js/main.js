'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const result = document.querySelector('.js-result');

function exercise4() {
  let htmlCode = '<ul>';
  for (const promo of promos) {
    htmlCode += `<li>`;
    htmlCode += `<p>Nombre: ${promo.name}</p>`;
    htmlCode += `<ul>`;
    for (const student of promo.students) {
      htmlCode += `<li>${student.name}, ${student.age}</li>`;
    }
    htmlCode += `</ul>`;
    htmlCode += `</li>`;
  }
  htmlCode += '</ul>';
  result.innerHTML = htmlCode;
}

exercise4();

function exercise1() {
  let htmlCode = '<ul>';
  for (const promo of promos) {
    console.log(promo.name);
    htmlCode += `<li>${promo.name}</li>`;
    // htmlCode += '<li>' + promo.name + '</li>';
  }
  htmlCode += '</ul>';
  console.log(htmlCode);
  result.innerHTML = htmlCode;
}

// exercise1();
