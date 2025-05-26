import React, { useEffect, useState } from "react"
import axios from "axios"
import ReactCountryFlag from "react-country-flag"

const Country = () => {

    const [state, setState] = useState({ countryName: "" })

    const getCountry = () => {
        axios
            .get("https://ipapi.co/json")
            .then((res) => {
                let data = res.data;
                setState({
                    ...state,
                    countryName: data.country_name
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
            {state.countryName.toUpperCase() === "PHILIPPINES" ?
                <ReactCountryFlag
                    countryCode="PH" svg />
                : ""}
        </div>
    )
}

export default Country