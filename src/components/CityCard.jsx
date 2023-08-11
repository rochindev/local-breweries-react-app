import React from "react";
import { citiesInfo } from ".";
import "./icons"
import { flagNcheck } from "./icons";
import { Link, NavLink } from 'react-router-dom'

export default function CityCard () {

    const cities = citiesInfo

    return (
        <section className="cityCardSection">
            <div>
                {cities.map((city) => (
                  <NavLink to={city.id=="Tijuana"?"/local-breweries-react-app/tijuana":city.id=="Ensenada"?"/local-breweries-react-app/ensenada":"/local-breweries-react-app/mexicali"}>
                    <div className="location-card">
                        <div className="location-image">
                            <img src={city.image} alt="Location Image" />
                        </div>
                        <div className="location-info">
                            <h2 className="location-name">{city.id}</h2>
                            <p className="location-address">{city.description}</p>
                            <div className="location-tags">
                                {city.tags.map((tag) => (
                                    <div className={`tag-container ${
                                        tag.con === true ? "con" : "pro"
                                    }`}>
                                        <i className={
                                            `fa-regular ${
                                                tag.con === true ? flagNcheck.flag : flagNcheck.checkmark
                                            }`
                                            }></i>
                                        <p className="tag">{tag.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                  </NavLink>
                ))}
            </div>
        </section>
    )
}