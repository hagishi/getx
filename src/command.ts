import { wrapWith } from "./wrap"

const getXSnippet = (widget: string) => {
  return `GetX<$1Controller>(
  builder: (controller) {
    return ${widget};
  },
)`
}

const ObxSnippet = (widget: string) => {
  return `Obx(() => ${widget})`
}

export const wrapWithGetX = async () => wrapWith(getXSnippet)
export const wrapWithObx = async () => wrapWith(ObxSnippet)
