import './Thanks.css';

import { ReactElement } from 'react';
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs';

type Props = {
  data: {
    name: string,
    email: string,
    review: string,
    comment: string,
  },
  updateFieldHandler: (key: string, value: string) => void,
};

type EmojiObject = {
  unsatisfied: ReactElement,
  neutral: ReactElement,
  satisfied: ReactElement,
  loved: ReactElement,
}

const emojiData: EmojiObject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  loved: <BsFillEmojiHeartEyesFill />,
};

const Thanks = (props: Props) => {
  return (
    <div className='thanks-container'>
      <h2>Just a little bit until we receive your feedback</h2>

      <p>Your opinion means so much for us, that we'll use it to improve our services, to perform even better in the future</p>

      <p>Please, review your feedback bellow, and, if everything seams correct for you, click on "Send" {props.data.name}</p>

      <p className="review-data">
        <span>Your review over our services:</span>
        { emojiData[props.data.review as keyof typeof emojiData] }
      </p>

      <p className="review-data">
        <span>Your comment over our services:</span>
        { props.data.comment }
      </p>
    </div>
  )
}

export default Thanks;