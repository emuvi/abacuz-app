import { QinColumn, QinLine, QinButton, QinLabel, QinExplorer } from "qinpel-cps"

class Abacuz extends QinColumn {

    private qinTopBar = new QinLine();
    private qinTest = new QinButton({
        label: new QinLabel("Test")
    });
    private qinExplorer = new QinExplorer();

    public constructor() {
        super();
        this.qinTopBar.install(this);
        this.qinTest.install(this.qinTopBar);
        this.qinTopBar.putAsFlexMin();
        this.qinExplorer.install(this);
        this.qinExplorer.putAsFlexMax();
    }

}

new Abacuz().putAsBody();
