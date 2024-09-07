const run = (include) => {
  if (typeof include === 'function') {
    include();
  } else if (typeof include === 'object') {
    Object.keys(include).forEach((key) => {
      if (typeof include[key] === 'function') {
        include[key]();
      }
    });
  }
};

export default run;
