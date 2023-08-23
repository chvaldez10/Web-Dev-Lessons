import express from "express";

const app = express();
const port = 3000;
const date = new Date();
var dayOfWeek = "";
var dayResponse = "";

const weekdayResponse = {
  weekday: "work hard",
  weekend: "have fun",
};

function chooseDayResponse() {
  let day = date.getDay();
  if (day === 0 || day === 6) {
    dayOfWeek = "the weekend";
    dayResponse = weekdayResponse.weekend;
  } else {
    dayOfWeek = "a weekday";
    dayResponse = weekdayResponse.weekday;
  }
}

app.get("/", (req, res) => {
  chooseDayResponse();
  res.render("index.ejs", {
    dayOfTheWeek: dayOfWeek,
    dateAction: dayResponse,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
