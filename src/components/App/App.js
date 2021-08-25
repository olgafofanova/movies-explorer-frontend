import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as auth from '../../utils/auth';
import moviesApi from '../../utils/moviesApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [isSuccessRegisration, setIsSuccessRegisration] = useState(false);
  const [cards, setCards] = useState([]);

  const [isErrRegisration, setIsErrRegisration] = useState(false);    
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  useEffect(() => {
   // if (loggedIn) {
        // первоначальная загрузка данных профиля
        // api.getUser()
        // .then(res => {
        //     setCurrentUser(res);
        // })
        // .catch(err => {
        //     console.log('Ошибка при получении данных', err);
        // });

    // первоначальная загрузка карточек
    moviesApi.getCards()
        .then(res => {
            setCards(res);
            console.log(res)
        })
        .catch(err => {
            console.log('Ошибка при получении данных', err);
        });

     // history.push('/main');
   // }
  },[]);
// }, [loggedIn]);

  // setLoggedIn(true);

    //Регистрация
    const onRegister = (data) => {
      return auth
        .register(data)
        .then(() => {      
          setUserEmail(data.email);      
          setIsSuccessRegisration(true);
          history.push('/signin');
        })
        // .catch((err) => {setIsErrRegisration(true);
        // });
                .catch((err) => { console.log(err);
        });
  };

    //Авторизация
    const onLogin = (data) => {
      return auth
        .authorize(data)
        .then(({ token }) => {
          setUserEmail(data.email);
          localStorage.setItem('jwt', token);
          setLoggedIn(true);            
        })
        .catch((err) => {setIsErrRegisration(true);
        });
        
    };

  // Выход
  const onLogout = () => {
      setLoggedIn(false);
      setUserEmail(null);  
      localStorage.removeItem('jwt');
      history.push('/sign-in');
    };

  return (
    <div className="body">
      <div className="page">
        {loggedIn ? <Header />:null}
        <Header />
        <Switch>
          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>
        <Route path="/signin">
          <Login  onLogin={onLogin} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>                
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      {loggedIn ? <Footer />:null}    
    </div> 
  </div>
  );
}

export default App;
