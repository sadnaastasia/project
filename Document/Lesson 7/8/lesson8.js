let timerid = 0;
function clockStart() {
  timerid = setTimeout(function clock() {
    let date = new Date();

    let h = date.getHours();
    if (h < 10) {
      hours.textContent = `0${h}`
    } else {
      hours.textContent = `${h}`
    }
  
    m = date.getMinutes();
    if (m < 10) {
      minutes.textContent = `0${m}`; 
    } else {
      minutes.textContent = `${m}`; 
    }
  
    s = date.getSeconds();
    if (s < 10) {
      seconds.textContent = `0${s}`;
    } else {
      seconds.textContent = `${s}`;
    }
    if (clockStop()) clearTimeout(timerid);
    timerid = setTimeout(clock, 1000);
  }, 1000);
}

function clockStop() {
    clearTimeout(timerid);
}