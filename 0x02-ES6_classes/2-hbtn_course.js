/**
 * Represents a course at Holberton School.
 */
export default class HolbertonCourse {
    /**
     * Constructs a new HolbertonCourse instance.
     * @param {string} name - The name of the course.
     * @param {number} length - The length of the course.
     * @param {Array<string>} students - An array of student names enrolled in the course.
     */
    constructor(name, length, students) {
      if (typeof name !== 'string') {
        throw TypeError('name must be a String');
      }
      if (typeof length !== 'number') {
        throw TypeError('length must be a Number');
      }
      if (!Array.isArray(students)) {
        throw TypeError('students must be an Array');
      }
      students.forEach((student) => {
        if (typeof student !== 'string') throw TypeError('student must be a String');
      });
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    /**
     * Gets the name of the course.
     * @returns {string} The name of the course.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Sets the name of the course.
     * @param {string} value - The new name for the course.
     */
    set name(value) {
      if (typeof value !== 'string') throw TypeError('name must be a String');
      this._name = value;
    }
  
    /**
     * Gets the length of the course.
     * @returns {number} The length of the course.
     */
    get length() {
      return this._length;
    }
  
    /**
     * Sets the length of the course.
     * @param {number} value - The new length for the course.
     */
    set length(value) {
      if (typeof value !== 'number') throw TypeError('length must be a Number');
      this._length = value;
    }
  
    /**
     * Gets the array of student names enrolled in the course.
     * @returns {Array<string>} An array of student names.
     */
    get students() {
      return this._students;
    }
  
    /**
     * Sets the array of student names enrolled in the course.
     * @param {Array<string>} value - An array of student names.
     */
    set students(value) {
      if (!Array.isArray(value)) throw TypeError('students must be an Array');
      value.forEach((student) => {
        if (typeof student !== 'string') throw TypeError('student must be a String');
      });
      this._students = value;
    }
  }
  