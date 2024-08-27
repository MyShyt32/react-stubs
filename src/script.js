

function posEleLeft(ele, top, left){
    ele.style.position = "absolute"
    ele.style.top = top
    ele.style.left = left
}

function posEleRight(ele, top, right){
    ele.style.position = "absolute"
    ele.style.top = top
    ele.style.right = right
}

let pdfContainer = document.createElement("pdfContainer")

document.body.style.margin = 0
document.body.style.padding = 0
document.body.style.width = "100%"
document.body.style.height = "100%"
document.body.style.overflow = "hidden"
// document.body.style.position = "relative"

pdfContainer.style.width = "8.5in"
pdfContainer.style.height = "11in"
pdfContainer.style.position = "absolute"
pdfContainer.style.margin = 0
pdfContainer.style.padding = 0
pdfContainer.style.top = 0
pdfContainer.style.left = 0
document.body.appendChild(pdfContainer)

let heading = document.createElement("div")

heading.id = "heading"

pdfContainer.appendChild(heading)

let title = document.createElement("p")

title.innerText = "Earnings Statement"

title.classList = "_15pt bld"

title.style.wordSpacing = ".07in"

posEleLeft(title, ".07in", "4.845in")

heading.appendChild(title)

let logoTop = document.createElement("img")
let logoBottom = document.createElement("img")

logoTop.src = "ri_6.png"
logoBottom.src = "ri_7.png"

logoTop.id = "logoTop"
logoBottom.id = "logoBottom"

posEleLeft(logoTop, "0.195in", "7.445in")
posEleLeft(logoBottom, ".415in", "7.445in")

logoTop.style.width = ".65in"
logoTop.style.height = ".23in"

logoBottom.style.width = ".62in"
logoBottom.style.height = ".24in"

heading.appendChild(logoTop)
heading.appendChild(logoBottom)

let ri_5 = document.createElement("img")
let ri_4 = document.createElement("img")
let ri_3 = document.createElement("img")
let ri_2 = document.createElement("img")

ri_5.id = "ri_5"
ri_4.id = "ri_4"
ri_3.id = "ri_3"
ri_2.id = "ri_2"

ri_5.src = "ri_5.png"
ri_4.src = "ri_4.png"
ri_3.src = "ri_3.png"
ri_2.src = "ri_2.png"

posEleLeft(ri_5, "0.17in", "1.34in")
posEleLeft(ri_4, "0.19in", "1.34in")
posEleLeft(ri_3, "0.29in", "1.34in")
posEleLeft(ri_2, "0.4in", "1.34in")

ri_5.style.width = "2.64in"
ri_4.style.width = "2.64in"
ri_3.style.width = "2.64in"
ri_2.style.width = "2.64in"

ri_5.style.height = "0.03in"
ri_4.style.height = "0.12in"
ri_3.style.height = "0.12in"
ri_2.style.height = "0.12in"

ri_5.style.zIndex = "-1"
ri_4.style.zIndex = "-1"
ri_3.style.zIndex = "-1"
ri_2.style.zIndex = "-1"

pdfContainer.appendChild(ri_5)
pdfContainer.appendChild(ri_4)
pdfContainer.appendChild(ri_3)
pdfContainer.appendChild(ri_2)

let ri_16 = document.createElement("img")
let ri_17 = document.createElement("img")
let ri_27 = document.createElement("img")
let ri_24 = document.createElement("img")
let ri_13 = document.createElement("img")
let ri_8 = document.createElement("img")
let ri_19 = document.createElement("img")
let ri_33 = document.createElement("img")
let ri_35 = document.createElement("img")
let ri_39 = document.createElement("img")
let vi_1 = document.createElement("img")
let vi_2 = document.createElement("img")
let vi_3 = document.createElement("img")
let vi_4 = document.createElement("img")

ri_13.id = "ri_13"
ri_16.id = "ri_16"
ri_17.id = "ri_17"
ri_19.id = "ri_19"
ri_27.id = "ri_27"
ri_24.id = "ri_24"
ri_8.id = "ri_8"
ri_33.id = "ri_33"
ri_35.id = "ri_35"
ri_39.id = "ri_39"
vi_1.id = "vi_1"
vi_2.id = "vi_2"
vi_3.id = "vi_3"
vi_4.id = "vi_4"

ri_13.src = "ri_13.png"
ri_16.src = "ri_16.png"
ri_17.src = "ri_17.png"
ri_19.src = "ri_19.png"
ri_27.src = "ri_27.png"
ri_24.src = "ri_24.png"
ri_8.src = "ri_8.png"
ri_33.src = "ri_33.png"
ri_35.src = "ri_35.png"
ri_39.src = "ri_39.png"
vi_1.src = "vi_1.png"
vi_2.src = "vi_2.png"
vi_3.src = "vi_3.png"
vi_4.src = "vi_4.png"

posEleLeft(ri_13, "2.75in", "4.93in")
posEleLeft(ri_16, "2.59in", ".27in")
posEleLeft(ri_17, "2.705in", "3.85in")
posEleLeft(ri_19, "3.32in", "4.93in")
posEleLeft(ri_27, "3.32in", ".27in")
posEleLeft(ri_24, "3.07in", "1.33in")
posEleLeft(ri_8, "2.865in", "7.3in")
posEleLeft(ri_33, "4.05in", "1.33in")
posEleLeft(ri_35, "4.45in", "1.33in")
posEleLeft(ri_39, "8.22in", "1.14in")
posEleLeft(vi_1, "9.05in", "1.4in")
posEleLeft(vi_2, "9.05in", "3.2in")
posEleLeft(vi_3, "9.05in", "5in")
posEleLeft(vi_4, "9.05in", "7.04in")

vi_1.style.width = "1.88in"
vi_1.style.height = ".01in"
vi_2.style.width = "1.88in"
vi_2.style.height = ".01in"
vi_3.style.width = "2.1in"
vi_3.style.height = ".01in"
vi_4.style.width = "1.02in"
vi_4.style.height = ".01in"
ri_13.style.width = "2.23in"
ri_13.style.height = ".15in"
ri_16.style.width = "3.35in"
ri_16.style.height = ".15in"
ri_17.style.width = ".81in"
ri_17.style.height = ".03in"
ri_19.style.width = "3.17in"
ri_19.style.height = ".15in"
ri_27.style.width = "3.26in"
ri_27.style.height = ".15in"
ri_24.style.width = "2.2in"
ri_24.style.height = ".2in"
ri_8.style.width = ".79in"
ri_8.style.height = ".03in"
ri_33.style.width = "2.2in"
ri_33.style.height = ".18in"
ri_39.style.width = "5.16in"
ri_39.style.height = "2.18in"
ri_35.style.width = "2.2in"
ri_35.style.height = ".2in"

ri_39.style.zIndex = -1

pdfContainer.appendChild(vi_1)
pdfContainer.appendChild(vi_2)
pdfContainer.appendChild(vi_3)
pdfContainer.appendChild(vi_4)
pdfContainer.appendChild(ri_13)
pdfContainer.appendChild(ri_16)
pdfContainer.appendChild(ri_17)
pdfContainer.appendChild(ri_19)
pdfContainer.appendChild(ri_27)
pdfContainer.appendChild(ri_24)
pdfContainer.appendChild(ri_8)
pdfContainer.appendChild(ri_33)
pdfContainer.appendChild(ri_35)
pdfContainer.appendChild(ri_39)

let nonNego = document.createElement("p")
nonNego.id = "nonNego"
nonNego.innerText = "NON-NEGOTIABLE"
nonNego.classList = "bld _16pt"
posEleLeft(nonNego, "9.77in", "5.53in")
pdfContainer.appendChild(nonNego)

let rateTxt = document.createElement("p")
rateTxt.id = "rateTxt"
rateTxt.innerText = "rate"
rateTxt.classList = "bld _7pt"
posEleLeft(rateTxt, "2.45in", "1.825in")

pdfContainer.appendChild(rateTxt)

let hrsTxt = document.createElement("p")
hrsTxt.id = "hrsTxt"
hrsTxt.innerText = "hours"
hrsTxt.classList = "bld _7pt"
posEleLeft(hrsTxt, "2.45in", "2.35in")

pdfContainer.appendChild(hrsTxt)

let thisPerTxt = document.createElement("p")
thisPerTxt.id = "thisPerTxt"
thisPerTxt.innerText = "this period"
thisPerTxt.classList = "bld _7pt"
posEleLeft(thisPerTxt, "2.45in", "2.95in")
thisPerTxt.style.wordSpacing = ".06in"
pdfContainer.appendChild(thisPerTxt)

let ytdTxt = document.createElement("p")
ytdTxt.id = "ytdTxt"
ytdTxt.innerText = "year to date"
ytdTxt.classList = "bld _7pt"
posEleLeft(ytdTxt, "2.45in", "3.93in")
ytdTxt.style.wordSpacing = ".06in"
pdfContainer.appendChild(ytdTxt)

