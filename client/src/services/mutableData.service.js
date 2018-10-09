// Create mutable data, store it, and return handle
export default class createMutableData {
  constructor(data, appHandle, type) {
      this.typeTag = type
      this.mdHandle = null
      this.initialData = data
      this.safeAppHandle = appHandle
  }

  async initialiseMD() {
      this.currentMDHandle = await this.safeApp.mutableData.newRandomPublic(this.typeTag)
  }

  async storeMD() {
    await this.initialiseMD()
    return await this.currentMDHandle.quickSetup(this.initialData)
  }

  async getMD() {
    const entries = await this.currentMDHandle.getEntries()
    const entriesList = await entries.listEntries()
    const items = []
    entriesList.forEach((entry) => {
      const value = entry.value
      if (value.buf.length == 0) return
      const parsedValue = JSON.parse(value.buf)
      items.push({ key: entry.key, value: parsedValue, version: value.version })
    })
    return items
  }

  async insertMD(key, value) {
    const mutations = await this.safeApp.mutableData.newMutation()
    await mutations.insert(key, JSON.stringify(value))
    return await this.currentMDHandle.applyEntriesMutation(mutations)
  }

  async updateMD(key, value, version) {
    const mutations = await this.safeApp.mutableData.newMutation()
    await mutations.insert(key, JSON.stringify(value), version + 1)
    return await this.currentMDHandle.applyEntriesMutation(mutations)
  }

  async function deleteMD(items) {
    const mutations = await this.safeApp.mutableData.newMutation()
    items.forEach(async (item) => {
      await mutations.delete(item.key, item.version + 1)
    })
    return await this.currentMDHandle.applyEntriesMutation(mutations)
};

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

  get safeApp() {
    if (this.safeAppHandle === null
      || this.safeAppHandle === undefined) {
        return undefined
    }
    return this.safeAppHandle
  }
}
