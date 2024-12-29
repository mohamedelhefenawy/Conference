import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default function Signup_2({ phone, password, verify, setPhone, setPassword, setVerify, onSubmit }) {
    const navigate = useNavigate();

    const validateVerify = () => {
        if (!phone || !password || !verify) {
            toast.error('الحقل فارغ');
            return false;
        }

        if (password.length < 6) {
            toast.error('كلمة المرور ضعيفة!');
            return false;
        }

        if (password !== verify) {
            toast.error('كلمتا المرور غير متطابقتين');
            return false;
        }

        return true;
    };

    return (
        <div className="lg:w-[40%] w-[90%] bg-white rounded-xl p-6 flex justify-center shadow-md hover:shadow-xl transition ease duration-300">
            <div className="w-full bg-gray-100 p-8 flex flex-col justify-center items-center gap-6 rounded-lg">
                <div className="text-green-700 font-bold flex flex-col items-center gap-2">
                    <h3>رقم التليفون</h3>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
                    />
                </div>
                <div className="text-green-700 font-bold flex flex-col items-center gap-2">
                    <h3>كلمة المرور</h3>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
                    />
                </div>
                <div className="text-green-700 font-bold flex flex-col items-center gap-2">
                    <h3>تاكيد كلمة المرور</h3>
                    <input
                        type="password"
                        value={verify}
                        onChange={(e) => setVerify(e.target.value)}
                        className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    <button
                        className="bg-green-700 w-[10rem] p-3 rounded-lg text-white text-lg hover:bg-green-800 transition"
                        onClick={() => {
                            if (validateVerify()) onSubmit();
                        }}
                    >
                        تسجيل
                    </button>
                    <button
                        className="bg-green-700 w-[10rem] p-3 rounded-lg text-white text-lg hover:bg-green-800 transition"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/signup/1');
                        }}
                    >
                        رجوع
                    </button>
                </div>
            </div>
        </div>
    );
}
