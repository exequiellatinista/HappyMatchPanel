import { ClientModel } from "~/models"

export default {
  setClient(state, payload) {
    state.client = new ClientModel(payload)
  }
}