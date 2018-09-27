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
        // Initialize application
        console.log('Initialising SAFE application...')
        const currentHandle = await window.safe.initialiseApp(this.appInfo);

        this.safeAppHandle = await currentHandle.auth.genAuthUri();
        this.authUri = await window.safe.authorise(this.safeAppHandle);
        console.log('SAFE application authorised by user');

        this.connection = await currentHandle.auth.loginFromUri(this.authUri);
        console.log("Application connected to the network");

        this.currentAppHandle = currentHandle
        console.log(this.currentAppHandle)
        console.log(this.authUri)
        console.log(this.connection)

        return this.currentAppHandle
    }

    get currentAppHandle() {
        if (this.safeAppHandle == null
            || this.safeAppHandle == undefined) {
                return undefined
        }
        return this.safeAppHandle
    }

    set currentAppHandle(handle) {
        this.safeAppHandle = handle
    }
}
