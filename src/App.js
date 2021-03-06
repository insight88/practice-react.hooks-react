import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Index } from './useContext/pages/index';
import { About } from './useContext/pages/about';
import { UserContext } from './UserContext';

function AppRouter() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          {/* UserContext의 Provider로 consumer들에게 value prop을 전달 */}
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
