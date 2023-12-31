// function getWeekDay(date) {
//   let weekDay = (date.getDay() == 0) ? weekday = 'ВС' :
//   (date.getDay() == 1) ? weekday = 'ПН' :
//   (date.getDay() == 2) ? weekday = 'ВТ' :
//   (date.getDay() == 3) ? weekday = 'СР' :
//   (date.getDay() == 4) ? weekday = 'ЧТ' :
//   (date.getDay() == 5) ? weekday = 'ПТ' :
//   weekday = 'СБ' ;
//   return weekDay;
// }

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"