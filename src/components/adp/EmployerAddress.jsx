/* eslint-disable react/prop-types */
import { HandleEdit } from "../HandleEdit";

export function EmployerAddress({ employer, dispatch }) {
  let { name, address, apt, city, state, zip } = employer;
  let address3;

  if (name !== undefined) {
    name = name.toUpperCase();
    address = address.toUpperCase();
    apt = apt.toUpperCase();
    address3 = (city + " " + state + " " + zip).toUpperCase();
  }

  const editStub = (e) => {
    const [input, stubContainer] = HandleEdit(e);
    const category = e.target.style.cat;
    input.addEventListener("change", (e) => {
      dispatch({
        type: "txt",
        payload: e.target.value,
        cat: category,
        key: e.target.id,
      });
      stubContainer.removeChild(input);
    });
  };

  return (
    <>
      {apt !== undefined && apt !== "" ? (
        <>
          <div
            style={{
              fontSize: "7.5pt",
              lineHeight: ".16",
              fontStyle: "italic",
              letterSpacing: ".0045in",
            }}
          >
            <p
              style={{
                position: "absolute",
                wordSpacing: ".1in",
                top: ".63in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
              id="name"
            >
              {name}
            </p>
            <p
              id="apt"
              style={{
                position: "absolute",
                top: ".8in",
                left: "1.38in",
                width: "2.2in",
                wordSpacing: ".058in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
            >
              {apt}
            </p>
            <p
              id="address"
              style={{
                position: "absolute",
                top: ".96in",
                wordSpacing: ".041in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
            >
              {address}
            </p>
            <p
              id="address3"
              style={{
                position: "absolute",
                top: "1.14in",
                wordSpacing: ".1in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
            >
              {address3}
            </p>
          </div>
          <div
            style={{
              fontSize: "9pt",
              // wordSpacing: ".01",
              lineHeight: ".16",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "8.03in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
              id="name"
            >
              {name}
            </p>
            <p
              style={{
                position: "absolute",
                top: "8.2in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
              id="apt"
            >
              {apt}
            </p>
            <p
              style={{
                position: "absolute",
                top: "8.36in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
              id="address"
            >
              {address}
            </p>
            <p
              style={{
                position: "absolute",
                top: "8.53in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
              id="address3"
            >
              {address3}
            </p>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              fontSize: "7.5pt",
              lineHeight: ".16",
              fontStyle: "italic",
              letterSpacing: ".0045in",
            }}
          >
            <p
              style={{
                position: "absolute",
                wordSpacing: ".1in",
                top: ".63in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
              id="name"
            >
              {name}
            </p>
            <p
              id="address"
              style={{
                position: "absolute",
                top: ".8in",
                left: "1.38in",
                width: "2.2in",
                wordSpacing: ".058in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
            >
              {address}
            </p>
            <p
              id="address3"
              style={{
                position: "absolute",
                top: ".96in",
                wordSpacing: ".041in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
            >
              {address3}
            </p>
          </div>
          <div
            style={{
              fontSize: "9pt",
              lineHeight: ".16",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "8.03in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
              id="name"
            >
              {name}
            </p>
            <p
              style={{
                position: "absolute",
                top: "8.2in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
              id="address"
            >
              {address}
            </p>
            <p
              style={{
                position: "absolute",
                top: "8.36in",
                left: "1.38in",
                width: "2.2in",
                cat: "employer",
              }}
              className="edit"
              onClick={editStub}
              id="address3"
            >
              {address3}
            </p>
          </div>
        </>
      )}
    </>
  );
}
