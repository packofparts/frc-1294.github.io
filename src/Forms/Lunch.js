import '../Subteams/CSS/General.css'

export default function Lunch() {
    return (
        <div className="container">
          <div className="title">
            Lunch
          </div>
          <div className="content">
            <img src={require('../Images/lunch.png')} alt=""/>
          </div>
        </div>
    );
}