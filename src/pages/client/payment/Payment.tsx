import React from 'react';
import { Card, Row, Col, Button, Input, Select, Form, Typography, Divider, Space } from 'antd';
import { CreditCardOutlined, BankOutlined, WalletOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const Payment: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Payment values:', values);
    };

    return (
        <div style={{ padding: '24px' }}>
            <Title level={2} style={{ marginBottom: '24px', color: '#1890ff' }}>
                <CreditCardOutlined style={{ marginRight: '8px' }} />
                Nạp tiền vào tài khoản
            </Title>

            <Row gutter={[24, 24]}>
                {/* Thông tin tài khoản */}
                <Col xs={24} lg={8}>
                    <Card title="Thông tin tài khoản" bordered={false}>
                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                            <div>
                                <Text type="secondary">Số dư hiện tại</Text>
                                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1890ff' }}>
                                    0 VNĐ
                                </div>
                            </div>
                            <Divider />
                            <div>
                                <Text type="secondary">Tổng đã nạp</Text>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#52c41a' }}>
                                    0 VNĐ
                                </div>
                            </div>
                            <div>
                                <Text type="secondary">Tổng đã sử dụng</Text>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff4d4f' }}>
                                    0 VNĐ
                                </div>
                            </div>
                        </Space>
                    </Card>
                </Col>

                {/* Form nạp tiền */}
                <Col xs={24} lg={16}>
                    <Card title="Nạp tiền" bordered={false}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            initialValues={{ amount: 100000, method: 'bank' }}
                        >
                            <Row gutter={16}>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        label="Số tiền nạp"
                                        name="amount"
                                        rules={[{ required: true, message: 'Vui lòng nhập số tiền!' }]}
                                    >
                                        <Input
                                            prefix="₫"
                                            placeholder="Nhập số tiền"
                                            size="large"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        label="Phương thức thanh toán"
                                        name="method"
                                        rules={[{ required: true, message: 'Vui lòng chọn phương thức!' }]}
                                    >
                                        <Select size="large">
                                            <Option value="bank">
                                                <BankOutlined /> Chuyển khoản ngân hàng
                                            </Option>
                                            <Option value="momo">
                                                <WalletOutlined /> Ví MoMo
                                            </Option>
                                            <Option value="zalopay">
                                                <WalletOutlined /> ZaloPay
                                            </Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large" block>
                                    <CheckCircleOutlined /> Xác nhận nạp tiền
                                </Button>
                            </Form.Item>
                        </Form>

                        <Divider>Gói nạp tiền nhanh</Divider>

                        <Row gutter={[12, 12]}>
                            {[
                                { amount: 50000, bonus: 0 },
                                { amount: 100000, bonus: 5000 },
                                { amount: 200000, bonus: 15000 },
                                { amount: 500000, bonus: 50000 },
                                { amount: 1000000, bonus: 120000 },
                                { amount: 2000000, bonus: 300000 }
                            ].map((pkg, index) => (
                                <Col xs={12} sm={8} md={4} key={index}>
                                    <Button
                                        size="large"
                                        style={{ width: '100%', height: '60px' }}
                                        onClick={() => form.setFieldsValue({ amount: pkg.amount })}
                                    >
                                        <div>
                                            <div style={{ fontWeight: 'bold' }}>
                                                {pkg.amount.toLocaleString()}₫
                                            </div>
                                            {pkg.bonus > 0 && (
                                                <div style={{ fontSize: '12px', color: '#52c41a' }}>
                                                    +{pkg.bonus.toLocaleString()}₫
                                                </div>
                                            )}
                                        </div>
                                    </Button>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </Col>
            </Row>

            {/* Lịch sử giao dịch */}
            <Card title="Lịch sử giao dịch gần đây" style={{ marginTop: '24px' }}>
                <div style={{ textAlign: 'center', padding: '40px 0', color: '#999' }}>
                    <CreditCardOutlined style={{ fontSize: '48px', marginBottom: '16px' }} />
                    <div>Chưa có giao dịch nào</div>
                </div>
            </Card>
        </div>
    );
};

export default Payment;
