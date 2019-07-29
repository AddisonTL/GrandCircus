const chooseClothing = e => {
  if (e == "formal") {
    return "a suit";
  } else if (e == "semi-formal") {
    return "a polo";
  } else if (e == "casual") {
    return "something comfy";
  }

  return "I dunno, I only know how to match formal semi-formal and casual and you gave me none of those you silly.";
};

const chooseJacket = t => {
  if (t > 70) {
    return "no jacket";
  } else if (t <= 70 && t <= 54) {
    return "a jacket";
  } else {
    return "a coat";
  }
};

var eventType = prompt(
  "Are you going to a formal, semi-formal, or casual event?"
);

var tempFahr = prompt(
  "What is the temperature going to be for the event in Fahrenheit?"
);

var clothing = chooseClothing(eventType);
var jacket = chooseJacket(tempFahr);

var result =
  "Since it is " +
  tempFahr +
  " degrees and you are going to a " +
  eventType +
  " event you should wear " +
  clothing +
  " and you will need " +
  jacket +
  ".";

console.log(result);
