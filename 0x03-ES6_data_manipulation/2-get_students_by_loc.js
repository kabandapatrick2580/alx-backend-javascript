export default getStudentsByLocation
function getStudentsByLocation(students, city) {
    // use filter to select students located in the specified city
    return students.filter(function(student){
        return student.location === city;
    });
}
