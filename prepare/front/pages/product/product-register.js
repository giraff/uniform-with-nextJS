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
  Space,
} from "antd";
import React, { useMemo, useState } from "react";
import AppLayout from "../../components/Layouts/AppLayout";
import SelectView from "../../components/SelectView";
import { CaretRightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const title = "제품 등록";
const subTitle = "스쿨룩스 매장에서 관리할 제품을 등록할 수 있습니다";
// table 데이터
const columns = [
  {
    title: "PID",
    dataIndex: "pid",
  },
  {
    title: "학교명",
    dataIndex: "schoolname",
  },
  {
    title: "학교 구분",
    dataIndex: "schoolcategory",
  },
  {
    title: "절기",
    dataIndex: "seasons",
  },
  {
    title: "성별",
    dataIndex: "gender",
  },
  {
    title: "종류",
    dataIndex: "category",
  },
  {
    title: "사이즈",
    dataIndex: "size",
  },
  {
    title: "이월/신상/전이",
    dataIndex: "status",
  },
];

const data = [];
for (let i = 0; i < 8; i++) {
  data.push({
    key: i,
    pid: i + 1,
    schoolname: `백신`,
    schoolcategory: `고등학교`,
    seasons: `하계`,
    gender: "여",
    category: `셔츠`,
    size: `XL`,
    status: `신상`,
  });
}
const formItemLayout = {
  wrapperCol: {
    sm: {
      span: 24,
    },
    md: {
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
const ProductRegister = () => {
  const [form] = Form.useForm();
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const widthStyle = useMemo(() => ({ width: 200 }), []);
  // Form 제출 버튼 누른 뒤 실행되는 함수 e.preventDefault가 내장되어있으니 굳이 사용 안함
  const onFinish = (values) => {
    console.log(values);
  };

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
    <AppLayout
      className="contents content-product-register"
      title={title}
      subTitle={subTitle}
    >
      <Row gutter={[16, 16]}>
        <Col md={24} lg={12}>
          <Title level={5}>
            <CaretRightOutlined />
            제품 정보
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
              name="schoolname"
              label="학교명"
              rules={[
                {
                  required: true,
                  message: "등록하고자 하는 교복의 학교 이름을 선택해주세요",
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
                  message: "학교의 종류를 선택해주세요",
                  whitespace: true,
                },
              ]}
            >
              <Select placeholder="고등학교 / 중학교">
                <Option value="highschool">고등학교</Option>
                <Option value="middleschool">중학교</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="season"
              label="절기"
              tooltip="교복의 절기를 선택해주세요"
              rules={[
                {
                  required: true,
                  message: "교복의 절기를 선택해주세요",
                  whitespace: true,
                },
              ]}
            >
              <Select style={widthStyle} placeholder="하계/동계/소품">
                <Option value="summer">하계</Option>
                <Option value="winter">동계</Option>
                <Option value="other">소품</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="gender"
              label="성별"
              rules={[
                {
                  required: true,
                  message: "교복을 입을 학생의 성별을 선택해주세요",
                  whitespace: true,
                },
              ]}
            >
              <Select style={widthStyle} placeholder="남성 / 여성">
                <Option value="male">남성</Option>
                <Option value="female">여성</Option>
                <Option value="other">무관</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="category"
              label="종류"
              rules={[
                {
                  required: true,
                  message: "교복의 종류를 선택해주세요",
                },
              ]}
            >
              <Select style={widthStyle} placeholder="종류">
                <Option value="shirts">셔츠</Option>
                <Option value="skirt">치마</Option>
                <Option value="necktie">넥타이</Option>
                <Option value="pants">바지</Option>
                <Option value="outer">마이</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="size"
              label="사이즈"
              rules={[
                {
                  required: true,
                  message: "교복의 사이즈를 선택해주세요",
                },
              ]}
            >
              <Select style={widthStyle} placeholder="교복 크기 선택">
                <Option value="free">Free</Option>
                <Option value="xl">XL</Option>
                <Option value="l">L</Option>
                <Option value="m">M</Option>
                <Option value="s">S</Option>
                <Option value="xs">XS</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="status"
              label="이월/신상/전이"
              rules={[
                {
                  required: true,
                  message: "교복의 이월, 신상, 전이 여부를 선택해주세요",
                },
              ]}
            >
              <Select style={widthStyle} placeholder="이월/신상/전이">
                <Option value="new">신상</Option>
                <Option value="old">이월</Option>
                <Option value="transfer">전이</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="price"
              label="판매가"
              rules={[
                {
                  required: true,
                  message: "교복의 판매가를 기입해주세요",
                },
              ]}
            >
              <Input />
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
            제품 리스트
          </Title>
          <SelectView hasCheckbox={true} columns={columns} data={data} />
          <Row justify="space-between" style={{ padding: 10 }}>
            <Col>
              <Space>
                <Text strong>품목</Text> {data.length}
              </Space>
            </Col>
            <Col>
              <Button>등록</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default ProductRegister;
