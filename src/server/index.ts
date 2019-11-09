import thing from '@server/thing';

const stub = (x = thing.a) => {
  return `stub called with arg ${x}`;
};

export default stub;
