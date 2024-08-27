/* eslint-disable react/prop-types */
import logoTop from "../../assets/adp/logo_top.png";
import logoBottom from "../../assets/adp/logo_bottom.png";
import hashBack1 from "../../assets/adp/hash_bg1.png";
import hashBack2 from "../../assets/adp/hash_bg2.png";
import hashBack3 from "../../assets/adp/hash_bg3.png";
import hashBack4 from "../../assets/adp/hash_bg4.png";
import earnings from "../../assets/adp/earnings.png";
import line17 from "../../assets/adp/line17.png";
import info from "../../assets/adp/info.png";
import notes from "../../assets/adp/notes.png";
import line8 from "../../assets/adp/line8.png";
import deductions from "../../assets/adp/deductions.png";
import netPayBG from "../../assets/adp/netPayBG.png";
import notAChckStmp from "../../assets/adp/notAChckStmp.png";
import netChckBG from "../../assets/adp/netChckBG.png";
import chckLn1 from "../../assets/adp/chckLn1.png";
import chckLn2 from "../../assets/adp/chckLn2.png";
import chckLn3 from "../../assets/adp/chckLn3.png";
import chckLn4 from "../../assets/adp/chckLn4.png";

export function ADPStubBG({ pos }) {
  let { statePos, fedPos, otPos, numstubs } = pos;

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
      </div>
      <p
        style={{
          position: "absolute",
          fontSize: "15pt",
          fontWeight: "bolder",
          wordSpacing: ".07in",
          top: ".025in",
          left: "4.856in",
          width: "2.1in",
        }}
      >
        Earnings Statement
      </p>

      <div>
        <img
          src={logoTop}
          style={{
            position: "absolute",
            width: ".65in",
            height: ".23in",
            top: ".22in",
            left: "7.455in",
          }}
        />
        <img
          src={logoBottom}
          style={{
            position: "absolute",
            width: ".62in",
            height: ".24in",
            top: ".442in",
            left: "7.455in",
          }}
        />
        <img
          src={hashBack1}
          style={{
            position: "absolute",
            width: "2.64in",
            height: ".03in",
            top: ".17in",
            left: "1.31in",
          }}
        />
        <img
          src={hashBack2}
          style={{
            position: "absolute",
            width: "2.64in",
            height: ".12in",
            top: ".19in",
            left: "1.31in",
          }}
        />
        <img
          src={hashBack3}
          style={{
            position: "absolute",
            width: "2.64in",
            height: ".12in",
            top: ".29in",
            left: "1.31in",
          }}
        />
        <img
          src={hashBack4}
          style={{
            position: "absolute",
            width: "2.64in",
            height: ".12in",
            top: ".4in",
            left: "1.31in",
          }}
        />
        <img
          src={earnings}
          style={{
            position: "absolute",
            width: "3.325in",
            height: ".15in",
            top: "2.58in",
            left: ".285in",
          }}
        />
        <img
          src={info}
          style={{
            position: "absolute",
            width: "2.215in",
            height: ".15in",
            top: "2.745in",
            left: "4.92in",
          }}
        />
        <img
          src={line17}
          style={{
            position: "absolute",
            width: ".8in",
            height: ".03in",
            top: "2.69in",
            left: "3.85in",
          }}
        />
        <img
          src={notes}
          style={{
            position: "absolute",
            width: "3.17in",
            height: ".14in",
            top: "3.33in",
            left: "4.92in",
          }}
        />
        <img
          src={line8}
          style={{
            position: "absolute",
            width: ".793in",
            height: ".03in",
            top: "2.863in",
            left: "7.316in",
          }}
        />
        <img
          src={deductions}
          style={{
            position: "absolute",
            width: "3.25in",
            height: ".13in",
            top: "3.335in",
            left: ".288in",
          }}
        />
        <img
          src={netPayBG}
          style={{
            position: "absolute",
            width: "2.245in",
            height: ".19in",
            top: 3.84 + statePos + fedPos + "in",
            left: "1.31in",
          }}
        />
        <img
          src={netChckBG}
          style={{
            position: "absolute",
            width: "2.245in",
            height: ".19in",
            top: 4.255 + statePos + fedPos + "in",
            left: "1.31in",
          }}
        />
        <img
          src={notAChckStmp}
          style={{
            position: "absolute",
            width: "5.16in",
            height: "2.18in",
            top: "8.22in",
            left: "1.14in",
          }}
        />
        <img
          src={chckLn1}
          style={{
            position: "absolute",
            width: "1.88in",
            height: ".01in",
            top: "9.05in",
            left: "1.38in",
          }}
        />
        <img
          src={chckLn2}
          style={{
            position: "absolute",
            width: "1.88in",
            height: ".01in",
            top: "9.05in",
            left: "3.2in",
          }}
        />
        <img
          src={chckLn3}
          style={{
            position: "absolute",
            width: "2.1in",
            height: ".01in",
            top: "9.05in",
            left: "5in",
          }}
        />
        <img
          src={chckLn4}
          style={{
            position: "absolute",
            width: "1.1in",
            height: ".01in",
            top: "9.05in",
            left: "7.04in",
          }}
        />
      </div>
      <p
        style={{
          fontSize: "16pt",
          fontWeight: "bold",
          position: "absolute",
          width: "2.1in",
          top: "9.725in",
          left: "5.53in",
        }}
      >
        NON-NEGOTIABLE
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "3pt",
          wordSpacing: ".04in",
          top: "7.5in",
          left: "7.45in",
          width: ".45in",
        }}
      >
        &copy; {"2000 ADP, Inc."}
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "8pt",
          fontWeight: "bold",
          wordSpacing: ".1in",
          top: "2.46in",
          left: "4.92in",
        }}
      >
        Other Benefits and
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "7pt",
          left: "6.44in",
          top: "2.64in",
          wordSpacing: ".054in",
          fontWeight: "bold",
        }}
      >
        this period
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "7pt",
          left: "7.415in",
          top: "2.64in",
          wordSpacing: ".059in",
          fontWeight: "bold",
        }}
      >
        total to date
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "7pt",
          left: "2.96in",
          top: "2.47in",
          wordSpacing: ".06in",
          fontWeight: "bold",
        }}
      >
        this period
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "7pt",
          left: "3.95in",
          top: "2.47in",
          wordSpacing: ".054in",
          fontWeight: "bold",
        }}
      >
        year to date
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          left: "1.32in",
          top: "3.17in",
          wordSpacing: ".054in",
          fontWeight: "bold",
        }}
      >
        Statutory
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: 3.72 + statePos + fedPos + "in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        Net Pay
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "9pt",
          left: "1.31in",
          top: 4.14 + statePos + fedPos + "in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        Net Check
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "8pt",
          left: "4.905in",
          top: "8.81in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        account number
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "8pt",
          left: "6.08in",
          top: "8.81in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        transit
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "8pt",
          left: "6.54in",
          top: "8.81in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        ABA
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "8pt",
          left: "7.67in",
          top: "8.81in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        amount
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "8pt",
          left: "6.12in",
          top: "8.965in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        xxxx
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "8pt",
          left: "6.47in",
          top: "8.965in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        xxxx
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "8pt",
          left: "1.375in",
          top: "8.81in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        Deposited to the account of
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "8pt",
          left: "4.93in",
          top: "7.965in",
          wordSpacing: ".05in",
          fontWeight: "bold",
        }}
      >
        Advice number:
      </p>
    </>
  );
}
