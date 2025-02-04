import { DatePicker, Space } from "antd";
import moment from "moment";
import { useState } from "react";

const { RangePicker } = DatePicker;

export default function DatePick() {
  const [dates, setDates] = useState<string[]>([]);

  return (
    <>
      <Space direction="vertical" size={12}>
        <RangePicker
          onChange={(values) => {
            setDates(
              values
                ? values.map((item) => moment(item).format("YYYY-MM-DD"))
                : []
            );
          }}
          placeholder={["Ida", "Vuelta"]}
        />
      </Space>
    </>
  );
}
