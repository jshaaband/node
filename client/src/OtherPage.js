import React from "react";
import Layout from "./Layout/Layout";
import { Button } from "primereact/button";

const OtherPage = () => {
  return (
    <div>
      <Layout></Layout>

      <div className="surface-0">
        <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
          <li>
            <a className="text-500 no-underline line-height-3 cursor-pointer">
              Application
            </a>
          </li>
          <li className="px-2">
            <i className="pi pi-angle-right text-500 line-height-3"></i>
          </li>
          <li>
            <span className="text-900 line-height-3">Analytics</span>
          </li>
        </ul>
        <div className="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
          <div>
            <div className="font-medium text-3xl text-900">Customers</div>
            <div className="flex align-items-center text-700 flex-wrap">
              <div className="mr-5 flex align-items-center mt-3">
                <i className="pi pi-users mr-2"></i>
                <span>332 Active Users</span>
              </div>
              <div className="mr-5 flex align-items-center mt-3">
                <i className="pi pi-globe mr-2"></i>
                <span>9402 Sessions</span>
              </div>
              <div className="flex align-items-center mt-3">
                <i className="pi pi-clock mr-2"></i>
                <span>2.32m Avg. Duration</span>
              </div>
            </div>
          </div>
          <div className="mt-3 lg:mt-0">
            <Button
              label="Add"
              className="p-button-outlined mr-2"
              icon="pi pi-user-plus"
            />
            <Button label="Save" icon="pi pi-check" />
          </div>
        </div>
      </div>

      <div className="surface-0 pt-8 text-center mx-6">
        <div className="mb-3 font-bold text-3xl">
          <span className="text-900">One Product, </span>
          <span className="text-blue-600">Many Solutions</span>
        </div>
        <div className="text-700 mb-6">
          Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.
        </div>
        <div className="grid">
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Built for Developers
            </div>
            <span className="text-700 line-height-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              End-to-End Encryption
            </div>
            <span className="text-700 line-height-3">
              Risus nec feugiat in fermentum posuere urna nec. Posuere
              sollicitudin aliquam ultrices sagittis.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Easy to Use</div>
            <span className="text-700 line-height-3">
              Ornare suspendisse sed nisi lacus sed viverra tellus. Neque
              volutpat ac tincidunt vitae semper.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Fast & Global Support
            </div>
            <span className="text-700 line-height-3">
              Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum
              tellus.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Open Source</div>
            <span className="text-700 line-height-3">
              Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec
              adipiscing tristique risus nec feugiat.{" "}
            </span>
          </div>
          <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Trusted Securitty
            </div>
            <span className="text-700 line-height-3">
              Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus
              metus aliquam eleifend.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPage;
