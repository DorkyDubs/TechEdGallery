# TechEdGallery

Week 2 assignment for Tech Educators bootcamp
🎯 Please mention the requirements you met and which goals you achieved for this assignment.
Using js to create a small gallery with thumbnails that can be used to navigate between images alongside the buttons, with extra steps inplemented to consider accessibilty and page load times depending on screen size.

🎯 Were there any requirements or goals that you were not quite able to achieve?
In transferring the nav bar to mobile I wasn't entirely happy with how it lined up with the other elements on the page.
🎯 If so, could you please tell us what was it that you found difficult about these tasks?
Feel it could be done in a manner which would better adapt to the devices access limitations , such as screen size

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.

Left a lot of notes in the code which essentially do this. Please let me know if it is actually unhelpful or messy and should be avoided. Intending to revist it in the future have left them in for now.

What went really well and what could have gone better?

It works, and it took attention to get some of the accesibility requirements to run properly. These could have easily been taken for granted and failed, but learnt more in addressing them.
That said feel work could be done to help the flow of access by reordering the tabs indexes depending on which image is currently in the main display. Similarly feel it was probably possible to do more with the Aria elements.

In terms of design/asthetics feel it is imperfect, and would have prefer a solution where the mobile/desktop versions switch automatically rather than requiring a refresh to initiate the JS driven elements.

Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

W3school for several things, largely when looking at accessing media queries via js and tab-indexing

Describing errors or bugs you encountered while completing your assignment.

Many. These are often addrressed in the code notes, please let me know if this actually unhelpful or overly messy.Although in a nut shell elements wouldn't tab, buttons were visible but inaccessible.
It was also necessary to reorder parts of the code to enable some of the functions to run effectively.
Couldn't use the objects .altThumb properties with the arialabeling or string literals to provide more information as they kept coming back empty. Would like to be able to solve that, but also need more understanding on how to make arias flow well/ be useful rather than wondering if they might be (see line 157 in app.js for an example).

A general note of worth is that at several point I wasted time chasing issues due to inconsitencies in identification tags. Having suffered for it it'll likely be easier to avoid these mistakes in the future.
