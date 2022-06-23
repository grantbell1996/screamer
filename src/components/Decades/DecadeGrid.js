import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchHorrorMoviesFromAPI, fetchSingleMovieFromAPI } from "../Movies/MovieManager"
import "./DecadeGrid.css"
import fiftyTile from "../../images/fiftyheader.png"
import sixtyTile from "../../images/1960header.jpg"
import seventyTile from "../../images/1970header.jpeg"
import eightyTile from "../../images/1980header.webp"
import ninetyTile from "../../images/1990header.jpeg"
import twoTile from "../../images/2000header.jpeg"
import twoTenTile from "../../images/2010header.jpeg"
import twoTwoTile from "../../images/2022header.jpeg"

export const DecadeGrid = (props) => {

    return (
        <>

        <div className="decade_grid"> 
            <div className="decade_tile">
            
                <Link className="year_grid__link" to="/1950">
                    <img className="decade_bg" src={fiftyTile} alt=""/>
                        <div className="decade_hover">1950's</div>
                </Link>
            </div>

            <div className="decade_tile">
                <Link className="year_grid__link" to="/1960">
                    <img className="decade_bg" src={sixtyTile} alt=""/>
                        <div className="decade_hover">1960's</div>
                </Link>
            </div>

            <div className="decade_tile">
                <Link className="year_grid__link" to="/1970">
                    <img className="decade_bg" src={seventyTile} alt=""/>
                    <div className="decade_hover">1970's</div>
                </Link>
            </div>

            <div className="decade_tile">
                <Link className="year_grid__link" to="/1980">
                    <img className="decade_bg" src={eightyTile} alt=""/>
                    <div className="decade_hover">1980's</div>
                </Link>
            </div>

            <div className="decade_tile">
                <Link className="year_grid__link" to="/1990">
                    <img className="decade_bg" src={ninetyTile} alt=""/>
                    <div className="decade_hover">1990's</div> 
                </Link>
            </div>

            <div className="decade_tile">
                <Link className="year_grid__link" to="/2000">
                    <img className="decade_bg" src={twoTile} alt=""/>
                    <div className="decade_hover">2000's</div> 
                </Link>
            </div>

            <div className="decade_tile">
                <Link className="year_grid__link" to="/2010">
                    <img className="decade_bg" src={twoTenTile} alt=""/>
                    <div className="decade_hover">2010's</div>
                </Link>
            </div>

            <div className="decade_tile">
                <Link className="year_grid__link" to="/2020">
                    <img className="decade_bg" src={twoTwoTile} alt=""/>
                    <div className="decade_hover">2020's</div> 
                </Link>
            </div>

        </div>    
        </>
    )
}