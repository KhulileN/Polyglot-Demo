import sys
import json

# Read input (from Node.js)
data = json.loads(sys.stdin.read())
number = data.get("number", 0)

# Pretend this is an ML model prediction
result = number * number  # just square it for demo

# Send result back
print(json.dumps({"prediction": result}))
