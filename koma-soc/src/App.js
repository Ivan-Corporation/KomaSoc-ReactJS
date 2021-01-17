import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Videos from './components/Videos/Videos';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';


const App = (props) => {



  return (

    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>


        <Route path="/profile/:userId?" render={() => <ProfileContainer
        />} />

        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />


        <Route path="/news" render={() => <News />} />
        <Route path="/videos" render={() => <Videos />} />
        <Route path="/settings" render={() => <Settings />} />

        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
