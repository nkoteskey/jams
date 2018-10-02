// Create mutable data, store it, and return handle
export default class createMutableData {
    constructor(data, appHandle) {
        this.typeTag = 1500
        this.mdHandle = null
        this.initialData = data
        this.safeAppHandle = appHandle
    }
    async initialiseMD() {
        this.currentMDHandle = await this.currentAppHandle.mutableData.newRandomPublic(this.typeTag)
    }
    async storeMD() {
        await this.initialiseMD()
        await window.safeMutableData.quickSetup(this.mdHandle, this.initialData);
        return this.currentMDHandle = await this.storeMD()
    }

    get currentMDHandle() {
        if (this.mdHandle == null
            || this.mdHandle == undefined) {
                return undefined
        }
        return this.mdHandle
    }

    set currentMDHandle(handle) {
        this.mdHandle = handle
    }
}
