import {
  QinColumn,
  QinLine,
  QinButton,
  QinLabel,
  QinExplorer,
} from "qinpel-cps";

class Abacuz extends QinColumn {
  private qinTopBar = new QinLine();
  private qinLoad = new QinButton({
    label: new QinLabel("Load"),
  });
  private qinUp = new QinButton({
    label: new QinLabel("Up"),
  });
  private qinExplorer = new QinExplorer();

  public constructor() {
    super();
    this.qinTopBar.install(this);
    this.qinLoad.install(this.qinTopBar);
    this.qinLoad.addAction((ev) => {
      if (ev.isPrimary) {
        this.qinExplorer.load("", (loaded) => {
          this.qinpel().frame.statusInfo(loaded);
        });
      }
    });
    this.qinUp.install(this.qinTopBar);
    this.qinUp.addAction((ev) => {
      if (ev.isPrimary) {
        this.qinExplorer.goFolderUp((loaded) => {
          this.qinpel().frame.statusInfo(loaded);
        });
      }
    });
    this.qinTopBar.putAsFlexMin();
    this.qinExplorer.install(this);
    this.qinExplorer.putAsFlexMax();
  }
}

new Abacuz().putAsBody();
