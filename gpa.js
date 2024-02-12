

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
        var grade = grades[i].toUpperCase();
        var mark = gradeToMarks(grade) * creds[subjects[i]];
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

