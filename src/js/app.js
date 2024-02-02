import {Game} from "./modules/game.js";

class App {

    // задаем параметри сетки
    settings = {
        positionsCount: 25, // количество клеток в сетке
        positionsSize: 25, // размер 1 ячейки в пикселях
    }

    constructor() {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', (this.settings.positionsCount * this.settings.positionsSize).toString());
        canvas.setAttribute('height', this.settings.positionsCount * this.settings.positionsSize);
        document.getElementById('container').appendChild(canvas);

        const context = canvas.getContext('2d'); //указываем, что это двухмерная графика

        new Game(context, this.settings);
    }
}

(new App());

