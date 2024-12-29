import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Signup_1({ first_name, last_name, email, setFirstName, setLastName, setEmail }) {
  const navigate = useNavigate();

  // Validation function
  const validateForm = () => {
    if (!first_name || !last_name || !email) {
      toast.error('الحقل فارغ');
      return false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      toast.error('البريد الالكتروني غير صالح');
      return false;
    }

    return true;
  };

  return (
    <div className="lg:w-[40%] w-[90%] bg-white rounded-xl p-6 flex justify-center shadow-md hover:shadow-xl transition ease duration-300">
      <div className="w-full bg-gray-100 p-8 flex flex-col justify-center items-center gap-6 rounded-lg">
        <div className="text-green-700 font-bold flex flex-col items-center gap-2">
          <h3>الأسم الاول</h3>
          <input
            type="text"
            className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="text-green-700 font-bold flex flex-col items-center gap-2">
          <h3>الأسم الثاني</h3>
          <input
            type="text"
            className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="text-green-700 font-bold flex flex-col items-center gap-2">
          <h3>البريد الالكتروني</h3>
          <input
            type="email"
            className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <button
            className="bg-green-700 w-[10rem] p-3 rounded-lg text-white text-lg hover:bg-green-800 transition"
            onClick={() => {
              if (validateForm()) {
                navigate('/signup/2');
              }
            }}
          >
            استمر
          </button>
          <button
            className="text-sm bg-green-700 w-[10rem] p-3 rounded-lg text-white text-lg hover:bg-green-800 transition"
            onClick={() => navigate('/login')}
          >
            الرجوع الي تسجيل الدخول
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
