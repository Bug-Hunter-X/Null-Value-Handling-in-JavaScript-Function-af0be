# Null Value Handling in JavaScript Function

This repository demonstrates a common error in JavaScript related to null value handling and provides a solution.

## The Bug

The `bug.js` file contains a function `foo` that attempts to add two numbers. However, it doesn't correctly handle cases where one or both inputs are null. This can lead to unexpected behavior or runtime errors.

## The Solution

The `bugSolution.js` file shows how to fix this issue by explicitly checking for null values and handling them appropriately. A robust solution will use strict equality (===) to avoid type coercion issues and return a default value or throw an error if null values are encountered.

This example highlights the importance of comprehensive null checks in JavaScript functions to prevent unexpected behavior and ensure data integrity.