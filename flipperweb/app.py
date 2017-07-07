from flask import Flask
from flask import jsonify

from flipperweb.decorators import crossdomain


app = Flask(__name__)


@app.route('/ajax/hello/<int:num>')
@crossdomain(origin='*')
def hello(num):
    resp = {
        'serverMessage': 'Hello from the server! (received {})'.format(num)
    }
    return jsonify(resp)


@app.route('/ajax/feature_flags')
@crossdomain(origin='*')
def feature_flags_list():
    resp = {
        'featureFlags': [
            'FIRST_FLAG',
            'SECOND_FLAG',
        ]
    }
    return jsonify(resp)
