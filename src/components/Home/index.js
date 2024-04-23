import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  return (
    <div className="home-bg">
      <Header />
      <div className="home-div1">
        <div className="home-div1-1">
          <h1 className="home-h1-1">Find The Job That Fits Your Life</h1>
          <p className="home-para1-1">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <Link to="/jobs">
            <button className="home-find-jobs">Find Jobs</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
