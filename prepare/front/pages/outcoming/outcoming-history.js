import React, { useMemo, useState } from 'react';
import AppLayout from '../../components/Layouts/AppLayout';
import ProductTable from '../../components/ProductTable';
import {
    Card,
    Descriptions,
    Divider,
    Space,
    Checkbox,
    DatePicker,
    Table,
    Button,
} from 'antd';

const { RangePicker } = DatePicker;

const title = '판매 내역';
const subTitle =
    '그동안의 판매 내역을 상세 조회하고 환불 · 교환 · 영수증 재전송을 할수 있는 페이지입니다';
// table 데이터
const columns = [
    {
        title: '판매/교환/환불',
        dataIndex: 'outcomingStatus',
    },
    {
        title: '영수증 ID',
        dataIndex: 'receiptId',
    },
    {
        title: '구매자',
        dataIndex: 'client',
    },
    {
        title: '전화번호',
        dataIndex: 'phoneNumber',
    },
    {
        title: '합계',
        dataIndex: 'totalPrice',
    },
    {
        title: '판매 날짜',
        dataIndex: 'outcomingDate',
    },
    {
        title: 'Action',
        // 환불이면 영수증 재전송만 띄우기
        render: rows =>
            rows.status === '환불' ? (
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
        status: '판매',
        outcomingStatus: `판매/2품목(2개)`,
        receiptId: `20211001033311`,
        client: '서충식',
        phoneNumber: '010-xxxx-xxxx',
        totalPrice: `50,000`,
        outcomingDate: `2021-10-01 03:33:11`,
    });
}
for (let i = 8; i < 10; i++) {
    data.push({
        key: i,
        status: '환불',
        outcomingStatus: `환불/1품목`,
        receiptId: `20211001033311`,
        client: '서충식',
        phoneNumber: '010-xxxx-xxxx',
        totalPrice: `50,000`,
        outcomingDate: `2021-10-01 03:33:11`,
    });
}

const receiptColumns = [
    {
        title: '제품명',
        dataIndex: 'productInfo',
    },
    {
        title: '수량',
        dataIndex: 'productAmount',
    },
    {
        title: '가격',
        dataIndex: 'productPrice',
    },
];

const receiptData = [];
for (let i = 8; i < 10; i++) {
    receiptData.push({
        key: i,
        productInfo: '고등학교/백신/여름/남/셔츠/M/신상',
        productAmount: `1`,
        productPrice: `20,000`,
    });
}

const CheckboxGroup = Checkbox.Group;
const defaultCheckedList = ['판매'];
const plainOptions = ['판매', '교환', '환불'];

const OutcomingHistory = () => {
    const FilterMarginBottom = useMemo(() => ({ marginBottom: 10 }), []);
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    // 입고 날짜 / 기간 정하는 check box
    const [isRangeDate, setIsRangeDate] = useState(false);
    const checkBoxMargin = useMemo(() => ({ margin: '0 10px' }), []);
    const DateSize = useMemo(() => ({ padding: '6px 15px' }), []);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <AppLayout title={title} subTitle={subTitle}>
            {/* <Filter /> */}
            <Card bordered={false} style={FilterMarginBottom}>
                <div className="strong">판매 내역 검색</div>
                <div class="outcoming-history-filter">
                    <Space>
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
                        <Divider type="vertical" />
                        <div class="outcoming-date">
                            <Checkbox
                                onChange={() => setIsRangeDate(!isRangeDate)}
                                checked={isRangeDate}
                                style={checkBoxMargin}
                            >
                                기간
                            </Checkbox>
                            {isRangeDate ? (
                                <RangePicker
                                    style={DateSize}
                                    placeholder={[
                                        '조회 시작 날짜',
                                        '마지막 날짜',
                                    ]}
                                />
                            ) : (
                                <DatePicker
                                    style={DateSize}
                                    placeholder={'판매 날짜'}
                                />
                            )}
                            <Button>검색</Button>
                        </div>
                    </Space>
                    <div class="info-search-wrapper">
                        <input
                            type="text"
                            class="outcoming-info-search"
                            placeholder="영수증ID / 구매자 이름/ 구매자 번호"
                        />
                        <Button>검색</Button>
                        <div class="search-init-btn">초기화</div>
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
