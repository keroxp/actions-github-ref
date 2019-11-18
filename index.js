const  core = require("@actions/core");

try {
  const ref = process.env["GITHUB_REF"] || "";
  const branchMatch = ref.match(/^refs\/heads\/(.+?)$/);
  const tagMatch = ref.match(/^refs\/tags\/(.+?)$/);
  if (branchMatch) {
    core.exportVariable('GITHUB_BRANCH', branchMatch[1]);
  } else if (tagMatch) {
    core.exportVariable('GITHUB_TAG', tagMatch[1]);
  }
} catch (error) {
  core.setFailed(error.message);
}