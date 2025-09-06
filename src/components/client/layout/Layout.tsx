import React, { useState, useEffect } from 'react';
import { Layout as AntLayout, Menu, Button, Divider } from 'antd';
import {
    HomeOutlined,
    GoogleOutlined,
    FacebookOutlined,
    YoutubeOutlined,
    InstagramOutlined,
    ShopOutlined,
    CreditCardOutlined,
    BellOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MessageOutlined,
    PlayCircleOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const { Sider, Content } = AntLayout;

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined style={{ color: 'white', border: '1px solid white', padding: '4px', borderRadius: '6px' }} />,
            label: 'Home',
            children: [
                {
                    key: '/',
                    label: 'Trang chủ',
                },
                {
                    key: '/user-payment',
                    label: 'Nạp tiền',
                },
                {
                    key: '/report',
                    label: 'Lịch sử đơn hàng',
                },
                {
                    key: '/hoa-hong-gioi-thieu',
                    label: 'Hoa hồng giới thiệu',
                },
            ],
        },
        {
            key: 'review',
            icon: <GoogleOutlined style={{ color: 'white', border: '1px solid white', padding: '4px', borderRadius: '6px' }} />,
            label: 'Google Maps',
            children: [
                {
                    key: '/review-map',
                    label: 'Review Google Maps',
                },
                {
                    key: '/report-map',
                    label: 'Tố cáo Review',
                },
                {
                    key: '/traffic-maps',
                    label: 'Tăng lượt truy cập Maps',
                },
            ],
        },
        {
            key: 'traffic-buff',
            icon: <GoogleOutlined style={{ color: 'white', border: '1px solid white', padding: '4px', borderRadius: '6px' }} />,
            label: 'Traffic',
            children: [
                {
                    key: '/traffics',
                    label: 'Google User Search',
                },
                {
                    key: '/traffic-redirect',
                    label: 'Traffic Direct',
                },
            ],
        },
        {
            key: 'facebook-buff',
            icon: <FacebookOutlined style={{ color: 'white', border: '1px solid white', padding: '4px', borderRadius: '6px' }} />,
            label: 'Facebook',
            children: [
                {
                    key: '/tich-xanh',
                    label: 'Lên Tích Xanh',
                },
                {
                    key: '/review-fanpage',
                    label: 'Đánh giá/ Đề xuất Fanpage',
                },
                {
                    key: '/like-poster',
                    label: 'Like bài viết',
                },
                {
                    key: '/facebook-like-comment',
                    label: 'Like Comment',
                },
                {
                    key: '/view-facebook',
                    label: 'View Video',
                },
                {
                    key: '/facebook-comment',
                    label: 'Comment Facebook',
                },
                {
                    key: '/facebook-share',
                    label: 'Share Facebook',
                },
                {
                    key: '/facebook-follow',
                    label: 'Like + Follow Fanpage',
                },
                {
                    key: '/theo-doi-ca-nhan',
                    label: 'Theo dõi cá nhân FB',
                },
                {
                    key: '/member-group-facebook',
                    label: 'Member Group Facebook',
                },
            ],
        },
        {
            key: 'message-buff',
            icon: <MessageOutlined style={{ color: 'white', border: '1px solid white', padding: '4px', borderRadius: '6px' }} />,
            label: 'Gửi tin nhắn',
            children: [
                {
                    key: '/telegram-message',
                    label: 'Tin nhắn Telegram',
                },
                {
                    key: '/facebook-message',
                    label: 'Tin nhắn Facebook',
                },
                {
                    key: '/zalo-message',
                    label: 'Tin nhắn Zalo',
                },
            ],
        },
        {
            key: 'tiktok-buff',
            icon: <PlayCircleOutlined style={{ color: 'white', border: '1px solid white', padding: '4px', borderRadius: '6px' }} />,
            label: 'Tiktok',
            children: [
                {
                    key: '/follow-tiktok',
                    label: 'Follow Tiktok',
                },
                {
                    key: '/tym-video-tiktok',
                    label: 'Tym Video Tiktok',
                },
                {
                    key: '/comment-tiktok',
                    label: 'Comment Tiktok',
                },
                {
                    key: '/view-video-tiktok',
                    label: 'View Video Tiktok',
                },
            ],
        },
        {
            key: 'youtube-buff',
            icon: <YoutubeOutlined style={{ color: 'white', border: '1px solid white', padding: '4px', borderRadius: '6px' }} />,
            label: 'Youtube',
            children: [
                {
                    key: '/buff-follow-youtube',
                    label: 'Buff Theo dõi Youtube',
                },
                {
                    key: '/buff-comment-youtube',
                    label: 'Buff Comment Video',
                },
            ],
        },
        {
            key: 'instagram-buff',
            icon: <InstagramOutlined style={{ color: 'white', border: '1px solid white', padding: '4px', borderRadius: '6px' }} />,
            label: 'Instagram',
            children: [
                {
                    key: '/like-instagram',
                    label: 'Like Instagram',
                },
                {
                    key: '/follow-instagram',
                    label: 'Follow Instagram',
                },
                {
                    key: '/comment-instagram',
                    label: 'Comment Instagram',
                },
            ],
        },
        {
            key: 'shopee-buff',
            icon: <ShopOutlined style={{ color: 'white', border: '1px solid white', padding: '4px', borderRadius: '6px' }} />,
            label: 'Shopee',
            children: [
                {
                    key: '/follow-shopee',
                    label: 'Follow Shopee',
                },
                {
                    key: '/tym-shopee',
                    label: 'Tym Shopee',
                },
                {
                    key: '/traffic-shopee',
                    label: 'Traffic Shopee',
                },
                {
                    key: '/livestream-shopee',
                    label: 'Mắt xem Livestream 30 phút',
                },
            ],
        },
    ];

    // Auto-open submenu when path changes
    useEffect(() => {
        // Function to find which submenu contains the current path
        const findParentSubmenu = (path: string): string | null => {
            const items = [
                { key: 'home', children: [{ key: '/' }, { key: '/user-payment' }, { key: '/report' }, { key: '/hoa-hong-gioi-thieu' }] },
                { key: 'review', children: [{ key: '/review-map' }, { key: '/report-map' }, { key: '/traffic-maps' }] },
                { key: 'traffic-buff', children: [{ key: '/traffics' }, { key: '/traffic-redirect' }] },
                { key: 'facebook-buff', children: [{ key: '/tich-xanh' }, { key: '/review-fanpage' }, { key: '/like-poster' }, { key: '/facebook-like-comment' }, { key: '/view-facebook' }, { key: '/facebook-comment' }, { key: '/facebook-share' }, { key: '/facebook-follow' }, { key: '/theo-doi-ca-nhan' }, { key: '/member-group-facebook' }] },
                { key: 'message-buff', children: [{ key: '/telegram-message' }, { key: '/facebook-message' }, { key: '/zalo-message' }] },
                { key: 'tiktok-buff', children: [{ key: '/follow-tiktok' }, { key: '/tym-video-tiktok' }, { key: '/comment-tiktok' }, { key: '/view-video-tiktok' }] },
                { key: 'youtube-buff', children: [{ key: '/buff-follow-youtube' }, { key: '/buff-comment-youtube' }] },
                { key: 'instagram-buff', children: [{ key: '/like-instagram' }, { key: '/follow-instagram' }, { key: '/comment-instagram' }] },
                { key: 'shopee-buff', children: [{ key: '/follow-shopee' }, { key: '/tym-shopee' }, { key: '/traffic-shopee' }, { key: '/livestream-shopee' }] }
            ];

            for (const item of items) {
                if (item.children) {
                    const hasChild = item.children.some(child => child.key === path);
                    if (hasChild) {
                        return item.key;
                    }
                }
            }
            return null;
        };

        const parentKey = findParentSubmenu(location.pathname);
        if (parentKey) {
            setOpenKeys([parentKey]);
        }
    }, [location.pathname]);

    const handleMenuClick = ({ key }: { key: string }) => {
        if (key.startsWith('/')) {
            navigate(key);
        }
    };

    const handleOpenChange = (keys: string[]) => {
        setOpenKeys(keys);
    };

    return (
        <AntLayout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
            {/* Mobile Menu Toggle Button */}
            <div className="mobile-menu-toggle" style={{ display: 'none' }}>
                <Button
                    type="primary"
                    icon={<MenuFoldOutlined />}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    Menu
                </Button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999
                    }}
                />
            )}

            <Sider
                width={collapsed ? 80 : 280}
                collapsed={collapsed}
                breakpoint="lg"
                collapsedWidth={80}
                className={mobileMenuOpen ? 'mobile-open' : ''}
                style={{
                    background: '#1890ff',
                    position: 'fixed',
                    height: '100vh',
                    left: 0,
                    top: 0,
                    zIndex: 1000,
                    overflow: 'hidden'
                }}
            >
                {/* Sidebar Wrapper */}
                <div className="_side-bar-wrapper_127vg_1" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Logo Section */}
                    <div className="_logo-side-bar_1s0em_1" style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <a href="/home" style={{ textDecoration: 'none' }}>
                            <img
                                alt="logo"
                                src="https://api.htdigi.vn/assets/logo.png"
                                className="_logo_1s0em_1"
                                style={{
                                    width: collapsed ? '40px' : '60px',
                                    height: collapsed ? '40px' : '60px',
                                    objectFit: 'contain'
                                }}
                            />
                        </a>
                    </div>

                    {/* Toggle Button */}
                    <div style={{ padding: '10px', textAlign: 'center' }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                color: 'white',
                                border: 'none',
                                width: '100%',
                                height: '40px'
                            }}
                        />
                    </div>

                    {/* Menu Wrapper */}
                    <div className="_menu-wrapper_155kj_1" style={{ flex: 1, overflowY: 'auto', paddingBottom: collapsed ? '20px' : '120px' }}>
                        <Menu
                            mode="inline"
                            items={menuItems}
                            onClick={handleMenuClick}
                            selectedKeys={[location.pathname]}
                            openKeys={openKeys}
                            onOpenChange={handleOpenChange}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white'
                            }}
                            theme="dark"
                        />
                    </div>

                    {/* Profile Wrapper - Only show when not collapsed */}
                    {!collapsed && (
                        <div className="_profile-wrapper_5p4lf_1" style={{ padding: '15px' }}>
                            <div className="_profile-content_5p4lf_6" style={{ background: 'white', borderRadius: '8px', padding: '15px' }}>
                                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                                    <p className="_name_5p4lf_19" style={{ margin: '0 0 5px 0', color: '#1890ff', fontWeight: 'bold', fontSize: '14px' }}>
                                        {user?.username || 'hungnm22092005'}
                                    </p>
                                    <p className="_type_5p4lf_28" style={{ margin: '0 0 5px 0', color: '#666', fontSize: '12px' }}>Số dư</p>
                                    <p className="_number_5p4lf_34" style={{ margin: '0', color: '#1890ff', fontWeight: 'bold', fontSize: '16px' }}>
                                        0 VNĐ
                                    </p>
                                </div>
                                <Divider style={{ margin: '10px 0' }} />
                                <div>
                                    <a href="/user-payment" style={{ textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                                        <div className="_profile-menu-item_5p4lf_39" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '8px 0',
                                            color: '#1890ff',
                                            fontSize: '13px'
                                        }}>
                                            <CreditCardOutlined style={{ color: '#1890ff' }} />
                                            <span>Nạp tiền</span>
                                        </div>
                                    </a>
                                    <a href="/report" style={{ textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                                        <div className="_profile-menu-item_5p4lf_39" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '8px 0',
                                            color: '#1890ff',
                                            fontSize: '13px'
                                        }}>
                                            <BellOutlined style={{ color: '#1890ff' }} />
                                            <span>Đơn hàng</span>
                                        </div>
                                    </a>
                                    <a href="/login" style={{ textDecoration: 'none', display: 'block' }}>
                                        <div className="_profile-menu-item_5p4lf_39" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '8px 0',
                                            color: '#1890ff',
                                            fontSize: '13px'
                                        }}>
                                            <LogoutOutlined style={{ color: '#1890ff', transform: 'rotate(-90deg)' }} />
                                            <span>Đăng xuất</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Sider>

            {/* Main Content */}
            <AntLayout className={`main-layout ${collapsed ? 'collapsed' : ''}`} style={{
                minHeight: '100vh'
            }}>
                <Content
                    style={{
                        padding: '20px',
                        minHeight: '100vh',
                        background: '#f0f2f5'
                    }}
                >
                    {children}
                </Content>
            </AntLayout>
        </AntLayout>
    );
};

export default Layout;
