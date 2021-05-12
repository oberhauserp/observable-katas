# Observables Kata

## Introduction
Welcome to the RXJS Kata!  First off, what is a code kata?  [Wikipedia](https://en.wikipedia.org/wiki/Kata#Outside_martial_arts) explains:
 
> Kata is a term used by some programmers in the Software Craftsmanship movement. Computer programmers who call themselves "Software Craftsmen" will write 'Kata' - small snippets of code that they write in one sitting, sometimes repeatedly, often daily, in order to build muscle memory and practise their craft. 


...and that's exactly what you'll do here!  

## Instructions
1. fork and clone this repository
2. Install all the dependencies for this project by opening a terminal and running `npm install` from the project root.
3. run the tests using the command `npm test`
    * This will create a new directory called `dist` and will compile all typescript code into that directory
    * It will run the test suite, and present you with the first failing test.
4. Open the `src/observable-katas.ts` file, read through the comments, and write the code necessary to make the first test pass.  Run the test suite again using `npm test`.
5. After the first test passes, you will see the second failing test appear in your terminal.  Again, write the code in `src/observable-katas.ts` necessary to make this test pass.
6. Continue in this manner, modifying `src/observable-katas.ts` and running `npm test`, until all of the tests are passing.

**NOTE**:  you _do not_ need to modify any file in this repository other than `src/observable-katas.ts`.  Please work only in this file, and only add code in the designated places (signified with `TODO` comments.)

## Overview of methods

Here is a list of all the methods you're expected to complete in this exercise.

| method name                     | description                                                                                                     | parameters                                                               | returns            |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|--------------------|
| `createFromArray`               | Create an observable from an array of numbers                                                                   | theNumber: number[]                                                      | Observable\<number\> |
| `createFromFunction`            | Create an observable from a function                                                                            | theFunction: function                                                    | Observable\<any\>    |
| `createObservable123Immediate`  | Create an observable that immediately emits the numbers 1, 2, and 3                                             | (none)                                                                   | Observable\<number\> |
| `subscribeToObservable`         | Subscribe to an observable provided as a parameter to the method                                                | \<Type\>, observableToSubscribe\<br\>: Observable\<Type\>                      | (none)             |
| `unsubscribeFromObservable`     | Unsubscribe from a subscription provided as a parameter to the method                                           | \<Type\>, \<br\>subscription: Subscription                                   | (none)             |
| `pipeObservableThroughFunction` | Pipe an observable through a function                                                                           | \<Type\>, \<br\>observableToPipe: Observable\<Type\>, pipingFunction: Function | Observable\<Type\>   |
| `mapObservable`                 | Use the `map` operator to multiply each number in an observable by 2                                            | originalObs: Observable \<number\>                                         | Observable\<number\> |
| `appendToStart`                 | Use the `startWith` operator to append something to the beginning of an observable                              | \<Type\> obs: Observable\<Type\>, numberToAppend: Type                       | Observable\<Type\>   |
| `filterObservable`              | Filter out the odd numbers in an observable using the `filter` operator                                         | observableToFilter: Observable\<number\>                                   | Observable\<number\> |
| `reduceObservable`              | Sum all the numbers in an observable using the `reduce` operator                                                | observableToReduce: Observable\<number\>                                   | Observable\<number\> |
| `createObservable123delay`      | Create an observable that emits the numbers 1, 2, and 3 at 50ms intervals                                       | (none)                                                                   | Observable\<number\> |
| `issueGetRequest`               | Use Angular's httpClient to issue a GET request.                                                                | httpClient: HttpClient                                                   | Observable\<object\> |
| `issuePostRequest`              | Use Angular's httpClient to issue a POST request.                                                               | httpClient: HttpClient                                                   | Observable\<object\> |
| `issuePatchRequest`             | Use Angular's httpClient to issue a PATCH request.                                                              | httpClient: HttpClient                                                   | Observable\<object\> |
| `issueDeleteRequest`            | Use Angular's httpClient to issue a DELETE request.                                                             | httpClient: HttpClient                                                   | Observable\<object\> |
| `issueGetRequestCatchError`     | Use Angular's httpClient to issue a GET request, and catch any resulting errors using the `catchError` operator | httpClient: HttpClient, errorHandler: Function                           | Observable\<object\> |