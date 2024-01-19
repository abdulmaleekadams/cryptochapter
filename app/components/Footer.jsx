'use client';
import { Typography, Space } from 'antd';
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer'>
      <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
        CryptoChapter <br />
        All rights reserved
          </Typography.Title>
          <Space>
              <Link href={'/'}>Home</Link>
              <Link href={'/exchanges'}>Exchanges</Link>
              <Link href={'/news'}>News</Link>
          </Space>
    </div>
  );
};

export default Footer;
