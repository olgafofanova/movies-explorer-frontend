import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css';
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
  const [loading, setLoading] = useState(false);

 

  const [isErrRegisration, setIsErrRegisration] = useState(false);    
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();
  useEffect(() => {
    tokenCheck();
    console.log('tokenCheck');
    console.log(loggedIn);
}, []);

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
        console.log('ggg');
        console.log(loggedIn);


     // history.push('/main');
   // }
  },[]);
// }, [loggedIn]);

  // setLoggedIn(true);

  function handleCardsLoad(event) {
    // загрузка карточек по кнопке
    console.log('нажали кнопку поиска');
    setLoading(true);
    moviesApi.getCards()
        .then(res => {
            setCards(res);
            console.log(res)
        })
        .catch(err => {
            console.log('Ошибка при получении данных', err);
        })
        .finally(()=>{setLoading(false)} );
        console.log('закончен поиск');
        console.log(cards)
} 

function handleCardLike(event) {
  // Сохранение карточки
} 

function handleCardDelete(event) {
  // Удаление из сохраненных
} 

  const tokenCheck = () => {        
    // const jwt = localStorage.getItem('jwt');
    // if (!jwt) {
    //   return;
    // }    
    // auth
    //   .checkToken(jwt)
    //   .then((res) => {
    //       console.log(res);
    //       console.log(res.email);
    //    // setUserEmail(res.data.email); 
    //     setUserEmail(res.email); 
    //     setLoggedIn(true);
    //   })
    //   .catch(err => {
    //     console.log('Ошибка при получении данных', err);
    // }); 

    setLoggedIn(true);
  }; 

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
      // return auth
      //   .authorize(data)
      //   .then(({ token }) => {
      //     setUserEmail(data.email);
      //     localStorage.setItem('jwt', token);
      //     setLoggedIn(true);            
      //   })
      //   .catch((err) => {setIsErrRegisration(true);
      //   });
      setLoggedIn(true); 

      setUserEmail('Имя');
      console.log(userEmail);
        console.log('ав -'+ loggedIn);
      history.push('/movies');
    };

  // Выход
  const onLogout = () => {
     // setLoggedIn(false);
      setUserEmail(null);  
      localStorage.removeItem('jwt');
      history.push('/signin');
    };


    const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);

    function handleCollMenuClick(event) {
      setIsPopupMenuOpen(true);
      console.log(isPopupMenuOpen);
  };
  
  function closePopupMenu() {
    setIsPopupMenuOpen(false);
  };

  return (
    <div className="body">
      <div className="page">
        <Switch>
          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>
        <Route path="/signin">
          <Login  onLogin={onLogin} />
        </Route>

        <ProtectedRoute 
                            path="/profile" 
                            loggedIn={loggedIn} 
                            component={Profile} 
                            onCollMenuClick={handleCollMenuClick}
          isPopupMenuOpen={isPopupMenuOpen}
          closePopupMenu={closePopupMenu}
                        />

        <ProtectedRoute 
                            path="/movies" 
                            //loggedIn={loggedIn} 
                            loggedIn={true}
                            component={Movies} 
                            onCollMenuClick={handleCollMenuClick}
                            onCardsLoadClick={handleCardsLoad}
                            cards={cards} 
                            onCardLike={handleCardLike} 
                            loading={loading}
                        />
        <ProtectedRoute 
                            component={SavedMovies} 
                            path="/saved-movies" 
                            loggedIn={loggedIn}
                            onCollMenuClick={handleCollMenuClick}
                            onCardDelete={handleCardDelete}
                        />               
        <Route exact path="/">
          <Main loggedIn={loggedIn}/>
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
