class Clock {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startTime = millis();
    }

    updatePosition(x, y) {
        this.x = x;
        this.y = y;
    }

    updateSize(radius) {
        this.radius = radius;
    }

    draw() {
        let elapsedTime = millis() - this.startTime;
        let hours = (elapsedTime / 2000) % 12;

        // Draw hour marks
        for (let i = 0; i < 12; i++) {
            let angle = map(i, 0, 12, 0, 360) - 90;
            let x = this.x + cos(angle) * (this.radius - 20);
            let y = this.y + sin(angle) * (this.radius - 20);
            fill(255);
            noStroke();
            ellipse(x, y, 10, 10);
        }

        // Draw hour hand with smooth movement
        let hourAngle = map(hours, 0, 12, 0, 360) - 90;
        let hourX = this.x + cos(hourAngle) * (this.radius - 40);
        let hourY = this.y + sin(hourAngle) * (this.radius - 40);
        stroke(255);
        strokeWeight(8);
        line(this.x, this.y, hourX, hourY);

        // Draw minute hand (static at 12)
        let minuteAngle = -90;
        let minuteX = this.x + cos(minuteAngle) * (this.radius - 30);
        let minuteY = this.y + sin(minuteAngle) * (this.radius - 30);
        stroke(255);
        strokeWeight(6);
        line(this.x, this.y, minuteX, minuteY);
    }
}
