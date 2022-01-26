# Datak LP Renewel in January 2022

## Standard Operational Procedure (SOP)
### Branch
- `main` : master branch for deployment. to be merged by `develop` branch for production. used for gh-page.
- `develop : used for local development.`  
### Pull Request for multiple developer and Deployment
1. Use `develop` branch for a work
1. Upon completion of the work, push `develop` branch to github, and create `Pull Request`
1. Datak downloads zip file (or pull) and confirm changes. Note, this site only includes front end and no local server is needed for rendering
1. Datak accepts the pull request and merges
