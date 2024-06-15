import { Button } from "primereact/button";
import Layout from "../../Layout/Layout";
import FooterPage from "../../Layout/Footer/Footer";
import React from "react";
import Banner from "../../images/img.png";
import avatar1 from "../../images/img_3.png";
import avatar2 from "../../images/img_4.png";
import avatar3 from "../../images/img_5.png";
import avatar4 from "../../images/img_6.png";
import avatar5 from "../../images/img_7.png";
import illustration1 from "../../images/img_8.png";
import illustration2 from "../../images/img_9.png";
import illustration3 from "../../images/img_10.png";

const HomePage = () => {
  return (
    <div>
      <Layout></Layout>

      <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-3 md:p-6 text-center md:text-left flex align-items-center ">
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

      <div className="surface-0 my-4 md:my-6 mx-2 md:mx-6">
        <div className="text-900 font-bold  text-5xl mb-4 text-center">
          Application Flow
        </div>
        <div className="text-700 text-xl mb-6 text-center line-height-3">
          Make informed decisions and potentially save money by choosing the
          most suitable option for your needs.
        </div>
        <div className="grid">
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
                Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra
                tellus in hac habitasse platea dictumst.
              </p>
              <button aria-label="Learn More" className="p-button p-component">
                <span className="p-button-icon p-c p-button-icon-left pi pi-arrow-right p-button-rounded"></span>
                <span className="p-button-label p-c">Learn More</span>
                <span role="presentation" className="p-ink"></span>
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
                Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra
                tellus in hac habitasse platea dictumst.
              </p>
              <button aria-label="Learn More" className="p-button p-component">
                <span className="p-button-icon p-c p-button-icon-left pi pi-arrow-right p-button-rounded"></span>
                <span className="p-button-label p-c">Learn More</span>
                <span role="presentation" className="p-ink"></span>
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
                Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra
                tellus in hac habitasse platea dictumst.
              </p>
              <button aria-label="Learn More" className="p-button p-component">
                <span className="p-button-icon p-c p-button-icon-left pi pi-arrow-right p-button-rounded"></span>
                <span className="p-button-label p-c">Learn More</span>
                <span role="presentation" className="p-ink"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid mx-2 md:mx-8 mt-5">
        <div className=" col-12  surface-0 py-4">
          <div className="text-900 font-bold text-5xl mb-4">Card Title</div>
          <div className="font-medium text-500 mb-6">
            Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.
          </div>
          <div className="grid ">
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
                          <span className="text-primary">Watchlist Tier-1</span>
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
                <span className="block text-600 font-medium mb-3">TODAY</span>
                <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                  <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                    <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                      <i className="pi pi-dollar text-xl text-blue-500"></i>
                    </div>
                    <span className="text-900 line-height-3 font-medium">
                      Richard Jones
                      <span className="text-700 font-normal">
                        has purchased a blue t-shirt for
                        <span className="text-primary font-medium">$79</span>
                      </span>
                    </span>
                  </li>
                  <li className="flex align-items-center py-2">
                    <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                      <i className="pi pi-download text-xl text-orange-500"></i>
                    </div>
                    <span className="text-700 line-height-3">
                      Your request for withdrawal of
                      <span className="text-primary font-medium">$2500</span>
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
                        <span className="text-primary font-medium">$59</span>
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
          </div>
        </div>
      </div>

      <FooterPage></FooterPage>
    </div>
  );
};

export default HomePage;
