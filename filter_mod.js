(function() {
    'use strict';
    
    let FilterPlusModule = null;
    
    function createFilterModule() {
        const data = {};
        
        data.type = {
            title: '#{title_type}',
            items: [
                {
                    title: '#{menu_movies}',
                    selected: true,
                    cat: 'movie'
                },
                {
                    title: '#{menu_multmovie}',
                    cat: 'multmovie'
                },
                {
                    title: '#{menu_tv}',
                    cat: 'tv'
                },
                {
                    title: '#{menu_multtv}',
                    cat: 'multtv'
                },
                {
                    title: '#{menu_anime}',
                    cat: 'anime'
                }
            ]
        };
        
        data.rating = {
            title: '#{title_rating}',
            items: [
                {
                    title: '#{filter_any}',
                },
                {
                    title: '#{filter_rating_from} 8',
                    start: 8
                },
                {
                    title: '#{filter_rating_from} 6',
                    start: 6
                },
                {
                    title: '#{filter_rating_from} 4',
                    start: 4
                },
                {
                    title: '#{filter_rating_from} 2',
                    start: 2
                },
                {
                    title: '#{filter_rating_from} 1 #{filter_rating_to} 3',
                    voite: '1-3'
                },
                {
                    title: '#{filter_rating_from} 3 #{filter_rating_to} 6',
                    voite: '3-6'
                },
                {
                    title: '#{filter_rating_from} 6 #{filter_rating_to} 8',
                    voite: '6-8'
                },
                {
                    title: '#{filter_rating_from} 8 #{filter_rating_to} 9',
                    voite: '8-9'
                }
            ]
        };
        
        data.pgrating = {
            title: '#{title_pgrating}',
            items: [
                {
                    title: '#{filter_any}',
                }
            ]
        };
        
        // Языки с добавлением пункта "Любой" первым элементом
        data.language = {
            title: '#{title_language}',
            items: [
                {
                    title: '#{filter_any}',
                    any: true
                },
                {title: '#{filter_lang_ru}', code: 'ru'},
                {title: '#{filter_lang_uk}', code: 'uk'},
                {title: '#{filter_lang_en}', code: 'en'},
                {title: '#{filter_lang_be}', code: 'be'},
                {title: '#{filter_lang_zh}', code: 'zh|cn'},
                {title: '#{filter_lang_ja}', code: 'ja'},
                {title: '#{filter_lang_ko}', code: 'ko'},
                {title: '#{filter_lang_af}', code: 'af'},
                {title: '#{filter_lang_sq}', code: 'sq'},
                {title: '#{filter_lang_ar}', code: 'ar'},
                {title: '#{filter_lang_az}', code: 'az'},
                {title: '#{filter_lang_hy}', code: 'hy'},
                {title: '#{filter_lang_ba}', code: 'ba'},
                {title: '#{filter_lang_bg}', code: 'bg'},
                {title: '#{filter_lang_bn}', code: 'bn'},
                {title: '#{filter_lang_bs}', code: 'bs'},
                {title: '#{filter_lang_ca}', code: 'ca'},
                {title: '#{filter_lang_ce}', code: 'ce'},
                {title: '#{filter_lang_cs}', code: 'cs'},
                {title: '#{filter_lang_da}', code: 'da'},
                {title: '#{filter_lang_ka}', code: 'ka'},
                {title: '#{filter_lang_de}', code: 'de'},
                {title: '#{filter_lang_el}', code: 'el'},
                {title: '#{filter_lang_es}', code: 'es'},
                {title: '#{filter_lang_et}', code: 'et'},
                {title: '#{filter_lang_fa}', code: 'fa'},
                {title: '#{filter_lang_fi}', code: 'fi'},
                {title: '#{filter_lang_fr}', code: 'fr'},
                {title: '#{filter_lang_ga}', code: 'ga'},
                {title: '#{filter_lang_gl}', code: 'gl'},
                {title: '#{filter_lang_gn}', code: 'gn'},
                {title: '#{filter_lang_he}', code: 'he'},
                {title: '#{filter_lang_hi}', code: 'hi'},
                {title: '#{filter_lang_hr}', code: 'hr'},
                {title: '#{filter_lang_hu}', code: 'hu'},
                {title: '#{filter_lang_id}', code: 'id'},
                {title: '#{filter_lang_is}', code: 'is'},
                {title: '#{filter_lang_it}', code: 'it'},
                {title: '#{filter_lang_kk}', code: 'kk'},
                {title: '#{filter_lang_ks}', code: 'ks'},
                {title: '#{filter_lang_ku}', code: 'ku'},
                {title: '#{filter_lang_ky}', code: 'ky'},
                {title: '#{filter_lang_lt}', code: 'lt'},
                {title: '#{filter_lang_lv}', code: 'lv'},
                {title: '#{filter_lang_mi}', code: 'mi'},
                {title: '#{filter_lang_mk}', code: 'mk'},
                {title: '#{filter_lang_mn}', code: 'mn'},
                {title: '#{filter_lang_mo}', code: 'mo'},
                {title: '#{filter_lang_mt}', code: 'mt'},
                {title: '#{filter_lang_no}', code: 'no|nb|nn'},
                {title: '#{filter_lang_ne}', code: 'ne'},
                {title: '#{filter_lang_nl}', code: 'nl'},
                {title: '#{filter_lang_pa}', code: 'pa'},
                {title: '#{filter_lang_pl}', code: 'pl'},
                {title: '#{filter_lang_ps}', code: 'ps'},
                {title: '#{filter_lang_pt}', code: 'pt'},
                {title: '#{filter_lang_ro}', code: 'ro'},
                {title: '#{filter_lang_si}', code: 'si'},
                {title: '#{filter_lang_sk}', code: 'sk'},
                {title: '#{filter_lang_sl}', code: 'sl'},
                {title: '#{filter_lang_sm}', code: 'sm'},
                {title: '#{filter_lang_so}', code: 'so'},
                {title: '#{filter_lang_sr}', code: 'sr'},
                {title: '#{filter_lang_sv}', code: 'sv'},
                {title: '#{filter_lang_sw}', code: 'sw'},
                {title: '#{filter_lang_ta}', code: 'ta'},
                {title: '#{filter_lang_tg}', code: 'tg'},
                {title: '#{filter_lang_th}', code: 'th'},
                {title: '#{filter_lang_tk}', code: 'tk'},
                {title: '#{filter_lang_tr}', code: 'tr'},
                {title: '#{filter_lang_tt}', code: 'tt'},
                {title: '#{filter_lang_ur}', code: 'ur'},
                {title: '#{filter_lang_uz}', code: 'uz'},
                {title: '#{filter_lang_vi}', code: 'vi'},
                {title: '#{filter_lang_yi}', code: 'yi'}
            ]
        };
        
        // Жанры для фильмов с добавлением пункта "Любой" первым элементом
        data.genres_movie = {
            title: '#{title_genre}',
            items: [
                {
                    title: '#{filter_any}',
                    any: true
                },
                {"id":28,"title":"#{filter_genre_ac}",checkbox: true},
                {"id":12,"title":"#{filter_genre_ad}",checkbox: true},
                {"id":16,"title":"#{filter_genre_mv}",checkbox: true},
                {"id":35,"title":"#{filter_genre_cm}",checkbox: true},
                {"id":80,"title":"#{filter_genre_cr}",checkbox: true},
                {"id":99,"title":"#{filter_genre_dc}",checkbox: true},
                {"id":18,"title":"#{filter_genre_dr}",checkbox: true},
                {"id":10751,"title":"#{filter_genre_fm}",checkbox: true},
                {"id":14,"title":"#{filter_genre_fe}",checkbox: true},
                {"id":36,"title":"#{filter_genre_hi}",checkbox: true},
                {"id":27,"title":"#{filter_genre_ho}",checkbox: true},
                {"id":10402,"title":"#{filter_genre_mu}",checkbox: true},
                {"id":9648,"title":"#{filter_genre_de}",checkbox: true},
                {"id":10749,"title":"#{filter_genre_md}",checkbox: true},
                {"id":878,"title":"#{filter_genre_fa}",checkbox: true},
                {"id":10770,"title":"#{filter_genre_tv}",checkbox: true},
                {"id":53,"title":"#{filter_genre_tr}",checkbox: true},
                {"id":10752,"title":"#{filter_genre_mi}",checkbox: true},
                {"id":37,"title":"#{filter_genre_ve}",checkbox: true}
            ]
        };
        
        // Жанры для сериалов с добавлением пункта "Любой" первым элементом
        data.genres_tv = {
            title: '#{title_genre}',
            items: [
                {
                    title: '#{filter_any}',
                    any: true
                },
                {"id": 10759,"title": "#{filter_genre_aa}",checkbox: true},
                {"id": 16,"title": "#{filter_genre_mv}",checkbox: true},
                {"id": 35,"title": "#{filter_genre_cm}",checkbox: true},
                {"id": 80,"title": "#{filter_genre_cr}",checkbox: true},
                {"id": 99,"title": "#{filter_genre_dc}",checkbox: true},
                {"id": 18,"title": "#{filter_genre_dr}",checkbox: true},
                {"id": 10751,"title": "#{filter_genre_fm}",checkbox: true},
                {"id": 10762,"title": "#{filter_genre_ch}",checkbox: true},
                {"id": 9648,"title": "#{filter_genre_de}",checkbox: true},
                {"id": 10763,"title": "#{filter_genre_nw}",checkbox: true},
                {"id": 10764, "title": "#{filter_genre_rs}",checkbox: true},
                {"id": 10765,"title": "#{filter_genre_hf}",checkbox: true},
                {"id": 10766,"title": "#{filter_genre_op}",checkbox: true},
                {"id": 10767,"title": "#{filter_genre_tc}",checkbox: true},
                {"id": 10768,"title": "#{filter_genre_mp}",checkbox: true},
                {"id": 37,"title": "#{filter_genre_ve}",checkbox: true}
            ]
        };
        
        data.sort = {
            title: '#{filter_sorted}',
            items: [
                {
                    title: '#{filter_any}',
                },
                {
                    title: '#{title_new}',
                    sort: 'now'
                },
                {
                    title: '#{title_now_watch}',
                    sort: 'now_playing'
                },
                {
                    title: '#{title_in_top}',
                    sort: 'top'
                },
                {
                    title: '#{title_ongoing}',
                    sort: 'airing'
                }
            ]
        };
        
        data.quality = {
            title: '#{player_quality}',
            items: [
                {
                    title: '#{filter_any}',
                },
                {
                    title: '#{title_in_high_quality}',
                    uhd: true
                }
            ]
        };
        
        data.year = {
            title: '#{title_year}',
            items: [
                {
                    title: '#{filter_any}',
                    any: true
                }
            ]
        };
        
        for(let a = 18; a >= 0; a-=3){
            data.pgrating.items.push({
                title: a + '+',
                pg: a
            });
        }
        
        for(let a = 15; a >= 0; a-=3){
            data.pgrating.items.push({
                title: '#{filter_rating_from} '+a+' #{filter_rating_to} '+(a+3),
                pg: a + '-' + (a+3)
            });
        }
        
        let i = 100;
        let y = (new Date()).getFullYear();
        
        for(let a = 0; a < 5; a++) {
            data.year.items.push({
                title: y - a
            });
        }
        
        while (i-=5) {
            let end = y - (99 - i);
            data.year.items.push({
                title: (end + 5)+'-'+end
            });
        }
        

        data.language.items.forEach((i, index) => {
            if (index > 0) i.checkbox = true;
        });
        
        // ---- ФУНКЦИИ СОХРАНЕНИЯ И ВОССТАНОВЛЕНИЯ ----
        
        /**
         * Сохранение настроек фильтра
         */
        function saveFilterSettings() {
            if (!window.Lampa.Storage) return;
            
            try {
                const state = {};
                
                // Сохраняем только выбранные индексы для радио-кнопок
                // и состояния чекбоксов
                Object.keys(data).forEach(key => {
                    if (data[key].items && data[key].items.length > 0) {
                        // Для радио-кнопок (selected) - сохраняем индекс выбранного
                        const selectedIndex = data[key].items.findIndex(item => item.selected === true);
                        if (selectedIndex !== -1) {
                            if (!state.radio) state.radio = {};
                            state.radio[key] = selectedIndex;
                        }
                        
                        // Для чекбоксов - сохраняем массив состояний
                        const hasCheckboxes = data[key].items.some(item => item.checkbox === true);
                        if (hasCheckboxes) {
                            if (!state.checkboxes) state.checkboxes = {};
                            state.checkboxes[key] = data[key].items.map(item => item.checked || false);
                        }
                    }
                });
                
                window.Lampa.Storage.set('filterPlus_settings', state);
                console.log('Фильтр +: Настройки сохранены', state);
            } catch (error) {
                console.error('Фильтр +: Ошибка сохранения настроек:', error);
            }
        }
        
        /**
         * Восстановление настроек фильтра
         */
        function loadFilterSettings() {
            if (!window.Lampa.Storage) return;
            
            try {
                const state = window.Lampa.Storage.get('filterPlus_settings', null);
                if (!state) {
                    console.log('Фильтр +: Сохраненных настроек нет');
                    return;
                }
                
                console.log('Фильтр +: Восстанавливаем настройки', state);
                
                // Восстанавливаем радио-кнопки (selected)
                if (state.radio) {
                    Object.keys(state.radio).forEach(key => {
                        if (data[key] && data[key].items) {
                            const selectedIndex = state.radio[key];
                            if (selectedIndex >= 0 && selectedIndex < data[key].items.length) {
                                // Сбрасываем все selected
                                data[key].items.forEach(item => item.selected = false);
                                // Устанавливаем сохраненный selected
                                data[key].items[selectedIndex].selected = true;
                                console.log(`Восстановлен ${key}: selected[${selectedIndex}]`);
                            }
                        }
                    });
                }
                
                // Восстанавливаем чекбоксы (checked)
                if (state.checkboxes) {
                    Object.keys(state.checkboxes).forEach(key => {
                        if (data[key] && data[key].items) {
                            const savedChecks = state.checkboxes[key];
                            if (Array.isArray(savedChecks) && savedChecks.length === data[key].items.length) {
                                savedChecks.forEach((checked, index) => {
                                    if (data[key].items[index]) {
                                        data[key].items[index].checked = checked;
                                    }
                                });
                                console.log(`Восстановлен ${key}: ${savedChecks.filter(c => c).length} чекбоксов`);
                            }
                        }
                    });
                }
                
                // Обновляем подзаголовки
                for(var i in data) selected(data[i]);
                
                console.log('Фильтр +: Настройки восстановлены');
            } catch (error) {
                console.error('Фильтр +: Ошибка восстановления настроек:', error);
            }
        }
        
        /**
         * Главное меню фильтрации
         */
        function main(){
            ///Это фильтр
            for(var i in data) selected(data[i]);

            let cat  = data.type.items.find(s=>s.selected).cat;
            let type = cat.indexOf('movie') >= 0 ? 'movie' : 'tv';

            let items = [{
                title: window.Lampa.Lang.translate('search_start'),
                search: true
            },data.type,data.rating,data['genres_'+type],data.language,data.year];

            if(window.Lampa.Storage.field('source') == 'cub') items.push(data.pgrating,data.sort,data.quality);

            items.forEach(itm=>{
                itm.title = window.Lampa.Lang.translate(itm.title);

                if(itm.subtitle) itm.subtitle = window.Lampa.Lang.translate(itm.subtitle);

                if(itm.items){
                    itm.items.forEach(inr=>{
                        inr.title = window.Lampa.Lang.translate(inr.title);
                    });
                }
            });

            window.Lampa.Select.show({
                title: window.Lampa.Lang.translate('title_filter') + ' +',
                items: items,
                onBack: ()=>{
                    window.Lampa.Controller.toggle('content');
                },
                onSelect: (a)=>{
                    if(a.search) search();
                    else submenu(a);
                }
            });
        }

        /**
         * Запрос для TMDB
         * @returns {string} - строка запроса
         */
        function queryForTMDB(){
            let query    = [];
            let cat      = data.type.items.find(s=>s.selected).cat;
            let type     = cat.indexOf('movie') >= 0 ? 'movie' : 'tv';
            let genres   = [];
            let languages = [];

            data.rating.items.forEach(a=>{
                if(a.selected && (a.voite || a.start)){
                    if(a.start){
                        query.push('vote_average.gte='+a.start);
                    }
                    else{
                        query.push('vote_average.gte='+a.voite.split('-')[0]);
                        query.push('vote_average.lte='+a.voite.split('-')[1]);
                    }
                }
            });

            data.language.items.forEach(a=>{
                // ИСКЛЮЧАЕМ пункт "Любой" (any: true) из фильтрации
                if(a.checked && !a.any) languages.push(a.code);
            });

            data.year.items.forEach(a=>{
                if(a.selected && !a.any){
                    let need = type == 'movie' ? 'primary_release_date' : 'first_air_date';

                    if(a.title.indexOf('-') >= 0){
                        query.push(need+'.lte='+a.title.split('-')[0]+'-12-31');
                        query.push(need+'.gte='+a.title.split('-')[1]+'-01-01');
                    }
                    else{
                        query.push((type == 'movie' ? 'primary_release_year' : 'first_air_date_year') + '=' + a.title);
                    }
                }
            });

            data['genres_'+type].items.forEach(a=>{
                // ИСКЛЮЧАЕМ пункт "Любой" (any: true) из фильтрации
                if(a.checked && !a.any) genres.push(a.id);
            });

            if(cat == 'multmovie' || cat == 'multtv' && genres.indexOf(16) == -1) genres.push(16);
            
            if(cat == 'movie' || cat == 'tv') query.push('without_genres=16');

            if(genres.length){
                query.push('with_genres='+genres.join(','));
            }

            if(cat == 'anime' && languages.indexOf('ja') == -1) languages.push('ja');

            if(languages.length){
                query.push('with_original_language='+languages.join('|'));
            }

            return 'discover/' + type + '?' + query.join('&');
        }

        /**
         * Запрос для CUB
         * @returns {string} - строка запроса
         */
        function queryForCUB(){
            let query    = [];
            let cat      = data.type.items.find(s=>s.selected).cat;
            let type     = cat.indexOf('movie') >= 0 ? 'movie' : 'tv';
            let genres   = [];
            let sort     = data.sort.items.find(s=>s.selected && s.sort);
            let quality  = data.quality.items.find(s=>s.selected && s.uhd);
            let languages = [];

            data.rating.items.forEach(a=>{
                if(a.selected && (a.voite || a.start)){
                    if(a.start){
                        query.push('vote='+a.start);
                    }
                    else{
                        query.push('vote='+a.voite.split('-')[0]+'-'+a.voite.split('-')[1]);
                    }
                }
            });

            data.language.items.forEach(a=>{
                // ИСКЛЮЧАЕМ пункт "Любой" (any: true) из фильтрации
                if(a.checked && !a.any) languages.push(a.code.split('|')[0]);
            });

            data.year.items.forEach(a=>{
                if(a.selected && !a.any){
                    if(a.title.indexOf('-') >= 0){
                        query.push('airdate='+a.title.split('-')[1]+'-'+a.title.split('-')[0]);
                    }
                    else{
                        query.push('airdate='+a.title);
                    }
                }
            });

            data.pgrating.items.forEach(a=>{
                if(a.selected){
                    if(a.title.indexOf('-') >= 0){
                        query.push('pgrating='+a.pg.split('-')[0]+'-'+a.pg.split('-')[1]);
                    }
                    else{
                        query.push('pgrating='+a.pg);
                    }
                }
            });

            data['genres_'+type].items.forEach(a=>{
                // ИСКЛЮЧАЕМ пункт "Любой" (any: true) из фильтрации
                if(a.checked && !a.any) genres.push(a.id);
            });

            if(cat == 'multmovie' || cat == 'multtv' && genres.indexOf(16) == -1) genres.push(16);

            if(cat == 'movie' || cat == 'tv') query.push('without_genres=16');

            if(genres.length){
                query.push('genre='+genres.join(','));
            }

            if(cat == 'anime') type = 'anime';

            if(languages.length){
                query.push('language='+languages.join(','));
            }

            if(sort) query.push('sort='+sort.sort);

            if(quality) query.push('uhd=true');

            return '?cat=' + type + '&' + query.join('&');
        }

        /**
         * Запуск поиска
         */
        function search(){
            window.Lampa.Controller.toggle('content');

            let source = window.Lampa.Storage.field('source');
            let query  = source == 'cub' ? queryForCUB() : queryForTMDB();

            let activity = {
                url: query,
                title: window.Lampa.Lang.translate('title_filter') + ' +',
                component: 'category_full',
                source: source == 'cub' ? 'cub' : 'tmdb',
                card_type: true,
                page: 1
            };

            let object = window.Lampa.Activity.active();

            if(object.component == 'category_full' && (object.url.indexOf('discover') == 0 || object.url.indexOf('?cat=') == 0)) window.Lampa.Activity.replace(activity, true);
            else window.Lampa.Activity.push(activity);
        }

        /**
         * Выбор элемента с автосохранением
         * @param {Array} where - массив элементов
         * @param {Object} a - выбранный элемент
         */
        function select(where, a){
            where.forEach(element => {
                element.selected = false;
            });

            a.selected = true;
            
            // АВТОСОХРАНЕНИЕ
            saveFilterSettings();
        }

        /**
         * Обновление подзаголовка с автосохранением
         * @param {Object} where - объект с массивом items
         */
        function selected(where){
            let title = [];

            where.items.forEach((a)=>{
                // Для чекбоксов с пунктом "Любой" - особая логика
                if(a.any && a.checked) {
                    // Если выбран "Любой", очищаем остальные чекбоксы
                    where.items.forEach(item => {
                        if(item !== a && item.checkbox) {
                            item.checked = false;
                        }
                    });
                    title.push(a.title);
                } 
                // Для обычных чекбоксов
                else if(a.checkbox && a.checked && !a.any) {
                    // Если выбрали обычный чекбокс, снимаем "Любой"
                    where.items.forEach(item => {
                        if(item.any && item.checkbox) {
                            item.checked = false;
                        }
                    });
                    title.push(a.title);
                }
                // Для радио-кнопок
                else if(a.selected) {
                    title.push(a.title);
                }
            });

            where.subtitle = title.length ? title.join(', ') : window.Lampa.Lang.translate('nochoice');
            
            // АВТОСОХРАНЕНИЕ (для чекбоксов и радио-кнопок)
            saveFilterSettings();
        }

        /**
         * Подменю с обработкой пункта "Любой"
         * @param {Object} item - объект элемента
         */
        function submenu(item){
            window.Lampa.Select.show({
                title: item.title,
                items: item.items,
                onBack: main,
                onSelect: (a)=>{
                    // Для чекбоксов с пунктом "Любой"
                    if(item.items.some(i => i.checkbox) && a.any) {
                        // Если выбрали "Любой", очищаем все остальные чекбоксы
                        item.items.forEach(i => {
                            if(i.checkbox) {
                                i.checked = (i === a);
                            }
                        });
                    }
                    // Для радио-кнопок
                    else if(!a.checkbox) {
                        select(item.items, a);
                    }
                    // Для обычных чекбоксов
                    else if(a.checkbox && !a.any) {
                        // Инвертируем состояние чекбокса
                        a.checked = !a.checked;
                        
                        // Если выбрали обычный чекбокс, снимаем "Любой"
                        item.items.forEach(i => {
                            if(i.any && i.checkbox) {
                                i.checked = false;
                            }
                        });
                    }
                    
                    // Обновляем подзаголовок и сохраняем
                    selected(item);
                    main();
                }
            });
        }

        /**
         * Запуск фильтра
         */
        function show(){
            // Проверяем наличие всех зависимостей
            if (!window.Lampa.Select || !window.Lampa.Controller || 
                !window.Lampa.Activity || !window.Lampa.Lang || 
                !window.Lampa.Storage) {
                console.error('Фильтр +: Не все зависимости доступны');
                console.log('Доступны:', {
                    Select: !!window.Lampa.Select,
                    Controller: !!window.Lampa.Controller,
                    Activity: !!window.Lampa.Activity,
                    Lang: !!window.Lampa.Lang,
                    Storage: !!window.Lampa.Storage
                });
                
                if (window.Lampa.Noty) {
                    window.Lampa.Noty.show('Фильтр временно недоступен', 3000);
                }
                return;
            }
            
            main();
        }
        
        // ---- ВОССТАНОВЛЕНИЕ НАСТРОЕК ПРИ ИНИЦИАЛИЗАЦИИ ----
        loadFilterSettings();
        
        // Возвращаем публичный интерфейс как в оригинале
        return {
            show: show,
            // Для отладки экспортируем данные
            _data: data,
            _queryForTMDB: queryForTMDB,
            _queryForCUB: queryForCUB
        };
    }
    
    // Инициализация плагина
    function initPlugin() {
        try {
            // Сначала проверяем только Lampa.Menu для добавления пункта
            if (!window.Lampa || !window.Lampa.Menu || typeof window.Lampa.Menu.addButton !== 'function') {
                console.error('Фильтр +: Lampa.Menu.addButton не доступен');
                return false;
            }
            
            // Создаем иконку
            const iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
                           '<path fill="currentColor" d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.88V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3H19C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z"/>' +
                           '</svg>';
            
            // Создаем функцию обертку, которая инициализирует модуль при первом вызове
            let filterInitialized = false;
            
            function showFilter() {
                console.log('Фильтр +: Запуск фильтра...');
                
                // Создаем модуль при первом вызове
                if (!filterInitialized) {
                    console.log('Фильтр +: Инициализация модуля...');
                    
                    // Проверяем все зависимости
                    const deps = ['Select', 'Controller', 'Activity', 'Lang', 'Storage'];
                    const missingDeps = [];
                    
                    deps.forEach(dep => {
                        if (!window.Lampa[dep]) {
                            missingDeps.push(dep);
                        }
                    });
                    
                    if (missingDeps.length > 0) {
                        console.error('Фильтр +: Отсутствуют зависимости:', missingDeps);
                        if (window.Lampa.Noty) {
                            window.Lampa.Noty.show('Фильтр: недостающие компоненты: ' + missingDeps.join(', '), 4000);
                        }
                        return;
                    }
                    
                    FilterPlusModule = createFilterModule();
                    filterInitialized = true;
                    console.log('✅ Фильтр +: Модуль успешно инициализирован');
                }
                
                // Вызываем show из модуля
                if (FilterPlusModule && FilterPlusModule.show) {
                    FilterPlusModule.show();
                } else {
                    console.error('Фильтр +: Модуль не инициализирован');
                }
            }
            
            // Добавляем пункт в главное меню
			
            const menuButton = window.Lampa.Menu.addButton(
                iconSvg, 
                'Фильтp +', //Пока так. (буква p латинская). Если оставить с переводом - при скрытии стандартного фильтра, скрывает и этот. оставляю в TODO
                showFilter
            );
            
            if (menuButton && menuButton.addClass) {
                menuButton.addClass('filter-plus-button');
            }
            
            // Также регистрируем глобально для вызова из других мест
            window.Lampa.FilterPlus = { show: showFilter };
            
            console.log('✅ Фильтр +: Пункт меню добавлен');
            return true;
            
        } catch (error) {
            console.error('Фильтр +: Ошибка инициализации:', error);
            return false;
        }
    }
    
    
    function startInitialization() {
        if (window.Lampa && window.Lampa.Listener) {
            // Официальный способ через Listener
            window.Lampa.Listener.follow('app', function(event) {
                if (event.type === 'ready') {
                    console.log('Фильтр +: Приложение готово, инициализируем...');
                    initPlugin();
                }
            });
        } else if (window.appready) {
            // Если приложение уже готово
            console.log('Фильтр +: Приложение уже готово, инициализируем...');
            initPlugin();
        } else {
            // Fallback: ждем Lampa
            setTimeout(function() {
                if (window.Lampa) {
                    console.log('Фильтр +: Lampa загружена, инициализируем...');
                    initPlugin();
                } else {
                    console.log('Фильтр +: Ожидание загрузки Lampa...');
                    setTimeout(startInitialization, 1000);
                }
            }, 500);
        }
    }
    
    // Запускаем
    startInitialization();
    

})();