// Write your code here

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const ReactSlick = props => {
  const {eachItem} = props
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider {...settings}>
        {eachItem.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </>
  )
}

export default ReactSlick
