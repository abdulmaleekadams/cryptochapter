'use client';
import { Button, Menu, Typography, Avatar } from 'antd';
import Link from 'next/link';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={'./vercel.svg'} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link href='/'>Cryptochapter</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined />}>
          <Link href={'/'}>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link href={'/cryptocurrencies'}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link href={'/exchanges'}>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link href={'/news'}>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
