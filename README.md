# yield-predict-hub

This repository contains my Smart India Hackathon project prototype. Yield Predict Hub predicts crop yield using data such as weather, soil, and past production. This prototype is built only for PPT submission, so it shows the main idea and basic workflow.

Overview

Yield Predict Hub helps estimate crop yield for a given season. It takes inputs like rainfall, temperature, soil pH, area, and previous yield, then uses a simple ML model to generate a prediction. The goal is to show how data driven insights can support farmers and planning teams.

Features

Works on sample CSV datasets for weather, soil, and past yield.

Includes a basic preprocessing and model training notebook.

Flask API for prediction.

Simple frontend to enter data and view predicted yield.

Clean, easy to understand prototype structure.

How it works

Data from CSV files is cleaned and converted into features.

A regression model, such as Random Forest, predicts yield.

The backend exposes a /predict API.

The frontend sends inputs and displays model output.

Running the prototype


Purpose

This is not a full product, only a working SIH PPT submission prototype to show the idea, flow, and feasibility of the solution.
