import React from "react";
import { Button } from "primereact/button";
import footer from "../../images/img_17.png";

const FooterPage = () => {
  return (
    <div>
      <div className="surface-0 text-700 text-center my-8 py-2">
        <div className="text-blue-600 font-bold mb-3">
          <i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD
        </div>
        <div className="text-900 font-bold text-5xl mb-3">
          Join Our Design Community
        </div>
        <div className="text-700 text-xl mb-5">
          Lorem test dolor sit, amet consectetur adipisicing elit. Velit numquam
          eligendi quos.
        </div>
        <Button
          label="Join Now"
          icon="pi pi-discord"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        />
      </div>
      <div className="surface-section py-6 px-6 border-top-1 surface-border">
        <div className="flex flex flex-column lg:flex-row lg:align-items-center justify-content-between">
          <div className="flex align-items-center">
            <img
              src={footer}
              alt="Image"
              height="40"
              className="mr-0 lg:mr-6"
            />
          </div>
          <div className="flex flex-column lg:flex-row lg:align-items-center lg:my-0 my-4">
            <a className="text-700 cursor-pointer mb-2 lg:mb-0">Brand Policy</a>
            <a className="text-700 cursor-pointer mb-2 lg:mb-0 ml-0 lg:ml-4">
              Privacy Policy
            </a>
            <a className="text-700 cursor-pointer mb-2 lg:mb-0 ml-0 lg:ml-4">
              Terms of Service
            </a>
          </div>
          <div className="flex align-items-center lg:justify-content-between">
            <a className="cursor-pointer text-500">
              <i className="pi pi-twitter text-xl"></i>
            </a>
            <a className="cursor-pointer text-500 ml-2">
              <i className="pi pi-facebook text-xl"></i>
            </a>
            <a className="cursor-pointer text-500 ml-2">
              <i className="pi pi-github text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
        <div className="font-bold mr-8">🔥 Hot Deals!</div>
        <div className="align-items-center hidden lg:flex">
          <span className="line-height-3">
            Libero voluptatum atque exercitationem praesentium provident odit.
          </span>
        </div>
        <a className="flex align-items-center ml-2 mr-8">
          <span className="underline font-bold">Learn More</span>
        </a>
        <a
          className="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150"
          style={{ width: "2rem", height: "2rem" }}
        >
          <i className="pi pi-times"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterPage;
