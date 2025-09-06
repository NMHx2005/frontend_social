import React from 'react';
import { Card, Row, Col, Typography, Button, Space, Badge, Divider, List, Avatar } from 'antd';
import {
    MessageOutlined,
    GoogleOutlined,
    FacebookOutlined,
    YoutubeOutlined,
    InstagramOutlined,
    ShopOutlined,
    PlayCircleOutlined,
    PhoneOutlined,
    DollarOutlined,
    BarChartOutlined
} from '@ant-design/icons';
// import { useAuth } from '../../../hooks/useAuth';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
    // const { user } = useAuth();

    const services = [
        {
            category: 'Google Maps',
            icon: <GoogleOutlined style={{ color: '#1890ff' }} />,
            items: [
                { name: 'Review Google Maps', price: '18.000', unit: 'đ/lượt' },
                { name: 'Tố cáo Review', price: '600', unit: 'đ/lượt' },
                { name: 'Tăng lượt truy cập Maps', price: '500', unit: 'đ/lượt' }
            ]
        },
        {
            category: 'Traffic',
            icon: <GoogleOutlined style={{ color: '#52c41a' }} />,
            items: [
                { name: 'Google User Search', price: '1.100', unit: 'đ/lượt' },
                { name: 'Traffic Direct', price: '1.000', unit: 'đ/lượt' }
            ]
        },
        {
            category: 'Facebook',
            icon: <FacebookOutlined style={{ color: '#1877f2' }} />,
            items: [
                { name: 'Lên Tích Xanh', price: '2.000.000', unit: 'đ/lượt' },
                { name: 'Đánh giá/ Đề xuất Fanpage', price: '3.000', unit: 'đ/lượt' },
                { name: 'Like bài viết', price: '25', unit: 'đ/lượt' },
                { name: 'Like Comment', price: '30', unit: 'đ/lượt' },
                { name: 'View Video', price: '1', unit: 'đ/lượt' },
                { name: 'Comment Facebook', price: '600', unit: 'đ/lượt' },
                { name: 'Share Facebook', price: '500', unit: 'đ/lượt' },
                { name: 'Like + Follow Fanpage', price: '600', unit: 'đ/lượt' },
                { name: 'Theo dõi cá nhân FB', price: '25', unit: 'đ/lượt' },
                { name: 'Member Group Facebook', price: '40', unit: 'đ/lượt' }
            ]
        },
        {
            category: 'Tiktok',
            icon: <PlayCircleOutlined style={{ color: '#000' }} />,
            items: [
                { name: 'Follow Tiktok', price: '150', unit: 'đ/lượt' },
                { name: 'Tym Video Tiktok', price: '15', unit: 'đ/lượt' },
                { name: 'Comment Tiktok', price: '200', unit: 'đ/lượt' },
                { name: 'View Video Tiktok', price: '0.03', unit: 'đ/lượt' }
            ]
        },
        {
            category: 'Instagram',
            icon: <InstagramOutlined style={{ color: '#e4405f' }} />,
            items: [
                { name: 'Like Instagram', price: '15', unit: 'đ/lượt' },
                { name: 'Follow Instagram', price: '40', unit: 'đ/lượt' },
                { name: 'Comment Instagram', price: '100', unit: 'đ/lượt' }
            ]
        },
        {
            category: 'Youtube',
            icon: <YoutubeOutlined style={{ color: '#ff0000' }} />,
            items: [
                { name: 'Buff Theo dõi Youtube', price: '200', unit: 'đ/lượt' },
                { name: 'Buff Comment Video', price: '200', unit: 'đ/lượt' }
            ]
        },
        {
            category: 'Gửi tin nhắn',
            icon: <MessageOutlined style={{ color: '#722ed1' }} />,
            items: [
                { name: 'Tin nhắn Telegram', price: '200', unit: 'đ/lượt' },
                { name: 'Tin nhắn Facebook', price: '500', unit: 'đ/lượt' },
                { name: 'Tin nhắn Zalo', price: '500', unit: 'đ/lượt' }
            ]
        },
        {
            category: 'Shopee',
            icon: <ShopOutlined style={{ color: '#ee4d2d' }} />,
            items: [
                { name: 'Follow Shopee', price: '100', unit: 'đ/lượt' },
                { name: 'Tym Shopee', price: '40', unit: 'đ/lượt' },
                { name: 'Traffic Shopee', price: '150', unit: 'đ/lượt' },
                { name: 'Mắt xem Livestream 30 phút', price: '100', unit: 'đ/lượt' }
            ]
        }
    ];

    return (
        <div style={{ padding: '0' }}>
            <Row gutter={[16, 16]}>
                {/* Danh sách dịch vụ - Bên trái */}
                <Col xs={24} lg={16} xl={16}>
                    <div style={{ marginBottom: 24 }}>
                        <Title level={2}>Danh sách dịch vụ</Title>
                        <Paragraph type="secondary">
                            Các dịch vụ social media marketing chất lượng cao với giá cả cạnh tranh
                        </Paragraph>
                    </div>

                    {services.map((service, index) => (
                        <Card
                            key={index}
                            title={
                                <Space>
                                    {service.icon}
                                    <span>{service.category}</span>
                                </Space>
                            }
                            style={{ marginBottom: 16 }}
                            variant="outlined"
                        >
                            <Row gutter={[12, 12]}>
                                {service.items.map((item, itemIndex) => (
                                    <Col xs={24} sm={12} md={8} lg={6} xl={6} key={itemIndex}>
                                        <Card
                                            size="small"
                                            hoverable
                                            style={{
                                                height: '100%',
                                                border: '1px solid #f0f0f0',
                                                borderRadius: '8px'
                                            }}
                                        >
                                            <Space direction="vertical" style={{ width: '100%' }}>
                                                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                                                    {item.name}
                                                </div>
                                                <div style={{ color: '#1890ff', fontSize: '16px', fontWeight: 'bold' }}>
                                                    {item.price} {item.unit}
                                                </div>
                                                <Button type="primary" size="small" block>
                                                    Đặt ngay
                                                </Button>
                                            </Space>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Card>
                    ))}
                </Col>

                {/* Thông báo và thống kê - Bên phải */}
                <Col xs={24} lg={8} xl={8}>
                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        {/* Thông báo liên hệ */}
                        <Card title="Liên hệ hỗ trợ" variant="outlined">
                            <Space direction="vertical" style={{ width: '100%' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <Avatar size={64} icon={<PhoneOutlined />} style={{ backgroundColor: '#52c41a' }} />
                                    <div style={{ marginTop: 8, fontWeight: 'bold' }}>Zalo Support</div>
                                    <div style={{ color: '#666' }}>0123456789</div>
                                </div>
                                <Button type="primary" block icon={<PhoneOutlined />}>
                                    Liên hệ ngay
                                </Button>
                            </Space>
                        </Card>

                        {/* Nạp tiền */}
                        <Card title="Nạp tiền vào tài khoản" variant="outlined">
                            <Space direction="vertical" style={{ width: '100%' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>
                                        0 VNĐ
                                    </div>
                                    <div style={{ color: '#666' }}>Số dư hiện tại</div>
                                </div>
                                <Button type="primary" block icon={<DollarOutlined />}>
                                    Nạp tiền ngay
                                </Button>
                            </Space>
                        </Card>

                        {/* Báo cáo thống kê */}
                        <Card title="Báo cáo thống kê" variant="outlined">
                            <Space direction="vertical" style={{ width: '100%' }} size="middle">
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                        <span>Tổng tiền:</span>
                                        <span style={{ fontWeight: 'bold', color: '#1890ff' }}>0 VNĐ</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                        <span>Tháng này:</span>
                                        <span style={{ fontWeight: 'bold', color: '#52c41a' }}>0 VNĐ</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Tổng nạp:</span>
                                        <span style={{ fontWeight: 'bold', color: '#faad14' }}>0 VNĐ</span>
                                    </div>
                                </div>
                                <Divider style={{ margin: '8px 0' }} />
                                <Button type="default" block icon={<BarChartOutlined />}>
                                    Xem chi tiết
                                </Button>
                            </Space>
                        </Card>

                        {/* Thông báo hệ thống */}
                        <Card title="Thông báo" variant="outlined">
                            <List
                                size="small"
                                dataSource={[
                                    { title: 'Hệ thống hoạt động bình thường', time: '2 phút trước' },
                                    { title: 'Cập nhật giá dịch vụ mới', time: '1 giờ trước' },
                                    { title: 'Bảo trì hệ thống vào 2h sáng', time: '3 giờ trước' }
                                ]}
                                renderItem={(item) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Badge status="processing" />}
                                            title={<div style={{ fontSize: '12px' }}>{item.title}</div>}
                                            description={<div style={{ fontSize: '11px', color: '#999' }}>{item.time}</div>}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
