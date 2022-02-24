import { useEffect, useState } from "react";

import Map from "../Map/Map";
import DataTable from "../Tables/DataTable";
import Table from "../Tables/Table";
import CountryInfo from "./CountryInfo";
import DateSelectForm from "./DateSelectForm";
import GlobalInfo from "./GlobalInfo";

function Summary() {
  const [countries, setCountries] = useState([]);
  const [summary, setSummary] = useState({});
  const [isSummaryLoading, setIsSummaryLoading] = useState(true);

  const [dateRange, setDateRange] = useState("");
  const [dateChoice, setDateChoice] = useState("today");
  const [countryInfoInDateRange, setCountryInfoInDateRange] = useState([]);
  // to store the information of selected country
  const [selectedCountry, setSelectedCountry] = useState({});

  function dateSelectHandler(dtRange, dtChoice) {
    //console.log(dateRange);
    setDateRange(dtRange);
    setDateChoice(dtChoice);
    alert(
      "Information in the seleted date range would be displayed in table below."
    );
    console.log(dateRange);
  }

  function getCountries() {
    fetch("https://api.covid19api.com/countries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountries(data);
        //console.log(countries);
      });
  }

  function getSummary() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSummary(data);
        setIsSummaryLoading(false);
        console.log(summary);
      });
  }

  // read all the countries to know their Slug and IOS2
  useEffect(() => {
    getCountries();
  }, []);

  // load summary of cases for today
  useEffect(() => {
    getSummary();
  }, []);

  function onCountrySelectHandler(country, countryInfo) {
    //alert(country.Slug);
    //console.log(dateRange);

    //request total covid case data for selected country in the selected date range
    if (dateChoice === "Range" && dateRange !== "") {
      const url =
        "https://api.covid19api.com/total/country/" +
        country.Slug +
        "?" +
        dateRange;

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCountryInfoInDateRange(data);
          //setCountries(data);
          console.log(data);
        });
    }

    // country info for today's date
    setSelectedCountry(countryInfo);

    //console.log(selectedCountry);
  }

  if (isSummaryLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <GlobalInfo global={summary.Global} />

        <DateSelectForm onApply={dateSelectHandler} />

        <CountryInfo selectedCountry={selectedCountry} />

        <Map
          countries={countries}
          onCountrySelect={onCountrySelectHandler}
          countriesSummary={summary.Countries}
        />
        {dateChoice === "Range" && countryInfoInDateRange.length !== 0 ? (
          <Table data={countryInfoInDateRange} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Summary;
