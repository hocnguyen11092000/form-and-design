import { Select, Form } from "antd";
import React from "react";

const { Option } = Select;

function AutoComplete() {
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <Form.Item name="select" label="Select đi bạn" className="form-margin">
      <Select onChange={handleChange} placeholder="Please select">
        <Option value="1">Hello world 1</Option>
        <Option value="2">Hello world 2</Option>
        <Option value="3">Hello world 3</Option>
        <Option value="4">Hello world 4</Option>
      </Select>
    </Form.Item>
  );
}

export default AutoComplete;
