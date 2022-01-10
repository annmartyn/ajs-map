import ErrorRepository from '../app.js';

let errorRep = new ErrorRepository();

errorRep.add('400', 'Некорректный запрос');
errorRep.add('403', 'Запрещено');
errorRep.add('403', 'Не найдено');
errorRep.add('500', 'Внутренняя ошибка сервера');

test('translate error ', () => {
    expect(errorRep.translate('400')).toEqual('Некорректный запрос');
});

test('no such error ', () => {
    expect(errorRep.translate('409')).toEqual('Unknown error!');
});

