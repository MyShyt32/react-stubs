/* eslint-disable react/prop-types */
const dates = {
  begin: "11/20/2022",
  end: "11/26/2022",
  pay: "12/02/2022",
};

export function Dates({ handleEdit }) {
  const editStub = (e) => {
    const [input, stubContainer] = handleEdit(e);
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
  return (
    <>
      <div style={{ fontSize: "9pt", wordSpacing: ".04in" }}>
        <p
          style={{
            position: "absolute",
            top: ".53in",
            left: "4.92in",
            width: "1.05in",
          }}
        >
          Period Beginning:
        </p>
        <p
          style={{
            position: "absolute",
            top: ".7in",
            left: "4.92in",
            width: "1.05in",
          }}
        >
          Period Ending:
        </p>
        <p
          style={{
            position: "absolute",
            top: ".87in",
            left: "4.92in",
            width: "1.05in",
          }}
        >
          Pay Date:
        </p>
        <p
          style={{
            position: "absolute",
            top: "8.12in",
            left: "4.925in",
            width: "1.05in",
          }}
        >
          Pay date:
        </p>
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
          {dates.begin}
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
          {dates.end}
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
          {dates.pay}
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
          {dates.pay}
        </p>
      </div>
    </>
  );
}
