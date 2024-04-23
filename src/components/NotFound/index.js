import './index.css'

const NotFound = () => {
  return (
    <div className="notfound-div1">
      <div className="notfound-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="not found"
          className="notfound-image"
        />
        <h1 className="notfound-h1">Page Not Found</h1>
        <p className="notfound-para">
          We are sorry, the page you requested could not be found
        </p>
      </div>
    </div>
  )
}

export default NotFound
