import React from 'react';
import './index.css';

export default function Main(props) {
    return <main className = "block col-2">
        <div class = "wrapper">
            <h1>Pickup Scheduling</h1>
        </div>
        <form>
            <div className = "row">
                <div className = "col-2">
                <label><h2>First Name</h2></label>
                <input type = 'text' />
                </div>
                <div className = "col-2">
                <label><h2>Last Name</h2></label>
                <input type = 'text' />
                </div>
            </div>
            <div className = "row">
                <div className = "col-2">
                <label><h2>Email</h2></label>
                <input type = 'text' />
                </div>
                <div className = "col-2">
                <label><h2>Phone Number</h2></label>
                <input type = 'text' />
                </div>
            </div>
            <div>
                <label><h2>Time</h2></label>
                <select>
                    <option value = "8:00 am">8:00 am</option>
                    <option value = "9:00 am">9:00 am</option>
                    <option value = "10:00 am">10:00 am</option>
                    <option value = "11:00 am">11:00 am</option>
                    <option value = "12:00 pm">12:00 pm</option>
                    <option value = "1:00 pm">1:00 pm</option>
                    <option value = "2:00 pm">2:00 pm</option>
                    <option value = "3:00 pm">3:00 pm</option>
                    <option value = "4:00 pm">4:00 pm</option>
                    <option value = "5:00 pm">5:00 pm</option>
                    <option value = "6:00 pm">6:00 pm</option>
                    <option value = "7:00 pm">7:00 pm</option>
                </select>
            </div>
            <div>
                <label><h2>Additional Comments</h2></label>
                <textarea
          rows={25}
          cols={100}/>
            </div>
        </form>
        </main>;
}