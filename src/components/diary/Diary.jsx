import { Col, Form, Input, Row } from "antd";
import { Collapse } from "antd";
import { Select, DatePicker } from "antd";
import React from "react";
import moment from "moment";
import styles from "./diary.module.less";
import DiaryForm from "./components/DiaryForm";
import ForceUpdate from "./components/ForceUpdate";

function Diary() {
  const [form] = Form.useForm();
  const nameValue = Form.useWatch("name", form);
  const dateFormat = "YYYY-MM-DD";

  return (
    <div style={{ margin: "2rem" }}>
      <div>
        <ForceUpdate />
      </div>
      <DiaryForm form={form} heading="Bón phân lót"></DiaryForm>
    </div>
  );
}

export default Diary;
