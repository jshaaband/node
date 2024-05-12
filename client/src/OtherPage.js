import React from "react";
import Layout from "./Layout/Layout";

const OtherPage = () => {
  return (
    <div>
      <Layout></Layout>

      <div className="surface-0">
        <ul className="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border shadow-2 lg:shadow-none">
          <li className="pr-3">
            <a className="cursor-pointer">
              <i className="pi pi-home text-blue-500"></i>
            </a>
          </li>
          <li className="px-2">
            <i className="pi pi-angle-right text-500 font-medium"></i>
          </li>
          <li className="px-2">
            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">
              Level 3
            </a>
          </li>
          <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
          </li>
          <li className="px-2">
            <a className="cursor-pointer text-blue-500 white-space-nowrap font-medium">
              Level 2
            </a>
          </li>
          <li className="px-2">
            <i className="pi pi-angle-right text-500"></i>
          </li>
          <li className="px-2">
            <a className="cursor-pointer text-900 white-space-nowrap font-medium">
              Level 1
            </a>
          </li>
        </ul>
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
