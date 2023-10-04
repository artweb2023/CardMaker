const positionData: Position = {
    x: 100,
    y: 200,
};

const colorData: Color = {
    color: "#472A3F",
};

const sizeData: Size = {
    width: 800,
    height: 600,
};

const textInfoData: TextInfo = {
    id: 1,
    type: 'text',
    value: 'Пример текста',
    fontSize: 16,
    fontFamily: 'Arial',
    color: colorData,
    bold: true,
    coursive: false,
    underline: true,
    position: positionData,
};

const imageData: Image = {
    id: 2,
    type: 'image',
    source: 'link',
    size: sizeData,
    position: positionData,
};

const artObjectData: ArtObject = {
    id: 3,
    type: 'ArtObject',
    width: 100,
    height: 100,
    border_color: { color: "#03FA00" },
    background: { color: "#02FA00" },
    position: positionData,
};

const activeObjectData: ActiveObject = {
    id: 4,
    elements: [textInfoData, imageData, artObjectData],
};

const canvasData: Canvas = {
    size: sizeData,
    background: colorData,
    elements: [textInfoData, imageData, artObjectData],
    active: activeObjectData,
};

const filterData: Filter = {
    color: colorData,
};

