import React, { useState } from "react";
import { jobs as mockJobs } from "../mock/jobs";
import { applicants } from "../mock/applicants";
import { aiScores } from "../mock/aiScores";
import { Briefcase, Users } from "lucide-react";
import JobPostsSection from "./HRDashboard/JobPostsSection";
import ApplicantsSection from "./HRDashboard/ApplicantsSection";

const TABS = [
  { key: "jobs", label: "Job Posts", icon: <Briefcase className="w-4 h-4" /> },
  {
    key: "applicants",
    label: "Applicants",
    icon: <Users className="w-4 h-4" />,
  },
];

const HRDashboard: React.FC = () => {
  const [tab, setTab] = useState("jobs");
  const [jobs, setJobs] = useState(mockJobs);
  const [newJob, setNewJob] = useState("");

  const handleAddJob = () => {
    if (!newJob.trim()) return;
    const newJobObj = {
      id: Date.now(),
      title: newJob.trim(),
    };
    setJobs([...jobs, newJobObj]);
    setNewJob("");
  };

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter((job: any) => job.id !== id));
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-gray-50 rounded-xl shadow-lg border border-gray-200 p-6 md:p-10 flex flex-col gap-8 mt-10 transition-all duration-300">
      {/* Header */}
      <header className="border-b border-gray-300 pb-4">
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
          Human Resource Dashboard
        </h2>
        <p className="text-sm text-gray-600">
          Civil Service Commission – Recruitment and Evaluation Overview
        </p>
      </header>

      {/* Tabs */}
      <nav className="flex flex-wrap gap-2 border-b border-gray-300 pb-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`flex items-center gap-2 px-6 py-2 rounded-t-md font-medium text-sm transition-all duration-150 focus:outline-none border shadow-sm
              ${
                tab === t.key
                  ? "bg-blue-600 text-white border-blue-700 shadow-inner"
                  : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
              }`}
            onClick={() => setTab(t.key)}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </nav>

      {/* Job Posts Section */}
      {tab === "jobs" && (
        <JobPostsSection
          jobs={jobs}
          newJob={newJob}
          setNewJob={setNewJob}
          handleAddJob={handleAddJob}
          handleDeleteJob={handleDeleteJob}
        />
      )}

      {/* Applicants Section */}
      {tab === "applicants" && (
        <ApplicantsSection applicants={applicants} aiScores={aiScores} />
      )}
    </div>
  );
};

export default HRDashboard;
