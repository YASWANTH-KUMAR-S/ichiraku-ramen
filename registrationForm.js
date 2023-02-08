
import './registrationForm.css';
function RegistrationForm() {
    return(
     <div className='uchiha'>
        <h1 className='itachi'>SignUp page</h1>
        <section class='Minato'>
            <div className='form'>
                <section className='obito'>
                <div className='kushina'>
                <label   for="fname">Phone no  </label><br></br>
                <input type="tel" id="fname" name="fname" ></input>
                <br></br></div>
                <div className='kushina'>
                <label  for="otp">Enter the OTP!!</label><br></br>
                <input type="tel" id="otp" name="otp"></input><br>
                </br></div>
                <div className='kushina'>
                <label  for="pwd">Password</label><br></br>
                <input type="password" id="pwd" name="pwd"></input>
                <br></br></div>
                <button class='madara'>Sign Up</button>
                <button class='hashira'>Login</button>
                </section>
            </div>
        </section>
     </div>
    )       
}
export default RegistrationForm;