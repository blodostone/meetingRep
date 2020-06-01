//1. Create function getStudentsBirthDays
//2. input: массив объектов
//2.1 no student
//2.2 
//3. output: object
//4. detect month of birth and group
//5. Sort students inside the month
//6. Leave only names

// [{ name: 'Tom', birthDate: '01/15/2010' }, 
// { name: 'Ben', birthDate: '01/17/2008' },
// { name: 'Sam', birthDate: '03/15/2010' }];
// { Jan: ['Tom', 'Ben'], Mar: ['Sam'] }

const students = [{ name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/15/2010' }
]
export function studentsBirthDays(students) {
    let monStud = ['Jan', 'Feb', 'Mar']
    const studentsObj = students.reduce((acc, student) => {
        //     console.log(student);
        const monthNumber = new Date(student.birthDate).getMonth()
        const montName = monStud[monthNumber];
        const oldStudents = acc[montName] ? acc[montName] : []
        return {...acc, [montName]: oldStudents.concat(student) }
        //     console.log(montName);
    }, {});
    for (let month in studentsObj) {
        const sortedStudents = studentsObj[month].sort((a, b) => {
            return (
                new Date(a.birthDate).getDate() -
                new Date(b.birthDate).getDate()
            );
        });
        const studentsNames = sortedStudents.map((student) => student.name);
        studentsObj[month] = studentsNames;
    }
    return studentsObj;
}
// const result =  studentsBirthDays(students)
// console.log(result);