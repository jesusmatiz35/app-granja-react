import { useEffect } from "react";

export const ModalMain = ({ onClose, modalTitle='Modal Title', modalSize='', children }) => {
  useEffect(() => {
    const modalElement = document.getElementById("mainModal");
    const backdropElement = document.createElement("div");
    backdropElement.className = "modal-backdrop fade";

    if (modalElement) {
      modalElement.classList.add("fade");
      document.body.appendChild(backdropElement);
      setTimeout(() => {
        modalElement.classList.add("show");
        backdropElement.classList.add("show");
      }, 150);
    }

    return () => {
      if (modalElement) {
        modalElement.classList.remove("show");
        modalElement.classList.remove("fade");
      }
      if (backdropElement) {
        backdropElement.classList.remove("show");
        setTimeout(() => {
          document.body.removeChild(backdropElement);
        }, 150);
      }
    };
  }, []);

  return (
    <>
      <div
        id="mainModal"
        className="modal"
        tabIndex={-100}
        style={{ display: 'block' }}>
        <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${modalSize}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mainModalLabel">
                <small>{modalTitle}</small>
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => onClose(false)}></button>
            </div>
            <div className="modal-body" style={{ marginTop: '-25px' }}>{ children }</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => onClose(false)}
                data-bs-dismiss="modal">
                Cerrar
              </button>
              <button type="button" onClick={() => onClose(true)} className="btn btn-outline-primary">
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
