import React, { useContext, useState } from 'react';
import CartContext from './CartContext';
import FoodinCart from './FoodsinCart';

const Modal = (props) => {
  const AllCartProds = useContext(CartContext);

  const content = AllCartProds.Products.map((ele) => (
    <FoodinCart name={ele.Name} price={ele.price} Amount={ele.Amount} />
  ));

  props.currenStateProd(AllCartProds.Products);
  return (
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
          <div className='modal-body'>{content}</div>
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
  );
};

export default Modal;
