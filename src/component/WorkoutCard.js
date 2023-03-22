import React, {useState} from "react";
import { Card, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareBtn from "./ShareBtn";


function WorkoutCard({ workOutCard }) {
  const [page, setPage] = useState(1);
  const workoutsPerPage = 3;
  const totalWorkouts = workOutCard.length;
  const totalPages = Math.ceil(totalWorkouts / workoutsPerPage);
 
  const handlePrevClick = () => {
    setPage(prevPage => prevPage - 1);
  };

  const handleNextClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Stack>
      <Stack direction="row" spacing={2} sx={{ padding: 2, justifyContent:"center" }}>
      {workOutCard.slice((page - 1) * workoutsPerPage, page * workoutsPerPage).map((workout) => (
        <Card sx={{ maxWidth: 345 }} key={workout.id}>
          <CardMedia
            sx={{ height: 200 }}
            image={workout.gifUrl} 
            title={workout.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Arial, Helvetica, sans-serif"}}>
              {workout.name.replace(/^./, workout.name[0].toUpperCase())}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {workout.bodyPart}
            </Typography>
          </CardContent>
          <CardActions>
            <ShareBtn />
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>))}
        </Stack>
        {totalWorkouts > workoutsPerPage && (
        <div>
          <Button onClick={handlePrevClick} disabled={page === 1}>
            Prev
          </Button>
          <Button onClick={handleNextClick} disabled={page === totalPages}>
            Next
          </Button>
        </div>
      )}
    </Stack>
  );
}

export default WorkoutCard 