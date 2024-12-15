import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import photo from "../../assets/images/logo.png";

function Footer({ line, useline }) {
  return (
    <div className="max-w-[80%] mx-auto mt-24 flex flex-col items-center gap-12">
      <footer
        style={{
          // backgroundColor: "#F5F5F5",
          color: "#666",
          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          padding: "6px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={photo}
              alt="King Fahad National Library"
              style={{ maxWidth: "150px", marginBottom: "15px" }}
            />
            <p>مكتبة الملك فهد الوطنية</p>
          </div>

          <div
            style={{
              flex: 2,
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              textAlign: "right",
            }}
          >
            <div>
              <a href="#" className="footer-link">
                خريطة الموقع
              </a>
              <a href="#" className="footer-link">
                أسئلة شائعة
              </a>
              <a href="#" className="footer-link">
                سياسة الخصوصية
              </a>
              <a href="#" className="footer-link">
                إتفاقية الاستخدام
              </a>
              <a href="#" className="footer-link">
                التبليغ عن حادثة أمن معلومات
              </a>
              <a href="#" className="footer-link">
                English
              </a>
            </div>
            <div>
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
            <div>
              <p style={{ margin: "5px 0" }}>المملكة العربية السعودية</p>
              <p style={{ margin: "5px 0" }}>ص.ب 7572 الرياض 11472</p>
              <p style={{ margin: "5px 0" }}>هاتف: 0114861111</p>
              <p style={{ margin: "5px 0" }}>فاكس: 0114862222</p>
            </div>
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
