import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import CryptoJS from 'crypto-js'
function Login() {
  const [create, setCreate] = useState(true);
  const [cont, setContinue] = useState(true);
  
  const [logemail,setLogemail] = useState('')
  const [logpassword , setLogpassword] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState('');
  const data = {firstName,lastName,email}

  localStorage.setItem('data',JSON.stringify(data))
  // Validation function
  const validateForm = () => {
    if (!firstName || !lastName || !email) {
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

  const navigate = useNavigate()

  const validateVerify = () => {
    if (!phone || !password || !verify) {
      toast.error('الحقل فارغ');
      return false; // If any field is empty, return false
    }
    if(password !=verify){
      toast.error('كلمتا المرور غير متطابقتين')
      return false
    }
    return true;
     // All fields are filled, return true
  };

// Token





  // Sign up
  const register = async()=>{
event.preventDefault()
const data = JSON.parse(localStorage.getItem('data'))
    try{
    const register_data = {
      'first_name':data.firstName,
      'last_name':data.lastName,
      'email':data.email,
      'password1':password,
      'password2':verify,
      'phone_number':phone

  }

  
    const response = await axios.post('https://events-back.cowdly.com/api/users/register/',register_data)

    const token = response.data.token
    const secretKey = "s3cr3t$Key@123!";
    const encryptedtoken = CryptoJS.AES.encrypt(token, secretKey).toString();
    sessionStorage.setItem('token',encryptedtoken)
  toast.success('تم انشاء حساب بنجاح')
  setTimeout(() => {
    navigate('/')
  }, 6000);
  

    }catch(error){

      toast.error('فشل انشاء حساب , الرجاء المحاولة مرة اخري')
      console.log(error)
    }

  }


  const login = async()=>{
try{
  const login_data = {
    'email':logemail,
    'password':logpassword
  }

  const response =  await axios.post('https://events-back.cowdly.com/api/users/login/',login_data)

  const token = response.data.token
  const secretKey = "s3cr3t$Key@123!";
  const encryptedtoken = CryptoJS.AES.encrypt(token, secretKey).toString();
  sessionStorage.setItem('token',encryptedtoken)
toast.success('تم تسجيل الدخول بنجاح')
setTimeout(() => {
  navigate('/')
}, 6000);
}catch(error){

  toast.error('البريد الالكتروني او كلمة المرور خاطئة')
  console.log(error)
}
  }

  useEffect(() => {
    const encryptedToken = sessionStorage.getItem('token');
    if (encryptedToken) {
      const secretKey = "s3cr3t$Key@123!";
      const decryptedToken = CryptoJS.AES.decrypt(encryptedToken, secretKey).toString(CryptoJS.enc.Utf8);
  
      if (decryptedToken) {
        navigate('/'); // Navigate to the landing page if a valid token exists
      }
    }
  }, [navigate]);

  return (
    <div className="flex w-full min-h-screen max-h-[200vh] mt-20 justify-around items-center bg-gray-100 flex-col lg:flex-row gap-10">
      <ToastContainer position="top-center" style={{marginTop: '70px'}}/>
      <div className="lg:w-[40%] w-[90%] flex flex-col items-center gap-10 my-3">
        <h2 className="lg:w-[60%] w-[90%] bg-white p-4 text-3xl font-bold text-gray-600 rounded-lg shadow-md text-center">
          {create ? "تسجيل الدخول" : "إنشاء حساب"}
        </h2>
        <div className="lg:w-[50%] w-[70%] flex bg-white hover:shadow-lg transition-transform transform hover:scale-105 duration-300 h-[7rem] px-4 items-center rounded-lg justify-between cursor-pointer">
          <div className="space-y-4">
            <h2 className="text-3xl text-green-700 font-bold tracking-wide leading-tight">
              المؤتمر
            </h2>
            <h4 className="text-xl text-gray-400">منظمين المؤتمر</h4>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#f7d54d"
            viewBox="0 0 256 256"
          >
            <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
          </svg>
        </div>
        <div className="lg:w-[50%] w-[70%] flex bg-white hover:shadow-lg transition-transform transform hover:scale-105 duration-300 h-[7rem] px-4 items-center rounded-lg justify-between cursor-pointer">
          <div className="space-y-4">
            <h2 className="text-3xl text-green-700 font-bold tracking-wide leading-tight">
              المؤتمر
            </h2>
            <h4 className="text-xl text-gray-400">المشاركين في المؤتمر</h4>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#f7d54d"
            viewBox="0 0 256 256"
          >
            <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
          </svg>
        </div>
      </div>

      {create ? (
        <div className="lg:w-[40%] w-[90%] bg-white rounded-xl p-6 flex justify-center shadow-md hover:shadow-xl transition ease duration-300">
          <div className="w-full bg-gray-100 p-8 flex flex-col justify-center items-center gap-6 rounded-lg">
            <div className="text-green-700 font-bold flex flex-col items-center gap-2">
              <h3>البريد الالكتروني</h3>
              <input
                type="text"
                value={logemail}
                onChange={(e)=>setLogemail(e.target.value)}
                className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
              />
            </div>
            <div className="text-green-700 font-bold flex flex-col items-center gap-2">
              <h3>كلمة المرور</h3>
              <input
                type="password"
                value={logpassword}
                onChange={(e)=>setLogpassword(e.target.value)}
                className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
              />
            </div>
            <button onClick={login} className="bg-green-700 w-[10rem] p-3 rounded-lg text-white text-lg hover:bg-green-800 transition">
              تسجيل الدخول
            </button>
            <h5 className="text-gray-800">
              ليس لديك حساب ؟{" "}
              <span
                className="text-green-700 cursor-pointer border-b-2 border-green-700"
                onClick={() => setCreate(false)}
              >
                انشاء حساب
              </span>
            </h5>
          </div>
        </div>
      ) : cont ? (
         <div className="lg:w-[40%] w-[90%] bg-white rounded-xl p-6 flex justify-center shadow-md hover:shadow-xl transition ease duration-300"> 
          <div className="w-full bg-gray-100 p-8 flex flex-col justify-center items-center gap-6 rounded-lg">
            <div className="text-green-700 font-bold flex flex-col items-center gap-2">
              <h3>الأسم الاول</h3>
              <input
                type="text"
                className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="text-green-700 font-bold flex flex-col items-center gap-2">
              <h3>الأسم الثاني</h3>
              <input
                type="text"
                className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="text-green-700 font-bold flex flex-col items-center gap-2">
              <h3> البريد الالكتروني</h3>
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
                    setContinue(false); // Proceed if form is valid
                  }
                }}
              >
                استمر
              </button>
              <button
                className="text-sm bg-green-700 w-[10rem] p-3 rounded-lg text-white text-lg hover:bg-green-800 transition"
                onClick={() => setCreate(true)}
              >
                الرجوع الي تسجيل الدخول
              </button>
            </div>
          </div>
        </div> 
      ) : (
        <form onSubmit={register}  className="lg:w-[40%] w-[90%] bg-white rounded-xl p-6 flex justify-center shadow-md hover:shadow-xl transition ease duration-300">
        {/* <div className="lg:w-[40%] w-[90%] bg-white rounded-xl p-6 flex justify-center shadow-md hover:shadow-xl transition ease duration-300"> */}
          <div className="w-full bg-gray-100 p-8 flex flex-col justify-center items-center gap-6 rounded-lg">
            <div className="text-green-700 font-bold flex flex-col items-center gap-2">
              <h3>رقم التليفون</h3>
              <input
                type="text"
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
                className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
              />
            </div>
            <div className="text-green-700 font-bold flex flex-col items-center gap-2">
              <h3>كلمة المرور</h3>
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
              />
            </div>
            <div className="text-green-700 font-bold flex flex-col items-center gap-2">
              <h3> تاكيد كلمة المرور</h3>
              <input
                type="password"
                value={verify}
                onChange={(e)=>setVerify(e.target.value)}
                className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              <button type="submit" className="bg-green-700 w-[10rem] p-3 rounded-lg text-white text-lg hover:bg-green-800 transition" onClick={(e) => {
    if (validateVerify()) {
      register(e); }}}>
                تسجيل
              </button>
              <button
                className="bg-green-700 w-[10rem] p-3 rounded-lg text-white text-lg hover:bg-green-800 transition"
                onClick={(e) => {e.preventDefault();setContinue(true)}}
              >
                رجوع
              </button>
            </div>
          {/* </div> */}
        </div>
        </form>
      )}
    </div>
  );
}

export default Login;
