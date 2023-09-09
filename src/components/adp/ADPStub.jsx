/* eslint-disable react/prop-types */
import { ADPStubBG } from "./ADPStubBG";
import { Dates } from "./Dates";
import { EmployeeAddress } from "./EmployeeAddress";
import { EmployerAddress } from "./EmployerAddress";
import { HashInfo } from "./HashInfo";
import { TaxInfo } from "./TaxInfo";
// import bg from "../../assets/adp/bg.png";
import { PayInfo } from "./PayInfo";

export function ADPStub({ handleEdit, state, dispatch }) {
  const { employee, employer, taxInfo, payInfo, pos } = state;

  return (
    <>
      {/* <img style={{ width: "8.5in" }} src={bg} alt="" /> */}
      <div
        id="stubContainer"
        className="stubContainer"
        style={{
          width: "8.5in",
          height: "11in",
          position: "absolute",
          margin: 0,
          padding: 0,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <ADPStubBG pos={pos} />
        <HashInfo />
        <EmployerAddress
          employer={employer}
          handleEdit={handleEdit}
          dispatch={dispatch}
        />
        <Dates handleEdit={handleEdit} />
        <TaxInfo
          taxInfo={taxInfo}
          handleEdit={handleEdit}
          dispatch={dispatch}
        />
        <EmployeeAddress
          employee={employee}
          handleEdit={handleEdit}
          dispatch={dispatch}
        />
        <PayInfo
          taxInfo={taxInfo}
          payInfo={payInfo}
          pos={pos}
          handleEdit={handleEdit}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}
