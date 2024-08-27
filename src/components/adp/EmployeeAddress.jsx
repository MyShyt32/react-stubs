/* eslint-disable react/prop-types */
import { HandleEdit } from "../HandleEdit";

export function EmployeeAddress({ employee, dispatch }) {
  let { name, address, apt, city, state, zip } = employee;
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
      {apt !== "" && apt !== undefined ? (
        <>
          <div
            style={{
              fontSize: "9pt",
              fontWeight: "bold",
              wordSpacing: ".06in",
            }}
          >
            <p
              id="name"
              className="edit"
              onClick={editStub}
              value="name"
              style={{
                position: "absolute",
                top: "1.445in",
                left: "5.16in",
                cat: "employee",
              }}
            >
              {name}
            </p>
            <p
              id="address"
              className="edit"
              onClick={editStub}
              style={{
                position: "absolute",
                top: "1.61in",
                left: "5.16in",
                cat: "employee",
              }}
            >
              {address}
            </p>
            <p
              id="apt"
              className="edit"
              onClick={editStub}
              style={{
                position: "absolute",
                top: "1.78in",
                left: "5.16in",
                cat: "employee",
              }}
            >
              {apt}
            </p>
            <p
              id="address3"
              className="edit"
              onClick={editStub}
              style={{
                position: "absolute",
                top: "1.95in",
                left: "5.16in",
                cat: "employee",
              }}
            >
              {address3}
            </p>
          </div>
          <p
            id="name"
            className="edit"
            onClick={editStub}
            style={{
              position: "absolute",
              fontSize: "8pt",
              fontWeight: "bold",
              top: "8.98in",
              left: "1.38in",
              wordSpacing: ".06in",
              cat: "employee",
            }}
          >
            {name}
          </p>
        </>
      ) : (
        <>
          <div
            style={{
              fontSize: "9pt",
              fontWeight: "bold",
              wordSpacing: ".06in",
            }}
          >
            <p
              id="name"
              className="edit"
              onClick={editStub}
              style={{
                position: "absolute",
                top: "1.445in",
                left: "5.16in",
                cat: "employee",
              }}
            >
              {name}
            </p>
            <p
              id="address"
              className="edit"
              onClick={editStub}
              style={{
                position: "absolute",
                top: "1.61in",
                left: "5.16in",
                cat: "employee",
              }}
            >
              {address}
            </p>
            <p
              id="address3"
              className="edit"
              onClick={editStub}
              style={{
                position: "absolute",
                top: "1.78in",
                left: "5.16in",
                cat: "employee",
              }}
            >
              {address3}
            </p>
          </div>
          <p
            id="name"
            className="edit"
            onClick={editStub}
            style={{
              position: "absolute",
              fontSize: "8pt",
              fontWeight: "bold",
              top: "8.98in",
              left: "1.38in",
              wordSpacing: ".06in",
              cat: "employee",
            }}
          >
            {name}
          </p>
        </>
      )}
    </>
  );
}
