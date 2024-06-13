import React from "react";
import Layout from "./Layout/Layout";
import FooterPage from "./Layout/Footer/Footer";

const OtherPage = () => {
  return (
    <div>
      <Layout></Layout>

      <div className="px-6 py-5">
        <div className="surface-card p-4 shadow-2 border-round">
          <div className="font-medium text-3xl text-900 mb-3">
            Applicant Profile
          </div>
          <div className="text-500 mb-5">
            Egestas sed tempus urna et pharetra pharetra massa massa ultricies.
          </div>
          <ul className="list-none p-0 m-0 border-top-1 border-300">
            <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
              <div className="text-500 w-full md:w-2 font-medium">Name</div>
              <div className="text-900 w-full md:w-10">Elliot Alderson</div>
            </li>
            <li className="flex align-items-center py-3 px-2 flex-wrap">
              <div className="text-500 w-full md:w-2 font-medium">Bio</div>
              <div className="text-900 w-full md:w-10 line-height-3">
                Faucibus pulvinar elementum integer enim neque volutpat ac
                tincidunt vitae. Commodo odio aenean sed adipiscing diam donec
                adipiscing tristique. Eget felis eget nunc lobortis mattis
                aliquam faucibus purus in.
              </div>
            </li>
            <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
              <div className="text-500 w-full md:w-2 font-medium">
                Salary Expectation
              </div>
              <div className="text-900 w-full md:w-10">$150,000</div>
            </li>
            <li className="flex align-items-center py-3 px-2 flex-wrap">
              <div className="text-500 w-full md:w-2 font-medium">Skills</div>
              <div className="text-900 w-full md:w-10">
                <span className="p-tag p-component p-tag-rounded mr-2">
                  <span className="p-tag-value">Algorithms</span>
                  <span></span>
                </span>
                <span className="p-tag p-component p-tag-success p-tag-rounded mr-2">
                  <span className="p-tag-value">Javascript</span>
                  <span></span>
                </span>
                <span className="p-tag p-component p-tag-danger p-tag-rounded mr-2">
                  <span className="p-tag-value">Python</span>
                  <span></span>
                </span>
                <span className="p-tag p-component p-tag-warning p-tag-rounded">
                  <span className="p-tag-value">SQL</span>
                  <span></span>
                </span>
              </div>
            </li>
            <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
              <div className="text-500 w-full md:w-2 font-medium">
                Repositories
              </div>
              <div className="text-900 w-full md:w-10">
                <div className="grid mt-0 mr-0">
                  <div className="col-12 md:col-6">
                    <div className="p-3 border-1 surface-border border-round surface-card">
                      <div className="text-900 mb-2">
                        <i className="pi pi-github mr-2"></i>
                        <span className="font-medium">PrimeFaces</span>
                      </div>
                      <div className="text-700">
                        Ultimate UI Component Suite for JavaServer Faces
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-6">
                    <div className="p-3 border-1 surface-border border-round surface-card">
                      <div className="text-900 mb-2">
                        <i className="pi pi-github mr-2"></i>
                        <span className="font-medium">PrimeNG</span>
                      </div>
                      <div className="text-700">
                        The Most Complete Angular UI Component Library
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-6">
                    <div className="p-3 border-1 surface-border border-round surface-card">
                      <div className="text-900 mb-2">
                        <i className="pi pi-github mr-2"></i>
                        <span className="font-medium">PrimeReact</span>
                      </div>
                      <div className="text-700">
                        Advanced UI Components for ReactJS
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-6">
                    <div className="p-3 border-1 surface-border border-round surface-card">
                      <div className="text-900 mb-2">
                        <i className="pi pi-github mr-2"></i>
                        <span className="font-medium">PrimeVue</span>
                      </div>
                      <div className="text-700">
                        The Most Powerful Vue UI Component Library
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
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

      <FooterPage></FooterPage>
    </div>
  );
};

export default OtherPage;
