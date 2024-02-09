import './CSS/General.css';
import Handler, { addIssues } from './Handler.js'

const SUBTEAM = "Executive"
let issues = await Handler(SUBTEAM);
issues = await addIssues("PR", issues);
issues = await addIssues("Business", issues);

export default function Executive() {
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