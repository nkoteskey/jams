export default class authoriseAndConnect {
  constructor() {
    this.currentApp = null
    this.appInfo = {
      name: 'Hello SAFE Network',
      id: 'net.maidsafe.tutorials.web-app',
      version: '0.1.0',
      vendor: 'MaidSafe.net Ltd.'
    }
    this.connection = null
  }

  // Authorize application,
  // establish connection to network,
  // and return app handle.
  async appHandle() {
    try {
      if (this.connection) {
        console.log('already connected')
      }
      // Initialize application
      this.safeApp = await window.safe.initialiseApp(this.appInfo);

      const authReqUri = await this.safeApp.auth.genAuthUri();
      const authUri = await window.safe.authorise(authReqUri);
      const connection = await this.safeApp.auth.loginFromUri(authUri);

      console.log(this.safeApp)

      const typeTag = 15001;
      const md = await this.safeApp.mutableData.newRandomPublic(typeTag);

      const initialData = {
        "random_key_1": JSON.stringify({
            text: 'Scotland to try Scotch whisky',
            made: false
          }),
        "random_key_2": JSON.stringify({
            text: 'Patagonia before I\'m too old',
            made: false
          })
      };
      const data = await md.quickSetup(initialData);

      const entries = await md.getEntries();
      const entriesList = await entries.listEntries();

      const items = [];
      entriesList.forEach((entry) => {
        const value = entry.value;
        if (value.buf.length == 0) return;
        const parsedValue = JSON.parse(value.buf);
        items.push({ key: entry.key, value: parsedValue, version: value.version });
      });
      console.log(items)

      return this.safeApp
    } catch(e) {
      throw e
    }
  }

  get safeApp() {
    if (this.currentApp === null
      || this.currentApp === undefined) {
        return undefined
    }
    return this.currentApp
  }

  set safeApp(app) {
    this.currentApp = app
  }
}
