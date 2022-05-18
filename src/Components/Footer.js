import React from "react";

const Footer = () => {
  return (
    <div className=" overflow-hidden  relative pt-40">
      <svg
        className="absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fillOpacity=".1"
          d="M0,288L0,128L36.9,128L36.9,32L73.8,32L73.8,160L110.8,160L110.8,0L147.7,0L147.7,160L184.6,160L184.6,0L221.5,0L221.5,288L258.5,288L258.5,160L295.4,160L295.4,192L332.3,192L332.3,288L369.2,288L369.2,32L406.2,32L406.2,96L443.1,96L443.1,256L480,256L480,160L516.9,160L516.9,128L553.8,128L553.8,96L590.8,96L590.8,128L627.7,128L627.7,160L664.6,160L664.6,96L701.5,96L701.5,256L738.5,256L738.5,128L775.4,128L775.4,32L812.3,32L812.3,32L849.2,32L849.2,192L886.2,192L886.2,224L923.1,224L923.1,288L960,288L960,288L996.9,288L996.9,160L1033.8,160L1033.8,288L1070.8,288L1070.8,96L1107.7,96L1107.7,32L1144.6,32L1144.6,128L1181.5,128L1181.5,192L1218.5,192L1218.5,224L1255.4,224L1255.4,160L1292.3,160L1292.3,96L1329.2,96L1329.2,256L1366.2,256L1366.2,192L1403.1,192L1403.1,96L1440,96L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
        ></path>
      </svg>
      <p className="absolute bottom-0 inset-x-0 mt-10 mb-1  p-2 text-center">
        ToDo Mongo &copy; {new Date().getFullYear()} by{" "}
        <span className="font-semibold italic">Rahimuj570</span>
      </p>
    </div>
  );
};

export default Footer;
