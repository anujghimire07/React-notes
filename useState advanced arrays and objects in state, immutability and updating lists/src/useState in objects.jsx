import { useState } from "react";
export default function MyCar(){
     //useState that holds an object
  const [car, setFeatures]=useState({
    year: "2014",
    model: "raptor",
    color: "blue",
  })
  return (
    <>
    {car.year}, {car.color}, {car.model}
    </>
  )
}