/* eslint-disable react/prop-types */
export function EmployeeAddress({ employee, handleEdit, dispatch }) {
  let { name, address, apt, city, state, zip } = employee;
  let address3;

  if (name !== undefined) {
    name = name.toUpperCase();
    address = address.toUpperCase();
    apt = apt.toUpperCase();
    address3 = (city + " " + state + " " + zip).toUpperCase();
  }

  const editStub = (e) => {
    const [input, stubContainer] = handleEdit(e);
    input.addEventListener("change", (e) => {
      dispatch({
        type: "txt",
        payload: e.target.value,
        cat: "employee",
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
            }}
          >
            {name}
          </p>
        </>
      )}
    </>
  );
}
