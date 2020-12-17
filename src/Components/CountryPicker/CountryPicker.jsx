import React, { useState, useEffect } from 'react'
import style from './CountryPicker.module.css'

import { FormControl, NativeSelect } from '@material-ui/core'
import { fetchCountryData } from '../../Api/index'

export function CountryPickers() {
    const [fetchDataCountries, setDataCountries] = useState([])
    useEffect(() => {
        const countryData = async () => {
            const response = await fetchCountryData()
            setDataCountries(response)
        }
        countryData()

    }, [setDataCountries])
    // console.log(fetchDataCountries)
    return (
        <div>
            <FormControl className={style.formcontrols}>
                <NativeSelect >
                    <option value="global">Global</option>
                    {fetchDataCountries.map((values, ind) =>
                        <option value={values} key={ind}>{values}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}