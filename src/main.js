// Таймер для отзывов
const options = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.5
};

function callback(entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            go_timer('count_otz', 19123);

            observer.unobserve(entry.target);
        }
        
    });
}
function go_timer(id, res){
    let variable = document.getElementById(id);
    if (!variable) return;

    let start = 0;
    const increment = res / (2000 / 16);
    const timer = setInterval(() =>{
        start += increment;
        if (start >= res){
            variable.textContent = res;
            clearInterval(timer);
        }
        else{
            variable.textContent = Math.floor(start);
        }
    }, 16);
}
let stats_sections = document.querySelector('#stats_sections');
const observer = new IntersectionObserver(callback, options);
if (stats_sections){
    observer.observe(stats_sections);
}

//таймер для кол-во продаж

const options_1 = {
    root: null, 
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.5
};
function go_timer_1(id, res){
    let variable = document.getElementById(id);
    let start = 0;
    

    if (id == 'ocenka'){
        res = res*10;
    }
    const increment = res / (2000 / 16);

    if (id == 'ocenka'){
         const timer = setInterval(()=>{
            start += increment;
            if (start >= res){
                variable.textContent = (res / 10).toFixed(1);
                clearInterval(timer);
            }
            else{
                variable.textContent = (start / 10).toFixed(1);
            }
        }, 16);
    }
    else{
        const timer = setInterval(()=>{
            start += increment;
            if (start >= res){
                variable.textContent = res;
                clearInterval(timer);
            }
            else{
                variable.textContent = Math.floor(start);
            }
        }, 16);
    }
    
}

function callback_1 (entries, observer){
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            go_timer_1('count_orders', 52333);
            go_timer_1('ocenka', 4.8);
            go_timer_1('years', 10);

            observer.unobserve(entry.target);
        }
    });
}

const observer_1 = new IntersectionObserver(callback_1, options_1);

if (stats_sections){
    observer_1.observe(stats_sections);
}

//таймер для все1 характеристики




