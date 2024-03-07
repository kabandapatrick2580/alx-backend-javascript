/**
 * Class representing a classroom with a specified maximum capacity for students.
 */
export default class ClassRoom {
    /**
     * Constructs a new ClassRoom instance.
     * @param {number} maxStudentsSize - The maximum number of students allowed in the classroom.
     */
    constructor(maxStudentsSize) {
      /**
       * The maximum number of students permitted in the classroom.
       * @type {number}
       * @private
       */
      this._maxStudentsSize = maxStudentsSize;
    }
  }
  