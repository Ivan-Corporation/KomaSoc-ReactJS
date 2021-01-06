import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Videos from './components/Videos/Videos';
import Settings from './components/Settings/Settings';
import store, { addPost, updateNewPostText } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {



  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>


          <Route path="/profile" render={() => <Profile
            store={props.store} />} />

          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/videos" render={() => <Videos />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
