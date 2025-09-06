import React, { useState } from 'react';
import { Card, Table, Tag, Button, Space, Typography, Row, Col, Statistic, Select, DatePicker, AutoComplete } from 'antd';
import { SearchOutlined, ReloadOutlined, EyeOutlined, DownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

const Orders: React.FC = () => {
    const [loading] = useState(false);
    const [filterType, setFilterType] = useState<string>('');

    const serviceTypes = [
        'Review Google Maps',
        'Traffic Google Maps',
        'Tố cáo bài đánh giá',
        'Tạo Maps',
        'Google User Search',
        'Traffic Direct',
        'Gửi tin Telegram',
        'Gửi tin Facebook',
        'Gửi tin Zalo',
        'Like Facebook Post',
        'Follow Instagram',
        'Like Tiktok Video',
        'Buff Youtube Followers',
        'Follow Shopee',
        'Tym Shopee'
    ];

    const columns = [
        {
            title: 'Mã đơn hàng',
            dataIndex: 'id',
            key: 'id',
            render: (text: string) => <Text code>{text}</Text>,
        },
        {
            title: 'Dịch vụ',
            dataIndex: 'service',
            key: 'service',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity: number) => quantity.toLocaleString(),
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => `${price.toLocaleString()} VNĐ`,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                const colors = {
                    'completed': 'green',
                    'processing': 'blue',
                    'pending': 'orange',
                    'cancelled': 'red'
                };
                return <Tag color={colors[status as keyof typeof colors]}>{status}</Tag>;
            },
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Hành động',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Button type="link" icon={<EyeOutlined />} size="small">
                        Xem
                    </Button>
                    <Button type="link" icon={<DownloadOutlined />} size="small">
                        Tải
                    </Button>
                </Space>
            ),
        },
    ];

    const mockData = [
        {
            key: '1',
            id: 'ORD-001',
            service: 'Like Facebook Post',
            quantity: 1000,
            price: 50000,
            status: 'completed',
            createdAt: '2024-01-15 10:30',
        },
        {
            key: '2',
            id: 'ORD-002',
            service: 'Follow Instagram',
            quantity: 500,
            price: 25000,
            status: 'processing',
            createdAt: '2024-01-14 15:20',
        },
        {
            key: '3',
            id: 'ORD-003',
            service: 'View YouTube Video',
            quantity: 2000,
            price: 100000,
            status: 'pending',
            createdAt: '2024-01-13 09:15',
        },
    ];

    return (
        <div style={{ padding: '24px' }}>
            <Title level={2} style={{ marginBottom: '24px', color: '#1890ff' }}>
                Lịch sử đơn hàng
            </Title>

            {/* Thống kê */}
            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
                <Col xs={24} sm={6}>
                    <Card>
                        <Statistic
                            title="Tổng đơn hàng"
                            value={mockData.length}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={6}>
                    <Card>
                        <Statistic
                            title="Đã hoàn thành"
                            value={1}
                            valueStyle={{ color: '#52c41a' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={6}>
                    <Card>
                        <Statistic
                            title="Đang xử lý"
                            value={1}
                            valueStyle={{ color: '#faad14' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={6}>
                    <Card>
                        <Statistic
                            title="Tổng chi phí"
                            value={175000}
                            suffix="VNĐ"
                            valueStyle={{ color: '#ff4d4f' }}
                        />
                    </Card>
                </Col>
            </Row>

            {/* Bộ lọc */}
            <Card style={{ marginBottom: '24px' }}>
                <Row gutter={[16, 16]} align="middle">
                    <Col xs={24} sm={12} md={6}>
                        <div>
                            <Text strong style={{ display: 'block', marginBottom: 4 }}>Lọc theo loại</Text>
                            <AutoComplete
                                value={filterType}
                                onChange={setFilterType}
                                options={serviceTypes.map(type => ({ value: type }))}
                                placeholder="Chọn loại dịch vụ..."
                                style={{ width: '100%' }}
                                filterOption={(inputValue, option) =>
                                    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <div>
                            <Text strong style={{ display: 'block', marginBottom: 4 }}>Trạng thái</Text>
                            <Select placeholder="Chọn trạng thái" style={{ width: '100%' }}>
                                <Option value="all">Tất cả</Option>
                                <Option value="completed">Hoàn thành</Option>
                                <Option value="processing">Đang xử lý</Option>
                                <Option value="pending">Chờ xử lý</Option>
                                <Option value="cancelled">Đã hủy</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <div>
                            <Text strong style={{ display: 'block', marginBottom: 4 }}>Thời gian</Text>
                            <RangePicker style={{ width: '100%' }} />
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <div>
                            <Text strong style={{ display: 'block', marginBottom: 4 }}>Hành động</Text>
                            <Space>
                                <Button type="primary" icon={<SearchOutlined />} size="small">
                                    Tìm kiếm
                                </Button>
                                <Button icon={<ReloadOutlined />} size="small">
                                    Làm mới
                                </Button>
                            </Space>
                        </div>
                    </Col>
                </Row>
            </Card>

            {/* Bảng đơn hàng */}
            <Card>
                <Table
                    columns={columns}
                    dataSource={mockData}
                    loading={loading}
                    pagination={{
                        pageSize: 10,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        showTotal: (total, range) =>
                            `${range[0]}-${range[1]} của ${total} đơn hàng`,
                    }}
                />
            </Card>
        </div>
    );
};

export default Orders;
