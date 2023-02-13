enum Days {
    //mon, tues, wed, thurs , fri, sat , sun
    //mon = 'Monday' , tues = 'Tuesday'
    mon = 10, tues, wed, thurs , fri, sat , sun // values will start from 10
}

//console.log(Days.sun);

function whichDay(day:Days) {
    return day;
}

console.log(whichDay(Days.tues));