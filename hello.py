from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<h1>Hello, World!</h1>'
@app.route('/fact')
def fact():
   fact =1
   n=5
   for i in range(1,n):
       fact=fact*i
   return fact
if __name__=="__main__":
    app.run(debug=True,port=8080)
