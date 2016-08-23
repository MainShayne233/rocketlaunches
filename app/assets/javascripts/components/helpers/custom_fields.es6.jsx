notification_time_field = {
  field: (
    <div>
      <label>Notifcation Day/Time</label>
      <div className="ui three fields">
        <div className="six wide field">
          <label>Day</label>
          <select ref="">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) =>(
              <option key={index}>{day}</option>
            ))}
          </select>
        </div>
        <div className="six wide field">
        </div>
        <div className="field">
          <label>Time</label>
          <div className="ui two fields">
            <div className="field">
              <select>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((time) => (
                  <option key={time}>{`${time}:00`}</option>
                ))}

              </select>
            </div>
            <div className="field">
              <select>
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  componentDidMount: function(){

  }
}