let othBenTxt = document.createElement("p")
othBenTxt.id = "othBenTxt"
othBenTxt.innerText = "Other Benefits and"
othBenTxt.classList = "bld _8pt"
othBenTxt.style.wordSpacing = ".08in"
posEleLeft(othBenTxt, "2.45in", "4.93in")
pdfContainer.appendChild(othBenTxt)

let othBenPerTxt = document.createElement("p")
othBenPerTxt.id = "othBenPerTxt"
othBenPerTxt.innerText = "this period"
othBenPerTxt.classList = "bld _7pt"
posEleLeft(othBenPerTxt, "2.63in", "6.45in")
othBenPerTxt.style.wordSpacing = ".06in"
pdfContainer.appendChild(othBenPerTxt)

let totalToDateTxt = document.createElement("p")
totalToDateTxt.id = "totalToDateTxt"
totalToDateTxt.innerText = "total to date"
totalToDateTxt.classList = "bld _7pt"
posEleLeft(totalToDateTxt, "2.63in", "7.4in")
totalToDateTxt.style.wordSpacing = ".06in"
pdfContainer.appendChild(totalToDateTxt)

let grossPayTxt = document.createElement("p")
grossPayTxt.id = "grossPayTxt"
grossPayTxt.innerText = "Gross Pay"
grossPayTxt.classList = "bld _9pt"
posEleLeft(grossPayTxt, "2.975in", "1.33in")
grossPayTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(grossPayTxt)

let netPayTxt = document.createElement("p")
netPayTxt.id = "netPayTxt"
netPayTxt.innerText = "Net Pay"
netPayTxt.classList = "bld _9pt"
posEleLeft(netPayTxt, "3.95in", "1.33in")
netPayTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(netPayTxt)

let netCheckTxt = document.createElement("p")
netCheckTxt.id = "netCheckTxt"
netCheckTxt.innerText = "Net Check"
netCheckTxt.classList = "bld _9pt"
posEleLeft(netCheckTxt, "4.35in", "1.33in")
netCheckTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(netCheckTxt)

let advNumTxt = document.createElement("p")
advNumTxt.id = "advNumTxt"
advNumTxt.innerText = "Advice number:"
advNumTxt.classList = "bld _9pt"
posEleLeft(advNumTxt, "7.95in", "4.9in")
advNumTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(advNumTxt)

let depoToTxt = document.createElement("p")
depoToTxt.id = "depoToTxt"
depoToTxt.innerText = "Deposited to the account of"
depoToTxt.classList = "bld _8pt"
posEleLeft(depoToTxt, "8.81in", "1.4in")
depoToTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(depoToTxt)

let accNumTxt = document.createElement("p")
accNumTxt.id = "accNumTxt"
accNumTxt.innerText = "account number"
accNumTxt.classList = "bld _8pt"
posEleLeft(accNumTxt, "8.81in", "4.9in")
accNumTxt.style.wordSpacing = ".045in"
pdfContainer.appendChild(accNumTxt)

let transitTxt = document.createElement("p")
transitTxt.id = "transitTxt"
transitTxt.innerText = "transit"
transitTxt.classList = "bld _8pt"
posEleLeft(transitTxt, "8.81in", "6.07in")
transitTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(transitTxt)

let abaTxt = document.createElement("p")
abaTxt.id = "abaTxt"
abaTxt.innerText = "ABA"
abaTxt.classList = "bld _8pt"
posEleLeft(abaTxt, "8.81in", "6.53in")
abaTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(abaTxt)

let amountTxt = document.createElement("p")
amountTxt.id = "amountTxt"
amountTxt.innerText = "amount"
amountTxt.classList = "bld _8pt"
posEleLeft(amountTxt, "8.81in", "7.6in")
amountTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(amountTxt)

let companyCodeTxt = document.createElement("p")
companyCodeTxt.id = "companyCodeTxt"
companyCodeTxt.innerText = "CO."
companyCodeTxt.classList = "_6pt"
posEleLeft(companyCodeTxt, ".15in", "1.39in")
companyCodeTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(companyCodeTxt)

let fileNumTxt = document.createElement("p")
fileNumTxt.id = "fileNumTxt"
fileNumTxt.innerText = "FILE"
fileNumTxt.classList = "_6pt"
posEleLeft(fileNumTxt, ".15in", "1.765in")
fileNumTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(fileNumTxt)

let deptNumTxt = document.createElement("p")
deptNumTxt.id = "deptNumTxt"
deptNumTxt.innerText = "DEPT."
deptNumTxt.classList = "_6pt"
posEleLeft(deptNumTxt, ".15in", "2.25in")
deptNumTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(deptNumTxt)

let clockTxt = document.createElement("p")
clockTxt.id = "clockTxt"
clockTxt.innerText = "CLOCK"
clockTxt.classList = "_6pt"
posEleLeft(clockTxt, ".15in", "2.7in")
clockTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(clockTxt)

let vchrNumTxt = document.createElement("p")
vchrNumTxt.id = "vchrNumTxt"
vchrNumTxt.innerText = "VCHR. NO."
vchrNumTxt.classList = "_6pt"
posEleLeft(vchrNumTxt, ".15in", "3.12in")
vchrNumTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(vchrNumTxt)

let periodBeginTxt = document.createElement("p")
periodBeginTxt.id = "periodBeginTxt"
periodBeginTxt.innerText = "Period Beginning:"
periodBeginTxt.classList = "_9pt"
posEleLeft(periodBeginTxt, ".57in", "4.92in")
periodBeginTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(periodBeginTxt)

let periodEndTxt = document.createElement("p")
periodEndTxt.id = "periodEndTxt"
periodEndTxt.innerText = "Period Ending:"
periodEndTxt.classList = "_9pt"
posEleLeft(periodEndTxt, ".72in", "4.92in")
periodEndTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(periodEndTxt)

let payDateTopTxt = document.createElement("p")
payDateTopTxt.id = "payDateTopTxt"
payDateTopTxt.innerText = "Pay Date:"
payDateTopTxt.classList = "_9pt"
posEleLeft(payDateTopTxt, ".87in", "4.92in")
payDateTopTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(payDateTopTxt)

let payDateBottTxt = document.createElement("p")
payDateBottTxt.id = "payDateBottTxt"
payDateBottTxt.innerText = "Pay date:"
payDateBottTxt.classList = "_9pt"
posEleLeft(payDateBottTxt, "8.15in", "4.9in")
payDateBottTxt.style.wordSpacing = ".04in"
pdfContainer.appendChild(payDateBottTxt)

let copyright = document.createElement("p")
copyright.id = "copyright"
let copySym = '\xa9'
copyright.innerText = copySym + ' 2000 ADP, Inc.'
copyright.classList = "_3pt"
posEleLeft(copyright, "7.5in", "7.45in")
copyright.style.wordSpacing = ".04in"
pdfContainer.appendChild(copyright)

let regHours = document.createElement("p")
regHours.id = "regHours"
regHours.classList = "_9pt"
posEleRight(regHours, "2.6in", "5.88in")
regHours.innerText = "40.00"
regHours.style.wordSpacing = ".06in"
makeField(regHours, "right")
pdfContainer.appendChild(regHours)

let otHours = document.createElement("p")
otHours.id = "otHours"
otHours.classList = "_9pt"
posEleRight(otHours, "2.75in", "5.88in")
otHours.innerText = "7.02"
otHours.style.wordSpacing = ".06in"
makeField(otHours, "right")
pdfContainer.appendChild(otHours)


///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
function posField(field, top, right, align){
    field.style.position = "absolute"
    field.style.top = eval(parseFloat(top) + .11) + "in"
    if(align == "right"){
        field.style.right = right
    }else if(align == "left"){
        field.style.left = right
    }
}

function close(input, field){
    if (input.field.caps == true){
        field.innerText = input.value.toUpperCase()
    }else{
    field.innerText = input.value
    }
    if (field.id == "regPayRate"){
        field.innerText = parseFloat(field.innerHTML).toFixed(4)
    }
    if (field.id == "regHours"){
        field.innerText = parseFloat(field.innerHTML).toFixed(2)
    }
    if (field.id == "otHours"){
        field.innerText = parseFloat(field.innerHTML).toFixed(2)
    }
    if (field.id == "regPayYTD"){
        field.innerText = parseFloat(field.innerHTML).toFixed(2)
    }
    if (field.id == "otPayYTD"){
        field.innerText = parseFloat(field.innerHTML).toFixed(2)
    }
    if (field.id == "socialSecTaxYTD"){
        field.innerText = parseFloat(field.innerHTML).toFixed(2)
    }
    pdfContainer.removeChild(input)
    field.style.visibility = "visible"
    
}

