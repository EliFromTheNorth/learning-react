import { useState } from "react"
import "./OrderButton.css"

const OrderButton = () => {
    const [title, setTitle] = useState("prvni title")

    const buttonHandler = () => {
        console.log("ckicled")
        setTitle("dalsi a dalsi Title")
    }

    return (
        <>  
          <h2>{title}</h2>
          <button className="btn" onClick={buttonHandler}>Objednat</button>
        </>
    )
}

export default OrderButton