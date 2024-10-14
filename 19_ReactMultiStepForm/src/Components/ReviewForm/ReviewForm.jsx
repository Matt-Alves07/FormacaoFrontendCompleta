import './ReviewForm.css';

import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs";

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            id="unsatisfied"
            required
            value="unsatisfied"
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="review"
            id="neutral"
            required
            value="neutral"
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Já adquiri melhores</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="review"
            id="satisfied"
            required
            value="satisfied"
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            name="review"
            id="loved"
            required
            value="loved"
            checked={data.review === "loved"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Amei</p>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="comment"></label>
        <textarea
          name="comment"
          id="comment"
          placeholder='Conte-nos a sua experiência...'
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm