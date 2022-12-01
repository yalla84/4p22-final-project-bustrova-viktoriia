import Input from '../../Components/Input/Input';
import './Callback.css';
import { Link } from "react-router-dom"
import { useEffect } from 'react';

function Callback () {
    useEffect(() => {
        const input = document.getElementById('email')
        const name = document.getElementById('name')
        const textarea = document.getElementById('textarea')

        const error = document.getElementById('error')
        const error1 = document.getElementById('error1')
        const error2 = document.getElementById('error2')
        const errorarea = document.getElementById('error3')
        const errorarea2 = document.getElementById('error4')

        const button = document.getElementById('submit')

        button.addEventListener('click', (event) => {
            event.preventDefault();
            validateEmail(input.value);

        if (!input.value) {
            input.classList.add('red')
            input.classList.remove('white');
            error1.classList.add('show');
            error.classList.remove('show')
        }else
    
        if (validateEmail(input.value)) {
            input.classList.add('white')
            input.classList.remove('red');
            error.classList.remove('show');
            error1.classList.remove('show');
    
        }else {
            input.classList.remove('white');
            input.classList.add('red')
            error.classList.add('show')
            error1.classList.remove('show');
        }

        let valid = name.value;
        let area = textarea.value;

        if (!valid) {
            name.classList.add('red')
            name.classList.remove('white');
            error2.classList.add('show');

        }else {
            name.classList.remove('red');
            name.classList.add('white');
            error2.classList.remove('show');
        }

        if (!area) {
            textarea.classList.add('red')
            textarea.classList.remove('white');
            errorarea.classList.add('show');
            errorarea2.classList.remove('show')
        }else
        
        if (area.length < 10) {
            textarea.classList.add('red')
            textarea.classList.remove('white');
            errorarea.classList.remove('show');
            errorarea2.classList.add('show')
        }else {
            textarea.classList.remove('red')
            textarea.classList.add('white');
            errorarea.classList.remove('show');
            errorarea2.classList.remove('show');
        }

        if (validateEmail(input.value) === true) {
            validTest();
        }

        function validTest() {
            const test = Object();
            test.email = input.value;
            test.name = name.value;
            test.area = textarea.value;
            console.log(test);
            return;
        }
        })

        function validateEmail(email) { 
            console.log(email);
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            console.log(re.test(String(email).toLowerCase()))
            return re.test(String(email).toLowerCase());
        }
    },[]);

   return (
    <div className="Box">
        <div className="Box-pages">
            <ul className="Box-list">
                <li className="Box-text">
                    <Link to="/" className='Box-link'>Home</Link>
                </li>
                <li className="Box-text">
                    <Link to="/Callback" className='Box-link'>Callback</Link>
                </li>
                <li className="Box-text">
                    <Link to="/PageTest" className='Box-link'>Catalog</Link>
                </li>
            </ul>
            <img className="Box-img" src='https://newbur.ru/upload/iblock/57b/g9x1ezy5wwudmedhf1nj6z7vdm1erpow.jpg' alt='Buy'></img>
        </div>
        <div className="Comment">
            <form className="Callback">
                <h1 className="Callback-title">Callback</h1>
                <div className="Callback-box">
                    <div className="Callback-email">
                        <label className="Callback-label" htmlFor="email">Email</label>
                        <div className="Callback-email__error2" id='error1'>This field is required</div>
                        <div className="Callback-email__error" id='error'>Email entered incorrectly</div>
                        <Input id="email" name="email" type="email" placeholder="Enter email" />
                    </div>
                    <div className="Callback-name">
                        <label className="Callback-label" htmlFor="text">Name</label>
                        <div className="Callback-name__error" id='error2'>This field is required</div>
                        <Input id="name" name="taxt" type="text" placeholder="Enter your name" />
                    </div>
                    <div className="Callback-radio">
                        <h2 className="Callback-head">Gender</h2>
                        <div className="Callback-man">
                            <input className="Callback-man__input" id="radio-1" type="radio" name="gender" value="man"></input>
                            <label className="Callback-man__label" htmlFor="radio-1">Man</label>
                        </div>
                        <div className="Callback-woman">
                            <input className="Callback-woman__input" id="radio-2" type="radio" name="gender" value="woman"></input>
                            <label className="Callback-woman__label" htmlFor="radio-2">Woman</label>
                        </div>
                    </div>
                    <div className="Callback-text">
                        <label className="Callbsck-text__label" htmlFor="textarea">Comment</label>
                        <div className="Callback-textarea__erorr" id='error3'>This field is required</div>
                        <div className="Callback-textarea__error2" id='error4'>Text must contain at least 10 characters</div>
                        <textarea className="Callback-textarea" name="textarea" id="textarea" placeholder="Write your comment..."></textarea>
                    </div>
                    <div className="Callback-checkbox">
                        <input className="Callback-checkbox__input" id="checkbox-1" type="checkbox"></input>
                        <label className="Callback-checkbox__label" htmlFor="checkbox-1">I agree to receive updates by email</label>
                    </div>
                    <div className="Callback-submit">
                        <input className="Callback-submit__input" id='submit' type="submit" value="Submit Comment"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
   )
}

export default Callback;

