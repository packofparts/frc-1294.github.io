import './App.css';
import Mechanical from './Subteams/Mechanical';
import Electrical from './Subteams/Electrical';
import Software from './Subteams/Software';
import Design from './Subteams/Design';
import Materials from './Subteams/ Materials';
import Executive from './Subteams/Executive';
import Attendance from './Forms/Attendance';
import Lunch from './Forms/Lunch';
import Emergency from './Forms/Emergency';

function App() {
  let d = new Date();
  if(d.getDay() === 6) {
    // Lunch
    return (
      <div id="container">
        <div className="gridItem" id="mech"><Mechanical/></div>
        <div className="gridItem" id="elec"><Electrical/></div>
        <div className="gridItem" id="soft"><Software/></div>
        <div className="gridItem" id="desi"><Design/></div>
        <div className="gridItem" id="mate"><Materials/></div>
        <div className="gridItem" id="exec"><Executive/></div>

        <div className="gridItem" id="form"><Emergency/></div>
        <div className="gridItem" id="form"><Attendance/></div>
        <div className="gridItem" id="form"><Lunch/></div>
      </div>
    );
  } else {
    // No lunch
    return (
      <div id="container">
        <div className="gridItem" id="mech"><Mechanical/></div>
        <div className="gridItem" id="elec"><Electrical/></div>
        <div className="gridItem" id="soft"><Software/></div>
        <div className="gridItem" id="desi"><Design/></div>
        <div className="gridItem" id="mate"><Materials/></div>
        <div className="gridItem" id="exec"><Executive/></div>

        <div className="gridItem" id="form"><Emergency/></div>
        <div className="gridItem" id="form"><Attendance/></div>
      </div>
    );
  }
}

export default App;
