import './App.css';
import Confetti from 'react-confetti';
import React, {useState} from 'react'

function App() {


  const [flipPresent1, setFlipPresent1] = useState(false)
  const [flipPresent2, setFlipPresent2] = useState(false)
  const [flipPresent3, setFlipPresent3] = useState(false)
  const [flipPresent4, setFlipPresent4] = useState(false)
  const [flipPresent5, setFlipPresent5] = useState(false)

  const [showConfetti_1, setShowConfetti_1] = useState(false)
  const [showConfetti_2, setShowConfetti_2] = useState(false)
  const [showConfetti_3, setShowConfetti_3] = useState(false)
  const [showConfetti_4, setShowConfetti_4] = useState(false)
  const [showConfetti_5, setShowConfetti_5] = useState(false)

  const handleShow_1 = toggle => {
    setShowConfetti_1(toggle)
  }

  const handleShow_2 = toggle => {
    setShowConfetti_2(toggle)
  }

  const handleShow_3 = toggle => {
    setShowConfetti_3(toggle)
  }
  const handleShow_4 = toggle => {
    setShowConfetti_4(toggle)
  }
  const handleShow_5 = toggle => {
    setShowConfetti_5(toggle)
  }



  const present1 = () => {
    setFlipPresent1(!flipPresent1)
  }

  const present2 = () => {
    setFlipPresent2(!flipPresent2)
  }

  const present3 = () => {
    setFlipPresent3(!flipPresent3)
  }

  const present4 = () => {
    setFlipPresent4(!flipPresent4)
  }

  const present5 = () => {
    setFlipPresent5(!flipPresent5)
  }



  return (
    <div className='page'>
      <div className='title'>
        
      </div>

      <div className='letter'>
        <p>Antes de comenzar con los regalos, quería agradecer el tiempo pasado juntos y lo maravillosa que eres. Me haces sentir muy afortunado de estar a tu lado. Eres una de las personas que mas quiero en este planeta y es por eso que quiero demostratelo con algo que nunca nadie te haya hecho (o eso espero). Sé que eres fan de las cosas hechas a mano y esto me ha parecido un detallito personal que me gustaría que guardaras en tu baúl de los recuerdos. Quiero que sepas que me sigo enamorando de ti dia tras dia, desde el momento en el que te conocí ❤</p>
        <br/>
        <p>Te quiero,</p>
        <br/>
        <p>Alejandro</p>
      </div>
      <div className='card__list'>

        <div className='card card__1' onClick={present1} onMouseEnter={() => handleShow_1(true)} onMouseLeave={() => handleShow_1(false)}>
          <Confetti
            recycle={showConfetti_1}
            numberOfPieces={100}
            width={300}
            height={400}
          />
          <div className={`card__inner__1 ${flipPresent1 && 'is-flipped'} `}>
            <div className='card__face card__face--front'>
              <h2>PRESENTE Nº1</h2> 
            </div>
            <div className='card__face card__face--back'>
              <div className='card__content'>
                <div className='card__header'>
                  <img className='pp'></img>
                </div>
                <div className='card__body'>
                  <h3>Un caballo... 'especial'</h3>
                  <p>Para que lo puedas peinar y cuidar sin tener que gastarte un duro</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='card' onClick={present2} onMouseEnter={() => handleShow_2(true)} onMouseLeave={() => handleShow_2(false)}>
          <Confetti
              recycle={showConfetti_2}
              numberOfPieces={100}
              width={300}
              height={400}
            />
          <div className={`card__inner__2 ${flipPresent2 && 'is-flipped'} `}>
            <div className='card__face card__face--front'>
              <h2>PRESENTE Nº2</h2> 
            </div>
            <div className='card__face card__face--back'>
              <div className='card__content'>
                <div className='card__header'>
                  <img className='pp'></img>
                </div>
                <div className='card__body'>
                  <h3>Cómic Spidergwen</h3>
                  <p>Me parecía impensable que no tuvieras ningún cómic de tu superheroína favorita</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='card' onClick={present3} onMouseEnter={() => handleShow_3(true)} onMouseLeave={() => handleShow_3(false)}>
          <Confetti
                recycle={showConfetti_3}
                numberOfPieces={100}
                width={300}
                height={400}
              />
          <div className={`card__inner__2 ${flipPresent3 && 'is-flipped'} `}>
            <div className='card__face card__face--front'>
              <h2>PRESENTE Nº3</h2> 
            </div>
            <div className='card__face card__face--back'>
              <div className='card__content'>
                <div className='card__header'>
                  <img className='pp'></img>
                </div>
                <div className='card__body'>
                  <h3>Hogwarts</h3>
                  <p>El castillo de tus sueños! Cualquier niño/a de nuestra generación sigue esperando en la puerta la lechuza con la carta de admisión a Hogwarts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className='card' onClick={present4} onMouseEnter={() => handleShow_4(true)} onMouseLeave={() => handleShow_4(false)}>
          <Confetti
                recycle={showConfetti_4}
                numberOfPieces={100}
                width={300}
                height={400}
              />
          <div className={`card__inner__2 ${flipPresent4 && 'is-flipped'} `}>
            <div className='card__face card__face--front'>
              <h2>PRESENTE Nº4</h2> 
            </div>
            <div className='card__face card__face--back'>
              <div className='card__content'>
                <div className='card__header'>
                  <img className='pp'></img>
                </div>
                <div className='card__body'>
                  <h3>Nuestra foto</h3>
                  <p>Por fin podremos estrenar el marco de Iron Man</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className='card' onClick={present5} onMouseEnter={() => handleShow_5(true)} onMouseLeave={() => handleShow_5(false)}>
          <Confetti
                recycle={showConfetti_5}
                numberOfPieces={100}
                width={300}
                height={400}
              />
          <div className={`card__inner__2 ${flipPresent5 && 'is-flipped'} `}>
            <div className='card__face card__face--front'>
              <h2>PRESENTE Nº5</h2> 
            </div>
            <div className='card__face card__face--back'>
              <div className='card__content'>
                <div className='card__header'>
                  <img className='pp'></img>
                </div>
                <div className='card__body'>
                  <h3>Cena en KAIKAYA</h3>
                  <p>Cocina fusión Nikkei Nipo-brasileña</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;