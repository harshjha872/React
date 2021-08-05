const Navbar = () => {
  return (
    <div>
      <div className='ui fluid inverted segment' style={{ borderRadius: 0 }}>
        <div className='ui inverted secondary huge menu'>
          <a className='item' href='/'>
            Home
          </a>
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
