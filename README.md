# yarn-talk-demo
This is a demo repository for the Yarn Talk presentation, focused on dependency management and resolution.

## Installation
You need verdaccio up and running to install the packages. You can start it with `yarn start-verdaccio`.

Then, you can install the packages with `yarn install`.

## Usage

To test the current package resolution, you can run `yarn start`.
You can open http://localhost:4873/ in your browser to see the verdaccio UI.

## Steps (tags)
Main branch is the last step, and each step is tagged with a version number.
You can checkout to a specific step with `git checkout v1` for example.

- v1. @yarn-talk/external-dep installed, using @yarn-talk/internal-dep@0.1.0
- v2. published @yarn-talk/internal-dep@0.1.1
- v3. @yarn-talk/external-dep2 installed, using @yarn-talk/internal-dep@0.1.1
- v4. @yarn-talk/internal-dep deduped to 0.1.1
- v5. @yarn-talk/external-dep3 installed, using @yarn-talk/internal-dep@0.1.0 (fixed version)
- v6. Used resolutions to force @yarn-talk/internal-dep@0.1.1
- v7. Patched @yarn-talk/internal-dep manually
