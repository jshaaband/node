import React from "react";
import Layout from "../../Layout/Layout";
import FooterPage from "../../Layout/Footer/Footer";
import chart1 from "../../images/img_11.png";
import chart2 from "../../images/img_12.png";

export default function Board() {
  return (
    <>
      <Layout></Layout>
      <div className="grid mx-4 my-4">
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
              <div className="text-900 font-medium text-xl">Customers</div>
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
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
      <FooterPage></FooterPage>
    </>
  );
}
