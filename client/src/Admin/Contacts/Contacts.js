import { Button } from "primereact/button";
import { Chip } from "primereact/chip";
import Layout from "../../Layout/Layout";
import Banner from "../../images/img.png";
import FooterPage from "../../Layout/Footer/Footer";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <Layout></Layout>
      <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">
              Create the screens
            </span>
            <div className="text-6xl text-primary font-bold mb-3">
              your visitors deserve to see
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

      <div className="surface-0 text-center mx-8 my-8">
        <div className="font-medium text-3xl text-900 mb-3">
          Movie Information
        </div>
        <div className="text-500 mb-5">
          Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit
          rutrum.
        </div>
        <div className={"grid grid-nogutter gap-4 pt-4"}>
          <div className={"col-12 md:col-6"}>
            <ul className="list-none overflow-hidden p-0 m-0">
              <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                <div className="text-500 w-6 md:w-2 font-medium">Title</div>
                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                  Heat
                </div>
                <div className="w-6 md:w-2 flex justify-content-end">
                  <Button
                    label="Edit"
                    icon="pi pi-pencil"
                    className="p-button-text"
                  />
                </div>
              </li>
              <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                <div className="text-500 w-6 md:w-2 font-medium">Genre</div>
                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                  <Chip label="Crime" className="mr-2" />
                  <Chip label="Drama" className="mr-2" />
                  <Chip label="Thriller" />
                </div>
                <div className="w-6 md:w-2 flex justify-content-end">
                  <Button
                    label="Edit"
                    icon="pi pi-pencil"
                    className="p-button-text"
                  />
                </div>
              </li>
              <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                <div className="text-500 w-6 md:w-2 font-medium">Director</div>
                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                  Michael Mann
                </div>
                <div className="w-6 md:w-2 flex justify-content-end">
                  <Button
                    label="Edit"
                    icon="pi pi-pencil"
                    className="p-button-text"
                  />
                </div>
              </li>
              <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                <div className="text-500 w-6 md:w-2 font-medium">Actors</div>
                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                  Robert De Niro, Al Pacino
                </div>
                <div className="w-6 md:w-2 flex justify-content-end">
                  <Button
                    label="Edit"
                    icon="pi pi-pencil"
                    className="p-button-text"
                  />
                </div>
              </li>
              <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                <div className="text-500 w-6 md:w-2 font-medium">Plot</div>
                <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                  A group of professional bank robbers start to feel the heat
                  from police when they unknowingly leave a clue at their latest
                  heist.
                </div>
                <div className="w-6 md:w-2 flex justify-content-end">
                  <Button
                    label="Edit"
                    icon="pi pi-pencil"
                    className="p-button-text"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className={"col-12 md:col-5"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.39807930545!2d36.72037788460693!3d-1.3024715133614055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655c311541%3A0x9dd769ac1c10b897!2sNairobi%20County!5e0!3m2!1sen!2ske!4v1715157939918!5m2!1sen!2ske"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <FooterPage></FooterPage>
    </div>
  );
};

export default ContactPage;
