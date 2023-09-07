let updateDayOfTheWeek = () => {
    const weekDays = document.getElementById('dayOfTheWeek');
    const dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayOfTheWeek = dayOfTheWeek[currentDate.getDay()]
    weekDays.textContent = `Current Day of the week: ${currentDayOfTheWeek}`
}

  const getCurrentUTCTime = () => {
    const currentDate = new Date();
    const currentUTCTime = currentDate.toISOString(); 
    return currentUTCTime;
  }

  
  const updateCurrentUTCTime = () => {
    const currentUTCTimeElement = document.getElementById('currentUTCTime');
    const currentUTCTime = getCurrentUTCTime();
    currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;
  }

  updateCurrentUTCTime();


updateDayOfTheWeek();
updateUTCTime();