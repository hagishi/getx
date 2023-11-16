import * as vscode from "vscode"
import { GetxCodeActionProvider } from "./provider"
import { wrapWithGetX, wrapWithObx } from "./command"

const DART_MODE = { language: "dart", scheme: "file" }

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.wrap-getx", wrapWithGetX),
    vscode.commands.registerCommand("extension.wrap-obx", wrapWithObx),
    vscode.languages.registerCodeActionsProvider(
      DART_MODE,
      new GetxCodeActionProvider()
    )
  )
}

export function deactivate() {}
