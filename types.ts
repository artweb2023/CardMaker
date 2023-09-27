type Editor = {
    id: number,
    type: Array<CommandHistory | CardTemplate | Canvas>,
};

type CommandHistory = {
    commandType: string,
    timestamp: Date,
};

type CardTemplate = {
    id: number,
    description: string,
    elements: Array<TextInfo | Image | ArtObject>,
};

type Canvas = {
    id: number,
    width: number,
    height: number,
    backgroundColor: number,
    elements: Array<TextInfo | Image | ArtObject>,
};

type Filter = {
    color: number,
};

type ActiveObject = {
    id: number,
    elements: Array<TextInfo | Image | ArtObject>,
};

type TextInfo = {
    id: number,
    type: 'text',
    value: string,
    fontSize: number,
    fontFamily: string,
    color: number,
    bold: boolean,
    x: number,
    y: number,
};

type Image = {
    id: number,
    path: string;
    source: 'computer' | 'Pixels',
    width: number,
    height: number,
    x: number,
    y: number,
};

type ArtObject = {
    id: number,
    type: string,
    width: number,
    height: number,
    color: number,
    x: number,
    y: number,
};