//Фильтры
//цены
const filter_price = document.querySelector("#filter_price"); 
const filter_price_child = document.querySelector('#filter_price_child');
const filter_price_btn = document.querySelector('#filter_price_btn');
let userInteracted = false; // флаг для условия


//mouseenter когда курсор входит в область элемента
//mouseout когда выходит из элемента
// mouseleave - курсор полностью покидает элемент

let hideTimeout;

// показать при наведении
filter_price.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    filter_price_child.classList.remove('hidden');
});

// скрыть при уходе с задержкой
filter_price.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        // не скрывать если курсор над дочерним элементом или есть фокус
        if (!filter_price_child.matches(':hover') && !filter_price_child.contains(document.activeElement)) {
            filter_price_child.classList.add('hidden');
        }
    }, 300);
});

filter_price_child.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
});

filter_price_child.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        if (!filter_price_child.contains(document.activeElement)) {
            filter_price_child.classList.add('hidden');
        }
    }, 300);
});

// кнопка "Готово"
filter_price_btn.addEventListener('click', () => {
    filter_price_child.classList.add('hidden');
});

// скрытие по клику вне
document.addEventListener('click', (event) => {
    if (!filter_price.contains(event.target) && !filter_price_child.contains(event.target)) {
        filter_price_child.classList.add('hidden');
    }
});

