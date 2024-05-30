import React, { Component } from "react";
import "./Issues.css";
import { Fade } from "react-reveal";
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";

class Issues extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>

        <div className="issues-body-div">
          {issuesData["data"].map((issue) => {
            return <IssueCard issue={issue} />;
          })}
        </div>
      </div>
    );
  }
}

export default Issues;
