import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  ref,
  getDownloadURL,
  listAll,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../firebase";

export const Gallery = () => {
  const [file, setFile] = useState("");
  // Get all the images from Storage
  const [files, setFiles] = useState([]);
  const [percent, setPercent] = useState(0);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  // function handleUpload() {
  //   const storageRef = ref(storage, `/files/${file.name}`);
  //   uploadBytesResumable(storageRef, File).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setFiles((prev) => [...prev, url]);
  //     });
  //   });
  // }

  function handleUpload() {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        getDownloadURL(snapshot.ref).then((url) => {
          setFiles((prev) => [...prev, url]);
        });

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  }
  const imagesRef = ref(storage, "/files/");
  useEffect(() => {
    listAll(imagesRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFiles((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <Box>
      <input type="file" accept="image/*" onChange={handleChange} />
      <Button
        sx={{
          marginTop: "10px",
          marginBottom: "10px",
          alignItems: "center",
          marginLeft: "50px",
        }}
        variant="contained"
        color="primary"
        onClick={handleUpload}
      >
        Upload to Firebase
      </Button>
      <p>{percent} "% done"</p>
      {files.map((url) => {
        return (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            style={{ width: "200px", margin: "10px" }}
            src={url}
            alt="image"
          />
        );
      })}
    </Box>
  );
};
