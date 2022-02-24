import { useEffect, useState } from "react";

import Map from "../Map/Map";
import CountryInfo from "./CountryInfo";
import DateSelectForm from "./DateSelectForm";
import GlobalInfo from "./GlobalInfo";

function Summary() {
  const [countries, setCountries] = useState([]);
  const [summary, setSummary] = useState({});
  const [isSummaryLoading, setIsSummaryLoading] = useState(true);
  const [dateRange, setDateRange] = useState("");
  // to store the information of selected country
  const [selectedCountry, setSelectedCountry] = useState({});

  function dateSelectHandler(dtRange) {
    //console.log(dateRange);
    setDateRange(dtRange);
    //console.log(dateRange);
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

    // request covid case data for selected country in the selected date range
    // const url =
    //   "https://api.covid19api.com/country/" + country.Slug + "?" + dateRange;
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     //setCountries(data);
    //     console.log(data);
    //   });

    // as of now show the country info for today's date
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
      </div>
    );
  }
}

export default Summary;
