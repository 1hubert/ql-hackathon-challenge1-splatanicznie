from qiskit.algorithms.minimum_eigensolvers import QAOA
from qiskit_ibm_provider import IBMProvider
from qiskit.algorithms.optimizers import COBYLA

installation_costs = {
    'Supermarket_1': 30000,
    'Shopping_center_1': 35000,
    'Cinema': 52000,
    'University_1': 45000,
}

traffic_values = {
    'Supermarket_1': [0.06, 0.21, 0.86, 0.38, 0.16, 0.06, 0.38],
    'Shopping_center_1': [0.54, 0.59, 0.11, 0.29, 0.15, 0, 0],
    'Cinema': [0.40, 0.77, 0.99, 0.90, 0.84, 0.10, 0.58],
    'University_1': [0.03, 0.014, 0.86, 0.48, 0.71, 0.73, 0.99],
}

# Total available budget
budget = 200000
