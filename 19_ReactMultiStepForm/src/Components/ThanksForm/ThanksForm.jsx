import './ThanksForm.css';

import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  loved: <BsFillEmojiHeartEyesFill />,
}

const ThanksForm = ({ data }) => {
  return (
    <div className='thanks-container'>
      <h2>Só mais um pouquinho</h2>

      <p>A sua opinião é tão importante, que enviaremos um cupom de desconto instantes após você terminar de nos avaliar</p>

      <p>Para finalizar sua avaliação, clique em "Enviar", logo abaixo</p>

      <h3>Aqui está o resumo da sua avaliação {data.name}</h3>

      <p className="review-data">
        <span>Satisfação com a compra</span>
        {emojiData[data.review]}
      </p>

      <p className="review-data">
        <span>Comentários sobre a compra</span>
        {data.comment}
      </p>      
    </div>
  )
}

export default ThanksForm