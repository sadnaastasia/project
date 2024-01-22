function formatDate(date) {
  let difference = new Date() - date;
  
  if (difference < 1000) {
    return 'прямо сейчас';
  } 
  
  let sec = Math.floor(difference / 1000); 
  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(difference / 60000); 
  if (min < 60) {
    return min + ' мин. назад';
  }

  let dateFormated = [
    '0' + date.getDate(),
    '0' + (date.getMonth() + 1),
    '' + date.getFullYear(),
    '0' + date.getHours(),
    '0' + date.getMinutes()
  ].map(component => component.slice(-2));
  return dateFormated.slice(0,3).join('.') + ', ' + dateFormated.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));
