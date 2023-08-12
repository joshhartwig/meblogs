import { getReadingTime } from '../src/shared/lib/Utility'

test('getReadingTime returns 1 min read time', () => {
  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.';
  const expectedReadingTime = 1;
  const actualReadingTime = getReadingTime(content);
  expect(actualReadingTime).toBe(expectedReadingTime);
});

test('getReadingTime returns 2 min', () => {
  const content = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus 
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus 
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus 
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus 
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus 
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus 
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus 
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus 
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus 
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus 
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.    
    `;
  const expectedReadingTime = 2;
  const actualReadingTime = getReadingTime(content);
  expect(actualReadingTime).toBe(expectedReadingTime);
});


test('getReadingTime returns a value for short text', () => {
  const content = 'Lorem';
  const expectedReadingTime = 1;
  const actualReadingTime = getReadingTime(content);
  expect(actualReadingTime).toBe(expectedReadingTime);
});

test('getReadingTime returns a value for an empty string', () => {
  const content = '';
  const expectedReadingTime = 1;
  const actualReadingTime = getReadingTime(content);
  expect(actualReadingTime).toBe(expectedReadingTime);
});