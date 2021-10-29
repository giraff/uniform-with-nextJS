import React from 'react';
import AppLayout from '../components/Layouts/AppLayout';
import ReactECharts from 'echarts-for-react';
import { Row, Col, Typography, Table } from 'antd';
import moment from 'moment';
const { Title, Text } = Typography;

const title = '대시보드';
const subTitle =
    '여러 데이터들을 동시에 비교할 수 있게 해주는 여러 뷰의 모음입니다';

const Dashboard = () => {
    const dayOptions = {
        grid: { top: 36, right: 48, bottom: 24, left: 48, width: '80%' },
        xAxis: {
            type: 'category',
            data: ['어제', '오늘'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [
                    { value: 120, itemStyle: { color: '#cdcdcd' } },
                    { value: 200, itemStyle: { color: '#ff8c00' } },
                ],
                type: 'bar',
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    const yearOptions = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999',
                },
            },
        },
        legend: {
            data: ['입고', '출고', '총매출'],
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                    '11月',
                    '12月',
                ],
                axisPointer: {
                    type: 'shadow',
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                name: '총매출',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} 만원',
                },
            },
            {
                type: 'value',
                name: '입출고',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} 건',
                },
            },
        ],
        series: [
            {
                name: '입고',
                type: 'bar',
                data: [2, 76, 4, 7, 23, 25, 35, 62, 32, 20, 6, 3],
            },
            {
                name: '출고',
                type: 'bar',
                data: [2, 175, 5, 9, 26, 28, 70, 182, 48, 18, 6, 2],
            },
            {
                name: '총매출',
                type: 'line',
                yAxisIndex: 1,
                data: [
                    2.0, 20.3, 2.2, 3.3, 4.5, 6.3, 10.2, 23.4, 23.0, 16.5, 12.0,
                    6.2,
                ],
            },
        ],
    };

    const columns = [
        {
            title: '제품명',
            dataIndex: 'name',
            width: 300,
        },
        {
            title: '수량',
            dataIndex: 'age',
            width: 150,
        },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `백신/고등학교/여름/여자/셔츠/XL/신상`,
            age: 10,
        });
    }
    return (
        <AppLayout title={title} subTitle={subTitle}>
            <Row>
                <Col
                    lg={11}
                    md={24}
                    style={{
                        margin: '5px',
                        padding: '10px',
                        border: '1px solid #f0f0f0',
                    }}
                >
                    <Title level={4}>오늘의 매출</Title>
                    <Typography italic>
                        Today: {moment().format('YYYY-MM-DD')}
                    </Typography>
                    <ReactECharts option={dayOptions} />
                </Col>
                <Col
                    lg={12}
                    md={24}
                    style={{
                        margin: '5px',
                        padding: '10px',
                        border: '1px solid #f0f0f0',
                    }}
                >
                    <Title level={4}>당일 판매된 재고</Title>
                    <Table
                        size="small"
                        columns={columns}
                        dataSource={data}
                        pagination={{ pageSize: 50 }}
                        scroll={{ y: 240 }}
                    />
                    ,
                </Col>
            </Row>
            <Row>
                <Col
                    span={24}
                    style={{
                        padding: '10px',
                        margin: '5px',
                        border: '1px solid #f0f0f0',
                    }}
                >
                    <Title level={4}>월별 매출</Title>
                    <ReactECharts option={yearOptions} />
                </Col>
            </Row>
        </AppLayout>
    );
};

export default Dashboard;
