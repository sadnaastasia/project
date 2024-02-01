function getLocalDay(date) {
    let day;
    if (date.getDay() == 0) {
        return day = 7;
    } else {
        return date.getDay();
    }
    // let day = [7, 1, 2, 3, 4, 5, 6];
    // return day[date.getDay()];
} 

let date = new Date(2012, 0, 8);  // 8 января 2012 года
alert(date.getDay());             // покажет 0
alert( getLocalDay(date) );       // воскресенье, нужно показать 7