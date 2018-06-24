# Angular Form Comparison Homework

This project is the homework for understanding and comparing what different in Template Driven Form and Model Driven Form in Angular(2+).
You can go into the homework and create a new branch to try coding the angular form yourself. And you can compare your result with the answer in this repository.

## Starter
1. Clone this github repository
```shell
git clone https://github.com/linnilsupak/angular-form-comparison.git
```
2. Checkout homework-base branch
```shell
git checkout homework-base
```
3. Create a new branch from the master branch as a start up project.
```shell
git checkout -b [name_of_your_new_branch]
```
4. go into the your own branch to create the angular login form.

## Homework
On your own branch create from starter, create a login form with two inputs: username and password. If user still did not input the valid value, the form must not let the user submit the data and tell the user why they can not. The condition for valid input fields are as below.
+ username: required the value
+ password: required the value and the password must be long or longer than 6 characters.

We have 6 homeworks for you in total, please look below to complete them.
1. Create the form with template driven form on template-driven-form component.
<a href='https://codecraft.tv/courses/angular/forms/template-driven/'>Template Driven Form Tutorial Link</a>
2. Create the form with model driven form on model-driven-form component.
<a href='https://codecraft.tv/courses/angular/forms/model-driven/'>Model Driven Form Tutorial Link</a>
<a href='https://codecraft.tv/courses/angular/forms/model-driven-validation/'>Model Driven Form Validatoin Tutorial Link</a>
3. Create unit test for app component. Import all the module need on this compponent and write the router test in app.component.spect.ts file
<a href='https://codecraft.tv/courses/angular/unit-testing/routing/'>Routing Unit Test Tutorial Link</a>
4. Continue from model-driven-form component, you can write unit test for the login form on model-driven-form.component.spec.ts file.
<a href='https://codecraft.tv/courses/angular/unit-testing/model-driven-forms/'>Model Driven Form Unit Test Tutorial Link</a>
5. Continue from template-driven-form component, you can write unit test for the login form on template-driven-form.component.spec.ts file.
<a href='https://codecraft.tv/courses/angular/unit-testing/components/'>Model Driven Form Unit Test Tutorial Link</a>
6. For the final step, try creating e2e test for both Angular forms.

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
+ To look into the answer for homework#3, #4 and #5, change the branch to test-unit.
```shell
git checkout test-unit
```

## In Conclusion
+ Model Driven Form have a friendly code structure which is easier for maintenance and unit test than template driven form.

From this two points, you can see it is better to write in model driven form than template driven form.

