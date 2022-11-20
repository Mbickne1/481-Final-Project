import React from 'react';

export default function Main(props) {
    return <main className = "block col-2">
        <h2>Pickup Scheduling</h2>
        <form>
            <div className = "row">
                <div className = "col-2">
                <label>First Name</label>
                <input type = 'text' />
                </div>
                <div className = "col-2">
                <label>Last Name</label>
                <input type = 'text' />
                </div>
            </div>
            <div className = "row">
                <div className = "col-2">
                <label>Email</label>
                <input type = 'text' />
                </div>
                <div className = "col-2">
                <label>Phone Number</label>
                <input type = 'text' />
                </div>
            </div>
            <div>
                <label>Time</label>
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
                <label>Additional Comments</label>
                <textarea>abcd</textarea>
            </div>
        </form>
        </main>;
}