from flask import render_template, redirect, url_for, flash, request
from app import app, db
from app.models import User
from flask_login import current_user, login_user, logout_user, login_required

@app.route('/')
@app.route('/index')
@login_required
def index():
    return render_template('admin/navleft_menu.html', title='Dashboard')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user is None or not user.check_password(password):
            flash('Invalid username or password')
            return redirect(url_for('login'))
        login_user(user, remember=request.form.get('remember_me'))
        return redirect(url_for('index'))
    return render_template('auth/login.html', title='Sign In')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/api/dashboard', methods=['GET'])
@login_required
def get_dashboard_data():
    return {"message": "Welcome to the Admin Dashboard!"}


@app.route('/dashboard')
@login_required
def dashboard_user():
    return render_template('admin/views/dashboard.html')

@app.route('/dashboardtest')
@login_required
def dashboard_user1():
    return render_template('admin/views/dashboard1.html')


@app.route('/attendances')
@login_required
def attendances_user():
    return render_template('admin/views/attendances.html')

@app.route('/kpi')
@login_required
def kpi_user():
    return render_template('admin/views/kpi.html')

@app.route('/leave')
@login_required
def leave_user():
    return render_template('admin/views/leave.html')

@app.route('/overtime')
@login_required
def overtime_user():
    return render_template('admin/views/overtime.html')

@app.route('/notification')
@login_required
def notification_user():
    return render_template('/admin/views/notifications.html')

@app.route('/settings')
@login_required
def setting_user():
    return render_template('admin/views/setting.html')

@app.route('/report')
@login_required
def report_user():
    return render_template('admin/views/reports.html')


