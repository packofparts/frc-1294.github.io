import { Octokit } from "octokit";
const LIST_SIZE = 5; // Limit of items per grid item
const octokit = new Octokit({ auth: process.env.TOKEN });

export default async function getIssues(subteam) {
    let issues = await octokit.request("GET /repos/{owner}/{repo}/issues", { 
        owner: "FRC-1294", 
        repo: "frc2024",
        state: "open",
        labels: `Priority High,${subteam}`, // Get high priority items
    });

    if(issues?.data.length < LIST_SIZE) {
        let temp = await octokit.request("GET /repos/{owner}/{repo}/issues", { 
            owner: "FRC-1294", 
            repo: "frc2024",
            state: "open",
            labels: `Priority Medium,${subteam}`, // Get medium priority items
        });
        temp?.data.map(item => issues.data.push(item));
    }

    if(issues?.data.length < LIST_SIZE) {
        let temp = await octokit.request("GET /repos/{owner}/{repo}/issues", { 
            owner: "FRC-1294", 
            repo: "frc2024",
            state: "open",
            labels: `Priority Low,${subteam}`, // Get low priority items
        });
        temp?.data.map(item => issues.data.push(item));
    }

    while(issues?.data.length > LIST_SIZE) {
        issues.data.pop();
    }

    return issues;
}

export async function addIssues(subteam, i) {
    let issues = i;

    if(issues?.data.length < LIST_SIZE) {
        let temp = await octokit.request("GET /repos/{owner}/{repo}/issues", { 
            owner: "FRC-1294", 
            repo: "frc2024",
            state: "open",
            labels: `Priority Medium,${subteam}`, // Get medium priority items
        });
        temp?.data.map(item => issues.data.push(item));
    }

    issues = await octokit.request("GET /repos/{owner}/{repo}/issues", { 
        owner: "FRC-1294", 
        repo: "frc2024",
        state: "open",
        labels: `Priority High,${subteam}`, // Get high priority items
    });

    if(issues?.data.length < LIST_SIZE) {
        let temp = await octokit.request("GET /repos/{owner}/{repo}/issues", { 
            owner: "FRC-1294", 
            repo: "frc2024",
            state: "open",
            labels: `Priority Medium,${subteam}`, // Get medium priority items
        });
        temp?.data.map(item => issues.data.push(item));
    }

    if(issues?.data.length < LIST_SIZE) {
        let temp = await octokit.request("GET /repos/{owner}/{repo}/issues", { 
            owner: "FRC-1294", 
            repo: "frc2024",
            state: "open",
            labels: `Priority Low,${subteam}`, // Get low priority items
        });
        temp?.data.map(item => issues.data.push(item));
    }

    while(issues?.data.length > LIST_SIZE) {
        issues.data.pop();
    }

    return issues;
}