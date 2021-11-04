import Sortable from 'sortablejs';
// sometimes you have to search for "require"

const initSortable = () => {
  const ulElement = document.getElementById('results');
  Sortable.create(ulElement, {
    ghostClass: "ghost",
    animation: 1500,
    // onEnd: (event) => {
    //   alert(`${event.oldIndex} moved to ${event.newIndex}`);
    // }
  });
};

export { initSortable };