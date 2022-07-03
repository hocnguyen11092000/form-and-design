import React from "react";
import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import moment from "moment";
import { useEffect, useState, useRef } from "react";
import { getFieldChange } from "../../../utils/getFieldChange";
import AutoComplete from "./auto-complete/AutoComplete";

const { Option } = Select;
const { TextArea } = Input;
const { Panel } = Collapse;

function DiaryForm({ form, heading }) {
  const [value, setValue] = useState({});
  const [disabled, setDisabled] = useState(true);
  // const [formdata, setFormData] = useState();
  const formRef = useRef(null);

  useEffect(() => {
    const res = getFieldChange(init, value);
    // let arr = ["test", "test2"];
    // if (Object.keys(res).includes(...arr)) {
    //   res["test"] = res["test"] && res["test"].toDate();
    //   setFormData(res);
    // }

    if (Object.keys(res).length !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  form.setFields([
    {
      name: "name",
      errors: ["có lỗi "],
    },
  ]);

  const init = {
    time: "1",
    name: "2",
    select: "select",
    count: "123",
    price: "456",
    total: "5465",
    test: moment("2015/01/01", dateFormat),
    test2: moment("2015/01/01", dateFormat),
  };

  const handleFinish = () => {
    const data = getFieldChange(init, value);
    // let obj = {
    //   ...data,
    //   ...formdata,
    // };
    console.log(data);
  };

  // const validateMessages = {
  //   required: "${name} phải có nha bạn",
  //   string: {
  //     min: "nhỏ nhất ${min} kí tự",
  //   },
  // };

  const onValuesChange = (value) => {
    setValue((pre) => {
      return {
        ...pre,
        ...value,
      };
    });
  };

  const dateFormat = "YYYY/MM/DD";

  const handleDateChange = (value, string) => {
    // form.setFieldsValue({
    //   test: value.toDate(),
    // });
  };

  const handleFieldsChange = (a, b) => {
    // let obj = {};
    // b.forEach((item) => {
    //   console.log(item);
    //   if (item.touched && item.name.includes("test")) {
    //     setValue((pre) => {
    //       return {
    //         ...pre,
    //         ...item.value.toDate(),
    //       };
    //     });
    //   }
    // });
  };

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <Panel
        header={heading}
        key="1"
        style={{
          border: "1px solid #bfbfbf",
          marginBottom: "0.875rem",
          color: "#096dd9",
          borderRadius: "5px",
        }}
      >
        <div className="form-container-product-return">
          <Form
            // validateMessages={validateMessages}
            onFieldsChange={handleFieldsChange}
            ref={formRef}
            onValuesChange={onValuesChange}
            initialValues={init}
            form={form}
            layout="vertical"
            autoComplete="off"
            onFinish={handleFinish}
          >
            {/* <h4 className="form-container__heading">Product return detail</h4> */}
            <Row gutter={16}>
              <Col lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  name="time"
                  label="Thời gian"
                  className="form-margin"
                >
                  {/* <Select style={{ width: "100%" }}>
                  <Option value="lucy">Lucy</Option>
                </Select> */}
                  <TextArea style={{ width: "100%", height: "118px" }} />
                </Form.Item>
                <Form.Item
                  name="test"
                  label="Thời gian"
                  className="form-margin"
                >
                  <DatePicker onChange={handleDateChange} />
                </Form.Item>
                <Form.Item
                  name="test2"
                  label="Thời gian"
                  className="form-margin"
                >
                  <DatePicker onChange={handleDateChange} />
                </Form.Item>

                <AutoComplete></AutoComplete>
                {/* <Select>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                  </Select> */}

                <Form.Item
                  name="name"
                  label="Tên phân lót"
                  className="form-margin"
                  // rules={[
                  //   { required: true },
                  //   {
                  //     min: 5,
                  //   },
                  // ]}
                >
                  <TextArea style={{ width: "100%", height: "118px" }} />
                </Form.Item>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <Form.Item name="count" label="Số lượng">
                  <Input />
                </Form.Item>
                <Form.Item name="price" label="Đơn giá">
                  <Input />
                </Form.Item>
                <Form.Item name="total" label="Thành tiền">
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button disabled={disabled} htmlType="submit" type="primary">
                    Save
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Panel>
    </Collapse>
  );
}

export default DiaryForm;
