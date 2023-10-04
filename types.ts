type Editor = {
    canvas: Array<Canvas>,
    template: Array<CardTemplate>,
    history: CommandHistory,
};

type CommandHistory = {
    commandType: string,
    timestamp: Date,
};

type CardTemplate = {
    id: number,
    description: string,
    elements: Array<TextInfo | Image | ArtObject>,
    background: Color | Image,
    size: Size,

};

type Canvas = {
    size: Size,
    background: Color | Image,
    elements: Array<TextInfo | Image | ArtObject>,
    active: ActiveObject | null,
};

type Filter = {
    color: Color,
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
    color: Color,
    bold: boolean,
    coursive: boolean,
    underline: boolean,
    position: Position,
};

type Image = {
    id: number,
    type: 'image',
    source: 'bs64' | 'link',
    size: Size,
    position: Position,
};

type ArtObject = {
    id: number,
    type: 'ArtObject',
    width: number,
    height: number,
    border_color: Color,
    background: Color,
    position: Position,
};

type Position = {
    x: number,
    y: number,
};

type Color = {
    color: string,
};

type Size = {
    width: number,
    height: number,
};
