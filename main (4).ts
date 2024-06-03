// Define an interface for student data
interface Student {
    name: string;
    senior: boolean;
    completedAssignments: boolean;
}

// Define the student list array
    const students : Student[] =[
    { name: "Fizra", senior: true, completedAssignments: true },
    { name: "Qirat",senior : false, completedAssignments: false },
    { name: "Nimra", senior: true, completedAssignments: true},
    { name: "Armish", senior: true, completedAssignments: false},
    { name: "Hafiza Armish", senior: false, completedAssignments: true }
];

// Function to find senior students with completed assignments
const findSeniorStudentsWithAssignments = (studentList: Student[]): Student[] => {
    return studentList.filter(student => student.senior && student.completedAssignments);
};
const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students with completed assignments:", seniorStudentsWithAssignments);
const updateClassList = (studentList: Student[]): Student[] => {
    return studentList.filter(student => student.completedAssignments || !student.senior);
};
const updatedClassList = updateClassList(students);
console.log("Updated class list:", updatedClassList );
