import React, { useState, useMemo } from "react";
import AppLayout from "../../components/Layouts/AppLayout";
import SelectView from "../../components/SelectView";
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
  Radio,
} from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Title } = Typography;

const title = "판매";
const subTitle = "제품 목록에서 품목을 선택하고 해당 품목을 판매합니다.";

// table 데이터
const columns = [
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
  {
    title: "판매 수량",
    dataIndex: "outcomingAmount",
  },
];

const data = [];

const Outcoming = () => {
  const [clientForm] = Form.useForm();
  const [productForm] = Form.useForm();
  const [values, setValues] = useState({
    relationRadio: "self",
    paymentRadio: "card",
  });
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const widthStyle = useMemo(() => ({ width: 200 }), []);
  const clearBtnStyle = useMemo(() => ({ margin: "0 8px 0 0" }), []);
  const onRadioChange = (e) => {
    console.log(values);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
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
  return (
    <AppLayout title={title} subTitle={subTitle}>
      <Row gutter={[16, 16]}>
        <Col md={24} lg={12}>
          <Row>
            <Col span={24}>
              <Title level={5}>
                <CaretRightOutlined />
                구매자 정보
              </Title>
              <Form
                form={clientForm}
                onFinish={onFinish}
                initialValues={{ relationRadio: "self", paymentRadio: "card" }}
                scrollToFirstError
              >
                <Form.Item name="client" label="판매 대상">
                  <Input />
                </Form.Item>
                <Form.Item name="relation" label="판매 대상과의 관계">
                  <Radio.Group
                    onChange={onRadioChange}
                    name="relationRadio"
                    value={values.relationRadio}
                  >
                    <Radio value="self">본인</Radio>
                    <Radio value="father">부</Radio>
                    <Radio value="mother">모</Radio>
                    <Radio value="others">기타</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="buyer" label="구매자 이름">
                  <Input />
                </Form.Item>
                <Form.Item name="buyer-phone-number" label="구매자 전화번호">
                  <Input />
                </Form.Item>
                <Form.Item name="payment" label="결제 수단">
                  <Radio.Group
                    onChange={onRadioChange}
                    name="paymentRadio"
                    value={values.paymentRadio}
                  >
                    <Radio value={"card"}>카드</Radio>
                    <Radio value={"cash"}>현금</Radio>
                    <Radio value={"remit"}>송금</Radio>
                    <Radio value={"cardAndCash"}>카드 + 현금</Radio>
                    <Radio value={"cardAndRemit"}>카드 + 송금</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item>
                  <Button
                    style={clearBtnStyle}
                    onClick={() => {
                      clientForm.resetFields();
                    }}
                  >
                    Clear
                  </Button>
                  <Button type="primary" htmlType="submit">
                    적용
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={24}>
              <Title level={5}>
                <CaretRightOutlined />
                제품 정보
              </Title>
              <Form form={productForm} onFinish={onFinish} scrollToFirstError>
                <Form.Item
                  name="schoolname"
                  label="학교명"
                  rules={[
                    {
                      required: true,
                      message:
                        "등록하고자 하는 교복의 학교 이름을 선택해주세요",
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
                <Form.Item name="remain" label="남은 재고">
                  <Input style={widthStyle} />
                  <Button>재고 확인</Button>
                </Form.Item>
                <Form.Item
                  name="amount"
                  label="수량"
                  rules={[
                    {
                      required: true,
                      message: "판매할 수량을 기입하세요 ",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name="price" label="가격">
                  <Input />
                </Form.Item>
                <Button
                  style={clearBtnStyle}
                  onClick={() => {
                    productForm.resetFields();
                  }}
                >
                  Clear
                </Button>
                <Button type="primary" htmlType="submit">
                  적용
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col md={24} lg={12}>
          <Title level={5}>
            <CaretRightOutlined />
            판매 리스트
          </Title>
          <SelectView hasCheckbox={true} columns={columns} data={data} />
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Outcoming;
