import React, { useMemo } from "react";
import AppLayout from "../../components/Layouts/AppLayout";
import ProductTable from "../../components/ProductTable";
import { Card, Descriptions, Divider, Space } from "antd";
import Table from "rc-table/lib/Table";

const OutcomingHistory = () => {
  const title = "판매 내역";
  const subTitle =
    "그동안의 판매 내역을 상세 조회하고 환불 · 교환 · 영수증 재전송을 할수 있는 페이지입니다";
  // table 데이터
  const columns = [
    {
      title: "판매/교환/환불",
      dataIndex: "outcomingStatus",
    },
    {
      title: "영수증 ID",
      dataIndex: "receiptId",
    },
    {
      title: "구매자",
      dataIndex: "client",
    },
    {
      title: "전화번호",
      dataIndex: "phoneNumber",
    },
    {
      title: "합계",
      dataIndex: "totalPrice",
    },
    {
      title: "판매 날짜",
      dataIndex: "outcomingDate",
    },
    {
      title: "Action",
      // 환불이면 영수증 재전송만 띄우기
      render: (rows) =>
        rows.status === "환불" ? (
          <Space size="middle">
            <a>영수증 재전송</a>
          </Space>
        ) : (
          <Space size="middle">
            <a>교환</a>
            <a>환불</a>
            <a>영수증 재전송</a>
          </Space>
        ),
    },
  ];

  const data = [];
  for (let i = 0; i < 8; i++) {
    // columns에 명시하지 않는 data의 property 추가
    data.push({
      key: i,
      status: "판매",
      outcomingStatus: `판매/2품목(2개)`,
      receiptId: `20211001033311`,
      client: "서충식",
      phoneNumber: "010-xxxx-xxxx",
      totalPrice: `50,000`,
      outcomingDate: `2021-10-01 03:33:11`,
    });
  }
  for (let i = 8; i < 10; i++) {
    data.push({
      key: i,
      status: "환불",
      outcomingStatus: `환불/1품목`,
      receiptId: `20211001033311`,
      client: "서충식",
      phoneNumber: "010-xxxx-xxxx",
      totalPrice: `50,000`,
      outcomingDate: `2021-10-01 03:33:11`,
    });
  }

  const receiptColumns = [
    {
      title: "제품명",
      dataIndex: "productInfo",
    },
    {
      title: "수량",
      dataIndex: "productAmount",
    },
    {
      title: "가격",
      dataIndex: "productPrice",
    },
  ];

  const receiptData = [];
  for (let i = 8; i < 10; i++) {
    receiptData.push({
      key: i,
      productInfo: "고등학교/백신/여름/남/셔츠/M/신상",
      productAmount: `1`,
      productPrice: `20,000`,
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
      {/* 판매 내역 그리드 */}
      <ProductTable hasCheckbox={false} columns={columns} data={data} />
      <Card title="판매 상세 내역" extra={<>x</>} size="small">
        <Descriptions>
          <Descriptions.Item label="영수증 번호">
            20211001033311
          </Descriptions.Item>
          <Descriptions.Item label="결재">직원 A</Descriptions.Item>
          <Divider />
          <Descriptions.Item label="구매자">서충식</Descriptions.Item>
          <Descriptions.Item label="구매일">
            2021-10-01 03:33:11
          </Descriptions.Item>
          <Descriptions.Item label="결제 수단">
            결제 수단: 카드+현금 [현금 납부액: 20,000]
          </Descriptions.Item>
          <Descriptions.Item label="실제 판매 대상자">
            화수고/1학년/남자/서충식/2731
          </Descriptions.Item>
        </Descriptions>
        <ProductTable
          pagination={false}
          hasCheckbox={false}
          columns={receiptColumns}
          data={receiptData}
        />
      </Card>
    </AppLayout>
  );
};

export default OutcomingHistory;
