/**
 * Insert html text into an element before closing tag
 * @param {htmlElement} element 
 * @param {string} htmlText 
 */
const insertHtmlIntoElement = (element, htmlText) => {
  if (element) {
    element.insertAdjacentHTML('beforeend', htmlText)
    return true;
  }
  return false;
}


/**
 * Render menu section
 */
const renderMenu = () => {
  return `
    <section class="control__btn-wrap">
    <input
      type="radio"
      name="control"
      id="control__new-task"
      class="control__input visually-hidden"
    />
    <label for="control__new-task" class="control__label control__label--new-task"
      >+ ADD NEW TASK</label
    >
    <input
      type="radio"
      name="control"
      id="control__task"
      class="control__input visually-hidden"
      checked
    />
    <label for="control__task" class="control__label">TASKS</label>
    <input
      type="radio"
      name="control"
      id="control__statistic"
      class="control__input visually-hidden"
    />
    <label for="control__statistic" class="control__label"
      >STATISTICS</label
    >
  </section>
  `;
};


/**
 * Render search section
 */
const renderSearch = () => {
  return `
    <section class="main__search search container">
      <input
        type="text"
        id="search__input"
        class="search__input"
        placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE"
      />
      <label class="visually-hidden" for="search__input">Search</label>
    </section>
  `;
};


/**
 * Render filters
 */
const renderFilters = () => {
  return `
    <section class="main__filter filter container">
      <input
        type="radio"
        id="filter__all"
        class="filter__input visually-hidden"
        name="filter"
        checked
      />
      <label for="filter__all" class="filter__label">
        All <span class="filter__all-count">13</span></label
      >
      <input
        type="radio"
        id="filter__overdue"
        class="filter__input visually-hidden"
        name="filter"
        disabled
      />
      <label for="filter__overdue" class="filter__label"
        >Overdue <span class="filter__overdue-count">0</span></label
      >
      <input
        type="radio"
        id="filter__today"
        class="filter__input visually-hidden"
        name="filter"
        disabled
      />
      <label for="filter__today" class="filter__label"
        >Today <span class="filter__today-count">0</span></label
      >
      <input
        type="radio"
        id="filter__favorites"
        class="filter__input visually-hidden"
        name="filter"
      />
      <label for="filter__favorites" class="filter__label"
        >Favorites <span class="filter__favorites-count">1</span></label
      >
      <input
        type="radio"
        id="filter__repeating"
        class="filter__input visually-hidden"
        name="filter"
      />
      <label for="filter__repeating" class="filter__label"
        >Repeating <span class="filter__repeating-count">1</span></label
      >
      <input
        type="radio"
        id="filter__tags"
        class="filter__input visually-hidden"
        name="filter"
      />
      <label for="filter__tags" class="filter__label"
        >Tags <span class="filter__tags-count">1</span></label
      >
      <input
        type="radio"
        id="filter__archive"
        class="filter__input visually-hidden"
        name="filter"
      />
      <label for="filter__archive" class="filter__label"
        >Archive <span class="filter__archive-count">115</span></label
      >
    </section>
  `;
};


/**
 * Render Board
 */
const renderBoard = () => {
  return `
  <section class="board container">
    <div class="board__filter-list">
      <a href="#" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" class="board__filter">SORT BY DATE up</a>
      <a href="#" class="board__filter">SORT BY DATE down</a>
    </div>

    <div class="board__tasks">
      <article class="card card--black">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">Example default task with default color.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">23 September</span>
                      <span class="card__time">11:15 PM</span>
                    </p>
                  </div>
                </div>

                <div class="card__hashtag">
                  <div class="card__hashtag-list">
                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #todo
                      </span>
                    </span>

                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #personal
                      </span>
                    </span>

                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #important
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--blue">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">Example default task with custom color.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">23 September</span>
                      <span class="card__time">11:15 PM</span>
                    </p>
                  </div>
                </div>

                <div class="card__hashtag">
                  <div class="card__hashtag-list">
                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #todo
                      </span>
                    </span>

                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #personal
                      </span>
                    </span>

                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #important
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--yellow">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">Example default task with custom color and without date.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__hashtag">
                  <div class="card__hashtag-list">
                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #todo
                      </span>
                    </span>

                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #personal
                      </span>
                    </span>

                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #important
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--green">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">Example default task with custom color and without hashtags.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">23 September</span>
                      <span class="card__time">11:15 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--black">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">Example default task without date and hashtags.</p>
            </div>

            <div class="card__settings">
              <div class="card__details"></div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--pink card--repeat">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">It is example of repeating task. It marks by wave.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">23 September</span>
                      <span class="card__time">11:15 PM</span>
                    </p>
                  </div>
                </div>

                <div class="card__hashtag">
                  <div class="card__hashtag-list">
                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #todo
                      </span>
                    </span>

                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #personal
                      </span>
                    </span>

                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #important
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--red card--deadline">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">This is card with missing deadline.</p>
            </div>

            <div class="card__settings">
              <div class="card__details"></div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--black card--deadline">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">This is card with missing deadline. Deadline always marked by red line.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">23 September</span>
                      <span class="card__time">11:15 PM</span>
                    </p>
                  </div>
                </div>

                <div class="card__hashtag">
                  <div class="card__hashtag-list">
                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #todo
                      </span>
                    </span>

                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #personal
                      </span>
                    </span>

                    <span class="card__hashtag-inner">
                      <span class="card__hashtag-name">
                        #important
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <button class="load-more" type="button">load more</button>
  </section>
  `
}


// Add menu
insertHtmlIntoElement(
  document.querySelector('.main__control'),
  renderMenu()
);

// Add search
insertHtmlIntoElement(
  document.querySelector('.main'),
  renderSearch()
);

// Add filters
insertHtmlIntoElement(
  document.querySelector('.main'),
  renderFilters()
);

// Add board
insertHtmlIntoElement(
  document.querySelector('.main'),
  renderBoard()
);
