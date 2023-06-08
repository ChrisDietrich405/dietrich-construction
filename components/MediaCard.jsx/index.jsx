import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import data from "../../data";
import data2 from "../../data2";

export default function MediaCard() {
  return (
    <Container>
      <Box sx={{ m: 2 }}>
        <div>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {data.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <CardMedia
                  sx={{ height: 240, width: 240 }}
                  image={item.image}
                  title="project"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
      <Box
        sx={{ m: 6 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0, auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            spacing={6}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {data2.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                style={{
                  textAlign: "center",
                  margin: "0 20px",
                }}
              >
                <CardMedia
                  sx={{ height: 240, width: 240 }}
                  image={item.image}
                  title="project"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </Container>
  );
}
