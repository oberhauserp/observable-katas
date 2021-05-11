import { RXJSKatas } from '../observable-katas'
import { hot, cold } from 'jasmine-marbles'
import { TestScheduler } from 'rxjs/testing';
import * as rxjsOps from 'rxjs/operators';
import { Observable, of } from 'rxjs'
import { HttpClientMock } from './httpClient.mock'

let { first, map, filter, reduce, catchError } = rxjsOps
let httpClient;

describe('RXJSKatas', () => {
  let testScheduler: TestScheduler;
  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    
    // create spies 

    spyOn(rxjsOps, 'map').and.callThrough();
    spyOn(rxjsOps, 'reduce').and.callThrough();
    spyOn(rxjsOps, 'filter').and.callThrough();
    spyOn(rxjsOps, 'catchError').and.callThrough();

    map = rxjsOps.map;
    filter = rxjsOps.filter;
    reduce = rxjsOps.reduce;
    catchError = rxjsOps.catchError;
  })
  describe('creating observables', () => {
    it('should be able to create observables from an array using `of()`', () => {
      const actual = RXJSKatas.createFromArray([1, 2, 3]);

      const expected = cold('(abc|)', {a: 1, b: 2, c: 3})
      expect(actual).toBeObservable(expected)
    })
    it('should create observable by passing a function into the constructor.', () => {
      const actual = RXJSKatas.createFromFunction((subscriber) => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
      })

      const expected = cold('(abc)', {a: 1, b: 2, c: 3})

      expect(actual).toBeObservable(expected)
    })

    it('should create an observable that immediately emits 1, 2, 3.', () => {
      const actual = RXJSKatas.createObservable123Immediate();

      const expected = cold('(abc)', {a: 1, b: 2, c: 3});
      expect(actual).toBeObservable(expected)
    })

    // it('should map an observable to multiply each item by 2.', () => {
    //   const actual = RXJSKatas.multiplyObservableByTwo(of(1,2,3,4));
    //   const expected = cold('(abcd|)', {a: 2, b: 4, c: 6, d: 8});
    //   expect(actual).toBeObservable(expected)
    // })

    it('should create observable that emits 1, 2, 3 at 50ms intervals', () => {
      testScheduler.run(({expectObservable}) => {
        const actual = RXJSKatas.createObservable123delay();
        const expectedMarble = 'a 49ms b 49ms (c|)';
        const expectedValues = {a: 1, b: 2, c: 3};
        expectObservable(actual).toBe(expectedMarble, expectedValues);
      })
    })
  })
  describe('Piping observables', () => {
    it('should pipe an observable through a passed-in function', () => {
      testScheduler.run(({expectObservable}) => {
        const obs = of(1,2,3,4,5);
        const actual1 = RXJSKatas.pipeObservableThroughFunction<number>(obs, first);
        const expectedMarble1 = '(a|)';
        const expectedValues1 = {a: 1};
        expectObservable(actual1).toBe(expectedMarble1, expectedValues1);

        const actual2 = RXJSKatas.pipeObservableThroughFunction<number>(obs, map.bind(map, (num) => num*2));
        const expectedMarble2 = '(abcde|)';
        const expectedValues2 = {a: 2, b: 4, c: 6, d: 8, e: 10};
        expectObservable(actual2).toBe(expectedMarble2, expectedValues2);
      })
    })
    // it('should map the observable using a passed-in mapping callback', () => {
    //   testScheduler.run(({expectObservable}) => {
    //     const obs = of(1,2,3,4,5);
    //     const actual = RXJSKatas.mapObservableWithFunction<number>(obs, (num: number, idx: number) => num*2);
    //     const expectedMarble = '(abcde|)';
    //     const expectedValues = {a: 2, b: 4, c: 6, d: 8, e: 10};

    //     expect(map).toHaveBeenCalled();
    //     expectObservable(actual).toBe(expectedMarble, expectedValues);
    //   })
    // })
    // it('should filter the observable through a passed-in filter callback', () => {
    //   testScheduler.run(({expectObservable}) => {
    //     const obs = of(1,2,3,4,5);
    //     const actual = RXJSKatas.filterObservableWithFunction<number>(obs, (num: number, idx: number) => (num % 2 === 0));
    //     const expectedMarble = '(bd|)';
    //     const expectedValues = { b: 2, d: 4, };

    //     expect(filter).toHaveBeenCalled();
    //     expectObservable(actual).toBe(expectedMarble, expectedValues);
    //   })
    // })

    // it('should reduce the observable using a passed-in reduce callback', () => {
    //   testScheduler.run(({expectObservable}) => {
    //     const obs = of(1,2,3,4,5);
    //     const actual = RXJSKatas.reduceObservableWithFunction<number>(obs, (acc: number, cur: number, idx: number) => acc + cur);
    //     const expectedMarble = '(a|)';
    //     const expectedValues = { a: 15 };

    //     expect(reduce).toHaveBeenCalled();
    //     expectObservable(actual).toBe(expectedMarble, expectedValues);
    //   })
    // })

    it('should use map to multiply each number in an observable by two', () => {
      testScheduler.run(({expectObservable}) => {
        const obs = of(1,2,3,4,5);
        const actual = RXJSKatas.mapObservable(obs);
        const expectedMarble = '(abcde|)';
        const expectedValues = {a: 2, b: 4, c: 6, d: 8, e: 10};

        expect(map).toHaveBeenCalled();
        expectObservable(actual).toBe(expectedMarble, expectedValues);
      })
    })

    it('should use filter to filter out each number in an observable that\'s not divisible by two', () => {
      testScheduler.run(({expectObservable}) => {
        const obs = of(1,2,3,4,5,6);
        const actual = RXJSKatas.filterObservable(obs);
        const expectedMarble = '(bdf|)';
        const expectedValues = { b: 2, d: 4, f: 6};

        expect(filter).toHaveBeenCalled();
        expectObservable(actual).toBe(expectedMarble, expectedValues);
      })
    })

    it('should use reduce to sum all the numbers in an observable', () => {
      testScheduler.run(({expectObservable}) => {
        const obs = of(1,2,3,4,5);
        const actual = RXJSKatas.reduceObservable(obs);
        const expectedMarble = '(a|)';
        const expectedValues = { a: 15};

        expect(reduce).toHaveBeenCalled();
        expectObservable(actual).toBe(expectedMarble, expectedValues);
      })
    })
  })
  describe('combination operators', () => {
    it('should append a number onto the beginning of an observable', () => {
      const obs = of(1,2,3);
      const actual = RXJSKatas.appendToStart<number>(obs, 0);
      const expected = cold('(abcd|)', {a: 0, b: 1, c: 2, d: 3});
      expect(actual).toBeObservable(expected)
    })
    it('should combine the latest values from two passed-in observables', () => {
      testScheduler.run(({expectObservable}) => {
        const actual = RXJSKatas.createObservable123delay();
        const expectedMarble = 'a 49ms b 49ms (c|)';
        const expectedValues = {a: 1, b: 2, c: 3};
        expectObservable(actual).toBe(expectedMarble, expectedValues);
      })
    })
  })
  describe('http operations', () => {
    beforeEach(() => {
      httpClient = spyOnAllFunctions(new HttpClientMock());
    })
    it('should issue a get request to https://www.quotes4u.com/cervantes', () => {
      httpClient.get.and.callThrough();
      RXJSKatas.issueGetRequest(httpClient);
      expect(httpClient.get).toHaveBeenCalledOnceWith('https://www.quotes4u.com/cervantes');
    })

    it('should issue a post request to https://www.quotes4u.com/hugo with the data: `{"quote": "Life is the flower for which love is the honey."}`', () => {
      httpClient.post.and.callThrough();
      RXJSKatas.issuePostRequest(httpClient);
      expect(httpClient.post).toHaveBeenCalledOnceWith('https://www.quotes4u.com/hugo', {quote: "Life is the flower for which love is the honey."});
    })

    it('should issue a patch request to https://www.quotes4u.com/hugo with the data: `{"quote": "Laughter is the sun that drives winter from the human face."}`', () => {
      httpClient.patch.and.callThrough();
      RXJSKatas.issuePatchRequest(httpClient);
      expect(httpClient.patch).toHaveBeenCalledOnceWith('https://www.quotes4u.com/hugo', {quote: "Laughter is the sun that drives winter from the human face."});
    })

    it('should issue a delete request to https://www.quotes4u.com/hugo/0', () => {
      httpClient.delete.and.callThrough();
      RXJSKatas.issueDeleteRequest(httpClient);
      expect(httpClient.delete).toHaveBeenCalledOnceWith('https://www.quotes4u.com/hugo/0');
    })

    it('should issue a get request to https://www.quotes4u.com/hugo and catch any resulting errors', () => {
      httpClient.get.and.callThrough();
      RXJSKatas.issueGetRequestCatchError(httpClient, (err, caught) => of([]));
      expect(httpClient.get).toHaveBeenCalledOnceWith('https://www.quotes4u.com/hugo');
      expect(catchError).toHaveBeenCalled();
    })
  })
})