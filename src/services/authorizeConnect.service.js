export default class authoriseAndConnect {
  constructor() {
    this.safeAppHandle = null
    this.appInfo = {
      name: 'Hello SAFE Network',
      id: 'net.maidsafe.tutorials.web-app',
      version: '0.1.0',
      vendor: 'MaidSafe.net Ltd.'
    }
    this.authUri = null
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
      const currentHandle = await window.safe.initialiseApp(this.appInfo);

      this.safeAppHandle = await currentHandle.auth.genAuthUri();
      this.authUri = await window.safe.authorise(this.safeAppHandle);
      this.connection = await currentHandle.auth.loginFromUri(this.authUri);

      this.currentAppHandle = currentHandle
      console.log(this.currentAppHandle)

      return this.currentAppHandle
    } catch(e) {
      throw e
    }
  }

  get currentAppHandle() {
    if (this.currentAppHandle === null
      || this.currentAppHandle === undefined) {
        return undefined
    }
    return this.currentAppHandle
  }

  set currentAppHandle(handle) {
    this.currentAppHandle = handle
  }
}
