import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import data from "../../data";

export default function MediaCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        {data.map((item) => {
          return (
            <>
              <h1 key={item.name}>{item.name}</h1>
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
            </>
          );
        })}
      </Card>
    </Container>
  );
}
