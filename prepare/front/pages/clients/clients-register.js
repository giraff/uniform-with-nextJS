import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import React, { useState, useMemo } from "react";
import AppLayout from "../../components/Layouts/AppLayout";
import SelectView from "../../components/SelectView";
import { CaretRightOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { Option } = Select;

const title = "판매 대상 등록";
const subTitle = "매장을 이용하신 고객님의 정보를 등록합니다.";

const columns = [
  {
    title: "학교명",
    dataIndex: "schoolName",
  },
  {
    title: "학교구분",
    dataIndex: "schoolCategory",
  },
  {
    title: "이름",
    dataIndex: "clientsName",
  },
  {
    title: "성별",
    dataIndex: "clientsGender",
  },
  {
    title: "연락처",
    dataIndex: "clientsPhone",
  },
  {
    title: "공동 구매",
    dataIndex: "groupBuying",
  },
];
const data = [];
const formItemLayout = {
  wrapperCol: {
    md: {
      span: 24,
    },
    lg: {
      span: 12,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    sm: {
      span: 8,
      offset: 0,
    },
    md: {
      span: 8,
      offset: 0,
    },
  },
};
const ClientsRegister = () => {
  const [form] = Form.useForm();
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  // Form 제출 버튼 누른 뒤 실행되는 함수 e.preventDefault가 내장되어있으니 굳이 사용 안함
  const onFinish = (values) => {
    console.log(values);
  };

  // 전화번호 입력란 앞에 선택란
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="010">010</Option>
        <Option value="02">02</Option>
        <Option value="070">070</Option>
      </Select>
    </Form.Item>
  );

  const onSchoolChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ["고등학교", "중학교"].map((category) => `${value}${category}`)
      );
    }
  };

  const schoolOptions = autoCompleteResult.map((school) => ({
    label: school,
    value: school,
  }));

  const clearBtnStyle = useMemo(() => ({ margin: "0 8px 0 0" }), []);

  return (
    <AppLayout title={title} subTitle={subTitle}>
      <Row gutter={[16, 16]}>
        <Col md={24} lg={12}>
          <Title level={5}>
            <CaretRightOutlined />
            판매 대상 정보
          </Title>
          <Form
            {...formItemLayout}
            form={form}
            name="registerProduct"
            onFinish={onFinish}
            initialValues={{ prefix: "010" }}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              label="이름"
              tooltip="고객의 이름을 기입하세요"
              rules={[
                {
                  required: true,
                  message: "고객의 이름을 기입하세요",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="gender" label="성별">
              <Select style={{ width: 200 }} placeholder="남성 / 여성">
                <Option value="male">남성</Option>
                <Option value="female">여성</Option>
                <Option value="other">기타</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="phone"
              label="연락처"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
                placeholder="(-) 제외 입력"
              />
            </Form.Item>
            <Form.Item
              name="schoolname"
              label="학교명"
              rules={[
                {
                  required: true,
                  message: "고객이 구매한 교복의 학교 이름을 선택해주세요",
                },
              ]}
            >
              <AutoComplete
                options={schoolOptions}
                onChange={onSchoolChange}
                placeholder="school 이름"
              >
                <Input />
              </AutoComplete>
            </Form.Item>
            <Form.Item
              name="schoolCategory"
              label="학교 구분"
              rules={[
                {
                  required: true,
                  message: "고객이 구매한 교복의 학교 이름을 선택해주세요",
                },
              ]}
            >
              <Select placeholder="고등학교 / 중학교">
                <Option value="highschool">고등학교</Option>
                <Option value="middleschool">중학교</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="groupBuying"
              label="공동 구매 대상"
              rules={[
                {
                  required: true,
                  message: "공동 구매 대상이면 Yes, 아니면 no를 선택해주세요",
                },
              ]}
            >
              <Select placeholder="YES / No">
                <Option value="yes">YES</Option>
                <Option value="no">NO</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button
                style={clearBtnStyle}
                onClick={() => {
                  form.resetFields();
                }}
              >
                Clear
              </Button>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col md={24} lg={12}>
          <Title level={5}>
            <CaretRightOutlined />
            판매 대상 리스트
          </Title>
          <SelectView hasCheckbox={true} columns={columns} data={data} />
        </Col>
      </Row>
    </AppLayout>
  );
};

export default ClientsRegister;
