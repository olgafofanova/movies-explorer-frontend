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
import PopupMenu from '../PopupMenu/PopupMenu';
import * as auth from '../../utils/auth';
import moviesApi from '../../utils/moviesApi';
import api from '../../utils/api';
import {filterMovies} from '../../utils/filterMovies';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function App() {
  console.log("cookies", document.cookie);

  const [loggedIn, setLoggedIn] = useState(false);
  console.log('loggedIn - в начале:', loggedIn);

  // const [count, setcount] = useState(0);
  // setcount(count+1)
  // console.log(count);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isSuccessRegisration, setIsSuccessRegisration] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardsSaved, setCardsSaved] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isErrRegisration, setIsErrRegisration] = useState(false);    
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  useEffect(() => {
    tokenCheck();
  }, [ ] );

//   useEffect(() => {
//     console.log('useEffect' , currentUser, loggedIn);
//     if (loggedIn) {
//       tokenCheck();
//       console.log(currentUser);
//           // первоначальная загрузка сохраненных карточек
//           api.getCards()
//               .then(res => {
//                 setCardsSaved(res)
//                 debugger;
//               })
//               .catch(err => {
//                   console.log('Ошибка при получении данных', err);
//               });
//             //history.push('/main---');
//           }
// });  


  function handleCardsLoad(searchWord) {
    // загрузка карточек по кнопке поиска
    console.log('нажали кнопку поиска');
    setLoading(true);
    moviesApi.getCards()
        .then(res => {
            setCards(filterMovies(res, searchWord));
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
    auth
    .checkToken()
     .then((res) => {
       console.log(res);
       setLoggedIn(true)
       setCurrentUser(res);
     })
     .catch(err => {
     // setLoggedIn(false)
       console.log('Ошибка при получении данных', err);
   }); 
   console.log('checkToken');
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
      return auth
      .authorize(data)
      .then((res) => {
        // setUserEmail(data.email);
        // setUserName(data.name);
        // localStorage.setItem('jwt', token);
        console.log('LoggedIn - в авторизации до установки', loggedIn);
        setLoggedIn(true); 
        console.log('onLogin', res);
      //  history.push('/movies');         
      })
      .catch((err) => {setIsErrRegisration(true);
      });
    };

  // Выход
  const onLogout = () => {
    return auth
      .logOut()
      .then((res) => {
        setLoggedIn(false);
        setUserEmail(null);  
        localStorage.removeItem('jwt');
        history.push('/'); 
        console.log(res);     
      })
      .catch((err) => {console.log(err);  
      });

    };

    function handleUpdateProfile (data) {   
      console.log(data);  
      api.setUserInfo(data)
      .then(res => {
       setCurrentUser(res); 
       console.log('после сохранения');     
       console.log(res);   
      })
      .catch(err => {
          console.log('Ошибка при получении данных', err);
      });
   };



    const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);

    function handleCollMenuClick(event) {
      setIsPopupMenuOpen(true);
  };
  
  function closePopupMenu() {
    setIsPopupMenuOpen(false);
  };

  return (
    <div className="body">
      <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
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
                            onLogout={onLogout}
                            onEditProfile={handleUpdateProfile}
                        />

        <ProtectedRoute 
                            path="/movies" 
                            // loggedIn={true}
                            component={Movies} 
                            loggedIn= { loggedIn } 
                            onCollMenuClick={handleCollMenuClick}
                            onCardsLoadClick={handleCardsLoad}
                            cards={cards} 
                            onCardLike={handleCardLike} 
                            loading={loading}
                        />
        <ProtectedRoute 
                            component={SavedMovies} 
                            path="/saved-movies" 
                            loggedIn={ loggedIn }
                            onCollMenuClick={handleCollMenuClick}
                            cardsSaved={cardsSaved}
                            onCardDelete={handleCardDelete}
                        />               
        <Route exact path="/">
          <Main loggedIn={loggedIn}
                                      onCollMenuClick={handleCollMenuClick}
          />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <PopupMenu 
                        isOpen={isPopupMenuOpen} 
                        onClose={closePopupMenu} 
                    /> 



      </CurrentUserContext.Provider>
    </div> 
  </div>
  );
}

export default App;
