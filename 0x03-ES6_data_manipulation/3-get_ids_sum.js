function getStudentIdsSum(students) {
    // Check if the argument is an array
    if (!Array.isArray(students)) {
        return 0; // If not an array, return 0
    }

    // Use reduce to calculate the sum of student ids
    return students.reduce(function(sum, student) {
        return sum + student.id;
    }, 0); // Initialize sum with 0
}
export default getStudentIdsSum