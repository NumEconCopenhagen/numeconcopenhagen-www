---
title: "Welcome to Introduction to Programming and Numerical Analysis"
---

This course introduces **you** to programming and enables you to numerically solve simple economic models and perform basic data analysis. This will e.g. allow you to both visualize solutions, easily test assumptions with respect to functional forms and parameters, and consider more realistic models, which are solvable numerically but not algebraically. 

We will mostly use the [**Python**](https://www.python.org/) programming language, and focus on well-known  microeconomic and macroeconomic models from the core bachelor courses (Edgeworth, Koopman, Solow, AS-AD etc.). The course requires you to get your hands dirty - programming is not a spectator sport!

All students attending the course will receive 6 months of free access to **[DataCamp](https://www.datacamp.com/home)** (you will receive an e-mail regarding this). In the first classes you will follow online courses at DataCamp to learn the basics of Python. For details, see the **[course plan](/course-plan/)**.

Alternatively, [self-study](/self-study/) is a possibility. 

The course is centered arround four GitHub repositories in **[NumEconCopenhagen](https://github.com/NumEconCopenhagen)**:

1. **[lectures-2019](https://github.com/NumEconCopenhagen/lectures-2019)**: Slides and code for the lectures [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/NumEconCopenhagen/lectures-2019/master?urlpath=lab)
2. **[exercises-2019](https://github.com/NumEconCopenhagen/exercises-2019)**: Problem sets with solutions [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/NumEconCopenhagen/exercises-2019/master?urlpath=lab)
3. **[snippets-2019](https://github.com/NumEconCopenhagen/snippets-2019)**: Useful code examples [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/NumEconCopenhagen/snippets-2019/master?urlpath=lab)
4. **[NumEcon](https://github.com/NumEconCopenhagen/numecon)**: Package for numerical economics [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/NumEconCopenhagen/NumEconNotebooks/master?urlpath=lab)

The **course responsible** is [Jeppe Druedahl](http://web.econ.ku.dk/druedahl/), Assistant Professor, University of Copenhagen, [Center for Economic Behavior and Inequality](https://www.econ.ku.dk/cebi). 

# Guides

To follow this course you need:

1. A **Python enviroment** (we will use [Anaconda](https://www.anaconda.com))
2. A **text editor** (we will use [VSCode](https://code.visualstudio.com/))
3. A **git enviroment**

In the first set of guides you learn how install and run Python:

1. [Installing Python and VSCode](/guides/python-setup)
2. [Running Python in JupyterLab](/guides/jupyterlab) (see also: [Writing markdown](/guides/markdown))
3. [Running Python in VSCode](/guides/vscode-basics) (see also: [Debugging in VSCode](/guides/vscode-debug))

In the second set of guides you learn how to search for answers and ask questions:

1. [Searching for answers using Google and Stackoverflow](/guides/searching)
2. [Asking questions using GitHub issues](/guides/github-issues)

In the third set of guides you learn how to use git:

1. [Using Git in VSCode](/guides/vscode-git)
2. [Submitting to snippets-2019](/guides/snippets)
3. [Creating an interactive version of your code](/guides/mybinder)

# Course Description

This course introduces you to programming and enables you to numerically solve simple economic models and perform basic data analysis. This will e.g. allow you to both visualize solutions, easily test assumptions with respect to functional forms and parameters, and consider more realistic models, which are solvable numerically but not algebraically. 

The course requires no prior experience with programming.

The first part of the course introduces you to programming using the general-purpose Python language. You will learn to write conditional statements, loops, functions, and classes, and to print results and produce static and interactive plots. You will learn to solve simple numerical optimization problems, and draw random number and run simulations. You will learn to test, debug and document your code, and use online communities proactively when writing code. 

The second part of the course give you a brief introduction on how to import data from offline and online sources, structure it, and produce central descriptive statistics. You will learn to estimate simple statistical models on your data.

The third part of the course introduce you to the concept of a numerical algorithm. You will learn how to write simple searching, sorting and optimization algorithms. You will learn to solve linear algebra problems, solve non-linear equations numerically and symbolically, find fixed points, and solve complicated numerical optimization problems relying on function approximation.

You will get hands-on experience with applying the above techniques to solve well-known microeconomic and macroeconomic problems from the core bachelor courses. Specifically, you will work with both a small data analysis project, and a larger model analysis project based on a well-known economic model.

While the course only focus on programming in Python, you will also be equipped to start learning other programming languages (such as MATLAB, R, Julia or even C/C++) on your own.

*For exam information and further details see [kurser.ku.dk](http://kurser.ku.dk/course/a%C3%98ka08232u/2018-2019).*

# Learning _Outcomes_

**Knowledge:**

* Describe the differences between data types (e.g.  strings, booleans, integers and floats)
* Describe the differences between data containers (e.g. lists, dicts and arrays)
* Explain the use of conditionals (if-elseif-else)
* Explain the use of loops (for, while, continue, break)
* Explain the use of functions, methods and classes
* Describe the difference between views and copies of objects
* Explain how to use (pseudo) random numbers
* Explain the notation of numerical algorithms

**Skills:**

* Setup a Python enviroment
* Write Python scripts, functions and notebooks
* Apply error handling and debugging techniques
* Use and write code documentation
* Print results and make static and interactive plots
* Import and export of data from and to csv, excel and online databases
* Perform simple descriptive analysis  of numerical data
* Use numerical equation solvers
* Use symbolic equation solvers
* Use numerical optimizers
* Formulate numerical algorithms from mathematical problems

**Competencies:**

* Work collaboratively on code projects
* Use online communities to find existing code and get help
* Solve mathematical problems numerically
* Solve well-known economic problems numerically
* Perform numerical simulation of stochastic models
* Present and discuss results of a numerical analysis
* Learn new programming tools and languages

# Other ressources

Some recommended online ressources for learning programming relevant to economics are:

1. [Social Data Science](https://abjer.github.io/sds/)
1. [Quantitative Economics](https://lectures.quantecon.org/)
2. [Scipy Lecture notes](https://scipy-lectures.org/)
3. [Econ-Ark](https://econ-ark.org/)
4. [Python for Econometrics](https://www.kevinsheppard.com/Python_for_Econometrics)
5. [Lecture notes by Fernandez-Villaverde](https://www.sas.upenn.edu/~jesusfv/teaching.html)
6. [Lecture notes by Fatih Guvenen](https://fatihguvenen.com/teaching/econ8185-phd-computation-empirics/)
7. [Lecture notes by Gianluca Violante](https://sites.google.com/a/nyu.edu/glviolante/teaching/quantmacro15)
8. [Lecture notes by Wouter J. den Haan](http://www.wouterdenhaan.com/notes.htm)
9. [Python for Computational Science and Engineering](http://www.southampton.ac.uk/~fangohr/training/python/pdfs/Python-for-Computational-Science-and-Engineering.pdf)
10. [Online MATLAB course for students of Economics](https://absalon.ku.dk/courses/25988/pages/online-matlab-course-for-students-of-economics)
11. [Dynamic Programming](https://absalon.ku.dk/courses/25988)

$$ 
\alpha
$$

$\alpha$

~~~
a, b = 1, 2
~~~
