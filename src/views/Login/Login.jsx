import React,{useState} from 'react';
import './Login.css';
// import Login from "../../views/Login/Login";
import Register from "../../views/Register/Register";
const Login = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenR, setIsModalOpenR] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const openModalR = () => setIsModalOpenR(true);
  const closeModal = () => setIsModalOpen(false);
  const closeModalR = () => setIsModalOpenR(false);
  if (!isOpen) return null;
 
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h3 className='mt-0 mb-6 fw-500'>Sign In</h3>
        <form>
          <div className="search-field mb-3" >
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value=""
              placeholder="Email Address"
              required
            />
          </div>

          <div className="search-field mb-3">
            <input
              type="Password"
              className="form-control"
              id="Password"
              name="Password"
              value=""
              placeholder="Password"
              required
            />
          </div>

          <div className="input-container">
            <p className='input-center'>Forgot password?</p>
            <button className="search-button ">Sign In</button>
          </div>

          <div className='mt-5'> 
          <p>Don't have an account? <a href="#" onClick={openModalR}>Register</a></p>
          <Register isOpen={isModalOpenR} onClose={closeModalR}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
