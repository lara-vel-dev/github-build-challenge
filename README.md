 The application aims to help people achieve the objectives and goals they want to achieve in a given time. To do this, it has an activity log and visual support in the form of an animated chicken, designed to be more user-friendly. This chicken represents the growth and advancement of the user. In addition, it includes an artificial intelligence model that provides emotional support through small motivational phrases, adapted to what is recorded in the app.
Users will be able to choose between different periods to work on their goals: 21 days, 90 days, 180 days, 270 days and 360 days.
The visual support of the chicken has three phases:
Egg: Represents the beginning, where the user is in the planning and goal-setting phase.
Growing Chicken: Indicates progress, showing that the user is actively working on their goals and developing.
Chicken: Symbolizes achievement, when the user has met their goal.

Chicken growth.
It is important to note that the growth of the chicken depends on the frequency with which the user records their progress. The application takes into account how constant user interaction is, understanding that there are times when, for various reasons, progress cannot be made as planned. Whether due to lack of time, energy or unforeseen situations, the fact of recording these situations is also taken into account.
Our goal is to support users in developing habits and achieving goals, in a kind way and without generating guilt.. We want the process to be positive and encouraging, respecting each person's pace.


Logical development. 
For the logical part of the chicken's growth depending on the user's selected period it will be as follows: 
As said previously, the growth will be in three parts, but two more are contemplated, intermediate between the growth from egg to growing chicken and from chicken to growth to chicken. 
So we say that: 
Chicken → 100%, and there are 4 phases before reaching your goal, so each phase represents 25%. 
So when the period in which the user wants to achieve their goal or objective is obtained, it will be divided by four, example: 

The user selected the period of 270 days. 
270➗4 = 67.5 this represents the days that must be constant to obtain the next growth. 

AI model. 
The clustering model is developed, with the K-means library.  a library that implements the k-means algorithm and can be used to group data into clusters. To use it, you must provide a data vector, the number of clusters (k) and a callback function. The library initializes the centroids and clusters, and then iterates to adjust the centroids based on the mean of the data in each cluster.
For our specific case they will be divided into 4 clusters: 
1. I did the activity, and I am well emotionally. 
2.I didn't do the activity, but I'm fine emotionally. 
3.I was not active, and I am not well emotionally. 
4.I did the activity, but I'm not emotionally there. 



