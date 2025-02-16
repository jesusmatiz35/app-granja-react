
export const InputMessageError = ({ message }) => {
  return (
    <small className='text-danger' style={ { fontSize: '0.9rem', position: 'absolute', display: 'block', marginTop: '-20px', marginLeft: '10px' } }>{ message }</small>
  )
}
