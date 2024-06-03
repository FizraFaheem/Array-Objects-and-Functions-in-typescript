// Define the student list array
var students = [
    { name: "Fizra", senior: true, completedAssignments: true },
    { name: "Qirat", senior: false, completedAssignments: false },
    { name: "Nimra", senior: true, completedAssignments: true },
    { name: "Armish", senior: true, completedAssignments: false },
    { name: "Hafiza Armish", senior: false, completedAssignments: true }
];
// Function to find senior students with completed assignments
var findSeniorStudentsWithAssignments = function (studentList) {
    return studentList.filter(function (student) { return student.senior && student.completedAssignments; });
};
// Call the function to find senior students with completed assignments
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
// Output the result
console.log("Senior students with completed assignments:", seniorStudentsWithAssignments);
// Function to update class list by removing students who haven't completed assignments
var updateClassList = function (studentList) {
    return studentList.filter(function (student) { return student.completedAssignments || !student.senior; });
};
// Call the function to update class list
var updatedClassList = updateClassList(students);
// Output the updated class list
console.log("Updated class list:", updatedClassList);
