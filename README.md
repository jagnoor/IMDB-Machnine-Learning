# IMBD-Machnine-Learning: Final Project for 2022 University of Minnesota Data Analytics Bootcamp

Final Project for 2010 University of Minnesota  Data Analytics Bootcamp IMDb Machine Learning by Jon, Mallory, Habibe and Jag. This project is focused on designing models to predict IMDB movie ratings based on genre, year of release, budget, duration, and director.

## Method and Detail

 We sourced our data from [Kaggle.com](https://www.kaggle.com/stefanoleone992/imdb-extensive-dataset/) which featured a set of CSV files with information regarding movies rated by IMDB users dating back from 1906 to 2019.

Link to Dataset: https://www.kaggle.com/stefanoleone992/imdb-extensive-dataset/

### Methods Used
* Data Cleaning
* Data Visualization

## ETL
``movie_cleaning.ipynb`` was used to complete ETL on ``IMDB_movies.csv`` and ``IMDB_ratings.csv`` to generate ``imdb_final.csv``. This final CSV is the basis for the data used in machine learning. These files are saved in ``Resources``.

## Preprocessing 
The data from ``imdb_final.csv`` needed to be preprocessed. First, the number of classes was identified for each set of categorical data, then that data was reformmated, label-encoded, and one-hot encoded to be used for the machine learning. 

## Scaling
The data may need to be scaled.

## Multiple Linear Regression
Multiple linear regression is the use of more than one feature variable to model a linear relationship between a single dependent variable (median rating) and independent variables. 

### Technologies
* Python
* Pandas
* Jupyter
* Javascript
* D3
* HTML
* CSS
* Machine Learning Models: 
  - ML Models (Predict RATING (Good, Bad, etc) based on release year, budget, genre, director, duration etc.. 
  - Deep Learning
  - Regression (Multiple)
  - Random Forest (predict the profit of the movie)
* DataTables
* PostgreSQL
