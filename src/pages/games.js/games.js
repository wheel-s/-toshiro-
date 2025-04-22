import React from 'react'
import Layout from '../../components/layout'
import games from './games.module.css'
import { useState, useRef,useEffect } from 'react'


const Games = () => {
  const canvasRef = useRef()
 
  const [SNAKESPEED , setSNAKESPEED] =useState(10)
 
  const [gameover, setgameover] =useState(false)
 
  const [show, setshow] =useState(false)
  const [food, setfood] =useState({x:180, y:100})
  const [snake, setsnake] =useState(
   [ {x:100, y:50},
    {x:95, y:50}])
    const [direction, setdirection] =useState()
    let [score, setscore] = useState(0)
 
    const[HighScore, setHighScore] = useState(parseInt(localStorage.getItem('highScore'))|| 0)
  
    useEffect(()=>{
      const canvas = canvasRef.current
      let ctx = canvas.getContext("2d")
     
      const drawSnake =  ()=>{
        
        snake.forEach((item) => {
          ctx.beginPath();
          ctx.rect(item.x,item.y, 14,14)
          ctx.fillStyle ='darkblue'
        
          ctx.fill()
          ctx.closePath()
        });
      }
      const moveSnake=()=>{
       
        if(direction){
          setSNAKESPEED(10)
          setsnake((prevSnake)=>{
            const newSnake = [...prevSnake]
            const snakeHead = {x: newSnake[0].x, y:newSnake[0].y}

            for(let i = newSnake.length - 1; i>0; i--){
              newSnake[i].x = newSnake[i-1].x
              newSnake[i].y = newSnake[i-1].y

            }
            switch(direction){
              case'right':
              snakeHead.x += SNAKESPEED 
              break;
              case"left":
              snakeHead.x -= SNAKESPEED 
              break;
              case 'up':
              snakeHead.y -= SNAKESPEED 
              break;
              case 'down':
              snakeHead.y += SNAKESPEED 
              break;
              default:
                break
            }

            newSnake[0]= snakeHead
            handleAppleCollision(newSnake)
            handleWallCollision(snakeHead)
            handleBodyCollision(snakeHead)
            return newSnake

          })
        }
      }
   
      const handleWallCollision =( snakeHead)=>{
          if(snakeHead.x + SNAKESPEED > canvas.width || snakeHead.x + SNAKESPEED < 0){
           
            setgameover(true)
             
          }
          if(snakeHead.y + SNAKESPEED > canvas.height || snakeHead.y + SNAKESPEED < 0){
         
            setgameover(true)
            
          }
      }
      const handleBodyCollision =( newSnake)=>{
        const snakeHead = newSnake[0]
        for (let i = 1; i < newSnake.length; i++) {
          if(snakeHead.x === newSnake[i].x && snakeHead.y === newSnake[i].y){
            setgameover(true)
            setSNAKESPEED(0)
          }
        }

        
      }
      const handleAppleCollision =( newSnake)=>{
         const snakeHead = newSnake[0]
        if(snakeHead.x === food.x && snakeHead.y === food.y){
          setscore(++score)
          
          setfood({
            x:Math.floor(Math.random() * canvas.width /  SNAKESPEED) * SNAKESPEED,
            y: Math.floor(Math.random() * canvas.width /  SNAKESPEED) * SNAKESPEED,
          })

          newSnake.push({
            x: newSnake[newSnake.length -1].x,
            y: newSnake[newSnake.length -1].y
          })
        }
      }
      const drawFood = ()=>{
        ctx.beginPath();
        ctx.rect(food.x,food.y, 14,14)
        ctx.fillStyle ='hsl(200, 20%, 28%)'
        ctx.fill()
        ctx.closePath()
      }

        const handleyKeyPress =(e)=>{
            switch(e.key){
              case 'ArrowRight':
              setdirection('right')
              break;
              case 'ArrowLeft':
              setdirection('left')
              break;
              case 'ArrowUp':
              setdirection('up')
              break;
              case 'ArrowDown':
              setdirection('down')
              break;
              default:
              break;
          
            }
        }

        window.addEventListener('keydown', handleyKeyPress)
        const  display =()=>{
         
     
         
         
        }

        const start =()=>{
            
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        drawSnake()
        drawFood() 
        moveSnake()
        }
     
      const interval = setTimeout(()=>{
        if(show){
          display()
        }else {
         
        start()
      
      }
  
  
   


      }, 100)
    return()=>{
      clearTimeout(interval)
    }
    
    })

    useEffect(()=>{
      const  display =()=>{
        const canvas = canvasRef.current
        let ctx = canvas.getContext("2d")
        ctx.font='50px MV Boli'
        ctx.fillStyle='black'
        ctx.textAlign = 'center'
        ctx.fillText('Game Over', canvas.width/2, canvas.height/2)
      setSNAKESPEED(0)
      
      }

      if(show){
        display()
      }
      
    })
    
 
    
    const handleReset =()=>{
      setfood({x:180, y:100})
      setsnake([ {x:100, y:50},
        {x:95, y:50}])
      setshow(false)
     
      console.log('yes')
      
    }
    

    const gameOver = ()=>{
      
      if(score > HighScore){
        setHighScore(score)
        localStorage.setItem('highScore', score.toString())

      }
    
     setscore(0)
      setgameover(false)
     setshow(true)
     
      
      
    }
     
    
    if(gameover){
        gameOver()
     
    }
    const moveUp = (e)=>{
      e.preventDefault()
      setdirection('up')
    }
    const moveDown = (e)=>{
      e.preventDefault()
      setdirection('down')
    }

    const moveLeft = (e)=>{
      e.preventDefault()
      setdirection('left')
    }
    const moveRight = (e)=>{
      e.preventDefault()
      setdirection('right')
    }

    

   
  


  return (
    <div className='wrapper'>
      <Layout/>
      <div className={games.wrapper}>
        <div className={games.section}>
        <div className={games.details}>
                <span>Score: {score}</span>
                <span>HighScore: {HighScore}</span>
              </div>
        
            
              
                
                <canvas className={games.board} ref={canvasRef} width={250} height={320}id='board'>
              dcldclkdckl
                </canvas>
                
              

                <div>
               {gameover && <p>you've hit the wall</p>} 
                </div>
          <div className={games.buttons}>
            <div>
              <button onClick={handleReset} className={games.reset}>Reset</button>
            </div>

           

          </div>
          <div className={games.move} >
              <button  className={games.left } onClick={moveLeft}>Left</button>
              <button className={games.up} onClick={ moveUp}>Up</button>
              <button className={games.dow} onClick={moveDown}>down</button> 
              <button className={games.right} onClick={moveRight}>rigt</button>
              
            </div>
      </div>
      </div>
    </div>
  )
}

export default Games