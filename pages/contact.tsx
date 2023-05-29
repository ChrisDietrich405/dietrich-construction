import React from "react";
import { TextField, Typography, Box} from "@mui/material";

import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <Typography variant="h4" mb={2}>
        Contact us today for a free estimate
      </Typography>
      
      <Box component="form"    sx={{
        '& > :not(style)': { m: 1, width: "50%" },
      }}>
        <TextField
     
          id="outlined-basic"
          label="First Name"
          variant="outlined"
        
        />
        <TextField
        
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
         
        />
        <TextField
     
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
         <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          rows={5}
        />
      </Box>
    </Layout>
  );
};

export default Contact;
