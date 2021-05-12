import { concat, Observable, of, Subscription, timer } from 'rxjs'
import { catchError, filter, map, reduce, startWith, take} from 'rxjs/operators';
import { HttpClient } from './http-client.interface'

/**
 * Welcome to the RXJS Kata!  First off, what is a code kata?  Wikipedia explains:
 * 
 *   "Kata is a term used by some programmers in the Software Craftsmanship movement. Computer programmers
 *    who call themselves "Software Craftsmen" will write 'Kata' - small snippets of code that they write
 *    in one sitting, sometimes repeatedly, often daily, in order to build muscle memory and practise 
 *    their craft." 
 * 
 * ...and that's exactly what you'll do here!  
 * 
 * Instructions:  
 * 
 * The class below (RXJSKatas) contains a number of empty methods.  These methods are tested in a test 
 * suite which you can run by running the `npm test` command from the root directory.  Your job is to 
 * complete each method below such that it passes the tests in the testing suite.  NOTE:  You should do 
 * ALL of your work in this file.  Please DO NOT modify the unit tests.
 */

export class RXJSKatas {
  /**
   * An observable can be thought of kind of like an array, since it represents an ordered list of data.  
   * However, unlike an array, observables are "asynchronous".  This means that they don't necessarily 
   * exist when the observable is created, but may be "emitted" at a later time.  
   * 
   * We'll start off by creating and returning an observable of our own which emits all the values of an 
   * array (provided in the `theArray` parameter).  The easiest way to do this is using the `of` method 
   * (which you can read about here:  https://rxjs-dev.firebaseapp.com/api/index/function/of).
   */
  static createFromArray(theArray: number[]):Observable<number> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }

  /**
   * You can also create an observable by passing a function into the Observable constructor.  In the 
   * method below, use the function specified in the parameters ("theFunction") to create a new 
   * observable and return it.  All you need to do is pass this function into the Observable constructor
   * (remember to use the `new` keyword when invoking your constructor!)
   */
  static createFromFunction(theFunction): Observable<any> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }

  /**
   * So now we can create an observable from a function.  But what exactly does that function look like?
   * Let's investigate!  In the method below, define your own function to pass to the observable 
   * constructor, then return a new observable using that function. You can read more about what this 
   * function should look like here: https://rxjs-dev.firebaseapp.com/guide/observable
   * 
   * HINT: your function should have a `subscriber` parameter, and should specify the values for your
   * observable to emit using `subscriber.next()`.
   */
  static createObservable123Immediate():Observable<number> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }
  /**
   * There are many more ways to create observables (e.g. from DOM events, from ajax requests, etc.)
   * You can read more about "creation operators" (just a fancy term for a function that creates an
   * observable) here: https://rxjs-dev.firebaseapp.com/guide/operators#creation-operators-list 
   * 
   * After you create an observable, you can access the values emitted by the observable using the 
   * .subscribe method.  This method invokes a callback function for each emission from the observable.
   * 
   * Try it out below!  Subscribe to the method with a function that logs each emission from the 
   * observable to the console.
   */

  static subscribeToObservable<Type>(observableToSubscribe: Observable<Type>):void {
    // TODO: Subscribe to the passed-in observable.
  }

  /**
   * The .subscribe method returns a Subscription object.  In order to make your apps as memory-efficient
   * as possible, it's best practice to unsubscribe from your observables once you're done with them. 
   * You can do this by invoking the .unsubscribe method on the Subscription object.
   * 
   * Try it out below!  The following method receives a Subscription object.  Fill in the function with
   * code that unsubscribes from the passed-in subscription.
   */
  static unsubscribeFromObservable<Type>(subscription: Subscription):void {
    return; // TODO: Unsubscribe the passed-in subscription
  }

  /**
   * Let's look now at the .pipe method.  This method allows us to create a sort of "observable pipeline". 
   * The .pipe method returns a new observable from an original observable by passing eachemission from 
   * the observable through a function or functions.  The basic syntax for this is:
   * 
   * obs.pipe(
   *   pipeFunction1(),
   *   pipeFunction2(),
   *   ...
   * )
   * 
   * Try it out below!  This function takes in an observable and a function.  Your job is to return the 
   * result of piping `observableToPipe` through `pipingFunction`.
   */
  static pipeObservableThroughFunction<Type>(observableToPipe: Observable<Type>, pipingFunction: Function): Observable<Type> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }
  
  /**
  * .pipe is commonly used for applying rxjs "transformation operators".  Transformation operators, when
  *  applied to an existing observable, will return a new observable containing the contents of the 
  * original observable, but changed in some predictable way.
  * 
  * This is similar to the higher-order methods on arrays.  Recall that we can apply a map function
  * to an array by invoking the .map() method, e.g.:
  * 
  *   [1,2,3].map(num => num * 2) // returns the array [2,4,6]
  * 
  * it turns out, we can map an observable in a similar way using the map function (a.k.a. the "map
  * operator") from the 'rxjs/operators' package (it's already imported for you at the top of this
  * file.)  In order to apply an operator to an observable, you must use the .pipe method on the 
  * observable class.  The general syntax for this is:
  * 
  *   myObservable.pipe(transformationOperator(operatorArgs))
  * 
  * You can read more about all of the operators here: 
  * https://rxjs-dev.firebaseapp.com/guide/operators#creation-operators-list
  * 
  * Let's give it a try!  The method below accepts an observable of numbers, and returns another 
  * observable of numbers.  Complete this method by using .pipe and the map function to multiply 
  * each number in the originalObs by 2.
  */

  static mapObservable(originalObs: Observable<number>): Observable<number> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }

  /**
   * This pattern works for all of the transformation methods listed in the link below.  Let's try 
   * another one out.  In the function below, use .pipe with the startWith operator to append the 
   * number `numberToAppend` to the observable `observableToAppend`.
   */
  
  static appendToStart<Type>(obs: Observable<Type>, numberToAppend:Type):Observable<Type> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }

  /**
   * Let's try a few more.  Use the filter operator to filter the items in an observable using a callback
   * function. 
   */

  static filterObservable(observableToPipe: Observable<number>): Observable<number> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }


  /**
   * Next, use the reduce operator to filter the items in an observable using a callback function.
   */

  static reduceObservable(observableToPipe: Observable<number>): Observable<number> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }

  /**
   * Let's try something a little more advanced.  In this function, you'll create an observable that emits
   * the numbers 1, 2, and 3 at 50 millisecond intervals, before completing.  To do this, you'll use the
   * `timer` creation function (https://rxjs-dev.firebaseapp.com/api/index/function/timer), as well as the
   * `.pipe` method with the `map` and `take` operators.
   */

  static createObservable123delay():Observable<number> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }
  
  /**
   * Angular uses observables to manage asynchronous data flow.  One common example of this is interacting
   * with back-end services via HTTP.  Angular even comes with a build-in service for managing network 
   * requests called `httpClient`.  This service provides an API for making network requests, and returns 
   * the results of those network calls as observables.  Let's explore it!
   * 
   * In the methods below, the Angular service `httpClient` is injected into your function as an argument.
   * We'll practice using it to make basic network requests to an imaginary website, "quotes4u.com".  In
   * the method below, use the `HttpClient` to issue a GET request to the url 
   * `https://www.quotes4u.com/cervantes`.  
   * 
   * (To read more about `HttpClient`, check out the documentation here: 
   *  https://angular.io/api/common/http/HttpClient)
   */

  static issueGetRequest(httpClient: HttpClient):Observable<object> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }

  /**
   * We can also use the .post() method to issue a POST request.  In the method below, use the .post() 
   * method to post the data `{quote: 'Life is the flower for which love is the honey.'}` to the URL
   * `https://www.quotes4u.com/hugo`.
   */

  static issuePostRequest(httpClient: HttpClient):Observable<object> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }

  /**
   * Next, use the .patch() method with the data `{quote: 'Laughter is the sun that drives winter from the
   * human face.'}` to the URL `https://www.quotes4u.com/hugo/0` to update our previous quote.
   */
  static issuePatchRequest(httpClient: HttpClient):Observable<object> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }
  
  /**
   * Finally, let's delete the quote that we posted by issuing a DELETE request to
   * `https://www.quotes4u.com/hugo/0`
   */
  static issueDeleteRequest(httpClient: HttpClient):Observable<object> {
    return; // TODO: Replace this return value with the value specified in the comment above.
  }

  /**
   * Errors are an inevitability that developers must prepare for, and this is especially true for network
   * interactions where the connectivity of the user is often out of our control.  Luckily, RxJS has a 
   * helpful `catchError` function which we can use to handle any errors with a network request.  Below, 
   * use the httpClient to issue a GET request to `https://www.quotes4u.com/hugo`, then use the provided
   * error handling method `errorHandler` to catch any errors from the request (HINT:  You'll neet to pipe
   * your request through `catchError`!)
   */
  static issueGetRequestCatchError(httpClient: HttpClient, errorHandler: (err, caught) => Observable<object>):Observable<object> {
    return; // TODO: Replace this return value with the value specified in the comment above. 
  }
}