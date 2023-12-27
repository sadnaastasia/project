function formatDate(date) {
  let difference = new Date() - date;
  let result;
  difference < 1000 ? result = 'прямо сейчас' :
  difference < 60 * 1000 ? result = `${difference / 1000} сек. назад` :
  difference < 60 * 60 * 1000 ? result = `${difference / (1000 * 60)} мин. назад` :
  result = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()} : ${date.getMinutes()}`;
  return result;
}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));
