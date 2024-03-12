function updateStudentGradeByCity(students, city, newGrades) {
    // Filter students by the specified city
    const filteredStudents = students.filter(student => student.location === city);

    // Map over the filtered students to update their grades
    const updatedStudents = filteredStudents.map(student => {
        // Find the grade object corresponding to the student's id in newGrades
        const gradeObject = newGrades.find(grade => grade.studentId === student.id);

        // If a grade object is found, assign the grade to the student, otherwise assign 'N/A'
        const grade = gradeObject ? gradeObject.grade : 'N/A';

        // Return the student object with the updated grade
        return { ...student, grade };
    });

    return updatedStudents;
}
export default updateStudentGradeByCity