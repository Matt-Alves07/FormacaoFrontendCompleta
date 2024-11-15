import './Steps.css';

import { FiSend } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'

type Props = { currentStep: number }

const Steps = (props: Props) => {
  return (
    <div className='steps'>
        <div className="step active">
            <AiOutlineUser />
            <p>Identification</p>
        </div>

        <div className={`step ${props.currentStep >= 1 ? "active" : ""}`}>
            <AiOutlineStar />
            <p>Evaluate</p>
        </div>

        <div className={`step ${props.currentStep >= 2 ? "active" : ""}`}>
            <FiSend />
            <p>Send</p>
        </div>
    </div>
  )
}

export default Steps;