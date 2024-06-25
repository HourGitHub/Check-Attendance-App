from app import app, db
from app.models import User

with app.app_context():
    db.create_all()  # Create tables if they don't exist

    # Check if the admin user already exists
    if User.query.filter_by(username='admin').first() is None:
        admin = User(username='admin', email='admin@admin.com')
        admin.set_password('admin')
        db.session.add(admin)
        db.session.commit()
        print("Admin user created.")
    else:
        print("Admin user already exists.")
