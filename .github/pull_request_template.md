Pull requests into cql-execution require the following.
Submitter and reviewer should ✔ when done.
For items that are not-applicable, mark "N/A" and ✔.

[CDS Connect](https://cds.ahrq.gov/cdsconnect) and [Bonnie](https://github.com/projecttacoma/bonnie) are the main users of this repository.
It is strongly recommended to include a person from each of those projects as a reviewer.

**Submitter:**
- [ ] This pull request describes why these changes were made
- [ ] Code diff has been done and been reviewed (it does not contain: additional white space, not applicable code changes, debug statements, etc.)
- [ ] Tests are included and test edge cases
- [ ] Tests have been run locally and pass
- [ ] Code coverage has not gone down and all code touched or added is covered.
- [ ] Code passes lint and prettier (hint: use `npm run test:plus` to run tests, lint, and prettier)
- [ ] All dependent libraries are appropriately updated or have a corresponding PR related to this change
- [ ] `cql4browsers.js` built with `npm run build:browserify` if source changed.

**Reviewer:**

Name:
- [ ] Code is maintainable and reusable, reuses existing code and infrastructure where appropriate, and accomplishes the task’s purpose
- [ ] The tests appropriately test the new code, including edge cases
- [ ] You have tried to break the code
