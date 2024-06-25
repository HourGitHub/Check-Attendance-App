from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_login import LoginManager

app = Flask(__name__)
CORS(app)
app.config.from_object('config.Config')  # Load the configuration
db = SQLAlchemy(app)
login = LoginManager(app)
login.login_view = 'login'

from app import routes, models
