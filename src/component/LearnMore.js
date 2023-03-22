import React from 'react'
import Button from "@mui/material/Button";


export default function LearnMore({name}) {

const baseUrl = "https://www.google.com/search?"

const params = new URLSearchParams([
    ["q", name],
  ]);
 function handleClick(){
    let link = `${baseUrl}${params.toString()}`
    window.open(link, "_blank");
 }
  return (
    <Button size="small" onClick={handleClick}>Learn More</Button>
  )

}
