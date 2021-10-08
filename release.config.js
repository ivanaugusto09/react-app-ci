module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/ivanaugusto09/react-app-ci",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
