import { ADPStubBG } from "./ADPStubBG";
import { Dates } from "../Dates";
import { EmployeeAddress } from "./EmployeeAddress";
import { EmployerAddress } from "./EmployerAddress";
import { HashInfo } from "./HashInfo";
import { TaxInfo } from "./TaxInfo";
import { HandleEdit } from "../HandleEdit";
import { PayInfo } from "./PayInfo";
// import { getPay } from "../getPay";

export function ADPStub({ states, dispatch}) {
  const { employee, employer, taxInfo, payInfo, pos } = states;

  const editStub = (e) => {
    const [input, stubContainer] = HandleEdit(e);
    const ele = document.getElementById(e.target.id);
    input.addEventListener("change", (e) => {
      switch (e.target.id) {
        case "perBegin":
          ele.innerText = e.target.value;
          break;
        case "perEnd":
          ele.innerText = e.target.value;
          break;
        case "payDateTop":
          document.getElementById("payDateBott").innerText = e.target.value;
          ele.innerText = e.target.value;
          break;
        case "payDateBott":
          ele.innerText = e.target.value;
          document.getElementById("payDateTop").innerText = e.target.value;
          break;
      }
      stubContainer.removeChild(input);
    });
  };

  


  const numStubs = pos.numStubs
  const dates = Dates(numStubs)
  let stubs = []

  for (let index = 0; index < pos.numStubs; index++) {
    // if (payInfo.minGross !== undefined && payInfo.by === "hours") {return}

    let stub = (
        <div
          id={"stubContainer"+[index]}
          key={"stubContainer"+[index]}
          className="stubContainer"
          style={{
            width: "8.5in",
            height: "11in",
            position: "relative",
          }}
        >
          <ADPStubBG pos={pos} />
          <HashInfo />
          <EmployerAddress
            employer={employer}
            dispatch={dispatch}
          />
          <TaxInfo
            taxInfo={taxInfo}
            dispatch={dispatch}
          />
          <EmployeeAddress
            employee={employee}
            dispatch={dispatch}
          />
          <PayInfo
            states={states}
            dispatch={dispatch}
          />
          <div style={{ fontSize: "9pt", wordSpacing: ".04in" }}>
            <p
              style={{
                position: "absolute",
                top: ".53in",
                right: "1.57in",
                width: ".7in",
                direction: "rtl",
              }}
              id="perBegin"
              className="edit"
              onClick={editStub}
            >
              {dates[index].begin}
            </p>
            <p
              style={{
                position: "absolute",
                top: ".7in",
                right: "1.57in",
                width: ".7in",
                direction: "rtl",
              }}
              id="perEnd"
              className="edit"
              onClick={editStub}
            >
              {dates[index].end}
            </p>
            <p
              style={{
                position: "absolute",
                top: ".87in",
                right: "1.57in",
                width: ".7in",
                direction: "rtl",
              }}
              id="payDateTop"
              className="edit"
              onClick={editStub}
            >
              {dates[index].pay}
            </p>
            <p
              style={{
                position: "absolute",
                top: "8.12in",
                right: "1.415in",
                width: ".7in",
                direction: "rtl",
              }}
              id="payDateBott"
              className="edit"
              onClick={editStub}
            >
              {dates[index].pay}
            </p>
          </div>
        </div>
    );

    stubs.push(stub)
    
    
  }

  return stubs
}
