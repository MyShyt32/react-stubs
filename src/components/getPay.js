import { getHours } from "./getHours";

export function getPay(states) {
  let { status, fed, state, stateTaxed } = states.taxInfo;
  let { sched, rate, by, minGross } = states.payInfo;
  let { statePos, fedPos, otPos, numStubs } = states.pos;

  var [hours, otHrs ] = getHours(states);
  rate = parseFloat(rate).toFixed(4);
  hours = parseFloat(hours).toFixed(2);
  let regPayThisPeriod = (rate * hours).toFixed(2);

  let otRate = (rate * 1.5);


  otRate = (rate * 1.5).toFixed(4);
  otHrs = parseFloat(otHrs).toFixed(2);
  let otThisPeriod = (otRate * otHrs).toFixed(2);

  let grossPay = (
    parseFloat(regPayThisPeriod) + parseFloat(otThisPeriod)
  ).toFixed(2);

  let regYTD = parseFloat("21563").toFixed(2);
  let otYTD = parseFloat("2638").toFixed(2);

  let grossYTD = (parseFloat(regYTD) + parseFloat(otYTD)).toFixed(2);

  let ssTax = (parseFloat(grossPay) * -0.062).toFixed(2);
  let ssTaxYTD;
  if (status === "Married" && parseFloat(grossYTD) > 250000) {
    ssTaxYTD = parseFloat(15500).toFixed(2);
  }
  if (status !== "Married" && parseFloat(grossYTD) > 160200) {
    ssTaxYTD = parseFloat(9932.4).toFixed(2);
  }
  ssTaxYTD = (parseFloat(grossYTD) * 0.062).toFixed(2);

  let medTax = (parseFloat(grossPay) * -0.0145).toFixed(2);
  let medTaxYTD = (parseFloat(grossYTD) * 0.0145).toFixed(2);

  let fedTax;
  let fedTaxYTD;
  if (fed !== undefined || fed !== "Tax Blocked") {
    if (status === "Single") {
      if (parseFloat(grossYTD) <= 11000) {
        fedTax = (parseFloat(grossPay) * -0.1).toFixed(2);
        fedTaxYTD = (parseFloat(grossYTD) * 0.1).toFixed(2);
      }
      if (parseFloat(grossYTD) > 11000 && parseFloat(grossYTD) <= 44725) {
        fedTax = (parseFloat(grossPay) * -0.12).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 11000) * 0.12 + 1100).toFixed(2);
      }
      if (parseFloat(grossYTD) > 44725 && parseFloat(grossYTD) <= 95375) {
        fedTax = (parseFloat(grossPay) * -0.22).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 44725) * 0.22 + 5147).toFixed(2);
      }
      if (parseFloat(grossYTD) > 95375 && parseFloat(grossYTD) <= 182100) {
        fedTax = (parseFloat(grossPay) * -0.24).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 95375) * 0.24 + 16290).toFixed(2);
      }
      if (parseFloat(grossYTD) > 182100 && parseFloat(grossYTD) <= 231250) {
        fedTax = (parseFloat(grossPay) * -0.32).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 182100) * 0.32 + 37104).toFixed(2);
      }
      if (parseFloat(grossYTD) > 231250 && parseFloat(grossYTD) <= 578125) {
        fedTax = (parseFloat(grossPay) * -0.35).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 231250) * 0.35 + 52832).toFixed(2);
      }
      if (parseFloat(grossYTD) > 578125) {
        fedTax = (parseFloat(grossPay) * -0.37).toFixed(2);
        fedTaxYTD = (
          (parseFloat(grossYTD) - 578125) * 0.37 +
          174238.25
        ).toFixed(2);
      }
    }
    if (status === "Married filing seperately") {
      if (parseFloat(grossYTD) <= 11000) {
        fedTax = (parseFloat(grossPay) * -0.1).toFixed(2);
        fedTaxYTD = (parseFloat(grossYTD) * 0.1).toFixed(2);
      }
      if (parseFloat(grossYTD) > 11000 && parseFloat(grossYTD) <= 44725) {
        fedTax = (parseFloat(grossPay) * -0.12).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 11000) * 0.12 + 1100).toFixed(2);
      }
      if (parseFloat(grossYTD) > 44725 && parseFloat(grossYTD) <= 95375) {
        fedTax = (parseFloat(grossPay) * -0.22).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 44725) * 0.22 + 5147).toFixed(2);
      }
      if (parseFloat(grossYTD) > 95375 && parseFloat(grossYTD) <= 182100) {
        fedTax = (parseFloat(grossPay) * -0.24).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 95375) * 0.24 + 16290).toFixed(2);
      }
      if (parseFloat(grossYTD) > 182100 && parseFloat(grossYTD) <= 231250) {
        fedTax = (parseFloat(grossPay) * -0.32).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 182100) * 0.32 + 37104).toFixed(2);
      }
      if (parseFloat(grossYTD) > 231250 && parseFloat(grossYTD) <= 346875) {
        fedTax = (parseFloat(grossPay) * -0.35).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 231250) * 0.35 + 52832).toFixed(2);
      }
      if (parseFloat(grossYTD) > 346875) {
        fedTax = (parseFloat(grossPay) * -0.37).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 346875) * 0.37 + 93300.75).toFixed(
          2
        );
      }
    }
    if (status === "Head of House") {
      if (parseFloat(grossYTD) <= 15700) {
        fedTax = (parseFloat(grossPay) * -0.1).toFixed(2);
        fedTaxYTD = (parseFloat(grossYTD) * 0.1).toFixed(2);
      }
      if (parseFloat(grossYTD) > 15700 && parseFloat(grossYTD) <= 59850) {
        fedTax = (parseFloat(grossPay) * -0.12).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 15700) * 0.12 + 1570).toFixed(2);
      }
      if (parseFloat(grossYTD) > 59850 && parseFloat(grossYTD) <= 95350) {
        fedTax = (parseFloat(grossPay) * -0.22).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 59850) * 0.22 + 6868).toFixed(2);
      }
      if (parseFloat(grossYTD) > 95350 && parseFloat(grossYTD) <= 182100) {
        fedTax = (parseFloat(grossPay) * -0.24).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 95350) * 0.24 + 14678).toFixed(2);
      }
      if (parseFloat(grossYTD) > 182100 && parseFloat(grossYTD) <= 231250) {
        fedTax = (parseFloat(grossPay) * -0.32).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 182100) * 0.32 + 35498).toFixed(2);
      }
      if (parseFloat(grossYTD) > 231250 && parseFloat(grossYTD) <= 578100) {
        fedTax = (parseFloat(grossPay) * -0.35).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 231250) * 0.35 + 51226).toFixed(2);
      }
      if (parseFloat(grossYTD) > 578100) {
        fedTax = (parseFloat(grossPay) * -0.37).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 578100) * 0.37 + 172623.5).toFixed(
          2
        );
      }
    }
    if (status === "Married") {
      if (parseFloat(grossYTD) <= 22000) {
        fedTax = (parseFloat(grossPay) * -0.1).toFixed(2);
        fedTaxYTD = (parseFloat(grossYTD) * 0.1).toFixed(2);
      }
      if (parseFloat(grossYTD) > 22000 && parseFloat(grossYTD) <= 89450) {
        fedTax = (parseFloat(grossPay) * -0.12).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 22000) * 0.12 + 2200).toFixed(2);
      }
      if (parseFloat(grossYTD) > 89450 && parseFloat(grossYTD) <= 190750) {
        fedTax = (parseFloat(grossPay) * -0.22).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 89450) * 0.22 + 10294).toFixed(2);
      }
      if (parseFloat(grossYTD) > 190750 && parseFloat(grossYTD) <= 364200) {
        fedTax = (parseFloat(grossPay) * -0.24).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 190750) * 0.24 + 32580).toFixed(2);
      }
      if (parseFloat(grossYTD) > 364200 && parseFloat(grossYTD) <= 462500) {
        fedTax = (parseFloat(grossPay) * -0.32).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 364200) * 0.32 + 74208).toFixed(2);
      }
      if (parseFloat(grossYTD) > 462500 && parseFloat(grossYTD) <= 693750) {
        fedTax = (parseFloat(grossPay) * -0.35).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 462500) * 0.35 + 105664).toFixed(
          2
        );
      }
      if (parseFloat(grossYTD) > 693750) {
        fedTax = (parseFloat(grossPay) * -0.37).toFixed(2);
        fedTaxYTD = ((parseFloat(grossYTD) - 693750) * 0.37 + 186601.5).toFixed(
          2
        );
      }
    }
  } else {
    fedTax = 0;
  }

  if (stateTaxed !== undefined) {
    stateTaxed = stateTaxed.toUpperCase();
  }

  let stateTax;
  let stateTaxYTD;
  if (status === "Married" && state !== "Tax Blocked" && state !== undefined) {
    if (parseFloat(grossYTD) <= 1000) {
      stateTax = (parseFloat(grossPay) * -0.01).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.01).toFixed(2);
    }
    if (parseFloat(grossYTD) > 1000 && parseFloat(grossYTD) <= 3000) {
      stateTax = (parseFloat(grossPay) * -0.02).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.02).toFixed(2);
    }
    if (parseFloat(grossYTD) > 3000 && parseFloat(grossYTD) <= 5000) {
      stateTax = (parseFloat(grossPay) * -0.03).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.03).toFixed(2);
    }
    if (parseFloat(grossYTD) > 5000 && parseFloat(grossYTD) <= 7000) {
      stateTax = (parseFloat(grossPay) * -0.04).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.04).toFixed(2);
    }
    if (parseFloat(grossYTD) > 7000 && parseFloat(grossYTD) <= 10000) {
      stateTax = (parseFloat(grossPay) * -0.05).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.05).toFixed(2);
    }
    if (parseFloat(grossYTD) > 10000) {
      stateTax = (parseFloat(grossPay) * -0.0575).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.0575).toFixed(2);
    }
  } else if (state !== undefined && state !== "Tax Blocked") {
    if (parseFloat(grossYTD) <= 750) {
      stateTax = (parseFloat(grossPay) * -0.01).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.01).toFixed(2);
    }
    if (parseFloat(grossYTD) > 750 && parseFloat(grossYTD) <= 2250) {
      stateTax = (parseFloat(grossPay) * -0.02).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.02).toFixed(2);
    }
    if (parseFloat(grossYTD) > 2250 && parseFloat(grossYTD) <= 3750) {
      stateTax = (parseFloat(grossPay) * -0.03).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.03).toFixed(2);
    }
    if (parseFloat(grossYTD) > 3750 && parseFloat(grossYTD) <= 5250) {
      stateTax = (parseFloat(grossPay) * -0.04).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.04).toFixed(2);
    }
    if (parseFloat(grossYTD) > 5250 && parseFloat(grossYTD) <= 7000) {
      stateTax = (parseFloat(grossPay) * -0.05).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.05).toFixed(2);
    }
    if (parseFloat(grossYTD) > 7000) {
      stateTax = (parseFloat(grossPay) * -0.0575).toFixed(2);
      stateTaxYTD = (parseFloat(grossYTD) * 0.0575).toFixed(2);
    }
  } else {
    stateTax = 0;
  }

  let netPay = (
    parseFloat(grossPay) +
    parseFloat(ssTax) +
    parseFloat(medTax) +
    parseFloat(stateTax) +
    parseFloat(fedTax)
  ).toFixed(2);

  return [ hours, otHrs, rate, regPayThisPeriod, otRate, otThisPeriod, grossPay, regYTD, grossYTD, otYTD, ssTax, ssTaxYTD, medTax, medTaxYTD, stateTax, stateTaxYTD, fedTax, fedTaxYTD, netPay ]
}
