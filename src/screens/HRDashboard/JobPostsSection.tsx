import React, { useState } from "react";
import { Edit, Trash2, PlusCircle } from "lucide-react";

import JobPostModal from "../../modals/JobPostModal";

interface JobPostsSectionProps {
  jobs: any[];
  newJob: string;
  setNewJob: (val: string) => void;
  handleAddJob: () => void;
  handleDeleteJob: (id: number) => void;
}

const JobPostsSection: React.FC<JobPostsSectionProps> = ({
  jobs,
  setNewJob,
  handleAddJob,
  handleDeleteJob,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // When modal submits, set newJob and call handleAddJob
  const handleModalSubmit = (title: string) => {
    setNewJob(title);
    handleAddJob();
  };

  return (
    <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Job Posts</h3>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-1 text-sm px-4 py-1.5 rounded border border-gray-400 bg-[#dce7f9] text-[#1b3f8b] shadow-sm hover:bg-[#c8daf7] active:shadow-inner transition"
          title="Add New Job"
        >
          <PlusCircle className="w-4 h-4" />
          Add
        </button>
        <JobPostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleModalSubmit}
        />
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
  );
};

export default JobPostsSection;