function edit(field, align){
    let input = document.createElement("input")
    input.style.width = field.width
    input.style.height = ".08in"
    input.value = field.innerText
    if(align == "right"){
        posField(input, field.style.top, field.style.right, align)
    }else if(align == "left"){
        posField(input, field.style.top, field.style.left, align)
    }
    // input.addEventListener("focusout", ()=>{
    //     close(input, field)
    // })
    /* input.addEventListener("focusout", (event)=>{
        
        close(input, field)
        
    }) */
    input.addEventListener("keyup", (event)=>{
        if (event.key === "Enter"){
            close(input, field)
        }
    })
    input.field = field
    input.addEventListener("change", (e)=>{
        close(input, field)
        if (input.field.id == "companyCode"){
            companyCode.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "employeeNameTop"){
            employeeNameBott.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "employeeNameBott"){
            employeeNameTop.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "employerNameTop"){
            employerNameBott.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "employerNameBott"){
            employerNameTop.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "employerAddLine1Top"){
            employerAddLine1Bott.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "employerAddLine1Bott"){
            employerAddLine1Top.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "employerAddLine2Top"){
            employerAddLine2Bott.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "employerAddLine2Bott"){
            employerAddLine2Top.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "employerAddLine3Top"){
            employerAddLine3Bott.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "employerAddLine3Bott"){
            employerAddLine3Top.innerText = (e.target.value).toUpperCase()
        }
        if (input.field.id == "payDate"){
            payDateBott.innerText = e.target.value
        }
        if (input.field.id == "payDateBott"){
            payDate.innerText = e.target.value
        }
        if (input.field.id == "regPayRate"){
            regPayThisPer.innerText = (parseFloat(input.field.innerText) * parseFloat(regHours.innerText)).toFixed(2)
            otPayRate.innerText = (parseFloat(e.target.value) * 1.5).toFixed(4)
            otPayThisPer.innerText = (parseFloat(otPayRate.innerText) * parseFloat(otHours.innerText)).toFixed(2)
            grossThisPer.innerText = "$" + (parseFloat(regPayThisPer.innerText) + parseFloat(otPayThisPer.innerText)).toFixed(2)
            socialSecTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.06).toFixed(2)
            medicareTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.0145).toFixed(2)
            stateIncTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.03).toFixed(2)
            netPay.innerText = "$" + (parseFloat((grossThisPer.innerText).replace('$', '')) + parseFloat(socialSecTax.innerText) + parseFloat(medicareTax.innerText) + parseFloat(stateIncTax.innerText)).toFixed(2)
            chckAccPay.innerText = (netPay.innerText).replace("$", "-")
            fedWageSentence.innerText = "Your federal taxable wages this period are " + grossThisPer.innerText + "."
            chckAmmount.innerText = netPay.innerText
        }
        if (input.field.id == "regHours"){
            regPayThisPer.innerText = (parseFloat(input.field.innerHTML) * parseFloat(regPayRate.innerText)).toFixed(2)
            otPayRate.innerText = (parseFloat(regPayRate.innerText) * 1.5).toFixed(4)
            otPayThisPer.innerText = (parseFloat(otPayRate.innerText) * parseFloat(otHours.innerText)).toFixed(2)
            grossThisPer.innerText = "$" + (parseFloat(regPayThisPer.innerText) + parseFloat(otPayThisPer.innerText)).toFixed(2)
            socialSecTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.06).toFixed(2)
            medicareTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.0145).toFixed(2)
            stateIncTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.03).toFixed(2)
            netPay.innerText = "$" + (parseFloat((grossThisPer.innerText).replace('$', '')) + parseFloat(socialSecTax.innerText) + parseFloat(medicareTax.innerText) + parseFloat(stateIncTax.innerText)).toFixed(2)
            chckAccPay.innerText = (netPay.innerText).replace("$", "-")
            fedWageSentence.innerText = "Your federal taxable wages this period are " + grossThisPer.innerText + "."
            chckAmmount.innerText = netPay.innerText
        }
        if (input.field.id == "otHours"){
            otPayThisPer.innerText = (parseFloat(e.target.value) * parseFloat(otPayRate.innerText)).toFixed(2)
            grossThisPer.innerText = "$" + (parseFloat(regPayThisPer.innerText) + parseFloat(otPayThisPer.innerText)).toFixed(2)
            socialSecTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.06).toFixed(2)
            medicareTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.0145).toFixed(2)
            stateIncTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.03).toFixed(2)
            netPay.innerText = "$" + (parseFloat((grossThisPer.innerText).replace('$', '')) + parseFloat(socialSecTax.innerText) + parseFloat(medicareTax.innerText) + parseFloat(stateIncTax.innerText)).toFixed(2)
            chckAccPay.innerText = (netPay.innerText).replace("$", "-")
            fedWageSentence.innerText = "Your federal taxable wages this period are " + grossThisPer.innerText + "."
            chckAmmount.innerText = netPay.innerText
        }
        if (input.field.id == "regPayYTD"){
            regPayYTD.innerText = (parseFloat(e.target.value)).toFixed(2)
            grossYTD.innerText = (parseFloat(e.target.value) + parseFloat(otPayYTD.innerText)).toFixed(2)
        }
        if (input.field.id == "otPayYTD"){
            otPayYTD.innerText = (parseFloat(e.target.value)).toFixed(2)
            grossYTD.innerText = (parseFloat(e.target.value) + parseFloat(regPayYTD.innerText)).toFixed(2)
        }
        if (input.field.id == "socialSecTaxYTD"){
            medicareTaxYTD.innerText = ((parseFloat(e.target.value) / parseFloat((socialSecTax.innerText).replace("-", ""))) * parseFloat((medicareTax.innerText).replace("-", ""))).toFixed(2)
            stateIncTaxYTD.innerText = ((parseFloat(e.target.value) / parseFloat((socialSecTax.innerText).replace("-", ""))) * parseFloat((stateIncTax.innerText).replace("-", ""))).toFixed(2)
        }
        
    })
    
    field.style.visibility = "hidden"
    pdfContainer.appendChild(input)
    input.focus()
}


function makeField(field, align){
    field.addEventListener("click", ()=>{
        edit(field, align)
        // console.log(field)
    } )
}

///////////////////////////////////
/////////////////////////////////////////////////////
//////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////
/////////////////////////////////////////////////////


let periodBegin = document.createElement("p")
periodBegin.id = "periodBegin"
periodBegin.classList = "_9pt num"
posEleRight(periodBegin, ".57in", "1.55in")
periodBegin.innerText = "11/20/2022"
periodBegin.style.wordSpacing = ".04in"
makeField(periodBegin, "right")
pdfContainer.appendChild(periodBegin)

let periodEnd = document.createElement("p")
periodEnd.id = "periodEnd"
periodEnd.classList = "_9pt num"
posEleRight(periodEnd, ".72in", "1.55in")
periodEnd.innerText = "11/20/2022"
periodEnd.style.wordSpacing = ".04in"
makeField(periodEnd, "right")
pdfContainer.appendChild(periodEnd)

let payDate = document.createElement("p")
payDate.id = "payDate"
payDate.classList = "_9pt num"
posEleRight(payDate, ".87in", "1.55in")
payDate.innerText = "11/20/2022"
payDate.style.wordSpacing = ".04in"
makeField(payDate, "right")
pdfContainer.appendChild(payDate)

let companyCode = document.createElement("p")
companyCode.id = "companyCode"
companyCode.classList = "_7pt bld"
posEleLeft(companyCode, ".23in", "1.4in")
companyCode.innerText = "AAK"
companyCode.style.wordSpacing = ".04in"
makeField(companyCode, "left")
pdfContainer.appendChild(companyCode)

let fileNum = document.createElement("p")
fileNum.id = "fileNum"
fileNum.classList = "_7pt"
posEleLeft(fileNum, ".23in", "1.75in")
fileNum.innerText = "449343"
fileNum.style.wordSpacing = ".04in"
makeField(fileNum, "left")
pdfContainer.appendChild(fileNum)

let deptNum = document.createElement("p")
deptNum.id = "deptNum"
deptNum.classList = "_7pt"
posEleLeft(deptNum, ".23in", "2.23in")
deptNum.innerText = "109200"
deptNum.style.wordSpacing = ".04in"
makeField(deptNum, "left")
pdfContainer.appendChild(deptNum)

let clock = document.createElement("p")
clock.id = "clock"
clock.classList = "_7pt"
posEleLeft(clock, ".23in", "2.7in")
clock.innerText = "1T12"
clock.style.wordSpacing = ".04in"
makeField(clock, "left")
pdfContainer.appendChild(clock)

