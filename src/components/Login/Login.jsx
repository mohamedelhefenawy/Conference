
function Login() {
  return (
    <div className="flex w-full min-h-screen max-h-[200vh]  justify-around items-center bg-gray-100 flex-col lg:flex-row gap-10">
      <div className="lg:w-[40%] w-[90%] flex flex-col items-center gap-10 my-3">
        <h2 className="lg:w-[60%] w-[90%] bg-white p-4 text-3xl font-bold text-gray-600 rounded-lg shadow-md text-center">
          تسجيل الدخول
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
      <div className="lg:w-[40%] w-[90%] bg-white rounded-xl p-6 flex justify-center shadow-md hover:shadow-xl transition ease duration-300">
        <div className="w-full bg-gray-100 p-8 flex flex-col justify-center items-center gap-6 rounded-lg">
          <div className="text-green-700 font-bold flex flex-col items-center gap-2">
            <h3>البريد الالكتروني</h3>
            <input
              type="text"
              className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
            />
          </div>
          <div className="text-green-700 font-bold flex flex-col items-center gap-2">
            <h3>كلمة المرور</h3>
            <input
              type="text"
              className="sm:w-[20rem] w-[15rem] rounded-lg border-2 border-green-300 text-gray-700 p-2"
            />
          </div>
          <button className="bg-green-700 w-[10rem] p-3 rounded-lg text-white text-lg hover:bg-green-800  transition">
            تسجيل الدخول
          </button>
          <h5 className="text-gray-800">
            ليس لديك حساب ؟{" "}
            <span className="text-green-700 cursor-pointer border-b-2 border-green-700">
              انشاء حساب
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
