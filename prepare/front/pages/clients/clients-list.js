import React, { useCallback, useMemo, useState } from "react";
import AppLayout from "../../components/Layouts/AppLayout";
import {
  Table,
  Card,
  Descriptions,
  Divider,
  Checkbox,
  Button,
  Space,
  Row,
  Col,
} from "antd";

const title = "판매 대상 목록";
const subTitle = "매장을 이용하신 고객분들의 정보를 조회하고 관리합니다";
const CheckboxGroup = Checkbox.Group;
const defaultCheckedList = ["중학교"];
const plainOptions = ["중학교", "고등학교"];

const ClientsList = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = useCallback((list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  }, []);

  const onCheckAllChange = useCallback((e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  }, []);

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
      title: "이름",
      dataIndex: "clientsName",
    },
    {
      title: "성별",
      dataIndex: "gender",
    },
    {
      title: "연락처",
      dataIndex: "clientsPhoneNumber",
    },
    {
      title: "공동 구매 대상",
      dataIndex: "groupBuyingClients",
    },
    {
      title: "공동 구매 여부",
      dataIndex: "groupBuyingStatus",
    },
    {
      title: "Action",
      render: () => (
        <Space size="middle">
          <a>Edit</a>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 8; i++) {
    data.push({
      key: i,
      pid: i + 1,
      schoolname: `백신`,
      schoolcategory: `고등학교`,
      clientsName: `홍길동`,
      gender: "여",
      clientsPhoneNumber: `010-xxxx-xxxx`,
      groupBuyingClients: `Yes`,
      groupBuyingStatus: `No`,
    });
  }
  const FilterMarginBottom = useMemo(() => ({ marginBottom: 10 }), []);

  const footer = useCallback(() => {
    return (
      <Row justify="end" gutter={[8, 12]}>
        <Col>
          <Button>불러오기</Button>
        </Col>
        <Col>
          <Button>등록</Button>
        </Col>
        <Col>
          <Button>삭제</Button>
        </Col>
      </Row>
    );
  }, []);
  return (
    <AppLayout title={title} subTitle={subTitle}>
      {/* <Filter /> */}
      <Card bordered={false} style={FilterMarginBottom}>
        <div className="strong">판매 대상 검색</div>
        <div className="product-list-elem product-filter-form">
          <div>
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            >
              전체
            </Checkbox>
            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
            />
          </div>
          <div className="product-property-form">
            <div
              className="form-group group-buying-status"
              style={{ marginTop: 10 }}
            >
              <button
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                className="btn dropdown-toggle"
              >
                공동 구매 여부
              </button>
            </div>
            <div
              className="form-group group-buying-client"
              style={{ marginTop: 10 }}
            >
              <button
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                className="btn dropdown-toggle"
              >
                공동 구매 대상
              </button>
              <div className="dropdown-menu dropdown-filter hide"></div>
            </div>
          </div>
          <div class="info-search-wrapper">
            <input
              type="text"
              class="clients-info-search"
              placeholder="판매 대상 학교 / 판매 대상 이름 / 판매 대상 연락처"
            />
            <Button>검색</Button>
            <div class="search-init-btn">초기화</div>
          </div>
        </div>
      </Card>

      <Table
        columns={columns}
        dataSource={data}
        footer={footer}
        pagination={false}
        scroll={{ y: 300 }}
      />
      <Card size="small" extra={<>X</>} title="판매 대상 상세 내역">
        <Descriptions title="개인 정보">
          <Descriptions.Item>백신고등학교</Descriptions.Item>
          <Descriptions.Item>오징어 / 010-9999-9999/ 여</Descriptions.Item>
        </Descriptions>
        <Divider />
        <Descriptions title="공동구매">
          <Descriptions.Item label="공동 구매 대상">Yes</Descriptions.Item>
          <Descriptions.Item label="공동 구매 여부">Yes</Descriptions.Item>
        </Descriptions>
      </Card>
    </AppLayout>
  );
};

export default ClientsList;
