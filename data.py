from qiskit.algorithms.minimum_eigensolvers import QAOA
from qiskit_ibm_provider import IBMProvider
from qiskit.algorithms.optimizers import COBYLA

installation_costs = {
    'Supermarket_1': 30000,
    'Church_1': 10000,
    'Sport_center': 44000,
    'Supermarket_2': 40000,
    'Shopping_center_2': 27000,
    'Shopping_center_1': 35000,
    'Cinema': 52000,
    'University_1': 65000,
    'Library': 22000,
    'Park_1': 18000,
    'Museum': 42000,
    'Train_station': 54000,
    'Airport': 97000,
    'Hospital': 72000,
    'Office_building': 55000
}

traffic_values = {
    'Supermarket_1': [0.06, 0.21, 0.86, 0.38, 0.16, 0.06, 0.38],
    'Church_1': [0.74, 0.74, 0.6, 0.45, 0.22, 0.08, 0.15],
    'Sport_center': [0.30, 0.5, 0.51, 0.50, 0.46, 0.06, 0.73],
    'Supermarket_2': [0.91, 0.24, 0.98, 0.70, 0.89, 0.42, 0.2],
    'Shopping_center_2': [0.54, 0.59, 0.11, 0.29, 0.15, 0, 0],
    'Shopping_center_1': [0.28, 0.84, 0.25, 0.07, 0.13, 0.31, 0.19],
    'Cinema': [0.40, 0.77, 0.99, 0.90, 0.84, 0.10, 0.58],
    'University_1': [0.03, 0.014, 0.86, 0.48, 0.71, 0.73, 0.99],
    'Library': [0.56, 0.96, 0.79, 0.14, 0.28, 0.09, 0.35],
    'Park_1': [0.82, 0.66, 0.42, 0.18 , 0.24, 0.72, 0.39],
    'Museum': [0.18, 0.49, 0.62, 0.37, 0.93, 0, 0],
    'Train_station': [0.27, 0.08, 0.73, 0.15, 0.81, 0.98, 0.39],
    'Airport': [0.43, 0.19, 0.023, 0.094, 0.84, 0.69, 0.12],
    'Hospital': [0.61, 0.023, 0.72, 0.25, 0.44 ,0.79, 0.59],
    'Office_building': [0.075, 0.34, 0.58, 0.72, 0.42, 0, 0]
}

# Total available budget
budget = 200000

# Number of potential EVCS locations
num_qubits = 15

# Search for the best locations for EVCS taking into account the traffic values and the installation costs
# of each location.
provider = IBMProvider()
backend = provider.get_backend("ibmq_qasm_simulator")
