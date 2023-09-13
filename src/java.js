function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonCurrentTimeElement = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonCurrentTimeElement.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonCurrentTimeElement.format(
    "HH:mm:ss[<small>]A[</small>]"
  );
  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokCurrentTimeElement = moment().tz("Asia/Bangkok");

  bangkokDateElement.innerHTML = moment().format("MMMM Do YYYY");
  bangkokTimeElement.innerHTML = bangkokCurrentTimeElement.format(
    "HH:mm:ss[<small>]A[</small>]"
  );
  let pragueElement = document.querySelector("#poland");
  let pragueDateElement = pragueElement.querySelector(".date");
  let pragueTimeElement = pragueElement.querySelector(".time");
  let pragueCurrentTimeElement = moment().tz("Europe/Prague");

  pragueDateElement.innerHTML = moment().format("MMMM Do YYYY");
  pragueTimeElement.innerHTML = pragueCurrentTimeElement.format(
    "HH:mm:ss[<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(`${cityTimeZone}`);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "HH:mm:ss [<small>]A[</small>]"
            )}</div>
          </div>
        </div>
        <a href="/">Back to main cities</a>`;
}

updateTime();
setInterval(updateTime), 1000;

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
