// interview question and answer
// <p>{students.length && "No students found"}</p> 
// <p>Number of students : {students.length}</p> 




export const practice = () => {
    const students = [1   ];
    return (
        <>
        {/* 1st way */}
        {/* <p>{students.length === 0 && "No students found"}</p> */}


        {/* 2nd way */}
        {/* <p>{!students.length === 0 && "No students found"}</p> */}
        {/* <p>Number of students : {students.length}</p> */}


        </>
    );
};

