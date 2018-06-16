# Angular Form Comparison

This project is the homework for understand and comparing what different in Template Driven Form and Model Driven Form in Angular(2+).
You can go into the homework and create a new branch to try coding the angular form yourself. And you can compare your result with the answer in this repository.

## Starter
1. Clone this github repository
```shell
git clone https://github.com/linnilsupak/angular-form-comparison.git
```
2. Create a new branch from the master branch as a start up project.
```shell
git checkout -b [name_of_your_new_branch]
```
3. go into the homework to creating the angular login form.

## Homework
On your own branch create from starter, create a login form with two inputs: username and password. If user still did not input the valid value, the form must not let the user submit the form and tell the user why they can not. The condition for valid input fields are as below.
+ username: required the value
+ password: required the value and the password must be long or longer than 6 characters.

We have 3 homeworks for you in total, please look below to complete them.
1. Create the homework form with template driven form on template-driven-form component.
<a href='https://codecraft.tv/courses/angular/forms/template-driven/'>Template Driven Form Tutorial Link</a>
2. Create the homework form with model driven form on model-driven-form component.
<a href='https://codecraft.tv/courses/angular/forms/model-driven/'>Model Driven Form Tutorial Link</a>
<a href='https://codecraft.tv/courses/angular/forms/model-driven-validation/'>Model Driven Form Validatoin Tutorial Link</a>
3. Continue from model-driven-form component, you can write unit test for the login form on model-driven-form.component.spec.ts file.
<a href='https://codecraft.tv/courses/angular/unit-testing/model-driven-forms/'>Model Driven Form Unit Test Tutorial Link</a>

## How to look at the answer
+ To look into the answer for homework#1, change the branch to template-driven-form-answer. 
```shell
git checkout template-driven-form-answer
```
+ To look into the answer for homework#2, change the branch to model-driven-form-answer.
```shell
git checkout model-driven-form-answer
```
+ To only look at the final result and comparing what different between two angular form, change the branch to comparison.
```shell
git checkout comparison
```
+ To look into the answer for homework#3, change the branch to test-unit.
[in-progress]

## In Conclusion
Model Driven Form have a friendly code structor which is easier for maintenance than template driven form.
And the Model Driven Form support the unit test too. From this two points, you can see it is better to write in model driven form than template driven form.

