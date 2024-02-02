import {NumberUtils} from "../utils/number-utils.js";

export class Food {

    foodRadius = null;
    context = null;
    positionsCount = null;
    positionsSize = null;
    foodPosition = {
        x: 1,
        y: 1
    }

    constructor(context, positionsCount, positionsSize) {
        this.context = context;
        this.positionsCount = positionsCount;
        this.positionsSize = positionsSize;
        this.foodRadius = this.positionsSize / 2;

         this.fruits = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍇", "🍈", "🍉", "🍌", "🍍", "🍎", "🍓", "🫐", "🍒", "🍑", "🥭", "🥥", "🥝"];

        this.currentFruitIndex = Math.floor(Math.random() * this.fruits.length);

    }

    setNewFoodPosition() {
        this.foodPosition = {
            x: NumberUtils.getRandomInt(1, this.positionsCount),
            y: NumberUtils.getRandomInt(1, this.positionsCount),
        }
    }

    showFood() {

        /*this.context.fillStyle = 'rgb(243, 80, 109)';
        this.context.fillStyle = 'white';

        this.context.beginPath();
        this.context.arc(this.foodPosition.x * this.positionsSize - this.foodRadius,
            this.foodPosition.y * this.positionsSize - this.foodRadius, this.foodRadius, 0, 2 * Math.PI);
        this.context.fill();*/

        // const fruitSymbol = "🍏";

        /*const fruits = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍇", "🍈", "🍉", "🍌", "🍍", "🍎", "🍓", "🫐", "🍒", "🍑", "🥭", "🥥", "🥝"];


        const randomFruitIndex = Math.floor(Math.random() * fruits.length);
        const fruitSymbol = fruits[randomFruitIndex];*/
        const fruitSymbol = this.fruits[this.currentFruitIndex];

        // координаты центра ячейки
        const centerX = (this.foodPosition.x - 0.5) * this.positionsSize + this.positionsSize / 8;
        const centerY = (this.foodPosition.y - 0.5) * this.positionsSize - this.positionsSize / 10;

        this.context.font = '25px sans-serif';
        this.context.textAlign = 'center'; // добавлено выравнивание по центру
        this.context.textBaseline = 'middle';
        // отрисовка фруктов в центре ячейки
        this.context.fillText(
          fruitSymbol,
          centerX,
          centerY
        );
    }

    // Метод для обновления текущего фрукта после съедания фрукта
    updateFruit() {
        this.currentFruitIndex = Math.floor(Math.random() * this.fruits.length);
    }
}