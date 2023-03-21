import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import UserInput from "./component/UserInput";
import { Button, Container, Paper, Stack } from "@mui/material";

function App() {
  // DD means DropDown
  
  const [bodyPartDD, setBodyPartDD] = useState(new Set()),
    [muscleTypeDD, setMuscleTypeDD] = useState(new Set()),
    [bodyPart, setBodyPart] = useState(''),
    [muscleType, setMuscleType] = useState('')

  useEffect(() => {
    getExercises();
  }, []);

  function getExercises() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cb7146dee1mshad319cacdd23b3fp176872jsn034168aaf571",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    fetch("https://exercisedb.p.rapidapi.com/exercises", options)
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < response.length; i++) {
          let currentItem = response[i];
          bodyPartDD.add(currentItem.bodyPart);
          muscleTypeDD.add(currentItem.target);
        }
        setBodyPartDD(new Set(bodyPartDD));
        setMuscleTypeDD(new Set(muscleTypeDD));
      
      })
      .catch((err) => console.error(err));
  }

  // console.log(muscleTypeDD);
  return (
    <div className='App'>
      <Header />
      <Container maxWidth="sm">
        <Paper variant="outlined" sx={{padding: 1}}>
          <Stack spacing={1}>
            <UserInput className="BP" bodyPartDD={bodyPartDD} setBodyPart={setBodyPart} bodyPart={bodyPart} label='Body Part'/>
            <UserInput className="MT" bodyPartDD={muscleTypeDD} setBodyPart={setMuscleType} bodyPart={muscleType} label='Muscle Type'/>
            <Button variant="contained">Generate Workouts</Button>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
