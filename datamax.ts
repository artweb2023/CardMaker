const textInfoData1: TextInfo = {
    id: 1,
    type: 'text',
    value: 'Пример текста 1',
    fontSize: 16,
    fontFamily: 'Arial',
    color: { color: "#FFA8AF" },
    bold: true,
    coursive: false,
    underline: true,
    position: positionData,
};

const textInfoData2: TextInfo = {
    id: 2,
    type: 'text',
    value: 'Пример текста 2',
    fontSize: 14,
    fontFamily: 'Times New Roman',
    color: { color: "#FFEFD5" },
    bold: false,
    coursive: true,
    underline: false,
    position: positionData,
};

const imageData1: Image = {
    id: 3,
    type: 'image',
    source: 'link',
    size: { width: 500, height: 400 },
    position: positionData,
};

const imageData2: Image = {
    id: 4,
    type: 'image',
    source: 'bs64',
    size: { width: 400, height: 300 },
    position: { x: 300, y: 400 },
};

const artObjectData1: ArtObject = {
    id: 5,
    type: 'ArtObject',
    width: 100,
    height: 100,
    border_color: { color: "#7B512D" },
    background: { color: "#8D917A" },
    position: positionData,
};

const artObjectData2: ArtObject = {
    id: 6,
    type: 'ArtObject',
    width: 200,
    height: 150,
    border_color: { color: "#4C5866" },
    background: { color: "#472A3F" },
    position: { x: 150, y: 250 },
};

const commandHistoryData: CommandHistory = {
    commandType: 'Изменение',
    timestamp: new Date(),
};

const cardTemplateData: CardTemplate = {
    id: 5,
    description: 'Пример шаблона',
    elements: [textInfoData1, imageData1, artObjectData1],
    background: colorData,
    size: sizeData,
};

const editorData: Editor = {
    canvas: [canvasData],
    template: [cardTemplateData],
    history: commandHistoryData,
};