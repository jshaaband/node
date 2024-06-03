import React from "react";
import { Button } from "primereact/button";

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
