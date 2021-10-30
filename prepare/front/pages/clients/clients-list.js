import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AppLayout from '../../components/Layouts/AppLayout';
import axios from '../../config/AxiosInstance';
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
    Radio,
    Select,
} from 'antd';

const title = '판매 대상 목록';
const subTitle = '매장을 이용하신 고객분들의 정보를 조회하고 관리합니다';
const CheckboxGroup = Checkbox.Group;
const defaultCheckedList = ['중학교'];
const plainOptions = ['중학교', '고등학교'];
const { Option } = Select;

const ClientsList = () => {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const [listData, setListData] = useState();
    const [resultListData, setResultListData] = useState([]);
    const [detailData, setDetailData] = useState();
    const [detailCheck, setDetailCheck] = useState(false);
    const [radioList, setRadioList] = useState('전체');
    const [selectBoxList, setSelectBoxList] = useState('공동 구매 대상 여부');

    const onFindSchool = () => {
        var subListData = [];
        console.log('원본 값 ');
        console.log(resultListData);
        if (radioList == '중학교') {
            listData.map(key => {
                if (key.schoolDivide.includes('MIDDLE')) {
                    subListData.push(key);
                }
                console.log(subListData);
            });
            setResultListData(subListData);
        } else if (radioList == '고등학교') {
            listData.map(key => {
                if (key.schoolDivide.includes('HIGH')) {
                    subListData.push(key);
                }
                console.log(subListData);
            });
            setResultListData(subListData);
        } else if (radioList == '전체') {
            setResultListData(listData);
        }
    };

    const onFindCommonPurchase = () => {
        var subListData = [];
        var tempListData = resultListData;
        if (selectBoxList == 'O') {
            resultListData.map(key => {
                if (key.schoolDivide.includes('MIDDLE')) {
                    subListData.push(key);
                }
                console.log(subListData);
            });
            setResultListData(subListData);
        } else if (selectBoxList == 'X') {
            resultListData.map(key => {
                if (key.schoolDivide.includes('HIGH')) {
                    subListData.push(key);
                }
                console.log(subListData);
            });
            setResultListData(subListData);
        } else if (
            selectBoxList == '공동 구매 대상 여부' ||
            selectBoxList == 'default'
        ) {
            setResultListData(tempListData);
        }
    };

    const onChange = e => {
        setRadioList(e.target.value);
        console.log(e.target.value);
    };

    const onSelectChange = e => {
        setSelectBoxList(e.target.value);
    };

    // const onChange = useCallback(list => {
    //   setCheckedList(list);
    //   setIndeterminate(!!list.length && list.length < plainOptions.length);
    //   setCheckAll(list.length === plainOptions.length);
    // }, []);

    // const onCheckAllChange = useCallback(e => {
    //   setCheckedList(e.target.checked ? plainOptions : []);
    //   setIndeterminate(false);
    //   setCheckAll(e.target.checked);
    // }, []);

    const onDetailClick = index => {
        axios.get(`/sales-target/list/${index}`, {}).then(res => {
            if (res != null) {
                setDetailData(res.data);
                setDetailCheck(true);
                console.log(detailData);
                console.log('찍어내나요');
                console.log(listData);
            }
        });
    };

    // table 데이터
    const columns = [
        {
            title: 'PID',
            dataIndex: 'id',
        },
        {
            title: '학교명',
            dataIndex: 'schoolName',
        },
        {
            title: '학교 구분',
            dataIndex: 'schoolDivide',
        },
        {
            title: '이름',
            dataIndex: 'name',
        },
        {
            title: '성별',
            dataIndex: 'genderType',
        },
        {
            title: '연락처',
            dataIndex: 'phoneNumber',
        },
        {
            title: '공동 구매 대상',
            dataIndex: 'yesOrNoType',
        },
        {
            title: 'Action',
            render: () => (
                <Space size="middle">
                    <a>Edit</a>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        axios.get('/sales-target/list', {}).then(res => {
            setListData(res.data);
            setResultListData(res.data);
        });
    }, []);

    useEffect(() => {
        console.log(radioList);
        setResultListData(listData);
        setDetailCheck(false);
        onFindSchool();
        onFindCommonPurchase();
    }, [radioList]);

    // BackEnd -> FrontEnd 로 넘어오는 데이터 형식 List<TargetInfo> [판매대상 전체조회]
    const targetInfo = [
        {
            key: 1,
            id: 1,
            schoolName: `화수`,
            schoolDivide: `고등학교`,
            name: `길동`,
            genderType: `여`,
            phoneNumber: `01011112222`,
            yesOrNoType: `Yes`,
        },
        {
            key: 2,
            id: 2,
            schoolName: `화수`,
            schoolDivide: `중학교`,
            name: `갑돌이`,
            genderType: `남`,
            phoneNumber: `01033334444`,
            yesOrNoType: `Yes`,
        },
    ];

    // BackEnd -> FrontEnd 로 넘어오는 데이터 형식 TargetInfo [판매대상 상세조회]
    const targetDetailInfo = [
        {
            id: 1,
            schoolName: `화수`,
            schoolDivide: `중학교`,
            name: `흥부`,
            phoneNumber: `01011112222`,
            yesOrNoType: `Yes`,
            city: `경기도`,
            cityDetail: `고양시`,
            cityStreet: `화중로`,
            genderType: `남`,
        },
    ];

    const data = [];
    for (let i = 0; i < 8; i++) {
        data.push({
            key: i,
            id: i + 1,
            schoolName: `백신`,
            schoolDivide: `고등학교`,
            name: `홍길동`,
            genderType: '여',
            phoneNumber: `010-xxxx-xxxx`,
            yesOrNoType: `Yes`,
            // groupBuyingStatus: `No`,
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
                        {/* <Checkbox
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
            /> */}
                        <Radio.Group onChange={onChange} value={radioList}>
                            <Radio value="전체">전체</Radio>
                            <Radio value="중학교">중학교</Radio>
                            <Radio value="고등학교">고등학교</Radio>
                        </Radio.Group>
                    </div>
                    <div className="product-property-form">
                        <div
                            className="form-group group-buying-client"
                            style={{ marginTop: 10 }}
                        >
                            {/* <button
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                className="btn dropdown-toggle"
              >
                공동 구매 대상 여부
              </button> */}
                            <Select
                                defaultValue="공동 구매 대상 여부"
                                style={{ width: 180 }}
                                onChange={onSelectChange}
                            >
                                <Option value="O">O</Option>
                                <Option value="X">X</Option>
                                <Option value="default">전체</Option>
                            </Select>
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
                dataSource={resultListData}
                footer={footer}
                pagination={false}
                scroll={{ y: 300 }}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            onDetailClick(record.id);
                        },
                    };
                }}
            />
            {detailCheck ? (
                <Card size="small" extra={<>X</>} title="판매 대상 상세 내역">
                    <Descriptions title="개인 정보">
                        <Descriptions.Item>
                            {detailData.schoolName}
                            {detailData.schoolDivide}
                        </Descriptions.Item>
                        <Descriptions.Item>
                            {detailData.name} / {detailData.phoneNumber}/{' '}
                            {detailData.genderType}
                        </Descriptions.Item>
                    </Descriptions>
                    <Divider />
                    <Descriptions title="공동구매">
                        <Descriptions.Item label="공동 구매 대상 여부">
                            {detailData.yesOrNoType}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            ) : null}
        </AppLayout>
    );
};

export default ClientsList;
