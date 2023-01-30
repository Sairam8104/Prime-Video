// Write your code here
import ReactSlick from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionItem = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyItem = moviesList.filter(each => each.categoryId === 'COMEDY')
  console.log(actionItem)

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movie</h1>
        <ReactSlick eachItem={actionItem} />
        <h1 className="movies-heading">Comedy Movie</h1>
        <ReactSlick eachItem={comedyItem} />
      </div>
    </div>
  )
}

export default PrimeVideo
