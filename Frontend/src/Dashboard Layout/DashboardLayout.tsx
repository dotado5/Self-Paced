import "./DashboardLayout.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
// import user_icon from "../assets/user_icon.png";
import { useEffect, useState } from "react";
import {
  EXPIRATION_TOKEN,
  USER_ACCESS_TOKEN,
  USER_FIRSTNAME,
  USER_INITIALS,
} from "../Constants/api";
import LocalStorage from "../Services/Localstorage";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string | null>("");
  const [initials, setInitials] = useState<string | null>("");

  useEffect(() => {
    async function getUserDetails() {
      await setFirstName(LocalStorage.get(USER_FIRSTNAME));

      await setInitials(LocalStorage.get(USER_INITIALS));
    }

    const checkTokenExpiration = () => {
      const expiration = localStorage.getItem(EXPIRATION_TOKEN);
      // console.log("less than", localStorage.getItem(USER_ACCESS_TOKEN));

      if (expiration && new Date(expiration) <= new Date()) {
        localStorage.setItem(USER_ACCESS_TOKEN, "");
        localStorage.removeItem(EXPIRATION_TOKEN);
        localStorage.setItem(USER_INITIALS, "");
        localStorage.removeItem(USER_FIRSTNAME);
        navigate("/auth/signin"); // Redirect to login or handle expiration
      }

      if (localStorage.getItem(USER_ACCESS_TOKEN)?.length === 0) {
        localStorage.setItem(USER_INITIALS, "");
        localStorage.removeItem(USER_FIRSTNAME);
      }

      if (localStorage.getItem(USER_ACCESS_TOKEN)?.length === 0) {
        navigate("/auth/signin");
      }
    };

    checkTokenExpiration();
    getUserDetails();
    const interval = setInterval(checkTokenExpiration, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"dashboard_layout"}>
      <Sidebar />
      <div className={"layout_content"}>
        <div className={"header"}>
          <h2 className={"title"}>
            Welcome, <p>{firstName}</p>
          </h2>
          <span className="icon">{initials}</span>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
