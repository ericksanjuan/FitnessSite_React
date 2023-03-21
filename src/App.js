import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import UserInput from "./component/UserInput";
import { Button, Container, Paper, Stack } from "@mui/material";
import WorkoutCard from "./component/WorkoutCard";

function App() {
  // DD means DropDown

  const [bodyPartDD, setBodyPartDD] = useState(new Set()),
    [muscleTypeDD, setMuscleTypeDD] = useState(new Set()),
    [bodyPart, setBodyPart] = useState(''),
    [muscleType, setMuscleType] = useState(''),
    [workOuts, setWorkOuts] = useState([])

  useEffect(() => {
    getExercises();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    getWorkOuts(bodyPart, muscleType)
  }

  function getExercises() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1612d92675msh4d77137027a4557p148afdjsna32764f0c32f",
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
        }
        setBodyPartDD(new Set(bodyPartDD));
        setMuscleTypeDD(new Set(muscleTypeDD));

      })
      .catch((err) => console.error(err));
  }
  function getWorkOuts(bodyPart, muscleType) {

    setWorkOuts(workOuts.filter(exercise => exercise.bodyPart === bodyPart && exercise.target === muscleType));
    console.log('new state after filter', workOuts);

    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "1612d92675msh4d77137027a4557p148afdjsna32764f0c32f",
    //     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    //   },
    // };


    // fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options)
    //     .then((response) => response.json())
    //     .then((response) => {
    //     console.log('this is the data', response)
    //     setWorkOuts(response) 
    //     })
  }

  return (
    <div className='App'>
      <Header />
      <Container maxWidth="sm">
        <Paper variant="outlined" sx={{ padding: 1 }}>
          <Stack spacing={1}>
            <UserInput className="BP" bodyPartDD={bodyPartDD} setBodyPart={setBodyPart} bodyPart={bodyPart} label='Body Part' />
            <UserInput className="MT" bodyPartDD={muscleTypeDD} setBodyPart={setMuscleType} bodyPart={muscleType} label='Muscle Type' />
            <Button variant="contained" onClick={handleClick}>Generate Workouts</Button>
          </Stack>
        </Paper>
      </Container>
      <WorkoutCard
        workOuts={workOuts} />
    </div>
  );
}

export default App;
