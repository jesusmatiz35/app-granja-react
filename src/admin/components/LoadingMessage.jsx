export const LoadingMessage = ({ message }) => {
  return (
    <div className="card p-2 text-center">
      <i className="fas fa-spinner fa-spin"></i>
      <small className="text-dark">{message}</small>
    </div>
  );
};
