import React, { useMemo, useState, useCallback } from 'react';
import AppLayout from '../../components/Layouts/AppLayout';
import ProductTable from '../../components/ProductTable';
import {
    Card,
    Table,
    Descriptions,
    DatePicker,
    Checkbox,
    Typography,
    Divider,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const title = '입고 내역';
const subTitle = '입고한 내역을 조회할 수 있습니다';

// table 데이터
const columns = [
    {
        title: '학교명',
        dataIndex: 'schoolname',
    },
    {
        title: '학교 구분',
        dataIndex: 'schoolcategory',
    },
    {
        title: '절기',
        dataIndex: 'seasons',
    },
    {
        title: '성별',
        dataIndex: 'gender',
    },
    {
        title: '종류',
        dataIndex: 'category',
    },
    {
        title: '사이즈',
        dataIndex: 'size',
    },
    {
        title: '이월/신상/전이',
        dataIndex: 'status',
    },
    {
        title: '입고 사유',
        dataIndex: 'incomingReason',
    },
    {
        title: '입고 날짜',
        dataIndex: 'incomingDate',
    },
    {
        title: '입고 수량',
        dataIndex: 'incomingAmount',
    },
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        schoolname: `백신${i}`,
        schoolcategory: `고등학교`,
        seasons: `하계`,
        gender: '여',
        category: `셔츠`,
        size: `XL`,
        status: `신상`,
        incomingReason: '정기입고',
        incomingDate: '2021.08.12 12:00:10',
        incomingAmount: 30,
    });
}

const IncomingHistory = () => {
    const [isRangeDate, setIsRangeDate] = useState(false);
    const [productDesc, setProductDesc] = useState(null);
    const [descOpened, setDescOpened] = useState(false);
    const onClickRow = useCallback(
        data => {
            setProductDesc(data);
            setDescOpened(true);
            console.log(data);
        },
        [descOpened, productDesc],
    );

    return (
        <AppLayout title={title} subTitle={subTitle}>
            {/* <Filter /> */}
            <Card bordered={false} style={{ marginBottom: 10 }}>
                <div className="strong">입고 내역 검색</div>
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
                        <Checkbox
                            onChange={() => setIsRangeDate(!isRangeDate)}
                            checked={isRangeDate}
                            style={{ margin: '0 10px' }}
                        >
                            기간
                        </Checkbox>
                        {isRangeDate ? (
                            <RangePicker
                                style={{ margin: '0 10px' }}
                                placeholder={['조회 시작 날짜', '마지막 날짜']}
                            />
                        ) : (
                            <DatePicker
                                style={{ margin: '0 10px' }}
                                placeholder={'입고 날짜'}
                            />
                        )}
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
                        <div className="form-group form-incoming-reason">
                            <button
                                type="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                className="btn dropdown-toggle"
                            >
                                입고 사유
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
            <Table
                onRow={record => {
                    return {
                        onClick: () => onClickRow(record),
                    };
                }}
                size="small"
                pagination={false}
                rowSelection={null}
                columns={columns}
                dataSource={data}
                scroll={{ y: 500 }}
                style={{ marginBottom: 20 }}
            />
            {descOpened ? (
                <>
                    <Card
                        title="입고 상세 내역"
                        size="small"
                        extra={
                            <div
                                style={{ cursor: 'pointer' }}
                                onClick={() => setDescOpened(false)}
                            >
                                <CloseOutlined />
                            </div>
                        }
                    >
                        <Typography style={{ marginBottom: 10 }}>
                            {productDesc.incomingReason} /{' '}
                            {productDesc.incomingDate}
                        </Typography>

                        <Descriptions size="small">
                            <Descriptions.Item label="PID">
                                {productDesc?.key}
                            </Descriptions.Item>
                            <Descriptions.Item label="제품명">
                                {productDesc?.schoolname}/
                                {productDesc?.schoolcategory}/
                                {productDesc?.seasons}/{productDesc?.gender}/
                                {productDesc?.category}/{productDesc?.size}/
                                {productDesc?.status}
                            </Descriptions.Item>
                            <Descriptions.Item label="재고 변동">
                                0 {`-> ${productDesc?.incomingAmount}`}
                            </Descriptions.Item>
                            <Descriptions.Item label="입고 수량">
                                {productDesc?.incomingAmount}
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </>
            ) : null}
        </AppLayout>
    );
};

export default IncomingHistory;
