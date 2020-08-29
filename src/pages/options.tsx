import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/popup.css";

const countriesList = [
  {
    name: "Anguilla",
    value: "AIA",
  },
  {
    name: "Antigua and Barbuda",
    value: "ATG",
  },
  {
    name: "Argentina",
    value: "ARG",
  },
  {
    name: "Armenia",
    value: "ARM",
  },
  {
    name: "Australia",
    value: "AUS",
  },
  {
    name: "Austria",
    value: "AUT",
  },
  {
    name: "Azerbaijan",
    value: "AZE",
  },
  {
    name: "Bahamas",
    value: "BHS",
  },
  {
    name: "Bahrain",
    value: "BHR",
  },
  {
    name: "Barbados",
    value: "BRB",
  },
  {
    name: "Belarus",
    value: "BLR",
  },
  {
    name: "Belgium",
    value: "BEL",
  },
  {
    name: "Belize",
    value: "BLZ",
  },
  {
    name: "Bermuda",
    value: "BMU",
  },
  {
    name: "Bolivia",
    value: "BOL",
  },
  {
    name: "Botswana",
    value: "BWA",
  },
  {
    name: "Brazil",
    value: "BRA",
  },
  {
    name: "Brunei Darussalam",
    value: "BRN",
  },
  {
    name: "Bulgaria",
    value: "BGR",
  },
  {
    name: "Burkina Faso",
    value: "BFA",
  },
  {
    name: "Cambodia",
    value: "KHM",
  },
  {
    name: "Canada",
    value: "CAN",
  },
  {
    name: "Cape Verde",
    value: "CPV",
  },
  {
    name: "Cayman Islands",
    value: "CYM",
  },
  {
    name: "Chile",
    value: "CHL",
  },
  {
    name: "China",
    value: "CHN",
  },
  {
    name: "Colombia",
    value: "COL",
  },
  {
    name: "Costa Rica",
    value: "CRI",
  },
  {
    name: "Cyprus",
    value: "CYP",
  },
  {
    name: "Czech Republic",
    value: "CZE",
  },
  {
    name: "Denmark",
    value: "DNK",
  },
  {
    name: "Dominica",
    value: "DMA",
  },
  {
    name: "Dominican Republic",
    value: "DOM",
  },
  {
    name: "Ecuador",
    value: "ECU",
  },
  {
    name: "Egypt",
    value: "EGY",
  },
  {
    name: "El Salvador",
    value: "SLV",
  },
  {
    name: "Estonia",
    value: "EST",
  },
  {
    name: "Fiji",
    value: "FJI",
  },
  {
    name: "Finland",
    value: "FIN",
  },
  {
    name: "France",
    value: "FRA",
  },
  {
    name: "Gambia",
    value: "GMB",
  },
  {
    name: "Germany",
    value: "DEU",
  },
  {
    name: "Ghana",
    value: "GHA",
  },
  {
    name: "Greece",
    value: "GRC",
  },
  {
    name: "Grenada",
    value: "GRD",
  },
  {
    name: "Guatemala",
    value: "GTM",
  },
  {
    name: "Guinea-Bissau",
    value: "GNB",
  },
  {
    name: "Honduras",
    value: "HND",
  },
  {
    name: "Hong Kong",
    value: "HKG",
  },
  {
    name: "Hungary",
    value: "HUN",
  },
  {
    name: "India",
    value: "IND",
  },
  {
    name: "Indonesia",
    value: "IDN",
  },
  {
    name: "Ireland",
    value: "IRL",
  },
  {
    name: "Israel",
    value: "ISR",
  },
  {
    name: "Italy",
    value: "ITA",
  },
  {
    name: "Japan",
    value: "JPN",
  },
  {
    name: "Jordan",
    value: "JOR",
  },
  {
    name: "Kazakstan",
    value: "KAZ",
  },
  {
    name: "Kenya",
    value: "KEN",
  },
  {
    name: "Kyrgyzstan",
    value: "KGZ",
  },
  {
    name: "Lao People's Democratic Republic",
    value: "LAO",
  },
  {
    name: "Latvia",
    value: "LVA",
  },
  {
    name: "Lebanon",
    value: "LBN",
  },
  {
    name: "Lithuania",
    value: "LTU",
  },
  {
    name: "Luxembourg",
    value: "LUX",
  },
  {
    name: "Macau",
    value: "MAC",
  },
  {
    name: "Malaysia",
    value: "MYS",
  },
  {
    name: "Malta",
    value: "MLT",
  },
  {
    name: "Mauritius",
    value: "MUS",
  },
  {
    name: "Mexico",
    value: "MEX",
  },
  {
    name: "Federated States of Micronesia",
    value: "FSM",
  },
  {
    name: "Republic Of Moldova",
    value: "MDA",
  },
  {
    name: "Mongolia",
    value: "MNG",
  },
  {
    name: "Mozambique",
    value: "MOZ",
  },
  {
    name: "Namibia",
    value: "NAM",
  },
  {
    name: "Nepal",
    value: "NPL",
  },
  {
    name: "Netherlands",
    value: "NLD",
  },
  {
    name: "New Zealand",
    value: "NZL",
  },
  {
    name: "Nicaragua",
    value: "NIC",
  },
  {
    name: "Niger",
    value: "NER",
  },
  {
    name: "Nigeria",
    value: "NGA",
  },
  {
    name: "Norway",
    value: "NOR",
  },
  {
    name: "Oman",
    value: "OMN",
  },
  {
    name: "Panama",
    value: "PAN",
  },
  {
    name: "Papua New Guinea",
    value: "PNG",
  },
  {
    name: "Paraguay",
    value: "PRY",
  },
  {
    name: "Peru",
    value: "PER",
  },
  {
    name: "Philippines",
    value: "PHL",
  },
  {
    name: "Poland",
    value: "POL",
  },
  {
    name: "Portugal",
    value: "PRT",
  },
  {
    name: "Qatar",
    value: "QAT",
  },
  {
    name: "Romania",
    value: "ROU",
  },
  {
    name: "Russia",
    value: "RUS",
  },
  {
    name: "Saudi Arabia",
    value: "SAU",
  },
  {
    name: "Singapore",
    value: "SGP",
  },
  {
    name: "Slovakia",
    value: "SVK",
  },
  {
    name: "Slovenia",
    value: "SVN",
  },
  {
    name: "South Africa",
    value: "ZAF",
  },
  {
    name: "South Korea",
    value: "KOR",
  },
  {
    name: "Spain",
    value: "ESP",
  },
  {
    name: "Sri Lanka",
    value: "LKA",
  },
  {
    name: "St. Kitts and Nevis",
    value: "KNA",
  },
  {
    name: "Swaziland",
    value: "SWZ",
  },
  {
    name: "Sweden",
    value: "SWE",
  },
  {
    name: "Switzerland",
    value: "CHE",
  },
  {
    name: "Taiwan",
    value: "TWN",
  },
  {
    name: "Tajikistan",
    value: "TJK",
  },
  {
    name: "Thailand",
    value: "THA",
  },
  {
    name: "Trinidad and Tobago",
    value: "TTO",
  },
  {
    name: "Turkey",
    value: "TUR",
  },
  {
    name: "Turkmenistan",
    value: "TKM",
  },
  {
    name: "Uganda",
    value: "UGA",
  },
  {
    name: "UK",
    value: "GBR",
  },
  {
    name: "Ukraine",
    value: "UKR",
  },
  {
    name: "United Arab Emirates",
    value: "ARE",
  },
  {
    name: "USA",
    value: "USA",
  },
  {
    name: "Uzbekistan",
    value: "UZB",
  },
  {
    name: "Venezuela",
    value: "VEN",
  },
  {
    name: "Vietnam",
    value: "VNM",
  },
  {
    name: "British Virgin Islands",
    value: "VGB",
  },
  {
    name: "Zimbabwe",
    value: "ZWE",
  },
];

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      className="github"
      onClick={() => window.open("https://github.com/arunpdl", "blank")}
    >
      <path d="M15.5 22.7h-.1l-.1-.1v-3.1c0-.7-.1-1.3-.4-1.8 2.3-.4 4.8-1.6 4.8-6.1 0-1.2-.4-2.3-1.1-3.2.2-.6.3-1.7-.2-3.1l-.3-.3s-.2-.1-.4-.1c-.6 0-1.5.2-3 1.2-.8-.1-1.7-.3-2.7-.3-1 0-1.9.1-2.8.3C7.8 5.2 6.8 5 6.2 5c-.2 0-.3.1-.4.1-.1 0-.3.2-.3.3-.5 1.4-.4 2.5-.2 3.1-.7.9-1.1 2-1.1 3.2 0 4.4 2.6 5.6 4.8 6.1-.1.2-.2.5-.3.8-.2.1-.5.2-.9.2s-.8-.1-1.1-.4l-.1-.1c-.1-.1-.1-.2-.2-.2l-.1-.1-.1-.1c0-.1-.8-1.3-2.2-1.4-.5 0-.9.2-1 .5-.2.5.4.9.7 1.1 0 0 .6.3 1 1.4.2.7 1.1 2 3.2 2h.7v1.4l-.1.1s-.1 0 0 0C4 21.2 1 17 1 12.3c0-6.1 4.9-11 11-11s11 4.9 11 11c0 4.7-3 8.9-7.5 10.4z"></path>
    </svg>
  );
}

