function getSecondsToTomorrow() {
    let day = new Date();
    let dayTomorrow = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1).setHours(0, 0, 0, 0);
    return (dayTomorrow - day) / 1000;
}

alert(getSecondsToTomorrow());