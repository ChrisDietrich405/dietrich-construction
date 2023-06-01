import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import data from "../../data";

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
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <h1>{item.name}</h1>
              <CardMedia
                sx={{ height: 140 }}
                image={item.image}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Container>
  );
}
