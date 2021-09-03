import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return ( 
        <div className="page-not-found">
          <div>
            <h3 className="page-not-found__title">
              404 
            </h3>     
          <p className="page-not-found__text">
            Страница не найдена
          </p>
          </div>
          <Link className="page-not-found__button button_type_to-main" to="/">Назад</Link>
        </div>
    );
}

export default PageNotFound;