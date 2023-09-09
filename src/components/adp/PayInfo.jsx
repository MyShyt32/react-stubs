/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function PayInfo({ taxInfo, payInfo, pos, handleEdit, dispatch }) {
  let { status, fed, state, stateTaxed } = taxInfo;
  let { sched, rate, hours, otHrs, by, minGross, regYTD, otYTD } = payInfo;
  let { statePos, fedPos, otPos } = pos;

  rate = parseFloat(rate).toFixed(4);
  hours = parseFloat(hours).toFixed(2);
  let regPayThisPeriod = (rate * hours).toFixed(2);

  regYTD = parseFloat(regYTD).toFixed(2);

  let otRate = (rate * 1.5).toFixed(4);
  otHrs = parseFloat(otHrs).toFixed(2);
  let otThisPeriod = (otRate * otHrs).toFixed(2);

  otYTD = parseFloat(otYTD).toFixed(2);

  let grossPay = (
    parseFloat(regPayThisPeriod) + parseFloat(otThisPeriod)
  ).toFixed(2);

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
  }

  let netPay = (
    parseFloat(grossPay) +
    parseFloat(ssTax) +
    parseFloat(medTax) +
    parseFloat(stateTax) +
    parseFloat(fedTax)
  ).toFixed(2);

  const editStub = (e) => {
    const [input, stubContainer] = handleEdit(e);
    input.addEventListener("change", (e) => {
      dispatch({
        type: "txt",
        payload: e.target.value,
        cat: "payInfo",
        key: e.target.id,
      });
      stubContainer.removeChild(input);
    });
  };

  return (
    <>
      <p
        style={{
          position: "absolute",
          fontSize: "9.5pt",
          left: ".285in",
          top: "2.57in",
        }}
      >
        Regular
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9.5pt",
          right: "6.48in",
          top: "2.57in",
        }}
        className="edit"
        onClick={editStub}
        id="rate"
      >
        {rate}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9.5pt",
          right: "5.86in",
          top: "2.57in",
        }}
        className="edit"
        onClick={editStub}
        id="hours"
      >
        {hours}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9.5pt",
          right: "4.95in",
          top: "2.57in",
        }}
        id="regPayThisPeriod"
      >
        {regPayThisPeriod}
      </p>
      <p
        style={{
          position: "absolute",
          fontWeight: "bold",
          fontSize: "7pt",
          left: "1.815in",
          top: "2.46in",
        }}
        id="rateTxt"
      >
        rate
      </p>
      <p
        style={{
          position: "absolute",
          fontWeight: "bold",
          fontSize: "7pt",
          left: "2.35in",
          top: "2.46in",
        }}
        id="by"
      >
        {by}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 2.75 + parseFloat(otPos) + "in",
          fontWeight: "bold",
        }}
        id="grossPay"
      >
        ${grossPay}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: 2.75 + parseFloat(otPos) + "in",
        }}
        id="grossYTD"
      >
        {grossYTD}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: "2.58in",
        }}
        className="edit"
        onClick={editStub}
        id="regYTD"
      >
        {regYTD}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: "3.33in",
        }}
      >
        Social Security Tax
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: "3.495in",
        }}
      >
        Medicare Tax
      </p>

      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: 3.9 + statePos + fedPos + "in",
        }}
      >
        Checking Acct 1
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: "3.33in",
        }}
        id="ssTax"
      >
        {ssTax}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: "3.495in",
        }}
        id="medTax"
      >
        {medTax}
      </p>

      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 3.9 + statePos + fedPos + "in",
        }}
        id="paidAmount"
      >
        -{netPay}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 3.72 + statePos + fedPos + "in",
          fontWeight: "bold",
        }}
        id="netPay"
      >
        ${netPay}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "4.95in",
          top: 4.135 + statePos + fedPos + "in",
          fontWeight: "bold",
        }}
      >
        $0.00
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: "3.338in",
        }}
        id="ssTaxYTD"
      >
        {ssTaxYTD}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "3.83in",
          top: "3.5in",
        }}
        id="medTaxYTD"
      >
        {medTaxYTD}
      </p>

      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: ".348in",
          top: "8.938in",
        }}
        id="chckAmount"
      >
        ${netPay}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          right: "1.29in",
          top: "7.94in",
          fontWeight: "bold",
        }}
        id="adviceNum"
      >
        00000497754
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          left: "1.45in",
          top: 4.55 + statePos + fedPos + "in",
        }}
        id="taxableWageSen"
      >
        Your federal taxable wages this period are ${grossPay}
      </p>

      <p
        style={{
          position: "absolute",
          fontSize: "8pt",
          left: "4.865in",
          top: "8.965in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
        id="accountNum"
      >
        xxxxxxxx8630
      </p>
      {parseFloat(otPos) !== 0 && otPos !== undefined ? (
        <>
          <p
            style={{
              position: "absolute",
              fontSize: "9.5pt",
              left: ".285in",
              top: 2.57 + otPos + "in",
            }}
          >
            Overtime
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "9.5pt",
              right: "6.48in",
              top: 2.57 + otPos + "in",
            }}
            id="otRate"
          >
            {otRate}
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "9.5pt",
              right: "5.86in",
              top: 2.57 + otPos + "in",
            }}
            className="edit"
            onClick={editStub}
            id="otHrs"
          >
            {otHrs}
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "9.5pt",
              right: "4.95in",
              top: 2.57 + otPos + "in",
            }}
            id="otThisPeriod"
          >
            {otThisPeriod}
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "9pt",
              right: "3.83in",
              top: 2.58 + otPos + "in",
            }}
            className="edit"
            onClick={editStub}
            id="otYTD"
          >
            {otYTD}
          </p>
        </>
      ) : null}
      {statePos !== 0 && statePos !== undefined ? (
        <>
          <p
            style={{
              position: "absolute",
              fontSize: "9pt",
              left: "1.31in",
              top: 3.66 + fedPos + "in",
            }}
            id="stateTaxTxt"
          >
            {stateTaxed !== undefined
              ? stateTaxed + " State Income Tax"
              : "GA State Income Tax"}
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "9pt",
              right: "4.95in",
              top: 3.66 + fedPos + "in",
            }}
            id="stateTax"
          >
            {stateTax}
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "9pt",
              right: "3.83in",
              top: 3.67 + fedPos + "in",
            }}
            id="stateTaxYTD"
          >
            {stateTaxYTD}
          </p>
        </>
      ) : null}
      {fedPos !== 0 && fedPos !== undefined ? (
        <>
          <p
            style={{
              position: "absolute",
              fontSize: "9pt",
              left: "1.31in",
              top: 3.67 + "in",
            }}
            id="fedTaxTxt"
          >
            Federal Income Tax
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "9pt",
              right: "4.95in",
              top: 3.67 + "in",
            }}
            id="fedTax"
          >
            {fedTax}
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "9pt",
              right: "3.83in",
              top: 3.67 + "in",
            }}
            id="fedTaxYTD"
          >
            {fedTaxYTD}
          </p>
        </>
      ) : null}
    </>
  );
}
