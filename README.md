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

### sscs compile
- `cd common`
- for entire scss folder compile, `sass scss css` <span style="color:red">seems this does not work and needs each single file</span>
- for a compile, `sass scss/xxx.scss css/xxx.css` and scss change is combiled and reflected
- under contents directory, there are page specific file, such as `top.scss` and `privacy.scss`. meanwhile `style.scss` is for entire application and are based on 4 component, `_base.scss`, `_fonts.scss`, `_layout.scss`, `_settings.scss`.

### External Link (Datak Lab)
- lab.datak.biz, digital ocean droplet which has 2 CMSs, one for blog and other for gallery