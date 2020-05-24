
class Fly {
    constructor(image, canvas, pos_x, pos_y) {
        this.image = image;
        this.speed = this.initSpeed();
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.canvas = canvas;
        this.direction = this.getDirection()
        this.countIterOneDirection = 5;
        this.currentIterOneDirection = 0;
    }


    initSpeed () {
        return getRandomIntInclusive(1, 5);
    }


    gettingOutEdge() {
        let isEdge = false;
        let percent = 30;

        if (this.pos_x >= this.canvas.width - percent)
        {
            this.pos_x -= this.speed;
            isEdge = true;
        }
        if (this.pos_x <= 0)
        {
            this.pos_x += this.speed;
            isEdge = true;
        }
        if (this.pos_y >= this.canvas.height - percent)
        {
            isEdge = true;
            this.pos_y -= this.speed;
        }
        if (this.pos_y <= 0)
        {
            isEdge = true;
            this.pos_y += this.speed
        }
        return isEdge

    }

    move() {
        let isEdge = this.gettingOutEdge()
        if (isEdge)
            return;
        if (this.currentIterOneDirection >= this.countIterOneDirection)
        {
            this.currentIterOneDirection = 0;
            this.direction = this.getDirection();
        }

        switch (this.direction) {
            case 0:
                this.pos_y -= this.speed;
                break;
            case 1:
                this.pos_x += this.speed;
                this.pos_y -= this.speed;
                break;
            case 2:
                this.pos_x += this.speed;
                break;
            case 3:
                this.pos_x += this.speed;
                this.pos_y += this.speed;
                break;
            case 4:
                this.pos_y += this.speed;
                break;
            case 5:
                this.pos_x -= this.speed;
                this.pos_y += this.speed;
                break;
            case 6:
                this.pos_x -= this.speed;
                break;
            case 7:
                this.pos_x -= this.speed;
                this.pos_y -= this.speed;
                break;

        }
        this.currentIterOneDirection += 1

    }

    getDirection() {
        // Возвращается рандомное направление движения мухи,
        // 0 - верх
        // 1 - вправо вверх
        // 2 - вправо
        // 3 - вправо вниз
        // 4 - вниз
        // 5 - влево вниз
        // 6 - влево
        // 7 - влево вверх
        return getRandomIntInclusive(0, 7)
    }

    isClicked(x, y) {
        return this.pos_x <= x && x <= this.pos_x + this.image.width && this.pos_y <= y && y <= this.pos_y + this.image.height
    }








}