

const hacktoberfestPRs = [
    {
        repoName:"litmuschaos", 
        title:"fix: update dark mode colors in note block",
        url:"https://github.com/litmuschaos/litmus-docs/pull/386"
    },
        {
        repoName:"OpsiMate", 
        title:"fix: improve documentation image visibility",
        url:"https://github.com/OpsiMate/documentation/pull/29"
    },
        {
        repoName:"OpsiMate", 
        title:"docs: remove creating-dashboards page and references",
        url:"https://github.com/OpsiMate/documentation/pull/34"
    },
        {
        repoName:"ghostfolio", 
        title:"Task/refactor PortfolioDividends interface to PortfolioDividendsResponse interface",
        url:"https://github.com/ghostfolio/ghostfolio/pull/5773"
    },
        {
        repoName:"litmus-docs", 
        title:"docs: update 'Litmus Uses' to 'Litmus Use Cases'",
        url:"https://github.com/litmuschaos/litmus-docs/pull/403"
    },
        {
        repoName:"litmus-docs", 
        title:"fix: update FAQ and Troubleshooting headings",
        url:"https://github.com/litmuschaos/litmus/pull/5276"
    },


];

const opensourcePRs = [

];

const contribution = [
    {
        title: "Hacktoberfest 2025",
        description: "Contributed 6+ pull requests to open-source repositories, improving collaboration and Git workflow skills",
        linkdesc: "View PRs",
        isView: true,
        toggleText: {
            open: "View Hacktoberfest PRs",
            close: "Hide Hacktoberfest PRs",
        },
        prs: hacktoberfestPRs
    },
    // {
    //     title: "Open Source Contributions",
    //     description: "Contributed to various open-source projects, enhancing collaboration and software development skills",
    //     linkdesc: "View PRs",
    //     isView: true,
    //     toggleText: {
    //         open: "View Open Source PRs",
    //         close: "Hide Open Source PRs",
    //     },
    //     prs: opensourcePRs
    // }
];
export { contribution, hacktoberfestPRs, opensourcePRs };