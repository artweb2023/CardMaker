const textInfo: TextInfo = {
    id: 1,
    type: 'text',
    value: 'Пример текста',
    fontSize: 14,
    fontFamily: 'Arial',
    color: 0xFF0000,
    bold: true,
    x: 10,
    y: 20,
};

const image: Image = {
    id: 1,
    path: '/путь/к/изображению1.jpg',
    source: 'computer',
    width: 100,
    height: 80,
    x: 50,
    y: 60,
};


const artObject: ArtObject = {
    id: 1,
    type: 'круг',
    width: 50,
    height: 50,
    color: 0x0000FF,
    x: 80,
    y: 100,
};


const activeObject: ActiveObject = {
    id: 1,
    elements: [textInfo, image],
};

const filter1: Filter = {
    color: 0xFF0000,
};

const cardTemplate: CardTemplate = {
    id: 1,
    description: 'Шаблон карточки 1',
    elements: [textInfo, image],
};


const canvas: Canvas = {
    id: 1,
    width: 800,
    height: 600,
    backgroundColor: 0xFFFFFF,
    elements: [textInfo, image, artObject],
};

const commandHistory: CommandHistory = {
    commandType: 'создание элемента',
    timestamp: new Date(),
};

const editor: Editor = {
    id: 1,
    type: [commandHistory, cardTemplate, canvas],
};
