import React from "react";
import qrcode from "./images/image-qr-code.png";
const App = () => {
  return (
    <div className="bg-light-gray w-full min-h-screen items-center justify-center">
      <div className="flex items-center justify-center px-6 py-20">
        <div className="bg-white border border-white rounded-2xl p-3 max-w-xs">
          <div className="">
            <img src={qrcode} className=" border border-white rounded-2xl" />
          </div>

          <div className="text-center font-outfit py-4">
            <p className="font-bold">
              Improve your front-end skills by building projects
            </p>
            <p className="text-grayish-blue font-normal">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
            <br/>
            <div class="attribution">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
              <br/>
               Coded by <a href="#">Muhammad Qasim Bhatti</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
