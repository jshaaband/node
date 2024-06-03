import React from "react";
import hyper from "../../images/img_1.png";
import avatar from "../../images/img_2.png";
import avatar1 from "../../images/img_3.png";
import avatar2 from "../../images/img_4.png";
import avatar3 from "../../images/img_5.png";
import avatar4 from "../../images/img_6.png";
import avatar5 from "../../images/img_7.png";
import illustration1 from "../../images/img_8.png";
import illustration2 from "../../images/img_9.png";
import illustration3 from "../../images/img_10.png";
import chart1 from "../../images/img_11.png";
import chart2 from "../../images/img_12.png";
import FooterPage from "../../Layout/Footer/Footer";

const UIKitPage = () => {
  return (
    <div>
      <div className="block-content">
        <div>
          <div className="min-h-screen flex flex-column">
            <div
              className="bg-indigo-500 py-3 px-5 flex align-items-center justify-content-between relative lg:static"
              style={{ height: "80px" }}
            >
              <img
                src={hyper}
                alt="hyper-300"
                style={{ height: "40px" }}
                className="mr-0 lg:mr-6"
              />
              <a className="p-ripple cursor-pointer block lg:hidden text-indigo-50">
                <i className="pi pi-bars text-4xl"></i>
                <span
                  role="presentation"
                  className="p-ink"
                  style={{ height: "0px", width: "0px" }}
                ></span>
              </a>
              <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1 shadow-2 lg:shadow-none">
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                  <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                      <i className="pi pi-home mr-2"></i>
                      <span>Home</span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "100px", width: "100px" }}
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                      <i className="pi pi-users mr-2"></i>
                      <span>Customers</span>
                      <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{
                          height: "168.836px",
                          width: "168.836px",
                          top: "-69px",
                          left: "35.9062px",
                        }}
                      ></span>
                    </a>
                    <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay origin-top w-full lg:w-15rem cursor-pointer hidden">
                      <li>
                        <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                          <i className="pi pi-user-plus mr-2"></i>
                          <span className="font-medium">Add New</span>
                          <span
                            role="presentation"
                            className="p-ink"
                            style={{ height: "0px", width: "0px" }}
                          ></span>
                        </a>
                      </li>
                      <li className="relative">
                        <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                          <i className="pi pi-search mr-2"></i>
                          <span className="font-medium">Search</span>
                          <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                          <span
                            role="presentation"
                            className="p-ink"
                            style={{
                              height: "238px",
                              width: "238px",
                              top: "27.5px",
                              left: "158.406px",
                            }}
                          ></span>
                        </a>
                        <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay origin-top w-full lg:w-15rem cursor-pointer left-100 top-0 hidden">
                          <li>
                            <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                              <i className="pi pi-shopping-cart mr-2"></i>
                              <span className="font-medium">Purchases</span>
                              <span
                                role="presentation"
                                className="p-ink"
                                style={{ height: "0px", width: "0px" }}
                              ></span>
                            </a>
                          </li>
                          <li className="relative">
                            <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                              <i className="pi pi-comments mr-2"></i>
                              <span className="font-medium">Messages</span>
                              <span
                                role="presentation"
                                className="p-ink"
                                style={{ height: "0px", width: "0px" }}
                              ></span>
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
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "122.695px", width: "122.695px" }}
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                      <i className="pi pi-chart-line mr-2"></i>
                      <span>Stats</span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{
                          height: "94.5px",
                          width: "94.5px",
                          top: "-21px",
                          left: "-44.625px",
                        }}
                      ></span>
                    </a>
                  </li>
                </ul>
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-indigo-400 lg:border-top-none">
                  <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                      <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                      <span className="block lg:hidden font-medium">Inbox</span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "56px", width: "56px" }}
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                      <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                      <span className="block lg:hidden font-medium">
                        Notifications
                      </span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "56px", width: "56px" }}
                      ></span>
                    </a>
                  </li>
                  <li className="border-top-1 border-indigo-400 lg:border-top-none">
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                      <img
                        src={avatar}
                        alt="avatar-f-1"
                        className="mr-3 lg:mr-0"
                        style={{ width: "32px", height: "32px" }}
                      />
                      <div className="block lg:hidden">
                        <div className="text-indigo-50 font-medium">
                          Josephine Lillard
                        </div>
                        <span className="text-indigo-100 font-medium text-sm">
                          Marketing Specialist
                        </span>
                      </div>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "64px", width: "64px" }}
                      ></span>
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
            <div className="p-5 flex flex-column flex-auto">
              <div className="grid">
                <div className="col-12">
                  <div className="surface-card shadow-2 border-round flex p-3 flex-column md:flex-row">
                    <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                      <div className="flex align-items-center mb-3">
                        <i className="pi pi-shopping-cart text-blue-500 text-xl mr-2"></i>
                        <span className="text-500 font-medium">Orders</span>
                      </div>
                      <span className="block text-900 font-medium mb-4 text-xl">
                        152 New
                      </span>
                      <div className="flex align-items-center">
                        <i className="pi pi-arrow-down text-pink-500 text-xl mr-2"></i>
                        <span className="text-pink-500 font-medium ">-25</span>
                      </div>
                    </div>
                    <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                      <div className="flex align-items-center mb-3">
                        <i className="pi pi-shopping-cart text-orange-500 text-xl mr-2"></i>
                        <span className="text-500 font-medium">Revenue</span>
                      </div>
                      <span className="block text-900 font-medium mb-4 text-xl">
                        $1500
                      </span>
                      <div className="flex align-items-center">
                        <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                        <span className="text-green-500 font-medium ">+15</span>
                      </div>
                    </div>
                    <div className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                      <div className="flex align-items-center mb-3">
                        <i className="pi pi-users text-cyan-500 text-xl mr-2"></i>
                        <span className="text-500 font-medium">Customers</span>
                      </div>
                      <span className="block text-900 font-medium mb-4 text-xl">
                        25100
                      </span>
                      <div className="flex align-items-center">
                        <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                        <span className="text-green-500 font-medium ">
                          +%12
                        </span>
                      </div>
                    </div>
                    <div className="flex-auto p-3">
                      <div className="flex align-items-center mb-3">
                        <i className="pi pi-users text-purple-500 text-xl mr-2"></i>
                        <span className="text-500 font-medium">Comments</span>
                      </div>
                      <span className="block text-900 font-medium mb-4 text-xl">
                        72
                      </span>
                      <div className="flex align-items-center">
                        <i className="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                        <span className="text-green-500 font-medium ">+20</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 lg:col-6">
                  <div className="surface-card shadow-2 border-round p-4 h-full">
                    <div className="flex align-items-center justify-content-between mb-3">
                      <div className="text-900 font-medium text-xl">
                        Team Activity
                      </div>
                      <div>
                        <button className="p-button p-component p-button-text p-button-plain p-button-rounded p-button-icon-only">
                          <span className="p-button-icon p-c pi pi-ellipsis-v"></span>
                          <span className="p-button-label p-c">&nbsp;</span>
                          <span
                            role="presentation"
                            className="p-ink"
                            style={{ height: "48px", width: "48px" }}
                          ></span>
                        </button>
                      </div>
                    </div>
                    <ul className="list-none p-0 m-0">
                      <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                        <div className="flex align-items-start mr-0 lg:mr-5">
                          <img
                            src={avatar1}
                            alt="avatar-f-1"
                            className="mr-3 w-3rem h-3rem"
                          />
                          <div>
                            <span className="text-900 font-medium block mb-2">
                              Jane Cooper
                            </span>
                            <div className="text-700 mb-2">
                              responded to an issue.
                            </div>
                            <a className="text-primary cursor-pointer">
                              <i className="pi pi-github text-sm mr-2"></i>
                              <span>Issue #1185</span>
                            </a>
                          </div>
                        </div>
                        <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
                          14 mins ago
                        </span>
                      </li>
                      <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                        <div className="flex align-items-start mr-0 lg:mr-5">
                          <img
                            src={avatar2}
                            alt="avatar-m-1"
                            className="mr-3 w-3rem h-3rem"
                          />
                          <div>
                            <span className="text-900 font-medium block mb-2">
                              Robert Fox
                            </span>
                            <div className="text-700">
                              changed team size from
                              <span className="text-900 font-medium">5</span> to
                              <span className="text-900 font-medium">6</span>.
                            </div>
                          </div>
                        </div>
                        <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
                          20 mins ago
                        </span>
                      </li>
                      <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                        <div className="flex align-items-start mr-0 lg:mr-5">
                          <img
                            src={avatar3}
                            alt="avatar-f-2"
                            className="mr-3 w-3rem h-3rem"
                          />
                          <div>
                            <span className="text-900 font-medium block mb-2">
                              Kristin Watson Cooper
                            </span>
                            <div className="text-700 mb-2">
                              created a Q4 presentation to an issue.
                            </div>
                            <a className="text-primary cursor-pointer">
                              <i className="pi pi-file-pdf text-sm mr-2"></i>
                              <span>q4_presentation.pdf</span>
                            </a>
                          </div>
                        </div>
                        <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
                          38 mins ago
                        </span>
                      </li>
                      <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                        <div className="flex align-items-start mr-0 lg:mr-5">
                          <img
                            src={avatar4}
                            alt="avatar-f-3"
                            className="mr-3 w-3rem h-3rem"
                          />
                          <div>
                            <span className="text-900 font-medium block mb-2">
                              Annette Black
                            </span>
                            <div className="text-700">
                              added
                              <span className="text-900 font-medium">
                                Nico Greenberg
                              </span>
                              to
                              <span className="text-primary">
                                Watchlist Tier-1
                              </span>
                              .
                            </div>
                          </div>
                        </div>
                        <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
                          1 day ago
                        </span>
                      </li>
                      <li className="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                        <div className="flex align-items-start mr-0 lg:mr-5">
                          <img
                            src={avatar5}
                            alt="avatar-m-2"
                            className="mr-3 w-3rem h-3rem"
                          />
                          <div>
                            <span className="text-900 font-medium block mb-2">
                              Floyd Miles
                            </span>
                            <div className="text-700">
                              has refunded a blue t-shirt for
                              <span className="text-primary">$79</span>.
                            </div>
                          </div>
                        </div>
                        <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
                          4 days ago
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 lg:col-6">
                  <div className="surface-card shadow-2 border-round p-4 h-full">
                    <div className="flex align-items-center justify-content-between mb-4">
                      <div className="text-900 font-medium text-xl">
                        Notifications
                      </div>
                      <div>
                        <button className="p-button p-component p-button-text p-button-plain p-button-rounded p-button-icon-only">
                          <span className="p-button-icon p-c pi pi-ellipsis-v"></span>
                          <span className="p-button-label p-c">&nbsp;</span>
                          <span
                            role="presentation"
                            className="p-ink"
                            style={{ height: "48px", width: "48px" }}
                          ></span>
                        </button>
                      </div>
                    </div>
                    <span className="block text-600 font-medium mb-3">
                      TODAY
                    </span>
                    <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                      <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                        <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                          <i className="pi pi-dollar text-xl text-blue-500"></i>
                        </div>
                        <span className="text-900 line-height-3 font-medium">
                          Richard Jones
                          <span className="text-700 font-normal">
                            has purchased a blue t-shirt for
                            <span className="text-primary font-medium">
                              $79
                            </span>
                          </span>
                        </span>
                      </li>
                      <li className="flex align-items-center py-2">
                        <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                          <i className="pi pi-download text-xl text-orange-500"></i>
                        </div>
                        <span className="text-700 line-height-3">
                          Your request for withdrawal of
                          <span className="text-primary font-medium">
                            $2500
                          </span>
                          has been initiated.
                        </span>
                      </li>
                    </ul>
                    <span className="block text-600 font-medium mb-3">
                      YESTERDAY
                    </span>
                    <ul className="p-0 m-0 list-none">
                      <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                        <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                          <i className="pi pi-dollar text-xl text-blue-500"></i>
                        </div>
                        <span className="text-900 line-height-3 font-medium">
                          Keyser Wick
                          <span className="text-700 font-normal">
                            has purchased a black jacket for
                            <span className="text-primary font-medium">
                              $59
                            </span>
                          </span>
                        </span>
                      </li>
                      <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                        <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                          <i className="pi pi-question text-xl text-pink-500"></i>
                        </div>
                        <span className="text-900 line-height-3 font-medium">
                          Jane Davis
                          <span className="text-700 font-normal">
                            has posted a new questions about your product.
                          </span>
                        </span>
                      </li>
                      <li className="flex align-items-center py-2">
                        <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0">
                          <i className="pi pi-arrow-up text-xl text-green-500"></i>
                        </div>
                        <span className="text-900 line-height-3 font-medium">
                          Claire Smith
                          <span className="text-700 font-normal">
                            has upvoted your store along with a comment.
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 lg:col-4">
                  <div className="surface-card border-round shadow-2 p-4 text-center">
                    <img
                      src={illustration1}
                      alt="windows"
                      className="mx-auto block mb-4"
                    />
                    <div className="text-900 font-medium mb-2 text-xl">
                      Title Placeholder
                    </div>
                    <p className="mt-0 mb-4 p-0 line-height-3">
                      Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed
                      viverra tellus in hac habitasse platea dictumst.
                    </p>
                    <button
                      aria-label="Learn More"
                      className="p-button p-component"
                    >
                      <span className="p-button-icon p-c p-button-icon-left pi pi-arrow-right p-button-rounded"></span>
                      <span className="p-button-label p-c">Learn More</span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "153.062px", width: "153.062px" }}
                      ></span>
                    </button>
                  </div>
                </div>
                <div className="col-12 lg:col-4">
                  <div className="surface-card border-round shadow-2 p-4 text-center">
                    <img
                      src={illustration2}
                      alt="security"
                      className="mx-auto block mb-4"
                    />
                    <div className="text-900 font-medium mb-2 text-xl">
                      Title Placeholder
                    </div>
                    <p className="mt-0 mb-4 p-0 line-height-3">
                      Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed
                      viverra tellus in hac habitasse platea dictumst.
                    </p>
                    <button
                      aria-label="Learn More"
                      className="p-button p-component"
                    >
                      <span className="p-button-icon p-c p-button-icon-left pi pi-arrow-right p-button-rounded"></span>
                      <span className="p-button-label p-c">Learn More</span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "153.062px", width: "153.062px" }}
                      ></span>
                    </button>
                  </div>
                </div>
                <div className="col-12 lg:col-4">
                  <div className="surface-card border-round shadow-2 p-4 text-center">
                    <img
                      src={illustration3}
                      alt="live-collaboration"
                      className="mx-auto block mb-4"
                    />
                    <div className="text-900 font-medium mb-2 text-xl">
                      Title Placeholder
                    </div>
                    <p className="mt-0 mb-4 p-0 line-height-3">
                      Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed
                      viverra tellus in hac habitasse platea dictumst.
                    </p>
                    <button
                      aria-label="Learn More"
                      className="p-button p-component"
                    >
                      <span className="p-button-icon p-c p-button-icon-left pi pi-arrow-right p-button-rounded"></span>
                      <span className="p-button-label p-c">Learn More</span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "153.062px", width: "153.062px" }}
                      ></span>
                    </button>
                  </div>
                </div>
                <div className="col-12 lg:col-6">
                  <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex align-items-center justify-content-between mb-3">
                      <div className="text-900 font-medium text-xl">Sales</div>
                      <div>
                        <button className="p-button p-component p-button-text p-button-plain p-button-rounded p-button-icon-only">
                          <span className="p-button-icon p-c pi pi-ellipsis-v"></span>
                          <span className="p-button-label p-c">&nbsp;</span>
                          <span
                            role="presentation"
                            className="p-ink"
                            style={{ height: "48px", width: "48px" }}
                          ></span>
                        </button>
                      </div>
                    </div>
                    <img src={chart1} alt="chart-line" className="w-full" />
                  </div>
                </div>
                <div className="col-12 lg:col-6">
                  <div className="surface-card shadow-2 border-round p-4">
                    <div className="flex align-items-center justify-content-between mb-3">
                      <div className="text-900 font-medium text-xl">
                        Customers
                      </div>
                      <div>
                        <button className="p-button p-component p-button-text p-button-plain p-button-rounded p-button-icon-only">
                          <span className="p-button-icon p-c pi pi-ellipsis-v"></span>
                          <span className="p-button-label p-c">&nbsp;</span>
                          <span
                            role="presentation"
                            className="p-ink"
                            style={{ height: "48px", width: "48px" }}
                          ></span>
                        </button>
                      </div>
                    </div>
                    <img src={chart2} alt="chart-bar" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage></FooterPage>
    </div>
  );
};

export default UIKitPage;
