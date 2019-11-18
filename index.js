const  core = require("@actions/core");

try {
  const ref = process.env["GITHUB_REF"] || "";
  const branchMatch = ref.match(/^refs\/heads\/(.+?)$/);
  const tagMatch = ref.match(/^refs\/tags\/(.+?)$/);
  if (branchMatch) {
    core.exportVariable('GIT_BRANCH', branchMatch[1]);
  } else if (tagMatch) {
    core.exportVariable('GIT_TAG', tagMatch[1]);
  }
} catch (error) {
  core.setFailed(error.message);
}
