import React from "react";
import './style.scss'

import Axios from "axios";

export default function NotificationBar() {
  const [notificationBarContent, setNotificationBarContent] =
    React.useState("");

  React.useEffect(() => {
    (async function getTopBarNotification() {
      try {
        const data = await Axios.get(
          `${process.env.REACT_APP_API_URI}/api/v1/notification/topbar-notification`
        );

        setNotificationBarContent(data.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <div className="notificationBar">{notificationBarContent}</div>;
}
