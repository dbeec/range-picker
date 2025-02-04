import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

type DateRangePickerProps = {
  initialStartDate?: string;
  initialEndDate?: string;
  onChange?: (startDate: string, endDate: string) => void;
};

const DateRangePicker: React.FC<DateRangePickerProps> = ({ initialStartDate = "", initialEndDate = "", onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate ? new Date(initialStartDate) : null);
  const [endDate, setEndDate] = useState<Date | null>(initialEndDate ? new Date(initialEndDate) : null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (onChange && start && end) {
      onChange(start.toISOString().split("T")[0], end.toISOString().split("T")[0]);
    }
  };

  return (
    <div className="date-range-picker">
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        customInput={
          <div className="date-inputs">
            <input
              type="text"
              value={startDate ? startDate.toISOString().split("T")[0] : ""}
              readOnly
              placeholder="Fecha de ida"
              className="date-input"
            />
            <input
              type="text"
              value={endDate ? endDate.toISOString().split("T")[0] : ""}
              readOnly
              placeholder="Fecha de regreso"
              className="date-input"
            />
          </div>
        }
        calendarClassName="custom-calendar"
      />

      probando
    </div>
  );
};

export default DateRangePicker;