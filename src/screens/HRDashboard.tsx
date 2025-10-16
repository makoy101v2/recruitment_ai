import React, { useState } from 'react';
import { jobs as mockJobs } from '../mock/jobs';
import { applicants } from '../mock/applicants';
import { aiScores } from '../mock/aiScores';
import { PlusCircle, Edit, Trash2, CheckCircle, XCircle, Briefcase, Users } from 'lucide-react';

const TABS = [
  { key: 'jobs', label: 'Job Posts', icon: <Briefcase className="w-4 h-4" /> },
  { key: 'applicants', label: 'Applicants', icon: <Users className="w-4 h-4" /> },
];

const HRDashboard: React.FC = () => {
  const [tab, setTab] = useState('jobs');
  const [jobs, setJobs] = useState(mockJobs);
  const [newJob, setNewJob] = useState('');

  const handleAddJob = () => {
    if (!newJob.trim()) return;
    const newJobObj = {
      id: Date.now(),
      title: newJob.trim(),
    };
    setJobs([...jobs, newJobObj]);
    setNewJob('');
  };

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id));
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
                  ? 'bg-blue-600 text-white border-blue-700 shadow-inner'
                  : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
              }`}
            onClick={() => setTab(t.key)}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </nav>

      {/* Job Posts Section */}
      {tab === 'jobs' && (
        <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Job Posts</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter job title..."
                value={newJob}
                onChange={(e) => setNewJob(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <button
                onClick={handleAddJob}
                className="flex items-center gap-1 text-sm px-4 py-1.5 rounded border border-gray-400 bg-[#dce7f9] text-[#1b3f8b] shadow-sm hover:bg-[#c8daf7] active:shadow-inner transition"
                title="Add New Job"
              >
                <PlusCircle className="w-4 h-4" />
                Add
              </button>
            </div>
          </div>

          {jobs.length > 0 ? (
            <ul className="divide-y divide-gray-100">
              {jobs.map((job: any) => (
                <li
                  key={job.id}
                  className="flex justify-between items-center py-2 hover:bg-gray-50 px-2 rounded-md transition-colors"
                >
                  <span className="font-medium text-gray-700">{job.title}</span>
                  <div className="flex gap-2">
                    <button
                      className="p-2 rounded border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 active:shadow-inner transition"
                      title="Edit Job"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteJob(job.id)}
                      className="p-2 rounded border border-gray-300 bg-[#fce8e8] text-[#8b1b1b] hover:bg-[#f8dcdc] active:shadow-inner transition"
                      title="Delete Job"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm italic">No job posts available.</p>
          )}
        </section>
      )}

      {/* Applicants Section */}
      {tab === 'applicants' && (
        <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Applicants (Anonymized)
          </h3>
          <div className="overflow-x-auto w-full">
            <table className="min-w-[700px] w-full text-sm border border-gray-200 rounded-lg">
              <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide text-xs">
                <tr>
                  <th className="px-4 py-2 text-left border-b">Profile</th>
                  <th className="px-4 py-2 text-left border-b">AI Score</th>
                  <th className="px-4 py-2 text-center border-b">Shortlist</th>
                  <th className="px-4 py-2 text-center border-b">Reject</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((app: any, idx: number) => {
                  const scoreObj = aiScores.find(
                    (s: any) => s.applicantId === app.id && s.jobId === app.appliedJobId
                  );
                  return (
                    <tr
                      key={app.id}
                      className="even:bg-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-4 py-2 border-b">Applicant {idx + 1}</td>
                      <td className="px-4 py-2 border-b">
                        {scoreObj ? `${scoreObj.score}%` : 'N/A'}
                        <br />
                        <span className="text-xs text-gray-500">
                          {scoreObj?.explanation}
                        </span>
                      </td>
                      <td className="px-4 py-2 border-b text-center">
                        <button
                          className="p-2 rounded border border-gray-300 bg-[#e7f6e7] text-[#1e4d1e] hover:bg-[#d8f0d8] active:shadow-inner transition"
                          title="Shortlist Applicant"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      </td>
                      <td className="px-4 py-2 border-b text-center">
                        <button
                          className="p-2 rounded border border-gray-300 bg-[#fce8e8] text-[#8b1b1b] hover:bg-[#f8dcdc] active:shadow-inner transition"
                          title="Reject Applicant"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};

export default HRDashboard;
