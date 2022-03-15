function computeBirthday() {
  /* 
  Let's create an array! Each element represents the number of times my birthday will occur. As of right now, we only have 0 assigned to each day of the week starting from Monday to Sunday. 
  */

  var daysOfTheWeek = [0,0,0,0,0,0,0];

  var birthday = document.querySelector('#birthday').value;

  /* 
  The value of our input field was named "birthday". 
  The string value for it would be something like i.e "1999-12-09".
  Let's turn it into a Date Object.
  */

  var birthdayAsDate = new Date(birthday);

  // Here my goal is to take the month and year (ex: April 16th)
  
  var birthdayMonth = birthdayAsDate.getMonth(); // i.e April

  var birthdayDate = birthdayAsDate.getDate(); // i.e 16th

  var startYear = document.querySelector('#startYear').value;

  var endYear = document.querySelector('#endYear').value;

  for (var year = startYear; year <= endYear; year++) {
    var birthdayOccurenceBasedOnWeeklyDays = new Date(year, birthdayMonth, birthdayDate).getDay();

    console.log('Year: ' + year + "Day of your birthday: " + getDayName(birthdayOccurenceBasedOnWeeklyDays));

    //increment the counter for this day

    daysOfTheWeek[birthdayOccurenceBasedOnWeeklyDays]++;

    //Now, add a table to the webpage, presenting the results ;)

    displayResults(daysOfTheWeek);
  }

  function getDayName(dayIndex) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];
    return days[dayIndex];
  }

  function displayResults(array){
    document.querySelector('#results').innerHTML = '<p>Occurences of your Birthday: </p>'; 

    var table = document.createElement('table');
    var firstRow = table.insertRow();
    var secondRow = table.insertRow();
    
    array.forEach(function(dayOccurence, index){
      var dayNameCell = firstRow.insertCell(index);
      dayNameCell.innerHTML = getDayName(index);

      var nbCell = secondRow.insertCell(index);
      nbCell.innerHTML = dayOccurence;

    });

    document.querySelector("#results").appendChild(table);

  }


}