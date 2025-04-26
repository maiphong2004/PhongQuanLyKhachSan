import React from 'react'; // Đảm bảo import React
import './App.css';
import logo from './Group 1.png';

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ height: '60px' }} />
        </div>
        <div className="auth-buttons">
          <button
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
    </div>
  );
}
export default App;