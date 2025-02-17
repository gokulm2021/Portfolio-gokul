from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import time  # Add this import at the top

app = Flask(__name__, static_url_path='')
CORS(app)

# Email configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "gokulapriyan1979@gmail.com"  # Your Gmail address
SENDER_PASSWORD = "edrp zsbm zinu hfgi"   # Your Gmail app password
RECIPIENT_EMAIL = "gokulapriyan1979@gmail.com"

# Serve static files
@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory('assets', path)

@app.route('/script.js')
def send_js():
    return send_from_directory('.', 'script.js')

@app.route('/page.css')
def send_css():
    return send_from_directory('.', 'page.css')

@app.route('/mediaqueries.css')
def send_mediaqueries():
    return send_from_directory('.', 'mediaqueries.css')

# Main route
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/send_email', methods=['POST'])
def send_email():
    try:
        # Simulate processing time (optional, remove in production)
        time.sleep(1.5)
        
        data = request.json
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')

        # Create email message
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"Portfolio Contact: {subject}"

        body = f"""
        New message from your portfolio website:
        
        Name: {name}
        Email: {email}
        Subject: {subject}
        
        Message:
        {message}
        """

        msg.attach(MIMEText(body, 'plain'))

        # Send email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(msg)

        return jsonify({"message": "Email sent successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 