# Project Setup Guide

This guide outlines the steps to set up your local workspace for projects.

## GitHub Branch Setup

This project uses Github Branching Strategy, it simplifies Git-Flow by eliminating release branches. It revolves around one active development branch (often main or master) that is directly deployed to production. Features and bug fixes are implemented using long-living feature branches. Feedback loops and asynchronous collaboration, common in open-source projects, are encouraged.

### Working with Projects

1. Create a feature branch from your respective main branch:
   - Type: feature
   - From branch: `main`
   - Branch name: `feature/<project-name>/<short-feature-description>`
     - Example: `feature/PICO/social-media-integration`

## Workspace Setup

### Working with Projects

1. Checkout your individual feature branch created for your project.
2. Make changes to your files. Remember to make small, logical changes that are easy to understand and review.
3. Stage your changes by using `git add .` for all changes or `git add <file>` for specific files.
4. Before committing, review your changes by using `git diff --staged`. This will show you what you're about to commit.
5. Regularly push your changes to the remote repository with `git push`. This ensures that your work is backed up and available to others.
6. When your feature is complete, create a pull request for your changes to be reviewed and merged into the main branch.
7. Respond to any feedback on your pull request and make changes as necessary. Once your pull request is approved, it can be merged into the main branch.

## Important Things to Remember

- All commit messages must follow this pattern:
  `<Project Name>: <Brief Summary of the Work>`
  - Example: `PICO: Implemented responsive design for project`

- Create a pull request from your feature branch to the main branch.