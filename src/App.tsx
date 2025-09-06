import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import viVN from 'antd/locale/vi_VN';
import Layout from './components/client/layout/Layout';
import Home from './pages/client/home/Home';
import Login from './pages/client/login/Login';
import Register from './pages/client/register/Register';
import Payment from './pages/client/payment/Payment';
import Orders from './pages/client/orders/Orders';
import Referral from './pages/client/referral/Referral';
import GoogleMaps from './pages/client/google-maps/GoogleMaps';
import { AuthProvider } from './contexts/AuthContext.tsx';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={viVN}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Tạm thời bỏ ProtectedRoute để test */}
            <Route
              path="/*"
              element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user-payment" element={<Payment />} />
                    <Route path="/report" element={<Orders />} />
                    <Route path="/hoa-hong-gioi-thieu" element={<Referral />} />
                    <Route path="/review-map" element={<GoogleMaps />} />
                    <Route path="/report-map" element={<GoogleMaps />} />
                    <Route path="/traffic-maps" element={<GoogleMaps />} />
                    <Route path="/profile" element={<div>Profile Page</div>} />
                    <Route path="/settings" element={<div>Settings Page</div>} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App;
