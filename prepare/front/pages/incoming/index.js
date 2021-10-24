import React, { useMemo } from "react";
import AppLayout from "../../components/Layouts/AppLayout";
import ProductTable from "../../components/ProductTable";
import { Space, Card, Descriptions } from "antd";

const Incoming = () => {
  const title = "입고";
  const subTitle =
    "등록된 제품을 조회할 수 있으며, 품목을 선택하고 입력한 수량만큼 입고합니다.";

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
    {
      title: "수량",
      dataIndex: "amount",
    },
    {
      title: "Action",
      render: () => (
        <Space size="middle">
          <a>입고</a>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      pid: i + 1,
      schoolname: `백신 ${i}`,
      schoolcategory: `고등학교`,
      seasons: `하계`,
      gender: "여",
      category: `셔츠`,
      size: `XL`,
      status: `신상`,
      amount: 0,
    });
  }

  const FilterMarginBottom = useMemo(() => ({ marginBottom: 10 }), []);

  return (
    <AppLayout title={title} subTitle={subTitle}>
      {/* <Filter /> */}
      <Card bordered={false} style={FilterMarginBottom}>
        <div className="strong">제품 검색</div>
        <div className="product-list-elem product-filter-form">
          <div className="product-school-search">
            <div className="form-group form-school-name">
              <span className="school-icon">
                <i className="fas fa-school"></i>
              </span>
              <input
                type="text"
                placeholder="학교 검색"
                data-select-visible="false"
                className="school-name-input"
              />
            </div>
          </div>
          <div className="product-property-form">
            <div className="form-group form-school">
              <button
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                className="btn dropdown-toggle"
              >
                학교 구분
              </button>
            </div>
            <div className="form-group form-seasons">
              <button
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                className="btn dropdown-toggle"
              >
                절기 구분
              </button>
              <div className="dropdown-menu dropdown-filter hide"></div>
            </div>
            <div className="form-group form-sex">
              <button
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                className="btn dropdown-toggle"
              >
                성별구분
              </button>
              <div className="dropdown-menu dropdown-filter hide"></div>
            </div>
            <div className="form-group form-clothes-category">
              <button
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                className="btn dropdown-toggle"
              >
                종류
              </button>
              <div className="dropdown-menu dropdown-filter hide"></div>
            </div>
            <div className="form-group form-size">
              <button
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                className="btn dropdown-toggle"
              >
                사이즈
              </button>
              <div className="dropdown-menu dropdown-filter hide"></div>
            </div>
            <div className="form-group form-item-status">
              <button
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                className="btn dropdown-toggle"
              >
                이월/신상/전이
              </button>
              <div className="dropdown-menu dropdown-filter hide"></div>
            </div>
          </div>
          <div className="list-filter-chips">
            <div className="chips-group">
              <div className="chips-init">초기화</div>
            </div>
            <div className="chips-group school-name-filter-chips-group">
              <li className="filter-chip school-name-chip">
                <span>화수</span>
                <button className="btn-delete">x</button>
              </li>
            </div>
            <div className="chips-group school-filter-chips-group">
              <li className="filter-chip school-chip">
                <span>고등학교</span>
                <button className="btn-delete">x</button>
              </li>
            </div>
            <div className="chips-group seasons-filter-chips-group">
              <li className="filter-chip seasons-chip">
                <span>겨울</span>
                <button className="btn-delete">x</button>
              </li>
            </div>
            <div className="chips-group sex-filter-chips-group">
              <li className="filter-chip sex-chip">
                <span>여성</span>
                <button className="btn-delete">x</button>
              </li>
            </div>
            <div className="chips-group clothes-category-chips-group">
              <li className="filter-chip clothes-category-chip">
                <span>셔츠</span>
                <button className="btn-delete">x</button>
              </li>
            </div>
            <div className="chips-group size-chips-group">
              <li className="filter-chip size-chip">
                <span>XL</span>
                <button className="btn-delete">x</button>
              </li>
            </div>
            <div className="chips-group item-status-chips-group">
              <li className="filter-chip status-chip">
                <span>이월</span>
                <button className="btn-delete">x</button>
              </li>
            </div>
          </div>
        </div>
      </Card>
      {/* 입고 페이지의 제품 그리드 */}
      <ProductTable hasCheckbox={false} columns={columns} data={data} />
      {/* 제품 상세 내역 - 입고 버튼 있음 */}
      <Card
        title="Info"
        size="small"
        extra={<>X</>}
        actions={[<div>입고</div>]}
      >
        <Descriptions size="small">
          <Descriptions.Item label="학교명">백신</Descriptions.Item>
          <Descriptions.Item label="학교 구분">고등학교</Descriptions.Item>
          <Descriptions.Item label="계절">하계</Descriptions.Item>
          <Descriptions.Item label="성별">여</Descriptions.Item>
          <Descriptions.Item label="종류">셔츠</Descriptions.Item>
          <Descriptions.Item label="사이즈">XL</Descriptions.Item>
          <Descriptions.Item label="상태">신상</Descriptions.Item>
        </Descriptions>
      </Card>
    </AppLayout>
  );
};

export default Incoming;
