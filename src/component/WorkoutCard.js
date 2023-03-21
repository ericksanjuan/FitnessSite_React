import React from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



function WorkoutCard({ workOutCard }) {
  console.log('card data:', workOutCard)
  return (
    workOutCard.map((workout) => (
      <Card sx={{ maxWidth: 345 }} key={workout.id}>
        <CardMedia
          sx={{ height: 140 }}
          image={workout.gifUrl}
          title={workout.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {workout.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {workout.bodyPart}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    ))
  );
}

export default WorkoutCard;
