import classnames from 'classnames'
import React from 'react'
import { IReview } from '../domain/models'

const Testimonial = ({ title, reviews }: IProps) => {
  const [currentReview, setReview] = React.useState<IReview | undefined>()

  React.useEffect(() => {
    setReview(reviews[0])
  }, [reviews])

  const currentIndex = currentReview ? reviews.indexOf(currentReview) : 0

  return (
    <div className="testimonial container d-flex flex-column">
      <div className="bellotero-title mb-5">{title}</div>
      {currentReview && <ReviewCard {...currentReview} />}
      {currentReview && (
        <ReviewNav
          reviews={reviews}
          currentIndex={currentIndex}
          onLeft={() =>
            currentIndex > 0 && setReview(reviews[currentIndex - 1])
          }
          onRight={() =>
            currentIndex < reviews.length - 1 &&
            setReview(reviews[currentIndex + 1])
          }
        />
      )}
    </div>
  )
}

const ReviewCard = ({ name, position, comment }: IReview) => {
  return (
    <div className="testimonial-card d-flex row bg-white m-0">
      <div className="testimonial-card-person col-sm-12 col-md-3">
        <div>{name}</div>
        <div className="testimonial-card-person-position">{position}</div>
      </div>
      <div className="testimonial-card-message col-sm-12 col-md-8 offset-md-1">
        "{comment}"
      </div>
    </div>
  )
}

const ReviewNav = ({ currentIndex, reviews, onRight, onLeft }) => {
  return (
    <div className="testimonial-nav d-flex justify-content-end text-center">
      <div className="testimonial-nav-page">
        {currentIndex + 1}/{reviews.length}
      </div>
      <div className="testimonial-nav-directions ml-1">
        <button
          onClick={onLeft}
          className={classnames('btn', {
            disabled: currentIndex === 0,
          })}
        >
          &#8592;
        </button>
        <button
          onClick={onRight}
          className={classnames('btn', {
            disabled: currentIndex + 1 === reviews.length,
          })}
        >
          &#8594;
        </button>
      </div>
    </div>
  )
}

export interface IProps {
  title: string
  reviews: IReview[]
}

export default Testimonial
