import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return ( 
        <section className="about-project">
        <h2  className="about-project__header">
        <a name="about-project"></a>
          О проекте
        </h2>
        <div className="about-project__grid">
          <h3  className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
          <h3  className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className="about-project__timeline">
          <p className="about-project__timeline-first">
            1 неделя
          </p>
          <p className="about-project__timeline-second">
            4 недели
          </p>
          <p className="about-project__timeline-item">
            Back-end
          </p>
          <p className="about-project__timeline-item">
            Front-end
          </p>
        </div>
      </section>
    );
}

export default AboutProject;