import React from "react";
import {
  Card,
  Row,
  Col,
  Tag,
  Statistic,
  Typography,
  Divider,
  Progress,
} from "antd";
import "./styles/Github.css"; // Assuming the CSS file is in the same folder

import {
  StarOutlined,
  ForkOutlined,
  EyeOutlined,
  ExclamationCircleOutlined,
  FileProtectOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const RepoReportView = ({ report }) => {
  const {
    repo_name,
    evaluation_date,
    score_percentage,
    rating,
    reason,
    breakdown,
    commit_insights,
    repository_details,
  } = report;
  const { Collaborators, Commits, Forks, Issues, Stars, Watchers } = breakdown;

  console.log(report);

  const getStatusColor = (score) => {
    if (score > 75) return "#2aff39";
    if (score > 50) return "#ffc100";
    return "#f50100";
  };

  const getProgressPercentage = (value, max) => (value / max) * 100;
  const getScoreLabel = (score) => {
    if (score > 75) return "Good";
    if (score > 50) return "Average";
    return "Needs Improvement";
  };

  return (
    <div className="repo-report-container">
      <p className="repo-report-title">{`✅ Repo Evaluated: ${repo_name}`}</p>
      <Row gutter={[16, 16]} className="repo-report-row">
        <Col xs={24} lg={12}>
          <div className="repo-report-col">
            <Statistic
              title="Evaluation Date"
              value={evaluation_date}
              prefix="📅"
              className="repo-report-statistic"
            />
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="repo-report-col">
            <span className="repo-report-repo-health">Repository Health</span>
            <span className="repo-report-progress-span">
              <Progress
                type="circle"
                percent={score_percentage?.toFixed(0)}
                strokeColor={getStatusColor(score_percentage)}
                format={(percent) => `${percent}%`}
                size={30}
                className="repo-report-progress"
              />
              {score_percentage?.toFixed(0)}%
            </span>
          </div>
        </Col>
      </Row>

      <Divider className="repo-report-divider" />

      <Row gutter={[16, 16]} className="repo-report-row">
        <Col xs={24}>
          <div className="repo-report-col">
            <Statistic
              title="Rating"
              value={rating}
              className="repo-report-statistic"
            />
          </div>
        </Col>
        <Col xs={24}>
          <div className="repo-report-col">
            <Statistic
              title="Reason"
              value={reason}
              className="repo-report-statistic"
            />
          </div>
        </Col>
      </Row>

      <p className="repo-report-heading">Breakdown</p>
      <Row gutter={[16, 16]} className="repo-report-row">
        <Col xs={12} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">Collaborators</p>{" "}
            <div className="repo-report-breakdown">
              <Progress
                type="circle"
                percent={getProgressPercentage(Collaborators, 20).toFixed(0)}
                size={30}
                strokeColor={getStatusColor(
                  getProgressPercentage(Collaborators, 20)
                )}
                showInfo={false}
              />
              <p>{Collaborators.toFixed(0)}/20</p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">Commits</p>{" "}
            <div className="repo-report-breakdown">
              <Progress
                type="circle"
                percent={getProgressPercentage(Commits, 10).toFixed(0)}
                size={30}
                strokeColor={getStatusColor(getProgressPercentage(Commits, 10))}
                showInfo={false}
              />
              <p>{Commits.toFixed(0)}/10</p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">Forks</p>{" "}
            <div className="repo-report-breakdown">
              <Progress
                type="circle"
                percent={getProgressPercentage(Forks, 15).toFixed(0)}
                size={30}
                strokeColor={getStatusColor(getProgressPercentage(Forks, 15))}
                showInfo={false}
              />
              <p>{Forks.toFixed(0)}/15</p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">Issues</p>{" "}
            <div className="repo-report-breakdown">
              <Progress
                type="circle"
                percent={getProgressPercentage(Issues, 15).toFixed(0)}
                size={30}
                strokeColor={getStatusColor(getProgressPercentage(Issues, 15))}
                showInfo={false}
              />
              <p>{Issues.toFixed(0)}/15</p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">Stars</p>{" "}
            <div className="repo-report-breakdown">
              <Progress
                type="circle"
                percent={getProgressPercentage(Stars, 30).toFixed(0)}
                size={30}
                strokeColor={getStatusColor(getProgressPercentage(Stars, 30))}
                showInfo={false}
              />
              <p>{Stars.toFixed(0)}/30</p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">Watchers</p>
            <div className="repo-report-breakdown">
              <Progress
                type="circle"
                percent={getProgressPercentage(Watchers, 10).toFixed(0)}
                size={30}
                strokeColor={getStatusColor(
                  getProgressPercentage(Watchers, 10)
                )}
                showInfo={false}
              />
              <span>{Watchers.toFixed(0)}/10</span>
            </div>
          </div>
        </Col>
      </Row>

      <p className="repo-report-heading">Commit Insights</p>
      <Row gutter={[16, 16]} className="repo-report-row">
        <Col xs={8} lg={6} xl={4}>
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">
              {"Total Commits"}
            </p>
            <p>{commit_insights.total_commits.toFixed(0)}</p>
          </div>
        </Col>
      </Row>

      <p className="repo-report-heading">Repository Details</p>
      <Row gutter={[16, 16]} className="repo-report-row">
        <Col xs={8} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">
              <StarOutlined /> Stars
            </p>
            <p>{repository_details.stars}</p>
          </div>
        </Col>
        <Col xs={8} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">
              <ForkOutlined /> Forks
            </p>
            <p>{repository_details.forks}</p>
          </div>
        </Col>
        <Col xs={8} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">
              <EyeOutlined /> Watchers
            </p>
            <p>{repository_details.watchers}</p>
          </div>
        </Col>
        <Col xs={8} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">
              <ExclamationCircleOutlined /> Open Issues
            </p>
            <p>{repository_details.open_issues}</p>
          </div>
        </Col>
        <Col xs={8} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">
              <FileProtectOutlined /> Archived
            </p>
            <p>{repository_details.archived ? "True" : "False"}</p>
          </div>
        </Col>
        <Col xs={8} lg={6} >
          <div className="repo-report-col">
            <p className="repo-report-breakdown-card-title">
              <TeamOutlined /> Collaborators
            </p>
            <p>{repository_details.collaborators}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RepoReportView;
