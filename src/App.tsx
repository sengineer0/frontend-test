import React from "react"
import "./App.css"
import Card, { CardProps } from "./components/Card"
import Img from "./assets/images/CardMedia.png"

function App() {
  const [checklist, setChecklist] = React.useState<CardProps[]>([
    {
      label: "Flood zone 3",
      checked: false,
      imageURL: Img,
      onChange: () => {}
    },
    {
      label: "Flood zone 3",
      checked: false,
      imageURL: Img,
      onChange: () => {}
    },
    {
      label: "Flood zone 3",
      checked: false,
      imageURL: Img,
      onChange: () => {}
    }
  ])

  const onChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecklist = [...checklist]
    newChecklist[index].checked = event.target.checked
    setChecklist([...newChecklist])
  }
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", flexDirection: "column", rowGap: 35 }}>
          {checklist.map((el, index) => (
            <Card key={index} {...el} onChange={onChange(index)} />
          ))}
        </div>
      </header>
    </div>
  )
}

export default App