function Options() {
  const [activeLocale, setActiveLocale] = React.useState("USA");
  const [showSaved, setShowSaved] = React.useState(false);

  React.useEffect(() => {
    chrome.storage.sync.get({ locale: "USA" }, (result) => {
      setActiveLocale(result.locale);
    });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    chrome.storage.sync.set(
      {
        locale: activeLocale,
      },
      () => {
        setShowSaved(true);
        setTimeout(() => {
          setShowSaved(false);
        }, 2000);
      }
    );
  };

  return (
    <div className="options">
      <label htmlFor="countries" className="locale-label">
        Choose your Netflix locale
      </label>
      <br />
      <br />
      <select
        name="countries"
        id="countries"
        onChange={(e) => {
          setShowSaved(false);
          setActiveLocale(e.target.value);
        }}
      >
        {countriesList.map((eachCountry) => (
          <option
            value={eachCountry.value}
            selected={activeLocale === eachCountry.value}
          >
            {eachCountry.name}
          </option>
        ))}
      </select>
      <br />
      <br />
      <small className="note">
        Movie availability on Netflix is shown on Letterboxd based on the
        selected locale.
      </small>
      <br />
      <br />
      <button className="btn" onClick={handleSave}>
        Save
      </button>
      <GithubIcon />
      {showSaved && <p>Config Saved!</p>}
    </div>
  );
}

ReactDOM.render(<Options />, document.getElementById("root"));
