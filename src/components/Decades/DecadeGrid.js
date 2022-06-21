import React from "react"
import { Link } from "react-router-dom"

export const DecadeGrid = (props) => {
    return (
        <>

            <div className="supernatural_cont">
                <Link className="year_grid__link" to="/1950">1950's</Link>
            </div>

            <div className="scifi_cont">
                <Link className="year_grid__link" to="/1960">1960's</Link>
            </div>

            <div className="vampire_cont">
                <Link className="year_grid__link" to="/1970">1970's</Link>
            </div>

            <div className="zombie_cont">
                <Link className="year_grid__link" to="/1980">1980's</Link>
            </div>

            <div className="slasher_cont">
                <Link className="year_grid__link" to="/1990">1990's</Link>
            </div>

            <div className="witchcraft_cont">
                <Link className="year_grid__link" to="/2000">2000's</Link>
            </div>

            <div className="monster_cont">
                <Link className="year_grid__link" to="/2010">2010's</Link>
            </div>

            <div className="anthology_cont">
                <Link className="year_grid__link" to="/2020">2020's</Link>
            </div>
        </>
    )
}