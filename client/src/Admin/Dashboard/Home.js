import { Button } from "primereact/button";
import Layout from "../../Layout/Layout";
import FooterPage from "../../Layout/Footer/Footer";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Layout></Layout>

      <div className="grid mx-8 mt-5">
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Orders</span>
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
                <span className="block text-500 font-medium mb-3">Revenue</span>
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

      <div className="surface-0 my-8 mx-6">
        <div className="text-900 font-bold text-6xl mb-4 text-center">
          Pricing Plans
        </div>
        <div className="text-700 text-xl mb-6 text-center line-height-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          numquam eligendi quos.
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
