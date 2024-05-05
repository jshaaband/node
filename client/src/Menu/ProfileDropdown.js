import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { Avatar } from "primereact/avatar";

export default function PopupDoc() {
  const menuLeft = useRef(null);
  const menuRight = useRef(null);
  const toast = useRef(null);
  const items = [
    {
      label: "Johnson Didinya",
      items: [
        {
          label: "Profile",
          icon: "pi pi-user",
        },
        {
          label: "Logout",
          icon: "pi pi-lock",
          url: "/logout",
        },
      ],
    },
  ];

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast}></Toast>
      <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
        icon="pi pi-align-left"
        className="mr-2"
        onClick={(event) => menuLeft.current.toggle(event)}
        aria-controls="popup_menu_left"
        aria-haspopup
      />
    </div>
  );
}
