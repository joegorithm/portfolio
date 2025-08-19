# Blog Post Title

### Subtitle

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Here's a list:

 - Bullet 1
 - Bullet 2
 - Bullet 3

## Some code:

I created a JavaScript function `sayHello()` that you can call whenever you want to say hello to a friend. Just call the function with a string like `"Albert Einstein"` or `"Jonathan Hill"` as the argument and a delight full message will be logged in the console. 

```
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
```

## Images

### An image in markdown

![New Apple app icons](assets/apple-app-icons-image.png)

### An image in html with custom sizing

<p><img src='assets/serval.jpg' width='400px' alt='A serval' /></p>

### A smaller image in markdown

![100 days Duolingo streak](assets/duolingo-streak.png)

## Testing Links

### Hyperlink

Here is some text. And [Here is a hyperlink](https://jh.codes).

### Plain URL

<https://jh.codes/search?query=pickle>

### Email Address

<test@example.com>

## Testing block quotes

Here's a nice quote:

> "I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me."
> 
> \- **Isaac Newton**

## Testing $KaTeX$

Something like $E = mc^2$ is rendered in inline mode, and the following is in display mode:

$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$

## Some more code:
```python
def calculate_fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    sequence = [0, 1]
    while len(sequence) < n:
        next_num = sequence[-1] + sequence[-2]
        sequence.append(next_num)
    
    return sequence

# Example usage
n = 10
result = calculate_fibonacci(n)
print(f"First {n} Fibonacci numbers:", result)
```

## Embedded Desmos graph

<div id="calculator"></div>

Some more text at the end.