import * as vscode from "vscode"
import { getSelectedText } from "./util"

export class GetxCodeActionProvider implements vscode.CodeActionProvider {
  public provideCodeActions(): vscode.CodeAction[] {
    const editor = vscode.window.activeTextEditor
    if (!editor) return []

    const selectedText = editor.document.getText(getSelectedText(editor))
    if (selectedText === "") return []

    return [
      {
        command: "extension.wrap-obx",
        title: "Wrap with Obx",
      },
      {
        command: "extension.wrap-getx",
        title: "Wrap with GetX",
      },
      // {
      //   command: "extension.wrap-blocselector",
      //   title: "Wrap with GetBuilder",
      // }
    ].map((c) => {
      const action = new vscode.CodeAction(
        c.title,
        vscode.CodeActionKind.Refactor
      )
      action.command = {
        command: c.command,
        title: c.title,
      }
      return action
    })
  }
}
