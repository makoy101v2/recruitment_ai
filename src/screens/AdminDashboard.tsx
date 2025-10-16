import React, { useState } from 'react';
import { Edit, Trash2, UserCog, FileText, AlertTriangle,  } from 'lucide-react';

const TABS = [
  { key: 'users', label: 'Users', icon: <UserCog className="w-4 h-4" /> },
  { key: 'logs', label: 'Audit Logs', icon: <FileText className="w-4 h-4" /> },
  { key: 'flags', label: 'Flagged Actions', icon: <AlertTriangle className="w-4 h-4" /> },
];

const AdminDashboard: React.FC = () => {
  const [tab, setTab] = useState('users');

  return (
    <div className="w-full max-w-7xl mx-auto bg-gray-50 rounded-xl shadow-lg border border-gray-200 p-6 md:p-10 flex flex-col gap-8 mt-10 transition-all duration-300">
      {/* Header */}
      <header className="border-b border-gray-300 pb-4">
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
          Administrative Control Panel
        </h2>
        <p className="text-sm text-gray-600">
          Civil Service Commission — User Management & System Monitoring
        </p>
      </header>

      {/* Tabs Navigation */}
      <nav className="flex flex-wrap gap-2 border-b border-gray-300 pb-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-2 px-5 py-2 rounded-t-lg font-medium text-sm transition-all duration-200 focus:outline-none
              ${
                tab === t.key
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50'
              }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </nav>

      {/* Users Section */}
      {tab === 'users' && (
        <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">User Accounts</h3>
          <p className="text-sm text-gray-500 mb-4">
            Manage registered users and their access levels.
          </p>
          <ul className="divide-y divide-gray-100">
            {['HR Officer 1', 'Applicant 1'].map((user) => (
              <li
                key={user}
                className="flex justify-between items-center py-3 hover:bg-gray-50 px-3 rounded-md transition-colors"
              >
                <span className="font-medium text-gray-700">{user}</span>
                <div className="flex gap-2">
                   <button
                      className="p-2 rounded border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 active:shadow-inner transition"
                      title="Edit Job"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                   <button
                      className="p-2 rounded border border-gray-300 bg-[#fce8e8] text-[#8b1b1b] hover:bg-[#f8dcdc] active:shadow-inner transition"
                      title="Delete Job"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Audit Logs Section */}
      {tab === 'logs' && (
        <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">System Audit Logs</h3>
          <p className="text-sm text-gray-500 mb-4">
            Review all system activities and administrative actions for transparency.
          </p>
          <ul className="bg-gray-50 rounded-md divide-y divide-gray-200 border border-gray-200">
            <li className="px-4 py-2 text-sm text-gray-700">
              [Mock] HR Officer 1 created a job post
            </li>
            <li className="px-4 py-2 text-sm text-gray-700">
              [Mock] Applicant 1 submitted an application
            </li>
          </ul>
        </section>
      )}

      {/* Flagged Actions Section */}
      {tab === 'flags' && (
        <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Flagged Actions</h3>
          <p className="text-sm text-gray-500 mb-4">
            AI or system-detected irregularities that require administrative review.
          </p>
          <ul className="bg-gray-50 rounded-md divide-y divide-gray-200 border border-gray-200">
            <li className="px-4 py-2 text-sm text-gray-700">
              [Mock] Unusual shortlisting pattern detected
            </li>
          </ul>
        </section>
      )}
    </div>
  );
};

export default AdminDashboard;
