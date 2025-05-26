[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/JvuoiQme)
# React JS - Lab Day 3

**Goal:** Create a multi-page CRUD application and implement hooks such as `useReducer`, `useContext`, and `memo`.

## Instructions ✅

1. Create a new React project by running `npm create vite@latest lab-3-crud`.
2. Create at least 5 routes for your application:

    - Home `/`
    - Blog Listing `/blog`
    - Blog Detail `/blog/1` (where 1 is the id)
    - Add Post `/blog/new`
    - Edit Post `/blog/edit/1` (where 1 is the id)

3. Implement CRUD functionality for the the blog. Store the data and CRUD functions inside a `useReducer` hook. Place the reducer inside a `useContext` so that the reducer array and dispatch function are shared and can be accessed anywhere in the appplication. For the article properties, you can have:

    - id `string` (uuid)
    - title `string`
    - content `string`
    - published `boolean`

4. Add a **Create** button to the blog listing page which redirects you to the *Add Post* route.
5. Add an **Edit** button inside the blog detail page which redirects you to the *Edit Post* route to modify the title and content.
6. Add a **Delete** button inside the blog detail page which just removes the article from the reducer array. You can install a toast package such as `react-hot-toast` for the deletion notification.
7. Create a header and footer component for your application. For the `Header.tsx`, include a navigation menu with links to your home and blog pages.
8. Pass a static string as a prop to your header component called `firstname` and include your first name. Display your first name to the far right of your header. Since the `firstname` prop is static and doesn't change, memoized your header component by wrapping it inside a `memo` HOC.
9. For the footer component, just include the usual copyright text.
10. Commit and push your changes once you are done.

Good luck! 🎉🎉🎉
