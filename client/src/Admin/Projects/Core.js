import Layout from "../../Layout/Layout";
import React from "react";
import FooterPage from "../../Layout/Footer/Footer";
import prod1 from "../../images/img_14.png";
import prod2 from "../../images/img_15.png";
import prod3 from "../../images/img_16.png";
import { Button } from "primereact/button";

const Core = () => {
  return (
    <>
      <Layout></Layout>

      <div className="grid mx-2 md:mx-8 mt-5">
        <div className="py-5 px-6 w-full">
          <ul className="list-none p-0 m-0 flex flex-column w-full md:flex-row">
            <li className="relative mr-0 md:mr-8 flex-auto">
              <div className="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                <i className="pi pi-check-circle text-green-500 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                <div>
                  <div className="text-900 font-medium mb-1">Applied</div>
                  <span className="text-600 text-sm hidden md:block">
                    Tempus iaculis urna id volutpat
                  </span>
                </div>
              </div>
              <div
                className="w-full absolute top-50 left-100 surface-300 hidden md:block"
                style={{ transform: "translateY(-50%)", height: "2px;" }}
              ></div>
            </li>
            <li className="relative mr-0 md:mr-8 flex-auto">
              <div className="border-2 border-blue-500 surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                <i className="pi pi-users text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                <div>
                  <div className="text-blue-600 font-medium mb-1">
                    Interview
                  </div>
                  <span className="text-600 text-sm hidden md:block">
                    Nisi vitae suscipit tellus
                  </span>
                </div>
              </div>
              <div
                className="w-full absolute top-50 left-100 surface-300 hidden md:block"
                style={{ transform: "translateY(-50%)", height: "2px;" }}
              ></div>
            </li>
            <li className="relative flex-auto">
              <div className="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                <i className="pi pi-check-circle text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                <div>
                  <div className="text-900 font-medium mb-1">Confirmation</div>
                  <span className="text-600 text-sm hidden md:block">
                    Sit amet est placerat in egestas erat
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid mx-2 md:mx-8 mt-5">
        <div className="surface-0 md:my-8 mx-2 md:mx-6 w-full">
          <div className="text-900 font-bold text-5xl mb-4 text-center">
            Pricing Plans
          </div>
          <div className="text-700 text-xl mb-6 text-center line-height-3">
            Make informed decisions and potentially save money by choosing the
            most suitable option for your needs.
          </div>
        </div>

        <div className="grid w-full">
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
                <Button
                  label="Buy Now"
                  className="p-3 w-full mt-auto p-button-outlined"
                />
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
        </div>
      </div>

      <div className="p-dataview-content my-6 mx-8">
        <div className="p-grid grid p-nogutter grid-nogutter">
          <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border mb-3">
            <div className="relative">
              <img
                src={prod1}
                alt="Image"
                className="border-round w-full h-full md:w-14rem md:h-14rem"
              />
              <p
                className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px);top:3%;left:3%",
                }}
              >
                Superhost
              </p>
            </div>
            <div className="flex flex-column w-full gap-3">
              <div className="flex w-full justify-content-between align-items-center">
                <p className="font-semibold text-lg mt-0 mb-0 mr-3">
                  Private room in Amsterdam
                </p>
                <div className="p-rating p-readonly">
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11830)">
                        <path
                          d="M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11830">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-normal text-lg text-600 mt-0 mb-0">
                Comfortable single room
              </p>
              <div className="flex flex-column md:flex-row flex-wrap md:justify-content-between mt-auto">
                <div className="flex gap-3">
                  <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                    <i className="pi pi-users mr-2"></i>
                    <span className="font-medium">2 Guests</span>
                  </p>
                  <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                    <i className="pi pi-wifi mr-2"></i>
                    <span className="font-medium">1 Gigabit</span>
                  </p>
                  <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                    <i className="pi pi-check-circle mr-2"></i>
                    <span className="font-medium">Verified</span>
                  </p>
                </div>
                <div className="flex align-items-center">
                  <p className="font-semibold text-4xl text-900 mt-0 mb-0">
                    $1,143
                  </p>
                  <i className="pi pi-circle-fill text-xs text-700 mx-2"></i>
                  <p className="flex align-items-center w-full text-lg text-700">
                    9 nights
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border mb-3">
            <div className="relative">
              <img
                src={prod2}
                alt="Image"
                className="border-round w-full h-full md:w-14rem md:h-14rem"
              />
              <p
                className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px);top:3%;left:3%",
                }}
              >
                Superhost
              </p>
            </div>
            <div className="flex flex-column w-full gap-3">
              <div className="flex w-full justify-content-between align-items-center">
                <p className="font-semibold text-lg mt-0 mb-0 mr-3">
                  Luxurious spacious suite Jordan
                </p>
                <div className="p-rating p-readonly">
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-normal text-lg text-600 mt-0 mb-0">
                Guest suite
              </p>
              <div className="flex flex-column md:flex-row flex-wrap md:justify-content-between mt-auto">
                <div className="flex gap-3">
                  <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                    <i className="pi pi-users mr-2"></i>
                    <span className="font-medium">2 Guests</span>
                  </p>
                  <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                    <i className="pi pi-wifi mr-2"></i>
                    <span className="font-medium">1 Gigabit</span>
                  </p>
                  <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                    <i className="pi pi-check-circle mr-2"></i>
                    <span className="font-medium">Verified</span>
                  </p>
                </div>
                <div className="flex align-items-center">
                  <p className="font-semibold text-4xl text-900 mt-0 mb-0">
                    $983
                  </p>
                  <i className="pi pi-circle-fill text-xs text-700 mx-2"></i>
                  <p className="flex align-items-center w-full text-lg text-700">
                    9 nights
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-column md:flex-row w-full gap-3 p-3 border-round border-1 surface-border mb-3">
            <div className="relative">
              <img
                src={prod3}
                alt="Image"
                className="border-round w-full h-full md:w-14rem md:h-14rem"
              />
              <p
                className="absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px);top:3%;left:3%",
                }}
              >
                Superhost
              </p>
            </div>
            <div className="flex flex-column w-full gap-3">
              <div className="flex w-full justify-content-between align-items-center">
                <p className="font-semibold text-lg mt-0 mb-0 mr-3">
                  Home in Amsterdam
                </p>
                <div className="p-rating p-readonly">
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item p-rating-item-active">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11823)">
                        <path
                          d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11823">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-rating-item">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-rating-icon"
                      aria-hidden="true"
                    >
                      <g clip-path="url(#clip0_288_11830)">
                        <path
                          d="M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_288_11830">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-normal text-lg text-600 mt-0 mb-0">
                Large comfortable room in Sarphatistraat
              </p>
              <div className="flex flex-column md:flex-row flex-wrap md:justify-content-between mt-auto">
                <div className="flex gap-3">
                  <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                    <i className="pi pi-users mr-2"></i>
                    <span className="font-medium">2 Guests</span>
                  </p>
                  <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                    <i className="pi pi-wifi mr-2"></i>
                    <span className="font-medium">200 Megabits</span>
                  </p>
                  <p className="text-base flex align-items-center text-900 mt-0 mb-1">
                    <i className="pi pi-check-circle mr-2"></i>
                    <span className="font-medium">Verified</span>
                  </p>
                </div>
                <div className="flex align-items-center">
                  <p className="font-semibold text-4xl text-900 mt-0 mb-0">
                    $514
                  </p>
                  <i className="pi pi-circle-fill text-xs text-700 mx-2"></i>
                  <p className="flex align-items-center w-full text-lg text-700">
                    9 nights
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <FooterPage></FooterPage>
    </>
  );
};

export default Core;
