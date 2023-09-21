import { MouseEventHandler } from "react"

const Square = ({ value, onSquareClick, color }: { value:String, onSquareClick:MouseEventHandler, color:String }) => (
  <div role='button' className={`board__grid__cell ${color}`} onClick={onSquareClick}>
    <div className="">

    {value}
    </div>
  </div>
)

export default Square
