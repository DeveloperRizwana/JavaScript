const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const timeTraking = function (arr) {
  const daysOfweek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let totalWorked = 0;
  let mostHrWorked = 0;
  let maxDay = "";
  let numberOfDaysWorked = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      totalWorked += arr[i];
      numberOfDaysWorked++;
    }

    if (arr[i] > mostHrWorked) {
      mostHrWorked = arr[i];
      maxDay = daysOfweek[i];
    }
  }

  const avgDailyHr = totalWorked > 0 ? totalWorked / numberOfDaysWorked : 0;
  const isFullTime = totalWorked >= 35;

  return {
    worked: totalWorked,
    average: avgDailyHr,
    maxDay,
    numberOfDaysWorked,
    isFullTime,
  };
};

const result = timeTraking(data);
console.log(result);
