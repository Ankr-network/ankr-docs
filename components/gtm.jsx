import TagManager from 'react-gtm-module';

const GTM_ID = 'GTM-5TQM7WF';

const tagManagerArgs = {
  gtmId: GTM_ID,
};

export function initGoogleGtm() {
  if (GTM_ID && navigator.userAgent !== 'ReactSnap') {
    TagManager.initialize(tagManagerArgs);
  }
}