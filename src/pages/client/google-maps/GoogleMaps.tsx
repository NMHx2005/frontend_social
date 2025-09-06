import React from 'react';
import { Card, Row, Col, Typography, Button, Input, Select, Form, Table, Tag, Space, Statistic, Tabs } from 'antd';
import { GoogleOutlined, FlagOutlined, EyeOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

const GoogleMaps: React.FC = () => {
    // const [loading, setLoading] = useState(false);

    const reviewData = [
        {
            key: '1',
            business: 'Nhà hàng ABC',
            address: '123 Đường ABC, Quận 1, TP.HCM',
            rating: 4.5,
            reviews: 150,
            status: 'completed',
            price: 50000,
        },
        {
            key: '2',
            business: 'Cửa hàng XYZ',
            address: '456 Đường XYZ, Quận 2, TP.HCM',
            rating: 4.2,
            reviews: 89,
            status: 'processing',
            price: 35000,
        },
    ];

    const reportData = [
        {
            key: '1',
            business: 'Cửa hàng DEF',
            address: '789 Đường DEF, Quận 3, TP.HCM',
            reason: 'Review giả mạo',
            status: 'pending',
            submittedAt: '2024-01-15 10:30',
        },
        {
            key: '2',
            business: 'Nhà hàng GHI',
            address: '321 Đường GHI, Quận 4, TP.HCM',
            reason: 'Spam review',
            status: 'completed',
            submittedAt: '2024-01-14 15:20',
        },
    ];

    const trafficData = [
        {
            key: '1',
            business: 'Cửa hàng JKL',
            address: '654 Đường JKL, Quận 5, TP.HCM',
            views: 1000,
            status: 'completed',
            price: 75000,
        },
    ];

    const reviewColumns = [
        {
            title: 'Tên doanh nghiệp',
            dataIndex: 'business',
            key: 'business',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Đánh giá hiện tại',
            dataIndex: 'rating',
            key: 'rating',
            render: (rating: number) => (
                <Space>
                    <StarOutlined style={{ color: '#faad14' }} />
                    <Text>{rating}/5</Text>
                </Space>
            ),
        },
        {
            title: 'Số review',
            dataIndex: 'reviews',
            key: 'reviews',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === 'completed' ? 'green' : 'blue'}>
                    {status === 'completed' ? 'Hoàn thành' : 'Đang xử lý'}
                </Tag>
            ),
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => `${price.toLocaleString()} VNĐ`,
        },
    ];

    const reportColumns = [
        {
            title: 'Tên doanh nghiệp',
            dataIndex: 'business',
            key: 'business',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Lý do tố cáo',
            dataIndex: 'reason',
            key: 'reason',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === 'completed' ? 'green' : 'orange'}>
                    {status === 'completed' ? 'Đã xử lý' : 'Chờ xử lý'}
                </Tag>
            ),
        },
        {
            title: 'Ngày gửi',
            dataIndex: 'submittedAt',
            key: 'submittedAt',
        },
    ];

    const trafficColumns = [
        {
            title: 'Tên doanh nghiệp',
            dataIndex: 'business',
            key: 'business',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Lượt xem',
            dataIndex: 'views',
            key: 'views',
            render: (views: number) => views.toLocaleString(),
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === 'completed' ? 'green' : 'blue'}>
                    {status === 'completed' ? 'Hoàn thành' : 'Đang xử lý'}
                </Tag>
            ),
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => `${price.toLocaleString()} VNĐ`,
        },
    ];

    return (
        <div style={{ padding: '24px' }}>
            <Title level={2} style={{ marginBottom: '24px', color: '#1890ff' }}>
                <GoogleOutlined style={{ marginRight: '8px' }} />
                Google Maps Services
            </Title>

            {/* Thống kê */}
            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
                <Col xs={24} sm={6}>
                    <Card>
                        <Statistic
                            title="Tổng đơn hàng"
                            value={3}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={6}>
                    <Card>
                        <Statistic
                            title="Đã hoàn thành"
                            value={2}
                            valueStyle={{ color: '#52c41a' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={6}>
                    <Card>
                        <Statistic
                            title="Tổng chi phí"
                            value={160000}
                            suffix="VNĐ"
                            valueStyle={{ color: '#ff4d4f' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={6}>
                    <Card>
                        <Statistic
                            title="Tỷ lệ thành công"
                            value={66.7}
                            suffix="%"
                            valueStyle={{ color: '#faad14' }}
                        />
                    </Card>
                </Col>
            </Row>

            <Tabs defaultActiveKey="review">
                <TabPane tab="Review Google Maps" key="review">
                    <Card title="Tạo đơn review Google Maps" style={{ marginBottom: '24px' }}>
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col xs={24} sm={12}>
                                    <Form.Item label="Tên doanh nghiệp">
                                        <Input placeholder="Nhập tên doanh nghiệp" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item label="Địa chỉ">
                                        <Input placeholder="Nhập địa chỉ" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item label="Số lượng review">
                                        <Select placeholder="Chọn số lượng">
                                            <Option value={10}>10 review</Option>
                                            <Option value={25}>25 review</Option>
                                            <Option value={50}>50 review</Option>
                                            <Option value={100}>100 review</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item label="Đánh giá">
                                        <Select placeholder="Chọn đánh giá">
                                            <Option value={5}>5 sao</Option>
                                            <Option value={4}>4 sao</Option>
                                            <Option value={3}>3 sao</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item label="Giá">
                                        <Input value="50,000 VNĐ" readOnly />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" icon={<StarOutlined />}>
                                Tạo đơn review
                            </Button>
                        </Form>
                    </Card>

                    <Card title="Lịch sử review">
                        <Table
                            columns={reviewColumns}
                            dataSource={reviewData}
                            pagination={false}
                        />
                    </Card>
                </TabPane>

                <TabPane tab="Tố cáo Review" key="report">
                    <Card title="Tạo đơn tố cáo" style={{ marginBottom: '24px' }}>
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col xs={24} sm={12}>
                                    <Form.Item label="Tên doanh nghiệp">
                                        <Input placeholder="Nhập tên doanh nghiệp" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item label="Địa chỉ">
                                        <Input placeholder="Nhập địa chỉ" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24}>
                                    <Form.Item label="Lý do tố cáo">
                                        <Select placeholder="Chọn lý do">
                                            <Option value="fake">Review giả mạo</Option>
                                            <Option value="spam">Spam review</Option>
                                            <Option value="inappropriate">Nội dung không phù hợp</Option>
                                            <Option value="other">Khác</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24}>
                                    <Form.Item label="Mô tả chi tiết">
                                        <Input.TextArea rows={4} placeholder="Mô tả chi tiết lý do tố cáo" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" icon={<FlagOutlined />}>
                                Gửi tố cáo
                            </Button>
                        </Form>
                    </Card>

                    <Card title="Lịch sử tố cáo">
                        <Table
                            columns={reportColumns}
                            dataSource={reportData}
                            pagination={false}
                        />
                    </Card>
                </TabPane>

                <TabPane tab="Tăng lượt truy cập Maps" key="traffic">
                    <Card title="Tạo đơn tăng traffic" style={{ marginBottom: '24px' }}>
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col xs={24} sm={12}>
                                    <Form.Item label="Tên doanh nghiệp">
                                        <Input placeholder="Nhập tên doanh nghiệp" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item label="Địa chỉ">
                                        <Input placeholder="Nhập địa chỉ" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item label="Số lượt xem">
                                        <Select placeholder="Chọn số lượt">
                                            <Option value={500}>500 lượt</Option>
                                            <Option value={1000}>1,000 lượt</Option>
                                            <Option value={2000}>2,000 lượt</Option>
                                            <Option value={5000}>5,000 lượt</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item label="Thời gian">
                                        <Select placeholder="Chọn thời gian">
                                            <Option value="1">1 ngày</Option>
                                            <Option value="3">3 ngày</Option>
                                            <Option value="7">1 tuần</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={8}>
                                    <Form.Item label="Giá">
                                        <Input value="75,000 VNĐ" readOnly />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" icon={<EyeOutlined />}>
                                Tạo đơn traffic
                            </Button>
                        </Form>
                    </Card>

                    <Card title="Lịch sử traffic">
                        <Table
                            columns={trafficColumns}
                            dataSource={trafficData}
                            pagination={false}
                        />
                    </Card>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default GoogleMaps;
