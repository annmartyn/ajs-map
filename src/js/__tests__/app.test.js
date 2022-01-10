import ErrorRepository from '../app.js';

let errorRep = new ErrorRepository();

errorRep.add('400', '������������ ������');
errorRep.add('403', '���������');
errorRep.add('403', '�� �������');
errorRep.add('500', '���������� ������ �������');

test('translate error ', () => {
    expect(errorRep.translate('400')).toEqual('������������ ������');
});

test('no such error ', () => {
    expect(errorRep.translate('409')).toEqual('Unknown error!');
});

