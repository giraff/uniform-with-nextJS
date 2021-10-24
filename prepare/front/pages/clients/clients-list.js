import React, { useMemo } from "react";
import AppLayout from "../../components/Layouts/AppLayout";
import { Table, Card, Descriptions, Divider } from "antd";

const ClientsList = () => {
  const title = "판매 대상 목록";
  const subTitle = "매장을 이용하신 고객분들의 정보를 조회하고 관리합니다";

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

      <Table />
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
