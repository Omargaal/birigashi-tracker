import type { Express } from "express";
import { createServer, type Server } from "http";
import { getUncachableGitHubClient } from "./github";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/publish-to-github", async (req, res) => {
    try {
      const { repoName, description, isPrivate } = req.body;

      if (!repoName) {
        return res.status(400).json({ error: "Repository name is required" });
      }

      const octokit = await getUncachableGitHubClient();
      
      const user = await octokit.rest.users.getAuthenticated();
      const username = user.data.login;

      let repo;
      let repoExists = false;

      try {
        const existingRepo = await octokit.rest.repos.get({
          owner: username,
          repo: repoName,
        });
        repo = existingRepo.data;
        repoExists = true;
      } catch (error: any) {
        if (error.status === 404) {
          repo = await octokit.rest.repos.createForAuthenticatedUser({
            name: repoName,
            description: description || "BiriGashi Investment Tracker - Property investment dashboard",
            private: isPrivate ?? false,
            auto_init: false,
          }).then(r => r.data);
        } else {
          throw error;
        }
      }

      await execAsync('git init');
      await execAsync('git add .');
      await execAsync('git commit -m "Update: BiriGashi Investment Tracker" || true');
      await execAsync(`git branch -M main`);
      await execAsync(`git remote add origin https://github.com/${username}/${repoName}.git || git remote set-url origin https://github.com/${username}/${repoName}.git`);
      
      const accessToken = await getUncachableGitHubClient().then(client => (client as any).auth);
      await execAsync(`git push -u https://${accessToken}@github.com/${username}/${repoName}.git main --force`);

      res.json({
        success: true,
        repoUrl: repo.html_url,
        repoName: repo.full_name,
        updated: repoExists,
      });
    } catch (error: any) {
      console.error("GitHub publish error:", error);
      res.status(500).json({ 
        error: error.message || "Failed to publish to GitHub",
        details: error.response?.data || error.toString()
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
