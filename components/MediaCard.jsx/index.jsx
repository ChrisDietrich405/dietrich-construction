import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import data from "../../data";
import data2 from "../../data2";

export default function MediaCard() {
  const Item = styled(Paper)(() => ({
    backgroundColor: "#98d6a9",
    padding: 8,
    textAlign: "center",
    color: "black",
  }));

  return (
    <Container>
      <Card>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center" // Set justify to "center" to horizontally center the cards
          alignItems="center" // Set alignItems to "center" to vertically center the cards
        >
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.image}
                title="green iguana"
              />
            </Grid>
          ))}
        </Grid>
      </Card>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0, auto",
        }}
      >
        <Grid
          container
          spacing={2}
          margin="0, auto"
          direction="row"
          justify="center" // Set justify to "center" to horizontally center the cards
          alignItems="center" // Set alignItems to "center" to vertically center the cards
        >
          {data2.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              style={{ textAlign: "center" }}
            >
              <h1>{item.name}</h1>
              <CardMedia
                sx={{ height: 240, width: 240 }}
                image={item.image}
                title="green iguana"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
