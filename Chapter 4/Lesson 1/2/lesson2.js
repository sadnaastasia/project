function isEmpty(shedule) {
    for (let key in schedule) {
        return false;
    } return true;
}
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
