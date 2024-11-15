import './ReviewForm.css';

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs';

type Props = {
  data: {
    review: string,
    comment: string,
  },
  updateFieldHandler: (key: string, value: string) => void,
}

const ReviewForm = (props: Props) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="unsatisfied"
            checked={props.data.review === "unsatisfied"}
            onChange={(e) => props.updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiFrownFill />
          Unsatisfeid
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="neutral"
            checked={props.data.review === "neutral"}
            onChange={(e) => props.updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiNeutralFill />
          Neutral
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="satisfied"
            checked={props.data.review === "satisfied"}
            onChange={(e) => props.updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiSmileFill />
          Satisfeid
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="loved"
            checked={props.data.review === "loved"}
            onChange={(e) => props.updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiHeartEyesFill />
          Loved
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="comment">Comments:</label>
        <textarea
          name="comment"
          id="comment"
          value={props.data.comment}
          onChange={(e) => props.updateFieldHandler("comment", e.target.value)}
          placeholder="Tell us how it was to work with us..."
          required
        >
        </textarea>
      </div>
    </div>
  )
}

export default ReviewForm;