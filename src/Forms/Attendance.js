import '../Subteams/CSS/General.css'

export default function Attendance() {
    return (
        <div className="container">
          <div className="title">
            Attendance
          </div>
          <div className="content">
            <img src={require('../Images/attendance.png')} alt=""/>
          </div>
        </div>
    );
}