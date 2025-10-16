import React from "react";
import { useNavigate } from "react-router-dom";
import { jobs } from "../mock/jobs";
import {
  Briefcase,
  Building2,
  Search,
  FileText,
  ListChecks,
} from "lucide-react";

const JobListings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl mx-auto bg-gray-50 rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 flex flex-col gap-6 mt-10 transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-300 pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-600" />
          Job Openings
        </h2>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Job Title and Department */}
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4 text-blue-600" />
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                <Building2 className="w-4 h-4 text-gray-400" />
                {job.department}
              </p>

              {/* Description */}
              <div className="flex items-start gap-2 mb-3">
                <FileText className="w-4 h-4 text-blue-600 mt-0.5" />
                <p className="text-gray-700 text-sm">{job.description}</p>
              </div>

              {/* Requirements */}
              <div className="flex items-start gap-2">
                <ListChecks className="w-4 h-4 text-blue-600 mt-0.5" />
                <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                  {job.requirements.map((req) => (
                    <li key={req.id}>{req.text}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              className="mt-4 self-end bg-blue-600 text-white rounded-full px-5 py-1.5 font-medium text-sm shadow hover:bg-blue-700 active:scale-95 transition"
              onClick={() => navigate(`/apply/${job.id}`)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
