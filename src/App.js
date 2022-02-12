import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
// import bgVideo from './assets/bg-Video/colorfulbubbles.mp4';


function App() {
  return (
    <div className='bg-video'>
      {/* <video loop autoPlay id='video'>
        <source
          src={bgVideo}
          type="video/mp4"
        />
      </video> */}
      
      <div className='todo-app'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
