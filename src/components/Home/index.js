import './index.css'
import BlogList from '../BlogsList'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
