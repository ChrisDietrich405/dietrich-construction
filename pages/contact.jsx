import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { TextField, Typography, Box, Button } from "@mui/material";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      firstName,
      lastName,
      email,
      message,
      to_name: "Chris",
    };
    console.log(templateParams);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          notify();
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Typography variant="h4" mb={2} mt={2}>
        Contact us today for a free estimate
      </Typography>
      <div className="contact-container">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50%" },
          }}
          onSubmit={sendEmail}
        >
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
          ></TextField>

          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          ></TextField>
          
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          ></TextField>

          <TextField
            id="message"
            label="Message"
            variant="outlined"
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={5}
          />
          <Button type="submit">Submit</Button>
        </Box>
        <Box>
          <Image
            style={{ borderRadius: "6px" }}
            src="/fence.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Box>
      </div>
    </>
  );
};

export default Contact;

// FINISH FRONT END WITH <STATE></STATE>
// CREATE MY DB <CONNECTION></CONNECTION>
// CREATE MY db USING mONGO dB
