/* eslint-disable no-unused-vars */
import { useState, useReducer } from "react";
import "./components/StubForm";
import "./App.css";
import { StubForm } from "./components/StubForm";
import { ADPStub } from "./components/adp/ADPStub";
// import getFormattedDate from "./components/getFormattedDate";

const reducer = (state, action) => {
  switch (action.type) {
    case "txt": {
      return {
        ...state,
        [action.cat]: {
          ...state[action.cat],
          [action.key]: action.payload,
        },
      };
    }
  }
};

const emptyVal = {
  employee: {
    name: "",
    address: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
  },
  employer: {
    name: "",
    address: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
  },
  taxInfo: {
    status: "",
    fed: "",
    state: "",
    stateTaxed: "",
  },
  payInfo: {
    sched: "",
    rate: "",
    otRate: "",
    hours: "",
    otHrs: "",
    by: "",
    minGross: "",
    regYTD: "",
    otYTD: "",
  },
  pos: {
    statePos: 0,
    fedPos: 0,
    otPos: 0,
  },
};

const fullVal = {
  employee: {
    name: "John Doe",
    address: "110 Main Street",
    apt: "Apt 216",
    city: "atlanta",
    state: "ga",
    zip: "51627",
  },
  employer: {
    name: "cis services llc",
    address: "4300 Pleasantdale Road",
    apt: "ATTN: Payroll",
    city: "birmingham",
    state: "al",
    zip: "64835",
  },
  taxInfo: {
    status: "Married filing seperately",
    fed: "0",
    state: "0",
    stateTaxed: "GA",
  },
  payInfo: {
    sched: "1",
    rate: 15.5,
    otRate: 15.5 * 1.5,
    hours: 40,
    otHrs: 7.39,
    by: "hours",
    minGross: 0,
    regYTD: 431.68,
    otYTD: 431.68,
  },
  pos: {
    statePos: 0.2,
    fedPos: 0.2,
    otPos: 0.15,
  },
};

function App() {
  const [preview, setPreview] = useState(false);
  const initVal = preview ? fullVal : emptyVal;
  const [state, dispatch] = useReducer(reducer, initVal);

  const handleFormSubmit = (userinput) => {
    const { employee, employer, taxInfo, payInfo, pos } = userinput;

    dispatch({
      type: "txt",
      cat: "employee",
      key: "name",
      payload: userinput.employee.name,
    });
    dispatch({
      type: "txt",
      cat: "employee",
      key: "address",
      payload: userinput.employee.address,
    });
    dispatch({
      type: "txt",
      cat: "employee",
      key: "apt",
      payload: userinput.employee.apt,
    });
    dispatch({
      type: "txt",
      cat: "employee",
      key: "city",
      payload: userinput.employee.city,
    });
    dispatch({
      type: "txt",
      cat: "employee",
      key: "state",
      payload: userinput.employee.state,
    });
    dispatch({
      type: "txt",
      cat: "employee",
      key: "zip",
      payload: userinput.employee.zip,
    });
    dispatch({
      type: "txt",
      cat: "employer",
      key: "name",
      payload: userinput.employer.name,
    });
    dispatch({
      type: "txt",
      cat: "employer",
      key: "address",
      payload: userinput.employer.address,
    });
    dispatch({
      type: "txt",
      cat: "employer",
      key: "apt",
      payload: userinput.employer.apt,
    });
    dispatch({
      type: "txt",
      cat: "employer",
      key: "city",
      payload: userinput.employer.city,
    });
    dispatch({
      type: "txt",
      cat: "employer",
      key: "state",
      payload: userinput.employer.state,
    });
    dispatch({
      type: "txt",
      cat: "employer",
      key: "zip",
      payload: userinput.employer.zip,
    });
    dispatch({
      type: "txt",
      cat: "taxInfo",
      key: "status",
      payload: userinput.taxInfo.status,
    });
    dispatch({
      type: "txt",
      cat: "taxInfo",
      key: "fed",
      payload: userinput.taxInfo.fed,
    });
    dispatch({
      type: "txt",
      cat: "taxInfo",
      key: "state",
      payload: userinput.taxInfo.state,
    });
    dispatch({
      type: "txt",
      cat: "taxInfo",
      key: "stateTaxed",
      payload: userinput.taxInfo.stateTaxed,
    });
    dispatch({
      type: "txt",
      cat: "payInfo",
      key: "sched",
      payload: payInfo.sched,
    });
    dispatch({
      type: "txt",
      cat: "payInfo",
      key: "rate",
      payload: payInfo.rate,
    });
    dispatch({
      type: "txt",
      cat: "payInfo",
      key: "hours",
      payload: payInfo.hours,
    });
    dispatch({
      type: "txt",
      cat: "payInfo",
      key: "otHrs",
      payload: payInfo.otHrs,
    });
    dispatch({
      type: "txt",
      cat: "payInfo",
      key: "by",
      payload: payInfo.by,
    });
    dispatch({
      type: "txt",
      cat: "payInfo",
      key: "minGross",
      payload: payInfo.minGross,
    });
    dispatch({
      type: "txt",
      cat: "payInfo",
      key: "regYTD",
      payload: payInfo.regYTD,
    });
    dispatch({
      type: "txt",
      cat: "payInfo",
      key: "otYTD",
      payload: payInfo.otYTD,
    });
    dispatch({
      type: "txt",
      cat: "pos",
      key: "statePos",
      payload: pos.statePos,
    });
    dispatch({
      type: "txt",
      cat: "pos",
      key: "fedPos",
      payload: pos.fedPos,
    });
    dispatch({
      type: "txt",
      cat: "pos",
      key: "otPos",
      payload: pos.otPos,
    });

    setPreview(true);
  };

  const handleEdit = (e) => {
    let input = document.createElement("input");
    input.value = e.target.innerText;
    input.id = e.target.id;
    input.style.position = e.target.style.position;
    input.style.height = ".08in";
    input.style.top =
      parseFloat(e.target.style.top) +
      parseFloat(input.style.height) * 2 +
      "in";
    input.style.left = e.target.style.left;
    input.style.right = e.target.style.right;
    input.style.width = e.target.style.width;
    const stubContainer = document.getElementById("stubContainer");
    stubContainer.appendChild(input);
    input.focus();
    return [input, stubContainer];
  };

  // const d = new Date();
  // const dow = d.getDay();
  // console.log(getFormattedDate(d));

  return (
    <>
      {preview ? (
        <ADPStub handleEdit={handleEdit} state={state} dispatch={dispatch} />
      ) : (
        <StubForm
          handleEdit={handleEdit}
          state={state}
          onSubmit={handleFormSubmit}
          dispatch={dispatch}
          pos={state.pos}
        />
      )}
    </>
  );
}

export default App;
