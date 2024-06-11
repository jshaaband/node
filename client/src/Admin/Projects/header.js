import hyper from "../../images/img_1.png";
import avatar from "../../images/img_2.png";
import React from "react";

const HeaderPage = () => {
  return (
    <>
      <div className="bg-indigo-500 px-5 flex align-items-center justify-content-between relative lg:static">
        <img src={hyper} alt="hyper-300" className="mr-0 lg:mr-6" />
        <a className="p-ripple cursor-pointer block lg:hidden text-indigo-50">
          <i className="pi pi-bars text-4xl"></i>
          <span role="presentation" className="p-ink"></span>
        </a>
        <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1 shadow-2 lg:shadow-none">
          <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
              <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                <i className="pi pi-home mr-2"></i>
                <span>Home</span>
                <span role="presentation" className="p-ink"></span>
              </a>
            </li>
            <li>
              <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                <i className="pi pi-users mr-2"></i>
                <span>Customers</span>
                <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                <span role="presentation" className="p-ink"></span>
              </a>
              <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay origin-top w-full lg:w-15rem cursor-pointer hidden">
                <li>
                  <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                    <i className="pi pi-user-plus mr-2"></i>
                    <span className="font-medium">Add New</span>
                    <span role="presentation" className="p-ink"></span>
                  </a>
                </li>
                <li className="relative">
                  <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                    <i className="pi pi-search mr-2"></i>
                    <span className="font-medium">Search</span>
                    <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                    <span role="presentation" className="p-ink"></span>
                  </a>
                  <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay origin-top w-full lg:w-15rem cursor-pointer left-100 top-0 hidden">
                    <li>
                      <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                        <i className="pi pi-shopping-cart mr-2"></i>
                        <span className="font-medium">Purchases</span>
                        <span role="presentation" className="p-ink"></span>
                      </a>
                    </li>
                    <li className="relative">
                      <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                        <i className="pi pi-comments mr-2"></i>
                        <span className="font-medium">Messages</span>
                        <span role="presentation" className="p-ink"></span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                <i className="pi pi-calendar mr-2"></i>
                <span>Calendar</span>
                <span role="presentation" className="p-ink"></span>
              </a>
            </li>
            <li>
              <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                <i className="pi pi-chart-line mr-2"></i>
                <span>Stats</span>
                <span role="presentation" className="p-ink"></span>
              </a>
            </li>
          </ul>
          <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-indigo-400 lg:border-top-none">
            <li>
              <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                <span className="block lg:hidden font-medium">Inbox</span>
                <span role="presentation" className="p-ink"></span>
              </a>
            </li>
            <li>
              <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                <span className="block lg:hidden font-medium">
                  Notifications
                </span>
                <span role="presentation" className="p-ink"></span>
              </a>
            </li>
            <li className="border-top-1 border-indigo-400 lg:border-top-none">
              <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                <img src={avatar} alt="avatar-f-1" className="mr-3 lg:mr-0" />
                <div className="block lg:hidden">
                  <div className="text-indigo-50 font-medium">
                    Josephine Lillard
                  </div>
                  <span className="text-indigo-100 font-medium text-sm">
                    Marketing Specialist
                  </span>
                </div>
                <span role="presentation" className="p-ink"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
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
    </>
  );
};

export default HeaderPage;
