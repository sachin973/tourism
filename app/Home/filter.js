import React, { useState, useEffect } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';
import locationIcon from '../images/location.svg'; // Assuming the image path

const FlightSearch = ({ tab, checkBox }) => {
    const [tripType, setTripType] = useState("roundtrip");
    const [travelers, setTravelers] = useState(1);
    const [leavingFrom, setLeavingFrom] = useState("");
    const [goingTo, setGoingTo] = useState("");
    const [hotelMenu, setHotelMenu] = useState(false);
    const [departingDate, setDepartingDate] = useState(getTodayDate());
    const [returningDate, setReturningDate] = useState(getNextDayDate());
    const [cities, setCities] = useState([{
        leavingFrom: "",
        goingTo: "",
    }]);

    // Helper functions
    function getTodayDate() {
        const today = new Date();
        return today.toISOString().split("T")[0];
    }

    function getNextDayDate() {
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay.toISOString().split("T")[0];
    }

    useEffect(() => {
        const departing = new Date(departingDate);
        const returning = new Date(returningDate);
        if (returning <= departing) {
            const nextDay = new Date(departing);
            nextDay.setDate(departing.getDate() + 1);
            setReturningDate(nextDay.toISOString().split("T")[0]);
        }
    }, [departingDate]);

    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
    };

    const handleLeavingFromChange = (index, value) => {
        const newCities = [...cities];
        newCities[index].leavingFrom = value;
        setCities(newCities);
    };

    const handleGoingToChange = (index, value) => {
        const newCities = [...cities];
        newCities[index].goingTo = value;
        setCities(newCities);
    };

    const handleDepartingDateChange = (e) => {
        setDepartingDate(e.target.value);
    };

    const handleReturningDateChange = (e) => {
        setReturningDate(e.target.value);
    };

    const addCity = () => {
        if (cities.length < 5) {
            setCities([...cities, { leavingFrom: "", goingTo: "" }]);
        }
    };

    const removeCity = (index) => {
        if (cities.length > 1) {
            setCities(cities.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="">
            {tab === "Flights" && (
                <div className="search-fields relative">
                    <div className="search-field">
                        <label>Leaving From</label>
                        <div className="input-container">
                            <Image src={locationIcon} alt="icon" />
                            <input
                                className="leaving_from_input"
                                type="text"
                                placeholder="Leaving From"
                                value={leavingFrom}
                                onChange={(e) => setLeavingFrom(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="search-field">
                        <label>Going To</label>
                        <div className="input-container">
                            <Image src={locationIcon} alt="icon" />
                            <input
                                className="leaving_from_input"
                                type="text"
                                placeholder="Going To"
                                value={goingTo}
                                onChange={(e) => setGoingTo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="search-field">
                        <label>Departing</label>
                        <div className="date-input-container">
                            <CalendarMonthIcon />
                            <input
                                type="date"
                                className="custom-date-input"
                                value={departingDate}
                                onChange={handleDepartingDateChange}
                            />
                        </div>
                    </div>

                    <div className="search-field">
                        <label>Returning</label>
                        <div className="date-input-container relative">
                            <CalendarMonthIcon />
                            <input
                                type="date"
                                className="custom-date-input"
                                value={returningDate}
                                onChange={handleReturningDateChange}
                                disabled={checkBox === 'One'}
                            />
                            {checkBox === 'One' && <div className="date-disable"></div>}
                        </div>
                    </div>

                    <div className="search-field">
                        <label>Travelers & Class</label>
                        <div className="custom-select">
                            <select
                                value={travelers}
                                onChange={(e) => setTravelers(e.target.value)}
                            >
                                <option value={1}>1 Traveler</option>
                                <option value={2}>2 Travelers</option>
                                <option value={3}>3 Travelers</option>
                            </select>
                        </div>
                    </div>

                    <button className="search-btn">Search Now</button>
                </div>
            )}

            {tab === "Hotels" && (
                <div className="search-fields relative">
                    <div className="search-field">
                        <label>Leaving From</label>
                        <div className="input-container">
                            <Image src={locationIcon} alt="icon" />
                            <input
                                className="leaving_from_input"
                                type="text"
                                placeholder="Leaving From"
                                value={leavingFrom}
                                onChange={(e) => setLeavingFrom(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="search-field">
                        <label>Departing</label>
                        <div className="date-input-container">
                            <CalendarMonthIcon />
                            <input
                                type="date"
                                className="custom-date-input"
                                value={departingDate}
                                onChange={handleDepartingDateChange}
                            />
                        </div>
                    </div>

                    <div className="search-field">
                        <label>Returning</label>
                        <div className="date-input-container relative">
                            <CalendarMonthIcon />
                            <input
                                type="date"
                                className="custom-date-input"
                                value={returningDate}
                                onChange={handleReturningDateChange}
                                disabled={checkBox === 'One'}
                            />
                            {checkBox === 'One' && <div className="date-disable"></div>}
                        </div>
                    </div>

                    <div className="search-field">
                        <label>Adult/Child & Rooms</label>
                        <div className="custom_select_menu" onClick={() => setHotelMenu(!hotelMenu)}>
                            2 Travellers, 1 Room
                        </div>
                        {hotelMenu && (
                            <div className="hotel_menu">
                                <label>Room 1</label>
                                <div className="hotel_menu_table flex justify-between">
                                    <div>
                                        <label>Adult 12+ yrs</label>
                                        <div className="calculate flex items-center">
                                            <div className="plus_side">+</div>
                                            <div className="center">1</div>
                                            <div className="negative_side">-</div>
                                        </div>
                                    </div>
                                    <div>
                                        <label>Child 2-11 yrs</label>
                                        <div className="calculate flex items-center">
                                            <div className="plus_side">+</div>
                                            <div className="center">1</div>
                                            <div className="negative_side">-</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="search-field">
                        <label>Nationality</label>
                        <div className="custom-select">
                            <select
                                value={travelers}
                                onChange={(e) => setTravelers(e.target.value)}
                            >
                                <option value={1}>1 Traveler</option>
                                <option value={2}>2 Travelers</option>
                                <option value={3}>3 Travelers</option>
                            </select>
                        </div>
                    </div>

                    <button className="search-btn">Search Now</button>
                </div>
            )}

            {/* Rest of the component... */}
        </div>
    );
};

export default FlightSearch;