let vchrNum = document.createElement("p")
vchrNum.id = "vchrNum"
vchrNum.classList = "_7pt"
posEleLeft(vchrNum, ".23in", "3.12in")
vchrNum.innerText = "0000497754"
vchrNum.style.wordSpacing = ".04in"
makeField(vchrNum, "left")
pdfContainer.appendChild(vchrNum)

let employerNameTop = document.createElement("p")
employerNameTop.id = "employerNameTop"
employerNameTop.caps = true
employerNameTop.classList = "_8pt ital"
posEleLeft(employerNameTop, ".59in", "1.4in")
employerNameTop.innerText = "AMAZON.COM SERVICES LLC"
employerNameTop.style.wordSpacing = ".06in"
makeField(employerNameTop, "left")
pdfContainer.appendChild(employerNameTop)

let employerAddLine1Top = document.createElement("p")
employerAddLine1Top.id = "employerAddLine1Top"
employerAddLine1Top.caps = true
employerAddLine1Top.classList = "_8pt ital"
posEleLeft(employerAddLine1Top, ".73in", "1.4in")
employerAddLine1Top.innerText = "ATTN: AMAZON PAYROLL"
employerAddLine1Top.style.wordSpacing = ".06in"
makeField(employerAddLine1Top, "left")
pdfContainer.appendChild(employerAddLine1Top)

let employerAddLine2Top = document.createElement("p")
employerAddLine2Top.id = "employerAddLine2Top"
employerAddLine2Top.caps = true
employerAddLine2Top.classList = "_8pt ital"
posEleLeft(employerAddLine2Top, ".89in", "1.4in")
employerAddLine2Top.innerText = "202 WESTLAKE AVE N"
employerAddLine2Top.style.wordSpacing = ".06in"
makeField(employerAddLine2Top, "left")
pdfContainer.appendChild(employerAddLine2Top)

let employerAddLine3Top = document.createElement("p")
employerAddLine3Top.id = "employerAddLine3Top"
employerAddLine3Top.caps = true
employerAddLine3Top.classList = "_8pt ital"
posEleLeft(employerAddLine3Top, "1.05in", "1.4in")
employerAddLine3Top.innerText = "SEATTLE, WA 98109"
employerAddLine3Top.style.wordSpacing = ".06in"
makeField(employerAddLine3Top, "left")
pdfContainer.appendChild(employerAddLine3Top)

let employerNameBott = document.createElement("p")
employerNameBott.id = "employerNameBott"
employerNameBott.caps = true
employerNameBott.classList = "_9pt"
posEleLeft(employerNameBott, "7.95in", "1.4in")
employerNameBott.innerText = employerNameTop.innerText
employerNameBott.style.wordSpacing = ".06in"
makeField(employerNameBott, "left")
pdfContainer.appendChild(employerNameBott)

let employerAddLine1Bott = document.createElement("p")
employerAddLine1Bott.id = "employerAddLine1Bott"
employerAddLine1Bott.caps = true
employerAddLine1Bott.classList = "_9pt"
posEleLeft(employerAddLine1Bott, "8.1in", "1.4in")
employerAddLine1Bott.innerText = employerAddLine1Top.innerText
employerAddLine1Bott.style.wordSpacing = ".06in"
makeField(employerAddLine1Bott, "left")
pdfContainer.appendChild(employerAddLine1Bott)

let employerAddLine2Bott = document.createElement("p")
employerAddLine2Bott.id = "employerAddLine2Bott"
employerAddLine2Bott.caps = true
employerAddLine2Bott.classList = "_9pt"
posEleLeft(employerAddLine2Bott, "8.3in", "1.4in")
employerAddLine2Bott.innerText = employerAddLine2Top.innerText
employerAddLine2Bott.style.wordSpacing = ".06in"
makeField(employerAddLine2Bott, "left")
pdfContainer.appendChild(employerAddLine2Bott)

let employerAddLine3Bott = document.createElement("p")
employerAddLine3Bott.id = "employerAddLine3Bott"
employerAddLine3Bott.caps = true
employerAddLine3Bott.classList = "_9pt"
posEleLeft(employerAddLine3Bott, "8.47in", "1.4in")
employerAddLine3Bott.innerText = employerAddLine3Top.innerText
employerAddLine3Bott.style.wordSpacing = ".06in"
makeField(employerAddLine3Bott, "left")
pdfContainer.appendChild(employerAddLine3Bott)

let employeeNameTop = document.createElement("p")
employeeNameTop.id = "employeeNameTop"
employeeNameTop.caps = true
employeeNameTop.classList = "_9pt bld"
posEleLeft(employeeNameTop, "1.48in", "5.15in")
employeeNameTop.innerText = "ROBERT STEWART"
employeeNameTop.style.wordSpacing = ".06in"
makeField(employeeNameTop, "left")
pdfContainer.appendChild(employeeNameTop)

let employeeAddLine1 = document.createElement("p")
employeeAddLine1.id = "employeeAddLine1"
employeeAddLine1.caps = true
employeeAddLine1.classList = "_9pt bld"
posEleLeft(employeeAddLine1, "1.63in", "5.15in")
employeeAddLine1.innerText = "10 PACKINGHOUSE ROAD"
employeeAddLine1.style.wordSpacing = ".06in"
makeField(employeeAddLine1, "left")
pdfContainer.appendChild(employeeAddLine1)

let employeeAddLine2 = document.createElement("p")
employeeAddLine2.id = "employeeAddLine2"
employeeAddLine2.caps = true
employeeAddLine2.classList = "_9pt bld"
posEleLeft(employeeAddLine2, "1.78in", "5.15in")
employeeAddLine2.innerText = "202"
employeeAddLine2.style.wordSpacing = ".06in"
makeField(employeeAddLine2, "left")
pdfContainer.appendChild(employeeAddLine2)

let employeeAddLine3 = document.createElement("p")
employeeAddLine3.id = "employeeAddLine3"
employeeAddLine3.caps = true
employeeAddLine3.classList = "_9pt bld"
posEleLeft(employeeAddLine3, "1.97in", "5.15in")
employeeAddLine3.innerText = "STATESBORO GA 30458"
employeeAddLine3.style.wordSpacing = ".06in"
makeField(employeeAddLine3, "left")
pdfContainer.appendChild(employeeAddLine3)

let taxInfoLine1 = document.createElement("p")
taxInfoLine1.id = "taxInfoLine1"
taxInfoLine1.classList = "_7pt"
posEleLeft(taxInfoLine1, "1.62in", "1.4in")
taxInfoLine1.innerText = "Filing Status: "
taxInfoLine1.style.wordSpacing = ".06in"
pdfContainer.appendChild(taxInfoLine1)

let taxInfoLine1_1 = document.createElement("p")
taxInfoLine1_1.id = "taxInfoLine1_1"
taxInfoLine1_1.classList = "_7pt"
posEleLeft(taxInfoLine1_1, "1.62in", "2.1in")
taxInfoLine1_1.innerText = "Single/Married filing seperately"
taxInfoLine1_1.style.wordSpacing = ".06in"
makeField(taxInfoLine1_1, "left")
pdfContainer.appendChild(taxInfoLine1_1)

let taxInfoLine2 = document.createElement("p")
taxInfoLine2.id = "taxInfoLine2"
taxInfoLine2.classList = "_7pt"
posEleLeft(taxInfoLine2, "1.76in", "1.4in")
taxInfoLine2.innerText = "Exemptions/Allowances:"
taxInfoLine2.style.wordSpacing = ".06in"
pdfContainer.appendChild(taxInfoLine2)

let taxInfoLine3 = document.createElement("p")
taxInfoLine3.id = "taxInfoLine3"
taxInfoLine3.classList = "_7pt"
posEleLeft(taxInfoLine3, "1.88in", "1.53in")
taxInfoLine3.innerText = "Federal: "
taxInfoLine3.style.wordSpacing = ".06in"
pdfContainer.appendChild(taxInfoLine3)

let taxInfoLine3_3 = document.createElement("p")
taxInfoLine3_3.id = "taxInfoLine3"
taxInfoLine3_3.classList = "_7pt"
posEleLeft(taxInfoLine3_3, "1.88in", "1.98in")
taxInfoLine3_3.innerText = "Tax blocked"
taxInfoLine3_3.style.wordSpacing = ".06in"
makeField(taxInfoLine3_3, "left")
pdfContainer.appendChild(taxInfoLine3_3)

let taxInfoLine4 = document.createElement("p")
taxInfoLine4.id = "taxInfoLine4"
taxInfoLine4.classList = "_7pt"
posEleLeft(taxInfoLine4, "2.01in", "1.53in")
taxInfoLine4.innerText = "GA:"
taxInfoLine4.style.wordSpacing = ".06in"
makeField(taxInfoLine4, "left")
pdfContainer.appendChild(taxInfoLine4)

