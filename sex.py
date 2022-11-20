
# 1. ADD
# 2. SUBTRACT
# 3. MULTIPLY
# 4. DIVIDE
# 5. Exponentiation
from pdb import Restart
from turtle import clear
import math


def calculator():

    print("select what operation you want")
    print("1. ADD")
    print("2. SUBTRACT")
    print("3. MULTIPLY")
    print("4. DIVIDE")
    print("5. EXPONENTIATION")
    print("6. SQUARE ROOT")

    operation = input()

    if operation == "1":
        num1 = input("Enter first number: ")
        num2 = input("Enter second number: ")
        print(int(num1) + int(num2))
        # code for add
    elif operation == "2":
        num1 = input("Enter first number: ")
        num2 = input("Enter second number: ")
        print(int(num1) - int(num2))
        # code for subtract
    elif operation == "3":
        num1 = input("Enter first number: ")
        num2 = input("Enter second number: ")
        print(int(num1) * int(num2))
        # code for multiply
    elif operation == "4":
        num1 = input("Enter first number: ")
        num2 = input("Enter second number: ")
        print(int(num1) / int(num2))
        # code for divide
    elif operation == "5":
        num1 = input("Enter first number: ")
        num2 = input("Enter second number: ")
        print(int(num1) ** int(num2))
    elif operation == "6":
        num1 = input("Enter first number: ")
        print(math.sqrt(int(num1)))
    else:
        print("Invalid entry")

    Restart = input("restart y/n").lower()
    if Restart == "y":
        calculator()


calculator()
