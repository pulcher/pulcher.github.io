---
layout: post
category : Talks
tagline: ""
tags : [testing, TDD, available talks]
comments: false
---
{% include JB/setup %}

# So why do we test?

## Classical Arguments

There are number of resources on the web talking about testing and the benefits.  Most of 
the references that I found seem to slant their talks to some daily flavor of 
__\<insert cool name here\> Driven Design__.  
Although most are slanted toward __unit tests__, I believe this quote from 
Uncle Bob Martin is what sums it up nicely:


> The act of writing a unit test is more an act of design than of verification.  
It is also more an act of documentation than of verification.  The act of writing a unit test 
closes a remarkable number of feedback loops, the least of which is the one pertaining to 
verification of function

In breaking that statement down into something I can understand:

Design
:    The task of writing tests implies the design.  Even if an implicit interface 
is not required by your particular language, the test is describing that interface in code of 
exactly what actions an object is supposed to contain.


Documentation
:    A test is the __living__ documentation of expected operation of the individual method of
an object.  You only have to look at the test to know _exactly_ how to use the object.


Verification
:    A test verifies that the object is behaving as designed.  During the __Red, Green, Refactor__ 
process, a change that breaks the design will fail.

## Why do we really test?

I have set through a good number of sessions, read a few books, had _lively_ discussions with 
coworkers, and watched a ton of videos.  Most tend to go more in depth in the above areas.  
The most useful of these are usually the _lively_ discussions.

In a recent session by [Richard Campbell](https://twitter.com/richcampbell), he stated:

> All software is tested.  It is just a matter of where

I am not sure where that quote originated.  Since I heard it from him, he gets the credit.

Seems everyone has opinions on testing, so here are mine:

### To prevent _Works on my machine_ problems
This has more to deal with __Continuous Integration__ than the actual writing of the tests.  
Every team needs a machine that does nothing but check out the latest code, and execute all 
the tests.  There are ton of tools out there.  Find one you like and implement it.

### Developer confidence
The management types believe I write tests to be able to make some line on a chart move 
in the right direction.  Although moving the line is a nice side effect, I write test so I 
can sleep at night.  Not saying that every test I write is 100% correct. I certainly try to 
make the test actually test the functionality.  

I know testing is __hard__, or certainly can be.  The only way to get better at something 
is to do it, __A LOT__.  

With a high confidence level, _red_ turns into good thing.  It also means that when I find 
sub-standard (crappy) code, I can _improve_ the code and know that I have made the world 
a better place.

### Because you need to know fragile(crappy) your code is
Although writing tests can sometimes take more time and effort than just code only.  If the 
method you are trying to test is that hard, then you may want to take another at the current 
implementation of the object.

### Better written code
Except for the simplest of problems, writing tests and coding to the test will result in 
better written code.  After a good Red, Green, Re-factor session, I can look at my code and 
ask "Who wrote this?  Cuz, there is no way I turned out something this elegant!"  I know 
the _elegant_ is a relative term.

### Speed is just test away
If you are not worrying about "What you broke" or "Where is it breaking now", how much more 
can you get accomplished during the day?  Writing good tests go a long way into making the 
previous statements a reality.  

![Bugs on the wall](/assets/why-we-test/bugs-on-the-wall.png)

### Because you sleep
I know every developer has a mind like a steel trap.  Nothing is ever forgotten and recall 
is instant.  This is all possible because developers are not real people.  Not only sleeping, 
but weekends are a constant problem.  Leaving myself a busted test to start with on Monday 
morning is working out really well.  If it takes 30 minutes on Monday to remember what you 
were doing on Friday, just imagine how long it will take after 1, 2, or 6 months?

# So when should you write a test?
The usual answer is "all the time".  However, that is not very realistic.  The real answer is 
somewhere between "nothing" and "everything".  The holy grail being "100%" 
test coverage.  As awesome as total coverage can be, the value of that level 
of testing usually diminishes greatly somewhere after the 80% to 90% mark.  Just because you 
have tests does not mean have quality code.

> ...Test coverage is a useful tool for finding untested parts of a codebase. Test coverage is of little use as a numeric statement of how good your tests are.
> ![coverage != quality](/assets/why-we-test/coverage-not-quality.png)
> 
> \- [Martin Fowler](http://martinfowler.com/bliki/TestCoverage.html)

So if the only reason you are writing tests is to meet a metric, you probably should stop and 
go do something productive.

### For every bug
If there is a bug identified in production code, it gets a test.  One of the most expensive 
operation in the development cycle than to fix a bug that made it all the way to production.  

\<put in graph of e here with axises of y - cost, x - location in the cycle\>

Some may ask what the real cost is to fix a production bug.  That is a good question, and the 
answer to that is the standard consultant reply _It depends_.  By the time you get to production, 
there are so many in play than just _fixing a minor bug_.  

* Loss of customer confidence
* Loss of Management confidence
* Stopping progress on current projects/stories
* Restarting of the deployment cycle
* etc...

I would say just trying to figure out that cost in some situations just isn't worth the effort.  
So the faster you can identify and correct a bug, the better.

### Edge cases
talk to PEX through crazy stuff at the object.

### Complicated features

### To prove to yourself how things really work.

### Because someone told you you had to.
talk to tests for pass throughs and other non-sense

# Links used in this series

* <http://en.wikipedia.org/wiki/Unit_testing>
* [Uncle Bob Martin Quote](http://www.agiledata.org/essays/tdd.html)