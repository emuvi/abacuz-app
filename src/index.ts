import { QinColumn, QinLabel } from "qinpel-cps"

class Abacuz extends QinColumn {

    private qinHello: QinLabel = new QinLabel("Hello, Abacuz world!");

    public constructor() {
        super();
        this.qinHello.install(this);
    }

}

new Abacuz().putAsBody();