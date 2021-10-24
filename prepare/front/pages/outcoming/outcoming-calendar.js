import { Calendar, Card, Row, Col, Typography, Avatar } from "antd";
import React, { useCallback, useState } from "react";
import AppLayout from "../../components/Layouts/AppLayout";
import moment from "moment";

const { Title } = Typography;
const { Meta } = Card;

const title = "판매 현황";
const subTitle = "월별 / 일일 매출과 재고량을 시각화하여 보여줍니다";

const OutcomingCalendar = () => {
  const [today, setToday] = useState(moment().format("YYYY년 MM월 DD일"));

  const onDateSelect = useCallback((date) => {
    setToday(date.format("YYYY년 MM월 DD일"));
  }, []);

  return (
    <AppLayout title={title} subTitle={subTitle}>
      <Calendar onSelect={onDateSelect} />
      <Title level={3}>{today}</Title>
      <Row gutter={[16, 16]}>
        <Col md="12" lg="6">
          <Card title="하루 매출">
            <Meta description="|100,000원" />
            <Row>입고 : 8건</Row>
            <Row>출고: 4건</Row>
          </Card>
        </Col>
        <Col md="12" lg="6">
          <Card title="입고한 물품">
            <Row>고등/백신/동복/남자/마이/신상/XL (2건) </Row>
            <Row>고등/백신/동복/남자/마이/신상/L (2건) </Row>
            <Row>고등/백신/동복/여자/치마/신상/L (2건)</Row>
            <Row>고등/백신/동복/여자/마이/신상/M (2건)</Row>
          </Card>
        </Col>
        <Col md="12" lg="6">
          <Card title="판매한 물품">
            <Row>고등/백신/동복/남자/마이/신상/XL (2건) ₩ 85,000</Row>
            <Row>고등/백신/동복/남자/마이/신상/L (2건) ₩ 70,000 </Row>
          </Card>
        </Col>
        <Col md="12" lg="6">
          <Card title="교환한 물품">
            <Row>
              {"고등/백신/동복/남자/마이/이월/XL 신상 => 이월 (1건) - ₩ 25,000"}
            </Row>
            <Row>
              {"고등/백신/동복/남자/마이/이월/L 신상 => 이월 (1건) - ₩ 25,000"}
            </Row>
          </Card>
        </Col>
      </Row>
    </AppLayout>
  );
};

export default OutcomingCalendar;
