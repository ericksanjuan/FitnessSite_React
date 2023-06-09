import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import UserInput from "./component/UserInput";
import { Box, Button, Container, Paper, Stack } from "@mui/material";
import WorkoutCard from "./component/WorkoutCard";
import {ColorModeProvider} from "./component/ModeContext"



function App() {
  // DD means DropDown
  const [bodyPartDD, setBodyPartDD] = useState(new Set()),
    [muscleTypeDD, setMuscleTypeDD] = useState(new Set()),
    [bodyPart, setBodyPart] = useState(''),
    [muscleType, setMuscleType] = useState(''),
    [workOuts, setWorkOuts] = useState([]),
    [workOutCard, setWorkOutCard] = useState([]),
    [equipmentDD, setEquipmentDD] = useState(new Set()),
    [equipment, setEquipment] = useState('')

  useEffect(() => {
    getExercises();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    getWorkOuts(bodyPart, muscleType, equipment)
  }

  function getExercises() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f2a63a18efmshf77b64b42f7d000p15e104jsn3c1b283238b1",
        // "X-RapidAPI-Key": "a95449129cmsh849d2a0cc9c7a35p19dbb7jsneb7a0c766332",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    
    fetch("https://exercisedb.p.rapidapi.com/exercises", options)
      .then((response) => response.json())
      .then((response) => {
        setWorkOuts(response)
        for (let i = 0; i < response.length; i++) {
          let currentItem = response[i];
          bodyPartDD.add(currentItem.bodyPart);
          muscleTypeDD.add(currentItem.target);
          equipmentDD.add(currentItem.equipment);
        }
        setBodyPartDD(new Set(bodyPartDD));
        setMuscleTypeDD(new Set(muscleTypeDD));
        setEquipmentDD(new Set(equipmentDD));
      })
      .catch((err) => console.error(err));
  }
  function getWorkOuts(bodyPart, muscleType, equipment) {
    const filteredWorkOuts = workOuts.filter(
      exercise => exercise.bodyPart === bodyPart && exercise.target === muscleType && exercise.equipment === equipment
    );
    if (filteredWorkOuts.length > 0) {
      setWorkOutCard(filteredWorkOuts);
    } else {
      setWorkOutCard(
        workOuts.filter(
          exercise => exercise.bodyPart === bodyPart || exercise.target === muscleType || exercise.equipment === equipment
        )
      );
    }
  }

  return (
    <ColorModeProvider>
    <div className='App'>
      <Header />
      <Box m={2}/>
      <Container maxWidth="sm">
        <Paper variant="outlined" sx={{ padding: 1 }}>
          <Stack spacing={1}>
            <UserInput className="BP" bodyPartDD={bodyPartDD} setBodyPart={setBodyPart} bodyPart={bodyPart} label='Body Part' />
            <UserInput className="MT" bodyPartDD={muscleTypeDD} setBodyPart={setMuscleType} bodyPart={muscleType} label='Muscle Type' />
            <UserInput className="EQ" bodyPartDD={equipmentDD} setBodyPart={setEquipment} bodyPart={equipment} label='Equipment' />
            <Button variant="contained" onClick={handleClick}>Generate Workouts</Button>
          </Stack>
        </Paper>
      </Container>
      <Container>
        <WorkoutCard workOutCard={workOutCard} />     
      </Container>
    </div>
    </ColorModeProvider>
  );
}

export default App;
