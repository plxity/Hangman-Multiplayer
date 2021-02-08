export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = 'win';

  word.split('').forEach((letter) => {
    if (!correct.includes(letter)) {
      status = '';
    }
  });

  if (wrong.length === 6) status = 'lose';

  return status;
}
