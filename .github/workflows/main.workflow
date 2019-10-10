workflow "Code Checks" {
  on = "push"
  resolves = ["Format", "Lint", "Build", "Test"]
}

action "Install Dependencies" {
  uses = "actions/npm@v2.0.0"
  args = "ci"
}

action "Format" {
  uses = "actions/npm@v2.0.0"
  needs = "Install Dependencies"
  args = "run format"
}

action "Lint" {
  uses = "actions/npm@v2.0.0"
  needs = "Install Dependencies"
  args = "run lint"
}

action "Build" {
  uses = "actions/npm@v2.0.0"
  needs = "Install Dependencies"
  args = "run build"
}

action "Test" {
  uses = "docker://node:11-slim"
  needs = "Install Dependencies"
  runs = "npm test"
}

workflow "Security Check" {
  on = "push"
  resolves = "Security"
}

action "Security" {
  uses = "./"
  needs = "Install Dependencies"
  env = {
    ECOSYSTEM = "npm"
    SEVERITY = "low"
    NO_DEV = "true"
  }
  secrets = ["GITHUB_TOKEN"]
}

workflow "License Check" {
  on = "push"
  resolves = "Licenses"
}

action "Licenses" {
  uses = "actions/licensed/node@v1.0.0"
  args = "status"
}