let taxInfoLine4Num = document.createElement("p")
taxInfoLine4Num.id = "taxInfoLine4Num"
taxInfoLine4Num.classList = "_7pt"
posEleLeft(taxInfoLine4Num, "2.01in", "1.98in")
taxInfoLine4Num.innerText = "0"
taxInfoLine4Num.style.wordSpacing = ".06in"
makeField(taxInfoLine4Num, "left")
pdfContainer.appendChild(taxInfoLine4Num)

let regPayTitle = document.createElement("p")
regPayTitle.id = "regPayTitle"
regPayTitle.classList = "_9pt"
posEleLeft(regPayTitle, "2.6in", ".28in")
regPayTitle.innerText = "Regular"
regPayTitle.style.wordSpacing = ".06in"
pdfContainer.appendChild(regPayTitle)

let otPayTitle = document.createElement("p")
otPayTitle.id = "otPayTitle"
otPayTitle.classList = "_9pt"
posEleLeft(otPayTitle, "2.75in", ".28in")
otPayTitle.innerText = "Overtime"
otPayTitle.style.wordSpacing = ".06in"
pdfContainer.appendChild(otPayTitle)

let regPayRate = document.createElement("p")
regPayRate.id = "regPayRate"
regPayRate.classList = "_9pt"
posEleRight(regPayRate, "2.6in", "6.48in")
regPayRate.innerText = "15.5000"
regPayRate.style.wordSpacing = ".06in"
makeField(regPayRate, "right")
pdfContainer.appendChild(regPayRate)

let otPayRate = document.createElement("p")
otPayRate.id = "otPayRate"
otPayRate.classList = "_9pt"
posEleRight(otPayRate, "2.75in", "6.48in")
otPayRate.innerText = (parseFloat(regPayRate.innerText) * 1.5).toFixed(4)
otPayRate.style.wordSpacing = ".06in"
pdfContainer.appendChild(otPayRate)

let regPayThisPer = document.createElement("p")
regPayThisPer.id = "regPayThisPer"
regPayThisPer.classList = "_9pt"
posEleRight(regPayThisPer, "2.6in", "5.0in")
regPayThisPer.innerText = parseFloat(regPayRate.innerHTML * regHours.innerHTML).toFixed(2)
regPayThisPer.style.wordSpacing = ".06in"
pdfContainer.appendChild(regPayThisPer)

let otPayThisPer = document.createElement("p")
otPayThisPer.id = "otPayThisPer"
otPayThisPer.classList = "_9pt"
posEleRight(otPayThisPer, "2.75in", "5.0in")
otPayThisPer.innerText = parseFloat(otPayRate.innerText * otHours.innerText).toFixed(2)
otPayThisPer.style.wordSpacing = ".06in"
makeField(otPayThisPer, "right")
pdfContainer.appendChild(otPayThisPer)

let regPayYTD = document.createElement("p")
regPayYTD.id = "regPayYTD"
regPayYTD.classList = "_9pt"
posEleRight(regPayYTD, "2.6in", "3.85in")
regPayYTD.innerText = "431.68"
regPayYTD.style.wordSpacing = ".06in"
makeField(regPayYTD, "right")
pdfContainer.appendChild(regPayYTD)

let otPayYTD = document.createElement("p")
otPayYTD.id = "otPayYTD"
otPayYTD.classList = "_9pt"
posEleRight(otPayYTD, "2.75in", "3.85in")
otPayYTD.innerText = "431.68"
otPayYTD.style.wordSpacing = ".06in"
makeField(otPayYTD, "right")
pdfContainer.appendChild(otPayYTD)

let grossThisPer = document.createElement("p")
grossThisPer.id = "grossThisPer"
grossThisPer.classList = "_9pt bld"
posEleRight(grossThisPer, "2.98in", "5in")
grossThisPer.innerText = "$" + (parseFloat(regPayThisPer.innerText) + parseFloat(otPayThisPer.innerText)).toFixed(2)
grossThisPer.style.wordSpacing = ".06in"
pdfContainer.appendChild(grossThisPer)

let grossYTD = document.createElement("p")
grossYTD.id = "grossYTD"
grossYTD.classList = "_9pt"
posEleRight(grossYTD, "2.98in", "3.85in")
grossYTD.innerText = (parseFloat(regPayYTD.innerText) + parseFloat(otPayYTD.innerText)).toFixed(2)
grossYTD.style.wordSpacing = ".06in"
makeField(grossYTD, "right")
pdfContainer.appendChild(grossYTD)

let statutoryTitle = document.createElement("p")
statutoryTitle.id = "statutoryTitle"
statutoryTitle.classList = "_9pt bld"
posEleLeft(statutoryTitle, "3.18in", "1.33in")
statutoryTitle.innerText = "Statutory"
statutoryTitle.style.wordSpacing = ".06in"
pdfContainer.appendChild(statutoryTitle)

let socialSecTitle = document.createElement("p")
socialSecTitle.id = "socialSecTitle"
socialSecTitle.classList = "_9pt"
posEleLeft(socialSecTitle, "3.34in", "1.33in")
socialSecTitle.innerText = "Social Security Tax"
socialSecTitle.style.wordSpacing = ".06in"
pdfContainer.appendChild(socialSecTitle)

let socialSecTax = document.createElement("p")
socialSecTax.id = "socialSecTax"
socialSecTax.classList = "_9pt"
posEleRight(socialSecTax, "3.34in", "5in")
socialSecTax.innerText = parseFloat((grossThisPer.innerText).replace('$', '') * -.06).toFixed(2)
socialSecTax.style.wordSpacing = ".06in"
pdfContainer.appendChild(socialSecTax)

let socialSecTaxYTD = document.createElement("p")
socialSecTaxYTD.id = "socialSecTaxYTD"
socialSecTaxYTD.classList = "_9pt"
posEleRight(socialSecTaxYTD, "3.34in", "3.85in")
socialSecTaxYTD.innerText = "26.76"
socialSecTaxYTD.style.wordSpacing = ".06in"
makeField(socialSecTaxYTD, "right")
pdfContainer.appendChild(socialSecTaxYTD)

let medicareTitle = document.createElement("p")
medicareTitle.id = "medicareTitle"
medicareTitle.classList = "_9pt"
posEleLeft(medicareTitle, "3.5in", "1.33in")
medicareTitle.innerText = "Medicare Tax"
medicareTitle.style.wordSpacing = ".06in"
pdfContainer.appendChild(medicareTitle)

let medicareTax = document.createElement("p")
medicareTax.id = "medicareTax"
medicareTax.classList = "_9pt"
posEleRight(medicareTax, "3.5in", "5in")
medicareTax.innerText = parseFloat((grossThisPer.innerText).replace('$', '') * -.0145).toFixed(2)
medicareTax.style.wordSpacing = ".06in"
pdfContainer.appendChild(medicareTax)

let medicareTaxYTD = document.createElement("p")
medicareTaxYTD.id = "medicareTax"
medicareTaxYTD.classList = "_9pt"
posEleRight(medicareTaxYTD, "3.5in", "3.85in")
medicareTaxYTD.innerText = "6.26"
medicareTaxYTD.style.wordSpacing = ".06in"
makeField(medicareTaxYTD, "right")
pdfContainer.appendChild(medicareTaxYTD)

let stateIncTaxTitle = document.createElement("p")
stateIncTaxTitle.id = "stateIncTaxTitle"
stateIncTaxTitle.classList = "_9pt"
posEleLeft(stateIncTaxTitle, "3.67in", "1.33in")
stateIncTaxTitle.innerText = "GA State Income Tax"
stateIncTaxTitle.style.wordSpacing = ".06in"
makeField(stateIncTaxTitle, "left")
pdfContainer.appendChild(stateIncTaxTitle)

let stateIncTax = document.createElement("p")
stateIncTax.id = "stateIncTax"
stateIncTax.classList = "_9pt"
posEleRight(stateIncTax, "3.67in", "5in")
stateIncTax.innerText = parseFloat((grossThisPer.innerText).replace('$', '') * -.01).toFixed(2)
stateIncTax.style.wordSpacing = ".06in"
pdfContainer.appendChild(stateIncTax)

let stateIncTaxYTD = document.createElement("p")
stateIncTaxYTD.id = "stateIncTax"
stateIncTaxYTD.classList = "_9pt"
posEleRight(stateIncTaxYTD, "3.67in", "3.85in")
stateIncTaxYTD.innerText = "3.19"
stateIncTaxYTD.style.wordSpacing = ".06in"
makeField(stateIncTaxYTD, "right")
pdfContainer.appendChild(stateIncTaxYTD)

let netPay = document.createElement("p")
netPay.id = "netPay"
netPay.classList = "_9pt bld"
posEleRight(netPay, "3.95in", "5in")
netPay.innerText = "$" + parseFloat(parseFloat((grossThisPer.innerText).replace('$', '')) + parseFloat(socialSecTax.innerText) + parseFloat(medicareTax.innerText) + parseFloat(stateIncTax.innerText)).toFixed(2)
netPay.style.wordSpacing = ".06in"
pdfContainer.appendChild(netPay)

