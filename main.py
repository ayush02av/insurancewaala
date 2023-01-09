from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def index():
    return render_template('index.html')

@app.route('/dashboard', methods = ['GET'])
def dashboard():
    return render_template('dashboard.html')

@app.route('/about', methods = ['GET'])
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug = True)