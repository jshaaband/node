import { Button } from "primereact/button";
import Layout from "../../Layout/Layout";
import FooterPage from "../../Layout/Footer/Footer";
import React from "react";
import Banner from "../../images/img.png";

const HomePage = () => {
  return (
    <div>
      <Layout></Layout>

      <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">Find the best</span>
            <div className="text-6xl text-primary font-bold mb-3">
              Deals on financial products
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3">
              Compare prices and services across various financial products such
              as insurance, loans, credit cards, and utilities.
            </p>

            <Button
              label="Learn More"
              type="button"
              className="mr-3 p-button-raised"
            />
            <Button
              label="Live Demo"
              type="button"
              className="p-button-outlined"
            />
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <img
            src={Banner}
            alt="hero-1"
            className="md:ml-auto block md:h-full"
            style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
          />
        </div>
      </div>

      <div className="grid mx-8 mt-5">
        <div className="surface-section px-4 pt-2 md:px-6 lg:px-4">
          <div className="flex flex-column lg:flex-row align-items-center justify-content-between">
            <div className="text-center lg:text-left lg:pr-8">
              <div className="text-blue-600 font-medium mb-1 text-xl">
                TAKE THE NEXT STEP
              </div>
              <div className="text-900 font-bold text-6xl mb-5">
                Get Started with PesaMarket
              </div>
              <span
                className="inline-flex align-items-center bg-blue-50 px-3 py-2 mr-2 mb-2 lg:mb-0 border-1 border-blue-200"
                style={{ borderRadius: "50px" }}
              >
                <i className="pi pi-check text-blue-500 mr-2"></i>
                <span className="text-gray-700 font-medium">
                  1 Month Free Trial
                </span>
              </span>
              <span
                className="inline-flex align-items-center bg-blue-50 px-3 py-2 border-1 border-blue-200"
                style={{ borderRadius: "50px" }}
              >
                <i className="pi pi-check text-blue-500 mr-2"></i>
                <span className="text-gray-700 font-medium">
                  No Credit Card Required
                </span>
              </span>
            </div>
            <div className="lg:mt-0 flex flex-wrap lg:flex-nowrap">
              <button
                aria-label="Get Started"
                className="p-button p-component px-5 py-3 mr-0 lg:mr-3 p-button-rounded font-bold mb-3 lg:mb-0 w-full lg:w-auto white-space-nowrap"
              >
                <span className="p-button-label p-c">Get Started</span>
                <span role="presentation" className="p-ink"></span>
              </button>
              <button
                aria-label="Request a Demo"
                className="p-button p-component px-5 py-3 p-button-outlined p-button-rounded font-bold w-full lg:w-auto white-space-nowrap"
                style={{ whiteSpace: "nowrap" }}
              >
                <span className="p-button-icon p-c p-button-icon-right pi pi-arrow-right"></span>
                <span className="p-button-label p-c">Request a Demo</span>
                <span role="presentation" className="p-ink"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid col-12 pt-8">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Orders
                  </span>
                  <div className="text-900 font-medium text-xl">152</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">24 new </span>
              <span className="text-500">since last visit</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Revenue
                  </span>
                  <div className="text-900 font-medium text-xl">$2.100</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">%52+ </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Customers
                  </span>
                  <div className="text-900 font-medium text-xl">28441</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">520 </span>
              <span className="text-500">newly registered</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Comments
                  </span>
                  <div className="text-900 font-medium text-xl">152 Unread</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">85 </span>
              <span className="text-500">responded</span>
            </div>
          </div>
        </div>
      </div>

      <div className="surface-0 my-8 mx-6">
        <div className="text-900 font-bold text-6xl mb-4 text-center">
          Pricing Plans
        </div>
        <div className="text-700 text-xl mb-6 text-center line-height-3">
          Make informed decisions and potentially save money by choosing the
          most suitable option for your needs.
        </div>

        <div className="grid">
          <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">Basic</div>
                <div className="text-600">Plan description</div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold text-2xl text-900">$9</span>
                  <span className="ml-2 font-medium text-600">per month</span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Morbi tincidunt augue</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                <Button label="Buy Now" className="p-3 w-full mt-auto" />
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">Premium</div>
                <div className="text-600">Plan description</div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold text-2xl text-900">$29</span>
                  <span className="ml-2 font-medium text-600">per month</span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Morbi tincidunt augue</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Duis ultricies lacus sed</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                <Button label="Buy Now" className="p-3 w-full" />
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">
                  Enterprise
                </div>
                <div className="text-600">Plan description</div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold text-2xl text-900">$49</span>
                  <span className="ml-2 font-medium text-600">per month</span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Morbi tincidunt augue</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Duis ultricies lacus sed</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Imperdiet proin</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Nisi scelerisque</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                <Button
                  label="Buy Now"
                  className="p-3 w-full p-button-outlined"
                />
              </div>
            </div>
          </div>

          <div className="col-12  surface-0 py-4 shadow-2 border-round">
            <div className="text-3xl font-medium text-900 mb-3">Card Title</div>
            <div className="font-medium text-500 mb-3">
              Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.
            </div>
            <div
              style={{ height: "150px" }}
              className="border-2 border-dashed border-300"
            ></div>
          </div>
        </div>
      </div>

      <FooterPage></FooterPage>
    </div>
  );
};

export default HomePage;
