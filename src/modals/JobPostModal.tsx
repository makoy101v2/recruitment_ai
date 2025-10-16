import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface JobPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (jobData: {
    title: string;
    department: string;
    summary: string;
    requirements: string[];
    qualifications: string[];
  }) => void;
}

const JobPostModal: React.FC<JobPostModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [requirements, setRequirements] = React.useState<string[]>([""]);
  const [qualifications, setQualifications] = React.useState<string[]>([""]);
  const [eligibility, setEligibility] = React.useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setDepartment("");
      setSummary("");
      setRequirements([""]);
      setQualifications([""]);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleArrayChange = (
    index: number,
    value: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) => prev.map((item, i) => (i === index ? value : item)));
  };

  const handleAddField = (
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) => [...prev, ""]);
  };

  const handleRemoveField = (
    index: number,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500">
          <h2 className="text-lg font-semibold text-white tracking-wide">
            Add New Job Post
          </h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-2xl font-bold focus:outline-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (title.trim() && department.trim() && summary.trim()) {
              onSubmit({
                title: title.trim(),
                department: department.trim(),
                summary: summary.trim(),
                requirements: requirements.filter((r) => r.trim() !== ""),
                qualifications: qualifications.filter((q) => q.trim() !== ""),
              });
              onClose();
            }
          }}
          className="flex flex-col gap-4 p-6 bg-white"
        >
          {/* Title */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              ref={inputRef}
              type="text"
              placeholder="e.g., Administrative Officer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          {/* Department */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              placeholder="e.g., Human Resources"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          {/* Summary */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Job Summary
            </label>
            <textarea
              placeholder="Brief overview of the role..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 placeholder-gray-400 min-h-[70px]"
              required
            />
          </div>

          {/* Requirements */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Key Requirements
            </label>
            {requirements.map((req, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={req}
                  onChange={(e) =>
                    handleArrayChange(index, e.target.value, setRequirements)
                  }
                  placeholder={`Requirement ${index + 1}`}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 placeholder-gray-400"
                />
                {requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveField(index, setRequirements)}
                    className="text-red-500 hover:text-red-700 font-bold"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddField(setRequirements)}
              className="mt-1 text-sm text-blue-600 hover:underline self-start"
            >
              + Add Requirement
            </button>
          </div>

          {/* Qualifications */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Qualifications
            </label>
            {qualifications.map((qual, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={qual}
                  onChange={(e) =>
                    handleArrayChange(index, e.target.value, setQualifications)
                  }
                  placeholder={`Qualification ${index + 1}`}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 placeholder-gray-400"
                />
                {qualifications.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveField(index, setQualifications)}
                    className="text-red-500 hover:text-red-700 font-bold"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddField(setQualifications)}
              className="mt-1 text-sm text-blue-600 hover:underline self-start"
            >
              + Add Qualification
            </button>
          </div>

          {/* Eligibility Requirement */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Eligibility Requirement
            </label>
            <select
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            >
              <option value="">Select Eligibility</option>
              <option value="Career Service (Professional)">
                Career Service (Professional)
              </option>
              <option value="Career Service (Subprofessional)">
                Career Service (Subprofessional)
              </option>
              <option value="RA 1080 (Licensed Professional)">
                RA 1080 (Licensed Professional)
              </option>
              <option value="PD 907 (Honor Graduate Eligibility)">
                PD 907 (Honor Graduate Eligibility)
              </option>
              <option value="Barangay Official Eligibility">
                Barangay Official Eligibility
              </option>
              <option value="None Required">None Required</option>
            </select>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default JobPostModal;
