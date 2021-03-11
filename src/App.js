import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/profile'
                       render={() => <Profile
                           store={props.store}/>}/>

                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>

                <Route path='/news'
                       render={() => <News/>}/>

                <Route path='/users'
                       render={() => <UsersContainer />}/>

            </div>
        </div>
    );
}

export default App;
