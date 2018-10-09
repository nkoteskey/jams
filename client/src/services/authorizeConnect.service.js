export default class authoriseAndConnect {
  constructor() {
    this.currentApp = null
    this.appInfo = {
      name: 'Hello SAFE Network',
      id: 'net.maidsafe.tutorials.web-app',
      version: '0.1.0',
      vendor: 'MaidSafe.net Ltd.'
    }
  }

  // Authorize application,
  // establish connection to network,
  // and return app handle.
  async appHandle() {
    try {
      if (this.safeApp) {
        throw 'Already connected to the network.'
      }

      // Initialize application
      this.safeApp = await window.safe.initialiseApp(this.appInfo);

      // Connect to network and login
      const authReqUri = await this.safeApp.auth.genAuthUri();
      const authUri = await window.safe.authorise(authReqUri);
      await this.safeApp.auth.loginFromUri(authUri);

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
