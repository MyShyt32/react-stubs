// function posField(field, top, right, align) {
//   field.style.position = "absolute";
//   field.style.top = eval(parseFloat(top) + 0.12) + "in";
//   if (align == "right") {
//     field.style.right = right;
//   } else if (align == "left") {
//     field.style.left = right;
//   }
// }

// function close(input, field) {
//   if (field.caps && field.caps == true) {
//     field.innerText = input.value.toUpperCase();
//   } else {
//     field.innerText = input.value;
//   }
//   if (field.id == "payRate") {
//     field.innerText = parseFloat(field.innerHTML).toFixed(4);
//   }
//   if (field.id == "regHours") {
//     field.innerText = parseFloat(field.innerHTML).toFixed(2);
//   }
//   // if (field.id == "otHours") {
//   //   field.innerText = parseFloat(field.innerHTML).toFixed(2);
//   // }
//   if (field.id == "regYTD") {
//     field.innerText = parseFloat(field.innerHTML).toFixed(2);
//   }
//   // if (field.id == "otPayYTD") {
//   //   field.innerText = parseFloat(field.innerHTML).toFixed(2);
//   // }
//   if (field.id == "ssTaxYTD") {
//     field.innerText = parseFloat(field.innerHTML).toFixed(2);
//   }
//   stubContainer.removeChild(input);
//   field.style.visibility = "visible";
// }

