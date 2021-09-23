type ShiftCipher = {
  type: "shift"
  value: number
}

type Base64 = {
  type: "base64"
  direction: "encode" | "decode"
}

type Module = ShiftCipher | Base64

type State = {
  modules: Module[]
}

const initialState: State = { modules: [] }

type Action =
  | { type: "add-module"; module: Module }
  | { type: "remove-module"; index: number }

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "add-module":
      return { ...state, modules: [...state.modules, action.module] }
    case "remove-module":
      return { ...state, modules: state.modules.splice(action.index, 1) }
    default:
      throw new Error(`Unknown Action: ${action}`)
  }
}
