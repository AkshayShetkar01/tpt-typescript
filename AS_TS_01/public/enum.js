"use strict";
var Days;
(function (Days) {
    //mon, tues, wed, thurs , fri, sat , sun
    //mon = 'Monday' , tues = 'Tuesday'
    Days[Days["mon"] = 10] = "mon";
    Days[Days["tues"] = 11] = "tues";
    Days[Days["wed"] = 12] = "wed";
    Days[Days["thurs"] = 13] = "thurs";
    Days[Days["fri"] = 14] = "fri";
    Days[Days["sat"] = 15] = "sat";
    Days[Days["sun"] = 16] = "sun"; // values will start from 10
})(Days || (Days = {}));
//console.log(Days.sun);
function whichDay(day) {
    return day;
}
console.log(whichDay(Days.tues));
