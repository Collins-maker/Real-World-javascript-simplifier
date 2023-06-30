function leapYearFinder(begin_year, end_year) {
    const leapYears = [];
  
    for (let year = begin_year; year <= end_year; year++) {
      if (isLeapYear(year)) {
        leapYears.push(year);
      }
    }
  
    return leapYears;
  }
  
  function isLeapYear(year) {
    // conditions or tests that qualify a year to be a leao year includes:
    // - Divisible by 4 but not divisible by 100 and if it is divisible by both then the next condition must be tested
    // - Divisible by 400
  
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    }
  
    return false;
  }
  
  // examples of leap years between 2000 and 2025
  const begin_year = 2000;
  const end_year = 2025;
  
  const leapYearsInRange = leapYearFinder(begin_year, end_year);
  console.log("Leap years between " + begin_year + " and " + end_year + ":");
  console.log(leapYearsInRange);
  