export function Edit({ stubInfo, setStubInfo }) {
  console.log(stubInfo.employeeName);

  // e.target.style.display = "none";
  // let stubContainer = document.getElementById("stubContainer");
  // let field = document.getElementById(e.target.id);
  // let input = document.createElement("input");
  // input.style.width = field.style.width;
  // input.style.height = ".1in";
  // input.value = field.innerText;
  // if (field.style.direction == "rtl") {
  //   posField(input, field.style.top, field.style.right, "right");
  // } else {
  //   posField(input, field.style.top, field.style.left, "left");
  // }
  // input.addEventListener("keyup", (event) => {
  //   if (event.key === "Enter") {
  //     close(input, field);
  //   }
  // });
  // input.field = field;

  // input.addEventListener("change", (e) => {
  // close(input, field);
  // if (input.field.id == "companyCode") {
  //   companyCode.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "employeeNameTop") {
  //   employeeNameBott.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "employeeNameBottom") {
  //   employeeNameTop.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "employerNameTop") {
  //   employerNameBott.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "employerNameBottom") {
  //   employerNameTop.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "employerAddress1Top") {
  //   employerAddress1Bottom.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "employerAddress1Bottom") {
  //   employerAddLine1Top.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "employerAddress2Top") {
  //   employerAddress2Bottom.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "employerAddress2Bottom") {
  //   employerAddress2Top.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "employerAddress3Top") {
  //   employerAddress3Bottom.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "employerAddress3Bottom") {
  //   employerAddress3Top.innerText = e.target.value.toUpperCase();
  // }
  // if (input.field.id == "payDateTop") {
  //   payDateBott.innerText = e.target.value;
  // }
  // if (input.field.id == "payDateBott") {
  //   payDateTop.innerText = e.target.value;
  // }
  // if (input.field.id == "payRate") {
  //   regPayThisPer.innerText = (
  //     parseFloat(input.field.innerText) * parseFloat(regHours.innerText)
  //   ).toFixed(2);
  // otPayRate.innerText = (parseFloat(e.target.value) * 1.5).toFixed(4);
  // otPayThisPer.innerText = (
  //   parseFloat(otPayRate.innerText) * parseFloat(otHours.innerText)
  // ).toFixed(2);
  // grossThisPer.innerText =
  //   "$" +
  //   (
  //     parseFloat(regPayThisPer.innerText) +
  //     parseFloat(otPayThisPer.innerText)
  //   ).toFixed(2);
  //     socialSecTax.innerText = (
  //       parseFloat(grossThisPer.innerText.replace("$", "")) * -0.06
  //     ).toFixed(2);
  //     medicareTax.innerText = (
  //       parseFloat(grossThisPer.innerText.replace("$", "")) * -0.0145
  //     ).toFixed(2);
  //     stateIncTax.innerText = (
  //       parseFloat(grossThisPer.innerText.replace("$", "")) * -0.03
  //     ).toFixed(2);
  //     netPay.innerText =
  //       "$" +
  //       (
  //         parseFloat(grossThisPer.innerText.replace("$", "")) +
  //         parseFloat(socialSecTax.innerText) +
  //         parseFloat(medicareTax.innerText) +
  //         parseFloat(stateIncTax.innerText)
  //       ).toFixed(2);
  //     chckAccPay.innerText = netPay.innerText.replace("$", "-");
  //     fedWageSentence.innerText =
  //       "Your federal taxable wages this period are " +
  //       grossThisPer.innerText +
  //       ".";
  //     chckAmount.innerText = netPay.innerText;
  //   }
  //   if (input.field.id == "regHours") {
  //     regPayThisPer.innerText = (
  //       parseFloat(input.field.innerHTML) * parseFloat(payRate.innerText)
  //     ).toFixed(2);
  //     otPayRate.innerText = (parseFloat(payRate.innerText) * 1.5).toFixed(4);
  //     otPayThisPer.innerText = (
  //       parseFloat(otPayRate.innerText) * parseFloat(otHours.innerText)
  //     ).toFixed(2);
  //     grossThisPer.innerText =
  //       "$" +
  //       (
  //         parseFloat(regPayThisPer.innerText) +
  //         parseFloat(otPayThisPer.innerText)
  //       ).toFixed(2);
  //     socialSecTax.innerText = (
  //       parseFloat(grossThisPer.innerText.replace("$", "")) * -0.06
  //     ).toFixed(2);
  //     medicareTax.innerText = (
  //       parseFloat(grossThisPer.innerText.replace("$", "")) * -0.0145
  //     ).toFixed(2);
  //     stateIncTax.innerText = (
  //       parseFloat(grossThisPer.innerText.replace("$", "")) * -0.03
  //     ).toFixed(2);
  //     netPay.innerText =
  //       "$" +
  //       (
  //         parseFloat(grossThisPer.innerText.replace("$", "")) +
  //         parseFloat(socialSecTax.innerText) +
  //         parseFloat(medicareTax.innerText) +
  //         parseFloat(stateIncTax.innerText)
  //       ).toFixed(2);
  //     chckAccPay.innerText = netPay.innerText.replace("$", "-");
  //     fedWageSentence.innerText =
  //       "Your federal taxable wages this period are " +
  //       grossThisPer.innerText +
  //       ".";
  //     chckAmmount.innerText = netPay.innerText;
  //   }
  //   if (input.field.id == "otHours") {
  //     otPayThisPer.innerText = (
  //       parseFloat(e.target.value) * parseFloat(otPayRate.innerText)
  //     ).toFixed(2);
  //     grossThisPer.innerText =
  //       "$" +
  //       (
  //         parseFloat(regPayThisPer.innerText) +
  //         parseFloat(otPayThisPer.innerText)
  //       ).toFixed(2);
  //     socialSecTax.innerText = (
  //       parseFloat(grossThisPer.innerText.replace("$", "")) * -0.06
  //     ).toFixed(2);
  //     medicareTax.innerText = (
  //       parseFloat(grossThisPer.innerText.replace("$", "")) * -0.0145
  //     ).toFixed(2);
  //     stateIncTax.innerText = (
  //       parseFloat(grossThisPer.innerText.replace("$", "")) * -0.03
  //     ).toFixed(2);
  //     netPay.innerText =
  //       "$" +
  //       (
  //         parseFloat(grossThisPer.innerText.replace("$", "")) +
  //         parseFloat(socialSecTax.innerText) +
  //         parseFloat(medicareTax.innerText) +
  //         parseFloat(stateIncTax.innerText)
  //       ).toFixed(2);
  //     chckAccPay.innerText = netPay.innerText.replace("$", "-");
  //     fedWageSentence.innerText =
  //       "Your federal taxable wages this period are " +
  //       grossThisPer.innerText +
  //       ".";
  //     chckAmmount.innerText = netPay.innerText;
  //   }
  //   if (input.field.id == "regPayYTD") {
  //     regPayYTD.innerText = parseFloat(e.target.value).toFixed(2);
  //     grossYTD.innerText = (
  //       parseFloat(e.target.value) + parseFloat(otPayYTD.innerText)
  //     ).toFixed(2);
  //   }
  //   if (input.field.id == "otPayYTD") {
  //     otPayYTD.innerText = parseFloat(e.target.value).toFixed(2);
  //     grossYTD.innerText = (
  //       parseFloat(e.target.value) + parseFloat(regPayYTD.innerText)
  //     ).toFixed(2);
  //   }
  //   if (input.field.id == "socialSecTaxYTD") {
  //     medicareTaxYTD.innerText = (
  //       (parseFloat(e.target.value) /
  //         parseFloat(socialSecTax.innerText.replace("-", ""))) *
  //       parseFloat(medicareTax.innerText.replace("-", ""))
  //     ).toFixed(2);
  //     stateIncTaxYTD.innerText = (
  //       (parseFloat(e.target.value) /
  //         parseFloat(socialSecTax.innerText.replace("-", ""))) *
  //       parseFloat(stateIncTax.innerText.replace("-", ""))
  //     ).toFixed(2);
  //   }
  // });

  // field.style.visibility = "hidden";
  // stubContainer.appendChild(input);
  // input.focus();
  // console.log(ele.style.top);
}

// export function Test(...props) {
//   console.log(props.stubInfo.employeeName);
// }
