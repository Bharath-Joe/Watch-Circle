# Watch-Circle <br />
## CSC307 project <br />

### Project blurb:


### UI Prototype Link: 
https://www.figma.com/file/efv7KYuLqvz4EM5WINTwM4/Untitled?node-id=2%3A25
NOTE: This was the initial design; ideas for the design changed during the project.

### Development environment set up
### Frontend
1. Make sure Node.js and npm are on the computer with the npm -version command.<br />
2. npm install <br />
3. npm install axios <br />
4. npm start <br />

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

### Code Coverage:
1. coverage run -m pytest
2. coverage report -m model_mongodb.py

### Diagrams
Date Last Updated: October 22, 2021
Use Case Diagram Link: https://drive.google.com/file/d/14rY5RwrlTYSnf7xCbdogzuB-6OGbmN7y/view?usp=sharing 

Date Last Updated: ____ 
Class Diagram Link: ____