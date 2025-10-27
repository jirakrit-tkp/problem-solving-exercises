const getPassedStudents = (students) => {
    const passedStudents = [];
    for (let student of students) {
        if (student.score >= 50) {
            passedStudents.push(student.name)
        }
    }
    return passedStudents
}

let result1 = getPassedStudents([
    { name: "A", score: 80 },
    { name: "B", score: 45 },
    { name: "C", score: 60 }
 ]);
 console.log(result1); // ["A", "C"]