
export const CustomForm = ({ action = '#', autocomplete='off', children }) => {
  return (
    <form action={action} autoComplete={autocomplete}>
        {children}
    </form>
  )
}
