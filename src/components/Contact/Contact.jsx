import React from 'react'

function Contact() {
  return (
    <div className="py-20 contact my-12" id="contact">
  <h1 className="text-4xl font-bold text-center text-[#166a45]">
    تواصل <span className="text-[#111927]">معنا</span>
  </h1>
  <div className="flex justify-center my-8 gap-3  mx-auto flex-col md:flex-row md:flex-row-reverse">
    <iframe
      className="w-[90%] h-[60vh] rounded-xl mx-auto md:w-[45%] "
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin"
      allowFullScreen
      loading="lazy"
      title="Google Maps Embed"
    />

    <div className="name flex flex-col justify-center items-center gap-8 border border-[#b8eacb]   h-[60vh] rounded-xl hover:bg-[#54c084] md:w-[45%] mx-auto w-[90%]  transition duration-300 ease-in-out">
      <h2 className="text-3xl text-[#384250]">تواصل</h2>
      <input
        type="text"
        placeholder="الاسم"
        className="w-[80%] p-3 text-[#384250] text-xl border-2 border-[#54c084] rounded-lg mx-auto"
      />
      <input
        type="text"
        placeholder="الايميل"
        className="w-[80%] p-3 text-[#384250] text-xl border-2 border-[#54c084] rounded-lg mx-auto"
      />
      <input
        type="text"
        placeholder="الهاتف"
        className="w-[80%] p-3 text-[#384250] text-xl border-2 border-[#54c084] rounded-lg mx-auto"
      />
      <button className="w-[100px] py-2 bg-[#dff6e7] hover:bg-[#cdebd9] text-[#472400] rounded-md">
        تواصل الان
      </button>
    </div>
  </div>
</div>

  )
}

export default Contact
