/* eslint-disable react/prop-types */
export function TaxInfo({ taxInfo, handleEdit, dispatch }) {
  let { status, fed, state, stateTaxed } = taxInfo;

  if (stateTaxed !== undefined) {
    stateTaxed = stateTaxed.toUpperCase();
  }

  const editStub = (e) => {
    const [input, stubContainer] = handleEdit(e);
    input.addEventListener("change", (e) => {
      dispatch({
        type: "txt",
        payload: e.target.value,
        cat: "taxInfo",
        key: e.target.id,
      });
      stubContainer.removeChild(input);
    });
  };

  return (
    <div style={{ fontSize: "7pt", wordSpacing: ".07in" }}>
      <p
        style={{
          position: "absolute",
          top: "1.62in",
          left: "1.38in",
          width: ".65in",
        }}
      >
        Filing Status:
      </p>
      <p
        style={{
          position: "absolute",
          top: "1.62in",
          left: "2.05in",
          width: "1.6in",
        }}
        className="edit"
        onClick={editStub}
        id="status"
      >
        {status}
      </p>
      <p style={{ position: "absolute", top: "1.76in", left: "1.38in" }}>
        Exemptions/Allowances:
      </p>
      <p style={{ position: "absolute", top: "1.89in", left: "1.52in" }}>
        Federal:
      </p>
      <p
        style={{
          position: "absolute",
          top: "1.89in",
          left: "1.955in",
          width: ".7in",
        }}
        onClick={editStub}
        className="edit"
        id="fed"
      >
        {fed}
      </p>
      <p
        id="stateTaxed"
        onClick={editStub}
        className="edit"
        style={{ position: "absolute", top: "2.01in", left: "1.52in" }}
      >
        {stateTaxed}:
      </p>
      <p
        onClick={editStub}
        className="edit"
        id="state"
        style={{ position: "absolute", top: "2.01in", left: "1.955in" }}
      >
        {state}
      </p>
    </div>
  );
}
