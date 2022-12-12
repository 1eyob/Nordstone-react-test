import React from "react";
import { useState } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../../firebase";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@mui/material";

const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BK_9ZylDIAl4cwIhWdz7Bzy3MsP7kMZydM0kHczkEnUgKUQesYwGm4i33oWykD5obYVRrVEuprc-iAwHqILBI1o",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other necessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });

  // getToken(setTokenFound);

  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return (
      <div>
        <p>
          <b>{notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
      </div>
    );
  }

  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);
  requestForToken();

  return (
    <div>
      {" "}
      <Toaster />
      <Button
        sx={{
          marginTop: "100px",
        }}
        variant="contained"
        color="primary"
      >
        Notify Me!
      </Button>
    </div>
  );
};

export default Notification;
