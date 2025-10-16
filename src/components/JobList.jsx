import React from 'react';
import { jobs } from '../mock/jobs';

// JobList component displays available job postings
const JobList = () => (
  <div>
    <h2>Job Openings</h2>
    <ul>
      {jobs.map(job => (
        <li key={job.id} style={{marginBottom: '1em'}}>
          <strong>{job.title}</strong> ({job.department})<br />
          <em>Requirements:</em> {job.requirements}<br />
          <span>{job.description}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default JobList;
