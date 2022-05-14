import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
function App() {
  const [status, setStatus] = useState(true)
  const [deviceTouchStatus, setDeviceTouchStatus] = useState(false)
  const arr = [
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
    {
      name:"Furniture",
      img:"https://www.kwikley.co.uk/backend/web/uploads/575-thumbnailimg2462.png"
    },
  ]
  const top = arr.slice(0,11)
  const bottom = arr.slice(12, arr.length)
  console.log(window.matchMedia("(pointer: coarse)").matches)
  useEffect(()=>{
    setDeviceTouchStatus(window.matchMedia("(pointer: coarse)").matches)
  },[])
  return (
    <>
    { deviceTouchStatus?
    <div className='cat-comp'>
      <div className='comp-list'>
        <div className='top-cat'>
          {
            top.map((val,index)=>{
              return (
                <>
                <a className='cat-item' key={index} href={`/${val.name}`}>
                  <div className="item-index">
                    <img src={val.img} alt={val.name}/>
                    <span className='item-name'>{val.name}</span>
                  </div>
                </a>
                </>
              )
            })
          }
          {
            status?
          
            <a className='cat-item' onClick={(e)=>setStatus(!status)}>
                  <div className="item-index">
                  <svg viewBox="0 0 72 72"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(0.111111, 0.000000)" stroke="#333B3F" stroke-width="1.5"><g transform="translate(8.000000, 28.666667)"><g><circle cx="7.33333333" cy="7.33333333" r="7.33333333"></circle><circle cx="28" cy="7.33333333" r="7.33333333"></circle><circle cx="48.6666667" cy="7.33333333" r="7.33333333"></circle></g></g></g></g></svg>
                    <span className='item-name'>More</span>
                  </div>
              </a>
              :<>
              <a className='cat-item' href={'/'+arr[12].name}>
                  <div className="item-index">
                    <img src={arr[12].img}/>
                    <span className='item-name'>{arr[12].name}</span>
                  </div>
              </a>
              </>
          }
          {
            !status? 
            bottom.map((val,index)=>{
              return (
                <>
                <a className='cat-item' key={index} href={`/${val.name}`}>
                  <div className="item-index">
                    <img src={val.img} alt={val.name}/>
                    <span className='item-name'>{val.name}</span>
                  </div>
                </a>
                </>
              )
            }
            )
            
            :<></>
          }
          {
            !status?
            <>
           <a className='cat-item' onClick={(e)=>setStatus(!status)}>
           <i class="item-index" aria-hidden="true">

                <svg viewBox="0 0 72 72">
                  <path fill="#eee" d="M52.8 29.421c0 8.793-7.287 15.921-16.275 15.921s-16.275-7.128-16.275-15.921c0-8.793 7.287-15.921 16.275-15.921s16.275 7.128 16.275 15.921z"></path><path fill="#eee" d="M7.582 54.587h56.837c1.702 0 3.082 1.38 3.082 3.082v0c0 1.702-1.38 3.082-3.082 3.082h-56.837c-1.702 0-3.082-1.38-3.082-3.082v0c0-1.702 1.38-3.082 3.082-3.082z"></path></svg></i></a>
                  <a className='cat-item' onClick={(e)=>setStatus(!status)}>
                  <i class="item-index" aria-hidden="true">

                <svg viewBox="0 0 72 72"><path fill="#eee" d="M52.8 29.421c0 8.793-7.287 15.921-16.275 15.921s-16.275-7.128-16.275-15.921c0-8.793 7.287-15.921 16.275-15.921s16.275 7.128 16.275 15.921z"></path><path fill="#eee" d="M7.582 54.587h56.837c1.702 0 3.082 1.38 3.082 3.082v0c0 1.702-1.38 3.082-3.082 3.082h-56.837c-1.702 0-3.082-1.38-3.082-3.082v0c0-1.702 1.38-3.082 3.082-3.082z"></path></svg></i></a>
                <a className='cat-item' onClick={(e)=>setStatus(!status)}>
                <i class="item-index" aria-hidden="true">

                <svg viewBox="0 0 72 72"><path fill="#eee" d="M52.8 29.421c0 8.793-7.287 15.921-16.275 15.921s-16.275-7.128-16.275-15.921c0-8.793 7.287-15.921 16.275-15.921s16.275 7.128 16.275 15.921z"></path><path fill="#eee" d="M7.582 54.587h56.837c1.702 0 3.082 1.38 3.082 3.082v0c0 1.702-1.38 3.082-3.082 3.082h-56.837c-1.702 0-3.082-1.38-3.082-3.082v0c0-1.702 1.38-3.082 3.082-3.082z"></path></svg></i></a>
             <a className='cat-item' onClick={(e)=>setStatus(!status)}>
              <i class="item-index" aria-hidden="true">
              <svg viewBox="0 0 72 72"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#333B3F" stroke-width="1.32"><rect id="Rectangle-2" x="8" y="30" width="56" height="14" rx="7"></rect></g></g></svg>
                
                </i>
                
                </a>
            </>
            :
            <></>
          }
        </div>
      </div>
    </div>
    :<>
    <p>Ping...Pong</p>
    </>
    }
    </>
  );
}

export default App;
