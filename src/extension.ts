import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "push-vibes.pushVibes",
    async () => {
      try {
        vscode.window.showInformationMessage("✨ Pushing vibes...");

        // Git Stage All
        await vscode.commands.executeCommand("git.stageAll");

        // Generate Commit Message
        await vscode.commands.executeCommand("cursor.generateGitCommitMessage");

        // Commit
        await vscode.commands.executeCommand("git.commit");

        // Push
        await vscode.commands.executeCommand("git.push");

        vscode.window.showInformationMessage("Vibes pushed successfully! 🚀");
      } catch (error) {
        vscode.window.showErrorMessage(`💔 Failed to push vibes: ${error}`);
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
