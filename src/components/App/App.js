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
import {filterMovies, filterOvner, formatMovies} from '../../utils/filterMovies';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function App() {

  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("loggedIn")) || false);

  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isSuccessRegisration, setIsSuccessRegisration] = useState(false);
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem("cards")) || []);
  const [cardsSaved, setCardsSaved] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isErr, setIsErr] = useState({isErr:false, Message:''});  

  const [isErrRegisration, setIsErrRegisration] = useState(false);    
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  console.log('localStorage cards -' , JSON.parse(localStorage.getItem("cards")));
  console.log('cards -' ,cards);
  console.log('localStorage searchWord -' ,  localStorage.getItem("searchWord"));
  console.log('cardsSaved-' ,  cardsSaved);

  useEffect(() => {
    tokenCheck();
  }, [ ] );

  useEffect(() => {
    if (loggedIn) {
      tokenCheck();
      console.log(currentUser);
          // первоначальная загрузка сохраненных карточек
          api.getCards()
              .then(res => {
                setCardsSaved(filterOvner(res,currentUser._id))
                console.log(res);
                console.log('после фильтрации ',filterOvner(res,currentUser._id));
              })
              .catch(err => {
                  console.log('Ошибка при получении данных', err);
              });

            //history.push('/main---');
          }
        
}, [loggedIn, currentUser._id]);  

  function handleCardsLoad(searchWord) {
    // загрузка карточек по кнопке поиска
    console.log('нажали кнопку поиска');
    setLoading(true);
    moviesApi.getCards()
        .then(res => {
            setCards(formatMovies(filterMovies(res, searchWord)));
            localStorage.setItem("cards", JSON.stringify(formatMovies(filterMovies(res, searchWord))));
            localStorage.setItem("searchWord", searchWord);
            if ((filterMovies(res, searchWord)).length == 0) {
              setIsErr({
                isErr:true,
                Message:'Ничего не найдено',
              });
            }
        })
        .catch(err => {
          setIsErr({
            isErr:true,
            Message:'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
          });
            console.log('Ошибка при получении данных', err);
        })
        .finally(()=>{setLoading(false)} );
        console.log('закончен поиск');
        console.log(cards)
} 

function handleCardLike(card) {
  api.postCard(card)
  .then(newCard => {
    setCardsSaved([newCard, ...cardsSaved]); 
    console.log(cardsSaved)    
  })
  .catch(err => {
      console.log('Ошибка при получении данных', err);
  }); 
} 

function handleCardDelete(card) {
  // Удаление из сохраненных

  const movieId = card._id
  ? card._id
  : cardsSaved.find((item) => {
      return item.movieId === card.movieId;
  })._id;

  api.deleteCard({ _id: movieId })
  .then((res) => {
    setCardsSaved((state) => state.filter((c) => !(c._id === movieId )));
  })
  .catch(err => {
      console.log('Ошибка при получении данных', err);
  });
} 
 



  const tokenCheck = () => {     
    auth
    .checkToken()
     .then((res) => {
       setLoggedIn(true)
       setCurrentUser(res);
     })
     .catch(err => {
     // setLoggedIn(false)
       console.log('Ошибка при получении данных', err);
   }); 
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
        setLoggedIn(true); 
        localStorage.setItem("loggedIn", true);
        setIsErr({isErr:false, Message:''});
        history.push('/movies');         
      })
      .catch((err) => {
        console.log(err);
        setIsErr({
          isErr:true,
          Message:'Ошибка авторизации',
        });
      });
    };

  // Выход
  const onLogout = () => {
    return auth
      .logOut()
      .then((res) => {
        setLoggedIn(false);
        setUserEmail(null);  
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("searchWord");
        localStorage.removeItem("cards");
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
        <Route exact path="/">
          <Main loggedIn={loggedIn}
                                      onCollMenuClick={handleCollMenuClick}
          />
        </Route>
          <Route path="/signup">
            <Register 
              onRegister={onRegister} 
              isErr={isErr}
              />
          </Route>
        <Route path="/signin">
          <Login  
            onLogin={onLogin} 
            isErr={isErr}
            />
        </Route>

        <ProtectedRoute 
                            path="/profile" 
                            loggedIn={loggedIn} 
                            component={Profile} 
                            onCollMenuClick={handleCollMenuClick}
                            onLogout={onLogout}
                            onEditProfile={handleUpdateProfile}
                            isErr={isErr}
                        />

        <ProtectedRoute 
                            path="/movies" 
                            component={Movies} 
                            loggedIn= { loggedIn } 
                            onCollMenuClick={handleCollMenuClick}
                            onCardsLoadClick={handleCardsLoad}
                            cards={cards} 
                            onCardLike={handleCardLike} 
                            loading={loading}
                            cardsSaved={cardsSaved}
                            onCardDelete={handleCardDelete}
                            isErr={isErr}
                        />
        <ProtectedRoute 
                            component={SavedMovies} 
                            path="/saved-movies" 
                            loggedIn={ loggedIn }
                            onCollMenuClick={handleCollMenuClick}
                            cardsSaved={cardsSaved}
                            onCardDelete={handleCardDelete}
                            isErr={isErr}
                        />              


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
