interface Student {
  firsName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: 'Abdul',
  lastName: 'xyz',
  age: 24,
  location: 'Nairobi',
  };

 const student2: Student = {
   firstName: 'Lawrence',
   lastName: 'Kings',
   age: 24,
   location: 'Abuja',
   };
/*create an array named studentsList containing the two variables*/

const studentList: Student[] = [student1, student2];

/*Using Vanilla Javascript, render a table and for each elements*/

function renderTable(): void {
  const table = document.createElement('table');

  studentList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(2);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    });

    document.body.apendChild(table);
    }
renderTable();

