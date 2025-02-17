
export const ButtonFlag = ({ icon='fa-plus', onClickBtn }) => {
  return (
    <i onClick={() => onClickBtn() } className={`fa ${icon} btn btn-outline-info text-primary btn-sm m-1`}></i>
  )
}
