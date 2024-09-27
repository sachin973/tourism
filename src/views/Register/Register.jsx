import React from 'react'
// import { FormControl } from '@mui/';
const Register = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h4 className='mt-0 mb-6 fw-500'>Register</h4>
        {/* <form>
          <div className="search-field mb-3" >
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value=""
              placeholder="Enter Email"
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

          <button type="submit">Sign In</button>

          <p>Forgot password?</p>
          <p>Don't have an account? <a href="#">Register</a></p>
        </form> */}
       <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-full px-3 mb-6 md:mb-0">
      {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Title
      </label> */}
      <div className="relative">
        <select className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-3" id="grid-state">
          <option>Title</option>
          <option>Mr</option>
          <option>Miss</option>
          <option>Ms</option>
          <option>Mrs</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
      <input className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-full px-3 mb-3">
      <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
    </div>
    <div className="w-full md:w-full px-3 mb-3">
      <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email Id" />
    </div>
    <div className="w-full md:w-full px-3 mb-3">
      <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Mobile Number" />
    </div>
    <div className="w-full md:w-full px-3">
    {/* <div className="w-full px-3"> */}
      
      <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Password" />
      {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    {/* </div> */}
  </div>
  <div className="px-3 mb-3">
    <div className="w-full flex">
      
      <input className="" type="checkbox" />
      <p className="text-gray-600 text-xs ml-3"> I am interested to receive Promotions and Special Offers from PT Dwidaya World Wide.</p>
    </div>
  </div>
  <div className="px-3 mb-3">
      <p className="text-gray-600 text-xs ">By signing up, you agree to the <a href="">terms and conditions</a></p>
    </div>
    <div className="w-full px-3 mb-3" style={{textAlignLast: "right"}}>
    <button className="Register-button ">Register</button>
    </div>
    <div className="px-3 mb-3">
      <p className="text-gray-600 text-xs ">Already a member of Sign In</p>
    </div>
  </div>
  
 
</form>
         {/* <form >
                <div class="form-group">
                    <select class="form-control">
                        <option value="0">Title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Miss">Miss</option>
                    </select>
                    <span id="lblddltitle" className="alertMsg focussed"></span>
                </div>
                <div className="form-group">
                    <input type="text" className="input-text full-width" onkeydown="return keyRestrict(event,'abcdefghijklmnopqrstuvwxyz ');" placeholder="First Name" id="txtfname" />
                    <span id="lbltxtfname" className="alertMsg"></span>
                </div>
                <div className="form-group">
                    <input type="text" className="input-text full-width" onkeydown="return keyRestrict(event,'abcdefghijklmnopqrstuvwxyz ');" placeholder="Last Name" id="txtlname" />
                    <span id="lbltxtlname" className="alertMsg"></span>
                </div>
                <div className="form-group">
                    <input type="text" className="input-text full-width" placeholder="Email Id" id="txtemailaddress" />
                    <span id="lblemailaddress" className="alertMsg"></span>
                </div>
                <div className="isd-mobile-input-section form-group">
                    <span className="country-code-highlighter">
                        <select  className="form-control">
                            <option>+91</option>
                        </select>

                    </span>
                 
   
                   
                 
                    <input type="text" id="txtmobile" className="mobile-field-input" placeholder="Mobile Number" maxlength="15" onkeydown="return keyRestrict(event,'0123456789');" />
                </div>
                <span id="lblmobile" className="alertMsg"></span>
                <div className="form-group">
                    <input type="password" className="input-text full-width" placeholder="Password" id="txtpassword" autocomplete="off" />
                 
                    <span id="lblpassword" className="alertMsg"></span>
                    <div id="lblisRegistered" className="alertMsg"></div>
                </div>
                <div className="form-group ">
                    <input type="checkbox" value="" id="ReceivePromotion" name="ReceivePromotion" checked="checked" />
                    <p className="description">
                        &nbsp; I am interested to receive Promotions and Special Offers from PT Dwidaya World Wide.
                    </p>
                </div>
                <div id="lblisRegistered" className="alertMsg"></div>
                <div className="form-group ">
                    <p className="description">By signing up, you agree to the <a href="#" className="goto-login" target="_blank">terms and conditions</a></p>
                </div>
                <div className="form-group">
                    <button type="submit" id="btnregister" className="full-width btn-medium">Register</button>
                </div>
                <div id="registerloader" >
                    <div className="loaderlogin"></div>
                </div>
            </form> */}
      </div>
    </div>
  );
}

export default Register