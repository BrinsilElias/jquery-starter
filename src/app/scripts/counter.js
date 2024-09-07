const counter = () => {
  $('.btn-counter').on('click', () => {
    const $counter = $('.count');
    let count = parseInt($counter.text(), 10);
    count += 1;
    $counter.text(count);
  });
};

export default counter;
