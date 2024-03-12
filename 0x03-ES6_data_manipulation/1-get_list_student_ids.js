export default getListStudentIds
function getListStudentIds(student) {
    // check if a student is an array
    if (!Array.isArray(student)) {
        return [];
    }
    // use map to fetch the Ids from each object
    return student.map(student => student.id)
}