# Watch-Circle <br />
## CSC307 project - Allen Y. / Bharath S. / Johnson H. / Spencer W. <br />

## Project blurb:

For avid TV watchers who want to organize their many TV shows, Watch Circle is an organizational management system that helps users keep track of streaming shows as well as their status. Unlike TVguide.com which is just a watchlist with news on popular shows, our product expands on the watchlist and allows more personal user interaction. Each user is able to create a unique account with a unique username and password (to protect their account from malicious activity and) to store their list of shows with information associated with that show. 


## UI Prototype Link: 
https://www.figma.com/file/efv7KYuLqvz4EM5WINTwM4/Untitled?node-id=2%3A25

Date Last Updated: October 19, 2021

NOTE: This was the initial design; ideas for the design changed during the project.

## Development environment set up: 
### Frontend
1. Make sure Node.js and npm are on the computer with the npm -version command.<br />
2. npm install <br />
3. npm install axios <br />
4. npm install react-router <br />
5. npm start <br />

### Backend
1. create virtual environment and install flask <br />
2. pip install pymongo <br />
3. export FLASK_APP=sample_backend.py <br />
4. export FLASK_ENV=development <br />
5. flask run <br />

### Pycodestyle for database and backend: 
https://pypi.org/project/pycodestyle/<br />
#### Installation: <br />
$ pip install pycodestyle <br /> 
#### To upgrade:
$ pip install --upgrade pycodestyle
<br/><br />

### Prettier for javascript/React <br />
https://prettier.io/docs/en/install.html
#### Installation: <br />
1. npm install --save-dev --save-exact prettier <br />
2. Create an empty config file to let editors and other tools know you are using Prettier: <br />
  echo {}> .prettierrc.json

3. Create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example: <br />
  Ignore artifacts: <br />
  build <br />
  coverage<br />
4. Format files: npx prettier --write <br />
5. If continuous integration is setup, use npx prettier --check . <br />
    --check is like --write, but only checks that files are already formatted, rather than overwriting them.    <br />

## Diagrams
Both Diagram Links: https://docs.google.com/document/d/1-TFnqucEWcKkSWiop7_jRDeiRM48CloReB8wWLm5G2I/edit?usp=sharing
- Includes Use Case and Class Diagram with last updated dates


## Unit Test 100% Code Coverage
Link to Screenshot Proof: https://drive.google.com/file/d/1fi3Q6qqGshg2cP80dPri6N6nflbCbZYH/view?usp=sharing

### Code Coverage:
1. coverage run -m pytest
2. coverage report -m model_mongodb.py

## Continuous Integration
Link to Project CI: https://github.com/yual-len-git/Watch-Circle/actions

NOTE: We used gitHub actions for our continuous integration and unit testing.
- Current build and build history is visible