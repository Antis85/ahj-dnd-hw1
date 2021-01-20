export default function loadFromStorage() {
  try {
    return JSON.parse(localStorage.getItem('state'));
  } catch (e) {
    console.log(e);
    throw new Error('Ошибка загрузки сохраненного списка задач');
  }
}
