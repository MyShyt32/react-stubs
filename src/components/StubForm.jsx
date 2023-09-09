/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Preview from "./Preview";
import { ADPStub } from "./adp/ADPStub";

export function StubForm({ handleEdit, state, onSubmit, dispatch, pos }) {
  const { statePos, fedPos, otPos } = pos;

  const handleChange = (e) => {
    switch (e.target.id) {
      case "employeeName":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employee",
          key: e.target.name,
        });
        break;
      case "employeeAddress":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employee",
          key: e.target.name,
        });
        break;
      case "employeeApt":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employee",
          key: e.target.name,
        });
        break;
      case "employeeCity":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employee",
          key: e.target.name,
        });
        break;
      case "employeeState":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employee",
          key: e.target.name,
        });
        break;
      case "employeeZip":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employee",
          key: e.target.name,
        });
        break;
      case "employerName":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employer",
          key: e.target.name,
        });
        break;
      case "employerAddress":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employer",
          key: e.target.name,
        });
        break;
      case "employerApt":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employer",
          key: e.target.name,
        });
        break;
      case "employerCity":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employer",
          key: e.target.name,
        });
        break;
      case "employerState":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employer",
          key: e.target.name,
        });
        break;
      case "employerZip":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "employer",
          key: e.target.name,
        });
        break;
      case "filingStatus":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "taxInfo",
          key: e.target.name,
        });
        break;
      case "fedExemptions":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "taxInfo",
          key: e.target.name,
        });
        e.target.value !== "Tax Blocked" && e.target.value !== undefined
          ? dispatch({ type: "txt", cat: "pos", key: "fedPos", payload: 0.2 })
          : dispatch({ type: "txt", cat: "pos", key: "fedPos", payload: 0 });
        break;
      case "stateExemptions":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "taxInfo",
          key: e.target.name,
        });
        e.target.value !== "Tax Blocked" && e.target.value !== undefined
          ? dispatch({ type: "txt", cat: "pos", key: "statePos", payload: 0.2 })
          : dispatch({ type: "txt", cat: "pos", key: "statePos", payload: 0 });
        break;
      case "payRate":
        dispatch({
          type: "txt",
          payload: parseFloat(parseFloat(e.target.value) * 1.5),
          cat: "payInfo",
          key: "otRate",
        });
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "payInfo",
          key: "rate",
        });

        break;
      case "paySchedule":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "payInfo",
          key: e.target.name,
        });
        break;
      case "paidBy":
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "payInfo",
          key: e.target.name,
        });
        break;
      case "minGross":
        console.log(state.payInfo.sched);
        dispatch({
          type: "txt",
          payload: e.target.value,
          cat: "payInfo",
          key: e.target.name,
        });
        if (e.target.value !== undefined && state.payInfo.by === "hours") {
          let hrsNeeded =
            parseFloat(e.target.value) / parseFloat(state.payInfo.rate);
          let otneeded;
          let maxOT;
          if (state.payInfo.sched === "1") {
            if (parseFloat(hrsNeeded) > 40) {
              dispatch({
                type: "txt",
                payload: 40,
                cat: "payInfo",
                key: "hours",
              });
              console.log(hrsNeeded);
              otneeded =
                ((parseFloat(hrsNeeded) - 40) *
                  parseFloat(state.payInfo.rate)) /
                parseFloat(state.payInfo.otRate);
              if (otneeded <= 26) {
                maxOT = otneeded * 1.5;
                dispatch({
                  type: "txt",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                  cat: "payInfo",
                  key: "otHrs",
                });
              }
              if (otneeded > 26 && otneeded <= 28) {
                maxOT = otneeded * 1.4;
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                });
              }
              if (otneeded > 28 && otneeded <= 30) {
                maxOT = otneeded * 1.3;
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                });
              }
              if (otneeded > 30 && otneeded <= 33) {
                maxOT = otneeded * 1.2;
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                });
              }
              if (otneeded > 33 && otneeded <= 36) {
                maxOT = otneeded * 1.1;
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                });
              }
              if (otneeded > 36 && otneeded <= 40) {
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (Math.random() * (40 - otneeded) + otneeded).toFixed(
                    2
                  ),
                });
              }
              dispatch({
                type: "txt",
                cat: "pos",
                key: "otPos",
                payload: 0.15,
              });
            }
            if (parseFloat(hrsNeeded) < 40) {
              dispatch({
                type: "txt",
                cat: "payInfo",
                key: "hours",
                payload: parseFloat(hrsNeeded).toFixed(2),
              });
              dispatch({ type: "txt", cat: "pos", key: "otPos", payload: 0 });
            }
          }
          if (state.payInfo.sched === "2") {
            if (parseFloat(hrsNeeded) > 80) {
              dispatch({
                type: "txt",
                cat: "payInfo",
                key: "hours",
                payload: 80,
              });
              otneeded =
                ((parseFloat(hrsNeeded) - 80) *
                  parseFloat(state.payInfo.rate)) /
                parseFloat(state.payInfo.otRate);
              if (otneeded <= 52) {
                maxOT = otneeded * 1.5;
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                });
              }
              if (otneeded > 52 && otneeded <= 56) {
                maxOT = otneeded * 1.4;
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                });
              }
              if (otneeded > 56 && otneeded <= 60) {
                maxOT = otneeded * 1.3;
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                });
              }
              if (otneeded > 60 && otneeded <= 66) {
                maxOT = otneeded * 1.2;
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                });
              }
              if (otneeded > 66 && otneeded <= 72) {
                maxOT = otneeded * 1.1;
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                });
              }
              if (otneeded > 72 && otneeded <= 80) {
                maxOT = 80;
                dispatch({
                  type: "txt",
                  cat: "payInfo",
                  key: "otHrs",
                  payload: (
                    Math.random() * (maxOT - otneeded) +
                    otneeded
                  ).toFixed(2),
                });
              }
              dispatch({
                type: "txt",
                cat: "pos",
                key: "otPos",
                payload: 0.15,
              });
            }
            if (parseFloat(hrsNeeded) < 80) {
              dispatch({
                type: "txt",
                cat: "payInfo",
                key: "hours",
                payload: parseFloat(hrsNeeded).toFixed(2),
              });
              dispatch({ type: "txt", cat: "pos", key: "otPos", payload: 0 });
            }
          }
        }
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    const userInput = {
      employee: {
        name: state.employee.name,
        address: state.employee.address,
        apt: state.employee.apt,
        city: state.employee.city,
        state: state.employee.state,
        zip: state.employee.zip,
      },
      employer: {
        name: state.employer.name,
        address: state.employer.address,
        apt: state.employer.apt,
        city: state.employer.city,
        state: state.employer.state,
        zip: state.employer.zip,
      },
      taxInfo: {
        status: state.taxInfo.status,
        fed: state.taxInfo.fed,
        state: state.taxInfo.state,
        stateTaxed: state.employee.state,
      },
      payInfo: {
        sched: state.payInfo.sched,
        rate: state.payInfo.rate,
        otRate: state.payInfo.otRate,
        hours: state.payInfo.hours,
        otHrs: state.payInfo.otHrs,
        by: state.payInfo.by,
        minGross: state.payInfo.minGross,
        regYTD: 431.68,
        otYTD: 431.68,
      },
      pos: {
        statePos: statePos,
        fedPos: fedPos,
        otPos: otPos,
      },
    };

    console.log(userInput);

    onSubmit(userInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <h2>Employee Info:</h2>
        </div>
        <div className="form-row">
          <input
            onChange={handleChange}
            autoComplete="name"
            type="text"
            required
            cat="employee"
            name="name"
            id="employeeName"
            placeholder="Name"
            value={state.employee.name}
          />
        </div>
        <div className="form-row">
          <input
            onChange={handleChange}
            autoComplete="address-line1"
            type="text"
            required
            cat="employee"
            name="address"
            id="employeeAddress"
            placeholder="Address"
            value={state.employee.address}
          />
          <input
            onChange={handleChange}
            autoComplete="address-line2"
            placeholder="Apt"
            type="text"
            cat="employee"
            name="apt"
            id="employeeApt"
            value={state.employee.apt}
          />
        </div>
        <div className="form-row">
          <input
            onChange={handleChange}
            autoComplete="address-level2"
            type="text"
            required
            cat="employee"
            name="city"
            id="employeeCity"
            placeholder="City"
            value={state.employee.city}
          />
          <input
            onChange={handleChange}
            autoComplete="address-level1"
            type="text"
            required
            cat="employee"
            name="state"
            id="employeeState"
            placeholder="State"
            value={state.employee.state}
          />
          <input
            onChange={handleChange}
            autoComplete="postal-code"
            type="text"
            required
            cat="employee"
            name="zip"
            id="employeeZip"
            placeholder="Zip"
            value={state.employee.zip}
          />
        </div>
        <div className="form-row">
          <h2>Employer Info:</h2>
        </div>
        <div className="form-row">
          <input
            onChange={handleChange}
            autoComplete="organization"
            type="text"
            required
            cat="employer"
            name="name"
            id="employerName"
            placeholder="Name"
            value={state.employer.name}
          />
        </div>
        <div className="form-row">
          <input
            onChange={handleChange}
            autoComplete="address-line1"
            type="text"
            required
            cat="employer"
            name="address"
            id="employerAddress"
            placeholder="Address"
            value={state.employer.address}
          />
          <input
            onChange={handleChange}
            autoComplete="address-line2"
            type="text"
            cat="employer"
            name="apt"
            id="employerApt"
            placeholder="ATTN/Suite"
            value={state.employer.apt}
          />
        </div>
        <div className="form-row">
          <input
            onChange={handleChange}
            autoComplete="address-level2"
            type="text"
            required
            cat="employer"
            name="city"
            id="employerCity"
            placeholder="City"
            value={state.employer.city}
          />
          <input
            onChange={handleChange}
            autoComplete="address-level1"
            type="text"
            required
            cat="employer"
            name="state"
            id="employerState"
            placeholder="State"
            value={state.employer.state}
          />
          <input
            onChange={handleChange}
            autoComplete="postal-code"
            type="text"
            required
            cat="employer"
            name="zip"
            id="employerZip"
            placeholder="Zip"
            value={state.employer.zip}
          />
        </div>
        <div className="form-row">
          <h2>Tax Info:</h2>
        </div>
        <div className="form-row">
          <select
            value={state.taxInfo.status}
            onChange={handleChange}
            cat="taxInfo"
            name="status"
            id="filingStatus"
            required
            style={{ width: "33.3%" }}
          >
            <option hidden>Filing Status:</option>
            <option value="Single">Single</option>
            <option value="Married filing seperately">
              Married filing seperately
            </option>
            <option value="Married">Married filing jointly</option>
            <option value="Head of House">Head of house</option>
          </select>
          <select
            value={state.taxInfo.fed}
            cat="taxInfo"
            name="fed"
            id="fedExemptions"
            required
            style={{ width: "33.3%" }}
            onChange={handleChange}
          >
            <option hidden>Federal Exemptions:</option>
            <option value="Tax Blocked">Exempt</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select
            value={state.taxInfo.state}
            onChange={handleChange}
            cat="taxInfo"
            name="state"
            id="stateExemptions"
            required
            style={{ width: "33.3%" }}
          >
            <option hidden>State Exemptions:</option>
            <option value="Tax Blocked">Exempt</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-row">
          <h2>Pay Info:</h2>
        </div>
        <div className="form-row">
          <select
            value={state.payInfo.sched}
            onChange={handleChange}
            id="paySchedule"
            name="sched"
            required
            style={{ width: "33.3%" }}
          >
            <option hidden>Pay Schedule:</option>
            <option value="1">Weekly</option>
            <option value="2">Bi-Weekly</option>
            {/* <option value="3">Monthly</option> */}
          </select>
          <input
            onChange={handleChange}
            name="rate"
            required
            id="payRate"
            placeholder="Pay rate"
            type="text"
            value={state.payInfo.rate}
          />
          <select
            value={state.payInfo.by}
            onChange={handleChange}
            name="by"
            id="paidBy"
            required
            style={{ width: "33.3%" }}
          >
            <option hidden>Paid by:</option>
            <option value="hours">Hour</option>
            {/* <option value="miles">Mile</option> */}
          </select>
          <input
            onChange={handleChange}
            required
            id="minGross"
            placeholder="Min Gross"
            type="text"
            name="minGross"
            value={state.payInfo.minGross}
          />
        </div>
        <button type="submit">Preview</button>
      </form>
      <Preview>
        <ADPStub handleEdit={handleEdit} state={state} dispatch={dispatch} />
      </Preview>
    </>
  );
}
