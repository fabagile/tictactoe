const Square = ({ value, onSquareClick }) => (
  <div role='button' className='square' onClick={onSquareClick}>
    {value}
  </div>
)

export default Square
