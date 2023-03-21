document.addEventListener('DOMContentLoaded', () => {

    let cur_pic = 0; //номер активного элемента

    let data = [ //загрузка данных, на случай чтения из контента сайта
        {
            title: 'Rostov-on-Don, Admiral',
            city: 'Rostov-on-Don<br>LCD admiral',
            area: '81 m2',
            time: '3.5 months',
            cost: 'Upon request',
            img: './src/img1.png'
        },
        {
            title: 'Sochi Thieves',
            city: 'Sochi Thieves',
            area: '105 m2',
            time: '4 months',
            cost: 'Upon request',
            img: './src/img2.png'
        },
        {
            title: 'Rostov-on-Don Patriotic',
            city: 'Rostov-on-Don Patriotic',
            area: '93 m2',
            time: '3 months',
            cost: 'Upon request',
            img: './src/img3.png'
        }

    ];

    let count_pic = data.length;

    //наполнение контента
    for (let i = 0; i < count_pic; i++) {
        let active = '';
        if (i == 0) {
            document.getElementById('city').innerHTML = data[i].city;
            document.getElementById('area').innerHTML = data[i].area;
            document.getElementById('time').innerHTML = data[i].time;
            document.getElementById('cost').innerHTML = data[i].cost;
            active = 'active';
        }
        document.getElementById('circles').innerHTML += ('<div class="circle ' + active + '" id="circle' + i + '"></div>');
        document.getElementById('pic_name').innerHTML += ('<div class="pic_title ' + active + '" id="pic' + i + '">' + data[i].title + '</div>');
        document.getElementById('pic_img').innerHTML += ('<div class="img ' + active + '" id="img' + i + '" style="background-image: url(\'' + data[i].img + '\')"></div>');

    }

    //вешаем обработчики
    let next_btn = document.getElementById('next');
    next_btn.addEventListener('click', () => {
        cur_pic++;
        if (cur_pic >= count_pic) cur_pic = 0;
        change();
    });
    let prev_btn = document.getElementById('prev');
    prev_btn.addEventListener('click', () => {
        cur_pic--;
        if (cur_pic < 0) cur_pic = count_pic - 1;
        change();
    });
    let pics_name = document.getElementsByClassName('pic_title');
    for (let i = 0; i < count_pic; i++) {
        pics_name[i].addEventListener('click', (e) => {
            let id = e.target.id.substr(3);
            if (id == cur_pic) {
                return;
            } else {
                cur_pic = id;
                change();
            }
        });
    }
    let circles = document.getElementsByClassName('circle');
    for (let i = 0; i < count_pic; i++) {
        circles[i].addEventListener('click', (e) => {
            let id = e.target.id.substr(6);
            if (id == cur_pic) {
                return;
            } else {
                cur_pic = id;
                change();
            }
        });
    }


    //процедура смены изображения
    function change() {

        console.log(cur_pic);
        let actives = document.getElementsByClassName('active');
        for (let i = actives.length-1; i >=0; i--) {
            actives[i].classList.remove('active');
        }
        
        document.getElementById('circle' + cur_pic).classList.add('active');
        document.getElementById('pic' + cur_pic).classList.add('active');
        document.getElementById('img' + cur_pic).classList.add('active');
    }
});