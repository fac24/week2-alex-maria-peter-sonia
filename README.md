# 🍦 iScream 🍨

### Designed and Developed by:
  - [Maria](https://github.com/mariaalouisaa): Scrum Facilitator
  - [Alex](https://github.com/lascellesabercrombie): Devops
  - [Sonia](https://github.com/sonianb): Quality Assurance
  - [Peter](https://github.com/PJSalter): UX Lead
    

## Summary

A site for posting about ice cream, made with Postgres so that your opinions are stored indefinitely.

![colourful](https://user-images.githubusercontent.com/45575016/169480293-3e179398-5a3d-4001-aa50-6f9c4c531f85.gif)


## User Stories

- I have strong opinions on ice cream and want to share them
- I want to read others' views on ice cream
- I like structure and want a tailored form in which to submit my opinions
- I use a screen reader and want to post and read posts

## User Journey

- User arrives on home page
- User fills out a form outlining their views on ice cream
- User arrives on a page where they can see the views of others as well as their own

![strawberry](https://user-images.githubusercontent.com/45575016/169480333-2ed7e9d5-e437-4f2b-8e35-242fae802d9f.gif)

## Schemata

We used two tables for this project: firstly, a table __*users*__ to store information about users of the site; secondly, a table __*ice_cream_posts*__ to store information on those users opinions and comments on ice cream. 

### schema for __*users*__ table
<img src="https://user-images.githubusercontent.com/68148169/169509727-d5a29221-bda0-42c1-920d-c3f4c6b978d9.png" alt="users table showing columns for id, username, age and fandom level with some entries" width="400">

### schema for __*ice_cream_posts*__ table
<img src="https://user-images.githubusercontent.com/68148169/169509814-734f1acd-6096-4ba2-8767-3495cc259015.png" alt="ice_cream_posts table showing columns for id, user_id, base_flavour, topping and comment with some entries" width="600">




