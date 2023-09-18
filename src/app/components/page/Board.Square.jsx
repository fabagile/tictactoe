const Square = ({ value, onSquareClick }) => (
  <div role='button' className='square gap-2' onClick={onSquareClick}>
    {value}
  </div>
)

export default Square
