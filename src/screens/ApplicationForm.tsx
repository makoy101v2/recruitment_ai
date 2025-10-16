import React from 'react';
import { useParams } from 'react-router-dom';
import { jobs } from '../mock/jobs';

const ApplicationForm: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobs.find((j) => String(j.id) === jobId);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mt-10 flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Civil Service Job Application Form
      </h2>

      {job && (
        <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-lg font-semibold text-blue-800">{job.title}</div>
          <div className="text-sm text-gray-700">{job.department}</div>
          <div className="text-xs text-gray-600 mt-1">{job.summary}</div>
        </div>
      )}

      <form className="flex flex-col gap-5">
        {/* Personal Information */}
        <section>
          <h3 className="text-md font-semibold text-gray-700 border-b pb-1 mb-3">
            Personal Information
          </h3>
          <input
            type="text"
            placeholder="Full Name (Last, First, Middle)"
            required
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            <input
              type="date"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <select
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sex</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            <input
              type="text"
              placeholder="Civil Status"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Address / Region"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* Qualifications */}
        <section>
          <h3 className="text-md font-semibold text-gray-700 border-b pb-1 mb-3">
            Qualifications
          </h3>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Eligibility (e.g., CSE Professional)"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Highest Educational Attainment"
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Relevant Experience / Trainings"
              rows={3}
              className="border border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* Documents */}
        <section>
          <h3 className="text-md font-semibold text-gray-700 border-b pb-1 mb-3">
            Documents
          </h3>
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Upload Resume (PDF or DOCX)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="border border-gray-300 rounded px-4 py-2 mt-1 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Digital Signature (JPG or PNG)
              </label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                className="border border-gray-300 rounded px-4 py-2 mt-1 w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                Please upload your e-signature for digital submission. This will
                serve as your electronic attestation in compliance with CSC
                e-signature requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Consent Section */}
        <section className="border border-gray-200 bg-gray-50 rounded-lg p-4 mt-2">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              required
              className="mt-1 accent-blue-600"
            />
            <span className="text-sm text-gray-700">
              I hereby certify that all information provided is true and correct
              to the best of my knowledge. I consent to the processing of my
              personal data in accordance with the Data Privacy Act of 2012 and
              Civil Service Commission guidelines on electronic submission.
            </span>
          </label>
        </section>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-700 transition mt-2"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
