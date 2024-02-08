import { Octokit } from "octokit";

const LIST_SIZE = 5;
const octokit = new Octokit({ auth: process.env.TOKEN });
let issues = await octokit.request("GET /repos/{owner}/{repo}/issues", { 
  owner: "FRC-1294", 
  repo: "frc2024",
  state: "open",
  labels: "Mechanics",
});

export default function Mechanical() {
  console.log(issues.data[7]);
  //issues.data.map(i => <p>{i?.assignees.forEach(a => <p>{a.login}</p>)}</p>)
    return (
        <div>
          <h1>
            Mechanical
          </h1>
          <div>
          </div>
        </div>
      );
}