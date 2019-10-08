const insertHtmlIntoElement = (element, htmlText) => {
  if (element) {
    element.insertAdjacentHTML('beforeend', htmlText)
    return true;
  }
  return false;
}

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


const renderSearch = () => {

};

insertHtmlIntoElement(
  document.querySelector('.main__control'),
  renderMenu()
);
