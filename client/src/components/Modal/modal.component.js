import React from 'react';
import { ModalOverflow, ModalWrapper } from './modal.styled';

export const Modal = ({
  display,
  title = 'Modal title',
  handleClose,
  handleAction,
  actionTitle,
  allowAction,
  children,
}) => {
  const handleModalAction = () => {
    handleAction();
    handleClose();
  };
  return (
    <ModalOverflow display={display}>
      <ModalWrapper>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => handleClose()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => handleClose()}
              >
                Close
              </button>
              <button
                onClick={() => handleModalAction()}
                type="button"
                // button will be disabled if number was sold
                disabled={allowAction ? '' : 'disabled'}
                className="btn btn-primary"
              >
                {actionTitle || 'Save changes'}
              </button>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </ModalOverflow>
  );
};
