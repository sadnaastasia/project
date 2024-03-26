function createCalendar(elem, year, month) {
  let daydOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let weekDays = document.createElement('tr');
  elem.append(weekDays);
  for (let i = 0; i < daydOfWeek.length; i++) {
    let th = document.createElement('th');
    th.innerHTML = daydOfWeek[i];
    weekDays.append(th);
    if (weekDays.querySelectorAll('th').length == 7) {
      let tr = document.createElement('tr');
      elem.append(tr);
      let times = 0;
      while (true) {
        for (let i = 0; i < daydOfWeek.length; i++) {
          td = document.createElement('td')
          tr.append(td);
        }
        times += 1;
        if (times < 5) {
          tr = document.createElement('tr');
          elem.append(tr);
        }
        if (times == 5) break;
      }
    }
  }
  month = month - 1;
  let date = new Date(year, month, 1);
  let dateElse = new Date(year, month + 1, 1);
  let numberOfDays = Math.round((dateElse - date) / 1000 / 3600 / 24);
  let startPoint = date.getDay();
  let daysOfMonth = elem.querySelectorAll('td');
  for (let i = 0; i < daysOfMonth.length; i++) {
    if (i === startPoint - 1 || i === startPoint + 7) {
      daysOfMonth[i].textContent = '1';
      for (let j = 2; j <= numberOfDays; j++) {
        i += 1;
        daysOfMonth[i].textContent = `${j}`;
      }


    }
  }
}

createCalendar(calendar, 2012, 9);