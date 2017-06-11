export default class {

    bark() {
        return 'bark';
    }

    stay({force = false}) {
        return force || Math.random() > 0.5;
    }

}