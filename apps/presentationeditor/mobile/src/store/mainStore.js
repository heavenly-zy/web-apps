
import {storeAppOptions} from './appOptions';
// import {storeDocumentSettings} from './documentSettings';
import {storeFocusObjects} from "./focusObjects";
import {storeUsers} from '../../../../common/mobile/lib/store/users';
import {storeApplicationSettings} from './applicationSettings';
import {storePresentationInfo} from './presentationInfo';
import {storePresentationSettings} from './presentationSettings';
import { storePalette } from './palette';
import { storeSlideSettings } from './slideSettings';
import { storeTextSettings } from './textSettings';
import { storeShapeSettings } from './shapeSettings';
// import {storeTextSettings} from "./textSettings";
// import {storeParagraphSettings} from "./paragraphSettings";
// import {storeShapeSettings} from "./shapeSettings";
// import {storeImageSettings} from "./imageSettings";
import {storeTableSettings} from "./tableSettings";
// import {storeChartSettings} from "./chartSettings";
import {storeLinkSettings} from "./linkSettings";

export const stores = {
    storeAppOptions: new storeAppOptions(),
    storeFocusObjects: new storeFocusObjects(),
    // storeDocumentSettings: new storeDocumentSettings(),
    users: new storeUsers(),
    storeApplicationSettings: new storeApplicationSettings(),
    storePresentationInfo: new storePresentationInfo(),
    storePresentationSettings: new storePresentationSettings(),
    storeSlideSettings: new storeSlideSettings(),
    storePalette: new storePalette(),
    storeTextSettings: new storeTextSettings(),
    storeShapeSettings: new storeShapeSettings(),
    // storeTextSettings: new storeTextSettings(),
    // storeParagraphSettings: new storeParagraphSettings(),
    // storeShapeSettings: new storeShapeSettings(),
    // storeChartSettings: new storeChartSettings(),
    storeTableSettings: new storeTableSettings(),
    storeLinkSettings: new storeLinkSettings()
};

