function spaces(day) {
  switch (day) {
    case "Sun":
      return 0;
    case "Mon":
      return 6;
    case "Tue":
      return 12;
    case "Wed":
      return 18;
    case "Thu":
      return 24;
    case "Fri":
      return 30;
    case "Sat":
      return 36;
    default:
      return 0;
  }
}

function dateReceiver(date, startDay) {
  console.log("Sun   Mon   Tue   Wed   Thu   Fri   Sat");
  let j = spaces(startDay);
  let packageString = "";

  for (let q = 0; q < j; q++) {
    packageString += " ";
  }

  for (let i = 1; i <= date; i++) {
    packageString += i >= 10 ? i + "    " : i + "     ";
    j += 5;

    if (j >= 35) {
      if (startDay === "Fri") {
        startDay = "";
      } else {
        packageString += "\n";
        j = 0;
      }
    }
  }

  console.log(packageString);
}

let dateValue = 70;
let startDayOfWeek = "Mon";
dateReceiver(dateValue, startDayOfWeek);