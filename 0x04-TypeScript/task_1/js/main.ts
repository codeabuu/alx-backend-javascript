// src/main.ts

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "City A",
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: "City B",
  contract: true, // Example of adding an additional attribute
};

const teachersList: Teacher[] = [teacher1, teacher2];

function renderTable(): void {
  const table = document.createElement("table");

  teachersList.forEach((teacher) => {
    const row = table.insertRow();
    for (const key in teacher) {
      const cell = row.insertCell();
      cell.textContent = teacher[key].toString();
    }
  });

  document.body.appendChild(table);
}

renderTable();
