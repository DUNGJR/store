import {
  Clock,
  Locate,
  LocateFixed,
  LocateIcon,
  PhoneCall,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-10 flex justify-between items-center">
        <div className="left-content w-1/2 pl-36 pr-24">
          <h4 className="text-lg font-bold">CÔNG TY CỔ PHẦN QUỐC TẾ MBA</h4>
          <p className="text-justify">
            Công ty Cổ phần Quốc tế MBA là nhà cung cấp các giải pháp toàn diện
            uy tín cho ngành Giáo Dục - Y Tế - Công Nghệ Cao đến từ các nhà sản
            xuất danh tiếng trên thế giới. Với hơn 17 năm kinh nghiệm, MBA luôn
            mang đến cho khách hàng những trải nghiệm tốt nhất về sản phẩm và
            dịch vụ với giá cả hợp lý nhất.
          </p>
        </div>
        <div className="right-content w-1/2 pr-36">
          <h4 className="text-lg font-bold">THÔNG TIN LIÊN HỆ</h4>
          <ul className="text-justify">
            <li className="flex items-center space-x-2">
              <Locate></Locate>
              <p>
                Địa chỉ: 96 - 98 - 100 Đường số 4, KDC 6B Intresco, Phạm Hùng
                nối dài, Bình Hưng, Huyện Bình Chánh, TP.HCM
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <PhoneCall></PhoneCall>
              <p>Điện thoại: 098 3388 098 - Email: sales@mba.com.vn</p>
            </li>
            <li className="flex items-center space-x-2">
              <Clock></Clock>
              <p>
                T2 - T7 | Sáng: 7:30 - 12:00 | Chiều: 13:30 - 17:00 (Trừ Chủ
                Nhật và các ngày lễ)
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; Công ty Cổ phần Quốc tế MBA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
