/* eslint-disable react/prop-types */
import { HandleEdit } from "../HandleEdit";
import { getPay } from "../getPay";
import grossBG from "../../assets/adp/grossBG.png";
// import { getHours } from "../getHours";


export function PayInfo({ states, dispatch }) {
  // let { status, fed, state, stateTaxed } = states.taxInfo;
  // let { sched, rate, by, minGross } = states.payInfo;
  // let { statePos, fedPos, numStubs } = states.pos;
  // let regPayThisPeriod
  // let grossPay
  // let grossYTD
  // let regYTD
  // let ssTax
  // let medTaxYTD
  // let ssTaxYTD
  // let medTax
  // let netPay
  // console.log(document.childNodes.childNodes.id)


  const editStub = (e) => {
    const [input, stubContainer] = HandleEdit(e);
    // console.log(stubContainer)
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

  const [ hours, otHrs, rate, regPayThisPeriod, otRate, otThisPeriod, grossPay, regYTD, grossYTD, otYTD, ssTax, ssTaxYTD, medTax, medTaxYTD, stateTax, stateTaxYTD, fedTax, fedTaxYTD, netPay ] = getPay(states)
  let otPos = 0
  if ( otHrs > 0) {
    otPos = 0.15
    // dispatch({
    //   type: "txt",
    //   cat: "pos",
    //   key: "otPos",
    //   payload: 0.15,
    // })
  }
  
  
  // console.log(states.pos.otPos)


  // let pays = []


  
    
    
  


          
      // document.getElementById("stubContainer"+[index]).appendChild(pay);
      // pays.push(pay)
    
      
    



  


  


  return (
    <div>
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
        {states.payInfo.by}
      </p>
        <img
          src={grossBG}
          style={{
            position: "absolute",
            width: "2.245in",
            height: ".19in",
            top: 2.87 + otPos + "in",
            left: "1.31in",
          }}
        />
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: 2.75 + otPos + "in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        Gross Pay
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
          top: 3.9 + states.pos.statePos + states.pos.fedPos + "in",
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
          top: 3.9 + states.pos.statePos + states.pos.fedPos + "in",
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
          top: 3.72 + states.pos.statePos + states.pos.fedPos + "in",
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
          top: 4.135 + states.pos.statePos + states.pos.fedPos + "in",
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
          top: 4.55 + states.pos.statePos + states.pos.fedPos + "in",
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
      {states.pos.statePos !== 0 && states.pos.statePos !== undefined ? (
        <>
          <p
            style={{
              position: "absolute",
              fontSize: "9pt",
              left: "1.31in",
              top: 3.66 + states.pos.fedPos + "in",
            }}
            id="stateTaxTxt"
          >
            {states.taxInfo.stateTaxed !== undefined
              ? states.taxInfo.stateTaxed + " State Income Tax"
              : "GA State Income Tax"}
          </p>
          <p
            style={{
              position: "absolute",
              fontSize: "9pt",
              right: "4.95in",
              top: 3.66 + states.pos.fedPos + "in",
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
              top: 3.67 + states.pos.fedPos + "in",
            }}
            id="stateTaxYTD"
          >
            {stateTaxYTD}
          </p>
        </>
      ) : null}
      {states.pos.fedPos !== 0 && states.pos.fedPos !== undefined ? (
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
    </div>
  );
}
