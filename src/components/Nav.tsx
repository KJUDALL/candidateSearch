// Link to Candidate Search Room (CandidateSearch.tsx)
// Link to Saved Candidates Room (SavedCandidates.tsx)
import { Link } from "react-router-dom";

const Nav = () => {
  // DONE: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      <ul>
          <li>
          <Link to='/'>Candidate Search</Link>
        </li>
        <li>
          <Link to='/SavedCandidates'>Saved Candidates</Link>
          </li>
      </ul>
    </nav>
  )
};

export default Nav;
