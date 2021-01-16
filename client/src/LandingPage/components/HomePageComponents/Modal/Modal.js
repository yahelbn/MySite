import React from "react";
import ReactDOM from "react-dom";
import mailbox from "../../../images/mailbox.svg";

const Modal = ({ isShowing, hide, modalContent }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="model-content">
                <div className="divimage">
                  <img
                    className="imagemodel"
                    src={mailbox}
                    alt={"mailbox"}
                  ></img>
                </div>
                <h4 style={{ marginTop: "22px", marginBottom: "5px" }}>
                  {modalContent.header}
                </h4>

                <p>{modalContent.p1}</p>
                <p className="p_model">
                  <b dir={modalContent.rtl ? "rtl" : "ltr"}>
                    {modalContent.p2b}
                  </b>
                  {modalContent.p2}
                </p>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
