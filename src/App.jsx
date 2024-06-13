
import { useState } from 'react'
import './App.css'
import Button from './assets/Button'
import music from  './assets/error.mp3'

const operators = ["%","/","*","-","+"]
function App() {
  const [strToDisplay, setStrToDisplay] = useState('')
  const [lastOperator, setLastOperator] = useState('')
  const [isMousedown, setIsMousedown] = useState()
  const [isPrank, setIsPrank] = useState(false)
  
  const buttonAction = (value) => {
    if (value === 'AC') {
      setStrToDisplay('')
      return
    }
    if (value === 'C') {
      setStrToDisplay(strToDisplay.slice(0, -1))
      return
    }
    if (value === '=' || value === 'Enter') {
      setLastOperator('')
      const lastChar = strToDisplay[strToDisplay.length - 1]
      if (operators.includes(lastChar)) {
        setStrToDisplay(strToDisplay.slice(0,-1) )
        return
      }
      return displayTotal()
    }

    if (operators.includes(value)) {
      setLastOperator(value)
      const lastChar = strToDisplay[strToDisplay.length - 1]
      if (operators.includes(lastChar)) {
        setStrToDisplay(strToDisplay.slice(0, -1)+value)
        return
      }
    }

    // handle the dot click 19:44
    if (value == '.') {
      const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator)
      const lastNumberSet = strToDisplay.slice(lastOperatorIndex)
      if (lastNumberSet.includes('.')) {
        return
      }
      if (!lastOperator && strToDisplay.includes('.')) {
        return
      }
    }

    setStrToDisplay(strToDisplay + value)
  }

  // random function
  const randomValue = () => {
    
    const num = Math.round(Math.random() * 10)
    return num < 4 ? num : 0
  }

  const displayTotal = () => {
    const extraValue = randomValue();
    setIsPrank(false)
    if(extraValue){
       const sound = new Audio(music)
       sound.play()
       setIsPrank(true)
    }
      const total = eval(strToDisplay)+extraValue
      setStrToDisplay(total.toString())
     
    
  }
  
  const handleClick = (value) => {
    setIsMousedown()
    buttonAction(value)
  }
  const handleMousedown = (value)=>{
   setIsMousedown(value)

   console.log(isMousedown)

  }
  const btns = [
    {
      cls: 'btn-ac',
      label: 'AC',
    },
    {
      cls: 'btn-c',
      label: 'C',
    },
    {
      cls: 'btn-per',
      label: '%',
    },
    {
      cls: 'btn-divide',
      label: '/',
    },
    {
      cls: 'btn-7',
      label: '7',
    },
    {
      cls: 'btn-8',
      label: '8',
    },
    {
      cls: 'btn-9',
      label: '9',
    },
    {
      cls: 'btn-x',
      label: '*',
    },
    {
      cls: 'btn-4',
      label: '4',
    },
    {
      cls: 'btn-5',
      label: '5',
    },
    {
      cls: 'btn-6',
      label: '6',
    },
    {
      cls: 'btn-minus',
      label: '-',
    },
    {
      cls: 'btn-1',
      label: '1',
    },
    {
      cls: 'btn-2',
      label: '2',
    },
    {
      cls: 'btn-3',
      label: '3',
    },
    {
      cls: 'btn-plus',
      label: '+',
    },
    {
      cls: 'btn-0',
      label: '0',
    },
    {
      cls: 'btn-dot',
      label: '.',
    },
    {
      cls: 'btn-equal',
      label: '=',
    },
  ]

  return (
    <div>
      <div className="container flex-center">
        <div className="calculator">
          <div className={isPrank?"display prank":"display"}>{strToDisplay || '0.00'}</div>
          {btns.map((btn, index) => {
            return <Button key={index} {...btn} handleClick={handleClick} handleMousedown={handleMousedown} isMousedown={isMousedown} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
