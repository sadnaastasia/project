function getSecondsToday() {
    let day = new Date();
    let dayStart = new Date().setHours(0, 0, 0, 0);
    return Math.round((day - dayStart) / 1000);
}

alert(getSecondsToday());