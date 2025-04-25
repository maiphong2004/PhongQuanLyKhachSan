import React from 'react'; // Đảm bảo import React
import './App.css';
import logo from './Group 1.png';
import Login from './Login.js'; // Import component Login (chú ý đường dẫn)
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

  const goToLogin = () => {
    console.log('Chuyển hướng đến /login');  // Kiểm tra xem hàm này có chạy không
    navigate('/login');
  };
  return (
    <div className="App">
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ height: '60px' }} />
        </div>
        <div className="auth-buttons">
          <button onClick={(goToLogin)}
            style={{
              backgroundColor: 'transparent', color: '#ffc107', fontWeight: 'bold'
            }}>Đăng nhập</button>
          <button
            style={{
              backgroundColor: '#ffc107', color: '#000', fontWeight: 'bold'
            }}>Đăng ký</button>
        </div>
      </div>
      <header className="App-header">
        <h3>
          ✨QUẢN LÝ KHÁCH SẠN DỄ DÀNG, HIỆU QUẢ VÀ THÔNG MINH✨
          <h5>
            Tối ưu hoá quy trình đặt phòng, kiểm soát hoạt động và nâng cao trải nghiệm khách hàng - tất cả trong một nền tảng duy nhất
          </h5>
        </h3>
      </header>
      <Routes>
        <Route path="/login" element={<Login />} />  {/* Định nghĩa route */}
      </Routes>
    </div>
  );
}

function RootApp() { // Bọc App trong BrowserRouter
  return (
    <Router>
      <App />
    </Router>
  );
}

export default RootApp;