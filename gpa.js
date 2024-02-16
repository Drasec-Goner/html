document.getElementById("gpaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var course1 = document.getElementById("course1").value;
    var grade1 = document.getElementById("grade1").value;
    var course2 = document.getElementById("course2").value;
    var grade2 = document.getElementById("grade2").value;
    var course3 = document.getElementById("course3").value;
    var grade3 = document.getElementById("grade3").value;
    var course4 = document.getElementById("course4").value;
    var grade4 = document.getElementById("grade4").value;
    var course5 = document.getElementById("course5").value;
    var grade5 = document.getElementById("grade5").value;
    var course6 = document.getElementById("course6").value;
    var grade6 = document.getElementById("grade6").value;
    var course7 = document.getElementById("course7").value;
    var grade7 = document.getElementById("grade7").value;
    var course8 = document.getElementById("course8").value;
    var grade8 = document.getElementById("grade8").value;
    
    var courses = [course1,course2,course3,course4,course5,course6,course7,course8];
    var grades = [grade1,grade2,grade3,grade4,grade5,grade6,grade7,grade8];
    // Calculate GPA
    var cgpa = gpa(courses,grades);

    // Display the GPA
    document.getElementById("output").innerHTML = "Your GPA is: " + cgpa;
});


function gradeToMarks(grade) {
    if(grade == 'O')
        return 10;
    else if(grade == 'A+')
        return 9;
    else if(grade == 'A')
        return 8;
    else if(grade == 'B+')
        return 7;
    else if(grade == 'B')
        return 6;
    else if(grade == 'C')
        return 5;
    else if(grade == 'D')
        return 4;
    else
        return 0;
}

var subjects = [
    ["CSE310", 4],
    ["CSE325", 1],
    ["INT222", 3],
    ["INT219", 3],
    ["PEA305", 3],
    ["PEA307", 3],
    ["CSE408", 3],
    ["CSE316", 3],
    ["INT426", 3]
];

function creds(sub) {
    for (var i = 0; i < subjects.length; i++) {
        if (subjects[i][0] === sub) {
            return subjects[i][1];
        }
    }
    return 0;
}

function gpa(subjects, grades) {
    var marks = [];
    var sumCreds =0;
    for (var i = 0; i < subjects.length; i++) {
        var mark = gradeToMarks(grades[i]) * creds[subjects[i]];
        sumCreds+=creds[subjects[i]];
        marks.push(mark);
    }
    var sumMarks=0;
    for(var i = 0;i < marks.length;i++) {
        sumMarks+=marks[i];
    }
    var GPA = sumMarks/sumCreds;
    return GPA;
}

