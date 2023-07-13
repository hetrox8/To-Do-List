import './styles.css';

const list = [
  { description: 'wash the dishes', completed: false, index: 1 },
  { description: 'Complete to do list project', completed: false, index: 2 },
];

const displayList = () => {
  const row = document.getElementById('lists');
  const sortedList = list.sort((a, b) => a.index - b.index);
  sortedList.forEach((list) => {
    row.innerHTML += `<li>
                             <div class="rowData" > <input type="checkbox"  ${list.completed ? 'checked' : ''} />${list.description} </div>
                             <i class="fa-solid fa-ellipsis-vertical"></i>
                         </li> <hr>`;
  });
};

window.addEventListener('DOMContentLoaded', displayList);
