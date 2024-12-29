import { useEffect, useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import Signup_1 from "../../components/signup/Signup_1";
import Signup_2 from "../../components/signup/Signup_2";

export default function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");


    const register = async (event) => {
        event.preventDefault();
        try {
            const registerData = {
                first_name: firstName,
                last_name: lastName,
                email,
                password1: password,
                password2: verify,
                phone_number: phone,
            };

            const response = await axios.post(
                "https://events-back.cowdly.com/api/users/register/",
                registerData
            );

            const token = response.data.token;
            const secretKey = "s3cr3t$Key@123!";
            const encryptedToken = CryptoJS.AES.encrypt(token, secretKey).toString();
            sessionStorage.setItem("token", encryptedToken);

            toast.success("تم انشاء حساب بنجاح");
            setTimeout(() => {
                navigate("/");
            }, 6000);
        } catch (error) {
            toast.error("فشل انشاء حساب , الرجاء المحاولة مرة اخري");
            console.error(error);
        }
    };

    useEffect(() => {
        const encryptedToken = sessionStorage.getItem("token");
        if (encryptedToken) {
            const secretKey = "s3cr3t$Key@123!";
            const decryptedToken = CryptoJS.AES.decrypt(encryptedToken, secretKey).toString(CryptoJS.enc.Utf8);
            if (decryptedToken) navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <Routes>
            <Route path="/signup" element={<Navigate to="/signup/1" replace />} />
                <Route
                    path="/signup/1"
                    element={
                        <Signup_1
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            setFirstName={setFirstName}
                            setLastName={setLastName}
                            setEmail={setEmail}
                        />
                    }
                />
                <Route
                    path="/signup/2"
                    element={
                        <Signup_2
                            phone={phone}
                            password={password}
                            verify={verify}
                            setPhone={setPhone}
                            setPassword={setPassword}
                            setVerify={setVerify}
                            onSubmit={register}
                        />
                    }
                />
            </Routes>
            <ToastContainer />
        </div>
    );
}