let chckAccTitle = document.createElement("p")
chckAccTitle.id = "chckAccTitle"
chckAccTitle.classList = "_9pt"
posEleLeft(chckAccTitle, "4.13in", "1.33in")
chckAccTitle.innerText = "Checking Acct 1"
chckAccTitle.style.wordSpacing = ".06in"
pdfContainer.appendChild(chckAccTitle)

let chckAccPay = document.createElement("p")
chckAccPay.id = "chckAccPay"
chckAccPay.classList = "_9pt"
posEleRight(chckAccPay, "4.13in", "5in")
chckAccPay.innerText = "-" + netPay.innerText.replace("$", "")
chckAccPay.style.wordSpacing = ".06in"
pdfContainer.appendChild(chckAccPay)

let netChckPay = document.createElement("p")
netChckPay.id = "netChckPay"
netChckPay.classList = "_9pt bld"
posEleRight(netChckPay, "4.35in", "5in")
netChckPay.innerText = "$0.00"
netChckPay.style.wordSpacing = ".06in"
pdfContainer.appendChild(netChckPay)

let fedWageSentence = document.createElement("p")
fedWageSentence.id = "fedWageSentence"
fedWageSentence.classList = "_9pt"
posEleLeft(fedWageSentence, "4.76in", "1.45in")
fedWageSentence.innerText = "Your federal taxable wages this period are " + grossThisPer.innerText + "."
fedWageSentence.style.wordSpacing = ".06in"
pdfContainer.appendChild(fedWageSentence)

let employeeNameBott = document.createElement("p")
employeeNameBott.id = "employeeNameBott"
employeeNameBott.caps = true
employeeNameBott.classList = "_8pt bld"
posEleLeft(employeeNameBott, "8.95in", "1.4in")
employeeNameBott.innerText = employeeNameTop.innerText
employeeNameBott.style.wordSpacing = ".06in"
makeField(employeeNameBott, "left")
pdfContainer.appendChild(employeeNameBott)

let accNum = document.createElement("p")
accNum.id = "accNum"
accNum.classList = "_8pt"
posEleLeft(accNum, "8.95in", "4.9in")
accNum.innerText = "xxxxxxxxx8430"
accNum.style.wordSpacing = ".06in"
pdfContainer.appendChild(accNum)

let transNum = document.createElement("p")
transNum.id = "transNum"
transNum.classList = "_8pt"
posEleLeft(transNum, "8.95in", "6.13in")
transNum.innerText = "xxxx"
transNum.style.wordSpacing = ".06in"
pdfContainer.appendChild(transNum)

let abaNum = document.createElement("p")
abaNum.id = "abaNum"
abaNum.classList = "_8pt"
posEleLeft(abaNum, "8.95in", "6.53in")
abaNum.innerText = "xxxx"
abaNum.style.wordSpacing = ".06in"
pdfContainer.appendChild(abaNum)

let chckAmmount = document.createElement("p")
chckAmmount.id = "chckAmmount"
chckAmmount.classList = "_8pt"
posEleRight(chckAmmount, "8.95in", ".43in")
chckAmmount.innerText = netPay.innerText
chckAmmount.style.wordSpacing = ".06in"
pdfContainer.appendChild(chckAmmount)

let advNum = document.createElement("p")
advNum.id = "advNum"
advNum.classList = "_9pt bld"
posEleLeft(advNum, "7.95in", "6.5in")
advNum.innerText = "00000497754"
advNum.style.wordSpacing = ".06in"
makeField(advNum, "left")
pdfContainer.appendChild(advNum)

let payDateBott = document.createElement("p")
payDateBott.id = "payDateBott"
payDateBott.classList = "_9pt"
posEleRight(payDateBott, "8.15in", "1.38in")
payDateBott.innerText = payDate.innerText
payDateBott.style.wordSpacing = ".06in"
makeField(payDateBott, "right")
pdfContainer.appendChild(payDateBott)

////////////////////////////////////////
///////////////////////////////////////////////
//////////////////////////////////////////////////////////////


var usStates = [
    {name: 'State', abbreviation: 'Null'},
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
    // { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    { name: 'GUAM', abbreviation: 'GU'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    // { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    // { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    { name: 'PALAU', abbreviation: 'PW'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    { name: 'PUERTO RICO', abbreviation: 'PR'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
];

var filingStatuses = [
    { name: 'Filing Status', value: 'Null'},
    { name: 'Single', value: 'Single'},
    { name: 'Head of Household', value: 'Head of Household'},
    { name: 'Married filing jointly', value: 'Married/Married filing jointly'},
    { name: 'Married filing separately', value: 'Single/Married filing separately'}
]

var federalExemptions = [
    { name: 'Federal Exemptions', value: 'Null'},
    { name: 'Exempt', value: 'Tax Blocked'},
    { name: '0', value: '0'},
    { name: '1', value: '1'},
    { name: '2', value: '2'},
    { name: '3', value: '3'},
    { name: '4', value: '4'},
    { name: '5', value: '5'},
    { name: '6', value: '6'},
    { name: '7', value: '7'},
    { name: '8', value: '8'},
    { name: '9', value: '9'},
    { name: '10', value: '10'}
]

var stateExemptions = [
    { name: 'State Exemptions', value: 'Null'},
    { name: 'Exempt', value: 'Tax Blocked'},
    { name: '0', value: '0'},
    { name: '1', value: '1'},
    { name: '2', value: '2'},
    { name: '3', value: '3'},
    { name: '4', value: '4'},
    { name: '5', value: '5'},
    { name: '6', value: '6'},
    { name: '7', value: '7'},
    { name: '8', value: '8'},
    { name: '9', value: '9'},
    { name: '10', value: '10'}
]

const payScheds = [
    { name: 'Pay Schedule', value: 'Null'},
    { name: 'Weekly', value: 'weekly'},
    { name: 'Bi-Weekly', value: 'bi-weekly'},
    { name: 'Monthly', value: 'monthly'},
]

const paidBys = [
    { name: 'Paid by the', value: 'Null'},
    { name: 'Hour', value: 'hour'},
    { name: 'Mile', value: 'mile'},
    { name: 'Salary', value: 'salary'}
]

