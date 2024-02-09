import '../Subteams/CSS/General.css'

export default function Emergency() {
    return (
        <div className="container">
          <div className="title">
            Emergency Contact Form
          </div>
          <div className="content">
            <img src={require('../Images/emergency.png')} alt=""/>
          </div>
        </div>
    );
}