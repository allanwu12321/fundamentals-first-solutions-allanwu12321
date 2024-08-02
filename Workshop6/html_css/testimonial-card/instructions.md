# Testimonial Card Exercise

Follow the instructions below to implement the HTML and Styles to complete the testimonial card exercise.

There is already some basic HTML and CSS set up for you already.

When completing the below instructions, try to save `index.html` after you complete each instructions and inspect the results. This will give you a better idea of what each element and style does.

## Expected Outcome

<img src="./images/TestimonialCardSingle.png" alt="Testimonial Card Expected Result">

## Exercise Instructions

1. Open up `index.html` with Live Server or Preview

2. Create a `<div>` element under the `<h1>` and provide it with a `class` attribute of `testimonial-card`.

3. Provide the following 3 elements inside the `<div>`:

    - a paragraph element with class "quote" that contains the text:
      `"This product has changed my life! Highly recommended for anyone looking to improve their workflow."`
    - another paragraph element with the class "author" that contains the text:
      `- Jane Smith`

    - one final paragrpah element with the class "title" that contains the text:
      `CEO of TechCorp`

4. Save `index.html`, and inspect the results. It should look something like this:

<details>
<summary><b>Screenshot</b></summary>
<img src="./images/testimonial-after-html.png" alt="Testimonial card after adding HTML">

</details>

<br>

5. Now we need to begin to add some CSS styles to style up the page. Open up `styles.css`, and inspect the current styles we have.

6. First, let's begin by changing the font of our page. Inside the existing `body` selector rule set, add a property that changes the font to `Arial, sans-serif`.

7. Then, let's center our testimonial card as well as it's text contents. Inside the existing class selector for `testimonial-card`, add 2 properties that:

    - Set the `margin` to `20px auto`. When we provide 2 values for `margin`, the first value is for the top and bottom margin, and the second value is for the left and right. `auto` for the left and right will center your `testimonial-card`.

    - Set the `text-align` to `center`. This will center the text inside of elements with the class `testimonial-card`

8. Now, we need to center our `<h1>` heading, as well. To do so, create a tag selector for all `h1` tags, and provide it with 1 property that sets `text-align` to `center`.

Save `index.html` and inspect your results.

8. Create a descendant selector for all `quote` class elements inside `testimonial-card` class elements. Inside the new rule set, provide 2 properties:

    - set font color to `#555`
    - set the font style to `italic`

9. Create a descendant selector for all `author` class elements inside `testimonial-card` class elements. Inside the new rule set, provide 3 properties:

    - set the font color to `#333`
    - set the font weight to `bold`
    - set the top margin to `20px`

10. Create a descendant selector for all `title` class elements inside `testimonial-card` class elements. Inside the new rule set, provide 1 properties:

    - set the color to `#777`.

11. Save `index.html` and inspect your results. It should now look like the "Expected Result" above.

12. Finally, create a second testimonial containing the text:

-   a quote:
    `"After trying out this product for the last 18 months, I can no longer imagine my life without it! It's incredibly helpful."`
-   the author:
    `- John Doe`

-   author's title:
    `Senior Web Developer`

13. Save `index.html`, and it should now look like this:

<details>
<summary><b>Screenshot</b></summary>
<img src="./images/TestimonialCardEndResult.png" alt="Final Testimonial card Exercise">

</details>
