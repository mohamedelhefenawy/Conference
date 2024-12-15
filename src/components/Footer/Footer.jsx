import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import photo from "../../assets/images/logo.png";

function Footer({ line, useline }) {
  return (
    <div className="w-[80%] mx-auto mt-24 flex flex-col items-center gap-5">
      <footer
        style={{
          // backgroundColor: "#F5F5F5",
          color: "#666",
          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          padding: "6px 0",
        }}
        className="w-full"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10 text-center lg:text-right">
          <div className="text-center">
            <img
              src={photo}
              alt="King Fahad National Library"
              style={{
                maxWidth: "150px",
                marginBottom: "15px",
                margin: "auto",
              }}
            />
            <p>مكتبة الملك فهد الوطنية</p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="footer-link text-nowrap">
              خريطة الموقع
            </a>
            <a href="#" className="footer-link text-nowrap">
              أسئلة شائعة
            </a>
            <a href="#" className="footer-link text-nowrap">
              سياسة الخصوصية
            </a>
            <a href="#" className="footer-link text-nowrap">
              إتفاقية الاستخدام
            </a>
            <a href="#" className="footer-link text-nowrap">
              التبليغ عن حادثة أمن معلومات
            </a>
            <a href="#" className="footer-link text-nowrap">
              English
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://kfnl.gov.sa/Ar/About/ContactUs/Pages/ContactUs2.aspx"
              className="footer-link"
            >
              اتصل بنا
            </a>
            <a href="#" className="footer-link">
              قواعد المعلومات
            </a>
            <a href="#" className="footer-link">
              جولة عامة في المكتبة
            </a>
            <a href="#" className="footer-link">
              البريد الإلكتروني
            </a>
            <a href="#" className="footer-link">
              إتفاقية مستوى الخدمة
            </a>
            <a href="#" className="footer-link">
              مكتب تحقيق الرؤية
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <p style={{ margin: "5px 0" }}>المملكة العربية السعودية</p>
            <p style={{ margin: "5px 0" }}>ص.ب 7572 الرياض 11472</p>
            <p style={{ margin: "5px 0" }}>هاتف: 0114861111</p>
            <p style={{ margin: "5px 0" }}>فاكس: 0114862222</p>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            borderTop: "1px solid #363333",
            padding: "10px 0",
            marginTop: "70px",
            fontSize: "16px",
          }}
        >
          تم الإنشاء بواسطة{" "}
          <span className="font-bold text-[#14573a]">تهاني</span>
          <p>© جميع الحقوق محفوظة للمكتبة 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
