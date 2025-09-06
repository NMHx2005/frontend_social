import React, { useState } from 'react';
import { Card, Row, Col, Typography, Button, Input, Table, Tag, Space, Statistic, Alert, QRCode } from 'antd';
import { CopyOutlined, ShareAltOutlined, GiftOutlined, UserAddOutlined, DollarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Referral: React.FC = () => {
    const [referralCode] = useState('HTDIGI2024');
    const [referralLink] = useState('https://htdigi.vn/ref/HTDIGI2024');

    const referralData = [
        {
            key: '1',
            username: 'user001',
            email: 'user001@email.com',
            joinDate: '2024-01-10',
            status: 'active',
            commission: 50000,
        },
        {
            key: '2',
            username: 'user002',
            email: 'user002@email.com',
            joinDate: '2024-01-15',
            status: 'active',
            commission: 75000,
        },
        {
            key: '3',
            username: 'user003',
            email: 'user003@email.com',
            joinDate: '2024-01-20',
            status: 'pending',
            commission: 0,
        },
    ];

    const columns = [
        {
            title: 'Tên người dùng',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Ngày tham gia',
            dataIndex: 'joinDate',
            key: 'joinDate',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === 'active' ? 'green' : 'orange'}>
                    {status === 'active' ? 'Hoạt động' : 'Chờ xác nhận'}
                </Tag>
            ),
        },
        {
            title: 'Hoa hồng',
            dataIndex: 'commission',
            key: 'commission',
            render: (amount: number) => `${amount.toLocaleString()} VNĐ`,
        },
    ];

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div style={{ padding: '24px' }}>
            <Title level={2} style={{ marginBottom: '24px', color: '#1890ff' }}>
                <GiftOutlined style={{ marginRight: '8px' }} />
                Hoa hồng giới thiệu
            </Title>

            <Alert
                message="Chương trình giới thiệu"
                description="Mời bạn bè tham gia và nhận 10% hoa hồng từ mỗi giao dịch của họ. Không giới hạn số lượng người giới thiệu!"
                type="info"
                showIcon
                style={{ marginBottom: '24px' }}
            />

            <Row gutter={[24, 24]}>
                {/* Thống kê */}
                <Col xs={24} lg={8}>
                    <Card>
                        <Statistic
                            title="Tổng hoa hồng"
                            value={125000}
                            suffix="VNĐ"
                            valueStyle={{ color: '#52c41a' }}
                            prefix={<DollarOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} lg={8}>
                    <Card>
                        <Statistic
                            title="Số người giới thiệu"
                            value={2}
                            valueStyle={{ color: '#1890ff' }}
                            prefix={<UserAddOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} lg={8}>
                    <Card>
                        <Statistic
                            title="Tỷ lệ hoa hồng"
                            value={10}
                            suffix="%"
                            valueStyle={{ color: '#faad14' }}
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
                {/* Mã giới thiệu */}
                <Col xs={24} lg={12}>
                    <Card title="Mã giới thiệu của bạn" bordered={false}>
                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                            <div>
                                <Text strong>Mã giới thiệu:</Text>
                                <div style={{ marginTop: '8px' }}>
                                    <Input
                                        value={referralCode}
                                        readOnly
                                        addonAfter={
                                            <Button
                                                icon={<CopyOutlined />}
                                                onClick={() => copyToClipboard(referralCode)}
                                            >
                                                Copy
                                            </Button>
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <Text strong>Link giới thiệu:</Text>
                                <div style={{ marginTop: '8px' }}>
                                    <Input
                                        value={referralLink}
                                        readOnly
                                        addonAfter={
                                            <Button
                                                icon={<CopyOutlined />}
                                                onClick={() => copyToClipboard(referralLink)}
                                            >
                                                Copy
                                            </Button>
                                        }
                                    />
                                </div>
                            </div>

                            <Button type="primary" icon={<ShareAltOutlined />} block>
                                Chia sẻ ngay
                            </Button>
                        </Space>
                    </Card>
                </Col>

                {/* QR Code */}
                <Col xs={24} lg={12}>
                    <Card title="QR Code giới thiệu" bordered={false}>
                        <div style={{ textAlign: 'center' }}>
                            <QRCode
                                value={referralLink}
                                size={200}
                                style={{ marginBottom: '16px' }}
                            />
                            <div>
                                <Text type="secondary">
                                    Quét mã QR để tham gia
                                </Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Danh sách người giới thiệu */}
            <Card title="Danh sách người được giới thiệu" style={{ marginTop: '24px' }}>
                <Table
                    columns={columns}
                    dataSource={referralData}
                    pagination={{
                        pageSize: 10,
                        showSizeChanger: true,
                        showQuickJumper: true,
                    }}
                />
            </Card>

            {/* Hướng dẫn */}
            <Card title="Hướng dẫn sử dụng" style={{ marginTop: '24px' }}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={8}>
                        <Card size="small" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>1️⃣</div>
                            <Title level={5}>Chia sẻ mã giới thiệu</Title>
                            <Text type="secondary">
                                Gửi mã giới thiệu hoặc link cho bạn bè
                            </Text>
                        </Card>
                    </Col>
                    <Col xs={24} md={8}>
                        <Card size="small" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>2️⃣</div>
                            <Title level={5}>Bạn bè đăng ký</Title>
                            <Text type="secondary">
                                Bạn bè sử dụng mã để đăng ký tài khoản
                            </Text>
                        </Card>
                    </Col>
                    <Col xs={24} md={8}>
                        <Card size="small" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>3️⃣</div>
                            <Title level={5}>Nhận hoa hồng</Title>
                            <Text type="secondary">
                                Nhận 10% hoa hồng từ mỗi giao dịch của họ
                            </Text>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Referral;
