import React from 'react';

const Modal = (props) => {
  return (
    <React.Fragment>
      <div
        className='modal fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Modal title
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='card w-50'>
                <div className='card-body'>
                  <h5 className='card-title'>fbsb fs</h5>
                  <p className='card-text'>edbeb</p>
                  <p className='card-text'>PRICE: </p>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
