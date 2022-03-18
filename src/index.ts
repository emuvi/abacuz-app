import {
  QinAsset,
  QinButton,
  QinColumn,
  QinExplorer,
  QinIcon,
  QinLine,
} from "qinpel-cps";
import { QinGrandeur } from "qinpel-res";

class Abacuz extends QinColumn {
  private qinTopBar = new QinLine();
  private qinLoad = new QinButton({
    icon: new QinIcon(QinAsset.FaceRedo, QinGrandeur.SMALL),
  });
  private qinUp = new QinButton({
    icon: new QinIcon(QinAsset.FaceArrowUp, QinGrandeur.SMALL),
  });
  private qinExplorer = new QinExplorer();

  public constructor() {
    super();
    this.qinTopBar.install(this);
    this.qinLoad.install(this.qinTopBar);
    this.qinLoad.addAction((ev) => {
      if (ev.isPrimary) {
        this.qinExplorer.reload((loaded) => {
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
