

export function getHours (states) {


  // let hours = states.payInfo.hours;
  // let otHrs = states.payInfo.otHrs;
  // let otPos = states.payInfo.otPos;

  // console.log(hours, otHrs, otPos)


  let hrsNeeded = parseFloat(states.payInfo.minGross) / parseFloat(states.payInfo.rate);
  let otneeded;
  let maxOT;
  let hours;
  let otHrs;
  if (states.payInfo.sched == 1) {
    if (parseFloat(hrsNeeded) > 40) {
      hours = 40;
      // console.log(hrsNeeded);
      otneeded =
        ((parseFloat(hrsNeeded) - 40) *
          parseFloat(states.payInfo.rate)) /
        parseFloat(states.payInfo.otRate);
      
      if (otneeded <= 26) {
        maxOT = otneeded * 1.5;
        otHrs = (
            Math.random() * (maxOT - otneeded) +
            otneeded
          ).toFixed(2)
        
      }
      if (otneeded > 26 && otneeded <= 28) {
        maxOT = otneeded * 1.4;
        otHrs = (
          Math.random() * (maxOT - otneeded) +
          otneeded
        ).toFixed(2);
      }
      if (otneeded > 28 && otneeded <= 30) {
        maxOT = otneeded * 1.3;
        otHrs = (
          Math.random() * (maxOT - otneeded) +
          otneeded
        ).toFixed(2);
      }
      if (otneeded > 30 && otneeded <= 33) {
        maxOT = otneeded * 1.2;
        otHrs = (
          Math.random() * (maxOT - otneeded) +
          otneeded
        ).toFixed(2);
      }
      if (otneeded > 33 && otneeded <= 36) {
        maxOT = otneeded * 1.1;
        otHrs = (
          Math.random() * (maxOT - otneeded) +
          otneeded
        ).toFixed(2);
      }
      if (otneeded > 36 && otneeded <= 40) {
        otHrs = (Math.random() * (40 - otneeded) + otneeded).toFixed(2);
      }
    }
    if (parseFloat(hrsNeeded) < 40) {
      hours = parseFloat(hrsNeeded).toFixed(2);
      // dispatch({ type: "txt", cat: "pos", key: "otPos", payload: 0 });
    }
  }
  if (states.payInfo.sched === "2") {
    if (parseFloat(hrsNeeded) > 80) {
      hours = 80
      otneeded =
        ((parseFloat(hrsNeeded) - 80) *
          parseFloat(states.payInfo.rate)) /
        parseFloat(states.payInfo.otRate);
      if (otneeded <= 52) {
        maxOT = otneeded * 1.5;
        otHrs = (
          Math.random() * (maxOT - otneeded) +
          otneeded
        ).toFixed(2);
      }
      if (otneeded > 52 && otneeded <= 56) {
        maxOT = otneeded * 1.4;
        otHrs = (
          Math.random() * (maxOT - otneeded) +
          otneeded
        ).toFixed(2)
      }
      if (otneeded > 56 && otneeded <= 60) {
        maxOT = otneeded * 1.3;
        otHrs = (
          Math.random() * (maxOT - otneeded) +
          otneeded
        ).toFixed(2);
      }
      if (otneeded > 60 && otneeded <= 66) {
        maxOT = otneeded * 1.2;
        otHrs = (
          Math.random() * (maxOT - otneeded) +
          otneeded
        ).toFixed(2);
      }
      if (otneeded > 66 && otneeded <= 72) {
        maxOT = otneeded * 1.1;
        otHrs = (
          Math.random() * (maxOT - otneeded) +
          otneeded
        ).toFixed(2);
      }
      if (otneeded > 72 && otneeded <= 80) {
        maxOT = 80;
        otHrs = (
          Math.random() * (maxOT - otneeded) +
          otneeded
        ).toFixed(2);
      }
    }
    if (parseFloat(hrsNeeded) < 80) {
      hours = parseFloat(hrsNeeded).toFixed(2);
      // dispatch({ type: "txt", cat: "pos", key: "otPos", payload: 0 });
    }
  }

  return [ hours, otHrs ]

}

