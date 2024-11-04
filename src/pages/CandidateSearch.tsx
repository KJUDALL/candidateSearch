// |-- Fetches and displays candidates from GitHub
import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../Candidate.interface';
import { json } from 'react-router-dom';

const CandidateSearch = () => {
  const [candidates, setCandidate] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidate(data);
    };
    fetchCandidates();
  }, []);

  const saveCandidate = (candidate: Candidate) => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
  };
  
  return (
    <div>
      <h1>Candidate Search  </h1>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <img src={candidate.avatar_url} alt={candidate.login} width="50" />
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">{candidate.login}
            </a>
            <p>Name: {candidate.name}</p>
            <p>Username: {candidate.login}</p>
            <p>Location: {candidate.location}</p>
            <p>Email: {candidate.email}</p>
            <p>Company: {candidate.company}</p>
            <button onClick={() => saveCandidate(candidate)}>Save</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;
