'use client';
import Image from 'next/image';
import Link from 'next/link';
import millify from 'millify';
import { Layout, Typography, Row, Col, Statistic } from 'antd';

const { Title } = Typography;

export default function Home() {
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={'5'} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Exchanges' value={'5'} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Market Cap' value={'5'} />
        </Col>
        <Col span={12}>
          <Statistic title='Total 24h Volume' value={'5'} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Markets' value={'5'} />
        </Col>
      </Row>
    </>
  );
}
