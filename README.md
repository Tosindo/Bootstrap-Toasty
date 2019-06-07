# Bootstrap-Toasty

Bootstrap-Toasty is a jQuery plugin for all your Toasty needs, with a simple call.


## [Examples](https://tosindo.github.io/Bootstrap-Toasty/)


## Usage:

```javascript
$.BToasty("Title", "Body", "Extra", "bottom_middle", true, 3000);
```
![Toast Example #1](assets/imgs/Toast-Example.png)

This is the normal way to use BToasty, with 5 simple parameters which are optional:

* **Title**
* **Body**
* **Extra** (which is the little small text to the right of the title)
* **Position** (which can be 6 different positions, more on that later)
* **Auto hide**
* **Duration**, before auto hiding

#### But there is more!
You can also run it with an object, which you can have more parameters for example:

```javascript
$.BToasty({
    title: "The process as completed!",
    body: "The user was successfully added to the database.",
    extra: "time-auto",
    xbutton: false,
    position: "top_right",
    img: {src: "https://via.placeholder.com/26", alt: "Placeholder Image"},
});
```

This will show a Toast in the top-right like this:

![Toast Example #2](assets/imgs/Toast-Example2.png)

Now you might be wondering what is 'time-auto' in extra?

Well that is an extra feature that is active by default, it will update the seconds on the toast over time, so it will apear for example '~50 seconds ago' or '~2 minutes ago'.

## Todo:

- [ ] Make it so if the Toasts are on mobile they stack better, only have TOP-MIDDLE and BOTTOM-MIDDLE positions.
- [ ] Find a way to stop toasts from overlapping (top-left with bottom-left, etc), either by retaining them, or by finding another position to go to.
- [ ] Add a easy button and prompt toast system, with events.
- [ ] Add easier event system for the toasts, (e.g. On hide, on show, on click, etc)

## Download:

[Release v1.0](https://github.com/Tosindo/Bootstrap-Toasty/releases/latest)


## License


> MIT License
> Copyright (c) 2019 Tosindo
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

