const formSearch = document.querySelector('.form-search'),
      inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
      dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
      inputCitiesTo = formSearch.querySelector('.input__cities-to'),
      dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
      inputDateDepart = formSearch.querySelector('.input__date-depart');

      const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск', 'Керчь', 'Волгоград', 'Самара', 'ДнепроПетровск', 'Екатеринбург', 'Одесса',
       'Ухань', 'Шымкент', 'Нижний Новгород', 'Калининград', 'Вроцлав', 'Ростов-на-Дону'];


const showCity = (input, list) => {
    list.textContent = '';
    if (input.value === '') return;
    const filterCity = city.filter((item) => {
        const fixItem = item.toLowerCase();
        return fixItem.includes(input.value.toLowerCase());
    });

    filterCity.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('dropdown__city');
        li.textContent = item;
        list.append(li);
    });
};

    inputCitiesFrom.addEventListener('input', () => {
        showCity(inputCitiesFrom, dropdownCitiesFrom);
    });

    inputCitiesTo.addEventListener('input', () =>{
        showCity(inputCitiesTo, dropdownCitiesTo);
    });


    /*    const tag = (event,input, list) => {
                const target = event.target;
                if (target.tagName.toLowerCase() === 'li') {
                    input.value = target.textContent;
                    list.textContent = '';
                }
        };

        dropdownCitiesFrom.addEventListener('click', (event) => {
            tag(event, inputCitiesFrom, dropdownCitiesFrom);
        });

        dropdownCitiesTo.addEventListener('click', (event) => {
            tag(event,inputCitiesTo, dropdownCitiesTo);
        });*/

        const tag = (item, input, block) => {
            if(item.tagName.toLowerCase() === 'li'){
                input.value = item.textContent;
                block.textContent = '';
            }
        };
        dropdownCitiesFrom.addEventListener('click', (event) => {
           let target = event.target;
           tag(target, inputCitiesFrom, dropdownCitiesFrom);
        });

        dropdownCitiesTo.addEventListener('click', (event) => {
            let target = event.target;
            tag(target, inputCitiesTo, dropdownCitiesTo);
        })