function previewButtonClickHandler(){
    formContainer.style.display = "none"
    document.body.style.overflow = "visible"
    // window.print()

    function getFormattedDate(date) {
        const year = new Date(date).getFullYear();
      
        var month = (1 + new Date(date).getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
      
        var day = new Date(date).getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return month + '/' + day + '/' + year;
    }

    

    const d = new Date()
    let dow = d.getDay()
    var payday = d
    if (dow == 4 ) {
        // payday = d
        payDate.innerText = getFormattedDate(d)
        payDateBott.innerText = getFormattedDate(d)
        // console.log(" today is thursday")
    } else if ( dow > 4 || dow == 0) {
        payday = lastThurs(d, 4)
        payDate.innerText = getFormattedDate(payday)
        payDateBott.innerText = getFormattedDate(d)
        // console.log(d.setDate(d.getDate() - ((d.getDay() + 7 - dow ) % 7 || 7)))
    } else if ( dow < 4 && dow > 0) {
        payday = thisThurs(d, 4)
        payDate.innerText = getFormattedDate(payday)
        payDateBott.innerText = getFormattedDate(d)
    }
    
    // console.log(perEnd)

    employeeNameTop.innerText = (employeeFormName.value).toUpperCase()
    employeeNameBott.innerText = (employeeFormName.value).toUpperCase()
    employeeAddLine1.innerText = (employeeFormAddLine1.value).toUpperCase()
    if (employeeAddApt.value == "Apt/Suite" || employeeAddApt.value === "") {
        employeeAddLine2.innerText = (employeeCity.value + " " + employeeState.value + " " + employeeZip.value).toUpperCase()
        employeeAddLine3.innerText = ""
    } else {
        employeeAddLine2.innerText = (employeeAddApt.value).toUpperCase()
        employeeAddLine3.innerText = (employeeCity.value + " " + employeeState.value + " " + employeeZip.value).toUpperCase()
    }

    employerNameTop.innerText = (employerFormName.value).toUpperCase()
    employerNameBott.innerText = (employerFormName.value).toUpperCase()
    employerAddLine1Top.innerText = (employerFormAddLine1.value).toUpperCase()
    employerAddLine1Bott.innerText = (employerFormAddLine1.value).toUpperCase()
    if (employerAddApt.value == "Suite/ATTN" || employerAddApt.value === "") {
        employerAddLine2Top.innerText = (employerCity.value + " " + employerState.value + " " + employerZip.value).toUpperCase()
        employerAddLine2Bott.innerText = (employerCity.value + " " + employerState.value + " " + employerZip.value).toUpperCase()
        employerAddLine3Top.innerText = ""
        employerAddLine3Bott.innerText = ""
    } else {
        employerAddLine2Top.innerText = (employerAddApt.value).toUpperCase()
        employerAddLine2Bott.innerText = (employerAddApt.value).toUpperCase()
        employerAddLine3Top.innerText = (employerCity.value + " " + employerState.value + " " + employerZip.value).toUpperCase()
        employerAddLine3Bott.innerText = (employerCity.value + " " + employerState.value + " " + employerZip.value).toUpperCase()
    }

    taxInfoLine4.innerText = employeeState.value + ":"
    stateIncTaxTitle.innerText = employeeState.value + " State Income Tax"

    taxInfoLine1_1.innerText = filingStatus.value
    taxInfoLine3_3.innerText = federalExemption.value
    taxInfoLine4Num.innerText = stateExemption.value

    hrsTxt.innerText = paidBy.value + "s"

    regPayRate.innerText = (parseFloat(payRate.value)).toFixed(4)
    // otPayRate.innerText = (parseFloat(regPayRate.innerText) * 1.5).toFixed(4)

    if ( paidBy.value === "hour"){
        let neededHrs = parseFloat(minGrossPay.value) / parseFloat(payRate.value)
        if ( paySched.value === "weekly"){
            periodEnd.innerText = getFormattedDate(payday.setDate(payday.getDate() - 5))
            periodBegin.innerText = getFormattedDate(payday.setDate(payday.getDate() - 6))
            if ( neededHrs > 40) { 
                regHours.innerText = "40.00"
                let otNeeded = ((parseFloat(minGrossPay.value) / parseFloat(payRate.value) - 40 ) * parseFloat(payRate.value)) / parseFloat(otPayRate.innerText)
                if ( otNeeded <= 26){
                    otHours.innerText = (Math.random() * ( (otNeeded * 1.5) - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
                if ( otNeeded > 26 && otNeeded <= 28){
                    otHours.innerText = (Math.random() * ( (otNeeded * 1.4) - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2) 
                }
                if ( otNeeded > 28 && otNeeded <= 30){
                    otHours.innerText = (Math.random() * ( (otNeeded * 1.3) - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
                if ( otNeeded > 30 && otNeeded <= 33){
                    otHours.innerText = (Math.random() * ( (otNeeded * 1.2) - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
                if ( otNeeded > 33 && otNeeded <= 36){
                    otHours.innerText = (Math.random() * ( (otNeeded * 1.1) - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
                if ( otNeeded > 36 && otNeeded <= 40){
                    otHours.innerText = (Math.random() * ( 40 - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
            } else {
                otPayThisPer.innerText = "0"
                otPayTitle.style.display = 'none'
                otHours.style.display = 'none'
                otPayRate.style.display = 'none'
                otPayThisPer.style.display = 'none'
                otPayYTD.style.display = 'none'

                regHours.innerText = (Math.random() * (40 - neededHrs) + neededHrs).toFixed(2)
            }
        }
        if ( paySched.value === "bi-weekly"){
            periodEnd.innerText = getFormattedDate(payday.setDate(payday.getDate() - 5))
            periodBegin.innerText = getFormattedDate(payday.setDate(payday.getDate() - 13))
            if ( neededHrs > 80) {
                regHours.innerText = "80.00"
                let otNeeded = ((parseFloat(minGrossPay.value) / parseFloat(payRate.value) - 80 ) * parseFloat(payRate.value)) / parseFloat(otPayRate.innerText)
                if ( otNeeded <= 26){
                    otHours.innerText = (Math.random() * ( (otNeeded * 1.5) - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
                if ( otNeeded > 26 && otNeeded <= 28){
                    otHours.innerText = (Math.random() * ( (otNeeded * 1.4) - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
                if ( otNeeded > 28 && otNeeded <= 30){
                    otHours.innerText = (Math.random() * ( (otNeeded * 1.3) - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
                if ( otNeeded > 30 && otNeeded <= 33){
                    otHours.innerText = (Math.random() * ( (otNeeded * 1.2) - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
                if ( otNeeded > 33 && otNeeded <= 36){
                    otHours.innerText = (Math.random() * ( (otNeeded * 1.1) - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
                if ( otNeeded > 36 && otNeeded <= 40){
                    otHours.innerText = (Math.random() * ( 40 - Math.ceil(otNeeded) ) + Math.ceil(otNeeded) ).toFixed(2)
                }
            } else {
                otPayThisPer.innerText = "0"
                otPayTitle.style.display = 'none'
                otHours.style.display = 'none'
                otPayRate.style.display = 'none'
                otPayThisPer.style.display = 'none'
                otPayYTD.style.display = 'none'

                regHours.innerText = (Math.random() * (80 - neededHrs) + neededHrs).toFixed(2)
            }
        }
        regPayThisPer.innerText = (parseFloat(regHours.innerText) * parseFloat(regPayRate.innerText)).toFixed(2)
        grossThisPer.innerText = "$" + (parseFloat(regPayThisPer.innerText) + parseFloat(otPayThisPer.innerText)).toFixed(2)
        socialSecTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.06).toFixed(2)
        medicareTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.0145).toFixed(2)
        stateIncTax.innerText = (parseFloat((grossThisPer.innerText).replace('$', '')) * -0.01).toFixed(2)
        netPay.innerText = "$" + (parseFloat((grossThisPer.innerText).replace('$', '')) + parseFloat(socialSecTax.innerText) + parseFloat(medicareTax.innerText) + parseFloat(stateIncTax.innerText)).toFixed(2)
        chckAccPay.innerText = (netPay.innerText).replace("$", "-")
        fedWageSentence.innerText = "Your federal taxable wages this period are " + grossThisPer.innerText + "."
        chckAmmount.innerText = netPay.innerText

    }
    if ( paidBy.value === "mile") {
        if ( paySched.value === "weekly"){
            periodEnd.innerText = getFormattedDate(payday.setDate(payday.getDate() - 5))
            periodBegin.innerText = getFormattedDate(payday.setDate(payday.getDate() - 6))

        }
        if ( paySched.value === "bi-weekly"){
            periodEnd.innerText = getFormattedDate(payday.setDate(payday.getDate() - 5))
            periodBegin.innerText = getFormattedDate(payday.setDate(payday.getDate() - 13))

        }
        if ( paySched.value === "monthly"){
            payDate.innerText = getFormattedDate(payday.setDate(3))
            payDateBott.innerText = getFormattedDate(payday.setDate(3))
            periodEnd.innerText = getFormattedDate(payday.setDate(payday.getDate() - payday.getDate()))
            periodBegin.innerText = getFormattedDate(payday.setDate(payday.getDate() + 1 - payday.getDate()))
        }
    }
    if ( paidBy.value === "salary") {
        if ( paySched.value === "weekly"){
            periodEnd.innerText = getFormattedDate(payday.setDate(payday.getDate() - 5))
            periodBegin.innerText = getFormattedDate(payday.setDate(payday.getDate() - 6))
        }
        if ( paySched.value === "bi-weekly"){
            periodEnd.innerText = getFormattedDate(payday.setDate(payday.getDate() - 5))
            periodBegin.innerText = getFormattedDate(payday.setDate(payday.getDate() - 13))
        }
        if ( paySched.value === "monthly"){
            payDate.innerText = getFormattedDate(payday.setDate(3))
            payDateBott.innerText = getFormattedDate(payday.setDate(3))
            periodEnd.innerText = getFormattedDate(payday.setDate(payday.getDate() - payday.getDate()))
            periodBegin.innerText = getFormattedDate(payday.setDate(payday.getDate() + 1 - payday.getDate()))
        }
    }
    

    /* let otNeeded = ((parseFloat(minGrossPay.value) / parseFloat(payRate.value) - 40 ) * parseFloat(payRate.value)) / parseFloat(otPayRate.innerText)
     */


    // let otNeeded = neededHrs - 40

    
    // console.log(((parseFloat(minGrossPay.value) / parseFloat(payRate.value) - 40 ) * parseFloat(payRate.value)) / parseFloat(otPayRate.innerText))
}


let formContainer = document.createElement("div")
formContainer.style.position = "relative"
formContainer.style.display = "flex"
formContainer.style.alignItems = "center"
formContainer.style.justifyContent = "center"
formContainer.style.backgroundColor = "black"
formContainer.style.width = "100vw"
formContainer.style.height = "100vh"
formContainer.style.border = "1px solid red"
document.body.appendChild(formContainer)

let formCard = document.createElement("div")
formCard.style.display = "flex"
formCard.style.flexDirection = "column"
formCard.style.backgroundColor = "white"
formCard.style.width = "75%"
formCard.style.height = "75%"
formCard.style.padding = "2% 2%"
formContainer.appendChild(formCard)

let employeeFormTitle = document.createElement("p")
employeeFormTitle.innerText = "Your Info:"
formCard.appendChild(employeeFormTitle)

let employeeFormName = document.createElement("input")
employeeFormName.value = "Your Name"
employeeFormName.onfocus = function () { if (this.value === "Your Name") { this.value = ""}}
formCard.appendChild(employeeFormName)

let employeeFormAddLine1Div = document.createElement("div")
employeeFormAddLine1Div.style.display = "flex"
employeeFormAddLine1Div.style.flexDirection = "row"
// employeeFormAddLine1Div.style.width = "100%"
formCard.appendChild(employeeFormAddLine1Div)


let employeeFormAddLine1 = document.createElement("input")
employeeFormAddLine1.defaultValue = "Your street address"
employeeFormAddLine1.onfocus = function () { if (this.value === "Your street address") { this.value = ""}}
employeeFormAddLine1.style.width = "66.6%"
employeeFormAddLine1Div.appendChild(employeeFormAddLine1)

let employeeAddApt = document.createElement("input")
employeeAddApt.style.width = "33.3%"
employeeAddApt.defaultValue = "Apt/Suite"
employeeAddApt.onfocus = function () { if (this.value === "Apt/Suite") { this.value = ""}}
employeeFormAddLine1Div.appendChild(employeeAddApt)

let employeeFormAddLine2Div = document.createElement("div")
employeeFormAddLine2Div.style.display = "flex"
employeeFormAddLine2Div.style.flexDirection = "row"
employeeFormAddLine2Div.style.width = "100%"
formCard.appendChild(employeeFormAddLine2Div)

let employeeCity = document.createElement("input")
employeeCity.style.width = "33.3%"
employeeCity.defaultValue = "City"
employeeCity.onfocus = function () { if (this.value === "City") { this.value = ""}}
employeeFormAddLine2Div.appendChild(employeeCity)

let employeeState = document.createElement("select")
employeeState.style.width = "33.3%"
for(var i = 0; i < usStates.length; i++) {
    var option = document.createElement("option");
    option.text = usStates[i].name;
    option.value = usStates[i].abbreviation;
    employeeState.add(option);
}
employeeFormAddLine2Div.appendChild(employeeState)

let employeeZip = document.createElement("input")
employeeZip.defaultValue = "Zipcode"
employeeZip.style.width = "33.3%"
employeeZip.onfocus = function () { if (this.value === "Zipcode") { this.value = ""}}
employeeFormAddLine2Div.appendChild(employeeZip)

let employerFormTitle = document.createElement("p")
employerFormTitle.innerText = "Employer Info:"
formCard.appendChild(employerFormTitle)

let employerFormName = document.createElement("input")
employerFormName.value = "Employer Name"
employerFormName.onfocus = function () { if (this.value === "Employer Name") { this.value = ""}}
formCard.appendChild(employerFormName)

let employerFormAddLine1Div = document.createElement("div")
employerFormAddLine1Div.style.display = "flex"
employerFormAddLine1Div.style.flexDirection = "row"
formCard.appendChild(employerFormAddLine1Div)


let employerFormAddLine1 = document.createElement("input")
employerFormAddLine1.defaultValue = "Employer street address"
employerFormAddLine1.onfocus = function () { if (this.value === "Employer street address") { this.value = ""}}
employerFormAddLine1.style.width = "66.6%"
employerFormAddLine1Div.appendChild(employerFormAddLine1)

let employerAddApt = document.createElement("input")
employerAddApt.defaultValue = "Suite/ATTN"
employerAddApt.onfocus = function () { if (this.value === "Suite/ATTN") { this.value = ""}}
employerFormAddLine1Div.appendChild(employerAddApt)

let employerFormAddLine2Div = document.createElement("div")
employerFormAddLine2Div.style.display = "flex"
employerFormAddLine2Div.style.flexDirection = "row"
// employerFormAddLine2Div.style.width = "100%"
formCard.appendChild(employerFormAddLine2Div)

let employerCity = document.createElement("input")
employerCity.style.width = "33.3%"
employerCity.defaultValue = "City"
employerCity.onfocus = function () { if (this.value === "City") { this.value = ""}}
employerFormAddLine2Div.appendChild(employerCity)

let employerState = document.createElement("select")
employerState.style.width = "33.3%"
for(let i = 0; i < usStates.length; i++) {
    let option = document.createElement("option");
    option.text = usStates[i].name;
    option.value = usStates[i].abbreviation;
    employerState.add(option);
}
employerFormAddLine2Div.appendChild(employerState)

let employerZip = document.createElement("input")
employerZip.defaultValue = "Zipcode"
employerZip.style.width = "33.3%"
employerZip.onfocus = function () { if (this.value === "Zipcode") { this.value = ""}}
employerFormAddLine2Div.appendChild(employerZip)

let taxInfoTitle = document.createElement("p")
taxInfoTitle.innerText = "Tax Info:"
formCard.appendChild(taxInfoTitle)

let taxDiv = document.createElement("div")
taxDiv.style.display = "flex"
taxDiv.style.flexDirection = "row"
formCard.appendChild(taxDiv)

let filingStatus = document.createElement("select")
filingStatus.style.width = "33.3%"
for(let i = 0; i < filingStatuses.length; i++) {
    let option = document.createElement("option");
    option.text = filingStatuses[i].name;
    option.value = filingStatuses[i].value;
    filingStatus.add(option);
}
taxDiv.appendChild(filingStatus)

let federalExemption = document.createElement("select")
federalExemption.style.width = "33.3%"
for(let i = 0; i < federalExemptions.length; i++) {
    let option = document.createElement("option");
    option.text = federalExemptions[i].name;
    option.value = federalExemptions[i].value;
    federalExemption.add(option);
}
taxDiv.appendChild(federalExemption)

let stateExemption = document.createElement("select")
stateExemption.style.width = "33.3%"
for(let i = 0; i < stateExemptions.length; i++) {
    let option = document.createElement("option");
    option.text = stateExemptions[i].name;
    option.value = stateExemptions[i].value;
    stateExemption.add(option);
}
taxDiv.appendChild(stateExemption)

let payInfoTitle = document.createElement("p")
payInfoTitle.innerText = "Pay Info:"
formCard.appendChild(payInfoTitle)

let paySched = document.createElement("select")
// paySched.style.width = "33.3%"
for(let i = 0; i < payScheds.length; i++) {
    let option = document.createElement("option");
    option.text = payScheds[i].name;
    option.value = payScheds[i].value;
    paySched.add(option);
}
formCard.appendChild(paySched)


let paidBy = document.createElement("select")
// paySched.style.width = "33.3%"
for(let i = 0; i < paidBys.length; i++) {
    let option = document.createElement("option");
    option.text = paidBys[i].name;
    option.value = paidBys[i].value;
    paidBy.add(option);
}
/* paidBy.onchange = function () {
    if ( paidBy.value === "salary") {
        paySched.value = "monthly"
    }
} */
formCard.appendChild(paidBy)

let payRate = document.createElement("input")
payRate.defaultValue = "Pay Rate"
payRate.onfocus = function () { if (this.value == "Pay Rate") {this.value = ""}}
formCard.appendChild(payRate)

let minGrossPay = document.createElement("input")
minGrossPay.defaultValue = "Minimum Gross Pay"
minGrossPay.onfocus = function () { if (this.value == "Minimum Gross Pay") {this.value = ""}}
formCard.appendChild(minGrossPay)











let previewButton = document.createElement("button")
previewButton.style.backgroundColor = "blue"
previewButton.style.width = "fit-content"
previewButton.style.height = "fit-content"
previewButton.style.color = "white"
previewButton.textContent = "Preview"
previewButton.onclick = previewButtonClickHandler
previewButton.style.alignSelf = "center"
previewButton.style.borderRadius = "10px"
previewButton.style.fontSize = "10pt"
previewButton.style.fontWeight = "bold"


formCard.appendChild(previewButton)


//////////////////////////////////////////////////////////////
///////////////////////////////////////////////
////////////////////////////////////////













function getFormattedDate(date) {
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }




document.id = "index"

const now = new Date()
const week = moment(now).format('D')

// console.log(week)



function thisThurs( d, dow ){
    // d.setDate(d.getDate() + 7)
    d.setDate((dow - d.getDay()) + d.getDate())
    return d
}



function nextThurs(d, dow){
    d.setDate(d.getDate() + (dow+(7-d.getDay())) % 7);
    return d;
}
function lastThurs(d, dow){
    d.setDate(d.getDate() - ((d.getDay() + 7 - dow ) % 7 || 7))/* (dow+(7-d.getDay())) % 7); */
    let date = getFormattedDate(d)
    return date;
}




window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }