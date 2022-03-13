import { padding } from '@mui/system'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div>
      <div style={{
        height: '130px'
      }} className='bg-light'>
      </div>
      <div className="text-center my-5">
        <h1 className="mb-5">
          404 <br />
          Page Not Found
        </h1>
        <p>Sorry !, the page you were looking for does not exist.</p>
        <p>Go To Homepage by Button Below</p>
        <Link to="/" className="btn btn-primary">Home Page</Link>
      </div>
    </div>
  )
}

export default NoMatch