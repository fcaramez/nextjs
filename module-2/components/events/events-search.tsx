import React, { useState } from "react";
import Button from "../ui/button";
import styled from "./events-search.module.css";

const EventsSearch = ({
  onSearch,
}: {
  onSearch: (year: string, month: string) => void;
}) => {
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSearch(year, month);
  };

  return (
    <form onSubmit={handleSubmit} className={styled.form}>
      <div className={styled.controls}>
        <div className={styled.control}>
          <label htmlFor="year">Year</label>
          <select onChange={(e) => setYear(e.target.value)} id="year">
            <option></option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styled.control}>
          <label htmlFor="month">Month</label>
          <select onChange={(e) => setMonth(e.target.value)} id="month">
            <option></option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
