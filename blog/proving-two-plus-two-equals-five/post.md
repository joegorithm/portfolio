# Proving 2+2=5

We all know that $2+2=4$, but what if it equaled $5$? The idea of $2+2=5$ has appeared throughout history in [French politics](https://web.archive.org/web/20120115115619/http://www.lewrockwell.com/long/long12.html), [Soviet Union propaganda](https://www.historyextra.com/period/historical-inspiration-george-orwell-nineteen-eighty-four/), the dystopian novel *[Nineteen Eighty-Four](https://www.clarkchargers.org/ourpages/auto/2015/3/10/50720556/1984.pdf)* by George Orwell, and modern-day music. I, however, won't be going in depth on any of this because I've got a difficult equation to prove.

I will present multiple convincing algebraic proofs for $2+2=5$ and elucidate what there is to learn from the math.

## Algebraic Proof #1

Given $x^2-9x+20=0$, prove $2+2=5$:

| Statements          | Reasons                       |
| ------------------- | ----------------------------- |
| $x^2-9x+20=0$       | Given                         |
| $(x-4)(x-5)=0$      | Factor                        |
| $x-4=0$ and $x-5=0$ | Set each factor equal to $0$  |
| $x=4$ and $x=5$     | Solve both equations          |
| $4=5$               | Substitution                  |
| $2+2=5$             | Separate $4$ into two terms   |

??? What is this?
? This is simply a misinterpretation of a quadratic's solutions. The two values the equation yielded does not mean that $x$ equals $4$ and $5$ simultaneously. These are in fact two separate $x$-values, which visually, would be the two $x$-intercepts of the parabola $y=x^2-9x+20$ when graphed. Perhaps we should be labeling the two solutions as $x_1=4$ and $x_2=5$ to avoid this potential confusion altogether.

## Algebraic Proof #2

You probably weren't fooled by the first "proof." Maybe this one will be different. We'll start with $a=b$, so whatever value $a$ is, $b$ is as well, and vice versa.

| Statements                                  | Reasons                        |
| ------------------------------------------- | ------------------------------ |
| $a=b$                                       | Let $a=b$                      |
| $ab=b^2$                                    | Multiply both sides by $b$     |
| $ab-a^2=b^2-a^2$                            | Subtract $a^2$ from both sides |
| $a(b-a)=(b+a)(b-a)$                         | Factor                         |
| $\frac{a(b-a)}{b-a}=\frac{(b+a)(b-a)}{b-a}$ | Divide both sides by $b-a$     |
| $a=b+a$                                     | Reduce                         |
| $3a+a=b+a+3a$                               | Add $3a$ to both sides         |
| $3a+a=a+a+3a$                               | Substitute $b$ for $a$         |
| $4a=5a$                                     | Combine like terms             |
| $2a+2a=5a$                                  | Separate $4a$ into two terms   |
| $\frac{2a}{a}+\frac{2a}{a}=\frac{5a}{a}$    | Divide both sides by $a$       |
| $2+2=5$                                     | Reduce                         |

??? How does this work?
? We know this cannot be true, so what went wrong? Well if $a=b$, then $b-a=0$, and dividing by zero is undefined, so everything after the division is invalid. This points to the importance of abiding by mathematical rules and not dividing by zero!

## Algebraic Proof #3

Here's another one, starting with the simple identity $-20=-20$:

| Statements                                                  | Reasons                               |
| ----------------------------------------------------------- | ------------------------------------- |
| $-20=-20$                                                   | Reflexive property of equality        |
| $16-36=25-45$                                               | Express terms as differences          |
| $4^2-4\times9=5^2-5\times9$                                 | Express terms as squares and products |
| $4^2-4\times9+\frac{81}{4}=5^2-5\times9+\frac{81}{4}$       | Add $\frac{81}{4}$ to both sides      |
| $\left(4-\frac{9}{2}\right)^2=\left(5-\frac{9}{2}\right)^2$ | Factor into perfect squares           |
| $4-\frac{9}{2}=5-\frac{9}{2}$                               | Take the square root of both sides    |
| $4=5$                                                       | Add $\frac{9}{2}$ to both sides       |
| $2+2=5$                                                     | Separate $4$ into two terms           |

??? What went wrong?
? Taking the square root of both sides and assuming that would "cancel" the squared part was where the problem occurred. $\sqrt{a^2}=a$ is true only when $a\ge0$ while $\sqrt{a^2}$ equals $|a|$ for all values of $a$. The fifth step, $\left(4-\frac{9}{2}\right)^2=\left(5-\frac{9}{2}\right)^2$, could be written as $\left(-\frac{1}{2}\right)^2=\left(\frac{1}{2}\right)^2$. Taking the square root of both sides like $\sqrt{\left(-\frac{1}{2}\right)^2}=\sqrt{\left(\frac{1}{2}\right)^2}$ and concluding this means $-\frac{1}{2}=\frac{1}{2}$ is wrong.

## Algebraic Proof #4

Okay, let's try proving this one more way, starting with $4=4$.

| Statements                                            | Reasons                                             |
| ----------------------------------------------------- | --------------------------------------------------- |
| $4=4$                                                 | Reflexive property of equality                      |
| $4=4-\frac{9}{2}+\frac{9}{2}$                         | Subtract and add $\frac{9}{2}$ from right side      |
| $4=\sqrt{\left(4-\frac{9}{2}\right)^2}+\frac{9}{2}$   | Square and take the square root of $4-\frac{9}{2}$  |
| $4=\sqrt{16-36+\frac{81}{4}}+\frac{9}{2}$             | Square binomial                                     |
| $4=\sqrt{-20+\frac{81}{4}}+\frac{9}{2}$               | Combine $16$ and $-36$                              |
| $4=\sqrt{25-45+\frac{81}{4}}+\frac{9}{2}$             | Separate $-20$ into two terms                       |
| $4=\sqrt{\left(5-\frac{9}{2}\right)^2}+\frac{9}{2}$   | Factor trinomial into perfect square                |
| $4=5-\frac{9}{2}+\frac{9}{2}$                         | Square root and square cancel                       |
| $4=5$                                                 | Combine $-\frac{9}{2}$ and $\frac{9}{2}$            |
| $2+2=5$                                               | Separate $4$ into two terms                         |

??? Which step is wrong?
? In step 3, we squared and took the square root of $4-\frac{9}{2}$, which (similar to the previous example) converts the input to a positive value so the equation no longer holds true. $4-\frac{9}{2}=-\frac{1}{2}$ whereas $\sqrt{\left(4-\frac{9}{2}\right)^2}=\frac{1}{2}$. The rest is a lot of fluff, taking advantage of the erroneous equation to eventually arrive at $2+2=5$.

## Conclusion

Although we failed to prove $2+2=5$ because $2+2$ does not equal $5$, has never equaled $5$, and will never equal $5$, I hope you realize that it's imperative to adhere to the laws of mathematics (such as not dividing by zero) unless you wish to mislead others into believing something as outrageous as $2+2=5$.