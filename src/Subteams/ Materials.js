import './CSS/General.css';
import Handler from './Handler.js'

const SUBTEAM = "Materials"
let issues = await Handler(SUBTEAM);

export default function Materials() {
    return (
        <div className="container">
          <div className="title">
            {SUBTEAM}
          </div>
          <div className="content">
            { issues.data.map(i => <div className="bpoint">{i.title} - <i>{ i.assignee ? i.assignees.map(a => a.login + ", ") : "" }</i></div>) }
          </div>
        </div>
      );
}