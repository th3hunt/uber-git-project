export default class {

    bark() {
        return 'wild bark';
    }

    stay({force = false}) {
        return force || Math.random() > 0.5;
    }

    catchBall(ball, distance = 10) {
        return new Promise((resolve, reject) => {
            if (!ball) {
                reject('no ball given!');
            }
            setTimeout(resolve(ball), distance * 1000);
        });
    }

}