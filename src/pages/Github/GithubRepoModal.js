import { Modal, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  API_GET_REPO_LIST,
  API_GET_REPO_REPORT,
  API_SET_AND_EVALUATE_REPO,
} from "../../apis/GithubApis";
import RepoSelector from "./RepoSelector";
import RepoReportView from "./RepoReportView";
import GithubConnectNotice from "./GithubConnectNotice";
import { GITHUB_REPO_EVALUATE_MESSAGES } from "../../components/Loader/SpinnerMessages";
import CustomSpinner from "../../components/Loader/CustomSpinner";

const { Text } = Typography;
const GithubRepoModal = ({ visible, onClose }) => {
  const { token, user_attributes } = useSelector((state) => state.authToken);
  const [repoList, setRepoList] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [repoError, setRepoError] = useState(null);
  const [repoReport, setRepoReport] = useState(null);
  const [LoadingMessage, setLoadingMessage] = useState(null);


  const getRepoList = async () => {
    setLoading(true);
    try {
      const response = await API_GET_REPO_LIST(token);
      if (response?.repositories?.length) {
        setRepoList(response.repositories);
        setRepoError(null);
      } else {
        setRepoError("No repositories found.");
      }
    } catch {
      setRepoError("Error fetching repository list.");
    } finally {
      setLoading(false);
    }
  };

  const handleRepoSelect = async () => {
    if (!selectedRepo) return;
    setLoadingMessage(GITHUB_REPO_EVALUATE_MESSAGES)
    const response = await API_SET_AND_EVALUATE_REPO(token, selectedRepo, setLoading);
    if (response) getRepoReport();
  };

  const getRepoReport = async () => {
    // setRepoReport(DUMMY_REPO_REPORT);
    setLoading(true);
    const response = await API_GET_REPO_REPORT(token);
    setLoading(false);
    console.log(response)
    if (response) {
      setRepoReport(response?.report_data);
    } else {
      await getRepoList();
    }
  };

  useEffect(() => {
    if (user_attributes?.github) getRepoReport();
  }, [user_attributes?.github]);

  return (
    <Modal open={visible} onCancel={onClose} footer={null} centered title="Bonus Points Opportunity" width={repoReport ? 800 : 500} >
      {!user_attributes?.github ? (
        <GithubConnectNotice />
      ) :loading ? (
        <CustomSpinner messages={LoadingMessage} />
        ) : repoReport ? (

        <RepoReportView report={repoReport} />
      ) : (
        <RepoSelector goalSkill={user_attributes?.goal_skill} repoList={repoList} repoError={repoError} selectedRepo={selectedRepo} onRepoChange={setSelectedRepo} onSubmit={handleRepoSelect} />
      )}
    </Modal>
  );
};

export default GithubRepoModal;
