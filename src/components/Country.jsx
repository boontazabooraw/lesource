"use client";

import { useEffect, useState } from "react"
import axios from "axios"
import ReactCountryFlag from "react-country-flag"

const Country = () => {

    const [country, setCountry] = useState({ countryCode: "" })

    const getCountry = () => {
        axios
            .get("https://ipapi.co/json")
            .then((res) => {
                let data = res.data;
                setCountry({
                    ...country,
                    countryCode: data.country_code
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getCountry()
    }, []);

    return (
        <div class="mx-2">
            {/* {state.countryName.toUpperCase() === "PHILIPPINES" ? */}
            <ReactCountryFlag
                countryCode={country.countryCode.toUpperCase()} svg />
            {/* : ""} */}
        </div>
    )
}

export default Country