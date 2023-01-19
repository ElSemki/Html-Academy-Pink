'use strict';
// Блок фильтров для фото
(function () {
  const photoFilters = document.getElementById('photo-filters');
  let filterButtons, filters;

  if (photoFilters) {
    const filtersButtons = photoFilters.querySelector('.photo-form-editor__filter-buttons');

    filterButtons = Array.from(filtersButtons.querySelectorAll('.photo-form-editor__filter-button'));
    filters = Array.from(photoFilters.querySelectorAll('.photo-form-editor__filter'));

    if (filterButtons && filters) {
      filtersButtons.addEventListener('click', clickFiltersButtons);
    }
  }

  function findCurrentButton(element) {
    return element.classList.contains('photo-form-editor__filter-button--current');
  }

  function findCurrentFilter(element) {
    return element.classList.contains('photo-form-editor__filter--current');
  }

  function changeFilters(indexCurrentSlide, indexNextSlide) {
    filters[indexCurrentSlide].classList.remove('photo-form-editor__filter--current');
    filters[indexNextSlide].classList.add('photo-form-editor__filter--current');
  }

  function clickFiltersButtons(evt) {
    let element = evt.target;

    if (element.classList.contains('photo-form-editor__filter-button')) {
      evt.preventDefault();

      let indexCurrentButton = filterButtons.indexOf(filterButtons.find(findCurrentButton));
      let indexNextButton = filterButtons.indexOf(element);

      filterButtons[indexCurrentButton].classList.remove('photo-form-editor__filter-button--current');
      filterButtons[indexNextButton].classList.add('photo-form-editor__filter-button--current');

      let indexCurrentFilter = filters.indexOf(filters.find(findCurrentFilter));
      let indexNextFilter = indexNextButton;

      changeFilters(indexCurrentFilter, indexNextFilter);
    }
  }
})();
