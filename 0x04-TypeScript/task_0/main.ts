// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Define two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array named studentsList containing the two students
const studentsList: Student[] = [student1, student2];

// Render the table
const renderTable = (students: Student[]) => {
    const table = document.createElement("table");

    // Create table headers
    const headers = ["First Name", "Location"];
    const headerRow = table.insertRow();
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Add data rows
    students.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = student.firstName;
        const cell2 = row.insertCell();
        cell2.textContent = student.location;
    });

    // Append the table to the document body
    document.body.appendChild(table);
};

// Render the table for the students list
renderTable(studentsList);
